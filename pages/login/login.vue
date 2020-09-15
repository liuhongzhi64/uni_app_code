<template>
	<view class="all-login">
		<view class="all-login-content">
			<image class="ad" :src="adImg" v-if="adImg" :data-link="adLink" @tap="adJump"></image>
			<view class="time" @tap="skip">{{timeNum}} 秒</view>
		</view>

	</view>


</template>

<script>
	export default {
		data() {
			return {
				posterTimer: "", // 显示5秒钟海报
				timeNum: 5,

			}
		},
		onLoad: function(options) {
			// 缓存options参数
			uni.setStorageSync("options", options)
			this.shareParameter();
			// 获取token
			this.request.getToken(1,3).then(res=>{
				if (res.data.code === 1000) {
					console.log(res.data)
				} else {
					this.request.showToast(res.data.message);
				}
			})
		},
		onShow: function() {
			const that = this;
			// that.getAd();
			that.isLogin();
		},
		methods: {
			// 判断登录状态
			isLogin: function() {
				const that = this;
				if (uni.getStorageSync("sessionKey") !== "") {
					console.log('sessionKey' + '有值:')
					uni.checkSession({
						success() {
							let sessionKey = uni.getStorageSync("sessionKey")
							console.log(sessionKey)
							that.silenceLogin(1, sessionKey);
						},
						fail() {
							uni.login({
								success: function(res) {
									if (res.code) {
										that.silenceLogin(0, res.code);
									}
								}
							})
						}
					})
				} else {
					console.log('sessionKey' + '无值:')
					uni.login({
						success: function(res) {

							if (res.code) {
								console.log(res.code, 222)
								// that.silenceLogin(0, res.code);0，为使用code登录；1、为sessionkey
								that.silenceLogin(0, res.code);
							}
						}
					})
				}
			},
			// 静默登录
			silenceLogin: function(type, code_session) {
				this.request = this.$request
				let dataInfo = {
					interfaceId: "wxxcxlogin",
					type: type,
					code_session: code_session,
					archives_id: "",
					f_unique_id: ''
				}
				this.request.uniRequest("login", dataInfo).then(res => {
					console.log(res.data.data, '返回的参数', res.data)
					let data = res.data.data;
					uni.setStorageSync("sessionKey", data.session_key);
					uni.setStorageSync("consultation", data.consultation);
					uni.setStorageSync("token", data.token);
					uni.setStorageSync("openid", data.consultation);
					uni.setStorageSync("userInfo", data);
				})
			},
			// 获取开屏广告
			getAd: function() {
				this.request = this.$request
				const that = this;
				let dataInfo = {
					interfaceId: "getPageConfig",
					appid: 'wx805c90d4affed9a4',
					page: "ALL",
					position: "logincont"
				}
				this.request.uniRequest("home/index", dataInfo).then(res => {
					console.log(res)

					this.adImg = app.globalData.requestUrl + res.data.data[0].PageConfigDetail[0].content
					this.adLink = res.data.data[0].PageConfigDetail[0].link

				})

				// 展示广告
				that.posterTimer = setInterval(function() {
					that.data.timeNum--;

					that.timeNum = that.data.timeNum

					if (that.timeNum == 0) {
						clearInterval(that.posterTimer);
						that.jumpPage();
					}
				}, 1000)
			},
			// 跳过
			skip: function() {
				clearInterval(this.posterTimer);
				this.jumpPage();
			},
			// 广告跳转
			adJump: function(e) {
				if (e.target.dataset.link == "") return;
				uni.reLaunch({
					url: e.target.dataset.link
				})
			},
			// 分享参数获取
			shareParameter: function() {
				let f_unique_id = "";
				let options = uni.getStorageSync("options");
				// 二维码进入
				if (JSON.stringify(options) !== "{}" && options.scene !== undefined) {
					let cont = options.scene.substring(0, options.scene.length - 1);
					let type = parseInt(options.scene.substr(options.scene.length - 1));
					console.log(cont, type)
					if (type === 4) {
						f_unique_id = cont;
					} else if (type === 7) {
						f_unique_id = uni.getStorageSync("decryptString").unique_id
					} else {
						f_unique_id = uni.getStorageSync('f_unique_id');
					}
				}
				// 小程序分享进入
				else {
					if (options.unique_id !== undefined) {
						f_unique_id = options.unique_id;
					} else {
						f_unique_id = uni.getStorageSync('f_unique_id');
					}
				}
				console.log(f_unique_id)
			},
			// 页面跳转
			jumpPage: function() {
				let options = uni.getStorageSync("options");
				console.log(options)
				if (JSON.stringify(options) !== "{}") {
					if (options.scene !== undefined) {
						let type = parseInt(options.scene.substr(options.scene.length - 1));
						if (type === 1 || type === 2 || type === 3) {
							console.log("跳转核销页面");
							return false;
						} else if (type === 5) {
							console.log("跳转领取卡券页面");
							return false;
						} else if (type === 7) {
							console.log("带个人标识");
						}
					}
				} else {
					uni.redirectTo({
						url: "../index/index"
					})
				}
			}
		}
	}
</script>

<style scoped>
	.ad {
		width: 750rpx;
		height: 1500rpx;
		position: fixed;
		top: 0;
		left: 0;
	}

	.time {
		display: inline-block;
		padding: 8rpx 30rpx;
		background: rgba(255, 255, 255, .8);
		border-radius: 50rpx;
		position: fixed;
		top: 30rpx;
		right: 30rpx;
		z-index: 99;
	}
</style>
