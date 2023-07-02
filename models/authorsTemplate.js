const authorsTemplate = (connection, Sequelize) => {
  return connection.define('authors',
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      nameFirst: { type: Sequelize.STRING },
      nameLast: { type: Sequelize.STRING },
    },
    { paranoid: true })
}

module.exports = authorsTemplate
