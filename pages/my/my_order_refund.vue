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

							<view class="check-porduct">
								
								<porduct :changePorduct='changePorduct' @checkboxChange='checkboxChange' @openPorductContent='openPorductContent' />
							</view>
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
					<button class="apply-for" type="default" plain="true" @tap='submitApplyFor'>下一步</button>
				</view>
			</view>
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
				title: '申请退款',
				hintList: ['1、若发生整单退款，或是部分退款，我院有权收回相关赠品，并根据退款/退单后的情况重新计算优惠信息和赠品信息。', '2、若邮寄商品一律不支持无理由退货；',
					'邮寄中的商品，申请退款需要等待人工审核，我院需确认回收到货品后方可退款；', '4、关于退款金额，将原路返还。'
				],
				changePorduct: [
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
								state:'待使用'
							}
						]
					},
					{
						title:'会员中心使用',
						porduct:[
							{
								id:'02048495',
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
								state:'未使用'
							}
						]
					},
					{
						title:'不支持在线退款商品',
						porduct:[
							{
								id:'02048499',
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
								state:'未使用'
							}
						]
					},
				],
				changePorductNumber:[]
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
				let porduct = this.changePorductNumber
				uni.navigateTo({
					url: `/pages/my/my_order_refund_reason?refundporduct=${porduct}`,
				})
			},
			
			checkboxChange: function(porductNumber) {
				this.changePorductNumber = porductNumber
				console.log(porductNumber)
			},
			openPorductContent:function(index,k){
				console.log(index , k)
				let showPorduct = this.changePorduct[k].porduct[index].showPorduct
				this.changePorduct[k].porduct[index].showPorduct = !showPorduct
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
		padding-bottom: 240rpx;
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

	


	.bottom-refund-hint {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 9;
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
		background-color: #FFFFFF;
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
