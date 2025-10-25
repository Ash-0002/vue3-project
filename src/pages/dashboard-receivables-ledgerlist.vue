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
   
    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-12 col-lg-12 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0">
            <div class="company_balance sales_cb new_title_sales_cb">
              <div class="left_arrow_sold">
                <a @click="$router.go(-1)"><i class="fa fa-chevron-left"></i></a>
              </div>
              <div class="company_name sales_c_name padding_left_30">
                <h3>{{VoucherName}}</h3>
                <div class="company_balance sales_cb">
                  <p>
                    Total:
                    <strong><span class="font_sans">₹</span>
                      {{Math.abs(totalAmount) | formatNumberParties}}</strong>
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
            <div class="custom_table ">
              <v-app id="inspire">
                

                <div class="show_entries_for_table new_show_entries_for_table no_searchbar_table">
                  <v-data-table :page="page" :pageCount="numberOfPages" :headers="selectedHeaders"
                          :items="ledgerlist" :hide-default-footer="true"
                          :options.sync="options"  :items-per-page="10" class="elevation-1" :footer-props="{
                              'items-per-page-options': [10, 25, 50, 100],
                              'items-per-page-text': 'row per page',
                            }">
                    <template v-slot:top="{ pagination, options, updateOptions }">
                      <v-data-footer :pagination="pagination" :options="options"
                        :items-per-page-options="[10, 25, 50, 100]" @update:options="updateOptions"
                        items-per-page-text="$vuetify.dataTable.itemsPerPageText" />
                    </template>
                    <template v-slot:item.voucherdate="{ item }">
                      <td>
                        <router-link 
                            class="onclick_details"
                            :to="{ path: item.url, query: { masterID: item.masterId } }"
                            >{{ formatLastSoldDate(item.voucherDate )}}</router-link
                          >
                      </td>
                    </template> 
                    <template v-slot:item.parenttype="{ item }">
                      <td>
                        <p>{{ item.parentType }}</p>
                      </td>
                    </template>
                 
                    <template v-slot:item.billname="{ item }">
                      <td>
                        <p>{{ item.billName }}</p>
                      </td>
                    </template>
                    <template v-slot:item.amount="{ item }">
                      <td align="right">
                        <p><span class="font_sans">₹</span> {{ Math.abs(item.amount) | formatNumberParties}}</p>
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
  </section>
</template>

<script>
import Vue from "vue";
Vue.filter("formatNumberParties", function (value) {
 

  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(
    value
  );
});

import moment from "moment";
import Api from "@/Api";
import Common from "@/Common";
export default {
  name: "ledgerlist",
  data() {
    return {
      selectedHeaders: [
        { text: "Voucher Date", value: "voucherdate" , sortable: false,},
        { text: "Parent Type", value: "parenttype", align: "left", sortable: false, },
        { text: "Bill Name", value: "billname", sortable: false, },
        { text: "Amount", value: "amount", align: "right" , sortable: false,},
      ],
      ledgerlist: [],
      page: 1,
      totalledger: 0,
      numberOfPages: 10,
      new_loading: true,
      options: {},
      sortBy: "voucherNumber",
      search: "",
      orderBy: 1,
      totalAmount:0,
      VoucherName:"",
    };
  },
  
  watch: {
    page: function () {
      this.options.page = this.page;
      this.getLedgerOutstandingBillWiseVouchers();
    },

    "options.itemsPerPage"() {
      this.page = 1
      this.options.page = 1;
      this.getLedgerOutstandingBillWiseVouchers();
    },
    value(val) {
      this.selectedHeaders = val;
     
    },
   
    deep: true,
  },
  methods: {
    getLedgerOutstandingBillWiseVouchers(){
      const { page, itemsPerPage } = this.options;
      let pageNumber = page - 1;
      const data = {
            _userId: localStorage.getItem("customerId"),
            company_id: localStorage.getItem("companyId"),
            startLimit: pageNumber * itemsPerPage,
             endLimit: itemsPerPage,
            requestFrom: "WEB",
            ledgerGuid:this.$route.params.ledgerGuid,
            billName:this.$route.params.billRef,
            startDate : this.$route.params.billDate

      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getLedgerOutstandingBillWiseVouchersGo(data, headers)
        .then((response) => {
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );

          if (responseData == "200") {
            this.new_loading= false
            this.ledgerlist = response.data.data.list;
            if(this.ledgerlist.length > 1){

              this.numberOfPages = Math.ceil(
                response.data.data.totalCount / itemsPerPage)
              this.totalAmount = response.data.data.totalAmount
              this.VoucherName = response.data.data.list[0].billName
             
              for (let [key, value] of Object.entries(
                response.data.data.list
              )) {
  
                response.data.data.list[key].url =
                    "/parties/details/" + 
                    response.data.data.list[key].voucher_id +
                    "/" +
                    response.data.data.list[key].parentType +
                    "/" + false;
              }
            }
            else{
            
              const voucherId = response.data.data.list[0].voucher_id;
              const parentType = response.data.data.list[0].parentType;
              const url = `/parties/details/${voucherId}/${parentType}/true`;
              this.$router.push(url);
             
            }
             
           
          } else {
            this.ledgerlist = [];
            this.new_loading= false
          }
        })
        .catch((error) => {
        
          Common.getStatusForActionFailed(error.response.status);
        });


    },
    formatLastSoldDate(lastSold) {
      lastSold = lastSold.split(" ")[0];
      if (lastSold) {
        if(lastSold == "1900-01-01"){
          lastSold ="-"
          return lastSold
        }
        else{
   
      return moment(lastSold, "YYYY-MM-DD HH:mm:ss").format("DD MMM YY");
        }
      }
    },
    handleBlur() {
      const type = "search";
      this.getLedgerOutstandingBillWiseVouchers(type);
    },
  
  },
  mounted() {
  
    console.log('this.$route.params',this.$route.params)
  },
};
</script>
<style>
.no_searchbar_table .v-data-footer__select {margin-left: 0 !important;}
</style>
