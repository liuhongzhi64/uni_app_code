<template>
	<view class="doctor">
		<!-- https://xcx.hmzixin.com/upload/images/3.0/bullion.jpg下面的横杆 -->
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
					<view class="end-cont" :class="{dis:btnnum == index}" v-for="(items,index) in doctorList" :key="index">
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
												<text v-for="(item,index) in doctorInformationList.goods_project" :key='index'>
													{{item}} 、
												</text> 
											</view>
											<!-- 医生视频 -->
											<view class="case-list">
												<scroll-view class="case-items" scroll-x="true">
													<view class="case-all-item">
														<view class="case-item" v-for="(i,k) in doctorInformationList.video" :key='k'
														 @tap='playVideo(i.pivot)'>
															<image class="image" :src="requestUrl+i.cover_img" mode=""></image>
															<image class="pay_btn" 
															src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" mode="widthFix"></image>
															<view class="case-explain"> {{i.name}} </view>
														</view>
													</view>
												</scroll-view>
											</view>
										</view>

									</view>
								</view>
								<view class="recommend-all-content" >
									<!-- 医生中心分类 -->
									<view class="recommend-doctor-classfiy">
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
									 v-for="(i,index) in doctorNameList"
									 :key="index">
										<view class="recommend-doctor-swiper" >
											<swiper class="doctor-swiper" 
											 indicator-dots 
											 indicator-active-color="#ffffff"
											 :class="[doctorListLength>2?'doctor-swiper':'doctor-swiper-min']">
												<swiper-item 
												 v-for="(item,index) in particularDoctorList" 
												 :key='index'>
													<view class="swiper-item" v-for="(i,k) in item" :key='k'>
														<view class="swiper-item-content">	
															<view class="item-top-content" @tap='goToDoctor(i.id,requestUrl+i.heading)'>
																<view class="head-portrait">
																	<image :src="requestUrl+i.heading" mode=""></image>
																</view>
																<view class="middle-content">
																	<view class="middle-doctor-name">
																		{{i.name}} <text>{{i.zhicheng}}</text>
																	</view>
																	<view class="employed_time-case_num">
																		<view class="employed_time"> 从业经验:{{Math.round(i.employed_time/31104000)}}年</view>
																		<view class="case_num">案列数:{{i.case_num}}</view>
																	</view>																
																	<view class="goods_category">
																		<view class="goods_category-title">擅长</view>
																		<text class='goods_category-item' v-for="(j,index) in i.goods_category" :key='index'>
																			{{j}} <text :class="{end_cont:index+1 == i.goods_category.length}">、</text>
																		</text>
																	</view>
																	<view class="doctor_view">
																		<view class="doctor_view_content">
																			<view class='doctor_view_title'>观点</view>
																			<text class="view_content">{{i.view}}</text>
																		</view>																	
																	</view>														
																</view>	
															</view>
															<view class="consult" @tap='goToConsult'>咨询</view>
														</view>
														<view class="recommended_goods" @tap='gotoGoods(i.recommended_goods.id,i.encrypted_id)'
														 v-if="Object.values(i.recommended_goods).length>0">
															<view class="goods_left">
																<view class="goods_title">推</view>
																<view class="gooss_content">{{i.recommended_goods.goods_name}}</view>
															</view>
															<view class="goods_right">
																<text class="sale_weight">
																	{{i.recommended_goods.sale_weight}}人预约
																</text>
																<text class="sale_price"> <text>￥</text> {{i.recommended_goods.sale_price}}</text>
															</view>
														</view>		
														<view class="is_hot" @tap='gotoGoods(i.is_hot.id,i.encrypted_id)'
														 v-if="Object.values(i.is_hot).length>0">
															<view class="goods_left">
																<view class="is_hot_title">热</view>
																<view class="gooss_content">{{i.is_hot.goods_name}}</view>
															</view>
															<view class="goods_right">
																<text class="sale_weight">
																 {{i.is_hot.sale_weight}}人预约
																</text>
																<text class="sale_price"> <text>￥</text> {{i.is_hot.sale_price}}</text>
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
																 v-for="(i,k) in pleaseClassfiy" :key='k' 
																 :class="{checkedDoctor :btnPleaseDoctorNum == k}"
																  @tap="changePleaseDoctor(k,i.id)">
																	<view class="item-name"> {{ i.name }} </view>
																	<view :class="{checkedLine :btnPleaseDoctorNum == k}"></view>
																</view>
															</view>											
														</scroll-view>
													</view>
													<view class="please-doctor-introduce end-cont" 
													 :class="{dis:btnPleaseDoctorNum == k}" v-for="(i,k) in pleaseClassfiy"
													 :key="k">
														<view class="goods_content">
															<doctor 
															 :doctorList="pleaseDoctorList" 
															 :requestUrl="requestUrl" 
															 @collectLike='collectLike'
															  @cancelLike='cancelLike'
															 :paddingLR = 'paddingLR'>
															</doctor>
														</view>
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
		
		<!-- 定位的医生中心 -->
		<view class="fixed-classfiy" :style="[{'top':menuBottom+10+'px'}]" v-if="showDoctor">
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
		
		<!-- 拜托了医生的导航条 -->
		<view class="fixed-classfiy" :style="[{'top':menuBottom+10+'px'}]" v-if="isShowPlease">
			<scroll-view class="recommend-doctor-items" scroll-x="true">
				<view class="recommend-doctor-items-content">
					<view class="recommend-doctor-name"
					 v-for="(i,k) in pleaseClassfiy" :key='k' 
					 :class="{checkedDoctor :btnPleaseDoctorNum == k}"
					  @tap="changePleaseDoctor(k,i.id)">
						<view class="item-name"> {{ i.name }} </view>
						<view :class="{checkedLine :btnPleaseDoctorNum == k}"></view>
					</view>
				</view>											
			</scroll-view>
		</view>	
	</view>
</template>

<script>
	import doctor from '../../components/doctorShow.vue'
	export default {
		components: {
			doctor,
		},
		data() {
			return {
				text:['1','2','3'],
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				btnnum: 0,
				doctorList: [{name:'医生名字'}],				
				doctorInformationList: [],
				doctorNameList: [],
				btndoctornum: 0,
				particularDoctorList: [], //医生列表	
				doctorListLength:0,
				pleaseClassfiy:[],//拜托了医生分类
				btnPleaseDoctorNum: 0,
				pleaseDoctorList: [], //拜托了医生
				requestUrl:'',
				paddingLR:30,//拜托医生的左右边距
				showDoctor:false,
				isShowPlease:false
			}
		},
		onPageScroll:function(event){
			// console.log(event.scrollTop)
			let that = this
			if( event.scrollTop >=800 && event.scrollTop <1399 && that.doctorListLength <= 2  ){
				that.showDoctor = true
				that.isShowPlease =false
			}
			else if( event.scrollTop >=800 && event.scrollTop <1599 && that.doctorListLength > 2 ){
				that.showDoctor = true
				that.isShowPlease =false
			}
			else if( event.scrollTop > 1400 && that.doctorListLength <= 2 ){
				that.showDoctor = false
				that.isShowPlease =true
			}
			else if( event.scrollTop > 1600 && that.doctorListLength > 2 ){
				that.showDoctor = false
				that.isShowPlease =true
			}
			else if( event.scrollTop < 799 ){
				that.showDoctor = false
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
			that.getpleaseClassfiy()
		},
		onReady() {
			let that = this;
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
				that.menuTop = 20
				that.menuHeight = 30
				that.menuLeft = 278
				that.menuBottom = 50
			}			
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
			// 拜托了医生分类
			getpleaseClassfiy:function(){
				let that = this
				let dataInfo = {
					interfaceId:'video_category'
				}
				that.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.pleaseClassfiy = data
						that.changePleaseDoctor(0,data[0].id)
					}
				})
			},
			// 点击头部的明星医生
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
						// console.log(data)
					}
				})
			},
			// 点击播放视频
			playVideo:function(pivot){
				// console.log(pivot)
				let doctorId = pivot.doctor_id
				let videoId = pivot.video_id
				console.log('点击了id为'+videoId+'的视频'+',和医生id为'+doctorId)
				// uni.navigateTo({
				// 	url: `/pages/diary/diary_video?path=${path}`,
				// })
			},
			// 医生主页
			goToDoctor:function(doctorId,heading){
				uni.navigateTo({
					url: `/pages/doctor/doctor_detail?id=${doctorId}&&heading=${heading}`,
				})
			},
			// 咨询
			goToConsult:function(){
				uni.navigateTo({
					url: `/pages/consultation/consultation`,
				})
			},
			// 点击商品
			gotoGoods: function(id) {
				uni.navigateTo({
					url: `/pages/goods/goods_detail?sku_id=${id}&encrypted_id=${encrypted_id}`,
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
						console.log(data)
						that.particularDoctorList = data
						that.particularDoctorList = that.group(that.particularDoctorList, 3)
						that.doctorListLength = that.particularDoctorList[0].length
					}
				})							
			},
			// 点击拜托医生
			changePleaseDoctor: function(index,id) {
				let that = this
				this.btnPleaseDoctorNum = index
				let doctorId = id
				let dataInfo = {
					interfaceId:'video',
					category_id:doctorId
				}
				that.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.pleaseDoctorList = data
					}
				})
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
			// 点赞
			collectLike:function(id,index){
				let that = this
				let videoId = id
				let data = {
					interfaceId: 'video_collect',
					video_id :videoId,
					status:'0'
				}
				this.request.uniRequest("doctor", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {	
						that.pleaseDoctorList[index].is_collect=1
						that.pleaseDoctorList[index].collect +=1
						uni.showToast({
							title: '已点赞',
							duration: 1000
						})
					}
				})
			},
			// 取消点赞
			cancelLike:function(id,index){
				let videoId = id
				let that = this
				let data = {
					interfaceId: 'video_collect',
					video_id :videoId,
					status:'1'
				}
				this.request.uniRequest("doctor", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.pleaseDoctorList[index].is_collect=0
						that.pleaseDoctorList[index].collect -=1
						uni.showToast({
							title: '已取消点赞',
							duration: 1000
						})
					}
				})
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
		height: 280rpx;
		padding-bottom: 30rpx;
	}
	.case-items{
		height: 280rpx;
	}

	.case-all-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 280rpx;
		width: 100%;
		white-space: normal;
	}
	.case-item{
		width: 210rpx;
		margin-right: 10rpx;
		height: 280rpx;
		position: relative;
	}
	.case-item:last-child{
		padding-right: 30rpx;
	}
	.pay_btn{
		position: absolute;
		top: 75rpx;
		left: 75rpx;
		width: 60rpx;
	}
	.case-item .image{
		width: 210rpx;
		height: 210rpx;
		border-radius: 16rpx;
		border: 1rpx solid #FFFFFF;
	}
	.case-explain{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 24rpx;
		color: #FFFFFF;
		font-weight: lighter;
		padding: 0 8rpx;
	}
	
	.recommend-doctor-classfiy{
		padding: 30rpx 0 0;
		background-color: #111111;
	}

	/* 推荐医生 */
	.recommend-doctor-items {
		height: 45rpx;
		width: 100%;
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
		height: 100%;	
		line-height: 30rpx;
		word-break:keep-all; /* 不换行 */
		white-space:nowrap; /* 不换行 */
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
		height: 100%;
	}

	.checkedLine {
		border-bottom: 4rpx solid #d1bf86;
		margin-top: 10rpx;
	}

	.recommend-doctor-introduce {
		padding:0 30rpx;
		background-image: linear-gradient(0deg, #2c2d31 0%, #101013 100%);
		color: #FFFFFF;
	}

	.doctor-swiper {
		color: #FFFFFF;
		height: 1480rpx;
	}
	.doctor-swiper-min{
		height: 990rpx;
		color: #FFFFFF;
	}

	.swiper-item {
		background-color: #2A2A2A;
		padding: 30rpx 40rpx;
		margin-top: 20rpx;
		border-radius: 24rpx;
	}

	.swiper-item-content {
		font-size: 24rpx;
		position: relative;
	}
	.item-top-content{
		display: flex;
		justify-content: space-between;
	}

	.head-portrait image {
		height: 120rpx;
		width: 120rpx;
		border-radius: 60rpx;
	}
	.middle-content{
		flex: 1;
		margin: 0 10rpx;
	}
	.middle-doctor-name{
		color: #ffffff;
		font-size: 34rpx;
		width: 80%;
	}
	.middle-doctor-name text{
		font-size: 26rpx;
		margin-left: 10rpx;
	}
	.employed_time-case_num{
		width: 70%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #F0F0F0;
		font-size: 24rpx;
		margin-top: 15rpx;
		margin-bottom: 25rpx;
	}
	
	.goods_category{
		font-size: 24rpx;
		display: flex;
		flex-wrap: wrap;
		color: #999999;
	}
	.goods_category-title{
		width: 50rpx;
		line-height: 24rpx;
		border-radius: 5rpx;
		border: solid 1rpx #e85c9e;
		color: #e85c9e;
		font-size: 20rpx;
		margin-right: 10rpx;
		text-align: center;
	}
	.end_cont{
		display: none;
	}
	.doctor_view{
		width: 100%;	
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-size: 24rpx;
		color: #999999;
		margin-top: 10rpx;
	}
	.doctor_view_content{
		display: flex;
	}
	.doctor_view_title{
		width: 50rpx;
		line-height: 24rpx;
		border-radius: 5rpx;
		border: solid 1rpx #689efb;	
		font-size: 20rpx;
		color: #689efb;
		text-align: center;
		margin-right: 10rpx;
	}
	
	.recommended_goods{
		width: 570rpx;
		padding: 0 20rpx;
		height: 56rpx;
		line-height: 56rpx;
		background-color: #202020;
		border-radius: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		margin-top: 27rpx;
		margin-bottom: 15rpx;
	}
	.goods_left{
		display: flex;
		align-items: center;
	}
	.goods_title{
		width: 30rpx;
		height: 30rpx;
		line-height: 30rpx;
		background-color: #ff7b1a;
		border-radius: 5rpx;
		text-align: center;
		margin-right: 10rpx;
	}
	.gooss_content{
		width: 90%;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-size: 24rpx;
		line-height: 30rpx;
	}
	.goods_right{
		display: flex;
		align-items: center;
	}
	
	.sale_weight{
		color: #999999;
		margin-right: 10rpx;
		min-width: 100rpx;
		text-align: right;
	}
	.sale_price{
		font-size: 28rpx;
		color: #cfbe85;
		
	}
	.sale_price text{
		font-size: 24rpx;
	}
		
	.is_hot{
		width: 570rpx;
		padding: 0 20rpx;
		height: 56rpx;
		line-height: 56rpx;
		background-color: #202020;
		border-radius: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
	}
	.is_hot_title{
		width: 30rpx;
		line-height: 30rpx;
		height: 30rpx;
		background-color: #da129f;
		border-radius: 5rpx;
		text-align: center;
		margin-right: 10rpx;	
	}

	.consult{
		width: 110rpx;
		line-height: 46rpx;
		border-radius: 10rpx;
		border: 2rpx solid #cfbe85;
		color: #cfbd85;
		font-size: 24rpx;
		text-align: center;
		position: absolute;
		right: 0;
		top:  0;
		z-index: 9;
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
	.please-doctor-all-name .recommend-doctor-items-content , .fixed-classfiy .recommend-doctor-items-content{
		display: flex;
		justify-content: flex-start;
	}

	.please-doctor-introduce {
		padding-top: 34rpx;
	}
	
	.fixed-classfiy{
		position: fixed;
		padding: 30rpx 0 0;
		background-color: #111111;
		width: 100%;
	}
</style>
