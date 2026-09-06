// src/models/User.ts

import { database } from "../database";
import { DataTypes, Model, Optional } from "sequelize";
import bcrypt from "bcrypt";
import { EpisodeInstance } from "./Episode";

type CheckPasswordCallBack = (err?: Error, isSame?: boolean) => void;

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  birth: Date;
  email: string;
  password: string;
  role: "admin" | "user";
}

export interface UserCreationAttributes extends Optional<User, "id"> {}

// export interface UserInstance
//   extends Model<User, UserCreationAttributes>,
//     User {
//       checkPassword:(password: string, callbackfn: CheckPasswordCallBack) => void
//     }

export interface UserInstance
  extends Model<UserCreationAttributes, UserCreationAttributes>,
    User {
  Episodes: EpisodeInstance[];
  checkPassword: (password: string, callbackfn: CheckPasswordCallBack) => void;
}

export const User = database.define<UserInstance, User>(
  "users",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    birth: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isIn: [["admin", "user"]],
      },
    },
  },
  {
    hooks: {
      beforeSave: async (user) => {
        if (user.isNewRecord || user.changed("password")) {
          user.password = await bcrypt.hash(user.password.toString(), 10);
        }
      },
    },
  }
);

//                                        Recebe uma senha e depois uma função que será   executtada depois que realizar a verificação
// -usamos o compare do próprio bcrypt para realizar a comparação:

User.prototype.checkPassword = function (password: string, callbackfn: (err: Error | undefined, isSame: boolean) => void) {
  bcrypt.compare(password, this.password, (err, isSame) => {
    if (err) {
      callbackfn(err, false)
    } else {
      callbackfn(err, isSame)
    }
  })
}