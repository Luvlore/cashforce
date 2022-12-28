import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

export interface CnpjAttributes {
  id: number;
  cnpj: string;
  companyType: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CnpjPk = "id";
export type CnpjId = Cnpj[CnpjPk];
export type CnpjOptionalAttributes = "id" | "createdAt" | "updatedAt";
export type CnpjCreationAttributes = Optional<CnpjAttributes, CnpjOptionalAttributes>;

export class Cnpj extends Model<CnpjAttributes, CnpjCreationAttributes> implements CnpjAttributes {
  id!: number;
  cnpj!: string;
  companyType!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

Cnpj.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  cnpj: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: "cnpj"
  },
  companyType: {
    type: DataTypes.STRING(255),
    allowNull: false
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
  tableName: 'cnpjs',
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
      name: "cnpj",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "cnpj" },
      ]
    },
  ]
});
