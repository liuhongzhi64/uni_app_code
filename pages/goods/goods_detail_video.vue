<template>
	<view class="goods_detail_video">
		<view class="top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px','background-color':topBackgroundColor,'color':color}]">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back" @tap="goBack">
					<image :src="backImage" mode=""></image>
				</view>
				<view class="title"> {{title}} </view>
			</view>
		</view>
		<view class="goods_detail_video_contnt" :style="[{'padding-top':menuBottom+10+'px'}]">
			<scroll-view scroll-y :style="[{'height':height-menuBottom-10 +'px'}]">
				<!-- 商品详情的视频播放 -->
				<video class="play-video" :src="videoUrl" enable-play-gesture></video>
			</scroll-view>
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
				title: '视频播放',
				list: [],
				requestUrl: '', //请求地址前缀
				videoUrl: ''
			}
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			// let doctorId = option.doctorid
			// let videoId = option.videoid
			let videoUrl = that.requestUrl + option.video
			that.videoUrl = videoUrl
			console.log(videoUrl)
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
				that.menuTop = 20
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 50
			}
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
	.play-video {
		width: 100%;
		height: 100%;
	}

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
		font-size: 37rpx;
	}
</style>
