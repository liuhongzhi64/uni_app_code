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
									<input class="input-import" @input="phoneInput" placeholder-style="color:#999999" maxlength='11' type="number" placeholder="请输入收货人手机号" />
								</view>
							</view>
							<view class="user-message">
								<view class="title"> 所在地区 <text>*</text> </view>
								<view class="input-content">
									
									<picker @change="bindPickerChange" mode="region" >
										<!-- <input class="input-import"  placeholder-style="color:#999999" placeholder="省-市-区/县、乡镇等 " /> -->
										<view class="area-input">{{userAddress}}<text class="area" v-if="select">省-市-区/县、乡镇等 &nbsp; > </text></view>
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
							<view class="label-item" >
								<view class="label-name" :class="{selectStyle:btnnum == k}" v-for="(i,k) in labelList" :key='k' :data-name='i':data-k='k' @tap='selectLabel'> {{i}} </view>
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
				userAddress: '',
				detailedAddress: '', //详细地址
				select:true,
				labelList:['家','公司','学校','其他'],
				btnnum:0,
				selectLabelName:'',
				whetherDefultAddress:true,
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
				this.userAddress = e.target.value[0]+''+e.target.value[1]+''+e.target.value[2]
				this.select = false
			},
			selectLabel:function(e){
				this.btnnum = e.currentTarget.dataset.k
				this.selectLabelName = e.currentTarget.dataset.name
			},
			changeAddress:function(e){
				this.whetherDefultAddress = e.target.value
			},
			saveUserMessage:function(){
				let userMessage = {}
				userMessage.name = this.userName
				userMessage.phone = this.userPhone
				userMessage.address = this.userAddress
				userMessage.detailedAddress = this.detailedAddress
				userMessage.labelName = this.selectLabelName
				userMessage.whetherDefultAddress = this.whetherDefultAddress
				console.log(userMessage)
			}
		}
	}
</script>

<style scoped>
	.porduct-content{
		background-color: #F6F6F6;
	}

	.user-all-message{
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
	.input-content{
		width: 45%;
	}

	.area {
		color: #999999;
	}
	.area-input{
		min-width: 200rpx;
		text-align: start;
	}
	
	.all-label{
		background-color: #FFFFFF;
		margin-top: 20rpx;
		padding: 40rpx;
	}
	.label-title{
		font-size: 24rpx;
		color: #111111;
		font-weight: bolder;
	}
	.label-item{
		display: flex;
		align-items: center;
		margin-top: 32rpx;
		font-size: 24rpx;
	}
	.label-name{
		width: 130rpx;
		height: 56rpx;
		line-height: 56rpx;
		text-align: center;
		background-color: #f0f0f0;
		border-radius: 28rpx;	
		margin-right: 36rpx;
	}
	.selectStyle{
		width: 130rpx;
		height: 56rpx;
		line-height: 56rpx;
		text-align: center;
		background-color: #ffe8f0;
		border: 2rpx solid #FA3475;
	}
	.setDefultAddress{
		margin-top: 40rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		line-height: 34rpx;
	}
	.set-address{
		color: #111111;
	}
	.hint{
		color: #999999;
	}
	
	.select-address switch{
		width: 82rpx;
		height: 50rpx;	
	}
	
	.save-settings{
		font-size: 32rpx;
		
		text-align: center;	
		position: fixed;
		bottom: 56rpx;
		width: 100%;
	}
	.save{
		padding: 0 40rpx;
	}
	.settings{
		height: 88rpx;
		border-radius: 44rpx;
		line-height: 88rpx;
		color: #FFFFFF;
		border: 0;
		background-image: linear-gradient(0deg,  #fa3475 0%,  #ff6699 100%);
	}
	
</style>
