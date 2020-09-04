<template>
	<view class="doctor_detail">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="doctor_detail_content" :style="[{'padding-top':menuBottom+10+'px','min-height':height-menuBottom-10+'px'}]">
			<scroll-view scroll-y class="detail_content">
				<template>
					<view class="detail_content-all">
						<view class="top-doctor-message" :style="{backgroundImage:'url('+doctorHeadPortrait+')'}">
							<view class="doctor-photos" @tap='gotoPhoto'>
								医生相册一览 >
							</view>
							<view class="doctor-introduce">
								<view class="doctor-name">Dr. 陈杨</view>
								<view class="position">华美紫馨眼部整形及修复中心主任</view>
								<view class="subline"></view>
								<view class="experience-case">
									<view class="experience">从业经验: 8年</view>
									<view class="case">案列数: 12000</view>
								</view>
								<view class="get-title">
									<view class="title-item"> <text class="dot">·</text> <text>华美紫馨眼部整形及修复中心学20个字符就换行自动换行</text> </view>
									<view class="title-item"> <text class="dot">·</text> <text>华美紫馨鼻整形及修复中心首席专家</text> </view>
									<view class="title-item"> <text class="dot">·</text> <text>中国医师协会美容与整形医师分会会员</text> </view>
									<view class="title-item"> <text class="dot">·</text> <text>中国整形美容协会鼻整形分会委员</text> </view>
									<view class="title-item"> <text class="dot">·</text> <text>美国射极峰公司亚洲首批特聘高级专家</text> </view>
								</view>

								<view class="doctor-title">
									<view class="top-title">擅长项目</view>
									<view class="title-item"> 双眼皮、手术隆鼻、面部综合塑形 </view>
								</view>
								<view class="get-title">
									<view class="top-title">手术特点</view>
									<view class="title-item">
										精于保留血管术式，术中出血少，术后恢复快。精微切口，重睑分层手术，创口隐秘恢复快。“急速轻龄美眼”的研发，
										将重睑手术与上眼抗衰预提升融合，在重睑手术中，对眼部3个易松弛下垂的层次进行复位提升，一个手术达到美眼+抗衰的效果。
									</view>
								</view>

							</view>
						</view>
						
						<view class="doctor-content-item">
							<view class="doctor-item">
								<view class="doctor-item-title">个人专辑</view>
							
								<view class="doctor-item-list">
									<scroll-view class="product-items" scroll-x="true">
										<view class="product-item-content">
											<view class="productImgs" v-for="(i,k) in doctorList" :key='k'>
												<view class="productItems">
													<image :src="i.url" mode="" style="width: 210rpx;height: 210rpx;"></image>
													<view class="doctor-item-explain" style="width: 210rpx;">{{i.content}}</view>
												</view>
											</view>
										</view>
									</scroll-view>
								</view>
							</view>
							
							<view class="doctor-item">
								<view class="doctor-item-title">个人证书</view>
							
								<view class="doctor-item-list">
									<scroll-view class="product-items" scroll-x="true">
										<view class="product-item-content">
											<view class="productImgs" v-for="(i,k) in doctorList" :key='k'>
												<view class="productItems">
													<image :src="i.url" mode="" style="width: 280rpx;height: 210rpx;"></image>
												</view>
											</view>
										</view>
									</scroll-view>
								</view>
							</view>
						</view>
						
						<view class="doctor-project">
							<view class="doctor-item-title">TA的项目</view>
							<view class="doctor-item-swiper">
								<swiper class="doctor-swiper" indicator-dots indicator-active-color="#f6db93" >
									<swiper-item class="doctor-swiper-item" >
										<view class="project-content" >
											<view class="porduct-list" v-for="(i,k) in porductList" :key='k'>
												<view class="porduct-items">
												
													<view class="porduct-item-images">
														<image :src="i.url" mode=""></image>
													</view>
												
													<view class="porduct-introduce">
												
														<view class="product-title"> {{i.title}} </view>
												
														<view class="label" v-if="i.label.length>0">
															<view class="label-name" v-for="(i,k) in i.label" :key='k'> {{i}}  </view>
														</view>
												
														<view class="activity" v-if="i.activity.length>0">
															<view class="activity-name" v-for="(i,k) in i.activity" :key='k'> {{i}} </view>
														</view>
												
														<view class="porduct-price">
															<view class="porduct-original-cost"> <text>￥</text>{{i.originalCost}} </view>
															<view class="porduct-vip-price" v-if="i.vipPrice>0">
																<view class="vip">钻卡</view> <view class="vip-price">￥{{i.vipPrice}}</view>
															</view>
														</view>
														
														<view class="subscribe-goodReputation">
															<!-- 预约 -->
															<view class="subscribe"> {{i.subscribe}}预约 </view>
															<!-- 好评 -->
															<view class="goodReputation"> {{i.goodReputation}}%好评 </view>
														</view>
														
														
													</view>
																	
												</view>
											</view>
										</view>
									</swiper-item>
									
									<swiper-item class="doctor-swiper-item" >
										<view class="project-content" >
											2222
										</view>
									</swiper-item>
									
									
								</swiper>
							</view>
						</view>
						
						<view class="doctor-projects">
							<view class="doctor-item-title">拜托了医生</view>
							<view class="doctor-projects-item">
								<porduct :width=340 :porductList='pleaseDoctorList'></porduct>
							</view>
							
						</view>

						<view class="doctor-project">
							<view class="doctor-item-title">用户日记</view>
							<view class="doctor-projects-item">
								<porduct :width=340 :porductList='pleaseDoctorList'></porduct>
							</view>
						</view>
	
					</view>
				</template>
			</scroll-view>
		</view>
		
		<view class="footer">
			<view class="mar">
				<image class="icon-img" src="https://xcx.hmzixin.com/upload/images/3.0/icon_consult.png"></image>咨询
			</view>
			<view class="mar">
				<image class="icon-img" src="https://xcx.hmzixin.com/upload/images/3.0/icon_share.png"></image>分享
			</view>
			<view class="mar" @tap="cart">
				<image class="icon-img" src="https://xcx.hmzixin.com/upload/images/3.0/icon_cart.png"></image>购物车
			</view>		
		</view>
		
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import porduct from "../../components/porduct.vue";
	export default {
		components: {
			topBar,
			porduct,
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
				title: '医生个人主页',
				doctorHeadPortrait: 'https://wxmall.hmzixin.com/upload/2018/06/15/20180615134007961.jpg', //医生的背景图片
				doctorList:[
					{url:'../../static/images/19.png',content:'华美紫馨薇拉美塑Ⅲ华美紫馨薇拉美塑Ⅲ—美体最多两排...'},
					{url:'../../static/images/19.png',content:'华美紫馨薇拉美塑Ⅲ华美紫馨薇拉美塑Ⅲ—美体最多两排...'},
					{url:'../../static/images/19.png',content:'华美紫馨薇拉美塑Ⅲ华美紫馨薇拉美塑Ⅲ—美体最多两排...'},
					{url:'../../static/images/19.png',content:'华美紫馨薇拉美塑Ⅲ华美紫馨薇拉美塑Ⅲ—美体最多两排...'},
				],
				porductList:[
					{
						url:'../../static/images/19.png',
						title:'我是秒杀商品名称名称,我是秒杀商品名称我是秒杀商品,名称我是秒杀商品名称名称我是秒杀商品名称...',
						label:['眼部美容','眼部'],
						activity:[],
						originalCost:68800,
						vipPrice:58800,
						subscribe:477,
						goodReputation:98,
					},
					{
						url:'../../static/images/23.png',
						title:'我是秒杀商品名称名称,我是秒杀商品名称我是秒杀商品,名称我是秒杀商品名称名称我是秒杀商品名称...',
						label:['眼部美容','眼部'],
						activity:[],
						originalCost:18800,
						vipPrice:12800,
						subscribe:422,
						goodReputation:98,
					},
					{
						url:'../../static/images/19.png',
						title:'我是秒杀商品名称名称,我是秒杀商品名称我是秒杀商品,名称我是秒杀商品名称名称我是秒杀商品名称...',
						label:[],
						activity:['首单必减','折扣'],
						originalCost:18800,
						vipPrice:0,
						subscribe:477,
						goodReputation:98,
					},
				],
				pleaseDoctorList : [
					{
						url: '../../static/images/20.png',
						title: '我是文章标题，显示两排后就以省略号结束？...',
						label: ['眼部美容', '眼部'],
						headPortrait: '../../static/images/test.jpg', //头像
						userName: '用户昵称几个字',
						like: 99
					},
					{
						url: '../../static/images/23.png',
						title: '我是文章标题，显示两排后就以省略号结束？...',
						label: ['眼部美容', '眼部'],
						headPortrait: '../../static/images/test.jpg', //头像
						userName: '程阳',
						like: 99
					},
					{
						url: '../../static/images/23.png',
						title: '我是文章标题，显示两排后就以省略号结束？...',
						label: ['眼部美容', '眼部'],
						headPortrait: '../../static/images/test.jpg', //头像
						userName: '程阳',
						like: 99
					},
					{
						url: '../../static/images/23.png',
						title: '我是文章标题，显示两排后就以省略号结束？...',
						label: ['眼部美容', '眼部'],
						headPortrait: '../../static/images/test.jpg', //头像
						userName: '程阳',
						like: 99
					},
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
			gotoPhoto: function() {
				uni.navigateTo({
					url: `/pages/doctor/doctor_photo`,
				})
			},
			// 购物车
			cart: function(event) {
				
				uni.navigateTo({
					url: `/pages/cart/cart`,
				})
			},
		},
	}
</script>

<style scoped>
	.detail_content-all {
		padding-bottom: 200rpx;
	}

	.top-doctor-message {
		background-repeat: no-repeat;
		background-size: 100% 100%;
		padding-top: 60rpx;
		height: 100%;
		padding-bottom: 80rpx;
	}

	.doctor-photos {
		width: 237rpx;
		text-align: center;
		line-height: 48rpx;
		background-image: linear-gradient(0deg, #ac995b 0%, #d1bf86 100%);
		box-shadow: 1rpx 4rpx 6rpx 0rpx rgba(0, 0, 0, 0.71);
		border-top-right-radius: 24rpx;
		border-bottom-right-radius: 24rpx;
		font-size: 26rpx;
		color: #FFFFFF;
	}

	.doctor-introduce {
		padding-left: 20rpx;
		padding-top: 120rpx;
	}

	.doctor-name {
		font-size: 64rpx;
		color: #d1bf86;
	}

	.position {
		width: 352rpx;
		line-height: 48rpx;
		font-size: 32rpx;
		color: #d1bf86;
		margin-top: 20rpx;
	}

	.subline {
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		width: 304rpx;
		height: 2rpx;
		background-color: #d1bf86;
	}

	.experience-case {
		display: flex;
		color: #FFFFFF;
		font-size: 26rpx;
		margin-bottom: 32rpx;
	}

	.experience {
		margin-right: 20rpx;
	}

	.get-title {
		width: 470rpx;
		padding: 30rpx 33rpx 30rpx 23rpx;
		background-color: #121212;
		border-radius: 24rpx;
		opacity: 0.8;
		margin-bottom: 20rpx;
	}

	.title-item {
		font-size: 24rpx;
		color: #FFFFFF;
		line-height: 40rpx;
		display: flex;
	}

	.dot {
		margin-right: 10rpx;
	}

	.doctor-title {
		width: 360rpx;
		padding: 30rpx 33rpx 30rpx 23rpx;
		background-color: #222222;
		border-radius: 24rpx;
		opacity: 0.8;
		margin-bottom: 20rpx;
	}

	.top-title {
		font-size: 28rpx;
		line-height: 30rpx;
		color: #d1bf86;
	}
	
	.doctor-content-item{
		background-color: #151515;
		padding-bottom: 40rpx;
	}

	.doctor-item {
		padding-left: 30rpx;
	}
	.doctor-projects-item{
		margin-top: 12rpx;
	}

	.doctor-item-title {
		font-size: 48rpx;
		color: #d1bf86;
		padding: 30rpx 0;
		border-bottom: 2rpx solid #4a4a4a;
	}

	.doctor-item-list {
		width: 100%;
		padding-top: 32rpx;
	}

	.product-items {
		overflow: hidden;
		white-space: nowrap;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.product-item-content {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.productImgs {
		display: inline-block;
		font-size: 20rpx;
		margin-right: 10rpx;
	}

	.productItems {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		white-space: normal;
		border-radius: 24rpx;
	}

	.productImgs image {
		border-radius: 16rpx;
	}

	.doctor-item-explain {
		margin-top: 17rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		color: #FFFFFF;
		font-size: 20rpx;
	}
	.doctor-project{
		padding: 0 30rpx 30rpx;
		background-color: #222222;
		height: 100%;
	}
	.doctor-projects{
		padding: 0 30rpx 30rpx;
		background-color: #151515;
	}
	.doctor-item-swiper{
		margin-top: 32rpx;
	}
	.doctor-swiper{
		height: 820rpx;
	}
	.doctor-swiper-item,.project-content{
		width: 100%;
		height: 100%;
		
	}
	.porduct-items {
		display: flex;
		align-items: center;
		border-radius: 16rpx;
		background-color: #f0f0f0;
		margin-bottom: 20rpx;
	}
	
	.porduct-item-images {
		width: 240rpx;
		height: 240rpx;
		margin-right: 28rpx;
	}
	
	.porduct-item-images image {
		width: 100%;
		height: 100%;
		border-top-left-radius: 16rpx;
		border-bottom-left-radius: 16rpx;
	}
	
	.porduct-introduce {
		flex: 1;
		font-size: 26rpx;
		white-space: normal;
		display: flex;
		flex-direction: column;
		padding-right: 48rpx;
	}
	
	.product-title {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		color: #111111;
		line-height: 36rpx;
	}
	
	.label {
		display: flex;
		flex-wrap: wrap;
		margin-top: 12rpx;
	}
	
	.label-name {
		background-color: #999999;
		text-align: center;
		font-size: 16rpx;
		padding: 5rpx 8rpx;
		margin-right: 10rpx;
		border-radius: 4rpx;
		color: #FFFFFF;
	}
	
	.activity {
		display: flex;
		font-size: 16rpx;
		color: #fa3475;
		flex-wrap: wrap;
		margin-top: 12rpx;
	}
	
	.activity-name {
		border: 1rpx solid #fa3475;
		margin-right: 10rpx;
		padding: 5rpx;
		border-radius: 4rpx;
	}
	
	.porduct-price{
		display: flex;
		margin-top: 20rpx;
	}
	.porduct-vip-price{
		display: flex;
		margin-left: 25rpx;
		border: 1rpx solid #282828;
		border-radius:4rpx ;
	}
	
	.vip{
		font-size: 16rpx;
		border-radius: 4rpx;
		width: 48rpx;
		height: 29rpx;
		line-height: 30rpx;
		background-image: linear-gradient(0deg, #000000 0%,  #2c2c2c 100%),  linear-gradient( #282828, #282828);
		color: #FFFFFF;
		text-align: center;
	}
	
	.vip-price{
		height: 28rpx;
		font-size: 16rpx;
		color: #282828;
		border-width: 1rpx;
		border-image-source: linear-gradient(0deg,  #000000 0%,  #2c2c2c 100%);
		border-image-slice: 1;
		padding: 0 9rpx;
	}
	
	.porduct-price{
		line-height: 34rpx;
		display: flex;
		align-items: center;
	}
	
	.porduct-original-cost{
		color: #fa3475;
		font-size: 52rpx;
	}
	.porduct-original-cost text{
		font-size: 36rpx;
	}
	
	.subscribe-goodReputation{
		display: flex;
		font-size: 20rpx;
		margin-top: 10rpx;
		color: #666666;
	}
	
	.goodReputation{
		color: #fa3576;
		margin-left: 30rpx;
	}
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 2;
		width: 750rpx;
		height: 104rpx;
		background-image: linear-gradient(90deg,  #282828 50%,  #272727 100%);
		display: flex;
		align-items: center;
	}
	.footer .mar{
		width: 33.3%;
		color: #FFFFFF;
		font-size: 28rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-right: 1rpx solid #505050;
	}
	.footer .mar image{
		width: 50rpx;
		height: 50rpx;
		margin-right: 16rpx;
	}
	
</style>
