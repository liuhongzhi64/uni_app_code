<template>
	<view class="goods_content">
		<!-- 左右布局商品展示 -->
		<view class="left-right-layout" v-if="porductList">
			<view class="left-content">
				<view class="goods_item-content" :style="[{'width':width+'rpx','border-radius':borderRadius+'rpx'}]" v-for="(item,index) in porductList"
				 :key='index' v-if="index%2==0" @tap="changeGoods(item.sku_id,item.encrypted_id)">
					<image class="goods_image" :src="requestUrl+item.head_img" mode="widthFix" :style="[{'width':width+'rpx','border-top-left-radius':borderRadius+'rpx','border-top-right-radius':borderRadius+'rpx'}]"></image>
					<view class="bottom-content">
						<view class="goods_name"> {{item.goods_name}} </view>
						<view class="goods-label" v-if="item.label.type==0">
							<view class="label-name" v-for="(i,k) in item.label.list" :key='k'> {{i}} </view>
						</view>
						<view class="goods-label" v-else>
							<view class="activity-name" v-for="(i,k) in item.label.list" :key='k'> {{i}} </view>
						</view>
						<view class="price-vip">
							<view class="price">
								<text>￥</text>{{item.sale_price}}
							</view>
							<view class="vip-price" v-if="item.member.member_title">
								<text class="cart">{{item.member.member_title}}</text>
								<text class="price">￥{{item.member.price}}</text>
							</view>
						</view>
						<view class="rate-sales">
							<view class="sales"> {{item.sales}}预约 </view>
							<view class="rate"> {{item.rate}}%好评 </view>
						</view>
					</view>
				</view>
			</view>
			<view class="right-content">
				<view class="goods_item-content" :style="[{'width':width+'rpx','border-radius':borderRadius+'rpx'}]" v-for="(item,index) in porductList"
				 :key='index' v-if="index%2==1" @tap="changeGoods(item.sku_id,item.encrypted_id)">
					<image class="goods_image" :src="requestUrl+item.head_img" mode="widthFix" :style="[{'width':width+'rpx','border-top-left-radius':borderRadius+'rpx','border-top-right-radius':borderRadius+'rpx'}]"></image>
					<view class="bottom-content">
						<view class="goods_name"> {{item.goods_name}} </view>
						<view class="goods-label" v-if="item.label.type==0">
							<view class="label-name" v-for="(i,k) in item.label.list" :key='k'> {{i}} </view>
						</view>
						<view class="goods-label" v-else>
							<view class="activity-name" v-for="(i,k) in item.label.list" :key='k'> {{i}} </view>
						</view>
						<view class="price-vip">
							<view class="price">
								<text>￥</text>{{item.sale_price}}
							</view>
							<view class="vip-price" v-if="item.member.member_title">
								<text class="cart">{{item.member.member_title}}</text>
								<text class="price">￥{{item.member.price}}</text>
							</view>
						</view>
						<view class="rate-sales">
							<view class="sales"> {{item.sales}}预约 </view>
							<view class="rate"> {{item.rate}}%好评 </view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 横向商品展示 -->
		<view class="crosswise-porduct" v-if="crosswiseGoods">
			<scroll-view class="product-items" scroll-x="true">
				<view class="product-item-content">
					<view class="productImgs" v-for="(item,k) in crosswiseGoods" :key='k' @tap="changeGoods(item.sku_id,item.encrypted_id)">
						<view :id="'productImg'+k" class="productItems" style="background-color: #FFFFFF;" :style="[{'width':width+'rpx','border-radius':borderRadius+'rpx'}]">
							<view class="Imgs">
								<image :src="requestUrl + item.head_img" mode="widthFix" :style="[{'border-top-left-radius':borderRadius+'rpx','border-top-right-radius':borderRadius+'rpx','width':width+'rpx'}]">
								</image>
							</view>
							<view class="bottom-content">
								<view class="goods_name"> {{item.goods_name}} </view>
								<view class="goods-label" v-if="item.label.type==0">
									<view class="label-name" v-for="(i,k) in item.label.list" :key='k'> {{i}} </view>
								</view>
								<view class="goods-label" v-else>
									<view class="activity-name" v-for="(i,k) in item.label.list" :key='k'> {{i}} </view>
								</view>
								<view class="price-vip">
									<view class="price">
										<text>￥</text>{{item.sale_price}}
									</view>
									<view class="vip-price" v-if="item.member.member_title">
										<text class="cart">{{item.member.member_title}}</text>
										<text class="price">￥{{item.member.price}}</text>
									</view>
								</view>
								<view class="rate-sales">
									<view class="sales"> {{item.sales}}预约 </view>
									<view class="rate"> {{item.rate}}%好评 </view>
								</view>
							</view>
						</view>
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
			crosswiseGoods: Array,
			requestUrl: String,
			width: Number,
			borderRadius: Number
		},
		data() {
			return {

			}
		},
		methods: {
			changeGoods: function(id, pid) {
				// console.log(id,pid)
				uni.navigateTo({
					url: `/pages/goods/goods_detail?sku_id=${id}&&encrypted_id=${pid}`,
				})
			}
		}
	}
</script>

<style scoped>
	.goods_content {
		width: 100%;
	}

	.left-right-layout {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.left-content,
	.right-content {
		display: flex;
		flex-direction: column;
		margin-bottom: 10rpx;
	}

	.goods_item-content {
		padding-bottom: 20rpx;
		background-color: #FFFFFF;
		margin-bottom: 10rpx;
	}


	.bottom-content {
		padding: 10rpx 20rpx;
		background-color: #FFFFFF;
	}

	.goods_name {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 24rpx;
		color: #111111;
		font-weight: lighter;
	}

	.goods-label {
		display: flex;
		flex-wrap: wrap;
		color: #FFFFFF;
		font-size: 16rpx;
		margin-top: 16rpx;
	}

	.product-label {
		display: flex;
		flex-wrap: wrap;
		padding: 0 20rpx;
	}

	.label-name {
		background-color: #999999;
		text-align: center;
		border-radius: 10rpx;
		margin: 0 10rpx 10rpx 0;
		padding: 0 10rpx;
		line-height: 36rpx;

	}

	.activity-name {
		border: 1rpx solid #fa3475;
		padding: 5rpx;
		color: #fa3475;
		margin: 0 10rpx 10rpx 0;
	}

	.price-vip {
		display: flex;
		padding-bottom: 35rpx;
		border-bottom: 1rpx solid #F0F0F0;
	}

	.price-vip .price {
		font-size: 32rpx;
		padding-right: 20rpx;
		color: #fa3475;
	}

	.price-vip .price text {
		font-size: 24rpx;
	}

	.vip-price {
		display: flex;
		align-items: center;
	}

	.vip-price .cart {
		background-image: linear-gradient(0deg, #000000 0%, #2c2c2c 100%), linear-gradient(#282828, #282828);
		font-size: 16rpx;
		padding: 7rpx 10rpx;
		line-height: 20rpx;
		text-align: center;
		color: #fefefe;
		border-radius: 8rpx 0 0 8rpx;
	}

	.vip-price .price {
		font-size: 20rpx;
		color: #282828;
		padding: 4rpx 8rpx;
		line-height: 20rpx;
		text-align: center;
		border: 1rpx solid #282828;
		border-radius: 0 8rpx 8rpx 0;
	}

	.rate-sales {
		display: flex;
		justify-content: space-between;
		font-size: 20rpx;
		padding-top: 20rpx;
	}

	.sales {
		color: #CCCCCC;
	}

	.rate {
		color: #fa3475;
	}

	/* 横向商品 */
	.crosswise-porduct {
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

	.productImgs:last-child {
		padding-right: 30rpx;
	}

	.productItems {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		white-space: normal;
	}

	.Imgs image {
		width: 100%;
		height: 100%;
	}

	.product-item-content {
		display: flex;
		width: 100%;
		height: 100%;
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
		text-align: left;
	}

	.productItems image {
		width: 100%;
		height: 100%;
	}

	.prouctPrice {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 10rpx 20rpx;
		text-align: left;
		width: 100%;
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
		padding: 0 20rpx;
	}

	.oldPrice {
		text-decoration: line-through;
		line-height: 30rpx;
		color: #2e2e2e;
		font-weight: lighter;
	}
</style>
