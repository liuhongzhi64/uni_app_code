<template>
	<view class="doctor_photo">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="doctor_photo_content" :style="[{'padding-top':menuBottom+10+'px','min-height':height-menuBottom-10+'px'}]">
			<scroll-view scroll-y class="photo_content">
				<template>
					<view class="photo_content-all">
						<view class="doctor-photo-list" v-for="(item,index) in doctorPhotoList" :key='index' @tap='goToDoctor'>
							<image :src="requestUrl+item.url" mode="heightFix"></image>
						</view>
						<view class="bottom-hint">
							本喵也是有底线的喵~
						</view>
					</view>
				</template>
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
				backImage: '/static/images/back2.png',
				title: '医生相册一览',
				doctorPhotoList:[],
				requestUrl:''
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
		onLoad: function(option) {
			this.request = this.$request			
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			that.getDetail(option.id)
		},
		methods: {
			goToDoctor:function(){
				// uni.navigateTo({
				// 	url: `/pages/doctor/doctor_detail`,
				// })
				console.log('点击了图片')
			},
			// 获取相册
			getDetail:function(doctorId){
				let that = this
				let dataInfo = {
					interfaceId:'docker_img',
					doctor_id:doctorId,
					type:'0'
				}
				this.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000) {
						let data = res.data.data
						that.doctorPhotoList = data
					}
					else {
						this.request.showToast(res.data.message);
					}
				})
			},
		}
	}
</script>

<style scoped>
	.doctor_photo_content {
		background-color: #222222;
	}
	.photo_content-all{
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx;
		justify-content: space-between;
	}
	.doctor-photo-list{
		width: 350rpx;
		height: 350rpx;
		background-color: #ffffff;
		border-radius: 16rpx;
		margin-bottom: 10rpx;
	}
	.doctor-photo-list image{
		width: 350rpx;
		height: 350rpx;
		border-radius: 16rpx;
	}
	.bottom-hint{
		margin-top: 160rpx;
		width: 100%;
		text-align: center;
		color: #FFFFFF;
		font-size: 24rpx;
	}
</style>
