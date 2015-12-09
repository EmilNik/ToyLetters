(function() {
	var sammyApp = Sammy('#content', function () {
		this.get('#/', function () {
			this.redirect('#/home');
		});

		this.get('#/home', eventsController.get);
		
		this.get('#/songs', songsController.get);
		
		this.get('#/events', eventsController.get);		
	})
	
	$(function () {
		sammyApp.run('#/');
	})
}())