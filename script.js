document.onload = function addElement () {
	for (var i = 0; i < 81; i++) {
		if (i % 2 == 0) {
			var newDiv = document.createElement("div");
			newDiv.style.width = "11.1%";
			newDiv.style.float = "left";
			newDiv.style.paddingBottom = "11.1%";
			newDiv.style.backgroundColor = 'red';
			document.body.appendChild(newDiv);
		} else {
			var newDiv = document.createElement("div");
			newDiv.style.width = "11.1%";
			newDiv.style.float = "left";
			newDiv.style.paddingBottom = "11.1%";
			newDiv.style.backgroundColor = 'black';
			document.body.appendChild(newDiv);
		}
	}
}();