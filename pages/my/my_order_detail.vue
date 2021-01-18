<template>
	<view class="my_order_detail">
		<view class="top-nav-message">
			<view class="my-top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px'}]">
				<view class="back-title" :style="[{'height':menuHeight+'px'}]">
					<view class="back" @click="goBack">
						<image src="../../static/images/return.png" mode=""></image>
					</view>
					<view class="title" :style="[{'margin-right':menuWidth+'px'}]"> {{title}} </view>
				</view>
			</view>
			<view class="top-message" v-if="order_info.status!=1" :style="[{'padding-top':menuHeight+90+'px'}]">
				<view class="user-message">
					<!-- 等待付款 v-if="order_info.status==0" -->
					<view class="user-useing-time-price" v-if="order_info.status==0">
						<view class="wait-pay">等待付款</view>
						<!-- 倒计时 -->
						<view class="residue-time">剩余支付时间:
							<text>{{ day }}</text>天<text>{{ house }}</text>时<text>{{ second }}</text>分<text>{{ minute }}</text>秒
						</view>
						<view class="user-pay-price">
							在线支付￥<text>{{ order_info.online_pay }}</text>,到院再付￥<text>{{ order_info.offline_pay }}</text>
						</view>
						<button class="now_pay" type="default" size="mini" @tap="please_pay(order_info.id)">立即支付</button>
					</view>
					<!-- 已付款 v-else-if="order_info.status==2" -->
					<view class="user-useing-time-price" v-else-if="order_info.status==2">
						<view class="wait-pay">已付款</view>
						<view class="residue-time">有商品于 {{ expiration_time }} 作废</view>
						<view class="user-pay-prices"> 请尽快到院使用 </view>
					</view>
					<!-- 已退款 order_info.status==7 -->
					<view class="refunded" v-else-if="order_info.status==7">
						<image src="../../static/images/delete.png" mode=""></image>
						<view class="refunded_hint">已退款</view>
					</view>
				</view>
			</view>
			<!-- 已作废 -->
			<view class="cancel-order_top" :style="[{'padding-top':menuBottom+40+'px'}]" v-else-if="order_info.status==1">
				<image src="/static/images/delete.png" mode=""></image>
				<view class="cancel_hint">已作废</view>
			</view>
		</view>
		<!-- 收货地址和联系方式 -->
		<view class="user-all-message">
			<view class="user-message-content" v-if="order_info.distribution==1">
				<view class="user-message-left">
					<view class="user-name-phone-default-address">
						<view class="user-name"> {{ order_info.accept_name }} </view>
						<view class="user-phone"> {{ order_info.telphone }} </view>
						<view class="default-address">
							<view class="default">默认</view>
							<view class="default-address-content"> {{ order_info.tag }} </view>
						</view>
					</view>
					<view class="shipping-address">
						<view class="address-name">收货地址</view>
						<view class="address-content"> {{ order_info.province_cn + order_info.city_cn + order_info.area_cn + order_info.address }}
						</view>
					</view>
				</view>
			</view>
			<view class="user_info" v-else-if="order_info.distribution==0">
				<view class="accept_name"> {{ order_info.accept_name }} </view>
				<view class="telphone"> {{ order_info.telphone }} </view>
			</view>
		</view>

		<view class="order-particulars">
			<scroll-view class="order-particulars">
				<template>
					<view class="all-order-message">
						<!-- 已付款的核销码 order_info.status==2 -->
						<view class="account-paid-code" v-if="order_info.status==2">
							<view class="account-paid-code-content">
								<view class="account-paid-code-number">订单核销码 - {{ order_info.hx_code }} </view>
								<view class="account-paid-code-hint">医美项目请在收费室出示</view>
								<view class="account-paid-code-hint">护肤品项目在会员中心出示</view>
								<view class="account-paid-code-image">
									<image :src="requestUrl+order_info.qrcodes" mode=""></image>
								</view>
							</view>
						</view>
						<!-- 订单商品信息 -->
						<view class="order-content">
							<!-- 邮寄商品 -->
							<view class="order-items" v-if="is_post_list.length>0">
								<view class="service-conditions">
									<view class="line-service-name">
										<view class="line"></view>
										<view class="service-name"> 邮寄商品 </view>
									</view>
									<view class="appointment" v-show="order_info.status==0"> 失效的商品将自动退款，请及时到院使用 </view>
								</view>
								<view class="order-porduct-content" v-for="(i,k) in is_post_list" :key='k'>
									<view class="order-porduct-line">
										<view class="porduct-line"></view>
									</view>
									<view class="failure-time">
										<view class="time-hint">商品失效时间: {{ over_time }} </view>
										<view class="hint-image" v-if="order_info.status==7">
											<image src="/static/images/refund.png" mode=""></image>
										</view>
										<view class="hint-image" v-if="order_info.status==5">
											<image src="https://xcx.hmzixin.com/upload/images/3.0/card_used.png" mode=""></image>
										</view>
										<view class="hint-text" v-if="order_info.status==2">待使用</view>
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
											<view class="porduct-price-number" 
											 :class="i.status==0||i.status==2||i.status==3||i.status==5?'show_color':''">
												<view class="porduct-price" ><text>￥</text>{{i.sku_price}}</view>
												<view class="porduct-number" >x{{i.sku_nums}}</view>
											</view>
										</view>
									</view>
									<view class="pay-for-the-order ">
										<view class="pay-order-content">
											<view class=" total-price-on-line-pay">
												<view class="total-price">总价 <text>￥ {{i.payable_amount}} </text> </view>
												<view class="on-line-pay"
												 :class="i.status==0||i.status==2||i.status==3||i.status==5?'show_color':''">
													在线支付 <text>￥ {{i.online_pay}} </text> 
												</view>
											</view>
											<view class="discounts-hospital-pay">
												<view class="discounts"
												 :class="i.status==0||i.status==2||i.status==3||i.status==5?'show_color':''">
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
							<!-- 收费室使用商品 -->
							<view class="order-items" v-else-if="scan_one_list.length>0">
								<view class="service-conditions">
									<view class="line-service-name">
										<view class="line"></view>
										<view class="service-name"> 收费室使用商品 </view>
									</view>
									<view class="appointment" v-show="order_info.status==0"> 失效的商品将自动退款，请及时到院使用 </view>
								</view>
								<view class="order-porduct-content" v-for="(i,k) in scan_one_list" :key='k'>
									<view class="order-porduct-line">
										<view class="porduct-line"></view>
									</view>
									<view class="failure-time">
										<view class="time-hint">商品失效时间: {{ over_time }} </view>
										<view class="hint-image" v-if="order_info.status==7">
											<image src="../../static/images/refund.png" mode=""></image>
										</view>
										<view class="hint-image" v-if="order_info.status==5">
											<image src="https://xcx.hmzixin.com/upload/images/3.0/card_used.png" mode=""></image>
										</view>
										<view class="hint-text" v-if="order_info.status==2">待使用</view>
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
											<view class="porduct-price-number" 
											 :class="i.status==0||i.status==2||i.status==3||i.status==5?'show_color':''">
												<view class="porduct-price"><text>￥</text>{{i.sku_price}}</view>
												<view class="porduct-number"> x {{i.sku_nums}} </view>
											</view>
										</view>
									</view>
									<view class="pay-for-the-order">
										<view class="pay-order-content">
											<view class="total-price-on-line-pay">
												<view class="total-price"> 总价 <text>￥ {{i.payable_amount}} </text> </view>
												<view class="on-line-pay"
												 :class="i.status==0||i.status==2||i.status==3||i.status==5?'show_color':''">
													在线支付 <text>￥ {{i.online_pay}} </text> 
												</view>
											</view>
											<view class="discounts-hospital-pay">
												<view class="discounts"
												 :class="i.status==0||i.status==2||i.status==3||i.status==5?'show_color':''">
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
							<!-- 会中心员使用商品 -->
							<view class="order-items" v-else-if="scan_two_list.length>0">
								<view class="service-conditions">
									<view class="line-service-name">
										<view class="line"></view>
										<view class="service-name"> 会中心员使用商品 </view>
									</view>
									<view class="appointment" v-show="order_info.status==0"> 失效的商品将自动退款，请及时到院使用 </view>
								</view>
								<view class="order-porduct-content" v-for="(i,k) in scan_two_list" :key='k'>
									<view class="order-porduct-line">
										<view class="porduct-line"></view>
									</view>
									<view class="failure-time">
										<view class="time-hint">商品失效时间: {{ over_time }} </view>
										<view class="hint-image" v-if="order_info.status==7">
											<image src="../../static/images/refund.png" mode=""></image>
										</view>
										<view class="hint-image" v-if="order_info.status==5">
											<image src="https://xcx.hmzixin.com/upload/images/3.0/card_used.png" mode=""></image>
										</view>
										<view class="hint-text" v-if="order_info.status==2">待使用</view>
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
											<view class="porduct-price-number"
											 :class="i.status==0||i.status==2||i.status==3||i.status==5?'show_color':''">
												<view class="porduct-price"><text>￥</text>{{i.sku_price}}</view>
												<view class="porduct-number">x{{i.sku_nums}}</view>
											</view>
										</view>
									</view>
									<view class="pay-for-the-order ">
										<view class="pay-order-content">
											<view class=" total-price-on-line-pay">
												<view class="total-price">总价 <text>￥ {{i.payable_amount}} </text> </view>
												<view class="on-line-pay"
												 :class="i.status==0||i.status==2||i.status==3||i.status==5?'show_color':''">
													在线支付 <text>￥ {{i.online_pay}} </text> 
												</view>
											</view>
											<view class="discounts-hospital-pay">
												<view class="discounts"
												 :class="i.status==0||i.status==2||i.status==3||i.status==5?'show_color':''">
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
						<!-- 赠品 -->
						<view class="complimentary">
							<view class="complimentary-top">
								<view class="top-name">赠送信息</view>
								<view class="my-complimentary" @tap="my_card()">我的赠品 > </view>
							</view>
							<view class="complimentary-hint">
								温馨提示：所有赠品将以卡券的形式发放到账户中。若发生整单退款，或是部分退款，
								我院有权收回相关赠品，并根据退款/退单后的情况重新计算赠品信息
							</view>
							<view class="all-complimentary" v-if="order_info.giving_info.length>0">
								<view class="complimentary-item" v-for="(item,k) in order_info.giving_info" :key='k'>
									<view class="complimentary-name"> {{ item.category }} </view>
									<view class="complimentary-content"> {{ item.rule_name }} </view>
								</view>
							</view>
						</view>
						<!-- 优惠信息 -->
						<view class="ticket-discount-full-reduction" v-if="order_info.discount_description.length>0">
							<view class="ticket-content" v-for="(item,index) in order_info.discount_description" :key='index'>
								<view class="ticket-name-message">
									<view class="ticket-name"> {{ item.category }} </view>
									<view class="ticket-message"> {{item.rule_name}} </view>
								</view>
								<view class="ticket-price">-￥ {{ item.sale_price }} </view>
							</view>
							<!-- 优惠合计 -->
							<view class="total-discounts">
								<view class="total-discounts-name">优惠合计</view>
								<view class="all-total-discounts">-￥ {{ order_info.total_discount }} </view>
							</view>
						</view>
						<!-- 商品价格信息 -->
						<view class="all-price-message">
							<view class="price-name-message">
								<view class="price-name"> 商品总价 </view>
								<view class="price-message"> ￥ {{ order_info.payable_amount || 0 }} </view>
							</view>
							<view class="price-name-message">
								<view class="price-name"> 优惠合计
									<image @tap="this_all_discount(order_info.discount_description)"
									 src="../../static/images/ask1.png"></image>
								</view>
								<view class="price-message"> ￥ {{ order_info.total_discount || 0 }} </view>
							</view>
							<view class="price-name-message">
								<view class="price-name"> 邮寄运费 </view>
								<view class="price-message"> ￥ {{ order_info.real_freight || 0 }} </view>
							</view>
							<view class="price-name-message">
								<view class="price-name"> 实际应付 </view>
								<view class="price-message"> ￥ {{ order_info.rel_price || 0 }} </view>
							</view>
							<view class="price-name-message ">
								<view class="price-name color"> 在线支付 </view>
								<view class="price-message color"> ￥ {{ order_info.online_pay || 0 }} </view>
							</view>
							<view class="price-name-message">
								<view class="price-name color"> 到院再付 </view>
								<view class="price-message color"> ￥ {{ order_info.offline_pay || 0 }} </view>
							</view>
						</view>
						<!-- 喵豆 -->
						<!-- <view class="return-mew-bean">
							<view class="mew-bean-images-message">
								<view class="mew-bean-images"><image src="../../static/images/cartBg.png" mode=""></image></view>
								<view class="mew-bean-message">
									<view class="return-number">返喵豆1000个</view>
									<view class="return-hint">购物返喵豆,喵豆可抵现</view>
								</view>
							</view>
							<view class="my-mew-nean">我的喵豆 > </view>
						</view> -->
						<!-- 单号 -->
						<view class="order-information">
							<view class="order-serial-number">
								<view class="title-name">订单编号:</view>
								<view class="serial-number"> {{ order_info.order_no }} </view>
								<view class="copy" @tap='copy_order_no(order_info.order_no)'>复制</view>
							</view>
							<view class="order-time">
								<view class="title-name">下单时间:</view>
								<view class="order-time-content"> {{ order_info.create_time }} </view>
							</view>
							<view class="pay-label">
								<view class="title-name">支付类型:</view>
								<view class="pay-label-content">预约金支付/全款付</view>
							</view>
							<view class="pay-way">
								<view class="title-name">支付方式:</view>
								<view class="pay-way-content" v-if="order_info.pay_driver=='wechat'">微信支付</view>
								<view class="pay-way-content" v-else>支付宝支付</view>
							</view>
						</view>
						<!-- 猜你喜欢 -->
						<view class="guess-what-you-like" v-if="productLists.length>0">
							<view class="related-title">
								<view class="line"></view> 猜你喜欢
							</view>
							<view class="subject-content">
								<goodsShow :borderRadius=24 :requestUrl='requestUrl' :width=350 :porductList='productLists'>
								</goodsShow>
							</view>
						</view>
						<view class="bottom-images">
							<view class="bottom-hint">本喵也是有底线的~</view>
						</view>
					</view>
				</template>
			</scroll-view>
		</view>
		<!-- 底部按钮 -->
		<view class="immobilization-button">
			<view class="button_all">
				<button class="" type="default" v-if="order_info.status==0" size="mini" @tap="cancel_order(order_info.id)">
					取消订单
				</button>
				<button class="" type="default" size="mini" @tap="contact()">联系客服</button>
				<!-- <button class="" type="default" v-if="order_info.status==4||order_info.status==6||order_info.status==7||order_info.status==8"
				 size="mini" @tap="cancel_detail(order_info.id)">
					退款明细
				</button> -->
				<!-- v-if="order_info.status==2" -->
				<button class="" type="default" v-if="order_info.status==2"  size="mini" @tap='go_refund(order_info.id)'>
					申请退款
				</button>
				<button class="color_btn" type="default" size="mini" v-if="order_info.status==7" @tap="go_to_page">
					去逛逛
				</button>
				<!-- <button class="" type="default" v-if="order_info.status==2" size="mini">
					立即预约
				</button> -->
				<button class="color_btn" type="default" v-if="order_info.status==0" size="mini" @tap="please_pay(order_info.id)">
					立即支付
				</button>
				<button class="color_btn" type="default" size="mini" v-if="order_info.status==5" @tap="write_content('diary')" >写日记</button>
				<button class="" type="default" size="mini" v-if="order_info.status==5" @tap="write_content('comment')">写评价</button>
			</view>
		</view>
		<!-- 回到顶部 -->
		<view class="top-button" @click="ToTop" v-if="showTop"> 
			<image src="/static/images/order_top.png" mode="widthFix"></image>
		</view>
		<!-- 优惠信息 -->
		<view class="discount_content" @tap="hide_discount" v-if="this_show_discount" :style="[{'height':height-menuBottom-10+'px','top':menuBottom+10+'px'}]">
			<view class="discount-hint">
				<view class="discounts_list">
					<view class="list_item" v-for="(item,index) in discounts_list" :key="index">
						<view class="item_name"> <view class="category"> {{item.category}} </view> <view> {{ item.rule_name }} </view> </view>
						<view class="discounts_sale_price"> - ￥ {{ item.sale_price || 0 }} </view>
					</view>
					<view class="list_item" v-for="(item,index) in card_sale_list" :key="index">
						<view class="item_name"> <view class="category"> {{item.category}} </view> <view> {{ item.rule_name }} </view> </view>
						<view class="discounts_sale_price"> - ￥ {{ item.sale_price || 0 }} </view>
					</view>
				</view>
				<view class="all_discounts"> 
					<text class="all_discounts_name"> 合计优惠 </text> 
					<text class="discounts_sale_price"> - ￥ {{ all_discount || 0 }} </text>
				</view>
				<button class="i_know" type="default" >
					我知道了
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	import goodsShow from "../../components/goodsShow.vue";
	export default {
		components: {
			goodsShow
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
				color: '#FFFFFF',
				backImage: '/static/images/return.png',
				title: '订单详情',
				state: '已付款', //是否付款
				requestUrl: '',
				order_info: {
					giving_info:[],
					discount_description:[]
				},
				is_post_list: [], //邮寄商品
				scan_one_list: [], //收费室使用商品
				scan_two_list: [], //会员中心使用商品	
				showTop: false,
				offset: 0,
				over_time: '',
				productLists: [],
				expiration_time: 0, //过期时间
				this_show_discount:false,
				discounts_list:[],
				card_sale_list:[],
				all_discount:0,
				day: 0,
				house: 0,
				second: 0,
				minute: 0,
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
			if (option.info) {
				that.get_order_derail(option.info)
			} else {
				that.get_order_derail(23149) //23170
			}
			that.getLike()
		},
		onShow:function(){
			
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
						let time = data.order_info.create_time + data.order_info.cancel_time - data.order_info.time_now
						if (time > 0 && data.order_info.status==0) {
							that.set_dount_down(time)
						}
						// 订单商品信息
						for (let i = 0; i < data.order_goods.length; i++) {
							// 显示的规格
							data.order_goods[i].show_sku_spec = false
							if (data.order_info.distribution == 1) {
								that.is_post_list.push(data.order_goods[i])
							} else if (data.order_goods[i].scan_department == 0) {
								that.scan_one_list.push(data.order_goods[i])
							} else if (data.order_goods[i].scan_department == 1) {
								that.scan_two_list.push(data.order_goods[i])
							}
							// 最近的过期时间
							if (data.order_goods[i].overdue_time) {
								if (data.order_goods[i].overdue_time > that.expiration_time) {
									that.expiration_time = data.order_goods[i].overdue_time
								}
							}
						}
						// 时间
						that.over_time = that.setTimer(data.order_info.create_time + data.order_info.cancel_time)
						data.order_info.create_time = that.setTimer(data.order_info.create_time)
						// console.log(data)
						if (that.expiration_time > 0) {
							that.expiration_time = that.setTimer(that.expiration_time)
						}
						// 订单的信息
						that.order_info = data.order_info
					}
				})
			},
			// 立即支付
			please_pay: function(id) {
				let that = this
				let data_info = {
					interfaceId: 'wechatwap',
					order_id: id
				}
				that.request.uniRequest("pay", data_info).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						// console.log(data.mweb_url)
						let url = data.mweb_url
						uni.showLoading({
							title: '支付中...'
						});
						// app支付
						const webview = plus.webview.create("","custom-webview")
						webview.loadURL(url,{"Referer":that.requestUrl})
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
				} else {
					for (let key in that.scan_two_list) {
						if (that.scan_two_list[key].id == item.id) {
							that.scan_two_list[key].show_sku_spec = !that.scan_two_list[key].show_sku_spec
						}
					}
				}
			},
			// 转换时间格式
			setTimer: function(date) {
				let house = 0
				let second = 0
				let minute = 0
				// house = parseInt((date) / 1000 / 60 / 60 % 24)
				second = parseInt((date) / 60 % 60)
				minute = parseInt((date) % 60)
				date = new Date(date * 1000)
				let month = date.getMonth() + 1
				if (month < 10) {
					month = "0" + month
				}
				let day = date.getDate()
				if (day < 10) {
					day = "0" + day
				}
				house = date.getHours()
				if (house < 10) {
					house = "0" + house
				}
				if (second < 10) {
					second = "0" + second
				}
				if (minute < 10) {
					minute = "0" + minute
				}

				let time = date.getFullYear() + '-' + month + '-' + day + "  " + ' ' + house + ':' + second + ':' + minute
				// console.log(time)
				return time
			},
			// 开启倒计时
			set_dount_down:function(time) {
				let that = this
				let secondTime = 0; // 分
				let hourTime = 0; // 小时
				let day = 0; //天
				let timers = setInterval(function() {
					time -= 1
					let minuteTime = time; // 秒
					if (minuteTime > 60) {
						secondTime = parseInt(minuteTime / 60)
						minuteTime = parseInt(minuteTime % 60)
						if (secondTime > 60) {
							hourTime = parseInt(secondTime / 60)
							secondTime = parseInt(secondTime % 60)
							if (hourTime > 24) {
								day = parseInt(hourTime / 24)
								hourTime = parseInt(hourTime % 60)
							}
						}
					} else {
						secondTime = 0
						hourTime = 0
						day = 0
					}
					that.day = day
					that.house = hourTime
					that.second = secondTime
					that.minute = minuteTime
					if (time <= 0) {
						clearInterval(timers)
						that.order_info.status = 1
					}
					if(that.timers>0){
						clearInterval(timers)
					}
				}, 1000)
				
			},
			// 为你推荐
			getLike: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'userrecommendedgoodsspulist',
					type: '5',
					offset: that.offset*6
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						if (data.length > 0) {
							that.productLists = that.productLists.concat(data)
						} else {
							uni.showToast({
								title: '没有更多了',
								icon: 'none'
							})
						}
					} else {
						uni.showToast({
							title: '没有更多了',
							icon: 'none'
						})
					}
				})
			},
			// 返回上一级
			goBack: function() {
				uni.navigateBack({
					delta: 1
				});
			},
			// 商品详情
			goods_detail:function(id,encrypted_id){
				uni.navigateTo({
					url: `/pages/goods/goods_detail?sku_id=${id}&encrypted_id=${encrypted_id}`,
				})
			},
			// 我的赠品
			my_card: function() {
				uni.navigateTo({
					url: `/pages/my/my_card`,
				})
			},
			// 复制单号
			copy_order_no: function(info) {
				uni.setClipboardData({
					data: info,
					success: function() {
						uni.showToast({
							title: '已复制到剪切板'
						})
					}
				});
			},
			// 显示优惠信息
			this_discount:function(info,card_sale_info,discount){
				let that = this
				if(info.length>0){
					that.discounts_list = []
					that.discounts_list = info
					that.this_show_discount = !that.this_show_discount
					that.all_discount = discount
				}else if(card_sale_info&&card_sale_info.length>0){
					that.card_sale_list = []
					that.card_sale_list = card_sale_info
					that.this_show_discount = !that.this_show_discount
					that.all_discount = discount
				}else{
					uni.showToast({
						title:'暂无优惠信息',
						icon:'none'
					})
				}
			},
			// 优惠合计
			this_all_discount:function(info){
				let that = this
				if(info.length==0){
					uni.showToast({
						title:'暂无优惠信息',
						icon:'none'
					})
				}else{
					for(let key in info){
						that.discounts_list = []
						that.card_sale_list = []
						that.all_discount = 0
						if(info[key].tools_id=='discount'){
							that.discounts_list.push(info[key])
						}else if(info[key].tools_id=='sale_card_user'){
							that.card_sale_list.push(info[key])
						}
						that.all_discount += info[key].sale_price
					}
					that.this_show_discount = !that.this_show_discount
				}
			},
			hide_discount:function(){
				let that = this
				that.this_show_discount = !that.this_show_discount
			},
			// 去首页和分类
			go_to_page:function(){
				uni.reLaunch({
				    url: '/pages/goods/goods_classify'
				})
			},
			// 返回顶部
			ToTop: function() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 600
				})
			},
			// 申请退款
			go_refund: function(id) {
				uni.navigateTo({
					url: `/pages/my/my_order_refund?id=${id}`,
				})
			},
			// 退款结果
			// cancel_detail: function(id) {
			// 	uni.navigateTo({
			// 		url: `/pages/my/my_order_refund_progress?id=${id}`,
			// 	})
			// },
			// 取消订单
			cancel_order: function(id) {
				let that = this
				uni.showModal({
					title: "提示",
					content: '您正在取消订单,确认取消订单吗？',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							let dataInfo = {
								interfaceId:'cancel',
								id:id
							}
							that.request.uniRequest("order", dataInfo).then(res => {
								if (res.data.code == 1000 && res.data.status == 'ok') {
									uni.showToast({
										title:'取消订单成功!'
									})
									setTimeout(function(){
										uni.navigateTo({
											url: `/pages/my/my_order?type=0`,
										})
									},1000)
								}
							})
						}
					}
				})
			},
			// 联系客服
			contact: function() {
				uni.navigateTo({
					url: `/pages/consultation/consultation`,
				})
			},
			// 写日记和评价
			write_content: function(info) {
				// 写日记
				if (info == 'diary') {
					uni.navigateTo({
						url: `/pages/diary/diary_write`,
					})
				} else if (info == 'comment') {
					// 写评价
					uni.navigateTo({
						url: `/pages/my/write_comment`,
					})
				}
			},
		},
		// 显示回到顶部按钮
		onPageScroll: function(e) {
			if (e.scrollTop > 0) {
				this.showTop = true
			} else if (e.scrollTop == 0) {
				this.showTop = false
			}
		}
	}
</script>

<style scoped>
	.show_color{
		color: #fa3475;
	}
	.my_order_detail {
		background-color: #F6F6F6;
	}

	.top-nav-message {
		background-image: linear-gradient(-49deg, #f24788 0%, #ff69a1 100%);
		overflow: hidden;
		height: auto;
		width: 100%;
		border-bottom-left-radius: 50rpx;
		border-bottom-right-radius: 50rpx;
	}

	.my-top-bar {
		color: #FFFFFF;
		background-image: linear-gradient(-49deg, #f24788 0%, #ff69a1 100%);
		text-align: center;
		font-size: 40rpx;
		position: fixed;
		z-index: 100;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
	}

	.back-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 38rpx;
	}

	.back {
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		width: 60rpx;
		height: 100%;
	}

	.back image {
		width: 36rpx;
		height: 36rpx;
	}

	.back-title .title {
		flex: 1;
		margin-left: 80rpx;
	}

	.top-message {
		display: flex;
		justify-content: center;
		/* padding-top: 210rpx; */
		padding-bottom: 210rpx;
	}

	.user-message {
		display: flex;
		color: #FFFFFF;
		font-size: 24rpx;
		align-items: center;
		text-align: center;
	}

	.wait-pay {
		font-size: 40rpx;
	}

	.user-pay-prices {
		font-size: 32rpx;
	}

	.now_pay {
		margin-top: 20rpx;
		width: 240rpx;
		border-radius: 50rpx;
		color: #fa3475;
		border: none;
	}

	.now_pay::after {
		border: none;
	}

	.residue-time {
		opacity: 0.7;
		padding: 20rpx 0;
	}

	.user-all-message {
		padding: 0 20rpx;
		margin-top: -130rpx;
	}

	.user-message-content {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 34rpx 30rpx;
	}

	.user-name-phone-default-address {
		display: flex;
		align-items: center;
	}

	.user-name {
		font-size: 32rpx;
		color: #000000;
		margin-right: 20rpx;
	}

	.user-phone {
		font-size: 32rpx;
		color: #000000;
		margin-right: 32rpx;
	}

	.default-address {
		display: flex;
		text-align: center;
	}

	.default {
		width: 66rpx;
		height: 32rpx;
		line-height: 32rpx;
		font-size: 20rpx;
		color: #FFFFFF;
		background-image: linear-gradient(90deg, #fa3475 0%, #ff6699 100%);
		border-radius: 16rpx;
		margin-right: 20rpx;
	}

	.default-address-content {
		width: 66rpx;
		height: 32rpx;
		line-height: 32rpx;
		font-size: 20rpx;
		color: #FFFFFF;
		background-image: linear-gradient(90deg, #8834fa 0%, #bc66ff 100%);
		border-radius: 16rpx;
	}

	.shipping-address {
		font-size: 24rpx;
		color: #343434;
		line-height: 40rpx;
		margin-top: 30rpx;
		display: flex;
	}

	.address-content {
		margin-left: 22rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		width: 76%;
	}

	.all-order-message {
		padding-bottom: 170rpx;
	}

	.account-paid-code {
		padding: 40rpx 20rpx 0;
	}

	.account-paid-code-content {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 40rpx 0 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.account-paid-code-number {
		font-size: 32rpx;
		color: #000000;
		margin-bottom: 24rpx;
	}

	.account-paid-code-hint {
		font-size: 24rpx;
		color: #999999;
		line-height: 32rpx;
	}

	.account-paid-code-image image {
		width: 320rpx;
		height: 320rpx;
		margin-top: 25rpx;
		background-color: #F0F0F0;
	}

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
		padding: 0 30rpx;
	}

	.order-porduct-line {
		padding: 0 0 32rpx;
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

	.complimentary {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 40rpx;
	}

	.complimentary-top {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	.top-name {
		font-size: 28rpx;
		color: #000000;
		font-weight: bold;
	}

	.my-complimentary {
		color: #fa3475;
		font-size: 24rpx;
	}

	.complimentary-hint {
		font-size: 24rpx;
		color: #999999;
		line-height: 32rpx;
		padding: 15rpx 0 32rpx;
		border-bottom: 2rpx solid #f0f0f0;
	}

	.all-complimentary {
		padding-top: 40rpx;
	}

	.complimentary-item {
		display: flex;
		align-items: center;
		line-height: 30rpx;
		margin-bottom: 20rpx;
	}

	.complimentary-item:last-child {
		margin-bottom: 0;
	}

	.complimentary-name {
		width: 80rpx;
		height: 30rpx;
		background-color: #ffe8f0;
		border-radius: 15rpx;
		text-align: center;
		font-size: 20rpx;
		color: #fa3475;
		margin-right: 18rpx;
	}

	.complimentary-content {
		font-size: 24rpx;
		color: #000000;

	}

	.ticket-discount-full-reduction {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 40rpx;
		margin-top: 20rpx;
	}

	.ticket-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 35rpx;
	}

	.ticket-name-message {
		display: flex;
		line-height: 30rpx;
	}

	.ticket-name {
		width: 80rpx;
		height: 30rpx;
		background-color: #ffe8f0;
		border-radius: 15rpx;
		text-align: center;
		font-size: 20rpx;
		color: #fa3475;
		margin-right: 16rpx;
	}

	.ticket-message {
		color: #000000;
		font-size: 24rpx;
	}

	.ticket-price {
		color: #999999;
		font-size: 32rpx;
	}

	.total-discounts {
		border-top: 2rpx solid #f0f0f0;
		padding-top: 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.total-discounts-name {
		font-size: 24rpx;
		color: #000000;
	}

	.all-total-discounts {
		color: #fa3475;
		font-size: 32rpx;
	}

	.all-price-message {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-top: 24rpx;
		padding: 40rpx;
	}

	.price-name-message {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40rpx;
		color: #fa3475;
	}

	.price-name-message:last-child {
		margin-bottom: 0;
	}

	.price-name {
		color: #000000;
		font-size: 24rpx;
		display: flex;
		align-items: center;
	}

	.price-name image {
		width: 32rpx;
		height: 32rpx;
		margin-left: 12rpx;
	}

	.price-message {
		font-size: 32rpx;
		color: #111111;
	}

	.return-mew-bean {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 33rpx 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.mew-bean-images-message {
		display: flex;
		font-size: 24rpx;
	}

	.mew-bean-message {
		margin-left: 40rpx;
	}

	.mew-bean-images image {
		width: 90rpx;
		height: 70rpx;
	}

	.return-number {
		color: #000000;
	}

	.return-hint {
		color: #999999;
		margin-top: 15rpx;
	}

	.my-mew-nean {
		color: #fa3475;
	}

	.order-information {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 40rpx;
		font-size: 24rpx;
		margin-top: 20rpx;
	}

	.order-serial-number,
	.order-time,
	.pay-label,
	.pay-way {
		display: flex;
		align-items: center;
		margin-bottom: 24rpx;
	}

	.pay-way {
		margin-bottom: 0;
	}

	.title-name {
		color: #999999;
		margin-right: 32rpx;
	}

	.copy {
		color: #fa3475;
		margin-left: 24rpx;
	}

	/* 猜你喜欢 */
	.guess-what-you-like {
		padding: 40rpx 20rpx;
	}

	.related-title {
		font-size: 28rpx;
		line-height: 48rpx;
		color: #111111;
		display: flex;
		align-items: center;
	}

	.bottom-images {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-top: 70rpx;
	}

	.bottom-hint {
		font-size: 24rpx;
		color: #111111;
		margin-top: 48rpx;
	}

	.immobilization-button {
		height: 64rpx;
		padding: 20rpx 0;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #DADADA;
		z-index: 9;
	}

	.button_all {
		width: 100%;
		display: flex;
	}

	.button_all button {
		line-height: 60rpx;
		border-radius: 30rpx;
		font-size: 24rpx;
	}

	.bg_btn {
		color: #FFFFFF;
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
	}

	.button_all button::after {
		border: none;
	}

	.top-button {
		width: 120rpx;
		position: fixed;
		right: 30rpx;
		bottom: 80px;
		z-index: 9999;
	}
	.top-button image{
		width:80rpx;
	}

	/* 新写的样式 */
	.refunded {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.refunded image {
		width: 64rpx;
		height: 64rpx;
		margin-right: 20rpx;
	}

	.refunded_hint {
		font-size: 32rpx;
		color: #FFFFFF;
	}

	.cancel-order_top {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 210rpx;
	}

	.cancel-order_top image {
		width: 64rpx;
		height: 64rpx;
		margin-right: 10rpx;
	}

	.cancel_hint {
		color: #FFFFFF;
		margin-left: 10rpx;
	}

	.user_info {
		display: flex;
		justify-content: center;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		color: #fa3475;
		/* padding: 34rpx 0; */
		padding: 80rpx 0;
	}

	.color {
		color: #fa3475;
	}
	/* 优惠信息 */
	.discount_content{
		width: 100%;
		position: fixed;
		z-index: 999;
		left: 0;
		background-color: #eeeeee;
		opacity: 0.8;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.discount-hint{
		background-color: #FFFFFF;
		padding: 40rpx 20rpx 10rpx;
		border-radius: 20rpx;
		width: 60%;
	}
	.discounts_list{
		border-bottom: 1rpx solid #808080;
	}
	.list_item{
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		width: 100%;
		padding-bottom: 20rpx;
	}
	.item_name{
		display: flex;
		align-items: center;
		flex: 1;
	}
	.category{
		background-image: linear-gradient(-45deg,  #fa3475 0%,  #ff6699 100%);
		padding: 0 20rpx;
		line-height: 32rpx;
		border-radius: 16rpx;
		margin-right: 10rpx;
		color: #FFFFFF;
	}
	.discounts_sale_price{
		color: #fa3475;
	}
	.all_discounts{
		font-size: 24rpx;
		display: flex;
		justify-content: space-between;
		padding: 30rpx 0;
		border-bottom: 1rpx solid #808080;
		margin-bottom: 30rpx;
	}
	.all_discounts_name{
		font-weight: bold;
	}
	.i_know{
		color: #fa3475;
		background-color: #FFFFFF
	}
	.i_know::after{
		border: none;
	}
	
	.color_btn{
		background-image: linear-gradient(-45deg,  #fa3475 0%,  #ff6699 100%);
		color: #FFFFFF;
	}
</style>
