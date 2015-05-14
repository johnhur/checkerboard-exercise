document.onload = function addElement(){
		var r = 100;
		var g = 40;
		var b = 150;
		var r1 = 5;
		var g1 = 5;
		var b1 = 5;	
	for (var i = 0; i < 99; i++){
		var col = "rgb(" + r + "," + g + "," + b + ")";
		var col1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
		g += 2;
		g1 += 2;
		if (i % 2 === 0){
			var newDiv = document.createElement('div');
			newDiv.style.backgroundColor = col;
  			newDiv.style.width = '11.1%';
  			newDiv.style.float = 'left';
  			newDiv.style.paddingBottom = '11.1%';
			document.body.appendChild(newDiv);
		}else {
			var newDiv = document.createElement('div');
			newDiv.style.backgroundColor = col1;
			newDiv.style.width = '11.1%';
			newDiv.style.float = 'left';
			newDiv.style.paddingBottom = '11.1%';
			document.body.appendChild(newDiv);
		}	
	}
}();
