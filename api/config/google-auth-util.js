const googleAuth = require("google-auth-library");
const { credentials, tokens } = require("./google-auth");

function getAuthorizeUrl(callback) {
  const oauth2Client = new googleAuth.OAuth2Client(
    credentials.web.client_id,
    credentials.web.client_secret,
    credentials.web.redirect_uris[0]
  );

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: "https://mail.google.com/"
  });

  callback(null, authUrl);
}

getAuthorizeUrl((err, url) => {
  if (err) return console.log(err);
  console.log("Auth url is: ", url);
});

const code = "4/JAEqat1o1jvORvrhQTbrP123Wsq7CiqbSiwOYKCY8D2i_lo3FXfnxMeMOl6wlgk4XMUvkb5CFkJICcA6_R8-3cg";

function getAccessToken(callback) {
  const oauth2Client = new googleAuth.OAuth2Client(
    credentials.web.client_id,
    credentials.web.client_secret,
    credentials.web.redirect_uris[0]
  );

  oauth2Client.getToken(code, (err, token) => {
    if (err) return console.log(err);

    callback(null, token);
  });
}

getAccessToken((err, token) => {
  if (err) return console.log(err);
  console.log("Auth token is: ", token);
});
