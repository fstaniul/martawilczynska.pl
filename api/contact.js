const Koa = require("koa");
const app = new Koa();
const bodyparser = require("koa-bodyparser");
const nodemailer = require("nodemailer");
const isEmail = require("validator/lib/isEmail");

app.use(bodyparser({ enableTypes: ["json"] }));

app.use(async ctx => {
  if (ctx.request.method !== "POST") ctx.throw("Only POST request method is supported!", 404);
  if (!ctx.request.accepts("json")) ctx.throw("The response will allways be application/json", 406);
  if (!ctx.request.body) ctx.throw("Missing body or body parser error!", 404);

  const body = ctx.request.body;

  if (!isEmail(body))
    ctx.throw({ errors: { email: "Address e-mail is invalid! Please provide valid e-mail address to receive response!" } }, 404);

  ["name", "topic", "message"].forEach(key => {
    if (typeof body[key] !== "string" || body[key] === "")
      ctx.throw({ errors: { [key]: `Missing ${key} in body. All fields are required!` } }, 404);
  });
});

module.exports = app.callback();
