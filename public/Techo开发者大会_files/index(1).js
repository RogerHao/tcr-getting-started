// $(".header-right-ul ul li").on('click',function(){
//     $(this).addClass("sta").siblings().removeClass("sta");
// })
// 兼容当页面在微信浏览器的获取元素属性data的时候undefined
getDataset = function(ele){
// function getDataset(ele){
    if(ele.dataset){
        return ele.dataset;
    }else{
        var attrs = ele.attributes,//元素的属性集合
            dataset = {},
            name,
            matchStr;

        for(var i = 0;i<attrs.length;i++){
            //是否是data- 开头
            matchStr = attrs[i].name.match(/^data-(.+)/);
            if(matchStr){
                //data-auto-play 转成驼峰写法 autoPlay
                name = matchStr[1].replace(/-([\da-z])/gi,function(all,letter){
                    return letter.toUpperCase();
                });
                dataset[name] = attrs[i].value;
            }
        }
        return dataset;
    }
}
// 在头部导航栏进行的select下拉选择语言的响应事件
$("#select_language").change(function(){
    var selected = $(this).children('option:selected').val()
	var Url = getDataset($(this).children('option:selected')[0]).url
	if(Url){
		window.location.href = Url
	}
  //   if(selected=="ENGLISH"){
		// window.location.href = "./html/pc/en/index.html"
  //   }else if(selected=="CHINESE"){
		// window.location.href = "../../../index.html"
  //   }
});
// var sfdb = true
// var top = 0        //滾動到頂部的次數
// var bottom = 0     //滾動到底部的次數
$(".NST_inr_sec").scroll(function(e) {
	$.fn.fullpage.setAllowScrolling(false);
	var a = $(this).scrollTop() //滚动到的当前位置
	var c = $(this)[0].scrollHeight //滚动距离总长(注意不是滚动条的长度)
	var d = $(".NST_inr_sec").height();
	var time = setTimeout(function(){
		// if(a == 0 || a + d >= c){
		// 	$.fn.fullpage.setAllowScrolling(true);
		// }
		if(a == 0 && direction || a + d >= c && !direction){+
			clearTimeout(time);
			$.fn.fullpage.setAllowScrolling(true);
		} 
		// if(a + d >= c && !direction){
		// 	$.fn.fullpage.setAllowScrolling(true);
		// }
	}, 1500)
	// if(a == 0 || a + d >= c){
	// 	// sfdb = true
	// 	setTimeout(function(){
	// 		$.fn.fullpage.setAllowScrolling(true);
	// 	}, 1000)
	// }else{
	// 	// sfdb = false
	// }
	// if(a + d >= c){
	// 	console.log("滚动条到底部了")
	// }
})
var direction = true
$('.NST_inr_sec').on("mousewheel DOMMouseScroll", function (e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
	(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));            // firefox
	if (delta > 0) {
		direction = true
		// console.log("向上滚")
		
	} else if (delta < 0) {
		direction = false
		// console.log("向下滚")
	}
});



// var cz = true    //是否重置
// var jishu = 0 //次数
// $('.NST_inr_sec').on("mousewheel DOMMouseScroll", function (e) {
//     var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
// 	(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));            // firefox
// 	if (delta > 0) {
// 		// if(cz){jishu = jishu + 1}
// 		jishu = jishu + 1
// 		var times = setTimeout(function(){
// 			// cz = false
// 			console.log(jishu)
// 			if(sfdb){
// 				if(jishu > 6){
// 					// $.fn.fullpage.moveSectionUp();
// 					$.fn.fullpage.moveTo(2, 0)
// 					// $.fn.fullpage.setAllowScrolling(true);
// 				}
// 			}
// 			// else{
// 			// 	if(jishu > 6 && delta > 0){
// 			// 		$.fn.fullpage.setAllowScrolling(true);
// 			// 	}
// 			// }
// 			jishu = 0
// 		}, 300)
// 		var timess = setTimeout(function(){
// 			// debugger
// 			// // 如果還沒翻頁就禁止 已經翻頁了就允許
// 			// if(sfdb && cz){
// 			// 	$.fn.fullpage.setAllowScrolling(false);
// 			// }
// 		}, 500)
// 		// console.log("向上滚")
// 	} else if (delta < 0) {
		
// 		console.log("向下滚")
// 	}
// });
// var b = true
// var a = $(this).scrollTop() //滚动到的当前位置
// var c = $(this)[0].scrollHeight //滚动距离总长(注意不是滚动条的长度)
// var d = $(".NST_inr_sec").height();
// $.fn.fullpage.setAllowScrolling(false);
// if(a == 0){
// 	b = false
// 	setTimeout(function(){
// 		if(!b){
// 			$.fn.fullpage.setAllowScrolling(true);
// 		}
// 	}, 1000)
// }
// if(a + d >= c){
// 	console.log("滚动条到底部了")
// }


// var sliding = 0
// $('.section_tright_title').scroll(function(event){
// 	console.log("A")
// 	if(sliding == 0){
// 		$.fn.fullpage.setAllowScrolling(false);
// 		sliding == 0
// 	}
// })

// 在ipad端点击三条杠的时候显示目录
$(".Head_InrR span").on("click", function(e) {
	// $(".m-modal-group").attr("data-modal", "menu"),
	$(".m-modal-group").fadeIn(50)
})
$(".m-modal-group").on("click", function(e) {
	$(this).fadeOut(300)
})
$(".menu-nav-item").on("click", function(t) {
	var n = $(this).attr("data-anchor-index");
})
// 時間倒計時
function TimeDown(id, endDateStr) {
    //结束时间
    var endDate = new Date(endDateStr);
    //当前时间
    var nowDate = new Date();
    //相差的总秒数
    var totalSeconds = parseInt((endDate - nowDate) / 1000);
    //天数
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    //取模（余数）
    var modulo = totalSeconds % (60 * 60 * 24);
    //小时数
    var hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    //分钟
    var minutes = Math.floor(modulo / 60);
    //秒
    var seconds = modulo % 60;
    //输出到页面
	if(hours < 10){
		if(hours < 0){
			hours = 0
		}
		hours = '0' + hours
	}
	if(days < 10){
		if(days < 0){
			days = 0
		}
		days = '0' + days
	}
	var change_day = (days + "").split("")
	var change_hours = (hours + "").split("")
	$("#Countdown_day_one")[0].innerHTML = change_day[0]
	$("#Countdown_day_two")[0].innerHTML = change_day[1]
	$("#Countdown_hours_one")[0].innerHTML = change_hours[0]
	$("#Countdown_hours_two")[0].innerHTML = change_hours[1]
    // document.getElementById(id).innerHTML = "还剩:" + days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
    //延迟一秒执行自己
    setTimeout(function () {
        TimeDown(id, endDateStr);
    }, 1000)
}
// 切换页面
$(".NST_top ul li").on("click",function(event){
	var _el = Number(event.currentTarget.dataset.num)
	if(_el == 3) {
		return;
	}
	/*-切换导航-*/
	$(this).addClass("sta").siblings().removeClass("sta");
	/*-切换内容-*/
	var _Al = $(".NST_inr_sec").length
	// let b = a.map(item => ++item)
	for(var i=0;i<_Al;i++){ 
		$(".NST_inr_sec")[i].style.display = "none"
		
	}
	$(".NST_inr_sec")[_el].style.display = "block"
})