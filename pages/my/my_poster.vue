<template>
	<view class="poster">
		<view class="top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px'}]">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back" @tap="go_back">
					<image src="/static/images/return.png" mode=""></image>
				</view>
				<view class="title"> 个人海报 </view>
			</view>
		</view>
		<view class="this_user_see" :style="[{'top':menuBottom+15+'px'}]"> {{ user_info.tel }} (仅个人可见)
		</view>
		<!-- <view class="poster_info" :style="[{'margin-top':menuBottom+10+'px'}]">
			<image class="this_bac_img" src="https://xcx.hmzixin.com/html/images/poster_bg.jpg" mode="widthFix" ></image>
			<image class="this_code_img"  :src="requestUrl+code_img"></image> 
		</view> -->
		<view class="keep_btn">
			<button class="keep_poster" type="default" size="mini" @tap="this_keep(1)">
				保存海报
			</button>
			<button class="keep_code" type="default" size="mini" @tap="this_keep(0)">
				保存个人二维码
			</button>
		</view>
		<view class="poster_info" :style="[{'margin-top':menuBottom+10+'px'}]">
			<canvas type='2d' canvas-id="this_my_poster" id="this_my_poster" :style="[{'min-height':canvas_height+'rpx'}]">
				<!-- <image class="this_bac_img" src="https://xcx.hmzixin.com/html/images/poster_bg.jpg" mode="widthFix" @load='get_img_height'></image>
				<image class="this_code_img" :src="requestUrl+code_img"></image> -->
			</canvas>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menuTop: 0,
				menuHeight: 0,
				menuBottom: 0,
				height: 0,
				requestUrl: '',
				user_info: {},
				code_img: '',
				canvas_height:1500,
				keep_url:''
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
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuBottom = menu.bottom
					}
				})
			} else if (platform == 'APP') {
				that.menuTop = 40
				that.menuHeight = 30
				that.menuBottom = 70
			}
			that.this_canvas()
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
		},
		onShow: function() {
			let that = this
			that.user_info = uni.getStorageSync("userInfo")
			that.get_user_code()
		},
		methods: {
			go_back: function() {
				uni.navigateBack({
					delta: 1
				});
			},
			get_user_code: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'get_qr_code',
					parameter: that.user_info.unique_id,
					type: '4'
				}
				that.request.uniRequest("qrcode", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.code_img = data.img_url
					}
				})
			},
			this_keep: function(type) {
				let that = this

				if (type == 0) {
					uni.downloadFile({
						url: that.requestUrl+that.code_img, //that.requestUrl+that.code_img
						success: function(res) {
							if (res.statusCode === 200) {
								let url = res.tempFilePath
								that.keep_img(url)
							}
						}
					})
				} else if (type == 1) {
					uni.canvasToTempFilePath({
						canvasId:'this_my_poster',
						fileType:'jpg',
						success:function(res){
							// that.keep_url = res.tempFilePath
							that.keep_img(res.tempFilePath)
						}
					})
					// that.keep_img(that.keep_url)
				}
			},
			keep_img: function(url) {
				let that = this
				uni.saveImageToPhotosAlbum({
					filePath: url,
					success: function(res) {
						uni.showToast({
							title: '保存成功'
						})
					},
					fail: function(err) {
						uni.showToast({
							title: '保存失败'
						})
					}
				})
			},
			this_canvas: function() {
				let that = this
				let context = uni.createCanvasContext('this_my_poster')
				let width = uni.getSystemInfoSync().screenWidth
				context.drawImage('https://xcx.hmzixin.com/html/images/poster_bg.jpg',0,0,width,750)
				
				setTimeout(function(){
					console.log(that.requestUrl+that.code_img)
					context.drawImage(that.requestUrl+that.code_img,22,347,88,90)
					context.draw()
					context.save()
				},1000)
				// context.drawImage(that.requestUrl+that.code_img,23,247,92,92)
				
			},
		}
	}
</script>

<style scoped>
	.top-bar {
		text-align: center;
		font-size: 40rpx;
		position: fixed;
		z-index: 100;
		width: 100%;
		top: 0;
		left: 0;
		background-color: #222222;
		color: #FFFFFF;
	}

	.back-title {
		font-size: 38rpx;
		position: relative;
		text-align: center;
	}

	.back {
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		width: 60rpx;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}

	.back image {
		width: 36rpx;
		height: 36rpx;
	}

	.back-title .title {
		font-size: 37rpx;
	}

	.poster_info {
		position: relative;
	}

	.this_user_see {
		font-size: 24rpx;
		position: absolute;
		right: 10rpx;
		z-index: 9;
	}

	.this_bac_img {
		width: 100%;
	}

	.this_code_img {
		width: 184rpx;
		height: 184rpx;
		position: absolute;
		left: 46rpx;
		top: 694rpx;
		z-index: 9;
		background-color: #FA3475;
	}

	.keep_btn {
		position: fixed;
		bottom: 30rpx;
		width: 100%;
		left: 0;
		z-index: 9999;
		display: flex;
	}

	.keep_btn button::after {
		border: none;
	}

	.keep_poster {
		background-image: linear-gradient(-45deg, #111111 0%, #999999 100%);
		width: 40%;
		line-height: 80rpx;
		color: #FFFFFF;
		border-radius: 40rpx;
	}

	.keep_code {
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
		width: 40%;
		line-height: 80rpx;
		color: #FFFFFF;
		border-radius: 40rpx;
	}
	#this_my_poster{
		width: 100%;
	}
</style>
