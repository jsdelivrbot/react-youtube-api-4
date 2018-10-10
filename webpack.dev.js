const path = require('path');
const merge = require('webpack-merge');
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist/index.html'),
        port: 3000,
        hotOnly: true
    },
});
