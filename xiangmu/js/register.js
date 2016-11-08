
//判断用户名
var pass = 0;
$("#i-ID").blur(function(){
	var ID = $("#i-ID").val();
	var regnum = /^[0-9]/g;//首字母判断
	var reg = /^[a-zA-Z]\w{5,17}$/g;//整体判断	
	if(ID != ""){
		if(regnum.test(ID)){
			wormIng("#name-W",1,"账号必须由字母开头")//显示首字母必须为字母
		}
		else if(!reg.test(ID)){
			wormIng("#name-W",2,"账号必须由6-18个字符组成")//提示6-18位
		}else{
			wormIng("#name-W",3)//正常
			
		}
	
	}
})
//判断密码
$("#p-pwd").blur(function(){
	var ID = $("#p-pwd").val();
	var reg0 = /^[0-9]{6,}$/g;//六位数字；
	var reg1 = /^[a-z]{6,}$|^[A-Z]{6,}$/g;//liu
	var reg2 = /^\w{6,16}$/g;
	if(ID!=""){
		if(reg0.test(ID)||reg1.test(ID)){
			wormIng("#pwd-m",1,"密码过于简单，请重新配置");
		}
		else if(!reg2.test(ID)){
			wormIng("#pwd-m",2,"密码须由6-16个字符组成，区分大小写");
		}else{
			wormIng("#pwd-m",3)
		}
	}	
})

//密码确认
$("#p-pwdO").blur(function(){
	var ID = $("#p-pwdO").val();
	var mi = $("#p-pwd").val();
	if(ID != ""){
		if(mi == ID){
			wormIng("#pwd-o",3)
		}else{
			wormIng("#pwd-o",1,"密码不一致")
		}
	}
		
})
//图片验证码

$("#code").mouseenter(function(){
	$(".float").addClass("active");	
	$(".img-flo").css("left",0);
	$(".img-two").css("left",0);	
	
	$(".img-flo").mousedown(function(e){
		var x = e.clientX;	
		$("#code").mousemove(function(e){		
			var X = e.clientX - x;
			var max = $("#code").width() - $(".img-flo").width()
			if(X < 0){
				X = 0;
			}
			if(X > max){
				X = max;
			}
			$(".img-flo").css("left",X);
			$(".img-two").css("left",X);	
		})
		
		//e.preventDefault();
		return false;//阻止默认行为		
	})
	$(".img-flo").mouseup(function(){
		$("#code").off("mousemove");
		var L = $(".img-flo").position().left;
		if(L > 158 && L < 162){
			wormIng("#pwd-s",3)
			$(".float").removeClass("active");
			$(".img-two").css("left",0);
			$(".img-flo").animate({
				"left":0
			},500);
		}else{
			wormIng("#pwd-s",1,"验证失败，请重新验证")
			$(".img-two").css("left",0);
			$(".img-flo").animate({
				"left":0
			},500);
		}		
	})
	
	
})
$("#code").mouseleave(function(){	
	$(".float").removeClass("active");	
	$(".img-flo").css("left",0);
	$(".img-two").animate({
		"left":0
	},500);
})


//手机号码认证
$("#num").focus(function(){
	console.log(pass)
	if(pass < 3){
		$(window).keypress(function(e){
			$("#num").val("")	
		})
	}	
})
$("#num").blur(function(){
	var ID = $("#num").val();
	var reg = /^[1][0-9]{10}$/g;
	console.log(pass)
	if(ID != "" && pass >= 4){
		if(!reg.test(ID)){
			wormIng("#pwd-W",1,"请输入有效手机号码");
		}else{
			wormIng("#pwd-W",3);
			$(".getMess").css({
				"opacity":1,
				"filter":"alpha(opacity=100)",
				"cursor":"pointer"
			})
			$(".sure").css({
				"opacity":1,
				"filter":"alpha(opacity=100)",
				"cursor":"pointer"
			})
		}
		
	}	
})


///////////////注册按钮///////////////
$(".sure").click(function(){
	var userName = $("#i-ID").val() + $(".i-input select").val();
	var userCode = $("#p-pwdO").val();
	console.log(pass)
	if(pass >= 5){
		var obj = {userName:userName,userCode:userCode}
		userMessage();
		addUser(obj);
		alert("注册成功");
		
		//将用户名和用户密码存入数据库
		location.href = "http://10.9.160.135/xiangmu/enter.html"
	}
	
})

//建立保存用户数据的cookie
function userMessage(){
	var userStr = $.cookie("userMessage");
	if(!userStr){
		$.cookie("userMessage","[]",{expires: 7})
		userStr = $.cookie("userMessage");
	}
	var userObj = JSON.parse(userStr)
	return userObj;
}

//向cookie中添加用户注册信息
function addUser(obj){
	var userObj = userMessage();
	userObj.push(obj);
	
	var userStr = JSON.stringify(userObj);
	$.cookie("userMessage",userStr,{expires: 7});	
}


//提示函数    name 对应的divID   和要执行内容的传参
function wormIng(name,ad,val){
	var na = $(name)
	na.css("display","block");
	var obj = $(name).children("i")
	if(ad == 1){	//错误1	
		$(name).children("i").css({
			"background-position":"-65px -99px"
		})
		$(name).children("em").html(val);
		shake(obj)
	}
	else if(ad == 2){	//错误2
		$(name).children("i").css({
			"background-position":"-65px -99px"
		})
		$(name).children("em").html(val);
		shake(obj);
	}
	else if(ad == 3){//成功
		$(name).children("i").css({
			"background-position":"-29px -99px"
		})
		$(name).children("em").html("");
		pass ++;
		
	}	
}
//震动函数
function shake(obj){
	console.log(111)
	var n = 0;
	var nn = 0;
	var timer = setInterval(function(){
		n++;
		nn = n % 30 ;
		if(nn <= 10){
			$(obj).css({
				"margin-left":nn + "px"
			})
		}else{
			$(obj).css({
				"margin-left":(nn - 20) + "px"
			})
		}
	},10)
	setTimeout(function(){
		clearInterval(timer);
		$(obj).css({
			"margin-left":"auto"
		})
	},600)
}
