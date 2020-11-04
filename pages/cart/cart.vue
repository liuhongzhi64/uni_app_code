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
									<checkbox  color='#007AFF' :checked="allchecked" />
									<text @tap='goodsClassfiy(items.category_id,items.category_title)'> {{items.category_title}} > </text>
								</view>
								<view class="add-on-item" v-if="items.cards.length>0" @tap="changeActivity(0,items.cards)"> 领券 </view>
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
									<view class="full-reduction-activity-see-discounts" 
									 v-for="(content,type) in items.act_info.act_rule" :key='type'>
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
												<view class="versions" v-if="!i.show_spec_name" @tap='showSpecName(k,is)'>
													<view class="versions-name">
														<text class="versions-name-item" v-for="(is,z) in i.spec_name" :key='z'>
															{{z}}:{{is}}
														</text>
													</view>
													
													<image class="unfold" src="../../static/images/unfold.png" mode=""></image>
												</view>
												<!-- 此处点击是修改规格,明日修改 -->
												<view class="this_show_spec_name" v-else-if="i.show_spec_name" @tap='showSpecName(k,is)'>
													<view class="show_spec_name_items">
														<view class="all_show_spec_name_items ">
															<view class="show_spec_name_item" v-for="(is,z) in i.spec_name" :key='z'>
																<text> {{ z }}:</text><text> {{ is }}  </text>
															</view>
														</view>
														<image class="unfold" src="../../static/images/unfold.png" mode=""></image>
													</view>
												</view>
												<view class="porduct-item-price-purchaseLimitationNumber-checkedNumber">
													<view class="porduct-item-price-purchaseLimitationNumber">
														<view class="porduct-item-price">
															￥<text class="price">{{i.sale_price}}</text>
															<text class="member-price" v-if="i.member">会员价</text>
														</view>
														<view class="purchaseLimitationNumber"> 
															* {{ i.min_buy_limit }} 件起购,
															限购{{i.max_buy_limit}}件 
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
													<input type="number" class="cart_num" 
													:data-k='k' :data-is='is' :data-id='i.cart_id' v-model="i.cart_num" @input='setPorductNumber'
													 maxlength="2" />
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
										<view class="collection set_state" v-if="items.category_status==1"
										 @tap='setState(0,i.cart_id,i.cart_num,items.category_id,items.category_title,i.encrypted_id)'> 
											<text>移入</text> <text>收藏</text> 
										</view>
										<view class="similar set_state" 
										 @tap='setState(1,i.cart_id,i.cart_num,items.category_id,items.category_title,i.encrypted_id)'> 看相似 </view>
										<view class="delete set_state" 
										 @tap='setState(2,i.cart_id,i.cart_num,items.category_id,items.category_title,i.encrypted_id)'> 删除 </view>
									</view>
								</view>
							</view>						
							<!-- 弹窗优惠或者卡券 -->
							<scroll-view class="mantled" v-if="isShowDiscount" scroll-y="true"
							 :style="[{'height':cardList.cards.length>0?height/2+'px':height/4+'px'}]">
								<view class="discounts-title"> 促销优惠 </view>
								<view class="discounts-hint">*温馨提示:满减、折扣、卡券均可叠加使用</view>
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
										<view class="full-reduction-activity-see-discounts" 
										 v-for="(content,type) in items.act_info.act_rule" :key='type'>
											<view class="full-reduction-specific-activity">
												<view class="full-reduction"> {{content.category}} </view>
												<view class="specific-activity"> {{content.rule_name}} </view>
											</view>
										</view>		
									</view>
								</view>
								<view class="card_list">
									<view class="card-title-all-card">
										<view class="related-title">
											<view class="line"></view> 可用优惠券
										</view>
										<view class="more-card" @tap='goToGain'> 更多优惠券 > </view>
									</view>
									<ticket
									 :cardsList='cardList.cards'
									 :time_now='cardList.time_now' 
									 @showTicket='showTicket'
									 @useCard = 'useCard'>
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
							<!-- 全选 -->
							<view class="change-check-see-more">
								<view class="change-check">
									<text> 失效的商品  </text>
								</view>
								<view class="delete-goods" @tap='deleteInvalid(k,is)'> 清空失效商品 </view>
							</view>
							<view class="product-item-content-all" v-for="(i,is) in items.goods_list" :key='is'>
								<view class="product-item-content" @longpress='setgoodsState(k,is)'>
									<view class="goods-info">
										<view class="product-item-show">
											<view class="porduct-item-images" >
												<image :src="requestUrl+i.head_img" mode=""></image>
												<view class="invalid-goods"><view class="delete-invalid-goods">已失效</view></view>
											</view>
											<view class="name-price-purchaseLimitationNumber-checkedNumber">
												<view class="porduct-item-name"> {{i.goods_name}} </view>
												<view class="versions" v-if="!i.show_spec_name" @tap='showSpecName(k,is)'>
													<view class="versions-name">
														<text class="versions-name-item" v-for="(is,z) in i.spec_name" :key='z'>
															{{z}}:{{is}}
														</text>
													</view>													
													<image class="unfold" src="../../static/images/unfold.png" mode=""></image>
												</view>
												<view class="this_show_spec_name" v-else-if="i.show_spec_name" @tap='showSpecName(k,is)'>
													<view class="show_spec_name_items">
														<view class="all_show_spec_name_items ">
															<view class="show_spec_name_item" v-for="(is,z) in i.spec_name" :key='z'>
																<text> {{ z }}:</text><text> {{ is }}  </text>
															</view>
														</view>
														<image class="unfold" src="../../static/images/unfold.png" mode=""></image>
													</view>
												</view>
												<view class="porduct-item-price-purchaseLimitationNumber-checkedNumber">
													<view class="porduct-item-price-purchaseLimitationNumber">
														<view class="porduct-item-price">
															￥<text class="price">{{i.sale_price}}</text>
															<text class="member-price" v-if="i.member">会员价</text>
														</view>
														<view class="purchaseLimitationNumber"> 
															* {{ i.min_buy_limit }} 件起购,
															限购{{i.max_buy_limit}}件 
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
													<input type="number" class="cart_num" 
													:data-k='k' :data-is='is' v-model="i.cart_num" @input='setPorductNumber'
													 maxlength="2" />
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
										<view class="similar set_state" 
										 @tap='setState(1,i.cart_id,i.cart_num,items.category_id,items.category_title,i.encrypted_id)'> 看相似 </view>
										<view class="delete set_state" 
										 @tap='setState(2,i.cart_id,i.cart_num,items.category_id,items.category_title,i.encrypted_id)'> 删除 </view>
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
							<image :src="requestUrl+item.img" mode="widthFix" ></image>
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
					<goodsShow :borderRadius=24 
					 :requestUrl='requestUrl' :width=350 :porductList='productLists'>
					</goodsShow>
				</view>
			</view>
			<!-- 全选和结算 -->
			<view class="settlement">
				<view class="settlement-info">
					<view class="change-all-goods">
						<checkbox  color='#007AFF'  />  <text > 全选 </text>
					</view>
					<view class="total-discount">
						<view class="total">合计 : ￥ <text>18880</text> </view>
						<view class="use-discount">
							优惠减: ￥10800 <text class="use-discount-detailed">优惠明细</text>
						</view>
					</view>
					<view class="goSettlement">去结算</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import goodsShow from "../../components/goodsShow.vue";
	import ticket from "../../components/ticket.vue";
	export default {
		components: {
			goodsShow ,
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
				allchecked: false,
				isShowDiscount:false,//显示优惠或卡券
				requestUrl: '',
				offset: 0,
				sku_list:[],
				specialList:{},//广告
				get_count:0,//可领取卡券数量
				cardList:[],//卡券列表
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
						for (let i = 0; i < data.sku_list.length; i++) {
							for (let j = 0; j < data.sku_list[i].goods_list.length; j++) {
								data.sku_list[i].goods_list[j].is_show_state = false //显示订单操作
								data.sku_list[i].goods_list[j].checked = false //是否选择
								data.sku_list[i].goods_list[j].show_spec_name = false
								if(data.sku_list[i].act_info){
									// console.log(data.sku_list[i].act_info.rest_time)
									data.sku_list[i].day = parseInt((data.sku_list[i].act_info.rest_time) / 60 / 60 / 24 % 30)
									data.sku_list[i].house = parseInt((data.sku_list[i].act_info.rest_time) / 60 / 60 % 24)
									data.sku_list[i].second = parseInt((data.sku_list[i].act_info.rest_time) / 60 % 60)
									data.sku_list[i].minute = parseInt((data.sku_list[i].act_info.rest_time) % 60)
									console.log(data.sku_list[i])
								}
							}
						}
						that.contentList = data
						that.sku_list = data.sku_list
						for (let i = 0; i < that.productNameList.length; i++) {
							that.productNameList[i].number = data.type_count[i]
						}
						
					}else{
						that.sku_list = []
					}
				})
			},
			// 显示可操作订单数据
			setgoodsState: function(k, is) {
				let that = this
				that.contentList.sku_list[k].goods_list[is].is_show_state = !that.contentList.sku_list[k].goods_list[is].is_show_state
			},
			// 选择
			changeCheck: function(k, is) {
				let that = this
				that.contentList.sku_list[k].goods_list[is].checked = !that.contentList.sku_list[k].goods_list[is].checked
				// console.log(that.contentList.sku_list[k].goods_list[is].checked)
			},
			showSpecName: function(k, is) {
				let that = this
				that.contentList.sku_list[k].goods_list[is].show_spec_name = !that.contentList.sku_list[k].goods_list[is].show_spec_name
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
			changeActivity:function(index,list){
				let that = this
				if(index==0){ //卡券
					let dataInfo = {
						interfaceId:'ids_get_card',
						card_id:list,
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
								that.cardList = data
							}
							else{
								that.cardList = []
							}
						}
					})
				}else if(index==1){//优惠
					console.log(list)
				}else if(index==2){
					that.isShowDiscount = !that.isShowDiscount
					if(!that.isShowDiscount){
						that.cardList = []
					}
				}
			},
			// 使用卡券
			useCard:function(id){
				console.log('使用的卡券id:',id)
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
			getCard:function(){
				let that = this
				let dataInfo = {
					interfaceId:"may_receive"
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
			},
			goToGoodsClassfiy: function() {
				uni.switchTab({
					url: `/pages/goods/goods_classify`,
				})
			},
			// 收藏、相似、删除
			setState:function(index,id,num,category_id,listName,encrypted_id){
				// console.log(index,cart_id,sku_id,num)
				let that = this
				// index 0 收藏 1 相似 2 删除
				if(index==0){//收藏
					let dataInfo = {
						interfaceId:'collectgoodsspu',
						encrypted_id:encrypted_id
					}
					that.request.uniRequest("goods", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.request.showToast('已收藏')
						}else if(res.data.code == 1020){
							that.request.showToast('该商品已收藏')
						}
					})
				}else if(index==1){//相似
					uni.navigateTo({
						url: `/pages/goods/goods_list?name=${listName}&id=${category_id}`,
					})
				}else if(index==2){//删除
					let cart_id = []
					cart_id.push(id)
					let dataInfo = {
						interfaceId:'changcart',
						type:2,
						cart_id:cart_id,
					}
					uni.showModal({
						title:'提示',
						content:'确定要删除此订单吗?',
						success:function(res){
							if (res.confirm) {
								that.request.uniRequest("shoppingCart", dataInfo).then(res => {
									if (res.data.code == 1000 && res.data.status == 'ok') {
										setTimeout(function(){
											that.request.showToast(res.data.message)
										},500)
										setTimeout(function(){
											that.getUserCart()
										},800)
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
			setGoodsNumber:function(id,cart_num){
				let that = this
				let cart_id = []
				cart_id.push(id)
				let dataInfo = {
					interfaceId:'changcart',
					type:0,
					cart_id:cart_id,
					num:cart_num,
				}
				that.request.uniRequest("shoppingCart", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.getUserCart()
					}
				})
				console.log(dataInfo)
			},
			setNumber: function(id, number, k, is) {
				let that = this
				that.contentList.sku_list[k].goods_list[is].cart_num += number
				if (that.contentList.sku_list[k].goods_list[is].cart_num >= that.contentList.sku_list[k].goods_list[is].max_buy_limit) {
					let number = parseInt(that.contentList.sku_list[k].goods_list[is].max_buy_limit)
					that.contentList.sku_list[k].goods_list[is].cart_num = number
				} else if (that.contentList.sku_list[k].goods_list[is].cart_num < that.contentList.sku_list[k].goods_list[is].min_buy_limit) {
					let number = parseInt(that.contentList.sku_list[k].goods_list[is].min_buy_limit)
					that.contentList.sku_list[k].goods_list[is].cart_num = number
				}
				that.setGoodsNumber(id,that.contentList.sku_list[k].goods_list[is].cart_num)
			},

			setPorductNumber: function(event) {
				let that = this
				let value = event.target.value;
				let k = event.currentTarget.dataset.k
				let is = event.currentTarget.dataset.is
				let id = event.currentTarget.dataset.id
				if(value==''){
					value = 1
					that.contentList.sku_list[k].goods_list[is].cart_num = 1
				}else{
					that.contentList.sku_list[k].goods_list[is].cart_num = parseInt(value)
				}
				if (that.contentList.sku_list[k].goods_list[is].cart_num >= that.contentList.sku_list[k].goods_list[is].max_buy_limit) {
					let number = parseInt(that.contentList.sku_list[k].goods_list[is].max_buy_limit)
					that.contentList.sku_list[k].goods_list[is].cart_num = number
				} else if (that.contentList.sku_list[k].goods_list[is].cart_num < that.contentList.sku_list[k].goods_list[is].min_buy_limit) {
					let number = parseInt(that.contentList.sku_list[k].goods_list[is].min_buy_limit)
					that.contentList.sku_list[k].goods_list[is].cart_num = number
				}			
				that.setGoodsNumber(id,that.contentList.sku_list[k].goods_list[is].cart_num)
			},
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
	.cart-content {
		background-color: #F6F6F6;
	}

	/* 购物车为空的时候 */
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
	.specialList{
		width: 100%;
	}
	.specialList image{
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

	/* 购物车商品展示 */
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
	.delete-goods{
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
	.this_is_goods_state{
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 100%;
	}
	.set_state{
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
	.collection{
		background-image: linear-gradient(-45deg, #F9BB00 0%, #F9BB00 100%);
	}
	.similar{
		background-image: linear-gradient(-45deg, #FF9966 0%, #FF9966 100%);
	}
	.this_is_goods_state .delete{
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
	}
	.set_state text{
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
	.porduct-item-images{
		position: relative;
	}
	.porduct-item-images .invalid-goods{
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
	.delete-invalid-goods{
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
	.versions-name-item{
		margin-left: 10rpx;
	}
	.versions-name-item:first-child{
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
	
	.this_show_spec_name {
		position: relative;
		width: 360rpx;
		top: -20rpx;
		left: 0;
	}
	
	.this_show_spec_name .show_spec_name_items {
		position: absolute;
		top: 0;
		left: 0;
		height: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:0 16rpx;
		font-size: 20rpx;
		width: 360rpx;
		background-color: #f0f0f0;
		border-radius: 20rpx;
	}
	.all_show_spec_name_items{
		flex: 1;
	}
	.show_spec_name_items  .unfold {
		width: 30rpx;
		height: 40rpx;
		margin-left: 10rpx;
		transform:rotate(180deg);
	}
	
	.mantled{
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: #f6f6f6;
		z-index: 12;
		width: 100%;
		border-radius: 24rpx;
	}
	.discounts-title{		
		font-size: 40rpx;
		font-weight: 700;
		padding-top: 25rpx;
		text-align: center;
	}
	.discounts-hint{
		color: #999999;
		font-size: 20rpx;
		margin-top: 15rpx;
		margin-bottom: 35rpx;
		text-align: center;
	}
	.card_list{
		padding: 20rpx;
	}
	.card-title-all-card{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 20rpx;
	}
	.more-card{
		color: #fa3475;
		font-size: 24rpx;
	}
	.delete-discount{
		position: absolute;
		top: 25rpx;
		right: 20rpx;
	}
	.delete-discount image{
		width: 32rpx;
		height: 32rpx;
	}
	.settlement{
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: #FFFFFF;
		z-index: 10;
		width: 100%;
	}
	.settlement-info{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
	}
	
	.total-discount .total{
		font-size: 28rpx;
		font-weight: 700rpx;
	}
	.use-discount{
		font-size: 24rpx;
		display: flex;
		align-items: center;
	}
	.use-discount-detailed{
		display: inline-block;
		margin-left: 10rpx;
		font-size: 20rpx;
		line-height: 34rpx;
		border-radius: 15rpx;
		padding: 0 15rpx;
		background-color: #999999;
		color: #FFFFFF;
	}
	.goSettlement{
		width: 180rpx;
		line-height: 70rpx;
		border-radius: 35rpx;
		font-size: 28rpx;
		text-align: center;
		color: #FFFFFF;
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
	}
</style>
