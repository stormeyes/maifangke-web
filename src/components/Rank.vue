<template>
    <el-main>
        <el-tabs type="border-card">
            <el-tab-pane label="涨价房源排行">
                <el-table
                        v-loading="is_querying_up_rank"
                        element-loading-text="拼命加载中"
                        element-loading-spinner="el-icon-loading"
                        element-loading-background="rgba(0, 0, 0, 0.8)"
                        :data="up_rank"
                        stripe
                        style="width: 100%">
                    <el-table-column prop="locationName" label="区域"></el-table-column>
                    <el-table-column prop="departmentName" label="小区"></el-table-column>
                    <el-table-column prop="beforeChangePrice" label="原价"></el-table-column>
                    <el-table-column prop="afterChangePrice" label="调后价"></el-table-column>
                    <el-table-column prop="minus" label="差价"></el-table-column>
                    <el-table-column prop="happenDate" label="调整日期"></el-table-column>
                    <el-table-column :formatter="toHouseUrl" label="查看">
                        <template slot-scope="scope">
                            <el-button @click="toHouseUrl(scope.row)" type="text" size="small">房源链接</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="降价房源排行">
                <el-table
                        v-loading="is_querying_down_rank"
                        element-loading-text="拼命加载中"
                        element-loading-spinner="el-icon-loading"
                        element-loading-background="rgba(0, 0, 0, 0.8)"
                        :data="down_rank"
                        stripe
                        style="width: 100%">
                    <el-table-column prop="locationName" label="区域"></el-table-column>
                    <el-table-column prop="departmentName" label="小区"></el-table-column>
                    <el-table-column prop="beforeChangePrice" label="原价"></el-table-column>
                    <el-table-column prop="afterChangePrice" label="调后价"></el-table-column>
                    <el-table-column prop="minus" label="差价"></el-table-column>
                    <el-table-column prop="happenDate" label="调整日期"></el-table-column>
                    <el-table-column :formatter="toHouseUrl" label="查看">
                        <template slot-scope="scope">
                            <el-button @click="toHouseUrl(scope.row)" type="text" size="small">房源链接</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </el-main>
</template>

<script>
    import { query_rank } from '../model'

    export default {
        name: "Rank",
        data() {
            return {
                up_rank: [],
                down_rank: [],
                is_querying_up_rank: false,
                is_querying_down_rank: false,
            }
        },
        methods: {
            toHouseUrl: function(row) {
                window.open(`https://sz.lianjia.com/ershoufang/${row.houseId}.html`, '_blank')
            },
        },
        created: function () {
            let _this = this;
            _this.is_querying_up_rank = true;
            _this.is_querying_down_rank = true;
            query_rank('UP').then(houses => {
                _this.up_rank = houses;
                _this.is_querying_up_rank = false;
            });
            query_rank('DOWN').then(houses => {
                _this.down_rank = houses;
                _this.is_querying_down_rank = false;
            });
        }
    }
</script>

<style scoped>

</style>