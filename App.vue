<script>
	export default {
		globalData: {
			platform: ''
		},
		
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
			
			let that = this
			let platform = ''
			// #ifdef APP-PLUS || APP-NVUE
			platform = 'APP'
			// #endif
			// #ifdef  MP
			platform = 'Applets'
			// #endif
			// #ifdef  H5
			platform = 'H5'
			// #endif
			if(getApp()){
				getApp().globalData.platform = platform
			}
			that.platform = platform
		},
		onHide: function() {
			// console.log('App Hide')
		},
	}
</script>

<style>
	/*每个页面公共css */
	body {
		min-height: 0;
	}

	checkbox .uni-checkbox-input {
		border-radius: 50%;
	}
</style>
