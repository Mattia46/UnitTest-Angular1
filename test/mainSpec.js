describe('starting poing', function(){

	var ctrl;
	var $q;
	var deferred;
	var serviceMock;


	beforeEach(module('unitTest'));
	beforeEach(inject(function($controller, $q, $rootScope){
		deferred = $q.defer();
		serviceMock = { // create a dummy function to replace the real one
			get: function(){
				return deferred.promise;
			},
			print: function(){
				return deferred.promise;
			}
		};
		ctrl = $controller('mainCtrl', {
			service: serviceMock,
		});
	}));

	it('should divide by 2', function(){
		expect(ctrl.divide(8)).toBe(4);
	});

	it('should sum ', function(){
		expect(ctrl.sum(2, 4)).toBe(6);
	});

	it('should call the service', inject(function($rootScope){
		deferred.resolve({name: 'mattia'}); // what I want to return from the function
		serviceMock.get().then(function(){}); // run the function to mock. Don't need to pass
	       	//anything because it's gettin the deferred above
		ctrl.update(); // call the function who calls the service
		$rootScope.$apply(); // apply the mock
		expect(ctrl.dataGet.name).toBe('mattia');
	}));

	it('should call the service and print', inject(function($rootScope){
		deferred.resolve('printing');
		serviceMock.print().then(function(){});
		ctrl.print();
		$rootScope.$apply();
		expect(ctrl.dataPrint).toBe('printing');

	}));

});
