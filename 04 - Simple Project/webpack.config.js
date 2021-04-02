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
          test: /\.styl/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "stylus-loader",
            },
          ],
        },
      ],
    }
};