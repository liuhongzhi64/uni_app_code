<template>
	<view class="my_card_gain" :style="show_scan ? 'height: 80vh' : 'min-height:100vh'">
		<view class="top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px'}]">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back" @tap="go_back">
					<image src="/static/images/return.png" mode=""></image>
				</view>
				<view class="title"> 领取卡券 </view>
			</view>
		</view>
		<view class="top-swiper-tab" :style="[{'top':menuBottom+10+'px'}]">
			<swiperTabHead :tabBars="tabBars" :size='size' :line="line" :tabIndex="tabIndex" 
			 @tabtap="tabtap"></swiperTabHead>
		</view>

		<view class="my_card_gain-content" :style="[{'padding-top':menuBottom+45+'px'}]">
			<view class="card_gain-items">
				<scroll-view>
					<view class="ticket-content end-cont" v-for="(i,index) in contentList" :key="index" :class="{dis:tabIndex == index}">
						<view class="ticket-hint"> 尊敬的顾客，小喵为您专属定制以下卡券 </view>
						<view class="have-card" v-if="cardsList.length>0">
							<ticket :cardsList='cardsList' :time_now='time_now'
							 @showTicket='showTicket' @getCards='getCards' @useCard = 'useCard' @scan_card = 'scan_card'>
							</ticket>
						</view>
						<view class="content-item" v-else :style="[{'height':'1000rpx'}]">
							<view class="Ticket-number">
								<view class="images">
									<image src="../../static/images/cartBg.png" mode=""></image>
								</view>
								<view class="no-have-ticket">喵！暂无相关卡券~</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>

		<view class="consult-my-ticket">
			<view class="consult-my-ticket-content">
				<navigator class="consult" url="/pages/consultation/consultation"> 立即咨询 </navigator>
				<navigator class="my-ticket" url="/pages/my/my_card"> 我的卡券 </navigator>
			</view>
		</view>
		<view class="scan_card_info" :style="[{'height':height-menuBottom-10+'px','padding-top':menuBottom+10+'px'}]" v-if="show_scan" @tap="show_scan_info">
			<view class="scan_info_content">
				<image class="scan_img" src="https://xcx.hmzixin.com/upload/images/3.0/card_tc.png" mode="widthFix"></image>
				<view class="hx_code"> 卡券核销码:{{ scan_info.hx_code }} </view>
				<view class="show_name_card_type">
					<view class="show_name_info">
						<text v-if="scan_info.card_type==1||scan_info.card_type==2" :style="[{'background-color':scan_info.card_style}]">满减</text>
						<text v-else-if="scan_info.card_type==3||scan_info.card_type==4" :style="[{'background-color':scan_info.card_style}]">折扣</text>
						<text v-else-if="scan_info.card_type==5" :style="[{'background-color':scan_info.card_style}]">礼品券</text> 
						<text v-else-if="scan_info.card_type==6" :style="[{'background-color':scan_info.card_style}]">体验券</text>
						{{ scan_info.show_name }}
					</view>
				</view>
				<view class="status_scan_type">
					<view class="scan_type_info">
						<view class="status"> 当前状态 : 
						   <text v-if="scan_info.status==0">已冻结</text>
						   <text v-else-if="scan_info.status==1">可使用</text>
						</view>
						<view class="scan_type"> 核销地点 :
							<text v-if="scan_info.scan_type==0">财务室</text>
							<text v-else-if="scan_info.scan_type==1">会员中心</text>
						</view>
					</view>
				</view>
				<view class="use_time_info">
					<view class="user-time" >使用时间 :
						<text> {{scan_info.user_time}} 至 {{scan_info.end_time}} </text>
					</view>
				</view>
				<view class="qrcodes_info">
					<image class="qrcodes_img" :src="requestUrl+scan_info.qrcodes" mode="widthFix"></image>
				</view>
			</view>
			<view class="close_scan_card"> 关闭 </view>
		</view>
	</view>
</template>

<script>
	import swiperTabHead from "../../components/swiper-tab.vue";
	import ticket from "../../components/ticket.vue"
	export default {
		components: {
			swiperTabHead,
			ticket,
		},
		data() {
			return {
				height:0,
				menuTop: 0,
				menuHeight: 0,
				menuBottom: 0,
				tabBars: [
					{
						name: '全部',
						number: 99,
						id: 'all',
						type: 0
					},
					{
						name: '线上券',
						number: 4,
						id: 'on-line',
						type: 1
					},
					{
						name: '线下券',
						number: 10,
						id: 'offline',
						type: 2
					},
					{
						name: '礼品券',
						number: 4,
						id: 'gift',
						type: 3
					},
					{
						name: '体验券',
						number: 4,
						id: 'experience',
						type: 4
					},
				],
				line: true, //是否显示选中线
				tabBackgroundColor: '#FFFFFF',
				size: 24,
				tabIndex: 0, // 选中的顶部的导航，全部。线上下，礼品券的索引
				listType: 0, //券的类型
				contentList: [{
						name: '全部',
					},
					{
						name: '线上券',
					},
					{
						name: '线下券',
					},
					{
						name: '礼品券',
					},
					{
						name: '体验券',
					},
				],
				requestUrl: '',
				cardsList: [],
				time_now: 0,
				limit: 4, //条数
				offset: 1, //页数
				scan_info:{},
				show_scan:false,
				set_time:0,
			}
		},
		onLoad(options) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.getCard(0)
		},
		onReachBottom: function() {
			let that = this;
			that.offset += 1;
			that.getCard(that.listType)
		},
		onShow:function(){
			let that = this
			that.set_time = 0
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().windowHeight ;
			let platform = getApp().platform || getApp().globalData.platform || 'Applets'
			if (platform == 'Applets') {
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuBottom = menu.bottom
						that.menuPaddingRight = res.windowWidth - menu.right
					}
				})
			} 
			else if (platform == 'APP'){
				that.menuTop = 40
				that.menuBottom = 70
				that.menuHeight = 32
			}
		},
		methods: {
			go_back:function(){
				let that = this
				that.set_time = 0
				uni.navigateBack({
					delta: 1
				});
			},
			// 获取卡卷
			getCard: function(type) {
				let that = this
				that.listType = type
				let dataInfo = {
					interfaceId: 'cardlist',
					card_flg: type,
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
							that.time_now = data.time_now
							// let getTime = data.cards.get_end_time - data.cards.get_start_time //领取时间值
							// let userTime = data.cards.use_end_time - data.cards.use_start_time //使用时间的倒计时
							for (let i = 0; i < data.cards.length; i++) {
								data.cards[i].showTicketDetails = false
								data.cards[i].arrowImages = '/static/images/arrow-down.png'
								if(data.cards[i].get_end_time-data.time_now>0){
									data.cards[i].day = 0
									data.cards[i].house = 0
									data.cards[i].second = 0
									data.cards[i].minute = 0
									if(that.cardsList.length>0){
										that.set_dount_down(data.cards[i].get_end_time-data.time_now, i+that.cardsList.length)
									}else{
										that.set_dount_down(data.cards[i].get_end_time-data.time_now, i)
									}
									
								}
								
							}
							if (data.cards.length == 0 && that.offset>1) {
								that.request.showToast('没有更多了')
							}
							that.cardsList = that.cardsList.concat(data.cards)
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
			// 开启倒计时
			set_dount_down:function(time, i) {
				let that = this
				let secondTime = 0; // 分
				let hourTime = 0; // 小时
				let day = 0; //天
				let timers = setInterval(function() {
					time -= 1
					let minuteTime = time; // 秒
					if (minuteTime > 60) {
						secondTime = parseInt(minuteTime / 60)
						minuteTime = parseInt(minuteTime % 60)
						if (secondTime > 60) {
							hourTime = parseInt(secondTime / 60)
							secondTime = parseInt(secondTime % 60)
							if (hourTime > 24) {
								day = parseInt(hourTime / 24)
								hourTime = parseInt(hourTime % 60)
							}
						}
					} else {
						secondTime = 0
						hourTime = 0
						day = 0
					}
					that.cardsList[i].day = day
					that.cardsList[i].house = hourTime
					that.cardsList[i].second = secondTime
					that.cardsList[i].minute = minuteTime
					// console.log(that.cardsList[i],day,hourTime,secondTime,minuteTime,)
					if (time <= 0) {
						clearInterval(timers)
					}
					if(that.set_time>0){
						clearInterval(timers)
					}
				}, 1000)
				// console.log(that.cardsList[i].day, that.cardsList[i].house, that.cardsList[i].second, that.cardsList[i].minute)
			},
			tabtap: function(index, type) {
				this.tabIndex = index;
				this.listType = type //券的类型
				let that = this
				that.cardsList = []
				that.offset = 1
				that.getCard(type)
				// type值：0全部 1线上 2线下 3 礼品 4体验
			},
			showTicket: function(cardId) {
				let that = this
				for (let i = 0; i < that.cardsList.length; i++) {
					if (that.cardsList[i].id == cardId) {
						that.cardsList[i].showTicketDetails = !that.cardsList[i].showTicketDetails
						if (that.cardsList[i].showTicketDetails) {
							that.cardsList[i].arrowImages = '/static/images/arrow-top.png'
						} else {
							that.cardsList[i].arrowImages = '/static/images/arrow-down.png'
						}
					}
				}
			},
			// 领取卡券
			getCards: function(cardId, prompt,index) {
				let that = this
				if (prompt == '') {
					let dataInfo = {
						interfaceId: 'cardget',
						card_id: cardId
					}
					that.request.uniRequest("card", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.request.showToast('领取成功')
							that.cardsList[index].salecard_user_count = that.cardsList[index].salecard_user_count+1
							that.cardsList = that.cardsList 
						}
					})
				} else {
					that.request.showToast(prompt)
				}
			},
			// 使用卡券
			useCard:function(id){
				let cardId = id
				uni.navigateTo({
					url: `/pages/my/my_card_use?id=${cardId}`
				});
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
			// 核销卡券
			scan_card:function(id){
				let that = this
				let dataInfo = {
					interfaceId:'salecard_user_scan',
					card_id:id
				}
				that.request.uniRequest("card", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						data.user_time = that.setTimer(data.use_start_time)
						data.end_time = that.setTimer(data.use_end_time)
						that.scan_info = data
						that.show_scan = !that.show_scan
					}
				})
			},
			show_scan_info:function(){
				let that = this
				that.show_scan = !that.show_scan
			},
		}
	}
</script>

<style scoped>
	.top-bar {
		text-align: center;
		font-size: 40rpx;
		position: fixed;
		z-index: 100;
		width: 100%;
		top: 0;
		left: 0;
		background-color: #222222;
		color: #FFFFFF;
	}
	
	.back-title {
		font-size: 38rpx;
		position: relative;
		text-align: center;
	}
	
	.back {
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		width: 60rpx;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.back image {
		width: 36rpx;
		height: 36rpx;
	}
	
	.back-title .title {
		font-size: 37rpx;
	}
	.my_card_gain {
		height: 100%;
	}

	.top-swiper-tab {
		position: fixed;
		z-index: 9;
		width: 100%;
		background-color: #FFFFFF;
	}

	.end-cont {
		display: none;
	}

	.dis {
		display: block;
	}

	.item-content {
		display: flex;
	}

	.my_card_gain-content,
	.card_gain-items {
		background-color: #F6F6F6;
		width: 100%;
		height: 100%;
	}

	.ticket-content {
		min-height: 1100rpx;
		padding: 30rpx 20rpx 120rpx;
	}

	.ticket-hint {
		font-size: 24rpx;
		color: #fa3475;
		text-align: center;
		padding-bottom: 60rpx;
	}
	.have-card{
		/* min-height: 1000rpx; */
	}

	.content-item {
		padding: 32rpx 36rpx 0;
		font-size: 20rpx;
		line-height: 32rpx;
		color: #999999;
		height: 100%;
	}

	.ticket-use-explain {
		padding: 32rpx 36rpx 0;
		font-size: 20rpx;
		line-height: 32rpx;
		color: #999999;
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

	.consult-my-ticket {
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 9;
		background-color: #FFFFFF;
	}

	.consult-my-ticket-content {
		height: 104rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12rpx 20rpx;
	}

	.consult {
		width: 344rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		color: #FFFFFF;
		background-image: linear-gradient(-45deg, #8834fa 0%, #bc66ff 100%);
		border-radius: 40rpx;
		font-size: 28rpx;
	}

	.my-ticket {
		font-size: 28rpx;
		color: #FFFFFF;
		width: 344rpx;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
		border-radius: 40rpx;
	}
	
	.scan_card_info{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9;
		width: 100%;
		background-color: #999999;
		opacity: 0.9;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.scan_info_content{
		width: 80%;
		position: relative;
		color: #000000;
	}
	.hx_code{
		width: 100%;
		text-align: center;
		position: absolute;
		top: 40rpx;
		left: 0;
		color: #999999;
	}
	.scan_img{
		width: 100%;
	}
	.show_name_card_type{
		position: absolute;
		left: 0;
		width: 100%;
		top: 120rpx;
	}
	.show_name_info{
		padding: 0 40rpx;
		font-size: 24rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-height: 28rpx;
		color: #000000;
	}
	.show_name_info text{
		border-radius: 10rpx;
		color: #FFFFFF;
		padding: 0 10rpx;
		margin-right: 10rpx;
	}
	
	.status_scan_type{
		position: absolute;
		width: 100%;
		left: 0;
		top: 240rpx;
	}
	
	.scan_type_info{
		display: flex;
		justify-content: space-between;
		padding: 0 40rpx;
		color: #000000;
		font-size: 22rpx;
	}
	
	.status text{
		color: #fa3475;
		margin-left: 10rpx;
	}
	.scan_type text{
		margin-left: 10rpx;
	}
	
	.use_time_info{
		position: absolute;
		left: 0;
		width: 100%;
		top: 280rpx;
		font-size: 20rpx;
		color: #999999;
	}
	.user-time{
		padding: 0 40rpx;
	}
	.user-time text{
		margin-left: 10rpx;
	}
	
	.qrcodes_info{
		position: absolute;
		left: 0;
		width: 100%;
		top: 360rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.qrcodes_img{
		width: 60%;
	}
	
	.close_scan_card{
		width: 80%;
		line-height: 80rpx;
		text-align: center;
		color: #FFFFFF;
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
		border-radius: 40rpx;
		font-size: 28rpx;
		margin-top: 30rpx;
	}
</style>
