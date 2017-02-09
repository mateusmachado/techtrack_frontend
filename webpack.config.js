const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = ['react', 'react-dom'];

const config = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'build')
  },
  // eslint: {
  //       failOnWarning: false,
  //       failOnError: true
  // },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.js$/,
        // use: ['babel-loader', 'eslint-loader'],
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
     new ExtractTextPlugin('styles.css'),
     new webpack.optimize.CommonsChunkPlugin({
       name: ['vendor', 'manifest']
     }),
     new HtmlWebpackPlugin({
       template: './src/index.html'
     })
  ]
}

module.exports = config;
