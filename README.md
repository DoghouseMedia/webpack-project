# Doghouse Webpack Project

Collection of Webpack plugins, loaders and configuration for Doghouse projects.

This is a helper package that abstracts common webpack configuration and plugins. It allows adding custom config
which gets merged with the base config using [Webpack merge](https://github.com/survivejs/webpack-merge).

Main use is for compiling SCSS and ES6 JS into CSS and ES5 JS. But can be expanded to be used for any webpack package.

Inspiration for this is from [here](https://github.com/DeloitteDigitalAPAC/webpack-config).

## Install

### Install for a standard js project

1. Add the package as a **dev dependency**, by running:

```bash
npm install @doghouse/webpack-base --save-dev
```

2. Add a `webpack.config.js` file which imports `createConfig` from **Webpack base**:

```js
const { createConfig } = require('@doghouse/webpack-base'); 

module.exports = [];
module.exports.push(createConfig({
    entry: {
        main: [
            './src/index.js',
        ],
    },
}));
```

3. Follow the [Configure](#configure) steps.

## Configure

### 1. Browsers

Add a `browserslist` property to your project's `package.json` file to define supported browsers:

```json
"browserslist": [
  "last 3 versions",
  "IE 11",
  "iOS >= 8"
]
```

Autoprefixer and Babel will refer to this `browserslist` property to determine the output format for CSS and JavaScript.

### 2. Babel

Add your babel preset to the `package.json`
```js
{
  "babel": {
    "presets": ["@babel/preset-env"]
  }	  
}
```

### 4. Scripts

Add `build`, `watch` and/or `build:report` scripts to your project's `package.json` file:

```json
"scripts": {
  "build": "webpack --mode production",
  "watch": "webpack --mode development --watch",
  "build:report": "webpack --mode production --report"
}
```

## Example and Usage

See the `packages/example` package for a 'how to use' example.

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds the app for production to the dist folder.
It correctly bundles in production mode and optimizes the build for the best performance.
You may wish to create a variation of this script with `--mode development` to include source maps in the bundle.

### `npm run build:report`

Builds the app for production and generates a report using [Webpack bundle analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer).
You can view a visualisation of the size of the Webpack output files in an interactive treemap at `dist/reports/webpack-report.html`.

### `npm run watch`

Builds the app for development/testing to the dist folder. 
It correctly bundles in development mode, including source maps. This also utilizes [Browsersync](https://www.browsersync.io/) 
for live injection of CSS and sync of actions between browser. Browsersync port can be set via `NODE_BS_PORT` env variable.

## Included Packages

### Core packages

| Name | Description |
|------|-------------|
| [**webpack**][1] | Webpack is the engine that allows us to process files and bundle them into packages according to rules that we specify. |
| [**babel-core**][2] | Babel is a JavaScript compiler. We write our JavaScript according to the latest spec (ESNext), and Babel compiles it into a specified format (see babel-preset-env). This package is the core compiler for Babel. |
| [**node-sass**][3] | The engine of the popular stylesheet preprocessor, Sass. |
| [**post-css**][4] | A tool for applying transformations to CSS, such as adding browser prefixes with Autoprefixer. |
| [**breakpoint-sass**][5] | Provides `breakpoint` mixin for dealing with media queries. |

[1]: https://www.npmjs.com/package/webpack
[2]: https://www.npmjs.com/package/babel-core
[3]: https://www.npmjs.com/package/node-sass
[4]: https://github.com/postcss/postcss
[5]: http://breakpoint-sass.com

### Plugins and Loaders

| Name | Description |
|------|-------------|
| [**autoprefixer**][7] | A PostCSS plugin for adding browser prefixes to CSS. |
| [**babel-loader**][8] | The integration between Babel and Webpack. |
| [**babel-preset-env**][9] | Presets specify the output format for Babel. This preset allows us to generate ES5 output that will run on whichever browsers we specify. To specify which browsers are supported, add a `browserslist` entry to your project's `package.json` file. |
| [**css-loader**][11] | A Webpack loader which allows us to load CSS files with `@import` and `url()`. |
| [**mini-css-extract-plugin**][12] | Webpack's architecture is built around JavaScript. Support has been added for CSS, however it results in CSS being embedded inside JavaScript files. This package allows us to export CSS into standalone files. |
| [**sass-loader**][13] | The integration between Sass and Webpack. |
| [**style-loader**][14] | Allows us to embed CSS into JavaScript. This is useful for functional CSS that is specifically related to a JavaScript module, for example the `.shade-bg` rule in [DD Shade](https://hub.deloittedigital.com.au/stash/projects/FED/repos/dd-shade/browse) |
| [**webpack-cli**][15] | The command line interface for Webpack allows us to enter Webpack commands into our project's `package.json` file. |
| [**webpack-serve**][16] | A lean, modern, and flexible Webpack development server which supports live reloading. |
| [**webpack-merge**][17] | Provides a merge function that concatenates arrays and merges objects creating a new object. |
| [**webpack-bundle-analyzer**][18] | Provides an interface to visualize the size of Webpack output files in an interactive treemap. |
| [**browser-sync-webpack-plugin**][19] | Provides live reloading of CSS and synchronises browser actions. |
| [**friendly-errors-webpack-plugin**][20] | Cleans up stdout logging during builds and watch. |
| [**import-glob-loader**][21] | Allows importing of globs in SCSS via `@import "foo/**/*";` |

[7]: https://www.npmjs.com/package/autoprefixer
[8]: https://www.npmjs.com/package/babel-loader
[9]: https://www.npmjs.com/package/babel-preset-env
[11]: https://www.npmjs.com/package/css-loader
[12]: https://www.npmjs.com/package/mini-css-extract-plugin
[13]: https://www.npmjs.com/package/sass-loader
[14]: https://www.npmjs.com/package/style-loader
[15]: https://www.npmjs.com/package/webpack-cli
[16]: https://www.npmjs.com/package/webpack-serve
[17]: https://www.npmjs.com/package/webpack-merge
[18]: https://www.npmjs.com/package/webpack-bundle-analyzer
[19]: https://www.npmjs.com/package/browser-sync-webpack-plugin
[20]: https://www.npmjs.com/package/friendly-errors-webpack-plugin
[21]: https://www.npmjs.com/package/import-glob-loader

## Other packages used for builds/tests/visioning

* [Cypress](https://www.cypress.io/): Testing framework
* [Mocha](https://mochajs.org/): JS Unit tests
* [Lerna](https://github.com/lerna/lerna): Package version management
* [npm-run-all](https://www.npmjs.com/package/npm-run-all): Run npm tasks in parallel
* [rimraf](https://github.com/isaacs/rimraf): rm -rf for node
* [wait-on](https://www.npmjs.com/package/wait-on): Wait for resources to be available

## TODO

* Add linting
* Add tests
