$(function(){
	
	
	/*$('.whole').load('whole.html',function(){
		$.getScript('js/whole.js')
	});
	
	$('.half-price').load('half-price.html',function(){
		$.getScript('js/half-price.js')
	});
	
	$('.dailySale').load('dailySale.html',function(){
		$.getScript('js/dailySale.js')
	});
	
	$('.myLike').load('myLike.html',function(){
		$.getScript('js/myLike.js')
	});*/
	
	
	
	var index={
		
		//方法
		init:function(){
			$('.banner').load('banner.html',function(){
				$.getScript('js/banner.js')
			});
			
			
			$('.whole').load('whole.html',function(){
				$.getScript('js/whole.js')
			});
			
			$('.half-price').load('half-price.html',function(){
				$.getScript('js/half-price.js')
			});
			
			$('.dailySale').load('dailySale.html',function(){
				$.getScript('js/dailySale.js')
			});
			
			$('.myLike').load('myLike.html',function(){
				$.getScript('js/myLike.js')
			});
			
			$('.floor-wrapper').load('floor-wrapper.html',function(){
				$.getScript('js/floor-wrapper.js')
			});
			
			
			$('.recommend').load('recommend.html');
			$('.footer').load('footer.html');
			
			
			this.hover();
			this.listItem();
			this.Show();
			this.reveal();
			this.BackTop();
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
		
		reveal:function(){
			$('.sidebar-main-b li').hover(function(){
				$(this).find('div').stop(true).animate({
					left:-80
				},500)
			},function(){
				$(this).find('div').stop(true).animate({
					left:35
				},500)
			})
		},
		BackTop:function(){
			$('.sidebar-main-b li .back').click(function(){
				//回到顶部
				$('html,body').animate({
					scrollTop:0
				},300);
			});
		}
		
		
		
		
		
	};
	index.init();
});