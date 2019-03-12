// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],
    // 测试入口文件
    files: ['./index.js'],
    // 用webpack解析，同时显示测试文件路径
    preprocessors: {
      './index.js': ['webpack', 'sourcemap'],
    },
    // 设置测试覆盖率输出插件
    reporters: ['spec', 'coverage'],
    // karma-coverage配置，配置测试覆盖率的输出目录及格式
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.'},
        { type: 'text-summary'},
      ]
    },
    browsers: ['Chrome'],
    //  设置运行完成是否自动退出
    singleRun: false,
    // 是否打印webpack打包信息
    webpackMiddleware: {
      noInfo: true
    },
    webpack: webpackConfig
  })
}
// module.exports = function karmaConfig (config) {
//   config.set({
//     // to run in additional browsers:
//     // 1. install corresponding karma launcher
//     //    http://karma-runner.github.io/0.13/config/browsers.html
//     // 2. add it to the `browsers` array below.
//     browsers: ['PhantomJS'],
//     frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
//     reporters: ['spec', 'coverage'],
//     files: ['../node_modules/babel-polyfill/dist/polyfill.js', './index.js'],
//     preprocessors: {
//       './index.js': ['webpack', 'sourcemap']
//     },
//     webpack: webpackConfig,
//     webpackMiddleware: {
//       noInfo: true
//     },
//     coverageReporter: {
//       dir: './coverage',
//       reporters: [
//         { type: 'lcov', subdir: '.' },
//         { type: 'text-summary' }
//       ]
//     }
//   })
// }
