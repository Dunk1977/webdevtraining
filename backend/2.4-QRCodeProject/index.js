/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

const urlQuestion = {
    type: 'input',
    name: 'url',
    message: 'Enter the URL of your site: ',
};

inquirer
    .prompt(urlQuestion)
    .then((answers) => {
        const siteURL = answers.url;
        console.log(siteURL);
        var qr_svg = qr.image(siteURL);
        qr_svg.pipe(fs.createWriteStream("MyWebsite.png"));

        fs.writeFile("MyLogFile.txt", siteURL, (err) => {
            if (err) throw err;
            console.log("File Saved!");
        })
    })
    .catch((error) => {
        console.error(`Error during prompt ${error.message}`);
    })


