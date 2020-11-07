<template>
	<view class="goods_detail">
		<view class="top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px','background-color':topBackgroundColor,'color':color}]">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back" @click="goBack">
					<image :src="backImage" mode=""></image>
				</view>
				<view class="title"> {{title}} </view>
			</view>
		</view>
		<!-- 主体内容 @touchmove.stop.prevent="moveHandle" -->
		<view class="content">
			<scroll-view scroll-y :style="[{'padding-top':menuBottom+10+'px'}]">
				<!-- 头部轮播 -->
				<view class="topSwiper">
					<view id="topSwiper">
						<swiper class="top-swiper" indicator-dots indicator-active-color="#ffffff" autoplay :interval='intervalTime'
						 :duration="durationTime" circular>
							<swiper-item class="all-top-swiper-item" v-if="contentList.video_list">
								<view class="video" @tap='goToVideo(contentList.video_list)'>
									<video class="video-noPlay" :src="requestUrl+contentList.video_list" show-fullscreen-btn="false">
										<view class="video-play">
											<!-- <image src="../../static/images/video.png" mode="widthFix"></image> -->
										</view>
									</video>
								</view>
								<!-- <image :src="requestUrl+contentList.sku.act.banner" mode="widthFix"></image> -->
							</swiper-item>
							<swiper-item class="all-top-swiper-item" v-for="(i,k) in swiperList" :key="k">
								<view class="top-swiper-item">
									<image class="banner-img" :src="requestUrl+i" lazy-load='true' mode="widthFix"></image>
								</view>
								<!-- 商品头部活动广告图 -->
								<!-- <image class="top-banner" :src="requestUrl+'upload/pages/images/202010/23/mBGXkqPtH3wIYbl9pd2oRJr2XuvTO4pmeNYJEsg6.jpeg'"
								 mode="widthFix"></image> -->
								<image class="top-banner" :src="requestUrl+contentList.sku.spu_icon" mode="widthFix"></image>
							</swiper-item>
						</swiper>
					</view>
				</view>
				<!-- 活动节日 -->
				<view class="activity" v-if='advertisingList.type==2||advertisingList.type==1'>
					<image :src="requestUrl+item.img" mode="widthFix" v-for="(item,index) in advertisingList.content" :key='index'></image>
					<!-- <image src="https://xcx.hmzixin.com/upload/images/3.0/4.jpg" mode="widthFix"></image> -->
				</view>
				<!-- <view class="particulars-image"  v-else-if='advertisingList.type==0' >
					<image :src="requestUrl+item.img" mode="" v-for="(item,index) in advertisingList.content" :key='index'></image>
				</view>
				<view class="adverting-swpier" v-else-if="advertisingList.type==1">
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
						<view class="price" >
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
					<view class="hot-sale-remind" >
						<view class="hot-sale-content">
							<view class="hot-sale"> 预热中 </view>
							<view class="hot-sale-recommend"> 该商品6月18日 9:00:00开始售卖哦~ </view>
						</view>
						<view class="remind-me" @tap='subscribe'> 提醒我 </view>
					</view>
					<!-- 商品名称 -->
					<view class="prouct-name">
						<image class="title_icon"
						 :src="requestUrl+item" v-for="(item,index) in contentList.sku.act.title_icon"  :key='index'></image>
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
				<view class="discounts" v-if="contentList.sku.act.discounts">
					<view class="discounts-title">
						<view class="discounts-more"> 优惠 </view>
						<view class="more" @tap='seeMore(0)'> 更多 > </view>
					</view>
					<!-- 优惠政策 -->
					<view class="discounts-policy" v-for="(item,k) in contentList.sku.act.discounts" :key="k">
						<view class="policy-name"> {{item.name}} </view>
						<view class="policy-content" v-for="(i,index) in item.list" :key='index'> {{i}} </view>
					</view>
				</view>
				<!-- 版本、规格 -->
				<view class="specs">
					<template>
						<view class="specs-content" v-for="(item,index) in contentList.spec_value" :data-index='index' :key="index">
							<view class="specs-title">
								{{item.name}}
								<!-- <text class="specs-hint" >请选择{{item.name}}</text> -->
							</view>
							<view class="specs-cont">
								<view class="li" v-for="(is,sindex) in item.attr" :key="sindex" 
								 :class="[spec[index].attr[sindex]==1?'li-hover':spec[index].attr[sindex]==0?'li-gray':'']"
								 @tap="changeSpec(index,sindex)">
									{{is}}  
								</view>
							</view>
						</view>
					</template>
				</view>
				
				<!-- <view class="li" v-for="(is,sindex) in item.attr" :key="sindex"
					 :class="[spec[index].attr[sindex]==0?'li-gray':(spec[index].attr[sindex]==1?'li-hover':'isChange')]"
					 @tap="spec[index].attr[sindex]==0?getSpec:(spec[index].attr[sindex]==1?cancelSpec:'')">
						{{is}} {{spec[index].attr[sindex]}}
				</view> -->
				
				<!-- 支付方式 -->
				<view class="specs">
					<view class="specs-cont-pay">
						<text class="pay-txt">支付方式</text>
						<view class="li" @tap='changePay(0)' :class="[pay_type==0||pay_type==2?'li-hover':'']">
							预约金
						</view>
						<view class="li" @tap='changePay(1)' :class="[pay_type==1||pay_type==2?'li-hover':'']">
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
						<view class="diary-more" @tap='seeAll()'> 查看全部 > </view>
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
					</view>
				</view>
				<!-- 项目价格表 -->
				<view class="all-table" v-if="parameter.length>0">
					<view class="table-list" v-for="(item,index) in parameter" :key='index' v-show="item.title">
						<view class="table-title"> {{item.title}} </view>
						<view class="all-table-li">
							<view class="table-ul" v-for="(i,k) in item.data" :key='k'>
								<view class="table-li"
								 v-for="(is,j) in i" :key='j' :style="[{'width':i.length==2?'50%':(i.length==3?'33%':(i.length==4?'25%':'20%'))}]">
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
			<view class="cart"  @tap="cart">
				<view class="cart-number">
					<view class="cartImg">
						<image class="icon-img" src="https://xcx.hmzixin.com/upload/images/3.0/icon_cart.png"></image>
					</view>
					<view class="cartNumber"> {{carts}} </view>
				</view>
				<view class="cart-text"> 购物车 </view>
			</view>
			<!-- 加入购物车 -->
			<view class="add-cart" @tap='addCart(0)'> 加入购物车 </view>
			<!-- 立即购买 -->
			<view class="shop-now" @tap='shopNow(1)'> 立即购买 </view>
		</view>
		<!-- 优惠更多  -->
		<scroll-view class="see-more-discount" scroll-y="true"  v-if="isShowDiscount" 
		 :style="[{'height':goodsCardsList.cards?height/2+'px':height/4+'px'}]">
			<view class="more-discounts-title"> 优惠活动 </view>
			<view class="more-discounts-hint">温馨提示:满减、折扣、卡券均可叠加使用</view>
			<view class="all-discounts-policy">
				<view class="discounts-policy">
					<view class="policy-name"> 限时 </view>
					<view class="policy-content"> 距离活动结束还剩 
						<text class="show-time" v-show="contentList.sku.act.countdwon_format==1">{{ day }}</text> 天 
						<text class="show-time">{{ house }}</text> 时 
						<text class="show-time">{{ second }}</text> 分 
						<text class="show-time">{{ minute }}</text> 秒
					</view>
				</view>
				<view class="discounts-policy" v-for="(item,k) in contentList.sku.act.discounts" :key="k">
					<view class="policy-name"> {{item.name}} </view>
					<view class="policy-content" v-for="(i,index) in item.list" :key='index'> {{i}} </view>
				</view>
			</view>
			<view class="card_list">
				<ticket
				 :cardsList='goodsCardsList.cards'
				 :time_now='goodsCardsList.time_now' 
				 @showTicket='showTicket'
				 @getCards='getCards'
				 @useCard = 'useCard'>
				</ticket>
			</view>
			<view class="delete-see-more-discount" @tap='seeMore(0)'>
				<image src="../../static/images/delete.png" mode=""></image>
			</view>
		</scroll-view>
		<!-- 弹出的对话框 v-if="isShow" -->
		<scroll-view class="isShow" v-if="isShow" scroll-y="true" :style="[{'height':height/2+'px'}]">
			<view class="isShow-content">
				<view class="add-card-top">
					<view class="left-head_img">
						<image :src="requestUrl+contentList.sku.head_img" mode="widthFix"></image>
					</view>
					<view class="right-goods-info">
						<view class="goods-discounts" v-if="contentList.sku.act.length!=0" @tap='seeMore(0)'> 参与优惠 </view>
						<view class="good-price">
							<view class="market_price">￥{{contentList.sku.sale_price}}</view>
							<view class="member_price" v-if="contentList.sku.member.member_title">
								<text class="member_title" >{{contentList.sku.member.member_title}}</text>￥{{contentList.sku.member.price}}
							</view>
						</view>
						<view class="store-sku_no">
							<text v-show="contentList.sku.store<=100">库存 {{contentList.sku.store}}件</text>
							<text class="sku_no">编号: {{contentList.sku.sku_no}}</text>
						</view>
					</view>
				</view>
				<template>
					<view class="specs-content" v-for="(item,index) in contentList.spec_value" :data-index='index' :key="index">
						<view class="specs-title">
							{{item.name}}
							<!-- <text class="specs-hint" >请选择{{item.name}}</text> -->
						</view>
						<view class="specs-cont">
							<view class="li" v-for="(is,sindex) in item.attr" :key="sindex" 
							 :class="[spec[index].attr[sindex]==1?'li-hover':spec[index].attr[sindex]==0?'li-gray':'']"
							 @tap="changeSpec(index,sindex)">
								{{is}}  
							</view>
						</view>
					</view>
				</template>
				<view class="specs-cont-pay">
					<text class="pay-txt">支付方式</text>
					<view class="li" @tap='changePay(0)' :class="[pay_type==0||pay_type==2?'li-hover':'']">
						预约金
					</view>
					<view class="li" @tap='changePay(1)' :class="[pay_type==1||pay_type==2?'li-hover':'']">
						全款付
					</view>
				</view>
				<view class="specs-cont-pay">
					<text class="pay-txt">领取方式</text>
					<view class="li" @tap='changeClass(0)' :class="[class_type==0?'li-hover':'']">
						到院领取
					</view>
					<view class="li" @tap='changeClass(1)' :class="[class_type==1?'li-hover':'']">
						邮寄
					</view>
				</view>
				<view class="changeNumber">
					<view class="pay-txt">数量</view>
					<view class="number-hint">
						<text> {{ contentList.sku.min_buy_limit }} 件起购</text>
						<text>限购 {{ contentList.sku.max_buy_limit }} 件</text>
					</view>
					<view class="change-input">
						<view class="reduce"
						 @tap="reduce(-1)"
						 :style="[{'background-color':goodsNuber==contentList.sku.min_buy_limit ? '#dddddd':'#999999'}]">-</view>
						<view class="number-input">
							<input type="number" v-model="goodsNuber" value=1 @input='changeGoodsNumber' />
						</view>
						<view class="add-number"
						 @tap="reduce(1)"
						 :style="[{'background-color':goodsNuber==contentList.sku.max_buy_limit ? '#dddddd':'#999999'}]">+</view>
					</view>
				</view>
				<view class="keep-order">
					<view class="button">
						<button type="primary" class="keep-order-button" plain="true" @tap='order(is_card_shop)'>确定</button>
					</view>
				</view>
				<view class="delete-see-more-discount" @tap='seeMore(1)'>
					<image src="../../static/images/delete.png" mode=""></image>
				</view>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import goodsShow from "../../components/goodsShow.vue";
	import diary from '../../components/diary.vue';
	import ticket from "../../components/ticket.vue"
	export default {
		components: {
			topBar,
			goodsShow,
			diary,
			ticket
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
				sku_id:'0',
				goodsNuber:1,
				contentList: [],
				pay_type: 1, //支付方式  0预约金 1 全款 2 全选
				class_type:0,//领取方式 0到院 1邮寄
				swiperList: [],
				intervalTime: 8000, //自动切换时间间隔
				durationTime: 2000, //	滑动动画时长
				carts: 0, //购物车
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
				offset: 0, //分页起始位置
				parameter: [], //各种表
				encrypted_id: '', //加密商品skuid
				isShow: false, //显示对话框
				isShowDiscount:false,//显示优惠的更多
				shouldChangeList: [], //可选规格版本
				spec: [],
				cardsList:[],
				goodsCardsList:[],
				day: 0,
				house: 0,
				second: 0,
				minute: 0,
				is_card_shop:0
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
				that.sku_id = sku_id
			} else {
				sku_id = '490' //206 302
				that.sku_id = sku_id
			}
			if (option.encrypted_id) {
				encrypted_id = option.encrypted_id
				that.encrypted_id = encrypted_id
			} else {
				encrypted_id = 'VkRhZGllTGpHbFpWaENRVDdIWVk5QT09' //  Z2VrMSs4RVJBeUlFZVJRMnM4T2pwQT09
				that.encrypted_id = encrypted_id
			}

			that.getGoodsDetail(sku_id, encrypted_id)
			that.getRelevantGoods(encrypted_id)
			that.getRelated(encrypted_id)
			that.getLike()
			that.advertising()
			that.getCart()
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
			// 点击视频
			goToVideo: function(url) {
				// console.log(url,11111)
				uni.navigateTo({
					url: `/pages/goods/goods_detail_video?video=${url}`,
				})
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
						that.spec = that.assembleSpec(data.sku.user_spec, 1)
						that.pay_type = data.sku.pay_type
						if(that.contentList.sku.act.rest_time>0){
							that.day = parseInt((that.contentList.sku.act.rest_time) / 60 / 60 / 24 % 30)
							that.house = parseInt((that.contentList.sku.act.rest_time) / 60 / 60 % 24 )
							that.second = parseInt((that.contentList.sku.act.rest_time) / 60 % 60) 
							that.minute = parseInt((that.contentList.sku.act.rest_time) % 60 )
						}
						that.cardsList = that.contentList.sku.card_list
						// console.log(that.cardsList,111111)
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
			// 获取购物车的商品数量
			getCart:function(){
				let that = this
				let dataInfo = {
					interfaceId:'countcart'
				}
				that.request.uniRequest("shoppingCart", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.carts = data.cart_count
						// console.log(data,22222222222)
					}
				})
			},
			// 支付方式
			changePay: function(index) {
				let that = this
				that.pay_type = index
			},
			changeClass:function(index){
				let that = this
				that.class_type = index
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
			// 优惠的更多
			seeMore:function(index){
				let that = this
				if(index==0){
					if(that.cardsList.length>0){
						let dataInfo = {
							interfaceId:'ids_get_card',
							card_id:that.cardsList,
							limit:6,
							offset:0
						}
						that.request.uniRequest("card", dataInfo).then(res => {
							if (res.data.code == 1000 && res.data.status == 'ok') {
								let data = res.data.data
								that.isShowDiscount = !that.isShowDiscount
								if(that.isShowDiscount){
									for (let i = 0; i < data.cards.length; i++) {
										data.cards[i].showTicketDetails = false
										data.cards[i].arrowImages = '/static/images/arrow-down.png'
									}
									that.goodsCardsList = data
								}
								else{
									that.goodsCardsList = []
								}
							}
						})
					}else{
						that.isShowDiscount = !that.isShowDiscount
					}
				}else if(index==1){
					that.isShow = !that.isShow
				}				
			},
			showTicket: function(cardId) {
				let that = this
				for (let i = 0; i < that.goodsCardsList.cards.length; i++) {
					// console.log(that.goodsCardsList.cards[i])
					if (that.goodsCardsList.cards[i].id == cardId) {
						
						that.goodsCardsList.cards[i].showTicketDetails = !that.goodsCardsList.cards[i].showTicketDetails
						if (that.goodsCardsList.cards[i].showTicketDetails) {
							that.goodsCardsList.cards[i].arrowImages = '/static/images/arrow-top.png'
						} else {
							that.goodsCardsList.cards[i].arrowImages = '/static/images/arrow-down.png'
						}
					}
				}
			},
			// 领取卡券
			getCards: function(cardId, prompt,index) {
				let that = this
				console.log(cardId, prompt,index)
				if (prompt == '') {
					let dataInfo = {
						interfaceId: 'cardget',
						card_id: cardId
					}
					that.request.uniRequest("card", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.request.showToast('领取成功')
							that.goodsCardsList[index].salecard_user_count = that.goodsCardsList[index].salecard_user_count+1
						}
					})
				} else {
					that.request.showToast(prompt)
				}
			},
			// 使用卡券
			useCard:function(id){
				console.log(id)
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
			changeSpec:function(index,sindex){
				let that = this
				// console.log(index,sindex)
				if(that.spec[index].attr[sindex]==0){
					that.getSpec(index,sindex)
				}else if(that.spec[index].attr[sindex]==1){
					that.cancelSpec(index,sindex)
				}else{
					return
				}
			},

			// userSpec=用户可选规格，isFirst=是否首次进入，nowCheck=当前选项，isCancel=是否点击取消进入
			assembleSpec: function(userSpec, isFirst, nowCheck, isCancel) {
				let that = this
				// 新规格数组，与原规格spec_value相对应，用于标记各种状态
				let specValue = uni.getStorageSync("goodsDetail").spec_value;
				let spec = uni.getStorageSync("goodsDetail").spec_value;
				let defaultUserSpec = (isCancel == 1) ? "" : uni.getStorageSync("goodsDetail").sku.spec_attr;				
				// 遍历规格类型
				for (let i in specValue) {
					for (let k in specValue[i].attr) {
						// 第一次进入全部可选，0=可选，1=选中
						if (isFirst == 1) {
							spec[i].attr[k] = 0;
							// 遍历默认选择规格
							for (let j in defaultUserSpec) {
								if (k == defaultUserSpec[j]) {
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
				return spec;
			},

			getSpec: function(index,sindex) {
				const that = this;
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
					encrypted_id: that.encrypted_id,
					spec_attr: specAttr
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					// 重新储存新用户可以选项
					let goodsDetail = uni.getStorageSync("goodsDetail");
					goodsDetail.sku.user_spec = res.data.data.user_spec;
					uni.setStorageSync("goodsDetail", goodsDetail);
					that.spec = that.assembleSpec(res.data.data.user_spec, res.data.data == "" ? 1 : 0, nowCheck)
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.contentList.sku = data						
						that.contentList.sku.sale_price = data.sale_price						
						if(that.contentList.sku.act.rest_time>0){
							that.day = parseInt((that.contentList.sku.act.rest_time) / 60 / 60 / 24 % 30)
							that.house = parseInt((that.contentList.sku.act.rest_time) / 60 / 60 % 24 )
							that.second = parseInt((that.contentList.sku.act.rest_time) / 60 % 60) 
							that.minute = parseInt((that.contentList.sku.act.rest_time) % 60 )
						}
						// if(that.contentList.sku.card_list.length>0){
						// 	for (let i = 0; i < that.contentList.sku.card_list.length; i++) {
						// 		that.contentList.sku.card_list[i].showTicketDetails = false
						// 		that.contentList.sku.card_list[i].arrowImages = '../static/images/arrow-down.png'
						// 	}
						// }
						// that.goodsCardsList = that.contentList.sku.card_list	
						// console.log(data,22222222)
					}
				})
			},

			// 取消选项
			cancelSpec: function(index,sindex) {
				const that = this;
				that.spec[index].attr[sindex] = 0;
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
					encrypted_id: that.encrypted_id,
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
			// 查看全部日记
			seeAll:function(){
				uni.switchTab({
					url: `/pages/diary/diary`,
				})
			},
						
			// 购物车
			cart: function() {
				let that = this
				uni.navigateTo({
					url: `/pages/cart/cart`,
				})
			},
			moveHandle: function() {
				return
			},
			
			// 加入购物车
			addCart: function(index) {
				let that = this
				that.isShow = !that.isShow
				that.is_card_shop = index
			},
			// 立即购买
			shopNow: function(index) {
				let that = this
				that.isShow = !that.isShow
				that.is_card_shop = index
			},
			// 点击确定
			order:function(index){
				let that = this
				let buy_type = 1 //支付方式
				if(that.pay_type ==2 ){
					buy_type = 1
				}else{
					buy_type = that.pay_type
				}
				if(index==0){ //购物车
					let dataInfo = {
						interfaceId:'addcart',
						sku_id:that.contentList.sku.id,
						num:that.goodsNuber,
						max_limit:that.contentList.sku.max_buy_limit,
						price:that.contentList.sku.sale_price,
						is_post: that.class_type,//is_post 0 到院 1邮寄
						buy_type:buy_type ,//支付类型
						// f_unique_id:0, //订单分享人的id
						// archives_id:1//订单渠道
					}
					that.request.uniRequest("shoppingCart", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.request.showToast('已加入购物车')
						}else if(res.data.code == 2101){
							that.request.showToast('商品已下架')
						}
						that.getCart()
						uni.removeStorageSync('contentList')
					})
					
				}else if(index==1){//立即购买
					console.log('立即购买')
				}
				that.isShow = !that.isShow
			},
			// 点击加减数字
			reduce:function(index){
				let that = this
				that.goodsNuber += index
				if(that.goodsNuber >= that.contentList.sku.max_buy_limit){
					let number = parseInt(that.contentList.sku.max_buy_limit)
					that.goodsNuber = number
				}else if(that.goodsNuber < that.contentList.sku.min_buy_limit){
					let number = parseInt(that.contentList.sku.min_buy_limit)
					that.goodsNuber = number
				}
			},
			// 输入想要的数量
			changeGoodsNumber:function(event){
				let that = this
				let value = event.detail.value
				that.goodsNuber = value
				if(that.goodsNuber >= that.contentList.sku.max_buy_limit){
					let number = parseInt(that.contentList.sku.max_buy_limit)
					that.goodsNuber = number
				}else if(that.goodsNuber < that.contentList.sku.min_buy_limit){
					let number = parseInt(that.contentList.sku.min_buy_limit)
					that.goodsNuber = number
				}
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

	.video-noPlay{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.video-play{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		z-index: 100;
		background-color: #F0F0F0;
		opacity: 0.5;
	}

	.all-top-swiper-item .video image {
		width: 128rpx;
	}

	.top-banner {
		position: absolute;
		width: 300rpx;
		top: 0;
		left: 0;
		z-index: 100;
		opacity: 0.8;
	}

	.top-swiper-item image {
		width: 100%;
	}

	.activity {
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

	.depreciate-collect {
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
		width: 48rpx;
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
		display: flex;
		align-items: center;
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
	.title_icon{
		height: 42rpx;
		width: 90rpx;
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
	.isShow-content .specs-content{
		padding-left: 20rpx;
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
		color: #111111;
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
		margin: 20rpx 0 0 20rpx;
	}

	.specs-cont-pay .li {
		margin: 0 0 0 30rpx;
	}

	.li-hover {
		border: 2rpx solid #fa3475;
		background: #ffe8f0;
		color: #fa3475;
	}

	.specs-cont .li-gray {
		color: #111111;
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
	.certificate image{
		width: 100%;
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

	.table-list {
		border: 1rpx solid #999999;
		border-bottom: 0;
	}

	.table-title {
		text-align: center;
		font-size: 24rpx;
		padding: 18rpx 0;
		font-weight: bold;
		border-bottom: 1rpx solid #999999;
	}

	.all-table-li {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.table-ul {
		width: 100%;
		text-align: center;
		display: flex;
		font-size: 24rpx;
	}

	.table-li {
		border-bottom: 1rpx solid #999999;
		border-left: 1rpx solid #999999;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24rpx 0;
		font-weight: lighter;
	}

	.table-li:first-child {
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
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		height: 110rpx;
		align-items: center;
		z-index: 99;
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
		color: #FFFFFF;
		font-size: 28rpx;
		background-image: linear-gradient(-45deg, #8834fa 0%, #bc66ff 100%);
	}

	.shop-now {
		height: 80rpx;
		width: 220rpx;
		border-radius: 40rpx;
		text-align: center;
		line-height: 80rpx;
		color: #FFFFFF;
		margin-right: 60rpx;
		font-size: 28rpx;
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
	}

	.isShow {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #FFFFFF;
		z-index: 121;
		padding: 20rpx ;
	}
	.isShow .delete-see-more-discount{
		position: absolute;
		top: 0;
		right: 40rpx;
	}
	
	.add-card-top{
		display: flex;
		align-items: center;
	}
	.left-head_img image{
		width: 240rpx;
	}
	.right-goods-info{
		display: flex;
		flex-direction: column;
		padding-left: 20rpx;
		flex: 1;
	}
	.goods-discounts{
		width: 160rpx;
		font-size: 24rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 50rpx;
		border-radius: 25rpx;
		background-image: linear-gradient(-45deg, #8834fa 0%, #bc66ff 100%);
	}
	.good-price{
		display: flex;
		margin-top: 30rpx;
		align-items: center;
	}
	.market_price{
		color: #FF0000;
		font-size: 36rpx;
		margin-right: 10rpx;
		font-weight: bold;
	}
	.member_price{
		font-size: 24rpx;
		border: 1rpx solid #999999;
		border-radius: 15rpx;
		padding: 10rpx 10rpx 10rpx 0;
	}
	.member_title{
		padding: 10rpx 10rpx;
		background-color: #181818;
		color: #FFFFFF;
		border-top-left-radius: 15rpx;
		border-bottom-left-radius: 15rpx;
		margin-right: 10rpx;
	}
	.store-sku_no{
		font-size: 24rpx;
		color: #999999;
		margin-top: 20rpx;
	}
	.sku_no{
		margin-left: 10rpx;
	}
	.isShow .specs-cont-pay{
		padding: 30rpx 0 0;
		color: #999999;
	}
	.isShow .specs-cont{
		color: #999999;
	}
	.isShow .specs-cont-pay .pay-txt{
		color: #111111;
		font-weight: bold;
	}
	.changeNumber{
		display: flex;
		padding: 20rpx 0;
		align-items: center;
		justify-content: space-between;
	}
	.changeNumber .pay-txt{
		padding-left: 0;
		padding-right: 40rpx;
		font-weight: bold;
	}
	.number-hint{
		font-size: 24rpx;
		color:  #fa3475;
	}
	.number-hint text{
		padding-right: 20rpx;
	}
	
	.change-input{
		font-size: 28rpx;
		text-align: center;
		height: 100%;
		display: flex;
		justify-content: center;
		margin-right: 40rpx;
	}
	.number-input{
		height: 84rpx;
		width: 100rpx;
		display: flex;
		border-top: 1rpx solid #999999;
		border-bottom: 1rpx solid #999999;
	}
	.number-input input{
		height: 100%;
		border: 0;		
	}
	.reduce,.add-number{
		width: 100rpx;
		font-size: 56rpx;
		color: #FFFFFF;
		border: 1rpx solid #999999;
	}
	.keep-order{		
		width: 100%;
		
	}
	.button{
		margin-right: 40rpx;
		padding: 30rpx;
	}
	.keep-order-button{
		border: none !important;
		color: #FFFFFF !important;
		border-radius: 50rpx;
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
	}
	
	.see-more-discount{
		width: 100%;
		position: fixed;
		background-color: #F0F0F0;
		z-index: 521;
		opacity: 0.9;
		bottom: 110rpx;
		padding: 20rpx 0 0;
	}
	.more-discounts-title{
		width: 100%;
		text-align: center;
		font-weight: bold;
		font-size: 42rpx;
	}
	.more-discounts-hint{
		font-size: 24rpx;
		color: #fa3475;
		width: 100%;
		text-align: center;
		padding-top: 15rpx;
	}
	.all-discounts-policy{
		padding: 30rpx 20rpx 0 20rpx;
	}
	.card_list{
		padding: 0 20rpx;
	}
	.delete-see-more-discount{
		position: absolute;
		top: 20rpx;
		right: 20rpx;
	}
	.delete-see-more-discount image{
		width: 64rpx;
		height: 64rpx;
	}
</style>
