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
		})
	// 导航栏效果代码结束