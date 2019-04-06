const express = require("express");
const app = express();

const contact = require("../contact");
const testimonials = require("../testimonials");
const cron = require("../cron/scrape");

app.get("/api/testimonials", testimonials);
app.get("/api/cron/scrape", cron);
app.post("/api/contact", contact);

app.all("*", (req, res) => res.sendStatus(404));

app.listen(8080);
