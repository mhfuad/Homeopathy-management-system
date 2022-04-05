'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  patient.init({
    name: DataTypes.STRING,
    father_name: DataTypes.STRING,
    mobile1: DataTypes.STRING,
    age: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'patient',
  });
  return patient;
};