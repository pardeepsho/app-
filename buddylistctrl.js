app.controller('buddylistPageCtrl', ['$scope','$location','signupFormService','$http',
    function($scope,$location,signupFormService,$http) {
        var vm = this;

            var x=signupFormService.buddylistdata();
            console.log(x,'test');

        (function init() {
            $http.get("buddylist.json")
                .then(function(response) {
                    vm.buddylistData=response.data;
                });
        })();

    }
]);