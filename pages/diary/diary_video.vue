<template>
	<view class="diary_video">
		<view class="top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px','background-color':topBackgroundColor,'color':color,}]">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back" @click="goBack" >
					<image src="../../static/images/back2.png" mode=""></image>
				</view>
				<view class="title" > {{title}} </view>
			</view>
		</view>
		日记详情（视频）
	</view>
</template>

<script>
	export default {
		data() {
			return {
				requestUrl: '',
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				title:'视频播放',
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
			}
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			let videoUrl = that.requestUrl + option.path
			console.log(videoUrl)
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
	.top-bar {
		text-align: center;
		font-size: 40rpx;
		position: fixed;
		z-index: 100;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		opacity: 0.8;
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
		font-size: 37rpx;
	}
</style>
