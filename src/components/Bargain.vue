<template>
    <el-main>
        <el-row>
            <el-col :span="22" :offset="1">
                <el-form :inline="true" :model="form" class="demo-form-inline">
                    <el-form-item label="小区名称">
                        <el-autocomplete
                                class="inline-input"
                                v-model="form.department_name"
                                :fetch-suggestions="query_department"
                                placeholder="请输入小区名称"
                                :trigger-on-focus="false"
                                @select="handleDepartmentSelect"
                                :select-when-unmatched="false"
                        ></el-autocomplete>
                    </el-form-item>
                    <el-form-item label="房型">
                        <el-select v-model="form.room" placeholder="选择房型">
                            <el-option label="不限" value=""></el-option>
                            <el-option label="一室" value="1"></el-option>
                            <el-option label="二室" value="2"></el-option>
                            <el-option label="三室" value="3"></el-option>
                            <el-option label="四室" value="4"></el-option>
                            <el-option label="五室" value="5"></el-option>
                            <el-option label="五室以上" value="6"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="厅数">
                        <el-select v-model="form.ting" placeholder="选择厅数">
                            <el-option label="不限" value=""></el-option>
                            <el-option label="0厅" value="0"></el-option>
                            <el-option label="1厅" value="1"></el-option>
                            <el-option label="2厅" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="建筑面积">
                        <el-select v-model="form.area" placeholder="选择面积范围">
                            <el-option label="不限" value=""></el-option>
                            <el-option label="50㎡以下" value='{"min": 0, "max": 50}'></el-option>
                            <el-option label="50-70㎡" value='{"min": 50, "max": 70}'></el-option>
                            <el-option label="70-90㎡" value='{"min": 70, "max": 90}'></el-option>
                            <el-option label="90-110㎡" value='{"min": 90, "max": 110}'></el-option>
                            <el-option label="110-140㎡" value='{"min": 110, "max": 140}'></el-option>
                            <el-option label="140-170㎡" value='{"min": 140, "max": 170}'></el-option>
                            <el-option label="170-200㎡" value='{"min": 170, "max": 200}'></el-option>
                            <el-option label="200㎡以上" value='{"min": 200}'></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="query_bargains" :loading="is_querying_bargains">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="22" :offset="1">
                <el-table
                        v-loading="is_querying_bargains"
                        element-loading-text="拼命加载中"
                        element-loading-spinner="el-icon-loading"
                        element-loading-background="rgba(0, 0, 0, 0.8)"
                        :data="bargains"
                        border
                        stripe
                        style="width: 100%">
                    <el-table-column fixed width="150" prop="locationName" label="区域">
                    </el-table-column>
                    <el-table-column fixed width="120" prop="departmentName" label="小区">
                    </el-table-column>
                    <el-table-column width="80" :formatter="roomAndTing" label="户型">
                    </el-table-column>
                    <el-table-column width="80" prop="area" label="面积(㎡)">
                    </el-table-column>
                    <el-table-column width="100" prop="bargainPrice" label="成交价(万)">
                    </el-table-column>
                    <el-table-column width="100" prop="listedPrice" label="报价(万)">
                    </el-table-column>
                    <el-table-column width="120" prop="listedDate" label="挂盘日">
                    </el-table-column>
                    <el-table-column width="120" prop="bargainDate" label="成交日">
                    </el-table-column>
                    <el-table-column width="120" prop="bargainDuration" label="成交周期(天)">
                    </el-table-column>
                    <el-table-column width="240" :formatter="schoolNames" label="对应学位">
                    </el-table-column>
                    <el-table-column width="80" prop="houseType" label="类型">
                    </el-table-column>
                    <el-table-column label="操作" width="120">
                        <template slot-scope="scope">
                            <el-button @click="toBargainUrl(scope.row)" type="text" size="small">成交链接</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-row style="margin-top: 20px">
            <el-col :span="20" :offset="3">
                <el-pagination
                        style="float: right"
                        @current-change="onNextPage"
                        background
                        layout="prev, pager, next"
                        :page-size="pagination.pageSize"
                        :total="pagination.total">
                </el-pagination>
            </el-col>
        </el-row></el-main>
</template>

<script>
    import { query_department_by_name, query_bargains_by_condition } from '../model'

    export default {
        name: "Bargain",
        methods: {
            query_department(queryString, callback) {
                query_department_by_name(queryString).then(list => {
                    list.forEach(e => {
                        e.value = e.name;
                        e.department_id = e.departmentId;
                    });

                    callback(list);
                });
            },
            handleDepartmentSelect: function(item) {
                this.form.department_id = item.departmentId;
            },
            roomAndTing: function(row) {
                return `${row.room}室${row.ting}厅`;
            },
            schoolNames: function(row) {
                return row.schoolNames.replace("\n", " ") || "-";
            },
            toBargainUrl: function(row) {
                window.open(`https://sz.lianjia.com/chengjiao/${row.houseId}.html`, '_blank')
            },
            query_bargains: function () {
                let _this = this;
                this.is_querying_bargains = true;
                query_bargains_by_condition(this.form, this.pagination.page).then(({list, total}) => {
                    _this.pagination.total = total;
                    _this.bargains = list;
                }).finally(() => _this.is_querying_bargains = false);
            },
            onNextPage: function (newPage) {
                this.pagination.page = newPage;
                this.query_bargains();
            }
        },
        data: function () {
            return {
                form: {
                    department_id: "",
                    room: "",
                    ting: "",
                    price: "",
                    area: "",
                    department_name: "",
                },
                pagination: {
                    page: 0,
                    pageSize: 20,
                    total: 0,
                },
                bargains: [],
                is_querying_bargains: false,
            }
        },
        created: function () {
            this.query_bargains();
        },
    }
</script>

<style scoped>

</style>