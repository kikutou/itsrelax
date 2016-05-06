// 代码整理：懒人之家

$(document).ready(function (){

	//点击小图切换大图
	$("#thumbnail1 li a").click(function(){
		$(".zoompic1 img").hide().attr({ "src": $(this).attr("href"), "title": $("> img", this).attr("title") });
		$(".zoompic1 img:hidden").show();
		$("#thumbnail1 li.current").removeClass("current");
		$(this).parents("li").addClass("current");
		return false;
	});

	//点击小图切换大图
	$("#thumbnail2 li a").click(function(){
		$(".zoompic2 img").hide().attr({ "src": $(this).attr("href"), "title": $("> img", this).attr("title") });
		$(".zoompic2 img:hidden").show();
		$("#thumbnail2 li.current").removeClass("current");
		$(this).parents("li").addClass("current");
		return false;
	});

	//点击小图切换大图
	$("#thumbnail3 li a").click(function(){
		$(".zoompic3 img").hide().attr({ "src": $(this).attr("href"), "title": $("> img", this).attr("title") });
		$(".zoompic3 img:hidden").show();
		$("#thumbnail3 li.current").removeClass("current");
		$(this).parents("li").addClass("current");
		return false;
	});

	//点击小图切换大图
	$("#thumbnail4 li a").click(function(){
		$(".zoompic4 img").hide().attr({ "src": $(this).attr("href"), "title": $("> img", this).attr("title") });
		$(".zoompic4 img:hidden").show();
		$("#thumbnail4 li.current").removeClass("current");
		$(this).parents("li").addClass("current");
		return false;
	});

	//点击小图切换大图
	$("#thumbnail5 li a").click(function(){
		$(".zoompic5 img").hide().attr({ "src": $(this).attr("href"), "title": $("> img", this).attr("title") });
		$(".zoompic5 img:hidden").show();
		$("#thumbnail5 li.current").removeClass("current");
		$(this).parents("li").addClass("current");
		return false;
	});
	
		//点击小图切换大图
	$("#thumbnail6 li a").click(function(){
		$(".zoompic6 img").hide().attr({ "src": $(this).attr("href"), "title": $("> img", this).attr("title") });
		$(".zoompic6 img:hidden").show();
		$("#thumbnail6 li.current").removeClass("current");
		$(this).parents("li").addClass("current");
		return false;
	});

});
