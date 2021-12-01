$(document).ready(function() {
	$("span.forWeb, span.forMobile").on("click", function(){
		location.href="index.html";
	});
	$(".jsAllMenu").on("click", function(){
		if ( $(".mGnb").hasClass("active") )
			$(".mGnb").removeClass("active");
		else
			$(".mGnb").addClass("active");
		return false;
	});
	
	/* gnb forWeb */
	$(".mGnb").on("mouseleave", function(){
		$(".mGnb").removeClass("active");
	});
	/* //gnb forWeb */

	/* gnb forMobile */
	if ( $(document).width() < 768)
	{
		$(".sidebar .list li .dep1").on("click", function(){
			if ( $(this).next().css("display") == "block" )
			{
				$(this).next().slideUp(function(){
					$(this).parent().removeClass("selected");
				});
			}
			else
			{
				$(this).next().slideDown(function(){
					$(this).parent().addClass("selected");
				});
			}
		});
	}
	$("input[id='hamburger']").on("click", function(){
		if ( $("input[id='hamburger']").is(":checked")  )
			$("body").addClass("hiddenScroll");
		else
			$("body").removeClass("hiddenScroll");
	});
	$(".sidebar .list dt.dep1 a").on("click", function(){
		if ( $(this).parent().hasClass("active")  )
		{
			$(this).parent().removeClass("active");
			$(this).parent().next().slideUp();
		}
		else
		{
			$(this).parent().addClass("active");
			$(this).parent().next().slideDown();
		}
		return false;
	});
	/* //gnb forMobile */
	
	
	$(".iTop").on("click", function(){
		$('html, body').animate({scrollTop: 0}, 300);
		return false;
	});


	$(window).scroll(function(){
		if ( $(window).scrollTop() > 0 )
			$("body").addClass("active");
		else
			$("body").removeClass("active");
	});

	/* keyimage animate */
	$(window).bind("resize scroll",function(e) {
		var y = $(window).scrollTop();
		$(".mKeysub").css('background-position', '50% ' + parseInt(-y / 1.5) + 'px');
		$(".mKeymain, .mKeymain .swiper-slide").css('background-position', '50% ' + parseInt(-y / 1.5) + 'px');
	});
	
	$(".jsHover li").on("mouseenter", function(){
		$(this).parent().children().addClass("notHover");
		$(this).removeClass("notHover").addClass("hover");
	});
	$(".jsHover li").on("mouseleave", function(){
		$(this).parent().children().removeClass("hover");
		$(this).parent().children().removeClass("notHover");
	});
	

	
});