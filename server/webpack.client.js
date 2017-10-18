const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  // The root file of our client application
  entry: './src/client/client.js',

  // Where to output file that's generated
  output: {
    filename: 'bundle.js',
    // __dirname represents the current working directory
    path: path.resolve(__dirname, 'public')
  }
};

// Merge config with baseconfig via webpack-merge
module.exports = merge(baseConfig, config);
