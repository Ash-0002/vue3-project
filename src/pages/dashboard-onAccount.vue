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
        <img src="/assets/images/1.0/brand/Loader-GIF-Final.gif" class="img-fluid loader_css" height="40" width="40" />
      </div>
    </div>
    <div class="main_card">
      <div class="card">
        <div class="company_name sales_c_name mobile_padding_left_0">
            <div class="company_balance sales_cb new_title_sales_cb">
              <div class="left_arrow_sold">
                <a @click="navigateBack"><i class="fa fa-chevron-left"></i></a>
              </div>
              <div class="company_name sales_c_name padding_left_30">
                <h3>On Account</h3>
                <div class="company_balance sales_cb">
                  <p>
                    Total:
                    <strong><span class="font_sans">{{ symbol }}</span>
                      {{ this.grandTotal | formatNumberParties }}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        <div class="row">

          <div class="col-12">
            <div class="custom_table">
              <v-app id="inspire">
                <div  class="show_entries_for_table new_show_entries_for_table">
                  <v-data-table :page="currentPage" :pageCount="numberOfPages" :headers="selectedHeaders" :items="ledger"
                  :options.sync="options" dense :items-per-page="this.$store.state.Web1_Store.OnAccount_itemsPerPage" :server-items-length="totalledger"
                    :loading="loading" class="elevation-1" must-sort :sort-by="null" :sort-desc="false"
                    item-key="table_header_index" ref="table" :hide-default-footer="true"
                    @update:sort-by="updateSort('by', $event)" @update:sort-desc="updateSort('desc', $event)"
                    @pagination="StoredPage"
                      @update:items-per-page="updateItemsPerPage"
                   >
                    <template v-slot:top="{ pagination, options, updateOptions }">
                      <v-data-footer :pagination="pagination" :options="options"
                        :items-per-page-options="[10, 25, 50, 100]" @update:options="updateOptions"
                        items-per-page-text="$vuetify.dataTable.itemsPerPageText" />
                    </template>

                    <template v-slot:item.billVchNumber="{ item }">
             <td>
                        <div v-if="isPaid == '' || isPaid == null">
                          <b-button class="vch_num_all_btn" v-b-modal.customerstatus-popup> {{ item.billVchNumber &&
                            item.billVchNumber.trim() ? item.billVchNumber : '#' }}</b-button>
                        </div>
                        <div v-else>
                          <router-link class="onclick_details"
                            :to="item.billVchAmount && item.billVchAmount.trim() && (item.billVchDate && item.billVchDate.trim() ) && (item.billVchType && item.billVchType.trim() !== 'Opening Balance')   ? { 
                              path: `/parties/details/${encodeURIComponent(item.billVchAmount)}/${encodeURIComponent(item.billVchDate.split(' ')[0])}/${item.billVchNumber ?  encodeURIComponent(item.billVchNumber): 'no-number'}/${encodeURIComponent(item.billVchType)}`
                            }  : ''">
                            {{ item.billVchNumber && item.billVchNumber.trim() ? item.billVchNumber : '#'
                            }}</router-link>
                        </div>
                      </td>
                    </template>
                    <template v-slot:item.billVchDate="{ item }">
                      {{ formatLastSoldDate(item.billVchDate) }}
                    </template>

                    <template v-slot:item.billVchType="{ item }">
                      {{ item.billVchType }}
                    </template>

                    <template v-slot:item.billVchAmount="{ item }">
                      <span class="font_sans">{{ symbol }}</span>
                      {{ Math.abs(item.billVchAmount) | formatNumberParties }}
                      <span v-if="item.billVchAmount < 0">Dr</span>
                      <span v-else-if="item.billVchAmount > 0">Cr</span>
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

import moment from "moment";
import Api from "@/Api";
import Common from "@/Common";
import GoogleAnalytics from "@/GoogleAnalytics";
import DateRangePicker from "vue2-daterange-picker";


import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  name: "DashboardOnAccount",
  components: { DateRangePicker },
  data() {
    let startDate = moment(
      String(localStorage.getItem("date_range_start_date"))
    );
    let endDate = moment(String(localStorage.getItem("date_range_end_date")));
    return {
      startDate: startDate,
      endDate: endDate,
      headers: [
        {
          text: "Voucher No",
          value: "billVchNumber",
          align: "left",
          sortable: false,
        },
        { text: "Date", value: "billVchDate" },
        { text: "Type", value: "billVchType", sortable: false, },
        { text: "Amount", value: "billVchAmount", align: "right" },

      ],
      page: this.$store.state.Web1_Store.OnAccount_page,
      totalledger: 0,
      numberOfPages: 0,
      ledger: [],
      value: [],
      selectedHeaders: [],
      loading: true,
      new_loading: true,
      options: {},
      symbol: "",
      search: "",
      sortBy: "voucherNumber",
      orderBy: 1,
      rangeValue: 0,
      grandTotal: 0,
      onAccountDetailskey: "",
      onAccountDetailsamount: 0,
      isPaid: "",
      showInside: false,
      showOutside: false,
      receivable_list: 1,
      receivable_account: 0,
      receivable_account_array: [],
      filter_array: [],
      billVchAmount: '',
      billVchDate:'',
      billVchNumber: '',
      billVchType: ''
    };
  },
  watch: {
    page: function () {
      this.options.page = this.page;
      this.ledger_data();
    },

    "options.itemsPerPage"() {
      setTimeout(() => {

const StartIndex = (this.$store.state.Web1_Store.OnAccount_page - 1) * this.$store.state.Web1_Store.OnAccount_itemsPerPage
const endIndex = StartIndex +  this.$store.state.Web1_Store.OnAccount_itemsPerPage 
const Difference = endIndex - this.totalPassengers

  if(Difference > this.totalPassengers ){

this.page = 1
this.options.page = 1

}
else{
this.page= this.$store.state.Web1_Store.OnAccount_page
this.options.page = this.page; 

}
  
}, 1000);
      this.ledger_data();

    },
    value(val) {
      this.selectedHeaders = val;

    },
    options: {
      handler() {

        GoogleAnalytics.receivables_ledgers_listing();
      },
    },
    deep: true,
  },
  created() {
    this.selectedHeaders = this.headers;
    console.log(this.selectedHeaders);
  },
  methods: {
    navigateBack() {
      this.$router.go(-1);
      this.$store.dispatch('Web1_Store/resetOnAccountState')
    },
    StoredPage(newValue){
      this.$store.dispatch('Web1_Store/setOnAccountPage', newValue.page)
      

    },
    updateItemsPerPage(newValue){
      this.$store.dispatch('Web1_Store/setOnAccountPerPage', newValue)


    },
    updateSort(byDesc, event) {
      this.options.page = this.page;
      if (byDesc == "by") {
        this.sortBy = event;
        this.orderBy = '-1'
      } else if (byDesc == "desc") {
        if (event == true) {
          this.orderBy = "1";
        } else {
          this.orderBy = "-1";
        }
      }
      if (event === "billVchAmount") {
        this.sortBy = "dueAmount";
      //  this.orderBy ? this.orderBy : this.orderBy = '-1';
      }
      else if (event === "billVchDate") {
        this.sortBy = "date";
      }

      this.ledger_data();
      GoogleAnalytics.receivables_ledger_screen_sorting(
        this.sortBy,
        this.orderBy
      );

    },
    formatLastSoldDate(lastSold) {
      lastSold = lastSold.split(" ")[0];
      if (lastSold) {
        if (lastSold == "1900-01-01") {
          lastSold = "-"
          return lastSold
        }
        else {

          return moment(lastSold, "YYYY-MM-DD HH:mm:ss").format("DD MMM YY");
        }
      }
    },
    ledger_data(type) {
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

        guid: this.$route.params.guid,
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        searchTerm: this.search,
        startDate: localStorage.getItem("date_range_start_date"),
        endDate: localStorage.getItem("date_range_end_date"),
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        sortBy: this.sortBy,
        orderBy: parseInt(this.orderBy),
        requestFrom: "WEB",

      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getOnAccountDetails(data, headers)
        .then((response) => {

          const responseStatus = Common.getStatusForActionFailed(response.data.status)
          if (responseStatus == "200") {


            for (let [key, value] of Object.entries(
              response.data.data.list
            )) {
              this.billVchAmount = response.data.data.list.billVchAmount
              this.billVchDate = moment(response.data.data.list.billVchDate).format("DD MMM YYY")
              console.log(this.billVchDate, "billVchDate")
              this.billVchNumber = response.data.data.list.billVchNumber
              this.billVchType = response.data.data.list.billVchType
              // if (
              //   response.data.data.list[key].voucherId != "" &&
              //   response.data.data.list[key].parentType != ""
              // ) {

              //   response.data.data.list[key].url =
              //     "/receivables-ledgerlist" + "/" +
              //     response.data.data.list[key].ledgerGuid + "/" + encodeURIComponent(response.data.data.list[key].billRef)
              // } else {
              //   response.data.data.list[key].url = "#";
              // }
            }


            let totalPages = Math.ceil(
              response.data.data.totalCount / itemsPerPage
            );
            this.loading = false;
            this.new_loading = false;

            this.ledger = response.data.data.list;
            this.totalledger = response.data.data.totalCount;
            this.numberOfPages = totalPages;
            this.grandTotal = Math.abs(response.data.data.onAccount);

            // }
          } else {
            this.loading = false;
            this.new_loading = false;
            this.ledger = [];
            this.totalledger = 0;
            this.numberOfPages = 0;
            this.grandTotal = 0;
          }
          // }
        })

        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status)
          this.loading = false;
          this.new_loading = false;
        });
    },

  },
  computed:{
    currentPage() {
      return this.$store.state.Web1_Store.OnAccount_page;
    },

  },
  
  mounted() {
    this.sortBy = '';
    this.isPaid = localStorage.getItem("isPaid");
  },
};
</script>
