<template>
	<view class="diary_personal">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<view class="diary_personal_content" :style="[{'padding-top':menuBottom+10+'px','min-height':height-menuBottom-10+'px'}]">
			<scroll-view scroll-y class="personal_content">
				<template>
					<view class="personal_content-all">
						<view class="user-message">
							<view class="user-head-portrait-name-phone-set">
								<view class="user-head-portrait">
									<image :src="requestUrl+user.head_ico" mode=""></image>
									<view class="name-cart-phone">
										<view class="user-name-cart">
											<view class="user-name" v-if="user.nick_name!=''">{{user.nick_name}}</view>
											<view class="user-name" v-else>还没有给喵起名字呢!</view>
										</view>
										<view class="user-signature" v-if="user.signature!=''"> {{ user.signature }} </view>
										<view class="user-signature" v-else> 很懒哟!喵,什么都没有留下呢! </view>
									</view>
								</view>
							</view>
							<view class="card-volume-integral-bean-balance-currency">
								<view class="all-card">
									<view class="card-number" v-if="count.num"> {{count.num}} </view>
									<view class="card-number" v-else> 0 </view>
									<view class="card-name"> 日记 </view>
								</view>
								<view class="all-card">
									<view class="card-number" v-if="count.collect_num"> {{count.collect_num}} </view>
									<view class="card-number" v-else> 0 </view>
									<view class="card-name"> 收藏量 </view>
								</view>
								<view class="all-card">
									<view class="card-number" v-if="count.share_num"> {{count.share_num}} </view>
									<view class="card-number" v-else> 0 </view>
									<view class="card-name"> 分享量 </view>
								</view>
								<view class="all-card">
									<view class="card-number" v-if="count.view_num"> {{count.view_num}} </view>
									<view class="card-number" v-else> 0 </view>
									<view class="card-name"> 浏览量 </view>
								</view>
							</view>
							<image class="top_img" src="https://xcx.hmzixin.com/upload/images/3.0/diary_personal_Arc.jpg" mode="widthFix"></image>
							<view class="diary_content">
								<!-- 主体内容 -->
								<diary :diaryList="list" :requestUrl='requestUrl' v-if="list.length>0"
								 :user_heading='user.head_ico' :this_my='this_my'
								 @collect_diary='collect_diary' @cancel_like='cancel_like'>
								</diary>
								<view class="no_have_list" v-else-if="list.length==0&&this_my">
									<image src="https://xcx.hmzixin.com/upload/images/3.0/no_comment.png" mode="widthFix"></image>
									您还没有日记喵!
									<text>快去写一条吧</text>
								</view>
							</view>
						</view>
					</view>
				</template>
			</scroll-view>
		</view>
		<view class="bottom-botton" v-if="this_my">
			<view class="keep-diary">
				<navigator class="keep-diary-botton" url="/pages/diary/diary_keep"> + 写日记 </navigator>
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
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				barName: 'back', //导航条名称
				topBackgroundColor: '#26272B',
				color: '#FFFFFF',
				backImage: '/static/images/back2.png',
				title: '个人主页',
				requestUrl: '',
				count: {
					collect_num: 0,
					is_write: 0,
					num: 0,
					share_num: 0,
					view_num: 0
				}, //第一页 offset 等于0 才返回 统计数据
				user: {
					signature: '',
					head_ico: 'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg',
					nick_name: ''
				}, //用户信息 第一页 offset 等于0 才返回 用户信息
				list: [
					// {
					// id: 15, //日记id
					// title: "黎巴嫩总统承认3周前就知道贝鲁特港有危险：但我不负责", //日记名称
					// cover_img: "upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg", //日记封面图片
					// collect_num: 1, //日记收藏数
					// video: "1", //日记视频地址
					// label: "", //日记标签   
					// status: -1, //日记状态  0待审核 1 审核通过  -1 审核未通过
					// category_name: "", //分类名称  有则显示
					// doctor_name: "陈扬", //关联的医生名称  有则显示
					// goods_name: "和你很高3", //关联的商品名称   有则显示
					// is_collect: 0, //当前用户是否收藏   0 未收藏  1  已收藏 
					// user_mark:"VUZSUFNGTkVTVzV5YjFCT05tcGxVbGRHUW1KR05HTkNVRVpDYjNZeVkwSTJTSGxsVVdkV016QmFjejA9" //日记用户标示
					// }, 
				], //日记列表
				offset: 0,
				this_my: false,
				user_mark:''
			}
		},
		onReachBottom: function() {
			let that = this;
			if(that.this_my){
				that.offset += 6;
				that.get_my_diary()
			}
			else{
				that.offset += 6;
				that.getMessage()
			}
		},
		onLoad: function(options) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			if (options.user_mark) {
				that.user_mark = options.user_mark
				that.getMessage()
			} else if (options.route) {
				that.this_my = true
				that.title = '我的日记主页'
				that.get_my_diary()
			} else {
				that.this_my = true
				that.title = '我的日记主页'
				that.get_my_diary()
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
				that.menuBottom = 70
				that.menuHeight = 30
				that.menuLeft = 278
			}
		},
		methods: {
			getMessage: function(user_mark) {
				let that = this
				let dataInfo = {
					interfaceId: 'inexuserhome',
					user_mark: that.user_mark,
					offset: that.offset,
					limit: 6
				}
				this.request.uniRequest("diary", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.count = data.count
						if (data.list.length == 0&&that.offset>0) {
							that.request.showToast('没有更多了')
						}
						that.list = that.list.concat(data.list)
						if(data.user){
							that.user = data.user
							that.title = data.user.nick_name + '的' + that.title
						}
					}
				})
			},
			get_my_diary: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'mydiary',
					offset: that.offset,
					limit: 6
				}
				this.request.uniRequest("diary", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						
						if(data.count){
							that.count = data.count
						}
						if (data.list.length == 0&&that.offset>0) {
							that.request.showToast('没有更多了')
						}
						that.list = that.list.concat(data.list)
						if (data.user) {
							that.user = data.user
							if (!data.user.nick_name) {
								let info = uni.getStorageSync("userInfo").real_name
								that.user.nick_name = info
							}
							if(data.user.head_ico){
								that.user.head_ico = data.user.head_ico
							}
						}
						
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
						that.list[index].is_collect = 1
						that.list[index].collect_num += 1
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
						that.list[index].is_collect = 0
						that.list[index].collect_num -= 1
						uni.showToast({
							title: '已取消收藏',
							duration: 1000
						})
					}
				})
			},
		}
	}
</script>

<style scoped>
	.user-message {
		position: relative;
	}

	.user-head-portrait-name-phone-set {
		padding: 10rpx 40rpx 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
		background-color: #26272B;
	}

	.user-head-portrait {
		display: flex;
		align-items: center;
	}

	.content {
		background-color: #F6F6F6;
	}

	.user-head-portrait image {
		width: 160rpx;
		height: 160rpx;
		border-radius: 80rpx;
		margin-right: 24rpx;
		background-color: #FFFFFF;
	}

	.user-name-cart {
		display: flex;
		align-items: center;
	}

	.user-name-cart .user-name {
		font-size: 32rpx;
		color: #FFFFFF;
	}

	.user-signature {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-height: 30rpx;
		width: 432rpx;
		color: #999999;
		margin-top: 12rpx;
	}

	.card-volume-integral-bean-balance-currency {
		padding: 40rpx 0 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: #FFFFFF;
		font-size: 32rpx;
		text-align: center;
		position: absolute;
		top: 160rpx;
		left: 0;
		z-index: 10;
		width: 100%;
	}

	.card-number {
		margin-bottom: 10rpx;
	}

	.all-card .card-name {
		color: #999999;
		font-size: 24rpx;
	}

	.top_img {
		width: 100%;
		position: absolute;
		top: 180rpx;
		left: 0;
		z-index: 0;
	}

	.diary_personal_content {
		background-color: #F6F6F6;
	}

	.diary_content {
		padding: 160rpx 20rpx 180rpx;
	}

	.no_have_list {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding-top: 240rpx;
		color: #fa3475;
		font-size: 24rpx;
	}

	.no_have_list image {
		width: 70%;
	}

	.bottom-botton {
		position: fixed;
		width: 100%;
		z-index: 99;
		bottom: 0;
		left: 0;
	}

	.keep-diary {
		padding: 40rpx;
	}

	.keep-diary-botton {
		text-align: center;
		width: 100%;
		height: 80rpx;
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
		box-shadow: 0rpx 4rpx 16rpx 0rpx rgba(250, 53, 118, 0.56);
		border-radius: 40rpx;
		line-height: 80rpx;
		color: #FFFFFF;
		font-size: 28rpx;
	}
</style>
