<template>
	<view class="jump">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuBottom='menuBottom'></topBar>
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
				menuBottom: 0,
				height: 0,
				requestUrl: '',
				barName: 'back', //导航条名称
				topBackgroundColor: '#333333',
				color: '#FFFFFF',
				backImage: '/static/images/return.png',
				title: '跳转中...',
				url: '',
				sweixin: null
			}
		},
		onLoad: function(options) {
			const that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			console.log(options.url)
			let url = options.url
			
			// 关于整呗
			if (url == 'about') {
				that.url = that.requestUrl + 'html/activity/about/index.html'
			}
			else if(url == 'assessment'){
				that.url = 'https://cdhmwx.mylikesh.cn/wxmp/api/config/author?tenantId=856001&__param=1&backPage=healthEvaluation/index'
			}
			else if(url == 'appointment'){
				that.url = 'https://cdhmwx.mylikesh.cn/wxmp/api/config/author?tenantId=856001&authorPage=getWxInfo'
			}
			else if(url == 'myappointment'){
				that.url = 'https://cdhmwx.mylikesh.cn/wxmp/api/config/author?tenantId=856001&backPage=appointment/appointmentList'
			}
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
						that.menuBottom = menu.bottom
					}
				})
			} else if (platform == 'APP') {
				that.menuWidth = 90
				that.menuTop = 40
				that.menuBottom = 70
				that.menuHeight = 30
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
