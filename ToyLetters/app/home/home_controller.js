(function() {
    function HomeController() {
        var vm = this;
        
        vm.home = 'HOME'
    }
    
    angular.module('ToyLettersApp.Controllers')
        .controller('HomeController', [HomeController]);
}())