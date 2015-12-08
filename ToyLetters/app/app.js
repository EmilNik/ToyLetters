(function () {
	function changeBackgroundImage() {
		var imagesUrlArr = [
			'12191148_1240706979278814_1143590211717976040_o',
			'12185114_10204546840221495_8763612778038204814_o',
			'12232672_1239672912715554_3835335110417238063_o',
			'11223777_1252754234740755_399494257669225033_o'
		];

		var count = 0;
		var div = document.getElementById('background-img-div');
		div.style.backgroundImage = 'url("resources/images/' + imagesUrlArr[count] + '.jpg")';
		function nextBackground() {
			count++;
			count = count % imagesUrlArr.length;
			div.style.backgroundImage = 'url("resources/images/' + imagesUrlArr[count] + '.jpg")';
		}
		setInterval(nextBackground, 10000);
	};

	function resize() {
		var div = document.getElementById('background-img-div');
		div.style.height = window.innerHeight + 'px';
	};
	changeBackgroundImage();
	resize();
	$(window).resize(resize);
} ());