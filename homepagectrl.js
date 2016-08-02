app.controller('HomePageCtrl', ['$scope','$location','signupFormService','moment','$http',
    function($scope,$location,signupFormService,moment,$http) {
        var vm = this;
        vm.signupform = {};
        var dateMaskFormat = 'MM/DD/YYYY';
        vm.defaultDate = moment(new Date('')).format(dateMaskFormat);
        vm.signupform.myDate = new Date();
            vm.minDate = new Date(
                vm.signupform.myDate.getFullYear()-150,
                vm.signupform.myDate.getMonth(),
                vm.signupform.myDate.getDate());

        vm.maxDate = new Date(
            vm.signupform.myDate.getFullYear()-18,
            vm.signupform.myDate.getMonth(),
            vm.signupform.myDate.getDate());

       vm.isInvalid=function(field) {
            return field.$invalid && (field.$dirty || field.$$parentForm.$submitted);
        }
        vm.submit=function(){
            $location.path('/preview');
            signupFormService.setData(vm.signupform);
            vm.submitted_Data=angular.copy(vm.signupform);
            vm.submitted_Data.myDate = vm.signupform.myDate.getTime() + vm.signupform.myDate;
            console.log(vm.submitted_Data);
                    $http({
                        method: "POST",
                        url: "https://www.google.co.in/webhp?hl=en&sa=X&ved=0ahUKEwipq6X61JfOAhXCMo8KHT8FBisQPAgD",
                        data: vm.submitted_Data
                    })
                        .success(function(response){
                            //return response;
                        });
        }

    }
]);