
// //----------Module------------------
// angular.module('Name', []);

// //----------Factory------------------
// angular.module('Name').factory('factoryName', [function(){

// }]);

// //----------Contoller------------------
// angular.module('Name').controller('controllerName', ['$scope', 'factoryName', function($scope, factoryName) {

// }]);

angular.module('quoteR', []);

angular.module('quoteR').factory('quoteFactory', [function(){
	

	var Quote = function(quote, author, rating) {
		this.quote = quote;
		this.author = author;
		this.rating = rating || 1;
	}

	var quoteList = [];

	return {
		quoteList        : quoteList,
		quoteConstructor : Quote,
	}

}]);

angular.module('quoteR').controller('quotroller', ['$scope', 'quoteFactory', function($scope, quoteFactory) {
	
	var Quote = quoteFactory.quoteConstructor;
	$scope.quoteList = quoteFactory.quoteList;
	

	$scope.quoteCheck = function(quote, author) {
		if ($scope.quote != '' && $scope.author != '') {
			var newQuote = new Quote(quote, author);
			$scope.quoteList.push(newQuote);
			$scope.quote = '';
			$scope.author = '';
		}
		else {
			alert('Please Complete the form to Submit your Quote')
		}
	}

	$scope.rateMate = function(obj, rating) {
		console.log(obj.rating);
		obj.rating = rating;
		console.log(obj.rating);
	}

	$scope.removeQuote = function(obj) {
		$scope.quoteList.splice($scope.quoteList[obj],1);
		console.log($scope.quoteList);
	}

}]);






