'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.resolve(__dirname, '..', dir)
}
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.min.js', // $表示精确匹配
      '@': resolve('src'),
      'src': resolve('src'),
      'views': resolve('src/views'),
      assets: resolve('src/assets'),
      static: resolve('static'),
      components: resolve('src/monitor/components'),
      utils: resolve('src/monitor/utils'),
      plugins: resolve('src/monitor/plugins'),
      api: resolve('src/monitor/api')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        exclude: [resolve('./static'), resolve('./test'), resolve('./src/static'), resolve('./src/utils'), resolve('./node_modules')],
        // 在babel-loader对源码进行编译前进行lint的检查
        enforce: 'pre',
        use: [{
          loader: 'eslint-loader',
          options: {
            // 编译后错误报告格式
            formatter: require('eslint-friendly-formatter')
          }
        }]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
