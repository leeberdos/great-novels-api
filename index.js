const express = require('express')
// Controllers
const { getAuthorsByIdOrName } = require('./controllers/authorsControllers')
const { getNovelById } = require('./controllers/novelsControllers')
const { getAllAuthors } = require('./controllers/authorsControllers')
const { getAllNovels } = require('./controllers/novelsControllers')
const { getAllGenres } = require('./controllers/genresControllers')
const { getGenreById } = require('./controllers/genresControllers')

const app = express()

app.get('/authors', getAllAuthors)

app.get('/novels', getAllNovels)

app.get('/genres', getAllGenres)

// Controller allows user to search by author ID or fuzzy last name match
app.get('/authors/:searchTerm', getAuthorsByIdOrName)

app.get('/novels/:searchTerm', getNovelById)

app.get('/genres/:id', getGenreById)


app.listen(8080, () => {
  console.log('Listening on port 8080...')
})
