//IIFE
(function(){
    'use strict';

    const URL = "https://covid19.mathdro.id/api";
    //ng-app module
    let app = angular.module('AngularApp', [])
//ng-controller 
    app.controller('myController', function($scope, $http){
$scope.title="Stay Home Stay Safe";
console.log("App loaded!");


//calling api
$http.get(URL).then(
    
    (response)=>{
//success
console.log(response);

 $scope.all_data=response.data;
},

(error)=>{
//error
console.log(error);
} );
//get country data for input field
$scope.get_cData = ()=>{
 let country=$scope.c;
 if(country== ''){
     return;
 }
 else 
 $http.get(`${URL}/countries/${country}`).then((response)=>{
//success   
console.log(response.data);
$scope.c_data= response.data;  
 },(error)=>{
     //error
     console.log(error);
 });
};

    });
})();