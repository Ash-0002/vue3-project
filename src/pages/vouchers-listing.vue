/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
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
    <!--start first card box-->
    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-5 col-lg-12 col-12">
          <div class="arrow_left_items">
            <a @click="$router.go(-1)"><i class="fa fa-chevron-left"></i></a>
          </div>
          <div class="company_name new_title_company_name" id="company_name">
            <input type="hidden" id="partyLedgerName" value="" />
            <h3 id="" class="partyName">
              {{ this.$route.params.ledger_name }}
            </h3>
            <div class="company_balance"></div>
          </div>
        </div>
        <div class="col-xl-7 col-lg-12 col-12">
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
                <div class="row">
                  <div class="col-12">
                    <div
                      class="custom_table custom_table_pt responsive_parties_table"
                    >
                    <div class="show_entries_for_table">
                        <v-data-table
                          :page="page"
                          :pageCount="numberOfPages"
                          :headers="headers"
                          :items="passengers"
                          :options.sync="options"
                          :server-items-length="totalPassengers"
                          must-sort
                          :sort-by="null"
                          :sort-desc="false"
                          @update:sort-by="updateSort('by', $event)"
                          @update:sort-desc="updateSort('desc', $event)"
                          :loading="loading"
                          class="elevation-1"
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

                          <template v-slot:item.voucherDate="{ item }">
                            <td>{{ format_date(item.voucherDate) }}</td>
                          </template>

                          <template v-slot:item.voucherNumber="{ item }">
                            <router-link
                              class="onclick_details"
                              :to="{
                                name: 'Parties_Details',
                                params: {
                                  v_id: item._id,
                                  v_type: item.parentType,
                                },
                                query: { masterID: item.masterId }
                              }"
                            >
                              {{ item.voucherNumber }}</router-link
                            >
                          </template>

                          <template v-slot:item.voucherType="{ item }">
                            <td>{{ item.voucherType }}</td>
                          </template>

                          <template v-slot:item.parentType="{ item }">
                            <td>{{ item.parentType }}</td>
                          </template>

                          <template v-slot:item.totalAmount="{ item }">
                            <td align="right">
                              <p
                                :class="`m-0 td_last_sale ${item.openingClass}`"
                              >
                                <span class="font_sans">{{ item.symbol }}</span>
                                {{
                                  parseFloat(item.totalAmount)
                                    | formatNumberParties
                                }}
                              </p>
                            </td>
                          </template>

                          <template v-slot:item.action="{}">
                            <td align="center">
                              <a href="#" class="pdf_a_download"
                                ><img
                                  src="/assets/images/1.0/svgs/pdf_download.svg"
                                  class="img-fluid"
                                />
                                PDF</a
                              >
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
                    </div>
                  </div>
                </div>
              </v-app>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End Page header-->
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
  name: "Parties",
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
      voucherstypes:[],
      getLedgerData: [],
      page: 1,
      totalPassengers: 0,
      numberOfPages: 0,
      passengers: [],
      loading: true,
      new_loading: true,
      options: {},
      headers: [
        { text: "Voucher No", value: "voucherNumber" },
        { text: "Date", value: "voucherDate" },
        { text: "Vch Type", value: "voucherType" },
        { text: "Amount", value: "totalAmount", align: "right" },
      ],
      search: "",
      sortBy: "voucherNumber",
      orderBy: 1,
      call_function: "0",
    };
  },
  watch: {
    page: function () {
      this.options.page = this.page;
      this.getvouchersData();
      GoogleAnalytics.vouchers_listing_screen_pagination(this.options.page);
    },

    "options.itemsPerPage"() {
      this.page=1
      this.options.page = 1;
      this.getvouchersData();

      if (this.call_function == "1") {
        this.call_function = "1";
        GoogleAnalytics.vouchers_listing_screen_Rows_Per_Page(
          this.options.itemsPerPage
        );
      } else {
        this.call_function = "1";
      }
    },

    options: {
      handler() {
        GoogleAnalytics.vouchers_listing();
      },
    },
    deep: true,
  },
  methods: {
    activatedate: function (date) {
      if (date === "oned") {
        // one day
        GoogleAnalytics.vouchers_listing_screen_date_filter("1D");
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
        GoogleAnalytics.vouchers_listing_screen_date_filter("1W");
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
        GoogleAnalytics.vouchers_listing_screen_date_filter("1M");
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
        GoogleAnalytics.vouchers_listing_screen_date_filter("3M");
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
        GoogleAnalytics.vouchers_listing_screen_date_filter("1Y");
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
        GoogleAnalytics.vouchers_listing_screen_date_filter("2Y");
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
        GoogleAnalytics.vouchers_listing_screen_date_filter("Max");
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
      this.getvouchersData("", this.groupSelectValue, this.switch_type);
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
    update() {
      localStorage.setItem(
        "date_range_start_date",
        moment(String(this.$refs.picker.start)).format("yyyy-MM-DD")
      );
      localStorage.setItem(
        "date_range_end_date",
        moment(String(this.$refs.picker.end)).format("yyyy-MM-DD")
      );
      GoogleAnalytics.vouchers_listing_screen_date_filter("Custom");
      this.getvouchersData();
      this.date_setting();
    },
    getvouchersData() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const { page, itemsPerPage } = this.options;
      console.log("Page Number ", page, itemsPerPage);
      if(this.$route.query.type=="Sales"){
        this.voucherstypes = ["Sales"]
      }
      else if(this.$route.query.type=="Purchase"){
        this.voucherstypes = ["Purchase"]
      }
      else{
        this.voucherstypes = [
          "Sales",
          "Purchase",
          "Debit Note",
          "Credit Note",
          "Receipt",
          "Payment",
          "Journal",
          "Contra",
          "Sales Order",
          "Purchase Order",
        ]
      }
     if(this.$route.params.isSales){
       this.voucherstypes = ["Sales"]
     }
      let pageNumber = page - 1;
      const data = {
        requestFrom: "WEB",
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        startDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        endDate: moment(String(this.$refs.picker.end)).format("yyyy-MM-DD"),
        searchTerm: this.search,
        voucherTypes:this.voucherstypes,
        sortBy: this.sortBy,
        orderBy: this.orderBy,
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        ledgerGuid: this.$route.params.ledgerGuid,
        stockItemGuid: this.$route.params.stockItemGuid,
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
            if (response.data.status == "200") {
              for (let [key, value] of Object.entries(
                response.data.data.list
              )) {
                if (value.voucherTotalAmount >= 0) {
                  // + value
                  response.data.data.list[key].openingClass =
                    "opening_plus_balance";
                } else {
                  // - value
                  response.data.data.list[key].openingClass =
                    "opening_minus_balance";
                }
                response.data.data.list[key].symbol =
                  localStorage.getItem("symbol");
                response.data.data.list[key].guid = value.guid;
                if (response.data.data.list[key].voucherNumber === "") {
                  response.data.data.list[key].voucherNumber = "-";
                }
              }

              console.log(response.data.data.list);
              let totalPages = Math.ceil(
                response.data.data.totalCount / itemsPerPage
              );
              this.loading = false;
              this.new_loading = false;
              this.passengers = response.data.data.list;
              this.totalPassengers = response.data.data.totalCount;
              this.numberOfPages = totalPages;
              console.log(totalPages);
            } else {
              this.passengers = [];
              this.totalPassengers = "";
              this.numberOfPages = "";
              let totalPages = "";
              this.loading = false;
              this.new_loading = false;
            }
          }
        })
        .catch(() => {
          this.loading = false;
          this.new_loading = false;
        });
    },
    format_date(value) {
      value = value.split(" ")[0];
      if (value) {
        if(value == "1900-01-01"){
          value ="-"
          return value
        }
        else{
          return moment(String(value)).format("DD MMM yyyy");
        }
      }
    },
    switchSelect(event) {
      this.getpartyDetails(event.target.value);
      console.log(event.target.value);
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

      this.getvouchersData();
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
      localStorage.setItem("date_range_start_date", new_date_start_date);
      localStorage.setItem("date_range_end_date", new_date_end_date);

      this.getvouchersData();
    },
    paginationClicked() {
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
      this.getvouchersData();
      GoogleAnalytics.vouchers_listing_screen_sorting(
        this.sortBy,
        this.orderBy
      );
    },
  },
  mounted() {
    this.sortBy = "";
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
