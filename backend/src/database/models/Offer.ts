import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import type { Order, OrderId } from './Order';
import type { Sponsor, SponsorId } from './Sponsor';

export interface OfferAttributes {
  id: number;
  tax: string;
  tariff: string;
  adValorem: string;
  float: string;
  iof: string;
  expiresIn: Date;
  paymentStatusSponsor?: number;
  paymentStatusProvider?: number;
  createdAt: Date;
  updatedAt: Date;
  orderId?: number;
  sponsorId?: number;
}

export type OfferPk = "id";
export type OfferId = Offer[OfferPk];
export type OfferOptionalAttributes = "id" | "paymentStatusSponsor" | "paymentStatusProvider" | "createdAt" | "updatedAt" | "orderId" | "sponsorId";
export type OfferCreationAttributes = Optional<OfferAttributes, OfferOptionalAttributes>;

export class Offer extends Model<OfferAttributes, OfferCreationAttributes> implements OfferAttributes {
  id!: number;
  tax!: string;
  tariff!: string;
  adValorem!: string;
  float!: string;
  iof!: string;
  expiresIn!: Date;
  paymentStatusSponsor?: number;
  paymentStatusProvider?: number;
  createdAt!: Date;
  updatedAt!: Date;
  orderId?: number;
  sponsorId?: number;

  order!: Order;
  getOrder!: Sequelize.BelongsToGetAssociationMixin<Order>;
  setOrder!: Sequelize.BelongsToSetAssociationMixin<Order, OrderId>;
  createOrder!: Sequelize.BelongsToCreateAssociationMixin<Order>;

  sponsor!: Sponsor;
  getSponsor!: Sequelize.BelongsToGetAssociationMixin<Sponsor>;
  setSponsor!: Sequelize.BelongsToSetAssociationMixin<Sponsor, SponsorId>;
  createSponsor!: Sequelize.BelongsToCreateAssociationMixin<Sponsor>;
}

Offer.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  tax: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  tariff: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  adValorem: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  float: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  iof: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  expiresIn: {
    type: DataTypes.DATE,
    allowNull: false
  },
  paymentStatusSponsor: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: 0
  },
  paymentStatusProvider: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: 0
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'orders',
      key: 'id'
    }
  },
  sponsorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'sponsors',
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
  tableName: 'offers',
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
    {
      name: "sponsorId",
      using: "BTREE",
      fields: [
        { name: "sponsorId" },
      ]
    },
  ]
});
