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
			<view class="top-message" :style="[{'padding-top':menuBottom+20+'px'}]">
				<view class="user-message">
					<view class="user-images">
						<image src="../../static/images/23.png" mode=""></image>
					</view>
					<view class="user-useing-time-price" v-if="state=='待付款'">
						<view class="wait-pay">等待付款</view>
						<view class="residue-time">剩余支付时间：<text>0</text>天<text>0</text>时<text>3</text>分<text>59</text>秒</view>
						<view class="user-pay-price">
							在线支付￥<text>5000.00</text>，到院再付￥<text>38500.00</text>
						</view>
					</view>
					<view class="user-useing-time-price" v-if="state=='已付款'">
						<view class="wait-pay">已付款</view>
						<view class="residue-time">有商品于2020-06-28  11:20:23作废</view>
						<view class="user-pay-prices"> 请尽快到院使用 </view>
					</view>
				</view>
			</view>
		</view>

		<view class="user-all-message">
			<view class="user-message-content">
				<view class="user-message-left">
					<view class="user-name-phone-default-address">
						<view class="user-name"> 张亮 </view>
						<view class="user-phone">188****4357</view>
						<view class="default-address">
							<view class="default">默认</view>
							<view class="default-address-content">家</view>
						</view>
					</view>
					<view class="shipping-address">
						<view class="address-name">收货地址</view>
						<view class="address-content">四川省成都市武侯区华美紫馨医学美容医院地址太多最多两行，最多两行</view>
					</view>
				</view>
				<view class="user-message-right">
					<image src="../../static/images/back1.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="order-particulars">
			<scroll-view class="order-particulars" >
				<template>					
					<view class="all-order-message">
						<view class="order-content">
							<view class="order-items" v-for="(item,index) in orderPorduct" :key='index'>
								<view class="service-conditions">
									<view class="line-service-name">
										<view class="line"></view>
										<view class="service-name">{{item.name}}</view>
									</view>
									<view class="appointment" > 失效的商品将自动退款，请及时到院使用 </view>
								</view>
															
								<view class="order-porduct-content" v-for="(i,k) in item.porductImagesList" :key='k'>
									<view class="order-porduct-line"><view class="porduct-line"></view></view>
									<view class="order-porduct-images-name">
										<view class="porduct-images">
											<image :src="i.url" mode=""></image>
										</view>
										<view class="porduct-right">
											<view class="porduct-name">{{i.porductName}}</view>
											
											<view class="content-item" @tap='openPorductContent(index,k)' v-if="!i.showPorduct">
												<view class="porduct-content-items">{{i.content}}</view>
												<image :src="i.arrowImages" mode=""></image>
											</view>		
																										
											<view class="show-porduct-content" 
											 v-if="i.showPorduct" @tap='openPorductContent(index,k)'>
												<view class="content-items" v-for="(i,k) in i.contentList" :key='k'>
													<view class="versions">版本: {{i.versions}} </view>
													<view class="specification">规格: {{i.specification}} </view>
													<view class="part">部位: {{i.part}} </view>
													<view class="doctor">医生: {{i.doctor}} </view>
												</view>
												<image :src="i.topImages" mode=""></image>
											</view>	
												
											<view class="porduct-price-number">
												<view class="porduct-price"><text>￥</text>{{i.price}}</view>
												<view class="porduct-number">x{{i.porductNumber}}</view>
											</view>															
											
											
										</view>
									</view>
									
									<view class="pay-for-the-order ">
										<view class="pay-order-content">
											<view class=" total-price-on-line-pay">
												<view class="total-price">总价 <text>￥{{i.allPrice}}</text> </view>
												<view class="on-line-pay">在线支付 <text>￥{{i.onLinePay}}</text> </view>
											</view>
											<view class="discounts-hospital-pay">
												<view class="discounts">优惠 <text>￥{{i.discounts}}</text>
													<image src="../../static/images/ask1.png" mode=""></image>
												</view>
												<view class="hospital-pay">到院再付 <text>￥{{i.hospitalPay}}</text> </view>
											</view>
											<view class="cope-with">应付 <text>￥{{i.copeWith}}</text> </view>
										</view>
									</view>
								</view>
																						
							</view>
														
						</view>
						
						<view class="complimentary">
							<view class="complimentary-top">
								<view class="top-name">赠送信息</view>
								<view class="my-complimentary">我的赠品 > </view>
							</view>
							<view class="complimentary-hint">
								温馨提示：所有赠品将以卡券的形式发放到账户中。若发生整单退款，或是部分退款，我院有权收回相关赠品，并根据退款/退单后的情况重新计算赠品信息
							</view>
							
							<view class="all-complimentary">
								<view class="complimentary-item" v-for="(i,k) in complimentaryList" :key='k'>
									<view class="complimentary-name">赠品</view>
									<view class="complimentary-content">{{i}}</view>
								</view>
							</view>
							
						</view>
						
						<view class="ticket-discount-full-reduction">
							<view class="ticket-content">
								<view class="ticket-name-message">
									<view class="ticket-name">卡券</view>
									<view class="ticket-message">满5000减500</view>
								</view>
								<view class="ticket-price">-￥500</view>
							</view>
							<view class="full-reduction-content">
								<view class="full-reduction-name-message">
									<view class="full-reduction-name">满减</view>
									<view class="full-reduction-message">满5000减500</view>
								</view>
								<view class="full-reduction-price">-￥500</view>
							</view>
							<view class="discount-content">
								<view class="discount-name-message">
									<view class="discount-name">折扣</view>
									<view class="discount-message">满2件减500</view>
								</view>
								<view class="discount-price">-￥500</view>
							</view>
							
							<view class="integral-discount">
								<view class="integral-discount-name">积分抵扣</view>
								<view class="integral-discount-price">-￥120</view>
							</view>
							<view class="integral-discount">
								<view class="integral-discount-name">喵豆抵扣</view>
								<view class="integral-discount-price">-￥200</view>
							</view>
							<view class="integral-discount">
								<view class="integral-discount-name">余额抵扣</view>
								<view class="integral-discount-price">-￥220</view>
							</view>
							
							<view class="total-discounts">
								<view class="total-discounts-name">优惠合计</view>
								<view class="all-total-discounts">-￥2040</view>
							</view>
						
						</view>
						
						<view class="all-price-message">
							<view class="price-name-message"  v-for="(i,k) in priceList" :key='k'>
								<view class="price-name" :style="{color:i.name=='在线支付'||i.name=='到院再付'?'#fa3475':'#000000'}">{{i.name}}  <image v-if="i.name=='优惠合计'" src="../../static/images/ask1.png" mode=""></image> </view>
								<view class="price-message" :style="{color:i.name=='在线支付'||i.name=='到院再付'?'#fa3475':'#000000'}">￥{{i.price}}</view>
							</view>
						</view>
						
						<view class="pay-phone-service">
							<view class="pay-phone">
								 <button type="default"  plain="true">拨打电话</button> 
							</view>
							<view class="connection-service">
								<button type="default"  plain="true">联系客服</button>
							</view>
						</view>
												
						<view class="return-mew-bean">
							<view class="mew-bean-images-message">
								<view class="mew-bean-images"><image src="../../static/images/cartBg.png" mode=""></image></view>
								<view class="mew-bean-message">
									<view class="return-number">返喵豆1000个</view>
									<view class="return-hint">返喵豆1000个</view>
								</view>
							</view>
							<view class="my-mew-nean">我的喵豆 > </view>
						</view>
						
						<view class="order-information">
							<view class="order-serial-number">
								<view class="title-name">订单编号:</view>
								<view class="serial-number">{{serialNumber}}</view>
								<view class="copy" @tap='copySerialNumber'>复制</view>
							</view>
							<view class="order-time">
								<view class="title-name">下单时间:</view>
								<view class="order-time-content">2020-04-28  11:01:07</view>
							</view>
							<view class="pay-label">
								<view class="title-name">支付类型:</view>
								<view class="pay-label-content">预约金支付/全款付</view>
							</view>
							<view class="pay-way">
								<view class="title-name">支付方式:</view>
								<view class="pay-way-content">微信支付</view>
							</view>							
						</view>
						
						<view class="guess-what-you-like">
							<view class="related-title">
								<view class="line"></view> 猜你喜欢
							</view>	
							<view class="subject-content">
								<porduct :width=350 :porductList='productList' ></porduct>
							</view>
								
						</view>
						
						<view class="bottom-images">
							<image src="../../static/images/cartBg.png" mode=""></image>
							<view class="bottom-hint">本喵也是有底线的~</view>
						</view>
							
					</view>
					
				</template>
			</scroll-view>
		</view>
		
		<view class="immobilization-button">
			<view class="all-botton">
				<view class="cancel-order">
					 <button class="cancel-orders" type="default"  plain="true">取消订单</button> 
				</view>
				<view class="connection-services">
					 <button class="connection-servicess" type="default"  plain="true">联系客服</button> 
				</view>
				<view class="promptly-pay">
					<button class="promptly-pays" type="default"  plain="true">立即支付</button>
				</view>
			</view>
			
		</view>
		
		<view class="top-button" @click="ToTop" v-if="showTop">
			TOP
		</view>
		
	</view>
</template>

<script>
	import porduct from "../../components/porduct.vue";
	export default {
		components: {
			porduct
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#fa3474',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '订单详情',
				state:'已付款',//是否付款
				orderPorduct: [{
						name: '收费室使用',
						porductImagesList: [{
								id: 1,
								url: '../../static/images/23.png',
								porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
								content: '版本：尊享版； 规格：傲若拉商品名称.... ',
								contentList: [{
									versions: '尊享版',
									specification: '傲诺拉-星熠光面圆盘',
									part: '腋下切口+内窥镜(进口)+双平面',
									doctor: '艾剑英/邱伟'
								}, ],
								price: 608000,
								arrowImages: '../../static/images/arrow-down.png',
								topImages: '../../static/images/arrow-top.png',
								showPorduct: false,
								allPrice:19600,
								onLinePay:500,
								discounts:600,
								hospitalPay:18500,
								copeWith:19000,
								porductNumber:2
							},
							{
								id: 2,
								url: '../../static/images/20.png',
								porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
								content: '版本：尊享版； 规格：傲若拉商品名称.... ',
								contentList: [{
									versions: '尊享版',
									specification: '傲诺拉-星熠光面圆盘',
									part: '腋下切口+内窥镜(进口)+双平面',
									doctor: '艾剑英/邱伟'
								}, ],
								price: 608000,
								arrowImages: '../../static/images/arrow-down.png',
								topImages: '../../static/images/arrow-top.png',
								showPorduct: false,
								allPrice:19600,
								onLinePay:500,
								discounts:600,
								hospitalPay:18500,
								copeWith:19000,
								porductNumber:1
							}, {
								id: 1,
								url: '../../static/images/23.png',
								porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
								content: '版本：尊享版； 规格：傲若拉商品名称.... ',
								contentList: [{
									versions: '尊享版',
									specification: '傲诺拉-星熠光面圆盘',
									part: '腋下切口+内窥镜(进口)+双平面',
									doctor: '艾剑英/邱伟'
								}, ],
								price: 608000,
								arrowImages: '../../static/images/arrow-down.png',
								topImages: '../../static/images/arrow-top.png',
								showPorduct: false,
								allPrice:19600,
								onLinePay:500,
								discounts:600,
								hospitalPay:18500,
								copeWith:19000,
								porductNumber:2
							}, {
								id: 1,
								url: '../../static/images/19.png',
								porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
								content: '版本：尊享版； 规格：傲若拉商品名称.... ',
								contentList: [{
									versions: '尊享版',
									specification: '傲诺拉-星熠光面圆盘',
									part: '腋下切口+内窥镜(进口)+双平面',
									doctor: '艾剑英/邱伟'
								}, ],
								price: 608000,
								arrowImages: '../../static/images/arrow-down.png',
								topImages: '../../static/images/arrow-top.png',
								showPorduct: false,
								allPrice:19600,
								onLinePay:500,
								discounts:600,
								hospitalPay:18500,
								copeWith:19000,
								porductNumber:2
							},
						],
					},
					{
						name: '会员中心使用',
						porductImagesList: [{
								id: 1,
								url: '../../static/images/23.png',
								porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
								content: '版本：尊享版； 规格：傲若拉商品名称.... ',
								contentList: [{
									versions: '尊享版',
									specification: '傲诺拉-星熠光面圆盘',
									part: '腋下切口+内窥镜(进口)+双平面',
									doctor: '艾剑英/邱伟'
								}, ],
								price: 608000,
								arrowImages: '../../static/images/arrow-down.png',
								topImages: '../../static/images/arrow-top.png',
								showPorduct: false,
								allPrice:19600,
								onLinePay:500,
								discounts:600,
								hospitalPay:18500,
								copeWith:19000,
								porductNumber:2
							},
							{
								id: 2,
								url: '../../static/images/20.png',
								porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
								content: '版本：尊享版； 规格：傲若拉商品名称.... ',
								contentList: [{
									versions: '尊享版',
									specification: '傲诺拉-星熠光面圆盘',
									part: '腋下切口+内窥镜(进口)+双平面',
									doctor: '艾剑英/邱伟'
								}, ],
								price: 608000,
								arrowImages: '../../static/images/arrow-down.png',
								topImages: '../../static/images/arrow-top.png',
								showPorduct: false,
								allPrice:19600,
								onLinePay:500,
								discounts:600,
								hospitalPay:18500,
								copeWith:19000,
								porductNumber:1
							}, {
								id: 1,
								url: '../../static/images/23.png',
								porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
								content: '版本：尊享版； 规格：傲若拉商品名称.... ',
								contentList: [{
									versions: '尊享版',
									specification: '傲诺拉-星熠光面圆盘',
									part: '腋下切口+内窥镜(进口)+双平面',
									doctor: '艾剑英/邱伟'
								}, ],
								price: 608000,
								arrowImages: '../../static/images/arrow-down.png',
								topImages: '../../static/images/arrow-top.png',
								showPorduct: false,
								allPrice:19600,
								onLinePay:500,
								discounts:600,
								hospitalPay:18500,
								copeWith:19000,
								porductNumber:1
							}, {
								id: 1,
								url: '../../static/images/19.png',
								porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
								content: '版本：尊享版； 规格：傲若拉商品名称.... ',
								contentList: [{
									versions: '尊享版',
									specification: '傲诺拉-星熠光面圆盘',
									part: '腋下切口+内窥镜(进口)+双平面',
									doctor: '艾剑英/邱伟'
								}, ],
								price: 608000,
								arrowImages: '../../static/images/arrow-down.png',
								topImages: '../../static/images/arrow-top.png',
								showPorduct: false,
								allPrice:19600,
								onLinePay:500,
								discounts:600,
								hospitalPay:18500,
								copeWith:19000,
								porductNumber:2
							},
						],
						poructNumber: 4
					},
					{
						name: '邮寄商品',
						porductImagesList: [{
							id: 1,
							url: '../../static/images/23.png',
							porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
							content: '版本：尊享版； 规格：傲若拉商品名称.... ',
							contentList: [{
								versions: '尊享版',
								specification: '傲诺拉-星熠光面圆盘',
								part: '腋下切口+内窥镜(进口)+双平面',
								doctor: '艾剑英/邱伟'
							}, ],
							price: 608000,
							arrowImages: '../../static/images/arrow-down.png',
							topImages: '../../static/images/arrow-top.png',
							showPorduct: false,
							allPrice:19600,
							onLinePay:500,
							discounts:600,
							hospitalPay:18500,
							copeWith:19000,
							porductNumber:2
							}, 
							{
							id: 2,
							url: '../../static/images/20.png',
							porductName: '商品名称,商品名称,商品名称,商品名称,商品名称,最多两行就隐藏显示为....',
							content: '版本：尊享版； 规格：傲若拉商品名称.... ',
							contentList: [{
								versions: '尊享版',
								specification: '傲诺拉-星熠光面圆盘',
								part: '腋下切口+内窥镜(进口)+双平面',
								doctor: '艾剑英/邱伟'
							}, ],
							price: 608000,
							arrowImages: '../../static/images/arrow-down.png',
							topImages: '../../static/images/arrow-top.png',
							showPorduct: false,
							allPrice:19600,
							onLinePay:500,
							discounts:600,
							hospitalPay:18500,
							copeWith:19000,
							porductNumber:1
						}, ],
					},
				],
				complimentaryList:[
					'HB面膜(2片装)一盒',
					'华桑葆骊科玮防晒霜SPF30（2支）',
					'20元无门槛卡券',
					'2000元满减券'
				],
				priceList:[
					{name:'商品总价',price:56800},
					{name:'优惠合计',price:6800},
					{name:'邮寄运费',price:0},
					{name:'实际应付',price:50000},
					{name:'在线支付',price:1000},
					{name:'到院再付',price:49000},
				],
				serialNumber:2354777654,//订单编号
				showTop:false,
				productList: [
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
			}
		},
		onReady() {
			let that = this;
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					that.height = res.screenHeight
					let menu = uni.getMenuButtonBoundingClientRect();
					that.menuWidth = menu.width
					that.menuTop = menu.top
					that.menuHeight = menu.height
					that.menuLeft = menu.left
					that.menuBottom = menu.bottom
					that.menuPaddingRight = res.windowWidth - menu.right
				}
			})
		},
		methods: {
			// 返回上一级
			goBack: function() {
				console.log('back')
				uni.navigateBack({
					delta: 1
				});
			},
			openPorductContent:function(index,k){
				let showPorduct = this.orderPorduct[index].porductImagesList[k].showPorduct
				this.orderPorduct[index].porductImagesList[k].showPorduct = !showPorduct
			},
			copySerialNumber:function(){
				uni.setClipboardData({
				    data: this.serialNumber,
				    success: function () {
				        console.log('复制成功');
				    }
				});
			},
			ToTop:function() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 600
				})
			}
		},
		onPageScroll:function(e){
			if(e.scrollTop > 0 ){
				this.showTop = true
			}
			else if(e.scrollTop == 0){
				this.showTop = false
			}
		}
	}
</script>

<style scoped>
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
		padding-left: 50rpx;
		padding-bottom: 210rpx;
	}

	.user-message {
		display: flex;
		color: #FFFFFF;
		font-size: 24rpx;
	}

	.user-images,
	.user-images image {
		width: 108rpx;
		height: 108rpx;
		border-radius: 59rpx;
	}

	.user-images {
		margin-right: 30rpx;
	}

	.wait-pay {
		font-size: 40rpx;
	}
	.user-pay-prices{
		font-size: 32rpx;
	}

	.residue-time {
		opacity: 0.7;
		margin-top: 20rpx;
		margin-bottom: 22rpx;
	}

	.user-all-message {
		padding: 0 20rpx;
		margin-top: -150rpx;
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
		margin-right: 50rpx;
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

	.user-message-right {
		width: 40rpx;
		display: flex;
		align-items: center;
		transform: rotate(180deg);
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
		width: 410rpx;
	}

	.user-message-right image {
		width: 32rpx;
		height: 32rpx;
	}
	.all-order-message{
		padding-bottom: 170rpx;
	}
	.order-content{
		padding: 40rpx 20rpx 0;
	}
	.order-items{
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-bottom: 40rpx;
		padding: 40rpx 0 ;
	}
	.service-conditions {
		display: flex;
		justify-content: space-between;
		padding-bottom: 22rpx;
		padding-right: 30rpx;
	}
	.line-service-name{
		display: flex;
		align-items: center;
	}
	
	.line {
		width: 6rpx;
		height: 24rpx;
		background-color: #fa3475;
	}
	
	.service-name {
		font-size: 24rpx;
		color: #111111;
		margin-left: 28rpx;
	}
	.appointment{
		font-size: 24rpx;
		color: #999999;
	}
	.order-porduct-content{
		padding: 0 30rpx;
	}
	.order-porduct-line{
		padding: 0 0 40rpx;
	}
	.porduct-line{
		background-color: #F0F0F0;
		height: 2rpx;
	}
	
	.order-porduct-images-name{
		border-bottom: 2rpx solid #F0F0F0;
		padding-bottom: 30rpx;
		display: flex;
		justify-content: space-between;
		/* align-items: center; */
		position: relative;
	}
	.porduct-images{
		width: 200rpx;
		height: 200rpx;
	}
	.porduct-images image{
		width: 200rpx;
		height: 200rpx;
	}
	.porduct-right{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
	}
	.porduct-name{
		width: 430rpx;
		font-size: 24rpx;
		line-height: 32rpx;
		color: #111111;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		margin-bottom: 20rpx;
	}
	.content-item{
		width: 320rpx;
		height: 40rpx;
		line-height: 40rpx;
		background-color: #f0f0f0;
		border-radius: 20rpx;
		font-size: 20rpx;
		color: #333333;
		font-weight: lighter;
		padding: 0 14rpx 0 16rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.content-item image{
		width: 32rpx;
		height: 32rpx;
	}
	.show-porduct-content image{
		width: 32rpx;
		height: 32rpx;
	}
	.show-porduct-content{
		font-size: 20rpx;
		background-color: #f0f0f0;
		border-radius: 20rpx;
		padding: 10rpx 16rpx ;
		position: absolute;
		top: 88rpx;
		width: 360rpx;
		min-height: 140rpx;
		display: flex;
		color: #333333;
		font-weight: lighter;
		justify-content: space-between;
		line-height: 30rpx;
	}
	.show-porduct-content .content-items{
		width: 290rpx;
	}
	.porduct-content-items{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		width: 280rpx;
	}
	
	.porduct-price-number{
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fa3475;
		margin-top: 15rpx;
	}
	
	.porduct-price{
		font-size: 40rpx;
		
	}
	.porduct-price text{
		font-size: 24rpx;
	}
	.porduct-number{
		font-size: 24rpx;
	}
	.content-items{
		width: 290rpx;
	}
		
	.pay-order-content {
		border-top: 2rpx solid #F0F0F0;
		border-bottom: 2rpx solid #F0F0F0;
		color: #111111;
		padding-bottom: 20rpx;
	}
	
	.pay-order-content text {
		margin-left: 40rpx;
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
	.discounts {
		color: #fa3475;
	}
	.on-line-pay,.hospital-pay{
		width: 40%;
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
		
	.complimentary{
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 40rpx;
	}
	.complimentary-top{
		display: flex;
		justify-content: space-between;
		align-items:baseline;
	}
	.top-name{
		font-size: 28rpx;
		color: #000000;
		font-weight: bold;
	}
	.my-complimentary{
		color: #fa3475;
		font-size: 24rpx;
	}
	
	.complimentary-hint{
		font-size: 24rpx;
		color: #999999;
		line-height: 32rpx;
		padding: 15rpx 0 32rpx;
		border-bottom: 2rpx solid #f0f0f0;
	}
	.all-complimentary{
		padding-top:  40rpx;
	}
	.complimentary-item{
		display: flex;
		align-items: center;
		line-height: 30rpx;
		margin-bottom: 20rpx;
	}
	.complimentary-item:last-child{
		margin-bottom: 0;
	}
	.complimentary-name{
		width: 80rpx;
		height: 30rpx;
		background-color: #ffe8f0;
		border-radius: 15rpx;
		text-align: center;
		font-size: 20rpx;
		color: #fa3475;
		margin-right: 18rpx;
	}
	.complimentary-content{
		font-size: 24rpx;
		color: #000000;
		
	}
	
	.ticket-discount-full-reduction{
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 40rpx;
		margin-top: 20rpx;
	}
	.ticket-content,.full-reduction-content,.discount-content{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 35rpx;
	}
	.ticket-name-message,.full-reduction-name-message,.discount-name-message{
		display: flex;
		line-height: 30rpx;
		
	}
	.ticket-name,.full-reduction-name,.discount-name{
		width: 80rpx;
		height: 30rpx;
		background-color: #ffe8f0;
		border-radius: 15rpx;
		
		text-align: center;
		font-size: 20rpx;
		color: #fa3475;
		margin-right: 16rpx;
	}
	.ticket-message,.full-reduction-message,.discount-message{
		color: #000000;
		font-size: 24rpx;
	}
	.ticket-price,.full-reduction-price,.discount-price{
		color: #999999;
		font-size: 32rpx;
	}
	
	.integral-discount{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		line-height: 30rpx;
		margin-bottom: 30rpx;
	}
	.integral-discount-name{
		color: #000000;
	}
	.integral-discount-price{
		color: #999999;
		font-size: 32rpx;
	}
	.total-discounts{
		border-top: 2rpx solid #f0f0f0;
		padding-top: 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.total-discounts-name{
		font-size: 24rpx;
		color: #000000;
	}
	.all-total-discounts{
		color: #fa3475;
		font-size: 32rpx;
	}
	
	.all-price-message{
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-top: 24rpx;
		padding: 40rpx;
	}
	
	.price-name-message{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40rpx;
		color: #fa3475;
	}
	.price-name-message:last-child{
		margin-bottom: 0;
	}
	.price-name{
		color: #000000;
		font-size: 24rpx;
		display: flex;
		align-items: center;
	}
	.price-name image{
		width: 32rpx;
		height: 32rpx;
		margin-left: 12rpx;
	}
	.price-message{
		font-size: 32rpx;
		color: #111111;
	}
	
	.pay-phone-service{
		padding: 30rpx 20rpx;
		display: flex;
		justify-content: space-between;
	}
	.pay-phone{
		width: 350rpx;
		height: 80rpx;
		line-height: 80rpx;
		background-image: linear-gradient(270deg, #8834fa 0%, #bc66ff 100%);
		border-radius: 40rpx;	
		font-size: 28rpx;
	}
	.pay-phone button,.connection-service button{
		border: 0;
		color: #FFFFFF;
		text-align: center;
	}
	.connection-service{
		width: 349rpx;
		height: 80rpx;
		background-image: linear-gradient(-45deg,  #fa3475 0%,  #ff6699 100%);
		border-radius: 40rpx;	
		font-size: 28rpx;		
	}
	
	.return-mew-bean{
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 33rpx 40rpx ;
		display: flex;
		justify-content: space-between;
	}
	.mew-bean-images-message{
		display: flex;
		font-size: 24rpx;
	}
	.mew-bean-message{
		margin-left: 40rpx;
	}
	.mew-bean-images image{
		width: 90rpx;
		height: 70rpx;
	}
	.return-number{
		color: #000000;
	}
	.return-hint{	
		color: #999999;
		margin-top: 15rpx;
	}
	.my-mew-nean{
		color: #fa3475;
	}
	
	.order-information{
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 40rpx;
		font-size: 24rpx;
		margin-top: 20rpx;
	}
	
	.order-serial-number,.order-time,.pay-label,.pay-way{
		display: flex;
		align-items: center;
		margin-bottom: 24rpx;
	}
	.pay-way{
		margin-bottom: 0;
	}
	.title-name{
		color: #999999;
		margin-right: 32rpx;
	}
	.copy{
		color: #fa3475;
		 margin-left: 24rpx;
	}
	
	/* 猜你喜欢 */
	.guess-what-you-like {
		padding: 40rpx 20rpx;
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
	
	.bottom-images{
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-top: 70rpx;
	}
	.bottom-images image{
		width: 366rpx;
		height: 260rpx;
	}
	.bottom-hint{
		font-size: 24rpx;
		color: #111111;
		margin-top: 48rpx;
	}
	
	.immobilization-button{
		height: 104rpx;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #FFFFFF;	
		display: flex;
		justify-content: flex-end;
	}
	.all-botton{
		display: flex;
		align-items: center;
	}
	.cancel-order,.connection-services,.promptly-pay{
		font-size: 24rpx;
		margin-right: 20rpx;
		
	}
	.cancel-orders,.connection-servicess{
		width: 160rpx;
		height: 64rpx;
		font-size: 24rpx;
		line-height: 64rpx;
		border-radius: 32rpx;
		border: solid 1rpx #999999;	
		color: #999999;
	}
	.promptly-pays{
		width: 160rpx;
		height: 64rpx;
		background-image: linear-gradient(-45deg,  #fa3475 0%, #ff6699 100%);
		box-shadow: 0rpx 4rpx 8rpx 0rpx  rgba(250, 53, 118, 0.5);
		border-radius: 32rpx;	
		font-size: 24rpx;
		line-height: 64rpx;
		border-radius: 32rpx;
		color: #FFFFFF;
		border: 0;
	}
	
	.top-button {
		width: 64rpx;
		height: 65rpx;
		line-height: 65rpx;
		background-image: linear-gradient(-45deg,  #fa3475 0%,  #ff6699 100%);
		box-shadow: 0rpx 8rpx 16rpx 0rpx  rgba(250, 53, 118, 0.32);
		border-radius: 50%;
		position: fixed;
		right: 40rpx;
		bottom: 130px;
		z-index: 9999;
		font-size: 27rpx;
		color: #FFFFFF;
		text-align: center;
	}
</style>
