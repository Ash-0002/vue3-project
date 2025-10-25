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
   <!--start first card box-->
    <div class="page-header-title-box bg-white-all-pages">
            <div class="row align-items-center">
                 <div class="col-lg-12 col-12">
              <div class="arrow_left_items">
                <a @click="$router.go(-1)"
                  ><i class="fa fa-chevron-left"></i
                ></a>
              </div>

              <div
                class="company_name sales_c_name mobile_padding_left_0 new_title_company_name"
              >
                <h3>{{ handleSymbol(this.$route.params.cat_name) }}</h3>
                <div class="company_balance sales_cb">
                  <p>Closing Value: <strong></strong></p>
                </div>
              </div>
            </div>
            </div>
        </div>
    <!--end first card box-->
  
    <div class="main_card">
      <div class="card">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
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
                      <ul class="new_sales_top_table_part new_search_export_button">
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
                <div class="custom_table custom_table_pt">
                  <div class="show_entries_for_table new_show_entries_for_table">
                    <v-data-table
                      :page="page"
                      :pageCount="numberOfPages"
                      :headers="groupheaders"
                      :items="group"
                      :options.sync="options"
                      dense
                      :items-per-page="10"
                      :server-items-length="totalGroup"
                      :loading="loading"
                      class="elevation-1"
                      must-sort
                      :sort-by="null"
                    :sort-desc="false"
                      @update:sort-by="updateSortGroup('by', $event)"
                      @update:sort-desc="updateSortGroup('desc', $event)"
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
                                name: 'items',
                                params: { id: item._id, guid: item.guid },
                              }"
                            >
                              {{ item.stockItemName }}</router-link
                            >
                          </td>
                          <td class="">
                            <p>{{ item.hsnCode }}</p>
                          </td>
                          <td class="">
                            <p>{{ item.totalQuantity }}</p>
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
import GoogleAnalytics from "@/GoogleAnalytics";
import Vue from "vue";
var numeral = require("numeral");

Vue.filter("formatNumberItems", function (value) {
  return (
    localStorage.getItem("symbol") +
    numeral(value).format("0," + localStorage.getItem("amountformate"))
  ); // displaying other groupings/separators is possible, look at the docs
});
export default {
  name: "DatatableComponentItem",
  data() {
    return {
      page: 1,
      totalPassengers: 0,
      totalGroup: 0,
      totalCategory: 0,
      numberOfPages: 0,
      group: [],
      loading: true,
      options: {},

      groupheaders: [
        { text: "Item Name", value: "stockItemName" },
        { text: "HSN Code", value: "hsnCode" },
        { text: "Closing Stock", value: "totalQuantity" },
      ],
      search: "",
      Ledgers: ["Ledger Group", "Voucher Type", "Stock Item", "Month", "Bill"],
      selected: "",
      sortByGroup: "stockItemName",
      orderByGroup: 1,
      isPaid : "0",
    };
  },
  watch: {
    page: function () {
      this.options.page = this.page;
      this.groupAPI();
      GoogleAnalytics.item_category_listing_screen_pagination(this.options.page);
    },

    "options.itemsPerPage"() {
      this.page=1
      this.options.page = 1; 
      this.groupAPI();
      if(this.call_function == "1"){
        this.call_function = "1";
        GoogleAnalytics.item_category_listing_screen_Rows_Per_Page(this.options.itemsPerPage);
      }else{
        this.call_function = "1";
      }
    },

    options: {
      handler() {
        // this.groupAPI();
        GoogleAnalytics.item_category_listing_screen();
      },
    },
    deep: true,
  },
  methods: {
    handleSymbol(categoryName) { 
      return categoryName.replace("#4;", "");
    },
    freeusergeneratePdf() {
      GoogleAnalytics.items_summary_screen_viewpdf("viewpdf");
    },
    generatePdf() {
      GoogleAnalytics.items_summary_screen_viewpdf("viewpdf");
      const { page, itemsPerPage } = this.options;
      console.log("Page Number ", page, itemsPerPage);

      let pageNumber = page - 1;
      const data = {
        requestFrom: "WEB",
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startDate: localStorage.getItem("date_range_start_date"),
        endDate: localStorage.getItem("date_range_end_date"),
        orderBy: this.orderByGroup,
        sortBy: this.sortByGroup,
        filterBy: "Show All",
        groupBy: "Summary",
        voucherType : "Sales",
        categoryGuid: this.$route.params.guid,
        isForPdf : true,
        searchTerm: "",
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
    groupAPI(type) {
      var self = this;
      this.loading = true;
      if (type === "search") {
        this.options.page = 1;
      }

      const { page, itemsPerPage } = this.options;
      let pageNumber = page - 1;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        categoryGuid: this.$route.params.guid,
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        requestFrom: "WEB",
        sortBy: this.sortByGroup,
        orderBy: this.orderByGroup,
        searchTerm: this.search,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getStockItemsGo(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            

            console.log(response);

            let totalPages = Math.ceil(
              response.data.data.totalCount / itemsPerPage
            );
            this.loading = false;
            this.group = response.data.data.list;
            this.totalGroup = response.data.data.totalCount;
            this.numberOfPages = totalPages;
          }
        })

        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    paginationClicked() {
      this.groupAPI();
    },
    updateSortGroup(byDesc, event) {
      this.options.page = this.page;

      if (byDesc == "by") {
        this.sortByGroup = event;
        this.orderByGroup = -1;
      } else if (byDesc == "desc") {
        if (event == true) {
          this.orderByGroup = 1;
        } else {
          this.orderByGroup = -1;
        }
      }
      this.groupAPI();
      GoogleAnalytics.item_category_listing_screen_sorting(
        this.sortByGroup,
        this.orderByGroup
      );
    },
    handleBlur() {
      const type = "search";
      GoogleAnalytics.item_category_listing_screen_search(this.search);
      this.groupAPI(type);
    },
  },
  mounted() {
   
    this.isPaid = localStorage.getItem('isPaid');
    this.selected = "Ledger Group";
  },
};
</script>
