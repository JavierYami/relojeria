require('dotenv').config();
const {PORT} = process.env || 3001;
const {sequelize} = require('./src/config/db')

sequelize.sync({ force: true }).then(()=>{
    console.log('Ready');
}).catch(error=>console.log(error));

