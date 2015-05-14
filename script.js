document.onload = function addElement () {
	for (var i = 0; i < 81; i++) {
		var colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
		'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
		'silver', 'teal', 'white', 'yellow'];
		if (i % 2 == 0) {
			var newDiv = document.createElement("div");
			newDiv.style.width = "11.1%";
			newDiv.style.float = "left";
			newDiv.style.paddingBottom = "11.1%";
			newDiv.style.backgroundColor = colors[Math.floor((Math.random()*16)+1)];
			document.body.appendChild(newDiv);
		} else {
			var newDiv = document.createElement("div");
			newDiv.style.width = "11.1%";
			newDiv.style.float = "left";
			newDiv.style.paddingBottom = "11.1%";
			newDiv.style.backgroundColor = colors[Math.floor((Math.random()*16)+1)];
			document.body.appendChild(newDiv);
		}
	}
}();