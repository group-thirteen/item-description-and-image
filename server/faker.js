const fs = require('fs');
const path = require('path');

const filepath = path.resolve(__dirname, 'fake.json');
const colors = ['red', 'orange', 'yellow', 'blue', 'green', 'purple', 'pink', 'black', 'white', 'grey'];
const garments = ['shirt', 'hat', 'pants', 'socks', 'swimsuit', 'dress', 'skirt', 'sweater', 'pajamas', 'shoes'];

const faker = () => {
  let z = 0;
  let output = [];
  for (let i = 0; i < colors.length; i += 1) {
    for (let j = 0; j < garments.length; j += 1) {
      for (let k = 0; k < 5; k++) {
        let garment = {};
        garment.id = z;
        garment.color = colors[i];
        garment.type = garments[j];
        output.push(garment);
      }
      z += 1;
    }
  }
  output = JSON.stringify(output);
  const regex = /,/gi;
  output = output.replace(regex, ',\n');
  const regex2 = /},/gi;
  output = output.replace(regex2, ',\n"url": ""\n},');
  fs.writeFileSync(filepath, output);
};

faker();
