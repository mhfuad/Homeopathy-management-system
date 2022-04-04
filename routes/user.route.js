module.exports = app => {
    const user = require('../controllers/user.controller');
    var router = require("express").Router();

    router.get('/', (req, res)=>{
        res.send('all user');
    })

    app.use('/api/user', router);
}