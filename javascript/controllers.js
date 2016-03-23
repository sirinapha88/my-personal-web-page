app.controller("HomeController", function($scope, $location){

});
app.controller("ContactController", function($scope, $location){

});
app.controller("ProjectsController", function($scope, $location){
    //add repeat in here
    $scope.projects = [
        {
            projectName: "Bike Parking",
            miniName: "in San Francisco",
            url: "http://thatsedrich.github.io/project-app/",
            imageURL: "http://i.imgur.com/2nl5Gv1.jpg"
        },
        {
            projectName: "Fight Matching",
            miniName: "for Kickboxing and MMA",
            url: "https://limitless-mesa-89502.herokuapp.com/",
            imageURL: "http://i.imgur.com/vLRAz0M.jpg"
        },
        {
            projectName: "PoliTweet",
            miniName: "to follow the 2016 presidential candidates",
            url: "http://poli-tweet.herokuapp.com/#/",
            imageURL: "http://i.imgur.com/daAop09.png"
        },
        {
            projectName: "Capstone Project",
            miniName: "for Galvanize Hiring Day",
            url: "",
            imageURL: ""
        },
        {
            projectName: "State Plane Coordinate Surveyor App",
            miniName: "Like TheOdolite",
            url: "",
            imageURL: ""
        },
        {
            projectName: "Galvanize Cheat Sheet",
            miniName: "the things I've learned during Galvanize.",
            url: "https://github.com/Thatsedrich/galvanize-notes",
            imageURL: "http://i.imgur.com/tDkiJVB.png"
        }
    ];
});
app.controller("ResumeController", function($scope, $location){

});
