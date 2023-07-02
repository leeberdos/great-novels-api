const models = require('../models')

const getAllAuthors = async (request, response) => {
  try {
    const allAuthors = await models.AuthorsModel.findAll()

    return allAuthors ? response.send(allAuthors) : response.sendStatus(404)
  } catch (err) {
    response.send(500).send(err)
  }
}



const getAuthorsById = async (request, response) => {
  try {
    const { id } = request.params

    const foundAuthor = await models.AuthorsModel.findOne({
      where: { id: id },
      include: [
        {
          model: models.NovelsModel,
          include: [
            { model: models.GenresModel }
          ]
        },
      ]
    })

    return foundAuthor ? response.send(foundAuthor) : response.sendStatus(404)
  } catch (err) {
    response.send(500).send(err)
  }
}

module.exports = {
  getAuthorsById,
  getAllAuthors
}
