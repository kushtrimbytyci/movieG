const errorHandler = require("../helpers/errorHandler");
const asyncHandler = require("../helpers/asyncHandler");
const MovieSchema = require("../Models/Movies");

exports.addMovie = asyncHandler(async (req, res, next) => {
  const { title, imgsrc, link, genre, year, desc, quality, topimdb } = req.body;
  let movie = await MovieSchema.findOne({ title });
  if (movie) {
    return next(new errorHandler("Movie exists", 402));
  }

  movie = await MovieSchema.create({
    title,
    imgsrc,
    link,
    genre,
    year,
    desc,
    quality,
    topimdb,
  });
  res.status(200).json({ success: true, data: movie });
});

exports.updateMovie = asyncHandler(async (req, res, next) => {
  const movie = await MovieSchema.findOneAndUpdate(
    { _id: req.params.title },
    req.body,
    { new: true, runValidators: true }
  );
  if (!movie) {
    return next(new errorHandler("No movie found"));
  }

  res.status(200).json({ success: true, data: movie });
});

exports.getMovies = asyncHandler(async (req, res, next) => {
  if (req.advancedResults.data.length === 0) {
    return next(new errorHandler("No movies", 400));
  }
  res.status(200).json({ success: true, data: req.advancedResults });
});

exports.getByGenre = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, data: req.advancedResults.data });
});

exports.topImdb = asyncHandler(async (req, res, next) => {
  const movies = await MovieSchema.find({ topimdb: { $gt: 8 } });
  if (!movies) {
    return next(new errorHandler("No movies found", 400));
  }
  res.status(200).json({ success: true, data: movies });
});

exports.deleteMovie = asyncHandler(async (req, res, next) => {
  console.log(req.params.title);
  const movie = await MovieSchema.findOneAndDelete({ _id: req.params.title });
  // const movie = await MovieSchema.find
  console.log(movie);
  res.status(200).json({ success: true, data: movie });
});

exports.searchMovie = asyncHandler(async (req, res, next) => {
  const { search } = req.body;
  // const nameCapitalized = search.charAt(0).toUpperCase() + search.slice(1)

  const pattern = new RegExp(".*" + search + ".*", "i");
  const movie = await MovieSchema.find({ title: pattern });
  if (!movie) {
    return next(new errorHandler("No movie found", 401));
  }
  res.status(200).json({ success: true, data: movie });
});

exports.likeQuery = asyncHandler(async (req, res, next) => {
  const { search } = req.body;

  const movies = await MovieSchema.find({
    title: { $regex: `${search}`, $options: "i" },
  }).limit(3);
  if (movies.length === 0) {
    return next(new errorHandler("No movies found", 401));
  }
  res.status(200).json({ success: true, data: movies });
});
