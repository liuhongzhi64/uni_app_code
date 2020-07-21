<template>
	<view class="goods_detail">
		<topBar class="topBar" :barName='barName' :barTopH='barTopH' :rightDistance='rightDistance' :lineHeight='lineHeight'></topBar>

		<!-- 主体内容 -->
		<view class="content">
			<scroll-view scroll-y :style="'height:'+height +'rpx'">
			<!-- 设置的初始跳转过来的值，后期删除 -->
			<view class="default"> {{goodsName}} </view>
			<!-- 头部轮播 -->
			<view class="topSwiper">
				<view id="topSwiper" v-if="swiperList">
					<swiper class="top-swiper" indicator-dots indicator-active-color="#ffffff" autoplay :interval='intervalTime'
					 :duration="durationTime" circular>
						<swiper-item v-for="(i,index) in swiperList" :key="index">
							<view class="top-swiper-item">
								<image :src="i.url" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>

			<!-- 活动节日 -->
			<view class="activity">
				<image src="../../static/images/0.png" mode=""></image>
			</view>

			<!-- 价格、优惠卷、提醒、介绍、领取的卷介绍 -->
			<view class="products-introduction">
				<!-- 现在价格、会员价、降价通知、收藏 -->
				<view class="price-depreciate-collect">
					<!-- 现在价格、会员价 -->
					<view class="price">
						<view class="new-price">
							<text>￥</text> 78000
						</view>
						<view class="VIP-price">
							<view class="VIP-name">
								钻卡
							</view>
							<text>￥38800</text>
						</view>
					</view>
					<!-- 降价通知、收藏 -->
					<view class="depreciate-collect">
						<view class="depreciate">
							<view class="remind-images">
								<image src="../../static/images/remind.png" mode=""></image>
							</view>
							<view class="remind-text"> 降价通知 </view>
						</view>
						<view class="collect">
							<view class="collect-images">
								<image src="../../static/images/collect.png" mode=""></image>
							</view>
							<view class="collect-text"> 收藏 </view>
						</view>
					</view>
				</view>
				<!-- 以前的价格 -->
				<view class="market-price"> 市场价 <text>￥97300</text> </view>
				<!-- 各种卷 -->
				<view class="coupons">
					<view class="couponsItem" v-for="(i,k) in couponsList" :key="k"> {{i}} </view>
				</view>
				<!-- 热卖提醒 -->
				<view class="hot-sale-remind">
					<view class="hot-sale-content">
						<view class="hot-sale"> 预热中 </view>
						<view class="hot-sale-recommend"> 该商品6月18日 9:00:00开始售卖哦~ </view>
					</view>
					<view class="remind-me"> 提醒我 </view>
				</view>
				<!-- 商品名称 -->
				<view class="prouct-name">
					<text class="label-name"> 618特惠 </text>
						我是商品名,我是商品名,我是商品名,我是商品名,我是商品名,我是商品名,我是商品名,我是商品名,我是商品名,
				</view>
				<view class="get-coupon">
					【领取】新客领券减30元！【满12800元送】价值239元HB（2片装）面膜一盒！满36800元送】价值980元华桑保利（5片装）面膜一盒；【满12800元送】价
					  值239元HB（2片装）面膜一盒！<text>查看》</text>
				</view>
			</view>

			<!-- 优惠 -->
			<view class="discounts">
				<view class="discounts-title">
					<view class="discounts-more"> 优惠 </view>
					<view class="more"> 更多》 </view>
				</view>
				<!-- 优惠政策 -->
				<view class="discounts-policy" v-for="(i,k) in discountsList" :key="k">
					<view class="policy-name"> {{i.name}} </view>
					<view class="policy-content"> {{i.content}} </view>
				</view>
			</view>

			<!-- 相关证书 -->
			<view class="certificate">
				<view class="certificate-details" v-for="(i,k) in certificateList" :key="k">
					<view class="certificate-image">
						<image :src="i.url" mode=""></image>
					</view>
					<view class="certificate-name"> {{i.name}} </view>
				</view>
			</view>

			<!-- 相关商品 -->
			<view class="related-products">
				<view class="related-title">
					<view class="line"></view> 相关商品
				</view>
				<view class="related-products-item">
					<scroll-view class="related-products-items" scroll-x="true">
						<view class="related-products-centent">
							<view id="product-item" class="product-item" v-for="(i,k) in productList" :key='k' :data-name="i.content" @tap="gotoGoods">
								<!-- 图片 -->
								<view class="recommenImg" v-if="i.url">
									<image :src="i.url" mode=""></image>
								</view>
								<!-- 商品名称 -->
								<view class="productName" v-if="i.content">
									<view class="product-item-content">
										<text class="closed" v-if="i.closed">618特惠</text> {{i.content}}
									</view>
								</view>
								<!-- 标签 -->
								<view class="label" v-if="i.labelList.length > 0">
									<view class="labelListItem" v-for="(i,k) in i.labelList" :key="k">
										{{i}}
									</view>
								</view>
								<!-- 商品价格 -->
								<view class="productPrice" v-if="i.productPrice">
									￥{{i.productPrice}}
								</view>
								<!-- 预约和好评 -->
								<view class="subscribeAndGoodReputation" v-if="i.subscribe&&i.goodReputation">
									<!-- 预约 -->
									<view class="subscribe">
										{{i.subscribe}}预约
									</view>
									<!-- 好评 -->
									<view class="goodReputation">
										{{i.goodReputation}}%好评
									</view>
								</view>
							</view>
						</view>
						
					</scroll-view>
				</view>
			</view>

			<!-- 相关医生 -->
			<view class="related-doctor">
				<view class="related-title"> <view class="line"></view> 相关医生 </view>
				<view class="related-doctor-item">
					<swiper class="doctor-swiper" indicator-dots indicator-active-color="#fa3475" indicator-color="#000000"
					 :duration="doctorDurationTime" circular>
						<swiper-item v-for="(i,index) in doctorSwiperList" :key="index">
							<view class="doctor-recommend" v-for="(i,k) in i.doctorList" :key='k' :data-name="i.name">
								<view class="doctor-top">
									<view class="doctor-head-portrait">
										<image :src="i.url" mode=""></image>
									</view>
									<view class="doctor-abstract">
										<view class="doctor-name-recommend">
											<view class="doctor-name"> {{i.name}} </view>
											<view class="doctor-recommends"> {{i.recommend}} </view>
										</view>
										<view class="doctor-synopsis"> {{i.synopsis}} </view>
										<view class="doctor-label-list">
											<view class="doctor-label" v-for="(i,k) in i.label" :key='k'> {{i}} </view>
										</view>
										
									</view>
									
								</view>
								<view class="doctor-bottom">
									<view class="doctor-case"> 案例 <text class="text">{{i.case}}</text> </view>
									<view class="doctor-subscribe"> 预约 <text class="text">{{i.subscribe}}</text> </view>
									<view class="doctor-consult"> 咨询 <text>{{i.consult}}</text> </view>
								</view>
							</view>
						</swiper-item>
					</swiper>
					
				</view>
			</view>

			<!-- 相关日记 -->
			<view class="related-diary">
				<view class="diary-top">
					<view class="related-title"> <view class="line"></view> 相关日记 </view>
					<view class="diary-more"> 查看全部 》 </view>
				</view>
				<view class="diary-recommend">
					<view class="diary-head-portrait">
						<image src="../../static/images/20.png" mode=""></image>
						<image src="../../static/images/23.png" mode=""></image>
					</view>
					<view class="diary-content">
						做完小气泡7天啦，皮肤做完后感觉整个面部的毛孔都打开了，精华也都吸收了。皮肤变得水水嫩嫩的嫩的……
					</view>
					<view class="userinfo">
						<view class="user-head-portrait-name">
							<view class="user-head-portrait">
								<image src="../../static/images/20.png" mode=""></image>
							</view>
							<view class="user-name"> 用户昵称几个字 </view>
						</view>
						<view class="leave-word-time"> 2019.03.14</view>
					</view>
				</view>
			</view>

			<!-- 问答 -->
			<view class="questions-answers">
				<view class="diary-top">
					<view class="related-title"> <view class="line"></view> 问答 </view>
					<view class="diary-more"> 更多 》 </view>
				</view>
				<view class="questions-answers-item" v-for="(i,k) in questionsAnswersList" :key="k">
					<view class="questions-and-content">
						<view class="questions"> 问 </view>
						<view class="questions-content"> {{i.content}} </view>
					</view>
					<view class="answers"> {{i.answers}}个问答 </view>
				</view>
			</view>

			<!-- 评价 -->
			<view class="evaluate">
				<view class="diary-top">
					<view class="related-title"> <view class="line"></view> 评价 </view>
					<view class="diary-more"> 98%好评 </view>
				</view>
				<view class="evaluate-content" v-for="(i,k) in evaluate" :key="k">
					<view class="evaluate-label"> <view class="label-item" v-for="(i,k) in i.label" :key="k">{{i}}</view> </view>
					<view class="headPortrait-name">
						<view class="headPortrait">
							<image :src="i.headPortrait" mode=""></image>
						</view>
						<view class="name-score">
							<view class="evaluate-user-name"> {{i.userName}} </view>
							<view class="score"> {{i.score}} </view>
						</view>
						
					</view>
					<view class="evaluate-details"> {{i.content}} </view>
					<view class="effect-picture">
						<image :src="i" mode="" v-for="(i,k) in i.effectPicture" :key="k"></image>
					</view>
					<view class="trade-name"> {{i.tradename}} </view>
				</view>
			</view>

			<!-- 项目价格表 -->
			<view class="all-table">
				<view class="item-price">
					<view class="item-top">
						项目价格表
					</view>
					<view class="table">
						<view class="across">
							<view class="across-item">
								<view class="item-name"> 项目名称 </view>
								<view class="item-name"> 润百颜黑金 </view>
								<view class="item-name"> 伊婉C </view>
								<view class="item-name"> 伊婉V </view>
							</view>
							<view class="across-item">
								<view class="item-name"> 项目组合 </view>
								<view class="item-name"> 1ML </view>
								<view class="item-name"> 1ML </view>
								<view class="item-name"> 1ML </view>
							</view>
							<view class="across-item">
								<view class="item-name"> 医生/级别 </view>
								<view class="item-name"> 中 </view>
								<view class="item-name"> 高 </view>
								<view class="item-name"> 中 </view>
							</view>
							<view class="across-item">
								<view class="item-name"> 销售价格 </view>
								<view class="item-name prouct-price"> 980 </view>
								<view class="item-name prouct-price"> 1280 </view>
								<view class="item-name prouct-price"> 1680 </view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- 额外费用 -->
				<view class="extra-expense">
					<view class="item-top">
						额外费用
					</view>
					<view class="across">
						<view class="extra-across-item">
							<view class="item-name"> 项目名称 </view>
							<view class="item-name"> TSG动感深V胸2.0 </view>
							<view class="item-name"> TSG动感深V胸2.0 </view>
							<view class="item-name"> TSG动感深V胸2.0 </view>
						</view>
						<view class="extra-across-item">
							<view class="item-name"> 医生 </view>
							<view class="item-name"> 艾剑英 </view>
							<view class="item-name"> 邱伟 </view>
							<view class="item-name"> 谢凯英 </view>
						</view>
						<view class="extra-across-item">
							<view class="item-name"> 额外收费 </view>
							<view class="item-name"> 无额外费用 </view>
							<view class="item-name"> 无额外费用 </view>
							<view class="item-name prouct-price"> 加3000点名费 </view>
						</view>
					</view>
				</view>
				
				<!-- 服务流程 -->
				<view class="service-process">
					<view class="item-top">
						服务流程
					</view>
					<view class="across">
						<view class="service-across-item">
							<view class="item-name"> 流程步骤 </view>
							<view class="item-name"> 1、面诊 </view>
							<view class="item-name"> 2、手术 </view>
							<view class="item-name"> 3、术后消肿 </view>
						</view>
						<view class="service-across-item">
							<view class="item-name"> 时间 </view>
							<view class="item-name"> 10分钟 </view>
							<view class="item-name"> 80分钟 </view>
							<view class="item-name"> 15分钟 </view>
						</view>
					</view>
				</view>
				
				<!-- 购买需知 -->
				<view class="need-to-know">
					<view class="item-top">
						购买需知
					</view>
					<view class="vertical-item">
						<view class="vertical-item-name first"> 信息标题 </view>
						<view class="vertical-item-explain first"> 详细说明 </view>
					</view>
					<view class="vertical-item">
						<view class="vertical-item-name"> 1、有效期 </view>
						<view class="vertical-item-explain"> 一个月 </view>
					</view>
					<view class="vertical-item">
						<view class="vertical-item-name"> 2、预约信息 </view>
						<view class="vertical-item-explain"> <view>1）拍下后一个月内使用 2）此项目仅限购买一次</view> </view>
					</view>
					<view class="vertical-item">
						<view class="vertical-item-name"> 3、可用时间 </view>
						<view class="vertical-item-explain"> 08：30-18：00（休息日） </view>
					</view>
				</view>
			</view>


			<!-- 详情 -->
			<view class="particulars">
				<view class="related-title"> <view class="line"></view> 详情 </view>
				<view class="particulars-image">
					<image src="../../static/images/20.png" mode=""></image>
				</view>
			</view>

			<!-- 为你推荐 -->
			<view class="recommend-for-you">
				<view class="related-title"> <view class="line"></view> 为你推荐 </view>
				<view class="recommend-for-you-product">
					<view id="product-item" class="product-item" v-for="(i,k) in productList" :key='k' :data-name="i.content" @tap="gotoGoods">
						<!-- 图片 -->
						<view class="recommenImg" v-if="i.url">
							<image :src="i.url" mode=""></image>
						</view>
						<!-- 商品名称 -->
						<view class="productName" v-if="i.content">
							<view class="product-item-content">
								<text class="closed" v-if="i.closed">618特惠</text> {{i.content}}
							</view>
						</view>
						<!-- 标签 -->
						<view class="label" v-if="i.labelList.length > 0">
							<view class="labelListItem" v-for="(i,k) in i.labelList" :key="k">
								{{i}}
							</view>
						</view>
						<!-- 商品价格 -->
						<view class="productPrice" v-if="i.productPrice">
							<view class="recommend-for-you-productPrice">
								￥{{i.productPrice}}
							</view>	
						</view>
						<!-- 预约和好评 -->
						<view class="subscribeAndGoodReputation" v-if="i.subscribe&&i.goodReputation">
							<!-- 预约 -->
							<view class="subscribe">
								{{i.subscribe}}预约
							</view>
							<!-- 好评 -->
							<view class="goodReputation">
								{{i.goodReputation}}%好评
							</view>
						</view>
					</view>
				</view>
				
			</view>
			</scroll-view>
		</view>
		<!-- 底部定位 -->
		<view class="consult-share-cart-addCart-shopNow">
			<!-- 咨询 -->
			<view class="consult">
				<view class="consult-image">
					<image src="../../static/images/wechat.png" mode=""></image>
				</view>
				<view class="consult-text"> 咨询 </view>
			</view>

			<!-- 分享 -->
			<view class="share">
				<view class="share-image">
					<image src="../../static/images/wechat.png" mode=""></image>
				</view>
				<view class="share-text"> 分享 </view>
			</view>

			<!-- 购物车 -->
			<view class="cart" @tap="cart">
				<view class="cart-number">
					<view class="cartImg">
						<image src="../../static/images/cart.png" mode=""></image>
					</view>
					<view class="cartNumber">
						{{carts}}
					</view>
				</view>
				<view class="cart-text">
					购物车
				</view>
			</view>

			<!-- 加入购物车 -->
			<view class="add-cart"> 加入购物车 </view>

			<!-- 立即购买 -->
			<view class="shop-now"> 立即购买 </view>
		</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	export default {
		components: {
			topBar,
		},
		data() {
			return {
				goodsName: '', //商品名
				barTopH: 0,
				rightDistance: 0,
				lineHeight: 0,
				barName: 'particularsPage', //导航条名称
				height: 0, //
				swiperList: [{
						id: 0,
						url: '../../static/images/test.jpg',
					},
					{
						id: 1,
						url: '../../static/images/test.jpg',
					},
				],
				intervalTime: 3000, //自动切换时间间隔
				durationTime: 1000, //	滑动动画时长
				carts: 3, //购物车
				couponsList: ['首单必减', '满20000减2000', '支付有礼'], //优惠卷
				discountsList:[
					{name:'限购',content:'该商品购买1件时享受单件￥19800，超出数量不再有效'},
					{name:'积分',content:'购买返积分'},
					{name:'喵豆',content:'购买返喵豆'},
					{name:'会员权益',content:'会员95折，并可与满减、券等优惠叠加使价格更加美丽'},
					{name:'优惠套装',content:'该商品共有1个优惠套装'},
					{name:'收单立减',content:'新人首单立减50元'},
				],//优惠政策
				certificateList:[
					{name:'中国5A级医美机构',url:'../../static/images/19.png'},
					{name:'德国莱茵TUV-SQS国际认证',url:'../../static/images/19.png'},
					{name:'四级整形资质医院',url:'../../static/images/19.png'},
					{name:'中国十大行业名牌',url:'../../static/images/19.png'},
				],//相关证书
				productList:[
					{
						url: '../../static/images/19.png',
						content: '商品名称商品名称商品名称商品名称,超过两黄金自动省略号', //名称
						productPrice: '19800', //价格
						subscribe: 477, //预约
						goodReputation: '98', //好评
						closed: false,
						labelList: [] //标签
					},
					{
						url: '../../static/images/20.png',
						content: '商品名称商品名称商品名称商品名称,超过两黄金自动省略号', //名称
						productPrice: '19800', //价格
						subscribe: 477, //预约
						goodReputation: '98', //好评
						closed: false,
						labelList: ['眼部美容', '眼部'] //标签
					},
					{
						url: '../../static/images/20.png',
						content: '商品名称商品名称商品名称商品名称,超过两黄金自动省略号', //名称
						productPrice: '19800', //价格
						subscribe: 477, //预约
						goodReputation: '98', //好评
						closed: true,
						labelList: ['眼部美容', '眼部'] //标签
					},
				],//相关商品
				doctorDurationTime:1000,
				doctorSwiperList:[
					{
						doctorList:[
							{
								url:'../../static/images/2.png',
								name:'程杨',
								recommend:'华美紫馨眼部整形及修复修养调剂...',
								synopsis:'急速纳米美眼创始人；急速轻龄美眼创始人',
								label:['双眼皮芙蓉','手术隆鼻','双眼皮修复'],
								case:143,
								subscribe:121,
								consult:2020
							},
							{
								url:'../../static/images/2.png',
								name:'程杨',
								recommend:'华美紫馨眼部整形及修复修养调剂...',
								synopsis:'急速纳米美眼创始人；急速轻龄美眼创始人',
								label:['双眼皮芙蓉','手术隆鼻','双眼皮修复'],
								case:143,
								subscribe:121,
								consult:2020
							},
						],//相关医生
					},
					{
						doctorList:[
							{
								url:'../../static/images/2.png',
								name:'程杨',
								recommend:'华美紫馨眼部整形及修复修养调剂...',
								synopsis:'急速纳米美眼创始人；急速轻龄美眼创始人',
								label:['双眼皮芙蓉','手术隆鼻','双眼皮修复'],
								case:143,
								subscribe:121,
								consult:2020
							},
							{
								url:'../../static/images/2.png',
								name:'程杨',
								recommend:'华美紫馨眼部整形及修复修养调剂...',
								synopsis:'急速纳米美眼创始人；急速轻龄美眼创始人',
								label:['双眼皮芙蓉','手术隆鼻','双眼皮修复'],
								case:143,
								subscribe:121,
								consult:2020
							},
						],//相关医生
					},
					{
						doctorList:[
							{
								url:'../../static/images/2.png',
								name:'程杨',
								recommend:'华美紫馨眼部整形及修复修养调剂...',
								synopsis:'急速纳米美眼创始人；急速轻龄美眼创始人',
								label:['双眼皮芙蓉','手术隆鼻','双眼皮修复'],
								case:143,
								subscribe:121,
								consult:2020
							},
							{
								url:'../../static/images/2.png',
								name:'程杨',
								recommend:'华美紫馨眼部整形及修复修养调剂...',
								synopsis:'急速纳米美眼创始人；急速轻龄美眼创始人',
								label:['双眼皮芙蓉','手术隆鼻','双眼皮修复'],
								case:143,
								subscribe:121,
								consult:2020
							},
						],//相关医生
					},
				],
				questionsAnswersList:[
					{content:'做了双眼皮之后会肿的很久嘛，对视力会不会有影响这些啊...',answers:3},
					{content:'割双眼皮会不会很痛啊？',answers:2},
				],
				evaluate:[
					{
						label:['医生专业','环境很好','服务很好','效果很棒'],//标签
						userName:'用户昵称几个字',//昵称
						headPortrait:'../../static/images/20.png',//头像
						score:5,
						content:"我是评论内容，我是评论内容，我是评论内容，我是评论内容，的最多显示两排多的内容省略我是评论内容多的内容互换不会不改变省略……",
						effectPicture:['../../static/images/19.png','../../static/images/20.png','../../static/images/23.png'],//效果图
						tradename:'# 急速纳米美眼，尊享版'
					},
					{
						label:[],//标签
						userName:'用户昵称几个字',//昵称
						headPortrait:'../../static/images/20.png',//头像
						score:5,
						content:"我是评论内容，我是评论内容，我是评论内容，我是评论内容，的最多显示两排多的内容省略我是评论内容多的内容互换不会不改变省略……",
						effectPicture:['../../static/images/19.png','../../static/images/20.png','../../static/images/23.png'],//效果图
						tradename:'# 急速纳米美眼，尊享版'
					},
				],
				
			}
		},
		onLoad: function(option) {
			let that = this
			that.goodsName = option.goods
			that.height = uni.getSystemInfoSync().screenHeight*1.6;
			console.log(that.height)
			console.log(option)
		},
		onReady: function() {
			let that = this;
			let pageHeight = 0
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					pageHeight = res.windowHeight
					console.log('pageHeight', pageHeight)
					let menu = uni.getMenuButtonBoundingClientRect();
					that.rightDistance = menu.width
					that.barTopH = menu.top
					that.lineHeight = menu.height
				}
			})
		},
		methods: {
			// 点击商品
			gotoGoods: function(e) {
				let goods = e.currentTarget.dataset.name
				uni.navigateTo({
					url: `/pages/goods/goods_detail?goods=${goods}`,
				})
			},
			// 购物车
			cart: function() {
				uni.navigateTo({
					url: '/pages/cart/cart',
				})
			},
		}
	}
</script>

<style scoped>
	.content {
		padding-top: 160rpx;
		/* padding-bottom: 105rpx; */
		background-color: #F6F6F6;
		height: 100%;
	}

	.top-swiper {
		height: 750rpx;
	}

	.top-swiper-item image {
		height: 750rpx;
		width: 100%;
	}

	.activity image {
		height: 100rpx;
		width: 100%;
	}

	/* 介绍 */
	.products-introduction {
		border-radius: 0 0 24rpx 24rpx;
		background-color: #FFFFFF;
		padding-bottom: 40rpx;
		white-space: normal;
	}

	/* 价格、收藏 */
	.price-depreciate-collect {
		display: flex;
		justify-content: space-between;
		padding: 10rpx 30rpx 0;
		line-height: 80rpx;
	}

	.price {
		align-items: center;
	}

	.price,
	.depreciate-collect,
	.VIP-price {
		display: flex;
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
		padding: 0 30rpx;
		font-size: 24rpx;
		color: #9e9e9e;
		margin-top: -20rpx;
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
	}

	.depreciate {
		margin-right: 20rpx;
	}

	.remind-images,
	.remind-images image,
	.collect-images,
	.collect-images image {
		width: 30rpx;
		height: 28rpx;
	}

	.remind-text,
	.collect-text {
		font-size: 20rpx;
		color: #111111;
	}

	/* 优惠卷 */
	.coupons {
		display: flex;
		padding:20rpx 30rpx;
		flex-wrap: wrap;
	}

	.couponsItem {
		border: 1rpx solid #fa3475;
		font-size: 20rpx;
		text-align: center;
		padding: 5rpx 10rpx;
		margin-right: 20rpx;
		color: #fa3475;
	}

	.hot-sale-remind {
		padding:0 30rpx;
		font-size: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
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
	
	.hot-sale-recommend{
		color: #999999;
	}
	
	.remind-me{
		background-image: linear-gradient(-45deg, 
			#fa3475 0%, 
			#ff6699 100%);
		border-radius: 15rpx;
		padding: 8rpx 20rpx;
		color: #FFFFFF;
	}
	
	/* 商品名 */
	.prouct-name{
		padding: 20rpx 30rpx;
		height: 80rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-size: 32rpx;
		line-height: 48rpx;
		color: #111111;
	}
	.label-name{
		font-size: 18rpx;
		width: 85rpx;
		height: 26rpx;
		color: #ffffff;
		background-color: #882ddc;
		border-radius: 4rpx;
		margin-right: 20rpx;
		padding: 10rpx 10rpx 5rpx;
	}
	
	/* 领取卷的介绍 */
	.get-coupon{
		padding: 20rpx 30rpx;
		height: 80rpx;
		font-size: 20rpx;
		color: #999999;
		line-height: 30rpx;
	}
	
	.get-coupon text{
		color: #fa3475;
	}
	
	/* 优惠 */
	.discounts {
		margin-top: 20rpx;
		margin-bottom: 30rpx;
		padding: 30rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
	}
	
	.discounts-title{
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		line-height: 48rpx;
		margin-bottom: 30rpx;
	}
	.discounts-more{
		font-weight: bolder;
		font-size: 28rpx;
		color: #111111;
	}
	.more{
		color:  #fa3475;
	}
	
	/* 优惠政策 */
	.discounts-policy{
		display: flex;
		font-size: 24rpx;
		margin-bottom: 30rpx;
	}
	.policy-name{
		color:  #fa3475;
		height: 30rpx;
		line-height: 30rpx;
		text-align: center;
		background-color: #ffe8f0;
		border-radius: 15rpx;
		padding: 0 20rpx;
		margin-right: 30rpx;
	}
	.policy-content{
		width: 510rpx;
		line-height: 30rpx;
		color: #000000;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	
	/* 相关证书 */
	.certificate{
		padding: 30rpx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		border-radius: 24rpx;
	}
	.certificate-details{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.certificate-details image{
		width: 80rpx;
		height: 80rpx;
	}
	
	.certificate-name{
		margin-top: 20rpx;
		font-size: 18rpx;
		color: #111111;
		text-align: center;
		line-height: 24rpx;
	}
	
	/* 相关商品 */
	.related-products{
		padding: 30rpx 0 0 20rpx;
	}
	
	.line{
		width: 4rpx;
		height: 16rpx;
		background-color: #fa3576;
		margin-right: 20rpx;
	}
	.related-title{
		font-size: 28rpx;
		line-height: 48rpx;
		color: #111111;
		font-weight: bolder;
		display: flex;
		align-items: center;
	}
	
	.related-products-item{
		white-space: nowrap;
	}
	.doctor-swiper{
		height: 650rpx;
	}
	.related-products-items{
		width: 100%;
		height: 490rpx;
	}
	.related-products-centent{
		display: flex;
		justify-content: space-between;
		height: 100%;
		width: 100%;
	}
	
	.product-item{
		/* display: inline-block; */
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
	.product-item-content{
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
		padding-left:20rpx ;
	}

	.subscribeAndGoodReputation {
		display: flex;
		justify-content: space-between;
		text-align: center;
		padding: 20rpx;
	}
	
	.subscribe{
		color: #666666;
	}
	
	.goodReputation{
		color: #fa3475;
	}
	
	/* 相关医生 */
	.related-doctor{
		padding: 0 20rpx 30rpx;
		margin-top: 20rpx;
	}
	
	.doctor-recommend{
		display: flex;
		background-color: #FFFFFF;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		padding: 20rpx 35rpx;
		margin-bottom: 30rpx;
		border-radius: 24rpx;
	}
	.doctor-top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
	}
	.doctor-abstract{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		line-height: 30rpx;
		height: 150rpx;
	}
	.doctor-head-portrait{
		width: 150rpx;
		height: 150rpx;
		background-color: #cccccc;
		border: solid 2px #f0f0f0;
		margin-right: 20rpx;
	}
	.doctor-head-portrait image{
		width: 150rpx;
		height: 150rpx;
	}
	.doctor-name-recommend{
		display: flex;
		color: #111111;
		text-align: center;
		align-items: baseline;
	}
	.doctor-name{
		font-size: 32rpx;
		margin-right: 5rpx;
	}
	.doctor-recommends{
		width: 280rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	
	.doctor-synopsis{
		color: #9a9a9a;
	}
	
	.doctor-label-list{
		display: flex;
		justify-content: space-between;
	}
	
	.doctor-label{
		font-size: 20rpx;
		color: #fa3475;
		border-radius: 18px;
		border: solid 1px #fa3475;
		padding: 10rpx 20rpx;
	}
	
	.doctor-bottom{
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
	
	.doctor-bottom text{
		color: #111111;
		margin-left: 10rpx;
	}
	
	.text{
		border-right: 1rpx solid #dadada;
		padding-right: 40rpx;
	}
	
	/* 相关日记 */
	.related-diary{
		background-color: #FFFFFF;
		padding: 30rpx 20rpx;
		border-radius: 24rpx;
	}
	.diary-top{
		display: flex;
		justify-content: space-between;
	}
	.diary-more{
		font-size: 24rpx;
		color: #fa3475;
	}
	.diary-head-portrait{
		padding: 16rpx 0 0;
		display: flex;
		justify-content: space-between;
	}
	.diary-head-portrait image{
		width: 350rpx;
		height: 320rpx;
		border-radius: 16rpx;
	}
	.diary-content{
		font-size: #111111;
		font-size: 24rpx;
		line-height: 50rpx;
	}
	.userinfo{
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #999999;
		font-size: 24rpx;
		margin-top: 20rpx;
	}
	.user-head-portrait-name{
		display: flex;
		align-items: center;
		width: 50%;
	}
	.user-head-portrait{
		width: 74rpx;
		height: 74rpx;
		margin-right: 20rpx;
	}
	.user-head-portrait image{
		width: 74rpx;
		height: 74rpx;
		border-radius: 37rpx;
	}
	
	/* 问答 */
	.questions-answers{
		margin-top: 20rpx;
		padding: 30rpx 20rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
	}
	.questions-answers-item{
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		color: #111111;
		align-items: center;
	}
	.questions-and-content{
		display: flex;
		padding: 20rpx 0;
	}
	.questions{
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
	.questions-content{
		width: 520rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.answers{
		color: #999999;
	}
	
	/* 评价 */
	.evaluate{
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		padding: 30rpx 20rpx;
	}
	.evaluate-content{
		font-size: 24rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.evaluate-label{
		display: flex;
		margin-top: 20rpx;
		align-items: center;
		flex-wrap: wrap;
	}
	.label-item{
		background-color: #ffe8f0;
		border-radius: 18rpx;
		padding: 8rpx 30rpx;
		margin-right: 10rpx;
	}
	.headPortrait-name{
		margin-top: 20rpx;
		display: flex;
		align-items: center;
	}
	.headPortrait{
		width: 74rpx;
		height: 74rpx;
		border-radius: 37rpx;
		margin-right: 10rpx;
	}
	.headPortrait image{
		width: 74rpx;
		height: 74rpx;
		border-radius: 37rpx;
	}
	.name-score{
		color: #999999;
	}
	.evaluate-details{
		color: #111111;
		margin-top: 20rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.effect-picture{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20rpx;
	}
	.effect-picture image{
		width: 230rpx;
		height: 230rpx;
		border-radius: 16rpx;
	}
	.trade-name{
		font-size: 20rpx;
		color: #999999;
		margin-top: 20rpx;
	}
	
	/* 所有表 */
	.all-table{
		padding: 40rpx 20rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
	}
	/* 项目价格表 */
	.item-price,.extra-expense,.service-process,.need-to-know{
		border: 1rpx solid #999999;
		font-size: 24rpx;
		margin-bottom: 30rpx;
		border-bottom: none;
	}
	.need-to-know{
		margin-bottom:0;
	}
	.item-top{
		background-color: #f0f0f0;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		font-weight: bolder;
	}
	.across{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		text-align: center;
	}
	.across-item,.extra-across-item,.service-across-item{
		width: 25%;
		border: 1rpx solid #999999;
		color: #999999;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-right: none;
	}
	.extra-across-item{
		width: 33%;
	}
	.service-across-item{
		width: 50%;
	}
	.across-item:first-child,.extra-across-item:first-child,.service-across-item:first-child,.need-to-know-left-item:first-child{
		border-left: none;
	}
	.across-item .item-name:last-child,.extra-across-item .item-name:last-child,.service-across-item .item-name:last-child,.need-to-know-left-item .item-name:last-child{
		border-bottom: none;
	}
	.item-name{
		padding: 20rpx 0;
		width: 100%;
		border-bottom: 1rpx solid #eeeeee;
	}

	.prouct-price{
		color: #fa3475;
		font-weight: normal;
		font-style: italic;
	}
	.vertical-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		border-top: 1rpx solid #eeeeee;
		color: #999999;
	}
	.first{
		border-top: 1rpx solid #999999;
	}
	.vertical-item:last-child{
		border-bottom: 1rpx solid #999999;
	}
	.vertical-item-name{
		padding: 20rpx 0;
		width: 30%;
	}
	.vertical-item-explain{
		flex: 1;
		padding: 20rpx 0;
		border-left: 1rpx solid #999999;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.vertical-item-explain view{
		width: 260rpx;
	}
	
	/* 详情 */
	.particulars{
		padding: 40rpx 0;
		margin-top: 20rpx;
		border-radius: 24rpx;
		background-color: #FFFFFF;
	}
	.particulars .related-title{
		padding: 0 20rpx 20rpx;
	}
	.particulars-image,.particulars-image image{
		width: 100%;
		/* height: 1528rpx; */
	}
	
	/* 为你推荐 */
	.recommend-for-you{
		padding: 30rpx 20rpx;
		margin-bottom: 105rpx;
	}
	.recommend-for-you .product-item{
		width: 48%;
		height: auto;
		margin: 0;
		margin-bottom: 20rpx;
	}
	.recommend-for-you-product{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.recommend-for-you .recommenImg{
		width: 100%;
	}
	.recommend-for-you .product-item image{
		width: 100%;
		height: 350rpx;
	}
	.recommend-for-you .productPrice{
		padding-left: 20rpx;
		padding-right: 20rpx;
	}
	.recommend-for-you-productPrice{
		padding-bottom: 20rpx;
		border-bottom: 1rpx solid #eeeeee;
	}
	
	/* 底部定位 */
	.consult-share-cart-addCart-shopNow {
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 12rpx 30rpx;
		width: 100%;
		background-color: #333333;
		color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
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
		background-image: linear-gradient(-45deg,
			#fa3475 0%,
			#ff6699 100%);
	}
</style>
