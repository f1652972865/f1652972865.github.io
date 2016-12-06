(function(){
	var tab = {
		init: function(){
			//初始化属性
			this.navWrapper = $('.cg-content');
			this.navItem = $('.nav-item')
			this.dropWrapper = $('.cg-con-drop');
			this.dropItem = $('.drop-item');
			//添加事件
			this.navWrapperHover();
			this.navHover();
		},
		navWrapperHover: function(){
			var that = this;
			//鼠标移到cg-con-nav的盒子里面，三级菜单显示
			this.navWrapper.mouseleave(function(){
				that.dropWrapper.hide();
				that.navItem.removeClass('hover');
			});
		},
		navHover: function(){
			var that = this;
			this.navItem.mouseenter(function(){
				that.dropWrapper.show();
				var index = $(this).index();
				$(this).addClass('hover').siblings().removeClass('hover');
				that.dropItem.eq(index).show().siblings().hide();
			});
			
		}
	};
	tab.init();

})();