<template>
	<view class="my_comment">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="top-swiper-tab" :style="[{'top':menuBottom+10+'px'}]">
			<view class="top-swiper-content" 
			 :class="{'active' : tabIndex==index}" 
			 v-for="(item,index) in tabBars" :key='index' @tap='tabtap(index,item.type)'>
				{{item.name}}
				<view class="swiper-tab-line" v-if="tabIndex==index" ></view>
			</view>
		</view>
		<view class="my_comment-content" :style="[{'padding-top':menuBottom+50+'px','height':height-menuBottom-50+'px'}]">
			<scroll-view class="my_comment-content">
				<template>
					<view class="comment-content">
						<view class="no-content" v-if="contentList.length==0">
							<image src="../../static/images/cartBg.png" mode=""></image>
							<view class="hint">喵~ 暂无相关内容</view>
						</view>
						<view class="content-item"  v-else v-for="(item,index) in contentList" :key='index'>
							<view class="have-content" v-for="(i,k) in item.commentList" :key='k'>
								<view class="top-content">
									<view class="head-image">
										<image :src="i.url" mode=""></image>
									</view>
									<view class="right-content">
										<view class="goods_name">{{i.goods_name}}</view>
										<view class="label-list">
											<view class="label" v-for="(i,k) in i.label" :key="k"> {{i}} </view>
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
										<view class="subscribe-goodReputation">
											<!-- 预约 -->
											<view class="subscribe"> {{i.subscribe}}预约 </view>
											<!-- 好评 -->
											<view class="goodReputation"> {{i.goodReputation}}%好评 </view>
										</view>
									</view>
								</view>
								<view class="comment-botton-award" v-if="listType==0">
									<view class="award"> 评价完成得 <text>30</text>喵豆 </view>
									<view class="comment-botton">
										<button class="write-comment" @tap='writeComment' type="default" plain="true"> 写评价 </button>
									</view>
								</view>
								<view class="have-evaluate" v-if="listType==1">
									<view class="evaluate-content">{{i.evaluate}}</view>
									<view class="state-delete-botton">
										<view class="evaluate-state" v-if="i.state==1">已匿名评价</view>
										<view class="evaluate-state" v-else></view>
										<view class="delete-botton">
											<button class="delete" @tap='deleteItem(index,k)' type="default" plain="true" > 删除 </button>
										</view>
									</view>
								</view>
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
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '我的评价',
				tabBars: [{
						name: '待评价',
						type: 0
					},
					{
						name: '已评价',
						type: 1
					}
				],
				tabIndex:0,
				listType:0,
				contentList:[]
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
			that.tabtap()
		},
		methods: {
			tabtap: function(index = 0, type = 0) {
				let that = this
				that.tabIndex = index;
				that.listType = type //类型 0待评价 1已评价
				if(that.listType == 0){
					that.contentList = [
						{
							commentList:[
								{
									url: '../../static/images/20.png',
									goods_name: '我是秒杀商品名称，我是秒杀商品名称，我是秒杀商品名称...我是秒杀商品名称',
									label: ['眼部美容', '眼部'], //标签
									price: 19800,
									vipPrice: 18800,
									subscribe: '441',
									goodReputation: '98'
								},
							]
						}
					]
				}else{
					that.contentList = [
						{
							commentList:[
								{
									url: '../../static/images/20.png',
									goods_name: '我是秒杀商品名称，我是秒杀商品名称，我是秒杀商品名称...我是秒杀商品名称',
									label: ['眼部美容', '眼部'], //标签
									price: 19800,
									vipPrice: 18800,
									subscribe: '441',
									goodReputation: '98',
									state:1,
									evaluate:'我是用户评价,最多显示两排然后显示...我是用户评价,最多显示两排然后显示...我是用户评价,最多显示两排然后显示...我是用'
								},
								{
									url: '../../static/images/19.png',
									goods_name: '我是秒杀商品名称，我是秒杀商品名称，我是秒杀商品名称...我是秒杀商品名称，',
									label: ['眼部美容', '眼部'], //标签
									price: 19800,
									vipPrice: 18800,
									subscribe: '441',
									goodReputation: '98',
									state:0,
									evaluate:'我是用户评价,最多显示两排然后显示...我是用户评价,最多显示两排然后显示...我是用户评价,最多显示两排然后显示...我是用'
								},
							]
						}
					]
				}
			},
			writeComment:function(){
				uni.navigateTo({
					url: `/pages/my/write_comment`,
				})
			},
			deleteItem:function(index,k){
				// console.log(this.contentList[index].commentList[k])
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定删除此评价？',
					success: function (res) {
					    if (res.confirm) {
					      that.contentList[index].commentList.splice(k,1)
						  if(that.contentList[index].commentList.length==0){
							  that.contentList = []
						  }
						  uni.showToast({
						  	title:'删除成功',
						  	duration: 1000
						  })
					    } else if (res.cancel) {
					        uni.showToast({
					        	title:'取消删除',
								duration: 1000
					        })
					    }
					}
				})
			}
		}
	}
</script>

<style scoped>
	.my_comment {
		background-color: #F0F0F0;
	}

	.top-swiper-tab {
		position: fixed;
		height: 80rpx;
		background-color: #FFFFFF;
		z-index: 9;
		width: 100%;
		border-radius: 0 0 24rpx 24rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.top-swiper-content{
		width: 50%;
		line-height: 80rpx;
		text-align: center;
		font-size: 24rpx;
		position: relative;
	}
	.active {
		color: #FA3475;
		font-size: 28rpx;
		font-weight: bolder;
	}
	.swiper-tab-line {
		height: 6rpx;
		background-color: #FA3475;
		width: 50rpx;
		border-radius: 3rpx;
		position: absolute;
		bottom: 5rpx;
		left: 162rpx;
	}
	.no-content{
		margin-top: 140rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}
	.no-content image{
		width: 525rpx;
		height: 370rpx;
	}
	.no-content .hint{
		color: #9e9e9e;
		font-size: 28rpx;
		margin-top: 56rpx;
	}
	.have-content{
		background-color: #FFFFFF;
		margin-top: 20rpx;
		border-radius: 24rpx;
		padding: 30rpx;
	}
	.top-content {
		display: flex;
		padding-bottom: 16rpx;
		border-bottom: 2rpx solid #F0F0F0;
		align-items: center;
	}

	.head-image image {
		width: 240rpx;
		height: 240rpx;
	}
	
	.right-content {
		margin-left: 30rpx;
	}
	
	.goods_name {
		font-size: 26rpx;
		line-height: 36rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.label-list {
		display: flex;
		margin-top: 12rpx;
	}
	
	.label {
		background-color: #999999;
		text-align: center;
		width: 80rpx;
		line-height: 26rpx;
		border-radius: 4rpx;
		color: #FFFFFF;
		font-size: 16rpx;
		margin-right: 10rpx;
	}
	
	.porduct-price-vip-cart {
		display: flex;
		align-items: center;
	}
	
	.porduct-price {
		font-size: 52rpx;
		padding-right: 20rpx;
		color: #fa3475;
	}
	
	.porduct-price text {
		font-size: 36rpx;
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
	.subscribe-goodReputation{
		display: flex;
		font-size: 20rpx;
	}
	.subscribe{
		color: #666666;
		margin-right: 40rpx;
	}
	.goodReputation{
		color: #fa3576;
	}
	.comment-botton-award{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20rpx;
	}
	.award{
		font-size: 24rpx;
	}
	.award text{
		color: #f46eae;
	}
	.write-comment{
		line-height: 50rpx;
		border-radius: 25rpx;
		border: 1rpx solid #e0619d;
		color: #f46eae;
		font-size: 24rpx;
		border: 1rpx solid #E0619D;
	}
	.have-evaluate{
		margin-top: 20rpx;
	}
	.evaluate-content{
		font-size: 26rpx;
		line-height: 36rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	.state-delete-botton{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20rpx;
	}
	.evaluate-state{
		font-size: 26rpx;
		color: #999999;
	}
	.delete {
		width: 120rpx;
		line-height: 50rpx;
		border-radius: 25rpx;
		border: 1rpx solid #e0619d;
		color: #f46eae;
		font-size: 24rpx;
		border: 1rpx solid #E0619D;
		margin-right: 20rpx;
	}
	
</style>
