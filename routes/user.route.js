module.exports = app => {
    const user = require('../controllers/user.controller');
    var router = require("express").Router();

    router.get('/', user.getAllUser);
    router.post('/', user.createUser);
    router.get('/:id', user.getUser);
    router.delete('/:id', user.deleteUser);
    router.put('/:id', user.updateUser);

    app.use('/api/user', router);
}