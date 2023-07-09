'use strict'

const authorsData = require('../authorsData')
const genresData = require('../genresData')
const novelsData = require('../novelsData')
const novelsGenresData = require('../novelsGenresData')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('authors', authorsData)
    queryInterface.bulkInsert('genres', genresData)
    queryInterface.bulkInsert('novels', novelsData)

    return queryInterface.bulkInsert('novelsGenres', novelsGenresData)
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('authors')
    queryInterface.bulkDelete('genres')
    queryInterface.bulkDelete('novels')

    return queryInterface.bulkDelete('novelsGenres')
  }
}
