var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    //publicPath: __dirname + "/assets/",
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      //{ test: /\.css$/, loader: "style-loader!css-loader" },
      //{ test: /\.csv$/, loader: 'dsv-loader' }
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }
    ],
    /*rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]*/
  },
  watch:true,
  plugins: [HTMLWebpackPluginConfig]
};
