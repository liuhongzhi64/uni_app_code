<template>
	<view class="my_card_use"> 
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :barImage='barImage' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		 
		<view class="user-card-top" :style="[{'top':menuBottom+10+'px'}]">
			<view class="top-item" v-for="(i,k) in topList" :key='k'> 
			
				<view class="item-content item-all" :class="{'changeItem':changeBtn == k}" v-if="i.type == 1 " @tap='changeItem(k,i.type)'>
					<view class="item-all-name">{{i.name}}</view> <view :class="[showClassify?'item-tall':'item-low']"></view>
				</view>
				
				<view class="item-content" :class="{'changeItem':changeBtn == k}" v-if="i.type !=1 " @tap='changeItem(k,i.type)'>
					<view class="item-name">{{i.name}}</view>
					<view class="tall-low" @tap='changTallLow(k,i.type)'>
						<view class="item-tall" :class="{'changTallLow':i.TallLow}"></view>
						<view class="item-low" :class="{'changTallLow':i.changLow}"></view>
					</view>	
				</view>
			 
			</view>
		</view> 
		
		<view class="classifyList" :class="{'showClassify':showClassify}" :style="[{'top':menuBottom+50+'px','min-height':height-menuBottom-50+'px'}]" >
			<view class="classifyList-content">
				<view class="classify-item"  
				 :class="{'changeItemClass':i.itemChange}" 
				 v-for="(i,k) in classifyLists" :key='k' 
				 @tap='changeCalssfiyItem(k,i.type,i.name)'>
					{{i.name}}
				</view>
				
				
			</view>
			<view class="define-item-btn">
				<view class="item-btn">
					<button type="default" plain="true" class="define-btn" 
					 :disabled = 'itemBtn' 
					 :style="{'background-color':itemBtn?'#999999':'#fa3475'}"
					 @tap='showClassifyContent(changeItemName)'>确定</button>
				</view>
				
			</view>
		</view>
			
		<view class="user-card-content" >
			<scroll-view class="my_card-content" scroll-y :style="[{'padding-top':menuBottom+50+'px','height':height-menuBottom-50+'px'}]">
				<template>		
					<view class="user-card-contents">
						<view class="card-use-hint"> 以下商品可使用每满5000减500元的优惠券，最高可减2000元（部分商品存在多规格，部分规格不参与此优惠，请注意选择规格） </view>
						
						<view class="user-card-porduct">
							<view class="porduct-list" v-for="(i,k) in porductList" :key='k' :data-name="i.title" @tap="gotoGoods">
								<view class="porduct-items">
								
									<view class="porduct-item-images">
										<image :src="i.url" mode=""></image>
									</view>
								
									<view class="porduct-introduce">
								
										<view class="product-title"> {{i.title}} </view>
								
										<view class="label" v-if="i.label.length>0">
											<view class="label-name" v-for="(i,k) in i.label" :key='k'> {{i}}  </view>
										</view>
								
										<view class="activity" v-if="i.activity.length>0">
											<view class="activity-name" v-for="(i,k) in i.activity" :key='k'> {{i}} </view>
										</view>
								
										<view class="porduct-price">
											<view class="porduct-original-cost"> <text>￥</text>{{i.originalCost}} </view>
											<view class="porduct-vip-price" v-if="i.vipPrice>0">
												<view class="vip">钻卡</view> <view class="vip-price">￥{{i.vipPrice}}</view>
											</view>
										</view>
										
										<view class="subscribe-goodReputation">
											<!-- 预约 -->
											<view class="subscribe"> {{i.subscribe}}预约 </view>
											<!-- 好评 -->
											<view class="goodReputation"> {{i.goodReputation}}%好评 </view>
										</view>
										
										
									</view>
													
								</view>
							</view>
							<view class="no-have-porduct" v-if="porductList.length==0">
								<view class="Ticket-number">
									<view class="images">
										<image src="../../static/images/cartBg.png" mode=""></image>
									</view>
																		
									<view class="no-have-ticket">喵！暂无相关卡券~</view>
								</view>
							</view>
						</view>
					</view>
					
				</template>
			</scroll-view>		
		</view>
		 
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import porduct from "../../components/porduct.vue";
	export default {
		components: {
			topBar,
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
				topBackgroundColor: '#dddddd',
				color: '#222222',
				backImage: '../static/images/back1.png',
				title: '我的卡券',
				barImage: '../static/images/refresh.png',
				changeBtn:0,
				topList:[
					{name:'全部分类',type:1},
					{name:'销量',type:2,TallLow:false,changLow:false,},
					{name:'价格',type:3,TallLow:false,changLow:false,},
					{name:'评分',type:4,TallLow:false,changLow:false,},
				],
				// TallLow:false,//选中高低
				// changLow:false,
				showClassify:false,//显示分类
				classifyLists:[
					{name:'双眼皮',type:0,itemChange:false},
					{name:'隆鼻',type:1,itemChange:false},
					{name:'丰胸',type:2,itemChange:false},
					{name:'脂肪填充',type:3,itemChange:false},
					{name:'祛斑',type:4,itemChange:false},
					{name:'分类名一',type:5,itemChange:false},
					{name:'分类名一',type:6,itemChange:false},
					{name:'分类名一',type:7,itemChange:false},
					
				],
				itemBtn:true,//是否禁止点击确定按钮
				changeItemName:'',//选中后确定按钮按下时要改变的名称
				porductList:[
					{
						url:'../../static/images/19.png',
						title:'我是秒杀商品名称名称,我是秒杀商品名称我是秒杀商品,名称我是秒杀商品名称名称我是秒杀商品名称...',
						label:['眼部美容','眼部'],
						activity:[],
						originalCost:68800,
						vipPrice:58800,
						subscribe:477,
						goodReputation:98,
					},
					{
						url:'../../static/images/23.png',
						title:'我是秒杀商品名称名称,我是秒杀商品名称我是秒杀商品,名称我是秒杀商品名称名称我是秒杀商品名称...',
						label:['眼部美容','眼部'],
						activity:[],
						originalCost:18800,
						vipPrice:12800,
						subscribe:422,
						goodReputation:98,
					},
					{
						url:'../../static/images/19.png',
						title:'我是秒杀商品名称名称,我是秒杀商品名称我是秒杀商品,名称我是秒杀商品名称名称我是秒杀商品名称...',
						label:[],
						activity:['首单必减','折扣'],
						originalCost:18800,
						vipPrice:0,
						subscribe:477,
						goodReputation:98,
					},
					{
						url:'../../static/images/23.png',
						title:'我是秒杀商品名称名称,我是秒杀商品名称我是秒杀商品,名称我是秒杀商品名称名称我是秒杀商品名称...',
						label:[],
						activity:['首单必减','折扣'],
						originalCost:18800,
						vipPrice:12800,
						subscribe:422,
						goodReputation:98,
					},
				
				]
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
			changeItem:function(k,type){
				this.changeBtn = k
				if(type == 1){
					this.showClassify = !this.showClassify
				}
				else{
					this.showClassify = false
				}
				// type值表示：1.全部 2.销量 3. 价格 4.评分
			},
			
			changTallLow:function(k,type){
				console.log(k,type)
				
				this.topList[k].TallLow = !this.topList[k].TallLow
				this.topList[k].changLow = !this.topList[k].TallLow
				// this.TallLow = !this.TallLow
				// this.changLow = !this.TallLow
			},
			
			showClassifyContent:function(name){
				this.showClassify = !this.showClassify
				this.topList[0].name = name
			},
			
			changeCalssfiyItem:function(k,type,name){
				
				for(let i = 0; i<this.classifyLists.length;i++){
					if(i==k){
						this.classifyLists[k].itemChange = !this.classifyLists[k].itemChange
						this.itemBtn = ! this.classifyLists[k].itemChange
						this.changeItemName = name
						
					}else{
						this.classifyLists[i].itemChange = false
					}
				}				
			},
			gotoGoods: function(e) {
				let goods = e.currentTarget.dataset.name
				uni.navigateTo({
					url: `/pages/goods/goods_detail?goods=${goods}`,
				})
			},
		}
	}
</script>

<style scoped>
	.user-card-top{
		position: fixed;
		z-index: 9;
		display: flex;
		height: 80rpx;
		width: 100%;
		line-height: 80rpx;
		padding: 0 30rpx;
		background-color: #FFFFFF;
		font-size: 28rpx;
	}
	.top-item{
		height: 80rpx;
		line-height: 80rpx;
		
	}
	.item-content{
		width: 160rpx;
		/* margin-right: 36rpx; */
		color: #111111;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.item-all-name{
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	.item-all>.item-low {
		margin-top: -1rpx;
		margin-left: 10rpx;
		transform: rotate(180deg);
	}
	.item-all>.item-tall {
		margin-top: 1rpx;
		margin-left:-10rpx;
		transform: rotate(0deg);
	}
	.changeItem{
		color: #fa3475;
		font-weight: bolder;
	}
	.tall-low{
		margin-left: 16rpx;
	}
	.item-tall {
		display: block;
		width: 0;
		height: 0;
		border-width: 15rpx;
		border-style: solid;
		border-color: transparent #999999 transparent transparent;
		transform: rotate(90deg);
	}
	.item-low{
		display: block;
		width: 0;
		height: 0;
		border-width: 15rpx;
		border-style: solid;
		border-color: transparent #999999 transparent transparent;
		transform: rotate(270deg);
		margin-top: 6rpx;
	}
	.changTallLow{
		border-color: transparent #111111 transparent transparent;
	}
	.classifyList{
		position: fixed;
		z-index: 9;
		width: 100%;
		display: none;
	}
	.classifyList-content{
		width: 100%;
		background-color: #FFFFFF;
		padding: 20rpx 20rpx 40rpx;
		border-top: 1rpx solid #999999;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
	.showClassify{
		display: block;
	}
	.define-item-btn{
		background-color: #FFFFFF;
		padding: 40rpx 0;
		width: 100%;
	}
	.item-btn{
		padding: 0 40rpx;
		border: none;
	}
	.define-btn{
		height: 80rpx;
		border-radius: 40rpx;
		line-height: 80rpx;
		text-align: center;	
		border: none;
	}
	
	.classify-item{
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		border-radius: 40rpx;
		background-color: #F6F6F6;
		margin-right: 30rpx;
		margin-bottom: 20rpx;
		width: 320rpx;
	}
	.changeItemClass{
		height: 76rpx;
		width: 316rpx;
		border: 1rpx solid #fa3475;
		color: #fa3475;
	}
	
	
	.user-card-content{
		background-color: #F6F6F6;
	}
	.user-card-porduct{
		padding-bottom: 80rpx;
	}
	
	.card-use-hint{
		padding: 40rpx 57rpx 30rpx;
		font-size: 24rpx;
		color: #999999;
	}
	.porduct-list{
		margin-bottom: 20rpx;
	}
	.porduct-items {
		display: flex;
		align-items: center;
		padding: 32rpx 30rpx;
		background-color: #FFFFFF;
	}
	
	.porduct-item-images {
		width: 240rpx;
		height: 240rpx;
		margin-right: 28rpx;
	}
	
	.porduct-item-images image {
		width: 100%;
		height: 100%;
	}
	
	.porduct-introduce {
		flex: 1;
		font-size: 26rpx;
		white-space: normal;
		display: flex;
		flex-direction: column;
	}
	
	.product-title {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		color: #111111;
		line-height: 36rpx;
	}
	
	.label {
		display: flex;
		flex-wrap: wrap;
		margin-top: 12rpx;
	}
	
	.label-name {
		background-color: #999999;
		text-align: center;
		font-size: 16rpx;
		padding: 5rpx 8rpx;
		margin-right: 10rpx;
		border-radius: 4rpx;
		color: #FFFFFF;
	}
	
	.activity {
		display: flex;
		font-size: 16rpx;
		color: #fa3475;
		flex-wrap: wrap;
		margin-top: 12rpx;
	}
	
	.activity-name {
		border: 1rpx solid #fa3475;
		margin-right: 10rpx;
		padding: 5rpx;
		border-radius: 4rpx;
	}
	
	.porduct-price{
		display: flex;
		margin-top: 20rpx;
	}
	.porduct-vip-price{
		display: flex;
		margin-left: 25rpx;
		border: 1rpx solid #282828;
		border-radius:4rpx ;
	}
	
	.vip{
		font-size: 16rpx;
		border-radius: 4rpx;
		width: 48rpx;
		height: 29rpx;
		line-height: 30rpx;
		background-image: linear-gradient(0deg, #000000 0%,  #2c2c2c 100%),  linear-gradient( #282828, #282828);
		color: #FFFFFF;
		text-align: center;
	}
	
	.vip-price{
		height: 28rpx;
		font-size: 16rpx;
		color: #282828;
		border-width: 1rpx;
		border-image-source: linear-gradient(0deg,  #000000 0%,  #2c2c2c 100%);
		border-image-slice: 1;
		padding: 0 9rpx;
	}
	
	.porduct-price{
		line-height: 34rpx;
		display: flex;
		align-items: center;
	}
	
	.porduct-original-cost{
		color: #fa3475;
		font-size: 52rpx;
	}
	.porduct-original-cost text{
		font-size: 36rpx;
	}
	
	.subscribe-goodReputation{
		display: flex;
		font-size: 20rpx;
		margin-top: 36rpx;
		color: #666666;
	}
	
	.goodReputation{
		color: #fa3576;
		margin-left: 30rpx;
	}
	.no-have-porduct{
		padding: 32rpx 36rpx 0;
		font-size: 20rpx;
		line-height: 32rpx;
		color: #999999;
	}
	.no-have-ticket {
		text-align: center;
		font-size: 32rpx;
		color: #111111;
	}
	
</style>
