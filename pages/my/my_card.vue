<template>
	<view class="my_card">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :barImage='barImage' :color='color' :backImage='backImage'
		 :barName='barName' :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft'
		 :menuBottom='menuBottom'></topBar>

		<view class="my_card-content">
			<scroll-view class="my_card-content" :style="[{'padding-top':menuBottom+50+'px'}]">
				<template>
					<view class="my_card-item">
						<view class="card-top" :style="[{'top':menuBottom+10+'px'}]" @tap='goToGain'>
							<view class="can-receive">
								<view>您有</view>
								<view class="text">{{get_count}}张专属优惠券</view>
								<view class="texts">可领取~</view>
							</view>
							<view class="go-receive">
								<view class="line">
									<view class="triangle-line"></view>
								</view>
								<view class="character">去领取&nbsp;></view>
							</view>
						</view>
						<view class="tabBarList" :style="[{'top':menuBottom+50+'px'}]">
							<view class="tab-bar-list">
								<swiperTabHead :tabBars="tabBars" :size='size' :line="line" :tabIndex="tabIndex" :tabBackgroundColor='tabBackgroundColor'
								 @tabtap="tabtap"></swiperTabHead>
							</view>
						</view>
						<view class="list-content">
							<view class="item-content end-cont" :class="{dis:tabIndex == index}" v-for="(i,index) in tabBars" :key="index">
								<view class="ticket-label" :style="[{'top':menuBottom+90+'px'}]">
									<view class="label-name"
									 :class="{labelColor:colorNum==k}" 
									 @tap='selectLabel(k,listType)' 
									 v-for="(i,k) in lableList"
									 :key='k'>
										{{i}}
									</view>
								</view>
								<view class="select-content end-cont"
								 :style="[{'padding-top':60+'px'}]" 
								 :class="{dis:colorNum == k}" 
								 v-for="(item,k) in lableList"
								 :key="k">
									<view class="ticket-use-explain" :style="[{'padding-top':30+'px'}]">
										<!-- <view class="title">{{i.name}}{{i.type}}{{k}}</view> -->
										<scroll-view class="select-contents">
											<view class="content-item" v-if="cardsList.length == 0">
												<view class="Ticket-number">
													<view class="images">
														<image src="../../static/images/cartBg.png" mode=""></image>
													</view>
													<view class="no-have-ticket">喵！暂无相关卡券~</view>
												</view>
											</view>
											<ticket v-else
											 :cardsList='cardsList' 
											 :time_now='time_now' 
											 @showTicket='showTicket'
											 @useCard = 'useCard'
											 @deleteCard = 'deleteCard'
											 @scanCard = 'scanCard'>
											</ticket>
											
										</scroll-view>
									</view>
								</view>
							</view>
						</view>
						
					</view>
				</template>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import swiperTabHead from "../../components/swiper-tab.vue";
	import ticket from "../../components/ticket.vue"
	export default {
		components: {
			topBar,
			swiperTabHead,
			ticket,
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../../static/images/return.png',
				barImage: '../static/images/refresh.png',
				title: '我的卡券',
				line: true, //是否显示选中线
				tabBackgroundColor: '#FFFFFF',
				size: 24,
				tabIndex: 0, // 选中的顶部的导航，全部。线上下，礼品券
				listType: 1, //券的类型
				tabBars: [{
						name: '全部',
						number: 0,
						id: 'all',
						type: 0
					},
					{
						name: '线上券',
						number: 0,
						id: 'on-line',
						type: 1
					},
					{
						name: '线下券',
						number: 0,
						id: 'offline',
						type: 2
					},
					{
						name: '礼品券',
						number: 0,
						id: 'gift',
						type: 3
					},
					{
						name: '体验券',
						number: 0,
						id: 'experience',
						type: 4
					},
				],								
				colorNum: 0, //选择的券是冻结中,0可使用，1冻结中，2已失效 3已使用
				requestUrl: '',
				lableList: ['可使用', '冻结中', '已失效', '已使用'],
				cardsList: [],
				time_now: 0,
				card_flg:0, //0全部1线上2线下3礼品4体验
				card_state:1, //1可使用2冻结中3已失效4已使用
				limit:4, //	每页多少条
				offset:1 ,//页数
				get_count:0,//可领取数量
			}
		},
		onReachBottom: function() {
			let that = this;
			that.offset += 1;
			that.getCard()
		},
		onLoad(options) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.getCard()
		},
		onReady() {
			let that = this;
			// 判定运行平台
			let platform = ''
			switch (uni.getSystemInfoSync().platform) {
				case 'android':
					// console.log('运行Android上')
					platform = 'android'
					break;
				case 'ios':
					// console.log('运行iOS上')
					platform = 'ios'
					break;
				default:
					// console.log('运行在开发者工具上')
					platform = 'applet'
					break;
			}
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
				that.menuWidth = 87
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			// 初始化获取卡券列表
			getCard: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'usercard',
					card_flg: that.card_flg,
					card_state: that.card_state,
					limit: that.limit,
					offset: that.offset
				}
				if (uni.getStorageSync("token")) {
					that.request.uniRequest("card", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							that.tabBars[0].number = data.num.all
							that.tabBars[1].number = data.num.online
							that.tabBars[2].number = data.num.offline
							that.tabBars[3].number = data.num.gift
							that.tabBars[4].number = data.num.experience
							that.get_count = data.get_count
							that.time_now = data.time_now
							for (let i = 0; i < data.cards.length; i++) {
								data.cards[i].showTicketDetails = false
								data.cards[i].arrowImages = '../../static/images/arrow-down.png'
								let startTime = data.cards[i].use_start_time
								data.cards[i].c_use_start_time = that.setTimer(startTime)
								let useTime = data.cards[i].use_end_time
								data.cards[i].c_use_end_time = that.setTimer(useTime)
							}
							that.cardsList = that.cardsList.concat(data.cards)
							console.log(data,that.time_now)
						} else {
							console.log('没有数据')
						}
					})
				} else {
					this.request.showToast('未登录,将为您跳转到登录页面')
					uni.navigateTo({
						url: '/pages/login/login_phone'
					});
				}
			},
			
			setTimer:function(date){
				date = new Date(date*1000)
				let month = date.getMonth() +1
				if(month<10){
					month = "0" + month
				}
				let day = date.getDate()
				if(day<10){
					day = "0" + day
				}
				let time = date.getFullYear() + '-' + month + '-' + day
				// console.log(time)
				return time
			},
			
			//接受子组件传过来的值点击切换导航
			tabtap: function(index, type) {
				let that = this
				that.tabIndex = index;
				that.listType = type //券的类型
				that.card_flg = type
				that.card_state = 1
				that.colorNum = 0
				that.offset = 1
				// type值：0全部 1线上 2线下 3 礼品 4体验
				that.cardsList = []
				that.getCard()
			},

			// 领券中心
			goToGain: function() {
				uni.navigateTo({
					url: `/pages/my/my_card_gain`,
				})
			},

			selectLabel: function(k, type) {
				let that = this
				that.colorNum = k
				that.card_state = k+1
				that.offset = 1
				that.cardsList = []
				//type值：0全部 1线上 2线下 3 礼品 4体验
				// k值 0可使用 1冻结中 2 已失效 3已使用
				that.getCard()
			},
			// 使用卡券
			useCard:function(id,state){
				// console.log('使用的卡券id:',id,"卡券状态",state)
				let cardId = id
				if(state==1){
					uni.navigateTo({
						url: `/pages/my/my_card_use?id=${cardId}`
					});
				}
				else{
					uni.showModal({
						title:'提示',
						content:'当前卡券处于冻结中,暂不可用',
						confirmText:'我知道了',
						cancelText:'冻结说明',
						success:function(res){
							if (res.cancel){
								uni.showModal({
									title:'冻结说明',
									content:'1）若卡券是下单后赠送的、支付有礼赠送的，需要核销订单后卡券才可使用;2）若相关订单发生退款，则赠送的卡券将失效，或者赠送的卡券未在规定时间内核销使用也将失效3）失效的卡券将不予补发',
									showCancel:true,
									confirmText:'我知道了'		
								})
							}
						}
					})
				}
			},
			// 核销卡券
			scanCard:function(id){
				let cardId = id
				console.log('核销的卡券id:',cardId)
				// uni.navigateTo({
				// 	url: `/pages/check/check_card?id=${cardId}`
				// });
			},
			// 删除卡券
			deleteCard:function(id){
				let that = this
				let cardId = id
				// console.log('要删除的卡券id:',id)
				let dataInfo = {
					interfaceId:'carduse_del',
					card_user_id:cardId
				}
				uni.showModal({
					title:'提示',
					content:'确定要删除此卡券吗?',
					success:function(res){
						if (res.confirm) {
							that.request.uniRequest("card", dataInfo).then(res => {
								if (res.data.code == 1000 && res.data.status == 'ok') {
									that.getCard()
									uni.showToast({
										title: '提示',
										content: '删除成功'
									})
								}
							})
						}
					}
				})
				
			},
			showTicket: function(cardId) {
				let that = this
				for (let i = 0; i < that.cardsList.length; i++) {
					if (that.cardsList[i].id == cardId) {
						that.cardsList[i].showTicketDetails = !that.cardsList[i].showTicketDetails
						if (that.cardsList[i].showTicketDetails) {
							that.cardsList[i].arrowImages = '../../static/images/arrow-top.png'
						} else {
							that.cardsList[i].arrowImages = '../../static/images/arrow-down.png'
						}
					}
				}
			},
			
		},

	}
</script>

<style scoped>
	.card-top {
		height: 80rpx;
		line-height: 80rpx;
		background-image: linear-gradient(-90deg, #fa3475 0%, #ff6699 100%);
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		color: #FFFFFF;
		position: fixed;
		z-index: 9;
		width: 100%;
	}

	.tabBarList {
		position: fixed;
		z-index: 9;
		width: 100%;
	}

	.can-receive {
		padding-left: 21rpx;
		display: flex;
		align-items: flex-end;
		text-align: center;
		line-height: 80rpx;
	}

	.can-receive .text {
		font-weight: bolder;
	}

	.texts {
		line-height: 79rpx;
	}

	.go-receive {

		display: flex;
	}

	.go-receive .line {
		height: 80rpx;
	}

	.go-receive .triangle-line {
		display: block;
		width: 0;
		height: 0;
		border-width: 40rpx;
		border-style: solid;
		border-color: transparent #5be3d5 transparent transparent;
		transform: rotate(360deg);
		margin-left: -40rpx;
	}

	.character {
		text-align: center;
		background-color: #5be3d5;
		width: 167rpx;
		text-align: center;
	}

	.end-cont {
		display: none;
	}

	.dis {
		display: block;
	}

	.my_card-content {
		background-color: #F6F6F6;
		height: 100%;
	}

	.ticket-label {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		position: fixed;
		z-index: 9;
		background-color: #F6F6F6;
		width: 100%;
		padding: 30rpx 20rpx 20rpx;
	}

	.ticket-label .label-name {
		width: 107rpx;
		height: 46rpx;
		border-radius: 25rpx;
		text-align: center;
		line-height: 50rpx;
		background-color: #f0f0f0;
		font-size: 20rpx;
		margin-right: 30rpx;
	}

	.labelColor {
		background-color: #ffe8f0;
		border: 2rpx solid #fa3475;
		color: #fa3475;
	}

	.content-item {
		padding: 32rpx 36rpx 0;
		font-size: 20rpx;
		line-height: 32rpx;
		color: #999999;
		height: 1100rpx;
	}


	.ticket-use-explain {
		padding: 32rpx 20rpx 0;
		font-size: 20rpx;
		line-height: 32rpx;
		color: #999999;
	}
	.select-contents{
		padding-bottom: 32rpx;
		min-height: 1140rpx;
	}

	.images {
		padding: 100rpx 0 46rpx;
		display: flex;
		justify-content: center;
	}

	.images image {
		width: 360rpx;
		height: 345rpx;
	}

	.no-have-ticket {
		text-align: center;
		font-size: 32rpx;
		color: #111111;
	}

	.content-list {
		padding: 0 20rpx 100rpx;
	}

	.ticket-items {
		margin-top: 40rpx;
		position: relative;
	}

	.ticket-numer {
		color: #999999;
	}

	.ticket-number-expiration-time {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 20rpx;
	}

	.ticket-number {
		color: #999999;
	}

	.expiration-time {
		color: #fa3475;
	}

	.ticket-items-content {
		display: flex;
		justify-content: center;
		/* align-items: center; */
		border-bottom: 1rpx dashed #999999;
		margin-top: 20rpx;
	}

	.ticket-label-writer-state-userTime {
		background-color: #FFFFFF;
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 30rpx 32rpx 20rpx;
		border-top-left-radius: 16rpx;
	}

	.ticket-label-writer {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.ticket-labels {
		padding: 2rpx 9rpx;
		font-size: 18rpx;
		margin-right: 10rpx;
		color: #FFFFFF;
		background-image: linear-gradient(-90deg, #8834fa 0%, #a25eff 100%);
		border-radius: 4rpx;
	}

	.ticket-writer {
		font-size: 28rpx;
		color: #111111;
	}

	.ticket-state {
		font-size: 24rpx;
		margin-top: 47rpx;
	}

	.ticket-state text {
		margin-left: 10rpx;
	}

	.user-time {
		font-size: 20rpx;
		color: #999999;
		margin-top: 14rpx;
	}

	.ticket-images-exclusiveName {
		width: 248rpx;
		border-top-right-radius: 16rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #FFFFFF;
	}

	.exclusive-name {
		width: 128rpx;
		height: 36rpx;
		text-align: center;
		background-image: linear-gradient(0deg, #070606 0%, #303030 100%);
		border-radius: 0rpx 0rpx 16rpx 16rpx;
		font-size: 20rpx;
		line-height: 36rpx;
	}

	.exclusive-price {
		font-size: 56rpx;
		margin-top: 10rpx;
	}

	.exclusive-price text {
		font-size: 32rpx;
	}

	.meet-price-user {
		font-size: 24rpx;
		margin-top: 20rpx;
	}

	.useing-ticket {
		width: 160rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 3rpx 6rpx 0rpx rgba(0, 0, 0, 0.16);
		border-radius: 20rpx;
		margin-top: 20rpx;
		font-size: 24rpx;
	}

	.ticketDetails {
		padding: 18rpx 26rpx 18rpx 30rpx;
		border-bottom-left-radius: 16rpx;
		border-bottom-right-radius: 16rpx;
		box-shadow: 0rpx 0rpx 32rpx 0rpx rgba(101, 101, 101, 0.24);
		color: #999999;
	}

	.details-title {
		font-size: 20rpx;
		display: flex;
		align-items: center;
	}

	.details-title image {
		margin-left: 15rpx;
		width: 32rpx;
		height: 32rpx;
	}

	.item-details {
		font-size: 20rpx;
		line-height: 30rpx;
	}

	.ticket-label-images {
		position: absolute;
		top: 80rpx;
		right: 170rpx;
		z-index: 9;
	}

	.ticket-label-images image {
		width: 195rpx;
		height: 155rpx;
	}
</style>
