<template>
	<view class="goods_classify">
		<topBar class="topBar" :barName='barName' :topBackgroundColor='topBackgroundColor' :BarImgs='BarImgs' :menuWidth='menuWidth'
		 :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom' :cartNumber='cartNumber'
		 :messageNumber='messageNumber' :topSearchContent='topSearchContent'></topBar>


		<view class="content" :style="[{'padding-top':menuBottom+52+'px'}]">
			<!-- 左边导航条 -->
			<scroll-view class="left" scroll-y :style="'height:'+height +'rpx'">
				<view v-if="leftList.length>0" @tap="categoryClickMain(item.id,index)" :class="index==btnnum?'btna':''"
				 v-for="(item,index) in leftList" :key="index" >
					{{item.name}}
				</view>
			</scroll-view>
			<!-- 右边内容 -->
			<scroll-view class="rightContent" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'rpx'"
			 scroll-with-animation>
				<view class="rightContentItem">
					<view class="right-swiper" v-if="swiperList">
						<swiper indicator-dots indicator-active-color="#ffffff" autoplay :interval='intervalTime' :duration="durationTime"
						 circular :style="[{height:swiperHeight+'rpx',borderRadius:'24rpx'}]">
							<swiper-item class="swiper-item" v-for="(i,index) in swiperList" :key="index">
								<!-- 顶部广告图 -->
								<view class="advertisingImg">
									<image :src="i.url" mode=""></image>
								</view>
							</swiper-item>
						</swiper>
					</view>

					<!-- 主体内容 -->
					<view class="detailed-goods-list">
						<view class="tabBarList" >
							<swiperTabHead :tabBars="tabBars" :line="line" :tabIndex="tabIndex" @tabtap="tabtap" ></swiperTabHead>
						</view>

						<view class="uni-tab-bar">
							<swiper class="swiper-boxs" :style="'height:'+rightswiperHeight+'rpx'" 
							 :current="tabIndex" @change="tabChange">
								<swiper-item v-for="(items,index) in tabBars" :key="index">
									<scroll-view scroll-y class="list">
										<template >
											<block>
												<view class="detailed-goods">
													<porduct :width=260 :porductLists='newslist' :requestUrl='requestUrl'></porduct>
													<!-- {{items.name}} -->
												</view>

											</block>

										</template>
									</scroll-view>

								</swiper-item>
							</swiper>
						</view>

					</view>
				</view>
			</scroll-view>
		</view>
	</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import swiperTabHead from "../../components/swiper-tab.vue";
	import porduct from "../../components/porduct.vue";
	export default {
		components: {
			topBar,
			swiperTabHead,
			porduct
		},
		data() {
			return {
				barName: 'mianPage', //页面名称
				topBackgroundColor: "#5D060E", //顶部导航条背景颜色
				BarImgs: '../static/images/0.png',
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
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
					'热门推荐', '双眼皮', '隆鼻', '丰胸', '脂肪填充', '祛斑', '瘦身塑形', '口腔美容', '紧肤抗衰', '毛发移植', '脱毛', '双眼皮', '隆鼻', '丰胸', '脂肪填充', '祛斑','瘦身塑形', '口腔美容', '紧肤抗衰', '毛发移植', '脱毛' ], //左边导航条

				rightContentList: {}, //右边内容
				tabBars: [{
						name: '精选',
						id: 'love',
					},
					{
						name: '最新',
						id: 'video'
					},
					{
						name: '最热',
						id: 'questions-and-answers'
					},
					{
						name: '特价',
						id: 'record'
					},

				],
				line: false, //是否显示选中线
				tabIndex: 0, // 选中的
				swiperheight: 210, //高度
				rightswiperHeight: 0, //右边的滑动元素高度
				newslist: [],//商品数组
				swiperList:[
					{
							id: 0,
							url: '../../static/images/22.png',
						},
						{
							id: 1,
							url: '../../static/images/22.png',
						},
				],
				requestUrl:''
			}
		},
		onLoad: function() {
			
			this.request = this.$request
			let that = this
			that.height = uni.getSystemInfoSync().windowHeight * 1.6;
			
			that.requestUrl = that.request.globalData.requestUrl
			let dataInfo = {
				interfaceId : 'categorylist',
				type : 0
			}
			that.request.uniRequest("goods", dataInfo).then(res => {
				// console.log(res)
				if(res.statusCode == 200 ){
					// console.log(res.data.data)
					that.leftList = res.data.data
					that.categoryClickMain(res.data.data[0].id)
					that.tabtap()
				}
			})
		},
		onReady() {
			let that = this;
			let pageHeight = 0
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					pageHeight = res.windowHeight
					let menu = uni.getMenuButtonBoundingClientRect();
					that.menuWidth = menu.width
					that.menuTop = menu.top
					that.menuHeight = menu.height
					that.menuLeft = menu.left
					that.menuBottom = menu.bottom
				}
			})
		},
		methods: {
			categoryClickMain: function(id , index = 0) {
				let that = this
				let	dataInfo = {
						interfaceId:'categoryspulist',
						cid:id //id是左边的顶级分类26表示护肤品
					}
				// console.log(id)
				this.btnnum = index
				// let current = this.leftList.find(item => item === id);
				that.request.uniRequest("goods", dataInfo).then(res => {
					console.log(res)
					
				})
				
			},
			scroll: function(e) {
				// console.log(e)
				let Y =e.detail.timeStamp
			},
			gotoGoods: function(e) {
				let goods = e.currentTarget.dataset.name
				uni.navigateTo({
					url: `/pages/goods/goods_detail?goods=${goods}`,
				})
			},

			//接受子组件传过来的值点击切换导航
			tabtap: function(index=0) {
				let that = this
				this.tabIndex = index;
				console.log(index)
				let	dataInfo = {
						interfaceId:'hotrecommendedspulist',
						type:index+1 ,//推荐类型1最新 2最热 3:特价
						offset:0,//分页起始数量 默认 0
						limit:6, //每页数量 默认6
					}
					that.request.uniRequest("goods", dataInfo).then(res => {
						console.log(res.data.data)
						that.rightswiperHeight = Math.ceil(res.data.data.length / 2)*550
						that.newslist = res.data.data
					})

			},
			// 选中的内容
			tabChange: function(e) {
				this.tabIndex = e.detail.current;
				let that = this
				let	dataInfo = {
						interfaceId:'hotrecommendedspulist',
						type:this.tabIndex+1 ,//推荐类型1最新 2最热 3:特价
						offset:0,//分页起始数量 默认 0
						limit:6, //每页数量 默认6
					}
					that.request.uniRequest("goods", dataInfo).then(res => {
						// console.log(res.data.data)
						that.rightswiperHeight = Math.ceil(res.data.data.length / 2)*550
						that.newslist = res.data.data
					})
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
		width: 190rpx;
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
	.rightContentItem{
		padding-top: 13rpx;
	}
	

	
</style>
