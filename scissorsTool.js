function ScissorsTool(){
    this.icon = "assets/scissorsTool.png";
    this.name = "scissorsTool";
    
	var previousMouseX = -1;
	var previousMouseY = -1;

    var selectMode = 0;
    var selectedArea = {x:0, y:0, w:100, h:100};

    var selectedPixels = null;

    this.draw = function(){
        
        
        if(mouseIsPressed)
        {       
            if( selectMode == 0)
            {
                //check if they previousX and Y are -1. set them to the current
                //mouse X and Y if they are.
                if (previousMouseX == -1)
                {
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
                }
                //if we already have values for previousX and Y we can draw a line from 
                //there to the current mouse location
                else
                {
                    stroke(0);
                    noFill();
                    line(previousMouseX, previousMouseY, mouseX, mouseY);
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
                }
            }
            else if( selectMode == 1)
            {
                updatePixels();
                noStroke();
                fill(255, 0, 0, 100);
                rect(selectedArea.x,  selectedArea.y,  
                     selectedArea.w,  selectedArea.h)                   
            }
        }
        else
        {
            //if the user has released the mouse we want to set the previousMouse values 
            //back to -1.
            previousMouseX = -1;
            previousMouseY = -1;
        }
    
    };
    this.keyPressed = function()
    {

    };

    this.mousePressed = function()
    {    
            if(selectMode == 1)
            {
                selectedArea.x = mouseX;
                selectedArea.y = mouseY;
            }
            // if( selectMode == 2)
            // {
            //     image(selectedPixels, mouseX, mouseY);
            // }
    };
    this.mouseDragged = function()
    {      
            if(selectMode == 1)
            {
                var w = mouseX -  selectedArea.x;
                var h = mouseY -  selectedArea.y;
            
                selectedArea.w = w;
                selectedArea.h = h;
            }          
    };

this.unselectTool = function() {
    updatePixels();
    //clear options
    select(".options").html("");
};

this.populateOptions = function() {
    select(".options").html(
        "<button id='selectModeButton'>draw</button>");
    //click handler
    select("#selectModeButton").mouseClicked(function() {
        var button = select("#" + this.elt.id);
        if (selectMode == 0) {
            selectMode += 1;
            loadPixels();  //store current frame

            button.html('cut');

            
        } 
        else if(selectMode == 1) {
            selectMode += 1;

            //refresh the screen
            updatePixels(); 
            //store the pixels
            selectedPixels = get(selectedArea.x,  selectedArea.y,
                                 selectedArea.w,  selectedArea.h);                     

            //draw rectangle over it
            fill(255);
            noStroke();
            rect(selectedArea.x,  selectedArea.y,
                selectedArea.w,  selectedArea.h);
            button.html('end paste');
            
        }
        else if(selectMode == 2)
        {
            selectMode = 0;
            loadPixels();
            //selectedArea = {x: 0, y: 0, w:100, h:100};
            fill(255);
            noStroke();
            rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
            image(selectedPixels, mouseX, mouseY);
                           
            button.html("draw")  
        }
    });
};
}