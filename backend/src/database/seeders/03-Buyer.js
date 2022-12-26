module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('buyers', 
    [
      {
        name: 'SACADO 001',
        tradingName: 'SACADO 001 LTDA',
        cashforceTax: '0',
        responsibleName: null,
        responsibleEmail: null,
        responsiblePosition: null,
        responsiblePhone: null,
        responsibleMobile: null,
        website: null,
        postalCode: null,
        address: null,
        number: null,
        complement: null,
        neighborhood: null,
        city: null,
        state: null,
        phoneNumber: null,
        situation: null,
        situationDate: null,
        createdAt: new Date('2020-10-29 21:20:33'), 
        updatedAt: new Date('2020-10-29 21:20:34'),
        cnpjId: 1,
        confirm: true,
        email: null,
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('buyers', null, {}),
};