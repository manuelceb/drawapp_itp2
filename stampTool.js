function stampTool(){
    this.icon = "/assets/stamp.png";
    this.name = "stampTool";
    var selectedShape = null;
    var birdStamp = loadImage('/assets/bike.png');
    var starStamp = loadImage('/assets/star-stamp.png');
    var horseStamp = loadImage('/assets/horse.png');
    var stampSlider;
    var stampSize;    
    // All inside populateOptions function was wrote by me
    this.populateOptions = function() {
        select(".options").html("<div class= 'description'>Select your favorite stamp and the size below:</div><br>");
        var starButton = createButton("");
        starButton.id("button star");
        let iconStar = createImg('/assets/star-stamp.png', 'Image Icon');
        iconStar.size(45, 45); // Set the size of the image
        // Add the button to the DOM
        select(".options").child(starButton);
        starButton.child(iconStar);
        var horseButton = createButton("");
        horseButton.id("button horse");
        let iconHorse = createImg('/assets/horse.png', 'Image Icon');
        iconHorse.size(45, 45); // Set the size of the image
        // Add the button to the DOM
        select(".options").child(horseButton);
        horseButton.child(iconHorse);
        var birdButton = createButton('');
        birdButton.id("button bird");
        let iconBird = createImg('/assets/bike.png', 'Image Icon');
        iconBird.size(45,45);
        select(".options").child(birdButton);
        birdButton.child(iconBird);
        stampSlider = createSlider(10,70,30);
        stampSlider.id("stampSize");
        select(".options").child(stampSlider);
        starButton.mousePressed(function() { selectedShape = 'star'; });
        horseButton.mousePressed(function() { selectedShape = 'horse'; });
        birdButton.mousePressed(function() { selectedShape = 'bird'; });
        
    };
    // next function was entirely wrote by me
    this.draw = function(){
        if(mouseIsPressed){
            stampSize = stampSlider.value();
            switch(selectedShape){
                case 'star':
                    console.log("HERE");
                    image(starStamp,mouseX,mouseY,stampSize,stampSize);
                    break;
                case 'horse':
                    image(horseStamp,mouseX,mouseY,stampSize,stampSize);
                    break;
                case 'bird':
                    image(birdStamp,mouseX,mouseY,stampSize,stampSize);
                    break;
            }
        }
    };
     // I took this function from given tools
    this.unselectTool = function() {
        select(".options").html("");
    };
}