<template>
	<view class="search"> 
		搜索主页面
		<view class="goBack" @click="goBack">
			返回
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goBack:function(){
				uni.navigateBack({
				    delta: 1
				});
			}
		}
	}
</script>

<style>

</style>

