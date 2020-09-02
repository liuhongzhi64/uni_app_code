<template>
	<scroll-view scroll-y :style="'height:'+height +'rpx'">
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
						<view class="VIP-name"> 钻卡 </view>
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
				<text> 我是商品名,我是商品名,我是商品名,我是商品名,我是商品名,我是商品名,我是商品名,我是商品名,我是商品名,</text>
			</view>
			<view class="get-coupon">【领取】新客领券减30元！【满12800元送】价值239元HB（2片装）面膜一盒！满36800元送】价值980元华桑保利（5片装）面膜一盒；【满12800元送】价 值239元HB（2片装）面膜一盒！<text>查看></text>
			</view>
		</view>
	
		<!-- 优惠 -->
		<view class="discounts">
			<view class="discounts-title">
				<view class="discounts-more"> 优惠 </view>
				<view class="more"> 更多 > </view>
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
			</view>
		</view>
	
		<!-- 相关商品 -->
		<view class="related-products">
			<view class="related-title">
				<view class="line"></view> 相关商品
			</view>
			<view class="related-products-item">
				<porduct :width= 260 :height=490 :crosswisePorduct='productList'   ></porduct>
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
				<view class="diary-more"> 查看全部 > </view>
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
				<view class="diary-more"> 更多 > </view>
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
					
					<view class="vertical-item">
						<view class="vertical-item-name"> 项目名称 </view>
						<view class="vertical-item-explain"> 项目组合 </view>
						<view class="vertical-item-explain "> 医生/级别 </view>
						<view class="vertical-item-explain "> 销售价格 </view>
					</view>
					<view class="vertical-item">
						<view class="vertical-item-name"> 润百颜黑金 </view>
						<view class="vertical-item-explain "> 1ML </view>
						<view class="vertical-item-explain "> 中 </view>
						<view class="vertical-item-explain  prouct-price"> 980</view>
					</view>
					<view class="vertical-item">
						<view class="vertical-item-name"> 伊婉C </view>
						<view class="vertical-item-explain"> 1ML </view>
						<view class="vertical-item-explain"> 高 </view>
						<view class="vertical-item-explain prouct-price"> 1280</view>
					</view>
					<view class="vertical-item">
						<view class="vertical-item-name"> 伊婉V </view>
						<view class="vertical-item-explain"> 1ML </view>
						<view class="vertical-item-explain"> 中 </view>
						<view class="vertical-item-explain prouct-price"> 1680</view>
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
				<porduct :width=350 :porductList='productLists' ></porduct>
				
			</view>
			
		</view>
	
	</scroll-view>
</template>

<script>
	data() {
		return {
			menuWidth: 0,
			menuTop: 0,
			menuHeight: 0,
			menuLeft: 0,
			menuBottom: 0,
			barName: 'back', //导航条名称
			topBackgroundColor: '#222222',
			color: '#FFFFFF',
			title: '详情页',
			backImage: '../static/images/return.png',
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
					newPrice: '19800', //价格
					subscribeAndGoodReputation: [{
						subscribe: '441',
						goodReputation: '98'
					}],
					closed: '',
					label: [] //标签
				},
				{
					url: '../../static/images/20.png',
					content: '商品名称商品名称商品名称商品名称,超过两黄金自动省略号', //名称
					newPrice: '19800', //价格
					subscribeAndGoodReputation: [{
						subscribe: '441',
						goodReputation: '98'
					}],
					closed:'闭馆特推',
					label: ['眼部美容', '眼部'] //标签
				},
				{
					url: '../../static/images/20.png',
					content: '商品名称商品名称商品名称商品名称,超过两黄金自动省略号', //名称
					newPrice: '19800', //价格
					subscribeAndGoodReputation: [{
						subscribe: '441',
						goodReputation: '98'
					}],
					closed: '',
					label: ['眼部美容', '眼部'] //标签
				},
			],//相关商品
			productLists: [
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
			],
			doctorDurationTime:1000,
			doctorSwiperList:[
				{
					doctorList:[
						{
							url:'../../static/images/20.png',
							name:'程杨',
							recommend:'华美紫馨眼部整形及修复修养调剂...',
							synopsis:'急速纳米美眼创始人；急速轻龄美眼创始人',
							label:['双眼皮芙蓉','手术隆鼻','双眼皮修复'],
							case:143,
							subscribe:121,
							consult:2020
						},
						{
							url:'../../static/images/20.png',
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
							url:'../../static/images/20.png',
							name:'程杨',
							recommend:'华美紫馨眼部整形及修复修养调剂...',
							synopsis:'急速纳米美眼创始人；急速轻龄美眼创始人',
							label:['双眼皮芙蓉','手术隆鼻','双眼皮修复'],
							case:143,
							subscribe:121,
							consult:2020
						},
						{
							url:'../../static/images/20.png',
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
							url:'../../static/images/20.png',
							name:'程杨',
							recommend:'华美紫馨眼部整形及修复修养调剂...',
							synopsis:'急速纳米美眼创始人；急速轻龄美眼创始人',
							label:['双眼皮芙蓉','手术隆鼻','双眼皮修复'],
							case:143,
							subscribe:121,
							consult:2020
						},
						{
							url:'../../static/images/20.png',
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
					headPortrait:'../../static/images/test.jpg',//头像
					score:5,
					content:"我是评论内容，我是评论内容，我是评论内容，我是评论内容，的最多显示两排多的内容省略我是评论内容多的内容互换不会不改变省略……",
					effectPicture:['../../static/images/test.jpg','../../static/images/20.png','../../static/images/23.png'],//效果图
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
		}
</script>

<style>
</style>
