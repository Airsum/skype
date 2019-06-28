$(function(){
		
	$('.z_weixin').bind({
		mouseover:function(){
        	$('.z_weixin').css('text-decoration','underline');
       	},
       	mouseout:function(){
        	$('.z_weixin').css('text-decoration','none');
       	},
        click:function(){
        	$('.z_wx').toggleClass('show');
        }       
	});	
/*------------------------------------------------------微信end-------------------------------------------------*/	
	$('.z_sts').click(function(){  //点击更多弹出窗口1
		$('.z_tan1').css('display','block');
	})
	$('.z_tel').click(function(){  //点击更多弹出窗口2
		$('.z_tan2').css('display','block');
	})
	$('.z_close1').click(function(){  //关闭窗口1
		$('.z_tan1').css('display','none');
	})	
	$('.z_tan1').click(function(){  //关闭窗口1
		$(this).css('display','none');
	})
	$('.z_tan2').click(function(){  //关闭窗口2
		$(this).css('display','none');
	})
	$('.z_close2').click(function(){  //关闭窗口2
		$('.z_tan2').css('display','none');
	})
	$('.z_inner1,.z_inner2').click(function(event){  //点击弹窗阻止事件冒泡
		event.stopPropagation();
	})
	$('.z_joinus').click(function(event){  //跳转至登录页面
		window.location.href='#';
		event.stopPropagation();   
	})
	$('.z_dial').click(function(){  //跳转至新页面
		window.location.href='http://skype.gmw.cn/product/getMoreRates.html';
		event.stopPropagation();   
	})
/*------------------------------------------------------弹窗end-------------------------------------------------*/	
	var index = 0;
	var z_timer = setInterval(autoPlay,3000);
	function autoPlay(){   //自动轮播		
		if(index == 5){  
			index = 1;
			$('.zimg').css('left',0);
		}else{
			index++;
		}
		for(var i = 0; i < $('.zbtn button').length;i++){
			$('.zbtn button').eq(i).removeClass('active');
		}	
		animate($('.zimg')[0],{left:-960*index},20);
		$('.zbtn button').eq(index == 5 ? 0 :index).addClass('active');
	}
	
	$('.zimg').mouseover(function(){  //鼠标移入暂停轮播
		clearInterval(z_timer); 
	});
	$('.zimg').mouseout(function(){   //鼠标移出恢复轮播
		z_timer = setInterval(autoPlay,3000); 
	});
				
	for(var i = 0;i < $('.zbtn button').length;i++){
		$('.zbtn button').eq(i).attr('index',i);
		$('.zbtn button').eq(i).click(function(){  //点击按钮手动轮播
			index = $(this).attr('index');  
			for(var j = 0; j < $('.zbtn button').length;j++){
				$('.zbtn button').removeClass('active');
			}
			animate($('.zimg')[0],{left:-960*index},20);
			$('.zbtn button').eq(index).addClass('active');
		})
	}       
/*------------------------------------------------------轮播图end-------------------------------------------------*/
	$('.zimg .z_p2').click(function(){ 
		window.open('http://skype.gmw.cn/sales_new_products.html');
	})
	$('.zimg .z_p3').click(function(){  
		window.open('http://skype.gmw.cn/hwstore/index.html');
	})
	$('.zimg .z_p4').click(function(){  
		window.open('http://skype.gmw.cn/skypetopic/skypehans.html');
	})
	$('.zimg .z_p5').click(function(){  
		window.open('http://skype.gmw.cn/sfbproduct/sfb2017.html');
	})
	$('.zimg .z_p6').click(function(){  
		window.open('http://skype.gmw.cn/business/video-launch.html');
	})
	$('.zimg .z_p7').click(function(){  
		window.location.href='http://skype.gmw.cn/notice/index_1.html';
	})
	$('.zimg .z_p8').click(function(){ 
		window.location.href='http://skype.gmw.cn/product/productlist.html';
	})
	$('.zimg .z_p9').click(function(){  
		window.location.href='http://skype.gmw.cn/function/detail_video-messaging.html';
	})
	$('.zimg .z_p10').click(function(){  	
		window.location.href='http://skype.gmw.cn/activity/multiplatforms.html';
	})
/*------------------------------------------------------轮播图点击事件end-------------------------------------------------*/

})

/*	var img = document.querySelector(".img-list");
	var btn = document.querySelectorAll('button');
	
	var index = 0;
	var timer = setInterval(autoPlay,3000);
	function autoPlay(){  //自动轮播
		if(index == 5){  
			index = 1;
			img.style.left = 0;
		}else{
			index++;
		}
		animate(img,{left:-960*index},10);
		
		for(var i = 0; i < btn.length;i++){
			btn[i].className = "";
		}		
		btn[index == 5 ? 0 :index].className = "active";
	}
	
	img.onmouseover = function(){  
		clearInterval(timer); 
	}
	img.onmouseout = function(){
		timer = setInterval(autoPlay,3000); 
	}
		
	//点击按钮手动轮播
	for(var i = 0;i < btn.length;i++){
		btn[i].index = i;
		btn[i].onclick = function(){
			index = this.index;  //获取当前鼠标移上的li的下标
			for(var j = 0; j < btn.length;j++){
				btn[j].className = "";
			}
			animate(img,{left:-960*index},10);
			btn[index].className = "active";
		}
	}    */
/*------------------------------------------------------轮播图原生代码-------------------------------------------------*/
