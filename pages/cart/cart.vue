<template>
	<view class="cart">
		<view class="top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px'}]"
		 v-if="!isCartEmpty">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back" @tap='goBack'>
					<image src="../../static/images/return.png" mode=""></image>
				</view>
				<view class="title" :style="[{'padding-right':80+'rpx'}]">
					<view class="title-name"> 购物车 </view>
				</view>
			</view>
		</view>

		<view class="top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px'}]"
		 v-if="isCartEmpty">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back" @tap='goBack'>
					<image src="../../static/images/return.png" mode=""></image>
				</view>
				<view class="title-compile" :style="[{'padding-right':menuPaddingRight+'px'}]">
					<view class="title" :style="[{'padding-left':menuWidth+5+'px'}]">购物车</view>
					<view class="compile" :style="[{'padding-right':menuWidth+5+'px'}]"> 编辑 </view>
				</view>

			</view>
		</view>

		<view class="cart-content" :style="[{'padding-top':menuBottom+10+'px'}]">
			<!-- 购物车为空 -->
			<view class="empty-cart" v-if="!isCartEmpty">
				<view class="empty-cart-image">
					<image src="../../static/images/cartBg.png" mode=""></image>
				</view>
				<view class="empty-cart-text"> 购物车还是空的哟~ </view>
				<view class="go-stroll"> 去逛逛 </view>
			</view>
			<!-- 购物车不为空 -->
			<view class="cart-have-product" v-if="isCartEmpty">
				<view class="product-to-nav">
					<view class="product-name" v-for="(i,k) in productNameList" :key='k' :class="{checkedPorduct :btnnum == k}" @tap="changePorduct(k)">
						<view class="product-item-name-line">
							{{ i.name }} <text v-if="i.name=='全部'">({{cartNumber}})</text> <text v-if="i.name!='全部'">({{i.number}})</text>
							<view :class="{checkedLine :btnnum == k}"> <view></view> </view>
						</view>	
					</view>			
				</view>

				<view class="end-cont" :class="{dis:btnnum == index}" v-for="(item,index) in contentList" :key="index">
					<view style="font-size: 24rpx;text-align: center;">{{item.name}}</view>
					<view class="shoping-cart" v-if="item.productList.length>1">
						<view class="cart-shopping-show" v-for="(items,k) in item.productList" :key='k'>
							<!-- 全选 -->
							<view class="change-check-see-more">
								<view class="change-check">
									<label @change="checkChangeAll"> <checkbox value="cg" color='#007AFF'  :checked="allchecked" /> <text>{{items.title}} </text> </label>
								</view>
								<view class="see-more" v-if="items.isActivity"> 查看更多> </view>
								<view class="add-on-item" v-if="!items.isActivity"> 去凑单 </view>
							</view>
							
							<!-- 优惠活动 -->
							<view class="special-offer" v-if="!items.isActivity">
								<view class="specific-activity-item">
									<view class="full-reduction-activity-see-discounts">
										<view class="full-reduction-specific-activity"> 
											<view class="full-reduction"> 满减 </view>
											<view class="specific-activity"> 每满5000元减500元 </view>
										</view>
										
										<view class="see-discounts"> 看优惠 >  </view>
									</view>
									
									<view class="full-reduction-activity-see-discounts">
										<view class="full-reduction-specific-activity"> 
											<view class="full-reduction"> 满减 </view>
											<view class="specific-activity"> 满2件减80元 </view>
										</view>				
									</view>
									<view class="full-reduction-activity-see-discounts">
										<view class="full-reduction-specific-activity"> 
											<view class="full-reduction"> 折扣 </view>
											<view class="specific-activity"> 满4件打8.5折 </view>
										</view>				
									</view>
									<view class="full-reduction-activity-see-discounts">
										<view class="full-reduction-specific-activity"> 
											<view class="full-reduction"> 赠品 </view>
											<view class="specific-activity"> 满6件送HB面膜10盒 </view>
										</view>				
									</view>
									<view class="full-reduction-activity-see-discounts">
										<view class="full-reduction-specific-activity"> 
											<view class="full-reduction"> 卡券 </view>
											<view class="specific-activity"> 满100000元减1000元 </view>
										</view>				
									</view>
									<view class="full-reduction-activity-see-discounts">
										<view class="full-reduction-specific-activity"> 
											<view class="full-reduction"> 卡券 </view>
											<view class="specific-activity">
												<text>距活动结束还剩 </text> 
												<view class="activity-time">
													<view class="houses"> 23 </view> <text>:</text>
													<view class="minute"> 58 </view> <text>:</text>
													<view class="second"> 23 </view>
												</view>
											</view>
										</view>				
									</view>
								</view>
								
							</view>
							
							<!-- 商品展示 -->
							<view class="product-item-content" v-for="(i,k) in items.itemList" :key='k'>
								<view class="checkbox-item"> <checkbox :value="i.id" color='#007AFF'  :checked="i.checked" /> </view>
								
								<view class="product-item-show">
									<view class="porduct-item-images"> <image :src="i.url" mode=""></image> </view>
									<view class="name-price-purchaseLimitationNumber-checkedNumber">
										<view class="porduct-item-name"> {{i.porductName}} </view>
										<view class="versions"> 
											<text class="versions-name"> {{i.versions}} </text> 
											<image class="unfold" src="../../static/images/unfold.png" mode=""></image>
										</view>
										<view class="porduct-item-price-purchaseLimitationNumber-checkedNumber">
											<view class="porduct-item-price-purchaseLimitationNumber">
												<view class="porduct-item-price"> 
													￥<text class="price">{{i.porductPrice}}</text> 
													<text class="member-price" v-if="i.member">会员价</text> 
												</view>
												<view class="purchaseLimitationNumber"> *限购{{i.purchaseLimitationNumber}}件 </view>
											</view>
											<view class="checkedNumber">
												<view class="subtract" :data-id='i.id' :data-set='-1' @tap="setNumber"> <image :src="i.subtract" mode=""></image> </view>
												<view class="input"> <input type="number" :id='i.id'  :value="i.checkedNumber" @input='setPorductNumber' maxlength="2" /> </view>
												<view class="add" :data-id='i.id' :data-set='1' @tap="setNumber"> <image src="../../static/images/add.png" mode=""></image> </view>
											</view>
										</view>
									</view>
								</view>
							</view>
							
						</view>
					</view>
				</view>
			</view>

			<view class="special-performance" v-if="!isCartEmpty">
				<view class="specialList">
					<view class="scrollText">
						<view class="special-name"> 化妆品 </view>
						<view class="special-content"> 全场商品满2000减200sadas阿萨大师 </view>
						<view class="special-go"> GO! </view>
					</view>
					<view class="special-image"> <img src="../../static/images/18.png"></img> </view>
				</view>
				<view class="specialList two">
					<view class="scrollText">
						<view class="special-name"> 化妆品 </view>
						<view class="special-content"> 全场商品满2000减200sadas阿萨大师 </view>
						<view class="special-go"> GO! </view>
					</view>
					<view class="special-image"> <img src="../../static/images/18.png"></img> </view>
				</view>
				<view class="specialList three">
					<view class="scrollText">
						<view class="special-name"> 化妆品 </view>
						<view class="special-content"> 全场商品满2000减200sadas阿萨大师 </view>
						<view class="special-go"> GO! </view>
					</view>
					<view class="special-image"> <img src="../../static/images/18.png"></img> </view>
				</view>
			</view>

			<view class="recommend-to-you">
				<view class="related-title"> <view class="line"></view> <view>为你推荐</view>
				</view>

				<scroll-view scroll-y class="recommend-to-you-list">
					<template>
						<view class="subject-content">
							<porduct :width = 350  :porductList='productLists'  ></porduct>
							
						</view>
					</template>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import porduct from "../../components/porduct.vue";
	export default {
		components: {
			porduct
		},
		props: {
			cartNumber: {
				type: Number,
				default: 1
			},
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				menuPaddingRight: 0,
				specialList: [{
						id: 1,
						name: '化妆品',
						content: '全场商品满2000减200sadas阿萨大师',
						url: '../../static/images/18.png'
					},
					{
						id: 3,
						name: '化妆品',
						content: '全场商品满2000减200',
						url: '../../static/images/18.png'
					},
					{
						id: 4,
						name: '化妆品',
						content: '全场商品满2000减200',
						url: '../../static/images/18.png'
					},
				],
				productLists: [
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
				productNameList: [{
						name: '全部',
						number: 25,
					},
					{
						name: '降价',
						number: 3,
					},
					{
						name: '医美',
						number: 10,
					},
					{
						name: '护肤品',
						number: 12,
					},
				],
				btnnum: 0,
				contentList: [{
						name: '全部'
					},
					{
						name: '降价'
					},
					{
						name: '医美'
					},
					{
						name: '护肤品'
					},
				],
				productList: [],
				allchecked:false,
				isActivity:false,//是否凑单
				isCartEmpty:true,//
			}
		},
		onLoad: function(option) {
			let that = this
			console.log(that.cartNumber,option.cartNumber)
			
			if(option.cartNumber){
				that.cartNumber = parseInt(option.cartNumber) 
				if(that.cartNumber>0){
					this.isCartEmpty = true
				}else{
					this.isCartEmpty =false
				}
			}
			
		},
		onReady() {
			let that = this;
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					let menu = uni.getMenuButtonBoundingClientRect();
					that.menuWidth = menu.width
					that.menuTop = menu.top
					that.menuHeight = menu.height
					that.menuLeft = menu.left
					that.menuBottom = menu.bottom
					that.menuPaddingRight = res.windowWidth - menu.right
				}
			})
			that.changePorduct()
		},
		methods: {
			// 返回
			goBack: function() {
				console.log('back')
				uni.navigateBack({
					delta: 1
				});
			},
			// 触底函数
			onReachBottom: function() {
				console.log("到底了")
			},
			// 选中商品
			changePorduct: function(e = 0) {
				this.btnnum = e
				if (e == 0) {
					for (let i in this.contentList) {
						this.contentList[e].productList = [
							{
								title: '双眼皮',
								isActivity:false,//是否凑单
								itemList:[
									{
										id:'12',
										url:'../../static/images/19.png',
										porductName:'这是正常的标题页，这是正常的标题页这是正常的标题页,超出两行直接显示省略号....',
										versions:'版本：尊贵版；规格：敖如拉敖如拉。。。',//版本	
										porductPrice:19800,
										member:false,
										purchaseLimitationNumber:1,//限购数量
										checkedNumber:1,//商品数量
										checked:false,//选中商品
										subtract:'../../static/images/subtract.png',
										
									},
									{
										id:'1',
										url:'../../static/images/19.png',
										porductName:'这是正常的标题页，这是正常的标题页这是正常的标题页,超出两行直接显示省略号....',
										versions:'版本：尊贵版；规格：敖如拉敖如拉。。。',//版本	
										porductPrice:12800,
										member:true,
										purchaseLimitationNumber:1,//限购数量
										checkedNumber:1,//商品数量
										checked:false,//选中商品
										subtract:'../../static/images/subtract.png',
									}
								],
							},
							{
								title: '618专场',
								isActivity:true,//是否凑单
								itemList:[
									{
										id:'16',
										url:'../../static/images/19.png',
										porductName:'这是正常的标题页，这是正常的标题页这是正常的标题页,超出两行直接显示省略号....',
										versions:'版本：尊贵版；规格：敖如拉敖如拉。。。',//版本	
										porductPrice:12800,
										member:true,
										purchaseLimitationNumber:1,//限购数量
										checkedNumber:1,//商品数量
										checked:false,//选中商品
										subtract:'../../static/images/subtract.png',
									}
								]
							},
						]
						this.contentList[i].productList = []
					}
				} else if (e == 1) {
					for (let i in this.contentList) {
						this.contentList[e].productList = [{
							title: '这是标题，只显示两行就显示为省略号...'
						}]
						this.contentList[i].productList = []
					}
				}
			},
			
			// 点击全选
			checkChangeAll: function(e) {
				this.allchecked = !this.allchecked
			},
			
			setNumber:function(event){
				// console.log(event.currentTarget.dataset)
				let e = event.currentTarget.dataset.set
				let id = event.currentTarget.dataset.id
				this.haveNumber(e,parseInt(id))
				
			},
			
			haveNumber:function(e,id){
				// console.log(this.porductNumber)
				for(let i=0;i<this.contentList.length;i++){
					for(let k=0;k<this.contentList[i].productList.length;k++){
						for(let h=0;h<this.contentList[i].productList[k].itemList.length;h++){
							const item = this.contentList[i].productList[k].itemList[h]
							if (parseInt(id) == this.contentList[i].productList[k].itemList[h].id ) {
								let checkedNumber = parseInt(this.contentList[i].productList[k].itemList[h].checkedNumber)
								checkedNumber = checkedNumber+e
								this.contentList[i].productList[k].itemList[h].checkedNumber = checkedNumber
								this.$forceUpdate()
								if(this.contentList[i].productList[k].itemList[h].checkedNumber <= 1 && e ==-1 ){
									this.contentList[i].productList[k].itemList[h].subtract = '../../static/images/subtract.png'
									this.contentList[i].productList[k].itemList[h].checkedNumber = 1
								}
								else{
									this.contentList[i].productList[k].itemList[h].subtract = '../../static/images/subtract1.png'
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
				for(let i=0;i<this.contentList.length;i++){
					for(let k=0;k<this.contentList[i].productList.length;k++){
						for(let h=0;h<this.contentList[i].productList[k].itemList.length;h++){
							const item = this.contentList[i].productList[k].itemList[h]
							// console.log(item,value)
							if (parseInt(id) == this.contentList[i].productList[k].itemList[h].id ) {
								this.contentList[i].productList[k].itemList[h].checkedNumber = parseInt(value)
							}
							if(parseInt(value)<=0){
								console.log(value)
								value = 1
								console.log(value)
								this.contentList[i].productList[k].itemList[h].checkedNumber = 1
							}
							// if (id.includes(item.id)) {
							// 	this.$set(item, 'checkedNumber', parseInt(value))
							// }
						}
						
					}
				}
				
			},
				
		}
	}
</script>

<style scoped>
	.top-bar {
		color: #FFFFFF;
		background-image: linear-gradient(-49deg, #000000 0%, #111111 100%);
		text-align: center;
		font-size: 40rpx;
		position: fixed;
		z-index: 100;
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

	.title-compile {
		display: flex;
		flex: 1;
		align-items: center;
		font-size: 38rpx;
	}


	.title-compile .compile {
		font-size: 24rpx;
	}

	.title {
		flex: 1;
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

	.specialList {
		width: 230rpx;
		height: 160rpx;
		background-image: linear-gradient(0deg, #f6a000 0%, #ffb935 100%);
		border-radius: 16px;
		font-size: 28rpx;
		color: #FFFFFF;
		position: relative;
		margin-right: 10rpx;
	}

	.two {
		background-image: linear-gradient(0deg, #fe53d5 0%, #fd6fdb 100%);
	}

	.three {
		background-image: linear-gradient(140deg, #ff6851 0%, #fe492e 100%);
		margin-right: 0;
	}

	.scrollText {
		position: absolute;
		padding: 16rpx 20rpx;
		top: 0;
		left: 0;
	}
	.checkedLine{	
		padding: 0 20rpx;
	}
	.checkedLine view{
		height: 4rpx;
		background-color: #fa3475;
	}
	.special-name {
		font-weight: bolder;
	}

	.special-content {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-height: 22rpx;
		width: 120rpx;
		font-size: 18rpx;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}

	.special-go {
		width: 60rpx;
		height: 26rpx;
		line-height: 26rpx;
		padding: 0 10rpx;
		text-align: center;
		background-color: #e87a07;
		box-shadow: 0rpx 1rpx 2rpx 0rpx rgba(145, 94, 0, 0.35);
		border-radius: 13rpx;
		font-size: 22rpx;
		font-weight: normal;
		font-stretch: normal;
		font-style: italic;
	}

	.specialList .special-image {
		position: absolute;
		top: -50rpx;
		left: 42rpx;
	}

	.specialList .special-image image {
		width: 200rpx;
		height: 210rpx;

	}

	.recommend-to-you {
		padding: 0 20rpx;
	}

	.line {
		width: 6rpx;
		height: 24rpx;
		background-color: #fa3576;
		margin-right: 20rpx;
		margin-top: 4rpx;
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
		display: flex;
		justify-content: space-between;
	}

	.recommend-to-you-list {
		padding-bottom: 20rpx;
	}


	.product-to-nav {
		display: flex;
		justify-content: space-around;
		font-size: 24rpx;
		background-color: #FFFFFF;	
		text-align: center;
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
	
	/* 购物车商品展示 */
	.cart-shopping-show{
		padding: 30rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-top: 20rpx;
	}
	.change-check-see-more{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;
	}
	.change-check text{
		font-weight: bolder;
		margin-left: 20rpx;
	}
	.see-more{
		font-size: 24rpx;
	}
	
	.add-on-item{
		width: 88rpx;
		height: 32rpx;
		background-image: linear-gradient(90deg,  #fa3475 0%, #ff6699 100%);
		border-radius: 16rpx;
		text-align: center;
		font-size: 20rpx;
		color: #FFFFFF;
	}
	
	.special-offer{
		padding: 0rpx 10rpx 10rpx 70rpx;
	}
	.full-reduction-activity-see-discounts{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 20rpx;
		margin-top: 20rpx;
	}
	
	.full-reduction-specific-activity{
		display: flex;
		align-items: center;
	}
	
	.full-reduction{
		margin-right: 12rpx;
		width: 80rpx;
		height: 30rpx;
		line-height: 30rpx;
		text-align: center;
		background-color: #ffe8f0;
		border-radius: 15rpx;
		color: #fa3475;
	}
	
	.see-discounts{
		font-size: 24rpx;
	}
	.specific-activity{
		display: flex;
	}
	
	.activity-time{
		display: flex;
		margin-left: 10rpx;
		text-align: center;
	}
	
	.activity-time text{
		color: #fa3475;
		margin:0 8rpx;
	}
	.houses,.minute,.second{
		width: 30rpx;
		height: 30rpx;
		line-height: 30rpx;
		font-size: 20rpx;
		background-color: #fa3475;
		border-radius: 4rpx;
		color: #FFFFFF;
		margin-left: 5rpx;
	}
	
	.product-item-content{
		display: flex;	
		padding-top: 20rpx;
	}
	.product-item-show{
		display: flex;
		margin-left: 20rpx;
		justify-content: space-between;
		/* align-items: center; */
		font-size: 24rpx;
	}
	.porduct-item-images image{
		width: 200rpx;
		height: 200rpx;
		margin-right: 20rpx;
	}
	.name-price-purchaseLimitationNumber-checkedNumber{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.porduct-item-price-purchaseLimitationNumber-checkedNumber{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.porduct-item-price-purchaseLimitationNumber{
		color: #fa3475;
	}
	.porduct-item-price{
		display: flex;
		align-items: center;
	}
	.porduct-item-price .price{
		font-size: 40rpx;
		margin-left: 5rpx;
	}
	.member-price{
		width: 64rpx;
		height: 28rpx;
		line-height: 28rpx;
		background-image: linear-gradient(0deg,  #000000 0%,  #2c2c2c 100%), linear-gradient( #282828, #282828);
		background-blend-mode: normal,  normal;
		border-radius: 4rpx;
		font-size: 16rpx;
		color: #fefefe;
		text-align: center;
		margin-left: 5rpx;
	}
	.purchaseLimitationNumber{
		font-size: 20rpx;
		margin-top: 10rpx;
	}
	
	.checkedNumber{
		display: flex;
		width: 160rpx;
		height: 40rpx;
		line-height: 40rpx;
		align-items: center;
		border: solid 1rpx #f0f0f0;
	}
	.checkedNumber image{
		width: 32rpx;
		height: 32rpx;
		
		
	}
	.input{
		flex: 1;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		background-color: #f0f0f0;
	}
	.input input{
		width: 50%;
	}
	.subtract,.add{
		width: 42rpx;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	
	.porduct-item-name{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	.versions{
		width: 360rpx;		
		background-color: #f0f0f0;
		border-radius: 20rpx;
		font-size: 20rpx;
		text-align: center;
		display: flex;
		align-items: center;
	}
	.versions-name{
		width: 280rpx;
		height: 40rpx;
		line-height: 40rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	.unfold{
		width: 30rpx;
		height: 20rpx;
		margin-left: 10rpx;
	}
	
</style>
