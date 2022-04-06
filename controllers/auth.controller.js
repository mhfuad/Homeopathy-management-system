const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const models = require('../models');
var User = models.user;

exports.registration = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: password
    })

    const token = jwt.sign({id: user.id}, user.email)
    res.send({token: token})
}

exports.login = async (req, res) => {
    const user = await User.findOne({
        where:{
            email: req.body.email
        }
    })
    //email not found
    if(!user) {
        res.send("Unauthenticated")
    }
    const match = await bcrypt.compare(req.body.password, user.password)

    if(match){
        const token = jwt.sign({id: user.id}, user.email)
        res.send({token: token})
    }else{
        res.send("not")
    }
    
}