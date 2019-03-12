'use strict'

const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // 输出
  output: {
    path: resolve('dist_storage'),
    localpath: resolve('dist'),
    assetsPath: 'static',
    publicPath: '/AdminLTE/dist/'
  },
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/AdminLTE/dist/',
    proxyTable: {
      // 所有以api开头的接口都会走yapi，当然你可以更改api的名称
      '/api': {
        target: 'http://yapi.imeete.com/mock/476',
        changeOrigin: true
      }
    },
    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // 生产环境的html名
    index: path.resolve(__dirname, '../dist/index.html'),

    filename: resolve('../../resources/views/index.blade.php'), // 'index.html',
    // 依照的html模板目录
    template: resolve('../../resources/views/index.template.php'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsStorageRoot: path.resolve(__dirname, '../dist_storage'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/AdminLTE/dist/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
