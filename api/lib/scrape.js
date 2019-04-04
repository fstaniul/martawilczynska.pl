const cheerio = require("cheerio");
const axios = require("axios");

const LINK = "https://www.znanylekarz.pl/ajax/mobile/doctor-opinions/165546";

async function scrape() {
  // issue an initail request to get number of requests and data that is on the server
  const initialData = (await axios.get(LINK)).data;
  // determine another requests ids
  const anotherRequests = new Array(Math.ceil(initialData.numRows / initialData.limit) + 1)
    .fill(true)
    .map((_, index) => index)
    .slice(2);

  // issue requests for the rest of the data
  const restOfData = (await Promise.all(anotherRequests.map(number => axios.get(LINK + "/" + number)))).map(response => response.data);
  // join all data into html string and load it into cheerio
  const htmlData = [initialData, ...restOfData].map(data => data.html).join("\n");
  const $ = cheerio.load(htmlData);

  // scrap data from the html received and return the result
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
}

module.exports = scrape;
