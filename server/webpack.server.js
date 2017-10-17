const path = require('path');

module.exports = {
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

  // Run Babel on every file Webpack runs trhough
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          // Transpiling presets
          presets: [
            'react',
            'stage-0',
            // Run transform rules to work with the last 2 browser versions
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
};
