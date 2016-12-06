$(function(){
	var halfPrice={
		haifLi:$('.half-price-main ul li'),
		init:function(){
			this.moveT();
			this.moveTop();
		},
		moveT:function(){
			this.haifLi.hover(function(){
				$(this).stop(true).animate({
					top:-10
				})
				$(this).find('.Info').stop(true).animate({
					bottom:0
				})
				$(this).addClass('box')
			},function(){
				$(this).stop(true).animate({
					top:0
				})
				$(this).find('.Info').stop(true).animate({
					bottom:-60
				})
				$(this).removeClass('box')
			})
		},
		moveTop:function(){
			var words = $('.half-price-top .word i');
			words.each(function(k,v){
				setTimeout(function(){
					setInterval(function(){
						$(v).animate({
							top: -8
						},500,function(){
							$(this).css({
								top: 0
							});
							//console.log($(this))
						});
					},2000);
				},100*k);
				
			});
		},
	};
	halfPrice.init();
});
