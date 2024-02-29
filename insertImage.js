
function insertImage(){
    this.icon = "assets/insertImage.png";
	this.name = "insertImage";
    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;
    let imageInserted = false;
    let img ;
    //let rectangle = [];
    this.populateOptions = function() {
        select(".options").html("<div class= 'description'>First, draw a rectangle where you want to insert your image. Then, click the button to select your image</div><br>");
        var insertButton = createFileInput(this.handleImage);
        select(".options").child(insertButton);
    };


    this.draw = function(){

        
        if (mouseIsPressed && !imageInserted) {
            noFill();
            if (startMouseX == -1) { 
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                loadPixels();
            } else { 
                updatePixels();
                rect(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
                //rectangle.push([startMouseX, startMouseY, mouseX, mouseY]);
                
                
            }
          

        }else if (drawing) {
            loadPixels();
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
        if(img){ image(img,startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);img=false; imageInserted = true;}
        //if(img){ image(img,rectangle[0], rectangle[1], rectangle[2] - rectangle[0], rectangle[3] - rectangle[1]); console.log("lo dibujeee"); img=false; imageInserted = true;}
    };
    

    this.handleImage = function(file) {
        if (file.type === 'image') {
          img = createImg(file.data, '');
          img.hide();
        } else {
          img = null;
        }
};

this.unselectTool = function() {
    select(".options").html("");
    imageInserted = false;
};

}
