angular.module('unitTest')
	.controller('mainCtrl', function(service){

		var self = this;

		self.sum = function(x, y){
			return x + y;
		};

		self.divide = function(x){
			return x / 2;
		};

		self.update = function(){
			service.get().then(function(data){
				self.dataGet = data;
				console.log('here', self.data);
			});
		};

		self.print = function(){
			service.print().then(function(data){
				self.dataPrint = data;
				console.log('test print', data);
			});
		};
	});
