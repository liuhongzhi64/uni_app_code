<template>
	<view class="content">
		<topBar class="topBar" :barName='barName' :topBackgroundColor='topBackgroundColor' :BarImgs='BarImgs' :menuWidth='menuWidth'
		 :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom' :cartNumber='cartNumber'
		 :messageNumber='messageNumber' :topSearchContent='topSearchContent'></topBar>
		<!-- 主体内容 -->
		<view class="subject-content" :style="[{'padding-top':menuBottom+42+'px'}]">
			<view class="end-title" v-if="skipList.length>0">
				<scroll-view class="endtitleitem" scroll-x="true" :style="{backgroundColor:topBackgroundColor}">
					<view id="scroll-view-item" class="endtitleitem_H endtitleitemTitle" v-for="(item,index) in skipList" :key='index'
					 :class="{btna:btnnum == index}" @tap="change(index)">
						{{ item.title}}
					</view>
				</scroll-view>
				<!-- 分类 -->
				<view class="goods_classify" :style="{backgroundColor:topBackgroundColor}">
					<view class="goods_classify" @click="gotoClassify">
						<view class="classifyImg">
							<image src="../../static/images/barcClassify.png" mode=""></image>
						</view>
						<view class="classifytext">分类</view>
					</view>
				</view>
			</view>
			<!-- 主体内容 -->
			<view class="end-cont" :class="{dis:btnnum == index}" v-for="(items,index) in skipList" :key="index" :style="{backgroundColor:topBackgroundColor}">
				<scroll-view scroll-y class="list">
					<template>
						<view class="top-content">
							<!-- 轮播 -->
							<view id="top-swiper" v-if="swiperList.length>0">
								<swiper class="swiper" indicator-dots indicator-active-color="#ffffff" autoplay :interval="topInterval"
								 :duration="topDuration" circular>
									<swiper-item v-for="(i,index) in swiperList" :key="index">
										<view class="swiper-item swiper-img">
											<image :src="requestUrl+swiperList.img" mode=""></image>
										</view>
									</swiper-item>
								</swiper>
							</view>
							<!-- 认证 -->
							<view id="certification" class="certification" v-if="honor_list">
								<view class="certifications" v-for="(i,index) in honor_list" :key="index">
									<view class="certificationimgs">
										<image src="../../static/images/1.png" mode=""></image>
									</view>
									<view>{{i}}</view>
								</view>
							</view>
							<!-- 自定义导航条 -->
							<view id="tabBarSwiper" v-if="tabBarSwiperList" class="swiperContent">
								<swiper :duration="tabDuration" class="swiper-box" @change="changeSwiperDot">
									<swiper-item class="tabBarSwiper" v-for="(item,index) in barSwiperList" :key="index">
										<view v-for="(i,index) in item" :key="index" class="tabBarSwiperItem" :data-goods="i.name" @tap="goToGoodsList">
											<view class="icon">
												<image :src="requestUrl+i.img" mode=""></image>
											</view>
											<view class="text"> {{i.title}} </view>
										</view>
									</swiper-item>
								</swiper>
								<swiperDot class="dot" :current="currents" :list="barSwiperList"></swiperDot>
							</view>
							<!-- 全部广告位 -->
							<view class="advertisingAll"
							 :style="[{backgroundImage:'url('+advertisingAllUrl+')',backgroundColor:advertisingAllColor}]"
							 style="width: 100%;height: 100%;background-size: 100% 100%;" 
							 v-for="(item,index) in advertisingList.content" :key='index'>
								<!-- 广告位01 -->
								<view  v-show="advertisingList.type==3" v-for="(i,k) in item" :key='k'>
									<view class="advertising">
										<image class="advertisImg" :src="requestUrl+i.img" mode=""></image>
									</view>
								</view>
								<!-- 广告位03 -->
								<!-- <view id="advertising03" class="advertisingItem">
									<view class="advertising03" v-for="(i,k) in item.advertisingList" :key='k'>
										<view class="advertisingItems">
											<view class="advertisingTitle">
												{{i.title}}
											</view>
											<view class="advertisingContent">
												{{i.content}}
											</view>
											<view class="advertisingButton">
												立即购买
											</view>
										</view>
										<view class="advertisingImg">
											<image :src="i.backgroungUrl" mode=""></image>
										</view>
									</view>
								</view> -->

								<!-- 广告位04 -->
								<!-- <view id="scroll-view_H">
									<scroll-view class="scroll-view-item-Y" scroll-x="true" @scroll="scroll" scroll-left="0" enable-flex='true'>
										<view id="scroll-view-item" class="scroll-view-item_H" v-for="(i,k) in item.scrollViewItemYList" :key='k'
										 :data-name="i.name+i.content" @tap="gotoGoods">
											<view class="scrollAll">
												<view class="scrollText">
													<view class="scrollTextName">
														{{i.name}}
													</view>

													<view class="scrollTextContent">
														{{i.content}}
													</view>
													<view class="scrollTextGo">
														GO!
													</view>
												</view>
												<view class="scrollImg">
													<img :src="i.url"></img>
												</view>
											</view>

										</view>
									</scroll-view>
								</view> -->

								<!-- 签到红包 -->
								<!-- <view class="signIn-red-packet">
									<view class="sign-in-red-packet">
										<view class="title"> 每日签到 </view>
										<view class="red-packet"> 即可领取 <text>现金红包</text>等大奖 </view>
									</view>
									<view class="all-red-packet">
										<scroll-view class="all-red-packet-items" scroll-x="true" @scroll="scroll">
											<view id="all-red-packet-item" class="all-red-packet-item" v-for="(i,k) in item.redPacketList" :key='k'
											 :class="{pitchOn:item.btnnum == k}" @click="changeRedpacket(k)">
												<view :id="'all-red-packet-item'+k" class="red-packe-Items">
													<view class="Imgs"> </view>
													<view class="red-packe-ItemsContent" :class="{pitchOnItemsConten:item.btnnum == k}">
														{{i}}
													</view>
												</view>
											</view>
										</scroll-view>
									</view>
								</view> -->
							</view>
						</view>
					</template>
				</scroll-view>
			</view>
		</view>

		<!-- 自定义导航条加倒计时 -->
		<view id="countDown" v-if="seckill_module">
			<view class="countDown">
				<!-- 自定义名称和时间倒计时 -->
				<view class="timeTitle-time">
					<view class="timeTitle"> {{seckill_module.name}} </view>
					<!-- 倒计时 -->
					<view class="time" v-if="seckill_module.countdwon_format==1">
						<view class="house">
							<view class="houses"> {{day}} </view>
							<view class="dots"> : </view>
						</view>
						<view class="house">
							<view class="houses"> {{house}} </view>
							<view class="dots"> : </view>
						</view>
						<view class="second">
							<view class="seconds"> {{ second }} </view>
							<view class="dots"> : </view>
						</view>
						<view class="minute">
							<view class="minutes"> {{ minute }} </view>
						</view>
					</view>
					<view class="time" v-else-if="seckill_module.countdwon_format==2">
						<view class="house">
							<view class="houses"> {{house}} </view>
							<view class="dots"> : </view>
						</view>
						<view class="second">
							<view class="seconds"> {{ second }} </view>
							<view class="dots"> : </view>
						</view>
						<view class="minute">
							<view class="minutes"> {{ minute }} </view>
						</view>
					</view>
				</view>
				<!-- 全部 -->
				<view class="all">
					全部 >
				</view>
			</view>

			<!-- 图片商品 -->
			<view class="productImg">
				<porduct :width=240 :requestUrl='requestUrl' :height=370 :crosswisePorducts='productImgList'></porduct>
			</view>
		</view>
		<!-- 自定义导航条可滑动 -->
		<scroll-view id="image" class="customTab">
			<view class="tabBarList">
				<scroll-view class="bar-items" scroll-x="true">
					<view class="tab-all-item">
						<view class="tab-item" v-for="(i,index) in tabBars" :key='index' :class="{'changeTab' : tabIndex==index}" @tap="tabtap(index,i.type)">
							<text class="tab-item-title"> {{i.title}} </text>
							<text class="tab-item-name"> {{i.name}} </text>
							<view class="tab-line" v-if="index<4"></view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="uni-tab-bar">
				<swiper class="swiper-boxs" :style="{height:swiperheight+'rpx'}" :current="tabIndex" @change="tabChange">
					<swiper-item v-for="(items,index) in tabBars" :key="index">
						<scroll-view scroll-y class="list">
							<template>
								<block>
									<view class="recommenListItem">
										<goodsShow :borderRadius=24 :requestUrl='requestUrl' :width=350 :porductList='newslist' v-if='items.type==0||items.type==4'>
										</goodsShow>
										<diary :diaryList="newslist" :requestUrl='requestUrl' v-else-if="items.type==2"></diary>
										<doctor :doctorList="newslist" :requestUrl="requestUrl" :paddingLR='paddingLR' @collectLike='collectLike'
										 @cancelLike='cancelLike' v-else-if="items.type==1">
										</doctor>
									</view>
								</block>
							</template>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</scroll-view>
		<!-- 底部 -->
		<!-- <view class="footer">
			——人家也是有底线的喵！——
		</view> -->
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import swiperDot from "../../components/swperDot.vue";
	import porduct from "../../components/porduct.vue";
	import goodsShow from "../../components/goodsShow.vue";
	import diary from '../../components/diary.vue';
	import doctor from '../../components/doctorShow.vue'
	export default {
		components: {
			swiperDot,
			topBar,
			porduct,
			goodsShow,
			diary,
			doctor
		},
		data() {
			return {
				barName: 'mianPage', //页面名称
				topBackgroundColor: "#5D060E", //顶部导航条背景颜色
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				BarImgs: '../static/images/0.png', //
				cartNumber: 3, //购物车数量
				messageNumber: 19, //消息
				topSearchContent: '华美整呗手动挡擦拭你快点好说的水电费打法就第三方都是十点多', //头部搜索框的推荐内容
				marginTopBar: 0, //距离顶部的距离
				btnnum: 0,
				requestUrl: '',
				skipList: [], //头部导航条
				topInterval: 5000,
				topDuration: 2000,
				swiperList: [], //顶部轮播
				honor_list: [],
				tabDuration: 3000,
				tabBarSwiperList: [], //中部icon
				barSwiperList:[],
				currents: 0,
				seckill_module: {}, //秒杀模块
				times: 0,
				day: 0,
				house: 0,
				second: 0,
				minute: 0,
				tabBars: [{
						type: 4,
						title: '精选',
						name: '猜你喜欢'
					},
					{
						type: 0,
						title: '护肤品',
						name: '品质推荐'
					},
					{
						type: 3,
						title: '直播',
						name: '精选视频'
					},
					{
						type: 1,
						title: '视频',
						name: '精选视频'
					},
					{
						type: 2,
						title: '日记',
						name: '优质内容'
					},
				],
				tabIndex: 1, // 选中的
				swiperheight: 0, //高度
				productImgList: [],
				newslist: [],
				paddingLR: 10, //拜托医生的左右边距
				advertisingList:{},//广告
			}
		},
		onReady() {
			let that = this;
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
		onLoad(options) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.getIndexDetail()
			that.tabtap(0, 4)
			
			// uni.setStorage({
			// 	key: 'token',
			// 	data: 'hello',
			// 	success: function() {
			// 		console.log('保存成功');
			// 	}
			// })
			// uni.getStorage({
			// 	key: 'token',
			// 	success: function(res) {
			// 		console.log(res.data);
			// 	}
			// })
		},
		// 下拉刷新
		onPullDownRefresh: function() {
			let that = this
			success: {
				title: '刷新成功',
				this.request.showToast('刷新成功')
				// console.log('下拉刷新成功')
				that.getIndexDetail()
				that.tabtap(0, 4)
			};
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			// 获取首页信息
			getIndexDetail: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'index'
				}
				that.request.uniRequest("home", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.topBackgroundColor = data.background
						//导航栏
						if(data.top_navigation){
							that.skipList = data.top_navigation
						}	
						that.swiperList = data.banner.content//首页banner 
						that.honor_list = data.honor_list //荣誉列表
						//中部icon
						if(data.icon_list){
							that.tabBarSwiperList = data.icon_list
							that.barSwiperList = that.group(that.tabBarSwiperList, 10)
							// if (that.tabBarSwiperList.length > 10) {
							// 	that.barSwiperList = that.group(that.tabBarSwiperList, 10)
							// }
						}	
						// 中部广告
						if(data.centre_advertising){
							that.advertisingList = data.centre_advertising
						}					
						that.seckill_module = data.seckill_module //秒杀模块
						that.times = that.seckill_module.rest_time //倒计时秒数
						that.productImgList = that.seckill_module.act_goods_list //活动商品
						// that.setTime()
						console.log(data,22222222)
					} else {
						// this.request.showToast('暂时没有数据')
						console.log('11111111')
					}
				})
			},
			// 开启定时器
			setTime: function() {
				let that = this
				if (that.times <= 0) {
					let text = '活动结束'
				} else {
					// that.setTimes()
					that.day = parseInt(that.times / 1000 / 60 / 60 / 24)
					that.house = parseInt(that.times / 1000 / 60 / 60 % 24)
					that.second = parseInt(that.times / 1000 / 60 % 60)
					that.minute = parseInt(that.times / 1000 % 60)
					setInterval(function() {
						that.minute = that.minute - 1
						if (that.minute == 0) {
							that.minute = 59
							that.second = that.second - 1
							if (that.second == 0) {
								that.second = 59
								that.house = that.house - 1
								if (that.house == 0) {
									that.house = 59
									if (that.day > 0) {
										that.day = that.day - 1
									} else {
										that.day = 0
										that.house = 0
										that.second = 0
										that.minute = 0
									}
								}
							}
						}

					}, 1000)
				}

			},
			
			
			// 分割数组
			group: function(array, subGroupLength) {
				let index = 0;
				let newArray = [];
				while (index < array.length) {
					newArray.push(array.slice(index, index += subGroupLength));
				}
				return newArray;
			},

			change: function(index) {
				this.btnnum = index
			},
			// 轮播的指示点
			changeSwiperDot: function(e) {
				this.currents = e.detail.current;
			},
			// 签到红包
			changeRedpacket: function(index) {
				console.log(index)
			},
			// 分类
			gotoClassify: function(e) {
				uni.switchTab({
					url: `/pages/goods/goods_classify`,
				})
			},
			// 商品列表
			goToGoodsList: function(e) {
				let goodsList = e.currentTarget.dataset.goods
				// console.log(e.currentTarget.dataset)
				uni.navigateTo({
					url: `/pages/goods/goods_list?goodsname=${goodsList}`,
				})
			},

			// 点击商品
			gotoGoods: function(e) {
				let goods = e.currentTarget.dataset.name
				uni.navigateTo({
					url: `/pages/goods/goods_detail?goods=${goods}`,
				})
			},
			// 设置底部导航条的名称和图标
			setTabBarItem: function(e) {
				// 这是动态设置底部导航条的函数，详情见https://uniapp.dcloud.io/api/ui/tabbar?id=settabbaritem
				uni.setTabBarItem({
					index: 0,
					text: '首页',
					"iconPath": "static/images/index.png",
					"selectedIconPath": "static/images/idnex1.png",
				})
				uni.setTabBarItem({
					index: 1,
					text: '分类',
					"iconPath": "static/images/doctor.png",
					"selectedIconPath": "static/images/doctor1.png",
				})
			},
			//接受子组件传过来的值点击切换导航
			tabtap: function(index, type) {
				let that = this
				this.tabIndex = index;
				if (type == 4) {
					let dataInfo = {
						interfaceId: 'userrecommendedgoodsspulist',
						type: '0',
						offset: 0
					}
					that.request.uniRequest("goods", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							that.newslist = data
							setTimeout(() => {
								that.swiperheight = Math.ceil(that.newslist.length / 2) * 750
							}, 1000)
							// console.log(data)
						}
					})
				} else {
					let dataInfo = {
						interfaceId: 'siftlist',
						type: type,
						offset: 0,
						limit: 6
					}
					that.request.uniRequest("home", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							that.newslist = data
							setTimeout(() => {
								that.swiperheight = Math.ceil(that.newslist.length / 2) * 750
							}, 1000)
							// console.log(data)
						}
					})
				}
			},
			// 选中的内容
			tabChange: function(e) {
				let that = this
				that.tabIndex = e.detail.current;
				let index = e.detail.current
				let type = 0
				// console.log(e,"我想要的是")
				if (index == 0) {
					type = 4
				} else if (index == 1) {
					type = 0
				} else if (index == 2) {
					type = 3
				} else if (index == 3) {
					type = 1
				} else {
					type = 2
				}
				if (type == 4) {
					let dataInfo = {
						interfaceId: 'userrecommendedgoodsspulist',
						type: that.tabType,
						offset: 0
					}
					that.request.uniRequest("goods", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							that.newslist = data
							setTimeout(() => {
								that.swiperheight = Math.ceil(that.newslist.length / 2) * 750
							}, 1000)
							console.log(data)
						}
					})
				} else {
					let dataInfo = {
						interfaceId: 'siftlist',
						type: type,
						offset: 0,
						limit: 6
					}
					that.request.uniRequest("home", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							that.newslist = data
							setTimeout(() => {
								that.swiperheight = Math.ceil(that.newslist.length / 2) * 750
							}, 1000)
							console.log(data)
						}
					})
				}
			},
			// 点赞
			collectLike: function(id) {
				let videoId = id
				let data = {
					interfaceId: 'video_collect',
					video_id: videoId,
					status: '0'
				}
				this.request.uniRequest("/doctor", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						this.request.showToast('成功')
					}
				})
			},
			// 取消点赞
			cancelLike: function(id) {
				let videoId = id
				let data = {
					interfaceId: 'video_collect',
					video_id: videoId,
					status: '1'
				}
				this.request.uniRequest("/doctor", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						this.request.showToast('成功')
					}
				})
			},
		}
	}
</script>

<style scoped>
	.endtitleitem {
		overflow: hidden;
		white-space: nowrap;
	}

	.endtitleitem_H {
		display: inline-block;
		text-align: center;
		padding-left: 40rpx;
		color: #F1F1F1;
	}

	.endtitleitemTitle {
		font-size: 24rpx;
	}

	.end-title {
		display: flex;
		height: 68rpx;
		line-height: 68rpx;
		justify-content: space-between;
		padding: 10rpx 0 0;
	}

	.end-title view {
		text-align: center;
	}

	.end-cont {
		display: none;
	}

	.btna {
		color: #FFFFFF;
		font-weight: bolder;
		font-size: 40rpx;
	}

	.dis {
		display: block;
	}

	.goods_classify {
		width: 160rpx;
		display: flex;
		font-weight: bolder;
		font-size: 40rpx;
		text-align: center;
		padding: 0 10rpx;
		color: #FFFFFF;
	}

	.goods_classify image {
		width: 26rpx;
		height: 26rpx;
		margin-right: 10rpx;
	}

	.swiper {
		text-align: center;
		color: #FFFFFF;
		height: 280rpx;
	}

	.swiper-box {
		padding-bottom: 20rpx;
	}

	.certification {
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		color: #333333;
		line-height: 30rpx;
		padding: 0 10rpx;
	}

	.certifications {
		display: flex;
	}

	.certificationimgs image {
		width: 18rpx;
		height: 18rpx;
	}

	.tabBarSwiper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		color: #333333;
		/* height: 270rpx; */

	}

	.swiperContent {
		position: relative;
		padding-bottom: 20rpx;
	}

	.dot {
		position: absolute;
		bottom: 0rpx;
		right: 340rpx;
	}

	.tabBarSwiperItem {
		width: 17%;
		text-align: center;
		height: 130rpx;
		padding: 5rpx 10rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		font-size: 20rpx;
	}

	.swiper-img {
		height: 260rpx;
	}

	.swiper-img image {
		height: 260rpx;
		border-radius: 20rpx;
		background-color: #FFFFFF;
	}

	.icon image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 40rpx;
		border: 1rpx solid #FFFFFF;
	}

	/* 广告位 */
	.advertisingAll {
		padding-bottom: 20rpx;
	}

	.advertising {
		height: 210rpx;
		text-align: center;
		margin-top: 20rpx;
	}

	.advertisImg {
		height: 210rpx;
		background-color: #FFFFFF;
	}

	.advertisingItem {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		height: 210rpx;
		background-color: #FFFFFF;
		width: 710rpx;
		margin: 20rpx auto;
		border-radius: 20rpx;
		align-items: center;
		justify-content: space-between;
	}

	.advertising03 {
		width: 320rpx;
		height: 156rpx;
		display: flex;
		justify-content: center;

	}

	.advertising03 image {
		width: 172rpx;
		height: 156rpx;
		margin-left: 10rpx;
	}

	.advertisingTitle {
		font-size: 20rpx;
		line-height: 30rpx;
		letter-spacing: 1rpx;
		color: #111111;
	}

	.advertisingContent {
		color: #da2820;
		line-height: 24rpx;
		width: 105rpx;
	}

	.advertisingButton {
		width: 127rpx;
		line-height: 40rpx;
		color: #ffffff;
		background-color: #8C0009;
	}

	.advertising02 {
		width: 49%;
	}

	.sign-in-red-packet {
		display: flex;
		line-height: 60rpx;
		font-size: 32rpx;
		/* padding-left: 20rpx; */
		background-color: #FFFFFF;
	}

	.red-packet {
		font-size: 24rpx;
		color: #999999;
		margin-left: 10rpx;
		font-family: MicrosoftYaHei-Bold;
	}

	.red-packet text {
		color: #cb1c1c;
	}

	.all-red-packet-items {
		width: 100%;
		height: 100rpx;
		overflow: hidden;
		white-space: nowrap;
		display: flex;
		padding: 0 0 30rpx;
	}

	.signIn-red-packet {
		/* height: 200rpx; */
		width: 670rpx;
		padding: 20rpx 20rpx 0;
		background-color: #FFFFFF;
		margin: 20rpx auto;
		border-radius: 20rpx;
	}

	.all-red-packet-item {
		display: inline-block;
		width: 74rpx;
		height: 92rpx;
		background-color: #ffbea7;
		border-radius: 10rpx;
		margin-right: 20rpx;
	}

	.pitchOn {
		width: 82rpx;
		display: inline-block;
		height: 100rpx;
		background-color: #ff3d3d;
		border-radius: 10rpx;
		color: #FFFFFF;
	}

	.pitchOnItemsConten {
		width: 44rpx;
		height: 44rpx;
		background-color: #ffc825;
		border-radius: 22rpx;
		margin-left: 5rpx;
	}

	.red-packe-Items {
		white-space: normal;
		display: flex;
		width: 74rpx;
		height: 100rpx;
		text-align: center;
		align-items: center;
		margin-left: 18rpx;
	}

	.red-packe-ItemsContent {
		width: 40rpx;
		height: 40rpx;
		border-radius: 20rpx;
		font-size: 22rpx;
		background-color: #ffedb8;
	}

	.all {
		line-height: 80rpx;
		;
	}

	.advertisingItems {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		font-size: 20rpx;
	}

	.scroll-view-item-Y {
		width: 710rpx;
		margin: 0 auto;
		height: 160rpx;
		overflow: hidden;
		white-space: nowrap;
		display: flex;
		justify-content: space-between;
		background-color: #FFFFFF;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 230rpx;
		height: 160rpx;
		font-size: 20rpx;
		margin-right: 20rpx;
		text-align: center;
	}

	.scrollAll {
		display: flex;
		justify-content: space-between;
		white-space: normal;
		background-color: #ffb222;
		color: #ffffff;
		width: 230rpx;
		height: 160rpx;
		border-radius: 20rpx;
	}

	.scrollText {
		/* width: 160rpx;	 */
		padding: 10rpx;
		position: relative;
		left: 0;
		z-index: 20;
	}

	.scrollTextContent {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-height: 22rpx;
		width: 120rpx;
	}

	.scrollTextGo {
		height: 26rpx;
		border-radius: 13rpx;
		background-color: #e87a07;
		width: 60rpx;
		line-height: 26rpx;
		font-size: 22rpx;
		margin-top: 15rpx;
		margin-left: 15rpx;
	}

	.scrollTextName {
		font-size: 30rpx;

	}

	.scrollImg {
		position: relative;
		right: 100rpx;
		top: -40rpx;
		z-index: 10;

	}

	.scrollImg img {
		width: 204rpx;
		height: 204rpx;
	}

	/* 倒计时自定义名称 */
	.countDown {
		display: flex;
		justify-content: space-between;
		padding: 0 40rpx;
		font-size: 25rpx;
		text-align: center;
		line-height: 60rpx;
	}

	.productImg {
		padding-bottom: 40rpx;
		padding-left: 40rpx;
		margin-top: -10rpx;
	}

	.timeTitle-time {
		display: flex;
		justify-content: space-between;
		font-size: 40rpx;
		text-align: center;
	}

	.time {
		display: flex;
		padding: 10rpx 10rpx 0;
	}

	.time .dots {
		font-size: 20rpx;
		color: #fa3475;
		line-height: 55rpx;
		margin-left: 12rpx;
		font-weight: bolder;
	}

	.timeTitle {
		line-height: 80rpx;
		font-size: 32rpx;
		color: #212121;
	}

	.house,
	.minute,
	.second {
		display: flex;
		font-size: 30rpx;
		margin-left: 10rpx;

	}

	.houses,
	.seconds,
	.minutes {
		width: 30rpx;
		height: 30rpx;
		line-height: 30rpx;
		background-color: #fa3475;
		border-radius: 4rpx;
		border: solid 1rpx #fa3475;
		margin-top: 12rpx;
		text-align: center;
		font-size: 20rpx;
		color: #FFFFFF;
	}

	/* 导航条 */
	.customTab {
		height: auto;
		background-color: #F6F6F6;
	}

	.tabBarList {
		width: 100%;
	}

	.bar-items {
		overflow: hidden;
		white-space: nowrap;
	}

	.tab-all-item {
		display: flex;
		align-items: center;
		padding: 30rpx 0;
	}

	.tab-item .tab-item-title {
		font-size: 28rpx;
	}

	.tab-item {
		padding: 0 45rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #666666;
		font-size: 24rpx;
		position: relative;
	}

	.tab-line {
		height: 32rpx;
		width: 1rpx;
		background-color: #666666;
		position: absolute;
		right: 0;
		top: 25%;
	}

	.changeTab {
		color: #fa3475;
	}

	.changeTab .tab-item-title {
		font-size: 32rpx;
		font-weight: bold;
	}

	/* 推荐内容 */
	.recommenListItem {
		border-radius: 24rpx;
		padding: 0 20rpx;
	}

	.footer {
		text-align: center;
		font-size: 30rpx;
		color: #2e2e2e;
	}
</style>
