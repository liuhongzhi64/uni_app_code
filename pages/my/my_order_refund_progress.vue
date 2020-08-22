<template>
	<view class="my_order_refund_progress">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<view class="my_order_refund_progress_content" :style="[{'padding-top':menuBottom+10+'px',height:height-menuBottom-10+'px'}]">
			<scroll-view class="my_order_refund_progress_contents">
				<template>
					<view class="refund_progress_content">
						<view class="top-message">
							<view class="order-number">订单编号:<text>23143546789</text></view>
							<view class="schedules">取消/退款进度：<text>已退款</text></view>
						</view>

						<view class="refund-porduct">
							<view class="refund-porducts">
								<view class="order-items" v-for="(item,index) in orderPorduct" :key='index'>
									<view class="service-conditions">
										<view class="line-service-name">
											<view class="line"></view>
											<view class="service-name">{{item.name}}</view>
										</view>
										<view class="appointment"> 失效的商品将自动退款，请及时到院使用 </view>
									</view>

									<view class="order-porduct-content" v-for="(i,k) in item.porductImagesList" :key='k'>
										<view class="order-porduct-line">
											<view class="porduct-line"></view>
										</view>

										<view class="failure-time">
											<view class="time-hint">商品失效：2020-04-28 22:25:27</view>
										</view>

										<view class="order-porduct-images-name">
											<view class="porduct-images">
												<image :src="i.url" mode=""></image>
											</view>
											<view class="porduct-right">
												<view class="porduct-name">{{i.porductName}}</view>

												<view class="content-item" @tap='openPorductContent(index,k)' v-if="!i.showPorduct">
													<view class="porduct-content-items">{{i.content}}</view>
													<image :src="i.arrowImages" mode=""></image>
												</view>

												<view class="show-porduct-content" v-if="i.showPorduct" @tap='openPorductContent(index,k)'>
													<view class="content-items" v-for="(i,k) in i.contentList" :key='k'>
														<view class="versions">版本: {{i.versions}} </view>
														<view class="specification">规格: {{i.specification}} </view>
														<view class="part">部位: {{i.part}} </view>
														<view class="doctor">医生: {{i.doctor}} </view>
													</view>
													<image :src="i.topImages" mode=""></image>
												</view>

												<view class="porduct-price-number">
													<view class="porduct-price"><text>￥</text>{{i.price}}</view>
													<view class="porduct-number">x{{i.porductNumber}}</view>
												</view>


											</view>
										</view>

										<view class="pay-for-the-order ">
											<view class="pay-order-content">
												<view class=" total-price-on-line-pay">
													<view class="total-price">总价 <text>￥{{i.allPrice}}</text> </view>
													<view class="on-line-pay">在线支付 <text>￥{{i.onLinePay}}</text> </view>
												</view>
												<view class="discounts-hospital-pay">
													<view class="discounts">优惠 <text>￥{{i.discounts}}</text>
														<image src="../../static/images/ask1.png" mode=""></image>
													</view>
													<view class="hospital-pay">到院再付 <text>￥{{i.hospitalPay}}</text> </view>
												</view>
												<view class="cope-with">应付 <text>￥{{i.copeWith}}</text> </view>
											</view>
										</view>
									</view>

								</view>
							</view>
						</view>
						
						<view class="all-refund">
							<view class="all-refund-title">退款合计</view>
							<view class="arrival-notice" v-for="(i,k) in refundList" :key='k'>
								<view class="refund-name">{{i.name}}:</view>
								<view class="refund-content">{{i.content}} <text>({{i.time}}已到账)</text></view>
							</view>
						</view>
						
						<view class="porduct-refund-schedule">
							<view class="refund-time-content">
								<view class="refund-time">2020年6月16日 上午 12:26:19</view>
								<view class="refund-schedule-content">您的订单已提交管理员等待确认</view>
							</view>
							<view class="refund-time-content">
								<view class="refund-time">2020年6月16日 上午 12:26:19</view>
								<view class="refund-schedule-content">您的取消申请已通过，退款金额将在1-3个工作日原路退回</view>
							</view>
							<view class="refund-time-content">
								<view class="refund-time">2020年6月16日 上午 12:26:19</view>
								<view class="refund-schedule-content">您的取消申请已通过，退款金额将在1-3个工作日原路退回</view>
							</view>
						</view>
						
						<view class="contact-service">
							<view class="contact-service-bottom">
								<button class="bottom" type="default" plain="true" @tap='whetherCheck'>立即核销</button>
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
	import porduct from '../../components/porduct.vue'
	export default {
		components: {
			topBar,
			porduct
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
				title: '申请退款', //退款进度
				orderPorduct: [{
						name: '退款商品',
						porductImagesList: [
							{
								id: 1,
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
								allPrice: 19600,
								onLinePay: 500,
								discounts: 600,
								hospitalPay: 18500,
								copeWith: 19000,
								porductNumber: 2,
								state: '已退款',
							},
							{
								id: 2,
								url: '../../static/images/20.png',
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
								allPrice: 19600,
								onLinePay: 500,
								discounts: 600,
								hospitalPay: 18500,
								copeWith: 19000,
								porductNumber: 1
							}, {
								id: 1,
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
								allPrice: 19600,
								onLinePay: 500,
								discounts: 600,
								hospitalPay: 18500,
								copeWith: 19000,
								porductNumber: 2,
								state: '已使用',
							}, {
								id: 1,
								url: '../../static/images/19.png',
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
								allPrice: 19600,
								onLinePay: 500,
								discounts: 600,
								hospitalPay: 18500,
								copeWith: 19000,
								porductNumber: 2,
								state: '待使用',
							},
						],
					},

				],
				refundList:[
					{name:'微信退款',content:'￥1000',time:'2020.05.07  15:51'},
					{name:'喵豆退款',content:'19800个',time:'2020.05.07  15:51'},
					{name:'积分退款',content:'19800分',time:'2020.05.07  15:51'},
					{name:'余额退款',content:'￥20.45',time:'2020.05.07  15:51'},
					{name:'卡券退款',content:'所有券',time:'2020.05.07  15:51'},
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
			openPorductContent:function(index,k){
				let showPorduct = this.orderPorduct[index].porductImagesList[k].showPorduct
				this.orderPorduct[index].porductImagesList[k].showPorduct = !showPorduct
			},
		}
	}
</script>

<style scoped>
	
	.refund_progress_content {
		background-color: #F6F6F6;
		padding-bottom: 60rpx;
	}

	.top-message {
		background-color: #FFFFFF;
		border-radius: 0 0 24rpx 24rpx;
		padding: 30rpx 36rpx 57rpx;
	}

	.order-number {
		font-size: 28rpx;
		color: #111111;
		margin-bottom: 30rpx;
	}

	.order-number text {
		margin-left: 10rpx;
	}

	.top-message .schedules {
		font-size: 28rpx;
		color: #111111;
	}

	.schedules text {
		color: #fa3475;
	}

	.refund-porduct {
		padding: 20rpx;
	}

	.refund-porducts {
		background-color: #FFFFFF;
		border-radius: 24rpx;
	}

	.order-items {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 40rpx 0 0;
	}

	.service-conditions {
		display: flex;
		justify-content: space-between;
		padding-bottom: 22rpx;
		padding-right: 30rpx;
	}

	.line-service-name {
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

	.appointment {
		font-size: 24rpx;
		color: #999999;
	}

	.order-porduct-content {
		padding: 0 30rpx;
	}

	.order-porduct-line {
		padding: 0 0 32rpx;
	}

	.porduct-line {
		background-color: #F0F0F0;
		height: 2rpx;
	}

	.failure-time {
		position: relative;
		margin-bottom: 25rpx;
		display: flex;
		justify-content: space-between;
	}

	.time-hint {
		font-size: 24rpx;
		color: #999999;
	}

	.order-porduct-images-name {
		border-bottom: 2rpx solid #F0F0F0;
		padding-bottom: 30rpx;
		display: flex;
		justify-content: space-between;
		/* align-items: center; */
		position: relative;
	}

	.porduct-images {
		width: 200rpx;
		height: 200rpx;
	}

	.porduct-images image {
		width: 200rpx;
		height: 200rpx;
	}

	.porduct-right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
	}

	.porduct-name {
		width: 430rpx;
		font-size: 24rpx;
		line-height: 32rpx;
		color: #111111;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		margin-bottom: 20rpx;
	}

	.content-item {
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

	.content-item image {
		width: 32rpx;
		height: 32rpx;
	}

	.show-porduct-content image {
		width: 32rpx;
		height: 32rpx;
	}

	.show-porduct-content {
		font-size: 20rpx;
		background-color: #f0f0f0;
		border-radius: 20rpx;
		padding: 10rpx 16rpx;
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

	.show-porduct-content .content-items {
		width: 290rpx;
	}

	.porduct-content-items {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		width: 280rpx;
	}

	.porduct-price-number {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fa3475;
		margin-top: 15rpx;
	}

	.porduct-price {
		font-size: 40rpx;

	}

	.porduct-price text {
		font-size: 24rpx;
	}

	.porduct-number {
		font-size: 24rpx;
	}

	.content-items {
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

	.on-line-pay,
	.hospital-pay {
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
	
	.all-refund{
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 40rpx;
	}
	.all-refund-title{
		font-size: 28rpx;
		color: #000000;
		margin-bottom: 32rpx;
		font-weight: bold;
	}
	.arrival-notice{
		display: flex;
		align-items: center;
		margin-bottom: 32rpx;
		font-size: 24rpx;
		color: #000000;
	}
	.refund-content,.refund-content text{
		margin-left: 10rpx;
	}
	
	.porduct-refund-schedule{
		padding: 50rpx 40rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-top: 20rpx;
		
	}
	
	.refund-time-content{
		margin-bottom: 40rpx;
		position: relative;
		padding-left: 20rpx;
	}
	.refund-time-content:last-child{
		margin-bottom: 0;
	}
	
	.refund-time-content::before {
	        content: "";/* 必须存在如果没有图标就留空 */
	        position: absolute;/* 定位 */
	        left: -20rpx;/* 移动到左边 */
	        width: 20rpx;
			height: 20rpx;
			border-radius: 10rpx;
			background-color: #fa3475;
			top: 10rpx;
	}
	
	.refund-time-content::after {
        content: '';/* 必须存在如果没有图标就留空 */
        top: 24%;/* 定位 距离*/
        border-left: 1rpx solid #fa3475;/* 横线颜色 */
        left: -10rpx;/* 定位 距离*/
        height: 150%;/* 高度 */
        position: absolute;/* 定位 */
	}
	.refund-time-content:last-child::after{
		display: none;
	}
	
	.refund-time{
		color: #999999;
		font-size: 20rpx;
		line-height: 42rpx;
	}
	.refund-schedule-content{
		font-size: 20rpx;
		line-height: 30rpx;
		color: #111111;
	}
	
	
	.contact-service{
		margin-top: 60rpx;
	}
	
	.contact-service-bottom{
		padding: 0 40rpx;
	}
	.contact-service-bottom .bottom {
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		background-image: linear-gradient(0deg, #fa3475 0%, #ff6699 100%);
		box-shadow: 3rpx 3rpx 8rpx 0rpx rgba(233, 30, 97, 0.56);
		border-radius: 44rpx;
		background-color: #FFFFFF;
		border: 0;
		font-size: 32rpx;
		color: #FFFFFF;
	}
	
</style>
