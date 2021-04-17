<template>
	<view>
		<view class="authen-tip text-bold text-color-red text-center pa-16">为保证双方财产安全请认真填写认证资料</view>
		<view class="authen-box">
			<view class="flex justify-between items-center ma-32 py-32 px-16 border-6 border-bottm bg-white">
				<view class="text-size">
					选择学校
				</view>
				<view class="">
					<input @click="goSchoolSelect" :disabled='true' type="text" class="text-right" value=""
						placeholder="请选择您的学校" />
				</view>
			</view>
			<view class="flex justify-between items-center ma-32 py-32 px-16 border-6 border-bottm bg-white">
				<view class="text-size">
					真实姓名
				</view>
				<view class="">
					<input type="text" class="text-right" value="" placeholder="请填写您的真实姓名" />
				</view>
			</view>
			<view class="flex justify-between items-center ma-32 py-32 px-16 border-6 border-bottm bg-white">
				<view class="text-size">
					身份证号
				</view>
				<view class="">
					<input type="idcard" class="text-right" value="" placeholder="请填写您的身份证号" />
				</view>
			</view>
			<view class="ma-32 py-32 px-16 border-6 border-bottm bg-white">
				<view class="text-size">身份证正面</view>
				<view class="flex justify-between items-center">
					<image class="shen-card" src="../../static/img/cz.png" mode=""></image>
					<view class="text-center">
						<view class="upload-btn">
							点击上传
						</view>
						<view class="text-color text-size14">请上传字迹清晰地照片</view>
					</view>
				</view>
			</view>
			<view class="ma-32 py-32 px-16 border-6 border-bottm bg-white">
				<view class="text-size">身份证反面</view>
				<view class="flex justify-between items-center">
					<image class="shen-card" src="../../static/img/cf.png" mode=""></image>
					<view class="text-center">
						<view class="upload-btn">
							点击上传
						</view>
						<view class="text-color text-size14">请上传字迹清晰地照片</view>
					</view>
				</view>
			</view>
			<label class="mx-32 text-size14">
				<checkbox value="cb" :checked="false" />我已阅读《申请跑男协议》,勾选表示同意协议
			</label>
			<view class="my-32 mx-32 w-full bg-paoc btn border-6">提交资料</view>
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
			goSchoolSelect() {
				uni.navigateTo({
					url: '/pages/schoolselect/schoolselect'
				});
			}
		}
	}
</script>

<style>
	page {
		font-size: 32rpx;
	}

	.authen-tip {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 5;
		background: #FFFFFF;
	}

	// #ifdef  H5
	.authen-tip {
		top: 88rpx;
	}

	// #endif
	.authen-box {
		margin-top: 100rpx;
	}

	.shen-card {
		width: 300rpx;
		height: 260rpx;
	}

	.upload-btn {
		width: 220rpx;
		height: 60rpx;
		background-color: #46495F;
		color: #FFFFFF;
		text-align: center;
		line-height: 60rpx;
		margin: 8rpx auto;
	}

	.btn {
		height: 100rpx;
		color: #ffffff;
		text-align: center;
		line-height: 100rpx;
	}
</style>
