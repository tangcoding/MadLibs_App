var app = angular.module("madlibs",['ngAnimate']);

app.controller("form_controller",function($scope){

	$scope.submit_madlib = function(){
		$scope.madlib_form.$submitted=true;
	};

	$scope.initialized = function(){
		$scope.madlib_form.$submitted=false; 
		$scope.input.gender =undefined;
		$scope.input.name =''; 
		$scope.input.dirty_task =''; 
		$scope.input.obnoxious_celebrity =''; 
		$scope.input.job_title =''; 
		$scope.input.celebrity =''; 
		$scope.input.huge_number =''; 
		$scope.input.tedious_task =''; 
		$scope.input.useless_skill =''; 
		$scope.input.adjective =''; 

	};

});