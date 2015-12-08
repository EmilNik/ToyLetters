(function () {
	function changeBackgroundImage() {
		var imagesUrlArr = [
			'10947455_1053328038016710_2785022104556472984_o',
			'12185114_10204546840221495_8763612778038204814_o',
			'12232672_1239672912715554_3835335110417238063_o'
		];

		var count = 0;

		function nextBackground() {
			count++;
			count = count % imagesUrlArr.length;
			var div = document.getElementById('background-img-div');
			div.style.backgroundImage = 'url("resources/images/' + imagesUrlArr[count] + '.jpg")';
		}
		setInterval(nextBackground, 10000);
	};

	function resize() {
		var div = document.getElementById('background-img-div');
		div.style.height = window.innerHeight + 'px';
	};
	// changeBackgroundImage();
	resize();
} ());