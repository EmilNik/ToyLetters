(function() {
	var sammyApp = Sammy('#content', function () {
		this.get('#/', function () {
			this.redirect('#/home');
		});

		this.get('#/home', eventsController.get);
	})
	
	$(function () {
		sammyApp.run('#/');
	})
}())