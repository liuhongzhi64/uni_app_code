<template>
	<view class="my_order_detail"> 
		<view class="top-nav-message">
			<view class="my-top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px'}]">
				<view class="back-title" :style="[{'height':menuHeight+'px'}]">
					<view class="back">
						<image src="../../static/images/return.png" mode=""></image>
					</view>
					<view class="title" :style="[{'margin-right':menuWidth+'px'}]"> {{title}} </view>
				</view>
			</view>
			<view class="top-message" :style="[{'padding-top':menuBottom+20+'px'}]">
				<view class="user-message">
					<view class="user-images">
						<image src="../../static/images/23.png" mode=""></image>
					</view>
					<view class="user-useing-time-price">
						<view class="wait-pay">等待付款</view>
						<view class="residue-time">剩余支付时间：<text>0</text>天<text>0</text>时<text>3</text>分<text>59</text>秒</view>
						<view class="user-pay-price">
							在线支付￥<text>5000.00</text>，到院再付￥<text>38500.00</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="user-all-message">
			<view class="user-message-content">
				<view class="user-name-phone-default-address">
					<view class="user-name"> 张亮 </view>
					<view class="user-phone">188****4357</view>
					<view class="default-address">
						<view class="default">默认</view>
						<view class="default-address-content">家</view>
					</view>
				</view>
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
				height: 0,
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#fa3474',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '订单详情',
			}
		},
		onReady() {
			let that = this;
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					that.height = res.screenHeight
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
			
		}
	}
</script>

<style scoped>
	.my_order_detail{
		background-color: #F6F6F6;
	}
	.top-nav-message {
		background-image: linear-gradient(-49deg, #f24788 0%, #ff69a1 100%);
		overflow: hidden;
		height: auto;
		width: 100%;
		border-bottom-left-radius: 50rpx;
		border-bottom-right-radius: 50rpx;
	}

	.my-top-bar {
		color: #FFFFFF;
		background-image: linear-gradient(-49deg, #f24788 0%, #ff69a1 100%);
		text-align: center;
		font-size: 40rpx;
		position: fixed;
		z-index: 100;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
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

	.back-title .title {
		flex: 1;
		margin-left: 80rpx;
	}
	.top-message{
		padding-left: 50rpx;
		padding-bottom: 210rpx;
	}
	
	.user-message{
		display: flex;
		color: #FFFFFF;
		font-size: 24rpx;
	}
	.user-images,.user-images image{
		width: 108rpx;
		height: 108rpx;
		border-radius: 59rpx;
	}
	.user-images{
		margin-right: 30rpx;
	}
	.wait-pay{
		font-size: 40rpx;
		line-height: 32rpx;
	}
	.residue-time{
		opacity: 0.7;
		margin-top: 20rpx;
		margin-bottom: 30rpx;
	}
	
	.user-all-message{
		padding: 0  20rpx ;
		margin-top: -150rpx;
	}
	.user-message-content{
		background-color: #FFFFFF;
		border-radius: 24rpx;
		/* height: 192rpx; */
		padding: 34rpx 30rpx;
	}
	.user-name-phone-default-address{
		display: flex;
		align-items: center;
	}
	.user-name{
		font-size: 32rpx;
		color: #000000;
		margin-right: 50rpx;
	}
	.user-phone{
		font-size: 32rpx;
		color: #000000;
		margin-right: 32rpx;
	}
	.default-address{
		display: flex;
		text-align: center;
	}
	.default{
		width: 66rpx;
		height: 32rpx;
		line-height: 32rpx;
		font-size: 20rpx;
		color: #FFFFFF;
		background-image: linear-gradient(90deg,  #fa3475 0%,  #ff6699 100%);
		border-radius: 16rpx;	
		margin-right: 20rpx;
	}
	.default-address-content{
		width: 66rpx;
		height: 32rpx;
		line-height: 32rpx;
		font-size: 20rpx;
		color: #FFFFFF;
		background-image: linear-gradient(90deg,  #8834fa 0%,  #bc66ff 100%);
		border-radius: 16rpx;	
	}

</style>