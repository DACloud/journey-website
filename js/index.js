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
		$("#top .nav .mainNav ul li").hover(function(){
			$(this).find(".menue").show();
			$(this).addClass("hover");
		},function(){
			$(this).find(".menue").hide();
			$(this).removeClass("hover");
		});
	// 导航栏效果代码结束
	// 广告效果代码开始
		//点击效果 
		var i=0;
		$("#adv .contr ul li").click(function(){
			i = $(this).index();
			$("#adv .pic ul li").eq(i).fadeIn(300).siblings().fadeOut(300);
			$(this).addClass("Fcontr").siblings().removeClass("Fcontr");
		})
		//自动播放效果
		function autoPlay(){
			i++;
			if(i>3){
				i=0
			}
			$("#adv .pic ul li").eq(i).fadeIn(300).siblings().fadeOut(300);
			$("#adv .contr ul li").eq(i).addClass("Fcontr").siblings().removeClass("Fcontr");
		}
		setInterval("autoPlay()",5000);
	// 广告效果代码结束
	// 左侧part1导航(路线推荐)效果开始
		 $("#part1 #part1_R ul.select_but li").hover(function(){
		 	var i2=$(this).index();
		 	// alert(i2);
		 	$("#part1 #part1_R .select_con .select_content").eq(i2).fadeIn(0).siblings().fadeOut(0);
		 	$("#part1 #part1_R ul.select_but li").eq(i2).addClass("hover").siblings().removeClass("hover");
		 	// 问题：为什么不能将函数里面的#part1 #part1_R ul.select_but li换成this？
		 })
	// 左侧part1导航效果结束
	// 内容区图片效果开始
		$("#part1 #part1_R .select_con .select_content ul.select_imgList li").hover(function(){
			$(this).find("p").animate({height:"41px"},200);
		},function(){
			$(this).find("p").animate({height:"0"},200);
		})
	// 内容区图片效果结束
	