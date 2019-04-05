const Koa = require("koa");
const app = new Koa();
const scrape = require("../lib/scrape");
const Review = require("../lib/db").Review;
const catchError = require("../lib/catch-error");

app.use(async ctx => {
  let [err, data] = await catchError(scrape());
  if (err) ctx.throw(500, "Scrapping from external service failed!");

  // eslint-disable-next-line no-redeclare
  let [err] = await catchError(Review.insertMany(data));
  if (err) ctx.throw(500, "Inserting data into db failed!");

  const response = ctx.response;
  response.status = 201;
  response.body = "OK";
  response.type = "text";
});

module.exports = app.callback();
