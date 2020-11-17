const errorHandler = require("./errorHandler");

const advancedResults = (model, populate) => async (req, res, next) => {
  let query;
  let queryCopy = { ...req.query };
  //!Fields to exclude
  const removeFields = ["select", "sort", "page", "limit"];

  removeFields.forEach((e) => delete queryCopy[e]);

  let queryStr = JSON.stringify(queryCopy);

  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );

  if (req.params.genre) {
    query = model.find({ genre: req.params.genre });
  } else {
    query = model.find(JSON.parse(queryStr));
  }
  if (!query) {
    return next(new errorHandler(" No resource found", 404));
  }

  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }

  if (req.query.docex === "true") {
    query = model.find({
      genre: [
        "romance",
        "action",
        "comedy",
        "drama",
        "history",
        "crime",
        "horror",
        "animation",
        "thriller",
        "fantasy",
        "mystery",
      ],
    });
  }
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  }

  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 3;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments();
  const count = await query;

  if (limit > 500) {
    return next(new errorHandler("Limit", 422));
  }
  query = query.skip(startIndex).limit(limit);

  const results = await query;
  const pagination = {};
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }
  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  req.advancedResults = {
    success: true,
    count: count.length,
    pagination,
    data: results,
    total,
  };
  next();
};

module.exports = advancedResults;
