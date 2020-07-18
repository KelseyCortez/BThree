// 'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      userName: 'JD87',
      dob: new Date(1987, 07, 05),
      password: 'password',
      email: 'jdoe@yahoo.com',
      phrase: 'get out of my swamp',
      lat: '',
      lng: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      userName: 'Jane123',
      dob: new Date(1983, 03, 09),
      password: 'password123',
      email: 'janedoe@yahoo.com',
      phrase: 'how about taco bell',
      lat: '',
      lng: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'David',
      lastName: 'Foster',
      userName: 'Bikerguy654',
      dob: new Date(85, 04, 01),
      password: 'password789',
      email: 'dfost@yahoo.com',
      phrase: 'Hello fellow bikers',
      lat: '',
      lng: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Parker',
      lastName: 'Jackson',
      userName: 'Pjacks56',
      dob: new Date(1981, 02, 10),
      password: 'password1111',
      email: 'pj@gmail.com',
      phrase: 'I need to make a call',
      lat: '',
      lng: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Zahria',
      lastName: 'Shannon',
      userName: 'Zzzsh90',
      dob: new Date(1992, 09, 02),
      password: 'password3434',
      email: 'zahria@yahoo.com',
      phrase: "That's pretty cool",
      lat: '',
      lng: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },


    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});

  }
};
