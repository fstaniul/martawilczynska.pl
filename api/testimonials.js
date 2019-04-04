const Koa = require("koa");
const app = new Koa();
const scrape = require("./lib/scrape");
const catchError = require("./lib/catch-error");

app.use(async ctx => {
  const [error, data] = await catchError(scrape());

  ctx.response.set({
    "Cache-Control": `s-maxage=${error ? 0 : 86400},maxage=0`
  });

  if (error) {
    ctx.response.body = "500 Internal Server Error";
    ctx.response.status = 500;
    ctx.type = "text/plain; charset=utf-8";
  } else {
    ctx.response.body = JSON.stringify(data);
    ctx.response.status = 200;
    ctx.type = "application/json; charset=utf-8";
  }
});

module.exports = app.callback();
