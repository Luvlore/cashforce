'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      orderNfId: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: "orderNfId"
      },
      orderNumber: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      orderPath: {
        type: Sequelize.STRING(255),
        allowNull: true,
        unique: "orderPath"
      },
      orderFileName: {
        type: Sequelize.STRING(255),
        allowNull: true,
        unique: "orderFileName"
      },
      orderOriginalName: {
        type: Sequelize.STRING(255),
        allowNull: true,
        unique: "orderOriginalName"
      },
      emissionDate: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      pdfFile: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      emitedTo: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      nNf: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      CTE: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      value: {
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
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      buyerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'buyers',
          key: 'id'
        }
      },
      providerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'providers',
          key: 'id'
        }
      },
      orderStatusBuyer: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: "0"
      },
      orderStatusProvider: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: "0"
      },
      deliveryReceipt: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      cargoPackingList: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      deliveryCtrc: {
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
    await queryInterface.dropTable('orders');
  }
};