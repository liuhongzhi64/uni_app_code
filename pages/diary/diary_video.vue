<template>
	<view class="diary_video">
		<view class="top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px','background-color':topBackgroundColor}]">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back" @click="goBack" >
					<image src="/static/images/back2.png" mode=""></image>
				</view>
				<view class="title" > {{title}} </view>
			</view>
		</view>
		<!-- 日记详情（视频） -->
		<view class="video_content" :style="[{'padding-top':menuBottom+10+'px'}]" >
			<video class="play-video" :src="videoUrl" controls :style="[{'height':height-10-menuBottom+'px'}]"
			 :auto-pause-if-navigate="true" :enable-play-gesture="true" 
			 >
			 <cover-view class="index">简单的自定义 controls</cover-view>
			 
			 </video>
			 
			<view class="right_btn">
				<view class="set_like" @tap="collect_video(video_info.is_collect,video_info.id)">
					<view class="this_like" v-if="video_info.is_collect==0">
						<image class="like_img" src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
					</view>
					<view class="this_liking" v-if="video_info.is_collect==1">
						<image class="like_img" src="https://img-blog.csdnimg.cn/20200620165003616.png" ></image>
					</view>
					<text :class="video_info.is_collect==1?'is_like':''"> {{ video_info.collect_num }} </text>
				</view>
				<navigator class="consulting" url="/pages/consultation/consultation">
					<image class="consulting_img" src="/static/images/consulting.png" mode=""></image>
					<text>咨询</text>
				</navigator>
				<view class="share" @tap="share_video(video_info.id)">
					<image class="share_img" src="https://xcx.hmzixin.com/upload/images/3.0/share.png" mode=""></image>
					<text> {{ video_info.share_num }} </text>
				</view>
			</view>
			<view class="relevant">
				<view class="relevant_content">
					<!-- 单个关联商品时 -->
					<navigator class="relevant_info" 
					 v-for="(item,index) in video_info.goods_relation" :key='item.id'
					 :url="'/pages/goods/goods_detail?sku_id='+item.id+'&encrypted_id='+item.encrypted_id">
						<image class="info_img" :src="item.head_img" ></image>
						<view class="info_content">
							<view class="info_title"> {{ item.goods_name }} </view>
							<view class="good-price"> <text>￥</text> {{ item.sale_price }} </view>
						</view>
					</navigator>
					
					<!-- 单个医生关联 -->
					<navigator class="relevant_info" 
					 v-for="(item,index) in video_info.doctor_relation" :key='item.id'
					 :url="'/pages/doctor/doctor_detail?id='+item.id">
						<image class="info_img" :src="requestUrl+item.heading" ></image>
						<view class="info_content">
							<view class="info_title"> {{ item.name }} <text class="zhicheng">{{ item.view }}</text> </view>
							<view class="view"> {{ item.zhicheng }} </view>
						</view>
					</navigator>
					
				</view>
			</view>
			<view class="video_sign" @tap="show_info" v-if="!this_show">
				<view class="sign_info"> 
					<view class="video_name">{{ video_info.name }}</view>
					<view class="sign_content"> {{ video_info.sign }} </view>
				</view>
				<image class="video_img" src="/static/images/arrow-top.png" mode=""></image>
			</view>
			<view class="video_sign" @tap="show_info" v-if="this_show">
				<view class="sign_info"> 
					<view class="show_video_name">{{ video_info.name }}</view>
					<view class="show_sign_content"> {{ video_info.sign }} </view>
				</view>
				<image class="video_img" src="/static/images/arrow-down.png" mode=""></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				requestUrl: '',
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				title:'视频详情',
				topBackgroundColor: '#222222',
				videoUrl:'',
				path:"upload/video/videos/202011/25/BJdGKSxEd6A9GxuN9nAGACAbeIWFMIoUzBOsmpQm.mp4",
				video_info:{},
				this_show:false,
			}
		},
		onLoad: function(option) {
			this.request = this.$request
			let that = this
			that.requestUrl = that.request.globalData.requestUrl
			if(option.path){
				let videoUrl = that.requestUrl + option.path
				that.videoUrl = videoUrl
			}else{
				that.videoUrl = that.requestUrl + that.path
			}
			// console.log(option.id,option) 
			if(option.id){
				that.get_video_detail(option.id)
			}else{
				that.get_video_detail(20)
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
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuLeft = menu.left
						that.menuBottom = menu.bottom
					}
				})
			}
			else if (platform == 'APP'){
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			// 返回上一级
			goBack: function() {
				// console.log('back')
				uni.navigateBack({
					delta: 1
				});
			},
			get_video_detail:function(id){
				let that = this
				let dataInfo = {
					interfaceId:'videodetails',
					video_id:id
				}
				this.request.uniRequest("video", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.video_info = data
					}
				})
			},
			show_info:function(){
				let that = this
				that.this_show = !that.this_show
			},
			collect_video:function(type,id){
				let that = this
				if(type==0){
					let dataInfo = {
						interfaceId:'collectvideo',
						video_id:id.toString()
					}
					this.request.uniRequest("video", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.video_info.is_collect = 1
							that.video_info.collect_num +=1
							uni.showToast({
								title:'收藏成功',
								duration:1000
							})
						}
					})
				}else if(type==1){
					let dataInfo = {
						interfaceId:'cancelcollectvideo',
						video_id:id.toString()
					}
					this.request.uniRequest("video", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.video_info.is_collect = 0
							that.video_info.collect_num -=1
							uni.showToast({
								title:'已取消',
								duration:1000
							})
						}
					})
				}
			},
			share_video:function(id){
				let that = this
				let platform = getApp().platform || getApp().globalData.platform
				if (platform == 'Applets') {
					uni.showToast({
						title:'正在升级中...',
						icon:'none'
					})
				}
				else if (platform == 'APP'){
					uni.share({
						provider:'weixin',
						scene:'WXSceneSession' ,//WXSceneSession 分享到聊天界面 WXSenceTimeline 分享到朋友圈 WXSceneFavorite 分享到微信收藏
						type:0 ,//分享类型。默认图文0，纯文字1，纯图片2，音乐3，视频4，小程序5
						summary:'我正在使用华美整呗APP,快来喝我一起来体验',
						success: function (res) {
						    console.log("success:" + JSON.stringify(res));
						},
						fail: function (err) {
						    console.log("fail:" + JSON.stringify(err));
						}
					})
				}
				
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
		opacity: 0.8;
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
		flex: 1;
		font-size: 37rpx;
		color: #FFFFFF;
	}
	
	.play-video{
		width: 100%;
		position: fixed;
		left: 0;
	}
	.set_like,.consulting,.share{
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #FFFFFF;
		margin-bottom: 40rpx;
	}
	
	.right_btn{
		position: fixed;
		right: 30rpx;
		bottom: 280rpx;
		z-index: 9;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.this_like{
		width: 60rpx;
		height: 60rpx;
		border: 1rpx solid #FFFFFF;
		border-radius: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.this_liking{
		width: 60rpx;
		height: 60rpx;
		border: 1rpx solid #FA3475;
		border-radius: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: #FA3475;
	}
	.is_like{
		color: #FA3475;
	}
	.like_img{
		width: 40rpx;
		height: 40rpx;
	}
	.consulting_img,.share_img{
		width: 60rpx;
		height: 60rpx;
		margin-bottom: 10rpx;
	}
	
	.relevant{
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 150rpx;
		opacity: 0.8;
	}
	.relevant_content{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
	}
	.relevant_info{
		width: 320rpx;
		background-color: #111111;
		display: flex;
		align-items: center;
		border-radius: 10rpx;
	}
	.info_img{
		width: 100rpx;
		height: 100rpx;
		display: block;
		background-color: #FFFFFF;
		border-top-left-radius: 10rpx;
		border-bottom-left-radius: 10rpx;
	}
	.info_content{
		font-size: 20rpx;
		color: #FFFFFF;
		height: 100rpx;
		padding-left: 10rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.info_title {
		line-height: 24rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 24rpx;
	}
	.zhicheng{
		font-size: 20rpx;
		margin-left: 10rpx;
	}
	.good-price{
		color: #FA3475;
	}
	.view{
		line-height: 24rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.video_sign{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-image: linear-gradient(top, #0D0D0D 0%, #000000 100%);
		opacity: 0.6;
		color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
	}
	.sign_info{
		padding: 20rpx;
		flex: 1;
		z-index: -1;
	}
	
	.video_name{
		font-size: 32rpx;
		margin-bottom: 10rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	.show_video_name{
		font-size: 32rpx;
		margin-bottom: 10rpx;
	}
	.sign_content{
		line-height: 32rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	.video_img{
		width: 40rpx;
		height: 40rpx;
		padding-right: 20rpx;
	}
	
	.index{
		font-size: 24rpx;
		color: #FFFFFF;
		line-height: 32rpx;
		position: absolute;
		top: 180rpx;
	}
	
</style>
