const { DataTypes } = require('sequelize');

const Addresses = ( sequelize ) => {
    sequelize.define("Addresses", { 
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postalCode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        street: {
            type: DataTypes.STRING,
            allowNull:false
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })
}

module.exports = {
    Addresses
}