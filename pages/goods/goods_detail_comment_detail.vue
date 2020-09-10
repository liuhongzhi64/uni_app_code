<template>
	<view class="goods_detail_comment_detail">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<view class="goods_detail_comment_detail_contnet" :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
			<scroll-view class="comment_detail_contnet-content">
				<template>
					<view class="content-details">
						<view class="top-content">
							<view class="left-content">
								<image class="user-images" src="../../static/images/20.png" mode=""></image>
								<view class="user-name-star">
									<view class="user-name">用户昵称几个字</view>
									<view class="star-list">
										<view class="star-img" v-for="(item,index) in imgs" :key="index" :data-index="item.id">
											<image class="star" :src="item.id>starId?src2:src1"></image>
										</view>
									</view>
								</view>
							</view>
							<view class="top-right" v-if="starId==1||starId==2">较差</view>
							<view class="top-right" v-else-if="starId==3">一般</view>
							<view class="top-right" v-else-if="starId==4">满意</view>
							<view class="top-right" v-else>非常满意</view>
						</view>

						<view class="top-swiper">
							<swiper class="swiper" autoplay indicator-dots :interval="interval" :duration="duration">
								<swiper-item v-for="(item,index) in swiperList" :key='index'>
									<image :src="item" mode=""></image>
								</swiper-item>
							</swiper>
						</view>
						
						<view class="ueser-comment">
							我是用户评价内容，我是用户评价内容，我是用户评价内容，我是用户评价内容，我是用户评价内容，我是用户评价内容，我是用户评价内容，我是用户评价							  内容，我是用户评价内容，我是用户评价内容，我是用户评价内容，我是用户评价内容，我是用户评价内容，我是用户评价内容，我是用户评价内容，
						</view>
						
						<view class="guess-what-you-like">
							<view class="related-title">
								<view class="line"></view> 猜你喜欢
							</view>
							<view class="subject-content">
								<porduct :width=350 :porductList='productList' ></porduct>
							</view>
						</view>

					</view>
				</template>
			</scroll-view>
		</view>
		
		<view class="footer">
			<view class="page-view-collect-transpond">
				<view class="page-view">浏览量: <text>1423</text></view>
				<view class="collect" @tap="collectdiary" :data-id="diary.id">
					<image src="../../static/images/collect.png" mode=""></image> <text>145</text>
				</view>
				<view class="transpond">
					<image src="../../static/images/share.png" mode=""></image> <text>提问</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import porduct from "../../components/porduct.vue";
	export default {
		components: {
			topBar,
			porduct
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
				title: '评价详情',
				imgs: [{
					id: 1
				}, {
					id: 2
				}, {
					id: 3
				}, {
					id: 4
				}, {
					id: 5
				}],
				src1: 'https://img-blog.csdnimg.cn/20200610110052243.png',
				src2: 'https://img-blog.csdnimg.cn/20200610110053850.png',
				starId: 4,
				interval: 5000,
				duration: 1000,
				swiperList:['../../static/images/20.png','../../static/images/19.png'],
				productList: [
					{
						url: '../../static/images/19.png',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: [], //标签
						headPortrait: '../../static/images/23.png', //头像
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
					{
						url: '../../static/images/19.png',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: [], //标签
						headPortrait: '../../static/images/23.png', //头像
						price: 19800,
						closed:'闭馆特推',
						activity: [],
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
				}
			})
		},
		onLoad: function(option) {
			let that = this
			// console.log(option)
		},
		methods: {

		}
	}
</script>

<style scoped>
	.content-details{
		background-color: #F0F0F0;
		padding-bottom: 120rpx;
	}
	.top-content {
		padding: 32rpx 32rpx 32rpx 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
	}

	.left-content {
		display: flex;
		align-items: center;
		font-size: 24rpx;
		color: #999999;
	}

	.user-name-star {
		margin-left: 15rpx;
	}

	.user-images {
		width: 74rpx;
		height: 74rpx;
		border-radius: 37rpx;
	}

	.star-list {
		display: flex;
	}

	.star {
		width: 24rpx;
		height: 24rpx;
		margin: 0 5rpx;
		vertical-align: middle;
	}

	.top-right {
		color: #fa3475;
		font-size: 24rpx;
	}
	.top-swiper,.swiper,.swiper image{
		height: 760rpx;
		width: 100%;
	}
	
	.ueser-comment{
		background-color: #FFFFFF;
		padding: 32rpx 20rpx 40rpx ;
		font-size: 24rpx;
		line-height: 40rpx;
		border-radius: 0 0 24rpx 24rpx;
	}
	/* 猜你喜欢 */
	.guess-what-you-like {
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
		display: flex;
		align-items: center;
	}
	.footer {
		background-color: #F6F6F6;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 30rpx 0;
		border-top: 2rpx solid #f0f0f0;
	}
	
	.page-view-collect-transpond {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	
	.page-view-collect-transpond image {
		width: 40rpx;
		height: 40rpx;
	}
	
	.collect,
	.transpond {
		display: flex;
		font-size: 26rpx;
		color: #999999;
		align-items: center;
	}
	
	.page-view {
		color: #fa3475;
		font-size: 26rpx;
	}
	
</style>
