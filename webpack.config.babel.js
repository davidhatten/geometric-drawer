import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

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
            // for .less files:
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader' },
              { loader: 'less-loader' }
            ]
          }),
          exclude: [/[\/\\]node_modules[\/\\]semantic-ui-less[\/\\]/]
        },

        // for semantic-ui-less files:
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader' },
              {
                loader: 'semantic-ui-less-module-loader',
                // you can also add specific options:
                options: { siteFolder: path.join(__dirname, 'src/site') }
              }
            ]
          }),
          include: [/[\/\\]node_modules[\/\\]semantic-ui-less[\/\\]/]
        },

        // loader for static assets
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10240,
              absolute: true,
              name: 'images/[path][name]-[hash:7].[ext]'
            }
          },
          include: [path.join(__dirname, 'src'), /[\/\\]node_modules[\/\\]semantic-ui-less[\/\\]/]
        }, {
          test: /\.(woff|woff2|ttf|svg|eot)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: 'fonts/[name]-[hash:7].[ext]'
            }
          },
          include: [path.join(__dirname, 'src'), /[\/\\]node_modules[\/\\]semantic-ui-less[\/\\]/]
        }
        ],
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};
