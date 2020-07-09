'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      userName: 'JD87',
      dob: 87 - 07 - 05,
      password: 'password',
      email: 'jdoe@yahoo.com',
      createdAt: new Date(),
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      userName: 'Jane123',
      dob: 83 - 03 - 09,
      password: 'password123',
      email: 'janedoe@yahoo.com',
      createdAt: new Date(),
    },
    {
      firstName: 'David',
      lastName: 'Foster',
      userName: 'Bikerguy654',
      dob: 85 - 04 - 01,
      password: 'password789',
      email: 'dfost@yahoo.com',
      createdAt: new Date(),
    },
    {
      firstName: 'Parker',
      lastName: 'Jackson',
      userName: 'Pjacks56',
      dob: 81 - 02 - 10,
      password: 'password1111',
      email: 'pj@gmail.com',
      createdAt: new Date(),
    },
    {
      firstName: 'Zahria',
      lastName: 'Shannon',
      userName: 'Zzzsh90',
      dob: 92 - 09 - 02,
      password: 'password3434',
      email: 'zahria@yahoo.com',
      createdAt: new Date(),
    },


    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

  }
};
