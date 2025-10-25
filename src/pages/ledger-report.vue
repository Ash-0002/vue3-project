/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<template>
    <section>
        <div v-if="new_loading" class="loader-wrapper">
            <div class="loading_css">
                <img src="assets/images/1.0/brand/Loader-GIF-Final.gif" class="img-fluid loader_css" height="40"
                    width="40" />
            </div>
        </div>
        <!--Page header-->
        <div class="page-header-title-box">
            <div class="row align-items-center">
                <div class="col-lg-12 col-12">
                    <div class="title_text">
                        <h4 class="page-title mb-0">Reports</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="main_card">
            <div class="card">
                <div class="">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-12">
                            <div class="company_name" id="company_name">
                                <h3 id="" class="partyName">Ledger</h3>
                            </div>
                        </div>
                        <div class="col-lg-6 col-12">
                            <div class="parties_datefilter_vue">
                                <div class="parties_datefilter_vue">
                                    <span class="datepicker_left_arrow" @click="left_arrow()"><i
                                            class="fa fa-chevron-left"></i></span>
                                    <date-range-picker ref="picker" :auto-submit="true"
                                        :locale-data="{ firstDay: 1, format: 'dd/mm/yyyy',customRangeLabel: 'Custom Range',separator: ' - ' }"
                                        v-model="dateRange" :ranges="defaultRanges" :startDate="startDate"
                                        :endDate="endDate" @update="update()">
                                        <template v-slot:input="picker" style="min-width: 350px;">

                                        </template>
                                    </date-range-picker>
                                    <span class="datepicker_right_arrow" @click="right_arrow()"><i
                                            class="fa fa-chevron-right"></i></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="main_card">
            <div class="card">
                <div class="row">
                    <div class="col-12">
                        <div class="custom_table">
                            <v-app id="inspire">

                                <div class="row">
                                    <div class="col-lg-6 col-12">
                                        <ul class="search_input">
                                            <li class="">
                                                <div class="table_search">
                                                    <input class="search_input" placeholder="Search" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-6 col-12">
                                        <ul class="new_sales_top_table_part parties_ul_with_filter">
                                            <li>
                                                <v-select v-model="value" :items="headers" label="Set Columns" multiple
                                                    return-object>
                                                    <template v-slot:selection="{ item, index }">
                                                        <v-chip v-if="index === 0">
                                                            <span></span>
                                                        </v-chip>
                                                    </template>
                                                </v-select>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <v-data-table :page="page" :pageCount="numberOfPages" :headers="selectedHeaders"
                                        :items="ledger" :options.sync="options"
                                        :server-items-length="totalledger" :loading="loading" class="elevation-1"
                                        must-sort @update:sort-by="updateSort('by', $event)"
                                        @update:sort-desc="updateSort('desc', $event)" item-key="table_header_index"
                                        ref="table">
                                    <template v-slot:item.item_name="{ item }">
                                        <router-link class="onclick_details parties_inner_a"
                                                :to="{name: 'LedgerReportView', params: {id: item._id}}">{{item.item_name}}
                                        </router-link>
                                    </template>
                                    <template v-slot:item.amount="{ item }">
                                        <td align="right"><p><span class="font_sans">{{ symbol }}</span> {{item.amount}}</p></td>
                                    </template>
                                </v-data-table>
                            </v-app>

                        </div>
                    </div>
                </div>
            </div>
        </div>



    </section>

</template>





<script>
import Vue from "vue";
var numeral = require("numeral");

Vue.filter("formatNumberParties", function (value) {
    return new Intl.NumberFormat('en-IN',{minimumFractionDigits: 2}).format(value);
});
import axios from "axios";
import moment from 'moment'
import Api from "@/Api";
import DateRangePicker from 'vue2-daterange-picker'

//you need to import the CSS manually
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
export default {
    name: "daybook",
    components: { DateRangePicker },
    data() {

        let startDate = moment(String(localStorage.getItem('date_range_start_date')));
        let endDate = moment(String(localStorage.getItem('date_range_end_date')));
        return {
            startDate: startDate,
            endDate: endDate,

            dateRange: { startDate, endDate },
            defaultRanges: {  // I got a eslint syntax errors
                'Today': [new Date(), new Date()],
                'Yesterday': [new Date(Date.now() - 3600 * 1000 * 24), new Date(Date.now() - 3600 * 1000 * 24)],
                'This Week': [new Date(Date.now() - 7 * 24 * 3600 * 1000), new Date()],
                'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)],
                'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1), new Date(new Date().getFullYear(), new Date().getMonth(), 0)],
                'This Year': [new Date(String(localStorage.getItem('first_date_range_start_date'))), new Date(String(localStorage.getItem('first_date_range_end_date')))],
                'Last Year': [new Date(moment(String(localStorage.getItem('first_date_range_start_date'))).add(-1, 'year')), new Date(moment(String(localStorage.getItem('first_date_range_end_date'))).add(-1, 'year'))],
            },
            headers: [
                { text: 'Name', value: 'item_name', align: 'left', sortable: true },
                { text: 'Amount', value: 'amount', align: 'right' }
            ],
            page: 1,
            totalledger: 0,
            numberOfPages: 0,
            ledger: [],
            value: [],
            selectedHeaders: [],
            loading: true,
            new_loading: true,
            options: {},
            symbol : '',
            search : ''

        }
    },
    watch: {
        value(val) {
            this.selectedHeaders = val;
        },
        options: {
            handler() {
                this.ledger_report();
            },
        },
        deep: true,
    },
    created() {
        this.selectedHeaders = this.headers;
        console.log(this.selectedHeaders);
    },
    methods: {
        left_arrow() {
            var check_start_date = moment(String(this.dateRange.startDate));
            var check_end_date = moment(String(this.dateRange.endDate));
            var days = check_end_date.diff(check_start_date, 'days') + 1;
            if (days === 1) {
                // today
                var new_date_start_date = moment(check_start_date).add(-1, 'days');
                var new_date_end_date = moment(check_end_date).add(-1, 'days');
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else if (days === 2) {
                // yesterdays
                var new_date_start_date = moment(check_start_date).add(-2, 'days');
                var new_date_end_date = moment(check_end_date).add(-2, 'days');
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else if (days == 8) {
                // week
                var new_date_start_date = moment(check_start_date).add(-8, 'days');
                var new_date_end_date = moment(check_end_date).add(-8, 'days');
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else if (days > 28 && days <= 31 || days === 28) {
                // month
                var futureMonth = moment(check_start_date).add(-1, 'M');
                var new_date_start_date = moment(futureMonth).startOf('month');
                var new_date_end_date = moment(futureMonth).endOf('month');
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;

            } else if (days > 360 && days <= 366) {
                // Year
                var new_date_start_date = moment(check_start_date).add(-1, 'years');
                var new_date_end_date = moment(check_end_date).add(-1, 'years');
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else {
                // Custom Days
                var new_date_start_date = moment(check_start_date).add('-' + days, 'days');
                var new_date_end_date = moment(check_end_date).add('-' + days, 'days');
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            }

        },
        right_arrow() {
            var check_start_date = moment(String(this.dateRange.startDate));
            var check_end_date = moment(String(this.dateRange.endDate));
            var days = check_end_date.diff(check_start_date, 'days') + 1;
            if (days === 1) {
                // today
                var new_date_start_date = moment(check_start_date).add(1, 'days');
                var new_date_end_date = moment(check_end_date).add(1, 'days');
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else if (days === 2) {
                // yesterdays
                var new_date_start_date = moment(check_start_date).add(2, 'days');
                var new_date_end_date = moment(check_end_date).add(2, 'days');
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else if (days == 8) {
                // week
                var new_date_start_date = moment(check_start_date).add(8, 'days');
                var new_date_end_date = moment(check_end_date).add(8, 'days');
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else if (days > 28 && days <= 31 || days === 28) {
                // month
                var futureMonth = moment(check_start_date).add(1, 'M');
                var new_date_start_date = moment(futureMonth).startOf('month');
                var new_date_end_date = moment(futureMonth).endOf('month');
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;

            } else if (days > 360 && days <= 366) {
                // Year
                var new_date_start_date = moment(check_start_date).add(1, 'years');
                var new_date_end_date = moment(check_end_date).add(1, 'years');
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else {
                // Custom Days
                var new_date_start_date = moment(check_start_date).add(days, 'days');
                var new_date_end_date = moment(check_end_date).add(days, 'days');
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            }

        },
        ledger_report(type) {
            this.symbol = localStorage.getItem('symbol');
            var self = this;
            this.loading = true;
            this.new_loading = true;
            if (type === "search") {
                this.options.page = 1;
            }
            const { page, itemsPerPage } = this.options;
            let pageNumber = page - 1;
            const data = {
                customerId: localStorage.getItem("customerId"),
                companyId: localStorage.getItem("companyId"),
                startLimit: pageNumber * itemsPerPage,
                endLimit: itemsPerPage,
                requestFrom: "WEB",
                startDate: moment(String(this.$refs.picker.start)).format('yyyy-MM-DD'),
                endDate: moment(String(this.$refs.picker.start)).format('yyyy-MM-DD'),
                searchTerm: this.search,
            };
            const headers = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                token: localStorage.getItem("webAuthToken"),
            };

            Api.getDayBookReport(data, headers)
                .then((response) => {
                if (response.data.message == "AUTHENTICATION_FAILED") {
                    localStorage.clear();
                    window.location.href = "/";
                } else {
                    
                    response.data.data.list = [
                        {
                            "_id" : '62a82a525eb2e75741c08582',
                            "item_name" : "Direct Expense",
                            "amount" : "0",
                        },
                        {
                            "_id" : '62a82a525eb2e75741c08582',
                            "item_name" : "Items name",
                            "amount" : "0",
                        },
                        {
                            "_id" : '62a82a525eb2e75741c08582',
                            "item_name" : "XYZ LTD",
                            "amount" : "0",
                        }
                    ]
                    response.data.data.totalCount = "3";
                    let totalPages = Math.ceil(
                    response.data.data.totalCount / itemsPerPage
                    );
                    this.loading = false;
                    this.new_loading = false;
                    this.ledger = response.data.data.list;
                    this.totalledger = response.data.data.totalCount;
                    this.numberOfPages = totalPages;
                }
                })

                .catch((err) => {
                Common.getStatusForActionFailed(err.response.status);
                this.loading = false;
                this.new_loading = false;
                });
        },
        format_date(value) {
            if (value) {
                return moment(String(value)).format('DD MMM yyyy')
            }
        }
    },
    mounted() { 
        this.symbol = localStorage.getItem('symbol');
    },
};
</script>

