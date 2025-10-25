/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section>
    <!-- loader add  -->
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
    <!-- end loader -->
    <!--start first card box-->
    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-5 col-lg-12 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0 company_heading_title">
            <span class="company_heading_back_button">
              <BackButton />
            </span>
            <h3 id="" class="partyName">Trial Balance</h3>
          </div>
        </div>
        <div class="col-xl-7 col-lg-12 col-12">
          <ul class="new_set_dropdown_with_gross">
            <li class="marginright25">
              <p class="heading_dropdown_gross-all">Date Filter</p>
              <div class="parties_datefilter_vue">
                <div
                  class="parties_datefilter_vue only_trialbalance_date_filter"
                >
                  <span class="datepicker_left_arrow" @click="left_arrow()"
                    ><i class="fa fa-chevron-left"></i
                  ></span>
                  <date-range-picker
                    ref="picker"
                    :auto-submit="true"
                    :locale-data="{
                      firstDay: 1,
                      format: 'dd/mm/yyyy',
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
                  <span class="datepicker_right_arrow" @click="right_arrow()"
                    ><i class="fa fa-chevron-right"></i
                  ></span>
                  <span></span>
                </div>
              </div>
            </li>
            <li
              v-if="isPaid == '' || isPaid == null"
              v-b-modal.customerstatus-popup
            >
              <button
                type="button"
                @click="freeusergeneratePdf()"
                class="btn download_border_btn"
              >
                <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid" />View
                Pdf<img
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
                <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid" />View
                Pdf
              </button>
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
                <v-expansion-panels>
                  <div class="heading_profitloss_th">
                    <div class="row">
                      <div class="col-4">
                        <div class="bheading-title">
                          <h6>Particulars</h6>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="bheading-title right_side padding_right_15">
                          <h6>Debit</h6>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="bheading-title right_side padding_right_15">
                          <h6>Credit</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-for="(data, index) in trail_balance" :key="index">
                    <div
                      v-if="data.mainMasterReservedName !== 'Profit & Loss A/c' && data.mainMasterReservedName !== 'Difference in Opening Balances'" 
                    >
                      <v-expansion-panel>
                        <v-expansion-panel-header>
                          <div
                            class="heading_balancesheet_td new_balancesheet_td"
                          >
                            <div class="row">
                              <div class="col-4">
                                <div class="tdheading-title">
                                  <h6>{{ data.mainMasterReservedName }}</h6>
                                </div>
                              </div>
                              <div class="col-4">
                                <div class="tdheading-title right_side">
                                  <h6 class="">
                                    <span class="font_sans">{{ symbol }}</span>
                                    {{
                                      handleMinusSymbol(data.totalDebitBal)
                                        | formatNumberParties
                                    }}
                                  </h6>
                                </div>
                              </div>
                              <div class="col-4">
                                <div class="tdheading-title right_side">
                                  <h6 class="">
                                    <span class="font_sans">{{ symbol }}</span>
                                    {{
                                      handleMinusSymbol(data.totalCreditBal)
                                        | formatNumberParties
                                    }}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <div class="row">
                            <div class="col-12">
                              <div class="">
                                <div class="balancesheet_under_table">
                                  <table class="table balancesheet_table">
                                    <tr>
                                      <th>Particulars</th>
                                      <th style="text-align: right">Debit</th>
                                      <th style="text-align: right">Credit</th>
                                    </tr>
                                    <tr
                                      v-for="(
                                        inner_assets, index1
                                      ) in data.trailLedgers"
                                      :key="index1"
                                    >
                                      <td>
                                        <router-link
                                          :to="`${inner_assets.url}`"
                                          class="onclick_details"
                                          >{{
                                            inner_assets.parent
                                          }}</router-link
                                        >
                                      </td>
                                      <td align="right">
                                        <span class="font_sans">{{
                                          symbol
                                        }}</span>
                                        {{ inner_assets.totalDebitAmount }}
                                      </td>
                                      <td align="right">
                                        <span class="font_sans">{{
                                          symbol
                                        }}</span>
                                        {{ inner_assets.totalCreditAmount }}
                                      </td>
                                    </tr>
                               
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </div>
                    <div v-else>
                      <div v-if="data.mainMasterReservedName === 'Difference in Opening Balances'">
                        <div class="set-balancesheet-profitloss-bottom">
                          <div class="row">
                            <div class="col-4">
                              <div
                                class="profit-loss-page-redirect-text-balancesheet"
                              >
                              Difference in Opening Balances
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="tdheading-title right_side">
                                <h6 class="">
                                  <span class="font_sans">{{ symbol }}</span>
                                  {{
                                    handleMinusSymbol(data.totalDebitBal)
                                      | formatNumberParties
                                  }}
                                </h6>
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="tdheading-title right_side">
                                <h6 class="">
                                  <span class="font_sans">{{ symbol }}</span>
                                  {{
                                    handleMinusSymbol(data.totalCreditBal)
                                      | formatNumberParties
                                  }}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-else>
                        <div class="set-balancesheet-profitloss-bottom">
                          <div class="row">
                            <div class="col-4">
                              <div
                                class="profit-loss-page-redirect-text-balancesheet"
                              >
                                <router-link to="/profit-loss"
                                  >Profit & Loss A/c</router-link
                                >
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="tdheading-title right_side">
                                <h6 class="">
                                  <span class="font_sans">{{ symbol }}</span>
                                  {{
                                    handleMinusSymbol(data.totalDebitBal)
                                      | formatNumberParties
                                  }}
                                </h6>
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="tdheading-title right_side">
                                <h6 class="">
                                  <span class="font_sans">{{ symbol }}</span>
                                  {{
                                    handleMinusSymbol(data.totalCreditBal)
                                      | formatNumberParties
                                  }}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>
                  <div class="set-trial-balance-total-bottom" v-if="this.TotalBalSum">
                    <div class="row">
                      <div class="col-4">
                        <div class="">
                          <strong>Total:</strong>
                        </div>
                      </div>
                      <div class="col-4">
                        <div
                          class="right_side right-margin-set-trial-balance-amount-bottom-debit"
                        >
                          <span class="font_sans">{{ symbol }}</span>
                          {{ Math.abs(this.TotalBalSum.totalDebitBalSum) }}
                        </div>
                      </div>
                      <div class="col-4">
                        <div
                          class="right_side right-margin-set-trial-balance-amount-bottom-credit"
                        >
                          <span class="font_sans">{{ symbol }}</span>
                          {{ this.TotalBalSum.totalCreditBalSum }}
                        </div>
                      </div>
                    </div>
                  </div>
                </v-expansion-panels>
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
import BackButton from "../components/BackButton.vue";
//you need to import the CSS manually
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  name: "daybook",
  components: { DateRangePicker, BackButton },
  data() {
    let startDate = moment(
      String(localStorage.getItem("first_date_range_start_date"))
    );
    let endDate = moment(
      String(localStorage.getItem("first_date_range_end_date"))
    );
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
        {
          text: "Particulars",
          value: "particulars",
          align: "left",
          sortable: true,
        },
        { text: "Debit", value: "debit", align: "right" },
        { text: "Credit", value: "credit", align: "right" },
      ],
      trail_balance: [],
      new_loading: true,
      openingValueTotal: 0,
      openingCredit: 0,
      openingDebit: 0,
      isPaid: "0",
      TotalBalSum: 0,
      symbol: "",
    };
  },
  methods: {
    handleMinusSymbol(value) {
      const stringValue = String(value);
      if (stringValue && stringValue.includes("-")) {
        return stringValue.replace("-", "");
      } else {
        return stringValue;
      }
    },

    freeusergeneratePdf() {
      GoogleAnalytics.trial_balance_reports_screen_viewpdf("viewpdf");
    },
    generatePdf() {
      GoogleAnalytics.trial_balance_reports_screen_viewpdf("viewpdf");
      const data = {
        startDate: moment(String(this.$refs.picker.start)).format("YYYY-MM-DD"),
        endDate: moment(String(this.$refs.picker.end)).format("YYYY-MM-DD"),
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getPDFForTrialBalanceReportsGo(data, headers)
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
    update() {
      GoogleAnalytics.trial_balance_reports_screen_datepicker(
        moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        moment(String(this.$refs.picker.end)).format("yyyy-MM-DD")
      );
      this.trialbalance();
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
        if (moment(new_date_end_date).format("MM") == 2) {
            var isLeapYear = moment(new_date_end_date).isLeapYear();
            if(isLeapYear){
                var StrGetEndDay = "29";
                var StrGetEndMonthNumber = moment(new_date_end_date).format("MM");
                var StrGetEndYearNumber = moment(new_date_end_date).format("yyyy");
                new_date_end_date = moment(String(StrGetEndMonthNumber + "-"+ StrGetEndDay +"-"+ StrGetEndYearNumber),'MM-DD-YYYY').format("YYYY-MM-DD")
            }else{
                var StrGetEndDay = "28";
                var StrGetEndMonthNumber = moment(new_date_end_date).format("MM");
                var StrGetEndYearNumber = moment(new_date_end_date).format("yyyy");
                new_date_end_date = moment(String(StrGetEndMonthNumber + "-"+ StrGetEndDay +"-"+ StrGetEndYearNumber),'MM-DD-YYYY').format("YYYY-MM-DD")
            }
        }
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
      GoogleAnalytics.trial_balance_reports_screen_datepicker(
        moment(String(new_date_start_date)).format("yyyy-MM-DD"),
        moment(String(new_date_end_date)).format("yyyy-MM-DD")
      );
      this.trialbalance();
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
        if (moment(new_date_end_date).format("MM") == 2) {
            var isLeapYear = moment(new_date_end_date).isLeapYear();
            if(isLeapYear){
                var StrGetEndDay = "29";
                var StrGetEndMonthNumber = moment(new_date_end_date).format("MM");
                var StrGetEndYearNumber = moment(new_date_end_date).format("yyyy");
                new_date_end_date = moment(String(StrGetEndMonthNumber + "-"+ StrGetEndDay +"-"+ StrGetEndYearNumber),'MM-DD-YYYY').format("YYYY-MM-DD")
            }else{
                var StrGetEndDay = "28";
                var StrGetEndMonthNumber = moment(new_date_end_date).format("MM");
                var StrGetEndYearNumber = moment(new_date_end_date).format("yyyy");
                new_date_end_date = moment(String(StrGetEndMonthNumber + "-"+ StrGetEndDay +"-"+ StrGetEndYearNumber),'MM-DD-YYYY').format("YYYY-MM-DD")
            }
        }
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
      GoogleAnalytics.trial_balance_reports_screen_datepicker(
        moment(String(new_date_start_date)).format("yyyy-MM-DD"),
        moment(String(new_date_end_date)).format("yyyy-MM-DD")
      );
      this.trialbalance();
    },
    trialbalance(type) {
      this.symbol = localStorage.getItem("symbol");
      var self = this;
      this.loading = true;
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        requestFrom: "WEB",
        startDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        endDate: moment(String(this.$refs.picker.end)).format("yyyy-MM-DD"),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getTrialBalanceReportsGo(data, headers)
        .then((response) => {
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseData == "200") {
            const data1 = {
              _userId: localStorage.getItem("customerId"),
              company_id: localStorage.getItem("companyId"),
              startLimit: 0,
              endLimit: 20,
              requestFrom: "WEB",
              startDate: moment(String(this.$refs.picker.start)).format(
                "yyyy-MM-DD"
              ),
              endDate: moment(String(this.$refs.picker.end)).format(
                "yyyy-MM-DD"
              ),
              searchTerm: "",
            };
            const headers1 = {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              token: localStorage.getItem("webAuthToken"),
            };
            Api.getStockItemsGo(data1, headers1).then((stockresponse) => {
              this.openingValueTotal =
                stockresponse.data.data.totalOpeningValue;

              for (let [key, value] of Object.entries(
                response.data.data.list
              )) {
                const data = {
                  requestFrom: "WEB",
                  _userId: localStorage.getItem("customerId"),
                  company_id: localStorage.getItem("companyId"),
                  startDate: moment(String(this.$refs.picker.start)).format(
                    "yyyy-MM-DD"
                  ),
                  endDate: moment(String(this.$refs.picker.end)).format(
                    "yyyy-MM-DD"
                  ),
                  GroupName: value.mainMasterReservedName,
                  startLimit: 0,
                  endLimit: 20,
                };
                const headers = {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                  token: localStorage.getItem("webAuthToken"),
                };
                Api.getGroupSummaryGo(data, headers).then((response1) => {
                  for (let [key1, value1] of Object.entries(
                    response1.data.data.list
                  )) {
                    response1.data.data.list[key1].totalCreditAmount =
                      new Intl.NumberFormat("en-IN", {
                        minimumFractionDigits: 2,
                      }).format(
                        Math.abs(
                          response1.data.data.list[key1].totalCreditAmount
                        )
                      );
                    response1.data.data.list[key1].totalDebitAmount =
                      new Intl.NumberFormat("en-IN", {
                        minimumFractionDigits: 2,
                      }).format(
                        Math.abs(
                          response1.data.data.list[key1].totalDebitAmount
                        )
                      );
                    if (value1.hasChild == 1) {
                      // Group URL
                      response1.data.data.list[key1].url =
                        "/reportDetails/" + encodeURIComponent(value1.parent);
                    } else {
                      // Direct Redirect to item page
                      response1.data.data.list[key1].url =
                        "/parties/" + value1.ledgerGuid;
                    }
                  }
                  if (value.mainMasterReservedName == "Current Assets") {
                    // alert("hi")
                    if (this.openingValueTotal < 0) {
                      this.openingCredit = new Intl.NumberFormat("en-IN", {
                        minimumFractionDigits: 2,
                      }).format(Math.abs(this.openingValueTotal));
                      this.openingDebit = "0";
                    } else {
                     

                      this.openingCredit = "0";
                      this.openingDebit = new Intl.NumberFormat("en-IN", {
                        minimumFractionDigits: 2,
                      }).format(Math.abs(this.openingValueTotal));
                    }

                    const Receivables = {
                      parent: "Opening Stock",
                      ledgerGuid: "",
                      hasChild: "0",
                      openingBalance: { credit: "0", debit: "0" },
                      totalCreditAmount: this.openingCredit,
                      totalDebitAmount: this.openingDebit,
                      openingBalance: {
                        credit: this.openingCredit,
                        debit: this.openingDebit,
                      },
                      url: "/openingstock",
                    };
                    response1.data.data.list.splice(0, 0, Receivables);
                  }

                  response.data.data.list[key].trailLedgers =
                    response1.data.data.list;
                  response.data.data.list[key].totaldebitBal = Math.abs(
                    response.data.data.list[key].totaldebitBal
                  );
                  response.data.data.list[key].totalcreditBal = Math.abs(
                    response.data.data.list[key].totalcreditBal
                  );
                });
              }
            });
            setTimeout(() => {
              this.loading = false;
              this.new_loading = false;
              console.log(response.data.data.list, "trial response");
              this.trail_balance = response.data.data.list;
              this.TotalBalSum = response.data.data;
            }, 500);
          } else {
            this.loading = false;
            this.new_loading = false;
            this.trail_balance = [];
          }
          // }
        })

        .catch(() => {
          this.loading = false;
          this.new_loading = false;
        });
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD MMM yyyy");
      }
    },
  },
  mounted() {
    this.isPaid = localStorage.getItem("isPaid");
    this.trialbalance();
    GoogleAnalytics.trial_balance_reports_screen_listing();
  },
};
</script>
