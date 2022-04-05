const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const models = require('../models');
var Patient = models.patient;

exports.getAllPatient = async (req, res) => {
    const patient = await Patient.findAll();
    res.send(patient);
}

exports.createPatient = async (req, res) => {
    
    const user = await Patient.create({
        name: req.body.name,
        father_name: req.body.father_name,
        mobile1: req.body.mobile1,
        age: req.body.age
    })
    res.json(user.id)
}

exports.getPatient = async (req, res) => {
    const patient = await Patient.findAll({
        where: {
            id: req.params.id
        }
    });
    res.json(patient)
}

exports.updatePatient = async (req, res) => {
    const patient = await Patient.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    if(patient){
        res.send("update success");
    }
}

exports.deletePatient = async (req, res) => {
    Patient.destroy({
        where: {
            id : req.params.id
        }
    })
    res.send("delete success")
}

exports.searchPatient = async (req, res) => {
    const patiant = await Patient.findAll({
        where: {
            name: { [Op.substring]: `${req.body.name}`}
        }
    })
    res.send(patiant);
}