const {Router} = require('express');
const {createUser} = require('../controllers/users');

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;
        const user = await createUser(firstName, lastName, email, password);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

usersRouter.post('/login', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

module.exports = {usersRouter};