var app = angular.module("templateGenerator", []);
app.controller('vm.JSController', ['$scope', '$http', function($scope, $http) {
    $scope.Data_News = [
        {title: "City Lights In New Your", subtitle: "The city that never sleeps.", content: "New York is a state in the northeastern U.S., known for New York City and towering Niagara Falls. NYC’s island of Manhattan is home to the Empire State Building, Times Square and Central Park.", time: "6 mins ago", comments: "39 comments"},
        {title: "City Lights In New Your", subtitle: "The city that never sleeps.", content: "New York is a state in the northeastern U.S., known for New York City and towering Niagara Falls. NYC’s island of Manhattan is home to the Empire State Building, Times Square and Central Park.", time: "6 mins ago", comments: "39 comments"},
        {title: "City Lights In New Your", subtitle: "The city that never sleeps.", content: "New York is a state in the northeastern U.S., known for New York City and towering Niagara Falls. NYC’s island of Manhattan is home to the Empire State Building, Times Square and Central Park.", time: "6 mins ago", comments: "39 comments"},
    ];
}]);