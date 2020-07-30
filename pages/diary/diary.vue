<template>
	<view class="diary">
		<view class="diary-top-bar">
			<view class="bar-name" :style="[{'height':menuHeight+'px','margin-top':menuTop+'px','border-radius':menuHeight/2+'px','line-height':menuHeight+'px','padding-right':menuWidth+20+'px','padding-bottom':10+'px'}]">
				<view id="top-navigation-bars" class="top-navigation-bars" v-for="(item,index) in navigationList" :key='index'
				 :class="{checked :btnnum == index}" @tap="change(index)">
					{{ item }}
					<view :class="{checkedBar :btnnum == index}"> </view>
				</view>
			</view>
		</view>
		<view class="content" :style="[{'padding-top':menuBottom+10+'px'}]">
			<view class="end-cont" :class="{dis:btnnum == index}" v-for="(items,index) in topTabList" :key="index">
				<scroll-view scroll-y class="topList">
					<template v-if="items.topList.length > 0">
						<view class="all-content" v-for="(item,k) in items.topList" :key="k">
							<text v-if="items.topList.length ==1">{{item}}</text>
							<view class="content-all-bar" :style="[{'top':menuBottom+10+'px'}]">
								<view class="content-bar">
									<view class="content-bar-name" :class="{checkedbar :item.btnnum == k}" @tap="changeContentBar(k)" v-for="(i,k) in item.contentBar"
									 :key="k">
										{{i.name}}
										<view :class="{checkedTopBar :item.btnnum == k}"></view>
									</view>
									
								</view>
							</view>
							
							<!-- 主体内容 -->
							<view class="end-cont" :class="{dis:item.btnnum == i}" v-for="(k,i) in contentList" :key="i">
								<text v-if="!k.productList">{{k.name}}</text>
								<view class="subject-content" v-if="k.productList">
									<porduct :width = 350  :porductList='k.productList'  ></porduct>
								</view>
							</view>
						</view>

					</template>
				</scroll-view>

			</view>

		</view>
	</view>
</template>

<script>
	import porduct from "../../components/porduct.vue";
	export default {
		
		components: {
			porduct
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				btnnum: 0,
				navigationList: ['全部', '直播', '日记', '视频'],
				topTabList: [{
						topList: [
							'全部',
							{
								btnnum: 0,
							}
						],
					},
					{
						topList: ['直播']
					},
					{
						topList: ['日记']
					},
					{
						topList: ['视频']
					}
				],
				contentList: [
					{
						name: '精选',
						productList:[
							{
								url:'../../static/images/19.png',
								title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
								label:['眼部美容','眼部'],//标签
								headPortrait:'../../static/images/23.png',//头像
								userName:'用户昵称几个字',
								like:99,//点赞
								productUrl:'',
								productTitle:'',
								prouctPrice:0
							},
							{
								url:'../../static/images/20.png',
								title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
								label:['眼部美容','眼部'],//标签
								headPortrait:'../../static/images/test.jpg',//头像
								userName:'用户昵称几个字',
								like:99,//点赞
								productUrl:'../../static/images/20.png',
								productTitle:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
								prouctPrice:998
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
								prouctPrice:0
							},
							{
								url:'../../static/images/20.png',
								title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
								label:['眼部美容','眼部'],//标签
								headPortrait:'../../static/images/test.jpg',//头像
								userName:'用户昵称几个字',
								like:99,//点赞
								productUrl:'../../static/images/20.png',
								productTitle:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
								prouctPrice:998
							},
							{
								url:'../../static/images/20.png',
								title:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
								label:['眼部美容','眼部'],//标签
								headPortrait:'../../static/images/test.jpg',//头像
								userName:'用户昵称几个字',
								like:99,//点赞
								productUrl:'../../static/images/20.png',
								productTitle:'我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
								prouctPrice:998
							},
						],
						
					},
					{
						name: '眼部'
					},
					{
						name: '鼻部'
					},
					{
						name: '胸部'
					},
					{
						name: '抗衰'
					}, {
						name: '美肤'
					},
				]
			}
		},
		onReady() {
			let that = this;
			let pageHeight = 0
			that.change()
			that.changeContentBar()
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					pageHeight = res.windowHeight
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
			change: function(e = 0) {
				this.btnnum = e
				if (this.btnnum === 0) {
					this.topTabList[0].topList[1].contentBar = [
						{
							name: '精选'
						},
						{
							name: '眼部'
						},
						{
							name: '鼻部'
						},
						{
							name: '胸部'
						},
						{
							name: '抗衰'
						}, {
							name: '美肤'
						},
					]
				}
			},
			changeContentBar: function(e = 0) {
				this.topTabList[0].topList[1].btnnum = e
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
	}

	.top-navigation-bars {
		font-size: 32rpx;
		font-weight: normal;
		font-stretch: normal;
	}

	.checked {
		font-size: 40rpx;
		font-weight: normal;
		font-stretch: normal;
	}

	.checkedBar {
		width: 0;
		height: 0;
		border-width: 30rpx;
		border-style: solid;
		border-color: transparent #FFFFFF transparent transparent;
		transform: rotate(90deg);
		margin-top: -10px;
		margin-left: 10rpx;
		margin-bottom: 0;
	}

	.end-cont {
		display: none;
	}

	.dis {
		display: block;
	}

	.all-content {
		padding: 30rpx 20rpx 20rpx;
		background-color: #F6F6F6;
	}
	.content-all-bar{
		width: 100%;
		position: fixed;
		background-color: #FFFFFF;
		left: 0;
		z-index: 100;
	}
	.content-bar {
		width: 100%;
		display: flex;
		justify-content: space-around;
		font-size: 24rpx;
		line-height: 60rpx;
	}

	.checkedbar {
		color: #fa3475;
		font-size: 28rpx;
	}
	.checkedTopBar{
		border-bottom: 4rpx solid red;
	}
	.subject-content{
		background-color: #F6F6F6;
		display: flex;
		justify-content: space-between;
	}
	
</style>
