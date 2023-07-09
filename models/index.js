const Sequelize = require('sequelize')
const authorsTemplate = require('./authorsTemplate')
const novelsTemplate = require('./novelsTemplate')
const genresTemplate = require('./genresTemplate')
const novelsGenresTemplate = require('./novelsGenresTemplate')
const configs = require('../config/sequelize')

const environment = process.env.NODE_ENV || 'development'
const config = configs[environment]
const {
  database, username, password, host, dialect
} = config

const connection = new Sequelize(database, username, password, { host, dialect })

const AuthorsModel = authorsTemplate(connection, Sequelize)
const NovelsModel = novelsTemplate(connection, Sequelize, AuthorsModel)
const GenresModel = genresTemplate(connection, Sequelize)
const NovelsGenresModel = novelsGenresTemplate(connection, Sequelize, NovelsModel, GenresModel)

// one to many
AuthorsModel.hasMany(NovelsModel)
NovelsModel.belongsTo(AuthorsModel)

// many to many
GenresModel.belongsToMany(NovelsModel, { through: NovelsGenresModel })
NovelsModel.belongsToMany(GenresModel, { through: NovelsGenresModel })

module.exports = {
  AuthorsModel,
  NovelsModel,
  GenresModel,
  NovelsGenresModel,
  Op: Sequelize.Op,
}
