const novelsGenresTemplate = (connection, Sequelize, Novels, Genres) => {
  return connection.define('novelsGenres', {
    genreId: { type: Sequelize.INTEGER, references: { model: Genres, key: 'id' } },
    novelId: { type: Sequelize.INTEGER, references: { model: Novels, key: 'id' } },
  }, { paranoid: true })
}

module.exports = novelsGenresTemplate
