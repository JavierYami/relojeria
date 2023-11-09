const { DataTypes } = require('sequelize');

const ProductImages = ( sequelize ) => {
    sequelize.define("ProductImages", { 
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },  
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })
}

module.exports = ProductImages
