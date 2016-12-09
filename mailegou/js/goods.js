$(function(){
	var goods={
		init:function(){
			this.hover();
			this.listItem();
			this.MLeft();
			this.Show();
			this.glass();
		},
		//头部鼠标移进移出
		hover:function(){
			$('.mygou').hover(function(){
				$(this).find('.noneCon').stop().slideDown();
				//console.log($(this))
				$(this).css({
					'background-color':'#fff'
				});
			},function(){
				$(this).find('.noneCon').stop().slideUp();
				$(this).css({
					'background-color':'#f5f5f5'
				});
			});
		},
		listItem:function(){
			var that=this;
			$('.nav-list .list-item').hover(function(){
				//alert(2)
				//console.log($(this).width())
				var Mleft=$(this).position().left;
				var Width=$(this).width();
				//console.log(Width)
				$('.on-bg').stop().animate({
					left:Mleft,
					width:Width-22
				},500);
			},function(){
				$('.on-bg').stop().animate({
					left:0,
					width:10
				},500);
			});
		},
		
		//二级菜单
		MLeft:function(){
			$('.menu-top').hover(function(){
				$(this).find('.menu-top-wrapper').stop(true).slideDown(200);
			},function(){
				$(this).find('.menu-top-wrapper').stop(true).slideUp(100);
			});
			
		},
		Show:function(){
			$('.menu-top ul li').hover(function(){
				
				$(this).find('.menu-top-wrapper-info').stop(true).animate({
					left:180
				}).css({
					'display':'block'
				})
				$(this).stop(true).animate({
					width:160,
					paddingLeft:20
				},300)
			},function(){
				$(this).stop(true).animate({
					width:180,
					paddingLeft:0
				})
				$(this).find('.menu-top-wrapper-info').stop(true).animate({
					left:150
				}).css({
					display:'none'
				})
			})
		},
		
		glass:function(){
			//鼠标移进列表图片
			$('.preview .spec .spec-list ul li img').hover(function(){
				$(this).addClass('color');
				//获取自己的src
				var src1 = $(this).attr('src')
				//替换小盒子的src
				$('.product .preview .glass .small img').attr({
					src : src1
				})
			},function(){
				$(this).removeClass('color')
			
			});
			
			
			//当鼠标移进小盒子中
			$('.product .preview .glass .small').hover(function(){
				//获取小盒子中图片的src
				var src2=$(this).find('img').attr('src')
				//替换大盒子中图片的src
				$('.product .preview .glass .large img').attr({
					src : src2
				})
				//鼠标移进小盒子中让大盒子显示
				$('.product .preview .glass .large').show()
				
				$('.glass .small .filter').show()
				
			},function(){
				//鼠标移出小盒子让大盒子消失
				$('.product .preview .glass .large').hide()
				
				$('.glass .small .filter').hide()
			});
			
			var offsetT = $('.product .preview .glass .small').offset().top;
			var offsetL = $('.product .preview .glass .small').offset().left;
			//鼠标移动事件
			$('.product .preview .glass .small').mousemove(function(e){
				e=e||window.event;
				//鼠标相对文档的距离 - 元素相对文档的距离
				var left = e.pageX - offsetL;
				var top = e.pageY-offsetT;
				
				//处理left和top，做边缘处理（防止越界）
				left = left < 100 ? 100 : (left > 300) ? 300 : left;
				top = top < 100 ? 100 : (top > 300) ? 300 : top;
				console.log(left,top);
				
				$('.glass .small .filter').css({
					left: left-100, //-100是为了让鼠标在滤镜的中心位置
					top: top-100
				})
				$('.glass .large .large-img').css({
					left: -2*(left-100),
					top: -2*(top-100)
				})
				
			});
			
			
		}
	}
	goods.init();
});
