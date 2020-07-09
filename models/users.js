'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.hasMany(models.EmergencyContact, {foreignKey: 'userId'});
    }
  };
  User.init({
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    userName: DataTypes.TEXT,
    dob: DataTypes.DATEONLY,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};