<template>
	<view class="product">

		<view class="product-show" :style="[{'width':width+'rpx'}]"
			v-for="(i,k) in porductList" :class="(k%2==0)?'product-item-fl':'product-item-fr'" :key='k'
			:data-name="i.title" @tap="gotoGoods">
			<view class="images">
				<image :src="i.url" mode="" :style="[{'width':width+'rpx','height':width+'rpx'}]"></image>
			</view>
			<view class="product-title"> <text class="closed" v-if="i.closed">{{i.closed}}</text> {{i.title}} </view>
			<view class="product-label" v-if="i.label.length>1">
				<view class="label-name" v-for="(i,k) in i.label" :key='k'> {{i}} </view>
			</view>
			<view class="activity" v-if="i.activity.length>1">
				<view class="activityName" v-for="(i,k) in i.activity" :key='k'> {{i}} </view>
			</view>
			<view class="porduct-price-vip-cart" v-if="i.price">
				<view class="porduct-price">
					<text>￥</text>{{i.price}}
				</view>
				<view class="vip-cart-price" v-if="i.vipPrice>0">
					<text class="vip-cart">钻卡</text>
					<text class="vip-price">￥{{i.vipPrice}}</text>
				</view>
			</view>
			<!-- 预约和好评 -->
			<view class="subscribeAndGoodReputation"  v-for="(i,k) in i.subscribeAndGoodReputation" :key='k'>
				<view class="subscribe-goodReputation">
					<!-- 预约 -->
					<view class="subscribe"> {{i.subscribe}}预约 </view>
					<!-- 好评 -->
					<view class="goodReputation"> {{i.goodReputation}}%好评 </view>
				</view>
			</view>
			<!-- 用户信息 -->
			<view class="user-message" v-if="i.headPortrait&&i.userName&&i.like&&!i.productUrl&&!i.productTitle">
				<view class="headPortrait-userName">
					<image :src="i.headPortrait" mode=""></image>
					<view class="user-name"> {{i.userName}} </view>
				</view>
				<view class="like">
					<image src="../../static/images/like.png" mode=""></image>
					<text>{{i.like}}</text>
				</view>
			</view>
			<!-- 关联商品 -->
			<view class="associated-goods" v-if="i.headPortrait&&i.userName&&i.like&&i.productUrl&&i.productTitle">
				<view class="productUrl">
					<image :src="i.productUrl" mode=""></image>
				</view>
				<view class="product-title-price">
					<view class="productTitle"> {{i.productTitle}} </view>
					<view class="product-price"> <text>￥</text> {{i.prouctPrice}} </view>
				</view>
			</view>
		</view>

		<view class="crosswise-porduct" v-if="crosswisePorduct" >
			<scroll-view class="product-items" scroll-x="true" :style="[{'height':height+'rpx'}]">
				<view class="product-item-content">
					<view class="productImgs" v-for="(i,k) in crosswisePorduct" :key='k' :data-name="i.content" @tap="gotoGoods">
						<view :id="'productImg'+k" class="productItems" style="background-color: #FFFFFF;" :style="[{'width':width+'rpx'}]">
							<!-- 图片 -->
							<view class="Imgs" :style="[{'height':width+'rpx','width':width+'rpx'}]">
								<image :src="i.url" mode=""></image>
							</view>
							<!-- 内容 -->
							<view class="productContent"> {{i.content}} </view>
							<view class="product-label" v-if="i.label.length>1">
								<view class="label-name" v-for="(i,k) in i.label" :key='k'> {{i}} </view>
							</view>
							<view class="activity" v-if="i.activity.length>1">
								<view class="activityName" v-for="(i,k) in i.activity" :key='k'> {{i}} </view>
							</view>
							<!-- 价格 -->
							<view class="prouctPrice" v-if="i.newPrice">
								<view class="newprice"> <text>￥</text> {{i.newPrice}}</view>
								<view class="oldPrice" v-if="i.oldPrice"> <text>￥</text> {{i.oldPrice}} </view>
							</view>
							<!-- 预约和好评 -->
							<view class="subscribeAndGoodReputation"  v-for="(i,k) in i.subscribeAndGoodReputation" :key='k'>
								<view class="subscribe-goodReputation" style="padding-top: 10rpx;padding-bottom: 17rpx;">
									<!-- 预约 -->
									<view class="subscribe"> {{i.subscribe}}预约 </view>
									<!-- 好评 -->
									<view class="goodReputation"> {{i.goodReputation}}%好评 </view>
								</view>
							</view>
						</view>
					</view>
					<view class="see-all" > 
					
					<view class="all" style="background-color: #FFFFFF;" :style="[{'height':height+'rpx','width':width+'rpx','line-height':height+'rpx'}]"> 查看更多>  </view>
					</view>
				</view>
			</scroll-view>
		</view>
		
	</view>

</template>

<script>
	export default {
		props: {
			porductList: Array,
			crosswisePorduct:Array,
			width:Number,
			height:Number
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
	.product-item-fl {
		float: left;
	}

	.product-item-fr {
		float: right;
	}

	.product-show {
		width: 100%;
		margin-top: 10rpx;
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
		color: #111111;
		font-weight: lighter;
	}

	.closed {
		color: #FFFFFF;
		display: inline-block;
		width: 84rpx;
		height: 26rpx;
		font-size: 18rpx;
		background-color: #b60114;
		border-radius: 6rpx;
		text-align: center;
		padding: 0 5rpx;
		margin-right: 10rpx;
	}

	.product-label {
		width: 80%;
		display: flex;
		flex-wrap: wrap;
		color: #FFFFFF;
		font-size: 16rpx;
		padding: 20rpx 20rpx 0;
	}
	
	.crosswise-porduct .product-label{
		padding: 10rpx 20rpx 0;
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
	
	.crosswise-porduct .subscribeAndGoodReputation{
		width: 90%;
		/* padding: 0 10rpx; */
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
	
	.user-message{
		display: flex;
		justify-content: space-between;
		padding:20rpx 20rpx 0;
	}
	.headPortrait-userName{
		display: flex;
		font-size: 20rpx;
		align-items: center;
	}
	.headPortrait-userName image{
		width: 48rpx;
		height: 48rpx;
		border-radius: 24rpx;
		margin-right: 5rpx;
	}
	.like{
		display: flex;
		align-items: center;
		color: #b2b2b2;
		font-size: 30rpx;
	}
	.like image{
		width: 40rpx;
		height: 40rpx;
		border-radius: 20rpx;
		margin-right:10rpx ;
		background-color: #d0d0d0;
	}
	
	.associated-goods{
		display: flex;
		justify-content: space-between;
		padding: 20rpx 20rpx 0;
		font-size: 20rpx;
	}
	.associated-goods image{
		width: 96rpx;
		height: 96rpx;
	}
	.productTitle{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		padding: 0 10rpx;
	}
	.product-price{
		padding: 10rpx;
		color: #fa3475;
		font-size: 32rpx;
	}
	.product-price text{
		font-size: 24rpx;
		margin-right: 10rpx;
	}
	
	/* 横向商品 */
	.crosswise-porduct{
		width: 100%;
	}
	.product-items {
		overflow: hidden;
		white-space: nowrap;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}
	
	.productImgs {
		display: inline-block;
		font-size: 20rpx;
		margin-right: 30rpx;
	}
	
	.Imgs image {
		width: 100%;
		height: 100%;
	}
	
	/* 商品 */
	
	.product-item-content {
		display: flex;
		/* align-items: center; */
		width: 100%;
		height: 100%;
	}
	
	.productItems {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		white-space: normal;
	}
	
	.productContent {
		width: 220rpx;
		margin-top: 12rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		color: #2e2e2e;
		font-weight: lighter;
		text-align: center;
	}
	
	
	.productItems image {
		width: 100%;
		height: 100%;
	}
	
	.prouctPrice {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 10rpx 20rpx 0 0;
	}
	
	.residueProduct {
		text-align: center;
	}
	
	.prouctPrice text {
		font-size: 20rpx;
	}
	
	.newprice {
		color: #EF6174;
		font-size: 30rpx;
		margin-right: 13rpx;
	}
	
	.oldPrice {
		text-decoration: line-through;
		line-height: 30rpx;
		color: #2e2e2e;
		font-weight: lighter;
	}
	
	.see-all{
		text-align: center;
	}
	
</style>
