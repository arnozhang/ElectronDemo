const path = require('path');

module.exports = {
    target: 'electron',
    entry: {
        'MainPage': './MainPage.tsx'
    },

    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },

    devtool: 'source-map',
    node: {
        __filename: false,
        __dirname: false
    },

    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|dist)/,
                use: [ { loader: 'ts-loader' } ]
            }
        ]
    },
};

