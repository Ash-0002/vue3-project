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
    <!-- loader add  -->
    <div v-if="new_loading" class="loader-wrapper">
            <div class="loading_css">
                <img src="/assets/images/1.0/brand/Loader-GIF-Final.gif" class="img-fluid loader_css" height="40"
                    width="40" />
            </div>
        </div>
         <!--start first card box-->
    <div class="page-header-title-box bg-white-all-pages">
            <div class="row align-items-center">
                <div class="col-xl-5 col-lg-12 col-12">
                      <div class="arrow_left_items">
<a @click="ResetStates"><i class="fa fa-chevron-left"></i></a>
</div>
<div class="company_name new_title_company_name" id="company_name">
<input type="hidden" id="partyLedgerName" value="" />
<h3 id="" class="partyName">{{stockItemName}}</h3>
</div>
<div class="company_name new_title_company_name">
                <div class="items_amount_closing_hsncode">
                   <div class="amount_closing_stock">
                  <p class="" v-if="hasAmountAccess">
                    Amount: <strong><span class="font_sans">{{symbol}}</span>{{totalAmount |
                                    formatNumberPartiesListing }}</strong>
                  </p>
                    <p>Closing Stock: <strong>{{closingStock}}</strong></p>
                  </div>
                  <div class="item_hsn_code_left">
                <p class="">HSN Code: <strong>{{hsnCode}}</strong></p>
                <div class="item_closing_stock_left">
                  <p v-if="hasAvgPerRateAccess">Avg Pur Rate: <strong><span class="font_sans">{{symbol}}</span>{{avgRate |
                                    formatNumberPartiesListing }}</strong></p>
                </div>
              </div>
                </div>
              </div>
                </div>
                <div class="col-xl-7 col-lg-12 col-12">
                    <ul class="new_set_dropdown_with_gross">
                            <li class="marginright25">
                             <p class="heading_dropdown_gross-all">View as</p> 
                             <ul class="new_tabs_items_similar">
                          <li><router-link class="headers" :to="{name: 'items',params: { guid : this.$route.params.guid} }"> Summary </router-link></li>
                          <li><router-link class="headers" :to="{name: 'items-customers',params: { guid : this.$route.params.guid} }"> Customers </router-link></li>
                          <li><router-link class="headers" :to="{name: 'items-supplers',params: { guid : this.$route.params.guid} }"> Suppliers </router-link></li>
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
                  <div class="show_entries_for_table new_show_entries_for_table">           
                  <v-data-table
                                :page="currentPage"
                                :pageCount="numberOfPages"
                                :headers="headers"
                                :items="passengers"
                                :options.sync="options"
                                dense                     :items-per-page="this.$store.state.Web1_Store.Items_ItemsPerPage"

                                :server-items-length="totalPassengers"
                                :loading="loading"
                                class="elevation-1"
                                must-sort

                                @update:sort-by="updateSort('by', $event)"
                                @update:sort-desc="updateSort('desc', $event)" disable-pagination item-key="table_header_index"
                                        ref="table" hide-default-footer= true 
                                         @pagination= "StoredPage"
                                         @update:items-per-page="updateItemsPerPage"
                              >

                              <template v-slot:top="{ pagination, options, updateOptions }">
                                            <v-data-footer 
                                            :pagination=pagination 
                                            :options=options
                                            :items-per-page-options=[10,25,50,100]
                                            @update:options="updateOptions"
                                            items-per-page-text="$vuetify.dataTable.itemsPerPageText"/>
                                        </template>

                              <template v-slot:item.voucherNumber="{ item }">
                                <div>
                                    <router-link class="onclick_details parties_inner_a"
                                        :to="{name: 'Parties_Details', params: {v_id: item._id,v_type : item.parentType}, query: { masterID: item.masterId }}">{{item.voucherNumber}}
                                    </router-link>
                                  </div>
                              </template>
                              <template v-slot:item.partyLedgerName="{ item }">
                                {{item.partyLedgerName}}
                              </template>
                              <template v-slot:item.voucherDate="{ item }">
                                  <div>
                                    <router-link class="onclick_details parties_inner_a"
                                        :to="{name: 'Parties_Details', params: {v_id: item._id,v_type : item.parentType}, query: { masterID: item.masterId }}">{{format_date(item.voucherDate)}}
                                    </router-link>
                                  </div>
                              </template>
                              <template v-slot:item.voucherType="{ item }">
                                  {{item.voucherType}}
                              </template>
                              <template v-slot:item.parentType="{ item }">
                                  {{item.parentType}}
                              </template>
                              <template v-slot:item.totalAmount="{ item }">
                                <td align="right">
                                <span class="font_sans">{{symbol}}</span> {{parseFloat(item.stockItemAmount) | formatNumberPartiesListing}}
                              </td>
                              </template>
                              <template v-slot:item.download="{ item }">
                                <td align="center" v-if ="isPaid =='' || isPaid == null" 
                                v-b-modal.customerstatus-popup><a @click="freeusergeneratePdf()" class="pdf_a_download DwonloadPDFImage" 
                                v-b-tooltip.hover.top="'Download PDF'">
                                  <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid pdficonimagetable" />
                        </a>
                        <!-- <a
                            v-b-tooltip.hover.top="'WhatsApp'"
                            target="_blank"
                            class="ml-2"
                          >
                            <img
                              src="/assets/images/1.0/parties/whatsappfill.svg"
                              class="img-fluid p-1 image_size_set_whatsappfill"
                            />
                          </a> -->
                          </td>
                                <td v-else align="center"><a @click="VoucherPdf(item._id,item.customisEwayStatus, item.customisEInvoiceStatus)" href="#" class="pdf_a_download" 
                                  v-b-tooltip.hover.top="'Download PDF'">
                                  <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid pdficonimagetable" /></a>
                                  <!-- <a
                            href="javascript:void(0);"
                            v-b-tooltip.hover.top="'WhatsApp'"
                            @click="whatapp_send(item.partyLedgerGuid,item.voucherNumber,item._id )"
                            class="ml-2"
                          >
                            <img
                              src="/assets/images/1.0/parties/whatsappfill.svg"
                              class="img-fluid p-1 image_size_set_whatsappfill"
                            />
                          </a> --></td>
                              </template>
                              
                              </v-data-table>
                            </div>
                            <template>
                                    <div class="bottom_navigation-pagination">
                                        <v-pagination
                                        v-model="page"
                                        :length=numberOfPages
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
  </section>
</template>


<script>
import Vue from "vue";
var numeral = require("numeral");

Vue.filter("formatNumberItems", function (value) {
    return new Intl.NumberFormat('en-IN',{minimumFractionDigits: 2}).format(value);
});

Vue.filter("formatNumberPartiesListing", function (value) {
    return new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2 }).format(value);
});
import Api from "@/Api";
import Common from "@/Common";
import GoogleAnalytics from "@/GoogleAnalytics";
import moment from 'moment';
import axios from "axios";
import DateRangePicker from 'vue2-daterange-picker'

export default {
  name: "DatatableComponent",
  components: { DateRangePicker },
  data() {
    let startDate = moment(String(localStorage.getItem('date_range_start_date')));
    let endDate = moment(String(localStorage.getItem('date_range_end_date')));
    return {
      startDate: startDate,
      endDate: endDate,

      dateRange: { startDate, endDate },
      defaultRanges: {  // I got a eslint syntax errors
          'Today': [new Date(), new Date()],
          'Yesterday': [new Date(Date.now() - 3600 * 1000 * 24), new Date(Date.now() - 3600 * 1000 * 24)],
          'This Week': [new Date(Date.now() - 7 * 24 * 3600 * 1000), new Date()],
          'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)],
          'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1), new Date(new Date().getFullYear(), new Date().getMonth(), 0)],
          'This Year': [new Date(String(localStorage.getItem('first_date_range_start_date'))), new Date(String(localStorage.getItem('first_date_range_end_date')))],
          'Last Year': [new Date(moment(String(localStorage.getItem('first_date_range_start_date'))).add(-1, 'year')), new Date(moment(String(localStorage.getItem('first_date_range_end_date'))).add(-1, 'year'))],
      },
      page: this.$store.state.Web1_Store.Items_Page,
      totalPassengers: 0,
      numberOfPages: 0,
      passengers: [],
      options : {},
      loading: true,
      new_loading: true,
      stockItemName:'',
      totalAmount : '',
      hsnCode : '',
      avgRate :'',
      closingStock: '',
      symbol : '',
      isPaid : "0",
      call_function : "0",
      
      headers: [
        { text: "Date", value: "voucherDate" },
        { text: "Ledger Name", value: "partyLedgerName" },
        { text: "Voucher Type", value: "voucherType" },
        { text: "Voucher Number", value: "voucherNumber",sortable: false },
        
        
        
        { text: "Amount", value: "totalAmount", align: 'right' },
        { text: "Download", value: "download", align: 'center', sortable: false },
      ],
      search: "",
      sortBy : 'voucherDate',
      orderBy : -1,
      parentType: "",
      hasAmountAccess: true,
      hasAvgPerRateAccess: true,
    };
  },
  filters: {
    dateCell(value) {
        let dt = new Date(value)

        return dt.getDate()
    },
    date(val) {
        return val ? val.toLocaleString() : ''
    }
  },
  //this one will populate new data set when user changes current page.
  watch: {
    page: function () {
        this.options.page = this.page;
        this.getItemList();
        GoogleAnalytics.items_summary_screen_pagination(this.options.page);

      },

      "options.itemsPerPage"() {
        setTimeout(() => {
        const StartIndex = (this.$store.state.Web1_Store.Items_Page - 1) * this.$store.state.Web1_Store.Items_ItemsPerPage
      const endIndex = StartIndex +  this.$store.state.Web1_Store.Items_ItemsPerPage 
      const Difference = endIndex - this.totalPassengers

        if(Difference > this.totalPassengers){
     
     this.page = 1
     this.options.page = 1

   }
   else{
     this.page= this.$store.state.Web1_Store.Items_Page
     this.options.page = this.page; 

   }
        
      }, 1000);
        this.getItemList();
        if(this.call_function == "1"){
        this.call_function = "1";
        GoogleAnalytics.items_summary_screen_Rows_Per_Page(this.options.itemsPerPage);
      }else{
        this.call_function = "1";
      }
      },

    options: {
        handler() {
            
            GoogleAnalytics.items_summary_listing();
        },
    },
    deep: true,
  },
  computed:{
    currentPage() {
      return this.$store.state.Web1_Store.Items_Page;
    },

  },
  methods: {
    freeusergeneratePdf(){
        GoogleAnalytics.items_summary_screen_viewpdf("viewpdf");
        
      },
      StoredPage(newValue){
      this.$store.dispatch('Web1_Store/setItemsPage', newValue.page)
    },
    ResetStates(){

      this.$router.go(-1)
        this.$store.dispatch('Web1_Store/resetItemsState');
    },
    updateItemsPerPage(newValue){
      this.$store.dispatch('Web1_Store/setItemsItemsPerPage', newValue)
    },
      VoucherPdf(v_id,isEwayStatus, isEInvoiceStatus){
      const data = {
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        voucherId: v_id,
        isEway: isEwayStatus == 0 ? false : true,
        isEinvoice: isEInvoiceStatus == 0 ? false : true,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getPDFForVoucherDetailsGo(data, headers)
          .then((response) => {
            if (response.data.message == "AUTHENTICATION_FAILED") {
              localStorage.clear();
              window.location.href = "/";
            } else {
              this.pdfUrl = response.data.data.pdf;
              localStorage.setItem("pdfUrl", this.pdfUrl);
              window.open(window.location.origin + "/pdfNew");
             
            }
          })
          .catch((err) => {
            Common.getStatusForActionFailed(err.response.status);
            alert("ERROR");
            this.loading = false;
          });

    },
    generatePdf() {
      GoogleAnalytics.items_summary_screen_viewpdf("viewpdf");
      const { page, itemsPerPage } = this.options;
      console.log("Page Number ", page, itemsPerPage);


      let pageNumber = page - 1;
        const data = {
         
          requestFrom: "WEB",
          startDate: moment(localStorage.getItem("date_range_start_date")).format("YYYY-MM-DD"),
          endDate: moment(localStorage.getItem("date_range_end_date")).format("YYYY-MM-DD"),
          
          company_id: localStorage.getItem("companyId"),
          _userId: localStorage.getItem("customerId"),
          stockItemGuid : this.$route.params.guid,
          sortBy: this.sortBy,
          voucherTypes: [
         "Sales",
         "Purchase",
         "Debit Note",
         "Credit Note",
         "Receipt",
         "Payment",
         "Journal",
         "Contra"
           ],
          orderBy: parseInt(this.orderBy),
          isForPdf: true
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.getPDFForVouchersByStockIdGo(data, headers)
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
    activatedate:function(date){
        if(date === "oned"){
            // one day
            GoogleAnalytics.items_summary_screen_date_filter("1D");
            var new_date_start_date = moment(String(new Date())).format('yyyy-MM-DD');
            var new_date_end_date = moment(String(new Date())).format('yyyy-MM-DD');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
            this.$refs.picker.end = new_date_end_date;
        }else if(date === "onew"){
            // one week
            GoogleAnalytics.items_summary_screen_date_filter("1W");
            var new_date_start_date = moment(String(new Date(Date.now() - 7 * 24 * 3600 * 1000))).format('yyyy-MM-DD');
            var new_date_end_date = moment(String(new Date())).format('yyyy-MM-DD');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
            this.$refs.picker.end = new_date_end_date;
        }else if(date === "onem"){
            // one month
            GoogleAnalytics.items_summary_screen_date_filter("1M");
            var new_date_start_date = moment(String(new Date())).add( -1, 'M').format('yyyy-MM-DD');
            var new_date_end_date = moment(String(new Date())).format('yyyy-MM-DD');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
            this.$refs.picker.end = new_date_end_date;
        }else if(date === "threem"){
            // 3 month 
            GoogleAnalytics.items_summary_screen_date_filter("3M");
            var new_date_start_date = moment(String(new Date())).add( -3, 'M').format('yyyy-MM-DD');
            var new_date_end_date = moment(String(new Date())).format('yyyy-MM-DD');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
            this.$refs.picker.end = new_date_end_date;
        }else if(date === "oney"){
            // 1 Year
            GoogleAnalytics.items_summary_screen_date_filter("1Y");
            var new_date_start_date = moment(String(new Date(String(localStorage.getItem('first_date_range_start_date'))))).format('yyyy-MM-DD');
            var new_date_end_date = moment(String(new Date(String(localStorage.getItem('first_date_range_end_date'))))).format('yyyy-MM-DD');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
            this.$refs.picker.end = new_date_end_date;

        }else if(date === "twoy"){
            // 2 Year
            GoogleAnalytics.items_summary_screen_date_filter("2Y");
            var new_date_start_date = moment(String(new Date(String(localStorage.getItem('first_date_range_start_date'))))).add(-1, 'years').format('yyyy-MM-DD');
            var new_date_end_date = moment(String(new Date(String(localStorage.getItem('first_date_range_end_date'))))).format('yyyy-MM-DD');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
            this.$refs.picker.end = new_date_end_date;
        }else if(date === "max"){
                // max date
                GoogleAnalytics.items_summary_screen_date_filter("Max");
                var new_date_start_date = moment(String(new Date(String(localStorage.getItem('max_startFrom'))))).format('yyyy-MM-DD');
                var new_date_end_date = moment().format('yyyy-MM-DD');
                this.dateRange.startDate = new_date_start_date;
                this.dateRange.endDate = new_date_end_date;
                this.$refs.picker.start = new_date_start_date;
                this.$refs.picker.end = new_date_end_date;
            }
        localStorage.setItem("date_range_start_date", new_date_start_date);
        localStorage.setItem("date_range_end_date", new_date_end_date);
        this.getItemList("",this.groupSelectValue,this.switch_type);
        localStorage.setItem("active_date", date);
        this.active_date = date;
    },
    date_setting(){
            var check_start_date_mounted = moment(String(localStorage.getItem('date_range_start_date')));
            var check_end_date_mounted = moment(String(localStorage.getItem('date_range_end_date')));
            var days_mounted = check_end_date_mounted.diff(check_start_date_mounted, 'days') + 1;
            if(days_mounted == "730"){
                this.active_date = "twoy";
            }else if(days_mounted == "365" || days_mounted == "366"){
                this.active_date = "oney";
            }else if(days_mounted == "90" || days_mounted == "87" || days_mounted == "88" || days_mounted == "89" || days_mounted == "90" || days_mounted == "91" || days_mounted == "92"){
                this.active_date = "threem";
            }else if(days_mounted == "31" || days_mounted == "28" || days_mounted == "29" || days_mounted == "30"){
                this.active_date = "onem";
            }else if(days_mounted == "8"){
                this.active_date = "onew";
            }else if(days_mounted == "1"){
                this.active_date = "oned";
            }else if(days_mounted == max_days){
                    this.active_date = "max";
            }else{
                this.active_date = "oney";
            }
            localStorage.setItem("active_date", this.active_date);
        },
    getItemList(type="") {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      if (type === "search") {
          this.options.page = 1;
      }
      const { page, itemsPerPage } = this.options;
      console.log("Page Number ", page, itemsPerPage);


      let pageNumber = page - 1;
      const data = {
          startLimit: pageNumber * itemsPerPage,
          endLimit: itemsPerPage,
          requestFrom: "WEB",
          startDate: moment(String(this.$refs.picker.start)).format('yyyy-MM-DD'),
          endDate: moment(String(this.$refs.picker.end)).format('yyyy-MM-DD'),
          searchTerm: this.search,
          parentType : this.parentType,
          company_id: localStorage.getItem('companyId'),
          _userId: localStorage.getItem('customerId'),
          stockItemGuid : this.$route.params.guid,
          VoucherTypes  :[
          "Sales",
          "Purchase",
          "Journal",
          "Payment",
          "Receipt",
          "Debit Note",
          "Credit Note",
          "Purchase Order",
          "Sales Order",
          "Contra",
          "Stock Journal",
          "Delivery Note",
          "Quotation",
        ],
          sortBy : this.sortBy,
          orderBy : this.orderBy
      };
      const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "token": localStorage.getItem('webAuthToken')
      };
      Api.getVouchersbyCompanyIdGo(data, headers)

          .then(response => {
              console.log(response);
              
                const responseData = Common.getStatusForActionFailed(response.data.status);
                  if (responseData == "200") {
                      for (let [key, value] of Object.entries(response.data.data.list)) {
                        if (value.totalAmount >= 0) {
                            // + value
                            response.data.data.list[key].totalAmountClass = "opening_plus_balance";
                        } else {
                            // - value
                            response.data.data.list[key].totalAmountClass = "opening_minus_balance";
                        }
                      }




                      console.log(response.data.data.list);
                      let totalPages = Math.ceil(response.data.data.totalCount / itemsPerPage);
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

          })
          .catch((err) => {
              Common.getStatusForActionFailed(err.response.status)
              this.loading = false;
              this.new_loading = false;
          });
    },
    update() {
         localStorage.setItem("date_range_start_date", moment(String(this.$refs.picker.start)).format('yyyy-MM-DD'));
            localStorage.setItem("date_range_end_date", moment(String(this.$refs.picker.end)).format('yyyy-MM-DD'));
            GoogleAnalytics.items_summary_screen_date_filter("Custom");
        this.get_Item_details();
        this.getItemList();
        this.date_setting();
    },
    get_Item_details(){
      const data = {
        company_id: localStorage.getItem('companyId'),
        _userId: localStorage.getItem("customerId"),
        stockItemGuid: this.$route.params.guid,
        requestFrom: "WEB",
        startDate: moment(String(this.$refs.picker.start)).format('yyyy-MM-DD'),
        endDate: moment(String(this.$refs.picker.end)).format('yyyy-MM-DD'),
      };
      const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "token": localStorage.getItem('webAuthToken')
      };
      Api.getItemByIdGo(data, headers)
        .then(response => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = '/';
          }else{
            this.stockItemName = response.data.data.stockItemName;
            this.totalAmount = response.data.data.totalAmount;
            this.hsnCode = response.data.data.hsnCode;
            this.avgRate = Math.abs(response.data.data.avgRate);
            this.closingStock = response.data.data.totalQuantity;
            this.symbol = localStorage.getItem('symbol');
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
            this.loading = false;
            this.new_loading = false;
        });
    },
    left_arrow(){
      var check_start_date = moment(String(this.dateRange.startDate));
      var check_end_date = moment(String(this.dateRange.endDate));
      var days = check_end_date.diff(check_start_date, 'days') + 1;
      if(days === 1){
          // today
          var new_date_start_date = moment(check_start_date).add(-1, 'days');
          var new_date_end_date = moment(check_end_date).add(-1, 'days');
          this.dateRange.startDate = new_date_start_date;
          this.dateRange.endDate = new_date_end_date;
          this.$refs.picker.start = new_date_start_date;
          this.$refs.picker.end = new_date_end_date;
      }else if(days === 2){
          // yesterdays
          var new_date_start_date = moment(check_start_date).add(-2, 'days');
          var new_date_end_date = moment(check_end_date).add(-2, 'days');
          this.dateRange.startDate = new_date_start_date;
          this.dateRange.endDate = new_date_end_date;
          this.$refs.picker.start = new_date_start_date;
          this.$refs.picker.end = new_date_end_date;
      }else if(days == 8){
          // week
          var new_date_start_date = moment(check_start_date).add(-8, 'days');
          var new_date_end_date = moment(check_end_date).add(-8, 'days');
          this.dateRange.startDate = new_date_start_date;
          this.dateRange.endDate = new_date_end_date;
          this.$refs.picker.start = new_date_start_date;
          this.$refs.picker.end = new_date_end_date;
      }else if (days > 28 && days <= 31 || days === 28) {
          // month
          var futureMonth = moment(check_start_date).add(-1, 'M');
          var new_date_start_date = moment(futureMonth).startOf('month');
          var new_date_end_date = moment(futureMonth).endOf('month');
          this.dateRange.startDate = new_date_start_date;
          this.dateRange.endDate = new_date_end_date;
          this.$refs.picker.start = new_date_start_date;
          this.$refs.picker.end = new_date_end_date;

      }else if (days > 360 && days <= 366) {
          // Year
          var new_date_start_date = moment(check_start_date).add(-1, 'years');
          var new_date_end_date = moment(check_end_date).add(-1, 'years');
          this.dateRange.startDate = new_date_start_date;
          this.dateRange.endDate = new_date_end_date;
          this.$refs.picker.start = new_date_start_date;
          this.$refs.picker.end = new_date_end_date;
      }else{
          // Custom Days
          var new_date_start_date = moment(check_start_date).add('-'+days, 'days');
          var new_date_end_date = moment(check_end_date).add('-'+days, 'days');
          this.dateRange.startDate = new_date_start_date;
          this.dateRange.endDate = new_date_end_date;
          this.$refs.picker.start = new_date_start_date;
          this.$refs.picker.end = new_date_end_date;
      }
      localStorage.setItem("date_range_start_date", new_date_start_date);
      localStorage.setItem("date_range_end_date", new_date_end_date);
      this.get_Item_details();
      this.getItemList();
    },
    right_arrow(){
        var check_start_date = moment(String(this.dateRange.startDate));
        var check_end_date = moment(String(this.dateRange.endDate));
        var days = check_end_date.diff(check_start_date, 'days') + 1;
        if(days === 1){
            // today
            var new_date_start_date = moment(check_start_date).add(1, 'days');
            var new_date_end_date = moment(check_end_date).add(1, 'days');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
          this.$refs.picker.end = new_date_end_date;
        }else if(days === 2){
            // yesterdays
            var new_date_start_date = moment(check_start_date).add(2, 'days');
            var new_date_end_date = moment(check_end_date).add(2, 'days');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
          this.$refs.picker.end = new_date_end_date;
        }else if(days == 8){
            // week
            var new_date_start_date = moment(check_start_date).add(8, 'days');
            var new_date_end_date = moment(check_end_date).add(8, 'days');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
          this.$refs.picker.end = new_date_end_date;
        }else if (days > 28 && days <= 31 || days === 28) {
            // month
            var futureMonth = moment(check_start_date).add(1, 'M');
            var new_date_start_date = moment(futureMonth).startOf('month');
            var new_date_end_date = moment(futureMonth).endOf('month');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
          this.$refs.picker.end = new_date_end_date;

        }else if (days > 360 && days <= 366) {
            // Year
            var new_date_start_date = moment(check_start_date).add(1, 'years');
            var new_date_end_date = moment(check_end_date).add(1, 'years');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
          this.$refs.picker.end = new_date_end_date;
        }else{
            // Custom Days
            var new_date_start_date = moment(check_start_date).add(days, 'days');
            var new_date_end_date = moment(check_end_date).add(days, 'days');
            this.dateRange.startDate = new_date_start_date;
            this.dateRange.endDate = new_date_end_date;
            this.$refs.picker.start = new_date_start_date;
          this.$refs.picker.end = new_date_end_date;
        }
        localStorage.setItem("date_range_start_date", new_date_start_date);
        localStorage.setItem("date_range_end_date", new_date_end_date);
        this.get_Item_details();
        this.getItemList();
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
    handleBlur() {
        const type = "search";
        GoogleAnalytics.items_summary_screen_search(this.search);
        this.getItemList(type);
    },
    paginationClicked() {
    },

    updateSort(byDesc, event) {
      this.options.page = this.page;

      if (byDesc == "by") {
            this.sortBy = event;
            this.orderBy=-1
      } else if (byDesc == "desc") {
        if (event == true) {
          this.orderBy = 1;
        } else {
          this.orderBy = -1;
        }
      }
        this.getItemList();
        console.log(this.sortBy);
        console.log(this.orderBy);
        GoogleAnalytics.items_summary_screen_sorting(this.sortBy,this.orderBy);
    }
  },
  //this will trigger in the onReady State
  mounted() {
    this.hasAmountAccess = JSON.parse(localStorage.getItem("hasAmountAccess"));
    this.hasAvgPerRateAccess = JSON.parse(localStorage.getItem("hasAvgPerRateAccess"));
    this.sortBy = '';
    this.isPaid = localStorage.getItem('isPaid');
     if(localStorage.getItem('active_date') === null || localStorage.getItem('active_date') === ""){
            this.active_date = 'oney';
        }else{
            var check_start_date_mounted = moment(String(localStorage.getItem('date_range_start_date')));
            var check_end_date_mounted = moment(String(localStorage.getItem('date_range_end_date')));
            var days_mounted = check_end_date_mounted.diff(check_start_date_mounted, 'days') + 1;
            if(days_mounted == "365" || days_mounted == "366"){
                this.active_date = 'oney';
            }else{
                this.active_date = localStorage.getItem('active_date');
            }
        }
    this.get_Item_details();
    this.$nextTick(function () {
           
    })
  },
};
</script>



