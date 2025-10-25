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
                <div class="col-lg-12 col-12">
                    <div class="title_text">
                        <h4 class="page-title mb-0">Purchase</h4>
                    </div>
                </div>
            </div>

        </div>
        <div class="main_card">
            <div class="card">
                <div class="">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left_arrow_sold"><a @click="$router.go(-1)"><i
                                        class="fa fa-chevron-left"></i></a></div>
                            <div class="company_name sales_c_name padding_left_30">

                                <h3>Abhijit Mart Khanapur</h3>
                                <div class="company_balance sales_cb">
                                    <p>Total Purchase: <br><strong><span class="font_sans">₹</span> 24,493.98</strong></p>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-6">
                            <div class="parties_datefilter_vue">
                                <div class="parties_datefilter_vue">
                                    <span class="datepicker_left_arrow" @click="left_arrow()"><i
                                            class="fa fa-chevron-left"></i></span>
                                    <date-range-picker ref="picker" :auto-submit="true" :locale-data="{
                                      firstDay: 1,
                                      format: 'dd/mm/yyyy',
                                      customRangeLabel: 'Custom Range',
                                      separator: ' - ',
                                    }" v-model="dateRange" :ranges="defaultRanges" :startDate="startDate" :endDate="endDate"
                                        @update="update()">
                                        <template v-slot:input="picker" style="min-width: 350px">
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
                          <input class="search_input" placeholder="Search" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-9 col-sm-12 col-12">
                    <ul class="dashboard_sales_dropdown">
                      <li class="rigntmarginli">
                        <v-select
                          v-model="value"
                          :items="headers"
                          label="Set Columns"
                          multiple
                          return-object
                        >
                          <template v-slot:selection="{ item, index }">
                            <v-chip v-if="index === 0">
                              <span></span>
                            </v-chip>
                          </template>
                        </v-select>
                      </li>
                        <li class="">
                                                <div class="new_top_table_dropdown">
                                                    <select name="" id=""
                                                        class="form-select salesFilter sales_receivables_dropdown commondropdownall"
                                                        v-model="dropdownall">
                                                        <option value="" disabled>select</option>
                                                        <option v-for="opt in options">{{ opt }}</option>
                                                    </select>
                                                </div>

                                            </li>
                      
                    
                    </ul>
                  </div>
                  
                </div>

                <v-data-table
                  :headers="headers"
                  :items="daybook"
                  :total-items="daybook.length"
                  rows-per-page-items="6"
                  hide-action
                  item-key="title"
                >
                  <template v-slot:item.vouchernumber="{ item }">
                    <td>
                      <router-link
                        class="onclick_details"
                        :to="{ name: 'dashboard-purchase-ledger-details' }"
                        >999</router-link
                      >
                    </td>
                  </template>
                  <template v-slot:item.name="{ item }">
                    <td>
                      <p>19 Sep 2022</p>
                    </td>
                  </template>
                  <template v-slot:item.date="{ item }">
                    <td>
                      <p>Payment</p>
                    </td>
                  </template>
                  <template v-slot:item.type="{ item }">
                    <td>
                      <p>Payment</p>
                    </td>
                  </template>
                  <template v-slot:item.amount="{ item }">
                    <td>
                      <p><span class="font_sans">₹</span> 10,543.00</p>
                    </td>
                  </template>
                  <template v-slot:item.download="{ item }">
                    <td>
                      <p class="pdf_a_download">
                        <img
                          src="assets/images/1.0/svgs/pdf_download.svg"
                          class="img-fluid"
                        />
                        PDF
                      </p>
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

Vue.filter("formatNumberParties", function (value) {
    
    return new Intl.NumberFormat('en-IN',{minimumFractionDigits: 2}).format(value);
});

import axios from "axios";
import moment from "moment";
import Api from "@/Api";
import DateRangePicker from "vue2-daterange-picker";

import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
    name: "daybook",
    components: { DateRangePicker },
    data() {
        let startDate = moment(String(localStorage.getItem('date_range_start_date')));
        let endDate = moment(String(localStorage.getItem('date_range_end_date')));
        return {
            startDate: startDate,
            endDate: endDate,
            dropdownall: "",
            options: [
                "Ledger",
                "Ledger Group",
                "Voucher Type",
                "Stoch Item",
                "Month",
                "Bill",
            ],
            dateRange: { startDate, endDate },
            defaultRanges: {
           
                Today: [new Date(), new Date()],
                'Yesterday': [new Date(Date.now() - 3600 * 1000 * 24), new Date(Date.now() - 3600 * 1000 * 24)],
                "This Week": [new Date(Date.now() - 7 * 24 * 3600 * 1000), new Date()],
                "This Month": [
                    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
                ],
                "Last Month": [
                    new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
                    new Date(new Date().getFullYear(), new Date().getMonth(), 0),
                ],
             
                'This Year': [new Date(String(localStorage.getItem('first_date_range_start_date'))), new Date(String(localStorage.getItem('first_date_range_end_date')))],
                'Last Year': [new Date(moment(String(localStorage.getItem('first_date_range_start_date'))).add(-1, 'year')), new Date(moment(String(localStorage.getItem('first_date_range_end_date'))).add(-1, 'year'))],
            },
            headers: [
                {
                    text: "Voucher No",
                    value: "vouchernumber",
                    align: "left",
                    sortable: true,
                },
                { text: "Date", value: "name" },
                { text: "Vch Type", value: "date" },
                { text: "Parent Type", value: "type" },
                { text: "Amount", value: "amount" },
                { text: "Download", value: "download" },
            ],
            daybook: [
                {
                    vouchernumber: "",
                    name: "",
                    date: "",
                    type: "",
                    amount: "",
                    download: "",
                },
                {
                    vouchernumber: "",
                    name: "",
                    date: "",
                    type: "",
                    amount: "",
                    download: "",
                },
                {
                    vouchernumber: "",
                    name: "",
                    date: "",
                    type: "",
                    amount: "",
                    download: "",
                },
                {
                    vouchernumber: "",
                    name: "",
                    date: "",
                    type: "",
                    amount: "",
                    download: "",
                },
                {
                    vouchernumber: "",
                    name: "",
                    date: "",
                    type: "",
                    amount: "",
                    download: "",
                },
            ],
        };
    },
    methods: {
        left_arrow() {
            var check_start_date = moment(String(this.dateRange.startDate));
            var check_end_date = moment(String(this.dateRange.endDate));
            var days = check_end_date.diff(check_start_date, "days") + 1;
            if (days === 1) {
                // today
                var new_date_start_date = moment(check_start_date).add(-1, "days");
                var new_date_end_date = moment(check_end_date).add(-1, "days");
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else if (days === 2) {
                // yesterdays
                var new_date_start_date = moment(check_start_date).add(-2, "days");
                var new_date_end_date = moment(check_end_date).add(-2, "days");
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else if (days == 8) {
                // week
                var new_date_start_date = moment(check_start_date).add(-8, "days");
                var new_date_end_date = moment(check_end_date).add(-8, "days");
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else if ((days > 28 && days <= 31) || days === 28) {
                // month
                var futureMonth = moment(check_start_date).add(-1, "M");
                var new_date_start_date = moment(futureMonth).startOf("month");
                var new_date_end_date = moment(futureMonth).endOf("month");
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else if (days > 360 && days <= 366) {
                // Year
                var new_date_start_date = moment(check_start_date).add(-1, "years");
                var new_date_end_date = moment(check_end_date).add(-1, "years");
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else {
                // Custom Days
                var new_date_start_date = moment(check_start_date).add(
                    "-" + days,
                    "days"
                );
                var new_date_end_date = moment(check_end_date).add("-" + days, "days");
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            }
        },
        right_arrow() {
            var check_start_date = moment(String(this.dateRange.startDate));
            var check_end_date = moment(String(this.dateRange.endDate));
            var days = check_end_date.diff(check_start_date, "days") + 1;
            if (days === 1) {
                // today
                var new_date_start_date = moment(check_start_date).add(1, "days");
                var new_date_end_date = moment(check_end_date).add(1, "days");
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else if (days === 2) {
                // yesterdays
                var new_date_start_date = moment(check_start_date).add(2, "days");
                var new_date_end_date = moment(check_end_date).add(2, "days");
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else if (days == 8) {
                // week
                var new_date_start_date = moment(check_start_date).add(8, "days");
                var new_date_end_date = moment(check_end_date).add(8, "days");
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else if ((days > 28 && days <= 31) || days === 28) {
                // month
                var futureMonth = moment(check_start_date).add(1, "M");
                var new_date_start_date = moment(futureMonth).startOf("month");
                var new_date_end_date = moment(futureMonth).endOf("month");
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else if (days > 360 && days <= 366) {
                // Year
                var new_date_start_date = moment(check_start_date).add(1, "years");
                var new_date_end_date = moment(check_end_date).add(1, "years");
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            } else {
                // Custom Days
                var new_date_start_date = moment(check_start_date).add(days, "days");
                var new_date_end_date = moment(check_end_date).add(days, "days");
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            }
        },
    },
    mounted() { },
};
</script>