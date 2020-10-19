<template>
	<view class="add_address">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>

		<view class="content">
			<scroll-view class="porduct-content" scroll-y :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
				<template>
					<view class="add-address-content">
						<view class="user-all-message">
							<view class="user-message">
								<view class="title"> 收货人 <text>*</text> </view>
								<view class="input-content">
									<input class="input-import" @input="nameInput" placeholder-style="color:#999999" placeholder="请输入收货人姓名" />
								</view>
							</view>
							<view class="user-message">
								<view class="title"> 手机号 <text>*</text> </view>
								<view class="input-content">
									<input class="input-import" @input="phoneInput" placeholder-style="color:#999999" maxlength='11' type="number"
									 placeholder="请输入收货人手机号" />
								</view>
							</view>
							<view class="user-message">
								<view class="title"> 所在地区 <text>*</text> </view>
								<view class="input-content">
									<!-- <picker @change="bindPickerChange" mode="region" >
										<view class="area-input">{{userAddress}}<text class="area" v-if="select">省-市-区/县、乡镇等 &nbsp; > </text></view>
									</picker> -->
									<view class="area-input" >
										<picker @tap="getarea" :value="index" :range="array">
											<view class="uni-input">{{array[index] ||province_cn + city_cn + area_cn }}</view>
										</picker>
										<!-- <view class="province area" @tap='getarea(0)'> {{province_cn}} - </view>
										<view class="city area" @tap='getarea(1)'> {{city_cn}} - </view>
										<view class="area" @tap='getarea(2)'> {{area_cn}} </view> -->
									</view>
								</view>
							</view>
							<view class="user-message">
								<view class="title"> 详细地址 <text>*</text> </view>
								<view class="input-content">
									<input class="input-import" @input="addressInput" placeholder-style="color:#999999" placeholder="街道、楼牌号等 " />
								</view>
							</view>
						</view>
						<view class="all-label">
							<view class="label-title">标签</view>
							<view class="label-item">
								<view class="label-name" :class="{selectStyle:btnnum == k}" v-for="(i,k) in labelList" :key='k' :data-name='i'
								 :data-k='k' @tap='selectLabel'>
									{{i}}
								</view>
							</view>
							<view class="setDefultAddress">
								<view class="set-address-hint">
									<view class="set-address">设置为默认地址</view>
									<view class="hint">提示：每次下单会优先使用默认地址</view>
								</view>
								<view class="select-address">
									<switch checked color="#09bb07" @change="changeAddress" />
								</view>
							</view>
						</view>
						<view class="save-settings">
							<view class="save"><button class="settings" type="default" plain="true" @tap='saveUserMessage'>保存并使用</button></view>
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
				province: '', //省id
				province_cn: '四川省', //省中文
				city: '', //市id
				city_cn: '成都市', //市中文
				area: '', //区id
				area_cn: '武侯区', //区中文
				detailedAddress: '', //详细地址
				userAddress: '',
				select: true,
				labelList: ['家', '公司', '学校', '其他'],
				btnnum: 0,
				selectLabelName: '家',
				is_default: 1,
				requestUrl: '',
				type: '', //1、添加，2、修改
				array: ['四川省-成都市-武侯区'], //城市
			}
		},
		onLoad(options) {
			let that = this
			this.request = this.$request
			that.type = options.add
			that.requestUrl = that.request.globalData.requestUrl
		},
		onReady() {
			let that = this;
			let platform = ''
			switch (uni.getSystemInfoSync().platform) {
				case 'android':
					platform = 'android'
					break;
				case 'ios':
					platform = 'ios'
					break;
				default:
					platform = 'applet'
					break;
			}
			if (platform == 'applet') {
				uni.getSystemInfo({
					success: function(res) {
						that.height = res.screenHeight
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuWidth = menu.width
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuLeft = menu.left
						that.menuBottom = menu.bottom
					}
				})
			} else {
				that.menuWidth = 87
				that.menuTop = 50
				that.menuHeight = 32
				that.menuLeft = 278
				that.menuBottom = 82
			}
		},
		methods: {
			// 名字
			nameInput: function(event) {
				this.userName = event.target.value
			},
			// 电话
			phoneInput: function(event) {
				this.userPhone = event.target.value
			},
			// 详细地址
			addressInput: function(event) {
				this.detailedAddress = event.target.value
			},
			// 市省区
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				that.getarea(0)
				this.select = false
			},
			getarea: function(index) {
				let that = this
				let dataInfo = {
					interfaceId: 'getareas',
					parent_id: index
				}
				that.request.uniRequest("address", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.array = data
					}
				})
			},
			// 标签
			selectLabel: function(e) {
				this.btnnum = e.currentTarget.dataset.k
				this.selectLabelName = e.currentTarget.dataset.name
			},
			// 默认
			changeAddress: function(e) {
				if (e.target.value) {
					this.is_default = 1
				} else {
					this.is_default = 0
				}
			},
			saveUserMessage: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'change',
					type: that.type,
					accept_name: that.userName,
					telphone: that.userPhone,
					province: '', //省id
					province_cn: '', //省中文
					city: '', //市id
					city_cn: '', //市中文
					area: '', //区id
					area_cn: '', //区中文
					address: detailedAddress, //详细地址
					is_default: 1, //0、否，1、是
					tag: '', //标识
					id: '' //修改时传输
				}
				console.log(dataInfo)
			}
		}
	}
</script>

<style scoped>
	.porduct-content {
		background-color: #F6F6F6;
	}

	.user-all-message {
		background-color: #FFFFFF;
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

	.input-content {
		width: 45%;
	}

	.area {
		color: #999999;
	}

	.area-input {
		min-width: 200rpx;
		text-align: start;
		display: flex;
	}

	.all-label {
		background-color: #FFFFFF;
		margin-top: 20rpx;
		padding: 40rpx;
	}

	.label-title {
		font-size: 24rpx;
		color: #111111;
		font-weight: bolder;
	}

	.label-item {
		display: flex;
		align-items: center;
		margin-top: 32rpx;
		font-size: 24rpx;
	}

	.label-name {
		width: 130rpx;
		height: 56rpx;
		line-height: 56rpx;
		text-align: center;
		background-color: #f0f0f0;
		border-radius: 28rpx;
		margin-right: 36rpx;
	}

	.selectStyle {
		width: 130rpx;
		height: 56rpx;
		line-height: 56rpx;
		text-align: center;
		background-color: #ffe8f0;
		border: 2rpx solid #FA3475;
	}

	.setDefultAddress {
		margin-top: 40rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		line-height: 34rpx;
	}

	.set-address {
		color: #111111;
	}

	.hint {
		color: #999999;
	}

	.select-address switch {
		width: 82rpx;
		height: 50rpx;
	}

	.save-settings {
		font-size: 32rpx;

		text-align: center;
		position: fixed;
		bottom: 56rpx;
		width: 100%;
	}

	.save {
		padding: 0 40rpx;
	}

	.settings {
		height: 88rpx;
		border-radius: 44rpx;
		line-height: 88rpx;
		color: #FFFFFF;
		border: 0;
		background-image: linear-gradient(0deg, #fa3475 0%, #ff6699 100%);
	}
</style>
