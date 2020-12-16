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
									<image :src="requestUrl+head_ico" mode=""></image>
									<view class="name-cart-phone">
										<view class="user-name-cart">
											<view class="user-name">{{nick_name}}</view>
										</view>
										<view class="detail_number" @tap='personal(user_mark)'>
											共计{{diary_num}}篇 >
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="detail-swiper" v-if="swiperList.length>0">
							<swiper class="top-swiper" indicator-dots indicator-active-color="#ffffff" :interval='intervalTime' :duration="durationTime"
							 circular>
								<swiper-item class="doctor-information"
								 v-for="(i,index) in swiperList" :key="index" :style="{backgroundImage:'url('+requestUrl+i+')'}">
									<view class="top-swiper-item">
										<!-- <image class="top-swiper-images" :src="requestUrl+i" ></image>										 -->
										<view class="porduct-message" @tap='goToGoods(goods.id,goods.encrypted_id)'>
											<view class="porduct-images">
												<image :src="requestUrl+goods.head_img" mode=""></image>
											</view>
											<view class="porduct-name-price">
												<view class="porduct-name">{{goods.goods_name}}</view>
												<view class="porduct-price">¥<text>{{goods.sale_price}}</text></view>
											</view>
										</view>

										<view class="correlation-doctor" @tap='goToDoctor(doctor.id)'>
											<view class="doctor-images">
												<image :src="requestUrl+doctor.heading" mode=""></image>
											</view>
											<view class="doctor-name-subordinate-position">
												<view class="doctor-name">{{doctor.name}}</view>
												<view class="subordinate-position">{{doctor.zhicheng}}</view>
											</view>

										</view>

									</view>
								</swiper-item>
							</swiper>
						</view>
						<view class="detail_contents">
							<view class="details-title"> {{diaryTitle}} </view>
							<view class="user-details-contents">
								{{content}}								
							</view>
						</view>
					</view>
				</template>
			</scroll-view>
		</view>
		<view class="bottom-messages">
			<view class="page-view-collect-transpond">
				<view class="page-view">浏览量: <text>{{view_num}}</text></view>
				<view class="collect" v-if="is_collect == 0" @tap='collectdiary(id)'>
					<image src="https://xcx.hmzixin.com/upload/images/3.0/collect.png" ></image><text>{{collect_num}}</text>
				</view>
				<view class="collect" v-else @tap='cancelLike(id)'>
					<image src="https://xcx.hmzixin.com/upload/images/3.0/collect_hover.png" ></image><text class="collect_hover">{{collect_num}}</text>
				</view>
				<view class="transpond">
					<image src="../../static/images/share.png" ></image> <text>{{share_num}}</text>
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
				barName: 'back', //导航条名称
				topBackgroundColor: '#333333',
				color: '#FFFFFF',
				backImage: '/static/images/back2.png',
				title: '日记详情',
				intervalTime: 3000, //自动切换时间间隔
				durationTime: 1000, //	滑动动画时长
				swiperList: [],
				id:'',//日记id
				content:'',//内容
				collect_num:0,//日记收藏数
				diary_num:1,//日记总数,
				doctor:[{}],//医生信息    为空则不展示
				goods:[{}],//日记关联的商品信息
				head_ico:'',// 日记用户用户头像
				imgs:[],//日记图片地址     该字段不为空  日记有图片
				is_collect:0,// 浏览用户是否收藏    0 未收藏  1 已收藏
				nick_name:'' ,// 日记用户昵称
				share_num:0,
				diaryTitle:'',//日记标题
				user_mark:'',//日记用户标示
				video:'' ,// 日记视频地址    该字段不为空  日记有视频
				view_num:0,//日记浏览数
				requestUrl: '',
			}
		},
		onLoad: function(options) {
			const that = this
			that.id = options.id
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.diarydetails(that.id)
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
			// 详情
			diarydetails: function (id) {
				const that = this
				let data = {
					interfaceId: 'diarydetails',
					diary_id :id
				}
				this.request.uniRequest("diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						// console.log(data)
						that.id = data.id//日记id
						that.content = data.content //内容
						that.collect_num = data.collect_num//日记收藏数
						that.diary_num = data.diary_num//日记总数,
						that.doctor = data.doctor//医生信息    为空则不展示
						that.goods = data.goods//日记关联的商品信息
						that.head_ico = data.head_ico// 日记用户用户头像
						that.imgs = data.imgs//日记图片地址     该字段不为空  日记有图片
						that.is_collect = data.is_collect// 浏览用户是否收藏    0 未收藏  1 已收藏
						that.nick_name = data.nick_name // 日记用户昵称
						that.share_num = data.share_num
						that.diaryTitle = data.title//日记标题
						that.user_mark = data.user_mark//日记用户标示
						that.video = data.video// 日记视频地址    该字段不为空  日记有视频
						that.view_num = data.view_num//日记浏览数
						that.swiperList = that.imgs
					}
				})
			},
			// 相关商品
			goToGoods:function(goodsId,encrypted_id){
				uni.navigateTo({
					url: `/pages/goods/goods_detail?sku_id=${goodsId}&encrypted_id=${encrypted_id}`,
				})
			},
			// 相关医生
			goToDoctor:function(doctorId){
				uni.navigateTo({
					url: `/pages/doctor/doctor_detail?id=${doctorId}`,
				})
			},
			// 个人主页
			personal:function(user_mark){
				uni.navigateTo({
					url: `/pages/diary/diary_personal?user_mark=${user_mark}`,
				})
			},
			
			// 收藏
			collectdiary:function(id){
				let that = this
				let data = {
					interfaceId: 'collectdiary',
					diary_id :id
				}
				this.request.uniRequest("diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.is_collect = 1
						that.collect_num +=1
						uni.showToast({
							title: '收藏成功',
							duration: 1000
						})				
					}
				})
			},
			// 取消收藏
			cancelLike:function(id){
				let that = this
				let data = {
					interfaceId:'cancelcollectdiary',
					diary_id:id.toString()
				}
				this.request.uniRequest("diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.is_collect = 0
						that.collect_num -=1
						uni.showToast({
							title: '已取消收藏',
							duration: 1000
						})				
					}
				})
			},
		}
	}
</script>

<style scoped>

	.user-message {
		background-color: #333333;
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
		border: 1rpx solid #FFFFFF;
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
		min-height:1000rpx;
	}

	.top-swiper {
		min-height:1000rpx;
	}
	.doctor-information {
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: relative;
	}

	.top-swiper-item {
		display: flex;
		height:100%;
		width: 100%;
		align-items: center;
		justify-content: center;
		height: auto;
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
		margin-right: 10rpx;
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
	.page-view  text{
		margin-left: 10rpx;
	}
	
	.collect_hover{
		color: #9F55FF;
	}
</style>
