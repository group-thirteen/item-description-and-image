const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'components', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'client', 'components')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        },
      },
    ],
  },
};
