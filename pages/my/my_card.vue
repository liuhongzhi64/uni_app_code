<template>
	<view class="my_card">

		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :barImage='barImage' :color='color' :backImage='backImage'
		 :barName='barName' :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft'
		 :menuBottom='menuBottom'></topBar>

		<view class="my_card-content">
			<scroll-view class="my_card-content" scroll-y :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
				<template>
					<view class="my_card-item">
						<view class="card-top">
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

						<view class="tabBarList">
							<swiperTabHead :tabBars="tabBars" :size='size' :line="line" :tabIndex="tabIndex" :tabBackgroundColor='tabBackgroundColor'
							 @tabtap="tabtap "></swiperTabHead>
						</view>

						<view class="list-content">
							<view class="item-content end-cont" :data-type='listType' :class="{dis:tabIndex == index}" v-for="(i,index) in ticketList" :key="index">
								<text v-if="!ticketList[index].ticketContent">{{i.name}}</text>
								
								<view class="ticket-content" v-if="ticketList[index].ticketContent">
									<view class="ticket-label">
										<view 
											class="label-name" 
											:class="{labelColor:colorNum==k}" 
											@tap='selectLabel(k,k)' 
											v-for="(i,k) in ticketList[index].ticketContent.lableList"  :key='k'>
												{{i}}
										</view>
									</view>
									
									<view class="select-content end-cont" :class="{dis:colorNum == index}" v-for="(i,index) in contentList" :key="index">
										<!-- 券为空 -->
										<view class="content-item" v-if="labelType = 1">
											
											<view class="title">{{i.selectContent.title}}</view>
											<view v-for="(item,index) in i.selectContent.list" :key="index">
												{{item}}
											</view>
											
											<view class="Ticket-number"  v-if="TicketNumber == 0">
												<view class="images"><image src="../../static/images/cartBg.png" mode=""></image></view>
												
												<view class="no-have-ticket">喵！暂无相关卡券~</view>
											</view>
											
										</view>
										
										<!-- 券不为空的 -->
										<view class="content-item" v-if="labelType = 0">
											
											
											
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
				tabIndex: 1, // 选中的
				listType:1,//券的类型
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
				ticketList: [
					{
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
				ticketContent:{},
				colorNum:1,//选择的券是冻结中
				contentList:[{type:0},{type:1},{type:2},{type:3}],
				selectContent:{},
				labelType:1,//券可用类型
				TicketNumber:0,//券数量
				ticketItemList:[],
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
			that.tabtap()
			that.selectLabel()
		},
		methods: {
			//接受子组件传过来的值点击切换导航
			tabtap: function(index=1,type=1) {
				this.tabIndex = index;
				this.listType = type//券的类型
				// this.ticketList[index].name = type
				this.ticketList[index].ticketContent = {
					lableList:['可使用','冻结中','已失效','已使用']
				}
				// if(this.listType == 0){
				// 	this.ticketList[index].ticketContent = {
				// 		lableList:['可使用','冻结中','已失效','已使用']
				// 	}
				// }
				// else if(this.listType == 1){
				// 	this.ticketList[index].ticketContent = {
				// 		lableList:['可使用','冻结中','已失效','已使用']
				// 	}
				// }
				
				// console.log(this.ticketList)
			},
			
			selectLabel:function(k = 1,type = 1){
				this.colorNum = k
				if(type == 0){
					this.TicketNumber = 1 
					this.labelType = 0
					this.contentList[k].selectContent = {
						// ticketItemList:[
						// 	{
						// 		serialNumber:02048492,//编号
						// 		expirationTime:328,//过期时间
								
						// 	}
						// ]
					}
					
					
					
					this.ticketItemList = this.contentList[k].selectContent.ticketItemList
					console.log(this.ticketItemList)
				}
				else if(type == 1){
					this.TicketNumber = 0
					this.labelType = 1
					this.contentList[k].selectContent = {
						title:'冻结说明：',
						list:['1）若卡券是下单后赠送的、支付有礼赠送的，需要核销订单后卡券才可使用;','2）若相关订单发生退款，则赠送的卡券将失效，或者赠送的卡券未在规定时间内核销使用也将失效;','3）失效的卡券将不予补发;','4）若提前领取卡券，还未到使用时间，也将处于冻结状态']
						
					}
				}
				
				// console.log(this.contentList)
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
	.my_card-content{
		background-color: #F6F6F6;
	}
	
	.ticket-content{
		padding: 30rpx 20rpx 0;
	}
	
	.ticket-label{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
	.ticket-label .label-name{
		width: 107rpx;
		height: 46rpx;
		border-radius: 25rpx;
		text-align: center;
		line-height: 50rpx;
		background-color: #f0f0f0;
		font-size: 20rpx;
		margin-right: 30rpx;
	}
	
	.labelColor{
		background-color: #ffe8f0;
		border: 2rpx solid  #fa3475;
		color: #fa3475;
	}
	
	.content-item{
		padding: 32rpx 36rpx 0;
		font-size: 20rpx;
		line-height: 32rpx;
		color: #999999;
	}
	
	.images{
		padding: 100rpx 0 46rpx;
		display: flex;
		justify-content: center;
	}
	.images image{
		width: 360rpx;
		height: 345rpx;
	}
	
	.no-have-ticket{
		text-align: center;
		font-size: 32rpx;
		color: #111111;
	}
	
</style>
