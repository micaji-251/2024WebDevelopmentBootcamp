/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'What is the Url?',
    },
  ])
  .then((answers) => {
    let url = JSON.stringify(answers, null, '');
    console.log(url);

    fs.writeFile('URL.txt', url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });

    let qr_img = qr.image(url, { type: 'png' });
    qr_img.pipe(fs.createWriteStream('qr_img2.png'));

    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
