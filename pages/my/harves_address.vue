<template>
	<view class="harves_address">
		<topBar class="topBar" :topBackgroundColor='topBackgroundColor' :color='color' :backImage='backImage' :barName='barName'
		 :title='title' :menuWidth='menuWidth' :menuTop='menuTop' :menuHeight='menuHeight' :menuLeft='menuLeft' :menuBottom='menuBottom'></topBar>
		<view class="harves_address_content container" :style="[{'padding-top':menuBottom+10+'px','height':height-menuBottom-10+'px'}]">
			<!-- 暂无地址 -->
			<view class="usermottoNo" v-if="list.length==0">
				<image src="https://img-blog.csdnimg.cn/20200720152049639.png"></image>
				<text class="user-motto">您还没有填写地址喔</text>
			</view>
			<!-- 有地址 -->
			<view class="usermotto" v-else>
				<block v-for="(item,index) in list" :key="index">
					<view class="addressbox">
						<view class="addressLine" 
						 @tap="set_address(item)">
							<view class='name'>{{item.accept_name}}</view>
							<text class='phone'>{{item.telphone}}</text>
							<view class='label'>{{item.tag}}</view>
							<view class="address">
								<text class="detailed">{{ item.province_cn+item.city_cn+item.area_cn+item.address }}</text>
							</view>
						</view>
						<view class="editBox">
							<view class="set" @tap='setDefault(item.is_default,item.id)'>
								<view class="circular" :class="{'is_default':item.is_default==1}"></view>默认地址
							</view>
							<view @tap="edit(item.id,item)" class="edit">编辑</view>
							<view class="delete" @tap="deleteArea(item.id)">删除</view>
						</view>
					</view>
				</block>
			</view>

			<view class="address-btn">
				<view @tap="bindViewTap" class="btn">+添加新地址</view>
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
				barName: 'back', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '/static/images/back2.png',
				title: '地址管理',
				list: [],
				requestUrl: '',
				page:'',//进来的路径
			}
		},
		onLoad(options) {
			let that = this
			this.request = this.$request
			that.requestUrl = that.request.globalData.requestUrl
			if(options.page){
				that.page = options.page
			}
			that.getDetails()
		},
		onReady() {
			let that = this;
			// 获取屏幕高度
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
				that.menuTop = 40
				that.menuBottom = 70
				that.menuHeight = 30
				that.menuLeft = 278
			}
		},
		methods: {
			// 地址列表
			getDetails: function() {
				let that = this
				let dataInfo = {
					interfaceId: 'getinfo'
				}
				that.request.uniRequest("address", dataInfo).then(res => {
					if (res.data.code == 1000 && res.data.status == 'ok') {
						let data = res.data.data
						that.list = data
					}
				})
			},
			//跳转新建
			bindViewTap: function() {
				uni.navigateTo({
					url: `/pages/my/add_address?add=1`,
				})
			},
			set_address:function(info){
				let that = this
				if(that.page=='order'){
					let userInfo = {}
					userInfo.real_name = info.accept_name
					userInfo.tel = info.telphone
					userInfo.address = info.province_cn + info.city_cn + info.area_cn + info.address
					userInfo.address_id = info.id
					uni.setStorageSync("newuserInfo", userInfo)
					uni.navigateBack({
						delta: 1
					});
				}
				
			},
			// 编辑
			edit: function(id,item) {
				let name = item.accept_name
				let telphone = item.telphone
				// console.log(item)
				uni.navigateTo({
					url: `/pages/my/add_address?add=2&&id=${id}&&name=${name}&&telphone=${telphone}`,
				})
			},
			// 删除
			deleteArea: function(id) {
				let that = this
				uni.showModal({
					title: '提示',
					content: '是否删除此地址?',
					success: function(res) {
						if (res.confirm) {
							let dataInfo = {
								interfaceId: 'del',
								id: id
							}
							console.log(dataInfo)
							that.request.uniRequest("address", dataInfo).then(res => {
								if (res.data.code == 1000 && res.data.status == 'ok') {
									that.request.showToast(res.message)
									that.getDetails()
								}
							})
						}
					}
				})
			},

			// 设为默认地址
			setDefault: function(is_default, id) {
				let that = this;
				console.log(is_default, id)
				// is_default<1(不是默认地址才能请求)
				if (is_default < 1) {
					let dataInfo = {
						interfaceId: 'changedefault',
						id: id,
					}
					that.request.uniRequest("address", dataInfo).then(res => {
						if (res.data.code == 1000 && res.data.status == 'ok') {
							that.request.showToast('设置成功')
							that.getDetails()
						}
					})
				}
			},
		}
	}
</script>

<style scoped>
	page {
		background-color: #f6f6f6;
	}

	.container {
		font-size: 28rpx
	}

	.container .usermottoNo {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 150rpx;
	}

	.container .usermottoNo image {
		width: 59rpx;
		height: 83rpx;
	}

	.container .user-usermottoNo {
		color: #dc296c;
		margin: 35rpx 0 210rpx 0
	}

	.address-btn {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.container .btn {
		width: 650rpx;
		height: 88rpx;
		text-align: center;
		color: #ffffff;
		margin-top: 70rpx;
		line-height: 88rpx;
		background-image: -moz-linear-gradient(90deg, rgb(250, 52, 117) 0%, rgb(255, 102, 153) 100%);
		background-image: -webkit-linear-gradient(90deg, rgb(250, 52, 117) 0%, rgb(255, 102, 153) 100%);
		background-image: -ms-linear-gradient(90deg, rgb(250, 52, 117) 0%, rgb(255, 102, 153) 100%);
		border-radius: 50rpx;
	}

	.container .addressbox {
		width: 710rpx;
		margin: 30rpx 0 20rpx 0;
		border-radius: 15rpx;
		background-color: #ffffff;
	}

	.container .addressLine {
		border-bottom: 2rpx solid #f0f0f0;
		padding: 30rpx 30rpx 20rpx 30rpx;
	}

	.container .name {
		float: left;
		font-size: 32rpx;
	}

	.container .phone {
		margin: 0 37rpx 0 20rpx;
		color: rgb(153, 153, 153);
	}

	.container .label {
		width: 66rpx;
		height: 32rpx;
		line-height: 32rpx;
		display: inline-block;
		text-align: center;
		background-image: -moz-linear-gradient(0deg, rgb(136, 52, 250) 0%, rgb(188, 102, 255) 100%);
		background-image: -webkit-linear-gradient(0deg, rgb(136, 52, 250) 0%, rgb(188, 102, 255) 100%);
		background-image: -ms-linear-gradient(0deg, rgb(136, 52, 250) 0%, rgb(188, 102, 255) 100%);
		position: absolute;
		color: #ffffff;
		border-radius: 25rpx;
		font-size: 22rpx;
	}

	.container .editBox {
		display: flex;
		height: 86rpx;
		align-items: center;
		padding-left: 30rpx;
	}

	.container .editBox .set {
		display: inline-flex;
		align-items: center;
	}

	.container .editBox .circular {
		width: 18rpx;
		height: 18rpx;
		border-radius: 50%;
		border: 1px solid #999999;
		margin-right: 15rpx;
	}

	.container .editBox .is_default {
		background-color: #dc296c;
		border: 1rpx solid #dc296c;
	}

	.container .address {
		margin-top: 15rpx;
		line-height: 35rpx;
	}

	.container .edit {
		margin: 0 30rpx 0 250rpx
	}

	.container .edit,
	.container .delete {
		border-radius: 20rpx;
		background-image: linear-gradient(-45deg,  #fa3475 0%,  #ff6699 100%);
		color: #FFFFFF;
		font-size: 24rpx;
		width: 110rpx;
		height: 40rpx;
		display: inline-block;
		line-height: 40rpx;
		text-align: center;
	}
</style>
