$(function(){
	var dailySale={
		  
		init:function(){
			
			this.moveTop();
			this.blow();
			this.countDown();
		},
		//字体移动
		moveTop:function(){
			var words = $('.dailySale-top .warp i');
			words.each(function(k,v){
				setTimeout(function(){
					setInterval(function(){
						$(v).animate({
							top: -8
						},400,function(){
							$(this).css({
								top: 0
							});
							//console.log($(this))
						});
					},1000);
				},50*k);
				
			});
		},
		//图片放大
		blow:function(){
			$('.dailySale-main ul li img').hover(function(){
				$(this).stop(true).animate({
					width:314,
					height:248,
					top:-9,
					left:-12
				})
			},function(){
				$(this).stop(true).animate({
					width:290,
					height:230,
					top:0,
					left:0
				})
			})
		},
		countDown:function(){
			function countDown(time){
				//创建一个未来时间的时间戳
				var futureTime = Date.parse(time);
				showTime();
				setInterval(showTime,500);
				function showTime(){
					//获取当前时间的时间戳
					var nowTime = Date.now();
					//距离未来的时间
					var diff = futureTime - nowTime;
					var hours = parseInt( diff / 1000 / 60 / 60 );
					var minutes = parseInt( diff / 1000 / 60 % 60 );
					var seconds = parseInt( diff / 1000 % 60 );
					var time =  hours + '时' + minutes + '分' + seconds + '秒！';
					count_down.html(time)
				}
			}

			var count_down = $('.dailySale-main ul li .count-down')
			countDown('2016/12/12 12:00:00');
			
		}
		
	}
	dailySale.init();
});

