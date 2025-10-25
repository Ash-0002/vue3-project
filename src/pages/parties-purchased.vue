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
          <div class="arrow_left_items">
            <a @click="$router.go(-1)"><i class="fa fa-chevron-left"></i></a>
          </div>
          <div class="company_name new_title_company_name" id="company_name">
            <input type="hidden" id="partyLedgerName" value="" />
            <h3 id="" class="partyName">
              <span class="max-lines">{{ getLedgerData.ledgerName }}</span>
              <a v-b-modal.modal-multi-1
                ><img
                  src="/assets/images/1.0/parties/info.svg"
                  class="img-fluid party_info_icon ml-1"
              /></a>
            </h3>
            <div class="company_balance">
              <p>
                Balance:
                <strong
                  ><span id="closing_balance">
                    <span class="font_sans">{{ symbol }}</span>
                    {{
                      Math.abs(getLedgerData.closingBalance) | formatNumberParties
                    }}</span
                  ></strong
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-12 col-12">
          <ul class="new_set_dropdown_with_gross">
            <li class="marginright25">
              <p class="heading_dropdown_gross-all">View as</p>
              <ul class="new_tabs_items_similar">
                <li>
                  <router-link
                    class="headers"
                    :to="{
                      name: 'Parties',
                      params: { id: this.$route.params.id },
                    }"
                  >
                    Summary
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="headers"
                    :to="{
                      name: 'partiesSold',
                      params: { id: this.$route.params.id },
                    }"
                  >
                    Sold
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="headers"
                    :to="{
                      name: 'partiesPurchased',
                      params: { id: this.$route.params.id },
                    }"
                  >
                    Purchased
                  </router-link>
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
                <div class="row">
                  <div class="col-lg-3 col-sm-12 col-12">
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
                  <div class="col-lg-9 col-sm-12 col-12">
                    <ul
                      class="dashboard_sales_dropdown new_search_export_button"
                    >
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
                <div class="show_entries_for_table new_show_entries_for_table">
                  <v-data-table
                    :page="page"
                    :pageCount="numberOfPages"
                    :items="passengers"
                    :options.sync="options"
                    :server-items-length="totalPassengers"
                    :headers="headers"
                    must-sort
                    :sort-by="null"
                    :sort-desc="false"
                    @update:sort-by="updateSort('by', $event)"
                    @update:sort-desc="updateSort('desc', $event)"
                    :loading="loading"
                    class="elevation-1"
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

                    <template v-slot:item.name="{ item }">
                      <div v-if="isPaid == '' || isPaid == null">
                        <b-button
                          class="vch_num_all_btn"
                          v-b-modal.customerstatus-popup
                          >{{ item.name }}</b-button
                        >
                      </div>
                      <div v-else>
                        <router-link
                          class="onclick_details parties_inner_a"
                          :to="{
                            name: 'vouchers-listing',
                            params: {
                              ledger_name: item.name,
                              ledgerGuid: getLedgerData.guid,
                              stockItemGuid: item.stockItemGuid,
                            },
                            query: { type: 'Purchase' }
                          }"
                          >{{ item.name }}
                        </router-link>
                      </div>
                    </template>

                    <template v-slot:item.lastSold="{ item }">
                      <td>
                        <p>{{ formatLastSoldDate(item.lastSold) }}</p>
                      </td>
                    </template>
                    <template v-slot:item.totalQuantity="{ item }">
                      <td>
                        <p>{{ item.totalQuantity }}</p>
                      </td>
                    </template>
                    <template v-slot:item.lastPrice="{ item }">
                      <td align="right">
                        <p>
                          <span class="font_sans">{{ symbol }}</span>
                          {{ item.lastPrice }}
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
    <!--End Page header-->

    <!----------------------------------start party details modal------------------------------------------------------------->
    <div class="modal fade" id="party_details_modal">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content new_modal_content tx-size-sm">
          <button
            aria-label="Close"
            class="button_close"
            data-bs-dismiss="modal"
            type="button"
          >
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
              <h5>Ledger Name</h5>
              <p>{{ getLedgerData.ledgerName }}</p>
            </div>
            <div class="new_modal_body_content">
              <h5>Alias Name</h5>
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
             
            </div>
            <div class="new_modal_body_content email_address_type">
              <h5>Mobile Number</h5>
              <p>{{ getLedgerData.ledgerMobile }}</p>
             
            </div>
            <div class="new_modal_body_content">
              <h5>Contact Name</h5>
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
          <button
            aria-label="Close"
            class="button_close"
            data-bs-dismiss="modal"
            type="button"
          >
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
                <input
                  type="text"
                  value="deepak123@gmail.com"
                  placeholder="Enter Email Address"
                />
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
          <button
            aria-label="Close"
            class="button_close"
            data-bs-dismiss="modal"
            type="button"
          >
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
                <input
                  type="text"
                  value="9157838669"
                  placeholder="Enter Mobile Number"
                />
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

    <b-modal
      id="modal-multi-1"
      size="md"
      title="Party Details"
      hide-footer
      no-stacking
    >
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
          <div
            v-if="getLedgerData.parent !== ''"
            class="new_modal_body_content"
          >
            <h5>Parent</h5>
            <p>{{ getLedgerData.parent }}</p>
          </div>
          <div
            v-if="getLedgerData.partyGSTIn !== ''"
            class="new_modal_body_content"
          >
            <h5>GST</h5>
            <p>{{ getLedgerData.partyGSTIn }}</p>
          </div>
          <div
            v-if="getLedgerData.eMail !== ''"
            class="new_modal_body_content email_address_type"
          >
            <h5>Email Address</h5>
            <p>{{ getLedgerData.eMail }}</p>
           
          </div>
          <div
            v-if="getLedgerData.ledgerMobile !== ''"
            class="new_modal_body_content email_address_type"
          >
            <h5>Mobile Number</h5>
            <p>{{ getLedgerData.ledgerMobile }}</p>
            <div v-if="getLedgerData.w_show" class="onright_icon_show">
              <a :href="`${getLedgerData.w_url}`" target="_blank"
                ><span class="edit_icon_modal"
                  ><img
                    src="/assets/images/1.0/png/whatsapp.png"
                    class="img-fluid" /></span
              ></a>
            </div>
          </div>
          <div
            v-if="getLedgerData.ledgerContact !== ''"
            class="new_modal_body_content"
          >
            <h5>Contact</h5>
            <p>{{ getLedgerData.ledgerContact }}</p>
          </div>
          <div
            v-if="getLedgerData.address !== ''"
            class="new_modal_body_content"
          >
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
            <div class="form-group">
              <input
                type="text"
                value="deepak123@gmail.com"
                placeholder="Enter Email Address"
              />
            </div>
          </div>
          <div class="button_send_email text-center">
            <button class="">Update</button>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="modal-multi-3"
      size="md"
      title="Edit Mobile Number"
      hide-footer
    >
      <div class="modal-content email_modal_content tx-size-sm">
        <div class="modal-body top_modal_body">
          <div class="email_modal_body text-center pt-4 pb-4">
            <div class="form-group">
              <input
                type="text"
                value="9157838669"
                placeholder="Enter Mobile Number"
              />
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
import Common from "@/Common"
import GoogleAnalytics from "@/GoogleAnalytics";
import DateRangePicker from "vue2-daterange-picker";

//you need to import the CSS manually
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  name: "Parties",
  components: { DateRangePicker },
  data() {
    let startDate = moment(
      String(localStorage.getItem("date_range_start_date"))
    );
    let endDate = moment(String(localStorage.getItem("date_range_end_date")));
    return {
      startDate: startDate,
      endDate: endDate,
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
      storeGuid: "",
      page: 1,
      totalPassengers: 0,
      numberOfPages: 0,
      passengers: [],
      loading: true,
      new_loading: true,
      options: {},
      headers: [
        { text: "Item Name", value: "name" },
        { text: "Last Purchased", value: "lastSold" },
        { text: "Total Quantity", value: "totalQuantity" },
        { text: "Rate", value: "lastPrice", align: "right" },
      ],
      search: "",
      sortBy: "name",
      orderBy: 1,
      symbol: "",
      isPaid: "0",
      call_function: "0",
      hasAvgPerRateAccess: true,
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
      GoogleAnalytics.parties_purchased_screen_pagination(this.options.page);
    },

    "options.itemsPerPage"() {
      this.page=1
      this.options.page = 1; 
      this.getpartyDetails();

      if (this.call_function == "1") {
        this.call_function = "1";
        GoogleAnalytics.parties_purchased_screen_Rows_Per_Page(
          this.options.itemsPerPage
        );
      } else {
        this.call_function = "1";
      }
    },

    options: {
      handler() {
       
        GoogleAnalytics.parties_purchased_listing();
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
  methods: {
    updateLocalStorageValues() {
      this.hasAvgPerRateAccess = JSON.parse(
        localStorage.getItem("hasAvgPerRateAccess")
      );
    },
    manageHeaders(){
      if(this.hasAvgPerRateAccess){
        this.headers = [
         { text: "Item Name", value: "name" },
         { text: "Last Purchased", value: "lastSold" },
         { text: "Total Quantity", value: "totalQuantity" },
         { text: "Rate", value: "lastPrice", align: "right" },
        ]
      }
      else{
        this.headers = [
         { text: "Item Name", value: "name" },
         { text: "Last Purchased", value: "lastSold" },
         { text: "Total Quantity", value: "totalQuantity" },
        ]  
      }
    },
    freeusergeneratePdf() {
      GoogleAnalytics.parties_purchased_screen_viewpdf("viewpdf");
    },
    formatLastSoldDate(lastSold) {
      if(lastSold == "1900-01-01 00:00:00"){
          lastSold ="-"
          return lastSold
        }
        else{
      // Assuming lastSold is in the format 'YYYY-MM-DD HH:mm:ss'
      return moment(lastSold, "YYYY-MM-DD HH:mm:ss").format("DD MMM YY");
        }
    },
   
    generatePdf() {
      GoogleAnalytics.parties_purchased_screen_viewpdf("viewpdf");
      const data = {
        
        VoucherType: "Purchase",
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        partyLedgerGuid: this.$route.params.guid,
        startDate: moment(String(this.$refs.picker.start)).format("YYYY-MM-DD"),
        endDate: moment(String(this.$refs.picker.end)).format("YYYY-MM-DD"),
        partyLedgerName: this.getLedgerData.ledgerName,
        requestFrom: "WEB",
        sortBy: this.sortBy,
        orderBy: parseInt(this.orderBy),
        groupBy: "Purchased"
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getPDFForStockItemsbyLedgerIdGo(data, headers)
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
    activatedate: function (date) {
      if (date === "oned") {
        // one day
        GoogleAnalytics.parties_purchased_screen_date_filter("1D");
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
        GoogleAnalytics.parties_purchased_screen_date_filter("1W");
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
        GoogleAnalytics.parties_purchased_screen_date_filter("1M");
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
        GoogleAnalytics.parties_purchased_screen_date_filter("3M");
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
        GoogleAnalytics.parties_purchased_screen_date_filter("1Y");
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
        GoogleAnalytics.parties_purchased_screen_date_filter("2Y");
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
        GoogleAnalytics.parties_purchased_screen_date_filter("Max");
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

      this.getpartyDetails("", this.groupSelectValue, this.switch_type);
      localStorage.setItem("active_date", date);
      this.active_date = date;
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
      GoogleAnalytics.parties_purchased_screen_date_filter("Custom");
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
    getpartyDetails(type, filters = "") {
      if (type === "search") {
        this.options.page = 1;
        GoogleAnalytics.parties_purchased_screen_search(this.search);
      }

      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        ledgerGuid: this.$route.params.guid,
        EndLimit: 10000,
        sortBy: this.sortBy,
        orderBy: this.orderBy,
        searchTerm: this.search,
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
          
              const responseStatus = Common.getStatusForActionFailed(
              response.data.status
            );
            if (responseStatus == "200") {
            this.getLedgerData = response.data.data;
            this.storeGuid = response.data.data.guid;
            this.symbol = localStorage.getItem("symbol");
            this.readDataFromAPI(this.getLedgerData.ledgerName, filters);
            for (let [key, value] of Object.entries(
              response.data.data.aliasNames
            )) {
              if (key >= 1) {
                aliasNames = aliasNames + "," + value.aliasName;
              } else {
                aliasNames = value.aliasName;
              }
              
            }
            this.aliasNames = aliasNames;
            this.new_loading = false;
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
      this.getpartyDetails(type);
    },
    readDataFromAPI(ledgerName, filters = "") {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const { page, itemsPerPage } = this.options;
      console.log("Page Number ", page, itemsPerPage);

      let pageNumber = page - 1;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        sortBy: this.sortBy,
        orderBy: this.orderBy,
        PartyLedgerGuid: this.storeGuid,
        requestFrom: "WEB",
        partyLedgerName: ledgerName,
        VoucherType: "Purchase",
        startDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        endDate: moment(String(this.$refs.picker.end)).format("yyyy-MM-DD"),
        searchTerm: this.search,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getItemsbyLedgerIdGo(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            if (response.data.status == "200") {
              let totalPages = Math.ceil(
                response.data.data.totalCount / itemsPerPage
              );
              this.loading = false;
              this.new_loading = false;
              this.passengers = response.data.data.list;

              this.totalPassengers = response.data.data.totalCount;
              this.numberOfPages = totalPages;
              console.log(totalPages);
            } else {
              this.passengers = [];
              this.totalPassengers = "";
              this.numberOfPages = "";
              let totalPages = "";
              this.loading = false;
              this.new_loading = false;
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
    switchSelect(event) {
      this.getpartyDetails(event.target.value);
      console.log(event.target.value);
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
    paginationClicked() {
      this.getpartyDetails();
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

      this.getpartyDetails();

      GoogleAnalytics.parties_purchased_screen_sorting(
        this.sortBy,
        this.orderBy
      );
      console.log(this.sortBy);
      console.log(this.orderBy);
    },
  },
  mounted() {
    this.sortBy = "";
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
      // Code that will run only after the
      // entire view has been rendered
      this.getpartyDetails();
    });

    
  },
};
</script>
<style>
.v-tabs__bar {
  display: none;
}
</style>
