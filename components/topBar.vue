<template>
	<view class="allContent">
		<!-- 带购物车和搜索的导航条 -->
		<view class="content" v-if="barName ==='mianPage'" :style="[{'backgroundColor':topBackgroundColor,'padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px'}]">
			<view class="tabBar" :style="[{'padding-right':menuWidth+10+'px','padding-left':10+'px','height':menuHeight+'px'}]">
				<view class="leftImg">
					<image :src="BarImgs" mode=""></image>
				</view>
		
				<view class="cartAndMessage">
					<view class="cart" :data-cartNumber='cartNumber' @tap="cart" >
						<view class="cartImg">
							<image src="../static/images/cart.png" mode=""></image>
						</view>
						<view class="cartNumber">{{cartNumber}} </view>
					</view>
					<view class="message" @tap="message">
						<view class="messageImg">
							<image src="../static/images/message.png" mode=""></image>
						</view>
						<view class="messageNumber"> {{messageNumber}} </view>
					</view>
				</view>
		
			</view>
			<view class="search" :style="[{'padding-top':10+'px'}]">
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
		<view class="goodsBar" v-if="barName ==='particularsPage'" :style="[{'height':menuHeight+'px','background-color':topBackgroundColor,'padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px','color':color,}]">
			<view class="barContent" :style="[{'padding-left':20+'px'}]">
				<!-- 返回 -->
				<view class="return" @click="goBack" >
					<image :src="backImage" mode=""></image>
				</view>
				<!-- 详情页 -->
				<view class="tabBarName" :style="[{'margin-left':menuWidth+'px'}]"> {{title}} </view>

				<view class="share" :class="{show:barImage=='../static/images/wechat.png'}" :style="[{'margin-right':menuWidth+20+'px'}]">
					<image :src="barImage" mode=""></image>
				</view>
			</view>
		</view>
		
		<!-- 带返回导航条 -->
		<view class="top-bar" v-if="barName ==='back'" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px','background-color':topBackgroundColor,'color':color,}]">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back" @click="goBack" >
					<image :src="backImage" mode=""></image>
				</view>
				<view class="title" > {{title}} </view>
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
			color:{
				type: String,
				default: '#111111'
			},
			backImage:{
				type: String,
				default: '../static/images/return.png'
			},
			BarImgs: {
				type: String,
				default: '../static/images/0.png'
			},
			barImage:String,
			barName:{
				type: String,
				default: 'particularsPage'
			},//导航条的名称
			title:String,//标题名称
			menuHeight:Number,//高
			menuTop:Number,//高
			menuWidth:Number,//宽
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
			that.carts = that.cartNumber
			that.messages = that.messageNumber
			if (that.cartNumber > 9) {
				that.carts = '9+'
			}
			if (that.messageNumber > 9) {
				that.messages = '9+'
			}
			// uni.getSystemInfo({
			// 	success: function(res) { // res - 各种参数
			// 		console.log(res)
			// 	}
			// });
		},
		onLoad() {

		},
		methods: {
			// 购物车
			cart: function(event) {
				let cartNumber = event.currentTarget.dataset.cartnumber || event.currentTarget.dataset.cartNumber
				
				uni.navigateTo({
					url: `/pages/cart/cart?cartNumber=${cartNumber}`,
				})
			},

			// 消息
			message: function(event) {
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
				// console.log('back')
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
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
	}
	
	.tabBar {
		display: flex;
		justify-content: space-between;
	}
	
	.leftImg {
		width: 40%;
		display: flex;
		align-items: center;
	}
	
	.leftImg image {
		width: 100%;
		height: 50rpx;
		border-radius: 25rpx;
	}
	
	.cartAndMessage {
		display: flex;
		width: 30%;
		justify-content: space-between;
		align-items: center;
	}
	.cartImg ,.messageImg{
		display: flex;
		align-items: center;
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
		padding: 0 20rpx;
	}
	
	.searchContent {
		background-color: #F2F2F2;
		height: 64rpx;
		border-radius: 32rpx;
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
		/* background-image: linear-gradient(0deg, #2c2d31 0%, #101013 100%); */
		color: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
	}
	
	.barContent{
		display: flex;
		justify-content: space-between;
		text-align: center;
		align-items: center;
		font-size: 38rpx;
	}
	
	.return{
		width: 36rpx;
		height: 36rpx;
	}
	
	.return image{
		width: 36rpx;
		height: 36rpx;
		margin-bottom: 8rpx;
	}
	.show{
		background-color: #4CD964;
	}
	
	.share{
		width: 50rpx;
		height: 50rpx;
		border-radius: 25rpx;
	}
	.share image{
		width: 50rpx;
		height: 50rpx;
	}
	
	/* 带返回导航 */
	.top-bar {		
		text-align: center;
		font-size: 40rpx;
		position: fixed;
		z-index: 100;
		width: 100%;
		top: 0;
		left: 0;
	}
	
	.back-title {
		font-size: 38rpx;
		position: relative;
		text-align: center;
	}
	
	.back {
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		width: 60rpx;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.back image {
		width: 36rpx;
		height: 36rpx;
	}
	
	.back-title .title {
		flex: 1;
		/* margin-left: 80rpx; */
		font-size: 37rpx;
	}
	
	
</style>
