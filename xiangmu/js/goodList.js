//top
	//个人中心
	$('#percen').bind({
		mouseenter:function(){
			$("#percen,#percenC").css("background","#fff");
			$("#percenC").css("display","block")
		},
		mouseleave:function(){
			$("#percen").css("background","")
			$("#percenC").css("display","none")
		}	
	})
	
	$("#percenC").bind({
		mouseenter:function(){
			$("#percen").css("background","#fff")
			$("#percenC").css("display","block")
		},
		mouseleave:function(){
			$("#percen").css("background","")
			$("#percenC").css("display","none")
		}
	})

	//客户服务
	$("#cliser").bind({
		mouseenter:function(){
			$("#cliser,#cliserC").css("background","#fff");
			$("#cliserC").css("display","block")
		},
		mouseleave:function(){
			$("#cliser").css("background","")
			$("#cliserC").css("display","none")
		}	
	})
	$("#cliserC").bind({
		mouseenter:function(){
			$("#cliser").css("background","#fff")
			$("#cliserC").css("display","block")
		},
		mouseleave:function(){
			$("#cliser").css("background","")
			$("#cliserC").css("display","none")
		}
	})
	
	//更多
	$("#more").bind({
		mouseenter:function(){
			$("#moreC").css("background","#fff");
			$("#moreC").css("display","block")
		},
		mouseleave:function(){
			$("#more").css("background","")
			$("#moreC").css("display","none")
		}	
	})
	$("#moreC").bind({
		mouseenter:function(){
			$("#more").css("background","#fff")
			$("#moreC").css("display","block")
		},
		mouseleave:function(){
			$("#more").css("background","")
			$("#moreC").css("display","none")
		}
	})
	//所有种类动态
	$(".typeall").bind({
		mouseover:function(){
			$(".typeallC").css("display","block");
		},
		mouseleave:function(){
			$(".typeallC").css("display","none");
		}
	});
	$(".typeallC").bind({
		mouseover:function(){
			$(".typeallC").css("display","block");
		},
		mouseleave:function(){
			$(".typeallC").css("display","none");
		}
	})
	$(".typeallC ul li").each(function(index,element){
		$(element).bind({
			mouseenter:function(){
				$(this).css({
					"opacity":1,
					"filter":"alpha(opacity=100)",
					"background-color":"#ccc",
					"border-left":"2px red solid",
					"width":"93px"
				});
				var index = $(this).index();
				$(".oneC").eq(index).css("z-index","3").siblings().css("z-index","2");	
			},
			mouseleave:function(){
				$(this).css({
					"opacity":0.8,
					"background-color":"#000",
					"border-left":"0px",
					"width":"95px"
				});	
			}
		})		
	})
	
//=================品牌展开效果=======================
$(".brand-more a").click(function(){
	var htm = $(this).html();
	if(htm == "展开"){
		$(this).html("收起");
		$(".brand-more span").css({
			"background-position":"-21px 0px"
		})
		$(".brand-content").css("height","112px");
		$(".brand-content ul").css({
			"overflow":"auto"
		});
	}
	if(htm == "收起"){
		$(this).html("展开");
		
		$(".brand-content").css("height","68px");
		$(".brand-content ul").css({
			"overflow":"hidden"
		});	
	}	
	return false;
})
$(".brand-more").mouseenter(function(){
	if(htm == "收起"){
		$(".brand-more span").css({
			"background-position":"-50px -13px"
		})
	}
})
//跳转页面

	

