<template>
	<view class="tab_bar_content"> 
		<view class="this-content">
			<view class="bar-list" v-for="(item,index) in barList" :key='index'>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			barList:Array
		},
		data() {
			return {
				barList:[
					{
						pagePath:'pages/index/index',
						iconPath: "../static/images/index.png",
						selectedIconPath: "../static/images/idnex1.png",
						text: "首页"
					},
					{
						pagePath:'pages/goods/goods_classify',
						iconPath: "../static/images/classify.png",
						selectedIconPath: "../static/images/classify1.png",
						text: "分类"
					},
					{
						pagePath: "pages/diary/diary",
						iconPath: "./static/images/diary.png",
						selectedIconPath: "../static/images/diary1.png",
						text: "日记"
					},
					{
						pagePat: "pages/doctor/doctor",
						iconPath: "../static/images/doctor.png",
						selectedIconPath: "../static/images/doctor1.png",
						text: "医生"
					},
					{
						pagePath: "pages/my/my",
						iconPath: "../static/images/my.png",
						selectedIconPath: "../static/images/my1.png",
						text: "我的"
					}
				]
									
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.tab_bar_content{
		position: fixed;
		z-index: 520;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 105rpx;
		background-color: #FFFFFF;
	}
</style>