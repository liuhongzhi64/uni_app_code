<template>
	<view class="add_address">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<view class="content">
			<scroll-view class="porduct-content" scroll-y :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
				<template>
					<view class="add-address-content">
						<view class="user-message">
							<view class="title"> 收货人 <text>*</text> </view>
							<view class="input-content">
								<input class="input-import" @input="nameInput" placeholder-style="color:#999999" placeholder="请输入收货人姓名" />
							</view>
						</view>
						<view class="user-message">
							<view class="title"> 手机号 <text>*</text> </view>
							<view class="input-content">
								<input class="input-import" @input="phoneInput" placeholder-style="color:#999999" maxlength='11' type="number" placeholder="请输入收货人手机号" />
							</view>
						</view>
						<view class="user-message">
							<view class="title"> 所在地区 <text>*</text> </view>
							<view class="input-content">
								
								<picker @change="bindPickerChange" :value="index" :range="array">
									<view class="area-input">{{array[index]}}<text class="area" v-if="select">省-市-区/县、乡镇等 &nbsp; > </text></view>
								</picker>
							</view>
						</view>
						<view class="user-message">
							<view class="title"> 详细地址 <text>*</text> </view>
							<view class="input-content">
								<input class="input-import" @input="addressInput" placeholder-style="color:#999999" placeholder="街道、楼牌号等 " />
							</view>
						</view>
					</view>
				</template>
			</scroll-view>
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
				barName: 'back', //导航条名称
				title: '新增收货地址',
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/return.png',
				userName: '',
				userPhone: '',
				userAddress: '',
				detailedAddress: '', //详细地址
				array: ['中国', '美国', '巴西', '日本'],
				index: -1,
				select:true
			}
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
			nameInput: function(event) {
				this.userName = event.target.value
			},
			phoneInput: function(event) {
				this.userPhone = event.target.value
			},
			addressInput: function(event) {
				this.detailedAddress = event.target.value
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
				this.select = false
			},
		}
	}
</script>

<style scoped>
	.add-address-content {
		padding: 0 40rpx;
		font-size: 24rpx;
	}

	.user-message {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 35rpx 0;
		border-bottom: 1rpx solid #f0f0f0;
	}

	.title {
		color: #111111;
	}

	.title text {
		color: #fa3475;
	}

	.area {
		color: #999999;
	}
	.area-input{
		min-width: 200rpx;
	}
	
	
</style>
