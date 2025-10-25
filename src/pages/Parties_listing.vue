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
    <!-- end loader -->
    <!--Page header-->
    <div class="page-header-title-box bg-white-all-pages" style="padding:6px 15px;">
      <div class="row align-items-center">
        <!-- <div class="col-xl-4 col-lg-4 col-12">
                    <div class="company_name sales_c_name mobile_padding_left_0">
                          <h3 class="">Parties</h3>
                      </div>
                  </div> -->
        <div class="col-xl-4 col-lg-4 col-12">
          <div class="PartiesReceivablesPayables">
            <BackButton/>
            <div class="PartiesReceivablesPayablesSet" style="border-right:1px solid #ddd;">
              <p>Receivables</p>
              <h5><span class="font_sans">₹</span>
                {{ this.totalOverDue }}
              </h5>
            </div>
            <div class="PartiesReceivablesPayablesSet">
              <p>Payables</p>
              <h5><span class="font_sans">₹</span>
                {{ this.payablesAmount }}
              </h5>
            </div>
          </div>
        </div>
        <div class="col-xl-8 col-lg-8 col-12">
          <ul class="new_set_dropdown_with_gross">
            <li class="">
              <ul class="sortby_filter only_filter_icon">
                <li @click="activate('Show All')" :class="{ active: active_el == 'Show All' }">
                  ALL
                </li>
                <li @click="activate('Sundry Creditors')" :class="{ active: active_el == 'Sundry Creditors' }">
                  Sundry Creditors
                </li>
                <li @click="activate(debtorGroupName)" :class="{ active: active_el == debtorGroupName }">
                  {{ debtorGroupName }}
                </li>
                <li @click="show" class="" v-if="this.dynamicGroups.length != 0">
                  <p class="more_filter_text filter_relative">
                    More <i class="fa fa-chevron-down"></i>
                    <span v-if="dotshow" class="filter_dot"></span>
                  </p>
                </li>
                <div v-if="showInside" v-click-outside="handleOutsideClick" class="without_inline_filter setwidthwithheight">
                  <ul class="SetInputSearchNewDropPortion" ref="dropdown">
                    <li>
                      <input 
                        type="text" 
                        v-model="searchQuery" 
                        placeholder="Search Groups..." 
                        class="input-field"
                        @click.stop 
                        @mousedown.stop
                      />
                    </li>
                  </ul>
                  <ul class="SetUlHeightWidthSetPart" ref="dropdown">
                    <!-- Filtered Dynamic Groups -->
                    <li 
                      v-for="group in filteredGroups" 
                      :key="group.guid" 
                      @click="activate(group.ledgerGroupName)" 
                      :class="{ active: active_el === group.ledgerGroupName }"
                    >
                      {{ group.ledgerGroupName }}
                    </li>
                  </ul>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <div class="main_card">
      <div class="card">
        <div class="row">
          <div class="col-12">
            <div class="custom_table custom_table_pt responsive_parties_table">
              <div class="">
                <v-app id="inspire">
                  <div class="row">
                    <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                      <ul class="search_input new_left_search_part">
                        <li class="">
                          <div class="table_search">
                            <input class="search_input" v-model="search" v-on:keyup="handleBlur" placeholder="Search" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-9 col-md-12 col-sm-12 col-12">
                      <ul class="dashboard_sales_dropdown new_search_export_button parties_addbutton_top">
                        <div v-if="this.source !== 'sf'">
                          <div v-if="isPaid == '' || isPaid == null">
                            <li v-b-modal.customerstatus-popup>
                              <a href="javascript:void(0);" class="new_addnew_button_table" @click="freeuseraddnew()">
                                <img src="/assets/images/1.0/png/white-add.png" alt="img" class="table-icon-add" />
                                Add New <img class="crown_image_btn" src="/assets/images/1.0/brand/crown.svg"
                                  loading="lazy" />
                              </a>
                            </li>
                          </div>
                          <div v-else-if="this.createPartyledger_permission == 'false'">
                            <li>
                              <a href="#" class="new_addnew_button_table">
                                <img src="/assets/images/1.0/png/white-add.png" alt="img" class="table-icon-add" />
                                Add New <img src="/assets/images/1.0/dashboard/lock-red.png"
                                  class="new_lock_white_sidebar mx-1" />
                              </a>
                            </li>
                          </div>
                          <div v-else>
                            <li class="">
                              <a href="/add-parties" class="new_addnew_button_table" @click="paiduseraddnew()">
                                <img src="/assets/images/1.0/png/white-add.png" alt="img" class="table-icon-add" />
                                Add New
                              </a>

                            </li>
                          </div>
                        </div>

                      </ul>
                    </div>
                  </div>
                  <div class="custom_parties_table">
                    <div class="show_entries_for_table new_show_entries_for_table">
                      <v-data-table :page="currentPage" :pageCount="numberOfPages" :headers="selectedHeaders"
                        :items="passengers" :options.sync="options" dense
                        :items-per-page="this.$store.state.Web1_Store.Parties_listing_itemsPerPage"
                        :server-items-length="totalPassengers" :loading="loading" class="elevation-1" must-sort
                        @update:sort-by="updateSort('by', $event)" :sort-by="null" :sort-desc="false"
                        @update:sort-desc="updateSort('desc', $event)" disable-pagination item-key="table_header_index"
                        ref="table" :hide-default-footer="true" :footer-props="{
                          'items-per-page-options': [10, 25, 50, 100],
                          'items-per-page-text': 'products per page',
                        }" @pagination="StoredPage" @update:items-per-page="updateItemsPerPage">
                        <template v-slot:top="{ pagination, options, updateOptions }">
                          <v-data-footer :pagination="pagination" :options="options"
                            :items-per-page-options="[10, 25, 50, 100]" @update:options="updateOptions"
                            items-per-page-text="$vuetify.dataTable.itemsPerPageText" />
                        </template>

                        <template v-slot:item.ledgerName="{ item }">
                          <router-link class="onclick_details parties_inner_a" :to="{
                            name: 'Parties',
                            params: { guid: item.guid },
                          }">
                            {{ item.ledgerName }}
                          </router-link>
                        </template>
                        <template v-slot:item.closingBalance="{ item }">
                          <td align="right">

                            <p :class="`m-0 amount_closing ${item.closeClass}`">
                              <span class="font_sans">{{ symbol }}</span>
                              {{
                                Math.abs(item.closingBalance) | formatNumberPartiesListing
                              }}
                              <span v-if="item.closingBalance < 0">Dr</span>
                              <span v-else-if="item.closingBalance > 0">Cr</span>
                              <span v-else></span>
                            </p>
                          </td>
                        </template>
                        <template v-slot:item.lastSalesDate="{ item }">
                          <router-link class="onclick_details parties_inner_a" :to="{
                            name: 'Parties',
                            params: { guid: item.guid },
                          }">
                            {{ format_date(item.lastSalesDate) }}
                          </router-link>
                        </template>
                        <template v-slot:item.creditLimit="{ item }">
                          <td align="right">
                            {{ item.creditLimit }}

                          </td>
                        </template>
                        <template v-slot:item.billCreditPeriod="{ item }">
                          {{ item.billCreditPeriod }}
                        </template>
                        <template v-slot:item.action="{ item }">
                          <td class="actions_icons" align="center">


                            <a v-if="item.w_show" :href="`${item.w_url}`" v-b-tooltip.hover.top="'WhatsApp'"
                              target="_blank"><img src="/assets/images/1.0/parties/whatsappfill.svg"
                                class="img-fluid p-1 image_size_set_whatsappfill" /></a>
                            <!-- <a v-else href="#" v-b-tooltip.hover.top="'WhatsApp'" class="disabled-image"><img
                                src="/assets/images/1.0/parties/whatsappfill.svg"
                                class="img-fluid p-1 image_size_set_whatsappfill" /></a> -->


                          </td>
                        </template>

                      </v-data-table>
                    </div>
                    <template>
                      <div class="bottom_navigation-pagination">
                        <v-pagination v-model="page" :length="numberOfPages" :total-visible="5"></v-pagination>
                      </div>
                    </template>
                  </div>
                </v-app>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End Page header-->
    <vue-html2pdf ref="html2Pdf">
      <section id="long-table" slot="pdf-content" class="paddinpdf">
        <div v-html="pdf_html" />
      </section>
    </vue-html2pdf>
  </section>
</template>

<script>
import Vue from "vue";
var numeral = require("numeral");

Vue.filter("formatNumberPartiesListing", function (value) {
  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(
    value
  );
});
import html2pdf from "html2pdf.js";
import moment from "moment";
import Api from "@/Api";
import Common from "@/Common";
import GoogleAnalytics from "@/GoogleAnalytics";
import VueHtml2pdf from "vue-html2pdf";
import { options } from "numeral";
import BackButton from "../components/BackButton.vue";
export default {
  name: "DatatableComponent",
  components: {
    VueHtml2pdf,
    BackButton,
  },
  data() {
    return {
      page: this.$store.state.Web1_Store.Parties_listing_page,
      totalPassengers: 0,
      numberOfPages: 0,
      passengers: [],
      value: [],
      selectedHeaders: [],
      createPartyledger_permission: null,
      pdf_data: [],
      loading: true,
      options: {},
      headers: [
        { text: "Party Name", value: "ledgerName" },
        { text: "Last Sold Date", value: "lastSalesDate" },
        { text: "Credit Limit", value: "creditLimit", align: "right" },
        { text: "Credit Days", value: "billCreditPeriod" },
        { text: "Closing Balance", value: "closingBalance", align: "right" },
        { text: "Action", value: "action", align: "center", sortable: false },
      ],
      search: "",
      sortBy: "ledgerName",
      orderBy: null,
      new_loading: true,
      pdf_html: "",
      isPaid: "",
      call_function: "0",
      source: "",
      isWrite_isLedger: true,
      showInside: false,
      dotshow: 0,
      active_el: "Show All",
      dynamicGroups: [],
      searchQuery: "",
      debtorGroupName: "Sundry Debtors",
      totalOverDue: 0, // Default value for Receivables
      payablesAmount: 0, // Default value for Payables
      summaryStartDate: "",
      summaryEndDate: "",
      filter_update: false,
    };
  },
  filters: {
    hashTags: function (value) {
      return value.replace(/#(\S*)/g, '<a v-on:click="someAction()">#$1</a>');
    },
  },
  watch: {
    page: function () {
      this.options.page = this.page;
      this.readDataFromAPI("", this.$route.params.ledger_name);
      GoogleAnalytics.parties_screen_pagination(this.options.page);
    },

    "options.itemsPerPage"() {

      setTimeout(() => {

        const StartIndex = (this.$store.state.Web1_Store.Parties_listing_page - 1) * this.$store.state.Web1_Store.Parties_listing_itemsPerPage
        const endIndex = StartIndex + this.$store.state.Web1_Store.Parties_listing_itemsPerPage
        const Difference = endIndex - this.totalPassengers

        if (Difference > this.totalPassengers) {

          this.page = 1
          this.options.page = 1

        }
        else {
          this.page = this.$store.state.Web1_Store.Parties_listing_page
          this.options.page = this.page;

        }

      }, 1000);

      this.readDataFromAPI("", this.$route.params.ledger_name);
      if (this.call_function == "1") {
        this.call_function = "1";
        GoogleAnalytics.parties_screen_Rows_Per_Page(this.options.itemsPerPage);
      } else {
        this.call_function = "1";
      }
    },

    value(val) {
      this.selectedHeaders = val;
    },
    options: {
      handler() {
        GoogleAnalytics.parties_listing();
      },
    },
    deep: true,
  },

  created() {
    this.summaryStartDate = localStorage.getItem("first_date_range_start_date");
    // this.summaryStartDate = "2023-06-01";
    this.summaryEndDate = localStorage.getItem("first_date_range_end_date");
    this.selectedHeaders = this.headers;
    this.isWrite_isLedger = JSON.parse(
      localStorage.getItem("isWrite_isLedger")
    );
    window.addEventListener("storageChanged", () => {
      this.isWrite_isLedger = JSON.parse(
        localStorage.getItem("isWrite_isLedger")
      );
    });

  },
  computed: {
    currentPage() {
      console.log("computed call", this.$store.state.Web1_Store.Parties_listing_page)
      return this.$store.state.Web1_Store.Parties_listing_page;
    },
    filteredGroups() {
      if (!this.searchQuery) {
        return this.dynamicGroups;
      }
      return this.dynamicGroups.filter(group =>
        group.ledgerGroupName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

  },


  methods: {
    handleOutsideClick(event) {
     // Check if the clicked element is inside the dropdown
     if (this.$refs.dropdown && this.$refs.dropdown.contains(event.target)) {
       return; // Do nothing, user clicked inside
     }
     this.showInside = false; // Close the dropdown only if clicked outside
     this.searchQuery = "";
    },
    activate: function (el) {
      // if (el === "Group 1" || el === "Group 2" || el === "Other Group") {
      //   this.dotshow = 1;
      // } else {
      //   this.dotshow = 0;
      // }
      if (this.active_el !== el) {
        this.filter_update = true;
        this.$store.dispatch('Web1_Store/resetPartiesListingState');
        this.active_el = el;
        this.readDataFromAPI();

      } else {
        this.active_el = el;
        this.readDataFromAPI();
      }
       // Close the dropdown after selecting an option
       this.showInside = false; 
       this.searchQuery = "";
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
    openPdf() {
      window.open("https://www.clickdimensions.com/links/TestPDFfile.pdf");
    },

    StoredPage(newValue) {
      this.$store.dispatch('Web1_Store/setPartiesListingPage', newValue.page)


    },
    updateItemsPerPage(newValue) {
      this.$store.dispatch('Web1_Store/setPartiesListingItemsPerPage', newValue)


    },
    fetchGroups() {
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        masterReservedName: ["Sundry Debtors", "Sundry Creditors"],
        searchTerm: "",
        createParty: true,
      };

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getLedgerGroupsByCompanyIdGo(data, headers)
        .then((response) => {
          const responseData = Common.getStatusForActionFailed(response.data.status);

          if (responseData == "200") {
            this.dynamicGroups = response.data.data.list.filter(
              (group) =>
                group.ledgerGroupName !== "Sundry Debtors" &&
                group.ledgerGroupName !== "Sundry Creditors" && group.ledgerGroupName !== "Sundry Debtor's"
            );
            // Dynamically update the second menu option (Sundry Debtors or Sundry Debtor's)
            const debtorGroup = response.data.data.list.find((group) =>
              ["Sundry Debtors", "Sundry Debtor's"].includes(group.ledgerGroupName)
            );
            this.debtorGroupName = debtorGroup
              ? debtorGroup.ledgerGroupName
              : "Sundry Debtors"; // Default fallback
            this.new_loading = false;
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);

          this.loading = false;
          this.new_loading = false;
        });
    },
    receivables_data(type) {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startDate: this.summaryStartDate,
        endDate: this.summaryEndDate,
        outstandingType: "Receivables",
        // filterBy: "Due Today",
        filterBy: "All",
        startLimit: 0,
        endLimit: 10,
        requestFrom: "WEB",

        searchTerm: "",
        groupBy: "All Receivables",
        rangeValue: 0,
        sortBy: "",
        orderBy: 1,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getLedgerOutstandings_v1(data, headers)
        .then((response) => {

          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            this.totalOverDue = Math.abs(
              response.data.data.totalClosingBalance
            );
          } else {
            this.totalOverDue = 0;
          }

        })

        .catch((err) => {

          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },
    payables_data() {
      this.new_loading_payables = true;
      this.symbol = localStorage.getItem("symbol");
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        outstandingType: "Payables",
        filterBy: "All",
        startLimit: 0,
        endLimit: 10,
        requestFrom: "WEB",
        startDate: this.summaryStartDate,
        endDate: this.summaryEndDate,
        searchTerm: "",
        groupBy: "All Payables",

        rangeValue: 0,

        sortBy: "ledgerName",
        orderBy: 1,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getOutstandingDetailsGo(data, headers)
        .then((response) => {

          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            this.payablesAmount = Math.abs(
              response.data.data.totalClosingBalance
            );
          } else {
            this.payablesAmount = 0;
          }

        })
        .catch((err) => {

          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },
    readDataFromAPI(type = "", search_name = "") {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      if (type === "search") {
        this.options.page = 1;
        GoogleAnalytics.parties_screen_search(this.search);
      }
      if (this.search === "") {
        this.search = search_name;
      }
      const { page, itemsPerPage } = this.options;
      let pageNumber = page - 1;
      let getLimit = pageNumber * itemsPerPage
      // Prepare parent parameter dynamically
      let parent = [];
      if (this.active_el === "Show All") {
        // Include all group names in parent
        parent = ["All", "Sundry Creditors", this.debtorGroupName];

      } else {
        // Include only the selected group in parent
        parent = [this.active_el];

      }
      if (this.filter_update) {
        getLimit = 0;
        this.$store.dispatch('Web1_Store/resetPartiesListingState');
        this.page = this.$store.state.Web1_Store.Parties_listing_page
      }

      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startLimit: getLimit,
        endLimit: itemsPerPage,
        requestFrom: "WEB",
        searchTerm: this.search,
        sortBy: this.sortBy,
        orderBy: this.orderBy,
        parent,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      this.passengers = [];
      Api.getLedgersGo(data, headers)


        .then((response) => {

          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseData == "200") {
            this.filter_update = false;
            for (let [key, value] of Object.entries(response.data.data.list)) {

              if (value.openingBalance >= 0) {
                // + value
                response.data.data.list[key].openingClass =
                  "opening_plus_balance";
              } else {
                // - value
                response.data.data.list[key].openingClass =
                  "opening_minus_balance";
              }

              if (value.ledgerMobile == "" || value.ledgerMobile == null) {
                response.data.data.list[key].w_show = 0;
                response.data.data.list[key].w_url = "";
              } else {
                response.data.data.list[key].w_show = 1;
                response.data.data.list[key].w_url =
                  "https://api.whatsapp.com/send?phone=" +
                  value.ledgerMobile.replace("+91 ", "");
              }

              response.data.data.list[key].symbol =
                localStorage.getItem("symbol");
            }
            let totalPages = Math.ceil(
              response.data.data.totalCount / itemsPerPage
            );
            this.loading = false;
            this.new_loading = false;
            this.passengers = response.data.data.list;
            this.totalPassengers = response.data.data.totalCount;
            this.numberOfPages = totalPages;
          } else {
            let totalPages = 0;
            this.loading = false;
            this.new_loading = false;
            this.passengers = [];
            this.totalPassengers = 0;
            this.numberOfPages = 0;
          }
          // }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },
    handleBlur() {
      const type = "search";
      this.readDataFromAPI(type);
    },
    format_date(value) {
      if (value != null && value != "") {
        value = value.split(" ")[0];
        if (value == "1900-01-01") {
          return "-";
        } else {
          return moment(String(value)).format("DD MMM yyyy");
        }

      } else {
        return "-";
      }
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

      this.readDataFromAPI("", this.$route.params.ledger_name);
      GoogleAnalytics.parties_screen_sorting(this.sortBy, this.orderBy);

    },

    test_pdf() {
      const data = {
        _userId: "634d4802bba58530ae0fbcf7",

        company_id: "62a738fde611a60e747c50c3",
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getPDFForVoucherDetailsGo(data, headers)
        .then((response) => {
          console.log(response);
          this.pdf_html =
            "<style>body {font-size: 10px;}thead { display: table-header-group }tfoot { display: table-row-group }tr { page-break-inside: avoid }@page :left { margin-left: 1cm;margin-right: 1cm; } @page :right {margin-left: 1cm; margin-right: 1cm; }@page{page-break-inside: avoid !important}</style><table width='100%;' style='border-spacing: 0;' cellpadding='0' cellspacing='0'><tbody><tr><td colspan='2' style='text-align:center;font-weight:bold;font-size: 14px;padding-bottom:10px;'>TAX SALES</td></tr><tr><td colspan='2'><table width='100%;' style='border: 1px solid #000000;border-spacing: 0;' cellpadding='0' cellspacing='0'><tbody><tr><td style='width:50%;vertical-align: top;border-right: 2px solid #000000;'><table width='100%;' style='border-spacing: 0;' cellspacing='0' cellpadding='0'><tbody><tr><td><tr><td style='border-bottom: 1px solid #000000;padding: 3px;'><div><strong>Ananya Distributors</strong></div><div><strong>Address :</strong> Mahraha Road BindkiFatehpur, Uttar Pradesh, India - 212635</div><div><strong>GSTIN :</strong> 09EPNPS0415F1ZQ</div><div><strong>Email :</strong> pankajsingh5178@gmail.com </div><div><strong>PhoneNumber :</strong> 9876543210</div></td></tr><tr><td style='border-bottom: 1px solid #000000;padding: 3px;'><div>Consignee (Ship to)</div><div><strong>Alipur Gore Lal (Dudha)</strong></div><div><strong>Address :</strong> </div><div><strong>GSTIN :</strong> </div></td></tr><tr><td style='padding: 3px;'><div>Buyer (Bill to) </div><div><strong>Alipur Gore Lal (Dudha)</strong></div><div><strong>Address :</strong> Uttar Pradesh, India</div><div><strong>GSTIN :</strong> </div><div><strong>Contact :</strong> Gore Lal Dudaha</div><div><strong>Mobile : </strong> 9794754720</div></td></tr></td></tr></tbody></table></td><td style='width:50%;vertical-align: top;'><table width='100%;' style='border-spacing: 0;' cellpadding='0' cellspacing='0'><tbody><tr><td colspan='2' style='border-bottom: 1px solid #000;padding: 3px;'><div style='font-weight: bold;'>Invoice No:</div><div>315</div></td></tr><tr><td style='border-bottom: 1px solid #000;border-right: 1px solid #000;padding: 3px;'><div style='font-weight: bold;'>Date of Supply:</div><div>24 Oct 22</div></td><td style='border-bottom: 1px solid #000;padding: 3px;'><div style='font-weight: bold;'>Delivery Note:</div><div></div></td></tr><tr><td style='border-bottom: 1px solid #000;border-right: 1px solid #000;padding: 3px;'><div style='font-weight: bold;'>Mode/Terms of Payment:</div><div></div></td><td style='border-bottom: 1px solid #000;padding: 3px;'><div style='font-weight: bold;'>Supplier's Ref:</div><div></div></td></tr><tr><td style='border-bottom: 1px solid #000;border-right: 1px solid #000;padding: 3px;'><div style='font-weight: bold;'>Other Reference(s): </div><div></div></td><td style='border-bottom: 1px solid #000;padding: 3px;'><div style='font-weight: bold;'>Buyers Order No:</div><div></div></td></tr><tr><td style='border-bottom: 1px solid #000;border-right: 1px solid #000;padding: 3px;'><div style='font-weight: bold;'>Date: </div><div></div></td><td style='border-bottom: 1px solid #000;padding: 3px;'><div style='font-weight: bold;'>Dispatch Doc No:</div><div></div></td></tr><tr><td style='border-bottom: 1px solid #000;border-right: 1px solid #000;padding: 3px;'><div style='font-weight: bold;'>Delivery Note Date: </div><div>-</div></td><td style='border-bottom: 1px solid #000;padding: 3px;'><div style='font-weight: bold;'>Dispatched through:</div><div></div></td></tr><tr><td style='border-bottom: 1px solid #000;border-right: 1px solid #000;padding: 3px;'><div style='font-weight: bold;'>Destination: </div><div></div></td><td style='border-bottom: 1px solid #000;padding: 3px;'><div style='font-weight: bold;'>Bill of Lading/LR-RR No. </div><div></div></td></tr><tr><td style='border-bottom: 1px solid #000;border-right: 1px solid #000;padding: 3px;'><div style='font-weight: bold;'>Motor Vehicle No </div><div></div></td><td style='border-bottom: 1px solid #000;padding: 3px;'><div></div><div></div></td></tr><tr><td colspan='2' style='padding: 3px;'><div style='font-weight: bold;'>Terms of Delivery</div></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td colspan='2'><table width='100%;' style='border-spacing: 0;border: 1px solid #000;border-top: 0;' cellpadding='0' cellspacing='0'><thead style='display: table-header-group;'><tr><th style='text-align: center;border-spacing: 0;border-right: 1px solid #000;border-bottom: 1px solid #000;padding: 3px;width: 5%;'>Sr No.</th><th style='text-align: center;border-spacing: 0;border-right: 1px solid #000;border-bottom: 1px solid #000;padding: 3px;width: 40%;'>Description of Goods</th><th style='text-align: center;border-spacing: 0;border-right: 1px solid #000;border-bottom: 1px solid #000;padding: 3px;width: 10%;'>HSN/SAC</th><th style='text-align: center;border-spacing: 0;border-right: 1px solid #000;border-bottom: 1px solid #000;padding: 3px;width: 10%;'>Qty.</th><th style='text-align: center;border-spacing: 0;border-right: 1px solid #000;border-bottom: 1px solid #000;padding: 3px;width: 10%;'>Rate<span class='font_sans'>(₹)</span></th><th style='text-align: center;border-spacing: 0;border-right: 1px solid #000;border-bottom: 1px solid #000;padding: 3px;width: 5%;'>Per</th><th style='text-align: center;border-spacing: 0;border-right: 1px solid #000;border-bottom: 1px solid #000;padding: 3px;width: 5%;'>Disc.(%)</th><th style='text-align: right;border-spacing: 0;border-bottom: 1px solid #000;padding: 3px;width: 15%;'>Amount<span class='font_sans'>(₹)</span></th></tr></thead><tbody><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'>1</td><td style='text-align:left;border-right:1px solid #000;;padding: 3px;'><strong>DSA-50 Kgs</strong></td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>25.00</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>1010.00/Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>25,250.00</td></tr><tr><td style='text-align:left;border-right:1px solid #000;padding: 3px;'>2</td><td style='text-align:left;border-right:1px solid #000;padding: 3px;'><strong>Mixer-40 Kg</strong></td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>2309</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>5.00</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>975.00/Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>Bag</td><td style='text-align:right;border-right:1px solid #000;padding: 3px;'>0</td><td style='text-align:right;padding: 3px;'>4,875.00</td></tr></tbody><tfoot><tr><td style='text-align:left;border-right:1px solid #000;border-top:1px solid #000;padding: 3px;'></td><td style='text-align:left;border-right:1px solid #000;border-top:1px solid #000;padding: 3px;'><strong>Total</strong></td><td style='text-align:right;border-right:1px solid #000;border-top:1px solid #000;padding: 3px;'></td><td style='text-align:right;border-right:1px solid #000;border-top:1px solid #000;padding: 3px;'>30.00</td><td style='text-align:right;border-right:1px solid #000;border-top:1px solid #000;padding: 3px;'></td><td style='text-align:right;border-right:1px solid #000;border-top:1px solid #000;padding: 3px;'></td><td style='text-align:right;border-right:1px solid #000;border-top:1px solid #000;padding: 3px;'></td><td style='text-align:right;border-top:1px solid #000;padding: 3px;'>30,125.00</td></tr></tfoot></table></td></tr><tr><td style='padding:5px;border-left: 1px solid #000;'><div style='margin-bottom:10px;'><strong>Invoice Amount (in words)</strong></div><div>Thirty Thousands One Hundred And Twenty Five Only</div></td><td style='padding:5px;border-right: 1px solid #000;'><div style='text-align:right;'><strong>E. & O.E</strong></div></td></tr><tr><td colspan='3'><table width='100%;' style='border-spacing: 0;border: 1px solid #000;' cellspacing='0' cellpadding='0'><tbody><tr rowspan='2'><td style='border-right:1px solid #000;padding:5px;text-align:left;width:20%;font-weight:bold;border-bottom:1px solid #000;'>HSN/SAC</td><td style='border-right:1px solid #000;padding:5px;text-align:right;width:20%;font-weight:bold;border-bottom:1px solid #000;'>Taxable Value</td><td style='border-right:2px solid #000;text-align:center;width:20%;font-weight:bold;border-bottom:1px solid #000;' cellpadding='0' cellspacing='0'><table width='100%;' style='border-spacing: 0;' cellpadding='0' cellspacing='0'><tr><td colspan='2' style='border-bottom:1px solid #000;' cellpadding='0' cellspacing='0'>CGST</td></tr><tr><td style='border-right:1px solid #000;font-weight:bold;text-align:center;' cellpadding='0' cellspacing='0'>Rate(%)</td><td style='text-align:center;font-weight:bold;' cellpadding='0' cellspacing='0'>Amount<span class='font_sans'>(₹)</span></td></tr></table></td><td style='border-right:2px solid #000;text-align:center;width:20%;font-weight:bold;border-bottom:1px solid #000;' cellpadding='0' cellspacing='0'><table width='100%;' style='border-spacing: 0;' cellpadding='0' cellspacing='0'><tr><td colspan='2' style='border-bottom:1px solid #000;' cellpadding='0' cellspacing='0'>SGST</td></tr><tr><td style='border-right:1px solid #000;font-weight:bold;text-align:center;'>Rate(%)</td><td style='text-align:center;font-weight:bold;' cellpadding='0' cellspacing='0'>Amount<span class='font_sans'>(₹)</span></td></tr></table></td><td style='padding:5px;text-align:right;width:20%;font-weight:bold;border-bottom:1px solid #000;'>Total Tax Amount<span class='font_sans'>(₹)</span></td></tr><tr><td style='padding:5px;text-align:left;border-right:1px solid #000;'>2309</td><td style='padding:5px;text-align:right;border-right:1px solid #000;'>30,125.00</td><td style='padding:5px;text-align:center;border-right:1px solid #000;'>-</td><td style='padding:5px;text-align:center;border-right:1px solid #000;'>-</td><td style='padding:5px;text-align:right;'>-</td></tr><tr><td style='padding:5px;text-align:right;border-right:1px solid #000;font-weight:bold;border-top:1px solid #000;'>Total</td><td style='padding:5px;text-align:right;border-right:1px solid #000;font-weight:bold;border-top:1px solid #000;'>30,125.00</td><td style='padding:5px;text-align:center;border-right:1px solid #000;font-weight:bold;border-top:1px solid #000;'>-</td><td style='padding:5px;text-align:center;border-right:1px solid #000;font-weight:bold;border-top:1px solid #000;'>-</td><td style='padding:5px;text-align:right;font-weight:bold;border-top:1px solid #000;'>-</td></tr><tr><td colspan='5' style='padding:5px;border-top:1px solid #000;'><div style='font-weight:bold;'>Declaration:</div><div>We declare that this invoice shows the actual price of the goods describedand that all particulars are true and correct.</div></td></tr><tr><td colspan='2' style='padding:5px;border-top:1px solid #000;border-right:1px solid #000;'><div style='font-weight:bold;margin-bottom:20px;'>Company's PAN :</div><div style='font-weight:bold;'>Company's LBT No. :</div></td><td colspan='3' style='padding:5px;border-top:1px solid #000;text-align:right;'><div style='font-weight:bold;margin-bottom:20px;'>for Ananya Distributors</div><div style=''>Authorised Signatory</div></td></tr></tbody></table></td></tr></tbody></table>";
          this.pdfclick();

        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    onProgress(event) {
      console.log(`Processed: ${event} / 100`);
    },
    hasGenerated() {
      alert("PDF generated successfully!");
    },
    generatePDF() {
      this.$refs.html2Pdf.generatePdf();
    },
    pdfclick() {
      const element = document.getElementById("long-table");
      var opt = {
        pagebreak: {
          mode: [],
        },
      };
      html2pdf(element, opt);
    },
    freeuseraddnew() {
      GoogleAnalytics.parties_screen_addnew("addnew");
    },
    paiduseraddnew() {
      GoogleAnalytics.parties_screen_addnew("addnew");
    },
    getPdfData() {
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        searchTerm: this.search,
        sortBy: this.sortBy,
        orderBy: this.orderBy,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgers(data, headers)

        .then((response) => {
          this.pdf_data = response.data.data.list;
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },

  },

  mounted() {
    this.fetchGroups();
    this.receivables_data();
    this.payables_data();

    
    this.sortBy = "";
    //  this.test_pdf();3
    this.source = localStorage.getItem("source");
    this.symbol = localStorage.getItem("symbol");
    setTimeout(() => {

      this.createPartyledger_permission = localStorage.getItem("isWrite_isLedger");
    }, 500);
    this.tallyVersionStatus = localStorage.getItem("tallyVersionStatus");
    if (this.tallyVersionStatus == "1") {
      this.source = "sf";
    }
    this.isPaid = localStorage.getItem("isPaid");

    const queryParams = this.$route.query;
    if(queryParams){
      if(queryParams.allParties){
        this.activate("Show All");
      }
      else if(queryParams.credtors){
        this.activate("Sundry Creditors");
      }
      else if(queryParams.debtors){
        this.activate("Sundry Debtors");
      }
      else{
        console.log("NOT WORKING");
      }
    }
  },
};
</script>

<style>
.input-field {
  background-color: #f5f5f5; /* Light gray background */
  border: 1px solid #ccc;  /* Soft border */
  /* padding: 8px; Add some padding */
  margin-right: -7px;
  margin-left: -7px;
  border-radius: 4px; /* Slightly rounded corners */
}
span.v-chip.v-chip--no-color.theme--light.v-size--default {
  display: none;
}

.v-progress-linear__indeterminate.v-progress-linear__indeterminate--active .primary {
  background-color: #8cc63e !important;
  border-color: #8cc63e !important;
}

.v-progress-linear.v-progress-linear--absolute.v-progress-linear--visible.theme--light .primary {
  background-color: #8cc63e !important;
  border-color: #8cc63e !important;
}

.v-application .primary--text {
  color: #1a1a1a !important;
  caret-color: #1a1a1a !important;
}



span.font_sans {
  font-family: "Open Sans", sans-serif;
}


table,
tr,
td,
th,
tbody,
thead,
tfoot {
  page-break-inside: avoid !important;
  page-break-before: inherit !important;
}
</style>
