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
                <img src="/assets/images/1.0/brand/Loader-GIF-Final.gif" class="img-fluid loader_css" height="40"
                    width="40" />
            </div>
        </div>
        <!--start first card box-->
        <div class="page-header-title-box bg-white-all-pages">
            <div class="row align-items-center">
                <div class="col-xl-3 col-lg-12 col-12">
                    <div class="arrow_left_items">
                <a @click="$router.go(-1)"
                  ><i class="fa fa-chevron-left"></i
                ></a>
              </div>
                            <div class="company_name new_title_company_name sales_c_name mobile_padding_left_0">
                                <h3>{{this.group_name}}</h3>
                            </div>
                </div>
                <div class="col-xl-9 col-lg-12 col-12">
                    <ul class="new_set_dropdown_with_gross">
                        <li class="marginright25">
                             <p class="heading_dropdown_gross-all">View as</p> 
                             <div class="grossnet_section">
                                <div class="switches-container new_design_grossnet">
                                        <input type="radio" :disabled="inputDisabled" id="switchMonthly" @change="switch_change($event)" v-model="switch_type" name="switchPlan" value="Gross"
                                            checked="checked" />
                                        <input type="radio" :disabled="inputDisabled" id="switchYearly" @change="switch_change($event)" v-model="switch_type" name="switchPlan" value="Net" />
                                        <label for="switchMonthly">GR</label>
                                        <label for="switchYearly">NT</label>
                                        <div class="switch-wrapper">
                                            <div class="switch">
                                                <div>GR</div>
                                                <div>NT</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="">
                                <p class="heading_dropdown_gross-all">Date Filter</p> 
                                <ul class="sortby_filter">
                                <li @click="activatedate('oned')" :class="{ active : active_date == 'oned'}">1D</li>
                                <li @click="activatedate('onew')" :class="{ active : active_date == 'onew'}">1W</li>
                                <li @click="activatedate('onem')" :class="{ active : active_date == 'onem'}">1M</li>
                                <li @click="activatedate('threem')" :class="{ active : active_date == 'threem'}">3M</li>
                                <li @click="activatedate('oney')" :class="{ active : active_date == 'oney'}">1Y</li>
                                <li @click="activatedate('twoy')" :class="{ active : active_date == 'twoy'}">2Y</li>
                                <li @click="activatedate('max')" :class="{ active : active_date == 'max'}">Max</li>
                                <!-- <li><i class="fa fa-filter" aria-hidden="true"></i></li> -->
                                    <li class="new_date_filter_sortby"><date-range-picker ref="picker" :auto-submit="true"
                                        :locale-data="{ firstDay: 1, format: 'dS mmmm yyyy', customRangeLabel: 'Custom Range', separator: ' - ' }"
                                        v-model="dateRange" :ranges="defaultRanges" :startDate="startDate"
                                        :endDate="endDate" @update="update()">
                                        <template v-slot:input="picker" style="min-width: 350px;">

                                        </template>
                                    </date-range-picker></li>
                                </ul>
                            </li>
                            </ul>
                </div>
            </div>
        </div>
        <!--end first card box-->
        
        <div class="main_card">
            <div class="card">
                <div class="row">
                    <div class="col-12">
                        <div class="custom_table">
                            <v-app id="inspire">
                                <div class="row">
                                    <div class="col-lg-3 col-sm-12 col-12">
                                        <ul class="search_input new_left_search_part">
                                            <li class="">
                                                <div class="table_search">
                                                    <input class="search_input" v-model="search" v-on:keyup="handleBlur"
                                                            placeholder="Search">
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                </div>
                                <div class="show_entries_for_table new_show_entries_for_table">
                                <v-data-table :page="page" :pageCount="numberOfPages" :headers="selectedHeaders"
                                    :items="salecustomer" :options.sync="options"
                                    :server-items-length="totalsalecustomer" :loading="loading" class="elevation-1"
                                    must-sort @update:sort-by="updateSort('by', $event)"
                                    @update:sort-desc="updateSort('desc', $event)" item-key="table_header_index"
                                    ref="table" :hide-default-footer= "true" :footer-props="{'items-per-page-options':[10,25,50,100],'items-per-page-text':'products per page'}">
                                    <template v-slot:top="{ pagination, options, updateOptions }">
                                            <v-data-footer 
                                            :pagination=pagination 
                                            :options=options
                                            :items-per-page-options=[10,25,50,100]
                                            @update:options="updateOptions"
                                            items-per-page-text="$vuetify.dataTable.itemsPerPageText"/>
                                        </template>
                                    <template v-slot:item.stockGroupName="{ item }">
                                        <td><router-link :to="`${item.url}`" class="onclick_details">{{ item.stockGroupName }}</router-link></td>
                                    </template>
                                    <template v-slot:item.amount="{ item }">
                                        <td align="right">
                                            <p><span class="font_sans">{{symbol}}</span> {{ item.amount | formatNumberSales }}
                                            </p>
                                        </td>
                                    </template>
                                    <template v-slot:item.action="{ item }">
                                        <td align="center">
                                            <p class="pdf_a_download"><img src="/assets/images/1.0/svgs/pdf_download.svg"
                                                    class="img-fluid" /> PDF</p>
                                        </td>
                                    </template>
                                </v-data-table>
                            </div>
                            <template>
                                    <div class="bottom_navigation-pagination">
                                        <v-pagination
                                        v-model="page"
                                        :length=numberOfPages
                                        :total-visible="5"
                                        ></v-pagination>
                                    </div>
                                </template>
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
import moment from 'moment'
import Api from "@/Api";
import GoogleAnalytics from "@/GoogleAnalytics";
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
            active_date: 'oney',
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
                { text: 'Ledger Name', value: 'stockGroupName', align: 'left', sortable: true },
                { text: 'Amount', value: 'amount', align: 'right' },
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
            new_loading: true,
            options: {},
            symbol: '',
            search: '',
            sortBy: '',
            orderBy: '',
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
        activatedate:function(date){
        if(date === "oned"){
            // one day
            var new_date_start_date = moment(String(new Date())).format('yyyy-MM-DD');
            var new_date_end_date = moment(String(new Date())).format('yyyy-MM-DD');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
            this.$refs.picker.end = new_date_end_date;
        }else if(date === "onew"){
            // one week
            var new_date_start_date = moment(String(new Date(Date.now() - 7 * 24 * 3600 * 1000))).format('yyyy-MM-DD');
            var new_date_end_date = moment(String(new Date())).format('yyyy-MM-DD');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
            this.$refs.picker.end = new_date_end_date;
        }else if(date === "onem"){
            // one month
            var new_date_start_date = moment(String(new Date())).add( -1, 'M').format('yyyy-MM-DD');
            var new_date_end_date = moment(String(new Date())).format('yyyy-MM-DD');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
            this.$refs.picker.end = new_date_end_date;
        }else if(date === "threem"){
            // 3 month 
            var new_date_start_date = moment(String(new Date())).add( -3, 'M').format('yyyy-MM-DD');
            var new_date_end_date = moment(String(new Date())).format('yyyy-MM-DD');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
            this.$refs.picker.end = new_date_end_date;
        }else if(date === "oney"){
            // 1 Year
            var new_date_start_date = moment(String(new Date(String(localStorage.getItem('first_date_range_start_date'))))).format('yyyy-MM-DD');
            var new_date_end_date = moment(String(new Date(String(localStorage.getItem('first_date_range_end_date'))))).format('yyyy-MM-DD');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
            this.$refs.picker.end = new_date_end_date;

        }else if(date === "twoy"){
            // 2 Year
            var new_date_start_date = moment(String(new Date(String(localStorage.getItem('first_date_range_start_date'))))).add(-1, 'years').format('yyyy-MM-DD');
            var new_date_end_date = moment(String(new Date(String(localStorage.getItem('first_date_range_end_date'))))).format('yyyy-MM-DD');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
            this.$refs.picker.end = new_date_end_date;
        }else if(date === "max"){
                // max date
                var new_date_start_date = moment(String(new Date(String(localStorage.getItem('max_startFrom'))))).format('yyyy-MM-DD');
                var new_date_end_date = moment().format('yyyy-MM-DD');
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            }
        localStorage.setItem("date_range_start_date", new_date_start_date);
        localStorage.setItem("date_range_end_date", new_date_end_date);
        this.sale_data("",this.groupSelectValue,this.switch_type);
        localStorage.setItem("active_date", date);
        this.active_date = date;
    },
        update() {
          localStorage.setItem("date_range_start_date", moment(String(this.$refs.picker.start)).format('yyyy-MM-DD'));
          localStorage.setItem("date_range_end_date", moment(String(this.$refs.picker.end)).format('yyyy-MM-DD'));
          GoogleAnalytics.stock_group_screen_datepicker(moment(String(this.$refs.picker.start)).format('yyyy-MM-DD'),moment(String(this.$refs.picker.end)).format('yyyy-MM-DD'));
        this.sale_data("",this.groupSelectValue,this.switch_type);
        this.date_setting();
    },
    date_setting(){
            var check_start_date_mounted = moment(String(localStorage.getItem('date_range_start_date')));
            var check_end_date_mounted = moment(String(localStorage.getItem('date_range_end_date')));
            var days_mounted = check_end_date_mounted.diff(check_start_date_mounted, 'days') + 1;
            if(days_mounted == "730"){
                this.active_date = "twoy";
            }else if(days_mounted == "365" || days_mounted == "366"){
                this.active_date = "oney";
            }else if(days_mounted == "90" || days_mounted == "87" || days_mounted == "88" || days_mounted == "89" || days_mounted == "90" || days_mounted == "91" || days_mounted == "92"){
                this.active_date = "threem";
            }else if(days_mounted == "31" || days_mounted == "28" || days_mounted == "29" || days_mounted == "30"){
                this.active_date = "onem";
            }else if(days_mounted == "8"){
                this.active_date = "onew";
            }else if(days_mounted == "1"){
                this.active_date = "oned";
            }else if(days_mounted == max_days){
                    this.active_date = "max";
            }else{
                this.active_date = "oney";
            }
            localStorage.setItem("active_date", this.active_date);
        },
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
            GoogleAnalytics.stock_group_screen_datepicker(moment(String(new_date_start_date)).format('yyyy-MM-DD'),moment(String(new_date_end_date)).format('yyyy-MM-DD'));
            this.sale_data("",this.groupSelectValue,this.switch_type);
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
            localStorage.setItem("date_range_start_date", new_date_start_date);
            localStorage.setItem("date_range_end_date", new_date_end_date);
            GoogleAnalytics.stock_group_screen_datepicker(moment(String(new_date_start_date)).format('yyyy-MM-DD'),moment(String(new_date_end_date)).format('yyyy-MM-DD'));
            this.sale_data("",this.groupSelectValue,this.switch_type);
        },
        sale_data(type,group_name="Stock Group",switch_type ="Gross") {
            this.symbol = localStorage.getItem('symbol');
            var self = this;
            this.loading = true;
            this.new_loading = true;
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
                this.vouchersType = ["Receipt"];
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
                    voucherType : "Sales",
                    searchTerm: this.search,
                    groupByAmount : switch_type,
                    startLimit: pageNumber * itemsPerPage,
                    endLimit: itemsPerPage,
                    sortBy: this.sortBy,
                    orderBy: parseInt(this.orderBy),
                    requestFrom: "WEB",
                };
                const headers = {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    token: localStorage.getItem("webAuthToken"),
                };

                Api.getVouchersSummaryByStockItemGroupListGo(data, headers)
                .then((response) => {
                    if (response.data.message == "AUTHENTICATION_FAILED") {
                        localStorage.clear();
                        window.location.href = "/";
                    } else {
                        if(response.data.status != "0"){
                            for (let [key, value] of Object.entries(response.data.data.list)) {
                                if(response.data.data.list[key].stockGroupChild == false){
                                    response.data.data.list[key].url = '/stock-group-item/'+response.data.data.list[key].stockGroupGuid + '/'+btoa(response.data.data.list[key].stockGroupName)+'/'+this.$route.params.v_type;
                                }else{
                                    response.data.data.list[key].url = '/stock-group/'+response.data.data.list[key].stockGroupGuid + '/'+btoa(response.data.data.list[key].stockGroupName)+'/'+this.$route.params.v_type;
                                }
                                
                                response.data.data.list[key].amount = Math.abs(response.data.data.list[key].amount);
                            }
                            let totalPages = Math.ceil(
                                response.data.data.totalCount / itemsPerPage
                            );

                            this.totalAmount = Math.abs(response.data.data.totalAmount);
                            this.totalAmount1 = Math.abs(response.data.data.returnNote);


                            this.loading = false;
                            this.new_loading = false;
                            this.salecustomer = response.data.data.list;
                            this.totalsalecustomer = response.data.data.totalCount;
                            this.numberOfPages = totalPages;
                        }else{
                            this.loading = false;
                            this.new_loading = false;
                            this.salecustomer = [];
                            this.totalsalecustomer = 0;
                            this.numberOfPages = 0;
                            this.totalAmount = 0;
                            this.totalAmount1 = 0;
                        }
                    }
                })

                .catch((err) => {
                    Common.getStatusForActionFailed(err.response.status);
                    this.loading = false;
                    this.new_loading = false;
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
            GoogleAnalytics.stock_group_screen_filter(event.target.value);
        },
        handleBlur() {
            const type = "search";
            GoogleAnalytics.stock_group_screen_search(this.search);
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
            GoogleAnalytics.stock_group_screen_sorting(this.sortBy,this.orderBy);
           
        },
    },
    mounted() { 
        if(localStorage.getItem('active_date') === null || localStorage.getItem('active_date') === ""){
            this.active_date = 'oney';
        }else{
            var check_start_date_mounted = moment(String(localStorage.getItem('date_range_start_date')));
            var check_end_date_mounted = moment(String(localStorage.getItem('date_range_end_date')));
            var days_mounted = check_end_date_mounted.diff(check_start_date_mounted, 'days') + 1;
            if(days_mounted == "365" || days_mounted == "366"){
                this.active_date = 'oney';
            }else{
                this.active_date = localStorage.getItem('active_date');
            }
        }
        this.group_name = atob(this.$route.params.group_name);
    },
};
</script>