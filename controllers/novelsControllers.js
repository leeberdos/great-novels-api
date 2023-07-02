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
  try {
    const { id } = request.params

    const foundNovel = await models.NovelsModel.findOne({
      where: { id: id },
      include: [
        { model: models.AuthorsModel },
        { model: models.GenresModel },
      ],
    })

    return foundNovel ? response.send(foundNovel) : response.sendStatus(404)
  } catch (err) {
    response.status(500).send(err)
  }
}

module.exports = {
  getNovelById,
  getAllNovels
}
