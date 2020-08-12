<template>
	<view class="my_card_use"> 
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :barImage='barImage' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		 
		<view class="user-card-top" :style="[{'padding-top':menuBottom+10+'px'}]">
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
			
		<view class="user-card-content">
			<scroll-view class="my_card-content" scroll-y :style="[{'padding-top':menuBottom+50+'px','min-height':height-menuBottom-50+'px'}]">
				<template>
					
					<view class="user-card-contents">
						1111
						<image src="../../static/images/19.png" mode=""></image>
					</view>
					
				</template>
			</scroll-view>		
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
				
				
			}
		}
	}
</script>

<style scoped>
	.user-card-top{
		position: fixed;
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
</style>
