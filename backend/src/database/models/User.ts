import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  phoneNumber?: string;
  mobile?: string;
  departament?: string;
  verificationCode?: string;
  emailChecked?: number;
  createdAt: Date;
  updatedAt: Date;
  cashforceAdm?: number;
}

export type UserPk = "id";
export type UserId = User[UserPk];
export type UserOptionalAttributes = "id" | "phoneNumber" | "mobile" | "departament" | "verificationCode" | "emailChecked" | "createdAt" | "updatedAt" | "cashforceAdm";
export type UserCreationAttributes = Optional<UserAttributes, UserOptionalAttributes>;

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  id!: number;
  name!: string;
  email!: string;
  phoneNumber?: string;
  mobile?: string;
  departament?: string;
  verificationCode?: string;
  emailChecked?: number;
  createdAt!: Date;
  updatedAt!: Date;
  cashforceAdm?: number;
}

User.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: "email"
  },
  phoneNumber: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  mobile: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  departament: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  verificationCode: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  emailChecked: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: 0
  },
  cashforceAdm: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: 0
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
}, {
  sequelize: sequelizeConnection,
  tableName: 'users',
  timestamps: true,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
    {
      name: "email",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "email" },
      ]
    },
  ]
});
