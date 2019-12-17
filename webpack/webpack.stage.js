const webpack = require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const common = require('./webpack.common.js')

const pathsToClean = [
  './dist'
]

const cleanOptions = {
  exclude: ['_redirects'],
  root: process.cwd(),
  verbose: true,
  dry: false
}

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(
      pathsToClean,
      cleanOptions
    ),
    new CopyWebpackPlugin([
      {
        from: './assets/**/*',
        to: './'
      }
    ])
  ]
})
