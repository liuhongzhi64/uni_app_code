<template>
	<view class="goods_detail_problem_detail">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="content-details" :style="[{'padding-top':menuBottom+10+'px','min-height':height-menuBottom-10+'px'}]">
			<view class="top-content">
				<view class="top-ask">
					<view class="ask-title">问</view>
					<view class="ask-contnet">{{q_contents}}</view>
				</view>								
				<view class="all-img-video">
					<view class="image-video" v-for="(i,k) in q_img_list" :key='k' @tap='see_detail(i.type,i.video)'>
						<image class="correlation" :src="requestUrl+i.img" ></image>
						 <image class="this_video" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" v-if="i.type==1"></image>
					</view>
				</view>																
				<view class="all-answer">
					<view class="answer">
						<view class="answer-title">答</view>
						<view class="answer-content"> {{a_contents}} </view>	
					</view>
					<view class="all-img-video">
						<view class="image-video" v-for="(i,k) in a_img_list" :key='k' @tap='see_detail(i.type,i.video)'>
							<image class="correlation" :src="requestUrl+i.img" ></image>
							 <image class="this_video" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" v-if="i.type==1"></image>
						</view>
						
					</view>
				</view>
			</view>					
			<view class="footer">
				<view class="page-view-collect-transpond">
					<view class="page-view">浏览量: <text>{{views_num}}</text></view>
					<view class="collect" v-if="is_collect == 0" @tap='clickLike(id)'>
						<image src="https://xcx.hmzixin.com/upload/images/3.0/collect.png" mode=""></image><text>{{collect_num}}</text>
					</view>
					<view class="collect" v-else @tap='cancelLike(id)'>
						<image src="https://xcx.hmzixin.com/upload/images/3.0/collect_hover.png" mode=""></image>
						<text class="collect_num">{{collect_num}}
						</text>
					</view>
					<view class="transpond" @tap="go_consult">
						<image src="../../static/images/share.png" mode=""></image> <text>提问</text>
					</view>
				</view>
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
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				barName: 'back', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '/static/images/back2.png',
				title: '问答详情',
				id: '',
				q_contents: '',
				a_contents: '',
				q_img_list: [],
				a_img_list: [],
				collect_num: 0,
				views_num: 0,
				is_collect: 0,
				requestUrl: '', //请求地址前缀
			}
		},
		onLoad: function(option) {
			let that = this
			let problem_id = option.id
			that.getDetail(problem_id)
			that.requestUrl = that.request.globalData.requestUrl
		},
		onReady() {
			let that = this;
			// 判定运行平台
			let platform = ''
			that.height = uni.getSystemInfoSync().screenHeight;
			switch (uni.getSystemInfoSync().platform) {
				case 'android':
					platform = 'android'
					break;
				case 'ios':
					platform = 'ios'
					break;
				default:
					platform = 'applet'
					break;
			}
			if (platform == 'applet') {
				// 获取屏幕高度
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
			} else {
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			getDetail: function(id) {
				let problemId = id
				this.request = this.$request
				let that = this
				let dataInfo = {
					interfaceId: 'qadetails',
					qa_id: problemId
				}
				this.request.uniRequest("qa", dataInfo).then(res => {
					if (res.data.code === 1000) {
						let data = res.data.data
						that.views_num = data.views_num
						that.id = data.id
						that.q_contents = data.q_contents
						that.a_contents = data.a_contents
						that.q_img_list = data.q_img_list
						that.a_img_list = data.a_img_list
						that.collect_num = data.collect_num
						that.is_collect = data.is_collect
					} else {
						this.request.showToast(res.data.message);
					}
				})
			},
			
			// 收藏
			clickLike:function(){
				this.request = this.$request
				let that = this
				let problemId = that.id
				let state = that.is_collect
				// state状态 是否收藏  0未收藏 1 收藏
				if(state == 0){
					let dataInfo = {
						interfaceId:'collectqa',
						qa_id:problemId
					}
					this.request.uniRequest("qa", dataInfo).then(res => {
						if (res.data.code === 1000) {
							this.request.showToast("收藏"+res.data.message);
						} else {
							this.request.showToast(res.data.message);
						}
					})
				}else{
					let dataInfo = {
						interfaceId:'cancelcollectqa',
						qa_id:problemId
					}
					this.request.uniRequest("qa", dataInfo).then(res => {
						if (res.data.code === 1000) {
							this.request.showToast("取消"+res.data.message);
						} else {
							this.request.showToast(res.data.message);
						}
					})
				}
				
			},
			
			// 咨询
			go_consult:function(){
				uni.navigateTo({
					url: `/pages/consultation/consultation`,
				})
			},
			// 点击图片
			see_detail:function(type,video){
				// "type": 0  图片  1 视频
				if(type == 1){
					uni.navigateTo({
						url: `/pages/goods/goods_detail_video?video=${video}`,
					})
				}
			}
		}
	}
</script>

<style scoped>
	.content-details{
		background-color: #F0F0F0;
		/* padding: 20rpx 0 0 ; */
	}
	.top-content{
		padding: 20rpx ;
		background-color: #FFFFFF;
	}
	.top-ask{
		display: flex;
		/* align-items: center; */
	}
	.ask-title{
		width: 32rpx;
		height: 32rpx;
		line-height: 32rpx;
		background-image: linear-gradient(-45deg,  #fa3475 0%, #ff6699 100%);
		font-size: 18rpx;
		color: #FFFFFF;	
		border-radius: 16rpx;
		text-align: center;
	}
	.ask-contnet{
		font-size: 28rpx;
		margin-left: 15rpx;
		flex: 1;
	}
	.all-img-video{
		display: flex;
		width: 100%;
		padding: 26rpx 0 0 0;
	}
	.image-video{
		position: relative;
	}
	.this_video{
		position: absolute;
		width: 60rpx;
		height: 60rpx;
		top: 85rpx;
		left: 85rpx;
		opacity: 0.8;
	}
	.correlation{
		width: 230rpx;
		height: 230rpx;
		border-radius: 10rpx;
		background-color: #d9d9d9;
		margin-right: 6rpx;
	}
	.all-answer{	
		padding-top: 40rpx;
		padding-bottom: 23rpx;
		border-bottom: 1rpx solid #F0F0F0;
	}
	.answer{
		display: flex;
	}
	.answer-title{
		width: 32rpx;
		height: 32rpx;
		font-size: 18rpx;
		color: #FFFFFF;	
		border-radius: 18rpx;
		text-align: center;
		background-image: linear-gradient(-45deg, #8834fa 0%, #bc66ff 100%);	
	}
	.answer-content{
		font-size: 24rpx;
		line-height: 36rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
		margin-left: 15rpx;
		flex: 1;
	}
	.footer {
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 30rpx 0;
		border-top: 2rpx solid #f0f0f0;
	}

	.page-view-collect-transpond {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.page-view-collect-transpond image {
		width: 40rpx;
		height: 40rpx;
		margin-right: 10rpx;
	}

	.collect,
	.transpond {
		display: flex;
		font-size: 26rpx;
		color: #999999;
		align-items: center;
	}
	.collect_num{
		color: #bc66ff;
	}
	.page-view {
		color: #fa3475;
		font-size: 26rpx;
	}
</style>
