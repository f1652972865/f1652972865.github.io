
var myLike={
	
	init:function(){
		
		this.moveTop();
		this.Switch();
	},
	moveTop:function(){
		var words = $(' .myLike-top .warp i');
		words.each(function(k,v){
			setTimeout(function(){
				setInterval(function(){
					$(v).animate({
						top: -8,
						fontSize:16
					},500,function(){
						$(this).css({
							top: 0,
							fontSize:12
						});
						//console.log($(this))
					});
				},2000);
			},50*k);
			
		});
	},
	/*左右点击按钮切换*/
	Switch:function(){
		/*右点击*/
		var guessRight=$('.myLike-main .guess .hit-r');
		var guessLeft=$('.myLike-main .guess .hit-l');
		
		var guessItem=$('.myLike-main .guess .guess-item');
		var guessUl=$('.myLike-main .guess .guess-item ul');
		var guessUlWidth=$('.myLike-main .guess .guess-item ul').width();
		var guessItemWidth=$('.myLike-main .guess .guess-item').width();
		/*count显示*/
		var count=$('.myLike-main .guess .guess-btn .count');
		count.html( parseInt( guessItemWidth / guessUlWidth ) );
		
		var litm=$('.myLike-main .guess .guess-btn .litm')
		
		var Gindex=0;
		guessRight.click(function(){
			Gindex++;
			guessItem.css({
				'margin-left':-1*guessUlWidth*Gindex
			});
			litm.html( Gindex + 1 );
			
			/*if(this.litm>this.count){
				this.guessItem.css({
					'margin-left':0
				});
				
			}*/
		});
		/*左点击*/
		guessLeft.click(function(){
			Gindex--;
			guessItem.css({
				'margin-left':-1*guessUlWidth*Gindex
			});
			litm.html( Gindex + 1 );
			
		});
	}
}
myLike.init();
