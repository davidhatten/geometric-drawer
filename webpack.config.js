const path = require(`path`);
const semantic = require(`semantic-ui-react`);

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
                query: {
                    presets: [`react`, `es2015`],
                    plugins: [`transform-class-properties`],
                },
            },
        ],
    },
};
