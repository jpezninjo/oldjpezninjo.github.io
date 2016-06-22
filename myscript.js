function toggleNav(x) {
		x.classList.toggle("change");
		
		var elem = document.getElementByClassName("barContainer");
		elem.style.position = 'absolute';
		var pos = 0;
		var id = setInterval(frame, 5);
		function frame() {
			if (pos == 50) {
				clearInterval(id);
			} else {
			  pos++;
			  elem.style.top = pos + 'px';
			}
		}
	  }
	  
	
	$(document).ready(function(){

		$(".dropDownArrow").click(function(){
				
			<!--I've always freaking loved terniary operators. Now I love them even more, and appreciate keeping variables in JS-->
			var src = $(this).attr("src");
			var image = (src === "http://imgur.com/4M0xF7j.png" ? "http://imgur.com/ni8idOJ.png" : "http://imgur.com/4M0xF7j.png");
			$(this).attr("src",image);
			$(this).parent().find(".collapsible").slideToggle();
		});
		
		$("#e").find(".collapsible").hide();
		$(".barContainer").click(function(){
			$("#dropDown").fadeToggle();
		});
		
		$("#da").find("span").click(function(){
               $("this").effect( "shake", {times:4}, 1000 );
            });
	});