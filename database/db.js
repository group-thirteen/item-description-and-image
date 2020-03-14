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
module.exports.Image = Image;

module.exports.getImagesByID = (id, callback) => {
  Image.find({ id }, callback);
};
