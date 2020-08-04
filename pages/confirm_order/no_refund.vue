<template>
	<view class="no_refund">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName' :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<view class="porduct-content">
			<scroll-view class="porduct-content" scroll-y :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
				<template>
					<view class="porduct-list" v-for="(i,k) in porductList" :key='k'>
						<view class="porduct-items">
						
							<view class="porduct-item-images">
								<image :src="i.url" mode=""></image>
							</view>
						
							<view class="porduct-introduce">
						
								<view class="product-title"> {{i.title}} </view>
						
								<view class="label" v-if="i.label.length>0">
									<view class="label-name" v-for="(i,k) in i.label" :key='k'> {{i}}  </view>
								</view>
						
								<view class="activity" v-if="i.activity.length>0">
									<view class="activity-name" v-for="(i,k) in i.activity" :key='k'> {{i}} </view>
								</view>
						
								<view class="porduct-price">
									<view class="porduct-original-cost"> <text>￥</text>{{i.originalCost}} </view>
									<view class="porduct-vip-price" v-if="i.vipPrice>0">
										<view class="vip">钻卡</view> <view class="vip-price">￥{{i.vipPrice}}</view>
									</view>
								</view>
								
								<view class="subscribe-goodReputation">
									<!-- 预约 -->
									<view class="subscribe"> {{i.subscribe}}预约 </view>
									<!-- 好评 -->
									<view class="goodReputation"> {{i.goodReputation}}%好评 </view>
								</view>
								
								
							</view>
											
						</view>
						
						<view class="prompt-message"> 此商品购买后不支持线上退款 </view>
					</view>

					
				</template>
			</scroll-view >

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
				height:0,
				barName: 'back', //导航条名称
				topBackgroundColor:'#222222',
				color:'#FFFFFF',
				backImage:'../static/images/return.png',
				title:'不可线上退款商品',
				porductList:[
					{
						url:'../../static/images/19.png',
						title:'我是秒杀商品名称名称,我是秒杀商品名称我是秒杀商品,名称我是秒杀商品名称名称我是秒杀商品名称...',
						label:['眼部美容','眼部'],
						activity:[],
						originalCost:68800,
						vipPrice:58800,
						subscribe:477,
						goodReputation:98,
					},
					{
						url:'../../static/images/23.png',
						title:'我是秒杀商品名称名称,我是秒杀商品名称我是秒杀商品,名称我是秒杀商品名称名称我是秒杀商品名称...',
						label:['眼部美容','眼部'],
						activity:[],
						originalCost:18800,
						vipPrice:12800,
						subscribe:422,
						goodReputation:98,
					},
					{
						url:'../../static/images/19.png',
						title:'我是秒杀商品名称名称,我是秒杀商品名称我是秒杀商品,名称我是秒杀商品名称名称我是秒杀商品名称...',
						label:[],
						activity:['首单必减','折扣'],
						originalCost:18800,
						vipPrice:0,
						subscribe:477,
						goodReputation:98,
					},
					{
						url:'../../static/images/23.png',
						title:'我是秒杀商品名称名称,我是秒杀商品名称我是秒杀商品,名称我是秒杀商品名称名称我是秒杀商品名称...',
						label:[],
						activity:['首单必减','折扣'],
						originalCost:18800,
						vipPrice:12800,
						subscribe:422,
						goodReputation:98,
					},
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

		}
	}
</script>

<style scoped>
	
	.porduct-content {
		background-color: #F6F6F6;
	}
	.porduct-list{
		margin-bottom: 20rpx;
	}
	.porduct-items {
		display: flex;
		align-items: center;
		padding: 32rpx 30rpx;
		background-color: #FFFFFF;
	}

	.porduct-item-images {
		width: 240rpx;
		height: 240rpx;
		margin-right: 28rpx;
	}

	.porduct-item-images image {
		width: 100%;
		height: 100%;
	}

	.porduct-introduce {
		flex: 1;
		font-size: 26rpx;
		white-space: normal;
		display: flex;
		flex-direction: column;
	}

	.product-title {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		color: #111111;
		line-height: 36rpx;
	}

	.label {
		display: flex;
		flex-wrap: wrap;
		margin-top: 12rpx;
	}
	
	.label-name {
		background-color: #999999;
		text-align: center;
		font-size: 16rpx;
		padding: 5rpx 8rpx;
		margin-right: 10rpx;
		border-radius: 4rpx;
		color: #FFFFFF;
	}
	
	.activity {
		display: flex;
		font-size: 16rpx;
		color: #fa3475;
		flex-wrap: wrap;
		margin-top: 12rpx;
	}

	.activity-name {
		border: 1rpx solid #fa3475;
		margin-right: 10rpx;
		padding: 5rpx;
		border-radius: 4rpx;
	}
	
	.porduct-price{
		display: flex;
		margin-top: 20rpx;
	}
	.porduct-vip-price{
		display: flex;
		margin-left: 25rpx;
		border: 1rpx solid #282828;
		border-radius:4rpx ;
	}
	
	.vip{
		font-size: 16rpx;
		border-radius: 4rpx;
		width: 48rpx;
		height: 29rpx;
		line-height: 30rpx;
		background-image: linear-gradient(0deg, #000000 0%,  #2c2c2c 100%),  linear-gradient( #282828, #282828);
		color: #FFFFFF;
		text-align: center;
	}
	
	.vip-price{
		height: 28rpx;
		font-size: 16rpx;
		color: #282828;
		border-width: 1rpx;
		border-image-source: linear-gradient(0deg,  #000000 0%,  #2c2c2c 100%);
		border-image-slice: 1;
		padding: 0 9rpx;
	}
	
	.porduct-price{
		line-height: 34rpx;
		display: flex;
		align-items: center;
	}
	
	.porduct-original-cost{
		color: #fa3475;
		font-size: 52rpx;
	}
	.porduct-original-cost text{
		font-size: 36rpx;
	}
	
	.subscribe-goodReputation{
		display: flex;
		font-size: 20rpx;
		margin-top: 36rpx;
		color: #666666;
	}
	
	.goodReputation{
		color: #fa3576;
		margin-left: 30rpx;
	}
	
	.prompt-message{
		height: 48rpx;
		background-color: #dddddd;
		line-height: 48rpx;
		text-align: center;
		color: #111111;
		font-size: 24rpx;
	}
	
	
</style>
