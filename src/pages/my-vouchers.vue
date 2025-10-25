/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section>
    <div v-if="new_loading" class="loader-wrapper">
      <div class="loading_css">
        <img src="assets/images/1.0/brand/Loader-GIF-Final.gif" class="img-fluid loader_css" height="40" width="40" />
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
            <h3 id="" class="partyName">My Vouchers</h3>
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
                <li @click="activate('0')" :class="{ active: active_el == '0' }">
                  Pending
                </li>
                <li @click="activate('1')" :class="{ active: active_el == '1' }">
                  Completed
                </li>
                <li @click="show" class="">
                  <p class="more_filter_text filter_relative">
                    More <i class="fa fa-chevron-down"></i>
                    <span v-if="dotshow" class="filter_dot"></span>
                  </p>
                </li>
                <div v-if="showInside" v-click-outside="closeEvent" class="without_inline_filter">
                  <ul class="dropdown_li_active">
                    <li @click="activate('-1')" v-click-outside="closeEvent" :class="{ active: active_el == '-1' }">
                      Rejected
                    </li>
                    <li @click="activate('3')" v-click-outside="closeEvent" :class="{ active: active_el == '3' }">
                      Cancelled
                    </li>
                  </ul>
                </div>
              </ul>
            </li>
            <li>
              <p class="heading_dropdown_gross-all">Date Filter</p>
              <div class="parties_datefilter_vue date_filter_new_flot_none">
                <span class="datepicker_left_arrow" @click="left_arrow()"><i class="fa fa-chevron-left"></i></span>
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
                <span class="datepicker_right_arrow" @click="right_arrow()"><i class="fa fa-chevron-right"></i></span>
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
                          <input v-model="search" v-on:keyup="handleBlur" placeholder="Search" />
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-9 col-12">
                    <ul
                      class="new_sales_top_table_part parties_ul_with_filter mb-4 voucher_type_div new_search_export_button">
                      <li>
                        <v-select v-model="value" :items="headers" label="Set Columns" multiple return-object>
                          <template v-slot:selection="{ item, index }">
                            <v-chip v-if="index === 0">
                              <span></span>
                            </v-chip>
                          </template>
                        </v-select>
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
                          <li v-for="user in users" :key="user.id">
                            <label>
                              <input @change="vouchertypeclick(user.id, $event)" type="checkbox" v-model="selected"
                                :value="user.id" :checked="user.action" />
                              <span>{{ user.name }}</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>

                <div class="show_entries_for_table new_show_entries_for_table my-voucher-table-overflow-visible">
                  <v-data-table :page="currentPage" :pageCount="numberOfPages" :headers="selectedHeaders"
                    :items="myledgers" :options.sync="options" dense :items-per-page="this.$store.state.Web1_Store.MyVouchers_itemsPerPage
                      " :server-items-length="totalmyledgers" :loading="loading" class="elevation-1" must-sort
                    :sort-by.sync="sortBy" @update:sort-by="updateSort('by', $event)"
                    @update:sort-desc="updateSort('desc', $event)" disable-pagination item-key="table_header_index"
                    ref="table" :hide-default-footer="true" @pagination="StoredPage"
                    @update:items-per-page="updateItemsPerPage" :footer-props="{
                      'items-per-page-options': [10, 25, 50, 100],
                      'items-per-page-text': 'products per page',
                    }">
                    <template v-slot:top="{ pagination, options, updateOptions }">
                      <v-data-footer :pagination="pagination" :options="options"
                        :items-per-page-options="[10, 25, 50, 100]" @update:options="updateOptions"
                        items-per-page-text="$vuetify.dataTable.itemsPerPageText" />
                    </template>

                    <template v-slot:item.partyLedgerName="{ item }">
                      <td>
                        <div v-if="item.url == 'e-way' || item.url == 'e-invoice' || item.url == 'e-way&e-invoice'">
                          <a href="javascript:void(0);" class="onclick_details" @click="
                            backentryPdf(item._id, item.url, item.isTransfer)
                            ">{{ item.partyLedgerName }}</a>
                        </div>
                        <div v-else-if="isPaid == '' || isPaid == null">
                          <a v-b-modal.customerstatus-popup href="javascript:void(0);" class="onclick_details">{{
                            item.partyLedgerName }}
                          </a>
                        </div>
                        <div v-else-if="(item.isTransfer == 1 || item.isTransfer == -1) && item.action != 'Cancel'">
                          <router-link v-if="(item.isTransfer == 1 || item.isTransfer == -1)" :to="getEditRoute(item)"
                            class="onclick_details">{{ item.partyLedgerName }}
                            <span class=""
                              style="position: relative; padding:3px;letter-spacing: normal; left: 20px;top: -1px;transform: translate(23px, 30px);transition: none;border:1px solid white;border-radius: 4px; font-size: 8px;font-weight: 500; background-color:whitesmoke;color: black;"
                              v-if="item.isOptional">Optional</span>
                          </router-link>
                          <router-link v-else :to="''" class="onclick_details">{{ item.partyLedgerName }}</router-link>
                        </div>
                        <div v-else>
                          <a v-if=" item.isTransfer == 0 && item.action != 'Cancel'" href="javascript:void(0);" @click="AlterClick(item)"
                            class="onclick_details">{{ item.partyLedgerName }}
                            <span class=""
                              style="position: relative; padding:3px;letter-spacing: normal; left: 20px;top: -1px;transform: translate(23px, 30px);transition: none;border:1px solid white;border-radius: 4px; font-size: 8px;font-weight: 500; background-color:whitesmoke;color: black;"
                              v-if="item.isOptional">Optional</span>
                        </a>
                          <router-link v-else :to="''" class="onclick_details">{{ item.partyLedgerName }}</router-link>
                        </div>
                        <!-- <div class="ChangeNumberMyvouchers">
                          <p>Change in Voucher number <i class="fa fa-exclamation-circle" aria-hidden="true"></i></p>
                          <div class="ChangeNumberMessageCaption">
                            <p>Before Sync - #Lkp123</p>
                            <p>After Sync - #21342</p>
                          </div>
                        </div> -->
                      </td>
                      <!-- <td>
                        <a href="javascript:void(0);" class="onclick_details"
                          >{{ item.partyLedgerName }}
                        </a>
                      </td> -->
                    </template>
                    <template v-slot:item.voucherNumber="{ item }">
                      <td>
                        <p>{{ item.voucherNumber }}</p>
                        <p class="eInvoiceLinkedInnerTable">{{ billStatus(item) }}</p>
                      </td>
                    </template>
                    <template v-slot:item.parent="{ item }">
                      <td>
                        <p>{{ item.parent }}</p>
                      </td>
                    </template>
                    <template v-slot:item.voucherDate="{ item }">
                      <td>
                        <p>{{ format_date(item.voucherDate) }}</p>
                      </td>
                    </template>
                    <template v-slot:item.totalAmount="{ item }">
                      <td>
                        <p>
                          <span class="font_sans">{{ symbol }}</span>
                          {{ Math.abs(item.totalAmount) | formatNumberParties }}
                        </p>
                      </td>
                    </template>
                    <template v-slot:item.isTransfer="{ item }">
                      <td :class="`${item.status_class}`">
                      <!-- <td class="status-rejected"> -->
                        <p>{{ item.status_name }}
                          <i v-if="item.status_name === 'Rejected'" class="fa fa-exclamation-circle" aria-hidden="true"></i>
                          <i v-else-if="item.action == 'Cancel' && item.isTransfer == 0" class="fa fa-exclamation-circle" aria-hidden="true"></i>
                        </p>
                        
                        <div class="rejected-message-caption">
                          <span v-if="item.status_name === 'Rejected'" class="forRejectedmessagecaption">
                            {{ item.transferComment }}  
                          </span>
                          <span v-else-if="item.action =='Cancel' && item.isTransfer == 0" class="forPendingmessagecaption">
                             Voucher cancelled, changes will reflect in next sync
                          </span>
                        </div>
                      </td>
                    </template>
                   <template v-slot:item.action="{ item }">
                    <td align="center" class="IconSetForMyvoucherAction">

                     <a
                        v-if="canShowEditIcon(item)"
                        class="edit_icon_reports"
                        href="getjavascript:void(0);"
                        @click.capture="handleClick(item)"
                      >
                        <i class="fa fa-pencil mr-2" title="Edit"></i>
                    </a>

                      <a
                        v-if="!item.isTransfer == 1 && item.action == ''"
                        @click="deleteLedger(item._id, item)"
                        class="delete_icon_reports"
                        title="Delete"
                      >
                        <i class="fa fa-trash"></i>
                      </a>
                      <a
                        v-else-if="item.isTransfer == -1"
                        @click="deleteLedger(item._id, item)"
                        class="delete_icon_reports"
                        title="Delete"
                      >
                        <i class="fa fa-trash"></i>
                      </a>

                      <a
                        v-else-if="!item.isTransfer == 1 && (item.action == 'Alter' || item.action == 'Cancel')"
                        @click="deleteLedger(item._id, item)"
                        class="delete_icon_reports"
                        title="Undo"
                      >
                        <i class="fa fa-undo" aria-hidden="true"></i>
                      </a>

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
        <div class="Cancelmodal-wrapper" v-if="showModal">
        <div class="Cancelmodal">
          <button class="close-btn" @click="closeModal">
            <img src="assets/images/1.0/png/closeicon.png" />
          </button>
          <div class="CancelModelHeadingPortionvouchers">
            <h2>Confirm Cancellation?</h2>
        </div>
          <p v-if="this.voucherData.isEwayStatus == 1" class="CancelModalBillNumber">Bill <span>#{{ billNumber }}</span></p>
          <p v-if="this.voucherData.isEwayStatus !== 1  && this.voucherData.isEInvoiceStatus == 1" class="CancelModalBillNumber">Bill <span>#{{ irnAckNo }}</span></p>
          <div class="RadioButtonPartPortion">
          <label class="Canceloption" v-for="(reason, index) in reasonCodeData" :key="index">
            <input
              type="radio"
              :value="reason.code"
              v-model="selectedReason"
            />
            {{ reason.description }}
          </label>
          <span class="error-validation" v-if="cancellEwayandEinvoiceError.selectedReason">{{cancellEwayandEinvoiceError.selectedReason}}</span>
        </div>
          <div class="remarks-box">
            <label>Remarks</label>
            <input
              type="text"
              v-model="remarks"
              placeholder="Write your remarks here"
            />
          </div>
          <span class="error-validation" v-if="cancellEwayandEinvoiceError.remarks">{{cancellEwayandEinvoiceError.remarks}}</span>
          <span class="error-validation" v-if="apiErrorForEway">{{apiErrorForEway}}</span>
          <span class="error-validation" v-if="apiErrorForEinvoice">{{apiErrorForEinvoice}}</span>
    
          <button v-if="this.voucherData.isEwayStatus == 1 && this.voucherData.isEInvoiceStatus !== 1" class="submit-btn" @click="cancelEwayandEinvoice">Yes, Cancel eWay
            <span v-show="isLoadingCancelButton" class="SpinColorWhite"><i class="fa fa-spinner fa-spin"></i></span>
          </button>
          <button v-if="this.voucherData.isEInvoiceStatus == 1 && this.voucherData.isEwayStatus !== 1" class="submit-btn" @click="cancelEwayandEinvoice">Yes, Cancel eInvoice
            <span v-show="isLoadingCancelButton" class="SpinColorWhite"><i class="fa fa-spinner fa-spin"></i></span>
          </button>
          <button v-if="this.voucherData.isEInvoiceStatus == 1 && this.voucherData.isEwayStatus == 1" class="submit-btn" @click="cancelEwayandEinvoice">Yes, Cancel eWay & eInvoice
            <span v-show="isLoadingCancelButton" class="SpinColorWhite"><i class="fa fa-spinner fa-spin"></i></span>
          </button>
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
  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
  }).format(value);
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
      users_voucherType: [
        {
          id: "Sales",
          name: "Sales",
          action: true,
        },
        {
          id: "Purchase",
          name: "Purchase",
          action: true,
        },
        {
          id: "SalesOrder",
          name: "Sales Order",
          action: true,
        },
        {
          id: "PurchaseOrder",
          name: "Purchase Order",
          action: true,
        },
        {
          id: "DebitNote",
          name: "Debit Note",
          action: true,
        },
        {
          id: "CreditNote",
          name: "Credit Note",
          action: true,
        },
        {
          id: "Receipt",
          name: "Receipt",
          action: true,
        },
        {
          id: "Payment",
          name: "Payment",
          action: true,
        },
        {
          id: "Journal",
          name: "Journal",
          action: true,
        },
        {
          id: "Contra",
          name: "Contra",
          action: true,
        },
      ],
      selected: [],
      users: [],
      vouchertype: false,
      startDate: startDate,
      endDate: endDate,
      active_el: "",
      dateRange: {
        startDate,
        endDate,
      },
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
          text: "Name",
          value: "partyLedgerName",
        },
        {
          text: "Voucher Number",
          value: "voucherNumber",
        },
        {
          text: "Voucher Type",
          value: "parent",
        },
        {
          text: "Date",
          value: "voucherDate",
        },
        {
          text: "Amount",
          value: "totalAmount",
          sortable: false,
        },
        {
          text: "Status",
          value: "isTransfer",
        },
        {
          text: "Action",
          value: "action",
          align: "center",
          sortable: false,
        },
      ],
      page: this.$store.state.Web1_Store.MyVouchers_page,
      totalmyledgers: 0,
      numberOfPages: 0,
      myledgers: [],
      value: [],
      selectedHeaders: [],
      loading: true,
      new_loading: true,
      options: {},
      search: "",

      sortBy: "voucherDate",
      orderBy: -1,
      selectfilter: "",
      finalfilter: "",
      symbol: "",
      showInside: false,
      dotshow: 0,
      voucherShowInside: false,
      isPaid: "",
      call_function: "0",
      source: "",
      voucher_Id: "",
      ewayReadPermission: false,
      eInvoiceReadPermission: false,
      ewayWritePermission: false,
      eInvoiceWritePermission: false,
      parentUserId: localStorage.getItem("_parentUserId"),
      customerId: localStorage.getItem("customerId"),
      ServerStatus: localStorage.getItem("server"),
      showModal: false,
      reasonCodeData: [],
      selectedReason: '',
      remarks: '',
      voucherData: [],
      billNumber: '',
      irnAckNo: '',
      cancellEwayandEinvoiceError: [],
      isLoadingCancelButton: false,
      apiErrorForEinvoice: '',
      apiErrorForEway: '',
      ewayEinvoiceVeriable: ''
    };
  },
  computed: {
    selectAll: {
      get: function () {
        return this.users ? this.selected.length == this.users.length : false;
      },

      set: function (value) {
        var selected = [];
        if (value) {
          this.users.map((user) => {
            selected.push(user.id);
          });
        }
        this.selected = selected;
        this.readDataFromAPI();
      },
    },
    currentPage() {
      return this.$store.state.Web1_Store.MyVouchers_page;
    },
  },
  watch: {
    page: function () {
      this.options.page = this.page;
      this.readDataFromAPI();
      GoogleAnalytics.my_vouchers_reports_screen_pagination(this.options.page);
    },

    "options.itemsPerPage"() {
      setTimeout(() => {
        const StartIndex =
          (this.$store.state.Web1_Store.MyVouchers_page - 1) *
          this.$store.state.Web1_Store.MyVouchers_itemsPerPage;
        const endIndex =
          StartIndex + this.$store.state.Web1_Store.MyVouchers_itemsPerPage;
        const Difference = endIndex - this.totalmyledgers;

        if (Difference > this.totalmyledgers) {
          this.page = 1;
          this.options.page = 1;
        } else {
          this.page = this.$store.state.Web1_Store.MyVouchers_page;
          this.options.page = this.page;
        }
      }, 1000);
      this.readDataFromAPI();

      if (this.call_function == "1") {
        this.call_function = "1";
        GoogleAnalytics.my_vouchers_reports_screen_Rows_Per_Page(
          this.options.itemsPerPage
        );
      } else {
        this.call_function = "1";
      }
    },

    options: {
      handler() {
        GoogleAnalytics.my_vouchers_reports_screen_listing();
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
     AlterClick(item) {
      if(item.action == 'Alter'){
        GoogleAnalytics.My_Voucher_Edit_Voucher();
      }
      this.$router.push(this.getEditRoute(item));
     },
     handleClick(item) {
      if(item.action == 'Alter'){
        GoogleAnalytics.My_Voucher_edit_Icon();
      }
      const targetRoute = this.getEditRoute(item);
      this.$router.push(targetRoute)
    },
     getEditRoute(item) {
      // if(item.action == 'Cancel' && item.isModified && item.isTransfer == 0) {
      //   return;
      // }

      const excludedParents = ['Payment', 'Receipt', 'Journal', 'Contra'];

      const shouldSendQuery =
        !excludedParents.includes(item.parent) && (
          (item.isTransfer === 0 && item.isModified === true && item.action === 'Alter') ||
          (item.isTransfer === -1 && item.isModified === true && item.action === 'Alter') ||
          // (item.isTransfer === 1 && item.isModified === false && item.action === '') ||
          // (item.isTransfer === 1 && item.isModified === true && item.action === 'Alter') ||
          (item.isTransfer === 1 && item.isModified === true && item.action === 'Cancel')
        );

        console.log(shouldSendQuery,"shouldsendquery");
      return {
        path: item.url,
        ...(shouldSendQuery ? { query: { isEdit: 1 } } : {query: { from: "voucher" } })
      };
    },

    canShowEditIcon(item) {
      return (
        // item.isTransfer !== -1 &&
        item.isTransfer !== 3 &&
        item.isEwayStatus !== 1 &&
        item.isEInvoiceStatus !== 1 &&
        !['Payment', 'Receipt', 'Journal', 'Contra'].includes(item.parent) && 
        !(item.action == '' && !item.isModified && item.isTransfer == 1) &&
        !(item.action == 'Cancel' && item.isModified && item.isTransfer == 0) &&
        !(item.action == 'Cancel' && item.isModified && item.isTransfer == 1) &&
        !(item.action == 'Alter' && item.isModified && item.isTransfer == 1) 

      );
    },

    billStatus(item) {
      const { isEInvoiceStatus, isEwayStatus } = item;

      if (isEInvoiceStatus === 1 && isEwayStatus === 1) {
        return "(Eway & EInvoice Linked)";
      }
      if (isEInvoiceStatus === 1) {
        return "(EInvoice Linked)";
      }
      if (isEwayStatus === 1) {
        return "(Eway Linked)";
      }

      return ""; // optional: return a default string if nothing matches
    },

    closeModal(){
      this.showModal = false
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
      if (el === "0") {
        GoogleAnalytics.my_vouchers_reports_screen_filter("Pending");
      } else if (el === "1") {
        GoogleAnalytics.my_vouchers_reports_screen_filter("Completed");
      } else if (el === "-1") {
        GoogleAnalytics.my_vouchers_reports_screen_filter("Rejected");
      } else if (el === "3") {
        GoogleAnalytics.my_vouchers_reports_screen_filter("Cancelled");
      } else {
        GoogleAnalytics.my_vouchers_reports_screen_filter("All");
      }
    },
    async getUserPermission() {
      const data = {
        mainUserId: this.parentUserId ? this.parentUserId : this.customerId,
        subUserId: this.customerId ? this.customerId : '',
        _userId: this.customerId ? this.customerId : '',
        company_id: localStorage.getItem('companyId'),
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
        this.eInvoiceWritePermission = responseDataa.isWrite.isEInvoice;
      } catch (error) {
        console.error("Error fetching user permissions:", error);
      }
    },
    StoredPage(newValue) {
      this.$store.dispatch("Web1_Store/setMyVouchersPage", newValue.page);
    },
    updateItemsPerPage(newValue) {
      this.$store.dispatch("Web1_Store/setMyVouchersItemsPerPage", newValue);
    },
    voucherTypeShow() {
      this.voucherShowInside = true;
    },
    show() {
      this.showInside = true;
    },
    hide() {
      this.voucherShowInside = false;
      this.showInside = false;
    },
    closeEvent() {
      this.hide();
    },
    activatedate: function (date) {
      if (date === "oned") {
        // one day
        GoogleAnalytics.my_vouchers_reports_screen_date_filter("1D");
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
        GoogleAnalytics.my_vouchers_reports_screen_date_filter("1W");
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
        GoogleAnalytics.my_vouchers_reports_screen_date_filter("1M");
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
        GoogleAnalytics.my_vouchers_reports_screen_date_filter("3M");
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
        GoogleAnalytics.my_vouchers_reports_screen_date_filter("1Y");
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
        GoogleAnalytics.my_vouchers_reports_screen_date_filter("2Y");
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
        GoogleAnalytics.my_vouchers_reports_screen_date_filter("Max");
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
    backentryPdf(v_id, url, isTransfer) {
      if (isTransfer != 3) {
        if (url == "e-way&e-invoice") {
          var data = {
            voucherId: v_id,
            company_id: localStorage.getItem("companyId"),
            _userId: localStorage.getItem("customerId"),
            requestFrom: "WEB",
            isEway: true,
            isEinvoice: true,
          };
        }
        else if (url == "e-way") {
          var data = {
            voucherId: v_id,
            company_id: localStorage.getItem("companyId"),
            _userId: localStorage.getItem("customerId"),
            requestFrom: "WEB",
            isEway: true,
          };
        }
        else {
          var data = {
            voucherId: v_id,
            company_id: localStorage.getItem("companyId"),
            _userId: localStorage.getItem("customerId"),
            requestFrom: "WEB",
            isEinvoice: true,
          };
        }

        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        if (this.parentUserId == "") {
          Api.getMyVoucherPDF(data, headers)
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
        } else if (
          this.ewayReadPermission ||
          this.eInvoiceReadPermission
        ) {
          Api.getMyVoucherPDF(data, headers)
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
        }
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
    readDataFromAPI(type = "", sortBy = "", orderBy = "") {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      this.symbol = localStorage.getItem("symbol");
      if (type === "search") {
        this.options.page = 1;
      }
      if (this.selectfilter === "") {
        this.finalfilter = [-1, 0, 1, 2, 3];
      } else {
        this.finalfilter = [parseFloat(this.selectfilter)];
      }
      const { page, itemsPerPage } = this.options;
      console.log("Page Number", page, itemsPerPage);
      let pageNumber = page - 1;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        requestFrom: "WEB",
        searchTerm: this.search,
        sortBy: this.sortBy,
        orderBy: this.orderBy,
        startDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        endDate: moment(String(this.$refs.picker.end)).format("yyyy-MM-DD"),
        voucherTypes: this.selected,
        isTransfer: this.finalfilter,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      this.myledgers = [];
      Api.getMyVouchers(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            for (let [key, value] of Object.entries(response.data.data.list)) {
              if (value.isEwayStatus == 1 || value.isEInvoiceStatus == 1) {
                if (value.isEwayStatus == 1 && value.isEInvoiceStatus == 1) {
                  response.data.data.list[key].url = "e-way&e-invoice"

                }
                else if (value.isEwayStatus == 1) {
                  response.data.data.list[key].url = "e-way";

                } else {
                  response.data.data.list[key].url = "e-invoice";

                }
              } else {
                if (value.parent == "Sales" || value.parent == "sales") {
                  response.data.data.list[key].url =
                    "sales-voucher-v4/" +
                    encodeURIComponent(value.voucherType) +
                    "/" +
                    value._id;
                } else if (value.parent == "Purchase") {
                  response.data.data.list[key].url =
                    "purchase-voucher-v4/" +
                    encodeURIComponent(value.voucherType) +
                    "/" +
                    value._id;
                } else if (value.parent == "Sales Order") {
                  response.data.data.list[key].url =
                    "sales-order-voucher-v4/" +
                    encodeURIComponent(value.voucherType) +
                    "/" +
                    value._id;
                } else if (value.parent == "Purchase Order") {
                  response.data.data.list[key].url =
                    "purchase-order-voucher-v4/" +
                    encodeURIComponent(value.voucherType) +
                    "/" +
                    value._id;
                } else if (value.parent == "Credit Note") {
                  response.data.data.list[key].url =
                    "create-creditnote-v4/" +
                    encodeURIComponent(value.voucherType) +
                    "/" +
                    value._id;
                } else if (value.parent == "Debit Note") {
                  response.data.data.list[key].url =
                    "create-debit-note-v4/" +
                    encodeURIComponent(value.voucherType) +
                    "/" +
                    value._id;
                } else if (value.parent == "Receipt") {
                  response.data.data.list[key].url =
                    "create-receipt/" + encodeURIComponent(value.voucherType) + "/" + value._id;
                } else if (value.parent == "Payment") {
                  response.data.data.list[key].url =
                    "create-payment/" + encodeURIComponent(value.voucherType) + "/" + value._id;
                } else if (value.parent == "Journal") {
                  response.data.data.list[key].url =
                    "create-journal/" + encodeURIComponent(value.voucherType) + "/" + value._id;
                } else if (value.parent == "Contra") {
                  response.data.data.list[key].url =
                    "create-contra/" + encodeURIComponent(value.voucherType) + "/" + value._id;
                } else {
                  response.data.data.list[key].url = "#";
                }
              }

              if (value.isTransfer === 0) {
                response.data.data.list[key].status_name = "Pending to Sync";
                response.data.data.list[key].status_class = "status-pending";
              } else if (value.isTransfer === 1 && value.action != 'Cancel') {
                response.data.data.list[key].status_name = "Sync Completed";
                response.data.data.list[key].status_class = "status-completed";
              }else if (value.approvalStatus == 1 && value.action == "Cancel" && value.isModified) { 
                  response.data.data.list[key].status_name = "Cancelled";
                  response.data.data.list[key].status_class =
                    "status-cancelled";
              } else if (value.isTransfer === 3) {
                if (value.approvalStatus == 0 && value.isCancelled != true) {
                  response.data.data.list[key].status_name = "Pending to Sync";
                  response.data.data.list[key].status_class = "status-pending";
                }else if (value.approvalStatus == 1 && value.action == "" && !value.isModified) { 
                  response.data.data.list[key].status_name = "Deleted";
                  response.data.data.list[key].status_class =
                    "status-cancelled";
                } else {
                  response.data.data.list[key].status_name = "Cancelled";
                  response.data.data.list[key].status_class =
                    "status-cancelled";
                }
              } else if (value.isTransfer === -1) {
                response.data.data.list[key].status_name = "Rejected";
                response.data.data.list[key].status_class = "status-rejected";
              }
            }


            // else if (value.approvalStatus == 1 && value.isCancelled == true && value.isModified ) {
            //       response.data.data.list[key].status_name = "Deleted";
            //       response.data.data.list[key].status_class = "status-delete";
            //     }

            console.log(response);

            let totalPages = Math.ceil(
              response.data.data.totalCount / itemsPerPage
            );
            this.loading = false;
            this.new_loading = false;
            this.myledgers = response.data.data.list;
            console.log(this.myledgers, "myledger url");
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
      GoogleAnalytics.my_vouchers_reports_screen_search(this.search);
      this.readDataFromAPI(type);
    },
    filterchange(event) {
      this.selectfilter = event.target.value;
      this.readDataFromAPI();
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
      this.readDataFromAPI();
      GoogleAnalytics.my_vouchers_reports_screen_sorting(
        this.sortBy,
        this.orderBy
      );
    },

    deleteLedger(Ledgerid, item) {
      GoogleAnalytics.My_Voucher_Undo_Icon();
      this.remarks = ''
      this.selectedReason = ''
      if (item.isEInvoiceStatus == 1 || item.isEwayStatus == 1) {
        if(this.parentUserId != '' && this.parentUserId != undefined){
          if (this.ewayWritePermission) {
            this.voucherData = item
          this.showModal = true
          this.billNumber = item.eWayBillDetails[0].billNumber
          this.irnAckNo = item.irnAckNo
          }
        }
       else{
        this.showModal = true
        this.voucherData = item
        this.billNumber = item.eWayBillDetails[0].billNumber
        this.irnAckNo = item.irnAckNo
       }
      }
      else {
        const data = {
          _userId: localStorage.getItem("customerId"),
          voucherId: Ledgerid,
          requestFrom: "WEB",
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };

        Api.deleteMyVoucher(data, headers)
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
    },
    // updateTransferFunc(){
    //   console.log(this.voucherData, "this is voucher data in trasfer code")
    //   let data = {
    //         _id: this.voucherData._id,
    //         _userId: localStorage.getItem("customerId"),
    //         isTransfer: 0,
    //         requestFrom: "WEB",
    //       };
    //       let headers = {
    //         "Access-Control-Allow-Origin": "*",
    //         "Content-Type": "application/json",
    //         token: localStorage.getItem("webAuthToken"),
    //       };

    //       Api.updateisTransferStatus(data, headers).then((response) => {
    //         if (response.data.status == "1") {
    //           this.cancelEwayandEinvoice();
    //         }
    //       });
    // },
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
      value = value.split(" ")[0];
      if (value) {
        if (value == "1900-01-01") {
          value = "-";
          return value;
        } else {
          return moment(String(value)).format("DD MMM yyyy");
        }
      }
    },
    vouchertypeclick(user, event) {
      if (event.target.checked) {
        if (user !== "" && !this.selected.includes(user)) {
          this.selected.push(user);
        }
      } else {
        if (user !== "") {
          const index = this.selected.indexOf(user);
          if (index !== -1) {
            this.selected.splice(index, 1);
          }
        }
      }

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
      GoogleAnalytics.my_vouchers_reports_screen_date_filter("Custom");
      this.readDataFromAPI();
      this.date_setting();
    },
     // this function is to cancel the eway and einvoice
     cancelEwayandEinvoice(){
      this.cancellEwayandEinvoiceError = []
    if(this.remarks == ''){
      this.cancellEwayandEinvoiceError["remarks"] = 'Please fill Remarks to Proceed'
    }
    if(this.selectedReason == ''){
      this.cancellEwayandEinvoiceError["selectedReason"] = 'Pick any 1 reason to proceed'
    }
    if (Object.keys(this.cancellEwayandEinvoiceError).length === 0) {
    this.isLoadingCancelButton = true
  const isEinvoice = this.voucherData.isEInvoiceStatus === 1;
  const isEway = this.voucherData.isEwayStatus === 1;

  const baseData = {
    requestFrom: 'WEB',
    company_id: localStorage.getItem('companyId'),
    _userId: localStorage.getItem('customerId'),
    gstIn: localStorage.getItem("companyGstNumber"),
    username: localStorage.getItem('gspUser'),
    password: localStorage.getItem('gspPassword'),
    voucherId: this.voucherData._id,
    masterId: null,
    isStaging: this.ServerStatus === "Dev",
    voucherType: 'Sales',
    voucherNo: this.voucherData.voucherNumber,
    guid: '',
    voucherDate: moment(this.voucherData.voucherDate).format('YYYYMMDD')
  };

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    token: localStorage.getItem("webAuthToken"),
  };

  if (isEway && isEinvoice) {
  const ewayPayload = {
    ...baseData,
    cancelRmrk: this.remarks,
    ewayCancelledBy: this.voucherData.createdBy,
    ewbNo: Number(this.voucherData.eWayBillDetails[0].billNumber),
    cancelRsnCode: Number(this.selectedReason),
  };

  const einvoicePayload = {
    ...baseData,
    Irn: this.voucherData.irn,
    CnlRem: this.remarks,
    eInvoiceCancelledBy: this.voucherData.createdBy,
    CnlRsn: this.selectedReason,
  };

  this.isLoadingCancelButton = true;

  Api.cancelEway(ewayPayload, headers)
    .then((ewayRes) => {
      if (ewayRes.data.status == 0) {
        this.apiErrorForEway = ewayRes.data.message;
        this.isLoadingCancelButton = false;
        this.apiErrorForEway = ewayRes.data.message;
        throw new Error("EWAY_CANCEL_FAILED");
      }

      return Api.cancelEinvoice(einvoicePayload, headers);
    })
    .then((einvoiceRes) => {
      if (einvoiceRes.data.status == 0) {
        this.apiErrorForEinvoice = einvoiceRes.data.message;
        this.isLoadingCancelButton = false;
        this.apiErrorForEinvoice = einvoiceRes.data.message;
        throw new Error("EINVOICE_CANCEL_FAILED");
      }

      const deleteData = {
        _userId: localStorage.getItem("customerId"),
        voucherId: this.voucherData._id,
        requestFrom: "WEB",
      };
      return Api.deleteMyVoucher(deleteData, headers);
    })
    .then((response) => {
    this.isLoadingCancelButton = false
    this.showModal = false
    if (response.data.message === "AUTHENTICATION_FAILED") {
      this.readDataFromAPI();
    } else {
      this.readDataFromAPI();
      this.new_loading = false;
    }
  })
  .catch((err) => {
    console.error("Error in canceling E-Invoice/E-Way or deleting voucher:", err);
    this.new_loading = false;
  });

} else {
  const tasks = [];

if (isEway) {
  const ewayPayload = {
    ...baseData,
    cancelRmrk: this.remarks,
    ewayCancelledBy: this.voucherData.createdBy,
    ewbNo: Number(this.voucherData.eWayBillDetails[0].billNumber),
    cancelRsnCode: Number(this.selectedReason),
  };
  tasks.push(Api.cancelEway(ewayPayload, headers));
}

if (isEinvoice) {
  const einvoicePayload = {
    ...baseData,
    Irn: this.voucherData.irn,
    CnlRem: this.remarks,
    eInvoiceCancelledBy: this.voucherData.createdBy,
    CnlRsn: this.selectedReason,
  };
  tasks.push(Api.cancelEinvoice(einvoicePayload, headers));
}

Promise.all(tasks)
.then((responses) => {
  let ewayRes, einvoiceRes;

  if (isEway && isEinvoice) {
    [ewayRes, einvoiceRes] = responses;
  } else if (isEway) {
    [ewayRes] = responses;
  } else if (isEinvoice) {
    [einvoiceRes] = responses;
  }

  const isEwaySuccess = ewayRes ? ewayRes.data.status !== 0 : true;
  const isEinvoiceSuccess = einvoiceRes ? einvoiceRes.data.status !== 0 : true;

  if (isEwaySuccess && isEinvoiceSuccess) {
    const deleteData = {
      _userId: localStorage.getItem("customerId"),
      voucherId: this.voucherData._id,
      requestFrom: "WEB",
    };
    return Api.deleteMyVoucher(deleteData, headers);
  } else {
    if (!isEwaySuccess && ewayRes) {
        this.apiErrorForEway = ewayRes.data.message;
      }
      if (!isEinvoiceSuccess && einvoiceRes) {
        this.apiErrorForEinvoice = einvoiceRes.data.message;
      }
    this.isLoadingCancelButton = false;
    throw new Error("CANCEL_FAILED");
  }
})
  .then((response) => {
    this.isLoadingCancelButton = false
    this.showModal = false
    if (response.data.message === "AUTHENTICATION_FAILED") {
      this.readDataFromAPI();
    } else {
      this.readDataFromAPI();
      this.new_loading = false;
    }
  })
  .catch((err) => {
    console.error("Error in canceling E-Invoice/E-Way or deleting voucher:", err);
    this.new_loading = false;
  });
}

}

    },
    getMasterCodeDetailsFunction(){
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getMasterCodeDetails(data, headers)
        .then((response) => {
          console.log(response.data.data.cancellationReason, "master code api")
          this.reasonCodeData = response.data.data.cancellationReason
        })
        .catch(() => {
          // this.SupplyTypeChanged = [];
        });
      
    },
    // codeForReasonFunction(){
    //   const codeOfDescription = this.reasonCodeData.find((data)=> data.description === this.selectedReason)
    //   console.log(this.selectedReason, "selected reason")
    //   this.selectedReasonCode = codeOfDescription ? codeOfDescription.code: ''
    //   console.log(this.selectedReasonCode, "this is the code for the reason")
    // }

  },
  mounted() {
    this.getMasterCodeDetailsFunction()
    setTimeout(() => { }, 500);
    this.getUserPermission()
    this.users_voucherType.map((user) => {
      if (localStorage.getItem("isRead_is" + user.id) == "true") {
        this.users.push(user);
        this.selected.push(user.id);
      }
    });

    if (
      localStorage.getItem("active_date") === null ||
      localStorage.getItem("active_date") === ""
    ) {
      this.active_date = "oney";
    } else {
      this.active_date = localStorage.getItem("active_date");
    }
    this.isPaid = localStorage.getItem("isPaid");
    this.source = localStorage.getItem("source");
    this.tallyVersionStatus = localStorage.getItem("tallyVersionStatus");
    if (this.tallyVersionStatus == "1") {
      this.source = "sf";
    }
  },
};
</script>

<style scoped>
.deleteIcon {
  font-size: 13px;
}
.Cancelmodal-wrapper {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.Cancelmodal {
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 400px;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.Cancelmodal h2 {
  margin-top: 0;
  font-size: 20px;
}

.close-btn {
  position: absolute;
  right: 16px;
  top: 16px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background: none;
}

.Canceloption {
  display: flex;
  align-items: center;
  margin: 8px 0;
  cursor: pointer;
}

.Canceloption input[type='radio'] {
  display: inline-block !important;
  appearance: auto;
  accent-color: darkgreen;
  width: 18px;
  height: 18px;
  margin-right: 12px;
  cursor: pointer;
}
.RadioButtonPartPortion {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0px 24px;
}
.remarks-box {
  width: 100%;
  margin: 15px 0 0 0;
}

.remarks-box input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.submit-btn {
  width: 100%;
  background-color: #1a1a1a;
  color: #fff;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top:15px;
}

.submit-btn:hover {
  background-color: #333;
}
.Cancelmodal button img {
    width: 14px;
}

.CancelModelHeadingPortionvouchers {
    text-align: center;
}

.CancelModelHeadingPortionvouchers h2 {
    color: #1a1a1a;
    font-size: 18px !important;
    font-weight: 600;
}

p.CancelModalBillNumber {
    text-align: center;
    color: #8E8D8D;
}

.remarks-box label {
    color: #1a1a1a;
    margin-bottom: 10px;
}

.remarks-box input::placeholder {
    color: #a6a6a6;
    font-weight: 300 !important;
}
td.IconSetForMyvoucherAction a {padding: 0 5px;}
td.IconSetForMyvoucherAction a.edit_icon_reports {color: #1A78FF;}
td.IconSetForMyvoucherAction a.edit_icon_reports:hover {color: #1A78FF;}
p.eInvoiceLinkedInnerTable {font-weight: 600 !important;}
.rejected-message-caption span.forRejectedmessagecaption{background-color:#FFEFEF;border-radius:3px;}
.rejected-message-caption span.forPendingmessagecaption{background-color:#fff8eb;border-radius:3px;}
.ChangeNumberMyvouchers{position:relative;}
.ChangeNumberMyvouchers p {font-style: italic;font-weight: 400 !important;}
.ChangeNumberMyvouchers p i {color: #FF280B;padding-left: 3px;}
.ChangeNumberMessageCaption {padding: 5px 10px;background: #ffeeee;box-shadow: 1px 1px 5px #ddd;border-left: 3px solid #ff3636;opacity: 0;display: none;position: absolute;top: 20px;left:48%;z-index: 999 !important;width: 200px;white-space: normal;}
.ChangeNumberMessageCaption p {color: #1a1a1a;font-style: italic;}
.ChangeNumberMyvouchers:hover .ChangeNumberMessageCaption {opacity: 1;display: block;}
@media only screen and (max-width:1400px){
  .ChangeNumberMessageCaption{left:74%;}
}

.undo{
  text-decoration: underline !important;
  color: #1A78FF !important;
}
</style>
 