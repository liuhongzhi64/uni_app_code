<template>
	<view class="doctor_detail">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuTop='menuTop' :menuHeight='menuHeight' :menuBottom='menuBottom'></topBar>

		<view class="detail_content" :style="[{'padding-top':menuBottom+10+'px','min-height':height-menuBottom-60+'px'}]">
			<view class="this_doctor_info">
				<image class="doctor_image" :src="requestUrl+doctor_info[0].image" mode="widthFix"></image>
				<navigator class="doctor_photos" v-if="doctor_info.album" :url="'/pages/doctor/doctor_photo?id='+doctor_id">
					医生相册一览
					<image class="go_img" src="/static/images/return.png" mode="widthFix"></image>
				</navigator>
				<view class="doctor_info">
					<view class="doctor_name"> Dr. {{doctor_info[0].name}}</view>
					<view class="position">{{doctor_info[0].zhicheng}}</view>
					<view class="subline"></view>
					<view class="experience_case">
						<view class="experience">从业经验: {{ doctor_info[0].employed_y }} 年</view>
						<view class="case">案列数: {{ doctor_info[0].case_num }} </view>
					</view>
					<view class="all_sign">
						<view class="sign_item" v-for="(item,index) in doctor_info[0].sign" :key='index'>
							<image class="circular" src="/static/images/circular.png" mode="widthFix"></image> <text class="sign_item_info">{{ item }}</text>
						</view>
					</view>
					<view class="all_sign">
						<view class="top_title">擅长项目</view>
						<view class="goods_project">
							<view class="goods_project_item" v-for="(item,index) in doctor_info[0].goods_project" :key='index'>
								{{item}} <text class="project_line" >、</text>
							</view>
						</view>
					</view>
					<view class="all_sign" v-if="doctor_info[0].surgery">
						<view class="top_title">手术特点</view>
						<view class="surgery_item"> {{doctor_info[0].surgery}} </view>
					</view>
				</view>
			</view>
			<image class="line_img" src="https://xcx.hmzixin.com/upload/images/3.0/bullion.jpg" mode="widthFix"
			 v-if="doctor_info.video_album.length>0||certificate_list.length>0||doctor_info.goods.length>0"></image>
			<view class="doctor_album_certificate" v-if="doctor_info.video_album.length>0||certificate_list.length>0">
				<view class="doctor_album" v-if="doctor_info.video_album.length>0">
					<view class="this_title">个人专辑</view>
					<view class="this_list">
						<scroll-view class="this_items" scroll-x="true">
							<view class="this_item_content">
								<view class="item_img" v-for="(item,index) in doctor_info.video_album" :key='index'>
									<navigator class="item_info" :url="'/pages/diary/diary_video?id='+item.id">
										<image class="cover_img" :src="requestUrl+item.cover_img"></image>
										<image class="pay_btn" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" mode="widthFix">
										</image>
										<view class="item_explain">{{item.name}}</view>
									</navigator>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>
				<view class="doctor_certificate" v-if="certificate_list.length>0">
					<view class="this_title">个人证书 </view>
					<view class="this_list">
						<scroll-view class="this_items" scroll-x="true">
							<view class="this_item_content">
								<navigator class="item_img" v-for="(item,index) in certificate_list" :key='index'
								 :url="'/pages/doctor/doctor_certificate?id='+item.doctor_id">
									<view class="item_info">
										<image class="doctor_img" :src="requestUrl+item.url" mode="widthFix"></image>
									</view>
								</navigator>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
			<view class="this_doctor_project" v-if="doctor_info.goods.length>0">
				<view class="this_title">TA的项目</view>
				<view class="doctor-item-swiper">
					<swiper class="doctor-swiper" indicator-dots indicator-active-color="#f6db93">
						<swiper-item class="doctor-swiper-item" v-for="(item,index) in doctor_info.goods" :key='index'>
							<view class="project-content" >
								<navigator class="porduct-list" v-for="(i,k) in item"
								 :key='k' :url="'/pages/goods/goods_detail?sku_id='+i.sku_id+'&encrypted_id='+i.encrypted_id">
									<view class="porduct-items">
										<view class="porduct-item-images">
											<image :src="requestUrl+i.head_img" class="image"></image>
											<image :src="requestUrl+i.spu_icon" class="spu_icon"></image>
										</view>
										<view class="porduct-introduce">
											<view class="product-title"> {{i.goods_name}} </view>
											<view class="label" v-if="i.label.type==0">
												<view class="label-name" v-for="(j,q) in i.label.list" :key='q'> {{j}}</view>
											</view>
											<view class="activity" v-if="i.label.type==1">
												<view class="activity-name" v-for="(j,q) in i.label.list" :key='q'> {{j}} </view>
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
												<view class="subscribe"> {{i.sales}}预约 </view>
												<view class="good_reputation"> {{i.rate}}%好评 </view>
											</view>
										</view>
									</view>
								</navigator>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<image class="line_img" src="https://xcx.hmzixin.com/upload/images/3.0/bullion.jpg" mode="widthFix"
			 v-if="doctor_info.video_album.length>0||doctor_info.diary.length>0"></image>
			<view class="doctor_projects" v-if="doctor_info.video.length>0">
				<view class="this_title">拜托了医生</view>
				<view class="doctor_projects_item">
					<doctor :doctorList="doctor_info.video" :requestUrl="requestUrl" :heading='doctor_heading' :doctorname='doctor_name'
					 @collectLike='collectLike' @cancelLike='cancelLike'>
					</doctor>
				</view>
			</view>
			<view class="doctor_projects" v-if="doctor_info.diary.length>0">
				<view class="this_title">用户日记</view>
				<view class="doctor_projects_item">
					<diary :diaryList="doctor_info.diary" :requestUrl='requestUrl' @collect_diary='collect_diary' @cancel_like='cancel_like'></diary>
				</view>
			</view>
		</view>

		<view class="footer">
			<view class="mar" @tap='collect_doctor(doctor_info.is_doctor_collect,doctor_id)'>
				<image class="icon-img" v-if="doctor_info.is_doctor_collect == 0" src="https://xcx.hmzixin.com/upload/images/3.0/collect.png"></image>
				<image class="icon-img" v-else src="https://xcx.hmzixin.com/upload/images/3.0/collect_hover.png"></image>
				<text :class="doctor_info.is_doctor_collect == 0?'':'collect_hover'">收藏</text>
			</view>
			<view class="mar" @tap='go_to_consult'>
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
				menuTop: 0,
				menuHeight: 0,
				menuBottom: 0,
				height: 0,
				barName: 'back', //导航条名称
				topBackgroundColor: '#000000',
				color: '#FFFFFF',
				backImage: '/static/images/back2.png',
				title: '主页',
				requestUrl: '',
				doctor_id: 4, //4
				doctor_info: {
					'0': {
						image: ''
					},
					video_album: [],
					goods: [],
					video:[],
					diary:[]
				},
				certificate_list: [],
				doctor_heading: '',
				doctor_name: ''
			}
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			that.doctor_id = option.id
			that.get_detail()
			that.get_doctor_certificate()
		},

		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
			let platform = getApp().platform || getApp().globalData.platform
			if (platform == 'Applets') {
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuBottom = menu.bottom
					}
				})
			} else if (platform == 'APP') {
				that.menuTop = 40
				that.menuBottom = 70
				that.menuHeight = 30
			}
		},
		methods: {
			get_detail: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'info',
					doctor_id: that.doctor_id
				}
				this.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						data.goods = that.group(data.goods, 2)
						that.doctor_info = data
						that.title = data[0].name + '的' + that.title
						that.doctor_heading = that.requestUrl + data[0].heading
						that.doctor_name = data[0].name
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
			// 获取证书
			get_doctor_certificate: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'docker_img',
					doctor_id: that.doctor_id,
					type: '1'
				}
				this.request.uniRequest("doctor", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.certificate_list = data
					}
				})
			},
			// 点赞
			collectLike: function(id, index) {
				let that = this
				let videoId = id
				let data = {
					interfaceId: 'video_collect',
					video_id: videoId,
					status: '0'
				}
				this.request.uniRequest("doctor", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.doctor_info.video[index].is_collect = 1
						that.doctor_info.video[index].collect += 1
						uni.showToast({
							title: '已点赞',
							duration: 1000
						})
					}
				})
			},
			// 取消点赞
			cancelLike: function(id, index) {
				let videoId = id
				let that = this
				let data = {
					interfaceId: 'video_collect',
					video_id: videoId,
					status: '1'
				}
				this.request.uniRequest("doctor", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.doctor_info.video[index].is_collect = 0
						that.doctor_info.video[index].collect -= 1
						uni.showToast({
							title: '已取消点赞',
							duration: 1000
						})
					}
				})
			},
			// 收藏
			collect_diary: function(id, index) {
				let that = this
				let data = {
					interfaceId: 'collectdiary',
					diary_id: id
				}
				this.request.uniRequest("diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.diaryList[index].is_collect = 1
						that.diaryList[index].collect_num += 1
						uni.showToast({
							title: '收藏成功',
							duration: 1000
						})
					}
				})
			},
			// 取消收藏
			cancel_like: function(id, index) {
				let that = this
				let data = {
					interfaceId: 'cancelcollectdiary',
					diary_id: id.toString()
				}
				this.request.uniRequest("diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.diaryList[index].is_collect = 0
						that.diaryList[index].collect_num -= 1
						uni.showToast({
							title: '已取消收藏',
							duration: 1000
						})
					}
				})
			},
			// 收藏
			collect_doctor: function(is_doctor_collect, id) {
				let that = this
				if (is_doctor_collect == 0) {
					let dataInfo = {
						interfaceId: 'doctor_collect',
						doctor_id: id,
						status: is_doctor_collect
					}
					that.request.uniRequest("doctor", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.doctor_info.is_doctor_collect = 1
							uni.showToast({
								title: '收藏成功',
								duration: 1000
							})
						}
					})
				} else {
					let dataInfo = {
						interfaceId: 'doctor_collect',
						doctor_id: id,
						status: is_doctor_collect
					}
					that.request.uniRequest("doctor", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.doctor_info.is_doctor_collect = 0
							uni.showToast({
								title: '已取消收藏',
								duration: 1000
							})
						}
					})
				}
			},
			share: function(id) {
				console.log("分享了id是" + id + "的医生")
			},
			go_to_consult: function() {
				uni.navigateTo({
					url: `/pages/consultation/consultation`,
				})
			}
		}
	}
</script>

<style scoped>
	.doctor_detail {
		background-image: linear-gradient(0deg, #222222 0%, #151515 100%);
	}

	.detail_content {
		padding-bottom: 100rpx;
	}

	.this_doctor_info {
		height: 1300rpx;
		position: relative;
	}

	.doctor_image {
		width: 100%;
	}

	.line_img {
		width: 100%;
	}

	.doctor_photos {
		position: absolute;
		left: 0;
		top: 60rpx;
		width: 240rpx;
		text-align: center;
		line-height: 48rpx;
		background-image: linear-gradient(0deg, #ac995b 0%, #d1bf86 100%);
		box-shadow: 1rpx 4rpx 6rpx 0rpx rgba(0, 0, 0, 0.71);
		border-top-right-radius: 24rpx;
		border-bottom-right-radius: 24rpx;
		font-size: 26rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.doctor_info {
		position: absolute;
		left: 0;
		top: 230rpx;
		padding-left: 40rpx;
	}

	.doctor_name {
		font-size: 64rpx;
		color: #d1bf86;
	}

	.position {
		width: 350rpx;
		line-height: 48rpx;
		font-size: 32rpx;
		color: #d1bf86;
		margin-top: 20rpx;
	}

	.subline {
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		width: 300rpx;
		height: 4rpx;
		background-color: #d1bf86;
	}

	.experience_case {
		display: flex;
		color: #FFFFFF;
		font-size: 26rpx;
		padding-bottom: 30rpx;
	}

	.experience {
		margin-right: 20rpx;
	}

	.all_sign {
		color: #C0C0C0;
		line-height: 32rpx;
		font-size: 26rpx;
		max-height: 230rpx;
		overflow-y: scroll;
		margin-bottom: 20rpx;
		width: 500rpx;
		padding: 20rpx 15rpx;
		background-color: #121212;
		border-radius: 24rpx;
		opacity: 0.8;
	}

	.sign_item {
		padding: 0 0 10rpx;
	}

	.circular {
		width: 12rpx;
		margin-bottom: 4rpx;
	}

	.sign_item_info {
		padding-left: 20rpx;
	}

	.top_title {
		font-size: 28rpx;
		font-weight: bold;
		line-height: 30rpx;
		color: #d1bf86;
		padding-bottom: 10rpx;
	}

	.goods_project {
		display: flex;
		flex-wrap: wrap;
	}

	.go_img {
		width: 24rpx;
		margin-left: 6rpx;
		transform: rotate(180deg);
	}

	.doctor_certificate {
		margin-top: 30rpx;
	}

	.doctor_album_certificate {
		padding: 40rpx;
	}

	.this_title {
		padding-bottom: 20rpx;
		font-size: 48rpx;
		color: #d1bf86;
		border-bottom: 4rpx solid #393939;
	}

	.this_list {
		width: 100%;
		padding-top: 30rpx;
	}

	.this_items {
		overflow: hidden;
		white-space: nowrap;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.this_item_content {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.item_img {
		display: inline-block;
		font-size: 20rpx;
		margin-right: 10rpx;
		position: relative;
	}

	.item_info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		white-space: normal;
		border-radius: 24rpx;

	}

	.item_info .doctor_img {
		width: 280rpx;
	}

	.item_info .cover_img {
		width: 210rpx;
		height: 210rpx;
		display: block;
	}

	.pay_btn {
		position: absolute;
		top: 75rpx;
		left: 75rpx;
		width: 60rpx;
	}

	.item_explain {
		margin-top: 16rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		color: #C0C0C0;
		font-size: 20rpx;
		width: 210rpx;
	}

	.this_doctor_project {
		padding-left: 40rpx;
	}

	.doctor-item-swiper {
		margin-top: 30rpx;
		padding-right: 40rpx;
	}

	.doctor-swiper {
		height: 800rpx;
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

	.spu_icon {
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

	.good_reputation {
		color: #fa3576;
		margin-left: 30rpx;
	}

	.doctor_projects {
		padding: 0 30rpx 30rpx;
		background-color: #151515;
	}

	.doctor_projects_item {
		padding-top: 30rpx;
	}

	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 2;
		width: 750rpx;
		height: 100rpx;
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

	.collect_hover {
		color: #9F55FF;
	}
</style>
