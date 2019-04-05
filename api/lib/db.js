module.exports = exports = {};

const mongoose = require("mongoose");

// SETUP A CONNECTION
mongoose.connect(`mongodb+srv://martawilczynska:${process.env.MONGODB_PASSWORD}@martawilczynska-4ri9y.mongodb.net/test?retryWrites=true`, {
  useNewUrlParser: true
});

mongoose.connection.on("error", console.error.bind(console, "Conecting to mongoDB has failed:"));

// DEFINE REVIEW SCHEMA
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  name: String,
  date: Date,
  stars: Number,
  content: String
});

const Review = (exports.Review = mongoose.model("Review", ReviewSchema));
