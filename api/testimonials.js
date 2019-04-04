const scrape = require("./lib/scrape");

module.exports = async (req, res) => {
  try {
    const data = await scrape();
    res
      .writeHead(200, {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(data),
        "Cache-Control": "max-age=86400,s-maxage=86400" // cache for 1 day
      })
      .end(data);
  } catch (err) {
    const response = "500 - Internal Server Error";
    res
      .writeHead(500, {
        "Content-Length": Buffer.byteLength(response),
        "Content-Type": "text/plain"
      })
      .end(response);
  }
};
