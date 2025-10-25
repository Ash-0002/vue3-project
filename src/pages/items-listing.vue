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
        <div class="col-xl-3 col-lg-12 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0">
            <div 
              class="company_balance sales_cb new_title_sales_cb" 
              :class="{ 'company_heading_title': showItemHeader }">
              <span class="company_heading_back_button" v-if="showItemHeader">
                <BackButton />
              </span>
              <h3 v-if="showItemHeader">Items</h3>
              <div v-else>
                <div class="arrow_left_items">
                  <a @click="$router.go(-1)">
                    <i class="fa fa-chevron-left"></i
                  ></a>
                </div>
                <div
                  class="company_name new_title_company_name sales_c_name mobile_padding_left_0"
                >
                  <h3>{{ this.StockcategoryLedgerName }}</h3>
                </div>
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
                  @click="activate('Show All')"
                  :class="{ active: active_el == 'Show All' }"
                >
                  ALL Stocks
                </li>
                <li
                  @click="activate('In Stock')"
                  :class="{ active: active_el == 'In Stock' }"
                >
                  In Stock
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
                  class="without_inline_filter"
                >
                  <ul class="dropdown_li_active">
                    <li
                      @click="activate('Not In Stock')"
                      v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Not In Stock' }"
                    >
                      Not In Stock
                    </li>
                    <li
                      @click="activate('Negative Stock')"
                      v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Negative Stock' }"
                    >
                      Negative Stock
                    </li>
                  </ul>
                </div>
              </ul>
            </li>
            <li class="">
              <p class="heading_dropdown_gross-all">View as</p>
              <ul class="new_tabs_items_similar">
                <li>
                  <router-link class="headers" :class="{ 'active-link': $route.path.includes('/items')}" :to="{ name: 'items-listing' }">
                    Summary
                  </router-link>
                </li>
                <li>
                  <router-link class="headers" :to="{ name: 'items-group' }">
                    Group
                  </router-link>
                </li>
                <li>
                  <router-link class="headers" :to="{ name: 'items-category' }">
                    Category
                  </router-link>
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
                      class="dashboard_sales_dropdown new_search_export_button only_item_addnew_button_set_align"
                    >
                         <li class="rigntmarginli10" v-b-modal.customerstatus-popup v-if="isPaid == '' || isPaid == null">
                          <div v-if="this.source !== 'sf' && isWrite_isStockItem">
                            <a href="javascript:void(0);" class="new_addnew_button_table" @click="freeuseraddnew()">
                              <img src="/assets/images/1.0/png/white-add.png" alt="img" class="table-icon-add" />
                              Add New <img class="crown_image_btn" src="/assets/images/1.0/brand/crown.svg" loading="lazy" />
                            </a>
                          </div>
                          
                        </li>
                        <li class="rigntmarginli10" v-else-if="this.createstockitem_permission == 'false'">
                          <div v-if="this.source !== 'sf'">
                            <a href="#" class="new_addnew_button_table">
                              <img src="/assets/images/1.0/png/white-add.png" alt="img" class="table-icon-add" />
                              Add New <img src="/assets/images/1.0/dashboard/lock-red.png" class="new_lock_white_sidebar mx-1" />
                            </a>
                            
                          </div>
                        </li>
                        <li class="rigntmarginli10" v-else>
                          <div v-if="this.source !== 'sf'">
                            <a href="/add-items" class="new_addnew_button_table" @click="paiduseraddnew()">
                              <img src="/assets/images/1.0/png/white-add.png" alt="img" class="table-icon-add" />
                              Add New
                            </a>
                            
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
                <div
                  class="custom_table custom_table_pt responsive_parties_table"
                >
                  <div
                    class="show_entries_for_table new_show_entries_for_table"
                  >
                    <v-data-table
                      :page="currentPage"
                      :pageCount="numberOfPages"
                      :headers="headers"
                      :items="passengers"
                      :options.sync="options"
                      dense
                      :items-per-page="this.$store.state.Web1_Store.Items_listing_itemsPerPage"
                      :server-items-length="totalPassengers"
                      :loading="loading"
                      class="elevation-1"
                      must-sort
                      :sort-by="null"
                      :sort-desc="false"
                      @update:sort-by="updateSortSummary('by', $event)"
                      @update:sort-desc="updateSortSummary('desc', $event)"
                      disable-pagination
                      item-key="table_header_index"
                      ref="table"
                      hide-default-footer="true"
                      :footer-props="{
                        'items-per-page-options': [10, 25, 50, 100],
                        'items-per-page-text': 'products per page',
                      }"
                        @pagination= "StoredPage"
                         @update:items-per-page="updateItemsPerPage"
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
                      <template v-slot:item.stockItemName="{ item }">
                        <td class="custom_table_a">
                          <router-link
                            class="onclick_details"
                            :to="{ name: 'items', params: { guid: item.guid } }"
                          >
                            {{ item.stockItemName }}</router-link
                          >
                        </td>
                      </template>
                      <template v-slot:item.hsnCode="{ item }">
                        <td class="">
                          <p>{{ item.hsnCode }}</p>
                        </td>
                      </template>
                      <template v-slot:item.totalAmount="{ item }">
                        <td align="right">
                          <p :class="`m-0 td_last_sale ${item.openingClass}`">
                            <span class="font_sans">{{ symbol }}</span>
                            {{ Math.abs(item.totalAmount) | formatNumberPartiesListing }} <span v-if="item.totalAmount < 0" >Dr</span>
                            <span v-else-if="item.totalAmount > 0" >Cr</span>
                            <span v-else ></span>
                          </p>
                        </td>
                      </template>

                      <template v-slot:item.closingBalance="{ item }">
                        <td class="">
                          <span class="font_sans">{{
                            item.closingBalance
                          }}</span>
                        </td>
                      </template>
                      <template v-slot:item.avgRate="{ item }">
                        <td align="right" class="">
                          <span class="font_sans">{{ symbol }}</span>
                          {{ item.avgRate | formatNumberPartiesListing }}
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
              </v-app>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Api from "@/Api";
import Common from "@/Common";
import GoogleAnalytics from "@/GoogleAnalytics";
import Vue from "vue";
var numeral = require("numeral");
import moment from "moment";
import BackButton from "../components/BackButton.vue";
Vue.filter("formatNumberPartiesListing", function (value) {
   return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(
    value
  );
});
export default {
  name: "DatatableComponentItem",
  components: {
    BackButton,
  },
  data() {
    return {
      showItemHeader: true,
      StockcategoryLedgerName: "",
      active_el: "Show All",
      page: this.$store.state.Web1_Store.Items_listing_page,
      totalPassengers: 0,
      totalGroup: 0,
      totalCategory: 0,
      numberOfPages: 0,
      passengers: [],
      group: [],
      category: [],
      loading: true,
      new_loading: true,
      options: {},
      headers: [
        { text: "Item Name", value: "stockItemName" },
        { text: "HSN Code", value: "hsnCode" },
        { text: "Closing Stock", value: "totalQuantity"},
        { text: "Avg Pur Rate", value: "avgRate", align: "right" },
        { text: "Amount", value: "totalAmount", align: "right" },
      ],
      groupheaders: [
        { text: "Item Name", value: "stockGroupName" },
        { text: "HSN Code", value: "hsnCode" },
      ],
      categoryheaders: [
        { text: "Item Name", value: "stockCategoryName" },
        { text: "HSN Code", value: "hsnCode" },
      ],
      search: "",
      Ledgers: ["Show All", "In Stock", "Not In Stock", "Negative Stock"],
      selected: "",
      sortByGroup: "",
      orderByGroup: "",
      sortByCategory: "",
      orderByCategory: "",
      sortBySummary: "stockItemName",
      orderBySummary: 1,
      showInside: false,
      dotshow: 0,
      isPaid: "",
      call_function: "0",
      select_value: "Show All",
      source: "",
      isWrite_isStockItem: true,
      hasAmountAccess: true,
      hasAvgPerRateAccess: true,
      createstockitem_permission:null,
    };
  },
  watch: {
    page: function () {
      this.options.page = this.page;
      this.readDataFromAPI("", this.select_value);
      GoogleAnalytics.items_screen_pagination(this.options.page);
    },

    "options.itemsPerPage"() {
      setTimeout(() => {
      const StartIndex = (this.$store.state.Web1_Store.Items_listing_page - 1) * this.$store.state.Web1_Store.Items_listing_itemsPerPage
      const endIndex = StartIndex +  this.$store.state.Web1_Store.Items_listing_itemsPerPage 
      const Difference = endIndex - this.totalPassengers
        if(Difference > this.totalPassengers ){
     
     this.page = 1
     this.options.page = 1

   }
   else{
     this.page= this.$store.state.Web1_Store.Items_listing_page
     this.options.page = this.page; 

   }
        
      }, 1000); 
      this.readDataFromAPI("", this.select_value);
      if (this.call_function == "1") {
        this.call_function = "1";
        GoogleAnalytics.items_screen_Rows_Per_Page(this.options.itemsPerPage);
      } else {
        this.call_function = "1";
      }
    },

    options: {
      handler() {
        GoogleAnalytics.items_listing();
      },
    },
    deep: true,
  },
  created() {
    this.updateLocalStorageValues();
    this.manageHeaders();

    window.addEventListener("storageChanged", () => {
      this.updateLocalStorageValues();
      this.manageHeaders();
    });
  },
  computed:{
    currentPage() {
      return this.$store.state.Web1_Store.Items_listing_page;
    },

  },
  methods: {
    updateLocalStorageValues() {
      this.isWrite_isStockItem = JSON.parse(
        localStorage.getItem("isWrite_isStockItem")
      );
      this.hasAmountAccess = JSON.parse(
        localStorage.getItem("hasAmountAccess")
      );
      this.hasAvgPerRateAccess = JSON.parse(
        localStorage.getItem("hasAvgPerRateAccess")
      );
    },
    StoredPage(newValue){
      this.$store.dispatch('Web1_Store/setItemsListingPage', newValue.page)
      

    },
    updateItemsPerPage(newValue){
      this.$store.dispatch('Web1_Store/setItemsListingItemsPerPage', newValue)


    },

    ShowStockCategory() {
      let text = this.$route.fullPath.split("?")[0];
      let parts = text.split("/");

      if (text == "/items") {
        this.showItemHeader = true;
      } else {
        this.showItemHeader = false;
        this.StockcategoryLedgerName = parts[2].replace(/%20/g, " ");
      }
    },

    manageHeaders() {
      if (this.hasAmountAccess && this.hasAvgPerRateAccess) {
        this.headers = [
          { text: "Item Name", value: "stockItemName" },
          { text: "HSN Code", value: "hsnCode" },
          { text: "Closing Stock", value: "totalQuantity"},
          { text: "Avg Pur Rate", value: "avgRate", align: "right" },
          { text: "Amount", value: "totalAmount", align: "right" },
        ];
      } else if (!this.hasAmountAccess && this.hasAvgPerRateAccess) {
        this.headers = [
          { text: "Item Name", value: "stockItemName" },
          { text: "HSN Code", value: "hsnCode" },
          { text: "Closing Stock", value: "totalQuantity"},
          { text: "Avg Pur Rate", value: "avgRate", align: "right" },
        ];
      } else if (this.hasAmountAccess && !this.hasAvgPerRateAccess) {
        this.headers = [
          { text: "Item Name", value: "stockItemName" },
          { text: "HSN Code", value: "hsnCode" },
          { text: "Closing Stock", value: "totalQuantity"},
          { text: "Amount", value: "totalAmount", align: "right" },
        ];
      } else {
        this.headers = [
          { text: "Item Name", value: "stockItemName" },
          { text: "HSN Code", value: "hsnCode" },
          { text: "Closing Stock", value: "totalQuantity" },
            ];
      }
    },
    freeuseraddnew() {
      GoogleAnalytics.items_screen_addnew("addnew");
    },
    paiduseraddnew() {
      GoogleAnalytics.items_screen_addnew("addnew");
    },
    freeusergeneratePdf() {
      GoogleAnalytics.items_screen_viewpdf("viewpdf");
    },
    generatePdf() {
      GoogleAnalytics.items_screen_viewpdf("viewpdf");
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startDate: moment(localStorage.getItem("date_range_start_date")).format("YYYY-MM-DD"),
        endDate: moment(localStorage.getItem("date_range_end_date")).format("YYYY-MM-DD"),
        filterBy: this.select_value,
        groupBy: "Summary",
       sortBy: this.sortBySummary,
        orderBy: parseInt(this.orderBySummary),
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getPDFForItemSummaryGo(data, headers)
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
      if (el === "Not In Stock" || el === "Negative Stock") {
        this.dotshow = 1;
      } else {
        this.dotshow = 0;
      }
      this.active_el = el;
      this.select_value = el;
      this.readDataFromAPI("", el, this.select_value);
      GoogleAnalytics.items_screen_filter(el);
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
    readDataFromAPI(type = "", select_value = "Show All") {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      if (type === "search") {
        this.options.page = 1;
      }

      const { page, itemsPerPage } = this.options;
      let pageNumber = page - 1;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        requestFrom: "WEB",
        sortBy: this.sortBySummary,
        orderBy: this.orderBySummary,
        searchTerm: this.search,
        filterBy: this.select_value,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getStockItemsGo(data, headers)
        .then((response) => {
          
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseData == "200") {
            this.symbol = localStorage.getItem("symbol");
            for (let [key, value] of Object.entries(response.data.data.list)) {

              if (value.totalAmount >= 0) {
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
              
            }


            let totalPages = Math.ceil(
              response.data.data.totalCount / itemsPerPage
            );
            this.loading = false;
            this.new_loading = false;
            this.passengers = response.data.data.list;
            this.totalPassengers = response.data.data.totalCount;
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
      GoogleAnalytics.items_screen_search(this.search);

      this.readDataFromAPI(type);
    },
    

    updateSortSummary(byDesc, event) {
      this.options.page = this.page;
      if (byDesc == "by") {
        this.sortBySummary = event;
        this.orderBySummary = -1;
      } else if (byDesc == "desc") {
        if (event == true) {
          this.orderBySummary = 1;
        } else {
          this.orderBySummary = -1;
        }
      }
      this.readDataFromAPI();
      GoogleAnalytics.items_screen_sorting(
        this.sortBySummary,
        this.orderBySummary
      );
      
    },
    select_listing(event) {
      this.select_value = event.target.value;
      this.readDataFromAPI("", event.target.value);
    },
  },
  mounted() {
    this.sortBySummary = "";
    const queryParams = this.$route.query;
    console.log("queryParams",queryParams);
    if(queryParams){
      if(queryParams.inStock){
        this.activate("In Stock");
      }
      else if(queryParams.notInStock){
        this.activate("Not In Stock");
      }
      else if(queryParams.negStock){
        this.activate("Negative Stock");
      }
      else{
        console.log("NOT WORKING");
      }
    }
    this.ShowStockCategory();

    this.source = localStorage.getItem("source");
    setTimeout(() => {
      
      this.createstockitem_permission = localStorage.getItem("isWrite_isStockItem");
    }, 500);
    console.log(this.createstockitem_permission,"this.createstockitem_permission")

    this.tallyVersionStatus = localStorage.getItem("tallyVersionStatus");
    if (this.tallyVersionStatus == "1") {
      this.source = "sf";
    }
    this.isPaid = localStorage.getItem("isPaid");
    console.log("this.isPaid",this.isPaid);
    this.selected = "Ledger Group";
    
    
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
