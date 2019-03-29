#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

const certificatesPath = path.resolve(__dirname, "../public/certificates/img");
const outputFilePath = path.resolve(certificatesPath, "../thumbnails");

const makeImgPath = name => `/certificates/img/${name}`;
const makeThumbnailPath = name => `/certificates/thumbnails/${name}`;

fs.readdir(certificatesPath, (err, certificateFiles) => {
  if (err) throw err;

  const certificates = [];
  let i = 0;

  certificateFiles.forEach(certificateFile => {
    const certificateFilePath = path.join(certificatesPath, certificateFile);
    const certificateOutputFile = path.join(outputFilePath, certificateFile);
    sharp(certificateFilePath)
      .resize(250, 150)
      .toFile(certificateOutputFile, err => {
        if (err) {
          console.log(
            "Failed to write",
            certificateFile,
            "to",
            certificateOutputFile
          );
          console.log(err);
          console.log();
        } else {
          console.log("Successfully saved", certificateFile);
        }
        certificates.push({
          img: makeImgPath(certificateFile),
          thumbnail: makeThumbnailPath(certificateFile)
        });
        i++;
        if (i === certificateFiles.length) {
          fs.writeFile(
            path.resolve(__dirname, "../src/assets/certificates.json"),
            JSON.stringify(certificates),
            err => {
              if (err) console.log("Failed to wrtie certificates.json");
              else console.log("Successfully wrote certificates.json");
            }
          );
        }
      });
  });
});
