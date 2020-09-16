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
											<view class="user-name">{{user.nick_name}}</view>
										</view>
										<view class="user-signature" v-if="user.signature!=''"> {{user.signature}} </view>
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
									
						</view>
						<view class="diary_content">
							   <porduct :width=350 :diaryList='diaryList' ></porduct>
						</view>
					</view>
					
				</template>
			</scroll-view> 

		</view>
		
		<view class="bottom-botton">
			<view class="keep-diary">
				<button class="keep-diary-botton" type="default" plain="true" @tap='keepDiary'> + 写日记</button>
			</view>
		</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	import porduct from '../../components/porduct.vue';
	export default {
		components: {
			topBar,
			porduct
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
				title: '个人主页',
				requestUrl:'',
				count:{},//第一页 offset 等于0 才返回 统计数据
				user:{},//用户信息 第一页 offset 等于0 才返回 用户信息
				list:[],//日记列表
				diaryList:[
					{
						url:'../../static/images/19.png',
						title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label:['眼部美容','眼部'],//标签
						headPortrait:'../../static/images/23.png',//头像
						userName:'用户昵称几个字',
						like:99,//点赞
						productUrl:'',
						productTitle:'',
						prouctPrice:0,
						selectedItems:'#急速纳米美眼（尊享版）急速...'
					},
					{
						url:'../../static/images/19.png',
						title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label:['眼部美容','眼部'],//标签
						headPortrait:'../../static/images/23.png',//头像
						userName:'用户昵称几个字',
						like:99,//点赞
						productUrl:'',
						productTitle:'',
						prouctPrice:0,
						selectedItems:'#急速纳米美眼（尊享版）急速...'
					},
					{
						url:'../../static/images/19.png',
						title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label:['眼部美容','眼部'],//标签
						headPortrait:'../../static/images/23.png',//头像
						userName:'用户昵称几个字',
						like:99,//点赞
						productUrl:'',
						productTitle:'',
						prouctPrice:0,
						selectedItems:'#急速纳米美眼（尊享版）急速...'
					},
					{
						url:'../../static/images/19.png',
						title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label:['眼部美容','眼部'],//标签
						headPortrait:'../../static/images/23.png',//头像
						userName:'用户昵称几个字',
						like:99,//点赞
						productUrl:'',
						productTitle:'',
						prouctPrice:0,
						selectedItems:'#急速纳米美眼（尊享版）急速...'
					},
				]
			}
		},
		onLoad:function(options){
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			let user_mark = options.user_mark
			that.getMessage(user_mark)
			
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
					that.menuPaddingRight = res.windowWidth - menu.right
				}
			})
		},
		methods: {
			keepDiary:function(){
				uni.navigateTo({
					url: `/pages/diary/diary_write`,
				})
			},
			getMessage:function(user_mark){
				this.request = this.$request
				let that = this
				let dataInfo = {
					interfaceId:'inexuserhome',
					user_mark:user_mark,
					offset:'0',
					limit:'10'
				}
				this.request.uniRequest("diary", dataInfo).then(res => {
					if (res.data.code === 1000) {
						console.log(res.data.data)
						let data = res.data.data
						that.count = data.count
						that.list = data.list
						that.user = data.user
					} else {
						this.request.showToast(res.data.message);
					}
				})
			}
		}
	}
</script>

<style scoped>
	.user-message {
		background-color: #222222;
		border-radius: 0 0 50rpx 50rpx;
	}

	.user-head-portrait-name-phone-set {
		padding: 10rpx 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24rpx;
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
		border: 1rpx solid #FFFFFF;
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
		padding: 40rpx 50rpx 160rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #FFFFFF;
		font-size: 32rpx;
		text-align: center;
	}

	.all-card .card-name {
		color: #999999;
		font-size: 24rpx;
	}
	.diary_personal_content{
		background-color: #F6F6F6;
	}
	.personal_content-all{
		padding-bottom: 200rpx;
	}
	
	.diary_content{
		margin-top: -120rpx;
		padding: 0 20rpx;
	}
	
	.bottom-botton{
		position: fixed;
		width: 100%;
		background-color: #FFFFFF;
		bottom: 0;
		left: 0;
	}
	.keep-diary{
		padding: 40rpx;
	}
	.keep-diary-botton{
		width: 670rpx;
		height: 80rpx;
		background-image: linear-gradient(-45deg,  #fa3475 0%,  #ff6699 100%);
		box-shadow: 0rpx 4rpx 16rpx 0rpx  rgba(250, 53, 118, 0.56);
		border-radius: 40rpx;	
		line-height: 80rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		border: 0;
	}
	
	
</style>
