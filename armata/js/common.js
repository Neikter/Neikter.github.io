$(document).ready(function() {


	$(".section_4 h2").waypoint(function(){
		$(".section_4 .card").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("card_off").addClass("card_on");	
			}, 150*index);
		});


	}, 
	{
		offset : "20%"
	});
	$(".section_6 h2").waypoint(function(){
		$(".section_6 .team").each(function(index){
			var ths2 = $(this);
			setInterval(function(){
				ths2.removeClass("team_off").addClass("team_on");	
			}, 150*index);
		});
	}, 
	{
		offset : "20%"
	});

	$(".arrow_bottom").click(function(){
		$("html, body").animate({scrollTop: $(".main_head").height()+120 }, "slow");
		return false;
	});

	$(".foot_to_top").click(function(){
		$("html, body").animate({scrollTop: 0}, "slow");
		return false;
	});

	$(".homesect .section_head p, .homesect .section_head h2").animated("fadeInRight");
	$(".section_content .info_item").animated("zoomIn");
	$(".s1_bottom .info_item").animated("fadeInUp");
	$(".slider .slide").animated("rollIn");

	$(".section_2").waypoint(function() {
		$(".s2_item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});




	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText: "",
		loop: true,
		autoPlay : true,
		slideSpeed : 50
	});

	var waypointsvg = new Waypoint({

		element: $(".section_5"),
		handler: function(dir) {
			
			if (dir === "down") {

				$(".section_5 .tc_item").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "tc_svg" + index
						});
						ths.children(".tc_content").addClass("tc-content-on");
					}, 500*index);
				});

			};
			this.destroy();
		},
		offset: '35%'
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main_menu").slideToggle();
		return false;
	});
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
$(".homesect .section_bottom .buttons").click(function() {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "/mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
