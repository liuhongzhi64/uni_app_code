<template>
	<view class="product">

		<view class="product-show" :style="[{'width':width+'rpx'}]" v-for="(i,k) in porductList" :class="(k%2==0)?'product-item-fl':'product-item-fr'"
		 :key='k' :data-name="i.title" @tap="gotoGoods">
			<view class="images">
				<image :src="i.url" mode="" :style="[{'width':width+'rpx','height':width+'rpx'}]"></image>
				<!-- <image :src="i.url" mode="" :style="[{'width':width+'rpx','height':'auto'}]"></image> -->
			</view>
			<view class="product-title"> <text class="closed" v-if="i.closed">{{i.closed}}</text> {{i.title}} </view>
			<view class="product-label" v-if="i.label.length>1">
				<view class="label-name" v-for="(i,k) in i.label" :key='k'> {{i}} </view>
			</view>
			<view class="activity" v-if="i.activity.length>1">
				<view class="activityName" v-for="(i,k) in i.activity" :key='k'> {{i}} </view>
			</view>
			
			<!-- 选择的项目类型 -->
			<view class="selected-items" v-if="i.selectedItems">
				#急速纳米美眼（尊享版）急速...
			</view>
			
			
			<view class="porduct-price-vip-cart" v-if="i.price">
				<view class="porduct-price">
					<text>￥</text>{{i.price}}
				</view>
				<view class="vip-cart-price" v-if="i.vipPrice>0">
					<text class="vip-cart">钻卡</text>
					<text class="vip-price">￥{{i.vipPrice}}</text>
				</view>
			</view>
			<!-- 预约和好评 -->
			<view class="subscribeAndGoodReputation" v-for="(i,k) in i.subscribeAndGoodReputation" :key='k'>
				<view class="subscribe-goodReputation">
					<!-- 预约 -->
					<view class="subscribe"> {{i.subscribe}}预约 </view>
					<!-- 好评 -->
					<view class="goodReputation"> {{i.goodReputation}}%好评 </view>
				</view>
			</view>
			<!-- 用户信息 -->
			<view class="user-message" v-if="i.headPortrait&&i.userName&&i.like&&!i.productUrl&&!i.productTitle">
				<view class="headPortrait-userName">
					<image :src="i.headPortrait" mode=""></image>
					<view class="user-name"> {{i.userName}} </view>
				</view>
				<view class="like">
					<image src="../static/images/like.png" mode=""></image>
					<text>{{i.like}}</text>
				</view>
			</view>
			<!-- 关联商品 -->
			<view class="associated-goods" v-if="i.headPortrait&&i.userName&&i.like&&i.productUrl&&i.productTitle">
				<view class="productUrl">
					<image :src="i.productUrl" mode=""></image>
				</view>
				<view class="product-title-price">
					<view class="productTitle"> {{i.productTitle}} </view>
					<view class="product-price"> <text>￥</text> {{i.prouctPrice}} </view>
				</view>
			</view>
		</view>
		
		<!-- 联调数据 -->
		<view class="product-show" :style="[{'width':width+'rpx'}]" v-for="(i,k) in porductLists" :class="(k%2==0)?'product-item-fl':'product-item-fr'"
		 :key='k' :data-name="i.goods_name" :data-id='i.encrypted_id' :data-sku_id = 'i.sku_id' @tap="changeGoods">
			<view class="images">
				<image src="https://mytest.hmzixin.com/upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg" mode="" :style="[{'height':width+'rpx'}]" ></image>
				<!-- <image :src="requestUrl + i.head_img" mode="" :style="[{'width':width+'rpx','height':width+'rpx'}]"></image> -->
			</view>
			<view class="product-title"> 
				{{i.goods_name}}
				<!-- <text class="closed" v-if="i.closed">{{i.closed}}</text> {{i.title}} -->
			</view>
			<view class="product-label">
				<view class="label-name" v-for="(i,k) in i.label.list" :key='k'> {{i}} </view>
			</view>
			<!-- <view class="activity" v-if="i.activity.length>1">
				<view class="activityName" v-for="(i,k) in i.activity" :key='k'> {{i}} </view>
			</view> -->			
			
			<view class="porduct-price-vip-cart" v-if="i.sale_price">
				<view class="porduct-price">
					<text>￥</text>{{i.sale_price}}
				</view>
				<view class="vip-cart-price" v-if="i.vipPrice>0">
					<text class="vip-cart">钻卡</text>
					<text class="vip-price">￥{{i.vipPrice}}</text>
				</view>
			</view>
			<!-- 预约和好评 -->
			<view class="subscribeAndGoodReputation" >
				<view class="subscribe-goodReputation">
					<!-- 预约 -->
					<view class="subscribe"> {{i.sales}}预约 </view>
					<!-- 好评 -->
					<view class="goodReputation"> {{i.rate}}%好评 </view>
				</view>
			</view>
			<!-- 用户信息 -->
			<view class="user-message" v-if="i.headPortrait&&i.userName&&i.like&&!i.productUrl&&!i.productTitle">
				<view class="headPortrait-userName">
					<image :src="i.headPortrait" mode=""></image>
					<view class="user-name"> {{i.userName}} </view>
				</view>
				<view class="like">
					<image src="../static/images/like.png" mode=""></image>
					<text>{{i.like}}</text>
				</view>
			</view>
			<!-- 关联商品 -->
			<view class="associated-goods" v-if="i.headPortrait&&i.userName&&i.like&&i.productUrl&&i.productTitle">
				<view class="productUrl">
					<image :src="i.productUrl" mode=""></image>
				</view>
				<view class="product-title-price">
					<view class="productTitle"> {{i.productTitle}} </view>
					<view class="product-price"> <text>￥</text> {{i.prouctPrice}} </view>
				</view>
			</view>
		</view>
		
		
		
		<!-- 日记版面 -->
		<view class="product-show" :style="[{'width':width+'rpx'}]" v-for="(i,k) in diaryList" :class="(k%2==0)?'product-item-fl':'product-item-fr'"
		 :key='k' :data-name="i.title" @tap="gotoDiary">
			<view class="images">
				<image :src="i.url" mode="" :style="[{'width':width+'rpx','height':width+'rpx'}]"></image>
			</view>
			<view class="product-title"> <text class="closed" v-if="i.closed">{{i.closed}}</text> {{i.title}} </view>
			<view class="product-label" v-if="i.label.length>1">
				<view class="label-name" v-for="(i,k) in i.label" :key='k'> {{i}} </view>
			</view>
			<view class="activity" v-if="i.activity.length>1">
				<view class="activityName" v-for="(i,k) in i.activity" :key='k'> {{i}} </view>
			</view>
			
			<!-- 选择的项目类型 -->
			<view class="selected-items" v-if="i.selectedItems">
				#急速纳米美眼（尊享版）急速...
			</view>
			
			
			
			<!-- 预约和好评 -->
			<view class="subscribeAndGoodReputation" v-for="(i,k) in i.subscribeAndGoodReputation" :key='k'>
				<view class="subscribe-goodReputation">
					<!-- 预约 -->
					<view class="subscribe"> {{i.subscribe}}预约 </view>
					<!-- 好评 -->
					<view class="goodReputation"> {{i.goodReputation}}%好评 </view>
				</view>
			</view>
			<!-- 用户信息 -->
			<view class="user-message" v-if="i.headPortrait&&i.userName&&i.like&&!i.productUrl&&!i.productTitle">
				<view class="headPortrait-userName">
					<image :src="i.headPortrait" mode=""></image>
					<view class="user-name"> {{i.userName}} </view>
				</view>
				<view class="like">
					<image src="../static/images/like.png" mode=""></image>
					<text>{{i.like}}</text>
				</view>
			</view>
			
		</view>

		<view class="crosswise-porduct" v-if="crosswisePorduct&&crosswisePorducts.length==0">
			<scroll-view class="product-items" scroll-x="true" :style="[{'height':height+'rpx'}]">
				<view class="product-item-content">
					<view class="productImgs" 
					 
					 v-for="(i,k) in crosswisePorduct" :key='k' :data-name="i.content" @tap="gotoGoods">
						<view :id="'productImg'+k" class="productItems" style="background-color: #FFFFFF;" 
						:style="[{'width':width+'rpx','border-radius': radius+'rpx'}]">
							<!-- 图片 -->
							<view class="Imgs" :style="[{'height':width+'rpx','width':width+'rpx'}]">
								<image :src="i.url" mode=""></image>
							</view>
							<!-- 内容 -->
							<view class="productContent"> {{i.content}} </view>
							<view class="product-label" v-if="i.label.length>1">
								<view class="label-name" v-for="(i,k) in i.label" :key='k'> {{i}} </view>
							</view>
							<view class="activity" v-if="i.activity.length>1">
								<view class="activityName" v-for="(i,k) in i.activity" :key='k'> {{i}} </view>
							</view>
							<!-- 价格 -->
							<view class="prouctPrice" v-if="i.newPrice">
								<view class="newprice"> <text>￥</text> {{i.newPrice}}</view>
								<view class="oldPrice" v-if="i.oldPrice"> <text>￥</text> {{i.oldPrice}} </view>
							</view>
							<!-- 预约和好评 -->
							<view class="subscribeAndGoodReputation" v-for="(i,k) in i.subscribeAndGoodReputation" :key='k'>
								<view class="subscribe-goodReputation" style="padding-top: 10rpx;padding-bottom: 17rpx;">
									<!-- 预约 -->
									<view class="subscribe"> {{i.subscribe}}预约 </view>
									<!-- 好评 -->
									<view class="goodReputation"> {{i.goodReputation}}%好评 </view>
								</view>
							</view>
						</view>
					</view>
					<view class="see-all">

						<view class="all" style="background-color: #FFFFFF;" :style="[{'height':height+'rpx','width':width+'rpx','line-height':height+'rpx'}]">
							查看更多> </view>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!-- 联调数据横向 -->
		<view class="crosswise-porduct" v-if="crosswisePorducts">
			<scroll-view class="product-items" scroll-x="true" >
				<view class="product-item-content">
					<view class="productImgs" v-for="(i,k) in crosswisePorducts" :key='k' :data-id='i.encrypted_id' :data-sku_id = 'i.sku_id' :data-name="i.goods_name" @tap="changeGoods" >
						<view :id="'productImg'+k" class="productItems" style="background-color: #FFFFFF;" :style="[{'width':width+'rpx'}]">
							<!-- 图片 -->
							<view class="Imgs" :style="[{'height':width+'rpx','width':width+'rpx'}]">
								<!-- <image src="../static/images/19.png" mode="" ></image> -->
								<image :src="requestUrl + i.head_img" mode="" ></image>
							</view>
							<!-- 内容 -->
							<view class="productContent"> {{i.goods_name}} </view>
							<view class="product-label">
								<view class="label-name" v-for="(i,k) in i.label.list" :key='k'> {{i}} </view>
							</view>
							<!-- <view class="activity" v-if="i.activity.length>1">
								<view class="activityName" v-for="(i,k) in i.activity" :key='k'> {{i}} </view>
							</view> -->
							<!-- 价格 -->
							<view class="prouctPrice" v-if="i.sale_price">
								<view class="newprice"> <text>￥</text> {{i.sale_price}}</view>
								<view class="oldPrice" v-if="i.market_price"> <text>￥</text> {{i.market_price}} </view>
							</view>
							<!-- 预约和好评 -->
							<view class="subscribeAndGoodReputation" v-if="i.sales&&i.rate">
								<view class="subscribe-goodReputation" >
									<!-- 预约 -->
									<view class="subscribe"> {{i.sales}}预约 </view>
									<!-- 好评 -->
									<view class="goodReputation"> {{i.rate}}%好评 </view>
								</view>
							</view>
						</view>
					</view>
					
				</view>
			</scroll-view>
		</view>
		

		<view class="change-porduct" v-if="changePorduct">
			<view class="refund-porduct-list" v-for="(i,k) in changePorduct" :key="k">
				<view class="top-change-all" v-if="i.title">
					<checkbox color="#ff5f93" v-if="i.title!='不支持在线退款商品' && i.title!='已核销商品'" />
					<view class="change-title" :style="[{'margin-left':i.title=='不支持在线退款商品'|| i.title=='已核销商品'?50+'rpx':0+'rpx'}]">
						{{i.title}} <text v-if="i.title=='不支持在线退款商品'">（需到院于收费室处退款)</text>
					</view>
				</view>
				<view class="porduct-list-item">
					<checkbox-group @change="checkboxChange">
						<label class="list-item" v-for="(item,index) in i.porduct" :key="item.id">
							<view class="left-checkbox" v-if="i.title!='不支持在线退款商品' && i.title!='已核销商品'&&i.title ">
								<checkbox color="#ff5f93" :value="item.id" :checked="item.checked" />
							</view>
							<view class="porduct-content" :style="[{'margin-left':i.title=='不支持在线退款商品'|| i.title=='已核销商品'?50+'rpx':0+'rpx'}]">
								<view class="order-porduct-images-name">
									<view class="porduct-images">
										<image :src="item.url" mode=""></image>
									</view>
									<view class="porduct-right" :style="[{'width':porductWidth+'rpx'}]">
										<view class="porduct-name" :style="[{'color':i.title=='不支持在线退款商品'|| i.title=='已核销商品'?'#999999':'#111111','width':porductWidth+'rpx'}]">{{item.porductName}}</view>
			
										<view class="content-item" @tap='openPorductContent(index,k)' v-if="!item.showPorduct">
											<view class="porduct-content-items">{{item.content}}</view>
											<image :src="item.arrowImages" mode=""></image>
										</view>
			
										<view class="show-porduct-content" v-if="item.showPorduct" @tap='openPorductContent(index,k)' :style="[{'color':i.title=='不支持在线退款商品'?'#999999':'#111111'}]">
											<view class="content-items" v-for="(i,k) in item.contentList" :key='k'>
												<view class="versions">版本: {{i.versions}} </view>
												<view class="specification">规格: {{i.specification}} </view>
												<view class="part">部位: {{i.part}} </view>
												<view class="doctor">医生: {{i.doctor}} </view>
											</view>
											<image :src="item.topImages" mode=""></image>
										</view>
			
										<view class="porduct-price-number" :style="[{'color':i.title=='不支持在线退款商品'|| i.title=='已核销商品'?'#999999':'#fa3475'}]">
											<view class="porduct-price"><text>￥</text>{{item.price}}</view>
											<view class="porduct-number">x{{item.porductNumber}} <text v-if="i.title">{{item.state}}</text> </view>
										</view>
			
			
									</view>
								</view>
			
								<view class="pay-for-the-order " v-if="i.title">
									<view class="pay-order-content">
										<view class=" total-price-on-line-pay">
											<view class="total-price" :style="[{'color':i.title=='不支持在线退款商品'|| i.title=='已核销商品'?'#999999':'#111111'}]">总价 <text>￥{{item.allPrice}}</text>
											</view>
											<view class="on-line-pay" :style="[{'color':i.title=='不支持在线退款商品'|| i.title=='已核销商品'?'#999999':'#fa3475'}]">在线支付 <text>￥{{item.onLinePay}}</text>
											</view>
										</view>
										<view class="discounts-hospital-pay">
											<view class="discounts" :style="[{'color':i.title=='不支持在线退款商品'|| i.title=='已核销商品'?'#999999':'#fa3475'}]">优惠 <text>￥{{item.discounts}}</text>
												<image src="../static/images/ask1.png" mode=""></image>
											</view>
											<view class="hospital-pay" :style="[{'color':i.title=='不支持在线退款商品'|| i.title=='已核销商品'?'#999999':'#111111'}]">到院再付 <text>￥{{item.hospitalPay}}</text>
											</view>
										</view>
										<view class="cope-with" :style="[{'color':i.title=='不支持在线退款商品'|| i.title=='已核销商品'?'#999999':'#111111'}]">应付 <text>￥{{item.copeWith}}</text>
										</view>
									</view>
								</view>
								
								<view class="after_sales" v-if="!i.title">
									<view class="left-hint">
										<view class="left-hint-content">该商品已超过售后期</view>
									</view>
									<view class="right-content">
										<view class="right-content-bottom" v-if="item.state =='after'">
											<button class="bottom" type="default" plain="true" >申请售后</button>
										</view>
										<view class="right-content-bottom" v-if="item.state =='evaluate'">
											<button class="bottom" type="default" plain="true">评价</button>
										</view>
										<view class="right-content-hint" v-if="item.state !='after'">该商品已申请售后</view>
									</view>
								</view>
								
								
							</view>
						</label>
					</checkbox-group>
				</view>
			</view>
		</view>
		
	</view>

</template>

<script>
	export default {
		props: {
			porductList: Array,
			changePorduct: Array,
			crosswisePorduct: Array,
			crosswisePorducts: Array,
			requestUrl:String,
			width: Number,
			height: Number,
			porductWidth:Number,
			radius:Number
		},
		data(){
			return {
				changePorductNumber:[],				
			}
		},
		onLoad:function(){
			this.request = this.$request
			let that = this
			console.log(porductList)
		},
		methods: {
			gotoGoods: function(e) {
				let goods = e.currentTarget.dataset.name
				uni.navigateTo({
					url: `/pages/goods/goods_detail?goods=${goods}`,
				})
			},
			// 联调
			changeGoods: function(e) {
				
				let that = this
				
				let id = e.currentTarget.dataset.id
				let sku_id = e.currentTarget.dataset.sku_id
				
				uni.navigateTo({
					url: `/pages/goods/goods_detail?id=${id}&&sku_id=${sku_id}`,
				})
				// console.log(dataInfo)
				
				
			},
			gotoDiary:function(e){
				uni.navigateTo({
					url: `/pages/diary/diary_detail`,
				})
			},
			checkboxChange: function(e) {
				
				let value = e.detail.value
				let list = []
				list.push(value.join())
				this.changePorductNumber =  [...new Set(this.changePorductNumber.concat(list,this.changePorductNumber))]  
				this.$emit('checkboxChange', this.changePorductNumber)
			},
			openPorductContent:function(index,k){
				// console.log(index , k)
				this.$emit('openPorductContent',index ,k)
			},
		}
	}
</script>

<style scoped>
	.product-item-fl {
		float: left;
	}

	.product-item-fr {
		float: right;
	}

	.product-show {
		/* width: 100%; */
		height: 100%;
		display: flex;
		/* justify-content: space-around; */
		flex-direction: column;
		background-color: #FFFFFF;
		white-space: normal;
		border-radius: 16rpx;
		margin-top: 20rpx;
		padding-bottom: 20rpx;
	}
	.images{
		width: 100%;
		height: 100%;
	}
	.images image {
		border-top-left-radius: 16rpx;
		border-top-right-radius: 16rpx;
		width: 100%;
		height: 100%;
	}

	.product-title {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-size: 24rpx;
		padding: 0 20rpx;
		color: #111111;
		font-weight: lighter;
		margin-top: 13rpx;
	}

	.closed {
		color: #FFFFFF;
		display: inline-block;
		width: 84rpx;
		height: 26rpx;
		font-size: 18rpx;
		background-color: #b60114;
		border-radius: 6rpx;
		text-align: center;
		padding: 0 5rpx;
		margin-right: 10rpx;
	}

	.product-label {
		width: 80%;
		display: flex;
		flex-wrap: wrap;
		color: #FFFFFF;
		font-size: 16rpx;
		padding: 20rpx 20rpx 0;
	}

	.crosswise-porduct .product-label {
		padding: 10rpx 20rpx 0;
	}

	.label-name {
		background-color: #999999;
		text-align: center;
		padding: 5rpx 10rpx;
		margin-right: 10rpx;
		border-radius: 4rpx;
	}

	.activity {
		display: flex;
		font-size: 16rpx;
		color: #fa3475;
		padding: 20rpx 20rpx 0;
		flex-wrap: wrap;
	}

	.activityName {
		border: 1rpx solid #fa3475;
		margin-right: 10rpx;
		padding: 5rpx;
	}
	
	.selected-items{
		color: #999999;
		font-size: 20rpx;
		line-height: 44rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		width: 286rpx;
		padding-left: 20rpx;
	}

	.porduct-price-vip-cart {
		display: flex;
		align-items: center;
		padding-top: 20rpx;
	}

	.porduct-price {
		font-size: 32rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		color: #fa3475;
	}

	.porduct-price text {
		font-size: 24rpx;
	}

	.vip-cart-price {
		display: flex;
		align-items: center;
	}

	.vip-cart {
		background-image: linear-gradient(0deg, #000000 0%, #2c2c2c 100%), linear-gradient(#282828, #282828);
		font-size: 16rpx;
		padding: 7rpx 10rpx;
		line-height: 20rpx;
		text-align: center;
		color: #fefefe;
		border-top-left-radius: 8rpx;
		border-bottom-left-radius: 8rpx;
	}

	.vip-price {
		font-size: 20rpx;
		color: #282828;
		padding: 4rpx 8rpx;
		line-height: 20rpx;
		text-align: center;
		border: 1rpx solid #282828;
		border-top-right-radius: 10rpx;
		border-bottom-right-radius: 10rpx;
	}

	.subscribeAndGoodReputation {
		font-size: 20rpx;
		padding: 20rpx 20rpx 0;
	}

	.crosswise-porduct .subscribeAndGoodReputation {
		width: 90%;
		/* padding: 0 10rpx; */
	}

	.subscribe-goodReputation {
		display: flex;
		justify-content: space-between;
		text-align: center;
		border-top: 1rpx solid #EEEEEE;
		padding: 20rpx 0 0;
	}

	.subscribe {
		color: #CCCCCC;
	}

	.goodReputation {
		color: #fa3475;
	}

	.user-message {
		display: flex;
		justify-content: space-between;
		padding: 20rpx 20rpx 0;
	}

	.headPortrait-userName {
		display: flex;
		font-size: 20rpx;
		align-items: center;
	}

	.headPortrait-userName image {
		width: 48rpx;
		height: 48rpx;
		border-radius: 24rpx;
		margin-right: 5rpx;
	}

	.like {
		display: flex;
		align-items: center;
		color: #b2b2b2;
		font-size: 30rpx;
	}

	.like image {
		width: 40rpx;
		height: 40rpx;
		border-radius: 20rpx;
		margin-right: 10rpx;
		background-color: #d0d0d0;
	}

	.associated-goods {
		display: flex;
		justify-content: space-between;
		padding: 20rpx 20rpx 0;
		font-size: 20rpx;
	}

	.associated-goods image {
		width: 96rpx;
		height: 96rpx;
	}

	.productTitle {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		padding: 0 10rpx;
	}

	.product-price {
		padding: 10rpx;
		color: #fa3475;
		font-size: 32rpx;
	}

	.product-price text {
		font-size: 24rpx;
		margin-right: 10rpx;
	}

	/* 横向商品 */
	.crosswise-porduct {
		width: 100%;
	}

	.product-items {
		overflow: hidden;
		white-space: nowrap;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.productImgs {
		display: inline-block;
		font-size: 20rpx;
		margin-right: 30rpx;
		padding-bottom: 18rpx;
		border-radius: 24rpx;
	}
	.productItems {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			height: 100%;
			white-space: normal;
		padding-bottom: 18rpx;
		border-radius: 24rpx;	
	}
	.Imgs image {
		width: 100%;
		height: 100%;
	}

	/* 商品 */

	.product-item-content {
		display: flex;
		/* align-items: center; */
		width: 100%;
		height: 100%;
	}

	

	.productContent {
		width: 220rpx;
		margin-top: 12rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		color: #2e2e2e;
		font-weight: lighter;
		text-align: center;
		text-align: left;
	}


	.productItems image {
		width: 100%;
		height: 100%;
	}

	.prouctPrice {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 10rpx 0 0 ;
		text-align: left;
		width: 100%;
	}

	.residueProduct {
		text-align: center;
	}

	.prouctPrice text {
		font-size: 20rpx;
	}

	.newprice {
		color: #EF6174;
		font-size: 30rpx;
		padding-left: 20rpx;
	}

	.oldPrice {
		text-decoration: line-through;
		line-height: 30rpx;
		color: #2e2e2e;
		font-weight: lighter;
	}

	.see-all {
		text-align: center;
	}
	
	.refund-porduct-list {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		padding: 30rpx 30rpx 40rpx;
		margin-top: 20rpx;
	}
	
	.top-change-all {
		display: flex;
		align-items: center;
		margin-bottom: 33rpx;
	}
	
	.change-title {
		font-size: 28rpx;
		color: #111111;
		font-weight: bold;
	}
	.change-title text{
		font-size: 24rpx;
		color: #fa3475;
		margin-left: 10rpx;
	}
	.list-item{
		display: flex;
		align-items: center;
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
		width: 400rpx;
		padding-left: 20rpx;
	}
	.porduct-name{
		width: 400rpx;
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
	.porduct-number text{
		margin-left: 33rpx;
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
	
	.after_sales{
		padding: 20rpx 0 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.left-hint-content{
		color: #999999;
		font-size: 24rpx;
	}
	.right-content-bottom .bottom{
		width: 170rpx;
		height: 50rpx;
		background-image: linear-gradient(0deg, 
			#fa3475 0%, 
			#ff6699 100%), 
		linear-gradient(
			#e0619d, 
			#e0619d);
		background-blend-mode: normal, 
			normal;
		border-radius: 25rpx;
		text-align: center;
		line-height: 50rpx;
		border: 0;
		font-size: 24rpx;
		color: #FFFFFF;
	}
	.right-content-hint{
		font-size: 24rpx;
		color: #111111;
	}
	
	
	
</style>
