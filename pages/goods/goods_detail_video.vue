<template>
	<view class="goods_detail_video"> 
	<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
	 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
	 <view class="goods_detail_video_contnt" :style="[{'padding-top':menuBottom-12+'px'}]">
		 <scroll-view scroll-y :style="'height:'+height -menuBottom-12 +'px'">
			 <!-- 商品详情的视频播放 -->
			<video class="play-video" :src="videoUrl"  enable-play-gesture ></video>
		</scroll-view>	 	
	 </view>		
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	export default {
		components: {
			topBar,
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				barName: 'back', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '视频播放',
				list: [],
				requestUrl: '', //请求地址前缀
				videoUrl:''
			}
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			let doctorId = option.doctorid
			let videoId = option.videoid
			let videoUrl = that.requestUrl + option.video
			that.videoUrl = videoUrl
			console.log(videoUrl,doctorId,videoId)
		},
		onReady: function() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
			that.videoContext = uni.createVideoContext('myVideo')
			// 判定运行平台
			let platform = ''
			switch (uni.getSystemInfoSync().platform) {
				case 'android':
					platform = 'android'
					break;
				case 'ios':
					platform = 'ios'
					break;
				default:
					platform = 'applet'
					break;
			}
			if (platform == 'applet') {
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
			} else {
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.play-video{
		width: 100%;
	}
</style>
