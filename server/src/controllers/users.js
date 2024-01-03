const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Users} = require('../config/db');

const createUser = async (firstName, lastName, username, email, password) => {

    if(!firstName || !lastName || !username || !email || !password) throw new Error("Falta proporcionar datos")

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Users.create({
        firstName,
        lastName,
        email,
        username,
        password: hashedPassword
    });

    return {message:"User created successfully", user};
}

const login = async (email, password) => {

    const user = await Users.findOne({ where:{ email } });

    if (!user) throw new Error("No existe un usuario con este correo");

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) throw new Error("Contraseña incorrecta");

    const token = jwt.sign({ userId: user.id }, 'secreto', { expiresIn: '1h' });

    return token;
}

module.exports = { createUser, login };