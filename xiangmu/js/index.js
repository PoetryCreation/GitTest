$(function(){
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
	//大图自动轮播
	var timer;
	auto();
	var currentindex = 0 ;
	function auto(){
		timer = setInterval(function(){
			++ currentindex;
			if(currentindex == 7){
				currentindex = 0;
			}
			$("#banner_img li").eq(currentindex).fadeToggle("slow",function(){
				$(this).css("display","block");
			})
			$("#banner_img li").eq(currentindex-1).fadeToggle("slow",function(){
				$(this).css("display","none");
			});
			$("#tab li").eq(currentindex).css("background-color","red").siblings().css("background-color","#fff");
			},2000)
	}   
	// 悬浮自动停止
	$("#banner_box").bind({
		mouseenter:function(){
			clearInterval(timer);
		},
		mouseleave:function(){
			auto();
		}
	})
	
	//左右大图切换按钮
	$("#banner_box").bind({
		mouseenter:function(){
			$(".btn-left").css("display","block");
			$(".btn-right").css("display","block");			
		},
		mouseleave:function(){
			$(".btn-left").css("display","none");
			$(".btn-right").css("display","none");
		}
	})
	$(".btn-right").click(function(){
		++ currentindex;
		if(currentindex == 7){
				currentindex = 0;	
		}
		$("#banner_img li").eq(currentindex).fadeToggle("slow",function(){
			$(this).css("display","block");
		})
		$("#banner_img li").eq(currentindex - 1).fadeToggle("slow",function(){
			$(this).css("display","none");
		});
		$("#tab li").eq(currentindex).css("background-color","red").siblings().css("background-color","#fff");
	})
	$(".btn-left").click(function(){
		if(currentindex == 0){
			currentindex = 7;	
		}
		$("#banner_img li").eq(currentindex - 1).fadeToggle("slow",function(){
			$(this).css("display","block");
		})
		$("#banner_img li").eq(currentindex).fadeToggle("slow",function(){
			$(this).css("display","none");
		});
		$("#tab li").eq(currentindex - 1).css("background-color","red").siblings().css("background-color","#fff");
	-- currentindex;	
	})
	//tab切换
	$("#tab li").each(function(index,element){
		$(element).click(function(){
			$("#banner_img li").eq(currentindex).fadeToggle("slow",function(){
				$(this).css("display","none");
					currentindex = index;
			});
			$("#banner_img li").eq(index).fadeToggle("slow",function(){
				$(this).css("display","block");
			});
			$("#tab li").eq(index).css("background-color","red").siblings().css("background-color","#fff");
		})	
	})
	//母婴儿童部分  产品列表切换
	function reload(adr){
		
		$(adr +" .type-naver").children("li").mouseenter(function(){
			$(this).css({
				"backgroundColor":"#000",
				"color":"#fff"
			});
			$(this).siblings().css({
				"backgroundColor":"",
				"color":"#000"
			})
			$(this).children().css("display","block");
			$(this).siblings().children().css("display","none");
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
			var index = $(this).index();
			//对应的下方的内容切换
			$(adr+" .place").eq(index).addClass("active").siblings().removeClass("active");			
			
		})
	}	
	
//用遍历商品信息后台加载函数	
	function diao(obj,adr){
		for(var i = 0;i < 5 ; i++){
			var a = obj + "-" +i;
			loading(a,adr)
		}
	}
	//新建内容项
	function loading(lod,adr){
		//让第一栏预加载
		$(adr +" .type-naver").children("li:first").trigger("mouseenter");
		$.get("http://10.9.160.135/xiangmu/shangpin/"+ lod +".json",function(data){
			var pla = '<div class="place"></div>'
			$(pla).appendTo($(adr+" .type-content"))
			for(var i = 0;i < data.length;i++){
				var placebox ='<div class="place-box"><a href="'+ data[i].src+'" class="img-show" target="_blank"><img src="'+data[i].imgShow +'"/></a><div class="detail"><a href="#" class="tit"><span class="tit-num">'+ data[i].titNum +'</span><span class="tit-name">'+data[i].titName +'</span></a><a href="#" class="exp">'+ data[i].exp +'</a><span class="price">'+ data[i].price+'</span><strong>'+ data[i].strong+'</strong><em>'+data[i].em+'</em><p>立即购买</p></div></div>';	
				var adress = adr + " .place:last";
				$(placebox).appendTo($(adress));
				if(i == 0){
					$(adr+" .place").eq(0).addClass("active")
				}
			}		
		})	
	}
	diao("mom","#content_mom",reload("#content_mom"));	
	diao("mom","#content_beauty",reload("#content_beauty"));
	diao("mom","#content_cloth",reload("#content_cloth"));
	diao("mom","#content_life",reload("#content_life"));
	diao("mom","#content_pabul",reload("#content_pabul"));
	diao("mom","#content_oversea",reload("#content_oversea"));
	diao("mom","#content_elec",reload("#content_elec"));
	diao("mom","#content_foot",reload("#content_foot"));
	diao("mom","#content_regit",reload("#content_regit"));
	
	$(window).scroll(function(){
		var opTop = $("#content_box").offset().top;
		var currentTop = $(window).scrollTop();
		if(currentTop >= opTop){
			$(".floatWd").css("display","block")
		}else{
			$(".floatWd").css("display","none")
		}
	})

//获得用户名

var userName = getParam('name');
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
if(userName){
	$("#enter_win").html(userName)
}

	
	
	












})








