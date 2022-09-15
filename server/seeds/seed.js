const db = require("../config/connection");
const { User, Product, Category } = require("../models");

const productData = require("./productData.json");
const categoryData = require("./categoryData.json");

db.once("open", async () => {
    await Category.deleteMany({});
    await Product.deleteMany({});

    const category = await Category.insertMany(categoryData);
    console.log("categories seeded!", category);

    for (i=0; i< productData.length; i++) {
        const singleCatId = await(Category.find({name: productData[i].category_name}))
        // console.log(singleCatId)
        productData[i].category = singleCatId[0]._id
        // console.log(productData[i])
        const products = await Product.create(productData[i]);
    }
    
    console.log("products seeded!");

    process.exit(0);

});