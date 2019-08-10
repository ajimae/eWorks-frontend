const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
  },
  devServer: {
    port: 8081,
    compress: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    contentBase: '/src',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',       // creates style nodes from JS strings
          'css-loader',         // translates CSS into CommonJS
          'sass-loader'         // compiles Sass to CSS, using Node Sass by default
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      filename: "./index.html",
      template: "./src/index.html"
    })
  ]
};
