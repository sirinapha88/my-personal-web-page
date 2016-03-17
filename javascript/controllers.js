app.controller("HomeController", function($scope, $location){

});
app.controller("ContactController", function($scope, $location){

});
app.controller("ProjectsController", function($scope, $http, $location){
    $http.get()
    .then(function(data){
        $scope.classification = data;
    });
});
app.controller("ResumeController", function($scope, $location){

});
