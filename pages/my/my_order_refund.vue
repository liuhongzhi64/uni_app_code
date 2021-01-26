<template>
	<view class="my_order_refund">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor'
		 :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' 
		 :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="my_order_refund-content" :style="[{'padding-top':menuBottom+10+'px'}]">
			<view class="refund-content">
				<view class="refund-hint">
					<view class="hint-title">温馨提示:</view>
					<view class="hint-list" v-for="(i,k) in hintList" :key='k'> {{i}} </view>
				</view>
				<view class="refund-porduct">
					<view class="refund-porduct-hint">
						<view class="refund-porduct-hint-title">请选择可退商品</view>
						<view class="porduct-hint-content">部分不可退商品（如特殊活动等商品）请联系咨询师</view>
					</view>
					<!-- 线上退款商品 -->
					<view class="line_refund_goods">	
						<view class="order-content">
							<!-- 收费室使用商品 -->
							<view class="order-items" v-if="scan_one_list.length>0">
								<view class="service-conditions">
									<view class="line-service-name">
										<checkbox color="#ff5f93" class="allcheckbox" value="0" :checked="scan_one_list_check" @tap="change_all(0)" />
										<view class="service-name"> 收费室使用商品 </view>
									</view>
								</view>
								<checkbox-group :data-index='0' @change="change_item">
									<view class="change_goods" v-for="(i,k) in scan_one_list" :key='k'>
										<view class="order-porduct-content" >
											<view class="order-porduct-line">
												<view class="porduct-line"></view>
											</view>
											<view class="order-porduct-images-name">
												<view class="checkbox-item" >
													<checkbox color="#ff5f93" :value="i.id" :checked="i.checked" @tap="check_item(0,k,i.id)" />
												</view>
												<view class="porduct-images">
													<image :src="requestUrl+i.img" @tap="goods_detail(i.sku_id,i.encrypted_id)"></image>
												</view>
												<view class="porduct-right">
													<view class="porduct-name">{{i.spu_name}}</view>
													<view class="sku_spec_content" @tap='this_show_sku_spec(i,k)'>
														<view class="item_content">
															<text class="content_items" v-for="(z,j) in i.sku_spec" :key='j'>
																<text class="versions"> {{ z }} : {{ j }} ; </text>
															</text>
														</view>
														<image src="../../static/images/arrow-down.png" mode=""></image>
													</view>
													<view class="show_item_content" @tap='this_show_sku_spec(i,k)' v-if="i.show_sku_spec">
														<view class="show_all_items">
															<view class="content-items" v-for="(z,j) in i.sku_spec" :key='j'>
																<text class="versions"> {{ z }} : {{ j }} ; </text>
															</view>
														</view>
														<image src="../../static/images/arrow-down.png" mode=""></image>
													</view>
													<view class="porduct-price-number">
														<view class="porduct-price"><text>￥</text>{{i.sku_price}}</view>
														<view class="porduct-number"> x {{i.sku_nums}} </view>
													</view>
												</view>
											</view>
											<view class="pay-for-the-order">
												<view class="pay-order-content">
													<view class="total-price-on-line-pay">
														<view class="total-price"> 总价 <text>￥ {{i.payable_amount}} </text> </view>
														<view class="on-line-pay">
															在线支付 <text>￥ {{i.online_pay}} </text> 
														</view>
													</view>
													<view class="discounts-hospital-pay">
														<view class="discounts">
															优惠 <text>￥ {{ i.discount || 0}} </text>
															<image src="../../static/images/ask1.png" 
															 @tap="this_discount(i.hd_sale_info,i.card_sale_info,i.discount)"></image>
														</view>
														<view class="hospital-pay">到院再付 <text>￥ {{i.offline_pay}} </text> </view>
													</view>
													<view class="cope-with">应付 <text>￥ {{i.rel_price}} </text> </view>
												</view>
											</view>
										</view>
									</view>									
								</checkbox-group>
							</view>
							<!-- 会中心员使用商品 -->
							<view class="order-items" v-else-if="scan_two_list.length>0">
								<view class="service-conditions">
									<view class="line-service-name">
										<checkbox color="#ff5f93" class="allcheckbox" value="1" :checked="scan_two_list_check" @tap="change_all(1)" />
										<view class="service-name"> 会中心员使用商品 </view>
									</view>
								</view>
								<checkbox-group :data-index='1' @change="change_item">
									<view class="change_goods" v-for="(i,k) in scan_two_list" :key='k'>
										<view class="order-porduct-content" >
											<view class="order-porduct-line">
												<view class="porduct-line"></view>
											</view>
											<view class="order-porduct-images-name">
												<view class="checkbox-item">
													<checkbox color="#ff5f93" :value="i.id" :checked="i.checked" @tap="check_item(1,k,i.id)" />
												</view>
												<view class="porduct-images">
													<image :src="requestUrl+i.img" @tap="goods_detail(i.sku_id,i.encrypted_id)"></image>
												</view>
												<view class="porduct-right">
													<view class="porduct-name">{{i.spu_name}}</view>
													<view class="sku_spec_content" @tap='this_show_sku_spec(i,k)'>
														<view class="item_content">
															<text class="content_items" v-for="(z,j) in i.sku_spec" :key='j'>
																<text class="versions"> {{ z }} : {{ j }} ; </text>
															</text>
														</view>
														<image src="../../static/images/arrow-down.png" mode=""></image>
													</view>
													<view class="show_item_content" @tap='this_show_sku_spec(i,k)' v-if="i.show_sku_spec">
														<view class="show_all_items">
															<view class="content-items" v-for="(z,j) in i.sku_spec" :key='j'>
																<text class="versions"> {{ z }} : {{ j }} ; </text>
															</view>
														</view>
														<image src="../../static/images/arrow-down.png" mode=""></image>
													</view>
													<view class="porduct-price-number">
														<view class="porduct-price"><text>￥</text>{{i.sku_price}}</view>
														<view class="porduct-number"> x {{i.sku_nums}} </view>
													</view>
												</view>
											</view>
											<view class="pay-for-the-order">
												<view class="pay-order-content">
													<view class="total-price-on-line-pay">
														<view class="total-price"> 总价 <text>￥ {{i.payable_amount}} </text> </view>
														<view class="on-line-pay">
															在线支付 <text>￥ {{i.online_pay}} </text> 
														</view>
													</view>
													<view class="discounts-hospital-pay">
														<view class="discounts">
															优惠 <text>￥ {{ i.discount || 0}} </text>
															<image src="../../static/images/ask1.png" 
															 @tap="this_discount(i.hd_sale_info,i.card_sale_info,i.discount)"></image>
														</view>
														<view class="hospital-pay">到院再付 <text>￥ {{i.offline_pay}} </text> </view>
													</view>
													<view class="cope-with">应付 <text>￥ {{i.rel_price}} </text> </view>
												</view>
											</view>
										</view>
									</view>									
								</checkbox-group>
							</view>
							<!-- 邮寄商品 -->
							<view class="order-items" v-else-if="is_post_list.length>0">
								<view class="service-conditions">
									<view class="line-service-name">
										<checkbox color="#ff5f93" class="allcheckbox" value="2" :checked="is_post_list_check" @tap="change_all(2)" />
										<view class="service-name"> 邮寄商品 </view>
									</view>
								</view>
								<checkbox-group :data-index='2' @change="change_item">
									<view class="change_goods" v-for="(i,k) in is_post_list" :key='k'>
										<view class="order-porduct-content" >
											<view class="order-porduct-line">
												<view class="porduct-line"></view>
											</view>
											<view class="order-porduct-images-name">
												<view class="checkbox-item">
													<checkbox color="#ff5f93" :value="i.id" :checked="i.checked" @tap="check_item(2,k,i.id)" />
												</view>
												<view class="porduct-images">
													<image :src="requestUrl+i.img" @tap="goods_detail(i.sku_id,i.encrypted_id)"></image>
												</view>
												<view class="porduct-right">
													<view class="porduct-name">{{i.spu_name}}</view>
													<view class="sku_spec_content" @tap='this_show_sku_spec(i,k)'>
														<view class="item_content">
															<text class="content_items" v-for="(z,j) in i.sku_spec" :key='j'>
																<text class="versions"> {{ z }} : {{ j }} ; </text>
															</text>
														</view>
														<image src="../../static/images/arrow-down.png" mode=""></image>
													</view>
													<view class="show_item_content" @tap='this_show_sku_spec(i,k)' v-if="i.show_sku_spec">
														<view class="show_all_items">
															<view class="content-items" v-for="(z,j) in i.sku_spec" :key='j'>
																<text class="versions"> {{ z }} : {{ j }} ; </text>
															</view>
														</view>
														<image src="../../static/images/arrow-down.png" mode=""></image>
													</view>
													<view class="porduct-price-number">
														<view class="porduct-price"><text>￥</text>{{i.sku_price}}</view>
														<view class="porduct-number"> x {{i.sku_nums}} </view>
													</view>
												</view>
											</view>
											<view class="pay-for-the-order">
												<view class="pay-order-content">
													<view class="total-price-on-line-pay">
														<view class="total-price"> 总价 <text>￥ {{i.payable_amount}} </text> </view>
														<view class="on-line-pay">
															在线支付 <text>￥ {{i.online_pay}} </text> 
														</view>
													</view>
													<view class="discounts-hospital-pay">
														<view class="discounts">
															优惠 <text>￥ {{ i.discount || 0}} </text>
															<image src="../../static/images/ask1.png" 
															 @tap="this_discount(i.hd_sale_info,i.card_sale_info,i.discount)"></image>
														</view>
														<view class="hospital-pay">到院再付 <text>￥ {{i.offline_pay}} </text> </view>
													</view>
													<view class="cope-with">应付 <text>￥ {{i.rel_price}} </text> </view>
												</view>
											</view>
										</view>
									</view>									
								</checkbox-group>
							</view>						
						</view>
					</view>
					<!-- 不可线上退款商品 -->
					<view class="offline_refund_goods">
						<view class="order-items" v-if="offline_refund_goods.length>0">
							<view class="service-conditions">
								<view class="line-service-name">
									<view class="line"></view>
									<view class="service-name"> 不可线上退款商品 <text class="offline_hint">(需到院于收费室处退款)</text> </view>
								</view>
								<view class="appointment" v-show="order_info.status==0"> 失效的商品将自动退款，请及时到院使用 </view>
							</view>
							<view class="order-porduct-content" v-for="(i,k) in offline_refund_goods" :key='k'>
								<view class="order-porduct-line">
									<view class="porduct-line"></view>
								</view>
								<view class="order-porduct-images-name">
									<view class="porduct-images">
										<image :src="requestUrl+i.img" @tap="goods_detail(i.sku_id,i.encrypted_id)"></image>
									</view>
									<view class="porduct-right">
										<view class="porduct-name">{{i.spu_name}}</view>
										<view class="sku_spec_content" @tap='this_show_sku_spec(i,k)'>
											<view class="item_content">
												<text class="content_items" v-for="(z,j) in i.sku_spec" :key='j'>
													<text class="versions"> {{ z }} : {{ j }} ; </text>
												</text>
											</view>
											<image src="../../static/images/arrow-down.png" mode=""></image>
										</view>
										<view class="show_item_content" @tap='this_show_sku_spec(i,k)' v-if="i.show_sku_spec">
											<view class="show_all_items">
												<view class="content-items" v-for="(z,j) in i.sku_spec" :key='j'>
													<text class="versions"> {{ z }} : {{ j }} ; </text>
												</view>
											</view>
											<image src="../../static/images/arrow-down.png" mode=""></image>
										</view>
										<view class="porduct-price-number">
											<view class="porduct-price" ><text>￥</text>{{i.sku_price}}</view>
											<view class="porduct-number" >x{{i.sku_nums}}</view>
										</view>
									</view>
								</view>
								<view class="pay-for-the-order ">
									<view class="pay-order-content">
										<view class=" total-price-on-line-pay">
											<view class="total-price">总价 <text>￥ {{i.payable_amount}} </text> </view>
											<view class="on-line-pay">
												在线支付 <text>￥ {{i.online_pay}} </text> 
											</view>
										</view>
										<view class="discounts-hospital-pay">
											<view class="discounts">
												优惠 <text>￥ {{ i.discount || 0}} </text>
												<image src="../../static/images/ask1.png"
												 @tap="this_discount(i.hd_sale_info,i.card_sale_info,i.discount)"></image>
											</view>
											<view class="hospital-pay">到院再付 <text>￥ {{i.offline_pay}} </text> </view>
										</view>
										<view class="cope-with">应付 <text>￥ {{i.rel_price}} </text> </view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 合计退款与提示下一步 -->
		<view class="bottom-refund-hint">
			<view class="refund-hint-content">在线支付金额将在1-3个工作日原路退回，喵豆/余额将直接退回账户中，积分一旦抵扣后，将无法退回。</view>
			<view class="all-refund-apply-for">
				<view class="all-refund-sum">
					<view class="all-refund-title">合计退款：</view>
					<view class="sum"> <text>￥</text> {{ calculate_price }} </view>
				</view>
				<view class="apply-for-refund">
					<button class="apply-for" type="default" @tap='submit_apply_for()'>下一步</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue"
	export default {
		components: {
			topBar
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
				title: '申请退款',
				requestUrl: '',
				hintList: [
					'1、若发生整单退款，或是部分退款，我院有权收回相关赠品，并根据退款/退单后的情况重新计算优惠信息和赠品信息。', 
					'2、若邮寄商品一律不支持无理由退货；',
					'3、邮寄中的商品，申请退款需要等待人工审核，我院需确认回收到货品后方可退款；',
					'4、关于退款金额，将原路返还。'
				],
				order_info: {
					giving_info:[],
					discount_description:[]
				},
				offline_refund_goods:[],//不支持线上退款商品
				is_post_list: [], //邮寄商品
				scan_one_list: [], //收费室使用商品
				scan_two_list: [], //会员中心使用商品
				scan_one_list_check:false,
				scan_two_list_check:false,
				is_post_list_check:false,
				order_list:[],
				calculate_price:0,
			}
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
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
				that.menuTop = 40
				that.menuBottom = 70
				that.menuHeight = 30
				that.menuLeft = 278
			}
		},
		onLoad: function(option) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			console.log(option.id)
			that.get_order_derail(option.id)
			// if (option.id) {
				
			// } else {
			// 	that.get_order_derail(23226) //23170  23149
			// }
		},
		methods: {
			// 获取订单详情
			get_order_derail: function(id) {
				let that = this
				let dataInfo = {
					interfaceId: 'get_order_info',
					id: id
				}
				that.request.uniRequest("order", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						// 订单的信息
						// 订单商品信息
						for (let i = 0; i < data.order_goods.length; i++) {
							// 显示的规格
							data.order_goods[i].show_sku_spec = false
							//当前订单商品是否可以退款：0、不允许，1、允许
							if(data.order_goods[i].refund_able==1){
								data.order_goods[i].checked = false
								//用户选择的配送方式，0、到院，1、快递
								if (data.order_info.distribution == 1) {
									that.is_post_list.push(data.order_goods[i])
								} else if (data.order_goods[i].scan_department == 0) { //核销部门
									that.scan_one_list.push(data.order_goods[i])
								} else if (data.order_goods[i].scan_department == 1) {
									that.scan_two_list.push(data.order_goods[i])
								}
							}
							else{
								that.offline_refund_goods.push(data.order_goods[i])
							}
						}
						// console.log(that.is_post_list, that.scan_one_list, that.scan_two_list)
						that.order_info = data.order_info
					}
				})
			},
			// 显示规格
			this_show_sku_spec: function(item, index) {
				let that = this
				if (that.is_post_list.length > 0) {
					for (let key in that.is_post_list) {
						if (that.is_post_list[key].id == item.id) {
							that.is_post_list[key].show_sku_spec = !that.is_post_list[key].show_sku_spec
						}
					}
				} else if (that.scan_one_list.length > 0) {
					for (let key in that.scan_one_list) {
						if (that.scan_one_list[key].id == item.id) {
							that.scan_one_list[key].show_sku_spec = !that.scan_one_list[key].show_sku_spec
						}
					}
				} else if(that.scan_two_list.length>0) {
					for (let key in that.scan_two_list) {
						if (that.scan_two_list[key].id == item.id) {
							that.scan_two_list[key].show_sku_spec = !that.scan_two_list[key].show_sku_spec
						}
					}
				} else if(that.offline_refund_goods.length>0) {
					for (let key in that.offline_refund_goods) {
						if (that.offline_refund_goods[key].id == item.id) {
							that.offline_refund_goods[key].show_sku_spec = !that.offline_refund_goods[key].show_sku_spec
						}
					}
				}
			},
			// 退款原因
			submit_apply_for: function() {
				let that = this
				
				if(that.order_list.length>0&&that.calculate_price>0){
					let user_info = {}
					user_info.accept_name = that.order_info.accept_name
					user_info.telphone = that.order_info.telphone
					// console.log(user_info)
					user_info = JSON.stringify(user_info)
					let order_goods_id = JSON.stringify(that.order_list)
					uni.navigateTo({
						url: `/pages/my/my_order_refund_reason?calculate_price=${that.calculate_price}&user_info=${user_info}&order_id=${that.order_info.id}&order_goods_id=${order_goods_id}`,
					})
				}
				else{
					uni.showToast({
						title:'您没有选择可退款的商品',
						icon:'none'
					})
				}
			},
			// 选中退款商品@tap="change_goods_item(i.id)"
			change_item:function(event){
				let that = this
				let list = event.detail.value
				let info = event.currentTarget.dataset.index
				if(info==0&&list.length==that.scan_one_list.length){
					that.scan_one_list_check = true
				}else if(info==0&&list.length!=that.scan_one_list.length){
					that.scan_one_list_check = false
				}else if(info==1&&list.length==that.scan_two_list.length){
					that.scan_two_list_check = true
				}else if(info==1&&list.length!=that.scan_two_list.length){
					that.scan_two_list_check = false
				}else if(info==2&&list.length==that.is_post_list.length){
					that.is_post_list_check = true
				}else if(info==2&&list.length!=that.is_post_list.length){
					that.is_post_list_check = false
				}
			},
			// 改变单个的状态
			check_item:function(info,index,id){
				let that = this
				// 0表示收费室核销商品
				if(info==0){
					that.scan_one_list[index].checked = !that.scan_one_list[index].checked
					if(!that.scan_one_list[index].checked){
						for(let key in that.order_list){
							if(that.order_list[key]==id){
								that.order_list.splice(key,1)
							}
						}
					}else{
						that.order_list.push(id)
						that.order_list = [...new Set(that.order_list)]
					}
					
				}else if(info==1){
					that.scan_two_list[index].checked = !that.scan_two_list[index].checked
					if(!that.scan_two_list[index].checked){
						for(let key in that.order_list){
							if(that.order_list[key]==id){
								that.order_list.splice(key,1)
							}
						}
					}else{
						that.order_list.push(id)
						that.order_list = [...new Set(that.order_list)]
					}
				}else if(info==2){
					that.is_post_list[index].checked = !that.is_post_list[index].checked
					if(!that.is_post_list[index].checked){
						for(let key in that.order_list){
							if(that.order_list[key]==id){
								that.order_list.splice(key,1)
							}
						}
					}else{
						that.order_list.push(id)
						that.order_list = [...new Set(that.order_list)]
					}
				}
				// console.log(that.order_list,0)
				if(that.order_list.length>0){
					that.set_calculate(that.order_list)
				}
			},
			// 选中所有商品
			change_all:function(index){
				let that = this
				let order_list = []
				if(index==0){
					let list = []
					if(that.scan_one_list_check){
						that.scan_one_list.map(item => this.$set(item, 'checked', false))
						that.scan_one_list_check = false
						list = []
						if(that.order_list.length>0){
							for(let key in that.order_list){
								for(let i=0;i<that.scan_one_list.length;i++){
									if(that.order_list[key]==that.scan_one_list[i].id){
										that.order_list.splice(key,1)
									}
								}
							}
						}
					}else{
						that.scan_one_list.map(item => this.$set(item, 'checked', true))
						that.scan_one_list_check = true
						for(let key in that.scan_one_list){
							list.push(that.scan_one_list[key].id)
						}
						order_list = list
					}
				}else if(index==1){
					let list = []
					if(that.scan_two_list_check){
						that.scan_two_list.map(item => this.$set(item, 'checked', false))
						that.scan_two_list_check = false
						list = []
						if(that.order_list.length>0){
							for(let key in that.order_list){
								for(let i=0;i<that.scan_two_list.length;i++){
									if(that.order_list[key]==that.scan_two_list[i].id){
										that.order_list.splice(key,1)
									}
								}
							}
						}
					}else{
						that.scan_two_list.map(item => this.$set(item, 'checked', true))
						that.scan_two_list_check = true
						for(let key in that.scan_two_list){
							list.push(that.scan_two_list[key].id)
						}
						order_list = list
					}
				}else if(index==2){
					let list = []
					if(that.is_post_list_check){
						that.is_post_list.map(item => this.$set(item, 'checked', false))
						that.is_post_list_check = false
						list = []
						if(that.order_list.length>0){
							for(let key in that.order_list){
								for(let i=0;i<that.is_post_list.length;i++){
									if(that.order_list[key]==that.is_post_list[i].id){
										that.order_list.splice(key,1)
									}
								}
							}
						}
					}else{
						that.is_post_list.map(item => this.$set(item, 'checked', true))
						that.is_post_list_check = true
						for(let key in that.is_post_list){
							list.push(that.is_post_list[key].id)
						}
						order_list = list
					}
				}
				if(order_list.length>0){
					for(let key in order_list){
						that.order_list.push(order_list[key])
					}
				}
				that.order_list = [...new Set(that.order_list)]
				
				if(that.order_list.length>0){
					that.set_calculate(that.order_list)
				}
			},
			// 计算退款金额
			set_calculate:function(list){
				let that = this
				let dataInfo = {
					interfaceId:'calculate_r',
					id_list:list
				}
				that.request.uniRequest("order", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.calculate_price = data
					}
				})
			},
			
			// 商品详情
			goods_detail:function(id,encrypted_id){
				uni.navigateTo({
					url: `/pages/goods/goods_detail?sku_id=${id}&encrypted_id=${encrypted_id}`,
				})
			},
		}
	}
</script>

<style scoped>
	.my_order_refund-content {
		background-color: #F6F6F6;
	}

	.refund-content {
		background-color: #F6F6F6;
		padding-bottom: 160rpx;
	}

	.refund-hint {
		background-color: #FFFFFF;
		padding: 30rpx 53rpx 30rpx 36rpx;
		font-size: 20rpx;
		line-height: 32rpx;
		color: #fa3475;
		margin-bottom: 20rpx;
	}

	.refund-porduct {
		padding: 28rpx 0 32rpx;
	}

	.refund-porduct-hint {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.refund-porduct-hint-title {
		font-size: 40rpx;
		color: #fa3475;
	}

	.porduct-hint-content {
		font-size: 24rpx;
		color: #999999;
	}

	.bottom-refund-hint {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 9;
	}

	.refund-hint-content {
		color: #FFFFFF;
		font-size: 20rpx;
		line-height: 34rpx;
		background-color: #000000;
		padding: 16rpx 61rpx;
		text-align: center;
	}

	.all-refund-apply-for {
		padding: 12rpx 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
	}

	.all-refund-sum {
		display: flex;
		align-items: center;
	}

	.all-refund-sum .all-refund-title {
		color: #111111;
		font-size: 28rpx;
	}

	.all-refund-sum .sum {
		color: #fa3475;
		font-size: 40rpx;
		margin-left: 10rpx;
	}

	.all-refund-sum .sum text {
		font-size: 24rpx;
	}

	.apply-for {
		width: 220rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
		box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(250, 53, 118, 0.5);
		border-radius: 40rpx;
		color: #FFFFFF;
		border: 0;
	}
	.apply-for::after{
		border: none;
	}
	/* 新加样式 */
	.order-content {
		padding: 40rpx 20rpx 0;
	}
	
	.order-items {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-bottom: 40rpx;
		padding: 40rpx 0;
	}
	
	.service-conditions {
		display: flex;
		justify-content: space-between;
		padding-bottom: 22rpx;
		padding-right: 30rpx;
	}
	.change_goods{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.checkbox-item{
		padding-left: 20rpx;
		padding-right: 10rpx;
	}
	
	.line-service-name {
		display: flex;
		align-items: center;
	}
	
	.line {
		width: 6rpx;
		height: 24rpx;
		margin-right: 28rpx;
		background-color: #fa3475;
	}
	
	.service-name {
		font-size: 24rpx;
		color: #111111;
	}
	
	.appointment {
		font-size: 24rpx;
		color: #999999;
	}
	
	.order-porduct-content {
		/* padding: 0 30rpx 0 0; */
		flex: 1;
	}
	
	.order-porduct-line {
		padding: 0 0 32rpx;
	}
	.allcheckbox{
		padding-left: 20rpx;
	}
	
	.porduct-line {
		background-color: #F0F0F0;
		height: 2rpx;
	}
	
	.failure-time {
		position: relative;
		margin-bottom: 25rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.time-hint {
		font-size: 24rpx;
		color: #999999;
	}
	
	.hint-image {
		width: 165rpx;
		height: 130rpx;
		position: absolute;
		top: -100rpx;
		right: 0;
		opacity: 0.5;
	}
	
	.hint-image image {
		width: 165rpx;
		height: 130rpx;
	}
	
	.hint-text {
		font-size: 24rpx;
		color: #fa3475;
	}
	
	.order-porduct-images-name {
		border-bottom: 2rpx solid #F0F0F0;
		padding-bottom: 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}
	
	.porduct-images {
		width: 200rpx;
		height: 200rpx;
	}
	
	.porduct-images image {
		width: 200rpx;
		height: 200rpx;
	}
	
	.porduct-right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		padding: 10rpx 0 10rpx 20rpx;
		flex: 1;
		height: 200rpx;
	}
	
	.porduct-name {
		font-size: 24rpx;
		line-height: 32rpx;
		color: #111111;
		overflow: hidden;
		font-weight: lighter;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.sku_spec_content {
		height: 40rpx;
		/* line-height: 40rpx; */
		background-color: #f0f0f0;
		border-radius: 20rpx;
		font-size: 20rpx;
		color: #333333;
		font-weight: lighter;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 76%;
		padding: 0 16rpx;
		position: absolute;
		left: 20rpx;
		top: 76rpx;
	}
	
	.item_content {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		flex: 1;
	}
	
	.sku_spec_content image,
	.show_item_content image {
		width: 32rpx;
		height: 32rpx;
	}
	
	.show_item_content {
		position: absolute;
		left: 20rpx;
		top: 76rpx;
		width: 76%;
		padding: 6rpx 16rpx 0;
		background-color: #f0f0f0;
		color: #333333;
		font-size: 20rpx;
		border-radius: 20rpx;
		display: flex;
		justify-content: space-between;
		font-weight: lighter;
	}
	
	.show_item_content image {
		transform: rotate(180deg);
	}
	
	.porduct-price-number {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #808080;
		padding-right: 30rpx;
	}
	
	
	.porduct-price {
		font-size: 40rpx;
	}
	
	.porduct-price text {
		font-size: 24rpx;
	}
	
	.porduct-number {
		font-size: 24rpx;
	}
	
	.pay-order-content {
		border-top: 2rpx solid #F0F0F0;
		border-bottom: 2rpx solid #F0F0F0;
		color: #111111;
		padding-bottom: 20rpx;
	}
	
	.pay-order-content text {
		margin-left: 20rpx;
	}
	
	.total-price-on-line-pay,
	.discounts-hospital-pay {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20rpx;
		font-size: 24rpx;
	}
	
	.discounts {
		display: flex;
		align-items: center;
	}
	
	.on-line-pay,
	.hospital-pay {
		min-width: 42%;
	}
	
	.discounts image {
		width: 26rpx;
		height: 26rpx;
		margin-left: 20rpx;
	}
	.cope-with {
		align-items: center;
		margin-top: 20rpx;
		font-size: 24rpx;
	}
	.offline_hint{
		font-size: 24rpx;
		font-weight: lighter;
	}
	.pay-for-the-order{
		padding: 0 20rpx;
	}
</style>
