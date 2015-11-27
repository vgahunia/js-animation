
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

	// JQUERY UI & Sequenced Animation

	// $('#button_bay').velocity(fadeIn.p, fadeIn.oFast);

	$.Velocity({ e: $('#button_bay'), p: {opacity: 1, scale: 1}, o: { duration: 1200, easing: "linear"} });

	var sequence = [
		{ e: $('#box4'), p: { translateX: 100, opacity: 1 }, o: { duration: 1000 } },
		{ e: $('#box5'), p: { translateX: 200, opacity: 1 }, o: { duration: 1000, sequenceQueue: false } },
		{ e: $('#box5'), p: {backgroundColor: '#9f8', top: '+=100px'}, o: {duration: 1000, sequenceQueue: false }},
		{ e: $('#box6'), p: { translateX: 300, opacity: 1 }, o: { duration: 1000 } }
	];


	$.Velocity.RunSequence(sequence);


	// PACKAGING EFFECTS

	$.Velocity
		.RegisterEffect("shadowIn", {
			defaultDuration: 1000,
			calls: [
				[ { opacity: 1, scale: 1 }, 0.4 ] ,
				[ { boxShadowBlur: 50 }, 0.6 ]
			]
		})

		.RegisterEffect("shadowOut", {
			defaultDuration: 800,
			calls: [
				[ { boxShadowBlur: 50 }, 0.2 ],
				[ { opacity: 0, scale: 0 }, 0.8 ]
			]
		});

		$("#box7").velocity("shadowIn");
		$("#box7").velocity("shadowOut");

		// TIMING  MULTIPLIERS

		var M = .5;

		$("#box8").velocity( { opacity: 1, scale: 1.5 }, { duration: 1000 * M });


	
})