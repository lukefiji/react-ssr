const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform Webpack that we're building a bundle
  // for NodeJS, instead of the browsser
  target: 'node',

  // The root file of our server application
  entry: './src/index.js',

  // Where to output file that's generated
  output: {
    filename: 'bundle.js',
    // __dirname represents the current working directory
    path: path.resolve(__dirname, 'build')
  },

  // Tells Webpack not to pack node modules
  externals: [webpackNodeExternals()]
};

// Merge config with baseConfig via webpack-merge
module.exports = merge(baseConfig, config);
