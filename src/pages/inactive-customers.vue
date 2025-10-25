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
     <!--start first card box-->
        <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-3 col-lg-12 col-12">
          <div class="d-flex align-items-center">
            <BackButton/>
          <div>
            <div class="company_name sales_c_name mobile_padding_left_0">
              <h3 id="" class="partyName">
                 Inactive Customers
              </h3>
            </div>
            <div class="company_balance sales_cb new_title_sales_cb">
              <p>
                  Customers
                  <strong
                    >{{ this.totalCustomers }}</strong
                  >
                </p>
                <p>
                  Of Total Customers
                  <strong
                    >{{ this.totalCountPer }} %</strong
                  >
                </p>
              </div>
          </div>
        </div>
        </div>
        <div class="col-xl-9 col-lg-12 col-12">
          <ul class="new_set_dropdown_with_gross">
             <li class="marginright25">
              <p class="heading_dropdown_gross-all">Sort By</p>
              <div class="new_top_table_dropdown">
                              <select
                                @change="groupSelect($event)"
                                name=""
                                id=""
                                class="form-select stockdrop salesFilter sales_receivables_dropdown commondropdownall set_width_dropdown_inactive"
                                v-model="getLedgerGroupsData"
                              >
                                <option
                                  v-for="group in ledgerGroupsList"
                                  :value="group.ledgerGroupName"
                                >
                                  {{ group.ledgerGroupName }}
                                </option>
                              </select>
                            </div>
              </li>
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
                      :items="inactivecustomer"
                      :options.sync="options"
                      dense
                      :items-per-page="this.$store.state.Web1_Store.InactiveCustomers_itemsPerPage"
                      :server-items-length="totalinactivecustomer"
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
  
                      <template v-slot:item.ledgerName="{ item }">
                        <div v-if="isPaid == '' || isPaid == null">
                          <b-button class="vch_num_all_btn" v-b-modal.customerstatus-popup>{{ item.ledgerName }}</b-button>
                        </div>
                        <div v-else>
                          <router-link
                            class="onclick_details parties_inner_a"
                            :to="{
                              name: 'Parties',
                              params: { guid: item.guid },
                            }"
                            >{{ item.ledgerName }}
                          </router-link>
                        </div>
                        
                      </template>
                      <template v-slot:item.lastSalesDate="{ item }">
                        <td>
                          <p>{{ format_date(item.lastSalesDate) }}</p>
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
  import Common from "@/Common";
  import GoogleAnalytics from "@/GoogleAnalytics";
  import BackButton from "../components/BackButton.vue";
  //you need to import the CSS manually
  import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
  export default {
    name: "daybook",
    components: {BackButton},
    data() {
      return {
        active_el: 1,
        isActive: true,
        headers: [
          { text: "Name", value: "ledgerName", align: "left", sortable: true },
          { text: "Last Sales Date", value: "lastSalesDate" },
        ],
        page: this.$store.state.Web1_Store.InactiveCustomers_page,
        totalinactivecustomer: 0,
        numberOfPages: 0,
        inactivecustomer: [],
        value: [],
        selectedHeaders: [],
        loading: true,
        new_loading: true,
        options: {},
        symbol: "",
        sortBy: "lastSalesDate",
        orderBy: "1",
        search: "",
        rangeBy: "30 Days",
        getLedgerGroupsData: "All Groups",
        ledgerGroupsList: [],
        GroupsDataArray: [],
        filterBy: moment(String(new Date())).add(-1, "days").format("yyyy-MM-DD"),
        totalCountPer: "",
        showInside: false,
        dotshow: 0,
        totalCustomers: "",
        isPaid : "0",
        call_function : "0",
      };
    },
    watch: {
      page: function () {
        this.options.page = this.page;
        this.groupdata();
        GoogleAnalytics.inactive_customers_reports_screen_pagination(this.options.page);
      },
  
      "options.itemsPerPage"() {
        setTimeout(() => {
        const StartIndex =
          (this.$store.state.Web1_Store.InactiveCustomers_page - 1) *
          this.$store.state.Web1_Store.InactiveCustomers_itemsPerPage;
        const endIndex =
          StartIndex + this.$store.state.Web1_Store.InactiveCustomers_itemsPerPage;
        const Difference = endIndex - this.totalinactivecustomer;

        if (Difference > this.totalinactivecustomer) {
          this.page = 1;
          this.options.page = 1;
        } else {
          this.page = this.$store.state.Web1_Store.InactiveCustomers_page;
          this.options.page = this.page;
        }
      }, 1000);

        this.groupdata();
        if(this.call_function == "1"){
        this.call_function = "1";
        GoogleAnalytics.inactive_customers_reports_screen_Rows_Per_Page(this.options.itemsPerPage);
      }else{
        this.call_function = "1";
      }
      },
  
      value(val) {
        this.selectedHeaders = val;
      },
      options: {
        handler() {
          GoogleAnalytics.inactive_customers_reports_listing();
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
      return this.$store.state.Web1_Store.InactiveCustomers_page;
    },
  },
    methods: {
      freeusergeneratePdf(){
        GoogleAnalytics.inactive_customers_reports_screen_viewpdf("viewpdf");
        
      },
      StoredPage(newValue) {
      this.$store.dispatch("Web1_Store/setInactiveCustomersPage", newValue.page);
    },
    updateItemsPerPage(newValue) {
      this.$store.dispatch("Web1_Store/setInactiveCustomersItemsPerPage", newValue);
    },
      generatePdf() {
        GoogleAnalytics.inactive_customers_reports_screen_viewpdf("viewpdf");
          if (this.getLedgerGroupsData === "All Groups") {
            this.GroupsDataArray = [];
            for (let [key, value] of Object.entries(this.ledgerGroupsList)) {
              this.GroupsDataArray.push(value.ledgerGroupName);
            }
          } else {
            this.GroupsDataArray = [];
            this.GroupsDataArray.push(this.getLedgerGroupsData);
          }
          const data = {
            company_id: localStorage.getItem("companyId"),
            _userId: localStorage.getItem("customerId"),
             groupBy: this.GroupsDataArray,
            filterBy: this.filterBy,
            requestFrom: "WEB",
            startDate: moment(localStorage.getItem('date_range_start_date')).format("YYYY-MM-DD"),
            endDate: moment(localStorage.getItem('date_range_end_date')).format("YYYY-MM-DD"),

            sortBy: this.sortBy,
            orderBy: parseInt(this.orderBy),
          };
          const headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: localStorage.getItem("webAuthToken"),
          };
          Api.getPDFForInactiveCustomersGo(data, headers)
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
      show() {
      this.showInside = true;
    },
    hide() {
      this.showInside = false;
    },
    closeEvent() {
      this.hide();
    },
      activate: function (el) {
        if (
          el === "4" ||
          el === "5"
        ) {
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
          this.options.page = 1;
          this.page = 1;
          this.$store.dispatch("Web1_Store/setInactiveCustomersPage", 1);
          this.inactivecustomer_data();
        }
        if (el == "2") {
          var check_start_date = moment(String(new Date()));
          var date_formate = moment(check_start_date).add(-60, "days");
          var date = moment(String(date_formate)).format("yyyy-MM-DD");
          this.filterBy = date;
          this.rangeBy = "60 Days";
          this.options.page = 1;
          this.page = 1;
          this.$store.dispatch("Web1_Store/setInactiveCustomersPage", 1);
          this.inactivecustomer_data();
        }
        if (el == "3") {
          var check_start_date = moment(String(new Date()));
          var date_formate = moment(check_start_date).add(-90, "days");
          var date = moment(String(date_formate)).format("yyyy-MM-DD");
          this.filterBy = date;
          this.rangeBy = "90 Days";
          this.options.page = 1;
          this.page = 1;
          this.$store.dispatch("Web1_Store/setInactiveCustomersPage", 1);
          this.inactivecustomer_data();
        }
        if (el == "4") {
          var check_start_date = moment(String(new Date()));
          var date_formate = moment(check_start_date).add(-120, "days");
          var date = moment(String(date_formate)).format("yyyy-MM-DD");
          this.filterBy = date;
          this.rangeBy = "120 Days";
          this.options.page = 1;
          this.page = 1;
          this.$store.dispatch("Web1_Store/setInactiveCustomersPage", 1);
          this.inactivecustomer_data();
        }
        if (el == "5") {
          var check_start_date = moment(String(new Date()));
          var date_formate = moment(check_start_date).add(-180, "days");
          var date = moment(String(date_formate)).format("yyyy-MM-DD");
          this.filterBy = date;
          this.rangeBy = "180 Days";
          this.options.page = 1;
          this.page = 1;
          this.$store.dispatch("Web1_Store/setInactiveCustomersPage", 1);
          this.inactivecustomer_data();
        }
        if (el == "1") {
          var check_start_date = moment(String(new Date()));
          var date_formate = moment(check_start_date).add(-1, "days");
          var date = moment(String(date_formate)).format("yyyy-MM-DD");
          this.filterBy = date;
          this.rangeBy = "Show All";
          this.options.page = 1;
          this.page = 1;
          this.$store.dispatch("Web1_Store/setInactiveCustomersPage", 1);
          this.inactivecustomer_data();
        }
        this.active_el = el;
        GoogleAnalytics.inactive_customers_reports_screen_date_filter(this.rangeBy);
      },
      inactivecustomer_data(type) {
        this.symbol = localStorage.getItem("symbol");
        var self = this;
        this.loading = true;
        this.new_loading = true;
        if (type === "search") {
          this.options.page = 1;
        }
        const { page, itemsPerPage } = this.options;
        let pageNumber = page - 1;
        if (this.getLedgerGroupsData === "All Groups") {
          this.GroupsDataArray = [];
          for (let [key, value] of Object.entries(this.ledgerGroupsList)) {
            this.GroupsDataArray.push(value.ledgerGroupName);
          }
        } else {
          this.GroupsDataArray = [];
          this.GroupsDataArray.push(this.getLedgerGroupsData);
        }
        const data = {
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          startLimit: pageNumber * itemsPerPage,
          endLimit: itemsPerPage,
          sortBy: this.sortBy,
          orderBy: parseInt(this.orderBy),
          requestFrom: "WEB",
          searchTerm: this.search,
          voucherTypes: ["Sales"],
          filterBy: this.filterBy,
          groupBy: this.GroupsDataArray,
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
  
        Api.getInactiveCustomerReportsGo(data, headers)
          .then((response) => {
            
            const responseStatus = Common.getStatusForActionFailed(
              response.data.status
            );
            if(responseStatus == '200') {
              
              let totalPages = Math.ceil(
                response.data.data.totalCount / itemsPerPage
              );
              this.loading = false;
              this.new_loading = false;
              this.inactivecustomer = response.data.data.list;
              this.totalinactivecustomer = response.data.data.totalCount;
              this.numberOfPages = totalPages;
              this.totalCountPer = response.data.data.percentage;
              this.totalCustomers = response.data.data.totalCount;
            }
          })
  
          .catch((err) => {
            Common.getStatusForActionFailed(err.response.status);
            this.loading = false;
            this.new_loading = false;
          });
      },
      groupdata() {
        const data = {
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
        
          requestFrom: "WEB",
        masterReservedName: ["Sundry Creditors", "Sundry Debtors"],

        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.ledgerGroupsGo(data, headers)
          .then((response) => {
            if (response.data.message == "AUTHENTICATION_FAILED") {
              localStorage.clear();
              window.location.href = "/";
            } else {

              
              const group_name = {
                ledgerGroupName: "All Groups",
                masterReservedName: "",
                ledgerName: "All Groups",
              };
              response.data.data.list.splice(0, 0, group_name);
              this.ledgerGroupsList = response.data.data.list;
              this.inactivecustomer_data();

            }

          })

  
          .catch((err) => {
            Common.getStatusForActionFailed(err.response.status);
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
      groupSelect(event) {
        GoogleAnalytics.inactive_customers_reports_screen_filter(event.target.value);
        this.inactivecustomer_data();
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
        this.inactivecustomer_data()
        
        GoogleAnalytics.inactive_customers_reports_screen_sorting(
          this.sortBy,
          this.orderBy
        );
        console.log(this.sortBy);
        console.log(this.orderBy);
      },
      handleBlur() {
        const type = "search";
        GoogleAnalytics.inactive_customers_reports_screen_search(this.search);
        this.inactivecustomer_data(type);
      },
    },
    mounted() {
      this.sortBy = '';
      this.isPaid = localStorage.getItem('isPaid');
  
      setTimeout(() => {
        if (this.ledgerGroupsList.length === 1 ) {
        this.getLedgerGroupsData = "";  
        this.inactivecustomer = []
        this.numberOfPages = 0
        this.totalCountPer = 0
        this.totalCustomers = 0
    }
    else if(this.ledgerGroupsList.length !== 0 || this.ledgerGroupsList !== 1 ){
      this.getLedgerGroupsData = "All Groups"
    }
        
      }, 1000);
      
      


    },
  };
  </script>
  