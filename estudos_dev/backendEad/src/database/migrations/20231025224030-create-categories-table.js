// src/database/migrations/XXXXXXXXXXXXXX-create-categories-table

'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('categories', {
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
    position: {
      allowNull: false,
      unique: true,
      type: Sequelize.DataTypes.INTEGER
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DataTypes.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DataTypes.DATE
    }
  });
}
export async function down(queryInterface, _Sequelize) {
  await queryInterface.dropTable('categories');
}