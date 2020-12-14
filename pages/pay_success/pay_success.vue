<template>
	<view class="pay_success"> 
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName' :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		
		<view class="content">
			<scroll-view class="pay-success-content" scroll-y :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
				<template>
					 <view class="all-content">
					 	<view class="top-content">
					 		<view class="top-image">
					 			<image src="../../static/images/cartBg.png" mode=""></image>
					 		</view>
							<view class="payment-success-hint">
								<view class="payment-success-name"> 支付成功 </view>
								<view class="payment-success-price">￥768.00</view>
							</view>
							
							<view class="special-offers">
								<view class="payment-polite">
									<view class="title-content">
										<view class="item-title">支付有礼</view>
										<view class="item-content">恭喜获得<text class="price">10.66元</text>红包</view>
									</view>
									
									<view class="examine">查看详情</view>
								</view>
								
								<view class="member-discounts">
									<view class="discounts-title"> 会员权益 </view>
									<view class="discounts-content">10倍返喵币 订单核销后预计返<text class="currency">768喵币</text></view>
								</view>
								
								<view class="get-complimentary">
									<view class="complimentary-title-content">
										<view class="complimentary-title"> 获取赠品 </view>
										<view class="complimentary-content"> HB面膜（2片装）一盒阿萨德...... </view>
									</view>
									<view class="examine">查看赠品</view>
								</view>
											
							</view>
							<view class="see-indents">
								<button class="see-indent" type="default" plain="true" @tap='seeIndent'>查看订单</button>
							</view>
					 	</view>
						
						<!-- 抽奖 -->
						<view class="draw-a-lottery-or-raffle">
							<raffle/>
						</view>
						
						<!-- 图片轮播 -->
						<view class="image-swiper">
							<swiper class="swiper" indicator-dots indicator-active-color="#ffffff" autoplay
							 :interval="interval" :duration="duration" circular>
								<swiper-item v-for="(i,index) in swiperList" :key="index" :data-name="i" @tap="gotoGoods">
									<view class="swiper-img">
										<image :src="requestUrl+i" ></image>
									</view>
								</swiper-item>
							</swiper>
						</view>
						
						<!-- 猜你喜欢 -->
						<view class="guess-what-you-like">
							<view class="related-title"> <view class="line"></view> 猜你喜欢</view>
							<view class="recommend-for-you-product">
								<porduct :width=350 :porductList='productLists' ></porduct>
								
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
	import raffle from "../../components/raffle.vue";
	import porduct from "../../components/porduct.vue";
	export default {
		components: {
			topBar,
			raffle,
			porduct
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
				title:'支付成功',
				interval: 3000, //自动切换时间间隔
				duration: 1000, //	滑动动画时长
				swiperList:['upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg','upload/goods/images/202010/15/txz4G5kFQGKgAJ6jGiNuVHCI2ZPsZl1Fw8ZeAAXm_250.jpeg'],
				productLists: [
					{
						url: 'upload/goods/images/202010/15/txz4G5kFQGKgAJ6jGiNuVHCI2ZPsZl1Fw8ZeAAXm_250.jpeg',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: [], //标签
						headPortrait: 'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg', //头像
						price: 19800,
						closed:'闭馆特推',
						activity: [],
						vipPrice: 0,
						subscribeAndGoodReputation: [{
							subscribe: '441',
							goodReputation: '98'
						}],
				
					},
					{
						url: 'upload/goods/images/202010/15/txz4G5kFQGKgAJ6jGiNuVHCI2ZPsZl1Fw8ZeAAXm_250.jpeg',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: [], //标签
						headPortrait: 'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg', //头像
						activity: ['首单必减', '折扣'],
						price: 19800,
						vipPrice: 18800,
						subscribeAndGoodReputation: [{
							subscribe: '441',
							goodReputation: '98'
						}],
					},
					{
						url: 'upload/goods/images/202010/15/txz4G5kFQGKgAJ6jGiNuVHCI2ZPsZl1Fw8ZeAAXm_250.jpeg',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: [], //标签
						headPortrait: 'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg', //头像
						price: 19800,
						closed:'闭馆特推',
						activity: [],
						vipPrice: 0,
						subscribeAndGoodReputation: [{
							subscribe: '441',
							goodReputation: '98'
						}],
					
					},
					{
						url: 'upload/goods/images/202010/15/txz4G5kFQGKgAJ6jGiNuVHCI2ZPsZl1Fw8ZeAAXm_250.jpeg',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: [], //标签
						headPortrait: 'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg', //头像
						activity: ['首单必减', '折扣'],
						price: 19800,
						vipPrice: 18800,
						subscribeAndGoodReputation: [{
							subscribe: '441',
							goodReputation: '98'
						}],
					},
				],
				requestUrl:''
			}
		},
		onLoad(options) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			
		},
		onReachBottom: function() {
			let that = this;
			that.offset += 1;
			that.get_my_comment()
		},
		onReady() {
			let that = this;
			// 判定运行平台
			let platform = ''
			that.height = uni.getSystemInfoSync().screenHeight;
			switch (uni.getSystemInfoSync().platform) {
				case 'android':
					// console.log('运行Android上')
					platform = 'android'
					break;
				case 'ios':
					// console.log('运行iOS上')
					platform = 'ios'
					break;
				default:
					// console.log('运行在开发者工具上')
					platform = 'applet'
					break;
			}
			if (platform == 'applet') {
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
			} else {
				that.menuWidth = 90
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			seeIndent:function(){
				console.log("查看订单")
			}
		}
	}
</script>

<style scoped>
	.pay-success-content{
		background-color: #F6F6F6;
	}
	.top-content{
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 43rpx 40rpx 48rpx;
	}
	.top-image{
		width: 511rpx;
		height: 234rpx;	
	}
	.top-image image{
		width: 100%;
		height: 100%;
	}
	.payment-success-hint{
		margin-top: 43rpx;
		/* line-height: 44rpx; */
		text-align: center;
	}
	.payment-success-name{
		font-size: 32rpx;
		
		color: #111111;
	}
	.payment-success-price{
		font-size: 48rpx;
		color: #fa3475;
		margin-top: 22rpx;
	}
	.special-offers{
		padding: 46rpx 0 0;
	}
	.payment-polite,.get-complimentary{
		display: flex;
		font-size: 24rpx;
		justify-content: space-between;
		align-items: center;
		width: 535rpx;
	}
	.title-content{
		display: flex;
		align-items: center;
	}
	.item-title{
		width: 84rpx;
		height: 26rpx;
		font-size: 18rpx;
		line-height: 26rpx;
		background-color: #882ddc;
		border-radius: 4rpx;
		color: #FFFFFF;
		text-align: center;
	}
	.item-content{
		margin-left: 20rpx;
		line-height: 26rpx;
	}
	.price{
		color: #fa3475;
	}
	
	.examine{
		width: 120rpx;
		height: 42rpx;
		border-radius: 21rpx;
		line-height: 42rpx;
		text-align: center;
		color: #fa3475;
		border: 2rpx solid #ff6699 ;
		font-size: 20rpx;
		border-image-slice: 1;	
	}
	
	.member-discounts{
		margin-top: 32rpx;
		display: flex;
		font-size: 24rpx;
		align-items: center;
		width: 535rpx;
	}
	
	.discounts-title{
		width: 84rpx;
		height: 26rpx;
		line-height: 26rpx;
		background-color: #181818;
		border-radius: 4rpx;
		font-size: 18rpx;
		color: #ffffff;
		text-align: center;
		margin-right: 16rpx;
	}
	.discounts-content{
		font-size: 24rpx;
	}
	.currency{
		color: #fa3475;
	}
	.get-complimentary{
		margin-top: 23rpx;
		margin-bottom: 40rpx;
	}
	.complimentary-title-content{
		display: flex;
	}
	.complimentary-title{
		width: 84rpx;
		height: 26rpx;
		line-height: 26rpx;
		background-color: #fa3475;
		border-radius: 4rpx;	
		color: #FFFFFF;
		font-size: 18rpx;
	}
	.complimentary-content{
		width: 272rpx;
		margin-left: 16rpx;
		line-height: 26rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}	
	
	.see-indents{
		width: 100%;
	}
	
	.see-indent{
		width: 100%;
		height: 88rpx;
		border-radius: 44rpx;
		line-height: 88rpx;
		text-align: center;
		color: #FFFFFF;
		font-size: 32rpx;
		background-image: linear-gradient(-90deg,  #fa3475 0%,  #ff6699 100%);
		border: 0;
	}
	
	.draw-a-lottery-or-raffle{
		margin-top: 40rpx;
		padding: 0 25rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 40rpx;
	}
	
	.image-swiper{
		width: 100%;
		height: 220rpx;
	}
	.swiper{
		width: 100%;
		height: 100%;
	}
	.swiper-img image{
		width: 100%;
		height: 220rpx;
	}
	
	.guess-what-you-like{
		padding: 30rpx 20rpx;
	}
	.line{
		width: 4rpx;
		height: 16rpx;
		background-color: #fa3576;
		margin-right: 20rpx;
	}
	.related-title{
		font-size: 28rpx;
		line-height: 48rpx;
		color: #111111;
		font-weight: bolder;
		display: flex;
		align-items: center;
	}
	
	.recommend-for-you-product{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	
</style>