<template>
	<view class="allContent">
		<!-- 带购物车和搜索的导航条 -->
		<view class="content" v-if="barName ==='mianPage'" :style="[{backgroundColor:topBackgroundColor,paddingTop:barTopH+'rpx',paddingRight:rightDistance+'rpx'}]">
			<view class="tabBar" :style="[{paddingTop:barTopH+'rpx',paddingBottom:barTopH/2+'rpx'}]">
				<view class="leftImg">
					<image :src="BarImgs" mode=""></image>
				</view>
		
				<view class="cartAndMessage" :style="[{paddingRight:rightDistance+20+'rpx'}]">
					<view class="cart" @tap="cart">
						<view class="cartImg">
							<image src="../static/images/cart.png" mode=""></image>
						</view>
						<view class="cartNumber">
							{{carts}}
						</view>
					</view>
					<view class="message" @tap="message">
						<view class="messageImg">
							<image src="../static/images/message.png" mode=""></image>
						</view>
						<view class="messageNumber">
							{{messages}}
						</view>
					</view>
				</view>
		
			</view>
			<view class="search" :style="[{paddingBottom:barTopH/2+'rpx'}]">
				<view class="searchInput" @click="hideKeyboard">
					<view class="searchContent">
						<view class="searchIcon">
							<image src="../static/images/search.png" mode=""></image>
						</view>
						<view class="topSearch">
							{{topSearchContent}}
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 不带购物车的导航条 -->
		<view class="goodsBar" v-if="barName ==='particularsPage'" :style="[{paddingTop:barTopH*2+'rpx',paddingLeft:barTopH/2+'rpx',lineHeight:lineHeight*2-10+'rpx'}]">
			<view class="barContent" :style="[{paddingRight:rightDistance*2.5+'rpx'}]">
				<!-- 返回 -->
				<view class="return" @click="goBack">
					<image src="../static/images/return.png" mode=""></image>
				</view>
				<!-- 详情页 -->
				<view class="tabBarName"> 详情页 </view>
				<!-- 分享到微信 -->
				<view class="share">
					<image src="../static/images/wechat.png" mode=""></image>
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
				default: '../static/images/0.png'
			},
			barTopH: {
				type: Number,
				default: 26
			},
			rightDistance: {
				type: Number,
				default: 90
			},
			barName:{
				type: String,
				default: 'particularsPage'
			},//导航条的名称
			lineHeight:Number,//行高
			cartNumber: Number,//购物车
			messageNumber: Number,//消息
			topSearchContent: String,//搜索默认内容

		},
		data() {
			return {
				contentMarginTop: 0, //传给父组件的元素高度
				carts:'3',
				messages:'19'
			}
		},

		onReady() {
			let that = this;
			console.log(that.cartNumber, that.messageNumber)
			that.carts = that.cartNumber
			that.messages = that.messageNumber
			if (that.cartNumber > 9) {
				that.carts = '9+'
			}
			if (that.messageNumber > 9) {
				that.messages = '9+'
			}
			uni.getSystemInfo({
				success: function(res) { // res - 各种参数
					console.log(res)
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
			
			// 返回上一级
			goBack: function() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped>
	/* 主页面 */
	.content {
		padding-left: 20rpx;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		height: 200rpx;
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
	
	/* 详情页 */
	.goodsBar {
		background-image: linear-gradient(0deg,
			#2c2d31 0%,
			#101013 100%);
		color: #FFFFFF;
		padding-bottom: 30rpx;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}
	
	.barContent{
		display: flex;
		justify-content: space-between;
		text-align: center;
		font-size: 38rpx;
	}
	
	.return{
		width: 36rpx;
		height: 36rpx;
	}
	
	.return image{
		width: 36rpx;
		height: 36rpx;
		margin-top: 12rpx;
	}
	
	.tabBarName{
		margin-left: 200rpx;
	}
	
	.share{
		width: 50rpx;
		height: 50rpx;
		background-color: #4CD964;
		border-radius: 25rpx;
		margin-top: 5rpx;
	}
	.share image{
		width: 40rpx;
		height: 40rpx;
		margin-top: 5rpx;
	}
</style>
