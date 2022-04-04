
const bcrypt = require("bcrypt");
const models = require('../models');
var User = models.user;

exports.getAllUser = async (req, res) => {
    const users = await User.findAll();
    res.send(users);
}

exports.createUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: password
    })
    res.json(user.id)
}

exports.getUser = async (req, res) => {
    const user = await User.findAll({
        where: {
            id: req.params.id
        }
    });
    res.json(user)
}

exports.updateUser = async (req, res) => {
    const user = await User.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    if(user){
        res.send("update success");
    }
}

exports.deleteUser = async (req, res) => {
    User.destroy({
        where: {
            id : req.params.id
        }
    })
    res.send("delete success")
}