<template>
	<view class="goods_classify">
		<topBar class="topBar" :barName='barName' :topBackgroundColor='topBackgroundColor' :BarImgs='BarImgs' :barTopH='barTopH'
		 :rightDistance='rightDistance' :cartNumber='cartNumber' :messageNumber='messageNumber' :topSearchContent='topSearchContent'></topBar>
		<view class="content">
			<!-- 左边导航条 -->
			<scroll-view class="left" scroll-y :style="'height:'+height +'rpx'">
				<view v-if="leftList.length>0" @tap="categoryClickMain(item,index)" :key="index" :class="index==btnnum?'btna':''"
				 v-for="(item,index) in leftList">
					{{item}}
				</view>
			</scroll-view>
			<!-- 右边内容 -->
			<scroll-view class="rightContent" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'rpx'"  
			 scroll-with-animation>
				<view class="rightContentItem">
					<view class="right-swiper" v-if="rightContentList.swiperList">
						<swiper indicator-dots indicator-active-color="#ffffff" autoplay :interval='intervalTime' :duration="durationTime"
						 circular :style="[{height:rightContentList.swiperHeight+'rpx',borderRadius:'24rpx'}]">
							<swiper-item class="swiper-item" v-for="(i,index) in rightContentList.swiperList" :key="index">
								<!-- 顶部广告图 -->
								<view class="advertisingImg">
									<image :src="i.url" mode=""></image>
								</view>
							</swiper-item>
						</swiper>
					</view>

					<!-- 主体内容 -->
					<view class="detailed-goods-list">
						<view class="tabBarList" v-if="rightContentList.newslist.length>0">
							<swiperTabHead :tabBars="tabBars" :line="line" :tabIndex="tabIndex" @tabtap="tabtap" v-if="rightContentList.newslist"></swiperTabHead>
						</view>

						<view class="uni-tab-bar" v-if="rightContentList.newslist.length>0">
							<swiper class="swiper-boxs" :style="'height:'+rightswiperHeight+'rpx'"  v-if="rightContentList.newslist.length>0" :current="tabIndex" @change="tabChange">
								<swiper-item v-for="(items,index) in rightContentList.newslist" :key="index">
									<scroll-view scroll-y class="list">
										<template v-if="items.list.length > 0">
											<block>
												<view class="detailed-goods" v-if="items.list.length > 1">
													<view class="goodsList" v-for="(i,k) in items.list" :key='k' @tap="gotoGoods" :data-name="i.productContent">
														<!-- 商品图片 -->
														<view class="goods-image">
															<image :src="i.url" mode=""></image>
														</view>
														<!-- 商品介绍 -->
														<view class="productContent"> {{i.productContent}} </view>
														<!-- 活动 -->
														<view class="activity" v-if="i.activity.length>0 && i.label.length==0 ">
															<view class="activityName" v-for="(i,k) in i.activity" :key='k'> {{i}} </view>
														</view>
														<!-- 标签 -->
														<view class="label" v-if="i.label.length>1">
															<view class="labelItem" v-for="(i,k) in i.label" :key='k'> {{i}} </view>
														</view>
														<!-- 商品价格 -->
														<view class="productPrice"> ￥{{i.productPrice}} </view>
														<!-- 预约和好评 -->
														<view class="subscribeAndGoodReputation" v-for="(i,k) in i.subscribeAndGoodReputation" :key='k'>
															<!-- 预约 -->
															<view class="subscribe"> {{i.subscribe}}预约 </view>
															<!-- 好评 -->
															<view class="goodReputation"> {{i.goodReputation}}%好评 </view>
														</view>
													</view>

													<view v-if="items.list.length<=1" v-for="(i,k) in items.list" :key="k">
														{{i}}
													</view>
												</view>

											</block>

										</template>
									</scroll-view>
									
								</swiper-item>
							</swiper>
						</view>
						
					</view>
				</view>
				{{rightContentList.content}}
			</scroll-view>
		</view>
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
				barName: 'mianPage', //页面名称
				topBackgroundColor: "#5D060E", //顶部导航条背景颜色
				BarImgs: '../static/images/0.png', //
				barTopH: 0,
				rightDistance: 0,
				cartNumber: 3, //购物车数量
				messageNumber: 19, //消息
				topSearchContent: '华美整呗手动挡擦拭你快点好说的水电费打法就第三方都是十点多', //头部搜索框的推荐内容
				intervalTime: 3000, //自动切换时间间隔
				durationTime: 1000, //	滑动动画时长
				height: 0,
				scrollTop: 0,
				scrollHeight: 0,
				btnnum: 0, //当前选中的
				leftList: [
					'热门推荐', '双眼皮', '隆鼻', '丰胸', '脂肪填充', '祛斑', '瘦身塑形', '口腔美容', '紧肤抗衰', '毛发移植', '脱毛', '双眼皮', '隆鼻', '丰胸', '脂肪填充', '祛斑',
					'瘦身塑形', '口腔美容', '紧肤抗衰', '毛发移植', '脱毛'
				], //左边导航条

				rightContentList: {}, //右边内容
				tabBars: [{
						name: '精选',
						content: '猜你喜欢',
						id: 'love',
					},
					{
						name: '视频',
						content: '精选视频',
						id: 'video'
					},
					{
						name: '问答',
						content: '优质回答',
						id: 'questions-and-answers'
					},
					{
						name: '日记',
						content: '真人记录',
						id: 'record'
					},

				],
				line: false, //是否显示选中线
				tabIndex: 0, // 选中的
				swiperheight: 0, //高度
				rightswiperHeight:0,//右边的滑动元素高度
				newslist: [],
			}
		},
		onLoad: function() {
			this.height = uni.getSystemInfoSync().windowHeight * 1.6;
			// console.log(this.height)
			this.categoryClickMain()
		},
		onReady() {
			let that = this;
			let pageHeight = 0
			// console.log(this.rightContentList.newslist)
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					pageHeight = res.windowHeight
					// console.log('pageHeight', pageHeight)
					let menu = uni.getMenuButtonBoundingClientRect();
					that.rightDistance = menu.width
					that.barTopH = menu.top
				}
			})
		},
		methods: {
			categoryClickMain: function(id = "热门推荐", index = 0) {
				// console.log(id, index)
				this.btnnum = index
				let current = this.leftList.find(item => item === id);
				if (current === "热门推荐") {
					this.rightContentList.swiperList = [{
							id: 0,
							url: '../../static/images/22.png',
						},
						{
							id: 1,
							url: '../../static/images/22.png',
						},
					]
					this.rightContentList.swiperHeight = 210
					this.rightContentList.newslist = [{
							list: [{
									url: '../../static/images/23.png',
									productContent: '商品名称商品名称商品名称商品名称,超过阿萨德散户两黄金自动省略号',
									activity: ['首单必减', '折扣'],
									label: ['眼部美容', '眼部'],
									productPrice: 19800,
									subscribeAndGoodReputation: [{
										subscribe: '441',
										goodReputation: '98'
									}]
								},
								{
									url: '../../static/images/23.png',
									productContent: '商品名称商品名称商品名称商品名称,超过阿萨德散户两黄金自动省略号',
									activity: ['首单必减', '折扣'],
									label: [],
									productPrice: 19800,
									subscribeAndGoodReputation: [{
										subscribe: '441',
										goodReputation: '98'
									}]
								},
								{
									url: '../../static/images/23.png',
									productContent: '商品名称商品名称商品名称商品名称,超过阿萨德散户两黄金自动省略号',
									activity: ['首单必减', '折扣'],
									label: [],
									productPrice: 19800,
									subscribeAndGoodReputation: [{
										subscribe: '441',
										goodReputation: '98'
									}]
								},
								{
									url: '../../static/images/23.png',
									productContent: '商品名称商品名称商品名称商品名称,超过阿萨德散户两黄金自动省略号',
									activity: ['首单必减', '折扣'],
									label: ['眼部美容', '眼部'],
									productPrice: 19800,
									subscribeAndGoodReputation: [{
										subscribe: '441',
										goodReputation: '98'
									}]
								},
							]
						},
						{
							list: ['精选视频']
						},
						{
							list: ['优质回答']
						},
						{
							list: ['真人记录']
						},
					]
					this.rightContentList.content = current
					this.rightswiperHeight = Math.ceil(this.rightContentList.newslist[0].list.length / 2) * 520
				} else {
					// console.log(this.rightContentList, 11111)
					this.rightContentList.swiperList = []
					this.rightContentList.swiperHeight = 0
					this.rightContentList.newslist = []
					this.rightContentList.content = current
					this.rightContentList.goodsList = []
				}
			},
			scroll: function(e) {
				console.log(e)
			},
			gotoGoods: function(e) {
				let goods = e.currentTarget.dataset.name
				uni.navigateTo({
					url: `/pages/goods/goods_detail?goods=${goods}`,
				})
			},

			//接受子组件传过来的值点击切换导航
			tabtap: function(index) {
				// console.log(index,333333)
				this.tabIndex = index;
				if(this.tabIndex == 0){
					this.rightswiperHeight = Math.ceil(this.rightContentList.newslist[0].list.length / 2) * 520
				}
				else{
					this.rightswiperHeight = 0
				}
				
			},
			// 选中的内容
			tabChange: function(e) {
				this.tabIndex = e.detail.current;
				// console.log(e,44444)
				if(this.tabIndex == 0){
					this.rightswiperHeight = Math.ceil(this.rightContentList.newslist[0].list.length / 2) * 520
				}
				else{
					this.rightswiperHeight = 350
				}
			},
		}
	}
</script>

<style scoped>
	.goods_classify {
		height: 100%;
		background-color: #f6f6f6;
	}

	.content {
		display: flex;
		margin-top: 240rpx;
	}

	.left {
		width: 190rpx;
		line-height: 100rpx;
		font-size: 30rpx;
		text-align: center;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
	}

	.leftItem {
		height: 100rpx;
		line-height: 100rpx;
		font-size: 24rpx;
	}

	.btna {
		font-size: 28rpx;
		width: 190rpx;
		color: #111111;
		background-color: #f6f6f6;
		font-weight: bolder;
	}

	/* 右边 */
	.rightContent {
		flex: 1;
		height: 100%;
		padding-left: 10rpx;
		padding-right: 20rpx;
	}


	.advertisingImg image {
		width: 100%;
		height: 210rpx;
		border-radius: 24rpx;
	}

	.detailed-goods {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
		white-space: normal;
	}
	
	.swiper-boxs{
		padding-bottom: 20rpx;
	}
	
	.goodsList {
		width: 260rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-bottom: 20rpx;
	}

	.goods-image {
		width: 100%;
	}

	.goods-image image {
		width: 260rpx;
		height: 260rpx;
		border-top-right-radius: 24rpx;
		border-top-left-radius: 24rpx;
	}

	.productContent {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-size: 24rpx;
		color: #111111;
		padding: 10rpx 10rpx 0;
	}

	.activity {
		display: flex;
		font-size: 16rpx;
		color: #fa3475;
		padding: 10rpx;
		flex-wrap: wrap;
	}

	.activityName {
		border: 1rpx solid #fa3475;
		margin-right: 10rpx;
		padding: 5rpx;
	}

	.label {
		display: flex;
		flex-wrap: wrap;
		color: #FFFFFF;
		font-size: 16rpx;
		padding: 10rpx;
	}

	.labelItem {
		background-color: #999999;
		border-radius: 4rpx;
		margin-right: 10rpx;
		padding: 5rpx;
		text-align: center;
	}

	.productPrice {
		color: #fa3475;
		font-size: 32rpx;
		/* line-height: 80rpx; */
	}

	.subscribeAndGoodReputation {
		display: flex;
		justify-content: space-between;
		text-align: center;
		font-size: 24rpx;
		padding: 10rpx;
	}

	.goodReputation {
		color: #fa3475;
	}
</style>
