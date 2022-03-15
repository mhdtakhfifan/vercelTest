var path = require("path");
// const { webpack } = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


console.log("webpack ran");

module.exports = (env, argv) => {
    console.log("mode : ",argv.mode)
    return config 

}
var config  = {
    mode: 'development',
    // output: {
    //     path: path.resolve(__dirname, '/dist'),
    //     filename: 'index_bundle.js',
    //   },
    module: {
      rules: [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ,
        {
            test: /\.(png|svg|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({
            // filename:"[name].[hash].css",
        })
    ],
    devServer: {
      historyApiFallback: true,
    }
  };