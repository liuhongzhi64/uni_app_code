<template>
	<view class="my_card">

		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :barImage='barImage' :color='color' :backImage='backImage'
		 :barName='barName' :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft'
		 :menuBottom='menuBottom'></topBar>

		<view class="my_card-content">
			<scroll-view class="my_card-content" scroll-y :style="[{'padding-top':menuBottom+50+'px','height':height-menuBottom-50+'px'}]">
				<template>
					<view class="my_card-item">
						<view class="card-top" :style="[{'top':menuBottom+10+'px'}]" @tap='goToGain'>
							<view class="can-receive">
								<view>您有</view>
								<view class="text">7张专属优惠券</view>
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
							<view class="item-content end-cont" :data-type='listType' :class="{dis:tabIndex == index}" v-for="(i,index) in ticketList"
							 :key="index">
								<text v-if="!ticketList[index].ticketContent">{{i.name}}</text>

								<view class="ticket-content" v-if="ticketList[index].ticketContent">
									<view class="ticket-label" :style="[{'top':menuBottom+90+'px'}]">
										<view class="label-name" :class="{labelColor:colorNum==k}" @tap='selectLabel(k,listType)' v-for="(i,k) in ticketList[index].ticketContent.lableList"
										 :key='k'>
											{{i}}
										</view>
									</view>

									<view class="select-content end-cont" :style="[{'padding-top':60+'px'}]" :class="{dis:colorNum == index}"
									 v-for="(i,index) in contentList" :key="index">

										<!-- 按钮为除可使用状态时显示的券说明 -->
										<view class="ticket-use-explain" v-if="colorNum != 0" :style="[{'padding-top':30+'px'}]">
											<view class="title">{{i.selectContent.title}}</view>
											<view v-for="(item,index) in i.selectContent.list" :key="index"> {{item}} </view>
										</view>

										<!-- 券为空 -->
										<view class="content-item" v-if="TicketNumber == 0">
											<view class="Ticket-number">
												<view class="images">
													<image src="../../static/images/cartBg.png" mode=""></image>
												</view>

												<view class="no-have-ticket">喵！暂无相关卡券~</view>
											</view>

										</view>

										<!-- 券不为空的 -->
										<view class="content-list" v-if="TicketNumber > 0" :style="[{'padding-top':10+'px'}]">

											<view class="ticket-items" v-for="(i,k) in ticketItemList">
												<view class="ticket-number-expiration-time">
													<view class="ticket-numer">{{i.serialNumber}}</view>
													<view class="expiration-time" v-if="i.state == '可使用' || i.state =='冻结中'">{{i.expirationTime}}小时内过期</view>
													<view class="expiration-time" v-if="i.state == '已失效' || i.state =='已使用'"> 删除 </view>
												</view>

												<view class="ticket-items-content">
													<view class="ticket-label-writer-state-userTime">
														<view class="ticket-label-writer">
															<text class="ticket-labels" :style="[{'background-image': i.state == '可使用' || i.state =='冻结中' ? `linear-gradient(-90deg,  ${i.goColor} 0%,  ${i.toColor} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]">
																{{i.ticketLabel}}</text>
															<text class="ticket-writer"> {{i.writer}} </text>
														</view>
														<view class="ticket-state">当前状态:
															<text v-if="i.state == '可使用'&&i.state != '冻结中'" :style="[{'color':'#fa3475'}]">
																{{i.state}}
															</text>
															<text v-if="i.state != '可使用'&&i.state == '冻结中'" :style="[{'color':'#0073c4'}]">
																{{i.state}}
															</text>
															<text v-if="i.state == '已使用'||i.state == '已失效'" :style="[{'color':'#111111'}]">
																{{i.state}}
															</text>
														</view>
														<view class="user-time">使用时间:<text>{{i.userTime}}</text></view>
													</view>
													<view class="ticket-images-exclusiveName" :style="[{'background-image': i.state == '可使用' || i.state =='冻结中' ? `linear-gradient(-90deg,  ${i.goColor} 0%,  ${i.toColor} 100%)`:` linear-gradient(-90deg,#999999 0%,  #999999 100%)`}]">
														<view class="exclusive-name">{{i.exclusiveName}}</view>
														<view class="exclusive-price"> <text>￥</text> {{i.exclusivePrice}}</view>
														<view class="meet-price-user">满{{i.meetPriceUser}}元可用</view>
														<view class="useing-ticket" v-if="i.state == '可使用' || i.state =='冻结中'" :style="{'color':i.toColor}"> 立即使用
														</view>
													</view>
												</view>
												<view class="ticketDetails" @tap='showDetails(i.serialNumber)'>
													<view class="details-title"> <text>卡券详情</text>
														<image :src="i.arrowImages" mode=""></image>
													</view>
													<view class="details-content" v-if="i.showTicketDetails">
														<view class="item-details" v-for="(i,k) in i.ticketDetails">{{i}}</view>
													</view>


												</view>

												<view class="ticket-label-images" v-if="i.state == '已使用'">
													<image src="../../static/images/state2.png" mode=""></image>
												</view>
												<view class="ticket-label-images" v-if="i.state == '已失效'">
													<image src="../../static/images/state1.png" mode=""></image>
												</view>
											</view>

										</view>

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
	export default {
		components: {
			topBar,
			swiperTabHead,
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
				topBackgroundColor: '#eeeeee',
				color: '#222222',
				backImage: '../static/images/back1.png',
				barImage: '../static/images/refresh.png',
				title: '我的卡卷',
				line: true, //是否显示选中线
				tabBackgroundColor: '#FFFFFF',
				size: 24,
				tabIndex: 1, // 选中的顶部的导航，全部。线上下，礼品券
				listType: 1, //券的类型
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
				ticketList: [{
						name: '全部',
					},
					{
						name: '线上',
					},
					{
						name: '线下',
					},
					{
						name: '礼品'
					},
					{
						name: '体验'
					},
				],
				ticketContent: {},
				colorNum: 0, //选择的券是冻结中,0可使用，1冻结中，2已失效 3已使用
				contentList: [{
					type: 0
				}, {
					type: 1
				}, {
					type: 2
				}, {
					type: 3
				}],
				selectContent: {},
				TicketNumber: 0, //券数量
				ticketItemList: [],
			}
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
			if(platform=='applet'){
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
			}
			else{
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
			that.tabtap()
			that.selectLabel()
		},
		methods: {
			//接受子组件传过来的值点击切换导航
			tabtap: function(index = 0, type = 0) {
				this.tabIndex = index;
				this.listType = type //券的类型
				// type值：0全部 1线上 2线下 3 礼品 4体验
				this.ticketList[index].ticketContent = {
					lableList: ['可使用', '冻结中', '已失效', '已使用']
				}
				this.selectLabel(0, type)
			},
			
			// 领券中心
			goToGain:function(){
				uni.navigateTo({
					url: `/pages/my/my_card_gain`,
				})
			},

			selectLabel: function(k = 0, type = 0) {
				this.colorNum = k
				//type值：0全部 1线上 2线下 3 礼品 4体验
				// k值 0可使用 1冻结中 2 已失效 3已使用
				// console.log("顶部点击的是",type ,"券的状态",k)
				if (type == 0 && k == 0) {
					this.TicketNumber = 1
					this.contentList[k].selectContent = {
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
					this.ticketItemList = this.contentList[k].selectContent.ticketItemList
					// console.log(this.ticketItemList)
				} else if (type == 0 && k == 1) {
					this.TicketNumber = 0
					this.contentList[k].selectContent = {
						title: '冻结说明：',
						list: [
							'1）若卡券是下单后赠送的、支付有礼赠送的，需要核销订单后卡券才可使用;',
							'2）若相关订单发生退款，则赠送的卡券将失效，或者赠送的卡券未在规定时间内核销使用也将失效;',
							'3）失效的卡券将不予补发;', '4）若提前领取卡券，还未到使用时间，也将处于冻结状态'
						]
					}
				} else if (type == 0 && k == 2) {
					this.TicketNumber = k
					this.contentList[k].selectContent = {
						title: "顶部点击的是" + type + "券的状态" + k,
					}
					this.ticketItemList = []
				} else if (type == 0 && k == 3) {
					this.TicketNumber = k
					this.contentList[k].selectContent = {
						title: "顶部点击的是" + type + "券的状态" + k,
					}
					this.ticketItemList = []
				} else if (type != 0) {
					this.contentList[k].selectContent = {
						title: "顶部点击的是" + type + "券的状态" + k,
					}
					this.ticketItemList = []
				}
			},

			// 显示卡券详情
			showDetails: function(number) {
				// console.log(number)
				for (let i = 0; i < this.ticketItemList.length; i++) {
					if (this.ticketItemList[i].serialNumber == number) {
						this.ticketItemList[i].showTicketDetails = !this.ticketItemList[i].showTicketDetails
					}
					if (this.ticketItemList[i].showTicketDetails) {
						this.ticketItemList[i].arrowImages = '../../static/images/arrow-top.png'
					} else {
						this.ticketItemList[i].arrowImages = '../../static/images/arrow-down.png'
					}

				}
			}

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
