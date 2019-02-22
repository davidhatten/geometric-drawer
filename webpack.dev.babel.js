import merge from 'webpack-merge';
import common from './webpack.common.babel.js';
import path from 'path';

module.exports = merge(common, {
    mode: `development`,
    devtool: `source-map`,
    devServer: {
        contentBase: path.resolve(__dirname, `webpack`),
        port: 8081,
    },
});