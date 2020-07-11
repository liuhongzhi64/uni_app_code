<template>
	<view class="content" :style="[{backgroundColor:topBackgroundColor,paddingTop:barTopH+'rpx',paddingRight:rightDistance+'rpx'}]">
		<view class="tabBar" :style="[{paddingTop:barTopH+'rpx',paddingBottom:barTopH+'rpx'}]">
			<view class="leftImg">
				<image :src="BarImgs" mode=""></image>
			</view>

			<view class="cartAndMessage" :style="[{paddingRight:rightDistance+20+'rpx'}]">
				<view class="cart" @tap="cart">
					<view class="cartImg">
						<image src="../static/img/cart.png" mode=""></image>
					</view>
					<view class="cartNumber">
						{{cartNumber}}
					</view>
				</view>
				<view class="message" @tap="message">
					<view class="messageImg">
						<image src="../static/img/message.png" mode=""></image>
					</view>
					<view class="messageNumber">
						{{messageNumber}}
					</view>
				</view>
			</view>

		</view>
		<view class="search">
			<view class="searchInput" @click="hideKeyboard">
				<view class="searchContent">
					<view class="searchIcon">
						<image src="../static/img/search.png" mode=""></image>
					</view>
					<view class="topSearch">
						{{topSearchContent}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			topBackgroundColor: {
				type: String,
				default: '#5D060E'
			},
			BarImgs: {
				type: String,
				default: '../static/img/0.png'
			},
			barTopH: {
				type: Number,
				default: 26
			},
			rightDistance: {
				type: Number,
				default: 90
			},
			cartNumber: Number,
			messageNumber: Number,
			topSearchContent: String,
			
		},
		data() {
			return {
				contentMarginTop:0,//传给父组件的元素高度
			}
		},
		onReady() {
			let that = this;
			uni.getSystemInfo({
				success: function(res) { // res - 各种参数
					console.log(res,11111); 
					let info = uni.createSelectorQuery().select(".content");
					info.boundingClientRect(function(data) { //data - 各种参数
						console.log(data) // 获取元素宽度
						that.contentMarginTop = data.bottom+data.top
						that.getmarginTop()					
					}).exec()
				}
			});
		},
		onLoad() {

		},
		methods: {
			// 购物车
			cart: function() {
				uni.navigateTo({
					url: '/pages/cart/cart',
				})
			},

			// 消息
			message: function() {
				uni.navigateTo({
					url: '/pages/message/message',
				})
			},
			// 搜索框
			hideKeyboard: function(event) {
				let that = this
				let search = that.topSearchContent
				uni.navigateTo({
					url: `/pages/search/search?search=${search}`,
				})
			},
			// 向组件发送高度
			getmarginTop:function(){
				console.log(this.contentMarginTop)
				this.$emit('marginTop',this.contentMarginTop)
			}
		}
	}
</script>

<style>
	.content {
		height: 200rpx;
		padding-bottom: 20rpx;
		padding-left: 20rpx;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
	}

	.tabBar {
		display: flex;
		justify-content: space-between;
		padding-right: 20rpx;
	}

	.leftImg {
		width: 40%;
		padding-top: 5rpx;
	}

	.leftImg image {
		width: 100%;
		height: 50rpx;
		border-radius: 25rpx;
	}

	.cartAndMessage {
		display: flex;
		width: 35%;
		justify-content: space-between;
		padding-top: 10rpx;
	}

	.cartImg image,
	.messageImg image {
		width: 38rpx;
		height: 38rpx;
	}

	.cart,
	.message {
		display: flex;
		width: 50%;
		justify-content: end;
	}

	.cartNumber,
	.messageNumber {
		width: 24rpx;
		height: 24rpx;
		border-radius: 12rpx;
		color: #FFFFFF;
		background-color: #F12F6F;
		font-size: 16rpx;
		line-height: 24rpx;
		text-align: center;
		margin-left: -10rpx;
		margin-top: -10rpx;
	}

	.searchInput {
		width: 95%;
		background-color: #F2F2F2;
		height: 64rpx;
		border-radius: 32rpx;
	}

	.searchContent {
		display: flex;
	}

	.searchIcon image {
		width: 64rpx;
		height: 64rpx;
		margin-right: 10rpx;
		margin-left: 10rpx;
	}

	.topSearch {
		width: 80%;
		font-family: MicrosoftYaHei;
		font-size: 24rpx;
		overflow: hidden; //超出一行文字自动隐藏		 
		text-overflow: ellipsis; //文字隐藏后添加省略号		 
		white-space: nowrap; //强制不换行
		line-height: 64rpx;
		color: #999999;
	}
</style>
