const { DataTypes } = require('sequelize');

const Orders = ( sequelize ) => {
    sequelize.define("Orders", { 
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        shippingDetails: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        orderStatus: {
            type: DataTypes.STRING
        },
    })
}

module.exports = Orders