angular.module('unitTest')
	.factory('service', (function($http){

		return {
			get: function(){
				return 'mattia';
			},
			print: function(){
				return console.log('printing');

			}
		};
	}));
