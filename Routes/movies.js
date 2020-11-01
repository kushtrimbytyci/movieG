const express = require('express')
const router = express.Router()
const {addMovie,getByGenre,getMovies,topImdb,searchMovie,updateMovie,deleteMovie} = require('../Controllers/movies')
const advancedResults = require('../helpers/advancedResults')
const {authorize,protect} = require('../middlewares/auth')
const MovieSchema = require('../Models/Movies')


router.route('/').post(protect,authorize('admin'),addMovie).get(advancedResults(MovieSchema), getMovies)
router.route('/:title').put(protect,authorize('admin'),updateMovie).delete(protect,authorize('admin'),deleteMovie)
router.route('/topimdb').get(topImdb)
router.route('/search').post(searchMovie)
router.route('/:genre').get(advancedResults(MovieSchema),getByGenre)



module.exports= router;