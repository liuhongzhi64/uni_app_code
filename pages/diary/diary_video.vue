<template>
	<view class="diary_video">
		<view class="top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px','background-color':topBackgroundColor}]">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back" @click="goBack" >
					<image src="/static/images/back2.png" mode=""></image>
				</view>
				<view class="title" > {{title}} </view>
			</view>
		</view>
		<!-- 日记详情（视频） -->
		<view class="video_content" :style="[{'height':height-10-menuBottom+'px','padding-top':menuBottom+10+'px'}]" >
			<video class="play-video" :src="videoUrl" controls ></video>
		</view>
		
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
				videoUrl:'',
				path:"upload/video/videos/202011/25/BJdGKSxEd6A9GxuN9nAGACAbeIWFMIoUzBOsmpQm.mp4",
				video_info:{}
			}
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			if(option.path){
				let videoUrl = that.requestUrl + option.path
				that.videoUrl = videoUrl
			}else{
				that.videoUrl = that.requestUrl + that.path
			}
			console.log(option.id,option) 
			if(option.id){
				that.get_video_detail(option.id)
			}else{
				that.get_video_detail(20)
			}
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
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
			if(platform=='applet'){
				// 获取屏幕高度
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuWidth = menu.width
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuLeft = menu.left
						that.menuBottom = menu.bottom
					}
				})
			}
			else{
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			// 返回上一级
			goBack: function() {
				// console.log('back')
				uni.navigateBack({
					delta: 1
				});
			},
			get_video_detail:function(id){
				let that = this
				let dataInfo = {
					interfaceId:'videodetails',
					video_id:id
				}
				this.request.uniRequest("video", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.video_info = data
						console.log(res.data.data)
					}
				})
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
		color: #FFFFFF;
	}
	
	.play-video{
		width: 100%;
	}
	
</style>
