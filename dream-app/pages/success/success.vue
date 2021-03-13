<template>
	<view class="px-32 w-full flex justify-center items-center flex-column">
		<image class="status-img" src="../../static/img/success.png" mode=""></image>
		<view class="mt-32 bg-paoc btn border-6" @click="goToIndex">返回首页</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goToIndex() {
				uni.reLaunch({
					url: '/pages/index/index'
				});
			}
		}
	}
</script>

<style>
	.btn {
		width: 600rpx;
		height: 100rpx;
		color: #ffffff;
		text-align: center;
		line-height: 100rpx;
	}

	.status-img {
		width: 300rpx;
		height: 300rpx;
		margin: 80rpx 0;
	}
</style>
