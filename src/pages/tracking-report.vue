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
        <!--start first card box-->
        <div class="page-header-title-box bg-white-all-pages">
            <div class="row align-items-center">
                <div class="col-xl-3 col-lg-12 col-12">
                    <div class="company_name sales_c_name mobile_padding_left_0 company_heading_title">
                        <span class="company_heading_back_button">
                            <BackButton />
                        </span>
                                 <h3>Tracking Report</h3> 
                            </div>
                </div>
                <div class="col-xl-9 col-lg-12 col-12">
                    <ul class="new_set_dropdown_with_gross">
                            
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
                                    <div class="col-lg-3 col-12">
                                        <ul class="search_input new_left_search_part">
                                            <li class="">
                                                <div class="table_search">
                                                    <input class="search_input" v-model="search" v-on:keyup="handleBlur"
                                                            placeholder="Search">
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-9 col-12">
                                        <ul class="new_sales_top_table_part parties_ul_with_filter new_search_export_button">
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
                            
                            <div class="show_entries_for_table new_show_entries_for_table">
                            <v-data-table :page="page" :pageCount="numberOfPages" :headers="selectedHeaders" 
                                        :items="myledgers" :options.sync="options" dense :items-per-page="10"
                                        :server-items-length="totalmyledgers" :loading="loading" class="elevation-1"
                                        must-sort 
                                        :sort-by.sync="sortBy"
                                        @update:sort-by="updateSort('by', $event)"
                                        @update:sort-desc="updateSort('desc', $event)" disable-pagination item-key="table_header_index"
                                        ref="table" :hide-default-footer= "true" :footer-props="{'items-per-page-options':[10,25,50,100],'items-per-page-text':'products per page'}">

                                        <template v-slot:top="{ pagination, options, updateOptions }">
                                            <v-data-footer 
                                            :pagination=pagination 
                                            :options=options
                                            :items-per-page-options=[10,25,50,100]
                                            @update:options="updateOptions"
                                            items-per-page-text="$vuetify.dataTable.itemsPerPageText"/>
                                        </template>

                                    <template v-slot:item.firstName="{ item }">
                                        <td><router-link class="onclick_details parties_inner_a"
                                                    :to="{ name: 'Tracking details', params: { customer_id: item._id } }">
                                                    {{item.name}}
                                                </router-link></td>
                                        
                                    </template>
                                    <template v-slot:item.email="{ item }">
                                        <td><p>{{item.email}}</p></td>
                                    </template>
                                    <template v-slot:item.mobile="{ item }">
                                        <td><p>{{item.countryCode+' '+item.mobile}}</p></td>
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

Vue.filter("formatNumberParties", function (value) {
    return new Intl.NumberFormat('en-IN',{minimumFractionDigits: 2}).format(value);
});

import moment from 'moment'
import Api from "@/Api";
import Common from "@/Common";

import GoogleAnalytics from "@/GoogleAnalytics";
import DateRangePicker from 'vue2-daterange-picker'
import BackButton from "../components/BackButton.vue";
//you need to import the CSS manually
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
export default {
    name: "daybook",
    components: { DateRangePicker, BackButton },
    data() {
        return {
            headers: [
                { text: 'Users', value: 'firstName', sortable: false},
                { text: 'Email', value: 'email', sortable: false  },
                { text: 'Mobile', value: 'mobile', sortable: false },  
            ],
            page: 1,
            totalmyledgers: 0,
            numberOfPages: 0,
            myledgers: [],
            value: [],
            selectedHeaders: [],
            loading: true,
            new_loading: true,
            options: {},  
            search: '',
            sortBy: 'firstName',
            orderBy: '',
            active_date : 'oney',
            call_function : "0"

        }
    },
    watch: {
        
        page: function () {
          this.options.page = this.page;
          this.readDataFromAPI();
          GoogleAnalytics.tracking_reports_screen_pagination(this.options.page);
        },
    
        "options.itemsPerPage"() {
            this.page=1
      this.options.page = 1; 
            this.readDataFromAPI();
    
          if(this.call_function == "1"){
        this.call_function = "1";
        GoogleAnalytics.tracking_reports_screen_Rows_Per_Page(this.options.itemsPerPage);
      }else{
        this.call_function = "1";
      }
        },
    
        options: {
          handler() {
            GoogleAnalytics.tracking_reports_screen_listing();
          },
        },
        deep: true,
      },
    filters: {
        dateCell(value) {
            let dt = new Date(value)

            return dt.getDate()
        },
        date(val) {
            return val ? val.toLocaleString() : ''
        }
    },
    created() {
        this.selectedHeaders = this.headers;
        console.log(this.selectedHeaders);
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
            this.readDataFromAPI();
            localStorage.setItem("active_date", date);
            this.active_date = date;
        },
       
        readDataFromAPI(type = "", sortBy = "", orderBy = "") {
            var self = this;
            this.loading = true;
            this.new_loading = true;
            if (type === "search") {
                this.options.page = 1;
            }
            const { page, itemsPerPage } = this.options;
            console.log("Page Number", page, itemsPerPage);
            let pageNumber = page - 1;
             const data = {
                _userId: localStorage.getItem("customerId"),
                requestFrom: "WEB",
                searchTerm: this.search,
            };
            const headers = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                token: localStorage.getItem("webAuthToken"),
            };
            this.myledgers = [];
            Api.getCompanyAllUsersGo(data, headers)
                .then((response) => {
                    const responseStatus = Common.getStatusForActionFailed(
              response.data.status
            );
            if (responseStatus == "200") {
                let totalPages = Math.ceil(
                    response.data.data.totalCount / itemsPerPage
                    );
                    this.loading = false;
                    this.new_loading = false;
                    this.myledgers = response.data.data.list;
                    this.totalmyledgers = response.data.data.totalCount;
                    this.numberOfPages = totalPages;
                }
                })

                .catch((err) => {
            
            Common.getStatusForActionFailed(err.data.status);

                this.loading = false;
                this.new_loading = false;
                });
        },
        handleBlur() {
            const type = "search";
            GoogleAnalytics.tracking_reports_screen_search(this.search);
            this.readDataFromAPI(type);
        },

        updateSort(byDesc, event) {
            this.options.page = this.page;
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
            this.readDataFromAPI();
            GoogleAnalytics.tracking_reports_screen_sorting(this.sortBy,this.orderBy);
        },
        
        deleteLedger(Ledgerid)
    {
            const data = {
                ledgerId: Ledgerid, 
                 requestFrom: "WEB",
                };
            const headers = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                token: localStorage.getItem("webAuthToken"),
            };

            Api.deleteLedger(data, headers)
            .then((response) => {
               
                if (response.data.message == "AUTHENTICATION_FAILED") {
                    alert(response.data.message);
                    this.readDataFromAPI();                
                } else {
                    this.readDataFromAPI();
                    this.new_loading = false;
                }
                })
                .catch(() => {
                this.loading = false;
                this.new_loading = false;
                });
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
            GoogleAnalytics.tracking_reports_screen_datepicker(moment(String(new_date_start_date)).format('yyyy-MM-DD'),moment(String(new_date_end_date)).format('yyyy-MM-DD'));
            this.readDataFromAPI();

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
            GoogleAnalytics.tracking_reports_screen_datepicker(moment(String(new_date_start_date)).format('yyyy-MM-DD'),moment(String(new_date_end_date)).format('yyyy-MM-DD'));
            this.readDataFromAPI();

        },
        format_date(value) {
            if (value) {
                return moment(String(value)).format('DD MMM yyyy')
            }
        },
        update() {
            localStorage.setItem("date_range_start_date", moment(String(this.$refs.picker.start)).format('yyyy-MM-DD'));
            localStorage.setItem("date_range_end_date", moment(String(this.$refs.picker.end)).format('yyyy-MM-DD'));
            GoogleAnalytics.tracking_reports_screen_datepicker(moment(String(this.$refs.picker.start)).format('yyyy-MM-DD'),moment(String(this.$refs.picker.end)).format('yyyy-MM-DD'));
            this.readDataFromAPI();
            this.date_setting();
        }
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

    },
    
};
</script>