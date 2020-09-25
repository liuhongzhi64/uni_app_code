<template>
	<view class="agreement">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="agreement-content" :style="[{'padding-top':menuBottom+10+'px','min-height':height-menuBottom-10+'px'}]">
			<view class="text">
				<goodsShow :porductList='goodsList'></goodsShow>
			</view>
		</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import goodsShow from "../../components/goodsShow.vue"
	export default {
		components: {
			topBar,
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
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '用户协议',
				goodsList: [
					{
						head_img: '../../static/images/19.png',
						goods_name: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: {
							type:0,
							list:['眼部','眼部美容']
						}, //标签
						sale_price:19800,
						member:{
							price:16990,
							member_title:'钻卡'
						},
						rate:98.8,
						sales:452
					},
					{
						head_img: '../../static/images/test.jpg',
						goods_name: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: {
							type:1,
							list:['眼部','眼部美容']
						}, //标签	
						sale_price:9800,
						member:{
							price:8990,
							member_title:''
						},
						rate:98.8,
						sales:452		
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
					// console.log(res)
					let menu = uni.getMenuButtonBoundingClientRect();
					that.menuWidth = menu.width
					that.menuTop = menu.top
					that.menuHeight = menu.height
					that.menuLeft = menu.left
					that.menuBottom = menu.bottom
				}
			})
		},
		methods: {

		}
	}
</script>

<style scoped>
	
	.text{
		padding: 30rpx;
		background-color: #F0F0F0;
	}
	
</style>
