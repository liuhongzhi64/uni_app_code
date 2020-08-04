<template>
	<view>
		<!--index.wxml-->
		<view class="container">
			<!-- 停止位置:<input :value='luckPosition' style="width:100%;text-align:center" @input='input' type='number'></input> -->
			<view class='frame_view'>
				<view class='frame_row'>
					<view class='frame_item frame_item0' :style='{"opacity":color[0].opa}' :src="images[0]">
						<view class="title">
							{{color[0].name}}
						</view>
						<view class="img">
							<image src="https://crm.szqhtr.com/image/icon_personal_QRcode@2x.png" mode=""></image>
						</view>
					</view>
					<view class='frame_item frame_item1' :style='{"opacity":color[1].opa}' :src="images[0]">
						<view class="title">
							{{color[1].name}}
						</view>
						<view class="img">
							<image src="https://crm.szqhtr.com/image/icon_personal_QRcode@2x.png" mode=""></image>
						</view>
					</view>
					<view class='frame_item frame_item2' :style='{"opacity":color[2].opa}' :src="images[0]">
						<view class="title">
							{{color[2].name}}
						</view>
						<view class="img">
							<image src="https://crm.szqhtr.com/image/icon_personal_QRcode@2x.png" mode=""></image>
						</view>
					</view>
				</view>

				<view class='frame_row'>
					<view class='frame_item frame_item7' :style='{"opacity":color[7].opa}' :src="images[0]">
						<view class="title">
							{{color[7].name}}
						</view>
						<view class="img">
							<image src="https://crm.szqhtr.com/image/icon_personal_QRcode@2x.png" mode=""></image>
						</view>
					</view>
					<!-- <image class='frame_item'  src="../../static/dianjichoujiangd.png"  @click="clickLucks()"></image> -->
					<view class="frame_item setFrame" @click="clickLucks()"> <view class="framecontent">立即抽奖 </view> </view>
					<view class='frame_item frame_item3' :style='{"opacity":color[3].opa}' :src="images[0]">
						<view class="title">
							{{color[3].name}}
						</view>
						<view class="img">
							<image src="https://crm.szqhtr.com/image/icon_personal_QRcode@2x.png" mode=""></image>
						</view>
					</view>
				</view>

				<view class='frame_row'>
					<view class='frame_item frame_item6' :style='{"opacity":color[6].opa}' :src="images[0]">
						<view class="title">
							{{color[6].name}}
						</view>
						<view class="img">
							<image src="https://crm.szqhtr.com/image/icon_personal_QRcode@2x.png" mode=""></image>
						</view>
					</view>
					<view class='frame_item frame_item5' :style='{"opacity":color[5].opa}' :src="images[0]">
						<view class="title">
							{{color[5].name}}
						</view>
						<view class="img">
							<image src="https://crm.szqhtr.com/image/icon_personal_QRcode@2x.png" mode=""></image>
						</view>
					</view>
					<view class='frame_item frame_item4' :style='{"opacity":color[4].opa}' :src="images[0]">
						<view class="title">
							{{color[4].name}}
						</view>
						<view class="img">
							<image src="https://crm.szqhtr.com/image/icon_personal_QRcode@2x.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	//计数器
	var interval = null;
	//值越大旋转时间越长  即旋转速度
	var intime = 50;
	export default {
		data() {
			return {
				color: [{
						opa: 0.5,
						name: "5喵豆"
					},
					{
						opa: 0.5,
						name: "满20000减1000"
					},
					{
						opa: 0.5,
						name: "HB面膜（2片装）"
					},
					{
						opa: 0.5,
						name: "500喵币"
					},
					{
						opa: 0.5,
						name: "洁牙体验券"
					},
					{
						opa: 0.5,
						name: "谢谢参与"
					},
					{
						opa: 0.5,
						name: "0.5元余额"
					},
					{
						opa: 0.5,
						name: "10元红包"
					}
				],
				images: ['../static/item.png', '../static/item1.png',
					'../static/item.png', '../static/item1.png',
					'../static/item.png', '../static/eitem1.png',
					'../static/item.png', '../static/item1.png',
					'../static/item.png'
				],
				// btnconfirm: '../../static/dianjichoujiangd.png',
				clickLuck: 'clickLuck',
				luckPosition: 1,//控制中奖是否的编号
			}
		},
		methods: {
			input: function(e) {
				var data = Number(e.detail.value);
				this.luckPosition = data;
			},
			//点击抽奖按钮
			clickLucks: function() {
				if (this.clickLuck == 'clickLuck') {
					var e = this;
					//判断中奖位置格式
					if (e.luckPosition == null || isNaN(e.luckPosition) || e.luckPosition > 7) {
						uni.showModal({
							title: '提示',
							content: '请填写正确数值',
							showCancel: false,
							success: res => {},
							fail: () => {},
							complete: () => {}
						});
						return;
					}

					//设置按钮不可点击
					// e.btnconfirm = '../../static/dianjichoujiangd.png';
					e.clickLuck = '';

					//清空计时器
					clearInterval(interval);
					var index = 0;
					//循环设置每一项的透明度
					interval = setInterval(function() {
						if (index > 7) {
							index = 0;
							e.color[7].opa = 0.5
						} else if (index != 0) {
							e.color[index - 1].opa = 0.5
						}
						e.color[index].opa = 1;
						index++;
					}, intime);
					//模拟网络请求时间  设为两秒
					var stoptime = 2000;
					console.log(e.luckPosition)
					setTimeout(function() {
						e.stop(e.luckPosition);
					}, stoptime)
				}
			},
			stop: function(which) {
				var e = this;
				//清空计数器
				clearInterval(interval);
				//初始化当前位置
				var current = -1;
				var color = e.color;
				for (var i = 0; i < color.length; i++) {
					if (color[i].opa == 1) {
						current = i;
					}
				}
				//下标从1开始
				var index = current + 1;
				e.stopLuck(which, index, intime, 10);
			},
			stopLuck: function(which, index, time, splittime) {
				var e = this;
				//值越大出现中奖结果后减速时间越长
				setTimeout(function() {
					//重置前一个位置
					if (index > 7) {
						index = 0;
						e.color[7].opa = 0.5
					} else if (index != 0) {
						e.color[index - 1].opa = 0.5
					}
					//当前位置为选中状态
					e.color[index].opa = 1;
					//如果旋转时间过短或者当前位置不等于中奖位置则递归执行
					//直到旋转至中奖位置
					if (time < 400 || index != which) {
						//越来越慢
						splittime++;
						time += splittime;
						//当前位置+1
						index++;
						e.stopLuck(which, index, time, splittime);
					} else {
						//1秒后显示弹窗
						setTimeout(function() {
							if (which == 0) {
								//中奖
								uni.showModal({
									content: '恭喜获得：' + e.color[which].name,
									showCancel: false,
									confirmColor: "#F8C219",
									success: res => {
										if (res.confirm) {
											//设置按钮可以点击
											// e.btnconfirm = '../../static/dianjichoujiang.png';
											e.clickLuck = 'clickLuck';
											e.loadAnimation();
										}
									},
									fail: () => {},
									complete: () => {}
								});
							} else {
								//未中奖
								uni.showModal({
									content: '很遗憾未中奖',
									showCancel: false,
									confirmColor: "#F8C219",
									success: res => {
										if (res.confirm) {
											//设置按钮可以点击
											// e.btnconfirm = '../../static/dianjichoujiang.png';
											e.clickLuck = 'clickLuck';
											e.loadAnimation();
										}
									},
									fail: () => {},
									complete: () => {}
								});
							}
						}, 1000);
					}
				}, time);
			},
			loadAnimation: function() {
				var e = this;
				var index = 0;
				if (interval == null) {
					interval = setInterval(function() {
						if (index > 7) {
							index = 0;
							e.color[7].opa = 0.5
						} else if (index != 0) {
							e.color[index - 1].opa = 0.5
						}
						e.color[index].opa = 1;
						index++;
					}, 1000);
				}
			}
		},
		onLoad() {
			uni.hideLoading()
			this.loadAnimation();
		}
	}
</script>

<style>
	
	.setFrame{
		background-color: #029400;
		text-align: center;
		font-size: 48rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		border-radius: 20rpx;
	}
	.framecontent{
		font-size: 48rpx !important;
		width: 96rpx !important;
	}
	
	.frame_view {
		width: 590upx;
		height: 590upx;
		padding: 20upx;
		background: #792db3;
		z-index: 3;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		border-radius: 30upx;
	}
	
	.img image{
		width: 42rpx;
		height: 42rpx;
	}

	.frame_row {
		width: 580upx;
		height: 180upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.frame_item {
		width: 180upx;
		height: 180upx;
		z-index: 99;
	}

	.frame_item0 {
		background: url("../static/images/item.png")no-repeat center;
		background-size: 100% 100%;
	}

	.frame_item1 {
		background: url("../static/images/item1.png")no-repeat center;
		background-size: 100% 100%;
	}

	.frame_item2 {
		background: url("../static/images/item.png")no-repeat center;
		background-size: 100% 100%;
	}

	.frame_item3 {
		background: url("../static/images/item1.png")no-repeat center;
		background-size: 100% 100%;
	}

	.frame_item4 {
		background: url("../static/images/item.png")no-repeat center;
		background-size: 100% 100%;
	}

	.frame_item5 {
		background: url("../static/images/item1.png")no-repeat center;
		background-size: 100% 100%;
	}

	.frame_item6 {
		background: url("../static/images/item.png")no-repeat center;
		background-size: 100% 100%;
	}

	.frame_item7 {
		background: url("../static/images/item1.png")no-repeat center;
		background-size: 100% 100%;
	}

	.frame_item>view {
		display: block;
		width: 100%;
		font-size: 30upx;
		color: #fff;
		z-index: 99;
		text-align: center;
	}

	.frame_item>view.img {
		width: 42upx;
		height: 42upx;
		line-height: 30upx;
		margin: 0 auto;
		margin-top: 20upx;
	}

	.frame_item>view.title {
		line-height: 30upx;
		padding-top: 40upx;
	}
</style>