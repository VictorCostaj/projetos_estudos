// src/database/migrations/XXXXXXXXXXXXXX-create-episodes-table.js

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('episodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      synopsis: {
        allowNull: false,
        type: Sequelize.DataTypes.TEXT
      },
      order: { // ordernar episódios
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      video_url: {  //url de vídeo -> não salva no banco de dado ---> salva a url
        type: Sequelize.DataTypes.STRING
      },
      seconds_long: {  //duração do episódio
        type: Sequelize.DataTypes.INTEGER
      },
      course_id: { // chave  relacionamento 1-para muitos
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'courses', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  //exlcuir a tabela
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('episodes')
  }
};