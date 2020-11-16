<template>
	<view class="confirm_order">
		<view class="top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px','background-color':topBackgroundColor,'color':color}]">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back" @click="goBack">
					<image :src="backImage" mode=""></image>
				</view>
				<view class="title"> {{title}} </view>
			</view>
		</view>
		<view class="content">
			<scroll-view class="porduct-content" scroll-y :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
				<template>
					<view class="confirm_order_content">
						<view class="selector-mode">
							<!-- 订单信息、商品类型、方式、用户名、电话、收货地址 -->
							<view class="user-message" @tap="set_user_info">
								<view class="real_name" v-if="contentList.user_info.real_name"> {{ contentList.user_info.real_name }} </view>
								<view class="no-user-name" v-else> —— </view>
								<view class="user-phone">{{ contentList.user_info.tel }}</view>
								<image class="edit_img" src="/static/images/edit.png" mode=""></image>
							</view>
							<view class="shipping-address" v-if="is_post_list.length>0" @tap='go_to_harves_address'>
								<view class="address">{{ contentList.user_info.address }}</view>
								<image src="/static/images/unfold.png" mode=""></image>
							</view>
						</view>
						<!-- 商品信息 -->
						<view class="porduct-introduce">
							<view class="porduct-introduce-top">
								<view class="this-title">商品信息 </view>
								<view class="hint-set-details" v-if="refundable_list.length>0" @tap="go_to_no_refund(0,refundable_list)">
									<view class="hint">有商品属于不支持退款操作</view>
									<view class="set-details"> 查看详情 > </view>
								</view>
							</view>
							<!-- 商品 -->
							<view class="porduct-images-all-set">
								<view class="order_goods_item" v-if="contentList.goods_list.length>1">
									<!-- 收费室 -->
									<view class="order_goods_item_content" v-if="scan_one_list.length>0&&scan_one_list.length>1">
										<view class="related-title">
											<view class="line"></view>
											<text> 收费室使用 </text>
										</view>
										<view class="goods_list">
											<view class="porduct-images-item">
												<scroll-view class="porduct-images-items" scroll-x="true">
													<view class="images-item">
														<view class="porduct-images-list" v-for="(item,k) in scan_one_list" :key='k'>
															<image :src="requestUrl+item.head_img" mode=""></image>
														</view>
													</view>
												</scroll-view>
											</view>
											<view class="all-see"  @tap="go_to_no_refund(0,scan_one_list)">
												<view class="all-porduct"> 共计{{ scan_one_list.length }}件 </view>
												<view class="see"> 查看 > </view>
											</view>
										</view>
									</view>
									<view class="order_goods_item_content" v-else-if='scan_one_list.length==1'>
										<view class="related-title">
											<view class="line"></view>
											<text> 收费室使用 </text>
										</view>
										<view class="goods_info" v-for="(item,k) in scan_one_list" :key='k' @tap="go_to_no_refund(1,item.sku_id)">
											<image class="goods_img" :src="requestUrl+item.head_img" mode=""></image>
											<view class="goods_detail">
												<view class="goods_title">{{item.goods_name}}</view>
												<view class="spec_name_item">
													<view class="spec_name_item_content">
														<text class="spec_name" v-for="(m,z) in item.spec_name" :key='z'> {{z}} : {{m}} </text>
													</view>
													<image class="unfold" src="../../static/images/unfold.png" mode=""></image>
												</view>
												<view class="goods_price"> ￥ <text>{{item.pay_price}}</text> </view>
											</view>
										</view>
									</view>
									<!-- 会员中心 -->
									<view class="order_goods_item_content" v-if="scan_two_list.length>0&&scan_two_list.length>1">
										<view class="related-title">
											<view class="line"></view>
											<text> 会员中心使用 </text>
										</view>
										<view class="goods_list">
											<view class="porduct-images-item">
												<scroll-view class="porduct-images-items" scroll-x="true">
													<view class="images-item">
														<view class="porduct-images-list" v-for="(item,k) in scan_two_list" :key='k'>
															<image :src="requestUrl+item.head_img" mode=""></image>
														</view>
													</view>
												</scroll-view>
											</view>
											<view class="all-see"  @tap="go_to_no_refund(0,scan_two_list)">
												<view class="all-porduct"> 共计{{ scan_two_list.length }}件 </view>
												<view class="see"> 查看 > </view>
											</view>
										</view>
									</view>
									<view class="order_goods_item_content" v-else-if='scan_two_list.length==1'>
										<view class="related-title">
											<view class="line"></view>
											<text> 会员中心使用 </text>
										</view>
										<view class="goods_info" v-for="(item,k) in scan_two_list" :key='k' @tap="go_to_no_refund(1,item.sku_id)">
											<image class="goods_img" :src="requestUrl+item.head_img" mode=""></image>
											<view class="goods_detail">
												<view class="goods_title">{{item.goods_name}}</view>
												<view class="spec_name_item">
													<view class="spec_name_item_content">
														<text class="spec_name" v-for="(m,z) in item.spec_name" :key='z'> {{z}} : {{m}} </text>
													</view>
													<image class="unfold" src="../../static/images/unfold.png" mode=""></image>
												</view>
												<view class="goods_price"> ￥ <text>{{item.pay_price}}</text> </view>
											</view>
										</view>
									</view>
									<!-- 邮寄 -->
									<view class="order_goods_item_content" v-if="is_post_list.length>0&&is_post_list.length>1">
										<view class="related-title">
											<view class="line"></view>
											<text> 邮寄商品 </text>
										</view>
										<view class="goods_list">
											<view class="porduct-images-item">
												<scroll-view class="porduct-images-items" scroll-x="true">
													<view class="images-item">
														<view class="porduct-images-list" v-for="(item,k) in is_post_list" :key='k'>
															<image :src="requestUrl+item.head_img" mode=""></image>
														</view>
													</view>
												</scroll-view>
											</view>
											<view class="all-see"  @tap="go_to_no_refund(0,is_post_list)">
												<view class="all-porduct"> 共计{{ is_post_list.length }}件 </view>
												<view class="see"> 查看 > </view>
											</view>
										</view>
									</view>
									<view class="order_goods_item_content" v-else-if='is_post_list.length==1'>
										<view class="related-title">
											<view class="line"></view>
											<text> 邮寄商品 </text>
										</view>
										<view class="goods_info" v-for="(item,k) in is_post_list" :key='k' @tap="go_to_no_refund(1,item.sku_id)">
											<image class="goods_img" :src="requestUrl+item.head_img" mode=""></image>
											<view class="goods_detail">
												<view class="goods_title">{{item.goods_name}}</view>
												<view class="spec_name_item">
													<view class="spec_name_item_content">
														<text class="spec_name" v-for="(m,z) in item.spec_name" :key='z'> {{z}} : {{m}} </text>
													</view>
													<image class="unfold" src="../../static/images/unfold.png" mode=""></image>
												</view>
												<view class="goods_price"> ￥ <text>{{item.pay_price}}</text> </view>
											</view>
										</view>
									</view>

								</view>
								<!-- 只有单商品 -->
								<view class="goods_list" v-else>
									<view class="goods_list-item">
										<view class="goods_item" v-for="(item,k) in contentList.goods_list" :key='k' @tap="go_to_no_refund(1,item.sku_id)">
											<view class="goods_info_content">
												<view class="related-title">
													<view class="line"></view>
													<text v-if="item.is_post==1"> 邮寄商品 </text>
													<text v-else-if="item.scan_department==0"> 财务室使用 </text>
													<text v-else-if="item.scan_department==1"> 会员中心使用 </text>
												</view>
												<view class="goods_info">
													<image class="goods_img" :src="requestUrl+item.head_img" mode=""></image>
													<view class="goods_detail">
														<view class="goods_title">{{item.goods_name}}</view>
														<view class="spec_name_item">
															<view class="spec_name_item_content">
																<text class="spec_name" v-for="(m,z) in item.spec_name" :key='z'> {{z}} : {{m}} </text>
															</view>
															<image class="unfold" src="../../static/images/unfold.png" mode=""></image>
														</view>
														<view class="goods_price"> ￥ <text>{{item.pay_price}}</text> </view>
													</view>
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
							<!-- 优惠活动 -->
							<view class="complimentary-list" v-if="contentList.sale_info.length>0">
								<view class="complimentary-items">
									<view class="complimentary-item" v-for="(i,k) in contentList.sale_info" :key='k'>
										<view class="complimentary-title">{{i.category}}</view>
										<view class="complimentary-content">{{i.rule_name}}</view>
									</view>
								</view>
								<view class="porduct-hint"> 赠品将以卡券的方式自动发放到卡包 </view>
							</view>
						</view>
						<!-- 留言 -->
						<view class="leave-a-message">
							<view class="message-text"> 留言 </view>
							<view class="message-input">
								建议留言前先与咨询沟通
							</view>
						</view>
						<!-- 商品价格和各种优惠 -->
						<view class="porduct-price">
							<view class="porduct-price-item">
								<view class="item-name">
									<text> 商品总价 </text>
								</view>
								<view class="price-content"> ￥ {{ contentList.total_price }}</view>
							</view>
							<!-- 邮寄 -->
							<view class="porduct-price-item">
								<view class="item-name">
									<text> 邮寄运费 </text>
								</view>
								<view class="price-content"> ￥0 </view>
							</view>
							<view class="porduct-price-item">
								<view class="item-name">
									<text> 活动优惠 </text>
									<image src="../../static/images/ask1.png" mode=""></image>
								</view>
								<view class="price-content color" v-if="contentList.sale_price>0"> <text>-</text> ￥ {{ contentList.sale_price }}</view>
								<view class="price-content color" v-else> ￥0 </view>
							</view>
							<view class="porduct-price-item">
								<view class="item-name">
									<text> 卡券 </text>
								</view>
								<view class="card_list">
									<view class="preferential-price on_card_list" v-if="can_use_card_length>0" @tap='is_show_card'>
										<text>
											{{ can_use_card_length }}张卡券可用 >
										</text>
									</view>
									<view class="on_card_list" v-else> 暂无可使用卡券 > </view>
								</view>
							</view>
							<!-- 积分、喵豆、余额 -->
							<view class="deductionList" v-for="(i,k) in deductionList" :key='k'>
								<view class="deduction-name-content">
									<view class="deduction-name">{{i.name}}</view>
									<image src="../../static/images/ask1.png" mode=""></image>
									<view class="deduction-content">{{i.content}} <text class="deduction-price">抵{{i.price}}</text></view>
								</view>
								<view class="deduction-switch">
									<switch color='#09bb07' style="transform:scale(0.8)" :checked='i.checked' :data-k='k' @change="switchChange" />
								</view>
							</view>
							<view class="porduct-price-item off_sale">
								<view class="item-name">
									<text> 实际应付 </text>
								</view>
								<view class="price-content"> ￥ {{ contentList.off_sale }}</view>
							</view>
							<view class="porduct-price-item color">
								<view class="item-name">
									<text> 在线支付 </text>
								</view>
								<view class="price-content"> ￥ {{ contentList.online_pay }}</view>
							</view>
							<view class="porduct-price-item">
								<view class="item-name">
									<text> 到院再付 </text>
								</view>
								<view class="price-content"> ￥ {{ contentList.offline_pay }}</view>
							</view>
						</view>
						<!-- 支付方式 -->
						<view class="mode-of-payment">
							<view class="this-title">支付方式 </view>
							<view class="payment-way" v-for="(i,k) in playWayList" :key='k'>
								<view class="image-name">
									<image :src="i.url" mode=""></image>
									<view class="play-name">{{i.name}}</view>
								</view>
								<view class="play-radio">
									<checkbox-group @change="playChange">
										<label>
											<view>
												<checkbox color="#ff6699" :value="i.value" :checked="i.checked" />
											</view>
										</label>
									</checkbox-group>
								</view>
							</view>
						</view>
						<!-- 底部立即支付 -->
						<view class="footer-navigation-bars">
							<view class="footer-hint">有商品于2020.06.26过期，请尽快到院核销使用</view>
							<view class="price-play">
								<view class="price-item-content">
									<view class="all-price">
										<text class="total">合计:</text>
										<text class="text">￥</text>
										<text class="all-prices">
											{{ contentList.off_sale  || 0 }}
										</text>
									</view>
									<view class="item-price">在线支付:￥{{ contentList.online_pay || 0 }}, 到院再付:￥{{ contentList.offline_pay  || 0 }}</view>
								</view>
								<view class="promptly-play">立即支付</view>
							</view>
						</view>
					</view>
				</template>
			</scroll-view>
		</view>
		<!-- 用户联系方式 -->
		<view class="user_info_content" v-show="show_set_user_info" :style="[{'top':height/2-90+'px'}]">
			<input class="user-name" type="text" placeholder-style="color:#999999" @input="set_user_name" :placeholder="contentList.user_info.real_name?contentList.user_info.real_name:'联系人'" />
			<input class="phone-input" type="number" placeholder-style="color:#999999" @input="set_user_tel" :placeholder="contentList.user_info.tel?contentList.user_info.tel:'联系电话'"
			 maxlength="11" />
			<view class="set_info">
				<button class="set_info_btn" type="default" @tap="keep_user_info">确定</button>
			</view>

		</view>
		<!-- 卡券 -->

		<scroll-view class="card-content" scroll-y="true" v-show="show_card" :style="[{'height':height/2+'px'}]">
			<view class="card-content-title">优惠券</view>
			<image class="delete-card" src="../../static/images/delete.png" mode="" @tap="is_show_card"></image>
			<view class="content-all">
				<view class="card_tab">
					<view class="can_use" :class="{change_use:btnnum == 0}" @tap="changeUse(0)" v-show="can_use_card_length>0">
						<text>可使用卡券({{ can_use_card_length }})</text>
						<view class="card_line end-cont" :class="{dis:btnnum == 0}"></view>
					</view>
					<view class="can_use" :class="{change_use:btnnum == 1}" @tap="changeUse(1)" v-show="no_use_card_length>0">
						<text>不可使用卡券({{ no_use_card_length }})</text>
						<view class="card_line end-cont" :class="{dis:btnnum == 1}"></view>
					</view>
				</view>
				<view class="can_use_card" v-show="btnnum == 0">
					<ticket :order_card='can_use_card' :card_checked='card_checked' :can_use='btnnum' @checkboxChange='checkboxChange'
					 @showTicket='showTicket'>
					</ticket>

				</view>
				<view class="can_use_card" v-show="btnnum == 1">
					<ticket :order_card='no_use_card' :can_use='btnnum' @checkboxChange='checkboxChange' @showTicket='showTicket'>
					</ticket>

				</view>

			</view>
			<view class="keep_ticket">
				<view class="ticket_btn" @tap='use_ticket'>
					<view class="btn_keep">确认使用</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import ticket from "../../components/ticket.vue"
	export default {
		components: {
			ticket
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				barName: 'back', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '/static/images/return.png',
				title: '确认订单',
				btnnum: 0,
				deductionList: [{
						name: '积分',
						content: '共0，可用0,',
						price: 0,
						checked: false
					},
					{
						name: '喵豆',
						content: '共0，可用0,',
						price: 0,
						checked: false
					},
					{
						name: '余额',
						content: '共0，可用0,',
						price: 0,
						checked: false
					},
				],
				playWayList: [{
						url: '/static/images/weixin_3f.png',
						name: '微信',
						value: 'weixin',
						checked: true
					},
					{
						url: '/static/images/zhifubao.png',
						name: '支付宝',
						value: 'zhifubao',
						checked: false
					},
					{
						url: '/static/images/yinlian.png',
						name: '银联支付',
						value: 'yinlian',
						checked: false
					},
				],
				requestUrl: '',
				contentList: {
					user_info: {
						real_name: '',
						tel: ''
					},
					goods_list: [],
					sale_info: []
				}, //订单详情
				is_post_list: [], //邮寄商品
				scan_one_list: [], //收费室使用商品
				scan_two_list: [], //会员中心使用商品
				refundable_list: [], //不可线上退款的商品的skuid列表
				can_use_card: [],
				can_use_card_length: 0,
				no_use_card: [],
				no_use_card_length: 0,
				show_set_user_info: false, //显示用户的联系方式
				user_name: '',
				user_tel: '',
				show_card: false, //显示卡券
				this_card_id: '',
				cards_list: [],
				card_checked: true,
			}
		},
		onShow: function() {
			let that = this
			let userInfo = uni.getStorageSync('newuserInfo')
			if (userInfo) {
				that.contentList.user_info = userInfo
			}
		},
		onLoad: function(option) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			let cart_id_list = uni.getStorageSync("cart_id_list")
			// 获取订单的详情
			that.get_order_detail(cart_id_list)
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
			set_user_info: function() {
				let that = this
				that.show_set_user_info = !that.show_set_user_info
			},
			set_user_name: function(event) {
				let that = this
				let value = event.detail.value
				that.user_name = value
			},
			set_user_tel: function(event) {
				let that = this
				let value = event.detail.value
				that.user_tel = value
			},
			// 更改用户信息
			keep_user_info: function() {
				let that = this
				// console.log(that.user_name, that.user_tel)
				if (that.contentList.user_info.real_name && that.contentList.user_info.tel) {
					that.show_set_user_info = !that.show_set_user_info
				} else if (that.user_name && that.user_tel) {
					that.contentList.user_info.real_name = that.user_name
					that.contentList.user_info.tel = that.user_tel
					let dataInfo = {
						interfaceId: 'update_info',
						tel: that.contentList.user_info.tel,
						name: that.contentList.user_info.real_name
					}
					that.request.uniRequest("login", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							that.contentList.user_info = data
							that.show_set_user_info = !that.show_set_user_info
						}
					})
				} else if (that.user_name) {
					that.contentList.user_info.real_name = that.user_name
					let dataInfo = {
						interfaceId: 'update_info',
						tel: that.contentList.user_info.tel,
						name: that.contentList.user_info.real_name
					}
					that.request.uniRequest("login", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							that.contentList.user_info = data
							that.show_set_user_info = !that.show_set_user_info
						}
					})
				} else {
					uni.showToast({
						title: '请输入联系方式',
						icon: 'none'
					})
				}
			},
			go_to_harves_address: function() {
				uni.navigateTo({
					url: `/pages/my/harves_address`,
				})
			},
			// 获取订单的详情
			get_order_detail: function(cart_id_list) {
				let that = this
				let dataInfo = {
					interfaceId: 'confirmcart',
					cart: cart_id_list
				}
				that.request.uniRequest("order", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						let goods_list_obj = data.goods_list
						let goods_list_arr = []
						for (let key in goods_list_obj) {
							if (!goods_list_obj.hasOwnProperty(key)) {
								continue
							}
							let item = {}
							item = goods_list_obj[key]
							goods_list_arr.push(item)
						}
						data.goods_list = goods_list_arr
						that.contentList = data
						// 用户信息
						let userInfo = uni.getStorageSync('newuserInfo')
						if (userInfo) {
							that.contentList.user_info = userInfo
						}
						for (let i = 0; i < goods_list_arr.length; i++) {
							if (goods_list_arr[i].is_post == 1) {
								that.is_post_list.push(goods_list_arr[i])
							} else if (goods_list_arr[i].scan_department == 0) {
								that.scan_one_list.push(goods_list_arr[i])
							} else if (goods_list_arr[i].scan_department == 1) {
								that.scan_two_list.push(goods_list_arr[i])
							}
							if (goods_list_arr[i].refundable == 0) { //是否允许退款，1：允许，0：不允许
								that.refundable_list.push(goods_list_arr[i].sku_id)
								console.log(that.refundable_list)
							}
						}
						// console.log(data)

						that.show_user_card(data.card_list)
					} else {
						console.log('没有数据')
					}
				})
			},
			// 显示卡券
			is_show_card: function() {
				let that = this
				that.show_card = !that.show_card
			},
			show_user_card: function(card_list) {
				let that = this
				for (let key in card_list) {
					if (key == 1) {
						let list = []
						let card_number = 0
						let card_obj = card_list[key]
						for (let key in card_obj) {
							if (!card_obj.hasOwnProperty(key)) {
								continue
							}
							let item = {}
							item = card_obj[key]
							item.checked = false
							item.showTicketDetails = false
							item.arrowImages = '/static/images/arrow-down.png'
							let startTime = item.use_start_time
							item.c_use_start_time = that.setTimer(startTime)
							let useTime = item.use_end_time
							item.c_use_end_time = that.setTimer(useTime)
							item.is_use = true
							card_number += parseInt(item.have)
							// 在此处应该让用户有的卡券有几张就循环建几张
							for (let i = 0; i < item.have; i++) {
								list.push(item)
							}
						}
						that.can_use_card = list
						// console.log(card_number)
						that.can_use_card_length = card_number
					} else {
						let list = []
						let card_number = 0
						let card_obj = card_list[key]
						for (let key in card_obj) {
							if (!card_obj.hasOwnProperty(key)) {
								continue
							}
							let item = {}
							item = card_obj[key]
							item.checked = false
							item.showTicketDetails = false
							item.arrowImages = '/static/images/arrow-down.png'
							let startTime = item.use_start_time
							item.c_use_start_time = that.setTimer(startTime)
							let useTime = item.use_end_time
							item.c_use_end_time = that.setTimer(useTime)
							item.is_use = false
							card_number += parseInt(item.have)
							list.push(item)
						}
						that.no_use_card = list
						that.no_use_card_length = card_number
					}
				}
			},
			setTimer: function(date) {
				date = new Date(date * 1000)
				let month = date.getMonth() + 1
				if (month < 10) {
					month = "0" + month
				}
				let day = date.getDate()
				if (day < 10) {
					day = "0" + day
				}
				let time = date.getFullYear() + '-' + month + '-' + day
				// console.log(time)
				return time
			},
			changeUse: function(index) {
				let that = this
				that.btnnum = index
			},
			showTicket: function(order_card, can_use) {
				let that = this
				if (can_use == 0) {
					that.can_use_card = order_card
					// that.can_use_card[index].showTicketDetails = !that.can_use_card[index].showTicketDetails
					// if (that.can_use_card[index].showTicketDetails) {
					// 	that.can_use_card[index].arrowImages = '/static/images/arrow-top.png'
					// } else {
					// 	that.can_use_card[index].arrowImages = '/static/images/arrow-down.png'
					// }
					// 因数据改变后页面没有渲染，只有强制刷新一次页面
					// this.$forceUpdate() 
					return
				} else {
					that.no_use_card = order_card
				}

			},
			checkboxChange: function(order_card, id, index, flag) {
				let that = this
				let list = order_card
				if (flag == 1) {
					let obj = {}
					if (that.this_card_id == id) {
						for (let i = 0; i < that.cards_list.length; i++) {
							if (that.cards_list[i].card_id == id) {
								that.cards_list[i].num += 1
							}
						}
					} else {
						that.this_card_id = id
						obj = {
							card_id: id,
							num: 1
						}
						that.cards_list.push(obj)
					}
					that.can_use_card = list
					that.get_order_info(id, order_card, index)
				} else { //取消时
					for (let key in that.cards_list) {
						if (that.cards_list[key].card_id == id) {
							if (that.cards_list[key].num > 1) {
								that.cards_list[key].num -= 1
							} else {
								that.cards_list.splice(key, 1)
								that.this_card_id = ''
							}
						}
					}
				}
			},
			// 重新获取订单价格
			get_order_info: function(id, order_card, index) {
				let that = this
				let sku_list = that.get_goods_info()
				console.log(that.cards_list)
				if (that.cards_list.length > 2) {
					that.setArr(that.cards_list)
				}
				let dataInfo = {
					interfaceId: 'superposition',
					sku_list: sku_list,
					cards_list: that.cards_list
				}
				that.request.uniRequest("order", dataInfo).then(res => {
					let data = res.data.data
					if (res.data.code == 1000 && res.data.status == 'ok') {
						console.log(data)
					} else {
						let list = order_card
						list[index].checked = false
						that.can_use_card = list
						for (let key in that.cards_list) {
							if (that.cards_list[key].card_id == id) {
								if (that.cards_list[key].num > 1) {
									that.cards_list[key].num -= 1
								} else {
									that.cards_list.splice(key, 1)
									that.this_card_id = ''
								}
							}
						}
					}

				})
			},
			// 获取商品的id
			get_goods_info: function() {
				let that = this
				let cart_id_list = []
				// is_post_list: [], //邮寄商品
				// scan_one_list: [], //收费室使用商品
				// scan_two_list: [], //会员中心使用商品
				if (that.is_post_list.length > 0) {
					let list = {}
					for (let i = 0; i < that.is_post_list.length; i++) {
						list = {
							sku_id: that.is_post_list[i].sku_id,
							buy_type: that.is_post_list[i].buy_type,
							is_post: that.is_post_list[i].is_post,
							num: that.is_post_list[i].buy_num
						}
					}
					cart_id_list.push(list)
				}
				if (that.scan_one_list.length > 0) {
					let list = {}
					for (let i = 0; i < that.scan_one_list.length; i++) {
						list = {
							sku_id: that.scan_one_list[i].sku_id,
							buy_type: that.scan_one_list[i].buy_type,
							is_post: that.scan_one_list[i].is_post,
							num: that.scan_one_list[i].buy_num
						}
					}
					cart_id_list.push(list)
				}
				if (that.scan_two_list.length > 0) {
					let list = {}
					for (let i = 0; i < that.scan_two_list.length; i++) {
						list = {
							sku_id: that.scan_two_list[i].sku_id,
							buy_type: that.scan_two_list[i].buy_type,
							is_post: that.scan_two_list[i].is_post,
							num: that.scan_two_list[i].buy_num
						}
					}
					cart_id_list.push(list)
				}
				return cart_id_list
			},
			// 数组去重
			setArr: function(arr) {
				let list = []
				let str = ''
				for (let i = 0; i < arr.length; i++) {
					let hasRead = false;
					for (let k = 0; k < list.length; k++) {
						if (list[k] == arr[i]) {
							hasRead = true;
						}
					}
					if (!hasRead) {
						let _index = i,
							haveSame = false;
						for (let j = i + 1; j < arr.length; j++) {
							if (arr[i] == arr[j]) {
								_index += "," + j;
								haveSame = true;
							}
						}
						if (haveSame) {
							list.push(arr[i]);
							str += "数组下标为" + _index + "，相同值为" + arr[i] + "\n";
						}
					}
				}
				console.log(str)
				return str
			},
			use_ticket: function() {
				let that = this
				that.show_card = !that.show_card
			},
			// 选择抵用
			switchChange: function(e) {
				console.log(e.target.value)
				console.log(e.currentTarget.dataset)
			},
			// 付款方式
			playChange: function(e) {
				var items = this.playWayList,
					values = e.detail.value;
				console.log(values)
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
			},
			// 不可线上退款商品或者订单详情商品
			go_to_no_refund:function(type,info){
				let that = this
				// type 0表示数组类型 1表示单商品
				let info_list = []
				if(type==0){
					let list = info
					for(let key in list){
						info_list.push(list[key].sku_id)
					}
				}else{
					let sku_id = info
					info_list.push(sku_id)
				}
				info_list = JSON.stringify(info_list)
				console.log(info_list)
				uni.navigateTo({
					url: `/pages/confirm_order/no_refund?info=${info_list}`,
				})
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
		text-align: center;
		font-size: 37rpx;
	}

	.porduct-content {
		background-color: #F6F6F6;
	}

	.selector-mode {
		padding: 32rpx 40rpx 58rpx;
		background-color: #FFFFFF;
		font-size: 24rpx;
		display: flex;
		flex-direction: column;
		border-bottom-left-radius: 24rpx;
		border-bottom-right-radius: 24rpx;
	}

	.user-message {
		display: flex;
		align-items: center;
		font-size: 32rpx;
		color: #000000;
	}

	.no-user-name {
		color: #999999;
	}

	.user-phone {
		margin: 0 32rpx 0 24rpx;
	}

	.edit_img {
		width: 42rpx;
		height: 42rpx;
	}

	.shipping-address {
		display: flex;
		font-size: 24rpx;
		color: #343434;
		line-height: 40rpx;
		width: 100%;
		align-items: center;
	}

	.address {
		flex: 1;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.shipping-address image {
		width: 32rpx;
		height: 32rpx;
		transform: rotate(270deg);
		margin-left: 30rpx;
	}

	/* 商品信息 */
	.porduct-introduce {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		display: flex;
		flex-direction: column;
		padding: 40rpx;
		margin-top: 20rpx;
	}

	.porduct-introduce-top {
		display: flex;
		align-items: center;
		line-height: 30rpx;
		justify-content: space-between;
		padding-bottom: 20rpx;
		border-bottom: 1rpx solid #F0F0F0;
	}

	.this-title {
		font-size: 28rpx;
		font-weight: bolder;
		color: #000000;
	}

	.hint-set-details {
		display: flex;
		color: #111111;
		font-size: 24rpx;

	}

	.hint {
		font-weight: lighter;
	}

	.set-details {
		color: #fa3475;
		margin-left: 20rpx;
	}

	.porduct-images-all-set {
		display: flex;
		align-items: center;
	}

	.order_goods_item_content {
		padding-top: 30rpx;
	}

	.goods_list {
		display: flex;
		align-items: center;
	}

	.porduct-images-item {
		width: 520rpx;
		height: 200rpx;
	}

	.images-item {
		width: 100%;
		display: flex;
	}

	.porduct-images-list {
		width: 200rpx;
		height: 200rpx;
		margin-right: 30rpx;
	}

	.porduct-images-list image,
	.goods_info .goods_img {
		width: 200rpx;
		height: 200rpx;
	}

	.all-see {
		width: 180rpx;
		text-align: center;
		font-size: 24rpx;
	}

	.see {
		color: #fa3475;
	}

	.goods_info_content {
		padding-top: 20rpx;
	}

	.related-title {
		font-size: 24rpx;
		font-weight: bold;
		color: #111111;
		display: flex;
		align-items: center;
		padding-bottom: 22rpx;
	}

	.line {
		width: 6rpx;
		height: 24rpx;
		background-color: #fa3576;
		margin-right: 20rpx;
	}

	.goods_info {
		display: flex;
		align-items: center;
	}

	.goods_detail {
		margin-left: 28rpx;
		flex: 1;
	}

	.goods_title {
		font-size: 24rpx;
		color: #999999;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		margin-bottom: 20rpx;
	}

	.spec_name_item {
		width: 360rpx;
		line-height: 40rpx;
		background-color: #f0f0f0;
		border-radius: 20rpx;
		padding: 0 16rpx;
		color: #999999;
		font-size: 20rpx;
		display: flex;
	}

	.spec_name_item_content {
		display: flex;
		width: 320rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}

	.spec_name {
		margin-left: 10rpx;
	}

	.spec_name:first-child {
		margin-left: 0;
	}

	.unfold {
		width: 30rpx;
		height: 40rpx;
		margin-left: 10rpx;
	}

	.goods_price {
		color: #fa3475;
		font-size: 24rpx;
		margin-top: 30rpx;
	}

	.goods_price text {
		font-size: 40rpx;
	}

	.complimentary-item {
		display: flex;
		align-items: center;
		margin-top: 24rpx;
		font-size: 24rpx;
		color: #000000;
	}

	.complimentary-title {
		width: 80rpx;
		height: 30rpx;
		line-height: 30rpx;
		background-color: #ffe8f0;
		border-radius: 15rpx;
		font-size: 20rpx;
		color: #fa3475;
		margin-right: 18rpx;
		text-align: center;
	}

	.porduct-hint {
		margin-top: 37rpx;
		font-size: 24rpx;
		padding-top: 30rpx;
		border-top: 2rpx solid #f0f0f0;
		color: #999999;
	}

	/* 留言 */
	.leave-a-message {
		padding: 40rpx;
		margin-top: 20rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		display: flex;
		align-items: center;
		line-height: 30rpx;
	}

	.message-text {
		font-size: 28rpx;
		color: #111111;
		font-weight: bolder;
		margin-right: 30rpx;
	}

	.message-input {
		flex: 1;
		border-radius: 8rpx;
		background-color: #F6F6F6;
		padding: 28rpx 0 28rpx 32rpx;
		font-size: 24rpx;
		color: #999999;
	}

	.preferential-policy {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		margin-bottom: 32rpx;
	}

	.preferential-policy:last-child {
		margin-bottom: 0;
	}

	.ticket-name-content {
		display: flex;
		align-items: center;
		line-height: 48rpx;
	}

	.ticket-name {
		width: 80rpx;
		height: 30rpx;
		line-height: 30rpx;
		color: #fa3475;
		text-align: center;
		background-color: #ffe8f0;
		border-radius: 15rpx;
		margin-right: 16rpx;
	}

	.preferential-price,
	.preferential-prices {
		font-size: 32rpx;
		color: #fa3475;
		line-height: 48rpx;
	}

	.preferential-prices {
		padding-right: 42rpx;
	}

	/* 积分、喵豆、余额 */

	.deductionList {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		line-height: 30rpx;
		margin-bottom: 30rpx;
	}

	.deductionList:last-child {
		margin-bottom: 0;
	}

	.deduction-name-content {
		display: flex;
		align-items: center;
	}

	.deduction-name-content image {
		width: 32rpx;
		height: 32rpx;
		margin: 0 24rpx 0 12rpx;
	}

	.deduction-price {
		color: #fa3475;
	}

	/* 商品总价 */
	.porduct-price {
		padding: 40rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-top: 20rpx;
	}

	.porduct-price-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40rpx;
	}

	.porduct-price-item:last-child {
		margin-bottom: 0;
	}

	.off_sale {
		padding-top: 40rpx;
		border-top: 1rpx solid #F0F0F0;
	}

	.on_card_list {
		font-size: 24rpx;
		color: #fa3475;
	}

	.item-name {
		font-size: 24rpx;
		display: flex;
	}

	.item-name image {
		width: 32rpx;
		height: 32rpx;
		margin-left: 12rpx;
	}

	.price-content {
		font-size: 32rpx;

	}

	.color {
		color: #fa3475;
	}

	/* 支付方式 */
	.mode-of-payment {
		margin-top: 20rpx;
		margin-bottom: 294rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 40rpx;
	}

	.payment-way {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 40rpx;
	}

	.image-name {
		display: flex;
		align-items: center;
		font-size: 24rpx;
		color: #000000;
	}

	.image-name image {
		width: 72rpx;
		height: 72rpx;
		border-radius: 36rpx;
		margin-right: 20rpx;
	}

	/* 底部 */
	.footer-navigation-bars {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}

	.footer-hint {
		background-color: #000000;
		color: #FFFFFF;
		font-size: 20rpx;
		text-align: center;
		padding: 14rpx 0;
		opacity: 0.8;
	}

	.price-play {
		display: flex;
		justify-content: space-between;
		padding: 12rpx 40rpx;
		background-color: #FFFFFF;
		font-size: 20rpx;
	}

	.all-price {
		color: #111111;
	}

	.total {
		font-size: 28rpx;
		font-weight: bolder;
	}

	.all-price .text {
		color: #fa3475;
		font-size: 24rpx;
		margin-left: 12rpx;
	}

	.all-prices {
		font-size: 40rpx;
		color: #fa3475;
	}

	.item-price {
		color: #999999;
		line-height: 34rpx;
	}

	.promptly-play {
		width: 220rpx;
		height: 80rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		line-height: 80rpx;
		text-align: center;
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
		border-radius: 40rpx;
	}

	/* 联系方式 */
	.user_info_content {
		position: fixed;
		left: 215rpx;
		width: 320rpx;
		height: 180px;
		background-color: #F0F0F0;
		border-radius: 24rpx;
		z-index: 52;
		padding: 40rpx 20rpx;
	}

	.user-name,
	.phone-input {
		border: 1rpx solid #fa3475;
		margin-bottom: 30rpx;
		border-radius: 12rpx;
		padding: 10rpx 15rpx;
	}

	.set_info {
		margin-top: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.set_info_btn {
		width: 240rpx;
		line-height: 80rpx;
		color: #FFFFFF;
		border-radius: 40rpx;
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
	}

	.set_info_btn::after {
		border: none;
	}

	.end-cont {
		display: none;
	}

	.dis {
		display: block;
	}

	.card-content {
		position: fixed;
		width: 100%;
		background-color: #f6f6f6;
		left: 0;
		bottom: 0;
		border-radius: 24rpx;
		padding: 20rpx 0 120rpx;
		z-index: 52;
	}

	.card-content-title {
		text-align: center;
		font-size: 40rpx;
	}

	.delete-card {
		width: 32rpx;
		height: 32rpx;
		position: absolute;
		top: 10rpx;
		right: 20rpx;
	}

	.card_tab {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 100%;
		padding: 20rpx 0;
		font-size: 24rpx;
	}

	.can_use {
		width: 50%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		position: relative;
	}

	.change_use {
		color: #fa3475;
		font-weight: bold;
	}

	.card_line {
		width: 140rpx;
		height: 4rpx;
		background-color: #fa3475;
		position: relative;
		left: 0;
		bottom: -5rpx;
	}

	.can_use_card {
		padding: 20rpx;
	}

	.keep_ticket {
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 32rpx 0;
		z-index: 55;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		text-align: center;
		width: 100%;
		background-color: #FFFFFF;
	}

	.ticket_btn {
		width: 100%;
		line-height: 80rpx;
		padding: 0 20rpx;
	}

	.btn_keep {
		width: 100%;
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
		box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(250, 53, 118, 0.5);
		border-radius: 40rpx;
	}
</style>
