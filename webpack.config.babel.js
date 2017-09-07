import path from 'path';
import { WDS_PORT } from './webpack/config';

module.exports = {
    //webpack folder`s entry js - excluded from jekyll build
    entry: [`./webpack/entry.js`],
    output: {
        // Put the generated file in the assets folder for Jekyll
        path: path.resolve(__dirname, `assets/javascripts`),
        filename: `bundle.js`,
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: `babel-loader`,
            },
        ],
    },
    resolve: {
        extensions: [`.js`, `.jsx`],
    },
};
