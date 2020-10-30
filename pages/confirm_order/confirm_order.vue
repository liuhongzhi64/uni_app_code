<template>
	<view class="confirm_order">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<view class="content">
			<scroll-view class="porduct-content" scroll-y :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
				<template>
					<view class="confirm_order_content">

						<view class="selector-mode">
							<!-- 订单信息、商品类型、方式、用户名、电话、收货地址 -->
							<view class="porduct-label-mode">
								<view class="porduct-label">护肤品</view>
								<view class="all-mode">
									<view class="mode-label" @tap='chooseLabel(k)' v-for="(i,k) in modeList" :key='k'>
										<view class="mode-btn">
											<view class="end-cont" :class="{dis:btnnum == k}"> </view>
										</view>

										<view class="mode-name">{{i}}</view>
									</view>
								</view>
							</view>

							<view class="choose-pickup-method"> *请选择护肤品的领取方式 </view>

							<view class="user-message">
								<view class="user-name"> 张亮 </view>
								<view class="user-phone">188****4357</view>
								<view class="defult-site">默认</view>
								<view class="user-home">家</view>
							</view>

							<view class="shipping-address">
								<view class="shipping-address-title">收货地址</view>
								<view class="address">四川省成都市武侯区华美紫馨医学美容医院地址太多最多两行，最多两行</view>
								<image src="../../static/images/back1.png" mode=""></image>
							</view>

						</view>

						<!-- 商品信息 -->
						<view class="porduct-introduce">
							<view class="porduct-introduce-top">
								<view class="this-title">商品信息 </view>
								<view class="hint-set-details">
									<view class="hint">有商品属于不支持退款操作</view>
									<view class="set-details"> 查看详情 > </view>
								</view>
							</view>

							<!-- 商品图片、总计 -->
							<view class="porduct-images-all-set">
								<view class="porduct-images-item">
									<scroll-view class="porduct-images-items" scroll-x="true">
										<view class="images-item">
											<view class="porduct-images-list" v-for="(i,k) in porductImagesList" :key='k'>
												<image :src="i.url" mode=""></image>
											</view>
										</view>
									</scroll-view>
								</view>

								<view class="all-see">
									<view class="all-porduct"> 共计4件 </view>
									<view class="see"> 查看 > </view>
								</view>
							</view>

							<!-- 赠品 -->
							<view class="complimentary-list">
								<view class="complimentary-items">
									<view class="complimentary-item" v-for="(i,k) in complimentaryList" :key='k'>
										<view class="complimentary-title">赠品</view>
										<view class="complimentary-content">{{i}}</view>
									</view>
								</view>
							</view>

							<view class="porduct-hint"> 赠品将以卡券的方式自动发放到卡包 </view>

						</view>



						<!-- 留言 -->
						<view class="leave-a-message">
							<view class="message-text"> 留言 </view>
							<view class="message-input">
								建议留言前先与咨询沟通
							</view>
						</view>

						<!-- ticket券discount折扣  -->
						<view class="ticket-discount">

							<view class="preferential-policy" v-for="(i,k) in ticketList" :key='k'>
								<view class="ticket-name-content">
									<view class="ticket-name"> {{i.name}} </view>
									<view class="ticket-content"> {{i.content}} </view>
								</view>

								<view class="preferential-price" v-if="i.more"> {{i.price}} &nbsp;> </view>
								<view class="preferential-prices" v-if="!i.more"> {{i.price}}&ensp;</view>
							</view>
						</view>

						<!-- 积分、喵豆、余额 -->
						<view class="deduction">
							<view class="deductionList" v-for="(i,k) in deductionList" :key='k'>
								<view class="deduction-name-content">
									<view class="deduction-name">{{i.name}}</view>
									<image src="../../static/images/ask1.png" mode=""></image>
									<view class="deduction-content">{{i.content}} <text class="deduction-price">抵{{i.price}}</text></view>
								</view>

								<view class="deduction-switch">
									<switch color='#09bb07' style="transform:scale(0.8)" :checked='i.checked' :data-k='k' @change="switchChange" />
								</view>
							</view>
						</view>

						<!-- 商品价格和各种优惠 -->
						<view class="porduct-price">
							<view class="porduct-price-item" v-for="(i,k) in priceList" :key='k'>
								<view class="item-name" :class="{color:i.colors}">
									<text>{{i.name}} </text>
									<image v-if="i.ask" src="../../static/images/ask1.png" mode=""></image>
								</view>
								<view class="price-content" :class="{color:i.color}"> <text v-if="i.minus">-</text> ￥{{i.price}}</view>
							</view>
						</view>

						<view class="mode-of-payment">

							<view class="this-title">支付方式 </view>
							<view class="payment-way" v-for="(i,k) in playWayList" :key='k'>
								<view class="image-name">
									<image :src="i.url" mode=""></image>
									<view class="play-name">{{i.name}}</view>
								</view>
								<view class="play-radio">
									<checkbox-group @change="playChange">
										<label>
											<view>
												<checkbox color="#ff6699" :value="i.value" :checked="i.checked" />
											</view>
										</label>
									</checkbox-group>
								</view>
							</view>


						</view>

						<view class="footer-navigation-bars">
							<view class="footer-hint">有商品于2020.06.26过期，请尽快到院核销使用</view>
							<view class="price-play" v-for="(i,k) in palyPrice" :key='k'>
								<view class="price-item-content">
									<view class="all-price"> <text class="total">合计:</text> <text class="text">￥</text> <text class="all-prices">{{i.allPrice}}</text> </view>
									<view class="item-price">在线支付:￥{{i.newPlay}}, 到院再付:￥{{i.hospitalPlay}}</view>
								</view>
								<view class="promptly-play">立即支付</view>
							</view>
							
						</view>

					</view>
				</template>
			</scroll-view scroll-y>
		</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	export default {
		components: {
			topBar,
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				barName: 'back', //导航条名称
				title: '确认订单',
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '/static/images/return.png',
				modeList: ['邮寄', '到院领取'],
				btnnum: 0,
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
				complimentaryList: ['HB面膜(2片装)一盒', '华桑葆骊科玮防晒霜SPF30（2支）', '20元无门槛卡券', '2000元满减券'],
				ticketList: [{
						name: '卡券',
						content: '满5000减500',
						price: 500,
						more: true
					},
					{
						name: '满减',
						content: '满5000减500',
						price: 500,
						more: false
					},
					{
						name: '折扣',
						content: '满2件减500',
						price: 500,
						more: false
					},
				],
				deductionList: [{
						name: '积分',
						content: '共100000，可用5000,',
						price: 800,
						checked: true
					},
					{
						name: '喵豆',
						content: '共4000，可用4000,',
						price: 4000,
						checked: false
					},
					{
						name: '余额',
						content: '共400，可用40,',
						price: 80,
						checked: false
					},
				],
				priceList: [{
						name: '商品总价',
						price: 56800,
					},
					{
						name: '优惠合计',
						price: 6800,
						minus: true,
						color: true,
						ask: true
					},
					{
						name: '邮寄运费',
						price: 0,
					},
					{
						name: '实际应付',
						price: 50000,
					},
					{
						name: '在线支付',
						price: 1000,
						color: true,
						colors: true
					},
					{
						name: '到院再付',
						price: 49000,
					},
				],
				playWayList: [{
						url: '../../static/images/weixin_3f.png',
						name: '微信',
						value: 'weixin',
					},
					{
						url: '../../static/images/zhifubao.png',
						name: '支付宝',
						value: 'zhifubao',
					},
					{
						url: '../../static/images/yinlian.png',
						name: '银联支付',
						value: 'yinlian',
					},
				],
				palyPrice:[
					{
						allPrice:50000,
						newPlay:1000,
						hospitalPlay:49000
					}
				]
			
			}
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
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
			if(platform=='applet'){
				// 获取屏幕高度
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuWidth = menu.width
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuLeft = menu.left
						that.menuBottom = menu.bottom
					}
				})
			}
			else{
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			chooseLabel: function(k) {
				this.btnnum = k
			},
			switchChange: function(e) {
				console.log(e.target.value)
				console.log(e.currentTarget.dataset)
			},
			playChange: function(e) {
				var items = this.playWayList,
					values = e.detail.value;
					console.log(values)
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
			}
		}
	}
</script>

<style scoped>
	.porduct-content {
		background-color: #F6F6F6;
	}

	.selector-mode {
		padding: 32rpx 40rpx 58rpx;
		background-color: #FFFFFF;
		font-size: 24rpx;
		display: flex;
		flex-direction: column;
		border-bottom-left-radius: 24rpx;
		border-bottom-right-radius: 24rpx;
	}

	.porduct-label-mode {
		display: flex;
		align-items: center;
	}

	.all-mode {
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		font-size: 32rpx;
		color: #111111;
	}

	.mode-label {
		display: flex;
		align-items: center;
	}

	.mode-btn {
		width: 24rpx;
		height: 24rpx;
		background-color: #f8f8f8;
		border: 1rpx solid #dcdcdc;
		border-radius: 12rpx;
		margin-right: 16rpx;
		margin-left: 38rpx;
	}

	.end-cont {
		display: none;
	}

	.dis {
		display: block;
		width: 24rpx;
		height: 24rpx;
		border-radius: 12rpx;
		background-image: linear-gradient(0deg, #fa3475 0%, #ff5f93 100%);
	}

	.choose-pickup-method {
		font-size: 24rpx;
		color: #fb4983;
		margin-top: 24rpx;
	}

	.user-message {
		display: flex;
		align-items: center;
		font-size: 32rpx;
		color: #000000;
		margin-top: 40rpx;
	}

	.user-phone {
		margin: 0 50rpx 0 32rpx;
	}

	.defult-site {
		font-size: 20rpx;
		width: 66rpx;
		height: 32rpx;
		background-image: linear-gradient(90deg, #fa3475 0%, #ff6699 100%);
		border-radius: 16rpx;
		margin-right: 20rpx;
		text-align: center;
		color: #FFFFFF;
	}

	.user-home {
		font-size: 20rpx;
		width: 66rpx;
		height: 32rpx;
		border-radius: 16rpx;
		text-align: center;
		color: #FFFFFF;
		background-image: linear-gradient(90deg, #8834fa 0%, #bc66ff 100%);
	}

	.shipping-address {
		display: flex;
		font-size: 24rpx;
		color: #343434;
		line-height: 40rpx;
		width: 100%;
	}

	.shipping-address-title {
		margin-right: 20rpx;
	}

	.address {
		flex: 1;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.shipping-address image {
		width: 20rpx;
		height: 32rpx;
		transform: rotate(180deg);
		margin-left: 30rpx;
	}

	/* 商品信息 */
	.porduct-introduce {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		display: flex;
		flex-direction: column;
		padding: 40rpx;
		margin-top: 20rpx;
	}

	.porduct-introduce-top {
		display: flex;
		align-items: center;
		line-height: 30rpx;
		justify-content: space-between;
	}

	.this-title {
		font-size: 28rpx;
		font-weight: bolder;
		color: #000000;
	}

	.hint-set-details {
		display: flex;
		color: #111111;
		font-size: 24rpx;

	}

	.hint {
		font-weight: lighter;
	}

	.set-details {
		color: #fa3475;
		margin-left: 20rpx;
	}


	.porduct-images-all-set {
		display: flex;
		align-items: center;
		margin-top: 30rpx;
	}

	.porduct-images-item {
		width: 522rpx;
		height: 200rpx;
	}

	.images-item {
		width: 100%;
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
	}

	.see {
		color: #fa3475;
	}

	.complimentary-item {
		display: flex;
		align-items: center;
		margin-top: 24rpx;
		font-size: 24rpx;
		color: #000000;
	}

	.complimentary-title {
		width: 80rpx;
		height: 30rpx;
		line-height: 30rpx;
		background-color: #ffe8f0;
		border-radius: 15rpx;
		font-size: 20rpx;
		color: #fa3475;
		margin-right: 18rpx;
		text-align: center;
	}

	.porduct-hint {
		margin-top: 37rpx;
		font-size: 24rpx;
		padding-top: 30rpx;
		border-top: 2rpx solid #f0f0f0;
		color: #999999;
	}

	/* 留言 */
	.leave-a-message {
		padding: 40rpx;
		margin-top: 20rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		display: flex;
		align-items: center;
		line-height: 30rpx;
	}

	.message-text {
		font-size: 28rpx;
		color: #111111;
		font-weight: bolder;
		margin-right: 30rpx;
	}

	.message-input {
		flex: 1;
		/* height: 80rpx; */
		border-radius: 8rpx;
		background-color: #F6F6F6;
		padding: 28rpx 0 28rpx 32rpx;
		font-size: 24rpx;
		color: #999999;
	}

	/* 优惠 */
	.ticket-discount {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 40rpx;
		margin-top: 20rpx;
	}

	.preferential-policy {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		margin-bottom: 32rpx;
	}

	.preferential-policy:last-child {
		margin-bottom: 0;
	}

	.ticket-name-content {
		display: flex;
		align-items: center;
		line-height: 48rpx;
	}

	.ticket-name {
		width: 80rpx;
		height: 30rpx;
		line-height: 30rpx;
		color: #fa3475;
		text-align: center;
		background-color: #ffe8f0;
		border-radius: 15rpx;
		margin-right: 16rpx;
	}

	.preferential-price,
	.preferential-prices {
		font-size: 32rpx;
		color: #fa3475;
		line-height: 48rpx;
	}

	.preferential-prices {
		padding-right: 42rpx;
	}

	/* 积分、喵豆、余额 */
	.deduction {
		margin-top: 20rpx;
		padding: 40rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
	}

	.deductionList {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		line-height: 30rpx;
		margin-bottom: 30rpx;
	}

	.deductionList:last-child {
		margin-bottom: 0;
	}

	.deduction-name-content {
		display: flex;
		align-items: center;
	}

	.deduction-name-content image {
		width: 32rpx;
		height: 32rpx;
		margin: 0 24rpx 0 12rpx;
	}

	.deduction-price {
		color: #fa3475;
	}

	/* 商品总价 */
	.porduct-price {
		padding: 40rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-top: 20rpx;
	}

	.porduct-price-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40rpx;
	}

	.porduct-price-item:last-child {
		margin-bottom: 0;
	}

	.item-name {
		font-size: 24rpx;
		display: flex;
	}

	.item-name image {
		width: 32rpx;
		height: 32rpx;
		margin-left: 12rpx;
	}

	.price-content {
		font-size: 32rpx;

	}

	.color {
		color: #fa3475;
	}

	/* 支付方式 */
	.mode-of-payment {
		margin-top: 20rpx;
		margin-bottom: 294rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 40rpx;
	}

	.payment-way {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 37rpx;
	}

	.image-name {
		display: flex;
		align-items: center;
		font-size: 24rpx;
		color: #000000;
	}

	.image-name image {
		width: 72rpx;
		height: 72rpx;
		border-radius: 36rpx;
	}


	/* 底部 */
	.footer-navigation-bars {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	
	.footer-hint{
		background-color: #000000;
		color: #FFFFFF;
		font-size: 20rpx;
		text-align: center;
		padding: 14rpx 0;
		opacity: 0.8;
	}
	.price-play{
		display: flex;
		justify-content: space-between;
		padding: 12rpx 40rpx;
		background-color: #FFFFFF;
		font-size: 20rpx;
	}
	.all-price{
		color: #111111;	
	}
	.total{
		font-size: 28rpx;
		font-weight: bolder;
	}
	.all-price .text{
		color: #fa3475;
		font-size: 24rpx;
		margin-left: 12rpx;
	}
	.all-prices{
		font-size: 40rpx;
		color: #fa3475;
	}
	.item-price{
		color: #999999;
		line-height: 34rpx;
	}
	.promptly-play{
		width: 220rpx;
		height: 80rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		line-height: 80rpx;
		text-align: center;
		background-image: linear-gradient(-45deg, 
			#fa3475 0%, 
			#ff6699 100%);
		border-radius: 40rpx;	
	}
	
</style>
