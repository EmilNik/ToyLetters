(function() {
    function config($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        
            var TEMPLATES_PREFIX = 'templates/',
                CONTROLLER_AS_VIEW_MODEL = 'vm';
        
        $routeProvider
            .when('/', {
                templateUrl: TEMPLATES_PREFIX + 'home.html',
                controller: 'HomeController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .otherwise({ redirectTo: '/' });
    }
    
    angular.module('ToyLettersApp.Services', []);
    angular.module('ToyLettersApp.Controllers', ['ToyLettersApp.Services']);
    angular.module('ToyLettersApp', ['ToyLettersApp.Controllers'])
        .config(['$routeProvider', '$locationProvider', config]);
}())