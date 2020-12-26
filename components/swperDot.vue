<template>
	<view class="dot-main">
		<view :class="['dot-item',current==index?'active':'']" v-for="(item,index) in list" :key="index"></view>
	</view>
</template>
<style scoped>
	.dot-main {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dot-item {
		width: 60rpx;
		height: 4rpx;
		border-radius: 3rpx;
		background-color: #c5c5c5;
		margin: 0 6upx;
		box-sizing: border-box;
	}
	.active {
		border-radius: 5rpx;
		width: 60rpx;
		background-color: #fa3475;
	}
</style>
<script>
	export default {
		props: [ 'list','current'],
		data() {
			return {
				
			};
		}
	}
</script>
