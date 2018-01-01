var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');

var jsOutputPath = '/scripts/app.js';

// ------------------------------------------
// Base
// ------------------------------------------
var webpackConfig = {
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '.png', '.jpg'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Path.join(__dirname, './src/index.html'),
    }),
  ],
  module: {
    loaders: [
      {
      test: /.jsx?$/,
      include: Path.join(__dirname, './src/app'),
      loader: 'babel',
      },
      {
      test: /\.(png|jpg|gif)$/,
      include: Path.join(__dirname, './src/app/assets/'),
      loader: 'file-loader',
      },
    ],
  },
};


// ------------------------------------------
// Entry point
// ------------------------------------------
webpackConfig.entry = [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/dev-server',
  Path.join(__dirname, './src/app/index')];;

// ------------------------------------------
// Bundle output
// ------------------------------------------
webpackConfig.output = {
  path: Path.join(__dirname, './dist'),
  filename: jsOutputPath,
};

// ------------------------------------------
// Module loaders
// ------------------------------------------
webpackConfig.module.loaders.push({
  test: /\.scss$/,
  loaders: ['style', 'css', 'sass'],
});

// ------------------------------------------
// Plugins
// ------------------------------------------
webpackConfig.plugins.push(
  new Webpack.HotModuleReplacementPlugin()
);

// ------------------------------------------
// Development server
// ------------------------------------------
webpackConfig.devServer = {
  contentBase: Path.join(__dirname, './'),
  hot: true,
  port: 3000,
  inline: true,
  progress: true,
  historyApiFallback: true,
};

module.exports = webpackConfig;
