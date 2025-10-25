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
        <img
          src="assets/images/1.0/brand/Loader-GIF-Final.gif"
          class="img-fluid loader_css"
          height="40"
          width="40"
        />
      </div>
    </div>
   
    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-3 col-lg-12 col-12">
          <div class="d-flex align-items-center">
            <BackButton/>
            <div>
              <div class="company_name sales_c_name mobile_padding_left_0">
                                   <h3 id="" class="partyName">Top Reports</h3> 
                              </div>
                              <div class="company_balance sales_cb new_title_sales_cb">
              <p>
                Of Total {{ this.text1 }}
                <strong>{{ displayValueSales }}%</strong>
              </p>
              <p>
                Of Total {{ this.text2 }}
                <strong>{{ displayValueItems }}%</strong>
              </p>
            </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-12 col-12">
          <ul class="new_set_dropdown_with_gross">
            <li class="marginright25">
              <p class="heading_dropdown_gross-all">Sort By</p>
              <ul class="sortby_filter only_filter_icon">
                <li
                  @click="activate('Customers')"
                  :class="{ active: active_el == 'Customers' }"
                >
                  Customers
                </li>
                <li
                  @click="activate('Suppliers')"
                  :class="{ active: active_el == 'Suppliers' }"
                >
                  Suppliers
                </li>
                <li @click="show" class="">
                  <p class="more_filter_text filter_relative">
                    More <i class="fa fa-chevron-down"></i>
                    <span v-if="dotshow" class="filter_dot"></span>
                  </p>
                </li>
                <div
                  v-if="showInside"
                  v-click-outside="closeEvent"
                  class="without_inline_filter filter_items_sold_by_vales"
                >
                  <ul class="dropdown_li_active">
                    <li
                      @click="activate('Items Sold By Value')"
                      v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Items Sold By Value' }"
                    >
                      Items Sold By Value
                    </li>
                    <li
                      @click="activate('Items Purchased By Value')"
                      v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Items Purchased By Value' }"
                    >
                      Items Purchased By Value
                    </li>
                     <li
                      @click="activate('Items Sold By Quantity')"
                      v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Items Sold By Quantity' }"
                    >
                      Items Sold By Quantity
                    </li>
                     <li
                      @click="activate('Items Purchased By Quantity')"
                      v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Items Purchased By Quantity' }"
                    >
                      Items Purchased By Quantity
                    </li>
                  </ul>
                </div>
              </ul>
            </li>
            <li>
              <p class="heading_dropdown_gross-all">Date Filter</p>
              <div class="parties_datefilter_vue date_filter_new_flot_none">
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
              </div>
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
                  <div class="col-lg-3 col-12">
                    <ul class="search_input new_left_search_part">
                                        <li class="">
                        <div class="table_search">
                          <input
                            v-model="search"
                            v-on:keyup="handleBlur"
                            placeholder="Search"
                          />
                        </div>
                      </li>
                                        </ul>
                  </div>

                  <div class="col-lg-9 col-12">
                    <ul
                      class="new_sales_top_table_part new_search_export_button"
                    >
                      <li>
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
                      <li v-if="isPaid == '' || isPaid == null" v-b-modal.customerstatus-popup>
                          <button
                          type="button"
                          @click="freeusergeneratePdf()"
                          class="btn download_border_btn"
                          >
                          <img
                              src="/assets/images/1.0/png/pdficon.png"
                              class="img-fluid"
                          />View Pdf<img class="pdf_button_crown" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy"/>
                          </button>
                      </li>
                      <li v-else>
                          <button
                          type="button"
                          @click="generatePdf()"
                          class="btn download_border_btn without_crown_button_design"
                          >
                          <img
                              src="/assets/images/1.0/png/pdficon.png"
                              class="img-fluid"
                          />View Pdf
                          </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="show_entries_for_table new_show_entries_for_table">
                  <v-data-table
                  :server-items-length="totaltopreports"
                    :page="page"
                    :headers="selectedHeaders"
                    :items="topreports"
                    :options.sync="options"
                    dense
                    :items-per-page="10"
                    :loading="loading"
                    class="elevation-1"
                 
                    @update:sort-by="updateSort('by', $event)"
                    @update:sort-desc="updateSort('desc', $event)"
                    disable-pagination
                    item-key="table_header_index"
                    ref="table"
                    hide-default-footer
                    :footer-props="{
                      'items-per-page-options':[10,30,50],
                      'items-per-page-text': 'products per page',
                    }"
                  >
                    <template
                      v-slot:top="{ pagination, options, updateOptions }"
                    >
                      <v-data-footer
                        :pagination="pagination"
                        :options="options"
                        :items-per-page-options=" [10,30,50]"
                        @update:options="updateOptions"
                        items-per-page-text="Top"
                      />
                    </template>

                    <template v-slot:item.name="{ item }">
                      <div v-if="isPaid == '' || isPaid == null">
                        <b-button class="vch_num_all_btn" v-b-modal.customerstatus-popup>{{ item.name }}</b-button>
                      </div>
                      <div v-else>
                        <router-link
                          class="onclick_details parties_inner_a"
                          :to="`${item.url}`"
                          >{{ item.name }}
                        </router-link>
                      </div>
                      
                    </template>
                    <template v-slot:item.qty="{ item }">
                      <td align="center">
                        <p>
                          {{ item.qty | formatNumberParties }}
                          {{ item.unit }}
                        </p>
                      </td>
                    </template>
                    <template v-slot:item.amount="{ item }">
                      <td align="right">
                        <p>
                          <span class="font_sans">{{ symbol }}</span>
                          {{ Math.abs(item.amount) | formatNumberParties }}
                          <span v-if="showCr_Dr">
                            <span
                              v-if="item.amount >= 0"
                              >Cr</span
                            >
                            <span v-else >Dr</span>
                          </span>
                        </p>
                      </td>
                    </template>
                  </v-data-table>
                </div>
                <template>
                  <div class="bottom_navigation-pagination">
                    <v-pagination
                      v-model="page"
                      :length="numberOfPages"
                      :total-visible="0"
                      disabled
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
  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(
    value
  );
});

import axios from "axios";
import moment from "moment";
import Api from "@/Api";
import GoogleAnalytics from "@/GoogleAnalytics";
import DateRangePicker from "vue2-daterange-picker";
import BackButton from "../components/BackButton.vue";
//you need to import the CSS manually
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  name: "daybook",
  components: { DateRangePicker, BackButton },
  data() {
    let startDate = moment(
      String(localStorage.getItem("date_range_start_date"))
    );
    let endDate = moment(String(localStorage.getItem("date_range_end_date")));
    return {
      startDate: startDate,
      endDate: endDate,
      active_el: "Customers",
      active_date: "",
      showCr_Dr:false,
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
        { text: "Name", value: "name", align: "left", sortable: false },
        { text: "Amount", value: "amount", align: "right", sortable: false },
      ],
      page: 1,
      totaltopreports: 0,
      numberOfPages: 0,
      topreports: [],
      value: [],
      selectedHeaders: [],
      loading: true,
      new_loading: true,
      options: {},
      symbol: "",
      sortBy: "amount",
      orderBy: "",
      search: "",
      vouchersType: "Sales",
      CustomerReportBy: "Customers",
      totalAmountsPer: 0,
      totalItemsPer: 0,
      totalCountPer: 0,
      totalSalesPer: 0,
      text1: "",
      text2: "",
      showInside: false,
      dotshow: 0,
      isPaid : "0",
      call_function : "0",
    };
  },
  watch: {
    
    page: function () {
      this.options.page = this.page;
     this.top_report();
     GoogleAnalytics.top_reports_screen_pagination(this.options.page);
    },

    "options.itemsPerPage"() {
      this.page=1
      this.options.page = 1; 
     this.top_report();
      if(this.call_function == "1"){
      this.call_function = "1";
      GoogleAnalytics.top_reports_screen_Rows_Per_Page(this.options.itemsPerPage);
    }else{
      this.call_function = "1";
    }
    },
    value(val) {
      this.selectedHeaders = val;
     
    },
    options: {
      handler() {
       
        GoogleAnalytics.top_reports_listing();
      },
    },
    deep: true,
  },
  created() {
    this.selectedHeaders = this.headers;
    console.log(this.selectedHeaders);
  },
  methods: {
    freeusergeneratePdf(){
      GoogleAnalytics.top_reports_screen_viewpdf("viewpdf");
      
    },
    generatePdf() {
      GoogleAnalytics.top_reports_screen_viewpdf("viewpdf");
      const { page, itemsPerPage } = this.options;
      let pageNumber = page - 1;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        FilterBy: this.CustomerReportBy,
        requestFrom: "WEB",
        startDate: moment(String(this.$refs.picker.start)).format("YYYY-MM-DD"),
        endDate: moment(String(this.$refs.picker.end)).format("YYYY-MM-DD"),
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getPDFForTopReportsGo(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            if (response.data.status == "200") {       
              this.pdfUrl = response.data.data.pdf;
              localStorage.setItem(
                  "pdfUrl",
                  this.pdfUrl
                );
              window.open(window.location.origin + '/pdfNew');
              
            
            }
          
          }
        })
        .catch(() => {
          alert("ERROR");
          this.loading = false;
        });
    },
    activate: function (el) {
    if (el === "Items Sold By Value" || el === "Items Purchased By Value" || el === "Items Sold By Quantity" || el === "Items Purchased By Quantity") {
      this.dotshow = 1;
      this.showCr_Dr = false
    } else {
      this.dotshow = 0;
      this.showCr_Dr = true
    }
    this.manageHeaders(el);
    this.active_el = el;
    this.select_value = el;
    this.finalfilter = el;
    this.selectfilter = el;
    this.CustomerReportBy = el;
  this.top_report();
  GoogleAnalytics.top_reports_screen_filter(el);
  },
  manageHeaders(el) { 
    // alert(el);
    if(el == "Suppliers" || el == "Customers"){
      this.selectedHeaders = [
          { text: "Name", value: "name", align: "left", sortable: false },
          { text: "Amount", value: "amount", align: "right" , sortable: false },
        ]
    }else {
      this.selectedHeaders = [
          { text: "Name", value: "name", align: "left", sortable: false },
          { text: "Quantity", value: "qty", align: "center", sortable: false  },
          { text: "Amount", value: "amount", align: "right", sortable: false  },
        ]
    }
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
      activatedate: function (date) {
      if (date === "oned") {
        // one day
        GoogleAnalytics.top_reports_screen_date_filter("1D");
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
        GoogleAnalytics.top_reports_screen_date_filter("1W");
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
        GoogleAnalytics.top_reports_screen_date_filter("1M");
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
        GoogleAnalytics.top_reports_screen_date_filter("3M");
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
        GoogleAnalytics.top_reports_screen_date_filter("1Y");
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
        GoogleAnalytics.top_reports_screen_date_filter("2Y");
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
      }else if (date === "max") {
        // max date
        GoogleAnalytics.top_reports_screen_date_filter("Max");
        GoogleAnalytics.sales_screen_date_filter("Max");
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
      
      this.top_report();
      localStorage.setItem("active_date", date);
      this.active_date = date;
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
      GoogleAnalytics.top_reports_screen_date_filter("Custom");
      this.date_setting();
      this.top_report();
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
      localStorage.setItem("date_range_start_date", moment(new_date_start_date).format("YYYY-MM-DD"));
      localStorage.setItem("date_range_end_date", moment(new_date_end_date).format("YYYY-MM-DD"));
      
      this.top_report();
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
      localStorage.setItem("date_range_start_date", moment(new_date_start_date).format('YYYY-MM-DD'));
      localStorage.setItem("date_range_end_date", moment(new_date_end_date).format('YYYY-MM-DD'));
      
      this.top_report();
    },
    top_report(type) {
      this.symbol = localStorage.getItem("symbol");
      var self = this;
      this.loading = true;
      this.new_loading = true;
      if (type === "search") {
        this.options.page = 1;
      }
      if (this.CustomerReportBy === "Customers") {
        this.vouchersType = "Sales";
        this.text1 = "Sales";
        this.text2 = "Customers";
      } else if (this.CustomerReportBy === "Suppliers") {
        this.vouchersType = "Purchase";
        this.text1 = "Purchase";
        this.text2 = "Suppliers";
      } else if (this.CustomerReportBy === "Items Sold By Value") {
        this.vouchersType = "Sales";
        this.text1 = "Sales";
        this.text2 = "Items";
      } else if (this.CustomerReportBy === "Items Purchased By Value") {
        this.vouchersType = "Purchase";
        this.text1 = "Purchase";
        this.text2 = "Items";
      } else if (this.CustomerReportBy === "Items Sold By Quantity") {
        this.vouchersType = "Sales";
        this.text1 = "Sales";
        this.text2 = "Items";
      } else if (this.CustomerReportBy === "Items Purchased By Quantity") {
        this.vouchersType = "Purchase";
        this.text1 = "Purchase";
        this.text2 = "Items";
      }
      const { page, itemsPerPage } = this.options;
      let pageNumber = page - 1;
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        endDate: moment(String(this.$refs.picker.end)).format("yyyy-MM-DD"),
        voucherTypes: [this.vouchersType],
        searchTerm: this.search,
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        orderBy: parseInt(this.orderBy),
        sortBy: this.sortBy,
        requestFrom: "WEB",
        filterBy: this.CustomerReportBy,
       
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getTopReportsGo(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            if (response.data.status == "200") {
              for (let [key, value] of Object.entries(
                response.data.data.list
              )) {
                response.data.data.list[key].amount =response.data.data.list[key].amount
                if (
                  this.CustomerReportBy === "Suppliers" ||
                  this.CustomerReportBy === "Customers"
                ) {
                  response.data.data.list[key].url =
                    "/parties/" + response.data.data.list[key]._id;
                } else {
                  response.data.data.list[key].url =
                    "/items/" + response.data.data.list[key]._id;
                }
              }

              
              let totalPages = Math.ceil(
                response.data.data.listCount / itemsPerPage
              );
              this.loading = false;
              this.new_loading = false;
              this.topreports = response.data.data.list;
              this.totaltopreports = response.data.data.listCount;
              this.numberOfPages = totalPages;
              this.totalAmountsPer = Math.abs(response.data.data.totalAmountPer);
              this.totalItemsPer = Math.abs(response.data.data.totalCountsPer)
              this.totalCountPer = response.data.data.totalCountsPer;
              this.totalSalesPer = response.data.data.totalAmountPer
            } else {
              this.loading = false;
              this.new_loading = false;
              this.topreports = [];
              this.totaltopreports = 0;
              this.numberOfPages = 0;
              this.totalAmountsPer = 0;
              this.totalCountPer = 0;
            }
          }
        })

        .catch(() => {
          this.loading = false;
          this.new_loading = false;
        });
    },
    handleBlur() {
      const type = "search";
      GoogleAnalytics.top_reports_screen_search(this.search);
      this.top_report(type);
    },
   
    updateSort(byDesc, event) {
      this.options.page = this.page;
      if (byDesc == "by") {
        this.sortBy = event;
        this.orderBy = "-1";
      } else if (byDesc == "desc") {
        if (event == true) {
          this.orderBy = "1";
        } else {
          this.orderBy = "-1";
        }
      }
      this.top_report();
      GoogleAnalytics.top_reports_screen_sorting(this.sortBy, this.orderBy);
      console.log(this.sortBy);
      console.log(this.orderBy);
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD MMM yyyy");
      }
    },
    custom_report(event) {
      this.CustomerReportBy = event.target.value;
      
      this.top_report();
    },
    limit_data(event) {
      this.limit = event.target.value;
      
      this.top_report();
    },
  },
  computed:{
    displayValueSales(){
     if(this.CustomerReportBy === "Customers" || this.CustomerReportBy === "Suppliers"){
      return this.totalAmountsPer
     }
     else{
      return this.totalSalesPer
     }
    },
    displayValueItems(){
     if(this.CustomerReportBy === "Customers" || this.CustomerReportBy === "Suppliers"){
      return this.totalCountPer
     }
     else{
      return this.totalItemsPer
     }
    }

  },
  mounted() {
    this.sortBy = '';
    const queryParams = this.$route.query;
    if(queryParams){
      if(queryParams.customers){
        this.activate("Customers");
      }
      else if(queryParams.supplier){
        this.activate("Suppliers");
      }
      else if(queryParams.soldByValue){
        this.activate("Items Sold By Value");
      }
      else if(queryParams.purchByValue){
        this.activate("Items Purchased By Value");
      }
      else if(queryParams.SoldByQTY){
        this.activate("Items Sold By Quantity");
      }
      else if(queryParams.purchByQTY){
        this.activate("Items Purchased By Quantity");
      }
      else{
        console.log("NOT WORKING");
      }
    }
    else{
      this.activate('Customers');
    }
    this.isPaid = localStorage.getItem('isPaid');
    
      if (
      localStorage.getItem("active_date") === null ||
      localStorage.getItem("active_date") === ""
    ) {
      this.active_date = "oney";
    } else {
      this.active_date = localStorage.getItem("active_date");
    }
  },
};
</script>
