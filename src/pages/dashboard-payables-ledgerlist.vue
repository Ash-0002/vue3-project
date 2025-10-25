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
   

    
    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-12 col-lg-12 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0">
            <div class="company_balance sales_cb new_title_sales_cb">
              <div class="left_arrow_sold">
                <a @click="$router.go(-1)"
                  ><i class="fa fa-chevron-left"></i
                ></a>
              </div>
              <div class="company_name sales_c_name padding_left_30">
                <h3>{{ this.VoucherName }}</h3>
                <div class="company_balance sales_cb">
                  <p>
                    Total:
                    <strong
                      ><span class="font_sans">₹</span>
                      {{ this.totalAmount }}</strong
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    <div class="main_card">
      <div class="card">
        <div class="row">
          <div class="col-12">
            <div class="custom_table">
              <v-app id="inspire">
                <div class="row align-items-center">
                  <div class="col-lg-3 col-12">
                    <ul class="search_input new_left_search_part">
                      <li class="">
                     
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="show_entries_for_table new_show_entries_for_table">
                  <v-data-table
                    :page="page"
                    :pageCount="numberOfPages"
                    :headers="selectedHeaders"
                    :items="responseData"
                    :options.sync="options"
                    :hide-default-footer="true"
                    :items-per-page="10"
                    class="elevation-1"
                    :footer-props="{
                      'items-per-page-options': [10, 25, 50, 100],
                      'items-per-page-text': 'row per page',
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
                    <template v-slot:item.voucherDate="{ item }">
                      <td>
                        <router-link
                          class="onclick_details"
                          :to="{ path: item.url, query: { masterID: item.masterId } }"
                          >{{ formatDate(item.voucherDate) }}</router-link
                        >
                      </td>
                    </template>
                    <template v-slot:item.parentType="{ item }">
                      <td>
                   
                          {{ item.parentType }}
                      </td>
                    </template>
                    <template v-slot:item.billName="{ item }">
                      <td>
                        <p>{{ item.billName }}</p>
                      </td>
                    </template>
                    <template v-slot:item.amount="{ item }">
                      <td align="right">
                        <p>{{ item.amount }}</p>
                      </td>
                    </template>
                  </v-data-table>
                </div>
                <div
                  v-if="receivable_account"
                  class="show_entries_for_table new_show_entries_for_table"
                >
                  <v-data-table
                    :items="receivable_account_array"
                    :loading="loading"
                    class="elevation-1"
                    ref="table"
                    :hide-default-footer="true"
                  >
                    <template
                      v-slot:receivable_account_array="{ item }"
                    ></template>
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
import Api from "@/Api";
import moment from "moment";
import Common from "@/Common";

import { onServerPrefetch } from "vue";

export default {
  name: "ledgerlist",
  data() {
    return {
      selectedHeaders: [
        { text: "Voucher Date", value: "voucherDate", sortable: false },
        {
          text: "Parent Type",
          value: "parentType",
          align: "left",
          sortable: false,
        },
        { text: "Bill Name", value: "billName", sortable: false },
        { text: "Amount", value: "amount", align: "right", sortable: false },
      ],
   
      page: 1,
      totalledger: 0,
      numberOfPages: 0,
      options: {},
      sortBy: "voucherNumber",
      orderBy: 1,
      responseData: [],
      VoucherName: this.$route.params.billRef,
      totalAmount: 0,
      loading: true,
      new_loading: true,
    };
  },
  watch: {
    "options.itemsPerPage"() {
    
      this.page = 1;
      this.options.page = 1;
      this.getLedgerOutstandingBillWiseVouchers();
      if (this.call_function == "1") {
        this.call_function = "1";
        GoogleAnalytics.sales_screen_Rows_Per_Page(this.options.itemsPerPage);
      } else {
        this.call_function = "1";
      }
    },
  },

  methods: {
    getLedgerOutstandingBillWiseVouchers() {
      this.loading = true;
      this.new_loading = true;
      const { page, itemsPerPage } = this.options;
      let pageNumber = page - 1;
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        requestFrom: "WEB",
        ledgerGuid: this.$route.params.ledgerGuid,
        billName: this.$route.params.billRef,
        startDate : moment(this.$route.params.billDate).format("YYYY-MM-DD")
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgerOutstandingBillWiseVouchersGo(data, headers)
        .then((response) => {
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == 200) {
            this.loading = false;
            this.new_loading = false;
           // if(this.responseData.length > 1){



              for (let [key, value] of Object.entries(response.data.data.list)) {
                response.data.data.list[key].url =
                  "/parties/details/" +
                  response.data.data.list[key].voucher_id +
                  "/" +
                  response.data.data.list[key].parentType + false;
              }
              this.responseData = response.data.data.list;
              this.totalAmount = response.data.data.totalAmount;
              let totalPages = Math.ceil(
                response.data.data.totalCount / itemsPerPage
              );
              this.numberOfPages = totalPages;

           // }
            // else{
            //    const voucherId = response.data.data.list[0].voucher_id;
            //   const parentType = response.data.data.list[0].parentType;
            //   const url = `/parties/details/${voucherId}/${parentType}/true`;
            //   this.$router.push(url);

            // }

          } else {
            this.responseData = [];
            this.totalAmount = 0;
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.data.status);

          this.loading = false;
          this.new_loading = false;
        });
    },
    formatDate(date) {
      return moment(date).format("DD MMM YY");
    },
  },
  mounted() {
 
  },
};
</script>
