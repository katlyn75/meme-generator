/* eslint-env node */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


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
    new CleanWebpackPlugin(`${path}/bundle.*.js`),
    new HtmlWebpackPlugin({
      title: 'Meme-Maker',
      filename: '.dist/index.html'
    }),
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
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'dirname/[hash].[ext]'
          }
        }
        ]
      },
      {
        test:/\.css$/,
        exclude:/node-modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
};