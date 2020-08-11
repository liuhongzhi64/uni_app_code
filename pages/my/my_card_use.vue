<template>
	<view class="my_card_use"> 
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :barImage='barImage' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		 
		<view class="user-card-top" :style="[{'padding-top':menuBottom+10+'px'}]">
			<view class="top-item" v-for="(i,k) in topList" :key='k'> 
			
				<view class="item-content" :class="{'changeItem':changeBtn == k}" v-if="i.type ==1 " @tap='changeItem(k,i.type)'>
					{{i.name}}
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
		
		<view class="classifyList" :style="[{'padding-top':menuBottom+50+'px'}]">
			这是分类
		</view>
		
		
		
		<view class="user-card-content">
			<scroll-view class="my_card-content" scroll-y :style="[{'padding-top':menuBottom+50+'px','min-height':height-menuBottom-50+'px'}]">
				<template>
					
					<view class="user-card-contents">
						1111
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
					{name:'全部 >',type:1},
					{name:'销量',type:2,TallLow:false,changLow:false,},
					{name:'价格',type:3,TallLow:false,changLow:false,},
					{name:'评分',type:4,TallLow:false,changLow:false,},
				],
				// TallLow:false,//选中高低
				// changLow:false,
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
				// type值表示：1.全部 2.销量 3. 价格 4.评分
			},
			
			changTallLow:function(k,type){
				console.log(k,type)
				this.topList[k].TallLow = !this.topList[k].TallLow
				this.topList[k].changLow = !this.topList[k].TallLow
				// this.TallLow = !this.TallLow
				// this.changLow = !this.TallLow
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
	.item-content{
		margin-right: 52rpx;
		color: #111111;
		display: flex;
		align-items: center;
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
	
	
	.user-card-content{
		background-color: #F6F6F6;
	}
</style>
