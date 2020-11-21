<template>
	<view class="my_card_use"> 
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :barImage='barImage' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>		 
		<view class="user-card-top" :style="[{'top':menuBottom+10+'px'}]">
			<view class="top-item" v-for="(i,k) in topList" :key='k' > 			
				<view class="item-content item-all" :class="{'changeItem':changeBtn == k}" v-if="i.type == 1 " @tap='changeTopItem(k,i.type)'>
					<view class="item-all-name">{{i.name || classfiyName}}</view> <view :class="[showClassify?'item-tall':'item-low']"></view>
				</view>				
				<view class="item-content" :class="{'changeItem':changeBtn == k}" v-else >
					<view class="item-name" @tap='changeTopItem(k,i.type)'>{{i.name}}</view>
					<view class="tall-low" @tap='changSortType(k,i.type,index)' v-for="(item,index) in i.list" :key='index'>
						<view class="item-tall" :class="{'changTallLow':item.sort_tall}"></view>
						<view class="item-low" :class="{'changTallLow':item.sort_low}"></view>
					</view>	
				</view>			 
			</view>
		</view> 
		<!-- 商品分类列表 -->
		<view class="classifyList" :class="{'showClassify':showClassify}" :style="[{'top':menuBottom+50+'px','min-height':height-menuBottom-50+'px'}]" >
			<view class="classifyList-content">
				<view class="classify-item"  
				 :class="{'changeItemClass':currentIndex == k && item.isShow }" 
				 v-for="(item,k) in classifyLists" :key='k' 
				 @tap='changeCalssfiyItem(k,item.id,item.name)'>
					{{item.name}}
				</view>								
			</view>
			<view class="define-item-btn">
				<view class="item-btn">
					<button type="default" plain="true" class="define-btn" 
					 :disabled = 'itemBtn' 
					 :style="{'background-color':classfiyBtn!=-1 ?'#fa3475':'#999999'}"
					 @tap='define()'>
						确定
					 </button>
				</view>				
			</view>
		</view>			
		<view class="user-card-content" >
			<scroll-view class="my_card-content" :style="[{'padding-top':menuBottom+50+'px'}]">
				<template>		
					<view class="user-card-contents">
						<!-- 使用说明 -->
						<view class="card-use-hint"> 卡券说明: {{card_intro}} </view>						
						<view class="user-card-porduct">
							<view class="porduct-list" v-for="(item,index) in porductList" :key='index' @tap='gotoGoods(item.sku_id)'>
								<view class="porduct-items">		
									<!-- 商品图 -->
									<view class="porduct-item-images"> <image :src="requestUrl+item.head_img" mode=""></image> </view>															
									<view class="porduct-introduce">	
										<!-- 商品名称 -->
										<view class="product-title"> {{ item.goods_name }} </view>
										<!-- 商品标签 -->								
										<view class="label" v-if="item.label">
											<view class="label-name" v-for="(i,k) in item.label.list" :key='k'> {{i}}  </view>
										</view>	
										<!-- 价格 -->								
										<view class="porduct-price">
											<!-- 销售价 -->
											<view class="porduct-original-cost"> <text>￥</text>{{item.sale_price}} </view>
											<!-- 会员价 -->
											<view class="porduct-vip-price" v-if="item.member_title">
												<view class="vip">{{ item.member_title }}</view> <view class="vip-price">￥{{item.price}}</view>
											</view>
										</view>										
										<view class="subscribe-goodReputation">
											<!-- 预约 -->
											<view class="subscribe"> {{ item.sales }}预约 </view>
											<!-- 好评 -->
											<view class="goodReputation"> {{ item.rate }}%好评 </view>
										</view>																				
									</view>													
								</view>
							</view>
							<view class="no-have-porduct" v-if="porductList.length==0">
								<view class="Ticket-number">
									<view class="images">
										<image src="../../static/images/cartBg.png" mode=""></image>
									</view>																		
									<view class="no-have-ticket">喵！暂无相关商品可用此卡券~</view>
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
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '/static/images/return.png',
				title: '我的卡券',
				barImage: '../static/images/refresh.png',
				changeBtn:0,
				topList:[
					{name:'全部分类',type:1,list:[{sort_tall:false,sort_low:false}]},
					{name:'销量',type:2,list:[{sort_tall:false,sort_low:false}]},
					{name:'价格',type:3,list:[{sort_tall:false,sort_low:false}]},
					{name:'评分',type:4,list:[{sort_tall:false,sort_low:false}]},
				],
				showClassify:false,//显示分类
				classifyLists:[],
				classfiyId:0,//分类初始化id
				classfiyName:'',
				lastIndex:-1,
				currentIndex:-1,
				itemBtn:true,//是否禁止点击确定按钮
				requestUrl:'',
				changeItemName:'',//选中后确定按钮按下时要改变的名称
				porductList:[],
				cardId:'23', //卡卷id
				card_intro:'', //卡券使用说明
				sort:0, //排序类型 类型 0综合排序  1 销量排序 2 价格排序 3 评分
				cid:0,//	分类id
				sort_type:0, //排序 0 倒序 1 正序
				offset:0,				
			}
		},
		onReachBottom: function() {
			let that = this;
			that.offset += 1;
			that.getDetails()
		},
		onLoad(options) {
			let that = this
			this.request = this.$request
			if( options.id ){
				that.cardId = options.id
			}
			that.requestUrl = that.request.globalData.requestUrl
			that.getDetails()
		},
		onReady() {
			let that = this;
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
			} else {
				that.menuWidth = 87
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
			
		},
		methods: {
			// 商品分类
			getGoodsClassify:function(){
				let that = this
				let dataInfo = {
					interfaceId:'categorylist',
					type:0
				}
				that.request.uniRequest("goods", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						for (let i = 0; i < data.length; i++) {
							data[i].isShow = false
						}
						that.classifyLists = data
					}
				})
			},
			// 初始化获取可用卡券商品
			getDetails:function(id){
				let that =this
				let dataInfo = {
					interfaceId:'getcardspulist',
					card_id:that.cardId,
					cid:that.cid,
					sort:that.sort,
					sort_type:that.sort_type,
					offset:that.offset,
					limit:6
				}
				console.log(dataInfo)
				that.request.uniRequest("goods", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.card_intro = data.card_intro
						that.porductList = that.porductList.concat(data.spu_list)
						if(data.spu_list.length == 0){
							that.request.showToast('没有更多啦')
						}
					}
				})
			},
			// 排序类型 排序类型 类型 0综合排序  1 销量排序 2 价格排序 3 评分
			changeTopItem:function(k,type){
				let that = this
				that.changeBtn = k
				that.sort = type - 1				
				if(type == 1){
					that.showClassify = !that.showClassify
					for(let i=0;i<that.topList.length;i++){
						that.topList[i].list[0].sort_tall = false
						that.topList[i].list[0].sort_low  = false
					}
					// 商品分类
					that.getGoodsClassify()
				}
				else{
					that.showClassify = false
					that.porductList = []
					that.getDetails()
				}
			},
			// 排序  0 倒序 1 正序
			changSortType:function(k,type,index){
				let that = this
				that.changeBtn = k
				that.sort = type - 1 
				for(let i=0;i<that.topList.length;i++){
					if(i==k){
						// console.log('相等',that.topList[i].list[index])
						that.topList[k].list[index].sort_tall = !that.topList[k].list[index].sort_tall
						that.topList[k].list[index].sort_low  = !that.topList[k].list[index].sort_tall
						if(!that.topList[k].list[index].sort_low){
							that.sort_type = 1
						}else{
							that.sort_type = 0
						} 
						that.porductList = []
						that.getDetails()	
					}else{
						// console.log('不等',that.topList[i].list[index])
						that.topList[i].list[index].sort_tall = false
						that.topList[i].list[index].sort_low  = false
					}
					
				}	
				// that.topList[k].sort_tall = !that.topList[k].sort_tall
				// that.topList[k].sort_low  = !that.topList[k].sort_tall	
				// // that.topList[index].sort_low = false 表示从小到大
					
			},
			// 点击确定分类
			define:function(){
				let that = this
				that.showClassify = !that.showClassify	
				that.cid = that.classfiyId
				that.classfiyId = 0
				that.topList[0].name = that.classfiyName
				that.porductList = []
				that.getDetails()
			},
			// 点击分类
			changeCalssfiyItem:function(index,id,name){				
				let that = this
				that.currentIndex = index
				that.classfiyId = id
				that.classfiyName = name
				if(that.lastIndex!=index){
					that.classifyLists[index].isShow = true
					that.itemBtn = false
				}else if(that.lastIndex==index){
					that.handleClicke(index)
				}
				that.lastIndex = index
			},
			// 两次点击商品分类
			handleClicke:function(index){
				let that = this
				that.classifyLists[index].isShow = !that.classifyLists[index].isShow
				that.itemBtn = !that.itemBtn
				that.lastIndex = ''
			},
			gotoGoods: function(id) {
				let goodsId = id
				uni.navigateTo({
					url: `/pages/goods/goods_detail?id=${goodsId}`,
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
		border-color: transparent #fa3475 transparent transparent;
	}
	.changeItem{
		color: #fa3475;
		font-weight: bolder;
	}
	.tall-low{
		margin-left: 16rpx;
		width: 40%;
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
			border-color: transparent #fa3475 transparent transparent;
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
	.user-card-contents{
		min-height: 1350rpx;
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
