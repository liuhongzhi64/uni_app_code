<template>
	<view class="diary_write">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="diary_write-content" :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
			<view class="content-item">
				<checkbox-group class="change-radio" @change="radioChange">				
						<view class="change-video" @tap="chooseImage">
							+
						</view>

						<label class="video-list" v-for="(item,index) in imageList" :key="index" :data-src="item">
							<image class="changes" :src="item" mode=""></image>
							<checkbox class="change-type" :value="item" color='#fa3576' style="transform:scale(1w)" />
						</label>
				</checkbox-group>
			</view>

		</view>
		<view class="footer">
			<view class="footer-content">
				<view class="preview" @tap="previewImage">预览</view>
				<view class="next-step">
					<button class="next-botton" type="default" plain="true" @tap='nextStep'> 下一步 </button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import topBar from "../../components/topBar.vue";
	export default {
		components: {
			topBar,
		},
		data() {
			return {
				menuWidth: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
				menuBottom: 0,
				height: 0,
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '',
				type: '',
				imageList: [],
				count: 1, //上传数量
				changeList: []
			}
		},
		onLoad: function(option) {
			let that = this
			that.type = option.type
			// console.log(this.type)
			if (option.type == 'video') {
				that.title = '选择视频'
				that.count = 1
			} else {
				that.title = '选择图片'
				that.count = 10
			}

			that.chooseImage()
		},
		onReady() {
			let that = this;
			// 获取屏幕高度
			uni.getSystemInfo({
				success: function(res) {
					that.height = res.screenHeight
					let menu = uni.getMenuButtonBoundingClientRect();
					that.menuWidth = menu.width
					that.menuTop = menu.top
					that.menuHeight = menu.height
					that.menuLeft = menu.left
					that.menuBottom = menu.bottom
					that.menuPaddingRight = res.windowWidth - menu.right
				}
			})
		},
		methods: {
			radioChange: function(e) {
				let values = e.detail.value;
				this.changeList = values
				// console.log(values)
			},
			/* ---------------上传图片--------------- */
			chooseImage: async function() {
				const that = this
				if (that.imageList.length === that.count) {
					let isContinue = await that.isFullImg();
					console.log("是否继续?", isContinue);
					if (!isContinue) {
						return;
					}
				}
				/* 选中图片 */
				uni.chooseImage({
					sourceType: ['camera', 'album'],
					sizeType: ['original', 'compressed'],
					count: that.count,
					success: (res) => {
						const tempFilePaths = res.tempFilePaths; //获取到本地图片地址
						// console.log(res)
						let list = []
						list.push(tempFilePaths[0])
						that.imageList = that.imageList.concat(list)
						// console.log(that.imageList)
					}
				})
			},
			/* 图片数量满了弹出窗口询问是否清空 */
			isFullImg: function() {
				return new Promise((res) => {
					let content = ''
					if (this.type == 'video') {
						content = '视频只能选择一个视频！是否删除现有的视频，喵'
					}else{
						content = '图片最多只能选择十张！是否删除最新的图片，喵'
					}
					uni.showModal({
						content: content,
						success: (e) => {
							if (e.confirm) {
								this.imageList = [];
							} else {

							}
						},
						fail: () => {
							res(false)
						}
					})
				})
			},
			// 预览图片
			previewImage: function() {
				console.log('预览')
				console.log(this.changeList)
				// let current = e.target.dataset.src
				// uni.previewImage({
				// 	current: current,
				// 	urls: this.imageList
				// })

			},
			nextStep: function() {
				console.log(this.changeList)
			}
		}
	}
</script>

<style scoped>
	.diary_write-content {
		background-color: #F0F0F0;

	}

	.content-item {
		padding: 20rpx 10rpx 20rpx 20rpx;
		display: flex;
		flex-wrap: wrap;
	}

	.change-video {
		height: 170rpx;
		width: 170rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FFFFFF;
		margin-bottom: 5rpx;
		margin-right: 10rpx;
	}

	.change-radio {
		display: flex;
		flex-wrap: wrap;
	}

	.list-content {
		display: flex;
		flex-wrap: wrap;
	}

	.video-list {
		margin-right: 10rpx;
		position: relative;
	}

	.changes {
		height: 170rpx;
		width: 170rpx;
		margin-bottom: 2rpx;
		background-color: #FFFFFF;
	}

	.change-type {
		position: absolute;
		top: 8rpx;
		right: 5rpx;
		width: 38rpx;
		height: 38rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 9;
		width: 100%;
	}

	.footer-content {
		display: flex;
		justify-content: space-between;
		background-color: #FFFFFF;
		font-size: 28rpx;
		color: #111111;
		width: 100%;
		align-items: center;
		padding: 12rpx 40rpx;
	}

	.next-step {
		padding-right: 80rpx;
	}

	.next-botton {
		width: 220rpx;
		background-image: linear-gradient(-45deg, #fa3475 0%, #ff6699 100%);
		box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(250, 53, 118, 0.5);
		border-radius: 40rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		border: none;
		text-align: center;
		line-height: 80rpx;
	}
</style>
