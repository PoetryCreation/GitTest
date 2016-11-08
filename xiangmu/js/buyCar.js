//////////////全选择按钮////////////////
$(".list-0 input").change(function(){
	
	if($(this)[0].checked){
		$(".list-0 input").addClass("active");
		$(".check input").addClass("active");
		$(".adress input").addClass("active");
	}
	else{
		$(".list-0 input").removeClass("active");
		$(".check input").removeClass("active");
		$(".adress input").removeClass("active");
	}
	getTotalPrice();
})
/////////////单个商品选择按钮/////////////////////
function checkOne(){	
	$(".adress input").change(function(){
		var ob = $(".adress input");	
		for(var i = 0; i < ob.length; i++){
			if(ob[i].checked){
				ob.eq(i).addClass("active");				
				$(".check input")[i].checked = true;
				$(".check input").eq(i).addClass("active")
				
			}else{
				ob.eq(i).removeClass("active");
				$(".check input")[i].checked = false;
				$(".check input").eq(i).removeClass("active")			
			}
		}
		getTotalPrice();
	})
	
	$(".check input").change(function(){
		console.log(111);
		var ob = $(".check input");	
		for(var i = 0; i < ob.length; i++){
			if(ob[i].checked){
				ob.eq(i).addClass("active");								
			}else{
				ob.eq(i).removeClass("active");				
			}
		}
		getTotalPrice();
	})
}	




/////////////////////////得到购物车数据/////////////////////
function getGoodListObj(){
	var goodListStr = $.cookie("goodList");
	if(!goodListStr){
		$.cookie("goodList","[]",{expires: 7})
		goodListStr = $.cookie("goodList")
	}
	var goodListObj = JSON.parse(goodListStr)
	return goodListObj;
}



//////////////////计算商品总数目///////////////////////

function getTotalNum(){
	var goodListObj = getGoodListObj();
	var sum = 0;	
	for(var i = 0; i < goodListObj.length; i++){
		var a = Number(goodListObj[i].count)
		sum += a;
	}
	return sum;	
}

//////////////////检测商品在购物车中是否存在////////////////////
function checkGoodListById(id){
	var goodListObj = getGoodListObj();
	for(var i = 0; i < goodListObj.length; i++){
		if(goodListObj[i].pid == id){
			return true;
			break;
		}
	}
	return false;
}


//////////////商品添加/////////////////////
function addGoodList(good){
	var goodListObj = getGoodListObj();
	goodListObj.push(good);
	
	var goodListStr = JSON.stringify(goodListObj);
	$.cookie("goodList",goodListStr,{expires: 7});	
}
////////////////商品数量添加/减少//////////////////
function upaddNum(id,num){
	var goodListObj = getGoodListObj();
	for(var i = 0; i < goodListObj.length; i++){
		if(goodListObj[i].pid == id){
			goodListObj[i].count += num;
			break;
		}
	}
	
	var goodListStr = JSON.stringify(goodListObj);
	$.cookie("goodList",goodListStr,{expires: 7});
}

///////////////////商品删除函数///////////////////////////
function goodDelete(pid){
	var goodListObj = getGoodListObj();
	for(var i = 0; i < goodListObj.length; i++){
		if(goodListObj[i].pid == pid){
			goodListObj.splice(i,1)
			break;
		}
	}
	var goodListStr = JSON.stringify(goodListObj);
	$.cookie("goodList",goodListStr,{expires: 7});
}


/////////////////////////////////////////////////////////////////

var totalCount = getTotalNum();
if(totalCount){//有商品 则加载商品信息
	var goodListObj = getGoodListObj();
	$("#car_box").removeClass("active");
	$(".worming").addClass("active");
	for(var i = 0; i < goodListObj.length ; i++){
		var good = 
			'<div class="good">'+
				'<div class="adress">'+
					'<input type="checkbox" />'+
					'<span>'+ goodListObj[i].adr +'</span>'+
				'</div>'+
				'<div class="good-message" pid = "'+ goodListObj[i].pid+'">'+
					'<div class="check">'+
						'<input type="checkbox"/>'+
					'</div>'+
					'<div class="message">'+
						'<img src="'+ goodListObj[i].imgUrl+'"  class="img-show"/>'+
						'<a href="#" class="describ">'+ goodListObj[i].pName+'</a>'+
						'<span class="tax"><i></i>预估税费 ： ￥39.99</span>'+
						'<div class="gift">'+
							'【赠品】<a href="">Pure Smile纯微笑 CHOOSY唇膜小灶 3毫升/片</a>'+
							'<span><b>￥25.00 </b>￥0.00×1</span>'+
						'</div>'+
					'</div>'+
					'<div class="price">'+
						'<span class="p-before">199.00</span>'+
						'<span class="p-now">'+goodListObj[i].price +'</span>'+
						'<span class="limit-time">限时购</span>'+
					'</div>'+
					'<div class="num">'+
						'<button class="cut">-</button>'+
						'<input type="text" class="num-now" value = "'+ goodListObj[i].count+'"/>'+
						'<button class="add">+</button>'+
						'<span class="limit-num">限购5件</span>'+
					'</div>'+
					'<div class="price-total">'+Number(goodListObj[i].count)*Number(goodListObj[i].price)+'</div>'+
					'<div class="operate">'+
						'<a href="" class="del">删除</a>'+
						'<a href="" class="remove">移入收藏夹</a>'+
					'</div>	'+
				'</div>'+
				'<div class="price-exp">'+
					'<span class="active-gift">活动优惠：-￥<em>0.00</em></span>'+
					'<span class="price-total-2">商品应付总计：￥<b>'+goodListObj[i].count*goodListObj[i].price+'</b></span>'+
					'<span class="other">预估税费：￥<em>30.82</em></span>'+
				'</div>	'+
			'</div>'	
			$(good).appendTo($(".good-box"))
			checkOne()
		/////////////////////////////////////
	}
		
}else{//无商品则显示购物提示
	$("#car_box").addClass("active");
	$(".worming").removeClass("active");
}

$(".check input").change(function(){
	getTotalPrice();
	checkAll();
})
///////////////////////////计算已选商品的数目///////////////////////
function getNowNumber(){
	var chec = $(".check input");
	var totalNumber = 0;
	for(var i = 0 ; i < chec.length ; i ++){
		if(chec[i].checked){
			totalNumber += (chec).eq[i].parents(".good-message").children(".num").children(".num-now").val;
		}
	}
	$(".total-num b").html(totalNumber);
}

//////////////////////////计算商品总价函数///////////////////////////
function getTotalPrice(){
	var chec = $(".check input");
	var totalPrice = 0;
	for(var i = 0 ; i < chec.length ; i ++){
		if(chec[i].checked){
			var price = $(chec[i]).parents(".good-message").children(".price-total").html();
			totalPrice += Number(price);
		}
	}
	$(".total-price b").html("￥"+totalPrice)
}

//////////////////////////检测是否被全部选中///////////////////////////
function checkAll(){	
	var chec = $(".adress input");
	var flag = true;
	for(var i = 0; i < chec.length; i ++){
		if(!chec[i].checked){			
			flag = false;
			break;
		}
	}
	$(".list-0 input")[0].checked = true;	
}
function checkAll2(){	
	var chec = $(".check input");
	var flag = true;
	for(var i = 0; i < chec.length; i ++){
		if(!chec[i].checked){			
			flag = false;
			break;
		}
	}
	$(".adress input")[0].checked = true;	
}
////////////////////全选按钮对应价格变换/////////////////////
$(".list-0 input").change(function(){
	var chec = $(".check input");
	for(var i = 0;i<chec.length;i++){
		chec[i].checked = this.checked;
	}
	getTotalPrice();
})


//商品数量减
$(".cut").click(function(){
	var pr = $(this).parents(".good-message");
	var num = $(this).next().val();
	pr.children(".check").children("input")[0].checked = true;
	$(pr.children(".check").children("input")).addClass("active");
	var pid = pr.attr("pid");
	num --;
	if(num < 1){
		getTotalPrice();
		checkAll();
		num = 1;
		return;
	}
	pr.children(".num").children("input").eq(0).val(num);	
	var price = pr.children(".price").children(".p-now").eq(0).html()*num;
	pr.children(".price-total").eq(0).html(price);
	upaddNum(pid,-1);
	getTotalPrice();
	checkAll2()
	checkAll();
	$(".total-num b").html(getTotalNum());
	getNowNumber()
	
})
//商品数量加
$(".add").click(function(){
	var pr = $(this).parents(".good-message");
	var num = $(this).prev().val();
	pr.children(".check").children("input")[0].checked = true;
	$(pr.children(".check").children("input")).addClass("active");
	var pid = pr.attr("pid");
	num ++;
	pr.children(".num").children("input").eq(0).val(num);	
	var price = pr.children(".price").children(".p-now").eq(0).html()*num;
	pr.children(".price-total").eq(0).html(price);
	upaddNum(pid,1);
	getTotalPrice();
	checkAll2();
	checkAll();
	$(".total-num b").html(getTotalNum());		
})

//删除
$(".del").click(function(){
	if(confirm("确定删除？")){
		var tr = $(this).parents(".good-message");
		var hr = $(this).parents(".good");
		var pid = tr.attr("pid");
		hr.remove();
		goodDelete(pid)	
	}
})

















