const db = require("../config/connection");
const { User, Product, Category } = require("../models");

const productData = require("./productData.json");
const categoryData = require("./categoryData.json");

db.once("open", async () => {
    await Product.deleteMany({});

    const category = await Category.insertMany(categoryData);
    const products = await Product.insertMany(productData);
    
    console.log("categories seeded!", category);
    console.log("products seeded!", products);

    process.exit(0);

});