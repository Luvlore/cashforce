module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', 
    [
      {
        id: 1,
        name: 'ALLAN SOUZA',
        email: 'allan@cashforce.com.br',
        phoneNumber: null,
        mobile: null,
        departament: null,
        verificationCode: '',
        emailChecked: true,
        createdAt: new Date('2020-10-01 21:31:37'),
        updatedAt: new Date('2020-10-01 22:41:23'),
        cashforceAdm: true,
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};