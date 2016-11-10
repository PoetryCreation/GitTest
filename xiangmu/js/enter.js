$("#userN").bind({
	focus:function(){
		$(".userName").css({
			"border":"1px solid #51B8F1"
		});
		$(".error").removeClass("active");	
	},
	blur:function(){
		$(".userName").css({
			"border":""
		})
	}
})
$("#userC").bind({
	focus:function(){
		$(".userCode").css({
			"border":"1px solid #51B8F1"
		});
		$(".error").removeClass("active");	
	},
	blur:function(){
		$(".userCode").css({
			"border":""
		})	
	}
})

$("#checked").click(function(){
	if($("#checked")[0].checked){
		$(".memory i").addClass("active")
	}else{
		$(".memory i").removeClass("active")
	}
})

$(".sure").click(function(){
	var userName = $("#userN").val();
	var userCode = $("#userC").val();
	var userObj = userMessage();
	for(var i = 0;i < userObj.length ; i ++){		
		if(userObj[i].userName == userName && userObj[i].userCode == userCode){
			alert("登陆成功");
			location.href = "../xiangmu/index.html?name="+userName+""
			break;
		}
	}
	$(".error").addClass("active");	
})













