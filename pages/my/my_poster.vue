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
		<view class="this_user_see" v-if="this_show_text" :style="[{'top':menuBottom+15+'px'}]"> {{ user_info.tel }} (仅个人可见) </view>
		<view class="poster_info" :style="[{'margin-top':menuBottom+10+'px'}]">
			<image class="this_bac_img" src="https://xcx.hmzixin.com/html/images/poster_bg.jpg" mode="widthFix"></image>
			<image class="this_code_img"  :src="requestUrl+code_img"></image> 
		</view>
		<view class="keep_btn">
			<button class="keep_poster" type="default" size="mini" @tap="this_keep(1)">
				保存海报
			</button>
			<button class="keep_code" type="default" size="mini" @tap="this_keep(0)">
				保存个人二维码
			</button>
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
				requestUrl:'',
				user_info:{},
				code_img:'',
				this_show_text:true
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
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			
		},
		onShow:function(){
			let that = this
			that.user_info = uni.getStorageSync("userInfo")
			// console.log(that.user_info)
			// that.get_user_code()
		},
		methods: {
			go_back:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			get_user_code:function(){
				let that = this
				let dataInfo = {
					interfaceId: 'get_qr_code',
					parameter:that.user_info.unique_id,
					type:'4'
				}
				that.request.uniRequest("qrcode", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.code_img = data.img_url
					}
				})
			},
			this_keep:function(type){
				let that = this
				
				if(type==0){
					uni.getImageInfo({
						src:'https://xcx.hmzixin.com/html/images/poster_bg.jpg', //that.requestUrl+that.code_img
						success:function(res){
							let url = res.path+'.jpg'
							that.keep_img(url)
						}
					})
				}else if(type==1){
					that.this_show_text = false
					let this_pages = getCurrentPages();
					let this_page = this_pages[this_pages.length-1];
					let bitmap=null;
					let currentWebview = this_page.$getAppWebview();
					bitmap = new plus.nativeObj.Bitmap('amway_img');
					currentWebview.draw(bitmap,function(){
						bitmap.save('test.jpg',{},function(i){
							console.log(i.target)
							// that.keep_img(i.target)
						})
					})
				}
			},
			keep_img:function(url){
				let that = this
				
				uni.saveImageToPhotosAlbum({
					filePath:url,
					success:function(res){
						console.log(111111)
						that.this_show_text = true
					},
					fail:function(err){
						that.this_show_text = true
						console.log(222)
					}
				})
			}
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
	
	.poster_info{
		position: relative;
	}
	
	.this_user_see{
		font-size: 24rpx;
		position: absolute;
		right: 10rpx;
		z-index: 9;
	}
	
	.this_bac_img{
		width: 100%;
	}
	
	.this_code_img{
		width: 184rpx;
		height: 184rpx;
		position: absolute;
		left: 46rpx;
		top: 694rpx;
		z-index: 9;
		background-color: #F0F0F0;
	}
	
	.keep_btn{
		position: fixed;
		bottom: 30rpx;
		width: 100%;
		left: 0;
		z-index: 9;
		display: flex;
	}
	.keep_btn button::after{
		border: none;
	}
	.keep_poster{
		background-image: linear-gradient(-45deg,  #111111 0%,  #999999 100%);
		width: 40%;
		line-height: 80rpx;
		color: #FFFFFF;
		border-radius: 40rpx;
	}
	.keep_code{
		background-image: linear-gradient(-45deg,  #fa3475 0%,  #ff6699 100%);
		width: 40%;
		line-height: 80rpx;
		color: #FFFFFF;
		border-radius: 40rpx;
	}
</style>
