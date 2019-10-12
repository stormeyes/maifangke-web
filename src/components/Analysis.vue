<template>
    <el-main>
        <el-row>
            <el-col :span="16" :offset="4">
                <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item v-for="item in 6" :key="item" name="我是name">
                        <img src="http://localhost:63342/shenfangke-web/dist/nanyou.jpg" />
                        <h3 class="medium">南油区板块解析</h3>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>
        <el-row :gutter="40">
            <el-col :span='5' :offset="2">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="https://ke-image.ljcdn.com/hdic-resblock/6e236938-2eda-48b3-bcd6-24cd9476cefc.jpg.710x400.jpg" class="image">
                    <div style="padding: 14px;">
                        <span style="font-weight: 600">花样年花乡</span>
                        <div class="bottom clearfix">
                            <el-tag type="warning">首付 90-300 万</el-tag>
                            <el-button type="text" class="button" style="line-height: 30px">宝安中心区</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="5">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="https://t.focus-img.cn/sh900x675esh/xf/xc/5c66e09a-040d-4782-a825-eedd3effd536.JPEG" class="image">
                    <div style="padding: 14px;">
                        <span>花样年花乡</span>
                        <div class="bottom clearfix">
                            <el-tag>首付 600-900</el-tag>
                            <el-button type="text" class="button" style="line-height: 30px">宝安中心区</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="5">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="https://t.focus-img.cn/sh900x675esh/xf/xc/5c66e09a-040d-4782-a825-eedd3effd536.JPEG" class="image">
                    <div style="padding: 14px;">
                        <span>花样年花乡</span>
                        <div class="bottom clearfix">
                            <el-tag>首付 600-900</el-tag>
                            <el-button type="text" class="button" style="line-height: 30px">宝安中心区</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="5">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="https://t.focus-img.cn/sh900x675esh/xf/xc/5c66e09a-040d-4782-a825-eedd3effd536.JPEG" class="image">
                    <div style="padding: 14px;">
                        <span>花样年花乡</span>
                        <div class="bottom clearfix">
                            <el-tag>首付 600-900</el-tag>
                            <el-button type="text" class="button" style="line-height: 30px">宝安中心区</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="40">
            <el-col :span='5' :offset="2">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="https://t.focus-img.cn/sh900x675esh/xf/xc/5c66e09a-040d-4782-a825-eedd3effd536.JPEG" class="image">
                    <div style="padding: 14px;">
                        <span style="font-weight: 600">花样年花乡</span>
                        <div class="bottom clearfix">
                            <el-tag>首付 600-900</el-tag>
                            <el-button type="text" class="button" style="line-height: 30px">宝安中心区</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="5">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="https://t.focus-img.cn/sh900x675esh/xf/xc/5c66e09a-040d-4782-a825-eedd3effd536.JPEG" class="image">
                    <div style="padding: 14px;">
                        <span>花样年花乡</span>
                        <div class="bottom clearfix">
                            <el-tag>首付 600-900</el-tag>
                            <el-button type="text" class="button" style="line-height: 30px">宝安中心区</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="5">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="https://t.focus-img.cn/sh900x675esh/xf/xc/5c66e09a-040d-4782-a825-eedd3effd536.JPEG" class="image">
                    <div style="padding: 14px;">
                        <span>花样年花乡</span>
                        <div class="bottom clearfix">
                            <el-tag>首付 600-900</el-tag>
                            <el-button type="text" class="button" style="line-height: 30px">宝安中心区</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="5">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="https://t.focus-img.cn/sh900x675esh/xf/xc/5c66e09a-040d-4782-a825-eedd3effd536.JPEG" class="image">
                    <div style="padding: 14px;">
                        <span>花样年花乡</span>
                        <div class="bottom clearfix">
                            <el-tag>首付 600-900</el-tag>
                            <el-button type="text" class="button" style="line-height: 30px">宝安中心区</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" style="text-align: center">
                <p>... 持续更新中</p>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
    export default {
        name: "Analysis",
        data() {
            return {
                item: ["aaaaaaaaaa"]
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .price-hint {
        font-size: 13px;
        color: gray;
    }

    .el-card img {
        width: 245px;
        height: 180px;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
</style>