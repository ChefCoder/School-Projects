function PaintBucketTool(){
    this.icon = "assets/paintBucket.png";
    this.name = "paintBucketTool";

    
    // This was my attempt at trying to adapt the stackOverflow code i found along with tutorials
    // I read online or videos I watched. However I could not get the flood fill algorithm to work 
    //properly on my app. I had it workking in a separate file on it's own, but couldnt figure out
    // how to adapt it correctly

     this.matches = function(c, x, y) {
      //Meant to compare the pixel colors at x and y to the given color c
      return JSON.stringify(get(x, y)) === JSON.stringify(c);
    }

    this.draw = function() {
      //initiallizes an empty stack to store the pixel coordinates
      var stack = [];
      var oldColor;
      //The color it's supposed to fill with (Black in this case)
      var fillColor = color(0,0,0);
          //checks if the stack is empty
          if (!stack.length) return;
          //pops the top element from the stack
          let p = stack.pop();
          let x1 = p.x, y = p.y;
          //finds the left most boundry with the old color
          while (x1 > 0 && matches(oldColor, x1 - 1, y))
            x1--;
          //
          let spanAbove = false, 
              spanBelow = false;
          //loop through the pixels to the right of the starting point
          for (let x2 = x1 + 1; x2 < width && matches(oldColor, x2, y); ++x2) {
            //sets the pixel color to the fill color
            set(x2, y, fillColor);
            //checks if there are spans above or below the current row
            if (y > 0 && spanAbove !== matches(oldColor, x2, y - 1)) {
              if (!spanAbove)
                stack.push({ x: x2, y: y - 1 });
              spanAbove = !spanAbove;
            }
            if (y < height - 1 && spanBelow !== matches(oldColor, x2, y + 1)) {
              if (!spanBelow)
                stack.push({ x: x2, y: y + 1 });
              spanBelow = !spanBelow;
            }
          }
        
          updatePixels();
          //checks if the shift key is pressed and fills
          if(keyIsDown(SHIFT)){
            oldColor = get(mouseX, mouseY);
            loadPixels();
            stack = [];
            stack.push({ x: mouseX, y: mouseY });
          }
        }
      
  }
 


      

