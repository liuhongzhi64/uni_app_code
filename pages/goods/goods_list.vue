<template>
	<view class="goods"> 
		商品列表 {{goodsName}}
		<view class="goBack" @click="goBack">
			返回
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsName: '',//默认搜索内容
			}
		},
		onLoad: function (option) {
			let that = this
			that.goodsName = option.goodsname
			console.log(option)
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
