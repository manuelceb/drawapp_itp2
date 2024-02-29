function eraserTool(){
    this.icon = "assets/eraser.jpg";
	this.name = "eraser";
    var eraserSizeSlider;
    // next function was entirely wrote by me
    this.populateOptions = function() {
		select(".options").html("<div class= 'description'>Eraser Tool, you can choose the size below:</div><br>");
        SliderValue = createDiv();
        select(".options").child(SliderValue);
        eraserSizeSlider = createSlider(10,50,10,10);
        select(".options").child(eraserSizeSlider);
        updateEraserSizeDisplay();
        eraserSizeSlider.input(updateEraserSizeDisplay);
    }
    // next function was entirely wrote by me
    this.draw = function (){
       
        if(mouseIsPressed)
        {
            eraserSize = eraserSizeSlider.value();
            stroke(255);
            fill(255);
            rect(mouseX,mouseY,eraserSize,eraserSize);   
        }
    }
    
    this.unselectTool = function() {
		//clear options
		select(".options").html("");
        stroke(colourP.selectedColour = "black"); // this prevents to keep "drawing" with white color over white canvas if you switch to drawing tool. Making black as default color.
	};
    // next function was entirely wrote by me
    function updateEraserSizeDisplay() {
        SliderValue.html("Eraser Size: " + eraserSizeSlider.value());
    }
}