(function(){
    angular.module('signupForm').service('signupFormService', function signupFormService($http) {

        var self = this;
        var formdata;
        var buddylist_data;
       this.setData=function(data){
           formdata=data;
       }

        this.getData=function(){
            return formdata;
        }
        this.buddylistdata=function(){
            $http.get("buddylist.json")
                .success(function(response) {
                    console.log(response);
                    return  buddylist_data=response.data;
                });

        }


    });
})();