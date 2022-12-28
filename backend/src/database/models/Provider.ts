import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

export interface ProviderAttributes {
  id: number;
  name: string;
  tradingName?: string;
  cashforceTax?: string;
  responsibleName?: string;
  responsibleEmail?: string;
  responsiblePosition?: string;
  responsiblePhone?: string;
  responsibleMobile?: string;
  website?: string;
  postalCode?: string;
  address?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  bank?: string;
  bankAgency?: string;
  account?: string;
  documents?: string;
  phoneNumber?: string;
  situation?: string;
  situationDate?: string;
  createdAt: Date;
  updatedAt: Date;
  cnpjId?: number;
  email?: string;
}

export type ProviderPk = "id";
export type ProviderId = Provider[ProviderPk];
export type ProviderOptionalAttributes = "id" | "tradingName" | "cashforceTax" | "responsibleName" | "responsibleEmail" | "responsiblePosition" | "responsiblePhone" | "responsibleMobile" | "website" | "postalCode" | "address" | "number" | "complement" | "neighborhood" | "city" | "state" | "bank" | "bankAgency" | "account" | "documents" | "phoneNumber" | "situation" | "situationDate" | "createdAt" | "updatedAt" | "cnpjId" | "email";
export type ProviderCreationAttributes = Optional<ProviderAttributes, ProviderOptionalAttributes>;

export class Provider extends Model<ProviderAttributes, ProviderCreationAttributes> implements ProviderAttributes {
  id!: number;
  name!: string;
  tradingName?: string;
  cashforceTax?: string;
  responsibleName?: string;
  responsibleEmail?: string;
  responsiblePosition?: string;
  responsiblePhone?: string;
  responsibleMobile?: string;
  website?: string;
  postalCode?: string;
  address?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  bank?: string;
  bankAgency?: string;
  account?: string;
  documents?: string;
  phoneNumber?: string;
  situation?: string;
  situationDate?: string;
  createdAt!: Date;
  updatedAt!: Date;
  cnpjId?: number;
  email?: string;
}

Provider.init({
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
  tradingName: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  cashforceTax: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  responsibleName: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  responsibleEmail: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  responsiblePosition: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  responsiblePhone: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  responsibleMobile: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  website: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  postalCode: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  number: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  complement: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  neighborhood: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  city: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  state: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  bank: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  bankAgency: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  account: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  documents: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  phoneNumber: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  situation: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  situationDate: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  cnpjId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'cnpjs',
      key: 'id'
    }
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true
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
  tableName: 'providers',
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
      name: "cnpjId",
      using: "BTREE",
      fields: [
        { name: "cnpjId" },
      ]
    },
  ]
});
