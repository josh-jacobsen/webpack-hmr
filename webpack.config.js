var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, 'static'),
    filename: "bundle.js"
  }
}
