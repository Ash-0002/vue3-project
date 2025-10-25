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
                <img src="/assets/images/1.0/brand/Loader-GIF-Final.gif" class="img-fluid loader_css" height="40"
                    width="40" />
            </div>
        </div>
        <!--Page header-->
        <div class="page-header-title-box">
            <div class="row align-items-center">
                <div class="col-lg-12 col-12">
                    <div class="title_text">
                        <h4 class="page-title mb-0">Report</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="main_card">
            <div class="card">
                <div class="">
                    <div class="row">
                        <div class="col-lg-6 col-12">
                            <div class="arrow_left_items">

                                <a @click="$router.go(-1)"><i class="fa fa-chevron-left"></i></a>
                            </div>
                            <div class="company_name new_title_company_name" id="company_name">
                                <input type="hidden" id="partyLedgerName" value="" />
                                <h3 id="" class="partyName">{{getLedgerData.ledgerName}} <a
                                    v-b-modal.modal-multi-1><img
                                            src="/assets/images/1.0/parties/info.svg"
                                            class="img-fluid party_info_icon ml-1" /></a></h3>
                                <div class="company_balance">
                                    <p>Balance: <span id="closing_balance"> <span class="font_sans">{{symbol}}</span>{{getLedgerData.closingBalance |
                                    formatNumberParties }}</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-12">
                            <div class="parties_datefilter_vue">
                                <span class="datepicker_left_arrow" @click="left_arrow()"><i class="fa fa-chevron-left"></i></span>
                                <date-range-picker ref="picker" :auto-submit="true"
                                    :locale-data="{ firstDay: 1, format: 'dd/mm/yyyy',customRangeLabel: 'Custom Range',separator: ' - ' }"
                                    v-model="dateRange" :ranges="defaultRanges" :startDate="startDate"
                                    :endDate="endDate" @update="update()">
                                    <template v-slot:input="picker" style="min-width: 350px;">

                                    </template>
                                </date-range-picker>
                                <span class="datepicker_right_arrow" @click="right_arrow()"><i class="fa fa-chevron-right"></i></span>
                                <span></span>
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
                        <div class="main_tabs">
                            <div class="panel panel-primary">
                                <div class="tab-menu-heading p-0">
                                    <div class="tabs-menu parties_tab_menu">
                                        <div class="row">
                                            <div class="col-lg-6 col-12">
                                            </div>
                                            <div class="col-lg-6 col-12">
                                                <div class="tabing_right_dropdown">
                                                    <ul class="new_sales_top_table_part">
                                                        <li class="">
                                                            <div class="">
                                                                <div class="new_top_table_dropdown">

                                                                    <select name="" id="" class="form-select"
                                                                        @change="switchSelect($event)">
                                                                        <option value="">Filters</option>
                                                                        <option value="Journal">Journal</option>
                                                                        <option value="Purchase">Purchase</option>
                                                                        <option value="Sales">Sales</option>
                                                                        <option value="Payment">Payment</option>
                                                                        <option value="Receipt">Receipt</option>
                                                                        <option value="Contra">Contra</option>
                                                                        <option value="Debit Note">DebitNote
                                                                        </option>
                                                                        <option value="Credit Note">CreditNote
                                                                        </option>
                                                                        <option value="Purchase Order">Purchase Order
                                                                        </option>
                                                                        <option value="Sales Order">SalesOrder
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </li>
                                                      

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="panel-body tabs-menu-body">
                                    <div class="tab-content main_tab_content">
                                        <div class="tab-pane active" id="summary">
                                            <div class="panel panel-primary">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="custom_table custom_table_pt responsive_parties_table">
                                                            <div>
                                                                <v-data-table :page="page" :pageCount="numberOfPages"
                                                                    :headers="headers" :items="passengers"
                                                                    :options.sync="options"
                                                                    :server-items-length="totalPassengers"
                                                                    :loading="loading" class="elevation-1">
                                                                 

                                                                    <template v-slot:item.voucherDate="{ item }">
                                                                        <td>{{format_date(item.voucherDate)}}</td>
                                                                    </template>
                                                                    <template v-slot:item.voucherNumber="{ item }">
                                                                        <td><router-link class="onclick_details" :to="{name: 'Parties_Details' , params: {v_id: item._id,v_type : item.parentType}}">{{item.voucherNumber}}</router-link></td>
                                                                    </template>
                                                                    <template v-slot:item.voucherType="{ item }"><td>{{item.voucherType}}</td></template>

                                                                    <template v-slot:item.parentType="{ item }"><td>{{item.parentType}}</td></template>

                                                                    <template v-slot:item.totalAmount="{ item }"><td align="right"><p :class="`m-0 td_last_sale ${item.openingClass}`"><span class="font_sans">{{item.symbol}}</span>{{item.totalAmount | formatNumberParties}}</p></td>
                                                                    </template>
                                                                    <template v-slot:item.action="{ item }">
                                                                    <td align="center"><a href="#" class="pdf_a_download"><img src="/assets/images/1.0/svgs/pdf_download.svg" class="img-fluid"> PDF</a></td>
                                                                     </template>

                                                                </v-data-table>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                    <button aria-label="Close" class="button_close" data-bs-dismiss="modal" type="button"><span
                            aria-hidden="true">&times;</span></button>
                    <div class="modal_header">
                        <div class="modal_top_title">
                            <h4>Party Details</h4>
                        </div>
                        <div class="modal_top_icons">

                        </div>
                    </div>
                    <div class="modal-body top_modal_body" id="partyDetailsData">
                        <div class="new_modal_body_content">
                            <h5>Ledger Name</h5>
                            <p>{{getLedgerData.ledgerName}}</p>
                        </div>
                        <div class="new_modal_body_content">
                            <h5>Alias Name</h5>
                            <p></p>
                        </div>
                        <div class="new_modal_body_content">
                            <h5>Parent</h5>
                            <p>{{getLedgerData.parent}}</p>
                        </div>
                        <div class="new_modal_body_content">
                            <h5>GST</h5>
                            <p>{{getLedgerData.partyGSTIn}}</p>
                        </div>
                        <div class="new_modal_body_content email_address_type">
                            <h5>Email Address</h5>
                            <p>deepak123@gmail.com</p>
                            <div class="onright_icon_show">
                                <a href="#" data-bs-target="#edit_email_modal" data-bs-toggle="modal"
                                    class="edit_email_modal_onclick"><span class="mail_icon_modal "><img
                                            src='/assets/images/1.0/png/edit.png' class="img-fluid" /></span></a>
                                <a href="#"><span class="edit_icon_modal"><img src='/assets/images/1.0/svgs/envelope.svg'
                                            class="img-fluid" /></span></a>
                            </div>
                        </div>
                        <div class="new_modal_body_content email_address_type">
                            <h5>Mobile Number</h5>
                            <p>{{getLedgerData.ledgerMobile}}</p>
                            <div class="onright_icon_show">
                                <a href="#" data-bs-target="#mobile_onclick_modal" data-bs-toggle="modal"
                                    class="edit_email_modal_onclick"><span class="mail_icon_modal "><img
                                            src='/assets/images/1.0/png/edit.png' class="img-fluid" /></span></a>
                                <a href="#"><span class="edit_icon_modal"><img src='/assets/images/1.0/png/whatsapp.png'
                                            class="img-fluid" /></span></a>
                            </div>
                        </div>
                        <div class="new_modal_body_content">
                            <h5>Contact Name</h5>
                            <p>{{getLedgerData.ledgerContact}}</p>
                        </div>
                        <div class="new_modal_body_content">
                            <h5>Address</h5>
                            <p>{{getLedgerData.address}}</p>
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
                    <button aria-label="Close" class="button_close" data-bs-dismiss="modal" type="button"><span
                            aria-hidden="true">&times;</span></button>
                    <div class="modal_header">
                        <div class="modal_top_title">
                            <h4>Edit Email</h4>
                        </div>
                    </div>
                    <div class="modal-body top_modal_body">
                        <div class="email_modal_body text-center pt-4 pb-4">
                            <div class="form-group">
                                <input type="text" value="deepak123@gmail.com" placeholder="Enter Email Address" />
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
                    <button aria-label="Close" class="button_close" data-bs-dismiss="modal" type="button"><span
                            aria-hidden="true">&times;</span></button>
                    <div class="modal_header">
                        <div class="modal_top_title">
                            <h4>Edit Mobile Number</h4>
                        </div>
                    </div>
                    <div class="modal-body top_modal_body">
                        <div class="email_modal_body text-center pt-4 pb-4">
                            <div class="form-group">
                                <input type="text" value="9157838669" placeholder="Enter Mobile Number" />
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
       

<b-modal id="modal-multi-1" size="md" title="Party Details" hide-footer no-stacking>
    <div class="modal-content new_modal_content tx-size-sm">
                    <div class="modal-body top_modal_body" id="partyDetailsData">
                        <div class="new_modal_body_content">
                            <h5>Ledger Name</h5>
                            <p>{{getLedgerData.ledgerName}}</p>
                        </div>
                        <div class="new_modal_body_content">
                            <h5>Alias Name</h5>
                            <p></p>
                        </div>
                        <div class="new_modal_body_content">
                            <h5>Parent</h5>
                            <p>{{getLedgerData.parent}}</p>
                        </div>
                        <div class="new_modal_body_content">
                            <h5>GST</h5>
                            <p>{{getLedgerData.partyGSTIn}}</p>
                        </div>
                        <div class="new_modal_body_content email_address_type">
                            <h5>Email Address</h5>
                            <p>deepak123@gmail.com</p>
                            <div class="onright_icon_show">
                                <a v-b-modal.modal-multi-2
                                    class="edit_email_modal_onclick"><span class="mail_icon_modal "><img
                                            src='/assets/images/1.0/png/edit.png' class="img-fluid" /></span></a>
                                <a href="#"><span class="edit_icon_modal"><img src='/assets/images/1.0/svgs/envelope.svg'
                                            class="img-fluid" /></span></a>
                            </div>
                        </div>
                        <div class="new_modal_body_content email_address_type">
                            <h5>Mobile Number</h5>
                            <p>{{getLedgerData.ledgerMobile}}</p>
                            <div class="onright_icon_show">
                                <a v-b-modal.modal-multi-3
                                    class="edit_email_modal_onclick"><span class="mail_icon_modal "><img
                                            src='/assets/images/1.0/png/edit.png' class="img-fluid" /></span></a>
                                <a href="#"><span class="edit_icon_modal"><img src='/assets/images/1.0/png/whatsapp.png'
                                            class="img-fluid" /></span></a>
                            </div>
                        </div>
                        <div class="new_modal_body_content">
                            <h5>Contact Name</h5>
                            <p>{{getLedgerData.ledgerContact}}</p>
                        </div>
                        <div class="new_modal_body_content">
                            <h5>Address</h5>
                            <p>{{getLedgerData.address}}</p>
                        </div>
                    </div>
                </div>
</b-modal>

<b-modal id="modal-multi-2" size="md" title="Edit Email" hide-footer>
    <div class="modal-content email_modal_content tx-size-sm">
                    <div class="modal-body top_modal_body">
                        <div class="email_modal_body text-center pt-4 pb-4">
                            <div class="form-group">
                                <input type="text" value="deepak123@gmail.com" placeholder="Enter Email Address" />
                            </div>
                        </div>
                        <div class="button_send_email text-center">
                            <button class="">Update</button>
                        </div>
                    </div>
                </div>
</b-modal>

<b-modal id="modal-multi-3" size="md" title="Edit Mobile Number" hide-footer>
    <div class="modal-content email_modal_content tx-size-sm">
                    <div class="modal-body top_modal_body">
                        <div class="email_modal_body text-center pt-4 pb-4">
                            <div class="form-group">
                                <input type="text" value="9157838669" placeholder="Enter Mobile Number" />
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
    return new Intl.NumberFormat('en-IN',{minimumFractionDigits: 2}).format(value);
});
import axios from "axios";
import moment from 'moment'
import Api from "@/Api";
import DateRangePicker from 'vue2-daterange-picker'

//you need to import the CSS manually
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
export default {
    name: "Parties",
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
            getLedgerData: [],
            page: 1,
            totalPassengers: 0,
            numberOfPages: 0,
            passengers: [],
            loading: true,
            new_loading: true,
            options: {},
            headers: [
                { text: "Voucher No" , value:"voucherNumber" },
                { text: "Date" , value: "voucherDate"},
                { text: "Vch Type" , value:"voucherType" },
                { text: "Parent Type" , value:"parentType" },
                { text: "Amount" , value:"totalAmount", align: 'right' },
                { text: "Download" , value:"action", align: 'center' }

            ],
            search: ''
        }
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
    watch: {
        options: {
            handler() {
                this.getpartyDetails();
            },
        },
        deep: true,
    },
    methods: {
        update() {
            localStorage.setItem("date_range_start_date", moment(String(this.$refs.picker.start)).format('yyyy-MM-DD'));
            localStorage.setItem("date_range_end_date", moment(String(this.$refs.picker.end)).format('yyyy-MM-DD'));
            this.getpartyDetails();
        },
        getpartyDetails(filters = "") {
            

            const data = {
                companyId: localStorage.getItem('companyId'),
                ledgerId: this.$route.params.id,
                requestFrom: "WEB"
            };
            const headers = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "token": localStorage.getItem('webAuthToken')
            };
            var aliasNames = "";
            Api.getLedgerById(data, headers)
                .then(response => {
                    if (response.data.message == "AUTHENTICATION_FAILED") {
                        localStorage.clear();
                        window.location.href = '/';
                    }
                    else {
                        this.getLedgerData = response.data.data;
                        this.symbol = localStorage.getItem('symbol');
                        this.readDataFromAPI(this.getLedgerData.guid, filters);
                        for (let [key, value] of Object.entries(response.data.data.aliasNames)) {
                            if (key >= 1) {
                                aliasNames = aliasNames + "," + value.aliasName
                            } else {
                                aliasNames = value.aliasName;
                            }
                            response.data.data.closingBalance = Math.abs(response.data.data.closingBalance);
                            response.data.data.openingBalance = Math.abs(response.data.data.openingBalance);

                        }
                        this.aliasNames = aliasNames;
                        // alert(this.ledgerName);
                    }
                })
                .catch((err) => {
                    // alert("ERROR");
                    Common.getStatusForActionFailed(err.response.status);
                    this.loading = false;
                    this.new_loading = false;
                });
        },
        readDataFromAPI(guid, filters = "") {
           
            var self = this;
            this.loading = true;
            this.new_loading = true;
         
            const { page, itemsPerPage } = this.options;
            console.log("Page Number ", page, itemsPerPage);


            let pageNumber = page - 1;
            const data = {
                companyId: localStorage.getItem('companyId'),
                startLimit: pageNumber * itemsPerPage,
                endLimit: itemsPerPage,
                requestFrom: "WEB",
                parentType: filters,
                startDate: moment(String(this.$refs.picker.start)).format('yyyy-MM-DD'),
                endDate: moment(String(this.$refs.picker.end)).format('yyyy-MM-DD'),
                sortBy: "",
                orderBy: "-1",
                ledgerGuid: guid,
                searchTerm: this.search
            };
            const headers = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "token": localStorage.getItem('webAuthToken')
            };
            Api.getVouchersbyLedgerId(data, headers)
                .then(response => {
                    if (response.data.message == "AUTHENTICATION_FAILED") {
                        localStorage.clear();
                        window.location.href = '/';
                    } else {
                        if (response.data.status == "1") {
                            for (let [key, value] of Object.entries(response.data.data.list)) {

                                if (value.totalAmount >= 0) {
                                    // + value
                                    response.data.data.list[key].openingClass = "opening_plus_balance";
                                } else {
                                    // - value
                                    response.data.data.list[key].openingClass = "opening_minus_balance";
                                }
                                response.data.data.list[key].totalAmount = Math.abs(value.totalAmount);
                                response.data.data.list[key].symbol = localStorage.getItem('symbol');
                                response.data.data.list[key].guid = value.guid;
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
        switchSelect(event) {
            this.getpartyDetails(event.target.value);
            console.log(event.target.value);

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
            this.getpartyDetails();
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
            this.getpartyDetails();
        }
    },
    mounted() {
      
        this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
            this.getpartyDetails();
        })


       

    },
};
</script>



