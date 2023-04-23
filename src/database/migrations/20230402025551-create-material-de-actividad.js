'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Material_De_Actividads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_archivo: {
        type: Sequelize.STRING
      },
      tipo_archivo: {
        type: Sequelize.STRING
      },
      prioridad: {
        type: Sequelize.INTEGER
      },
      // para corregir el expositor
      ExpositorId: {
        type: Sequelize.INTEGER
      },
      Actividad_EventoId : {
        type : Sequelize.INTEGER
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
    await queryInterface.dropTable('Material_De_Actividads');
  }
};