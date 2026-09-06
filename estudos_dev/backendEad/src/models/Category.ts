// src/models/Category.ts

import { DataTypes, Model, Optional } from 'sequelize';
import { database} from '../database'; // Certifique-se de importar a instância correta do Sequelize

export interface CategoryAttributes {
  id: number;
  name: string;
  position: number;
}

export interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

export interface CategoryInstance extends Model<CategoryAttributes, CategoryCreationAttributes>, CategoryAttributes {}

export const Category = database.define<CategoryInstance, CategoryCreationAttributes>('Category', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  position: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER
  }
});

export default Category;
