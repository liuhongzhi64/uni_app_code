<template>
	<view class="message"> 
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title'  :menuTop='menuTop' :menuHeight='menuHeight' :menuBottom='menuBottom'></topBar>
		 
		<view class="message_info" :style="[{'height':height-menuBottom-10+'px'}]">
			<view class="no_have_info" v-if="message_info.length==0">
				<image class="hint_img" src="/static/images/no_comment.png"></image>
				<view class="hint_text">您还没有消息···喵</view>
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
				menuTop: 0,
				menuHeight: 0,
				menuBottom: 0,
				height: 0,
				requestUrl: '',
				barName: 'back', //导航条名称
				topBackgroundColor: '#333333',
				color: '#FFFFFF',
				backImage: '/static/images/back2.png',
				title: '消息',
				message_info:[]
			}
		},
		onLoad: function(options) {
			const that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
			let platform = getApp().platform || getApp().globalData.platform || 'Applets'
			if (platform == 'Applets') {
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuBottom = menu.bottom
					}
				})
			} else if (platform == 'APP'){
				that.menuTop = 40
				that.menuBottom = 70
				that.menuHeight = 30
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.no_have_info{
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.hint_img{
		width: 80%;
		padding-bottom: 40rpx;
	}
	.hint_text{
		font-size: 26rpx;
		color: #FA3475;
	}
</style>
