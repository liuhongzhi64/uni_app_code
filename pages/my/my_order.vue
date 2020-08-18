<template>
	<view class="my_order">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="top-swiper-tab" :style="[{'top':menuBottom+10+'px'}]">
			<swiperTabHead :tabBars="tabBars" :size='size' :line="line" :tabIndex="tabIndex" :tabBackgroundColor='tabBackgroundColor'
			 @tabtap="tabtap"></swiperTabHead>
		</view>

		<view class="my_order-content" :style="[{'padding-top':menuBottom+50+'px'}]">
			<view class="my_order-items">
				<swiper :style="[{'height':height-menuBottom-50+'px'}]" :current="tabIndex" @change="tabChange">
					<swiper-item v-for="(i,index) in contentList" :key="index">
						<scroll-view scroll-y :style="[{'height':height-menuBottom-50+'px'}]">
							<template>
								<block>
									<view class="my_order-items-content">
										<view class="order-advertising-images">
											<image src="../../static/images/22.png" mode=""></image>
										</view>

										<view class="order-all-message">
											<view class="order-message" v-for="(item,index) in allOrderList" :key='index'>
												<!-- 顶部作废时间和订单类型 -->
												<view class="order-message-top">
													<view class="order-invalid-time-order-label">
														<view class="order-invalid-time" v-if="item.state!='已完成'">
															订单作废：{{item.orderInvalidTime}}
														</view>

														<view class="order-label" v-if="item.state!='已完成'">{{item.state}}</view>
														
														<view class="order-invalid-time" v-if="item.state=='已完成'">
															下单时间: {{item.orderInvalidTime}}
														</view>
														<view class="order-state" v-if="item.state=='已完成'">
															<image src="../../static/images/complete.png" mode=""></image>
														</view>
														<view class="order-state" v-if="item.state=='已作废'">
															<image src="../../static/images/cancellation.png" mode=""></image>
														</view>
													</view>
												</view>

												<view class="service-conditions-order-porduct" v-for="(i,index) in item.orderPorduct" :key='index'>
													<!-- 使用条件 -->
													<view class="service-conditions">
														<view class="line-service-name">
															<view class="line"></view>
															<view class="service-name">{{i.name}}</view>
														</view>
														<view class="appointment" v-if="item.state == '已付款'&&i.name=='收费室使用'">
															预约挂号
														</view>
														<view class="remind" v-if="item.state == '已付款'&&i.name=='邮寄商品'">
															提醒发货
														</view>
														
													</view>

													<!-- 商品展示 -->
													<view class="order-porduct">
														<view class="porduct-images-all-set">
															<view class="porduct-images-item" 
															 :style="{width:i.porductImagesList.length>=2?'522rpx':'auto'}">
																<scroll-view class="porduct-images-items" scroll-x="true">
																	<view class="images-item" :style="{width:i.porductImagesList.length>=2?'522rpx':'auto'}">
																		<view class="porduct-images-list" v-for="(i,k) in i.porductImagesList" :key='k'>
																			<image :src="i.url" mode=""></image>
																		</view> 
																	</view>
																</scroll-view>
															</view>

															<view class="all-see" v-if="i.porductImagesList.length>=2">
																<view class="trilateral" v-if="i.porductImagesList.length>2"></view>
																<view class="all-porduct-see">
																	<view class="all-porduct"> 共计{{i.poructNumber}}件 </view>
																	<view class="see"> 查看 > </view>
																</view>
															</view>
																														
															<view class="porduct-content" 
															 v-if="item.state=='已付款'&& i.name=='邮寄商品'" >
																
																<view class="porduct-content-item" 
																 v-for="(i,k) in i.porductImagesList" :key='k' 
																 >
																	<view class="porduct-name">{{i.porductName}}</view>																	
																	<view class="content-item" @tap='openPorductContent' v-if="!i.showPorduct">
																		<view class="porduct-content-items">{{i.content}}</view>
																		<image :src="i.arrowImages" mode=""></image>
																	</view>																	
																	<view class="show-porduct-content" 
																	 v-if="i.showPorduct" @tap='openPorductContent'>
																		<view class="content-items" v-for="(i,k) in i.contentList" :key='k'>
																			<view class="versions">版本: {{i.versions}} </view>
																			<view class="specification">规格: {{i.specification}} </view>
																			<view class="part">部位: {{i.part}} </view>
																			<view class="doctor">医生: {{i.doctor}} </view>
																		</view>
																		<image :src="i.topImages" mode=""></image>
																	</view>																	
																	<view class="porduct-price"><text>￥</text>{{i.price}}</view>																
																</view>			
															</view>
															<view class="porduct-content"
															 v-if="item.state=='已完成'&& i.name=='邮寄商品'" >
																
																<view class="porduct-content-item" 
																 v-for="(i,k) in i.porductImagesList" :key='k' 
																 >
																	<view class="porduct-name">{{i.porductName}}</view>																	
																	<view class="content-item" @tap='openAccomplishPorductContent' v-if="!i.showPorduct">
																		<view class="porduct-content-items">{{i.content}}</view>
																		<image :src="i.arrowImages" mode=""></image>
																	</view>																	
																	<view class="show-porduct-content" 
																	 v-if="i.showPorduct" @tap='openAccomplishPorductContent'>
																		<view class="content-items" v-for="(i,k) in i.contentList" :key='k'>
																			<view class="versions">版本: {{i.versions}} </view>
																			<view class="specification">规格: {{i.specification}} </view>
																			<view class="part">部位: {{i.part}} </view>
																			<view class="doctor">医生: {{i.doctor}} </view>
																		</view>
																		<image :src="i.topImages" mode=""></image>
																	</view>																	
																	<view class="porduct-price"><text>￥</text>{{i.price}}</view>																
																</view>			
															</view>
															<view class="porduct-content"
															 v-if="item.state=='已作废'&& i.name=='邮寄商品'" >
																
																<view class="porduct-content-item" 
																 v-for="(i,k) in i.porductImagesList" :key='k' 
																 >
																	<view class="porduct-name">{{i.porductName}}</view>																	
																	<view class="content-item" @tap='openCancellationPorductContent' v-if="!i.showPorduct">
																		<view class="porduct-content-items">{{i.content}}</view>
																		<image :src="i.arrowImages" mode=""></image>
																	</view>																	
																	<view class="show-porduct-content" 
																	 v-if="i.showPorduct" @tap='openCancellationPorductContent'>
																		<view class="content-items" v-for="(i,k) in i.contentList" :key='k'>
																			<view class="versions">版本: {{i.versions}} </view>
																			<view class="specification">规格: {{i.specification}} </view>
																			<view class="part">部位: {{i.part}} </view>
																			<view class="doctor">医生: {{i.doctor}} </view>
																		</view>
																		<image :src="i.topImages" mode=""></image>
																	</view>																	
																	<view class="porduct-price"><text>￥</text>{{i.price}}</view>																
																</view>			
															</view>
															<view class="porduct-content"
															 v-if="item.state=='待付款'&& i.name=='收费室使用'&&i.porductImagesList.length==1" >
																
																<view class="porduct-content-item" 
																 v-for="(i,k) in i.porductImagesList" :key='k' 
																 >
																	<view class="porduct-name">{{i.porductName}}</view>																	
																	<view class="content-item" @tap='openPorduct' v-if="!i.showPorduct">
																		<view class="porduct-content-items">{{i.content}}</view>
																		<image :src="i.arrowImages" mode=""></image>
																	</view>																	
																	<view class="show-porduct-content" 
																	 v-if="i.showPorduct" @tap='openPorduct'>
																		<view class="content-items" v-for="(i,k) in i.contentList" :key='k'>
																			<view class="versions">版本: {{i.versions}} </view>
																			<view class="specification">规格: {{i.specification}} </view>
																			<view class="part">部位: {{i.part}} </view>
																			<view class="doctor">医生: {{i.doctor}} </view>
																		</view>
																		<image :src="i.topImages" mode=""></image>
																	</view>																	
																	<view class="porduct-price"><text>￥</text>{{i.price}}</view>																
																</view>			
															</view>
														</view>
														
														
													</view>
												</view>


												<!-- 总价、优惠、应付、到院再发、在线支付 -->
												<view class="pay-for-the-order ">
													<view class="pay-order-content">
														<view class=" total-price-on-line-pay">
															<view class="total-price">总价 <text>￥{{item.allPrice}}</text> </view>
															<view class="on-line-pay">在线支付 <text>￥{{item.onLinePay}}</text> </view>
														</view>
														<view class="discounts-hospital-pay">
															<view class="discounts">优惠 <text>￥{{item.discounts}}</text>
																<image src="../../static/images/ask1.png" mode=""></image>
															</view>
															<view class="hospital-pay">到院再付 <text>￥{{item.hospitalPay}}</text> </view>
														</view>
														<view class="cope-with">应付 <text>￥{{item.copeWith}}</text> </view>
													</view>
												</view>

												<!-- 订单详情等按钮  -->
												<view class="particulars-bottom-list">
													<view class="buttom" v-for="(i,k) in item.bottomList">
														<button 
														 class="button" 
														 type="default" 
														 plain="true" 
														 v-if="i.name != '立即支付'&&i.name != '核销使用'&&i.name != '写评价'"
														 @tap='gotoPages(i.name)'>
															{{i.name}}
														
														</button>
														<button 
														 class="immediate-payment" 
														  type="default" 
														  plain="true" 
														  v-if="i.name == '立即支付'||i.name == '核销使用'||i.name == '写评价'">
															{{i.name}}
														</button>
													</view>
												</view>

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
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '我的订单',
				tabBars: [{
						name: '全部',
						id: 'all',
						type: 0
					},
					{
						name: '待付款',
						id: 'obligation',
						type: 1
					},
					{
						name: '已付款',
						id: 'account-paid',
						type: 2
					},
					{
						name: '已完成',
						id: 'completed',
						type: 3
					},
					{
						name: '已退款',
						id: 'refunded',
						type: 4
					},
				],
				line: true, //是否显示选中线
				tabBackgroundColor: '#FFFFFF',
				size: 24,
				tabIndex: 0, // 选中的顶部的导航，全部。线上下，礼品券的索引
				listType: 0, //券的类型
				contentList: [
					{ name: '全部', },
					{ name: '待付款', },
					{ name: '已付款', },
					{ name: '已完成', },
					{ name: '已退款', },
				],

				allOrderList:[],//所有订单信息
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
				this.listType = type //订单的类型
				if(type == 0){
					let allOrderList=[
						{
							orderInvalidTime:'0天14时59分59秒',
							state:'待付款',
							allPrice:19600,
							onLinePay:500,
							discounts:600,
							hospitalPay:18500,
							copeWith:19000,
							orderPorduct: [
								{
									name: '收费室使用',
									porductImagesList: [{
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 2,
										url: '../../static/images/20.png',
									}, {
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 1,
										url: '../../static/images/19.png',
									}, ],
									poructNumber: 4
								},
								{
									name: '会员中心使用',
									porductImagesList: [{
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 2,
										url: '../../static/images/20.png',
									}, {
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 1,
										url: '../../static/images/19.png',
									}, ],
									poructNumber: 4
								},
								{
									name: '邮寄商品',
									porductImagesList: [{
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 2,
										url: '../../static/images/20.png',
									}, ],
									poructNumber: 2
								},
							],
							bottomList: [
								{
									name: '订单详情',
									type: 1
								}, {
									name: '取消订单',
									type: 2
								}, {
									name: '立即支付',
									type: 3
								}, 
							],
						},
						{
							orderInvalidTime:'0天14时59分59秒',
							state:'已付款',
							allPrice:19600,
							onLinePay:500,
							discounts:600,
							hospitalPay:18500,
							copeWith:19000,
							orderPorduct: [
								{
									name: '收费室使用',
									porductImagesList: [{
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 2,
										url: '../../static/images/20.png',
									}, {
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 1,
										url: '../../static/images/19.png',
									}, ],
									poructNumber: 4
								},
								{
									name: '会员中心使用',
									porductImagesList: [{
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 2,
										url: '../../static/images/20.png',
									}, {
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 1,
										url: '../../static/images/19.png',
									}, ],
									poructNumber: 4
								},
								{
									name: '邮寄商品',
									porductImagesList: [
										{
											id: 1,
											url: '../../static/images/20.png',
											porductName:'商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
											content:'版本：尊享版； 规格：傲若拉商品名称.... ',
											contentList:[
												{versions:'尊享版',specification:'傲诺拉-星熠光面圆盘',
												part :'腋下切口+内窥镜(进口)+双平面',
												doctor:'艾剑英/邱伟'},
											],
											price:608000,
											arrowImages: '../../static/images/arrow-down.png',
											topImages:'../../static/images/arrow-top.png',
											showPorduct:false,
										},  
									],
									poructNumber: 1
								},
							],
							bottomList: [
								{
									name: '申请退款',
									type: 1
								}, {
									name: '订单详情',
									type: 2
								}, {
									name: '核销使用',
									type: 3
								}, 
							],
						},
						{
							orderInvalidTime:'2020-06-28',
							state:'已完成',
							allPrice:19600,
							onLinePay:500,
							discounts:600,
							hospitalPay:18500,
							copeWith:19000,
							orderPorduct: [
								{
									name: '收费室使用',
									porductImagesList: [{
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 2,
										url: '../../static/images/20.png',
									}, {
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 1,
										url: '../../static/images/19.png',
									}, ],
									poructNumber: 4
								},
								{
									name: '会员中心使用',
									porductImagesList: [{
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 2,
										url: '../../static/images/20.png',
									}, {
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 1,
										url: '../../static/images/19.png',
									}, ],
									poructNumber: 4
								},
								{
									name: '邮寄商品',
									porductImagesList: [
										{
											id: 1,
											url: '../../static/images/20.png',
											porductName:'商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
											content:'版本：尊享版； 规格：傲若拉商品名称.... ',
											contentList:[
												{versions:'尊享版',specification:'傲诺拉-星熠光面圆盘',
												part :'腋下切口+内窥镜(进口)+双平面',
												doctor:'艾剑英/邱伟'},
											],
											price:608000,
											arrowImages: '../../static/images/arrow-down.png',
											topImages:'../../static/images/arrow-top.png',
											showPorduct:false,
										},  
									],
									poructNumber: 1
								},
							],
							bottomList: [
								{
									name: '订单详情',
									type: 1
								}, {
									name: '再次购买',
									type: 2
								}, {
									name: '写评价',
									type: 3
								}, 
							],
						}, 
						{
							orderInvalidTime:'2020-06-28',
							state:'已作废',
							allPrice:19600,
							onLinePay:500,
							discounts:600,
							hospitalPay:18500,
							copeWith:19000,
							orderPorduct: [
								{
									name: '收费室使用',
									porductImagesList: [{
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 2,
										url: '../../static/images/20.png',
									}, {
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 1,
										url: '../../static/images/19.png',
									}, ],
									poructNumber: 4
								},
								{
									name: '会员中心使用',
									porductImagesList: [{
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 2,
										url: '../../static/images/20.png',
									}, {
										id: 1,
										url: '../../static/images/23.png',
									}, {
										id: 1,
										url: '../../static/images/19.png',
									}, ],
									poructNumber: 4
								},
								{
									name: '邮寄商品',
									porductImagesList: [
										{
											id: 1,
											url: '../../static/images/20.png',
											porductName:'商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
											content:'版本：尊享版； 规格：傲若拉商品名称.... ',
											contentList:[
												{versions:'尊享版',specification:'傲诺拉-星熠光面圆盘',
												part :'腋下切口+内窥镜(进口)+双平面',
												doctor:'艾剑英/邱伟'},
											],
											price:608000,
											arrowImages: '../../static/images/arrow-down.png',
											topImages:'../../static/images/arrow-top.png',
											showPorduct:false,
										},  
									],
									poructNumber: 1
								},
							],
							bottomList: [
								{
									name: '订单详情',
									type: 1,
									
								},  
							],
						}, 
						{
							orderInvalidTime:'2020-06-28',
							state:'待付款',
							allPrice:19600,
							onLinePay:500,
							discounts:600,
							hospitalPay:18500,
							copeWith:19000,
							orderPorduct: [
								{
									name: '收费室使用',
									porductImagesList: [
										{
											id: 1,
											url: '../../static/images/20.png',
											porductName:'商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
											content:'版本：尊享版； 规格：傲若拉商品名称.... ',
											contentList:[
												{versions:'尊享版',specification:'傲诺拉-星熠光面圆盘',
												part :'腋下切口+内窥镜(进口)+双平面',
												doctor:'艾剑英/邱伟'},
											],
											price:608000,
											arrowImages: '../../static/images/arrow-down.png',
											topImages:'../../static/images/arrow-top.png',
											showPorduct:false,
										},  
									],
								},
								
							],
							bottomList: [
								{
									name: '订单详情',
									type: 1
								}, {
									name: '取消订单',
									type: 2
								}, {
									name: '立即支付',
									type: 3
								}, 
							],
						},
					]
					this.allOrderList = allOrderList
				}
			},
			tabChange: function(e) {
				this.tabIndex = e.detail.current;
				let index = e.detail.current;
				let type = e.detail.current
			},
			openPorductContent:function(){
				let  showPorduct = this.allOrderList[1].orderPorduct[2].porductImagesList[0].showPorduct
				console.log(this.allOrderList[1].orderPorduct[2].porductImagesList[0].showPorduct)
				this.allOrderList[1].orderPorduct[2].porductImagesList[0].showPorduct = !showPorduct
			},
			openAccomplishPorductContent:function(){
				let  showPorduct = this.allOrderList[2].orderPorduct[2].porductImagesList[0].showPorduct
				this.allOrderList[2].orderPorduct[2].porductImagesList[0].showPorduct = !showPorduct
			},
			openCancellationPorductContent:function(){
				let  showPorduct = this.allOrderList[3].orderPorduct[2].porductImagesList[0].showPorduct
				this.allOrderList[3].orderPorduct[2].porductImagesList[0].showPorduct = !showPorduct
			},
			openPorduct:function(){
				let  showPorduct = this.allOrderList[4].orderPorduct[0].porductImagesList[0].showPorduct
				this.allOrderList[4].orderPorduct[0].porductImagesList[0].showPorduct = !showPorduct
			},
			gotoPages:function(name){
				if(name=='订单详情'){
					uni.navigateTo({
						url: `/pages/my/my_order_detail`,
					})
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

	.my_order-items {
		background-color: #F6F6F6;
	}

	.my_order-items-content {
		padding-top: 20rpx;
	}

	.order-advertising-images,
	.order-advertising-images image {
		width: 100%;
		height: 220rpx;
	}

	.order-all-message {
		padding: 38rpx 20rpx;
	}

	.order-message {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-bottom: 40rpx;
	}

	.order-message-top {
		padding: 40rpx 30rpx 0;
		font-size: 24rpx;
		padding-bottom: 24rpx;
	}

	.order-invalid-time-order-label {
		padding-bottom: 24rpx;
		border-bottom: 2rpx solid #f0f0f0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}
	.order-state{
		position: absolute;
		top: 0;
		right: 0;
		width: 166rpx;
		height: 130rpx;
	}
	.order-state image{
		width: 166rpx;
		height: 130rpx;
	}

	.order-invalid-time {
		color: #999999;
	}

	.order-label {
		color: #fa3475;
		font-weight: bold;
	}

	.service-conditions-order-porduct {
		padding-bottom: 40rpx;
	}

	.service-conditions {
		display: flex;
		/* align-items: center; */
		justify-content: space-between;
		padding-bottom: 22rpx;
		padding-right: 20rpx;
	}
	.line-service-name{
		display: flex;
		align-items: center;
	}

	.line {
		width: 6rpx;
		height: 24rpx;
		background-color: #fa3475;
	}

	.service-name {
		font-size: 24rpx;
		color: #111111;
		margin-left: 28rpx;
	}
	.appointment{
		width: 120rpx;
		height: 40rpx;	
		background-image: linear-gradient(0deg, #fa3475 0%, #ff6699 100%), linear-gradient(#e0619d, #e0619d);
		border-radius: 20rpx;
		border: 0;
		line-height: 40rpx;
		text-align: center;
		color: #FFFFFF;
		font-size: 20rpx;
	}
	.remind{
		width: 120rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
		border-radius: 20rpx;
		border: 2rpx solid #fa3475;
		font-size: 20rpx;
		color: #fa3475;
	}

	.order-porduct {
		padding: 0 30rpx;
		height: 200rpx;
	}

	.porduct-images-all-set {
		display: flex;
	}
	.porduct-content-item {
		padding-top:12rpx ;
		padding-bottom: 12rpx;
		position: relative;
	}
	.porduct-content-item .porduct-name{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 24rpx;
		color: #111111;
		font-weight: lighter;	
		margin-bottom: 20rpx;
	}
	.porduct-content-item .content-item{
		width: 360rpx;
		height: 40rpx;
		line-height: 40rpx;
		background-color: #f0f0f0;
		border-radius: 20rpx;
		font-size: 20rpx;
		color: #333333;
		font-weight: lighter;
		padding: 0 14rpx 0 16rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.porduct-content-item .show-porduct-content{
		font-size: 20rpx;
		background-color: #f0f0f0;
		border-radius: 20rpx;
		padding: 10rpx 16rpx ;
		position: absolute;
		width: 360rpx;
		min-height: 140rpx;
		display: flex;
		color: #333333;
		font-weight: lighter;
		justify-content: space-between;
		line-height: 30rpx;
	}
	.show-porduct-content .content-items{
		width: 290rpx;
	}
	.show-porduct-content image{
		width: 32rpx;
		height: 32rpx;
	}
	.porduct-content-items{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		width: 280rpx;
	}
	.porduct-content-item .content-item image{
		width: 32rpx;
		height: 32rpx;
		/* margin-left: 30rpx; */
	}
	.porduct-content-item .porduct-price{
		color: #fa3475;
		font-size: 40rpx;
		margin-top: 15rpx;
	}
	.porduct-content-item .porduct-price text{
		font-size: 24rpx;
	}

	.porduct-images-item {
		width: 522rpx;
		height: 200rpx;
	}

	.images-item {
		width: 522rpx;
		display: flex;
	}

	.porduct-images-items {}

	.porduct-images-list {
		width: 200rpx;
		height: 200rpx;
		margin-right: 30rpx;
	}

	.porduct-images-list image {
		width: 200rpx;
		height: 200rpx;
	}

	.all-see {
		width: 200rpx;
		text-align: center;
		font-size: 24rpx;
		display: flex;
		align-items: center;
		position: relative;
	}

	.trilateral {
		position: absolute;
		top: 80rpx;
		left: 0;
		display: block;
		width: 0;
		height: 0;
		border-width: 20rpx;
		border-style: solid;
		border-color: transparent #000000 transparent transparent;
		transform: rotate(180deg);
		opacity: 0.1;
		/* z-index: -5; */
	}

	.all-porduct-see {
		margin-left: 30rpx;
	}

	.see {
		color: #fa3475;
	}

	.pay-for-the-order {
		padding: 0 30rpx;
	}

	.pay-order-content {
		border-top: 2rpx solid #F0F0F0;
		border-bottom: 2rpx solid #F0F0F0;
		color: #111111;
		padding-bottom: 20rpx;
	}

	.pay-order-content text {
		margin-left: 40rpx;
	}

	.total-price-on-line-pay,
	.discounts-hospital-pay {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20rpx;
		font-size: 24rpx;
	}

	.discounts {
		display: flex;
		align-items: center;
	}

	.on-line-pay,
	.discounts {
		color: #fa3475;
	}
	.on-line-pay,.hospital-pay{
		width: 40%;
	}

	.discounts image {
		width: 26rpx;
		height: 26rpx;
		margin-left: 20rpx;
	}

	.cope-with {
		align-items: center;
		margin-top: 20rpx;
		font-size: 24rpx;
	}

	.particulars-bottom-list {
		padding: 32rpx 0;
		display: flex;
		justify-content: space-around;
	}

	.buttom {
		border-image-source: linear-gradient(0deg, #999999 0%, #999999 100%);
	}

	.buttom .button {
		width: 170rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		border: 1rpx solid #999999;
		border-radius: 25rpx;
		font-size: 24rpx;
		color: #999999;
	}

	.immediate-payment {
		background-image: linear-gradient(0deg, #fa3475 0%, #ff6699 100%), linear-gradient(#e0619d, #e0619d);
		color: #FFFFFF;
		width: 170rpx;
		height: 50rpx;
		line-height: 50rpx;
		font-size: 24rpx;
		text-align: center;
		border-radius: 25rpx;
		border: 0;
	}
</style>
