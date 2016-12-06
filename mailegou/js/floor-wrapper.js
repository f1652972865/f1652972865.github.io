$(function(){
	var floor = {
		floorBox: $('.floor-wrapper .floor'),
		floorItem: $('.floor-wrapper .floor-item'),
		floorList: $('.floor-wrapper .floor-list'),
		flag: true, // true 自己滚动   false代表点击标签
		
		timer:null,
		next:0,
		init: function(){
			
			this.scroll();
			
			this.swichFloor();
			
			this.autoPlay();
			
			this.arrowR();
			this.arrowL();
			
			this.StaSto();
		},
		//滚动
		scroll: function(){
			var that = this;
			$(window).scroll(function(){
				//处理楼层标签的显示与隐藏
				var scrollT = $(this).scrollTop();
				if(scrollT >= 3300 && scrollT <= 7600){
					that.floorBox.fadeIn(100);
					/*that.floorBox.css({
						'position':'fixed',
						'top':200
						
					})*/
				}else{
					that.floorBox.fadeOut(1000);
					/*that.floorBox.css({
						'display':'none',
						'position':'absolute',
						'buttom':0
					})*/
					
				}
				
				if(!that.flag){
					return;
				}
				
				for(var k=0; k<that.floorItem.length; k++){
					//获取当前楼层距离顶部的距离
					var t =  that.floorItem.eq(k).offset().top;
					//楼层的下边界
					var bottom = t +  that.floorItem.eq(k).height();
					
					if(
						//楼层的上边界
						(t > scrollT && t < scrollT + $(window).height()/2)
						||
						//楼层的下边界
						bottom > scrollT + $(window).height()/2
					){
						that.floorList.eq(k)
							.addClass('active')
							.siblings().removeClass('active');
						
						break;
					}
				}
			});
		},
		//楼层标签点击切换楼层
		swichFloor: function(){
			var that = this;
			this.floorList.click(function(){
				that.flag = false;
				$(this).addClass('active ').siblings().removeClass('active');
				var t = that.floorItem
					.eq($(this).index())
					.offset().top;
				$('html,body').stop(true).animate({
					scrollTop: t
				},function(){
					//自动滚动完成 改变标志
					that.flag = true;
				});
			});
		},
		
		//楼层滚动轮播
		autoPlay:function(){
			var that=this;
			this.timer=setInterval(function(){
				that.next++;
				that.Switch();
			},1500)
		},
		//切换
		Switch:function(){
			
			if(this.next >= 4){
				
				$('.floor-wrapper .leftCon .imgWrapper').css({
					'marginLeft':0
				});
				this.next=0;
			}
			
			if(this.next < 0){
				$('.floor-wrapper .leftCon .imgWrapper').css({
					'marginLeft':-270
				});
				this.next=4-1;
			}
			$('.floor-wrapper .leftCon .imgWrapper').stop(true).animate({
				'marginLeft':-90*this.next
			})
		},
		arrowR:function(){
			var that=this;
			$('.floor-wrapper .leftCon .brand .next').click(function(){
				that.next++;
				that.Switch();
			})
		},
		arrowL:function(){
			var that=this;
			$('.floor-wrapper .leftCon .brand .prev').click(function(){
				that.next--;
				that.Switch();
			})
		},
		StaSto:function(){
			var that=this;
			$('.floor-wrapper .leftCon .brand').hover(function(){
				clearInterval(that.timer);
			},function(){
				that.autoPlay();
			})
		}
	};
	floor.init();
})