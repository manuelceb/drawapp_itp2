function SprayCanTool(){
	
	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.jpg";
	var strokeline;
	var strokevalue;
	var points = 13;
	var spread = 10;

	this.draw = function(){
		var s = strokeline.value()
		if(mouseIsPressed){
			for(var i = 0; i < points; i++){
				point(random(mouseX-spread, mouseX + s), random(mouseY-spread, mouseY+s));
			}
		}
	};
	this.populateOptions = function() {
		select(".options").html("<div class= 'description'>A spray can Tool. Choose the stroke below:</div><br>");
        strokevalue = createDiv();
        select(".options").child(strokevalue);
        strokeline = createSlider(5,30,5,5);
        select(".options").child(strokeline);
        updateStrokeSizeDisplay();  
        strokeline.input(updateStrokeSizeDisplay);
	}
		// next function developed by me
	function updateStrokeSizeDisplay() {
			strokevalue.html("Stroke: " + strokeline.value());
	}
	    // I took this function from given tools
	this.unselectTool = function() {
			select(".options").html("");
	};
}
