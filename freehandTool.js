function FreehandTool(){
	//set an icon and a name for the object
	this.icon = "assets/freehand.jpg";
	this.name = "freehand";
	var strokeline;
	var strokevalue;

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.populateOptions = function() {
		select(".options").html("<div class= 'description'>A freehand Tool. Choose the stroke below:</div><br>");
        strokevalue = createDiv();
        select(".options").child(strokevalue);
        strokeline = createSlider(5,30,5,5);
        select(".options").child(strokeline);
        updateStrokeSizeDisplay();  
        strokeline.input(updateStrokeSizeDisplay);


	this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
				// strokeline is a feature added by me
				var s = strokeline.value()
				strokeWeight(s);
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
	this.unselectTool = function() {
		//clear options
		select(".options").html("");
		
	};
	// next function developed by me
    function updateStrokeSizeDisplay() {
        strokevalue.html("Stroke: " + strokeline.value());
}
}
}