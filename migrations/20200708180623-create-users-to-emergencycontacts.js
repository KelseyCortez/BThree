'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  return queryInterface.createTable('UsersEmergencyContacts', { 
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    usersId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }

    }
   });
    
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('UsersEmergencyContacts');
  }
};
