(function (){
    function data($http, $q) {
        
        function get(url, params) {
            var defered = $q.defer();

            $http
                .get(url, {
                    params: params
                })
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (err) {
                    defered.reject(err.data);
                });

            return defered.promise;
        }
        
        function post(url, data) {
            var defered = $q.defer();

            $http
                .post(url, data)
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (err) {
                    defered.reject(err.data);
                });

            return defered.promise;
        }
        
        return {
            get: get,
            post: post
        }
    }
    
    angular.module('ToyLettersApp.Services')
        .factory('data', ['$http', '$q', data]);
}())