<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// #ifdef H5
			var lastTouchEnd = 0;
			document.documentElement.addEventListener('touchend', function(event) {
				var now = Date.now();
				if (now - lastTouchEnd <= 300) {
					event.preventDefault();
				}
				lastTouchEnd = now;
			}, false);
			// #endif
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		background-color: #f3f3f3;
	}
	textarea{
		width: 100%;
		font-size: 32rpx;
	}
	input{
		font-size: 32rpx;
	}


	.mt-32 {
		margin-top: 32rpx;
	}

	.mb-32 {
		margin-bottom: 32rpx;
	}

	.mb-16 {
		margin-bottom: 16rpx;
	}

	.ml-32 {
		margin-left: 32rpx;
	}

	.ml-32 {
		margin-left: 16rpx;
	}

	.mr-32 {
		margin-right: 32rpx;
	}

	.mr-16 {
		margin-right: 16rpx;
	}

	.ma-32 {
		margin: 32rpx;
	}

	.mx-32 {
		margin-left: 32rpx;
		margin-right: 32rpx;
	}

	.my-32 {
		margin-top: 32rpx;
		margin-bottom: 32rpx;
	}

	.mx-16 {
		margin-left: 16rpx;
		margin-right: 16rpx;
	}

	.my-16 {
		margin-top: 16rpx;
		margin-bottom: 16rpx;
	}

	.pa-32 {
		padding: 32rpx;
		box-sizing: border-box;
	}

	.pa-16 {
		padding: 16rpx;
		box-sizing: border-box;
	}

	.pt-32 {
		padding-top: 32rpx;
		box-sizing: border-box;
	}

	.pb-32 {
		padding-bottom: 32rpx;
		box-sizing: border-box;
	}

	.pl-32 {
		padding-left: 32rpx;
		box-sizing: border-box;
	}

	.pr-32 {
		padding-right: 32rpx;
		box-sizing: border-box;
	}

	.px-32 {
		padding-left: 32rpx;
		padding-right: 32rpx;
		box-sizing: border-box;
	}

	.px-16 {
		padding-left: 16rpx;
		padding-right: 16rpx;
		box-sizing: border-box;
	}

	.py-32 {
		padding-top: 32rpx;
		padding-bottom: 32rpx;
		box-sizing: border-box;
	}

	.py-16 {
		padding-top: 16rpx;
		padding-bottom: 16rpx;
		box-sizing: border-box;
	}

	.bg-white {
		background: #FFFFFF;
	}

	.border-6 {
		border-radius: 12rpx;
	}

	.flex {
		display: flex;
	}

	.justify-center {
		justify-content: center;
	}

	.justify-between {
		justify-content: space-between;
	}

	.flex-column {
		flex-direction: column;
	}

	.items-center {
		align-items: center;
	}

	.justify-start {
		justify-content: flex-start;
	}

	.justify-end {
		justify-content: flex-end;
	}

	.border-bottm {
		border-bottom: solid 1px #e1e1e1;
	}

	.border {
		border: solid 1px #E1E1E1;
	}

	.text-color {
		color: #46495F;
	}

	.text-white {
		color: #ffffff;
	}

	.text-d-size {
		font-size: 32rpx;
	}

	.text-size14 {
		font-size: 28rpx;
	}
	
	.text-size12 {
		font-size: 24rpx;
	}

	.bg-paoc {
		background-color: #46495f;
	}

	.w-full {
		height: 100%;
	}

	.h-full {
		height: 100vh;
	}

	.text-bold {
		font-weight: bold;
	}

	.text-color-red {
		color: red;
	}

	.text-center {
		text-align: center;
	}

	.text-left {
		text-align: left;
	}

	.text-right {
		text-align: right;
	}
</style>
