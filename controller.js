var myApp = angular.module('houseList', ['ngRoute']);
myApp.controller('housesListCtrl', housesListCtrl);
myApp.controller('editController', editController);
// myApp.controller('deleteCtrl', deleteCtrl);
// myApp.controller('addCtrl', addCtrl);

myApp.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);


	$routeProvider.when('/',{
		templateUrl: 'list.html',
		controller: 'housesListCtrl'
	}).
	when('/list',{
		templateUrl: "list.html",
		controller: 'housesListCtrl'
	}).
	when('/delete', {
		templateUrl: 'delete.html',
		controller: 'editController'
	}).
	when('/add',{
		templateUrl: 'add.html',
		controller: 'editController'
	}).
	when('/edit', {
		templateUrl: 'edit.html',
		controller: 'editController'
	}).
	otherwise({
		redirectTo: '/'
	});

	
});


function housesListCtrl($scope, $location){
	var numDisplayedHouses = 0;
	$scope.houses = houses;
	$scope.addHouse = function(){
		$scope.houses = houses.slice(0,++numDisplayedHouses);
	}
	$scope.clearHouses = function(){
		$scope.houses = [];
		numDisplayedHouses = 0;
	}

	$scope.enableAdd = function(){
		return houses.length > numDisplayedHouses
	}
}

function editController($scope, $location){
	$scope.houses = houses;
	$scope.view = 'list'
	var viewIndex = -1;

	$scope.changeView = function(view){
		console.log($location);
		$location.path(view);
	}


	$scope.addNewHouse = function(){
		$scope.houses.push(new House($scope.nickName, $scope.imgSrc, $scope.address, $scope.city, $scope.state, $scope.zipCode, $scope.forSale, $scope.salePrice, $scope.estimatedPrice, $scope.estimatedMortgage, $scope.imgWidth, $scope.discount) )
		$scope.changeView('list')
		$scope.nickName = '';
		$scope.imgSrc = '';
		$scope.address = '';
		$scope.city = '';
		$scope.state = '';
		$scope.zipCode = '';
		$scope.forSale = '';
		$scope.salePrice = '';
		$scope.estimatedPrice = '';
		$scope.discount = '';
		$scope.estimatedMortgage = '';
	}

	$scope.deleteHouse = function(index){
		$scope.changeView('delete')
		viewIndex = index
		$scope.thisHouse = $scope.houses[index];

	}

	$scope.confirmDelete = function(){
		$scope.changeView('list');
		
		$scope.houses.splice(viewIndex, 1);
		
	}

	$scope.editHouse = function(index){
		$scope.changeView('edit');
		$scope.nickName = $scope.houses[index].nickName
		viewIndex = index;
	}
	
	$scope.confirmEdit = function(){
		$scope.houses[viewIndex].nickName = $scope.nickName
		$scope.nickName = ''
		$scope.changeView('list')
	}
}

