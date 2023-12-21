function EraserTool(){
    this.icon = "assets/eraser.png";
    this.name = "eraserTool";
     // The size of the eraser brush
    this.eraserSize = 20;

    // Function to draw with the eraser
    this.draw = function () {      
        // Update the canvas with the erased content
        if (mouseIsPressed) {

            //save the current canvas drawing
            loadPixels();
            //tried adding a cirle indicator around the mouse but it kept 
            //leaving a dragged cirlce effect
            // noFill();
            // strokeWeight(1);
            // ellipse(mouseX, mouseY, this.eraserSize,this.eraserSize);
             
        //Erase by setting the pixels under the cursor to white
        //Each for loop iterates over the x or y coordinates creating a boundry based on the erasers size
        //The var index calculates an index into the pixel array and the * 4 is for each pixel value (RGBA)
        for (var x = mouseX - this.eraserSize / 2 ; x < mouseX + this.eraserSize / 2 ; x++) {
            for (var y = mouseY - this.eraserSize / 2 ; y < mouseY + this.eraserSize / 2 ; y++) {
               var index = (x + y * width) * 4 ;

              pixels[index + 0] = 255; // Sets the red channel to white
              pixels[index + 1] = 255; // Sets the green channel to white
              pixels[index + 2] = 255; // Sets the blue channel to white
              pixels[index + 3] = 0;   // Sets the alpha (transparency) to 0 (fully transparent)
            }
          }
        // What I initially used as my eraser function but it wouldnt allow
        // the currently selected color to be used immediately afterwards when using a new tool.
        // would have to select the color again
        //   noStroke();
        //   fill(255);
        //   ellipse(mouseX, mouseY, this.eraserSize, this.eraserSize);
            updatePixels();
        }    
    }   
};

    