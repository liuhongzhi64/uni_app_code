<template>
	<view class="diary_write">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		
		<view class="diary_write-content" :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
			<view class="top-content">
				<view class="title">日记形式</view>
			</view>
			<view class="hint">
				有疑问？ <text>立即咨询</text>
			</view>
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
				backImage: '../static/images/back2.png',
				title: '写日记',

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

		}
	}
</script>

<style scoped>
	.diary_write-content{
		background-color: #F0F0F0;
	}
	.top-content{
		background-color: #FFFFFF;
		border-radius: 0rpx 0rpx 24rpx 24rpx;
		padding: 40rpx;
	}
	.title{
		font-size: 32rpx;
		color: #111111;
		padding-bottom: 30rpx;
		border-bottom: 2rpx solid #F0F0F0;
	}
	
	
	
	
	.hint{
		padding-left: 40rpx;
		padding-top: 32rpx;
		font-size: 24rpx;
		font-size: 24rpx;
		color: #999999;
	}
	.hint{
		color: #fa3475;
	}

</style>
