
'use strict'
/*
  webpack server config
 */
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const config = require('../config')
const webpackServerPlugins = require('../utils/webpackServerPlugins')
const webpackServerModuleRules = require('../utils/webpackServerModuleRules')
// webpack server config
module.exports = function webpackServerConfig (name, argv) {
  const dev = process.env.NODE_ENV === 'development'

  return {
    entry: dev ? [
      'webpack/hot/poll?1000',
      path.resolve(`src/index`)
    ] : path.resolve(`src/index`),
    mode: dev ? 'development' : 'production',
    output: {
      path: config.dist,
      publicPath: '/',
      filename: 'index.js',
      libraryTarget: 'commonjs',
      chunkFilename: `chunk/[name].js`
    },
    optimization: {
      minimizer: []
    },
    externals: [nodeExternals({
      whitelist: ['webpack/hot/poll?1000']
    })],
    target: 'node',
    module: {
      rules: webpackServerModuleRules(dev, name)
    },
    plugins: webpackServerPlugins(dev, name),
    context: __dirname,
    node: {
      __filename: false,
      __dirname: false
    },
    devtool: 'cheap-module-source-map'
  }
}
