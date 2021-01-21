<template>
	<view class="open_screen">
		<view class="this_platform" v-if="platform=='Applets'">
			<view class="start_top" :style="[{'padding-top':menu_top+'px','line-height':menu_height+10+'px'}]">
				<view class="back-title" :style="[{'height':menu_height+10+'px'}]"> 华美整呗 </view>
			</view>
			<view class="start_nav" :style="[{'padding-top':menu_height+menu_top+10+'px'}]">
				<image class="start_img" @tap='go_to_page(this_start.page)' :src="requestUrl+this_start.img" mode="widthFix"></image>
				<view class="this_time" @tap='go_to_index(0)' :style="[{'top':menu_height+menu_top+15+'px','width':menu_width+'px','line-height':menu_height+'px','border-radius':menu_height/2+'px'}]">
					{{ count_down }}
				</view>
			</view>
		</view>
		<view class="this_platform" v-else-if="platform=='APP'">
			<view class="start_nav" :url="'/pages'+this_start.page">
				<image class="start_img" :src="requestUrl+this_start.img" mode="widthFix"></image>
				<view class="this_time" @tap='go_to_index(0)'
				 :style="[{'top':menu_height+menu_top+5+'px','width':menu_width+'px','line-height':menu_height+'px','border-radius':menu_height/2+'px'}]">
					{{ count_down }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menu_top: 0,
				menu_height: 0,
				menu_width: 0,
				menu_left: 0,
				menu_bottom: 0,
				requestUrl: '',
				this_start: {},
				count_down: 5,
				timer: null,
				platform: ''
			}
		},
		onReady() {
			let that = this;
			that.this_height = uni.getSystemInfoSync().screenHeight;
			that.this_width = uni.getSystemInfoSync().screenWidth
			let platform = getApp().platform || getApp().globalData.platform || 'Applets'
			that.platform = platform
			if (platform == 'Applets') {
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menu_width = menu.width
						that.menu_top = menu.top
						that.menu_height = menu.height
						that.menu_bottom = menu.bottom
					}
				})
			} else if (platform == 'APP') {
				that.menu_top = 40
				that.menu_width = 80
				that.menu_bottom = 70
				that.menu_height = 26
			}
		},
		onLoad(options) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.get_start_page()
		},
		methods: {
			get_start_page: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'startpage'
				}
				that.request.uniRequest("home", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.this_start = data
						that.set_time()
					}
				})
			},
			set_time: function() {
				let that = this
				if (that.count_down > 0) {
					this.timer = setInterval(() => {
						that.count_down = that.setTime(that.count_down)
						if (that.count_down == 0) {
							clearInterval(this.timer)
							this.timer = null
							that.go_to_index(1)
						}
					}, 1000)
				}
			},
			// 计时器
			setTime: function(time) {
				time = time - 1
				return time
			},
			go_to_index: function(type) {
				let that = this
				if(type==0){
					uni.switchTab({
						url: '/pages/index/index'
					})
					clearInterval(this.timer)
				}else if(type==1){
					that.count_down = 0
					uni.switchTab({
						url: '/pages/index/index'
					})
				}
			},
			go_to_page:function(page){
				uni.navigateTo({
					url:`/page${page}`
				})
			}
		}
	}
</script>

<style scoped>
	.start_top {
		position: fixed;
		z-index: 9;
		background-color: #000000;
		color: #FFFFFF;
		width: 100%;
		font-size: 32rpx;
	}

	.back-title {
		width: 100%;
		text-align: center;
	}

	.start_nav {
		width: 100%;
		position: relative;
	}

	.start_img {
		width: 100%;
	}

	.this_time {
		text-align: center;
		position: absolute;
		right: 20rpx;
		z-index: 8;
		opacity: 0.8;
		color: #FFFFFF;
		background-image: linear-gradient(-45deg, #000000 0%, #333333 100%);
	}
</style>
