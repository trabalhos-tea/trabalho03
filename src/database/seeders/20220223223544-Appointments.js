'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Appointments',
      [
        {
          physicianId: 1,
          patientId: 1,
          appoinmentDate: '2022-02-23',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          physicianId: 1,
          patientId: 2,
          appoinmentDate: '2022-02-23',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

        },
        {
          physicianId: 2,
          patientId: 1,
          appoinmentDate: '2022-02-23',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

        },
        {
          physicianId: 2,
          patientId: 4,
          appoinmentDate: '2022-02-23',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

        },
        {
          physicianId: 3,
          patientId: 2,
          appoinmentDate: '2022-02-23',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

        },
        {
          physicianId: 3,
          patientId: 6,
          appoinmentDate: '2022-02-23',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ],
      {});

  },

  async down(queryInterface, Sequelize) {
    //bulkDelete
    await queryInterface.bulkDelete('Appointments', null, {});
  }
};
