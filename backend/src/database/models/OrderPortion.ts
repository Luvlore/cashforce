import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

export interface OrderPortionAttributes {
  id: number;
  nDup: string;
  dVenc: string;
  vDup: string;
  availableToMarket?: number;
  createdAt: Date;
  updatedAt: Date;
  orderId?: number;
}

export type OrderPortionPk = "id";
export type OrderPortionId = OrderPortion[OrderPortionPk];
export type OrderPortionOptionalAttributes = "id" | "availableToMarket" | "createdAt" | "updatedAt" | "orderId";
export type OrderPortionCreationAttributes = Optional<OrderPortionAttributes, OrderPortionOptionalAttributes>;

export class OrderPortion extends Model<OrderPortionAttributes, OrderPortionCreationAttributes> implements OrderPortionAttributes {
  id!: number;
  nDup!: string;
  dVenc!: string;
  vDup!: string;
  availableToMarket?: number;
  createdAt!: Date;
  updatedAt!: Date;
  orderId?: number;
}

OrderPortion.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nDup: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  dVenc: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  vDup: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  availableToMarket: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: 1
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'orders',
      key: 'id'
    }
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
  tableName: 'orderportions',
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
      name: "orderId",
      using: "BTREE",
      fields: [
        { name: "orderId" },
      ]
    },
  ]
});
