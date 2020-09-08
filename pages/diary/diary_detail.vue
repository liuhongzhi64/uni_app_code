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
							<swiper class="top-swiper" indicator-dots indicator-active-color="#ffffff" :interval='intervalTime' :duration="durationTime"
							 circular>
								<swiper-item v-for="(i,index) in swiperList" :key="index">
									<view class="top-swiper-item">
										<image class="top-swiper-images" :src="i.url" mode=""></image>
										<view class="porduct-message">
											<view class="porduct-images">
												<image src="../../static/images/19.png" mode=""></image>
											</view>
											<view class="porduct-name-price">
												<view class="porduct-name">商品名称商品名的商品名称商品名的...</view>
												<view class="porduct-price">¥<text>1980</text></view>
											</view>
										</view>

										<view class="correlation-doctor">
											<view class="doctor-images">
												<image src="../../static/images/19.png" mode=""></image>
											</view>
											<view class="doctor-name-subordinate-position">
												<view class="doctor-name">李黠</view>
												<view class="subordinate-position">华美紫馨无创整形中心整形中心...</view>
											</view>

										</view>

									</view>
								</swiper-item>
							</swiper>
						</view>

						<view class="detail_contents">
							<view class="details-title"> 日记标题全部显示 </view>
							<view class="user-details-contents">
								整形分享 成都整形攻略 整形分享
								<br />
								作为一个在医美整形这个巨浪里摸爬滚打很多年的人，来告诉你如何选择适合自己的医院
								<view class="blank"></view>
								不吹不黑，但是拒绝转载 ，呕心沥血之作
								<br />
								希望每一个妹子在选择决定想变美的时候能够谨慎！谨慎！谨慎！都能美的不可方物，又保留自己的特色
								<view class="blank"></view>
								现在的整形医院真的花样百出，眼花缭乱
								<view class="blank"></view>

								每一家医院都有自己擅长的项目，不能只依靠广告和外装修来判断适不适合自己哦～
								<view class="blank"></view>
								现在由我一一为想做整形的妹子分析一下
							</view>
						</view>
					</view>

				</template>
			</scroll-view>
		</view>

		<view class="bottom-messages">
			<view class="page-view-collect-transpond">
				<view class="page-view">浏览量: <text>1423</text></view>
				<view class="collect" @tap="collectdiary" :data-id="diary.id">
					<image src="../../static/images/collect.png" mode=""></image> <text>145</text>
				</view>
				<view class="transpond">
					<image src="../../static/images/share.png" mode=""></image> <text>145</text>
				</view>
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
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '日记详情',
				intervalTime: 3000, //自动切换时间间隔
				durationTime: 1000, //	滑动动画时长
				swiperList: [{
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
				id:'',
				diary:[]
			}
		},
		onLoad: function(options) {
			const that = this
			that.id = options.id
			that.diarydetails(that.id)
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
			// 详情
			diarydetails: function (id) {
				this.request = this.$request
				const that = this
				var data = {
					interfaceId: 'diarydetails',
					diary_id :id
				}
				this.request.uniRequest("/diary", data).then(res => {
					console.log(res.data)
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.diary = (res.data.data)//对象转数组
						console.log(that.diary)
					}
				})
			},
			// 收藏
			collectdiary:function(e){
				this.request = this.$request
				var id = e.currentTarget.dataset.id
				var data = {
					interfaceId: 'collectdiary',
					diary_id :id
				}
				this.request.uniRequest("/diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						this.request.showToast('成功')					
					}
				})
			},
		}
	}
</script>

<style scoped>
	/* 	.diary_detail_content {
		background-color: #F6F6F6;
	} */

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

	.detail-swiper {
		height: 584rpx;
	}

	.top-swiper {
		height: 584rpx;
	}

	.top-swiper-item {
		position: relative;
	}

	.porduct-message {
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

	.correlation-doctor {
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

	.porduct-images,
	.porduct-images image {
		width: 80rpx;
		height: 80rpx;
	}

	.correlation-doctor .doctor-images,
	.correlation-doctor .doctor-images image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 40rpx;
	}

	.top-swiper-item .top-swiper-images {
		height: 584rpx;
		width: 100%;
	}

	.porduct-name-price,
	.doctor-name-subordinate-position {
		display: flex;
		flex-direction: column;
		margin-left: 12rpx;
	}

	.doctor-name {
		color: #ffffff;
		font-size: 24rpx;
	}

	.porduct-name-price .porduct-name,
	.subordinate-position {
		font-size: 24rpx;
		color: #ffffff;
		width: 208rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}

	.porduct-price {
		color: #fa3475;
		line-height: 34rpx;
		font-size: 24rpx;
	}

	.porduct-price text {
		font-size: 32rpx;
	}

	.detail_contents {
		padding: 40rpx;
		background-color: #FFFFFF;
	}

	.details-title {
		font-size: 40rpx;
		color: #111111;
		padding-bottom: 24rpx;
		border-bottom: 2rpx solid #f0f0f0;
	}

	.user-details-contents {
		font-size: 24rpx;
		line-height: 40rpx;
		color: #333333;
		padding-top: 32rpx;
		padding-bottom: 160rpx;
	}

	.user-details-contents .blank {
		height: 60rpx;
	}

	.bottom-messages {
		background-color: #F6F6F6;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 30rpx 0;
		border-top: 2rpx solid #f0f0f0;
	}

	.page-view-collect-transpond {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.page-view-collect-transpond image {
		width: 40rpx;
		height: 40rpx;
	}

	.collect,
	.transpond {
		display: flex;
		font-size: 26rpx;
		color: #999999;
		align-items: center;
	}

	.page-view {
		color: #fa3475;
		font-size: 26rpx;
	}
</style>
