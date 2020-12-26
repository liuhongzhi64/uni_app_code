<template>
	<view class="doctor_certificate">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuTop='menuTop' :menuHeight='menuHeight' :menuBottom='menuBottom'></topBar>
		<view class="certificate_photo" >
			<swiper class="swiper_info" :style="[{'height':height+'px'}]">
				<swiper-item v-for="(item,index) in photo_list" :key='index'>
					<view class="swiper_item" :style="[{'height':height+'px'}]">
						<image class="photo_item" :src="requestUrl+item.url" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
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
				menuTop: 0,
				menuHeight: 0,
				menuBottom: 0,
				height: 0,
				barName: 'back', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '/static/images/back2.png',
				title: '医生证书',
				photo_list: [],
				requestUrl:'',
			}

		},
		onLoad: function(option) {
			this.request = this.$request			
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
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
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuBottom = menu.bottom
					}
				})
			}
			else if (platform == 'APP'){
				that.menuTop = 40
				that.menuBottom = 70
				that.menuHeight = 30
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
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.photo_list = data
					}
				})
			},
		}
	}
</script>

<style scoped>
	.certificate_photo {
		color: #FFFFFF;
		background-image: linear-gradient(0deg, #222222 0%, #151515 100%);
		
	}
	.swiper_item{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.photo_item{
		width: 85%;
		background-color: #FFFFFF;
	}
</style>
