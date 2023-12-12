const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Users} = require('../config/db');

const createUser = async (firstName, lastName, email, password) => {

    if(!firstName || !lastName || !email || !password) throw new Error("Falta proporcionar datos")

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Users.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
    });

    return {message:"User created successfully", user};
}

module.exports = { createUser };