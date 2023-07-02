const Sequelize = require('sequelize')
const authorsTemplate = require('./authorsTemplate')
const novelsTemplate = require('./novelsTemplate')
const genresTemplate = require('./genresTemplate')
const novelsGenresTemplate = require('./novelsGenresTemplate')

const connection = new Sequelize('l_novels', 'novelsUser', 'novels1234!', { host: '173.230.134.130', dialect: 'mysql' })

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
  NovelsGenresModel
}
