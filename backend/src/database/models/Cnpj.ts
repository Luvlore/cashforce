import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import type { Buyer, BuyerId } from './Buyer';
import type { Order, OrderId } from './Order';
import type { Provider, ProviderId } from './Provider';
import type { Sponsor, SponsorId } from './Sponsor';

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

  buyers!: Buyer[];
  getBuyers!: Sequelize.HasManyGetAssociationsMixin<Buyer>;
  setBuyers!: Sequelize.HasManySetAssociationsMixin<Buyer, BuyerId>;
  addBuyer!: Sequelize.HasManyAddAssociationMixin<Buyer, BuyerId>;
  addBuyers!: Sequelize.HasManyAddAssociationsMixin<Buyer, BuyerId>;
  createBuyer!: Sequelize.HasManyCreateAssociationMixin<Buyer>;
  removeBuyer!: Sequelize.HasManyRemoveAssociationMixin<Buyer, BuyerId>;
  removeBuyers!: Sequelize.HasManyRemoveAssociationsMixin<Buyer, BuyerId>;
  hasBuyer!: Sequelize.HasManyHasAssociationMixin<Buyer, BuyerId>;
  hasBuyers!: Sequelize.HasManyHasAssociationsMixin<Buyer, BuyerId>;
  countBuyers!: Sequelize.HasManyCountAssociationsMixin;

  orders!: Order[];
  getOrders!: Sequelize.HasManyGetAssociationsMixin<Order>;
  setOrders!: Sequelize.HasManySetAssociationsMixin<Order, OrderId>;
  addOrder!: Sequelize.HasManyAddAssociationMixin<Order, OrderId>;
  addOrders!: Sequelize.HasManyAddAssociationsMixin<Order, OrderId>;
  createOrder!: Sequelize.HasManyCreateAssociationMixin<Order>;
  removeOrder!: Sequelize.HasManyRemoveAssociationMixin<Order, OrderId>;
  removeOrders!: Sequelize.HasManyRemoveAssociationsMixin<Order, OrderId>;
  hasOrder!: Sequelize.HasManyHasAssociationMixin<Order, OrderId>;
  hasOrders!: Sequelize.HasManyHasAssociationsMixin<Order, OrderId>;
  countOrders!: Sequelize.HasManyCountAssociationsMixin;

  providers!: Provider[];
  getProviders!: Sequelize.HasManyGetAssociationsMixin<Provider>;
  setProviders!: Sequelize.HasManySetAssociationsMixin<Provider, ProviderId>;
  addProvider!: Sequelize.HasManyAddAssociationMixin<Provider, ProviderId>;
  addProviders!: Sequelize.HasManyAddAssociationsMixin<Provider, ProviderId>;
  createProvider!: Sequelize.HasManyCreateAssociationMixin<Provider>;
  removeProvider!: Sequelize.HasManyRemoveAssociationMixin<Provider, ProviderId>;
  removeProviders!: Sequelize.HasManyRemoveAssociationsMixin<Provider, ProviderId>;
  hasProvider!: Sequelize.HasManyHasAssociationMixin<Provider, ProviderId>;
  hasProviders!: Sequelize.HasManyHasAssociationsMixin<Provider, ProviderId>;
  countProviders!: Sequelize.HasManyCountAssociationsMixin;

  sponsors!: Sponsor[];
  getSponsors!: Sequelize.HasManyGetAssociationsMixin<Sponsor>;
  setSponsors!: Sequelize.HasManySetAssociationsMixin<Sponsor, SponsorId>;
  addSponsor!: Sequelize.HasManyAddAssociationMixin<Sponsor, SponsorId>;
  addSponsors!: Sequelize.HasManyAddAssociationsMixin<Sponsor, SponsorId>;
  createSponsor!: Sequelize.HasManyCreateAssociationMixin<Sponsor>;
  removeSponsor!: Sequelize.HasManyRemoveAssociationMixin<Sponsor, SponsorId>;
  removeSponsors!: Sequelize.HasManyRemoveAssociationsMixin<Sponsor, SponsorId>;
  hasSponsor!: Sequelize.HasManyHasAssociationMixin<Sponsor, SponsorId>;
  hasSponsors!: Sequelize.HasManyHasAssociationsMixin<Sponsor, SponsorId>;
  countSponsors!: Sequelize.HasManyCountAssociationsMixin;
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
