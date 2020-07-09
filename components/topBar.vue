<template>
	<view class="content">
		<!-- 头部导航条 -->
		<view class="topBar" :style="{backgroundColor:topBackgroundColor,height:topHeight+'rpx'}">
			<view class="imgAndCart">
				<view id="img" class="img">
					图片
				</view>
				<view id="cartAndMessage">
					<view class="cartAndMessage">
						<view class="cart">
							购物车
						</view>
						<view class="message">
							消息
						</view>
					</view>
				</view>
			</view>

			<view class="search">
				<input class="uni-input" ref="search" @input="hideKeyboard" placeholder="输入123自动收起键盘" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topBackgroundColor: "#7DB663", //顶部导航条颜色
				search: "", //
			}
		},
		onLoad() {

		},
		methods: {
			// 搜索框
			hideKeyboard: function(event) {
				if (event.target.value === '123') {
					uni.hideKeyboard();
				}
			}
		}
	}
</script>

<style>
	.content {
		position: flex;
	}

	.imgAndCart {
		padding-top: 25rpx;
		padding-left: 15rpx;
		padding-right: 15rpx;
		display: flex;
		justify-content: space-between;
		position: relative;
	}

	.cartAndMessage {
		display: flex;
		padding-right: 200rpx;
		width: 200rpx;
		justify-content: space-between;
		padding-top: 40rpx;
	}
</style>
