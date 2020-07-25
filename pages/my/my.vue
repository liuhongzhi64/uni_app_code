<template>
	<view class="my">
		<view class="top-nav-message">
			<view class="my-top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px'}]">
				<view class="back-title" :style="[{'height':menuHeight+'px'}]">
					<view class="back">
						<image src="../../static/images/return.png" mode=""></image>
					</view>
					<view class="title" :style="[{'margin-right':menuWidth+'px'}]"> 个人中心 </view>
				</view>
			</view>
			<view class="top-message" :style="[{'padding-top':menuBottom+10+'px'}]">
				<view class="user-message">
					<view class="user-head-portrait-name-phone-set">
						<view class="user-head-portrait">
							<image src="../../static/images/19.png" mode=""></image>
							<view class="name-cart-phone">
								<view class="user-name-cart">
									<view class="user-name">用户名字就八个字</view>
									<view class="user-cart"> 时尚卡 </view>
								</view>
								<view class="phone"> 18281612661</view>
							</view>
						</view>
						<view class="set"> 设置 <text>》</text> </view>
					</view>
					<view class="card-volume-integral-bean-balance-currency">
						<view class="all-card" v-for="(i,k) in cardList" :key='k'>
							<view class="card-number"> {{i.number}} </view>
							<view class="card-name"> {{i.name}} </view>
						</view>
					</view>
					<view class="advertising">
						<image src="../../static/images/0.png" mode=""></image>
					</view>
				</view>
			</view>

		</view>

		<view class="content">

			<view class="my-order">
				<view class="order-all-order">
					<view class="order"> 我的订单 </view>
					<view class="all-order"> 所有订单 <text>》</text> </view>
				</view>

				<view class="order-message">
					<view class="order-list" v-for="(i,k) in orderList" :key='k'>
						<view class="oder-image-number">
							<view class="order-image">
								<image :src="i.url" mode=""></image>
							</view>
							<view class="order-number" v-if="i.number"> {{i.number}} </view>
						</view>
						<view class="order-name"> {{i.orderName}} </view>
					</view>
				</view>
			</view>

			<view class="display-advertising">
				<image src="../../static/images/12.png" mode=""></image>
			</view>

			<view class="serve-and-tool">
				<view class="serve-and-tool-title"> 服务与工具 </view>
				<view class="serve-and-tool-list">
					<view class="serve-tool-list" v-for="(i,k) in serveToolList" :key='k'>
						<view class="tool-item">
							<view class="tool-image">
								<image :src="i.url" mode=""></image>
							</view>
							<view class="tool-name"> {{i.toolName}} </view>
						</view>

					</view>
				</view>
			</view>

			<view class="guess-what-you-like">
				<view class="related-title">
					<view class="line"></view> 猜你喜欢
				</view>

				<scroll-view scroll-y class="topList">
					<template>
						<view class="subject-content">
							<!-- 左边 -->
							<view class="left-product">
								<view class="product-show" v-for="(i,k) in leftProduct" :key='k' :data-name="i.title" @tap="gotoGoods">
									<view class="images">
										<image :src="i.url" mode=""></image>
									</view>
									<view class="product-title"> {{i.title}} </view>
									<view class="product-label" v-if="i.label.length>1">
										<view class="label-name" v-for="(i,k) in i.label" :key='k'> {{i}} </view>
									</view>
									<view class="activity" v-if="i.activity.length>1">
										<view class="activityName" v-for="(i,k) in i.activity" :key='k'> {{i}} </view>
									</view>
									<view class="porduct-price-vip-cart">
										<view class="porduct-price">
											<text>￥</text>{{i.price}}
										</view>
										<view class="vip-cart-price" v-if="i.vipPrice>0">
											<text class="vip-cart">钻卡</text>
											<text class="vip-price">￥{{i.vipPrice}}</text>
										</view>
									</view>
									<!-- 预约和好评 -->
									<view class="subscribeAndGoodReputation" v-for="(i,k) in i.subscribeAndGoodReputation" :key='k'>
										<view class="subscribe-goodReputation">
											<!-- 预约 -->
											<view class="subscribe"> {{i.subscribe}}预约 </view>
											<!-- 好评 -->
											<view class="goodReputation"> {{i.goodReputation}}%好评 </view>
										</view>
									</view>
								</view>

							</view>
							<!-- 右边 -->
							<view class="right-product">
								<view class="product-show" v-for="(i,k) in rightProduct" :key='k' :data-name="i.title" @tap="gotoGoods">
									<view class="images">
										<image :src="i.url" mode=""></image>
									</view>
									<view class="product-title"> {{i.title}} </view>
									<view class="product-label" v-if="i.label.length>1">
										<view class="label-name" v-for="(i,k) in i.label" :key='k'> {{i}} </view>
									</view>
									<view class="activity" v-if="i.activity.length>1">
										<view class="activityName" v-for="(i,k) in i.activity" :key='k'> {{i}} </view>
									</view>
									<view class="porduct-price-vip-cart">
										<view class="porduct-price">
											<text>￥</text>{{i.price}}
										</view>
										<view class="vip-cart-price" v-if="i.vipPrice>0">
											<text class="vip-cart">钻卡</text>
											<text class="vip-price">￥{{i.vipPrice}}</text>
										</view>
									</view>
									<!-- 预约和好评 -->
									<view class="subscribeAndGoodReputation" v-for="(i,k) in i.subscribeAndGoodReputation" :key='k'>
										<view class="subscribe-goodReputation">
											<!-- 预约 -->
											<view class="subscribe"> {{i.subscribe}}预约 </view>
											<!-- 好评 -->
											<view class="goodReputation"> {{i.goodReputation}}%好评 </view>
										</view>
									</view>

								</view>
							</view>
						</view>
					</template>
				</scroll-view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				cardList: [{
						number: 20,
						name: '卡卷'
					},
					{
						number: 99999,
						name: '积分'
					},
					{
						number: 400,
						name: '喵豆'
					},
					{
						number: 20,
						name: '余额'
					},
					{
						number: 20,
						name: '喵币'
					},
				],
				orderList: [{
						url: '../../static/images/classify1.png',
						number: 3,
						orderName: '待付款',
					},
					{
						url: '../../static/images/classify1.png',
						number: 3,
						orderName: '已付款',
					},
					{
						url: '../../static/images/classify1.png',
						number: 3,
						orderName: '待评价',
					},
					{
						url: '../../static/images/classify1.png',
						number: 3,
						orderName: '已完成',
					},
					{
						url: '../../static/images/classify1.png',
						number: 3,
						orderName: '已退款',
					},
				],
				serveToolList: [{
						url: '../../static/images/cart0.png',
						toolName: '购物车',
					},
					{
						url: '../../static/images/ask.png',
						toolName: '我的问答',
					},
					{
						url: '../../static/images/cart0.png',
						toolName: '我的日记',
					},
					{
						url: '../../static/images/ask.png',
						toolName: '我的收藏',
					},
					{
						url: '../../static/images/cart0.png',
						toolName: '我的消息',
					},
					{
						url: '../../static/images/ask.png',
						toolName: '我的评价',
					},
				],
				leftProduct: [{
						url: '../../static/images/19.png',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: [], //标签
						headPortrait: '../../static/images/23.png', //头像
						price: 19800,
						activity: [],
						vipPrice: 0,
						subscribeAndGoodReputation: [{
							subscribe: '441',
							goodReputation: '98'
						}],

					},
					{
						url: '../../static/images/20.png',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: [], //标签
						headPortrait: '../../static/images/test.jpg', //头像
						activity: ['首单必减', '折扣'],
						price: 19800,
						vipPrice: 18800,
						subscribeAndGoodReputation: [{
							subscribe: '441',
							goodReputation: '98'
						}],
					},

				],
				rightProduct: [{
						url: '../../static/images/20.png',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: ['眼部美容', '眼部'], //标签
						headPortrait: '../../static/images/test.jpg', //头像
						userName: '用户昵称几个字',
						like: 99, //点赞
						price: 19800,
						vipPrice: 18800,
						subscribeAndGoodReputation: [{
							subscribe: '441',
							goodReputation: '98'
						}],
					},
					{
						url: '../../static/images/19.png',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: ['眼部美容', '眼部'], //标签
						headPortrait: '../../static/images/23.png', //头像
						userName: '用户昵称几个字',
						like: 99, //点赞
						price: 19800,
						vipPrice: 0,
						subscribeAndGoodReputation: [{
							subscribe: '441',
							goodReputation: '98'
						}],
					},
				]
			}
		},
		onReady() {
			let that = this;
			let pageHeight = 0
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					pageHeight = res.windowHeight
					let menu = uni.getMenuButtonBoundingClientRect();
					that.menuWidth = menu.width
					that.menuTop = menu.top
					that.menuHeight = menu.height
					that.menuLeft = menu.left
					that.menuBottom = menu.bottom
				}
			})
		},
		methods: {
			gotoGoods: function(e) {
				let goods = e.currentTarget.dataset.name
				uni.navigateTo({
					url: `/pages/goods/goods_detail?goods=${goods}`,
				})
			},
		}
	}
</script>

<style scoped>
	.top-nav-message {
		background-image: linear-gradient(-49deg, #f24788 0%, #ff69a1 100%);
		overflow: hidden;
		height: auto;
		width: 100%;
	}

	.my-top-bar {
		color: #FFFFFF;
		background-image: linear-gradient(-49deg, #f24788 0%, #ff69a1 100%);
		text-align: center;
		font-size: 40rpx;
		position: fixed;
		z-index: 100;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
	}

	.back-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 38rpx;
	}

	.back {
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		width: 60rpx;
		height: 100%;
	}

	.back image {
		width: 36rpx;
		height: 36rpx;
	}

	.back-title .title {
		flex: 1;
		margin-left: 80rpx;
	}

	.user-head-portrait-name-phone-set {
		padding: 10rpx 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
	}

	.user-head-portrait {
		display: flex;
		align-items: center;
	}

	.user-head-portrait image {
		width: 120rpx;
		height: 120rpx;
		border-radius: 60rpx;
		margin-right: 24rpx;
	}

	.user-name-cart {
		display: flex;
		align-items: center;
	}

	.user-name-cart .user-name {
		font-size: 32rpx;
		color: #FFFFFF;
	}

	.user-name-cart .user-cart {
		font-size: 20rpx;
		padding: 6rpx 15rpx;
		background-color: #FFFFFF;
		color: #fa3475;
		border-radius: 17rpx;
		margin-left: 24rpx;
	}

	.user-head-portrait-name-phone-set .phone {
		color: #f0f0f0;
		line-height: 32rpx;
		margin-top: 10rpx;
	}

	.user-head-portrait-name-phone-set .set {
		color: #FFFFFF;
	}

	.set text {
		margin-left: 10rpx;
	}

	.card-volume-integral-bean-balance-currency {
		padding: 40rpx 50rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #FFFFFF;
		font-size: 32rpx;
		text-align: center;
	}

	.all-card .card-name {
		color: #f0f0f0;
	}

	.advertising {
		width: 100%;
		padding: 0 40rpx 0;
	}

	.advertising image {
		width: 90%;
		height: 150rpx;
	}

	/* 我的订单 */

	.order-all-order {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 35rpx;
		font-size: 28rpx;
		color: #111111;
	}

	.order,
	.all-order {
		width: 40%;
	}

	.all-order {
		text-align: end;
	}

	.all-order text {
		margin-left: 10rpx;
	}

	.order-message {
		padding: 0 60rpx 40rpx;
		font-size: 20rpx;
		color: #505050;
	}

	.order-list {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.order-message,
	.order-image {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.oder-image-number {
		display: flex;
		margin-bottom: 10rpx;
	}

	.order-image image {
		width: 50rpx;
		height: 46rpx;
		margin-left: 15rpx;
	}

	.order-number {
		width: 24rpx;
		height: 24rpx;
		border-radius: 12rpx;
		text-align: center;
		line-height: 24rpx;
		background-image: linear-gradient(-31deg, #ee2668 0%, #ff6699 100%);
		color: #FFFFFF;
		font-size: 16rpx;
		margin-left: -10rpx;
		margin-top: -10rpx;
	}

	/* 图片广告 */
	.display-advertising{
		background-color: #F6F6F6;
		padding: 20rpx 0;
	}
	.display-advertising image {
		height: 240rpx;
		width: 100%;
	}

	/* 服务与工具 */
	.serve-and-tool-title {
		line-height: 88rpx;
		padding-left: 30rpx;
		font-size: 28rpx;
		font-weight: bolder;
		border-bottom: 1rpx solid #f0f0f0;
	}

	.serve-and-tool-list {
		padding: 40rpx 60rpx;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.serve-tool-list {
		width: 20%;
	}

	.tool-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 20rpx;
		color: #000000;
		margin-bottom: 16rpx;
	}

	.tool-image image {
		width: 50rpx;
		height: 46rpx;
	}

	/* 猜你喜欢 */
	.guess-what-you-like {
		background-color: #F6F6F6;
		padding: 40rpx 20rpx;
	}

	.line {
		width: 4rpx;
		height: 16rpx;
		background-color: #fa3576;
		margin-right: 20rpx;
	}

	.related-title {
		font-size: 28rpx;
		line-height: 48rpx;
		color: #111111;
		font-weight: bolder;
		display: flex;
		align-items: center;
	}

	.subject-content {
		background-color: #F6F6F6;
		display: flex;
		justify-content: space-between;
	}

	.left-product,
	.right-product {
		width: 350rpx;
		display: flex;
		flex-direction: column;
	}

	.product-show {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		background-color: #FFFFFF;
		white-space: normal;
		border-radius: 16rpx;
		margin-top: 20rpx;
		padding-bottom: 20rpx;
	}

	.images image {
		width: 350rpx;
		height: 350rpx;
		border-top-left-radius: 16rpx;
		border-top-right-radius: 16rpx;
	}

	.product-title {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 24rpx;
		padding: 0 20rpx;
	}

	.product-label {
		display: flex;
		color: #FFFFFF;
		font-size: 16rpx;
		padding: 20rpx 20rpx 0;
	}

	.label-name {
		background-color: #999999;
		text-align: center;
		padding: 5rpx 10rpx;
		margin-right: 10rpx;
		border-radius: 4rpx;
	}

	.activity {
		display: flex;
		font-size: 16rpx;
		color: #fa3475;
		padding: 20rpx 20rpx 0;
		flex-wrap: wrap;
	}

	.activityName {
		border: 1rpx solid #fa3475;
		margin-right: 10rpx;
		padding: 5rpx;
	}

	.porduct-price-vip-cart {
		display: flex;
		align-items: center;
		padding-top: 20rpx;
	}

	.porduct-price {
		color: #fa3475;
		font-size: 32rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
	}

	.porduct-price text {
		font-size: 24rpx;
	}

	.vip-cart-price {
		display: flex;
		align-items: center;
	}

	.vip-cart {
		background-image: linear-gradient(0deg, #000000 0%, #2c2c2c 100%), linear-gradient(#282828, #282828);
		font-size: 16rpx;
		padding: 7rpx 10rpx;
		line-height: 20rpx;
		text-align: center;
		color: #fefefe;
		border-top-left-radius: 8rpx;
		border-bottom-left-radius: 8rpx;
	}

	.vip-price {
		font-size: 20rpx;
		color: #282828;
		padding: 4rpx 8rpx;
		line-height: 20rpx;
		text-align: center;
		border: 1rpx solid #282828;
		border-top-right-radius: 10rpx;
		border-bottom-right-radius: 10rpx;
	}

	.subscribeAndGoodReputation {
		font-size: 24rpx;
		padding: 20rpx 20rpx 0;
	}

	.subscribe-goodReputation {
		display: flex;
		justify-content: space-between;
		text-align: center;
		border-top: 1rpx solid #EEEEEE;
		padding: 20rpx 0 0;
	}

	.subscribe {
		color: #CCCCCC;
	}

	.goodReputation {
		color: #fa3475;
	}
</style>
