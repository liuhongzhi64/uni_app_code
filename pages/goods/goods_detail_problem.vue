<template>
	<view class="goods_detail_problem">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<view class="content-details" :style="[{'padding-top':menuBottom+10+'px','min-height':height-menuBottom-10+'px'}]">
			<view class="content-list" v-for="(item,index) in contentList" :key='index'>
				<view class="subject-content"  @tap='problemDetail(item.id)'>
					<view class="top-ask">
						<view class="ask-title">问</view>
						<view class="ask-contnet">{{item.q_contents}}</view>
					</view>								
					<view class="all-img-video" v-if="item.q_img_list.length>0">
						<scroll-view class="image-video" scroll-x="true">
							<view class="item_img" v-for="(i,k) in item.q_img_list" :key="k">
								<image class="correlation" :src="requestUrl+i.img" > </image>
								<image class="this_video" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" v-if="i.type==1"></image>
							</view>
						</scroll-view>
					</view>																
					<view class="all-answer">
						<view class="answer">
							<view class="answer-title">答</view>
							<view class="answer-content"> {{item.a_contents}} </view>	
						</view>
						<view class="all-img-video" v-if="item.a_img_list.length>0">
							<scroll-view class="image-video" scroll-x="true">
								<view class="item_img" v-for="(i,k) in item.a_img_list" :key="k">
									<image class="correlation" :src="requestUrl+i.img" > </image>
									<image class="this_video" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" v-if="i.type==1"></image>
								</view>
							</scroll-view>
						</view>
					</view>
				</view>						
				<view class="browse-like-consult">
					<view class="browse" v-if="item.views_num<9999">{{item.views_num}}浏览量</view>
					<view class="browse" v-else>9999+浏览量</view>
					<view class="like" @tap='clickLike(item.id,item.is_collect,index)'>
						<image src="https://xcx.hmzixin.com/upload/images/3.0/collect.png" mode="" v-if="item.is_collect == 0" ></image> 
						<image src="https://xcx.hmzixin.com/upload/images/3.0/collect_hover.png" v-else ></image> 
						<text :class="item.is_collect == 1?'collect_hover':''">{{item.collect_num}}</text>
					</view>
					<view class="consult" @tap='goToCondult(item.id)'>
						<image src="../../static/images/share.png" mode=""></image> <text>提问</text>
					</view>
				</view>
			</view>						
			<view class="no-content" v-if="contentList.length==0">
				<image src="../../static/images/cartBg.png" mode=""></image>
				<view class="hint">喵~ 暂无相关内容</view>
			</view>
		</view>	
		<view class="footer">
			<view class="next-step">
				<button class="issue-botton" type="default"  @tap='quiz'> 立即提问 </button>
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
				title: '整呗官方答疑',
				contentList:[],
				requestUrl: '', //请求地址前缀
			}
		},
		onLoad: function(option) {
			let that = this
			this.request = this.$request
			that.getMessage(option.id)
			that.requestUrl = that.request.globalData.requestUrl					
		},
		onReady() {
			let that = this;
			// 判定运行平台
			that.height = uni.getSystemInfoSync().screenHeight;
			let platform = getApp().platform || getApp().globalData.platform
			if (platform == 'Applets') {
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
			} 
			else if (platform == 'APP'){
				that.menuWidth = 90
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			getMessage:function(id){
				let that = this
				let dataInfo = {
					interfaceId : 'qalist',
					encrypted_id : id,
					offset:0,
					limit:4
				}
				this.request.uniRequest("qa", dataInfo).then(res => {
					if (res.data.code === 1000) {
						that.contentList = res.data.data
					} else {
						this.request.showToast(res.data.message);
					}
				})
			},
			
			problemDetail:function(id){
				// console.log(id)
				let problemId = id
				uni.navigateTo({
					url: `/pages/goods/goods_detail_problem_detail?id=${problemId}`,
				})
			},
			// 收藏
			clickLike:function(id,state,index){
				let that = this
				let problemId = id
				console.log(11111)
				// state状态 是否收藏  0未收藏 1 收藏
				if(state == 0){
					let dataInfo = {
						interfaceId:'collectqa',
						qa_id:problemId
					}
					this.request.uniRequest("qa", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.contentList[index].is_collect = 1
							that.contentList[index].collect_num +=1
							uni.showToast({
								title: '已收藏',
								duration: 1000
							})
						}
					})
				}else{
					let dataInfo = {
						interfaceId:'cancelcollectqa',
						qa_id:problemId
					}
					this.request.uniRequest("qa", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.contentList[index].is_collect = 0
							that.contentList[index].collect_num -=1
							uni.showToast({
								title: '已取消收藏',
								duration: 1000
							})
						}
					})
				}				
			},
			
			// 提问
			goToCondult:function(id){
				let problemId = id
				uni.navigateTo({
					url: `/pages/consultation/consultation?id=${problemId}`,
				})
			},
			
			// 立即提问
			quiz:function(){
				uni.navigateTo({
					url: `/pages/consultation/consultation`,
				})
			}
		}
	}
</script>

<style scoped>
	.content-details{
		background-color: #F0F0F0;
	}
	.content-list{
		padding: 32rpx 20rpx 40rpx;
		background-color: #FFFFFF;
		border-radius: 24rpx;
		margin-bottom: 20rpx;
	}
	.content-list:first-child{
		border-radius: 0 0 24rpx 24rpx;
	}
	.content-list:last-child{
		margin-bottom: 120rpx;
		padding-bottom: 0;
	}
	.top-ask{
		display: flex;
	}
	.ask-title{
		width: 32rpx;
		height: 32rpx;
		line-height: 32rpx;
		padding: 0 6rpx;
		background-image: linear-gradient(-45deg,  #fa3475 0%, #ff6699 100%);
		font-size: 18rpx;
		color: #FFFFFF;	
		border-radius: 16rpx;
		text-align: center;
	}
	.ask-contnet{
		font-size: 28rpx;
		margin-left: 15rpx;
	}
	.all-img-video{
		padding: 26rpx 0 0;
		display: flex;
		align-items: center;
		height: 230rpx;
		width: 100%;
	}
	.image-video{
		overflow: hidden;
		white-space: nowrap;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.item_img{
		width: 100%;
		display: inline-block;
		width: 230rpx;
		height: 230rpx;
		background-color: #d9d9d9;
		margin-right: 10rpx;
		position: relative;
	}
	.item_img:last-child{
		margin-right: 0;
	}
	.correlation{
		width: 230rpx;
		height: 230rpx;
		border-radius: 10rpx;
	}
	.this_video{
		position: absolute;
		width: 60rpx;
		height: 60rpx;
		top: 80rpx;
		left: 80rpx;
		opacity: 0.8;
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
		line-height: 32rpx;
		font-size: 18rpx;
		color: #FFFFFF;	
		border-radius: 16rpx;
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
	.browse-like-consult{
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		color: #b2b2b2;
		padding-top: 26rpx;
	}
	.browse-like-consult image{
		width: 40rpx;
		height: 40rpx;
		margin-right: 10rpx;
	}
	.browse-like-consult .like{
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 33.3%;
	}
	.browse-like-consult .consult{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 33.3%;
	}
	.browse{
		color: #fa3475;
		flex: 1;
		text-align: center;
	}
	.no-content{
		margin-top: 140rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}
	.no-content image{
		width: 525rpx;
		height: 370rpx;
	}
	.no-content .hint{
		color: #9e9e9e;
		font-size: 28rpx;
		margin-top: 56rpx;
	}
	.collect_hover{
		color: #9F55FF;	
	}
	
	.footer {
		width: 100%;
		position: fixed;
		bottom: 0;
	}
	.next-step {
		padding: 40rpx;
	}
	.issue-botton {
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
		border-radius: 40rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		text-align: center;
		line-height: 80rpx;
	}
	.issue-botton::after{
		border: none;
	}
</style>
