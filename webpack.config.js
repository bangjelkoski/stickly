const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'Stickly',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: process.env.NODE_PORT || 9000,
    hot: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        enforce: 'pre',
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'style-loader'
        }
      },
      {
        enforce: 'pre',
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'css-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html')
    })
  ]
};
