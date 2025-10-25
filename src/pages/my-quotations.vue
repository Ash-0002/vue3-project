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
    <!--Page header-->
    

    <!--start first card box-->
    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-3 col-lg-12 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0 company_heading_title">
            <span class="company_heading_back_button">
              <BackButton />
            </span>
            <h3>My Quotations</h3>
          </div>
        </div>
        <div class="col-xl-9 col-lg-12 col-12">
          <ul class="new_set_dropdown_with_gross">
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
                <div class="row align-items-center">
                  <div class="col-lg-3 col-12">
                    <ul class="search_input new_left_search_part">
                      <li class="">
                        <div class="table_search">
                          <input
                            class="search_input"
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
                      class="new_sales_top_table_part parties_ul_with_filter new_search_export_button"
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

                      <li class="">
                        <!-- <div class="table_search">
                                                    <input v-model="search" v-on:keyup="handleBlur"
                                                            placeholder="Search">
                                                </div> -->
                      </li>
                     
                    </ul>
                  </div>
                </div>

                <div class="show_entries_for_table new_show_entries_for_table">
                  <v-data-table
                    :page="page"
                    :pageCount="numberOfPages"
                    :headers="selectedHeaders"
                    :items="myledgers"
                    :options.sync="options"
                    dense
                    :items-per-page="10"
                    :server-items-length="totalmyledgers"
                    :loading="loading"
                    class="elevation-1"
                    must-sort
                    :sort-by.sync="sortBy"
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

                    <template v-slot:item.partyLedgerName="{ item }">
                      <td v-if="source !== 'sf' && isWrite_isQuotation == true">
                        <router-link
                          :to="`${item.url}`"
                          class="onclick_details"
                          >{{ item.partyLedgerName }}</router-link
                        >
                      </td>
                      <td v-else>
                        <a href="javascript:void(0);" class="onclick_details"
                        @click="
                              backentryPdf(item._id)
                            "
                          >{{ item.partyLedgerName }}
                        </a>
                      </td>
                    </template>
                    <template v-slot:item.voucherDate="{ item }">
                      <td>
                        <p>{{ format_date(item.voucherDate) }}</p>
                      </td>
                    </template>
                    <template v-slot:item.voucherNumber="{ item }">
                      <td>
                        <p>{{ item.voucherNumber }}</p>
                      </td>
                    </template>
                    <template v-slot:item.amount="{ item }">
                      <td align="center">
                        <p>
                          <span class="font_sans">{{ symbol }}</span>
                          {{ Math.abs(item.amount) | formatNumberParties }}
                        </p>
                      </td>
                    </template>
                    <template v-slot:item.action="{ item }">
                      <td align="center">
                        <a v-on:click="deleteQuotation(item._id)"
                        v-if="isWrite_isQuotation" 
                        class="delete_icon_reports"><i class="fa fa-trash"></i></a>
                        <button class="CreateSalesButtonImageQuotation" v-b-tooltip.hover.top="'Create Sales'" @click="createSalesandSalesOrderFromQuotation(item._id, 'Sales')">
                          <img src="/assets/images/1.0/icons/sales.png" />
                        </button> 
                        <button class="CreateSalesOrderButtonImageQuotation" v-b-tooltip.hover.top="'Create Sales Order'" @click="createSalesandSalesOrderFromQuotation(item._id, 'Sales Order')">
                          <img src="/assets/images/1.0/icons/sales-order.png" />
                        </button>
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
      <!--Voucher Type Popup-->
    <div v-if="showVtypePopup" class="">
      <div class="SalesCreateOrderVoucherPopupMainDiv">
         <div class="VoucherTypePopupSalesCreateSalesOrderMain">
            <div class="CrossIconVoucherTypePopupSalesCreate">
              <button @click="closePopupDesktop">
                <i class="fa fa-times"></i>
              </button>
            </div>
             <div class="HeadingVouchertypePortion">
              <h6>Voucher Type</h6>
            </div>
          <ul class="VouchertypePopupInnerPoint">
                  <li v-for="(vType, index) in voucherTypesForSalesandSalesOrder" @click="selectVoucherType(vType)">{{ vType.voucherTypeName }}</li>
                </ul>
                </div>
      </div>
      <!-- Overlay to Close Popup -->
      <div class="SalesCreateVoucherpopupOrderOverlay" @click="closePopupDesktop"></div>
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
import Common from "@/Common";
import BackButton from "../components/BackButton.vue";
import GoogleAnalytics from "@/GoogleAnalytics";
import DateRangePicker from "vue2-daterange-picker";

//you need to import the CSS manually
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  name: "daybook",
  components: {
    DateRangePicker,
    BackButton
  },
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
        { text: "Name", value: "partyLedgerName" },
        { text: "Date", value: "voucherDate" },
        { text: "Quotation", value: "voucherNumber" },
        { text: "Amount", value: "amount", align: "center" },
        { text: 'Action', value: 'action', align: 'center', sortable: false }
      ],
      isWrite_isQuotation:'true',
      page: 1,
      totalmyledgers: 0,
      numberOfPages: 0,
      myledgers: [],
      value: [],
      selectedHeaders: [],
      symbol: "",
      loading: true,
      new_loading: true,
      options: {},
      search: "",
      sortBy: "voucherDate",
      orderBy: -1,
      selectledger: "",
      ledgersoptions: ["Ledger 1", "Ledger 2", "Ledger 3"],
      active_date: "oney",
      call_function: "0",
      source: "",
      showVtypePopup: false,
      VoucherIdForQuotation: '',
      voucherTypesForSalesandSalesOrder: [],
      createWhat: ''
    };
  },
  watch: {
    page: function () {
      this.options.page = this.page;
      this.readDataFromAPI("", this.sortBy, this.orderBy);
      GoogleAnalytics.my_quotations_reports_screen_pagination(
        this.options.page
      );
    },

    "options.itemsPerPage"() {
      this.page=1
      this.options.page = 1; 
      this.readDataFromAPI("", this.sortBy, this.orderBy);

      if (this.call_function == "1") {
        this.call_function = "1";
        GoogleAnalytics.my_quotations_reports_screen_Rows_Per_Page(
          this.options.itemsPerPage
        );
      } else {
        this.call_function = "1";
      }
    },

    options: {
      handler() {
        
        GoogleAnalytics.my_quotations_reports_screen_listing();
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
    closePopupDesktop() {
      this.showVtypePopup = false;
    },
    backentryPdf(v_id) {
      const data = {
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        QuotationId: v_id,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getQuotationPdf(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            this.pdfUrl = response.data.data.pdf;
            localStorage.setItem("pdfUrl", this.pdfUrl);
            window.open(window.location.origin + "/pdfNew");
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    activatedate: function (date) {
      if (date === "oned") {
        // one day
        GoogleAnalytics.my_quotations_reports_screen_date_filter("1D");
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
        GoogleAnalytics.my_quotations_reports_screen_date_filter("1W");
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
        GoogleAnalytics.my_quotations_reports_screen_date_filter("1M");
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
        GoogleAnalytics.my_quotations_reports_screen_date_filter("3M");
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
        GoogleAnalytics.my_quotations_reports_screen_date_filter("1Y");
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
        GoogleAnalytics.my_quotations_reports_screen_date_filter("2Y");
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
        GoogleAnalytics.my_quotations_reports_screen_date_filter("Max");
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
    readDataFromAPI(type = "", sortBy = "", orderBy = "") {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      this.symbol = localStorage.getItem("symbol");
      if (type === "search") {
        this.options.page = 1;
      }
      const { page, itemsPerPage } = this.options;
      console.log("Page Number", page, itemsPerPage);
      let pageNumber = page - 1;
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        requestFrom: "WEB",
        searchTerm: this.search,
        sortBy: this.sortBy,
        orderBy: this.orderBy,
        startDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        endDate: moment(String(this.$refs.picker.end)).format("yyyy-MM-DD"),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      this.myledgers = [];
      Api.getQuotations(data, headers)
        .then((response) => {
          const responseStatus = Common.getStatusForActionFailed(
              response.data.status
            );
            if (responseStatus == "200") {
            for (let [key, value] of Object.entries(response.data.data.list)) {
              response.data.data.list[key].url =
                "create-quotation-v4/quotation"  +
                "/" +
                value._id;
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
          }
        })

        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          
          this.loading = false;
          this.new_loading = false;
        });
    },
    handleBlur() {
      const type = "search";
      GoogleAnalytics.my_quotations_reports_screen_search(this.search);
      this.readDataFromAPI(type);
    },
    updateSort(byDesc, event) {
      this.options.page = this.page;
      if (byDesc == "by") {
        this.sortBy = event;
        this.orderBy = -1;
      } else if (byDesc == "desc") {
        if (event == true) {
          this.orderBy = 1;
        } else {
          this.orderBy = -1;
        }
      }

      this.readDataFromAPI("", this.sortBy, this.orderBy);
      GoogleAnalytics.my_quotations_reports_screen_sorting(
        this.sortBy,
        this.orderBy
      );
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
      GoogleAnalytics.my_quotations_reports_screen_date_filter("Custom");
      this.readDataFromAPI();
      this.date_setting();
    },

    deleteQuotation(quotationId) {
      const data = {
        _userId: localStorage.getItem("customerId"),
        quotationId: quotationId,
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.deleteQuotation(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            this.readDataFromAPI();
          } else {
            this.readDataFromAPI();
            this.new_loading = false;
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
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
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD MMM yyyy");
      }
    },
    async createSalesandSalesOrderFromQuotation(voucherId, type){
      this.showVtypePopup = true
       try {
       const data = {
          requestFrom: "WEB",
          searchTerm: "",
          startLimit: 0,
          endLimit: 25,
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          parent: type,
        };

        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };

        const response = await Api.getVoucherTypes(data, headers);

        if (response.data.message === "AUTHENTICATION_FAILED") {
          localStorage.clear();
          window.location.href = "/";
        } else {
          this.voucherTypesForSalesandSalesOrder = response.data.data.list
          }
          this.VoucherIdForQuotation = voucherId
          this.createWhat = type
      }
     catch (err) {
        console.error(err);
      }
      GoogleAnalytics.salesAndSalesOrderFromQuotation()
    },
    selectVoucherType(vType){
       this.$router.push({ 
        name: this.createWhat == 'Sales'?'sales-voucher-v4':'sales-order-voucher-V4', 
        query: {
        voucherType: vType.voucherTypeName, 
        voucherIdFromQuotation: this.VoucherIdForQuotation
        }
        })
    }
  },
  mounted() {
    this.isWrite_isQuotation = JSON.parse(
        localStorage.getItem("isWrite_isQuotation")
      );
      console.log(this.isWrite_isQuotation,"Write Quotation")
    this.source = localStorage.getItem("source");
    console.log(this.source,"Source")
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
<style scoped>
body ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    transition: background 0.3s;
}
body *::-webkit-scrollbar-thumb, body *:hover::-webkit-scrollbar-thumb {
    background: #898989 !important;
}
body ::-webkit-scrollbar-thumb, body :hover::-webkit-scrollbar-thumb {
    background: #878787;
}
</style>
