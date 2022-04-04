const models = require('../models');
var user = models.user;

exports.getAllUser = async (req, res) => {
    const users = await user.findAll();
    res.send(users);
}

exports.createUser = (req, res) => {
    // const user = user.create({
    //     username: "fuad",
    //     email: "fuad@gmail.com",
    //     password: "esscsm",
    // })
    res.send(req);    
}