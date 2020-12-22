<template>
	<view class="doctor_detail">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="doctor_detail_content" :style="[{'padding-top':menuBottom+10+'px','min-height':height-menuBottom-10+'px'}]">
			<scroll-view scroll-y class="detail_content">
				<template>
					<view class="detail_content-all">
						<view class="top-doctor-message" :style="{backgroundImage:'url('+doctorHeadPortrait+')'}">
							<view class="doctor-photos" @tap='gotoPhoto(doctorMessage.id)'>
								医生相册一览 >
							</view>
							<view class="doctor-introduce">
								<view class="doctor-name">Dr. {{doctorMessage.name}}</view>
								<view class="position">{{doctorMessage.zhicheng}}</view>
								<view class="subline"></view>
								<view class="experience-case">
									<view class="experience">从业经验: {{ doctorMessage.employed_y }} 年</view>
									<view class="case">案列数: {{ doctorMessage.case_num }} </view>
								</view>
								<view class="get-title">
									<view class="title-item" v-for="(item,index) in doctorMessage.sign" :key='index'>
										<text class="dot">·</text> <text>{{item}}</text>
									</view>
								</view>

								<view class="doctor-title">
									<view class="top-title">擅长项目</view>
									<view class="goods_project">
										<view class="title-item" v-for="(item,index) in doctorMessage.goods_project" :key='index'>
											{{item}} <text class="project_line">、</text>
										</view>
									</view>

								</view>
								<view class="get-title">
									<view class="top-title">手术特点</view>
									<view class="title-item"> {{doctorMessage.surgery}} </view>
								</view>

							</view>
						</view>
						<!-- 专辑证书 -->
						<view class="doctor-content-item">
							<!-- 个人专辑 -->
							<view class="doctor-item">
								<view class="doctor-item-title">个人专辑</view>
								<view class="doctor-item-list">
									<scroll-view class="product-items" scroll-x="true">
										<view class="product-item-content" v-if="doctorVideo.length>0">
											<view class="productImgs" v-for="(i,k) in doctorVideo" :key='k'>
												<view class="productItems" @tap='goToVideo(i.path)'>
													<image class="cover_img" :src="requestUrl+i.cover_img" mode="widthFix"  ></image>
													<image class="pay_btn" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" mode="widthFix">
													</image>
													<view class="doctor-item-explain" style="width: 210rpx;">{{i.name}}</view>
												</view>
											</view>
										</view>
										<view class="product-item-content" v-else> 暂无相关专辑推荐 </view>
									</scroll-view>
								</view>
							</view>
							<!-- 专业证书 -->
							<view class="doctor-item" v-if="doctorList.length>0">
								<view class="doctor-item-title">个人证书</view>
								<view class="doctor-item-list">
									<scroll-view class="product-items" scroll-x="true">
										<view class="product-item-content">
											<view class="productImgs" v-for="(i,k) in doctorList" :key='k' @tap='certificate(i.doctor_id)'>
												<view class="productItems">
													<image class="doctor_img" :src="requestUrl+i.url" mode="heightFix" ></image>
												</view>
											</view>
										</view>
									</scroll-view>
								</view>
							</view>
						</view>
						<!-- TA的项目 -->
						<view class="doctor-project">
							<view class="doctor-item-title">TA的项目</view>
							<view class="doctor-item-swiper">
								<swiper class="doctor-swiper" indicator-dots indicator-active-color="#f6db93">
									<swiper-item class="doctor-swiper-item" v-for="(item,index) in porductList" :key='index'>
										<view class="project-content">
											<view class="porduct-list" v-for="(i,k) in item" :key='k' @tap='goodsDetail(i.sku_id,i.encrypted_id)'>
												<view class="porduct-items">
													<view class="porduct-item-images">
														<image :src="requestUrl+i.head_img" class="image"></image>
														<image :src="requestUrl+i.spu_icon" class="spu_icon"></image>
													</view>
													<view class="porduct-introduce">
														<view class="product-title"> {{i.goods_name}} </view>
														<view class="label" v-if="i.label.type==0">
															<view class="label-name" v-for="(j,q) in i.label.list":key='q'> {{j}}</view>
														</view>
														<view class="activity" v-if="i.label.type==1">
															<view class="activity-name" v-for="(j,q) in i.label.list":key='q'> 
																{{j}}
															</view>
														</view>
														<view class="porduct-price">
															<view class="porduct-original-cost"> <text>￥</text>{{i.sale_price}} </view>
															<view class="porduct-vip-price" v-if="i.member.price>0">
																<view class="vip" v-if="i.member.member_title">{{i.member.member_title}}</view>
																<view class="vip" v-else>钻卡</view>
																<view class="vip-price">￥{{i.member.price}}</view>
															</view>
														</view>
														<view class="subscribe-goodReputation">
															<!-- 预约 -->
															<view class="subscribe"> {{i.sales}}预约 </view>
															<!-- 好评 -->
															<view class="goodReputation"> {{i.rate}}%好评 </view>
														</view>
													</view>
												</view>
											</view>
										</view>
									</swiper-item>
								</swiper>
							</view>
						</view>
						<!-- 拜托了医生 -->
						<view class="doctor-projects">
							<view class="doctor-item-title">拜托了医生</view>
							<view class="all-please-doctor">
								<doctor :doctorList="doctorVideo" :requestUrl="requestUrl"
								 :paddingLR='paddingLR' :heading='doctorHeadPortrait' 
								 @collectLike='collectLike'
								  @cancelLike='cancelLike'
								 :doctorname='doctorname' >
								</doctor>
							</view>
						</view>
						<view class="doctor-project">
							<view class="doctor-item-title">用户日记</view>
							<view class="doctor-projects-item">
								<diary :diaryList="diaryList" :requestUrl='requestUrl' @collect_diary='collect_diary' @cancel_like='cancel_like'></diary>
							</view>
						</view>
					</view>
				</template>
			</scroll-view>
		</view>

		<view class="footer">
			<view class="mar" v-if="is_doctor_collect == 0"  @tap='collectdiary(is_doctor_collect,doctor_id)'>
				<image class="icon-img" src="https://xcx.hmzixin.com/upload/images/3.0/collect.png"></image>收藏
			</view>
			<view class="mar" v-else @tap='collectdiary(is_doctor_collect,doctor_id)'>
				<image class="icon-img" src="https://xcx.hmzixin.com/upload/images/3.0/collect_hover.png"></image>
				<text class="collect_hover">收藏</text>
			</view>
			<view class="mar" @tap='goToConsult'>
				<image class="icon-img" src="https://xcx.hmzixin.com/upload/images/3.0/icon_consult.png"></image>咨询
			</view>
			<view class="mar" @tap='share(doctor_id)'>
				<image class="icon-img" src="https://xcx.hmzixin.com/upload/images/3.0/icon_share.png"></image>分享
			</view>
		</view>

	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import diary from '../../components/diary.vue';
	import doctor from '../../components/doctorShow.vue'
	export default {
		components: {
			topBar,
			doctor,
			diary
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
				title: '医生个人主页',
				requestUrl: '',
				doctorHeadPortrait: '', //医生的背景图片
				doctorMessage: {},
				doctorVideo: [], //这是专辑和拜托医生
				doctorList: [], //医生相册
				diaryList: [], //日记
				porductList: [],
				doctor_id:'',
				is_doctor_collect:0,
				paddingLR:0,
				heading:'',
				doctorname:''
			}
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			let doctorId = option.id
			let heading = option.heading
			that.doctor_id = option.id
			// console.log(doctorId,heading)
			that.getDetail(doctorId)
			that.getDoctormessage(doctorId)
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
				that.menuTop = 20
				that.menuHeight = 30
				that.menuLeft = 278
				that.menuBottom = 50
			}
		},
		methods: {
			getDetail: function(doctorId) {
				let that = this
				let dataInfo = {
					interfaceId: 'info',
					doctor_id: doctorId
				}
				this.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000) {
						let data = res.data.data						
						that.doctorHeadPortrait = that.requestUrl + data[0].heading
						that.doctorname = data[0].name
						that.doctorMessage = data[0] //医生信息
						that.is_doctor_collect = data.is_doctor_collect
						// console.log(that.doctorMessage)
						that.doctorVideo = data.video //这是专辑和拜托医生
						that.diaryList = data.diary //日记
						that.porductList = data.goods //商品
						that.porductList = that.group(that.porductList, 3)
						// console.log(that.porductList)
					} else {
						this.request.showToast(res.data.message);
					}
				})
			},
			// 获取证书
			getDoctormessage: function(doctorId) {
				let that = this
				let dataInfo = {
					interfaceId: 'docker_img',
					doctor_id: doctorId,
					type: '1'
				}
				this.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000) {
						let data = res.data.data
						that.doctorList = data
					} else {
						this.request.showToast(res.data.message);
					}
				})
			},
			gotoPhoto: function(doctorId) {
				uni.navigateTo({
					url: `/pages/doctor/doctor_photo?id=${doctorId}`,
				})
			},
			// 证书
			certificate: function(doctorId) {
				uni.navigateTo({
					url: `/pages/doctor/doctor_certificate?id=${doctorId}`,
				})
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
						that.doctorVideo[index].is_collect=1
						that.doctorVideo[index].collect +=1
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
						that.doctorVideo[index].is_collect=0
						that.doctorVideo[index].collect -=1
						uni.showToast({
							title: '已取消点赞',
							duration: 1000
						})
					}
				})
			},
			// 收藏
			collect_diary:function(id,index){
				let that = this
				let data = {
					interfaceId: 'collectdiary',
					diary_id :id
				}
				this.request.uniRequest("diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.diaryList[index].is_collect = 1
						that.diaryList[index].collect_num +=1
						uni.showToast({
							title: '收藏成功',
							duration: 1000
						})				
					}
				})
			},
			// 取消收藏
			cancel_like:function(id,index){
				let that = this
				let data = {
					interfaceId:'cancelcollectdiary',
					diary_id:id.toString()
				}
				this.request.uniRequest("diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.diaryList[index].is_collect = 0
						that.diaryList[index].collect_num -=1
						uni.showToast({
							title: '已取消收藏',
							duration: 1000
						})				
					}
				})
			},
			// 点击专辑和拜托医生
			goToVideo: function(path) {
				uni.navigateTo({
					url: `/pages/diary/diary_video?path=${path}`,
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
			// 商品详情
			goodsDetail:function(id,encrypted_id){
				let that = this
				uni.navigateTo({
					url: `/pages/goods/goods_detail?sku_id=${id}&encrypted_id=${encrypted_id}`,
				})
			},
			// 收藏
			collectdiary:function(is_doctor_collect,id){
				let that = this
				if(is_doctor_collect==0){
					let dataInfo = {
						interfaceId:'doctor_collect',
						doctor_id:id,
						status:is_doctor_collect
					}
					that.request.uniRequest("doctor", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.is_doctor_collect = 1
							uni.showToast({
								title: '收藏成功',
								duration: 1000
							})
						}
					})
				}
				else{
					let dataInfo = {
						interfaceId:'doctor_collect',
						doctor_id:id,
						status:is_doctor_collect
					}
					that.request.uniRequest("doctor", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.is_doctor_collect = 0
							uni.showToast({
								title: '已取消收藏',
								duration: 1000
							})
						}
					})
				}
			},
			// 咨询
			goToConsult:function(){
				uni.navigateTo({
					url: `/pages/consultation/consultation`,
				})
			},
			// 分享
			share:function(id){
				console.log("分享了id是"+id +"的医生")
			}
		},
	}
</script>

<style scoped>
	.detail_content-all {
		padding-bottom: 200rpx;
		background-image: linear-gradient(0deg, #222222 0%, #151515 100%);
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

	.goods_project {
		display: flex;
		flex-wrap: wrap;
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

	.doctor-content-item {
		background-color: #151515;
		padding-bottom: 40rpx;
	}

	.doctor-item {
		padding-left: 30rpx;
	}

	.doctor-projects-item {
		margin-top: 12rpx;
	}

	/* 拜托了医生 */
	.all-please-doctor {
		/* display: flex;
		justify-content: space-between; */
		width: 100%;
	}

	.left,
	.right {
		display: flex;
		flex-direction: column;
	}

	.please-doctor {
		background-color: #FFFFFF;
		border-radius: 10rpx;
		width: 340rpx;
		white-space: normal;
		display: flex;
		flex-direction: column;
	}

	.please-doctor-image {
		width: 340rpx;
		border-radius: 10rpx 10rpx 0 0;
	}

	.please-doctor-name {
		padding: 20rpx 20rpx 0;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 26rpx;
		margin-bottom: 12rpx;
	}

	.all-category_name {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		padding: 0 20rpx;
	}

	.category_name {
		line-height: 36rpx;
		padding: 0 20rpx;
		font-size: 20rpx;
		color: #ffffff;
		background-color: #aaaaaa;
		border-radius: 5rpx;
		margin-right: 12rpx;
		margin-bottom: 10rpx;
	}

	.heading-collect {
		padding: 10rpx 20rpx 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.heaing-content {
		display: flex;
		align-items: center;
	}

	.heaing-content image {
		width: 46rpx;
		height: 46rpx;
		border-radius: 23rpx;
	}

	.heading-doctor-name {
		font-size: 24rpx;
		color: #b2b2b2;
		margin-left: 10rpx;
	}

	.collect_num {
		font-size: 30rpx;
		color: #fc4783;
		display: flex;
		align-items: center;
	}

	.is_no_collect {
		color: #B2B2B2;
		display: flex;
		align-items: center;
		font-size: 30rpx;
	}

	.is_no_collect .like {
		background-color: #d0d0d0;
		width: 40rpx;
		height: 40rpx;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 16rpx;
	}

	.collect_num .like {
		width: 42rpx;
		height: 42rpx;
		border-radius: 21rpx;
		background-image: linear-gradient(0deg, #fa3475 0%, #ff6699 100%), linear-gradient(#f56fb4, #f56fb4);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 16rpx;
	}

	.like-image {
		width: 24rpx;
		height: 24rpx;
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
		color: #FFFFFF;
	}

	.productImgs {
		display: inline-block;
		font-size: 20rpx;
		margin-right: 10rpx;
		position: relative;
	}
	.productImgs:last-child{
		padding-right: 30rpx;
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
	.productItems .doctor_img{
		width: 280rpx;
		height: 210rpx;
		border: 1rpx solid #FFFFFF;
	}

	.productImgs .cover_img {
		border-radius: 16rpx;
		border: 1rpx solid #FFFFFF;
		width: 210rpx;
		height: 210rpx;
	}
	.pay_btn{
		position: absolute;
		top: 75rpx;
		left: 75rpx;
		width: 60rpx;
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

	.doctor-project {
		padding: 0 20rpx 30rpx;
		background-color: #222222;
		height: 100%;
	}

	.doctor-projects {
		padding: 0 30rpx 30rpx;
		background-color: #151515;
	}

	.doctor-item-swiper {
		margin-top: 32rpx;
	}

	.doctor-swiper {
		height: 820rpx;
	}

	.doctor-swiper-item,
	.project-content {
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
		position: relative;
	}

	.porduct-item-images .image {
		width: 100%;
		height: 100%;
		border-top-left-radius: 16rpx;
		border-bottom-left-radius: 16rpx;
	}
	.spu_icon{
		width: 100rpx;
		height: 40rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9;
		opacity: 0.8;
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

	.porduct-price {
		display: flex;
		margin-top: 20rpx;
	}

	.porduct-vip-price {
		display: flex;
		margin-left: 25rpx;
		border: 1rpx solid #282828;
		border-radius: 4rpx;
	}

	.vip {
		font-size: 16rpx;
		border-radius: 4rpx;
		width: 48rpx;
		height: 29rpx;
		line-height: 30rpx;
		background-image: linear-gradient(0deg, #000000 0%, #2c2c2c 100%), linear-gradient(#282828, #282828);
		color: #FFFFFF;
		text-align: center;
	}

	.vip-price {
		height: 28rpx;
		font-size: 16rpx;
		color: #282828;
		border-width: 1rpx;
		border-image-source: linear-gradient(0deg, #000000 0%, #2c2c2c 100%);
		border-image-slice: 1;
		padding: 0 9rpx;
	}

	.porduct-price {
		line-height: 34rpx;
		display: flex;
		align-items: center;
	}

	.porduct-original-cost {
		color: #fa3475;
		font-size: 52rpx;
	}

	.porduct-original-cost text {
		font-size: 36rpx;
	}

	.subscribe-goodReputation {
		display: flex;
		font-size: 20rpx;
		margin-top: 10rpx;
		color: #666666;
	}

	.goodReputation {
		color: #fa3576;
		margin-left: 30rpx;
	}

	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 2;
		width: 750rpx;
		height: 104rpx;
		background-image: linear-gradient(90deg, #282828 50%, #272727 100%);
		display: flex;
		align-items: center;
	}

	.footer .mar {
		width: 33.3%;
		color: #FFFFFF;
		font-size: 28rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-right: 1rpx solid #505050;
	}

	.footer .mar image {
		width: 50rpx;
		height: 50rpx;
		margin-right: 16rpx;
	}
	.collect_hover{
		color: #9F55FF;	
	}
</style>
