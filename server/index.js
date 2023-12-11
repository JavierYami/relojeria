require('dotenv').config();
const {PORT} = process.env || 3001;
const {sequelize} = require('./src/config/db');
const {app} = require('./src/config/express');

sequelize.sync({ force: true }).then(()=>{
    console.log('Ready');
    app.listen(PORT, () => {
        console.log(`Servidor Express escuchando en el puerto ${PORT}`);
      });
}).catch(error=>console.log(error));

