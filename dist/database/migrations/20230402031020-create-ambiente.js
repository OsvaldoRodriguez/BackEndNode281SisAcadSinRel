'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ambientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo_ambiente: {
        type: Sequelize.STRING
      },
      area_ambiente: {
        type: Sequelize.DECIMAL
      },
      direccion_ambiente: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      InstitucionId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ambientes');
  }
};