<template>
	<view class="my_card_gain">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<view class="top-swiper-tab" :style="[{'top':menuBottom+10+'px'}]">
			<swiperTabHead :tabBars="tabBars" :size='size' :line="line" :tabIndex="tabIndex" :tabBackgroundColor='tabBackgroundColor'
			 @tabtap="tabtap"></swiperTabHead>
		</view>

		<view class="my_card_gain-content" :style="[{'padding-top':menuBottom+40+'px'}]">
			<view class="card_gain-items">
				<swiper :style="[{'height':height-menuBottom-40+'px'}]" :current="tabIndex" @change="tabChange">
					<swiper-item v-for="(i,index) in contentList" :key="index">
						<scroll-view scroll-y :style="[{'height':height-menuBottom-40+'px'}]">
							<template>
								<block>
									<view class="ticket-content" :style="[{'min-height':height-menuBottom-70+'px'}]">
										<!-- 提示 -->
										<view class="ticket-hint"> 尊敬的顾客，小喵为您专属定制以下卡券 </view>

										<view v-if="ticketItemList.length>0">
											<ticket :ticketList='ticketItemList' :marginTop='marginTop' @showDetails='showDetails'></ticket>
											<!-- <ticket :cardsList='cardsList' ></ticket> -->
										</view>

										<!-- 券为空 -->
										<view class="content-item" v-if="ticketItemList.length == 0||cardList.length==0">
											<view class="Ticket-number">
												<view class="images">
													<image src="../../static/images/cartBg.png" mode=""></image>
												</view>
												<view class="no-have-ticket">喵！暂无相关卡券~</view>
											</view>
										</view>
									</view>
								</block>
							</template>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>

		<view class="consult-my-ticket">
			<view class="consult-my-ticket-content">
				<view class="consult"> 立即咨询 </view>
				<view class="my-ticket"> 我的卡券 </view>
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
				height: 0,
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '领取卡卷',
				tabBars: [{
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
				ticketList: {},
				ticketItemList: [],
				marginTop: 54,
				requestUrl: '',
				cardsList:[]
			}
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
			} else {
				that.menuTop = 50
				that.menuWidth = 87
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
			this.tabtap()
		},
		methods: {
			// 获取卡卷
			getCard: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'cardlist',
					card_flg: 0,
					limit: 4,
					offset: '0'
				}
				that.request.getToken().then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let token = res.data.data.token
						uni.setStorage({
							key: 'token',
							data: token,
							success: function() {
								that.request.uniRequest("card", dataInfo).then(res => {
									if (res.data.code == 1000 && res.data.status == 'ok') {
										let data = res.data.data
										that.cardsList = data.cards
										let getTime = data.cards.get_end_time - data.cards.get_start_time //领取时间值
										let userTime = data.cards.use_end_time - data.cards.use_start_time //使用时间的倒计时
										console.log(that.cardsList)
									}
									else{
										// this.request.showToast('暂时没有数据')
										console.log('没有数据')
									}
								})
							}
						})
					}
					else{
						this.request.showToast('未登录')
					}
					
				})
			},
			tabtap: function(index = 0, type = 0) {
				this.tabIndex = index;
				this.listType = type //券的类型
				// type值：0全部 1线上 2线下 3 礼品 4体验
				// console.log(type)
				if (type == 0) {
					this.contentList[index].ticketList = {
						ticketItemList: [{
								serialNumber: '02048492', //编号
								expirationTime: 0, //过期时间
								exclusiveName: '金钻卡专享', //专享名称
								ticketLabel: '满减券', //券类型
								writer: '这是后台配置的使用范围文案，这个最多显示两行，自动省略号...',
								state: '', //当前状态
								userTime: '',
								ticketDetails: ['1、使用时间 ：2018年11月16日 – 2018年12月31日',
									'2、使用范围 ： 全院正价产品满额可使用（不含注射类产品、院外专家、特价/限定产品、充值卡、药品、化妆品、住院费、麻醉费等）;',
									'4、使用方式 ： 仅能在整呗商城线上使用，领取卡券后，在下单时选择卡券即可抵扣;', '5、其他说明：闭馆期间，每个顾客（新老）限一次，不得转让；本券不退换，不找零，卡券过期不予补发。'
								],
								imagesUrl: '',
								showTicketDetails: false,
								arrowImages: '../../static/images/arrow-down.png',
								goColor: '#fa3475',
								toColor: '#ff6699',
								exclusivePrice: 1000,
								meetPriceUser: 10000,
								receive: 1, //可领取的券数量
								allReceive: 5, //总券数量
								receiveTime: true, //是否开启领取券倒计时
							},
							{
								serialNumber: '02048491', //编号
								expirationTime: 0, //过期时间
								exclusiveName: '金钻卡专享', //专享名称
								ticketLabel: '满减券', //券类型
								writer: '这是后台配置的使用范围文案，这个最多显示两行，自动省略号...',
								state: '', //当前状态
								userTime: '',
								ticketDetails: ['1、使用时间 ：2018年11月16日 – 2018年12月31日',
									'2、使用范围 ： 全院正价产品满额可使用（不含注射类产品、院外专家、特价/限定产品、充值卡、药品、化妆品、住院费、麻醉费等）;',
									'4、使用方式 ： 仅能在整呗商城线上使用，领取卡券后，在下单时选择卡券即可抵扣;', '5、其他说明：闭馆期间，每个顾客（新老）限一次，不得转让；本券不退换，不找零，卡券过期不予补发。'
								],
								imagesUrl: '',
								showTicketDetails: false,
								arrowImages: '../../static/images/arrow-down.png',
								goColor: '#fa7a34',
								toColor: '#ff9c66',
								exclusivePrice: 1000,
								meetPriceUser: 10000,
								receive: 0, //可领取的券数量
								uesrReceive: 2, //用户最多领取
								allReceive: 1, //总券数量
								receiveTime: true, //是否开启领取券倒计时
							},
							{
								serialNumber: '02048495', //编号
								expirationTime: 0, //过期时间
								exclusiveName: '618专享', //专享名称
								ticketLabel: '折扣券券', //券类型
								writer: '这是后台配置的使用范围文案，这个最多显示两行，自动省略号...',
								state: '', //当前状态
								userTime: '',
								ticketDetails: ['1、使用时间 ：2018年11月16日 – 2018年12月31日',
									'2、使用范围 ： 全院正价产品满额可使用（不含注射类产品、院外专家、特价/限定产品、充值卡、药品、化妆品、住院费、麻醉费等）;',
									'4、使用方式 ： 仅能在整呗商城线上使用，领取卡券后，在下单时选择卡券即可抵扣;', '5、其他说明：闭馆期间，每个顾客（新老）限一次，不得转让；本券不退换，不找零，卡券过期不予补发。'
								],
								imagesUrl: '',
								showTicketDetails: false,
								arrowImages: '../../static/images/arrow-down.png',
								goColor: '#8834FA',
								toColor: '#A25DFF',
								exclusivePrice: 1000,
								meetPriceUser: 10000,
								receive: 1, //可领取的券数量
								allReceive: 5, //总券数量
								receiveTime: true, //是否开启领取券倒计时
							},
							{
								serialNumber: '02048499', //编号
								expirationTime: 0, //过期时间
								exclusiveName: '618专享', //专享名称
								ticketLabel: '体验券', //券类型
								writer: '这是后台配置的使用范围文案，这个最多显示两行，自动省略号...',
								state: '', //当前状态
								userTime: '',
								ticketDetails: ['1、使用时间 ：2018年11月16日 – 2018年12月31日',
									'2、使用范围 ： 全院正价产品满额可使用（不含注射类产品、院外专家、特价/限定产品、充值卡、药品、化妆品、住院费、麻醉费等）;',
									'4、使用方式 ： 仅能在整呗商城线上使用，领取卡券后，在下单时选择卡券即可抵扣;', '5、其他说明：闭馆期间，每个顾客（新老）限一次，不得转让；本券不退换，不找零，卡券过期不予补发。'
								],
								imagesUrl: '',
								showTicketDetails: false,
								arrowImages: '../../static/images/arrow-down.png',
								goColor: '#fa7a34',
								toColor: '#ff9c66',
								exclusivePrice: 1000,
								meetPriceUser: 10000,
								receive: 0, //可领取的券数量
								allReceive: 0, //总券数量
								receiveTime: true, //是否开启领取券倒计时
							},
							{
								serialNumber: '02048450', //编号
								expirationTime: 0, //过期时间
								exclusiveName: '618专享', //专享名称
								ticketLabel: '体验券', //券类型
								writer: '这是后台配置的使用范围文案，这个最多显示两行，自动省略号...',
								state: '已结束', //当前状态
								userTime: '',
								ticketDetails: ['1、使用时间 ：2018年11月16日 – 2018年12月31日',
									'2、使用范围 ： 全院正价产品满额可使用（不含注射类产品、院外专家、特价/限定产品、充值卡、药品、化妆品、住院费、麻醉费等）;',
									'4、使用方式 ： 仅能在整呗商城线上使用，领取卡券后，在下单时选择卡券即可抵扣;', '5、其他说明：闭馆期间，每个顾客（新老）限一次，不得转让；本券不退换，不找零，卡券过期不予补发。'
								],
								imagesUrl: '',
								showTicketDetails: false,
								arrowImages: '../../static/images/arrow-down.png',
								goColor: '#fa7a34',
								toColor: '#ff9c66',
								exclusivePrice: 1000,
								meetPriceUser: 10000,
								receive: 2, //可领取的券数量
								allReceive: 10, //总券数量
								receiveTime: false, //是否开启领取券倒计时
							},
						],
					}
					this.ticketItemList = this.contentList[index].ticketList.ticketItemList
				} else {
					this.contentList[index].ticketList = {}
					this.ticketItemList = []
				}
			},
			// 选中的内容
			tabChange: function(e) {
				this.tabIndex = e.detail.current;
				let index = e.detail.current;
				let type = e.detail.current
				if (type == 0) {
					this.contentList[index].ticketList = {
						ticketItemList: [{
								serialNumber: '02048492', //编号
								expirationTime: 0, //过期时间
								exclusiveName: '金钻卡专享', //专享名称
								ticketLabel: '满减券', //券类型
								writer: '这是后台配置的使用范围文案，这个最多显示两行，自动省略号...',
								state: '', //当前状态
								userTime: '',
								ticketDetails: ['1、使用时间 ：2018年11月16日 – 2018年12月31日',
									'2、使用范围 ： 全院正价产品满额可使用（不含注射类产品、院外专家、特价/限定产品、充值卡、药品、化妆品、住院费、麻醉费等）;',
									'4、使用方式 ： 仅能在整呗商城线上使用，领取卡券后，在下单时选择卡券即可抵扣;', '5、其他说明：闭馆期间，每个顾客（新老）限一次，不得转让；本券不退换，不找零，卡券过期不予补发。'
								],
								imagesUrl: '',
								showTicketDetails: false,
								arrowImages: '../../static/images/arrow-down.png',
								goColor: '#fa3475',
								toColor: '#ff6699',
								exclusivePrice: 1000,
								meetPriceUser: 10000,
								receive: 1, //可领取的券数量
								allReceive: 5, //总券数量
								receiveTime: true, //是否开启领取券倒计时
							},
							{
								serialNumber: '02048491', //编号
								expirationTime: 0, //过期时间
								exclusiveName: '金钻卡专享', //专享名称
								ticketLabel: '满减券', //券类型
								writer: '这是后台配置的使用范围文案，这个最多显示两行，自动省略号...',
								state: '', //当前状态
								userTime: '',
								ticketDetails: ['1、使用时间 ：2018年11月16日 – 2018年12月31日',
									'2、使用范围 ： 全院正价产品满额可使用（不含注射类产品、院外专家、特价/限定产品、充值卡、药品、化妆品、住院费、麻醉费等）;',
									'4、使用方式 ： 仅能在整呗商城线上使用，领取卡券后，在下单时选择卡券即可抵扣;', '5、其他说明：闭馆期间，每个顾客（新老）限一次，不得转让；本券不退换，不找零，卡券过期不予补发。'
								],
								imagesUrl: '',
								showTicketDetails: false,
								arrowImages: '../../static/images/arrow-down.png',
								goColor: '#fa7a34',
								toColor: '#ff9c66',
								exclusivePrice: 1000,
								meetPriceUser: 10000,
								receive: 0, //可领取的券数量
								uesrReceive: 2, //用户最多领取
								allReceive: 1, //总券数量
								receiveTime: true, //是否开启领取券倒计时
							},
							{
								serialNumber: '02048495', //编号
								expirationTime: 0, //过期时间
								exclusiveName: '618专享', //专享名称
								ticketLabel: '折扣券券', //券类型
								writer: '这是后台配置的使用范围文案，这个最多显示两行，自动省略号...',
								state: '', //当前状态
								userTime: '',
								ticketDetails: ['1、使用时间 ：2018年11月16日 – 2018年12月31日',
									'2、使用范围 ： 全院正价产品满额可使用（不含注射类产品、院外专家、特价/限定产品、充值卡、药品、化妆品、住院费、麻醉费等）;',
									'4、使用方式 ： 仅能在整呗商城线上使用，领取卡券后，在下单时选择卡券即可抵扣;', '5、其他说明：闭馆期间，每个顾客（新老）限一次，不得转让；本券不退换，不找零，卡券过期不予补发。'
								],
								imagesUrl: '',
								showTicketDetails: false,
								arrowImages: '../../static/images/arrow-down.png',
								goColor: '#8834FA',
								toColor: '#A25DFF',
								exclusivePrice: 1000,
								meetPriceUser: 10000,
								receive: 1, //可领取的券数量
								allReceive: 5, //总券数量
								receiveTime: true, //是否开启领取券倒计时
							},
							{
								serialNumber: '02048499', //编号
								expirationTime: 0, //过期时间
								exclusiveName: '618专享', //专享名称
								ticketLabel: '体验券', //券类型
								writer: '这是后台配置的使用范围文案，这个最多显示两行，自动省略号...',
								state: '', //当前状态
								userTime: '',
								ticketDetails: ['1、使用时间 ：2018年11月16日 – 2018年12月31日',
									'2、使用范围 ： 全院正价产品满额可使用（不含注射类产品、院外专家、特价/限定产品、充值卡、药品、化妆品、住院费、麻醉费等）;',
									'4、使用方式 ： 仅能在整呗商城线上使用，领取卡券后，在下单时选择卡券即可抵扣;', '5、其他说明：闭馆期间，每个顾客（新老）限一次，不得转让；本券不退换，不找零，卡券过期不予补发。'
								],
								imagesUrl: '',
								showTicketDetails: false,
								arrowImages: '../../static/images/arrow-down.png',
								goColor: '#fa7a34',
								toColor: '#ff9c66',
								exclusivePrice: 1000,
								meetPriceUser: 10000,
								receive: 0, //可领取的券数量
								allReceive: 0, //总券数量
								receiveTime: true, //是否开启领取券倒计时
							},
							{
								serialNumber: '02048450', //编号
								expirationTime: 0, //过期时间
								exclusiveName: '618专享', //专享名称
								ticketLabel: '体验券', //券类型
								writer: '这是后台配置的使用范围文案，这个最多显示两行，自动省略号...',
								state: '已结束', //当前状态
								userTime: '',
								ticketDetails: ['1、使用时间 ：2018年11月16日 – 2018年12月31日',
									'2、使用范围 ： 全院正价产品满额可使用（不含注射类产品、院外专家、特价/限定产品、充值卡、药品、化妆品、住院费、麻醉费等）;',
									'4、使用方式 ： 仅能在整呗商城线上使用，领取卡券后，在下单时选择卡券即可抵扣;', '5、其他说明：闭馆期间，每个顾客（新老）限一次，不得转让；本券不退换，不找零，卡券过期不予补发。'
								],
								imagesUrl: '',
								showTicketDetails: false,
								arrowImages: '../../static/images/arrow-down.png',
								goColor: '#fa7a34',
								toColor: '#ff9c66',
								exclusivePrice: 1000,
								meetPriceUser: 10000,
								receive: 2, //可领取的券数量
								allReceive: 10, //总券数量
								receiveTime: false, //是否开启领取券倒计时
							},
						],
					}
					this.ticketItemList = this.contentList[index].ticketList.ticketItemList
				} else {
					this.contentList[index].ticketList = {}
					this.ticketItemList = []
				}
			},

			showDetails: function(number) {
				for (let i = 0; i < this.ticketItemList.length; i++) {
					if (this.ticketItemList[i].serialNumber == number) {
						this.ticketItemList[i].showTicketDetails = !this.ticketItemList[i].showTicketDetails
						if (this.ticketItemList[i].showTicketDetails) {
							this.ticketItemList[i].arrowImages = '../../static/images/arrow-top.png'
						} else {
							this.ticketItemList[i].arrowImages = '../../static/images/arrow-down.png'
						}
					}

				}
			}
		}
	}
</script>

<style scoped>
	.top-swiper-tab {
		position: fixed;
		z-index: 9;
		width: 100%;
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

	.ticket-content {
		background-color: #F6F6F6;
		padding: 30rpx 20rpx 120rpx;
	}

	.ticket-hint {
		font-size: 24rpx;
		color: #fa3475;
		text-align: center;
		padding-bottom: 60rpx;
	}

	.content-item {
		padding: 32rpx 36rpx 0;
		font-size: 20rpx;
		line-height: 32rpx;
		color: #999999;
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
