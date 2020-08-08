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
									<view class="ticket-content">
										{{i.name}}
										<view class="aaa" v-if="ticketItemList.length>0">
											<ticket  :ticketList = 'ticketItemList'></ticket>
										</view>
									</view>
								</block>

							</template>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import swiperTabHead from "../../components/swiper-tab.vue";
	import ticket from  "../../components/ticket.vue"
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
				ticketList:{},
				ticketItemList:[]
			}
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
			this.tabtap()
		},
		methods: {
			tabtap: function(index = 0, type = 0) {
				this.tabIndex = index;
				this.listType = type //券的类型
				// type值：0全部 1线上 2线下 3 礼品 4体验
				// console.log(type)
				if(type == 0){
					this.contentList[index].ticketList = {
						ticketItemList: [
							{
								serialNumber: '02048492', //编号
								expirationTime: 328, //过期时间
								exclusiveName: '金钻卡专享', //专享名称
								ticketLabel: '满减券', //券类型
								writer: '这是后台配置的使用范围文案，这个最多显示两行，自动省略号...',
								state: '可使用', //当前状态
								userTime: '2020-05-01至2020-05-31',
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
							},
							{
								serialNumber: '02048491', //编号
								expirationTime: 24, //过期时间
								exclusiveName: '金钻卡专享', //专享名称
								ticketLabel: '满减券', //券类型
								writer: '这是后台配置的使用范围文案，这个最多显示两行，自动省略号...',
								state: '冻结中', //当前状态
								userTime: '2020-05-01至2020-05-31',
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
							},
							{
								serialNumber: '02048495', //编号
								expirationTime: 24, //过期时间
								exclusiveName: '618专享', //专享名称
								ticketLabel: '礼品券', //券类型
								writer: '这是后台配置的使用范围文案，这个最多显示两行，自动省略号...',
								state: '已使用', //当前状态
								userTime: '2020-05-01至2020-05-31',
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
							},
							{
								serialNumber: '02048499', //编号
								expirationTime: 2, //过期时间
								exclusiveName: '618专享', //专享名称
								ticketLabel: '体验券', //券类型
								writer: '这是后台配置的使用范围文案，这个最多显示两行，自动省略号...',
								state: '已失效', //当前状态
								userTime: '2020-05-01至2020-05-31',
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
							},
						],
					}
				this.ticketItemList = this.contentList[index].ticketList.ticketItemList 
				}
				else{
					this.contentList[index].ticketList = {}
				}
				console.log(this.contentList[index])
			},
			// 选中的内容
			tabChange: function(e) {
				this.tabIndex = e.detail.current;
				let type = e.detail.current
				// if(type == 0){
				// 	this.contentList[type].ticketList = {
				// 		name:'1'
				// 	}
				// }
				// else{
				// 	this.contentList[type].ticketList = {}
				// }
				console.log(type)
			},
			
			
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
</style>
