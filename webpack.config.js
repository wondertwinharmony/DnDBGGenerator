var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var cssOutputPath = '/styles/app.css';
var jsOutputPath = '/scripts/app.js';
var ExtractSASS = new ExtractTextPlugin(cssOutputPath);

// ------------------------------------------
// Base
// ------------------------------------------
var webpackConfig = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Path.join(__dirname, './src/index.html'),
    }),
  ],
  module: {
    loaders: [{
      test: /.jsx?$/,
      include: Path.join(__dirname, './src/app'),
      loader: 'babel',
    }],
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
