<template>
	<view class="goods_detail">
		<topBar class="topBar" :barName='barName' :barImage='barImage' :topBackgroundColor='topBackgroundColor' :backImage='backImage'
		 :color='color' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :title='title'
		 :menuBottom='menuBottom'></topBar>

		<!-- 主体内容 -->
		<view class="content" :style="[{'padding-top':menuBottom+10+'px'}]" v-for="(item,index) in contentList" :key='index'>
			<scroll-view scroll-y :style="'height:'+height +'rpx'">
				<!-- 头部轮播 -->
				<view class="topSwiper">
					<view id="topSwiper">
						<swiper class="top-swiper" indicator-dots indicator-active-color="#ffffff" autoplay :interval='intervalTime'
						 :duration="durationTime" circular>
							<swiper-item>
								<!-- <video class="video" :src="requestUrl+item.video_list"></video> -->
							</swiper-item>
							<swiper-item v-for="(i,k) in swiperList" :key="k">
								<view class="top-swiper-item">
									<!-- <image class="label" :src="item.sku.spu_icon" mode="widthFix"></image> -->
									<image class="banner-img" :src="requestUrl+i" lazy-load='true'></image>
								</view>
							</swiper-item>

						</swiper>
					</view>
				</view>

				<!-- 活动节日 -->
				<view class="activity">
					<image src="https://xcx.hmzixin.com/upload/images/3.0/4.jpg" mode="widthFix"></image>
				</view>

				<!-- 价格、优惠卷、提醒、介绍、领取的卷介绍 -->
				<view class="products-introduction">
					<!-- 现在价格、会员价、降价通知、收藏 -->
					<view class="price-depreciate-collect">
						<!-- 现在价格、会员价 -->
						<view class="price">
							<view class="new-price">
								<text>￥</text> {{market_price}}
							</view>
							<!-- <view class="VIP-price">
								<view class="VIP-name"> 钻卡 </view>
								<text>￥38800</text>
							</view> -->
						</view>
						<!-- 降价通知、收藏 -->
						<view class="depreciate-collect">
							<view class="depreciate">
								<view class="remind-images">
									<image src="https://xcx.hmzixin.com/upload/images/3.0/icon_wechat.png" mode=""></image>
								</view>
								<view class="remind-text"> 分享 </view>
							</view>
							<view class="collect">
								<view class="collect-images">
									<image v-if="is_collect == 0" src="https://xcx.hmzixin.com/upload/images/3.0/collect.png" mode=""></image>
									<image v-if="is_collect == 1" src="https://xcx.hmzixin.com/upload/images/3.0/collect_hover.png"></image>
								</view>
								<view class="collect-text"> 收藏 </view>
							</view>

						</view>
					</view>
					<!-- 以前的价格 -->
					<view class="market-price"> 市场价 <text>￥{{sale_price}}</text> </view>

					<!-- 热卖提醒 -->
					<view class="hot-sale-remind">
						<view class="hot-sale-content">
							<view class="hot-sale"> 预热中 </view>
							<view class="hot-sale-recommend"> 该商品6月18日 9:00:00开始售卖哦~ </view>
						</view>
						<view class="remind-me" @tap='subscribe'> 提醒我 </view>
					</view>
					<!-- 商品名称 -->
					<view class="prouct-name">
						<text class="label-name"> 618特惠 </text>
						<text> {{goods_name}}</text>
					</view>

					<view class="sale-content">
						<view>成都市</view>
						<view class="red">好评率：98.47%</view>
						<view>已售：1244</view>
					</view>
					<view class="get-coupon">{{details_prompt}}<text>查看></text>
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

				<!-- 版本、规格、部位、医生 -->

				<view class="specs">
					<template >
						<view class="specs-content" v-for="(item,index) in spec_value" :key="index">
							<view class="specs-title">{{item.name}}</view>
							<view class="specs-cont">
								<view class="li" 
								 v-for="(is,sindex) in item.attr" 
								 :class="[spec[index].attr[sindex]==0?'':(spec[index].attr[sindex]==1?'li-hover':'li-gray')]"
								 
								 :key="sindex" 
								 :data-index="index" 
								 :data-sindex="sindex" 
								 @tap="spec[index].attr[sindex]==0?getSpec(index,sindex):(spec[index].attr[sindex]==1?cancelSpec(index,sindex):'')">
									{{sindex}}{{is}} {{index}}
								<!-- 	{{spec[index].attr[sindex]}}
									<text   :class="spec[index].attr[sindex]==0?'getSpec1':'cancelSpec2'">22</text> -->
									<!-- [spec[index].attr[sindex]==0?getSpec(index,sindex):(spec[index].attr[sindex]==1?cancelSpec(index,sindex):'')] -->
								</view>
								
							</view>
						</view>
						
					</template>
				</view>


				<view class="specs">
					<view class="specs-cont">
						<text class="pay-txt">支付</text>
						<view class="li" :class="[isPay==0?'li-hover':'']" v-if="pay_type==0 || pay_type==2">预约金</view>
						<view class="li" :class="[isPay==1?'li-hover':'']" v-if="pay_type==1 || pay_type==2">全款付</view>
					</view>
				</view>

				<!-- 相关证书 -->
				<view class="certificate">
					<image src="https://xcx.hmzixin.com/upload/images/3.0/qualifications.jpg" mode="widthFix"></image>
				</view>

				<!-- 相关商品 -->
				<view class="related-products">
					<view class="related-title">
						<view class="line"></view> 相关商品
					</view>
					<view class="related-products-item">
						<porduct :width=260 :requestUrl='requestUrl' :crosswisePorducts='relevantGoods'></porduct>
					</view>
				</view>

				<!-- 相关医生 -->
				<view class="related-doctor">
					<view class="related-title">
						<view class="line"></view> 相关医生
					</view>
					<view class="related-doctor-item">
						<swiper class="doctor-swiper" indicator-dots indicator-active-color="#fa3475" indicator-color="#000000" :duration="doctorDurationTime"
						 circular>
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
						<view class="related-title">
							<view class="line"></view> 相关日记
						</view>
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
						<view class="related-title">
							<view class="line"></view> 问答
						</view>
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
						<view class="related-title">
							<view class="line"></view> 评价
						</view>
						<view class="diary-more"> 98%好评 </view>
					</view>
					<view class="evaluate-content" v-for="(i,k) in evaluate" :key="k">
						<view class="evaluate-label">
							<view class="label-item" v-for="(i,k) in i.label" :key="k">{{i}}</view>
						</view>
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
							<view class="vertical-item-explain">
								<view>1）拍下后一个月内使用 2）此项目仅限购买一次</view>
							</view>
						</view>
						<view class="vertical-item">
							<view class="vertical-item-name"> 3、可用时间 </view>
							<view class="vertical-item-explain"> 08：30-18：00（休息日） </view>
						</view>
					</view>
				</view>


				<!-- 详情 -->
				<view class="particulars">
					<view class="related-title">
						<view class="line"></view> 详情
					</view>
					<view class="particulars-image">
						<image src="../../static/images/20.png" mode=""></image>
					</view>
				</view>

				<!-- 为你推荐 -->
				<view class="recommend-for-you">
					<view class="related-title">
						<view class="line"></view> 为你推荐
					</view>
					<view class="recommend-for-you-product">
						<porduct :width=350 :porductList='productLists'></porduct>

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
			<view class="add-cart"> 加入购物车 </view>

			<!-- 立即购买 -->
			<view class="shop-now"> 立即购买 </view>
		</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import porduct from "../../components/porduct.vue";
	export default {
		components: {
			topBar,
			porduct
		},
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
				swiperList: [],
				intervalTime: 3000, //自动切换时间间隔
				durationTime: 1000, //	滑动动画时长
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
				
				productLists: [{
						url: '../../static/images/19.png',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: [], //标签
						headPortrait: '../../static/images/23.png', //头像
						price: 19800,
						closed: '闭馆特推',
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
						closed: '闭馆特推',
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
				doctorDurationTime: 1000,
				doctorSwiperList: [{
						doctorList: [{
								url: '../../static/images/20.png',
								name: '程杨',
								recommend: '华美紫馨眼部整形及修复修养调剂...',
								synopsis: '急速纳米美眼创始人；急速轻龄美眼创始人',
								label: ['双眼皮芙蓉', '手术隆鼻', '双眼皮修复'],
								case: 143,
								subscribe: 121,
								consult: 2020
							},
							{
								url: '../../static/images/20.png',
								name: '程杨',
								recommend: '华美紫馨眼部整形及修复修养调剂...',
								synopsis: '急速纳米美眼创始人；急速轻龄美眼创始人',
								label: ['双眼皮芙蓉', '手术隆鼻', '双眼皮修复'],
								case: 143,
								subscribe: 121,
								consult: 2020
							},
						], //相关医生
					},
					{
						doctorList: [{
								url: '../../static/images/20.png',
								name: '程杨',
								recommend: '华美紫馨眼部整形及修复修养调剂...',
								synopsis: '急速纳米美眼创始人；急速轻龄美眼创始人',
								label: ['双眼皮芙蓉', '手术隆鼻', '双眼皮修复'],
								case: 143,
								subscribe: 121,
								consult: 2020
							},
							{
								url: '../../static/images/20.png',
								name: '程杨',
								recommend: '华美紫馨眼部整形及修复修养调剂...',
								synopsis: '急速纳米美眼创始人；急速轻龄美眼创始人',
								label: ['双眼皮芙蓉', '手术隆鼻', '双眼皮修复'],
								case: 143,
								subscribe: 121,
								consult: 2020
							},
						], //相关医生
					},
					{
						doctorList: [{
								url: '../../static/images/20.png',
								name: '程杨',
								recommend: '华美紫馨眼部整形及修复修养调剂...',
								synopsis: '急速纳米美眼创始人；急速轻龄美眼创始人',
								label: ['双眼皮芙蓉', '手术隆鼻', '双眼皮修复'],
								case: 143,
								subscribe: 121,
								consult: 2020
							},
							{
								url: '../../static/images/20.png',
								name: '程杨',
								recommend: '华美紫馨眼部整形及修复修养调剂...',
								synopsis: '急速纳米美眼创始人；急速轻龄美眼创始人',
								label: ['双眼皮芙蓉', '手术隆鼻', '双眼皮修复'],
								case: 143,
								subscribe: 121,
								consult: 2020
							},
						], //相关医生
					},
				],
				questionsAnswersList: [{
						content: '做了双眼皮之后会肿的很久嘛，对视力会不会有影响这些啊...',
						answers: 3
					},
					{
						content: '割双眼皮会不会很痛啊？',
						answers: 2
					},
				],
				evaluate: [{
						label: ['医生专业', '环境很好', '服务很好', '效果很棒'], //标签
						userName: '用户昵称几个字', //昵称
						headPortrait: '../../static/images/test.jpg', //头像
						score: 5,
						content: "我是评论内容，我是评论内容，我是评论内容，我是评论内容，的最多显示两排多的内容省略我是评论内容多的内容互换不会不改变省略……",
						effectPicture: ['../../static/images/test.jpg', '../../static/images/20.png', '../../static/images/23.png'], //效果图
						tradename: '# 急速纳米美眼，尊享版'
					},
					{
						label: [], //标签
						userName: '用户昵称几个字', //昵称
						headPortrait: '../../static/images/20.png', //头像
						score: 5,
						content: "我是评论内容，我是评论内容，我是评论内容，我是评论内容，的最多显示两排多的内容省略我是评论内容多的内容互换不会不改变省略……",
						effectPicture: ['../../static/images/19.png', '../../static/images/20.png', '../../static/images/23.png'], //效果图
						tradename: '# 急速纳米美眼，尊享版'
					},
				],

				spuId: "cXJoWFpkamxFV1dmLzhPR25ubnhaQT09", //spuID
				contentList: [], //详情的主要内容
				requestUrl: '', //请求地址前缀
				sale_price: '', //销售价
				market_price: '', //市场价
				is_collect: 0, //收藏
				goods_name: '0', //商品名称
				// index:1,
				// sindex:'11',
				details_prompt: '',
				pay_type: 0,
				isPay: 0, // 0=预约金，1=全额付
				spec_value: [],
				spec: [],
				relevantGoods: []
			}
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			that.height = uni.getSystemInfoSync().screenHeight * 1.6;
			let id = option.id || that.spuId
			console.log(id)
			let sku_id = option.sku_id
			let dataInfo = {
				interfaceId: 'goodsspudetails',
				encrypted_id: id,
				// sku_id: sku_id
			}
			that.request.uniRequest("goods", dataInfo).then(res => {
				console.log(res.data)
				if (res.data.code == 1000) {
					let data = res.data.data
					uni.setStorageSync("goodsDetail", data);
					that.contentList = data
					that.swiperList = data.img
					that.market_price = data.sku.market_price
					that.sale_price = data.sku.sale_price
					that.is_collect = data.is_collect
					that.goods_name = data.goods_name
					that.details_prompt = data.sku.details_prompt
					that.pay_type = data.sku.pay_type
					that.spec = that.assembleSpec(data.sku.user_spec, 1)

					if (data.sku.pay_type == 1 || data.sku.pay_type == 2) {
						that.isPay = 1;
					}
					that.spec_value = data.spec_value
					// console.log(data)
					// console.log(that.spec)
					for(let i in that.spec){
						console.log(that.spec[i].attr)
					}
				}else{
					that.request.showToast(res.data.message)
				}
			})

			that.getRelevantGoods()
			
		},
		onReady: function() {
			let that = this;
			let pageHeight = 0
			that.videoContext = uni.createVideoContext('myVideo')
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
			// 提醒我
			subscribe: function() {
				console.log('提醒')
			},
			// 获取相关商品
			getRelevantGoods: function() {
				this.request = this.$request
				const that = this;
				let dataInfo = {
					interfaceId: "goodsrelevancespu",
					encrypted_id: that.spuId,
					offset: 0,
					limit: 1000
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					if (res.data.code === 1000) {
						that.relevantGoods = res.data.data
					}
				})
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
			getSpec: function(index,sindex,spec) {
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
			cancelSpec: function(index,sindex,spec) {
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
				let cartNumber = event.currentTarget.dataset.cartnumber || event.currentTarget.dataset.cartNumber
				// console.log(event.currentTarget.dataset.cartnumber)
				uni.navigateTo({
					url: `/pages/cart/cart?cartNumber=${cartNumber}`,
				})
			},
			
		}
	}
</script>

<style scoped>
	.content {
		background-color: #F6F6F6;
		height: 100%;
	}

	.top-swiper {
		height: 750rpx;
	}

	.video {
		width: 750rpx;
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
		padding: 0 30rpx 40rpx;
	}

	/* 价格、收藏 */
	.price-depreciate-collect {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* margin-top: -10rpx; */
		/* line-height: 80rpx; */
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
		font-size: 24rpx;
		color: #9e9e9e;
		/* margin-top: -20rpx; */
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
		padding: 0 8rpx;
		text-align: center;
		height: 26rpx;
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

	.get-coupon text {
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

	.specs-title {
		padding-top: 35rpx;
		font-size: 28rpx;
		font-weight: bold;
		color: #111111;
	}

	.specs {
		padding: 0 30rpx 30rpx;
		background: #fff;
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
		padding-top: 10rpx;
		margin-left: -30rpx;
		font-size: 24rpx;
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

	.li-hover {
		border: 2rpx solid #fa3475;
		background: #ffe8f0;
		color: #fa3475;
	}

	.li-gray {
		color: #999999;
	}

	/* 相关证书 */
	.certificate {
		padding: 30rpx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		border-radius: 24rpx;
		margin-top: 20rpx;
	}

	/* 相关商品 */
	.related-products {
		padding: 30rpx 0 0 20rpx;
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
		/* font-weight: bolder; */
		display: flex;
		align-items: center;
	}

	.related-products-item {
		white-space: nowrap;
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
		padding: 0 20rpx 30rpx;
		margin-top: 20rpx;
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
		width: 280rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.doctor-synopsis {
		color: #9a9a9a;
	}

	.doctor-label-list {
		display: flex;
		justify-content: space-between;
	}

	.doctor-label {
		font-size: 20rpx;
		color: #fa3475;
		border-radius: 18px;
		border: solid 1px #fa3475;
		padding: 10rpx 20rpx;
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
		padding: 30rpx 20rpx;
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

	.diary-head-portrait {
		padding: 16rpx 0 0;
		display: flex;
		justify-content: space-between;
	}

	.diary-head-portrait image {
		width: 350rpx;
		height: 320rpx;
		border-radius: 16rpx;
	}

	.diary-content {
		font-size: #111111;
		font-size: 24rpx;
		line-height: 40rpx;
		margin-top: 20rpx;
		font-weight: lighter;
	}

	.userinfo {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #999999;
		font-size: 24rpx;
		margin-top: 20rpx;
	}

	.user-head-portrait-name {
		display: flex;
		align-items: center;
		width: 50%;
	}

	.user-head-portrait {
		width: 74rpx;
		height: 74rpx;
		margin-right: 20rpx;
	}

	.user-head-portrait image {
		width: 74rpx;
		height: 74rpx;
		border-radius: 37rpx;
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
		padding: 40rpx 20rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
	}

	/* 项目价格表 */
	.item-price,
	.extra-expense,
	.service-process,
	.need-to-know {
		border: 1rpx solid #999999;
		font-size: 24rpx;
		margin-bottom: 30rpx;
		border-bottom: none;
	}

	.need-to-know {
		margin-bottom: 0;
	}

	.item-top {
		background-color: #f0f0f0;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		font-weight: bolder;
	}

	.across {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		text-align: center;
	}

	.across-item,
	.extra-across-item,
	.service-across-item {
		width: 25%;
		border: 1rpx solid #999999;
		color: #999999;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-right: none;
	}

	.extra-across-item {
		width: 33%;
	}

	.service-across-item {
		width: 50%;
	}

	.across-item:first-child,
	.extra-across-item:first-child,
	.service-across-item:first-child,
	.need-to-know-left-item:first-child {
		border-left: none;
	}

	.across-item .item-name:last-child,
	.extra-across-item .item-name:last-child,
	.service-across-item .item-name:last-child,
	.need-to-know-left-item .item-name:last-child {
		border-bottom: none;
	}

	.item-name {
		padding: 20rpx 0;
		width: 100%;
		border-bottom: 1rpx solid #999999;
	}

	.prouct-price {
		color: #fa3475;
		font-weight: normal;
		font-style: italic;
	}

	.vertical-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		border-top: 1rpx solid #999999;
		color: #999999;
	}

	.first {
		border-top: 1rpx solid #999999;
	}

	.vertical-item:last-child {
		border-bottom: 1rpx solid #999999;
	}

	.vertical-item-name {
		padding: 20rpx 0;
		width: 30%;
	}

	.vertical-item-explain {
		flex: 1;
		padding: 20rpx 0;
		border-left: 1rpx solid #999999;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.vertical-item-explain view {
		width: 260rpx;
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

	.particulars-image,
	.particulars-image image {
		width: 100%;
		/* height: 1528rpx; */
	}

	/* 为你推荐 */
	.recommend-for-you {
		padding: 30rpx 20rpx;
		margin-bottom: 105rpx;
	}

	.recommend-for-you .product-item {
		width: 48%;
		height: auto;
		margin: 0;
		margin-bottom: 20rpx;
	}

	.recommend-for-you-product {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
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
