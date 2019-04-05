const fs = require("fs");

const NEW_MESSAGE = "NEW_MESSAGE";
const MESSAGE_RECEIVED = "MESSAGE_RECEIVED";

const __styles = fs.readFileSync("./assets/styles.css", { encoding: "utf8" });

const TEMPLATES = {
  [NEW_MESSAGE]: fs.readFileSync("./assets/new-message.template.html", { encoding: "utf8" }).replace("{__styles}", __styles),
  [MESSAGE_RECEIVED]: {
    en: fs.readFileSync("./assets/message-received.en.template.html", { encoding: "utf8" }).replace("{__styles}", __styles),
    pl: fs.readFileSync("./assets/message-received.pl.template.html", { encoding: "utf8" }).replace("{__styles}", __styles)
  }
};

function compileEmailTemplate(opts, template = MESSAGE_RECEIVED) {
  if (typeof opts !== "object") opts = {};
  let message = TEMPLATES[template];
  Object.keys(opts).forEach(key => {
    message = message.replace(new RegExp(`{${key}}`, "g"), opts[key]);
  });
  return message;
}

compileEmailTemplate.TEMPLATES = TEMPLATES;

module.exports = compileEmailTemplate;
