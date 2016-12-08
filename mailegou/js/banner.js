$(function(){
	var banner={
		
		banner:$('.banner'),
		bannerArticle:$('.banner-article'),
		banContainer:$('.ban-container'),
		imgItem:$('.img-item'),
		index:0,
		
		init:function(){
			this.imgSwitch();			
		},
		
		imgSwitch:function(){
			var width = this.bannerArticle.width();
			var that=this;
			setInterval(function(){
				that.index++;
				if(that.index >= that.imgItem.length){
					that.index=0
					that.banContainer.css({
						marginLeft: 0
					})
				};
				that.banContainer.animate({
					marginLeft: -width*that.index
				});
				
			},2000)
			
			
		},
		
	};
	banner.init();
	
});


