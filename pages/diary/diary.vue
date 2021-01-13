<template>
	<view class="diary">
		<view class="diary-top-bar">
			<view class="bar-name" :style="[{'height':menuHeight+'px','margin-top':menuTop+'px','border-radius':menuHeight/2+'px','line-height':menuHeight+'px','padding-right':menuWidth+20+'px','padding-bottom':10+'px'}]">
				<image class="back_image" @tap="go_back" src="/static/images/return.png" :style="[{'top':menuTop+8+'px'}]"></image>
				<view class="top-navigation-bars" v-for="(item,index) in navigationList" :key='index' :class="{checked :btnnum == index}"
				 @tap="change_top(index)"> {{ item }}
					<view :class="{checkedBar :btnnum == index}"> </view>
				</view>
			</view>
		</view>
		<view class="content-all-bar" :style="[{'padding-top':menuBottom+10+'px'}]">
			<view class="content-bar">
				<scroll-view class="content-bar-items" scroll-x="true">
					<view class="top-content">
						<navigator class="top-content-list" v-for="(i,k) in topTabList" :key="k" 
						 :url="'/pages/diary/about_list?id='+i.id+'&name='+this_name+'&title='+i.name">
							<view class="list-items">
								<view class="item-image">
									<image :src="requestUrl+i.icon" mode=""></image>
								</view>
								<view class="item-name">{{i.name}}</view>
							</view>
						</navigator>
					</view>
				</scroll-view>
			</view>
		</view>

		<!-- 主体内容 -->
		<view class="detail-content" :style="[{'min-height':height-menuBottom-150+'px'}]">
			<!-- 主体内容 -->
			<diary :diaryList="contentList" :requestUrl='requestUrl' @collect_diary='collect_diary' @cancel_like='cancel_like'
			 v-if="btnnum==1">
			</diary>
			<view class="this_list" v-else-if='btnnum==2'>
				<view class="video_info">
					<view class="video_left">
						<view class="left_content">
							<view class="left_item" v-for="(item,index) in content_list" :key='index' v-if="index%2==0">
								<navigator class="video-images" :url="'/pages/diary/diary_video?path='+item.path+'&id='+item.id">
									<image class="video_img" :src="requestUrl+item.cover_img" mode="widthFix"></image>
									<image class="pay_btn" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" mode="widthFix"></image>
								</navigator>
								<view class="info_content">
									<view class="video_name"> {{ item.name }} </view>
									<view class="category_list">
										<view class="list_item" v-for="(i,k) in item.category_name" :key='k'> {{ i }} </view>
									</view>
									<navigator class="video_goods" v-if="Object.prototype.toString.call(item.goods_relation)!='[object Array]'"
									 :url="'/pages/goods/goods_detail?sku_id='+item.goods_relation.id+'&encrypted_id='+item.goods_relation.encrypted_id">
										<image :src="requestUrl+item.goods_relation.head_img" class="goods_img"></image>
										<view class="video_goods_info">
											<view class="video_goods_name"> {{ item.goods_relation.goods_name }} </view>
											<view class="video_goods_sale_price"> ￥{{ item.goods_relation.sale_price }} </view>
										</view>
									</navigator>
									<view class="user_info">
										<view class="head_ico-nick_name">
											<image class="head_ico" :src="requestUrl+item.doctor_relation.heading" mode=""></image>
											<text class="nick_name">{{ item.doctor_relation.name }}</text>
										</view>
										<view class="is_no_collect" v-if="item.is_collect==0" @tap="cancel_video_like(item.is_collect,item.id,index)">
											<view class="like">
												<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png"></image>
											</view>
											{{ item.collect_num || 0 }}
										</view>
										<view class="collect_num" v-else @tap="cancel_video_like(item.is_collect,item.id,index)">
											<view class="like">
												<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png"></image>
											</view>
											{{ item.collect_num }}
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="video_right">
						<view class="right_content">
							<view class="right_item" v-for="(item,index) in content_list" :key='index' v-if="index%2==1">
								<navigator class="video-images" :url="'/pages/diary/diary_video?path='+item.path+'&id='+item.id">
									<image class="video_img" :src="requestUrl+item.cover_img" mode="widthFix"></image>
									<image class="pay_btn" src="https://xcx.hmzixin.com/upload/images/3.0/video_play.png" mode="widthFix"></image>
								</navigator>
								<view class="info_content">
									<view class="video_name"> {{ item.name }} </view>
									<view class="category_list">
										<view class="list_item" v-for="(i,k) in item.category_name" :key='k'> {{ i }} </view>
									</view>
									<navigator class="video_goods" v-if="Object.prototype.toString.call(item.goods_relation)!='[object Array]'"
									 :url="'/pages/goods/goods_detail?sku_id='+item.goods_relation.id+'&encrypted_id='+item.goods_relation.encrypted_id">
										<image :src="requestUrl+item.goods_relation.head_img" class="goods_img"></image>
										<view class="video_goods_info">
											<view class="video_goods_name"> {{ item.goods_relation.goods_name }} </view>
											<view class="video_goods_sale_price"> ￥{{ item.goods_relation.sale_price }} </view>
										</view>
									</navigator>
									<view class="user_info">
										<view class="head_ico-nick_name">
											<image class="head_ico" :src="requestUrl+item.doctor_relation.heading" mode=""></image>
											<text class="nick_name">{{ item.doctor_relation.name }}</text>
										</view>
										<view class="is_no_collect" v-if="item.is_collect==0" @tap="cancel_video_like(item.is_collect,item.id,index)">
											<view class="like">
												<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png"></image>
											</view>
											{{ item.collect_num || 0 }}
										</view>
										<view class="collect_num" v-else @tap="cancel_video_like(item.is_collect,item.id,index)">
											<view class="like">
												<image class="like-image" src="https://img-blog.csdnimg.cn/20200620165003616.png"></image>
											</view>
											{{ item.collect_num }}
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import diary from '../../components/diary.vue';
	export default {
		components: {
			diary
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				btnnum: 2,
				navigationList: ['直播', '买家秀', '视频'],
				topTabList: [],
				this_name:'',
				contentList: [],
				content_list: [],
				requestUrl: '',
				offset: 0, //开始数据下标
				limit: 5, //条数
			}
		},
		onLoad: function() {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.change_top(that.btnnum)
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().windowHeight ;
			let platform = getApp().platform || getApp().globalData.platform || 'Applets'
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
			} else if (platform == 'APP'){
				that.menuWidth = 90
				that.menuTop = 40
				that.menuHeight = 30
				that.menuLeft = 278
				that.menuBottom = 70
			}
		},
		onReachBottom: function() {
			var that = this;
			if (that.btnnum == 1) {
				that.offset += 5;
				that.getDiaryList()
			}else if(that.btnnum == 2){
				that.offset += 5;
				that.get_video_list()
			}

		},
		methods: {
			change_top: function(index) {
				let that = this
				if (index == 0) {
					uni.showToast({
						title: '正在升级中...敬请期待!',
						icon: 'none'
					})
				} else if(index==1){
					this.btnnum = index
					that.offset = 0
					that.this_name = 'diary'
					that.contentList = []
					that.getDiaryClassfiy()
					that.getDiaryList()
					// uni.showToast({
					// 	title: '正在升级中...敬请期待!',
					// 	icon: 'none'
					// })
				}else if(index==2){
					this.btnnum = index
					that.offset = 0
					that.this_name = 'video'
					that.content_list = []
					that.get_video_classfiy()
					that.get_video_list()
				}

			},
			// 视频收藏
			cancel_video_like:function(is_collect,id,index){
				let that = this
				if(is_collect==0){
					let dataInfo = {
						interfaceId:'collectvideo',
						video_id:id.toString()
					}
					this.request.uniRequest("video", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.content_list[index].is_collect = 1
							that.content_list[index].collect_num +=1
							uni.showToast({
								title: '已收藏',
								duration: 1000
							})				
						}
					})
				}else{
					let dataInfo = {
						interfaceId:'cancelcollectvideo',
						video_id:id.toString()
					}
					this.request.uniRequest("video", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.content_list[index].is_collect = 0
							that.content_list[index].collect_num -=1
							uni.showToast({
								title: '已取消收藏',
								duration: 1000
							})				
						}
					})
				}
			},
			// 获取日记分类
			getDiaryClassfiy: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'category'
				}
				that.request.uniRequest("diary", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.topTabList = res.data.data
					}
				})
			},
			// 视频分类
			get_video_classfiy:function(){
				let that = this
				let dataInfo = {
					interfaceId:'categorylist'
				}
				that.request.uniRequest("video", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.topTabList = res.data.data
					}
				})
			},
			// 视频推荐
			get_video_list:function(){
				let that = this
				let dataInfo = {
					interfaceId: 'videorecommended',
					offset: that.offset,
					limit: that.limit
				}
				that.request.uniRequest("video", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						if (data.length == 0&&that.offset>0) {
							that.request.showToast('没有更多了')
						}else{
							that.content_list = that.content_list.concat(data)
						}
					}
				})
			},
			
			// 获取推荐日记列表
			getDiaryList: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'recommenddiarylist',
					offset: that.offset,
					limit: that.limit
				}
				that.request.uniRequest("diary", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						if (data.length == 0&&that.offset>0) {
							that.request.showToast('没有更多了')
						}
						that.contentList = that.contentList.concat(data)
					}
				})
			},
			// 收藏
			collect_diary: function(id, index) {
				let that = this
				let data = {
					interfaceId: 'collectdiary',
					diary_id: id
				}
				this.request.uniRequest("diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.contentList[index].is_collect = 1
						that.contentList[index].collect_num += 1
						uni.showToast({
							title: '已收藏',
							duration: 1000
						})
					}
				})
			},
			// 取消收藏
			cancel_like: function(id, index) {
				let that = this
				let data = {
					interfaceId: 'cancelcollectdiary',
					diary_id: id.toString()
				}
				this.request.uniRequest("diary", data).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						that.contentList[index].is_collect = 0
						that.contentList[index].collect_num -= 1
						uni.showToast({
							title: '已取消收藏',
							duration: 1000
						})
					}
				})
			},
			go_back:function(){
				uni.navigateBack({
					delta: 1
				});
			},
		}
	}
</script>

<style scoped>
	.diary-top-bar {
		background-color: #111111;
		color: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
	}

	.bar-name {
		display: flex;
		justify-content: space-around;
		color: #FFFFFF;
		padding-left: 40rpx;
	}
	
	.back_image{
		margin-left: 20rpx;
		width: 36rpx;
		height: 36rpx;
		padding-left: 10rpx;
		position: absolute;
		left: 0;
	}

	.top-navigation-bars {
		font-size: 32rpx;
		font-weight: normal;
		font-stretch: normal;
		position: relative;
	}

	.checked {
		font-size: 40rpx;
		font-weight: normal;
		font-stretch: normal;
	}

	.checkedBar {
		width: 0;
		height: 0;
		border-width: 16rpx;
		border-style: solid;
		border-color: transparent #FFFFFF transparent transparent;
		transform: rotate(90deg);
		position: absolute;
		bottom: -20rpx;
		left: 32%;
	}

	.end-cont {
		display: none;
	}

	.dis {
		display: block;
	}

	.content {
		background-color: #F6F6F6;
	}

	.content-all-bar {
		width: 100%;
		background-color: #FFFFFF;
		border-radius: 0 0 24rpx 24rpx;
	}

	.content-bar {
		white-space: nowrap;
	}

	.content-bar-items {
		width: 100%;
		height: 155rpx;
	}

	.top-content {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.top-content-list {
		height: 100%;
		text-align: center;
		padding: 0 45rpx;
		font-size: 24rpx;
		color: #4f4f4f;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.list-items {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}


	.item-image image {
		width: 64rpx;
		height: 48rpx;
		background-color: #F0F0F0;
	}


	.detail-content {
		display: flex;
		justify-content: space-between;
		padding: 30rpx 20rpx ;
		background-color: #F6F6F6;
	}

	.head_ico-nick_name {
		display: flex;
		align-items: center;
	}

	.head_ico {
		width: 48rpx;
		height: 48rpx;
		border-radius: 24rpx;
		background-color: #F0F0F0;
		margin-right: 10rpx;
	}

	.nick_name {
		font-size: 20rpx;
		color: #111111;
	}

	.collect_num {
		font-size: 30rpx;
		color: #fc4783;
		display: flex;
		align-items: center;
	}

	.is_no_collect {
		color: #B2B2B2;
		display: flex;
		align-items: center;
		font-size: 30rpx;
	}

	.is_no_collect .like {
		background-color: #d0d0d0;
		width: 40rpx;
		height: 40rpx;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 16rpx;
	}

	.collect_num .like {
		width: 42rpx;
		height: 42rpx;
		border-radius: 21rpx;
		background-image: linear-gradient(0deg, #fa3475 0%, #ff6699 100%), linear-gradient(#f56fb4, #f56fb4);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 16rpx;
	}

	.like-image {
		width: 24rpx;
		height: 24rpx;
	}

	/* 视频 */
	.this_list{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.video_info {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.left_content,
	.right_content {
		display: flex;
		flex-direction: column;
	}

	.left_item,
	.right_item {
		background-color: #FFFFFF;
		border-radius: 16rpx;
		width: 350rpx;
		margin-bottom: 20rpx;
	}

	.video-images {
		position: relative;
	}

	.video_img {
		width: 350rpx;
		border-radius: 16rpx 16rpx 0 0;
		background-color: #EEEEEE;
		display: block;
	}

	.pay_btn {
		position: absolute;
		left: 145rpx;
		bottom: 40%;
		width: 60rpx;
		height: 60rpx;
	}

	.info_content {
		padding: 10rpx;
		font-size: 24rpx;
	}

	.video_name {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-height: 32rpx;
		color: #111111;
	}

	.category_list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		padding-top: 15rpx;
		padding-bottom: 15rpx;
	}

	.list_item {
		line-height: 28rpx;
		padding: 0 15rpx;
		font-size: 18rpx;
		background-color: #999999;
		color: #FFFFFF;
		border-radius: 5rpx;
		margin-right: 20rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}

	.video_goods {
		display: flex;
		align-items: center;
		padding-bottom: 10rpx;
	}

	.goods_img {
		width: 100rpx;
		height: 100rpx;
		background-color: #F0f0f0;
	}

	.video_goods_info {
		flex: 1;
		height: 80rpx;
		padding: 0 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.video_goods_name {
		font-weight: lighter;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}

	.video_goods_sale_price {
		color: #fa3475;
	}

	.user_info {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
