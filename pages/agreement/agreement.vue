<template>
	<view class="agreement">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="agreement_content" :style="[{'padding-top':menuBottom+10+'px','min-height':height-menuBottom-10+'px'}]">
			<view class="agreement_info">
				
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
				barName: 'back',
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '/static/images/return.png',
				title: '用户协议',
				agreement_info:{},
				requestUrl:''
			}
		},
		onLoad:function(){
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUr
			that.get_info()
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
			let platform = getApp().platform || getApp().globalData.platform || 'Applets'
			if (platform == 'Applets') {
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuWidth = menu.width
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuLeft = menu.left
						that.menuBottom = menu.bottom
					}
				})
			}
			else if (platform == 'APP'){
				that.menuWidth = 90
				that.menuTop = 40
				that.menuHeight = 30
				that.menuLeft = 278
				that.menuBottom = 70
			}
		},
		methods: {
			get_info:function(){
				let that = this
				let dataInfo = {
					interfaceId: 'article',
					category_id: 1
				}
				that.request.uniRequest("article", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						console.log(data)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.agreement_content{
		background-color: #F0F0F0;
	}
	
</style>
