const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules|bower_components/,
            use: {
                loader: 'babel-loader',
            },
        }, ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: /node_modules|bower_components/,
                    name: 'vendor',
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    devtool: 'source-map',

};