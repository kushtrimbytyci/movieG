const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imgsrc: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
    enum: [
      "romance",
      "hindi",
      "action",
      "comedy",
      "drama",
      "history",
      "crime",
      "horror",
      "animation",
      "thriller",
      "fantasy",
      "documentaries",
      "mystery",
    ],
  },
  year: {
    type: Number,
    required: true,
  },
  topimdb: {
    type: Number,
    required: true,
  },
  quality: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("moviea", MovieSchema);
