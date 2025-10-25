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
        <div class="page-header-title-box">
            <div class="row align-items-center">
                <div class="col-lg-3 col-sm-12 col-12">
                    <div class="title_text">
                        <h4 class="page-title mb-0">Ledger Group</h4>
                    </div>
                </div>
                <div class="col-lg-9 col-sm-12 col-12">
                    <div class="gross_net_right">
                        <ul class="grossnet_ledgers with_addbutton">
                            <li class="inline-block margin_right_15">
                                <div class="grossnet_section">

                                    <div class="switches-container">
                                        <input type="radio" :disabled="inputDisabled" id="switchMonthly" @change="switch_change($event)" v-model="switch_type" name="switchPlan" value="Gross"
                                            checked="checked" />
                                        <input type="radio" :disabled="inputDisabled" id="switchYearly" @change="switch_change($event)" v-model="switch_type" name="switchPlan" value="Net" />
                                        <label for="switchMonthly">Gross</label>
                                        <label for="switchYearly">Net</label>
                                        <div class="switch-wrapper">
                                            <div class="switch">
                                                <div>Gross</div>
                                                <div>Net</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <div class="main_card">
            <div class="card">
                <div class="">
                    <div class="row">
                        <div class="col-lg-6 col-12">

                            <div class="company_name sales_c_name mobile_padding_left_0">

                                <h3>{{this.group_name}}</h3>
                               
                            </div>

                        </div>
                        <div class="col-lg-6 col-12">
                            <div class="parties_datefilter_vue">
                                <div class="parties_datefilter_vue">
                                    <span class="datepicker_left_arrow" @click="left_arrow()"><i
                                            class="fa fa-chevron-left"></i></span>
                                    <date-range-picker ref="picker" :auto-submit="true"
                                        :locale-data="{ firstDay: 1, format: 'dd/mm/yyyy', customRangeLabel: 'Custom Range', separator: ' - ' }"
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
                                    <div class="col-lg-3 col-sm-12 col-12">
                                        <ul class="search_input">
                                            <li class="">
                                                <div class="table_search">
                                                    <input class="search_input" v-model="search" v-on:keyup="handleBlur"
                                                            placeholder="Search">
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-9 col-sm-12 col-12">
                                    </div>
                                </div>
                                <v-data-table :page="page" :pageCount="numberOfPages" :headers="selectedHeaders"
                                    :items="salecustomer" :options.sync="options"
                                    :server-items-length="totalsalecustomer" :loading="loading" class="elevation-1"
                                    must-sort @update:sort-by="updateSort('by', $event)"
                                    @update:sort-desc="updateSort('desc', $event)" item-key="table_header_index"
                                    ref="table">
                                    <template v-slot:item.name="{ item }">
                                        <td><router-link :to="`${item.url}`">{{ item.ledgerGroupName }}</router-link></td>
                                    </template>
                                    <template v-slot:item.totalAmount="{ item }">
                                        <td>
                                            <p><span class="font_sans">{{symbol}}</span> {{ item.amount | formatNumberSales }}
                                            </p>
                                        </td>
                                    </template>
                                   
                                    <template v-slot:item.action="{ item }">
                                        <td>
                                            <p class="pdf_a_download"><img src="/assets/images/1.0/svgs/pdf_download.svg"
                                                    class="img-fluid" /> PDF</p>
                                        </td>
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

Vue.filter("formatNumberSales", function (value) {
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
            dropdownall: '',
            dateRange: { startDate, endDate },
            options_data: ['Ledger Group', 'Voucher Type', 'Stock Item', 'Month', 'Bill'],
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
                { text: 'Ledger Name', value: 'name', align: 'left', sortable: true },
                { text: 'Amount', value: 'totalAmount' },
                { text: 'Download', value: 'action' }
            ],
            page: 1,
            totalsalecustomer: 0,
            numberOfPages: 0,
            salecustomer: [],
            value: [],
            selectedHeaders: [],
            selected_stock_item_headers: [],
            selected_bill_headers: [],
            loading: true,
            options: {},
            symbol: '',
            search: '',
            switch_type : 'Gross',
            groupSelectValue : 'Stock Group',
            totalAmount : 0,
            totalAmount1 : 0,
            inputDisabled : false,
            group_name : '',
            vouchersType : ''

        }
    },
    watch: {
        value(val) {
            this.selectedHeaders = val;
            this.selected_stock_item_headers = val;
            this.selected_bill_headers = val;
        },
        options: {
            handler() {
                this.sale_data();
            },
        },
        deep: true,
    },
    created() {
        this.selectedHeaders = this.headers;
        this.selected_stock_item_headers = this.stock_item_headers;
        this.selected_bill_headers = this.bill_headers;
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
            localStorage.setItem("date_range_start_date", new_date_start_date);
            localStorage.setItem("date_range_end_date", new_date_end_date);
            this.getpartyDetails();

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
            localStorage.setItem("date_range_start_date", new_date_start_date);
            localStorage.setItem("date_range_end_date", new_date_end_date);
            this.getpartyDetails();

        },
        sale_data(type,group_name="Stock Group",switch_type ="Gross") {
            this.symbol = localStorage.getItem('symbol');
            var self = this;
            this.loading = true;
            if (type === "search") {
                this.options.page = 1;
            }

            if(this.$route.params.v_type === "Sales"){
                this.vouchersType = ["Sales","Credit Note"];
            }else if(this.$route.params.v_type === "Purchase"){
                this.vouchersType = ["Purchase","Debit Note"];
            }else if(this.$route.params.v_type === "Sales Order"){
                this.vouchersType = ["Sales Order"];
            }else if(this.$route.params.v_type === "Purchase Order"){
                this.vouchersType = ["Purchase Order"];
            }else if(this.$route.params.v_type === "Receipt"){
                this.vouchersType = "Receipt";
            }else if(this.$route.params.v_type === "Payment"){
                this.vouchersType = ["Payment"];
            }else{
                this.vouchersType = ["Sales","Credit Note"];
            }

            if(group_name === "Stock Group"){
                this.inputDisabled = false;
                const { page, itemsPerPage } = this.options;
                let pageNumber = page - 1;
                const data = {
                    _userId: localStorage.getItem("customerId"),
                    company_id: localStorage.getItem("companyId"),
                    startDate: moment(String(this.$refs.picker.start)).format('yyyy-MM-DD'),
                    endDate: moment(String(this.$refs.picker.end)).format('yyyy-MM-DD'),
                    VoucherType : this.vouchersType,
                    searchTerm: this.search,
                    groupByAmount : switch_type,
                    startLimit: pageNumber * itemsPerPage,
                    endLimit: itemsPerPage,
                    requestFrom: "WEB",
                    ledgerGroupGuid : this.$route.params.guid
                };
                const headers = {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    token: localStorage.getItem("webAuthToken"),
                };

                Api.getVouchersSummaryByLedgerGroupListGo(data, headers)
                .then((response) => {
                    if (response.data.message == "AUTHENTICATION_FAILED") {
                        localStorage.clear();
                        window.location.href = "/";
                    } else {
                        if(response.data.status != "0"){
                            for (let [key, value] of Object.entries(response.data.data.list)) {
                                if(response.data.data.list[key].stockGroupChild == false){
                                    response.data.data.list[key].url = '/stock-group-item/'+response.data.data.list[key].stockGroupGuid + '/'+btoa(response.data.data.list[key].name)+'/'+this.$route.params.v_type;
                                }else{
                                    response.data.data.list[key].url = '/stock-group/'+response.data.data.list[key].ledgerGroupGuid + '/'+btoa(response.data.data.list[key].name)+'/'+this.$route.params.v_type;
                                }
                                
                                response.data.data.list[key].totalAmount = Math.abs(response.data.data.list[key].totalAmount);
                            }
                            let totalPages = Math.ceil(
                                response.data.data.totalCount / itemsPerPage
                            );

                            this.totalAmount = Math.abs(response.data.data.voucherTotalAmount);
                            this.totalAmount1 = Math.abs(response.data.data.returnNote);


                            this.loading = false;
                            this.salecustomer = response.data.data.list;
                            this.totalsalecustomer = response.data.data.totalCount;
                            this.numberOfPages = totalPages;
                        }else{
                            this.loading = false;
                            this.salecustomer = [];
                            this.totalsalecustomer = 0;
                            this.numberOfPages = 0;
                            this.totalAmount = 0;
                            this.totalAmount1 = 0;
                        }
                    }
                })

                .catch((err) => {
                    // alert("ERROR");
                    Common.getStatusForActionFailed(err.response.status);
                    this.loading = false;
                });
            }
        },
        format_date(value) {
            if (value) {
                return moment(String(value)).format('DD MMM yyyy')
            }
        },
        groupSelect(event){
            this.sale_data("",event.target.value,this.switch_type);
        },
        switch_change(event){
            this.sale_data("","Stock Group",event.target.value);
        },
        handleBlur() {
            const type = "search";
            GoogleAnalytics.items_listing_group_screen_search(this.search);
            this.sale_data(type,"Stock Group",this.switch_type);
        },
        updateSort(byDesc, event) {
            if (byDesc == 'by') {
                this.sortBy = event;
                this.orderBy = "-1";
            } else if (byDesc == 'desc') {
                if (event == true) {
                    this.orderBy = "1";
                } else {
                    this.orderBy = "-1";
                }
            }
            GoogleAnalytics.items_listing_group_screen_sorting(this.sortBy,this.orderBy);
            console.log(this.sortBy);
            console.log(this.orderBy);
        },
    },
    mounted() { 
        this.group_name = atob(this.$route.params.group_name);
    },
};
</script>