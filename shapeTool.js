function ShapeTool() {
    this.icon = "assets/shape.png"; 
    this.name = "shapeTool";
    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;
    var selectedShape = null;
    var fillShape = true;

    // All inside populateOptions function was wrote by me
    this.populateOptions = function() {
        select(".options").html("<div class= 'description'>Select your favorite shape and push toggle button if you want fill or stroke shape </div><br>");
        // Creating DOM buttons
        var circleButton = createButton("");
        circleButton.id("button circle");
        let iconCircle = createImg('/assets/circle.png', 'Image Icon');
        iconCircle.size(45, 45); // Set the size of the image
        // Add the button to the DOM
        select(".options").child(circleButton);
        circleButton.child(iconCircle);
        
        var rectButton = createButton("");
        rectButton.id("button rectangle");
        
        let iconRectangle = createImg('/assets/rect.png', 'Image Icon');
        iconRectangle.size(45, 45); // Set the size of the image
        // Add the button to the DOM
        select(".options").child(rectButton);
        rectButton.child(iconRectangle);
        
        var triangleButton = createButton('');
        triangleButton.id("button triangle");
        let iconTriangle = createImg('/assets/triangle.png');
        iconTriangle.size(45,45);
        select(".options").child(triangleButton);
        triangleButton.child(iconTriangle);
        // Fill toggle
        
        var toggleButton = createButton('Fill/Stroke');
        select(".options").child(toggleButton);

        // Event handlers
        circleButton.mousePressed(function() { selectedShape = 'circle'; });
        rectButton.mousePressed(function() { selectedShape = 'rectangle'; });
        triangleButton.mousePressed(function() { selectedShape = 'triangle'; });
        toggleButton.mousePressed(function() {
            fillShape = !fillShape;
            if (fillShape) {
                fill(colourP.selectedColour);
            } else {
                noFill();
            }
            stroke(colourP.selectedColour);
        });
    };

    this.draw = function() {
        // If statements was an idea I took from freehandTool
        if (mouseIsPressed) {
            if (startMouseX == -1) { 
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                loadPixels();
            } else { 
                updatePixels();
                // next switch was entirely wrote by me
                switch (selectedShape) {
                    case 'circle':
                        var radius = dist(startMouseX, startMouseY, mouseX, mouseY);
                        ellipse(startMouseX, startMouseY, radius * 2);
                        break;
                    case 'rectangle':
                        rect(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
                        break;
                    case 'triangle':
                        triangle(startMouseX, startMouseY, mouseX, mouseY, mouseX, startMouseY);
                        break;
                }
            }
        } else if (drawing) {
            loadPixels();
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    };
    
    // I took this function from given tools
    this.unselectTool = function() {
        select(".options").html("");
    };
}