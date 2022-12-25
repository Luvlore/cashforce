'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      tax: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      tariff: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      adValorem: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      float: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      iof: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false
      },
      paymentStatusSponsor: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      paymentStatusProvider: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'orders',
          key: 'id'
        }
      },
      sponsorId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'sponsors',
          key: 'id'
        }
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
    await queryInterface.dropTable('offers');
  }
};