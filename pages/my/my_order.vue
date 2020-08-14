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
										<view class="order-advertising-images"><image src="../../static/images/22.png" mode=""></image></view>
										
										<view class="order-all-message">
											<view class="order-message">
												<!-- 顶部作废时间和订单类型 -->
												<view class="order-message-top">
													<view class="order-invalid-time-order-label">
														<view class="order-invalid-time">订单作废：0天14时59分59秒</view>
														 
														 <view class="order-label">待付款</view>
													</view>
												</view>
												
												<view class="service-conditions-order-porduct" v-for="(item,index) in orderPorduct" :key='index'>
													<!-- 使用条件 -->
													<view class="service-conditions">
														<view class="line"></view>
														<view class="service-name">{{item.name}}</view>
													</view>
													
													<!-- 商品展示 -->
													<view class="order-porduct">
														<view class="porduct-images-all-set">
															<view class="porduct-images-item">
																<scroll-view class="porduct-images-items" scroll-x="true">
																	<view class="images-item">
																		<view class="porduct-images-list" v-for="(i,k) in item.porductImagesList" :key='k'>
																			<image :src="i.url" mode=""></image>
																		</view>
																	</view>
																</scroll-view>
															</view>
														
															<view class="all-see">
																<view class="trilateral" v-if="item.porductImagesList.length>2"></view>
																<view class="all-porduct-see">
																	<view class="all-porduct"> 共计{{item.poructNumber}}件 </view>
																	<view class="see"> 查看 > </view>
																</view>		
															</view>
														</view>
													</view>
												</view>
												
												
												<!-- 总价、优惠、应付、到院再发、在线支付 -->
												<view class="pay-for-the-order ">
													<view class="pay-order-content">
														<view class=" total-price-on-line-pay">
															<view class="total-price">总价  <text>￥19600</text> </view>
															<view class="on-line-pay">在线支付 <text>￥500</text> </view>
														</view>
														<view class="discounts-hospital-pay">
															<view class="discounts">优惠  <text>￥600</text> <image src="../../static/images/ask1.png" mode=""></image> </view>
															<view class="hospital-pay">到院再付 <text>￥18500</text> </view>
														</view>
														<view class="cope-with">应付 <text>$19000</text> </view>
													</view>
												</view>
												
												<!-- 订单详情等按钮  -->
												<view class="particulars-bottom-list">
													<view class="buttom" v-for="(i,k) in bottomList"> 
														<button type="default" plain="true">{{i.name}}</button>
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
				contentList: [{
						name: '全部',
					},
					{
						name: '待付款',
					},
					{
						name: '已付款',
					},
					{
						name: '已完成',
					},
					{
						name: '已退款',
					},
				],
				
				orderPorduct:[
					{
						name:'收费室使用',
						porductImagesList: [
							{
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
							}, 
						],
						poructNumber:4
					},
					{
						name:'会员中心使用',
						porductImagesList: [
							{
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
							}, 
						],
						poructNumber:4
					},
					{
						name:'邮寄商品',
						porductImagesList: [
							{
								id: 1,
								url: '../../static/images/23.png',
							}, {
								id: 2,
								url: '../../static/images/20.png',
							},
						],
						poructNumber:2
					}, 
				],
				bottomList:[{name:'订单详情',type:1},{name:'取消订单',type:2},{name:'立即支付',type:3},]
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
				// console.log(type)
			},
			tabChange: function(e) {
				// console.log(e.detail.current)
				this.tabIndex = e.detail.current;
				let index = e.detail.current;
				let type = e.detail.current
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
	.my_order-items{
		background-color: #F6F6F6;
	}
	.my_order-items-content{
		padding-top: 20rpx;
	}
	.order-advertising-images,.order-advertising-images image{
		width: 100%;
		height: 220rpx;
	}
	.order-all-message{
		padding: 38rpx 20rpx; 
	}
	.order-message{
		background-color: #FFFFFF;
		border-radius: 24rpx;
	}
	.order-message-top{
		padding: 40rpx 30rpx 0;
		font-size: 24rpx;
		padding-bottom: 24rpx;
	}
	.order-invalid-time-order-label{
		padding-bottom: 24rpx;
		border-bottom: 2rpx solid #f0f0f0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.order-invalid-time{
		color: #999999;
	}
	.order-label{
		color: #fa3475;
		font-weight: bold;
	}
	
	.service-conditions-order-porduct{
		padding-bottom: 40rpx;
	}
	.service-conditions{
		display: flex;
		align-items: center;
		padding-bottom: 22rpx;
	}
	.line{
		width: 6rpx;
		height: 24rpx;
		background-color: #fa3475;	
	}
	.service-name{
		font-size: 24rpx;
		color: #111111;
		margin-left: 28rpx;
	}
	.order-porduct{
		padding: 0 30rpx;
	}
	.porduct-images-all-set {
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* margin-top: 30rpx; */
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
	.trilateral{
		position: absolute;
		top: 15rpx;
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
	.all-porduct-see{
		margin-left: 30rpx;
	}
	.see {
		color: #fa3475;
	}
	
	.pay-for-the-order{		
		padding: 0 30rpx ;
	}
	.pay-order-content{
		border-top: 2rpx solid #F0F0F0;
		border-bottom: 2rpx solid #F0F0F0;
		color: #111111;
		padding-bottom: 20rpx;
	}
	.pay-order-content text{
		margin-left: 40rpx;
	}
	.total-price-on-line-pay,.discounts-hospital-pay{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20rpx;
		font-size: 24rpx;
	}
	.discounts{
		display: flex;
		align-items: center;
	}
	.on-line-pay,.discounts{
		color: #fa3475;
	}
	.discounts image{
		width: 26rpx;
		height: 26rpx;
		margin-left: 20rpx;
	}
	.cope-with{
		align-items: center;
		margin-top: 20rpx;
		font-size: 24rpx;
	}
	.particulars-bottom-list{
		padding: 32rpx 0;
		display: flex;
		justify-content: space-around;
	}
	.buttom{	
		border-image-source: linear-gradient(0deg,  #999999 0%,  #999999 100%);
	}
	.buttom button{
		width: 170rpx;
		height: 50rpx;	
		line-height: 50rpx;
		text-align: center;
		border: 1rpx solid #999999;
		border-radius: 25rpx;
		font-size: 24rpx;
		color: #999999;
	}
	
</style>
