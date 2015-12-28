(function() {
    function config($routeProvider) {
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
    
    angular.module('ToyLettersApp.Controllers', []);
    angular.module('ToyLettersApp', ['ToyLettersApp.Controllers'])
        .config(['$routeProvider', config]);
}())