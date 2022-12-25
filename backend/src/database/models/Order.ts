import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import type { Buyer, BuyerId } from './Buyer';
import type { Cnpj, CnpjId } from './Cnpj';
import type { Offer, OfferId } from './Offer';
import type { OrderPortion, OrderPortionId } from './OrderPortion';
import type { Provider, ProviderId } from './Provider';
import type { User, UserId } from './User';

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

  buyer!: Buyer;
  getBuyer!: Sequelize.BelongsToGetAssociationMixin<Buyer>;
  setBuyer!: Sequelize.BelongsToSetAssociationMixin<Buyer, BuyerId>;
  createBuyer!: Sequelize.BelongsToCreateAssociationMixin<Buyer>;

  cnpj!: Cnpj;
  getCnpj!: Sequelize.BelongsToGetAssociationMixin<Cnpj>;
  setCnpj!: Sequelize.BelongsToSetAssociationMixin<Cnpj, CnpjId>;
  createCnpj!: Sequelize.BelongsToCreateAssociationMixin<Cnpj>;

  offers!: Offer[];
  getOffers!: Sequelize.HasManyGetAssociationsMixin<Offer>;
  setOffers!: Sequelize.HasManySetAssociationsMixin<Offer, OfferId>;
  addOffer!: Sequelize.HasManyAddAssociationMixin<Offer, OfferId>;
  addOffers!: Sequelize.HasManyAddAssociationsMixin<Offer, OfferId>;
  createOffer!: Sequelize.HasManyCreateAssociationMixin<Offer>;
  removeOffer!: Sequelize.HasManyRemoveAssociationMixin<Offer, OfferId>;
  removeOffers!: Sequelize.HasManyRemoveAssociationsMixin<Offer, OfferId>;
  hasOffer!: Sequelize.HasManyHasAssociationMixin<Offer, OfferId>;
  hasOffers!: Sequelize.HasManyHasAssociationsMixin<Offer, OfferId>;
  countOffers!: Sequelize.HasManyCountAssociationsMixin;

  orderportions!: OrderPortion[];
  getOrderportions!: Sequelize.HasManyGetAssociationsMixin<OrderPortion>;
  setOrderportions!: Sequelize.HasManySetAssociationsMixin<OrderPortion, OrderPortionId>;
  addOrderportion!: Sequelize.HasManyAddAssociationMixin<OrderPortion, OrderPortionId>;
  addOrderportions!: Sequelize.HasManyAddAssociationsMixin<OrderPortion, OrderPortionId>;
  createOrderportion!: Sequelize.HasManyCreateAssociationMixin<OrderPortion>;
  removeOrderportion!: Sequelize.HasManyRemoveAssociationMixin<OrderPortion, OrderPortionId>;
  removeOrderportions!: Sequelize.HasManyRemoveAssociationsMixin<OrderPortion, OrderPortionId>;
  hasOrderportion!: Sequelize.HasManyHasAssociationMixin<OrderPortion, OrderPortionId>;
  hasOrderportions!: Sequelize.HasManyHasAssociationsMixin<OrderPortion, OrderPortionId>;
  countOrderportions!: Sequelize.HasManyCountAssociationsMixin;

  provider!: Provider;
  getProvider!: Sequelize.BelongsToGetAssociationMixin<Provider>;
  setProvider!: Sequelize.BelongsToSetAssociationMixin<Provider, ProviderId>;
  createProvider!: Sequelize.BelongsToCreateAssociationMixin<Provider>;
  
  user!: User;
  getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;

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
