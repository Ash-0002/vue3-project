/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
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
    <!--start first card box-->
    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-3 col-lg-12 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0 company_heading_title">
            <span class="company_heading_back_button">
              <BackButton />
            </span>
            <h3 id="" class="partyName">My eInvoices</h3>
          </div>
        </div>
        <div class="col-xl-9 col-lg-12 col-12">
          <ul class="new_set_dropdown_with_gross">
            <li class="marginright25">
              <p class="heading_dropdown_gross-all">Sort By</p>
              <ul class="sortby_filter only_filter_icon">
                <li @click="activate('')" :class="{ active: active_el == '' }">
                  All
                </li>
                <li
                  @click="activate('1')"
                  :class="{ active: active_el == '1' }"
                >
                  Generated
                </li>
                <li
                  @click="activate('-2')"
                  :class="{ active: active_el == '-2' }"
                >
                  Cancelled
                </li>
                <li
                  @click="activate('-1')"
                  :class="{ active: active_el == '-1' }"
                >
                  Rejected
                </li>
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
                <div class="row align-items-center">
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

                  <div class="col-lg-9 col-12 col-sm-12 col-12">
                    <ul
                      class="dashboard_sales_dropdown new_search_export_button parties_addbutton_top"
                    >
                    </ul>

                    <!-- <ul class="new_sales_top_table_part new_search_export_button">
                                            <li class="">
                                            <div class="mobile_dropdown_100">
                                                <div class="bottom_download">
                                                    <select name="" id="" class="form-select salesFilter sales_receivables_dropdown commondropdownall">
                                                    <option value="Export">Export</option>
                                                    <option value="pdf">PDF</option>
                                                        <option value="excel">Excel</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                        </ul> -->
                  </div>
                </div>
                <div class="show_entries_for_table new_show_entries_for_table my-voucher-table-overflow-visible">
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
                    :sort-by="null"
                    :sort-desc="false"
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
                      <td v-if="source !== 'sf'">
                        <!-- <div v-if="isPaid == '' || isPaid == null">
                                                <a
                                                    v-b-modal.customerstatus-popup
                                                    href="javascript:void(0);"
                                                    class="onclick_details"
                                                    >{{ item.ledgerName }}
                                                </a>
                                            </div> -->
                        <div>
                          <router-link
                            :to="`${item.url}`"
                            class="onclick_details"
                            >{{ item.ledgerName }}</router-link
                          >
                        </div>
                      </td>
                      <td v-else>
                        <a href="javascript:void(0);" class="onclick_details"
                          >{{ item.ledgerName }}
                        </a>
                      </td>
                    </template>
                    <template v-slot:item.isTransfer_name="{ item }">
                      <td :class="`${item.isTransfer_class}`">
                        <p>{{ item.isTransfer_name }}</p>
                      </td>
                    </template>
                    <template v-slot:item.activeFrom="{ item }">
                      <td>
                        <p>{{ format_date(item.createdAt) }}</p>
                      </td>
                    </template>
                    <template v-slot:item.voucherDate="{ item }">
                      <td>
                        <p>{{ format_date(item.voucherDate) }}</p>
                      </td>
                    </template>
                    <template v-slot:item.status_name="{ item }">
                      <td :class="`${item.status_class}`">
                        <p>{{ item.status_name }}</p>
                        <div class="rejected-message-caption">
                                          <span>
                                            {{ item.transferComment }}
                                          </span>
                                        </div>
                      </td>
                    </template>
                    <template v-slot:item.action="{ item }">
                      <td align="center">
                        <a
                          v-on:click="deleteLedger(item._id, item)"
                          class="delete_icon_reports"
                        >
                          <i
                            v-if="item.isTransfer == '0'"
                            class="fa fa-trash deleteIcon text-danger"
                          ></i>
                          <!-- <i v-if=" item.status_name === 'Pending' && item.approvalStatus =='0' " class="fa fa-star deleteIcon text-success"></i> -->
                        </a>
                      </td>
                    </template>
                    <template v-slot:item.totalAmount="{ item }">
                        <td align="right"><p><span class="font_sans">{{ symbol }}</span> {{Math.abs(item.totalAmount) | formatNumberParties}}</p></td>
                    </template>
                    <template v-slot:item.pdf="{ item }">
                      <td align="center">
                        <p v-if ="isPaid =='' || isPaid == null" 
                        v-b-modal.customerstatus-popup>
                        <a @click="freeusergeneratePdf()" class="pdf_a_download DwonloadPDFImage">
                          <img
                            src="/assets/images/1.0/svgs/pdf_download.svg"
                            class="img-fluid"
                          />
                          PDF
                        </a>
                      
                      </p>
                        <p v-else>
                        <a @click="eInvoicePdf(item._id)" class="pdf_a_download DwonloadPDFImage">
                          <img
                            src="/assets/images/1.0/svgs/pdf_download.svg"
                            class="img-fluid"
                          />
                          PDF
                        </a>
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
  // return numeral(value).format("0," + localStorage.getItem('amountformate')); // displaying other groupings/separators is possible, look at the docs
  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(
    value
  );
});
// import Vue from "vue";
import axios from "axios";
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
      active_el: "",
      active_date: "",
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
        // 'This Quarter': [new Date(new Date().getFullYear(), Math.floor((new Date().getMonth() / 3)) * 3 - 3, 1), new Date(new Date(new Date().getFullYear(), Math.floor((new Date().getMonth() / 3)) * 3 - 3, 1).getFullYear(), new Date(new Date().getFullYear(), Math.floor((new Date().getMonth() / 3)) * 3 - 3, 1).getMonth() + 3, 0)],
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
        { text: "IRNAck No", value: "irnAckNo" },
        { text: "Name", value: "partyLedgerName" },
        { text: "Date", value: "voucherDate" },
        { text: "Invoice No", value: "voucherNumber" },
        { text: "Amount", value: "totalAmount", sortable:false ,align : "right"},
        { text: "Sync Status", value: "isTransfer_name", sortable: false },
        { text: "eInvoices Status", value: "status_name", sortable: false },
        { text: 'Download',align: 'center', value: 'pdf',  sortable: false, }

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
      symbol : "",
      // sortBy: 'ledgerName',
      // orderBy: '',
      sortBy: "activeFrom",
      orderBy: -1,
      selectfilter: "",
      finalfilter: "",
      showInside: false,
      dotshow: 0,
      ledgersoptions: ["Ledger 1", "Ledger 2", "Ledger 3"],
      isPaid: "",
      call_function: "0",
      source: "",
      isWrite_isLedger: true,
      isEInvoiceStatus: true,
      ewayReadPermission: false,
      eInvoiceReadPermission: false,
      ewayWritePermission: false,
      eInvoiceWritePermission: false,
      parentUserId: localStorage.getItem("_parentUserId"),
      customerId: localStorage.getItem("customerId"),
    };
  },
  watch: {
    page: function () {
      this.options.page = this.page;
      this.readDataFromAPI("", this.sortBy, this.orderBy);
      GoogleAnalytics.my_ledgers_reports_screen_pagination(this.options.page);
    },

    "options.itemsPerPage"() {
      // this.options.page = this.page;
      this.page = 1;
      this.options.page = 1;
      this.readDataFromAPI("", this.sortBy, this.orderBy);
      // console.log(`hehehe`);
      if (this.call_function == "1") {
        this.call_function = "1";
        GoogleAnalytics.my_ledgers_reports_screen_Rows_Per_Page(
          this.options.itemsPerPage
        );
      } else {
        this.call_function = "1";
      }
    },
    value(val) {
      this.selectedHeaders = val;
      // console.log(this.selectedHeaders[0].value);
    },
    options: {
      handler() {
        //this.myLedger();
        // this.readDataFromAPI("", this.sortBy, this.orderBy);
        GoogleAnalytics.my_ledgers_reports_screen_listing();
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
    this.isWrite_isLedger = JSON.parse(
      localStorage.getItem("isWrite_isLedger")
    );
    window.addEventListener("storageChanged", () => {
      this.isWrite_isLedger = JSON.parse(
        localStorage.getItem("isWrite_isLedger")
      );
    });
  },
  methods: {
    async getUserPermission() {
      const data = {
        mainUserId: this.parentUserId ? this.parentUserId : this.customerId,
        subUserId: this.customerId ? this.customerId : "",
        _userId: this.customerId ? this.customerId : "",
        company_id: localStorage.getItem("companyId"),
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      try {
        const response = await Api.getUserPermission(data, headers);
        const responseDataa = response.data.data;
        this.eInvoiceReadPermission = responseDataa.isRead.isEInvoice;
        this.ewayReadPermission = responseDataa.isRead.isEway;
        this.ewayWritePermission = responseDataa.isWrite.isEway;
        this.eInvoiceWritePermission = responseDataa.isWrite.isEinvoice;
      } catch (error) {
        console.error("Error fetching user permissions:", error);
      }
    },
    eInvoicePdf(v_id){
      const data = {
        voucherId: v_id,
      company_id: localStorage.getItem("companyId"),
      _userId: localStorage.getItem("customerId"),
      requestFrom: 'WEB',
      isEinvoice: this.isEInvoiceStatus
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),

      }
      if(this.parentUserId == ""){
        Api.getMyVoucherPDF(data, headers)
      .then((response)=>{
        if(response.data.status == 200){
          this.pdfUrl = response.data.data.pdf;
              localStorage.setItem("pdfUrl", this.pdfUrl);
              window.open(window.location.origin + "/pdfNew");
        }


      })
      .catch((err)=>{
        Common.getStatusForActionFailed(err.response.status);
        this.loading = false
      })
      }
      else if(this.parentUserId && this.eInvoiceReadPermission){
        Api.getMyVoucherPDF(data, headers)
      .then((response)=>{
        if(response.data.status == 200){
          this.pdfUrl = response.data.data.pdf;
              localStorage.setItem("pdfUrl", this.pdfUrl);
              window.open(window.location.origin + "/pdfNew");
        }
      })
      .catch((err)=>{
        Common.getStatusForActionFailed(err.response.status);
        this.loading = false
      })
      }
    },
    activate: function (el) {
      if (el === "-1" || el === "3") {
        this.dotshow = 1;
      } else {
        this.dotshow = 0;
      }
      this.active_el = el;
      this.select_value = el;
      this.finalfilter = el;
      this.selectfilter = el;
      this.readDataFromAPI();
      //   this.readDataFromAPI("", el, this.select_value);
      if (el === "0") {
        GoogleAnalytics.my_ledgers_reports_screen_filter("Pending");
      } else if (el === "1") {
        GoogleAnalytics.my_ledgers_reports_screen_filter("Completed");
      } else if (el === "-1") {
        GoogleAnalytics.my_ledgers_reports_screen_filter("Rejected");
      } else if (el === "3") {
        GoogleAnalytics.my_ledgers_reports_screen_filter("Cancelled");
      } else {
        GoogleAnalytics.my_ledgers_reports_screen_filter("All");
      }
    },
    show() {
      this.showInside = true;
    },
    hide() {
      // console.log('hide')
      this.showInside = false;
    },
    closeEvent() {
      //   console.log('close event called')
      this.hide();
    },
    activatedate: function (date) {
      if (date === "oned") {
        // one day
        GoogleAnalytics.my_ledgers_reports_screen_date_filter("1D");
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
        GoogleAnalytics.my_ledgers_reports_screen_date_filter("1W");
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
        GoogleAnalytics.my_ledgers_reports_screen_date_filter("1M");
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
        GoogleAnalytics.my_ledgers_reports_screen_date_filter("3M");
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
        GoogleAnalytics.my_ledgers_reports_screen_date_filter("1Y");
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
        GoogleAnalytics.my_ledgers_reports_screen_date_filter("2Y");
        var new_date_start_date = moment()
          String(
            new Date(
              String(localStorage.getItem("first_date_range_start_date"))
            )
          ).format("yyyy-MM-DD");
          this.dateRange.startDate = new_date_start_date;
          this.dateRange.endDate = new_date_end_date;
          this.$refs.picker.start = new_date_start_date;
          this.$refs.picker.end = new_date_end_date;
        }else if (date === "max") {
          // max date
          GoogleAnalytics.my_ledgers_reports_screen_date_filter("Max");
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
        // alert(days_mounted);
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
       // myLedger(type) {
        handleBlur() {
            const type = "search";
            GoogleAnalytics.my_ledgers_reports_screen_search(this.search);
            this.readDataFromAPI(type);
        },
        filterchange(event) {
            this.selectfilter = event.target.value;
            this.readDataFromAPI();
            console.log(event.target.value);

        },

        updateSort(byDesc, event) {
            this.options.page = this.page;
            if (byDesc == 'by') {
                this.sortBy = event;
                this.orderBy = -1;
            } else if (byDesc == 'desc') {
                if (event == true) {
                    this.orderBy = 1;
                } else {
                    this.orderBy = -1;
                }
            }
            this.readDataFromAPI("", this.sortBy, this.orderBy);
            GoogleAnalytics.my_ledgers_reports_screen_sorting(this.sortBy,this.orderBy);
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
            
            this.readDataFromAPI();

        },
        update() {
            localStorage.setItem("date_range_start_date", moment(String(this.$refs.picker.start)).format('yyyy-MM-DD'));
            localStorage.setItem("date_range_end_date", moment(String(this.$refs.picker.end)).format('yyyy-MM-DD'));
            GoogleAnalytics.my_ledgers_reports_screen_date_filter("Custom");
            this.readDataFromAPI();
            this.date_setting();
            
        },
        format_date(value) {
            if (value) {
                return moment(String(value)).format('DD MMM yyyy')
            }
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
      // alert(days_mounted);
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
    // myLedger(type) {
    readDataFromAPI(
      type = "",
      sortBy = "",
      orderBy = "",
      select_value = "Show All"
    ) {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      this.symbol = localStorage.getItem('symbol');
      if (type === "search") {
        this.options.page = 1;
      }
      if (this.selectfilter === "") {
        this.finalfilter = [1,-1,-2];
      } else {
        this.finalfilter = [parseInt(this.selectfilter)];
      }

      const { page, itemsPerPage } = this.options;
      console.log("Page Number", page, itemsPerPage);
      let pageNumber = page - 1;
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        requestFrom: "WEB",
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        startDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        endDate: moment(String(this.$refs.picker.end)).format("yyyy-MM-DD"),
        searchTerm: this.search,
        isEinvoiceStatus : this.finalfilter
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      this.myledgers = [];
      
      Api.getMyEInvoiceVouchers(data, headers)
        .then((response) => {
       

            console.log(response);
            for (let [key, value] of Object.entries(response.data.data.list)) {
              response.data.data.list[key].url = "#"

              if(response.data.data.list[key].isTransfer == 0){
                response.data.data.list[key].isTransfer_name = "Not synced in tally";
                response.data.data.list[key].isTransfer_class = "";
              }else if(response.data.data.list[key].isTransfer == -1){
                response.data.data.list[key].isTransfer_name = "Voucher rejected by Tally";
                response.data.data.list[key].isTransfer_class = "";
              }else if(response.data.data.list[key].isTransfer == 1){
                response.data.data.list[key].isTransfer_name = "Synced";
                response.data.data.list[key].isTransfer_class = "";
              }else if(response.data.data.list[key].isTransfer == 3){
                response.data.data.list[key].isTransfer_name = "Voucher Cancelled";
                response.data.data.list[key].isTransfer_class = "";
              }
              
            

              if (response.data.data.list[key].isEInvoiceStatus == 1) {
                response.data.data.list[key].status_name = "Generated";
                response.data.data.list[key].status_class = "status-generated";
              } else if (response.data.data.list[key].isEInvoiceStatus == -2) {
                response.data.data.list[key].status_name = "Cancelled";
                response.data.data.list[key].status_class = "status-cancelled";
              } else if (response.data.data.list[key].isEInvoiceStatus == -1) {
                response.data.data.list[key].status_name = "Rejected";
                response.data.data.list[key].status_class = "status-rejected";
              }
              
            }
           
           

            let totalPages = Math.ceil(
              response.data.data.totalCount / itemsPerPage
            );
            this.loading = false;
            this.new_loading = false;
            this.myledgers = response.data.data.list;
            this.totalmyledgers = response.data.data.totalCount;
            this.numberOfPages = totalPages;
          // }
        })

        .catch((err) => {
          // alert("ERROR");
          // Common.getStatusForActionFailed(err.data.status);
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },
    convertDateFormat(currentFormat, convertedFormat, date) {
      return moment(date, currentFormat).format(convertedFormat);
    },
    handleBlur() {
      const type = "search";
      GoogleAnalytics.my_ledgers_reports_screen_search(this.search);
      this.readDataFromAPI(type);
    },
    filterchange(event) {
      this.selectfilter = event.target.value;
      this.readDataFromAPI();
      console.log(event.target.value);
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
      GoogleAnalytics.my_ledgers_reports_screen_sorting(
        this.sortBy,
        this.orderBy
      );
    },

    deleteLedger(ledgerId, item) {
      this.customerfullName = localStorage.getItem("customerfullName")
      const data = {
              _userId: localStorage.getItem("customerId"),
              ledgerId: ledgerId, 
              requestFrom: "WEB",
              isTransfer: 3,
              collectionName: "ledgersSync",
              transferComment: "Cancelled by "+(this.customerfullName),
            }

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      if (this.parentUserId == "") {
        Api.updateLedgerGo(data, headers)
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
      } else {
        if (this.eInvoiceWritePermission) {
          Api.updateLedgerGo(data, headers)
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
        }
      };
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
    update() {
      localStorage.setItem(
        "date_range_start_date",
        moment(String(this.$refs.picker.start)).format("yyyy-MM-DD")
      );
      localStorage.setItem(
        "date_range_end_date",
        moment(String(this.$refs.picker.end)).format("yyyy-MM-DD")
      );
      GoogleAnalytics.my_ledgers_reports_screen_date_filter("Custom");
      this.readDataFromAPI();
      this.date_setting();
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD MMM yyyy");
      }
    }
  },
  mounted() {
    this.sortBy = "";
    this.getUserPermission()
    this.isPaid = localStorage.getItem("isPaid");
    this.source = localStorage.getItem("source");
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

<style scoped>
.deleteIcon {
  font-size: 13px;
}
</style>
