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
		
		<view class="account-number-content" :style="[{'height':height-menuHeight-menuTop-10+'px'}]" >
			<view class="set-login-account-number">
				<view class="set-login-account">
					<view class="set-login"> 换登录账号 </view>
					<view class="user-name-phone">
						<view class="user-name"> 张居正 </view>
						<view class="user-phone"> 18900004897  > </view>
					</view>
				</view>
				
			</view>
			
			<view class="set-bound-phone">
				<view class="relieve-phone"> 改绑手机号 </view>
				<view class="at-present-phone"> 改绑当前手机号 > </view>
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
				
			}
		},
		onReady() {
			let that = this;
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					that.height = res.windowHeight
					console.log(res)
					let menu = uni.getMenuButtonBoundingClientRect();
					that.menuWidth = menu.width
					that.menuTop = menu.top
					that.menuHeight = menu.height
					that.menuLeft = menu.left
					that.menuBottom = menu.bottom
					that.menuPaddingRight = res.windowWidth - menu.right
				}
			})
		},
		methods: {
			goBack: function() {
				console.log('back')
				uni.navigateBack({
					delta: 1
				});
			},
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
	
	.account-number-content{
		display: flex;
		flex-direction: column;
		background-color: #F6F6F6;
	}
	.set-login-account-number{
		padding-left: 30rpx;
		height: 90rpx;
		line-height: 90rpx;
		font-size: 26rpx;
		background-color: #FFFFFF;
	}
	.set-bound-phone{
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
	.user-name-phone{
		display: flex;
		padding-right: 30rpx;
	}
	.set-login-account{
		display: flex;
		justify-content: space-between;
		border-bottom: 2rpx solid #e5e5e5;
	}
	.at-present-phone{
		padding-right: 30rpx;
	}
	
	
</style>
