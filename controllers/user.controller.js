const models = require('../models');
var User = models.user;

exports.getAllUser = async (req, res) => {
    const users = await User.findAll();
    res.send(users);
}

exports.createUser = async (req, res) => {
    const user = await User.create(req.body)
    console.log(user.id)
    res.json(user)
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