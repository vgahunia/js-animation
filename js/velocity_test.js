
$(document).ready(function() {
	var $div = $('#box1');
	
	// appear
	$('#button1').click(function() {
		$div.velocity({ 
			top: 50, 
			paddingLeft: "*=4", 
			paddingRight: "*=4" }, 
			"ease-in-out");
		$div.velocity({
			width: "500px", 
			opacity: 1},
				{ duration: 1400, 
					easing: [450, 15] });
		$('#box1').css("background-color", "rgb(0, 0, 0");
	})

	// disappear
	$('#button2').click(function() {
		$div.velocity({ top: 20}, "ease-out")
		$div.velocity({width: "300px", opacity: 0}, { loop: 2 }).velocity({ opacity: 0 }, 1500);
	})
	
})