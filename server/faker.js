const fs = require('fs');
const path = require('path');

const filepath = path.resolve(__dirname, 'fake.json');
const colors = ['black', 'blue', 'green', 'grey', 'orange', 'pink', 'purple', 'red', 'white', 'yellow'];
const garments = ['dress', 'hat', 'pajamas', 'pants', 'shirt', 'shoes', 'skirt', 'socks', 'sweater', 'swimsuit'];

const northerlyURLsFileContents = fs.readFileSync('northerlyURLs.txt');
console.log(northerlyURLsFileContents);
// const urls = northerlyURLsFileContents.split('\n').splice(1);

const faker = () => {
  let z = 0;
  let output = [];
  for (let i = 0; i < colors.length; i += 1) {
    for (let j = 0; j < garments.length; j += 1) {
      for (let k = 0; k < 5; k += 1) {
        const garment = {};
        garment.id = z;
        garment.color = colors[i];
        garment.type = garments[j];
        output.push(garment);
      }
      z += 1;
    }
  }
  output = JSON.stringify(output);
  const allCommas = /,/gi;
  output = output.replace(allCommas, ',\n');
  const terminalCommas = /},/gi;
  output = output.replace(terminalCommas, ',\n"url": ""\n},');
  fs.writeFileSync(filepath, output);
};

faker();
