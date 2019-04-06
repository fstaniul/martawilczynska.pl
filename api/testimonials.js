const Koa = require("koa");
const app = new Koa();
const catchError = require("./lib/catch-error");
const Review = require("./lib/db").Review;
const logError = require("./lib/log-error");

app.use(logError);

app.use(async ctx => {
  let error, testimonials, count;
  let { skip, limit } = ctx.request.query;
  skip = parseInt(skip, 10) || 0;
  limit = parseInt(limit, 10) || 12;

  [error, testimonials] = await catchError(Review.find({}, null, { skip, limit }).exec());
  ctx.assert(!error, 500);

  [error, count] = await catchError(Review.countDocuments({}).exec());
  ctx.assert(!error, 500);

  ctx.response.set({
    "Cache-Control": `s-maxage=0, maxage=0`
  });

  ctx.assert(!error, 500);

  ctx.response.body = { testimonials, count };
  ctx.response.status = 200;
  ctx.response.type = "application/json; charset=utf-8";
});

module.exports = app.callback();
