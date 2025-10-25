/*
(c) 2023 Livekeeping Technologies Pvt Ltd.
License: Proprietary
Version: 1.0.0
Date: March 13, 2025
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
    <!--start first card box-->
    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-3 col-lg-12 col-12">
          <div class="arrow_left_items">
            <a @click="ResetStates"><i class="fa fa-chevron-left"></i></a>
          </div>
          <div class="company_name new_title_company_name" id="company_name">
            <input type="hidden" id="partyLedgerName" value="" />
            <h3 id="" class="partyName">
              <span class="max-lines"> {{ getLedgerData.ledgerName }} </span><a v-b-modal.modal-multi-1><img
                  src="/assets/images/1.0/parties/info.svg" v-b-tooltip.hover.top="'Party Details'"
                  class="img-fluid party_info_icon ml-1" /></a>
            </h3>
            <div class="company_balance">
              <p>
                Total Amount:
                <strong><span id="closing_balance">
                    <span class="font_sans">{{ symbol }}</span>
                    {{ Math.abs(ledgerTotalAmount) | formatNumberParties }}</span></strong>
              </p>

            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-12 col-12">
          <ul class="new_set_dropdown_with_gross">
            <!-- <li class="marginright25">
              <p class="heading_dropdown_gross-all">Sort By</p>
              <ul class="sortby_filter only_filter_icon"> -->
            <!-- <li @click="activate('All Voucher')" :class="{ active: active_el == 'All Voucher' }">
                  All Voucher
                </li>
                <li @click="activate('Sales')" :class="{ active: active_el == 'Sales' }">
                  Sales
                </li>

                <li @click="show" class="">
                  <p class="more_filter_text filter_relative">
                    More <i class="fa fa-chevron-down"></i>
                    <span v-if="dotshow" class="filter_dot"></span>
                  </p>
                </li>
                <div v-if="showInside" v-click-outside="closeEvent" class="without_inline_filter">
                  <ul class="dropdown_li_active">
                    <li @click="activate('Purchase')" v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Purchase' }">
                      Purchase
                    </li>
                    <li @click="activate('Journal')" :class="{ active: active_el == 'Journal' }">
                      Journal
                    </li>
                    <li @click="activate('Payment')" v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Payment' }">
                      Payment
                    </li>
                    <li @click="activate('Receipt')" v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Receipt' }">
                      Receipt
                    </li>
                    <li @click="activate('Debit Note')" v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Debit Note' }">
                      Debit Note
                    </li>
                    <li @click="activate('Credit Note')" v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Credit Note' }">
                      Credit Note
                    </li>
                    <li @click="activate('Purchase Order')" v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Purchase Order' }">
                      Purchase Order
                    </li>
                    <li @click="activate('Sales Order')" v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Sales Order' }">
                      Sales Order
                    </li>
                    <li @click="activate('Contra')" v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Contra' }">
                      Contra
                    </li>
                  </ul>
                </div>
              </ul>
            </li> -->
            <li class="marginright25">
              <p class="heading_dropdown_gross-all">View as</p>
              <ul class="new_tabs_items_similar">
                <li>
                  <router-link class="headers"
                    :class="{ 'active-link': $route.path.includes('/Sales') || $route.path.includes('/Purchase') }" :to="{
                      name: 'Parties',
                      params: { guid: this.$route.params.guid },
                    }">
                    Summary
                  </router-link>
                </li>
                <li>
                  <router-link class="headers" :to="{
                    name: 'partiesSold',
                    params: { guid: this.$route.params.guid },
                  }">
                    Sold
                  </router-link>
                </li>
                <li>
                  <router-link class="headers" :to="{
                    name: 'partiesPurchased',
                    params: { guid: this.$route.params.guid },
                  }">
                    Purchased
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <p class="heading_dropdown_gross-all">Date Filter</p>
              <div class="parties_datefilter_vue date_filter_new_flot_none">
                <span class="datepicker_left_arrow" @click="left_arrow()"><i class="fa fa-chevron-left"></i></span>
                <date-range-picker ref="picker" :auto-submit="true"
                  :locale-data="{ firstDay: 1, format: 'dd/mm/yyyy', customRangeLabel: 'Custom Range', separator: ' - ' }"
                  v-model="dateRange" :ranges="defaultRanges" :startDate="startDate" :endDate="endDate"
                  @update="update()">
                  <template v-slot:input="picker" style="min-width: 350px;">

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
                  <div class="col-lg-3 col-sm-12 col-12">
                    <ul class="search_input new_left_search_part"></ul>
                  </div>
                  <div class="col-lg-9 col-sm-12 col-12">
                    <ul class="dashboard_sales_dropdown new_search_export_button">

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
                <div class="show_entries_for_table">
                  <v-data-table :page="currentPage" :pageCount="numberOfPages" :headers="headers" :items="passengers"
                    :options.sync="options" dense :items-per-page="this.$store.state.Web1_Store.Parties_ItemsPerPage"
                    :server-items-length="totalPassengers" must-sort :sort-by="null" :sort-desc="false"
                    @update:sort-by="updateSort('by', $event)" @update:sort-desc="updateSort('desc', $event)"
                    :loading="loading" class="elevation-1" disable-pagination item-key="table_header_index" ref="table"
                    :hide-default-footer="true" :footer-props="{
                      'items-per-page-options': [10, 25, 50, 100],
                      'items-per-page-text': 'products per page',
                    }" @pagination="StoredPage" @update:items-per-page="updateItemsPerPage">
                    <template v-slot:top="{ pagination, options, updateOptions }">
                      <v-data-footer :pagination="pagination" :options="options"
                        :items-per-page-options="[10, 25, 50, 100]" @update:options="updateOptions"
                        items-per-page-text="$vuetify.dataTable.itemsPerPageText" />
                    </template>

                    <template v-slot:item.voucherDate="{ item }">

                      <div>
                        <router-link class="onclick_details" :to="{
                          name: 'Parties_Details',
                          params: { v_id: item._id, v_type: item.parentType },
                          query: { masterID: item.masterId }
                        }">
                          {{ format_date(item.voucherDate) }}</router-link>
                      </div>
                    </template>

                    <template v-slot:item.voucherNumber="{ item }">
                      <div>
                        <router-link class="onclick_details" :to="{
                          name: 'Parties_Details',
                          params: { v_id: item._id, v_type: item.parentType },
                          query: { masterID: item.masterId }
                        }">
                          {{ item.voucherNumber }}</router-link>
                      </div>
                    </template>

                    <template v-slot:item.voucherType="{ item }">
                      <td>{{ item.voucherType }}</td>
                    </template>

                    <template v-slot:item.amount="{ item }">
                      <td align="right">
                        <p :class="`m-0 td_last_sale ${item.openingClass}`">
                          <span class="font_sans">{{ item.symbol }}</span>
                          {{ Math.abs(item.totalAmount) | formatNumberParties }}
                        </p>
                      </td>
                    </template>
                    <template v-slot:item.action="{ item }">
                      <td align="center">
                        <p v-if="isPaid == '' || isPaid == null" v-b-modal.customerstatus-popup>
                          <a @click="freeusergeneratePdf()" class="pdf_a_download DwonloadPDFImage"
                            v-b-tooltip.hover.top="'Download PDF'">
                            <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid pdficonimagetable" />
                          </a>
                          <!-- <a
                            v-b-tooltip.hover.top="'WhatsApp'"
                            target="_blank"
                            class="ml-2"
                          >
                            <img
                              src="/assets/images/1.0/parties/whatsappfill.svg"
                              class="img-fluid p-1 image_size_set_whatsappfill"
                            />
                          </a> -->

                        </p>
                        <p v-else>
                          <a @click="VoucherPdf(item._id)" class="pdf_a_download DwonloadPDFImage"
                            v-b-tooltip.hover.top="'Download PDF'">
                            <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid pdficonimagetable" />
                          </a>
                          <!-- <a
                            href="javascript:void(0);"
                            v-b-tooltip.hover.top="'WhatsApp'"
                            @click="whatapp_send(item.partyLedgerGuid,item.voucherNumber,item._id )"
                            class="ml-2"
                          >
                            <img
                              src="/assets/images/1.0/parties/whatsappfill.svg"
                              class="img-fluid p-1 image_size_set_whatsappfill"
                            />
                          </a> -->
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
    <!--End Page header-->

    <!----------------------------------start party details modal------------------------------------------------------------->
    <div class="modal fade" id="party_details_modal">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content new_modal_content tx-size-sm">
          <button aria-label="Close" class="button_close" data-bs-dismiss="modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal_header">
            <div class="modal_top_title">
              <h4>Party Details</h4>
            </div>
            <div class="modal_top_icons"></div>
          </div>
          <div class="modal-body top_modal_body" id="partyDetailsData">
            <div class="new_modal_body_content">
              <h5>Ledger</h5>
              <p>{{ getLedgerData.ledgerName }}</p>
            </div>
            <div class="new_modal_body_content">
              <h5>Alias</h5>
              <p></p>
            </div>
            <div class="new_modal_body_content">
              <h5>Parent</h5>
              <p>{{ getLedgerData.parent }}</p>
            </div>
            <div class="new_modal_body_content">
              <h5>GST</h5>
              <p>{{ getLedgerData.partyGSTIn }}</p>
            </div>
            <div class="new_modal_body_content email_address_type">
              <h5>Email Address</h5>
              <p>deepak123@gmail.com</p>

            </div>
            <div class="new_modal_body_content email_address_type">
              <h5>Mobile Number</h5>
              <p>{{ getLedgerData.ledgerMobile }}</p>
              <div class="onright_icon_show">
              </div>
            </div>
            <div class="new_modal_body_content">
              <h5>Contact</h5>
              <p>{{ getLedgerData.ledgerContact }}</p>
            </div>
            <div class="new_modal_body_content">
              <h5>Address</h5>
              <p>{{ getLedgerData.address }}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!----------------------------------end party details modal------------------------------------------------------------->
    <!----------------------------------start email modal------------------------------------------------------------->
    <div class="modal fade" id="edit_email_modal">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content email_modal_content tx-size-sm">
          <button aria-label="Close" class="button_close" data-bs-dismiss="modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal_header">
            <div class="modal_top_title">
              <h4>Edit Email</h4>
            </div>
          </div>
          <div class="modal-body top_modal_body">
            <div class="email_modal_body text-center pt-4 pb-4">
              <div class="form-group">
                <input type="text" value="deepak123@gmail.com" placeholder="Enter Email Address" />
              </div>
            </div>
            <div class="button_send_email text-center">
              <button class="">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!----------------------------------end email modal------------------------------------------------------------->
    <!----------------------------------start email modal------------------------------------------------------------->
    <div class="modal fade" id="mobile_onclick_modal">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content email_modal_content tx-size-sm">
          <button aria-label="Close" class="button_close" data-bs-dismiss="modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal_header">
            <div class="modal_top_title">
              <h4>Edit Mobile Number</h4>
            </div>
          </div>
          <div class="modal-body top_modal_body">
            <div class="email_modal_body text-center pt-4 pb-4">
              <div class="form-group">
                <input type="text" value="9157838669" placeholder="Enter Mobile Number" />
              </div>
            </div>
            <div class="button_send_email text-center">
              <button class="">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!----------------------------------end email modal------------------------------------------------------------->

    <b-modal id="modal-multi-1" size="md" title="Party Details" hide-footer no-stacking>
      <div class="modal-content new_modal_content tx-size-sm">
        <div class="modal-body top_modal_body" id="partyDetailsData">
          <div class="new_modal_body_content">
            <h5>Ledger</h5>
            <p>{{ getLedgerData.ledgerName }}</p>
          </div>
          <div v-if="this.aliasNames !== ''" class="new_modal_body_content">
            <h5>Alias</h5>
            <p>{{ this.aliasNames }}</p>
          </div>
          <div v-if="getLedgerData.parent !== ''" class="new_modal_body_content">
            <h5>Parent</h5>
            <p>{{ getLedgerData.parent }}</p>
          </div>
          <div v-if="getLedgerData.parentgroup !== ''" class="new_modal_body_content">
            <h5>Parent Group</h5>
            <p>{{ handleSymbol(getLedgerData.parentgroup) }}</p>
          </div>
          <div v-if="getLedgerData.ledgerPhone !== ''" class="new_modal_body_content email_address_type">
            <h5>Phone Number</h5>
            <p>{{ getLedgerData.ledgerPhone }}</p>
          </div>
          <div v-if="getLedgerData.ledgerMobile !== ''" class="new_modal_body_content email_address_type">
            <h5>Mobile Number</h5>
            <p>{{ getLedgerData.ledgerMobile }}</p>
            <div v-if="getLedgerData.w_show" class="onright_icon_show">
              <a :href="`${getLedgerData.w_url}`" target="_blank"><span class="edit_icon_modal"><img
                    src="/assets/images/1.0/png/whatsapp.png" class="img-fluid" /></span></a>
            </div>
          </div>
          <div v-if="getLedgerData.ledgerContact !== ''" class="new_modal_body_content">
            <h5>Contact</h5>
            <p>{{ getLedgerData.ledgerContact }}</p>
          </div>
          <div v-if="getLedgerData.partyGSTIn !== ''" class="new_modal_body_content">
            <h5>GST</h5>
            <p>{{ getLedgerData.partyGSTIn }}</p>
          </div>
          <div v-if="getLedgerData.eMail !== ''" class="new_modal_body_content email_address_type">
            <h5>Email Address</h5>
            <p>{{ getLedgerData.eMail }}</p>

          </div>
          <div v-if="getLedgerData.address !== ''" class="new_modal_body_content">
            <h5>Address</h5>
            <p>{{ getLedgerData.address }}</p>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal id="modal-multi-2" size="md" title="Edit Email" hide-footer>
      <div class="modal-content email_modal_content tx-size-sm">
        <div class="modal-body top_modal_body">
          <div class="email_modal_body text-center pt-4 pb-4">
            <div class="form-group">er Email Address" /></div>
          </div>
          <div class="button_send_email text-center">
            <button class="">Update</button>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal id="modal-multi-3" size="md" title="Edit Mobile Number" hide-footer>
      <div class="modal-content email_modal_content tx-size-sm">
        <div class="modal-body top_modal_body">
          <div class="email_modal_body text-center pt-4 pb-4">
            <div class="form-group">
              <input type="text" value="9157838669" placeholder="Enter Mobile Number" />
            </div>
          </div>
          <div class="button_send_email text-center">
            <button class="">Update</button>
          </div>
        </div>
      </div>
    </b-modal>
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
import GoogleAnalytics from "@/GoogleAnalytics";
import DateRangePicker from "vue2-daterange-picker";

//you need to import the CSS manually
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  name: "salesOrderLedger",
  components: { DateRangePicker },
  data() {
    let startDate = moment(
      String(localStorage.getItem("date_range_start_date"))
    );
    let endDate = moment(String(localStorage.getItem("date_range_end_date")));
    return {
      startDate: startDate,
      endDate: endDate,
      active_el: this.$store.state.Web1_Store.Filters,
      active_date: "oney",
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
      getLedgerData: [],
      page: this.$store.state.Web1_Store.Parties_Page,
      totalPassengers: 0,
      numberOfPages: 0,
      passengers: [],
      loading: true,
      new_loading: true,
      options: {},
      headers: [
        { text: "Date", value: "voucherDate" },
        { text: "Voucher Type", value: "voucherType" },
        { text: "Voucher Number", value: "voucherNumber", sortable: false },

        { text: "Amount", value: "amount", align: "right" },
        { text: "Download", value: "action", align: 'center', sortable: false }
      ],
      search: "",
      sortBy: "voucherDate",
      orderBy: 1,
      totalBalance: 0,
      openingBalance: 0,
      closingBalance: 0,
      show_opening_closing: 1,
      data_filters: this.$store.state.Web1_Store.Filters,
      top_opening: 1,
      top_closing: 0,
      bottom_closing: 1,
      bottom_opeing: 0,
      symbol: "",
      aliasNames: "",
      showInside: false,
      dotshow: 0,
      isPaid: "",
      call_function: "0",
      check_count: "0",
      filters: [],
      pdfVoucherType: "",
      openingBalance: "",
      ledgerTotalAmount:0,
      reportFormat: localStorage.getItem('reportFormat')
    };
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
  watch: {
    page: function () {
      this.options.page = this.page;
      this.getpartyDetails();
      GoogleAnalytics.parties_summary_screen_pagination(this.options.page);
    },

    "options.itemsPerPage"() {

      setTimeout(() => {
        const StartIndex = (this.$store.state.Web1_Store.Parties_Page - 1) * this.$store.state.Web1_Store.Parties_ItemsPerPage
        const endIndex = StartIndex + this.$store.state.Web1_Store.Parties_ItemsPerPage
        const Difference = endIndex - this.totalPassengers


        if (Difference > this.totalPassengers) {

          this.page = 1
          this.options.page = 1

        }
        else {
          this.page = this.$store.state.Web1_Store.Parties_Page
          this.options.page = this.page;

        }

      }, 1000);
      this.getpartyDetails();

      if (this.call_function == "1") {
        this.call_function = "1";
        GoogleAnalytics.parties_summary_screen_Rows_Per_Page(
          this.options.itemsPerPage
        );
      } else {
        this.call_function = "1";
      }
    },

    options: {
      handler() {

        GoogleAnalytics.parties_summary_listing();
      },
    },
    deep: true,
  },
  computed: {
    currentPage() {
      return this.$store.state.Web1_Store.Parties_Page;
    },

  },
  methods: {
    //getledger api
    getLedger(filters = "") {

      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        ledgerGuid: this.$route.params.guid,
        EndLimit: 100,
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      var aliasNames = "";
      Api.getLedgerByIdGo(data, headers)
        .then((response) => {

          const responseData = Common.getStatusForActionFailed(response.data.status);
          if (responseData == "200") {

            for (let [key, value] of Object.entries(
              response.data.data.aliasNames
            )) {
              if (key >= 1) {
                aliasNames = aliasNames + "," + value.aliasName;
              } else {
                aliasNames = value.aliasName;
              }
              response.data.data.closingBalance = Math.abs(
                response.data.data.closingBalance
              );
              response.data.data.openingBalance = Math.abs(
                response.data.data.openingBalance
              );

              this.totalBalance = response.data.data.openingBalance;
            }
            this.getLedgerData = response.data.data;
            this.aliasNames = aliasNames;
            this.new_loading = false;
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status)
          this.loading = false;
          this.new_loading = false;
        });
    },
    StoredPage(newValue) {
      this.$store.dispatch('Web1_Store/setPartiesPage', newValue.page)
    },
    ResetStates() {

      this.$store.dispatch('Web1_Store/selectFilter', this.$store.state.Web1_Store.Previous_Filter)
      this.$router.go(-1)
      this.$store.dispatch('Web1_Store/resetPartiesState');
    },
    updateItemsPerPage(newValue) {
      this.$store.dispatch('Web1_Store/setPartiesItemsPerPage', newValue)
    },

    VoucherPdf(v_id) {
      const data = {
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        voucherId: v_id,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getPDFForVoucherDetailsGo(data, headers)
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
          alert("ERROR");
          this.loading = false;
        });

    },



    handleSymbol(groupName) {
      if (groupName && groupName.includes("#4;")) {
        return groupName.replace("#4;", "");
      } else {
        return groupName;
      }
    },
    freeusergeneratePdf() {
      GoogleAnalytics.parties_summary_screen_viewpdf("viewpdf");
    },
    generatePdf() {
      console.log("pdf test");
      GoogleAnalytics.parties_summary_screen_viewpdf("viewpdf");
      if (this.data_filters === "") {
        this.filters = [];
        if (this.$route.params.voucherTypeName == "Sales Order") {
          this.filters = ["Sales Order"];
          this.data_filters = this.$route.params.voucherTypeName;
        } else if (this.$route.params.voucherTypeName == "Purchase Order") {
          this.filters = ["Purchase Order"];
          this.data_filters = this.$route.params.voucherTypeName;
        }
      }
      if (this.filters.length == "0") {
        this.filters = [
          "Sales Order",
          "Purchase Order",
        ];
      }

      if (this.data_filters === "") {
        this.filters = [];
        if (this.$route.params.voucherTypeName == "Sales Order") {
          this.filters = ["Sales Order"];
          this.data_filters = this.$route.params.voucherTypeName;
        } else if (this.$route.params.voucherTypeName == "Purchase Order") {
          this.filters = ["Purchase Order"];
          this.data_filters = this.$route.params.voucherTypeName;
        }
      }
      if (this.filters.length == "0") {
        this.filters = [
          "Sales Order",
          "Purchase Order",
        ];
      }
      let apiForPdf = ''
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startDate: moment(String(this.$refs.picker.start)).format(
          "YYYY-MM-DD"
        ),
        endDate: moment(String(this.$refs.picker.end)).format("YYYY-MM-DD"),
        ledgerGuid: this.$route.params.guid,

        requestFrom: "WEB",
        sortBy: this.sortBy,
        orderBy: parseInt(this.orderBy),

        openingBalance: this.openingBalance,
        voucherTypes: this.filters,
        isForPdf: true
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
       if(this.reportFormat == 'Detailed'){
          apiForPdf = 'getDetailedLedgerSummaryPDF'
        }
        else{
          apiForPdf = 'getLedgerSummaryPDF'
        }

      Api[apiForPdf](data, headers)
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
    activate: function (el) {
      this.$store.dispatch('Web1_Store/selectFilter', el)
      if (
        el == "Purchase" ||
        el == "Journal" ||
        el == "Payment" ||
        el == "Receipt" ||
        el == "Debit Note" ||
        el == "Credit Note" ||
        el == "Purchase Order" ||
        el == "Sales Order" ||
        el == "Sales" ||
        el == "Contra"
      ) {
        this.dotshow = 1;
      } else {
        this.dotshow = 0;
      }
      if (this.active_el == el) {
        el = "All Voucher";
      }
      if (el == 'Sales Order') {
        this.$router.push({ name: 'salesOrderLedger' })
      }

      this.active_el = el;
      this.switchSelect = el;
      this.data_filters = this.$store.state.Web1_Store.Filters;
      console.log(this.data_filters, "data filters in console")
      this.getpartyDetails();
      GoogleAnalytics.parties_summary_screen_filter(el);
    },
    activatedate: function (date) {
      if (date === "oned") {
        // one day
        GoogleAnalytics.parties_summary_screen_date_filter("1D");
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
        GoogleAnalytics.parties_summary_screen_date_filter("1W");
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
        GoogleAnalytics.parties_summary_screen_date_filter("1M");
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
        GoogleAnalytics.parties_summary_screen_date_filter("3M");
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
        GoogleAnalytics.parties_summary_screen_date_filter("1Y");
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
        GoogleAnalytics.parties_summary_screen_date_filter("2Y");
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
        GoogleAnalytics.parties_summary_screen_date_filter("Max");
        var new_date_start_date = moment(
          String(new Date(String(localStorage.getItem("max_startFrom"))))
        ).format("yyyy-MM-DD");
        console.log();
        var new_date_end_date = moment().format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      }
      localStorage.setItem("date_range_start_date", new_date_start_date);
      localStorage.setItem("date_range_end_date", new_date_end_date);

      this.getpartyDetails("", this.groupSelectValue, this.switch_type);
      localStorage.setItem("active_date", date);
      this.active_date = date;
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
    update() {
      localStorage.setItem(
        "date_range_start_date",
        moment(String(this.$refs.picker.start)).format("yyyy-MM-DD")
      );
      localStorage.setItem(
        "date_range_end_date",
        moment(String(this.$refs.picker.end)).format("yyyy-MM-DD")
      );
      GoogleAnalytics.parties_summary_screen_date_filter("Custom");
      this.getpartyDetails("", this.groupSelectValue, this.switch_type);
      this.date_setting();
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
      } else if (days_mounted == max_days) {
        this.active_date = "max";
      } else {
        this.active_date = "oney";
      }
      localStorage.setItem("active_date", this.active_date);
    },

    getpartyDetails(filters = "") {
      const { page, itemsPerPage } = this.options;
      let pageNumber = page - 1;

      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startDate: moment(String(this.dateRange.startDate)).format("YYYY-MM-DD"),
        endDate: moment(String(this.dateRange.endDate)).format("YYYY-MM-DD"),
        voucherTypes: [this.$route.params.voucherTypeName],
        searchTerm: this.search,
        groupByAmount: 'Gross',
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        sortBy: this.sortBy,
        orderBy: parseInt(this.orderBy),
        requestFrom: "WEB",
        stockItemId: "",
        ledgerGuid: this.$route.params.guid,
        stockItemGuid: "",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getVouchersbyCompanyIdGo(data, headers)
        .then((response) => {
          console.log(response.data.data, "response data inside sale order page complete")
          // this.readDataFromAPI(this.$route.params.guid, filters);
          const responseData = Common.getStatusForActionFailed(response.data.status);
          console.log(responseData, "response data value")
          if (responseData == "200") {
            console.log("inside the response data ")
            this.data_filters = "";
            for (let [key, value] of Object.entries(
              response.data.data.list

            )) {
              if (value.totalAmount >= 0) {
                // + value
                response.data.data.list[key].openingClass =
                  "opening_plus_balance";
              } else {
                // - value
                response.data.data.list[key].openingClass =
                  "opening_minus_balance";
              }
              if (value.voucherNumber != "") {
                response.data.data.list[key].voucherNumber =
                  value.voucherNumber;
              } else {
                response.data.data.list[key].voucherNumber = "-";
              }
              response.data.data.list[key].totalAmount = Math.abs(
                value.totalAmount
              );
              response.data.data.list[key].symbol =
                localStorage.getItem("symbol");
              response.data.data.list[key].guid = value.guid;
              this.totalBalance = (
                parseFloat(this.totalBalance) + parseFloat(value.totalAmount)
              ).toFixed(2);
              response.data.data.list[key].balance = this.totalBalance;
            }


            let totalPages = Math.ceil(
              response.data.data.totalCount / itemsPerPage
            );
            console.log(totalPages, "TP")
            // this.closingBalance = Math.abs(response.data.data.totalClosingBalance);
            this.ledgerTotalAmount = Math.abs(response.data.data.ledgerTotalAmount)

            this.loading = false;
            this.new_loading = false;
            this.passengers = response.data.data.list;
            console.log(this.passengers, "Passengers values");
            this.totalPassengers = response.data.data.totalCount;
            this.numberOfPages = totalPages;
          } else {
            this.passengers = [];
            this.totalPassengers = 0;
            this.numberOfPages = 0;
            let totalPages = "";
            this.loading = false;
            this.new_loading = false;
          }

        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response)
          this.loading = false;
          this.new_loading = false;
        });
    },

    format_date(value) {
      value = value.split(" ")[0];
      if (value) {
        if (value == "1900-01-01") {
          value = "-"
          return value
        }
        else {
          return moment(String(value)).format("DD MMM yyyy");
        }
      }
    },
    switchSelect(event) {
      this.show_opening_closing = 0;
      this.getpartyDetails(event.target.value);
      GoogleAnalytics.parties_summary_screen_search(event.target.value);

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
      this.getpartyDetails();
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

      this.getpartyDetails();
    },


    updateSort(byDesc, event) {
      this.options.page = this.page;
      if (byDesc == "by") {
        this.sortBy = event;
        this.orderBy = -1
      } else if (byDesc == "desc") {
        if (event == true) {
          this.orderBy = 1;
        } else {
          this.orderBy = -1;
        }
      }


      GoogleAnalytics.parties_summary_screen_sorting(this.sortBy, this.orderBy);


      if (this.sortBy === "voucherDate") {
        if (this.orderBy === "-1") {
          this.top_opening = 0;
          this.top_closing = 1;
          this.bottom_closing = 0;
          this.bottom_opeing = 1;
        } else {
          this.top_opening = 1;
          this.top_closing = 0;
          this.bottom_closing = 1;
          this.bottom_opeing = 0;
        }
      }
      this.getpartyDetails();
    },
  },
  mounted() {
    //get-ledger api for ledger details
    this.getLedger();
    // this.sortBy = '';
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

    this.$nextTick(function () {

    });


  },
};
</script>
<style scoped>
.active-link {
  background: #fff !important;
  color: #1a1a1a !important;
  border-radius: 5px;
  border: 1px solid #1a1a1a !important;
}
</style>
