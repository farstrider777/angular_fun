const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/app.module.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(path.resolve(), 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {}),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './public/index.html'
    }),
    new ExtractTextPlugin('css/bundle-[contenthash:6].css'),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ],
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader?exportAsEs6Default',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader'
      },
      {test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url-loader?limit=10000'},
      {
        test: /\.(scss)$/,
        use: [
          'style-loader',
          'css-loader?minimize',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.html', '.css', '.scss']
  }
};
