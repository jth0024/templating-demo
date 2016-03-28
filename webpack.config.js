const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  devtool: 'sourcemap',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: 'public',
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.less$/,
        loader: 'style!css!less',
      },
    ],
  },
  postcss() {
    return [autoprefixer];
  },
};
