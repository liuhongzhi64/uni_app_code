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
										<scroll-view class="porduct-images-items" scroll-x="true" >
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
							
						</view>
						
						
						
						<!-- 留言 -->
					<view class="leave-a-message">
							留言
						</view>
						
						<!-- ticket券discount折扣  -->
						<view class="ticket-discount">
							卡券，满减，折扣
						</view>
						
						<!-- 积分、喵豆、余额 -->
						<view class="integral-bean-balance">
							积分、喵豆、余额
						</view>
						
						<!-- 商品价格和各种优惠 -->
						<view class="porduct-price">
							商品价格和各种优惠
						</view>
						
						 <view class="mode-of-payment">
						 	支付方式
						 </view>
						 
						 <view class="footer-navigation-bars">
						 	
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
				height:0,
				barName: 'back', //导航条名称
				title: '确认订单',
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/return.png',
				modeList:['邮寄','到院领取'],
				btnnum:0,
				porductImagesList:[
					{ id:1, url:'../../static/images/23.png', },{ id:2, url:'../../static/images/20.png', },{ id:1, url:'../../static/images/23.png', },{ id:1, url:'../../static/images/19.png', },
				],
				complimentaryList:['HB面膜(2片装)一盒','华桑葆骊科玮防晒霜SPF30（2支）','20元无门槛卡券','2000元满减券']
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
			chooseLabel:function(k){
				this.btnnum = k
			}
		}
	}
</script>

<style scoped>
	.porduct-content{
		background-color: #F6F6F6;
	}
	.selector-mode{
		padding: 32rpx 40rpx 58rpx;
		background-color: #FFFFFF;
		font-size: 24rpx;
		display: flex;
		flex-direction: column;
		border-bottom-left-radius: 24rpx;
		border-bottom-right-radius: 24rpx;
	}
	.porduct-label-mode{
		display: flex;
		align-items: center;
	}
	
	.all-mode{
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		font-size: 32rpx;
		color: #111111;
	}
	.mode-label{
		display: flex;
		align-items: center;
	}
	.mode-btn{
		width: 24rpx;
		height: 24rpx;
		background-color: #f8f8f8;
		border: 1rpx solid #dcdcdc;
		border-radius: 12rpx;
		margin-right: 16rpx;
		margin-left: 38rpx;
	}
	.end-cont{
		display: none;
	}
	.dis {
		display: block;
		width: 24rpx;
		height: 24rpx;
		border-radius: 12rpx;
		background-image: linear-gradient(0deg,  #fa3475 0%,  #ff5f93 100%);
	}
	
	.choose-pickup-method{
		font-size: 24rpx;
		color: #fb4983;
		margin-top: 24rpx;
	}
	
	.user-message{
		display: flex;
		align-items: center;
		font-size: 32rpx;
		color: #000000;
		margin-top: 40rpx;
	}
	
	.user-phone{
		margin: 0 50rpx  0 32rpx;
	}
	.defult-site{
		font-size: 20rpx;
		width: 66rpx;
		height: 32rpx;
		background-image: linear-gradient(90deg, #fa3475 0%, #ff6699 100%);
		border-radius: 16rpx;
		margin-right: 20rpx;
		text-align: center;
		color: #FFFFFF;
	}
	.user-home{
		font-size: 20rpx;
		width: 66rpx;
		height: 32rpx;	
		border-radius: 16rpx;
		text-align: center;
		color: #FFFFFF;
		background-image: linear-gradient(90deg, #8834fa 0%,  #bc66ff 100%);
	}
	
	.shipping-address{
		display: flex;
		font-size: 24rpx;
		color: #343434;
		line-height: 40rpx;
		width: 100%;
	}
	.shipping-address-title{
		margin-right: 20rpx;
	}
	.address{
		flex: 1;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.shipping-address image{
		width: 20rpx;
		height: 32rpx;
		transform: rotate(180deg);
		margin-left: 30rpx;
	}
	
	/* 商品信息 */
	.porduct-introduce{
		background-color: #FFFFFF;
		border-radius: 24rpx;
		display: flex;
		flex-direction: column;
		padding: 40rpx;
		margin-top: 20rpx;
	}
	
	.porduct-introduce-top{
		display: flex;
		align-items: center;
		line-height: 30rpx;
		justify-content: space-between;
	}
	.this-title{
		font-size: 28rpx;
		font-weight: bolder;
		color: #000000;
	}
	
	.hint-set-details{
		display: flex;
		color: #111111;
		font-size: 24rpx;
		
	}
	.hint{
		font-weight: lighter;
	}
	.set-details{
		color: #fa3475;
		margin-left: 20rpx;
	}
	
	
	.porduct-images-all-set{
		display: flex;
		align-items: center;
		margin-top: 30rpx;
	}
	.porduct-images-item{
		width: 522rpx;
		height: 200rpx;
	}
	.images-item{
		width: 100%;
	/* 	overflow: hidden;
		white-space: nowrap; */
		display: flex;
	}
	.porduct-images-items{
		
	}
	.porduct-images-list{
		width: 200rpx;
		height: 200rpx;
		margin-right: 30rpx;
	}
	.porduct-images-list image{
		width: 200rpx;
		height: 200rpx;	
	}
	
	.all-see{
		width: 200rpx;
		text-align: center;
		font-size: 24rpx;
	}
	.see{
		color: #fa3475;
	}
	
	.complimentary-item{
		display: flex;
		align-items: center;
		margin-top: 24rpx;
		font-size: 24rpx;
		color: #000000;
	}
	.complimentary-title{
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
	
</style>
