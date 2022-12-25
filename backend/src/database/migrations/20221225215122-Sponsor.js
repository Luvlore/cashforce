'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sponsors', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      tradingName: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      cashforceTax: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      responsibleName: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      responsibleEmail: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      responsiblePosition: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      responsiblePhone: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      responsibleMobile: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      website: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      postalCode: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      address: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      number: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      complement: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      neighborhood: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      city: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      state: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      bank: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      bankAgency: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      account: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      phoneNumber: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      situation: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      situationDate: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'cnpjs',
          key: 'id'
        }
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sponsors');
  }
};