var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'app/pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'app/pages/about.html',
            controller  : 'aboutController'
        })

        // route for the post page
        .when('/post', {
            templateUrl : 'app/pages/post.html',
            controller  : 'postController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'app/pages/contact.html',
            controller  : 'contactController'
        })
        .otherwise({ redirectTo: '/' });

});

app.controller('mainCtrl', function($scope){
    $scope.mainPage = {
        brand: "Best Blog!",
        siteHeading: "This is the Main page",
        subheading: "This is a Subheading",
        background: "img/home-bg.jpg"
    };
    $scope.aboutPage = {
        brand: "I'm the about",
        siteHeading: "This is the About page",
        subheading: "This is About subheading",
        background: "img/about-bg.jpg"
    };
    $scope.contactPage = {
        brand: "I'm the contact",
        siteHeading: "This is the Contact page",
        subheading: "This is Contact subheading",
        background: "img/contact-bg.jpg"
    };
    $scope.postPage = {
        brand: "I'm the post",
        siteHeading: "This is the Post page",
        subheading: "This is Post subheading",
        background: "img/post-bg.jpg"
    };
});

app.directive('appHeader', function(){
    return {
        restrict: 'E',
        scope: {
            headerInfo: '=info'
        },
        templateUrl: 'app/shared/header.html'
    };
});

app.directive('appFooter', function(){
    return {
        restrict: 'E',
        templateUrl: 'app/shared/footer.html'
    };
});

// create the controller and inject Angular's $scope
app.controller('mainController', ['$http', function($http) {
    // create a message to display in our view
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
    blog.findUser = function(arr, value) {
        for (var i=0, iLen=arr.length; i<iLen; i++) {
            if (arr[i].id == value){
                return arr[i];
            } 
        }
    };
}]);

app.controller('aboutController', function($scope) {
    $scope.message = 'This is a test: about';
});

app.controller('postController', function($scope) {
    $scope.message = 'This is a test: post';
});

app.controller('contactController', function($scope) {
    $scope.message = 'This is a test: contact';
});

