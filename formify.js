/** Author Avraam Mavridis
	contact avr.mav@gmail.com
	June-2014
	**/



$.fn.formify = function(){
	
	var inputs = this.find(".formify");
	
	if(typeof arguments[0]!=="undefined"){
		var backgroundColor = arguments[0].backgroundColor || "black";
		var onfucusOpacity = parseInt(arguments[0].onfucusOpacity) || 1;
		var onblurOpacity = parseInt(arguments[0].onblurOpacity) || 0.1;
		var backgroundImage = parseInt(arguments[0].backgroundImage) || 1;
	}
	else{
		var backgroundColor = "black";
		var onfucusOpacity =  1;
		var onblurOpacity =  0.1;
		var backgroundImage = 1;
	}

	

	for(var i = 0; i < inputs.length; i+=1){
		var inputwidth = $(inputs[i]).width();
		$(inputs[i]).css({
			"background-color":backgroundColor
		});
		$(inputs[i]).bind("focus",function(){
			for(var j = 0; j < inputs.length; j+=1){
				if(inputs[j]!==this){
					$(inputs[j]).animate({
						opacity : onblurOpacity,
						"background-position": -inputwidth
					},500);
				}
				else{
					$(inputs[j]).animate({
						opacity : onfucusOpacity,
						"background-position": 0
					},500);
				}
			}
		});

        

		$(inputs[i]).css({
			"background-image":"url(images/background"+backgroundImage+".jpg)",
			"background-size":"cover",
			"background-repeat":"no-repeat",
			"background-position": 0
		});

		
		

		
		
		
		
	}


}