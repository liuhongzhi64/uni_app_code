<template>
	<view class="diary">
		<topBar :barName = 'barName'></topBar>
		<view class="content">
			日记
		</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	export default {
		components: {
			topBar
		},
		data() {
			return {
				barName:'mianPage',//页面名称
			}
		},
		methods: {

		}
	}
</script>

<style>
	.content{
		
	}
</style>
