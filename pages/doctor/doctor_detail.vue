<template>
	<view class="doctor_detail">

		<view class="doctor-top-bar">
			<view class="bar-name">
				<view :style="[{'height':menuHeight+'px','margin-top':menuTop+'px','border-radius':menuHeight/2+'px','line-height':menuHeight+'px'}]">明星医生</view>
			</view>
		</view>

		<view class="content" :style="[{'padding-top':menuBottom+10+'px'}]">
			<view class="doctor-top-bars">
				<scroll-view class="related-doctor-items" scroll-x="true">
					<view class="related-doctor-centent">
						<view id="doctor-item" class="doctor-item" v-for="(i,k) in doctorList" :key='k' :class="{checked :btnnum == k}"
						 @tap="change(k)">
							 <view class="doctor-head-portrait-doctorName">
								<!-- 医生 -->
								<view class="doctor-head-portrait">
									<image :src="i.url" mode=""></image>
								</view>
								<!-- 医生名字 -->
								<view class="doctorName">
									<view class="doctor-item-content"> {{i.doctorName}} </view>
								</view>
							 </view>
							 <view class="checkedBarLine">
							 	<view  :class="{checkedBar :btnnum == k}" ></view>
							 </view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="end-cont" :class="{dis:btnnum == index}" v-for="(items,index) in doctorAllList" :key="index">

				<scroll-view scroll-y class="Details-of-the-doctor">
					<text v-if="doctorInformationList.length==0">{{items.doctorName}}</text>
					<template>
						<view class="doctor-content" v-for="(i,k) in doctorInformationList" :key="k">
							<view class="doctor-information" :style="{backgroundImage:'url('+i.doctorHeadPortrait+')'}">
								<view class="doctor-case">
									<view class="doctor-name"> {{i.doctorName}} </view>
									<view class="post"> {{i.post}} </view>
									<view class="all-title">
										<view class="title-item" v-for="(i,k) in i.title" :key='k'> . {{i}} </view>
									</view>
									<view class="be-good-at"> 擅长项目 </view>
									<view class="be-good-at-item"> {{i.beGoodAt}} </view>
									
									<view class="case-list">
										<scroll-view class="case-items" scroll-x="true">
											<view class="case-all-item" >
												<view class="case-item" v-for="(i,k) in i.case" :key='k' :data-name="i.content" @tap="gotoGoods">
													<image :src="i.url" mode=""></image>
													<view class="case-explain"> {{i.content}} </view>
												</view>
												
											</view>
										</scroll-view>
									</view>
								</view>
								
							</view>
						</view>
						<view class="recommend-content" v-if="doctorInformationList.length!=0">
							<view class="recommend-doctor">
								<view class="recommend-doctor-name" v-for="(i,k) in doctorNameList" :key='k' :class="{checkedDoctor :btndoctornum == k}"
						 @tap="changeDoctor(k)">
									{{ i }}
									<view :class="{checkedLine :btndoctornum == k}"></view>
								</view>
							</view>
							<!-- 相关医生 -->
							<view class="recommend-doctor-introduce end-cont" 
							:class="{dis:btndoctornum == index}" v-for="(item,index) in recommendDoctorList" :key="index">
								<text v-if="particularDoctorList.length==0">{{item.name}}</text>
								<view class="recommend-doctor-swiper" v-if="particularDoctorList.length!=0">
									<swiper id="doctor-swiper" class="doctor-swiper" indicator-dots indicator-active-color="#ffffff" >
										<swiper-item v-for="(i,index) in particularDoctorList" :key='index'>
											<view class="swiper-item" v-for="(i,k) in i.swiperList" :key='k'>
												<view class="head-portrait-name-introduce-workingYears-case-consult">
													<view class="head-portrait">
														<image :src="i.url" mode=""></image>
													</view>
													<view class="name-introduce-workingYears-case">
														<view class="name-introduce"> 
															<view class="name"> {{i.name}} </view>
															<view class="introduce"> {{i.introduce}} </view>
														</view>
														<view class="workingYears-case">
															<view class="workingYears"> 从业经验: {{i.workingYears}}年 </view>
															<view class="case"> 案列数： {{i.case}} </view>
														</view>
													</view>
													<view class="consult"> 咨询 </view>
												</view>
												
												<view class="beGoodAt-viewpoint">
													<view class="beGoodAt"> <text>擅长</text> {{i.beGoodAt}} </view>
													<view class="viewpoint"> <text>观点</text> {{i.viewpoint}} </view>
												</view>
												
												<view class="doctor-recommend-product" v-for="(i,k) in i.product" :key='k'>
													<view class="recommend-content">
														<text>推</text>{{i.content}}
													</view>
													<view class="order-price">
														<view class="order"> {{i.order}}人预约 </view>
														<view class="price"> ￥ {{i.price}} </view>
													</view>
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
							<view class="please-doctor" v-if="particularDoctorList.length!=0">
								<!-- 标题 -->
								<view class="please-doctor-title"> 拜托了医生 </view>
								<view class="please-doctor-title-line"> <view></view> </view>
								<!--  -->
								<view class="please-doctor-content">
									<view class="please-doctor-all-name">
										<view class="please-doctor-name" v-for="(i,k) in doctorNameList" :key='k' :class="{checkedDoctor :btnPleaseDoctorNum == k}" @tap="changePleaseDoctor(k)"> {{ i }}
											 <view :class="{checkedLine :btnPleaseDoctorNum == k}"></view>
										</view>
									</view>
									<view class="please-doctor-introduce end-cont"
									 :class="{dis:btnPleaseDoctorNum == index}" 
									 v-for="(item,index) in recommendDoctorList" :key="index">
										<text >{{item.name}}</text>
										<view class="please-doctor-layout" v-if="pleaseDoctorLeftList.length!=0&&pleaseDoctorRightList.length!=0">
											<view class="please-doctor-left-list">
												左边
												<view class="list-item" v-for="(i,k) in pleaseDoctorLeftList" :key='k'>
													<view class="porduct-images"> <image :src="i.url" mode=""></image> </view>
													<view class="porduct-title"> {{i.title}} </view>
													<view class="product-label">
														<view class="label-item"  v-for="(i,k) in i.label" :key='k'> {{i}}</view>
													</view>
													<view class="doctor-HeadPortrait-name-like">
														<view class="doctor-HeadPortrait-name">
															<view class="doctor-HeadPortrait">
																<image :src="i.doctorHeadPortrait" mode=""></image>
															</view>
															<view class="please-doctor-name"> {{i.doctorName}} </view>
														</view>
														<view class="please-doctor-like">
															<view class="please-doctor-like-image">
																<image src="../../static/images/like.png" mode=""></image>
															</view>
															<text>{{i.like}}</text>
														</view>
													</view>
												</view>
											</view>
											<view class="please-doctor-right-list">
												内容
												<view class="list-item" v-for="(i,k) in pleaseDoctorRightList" :key='k'>
													<view class="porduct-images"> <image :src="i.url" mode=""></image> </view>
													<view class="porduct-title"> {{i.title}} </view>
													<view class="product-label">
														<view class="label-item"  v-for="(i,k) in i.label" :key='k'> {{i}}</view>
													</view>
													<view class="doctor-HeadPortrait-name-like">
														<view class="doctor-HeadPortrait-name">
															<view class="doctor-HeadPortrait">
																<image :src="i.doctorHeadPortrait" mode=""></image>
															</view>
															<view class="please-doctor-name"> {{i.doctorName}} </view>
														</view>
														<view class="please-doctor-like">
															<view class="please-doctor-like-image">
																<image src="../../static/images/like.png" mode=""></image>
															</view>
															<text>{{i.like}}</text>
														</view>
													</view>
												</view>
											</view>
										</view>
										
									</view>
									
								</view>
							</view>
						</view>
					</template>
				</scroll-view>

			</view>
		</view>

	</view>
</template>

<script>
	export default {
		components: {
			
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
				doctorNameList:['眼部','鼻部','脂肪填充','胸部','纤体瘦身','线雕'],
				btndoctornum:0,
				recommendDoctorList:[
					{
						name:'眼部'
					},
					{
						name:'鼻部'
					},
					{
						name:'脂肪填充'
					},
					{
						name:'胸部'
					},
					{
						name:'纤体瘦身'
					},
					{
						name:'线雕'
					}
				],
				
				particularDoctorList:[ ],//医生列表	
				btnPleaseDoctorNum:0,
				pleaseDoctorLeftList:[],//拜托了医生左边
				pleaseDoctorRightList:[],//拜托了医生左边
			}
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
			
			that.change()
			this.changeDoctor()
			this.changePleaseDoctor()
		},
		methods: {
			change: function(e = 0) {
				this.btnnum = e
				if (e == 0) {
					this.doctorInformationList = [{
						doctorHeadPortrait: 'https://wxmall.hmzixin.com/upload/2018/06/15/20180615134007961.jpg', //医生的背景图片
						doctorName: '陈杨',
						post: '华美紫馨眼部整形及 修复中心主任', //职位
						title: ['华美紫馨眼部整形及修复中心学科带头人', '华美紫馨鼻整形及修复中心首席专家', '中国医师协会美容与整形医师分会会员', '中国整形美容协会鼻整形分会委员', '美国射极峰公司亚洲首批特聘高级专家'], //称谓
						beGoodAt: '双眼皮、手术隆鼻、面部综合塑形', //擅长项目
						case: [
							{
							url: '../../static/images/19.png',
							content: '华美紫馨薇拉美塑Ⅲ—美体最多两排显示省略号...'
							},
							{
							url: '../../static/images/20.png',
							content: '华美紫馨薇拉美塑Ⅲ—美体最多两排显示省略号...'
							},
							{
							url: '../../static/images/19.png',
							content: '华美紫馨薇拉美塑Ⅲ—美体最多两排显示省略号...'
							},
							{
							url: '../../static/images/20.png',
							content: '华美紫馨薇拉美塑Ⅲ—美体最多两排显示省略号...'
							},
						] //案例
					}]
					
				} else {
					this.doctorInformationList = []
				}
			},
			// 点击商品
			gotoGoods: function(e) {
				let goods = e.currentTarget.dataset.name
				uni.navigateTo({
					url: `/pages/goods/goods_detail?goods=${goods}`,
				})
			},
			changeDoctor:function(e=0){
				this.btndoctornum = e
				if(e==0){
					this.particularDoctorList = [
						{
							swiperList:[	
								{
									url:'../../static/images/19.png',
									name:'邱伟',
									introduce:'眼部整形带头人',//简介
									workingYears:8,//工作时长
									case:12000,//案例
									beGoodAt:'眼部、眼部美容',//擅长
									viewpoint:'尽心尽力服务好每一位求美者，月亮不睡啦……',//观点
									product:[
										{content:'【复合隆胸】华美紫馨TSG十点多……',order:6025,price:36800}
									],//推荐产品
									hot:[
										{content:'【复合隆胸】华美紫馨TSG十点多……',order:6025,price:16800}
									],//热门产品
								},
								{
									url:'../../static/images/20.png',
									name:'宋晓东',
									introduce:'眼部整形带头人',//简介
									workingYears:8,//工作时长
									case:12000,//案例
									beGoodAt:'眼部、眼部美容',//擅长
									viewpoint:'尽心尽力服务好每一位求美者，月亮不睡啦……',//观点
									product:[
										{content:'【复合隆胸】华美紫馨TSG十点多……',order:6025,price:36800}
									],//推荐产品
									hot:[
										{content:'【复合隆胸】华美紫馨TSG十点多……',order:6025,price:16800}
									],//热门产品
								},
							],	
						},	
						{
							swiperList:[	
								{
									url:'../../static/images/19.png',
									name:'宋晓东',
									introduce:'眼部整形带头人',//简介
									workingYears:8,//工作时长
									case:12000,//案例
									beGoodAt:'眼部、眼部美容',//擅长
									viewpoint:'尽心尽力服务好每一位求美者，月亮不睡啦……',//观点
									product:[
										{content:'【复合隆胸】华美紫馨TSG十点多……',order:6025,price:36800}
									],//推荐产品
									hot:[
										{content:'【复合隆胸】华美紫馨TSG十点多……',order:6025,price:16800}
									],//热门产品
								},
							],	
						},
					]
					// console.log(this.particularDoctorList)
				}else{
					this.particularDoctorList = []
				}
			},
			changePleaseDoctor:function(e=0){
				this.btnPleaseDoctorNum = e
				if(e==0){
					this.pleaseDoctorLeftList = [
						{
							url:'https://wxmall.hmzixin.com/upload/2020/06/16/7ac300ee0a4f486292920e38fb680116.jpg',
							title:'我是文章标题，显示两排后就以省略号结束？...',
							label:['眼部美容','眼部'],
							doctorHeadPortrait:'../../static/images/20.png',//医生头像
							doctorName:'程阳',
							like:99
						},
						{
							url:'https://wxmall.hmzixin.com/upload/2020/04/24/0a9569aef2f8e6448684b901d6aa9518.jpg',
							title:'我是文章标题，显示两排后就以省略号结束？...',
							label:['眼部美容','眼部'],
							doctorHeadPortrait:'../../static/images/20.png',//医生头像
							doctorName:'程阳',
							like:99
						},
					]
					
					this.pleaseDoctorRightList = [
						{
							url:'https://wxmall.hmzixin.com/upload/2020/04/24/0a9569aef2f8e6448684b901d6aa9518.jpg',
							title:'我是文章标题，显示两排后就以省略号结束？...',
							label:['眼部美容','眼部'],
							doctorHeadPortrait:'../../static/images/20.png',//医生头像
							doctorName:'程阳',
							like:99
						},
						{
							url:'../../static/images/20.png',
							title:'我是文章标题，显示两排后就以省略号结束？...',
							label:['眼部美容','眼部'],
							doctorHeadPortrait:'../../static/images/20.png',//医生头像
							doctorName:'程阳',
							like:99
						},
						{
							url:'../../static/images/test.jpg',
							title:'我是文章标题，显示两排后就以省略号结束？...',
							label:['眼部美容','眼部'],
							doctorHeadPortrait:'../../static/images/20.png',//医生头像
							doctorName:'程阳',
							like:99
						},
					]
				}else{
					this.pleaseDoctorLeftList = []
					this.pleaseDoctorRightList = []
				}
			}
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

	.related-doctor-items {
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
		/* margin: 0 30rpx; */
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
	.doctor-head-portrait-doctorName{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.checkedBarLine{
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
		/*顺时针旋转90°*/
		margin-top: -30rpx;
	}

	.end-cont {
		display: none;
	}

	.dis {
		display: block;
	}

	.doctor-information {
		/* height: 500rpx; */
		background-repeat: no-repeat;
		background-size: 100% 100%;
		padding: 0 0 20rpx 45rpx;
	}
	.doctor-case{
		padding-top: 130rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
	}
	.doctor-name{
		font-size: 60rpx;
		color: #d1bf86;
		margin-bottom: 24rpx;
	}
	.post{
		width: 235rpx;
		color: #d1bf86;
		line-height: 36rpx;
		font-size: 26rpx;
		margin-bottom: 35rpx;
	}
	.all-title{
		color: #C0C0C0;
		line-height: 36rpx;
		font-size: 20rpx;
		margin-bottom: 45rpx;
	}
	.be-good-at{
		font-size: 28rpx;
		line-height: 30rpx;
		color: #d1bf86;
		margin-bottom: 16rpx;
	}
	.be-good-at-item{
		width: 190rpx;
		line-height: 30rpx;
		font-size: 22rpx;
		color: #C0C0C0;
		margin-bottom: 44rpx;
	}
	.case-list{
		width: 100%;
		white-space: nowrap;
		padding-bottom: 30rpx;
	}
	.case-all-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		width: 100%;
	}
	.case-items{
		width: 100%;
	}
	.case-item image{
		width: 210rpx;
		height: 210rpx;
		border-radius: 16rpx;
	}
	.case-item{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		margin-right: 10rpx;
		color: #f0f0f0;
		font-size: 24rpx;
		white-space: normal;
	}
	.case-explain{
		width: 190rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 24rpx;
	}
	
	/* 推荐医生 */
	.recommend-doctor{
		display: flex;
		justify-content: space-around;
		font-size: 24rpx;
		background-color: #111111;
		color: #FFFFFF;
		line-height: 30rpx;
		align-items: baseline;
		padding: 30rpx 0;
	}
	.checkedDoctor{
		font-size: 32rpx;
		line-height: 30rpx;
	}
	.checkedLine{
		border-bottom: 4rpx solid #d1bf86;
		margin-top: 20rpx;
	}
	.recommend-doctor-introduce{
		padding: 30rpx;
		background-image: linear-gradient(0deg,  #2c2d31 0%,  #101013 100%);
		color: #FFFFFF;
	}
	.doctor-swiper{
		color: #FFFFFF;
		height: 960rpx;
	}
	.swiper-item{
		background-color: #202020;
		padding: 30rpx 40rpx;
		margin-top: 20rpx;
		border-radius: 24rpx;
	}
	.head-portrait-name-introduce-workingYears-case-consult{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
	}
	.head-portrait image{
		height: 120rpx;
		width: 120rpx;
		border-radius: 60rpx;
	}
	.head-portrait-name-introduce-workingYears-case-consult .name{
		font-size: 32rpx;
	}
	.name-introduce,.workingYears-case{
		display: flex;
		align-items: baseline;
		margin-bottom: 10rpx;
	}
	.introduce,.workingYears-case .case{
		margin-left: 10rpx;
	}
	.consult{
		border: 2rpx solid #cfbe85;
		padding: 10rpx 30rpx;
		border-radius: 10rpx;
		color: #cfbe85;
	}
	.beGoodAt-viewpoint{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		font-size: 24rpx;
		
	}
	.viewpoint{
		width: 360rpx;
		height: 36rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}
	.beGoodAt text{
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
	.viewpoint text{
		height: 22rpx;
		border-radius: 5rpx;
		border: 1rpx solid #689efb;
		font-size: 20rpx;
		color: #689efb;
		padding: 0 5rpx;
		line-height: 24rpx;
		margin-right: 10rpx;
	}
	
	.doctor-recommend-product,.hot-product{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		padding: 10rpx;
		margin-bottom: 20rpx;
	}
	.doctor-recommend-product .recommend-content,.hot-recommend-content{
		width: 320rpx;
		height: 30rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	.order-price{
		display: flex;
	}
	.doctor-recommend-product .recommend-content text{
		display: inline-block;
		width: 30rpx;
		height: 30rpx;
		text-align: center;
		line-height: 30rpx;
		border-radius: 5rpx;
		background-color: #ff7b1a;
	}
	.hot-recommend-content text{
		display: inline-block;
		width: 30rpx;
		height: 30rpx;
		text-align: center;
		line-height: 30rpx;
		border-radius: 5rpx;
		background-color: #da129f;
	}
	/* 拜托了医生 */
	.please-doctor{
		background-image: linear-gradient(0deg,  #2c2d31 0%,  #101013 100%);
		color: #FFFFFF;
	}
	.please-doctor-title{
		padding: 50rpx 32rpx 20rpx;
		color: #d1bf86; 
		font-size: 56rpx;
	}
	.please-doctor-title-line{
		padding: 0 20rpx;
	}
	.please-doctor-title-line view{
		border-bottom: 2rpx solid #000000;
	}
	.please-doctor-all-name{
		display: flex;
		justify-content: space-around;
		font-size: 24rpx;
		background-color: #111111;
		color: #FFFFFF;
		line-height: 30rpx;
		align-items: baseline;
		padding: 30rpx 0;
	}
	.please-doctor-layout{
		display: flex;
		padding: 0 30rpx;
		justify-content: space-between;
		align-items: baseline;
	}
	.please-doctor-left-list,.please-doctor-right-list{
		width: 340rpx;
		display: flex;
		flex-direction: column;
	}
	.list-item{
		width: 100%;
		display: flex;
		flex-direction: column;
		font-size: 26rpx;
		margin-bottom: 20rpx;
		background-color: #FFFFFF;
		color: #111111;
		border-radius: 10rpx;
	}
	.list-item .porduct-images{
		width: 100%;
		height: 100%;
	}
	.list-item .porduct-images image{
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
		width: 340rpx;
	}
	.porduct-title{
		font-size: 26rpx;
		font-weight: normal;
		font-stretch: normal;
		color: #111111;
	}
	.porduct-title,.product-label,.doctor-HeadPortrait-name-like{
		padding: 20rpx;
	}
	.product-label,.doctor-HeadPortrait-name-like{
		padding-top: 0;
	}
	.doctor-HeadPortrait-name-like,.doctor-HeadPortrait-name{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.product-label{
		display: flex;
	}
	.label-item{
		margin-right: 10rpx;
		padding: 8rpx 20rpx;
		background-color: #aaaaaa;
		border-radius: 5rpx;
		font-size: 20rpx;
		color: #FFFFFF;
	}
	.doctor-HeadPortrait-name-like .doctor-HeadPortrait-name image{
		width: 46rpx;
		height: 46rpx;
		border-radius: 23rpx;
		margin-right: 10rpx;
	}
	.doctor-HeadPortrait-name .please-doctor-name{
		color: #b2b2b2;
	}
	.please-doctor-like{
		display: flex;
		align-items: center;
		color: #fc4783;
	}
	.please-doctor-like-image{
		background-image: linear-gradient(0deg, #fa3475 0%, #ff6699 100%),  linear-gradient( #f56fb4,  #f56fb4);
		box-shadow: 0rpx 4rpx 10rpx 1rpx rgba(250, 53, 118, 0.5);
		margin-right: 10rpx;
		border-radius: 18rpx;
		width: 36rpx;
		height: 36rpx;
	}
	.please-doctor-like image{
		width: 36rpx;
		height: 36rpx;
		border-radius: 18rpx;
	}
	
</style>
