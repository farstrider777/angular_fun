const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './src/app.spec.js'
    ],
    autoWatch: true,
    singleRun: false,
    failOnEmptyTestSuite: true,
    logLevel: config.LOG_WARN,
    browsers: ['Chrome'],
    reporters: ['dots', 'kjhtml'],
    port: 9876,
    colors: true,

    /* karma-webpack config */
    preprocessors: {
        './src/app.spec.js': ['webpack'],
    },
    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },
  });
};
