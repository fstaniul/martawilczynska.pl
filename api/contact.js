const Koa = require("koa");
const app = new Koa();
const bodyparser = require("koa-bodyparser");
const nodemailer = require("nodemailer");
const isEmail = require("validator/lib/isEmail");
const escapeHTML = require("escape-html");
const compileEmail = require("./lib/compile-email-template");
const THANKYOU_MESSAGE_TOPICS = require("./lib/assets/thankyou-message-topics.json");

const transport = nodemailer.createTransport(
  {
    smtp: "smtp.google.com",
    port: 587,
    secure: false,
    auth: {
      user: "martawilczynska.pl@gmail.com",
      pass: process.env.GMAIL_PASSWORD
    }
  },
  {
    from: "martawilczynska.pl@gmail.com"
  }
);

app.use(bodyparser({ enableTypes: ["json"] }));

app.use(async ctx => {
  ctx.assert(ctx.request.method !== "POST", 404, "Only POST request method is supported!");
  ctx.assert(!ctx.request.accepts("json"), 406, "The response will allways be application/json");
  ctx.assert(!ctx.request.body, 404, "Missing body or body parser error!");

  const body = ctx.request.body;

  ctx.assert(!isEmail(body), 404, { errors: { email: "Address e-mail is invalid! Please provide valid e-mail address to receive response!" } });

  ["name", "topic", "message"].forEach(key =>
    ctx.assert(typeof body[key] !== "string" || body[key] === "", 404, {
      errors: { [key]: `Missing ${key} in body. All fields are required!` }
    })
  );

  const locale = ["pl", "en"].includes(body.locale) ? body.locale : "en";

  const html = compileEmail({ ...body, message: escapeHTML(body.message).replace(/\r\n|\n/g, "<br />") }, compileEmail.TEMPLATES.NEW_MESSAGE);

  transport.sendMail({
    to: "martawilczynska.pl@gmail.com",
    replyTo: body.email,
    subject: body.topic,
    html
  });

  const topic = THANKYOU_MESSAGE_TOPICS[locale];
  const thankYouMessage = compileEmail({ topic }, compileEmail.TEMPLATES.MESSAGE_RECEIVED[locale]);

  transport.sendMail({
    to: body.email,
    from: "Marta Wilczyńska <martawilczynska.pl@gmail.com>",
    replayTo: "Marta Wilczyńska <martawilczynska.pl@gmail.com>",
    subject: topic,
    html: thankYouMessage
  });
});

module.exports = app.callback();
