const { DataTypes } = require('sequelize');

const Products = ( sequelize ) => {
    sequelize.define("Products", { 
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })
}

module.exports = {
    Products
}