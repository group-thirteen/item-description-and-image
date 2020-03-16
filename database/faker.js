const fs = require('fs');
const path = require('path');

const filepath = path.resolve(__dirname, 'fake.json');
const colors = ['black', 'blue', 'green', 'grey', 'orange', 'pink', 'purple', 'red', 'white', 'yellow'];
const garments = ['dress', 'hat', 'pajamas', 'pants', 'shirt', 'shoes', 'skirt', 'socks', 'sweater', 'swimsuit'];

const northerlyURLsFileContents = fs.readFileSync('northerlyURLs.txt', 'utf8');
const urls = northerlyURLsFileContents.split('\n').splice(1);
const faker = () => {
  let id = 0;
  let z = 0;
  let output = [];
  for (let colorIndex = 0; colorIndex < colors.length; colorIndex += 1) {
    for (let garmentIndex = 0; garmentIndex < garments.length; garmentIndex += 1) {
      for (let imageIndex = 0; imageIndex < 5; imageIndex += 1) {
        const garment = {};
        garment.id = id;
        garment.url = urls[z];
        // might need these later
        /* garment.color = colors[colorIndex];
        garment.type = garments[garmentIndex]; */
        output.push(garment);
        z += 1;
      }
      id += 1;
    }
  }
  output = JSON.stringify(output);
  const allCommas = /,/gi;
  output = output.replace(allCommas, ',\n');
  const terminalCommas = /},/gi;
  output = output.replace(terminalCommas, '\n},');
  fs.writeFileSync(filepath, output);
};

faker();
