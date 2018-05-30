/* eslint-env node */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Memes',
      filename: 'dist/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test:/\.css$/,
        exclude:/node-modules/,
        use: [
          {
            loader: 'style'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
};