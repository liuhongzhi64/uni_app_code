<template>
	<view class="doctor"> 
		医生
		<checkbox-group class="allBtn" @change="checkChangeAll">
			<checkbox value="cg"  :checked="allchecked" />全选
		</checkbox-group>
		<!-- 多选 -->
		<checkbox-group @change="checkboxChange">
			<label class="checked-item" v-for="(item,index) in items" :key="item.value">
				<view>
					<checkbox :value="item.value" :checked="item.checked" />
				</view>
				<view>{{item.name}}</view>
			</label>
		</checkbox-group>
		
		<view class="left-product">
			<view class="product-show" v-for="(i,k) in leftProduct" :key='k' :data-name="i.title" @tap="gotoGoods">
				<view class="images">
					<image :src="i.url" mode=""></image>
				</view>
				<view class="product-title"> <text class="closed" v-if="i.closed">{{i.closed}}</text> {{i.title}} </view>
				<view class="product-label" v-if="i.label.length>1">
					<view class="label-name" v-for="(i,k) in i.label" :key='k'> {{i}} </view>
				</view>
				<view class="activity" v-if="i.activity.length>1">
					<view class="activityName" v-for="(i,k) in i.activity" :key='k'> {{i}} </view>
				</view>
				<view class="porduct-price-vip-cart">
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
			</view>
		
		</view>
		
		<view class="right-product">
			<view class="product-show" v-for="(i,k) in rightProduct" :key='k' :data-name="i.title" @tap="gotoGoods">
				<view class="images">
					<image :src="i.url" mode=""></image>
				</view>
				<view class="product-title"> <text class="closed" v-if="i.closed">{{i.closed}}</text> {{i.title}} </view>
				<view class="product-label" v-if="i.label.length>1">
					<view class="label-name" v-for="(i,k) in i.label" :key='k'> {{i}} </view>
				</view>
				<view class="activity" v-if="i.activity.length>1">
					<view class="activityName" v-for="(i,k) in i.activity" :key='k'> {{i}} </view>
				</view>
				<view class="porduct-price-vip-cart">
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
		
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				allchecked:false,
				items: [{
						value: 'USA',
						name: '美国'
					},
					{
						value: 'CHN',
						name: '中国',
						checked: 'true'
					},
					{
						value: 'BRA',
						name: '巴西'
					},
					{
						value: 'JPN',
						name: '日本'
					},
					{
						value: 'ENG',
						name: '英国'
					},
					{
						value: 'FRA',
						name: '法国'
					}
				]
			}
		},
		methods: {
			checkChangeAll: function(e) {
				this.allchecked = !this.allchecked
				let items = this.items
				if(this.allchecked){
					console.log(this.allchecked)
					for (var i = 0, lenI = items.length; i < lenI; ++i) {
						const item = items[i]
						this.$set(item, 'checked', true)
					}
				}else{
					console.log(this.allchecked)
					for (var i = 0, lenI = items.length; i < lenI; ++i) {
						const item = items[i]
						this.$set(item, 'checked', false)
					}
				}
			},
			checkboxChange: function(e) {
				let items = this.items,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
				
				for(let i=0;i<items.length;i++){
					// 如果选中了全部，则全选选中
					for(let i=0;i<items.length;i++){
						if(items[i].checked == true){
							this.allchecked = true
						}else{
							this.allchecked = false
						}
					}
				}
			},
			
			haveNumber:function(e,id){
				console.log(this.porductNumber)
				for(let i=0;i<this.contentList.length;i++){
					for(let k=0;k<this.contentList[i].productList.length;k++){
						for(let h=0;h<this.contentList[i].productList[k].itemList.length;h++){
							const item = this.contentList[i].productList[k].itemList[h]
							if (parseInt(id) == this.contentList[i].productList[k].itemList[h].id ) {
								let checkedNumber = parseInt(this.contentList[i].productList[k].itemList[h].checkedNumber)
								checkedNumber = checkedNumber+e
								this.$set(item, 'checkedNumber', parseInt(checkedNumber))
								// this.contentList[i].productList[k].itemList[h].checkedNumber = checkedNumber
								
								if(this.contentList[i].productList[k].itemList[h].checkedNumber <= 1 && e ==-1 ){
									this.subtract = '../../static/images/subtract.png'
									this.contentList[i].productList[k].itemList[h].checkedNumber = 1
								}
								else{
									this.subtract = '../../static/images/subtract1.png'
								}
								return 
							}							
						}				
					}
				}
			},
			setPorductNumber:function(e){
				let id= e.currentTarget.id
				let value = e.target.value;
				// for(let i=0;i<this.contentList.length;i++){
				// 	for(let k=0;k<this.contentList[i].productList.length;k++){
				// 		for(let h=0;h<this.contentList[i].productList[k].itemList.length;h++){
				// 			const item = this.contentList[i].productList[k].itemList[h]
				// 			console.log(item)
				// 			if (id.includes(item.id)) {
				// 				this.$set(item, 'checkedNumber', parseInt(value))
				// 			}
				// 		}
						
				// 	}
				// }
				
				this.porductNumber = value
			}
		}
	}
</script>

<style scoped>
.left-product,
	.right-product {
		width: 350rpx;
		display: flex;
		flex-direction: column;
	}

	.product-show {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		background-color: #FFFFFF;
		white-space: normal;
		border-radius: 16rpx;
		margin-top: 20rpx;
		padding-bottom: 20rpx;
	}

	.images image {
		width: 350rpx;
		height: 350rpx;
		border-top-left-radius: 16rpx;
		border-top-right-radius: 16rpx;
	}

	.product-title {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 24rpx;
		padding: 0 20rpx;
		color: #111111;
		font-weight: lighter;
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
		display: flex;
		color: #FFFFFF;
		font-size: 16rpx;
		padding: 20rpx 20rpx 0;
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

	.porduct-price-vip-cart {
		display: flex;
		align-items: center;
		padding-top: 20rpx;
	}

	.porduct-price {
		color: #fa3475;
		font-size: 32rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
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
		font-size: 24rpx;
		padding: 20rpx 20rpx 0;
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
</style>