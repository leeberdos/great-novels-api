const { Sequelize } = require('sequelize')
const models = require('../models')

const getAllNovels = async (request, response) => {
  try {
    const allNovels = await models.NovelsModel.findAll({
      include: [
        { model: models.AuthorsModel },
        { model: models.GenresModel },
      ],
    })

    return allNovels ? response.send(allNovels) : response.sendStatus(404)
  } catch (err) {
    response.send(500).send(err)
  }
}

const getNovelById = async (request, response) => {
  const { searchTerm } = request.params

  const novel = await models.NovelsModel.findOne({
    where: {
      [Sequelize.Op.or]: [
        { id: searchTerm },
        { title: { [Sequelize.Op.like]: `%${searchTerm}%` } },
      ]
    },
    include: [{ model: models.AuthorsModel }, { model: models.GenresModel }]
  })

  return novel
    ? response.send(novel)
    : response.sendStatus(404)
}

module.exports = {
  getNovelById,
  getAllNovels
}
