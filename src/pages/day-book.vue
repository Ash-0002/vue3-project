/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section>
    <!-- loader add  -->
    <div v-if="new_loading" class="loader-wrapper">
      <div class="loading_css">
        <img src="assets/images/1.0/brand/Loader-GIF-Final.gif" class="img-fluid loader_css" height="40" width="40" />
      </div>
    </div>
    <!--start first card box-->
    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-5 col-lg-12 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0 company_heading_title">
            <span class="company_heading_back_button">
              <BackButton />
            </span>
            <h3 id="" class="partyName">
              Day Book
            
            </h3>
          </div>
        </div>
        <div class="col-xl-7 col-lg-12 col-12">
          <ul class="new_set_dropdown_with_gross">
            <li>
              <div class="parties_datefilter_vue">
                <div class="parties_datefilter_vue daybook_calendars_datepicker">
                  <span class="datepicker_left_arrow" @click="left_arrow()"><i class="fa fa-chevron-left"></i></span>
                  <date-range-picker ref="picker" :auto-submit="true"
                    :locale-data="{ firstDay: 1, format: 'dd/mm/yyyy', customRangeLabel: 'Custom Range', separator: ' - ' }"
                    v-model="dateRange" :ranges="defaultRanges" :startDate="startDate" :singleDatePicker="true"
                    :endDate="endDate" @update="update()">
                    <template v-slot:input="picker" style="min-width: 350px;">

                    </template>
                  </date-range-picker>
                  <span class="datepicker_right_arrow" @click="right_arrow()"><i class="fa fa-chevron-right"></i></span>
                  <span></span>
                </div>
              </div>
            </li>
          </ul>
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
                  <div class="col-lg-3 col-12">
                    <ul class="search_input new_left_search_part">
                      <li class="">
                        <div class="table_search">
                          <input class="search_input" v-model="search" v-on:keyup="handleBlur" placeholder="Search" />
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-9 col-12">
                    <ul
                      class="new_sales_top_table_part parties_ul_with_filter mb-4 voucher_type_div new_search_export_button">
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
                      <li>
                        <div class="dropdown_newdesign" @click="voucherTypeShow">
                          <button class="voucher_type_filter">
                            Voucher Type
                          </button>
                          <i class="fa fa-chevron-left rotate_img"></i>
                        </div>
                      </li>

                      <div class="voucher_type_filter_data" v-if="voucherShowInside" v-click-outside="closeEvent">
                        <ul class="filter_data_voucher">
                          <li>
                            <label class="select_all_600">
                              <input type="checkbox" v-model="selectAll" :checked="selectAll" />
                              <span>Select All</span>
                            </label>
                          </li>
                          <li v-for="user in users">
                            <label>
                              <input @click="vouchertypeclick(user.name, $event)" type="checkbox" v-model="selected"
                                :value="user.name" :checked="user.action" number  />
                              <span>{{ user.name }}</span>
                            </label>
                          </li>
                        </ul>
                      </div>

                   </ul>
                  </div>
                </div>
                <div class="show_entries_for_table new_show_entries_for_table">
                  <v-data-table :page="page" :pageCount="numberOfPages" :headers="selectedHeaders" :items="daybooks"
                    :options.sync="options" dense :items-per-page="10" :server-items-length="totaldaybooks"
                    :loading="loading" class="elevation-1" must-sort :sort-by="null" :sort-desc="false"
                    @update:sort-by="updateSort('by', $event)" @update:sort-desc="updateSort('desc', $event)"
                    disable-pagination item-key="table_header_index" ref="table"
                    :hide-default-footer="hideDefaultFooter" :footer-props="{
      'items-per-page-options': [10, 25, 50, 100],
      'items-per-page-text': 'products per page',
    }">
                    rows-per-page-items="5" hide-action item-key="title">

                    <template v-slot:top="{ pagination, options, updateOptions }">
                      <v-data-footer :pagination="pagination" :options="options"
                        :items-per-page-options="[10, 25, 50, 100]" @update:options="updateOptions"
                        items-per-page-text="$vuetify.dataTable.itemsPerPageText" />
                    </template>

                    <template v-slot:item.voucherNumber="{ item }">
                      <td>
                        <div v-if="isPaid == '' || isPaid == null">
                          <b-button class="vch_num_all_btn" v-b-modal.customerstatus-popup>{{ item.voucherNumber
                            }}</b-button>
                        </div>
                        <div v-else>
                          <router-link :to="{ path: item.url, query: { masterID: item.masterId } }" class="onclick_details">{{ item.voucherNumber
                            }}</router-link>
                        </div>

                     
                      </td>
                    </template>
                    <template v-slot:item.partyLedgerName="{ item }">
                      <td>
                        <div v-if="isPaid == '' || isPaid == null">
                          <b-button class="vch_num_all_btn" v-b-modal.customerstatus-popup>{{ item.partyLedgerName
                            }}</b-button>
                        </div>
                        <div v-else>
                          <router-link :to="{ path: item.url, query: { masterID: item.masterId } }" class="onclick_details">{{ item.partyLedgerName
                            }}</router-link>
                        </div>
                      </td>
                    </template>
                    <template v-slot:item.date="{ item }">
                      <td>
                        <p>{{ item.voucherDate }}</p>
                      </td>
                    </template>
                    <template v-slot:item.voucherType="{ item }">
                      <td>
                        <p>{{ item.voucherType }}</p>
                      </td>
                    </template>
                    <template v-slot:item.totalAmount="{ item }">
                      <td align="right">
                        <p>
                          <span class="font_sans">{{ symbol }}</span>
                          {{ Math.abs(item.totalAmount) | formatNumberDayBook }}
                        </p>
                      </td>
                    </template>
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

Vue.filter("formatNumberDayBook", function (value) {

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
    
    let startDate = new Date();
    let endDate = new Date();

    return {
      users: [
        { id: "Sales", name: "Sales" },
        { id: "Purchase", name: "Purchase" },
        { id: "SalesOrder", name: "Sales Order" },
        { id: "PurchaseOrder", name: "Purchase Order" },
        { id: "DebitNote", name: "Debit Note" },
        { id: "CreditNote", name: "Credit Note" },
        { id: "Receipt", name: "Receipt" },
        { id: "Payment", name: "Payment" },
        { id: "Journal", name: "Journal" },
        { id: "Contra", name: "Contra" },
        { id: "DeliveryNote", name: "Delivery Note" },
      ],
      selected: [

      ],
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
        {
          text: "Voucher No",
          value: "voucherNumber",
          align: "left",
          sortable: true,
        },
        { text: "Name", value: "partyLedgerName" },
        { text: "Date", value: "voucherDate" },
        { text: "voucherType", value: "voucherType" },
        { text: "Amount", value: "totalAmount", align: "right" },
      ],
      page: 1,
      totaldaybooks: 0,
      numberOfPages: 0,
      daybooks: [],
      value: [],
      selectedHeaders: [],
      loading: true,
      new_loading: true,
      options: {},
      symbol: "",
      sortBy: "voucherNumber",
      orderBy: "1",
      search: "",
      active_date: "onetoday",
      isPaid: "0",
      call_function: "0",
      voucherShowInside: false,
      hideDefaultFooter: true,
    };
  },
  watch: {
    page: function () {
      this.options.page = this.page;
      this.daybook();
      GoogleAnalytics.day_book_reports_screen_pagination(this.options.page);
    },

    "options.itemsPerPage"() {
      this.page = 1
      this.options.page = 1;
      this.daybook();
      // console.log(`hehehe`);
      if (this.call_function == "1") {
        this.call_function = "1";
        GoogleAnalytics.day_book_reports_screen_Rows_Per_Page(
          this.options.itemsPerPage
        );
      } else {
        this.call_function = "1";
      }
    },

    value(val) {
      this.selectedHeaders = val;
    },
    options: {
      handler() {
        GoogleAnalytics.day_book_reports_listing();
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
  },
  computed: {
    selectAll: {
      get: function () {
        return this.users ? this.selected.length == this.users.length : false;
      },
      set: function (value) {
        var selected = [];
        if (value) {
          this.users.forEach(function (user) {
            if (localStorage.getItem('isRead_is' + user.id) === 'true') {
              selected.push(user.name.toString());
            }
          });
        }

        this.selected = selected;
        this.daybook();
      },
    },
  },
  methods: {
    freeusergeneratePdf() {
      GoogleAnalytics.day_book_reports_screen_viewpdf("viewpdf");
    },
    voucherTypeShow() {
      this.voucherShowInside = true;
    },
    hide() {
      this.voucherShowInside = false;
    },
    closeEvent() {
      this.hide();
    },
    vouchertypeclick(user, event) {
      if (event.target.checked) {
        if (user != "") {
          this.selected.push(user);
        }
      } else {
        if (user != "") {
          this.selected.splice(this.selected.indexOf(user), 1);
        }
      }

      this.daybook();
    },
    generatePdf() {
      GoogleAnalytics.day_book_reports_screen_viewpdf("viewpdf");
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startDate: moment(String(this.$refs.picker.start)).format("YYYY-MM-DD"),
        endDate: moment(String(this.$refs.picker.end)).format("YYYY-MM-DD"),
        requestFrom: "WEB",
        voucherTypes: this.selected,
        sortBy: this.sortBy,
        orderBy: parseInt(this.orderBy),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getPDFForDayBookReportsGo(data, headers)
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
          this.loading = false;
        });
    },
    activatedate: function (date) {
      if (date === "onetoday") {
        // one day
        GoogleAnalytics.day_book_reports_screen_date_filter("Today");
        var new_date_start_date = moment(String(new Date())).format(
          "yyyy-MM-DD"
        );
        var new_date_end_date = moment(String(new Date())).format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "oneyesterday") {
        // one week
        GoogleAnalytics.day_book_reports_screen_date_filter("Yesterday");
        var new_date_start_date = moment(
          String(new Date(Date.now() - 3600 * 1000 * 24))
        ).format("yyyy-MM-DD");
        var new_date_end_date = moment(
          String(new Date(Date.now() - 3600 * 1000 * 24))
        ).format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      }
      
      localStorage.setItem("date_range_start_date", new_date_start_date);
      localStorage.setItem("date_range_end_date", new_date_end_date);
      this.daybook();
      this.active_date = date;
    },
    date_setting() {
      this.active_date = "";
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
        this.active_date = "onetoday";
      } else if (days_mounted == max_days) {
        this.active_date = "max";
      } else {
        this.active_date = "oney";
      }
      localStorage.setItem("active_date", this.active_date);
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
        this.$refs.picker.start = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.end = new_date_end_date;
      }
      

      this.daybook();
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
        this.$refs.picker.start = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.end = new_date_end_date;
      }
      
      this.daybook();
    },
    daybook(type) {
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
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        
        voucherTypes: this.selected,
        groupByAmount: "Gross",
        sortBy: this.sortBy,
        orderBy: parseInt(this.orderBy),
        requestFrom: "WEB",
        startDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        endDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        searchTerm: this.search,
        ledgerGuid: "",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getVouchersbyCompanyIdGo(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            if (response.data.status != "0") {

              for (let [key, value] of Object.entries(
                response.data.data.list
              )) {
                response.data.data.list[key].totalAmount = Math.abs(
                  response.data.data.list[key].totalAmount
                );
                response.data.data.list[key].url =
                  "/parties/details/" +
                  response.data.data.list[key]._id +
                  "/" +
                  response.data.data.list[key].parentType;
              }
              let totalPages = Math.ceil(
                response.data.data.totalCount / itemsPerPage
              );
              for (let [key, value] of Object.entries(
                response.data.data.list
              )) {
                response.data.data.list[key].voucherDate = moment(
                  response.data.data.list[key].voucherDate
                ).format("D MMM YY");
              }

              this.loading = false;
              this.new_loading = false;
              this.daybooks = response.data.data.list;
              this.totaldaybooks = response.data.data.totalCount;
              this.numberOfPages = totalPages;
            } else {
              this.loading = false;
              this.new_loading = false;
              this.daybooks = [];
              this.totaldaybooks = 0;
              this.numberOfPages = 0;
            }
          }
        })

        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
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
      this.daybook();
      GoogleAnalytics.day_book_reports_screen_sorting(
        this.sortBy,
        this.orderBy
      );

    },
    handleBlur() {
      const type = "search";
      GoogleAnalytics.day_book_reports_screen_search(this.search);
      this.daybook(type);
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD MMM yyyy");
      }
    },
    update() {
      // alert("update");
      localStorage.setItem(
        "date_range_start_date",
        moment(String(this.$refs.picker.start)).format("yyyy-MM-DD")
      );
      // console.log(this.$refs.picker.start ,"2")
      localStorage.setItem(
        "date_range_end_date",
        moment(String(this.$refs.picker.end)).format("yyyy-MM-DD")
      );
      GoogleAnalytics.day_book_reports_screen_date_filter("Custom");
      this.active_date = "";
      this.daybook();
      this.date_setting();
    },
    getDateFromLocalStorage(key) {
      const dateStr = localStorage.getItem(key);
      return dateStr ? new Date(dateStr) : new Date();
    },
  },
  mounted() {
    
    
    this.users.forEach(user => {

      if (localStorage.getItem('isRead_is' + user.id) === 'true') {
        this.selected.push(user.name.toString());

      }
    })
    this.sortBy = "";


    this.isPaid = localStorage.getItem("isPaid");
  },
};
</script>
<style scoped>
.daybook_calendars_datepicker .calendars {
    flex-wrap: nowrap;
}
</style>