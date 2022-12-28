import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import { Buyer } from './Buyer';
import { Cnpj } from './Cnpj';
import { Provider } from './Provider';
import { User } from './User';

export interface OrderAttributes {
  id: number;
  orderNfId: string;
  orderNumber: string;
  orderPath?: string;
  orderFileName?: string;
  orderOriginalName?: string;
  emissionDate?: string;
  pdfFile?: string;
  emitedTo: string;
  nNf?: string;
  CTE?: string;
  value?: string;
  createdAt: Date;
  updatedAt: Date;
  cnpjId?: number;
  userId?: number;
  buyerId?: number;
  providerId?: number;
  orderStatusBuyer?: string;
  orderStatusProvider?: string;
  deliveryReceipt?: string;
  cargoPackingList?: string;
  deliveryCtrc?: string;
}

export type OrderPk = "id";
export type OrderId = Order[OrderPk];
export type OrderOptionalAttributes = "id" | "orderPath" | "orderFileName" | "orderOriginalName" | "emissionDate" | "pdfFile" | "nNf" | "CTE" | "value" | "createdAt" | "updatedAt" | "cnpjId" | "userId" | "buyerId" | "providerId" | "orderStatusBuyer" | "orderStatusProvider" | "deliveryReceipt" | "cargoPackingList" | "deliveryCtrc";
export type OrderCreationAttributes = Optional<OrderAttributes, OrderOptionalAttributes>;

export class Order extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
  id!: number;
  orderNfId!: string;
  orderNumber!: string;
  orderPath?: string;
  orderFileName?: string;
  orderOriginalName?: string;
  emissionDate?: string;
  pdfFile?: string;
  emitedTo!: string;
  nNf?: string;
  CTE?: string;
  value?: string;
  createdAt!: Date;
  updatedAt!: Date;
  cnpjId?: number;
  userId?: number;
  buyerId?: number;
  providerId?: number;
  orderStatusBuyer?: string;
  orderStatusProvider?: string;
  deliveryReceipt?: string;
  cargoPackingList?: string;
  deliveryCtrc?: string;
}
  
Order.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  orderNfId: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: "orderNfId"
  },
  orderNumber: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  orderPath: {
    type: DataTypes.STRING(255),
    allowNull: true,
    unique: "orderPath"
  },
  orderFileName: {
    type: DataTypes.STRING(255),
    allowNull: true,
    unique: "orderFileName"
  },
  orderOriginalName: {
    type: DataTypes.STRING(255),
    allowNull: true,
    unique: "orderOriginalName"
  },
  emissionDate: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  pdfFile: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  emitedTo: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  nNf: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  CTE: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  value: {
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
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  buyerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'buyers',
      key: 'id'
    }
  },
  providerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'providers',
      key: 'id'
    }
  },
  orderStatusBuyer: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: "0"
  },
  orderStatusProvider: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: "0"
  },
  deliveryReceipt: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  cargoPackingList: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  deliveryCtrc: {
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
  tableName: 'orders',
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
      name: "orderNfId",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "orderNfId" },
      ]
    },
    {
      name: "orderPath",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "orderPath" },
      ]
    },
    {
      name: "orderFileName",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "orderFileName" },
      ]
    },
    {
      name: "orderOriginalName",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "orderOriginalName" },
      ]
    },
    {
      name: "buyerId",
      using: "BTREE",
      fields: [
        { name: "buyerId" },
      ]
    },
    {
      name: "cnpjId",
      using: "BTREE",
      fields: [
        { name: "cnpjId" },
      ]
    },
    {
      name: "providerId",
      using: "BTREE",
      fields: [
        { name: "providerId" },
      ]
    },
    {
      name: "userId",
      using: "BTREE",
      fields: [
        { name: "userId" },
      ]
    },
  ]
});

Order.hasOne(Buyer, {
  foreignKey: 'id',
  sourceKey: 'buyerId',
  as: 'buyers'
});

Order.hasOne(User, {
  foreignKey: 'id',
  sourceKey: 'userId',
  as: 'users'
});

Order.hasOne(Provider, {
  foreignKey: 'id',
  sourceKey: 'providerId',
  as: 'providers'
});

Order.hasOne(Cnpj, {
  foreignKey: 'id',
  sourceKey: 'cnpjId',
  as: 'cnpjs'
});
