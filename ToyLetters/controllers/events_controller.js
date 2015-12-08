var eventsController = function() {
	function get() {
		templates.get('events')
			.then(function (template) {
				$('#content').html(template())
		}
	)}
	
	return {
		get: get
	}
}();