<template>
	<view class="my">
		<view class="top-nav-message">
			<view class="my-top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px'}]">
				<view class="back-title" :style="[{'height':menuHeight+'px'}]"> 个人中心 </view>
			</view>
			<view class="top-message" :style="[{'padding-top':menuBottom+10+'px'}]">
				<view class="user-message">
					<view class="user-head-portrait-name-phone-set">
						<view class="user-head-portrait">
							<image class="user-head-portrait_image" :src="requestUrl+user_info.head_ico" v-if="user_info.head_ico&&!this_wei_chat"></image>
							<image class="user-head-portrait_image" v-else :src="user_info.head_ico||'/static/images/logo.png'"></image>
							<view class="name-cart-phone" v-if="user_info.tel">
								<view class="user-name-cart">
									<view class="user-name"> {{ user_info.nick_name || user_info.real_name }} </view>
									<!-- <view class="user-cart"> 时尚卡 </view> -->
								</view>
								<view class="phone-account-number">
									<view class="phone"> {{ user_info.tel }} </view>
								</view>
							</view>
							<view class="name-cart-phone" v-else>
								<view class="user-name-cart">
									<view class="user-name"> -- </view>
								</view>
								<view class="phone-account-number">
									<view class="phone"> -- </view>
								</view>
							</view>
						</view>
						<view class="eye_img" @tap="set_show_user()" v-if="user_info.tel">
							<image src="/static/images/eye_no.png" v-if="this_show_user"></image>
							<image src="/static/images/eye.png" v-else></image>
						</view>
						
						<navigator class="set" url="/pages/my/my_set"> 设置 
							<image class="go_img" src="/static/images/return.png" mode="widthFix"></image>
						</navigator>
					</view>
					<view class="card-volume-integral-bean-balance-currency">
						<view class="all-card" v-for="(i,k) in cardList" :key='k' @tap="change_order(i.id)">
							<view class="card-number"> {{i.number}} </view>
							<view class="card-name"> {{i.name}} </view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="top_advertising" @tap='go_to_member'>
			<image src="https://img-blog.csdnimg.cn/202006161419295.jpg" mode="widthFix"></image>
		</view>
		<view class="content">
			<view class="my-order">
				<view class="order-all-order">
					<view class="order"> 我的订单 </view>
					<view class="all-order" @tap="go_to_order(0)"> 全部订单 
					 <image class="unfold_img" src="/static/images/unfold.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="order-message">
					<view class="order-list" @tap="go_to_order(1)">
						<view class="oder-image-number">
							<view class="order-image">
								<image src="/static/images/my_unpaid.png" mode="widthFix"></image>
							</view>
							<view class="order-number" v-if="orderList.need_pay>0"> {{orderList.need_pay}} </view>
						</view>
						<view class="order-name"> 待付款 </view>
					</view>
					<view class="order-list" @tap="go_to_order(2)">
						<view class="oder-image-number" >
							<view class="order-image">
								<image src="/static/images/my_paid.png" mode="widthFix"></image>
							</view>
							<view class="order-number" v-if="orderList.pay>0"> {{orderList.pay}} </view>
						</view>
						<view class="order-name"> 已付款 </view>
					</view>
					<view class="order-list" @tap="go_to_order(3)">
						<view class="oder-image-number" >
							<view class="order-image">
								<image src="/static/images/my_complete.png" mode="widthFix"></image>
							</view>
						</view>
						<view class="order-name"> 已完成 </view>
					</view>
					<view class="order-list" @tap="go_to_comment">
						<view class="oder-image-number">
							<view class="order-image">
								<image src="/static/images/my_evaluated.png" mode="widthFix"></image>
							</view>
							<view class="order-number" v-if="orderList.not_comment>0"> {{orderList.not_comment}} </view>
						</view>
						<view class="order-name"> 待评价 </view>
					</view>
					<view class="order-list" @tap="go_to_order(4)">
						<view class="oder-image-number" >
							<view class="order-image">
								<image src="/static/images/my_refund.png" mode="widthFix"></image>
							</view>
						</view>
						<view class="order-name"> 已退款 </view>
					</view>
				</view>
			</view>

			<!-- 广告 -->
			<view class="order-advertising-images" v-if="advertising_img.content.length>0">
				<view class="specialList" v-if="advertising_img.type==1">
					<swiper autoplay interval='5000' duration='3000' circular>
						<swiper-item class="swiper-item" v-for="(item,index) in advertising_img.content" :key="index">
							<navigator :url="'/pages'+item.page+'?id='+item.page_id" open-type="switchTab">
								<image :src="requestUrl+item.img" mode="heightFix"></image>
							</navigator>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="serve-and-tool" :style="[{'margin-top':advertising_img.content.length>0?'':'20rpx'}]">
				<view class="serve-and-tool-title"> 服务与工具 </view>
				<view class="serve-and-tool-list">
					<view class="serve-tool-list" v-for="(item,index) in serveToolList"  :key='index'>
						<navigator class="tool-item" :url="'/pages'+item.page"
						 >
							<view class="tool-image">
								<image :src="item.icon" mode="widthFix"></image>
								<view class="this_cart_count" v-if="cart_count>0&&item.name=='购物车'"> {{ cart_count }} </view>
							</view>
							<view class="tool-name"> {{item.name}} </view>
						</navigator>
						<!-- v-if="item.name!='健康评估'&&item.name!='自助预约'&&item.name!='我的预约'" -->
						<!-- <view class="tool-item" v-else @tap='this_go_page(item.page)'>
							<view class="tool-image">
								<image :src="item.icon" mode="widthFix"></image>
							</view>
							<view class="tool-name"> {{item.name}} </view>
						</view> -->
					</view>
				</view>
			</view>

			<view class="guess-what-you-like" v-if="productList.length>0">
				<view class="related-title">
					<view class="line"></view> 猜你喜欢
				</view>
				<scroll-view scroll-y class="topList">
					<template>
						<view class="subject-content">
							<goodsShow :borderRadius=24 :requestUrl='requestUrl' :width=350 :porductList='productList'>
							</goodsShow>
						</view>
					</template>
				</scroll-view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import goodsShow from "../../components/goodsShow.vue";
	export default {
		components: {
			goodsShow,
		},
		data() {
			return {
				menuTop: 0,
				menuHeight: 0,
				menuBottom: 0,
				cardList: [{
						number: 0,
						name: '卡券',
						id:0,
					},
					{
						number: 0,
						name: '积分',
						id:1
					},
					{
						number: 0,
						name: '余额',
						id:2
					},
					{
						number: 0,
						name: '喵币',
						id:3
					},
				],
				orderList: {},
				serveToolList: [{
						icon: "/static/images/my_car.png",
						name: "购物车",
						page: "/cart/cart"
					},
					{
						icon: "/static/images/my_dairy.png",
						name: "我的日记",
						page: "/diary/diary_personal?route=my"
					},
					{
						icon: "/static/images/my_collection.png",
						name: "我的收藏",
						page: "/my/my_collection"
					},
					{
						icon: "/static/images/my_news.png",
						name: "我的消息",
						page: "/message/message"
					},
					{
						icon: "/static/images/my_evaluate.png",
						name: "我的评价",
						page: "/my/my_comment?index=1"
					},
					// {
					// 	icon: "/static/images/my_staff.png",
					// 	name: "员工服务",
					// 	page: "/other/staff_services"
					// },
					// {
					// 	icon: "/static/images/my_healthy.png",
					// 	name: "健康评估",
					// 	page: "/other/jump?url=assessment"
					// },
					// {
					// 	icon: "/static/images/my_register.png",
					// 	name: "自助挂号",
					// 	page: "/other/register"
					// },
					// {
					// 	icon: "/static/images/my_appointment.png",
					// 	name: "自助预约",
					// 	page: "/other/jump?url=appointment"
					// },
					// {
					// 	icon: "/static/images/my_myappointment.png",
					// 	name: "我的预约",
					// 	page: "/other/jump?url=myappointment"
					// },
					// {
					// 	icon: "/static/images/my_material.png",
					// 	name: "物资领取",
					// 	page: "/other/jump?url=get-present/"
					// },
					{
						icon: "/static/images/my_poster.png",
						name: "个人海报",
						page: "/my/my_poster"
					},
					{
						icon: "/static/images/my_address.png",
						name: "地址管理",
						page: "/my/harves_address"
					},
					{
						icon: "/static/images/my_feedback.png",
						name: "意见反馈",
						page: "/my/my_opinion"
					},
					{
						icon: "/static/images/my_about.png",
						name: "关于整呗",
						page: "/other/jump?url=about"
					},
				],
				user_info:{},
				productList: [],
				requestUrl: '',
				offset: 0, //分页起始位置
				advertising_img: {
					content: []
				},
				this_show_user:false,
				this_record:false,
				cart_count:0,//购物车数量
				this_wei_chat:false,
				sweixin:null
			}
		},
		onLoad(options) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.advertising()
			// #ifdef APP-PLUS || APP-NVUE
				that.get_plus()
			// #endif
			
			// 个人中心卡等级、积分获取 非微信小程序不显示
			// that.crmInfo()
		},
		onShow:function(){
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.set_show_user()
			// 猜你喜欢
			that.getLike()
			// 个人中心卡券订单浮标数据
			that.getCardOrder()
		},
		// 页面隐藏
		onHide:function(){
			let that = this
			that.offset = 0
			that.set_show_user()
			that.productList = []
		},
		onReachBottom: function() {
			let that = this;
			that.offset += 1;
			that.getLike()
		},
		onReady() {
			let that = this;
			let platform = getApp().platform || getApp().globalData.platform || 'Applets'
			if (platform == 'Applets') {
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuBottom = menu.bottom
					}
				})
			} 
			else if (platform == 'APP'){
				that.menuTop = 40
				that.menuHeight = 30
				that.menuBottom = 70
			}
		},
		methods: {
			// 获取广告
			advertising: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'getadvertising',
					location: 5
				}
				that.request.uniRequest("home", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.advertising_img = data
					}
				})
			},
			set_show_user:function(){
				let that = this
				that.this_show_user = !that.this_show_user
				if(that.this_show_user){
					that.user_info = uni.getStorageSync("userInfo")
					if(that.user_info){
						let head_ico = that.user_info.head_ico
						if(head_ico.indexOf('https://thirdwx.qlogo.cn/')!= -1){
							that.this_wei_chat = true
						}
						that.user_info.tel = that.user_info.tel.replace(that.user_info.tel.substring(3,7),'****')
					}else{
						uni.showModal({
							title:'提示',
							content:'未登录或登录过期,请登录···',
							confirmText:'前往登录',
							success:function(res){
								if(res.confirm){
									uni.navigateTo({
										url: '/pages/login/login_phone'
									})
								}
								else if(res.cancel){
									uni.switchTab({
										url: '/pages/index/index'
									})
								}
							}
						})
					}
					
				}else{
					that.user_info = uni.getStorageSync("userInfo")
				}
			},
			// 猜你喜欢
			getLike: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'userrecommendedgoodsspulist',
					type: '4',
					offset: that.offset*6
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						if (data.length > 0) {
							that.productList = that.productList.concat(data)
						} else if(that.offset>0&&data.length==0) {
							uni.showToast({
								title: '没有更多了',
								icon: 'none'
							})
						}
					}
				})
			},
			// 个人中心卡券订单浮标数据
			getCardOrder: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'card_order'
				}
				that.request.uniRequest("my", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.orderList = data
						that.cardList[0].number = data.sale_card
						that.get_cart()
					}
				})
			},
			get_cart:function(){
				let that = this
				let dataInfo = {
					interfaceId:'countcart'
				}
				that.request.uniRequest("shoppingCart", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.cart_count = data.cart_count
					}
				})
			},
			// 个人中心卡等级、积分获取
			crmInfo: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'crm_info'
				}
				that.request.uniRequest("my", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
					}
				})
			},
			
			change_order: function(id) {
				if (id==0){
					uni.navigateTo({
						url: `/pages/my/my_card`,
					})
				}else{
					uni.showToast({
						title:'敬请期待···',
						icon:'none'
					})
				}
			},
			go_to_order: function(index) {
				uni.navigateTo({
					url: `/pages/my/my_order?type=${index}`,
				})
			},
			go_to_comment:function(){
				uni.navigateTo({
					url: `/pages/my/my_comment`,
				})
			},
			go_to_member:function(){
				uni.showToast({
					title:'敬请期待···',
					icon:'none'
				})
			},
			
			get_plus: function() {
				let that = this
				//获取当前显示的webview
				let pages = getCurrentPages()
				let page = pages[pages.length - 1]
				let currentWebview = page.$getAppWebview()
				//调用H5+APP的扩展API
				let shares = null;
				let pusher = plus.share.getServices(function(res) {
					shares = {};
					for(let key in res){
						let data = res[key]
						shares[data.id] = data
					}
					that.sweixin = shares['weixin'];
				}, function(e) {
					console.log("获取分享服务列表失败：" + e.message);
				});
				//放入当前的webview
				currentWebview.append(pusher);
			},
			
			this_go_page:function(){
				// #ifdef APP-PLUS || APP-NVUE
					// 唤起微信
					// plus.runtime.openURL('weixin://')
					// 跳转微信小程序
					this.sweixin.launchMiniProgram({
						id: 'gh_c3a79691c089' ,//要跳转小程序的原始ID(此处需要四川华美紫馨医学美容医院的而不是整呗)
						type:0, //小程序版本  0-正式版； 1-测试版； 2-体验版。
						path:'pages/my/my' //小程序的页面,用传的参数在小程序接值判断跳转指定页面
					})
				// #endif
				//  #ifdef MP
					console.log('go_weixin')
				//  #endif
			}
		}
	}
</script>

<style scoped>
	.top-nav-message {
		background-image: linear-gradient(to right, #FA558D,#EF2768);
		overflow: hidden;
		height: auto;
		width: 100%;
	}

	.my-top-bar {
		color: #FFFFFF;
		background-image: linear-gradient(to right, #FA558D,#EF2768);
		text-align: center;
		font-size: 40rpx;
		position: fixed;
		z-index: 100;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
	}

	.back-title {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 38rpx;
	}

	.user-head-portrait-name-phone-set {
		padding: 10rpx 40rpx;
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
		margin-top: -40rpx;
	}

	.user-head-portrait_image {
		width: 112rpx;
		height: 112rpx;
		border-radius: 60rpx;
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

	.user-name-cart .user-cart {
		font-size: 20rpx;
		padding: 6rpx 15rpx;
		background-color: #FFFFFF;
		color: #fa3475;
		border-radius: 17rpx;
		margin-left: 24rpx;
	}

	.user-head-portrait-name-phone-set .phone-account-number {
		color: #f0f0f0;
		line-height: 32rpx;
		margin-top: 10rpx;
		display: flex;
	}

	.user-head-portrait-name-phone-set .set {
		color: #FFFFFF;
		display: flex;
		align-items: center;
	}
	
	.eye_img image{
		width: 40rpx;
		height: 30rpx;
	}

	.set text {
		margin-left: 10rpx;
	}

	.card-volume-integral-bean-balance-currency {
		padding: 25rpx 50rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #FFFFFF;
		font-size: 32rpx;
		text-align: center;
	}

	.all-card .card-name {
		color: #f0f0f0;
	}

	.top_advertising {
		width: 100%;
	}

	.top_advertising image {
		height: 150rpx;
		width: 100%;
	}

	/* 我的订单 */
	.my-order {
		background-color: #FFFFFF;
		border-bottom-left-radius: 24rpx;
		border-bottom-right-radius: 24rpx;
	}

	.order-all-order {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30rpx 35rpx;
		font-size: 28rpx;
		color: #111111;
	}
	.order{
		width: 40%;
		font-weight: bolder;
	}
	
	.all-order {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.all-order text {
		margin-left: 10rpx;
	}

	.order-message {
		padding: 0 60rpx 40rpx;
		font-size: 20rpx;
		color: #505050;
	}

	.order-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.order-message,
	.order-image {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.oder-image-number {
		display: flex;
		margin-bottom: 20rpx;
	}

	.order-image image {
		width: 50rpx;
	}

	.order-number {
		width: 24rpx;
		height: 24rpx;
		border-radius: 12rpx;
		text-align: center;
		line-height: 24rpx;
		background-image: linear-gradient(-31deg, #ee2668 0%, #ff6699 100%);
		color: #FFFFFF;
		font-size: 16rpx;
		margin-left: -10rpx;
		margin-top: -10rpx;
	}

	/* 图片广告 */
	.order-advertising-images,
	.order-advertising-images image {
		width: 100%;
		height: 220rpx;
	}

	/* 服务与工具 */
	.serve-and-tool {
		background-color: #FFFFFF;
		border-radius: 24rpx;
	}

	.serve-and-tool-title {
		line-height: 88rpx;
		padding-left: 30rpx;
		font-size: 28rpx;
		border-bottom: 1rpx solid #f0f0f0;
		font-weight: bolder;
	}

	.serve-and-tool-list {
		padding: 40rpx 20rpx 20rpx;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.serve-tool-list {
		width: 20%;
	}

	.tool-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 20rpx;
		color: #000000;
		margin-bottom: 16rpx;
	}
	
	.tool-image{
		position: relative;
	}
	
	.tool-image image {
		width: 50rpx;
		height: 46rpx;
	}
	.this_cart_count{
		width: 20rpx;
		height: 20rpx;
		font-size: 15rpx;
		background-color: #FA3475;
		border-radius: 10rpx;
		position: absolute;
		top: -10rpx;
		right: -10rpx;
		color: #FFFFFF;
		text-align: center;
	}

	/* 猜你喜欢 */
	.guess-what-you-like {
		background-color: #F6F6F6;
		padding: 40rpx 20rpx;
	}

	.line {
		width: 4rpx;
		height: 16rpx;
		background-color: #fa3576;
		margin-right: 20rpx;
	}

	.related-title {
		font-size: 28rpx;
		line-height: 48rpx;
		color: #111111;
		display: flex;
		align-items: center;
	}
	.go_img{
		width: 24rpx;
		margin-left: 6rpx;
		transform:rotate(180deg);
	}
	.unfold_img{
		width: 24rpx;
		max-height: 28rpx;
		margin-left: 6rpx;
		transform:rotate(270deg);
	}

	.subject-content {
		background-color: #F6F6F6;
	}
	
</style>
