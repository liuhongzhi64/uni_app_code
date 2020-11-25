<template>
	<view class="my_order">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="top-swiper-tab" :style="[{'top':menuBottom+10+'px'}]">
			<view class="tab_content" v-for="(i,k) in tabBars" :key='k' :class="{checkedPorduct :tabIndex == k}" @tap="tabtap(k,i.type)">
				<view class="tab_item">
					{{ i.name }}
					<view :class="{checkedLine :tabIndex == k}">
						<view></view>
					</view>
				</view>
			</view>
		</view>
		<view class="my_order-content" :style="[{'padding-top':menuBottom+50+'px'}]">
			<view class="end-cont my_order-items" :class="{dis:tabIndex == zindex}" v-for="(item,zindex) in tabBars" :key="zindex">
				<scroll-view scroll-y >
					<view class="my_order-items-content">
						<view class="order-advertising-images">
							<image src="../../static/images/22.png" mode=""></image>
						</view>
						<view class="order-all-message">
							<view class="order-message" v-for="(item,index) in contentList" :key='index'>
								<!-- 顶部作废时间和订单类型 -->
								<view class="order-message-top">
									<view class="order-invalid-time-order-label">
										<view class="order-invalid-time" v-if="item.status==0">
											订单作废: {{ day }} 天 {{ house }} 时 {{ second }} 分 {{ minute }} 秒
										</view>
										<view class="order-label" v-for="(is,sindex) in status_list" :key='sindex'
										 v-show="item.status==is.type&&item.status!=5&&item.status!=1">
											{{ is.name }}
										</view>
										<view class="order-invalid-time" v-show="item.status!=0">
											下单时间: {{item.create_time}}
										</view>
										<!-- 完成 -->
										<view class="order-state" v-if="item.status==5">
											<image src="../../static/images/complete.png" mode="widthFix"></image>
										</view>
										<!-- 作废 -->
										<view class="order-state" v-if="item.status==1">
											<image src="../../static/images/cancellation.png" mode="widthFix"></image>
										</view>
									</view>
								</view>

								<view class="service-conditions-order-porduct" v-for="(i,k) in item.sku_list" :key='k'>
									<view class="order-content_goods_list" v-for="(is,sindex) in i" :key='sindex' v-show="i.length==1">
										<!-- 使用条件 -->
										<view class="service-conditions">
											<view class="line-service-name">
												<view class="line"></view>
												<view class="service-name" v-if="is.distribution==1">邮寄商品</view>
												<view class="service-name" v-else-if="is.scan_department==0">收费室使用</view>
												<view class="service-name" v-else-if="is.scan_department==1">会员中心使用</view>
											</view>
											<view class="remind" v-if="is.distribution==1&&item.status==2">
												提醒发货
											</view>
											<view class="appointment" v-else-if="is.scan_department==0&&item.status==2">
												预约挂号
											</view>
										</view>
										<view class="order_goods-content">
											<image :src="requestUrl+is.img"></image>
											<view class="goods_right_content">
												<view class="goods-title"> {{is.spu_name}} </view>
												<view class="content_all_items" @tap='this_show_sku_spec(index,k,sindex)'>
													<view class="item_content">
														<text class="content_items" v-for="(z,j) in is.sku_spec" :key='j'>
															<text class="versions"> {{ z }} : {{ j }} ; </text>
														</text>
													</view>
													<image src="../../static/images/arrow-down.png" mode=""></image>
												</view>
												<view class="show_item_content" @tap='this_show_sku_spec(index,k,sindex)' v-if="is.show_sku_spec">
													<view class="show_all_items">
														<view class="content-items" v-for="(z,j) in is.sku_spec" :key='j'>
															<text class="versions"> {{ z }} : {{ j }} ; </text>
														</view>
													</view>
													<image src="../../static/images/arrow-down.png" mode=""></image>
												</view>
												<view class="goods_rel_price_sku_nums">
													<view class="rel_price"> ￥ <text> {{ is.rel_price }} </text> </view>
													<view class="sku_nums"> x{{ is.sku_nums }} </view>
												</view>
											</view>
										</view>
									</view>
									<view class="order_goods_list" v-show="i.length>1">
										<!-- 邮寄 -->
										<view class="order_goods-items" v-show="item.is_post_list.length>0">
											<view class="service-conditions">
												<view class="line-service-name">
													<view class="line"></view>
													<view class="service-name">邮寄商品</view>
												</view>
												<view class="remind" v-if="item.status==2">
													提醒发货
												</view>
											</view>
											<view class="goods_show">
												<view class="goods_image_item">
													<scroll-view class="order_goods-image" scroll-x="true">
														<view class="images_list">
															<view class="image_items" v-for="(is,sindex) in item.is_post_list" :key='sindex'>
																<image class="images-item" :src="requestUrl+is.img" mode=""></image>
															</view>
														</view>
													</scroll-view>
												</view>
												<view class="right_number_show" @tap="gotoPages(item.id)">>
													<view> 共计 {{ item.is_post_list.length }} 件 </view>
													<view class="see_order"> 查看 > </view>
												</view>
											</view>
										</view>
										<!-- 收费室 -->
										<view class="order_goods-items" v-show="item.scan_one_list.length>0">
											<view class="service-conditions">
												<view class="line-service-name">
													<view class="line"></view>
													<view class="service-name">收费室使用</view>
												</view>
												<view class="appointment" v-if="item.status==2">
													预约挂号
												</view>
											</view>
											<view class="goods_show">
												<view class="goods_image_item">
													<scroll-view class="order_goods-image" scroll-x="true">
														<view class="images_list">
															<view class="image_items" v-for="(is,sindex) in item.scan_one_list" :key='sindex'>
																<image class="images-item" :src="requestUrl+is.img" mode=""></image>
															</view>
														</view>
													</scroll-view>
												</view>
												<view class="right_number_show" @tap="gotoPages(item.id)">
													<view> 共计 {{ item.scan_one_list.length }} 件 </view>
													<view class="see_order"> 查看 > </view>
												</view>
											</view>
										</view>

										<!-- 会员中心 -->
										<view class="order_goods-items" v-show="item.scan_two_list.length>0">
											<view class="service-conditions">
												<view class="line-service-name">
													<view class="line"></view>
													<view class="service-name">会员中心使用</view>
												</view>
												<view class="appointment" v-if="item.status==2">
													预约挂号
												</view>
											</view>
											<view class="goods_show">
												<view class="goods_image_item">
													<scroll-view class="order_goods-image" scroll-x="true">
														<view class="images_list">
															<view class="image_items" v-for="(is,sindex) in item.scan_two_list" :key='sindex'>
																<image class="images-item" :src="requestUrl+is.img" mode=""></image>
															</view>
														</view>
													</scroll-view>
												</view>
												<view class="right_number_show" @tap="gotoPages(item.id)">>
													<view> 共计 {{ item.scan_two_list.length }} 件 </view>
													<view class="see_order"> 查看 > </view>
												</view>
											</view>
										</view>
									</view>
								</view>
								<!-- 总价、优惠、应付、到院再发、在线支付 -->
								<view class="pay-for-the-order ">
									<view class="pay-order-content">
										<view class=" total-price-on-line-pay">
											<view class="total-price">总价 <text>￥{{item.payable_amount}}</text> </view>
											<view class="on-line-pay">在线支付 <text>￥{{item.online_pay}}</text> </view>
										</view>
										<view class="discounts-hospital-pay">
											<view class="discounts" v-if="item.total_discount">
												优惠 <text>￥{{item.total_discount}}</text>
												<image src="../../static/images/ask1.png" mode=""></image>
											</view>
											<view class="hospital-pay">到院再付 <text>￥{{item.offline_pay}}</text> </view>
										</view>
										<view class="cope-with">应付 <text>￥{{item.rel_price}}</text> </view>
									</view>
								</view>

								<!-- 订单详情等按钮  -->
								<view class="particulars-bottom-list">
									<view class="all_button">
										<button class="button " type="default" plain="true"
										 v-show="item.status==4||item.status==6||item.status==7||item.status==8">
											退款明细
										</button>
										<button class="button" type="default" plain="true" @tap="gotoPages(item.id)"> 
											订单详情 
										</button>
										<button class="button button_now" type="default" plain="true" v-show="item.status==5">
											再次购买
										</button>
										<button class="immediate-payment" type="default" plain="true" v-show="item.status==0">
											立即支付
										</button>
										<button class="immediate-payment" type="default" plain="true" v-show="item.status==2">
											核销使用
										</button>
										<button class="immediate-payment" type="default" plain="true" v-show="item.status==5">
											写评价
										</button>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="top-button" @click="ToTop" v-if="showTop">
			TOP
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
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '/static/images/back2.png',
				title: '我的订单',
				tabBars: [
					{
						name: '全部',
						id: 'all',
						type: 0
					},
					{
						name: '待付款',
						id: 'obligation',
						type: 1
					},
					{
						name: '已付款',
						id: 'account-paid',
						type: 2
					},
					{
						name: '已完成',
						id: 'completed',
						type: 3
					},
					{
						name: '已退款',
						id: 'refunded',
						type: 4
					},
				],
				showTop:false,
				
				tabIndex: 0, // 选中的顶部的导航，0全部 1待付款 2已付款 3已完成 4已退款 
				listType: 0, //订单的类型
				requestUrl: '',
				contentList: [],
				bottomList: [
					{
						name: '订单详情',
						type: 1
					},
					{
						name: '取消订单',
						type: 2
					},
					{
						name: '立即支付',
						type: 3
					},
				],
				status_list: [{
						type: 0,
						name: '待支付'
					},
					{
						type: 1,
						name: '取消订单'
					},
					{
						type: 2,
						name: '已支付'
					},
					{
						type: 3,
						name: '已支付部分完成'
					},
					{
						type: 4,
						name: '已支付部分退款'
					},
					{
						type: 5,
						name: '整单已完成'
					},
					{
						type: 6,
						name: '完成部分退款'
					},
					{
						type: 7,
						name: '整单退款'
					},
					{
						type: 8,
						name: '已支付部分完成部分退款'
					},
				],
				day: 0,
				house: 0,
				second: 0,
				minute: 0,
				offset: 0, //分页起始位置
			}
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
		onLoad: function(option) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.get_my_order()
		},
		onReachBottom: function() {
			let that = this;
			that.offset += 1;
			that.get_my_order()
		},
		methods: {
			// 获取我的订单
			get_my_order: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'get_order_list',
					type: that.listType, //type：0、全部；1、待付款；2、已付款；3、已完成；4、已退款
					offset: that.offset*2,
					limit: 2
				}
				that.request.uniRequest("order", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						if (data.length > 0) {
							for (let i = 0; i < data.length; i++) {
								let time = data[i].create_time + data[i].cancel_time - data[i].time_now
								if (time > 0) {
									that.set_dount_down(time, i)
								}
								data[i].create_time = that.setTimer(data[i].create_time)
								for (let key in data[i].sku_list) {
									if (data[i].sku_list[key].length > 1) {
										let is_post_list = [] //邮寄商品
										let scan_one_list = [] //收费室使用商品
										let scan_two_list = [] //会员中心使用商品
										for (let index in data[i].sku_list[key]) {
											if (data[i].sku_list[key][index].distribution == 1) {
												is_post_list.push(data[i].sku_list[key][index])
											} else if (data[i].sku_list[key][index].scan_department == 0) {
												scan_one_list.push(data[i].sku_list[key][index])
											} else if (data[i].sku_list[key][index].scan_department == 1) {
												scan_two_list.push(data[i].sku_list[key][index])
											}
										}
										data[i].is_post_list = is_post_list
										data[i].scan_one_list = scan_one_list
										data[i].scan_two_list = scan_two_list
										// console.log(is_post_list, scan_one_list, scan_two_list)
									}
									for (let j = 0; j < data[i].sku_list[key].length; j++) {
										data[i].sku_list[key][j].show_sku_spec = false
									}
								}
							}
							that.contentList = that.contentList.concat(data)
						} else {
							uni.showToast({
								title: '没有更多了',
								icon: 'none'
							})
						}
						// console.log(data)
					}
				})
			},
			// 开启倒计时
			set_dount_down:function(time, i) {
				let that = this
				// let minuteTime = time;// 秒
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
						that.contentList[i].status = 1
					}
					console.log(that.day, that.house, that.second, that.minute)
				}, 1000)

			},
			// 转换时间格式
			setTimer: function(date) {
				let house = 0
				let second = 0
				let minute = 0
				house = parseInt((date) /1000 / 60 / 60 % 24)
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
				if(house<10){
					house = "0" + house
				}
				if(second<10){
					second = "0" + second
				}
				if(minute<10){
					minute = "0" + minute
				}
				
				let time = date.getFullYear() + '-' + month + '-' + day + "  " + ' ' + house + ':' + second + ':' + minute
				// console.log(time)
				return time
			},
			// 点击头部tab
			tabtap: function(index, type) {
				let that = this
				that.tabIndex = index;
				that.offset = 0
				that.listType = type //订单的类型
				that.contentList = []
				that.get_my_order()
			},
			
			// 显示规格
			this_show_sku_spec: function(index, k, sindex) {
				let that = this
				that.contentList[index].sku_list[k][sindex].show_sku_spec = !that.contentList[index].sku_list[k][sindex].show_sku_spec
			},
			// 订单详情
			gotoPages: function(info) {
				uni.navigateTo({
					url: `/pages/my/my_order_detail?info=${info}`,
				})
			},
			// 返回顶部
			ToTop:function() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 600
				})
			},
		},
		// 显示回到顶部按钮
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
	.top-swiper-tab {
		position: fixed;
		z-index: 9;
		width: 100%;
		display: flex;
		justify-content: space-around;
		background-color: #FFFFFF;
		line-height: 80rpx;
		font-size: 24rpx;
	}

	.tab_content {
		width: 100%;
		text-align: center;
	}

	.checkedPorduct {
		font-size: 28rpx;
		color: #fa3475;
		font-weight: bold;
	}

	.checkedLine {
		padding: 0 20rpx;
	}

	.checkedLine view {
		height: 4rpx;
		background-color: #fa3475;
	}

	.end-cont {
		display: none;
	}

	.dis {
		display: block;
	}

	.my_order-items {
		background-color: #F6F6F6;
	}

	.my_order-items-content {
		padding-top: 20rpx;
	}

	.order-advertising-images,
	.order-advertising-images image {
		width: 100%;
		height: 220rpx;
	}

	.order-all-message {
		padding: 38rpx 20rpx;
	}

	.order-message {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-bottom: 40rpx;
		position: relative;
	}

	.order-message-top {
		padding: 40rpx 30rpx 0;
		font-size: 24rpx;
		padding-bottom: 24rpx;
	}

	.order-invalid-time-order-label {
		padding-bottom: 24rpx;
		border-bottom: 2rpx solid #f0f0f0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.order-state {
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		z-index: 9;
		opacity: 0.8;
	}

	.order-state image {
		width: 166rpx;
	}

	.order-invalid-time {
		color: #999999;
	}

	.order-label {
		color: #fa3475;
		font-weight: bold;
	}

	.service-conditions-order-porduct {
		padding-bottom: 40rpx;
	}

	.service-conditions {
		display: flex;
		justify-content: space-between;
		padding-bottom: 22rpx;
		padding-right: 20rpx;
	}

	.line-service-name {
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

	.appointment {
		width: 120rpx;
		height: 40rpx;
		background-image: linear-gradient(0deg, #fa3475 0%, #ff6699 100%), linear-gradient(#e0619d, #e0619d);
		border-radius: 20rpx;
		border: 0;
		line-height: 40rpx;
		text-align: center;
		color: #FFFFFF;
		font-size: 20rpx;
	}

	.remind {
		width: 120rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
		border-radius: 20rpx;
		border: 2rpx solid #fa3475;
		font-size: 20rpx;
		color: #fa3475;
	}


	.images-item {
		width: 200rpx;
		height: 200rpx;
		margin-right: 30rpx;
	}


	.pay-for-the-order {
		padding: 0 30rpx;
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

	.on-line-pay,
	.hospital-pay {
		width: 50%;
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

	.particulars-bottom-list {
		padding: 32rpx 0;
		display: flex;
		flex-direction: row-reverse;
	}

	.all_button {
		display: flex;
		padding-right: 30rpx;
	}

	.button {
		width: 170rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		border: 1rpx solid #999999;
		border-radius: 25rpx;
		font-size: 24rpx;
		color: #999999;
		margin-right: 20rpx;
	}

	.button_now {
		margin-right: 0;
	}

	.immediate-payment {
		background-image: linear-gradient(0deg, #fa3475 0%, #ff6699 100%), linear-gradient(#e0619d, #e0619d);
		color: #FFFFFF;
		width: 170rpx;
		height: 50rpx;
		line-height: 50rpx;
		font-size: 24rpx;
		text-align: center;
		border-radius: 25rpx;
		border: 0;
	}

	.immediate-payment::after {
		border: none;
	}

	/* 新写的样式 */
	.order_goods-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.order_goods-content image {
		width: 200rpx;
		height: 200rpx;
	}

	.goods_right_content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0 20rpx;
		height: 200rpx;
		position: relative;
	}

	.goods-title {
		font-size: 24rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-height: 32rpx;
	}

	.content_all_items {
		position: absolute;
		left: 20rpx;
		top: 76rpx;
		width: 74%;
		padding: 0 16rpx;
		background-color: #f0f0f0;
		color: #333333;
		font-size: 20rpx;
		line-height: 40rpx;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.item_content {
		flex: 1;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}

	.content_items {
		margin-left: 15rpx;
	}

	.content_items:first-child {
		margin-left: 0;
	}

	.content_all_items image,
	.show_item_content image {
		width: 32rpx;
		height: 32rpx;
	}

	.show_item_content image {
		transform: rotate(180deg);
	}

	.show_item_content {
		position: absolute;
		left: 20rpx;
		top: 76rpx;
		width: 74%;
		padding: 5rpx 16rpx;
		background-color: #f0f0f0;
		color: #333333;
		font-size: 20rpx;
		border-radius: 20rpx;
		display: flex;
		justify-content: space-between;
	}

	.goods_rel_price_sku_nums {
		display: flex;
		color: #fa3475;
		font-size: 24rpx;
		align-items: center;
	}

	.sku_nums {
		margin-left: 40rpx;
		font-size: 30rpx;
	}

	.rel_price text {
		font-size: 40rpx;
	}

	.goods_show {
		display: flex;
		width: 100%;
		align-items: center;
	}

	.goods_image_item {
		width: 80%;
	}

	.order_goods-image {
		overflow: hidden;
		white-space: nowrap;
		width: 100%;
	}

	.images_list {
		display: flex;
	}

	.right_number_show {
		font-size: 24rpx;
		text-align: center;
		padding-left: 20rpx;
	}

	.see_order {
		color: #fa3475;
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
