require('dotenv').config();
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const Sequelize = require('sequelize');
const userModel = require("../models/users");
const AddressModel = require("../models/addresses");
const productsModel = require("../models/products");
const productImagesModel = require("../models/productImages");
const orderModel = require("../models/orders");


let classes = [userModel, AddressModel, productsModel, productImagesModel, orderModel];

const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
     {
       host: DB_HOST,
       dialect: 'mysql'
     }  
);

classes.forEach(el => el(sequelize));

const { Users, Addresses, Products, ProductImages, Orders } = sequelize.models;

Users.hasMany(Addresses);
Addresses.belongsTo(Users);

Products.hasMany(ProductImages);
ProductImages.belongsTo(Products);

Users.hasMany(Orders);
Orders.belongsTo(Users);

Addresses.hasMany(Orders);
Orders.belongsTo(Users);

module.exports = { 
    sequelize,
    Users
}