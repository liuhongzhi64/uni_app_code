<template>
	<view class="my_order_refund">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<view class="my_order_refund-content" :style="[{'padding-top':menuBottom+10+'px',height:height-menuBottom-10+'px'}]">
			<scroll-view class="my_order_refund-contents">
				<template>
					<view class="refund-content">
						<view class="refund-hint">
							<view class="hint-title">温馨提示:</view>
							<view class="hint-list" v-for="(i,k) in hintList" :key='k'> {{i}} </view>
						</view>
						<view class="refund-porduct">
							<view class="refund-porduct-hint">
								<view class="refund-porduct-hint-title">请选择可退商品</view>
								<view class="porduct-hint-content">部分不可退商品（如特殊活动等商品）请联系咨询师</view>
							</view>

							<view class="refund-porduct-list" v-for="(i,k) in porductList" :key="k">
								<view class="top-change-all">
									<checkbox color="#ff5f93" />
									<view class="change-title">{{i.title}}</view>
								</view>
								<view class="porduct-list-item">
									<checkbox-group @change="checkboxChange">
										<label class="list-item" v-for="(item,index) in i.porduct" :key="item.id">
											<view class="left-checkbox">
												<checkbox color="#ff5f93" :value="item.id" :checked="item.checked" />
											</view>
											<view class="porduct-content">
												<view class="order-porduct-images-name">
													<view class="porduct-images">
														<image :src="item.url" mode=""></image>
													</view>
													<view class="porduct-right">
														<view class="porduct-name">{{item.porductName}}</view>
														
														<view class="content-item" @tap='openPorductContent(index,k)' v-if="!item.showPorduct">
															<view class="porduct-content-items">{{item.content}}</view>
															<image :src="item.arrowImages" mode=""></image>
														</view>		
																													
														<view class="show-porduct-content" 
														 v-if="item.showPorduct" @tap='openPorductContent(index,k)'>
															<view class="content-items" v-for="(i,k) in item.contentList" :key='k'>
																<view class="versions">版本: {{i.versions}} </view>
																<view class="specification">规格: {{i.specification}} </view>
																<view class="part">部位: {{i.part}} </view>
																<view class="doctor">医生: {{i.doctor}} </view>
															</view>
															<image :src="item.topImages" mode=""></image>
														</view>	
															
														<view class="porduct-price-number">
															<view class="porduct-price"><text>￥</text>{{item.price}}</view>
															<view class="porduct-number">x{{item.porductNumber}}</view>
														</view>															
														
														
													</view>
												</view>
												
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
											</view>
										</label>
									</checkbox-group>
								</view>
							</view>

						</view>

						<view class="not-on-line-refund-porduct">

						</view>

					</view>
				</template>
			</scroll-view>
		</view>

		<view class="bottom-refund-hint">
			<view class="refund-hint-content">在线支付金额将在1-3个工作日原路退回，喵豆/余额将直接退回账户中，积分一旦抵扣后，将无法退回。</view>

			<view class="all-refund-apply-for">
				<view class="all-refund-sum">
					<view class="all-refund-title">合计退款：</view>
					<view class="sum"> <text>￥</text> 50000 </view>
				</view>
				<view class="apply-for-refund">
					<button class="apply-for" type="default" plain="true" @tap='submitApplyFor'>申请退款</button>
				</view>
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
				title: '申请退款',
				hintList: ['1、若发生整单退款，或是部分退款，我院有权收回相关赠品，并根据退款/退单后的情况重新计算优惠信息和赠品信息。', '2、若邮寄商品一律不支持无理由退货；',
					'邮寄中的商品，申请退款需要等待人工审核，我院需确认回收到货品后方可退款；', '4、关于退款金额，将原路返还。'
				],
				porductList: [
					{
						title:'收费室使用',
						porduct:[
							{
								id:'02048492',
								url: '../../static/images/23.png',
								porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
								content: '版本：尊享版； 规格：傲若拉商品名称.... ',
								contentList: [{
									versions: '尊享版',
									specification: '傲诺拉-星熠光面圆盘',
									part: '腋下切口+内窥镜(进口)+双平面',
									doctor: '艾剑英/邱伟'
								}, ],
								price: 608000,
								arrowImages: '../../static/images/arrow-down.png',
								topImages: '../../static/images/arrow-top.png',
								showPorduct: false,
								allPrice:19600,
								onLinePay:500,
								discounts:600,
								hospitalPay:18500,
								copeWith:19000,
								porductNumber:2,
							}
						]
					}
				]
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
		},
		methods: {
			checkboxChange: function(e) {
				this.changeList = e.detail.value;
			},
			userCause: function(e) {
				this.userInputContent = e.detail.value
			},
			submitApplyFor: function() {
				uni.navigateTo({
					url: `/pages/my/my_order_refund_reason`,
				})
			},
			checkboxChange: function(e) {
				var items = this.porductList,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
			},
			openPorductContent:function(index,k){
				console.log(this.porductList[index].porduct[k].showPorduct)
				let showPorduct = this.porductList[index].porduct[k].showPorduct
				this.porductList[index].porduct[k].showPorduct = !showPorduct
			},
		}
	}
</script>

<style scoped>
	.my_order_refund-content {
		background-color: #F6F6F6;
		padding-bottom: 240rpx;
	}

	.refund-content {
		background-color: #F6F6F6;
	}

	.refund-hint {
		background-color: #FFFFFF;
		padding: 30rpx 53rpx 30rpx 36rpx;
		font-size: 20rpx;
		line-height: 32rpx;
		color: #111111;
		margin-bottom: 20rpx;
	}

	.refund-porduct {
		padding: 28rpx 0 32rpx;
	}

	.refund-porduct-hint {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.refund-porduct-hint-title {
		font-size: 40rpx;
		color: #fa3475;
	}

	.porduct-hint-content {
		font-size: 24rpx;
		color: #999999;
	}

	.refund-porduct-list {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 30rpx 30rpx 40rpx;
		margin-top: 32rpx;
	}

	.top-change-all {
		display: flex;
		align-items: center;
		margin-bottom: 33rpx;
	}

	.change-title {
		font-size: 28rpx;
		color: #111111;
		font-weight: bold;
	}
	.list-item{
		display: flex;
		align-items: center;
	}
	
	.order-porduct-images-name{
		border-bottom: 2rpx solid #F0F0F0;
		padding-bottom: 30rpx;
		display: flex;
		justify-content: space-between;
		/* align-items: center; */
		position: relative;
	}
	.porduct-images{
		width: 200rpx;
		height: 200rpx;
	}
	.porduct-images image{
		width: 200rpx;
		height: 200rpx;
	}
	.porduct-right{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		width: 400rpx;
		padding-left: 20rpx;
	}
	.porduct-name{
		width: 400rpx;
		font-size: 24rpx;
		line-height: 32rpx;
		color: #111111;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		margin-bottom: 20rpx;
	}
	.content-item{
		width: 320rpx;
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
	.content-item image{
		width: 32rpx;
		height: 32rpx;
	}
	.show-porduct-content image{
		width: 32rpx;
		height: 32rpx;
	}
	.show-porduct-content{
		font-size: 20rpx;
		background-color: #f0f0f0;
		border-radius: 20rpx;
		padding: 10rpx 16rpx ;
		position: absolute;
		top: 88rpx;
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
	.porduct-content-items{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		width: 280rpx;
	}
	
	.porduct-price-number{
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fa3475;
		margin-top: 15rpx;
	}
	
	.porduct-price{
		font-size: 40rpx;
		
	}
	.porduct-price text{
		font-size: 24rpx;
	}
	.porduct-number{
		font-size: 24rpx;
	}
	.content-items{
		width: 290rpx;
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


	.bottom-refund-hint {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}

	.refund-hint-content {
		color: #FFFFFF;
		font-size: 20rpx;
		line-height: 34rpx;
		background-color: #000000;
		padding: 16rpx 61rpx;
		text-align: center;
	}

	.all-refund-apply-for {
		padding: 12rpx 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.all-refund-sum {
		display: flex;
		align-items: center;
	}

	.all-refund-sum .all-refund-title {
		color: #111111;
		font-size: 28rpx;
	}

	.all-refund-sum .sum {
		color: #fa3475;
		font-size: 40rpx;
		margin-left: 10rpx;
	}

	.all-refund-sum .sum text {
		font-size: 24rpx;
	}

	.apply-for {
		width: 220rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
		box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(250, 53, 118, 0.5);
		border-radius: 40rpx;
		color: #FFFFFF;
		border: 0;
	}
</style>
