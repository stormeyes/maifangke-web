<template>
    <el-main>
        <el-row>
            <el-col>
                <el-form ref="form" :model="form" label-width="150px" size="small">
                    <el-form-item label="链家房源链接" width="10px">
                        <el-col :span="12">
                            <el-input v-model="form.lianjia_url" clearable placeholder="https://sz.lianjia.com/ershoufang/xx ...">
                            </el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="小区名称">
                        <el-col :span="12">
                            <el-autocomplete
                                    class="inline-input"
                                    v-model="department_name"
                                    :fetch-suggestions="querySearch"
                                    placeholder="请输入小区名称"
                                    :trigger-on-focus="false"
                                    @select="handleDepartmentSelect"
                                    :select-when-unmatched="false"
                            ></el-autocomplete>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="区域">
                        <el-radio-group v-model="form.location_id" @change="updateSubLocationId">
                            <el-radio label="">不限</el-radio>
                            <el-radio label="42">南山</el-radio>
                            <el-radio label="59">宝安</el-radio>
                            <el-radio label="18">福田</el-radio>
                            <el-radio label="1">罗湖</el-radio>
                            <el-radio label="88">龙华</el-radio>
                            <el-radio label="72">龙岗</el-radio>
                            <el-radio label="96">光明</el-radio>
                            <el-radio label="99">坪山</el-radio>
                            <el-radio label="55">盐田</el-radio>
                            <el-radio label="101">大鹏新区</el-radio>
                        </el-radio-group><br>
                        <el-radio-group v-model="form.sub_location_id" style="margin-top: 10px">
                            <el-radio label="">不限</el-radio>
                            <el-radio :label="sub_location.locationId" :key="sub_location.locationId" v-for="sub_location in sub_locations" style="margin-top: 10px">{{ sub_location.name }}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="房型">
                        <el-radio-group v-model="form.room">
                            <el-radio label="">不限</el-radio>
                            <el-radio label="1">一室</el-radio>
                            <el-radio label="2">二室</el-radio>
                            <el-radio label="3">三室</el-radio>
                            <el-radio label="4">四室</el-radio>
                            <el-radio label="5">五室+</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="首付范围(三成)">
                        <el-radio-group v-model="form.down_payment">
                            <el-radio label="">不限</el-radio>
                            <el-radio label='{"max": 60}'>60 万以下</el-radio>
                            <el-radio label='{"min": 60, "max": 100}'>60 - 100万</el-radio>
                            <el-radio label='{"min": 100, "max": 150}'>100 - 150万</el-radio>
                            <el-radio label='{"min": 150, "max": 300}'>150 - 300万</el-radio>
                            <el-radio label='{"min": 300}'>300万+</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="总价范围">
                        <el-radio-group v-model="form.price">
                            <el-radio label=''>不限</el-radio>
                            <el-radio label='{"max": 200}'>200 万以下</el-radio>
                            <el-radio label='{"min": 200, "max": 300}'>200 - 300万</el-radio>
                            <el-radio label='{"min": 300, "max": 400}'>300 - 400万</el-radio>
                            <el-radio label='{"min": 400, "max": 500}'>400 - 500万</el-radio>
                            <el-radio label='{"min": 500, "max": 800}'>500 - 800万</el-radio>
                            <el-radio label='{"min": 800, "max": 1000}'>800 - 1000万</el-radio>
                            <el-radio label='{"min": 1000}'>1000万 +</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="面积">
                        <el-radio-group v-model="form.area">
                            <el-radio label="">不限</el-radio>
                            <el-radio label='{"max": 50}'>50㎡以下</el-radio>
                            <el-radio label='{"min": 50, "max": 70}'>50 - 70㎡</el-radio>
                            <el-radio label='{"min": 70, "max": 90}'>70 - 90㎡</el-radio>
                            <el-radio label='{"min": 90, "max": 110}'>90 - 110㎡</el-radio>
                            <el-radio label='{"min": 110, "max": 140}'>110 - 140㎡</el-radio>
                            <el-radio label='{"min": 140, "max": 170}'>140 - 170㎡</el-radio>
                            <el-radio label='{"min": 170, "max": 200}'>170 - 200㎡</el-radio>
                            <el-radio label='{"min": 200}'>200㎡ +</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="朝向">
                        <el-checkbox-group v-model="form.orientation">
                            <el-checkbox label="东">东</el-checkbox>
                            <el-checkbox label="南">南</el-checkbox>
                            <el-checkbox label="西">西</el-checkbox>
                            <el-checkbox label="北">北</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="特点">
                        <el-checkbox-group v-model="form.options">
                            <el-checkbox label="fiveAndUniq">满五唯一</el-checkbox>
                            <el-checkbox label="noLoan">无需赎楼</el-checkbox>
                            <el-checkbox label="underLuxury">豪宅线以下</el-checkbox>
                            <el-checkbox label="housingOnly">只看住宅</el-checkbox>
                            <el-checkbox label="offlineIncluded">包含已下线房源</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="query_houses" :loading="is_querying_house">搜索</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="22" :offset="1">
                <el-table
                        v-loading="is_querying_house"
                        element-loading-text="拼命加载中"
                        element-loading-spinner="el-icon-loading"
                        element-loading-background="rgba(0, 0, 0, 0.8)"
                        :data="houses"
                        border
                        stripe
                        style="width: 100%">
                    <el-table-column fixed width="150" prop="locationName" label="区域">
                    </el-table-column>
                    <el-table-column fixed width="120" prop="departmentName" label="小区">
                    </el-table-column>
                    <el-table-column fixed width="80" :formatter="roomAndTing" label="户型">
                    </el-table-column>
                    <el-table-column fixed width="100" prop="price" label="报价(万)">
                    </el-table-column>
                    <el-table-column width="150" prop="downPayment" label="首付(含税费)(万)">
                    </el-table-column>
                    <el-table-column width="120" prop="monthlyMortgage" label="月供(万)">
                    </el-table-column>
                    <el-table-column width="120" prop="rentPrice" label="房租(万)">
                    </el-table-column>
                    <el-table-column width="80" prop="buildYear" label="建造时间">
                    </el-table-column>
                    <el-table-column width="150" :formatter="isFiveAndUniq" label="性质">
                    </el-table-column>
                    <el-table-column width="80" prop="area" label="面积(㎡)">
                    </el-table-column>
                    <el-table-column width="80" prop="orientation" label="朝向">
                    </el-table-column>
                    <el-table-column width="150" prop="floor" label="楼层">
                    </el-table-column>
                    <el-table-column width="120" prop="ladderPerHouseholds" label="梯户比">
                    </el-table-column>
                    <el-table-column width="80" prop="houseType" label="类型">
                    </el-table-column>
                    <el-table-column width="80" prop="loan" label="欠款(万)">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="180">
                        <template slot-scope="scope">
                            <el-button @click="toHouseUrl(scope.row)" type="text" size="small">房源链接</el-button>
                            <el-popover
                                    placement="top"
                                    title="对口学校"
                                    width="200"
                                    trigger="click"
                                    :content="scope.row.schoolNames || '暂无学校信息'">
                                <el-button slot="reference" type="text" size="small">学位</el-button>
                            </el-popover>
                            <el-button @click="toHouseUrl(scope.row)" type="text" size="small">调价历史</el-button>
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
        </el-row>
    </el-main>
</template>

<script>
    import { query_department_by_name, query_houses_by_condition } from '../model'
    import { locations } from '../common'

    export default {
        name: "House",
        methods: {
            querySearch(queryString, callback) {
                query_department_by_name(queryString).then(list => {
                    list.forEach(e => {
                        e.value = e.name;
                        e.department_id = e.departmentId;
                    });

                    callback(list);
                });
            },
            updateSubLocationId: function(newLocationId) {
                this.sub_locations = locations[newLocationId] ? locations[newLocationId] : [];
                this.form.sub_location_id = "";
            },
            handleDepartmentSelect: function(item) {
                this.form.department_id = item.department_id;
            },
            roomAndTing: function(row) {
                return `${row.room}室${row.ting}厅`;
            },
            isFiveAndUniq: function (row) {
                return row.registerTime + row.isUnique;
            },
            toHouseUrl: function(row) {
                window.open(`https://sz.lianjia.com/ershoufang/${row.houseId}.html`, '_blank')
            },
            query_houses: function () {
                let _this = this;
                _this.is_querying_house = true;
                query_houses_by_condition(this.form, this.pagination.page).then(({list, total}) => {
                    _this.pagination.total = total;
                    _this.houses = list;
                }).finally(() => _this.is_querying_house = false);
            },
            onNextPage: function (newPage) {
                this.pagination.page = newPage;
                this.query_houses();
            }
        },
        data: function () {
            return {
                form: {
                    lianjia_url: "",
                    department_id: "",
                    location_id: "",
                    sub_location_id: "",
                    room: "",
                    price: "",
                    area: "",
                    type: [],
                    orientation: [],
                    options: [],
                    down_payment: "",
                },
                pagination: {
                    page: 0,
                    pageSize: 20,
                    total: 0,
                },
                houses: [],
                department_name: "",
                is_querying_house: false,
                sub_locations: [],
            }
        },
        created: function () {
            this.query_houses();
        },
    }
</script>