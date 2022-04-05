module.exports = app => {
    const patient = require('../controllers/patient.controller');
    var router = require("express").Router();

    router.get('/', patient.getAllPatient);
    router.post('/', patient.createPatient);
    router.get('/:id', patient.getPatient);
    router.delete('/:id', patient.deletePatient);
    router.put('/:id', patient.updatePatient);
    router.post('/search-name', patient.searchPatient);

    app.use('/api/patient', router);
}