const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema({
  imgurl: String,
});

module.exports = mongoose.model("feature", FeatureSchema);
