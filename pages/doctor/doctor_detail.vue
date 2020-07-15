<template>
	<view class="doctor_detail"> 
		<topBar :barName = 'barName'></topBar>
		医生主页
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

</style>
