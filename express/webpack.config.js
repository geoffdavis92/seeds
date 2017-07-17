'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(`${__dirname}/static`),
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.js(x)*$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
    ],
  },
  plugins: [
    process.env.NODE_ENV && process.env.NODE_ENV === 'production'
      ? new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
        })
      : () => null,
    process.env.NODE_ENV && process.env.NODE_ENV === 'production'
      ? new webpack.optimize.UglifyJsPlugin()
      : () => null,
  ],
};
