const fs = require('fs');
const path = require('path');
const { Image } = require('./db.js');

Image.deleteMany().then(() => {
  const fake = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'fake.json'), 'utf8'));
  const images = [];
  for (let imageIndex = 0; imageIndex < fake.length; imageIndex += 1) {
    const image = new Image(fake[imageIndex]);
    images.push(image.save());
  }
  Promise.all(images).then(() => { process.exit(); });
});
