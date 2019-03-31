const showdown = new (require("showdown")).Converter({ headerLevelStart: 2, requireSpaceBeforeHeadingText: true });
const fs = require("fs");
const path = require("path");

const treatmentsFolder = path.resolve(__dirname, "../data/treatments");
const manifestPath = path.resolve(treatmentsFolder, "manifest.json");

console.log("Reading manifest", manifestPath);

const manifest = JSON.parse(fs.readFileSync(manifestPath, { encoding: "utf8" }));
const output = {};

Object.keys(manifest).forEach(locale => {
  const localeFolder = path.resolve(treatmentsFolder, locale);
  if (!localeFolder) return console.error('Locale folder "', localeFolder, '" does not exists!');
  output[locale] = [];

  console.log("Parsing data for locale", locale);

  manifest[locale].forEach(file => {
    const filePath = path.resolve(localeFolder, file + ".md");
    if (!filePath) return console.error("Missing file specified in manifest", file, "in", localeFolder);
    const markdown = fs.readFileSync(filePath, { encoding: "utf8" });

    const data = { name: file, content: showdown.makeHtml(markdown) };
    output[locale].push(data);

    console.log("Parsed:", file);
  });
});

const treatmentsOutputPath = path.resolve(__dirname, "../src/assets/treatments.json");

fs.writeFileSync(treatmentsOutputPath, JSON.stringify(output), { encoding: "utf8" });

console.log("Saved treatments.json successfully to", treatmentsOutputPath);

console.log();
