scotchApp.controller('charlesController', function($scope, $http) {
  $scope.message = 'Look! I am an CHARLES page.';
  $scope.Users = [
    /*
    {frname: "BOB", lastname: "BOBOBOB", },
    {frname: "RICK", lastname: "BOBOBOB", },
    {frname: "MORTY", lastname: "BOBOBOB", },
    */
  ];

  $http.get("/api/users/list")
  .then(function(response) {
    console.log("response: ", response);
    $scope.Users = response.data;
  });

});
