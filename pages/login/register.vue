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
			<porduct :width=350 :porductList='productList'></porduct>
		</view>

		<view class="porduct-list" >
			<porduct :width= 240 :height=370 :crosswisePorduct='productImgList' ></porduct>	
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
				width:240,
				height:370,
				productList: [{
						url: 'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: ['眼部美容', '眼部'], //标签
						headPortrait: 'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg', //头像
						userName: '用户昵称几个字',
						like: 99, //点赞
						price: 19800,
						closed: '618钜惠',
						vipPrice: 18800,
						subscribeAndGoodReputation: [{
							subscribe: '441',
							goodReputation: '98'
						}],
					},
					{
						url: 'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: ['眼部美容', '眼部'], //标签
						headPortrait: 'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg', //头像
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
						url: 'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg',
						title: '我是文章标题，显示两排后就以省略号结束？最多两排最多两排...',
						label: ['眼部美容', '眼部'], //标签
						headPortrait: 'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg', //头像
						userName: '用户昵称几个字',
						like: 99, //点赞
						price: 19800,
						vipPrice: 0,
						subscribeAndGoodReputation: [{
							subscribe: '441',
							goodReputation: '98'
						}],
					},
				],

				productImgList: [{
						id: 0,
						url: 'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg',
						content: '就是低分数低hi合肥市第收到对方答复of还是电话艘大富豪打死哦豁',
						newPrice: '15800',
						oldPrice: '19800',
					},
					{
						id: 1,
						url: 'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg',
						content: '就是低分数低hi合肥市第大声道撒of还是电话艘大富豪打死哦豁',
						newPrice: '15800',
						oldPrice: '19800',
					},
					{
						id: 2,
						url: 'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg',
						content: '就是低分数低hi合肥市第安防大风of还是电话艘大富豪打死哦豁',
						newPrice: '15800',
						oldPrice: '19800',
					},
					{
						id: 3,
						url: 'upload/goods/images/202010/15/1Ktgw5jJ55PzVS1PogS1yKFwYn2lGHcXxLWviqI7_250.jpeg',
						content: '就是低分数低hi合肥市第爱仕达多of还是电话艘大富豪打死哦豁',
						newPrice: '15800',
						oldPrice: '19800',
					},
				],

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

	.porduct-content {
		background-color: #F6F6F6;
		padding: 0 20rpx;
	}
	
	.porduct-list{
		padding: 20rpx;
	}

</style>


