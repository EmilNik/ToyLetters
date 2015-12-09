var songsController = function() {
	function get() {
		templates.get('songs')
			.then(function (template) {
				$('#content').html(template())
		}
	)}
	
	return{
		get: get
	}
}();