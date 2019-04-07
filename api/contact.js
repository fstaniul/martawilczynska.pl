const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const isEmail = require('validator/lib/isEmail');
const escapeHTML = require('escape-html');
const compileEmail = require('./lib/compile-email-template');
const logError = require('./lib/log-error');
const transport = require('./config/mail-transport');
const THANKYOU_MESSAGE_TOPICS = require('./lib/assets/thankyou-message-topics.json');
const catchError = require('./lib/catch-error');

app.use(logError);

app.use(bodyparser({ enableTypes: ['json'] }));

app.use(async ctx => {
  ctx.assert(ctx.request.method === 'POST', 400, 'Only POST request method is supported!');
  ctx.assert(ctx.request.body, 400, 'Missing body or body parser error!');

  const body = ctx.request.body;

  ctx.assert(isEmail(body.email), 400, {
    errors: { email: 'Address e-mail is invalid! Please provide valid e-mail address to receive response!' }
  });

  ['name', 'subject', 'message'].forEach(key =>
    ctx.assert(typeof body[key] === 'string' && body[key] !== '', 400, {
      errors: { [key]: `Missing ${key} in body. All fields are required!` }
    })
  );

  const locale = ['pl', 'en'].includes(ctx.query.locale) ? ctx.query.locale : 'en';

  const html = compileEmail(
    { ...body, message: escapeHTML(body.message).replace(/\r\n|\n/g, '<br />') },
    compileEmail.TEMPLATES.NEW_MESSAGE
  );

  const toMePromise = transport
    .sendMail({
      to: 'martawilczynska.pl@gmail.com',
      replyTo: body.email,
      subject: body.subject,
      html
    })
    .then(() => {
      console.log('Sending mail to marta from', body.email, 'was successful');
    });

  const subject = THANKYOU_MESSAGE_TOPICS[locale];
  const thankYouMessage = compileEmail({ subject }, compileEmail.TEMPLATES.MESSAGE_RECEIVED[locale]);

  const toClientPromise = transport
    .sendMail({
      to: body.email,
      from: 'Marta Wilczyńska <martawilczynska.pl@gmail.com>',
      replayTo: 'Marta Wilczyńska <martawilczynska.pl@gmail.com>',
      subject: subject,
      html: thankYouMessage
    })
    .then(() => {
      console.log('Sending thank you email to', body.email, 'was successful');
    });

  const [error] = await catchError(Promise.all([toMePromise, toClientPromise]));
  ctx.assert(error === null, 500);

  ctx.status = 200;
});

module.exports = app.callback();
