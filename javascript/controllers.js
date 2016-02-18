app.controller("HomeController", function($scope, $location){
    repeatingRoutes($scope, $location);
});
app.controller("ContactController", function($scope, $location){
    repeatingRoutes($scope, $location);
});
app.controller("ProjectsController", function($scope, $location){
    repeatingRoutes($scope, $location);
});
app.controller("ResumeController", function($scope, $location){
    repeatingRoutes($scope, $location);
});

function repeatingRoutes(scoping, location){
    scoping.toHome = function(){
        location.path('/home');
    }
    scoping.toContact = function(){
        location.path('/contact');
    }
    scoping.toProjects = function(){
        location.path('/projects');
    }
    scoping.toResume = function(){
        location.path('/resume');
    }
}
