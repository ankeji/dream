<template>
	<view class="mx-32 my-16">
		<view class="border-6 bg-paoc w-full border pa-32 flex">
			<image class="user-img mr-16" src="../../static/logo.png" mode=""></image>
			<view class="text-white">
				<view class="text-d-size user-ma">安科吉</view>
				<view class="text-size14">
					<view class="">跑币个数：30币</view>
					<view class="">认证状态：未认证</view>
				</view>
			</view>
		</view>
		<view class="navlist-box">
			<view class="flex justify-between items-center w-full border-bottm text-d-size py-32 px-16 text-size14">
				<view class="flex items-center">
					<image class="nav-left-img mr-16" src="../../static/img/order.png" mode=""></image>
					<view class="text-color">订单</view>
				</view>
				<image class="nav-img" src="../../static/img/right.png" mode=""></image>
			</view>
			<view class="flex justify-between items-center w-full border-bottm text-d-size py-32 px-16 text-size14">
				<view class="flex items-center">
					<image class="nav-left-img mr-16" src="../../static/img/chongzhi.png" mode=""></image>
					<view class="text-color">充值跑币</view>
				</view>
				<image class="nav-img" src="../../static/img/right.png" mode=""></image>
			</view>
			
			<view class="flex justify-between items-center w-full border-bottm text-d-size py-32 px-16 text-size14">
				<view class="flex items-center">
					<image class="nav-left-img mr-16" src="../../static/img/zhuan.png" mode=""></image>
					<view class="text-color">赚取跑币</view>
				</view>
				<image class="nav-img" src="../../static/img/right.png" mode=""></image>
			</view>
			<view class="flex justify-between items-center w-full border-bottm text-d-size py-32 px-16 text-size14" @click="goAuthen">
				<view class="flex items-center">
					<image class="nav-left-img mr-16" src="../../static/img/runman.png" mode=""></image>
					<view class="text-color">成为跑男</view>
				</view>
				<image class="nav-img" src="../../static/img/right.png" mode=""></image>
			</view>
			<view class="flex justify-between items-center w-full border-bottm text-d-size py-32 px-16 text-size14">
				<view class="flex items-center">
					<image class="nav-left-img mr-16" src="../../static/img/tixian.png" mode=""></image>
					<view class="text-color">跑币提现</view>
				</view>
				<image class="nav-img" src="../../static/img/right.png" mode=""></image>
			</view>
			<view class="flex justify-between items-center w-full border-bottm text-d-size py-32 px-16 text-size14">
				<view class="flex items-center">
					<image class="nav-left-img mr-16" src="../../static/img/cphone.png" mode=""></image>
					<view class="text-color">变更手机号</view>
				</view>
				<image class="nav-img" src="../../static/img/right.png" mode=""></image>
			</view>
			<view class="flex justify-between items-center w-full border-bottm text-d-size py-32 px-16 text-size14">
				<view class="flex items-center">
					<image class="nav-left-img mr-16" src="../../static/img/service.png" mode=""></image>
					<view class="text-color">联系客服</view>
				</view>
				<image class="nav-img" src="../../static/img/right.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goAuthen(){
				uni.navigateTo({
				    url: '/pages/authen/authen'
				});
			}
		}
	}
</script>

<style scoped>
page{
	background-color: #FFFFFF;
}
.user-img{
	width: 88rpx;
	height: 88rpx;
	border-radius: 100%;
}
.user-ma{
	margin-top: -5rpx;
	margin-bottom: 8rpx;
}
.navlist-box{
	margin-top: 30rpx;
}
.nav-img{
	width: 24rpx;
	height: 24rpx;
}
.nav-left-img{
	width: 36rpx;
	height: 36rpx;
}
</style>
