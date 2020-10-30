<template>
	<view class="my_card_gain">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

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
							<ticket :cardsList='cardsList' :time_now='time_now' @showTicket='showTicket' @getCards='getCards' @useCard = 'useCard'></ticket>
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
				<view class="consult"> 立即咨询 </view>
				<view class="my-ticket" @tap='goToMyCard'> 我的卡券 </view>
			</view>
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
				backImage: '/static/images/return.png',
				title: '领取卡券',
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
						that.menuPaddingRight = res.windowWidth - menu.right
					}
				})
			} else {
				that.menuTop = 50
				that.menuWidth = 87
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
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
							}
							if (data.cards.length == 0) {
								that.request.showToast('没有更多了')
							}
							that.cardsList = that.cardsList.concat(data.cards)
							console.log(that.cardsList, 1111111)
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
				console.log(index)
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
				console.log('使用的卡券id:',id)
				let cardId = id
				uni.navigateTo({
					url: `/pages/my/my_card_use?id=${cardId}`
				});
			},
			goToMyCard: function() {
				// let cardId = id
				uni.navigateTo({
					url: `/pages/my/my_card`
				});
			}
		}
	}
</script>

<style scoped>
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
</style>
