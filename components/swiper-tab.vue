<template>
	<view class="uni-tab-bar">
		<scroll-view class="uni-swiper-tab" >
			<block v-for="(tab,index) in tabBars" :key="tab.id">
				<view class="swiper-tab-list" :class="{'active' : tabIndex==index}" @tap="tabtap(index)" >
					<view class="tabName">
						{{tab.name}} 
					</view>
					<view class="tabContent">
						{{tab.content}}
					</view>
					<view class="swiper-tab-line" v-if="line"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			tabBars: Array,
			tabIndex: Number,
			line:{
				type:Boolean,
				default:false
			},
		},

		methods: {
			//点击切换导航
			tabtap(index) {
				this.$emit('tabtap', index)
			}
		}
	}
</script>　

<style scoped>
	.uni-swiper-tab {
		border-bottom: 1upx solid #EEEEEE;
		overflow: hidden;
		white-space: nowrap;
		display: flex;
		height: 100rpx;
	}

	.swiper-tab-list {
		color: #666666;
		font-weight: bold;
		display: inline-block;
		width: 25%;
		text-align: center;
		line-height: 60rpx;
	}
	.tabContent{
		font-size: 20rpx;
		line-height: 20rpx;
	}

	.uni-tab-bar .active {
		color: #FA3475;
	}

	.active .swiper-tab-line {
		border-bottom: 6upx solid #FEDE33;
		width: 80upx;
		margin: auto;
		border-top: 6rpx solid #FEDE33;
		border-radius: 20upx;
	}
</style>
