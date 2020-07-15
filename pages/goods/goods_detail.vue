<template>
	<view class="goods_detail">
		<topBar class="topBar" :barName='barName' :barTopH='barTopH' :rightDistance='rightDistance' :lineHeight='lineHeight'></topBar>

		<!-- 主体内容 -->
		<view class="content">
			<scroll-view scroll-y :style="'height:'+height +'rpx'">
			<!-- 设置的初始跳转过来的值，后期删除 -->
			<view class="default"> {{goodsName}} </view>
			<!-- 头部轮播 -->
			<view class="topSwiper">
				<view id="topSwiper" v-if="swiperList">
					<swiper class="top-swiper" indicator-dots indicator-active-color="#ffffff" autoplay :interval='intervalTime'
					 :duration="durationTime" circular>
						<swiper-item v-for="(i,index) in swiperList" :key="index">
							<view class="top-swiper-item">
								<image :src="i.url" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>

			<!-- 活动节日 -->
			<view class="activity">
				<image src="../../static/images/0.png" mode=""></image>
			</view>

			<!-- 价格、优惠卷、提醒、介绍、领取的卷介绍 -->
			<view class="products-introduction">
				<!-- 现在价格、会员价、降价通知、收藏 -->
				<view class="price-depreciate-collect">
					<!-- 现在价格、会员价 -->
					<view class="price">
						<view class="new-price">
							<text>￥</text> 78000
						</view>
						<view class="VIP-price">
							<view class="VIP-name">
								钻卡
							</view>
							<text>￥38800</text>
						</view>
					</view>
					<!-- 降价通知、收藏 -->
					<view class="depreciate-collect">
						<view class="depreciate">
							<view class="remind-images">
								<image src="../../static/images/remind.png" mode=""></image>
							</view>
							<view class="remind-text"> 降价通知 </view>
						</view>
						<view class="collect">
							<view class="collect-images">
								<image src="../../static/images/collect.png" mode=""></image>
							</view>
							<view class="collect-text"> 收藏 </view>
						</view>
					</view>
				</view>
				<!-- 以前的价格 -->
				<view class="market-price"> 市场价 <text>￥97300</text> </view>
				<!-- 各种卷 -->
				<view class="coupons">
					<view class="couponsItem" v-for="(i,k) in couponsList" :key="k"> {{i}} </view>
				</view>
				<!-- 热卖提醒 -->
				<view class="hot-sale-remind">
					<view class="hot-sale-content">
						<view class="hot-sale"> 预热中 </view>
						<view class="hot-sale-recommend"> 该商品6月18日 9:00:00开始售卖哦~ </view>
					</view>
					<view class="remind-me"> 提醒我 </view>
				</view>
				<!-- 商品名称 -->
				<view class="prouct-name">
					<text class="label-name"> 618特惠 </text>
						我是商品名,我是商品名,我是商品名,我是商品名,我是商品名,我是商品名,我是商品名,我是商品名,我是商品名,
				</view>
				<view class="get-coupon">
					【领取】新客领券减30元！【满12800元送】价值239元HB（2片装）面膜一盒！满36800元送】价值980元华桑保利（5片装）面膜一盒；【满12800元送】价
					  值239元HB（2片装）面膜一盒！<text>查看》</text>
				</view>
			</view>

			<!-- 优惠 -->
			<view class="discounts">
				<view class="discounts-title">
					<view class="discounts-more"> 优惠 </view>
					<view class="more"> 更多》 </view>
				</view>
				<!-- 优惠政策 -->
				<view class="discounts-policy" v-for="(i,k) in discountsList" :key="k">
					<view class="policy-name"> {{i.name}} </view>
					<view class="policy-content"> {{i.content}} </view>
				</view>
			</view>

			<!-- 相关证书 -->
			<view class="certificate">
				<view class="certificate-details" v-for="(i,k) in certificateList" :key="k">
					<view class="certificate-image">
						<image :src="i.url" mode=""></image>
					</view>
					<view class="certificate-name"> {{i.name}} </view>
				</view>
			</view>

			<!-- 相关商品 -->
			<view class="related-products">
				<view class="related-products-title">
					<view class="line"></view> 相关商品
				</view>
				<view class="related-products-item">
					<scroll-view class="related-products-items" scroll-x="true">
						<view id="product-item" class="product-item" v-for="(i,k) in productList" :key='k' :data-name="i.content" @tap="gotoGoods">
							<!-- 图片 -->
							<view class="recommenImg" v-if="i.url">
								<image :src="i.url" mode=""></image>
							</view>
							<!-- 商品名称 -->
							<view class="productName" v-if="i.content">
								<text class="closed" v-if="i.closed">618特惠</text> {{i.content}}
							</view>
							<!-- 标签 -->
							<view class="label" v-if="i.labelList.length > 0">
								<view class="labelListItem" v-for="(i,k) in i.labelList" :key="k">
									{{i}}
								</view>
							</view>
							<!-- 商品价格 -->
							<view class="productPrice" v-if="i.productPrice">
								￥{{i.productPrice}}
							</view>
							<!-- 预约和好评 -->
							<view class="subscribeAndGoodReputation" v-if="i.subscribe&&i.goodReputation">
								<!-- 预约 -->
								<view class="subscribe">
									{{i.subscribe}}预约
								</view>
								<!-- 好评 -->
								<view class="goodReputation">
									{{i.goodReputation}}%好评
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>

			<!-- 相关医生 -->
			<view class="related-doctor">
				相关医生
			</view>

			<!-- 相关日记 -->
			<view class="related-diary">
				相关日记
			</view>

			<!-- 问答 -->
			<view class="questions-answers">
				问答
			</view>

			<!-- 评价 -->
			<view class="evaluate">
				评价
			</view>

			<!-- 项目价格表 -->
			<view class="item-price">
				项目价格表
			</view>

			<!-- 额外费用 -->
			<view class="extra-expense">
				额外费用
			</view>

			<!-- 服务流程 -->
			<view class="service-process">
				服务流程
			</view>

			<!-- 购买需知 -->
			<view class="need-to-know">
				购买需知
			</view>

			<!-- 详情 -->
			<view class="particulars">
				详情
			</view>

			<!-- 为你推荐 -->
			<view class="recommend ">
				为你推荐
			</view>
			</scroll-view>
		</view>
		<!-- 底部定位 -->
		<view class="consult-share-cart-addCart-shopNow">
			<!-- 咨询 -->
			<view class="consult">
				<view class="consult-image">
					<image src="../../static/images/wechat.png" mode=""></image>
				</view>
				<view class="consult-text">
					咨询
				</view>
			</view>

			<!-- 分享 -->
			<view class="share">
				<view class="share-image">
					<image src="../../static/images/wechat.png" mode=""></image>
				</view>
				<view class="share-text">
					分享
				</view>
			</view>

			<!-- 购物车 -->
			<view class="cart">
				<view class="cart-number">
					<view class="cartImg">
						<image src="../../static/images/cart.png" mode=""></image>
					</view>
					<view class="cartNumber">
						{{carts}}
					</view>
				</view>
				<view class="cart-text">
					购物车
				</view>
			</view>

			<!-- 加入购物车 -->
			<view class="add-cart">
				加入购物车
			</view>

			<!-- 立即购买 -->
			<view class="shop-now">
				立即购买
			</view>
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
				goodsName: '', //商品名
				barTopH: 0,
				rightDistance: 0,
				lineHeight: 0,
				barName: 'particularsPage', //导航条名称
				height: 0, //
				swiperList: [{
						id: 0,
						url: '../../static/images/test.jpg',
					},
					{
						id: 1,
						url: '../../static/images/test.jpg',
					},
				],
				intervalTime: 3000, //自动切换时间间隔
				durationTime: 1000, //	滑动动画时长
				carts: 3, //购物车
				couponsList: ['首单必减', '满20000减2000', '支付有礼'], //优惠卷
				discountsList:[
					{name:'限购',content:'该商品购买1件时享受单件￥19800，超出数量不再有效'},
					{name:'积分',content:'购买返积分'},
					{name:'喵豆',content:'购买返喵豆'},
					{name:'会员权益',content:'会员95折，并可与满减、券等优惠叠加使价格更加美丽'},
					{name:'优惠套装',content:'该商品共有1个优惠套装'},
					{name:'收单立减',content:'新人首单立减50元'},
				],//优惠政策
				certificateList:[
					{name:'中国5A级医美机构',url:'../../static/images/19.png'},
					{name:'德国莱茵TUV-SQS国际认证',url:'../../static/images/19.png'},
					{name:'四级整形资质医院',url:'../../static/images/19.png'},
					{name:'中国十大行业名牌',url:'../../static/images/19.png'},
				],//相关证书
				productList:[
					{
						url: '../../static/images/19.png',
						content: '商品名称商品名称商品名称商品名称,超过两黄金自动省略号', //名称
						productPrice: '19800', //价格
						subscribe: 477, //预约
						goodReputation: '98', //好评
						closed: false,
						labelList: ['眼部美容', '眼部'] //标签
					},
					{
						url: '../../static/images/20.png',
						content: '商品名称商品名称商品名称商品名称,超过两黄金自动省略号', //名称
						productPrice: '19800', //价格
						subscribe: 477, //预约
						goodReputation: '98', //好评
						closed: false,
						labelList: ['眼部美容', '眼部'] //标签
					},
					{
						url: '../../static/images/21.png',
						content: '商品名称商品名称商品名称商品名称,超过两黄金自动省略号', //名称
						productPrice: '19800', //价格
						subscribe: 477, //预约
						goodReputation: '98', //好评
						closed: true,
						labelList: ['眼部美容', '眼部'] //标签
					},
				],//相关商品
			}
		},
		onLoad: function(option) {
			let that = this
			that.goodsName = option.goods
			that.height = uni.getSystemInfoSync().screenHeight*1.6 ;
			console.log(that.height)
			console.log(option)
		},
		onReady: function() {
			let that = this;
			let pageHeight = 0
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					pageHeight = res.windowHeight
					console.log('pageHeight', pageHeight)
					let menu = uni.getMenuButtonBoundingClientRect();
					that.rightDistance = menu.width
					that.barTopH = menu.top
					that.lineHeight = menu.height
				}
			})
		},
		methods: {

		}
	}
</script>

<style scoped>
	.content {
		padding-top: 160rpx;
		
		background-color: #F6F6F6;
		height: 100%;
	}
	.recommend{
		/* padding-bottom: 105rpx; */
	}

	.top-swiper {
		height: 750rpx;
	}

	.top-swiper-item image {
		height: 750rpx;
		width: 100%;
	}

	.activity image {
		height: 100rpx;
		width: 100%;
	}

	/* 介绍 */
	.products-introduction {
		border-radius: 0 0 24rpx 24rpx;
		background-color: #FFFFFF;
		padding-bottom: 40rpx;
		white-space: normal;
	}

	/* 价格、收藏 */
	.price-depreciate-collect {
		display: flex;
		justify-content: space-between;
		padding: 10rpx 30rpx 0;
		line-height: 80rpx;
	}

	.price {
		align-items: center;
	}

	.price,
	.depreciate-collect,
	.VIP-price {
		display: flex;
	}

	.new-price {
		color: #fa3475;
		font-size: 64rpx;
		margin-right: 10rpx;
	}

	.new-price text {
		font-size: 32rpx;
	}

	.VIP-price {
		height: 28rpx;
		border: 1rpx solid #333333;
		border-radius: 5rpx;
		line-height: 28rpx;
		font-size: 16rpx;
		margin-top: -10rpx;
	}

	.VIP-price text {
		padding: 0 5rpx;
	}

	.VIP-name {
		background-color: #2E2E2E;
		color: #FFFFFF;
		padding: 0 10rpx;
	}

	.market-price {
		padding: 0 30rpx;
		font-size: 24rpx;
		color: #9e9e9e;
		margin-top: -20rpx;
	}

	.market-price text {
		text-decoration: line-through;
		margin-left: 10rpx;
	}

	.depreciate,
	.collect {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.depreciate {
		margin-right: 20rpx;
	}

	.remind-images,
	.remind-images image,
	.collect-images,
	.collect-images image {
		width: 30rpx;
		height: 28rpx;
	}

	.remind-text,
	.collect-text {
		font-size: 20rpx;
		color: #111111;
	}

	/* 优惠卷 */
	.coupons {
		display: flex;
		padding:20rpx 30rpx;
		flex-wrap: wrap;
	}

	.couponsItem {
		border: 1rpx solid #fa3475;
		font-size: 20rpx;
		text-align: center;
		padding: 5rpx 10rpx;
		margin-right: 20rpx;
		color: #fa3475;
	}

	.hot-sale-remind {
		padding:0 30rpx;
		font-size: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.hot-sale-content {
		display: flex;
	}

	.hot-sale {
		background-image: linear-gradient(0deg,
			#000000 0%,
			#333333 100%);
		border-radius: 4rpx;
		font-size: 18rpx;
		margin-right: 20rpx;
		padding: 0 10rpx;
		color: #FFFFFF;
	}
	
	.hot-sale-recommend{
		color: #999999;
	}
	
	.remind-me{
		background-image: linear-gradient(-45deg, 
			#fa3475 0%, 
			#ff6699 100%);
		border-radius: 15rpx;
		padding: 8rpx 20rpx;
		color: #FFFFFF;
	}
	
	/* 商品名 */
	.prouct-name{
		padding: 20rpx 30rpx;
		height: 80rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-size: 32rpx;
		line-height: 48rpx;
		color: #111111;
	}
	.label-name{
		font-size: 18rpx;
		width: 85rpx;
		height: 26rpx;
		color: #ffffff;
		background-color: #882ddc;
		border-radius: 4rpx;
		margin-right: 20rpx;
		padding: 10rpx 10rpx 5rpx;
	}
	
	/* 领取卷的介绍 */
	.get-coupon{
		padding: 20rpx 30rpx;
		height: 80rpx;
		font-size: 20rpx;
		color: #999999;
		line-height: 30rpx;
	}
	
	.get-coupon text{
		color: #fa3475;
	}
	
	/* 优惠 */
	.discounts {
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		padding: 30rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
	}
	
	.discounts-title{
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		line-height: 48rpx;
		margin-bottom: 30rpx;
	}
	.discounts-more{
		font-weight: bolder;
		font-size: 28rpx;
		color: #111111;
	}
	.more{
		color:  #fa3475;
	}
	
	/* 优惠政策 */
	.discounts-policy{
		display: flex;
		font-size: 24rpx;
		margin-bottom: 30rpx;
	}
	.policy-name{
		color:  #fa3475;
		height: 30rpx;
		line-height: 30rpx;
		text-align: center;
		background-color: #ffe8f0;
		border-radius: 15rpx;
		padding: 0 20rpx;
		margin-right: 30rpx;
	}
	.policy-content{
		width: 510rpx;
		line-height: 30rpx;
		color: #000000;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	
	/* 相关证书 */
	.certificate{
		padding: 30rpx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		border-radius: 24rpx;
	}
	.certificate-details{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.certificate-details image{
		width: 80rpx;
		height: 80rpx;
	}
	
	.certificate-name{
		margin-top: 20rpx;
		font-size: 18rpx;
		color: #111111;
		/* width: 160rpx; */
		text-align: center;
		line-height: 24rpx;
	}
	
	/* 相关商品 */
	.related-products{
		padding: 30rpx 0 0 30rpx;
	}
	
	.line{
		width: 4rpx;
		height: 16rpx;
		background-color: #fa3576;
		margin-right: 20rpx;
	}
	.related-products-title{
		font-size: 28rpx;
		line-height: 48rpx;
		color: #111111;
		font-weight: bolder;
		display: flex;
		align-items: center;
	}
	
	.related-products-item{
		white-space: nowrap;
	}
	.related-products-items{
		width: 100%;
		height: 490rpx;
	}
	
	.product-item{
		display: inline-block;
		margin-right: 20rpx;
		border-radius: 24rpx;
		background-color: #ffffff;
		font-size: 24rpx;
		width: 260rpx;
		height: 490rpx;
		white-space: normal;
	}
	.product-item image {
		width: 260rpx;
		height: 260rpx;
		border-radius: 24rpx;
	}
	.productName {
		font-size: 24rpx;
		padding: 0 20rpx;
		/* height: 60rpx; */
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	
	.closed {
		color: #FFFFFF;
		display: inline-block;
		width: 84rpx;
		height: 26rpx;
		font-size: 18rpx;
		background-color: #b60114;
		border-radius: 4rpx;
		text-align: center;
		padding: 0 5rpx;
	}

	.label {
		display: flex;
		padding: 10rpx 20rpx;
	}

	.labelListItem {
		background-color: #999999;
		height: 26rpx;
		border-radius: 4rpx;
		color: #ffffff;
		font-size: 16rpx;
		margin-right: 10rpx;
		padding: 5rpx 10rpx;
	}

	.productPrice {
		color: #fa3475;
		font-size: 32rpx;
	}

	.subscribeAndGoodReputation {
		display: flex;
		justify-content: space-between;
		text-align: center;
		padding: 20rpx;
	}
	
	.subscribe{
		color: #666666;
	}
	
	.goodReputation{
		color: #fa3475;
	}
	
	/* 底部定位 */
	.consult-share-cart-addCart-shopNow {
		position: fixed;
		bottom: 0;
		left: 0;
		/* height: 105rpx; */
		padding: 12rpx 30rpx;
		width: 100%;
		background-color: #333333;
		color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
	}

	.consult,
	.share {
		margin-top: 10rpx;
	}

	.cart-number {
		display: flex;
		margin-top: 10rpx;
		margin-left: 12rpx;
	}

	.consult-text,
	.share-text,
	.cart-text {
		font-size: 20rpx;
		color: #afafaf;
		line-height: 22rpx;
	}

	.consult-image,
	.share-image {
		margin-left: 5rpx;
	}

	.consult-image image,
	.share-image image,
	.cartImg image {
		width: 38rpx;
		height: 38rpx;
	}

	.cartNumber {
		width: 24rpx;
		height: 24rpx;
		border-radius: 12rpx;
		color: #FFFFFF;
		background-color: #F12F6F;
		font-size: 16rpx;
		line-height: 24rpx;
		text-align: center;
		margin-left: -10rpx;
		margin-top: -10rpx;
	}

	.add-cart {
		height: 80rpx;
		width: 220rpx;
		border-radius: 40rpx;
		text-align: center;
		line-height: 80rpx;
		background-image: linear-gradient(-45deg,
			#8834fa 0%,
			#bc66ff 100%);
	}

	.shop-now {
		height: 80rpx;
		width: 220rpx;
		border-radius: 40rpx;
		text-align: center;
		line-height: 80rpx;
		margin-right: 60rpx;
		background-image: linear-gradient(-45deg,
			#fa3475 0%,
			#ff6699 100%);
	}
</style>
