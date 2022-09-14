const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order } = require("../models");
const { signToken } = require("../utils/auth");
const sendmail = require("../utils/sendmail");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("category");
    },
    product: async (parent, { _id }) => {
      const product = await Product.findById(_id).populate("category");
      !product.name ? (product.name = product.description) : "-";
      return product;
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        //clean out orders with no product
        user.orders = user.orders.filter(
          (order) => order.products && order.products.length > 0
        );

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products");

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      sendmail(
        `${user.email}`,
        `${user.email} has been successfully registered on MernCaveHQ`,
        "You are well on your journey to lighting the cave",
        `mmasonmccoy@gmail.com, londono.alberto110@gmail.com, t.k.hobbes43@gmail.com, tonypoku@gmail.com`
      );

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      try {
        console.log("products@server: ", products);
        const product_ids = products.map((product) => product._id);
        console.log("product_ids@server: ", product_ids);
        if (context.user) {
          const order = new Order({ products: product_ids });
          console.log("order@server: ", order);

          await User.findByIdAndUpdate(context.user._id, {
            $push: { orders: order },
          });

          sendmail(
            `${context.user.email}`,
            `Your MerncaveHQ order ${order._id}`,
            `<p>
          <h2>Hello ${context.user.email.split("@")[0]}</h2>
          <br>Thank you for shopping with us. We'll send a confirmation when your items have shipped
          <br><H2>Details:</H2>
          <hr>
          <ul>
            ${products.map((product) => {
              console.log("product_detail", product);

              return (
                "<li>" +
                product.quantity +
                " units of " +
                product.name +
                " Total: " +
                product.price +
                "</li>"
              );
            })}
          </ul>
          </p>`,
            `mmasonmccoy@gmail.com, londono.alberto110@gmail.com, t.k.hobbes43@gmail.com, tonypoku@gmail.com`
          );

          return order;
        }
      } catch (error) {
        console.error(error);
      }

      throw new AuthenticationError("Not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
