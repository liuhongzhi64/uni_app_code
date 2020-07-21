<template>
	<view class="diary">
		<view class="diary-top-bar" :style="[{paddingTop:barTopH*2+'rpx',paddingBottom:barBottom/2+'rpx'}]">
			<view class="bar-name" :style="[{height:barHeight*2-10+'rpx',width:barLeft*2-60+'rpx', lineHeight:barHeight*2-10+'rpx'}]">
				<view id="top-navigation-bars" class="top-navigation-bars" v-for="(item,index) in navigationList" :key='index'
				 :class="{checked :btnnum == index}" @tap="change(index)">
					{{ item }}
					<view :class="{checkedBar :btnnum == index}"> </view>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="end-cont" :class="{dis:btnnum == index}" v-for="(items,index) in topTabList" :key="index">
				<scroll-view scroll-y class="topList">
					<template v-if="items.topList.length > 0">
						<view class="all-content" v-for="(item,k) in items.topList" :key="k">
							<text v-if="items.topList.length ==1">{{item}}</text>
							<view class="content-all-bar">
								<view class="content-bar">
									<view class="content-bar-name" :class="{checkedbar :item.btnnum == k}" @tap="changeContentBar(k)" v-for="(i,k) in item.contentBar"
									 :key="k">
										{{i.name}}
										<view :class="{checkedTopBar :item.btnnum == k}"></view>
									</view>
									
								</view>
							</view>
							
							<!-- 主体内容 -->
							<view class="end-cont" :class="{dis:item.btnnum == index}" v-for="(i,index) in contentList" :key="index">
								<text v-if="!i.leftProduct">{{i.name}}</text>
								<view class="subject-content" v-if="i.leftProduct">
									<!-- 左边 -->
									<view class="left-product">
										<view class="product-show" v-for="(i,k) in i.leftProduct" :key='k' :data-name="i.title" @tap="gotoGoods">
											<view class="images">
												<image :src="i.url" mode=""></image>
											</view>
											<view class="product-title"> {{i.title}} </view>
											<view class="product-label">
												<view class="label-name" v-for="(i,k) in i.label" :key='k'> {{i}} </view>
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
										
									</view>
									<!-- 右边 -->
									<view class="right-product">
										<view class="product-show" v-for="(i,k) in i.rightProduct" :key='k' :data-name="i.title" @tap="gotoGoods">
											<view class="images">
												<image :src="i.url" mode=""></image>
											</view>
											<view class="product-title"> {{i.title}} </view>
											<view class="product-label">
												<view class="label-name" v-for="(i,k) in i.label" :key='k'> {{i}} </view>
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
		components: {

		},
		data() {
			return {
				barTopH: 0,
				rightDistance: 0,
				barHeight: 0,
				barLeft: 0,
				barBottom: 0,
				btnnum: 0,
				navigationList: ['全部', '直播', '日记', '视频'],
				topTabList: [{
						topList: [
							'全部',
							{
								btnnum: 0,
							}
						],
					},
					{
						topList: ['直播']
					},
					{
						topList: ['日记']
					},
					{
						topList: ['视频']
					}
				],
				contentList: [
					{
						name: '精选',
						leftProduct:[
							{
								url:'../../static/images/19.png',
								title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
								label:['眼部美容','眼部'],//标签
								headPortrait:'../../static/images/23.png',//头像
								userName:'用户昵称几个字',
								like:99,//点赞
								productUrl:'',
								productTitle:'',
								prouctPrice:0
							},
							{
								url:'../../static/images/20.png',
								title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
								label:['眼部美容','眼部'],//标签
								headPortrait:'../../static/images/test.jpg',//头像
								userName:'用户昵称几个字',
								like:99,//点赞
								productUrl:'../../static/images/20.png',
								productTitle:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
								prouctPrice:998
							},
							{
								url:'../../static/images/19.png',
								title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
								label:['眼部美容','眼部'],//标签
								headPortrait:'../../static/images/23.png',//头像
								userName:'用户昵称几个字',
								like:99,//点赞
								productUrl:'',
								productTitle:'',
								prouctPrice:0
							},
						],
						rightProduct:[
							{
								url:'../../static/images/20.png',
								title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
								label:['眼部美容','眼部'],//标签
								headPortrait:'../../static/images/test.jpg',//头像
								userName:'用户昵称几个字',
								like:99,//点赞
								productUrl:'../../static/images/20.png',
								productTitle:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
								prouctPrice:998
							},
							{
								url:'../../static/images/19.png',
								title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
								label:['眼部美容','眼部'],//标签
								headPortrait:'../../static/images/23.png',//头像
								userName:'用户昵称几个字',
								like:99,//点赞
								productUrl:'',
								productTitle:'',
								prouctPrice:0
							},
							{
								url:'../../static/images/20.png',
								title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
								label:['眼部美容','眼部'],//标签
								headPortrait:'../../static/images/test.jpg',//头像
								userName:'用户昵称几个字',
								like:99,//点赞
								productUrl:'../../static/images/20.png',
								productTitle:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
								prouctPrice:998
							},
						]
					},
					{
						name: '眼部'
					},
					{
						name: '鼻部'
					},
					{
						name: '胸部'
					},
					{
						name: '抗衰'
					}, {
						name: '美肤'
					},
				]
			}
		},
		onReady() {
			let that = this;
			let pageHeight = 0
			that.change()
			that.changeContentBar()
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					pageHeight = res.windowHeight

					let menu = uni.getMenuButtonBoundingClientRect();
					// console.log(menu)
					that.rightDistance = menu.width
					that.barHeight = menu.height
					that.barTopH = menu.top
					that.barBottom = menu.bottom
					// let left = res.windowWidth - menu.left  //i6:280 windowWidth - right i6s:320
					that.barLeft = menu.left
					// console.log(res, res.windowWidth - menu.left, that.barLeft)
				}
			})
		},
		methods: {
			change: function(e = 0) {
				this.btnnum = e
				if (this.btnnum === 0) {
					this.topTabList[0].topList[1].contentBar = [
						{
							name: '精选'
						},
						{
							name: '眼部'
						},
						{
							name: '鼻部'
						},
						{
							name: '胸部'
						},
						{
							name: '抗衰'
						}, {
							name: '美肤'
						},
					]
				}
			},
			changeContentBar: function(e = 0) {
				this.topTabList[0].topList[1].btnnum = e
			},
			// 点击商品
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
	.diary-top-bar {
		background-color: #111111;
		color: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
	}

	.bar-name {
		display: flex;
		justify-content: space-around;
		color: #FFFFFF;
	}

	.top-navigation-bars {
		font-size: 32rpx;
		font-weight: normal;
		font-stretch: normal;
	}

	.checked {
		font-size: 40rpx;
		font-weight: normal;
		font-stretch: normal;
	}

	.checkedBar {
		width: 0;
		height: 0;
		border-width: 30rpx;
		border-style: solid;
		border-color: transparent #FFFFFF transparent transparent;
		transform: rotate(90deg);
		/*顺时针旋转90°*/
		margin-top: -20rpx;
		margin-left: 10rpx;
		margin-bottom: 0;
	}

	.end-cont {
		display: none;
	}

	.dis {
		display: block;
	}
	.content{
		padding-top: 140rpx;
	}

	.all-content {
		padding: 30rpx 20rpx 0;
		background-color: #F6F6F6;
	}
	.content-all-bar{
		width: 100%;
		position: fixed;
		top: 130rpx;
		background-color: #FFFFFF;
		left: 0;
		z-index: 100;
	}
	.content-bar {
		width: 100%;
		display: flex;
		justify-content: space-around;
		font-size: 24rpx;
		line-height: 60rpx;
	}

	.checkedbar {
		color: #fa3475;
		font-size: 28rpx;
	}
	.checkedTopBar{
		border-bottom: 4rpx solid red;
	}
	.subject-content{
		background-color: #F6F6F6;
		display: flex;
		/* padding-top: 20rpx; */
		justify-content: space-between;
	}
	.left-product{
		width: 350rpx;
		display: flex;
		flex-direction: column;
	}
	.product-show{
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		background-color: #FFFFFF;
		white-space: normal;
		border-radius: 16rpx;
		margin-top: 10rpx;
	}
	.images image{
		width: 350rpx;
		height: 350rpx;
		border-top-left-radius: 16rpx;
		border-top-right-radius: 16rpx;
	}
	.product-title{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 24rpx;
		padding: 0 20rpx;
	}
	.product-label{
		display: flex;
		color: #FFFFFF;
		font-size: 16rpx;
		padding: 20rpx;
	}
	.label-name{
		background-color: #999999;
		text-align: center;
		padding: 5rpx 10rpx;
		margin-right: 10rpx;
		border-radius: 4rpx;
	}
	.user-message{
		display: flex;
		justify-content: space-between;
		padding:0 20rpx 40rpx;
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
		padding: 0 20rpx 20rpx;
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
	.right-product{
		width: 350rpx;
		display: flex;
		flex-direction: column;
	}
</style>
