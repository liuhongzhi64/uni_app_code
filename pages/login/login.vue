<template>
	<view class="all-login">
		<!-- 这是手机号登录 -->
		<view class="login" :style="[{'height':height+'px'}]" v-if="isPhoneLogin">
			<view class="login-top" :style="[{'padding-top':menuTop+'px','line-height':menuHeight+'px'}]">
				<view class="back-title" :style="[{'height':menuHeight+'px'}]">
					<view class="back" @tap='goBack'>
						<image src="../../static/images/return.png" mode=""></image>
					</view>
					<view class="title">
						<view class="title-name" :style="[{'padding-right':80+'rpx'}]"> 手机号登录 </view>
					</view>
				</view>

				<view class="advertising">
					20万女性的不悔选择
				</view>
			</view>

			<view class="login-input">
				<view class="login-message">
					<view class="phone">
						<input class="phone-input" type="number" @input="phoneInput" placeholder="请输入手机号" maxlength="11" />
					</view>
					<view class="phone-hint"> *请输入手机号 / 请输入正确的手机号 </view>

					<view class="graphic-code">
						<input class="phone-input" @input="graphicInput" placeholder="请输入图形码" maxlength="4" />
						<button class="graphic" type="default" plain="true">{{graphicCode}} </button>
					</view>

					<view class="verification-code">
						<input class="phone-input" @input="verificationInput" placeholder="请输入验证码" maxlength="4" />
						<button class="verification" type="default" plain="true">发送请求</button>
					</view>

					<button class="go-login" type="default" plain="true">登录</button>
				</view>

				<view class="no-have-code-content">
					<text class="no-have-code">收不到验证码？</text>
				</view>
			</view>
	
		</view>
		<!-- 微信登录 -->
		<view class="weichat-login" :style="[{'height':height+'px'}]" v-if="!isPhoneLogin">
			<view class="login-top" :style="[{'padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':20+'px'}]">
				<view class="back-title" :style="[{'height':menuHeight+'px'}]">
					<view class="back" @tap='goBack'>
						<image src="../../static/images/back1.png" mode=""></image>
					</view>
					<view class="title">
						<view class="title-name" :style="[{'padding-right':80+'rpx'}]"> 欢迎登录 </view>
					</view>
				</view>
			</view>
			
			<view class="advertising-images">
				<image src="../../static/images/19.png" mode=""></image>
			</view>
			
			<view class="go-weichat-login-btn">
				<button class="go-weichat-login" type="default" plain="true">微信用户一键登录</button>
			</view>
			
			<view class="phone-login-and-register" @tap='goToPhoneLogin'> 手机号码登录/注册 </view>
		</view>
		
		<view class="agreement"> 登录代表您同意<text>华美整呗用户服务协议</text></view>
	</view>
	

</template>

<script>
	export default {
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				phone: 0,
				graphicCode: 'D2e6', //图形 码的内容
				isPhoneLogin:false,//是否是手机登录
			}
		},
		onReady() {
			let that = this;
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					that.height = res.screenHeight
					// console.log(res)
					let menu = uni.getMenuButtonBoundingClientRect();
					that.menuWidth = menu.width
					that.menuTop = menu.top
					that.menuHeight = menu.height
					that.menuLeft = menu.left
					that.menuBottom = menu.bottom
				}
			})
		},
		methods: {
			// 返回
			goBack: function() {
				// console.log('back', 1111)
				this.isPhoneLogin = !this.isPhoneLogin
				uni.navigateBack({
					delta: 1
				});
			},
			phoneInput: function(event) {
				this.phone = event.target.value
				console.log(this.phone)
			},
			goToPhoneLogin:function(){
				this.isPhoneLogin = true
			}
		}
	}
</script>

<style scoped>
	.login ,.weichat-login{
		display: flex;
		flex-direction: column;
		background-color: #F6F6F6;
	}

	.login .login-top {
		color: #FFFFFF;
		background-image: linear-gradient(90deg, #ff6699 0%, #fa3475 100%);
		text-align: center;
		font-size: 40rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-bottom: 100rpx;
	}
	.weichat-login .login-top{
		text-align: center;
	}

	.back-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 38rpx;
		width: 100%;
	}

	.back {
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		width: 60rpx;
		height: 100%;
	}

	.back image {
		width: 36rpx;
		height: 36rpx;
	}

	.title-compile {
		display: flex;
		flex: 1;
		align-items: center;
		font-size: 38rpx;
	}


	.title-compile .compile {
		font-size: 24rpx;
	}

	.title {
		flex: 1;
	}

	.advertising {
		width: 509rpx;
		height: 212rpx;
		box-shadow: 3rpx 4rpx 0rpx 0rpx gba(101, 101, 101, 0.25);
		text-align: center;
		line-height: 212rpx;

	}

	.login-input {
		padding: 0 45rpx 100rpx;
	}

	.login-message {
		background-color: #FFFFFF;
		padding: 72rpx 45rpx;
		margin-top: -20rpx;
		border-radius: 24rpx;
		box-shadow: 0rpx 0rpx 32rpx 0rpx rgba(101, 101, 101, 0.16);
	}

	.phone {
		border-bottom: 2rpx solid #e0e0e0;
		padding: 20rpx 0;
	}

	.phone input {
		padding-left: 10rpx;
	}

	.phone-hint {
		font-size: 20rpx;
		line-height: 34rpx;
		color: #de0a0a;
		padding: 15rpx 8rpx;
	}

	.graphic-code,
	.verification-code {
		display: flex;
		justify-content: space-between;
		align-items: center;

	}

	.graphic-code input,
	.verification-code input {
		margin-right: 30rpx;
		padding-bottom: 15rpx;
		border-bottom: 2rpx solid #e0e0e0;
	}

	.graphic {
		width: 200rpx;
		height: 70rpx;
		line-height: 70rpx;
		background-color: #EEEEEE;
		text-align: center;
		border: 0;
	}

	.verification-code {
		margin-top: 40rpx;
	}

	.verification {
		width: 200rpx;
		height: 70rpx;
		border-radius: 35rpx;
		line-height: 70rpx;
		font-size: 24rpx;
		color: #fa3475;
		border: solid 2rpx #fa3475;
		text-align: center;
	}

	.go-login {
		height: 80rpx;
		line-height: 80rpx;
		margin-top: 70rpx;
		text-align: center;
		background-image: linear-gradient(0deg, #fa3475 0%, #ff6699 100%);
		border-radius: 40rpx;
		font-size: 28rpx;
		color: #ffffff;
		border: 0;
	}

	.no-have-code-content {
		display: flex;
		flex-direction: row-reverse;
		margin-top: 40rpx;
		padding-right: 35rpx;
	}

	.no-have-code {
		font-size: 24rpx;
		color: #fa3475;
	}

	.agreement {
		position: fixed;
		width: 100%;
		text-align: center;
		bottom: 44rpx;
		font-size: 24rpx;
	}

	.agreement text {
		color: #fa3475;
	}
	
	.advertising-images{
		padding-top: 233rpx;
		padding-bottom: 264rpx;
		/* background-color: #FFFFFF; */
		display: flex;
		justify-content: center;
	}
	
	.advertising-images image{
		width: 168rpx;
		height: 168rpx;
		box-shadow: 0rpx 0rpx 9rpx 0rpx  rgba(108, 108, 108, 0.26);	
		-webkit-box-reflect: below 0px -webkit-linear-gradient(bottom, rgba(255,255,255,0.3) 0%, transparent 40%, transparent 100%);
	}
	
	.go-weichat-login-btn{
		padding: 0 30rpx 44rpx;
	}
	.go-weichat-login{
		width: 690rpx;
		height: 88rpx;
		line-height: 88rpx;
		background-color: #09bb07;
		border-radius: 44rpx;
		border: solid 1rpx #029400;
		color: #ffffff;
		font-size: 32rpx;
	}
	.phone-login-and-register{
		font-size: 24rpx;
		text-align: center;
	}
	
	
</style>
