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
            <div class="company_balance sales_cb new_title_sales_cb company_heading_title">
              <span class="company_heading_back_button">
                <BackButton />
              </span>
              <h3>Items</h3>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-12 col-12">
          <ul class="new_set_dropdown_with_gross">
            <li class="">
              <p class="heading_dropdown_gross-all">View as</p>
              <ul class="new_tabs_items_similar">
                <li>
                  <router-link class="headers" :to="{ name: 'items-listing' }">
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
                      class="dashboard_sales_dropdown new_search_export_button"
                    >
                    <li class="rigntmarginli10">
                        <div v-if="this.source !== 'sf' && isWrite_isStockItem">
                          <router-link
                            :to="{ name: 'add-items' }"
                            class="new_addnew_button_table"
                            @click="paiduseraddnew()"
                          >
                            <img
                              src="/assets/images/1.0/png/white-add.png"
                              alt="img"
                              class="table-icon-add"
                            />
                            Add New
                          </router-link>
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
                      :page="page"
                      :pageCount="numberOfPages"
                      :headers="categoryheaders"
                      :items="category"
                      :options.sync="options"
                      dense
                      :items-per-page="10"
                      :server-items-length="totalCategory"
                      :loading="loading"
                      class="elevation-1"
                      must-sort
                      :sort-by="null"
                      :sort-desc="false"
                      @update:sort-by="updateSortCategory('by', $event)"
                      @update:sort-desc="updateSortCategory('desc', $event)"
                      disable-pagination
                      item-key="table_header_index"
                      ref="table"
                      hide-default-footer="true"
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

                      <template v-slot:item="{ item }">
                        <tr>
                          <td class="custom_table_a">
                            <router-link
                              class="onclick_details"
                              :to="{
                                name: 'item-category-listing',
                                params: {
                                  guid: item.guid,
                                  cat_name: item.stockCategoryName,
                                },
                              }"
                            >
                              {{ handleSymbol(item.stockCategoryName) }}
                            </router-link>
                          </td>
                          <td class="">
                            <p>{{ item.hsnCode }}</p>
                          </td>
                          <td class="">
                            <p>
                              <span class="font_sans">{{ symbol }}</span>
                              {{ Math.abs(item.closingBalance) | formatNumberParties }} <span v-if="item.closingBalance < 0" >Dr</span>
                            <span v-else-if="item.closingBalance > 0" >Cr</span>
                            <span v-else ></span>
                            </p>
                          </td>
                        </tr>
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
import moment from "moment";
import BackButton from "../components/BackButton.vue";

var numeral = require("numeral");

Vue.filter("formatNumberParties", function (value) {
  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(
    value
  );
});
export default {
  name: "DatatableComponentItem",
  components: {
    BackButton
  },
  data() {
    return {
      page: 1,
      totalPassengers: 0,
      totalGroup: 0,
      totalCategory: 0,
      numberOfPages: 0,
      category: [],
      loading: true,
      new_loading: true,
      options: {},
      categoryheaders: [
        { text: "Item Name", value: "stockCategoryName" },
        { text: "HSN Code", value: "hsnCode" , sortable: false },
        { text: "Closing Value", value: "closingValue" },
      ],
      search: "",
      Ledgers: ["Ledger Group", "Voucher Type", "Stock Item", "Month", "Bill"],
      selected: "",
      sortByGroup: "",
      orderByGroup: "",
      sortByCategory: "stockCategoryName",
      orderByCategory: 1,
      sortBySummary: "",
      orderBySummary: "",
      symbol: "",
      isPaid: "0",
      call_function: "0",
      source: "",
      isWrite_isStockItem: true,
    };
  },
  watch: {
    page: function () {
      this.options.page = this.page;
      this.categoryAPI();
      GoogleAnalytics.items_category_screen_pagination(this.options.page);
    },

    "options.itemsPerPage"() {
      this.page=1
      this.options.page = 1; 
      this.categoryAPI();
      if (this.call_function == "1") {
        this.call_function = "1";
        GoogleAnalytics.items_category_screen_Rows_Per_Page(
          this.options.itemsPerPage
        );
      } else {
        this.call_function = "1";
      }
    },

    options: {
      handler() {
        GoogleAnalytics.items_category_listing();
      },
    },
    deep: true,
  },
  created() {
    this.updateLocalStorageValues();
    window.addEventListener("storageChanged", () => {
      this.updateLocalStorageValues();
    });
  },
  methods: {
    updateLocalStorageValues() {
      this.isWrite_isStockItem = JSON.parse(
        localStorage.getItem("isWrite_isStockItem")
      );
     },
    handleSymbol(categoryName) {
      return categoryName.replace("#4;", "");
    },
    freeuseraddnew() {
      GoogleAnalytics.items_category_screen_addnew("addnew");
    },
    paiduseraddnew() {
      GoogleAnalytics.items_category_screen_addnew("addnew");
    },
    freeusergeneratePdf() {
      GoogleAnalytics.items_category_screen_viewpdf("viewpdf");
    },
    generatePdf() {
      GoogleAnalytics.items_category_screen_viewpdf("viewpdf");
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startDate: moment(localStorage.getItem("date_range_start_date")).format("YYYY-MM-DD"),
        endDate: moment(localStorage.getItem("date_range_end_date")).format("YYYY-MM-DD"),
        filterBy: "Show All",
        groupBy: "Category",
        voucherType: "Sales",

        sortBy: this.sortByCategory,
        orderBy: parseInt(this.orderByCategory),
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
    categoryAPI(type) {
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
        sortBy: this.sortByCategory,
        orderBy: this.orderByCategory,
        searchTerm: this.search,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getItemsCategoriesByCompanyIdGo(data, headers)
        .then((response) => {
         
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseData == "200") {
            for (let [key, value] of Object.entries(response.data.data.list)) {
           
              response.data.data.list[key].closingValue = Math.abs(
                response.data.data.list[key].closingValue
              );

              if (value.totalAmount >= 0) {
                // + value
                response.data.data.list[key].openingClass =
                  "opening_plus_balance";
              } else {
                // - value
                response.data.data.list[key].openingClass =
                  "opening_minus_balance";
              }
              
            }


            let totalPages = Math.ceil(
              response.data.data.totalCount / itemsPerPage
            );
            this.loading = false;
            this.new_loading = false;
            this.category = response.data.data.list;
            this.totalCategory = response.data.data.totalCount;
            this.numberOfPages = totalPages;
          } else {
            this.loading = false;
            this.new_loading = false;
            this.category = [];
            this.totalCategory = 0;
            this.numberOfPages = 0;
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
      GoogleAnalytics.items_category_screen_search(this.search);
      this.categoryAPI(type);
    },

    updateSortCategory(byDesc, event) {
      this.options.page = this.page;
      if (byDesc == "by") {
        this.sortByCategory = event;
        this.orderByCategory = -1;
      } else if (byDesc == "desc") {
        if (event == true) {
          this.orderByCategory = 1;
        } else {
          this.orderByCategory = -1;
        }
      }
      this.categoryAPI();
      GoogleAnalytics.items_category_screen_sorting(
        this.sortByCategory,
        this.orderByCategory
      );
    
    },
  },
  mounted() {
    this.sortByCategory = "";
    this.source = localStorage.getItem("source");
    this.isPaid = localStorage.getItem("isPaid");
    this.symbol = localStorage.getItem("symbol");
    this.selected = "Ledger Group";
  },
};
</script>
