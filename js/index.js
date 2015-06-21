	// 搜索框效果代码开始
		var d_value=$(".search input.txt").val();
		// 鼠标放上后默认值（输入目的地）消失
		$(".search input.txt").focus(function(){
			// $(this)和$(".search input.txt")是相等的
			if ($(this).val()==d_value){
				$(this).val("");
			};
		});
		// 鼠标移开，若用户未输入，恢复默认值。
        $(".search input.txt").blur(function(){
        	if ($(this).val()=="") {
        		$(this).val(d_value);
        	};
        });	

	// 搜索框效果代码结束
	// 导航栏效果代码开始
	    //鼠标悬停效果
		$("#top .nav ul li").hover(function(){
			$(this).find(".menue").show();
			$(this).addClass("hover");
		},function(){
			$(this).find(".menue").hide();
			$(this).removeClass("hover");
		});
	// 导航栏效果代码结束
	// 广告效果代码开始
		//点击效果 
	// 	var i = $(this).index();
	// 	$("#adv .contr ul li").click(function(){
	// 		$("#adv .pic ul li").eq(i).fadeIn(300).siblings().fadeOut(300);
	// 		$(this).addClass("Fcontr").siblings().removeClass("Fcontr");
	// 	})
	// 	//自动播放效果
	// 	function autoPlay(){
	// 		i++;
	// 		if(i>3){
	// 			i=0
	// 		}
	// 		$("#adv .pic ul li").eq(i).fadeIn(300).siblings().fadeOut(300);
	// 		$("#adv .contr ul li").eq(i).addClass("Fcontr").siblings().removeClass("Fcontr");
	// 	}
	// 	setInterval("autoPlay()",5000);
	// // 广告效果代码结束