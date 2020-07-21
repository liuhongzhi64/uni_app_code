<template>
	<view class="doctor_detail">

		<view class="doctor-top-bar">
			<view class="bar-name">
				<view :style="[{'height':menuHeight+'px','margin-top':menuTop+'px','border-radius':menuHeight/2+'px','line-height':menuHeight+'px'}]">明星医生</view>
			</view>
		</view>

		<view class="content" :style="[{'padding-top':menuBottom+10+'px'}]">
			<view class="doctor-top-bars">
				<scroll-view class="related-doctor-items" scroll-x="true">
					<view class="related-doctor-centent">
						<view id="doctor-item" class="doctor-item" v-for="(i,k) in doctorList" :key='k' :class="{checked :btnnum == k}"
						 @tap="change(k)">
							<!-- 医生 -->
							<view class="doctor-head-portrait">
								<image :src="i.url" mode=""></image>
							</view>
							<!-- 医生名字 -->
							<view class="doctorName">
								<view class="doctor-item-content">
									{{i.doctorName}}
								</view>
							</view>
							<view :class="{checkedBar :btnnum == k}"></view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="end-cont" :class="{dis:btnnum == index}" v-for="(items,index) in doctorAllList" :key="index">

				<scroll-view scroll-y class="Details-of-the-doctor">
					<text v-if="doctorInformationList.length==0">{{items.doctorName}}</text>
					<template>
						<view class="doctor-content" v-for="(i,k) in doctorInformationList" :key="k">
							<view class="doctor-information" :style="{backgroundImage:'url('+i.doctorHeadPortrait+')'}">
								<view class="doctor-case">
									<view class="doctor-name"> {{i.doctorName}} </view>
									<view class="post"> {{i.post}} </view>
									<view class="all-title">
										<view class="title-item" v-for="(i,k) in i.title" :key='k'> . {{i}} </view>
									</view>
									<view class="be-good-at"> 擅长项目 </view>
									<view class="be-good-at-item"> {{i.beGoodAt}} </view>
									
									<view class="case-list">
										<scroll-view class="case-items" scroll-x="true">
											<view class="case-all-item" >
												<view class="case-item" v-for="(i,k) in i.case" :key='k' :data-name="i.content" @tap="gotoGoods">
													<image :src="i.url" mode=""></image>
													<view class="case-explain"> {{i.content}} </view>
												</view>
												
											</view>
										</scroll-view>
									</view>
								</view>
								
							</view>
						</view>
						<view class="recommend-content">
							推荐内容
						</view>
					</template>
				</scroll-view>

			</view>
		</view>

	</view>
</template>

<script>
	// import topBar from "../../components/topBar.vue";
	export default {
		components: {
			// topBar
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				btnnum: 0,
				doctorList: [{
						url: '../../static/images/test.jpg',
						doctorName: '陈杨'
					},
					{
						url: '../../static/images/19.png',
						doctorName: '宋晓东'
					},
					{
						url: '../../static/images/20.png',
						doctorName: '邱伟'
					},
					{
						url: '../../static/images/23.png',
						doctorName: '李春清'
					},
					{
						url: '../../static/images/test.jpg',
						doctorName: '黄建梅'
					},
					{
						url: '../../static/images/19.png',
						doctorName: '宋晓东'
					},
					{
						url: '../../static/images/20.png',
						doctorName: '邱伟'
					},
					{
						url: '../../static/images/23.png',
						doctorName: '李春清'
					},
				],
				doctorAllList: [{
						doctorName: '陈杨',
					},
					{
						doctorName: '宋晓东',
					},
					{
						doctorName: '邱伟',
					},
					{
						doctorName: '李春清',
					},
					{
						doctorName: '黄建美',
					},
					{
						doctorName: '陈杨2',
					},
					{
						doctorName: '陈杨3',
					},
					{
						doctorName: '陈杨4',
					},
				],
				doctorInformationList: []
			}
		},
		onReady() {
			let that = this;
			let pageHeight = 0
			that.change()
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
					console.log(pageHeight, menu)

				}
			})
		},
		methods: {
			change: function(e = 0) {
				this.btnnum = e
				if (e == 0) {
					this.doctorInformationList = [{
						doctorHeadPortrait: '../../static/images/18.png', //医生的背景图片
						doctorName: '陈杨',
						post: '华美紫馨眼部整形及 修复中心主任', //职位
						title: ['华美紫馨眼部整形及修复中心学科带头人', '华美紫馨鼻整形及修复中心首席专家', '中国医师协会美容与整形医师分会会员', '中国整形美容协会鼻整形分会委员', '美国射极峰公司亚洲首批特聘高级专家'], //称谓
						beGoodAt: '双眼皮、手术隆鼻、面部综合塑形', //擅长项目
						case: [
							{
							url: '../../static/images/19.png',
							content: '华美紫馨薇拉美塑Ⅲ—美体最多两排显示省略号...'
							},
							{
							url: '../../static/images/20.png',
							content: '华美紫馨薇拉美塑Ⅲ—美体最多两排显示省略号...'
							},
							{
							url: '../../static/images/19.png',
							content: '华美紫馨薇拉美塑Ⅲ—美体最多两排显示省略号...'
							},
							{
							url: '../../static/images/20.png',
							content: '华美紫馨薇拉美塑Ⅲ—美体最多两排显示省略号...'
							},
						] //案例
					}]
					console.log(this.doctorInformationList)
				} else {
					this.doctorInformationList = []
					console.log(this.doctorInformationList)
				}
			},
			// 点击商品
			gotoGoods: function(e) {
				let goods = e.currentTarget.dataset.name
				uni.navigateTo({
					url: `/pages/goods/goods_detail?goods=${goods}`,
				})
			},
		}
	}
</script>

<style scoped>
	.doctor-top-bar {
		background-color: #111111;
		color: #FFFFFF;
		text-align: center;
		font-size: 40rpx;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 100;
		padding-bottom: 20rpx;
	}

	.bar-name {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.doctor-top-bars {
		white-space: nowrap;
		padding: 0 20rpx 0;
		background-image: linear-gradient(0deg,
			#2c2d31 0%,
			#101013 100%);
	}

	.related-doctor-items {
		width: 100%;
	}

	.related-doctor-centent {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		width: 100%;
	}

	.doctor-head-portrait image {
		width: 88rpx;
		height: 88rpx;
		border-radius: 44rpx;
	}

	.checked .doctor-head-portrait {
		width: 104rpx;
		height: 104rpx;
		border: 4rpx solid #d1bf86;
		border-radius: 52rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.doctor-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		margin: 0 30rpx;
		color: #f0f0f0;
		font-size: 24rpx;
	}

	.checked {
		font-size: 24rpx;
		font-weight: normal;
		font-stretch: normal;
		color: #d1bf86;
	}

	.checkedBar {
		width: 0;
		height: 0;
		border-width: 30rpx;
		border-style: solid;
		border-color: transparent #d1bf86 transparent transparent;
		transform: rotate(90deg);
		/*顺时针旋转90°*/
		margin-top: -20rpx;
		margin-bottom: 0;
	}

	.end-cont {
		display: none;
	}

	.dis {
		display: block;
	}

	.doctor-information {
		/* height: 500rpx; */
		background-repeat: no-repeat;
		background-size: 100% 100%;
		padding: 0 0 20rpx 45rpx;
	}
	.doctor-case{
		padding-top: 130rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
	}
	.doctor-name{
		font-size: 60rpx;
		color: #d1bf86;
		margin-bottom: 24rpx;
	}
	.post{
		width: 235rpx;
		color: #d1bf86;
		line-height: 36rpx;
		font-size: 26rpx;
		margin-bottom: 35rpx;
	}
	.all-title{
		color: #C0C0C0;
		line-height: 36rpx;
		font-size: 20rpx;
		margin-bottom: 45rpx;
	}
	.be-good-at{
		font-size: 28rpx;
		line-height: 30rpx;
		color: #d1bf86;
		margin-bottom: 16rpx;
	}
	.be-good-at-item{
		width: 190rpx;
		line-height: 30rpx;
		font-size: 22rpx;
		color: #C0C0C0;
		margin-bottom: 44rpx;
	}
	.case-list{
		width: 100%;
		white-space: nowrap;
		padding-bottom: 30rpx;
	}
	.case-all-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		width: 100%;
	}
	.case-items{
		width: 100%;
	}
	.case-item image{
		width: 210rpx;
		height: 210rpx;
		border-radius: 16rpx;
	}
	.case-item{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		margin-right: 10rpx;
		color: #f0f0f0;
		font-size: 24rpx;
		white-space: normal;
	}
	.case-explain{
		width: 190rpx;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 24rpx;
	}
	
</style>
