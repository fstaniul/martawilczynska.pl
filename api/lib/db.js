module.exports = exports = {};

const mongoose = require('mongoose');

// SETUP A CONNECTION
mongoose.connect(
  `mongodb+srv://martawilczynska:${
    process.env.MONGODB_PASSWORD
  }@martawilczynska-4ri9y.mongodb.net/website?retryWrites=true`,
  {
    useNewUrlParser: true
  }
);

mongoose.connection.on('error', console.error.bind(console, 'Conecting to mongoDB has failed:'));

// DEFINE REVIEW SCHEMA
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  name: String,
  date: Date,
  stars: Number,
  content: String
});

ReviewSchema.index({ name: 1, date: 1 }, { unique: true, name: '_name_date_index_' });

const Review = (exports.Review = mongoose.model('Review', ReviewSchema));
