<template>
	<view class="check_order">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="check_order_content" :style="[{'padding-top':menuBottom+10+'px',height:height-menuBottom-10+'px'}]">
			<scroll-view class="check_order_contents">
				<template>
					<view class="check-content">
						<view class="top-user-message">
							<view class="message-title">客户信息</view>
							<view class="user-name">
								客户姓名 <text> 张*悠 </text>
							</view>
							<view class="user-phone">
								客户电话 <text> {{serialNumber}} </text> <text class="copy" :data-copy='serialNumber' @tap='copySerialNumber'>复制</text>
							</view>
						</view>

						<view class="check-porduct">
							<porduct :changePorduct='changePorduct' @checkboxChange='checkboxChange' @openPorductContent='openPorductContent' />
						</view>

						<view class="price-list">
							<view class="price-title-prices">
								<view class="price-title">商品总价</view>
								<view class="price">￥{{allPrice}}</view>
							</view>
							<view class="price-title-prices">
								<view class="price-title">优惠合计</view>
								<view class="price">￥{{discountsPrice}}</view>
							</view>
							<view class="price-title-prices">
								<view class="price-title">邮寄运费</view>
								<view class="price">￥{{postPrice}}</view>
							</view>
							<view class="price-title-prices">
								<view class="price-title">实际应付</view>
								<view class="price">￥{{copeWith}}</view>
							</view>
							<view class="line"></view>
							<view class="price-title-prices">
								<view class="price-title">在线支付</view>
								<view class="price" style="color: #fa3475;">￥{{onLinePay}}</view>
							</view>
							<view class="price-title-prices">
								<view class="price-title">到院再付</view>
								<view class="price" style="color: #fa3475;">￥{{hospitalPay}}</view>
							</view>
						</view>
						
						<view class="check-message">
							<view class="title-name">订单信息</view>
							<view class="message-title-content">
								<view class="message-title">订单编号:</view>
								<view class="message-content ">{{orderNumber}} <text style="color: #fa3475;"  :data-copy='orderNumber' @tap='copySerialNumber' >复制</text>  </view>
							</view>
							<view class="message-title-content">
								<view class="message-title">下单时间:</view>
								<view class="message-content "> 2020-04-28  11:01:07  </view>
							</view>
							<view class="message-title-content">
								<view class="message-title">订单备注:</view>
								<view class="message-content "> 无 </view>
							</view>
						</view>
						
						<view class="check-message">
							<view class="title-name">核销信息</view>
							<view class="message-title-content">
								<view class="message-title">核销时间:</view>
								<view class="message-content ">2020.07.19  13:14:52 </view>
							</view>
							<view class="message-title-content">
								<view class="message-title">核销人员:</view>
								<view class="message-content "> 嚣张三 </view>
							</view>
							<view class="message-title-content">
								<view class="message-title">核销状态</view>
								<view class="message-content " style="color: #fa3475;"> 未核销 </view>
							</view>
						</view>
						
						<view class="promptly-check">
							<view class="check-bottom">
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
				title: '订单核销',
				serialNumber: 18848697647,
				changePorduct: [{
						title: '收费室使用',
						porduct: [{
							id: '02048492',
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
							state: '待使用'
						}]
					},
					{
						title: '会员中心使用',
						porduct: [{
							id: '02048495',
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
							state: '未使用'
						}]
					},
					{
						title: '已核销商品',
						porduct: [{
							id: '02048499',
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
							state: '未使用'
						}]
					},
				],
				allPrice: '39600.00',
				discountsPrice: '1200.45',
				postPrice: '0.00', //邮寄
				copeWith: '39600.00',
				onLinePay: '39599.55',
				hospitalPay: '0.45',
				orderNumber:'2354777654',

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
			copySerialNumber: function(e) {
				// console.log(e.currentTarget.dataset.copy)
				let copy = e.currentTarget.dataset.copy
				uni.setClipboardData({
					data: copy,
					success: function() {
						console.log('复制成功');
					}
				});
			},
			checkboxChange: function(porductNumber) {
				console.log(porductNumber)
			},
			openPorductContent: function(index, k) {
				console.log(index, k)
				// console.log(this.porductList[k].porduct[index].showPorduct)
				let showPorduct = this.changePorduct[k].porduct[index].showPorduct
				this.changePorduct[k].porduct[index].showPorduct = !showPorduct
			},
			whetherCheck:function(){
				uni.showModal({
				    title: '温馨提示',
				    content: '您正在进行核销操作，是否继续？',
					cancelText:'取消',
					cancelColor:'#333333',
					confirmText:'继续核销',//确定按钮的文字，默认为"确定"
					confirmColor:'#fa3475',//确定按钮的文字颜色
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
		}
	}
</script>

<style scoped>
	.check-content {
		padding-bottom: 65rpx;
		background-color: #F6F6F6;
	}

	.top-user-message {
		background-color: #FFFFFF;
		padding: 35rpx 40rpx 54rpx;
		border-radius: 0 0 24rpx 24rpx;
	}

	.message-title {
		color: #111111;
		font-size: 28rpx;
		font-weight: bold;
	}

	.user-name,
	.user-phone {
		font-size: 28rpx;
		color: #999999;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}

	.user-name text,
	.user-phone text {
		color: #111111;
		margin-left: 20rpx;
	}

	.user-phone .copy {
		color: #fb4983;
	}

	.price-list ,.check-message{
		margin-top: 20rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 40rpx;
	}

	.price-list .line {
		height: 2rpx;
		background-color: #F0F0F0;
		margin-bottom: 30rpx;
	}

	.price-title-prices {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;
		font-size: 24rpx;
	}

	.price-title-prices:last-child {
		margin-bottom: 0;
	}

	.price-title-prices .price {
		font-size: 32rpx;
		color: #999999;
	}
	.title-name{
		font-size: 28rpx;
		color: #111111;
		font-weight: bolder;
		margin-bottom: 20rpx;
	}
	.message-title-content{
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
	}
	.message-title-content:last-child{
		margin-bottom: 0;
	}
	.message-title{
		color: #999999;
		font-size: 24rpx;
	}
	
	.message-content{
		margin-left: 32rpx;
		color: #111111;
		font-size: 24rpx;
	}
	.message-content text{
		margin-left: 24rpx;
	}
	
	.promptly-check{
		margin-top: 68rpx;
	}

	.check-bottom{
		padding: 0 40rpx;
	}
	.check-bottom .bottom {
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
