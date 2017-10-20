const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: ['webpack-dev-server/client?http://localhost:3000', './src/index.jsx'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react']
          }
        },
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
