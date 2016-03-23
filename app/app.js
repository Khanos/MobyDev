var app = angular.module('mainApp', []);

app.controller('BlogController', ['$http', function($http){    
    var blog = this;
    blog.limitPost = 5;
    blog.posts = {};
    blog.users = {};
    $http.get('http://jsonplaceholder.typicode.com/posts').success(function(data){
      blog.posts = data;
    });
    $http.get('http://jsonplaceholder.typicode.com/users').success(function(data){
      blog.users = data;
    });

    blog.getUser = function(userId){
    	$http.get('http://jsonplaceholder.typicode.com/users?id='+userId).then(function(data){
      		return "hola";
    	}, function(){
    		return "Error: User not found"
    	});   	
    };

	blog.findUser = function(arr, value) {
		for (var i=0, iLen=arr.length; i<iLen; i++) {
			if (arr[i].id == value){
				return arr[i];
			} 
	  	}
	};   	 
    
  }]);