module.exports = {
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
