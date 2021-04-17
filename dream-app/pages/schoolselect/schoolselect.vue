<template>
	<view class="w-full">
		<view class="px-32 py-16 flex justify-center items-center input-box">
			<input type="text" v-model="schoolTip" @input="searchSchool" class="select-input pa-16" value="" placeholder="请输入关键词" />
		</view>
		<view class="pa-16 school-list-box">
			<div class="list" v-for="item of schoolist" :key="item.schoolCode">
				{{item.schoolName}}
			</div>
		</view>
	</view>
</template>

<script>
	const school = require("../../static/json/school.json")
	export default {
		data() {
			return {
				schoolist: [],
				schoolTip:null
			}
		},
		created() {
			this.schoolist = school
		},
		methods: {
			searchSchool(){
				this.schoolist = this.$tool.searchTip(school, 'schoolName', this.schoolTip)
				uni.pageScrollTo({
				    duration:100, // 毫秒
					scrollTop:0 // 位置
				});
			}
		}
	}
</script>

<style>
	page {
		height: 100vh;
		background-color: #FFFFFF !important;
	}

	.input-box {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 5;
		background: #FFFFFF;
	}

	// #ifdef  H5
	.input-box {
		top: 88rpx;
	}
	// #endif
	.select-input {
		width: 100%;
		border: solid 1rpx #46495F;
		border-radius: 40rpx;
		height: 44rpx;
		box-sizing: content-box;
	}
	.school-list-box{
		padding-top: 100rpx;
	}
	.list {
		border-bottom: solid 1rpx #e1e1e1;
		padding: 20rpx 32rpx;
	}
</style>
