<template>
	<view class="add_address">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuTop='menuTop' :menuHeight='menuHeight'  :menuBottom='menuBottom'></topBar>

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
								<view class="input-content" @tap='set_this_area'>
									<view class="this_info" > {{ select }} </view>
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
							<view class="save">
								<button class="settings" type="default" v-if="this_page==''" @tap='saveUserMessage'>保存</button>
								<button class="settings" type="default" v-else @tap='saveUserMessage'>保存并使用</button>
							</view>
						</view>
					</view>
				</template>
			</scroll-view>
			
			<view class="this_area" v-if="show_ares">
				<picker-view indicator-class="indicator_class" mask-class='mask_class' :value="value" @change="set_area_info" >
					<picker-view-column>
						<view class="set_area_item" v-for="(item,index) in province_array" :key="index">{{item.area_name}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="set_area_item" v-for="(item,index) in city_array" :key="index">{{item.area_name}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="set_area_item" v-for="(item,index) in area_array" :key="index">{{item.area_name}}</view>
					</picker-view-column>
				</picker-view>
				<view class="this_picker_btn">
					<view class="this_no" @tap='set_this_area'>取消</view>
					<view class="this_ok" @tap='define_area'>确定</view>
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
				menuTop: 0,
				menuHeight: 0,
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
				province_array: [],//省
				city_array: [],//市
				area_array: [], //区
				show_ares:false,
				area_value:{detail:{value:[0,0,0]}},
				value:['','',''],
				this_page:''
			}
		},
		onLoad(options) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			that.type = options.add
			if (options.id) {
				that.addrressId = options.id
				that.userName = options.name
				that.userPhone = options.telphone
			}
			if(options.page){//判定是从确认订单过来的
				that.this_page = options.page
			}
			console.log(options,that.this_page)
			that.get_region(0,1)
			
		},
		onReady() {
			let that = this;
			that.height = uni.getSystemInfoSync().screenHeight;
			let platform = getApp().platform || getApp().globalData.platform || 'Applets'
			if (platform == 'Applets') {
				uni.getSystemInfo({
					success: function(res) {
						let menu = uni.getMenuButtonBoundingClientRect();
						that.menuTop = menu.top
						that.menuHeight = menu.height
						that.menuBottom = menu.bottom
					}
				})
			} 
			else if (platform == 'APP'){
				that.menuTop = 40
				that.menuBottom = 70
				that.menuHeight = 30
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
			get_region: function(parent_id,index) {
				let that = this
				let dataInfo = {
					interfaceId: 'getareas',
					parent_id: parent_id
				}
				that.request.uniRequest("address", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.province_array = data
						if(index!=null&&index==1){
							let event = {
								detail:{
									value:[0,0,0]
								}
							}
							that.set_area_info(event)
						}
					}
				})
			},
			get_city:function(parent_id){
				let that = this
				let dataInfo = {
					interfaceId: 'getareas',
					parent_id: parent_id
				}
				that.request.uniRequest("address", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.city_array = data
						that.get_area(that.city_array[that.area_value.value[1]].area_id)
					}
				})
			},
			get_area:function(parent_id){
				let that = this
				let dataInfo = {
					interfaceId: 'getareas',
					parent_id: parent_id
				}
				that.request.uniRequest("address", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.area_array = data
					}
				})
			},
			set_this_area:function(){
				let that = this
				that.show_ares = !that.show_ares
			},
			set_area_info:function(event){
				let that = this
				let value = event.detail
				that.area_value = value
				that.get_city(that.province_array[value.value[0]].area_id)
			},
			define_area:function(){
				let that = this
				that.province = that.province_array[that.area_value.value[0]].area_id
				that.province_cn = that.province_array[that.area_value.value[0]].area_name
				that.city = that.city_array[that.area_value.value[1]].area_id
				that.city_cn = that.city_array[that.area_value.value[1]].area_name
				that.area = that.area_array[that.area_value.value[2]].area_id
				that.area_cn = that.area_array[that.area_value.value[2]].area_name
				that.select = that.province_cn + '-' + that.city_cn + '-' + that.area_cn
				that.show_ares = !that.show_ares
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
								if(that.this_page!=''&&that.this_page=='order'){
									let userInfo = {}
									userInfo.real_name = that.userName
									userInfo.tel = that.userPhone
									userInfo.address = that.province_cn + that.city_cn + that.area_cn + that.detailedAddress
									// userInfo.address_id = info.id
									userInfo.tag = that.selectLabelName
									uni.setStorageSync("newuserInfo", userInfo)
									uni.navigateBack({
										delta: 1
									});
								}
								if(that.this_page!=''&&that.this_page=='orders'){
									let userInfo = {}
									userInfo.real_name = that.userName
									userInfo.tel = that.userPhone
									userInfo.address = that.province_cn + that.city_cn + that.area_cn + that.detailedAddress
									// userInfo.address_id = info.id
									userInfo.tag = that.selectLabelName
									uni.setStorageSync("newuserInfo", userInfo)
									uni.navigateBack({
										delta: 2
									});
								}
								else{
									setTimeout(function() {
										uni.navigateTo({
											url: '/pages/my/harves_address'
										})
									}, 1000)
								}
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
	
	.this_info {
		color: #999999;
	}
	
	.this_area{
		background-color: #FFFFFF;
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 120rpx;
		z-index: 9;
	}
	
	.this_picker_btn{
		position: absolute;
		bottom: -120rpx;
		left: 0;
		width: 100%;
		height: 120rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #FFFFFF;
		z-index: 9;
	}
	
	.this_no{
		width: 200rpx;
		border-radius: 16rpx;
		line-height: 60rpx;
		color: #09BB07;
		background-color: #F2F2F2;
		text-align: center;
		margin-right: 40rpx;
	}
	
	.this_ok{
		width: 200rpx;
		border-radius: 16rpx;
		line-height: 60rpx;
		background-color: #07C160;
		color: #FFFFFF;
		text-align: center;
	}
	
	.indicator_class{
		width: 100%;
		height: 100%;
	}
	
	.mask_class{
		background-color: #FFFFFF;
		bottom: 0;
		left: 0;
	}
	
	uni-picker-view {
	  display: block;
	}
	uni-picker-view .uni-picker-view-wrapper {
	  display: flex;
	  position: relative;
	  /* overflow: hidden; */
	  height: 100%;
	  background-color: white;
	}
	uni-picker-view[hidden] {
	  display: none;
	}
	picker-view {
	  width: 100%;
	  height: 460rpx;
	}
	
	.set_area_item{
		line-height: 34px !important;
		align-items: center;
        justify-content: center;
        text-align: center;
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
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		background-color: #f0f0f0;
		border-radius: 20rpx;
		margin-right: 36rpx;
	}

	.selectStyle {
		width: 126rpx;
		height: 40rpx;
		line-height: 40rpx;
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
	.settings::after{
		border: none;
	}
</style>
