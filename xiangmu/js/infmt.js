
/////////////////////////////  top  ////////////////////////////////
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
/////////////////////////////////  放大切换  //////////////////////////////
				// 放大效果
function large(){
	$(".big-img").bind({
		mouseenter:function(){
			$(".float").addClass("active");
			$(".largen-img").addClass("active");		
		},
		mouseleave:function(){
			$(".float").removeClass("active");
			$(".largen-img").removeClass("active");
		},
		mousemove:function(e){
			var x = e.pageX - $(".big-img")[0].offsetLeft - $(".float").width()/2;
			var y = e.pageY - $(".big-img")[0].offsetTop - $(".float").height()/2;
			if(x < 0){
				x = 0;
			}
			if(x > $(".big-img").width() - $(".float").width()){
				x = $(".big-img").width() - $(".float").width()
			}
			if(y < 0){
				y = 0;
			}
			if(y > $(".big-img").height() - $(".float").height()){
				y = $(".big-img").height() - $(".float").height()
			}
			$(".float").css({
				"left":x,
				"top":y
			});
			$(".largen-img img").css({
				"left":-2*x,
				"top":-2*y
			})
			
			
		}
	})
						// 左右切换
	$(".tab-left").bind({
		click:function(){
			var X = $(".dong").position().left;
			X = X + 80;
			if( X >= 0){
				X = 0;
				$(".tab-left").css("color","#ccc")
				$(".dong").animate({"left":X},300)
			}else{
				$(".tab-left").css("color","#000")
				$(".tab-right").css("color","#000")
				$(".dong").animate({"left":X},300)
			}
			
		},
		mouseenter:function(){
			if($(".dong").position().left > -160){
				$(".tab-left").css("border-color","red")
			}	
		},
		mouseleave:function(){
			$(".tab-left").css("border-color","#eee")
		}
	})
	$(".tab-right").bind({
		click:function(){
			var X = $(".dong").position().left;
			X = X - 80;
			if( X <= -240){
				X = -240;
				$(".tab-right").css("color","#ccc")
			}
			$(".tab-left").css("color","#000")
			$(".dong").animate({"left":X},300)
		},
		mouseenter:function(){
			if($(".dong").position().left > -160){
				$(".tab-right").css("border-color","red")
			}	
		},
		mouseleave:function(){
			$(".tab-right").css("border-color","#eee")
		}
	})
	$(".dong li").bind({
		mouseenter:function(){
			$(this).css({
				"border":"1px solid red"
			}).siblings().css({
				"border":"border:1px solid #eee"
			});
			//更换两个大图
			var index = $(this).index() + 1;
			if($(".good").attr("pid") == 10001){
				$(".big-img img")[0].src = "img-infmt/9"+ index +"-1.jpg";
				$(".largen-img img")[0].src = "img-infmt/9"+ index +"-2.jpg";
			}else{
				$(".big-img img")[0].src = "img-infmt/8"+ index +"-1.jpg";
				$(".largen-img img")[0].src = "img-infmt/8"+ index +"-2.jpg";
			}
			
			
		}
	})
}

////////////////////活动倒计时//////////////////////////////
activeTime()
function activeTime(){
	var hour = 12;
	var minite = 59;
	var second = 59;
	var num = 9;
	var timer = setInterval(function(){
		num--;
		if(num == 0){
			num = 9
			second --
		}
		if(second == 0){
			second = 59
			minite --
		}
		if(minite == 0){
			minite == 59
			hour --;
		}
		if(hour == 0){
			clearInterval(timer)
		}
		$(".hour").html(hour);
		$(".minite").html(minite);
		$(".second").html(second);
		$(".mills").html(num)
	},100)	
}
///////////////////////数量加减/////////////////////////////////////
$(".cut").click(function(){
	var count = $(".number").html()
	count -- ;
	if(count <= 1){
		count = 1;
		$(this).css("color","#ccc")
	}
	$(".number").html(count);
})
$(".add").click(function(){
	var count = $(".number").html()
	count ++ ;
	$(".cut").css("color","#000")
	$(".number").html(count);
})
//页面加载  获得购物车内商品总数目
$(".carNum").html(getTotalNum());



//////////////////////////////加入购物车///////////////////////////////////////
$(".addcar").click(function(){
	var good = $(this).parents(".good");
	var pid = good.attr("pid");
	var num = parseInt($(".number").html());		

	if(checkGoodListById(pid)){//此商品在购物车存在
		upaddNum(pid,num)
	}else{
		var imgUrl = $(".imgUrl").attr("src");//图片地址
		var pName = $(".tit-name").html(); //商品名称		
		var price = $(".price").eq(1).html();	
		var adr = $(".pub-1 i").html();
		var  obj = {pid:pid,imgUrl:imgUrl,pName:pName,price:price,count:num,adr:adr};		
		addGoodList(obj)
	}
	$(".carNum").html(getTotalNum());		
})
$(".addCar").click(function(){
	$(".addcar").trigger("click")
})


////////////////////////商品详情和用户评论点击效果 以及下方内容切换/////////////////////
$(".title-1").click(function(){
	$(this).addClass("active");
	$(".title-2").removeClass("active");
	$(".tit1").addClass("active");
	$(".tit2").removeClass("active");
	$("#message_box").css("height","4210px");
	
})
$(".title-2").click(function(){
	$(this).addClass("active");
	$(".title-1").removeClass("active");
	$(".tit2").addClass("active");
	$(".tit1").removeClass("active");
	$("#message_box").css("height","2680px");
})
///////////////////////////商品详情用户评论窗口浮动效果/////////////////////////////
$(window).scroll(function(){
	var b = $(window).scrollTop();
	b > 1165?flag = true:flag = false;
	if(flag){
		$(".good-title").addClass("active");
		$(".addCar").addClass("active");
	}else{
		$(".good-title").removeClass("active");
		$(".addCar").removeClass("active");	
	}
})

/////////////////商品信息展示效果///////////////////
$(".tit-more span").click(function(){
	var H = $(".tit1 ul").height();	
	if(H == 46){
		H = 69;
		$(".tit1 ul").height(H)
		$(this).html("收起")
		console.log(H)
	}
	else{
		H = 46;
		$(".tit1 ul").height(H)
		$(this).html("展开")
	}
})
///////////////////////////评论后台加载////////////////////////////
comment()
function comment(){
	$.get("http://10.9.160.135/xiangmu/shangpin/comment.json",function(data){
		for(var i = 0; i < data.length; i++){
			var com = $('<div class="tit2-dec">'+
					'<div class="head-pic">'+
						'<img src="'+data[i].head+'"  />'+
						'<span>'+data[i].name+'</span>'+
					'</div>'+
					'<img src="img-infmt/images/star_07.jpg"  class="star"/>'+
					'<p class="per-pl">'+data[i].per+'</p>'+
					'<div class="per-small">'+
						'<img src="'+data[i].small+'"   class="sma"/>'+
					'</div>'+
					'<div class="per-largen">'+
						'<img src="'+data[i].largen+'"  class="big"/>'+
					'</div>'+
					'</div>');
			$(com).appendTo($(".tit2"))		
		}
			
	});
	setTimeout(function(){
		var obj = $(".tit2 .sma");
		picChange(obj);
	},50)	
}
/////////////////////用户评论图片动作////////////
function picChange(obj){
	for(var i=0 ; i < obj.length;i++){
		obj.eq(i).click(function(){
			console.log(this)
			//判断大图是否出现
			var flag = $(this).parents(".tit2-dec").children(".per-largen").css("display");
			var largen = $(this).parents(".tit2-dec").children(".per-largen");
			if(flag == "none"){
				$(this).parents(".per-small").addClass("active");
				$(this).addClass("active");
				$(largen).addClass("active");
			}
			else{
				$(this).parents(".per-small").removeClass("active");
				$(this).removeClass("active");
				$(largen).removeClass("active");		
			}
		})
		//给大图添加点击事件
		$(".per-largen img").click(function(){
			$(".per-small").removeClass("active");
			$(".per-small img").removeClass("active");
			$(".per-largen").removeClass("active");
		})
	}	
}

//获取传过来的数据
var pid = getParam('pid');
function getParam(paramName) {
    paramValue = "";
    isFound = false;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&");
        i = 0;
        while (i < arrSource.length && !isFound) {
            if (arrSource[i].indexOf("=") > 0) {
                if (arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase()) {
                    paramValue = arrSource[i].split("=")[1];
                    isFound = true;
                }
            }
            i++;
        }
    }
    return paramValue;
}
//预加载页面
$.get("http://10.9.160.135/xiangmu/shangpin/goodList.json",function(data){
	for(var i = 0;i < data.length;i++){
		if(data[i].pid == pid){
			document.title = data[i].tit;
			$(".current-place").html(data[i].title);
			$(".big-img img").attr({"src":data[i].bigImg});		
			var num = parseInt(data[i].dong2) //图片个数
			var m = data[i].dong1;
			for(var n = 1;n <= num ; n++){
				if(n==1){
					var li = $('<li><a href=""><img src="img-infmt/'+m+''+n+'.jpg"   class="imgUrl"/></a></li>')
				}else{
					var li = $('<li><a href=""><img src="img-infmt/'+m+''+n+'.jpg"  /></a></li>')
				}
				$(li).appendTo($(".dong"))
			}
			large()
			$(".largen-img img").attr({"src":data[i].largenImg})
			$(".tit-name").html(data[i].title2);	
			$(".tit-prstt").html(data[i].ms);
			$(".price.ac").html(data[i].p1);
			$(".refer-price").html(data[i].p2);
			$(".pub-1 i").html(data[i].fahuo);
					
		}	
	}
})
















