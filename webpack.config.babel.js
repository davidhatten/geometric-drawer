import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyESPlugin from 'uglifyjs-webpack-plugin';

module.exports = {
    //webpack folder`s entry js - excluded from jekyll build
    entry: [`./webpack/entry.js`],
    output: {
        // Put the generated file in the assets folder for Jekyll
        path: path.resolve(__dirname, `assets/javascripts`),
        filename: `bundle.js`,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: `babel-loader`,
            },
            {
              test: /\.css$/,
              loader: `style-loader!css-loader`,
              exclude: {
                    test   : path.resolve(__dirname, "node_modules"),
                    exclude: path.resolve(__dirname, "node_modules/antd"),
              },
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }],
           },
        ],
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ],
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = 'source-map';

    module.exports.plugins = (module.exports.plugins || []).concat([
        new UglifyESPlugin({  }),
    ]);
}