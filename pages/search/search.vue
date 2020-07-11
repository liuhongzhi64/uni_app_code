<template>
	<view class="search"> 
		搜索主页面 {{searchContent}}
		<view class="goBack" @click="goBack">
			返回
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchContent: '',//默认搜索内容
			}
		},
		onLoad: function (option) {
			let that = this
			console.log(option)
		    that.searchContent = option.search
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

