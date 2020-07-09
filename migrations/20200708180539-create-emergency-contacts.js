'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EmergencyContacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      
      phoneNumber: {
        type: Sequelize.TEXT
      },
      relationship: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'cascade',

      }
    
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('EmergencyContacts');
  }
};