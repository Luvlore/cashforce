module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('cnpjs', 
    [
      {
        cnpj: '00000000000001',
        companyType: '2',
        createdAt: new Date('2020-10-29 21:20:33'), 
        updatedAt: new Date('2020-10-29 21:20:33'),
      },
      { 
        cnpj: '00000000000002',
        companyType: '1',
        createdAt: new Date('2020-10-29 21:20:33'), 
        updatedAt: new Date('2020-10-29 21:20:33'),
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('cnpjs', null, {}),
};