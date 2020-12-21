<template>
	<view class="my_order_refund_progress">
		<view 
			:style="[{'padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px','background-color':topBackgroundColor,'color':color}]">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="title"> {{title}} </view>
			</view>
		</view>
		<view class="my_order_refund_progress_content" 
		 :style="[{height:height-menuBottom-10+'px'}]">
			 <view class="content_hint">
				<view class="empty-cart-image">
					<image src="../../static/images/cartBg.png" mode="widthFix"></image>
				</view>
				<view class="success"> 申请成功! </view>
				<view class="empty-cart-text"> 在线支付金额将在1-3个人工作日原路退回，喵豆/余额将直接退回账户中。 </view>
				<button class="i_know" type="default" @tap="my_order" > 我知道了 </button>
			 </view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				barName: 'back', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '/static/images/back2.png',
				title: '申请结果',
				requestUrl:'',
			}
		},
		onLoad: function(option) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
		},
		onBackPress:function(options){
			let that = this
			if (options.from === 'navigateBack') {  
			    return false;  
			} else{
				return false;  
			}
			that.my_order()
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
			// 判定运行平台
			let platform = getApp().platform || getApp().globalData.platform
			if (platform == 'Applets') {
				// 获取屏幕高度
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuLeft = menu.left
						that.menuBottom = menu.bottom
					}
				})
			} 
			else if (platform == 'APP'){
				that.menuTop = 50
				that.menuHeight = 30
				that.menuLeft = 278
				that.menuBottom = 80
			}
		},
		methods: {
			my_order:function(){
				uni.reLaunch({
					url: `/pages/my/my_order?type=4&info='no'`,
				})
			}
		}
	}
</script>

<style scoped>
	.back-title{
		text-align: center;
		font-size: 38rpx;
	}
	.my_order_refund_progress_content{
		background-color: #F0F0F0;
	}
	.content_hint{
		width: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 0 auto;
		padding-top: 180rpx;
	}
	.success{
		font-size: 32rpx;
		font-weight: bold;
		padding: 20rpx 0 40rpx;
	}
	.empty-cart-image image {
		width: 400rpx;
	}
	.empty-cart-text{
		font-size: 24rpx;
		padding-bottom: 40rpx;
	}
	.i_know{
		line-height: 60rpx;
		border-radius: 30rpx;
		width: 60%;
		background-image: linear-gradient(-45deg,  #fa3475 0%,  #ff6699 100%);
		color: #FFFFFF;
	}
	.i_know::after{
		border: none;
	}
</style>
