<template>
	<view class="goods_detail_video"> 
	<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
	 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
	 <view class="goods_detail_video_contnt" :style="[{'padding-top':menuBottom+10+'px'}]">
		 <scroll-view scroll-y :style="'height:'+height +'rpx'">
			 商品详情的视频播放
			<video class="play-video" :src="videoUrl" controls ></video>
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
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '',
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
	
</style>
