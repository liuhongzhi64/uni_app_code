<template>
	<view class="my_collection">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="top-swiper-tab" :style="[{'top':menuBottom+10+'px'}]">
			<swiperTabHead :tabBars="tabBars" :size='size' :line="line" :tabIndex="tabIndex" :tabBackgroundColor='tabBackgroundColor'
			 @tabtap="tabtap"></swiperTabHead>
		</view>
		<view class="my_collection-content" :style="[{'padding-top':menuBottom+50+'px','height':height-menuBottom-50+'px'}]">
			<scroll-view class="my_collection-content">
				<template>
					<view class="collection-content">
						<view class="content-list clearfix" v-for="(item,index) in contentList" :key='index'>
							<view class="top-content">
								<view class="head-image">
									<image :src="item.url" mode=""></image>
								</view>
								<view class="right-content">
									<view class="goods_name">{{item.goods_name}}</view>
									<view class="label-list">
										<view class="label" v-for="(i,k) in item.label" :key="k"> {{i}} </view>
									</view>
									<view class="porduct-price-vip-cart">
										<view class="porduct-price">
											<text>￥</text>{{item.price}}
										</view>
										<view class="vip-cart-price" v-if="item.vipPrice>0">
											<text class="vip-cart">钻卡</text>
											<text class="vip-price">￥{{item.vipPrice}}</text>
										</view>
									</view>
									<!-- 预约和好评 -->
									<view class="subscribe-goodReputation">
										<!-- 预约 -->
										<view class="subscribe"> {{item.subscribe}}预约 </view>
										<!-- 好评 -->
										<view class="goodReputation"> {{item.goodReputation}}%好评 </view>
									</view>
								</view>
							</view>

							<view class="delete-see-similarity">
								<button class="delete" @tap='deleteItem' type="default" plain="true" :data-index='index'> 删除 </button>
								<button class="see-similarity" type="default" plain="true"> 看相似 </button>
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
	import swiperTabHead from "../../components/swiper-tab.vue";
	export default {
		components: {
			topBar,
			swiperTabHead,
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '我的收藏',
				tabBars: [{
						name: '商品',
						id: 'all',
						type: 0
					},
					{
						name: '医生',
						id: 'obligation',
						type: 1
					},
					{
						name: '日记',
						id: 'account-paid',
						type: 2
					},
					{
						name: '问答',
						id: 'completed',
						type: 3
					},

				],
				line: true, //是否显示选中线
				tabBackgroundColor: '#FFFFFF',
				size: 24,
				tabIndex: 0, // 选中的顶部的导航，
				listType: 0, //类型
				contentList: [
					{
						url: '../../static/images/20.png',
						goods_name: '我是秒杀商品名称，我是秒杀商品名称，我是秒杀商品名称...我是秒杀商品名称，',
						label: ['眼部美容', '眼部'], //标签
						price: 19800,
						vipPrice: 18800,
						subscribe: '441',
						goodReputation: '98'
					},
					{
						url: '../../static/images/22.png',
						goods_name: '我是秒杀商品名称，我是秒杀商品名称，我是秒杀商品名称...我是秒杀商品名称，',
						label: ['眼部美容', '眼部'], //标签
						price: 19800,
						vipPrice: 18800,
						subscribe: '441',
						goodReputation: '98'
					},
					{
						url: '../../static/images/19.png',
						goods_name: '我是秒杀商品名称，我是秒杀商品名称，我是秒杀商品名称...我是秒杀商品名称，',
						label: ['眼部美容', '眼部'], //标签
						price: 19800,
						vipPrice: 18800,
						subscribe: '441',
						goodReputation: '98'
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
			tabtap: function(index = 0, type = 0) {
				this.tabIndex = index;
				this.listType = type //类型 0商品 1医生 2日记 3问答
			},
			deleteItem:function(e){
				let that = this
				let index = e.currentTarget.dataset.index;
				console.log(this.contentList)
				uni.showModal({
					title: '提示',
					content: '确定删除此收藏？',
					success: function (res) {
					    if (res.confirm) {
					      that.contentList.splice(index,1)
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
	.my_collection {
		background-color: #F0F0F0;
	}

	.top-swiper-tab {
		position: fixed;
		z-index: 9;
		width: 100%;
		border-radius: 0 0 24rpx 24rpx;
	}

	.collection-content {}

	.content-list {
		margin-top: 20rpx;
		padding: 30rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
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

	.delete-see-similarity {
		float: right;
		display: flex;
		margin-top: 24rpx;
	}

	.clearfix:after {
		/*伪元素是行内元素 正常浏览器清除浮动方法*/
		content: "";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
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

	.see-similarity {
		width: 170rpx;
		line-height: 50rpx;
		background-image: linear-gradient(-90deg, #fa3475 0%, #ff6699 100%);
		border-radius: 25rpx;
		color: #FFFFFF;
		font-size: 24rpx;
		border: none;
	}
</style>
