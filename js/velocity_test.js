
$(document).ready(function() {
	var $div = $('#box1');
	var $div2 = $('#box2');
	var $div3 = $('#box3');
	
	// APPEAR

	$('#button1').click(function() {
		$div.velocity({ 
			top: 50, 
			paddingLeft: "*=2", 
			paddingRight: "*=2" }, 
			"ease-in-out");
		$div.velocity({
			width: "450px", 
			opacity: 1},
				{ duration: 1400, 
					easing: [460, 10] });
		$('#box1').css("background-color", "rgb(0, 0, 0");

		$div3.velocity({top: 850}, {duration: 2000}, "ease-in").velocity({opacity: 0});
	})

	// DISAPPEAR

	$('#button2').click(function() {
		$div.velocity({ top: 20}, "ease-out");
		$div.velocity({width: "300px", opacity: 0}, { loop: 2 }).velocity({ opacity: 0 }, 1500);

		$div2.velocity({ top: 100}, "ease-in-out");
		$div2.velocity("reverse", {duration: 2000});
	})

	 // SCROLL

	$('#scroll').click(function() {
		$div3.velocity("scroll", {duration: 1000, offset: "-50px", easing: [250, 10] })
		$div3.velocity({opacity: 1, translateZ: "200px", rotateZ: "45deg"})
		$div3.velocity("reverse", {duration: 2000});
	})

	
})