'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
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
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: "email"
      },
      phoneNumber: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      mobile: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      departament: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      verificationCode: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      emailChecked: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      cashforceAdm: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 0
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
    await queryInterface.dropTable('users');
  }
};