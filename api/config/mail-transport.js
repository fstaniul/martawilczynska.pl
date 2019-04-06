const nodemailer = require("nodemailer");
const googleAuth = require("./google-auth");

module.exports = nodemailer.createTransport(
  {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "Gmail",
    auth: {
      type: "OAuth2",
      user: "martawilczynska.pl@gmail.com",
      clientId: googleAuth.credentials.web.client_id,
      clientSecret: googleAuth.credentials.web.client_secret,
      refreshToken: googleAuth.tokens.refresh_token,
      accessToken: googleAuth.tokens.access_token,
      expires: googleAuth.tokens.expiry_date
    }
  },
  {
    from: "Marta Wilczyńska-Staniul <martawilczynska.pl@gmail.com>"
  }
);
