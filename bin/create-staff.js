const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const showdown = new (require('showdown')).Converter();

const photosFolder = path.resolve(__dirname, '../public/static/media/staff-galery/image');
const outputFolder = path.resolve(photosFolder, '../thumbnails');
let staffGaleryJSON = [];
let done = 0;

fs.readdirSync(photosFolder).forEach((photo, index, photos) => {
  const photoPath = path.join(photosFolder, photo);
  const outputPath = path.join(outputFolder, photo);

  sharp(photoPath)
    .resize(400, 400)
    .toFile(outputPath, err => {
      done++;
      if (err) console.log('Failed to transform', photoPath, '\n', err);
      else {
        staffGaleryJSON.push({
          image: `/static/media/staff-galery/image/${photo}`,
          thumbnail: `/static/media/staff-galery/thumbnails/${photo}`
        });
        console.log('Successfully transformed', photoPath);
        if (done === photos.length) {
          staffGaleryJSON = staffGaleryJSON.sort((x, y) => x.image.localeCompare(y.image));
          fs.writeFileSync(path.resolve(__dirname, '../src/assets/staff-galery.json'), JSON.stringify(staffGaleryJSON));
          console.log('Successfully created staff-galery.json');
        }
      }
    });
});

const staffContentFolder = path.resolve(__dirname, '../data/staff');
const localeFilesFolder = path.resolve(__dirname, '../src/assets/locale');

fs.readdirSync(staffContentFolder).forEach((staffContent, index, files) => {
  const locale = staffContent.replace('.md', '');
  const outputFile = path.join(localeFilesFolder, locale + '.json');
  const mdContent = fs.readFileSync(path.join(staffContentFolder, staffContent), { encoding: 'utf8' });
  const localeFile = JSON.parse(fs.readFileSync(outputFile, { encoding: 'utf8' }));
  localeFile['staff.content'] = showdown.makeHtml(mdContent);
  fs.writeFileSync(outputFile, JSON.stringify(localeFile, null, 2), { encoding: 'utf8' });
});
