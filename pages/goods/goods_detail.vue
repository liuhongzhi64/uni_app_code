<template>
	<view class="goods_detail" >
		<view class="top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px','background-color':topBackgroundColor,'color':color}]">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back" @click="goBack">
					<image :src="backImage" mode=""></image>
				</view>
				<view class="title"> {{title}} </view>
			</view>
		</view>
		<!-- 主体内容 @touchmove.stop.prevent="moveHandle" -->
		<view class="content" >			
			<scroll-view scroll-y  :style="[{'padding-top':menuBottom+10+'px'}]">
				<!-- 头部轮播 -->
				<view class="topSwiper">
					<view id="topSwiper">
						<swiper class="top-swiper" indicator-dots indicator-active-color="#ffffff" autoplay :interval='intervalTime'
						 :duration="durationTime" circular>
							<swiper-item class="all-top-swiper-item" v-if="contentList.video_list">
								<view class="video">
									视频
								</view>
								<!-- <video class="video" :src="requestUrl+contentList.video_list"></video> -->
								<!-- <image :src="requestUrl+contentList.sku.act.banner" mode="widthFix"></image> -->
							</swiper-item>
							<swiper-item class="all-top-swiper-item" v-for="(i,k) in swiperList" :key="k">
								<view class="top-swiper-item">
									<image class="banner-img" :src="requestUrl+i" lazy-load='true' mode="widthFix"></image>
								</view>
								<image class="top-banner" :src="requestUrl+'upload/pages/images/202010/23/mBGXkqPtH3wIYbl9pd2oRJr2XuvTO4pmeNYJEsg6.jpeg'"
								 mode="widthFix"></image>
								<!-- <image :src="requestUrl+contentList.sku.act.banner" mode="widthFix"></image> -->
							</swiper-item>
						</swiper>
					</view>
				</view>
				<!-- 活动节日 -->
				<view class="activity" v-if='advertisingList.type==2'>
					<image :src="requestUrl+item.img" mode="widthFix" v-for="(item,index) in advertisingList.content" :key='index'></image>
					<!-- <image src="https://xcx.hmzixin.com/upload/images/3.0/4.jpg" mode="widthFix"></image> -->
				</view>
				<!-- <view class="particulars-image"  v-if='advertisingList.type==0' >
					<image :src="requestUrl+item.img" mode="" v-for="(item,index) in advertisingList.content" :key='index'></image>
				</view>
				<view class="adverting-swpier" v-if="advertisingList.type==1">
					<swiper class="top-swiper" indicator-dots  autoplay  circular>
						<swiper-item v-for="(i,k) in advertisingList.content" :key="k">
							<view class="top-swiper-item">
								<image class="banner-img" :src="requestUrl+i.img" lazy-load='true'></image>
							</view>
						</swiper-item>
					</swiper>
				</view> -->
				<!-- 价格、优惠卷、提醒、介绍、领取的卷介绍 -->
				<view class="products-introduction">
					<view class="price-depreciate-collect">
						<!-- 现在价格、会员价 -->
						<view class="price" v-if="contentList.sku.sale_price">
							<view class="new-price">
								<text>￥</text>{{contentList.sku.sale_price}}
							</view>
							<!-- <view class="VIP-price">
								<view class="VIP-name"> 钻卡 </view>
								<text>￥38800</text>
							</view> -->
						</view>
						<!-- 降价通知、收藏 -->
						<view class="depreciate-collect">
							<view class="depreciate" v-if="contentList.share_able==1">
								<view class="remind-images">
									<image src="https://xcx.hmzixin.com/upload/images/3.0/icon_wechat.png" mode=""></image>
								</view>
								<view class="remind-text"> 分享 </view>
							</view>
							<view class="collect">
								<view class="collect-images">
									<image v-if="contentList.is_collect == 0" src="https://xcx.hmzixin.com/upload/images/3.0/collect.png"></image>
									<image v-if="contentList.is_collect == 1" src="https://xcx.hmzixin.com/upload/images/3.0/collect_hover.png"></image>
								</view>
								<view class="collect-text"> 收藏 </view>
							</view>
						</view>
					</view>
					<!-- 以前的价格 -->
					<view class="market-price"> 市场价 <text>￥{{contentList.sku.market_price}}</text> </view>
					<!-- 热卖提醒 -->
					<view class="hot-sale-remind" v-if="contentList.sku.act.length>0">
						<view class="hot-sale-content">
							<view class="hot-sale"> 预热中 </view>
							<view class="hot-sale-recommend"> 该商品6月18日 9:00:00开始售卖哦~ </view>
						</view>
						<view class="remind-me" @tap='subscribe'> 提醒我 </view>
					</view>
					<!-- 商品名称 -->
					<view class="prouct-name">
						<!-- <text class="label-name"> 618特惠 </text> -->
						<text class="all-goods_name"> {{contentList.goods_name}}</text>
					</view>
					<view class="sale-content">
						<view>成都市</view>
						<view class="red">好评率:{{contentList.rate}}%</view>
						<view>已售：{{contentList.sku.take_store}}</view>
					</view>
					<!-- 活动文案 -->
					<view class="get-coupon" v-if="contentList.sku.details_prompt"> {{contentList.sku.details_prompt}} </view>
				</view>
				<!-- 优惠活动 -->
				<view class="discounts" v-if="contentList.sku.act.length>0">
					<view class="discounts-title">
						<view class="discounts-more"> 优惠 </view>
						<view class="more"> 更多 > </view>
					</view>
					<!-- 优惠政策 -->
					<!-- <view class="discounts-policy" v-for="(i,k) in discountsList" :key="k"> -->
					<view class="discounts-policy" v-for="(item,k) in contentList.sku.act.discounts" :key="k">
						<view class="policy-name"> {{item.name}} </view>
						<view class="policy-content" v-for="(i,index) in item.list" :key='index'> {{i}} </view>
					</view>
				</view>
				<!-- 版本、规格 -->
				<view class="specs">
					<template>
						<view class="specs-content" v-for="(item,index) in spec_value" :key="index">
							<view class="specs-title">
								{{item.name}} {{index}} <text class="specs-hint" v-if="!specsCont&&!defaultSpec">请选择{{item.name}}</text>
							</view>
							<view class="specs-cont">
								<view class="li" v-for="(is,sindex) in item.attr" :key="sindex"
								 :class="[shouldChangeList[0]==sindex?'li-hover':(shouldChangeList[1]==sindex?'isChange':(shouldChangeList[2]==sindex?'isChange':'li-gray'))]"
								 :data-index="index" @tap="changeSpecs(sindex)">
									{{is}} {{sindex}} 
								</view>
							</view>
						</view>
					</template>
				</view>
				<!-- 支付方式 -->
				<view class="specs">
					<view class="specs-cont-pay">
						<text class="pay-txt">支付方式</text>
						<view class="li" @tap='changePay(0)'
						 :class="[pay_type==0||pay_type==2?'li-hover':'']">
							预约金
						</view>
						<view class="li" @tap='changePay(1)'
						 :class="[pay_type==1||sku.pay_type==2?'li-hover':'']">
							全款付
						</view>
					</view>
				</view>
				<!-- 相关证书 -->
				<view class="certificate">
					<image src="https://xcx.hmzixin.com/upload/images/3.0/qualifications.jpg" mode="widthFix"></image>
				</view>
				<!-- 相关商品 -->
				<view class="related-products" v-if="relevantGoods.length>0">
					<view class="related-title">
						<view class="line"></view> 相关商品
					</view>
					<view class="related-products-item">
						<goodsShow :borderRadius=24 :requestUrl='requestUrl' :width=260 :crosswiseGoods='relevantGoods'>
						</goodsShow>
					</view>
				</view>
				<!-- 相关医生 -->
				<view class="related-doctor" v-if="doctorList.length>0">
					<view class="related-title">
						<view class="line"></view> 相关医生
					</view>
					<view class="related-doctor-item">
						<swiper class="doctor-swiper" indicator-dots indicator-active-color="#fa3475" indicator-color="#000000" :duration="doctorDurationTime"
						 circular>
							<swiper-item v-for="(item,index) in doctorList" :key="index">
								<view class="doctor-recommend" v-for="(i,k) in item" :key='k' @tap='goToDoctor(i.id,i.heading)'>
									<view class="doctor-top">
										<view class="doctor-head-portrait">
											<image :src="requestUrl+i.heading" mode="" lazy-load='true'></image>
										</view>
										<view class="doctor-abstract">
											<view class="doctor-name-recommend">
												<view class="doctor-name"> {{i.name}} </view>
												<view class="doctor-recommends"> {{ i.zhicheng }} </view>
											</view>
											<view class="doctor-synopsis"> {{ i.view }} </view>
											<view class="doctor-label-list">
												<view class="doctor-label" v-for="(i,k) in i.goods_project" :key='k'> {{i}} </view>
											</view>
										</view>
									</view>
									<view class="doctor-bottom">
										<view class="doctor-case"> 案例 <text class="text">{{i.case_num}}</text> </view>
										<view class="doctor-subscribe"> 预约 <text class="text">{{i.subscribe_num}}</text> </view>
										<view class="doctor-consult"> 咨询 <text>{{i.consult_num}}</text> </view>
									</view>
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
				<!-- 相关日记 -->
				<view class="related-diary" v-if="diaryList.length>0">
					<view class="diary-top">
						<view class="related-title">
							<view class="line"></view> 相关日记
						</view>
						<view class="diary-more"> 查看全部 > </view>
					</view>
					<view class="all-diary">
						<diary :diaryList="diaryList" :requestUrl='requestUrl'></diary>
					</view>
				</view>
				<!-- 问答 -->
				<view class="questions-answers" v-if="questionsAnswersList.length>0">
					<view class="diary-top">
						<view class="related-title">
							<view class="line"></view> 问答
						</view>
						<view class="diary-more"> 更多 > </view>
					</view>
					<view class="questions-answers-item" v-for="(i,k) in questionsAnswersList" :key="k">
						<view class="questions-and-content">
							<view class="questions"> 问 </view>
							<view class="questions-content"> {{i.contents}} </view>
						</view>
						<view class="answers"> {{i.answers}}个问答 </view>
					</view>
				</view>
				<!-- 评价 -->
				<view class="evaluate" v-if="evaluateList.length>0">
					<view class="diary-top">
						<view class="related-title">
							<view class="line"></view> 评价
						</view>
						<view class="diary-more"> 98%好评 </view>
					</view>
					<view class="evaluate-content" v-for="(item,index) in evaluateList" :key="index">
						<view class="evaluate-label">
							<view class="label-item" v-for="(i,k) in item.label" :key="k">{{i}}</view>
						</view>
						<view class="headPortrait-name">
							<view class="headPortrait">
								<image :src="requestUrl+item.head_ico" mode=""></image>
							</view>
							<view class="name-score">
								<view class="evaluate-user-name"> {{item.nick_name}} </view>
								<view class="score"> {{item.point}} </view>
							</view>
						</view>
						<view class="evaluate-details"> {{item.contents}} </view>
						<view class="effect-picture">
							<image :src="requestUrl+i" mode="" v-for="(i,k) in item.imgs_list" :key="k"></image>
						</view>
						<!-- <view class="trade-name"> {{i.tradename}} </view> -->
					</view>
				</view>
				<!-- 项目价格表 -->
				<view class="all-table" v-if="parameter.length>0">
					<view class="table-list" v-for="(item,index) in parameter" :key='index' v-show="item.title">
						<view class="table-title"> {{item.title}} </view>
						<view class="all-table-li">
							<view class="table-ul" v-for="(i,k) in item.data" :key='k'>
								<view class="table-li" v-for="(is,j) in i" :key='j'
								 :style="[{'width':i.length==2?'50%':(i.length==3?'33%':(i.length==4?'25%':'20%'))}]">
									{{is.val }}
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 详情 -->
				<view class="particulars">
					<view class="related-title">
						<view class="line"></view> 详情
					</view>
					<view class="particulars-image" v-for="(item,index) in spu_info" :key='index'>
						<image :src="requestUrl+item" mode="widthFix" lazy-load></image>
					</view>
				</view>
				<!-- 为你推荐 -->
				<view class="recommend-for-you" v-if="productLists.length>0">
					<view class="related-title">
						<view class="line"></view> 为你推荐
					</view>
					<view class="recommend-for-you-product">
						<goodsShow :borderRadius=24 :requestUrl='requestUrl' :width=350 :porductList='productLists'>
						</goodsShow>
					</view>
				</view>
			</scroll-view>									
		</view>
		<!-- 底部定位 -->
		<view class="consult-share-cart-addCart-shopNow">
			<!-- 咨询 -->
			<view class="consult">
				<view class="consult-image">
					<image class="icon-img" src="https://xcx.hmzixin.com/upload/images/3.0/icon_consult.png"></image>
				</view>
				<view class="consult-text"> 咨询 </view>
			</view>
			<!-- 分享 -->
			<view class="share">
				<view class="share-image">
					<image class="icon-img" src="https://xcx.hmzixin.com/upload/images/3.0/icon_share.png"></image>
				</view>
				<view class="share-text"> 分享 </view>
			</view>
			<!-- 购物车 -->
			<view class="cart" :data-cartNumber='carts' @tap="cart">
				<view class="cart-number">
					<view class="cartImg">
						<image class="icon-img" src="https://xcx.hmzixin.com/upload/images/3.0/icon_cart.png"></image>
					</view>
					<view class="cartNumber"> {{carts}} </view>
				</view>
				<view class="cart-text"> 购物车 </view>
			</view>
			<!-- 加入购物车 -->
			<view class="add-cart" @tap='addCard'> 加入购物车 </view>
			<!-- 立即购买 -->
			<view class="shop-now" @tap='shopNow'> 立即购买 </view>
		</view>
		<!-- 弹出的对话框 -->
		<cover-view class="isShow" v-if="isShow" >
			这是对话框
		</cover-view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import porduct from "../../components/porduct.vue";
	import goodsShow from "../../components/goodsShow.vue";
	import diary from '../../components/diary.vue';
	export default {
		components: {
			topBar,
			porduct,
			goodsShow,
			diary
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../../static/images/return.png',
				title: '商品详情',
				height: 0,
				contentList: [],
				pay_type:1,//支付方式  0预约金 1 全款 2 全选
				swiperList: [],
				intervalTime: 4000, //自动切换时间间隔
				durationTime: 2000, //	滑动动画时长
				spec_value: {},
				defaultSpec: '',
				carts: 3, //购物车
				discountsList: [{
						name: '限购',
						content: '该商品购买1件时享受单件￥19800，超出数量不再有效'
					},
					{
						name: '积分',
						content: '购买返积分'
					},
					{
						name: '喵豆',
						content: '购买返喵豆'
					},
					{
						name: '会员权益',
						content: '会员95折，并可与满减、券等优惠叠加使价格更加美丽'
					},
					{
						name: '优惠套装',
						content: '该商品共有1个优惠套装'
					},
					{
						name: '收单立减',
						content: '新人首单立减50元'
					},
				], //优惠政策
				productLists: [],
				doctorDurationTime: 1000,
				doctorList: [],
				diaryList: [],
				advertisingList: {},
				questionsAnswersList: [],
				evaluateList: [],
				spu_info: '',
				relevantGoods: [],
				requestUrl: '',
				specsCont: '',
				lastIndex: '',
				lastIndexs: 1,
				offset: 0 ,//分页起始位置
				parameter:[],//各种表
				encrypted_id:'',//加密商品skuid
				isShow:false,//显示对话框
				shouldChangeList:[],//可选规格版本
			}
		},
		onReachBottom: function() {
			let that = this;
			that.offset += 1;
			that.getLike()
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			// console.log(option)
			let sku_id = ''
			let encrypted_id = ''
			if (option.sku_id) {
				sku_id = option.sku_id
			} else {
				sku_id = '206'  //206 302
			}
			if (option.encrypted_id) {
				encrypted_id = option.encrypted_id
				that.encrypted_id = encrypted_id
			} else {
				encrypted_id = 'bG93ejhSWlgzaURseWZUcG1ZTDQ5QT09'  //  Z2VrMSs4RVJBeUlFZVJRMnM4T2pwQT09
				that.encrypted_id = encrypted_id
			}
			
			that.getGoodsDetail(sku_id, encrypted_id)
			that.getRelevantGoods(encrypted_id)
			that.getRelated(encrypted_id)
			that.getLike()
			that.advertising()
		},
		onReady: function() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
			that.videoContext = uni.createVideoContext('myVideo')
			// 判定运行平台
			let platform = ''
			switch (uni.getSystemInfoSync().platform) {
				case 'android':
					platform = 'android'
					break;
				case 'ios':
					platform = 'ios'
					break;
				default:
					platform = 'applet'
					break;
			}
			if (platform == 'applet') {
				// 获取屏幕高度
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuLeft = menu.left
						that.menuBottom = menu.bottom
					}
				})
			} else {
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			// 返回上一级
			goBack: function() {
				// console.log('back')
				uni.navigateBack({
					delta: 1
				});
			},
			// 提醒我
			subscribe: function() {
				console.log('提醒')
			},
			// 商品详情
			getGoodsDetail: function(id, encrypted_id) {
				let that = this
				let dataInfo = {
					interfaceId: 'goodsspudetails',
					encrypted_id: encrypted_id,
					sku_id: id
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					if (res.data.code == 1000) {
						let data = res.data.data
						uni.setStorageSync("goodsDetail", data);
						that.contentList = data
						that.swiperList = data.img
						// that.spec = that.assembleSpec(data.sku.user_spec, 1)
						that.pay_type = data.sku.pay_type
						that.spec_value = data.spec_value
						that.defaultSpec = that.contentList.sku.spec_attr[1]
						that.changeSpecs(that.defaultSpec)
					} else {
						that.request.showToast(res.data.message)
					}
				})
			},
			// 获取广告
			advertising: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'getadvertising',
					location: 4
				}
				that.request.uniRequest("home", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.advertisingList = data
						// console.log(data) //type 0 单行单图 1 轮播 2 平铺 3 铺平+竖铺  4 单行多图
					}
				})
			},
			// 为你推荐
			getLike: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'userrecommendedgoodsspulist',
					type: '2',
					offset: that.offset
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						// that.productLists = data
						// if(data.length>0){
						// 	that.productList = that.productList.concat(data)
						// }
						that.productLists = that.productLists.concat(data)
					}
				})
			},
			// 支付方式
			changePay:function(index){
				console.log(index)
				let that = this
				that.pay_type = index
			},
			// 获取相关商品
			getRelevantGoods: function(encrypted_id) {
				this.request = this.$request
				const that = this;
				let dataInfo = {
					interfaceId: "goodsrelevancespu",
					encrypted_id: encrypted_id,
					offset: 0,
					limit: 6
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					if (res.data.code === 1000) {
						that.relevantGoods = res.data.data
					}
				})
			},

			// 相关
			getRelated: function(id) {
				let that = this
				let dataInfo = {
					interfaceId: 'spurelatedcontent',
					encrypted_id: id
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.doctorList = data.doctor_list
						that.doctorList = that.group(that.doctorList, 3)
						that.diaryList = data.diary_list
						that.questionsAnswersList = data.goods_qa_list
						that.evaluateList = data.comment_list
						that.spu_info = data.spu_info
						let imgSrc = that.spu_info
						imgSrc = imgSrc.match(/up(\S*)jpeg/g)
						that.spu_info = imgSrc
						that.parameter = data.parameter
						// console.log(imgSrc, 1111)
					}
				})
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
			// 医生
			goToDoctor: function(id, heading) {
				uni.navigateTo({
					url: `/pages/doctor/doctor_detail?id=${id}&&heading=${heading}`,
				})
			},
			
			changeSpecs: function(index) {
				let that = this
				that.specsCont = index
				that.defaultSpec = ''
				if (that.lastIndex != index) {
					that.lastIndexs = 1
				} else if (that.lastIndex == index) {
					that.handleClicke(index)
				}
				that.lastIndex = index
				that.lastIndexs += 1;				
				
				let specArr = []
				specArr.push(index)
				
				let dataInfo = {
					interfaceId:'selectsku',
					encrypted_id:that.encrypted_id,
					spec_attr:specArr
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					let data = res.data.data
					that.shouldChangeList = data.user_spec
				})
				
			},
			// 点击两次
			handleClicke: function(index) {
				let that = this
				// console.log(that.lastIndexs,index)
				if (that.lastIndexs % 2 == 1) {
					console.log('单次点击')
				} else {
					console.log('双次点击2')
					// that.specsCont = ''
					that.shouldChangeList = []
				}
			},

			// userSpec=用户可选规格，isFirst=是否首次进入，nowCheck=当前选项，isCancel=是否点击取消进入
			assembleSpec: function(userSpec, isFirst, nowCheck, isCancel) {
				// 新规格数组，与原规格spec_value相对应，用于标记各种状态
				let specValue = uni.getStorageSync("goodsDetail").spec_value;
				let spec = uni.getStorageSync("goodsDetail").spec_value;
				let defaultSpec = (isCancel == 1) ? "" : uni.getStorageSync("goodsDetail").sku.spec_attr;
				// console.log(defaultSpec,2222222)
				// 遍历规格类型
				for (let i in specValue) {
					for (let k in specValue[i].attr) {
						// 第一次进入全部可选，0=可选，1=选中
						if (isFirst == 1) {
							spec[i].attr[k] = 0;
							// 遍历默认选择规格
							for (let j in defaultSpec) {
								if (k == defaultSpec[j]) {
									spec[i].attr[k] = 1;
								}
							}
						} else {
							// 用户可选规格与整个规格进行匹配，匹配成功状态改为可选状态
							for (let j in userSpec) {
								if (k == userSpec[j]) {
									spec[i].attr[k] = 0;
								}
							}
							// 判断当前选择项中是否有不存在用户可选规格，如有进行删除
							for (let n in nowCheck) {
								if (userSpec.indexOf(parseInt(nowCheck[n])) == -1) {
									nowCheck.splice(n, 1)
								}
							}
							// 显示当前选中规格
							for (let m in nowCheck) {
								if (k == nowCheck[m]) {
									spec[i].attr[k] = 1;
								}
							}
						}
					}
				}
				// console.log(spec,33333)
				return spec;
			},

			// getSpec: function(e) {
			getSpec: function(index, sindex, spec) {
				this.request = this.$request
				const that = this;
				that.spec = spec
				// let index = e.currentTarget.dataset.index;
				// let sindex = e.currentTarget.dataset.sindex;
				for (let i in that.spec[index].attr) {
					that.spec[index].attr[i] = 0;
				}
				that.spec[index].attr[sindex] = 1;

				// 查找当前选择数据
				let nowCheck = [];
				for (let i in that.spec) {
					for (let k in that.spec[i].attr) {
						if (that.spec[i].attr[k] == 1) {
							nowCheck.push(k);
						}
					}
				}
				// 判断当前点击规格是否在用户允许选择范围，在就直接提交，不在就提交当前规格
				let userSpec = uni.getStorageSync("goodsDetail").sku.user_spec;
				let specAttr = "";
				if (userSpec) {
					for (let k in userSpec) {
						if (userSpec.indexOf(parseInt(sindex)) == -1) {
							specAttr = [sindex];
						} else {
							specAttr = nowCheck;
						}
					}
				} else {
					specAttr = nowCheck;
				}
				let dataInfo = {
					interfaceId: "selectsku",
					encrypted_id: that.spuId,
					spec_attr: specAttr
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					// 重新储存新用户可以选项
					let goodsDetail = uni.getStorageSync("goodsDetail");
					goodsDetail.sku.user_spec = res.data.data.user_spec;
					uni.setStorageSync("goodsDetail", goodsDetail);
					that.spec = that.assembleSpec(res.data.data.user_spec, res.data.data == "" ? 1 : 0, nowCheck)

				})
			},

			// 取消选项
			cancelSpec: function(index, sindex, spec) {
				// cancelSpec: function(e) {
				this.request = this.$request
				const that = this;

				// let index = e.currentTarget.dataset.index;
				// let sindex = e.currentTarget.dataset.sindex;
				// that.spec[index].attr[sindex] = 0;
				// 查找当前选择数据
				let nowCheck = [];
				for (let i in that.spec) {
					for (let k in that.spec[i].attr) {
						if (that.spec[i].attr[k] == 1) {
							nowCheck.push(k);
						}
					}
				}
				let dataInfo = {
					interfaceId: "selectsku",
					encrypted_id: that.spuId,
					spec_attr: nowCheck
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					// 重新储存新用户可以选项
					let goodsDetail = uni.getStorageSync("goodsDetail");
					goodsDetail.sku.user_spec = res.data.data.user_spec;
					uni.setStorageSync("goodsDetail", goodsDetail);
					that.spec = that.assembleSpec(res.data.data.user_spec, res.data.data == "" ? 1 : 0, nowCheck, 1)
				})
			},

			// 购物车
			cart: function(event) {
				// let cartNumber = event.currentTarget.dataset.cartnumber 
				uni.navigateTo({
					url: `/pages/cart/cart?cartNumber=${cartNumber}`,
				})
			},			
			moveHandle:function(){
				return
			},
			moveOk:function(){
				console.log(1111)
			},
			// 购物车
			addCard:function(){
				let that = this
				that.isShow = !that.isShow
			},
			
			// 立即购买
			shopNow:function(){
				let that = this
				that.isShow = !that.isShow
			}
		}
	}
</script>

<style scoped>
	.top-bar {
		text-align: center;
		font-size: 40rpx;
		position: fixed;
		z-index: 100;
		width: 100%;
		top: 0;
		left: 0;
	}
	
	.back-title {
		font-size: 38rpx;
		position: relative;
		text-align: center;
	}
	
	.back {
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		width: 60rpx;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.back image {
		width: 36rpx;
		height: 36rpx;
	}
	
	.back-title .title {
		flex: 1;
		font-size: 37rpx;
	}
	.content {
		background-color: #F6F6F6;
		height: 100%;
		padding-bottom: 130rpx;
	}

	.top-swiper {
		height: 750rpx;
	}

	.video {
		width: 750rpx;
		height: 750rpx;
	}

	.all-top-swiper-item {
		position: relative;
	}

	.top-banner {
		position: absolute;
		width: 300rpx;
		top: 0;
		left: 0;
		z-index: 100;
	}

	.top-swiper-item image {
		width: 100%;
	}
	
	.activity{
		height: 100%;
	}
	
	.activity image {
		width: 100%;
	}

	/* 介绍 */
	.products-introduction {
		border-radius: 0 0 24rpx 24rpx;
		background-color: #FFFFFF;
		white-space: normal;
		padding: 20rpx 30rpx 40rpx;
	}

	/* 价格、收藏 */
	.price-depreciate-collect {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.price {
		align-items: center;
	}

	.price,
	.depreciate-collect,
	.VIP-price {
		display: flex;
	}
	
	.depreciate-collect{
		height: 100rpx;
		align-items: center;
	}

	.new-price {
		color: #fa3475;
		font-size: 64rpx;
		margin-right: 10rpx;
	}

	.new-price text {
		font-size: 32rpx;
	}

	.VIP-price {
		height: 28rpx;
		border: 1rpx solid #333333;
		border-radius: 5rpx;
		line-height: 28rpx;
		font-size: 16rpx;
		margin-top: -10rpx;
	}

	.VIP-price text {
		padding: 0 5rpx;
	}

	.VIP-name {
		background-color: #2E2E2E;
		color: #FFFFFF;
		padding: 0 10rpx;
	}

	.market-price {
		font-size: 24rpx;
		color: #9e9e9e;
	}

	.market-price text {
		text-decoration: line-through;
		margin-left: 10rpx;
	}

	.depreciate,
	.collect {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.depreciate {
		margin-right: 40rpx;
	}

	.remind-images,
	.remind-images image,
	.collect-images,
	.collect-images image {
		width:48rpx;
		height: 48rpx;
	}

	.remind-text,
	.collect-text {
		font-size: 20rpx;
		color: #111111;
		margin-top: 7rpx;
	}

	.hot-sale-remind {
		font-size: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 35rpx 0 20rpx;
		border-bottom: 1rpx solid #F0F0F0;
	}

	.hot-sale-content {
		display: flex;
	}

	.hot-sale {
		background-image: linear-gradient(0deg,
			#000000 0%,
			#333333 100%);
		border-radius: 4rpx;
		font-size: 18rpx;
		margin-right: 20rpx;
		padding: 0 10rpx;
		color: #FFFFFF;
	}

	.hot-sale-recommend {
		color: #999999;
	}

	.remind-me {
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
		border-radius: 15rpx;
		font-size: 20rpx;
		text-align: center;
		width: 116rpx;
		height: 32rpx;
		color: #FFFFFF;
	}

	/* 商品名 */
	.prouct-name {
		padding: 18rpx 0;
		/* height: 80rpx; */
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-size: 32rpx;
		line-height: 48rpx;
		color: #111111;
		/* display: flex; */
	}

	.sale-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		padding: 12rpx 0;
		border-top: 1rpx solid #F0F0F0;
	}

	.sale-content .red {
		color: #fa3475;
	}


	.label-name {
		font-size: 18rpx;
		color: #ffffff;
		padding: 5rpx 8rpx 0;
		line-height: 20rpx;
		text-align: center;
		background-color: #882ddc;
		border-radius: 4rpx;
		margin-right: 10rpx;
	}

	/* 领取卷的介绍 */
	.get-coupon {
		padding: 20rpx 0;
		height: 80rpx;
		font-size: 20rpx;
		color: #999999;
		line-height: 30rpx;
	}

	/* 优惠 */
	.discounts {
		margin-top: 20rpx;
		/* margin-bottom: 30rpx; */
		padding: 30rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
	}

	.discounts-title {
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		line-height: 48rpx;
		margin-bottom: 30rpx;
	}

	.discounts-more {
		font-weight: bolder;
		font-size: 28rpx;
		color: #111111;
	}

	.more {
		color: #fa3475;
	}

	/* 优惠政策 */
	.discounts-policy {
		display: flex;
		font-size: 24rpx;
		margin-bottom: 30rpx;
	}

	.policy-name {
		color: #fa3475;
		height: 30rpx;
		line-height: 30rpx;
		text-align: center;
		background-color: #ffe8f0;
		border-radius: 15rpx;
		padding: 0 20rpx;
		margin-right: 30rpx;
	}

	.policy-content {
		width: 510rpx;
		line-height: 30rpx;
		color: #000000;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.specs-content {
		margin-top: 30rpx;
	}

	.specs-content:first-child {
		margin-top: 0;
	}

	.specs-title {
		font-size: 28rpx;
		font-weight: bold;
		color: #111111;
	}

	.specs-hint {
		color: #fa3475;
		font-size: 22rpx;
		margin-left: 20rpx;
	}

	.specs {
		padding: 30rpx 30rpx;
		background: #FFFFFF;
		margin-top: 20rpx;
		border-radius: 24rpx;
		color: #999999;
	}

	.pay-txt {
		padding-left: 30rpx;
		font-size: 28rpx;
		font-weight: bold;
	}

	.specs-cont {
		margin-left: -30rpx;
		font-size: 24rpx;
	}

	.specs-cont-pay {
		margin-left: -30rpx;
		font-size: 24rpx;
		display: flex;
		align-items: center;
	}

	.li {
		display: inline-block;
		line-height: 52rpx;
		border-radius: 52rpx;
		padding: 0 25rpx;
		border: 2rpx solid #f0f0f0;
		background: #f0f0f0;
		margin: 20rpx 0 0 30rpx;
	}

	.specs-cont-pay .li {
		margin: 0 0 0 30rpx;
	}

	.li-hover {
		border: 2rpx solid #fa3475;
		background: #ffe8f0;
		color: #fa3475;
	}
	.isChange{
		border: 2rpx solid #181818;
		background-color: #7B7B7B;
		color: #FFFFFF;
	}

	.li-gray {
		color: #999999;
	}

	/* 相关证书 */
	.certificate {
		padding: 30rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		display: flex;
		align-items: center;
	}

	/* 相关商品 */
	.related-products {
		padding: 0 0 10rpx 20rpx;
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

	.related-products-item {
		/* white-space: nowrap; */
	}

	.doctor-swiper {
		height: 650rpx;
	}

	.related-products-items {
		width: 100%;
		height: 490rpx;
	}

	.related-products-centent {
		display: flex;
		justify-content: space-between;
		height: 100%;
		width: 100%;
	}

	.product-item {
		margin-right: 20rpx;
		border-radius: 24rpx;
		background-color: #ffffff;
		font-size: 24rpx;
		width: 260rpx;
		height: 100%;
		white-space: normal;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.product-item image {
		width: 260rpx;
		height: 260rpx;
		border-radius: 24rpx;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.productName {
		font-size: 24rpx;
		padding: 0 20rpx;
	}

	.product-item-content {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	.closed {
		color: #FFFFFF;
		display: inline-block;
		width: 84rpx;
		height: 26rpx;
		font-size: 18rpx;
		background-color: #b60114;
		border-radius: 4rpx;
		text-align: center;
		padding: 0 5rpx;
	}

	.label {
		display: flex;
		padding: 10rpx 20rpx;
	}

	.labelListItem {
		background-color: #999999;
		height: 26rpx;
		line-height: 26rpx;
		border-radius: 4rpx;
		color: #ffffff;
		font-size: 16rpx;
		margin-right: 10rpx;
		padding: 5rpx 10rpx;
	}

	.productPrice {
		color: #fa3475;
		font-size: 32rpx;
		padding-left: 20rpx;
	}

	.subscribeAndGoodReputation {
		display: flex;
		justify-content: space-between;
		text-align: center;
		padding: 20rpx;
	}

	.subscribe {
		color: #666666;
	}

	.goodReputation {
		color: #fa3475;
	}

	/* 相关医生 */
	.related-doctor {
		padding: 0 20rpx;
		background-color: #F6F6F6;
		margin-bottom: 20rpx;
	}

	.doctor-recommend {
		display: flex;
		background-color: #FFFFFF;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		padding: 20rpx 35rpx;
		margin-bottom: 30rpx;
		border-radius: 24rpx;
	}

	.doctor-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
	}

	.doctor-abstract {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		line-height: 30rpx;
		height: 150rpx;
	}

	.doctor-head-portrait {
		width: 150rpx;
		height: 150rpx;
		margin-right: 20rpx;
	}

	.doctor-head-portrait image {
		width: 150rpx;
		height: 150rpx;
		border-radius: 75rpx;
	}

	.doctor-name-recommend {
		display: flex;
		color: #111111;
		text-align: center;
		align-items: baseline;
	}

	.doctor-name {
		font-size: 32rpx;
		margin-right: 5rpx;
	}

	.doctor-recommends {
		width: 360rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.doctor-synopsis {
		color: #9a9a9a;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.doctor-label-list {
		width: 380rpx;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.doctor-label {
		font-size: 20rpx;
		color: #fa3475;
		border-radius: 18px;
		border: solid 1px #fa3475;
		padding: 10rpx 20rpx;
		margin-right: 20rpx;
	}

	.doctor-bottom {
		background-color: #f0f0f0;
		border-radius: 28px;
		padding: 16rpx 50rpx;
		color: #9a9a9a;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 80%;
		margin-top: 20rpx;
		font-size: 24rpx;
	}

	.doctor-bottom text {
		color: #111111;
		margin-left: 10rpx;
	}

	.text {
		border-right: 1rpx solid #dadada;
		padding-right: 40rpx;
	}

	/* 相关日记 */
	.related-diary {
		background-color: #FFFFFF;
		padding: 30rpx 20rpx 0;
		border-radius: 24rpx;
	}

	.diary-top {
		display: flex;
		justify-content: space-between;
	}

	.diary-more {
		font-size: 24rpx;
		color: #fa3475;
	}

	.all-diary {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}


	/* 问答 */
	.questions-answers {
		margin-top: 20rpx;
		padding: 30rpx 20rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
	}

	.questions-answers-item {
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		color: #111111;
		align-items: center;
	}

	.questions-and-content {
		display: flex;
		padding: 20rpx 0;
	}

	.questions {
		width: 32rpx;
		height: 32rpx;
		line-height: 32rpx;
		text-align: center;
		border-radius: 16rpx;
		background-image: linear-gradient(-45deg,
			#fa3475 0%,
			#ff6699 100%);
		color: #FFFFFF;
		font-size: 18rpx;
		margin-right: 10rpx;
	}

	.questions-content {
		width: 520rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.answers {
		color: #999999;
	}

	/* 评价 */
	.evaluate {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		padding: 30rpx 20rpx;
	}

	.evaluate-content {
		font-size: 24rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.evaluate-label {
		display: flex;
		margin-top: 20rpx;
		align-items: center;
		flex-wrap: wrap;
	}

	.label-item {
		background-color: #ffe8f0;
		border-radius: 18rpx;
		padding: 8rpx 30rpx;
		margin-right: 10rpx;
	}

	.headPortrait-name {
		margin-top: 20rpx;
		display: flex;
		align-items: center;
	}

	.headPortrait {
		width: 74rpx;
		height: 74rpx;
		border-radius: 37rpx;
		margin-right: 10rpx;
	}

	.headPortrait image {
		width: 74rpx;
		height: 74rpx;
		border-radius: 37rpx;
	}

	.name-score {
		color: #999999;
	}

	.evaluate-details {
		color: #111111;
		margin-top: 20rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-weight: lighter;
	}

	.effect-picture {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20rpx;
	}

	.effect-picture image {
		width: 230rpx;
		height: 230rpx;
		border-radius: 16rpx;
	}

	.trade-name {
		font-size: 20rpx;
		color: #999999;
		margin-top: 20rpx;
	}

	/* 所有表 */
	.all-table {
		margin-top: 20rpx;
		padding: 40rpx 20rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
	}
	
	.table-list{
		border: 1rpx solid #999999;
		border-bottom: 0;
	}
	
	.table-title{
		text-align: center;
		font-size: 24rpx;
		padding: 18rpx 0;
		font-weight: bold;
		border-bottom: 1rpx solid #999999;
	}
	
	.all-table-li{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	
	.table-ul{
		width: 100%;
		text-align: center;
		display: flex;
		font-size: 24rpx; 
	}
	
	.table-li{
		border-bottom: 1rpx solid #999999;
		border-left: 1rpx solid #999999;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24rpx 0;
		font-weight: lighter;
	}

	.table-li:first-child{
		border-left: 0;
	}

	/* 详情 */
	.particulars {
		padding: 40rpx 0;
		margin-top: 20rpx;
		border-radius: 24rpx;
		background-color: #FFFFFF;
	}

	.particulars .related-title {
		padding: 0 20rpx 20rpx;
	}

	.particulars-image {
		display: flex;
		justify-content: center;
	}

	.particulars-image image {
		width: 100%;
		/* height: 320rpx; */
	}

	/* 为你推荐 */
	.recommend-for-you {
		padding: 30rpx 20rpx;
	}

	.recommend-for-you .product-item {
		width: 48%;
		height: auto;
		margin: 0;
		margin-bottom: 20rpx;
	}

	/* 底部定位 */
	.consult-share-cart-addCart-shopNow {
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 0 30rpx;
		width: 100%;
		background-color: #333333;
		color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		height: 110rpx;
		align-items: center;
		z-index: 110;
	}

	.consult,
	.share {
		margin-top: 10rpx;
	}

	.cart-number {
		display: flex;
		margin-top: 10rpx;
		margin-left: 12rpx;
	}

	.consult-text,
	.share-text,
	.cart-text {
		font-size: 20rpx;
		color: #afafaf;
		line-height: 22rpx;
	}

	.consult-image,
	.share-image {
		margin-left: 5rpx;
	}

	.consult-image image,
	.share-image image,
	.cartImg image {
		width: 38rpx;
		height: 38rpx;
	}

	.cartNumber {
		width: 24rpx;
		height: 24rpx;
		border-radius: 12rpx;
		color: #FFFFFF;
		background-color: #F12F6F;
		font-size: 16rpx;
		line-height: 24rpx;
		text-align: center;
		margin-left: -10rpx;
		margin-top: -10rpx;
	}

	.add-cart {
		height: 80rpx;
		width: 220rpx;
		border-radius: 40rpx;
		text-align: center;
		line-height: 80rpx;
		background-image: linear-gradient(-45deg,
			#8834fa 0%,
			#bc66ff 100%);
	}

	.shop-now {
		height: 80rpx;
		width: 220rpx;
		border-radius: 40rpx;
		text-align: center;
		line-height: 80rpx;
		margin-right: 60rpx;
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
	}
	
	.isShow{
		position: fixed;
		bottom: 110rpx;
		left: 0;
		width: 100%;
		background-color: #FFFFFF;
		z-index: 100;
	}
</style>
