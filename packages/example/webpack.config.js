const { createConfig } = require('@doghouse/webpack-base');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

// Define paths.
const outputPath = path.resolve(__dirname, 'dist');
const outputPathCss = outputPath + '/css';
const outputPathJs = outputPath + '/js';

// Add export config to this.
// Each object added to this should be wrapped by createConfig() to merge in base config.
// Eg. module.exports.push(createConfig({ ... })
module.exports = [];

// SCSS.
module.exports.push(createConfig({
  entry: {
    // "main" will be the filename for the output, eg "main.css"
    main: ['./src/scss/style.scss'],
    // "vanilla-css" will be the filename for the output, eg "vanilla-css.css"
    "vanilla-css": ['./src/css/style1.css'],
  },
  output: {
    path: outputPathCss,
  },
  plugins: [
    new CleanWebpackPlugin(outputPathCss),
  ],
}));

// JS.
module.exports.push(createConfig({
  entry: {
    // "main" will be the filename for the output, eg "main.css"
    main: ['./src/js/script.js'],
  },
  output: {
    path: outputPathJs,
  },
  plugins: [
    new CleanWebpackPlugin(outputPathJs),
  ],
}));
