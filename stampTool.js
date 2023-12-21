function StarTool(){
    this.icon = "assets/stampTool.jpg";
    this.name = "stampTool";
    
    var star;
    var christmasTree;
    var pumpkin;

    var imgSize = 60;
    var selectMode = 0;
    //var starSizeSlider;
    
    star = loadImage("assets/star.webp");
    christmasTree = loadImage('assets/christmasTree.webp');
    pumpkin = loadImage('assets/pumpkin.avif');

    
     this.draw = function(){
      //Tried to implement the star size slider but it wouldnt read the parent function
      //for some reason. So i created the slider still but it has no effect on the star size  
        if(mouseIsPressed && selectMode == 0)
        {        
            loadPixels();  
            //var starSize = starSizeSlider.value();
            var starX = mouseX - imgSize/2;
            var starY = mouseY - imgSize/2;
            image(star, starX, starY, imgSize, imgSize);            
        }
        else if(mouseIsPressed && selectMode == 1)
        {          
            //var starSize = starSizeSlider.value();
            var starX = mouseX - imgSize/2;
            var starY = mouseY - imgSize/2;
            image(christmasTree, starX, starY, imgSize, imgSize);            
        }
        else if(mouseIsPressed && selectMode == 2)
        {          
            loadPixels();
            //var starSize = starSizeSlider.value();
            var starX = mouseX - imgSize/2;
            var starY = mouseY - imgSize/2;
            image(pumpkin, starX, starY, imgSize, imgSize);            
        }
    }
    //this creates the slider but it doesnt effect the coding as i could not get the value()
    //of the slider to the starSize variable
    // this.populateOptions = function() {
	// 	select(".options").html(
	// 		"<input type='range' min='1' max='100' value='50' class='slider' id='sizeOfStar'>Star Size");
	// 	//slider handler
	// 	select("#sizeOfStar").mouseClicked(function() {        
    //         starSizeSlider.parent('#sizeOfStar');      	
	// 	});
	// };
    this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
	};
	
	this.populateOptions = function() {
		select(".options").html(
			"<button id='selectModeButton'>star</button>");
		//click handler
		select("#selectModeButton").mouseClicked(function() {
			var button = select("#" + this.elt.id);
			if (selectMode == 0) {
				selectMode += 1;
				loadPixels();  //store current frame
	
				button.html('christmas tree');			
			} 
			else if(selectMode == 1) {
				selectMode += 1;
	
				//refresh the screen
				loadPixels();
    
				button.html('pumpkin');			
			}
            else if(selectMode == 2) {
				selectMode = 0;
	
				//refresh the screen
				updatePixels(); 
    
				button.html('star');			
			}
		});
	};

}