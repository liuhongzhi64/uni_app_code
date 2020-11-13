<template>
	<view class="cart">
		<view class="top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px','background-color':topBackgroundColor,'color':color}]">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back" @click="goBack">
					<image :src="backImage" mode=""></image>
				</view>
				<view class="title"> {{title}} </view>
			</view>
		</view>
		<view class="product-to-nav" :style="[{'top':menuBottom+10+'px'}]">
			<view class="product-name" v-for="(i,k) in productNameList" :key='k' :class="{checkedPorduct :btnnum == k}" @tap="changePorduct(k)">
				<view class="product-item-name-line">
					{{ i.name }} <text>({{i.number}})</text>
					<view :class="{checkedLine :btnnum == k}">
						<view></view>
					</view>
				</view>
			</view>
		</view>
		<view class="cart-content" :style="[{'padding-top':menuBottom+58+'px'}]">
			<!-- 购物车为空 -->
			<view class="empty-cart" v-if="sku_list.length==0">
				<view class="empty-cart-image">
					<image src="../../static/images/cartBg.png" mode=""></image>
				</view>
				<view class="empty-cart-text"> 购物车还是空的哟~ </view>
				<view class="go-stroll" @tap='goToGoodsClassfiy'> 去逛逛 </view>
			</view>
			<!-- 购物车不为空 -->
			<view class="cart-have-product" v-else>
				<view class="end-cont" :class="{dis:btnnum == index}" v-for="(item,index) in productNameList" :key="index">
					<view class="card-top" @tap='goToGain'>
						<view class="can-receive">
							<view>您有</view>
							<view class="text">{{get_count}}张专属优惠券</view>
							<view class="texts">可领取~</view>
						</view>
						<view class="go-receive">
							<view class="lines">
								<view class="triangle-line"></view>
							</view>
							<view class="character">去领取&nbsp;></view>
						</view>
					</view>
					<view class="shoping-cart">
						<view class="cart-shopping-show" v-for="(items,k) in contentList.sku_list" :key='k'>
							<!-- 全选 -->
							<view class="change-check-see-more">
								<view class="change-check">
									<checkbox color='#007AFF' :checked="items.all_checked" @tap='checked_class_all(k)' />
									<text @tap='goodsClassfiy(items.category_id,items.category_title)'> {{items.category_title}} > </text>
								</view>
								<view class="add-on-item" v-if="items.cards.length>0" @tap="changeActivity(0,items.cards,items.act_info)"> 领券
								</view>
								<view class="add-on-item" v-else-if="items.act_info" @tap="changeActivity(1,items.act_info)"> 看优惠 </view>
							</view>
							<!-- 优惠活动 -->
							<view class="special-offer" v-if="items.act_info">
								<view class="specific-activity-item">
									<view class="full-reduction-activity-see-discounts" v-if="items.act_info.is_countdown==1">
										<view class="full-reduction-specific-activity">
											<view class="full-reduction"> 限时 </view>
											<view class="specific-activity">
												<text>距活动结束还剩 </text>
												<view class="activity-time">
													<view class="day houses"> {{ items.day }} </view> <text>:</text>
													<view class="houses"> {{ items.house }} </view> <text>:</text>
													<view class="second"> {{ items.second }} </view> <text>:</text>
													<view class="minute"> {{ items.minute }} </view>
												</view>
											</view>
										</view>
									</view>
									<view class="full-reduction-activity-see-discounts" v-for="(content,type) in items.act_info.act_rule" :key='type'>
										<view class="full-reduction-specific-activity">
											<view class="full-reduction"> {{content.category}} </view>
											<view class="specific-activity"> {{content.rule_name}} </view>
										</view>
									</view>
								</view>
							</view>
							<!-- 商品展示 -->
							<view class="product-item-content-all" v-for="(i,is) in items.goods_list" :key='is'>
								<view class="product-item-content" @longpress='setgoodsState(k,is)'>
									<view class="checkbox-item">
										<checkbox class="checkbox-item" color='#007AFF' :checked="i.checked" @tap='changeCheck(k,is)' />
									</view>
									<view class="goods-info">
										<view class="product-item-show">
											<view class="porduct-item-images" @tap='goToGoods(i.Sku_id,i.encrypted_id)'>
												<image :src="requestUrl+i.head_img" mode=""></image>
											</view>
											<view class="name-price-purchaseLimitationNumber-checkedNumber">
												<view class="porduct-item-name"> {{i.goods_name}} </view>
												<view class="versions" @tap='showSetSpec(i.Sku_id,i.encrypted_id,i.cart_num,i.cart_id)'>
													<view class="versions-name">
														<text class="versions-name-item" v-for="(is,z) in i.spec_name" :key='z'>
															{{z}}:{{is}}
														</text>
													</view>
													<image class="unfold" src="../../static/images/unfold.png" mode=""></image>
												</view>
												<view class="porduct-item-price-purchaseLimitationNumber-checkedNumber">
													<view class="porduct-item-price-purchaseLimitationNumber">
														<view class="porduct-item-price">
															￥<text class="price">{{i.sale_price}}</text>
															<text class="member-price" v-if="i.member">会员价</text>
														</view>
														<view class="purchaseLimitationNumber">
															* {{ i.min_buy_limit }} 件起购
															<text v-show="i.max_buy_limit>0&&i.max_buy_limit!=999999"> , 限购{{i.max_buy_limit}}件 </text>
															<text v-if="i.cut_price<0"> 比加购时降价￥{{i.cut_price}} </text>
															<text v-else-if="i.cut_price>0"> 比加购时涨价￥{{i.cut_price}} </text>
														</view>
													</view>
												</view>
											</view>
										</view>
										<view class="offline_pay-online_pay-checkedNumber">
											<view class="offline_pay-online_pay">
												<text class="online_pay">在线支付￥{{ i.online_pay*i.cart_num }}</text>
												<text class="offline_pay">到院再付￥{{ i.offline_pay*i.cart_num }}</text>
											</view>
											<view class="checkedNumber">
												<view class="subtract" @tap="setNumber(i.cart_id,-1,k,is)">
													<image src="../../static/images/subtract.png" mode=""></image>
												</view>
												<view class="input">
													<input type="number" class="cart_num" :data-k='k' :data-is='is' :data-id='i.cart_id' v-model="i.cart_num"
													 @input='setPorductNumber' maxlength="2" />
												</view>
												<view class="add" @tap="setNumber(i.cart_id,1,k,is)">
													<image src="../../static/images/add.png" mode=""></image>
												</view>
											</view>
										</view>
									</view>
								</view>
								<view class="show_goods_state" v-show="i.is_show_state" @tap='setgoodsState(k,is)'>
									<view class="this_is_goods_state">
										<view class="collection set_state" v-if="items.category_status==1" @tap='setState(0,i.cart_id,i.cart_num,items.category_id,items.category_title,i.encrypted_id)'>
											<text>移入</text> <text>收藏</text>
										</view>
										<view class="similar set_state" @tap='setState(1,i.cart_id,i.cart_num,items.category_id,items.category_title,i.encrypted_id)'>
											看相似 </view>
										<view class="delete set_state" @tap='setState(2,i.cart_id,i.cart_num,items.category_id,items.category_title,i.encrypted_id)'>
											删除 </view>
									</view>
								</view>
							</view>
							<!-- 弹窗优惠或者卡券 -->
							<scroll-view class="mantled" v-if="isShowDiscount" scroll-y="true" :style="[{'height':cardList.cards?height/2+'px':height/4+'px'}]">
								<view class="discounts-title"> 促销优惠 </view>
								<view class="discounts-hint">*温馨提示:满减、折扣、卡券均可叠加使用</view>
								<view class="special-offer" v-if="act_info">
									<view class="specific-activity-item">
										<view class="full-reduction-activity-see-discounts" v-if="act_info.is_countdown==1">
											<view class="full-reduction-specific-activity">
												<view class="full-reduction"> 限时 </view>
												<view class="specific-activity">
													<text>距活动结束还剩 </text>
													<view class="activity-time">
														<view class="day houses"> {{ items.day }} </view> <text>:</text>
														<view class="houses"> {{ items.house }} </view> <text>:</text>
														<view class="second"> {{ items.second }} </view> <text>:</text>
														<view class="minute"> {{ items.minute }} </view>
													</view>
												</view>
											</view>
										</view>
										<view class="full-reduction-activity-see-discounts" v-for="(content,type) in act_info.act_rule" :key='type'>
											<view class="full-reduction-specific-activity">
												<view class="full-reduction"> {{content.category}} </view>
												<view class="specific-activity"> {{content.rule_name}} </view>
											</view>
										</view>
									</view>
								</view>
								<view class="card_list" v-if="cardList.cards">
									<view class="card-title-all-card">
										<view class="related-title">
											<view class="line"></view> 可用优惠券
										</view>
										<view class="more-card" @tap='goToGain'> 更多优惠券 > </view>
									</view>
									<ticket :cardsList='cardList.cards' :time_now='cardList.time_now' @showTicket='showTicket' @getCards='getCards'
									 @useCard='useCard'>
									</ticket>
								</view>
								<view class="delete-discount" @tap='changeActivity(2)'>
									<image src="/static/images/delete.png" mode=""></image>
								</view>
							</scroll-view>
						</view>
					</view>
					<!-- 过期失效的商品 -->
					<view class="shoping-cart">
						<view class="cart-shopping-show" v-for="(items,k) in contentList.sku_list" :key='k' v-show="items.category_status==0">
							<view class="change-check-see-more">
								<view class="change-check">
									<text> 失效的商品 </text>
								</view>
								<view class="delete-goods" @tap='deleteInvalid(k,is)'> 清空失效商品 </view>
							</view>
							<view class="product-item-content-all" v-for="(i,is) in items.goods_list" :key='is'>
								<view class="product-item-content" @longpress='setgoodsState(k,is)'>
									<view class="goods-info">
										<view class="product-item-show">
											<view class="porduct-item-images">
												<image :src="requestUrl+i.head_img" mode=""></image>
												<view class="invalid-goods">
													<view class="delete-invalid-goods">已失效</view>
												</view>
											</view>
											<view class="name-price-purchaseLimitationNumber-checkedNumber">
												<view class="porduct-item-name"> {{i.goods_name}} </view>
												<view class="versions">
													<view class="versions-name">
														<text class="versions-name-item" v-for="(is,z) in i.spec_name" :key='z'>
															{{z}}:{{is}}
														</text>
													</view>
													<image class="unfold" src="../../static/images/unfold.png" mode=""></image>
												</view>

												<view class="porduct-item-price-purchaseLimitationNumber-checkedNumber">
													<view class="porduct-item-price-purchaseLimitationNumber">
														<view class="porduct-item-price">
															￥<text class="price">{{i.sale_price}}</text>
															<text class="member-price" v-if="i.member">会员价</text>
														</view>
														<view class="purchaseLimitationNumber">
															* {{ i.min_buy_limit }} 件起购
															<text v-show="i.max_buy_limit>0&&i.max_buy_limit!=999999"> , 限购{{i.max_buy_limit}}件 </text>
															<text v-if="i.cut_price<0"> 比加购时降价￥{{i.cut_price}} </text>
															<text v-else-if="i.cut_price>0"> 比加购时涨价￥{{i.cut_price}} </text>
														</view>
													</view>
												</view>
											</view>
										</view>
										<view class="offline_pay-online_pay-checkedNumber">
											<view class="offline_pay-online_pay">
												<text class="online_pay">在线支付￥{{ i.online_pay*i.cart_num }}</text>
												<text class="offline_pay">到院再付￥{{ i.offline_pay*i.cart_num }}</text>
											</view>
											<view class="checkedNumber">
												<view class="subtract">
													<image src="../../static/images/subtract.png" mode=""></image>
												</view>
												<view class="input">
													<input type="number" class="cart_num" :data-k='k' :data-is='is' v-model="i.cart_num" @input='setPorductNumber'
													 maxlength="2" />
												</view>
												<view class="add">
													<image src="../../static/images/add.png" mode=""></image>
												</view>
											</view>
										</view>
									</view>
								</view>
								<view class="show_goods_state" v-show="i.is_show_state" @tap='setgoodsState(k,is)'>
									<view class="this_is_goods_state">
										<view class="similar set_state" @tap='setState(1,i.cart_id,i.cart_num,items.category_id,items.category_title,i.encrypted_id)'>
											看相似 </view>
										<view class="delete set_state" @tap='setState(2,i.cart_id,i.cart_num,items.category_id,items.category_title,i.encrypted_id)'>
											删除 </view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="special-performance" v-if="specialList.content.length>0&&sku_list.length==0">
				<view class="specialList" v-if="specialList.type==1">
					<swiper indicator-dots indicator-active-color="#ff6699" autoplay interval='5000' duration='3000' circular>
						<swiper-item class="swiper-item" v-for="(item,index) in specialList.content" :key="index">
							<image :src="requestUrl+item.img" mode="widthFix"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="recommend-to-you" v-if="productLists">
				<view class="related-title">
					<view class="line"></view>
					<view>为你推荐</view>
				</view>
				<view class="subject-content">
					<goodsShow :borderRadius=24 :requestUrl='requestUrl' :width=350 :porductList='productLists'>
					</goodsShow>
				</view>
			</view>
			<!-- 全选和结算 -->
			<view class="settlement">
				<view class="settlement-info">
					<view class="change-all-goods" @tap='change_all_cart'>
						<checkbox color='#007AFF' :checked="allchecked" /> <text> 全选 </text>
					</view>
					<view class="total-discount">
						<view class="total">合计 : <text> ￥{{ order_info.off_sale || 0 }} </text> </view>
						<view class="use-discount" v-if="order_info.sale_info.length>0">
							优惠减: ￥{{ order_info.sale_price ||0 }}
							<text class="use-discount-detailed" @tap='user_discount'>优惠明细</text>
						</view>
					</view>
					<view class="goSettlement" @tap='goToSettlement()'>去结算</view>
				</view>
			</view>
		</view>
		<!-- 修改商品规格 -->
		<scroll-view class="set_goods_spec_content" scroll-y="true" v-if="this_show_goods_spec" :style="[{'height':height/2+'px'}]">
			<view class="isShow-content">
				<view class="add-card-top">
					<view class="left-head_img">
						<image :src="requestUrl+goodsContentList.sku.head_img" mode="widthFix"></image>
					</view>
					<view class="right-goods-info">
						<view class="goods-discounts" v-if="goodsContentList.sku.act.length!=0" @tap='seeMore(0)'> 参与优惠 </view>
						<view class="good-price">
							<view class="market_price">￥{{goodsContentList.sku.sale_price}}</view>
							<view class="member_price" v-if="goodsContentList.sku.member.member_title">
								<text class="member_title">{{goodsContentList.sku.member.member_title}}</text>￥{{goodsContentList.sku.member.price}}
							</view>
						</view>
						<view class="store-sku_no">
							<text v-show="goodsContentList.sku.store<=100">库存 {{goodsContentList.sku.store}}件</text>
							<text class="sku_no">编号: {{goodsContentList.sku.sku_no}}</text>
						</view>
					</view>
				</view>
				<template>
					<view class="specs-content" v-for="(item,index) in goodsContentList.spec_value" :data-index='index' :key="index">
						<view class="specs-title">
							{{item.name}}
							<!-- <text class="specs-hint" >请选择{{item.name}}</text> -->
						</view>
						<view class="specs-cont">
							<view class="li" v-for="(is,sindex) in item.attr" :key="sindex" :class="[spec[index].attr[sindex]==1?'li-hover':spec[index].attr[sindex]==0?'li-gray':'']"
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
						<text> {{ goodsContentList.sku.min_buy_limit }} 件起购</text>
						<text>限购 {{ goodsContentList.sku.max_buy_limit }} 件</text>
					</view>
					<view class="change-input">
						<view class="reduce" @tap="reduce(-1)" :style="[{'background-color':setNewGoodsNumber==goodsContentList.sku.min_buy_limit ? '#dddddd':'#999999'}]">-</view>
						<view class="number-input">
							<input type="number" v-model="setNewGoodsNumber" value=1 @input='changeGoodsNumber' />
						</view>
						<view class="add-number" @tap="reduce(1)" :style="[{'background-color':setNewGoodsNumber==goodsContentList.sku.max_buy_limit ? '#dddddd':'#999999'}]">+</view>
					</view>
				</view>
				<view class="keep-order">
					<view class="button">
						<button type="primary" class="keep-order-button" plain="true" @tap='orderSet()'>确定</button>
					</view>
				</view>
				<view class="delete-see-more-discount" @tap='seeMore(1)'>
					<image src="../../static/images/delete.png" mode=""></image>
				</view>
			</view>
		</scroll-view>
		<!-- 优惠明细 -->
		<scroll-view scroll-y="true" v-if="show_discount" :style="[{'height':height/4+'px'}]">
			<view class="this_show_discount">
				<view class="show_discount_title">优惠明细</view>
				<view class="show_discount_content">
					<view class="discount_sale_info">
						<view class="dicount_price">
							<view class="sale_info_title">商品总额</view>
							<view class="sale_info_discount_price">{{order_info.total_price}}</view>
						</view>
						<view class="dicount_price" v-for="(item,index) in order_info.sale_info" :key='index'>
							<view class="sale_info_title">{{item.category}} {{item.rule_name}} </view>
							<view class="sale_info_discount_price" v-if="item.tools_id=='giving'"> ￥{{item.sale_price}} </view>
							<view class="sale_info_discount_price" v-else> -￥{{item.sale_price}} </view>
						</view>
						<view class="all_discount">
							<view class="sale_info_title"> 优惠合计 </view>
							<view class="sale_info_discount_price"> ￥{{order_info.sale_price}} </view>
						</view>
						<view class="discount-hint">以上优惠不包含积分、喵豆、余额等用户资产抵扣，资产抵扣请在结算页面查看</view>
					</view>
					<button class="i_know" type="default" size="mini" @tap='IKnow'> 我知道了 </button>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import goodsShow from "../../components/goodsShow.vue";
	import ticket from "../../components/ticket.vue";
	export default {
		components: {
			goodsShow,
			ticket
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
				backImage: '/static/images/return.png',
				title: '购物车',
				height: 0,
				productLists: [],
				productNameList: [{
						name: '全部',
						number: 0,
					},
					{
						name: '降价',
						number: 0,
					},
					{
						name: '医美',
						number: 0,
					},
					{
						name: '护肤品',
						number: 0,
					},
				],
				btnnum: 0,
				contentList: {},
				allchecked: false, //全选
				isShowDiscount: false, //显示优惠或卡券
				requestUrl: '',
				offset: 0,
				sku_list: [],
				specialList: {}, //广告
				get_count: 0, //可领取卡券数量
				cardList: [], //卡券列表
				act_info: {},
				uses_cardList: [],
				this_show_goods_spec: false, //显示修改商品规格
				goodsContentList: [],
				spec: [],
				pay_type: 1, //支付方式  0预约金 1 全款 2 全选
				class_type: 0, //领取方式 0到院 1邮寄
				setNewGoodsNumber: 1, //修改新的商品数量
				encrypted_id: '',
				sku_id: 0,
				cart_id: 160,
				order_info: {
					sale_info: []
				}, //订单的信息
				show_discount: false, //显示优惠的弹窗
			}
		},
		onReachBottom: function() {
			let that = this;
			that.offset += 1;
			that.getLike()
		},
		onLoad: function(option) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.getLike()
			that.getCard()
			that.advertising()
			that.getUserCart()
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
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
						that.menuWidth = menu.width
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuLeft = menu.left
						that.menuBottom = menu.bottom
					}
				})
			} else {
				that.menuWidth = 90
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			// 返回
			goBack: function() {
				uni.navigateBack({
					delta: 1
				});
			},
			getUserCart: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'getcart',
					type: that.btnnum
				}
				that.request.uniRequest("shoppingCart", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						let day = 0
						let house = 0
						let second = 0
						let minute = 0
						// let former_sku_list = uni.getStorageSync("contentList").sku_list;
						// console.log(former_sku_list) //为了判定数据是否有选中的状态
						for (let i = 0; i < data.sku_list.length; i++) {
							for (let j = 0; j < data.sku_list[i].goods_list.length; j++) {
								data.sku_list[i].goods_list[j].is_show_state = false //显示订单操作
								data.sku_list[i].all_checked = false //是否全选当前分类
								data.sku_list[i].goods_list[j].checked = false //是否选择
								if (data.sku_list[i].act_info) {
									data.sku_list[i].day = parseInt((data.sku_list[i].act_info.rest_time) / 60 / 60 / 24 % 30)
									data.sku_list[i].house = parseInt((data.sku_list[i].act_info.rest_time) / 60 / 60 % 24)
									data.sku_list[i].second = parseInt((data.sku_list[i].act_info.rest_time) / 60 % 60)
									data.sku_list[i].minute = parseInt((data.sku_list[i].act_info.rest_time) % 60)
									// console.log(data.sku_list[i])
								}
							}
						}
						that.contentList = data
						that.sku_list = data.sku_list
						for (let i = 0; i < that.productNameList.length; i++) {
							that.productNameList[i].number = data.type_count[i]
						}

					} else {
						that.sku_list = []
					}
				})
			},
			// 显示可操作订单数据
			setgoodsState: function(k, is) {
				let that = this
				that.contentList.sku_list[k].goods_list[is].is_show_state = !that.contentList.sku_list[k].goods_list[is].is_show_state
			},
			// 全选当前分类
			checked_class_all: function(k) {
				let that = this
				let act_id = ''
				let change_card_id = []
				let cart = {}
				let arr = []
				that.contentList.sku_list[k].all_checked = !that.contentList.sku_list[k].all_checked
				
				if (that.contentList.sku_list[k].all_checked) { //全选
					for (let i = 0; i < that.contentList.sku_list[k].goods_list.length; i++) {
						that.contentList.sku_list[k].goods_list[i].checked = true
					}
					
				} else { //点击清空全选
					for (let i = 0; i < that.contentList.sku_list[k].goods_list.length; i++) {
						that.contentList.sku_list[k].goods_list[i].checked = false
					}
					that.order_info = {
						sale_info: []
					} //订单的信息
				}
				for (let i = 0; i < that.contentList.sku_list.length; i++) {
					arr.push(that.contentList.sku_list[i].all_checked)
				}
				let flag = arr.every((item, index, arr) => {
					return item === true
				})
				if (flag) {
					that.allchecked = !that.allchecked
				} else {
					that.allchecked = false

				}
				that.get_user_cart()
			},
			// 选择
			changeCheck: function(k, is) {
				let that = this
				let arr = []
				let all_arr = []
				that.contentList.sku_list[k].goods_list[is].checked = !that.contentList.sku_list[k].goods_list[is].checked
				for (let i = 0; i < that.contentList.sku_list[k].goods_list.length; i++) {
					arr.push(that.contentList.sku_list[k].goods_list[i].checked)
				}
				
				let flag = arr.every((item, index, arr) => {
					return item === true
				})
				// 如果当分类下面的订单都选择了,则当前分类的全选为true
				if (flag) {
					that.contentList.sku_list[k].all_checked = !that.contentList.sku_list[k].all_checked
					if (that.contentList.sku_list[k].all_checked) { //当前订单为选择时判定所有的订单是否已经全选
						for (let i = 0; i < that.contentList.sku_list.length; i++) {
							all_arr.push(that.contentList.sku_list[i].all_checked)
						}
						let flags = all_arr.every((item, index, all_arr) => {
							return item === true
						})
						that.allchecked = flags
					}
				} else {
					that.contentList.sku_list[k].all_checked = false
					that.allchecked = false
				}
				if(that.contentList.sku_list[k].goods_list[is].checked){
					that.get_user_cart()
				}
				else{
					let new_arr = []
					for(let i=0;i<that.contentList.sku_list.length;i++){
						for(let j=0;j<that.contentList.sku_list[i].goods_list.length;j++)
						new_arr.push(that.contentList.sku_list[i].goods_list[j].checked)
						// if(!that.contentList.sku_list[i].goods_list[j].checked){
						// 	
						// }
					}
					let flag = new_arr.every((item, index, new_arr) => {
						// console.log(item,index)
						return item === false
					})
					// console.log(flag)
					if(flag){
						that.order_info = {
							sale_info: []
						} //订单的信息
					}else{
						that.get_user_cart()
					}
				}
			},
			// 结算的全选
			change_all_cart: function() {
				let that = this
				that.allchecked = !that.allchecked
				if (that.allchecked) {
					for (let i = 0; i < that.contentList.sku_list.length; i++) {
						that.contentList.sku_list[i].all_checked = true
						for (let j = 0; j < that.contentList.sku_list[i].goods_list.length; j++) {
							that.contentList.sku_list[i].goods_list[j].checked = true
						}
					}
					that.get_user_cart()
				} else {
					for (let i = 0; i < that.contentList.sku_list.length; i++) {
						that.contentList.sku_list[i].all_checked = false
						for (let j = 0; j < that.contentList.sku_list[i].goods_list.length; j++) {
							that.contentList.sku_list[i].goods_list[j].checked = false
						}
					}
					that.order_info = {
						sale_info: []
					} //订单的信息
				}

			},
			// 获取购物车价格
			get_user_cart: function() {
				let that = this
				let change_cart = []
				if (that.contentList.sku_list.length > 0) {
					for (let i = 0; i < that.contentList.sku_list.length; i++) {
						if (that.contentList.sku_list[i].all_checked) { //先判断是否有全选了的订单
							let act_id = ''
							let cart_id = []
							if (that.contentList.sku_list[i].act_id) {
								act_id = that.contentList.sku_list[i].act_id
							}
							let cart = {
								act_id: act_id,
								cart_id_list: that.contentList.sku_list[i].cart_id_list
							}
							change_cart.push(cart)
						} else {
							for (let j = 0; j < that.contentList.sku_list[i].goods_list.length; j++) {
								if (that.contentList.sku_list[i].goods_list[j].checked) { //判定选择了的订单
									let act_id = ''
									let cart_id = []
									if (that.contentList.sku_list[i].act_id) {
										act_id = that.contentList.sku_list[i].act_id
									}
									cart_id.push(that.contentList.sku_list[i].goods_list[j].cart_id)
									let cart = {
										act_id: act_id,
										cart_id_list: cart_id
									}
									change_cart.push(cart)
								}
							}
						}
					}
				}
				let dataInfo = {
					interfaceId: 'calculate',
					cart: change_cart
				}
				if (change_cart.length > 0) {
					that.request.uniRequest("shoppingCart", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							// console.log(data)
							// total_price:0,//总价
							// sale_price:0,//总计优惠
							// hd_discount: 0,//活动优惠2020.11.04
							// online_pay: 0,//在线支付
							// offline_pay: 0,//线下支付
							// off_sale: 0,//去掉优惠后应付2020.11.02
							// sale_info: []//优惠信息
							that.order_info = data
						} else {
							that.order_info = {
								sale_info: []
							} //订单的信息
						}
					})
				}

				// console.log(change_cart)
			},
			// 去结算
			goToSettlement: function() {
				let that = this
				let sku_list = that.contentList.sku_list
				let cart_info = {} //单条购物车的选中的数据
				let act_id = '' //活动id 
				let cart_id_list = [] //订单id列表
				if (that.allchecked) { //判定购物车是否全选了，全选直接存储对应的购物车活动id和购物车id
					for (let i = 0; i < sku_list.length; i++) {
						if (sku_list[i].act_id) {
							act_id = sku_list[i].act_id
						}
						cart_info = {
							act_id: act_id,
							cart_id_list: sku_list[i].cart_id_list
						}
						cart_id_list.push(cart_info)
					}
				} else { //如果是没有全选，就循环判定购物车的分类列表是否有全选的，有，先导入，没有再循环内部的商品是否选中
					for (let i = 0; i < sku_list.length; i++) {
						if (sku_list[i].all_checked) { //分类列表是否有全选的，有，先导入，没有再循环内部的商品是否选中
							if (sku_list[i].act_id) {
								act_id = sku_list[i].act_id
							}
							cart_info = {
								act_id: act_id,
								cart_id_list: sku_list[i].cart_id_list
							}
							cart_id_list.push(cart_info)
						} else { //循环内部的商品是否选中
							let cart_list = []
							for (let j = 0; j < sku_list[i].goods_list.length; j++) {
								if (sku_list[i].act_id) {
									act_id = sku_list[i].act_id
								}
								if (sku_list[i].goods_list[j].checked) {
									cart_list.push(sku_list[i].goods_list[j].cart_id)
								}
							}
							if (cart_list.length > 0) {
								cart_info = {
									act_id: act_id,
									cart_id_list: cart_list
								}
								cart_id_list.push(cart_info)
							}

						}
					}
				}
				// console.log(cart_id_list)
				uni.setStorageSync("cart_id_list", cart_id_list); //将数据存储，方便在确认订单时使用
				// 清除本地存的购物车数据
				// uni.removeStorageSync('contentList');
				if (cart_id_list.length > 0) {
					// 确认订单
					uni.navigateTo({
						url: `/pages/confirm_order/confirm_order`,
					})
				} else {
					uni.showToast({
						title: '请选择商品',
						icon: 'none'
					})
				}

			},
			// 修改商品规格
			showSetSpec: function(sku_id, encrypted_id, number, cart_id) {
				let that = this
				that.encrypted_id = encrypted_id
				that.sku_id = sku_id
				that.cart_id = cart_id
				that.setNewGoodsNumber = number
				let dataInfo = {
					interfaceId: 'goodsspudetails',
					encrypted_id: encrypted_id,
					sku_id: sku_id
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					if (res.data.code == 1000) {
						let data = res.data.data
						uni.setStorageSync("goodsDetail", data);
						that.goodsContentList = data
						that.spec = that.assembleSpec(data.sku.user_spec, 1)
						that.pay_type = data.sku.pay_type
						that.this_show_goods_spec = !that.this_show_goods_spec
						that.uses_cardList = that.goodsContentList.sku.card_list
					} else {
						that.request.showToast(res.data.message)
					}
				})
			},
			// 点击确定修改规格
			orderSet: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'changcart',
					type: 1,
					cart_id: that.cart_id,
					num: that.setNewGoodsNumber,
					sku_id: that.sku_id,
					is_post: that.class_type,
					buy_type: that.pay_type
				}
				that.request.uniRequest("shoppingCart", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.this_show_goods_spec = !that.this_show_goods_spec
						that.allchecked = false
						that.getUserCart()
						that.order_info = {
							sale_info: []
						} //订单的信息
					}
				})
			},
			// 点击加减数字
			reduce: function(index) {
				let that = this
				that.setNewGoodsNumber += index
				if (that.setNewGoodsNumber >= that.goodsContentList.sku.max_buy_limit) {
					let number = parseInt(that.goodsContentList.sku.max_buy_limit)
					that.setNewGoodsNumber = number
				} else if (that.setNewGoodsNumber < that.goodsContentList.sku.min_buy_limit) {
					let number = parseInt(that.goodsContentList.sku.min_buy_limit)
					that.setNewGoodsNumber = number
				}
			},
			// 输入想要的数量
			changeGoodsNumber: function(event) {
				let that = this
				let value = event.detail.value
				that.setNewGoodsNumber = value
				if (that.setNewGoodsNumber >= that.contentList.sku.max_buy_limit) {
					let number = parseInt(that.contentList.sku.max_buy_limit)
					that.setNewGoodsNumber = number
				} else if (that.setNewGoodsNumber < that.contentList.sku.min_buy_limit) {
					let number = parseInt(that.contentList.sku.min_buy_limit)
					that.setNewGoodsNumber = number
				}
			},
			// 支付方式
			changePay: function(index) {
				let that = this
				that.pay_type = index
			},
			changeClass: function(index) {
				let that = this
				that.class_type = index
			},
			changeSpec: function(index, sindex) {
				let that = this
				// console.log(index,sindex)
				if (that.spec[index].attr[sindex] == 0) {
					that.getSpec(index, sindex)
				} else if (that.spec[index].attr[sindex] == 1) {
					that.cancelSpec(index, sindex)
				} else {
					return
				}
			},
			// 修改规格的优惠信息
			seeMore: function(index) {
				let that = this
				if (index == 0) {
					if (that.uses_cardList.length > 0) {
						let dataInfo = {
							interfaceId: 'ids_get_card',
							card_id: that.uses_cardList,
							limit: 6,
							offset: 0
						}
						that.request.uniRequest("card", dataInfo).then(res => {
							if (res.data.code == 1000 && res.data.status == 'ok') {
								let data = res.data.data
								that.isShowDiscount = !that.isShowDiscount
								if (that.isShowDiscount) {
									for (let i = 0; i < data.cards.length; i++) {
										data.cards[i].showTicketDetails = false
										data.cards[i].arrowImages = '/static/images/arrow-down.png'
									}
									that.cardList = data
								} else {
									that.cardList = []
								}
							}
						})
					} else {
						that.isShowDiscount = !that.isShowDiscount
					}
				} else if (index == 1) {
					that.this_show_goods_spec = !that.this_show_goods_spec
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
			// 选择规格
			getSpec: function(index, sindex) {
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
						that.goodsContentList.sku = data
						that.sku_id = data.id
						that.goodsContentList.sku.sale_price = data.sale_price
					}
				})
			},
			// 取消选项
			cancelSpec: function(index, sindex) {
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
			// 商品
			goToGoods: function(id, pid) {
				uni.navigateTo({
					url: `/pages/goods/goods_detail?sku_id=${id}&&encrypted_id=${pid}`,
				})
			},
			// 为你推荐
			getLike: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'userrecommendedgoodsspulist',
					type: '3',
					offset: that.offset
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.productLists = that.productLists.concat(data)
					} else {
						console.log('没有数据')
					}
				})
			},
			// 点击优惠或者卡券
			changeActivity: function(index, list, info) {
				let that = this
				if (index == 0) { //卡券
					let dataInfo = {
						interfaceId: 'ids_get_card',
						card_id: list,
						limit: 6,
						offset: 0
					}
					that.act_info = info
					that.request.uniRequest("card", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							that.isShowDiscount = !that.isShowDiscount
							if (that.isShowDiscount) {
								for (let i = 0; i < data.cards.length; i++) {
									data.cards[i].showTicketDetails = false
									data.cards[i].arrowImages = '/static/images/arrow-down.png'
								}
								that.cardList = data
							} else {
								that.cardList = []
							}
						}
					})
				} else if (index == 1) { //优惠
					that.act_info = list
					that.isShowDiscount = !that.isShowDiscount
				} else if (index == 2) {
					that.isShowDiscount = !that.isShowDiscount
					if (!that.isShowDiscount) {
						that.cardList = []
					}
				}
			},
			// 领取卡券
			getCards: function(cardId, prompt, index) {
				let that = this
				if (prompt == '') {
					let dataInfo = {
						interfaceId: 'cardget',
						card_id: cardId
					}
					that.request.uniRequest("card", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.request.showToast('领取成功')
							that.cardList.cards[index].salecard_user_count = that.cardList.cards[index].salecard_user_count + 1
						}
					})
				} else {
					that.request.showToast(prompt)
				}
			},
			// 使用卡券
			useCard: function(id) {
				console.log('使用的卡券id:', id)
			},
			showTicket: function(cardId) {
				let that = this
				for (let i = 0; i < that.cardList.cards.length; i++) {
					if (that.cardList.cards[i].id == cardId) {
						that.cardList.cards[i].showTicketDetails = !that.cardList.cards[i].showTicketDetails
						if (that.cardList.cards[i].showTicketDetails) {
							that.cardList.cards[i].arrowImages = '/static/images/arrow-top.png'
						} else {
							that.cardList.cards[i].arrowImages = '/static/images/arrow-down.png'
						}
					}
				}
			},
			// 获取广告
			advertising: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'getadvertising',
					location: 1
				}
				that.request.uniRequest("home", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.specialList = data
						// console.log(that.specialList)
					}
				})
			},
			// 获取可领取卡券
			getCard: function() {
				let that = this
				let dataInfo = {
					interfaceId: "may_receive"
				}
				that.request.uniRequest("card", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.get_count = data.num
					}
				})
			},
			// 领券中心
			goToGain: function() {
				uni.navigateTo({
					url: `/pages/my/my_card_gain`,
				})
			},
			// 选中商品
			changePorduct: function(index) {
				let that = this
				that.btnnum = index
				that.contentList = {}
				that.getUserCart()
				that.allchecked = false
				uni.removeStorageSync('contentList');
				that.order_info = {
					sale_info: []
				} //订单的信息
			},
			goToGoodsClassfiy: function() {
				uni.switchTab({
					url: `/pages/goods/goods_classify`,
				})
			},
			// 收藏、相似、删除
			setState: function(index, id, num, category_id, listName, encrypted_id) {
				// console.log(index,cart_id,sku_id,num)
				let that = this
				// index 0 收藏 1 相似 2 删除
				if (index == 0) { //收藏
					let dataInfo = {
						interfaceId: 'collectgoodsspu',
						encrypted_id: encrypted_id
					}
					that.request.uniRequest("goods", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.request.showToast('已收藏')
						} else if (res.data.code == 1020) {
							that.request.showToast('该商品已收藏')
						}
					})
				} else if (index == 1) { //相似
					uni.navigateTo({
						url: `/pages/goods/goods_list?name=${listName}&id=${category_id}`,
					})
				} else if (index == 2) { //删除
					let cart_id = []
					cart_id.push(id)
					let dataInfo = {
						interfaceId: 'changcart',
						type: 2,
						cart_id: cart_id,
					}
					uni.showModal({
						title: '提示',
						content: '确定要删除此订单吗?',
						success: function(res) {
							if (res.confirm) {
								that.request.uniRequest("shoppingCart", dataInfo).then(res => {
									if (res.data.code == 1000 && res.data.status == 'ok') {
										setTimeout(function() {
											that.request.showToast(res.data.message)
										}, 500)
										setTimeout(function() {
											that.getUserCart()
											that.allchecked = false
											that.order_info = {
												sale_info: []
											} //订单的信息
										}, 800)
									}
								})
							}
						}
					})
				}
			},
			// 点击分类列表
			goodsClassfiy: function(id, listName) {
				uni.navigateTo({
					url: `/pages/goods/goods_list?name=${listName}&id=${id}`,
				})
			},
			// 修改商品数量
			setGoodsNumber: function(id, cart_num) {
				let that = this
				let cart_id = []
				// console.log(that.contentList) //想法是在修改数量的时候先把购物车的数据存储，为了判定那些数据是选中了,然后计算价格
				// uni.setStorageSync("contentList", that.contentList);
				cart_id.push(id)
				let dataInfo = {
					interfaceId: 'changcart',
					type: 0,
					cart_id: cart_id,
					num: cart_num,
				}
				that.request.uniRequest("shoppingCart", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						for (let i = 0; i < that.contentList.sku_list.length; i++) {
							for (let j = 0; j < that.contentList.sku_list[i].goods_list.length; j++) {
								console.log()
								if (that.contentList.sku_list[i].goods_list[j].cart_id == cart_id) { //判定选择了的订单
									if (that.contentList.sku_list[i].goods_list[j].checked) {
										that.get_user_cart()
									}
								}
							}
						}
						// 
						// that.getUserCart()
						// that.allchecked = false
						// that.order_info = {
						// 	sale_info:[]
						// }//订单的信息
					}
				})
			},
			// 加减数量
			setNumber: function(id, number, k, is) {
				let that = this
				let goodsNumber = 0
				let cart_num = that.contentList.sku_list[k].goods_list[is].cart_num
				cart_num += number
				goodsNumber = cart_num
				if (that.contentList.sku_list[k].goods_list[is].max_buy_limit == 0) {
					that.contentList.sku_list[k].goods_list[is].max_buy_limit = 999999
				}
				if (goodsNumber >= that.contentList.sku_list[k].goods_list[is].max_buy_limit) {
					let number = parseInt(that.contentList.sku_list[k].goods_list[is].max_buy_limit)
					goodsNumber = number
				} else if (goodsNumber < that.contentList.sku_list[k].goods_list[is].min_buy_limit) {
					let number = parseInt(that.contentList.sku_list[k].goods_list[is].min_buy_limit)
					goodsNumber = number
				}
				that.contentList.sku_list[k].goods_list[is].cart_num = goodsNumber
				that.setNewGoodsNumber = goodsNumber
				that.setGoodsNumber(id, goodsNumber)
			},
			// 输入数量
			setPorductNumber: function(event) {
				let that = this
				let value = event.target.value;
				let k = event.currentTarget.dataset.k
				let is = event.currentTarget.dataset.is
				let id = event.currentTarget.dataset.id
				if (value == '') {
					value = 1
					that.contentList.sku_list[k].goods_list[is].cart_num = 1
				} else {
					that.contentList.sku_list[k].goods_list[is].cart_num = parseInt(value)
				}
				let goodsNumber = 0
				let cart_num = that.contentList.sku_list[k].goods_list[is].cart_num
				goodsNumber = cart_num
				if (that.contentList.sku_list[k].goods_list[is].max_buy_limit == 0) {
					that.contentList.sku_list[k].goods_list[is].max_buy_limit = 999999
				}
				if (goodsNumber >= that.contentList.sku_list[k].goods_list[is].max_buy_limit) {
					let number = parseInt(that.contentList.sku_list[k].goods_list[is].max_buy_limit)
					goodsNumber = number
				} else if (goodsNumber < that.contentList.sku_list[k].goods_list[is].min_buy_limit) {
					let number = parseInt(that.contentList.sku_list[k].goods_list[is].min_buy_limit)
					goodsNumber = number
				}
				that.setNewGoodsNumber = goodsNumber
				that.contentList.sku_list[k].goods_list[is].cart_num = goodsNumber
				that.setGoodsNumber(id, goodsNumber)
			},
			// 显示优惠明细
			user_discount: function() {
				let that = this
				that.show_discount = !that.show_discount
			},
			IKnow: function() {
				let that = this
				that.show_discount = !that.show_discount
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
		font-size: 37rpx;
	}

	.cart-content {
		background-color: #F6F6F6;
	}

	.empty-cart {
		text-align: center;
		color: #111111;
		font-size: 32rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.empty-cart-image {
		padding: 68rpx 177rpx 40rpx 174rpx;
	}

	.empty-cart-image image {
		width: 400rpx;
		height: 254rpx;
	}

	.go-stroll {
		width: 220rpx;
		height: 80rpx;
		line-height: 87rpx;
		font-size: 28rpx;
		background-image: linear-gradient(90deg, #ff6699 0%, #fa3475 100%);
		border-radius: 40rpx;
		margin-top: 40rpx;
		margin-bottom: 40rpx;
		color: #FFFFFF;
	}

	.special-performance {
		padding: 40rpx 20rpx;
		display: flex;
	}

	.specialList {
		width: 100%;
	}

	.specialList image {
		width: 100%;
	}

	.recommend-to-you {
		padding: 20rpx;
	}

	.line {
		width: 6rpx;
		height: 24rpx;
		background-color: #fa3576;
		margin-right: 20rpx;
	}

	.checkedLine {
		padding: 0 20rpx;
	}

	.checkedLine view {
		height: 4rpx;
		background-color: #fa3475;
	}

	.related-title {
		font-size: 28rpx;
		line-height: 48rpx;
		color: #111111;
		font-weight: bolder;
		display: flex;
		align-items: center;
	}

	.subject-content {
		background-color: #F6F6F6;
	}

	.product-to-nav {
		display: flex;
		justify-content: space-around;
		font-size: 24rpx;
		background-color: #FFFFFF;
		text-align: center;
		position: fixed;
		height: 96rpx;
		width: 100%;
		z-index: 9;
	}

	.product-name {
		width: 25%;
		line-height: 96rpx;
		text-align: center;
	}

	.checkedPorduct {
		font-size: 28rpx;
		color: #fa3475;
	}

	.end-cont {
		display: none;
	}

	.dis {
		display: block;
	}

	.card-top {
		height: 80rpx;
		line-height: 80rpx;
		background-image: linear-gradient(-90deg, #fa3475 0%, #ff6699 100%);
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		color: #FFFFFF;
		width: 100%;
		margin-top: 5rpx;
	}

	.tabBarList {
		width: 100%;
	}

	.can-receive {
		padding-left: 21rpx;
		display: flex;
		align-items: flex-end;
		text-align: center;
		line-height: 80rpx;
	}

	.can-receive .text {
		font-weight: bolder;
	}

	.texts {
		line-height: 79rpx;
	}

	.go-receive {
		display: flex;
	}

	.go-receive .triangle-line {
		display: block;
		width: 0;
		height: 0;
		border-width: 40rpx;
		border-style: solid;
		border-color: transparent #5be3d5 transparent transparent;
		transform: rotate(360deg);
		margin-left: -56rpx;
	}

	.character {
		text-align: center;
		background-color: #5be3d5;
		width: 170rpx;
		text-align: center;
	}

	.cart-shopping-show {
		padding: 30rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-top: 20rpx;
	}

	.change-check-see-more {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;
	}

	.change-check text {
		font-weight: bolder;
		margin-left: 20rpx;
	}

	.delete-goods {
		color: #fa3475;
		font-size: 24rpx;
	}

	.add-on-item {
		width: 88rpx;
		height: 32rpx;
		background-image: linear-gradient(90deg, #fa3475 0%, #ff6699 100%);
		border-radius: 16rpx;
		text-align: center;
		font-size: 20rpx;
		color: #FFFFFF;
	}

	.special-offer {
		padding: 0rpx 10rpx 10rpx 50rpx;
	}

	.full-reduction-activity-see-discounts {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 20rpx;
		margin-top: 20rpx;
	}

	.full-reduction-specific-activity {
		display: flex;
		align-items: center;
	}

	.full-reduction {
		margin-right: 12rpx;
		width: 80rpx;
		height: 30rpx;
		line-height: 30rpx;
		text-align: center;
		background-color: #ffe8f0;
		border-radius: 15rpx;
		color: #fa3475;
	}

	.specific-activity {
		display: flex;
	}

	.activity-time {
		display: flex;
		margin-left: 10rpx;
		text-align: center;
	}

	.activity-time text {
		color: #fa3475;
		margin: 0 8rpx;
	}

	.houses,
	.minute,
	.second {
		width: 30rpx;
		height: 30rpx;
		line-height: 30rpx;
		font-size: 20rpx;
		background-color: #fa3475;
		border-radius: 4rpx;
		color: #FFFFFF;
		margin-left: 5rpx;
	}

	.product-item-content-all {
		display: flex;
		align-items: center;
		position: relative;
	}

	.show_goods_state {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #F0F0F0;
		opacity: 0.8;
		height: 100%;
	}

	.this_is_goods_state {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 100%;
	}

	.set_state {
		width: 84rpx;
		height: 130rpx;
		padding: 0 28rpx;
		border-radius: 65rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		flex-direction: column;
		display: flex;
		justify-content: center;
		text-align: center;
	}

	.collection {
		background-image: linear-gradient(-45deg, #F9BB00 0%, #F9BB00 100%);
	}

	.similar {
		background-image: linear-gradient(-45deg, #FF9966 0%, #FF9966 100%);
	}

	.this_is_goods_state .delete {
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
	}

	.set_state text {
		display: inline-block;
		width: 100%;
		text-align: center;
	}

	.product-item-content {
		display: flex;
		padding-top: 20rpx;
		align-items: center;
		width: 100%;
	}

	.checkbox-item {
		display: flex;
		align-items: center;
	}

	.goods-info {
		padding-bottom: 20rpx;
		width: 100%;
	}

	.product-item-show {
		display: flex;
		border-bottom: 1rpx solid #F0F0F0;
		justify-content: space-between;
		font-size: 24rpx;
		padding-bottom: 20rpx;
	}

	.porduct-item-images image {
		width: 200rpx;
		height: 200rpx;
		margin-right: 20rpx;
	}

	.porduct-item-images {
		position: relative;
	}

	.porduct-item-images .invalid-goods {
		width: 200rpx;
		height: 200rpx;
		margin-right: 20rpx;
		position: absolute;
		top: 0;
		left: 0;
		text-align: center;
		background-color: #F0F0F0;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.8;
	}

	.delete-invalid-goods {
		width: 150rpx;
		line-height: 150rpx;
		border-radius: 75rpx;
		background-color: #999999;
		color: #FFFFFF;
	}

	.porduct-item-price-purchaseLimitationNumber-checkedNumber {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.porduct-item-price-purchaseLimitationNumber {
		color: #fa3475;
	}

	.porduct-item-price {
		display: flex;
		align-items: center;
	}

	.porduct-item-price .price {
		font-size: 40rpx;
		margin-left: 5rpx;
	}

	.member-price {
		width: 64rpx;
		height: 28rpx;
		line-height: 28rpx;
		background-image: linear-gradient(0deg, #000000 0%, #2c2c2c 100%), linear-gradient(#282828, #282828);
		background-blend-mode: normal, normal;
		border-radius: 4rpx;
		font-size: 16rpx;
		color: #fefefe;
		text-align: center;
		margin-left: 5rpx;
	}

	.purchaseLimitationNumber {
		font-size: 20rpx;
		margin-top: 10rpx;
	}

	.purchaseLimitationNumber text {
		margin-left: 20rpx;
	}

	.offline_pay-online_pay-checkedNumber {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20rpx;
	}

	.offline_pay-online_pay {
		font-size: 24rpx;
	}

	.online_pay {
		color: #fa3475;
		margin-right: 32rpx;
	}

	.checkedNumber {
		display: flex;
		width: 180rpx;
		align-items: center;
		justify-content: space-between;
		border: solid 1rpx #f0f0f0;
	}

	.checkedNumber image {
		width: 32rpx;
		height: 32rpx;
	}

	.input {
		flex: 1;
		text-align: center;
		font-size: 30rpx;
		background-color: #f0f0f0;
	}

	.input .cart_num {
		margin: 0 auto;
		width: 40rpx;
		padding-bottom: 5rpx;
	}

	.subtract,
	.add {
		width: 50rpx;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}


	.porduct-item-name {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.versions {
		width: 360rpx;
		background-color: #f0f0f0;
		border-radius: 20rpx;
		font-size: 20rpx;
		text-align: center;
		display: flex;
		align-items: center;
		padding: 0 16rpx;
	}

	.versions-name {
		flex: 1;
		height: 40rpx;
		line-height: 40rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		text-align: left;
	}

	.versions-name-item {
		margin-left: 10rpx;
	}

	.versions-name-item:first-child {
		margin-left: 0;
	}

	.unfold {
		width: 30rpx;
		height: 40rpx;
		margin-left: 10rpx;
	}

	.name-price-purchaseLimitationNumber-checkedNumber {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.mantled {
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: #f6f6f6;
		z-index: 53;
		width: 100%;
		border-radius: 24rpx;
	}

	.discounts-title {
		font-size: 40rpx;
		font-weight: 700;
		padding-top: 25rpx;
		text-align: center;
	}

	.discounts-hint {
		color: #999999;
		font-size: 20rpx;
		margin-top: 15rpx;
		margin-bottom: 35rpx;
		text-align: center;
	}

	.card_list {
		padding: 20rpx;
	}

	.card-title-all-card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 20rpx;
	}

	.more-card {
		color: #fa3475;
		font-size: 24rpx;
	}

	.delete-discount {
		position: absolute;
		top: 25rpx;
		right: 20rpx;
	}

	.delete-discount image {
		width: 32rpx;
		height: 32rpx;
	}

	.settlement {
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: #FFFFFF;
		z-index: 10;
		width: 100%;
	}

	.settlement-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 30rpx;
		height: 100rpx;
	}

	.total-discount {
		flex: 1;
		text-align: center;
	}

	.total-discount .total {
		font-size: 28rpx;
		font-weight: 700rpx;
	}

	.total-discount .total text {
		font-size: 36rpx;
		margin-left: 10rpx;
		color: #fa3475;
	}

	.use-discount {
		font-size: 24rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.use-discount-detailed {
		display: inline-block;
		margin-left: 10rpx;
		font-size: 20rpx;
		line-height: 34rpx;
		border-radius: 15rpx;
		padding: 0 15rpx;
		background-color: #999999;
		color: #FFFFFF;
	}

	.goSettlement {
		width: 180rpx;
		line-height: 70rpx;
		border-radius: 35rpx;
		font-size: 28rpx;
		text-align: center;
		color: #FFFFFF;
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
	}

	.set_goods_spec_content {
		position: fixed;
		z-index: 52;
		background-color: #FFFFFF;
		width: 100%;
		left: 0;
		bottom: 0;
	}

	.isShow-content {
		padding: 30rpx 20rpx;
	}

	.specs-title {
		font-size: 28rpx;
		font-weight: bold;
		color: #111111;
		padding-top: 20rpx;
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
		color: #999999;
	}

	.specs-cont-pay {
		margin-left: -30rpx;
		font-size: 24rpx;
		display: flex;
		align-items: center;
		padding-top: 20rpx;
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

	.add-card-top {
		display: flex;
		align-items: center;
	}

	.left-head_img image {
		width: 240rpx;
	}

	.right-goods-info {
		display: flex;
		flex-direction: column;
		padding-left: 20rpx;
		flex: 1;
	}

	.goods-discounts {
		width: 160rpx;
		font-size: 24rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 50rpx;
		border-radius: 25rpx;
		background-image: linear-gradient(-45deg, #8834fa 0%, #bc66ff 100%);
	}

	.good-price {
		display: flex;
		margin-top: 30rpx;
		align-items: center;
	}

	.market_price {
		color: #FF0000;
		font-size: 36rpx;
		margin-right: 10rpx;
		font-weight: bold;
	}

	.member_price {
		font-size: 24rpx;
		border: 1rpx solid #999999;
		border-radius: 15rpx;
		padding: 10rpx 10rpx 10rpx 0;
	}

	.member_title {
		padding: 10rpx 10rpx;
		background-color: #181818;
		color: #FFFFFF;
		border-top-left-radius: 15rpx;
		border-bottom-left-radius: 15rpx;
		margin-right: 10rpx;
	}

	.store-sku_no {
		font-size: 24rpx;
		color: #999999;
		margin-top: 20rpx;
	}

	.sku_no {
		margin-left: 10rpx;
	}

	.isShow .specs-cont-pay {
		padding: 30rpx 0 0;
		color: #999999;
	}

	.isShow .specs-cont {
		color: #999999;
	}

	.isShow .specs-cont-pay .pay-txt {
		color: #111111;
		font-weight: bold;
	}

	.changeNumber {
		display: flex;
		padding: 20rpx 0;
		align-items: center;
		justify-content: space-between;
	}

	.changeNumber .pay-txt {
		padding-left: 0;
		padding-right: 40rpx;
		font-weight: bold;
	}

	.number-hint {
		font-size: 24rpx;
		color: #fa3475;
	}

	.number-hint text {
		padding-right: 20rpx;
	}

	.change-input {
		font-size: 28rpx;
		text-align: center;
		height: 100%;
		display: flex;
		justify-content: center;
		margin-right: 40rpx;
	}

	.number-input {
		height: 84rpx;
		width: 100rpx;
		display: flex;
		border-top: 1rpx solid #999999;
		border-bottom: 1rpx solid #999999;
	}

	.number-input input {
		height: 100%;
		border: 0;
	}

	.reduce,
	.add-number {
		width: 100rpx;
		font-size: 56rpx;
		color: #FFFFFF;
		border: 1rpx solid #999999;
	}

	.keep-order {
		width: 100%;

	}

	.button {
		margin-right: 40rpx;
		padding: 30rpx;
	}

	.keep-order-button {
		border: none !important;
		color: #FFFFFF !important;
		border-radius: 50rpx;
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
	}

	.delete-see-more-discount {
		position: absolute;
		top: 20rpx;
		right: 20rpx;
	}

	.delete-see-more-discount image {
		width: 32rpx;
		height: 32rpx;
	}

	.this_show_discount {
		position: fixed;
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		z-index: 9;
		flex-direction: column;
		align-items: center;
		padding: 20rpx 0;
		left: 0;
		bottom: 80rpx;
	}

	.show_discount_title {
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
	}

	.show_discount_content {
		font-size: 24rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}

	.discount_sale_info {
		padding: 10rpx 150rpx 20rpx;
	}

	.dicount_price {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 0;
	}

	.all_discount {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30rpx 0 20rpx;
	}

	.all_discount .sale_info_discount_price {
		color: #fa3475;
	}

	.discount-hint {
		font-size: 20rpx;
		color: #999999;
	}

	.i_know {
		margin-top: 20rpx;
		margin-bottom: 40rpx;
	}
</style>
