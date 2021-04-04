const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: [
      './src/index'
    ],
    output: {
      filename: 'main.js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/dist/'
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
            {
              loader: "stylus-loader", // compiles Styl to CSS
            },
          ],
        },
      ],
    }
};