const path = require('path')
// const glob = require('glob')

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(`${__dirname}/src/index.js`)
  },
  output: {
    path: path.resolve(`${__dirname}/dist/`),
    filename: '[name].js'
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['@babel/preset-env']
  //         }
  //       }
  //     }
  //   ]
  // }
}
