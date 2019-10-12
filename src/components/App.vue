<template>
    <el-container>
        <el-header>
            <el-menu
                    router
                    :default-active="$route.path"
                    mode="horizontal"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item>深房客</el-menu-item>
                <el-menu-item index="/">房源</el-menu-item>
                <el-menu-item index="/bargains">成交</el-menu-item>
                <!--<el-menu-item index="/school">学位</el-menu-item>-->
                <!--<el-menu-item index="4">笋盘</el-menu-item>-->
                <el-menu-item index="/analysis">小区投资分析</el-menu-item>
                <el-menu-item index="/rank">涨跌榜</el-menu-item>
                <!--<el-menu-item index="/rent-house">租房</el-menu-item>-->
                <!--<el-menu-item index="8">计算器</el-menu-item>-->
                <!--<el-menu-item index="9">融资工具</el-menu-item>-->
                <el-menu-item index="/shen-account">如何落户</el-menu-item>
                <el-menu-item index="/faq">买房精华问答</el-menu-item>
                <el-menu-item index="/about">关于作者</el-menu-item>
                <!--<el-menu-item index="/transaction">一篇文章理解深圳交易流程</el-menu-item>-->
            </el-menu>
        </el-header>
        <el-main>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </el-main>
        <el-footer style="background-color: rgb(84, 92, 100);color: white;">
            <el-row class="custom-footer-item" style="margin-top: 10px">
                <el-col :span="10" :offset="7">
                    深房客(shenfangke.com) - 买个好房子
                </el-col>
            </el-row>
            <el-row class="custom-footer-item">
                <el-col :span="10" :offset="7">
                    公众号: 深房客 Copyright © 2013-2019 All Rights Reserved.
                </el-col>
            </el-row>
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {

            };
        },
        methods: {

        }
    }
</script>

<style>
    html, body {
        margin: 0;
    }
    .el-main {
        padding-top: 10px;
    }
    .custom-footer-item {
        height: 30px;
        line-height: 20px;
        font-size: 14px;
    }
</style>