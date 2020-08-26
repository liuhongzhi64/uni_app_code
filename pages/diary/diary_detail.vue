<template>
	<view class="diary_detail">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="diary_detail_content" :style="[{'padding-top':menuBottom+10+'px','min-height':height-menuBottom-10+'px'}]">
			<scroll-view scroll-y class="detail_content">
				<template>
					<view class="detail_content-all">
						<view class="user-message">
							<view class="user-head-portrait-name-phone-set">
								<view class="user-head-portrait">
									<image src="../../static/images/19.png" mode=""></image>
									<view class="name-cart-phone">
										<view class="user-name-cart">
											<view class="user-name">用户名字就八个字</view>
										</view>
										<view class="detail_number">
											共计10篇 >
										</view>
									</view>
								</view>
							</view>
						</view>
						
						<view class="detail-swiper">
							<swiper class="top-swiper" indicator-dots indicator-active-color="#ffffff"  :interval='intervalTime'
							 :duration="durationTime" circular>
								<swiper-item v-for="(i,index) in swiperList" :key="index">
									<view class="top-swiper-item">
										<image class="top-swiper-images" :src="i.url" mode=""></image>
										<view class="porduct-message">
											<view class="porduct-images"><image src="../../static/images/19.png" mode=""></image></view>
											<view class="porduct-name-price">
												<view class="porduct-name">商品名称商品名的商品名称商品名的...</view>
												<view class="porduct-price">¥<text>1980</text></view>
											</view>
										</view>
										
										<view class="correlation-doctor">
											
										</view>
										
									</view>
								</swiper-item>
							</swiper>
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
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '日记详情',
				intervalTime: 3000, //自动切换时间间隔
				durationTime: 1000, //	滑动动画时长
				swiperList: [
					{
						id: 0,
						url: '../../static/images/19.png',
					},
					{
						id: 1,
						url: '../../static/images/20.png',
					},
					{
						id: 0,
						url: '../../static/images/19.png',
					},
					{
						id: 1,
						url: '../../static/images/20.png',
					},
				],
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
	.diary_detail_content {
		background-color: #F6F6F6;
	}

	.user-message {
		background-color: #222222;
	}

	.user-head-portrait-name-phone-set {
		padding: 10rpx 40rpx 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
	}

	.user-head-portrait {
		display: flex;
		align-items: center;
	}

	.content {
		background-color: #F6F6F6;
	}

	.user-head-portrait image {
		width: 160rpx;
		height: 160rpx;
		border-radius: 80rpx;
		margin-right: 24rpx;
	}

	.user-name-cart {
		display: flex;
		align-items: center;
	}

	.user-name-cart .user-name {
		font-size: 32rpx;
		color: #FFFFFF;
	}

	.detail_number {
		color: #FA3475;
		font-size: 24rpx;
		margin-top: 18rpx;
	}
	.detail-swiper{
		height: 584rpx;
	}
	.top-swiper {
		height: 584rpx;
	}
	
	.top-swiper-item{
		position: relative;
	}
	.porduct-message{
		position: absolute;
		bottom: 56rpx;
		left: 32rpx;
		width: 320rpx;
		height: 80rpx;
		background-color: #000000;
		border-radius: 10rpx;
		opacity: 0.7;
		display: flex;
		align-items: center;
		z-index: 9;
		padding: 8rpx;
	}
	.correlation-doctor{
		position: absolute;
		bottom: 56rpx;
		right: 10rpx;
		width: 320rpx;
		height: 80rpx;
		background-color: #000000;
		border-radius: 10rpx;
		opacity: 0.7;
		display: flex;
		align-items: center;
		z-index: 9;
		padding: 8rpx;
	}
	.porduct-images,.porduct-images image{
		width: 80rpx;
		height: 80rpx;	
	}
	
	.top-swiper-item .top-swiper-images {
		height: 584rpx;
		width: 100%;
	}
	.porduct-name-price{
		display: flex;
		flex-direction: column;
		margin-left: 12rpx;
	}
	.porduct-name-price .porduct-name{
		font-size: 24rpx;
		color: #ffffff;
		width: 208rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	.porduct-price{
		color: #fa3475;
		line-height: 34rpx;
		font-size: 24rpx;
	}
	.porduct-price text{
		font-size: 32rpx;
	}
	
	
</style>
