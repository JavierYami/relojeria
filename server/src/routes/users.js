const {Router} = require('express');
const {createUser, login} = require('../controllers/users');

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
    try {
        const {firstName, lastName, username , email, password} = req.body;
        const user = await createUser(firstName, lastName, username , email, password);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

usersRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await login(email, password);
        res.status(200).send(token);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = {usersRouter};