function RectTool() {
	this.icon = "assets/rectangle.jpg";
	this.name = "Rectangle";

	//Stores the location from the last frame
	//Haven't started drawing
	var previousMouseX = -1;
	var previousMouseY = -1;

	var selectMode = 0;
    
	this.draw = function(){
		if(mouseIsPressed && selectMode == 0)
		{
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
				//loads the pixel data into an array so the rectangle drawn persists
				loadPixels();
			}
			else{
				//Updates the display window with the data in the array
				//provides a seemless rectangle being drawn 
				//instead of multiple being drawn as the user drags the mouse
				updatePixels();
				noFill();
				rect(previousMouseX, previousMouseY,
					 mouseX - previousMouseX, mouseY - previousMouseY);
				
			}
		}
		else if(mouseIsPressed && selectMode == 1)
		{
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
				//loads the pixel data into an array so the rectangle drawn persists
				loadPixels();
			}
			else{
				//Updates the display window with the data in the array
				//provides a seemless rectangle being drawn 
				//instead of multiple being drawn as the user drags the mouse
				updatePixels();
				noFill();
				ellipse(previousMouseX, previousMouseY,
					 mouseX - previousMouseX, mouseY - previousMouseY);
				
			}
		}
		else{
			//if the user has released the mouse we want to set the previousMouse values 
			//back to -1.
			previousMouseX = -1;
			previousMouseY = -1;
		}
	}

	this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
	};
	
	this.populateOptions = function() {
		select(".options").html(
			"<button id='selectModeButton'>rectangle</button>");
		//click handler
		select("#selectModeButton").mouseClicked(function() {
			var button = select("#" + this.elt.id);
			if (selectMode == 0) {
				selectMode += 1;
				loadPixels();  //store current frame
	
				button.html('circle');			
			} 
			else if(selectMode == 1) {
				selectMode = 0;
	
				//refresh the screen
				updatePixels(); 
    
				button.html('rectangle');			
			}
		});
	};
	}

