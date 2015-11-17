var myApp = angular.module('houseList', ['ngRoute']);
myApp.controller('housesListCtrl', housesListCtrl);
myApp.controller('editController', editController);
// myApp.controller('deleteCtrl', deleteCtrl);
// myApp.controller('addCtrl', addCtrl);


myApp.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);


	$routeProvider.when('/',{
		templateUrl: 'pages/list.html',
		controller: 'housesListCtrl'
	}).
	when('/list',{
		templateUrl: "pages/list.html",
		controller: 'housesListCtrl'
	}).
	when('/delete/:houseIndex', {
		templateUrl: 'pages/delete.html',
		controller: 'editController'
	}).
	when('/add',{
		templateUrl: 'pages/add.html',
		controller: 'editController'
	}).
	when('/edit/:houseIndex', {
		templateUrl: 'pages/edit.html',
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

function editController($scope, $location, $routeParams){
	$scope.houses = houses;
	$scope.view = 'list'
	$scope.thisHouse = $scope.houses[$routeParams.houseIndex]

	$scope.changeView = function(view, index){
		if(index != undefined){
			view += '/' + index
		}
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
		$scope.changeView('delete', index)
		$scope.thisHouse = $scope.houses[index];
	}


	$scope.editHouse = function(index){
		$scope.changeView('edit', index);
		$scope.nickName = $scope.houses[index].nickName;
		
	}
	$scope.confirmDelete = function(){
		$scope.changeView('list', $location);
		
		$scope.houses.splice($routeParams.houseIndex, 1);
	}
	$scope.confirmEdit = function(){
		$scope.houses[$routeParams.houseIndex].nickName = $scope.nickName
		$scope.nickName = ''
		$scope.changeView('list', $location)
	}
	
}


