var lastOrd= -1; //将要离开的图片序号；
	var currOrd= 0;//currOrd代表当前图片的序号(将要显示图片序号)，
	var myTimer;
	function goStep(){
		lastOrd++;
		currOrd++;
		
		if(lastOrd>3){//3
			lastOrd=0;
		}
		
		if(currOrd>3){//3
			currOrd=0;
		}
		moveImgStep(lastOrd,currOrd);
			
	}
	
	function init(){
		$("#list img").eq(0).css({"left":"0px"});
		$("#list ul li").eq(0).css({"backgroundColor":"#008cd6"});
	}	
	function autoPlay(){
		
		myTimer = setInterval(goStep,2000);
	}	
	
	//跳到对应的图片上
	
	//假定当前显示的是第2张图片；要跳到第4张图片；
	//currOrd=1;
	//ord = 3;
	
	function goImg(ord){
		clearInterval(myTimer);
		if(currOrd==ord){
			return;
		}
		moveImgStep(currOrd,ord);
		currOrd = ord;
		lastOrd = currOrd-1;
		if(lastOrd<0){
			lastOrd = 3;
		}
	}

/*
ord1:将要离开的图片、
ord2:将要进来的图片
*/

function moveImgStep(ord1,ord2){
	//1）、先把下一张图片放置在容器的右边
	$("#list img").eq(ord2).css({"left":$("#list").outerWidth()+"px","top":"0px"});
	//2）、移动当前图片和下一张图片。
	$("#list img").eq(ord1).animate({"left":(-1*$("#list").outerWidth())+"px"},1000);
	$("#list img").eq(ord2).animate({"left":"0px"},1000);	
	
	$("#list ul li").eq(ord2).css({"backgroundColor":"#008cd6"}).siblings().css({"backgroundColor":"darkgray"});
	
}
$(function(){	
	
	init();
	//1、自动播放
	autoPlay();
	
	//2、鼠标放入图片后停止
	$("#list").mouseover(function(){
		clearInterval(myTimer);
	});
	
	//3、鼠标离开后自动播放
	$("#list").mouseout(function(){
		autoPlay();
	});
		
	//4、鼠标放在按钮上，跳到对应的图片上，
	$("#list ul li").mouseover(function(){
		goImg($("#list ul li").index(this));
	});
	

});
