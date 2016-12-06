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
			this.toUp();
			this.MLeft();
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
		toUp:function(){
			
		},
		//二级菜单
		MLeft:function(){
			$('.menu-box li').hover(function(){
				$(this).children('.li-box').stop().animate({
					marginLeft:30
				},300);
				$('.menu-wrapper').show().siblings().hide()
			},function(){
				$(this).children('.li-box').stop().animate({
					marginLeft:0
				},300);
			})
		},
	};
	index.init();
});