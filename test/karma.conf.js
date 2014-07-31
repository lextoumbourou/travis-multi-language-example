module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      'app/js/*.js',
      'test/js/*.js'
    ],
    exclude: [],
    preprocessors: {'app/js/app.js': 'coverage'},
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    coverageReporter: {
      type : 'lcovonly'
    }
  });
};
