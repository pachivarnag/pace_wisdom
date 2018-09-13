//jquery code
$(document).ready(function(){

	$(".ileft").hide();
	$(".iright").hide();
	 //for left side image
 	$(".left").mouseover(function(){
        $(".left").css({"z-index" : "10" , "transform" : "scaleX(1.3)", "transform-origin": "top left"});
        $(".ileft").show();
        
    }); 
    $(".left").mouseout(function(){
        $(".left").css({"z-index" : "10" , "transform" : "scaleX(1)"});
        $(".ileft").hide();
        
    });

    //for right side image
    $(".right").mouseover(function(){
        $(".right").css({"z-index" : "10" , "transform" : "scaleX(1.3)", "transform-origin": "right top"});
        $(".iright").show();
        
    });
    $(".right").mouseout(function(){
        $(".right").css({"z-index" : "0" , "transform" : "scaleX(1)" });
        $(".iright").hide();
         
    });


});

//angular code

var app = angular.module('myApp', []);

app.controller('customersCtrl', function($scope, itemsFactory) {
    itemsFactory.getItems().then(function(response){
         $scope.myData = response.data.records;
    });

});

// custom factory

 app.factory('itemsFactory', function($http) {
   var factory = {};

   factory.getItems = function () {
    return  $http.get('http://webcloudguru.com/prasanna/employees.php');  
   };

   return factory;
});
