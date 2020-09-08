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
						<view class="addressLine">
							<view class='name'>{{item.accept_name}}</view>
							<text class='phone'>{{item.telphone}}</text>
							<view class='label'>公司</view>
							<view class="address">{{item.dizhi}}
								<text class="detailed">{{item.address}}详细地址最多就两排，详细地址最多两排......</text>
							</view>
						</view>
						<view class="editBox">
							<view class="set">
								<view class="circular"></view>默认地址
							</view>
							<view @tap="edit" class="edit" :data-gid='item.id'>编辑</view>
							<view class="delete" :data-gid='item.id' bindtap="delete">删除</view>
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
				barName: 'particularsPage', //导航条名称
				topBackgroundColor: '#222222',
				color: '#FFFFFF',
				backImage: '../static/images/back2.png',
				title: '地址管理',
				list: [],
			}
		},
		onShow: function() {
			this.request = this.$request
			const that = this
			console.log(111111111)
			// uni.request({
			// 	url: 'https://xcx.hmzixin.com/home', //仅为示例，并非真实的接口地址
			// 	data: {
			// 		interfaceId: 'getaddresslist',
			// 		token: 'VVI2aStjbGtMSVRjVWxpZngxbnovMCtwSXorc1g0V29MNTI3MGlGMG40OG83TWg4YVhvMHpDR2R0YUJGeEhkSjJaa01xdDhGVGQyVnJXS0QrZGhFYzlxMEFHRmEvenJBN1R3RFFONjN5U1RYNEM1c1FFWkZua25EUWx0N3ZsUTI='
			// 	},
			// 	method: 'POST',
			// 	header: {
			// 		'content-type': 'application/json' // 默认值
			// 	},
			// 	success(res) {
			// 		if (res.data.code == 200) {
			// 			//  做一个默认地址排序
			// 			res.data.data.sort(function(a, b) {
			// 				return b.is_default - a.is_default
			// 			})
			// 			that.setData({
			// 				list: res.data.data
			// 			})
			// 		}
			// 	}
			// })
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
			//跳转新建
			bindViewTap: function() {
				uni.navigateTo({
					url: `/pages/my/add_address?add = 1`,
				})

			},
			// 编辑
			edit: function() {
				uni.navigateTo({
					url: `/pages/my/add_address?add = 2`,
				})

			},
			// 删除
			delete: function() {
				this.request = this.$request
				this.request.showModal('确认要删除该收获地址吗')
			},

			// 设为默认地址
			radioChange: function(event) {
				this.request = this.$request
				var that = this;
				console.log(event.currentTarget.dataset.gid, event.currentTarget.dataset.default)
				//is_default<1(不是默认地址才能请求)
				if (event.currentTarget.dataset.default < 1) {
					let data = {
						interfaceId: 'changedefaultaddress',
						token: app.globalData.token,
						address_id: event.currentTarget.dataset.gid,
					}
					that.request.uniRequest('home', data, res => {
						if (res.data.code == 200) {
							app.showModal("提示", '设置成功', false)
							that.onShow()
						}

					}, err => {
						console.log(err)
					})
				}


			},
		}
	}
</script>

<style scoped>
	/* pages/my/harves_address.wxss */
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
	.address-btn{
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
		border: 1px solid rgb(153, 153, 153);
		margin-right: 15rpx;
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
		border-radius: 10rpx;
		border: solid 2rpx #dc296c;
		color: #dc296c;
		font-size: 24rpx;
		width: 110rpx;
		height: 40rpx;
		display: inline-block;
		line-height: 40rpx;
		text-align: center;
	}
</style>
