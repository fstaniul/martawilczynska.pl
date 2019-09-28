const fs = require('fs');
const path = require('path');
const showdown = new (require('showdown')).Converter();

const locales = ['pl', 'en'];
const aboutContentFolder = path.resolve(path.join(__dirname, '../data/about'));
const localeDataFolder = path.resolve(path.join(__dirname, '../src/assets/locale'));

locales.forEach(locale => {
    const localeFilePath = path.join(localeDataFolder, `${locale}.json`);
    const localeFile = JSON.parse(fs.readFileSync(localeFilePath, 'utf8'));

    localeFile['about.text'] = showdown.makeHtml(fs.readFileSync(path.join(aboutContentFolder, `${locale}.md`), 'utf8'));

    fs.writeFileSync(localeFilePath, JSON.stringify(localeFile), 'utf8');
});
