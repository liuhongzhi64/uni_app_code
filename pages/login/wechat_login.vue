<template>
	<view class="this_login">
		<view class="my_top_bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px'}]">
			<view class="back_title" :style="[{'height':menuHeight+'px'}]">
				<view class="back_image" :style="[{'height':menuHeight+'px'}]" @tap='go_back'>
					<image class="return_img" src="/static/images/return.png" mode=""></image>
				</view>
				登录
			</view>
		</view>
		<view class="login_info" :style="[{'margin-top':menuBottom+10+'px','min-height':height-menuBottom-10+'px'}]">

			<view class="one_click_login">
				<image class="login_image" @tap="login_mode('qq')" src="/static/images/login_qq.png" mode=""></image>
				<image class="login_image" @tap="login_mode('weixin')" src="/static/images/login_wechat.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import porduct from "../../components/porduct.vue";
	export default {
		components: {
			porduct
		},
		data() {
			return {
				menuTop: 0,
				menuHeight: 0,
				menuBottom: 0,
				width: 0,
				height: 0,
				requestUrl: ''
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
			} else if (platform == 'APP') {
				that.menuTop = 50
				that.menuHeight = 32
				that.menuBottom = 82
			}
		},
		methods: {
			go_back: function() {
				uni.navigateBack({
					delta: 1
				});
			},
			login_mode: function(type) {
				let that = this
				uni.login({
					provider: type,
					success: function(res) {
						uni.getUserInfo({
							provider: type,
							success: function(res) {
								let info = res.userInfo
								console.log(info)
								let nickName = ''
								let avatarUrl = ''
								let openId = ''
								if (type == "weixin") {
									nickName = info.nickName
									avatarUrl = info.avatarUrl
									openId = info.openId
								} else if (type == "qq") {
									nickName = info.nickname
									avatarUrl = info.figureurl_qq_2
									// qq返回了多个尺寸的头像, 按需选择
									openId = info.openId
								} else if (type == "sinaweibo") {
									nickName = info.nickname
									avatarUrl = info.avatar_large
									openId = info.id
								}
							}
						})
					}
				})
			}
		},

	}
</script>

<style scoped>
	.my_top_bar {
		background-image: linear-gradient(to right, #FF72AA, #F54F8F);
		color: #FFFFFF;
		text-align: center;
		font-size: 40rpx;
		position: fixed;
		z-index: 100;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
	}

	.back_image {
		display: flex;
		align-items: center;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 100;
		padding-left: 20rpx;
	}

	.return_img {
		width: 36rpx;
		height: 36rpx;
	}

	.back_title {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 38rpx;
		position: relative;
	}

	.login_info {
		background: #f6f6f6 url(/static/images/login_phone_bg.jpg) no-repeat;
		background-size: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}


	.this_login_phone {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}


	.one_click_login {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.login_image {
		width: 60rpx;
		height: 60rpx;
		margin-right: 40rpx;
	}
</style>
