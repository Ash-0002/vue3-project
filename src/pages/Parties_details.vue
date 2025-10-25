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
        <div class="page-header-title-box">
            <div class="row align-items-center">
                <div class="col-lg-12 col-12">
                    <div class="title_text">
                        <h4 class="page-title mb-0">Parties</h4>
                    </div>
                </div>
            </div>

        </div>
        <div class="main_card">
            <div class="card">
                <div class="sales_voucher_top_card_box">
                    <div class="row">
                        <div class="col-lg-6 col-12">
                            <div class="left_arrow_sold">
                                <a @click="$router.go(-1)"><i class="fa fa-chevron-left"></i></a>
                            </div>
                            <div class="company_name padding_left_30 mobile_padding_left_0">

                                <h3>{{this.partyName}}</h3>
                                <div class="company_balance">
                                    <p>Voucher No: {{this.voucherNumber}}</p>

                                </div>
                            </div>

                        </div>
                        <div class="col-lg-6 col-12">
                            <div class="download_border_div mobile_sales_download_div">
                                <button type="button" class="btn download_border_btn">
                                    <img src="/assets/images/1.0/svgs/download-black.svg" class="img-fluid mr-3" />Download
                                </button>
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
                        <div class="main_tabs parties_details_main_tabs new_sales_main_tabs_box">
                            <div class="">
                                <div class="row align-items-center">
                                    <div class="col-lg-6 col-6">
                                        <div class="type_balance text-left date_details_party">
                                            <p>{{format_date(this.voucherDate)}}</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-6">
                                        <div class="type_balance text-right date_details_party_right">
                                            <p>{{this.voucherType}}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div v-if="all_voucher">
                                <div class="items_card_box" v-if="netAmount">
                                    <div class="top_item_title_box">
                                        <h4>ITEMS</h4>
                                    </div>
                                    <div class="items_table_part mobile_pb_0">
                                        <div class="custom-table-responsive">
                                            <table width="100%" v-for="(stock,i) in stockItemEntries">
                                                <tr>
                                                    <th align="left">{{stock.stockItemName}}</th>
                                                    <th style="text-align:right;"><span
                                                        class="font_sans">{{symbol}}</span> {{stock.amount | formatNumberPartiesDetails}}
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">Qty: {{stock.qty + " " + stock.unit}}</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">Rate: <span
                                                        class="font_sans">{{symbol}}</span> {{stock.rate}}</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">Gr.Rate: <span
                                                        class="font_sans">{{symbol}}</span> {{stock.grossAmount}}
                                                    </td>
                                                </tr>
                                                
                                            </table>
                                            
                                        </div>
                                    </div>
                                    <div class="items_table_net_amount">
                                        <table width="100%">
                                            <tr>
                                                <th align="left">NET AMOUNT</th>
                                                <th style="text-align:right;"><span
                                                        class="font_sans">{{symbol}}</span> {{this.netAmount | formatNumberPartiesDetails}}
                                                </th>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div class="items_card_box">
                                    <div class="top_item_title_box">
                                        <h4>SUMMARY</h4>
                                    </div>
                                    <div>
                                        <div class="items_table_part">
                                            <table width="100%">
                                                <tr v-for="(summarydetails,i) in summary">
                                                    <th align="left">{{summarydetails.name}}</th>
                                                    <th style="text-align:right;"><span
                                                            class="font_sans">{{symbol}}</span> {{Math.abs(summarydetails.value) | formatNumberPartiesDetails}}</th>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="items_table_gross_total">
                                        <table width="100%">
                                            <tr>
                                                <th align="left">GROSS TOTAL</th>
                                                <th style="text-align:right;"><span
                                                        class="font_sans">{{symbol}}</span> {{this.grossTotal | formatNumberPartiesDetails }}
                                                </th>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div v-if="payment_voucher">
                                <div class="items_card_box">
                                    <div class="top_item_title_box">
                                        <h4>FOR BILLS</h4>
                                    </div>
                                    <div class="items_table_part mobile_pb_0">
                                        <div class="custom-table-responsive">
                                            <table width="100%">
                                                <tr v-for="(stock,i) in stockItemEntries">
                                                    <th align="left">{{stock.ledgerName}}</th>
                                                    <th style="text-align:right;"><span
                                                        class="font_sans">{{symbol}}</span> {{Math.abs(stock.actualAmount) | formatNumberPartiesDetails}}
                                                    </th>
                                                </tr>
                                                
                                                
                                            </table>
                                            
                                        </div>
                                    </div>
                                    <div class="items_table_net_amount">
                                        <table width="100%">
                                            <tr>
                                                <th align="left">Gross Total</th>
                                                <th style="text-align:right;"><span
                                                        class="font_sans">{{symbol}}</span> {{this.grossTotal | formatNumberPartiesDetails}}
                                                </th>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div class="items_card_box">
                                    <div class="top_item_title_box">
                                        <h4>PAYMENT DETAILS</h4>
                                    </div>
                                    <div>
                                        <div class="items_table_part border-bottom-none">
                                            <table width="100%">
                                                <tr v-for="(summarydetails,i) in summary">
                                                    <th align="left">{{summarydetails.ledgerName}}
                                                    <div v-for="(forBankDetails,i) in summarydetails.forBankDetails">
                                                        <div class="th_text">{{forBankDetails.transactionType}}</div>
                                                        <div class="th_text">{{forBankDetails.date}}</div>
                                                    </div>
                                                    </th>
                                                    
                                                    <th style="text-align:right;"><span
                                                        class="font_sans">{{symbol}}</span> {{Math.abs(summarydetails.actualAmount) | formatNumberPartiesDetails}}
                                                    </th>
                                                </tr>
                                               
                                            </table>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div v-if="contra_voucher">
                                <div class="items_card_box">
                                    <div class="top_item_title_box">
                                        <h4>ENTRIES</h4>
                                    </div>
                                    <div class="items_table_part mobile_pb_0 contra_journal_set">
                                        <div class="custom-table-responsive">
                                            <table width="100%">
                                                <tr v-for="(stock,i) in stockItemEntries">
                                                    <th align="left">{{stock.ledgerName}}</th>
                                                    <th style="text-align:right;"><span
                                                        class="font_sans">{{symbol}}</span> {{Math.abs(stock.amount) | formatNumberPartiesDetails}}{{stock.symbol_amount}}
                                                    </th>
                                                </tr>
                                                
                                                
                                            </table>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
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

    Vue.filter("formatNumberPartiesDetails", function (value) {
        return new Intl.NumberFormat('en-IN',{minimumFractionDigits: 2}).format(value);
    });
    import moment from 'moment'
    import Api from "@/Api";
    export default {
        name: "Vochar Details",
        data() {
            return {
                //data here
                partyName : '',
                voucherNumber:'',
                voucherDate : '',
                voucherType : '',
                symbol : '',
                stockItemEntries : [],
                summary : [],
                netAmount : 0,
                gstAmount : 0,
                grossTotal : 0,
                all_voucher : 0,
                payment_voucher:0,
                contra_voucher: 0
            }
        },
        methods: {
            get_vochar_details(){
                const data = {
                    requestFrom: "WEB",
                    companyId: localStorage.getItem('companyId'),
                    voucherId : this.$route.params.v_id,
                    voucherType : this.$route.params.v_type.toUpperCase().replace(" ","_")
                };
                const headers = {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('webAuthToken')
                };
                Api.getVoucherDetails(data, headers)
                    .then(response => {
                        
                        if (response.data.message == "AUTHENTICATION_FAILED") {
                            localStorage.clear();
                            window.location.href = '/';
                        } else {
                            if (response.data.status == "1") {
                                console.log(response);
                                this.partyName = response.data.data.voucherdetails.partyLedgerName;
                                this.voucherNumber = response.data.data.voucherdetails.voucherNumber;
                                this.voucherDate = response.data.data.voucherdetails.voucherDate;
                                this.voucherType = response.data.data.voucherdetails.voucherType;
                                this.symbol = localStorage.getItem('symbol');
                                this.netAmount = response.data.data.netAmount;
                                this.grossTotal = response.data.data.grossAmount;
                                if(this.voucherType === "Sales" || this.voucherType === "Purchase" || this.voucherType === "Credit Note" || this.voucherType === "Debit Note" || this.voucherType === "Sales Order" || this.voucherType === "Purchase Order"){
                                    this.all_voucher = 1;
                                    this.payment_voucher = 0;
                                    this.contra_voucher = 0;
                                    this.stockItemEntries = response.data.data.voucherdetails.stockItemEntries;
                                    
                                    this.summary = response.data.data.voucherdetails.summary;
                                    
                                }else if(this.voucherType === "Payment" || this.voucherType === "Receipt"){
                                    this.all_voucher = 0;
                                    this.payment_voucher = 1;
                                    this.contra_voucher = 0;
                                    this.stockItemEntries = [];
                                    this.summary = [];
                                    this.i = 0;
                                    this.grossTotal = response.data.data.voucherdetails.grossTotal;
                                    for (let [key, value] of Object.entries(response.data.data.voucherdetails.ledgerEntries)) {
                                        if(value.isBankOrCash === false){
                                            this.stockItemEntries.push(value);
                                        }
                                        if(value.isBankOrCash === true){
                                            this.summary.push(value);
                                        }
                                    }
                                }else if(this.voucherType === "Journal" || this.voucherType === "Contra"){
                                    this.all_voucher = 0;
                                    this.payment_voucher = 0;
                                    this.contra_voucher = 1;

                                    for (let [key, value] of Object.entries(response.data.data.voucherdetails.ledgerEntries)) {
                                        if (value.amount >= 0) {
                                            // + value
                                            response.data.data.voucherdetails.ledgerEntries[key].symbol_amount = " Cr."
                                        } else {
                                            // - value
                                            response.data.data.voucherdetails.ledgerEntries[key].symbol_amount = " Dr."
                                        }
                                        
                                    }
                                    this.stockItemEntries = response.data.data.voucherdetails.ledgerEntries;
                                    
                                }
                            }
                        }

                    })
                    .catch((err) => {
                        // alert("ERROR");
                        Common.getStatusForActionFailed(err.response.status);
                        this.loading = false;
                    });
            },
            format_date(value) {
                if (value) {
                    return moment(String(value)).format('DD MMM yyyy')
                }
            },
        },
        mounted() {
            this.get_vochar_details();
        }
    };

</script>

<style>

</style>

