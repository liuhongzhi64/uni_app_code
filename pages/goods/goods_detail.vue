<template>
	<view class="goods_detail">
		商品详情页 {{goodsName}}
		<view class="goBack" @click="goBack">
			返回
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsName: '', //商品名
			}
		},
		onLoad: function(option) {
			let that = this
			that.goodsName = option.goods
			console.log(option)
		},
		methods: {
			goBack: function() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>

</style>
