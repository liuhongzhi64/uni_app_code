<template>
	<view class="cart">
		<view class="top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px'}]"
		 v-if="cartNumber==0">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back" @tap='goBack'>
					<image src="../../static/images/return.png" mode=""></image>
				</view>
				<view class="title" :style="[{'margin-left':-80+'rpx'}]">
					<view class="title-name"> 购物车 </view>
				</view>
			</view>
		</view>

		<view class="top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px'}]"
		 v-if="cartNumber!=0">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back" @tap='goBack'>
					<image src="../../static/images/return.png" mode=""></image>
				</view>
				<view class="title-compile" :style="[{'padding-right':menuPaddingRight+'px'}]">
					<view class="title" :style="[{'padding-left':menuWidth+5+'px'}]">购物车</view>
					<view class="compile" :style="[{'padding-right':menuWidth+5+'px'}]"> 编辑 </view>
				</view>

			</view>
		</view>

		<view class="cart-content" :style="[{'padding-top':menuBottom+10+'px'}]">
			<!-- 购物车为空 -->
			<view class="empty-cart" v-if="cartNumber==0">
				<view class="empty-cart-image">
					<image src="../../static/images/cartBg.png" mode=""></image>
				</view>
				<view class="empty-cart-text"> 购物车还是空的哟~ </view>
				<view class="go-stroll"> 去逛逛 </view>
			</view>
			<!-- 购物车不为空 -->
			<view class="cart-have-product" v-if="cartNumber!=0">
				<view class="product-to-nav">
					<view class="product-name" v-for="(i,k) in productNameList" :key='k' :class="{checkedPorduct :btnnum == k}"  @tap="changePorduct(k)">
						{{ i.name }} <text>({{i.number}})</text>
					</view>
				</view>
				
				<view class="end-cont" :class="{dis:btnnum == index}" v-for="(item,index) in contentList" :key="index">
					<text >{{item.name}}</text>
					<view class="shoping-cart" v-for="(i,k) in item.productList">
						<view class="product--all-radio"><label><checkbox value="" @click='checkboxChange'/></label> </view>
					</view>
				</view>
			</view>

			<view class="special-performance" v-if="cartNumber==0">
				<view class="specialList">
					<view class="scrollText">
						<view class="special-name"> 化妆品 </view>
						<view class="special-content"> 全场商品满2000减200sadas阿萨大师 </view>
						<view class="special-go"> GO! </view>
					</view>
					<view class="special-image"> <img src="../../static/images/18.png"></img> </view>
				</view>
				<view class="specialList two">
					<view class="scrollText">
						<view class="special-name"> 化妆品 </view>
						<view class="special-content"> 全场商品满2000减200sadas阿萨大师 </view>
						<view class="special-go"> GO! </view>
					</view>
					<view class="special-image"> <img src="../../static/images/18.png"></img> </view>
				</view>
				<view class="specialList three">
					<view class="scrollText">
						<view class="special-name"> 化妆品 </view>
						<view class="special-content"> 全场商品满2000减200sadas阿萨大师 </view>
						<view class="special-go"> GO! </view>
					</view>
					<view class="special-image"> <img src="../../static/images/18.png"></img> </view>
				</view>
			</view>

			<view class="recommend-to-you">
				<view class="related-title">
					<view class="line"></view>
					<view>为你推荐</view>
				</view>

				<scroll-view scroll-y class="recommend-to-you-list">
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
		props: {
			cartNumber: {
				type: Number,
				default: 1
			},
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				menuPaddingRight: 0,
				specialList: [{
						id: 1,
						name: '化妆品',
						content: '全场商品满2000减200sadas阿萨大师',
						url: '../../static/images/18.png'
					},
					{
						id: 3,
						name: '化妆品',
						content: '全场商品满2000减200',
						url: '../../static/images/18.png'
					},
					{
						id: 4,
						name: '化妆品',
						content: '全场商品满2000减200',
						url: '../../static/images/18.png'
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
				],
				productNameList:[
					{
						name:'全部',
						number:25,
					},
					{
						name:'降价',
						number:3,
					},
					{
						name:'医美',
						number:10,
					},
					{
						name:'护肤品',
						number:12,
					},
				],
				btnnum:0,
				contentList:[
					{
						name:'全部'
					},
					{
						name:'降价'
					},
					{
						name:'医美'
					},
					{
						name:'护肤品'
					},
				],
				productList:[]
			}
		},
		onReady() {
			let that = this;
			console.log("传过来的购物车数量", that._props.cartNumber)
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					let menu = uni.getMenuButtonBoundingClientRect();
					that.menuWidth = menu.width
					that.menuTop = menu.top
					that.menuHeight = menu.height
					that.menuLeft = menu.left
					that.menuBottom = menu.bottom
					that.menuPaddingRight = res.windowWidth - menu.right
				}
			})
			that.changePorduct()
		},
		methods: {
			goBack: function() {
				console.log('back')
				uni.navigateBack({
					delta: 1
				});
			},
			onReachBottom: function() {
				console.log("到底了")
			},
			changePorduct:function(e=0){
				this.btnnum = e
				
				if(e==0){			
					for(let i in this.contentList){
						this.contentList[e].productList = [
							{
								title:'这是标题，只显示两行就显示为省略号...'
							}
						]
						this.contentList[i].productList = []
					}
				}
				else if(e==1){
					for(let i in this.contentList){
						this.contentList[e].productList = [
							{
								title:'这是标题，只显示两行就显示为省略号...'
							}
						]
						this.contentList[i].productList = []
					}
				}
				
				
				console.log(this.contentList)
			},
			
			checkboxChange:function(e){
				console.log(e)
			}
		}
	}
</script>

<style scoped>
	.top-bar {
		color: #FFFFFF;
		background-image: linear-gradient(-49deg, #000000 0%, #111111 100%);
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

	.title-compile {
		display: flex;
		flex: 1;
		align-items: center;
		font-size: 38rpx;
	}


	.title-compile .compile {
		font-size: 24rpx;
	}

	.title {
		flex: 1;
	}

	.cart-content {
		background-color: #F6F6F6;
	}

	/* 购物车为空的时候 */
	.empty-cart {
		text-align: center;
		color: #111111;
		font-size: 32rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.empty-cart-image {
		padding: 68rpx 177rpx 40rpx 174rpx;
	}

	.empty-cart-image image {
		width: 400rpx;
		height: 254rpx;
	}

	.go-stroll {
		width: 220rpx;
		height: 80rpx;
		line-height: 87rpx;
		font-size: 28rpx;
		background-image: linear-gradient(90deg, #ff6699 0%, #fa3475 100%);
		border-radius: 40rpx;
		margin-top: 40rpx;
		margin-bottom: 40rpx;
		color: #FFFFFF;
	}

	.special-performance {
		padding: 40rpx 20rpx;
		display: flex;
	}

	.specialList {
		width: 230rpx;
		height: 160rpx;
		background-image: linear-gradient(0deg, #f6a000 0%, #ffb935 100%);
		border-radius: 16px;
		font-size: 28rpx;
		color: #FFFFFF;
		position: relative;
		margin-right: 10rpx;
	}

	.two {
		background-image: linear-gradient(0deg, #fe53d5 0%, #fd6fdb 100%);
	}

	.three {
		background-image: linear-gradient(140deg, #ff6851 0%, #fe492e 100%);
		margin-right: 0;
	}

	.scrollText {
		position: absolute;
		padding: 16rpx 20rpx;
		top: 0;
		left: 0;
	}

	.special-name {
		font-weight: bolder;
	}

	.special-content {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-height: 22rpx;
		width: 120rpx;
		font-size: 18rpx;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}

	.special-go {
		width: 60rpx;
		height: 26rpx;
		line-height: 26rpx;
		padding: 0 10rpx;
		text-align: center;
		background-color: #e87a07;
		box-shadow: 0rpx 1rpx 2rpx 0rpx rgba(145, 94, 0, 0.35);
		border-radius: 13rpx;
		font-size: 22rpx;
		font-weight: normal;
		font-stretch: normal;
		font-style: italic;
	}

	.specialList .special-image {
		position: absolute;
		top: -50rpx;
		left: 42rpx;
	}

	.specialList .special-image image {
		width: 200rpx;
		height: 210rpx;

	}

	.recommend-to-you {
		padding: 0 20rpx;
	}

	.line {
		width: 6rpx;
		height: 24rpx;
		background-color: #fa3576;
		margin-right: 20rpx;
		margin-top: 4rpx;
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

	.recommend-to-you-list {
		padding-bottom: 20rpx;
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
	
	.product-to-nav{
		display: flex;
		justify-content: space-around;
		font-size: 24rpx;
		background-color: #FFFFFF;
		line-height: 30rpx;
		text-align: center;
	}
	
	.product-name{
		width: 25%;
		padding: 30rpx 0;
	}
	
	.checkedPorduct{
		font-size: 28rpx;
		color: #fa3475;
	}
	
	.end-cont {
		display: none;
	}

	.dis {
		display: block;
	}
	
	
</style>
