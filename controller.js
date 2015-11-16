var myApp = angular.module('houseList', []);
myApp.controller('housesListCtrl', housesListCtrl);
myApp.controller('editController', editController);
	
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

function editController($scope){
	$scope.houses = houses;
	$scope.view = 'list'
	var viewIndex = -1;

	$scope.changeView = function(view){
		$scope.view = view;
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