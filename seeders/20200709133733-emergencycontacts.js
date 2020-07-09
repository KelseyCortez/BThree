'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Emergencycontacts', [
      {
       name: 'Josh Doe',
       phoneNumber: 345-456-6789,
       relationship: 'brother',
       userId: 5,
      },
      {
        name: 'Jack',
        phoneNumber: 345-456-6789,
        relationship: 'son',
        userId: 3,
       },
       {
        name: 'Marsha ',
        phoneNumber: 770-345-1234,
        relationship: 'mother',
        userId: 1,
       },
       {
        name: 'Ashley',
        phoneNumber: 345-456-6789,
        relationship: 'sister',
        userId: 2,
       },
       {
        name: 'Wes',
        phoneNumber: 123-123-4567,
        relationship: 'DIR',
        userId: 4,
       },
], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Emergencycontacts', null, {});
    
  }
};
