
$(document).ready(function() {

 	console.log("Script included!");

 	

 	$("ul li").hover(
 		function(){
       		$(this).addClass("active");
    	},
    	function(){
        	$(this).removeClass("active");
    	} 
	);

	$("ol li").click(
		function() {
			$(this).toggleClass("active");
		}
	);



	$("#button1").click(function() {
  		$("#marinade img").toggle( "fast");
	});

	$("#button2").click(function() {
  		$("#sauce img").toggle("fast");
	});

	$("#button3").click(function() {
  		$("#stir img").toggle("fast");
	});



});
