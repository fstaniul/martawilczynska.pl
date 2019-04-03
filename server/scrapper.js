const cheerio = require("cheerio");
const axios = require("axios");

const link = "https://www.znanylekarz.pl/ajax/mobile/doctor-opinions/165546";
const scrape = () =>
  axios
    .get(link)
    .then(response => {
      const { data } = response;
      let anotherRequests = new Array(Math.ceil(data.numRows / data.limit) + 1)
        .fill(true)
        .map((_, index) => index)
        .slice(2);
      return Promise.all([response, ...anotherRequests.map(i => axios.get(link + "/" + i))]);
    })
    .then(requests => {
      return cheerio.load(requests.map(req => req.data.html).join(""));
    })
    .then($ => {
      const opinions = [];
      $(".media.opinion").each(function() {
        const name = $(this)
          .find("h4 span[itemprop=name]")
          .html();
        const stars = +$(this)
          .find(".rating")
          .data("score");
        const content = $(this)
          .find("p.opinion__comment[itemprop=description]")
          .html();
        const time = $(this)
          .find("time[itemprop=datePublished]")
          .attr("datetime");
        opinions.push({ name, stars, content, time });
      });
      return opinions;
    });

module.exports = scrape;
