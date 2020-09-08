<template>
	<view class="write_comment">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<view class="write_comment_content" :style="[{'padding-top':menuBottom+10+'px'}]">
			<view class="top-content">
				<image class="headimg" src="https://xcx.hmzixin.com/upload/2020/03/27/4b67b2c083c5b3f65d7f0a443e3f9a81_250.jpg">
				</image>
				<view class="to-right">
					<view class="goods_name">我是商品名称，我是商品名称，我是商品名称，我是商品名称，我是商...</view>
					<view class='itembox'>
						<view v-for="(item,index) in imgs" :key="index" @tap='select' :data-index="item.id">
							<image class="star" :src="item.id>starId?src2:src1"></image>
						</view>
					</view>
					<view class="service_title">完成100字+图片/视频的优质评价，<text>返2倍喵豆</text></view>
				</view>
			</view>

			<view class="service_list">
				<view class="service_list_content">
					<block v-for="(item,index) in service_list" :key="index">
						<view class="items" @tap="choice" :data-index="index" :class="item.ac == true? 'active':''">{{item.name}}</view>
					</block>
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
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '写评价',
				imgs: [{
					id: 1
				}, {
					id: 2
				}, {
					id: 3
				}, {
					id: 4
				}, {
					id: 5
				}],
				starId: 0,
				src1: 'https://img-blog.csdnimg.cn/20200610110052243.png',
				src2: 'https://img-blog.csdnimg.cn/20200610110053850.png',
				service_list: [{
						name: "环境好",
						ac:false
					},
					{
						name: "效果好",
						ac:false
					},
					{
						name: "态度好",
						ac:false
					},
					{
						name: "服务热情",
						ac:false
						},
					{
						name: "医生专业",
						ac:false
					},
				],
				submit: true,
			}
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
			// 星星打分
			select: function(e) {
				const that = this;
				that.starId = e.currentTarget.dataset.index;
				that.starId = this.starId
				that.step()
			},
			// 选择优质服务
			choice: function(e) {
				const that = this;
				let index = e.currentTarget.dataset.index;
				
				if (that.service_list[index].ac == false) {
					that.service_list[index].ac = true
				} else {
					 that.service_list[index].ac = false
				}
				that.step()
			},
			// 判断步骤
			step: function() {
				const that = this;
				var arr = []
				for (var i = 0; i < that.service_list.length; i++) {
					if (that.service_list[i].ac == true) {
						arr.push(that.service_list[i].ac)
					}
				}
				if (that.starId > 0 && that.evaluate > 0 && (that.type == "image" || that.type == "video") &&
					arr.length > 0) {
					that.submit = true
				} else {
					that.submit = false
				}
			},
		}
	}
</script>

<style scoped>
	.top-content {
		display: flex;
		padding: 30rpx;
		background-color: #ffffff;
		padding-bottom: 24rpx;

	}

	.headimg {
		width: 200rpx;
		height: 200rpx;
		margin-right: 30rpx
	}

	.to-right {
		flex: 1;
	}

	.goods_name {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		margin-bottom: 5rpx;
		font-size: 26rpx;
		color: black;
		width: 100%;
	}

	/* 星星 */
	.itembox {
		display: flex;
		align-items: center;
		width: 400rpx;
		height: 60rpx;
	}

	.star {
		width: 50rpx;
		height: 50rpx;
		margin: 0 5rpx;
		vertical-align: middle;
	}

	.service_title {
		font-size: 20rpx;
		color: #999999;
		line-height: 66rpx;
	}

	.service_title text {
		color: #fa3475;
	}

	.service_list {
		padding: 30rpx;

	}

	.service_list_content {
		border-top: 1rpx solid #F0F0F0;
		border-bottom: 1rpx solid #F0F0F0;
		display: flex;
		flex-wrap: wrap;
		padding: 24rpx 0;
	}

	.service_list_content .items {
		background-color: rgba(242, 242, 242, 1);
		border-radius: 30rpx;
		font-size: 20rpx;
		text-align: center;
		margin-right: 20rpx;
		display: inline-block;
		margin-bottom: 20rpx;
		padding: 15rpx 25rpx;
	}

	.active {
		background-color: #ffe8f0;
		color: #fa3475;
		border: 2rpx solid #fa3475;
		padding: 12rpx 20rpx;
	}
</style>
