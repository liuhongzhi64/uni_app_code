<template>
	<view class="check_card">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="check_card-content">
			<scroll-view class="check_card-content" scroll-y :style="[{'padding-top':menuBottom+10+'px','min-height':height-menuBottom-10+'px'}]">
				<template>
					<view class="check-content" :style="[{'min-height':height-menuBottom-50+'px'}]">
						<view class="related-title">
							<view class="line"></view> 客户信息
						</view>
						<view class="user-message">
							<view class="user-name">
								客户姓名 <text> 张*悠 </text>
							</view>
							<view class="user-phone">
								客户电话 <text> 188-4869-7647 </text>
							</view>
						</view>

						<view class="ticket-message">
							<view class="related-title">
								<view class="line"></view> 卡券信息
							</view>
							<view  class="ticket-content" v-if="ticketMessage.length>0">
								<ticket  :ticketList = 'ticketMessage' :marginTop='marginTop' @showDetails='showDetails'></ticket>
							</view>
						</view>
						
						<view class="check-message">
							<view class="related-title">
								<view class="line"></view> 核销信息
							</view>
							<view class="check-site-state-staff-time">
								<view class="check-site">
									核销地点 <text> 收费室 </text>
								</view>
								<view class="check-state">
									核销状态 <text> 已核销 </text>
								</view>
								<view class="check-staff">
									核销人员 <text> 王默默 </text>
								</view>
								<view class="check-time">
									核销时间 <text> 2020-06-28  </text> <text> 11:20:23  </text>
								</view>
							</view>
							
							
							
							
						</view>
						
						
						<!-- 确认核销按钮 -->
						<view class="affirm-cancel">
							<view class="affirm-cancel-btn">
								<button class="button" plain="true">确认核销</button>
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
	import ticket from "../../components/ticket.vue"
	export default {
		components: {
			topBar,
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
				title: '核销卡券',
				requestUrl:'',
				ticketMessage: [{
					serialNumber: '02048492', //编号
					expirationTime: 24, //过期时间
					exclusiveName: '金钻卡专享', //专享名称
					ticketLabel: '满减券', //券类型
					writer: '这是后台配置的使用范围文案，这个最多显示两行，自动省略号...',
					state: '已核销', //当前状态
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
					receiveTime:true,
				}, ]
			}
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			let cardId = option.id
			console.log('核销卡券的id:',cardId)
			that.checkDetail(cardId)
		},
		onReady() {
			let that = this;
			let pageHeight = 0
			that.videoContext = uni.createVideoContext('myVideo')
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
				that.menuWidth = 87
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
			
		},
		methods: {
			// 核销的内容
			checkDetail:function(id){
				let that = this
				let dataInfo = {
					interfaceId:'carduse',
					card_user_id:id
				}
				that.request.uniRequest("card", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						console.log(data)
					}
				})
			},
			
			
			// 显示卡券详情
			showDetails: function(number) {
				for (let i = 0; i < this.ticketMessage.length; i++) {
					if (this.ticketMessage[i].serialNumber == number) {
						this.ticketMessage[i].showTicketDetails = !this.ticketMessage[i].showTicketDetails
					}
					if (this.ticketMessage[i].showTicketDetails) {
						this.ticketMessage[i].arrowImages = '../../static/images/arrow-top.png'
					} else {
						this.ticketMessage[i].arrowImages = '../../static/images/arrow-down.png'
					}

				}
			}
		}
	}
</script>

<style scoped>
	.check-content {
		background-color: #F6F6F6;
		padding: 40rpx 0 28rpx;
	}

	.line {
		width: 4rpx;
		height: 16rpx;
		background-color: #fa3576;
		margin-right: 16rpx;
	}

	.related-title {
		padding: 0 20rpx 30rpx;
		font-size: 28rpx;
		line-height: 48rpx;
		color: #111111;
		font-weight: bolder;
		display: flex;
		align-items: center;
	}

	.user-message ,.check-site-state-staff-time{
		background-color: #FFFFFF;
		padding-left: 40rpx;
		border-radius: 24rpx;
		font-size: 24rpx;
		color: #666666;
	}

	.user-name ,.check-site,.check-state,.check-staff{
		border-bottom: 1rpx solid #F0F0F0;
		padding: 35rpx 0 37rpx;
	}

	.user-name text,
	.user-phone text ,
	.check-site text,.check-state text,.check-staff text,.check-time text{
		margin-left: 40rpx;
		color: #111111;
	}
	.check-state text{
		color: #fa3475;
	}

	.user-phone ,.check-time{
		padding: 35rpx 0 37rpx;
	}

	.ticket-message {
		margin-top: 40rpx;
	}

	.ticket-content{
		padding: 0 20rpx;
	}
	.check-message{
		margin-top: -14rpx;
	}
	




	.affirm-cancel {
		/* position: fixed; */
		/* bottom: 68rpx; */
		left: 0;/* 
		z-index: 9; */
		width: 100%;
		margin-bottom: 68rpx;
		margin-top: 64rpx;
	}

	.affirm-cancel-btn {
		padding: 0 40rpx;
		height: 88rpx;
	}

	.affirm-cancel-btn .button {
		background-image: linear-gradient(-90deg, #999999 0%, #999999 100%);
		font-size: 32rpx;
		border-radius: 44rpx;
		color: #ffffff;
		border: 0;
	}
</style>
