// 'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('EmergencyContacts', [
      {
        name: 'Josh Doe',
        phoneNumber: '345 - 456 - 6789',
        relationship: 'brother',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jack',
        phoneNumber: '345 - 456 - 6789',
        relationship: 'son',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Marsha ',
        phoneNumber: '770 - 345 - 1234',
        relationship: 'mother',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ashley',
        phoneNumber: '345 - 456 - 6789',
        relationship: 'sister',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Wes',
        phoneNumber: '123 - 123 - 4567',
        relationship: 'DIR',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('EmergencyContacts', null, {});

  }
};
