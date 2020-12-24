<template>
	<view class="doctor_certificate">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		医生证书
		<view class="doctor_certificate_content" :style="[{'padding-top':menuBottom-10+'px','height':height-menuBottom-11+'px'}]">

			<view class="certificate-photo">
				<swiper class="swiper" indicator-active-color="#ffffff" display-multiple-items='1.5' :duration="duration" circular previous-margin='64rpx' next-margin='64rpx'>
					<swiper-item class="swiper-item" v-for="(i,index) in doctorPhotoList" :key="index">
						<view class="swiper-item">
							<image :src="requestUrl+i.url" mode="heightFix"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			


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
				title: '医生证书',
				duration: 1000, //	滑动动画时长
				doctorPhotoList: [],
				requestUrl:'',
			}

		},
		onLoad: function(option) {
			this.request = this.$request			
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			// console.log(option)
			that.getDoctormessage(option.id)
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
						that.menuWidth = menu.width
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuLeft = menu.left
						that.menuBottom = menu.bottom
					}
				})
			}
			else if (platform == 'APP'){
				that.menuWidth = 90
				that.menuTop = 40
				that.menuBottom = 70
				that.menuHeight = 30
				that.menuLeft = 278
			}
		},
		methods: {
			// 获取证书
			getDoctormessage:function(doctorId){
				let that = this
				let dataInfo = {
					interfaceId:'docker_img',
					doctor_id:doctorId,
					type:'1'
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
	.doctor_certificate_content {
		background-color: #222222;
		display: flex;
		align-items: center;
		/* width: 100%; */
	}

	.certificate-photo {
		height: 100%;
		text-align: center;
		width: 100%;
		color: #FFFFFF;
		display: flex;
		align-items: center;
	}
	.swiper{
		height: 225px;
		width: 100%;
	}
</style>
