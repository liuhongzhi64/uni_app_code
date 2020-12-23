export default {
	globalData: {
		appid: "wx8068a8a4b6c8a39f", //wxd8c2d232303432c2
		requestUrl: "https://mytest.hmzixin.com/"
	},
	// 模态对话框
	showModal: function(content, title = "提示") {
		uni.showModal({
			title: title,
			content: content
		})
	},
	// 消息提示框
	showToast: function(title, icon = "none") {
		uni.showToast({
			title: title,
			icon: icon
		})
	},
	// 获取token
	getToken: function(businessId = '1', unique_id = 16, method = "POST") {
		let that = this
		return new Promise((resolve) => {
			uni.request({
				method: method,
				url: that.globalData.requestUrl + "login" + "?d=" + new Date().getTime(),
				header: {
					appid: that.globalData.appid,
					businessId: businessId
				},
				data: {
					interfaceId: 'token',
					unique_id: unique_id
				},
				success: res => {
					resolve(res);
					if (res.data.status !== "ok") {
						that.showModal("系统错误：" + res.data.code);
					} else {
						if (res.data.code !== 1000) that.showModal(res.data.message);
					}

				},
				complete() {
					uni.hideLoading();
				}
			})
		})
	},
	// 数据请求(异步)
	uniRequest: function(fileName, data, method = "POST") {
		const that = this;
		uni.showLoading({
			title: '加载中...',
			mask: true
		})
		return new Promise((resolve) => {
			uni.request({
				method: method,
				url: that.globalData.requestUrl + fileName + "?d=" + new Date().getTime(),
				header: {
					appid: that.globalData.appid,
					businessId: 1,
					token: uni.getStorageSync("token")
				},
				data: data,
				success: res => {
					resolve(res);
					if (fileName != "goods") {
						if (res.data.status !== "ok") {
							that.showModal("系统错误：" + res.data.code);
						} else {
							if (res.data.code !== 1000) {
								if (res.data.message == '登录失败[1007]' || res.data.message == '登录失败[1016]' || res.data.message ==
									'登录失败[1004]' || res.data.message == '登录失败[1006]') {
									that.showToast(res.data.message)
									// 后期使用
									setTimeout(function() {
										uni.navigateTo({
											url: '/pages/login/login_phone'
										})
									}, 1000)
								} else if (res.data.code == 2201) {
									that.showToast(res.data.message)
								}
								else if (res.data.code != 1098&&res.data.code != 3005&&res.data.code != 3004 ) {
									that.showModal(res.data.message)
								}
							}
						}
					}
				},
				complete() {
					uni.hideLoading();
				}
			})
		})
	},
	// 到院导航
	goMap: function() {
		uni.openLocation({
			latitude: 30.62296, // 纬度
			longitude: 104.05257, // 经度
			name: "四川华美紫馨医学美容医院",
			address: "四川省成都市武侯区二环路南三段25号"
		})
	},
	// 页面跳转
	// 阿拉丁事件上传
	// 支付状态
	// 数据排序（指定字段）
	sortNumber: function(name) {
		return function(a, b) {
			var val1 = a[name];
			var val2 = b[name];
			return val2 - val1;
		}
	},
	// 已选规格转字符串显示
	objToStr: function(obj) {
		let specArr = "";
		for (let i in obj) {
			specArr += i + ":" + obj[i] + "；";
		}
		return specArr;
	}
}
