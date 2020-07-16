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
      models.User.hasMany(models.Message, {as: 'Recipient', foreignKey: 'RecipientId'})
      models.User.hasMany(models.Message, {as: 'Sender', foreignKey: 'SenderId'})
    }
  };
  User.init({
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    userName: DataTypes.TEXT,
    dob: DataTypes.DATEONLY,
    email: DataTypes.TEXT,
    phrase: DataTypes.TEXT,
    password: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};