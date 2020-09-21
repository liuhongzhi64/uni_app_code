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
													<image :src="requestUrl+i.cover_img" mode="" style="width: 210rpx;height: 210rpx;"></image>
													<view class="doctor-item-explain" style="width: 210rpx;">{{i.name}}</view>
												</view>
											</view>
										</view>
										<view class="product-item-content" v-else> 暂无相关专辑推荐 </view>
									</scroll-view>
								</view>
							</view>
							<!-- 专业证书 -->
							<view class="doctor-item">
								<view class="doctor-item-title">个人证书</view>
								<view class="doctor-item-list">
									<scroll-view class="product-items" scroll-x="true">
										<view class="product-item-content">
											<view class="productImgs" v-for="(i,k) in doctorList" :key='k' @tap='certificate(i.doctor_id)'>
												<view class="productItems">
													<image :src="requestUrl+i.url" mode="heightFix" style="width: 280rpx;height: 210rpx;"></image>
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
											<view class="porduct-list" v-for="(i,k) in item" :key='k' @tap='goodsDetail(i.sku_id)'>
												<view class="porduct-items">
													<view class="porduct-item-images">
														<image :src="requestUrl+i.head_img" mode=""></image>
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
									<!-- 		<swiper-item class="doctor-swiper-item">
										<view class="project-content">
											2222
										</view>
									</swiper-item> -->
								</swiper>
							</view>
						</view>
						<!-- 拜托了医生 -->
						<view class="doctor-projects">
							<view class="doctor-item-title">拜托了医生</view>
							<view class="all-please-doctor">
								<!-- 左边 -->
								<view class="left">
									<view class="doctor-projects-item  please-doctor" v-for="(item,index) in doctorVideo" :key='index' v-if="index%2==0">
										<view class="top-content" @tap='goToVideo(item.path)'>
											<view class="please-doctor-image">
												<image class="please-doctor-image" :src="requestUrl+item.cover_img" mode=""></image>
											</view>
											<view class="please-doctor-name">{{item.name}}</view>
											<view class="all-category_name">
												<view class="category_name" v-for="(i,k) in item.category_name" :key='k'>{{i}}</view>
											</view>
										</view>
										<view class="heading-collect">
											<view class="heaing-content">
												<image :src="requestUrl+doctorMessage.heading" mode=""></image>
												<text class="heading-doctor-name">{{doctorMessage.name}}</text>
											</view>
											<view :class="[item.is_collect==0?'is_no_collect':'collect_num']" v-if="item.collect">
												<view class="like">
													<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png"></image>
												</view>
												{{item.collect}}
											</view>
											<view :class="[item.is_collect==0?'is_no_collect':'collect_num']" v-else>
												<view class="like">
													<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png"></image>
												</view>
												0
											</view>
										</view>
									</view>
								</view>

								<!-- 右边 -->
								<view class="right">
									<view class="doctor-projects-item  please-doctor" v-for="(item,index) in doctorVideo" :key='index' v-if="index%2==1">
										<view class="top-content" @tap='goToVideo(item.path)'>
											<view class="please-doctor-image">
												<image class="please-doctor-image" :src="requestUrl+item.cover_img" mode=""></image>
											</view>
											<view class="please-doctor-name">{{item.name}}</view>
											<view class="all-category_name">
												<view class="category_name" v-for="(i,k) in item.category_name" :key='k'>{{i}}</view>
											</view>
										</view>
										<view class="heading-collect">
											<view class="heaing-content">
												<image :src="requestUrl+doctorMessage.heading" mode=""></image>
												<text class="heading-doctor-name">{{doctorMessage.name}}</text>
											</view>
											<view :class="[item.is_collect==0?'is_no_collect':'collect_num']" v-if="item.collect">
												<view class="like">
													<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png"></image>
												</view>
												{{item.collect}}
											</view>
											<view :class="[item.is_collect==0?'is_no_collect':'collect_num']" v-else>
												<view class="like">
													<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png"></image>
												</view>
												0
											</view>
										</view>
									</view>
								</view>

							</view>
						</view>
						<view class="doctor-project">
							<view class="doctor-item-title">用户日记</view>
							<view class="doctor-projects-item">
								<diary :diaryList="diaryList" :requestUrl='requestUrl'></diary>
							</view>
						</view>

					</view>
				</template>
			</scroll-view>
		</view>

		<view class="footer">
			<view class="mar" v-if="is_doctor_collect == 0" :data-id='doctor_id' @tap='collectdiary'>
				<image class="icon-img" src="../../static/images/collect.png"></image>收藏
			</view>
			<view class="mar" v-else @tap='cancelLike(doctor_id)'>
				<image class="icon-img" src="../../static/images/checked-collect.png"></image>收藏
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
	import porduct from "../../components/porduct.vue";
	import diary from '../../components/diary.vue';
	export default {
		components: {
			topBar,
			porduct,
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
				backImage: '../static/images/back2.png',
				title: '医生个人主页',
				requestUrl: '',
				doctorHeadPortrait: '', //医生的背景图片
				doctorMessage: {},
				doctorVideo: [{
						id: 2,
						name: "是文章标题，显示两排后就以省略号结束,是文章标题，显示两排后就以省略号结束", //名称
						cover_img: "upload/diary/images/202009/11/jPfDQqAudxMIaukY7xC6TY9i6nnrY06KCbrfmQIZ.jpeg", //封面图
						path: "upload/vJpo96kTeyWEyfw.mp4", //视频路径
						collect: 2, //真实收藏数
						collect_weighting: 1, //收藏加权值
						category_name: [ //所属分类
							"视频分类222",
							"眼泪",
							'眼部美容',
							'微针双眼皮'
						],
						is_collect: 0 // 是否收藏： 0 否1是
					},
					{
						id: 5,
						name: "是文章标题，显示两排后就以省略号结束,是文章标题，显示两排后就以省略号结束", //名称
						cover_img: "upload/diary/images/202009/11/UrqE9tLcUAuYhJsOpyqH6uAAih5fYW8EjPGzunXu.jpeg", //封面图
						path: "upload/vJpo96kTeyWEyfw.mp4", //视频路径
						collect: 260, //真实收藏数
						collect_weighting: 1, //收藏加权值
						category_name: [ //所属分类
							"视频分类222",
							"眼泪",
						],
						is_collect: 1 // 是否收藏： 0 否1是
					},
					{
						id: 4,
						name: "是文章标题，显示两排后就以省略号结束,是文章标题，显示两排后就以省略号结束", //名称
						cover_img: "upload/diary/images/202009/11/bZl57h0Gx3fUlUDaGnbMscf2p5v6zikJITHhs8nA.jpeg", //封面图
						path: "upload/vJpo96kTeyWEyfw.mp4", //视频路径
						collect: 102, //真实收藏数
						collect_weighting: 1, //收藏加权值
						category_name: [ //所属分类
							"视频分类222",
							"眼泪",
							'眼部美容',
							'微针双眼皮'
						],
						is_collect: 1 // 是否收藏： 0 否1是
					},
					{
						id: 8,
						name: "是文章标题，显示两排后就以省略号结束,是文章标题，显示两排后就以省略号结束", //名称
						cover_img: "upload/diary/images/202009/11/gBlibw3zljzwigRTGXyQUNdWAAwovMWT4zvS8Waq.jpeg", //封面图
						path: "upload/vJpo96kTeyWEyfw.mp4", //视频路径
						collect: 240, //真实收藏数
						collect_weighting: 1, //收藏加权值
						category_name: [ //所属分类
							"视频分类222",
						],
						is_collect: 0 // 是否收藏： 0 否1是
					},
				], //这是专辑和拜托医生
				doctorList: [], //医生相册
				diaryList: [], //日记
				porductList: [
					{
						encrypted_id: "S0xLeFMrSlNjdmVkekxSK3MyRkh3UT09",
						goods_name: "祛眼袋", //名称
						seo_keyword: "双眼皮修复,双眼皮美容,去眼袋",
						seo_description: "双眼皮修复,双眼皮美容,去眼袋",
						head_img: "upload/diary/images/202009/11/jPfDQqAudxMIaukY7xC6TY9i6nnrY06KCbrfmQIZ.jpeg", //头图
						rate: "88.8", //好评率
						label: { // 标签
							type: 0, //0分类标签   1 非分类标签
							list: [ //标签内容
								"周年庆活动",
								"新品特推"
							]
						},
						spu_icon: "upload/goods6f5c9fa6d178e13848.jpg", //商品标签图片
						plateform: "1,2",
						sku_id: 17,
						sale_price: "16000.0", //销售价
						act_id: 0,
						sales: 1000, //销量  预约数
						member: {
							"price": 16000, //会员价格
							"member_title": "" //会员名称     member_title 该字段为空  不展示会员价格
						}
					},
					{
						encrypted_id: "S0xLeFMrSlNjdmVkekxSK3MyRkh3UT09",
						goods_name: "祛眼袋", //名称
						seo_keyword: "双眼皮修复,双眼皮美容,去眼袋",
						seo_description: "双眼皮修复,双眼皮美容,去眼袋",
						head_img: "upload/diary/images/202009/11/UrqE9tLcUAuYhJsOpyqH6uAAih5fYW8EjPGzunXu.jpeg", //头图
						rate: "88.8", //好评率
						label: { // 标签
							type: 1, //0分类标签   1 非分类标签
							list: [ //标签内容
								"周年庆活动",
								"新品特推0"
							]
						},
						spu_icon: "upload/goods6f5c9fa6d178e13848.jpg", //商品标签图片
						plateform: "1,2",
						sku_id: 14,
						sale_price: "16000.0", //销售价
						act_id: 0,
						sales: 1000, //销量  预约数
						member: {
							"price": 16000, //会员价格
							"member_title": "" //会员名称     member_title 该字段为空  不展示会员价格
						}
					},
					{
						encrypted_id: "S0xLeFMrSlNjdmVkekxSK3MyRkh3UT09",
						goods_name: "祛眼袋", //名称
						seo_keyword: "双眼皮修复,双眼皮美容,去眼袋",
						seo_description: "双眼皮修复,双眼皮美容,去眼袋",
						head_img: "upload/diary/images/202009/11/bZl57h0Gx3fUlUDaGnbMscf2p5v6zikJITHhs8nA.jpeg", //头图
						rate: "88.8", //好评率
						label: { // 标签
							type: 1, //0分类标签   1 非分类标签
							list: [ //标签内容
								"周年庆活动",
								"新品特推1"
							]
						},
						spu_icon: "upload/goods6f5c9fa6d178e13848.jpg", //商品标签图片
						plateform: "1,2",
						sku_id: 42,
						sale_price: "19900.0", //销售价
						act_id: 0,
						sales: 1000, //销量  预约数
						member: {
							"price": 16800, //会员价格
							"member_title": "" //会员名称     member_title 该字段为空  不展示会员价格
						}
					},
					{
						encrypted_id: "S0xLeFMrSlNjdmVkekxSK3MyRkh3UT09",
						goods_name: "祛眼袋", //名称
						seo_keyword: "双眼皮修复,双眼皮美容,去眼袋",
						seo_description: "双眼皮修复,双眼皮美容,去眼袋",
						head_img: "upload/diary/images/202009/11/gBlibw3zljzwigRTGXyQUNdWAAwovMWT4zvS8Waq.jpeg", //头图
						rate: "99.9", //好评率
						label: { // 标签
							type: 0, //0分类标签   1 非分类标签
							list: [ //标签内容
								"周年庆活动",
								"新品特推"
							]
						},
						spu_icon: "upload/goods6f5c9fa6d178e13848.jpg", //商品标签图片
						plateform: "1,2",
						sku_id: 17,
						sale_price: "27000.0", //销售价
						act_id: 0,
						sales: 1000, //销量  预约数
						member: {
							"price": 18800, //会员价格
							"member_title": "" //会员名称     member_title 该字段为空  不展示会员价格
						}
					},
				],
				doctor_id:'',
				is_doctor_collect:0
			}
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			let doctorId = option.id
			that.doctor_id = option.id
			// console.log(doctorId)
			that.getDetail(doctorId)
			that.getDoctormessage(doctorId)
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
			getDetail: function(doctorId) {
				let that = this
				let dataInfo = {
					interfaceId: 'info',
					doctor_id: doctorId
				}
				this.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000) {
						let data = res.data.data
						console.log(data)
						that.doctorHeadPortrait = that.requestUrl + data[0].heading
						that.doctorMessage = data[0] //医生信息
						that.is_doctor_collect = data.is_doctor_collect
						console.log(that.doctorMessage)
						// that.doctorVideo = data.video //这是专辑和拜托医生
						that.diaryList = data.diary //日记
						that.porductList = data.goods //商品
						that.porductList = that.group(that.porductList, 3)
						console.log(that.porductList)
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
			goodsDetail:function(id){
				console.log(id)
				let that = this
				let goodsId = id
				uni.navigateTo({
					url: `/pages/goods/goods_detail?id=${goodsId}`,
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
			// 取消收藏
			cancelLike:function(id){
				console.log(id)
			},
			// 咨询
			goToConsult:function(){
				console.log('咨询')
				// uni.navigateTo({
				// 	url: `/pages/consultation/consultation`,
				// })
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
		display: flex;
		justify-content: space-between;
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
</style>
