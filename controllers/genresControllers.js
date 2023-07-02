const models = require('../models')

const getAllGenres = async (request, response) => {
  try {
    const allGenres = await models.GenresModel.findAll()

    return allGenres ? response.send(allGenres) : response.sendStatus(404)
  } catch (err) {
    response.send(500).send(err)
  }
}

const getGenreById = async (request, response) => {
  try {
    const { id } = request.params

    const foundGenre = await models.GenresModel.findOne({
      where: { id: id },
      include: [
        {
          model: models.NovelsModel,
          include: [
            { model: models.AuthorsModel }
          ]
        },
      ],
    })

    return foundGenre ? response.send(foundGenre) : response.sendStatus(404)
  } catch (err) {
    response.status(500).send(err)
  }
}

module.exports = {
  getAllGenres,
  getGenreById
}
