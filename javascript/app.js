var app = angular.module('myPersonalWebsite', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: "./views/home.html",
        controller: "HomeController"
    }).when('/contact', {
        templateUrl: "./views/contact.html",
        controller: "ContactController"
    }).when('/projects', {
        templateUrl: "./views/projects.html",
        controller: "ProjectsController"
    }).when('/resume', {
        templateUrl: "./views/resume.html",
        controller: "ResumeController"
    }).otherwise({
        redirectTo: "/"
    });
    $locationprovider.html5mode(true);
});
