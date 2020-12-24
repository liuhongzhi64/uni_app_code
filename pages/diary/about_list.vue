<template>
	<view class="about_list">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<view class="about_list_content" :style="[{'padding-top':menuBottom+25+'px','height':height-menuBottom-25+'px'}]">
			<scroll-view scroll-y="true" v-if="content_list.length>0">
				<diary :diaryList="content_list" :requestUrl='requestUrl' @collect_diary='collect_diary' @cancel_like='cancel_like'
				 v-if="this_show=='diary'">
				</diary>
				<view class="this_list" v-else-if="this_show=='video'">
					<view class="video_info">
						<view class="video_left">
							<view class="left_content">
								<view class="left_item" v-for="(item,index) in content_list" :key='index' v-if="index%2==0">
									<navigator class="video-images" :url="'/pages/diary/diary_video?id='+item.id">
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
									<navigator class="video-images" :url="'/pages/diary/diary_video?id='+item.id">
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
			</scroll-view>
			<view class="no_have_info" v-else >
				<image class="hint_img" src="https://xcx.hmzixin.com/upload/images/3.0/no_comment.png" mode="widthFix">
				</image>
				<view class="no-have_hint">暂无相关<text v-if="this_show =='diary'">日记</text>
				<text v-else-if="this_show =='video'">视频</text> </view>
			</view>
		</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import diary from '../../components/diary.vue';
	export default {
		components: {
			topBar,
			diary
		},
		data() {
			return {
				menuTop: 50,
				menuHeight: 32,
				menuLeft: 280,
				menuBottom: 82,
				height: 812,
				barName: 'back', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '/static/images/back2.png',
				title: '',
				this_show: '',
				content_list: [],
				requestUrl:'',
				offset: 0,
				id:0
			}
		},
		onLoad: function(option) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.this_show = option.name
			if (that.this_show == 'diary') {
				that.title = option.title+'日记'
			} else if (that.this_show == 'video') {
				that.title = option.title+'视频'
			}
			that.id = option.id
			that.get_content(option.id)
		},
		onReady() {
			let that = this;
			// 判定运行平台
			let platform = getApp().platform || getApp().globalData.platform
			that.height = uni.getSystemInfoSync().screenHeight;
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
			} else if (platform == 'APP'){
				that.menuTop = 40
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 70
			}
		},
		methods: {
			get_content: function(id) {
				let that = this
				if (that.this_show == 'diary') {
					let dataInfo = {
						interfaceId: 'diarycategorylist',
						category_id: id,
						offset: that.offset,
						limit: 6
					}
					that.request.uniRequest("diary", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							that.content_list = that.content_list.concat(data)
							if (data.length == 0&&that.offset>0) {
								that.request.showToast('没有更多了')
							}
						}
					})
				} else if (that.this_show == 'video') {
					let dataInfo = {
						interfaceId: 'categoryvideolist',
						category_id: id,
						offset: that.offset,
						limit: 6
					}
					that.request.uniRequest("video", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							let data = res.data.data
							that.content_list = that.content_list.concat(data)
							if (data.length == 0&&that.offset>0) {
								that.request.showToast('没有更多了')
							}
						}
					})
				}
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
		},
		onReachBottom: function() {
			var that = this;
			that.offset += 6;
			that.get_content(that.id)
		},
	}
</script>

<style scoped>
	.about_list_content{
		background-color: #F0F0F0;
		padding: 0 20rpx 0;
	}
	.no_have_info{
		background-color: #F0F0F0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-size: 28rpx;
		color: #000000;
		height: 80%;
	}
	.hint_img{
		width: 60%;
	}
	
	/* 视频 */
	.this_list {
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

	.head_ico-nick_name {
		display: flex;
		flex: 1;
		align-items: center;
	}

	.head_ico {
		width: 48rpx;
		height: 48rpx;
		border-radius: 24rpx;
		margin-right: 10rpx;
		background-color: #F0F0F0;
	}

	.nick_name {
		font-size: 20rpx;
		color: #111111;
		font-weight: lighter;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
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
</style>
