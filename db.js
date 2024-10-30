const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  {
    dialect: 'postgres',
    database:'',

    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
