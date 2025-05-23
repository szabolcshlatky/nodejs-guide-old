/* NPM packages */

import superheroes from "superheroes";
import supervillains from "supervillains";

var mysuperheroes = superheroes.random();
var mysupervillains = supervillains.random();

console.log(`Hello there ${mysupervillains}! General ${mysuperheroes}!`);

  /* import (ESM) vs. require (CJS) */

import generateName from "sillyName"; // const generateName = require("sillyName");
var sillyName = generateName();

/* Native module: File system */

import fs from "fs";

fs.writeFile("documents/notes.txt", sillyName, // writeFile('filename.extension', data[content], error callback function => {})
  (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile("documents/notes.txt", "utf8", (err, data) => { // readFile('filename.extension', data[content], error callback function => {})
  if (err) throw err;
  console.log(data);
});

/* QR Code project
  1. Use the inquirer npm package to get user input.
  2. Use the qr-image npm package to turn the user entered URL into a QR code image.
  3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("images/qr_img.png"));

    fs.writeFile("documents/notes.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
