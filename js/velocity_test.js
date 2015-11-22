
$(document).ready(function() {
	var $div = $('#box1');
	
	// appear
	$('#button1').click(function() {
		$div.velocity({ top: 100}, 500)
		$div.velocity({width: "500px", opacity: 1},
			{ duration: 1400, easing: "swing" });
		$('#box1').css("background-color", "rgb(0, 0, 0");
	})

	//disappear
	$('#button2').click(function() {
		$div.velocity({ top: 20}, 500)
		$div.velocity({width: "300px", opacity: 0});
	})
	
})