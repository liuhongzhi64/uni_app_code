<template>
	<view class="goods_detail_problem">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<view class="goods_detail_problem_contnet" :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
			<scroll-view class="problem-content">
				<template>
					<view class="content-details">
						<view class="content-list" v-for="(item,index) in contentList" :key='index'>
							<view class="subject-content"  @tap='problemDetail(item.id)'>
								<view class="top-ask">
									<view class="ask-title">问</view>
									<view class="ask-contnet">{{item.q_contents}}</view>
								</view>								
								<view class="all-img-video">
									<view class="image-video" v-for="(i,k) in item.q_img_list" :key='k'>
										<image class="correlation" :src="requestUrl+i.img" mode="" :data-type='i.type'></image>
										<!-- <video class="correlation" :src="requestUrl+i.video" controls v-else></video> -->
									</view>
									<image class="correlation" src="../../static/images/19.png" mode=""></image>
								</view>																
								<view class="all-answer">
									<view class="answer">
										<view class="answer-title">答</view>
										<view class="answer-content"> {{item.a_contents}} </view>	
									</view>
									<view class="all-img-video">
										<view class="image-video" v-for="(i,k) in item.a_img_list" :key='k'>
											<image class="correlation" :src="requestUrl+i.img" mode="" :data-type='i.type'></image>
											<!-- <video class="correlation" :src="requestUrl+i.video" controls v-else></video> -->
										</view>
									</view>
								</view>
							</view>
														
							<view class="browse-like-consult">
								<view class="browse" v-if="item.views_num<=9999">{{item.views_num}}浏览量</view>
								<view class="browse" v-else>9999+浏览量</view>
								<view class="like" @tap='clickLike(item.id,item.is_collect)'>
									<image src="../../static/images/collect.png" mode="" v-if="item.is_collect == 0" ></image> 
									<image src="../../static/images/checked-collect.png" mode="" v-else ></image> 
									<text>{{item.collect_num}}</text>
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
				</template>
			</scroll-view>
		</view>
		
		<view class="footer">
			<view class="next-step">
				<button class="issue-botton" type="default" plain="true" @tap='quiz'> 立即提问 </button>
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
				backImage: '../static/images/back2.png',
				title: '整呗官方答疑',
				contentList:[],
				requestUrl: '', //请求地址前缀
			}
		},
		onLoad: function(option) {
			let that = this
			that.getMessage()
			that.requestUrl = that.request.globalData.requestUrl
			console.log(that.requestUrl)
		},
		onReady() {
			let that = this;
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					that.height = res.screenHeight
					let menu = uni.getMenuButtonBoundingClientRect();
					that.menuWidth = menu.width
					that.menuTop = menu.top
					that.menuHeight = menu.height
					that.menuLeft = menu.left
					that.menuBottom = menu.bottom
				}
			})
		},
		methods: {
			getMessage:function(){
				this.request = this.$request
				let that = this
				let encrypted_id = 'MFFrKzlnYnMzUTV1NGNrRjYvS3I1Zz09'
				let dataInfo = {
					interfaceId : 'qalist',
					encrypted_id : encrypted_id,
					offset:0,
					limit:10
				}
				this.request.uniRequest("qa", dataInfo).then(res => {
					if (res.data.code === 1000) {
						// console.log(res.data.data)
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
			clickLike:function(id,state){
				this.request = this.$request
				let that = this
				let problemId = id
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
			
			// 提问
			goToCondult:function(id){
				let problemId = id
				uni.navigateTo({
					url: `/pages/consultation/consultation?id=${problemId}`,
				})
			},
			
			// 立即提问
			quiz:function(){
				console.log('立即提问')
			}
		}
	}
</script>

<style scoped>
	.goods_detail_problem_contnet{
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
	.top-ask{
		display: flex;
		align-items: center;
	}
	.ask-title{
		width: 32rpx;
		line-height: 32rpx;
		background-image: linear-gradient(-45deg,  #fa3475 0%, #ff6699 100%);
		font-size: 18rpx;
		color: #FFFFFF;	
		border-radius: 18rpx;
		text-align: center;
	}
	.ask-contnet{
		font-size: 28rpx;
		margin-left: 15rpx;
	}
	.all-img-video{
		display: flex;
		width: 100%;
		padding: 26rpx 0 0;
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
	
	.footer {
		width: 100%;
		position: fixed;
		bottom: 0;
		/* background-color: #FFFFFF; */
	}
	.next-step {
		padding: 40rpx;
	}
	.issue-botton {
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
		box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(250, 53, 118, 0.5);
		border-radius: 40rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		border: none;
		text-align: center;
		line-height: 80rpx;
	}
</style>
