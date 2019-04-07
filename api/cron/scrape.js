const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
const scrape = require('../lib/scrape');
const Review = require('../lib/db').Review;
const catchError = require('../lib/catch-error');
const logError = require('../lib/log-error');

app.use(logError);

app.use(async ctx => {
  let [err, data] = await catchError(scrape());
  ctx.assert(!err, 500, 'Scrapping from external service failed!');

  let dbSession;
  [err, dbSession] = await catchError(mongoose.startSession());
  ctx.assert(!err, 500, 'Failed to create db session.');

  dbSession.startTransaction();

  const promises = data.map(review =>
    Review.updateOne(
      { date: review.date, name: review.name },
      { $set: { ...review } },
      { upsert: true, session: dbSession }
    ).exec()
  );

  [err] = await catchError(Promise.all(promises));

  if (err) dbSession.abortTransaction();
  else [err] = await catchError(dbSession.commitTransaction());

  if (err) console.log(err);
  ctx.assert(!err, 500, 'Failed to insert data into database!');

  const response = ctx.response;
  response.status = 201;
  response.body = 'OK';
  response.type = 'text';
});

module.exports = app.callback();
