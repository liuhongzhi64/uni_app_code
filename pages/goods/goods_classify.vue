<template>
	<view class="goods_classify">
		<view class="goods_top_tar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px'}]">
			<view class="left_input" :style="[{'height':menuHeight+'px','border-radius':menuHeight/2+'px'}]" @tap="top_go('search')">
				<image class="search-icon" src="/static/images/search_icon.png"></image>
			</view>
			<view class="cart_info" @tap="top_go('cart')">
				<image class="cart_img" src="/static/images/cart.png" ></image>
				<view class="cart_num"> {{ cart_number }} </view>
			</view>
			<view class="message_info" @tap="top_go('message')">
				<image class="message_img" src="/static/images/consulting.png" ></image>
				<view class="message_num"> {{ message_number }} </view>
			</view>
		</view>
		<view class="content" :style="[{'top':menuBottom+10+'px'}]">
			<!-- 左边导航条 -->
			<scroll-view class="left" scroll-y :style="[{'height':height-menuBottom-10+'px'}]">
				<view v-if="leftList.length>0" @tap="categoryClickMain(item.id,index)"
				 :class="index==btnnum?'btna':''" 
				 v-for="(item,index) in leftList" :key="index">
					<view class="left_item">{{item.name}}</view>
					<view class="show_line" :class="index==btnnum?'line_show':''"></view>
				</view>
			</scroll-view>
			<!-- 右边内容 -->
			<scroll-view class="rightContent" scroll-y  :style="[{'height':height-menuBottom-10+'px'}]"
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
							<swiper class="swiper-boxs" :style="'height:'+rightswiperHeight+'rpx'" :current="tabIndex" @change="tabChange">
								<swiper-item style="height: 100%;padding-top: 24rpx;" v-for="(items,index) in tabBars" :key="index">
									<scroll-view scroll-y class="list">
										<template>
											<block>
												<view class="detailed-goods" v-if="newslist.length>0">
													<goodsShow :requestUrl='requestUrl' 
													 :borderRadius=24 :width=260
													 :porductList='newslist' ></goodsShow>
												</view>
												<view class="no_have_new_list" v-else>
													<image class="hint_img" src="https://xcx.hmzixin.com/upload/images/3.0/no_comment.png" mode="widthFix">
													</image>
													<view class="no-have_hint">暂无相关商品</view>
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
				<view class="right_content" v-else :style="[{'height':height-menuBottom-30+'px'}]">
					<!-- 空 -->
					<view class="no-have-porduct" v-if="classfyList.length==0">
						<image src="https://xcx.hmzixin.com/upload/images/3.0/no_comment.png"></image>
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
	import goodsShow from "../../components/goodsShow.vue"
	export default {
		components: {
			topBar,
			swiperTabHead,
			goodsShow
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				cart_number: 0, //购物车数量
				message_number: 0, //消息
				topSearchContent: '', //头部搜索框的推荐内容
				height: 0,
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
				rightswiperHeight: 650, //右边的滑动元素高度
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
			// 判定运行平台
			let platform = getApp().platform || getApp().globalData.platform
			if (platform == 'Applets') {
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
			}
			else if (platform == 'APP'){
				that.menuWidth = 90
				that.menuTop = 20
				that.menuHeight = 30
				that.menuLeft = 278
				that.menuBottom = 50
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
							if(that.rightswiperHeight==0){
								that.rightswiperHeight = 900
							}
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
							if(that.rightswiperHeight==0){
								that.rightswiperHeight = 900
							}
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
			},
			top_go:function(info){
				if(info=='cart'){
					uni.navigateTo({
						url: `/pages/cart/cart`,
					})
				}
				else if(info=='message'){
					uni.navigateTo({
						url: '/pages/message/message',
					})
				}
				else if(info=='search'){
					uni.navigateTo({
						url: `/pages/search/search`,
					})
				}
			}
		}

	}
</script>

<style scoped>
	.goods_top_tar{
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9;
		background-color: #000000;
		width: 100%;
		color: #FFFFFF;
		display: flex;
		align-items: center;
	}
	.left_input{
		width: 50%;
		background-color: #FFFFFF;
		margin-left: 20rpx;
		position: relative;
	}
	.search-icon{
		position: absolute;
		left: 20rpx;
		width: 40rpx;
		height: 40rpx;
		top: 10rpx;
	}
	.cart_info,.message_info{
		margin-left: 20rpx;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.message_info{
		margin-left: 30rpx;
	}
	.cart_img,.message_img{
		width: 46rpx;
		height: 46rpx;
	}
	.cart_num,.message_num{
		position: absolute;
		right: -10rpx;
		top: -10rpx;
		width: 30rpx;
		height: 30rpx;
		border-radius: 15rpx;
		background-color: #fa3475;
		color: #FFFFFF;
		font-size: 16rpx;
		line-height: 30rpx;
		text-align: center;
	}
	.goods_classify {
		height: 100%;
		background-color: #f6f6f6;
	}

	.content {
		display: flex;
		position: fixed;
		left: 0;
		width: 100%;
	}

	.left {
		width: 190rpx;
		line-height: 100rpx;
		font-size: 30rpx;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		font-size: 24rpx;
	}

	.btna {
		font-size: 28rpx;
		width: 190rpx;
		color: #fa3576;
		background-color: #f6f6f6;
		font-weight: bolder;
		position: relative;
	}
	.left_item{
		padding-left: 30rpx;
	}
	.show_line{
		width: 6rpx;
		height: 16rpx;
		background-color: #FA3576;
		position: absolute;
		top: 42rpx;
		left: 20rpx;
		display: none;
	}
	.line_show{
		display: block;
	}

	/* 右边 */
	.rightContent {
		flex: 1;
		height: 100%;
		padding-left: 10rpx;
		padding-right: 20rpx;
		background-color: #f6f6f6;
	}

	.rightContentItem {
		padding-top: 10rpx;
	}
	.right-swiper,.right-swiper image{
		height: 180rpx;
	}

	.no-have-porduct {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.no-have-porduct image {
		width: 400rpx;
		height: 254rpx;
	}
	.have-porduct-item{
		margin-top: -20rpx;
		padding-top: 10rpx;
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
	.no_have_new_list{
		width: 100%;
		height: 1000rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: #fa3475;
	}
	.hint_img{
		width: 350rpx;
	}
	
</style>
