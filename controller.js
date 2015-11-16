var myApp = angular.module('houseList', []);
myApp.controller('housesListCtrl', housesListCtrl);
	
function housesListCtrl($scope){
	var numDisplayedHouses = 0;
	$scope.houses = [];
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