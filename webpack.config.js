var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

// Read node modules to pass to externals
// To preserve 'require', prefix commonjs ref: http://jlongster.com/Backend-Apps-with-Webpack--Part-I
var nodeModules = {};

fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: './app.js',
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'backend.js'
    },
    externals: nodeModules
}