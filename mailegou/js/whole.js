$(function(){
	var whole={
		lis:$('.time-title ul li'),
		uls:$('.time-content .ul'),
		ul:$('.time-content .absolute'),
		prev:$('.bt .prev'),
		befor:$('.next'),
		next:0,
		articleWidth:$('.article').width(),
		absoluteWidth:$('.absolute').width(),
		litm:$('.litm'),
		count:$('.count'),
		
		init:function(){
			this.count.html( parseInt( (this.absoluteWidth)/(this.articleWidth) ) );
			this.liClick();
			this.prevClick();
			this.beforClick()
		},
		//点击选项卡  让对应的显示
		liClick:function(){
			var that=this;
			this.lis.click(function(){
				//alert($(this).index())
				$(this).find('.arrow-down').show();
				$(this).siblings().find('.arrow-down').hide()
				$(this).addClass('active').siblings().removeClass('active');
				that.uls.eq( $(this).index() ).show();
				that.uls.eq( $(this).index() ).siblings().hide();
				
			});
		},
		
		prevClick:function(){
			var that =this ;
			this.prev.click(function(){
				that.next++;
				that.litm.html( (that.next)+1 );
				that.ul.css({
					marginLeft:-1*that.articleWidth*that.next
				});
				if(that.litm.html()>that.count.html()){
					that.litm.html( 1 );
					that.ul.css({
						marginLeft:0
					});
					that.next=0;
					that.litm.html( (that.next)+1 );
					that.ul.css({
						marginLeft:-1*that.articleWidth*that.next
					});
					
				}
			});
			
		},
		beforClick:function(){
			var that =this ;
			this.befor.click(function(){
				that.next--;
				that.litm.html( (that.next)+1 );
				that.ul.css({
					marginLeft:-1*that.articleWidth*that.next
				});
				if(that.litm.html()<1){
					that.litm.html( that.count.html() )
					that.ul.css({
						marginLeft:-3570
					});
					that.next=4;
					that.litm.html( (that.next) );
					that.ul.css({
						marginLeft:-1*that.articleWidth*(that.next-1)
					});
				}
			});
		},
	};
	whole.init();
})
