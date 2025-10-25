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
          src="/assets/images/1.0/brand/Loader-GIF-Final.gif"
          class="img-fluid loader_css"
          height="40"
          width="40"
        />
      </div>
    </div>
    
    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-3 col-lg-12 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0">
            <h3>Tracking Report</h3>
          </div>
        </div>
        <div class="col-xl-9 col-lg-12 col-12">
          <ul class="new_set_dropdown_with_gross">
            <li class="">
              <p class="heading_dropdown_gross-all">Date Filter</p>
              <ul class="sortby_filter">
                <li
                  @click="activatedate('oned')"
                  :class="{ active: active_date == 'oned' }"
                >
                  1D
                </li>
                <li
                  @click="activatedate('onem')"
                  :class="{ active: active_date == 'onem' }"
                >
                  1M
                </li>
                <li
                  @click="activatedate('oney')"
                  :class="{ active: active_date == 'oney' }"
                >
                  1Y
                </li>
                <li
                  @click="activatedate('max')"
                  :class="{ active: active_date == 'max' }"
                >
                  Max
                </li>
                <li class="new_date_filter_sortby">
                  <date-range-picker
                    ref="picker"
                    :auto-submit="true"
                    :locale-data="{
                      firstDay: 1,
                      format: 'dS mmmm yyyy',
                      customRangeLabel: 'Custom Range',
                      separator: ' - ',
                    }"
                    v-model="dateRange"
                    :ranges="defaultRanges"
                    :startDate="startDate"
                    :endDate="endDate"
                    @update="update()"
                  >
                    <template v-slot:input="picker" style="min-width: 350px">
                    </template>
                  </date-range-picker>
                </li>
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
                    <ul class="search_input new_left_search_part"></ul>
                  </div>
                  <div class="col-lg-9 col-sm-12 col-12">
                    <ul
                      class="dashboard_sales_dropdown new_search_export_button"
                    >
                      <li
                        v-if="isPaid == '' || isPaid == null"
                        v-b-modal.customerstatus-popup
                      >
                        <button type="button" @click="freeusergeneratePdf()" class="btn download_border_btn">
                          <img
                            src="/assets/images/1.0/png/pdficon.png"
                            class="img-fluid"
                          />View Pdf<img
                            class="pdf_button_crown"
                            src="/assets/images/1.0/brand/crown-color.svg"
                            loading="lazy"
                          />
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

                <div class="show_entries_for_table">
                  <v-data-table
                    :page="page"
                    :pageCount="numberOfPages"
                    :headers="selectedHeaders"
                    :items="myledgers"
                    :options.sync="options"
                    :server-items-length="totalmyledgers"
                    :loading="loading"
                    class="elevation-1"
                    must-sort
                    @update:sort-by="updateSort('by', $event)"
                    @update:sort-desc="updateSort('desc', $event)"
                    disable-pagination
                    item-key="table_header_index"
                    ref="table"
                    :hide-default-footer="true"
                    :footer-props="{
                      'items-per-page-options': [10, 25, 50, 100],
                      'items-per-page-text': 'products per page',
                    }"
                  >
                    <template
                      v-slot:top="{ pagination, options, updateOptions }"
                    >
                      <v-data-footer
                        :pagination="pagination"
                        :options="options"
                        :items-per-page-options="[10, 25, 50, 100]"
                        @update:options="updateOptions"
                        items-per-page-text="$vuetify.dataTable.itemsPerPageText"
                      />
                    </template>

                    <template v-slot:item.ledgerName="{ item }">
                      <td>{{ item.ledgerName }}</td>
                    </template>
                    <template v-slot:item.punchInTime="{ item }">
                      <td>
                        <p>{{ format_time(item.punchInTime) }}</p>
                      </td>
                    </template>
                    <template v-slot:item.punchOutTime="{ item }">
                      <td>
                        <p>{{ format_time(item.punchOutTime) }}</p>
                      </td>
                    </template>
                  </v-data-table>
                </div>
                <template>
                  <div class="bottom_navigation-pagination">
                    <v-pagination
                      v-model="page"
                      :length="numberOfPages"
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
  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(
    value
  );
});

import moment from "moment";
import Api from "@/Api";
import GoogleAnalytics from "@/GoogleAnalytics";
import DateRangePicker from "vue2-daterange-picker";

//you need to import the CSS manually
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  name: "trackingreport",
  components: { DateRangePicker },
  data() {
    let startDate = moment(
      String(localStorage.getItem("date_range_start_date"))
    );
    let endDate = moment(String(localStorage.getItem("date_range_end_date")));
    return {
      startDate: startDate,
      endDate: endDate,

      dateRange: { startDate, endDate },
      defaultRanges: {
        // I got a eslint syntax errors
        Today: [new Date(), new Date()],
        Yesterday: [
          new Date(Date.now() - 3600 * 1000 * 24),
          new Date(Date.now() - 3600 * 1000 * 24),
        ],
      },
      headers: [
        { text: "LedgerName", value: "ledgerName", sortable: false },
        { text: "Check In", value: "punchInTime", sortable: false },
        { text: "Check Out", value: "punchOutTime", sortable: false },
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
      search: "",
      sortBy: "",
      orderBy: "",
      active_date: "oney",
      isPaid: "",
      call_function : "0"
    };
  },
  watch: {
    page: function () {
          this.options.page = this.page;
          this.readDataFromAPI();
          GoogleAnalytics.tracking_details_reports_screen_pagination(this.options.page);
        },
    
        "options.itemsPerPage"() {
            this.page=1
      this.options.page = 1; 
            this.readDataFromAPI();
    
          if(this.call_function == "1"){
        this.call_function = "1";
        GoogleAnalytics.tracking_details_reports_screen_Rows_Per_Page(this.options.itemsPerPage);
      }else{
        this.call_function = "1";
      }
        },

    value(val) {
      this.selectedHeaders = val;
    },
    options: {
      handler() {
        GoogleAnalytics.tracking_details_reports_screen_listing();
      },
    },
    deep: true,
  },
  filters: {
    dateCell(value) {
      let dt = new Date(value);

      return dt.getDate();
    },
    date(val) {
      return val ? val.toLocaleString() : "";
    },
  },
  created() {
    this.selectedHeaders = this.headers;
    console.log(this.selectedHeaders);
  },
  methods: {
    activatedate: function (date) {
      if (date === "oned") {
        // one day
        GoogleAnalytics.tracking_details_reports_screen_date_filter("1D");
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
        GoogleAnalytics.tracking_details_reports_screen_date_filter("1W");
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
        GoogleAnalytics.tracking_details_reports_screen_date_filter("1M");
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
        GoogleAnalytics.tracking_details_reports_screen_date_filter("3M");
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
        GoogleAnalytics.tracking_details_reports_screen_date_filter("1Y");
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
        GoogleAnalytics.tracking_details_reports_screen_date_filter("2Y");
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
        GoogleAnalytics.tracking_details_reports_screen_date_filter("Max");
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
      
      this.readDataFromAPI();
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
      } else if (days_mounted == max_days) {
        this.active_date = "max";
      } else {
        this.active_date = "oney";
      }
      localStorage.setItem("active_date", this.active_date);
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
        _userId:  localStorage.getItem("customerId"),
        mainUserId: this.$route.params.customer_id,

        company_id: localStorage.getItem("companyId"),
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        requestFrom: "WEB",
        startDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        endDate: moment(String(this.$refs.picker.end)).format("yyyy-MM-DD"),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      this.myledgers = [];
      Api.getTrackingsByCustomerIdGo(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            if (response.data.status != "0") {
              for (let [key, value] of Object.entries(
                response.data.data.list
              )) {
                response.data.data.list[key].punchInTime =
                  value.punchInDetails.punchInTime;
                response.data.data.list[key].punchOutTime =
                  value.punchOutDetails.punchOutTime;
              }

              console.log(response);

              let totalPages = Math.ceil(
                response.data.data.totalCount / itemsPerPage
              );
              this.loading = false;
              this.new_loading = false;
              this.myledgers = response.data.data.list;
              this.totalmyledgers = response.data.data.totalCount;
              this.numberOfPages = totalPages;
            } else {
              this.loading = false;
              this.new_loading = false;
              this.myledgers = [];
              this.totalmyledgers = 0;
              this.numberOfPages = 0;
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
      
      this.readDataFromAPI(type);
    },

    updateSort(byDesc, event) {
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
      
    },

    deleteLedger(Ledgerid) {
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
      
      this.readDataFromAPI();
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
      localStorage.setItem("date_range_start_date", new_date_start_date);
      localStorage.setItem("date_range_end_date", new_date_end_date);
      
      this.readDataFromAPI();
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD MMM yyyy");
      }
    },
    format_time(value) {
      if (value) {
        return moment(String(value)).format("hh:mm A");
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
      GoogleAnalytics.tracking_details_reports_screen_date_filter("Custom");
      this.readDataFromAPI();
      this.date_setting();
    },
    freeusergeneratePdf(){
        GoogleAnalytics.tracking_details_reports_screen_viewpdf("viewpdf");
        
      },
    generatePdf() {
     
      GoogleAnalytics.tracking_details_reports_screen_viewpdf("viewpdf");
      const data = {
        company_id: localStorage.getItem("companyId"),
        mainUserId: this.$route.params.customer_id,
        _userId: localStorage.getItem("customerId"),
        startDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        endDate: moment(String(this.$refs.picker.end)).format("yyyy-MM-DD"),
        startLimit: 0,
        endLimit: 10,
        requestFrom: "WEB",
      
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getPDFForTrackingReportGo(data, headers)
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
        .catch(() => {
          alert("ERROR");
          this.loading = false;
        });
    },
  },
  mounted() {
    this.isPaid = localStorage.getItem("isPaid");
  
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
