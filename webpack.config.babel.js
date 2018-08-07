import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyESPlugin from 'uglifyjs-webpack-plugin';
import AntdScssThemePlugin from 'antd-scss-theme-plugin';

module.exports = {
    //webpack folder`s entry js - excluded from jekyll build
    entry: [`./webpack/entry.js`],
    output: {
        // Put the generated file in the assets folder for Jekyll
        path: path.resolve(__dirname, `assets/javascripts`),
        filename: `bundle.js`,
    },
    devServer: {
        contentBase: path.resolve(__dirname, `webpack`),
        port: 8081,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: `babel-loader`,
                options: {
                    plugins: [
                        ['import', { libraryName: "antd", style: true }],
                    ],
                },
            },
            {
                test: /\.scss$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[local]',
                        },
                    },
                    AntdScssThemePlugin.themify(`sass-loader`),
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {loader: "style-loader"}, // creates style nodes from JS strings
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        },
                    }, // translates CSS into CommonJS
                    AntdScssThemePlugin.themify("less-loader"),
                ],
            },
        ],
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new AntdScssThemePlugin(path.join(__dirname, 'theme.scss')),
    ],
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = 'source-map';

    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new UglifyESPlugin({  }),
    ]);
}