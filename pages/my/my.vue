<template>
	<view class="my">
		<view class="my-top-bar" :style="[{paddingTop:barTopH*2+'rpx',paddingBottom:barTopH+'rpx'}]">
			<view class="bar-name" :style="[{height:lineHeight*2+'rpx',lineHeight:lineHeight*2-10+'rpx'}]">
				我的主页
			</view>
		</view>
		<view class="content">
			我的主页
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				barTopH: 0,
				rightDistance: 0,
			}
		},
		onReady() {
			let that = this;
			let pageHeight = 0
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					pageHeight = res.windowHeight
					let menu = uni.getMenuButtonBoundingClientRect();
					that.rightDistance = menu.width
					that.barTopH = menu.top
				}
			})
		},
		methods: {

		}
	}
</script>

<style scoped>
	.my-top-bar {
		background-color: #111111;
		color: #FFFFFF;
		text-align: center;
		font-size: 40rpx;
	}
</style>