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
			//对应的图片显示
			var imgs=$('.preview .glass .small .img');
			//移动到小图片
			/*$('.preview .spec .spec-list ul li img').hover(function(){
				$(this).addClass('color')
				
			},function(){
				$(this).removeClass('color')
			});*/
			$('.preview .spec .spec-list ul li img').mouseenter(function(){
				$(this).addClass('color');
			});
			$('.preview .spec .spec-list ul li img').mouseleave(function(){
				$(this).removeClass('color')
			})
		}
	}
	goods.init();
});
