const {Router} = require('express');

const usersRouter = Router();

usersRouter.post('/', (req, res) => {
    try {
        res.send('NIY: Esta ruta postea un user')
    } catch (error) {
        res.send('NIY: Mensaje de error')
    }
});

module.exports = {usersRouter};