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
          <div class="d-flex align-items-center">
            <BackButton/>
          <div>
          <div class="company_name sales_c_name mobile_padding_left_0">
            <h3 id="" class="partyName">Inactive Items</h3>
          </div>
          <div class="company_balance sales_cb new_title_sales_cb">
            <p>
              Items
              <strong>{{ this.totalItems }}</strong>
            </p>
            <p>
              Of Total Items
              <strong>{{ this.totalCountPer }} %</strong>
            </p>
          </div>
        </div>
        </div>
        </div>
        <div class="col-xl-9 col-lg-12 col-12">
          <ul class="new_set_dropdown_with_gross">
        
            <li class="">
              <p class="heading_dropdown_gross-all">Days Filter</p>
              <ul class="sortby_filter">
                <li @click="activate(1)" :class="{ active: active_el == 1 }">
                  Show All
                </li>
                <li @click="activate(6)" :class="{ active: active_el == 6 }">
                  30 Days
                </li>
                <li @click="activate(2)" :class="{ active: active_el == 2 }">
                  60 Days
                </li>
                <li @click="activate(3)" :class="{ active: active_el == 3 }">
                  90 Days
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
                      @click="activate('4')"
                      v-click-outside="closeEvent"
                      :class="{ active: active_el == '4' }"
                    >
                      120 Days
                    </li>
                    <li
                      @click="activate('5')"
                      v-click-outside="closeEvent"
                      :class="{ active: active_el == '5' }"
                    >
                      180 Days
                    </li>
                  </ul>
                </div>
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
                      class="new_sales_top_table_part new_search_export_button"
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
                      <li v-if="isPaid == '' || isPaid == null" v-b-modal.customerstatus-popup>
                            <button
                            type="button"
                            @click="freeusergeneratePdf()"
                            class="btn download_border_btn"
                            >
                            <img
                                src="/assets/images/1.0/png/pdficon.png"
                                class="img-fluid"
                            />View Pdf<img class="pdf_button_crown" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy"/>
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
                <div class="show_entries_for_table new_show_entries_for_table">
                  <v-data-table
                    :page="currentPage"
                    :pageCount="numberOfPages"
                    :headers="selectedHeaders"
                    :items="inactiveitems"
                    :options.sync="options"
                    dense
                    :items-per-page="this.$store.state.Web1_Store.InactiveItems_itemsPerPage"
                    :server-items-length="totalinactiveitems"
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
                    hide-default-footer="true"
                    @pagination="StoredPage"
                    @update:items-per-page="updateItemsPerPage"
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

                    <template v-slot:item.stockItemName="{ item }">
                      <div v-if="isPaid == '' || isPaid == null">
                        <b-button class="vch_num_all_btn" v-b-modal.customerstatus-popup>{{ item.stockItemName }}</b-button>
                      </div>
                      <div v-else>
                        <router-link
                            class="onclick_details"
                            :to="{
                              name: 'items',
                              params: { guid: item.guid },
                            }"
                          >
                          {{ item.stockItemName }}
                        </router-link>
                      </div>
                      
                        
                    </template>
                    <template v-slot:item.lastSalesDate="{ item }">
                      <td>
                        <p>{{ format_date(item.lastSalesDate) }}</p>
                      </td>
                    </template>

                    <template v-slot:item.qty="{ item }">
                      <td>
                        <p>{{ item.totalQuantity }}</p>
                      </td>
                    </template>
                    <template v-slot:item.amount="{ item }">
                      <td align="right">
                        <p>
                          <span class="font_sans">{{ symbol }}</span>
                          {{ item.amount | formatNumberParties }}
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
export default {
  name: "daybook",
  components: {BackButton},
  data() {
    return {
      active_el: 1,
      active_el_sortBy: "stockItemName",
      isActive: true,
      headers: [
        { text: "Item Name", value: "stockItemName" },
        { text: "Last Sale Date", value: "lastSalesDate" },
        { text: "Quantity", value: "qty",sortable: false },
        { text: "Amount", value: "amount", align: "right",sortable: true },
      ],
      page: this.$store.state.Web1_Store.InactiveItems_page,
      totalinactiveitems: 0,
      numberOfPages: 0,
      inactiveitems: [],
      value: [],
      selectedHeaders: [],
      loading: true,
      new_loading: true,
      options: {},
      symbol: "",
      sortBy: "",
      orderBy: "1", 
      search: "",
      rangeBy: "30 Days",
      sortBy: "voucherDate",
      filterBy: moment(String(new Date())).add(-1, "days").format("yyyy-MM-DD"),
      totalCount: "",
      totalCountPer: "",
      dotshow: 0,
      showInside: false,
      showInsideShortBy: false,
      dotshowShortBy : 0,
      isPaid : "0",
      call_function : "0",
    };
  },
  watch: {
    page: function () {
      this.options.page = this.page;
      this.inactiveitems_data();
      GoogleAnalytics.inactive_items_reports_screen_pagination(this.options.page);
    },

    "options.itemsPerPage"() {
      setTimeout(() => {
        const StartIndex =
          (this.$store.state.Web1_Store.InactiveItems_page - 1) *
          this.$store.state.Web1_Store.InactiveItems_itemsPerPage;
        const endIndex =
          StartIndex + this.$store.state.Web1_Store.InactiveItems_itemsPerPage;
        const Difference = endIndex - this.totalinactiveitems;

        if (Difference > this.totalinactiveitems) {
          this.page = 1;
          this.options.page = 1;
        } else {
          this.page = this.$store.state.Web1_Store.InactiveItems_page;
          this.options.page = this.page;
        }
      }, 1000);
      this.inactiveitems_data();
      if(this.call_function == "1"){
        this.call_function = "1";
        GoogleAnalytics.inactive_items_reports_screen_Rows_Per_Page(this.options.itemsPerPage);
      }else{
        this.call_function = "1";
      }
    },
    value(val) {
      this.selectedHeaders = val;
    },
    options: {
      handler() {
        GoogleAnalytics.inactive_items_reports_listing();
      },
    },
    deep: true,
  },
  created() {
    this.selectedHeaders = this.headers;
    console.log(this.selectedHeaders);
  },
  computed: {
    currentPage() {
      return this.$store.state.Web1_Store.InactiveItems_page;
    },
  },
  methods: {
    freeusergeneratePdf(){
        GoogleAnalytics.inactive_items_reports_screen_viewpdf("viewpdf");
        
      },
      StoredPage(newValue) {
      this.$store.dispatch("Web1_Store/setInactiveItemsPage", newValue.page);
    },
    updateItemsPerPage(newValue) {
      this.$store.dispatch("Web1_Store/setInactiveItemsItemsPerPage", newValue);
    },
    generatePdf() {
      GoogleAnalytics.inactive_items_reports_screen_viewpdf("viewpdf");
          const data = {
            company_id: localStorage.getItem("companyId"),
            _userId: localStorage.getItem("customerId"),
        
            filterBy: this.filterBy,
            requestFrom: "WEB",
            sortBy: this.sortBy,
            orderBy: parseInt(this.orderBy),
          };
          const headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: localStorage.getItem("webAuthToken"),
          };
          Api.getPDFForInactiveItemsGo(data, headers)
            .then((response) => {
              if (response.data.message == "AUTHENTICATION_FAILED") {
                localStorage.clear();
                window.location.href = "/";
              } else {
                if (response.data.status == "200") {
                  this.pdfUrl = response.data.data.pdf;
                  localStorage.setItem(
                      "pdfUrl",
                      this.pdfUrl
                    );
                  window.open(window.location.origin + '/pdfNew');
                 
                  
                
                }
              
              }
            })
            .catch((err) => {
              Common.getStatusForActionFailed(err.response.status);
              alert("ERROR");
              this.loading = false;
            });
    },
    showShortBy() {
      this.showInsideShortBy = true;
    },

    show() {
      this.showInside = true;
    },
    hide() {
      this.showInside = false;
      this.showInsideShortBy = false;
    },
    closeEvent() {

      this.hide();
    },
    activate: function (el) {
      if (el === "4" || el === "5") {
        this.dotshow = 1;
      } else {
        this.dotshow = 0;
      }
      if (el == "6") {
        var check_start_date = moment(String(new Date()));
        var date_formate = moment(check_start_date).add(-30, "days");
        var date = moment(String(date_formate)).format("yyyy-MM-DD");
        this.filterBy = date;
        this.rangeBy = "30 Days";
        this.inactiveitems_data();
      }
      if (el == "2") {
        var check_start_date = moment(String(new Date()));
        var date_formate = moment(check_start_date).add(-60, "days");
        var date = moment(String(date_formate)).format("yyyy-MM-DD");
        this.filterBy = date;
        this.rangeBy = "60 Days";
        this.inactiveitems_data();
      }
      if (el == "3") {
        var check_start_date = moment(String(new Date()));
        var date_formate = moment(check_start_date).add(-90, "days");
        var date = moment(String(date_formate)).format("yyyy-MM-DD");
        this.filterBy = date;
        this.rangeBy = "90 Days";
        this.inactiveitems_data();
      }
      if (el == "4") {
        var check_start_date = moment(String(new Date()));
        var date_formate = moment(check_start_date).add(-120, "days");
        var date = moment(String(date_formate)).format("yyyy-MM-DD");
        this.filterBy = date;
        this.rangeBy = "120 Days";
        this.inactiveitems_data();
      }
      if (el == "5") {
        var check_start_date = moment(String(new Date()));
        var date_formate = moment(check_start_date).add(-180, "days");
        var date = moment(String(date_formate)).format("yyyy-MM-DD");
        this.filterBy = date;
        this.rangeBy = "180 Days";
        this.inactiveitems_data();
      }
      if (el == "1") {
        var date = moment(String(new Date())).add(-1, "days").format("yyyy-MM-DD");
        this.filterBy = date;
        this.rangeBy = "Show All";
        this.inactiveitems_data();
      }
      this.active_el = el;
      GoogleAnalytics.inactive_items_reports_screen_date_filter(this.rangeBy);
    },
    inactiveitems_data(type) {
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
        requestFrom: "WEB",
        searchTerm: this.search,
        voucherTypes: ["Sales"],
        filterBy: this.filterBy,
        orderBy: parseInt(this.orderBy),
        sortBy: this.sortBy,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getInactiveItemsReportGo(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            if (response.data.status == "200") {
              for (let [key, value] of Object.entries(
                response.data.data.list
              )) {
                response.data.data.list[key].amount = Math.abs(
                  response.data.data.list[key].amount
                );
              }
              let totalPages = Math.ceil(
                response.data.data.totalCount / itemsPerPage
              );
              this.loading = false;
              this.new_loading = false;
              this.inactiveitems = response.data.data.list;
              this.totalinactiveitems = response.data.data.totalCount;
              this.numberOfPages = totalPages;
              this.totalCountPer = response.data.data.percentage;
              this.totalItems = response.data.data.totalCount;
            } else {
              this.loading = false;
              this.new_loading = false;
              this.inactiveitems = [];
              this.totalinactiveitems = 0;
              this.numberOfPages = 0;
              this.totalCountPer = 0;
              this.totalItems = 0;
            }
          }
        })

        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD MMM yyyy");
      }
    },

    updateSort(byDesc, event) {
      this.options.page = this.page;
      if (byDesc == "by") {
            this.sortBy = event;
            this.orderBy='-1'
      } else if (byDesc == "desc") {
        if (event == true) {
          this.orderBy = "1";
        } else {
          this.orderBy = "-1";
        }
      }
      this.inactiveitems_data();

      GoogleAnalytics.inactive_items_reports_screen_sorting(
        this.sortBy,
        this.orderBy
      );
      console.log(this.sortBy);
      console.log(this.orderBy);
    },
    handleBlur() {
      const type = "search";
      GoogleAnalytics.inactive_items_reports_screen_search(this.search);
      this.inactiveitems_data(type);
    },
    
  },
  mounted() {
    this.sortBy = '';
    this.isPaid = localStorage.getItem('isPaid');
  },
};
</script>
