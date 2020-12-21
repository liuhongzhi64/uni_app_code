<template>
	<view class="consultation">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<!-- 咨询 -->
		<view class="search-input" :style="[{'top':menuBottom+10+'px'}]">
			<web-view :src="url"></web-view>
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
				title: '咨询',
				url: ''
			}
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
			// 判定运行平台
			let platform = getApp().platform || getApp().globalData.platform
			if (platform == 'Applets') {
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
			}
			else if (platform == 'APP'){
				that.menuWidth = 90
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
				that.menuPaddingRight = 20
			}
		},
		onLoad: function() {
			let consultation = uni.getStorageSync('consultation');
			console.log(consultation)
			// 0=新媒体，1=网络，2=电商
			let url = 'https://prd9.easyliao.com/live/chat.do?c=24260&g=22292&config=31484&ref=zbsc';
			if (consultation == 1) {
				url = 'https://prd62.easyliao.com/live/chat.do?c=14702&g=26806&config=30073&tag=0&first=www.hmzixin.com/?frtag=zbsc';
			}
			else if (consultation == 2) {
				url = 'https://rgtk15.kuaishang.cn/bs/im.htm?cas=113517___613621&fi=115513&ism=1&source=hmzb';
			}
			this.url = url
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>
