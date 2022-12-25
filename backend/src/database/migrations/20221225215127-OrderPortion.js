'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orderportions', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nDup: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      dVenc: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      vDup: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      availableToMarket: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 1
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'orders',
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
    await queryInterface.dropTable('orderportions');
  }
};