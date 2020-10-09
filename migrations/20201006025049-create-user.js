'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usertype: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0
      },
      username: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      name: {
        type: Sequelize.STRING(100),
      },
      phone: {
        type: Sequelize.STRING(100),
      },
      org: {
        type: Sequelize.STRING(100),
      },
      facebook: {
        type: Sequelize.STRING(100),
      },
      twitter: {
        type: Sequelize.STRING(100),
      },
      linkedin: {
        type: Sequelize.STRING(100),
      },
      instagram: {
        type: Sequelize.STRING(100),
      },
      website: {
        type: Sequelize.STRING(100),
      },
      img: {
        type: Sequelize.STRING(100),
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};