'use strict';

module.exports = {
  async up(queryInterface, Sequelize) { //criar a tabela 
    await queryInterface.createTable('favorites', {
      //passamos agora as opções da tabela:
      user_id: { //colunas
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      course_id: {
        allowNull: false,
        primaryKey: true, //chave primária composta
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'courses', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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

  async down(queryInterface, Sequelize) { //desfazer a tabela
    await queryInterface.dropTable('favorites')
  }
};
