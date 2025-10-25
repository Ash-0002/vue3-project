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
        <img src="/assets/images/1.0/brand/Loader-GIF-Final.gif" class="img-fluid loader_css" height="40" width="40" />
      </div>
    </div>
   
    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-3 col-lg-12 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0">
            <div class="company_balance sales_cb new_title_sales_cb">
              <div class="left_arrow_sold">
                <a @click="$router.go(-1)"><i class="fa fa-chevron-left"></i></a>
              </div>
              <div class="company_name sales_c_name padding_left_30">
                <h3>{{ this.$route.params.ledger_name }}</h3>
                <div class="company_balance sales_cb">
                  <p>
                    Total:
                    <strong><span class="font_sans">{{ symbol }}</span>
                      {{ this.grandTotal | formatNumberParties }}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-12 col-12">
          <ul class="new_set_dropdown_with_gross">
            <li class="marginright25">
              <p class="heading_dropdown_gross-all">Due Filter</p>
              <ul class="sortby_filter only_filter_icon">
                <li
                  v-for="(filter, key) in getFiltersForOutstandings"
                  @click="activatedue(filter.value)"
                  :class="{ active: getFiltersDatahidden == `${filter.name}` }"
                  v-if="key < '3'"
                >
                  {{ filter.name }}
                </li>

                <li @click="showdue" class="">
                  <p class="more_filter_text filter_relative">
                    More <i class="fa fa-chevron-down"></i>
                    <span v-if="dotshowdue" class="filter_dot"></span>
                  </p>
                </li>

                <div
                  v-if="showOutside"
                  v-click-outside="closeEventdue"
                  class="without_inline_filter"
                >
                  <ul class="dropdown_li_active">
                    <li
                      v-for="(filter, key) in getFiltersForOutstandings"
                      @click="activatedue(filter.value)"
                      v-click-outside="closeEventdue"
                      :class="{ active: active_due == `${filter.name}` }"
                      v-if="key >= '3'"
                    >
                      {{ filter.name }}
                    </li>
                  </ul>
                </div>
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
                <div class="row align-items-center">
                  <div class="col-lg-3 col-12">
                    <ul class="search_input new_left_search_part">
                      <li class="">
                        <div class="table_search">
                          <input v-model="search" v-on:keyup="handleBlur" placeholder="Search" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-9 col-sm-12 col-12">
                    <ul class="dashboard_sales_dropdown new_search_export_button">
                      <li style="cursor: pointer;" @click="handleOnAccount"><span>                    
                        <strong>On Account:</strong> 
                        
                        <span class="font_sans">{{ symbol }}</span>
                        
                        {{ this.onAccountData }}               
                          </span></li>

                      <li class="rigntmarginli">
                        <v-select v-model="value" :items="headers" label="Set Columns" multiple return-object>
                          <template v-slot:selection="{ item, index }">
                            <v-chip v-if="index === 0">
                              <span></span>
                            </v-chip>
                          </template>
                        </v-select>
                      </li>
                     
                      <li v-if="isPaid == '' || isPaid == null" v-b-modal.customerstatus-popup>
                        <button type="button" @click="freeusergeneratePdf()" class="btn download_border_btn">
                          <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid" />View Pdf<img
                            class="pdf_button_crown" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
                        </button>
                      </li>
                      <li v-else>
                        <button type="button" @click="generatePdf()"
                          class="btn download_border_btn without_crown_button_design">
                          <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid" />View Pdf
                        </button>
                      </li>
                    </ul>
                  </div>
                
                </div>

               

                <div v-if="receivable_list" class="show_entries_for_table new_show_entries_for_table">
                  <v-data-table :page="page" :pageCount="numberOfPages" :headers="selectedHeaders" :items="ledger"
                    :options.sync="options" dense :items-per-page="10" :server-items-length="totalledger"
                    :loading="loading" class="elevation-1" must-sort :sort-by="null" :sort-desc="false"
                    @update:sort-by="updateSort('by', $event)" @update:sort-desc="updateSort('desc', $event)"
                    item-key="table_header_index" ref="table" :hide-default-footer="true" :footer-props="{
      'items-per-page-options': [10, 25, 50, 100],
      'items-per-page-text': 'products per page',
    }">
                    <template v-slot:top="{ pagination, options, updateOptions }">
                      <v-data-footer :pagination="pagination" :options="options"
                        :items-per-page-options="[10, 25, 50, 100]" @update:options="updateOptions"
                        items-per-page-text="$vuetify.dataTable.itemsPerPageText" />
                    </template>
                    <template v-slot:item.voucherDetails.voucherNumber="{ item }">
                      <td>
                        <div v-if="isPaid == '' || isPaid == null">
                          <b-button
                            class="vch_num_all_btn"
                            v-b-modal.customerstatus-popup
                            >{{ item.voucherNumber }}</b-button
                          >
                       
                        </div>
                        <div v-else>
                         
                          <router-link
                            class="onclick_details"
                            :to="`${item.url}`"
                            >{{ item.voucherNumber }}</router-link
                          >
                        </div>
                      </td>
                    </template>
                    <template v-slot:item.bills.billDate="{ item }">
                      <td>
                        <p>{{ formatLastSoldDate(item.billDate) }}</p>
                      </td>
                    </template>
                    <template v-slot:item.daysDifference="{ item }">
                      <td align="center">
                        <p v-if="item.daysDifference == -1">Due in {{ Math.abs(item.daysDifference) }} day</p>
                        <p v-else-if="item.daysDifference < 0">Due in {{ Math.abs(item.daysDifference) }} days</p>
                        <p v-else-if="item.daysDifference == 0">Due Today</p>
                        <p v-else>{{ item.daysDifference }}</p>
                      </td>
                    </template>
                    <template v-slot:item.bills.billDue="{ item }">
                      <td>
                        <p>{{ formatLastSoldDate(item.billDue) }}</p>
                      </td>
                    </template>
                    <template v-slot:item.bills.billClAmount="{ item }">
                      <td align="right">
                        <p>
                          <span class="font_sans">{{ symbol }}</span>
                          {{ Math.abs(item.closingBalance) | formatNumberParties }}
                          <span v-if = "item.closingBalance < 0">Dr</span>
                          <span v-else-if="item.closingBalance > 0">Cr</span>
                          <span v-else></span>
                        </p>
                      </td>
                    </template>
                 
                  </v-data-table>
                </div>
                <div v-if="receivable_account" class="show_entries_for_table new_show_entries_for_table">
                  <v-data-table :items="receivable_account_array" :loading="loading" class="elevation-1" ref="table"
                    :hide-default-footer="true">
                    <template v-slot:receivable_account_array="{ item }"></template>
                  </v-data-table>
                </div>
                <template>
                  <div class="bottom_navigation-pagination">
                    <v-pagination v-model="page" :length="numberOfPages" :total-visible="5"></v-pagination>
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
 

  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(
    value
  );
});

import moment from "moment";
import Api from "@/Api";
import Common from "@/Common";
import GoogleAnalytics from "@/GoogleAnalytics";
import DateRangePicker from "vue2-daterange-picker";


import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  name: "daybook",
  components: { DateRangePicker },
  data() {
    let startDate = moment(
      String(localStorage.getItem("date_range_start_date"))
    );
    let endDate = moment(String(localStorage.getItem("date_range_end_date")));
    return {
      startDate: startDate,
      endDate: endDate,
      dropdownall: "",
      options: ["All", "Due Today", "Not Due", ">0", ">7", ">15", ">30", ">60"],
      dateRange: { startDate, endDate },
      defaultRanges: {
      
        Today: [new Date(), new Date()],
        Yesterday: [
          new Date(Date.now() - 3600 * 1000 * 24),
          new Date(Date.now() - 3600 * 1000 * 24),
        ],
        "This Week": [new Date(Date.now() - 7 * 24 * 3600 * 1000), new Date()],
        "This Month": [
          new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
        ],
        "Last Month": [
          new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
          new Date(new Date().getFullYear(), new Date().getMonth(), 0),
        ],
       
        "This Year": [
          new Date(String(localStorage.getItem("first_date_range_start_date"))),
          new Date(String(localStorage.getItem("first_date_range_end_date"))),
        ],
        "Last Year": [
          new Date(
            moment(
              String(localStorage.getItem("first_date_range_start_date"))
            ).add(-1, "year")
          ),
          new Date(
            moment(
              String(localStorage.getItem("first_date_range_end_date"))
            ).add(-1, "year")
          ),
        ],
      },
      headers: [
        {
          text: "Voucher No",
          value: "voucherDetails.voucherNumber",
          align: "left",
          sortable: false,
        },
        { text: "Date", value: "bills.billDate" },
        { text: "Due Days", value: "daysDifference",align: 'center' },
        { text: "Due Date", value: "bills.billDue" },
        { text: "Amount", value: "bills.billClAmount", align: "right" },
       
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
      symbol: "",
      search: "",
      sortBy: "voucherNumber",
      orderBy: 1,
      getFiltersData: "All",
      getFiltersDatahidden: "All",
      getFiltersForOutstandings: [],
      rangeValue: 0,
      grandTotal: 0,
      onAccountDetailskey: "",
      onAccountDetailsamount: 0,
      isPaid: "",
      active_date: "oney",
      active_due: "All",
      showInside: false,
      showOutside: false,
      receivable_list: 1,
      receivable_account: 0,
      receivable_account_array: [],
      filter_array: [],
      onAccountData: 0
    };
  },
  watch: {
    page: function () {
      this.options.page = this.page;
      this.getFilters();
      this.ledger_data();
    },

    "options.itemsPerPage"() {
     
      this.page = 1
      this.options.page = 1;
      this.getFilters();
      this.ledger_data();
    
    },
    value(val) {
      this.selectedHeaders = val;
     
    },
    options: {
      handler() {
       
        GoogleAnalytics.receivables_ledgers_listing();
      },
    },
    deep: true,
  },
  created() {
    this.selectedHeaders = this.headers;
  },
  methods: {
    handleOnAccount(){
      this.$router.push({ path: `/receivables/ledger/onAccount/${this.$route.params.ledgerGuid}` });
    },
    freeusergeneratePdf() {
      
    },
    formatLastSoldDate(lastSold) {
      lastSold = lastSold.split(" ")[0];
      if (lastSold) {
        if (lastSold == "1900-01-01") {
          lastSold = "-"
          return lastSold
        }
        else {

          return moment(lastSold, "YYYY-MM-DD HH:mm:ss").format("DD MMM YY");
        }
      }
    },
    generatePdf() {
     
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        filterBy: this.getFiltersDatahidden,
        ledgerGuid : this.$route.params.ledgerGuid,
        rangeValue: this.rangeValue,
        sortBy: parseInt(this.sortBy),
        orderBy: parseInt(this.orderBy),
        outstandingType : "Receivables",
        searchTerm: this.search,
        currencySymbol: localStorage.getItem("symbol"),
        isPaid: "0",
        partyLedgerName: this.$route.params.ledger_name,
        voucherTypes: this.$route.params.type,
        startDate: localStorage.getItem("date_range_start_date"),
        endDate: localStorage.getItem("date_range_end_date"),
        requestFrom: "WEB",
        showOnAccount: true,
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgerOutstandingVouchersPDF(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            if (response.data.status == "200") {
              this.pdfUrl = response.data.data.pdf;
              localStorage.setItem("pdfUrl", this.pdfUrl);
              window.open(window.location.origin + "/pdfNew");
            }
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          alert("ERROR");
          this.loading = false;
        });
    },

    activatedate: function (date) {
      if (date === "oned") {
        // one day
        var new_date_start_date = moment(String(new Date())).format(
          "yyyy-MM-DD"
        );
        var new_date_end_date = moment(String(new Date())).format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "onew") {
        // one week
        var new_date_start_date = moment(
          String(new Date(Date.now() - 7 * 24 * 3600 * 1000))
        ).format("yyyy-MM-DD");
        var new_date_end_date = moment(String(new Date())).format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "onem") {
        // one month
        var new_date_start_date = moment(String(new Date()))
          .add(-1, "M")
          .format("yyyy-MM-DD");
        var new_date_end_date = moment(String(new Date())).format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "threem") {
        // 3 month
        var new_date_start_date = moment(String(new Date()))
          .add(-3, "M")
          .format("yyyy-MM-DD");
        var new_date_end_date = moment(String(new Date())).format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "oney") {
        // 1 Year
        var new_date_start_date = moment(
          String(
            new Date(
              String(localStorage.getItem("first_date_range_start_date"))
            )
          )
        ).format("yyyy-MM-DD");
        var new_date_end_date = moment(
          String(
            new Date(String(localStorage.getItem("first_date_range_end_date")))
          )
        ).format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "twoy") {
        // 2 Year
        var new_date_start_date = moment(
          String(
            new Date(
              String(localStorage.getItem("first_date_range_start_date"))
            )
          )
        )
          .add(-1, "years")
          .format("yyyy-MM-DD");
        var new_date_end_date = moment(
          String(
            new Date(String(localStorage.getItem("first_date_range_end_date")))
          )
        ).format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "max") {
        // max date
        var new_date_start_date = moment(
          String(new Date(String(localStorage.getItem("max_startFrom"))))
        ).format("yyyy-MM-DD");
        var new_date_end_date = moment().format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      }
      localStorage.setItem("date_range_start_date", new_date_start_date);
      localStorage.setItem("date_range_end_date", new_date_end_date);
      this.getFilters();
      this.ledger_data();
      localStorage.setItem("active_date", date);
      this.active_date = date;
    },
    activate: function (el) {
      if (
        el === "Sundry Creditors" ||
        el === "Sundry Debtors" ||
        el === "Unsecured Loans"
      ) {
        this.dotshow = 1;
      } else {
        this.dotshow = 0;
      }
      this.active_el = el;
      this.getLedgerGroupsData = el;
      this.ledger_data();
    },
    show() {
      this.showInside = true;
    },
    hide() {
      this.showInside = false;
    },
    closeEvent() {
      this.hide();
    },
    activatedue: function (due) {
      // if (due.substring(0, 1) == '>') {
      if (isNaN(parseInt(due.charAt(0), 10)) == false) {
        this.dotshowdue = 1;
        this.getFiltersDatahidden = "Range";
        this.rangeValue = due;
      } else {
        this.dotshowdue = 0;
        this.getFiltersDatahidden = due;
        this.rangeValue = "0";
      }
      this.active_due = due;

      this.ledger_data();
    },
    showdue() {
      this.showOutside = true;
    },
    close() {
      this.showOutside = false;
    },
    closeEventdue() {
      this.close();
    },

    date_setting() {
      var check_start_date_mounted = moment(
        String(localStorage.getItem("date_range_start_date"))
      );
      var check_end_date_mounted = moment(
        String(localStorage.getItem("date_range_end_date"))
      );
      var days_mounted =
        check_end_date_mounted.diff(check_start_date_mounted, "days") + 1;

      // max date code
      var max_startFrom = moment(String(localStorage.getItem("max_startFrom")));
      var max_endFrom = moment();
      var max_days = max_endFrom.diff(max_startFrom, "days") + 1;

    
      if (days_mounted == "730") {
        this.active_date = "twoy";
      } else if (days_mounted == "365" || days_mounted == "366") {
        this.active_date = "oney";
      } else if (
        days_mounted == "90" ||
        days_mounted == "87" ||
        days_mounted == "88" ||
        days_mounted == "89" ||
        days_mounted == "90" ||
        days_mounted == "91" ||
        days_mounted == "92"
      ) {
        this.active_date = "threem";
      } else if (
        days_mounted == "31" ||
        days_mounted == "28" ||
        days_mounted == "29" ||
        days_mounted == "30"
      ) {
        this.active_date = "onem";
      } else if (days_mounted == "8") {
        this.active_date = "onew";
      } else if (days_mounted == "1") {
        this.active_date = "oned";
      } else if (days_mounted == max_days) {
        this.active_date = "max";
      } else {
        this.active_date = "oney";
      }
    },
    update() {
      localStorage.setItem(
        "date_range_start_date",
        moment(String(this.$refs.picker.start)).format("yyyy-MM-DD")
      );
      localStorage.setItem(
        "date_range_end_date",
        moment(String(this.$refs.picker.end)).format("yyyy-MM-DD")
      );
      GoogleAnalytics.receivables_ledger_screen_datepicker(
        moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        moment(String(this.$refs.picker.end)).format("yyyy-MM-DD")
      );
      this.getFilters();
      this.ledger_data();
      this.date_setting();
    },
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
      localStorage.setItem("date_range_start_date", new_date_start_date);
      localStorage.setItem("date_range_end_date", new_date_end_date);
      GoogleAnalytics.receivables_screen_datepicker(
        moment(String(new_date_start_date)).format("yyyy-MM-DD"),
        moment(String(new_date_end_date)).format("yyyy-MM-DD")
      );
      this.getFilters();
      this.ledger_data();
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
      } else if (days === 2) {
        // yesterdays
        var new_date_start_date = moment(check_start_date).add(2, "days");
        var new_date_end_date = moment(check_end_date).add(2, "days");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
      } else if (days == 8) {
        // week
        var new_date_start_date = moment(check_start_date).add(8, "days");
        var new_date_end_date = moment(check_end_date).add(8, "days");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
      } else if ((days > 28 && days <= 31) || days === 28) {
        // month
        var futureMonth = moment(check_start_date).add(1, "M");
        var new_date_start_date = moment(futureMonth).startOf("month");
        var new_date_end_date = moment(futureMonth).endOf("month");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
      } else if (days > 360 && days <= 366) {
        // Year
        var new_date_start_date = moment(check_start_date).add(1, "years");
        var new_date_end_date = moment(check_end_date).add(1, "years");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
      } else {
        // Custom Days
        var new_date_start_date = moment(check_start_date).add(days, "days");
        var new_date_end_date = moment(check_end_date).add(days, "days");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
      }
      localStorage.setItem("date_range_start_date", new_date_start_date);
      localStorage.setItem("date_range_end_date", new_date_end_date);
      GoogleAnalytics.receivables_screen_datepicker(
        moment(String(new_date_start_date)).format("yyyy-MM-DD"),
        moment(String(new_date_end_date)).format("yyyy-MM-DD")
      );
      this.getFilters();
      this.ledger_data();
    },
    getFilters() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        requestFrom: "WEB",
        isCustomFilter : true
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getCustomDueFilters_v1(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            this.getFiltersForOutstandings = [];
            for (let [key, value] of Object.entries(
                response.data.data
              )) {
                this.getFiltersForOutstandings.push(value);
              }
          
          }
        })

        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },

    getfilterDataLedger() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
       
        company_id: localStorage.getItem("companyId")
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getFiltersForOutstandingsGo(data, headers)
      
        .then((response) => {
         
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == '200') {
            
            this.filter_array = ["All", "Due Today", "Not Due"];
         
            for (let [key, value] of Object.entries(response.data.data)) {
                if (response.data.data[key].isRange == 1) {
                if (value.name != "0") {
                  this.filter_array.push(value.name)
                }
              }
            }
          
          
        } 

        })

        .catch((err) => {
        
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },















    ledger_data(type) {
      this.symbol = localStorage.getItem("symbol");
      var self = this;
      this.loading = true;
      this.new_loading = true;
      if (type === "search") {
        this.options.page = 1;
      }

      const { page, itemsPerPage } = this.options;
      let pageNumber = page - 1;
      const data = {
        filterBy: this.getFiltersDatahidden,
        ledgerGuid: this.$route.params.ledgerGuid,
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        searchTerm: this.search,
        startDate: localStorage.getItem("date_range_start_date"),
        endDate: localStorage.getItem("date_range_end_date"),
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        rangeValue: this.rangeValue,
        voucherTypes: this.$route.params.type,
        sortBy: this.sortBy,
        orderBy: parseInt(this.orderBy),
        requestFrom: "WEB",
        partyLedgerName: this.$route.params.ledger_name,
        outstandingType: "Receivables"
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getLedgerOutstandingVouchers_v1(data, headers)
        .then((response) => {
          // if (response.data.message == "AUTHENTICATION_FAILED") {
          //   localStorage.clear();
          //   window.location.href = "/";
          // } 

          // else {
          const responseStatus = Common.getStatusForActionFailed(response.data.status)
          if (responseStatus == "200") {
            // if (response.data.data.list.length === 0) {
            //   this.receivable_list = 0;
            //   this.receivable_account = 1;
            //   this.receivable_account_array = response.data.data.onAccountDetails
            // }else{

            for (let [key, value] of Object.entries(
              response.data.data.list
            )) {
              // response.data.data.list[key].closingBalance = Math.abs(
              //   response.data.data.list[key].closingBalance
              // );
              if (
                response.data.data.list[key].voucherId != "" &&
                response.data.data.list[key].parentType != ""
              ) {
                // response.data.data.list[key].url =
                //   "/parties/details/" + 
                //   response.data.data.list[key].voucherId +
                //   "/" +
                //   response.data.data.list[key].parentType;
                response.data.data.list[key].url =
                  "/receivables-ledgerlist" +  "/" +
                  response.data.data.list[key].ledgerGuid +  "/" + encodeURIComponent(response.data.data.list[key].billRef) + "/" + moment(response.data.data.list[key].billDate).format("YYYY-MM-DD")
              } else {
                response.data.data.list[key].url = "#";
              }
            } 
            

            let totalPages = Math.ceil(
              response.data.data.totalCount / itemsPerPage
            );
            this.loading = false;
            this.new_loading = false;
     
            this.ledger = response.data.data.list;
            this.totalledger = response.data.data.totalCount;
            this.numberOfPages = totalPages;
            this.grandTotal = Math.abs(response.data.data.totalAmount);
            this.onAccountDetailskey =
              response.data.data.onAccount[0].billRef;
            this.onAccountDetailsamount = Math.abs(
              response.data.data.onAccount[0].closingBalance
            );
            this.onAccountData = Math.abs(response.data.data.totalOnAccount)
            // }
          } else {
            this.loading = false;
            this.new_loading = false;
            this.ledger = [];
            this.totalledger = 0;
            this.numberOfPages = 0;
            this.grandTotal = 0;
          }
          // }
        })

        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status)
          this.loading = false;
          this.new_loading = false;
        });
    },
    updateSort(byDesc, event) {
      this.options.page = this.page;
      if (byDesc == "by") {
        this.sortBy = event;
        this.orderBy = '-1'
      } else if (byDesc == "desc") {
        if (event == true) {
          this.orderBy = "1";
        } else {
          this.orderBy = "-1";
        }
      }
      this.getFilters();
      this.ledger_data();
      GoogleAnalytics.receivables_ledger_screen_sorting(
        this.sortBy,
        this.orderBy
      );
   
      // this.readDataFromAPI("",this.sortBy,this.orderBy);
    },
    handleBlur() {
      const type = "search";
      GoogleAnalytics.receivables_ledger_screen_search(this.search);
      this.ledger_data(type);
      this.getFilters();
    },
    filtersSelect(event) {
      const theTarget =
        event.target.options[event.target.options.selectedIndex].dataset;
      this.isRange = theTarget.isrange;
      this.getFiltersData = event.target.value;
      this.getFiltersDatahidden = this.getFiltersData;
      if (this.isRange === "0") {
        // this.getFiltersDatahidden = this.getFiltersData;
        //filler by Add out range not Add
        this.rangeValue = this.isRange
      } else {
        // filter by Range and add range.
        // this.getFiltersDatahidden = "Range";

        this.rangeValue = this.isRange
      }
      GoogleAnalytics.receivables_ledger_screen_filter(this.getFiltersData);
      this.ledger_data();
      this.getFilters();
    },
  },
  mounted() {
    this.sortBy = '';
    this.activatedue(this.$route.params.filter_value);
    // this.rangeValue = this.$route.params.filter_value.replace(">", "");
    this.getfilterDataLedger();
    // this.getFilters();
    // this.ledger_data();
    this.isPaid = localStorage.getItem("isPaid");
    if (
      localStorage.getItem("active_date") === null ||
      localStorage.getItem("active_date") === ""
    ) {
      this.active_date = "oney";
    } else {
      var check_start_date_mounted = moment(
        String(localStorage.getItem("date_range_start_date"))
      );
      var check_end_date_mounted = moment(
        String(localStorage.getItem("date_range_end_date"))
      );
      var days_mounted =
        check_end_date_mounted.diff(check_start_date_mounted, "days") + 1;
      if (days_mounted == "365" || days_mounted == "366") {
        this.active_date = "oney";
      } else {
        this.active_date = localStorage.getItem("active_date");
      }
    }
  },
};
</script>
