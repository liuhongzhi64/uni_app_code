<template>
	<view class="regiser">
		<view class="top-bar" :style="[{'height':menuHeight+'px','padding-top':menuTop+'px','line-height':menuHeight+'px','padding-bottom':10+'px'}]">
			<view class="back-title" :style="[{'height':menuHeight+'px'}]">
				<view class="back">
					<image src="../../static/images/return.png" mode=""></image>
				</view>
				<view class="title" :style="[{'margin-right':menuWidth+'px'}]"> 注册 </view>
			</view>
		</view>
		
		<view class="porduct-content" :style="[{'padding-top':menuBottom+10+'px'}]">
			<porduct :porductList='productList'></porduct>
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
				productList: [
					{
						url: '../../static/images/20.png',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: ['眼部美容', '眼部'], //标签
						headPortrait: '../../static/images/test.jpg', //头像
						userName: '用户昵称几个字',
						like: 99, //点赞
						price: 19800,
						closed:'618钜惠',
						vipPrice: 18800,
						subscribeAndGoodReputation: [{
							subscribe: '441',
							goodReputation: '98'
						}],
					},
					{
						url: '../../static/images/19.png',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: ['眼部美容', '眼部'], //标签
						headPortrait: '../../static/images/23.png', //头像
						userName: '用户昵称几个字',
						like: 99, //点赞
						price: 19800,
						vipPrice: 0,
						subscribeAndGoodReputation: [{
							subscribe: '441',
							goodReputation: '98'
						}],
					},
					{
						url: '../../static/images/19.png',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: ['眼部美容', '眼部'], //标签
						headPortrait: '../../static/images/23.png', //头像
						userName: '用户昵称几个字',
						like: 99, //点赞
						price: 19800,
						vipPrice: 0,
						subscribeAndGoodReputation: [{
							subscribe: '441',
							goodReputation: '98'
						}],
					},
				]
			}
		},
		onReady() {
			let that = this;
			let pageHeight = 0
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

		},

	}
</script>

<style scoped>
.top-bar {
		color: #FFFFFF;
		background-image: linear-gradient(-49deg, #f24788 0%, #ff69a1 100%);
		text-align: center;
		font-size: 40rpx;
		position: fixed;
		z-index: 100;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
	}

	.back-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 38rpx;
	}

	.back {
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		width: 60rpx;
		height: 100%;
	}

	.back image {
		width: 36rpx;
		height: 36rpx;
	}

	.back-title .title {
		flex: 1;
		margin-left: 80rpx;
	}
	.porduct-content{
		background-color: #F6F6F6;
	}
</style>
