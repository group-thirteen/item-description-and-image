const express = require('express');
const path = require('path');
const { getImagesByID } = require(
  path.resolve(__dirname, '..', 'database', 'db.js'));
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: "GET",
  optionsSuccessStatus: 200
}

const app = express();
const port = process.env.PORT || 3000;
app.listen(port/* , () => { console.log('Listening on port ', port); } */);

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('/images/:id', cors(corsOptions), (req, res) => {
  getImagesByID(req.params.id, (err, data) => {
    if (err) {
      return res.sendStatus(404);
    }
    return res.send(data.map((item) => (item.url)));
  });
});
