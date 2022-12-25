import { Sequelize } from "sequelize";

const sequelizeConnection = new Sequelize('cashforce_v1', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

export default sequelizeConnection;
