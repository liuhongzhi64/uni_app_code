<template>
	<view class="allContent">

		<!-- 不带购物车的导航条 -->
		<view class="goodsBar" v-if="barName ==='particularsPage'"
		 :style="[{'height':menuHeight+'px','background-color':topBackgroundColor,'padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px','color':color,}]">
			<view class="barContent" :style="[{'padding-left':20+'px'}]">
				<!-- 返回 -->
				<view class="return" @click="goBack">
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
				<view class="back" @click="goBack">
					<image :src="backImage" mode=""></image>
				</view>
				<view class="title"> {{title}} </view>
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
			color: {
				type: String,
				default: '#111111'
			},
			backImage: {
				type: String,
				default: '/static/images/return.png'
			},
			barImage: String,
			barName: {
				type: String,
				default: 'back'
			}, //导航条的名称
			title: String, //标题名称
			menuHeight: Number, //高
			menuTop: Number, //高
			menuWidth: Number, //宽
			cartNumber: Number, //购物车
			messageNumber: Number, //消息
		},
		data() {
			return {

			}
		},

		onLoad() {

		},
		methods: {
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
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
	}

	.goodsBar {
		color: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
	}

	.barContent {
		display: flex;
		justify-content: space-between;
		text-align: center;
		align-items: center;
		font-size: 38rpx;
	}

	.return {
		width: 36rpx;
		height: 36rpx;
	}

	.return image {
		width: 36rpx;
		height: 36rpx;
		margin-bottom: 8rpx;
	}

	.show {
		background-color: #4CD964;
	}

	.share {
		width: 50rpx;
		height: 50rpx;
		border-radius: 25rpx;
	}

	.share image {
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
		display: flex;
		justify-content: center;
		font-size: 37rpx;
		width: 100%;
	}
</style>
