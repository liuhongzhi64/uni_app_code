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
									<input class="input-import" @input="nameInput" placeholder-style="color:#999999" :placeholder="userName" />
								</view>
							</view>
							<view class="user-message">
								<view class="title"> 手机号 <text>*</text> </view>
								<view class="input-content">
									<input class="input-import" @input="phoneInput" placeholder-style="color:#999999" maxlength='11' type="number"
									 :placeholder="userPhone" />
								</view>
							</view>
							<view class="user-message">
								<view class="title"> 所在地区 <text>*</text> </view>
								<view class="input-content">
									<picker mode="multiSelector" :value="multiIndex" :range="allAreaArray" range-key='area_name' @change="allChange"
									 @columnchange="changeColumn">
										<view class="area" :class="{'area-input':select!='省-市-区/县'}">{{select}}</view>
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
				backImage: '/static/images/return.png',
				userName: '请输入收货人姓名',
				userPhone: '请输入收货人手机号',
				select: '省-市-区/县',
				multiIndex: [0, 0, 0],
				province: '', //省id
				province_cn: '', //省中文
				city: '', //市id
				city_cn: '', //市中文
				area: '', //区id
				area_cn: '', //区中文
				detailedAddress: '', //详细地址
				userAddress: '',
				labelList: ['家', '公司', '学校', '其他'],
				btnnum: 0,
				selectLabelName: '家',
				is_default: 1,
				requestUrl: '',
				type: 1, //1、添加，2、修改
				addrressId: 0,
				areaArray: [], //城市
				provinceArray: [],
				provinceShow: false,
				cityArray: [],
				allAreaArray: [
					[],
					[],
					[]
				],
				addrressItem: {}
			}
		},
		onLoad(options) {
			let that = this
			this.request = this.$request
			that.type = options.add
			if (options.id) {
				that.addrressId = options.id
				that.userName = options.name
				that.userPhone = options.telphone
			}
			console.log(options, that.type, that.addrressId)
			that.requestUrl = that.request.globalData.requestUrl
			that.getarea(0, 0)
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
			let platform = getApp().platform || getApp().globalData.platform
			if (platform == 'Applets') {
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuWidth = menu.width
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuLeft = menu.left
						that.menuBottom = menu.bottom
					}
				})
			} 
			else if (platform == 'APP'){
				that.menuWidth = 90
				that.menuTop = 20
				that.menuHeight = 30
				that.menuLeft = 278
				that.menuBottom = 50
			}
		},
		methods: {
			// 名字
			nameInput: function(event) {
				this.userName = event.target.value
			},
			// 电话
			phoneInput: function(event) {
				let that = this
				this.userPhone = event.target.value
			},
			// 详细地址
			addressInput: function(event) {
				this.detailedAddress = event.target.value
			},
			// 市省区
			allChange: function(event) {
				let that = this
				that.multiIndex = event.detail.value;
				that.select = that.province_cn + '-' + that.city_cn + '-' + that.area_cn
			},
			changeColumn: function(event) {
				let that = this
				let column = event.detail.column
				let value = event.detail.value
				if (column == 0) {
					that.province = that.areaArray[value].area_id
					that.province_cn = that.areaArray[value].area_name
					that.getarea(that.province, column)
				} else if (column == 1) {
					that.city = that.provinceArray[value].area_id
					that.city_cn = that.provinceArray[value].area_name
					that.getarea(that.city, column)
				} else {
					that.area = that.cityArray[value].area_id
					that.area_cn = that.cityArray[value].area_name
				}
			},
			getarea: function(index, column) {
				let that = this
				let dataInfo = {
					interfaceId: 'getareas',
					parent_id: index
				}
				that.request.uniRequest("address", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						if (index == 0) {
							that.areaArray = data
							that.allAreaArray[0] = that.areaArray
							that.provinceArray = []
							that.cityArray = []
							// console.log('省',that.areaArray)	
						} else {
							if (column == 0) {
								that.provinceArray = data
								that.allAreaArray[1] = that.provinceArray
								that.allAreaArray[2]  = []
							} else if (column == 1) {
								that.cityArray = data
								that.allAreaArray[2] = that.cityArray
								// console.log(data)
							}
						}
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
				// 验证
				let isKeep = that.verification()
				if(isKeep){
					if (that.type == 1) {
						let dataInfo = {
							interfaceId: 'change',
							type: that.type,
							accept_name: that.userName,
							telphone: that.userPhone,
							province: that.province, //省id
							province_cn: that.province_cn, //省中文
							city: that.city, //市id
							city_cn: that.city_cn, //市中文
							area: that.area, //区id
							area_cn: that.area_cn, //区中文
							address: that.detailedAddress, //详细地址
							is_default: this.is_default, //0、否，1、是
							tag: that.selectLabelName, //标识
							// id: '' //修改时传输
						}
						that.request.uniRequest("address", dataInfo).then(res => {
							if (res.data.code == 1000 && res.data.status == 'ok') {
								that.request.showToast('地址添加成功')
								setTimeout(function() {
									uni.navigateTo({
										url: '/pages/my/harves_address'
									})
								}, 2000)
							}
						})
					} else {
						let dataInfo = {
							interfaceId: 'change',
							type: that.type,
							accept_name: that.userName,
							telphone: that.userPhone,
							province: that.province, //省id
							province_cn: that.province_cn, //省中文
							city: that.city, //市id
							city_cn: that.city_cn, //市中文
							area: that.area, //区id
							area_cn: that.area_cn, //区中文
							address: that.detailedAddress, //详细地址
							is_default: this.is_default, //0、否，1、是
							tag: that.selectLabelName, //标识
							id: that.addrressId //修改时传输
						}
						that.request.uniRequest("address", dataInfo).then(res => {
							if (res.data.code == 1000 && res.data.status == 'ok') {
								that.request.showToast('地址修改成功')
								setTimeout(function() {
									uni.navigateTo({
										url: '/pages/my/harves_address'
									})
								}, 2000)
							}
						})
					}
				}				
			},
			verification: function() {
				let that = this
				let isKeep = false
				if (that.userName == '请输入收货人姓名') {
					that.request.showToast('请输入收货人姓名')
					isKeep = false
				} else if (that.userPhone == '请输入收货人手机号') {
					that.request.showToast('请输入收货人手机号')
					isKeep = false
				}else if(that.userPhone != '请输入收货人手机号'){
					if (!/(^1[3|4|5|6|7|8|9][0-9]{9}$)/.test(that.userPhone)) {
						that.request.showToast('请正确填写手机号码')
						isKeep = false
					}
					else if(that.select=='省-市-区/县'&&that.province_cn==''&&that.city_cn==''&&that.area_cn==''){
						that.request.showToast('请选择省-市-区/县')
						isKeep = false
					}
					else if(that.select!='省-市-区/县'&&that.province_cn!=''&&that.city_cn==''&&that.area_cn==''){
						that.request.showToast('请选择省-市-区/县')
						isKeep = false
					}
					else if(that.select!='省-市-区/县'&&that.province_cn!=''&&that.city_cn!=''&&that.area_cn==''){
						that.request.showToast('请选择省-市-区/县')
						isKeep = false
					}
					else if(that.detailedAddress==''){
						that.request.showToast('请输入详细地址')
						isKeep = false
					}else{
						isKeep = true
					}
				}
				return isKeep
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
		display: flex;
	}

	.area {
		color: #999999;
	}

	.area-input {
		color: #111111;
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
