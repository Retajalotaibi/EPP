const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const FeedBackSchema = new Schema({
  rate: Number,
  text: String,
});
const FeedbackModel = new model("feedback", FeedBackSchema);

module.exports = FeedbackModel;
