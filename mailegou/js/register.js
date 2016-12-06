$(function(){
	var register={
		
		//用户手机号
		user : /^1[358]\d{9}$/,
		//密码长度
		PswLength : /^.{6,20}$/,
		//低
		regPswLow : /^\d{6,20}$/,
		//中
		regPswMid : /[a-zA-Z]/,
		//高
		regPswHigh : /[!@#\$%\^&\*\+\-]/,
		
		pswStatus: false,
		
		init:function(){
			
			this.inputFocusMethod();
			
			this.Register();
			
		},
		
		inputFocusMethod:function(){
			
			//手机号获焦 失焦
			var that=this;
			$('.username').focus(function(){
				$(this).val();
				
			});
			$('.username').blur(function(){
				
				if( !that.user.test($(this).val()) ){
					$('.p1').html('您输入的手机号码格式错误，请重新输入!').addClass('colorF');
					return;
				}else{
					$('.p1').html('<img src="img/jiazai.png"/>');
					setTimeout(function(){
						$('.p1').html('该手机号码可以使用').addClass('colorT');
						$('.p1').removeClass('colorF');
					},3000);
				}
				
			});
			
			//密码 获焦 失焦
			$('.password').on({
				//实时监控事件
				input:function(){
					
					//每次都假定用户输入的不合法
					that.pswStatus = false;
					
					if( !that.PswLength.test( $(this).val()) ){
						$('.p2').html('密码长度必须在6-20之间').addClass('colorF')
						.removeClass('colorM colorL colorT');
						return;
					}
					//验证通过改变pswStatus状态
					that.pswStatus = true;
					//密码低
					if( that.regPswLow.test( $(this).val()) ){
						$('.p2').html('密码太过简单').addClass('colorL')
						.removeClass('colorM colorF colorT');
						return;
					}
					//密码高
					if( that.regPswHigh.test( $(this).val()) ){
						$('.p2').html('密码强度高').addClass('colorT')
						.removeClass('colorM colorF colorL');
						return;
					}
					//密码一般
					if( that.regPswMid.test( $(this).val()) ){
						$('.p2').html('密码一般般吧').addClass('colorM')
						.removeClass('colorL colorT colorF');
						return;
					}
					
				},
				//失焦事件
				blur: function(){
					if( !that.PswLength.test( $(this).val()) ){
						$('.p2').html('密码长度必须在6-20之间').addClass('colorF');
						return;
					}
					//如果合法清空   不合法保留
					if(that.pswStatus){
						$('.p2').empty();
					}
				}
			});
			//确认密码
			$('.password-check').on({
				input:function(){
					if( $(this).val() != $('.password').val() ){
						$('.p3').html('两次密码不相同！').addClass('colorF');
						return;
					}
					if( $(this).val() == $('.password').val() ){
						$('.p3').empty();
					}
				},
				/*blur:function(){
					$('.p3').empty();
				}*/
			});
			//点击切换数字
			$('.change').click(function(){
				var vertifyStr = '';
				for(var i=0; i<4; i++){
					vertifyStr += parseInt(Math.random()*10);
				}
				$('.num').html( vertifyStr );
			});
			
			$('.security').blur(function(){
				if( $(this).val() != $('.num').html() ){
					$('.p4').html('验证码错误！').addClass('colorF');
				}else{
					$('.p4').empty();
				}
			});
			//随机短信验证码
			$('.checkout').click(function(){
				$('.box').animate({
					marginTop:270
				},3000);
				var Str = '';
				for(var i=0; i<4; i++){
					Str += parseInt(Math.random()*10);
				};
				$('.box p').html( Str );
			});
			//点击确定 box消失
			$('.box h3').click(function(){
				$('.box').hide();
			});
			
			//判断短信验证码输入是否相同
			$('.note-vertify').blur(function(){
				if( $(this).val() != $('.box p').html() ){
					$('.p5').html('短信验证码错误！').addClass('colorF');
				}else{
					$('.p5').empty();
				}
			});
			
			
			
		},
		//点击立即注册
		Register:function(){
			$('.btn').click(function(){
				if(
				   	$('.username').val()==''
					&&$('.password').val()==''
					&&$('.password-check').val()==''
					&&$('.security').val()==''
					&&$('.checkout').val()==''
					&&$('.note-vertify').val()==''
				){
					alert('验证未通过')
					
				}else{
					alert('验证通过')
					console.log($('.checkout').val())
				}
			})
		}
	};
	register.init();
});
