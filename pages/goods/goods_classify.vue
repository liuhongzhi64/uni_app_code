<template>
	<view class="goods_classify">
		<topBar class="topBar" :barName='barName' :topBackgroundColor='topBackgroundColor' :BarImgs='BarImgs' :menuWidth='menuWidth'
		 :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom' :cartNumber='cartNumber'
		 :messageNumber='messageNumber' :topSearchContent='topSearchContent'></topBar>
		<view class="content" :style="[{'padding-top':menuBottom+52+'px'}]">
			<!-- 左边导航条 -->
			<scroll-view class="left" scroll-y :style="[{'height':height-menuBottom-55+'px'}]">
				<view v-if="leftList.length>0" @tap="categoryClickMain(item.id,index)" :class="index==btnnum?'btna':''" v-for="(item,index) in leftList"
				 :key="index">
					{{item.name}}
				</view>
			</scroll-view>
			<!-- 右边内容 -->
			<scroll-view class="rightContent" scroll-y  :style="[{'height':height-menuBottom-55+'px'}]"
			 scroll-with-animation
			 @scrolltolower='onBottom'>
				<!-- 热门推荐 -->
				<view class="rightContentItem" v-if="rightGoodsId == 0">
					<view class="right-swiper" v-if="advertising_img.content.length>0">
						<view class="specialList" v-if="advertising_img.type==1">
							<swiper autoplay interval='5000' duration='3000' circular>
								<swiper-item class="swiper-item" v-for="(item,index) in advertising_img.content" :key="index">
									<navigator :url="'/pages'+item.page+'?id='+item.page_id" >
										<image :src="requestUrl+item.img" mode="heightFix"></image>
									</navigator>
								</swiper-item>
							</swiper>
						</view>
					</view>
					<!-- 主体内容 -->
					<view class="detailed-goods-list">
						<view class="tabBarList">
							<swiperTabHead :tabBars="tabBars" :line="line" :tabIndex="tabIndex" @tabtap="tabtap"></swiperTabHead>
						</view>
						<view class="uni-tab-bar">
							<!-- <swiper class="swiper-boxs" :style="'height:'+rightswiperHeight+'rpx'" :current="tabIndex" @change="tabChange"> -->
							<swiper class="swiper-boxs" :style="'height:'+rightswiperHeight+'rpx'" :current="tabIndex" @change="tabChange">
								<swiper-item style="height: 100%;padding-top: 24rpx;" v-for="(items,index) in tabBars" :key="index">
									<scroll-view scroll-y class="list">
										<template>
											<block>
												<view class="detailed-goods">
													<goodsShow :requestUrl='requestUrl' 
													 :borderRadius=24 :width=260
													 :porductList='newslist' ></goodsShow>
												</view>
											</block>
										</template>
									</scroll-view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
				<!-- 二级分类 -->
				<view class="rightContentForClass" v-else>
					<!-- 空 -->
					<view class="no-have-porduct" v-if="classfyList.length==0">
						<image src="../../static/images/cartBg.png" mode=""></image>
						<view class="no-have-porduct-hint">暂无相关商品</view>
					</view>
					<!-- 非空 -->
					<view class="have-porduct-item" v-else>
						<view class="item-all" v-for="(item,index) in classfyList" :key='index'>
							<view class="item-top" @tap='gotoGoodsList(item.name,item.id)'>
								{{item.name}}
							</view>
							<view class="item-porduct">
								<goodsShow
								 :borderRadius=24
								 :requestUrl='requestUrl' 
								 :width=260
								 :porductList='item.spu_list' >
								 </goodsShow>								
							</view>
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
	import goodsShow from "../../components/goodsShow.vue"
	export default {
		components: {
			topBar,
			swiperTabHead,
			porduct,
			goodsShow
		},
		data() {
			return {
				barName: 'mianPage', //页面名称
				topBackgroundColor: "#5D060E", //顶部导航条背景颜色
				BarImgs: '/static/images/0.png',
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
				scrollHeight: 0,
				btnnum: 0, //当前选中的
				leftList: [{
					id: 0,
					name: '热门推荐'
				}],
				rightGoodsId: 0, //导航条id
				tabBars: [{
						name: '猜你喜欢',
						type: '4',
					},
					{
						name: '最新',
						type: '1'
					},
					{
						name: '最热',
						type: '2'
					},
					{
						name: '特价',
						type: '3'
					},

				],
				line: true, //是否显示选中线
				tabIndex: 0, // 选中的
				swiperHeight: 180, //高度
				rightswiperHeight: 0, //右边的滑动元素高度
				newslist: [], //商品数组
				classfyList: [], //非热门推荐商品列表
				
				requestUrl: '',
				advertising_img:{
					content:[]
				},
				offset:0,
				thisType:0,
			}
		},
		onLoad: function() {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			// 请求左边的导航条数据
			let dataInfo = {
				interfaceId: 'categorylist',
				type: 0
			}
			that.request.uniRequest("goods", dataInfo).then(res => {
				// console.log(res)
				if (res.statusCode == 200) {					
					that.leftList = that.leftList.concat(res.data.data)
					// console.log(that.leftList)
					// 初始化右边接口数据
					that.categoryClickMain()
				}
			})
			that.advertising()
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().windowHeight ;
			// console.log(that.height,uni.getSystemInfoSync())
			let pageHeight = 0
			// 判定运行平台
			let platform = ''
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
			if(platform=='applet'){
				// 获取屏幕高度
				uni.getSystemInfo({
					success: function(res) {
						pageHeight = res.screenHeight
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuWidth = menu.width
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuLeft = menu.left
						that.menuBottom = menu.bottom
					}
				})
			}
			else{
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},

		methods: {
			categoryClickMain: function(id = 0, index = 0) {
				let that = this
				that.btnnum = index
				that.rightGoodsId = id
				let dataInfo = {
					interfaceId: 'categoryspulist',
					cid: id //id是左边的顶级分类26暂时表示护肤品
				}
				if (id == 0) {
					that.tabtap()
				} else {
					that.request.uniRequest("goods", dataInfo).then(res => {
						// console.log(res.data, id)
						if (res.data.code == 1000) {
							that.classfyList = res.data.data
							// console.log(that.classfyList)
						} else {
							that.request.showToast()
						}
					})
				}

			},
			// 获取广告
			advertising:function(){
				let that = this
				let dataInfo = {
					interfaceId:'getadvertising',
					location:2
				}
				that.request.uniRequest("home", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.advertising_img = data
						// console.log(data)
					}
				})
			},

			//接受子组件传过来的值点击切换导航
			tabtap: function(index,type=4) {
				let that = this
				this.tabIndex = index;
				that.thisType = type
				that.rightswiperHeight = 0
				// console.log(that.thisType,'点击类型')
				if(type==4){
					let dataInfo = {
						interfaceId: 'userrecommendedgoodsspulist',
						type: '1', 
						offset: that.offset, //分页起始数量 默认 0
					}
					that.request.uniRequest("goods", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							that.newslist = data
							// that.newslist = that.newslist.concat(data)
							that.rightswiperHeight = Math.ceil(that.newslist.length / 2) * 650
						}
					})
				}else{
					let dataInfo = {
						interfaceId: 'hotrecommendedspulist',
						type: type, //推荐类型1最新 2最热 3:特价
						offset: that.offset, //分页起始数量 默认 0
						limit: 6, //每页数量 默认6
					}
					that.request.uniRequest("goods", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							that.rightswiperHeight = Math.ceil(res.data.data.length / 2) * 650
							that.newslist = data
							// that.newslist = that.newslist.concat(data)
						}	
					})
				}				
			},
			// 选中的内容
			tabChange: function(e) {
				let that = this
				this.tabIndex = e.detail.current;
				let type = this.tabIndex
				// console.log(type,'滑动类型')
				if(type==0){
					that.tabtap(this.tabIndex,4)
				}else{
					that.tabtap(this.tabIndex,type)
				}				
			},
			onBottom: function() {
				let that = this;
				// that.offset += 1;
				// that.tabtap(this.thisType,that.thisType)
			},
			gotoGoodsList: function(listName,id) {
				uni.navigateTo({
					url: `/pages/goods/goods_list?name=${listName}&id=${id}`,
				})
			}

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

	.rightContentItem {
		padding-top: 13rpx;
	}
	.right-swiper,.right-swiper image{
		height: 180rpx;
	}

	.no-have-porduct {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.no-have-porduct image {
		width: 400rpx;
		height: 254rpx;
	}

	.item-top {
		color: #fff;
		display: block;
		width: 520rpx;
		line-height: 72rpx;
		background: url(https://xcx.hmzixin.com/upload/images/3.0/classify_title_bg.png);
		background-size: 100%;
		font-size: 28rpx;
		text-indent: 70rpx;
		font-weight: bold;
		margin: 20rpx 0 0 10rpx;
	}

	.item-porduct {
		width: 100%;
		padding-top: 10rpx;
	}
</style>
