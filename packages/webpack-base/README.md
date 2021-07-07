# Doghouse webpack base

This is a helper package that abstracts common webpack configuration and plugins. It allows adding custom config
which gets merged with the base config using [Webpack merge](https://github.com/survivejs/webpack-merge).

Includes common packages required by most projects such as Babel, SASS, Webpack, etc. See [package.json](package.json)
for a full list

## Versions

Going forward, versioning aligns with nodejs version requirements. The second part of the version should align with 
tested node version, eg `1.NODE_VERSION.0` 

### 1.0.x 
Suitable for older versions of node eg 8.x to 12.x

### 1.16.x
Suitable for node 16

## More information

[View the README here](https://github.com/DoghouseMedia/webpack-project)
