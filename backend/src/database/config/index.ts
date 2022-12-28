import 'dotenv/config';
import { Sequelize } from "sequelize";

const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_HOST = process.env.DATABASE_HOST;

const sequelizeConnection = new Sequelize(DATABASE_NAME || 'cashforce_v3', DATABASE_USER || 'root', DATABASE_PASSWORD || 'password', {
  host: DATABASE_HOST || 'localhost',
  dialect: 'mysql',
})

export default sequelizeConnection;
