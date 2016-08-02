app.controller('previewPageCtrl', ['$scope','$location','signupFormService',
    function($scope,$location,signupFormService) {
        var vm = this;
        vm.previewData=signupFormService.getData();
        vm.buddylist=function(){
            $location.path('/buddylist');
        }
    }
]);