import merge from 'webpack-merge';
import common from './webpack.common.babel.js';
import webpack from 'webpack';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import MinifyPlugin from 'babel-minify-webpack-plugin';

module.exports = merge(common, {
    mode: `production`,
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new OptimizeCssAssetsPlugin(),
    ],
    optimization: {
        minimizer: [new MinifyPlugin()],
    },
});