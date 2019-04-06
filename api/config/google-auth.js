module.exports = exports = {};

const credentials = (exports.credentials = {
  web: {
    client_id: process.env.GOOGLE_CLIENT_ID,
    project_id: "my-project",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://accounts.google.com/o/oauth2/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uris: ["http://localhost"],
    javascript_origins: ["http://localhost"]
  }
});

const tokens = (exports.tokens = {
  access_token: process.env.GOOGLE_ACCESS_TOKEN,
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  scope: "https://mail.google.com/",
  token_type: "Bearer",
  expiry_date: 1554563557940
});
