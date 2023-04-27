'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InformacionSistemas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logo: {
        type: Sequelize.STRING
      },
      quienes_somos: {
        type: Sequelize.STRING
      },
      mision: {
        type: Sequelize.STRING
      },
      vision: {
        type: Sequelize.STRING
      },
      celular: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      facebook: {
        type: Sequelize.STRING
      },
      twitter: {
        type: Sequelize.STRING
      },
      instagram: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('InformacionSistemas');
  }
};