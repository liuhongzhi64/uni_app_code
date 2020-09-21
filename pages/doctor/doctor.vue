<template>
	<view class="doctor">
		<view class="doctor-top-bar">
			<view class="bar-name">
				<view :style="[{'height':menuHeight+'px','margin-top':menuTop+'px','border-radius':menuHeight/2+'px','line-height':menuHeight+'px'}]">
					明星医生
				</view>
			</view>
		</view>
		<scroll-view scroll-y :style="[{'padding-top':menuBottom+'px'}]">
			<template>
				<view class="content" >
					<view class="doctor-top-bars">
						<scroll-view class="related-doctor-items" scroll-x="true">
							<view class="related-doctor-centent" v-if="doctorList">
								<view id="doctor-item" class="doctor-item" v-for="(i,k) in doctorList" :key='k' :class="{checked :btnnum == k}"
								 @tap="change(k,i.id)">
									<view class="doctor-head-portrait-doctorName">
										<!-- 医生 -->
										<view class="doctor-head-portrait">
											<image :src="requestUrl+i.heading" mode=""></image>
										</view>
										<!-- 医生名字 -->
										<view class="doctorName">
											<view class="doctor-item-content"> {{i.name}} </view>
										</view>
									</view>
									<view class="checkedBarLine">
										<view :class="{checkedBar :btnnum == k}"></view>
									</view>
								</view>
							</view>
						</scroll-view>
					</view>
					<view class="end-cont" :class="{dis:btnnum == index}" v-for="(items,index) in doctorAllList" :key="index">
						<scroll-view scroll-y class="Details-of-the-doctor">
							<template>
								<view class="doctor-content" >
									<view class="doctor-information" :style="{backgroundImage:'url('+requestUrl+doctorInformationList.tar_image+')'}">
										<view class="doctor-case">
											<view class="doctor-name"> {{doctorInformationList.name}} </view>
											<view class="post"> {{doctorInformationList.tar_sign}} </view>
											<view class="all-title">
												<view class="title-item" v-for="(i,k) in doctorInformationList.sign" :key='k'> · {{i}} </view>
											</view>
											<view class="be-good-at"> 擅长项目 </view>
											<view class="be-good-at-item"> 
												<text v-for="(item,index) in doctorInformationList.goods_project" :key='index'>{{item}} 、</text> 
											</view>
											<!-- 医生视频 -->
											<view class="case-list">
												<scroll-view class="case-items" scroll-x="true">
													<view class="case-all-item">
														<view class="case-item" v-for="(i,k) in doctorInformationList.video" :key='k' >
															<image :src="requestUrl+i.cover_img" mode=""></image>
															<view class="case-explain"> {{i.name}} </view>
														</view>

													</view>
												</scroll-view>
											</view>
										</view>

									</view>
								</view>
								<view class="recommend-content" >
									<!-- 医生中心分类 -->
									<view class="recommend-doctor">
										<scroll-view class="recommend-doctor-items" scroll-x="true">
											<view class="recommend-doctor-items-content">
												<view class="recommend-doctor-name"
												 v-for="(i,k) in doctorNameList" :key='k' 
												 :class="{checkedDoctor :btndoctornum == k}"
												  @tap="changeDoctor(k,i.id)">
													<view class="item-name">
														{{ i.name }}
													</view>
													<view :class="{checkedLine :btndoctornum == k}"></view>
												</view>
											</view>											
										</scroll-view>
									</view>
									<!-- 相关医生 -->
									<view class="recommend-doctor-introduce end-cont" 
									 :class="{dis:btndoctornum == index}" 
									 v-for="(item,index) in recommendDoctorList"
									 :key="index">
										<view class="recommend-doctor-swiper" >
											<swiper id="doctor-swiper" class="doctor-swiper" indicator-dots indicator-active-color="#ffffff">
												<swiper-item v-for="(i,index) in particularDoctorList" :key='index'>
													<view class="swiper-item" v-for="(i,k) in item" :key='k'>
														<view class="head-portrait-name-introduce-workingYears-case-consult">
															<view class="head-portrait">
																<image :src="requestUrl+i.heading" mode=""></image>
															</view>
															<view class="name-introduce-workingYears-case">
																<view class="name-introduce">
																	<view class="name"> {{i.name}} </view>
																	<view class="introduce"> {{i.zhicheng}} </view>
																</view>
																<view class="workingYears-case">
																	<view class="workingYears"> 从业经验: {{i.employed_time}}年 </view>
																	<view class="case"> 案列数： {{i.case_num}} </view>
																</view>
															</view>
															<view class="consult"> 咨询 </view>
														</view>

														<view class="beGoodAt-viewpoint">
															<view class="beGoodAt"> 
																<text>擅长</text>  
																<text v-for="(item,index) in i.goods_category">{{item}}</text>
															</view>
															<view class="viewpoint"> <text>观点</text> {{i.view}} </view>
														</view>

														<view class="doctor-recommend-product" v-for="(i,k) in i.product" :key='k'>
															<view class="recommend-content">
																<text>推</text>{{i.content}}
															</view>
															<!-- <view class="order-price">
																<view class="order"> {{i.order}}人预约 </view>
																<view class="price"> ￥ {{i.price}} </view>
															</view> -->
														</view>

														<view class="hot-product" v-for="(i,k) in i.hot" :key='k'>
															<view class="hot-recommend-content">
																<text>热</text>{{i.content}}
															</view>
															<view class="order-price">
																<view class="order"> {{i.order}}人预约 </view>
																<view class="price"> ￥ {{i.price}} </view>
															</view>
														</view>
													</view>
												</swiper-item>
											</swiper>
										</view>
									</view>

									<!-- 拜托了医生 -->
									<view class="please-doctor" >
										<!-- 标题 -->
										<view class="please-doctor-title"> 拜托了医生 </view>
										<view class="please-doctor-title-line">
											<view></view>
										</view>

										<view class="please-doctor-content">
											<scroll-view scroll-y>
												<template>
													<view class="please-doctor-all-name">
														<scroll-view class="recommend-doctor-items" scroll-x="true">
															<view class="recommend-doctor-items-content">
																<view class="recommend-doctor-name"
																 v-for="(i,k) in doctorNameList" :key='k' 
																 :class="{checkedDoctor :btnPleaseDoctorNum == k}"
																  @tap="changePleaseDoctor(k,i.id)">
																	<view class="item-name">
																		{{ i.name }}
																	</view>
																	<view :class="{checkedLine :btnPleaseDoctorNum == k}"></view>
																</view>
															</view>											
														</scroll-view>
														<!-- <view class="please-doctor-name" 
														v-for="(i,k) in doctorNameList" :key='k' :class="{checkedDoctor :btnPleaseDoctorNum == k}"
														 @tap="changePleaseDoctor(k)"> {{ i }}
															<view :class="{checkedLine :btnPleaseDoctorNum == k}"></view>
														</view> -->
													</view>
													<view class="please-doctor-introduce end-cont" 
													 :class="{dis:btnPleaseDoctorNum == k}" v-for="(item,k) in recommendDoctorList"
													 :key="k">
														<porduct :width=350 :porductList='pleaseDoctorList'></porduct>
													</view>
												</template>
											</scroll-view>
										</view>
									</view>
								</view>
							</template>
						</scroll-view>
					</view>

				</view>
			</template>
		</scroll-view>
	</view>
</template>

<script>
	import porduct from "../../components/porduct.vue";
	export default {
		components: {
			porduct
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				btnnum: 0,
				doctorList: [{
						url: '../../static/images/test.jpg',
						doctorName: '陈杨'
					},
					{
						url: '../../static/images/19.png',
						doctorName: '宋晓东'
					},
					{
						url: '../../static/images/20.png',
						doctorName: '邱伟'
					},
					{
						url: '../../static/images/23.png',
						doctorName: '李春清'
					},
					{
						url: '../../static/images/test.jpg',
						doctorName: '黄建梅'
					},
					{
						url: '../../static/images/19.png',
						doctorName: '宋晓东'
					},
					{
						url: '../../static/images/20.png',
						doctorName: '邱伟'
					},
					{
						url: '../../static/images/23.png',
						doctorName: '李春清'
					},
				],
				doctorAllList: [{
						doctorName: '陈杨',
					},
					{
						doctorName: '宋晓东',
					},
					{
						doctorName: '邱伟',
					},
					{
						doctorName: '李春清',
					},
					{
						doctorName: '黄建美',
					},
					{
						doctorName: '陈杨2',
					},
					{
						doctorName: '陈杨3',
					},
					{
						doctorName: '陈杨4',
					},
				],
				doctorInformationList: [],
				doctorNameList: ['眼部', '鼻部', '脂肪填充', '胸部', '纤体瘦身', '线雕'],
				btndoctornum: 0,
				recommendDoctorList: [],
				particularDoctorList: [], //医生列表	
				btnPleaseDoctorNum: 0,
				pleaseDoctorList: [], //拜托了医生左边
				requestUrl:''
			}
		},
		onLoad: function() {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			// 头部导航医生
			that.getDetail()
			// 医生中心分类
			that.getDoctorClassfiy()
			
		},
		onReady() {
			let that = this;
			let pageHeight = 0
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					pageHeight = res.windowHeight
					let menu = uni.getMenuButtonBoundingClientRect();
					that.menuWidth = menu.width
					that.menuTop = menu.top
					that.menuHeight = menu.height
					that.menuLeft = menu.left
					that.menuBottom = menu.bottom
				}
			})			
			this.changePleaseDoctor()
		},
		methods: {
			// 获取详情
			getDetail:function(){
				let that = this
				let dataInfo = {
					interfaceId : 'start_list'
				}
				that.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						// console.log(data)
						that.doctorList = data
						that.change(0,data[0].id)
					}
				})
			},
			// 医生中心分类
			getDoctorClassfiy:function(){
				let that = this
				let dataInfo = {
					interfaceId : 'centon'
				}
				that.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						// console.log(data)
						that.doctorNameList = data
						this.changeDoctor(0,data[0].id)
					}
				})
			},
			// 带你头部的明星医生
			change: function(e = 0,id) {
				let that = this
				that.btnnum = e
				let doctorId = id
				let dataInfo = {
					interfaceId:'star',
					doctor_id:doctorId
				}
				that.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						this.doctorInformationList = data
					}
				})
			},
			// 点击商品
			gotoGoods: function(e,id) {
				let goods = e.currentTarget.dataset.name
				uni.navigateTo({
					url: `/pages/goods/goods_detail?goods=${goods}`,
				})
			},
			// 点击医生中心分类
			changeDoctor: function(e,id) {
				let that = this
				that.btndoctornum = e
				let doctorId = id
				let dataInfo = {
					interfaceId:'docker_centon',
					doctor_centon_id:doctorId
				}
				that.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.particularDoctorList = data
						that.particularDoctorList = that.group(that.particularDoctorList, 3)
						console.log(that.particularDoctorList)
					}
				})
				
			
			},
			changePleaseDoctor: function(e = 0) {
				this.btnPleaseDoctorNum = e
				if (e == 0) {
					this.pleaseDoctorList = [{
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
					]


				} else {
					this.pleaseDoctorList = []
				}
			},
			// 分割数组
			group: function(array, subGroupLength) {
				let index = 0;
				let newArray = [];
				while (index < array.length) {
					newArray.push(array.slice(index, index += subGroupLength));
				}
				return newArray;
			},
		}
	}
</script>

<style scoped>
	.doctor-top-bar {
		background-color: #111111;
		color: #FFFFFF;
		text-align: center;
		font-size: 40rpx;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 100;
		padding-bottom: 20rpx;
	}

	.bar-name {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.doctor-top-bars {
		white-space: nowrap;
		padding: 0 20rpx 0;
		background-image: linear-gradient(0deg, #2c2d31 0%, #101013 100%);
	}

	.related-doctor-items ,.recommend-doctor-items{
		width: 100%;
	}

	.related-doctor-centent {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		width: 100%;
		padding: 20rpx 0 0;
	}

	.doctor-head-portrait image {
		width: 88rpx;
		height: 88rpx;
		border-radius: 44rpx;
	}

	.checked .doctor-head-portrait {
		width: 104rpx;
		height: 104rpx;
		border: 4rpx solid #d1bf86;
		border-radius: 54rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.doctor-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		color: #f0f0f0;
		font-size: 24rpx;
		padding: 0 30rpx 0;
	}

	.checked {
		font-size: 24rpx;
		font-weight: normal;
		font-stretch: normal;
		color: #d1bf86;
	}

	.doctor-head-portrait-doctorName {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.checkedBarLine {
		height: 30rpx;
	}

	.checkedBar {
		display: block;
		width: 0;
		height: 0;
		border-width: 30rpx;
		border-style: solid;
		border-color: transparent #d1bf86 transparent transparent;
		transform: rotate(90deg);
		margin-top: -15rpx;
	}

	.end-cont {
		display: none;
	}

	.dis {
		display: block;
	}

	.doctor-information {
		background-repeat: no-repeat;
		background-size: 100% 100%;
		padding: 0 0 20rpx 45rpx;
		background-color: #222222;
	}

	.doctor-case {
		padding-top: 130rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
	}

	.doctor-name {
		font-size: 60rpx;
		color: #d1bf86;
		margin-bottom: 24rpx;
	}

	.post {
		width: 235rpx;
		color: #d1bf86;
		line-height: 36rpx;
		font-size: 26rpx;
		margin-bottom: 35rpx;
	}

	.all-title {
		color: #C0C0C0;
		line-height: 36rpx;
		font-size: 20rpx;
		margin-bottom: 45rpx;
	}

	.be-good-at {
		font-size: 28rpx;
		line-height: 30rpx;
		color: #d1bf86;
		margin-bottom: 16rpx;
	}

	.be-good-at-item {
		width: 190rpx;
		line-height: 30rpx;
		font-size: 22rpx;
		color: #C0C0C0;
		margin-bottom: 44rpx;
	}

	.case-list {
		width: 100%;
		
		padding-bottom: 30rpx;
	}
	

	.case-all-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		width: 100%;
		white-space: normal;
	}
	.case-item{
		width: 210rpx;
		margin-right: 10rpx;
		height: 280rpx;
	}
	.case-item image{
		width: 210rpx;
		height: 210rpx;
		border-radius: 16rpx;
	}
	.case-explain{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 24rpx;
		color: #FFFFFF;
		font-weight: lighter;
	}


	/* 推荐医生 */
	.recommend-doctor-items {
		background-color: #111111;
		padding: 30rpx 0;
	}
	.recommend-doctor-items-content{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		width: 100%;
		font-size: 24rpx;
		color: #FFFFFF;
		
	}
	.recommend-doctor-name{
		padding: 0 30rpx;
		margin: 30rpx 0;	
		line-height: 30rpx;
		word-break:keep-all; /* 不换行 */
		white-space:nowrap; /* 不换行 */
		position: relative;
	}
	.item-name{
		width: auto;
		text-align: center;
	}

	.checkedDoctor {
		font-size: 32rpx;
		line-height: 30rpx;
		display: flex;
		flex-direction: column;
	}

	.checkedLine {
		height: 4rpx;
		width: 60%;
		background-color: #FFFFFF;
		/* border-bottom: 4rpx solid #d1bf86; */
		position: absolute;
		bottom: -20rpx;
		left: 0;
		z-index: 9;
		left: 20%;
	}

	.recommend-doctor-introduce {
		padding:0 30rpx;
		background-image: linear-gradient(0deg, #2c2d31 0%, #101013 100%);
		color: #FFFFFF;
	}

	.doctor-swiper {
		color: #FFFFFF;
		height: 960rpx;
	}

	.swiper-item {
		background-color: #202020;
		padding: 30rpx 40rpx;
		margin-top: 20rpx;
		border-radius: 24rpx;
	}

	.head-portrait-name-introduce-workingYears-case-consult {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
	}

	.head-portrait image {
		height: 120rpx;
		width: 120rpx;
		border-radius: 60rpx;
	}

	.head-portrait-name-introduce-workingYears-case-consult .name {
		font-size: 32rpx;
	}

	.name-introduce,
	.workingYears-case {
		display: flex;
		align-items: baseline;
		margin-bottom: 10rpx;
	}

	.introduce,
	.workingYears-case .case {
		margin-left: 10rpx;
	}

	.consult {
		border: 2rpx solid #cfbe85;
		padding: 10rpx 30rpx;
		border-radius: 10rpx;
		color: #cfbe85;
	}

	.beGoodAt-viewpoint {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		font-size: 24rpx;

	}

	.viewpoint {
		width: 360rpx;
		height: 36rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}

	.beGoodAt text {
		color: #e85c9e;
		font-size: 20rpx;
		border-radius: 5rpx;
		margin-right: 10rpx;
		border: 1rpx solid #e85c9e;
		text-align: center;
		line-height: 24rpx;
		height: 24rpx;
		padding: 0 5rpx;
	}

	.viewpoint text {
		height: 22rpx;
		border-radius: 5rpx;
		border: 1rpx solid #689efb;
		font-size: 20rpx;
		color: #689efb;
		padding: 0 5rpx;
		line-height: 24rpx;
		margin-right: 10rpx;
	}

	.doctor-recommend-product,
	.hot-product {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		padding: 10rpx;
		margin-bottom: 20rpx;
	}

	.doctor-recommend-product .recommend-content,
	.hot-recommend-content {
		width: 320rpx;
		height: 30rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}

	.order-price {
		display: flex;
	}

	.doctor-recommend-product .recommend-content text {
		display: inline-block;
		width: 30rpx;
		height: 30rpx;
		text-align: center;
		line-height: 30rpx;
		border-radius: 5rpx;
		background-color: #ff7b1a;
	}

	.hot-recommend-content text {
		display: inline-block;
		width: 30rpx;
		height: 30rpx;
		text-align: center;
		line-height: 30rpx;
		border-radius: 5rpx;
		background-color: #da129f;
	}

	/* 拜托了医生 */
	.please-doctor {
		background-image: linear-gradient(0deg, #2c2d31 0%, #101013 100%);
		color: #FFFFFF;
	}

	.please-doctor-content {
		padding-bottom: 20rpx;
	}

	.please-doctor-title {
		padding: 50rpx 32rpx 20rpx;
		color: #d1bf86;
		font-size: 56rpx;
	}

	.please-doctor-title-line {
		padding: 0 20rpx;
	}

	.please-doctor-title-line view {
		border-bottom: 2rpx solid #000000;
	}

	.please-doctor-all-name {
		display: flex;
		justify-content: space-around;
		font-size: 24rpx;
		color: #FFFFFF;
		line-height: 30rpx;
		align-items: baseline;
		padding: 30rpx 0 0;
	}

	.please-doctor-introduce {
		padding: 0 20rpx 20rpx;
	}
</style>
