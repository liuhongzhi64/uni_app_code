<template>
	<view class="account-number">
		<view class="top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px'}]">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back" @tap='goBack'>
					<image src="../../static/images/return.png" mode=""></image>
				</view>
				<view class="title" :style="[{'padding-right':80+'rpx'}]">
					<view class="title-name"> 账号管理 </view>
				</view>
			</view>
		</view>

		<view class="account-number-content" :style="[{'height':height-menuHeight-menuTop-10+'px'}]">
			<view class="set-login-account-number" @tap="logout">
				<view class="set-login-account">
					<view class="set-login"> 换登录账号 </view>
					<view class="user-name-phone">
						<view class="user-name"> {{ user_info.real_name || user_info.nick_name }} </view>
						<view class="user-phone"> {{ user_info.tel }} > </view>
					</view>
				</view>
			</view>
			<view class="set-bound-phone" @tap="set_new_tel">
				<view class="relieve-phone"> 改绑手机号 </view>
				<view class="at-present-phone" > 改绑当前手机号 > </view>
			</view>

			<view class="log-out">
				<button type="default" class="log-out-btn" :disabled='is_disabled'  @tap="logout">退出登录</button>
			</view>
		</view>

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
				menuPaddingRight: 0,
				height: 0,
				is_disabled:false,
				user_info:{},
			}
		},
		onLoad(options) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.user_info = uni.getStorageSync("userInfo") 
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
			let platform = getApp().platform || getApp().globalData.platform
			if (platform == 'Applets') {
				uni.getSystemInfo({
					success: function(res) {
						that.height = res.screenHeight
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuWidth = menu.width
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuLeft = menu.left
						that.menuBottom = menu.bottom
					}
				})
			} 
			else if (platform == 'APP'){
				that.menuWidth = 90
				that.menuTop = 20
				that.menuHeight = 30
				that.menuLeft = 278
				that.menuBottom = 50
			}
		},
		methods: {
			goBack: function() {
				uni.navigateBack({
					delta: 1
				});
			},
			logout: function() {
				let that = this
				that.is_disabled = true
				setTimeout(() => {
					uni.navigateTo({
						url: `/pages/login/login_phone`,
					})
					that.is_disabled = false
				}, 1000)
				
			},
			set_new_tel:function(){
				let that = this
				uni.showToast({
					title:'正在开发中...',
					icon:'none'
				})
			}
		}
	}
</script>

<style scoped>
	.top-bar {
		color: #FFFFFF;
		background-image: linear-gradient(-49deg, #000000 0%, #111111 100%);
		text-align: center;
		font-size: 40rpx;
		width: 100%;
	}

	.back-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 38rpx;
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

	.account-number-content {
		display: flex;
		flex-direction: column;
		background-color: #F6F6F6;
	}

	.set-login-account-number {
		padding-left: 30rpx;
		height: 90rpx;
		line-height: 90rpx;
		font-size: 26rpx;
		background-color: #FFFFFF;
	}

	.set-bound-phone {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
		padding-left: 30rpx;
		height: 90rpx;
		line-height: 90rpx;
		font-size: 26rpx;
		margin-top: 2rpx;
	}

	.user-name-phone {
		display: flex;
		justify-content: space-between;
		padding-right: 30rpx;
		width: 270rpx;
		font-weight: lighter;
	}

	.set-login-account {
		display: flex;
		justify-content: space-between;
		border-bottom: 2rpx solid #e5e5e5;
	}

	.at-present-phone {
		padding-right: 30rpx;
		font-weight: lighter;
	}

	.log-out {
		padding: 54rpx 20rpx 0;

	}

	.log-out-btn {
		height: 80rpx;
		line-height: 80rpx;
		background-image: linear-gradient(0deg, #fa3475 0%, #ff6699 100%);
		border-radius: 40rpx;
		border: none;
		font-size: 28rpx;
		color: #ffffff;
	}
	.log-out-btn::after{
		border: none;
	}
	
	
</style>
