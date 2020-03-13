const fs = require('fs');
const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/images');

const imageSchema = new mongoose.Schema({
  id: Number,
  url: String,
});

const Image = mongoose.model('Image', imageSchema);
Image.deleteMany().then(() => {
  const fake = JSON.parse(fs.readFileSync('server/fake.json', 'utf8'));
  const images = [];
  for (let imageIndex = 0; imageIndex < fake.length; imageIndex += 1) {
    const image = new Image(fake[imageIndex]);
    images.push(image.save());
  }
  Promise.all(images).then(() => { process.exit(); });
});
