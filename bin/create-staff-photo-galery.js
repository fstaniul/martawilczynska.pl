const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const photosFolder = path.resolve(__dirname, "../public/staff-galery/image");
const outputFolder = path.resolve(photosFolder, "../thumbnails");
const staffGaleryJSON = [];
let done = 0;

fs.readdirSync(photosFolder).forEach((photo, index, photos) => {
  const photoPath = path.join(photosFolder, photo);
  const outputPath = path.join(outputFolder, photo);

  sharp(photoPath)
    .resize(400, 400)
    .toFile(outputPath, err => {
      done++;
      if (err) console.log("Failed to transform", photoPath, "\n", err);
      else {
        staffGaleryJSON.push({ image: `/staff-galery/image/${photo}`, thumbnail: `/staff-galery/thumbnails/${photo}` });
        console.log("Successfully transformed", photoPath);
        if (done === photos.length) {
          fs.writeFileSync(path.resolve(__dirname, "../src/assets/staff-galery.json"), JSON.stringify(staffGaleryJSON));
          console.log("Successfully created staff-galery.json");
        }
      }
    });
});
