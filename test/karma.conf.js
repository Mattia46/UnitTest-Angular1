// Karma configuration
// Generated on Thu Oct 13 2016 18:44:23 GMT+0100 (BST)

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '', // CHECK IT TO CALL THE FILES BELOW


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.11/angular.js',
			'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.11/angular-route.js',
			'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.11/angular-mocks.js',
			'./../app/*.js',
			'./../app/**/*.js',
			'./mainSpec.js'
		],


		// list of files to exclude
		exclude: [
		],

		reporters: ['spec'],
		specReporter: {
			maxLogLines: 5,         // limit number of lines logged per test 
			suppressErrorSummary: true,  // do not print error summary
			suppressFailed: false,  // do not print information about failed tests
			suppressPassed: false,  // do not print information about passed tests
			suppressSkipped: true,  // do not print information about skipped tests
			showSpecTiming: false // print the time elapsed for each spec
		},



		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		//reporters: ['progress'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		//browsers: ['Chrome'],
		browsers: ['Chrome'],

		plugins: [
			'karma-jasmine',
			'karma-chrome-launcher',
			'karma-spec-reporter' // Install GLOBALLY
			//'karma-phantomjs-prebuild'
		],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	})
}
