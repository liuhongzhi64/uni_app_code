<template>
	<view class="doctor_photo">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="doctor_photo_content" :style="[{'padding-top':menuBottom+10+'px','min-height':height-menuBottom-10+'px'}]">
			<scroll-view scroll-y class="photo_content">
				<template>
					<view class="photo_content-all">
						<view class="doctor-photo-list" v-for="(item,index) in doctorPhotoList" :key='index'>
							<image :src="item.url" mode=""></image>
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
				backImage: '../static/images/back2.png',
				title: '医生相册一览',
				doctorPhotoList:[
					{url:'../../static/images/19.png'},
					{url:'../../static/images/20.png'},
					{url:'../../static/images/19.png'},
					{url:'../../static/images/20.png'},
					{url:'../../static/images/19.png'},
					{url:'../../static/images/test.jpg'},
					{url:'../../static/images/20.png'},
					{url:'../../static/images/19.png'},
					{url:'../../static/images/test.jpg'},
					{url:'../../static/images/20.png'},
				]
			}
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
