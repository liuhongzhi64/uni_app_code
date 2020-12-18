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
											<view class="user-name">{{nick_name||'昵称'}}</view>
										</view>
										<view class="detail_number" @tap='personal(user_mark)'>
											共计{{diary_num}}篇 >
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="detail-swiper" v-if="swiperList.length>0">
							<swiper class="top-swiper" indicator-dots @change="change_swiper" :style="{height:swiper_height+'px'}"
							 indicator-active-color="#FA3475" circular>
								<swiper-item class="doctor-information" v-for="(i,index) in swiperList" :key="index">
									<view class="top-swiper-item" :style="{height:swiper_height+'px'}">
										<image :src="requestUrl+i" :class="'list_img'+index" mode="widthFix" v-if="index==0" @load='get_img_height'>
										</image>
										<image :src="requestUrl+i" :class="'list_img'+index" mode="widthFix" v-else>
										</image>
										<navigator class="porduct-message" :url="'/pages/goods/goods_detail?sku_id='+goods.id+'&encrypted_id='+goods.encrypted_id">
											<view class="porduct-images">
												<image :src="requestUrl+goods.head_img" mode="widthFix"></image>
											</view>
											<view class="porduct-name-price">
												<view class="porduct-name">{{goods.goods_name}}</view>
												<view class="porduct-price">¥<text>{{goods.sale_price}}</text></view>
											</view>
										</navigator>
										<navigator class="correlation-doctor" :url="'/pages/doctor/doctor_detail?id='+doctor.id">
											<view class="doctor-images">
												<image :src="requestUrl+doctor.heading"></image>
											</view>
											<view class="doctor-name-subordinate-position">
												<view class="doctor-name">{{doctor.name}}</view>
												<view class="subordinate-position">{{doctor.zhicheng}}</view>
											</view>
										</navigator>
									</view>
								</swiper-item>
							</swiper>
						</view>
						<view class="detail_contents" v-if="!this_my">
							<view class="details-title"> {{ diaryTitle }} </view>
							<view class="user-details-contents">
								<view class="item_content" v-for="(item,index) in content" :key="index">
									{{ item }}
								</view>
							</view>
						</view>
						<!-- 我的详情 -->
						<view class="this_my_diary" v-else>
							<swiper class="top-swiper" indicator-dots @change="change_swiper" :style="{height:swiper_height+'px'}"
							 indicator-active-color="#FA3475" circular>
								<swiper-item class="doctor-information" v-for="(i,index) in my_diary.imgs" :key="index">
									<view class="top-swiper-item" :style="{height:swiper_height+'px'}">
										<image :src="requestUrl+i" :class="'list_img'+index" mode="widthFix" v-if="index==0" @load='get_img_height'>
										</image>
										<image :src="requestUrl+i" :class="'list_img'+index" mode="widthFix" v-else>
										</image>
										<view class="my_diary_relevant">
											<navigator class="relevant"
											 :url="'/pages/goods/goods_detail?sku_id='+my_diary.goods.id+'&encrypted_id='+my_diary.goods.encrypted_id">
												<image class="relevant_goods_img" :src="requestUrl+my_diary.goods.head_img" mode=""></image>
												<view class="relevant_info">
													<view class="relevant_name"> {{ my_diary.goods.goods_name }} </view>
													<view class="good-price"> <text>￥</text> {{ my_diary.goods.sale_price }} </view>
												</view>
											</navigator>
											<navigator class="relevant" :url="'/pages/doctor/doctor_detail?id='+my_diary.doctor.id">
												<image class="relevant_doctor_img" :src="requestUrl+my_diary.doctor.head_img" mode=""></image>
												<view class="relevant_info">
													<view class="relevant_name"> {{ my_diary.doctor.name }} </view>
													<view class="zhicheng">  {{ my_diary.doctor.zhicheng }} </view>
												</view>
											</navigator>
										</view>
									</view>
								</swiper-item>
							</swiper>
							<view class="my_diary_content">
								<view class="details-title"> {{ my_diary.title }} </view>
								<view class="item_content" v-for="(item,index) in my_diary.content" :key="index">
									{{ item }}
								</view>
							</view>
						</view>
					</view>
				</template>
			</scroll-view>
		</view>
		<view class="my_diary_hint" v-if="this_my">
			<view class="hint_content" v-for="(item,index) in my_diary.audit" :key="index">
				{{ item }}
			</view>
		</view>
		<navigator class="consultation" url="/pages/consultation/consultation" v-if="!this_my">
			<image class="consultation_img" src="https://xcx.hmzixin.com/upload/images/3.0/consulting.png" mode="widthFix"></image>
		</navigator>
		<view class="my_diary_btn" v-if="this_my">
			<view class="diary_btn" @tap="set_my_diary(0)" v-if="my_diary.status!=1"> 删除 </view>
			<view class="diary_btn" @tap="set_my_diary(1)"> 编辑 </view>
			<navigator class="diary_btn" url="/pages/consultation/consultation"> 咨询 </navigator>
		</view>
		<view class="bottom-messages" v-if="!this_my">
			<view class="page-view-collect-transpond">
				<view class="page-view">浏览量: <text>{{view_num}}</text></view>
				<view class="collect" v-if="is_collect == 0" @tap='collectdiary(id)'>
					<image src="https://xcx.hmzixin.com/upload/images/3.0/collect.png"></image><text>{{collect_num}}</text>
				</view>
				<view class="collect" v-else @tap='cancelLike(id)'>
					<image src="https://xcx.hmzixin.com/upload/images/3.0/collect_hover.png"></image><text class="collect_hover">{{collect_num}}</text>
				</view>
				<view class="transpond">
					<image src="../../static/images/share.png"></image> <text>{{share_num}}</text>
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
				swiper_height: 350, //外部的高度
				swiperList: [],
				id: '117', //日记id
				content: '', //内容
				collect_num: 0, //日记收藏数
				diary_num: 1, //日记总数,
				doctor: [{}], //医生信息    为空则不展示
				goods: [{}], //日记关联的商品信息
				head_ico: '', // 日记用户用户头像
				imgs: [], //日记图片地址     该字段不为空  日记有图片
				is_collect: 0, // 浏览用户是否收藏    0 未收藏  1 已收藏
				nick_name: '', // 日记用户昵称
				share_num: 0,
				diaryTitle: '', //日记标题
				user_mark: '', //日记用户标示
				video: '', // 日记视频地址    该字段不为空  日记有视频
				view_num: 0, //日记浏览数
				requestUrl: '',
				platform: '',
				this_my: false,
				my_diary: {
					id: 15, //日记id
					title: "黎巴嫩总统承认3周前就知道贝鲁特港有危险：但我不负责", //日记标题
					video: "", //日记视频
					content: "爆炸现场（图源：路透社）<br /><br />海外网8月8日电黎巴嫩总统米歇尔·奥恩周五（7日）向记者表示，他在近3周前首次被告知贝鲁特港口有危险库存，并立即命令军事和安全机构采取“必要行动”。但奥恩否认他对爆炸负有责任，因为自己无权决定该港口事务，而前任政府也已被告知危险品存在。<br /><br />据英国《独立报》报道，当记者问到“您知道有多少问题正在累积”时，奥恩回答说，2013年这艘船被没收后，上一届政府就已经知道这种危险的存在，“它们在那里存放了7年，他们说这很危险，但我不负责。我不知道它到底放在哪，我甚至不知道危险程度”，而他表示，自从7月20日得知这批库存时，他已经立即要求军事和安全官员做应该做的事情。<br /><br />奥恩还补充说，贝鲁特港口爆炸的原因尚未确定，因为有些国家可能通过火箭弹、炸弹或其他手段干扰别国。奥恩表示已请求马克龙向黎巴嫩提供爆炸瞬间的航拍照片，如果没有，黎方将请其他国家确定事件是外部力量导致还是起火引发爆炸。<br /><br />截至目前，黎巴嫩首都贝鲁特港口区突发的剧烈爆炸已致154人死亡，5000多人受伤。事后，存放多年最终被引燃的2750多吨硝酸铵引发外界强烈关注。黎巴嫩政府第一时间将事故原因指向在贝鲁特港“不安全存放”6年的大量硝酸铵，奥恩誓言对责任人施加“最严重的惩罚”。（海外网 魏雪巍）<br /><br />本文系版权作品，未经授权严禁转载。海外视野，中国立场，浏览人民日报海外版官网——海外网www.haiwainet.cn或“海客”客户端，领先一步获取权威资讯", //日记正文
					seo_keyword: null,
					seo_description: null,
					status: -1, //日记状态  -1  审核未听过  1审核通过  0带审核
					collect_num: 1, //收藏数量
					share_num: 0, //分享数量
					view_num: 0, //日记浏览数
					imgs: [ //日记图片 列表
						"upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg",
						"upload/goods/images/202010/15/txz4G5kFQGKgAJ6jGiNuVHCI2ZPsZl1Fw8ZeAAXm_250.jpeg"
					],
					head_ico: "", //日记所属 用户头像
					nick_name: "测试1", //日记所属用户昵称
					diary_num: 9, //日记总数
					user_mark: "VUZSUFNGTkVTVzV5YjFCT05tcGxVbGRHUW1KR05HTkNVRVpDYjNZeVkwSTJTSGxsVVdkV016QmFjejA9",//日记标示 
					goods: { //日记所属商品
						status: "1",
						is_delete: "0",
						encrypted_id: "MFFrKzlnYnMzUTV1NGNrRjYvS3I1Zz09", //商品  spu_id
						goods_name: "和你很高3", //商品名称
						head_img: "upload/goods/images/202008/05/7f11c62e18ddb253e231f489bd08f0bd4371_250.jpg", //商品头像
						sku_is_delete: "0",
						id: "39", //商品 sku_id
						sale_price: "300.0" //商品销售价格
					},
					doctor: {
						id: "1",
						name: "陈扬",
						heading: "upload/goods/images/202007/24/7ec5237f17324f7959149d06f1a9d1ee4165.jpg",
						zhicheng: " 华美紫馨眼部整形及修复中心主"
					},
					audit: "抱歉！您的日记审核未通过！修改后可以重新发起审核喔！<br /><br />审核意见：图片不清晰；描写内容与所选商品不符；"
				}, //我的日记
			}
		},
		onLoad: function(options) {
			const that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			options.route = 'my'
			if (options.route) {
				that.this_my = true
				that.get_my_diary()
			} else {
				that.id = options.id
				that.diarydetails(that.id)
			}
			// 后面移动到请求我的日记详情中处理内容和提示
			that.my_diary.content = that.set_content(that.my_diary.content)
			that.my_diary.audit = that.set_content(that.my_diary.audit)
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
			that.platform = platform
			if (platform == 'applet') {
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
			} else {
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			getlist_height: function(list) {
				let that = this
				const query = uni.createSelectorQuery()
				query.select(list).boundingClientRect(data => {
					that.swiper_height = data.height
					console.log(data.height)
				}).exec();
			},
			change_swiper: function(e) {
				let that = this;
				that.getlist_height(`.list_img${e.target.current}`)
			},
			get_img_height: function(event) {
				let that = this
				let height = event.detail.height
				console.log(height)
				if (that.platform != 'applet') {
					that.swiper_height = height / 2 - 18
				} else {
					that.swiper_height = height / 2
				}
			},
			set_content:function(text){
				text = text.split('<br />') //内容
				return text
			},
			// 详情
			diarydetails: function(id) {
				const that = this
				let data = {
					interfaceId: 'diarydetails',
					diary_id: id
				}
				this.request.uniRequest("diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						// console.log(data)
						that.id = data.id //日记id
						that.content = data.content.split('<br />') //内容
						that.collect_num = data.collect_num //日记收藏数
						that.diary_num = data.diary_num //日记总数,
						that.doctor = data.doctor //医生信息    为空则不展示
						that.goods = data.goods //日记关联的商品信息
						that.head_ico = data.head_ico // 日记用户用户头像
						that.imgs = data.imgs //日记图片地址     该字段不为空  日记有图片
						that.is_collect = data.is_collect // 浏览用户是否收藏    0 未收藏  1 已收藏
						that.nick_name = data.nick_name // 日记用户昵称
						that.share_num = data.share_num
						that.diaryTitle = data.title //日记标题
						that.user_mark = data.user_mark //日记用户标示
						that.video = data.video // 日记视频地址    该字段不为空  日记有视频
						that.view_num = data.view_num //日记浏览数
						that.swiperList = that.imgs
					}
				})
			},
			// 我的个人日记详情
			get_my_diary: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'mydiarydetails',
					diary_id: that.id
				}
				// this.request.uniRequest("diary", dataInfo).then(res => {
				// 	if (res.data.code == 1000 && res.data.status == 'ok') {
				// 		let data = res.data.data
				// 		console.log(data)
				// 	}
				// })
			},
			set_my_diary:function(type){
				let that = this
				// type 0 删除 1编辑
				if(type==0){
					uni.showModal({
						title: '提示',
						content: '是否删除这条日记？',
						success: function(res) {
							if (res.confirm) {
								let dataInfo = {
									interfaceId:'deletediary',
									diary_id:that.id
								}
								that.request.uniRequest("diary", dataInfo).then(res => {
									if (res.data.code == 1000 && res.data.status == 'ok') {
										uni.showToast({
											title: '删除成功',
											duration: 1000
										})
										uni.navigateTo({
											url: `/diary/diary_personal?route=my`,
										})
									}
								})
							}
						}
					})
				}
				else if(type==1){
					if(that.my_diary.video){
						uni.navigateTo({
							url: `/pages/diary/diary_write_video?id=${that.id}`,
						})
					}
					else{
						uni.navigateTo({
							url: `/pages/diary/diary_write?id=${that.id}`,
						})
					}
				}
			},
			// 个人主页
			personal: function(user_mark) {
				uni.navigateTo({
					url: `/pages/diary/diary_personal?user_mark=${user_mark}`,
				})
			},
			// 收藏
			collectdiary: function(id) {
				let that = this
				let data = {
					interfaceId: 'collectdiary',
					diary_id: id
				}
				this.request.uniRequest("diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.is_collect = 1
						that.collect_num += 1
						uni.showToast({
							title: '收藏成功',
							duration: 1000
						})
					}
				})
			},
			// 取消收藏
			cancelLike: function(id) {
				let that = this
				let data = {
					interfaceId: 'cancelcollectdiary',
					diary_id: id.toString()
				}
				this.request.uniRequest("diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.is_collect = 0
						that.collect_num -= 1
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
		background-color: #FFFFFF;
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

	.top-swiper-item image {
		width: 100%;
		display: block;
	}

	.top-swiper-item {
		display: flex;
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
		position: relative;
		padding: 0;
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
		background-color: #FFFFFF;
	}

	.correlation-doctor .doctor-images,
	.correlation-doctor .doctor-images image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 40rpx;
		background-color: #FFFFFF;
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
		font-size: 20rpx;
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
		font-size: 20rpx;
	}

	.porduct-price text {
		font-size: 24rpx;
	}

	.detail_contents {
		padding: 40rpx;
		background-color: #FFFFFF;
	}

	.details-title {
		font-size: 40rpx;
		color: #111111;
		font-weight: bold;
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

	.item_content {
		min-height: 40rpx;
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

	.page-view text {
		margin-left: 10rpx;
	}

	.collect_hover {
		color: #9F55FF;
	}

	.consultation {
		position: fixed;
		z-index: 99;
		right: 20rpx;
		bottom: 240rpx;
		opacity: 0.8;
	}

	.consultation_img {
		width: 120rpx;
	}
	
	/* 我的 */
	.my_diary_relevant{
		position: absolute;
		left: 0;
		width: 100%;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		background-color: #F0F0F0;
		padding: 15rpx 0;
	}
	.relevant{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 340rpx;
		background-color: #999999;
	}
	.relevant_goods_img,.relevant_doctor_img{
		width: 80rpx !important;
		height: 80rpx;
		background-color: #FFFFFF;
	}
	.relevant_info{
		font-size: 24rpx;
		display: flex;
		flex-direction: column;
		padding: 0 10rpx;
		flex: 1;
	}
	.relevant_name{
		line-height: 32rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	.good-price {
		font-size: 28rpx;
		color: #fa3475;
	}
	.good-price text{
		font-size: 20rpx;
	}
	.zhicheng{
		font-size: 20rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-weight: lighter;
	}
	
	.my_diary_content{
		padding: 20rpx 20rpx 160rpx;
		font-size: 24rpx;
	}
	
	.my_diary_hint{
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 30rpx 0;
		background-color: #111111;
		opacity: 0.6;
		color: #FFFFFF;
		width: 100%;
		text-align: center;
		font-size: 24rpx;
	}
	.hint_content{
		min-height: 6rpx;
	}
	
	.my_diary_btn{
		position: fixed;
		right: 20rpx;
		bottom: 200rpx;
		display: flex;
		flex-direction: column;
	}
	.diary_btn{
		background-color: #202020;
		opacity: 0.6;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
		margin-bottom: 20rpx;
		color: #FFFFFF;
		font-size: 24rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
	}
	
</style>
