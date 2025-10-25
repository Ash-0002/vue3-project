/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section>
    <div id="printContent" v-html="htmlString"></div>

    <div v-if="new_loading" class="loader-wrapper">
      <div class="loading_css">
        <img src="/assets/images/1.0/brand/Loader-GIF-Final.gif" class="img-fluid loader_css" height="40" width="40" />
      </div>
    </div>

    <div class="main_card">
      <div class="card RelativePartforSalesOrderportion">
        <div class="sales_voucher_top_card_box">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="left_arrow_sold" v-if="isOneChild == 'true'">
                <a @click="$router.go(-2)"><i class="fa fa-chevron-left"></i></a>
              </div>
              <div class="left_arrow_sold" v-else>
                <a @click="$router.go(-1)"><i class="fa fa-chevron-left"></i></a>
              </div>
              <div class="company_name padding_left_30 mobile_padding_left_0">
                <h3 class="position-relative">{{ this.partyName }}
                  <div class="NotSyncedNextSyncMesage">
                  <div v-if="isTransfer == 0 && action != 'Cancel' && modified" class="NotSyncTallyDetailsMessage ">
                    <span class="OrangeIconExclamation">
                      <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                      Not Synced in Tally
                    </span>
                  </div>
                   <!-- <div v-if="isTransfer == 3 && action == 'Cancel' && modified" class="NotSyncTallyDetailsMessage ">
                    <span class="OrangeIconExclamation">
                      <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                      Not Synced in Tally
                    </span>
                  </div> -->
                  <div v-else-if="isTransfer == 0 && action == 'Cancel' && modified" class="NotSyncTallyDetailsMessage">
                    <span class="RedIconExclamation">
                      <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                      Voucher cancelled, changes will reflect in next sync
                    </span>
                  </div>
                </div>
                </h3>
                <div class="company_balance">
                  <p>
                    Voucher No:
                    {{ this.voucherNumber ? this.voucherNumber : "#" }}
                  </p>
                </div>
              </div>
              
            </div>
            <div class="col-lg-6 col-12">
              <div class="download_border_div mobile_sales_download_div text-right" v-if="isPaid == '' || isPaid == null"
                v-b-modal.customerstatus-popup>
                <button type="button" @click="freeusergeneratePdf()" class="btn download_border_btn mb-1">
                  <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid" />View Pdf<img
                    class="pdf_button_crown" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
                </button>
              </div>
              <div class="download_border_div mobile_sales_download_div text-right" v-else>
                <button v-show="!isShowEditBatchAlloc" :disabled="stockItemEntries.length == 0 || button_eway_disabled == 1 || GstInvalid == true || this.action == 'Cancel'" v-if="
                  EwayEinvoiceElligible &&
                  !this.isEwayStatus &&
                  !this.isFutureDate
                " class="CreateeInvoiceeWayButtonBottom mb-1" style="margin-right: 7px" @click="checklogin">
                  Create eWay
                </button>
                <button v-show="!isShowEditBatchAlloc" :disabled = "button_einvoice_disabled == 1 || partyGstin == '' || stockItemEntries.length == 0 || GstInvalid == true || this.action == 'Cancel'" v-if="
                  EwayEinvoiceElligible &&
                  !this.isEInvoiceStatus &&
                  !this.isFutureDate  && this.getIRN == '' && this.eInvoiceStatus == 'Yes'
                " @click="generateEinvoice" class="CreateeInvoiceeWayButtonBottom mb-1" style="margin-right: 7px">
                  Create einvoice
                  <span v-show="isLoadingeInvoice" class="SpinColorBlack"><i class="fa fa-spinner fa-spin"></i></span>
                </button>
                <button v-show="!isShowEditBatchAlloc" :disabled="partyGstin == '' || stockItemEntries.length == 0 || GstInvalid == true || this.action == 'Cancel'" v-if="
                  EwayEinvoiceElligible &&
                  !this.isEwayStatus &&
                  !this.isEInvoiceStatus &&
                  !this.isFutureDate  && this.getIRN == '' && this.eInvoiceStatus == 'Yes'
                " class="CreateeInvoiceeWayButtonBottom mb-1" style="margin-right: 7px" @click="OpenEwayandEinvoice">
                  Create eWay & einvoice
                </button>
                <button   v-if="!(this.isEwayStatus || this.isEInvoiceStatus) && !['Payment', 'Receipt', 'Journal', 'Contra'].includes(this.parentType) && !isShowEditBatchAlloc && isVoucherInCurrentFinancialYear && isVoucherNumberExist"
                 type="button" class="EditButtonDesignDetails mb-1" @click="editVoucher">
                  <img src="/assets/images/1.0/png/editicon.png" class="img-fluid mr-3" /> Edit
                </button>
                <button type="button" @click="generatePdf(isEwayStatus, isEInvoiceStatus)"
                  class="btn download_border_btn without_crown_button_design SetOnlyImageNotContent mb-1"
                  style="margin-right: 7px;">
                  <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid mr-3" /> View Pdf
                </button>
                <button v-if="this.$route.params.v_type == 'Sales Order'" ref="createSalesButton" class="CreateeInvoiceeWayButtonBottom" @click="createSalesFromSalesOrder">Create Sales</button>
                <!-- <button v-if="this.ledgerMobile != '' && this.$route.params.v_type == 'Sales'" type="button"
                  @click="openWhatsappPopup(isEwayStatus, isEInvoiceStatus)"
                  class="btn download_border_btn without_crown_button_design SetOnlyImageNotContent"
                  style="margin-right: 7px;">
                  <img src="/assets/images/1.0/png/Whatsappicon.png" class="img-fluid mr-3" />
                </button> -->
                <!-- <button>
                          <a href="javascript:void(0);" @click="openPreviewWhatsappPopup()">
                           Preview
                          </a>
                        </button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="eInvoiceRequireBoxError" v-if="partyGstin == '' &&  this.$route.params.v_type == 'Sales'"> 
      <h6><img src="/assets/images/1.0/dashboard/warning.png" />E-Invoice requires Party GST details. Please Update</h6>
    </div>
    <div class="eInvoiceRequireBoxError" v-if="button_eway_disabled == 1 &&  this.$route.params.v_type == 'Sales'"> 
      <h6><img src="/assets/images/1.0/dashboard/warning.png" />Please update Party Pincode to generate E-Way bill</h6>
    </div>
    <div class="eInvoiceRequireBoxError" v-if="GstInvalid == true &&  this.$route.params.v_type == 'Sales'"> 
      <h6><img src="/assets/images/1.0/dashboard/warning.png" />Invalid Party GST</h6>
    </div>
    <div class="eInvoiceRequireBoxError" v-if="stockItemsError != '' &&  this.$route.params.v_type == 'Sales'"> 
      <h6><img src="/assets/images/1.0/dashboard/warning.png" />{{ stockItemsError }}</h6>
    </div>
    <div class="BillSuccessFullySent" v-if="Bill_success">
      <div class="BillSuccesCaptionPart">
        <div class="IconTextSuccessBill">
          <i class="fa fa-check-circle"></i>
          <p>Bill Successfully sent to party</p>
        </div>
        <div class="SuccessBillCrossIconSet" @click="CloseBillSuccesBox()">
          <img src="/assets/images/1.0/png/crossicon.png" />
        </div>
      </div>
    </div>
    <div class="main_card">
      <div class="card">
        <div class="row">
          <div class="col-12">
            <div class="main_tabs parties_details_main_tabs new_sales_main_tabs_box">
              <!-----------Sales Sales order purchase purchase order------------------------->
              <div v-if="all_voucher" class="sales-puarchase" style="display: block">
                <div class="row align-items-center border-bottom-grey">
                  <div class="col-lg-6 col-12">
                    <div class="type_balance text-left date_details_party">
                      <p>
                        Transaction Date:
                        <span class="regular">{{
                          format_date(this.voucherDate)
                        }}</span>
                      </p>
                      <div class="eWaybillandeinvoicediv">
                        <p class="ewaywitheinvoice" v-if="eway_no">
                          <label>eWay Bill No: {{ this.eway_no }}</label>
                          <!-- <a href="javascript:void(0);" @click="ewaygeneratePdf()">View PDF</a> -->
                        </p>
                        <p class="ewaywitheinvoice" v-if="einvoice">
                          <label>eInvoice No: {{ this.einvoice }}</label>
                          <!-- <a href="javascript:void(0);" @click="generatePdf(false, isEInvoiceStatus)">View PDF</a> -->
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="type_balance text-right date_details_party_right typealignright">
                      <p>
                        Type:
                        <span class="regular">{{ this.voucherType }}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="new_voucher_details_table">
                  <table width="100%" class="voucher_scrolltable">
                    <thead>
                      <tr>
                        <td>
                          <h4>Items</h4>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="bg_blue">Sr.No</th>
                        <th class="bg_blue">Items Name</th>
                        <th class="bg_blue">HSN/SAC</th>
                        <th class="bg_blue">Quantity</th>
                        <th class="bg_blue" style="text-align: right">Rate</th>
                        <th class="bg_blue" style="text-align: right">
                          Gr.Rate
                        </th>
                        <th class="bg_blue" style="text-align: right">
                          Dis.(%)
                        </th>
                        <th v-if="enable" class="bg_blue">Description</th>
                        <th class="bg_blue" style="text-align: right">
                          Amount
                        </th>
                      </tr>
                      <tr v-for="(stock, i) in stockItemEntries">
                        <td>{{ i + 1 }}</td>
                        <td>{{ stock.stockItemName }}</td>
                        <td v-if="
                          stock.hsnDetails.gstHsnName !== 0 ||
                          stock.hsnDetails.gstHsnName !== ''
                        ">
                          {{ stock.hsnDetails.gstHsnName }}
                        </td>
                        <td v-else>{{ this.responseComing.hsnCode }}</td>

                        <td>{{ stock.qty }}</td>
                        <td style="text-align: right">
                          <span class="font_sans">{{ symbol }}</span>
                          {{ stock.rate }}
                        </td>
                        <td style="text-align: right">
                          <span class="font_sans">{{ symbol }}</span>
                          {{ stock.grossRate }}
                        </td>
                        <td style="text-align: right">{{ stock.discount }}</td>
                        <td v-if="enable && stock.descriptions !== ''">
                          {{ stock.descriptions }}
                        </td>
                        <td style="text-align: right">
                          <span class="font_sans">{{ symbol }}</span>
                          {{
                            parseFloat(Math.abs(stock.amount))
                            | formatNumberPartiesDetails
                          }}
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th class="bg_grey" colspan="3">Total</th>
                        <th class="bg_grey">
                          {{ total_qty }}
                        </th>
                        <th class="bg_grey"></th>
                        <th class="bg_grey"></th>
                        <th class="bg_grey"></th>
                        <th class="bg_grey" style="text-align: right">
                          <span class="font_sans">{{ symbol }}</span>
                          {{
                            parseFloat(Math.abs(this.netAmount))
                            | formatNumberPartiesDetails
                          }}
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                  <table v-if="narration != '' "  width="100%" class="vouchernot_scrolltable">
                    <thead>
                      <tr>
                        <td>
                          <h4>Narration</h4>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style="text-align: left">
                          {{ this.narration }}
                        </td>
                      </tr>
                    </tbody>
                    </table>
                  <table width="100%" class="vouchernot_scrolltable">
                    <thead>
                      <tr>
                        <td>
                          <h4>Summary</h4>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(summarydetails, i) in summary">
                        <th colspan="6">{{ summarydetails.ledgerName }}</th>
                        <th style="text-align: right">
                          <span class="font_sans">{{ symbol }}</span>
                          {{
                            Math.abs(summarydetails.amount)
                            | formatNumberPartiesDetails
                          }}
                        </th>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colspan="6" class="gross_total_fonts">
                          Gross Total
                        </th>
                        <th class="gross_total_fonts" style="text-align: right">
                          <span class="font_sans">{{ symbol }}</span>
                          {{ this.grossTotal | formatNumberPartiesDetails }}
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <!-----------journal contra------------------------->
              <div v-if="contra_voucher" class="jornal-contra">
                <div class="row align-items-center border-bottom-grey">
                  <div class="col-lg-6 col-6">
                    <div class="type_balance text-left date_details_party">
                      <p>
                        Transaction Date:
                        <span class="regular">{{
                          format_date(this.voucherDate)
                        }}</span>
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-6">
                    <div class="type_balance text-right date_details_party_right">
                      <p>
                        Type:
                        <span class="regular">{{ this.voucherType }}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="new_voucher_details_table">
                  <h4>Entries</h4>
                  <table width="100%" class="voucher_contratable">
                    <tr>
                      <th class="bg_blue">Sr.No</th>
                      <th class="bg_blue">Party Name</th>
                      <th class="bg_blue" style="text-align: right">Amount</th>
                    </tr>
                    <tr v-for="(stock, i) in stockItemEntries">
                      <td>{{ i + 1 }}</td>
                      <td>{{ stock.ledgerName }}</td>
                      <td style="text-align: right">
                        <span class="font_sans">{{ symbol }}</span>
                        {{ Math.abs(stock.amount) | formatNumberPartiesDetails
                        }}{{ stock.symbol_amount }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <!------------------>
              <!-----------Receipt Payment------------------------->
              <div v-if="payment_voucher" class="receipt-payment">
                <div class="row align-items-center border-bottom-grey">
                  <div class="col-lg-6 col-6">
                    <div class="type_balance text-left date_details_party">
                      <p>
                        Transaction Date:
                        <span class="regular">{{
                          format_date(this.voucherDate)
                        }}</span>
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-6">
                    <div class="type_balance text-right date_details_party_right">
                      <p>
                        Type:
                        <span class="regular">{{ this.voucherType }}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="new_voucher_details_table">
                  <table width="100%" class="voucher_scrolltablepayment">
                    <tr>
                      <td>
                        <h4>For Bills</h4>
                      </td>
                    </tr>
                    <tr>
                      <th class="bg_blue">Sr.No</th>
                      <th class="bg_blue">Party Name</th>
                      <th class="bg_blue" style="text-align: right">Amount</th>
                    </tr>
                    <tr v-for="(stock, i) in stockItemEntries">
                      <td>{{ i + 1 }}</td>
                      <td>{{ stock.ledgerName }}</td>
                      <td style="text-align: right">
                        <span class="font_sans">{{ symbol }}</span>
                        {{
                          Math.abs(stock.amount) | formatNumberPartiesDetails
                        }}
                      </td>
                    </tr>
                  </table>
                  <table width="100%">
                    <tr>
                      <th>
                        <h4>Payment Details</h4>
                      </th>
                    </tr>
                    <tr v-for="(summarydetails, i) in summary">
                      <th align="left">
                        {{ summarydetails.ledgerName }}
                        <div v-for="(
forBankDetails, i
                          ) in summarydetails.forBankDetails">
                          <div class="th_text">
                            {{ forBankDetails.transactionType }}
                          </div>
                          <div class="th_text">{{ forBankDetails.date }}</div>
                        </div>
                      </th>
                      <th style="text-align: right">
                        <span class="font_sans">{{ symbol }}</span>
                        {{
                          Math.abs(summarydetails.amount)
                          | formatNumberPartiesDetails
                        }}
                      </th>
                    </tr>
                  </table>
                </div>
              </div>
              <!------------------>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main_card" v-if="eway_no">
      <div class="card">
        <div class="row">
          <div class="col-12">
            <div class="new_voucher_details_table">
              <h4>eWay Bill Details</h4>
              <ul class="d-flex align-items-center justify-content-start eWaybillTabsul">
                <li v-if="eway_no">
                  <a href="javascript:void(0);" v-on:click="toggleTabs(1)" v-bind:class="{
                    details_link_inactive: openTab !== 1,
                    details_link_active: openTab === 1,
                  }">
                    Details
                  </a>
                </li>
                <li v-if="eWayBillDetails[0].transportDetails">
                  <a href="javascript:void(0);" v-on:click="toggleTabs(2)" v-bind:class="{
                    details_link_inactive: openTab !== 1,
                    details_link_active: openTab === 2,
                  }">
                    Transport Details
                  </a>
                </li>
                <li v-if="eWayBillDetails[0].transportDetails">
                  <a href="javascript:void(0);" v-on:click="toggleTabs(3)" v-bind:class="{
                    details_link_inactive: openTab !== 2,
                    details_link_active: openTab === 3,
                  }">
                    Part-B Details
                  </a>
                </li>
              </ul>
              <div class="tab-content tab-space">
                <div v-bind:class="{
                  hidden: openTab !== 1,
                  block: openTab === 1,
                }">
                  <div class="row">
                    <div class="col-12 col-lg-4 mb-2">
                      <div class="eWaybillinnerbox">
                        <div class="ewaybillcontentinner pe-2 d-flex align-items-center justify-content-between">
                          <lable>From</lable>
                          <p>
                            {{
                              this.eWayBillDetails[0].shippedFromState
                                ? this.eWayBillDetails[0].shippedFromState
                                : "N/A"
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4 mb-2">
                      <div class="eWaybillinnerbox">
                        <div class="ewaybillcontentinner pe-2 d-flex align-items-center justify-content-between">
                          <lable>To</lable>
                          <p>
                            {{
                              this.eWayBillDetails[0].shippedToState
                                ? this.eWayBillDetails[0].shippedToState
                                : "N/A"
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4 mb-2">
                      <div class="eWaybillinnerbox">
                        <div class="ewaybillcontentinner pe-2 d-flex align-items-center justify-content-between">
                          <lable>Distance</lable>
                          <p v-if="this.eWayBillDetails[0].transportDetails.length > 0">
                            {{
                              this.eWayBillDetails[0].transportDetails[0]
                                .distance
                                ? this.eWayBillDetails[0].transportDetails[0]
                                  .distance
                                : "N/A"
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-lg-4 mb-2">
                      <div class="eWaybillinnerbox">
                        <div class="ewaybillcontentinner pe-2 d-flex align-items-center justify-content-between">
                          <lable>Supply Type</lable>
                          <p>
                            {{
                              this.eWayBillDetails[0].subType
                                ? this.eWayBillDetails[0].subType
                                : "N/A"
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4 mb-2">
                      <div class="eWaybillinnerbox">
                        <div class="ewaybillcontentinner pe-2 d-flex align-items-center justify-content-between">
                          <lable>Sub Type</lable>
                          <p>
                            {{
                              this.eWayBillDetails[0].subType
                                ? this.eWayBillDetails[0].subType
                                : "N/A"
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4 mb-2">
                      <div class="eWaybillinnerbox">
                        <div class="ewaybillcontentinner pe-2 d-flex align-items-center justify-content-between">
                          <lable>Document Type</lable>
                          <p>
                            {{
                              this.eWayBillDetails[0].documentType
                                ? this.eWayBillDetails[0].documentType
                                : "N/A"
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-bind:class="{
                  hidden: openTab !== 2,
                  block: openTab === 2,
                }">
                  <div class="row">
                    <div class="col-12 col-lg-6 mb-2">
                      <div class="eWaybillinnerbox">
                        <div class="ewaybillcontentinner pe-2 d-flex align-items-center justify-content-between">
                          <lable>Transporter Name</lable>
                          <p v-if="this.eWayBillDetails[0].transportDetails.length > 0">
                            {{
                              this.eWayBillDetails[0].transportDetails[0]
                                .transporterName
                                ? this.eWayBillDetails[0].transportDetails[0]
                                  .transporterName
                                : "N/A"
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6 mb-2">
                      <div class="eWaybillinnerbox">
                        <div class="ewaybillcontentinner pe-2 d-flex align-items-center justify-content-between">
                          <lable>Transporter ID</lable>
                          <p v-if="this.eWayBillDetails[0].transportDetails.length > 0">
                            {{
                              this.eWayBillDetails[0].transportDetails[0]
                                .transporterId
                                ? this.eWayBillDetails[0].transportDetails[0]
                                  .transporterId
                                : "N/A"
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-bind:class="{
                  hidden: openTab !== 3,
                  block: openTab === 3,
                }">
                  <div class="row">
                    <div class="col-12 col-lg-4 mb-2">
                      <div class="eWaybillinnerbox">
                        <div class="ewaybillcontentinner pe-2 d-flex align-items-center justify-content-between">
                          <lable>Mode</lable>
                          <p v-if="this.eWayBillDetails[0].transportDetails.length > 0">
                            {{
                              this.eWayBillDetails[0].transportDetails[0]
                                .transporterMode
                                ? this.eWayBillDetails[0].transportDetails[0]
                                  .transporterMode
                                : "N/A"
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4 mb-2">
                      <div class="eWaybillinnerbox">
                        <div class="ewaybillcontentinner pe-2 d-flex align-items-center justify-content-between">
                          <lable>Vehicle Type</lable>
                          <p v-if="this.eWayBillDetails[0].transportDetails.length > 0">
                            {{
                              this.eWayBillDetails[0].transportDetails[0]
                                .vehicleType
                                ? this.eWayBillDetails[0].transportDetails[0]
                                  .vehicleType
                                : "N/A"
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4 mb-2">
                      <div class="eWaybillinnerbox">
                        <div class="ewaybillcontentinner pe-2 d-flex align-items-center justify-content-between">
                          <lable>Vehicle Number</lable>
                          <p v-if="this.eWayBillDetails[0].transportDetails.length > 0">
                            {{
                              this.eWayBillDetails[0].transportDetails[0]
                                .vehicleNumber
                                ? this.eWayBillDetails[0].transportDetails[0]
                                  .vehicleNumber
                                : "N/A"
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-lg-4 mb-2">
                      <div class="eWaybillinnerbox">
                        <div class="ewaybillcontentinner pe-2 d-flex align-items-center justify-content-between">
                          <lable>Document Number</lable>
                          <p v-if="this.eWayBillDetails[0].transportDetails.length > 0">
                            {{
                              this.eWayBillDetails[0].transportDetails[0]
                                .documentNumber
                                ? this.eWayBillDetails[0].transportDetails[0]
                                  .documentNumber
                                : "N/A"
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4 mb-2">
                      <div class="eWaybillinnerbox">
                        <div class="ewaybillcontentinner pe-2 d-flex align-items-center justify-content-between">
                          <lable>Document Date</lable>
                          <p v-if="this.eWayBillDetails[0].transportDetails.length > 0">
                            {{
                              this.eWayBillDetails[0].transportDetails[0]
                                .documentDate
                                ? format_date(
                                  this.eWayBillDetails[0].transportDetails[0]
                                    .documentDate
                                )
                                : "N/A"
                            }}
                          </p>
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
    <b-modal id="EWayLoginModal" size="" title="" hide-header hide-footer no-stacking centered>
      <div class="modal-content">
        <div class="modal-body text-center p-0">
          <div class="EWayLoginModalCaption">
            <button type="button" class="EWayCloseButtonIcon" @click="$bvModal.hide('EWayLoginModal')">
              <i class="fa fa-times"></i>
            </button>
            <h4>Link your e-Waybill account with Livekeeping</h4>
            <div class="EWayModalLoginSteps">
              <ul>
                <li>
                  <label class="number BgCustomGreen">1</label>
                  <h5 class="StepsHeadingGreen">Setup GSP User</h5>
                </li>
                <li>
                  <label class="number BgLightGray">2</label>
                  <h5 class="StepsHeadingGray">Enter GSP Credentials</h5>
                </li>
              </ul>
            </div>
            <div class="CarouselWithLoginPortionEWay">
              <div class="row">
                <div class="col-lg-6 col-12">
                  <div class="EWayLoginCarouselBox">
                    <b-carousel id="carousel-1" v-model="slide" :interval="0" controls indicators background="#ababab"
                      img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333">
                      <b-carousel-slide caption="">
                        <div class="CarouselImageEWay">
                          <img src="/assets/images/1.0/png/EWayFirstImage.png" alt="image slot" />
                        </div>
                        <div class="slide-content">
                          <h5>
                            <span>Login</span> using NIC credential through the
                            Portal
                          </h5>
                          <p>
                            <a href="https://ewaybillgst.gov.in/" target="_blank">https://ewaybillgst.gov.in/</a>
                          </p>
                        </div>
                      </b-carousel-slide>

                      <b-carousel-slide caption="">
                        <div class="CarouselImageEWay">
                          <img src="/assets/images/1.0/png/EWaySecondImage.png" alt="image slot" />
                        </div>
                        <div class="slide-content">
                          <h5>
                            Click <span>‘Registration’</span> in the left menu,
                            select For GSP
                          </h5>
                        </div>
                      </b-carousel-slide>
                      <b-carousel-slide caption="">
                        <div class="CarouselImageEWay">
                          <img src="/assets/images/1.0/png/EWayThirdImage.png" alt="image slot" />
                        </div>
                        <div class="slide-content">
                          <h5>
                            Tap <span>‘Send OTP’</span> enter the code sent to
                            your registered mobile, and tap
                            <span>‘Verify OTP’</span>.
                          </h5>
                        </div>
                      </b-carousel-slide>
                      <b-carousel-slide caption="">
                        <div class="CarouselImageEWay">
                          <img src="/assets/images/1.0/png/EWayFourthImage.png" alt="image slot" />
                        </div>
                        <div class="slide-content">
                          <h5>
                            Click <span>’Add New’</span> & Select
                            <span>‘GSP’</span> then select
                            <span>‘Fynamics Techno Solution’</span>
                          </h5>
                        </div>
                      </b-carousel-slide>
                    </b-carousel>
                  </div>
                </div> 
                <div class="col-lg-6 col-12">
                  <div class="EWayLoginFormBox">
                    <div class="EWayLoginPopupForm position-relative mb-4">
                      <span class="EWayLoginPopupFormLabel">GSTIN</span>
                      <input type="text" v-model="gstinneweWay" placeholder="" v-on:keydown="disableArrowKeys"
                        v-on:wheel="disableMouseWheelScroll" @input="checkLoginButtonState" :disabled="true"/>
                      <span class="error-validation" v-if="gstinError">Invalid GSTIN format</span>
                    </div>
                    <div class="EWayLoginPopupForm position-relative mb-4">
                      <span class="EWayLoginPopupFormLabel">GSP USERNAME</span>
                      <input type="text" v-model="usernameValue" placeholder="" v-on:keydown="disableArrowKeys"
                        v-on:wheel="disableMouseWheelScroll" @input="checkLoginButtonState" />
                    </div>

                    <div class="EWayLoginPopupForm position-relative mb-4">
                      <span class="EWayLoginPopupFormLabel">GSP PASSWORD</span>
                      <div class="input-wrapper-GSP-password">
                        <input :type="passwordVisibleeWayLogin ? 'text' : 'password'" v-model="passwordValue"
                          placeholder="" v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll"
                          @input="checkLoginButtonState" />
                        <span class="eye-icon-gsp-password" @click="togglePasswordVisibility">
                          <i :class="passwordVisibleeWayLogin
                            ? 'fa fa-eye'
                            : 'fa fa-eye-slash'
                            "></i>
                        </span>
                      </div>
                    </div>
                    <div class="EWayLoginButton">
                      <button @click="UpdateGSP()" class="" :disabled="isButtonDisabledLogin ||
                        this.GspButton_disabled == '1'
                        ">
                        LOGIN
                        <span v-show="isLoadingGsp" class="SpinColorWhite"><i class="fa fa-spinner fa-spin"></i></span>
                      </button>
                    </div>
                    <span class="error-validation" v-if="ewayErrorFlag">{{
                      Eway_Error.UpdateGSPError
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="BottomEWayllBillModalNeedHelp">
          <div class="BottomNeedHelpEWayBillCaption">
            <h5>
              Need help? <a href="tel:+91 83 83 83 83 83">+91 83 83 83 83 83</a>
            </h5>
          </div>
        </div>
      </div>
    </b-modal>
    <b-modal   @hidden="onEWayModalHidden" id="eWayBillDetailsModal" size="" title="eWay Bill Details" hide-footer centered>
      <div class="modal-content">
        <div class="row align-items-center">
          <div class="col-lg-4 col-12 mb-2">
            <div class="SupplyTypeRadioButton">
              <label class="eWayBillDetailsPopupLabel setWidthsupplytypewithdoctype">Supply Type <span
                  class="Validationspanerror">*</span></label>
              <div class="invoice_radio_button">
                <input type="radio" class="invoice_radio" id="outwardRadio" name="radioGroup" value="Outward"
                  v-model="RadioValue" autocomplete="off" />
                <label for="outwardRadio" class="fontssetlabelRechanges">Outward</label>
              </div>
              <div class="invoice_radio_button">
                <input type="radio" class="invoice_radio" id="inwardRadio" name="radioGroup" value="inward"
                  v-model="RadioValue" autocomplete="off" />
                <label for="inwardRadio" class="fontssetlabelRechanges">Inward</label>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12 mb-2">
            <div class="eWayBillDetailsPopupDropdown">
              <label class="eWayBillDetailsPopupLabel setWidthsubtypedocno">Sub Type <span
                  class="Validationspanerror">*</span></label>
              <select v-model="SubSupplyTypeValue" @change="SupplyTypeChanged($event)">
                <option disabled value="">Please Select</option>
                <option v-for="(option, index) in subSupplyTypeData" :key="index" :value="option.description">
                  {{ option.description }}
                </option>
              </select>
            </div>
            <span class="error-validation" v-if="Eway_Error.subSupplyTypeData">{{ Eway_Error.subSupplyTypeData }}</span>
          </div>
          <div class="col-lg-4 col-12 mb-2">
            <!-- <div class="eWayBillDetailsPopupDropdown">
              <label class="eWayBillDetailsPopupLabel setWidthttypewithdocdate">Transaction Type <span
                  class="Validationspanerror">*</span></label>
              <select v-model="TransactiontypeOption">
                <option disabled value="">Please Select</option>
                <option v-for="option in Transactiontypeoptions" :key="option.value" :value="option.value">
                  {{ option.transactiontypetext }}
                </option>
              </select>
            </div> -->
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-4 col-12 mb-2">
            <div class="eWayBillDetailsPopupDropdown">
              <label class="eWayBillDetailsPopupLabel setWidthsupplytypewithdoctype">Doc Type <span
                  class="Validationspanerror">*</span></label>
              <select v-model="DocumentTypeValue" @change="DocumentCodeFunction($event)">
                <option disabled value="">Please Select</option>
                <option v-for="option in documentTypeData" :key="option.description" :value="option.description">
                  {{ option.description }}
                </option>
              </select>
            </div>
            <span class="error-validation" v-if="Eway_Error.documentTypeData">{{
              Eway_Error.documentTypeData
            }}</span>
          </div>
          <div class="col-lg-4 col-12 mb-2">
            <div class="eWayBillDetailsPopupInputText">
              <label class="eWayBillDetailsPopupLabel setWidthsubtypedocno">Doc No.</label>
              <input disabled v-model="this.voucherNumber" type="text" placeholder="Enter Number"
                @keydown="handleKeyDown" v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll" />
            </div>
            <span class="error-validation" v-if="Eway_Error.voucherNumber">{{
              Eway_Error.voucherNumber
            }}</span>
          </div>
          <div class="col-lg-4 col-12 mb-2">
            <div class="eWayBillDetailsPopupInputDate">
              <label class="eWayBillDetailsPopupLabel setWidthttypewithdocdate">Doc Date <span
                  class="Validationspanerror">*</span></label>
              <div class="eWayBillDetailsPopupInputDatepicker">
                <span class="DocDateDatePicker">
                  <img src="/assets/images/1.0/sales/calendar.svg" class="img-fluid" />
                </span>
                <Datepicker v-model="transDocDate" format="dd MMM yyyy" placeholder=""></Datepicker>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-12">
            <div class="TransportDetailseWayBillPopup">
          <div class="TransportDetailseWaybillpopupHeading mb-3">
            <h6>Transport Details</h6>
          </div>
          <div class="row align-items-center">
            <div v-if="isButtonChecked" class="col-lg-8 col-12 mb-3">
              <div class="TransportDetailsInputtext SetDisplayLabelInput">
                <label class="eWayBillDetailsPopupLabel">Transporter Name
                </label>
                <input v-model="TransporterNameValueText" placeholder="Enter details" />
              </div>
            </div>
            <div v-else class="col-lg-8 col-12 mb-3">
              <div class="TransportDetailsDropdown SetDisplayLabelInput">
                <!-- <span class="error-validation" v-if="Eway_Error.CheckTransporterName">{{Eway_Error.CheckTransporterName}}</span> -->
                <label class="eWayBillDetailsPopupLabel">Transporter Name
                </label>
                <select @focus="checkAvailablityFunc()" v-model="TransporterNameValue"
                  @change="transporterNameselected()">
                  <option disabled value="">Enter Name</option>
                  <option v-for="(option, index) in TransporterName" :key="index" :value="option.ledgerName">
                    {{ option.ledgerName }}
                  </option>
                </select>
              </div>
              <span class="error-validation" v-if="Eway_Error.transporterName">{{ Eway_Error.transporterName }}</span>
            </div>
            <div class="col-lg-4 col-12">
              <div class="CheckBoxAddTransportDetailsinner">
                <input type="checkbox" id="transporteridname" @change="updateFlag()" />
              <label for="transporteridname">Enter Manually.</label>
              <span class="error-validation TransporterError" v-if="Eway_Error.CheckTransporterName">{{
                Eway_Error.CheckTransporterName }}</span>
            </div>
            </div>
            <div v-if="isButtonChecked" class="col-lg-8 col-12 mb-3">
              <div class="TransportDetailsInputtext SetDisplayLabelInput">
                <label class="eWayBillDetailsPopupLabel">Transporter ID
                  </label>
                <input @input="validateTransporterID" v-model="TransportIdValue" placeholder="Enter details" />
              </div>
              <span class="error-validation" v-if="Eway_Error.transporterId">{{
                Eway_Error.transporterId
              }}</span>
            </div>
            <div v-else class="col-lg-8 col-12 mb-3">
              <div class="TransportDetailsDropdown SetDisplayLabelInput">
                <label class="eWayBillDetailsPopupLabel">Transporter ID
                  </label>
                <select @change="transporterIdselected()" v-model="TransportIdValue">
                  <option disabled value="">Please Select</option>
                  <option v-for="(option, index) in TransporterId" :key="index" :value="option.transporterId">
                    {{ option.transporterId }}
                  </option>
                </select>
              </div>
              <span class="error-validation" v-if="Eway_Error.transporterId">{{
                Eway_Error.transporterId
              }}</span>
            </div>
            <div class="col-lg-8 col-12 mb-3">
              <div class="TransportDetailsInputtext SetDisplayLabelInput" v-if="showDistanceInput">
                <label class="eWayBillDetailsPopupLabel">Approx Dist.(In KMs)</label>
                <input type="text" placeholder="Enter Distance" @keydown="handleKeyDown" v-on:keydown="disableArrowKeys"
                  v-on:wheel="disableMouseWheelScroll" />
              </div>
              <div class="AddDistancePlusClick" v-if="!showDistanceInput">
                <button @click="OpenDistanceInput"><img src="/assets/images/1.0/png/blueplus.png" /> Add Distance</button>
              </div>
            </div>
            <!-- <div class="col-lg-4 col-12 mb-3">
              <span>I want to enter details manually</span>
              <input type="checkbox" />
            </div> -->
          </div>
        </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="TransportDetailseWayBillPopup mb-1">
          <div class="TransportDetailseWaybillpopupHeading mb-3">
            <h6>Part B Details </h6>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-12 col-12 mb-3">
              <div class="SupplyTypeRadioButton">
                <label class="eWayBillDetailsPopupLabel">Mode </label>
                <div class="invoice_radio_button">
                  <input type="radio" class="invoice_radio" id="RoadRadio" name="radiomode" value="Road"
                    v-model="TransportModeValue" autocomplete="off" @change="transportModeCode($event)" />
                  <label for="RoadRadio" class="fontssetlabelRechanges">Road</label>
                  <span class="error-validation" v-if="Eway_Error.TransportMode">{{ Eway_Error.TransportMode }}</span>
                </div>
                <div class="invoice_radio_button">
                  <input type="radio" class="invoice_radio" id="RailRadio" name="radiomode" value="Rail"
                    v-model="TransportModeValue" autocomplete="off" @change="transportModeCode($event)" />
                  <label for="RailRadio" class="fontssetlabelRechanges">Rail</label>
                </div>
                <div class="invoice_radio_button">
                  <input type="radio" class="invoice_radio" id="AirRadio" name="radiomode" value="Air"
                    v-model="TransportModeValue" autocomplete="off" @change="transportModeCode($event)" />
                  <label for="AirRadio" class="fontssetlabelRechanges">Air</label>
                </div>
                <div class="invoice_radio_button">
                  <input type="radio" class="invoice_radio" id="ShipRadio" name="radiomode" value="ShipRadio"
                    v-model="TransportModeValue" autocomplete="off" @change="transportModeCode($event)" />
                  <label for="ShipRadio" class="fontssetlabelRechanges">Ship or Ship Cum Road/Rail</label>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-12 mb-3">
              <div class="SupplyTypeRadioButton">
                <label class="eWayBillDetailsPopupLabel">Vehicle Type </label>
                <div class="invoice_radio_button">
                  <input @change="VehicleTypeModeCode($event)" type="radio" class="invoice_radio" id="RegularRadio"
                    name="radiovehicle" value="Regular" v-model="VehicleTypeValue" autocomplete="off" />
                  <label for="RegularRadio" class="fontssetlabelRechanges">Regular</label>
                </div>
                <div class="invoice_radio_button">
                  <input  @change="VehicleTypeModeCode($event)" type="radio" class="invoice_radio" id="OverRadio" name="radiovehicle" value="ODC(Over Dimensional Cargo)"
                    v-model="VehicleTypeValue" autocomplete="off" />
                  <label for="OverRadio" class="fontssetlabelRechanges">Over Dimensional Cargo</label>
                </div>
              </div>
            </div>
          </div>

          <div class="row align-items-center mt-1">
            <div class="col-lg-6 col-12 mb-2">
              <div class="eWayBillDetailsPopupInputText eWayBillDetailsPopupPartBDetailsInputText">
                <label class="eWayBillDetailsPopupLabel">Vehicle No</label>
                <input v-model="vehicleNumberValue" type="text" placeholder="Enter No" @keydown="handleKeyDown"
                  v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll" />
              </div>
              <span class="error-validation" v-if="Eway_Error.vehicleNumberValue">{{ Eway_Error.vehicleNumberValue
              }}</span>
            </div>
            <div class="col-lg-6 col-12 mb-2">
              <div class="eWayBillDetailsPopupInputText eWayBillDetailsPopupPartBDetailsInputText">
                <label class="eWayBillDetailsPopupLabel">Transporter Doc. No</label>
                <input v-model="TransportDocNumber" type="text" placeholder="Enter Doc No" @keydown="handleKeyDown"
                  v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll" @input="validateTransportDocNumber"/>
              </div>
              <span class="error-validation" v-if="Eway_Error.TransportDocno">{{ Eway_Error.TransportDocno
                  }}</span>
            </div>
          </div>
        </div>
          </div>
        </div>
        
        <div class="BillDispatchFromTo">
          <div class="row">
            <div class="col-lg-3 col-12">
              <div class="TransportDetailseWaybillpopupHeading mb-3">
                <h6>Bill From</h6>
              </div>
              <div class="BillFromDispatchFrom mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthBillFromLabel">Name
                </label>
                <input disabled v-model="BillFromName" />
              </div>
              <div class="BillFromDispatchFrom mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthBillFromLabel">GSTIN</label>
                <input disabled type="text" placeholder="Enter GSTIN" @keydown="handleKeyDown"
                  v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll"
                  v-model="this.companyGstNumber" />
              </div>
              <div class="BillFromDispatchFrom mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthBillFromLabel">State</label>
                <input type="text" disabled v-model="BillFromStateName" />
                <!-- <option value="">input State</option> -->
                <!-- <option
                    v-for="option in stateData"
                    :key="option.name"
                    :value="option.name"
                  >
                    {{ option.name }}
                  </option> -->
                <!-- </input> -->
              </div>
            </div>
            <div class="col-lg-3 col-12">
              <div class="TransportDetailseWaybillpopupHeading mb-3">
                <h6>Dispatch From</h6>
              </div>
              <div class="DispatchFromBoxDiv mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthDispatchFromLabel">Address
                </label>
                <textarea disabled v-model="DispatchAddress" placeholder="Enter Notes"></textarea>
              </div>
              <div class="BillFromDispatchFrom d-flex mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthDispatchFromLabel">Place
                </label>
                <input disabled type="text" v-model="DispatchPlace" />
                <!-- <option
                    v-for="(option, index) in stateData"
                    :key="index"
                    :value="option.name"
                  >
                    {{ option.name }}
                  </option> -->
                <!-- </input> -->
              </div>
              <div class="DispatchFromBoxDivPinState mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthDispatchFromLabel">Pin & State <span
                    class="Validationspanerror">*</span></label>
                <input disabled v-model="DispatchPincode" type="text" placeholder="Enter" @keydown="handleKeyDown"
                  v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll" />
                <input disabled type="text" v-model="DispatchStateName" />
                <!-- <option disabled value="">input State</option> -->
                <!-- <option
                    v-for="(option, index) in stateData"
                    :key="index"
                    :value="option.name"
                  >
                    {{ option.name }}
                  </option> -->
                <!-- </input> -->
              </div>
            </div>
            <div class="col-lg-3 col-12">
              <div class="TransportDetailseWaybillpopupHeading mb-3">
                <h6>Bill To</h6>
              </div>
              <div class="BillFromDispatchFrom mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthBillFromLabel">Name
                </label>
                <input disabled v-model="buyersnameSearchQuery" />
              </div>
              <div class="BillFromDispatchFrom mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthBillFromLabel">GSTIN
                </label>
                <input disabled v-model="BuyerGstin" type="text" placeholder="Enter GSTIN" @keydown="handleKeyDown"
                  v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll" />
              </div>
              <div class="BillFromDispatchFrom mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthBillFromLabel">State
                </label>
                <input disabled type="text" v-model="buyerstateSearchQuery" />
                <!-- <option value="">input State</option> -->
                <!-- <option
                    v-for="(option, index) in stateData"
                    :key="index"
                    :value="option.name"
                  >
                    {{ option.name }}
                  </option> -->
                <!-- </input> -->
              </div>
            </div>
            <div class="col-lg-3 col-12">
              <div class="TransportDetailseWaybillpopupHeading mb-3">
                <h6>Ship To</h6>
              </div>
              <div class="DispatchFromBoxDiv mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthDispatchFromLabel">Address
                </label>
                <textarea disabled v-model="consignee_address" placeholder="Enter Notes"></textarea>
              </div>
              <div class="BillFromDispatchFrom d-flex mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthDispatchFromLabel">Place
                </label>
                <input disabled placeholder="Enter Place" v-model="consigneestateSearchQuery" />
              </div>
              <div class="DispatchFromBoxDivPinState mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthDispatchFromLabel">Pin & State
                </label>
                <input disabled v-model="consigneePostalCode" type="text" placeholder="Enter" @keydown="handleKeyDown"
                  v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll" />
                <input disabled type="text" v-model="consigneestateSearchQuery" />
                <!-- <option disabled value="">Select State</option> -->
                <!-- <option
                    v-for="(option, index) in stateData"
                    :key="index"
                    :value="option.name"
                  >
                    {{ option.name }}
                  </option> -->
                <!-- </select> -->
              </div>
            </div>
          </div>
        </div>
        <div class="ErrorTransporterPartBDetails" v-if="Eway_Error.BothFieldRequired">
          <p>
            <i class="fa fa-exclamation-circle" aria-hidden="true"></i> Please add Transporter Details or Part B Details
          </p>
        </div>
        <div class="d-flex justify-content-center">
          <div class="CreateeWayBillButtonPopup text-center mt-2">
            <button :disabled = "button_einvoice_disabled == 1 || isButton_TransporterId == '1'" v-if="this.EwayandEinvoice" @click="generateEwayandEinvoice" type="button" class="">
              Create eWay & einvoice
              <span v-show="isLoadingeWay" class="SpinColorWhite"><i class="fa fa-spinner fa-spin"></i></span>
            </button>
            <button v-else @click="generateEway" type="button" class="" :disabled="isButton_TransporterId == '1'">
              Create eWay Bill
              <span v-show="isLoadingeWay" class="SpinColorWhite"><i class="fa fa-spinner fa-spin"></i></span>
            </button>
          </div>
        </div>
      </div>
      <div v-if="showPopup" class="OverlapPopupOverlay" @click.self="closePopup">
        <div class="OverlayPopupContent">
          <p v-if="ewayerrorMessage">{{ this.ewayerrorMessage }}</p>
          <button @click="closePopup" type="button">OK</button>
        </div>
      </div>
    </b-modal>
    <div v-if="showEinvoicePopup" class="OverlapPopupOverlay" @click.self="closeEinvoiceErrorPopup">
      <div class="OverlayPopupContent">
        <p v-if="einvoiceErrorMessage">{{ this.einvoiceErrorMessage }}</p>

        <button @click="closeEinvoiceErrorPopup" type="button">OK</button>
      </div>
    </div>
    <div v-if="showWhatsappPopup" class="OnlyWhatsappPopupMainPortion">
      <div class="popup-content-Only-Whatsapp-Popup">
        <div class="whatsappPopupCaptionDetailsPortion">
          <div v-if="qrCode && !linked" class="qr-container">
            <div class="WhatsappPopupOnlyHeaderPortion">
              <h6>Send Bills from your own WhatsApp Number</h6>
              <button @click="closePopupDesktop" class="CrossIconButtonSetWhatsapp"><i class="fa fa-times"></i></button>
            </div>
            <div class="row">
              <div class="col-lg-8 col-12">
                <div class="WhatQRcodePortionCaption">
                  <h5>How to Proceed</h5>
                  <p>1. Open WhatsApp on your phone</p>
                  <p>2. Tap Menu <img src="/assets/images/1.0/png/threedots.png" /> on Android, or Settings <img
                      src="/assets/images/1.0/png/setting.png" /> on iPhone</p>
                  <p>3. Tap Linked devices and then Link a device</p>
                  <p>4. Point your phone at this screen to scan QR code.</p>
                </div>
              </div>
              <div class="col-lg-4 col-12">
                <div class="whatsappMainPopupQRCodeImage text-center">
                  <img :src="qrCode" alt="Scan QR to Link WhatsApp" />
                </div>
              </div>
              <div class="col-12">
                <div class="SuportCallWahtsapp">
                  <p>Need help? <a href="tel:+91 83 83 83 83 83">+91 83 83 83 83 83</a></p>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="WhatsappPopupOnlyHeaderPortion">
              <button @click="closePopupDesktop" class="CrossIconButtonSetWhatsapp"><i class="fa fa-times"></i></button>
            </div>
            <div class="WhatQRcodePortionCaption">
              <div class="Congratulationimagepart text-center mb-3">
                <img src="/assets/images/1.0/png/congratulationimage.png" />
              </div>
              <div class="CongratulationCaptionText text-center">
                <h4>Congratulations</h4>
                <p>Successfully connected through WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Overlay to Close Popup -->
      <div class="WhatsappPopupOverlay" @click="closePopupDesktop"></div>
    </div>

    <div v-if="showPreviewWhatsappPopup" class="OnlyWhatsappPopupMainPortion">
      <div class="popup-content-Only-Whatsapp-Popup">
        <div class="whatsappPopupCaptionDetailsPortion">
          <div class="WhatsappPopupOnlyHeaderPortion">
            <div class="WhatsappPreviewHeading">
              <h4>WhatsApp Preview</h4>
            </div>
            <button @click="closePopupDesktop" class="CrossIconButtonSetWhatsapp"><i class="fa fa-times"></i></button>
          </div>
          <div class="PreviewWhatsappCaption text-center">
            <h5>To: <span class="font-weight-600">{{ this.ledgerName }}</span> <span class="PreviewNumber">({{
              this.ledgerMobile }})</span></h5>
          </div>
          <div class="PreviewWhatsappGreenBox">
            <h6>
              <a href="javascript:void(0);">
                <img src="/assets/images/1.0/png/upload.png" /> {{ this.pdf_name }}
              </a>
            </h6>
            <p v-html="pdf_message.replace(/\n/g, '<br>')"></p>
          </div>
          <div class="PreviewSendWhatsappbutton">
            <button type="button" @click="click_send()">
              Send
            </button>
          </div>
        </div>
      </div>
      <!-- Overlay to Close Popup -->
      <div class="WhatsappPopupOverlay" @click="closePopupDesktop"></div>
    </div>
    <!--Voucher Type Popup-->
    <div v-if="showVtypePopup" class="">
      <div class="SalesCreateOrderVoucherPopupMainDiv">
         <div class="VoucherTypePopupSalesCreateSalesOrderMain">
            <div class="CrossIconVoucherTypePopupSalesCreate">
              <button @click="closePopupDesktop">
                <i class="fa fa-times"></i>
              </button>
            </div>
             <div class="HeadingVouchertypePortion">
              <h6>Voucher Type</h6>
            </div>
                <ul ref="voucherDropdown" class="VouchertypePopupInnerPoint">
                  <li v-for="(vType, index) in voucherTypesForSales" @click="selectVoucherType(vType)">
                    {{ vType.voucherTypeName }}
                  </li>
                </ul>
                </div>
      </div>
      <!-- Overlay to Close Popup -->
      <div class="SalesCreateVoucherpopupOrderOverlay" @click="closePopupDesktop"></div>
    </div>
  </section>
</template>
<script>
import Vue from "vue";
var numeral = require("numeral");

Vue.filter("formatNumberPartiesDetails", function (value) {
  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(
    value
  );
});

Vue.filter("formatNumberPartiesDetailsQty", function (value) {
  return numeral(value).format("0,0.0"); // displaying other groupings/separators is possible, look at the docs
});
import moment from "moment";
import Api from "@/Api";
import Common from "@/Common";
import Datepicker from "vuejs-datepicker";
import axios from "axios";
import GoogleAnalytics from "@/GoogleAnalytics";

export default {
  components: {
    Datepicker
  },
  name: "Vochar Details",
  data() {
    return {
      //data here
      narration:'',
      isShowEditBatchAlloc: false,
      GstInvalid: false,
      modified: false, 
      voucherSyncId: "",
      action: "",

      isTransfer : null,
      isCancelled: false,
      TransporterNameValueText: "",
      showDistanceInput: false,
      EwayandEinvoice: false,
      guid: "",
      partyLedgerGuid: "",
      isOneChild: "",
      partyName: "",
      voucherNumber: "",
      voucherDate: "",
      voucherType: "",
      parentType: "",
      symbol: "",
      stockItemEntries: [],
      summary: [],
      netAmount: 0,
      gstAmount: 0,
      grossTotal: 0,
      all_voucher: 0,
      payment_voucher: 0,
      contra_voucher: 0,
      new_loading: true,
      total_qty: 0,
      htmlString: "",
      responseComing: "",
      isPaid: "",
      eway_no: "",
      einvoice: "",
      eWayBillDetails: [],
      isEInvoiceStatus: false,
      isEwayStatus: false,
      openTab: 1,
      companyGstNumber: localStorage.getItem("companyGstNumber"),
      parentUserId: localStorage.getItem("_parentUserId"),
      customerStatus: localStorage.getItem("customerStatus"),
      userName: "",
      Password: "",
      eInvoiceStatusValue: "Yes",
      subSupplyTypeData: [],
      allowed_descriptions: [
        "Supply",
        "Export",
        "SKD/CKD/Lots",
        "Job Work",
        "Recipient Not Known",
        "For Own Use",
        "Line Sales",
        "Exhibition or Fairs",
        "Others",
      ],
      TransportMode: "",
      VehicleType: "",
      selectedTranModeCOde: "",
      selectedVehicleTypeCOde: "",
      slide: 0,
      gstinneweWay: localStorage.getItem("companyGstNumber"),
      usernameValue: "",
      passwordValue: "",
      passwordVisibleeWayLogin: false,
      isButtonDisabledLogin: true,
      isLoadingGsp: false,
      Eway_Error: {
        transporterId: '',
        subSupplyTypeData:'',
        documentTypeData:'',
        BothFieldRequired:''
      },
      TransporterName: [],
      RadioValue: "Outward",
      ewayErrorFlag: false,
      SubSupplyTypeValue: "",
      DocumentTypeValue: "",
      documentTypeData: [],
      TransportModeValue: "",
      VehicleTypeValue: "",
      isButton_TransporterId: "0",
      // DispatchName: "",
      BillFromName:"",
      DispatchPincode: "",
      DispatchPlace: "",
      DispatchAddress: "",
      DispatchStateName: "",
      BillFromStateName:"",
      consignee_address: "",
      BuyerGstin: "",
      showPopup: false,
      basicConsigneePincode: "",
      consigneestateSearchQuery: "",
      gstinError: false,
      transDocDate: new Date(),
      TransportDocNumber: "",
      isButtonChecked: false,
      TransporterNameValue: "",
      TransportIdValue: "",
      TransporterId: [],
      vehicleNumberValue: "",
      buyersnameSearchQuery: "",
      consigneePostalCode: "",
      buyerstateSearchQuery: "",
      isLoadingeWay: false,
      EwayEinvoiceItemsarray: [],
      ServerStatus: localStorage.getItem("server"),
      igstCheckforEwayEinvoice: true,
      showEinvoicePopup: false,
      isLoadingeInvoice: false,
      selectedSupply: "",
      selectedCode: "",
      configurationEwayEinvoice: false,
      irnData: "",
      igstCheckforEwayEinvoice: true,
      enable: false,
      ewayReadPermission: false,
      eInvoiceReadPermission: false,
      ewayWritePermission: false,
      eInvoiceWritePermission: false,
      parentUserId: localStorage.getItem("_parentUserId"),
      customerId: localStorage.getItem("customerId"),
      showWhatsappPopup: false,
      linked: false,
      qrCode: "",
      w_userId: localStorage.getItem("customerId"),
      Base64_url: "",
      Bill_success: false,
      ledgerMobile: "",
      showPreviewWhatsappPopup: false,
      pdf_base64: "",
      pdf_name: "",
      pdf_message: "",
      getIRN: '',
      button_einvoice_disabled: 0,
      partyGstin: 'party',
      eInvoiceStatus: localStorage.getItem('eInvoiceStatus'),
      stockItemsError: '',
      companyTurnOver: localStorage.getItem('companyTurnOver'),
      voucherTypesForSales: [],
      showVtypePopup: false,
      button_eway_disabled: 0
    };
  },
  watch: {
    RadioValue() {
      this.updateSelectedSupply();
    },
  },
  computed: {
    isVoucherNumberExist() {
      return this.voucherNumber && this.voucherNumber.trim() !== "";
    },
     isVoucherInCurrentFinancialYear() {
      if (!this.voucherDate) return false;

      const voucherDate = new Date(this.voucherDate);
      const currentDate = new Date();

      const currentYear = currentDate.getFullYear();

      // Financial year starts from April 1st
      const fyStart = new Date(currentDate.getMonth() >= 3 ? currentYear : currentYear - 1, 3, 1);
      const fyEnd = new Date(currentDate.getMonth() >= 3 ? currentYear + 1 : currentYear, 2, 31, 23, 59, 59);

      return voucherDate >= fyStart && voucherDate <= fyEnd;
    },
    addOnsStatus() {
      const status = localStorage.getItem("EWAY_EINVOICE_STATUS");
      return status ? JSON.parse(status) : [];
    },
    EwayEinvoiceElligible() {
      if (this.parentUserId !== undefined && this.parentUserId !== '' && this.parentUserId !== null) {
        if (this.ewayWritePermission && this.eInvoiceWritePermission) {
          return (
            this.companyGstNumber &&
            this.$route.params.v_type == "Sales" &&
            this.configurationEwayEinvoice && this.addOnsStatus.includes("EWAY_EINVOICE"));
        }
      }
      else {
        return (
          this.$route.params.v_type == "Sales" &&
          this.companyGstNumber &&
          this.configurationEwayEinvoice &&
          this.parentUserId == "" &&
          (this.customerStatus == "Installation Done" ||
            (this.customerStatus.toLowerCase().includes("converted") &&
              this.addOnsStatus.includes("EWAY_EINVOICE")))
        );
      }
    },
    isFutureDate() {
      const today = new Date();
      const transactionDate = new Date(this.voucherDate);
      return transactionDate > today;
    },
  },
  methods: {
    closePopupDesktop() {
      this.showVtypePopup = false;
    },
      onEWayModalHidden() {
      this.ShowEway = false;
      this.EwayandEinvoice = false
    },
      async createSalesFromSalesOrder(){
      this.showVtypePopup = true
      try {
       const data = {
          requestFrom: "WEB",
          searchTerm: "",
          startLimit: 0,
          endLimit: 25,
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          parent: "Sales",
        };

        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };

        const response = await Api.getVoucherTypes(data, headers);

        if (response.data.message === "AUTHENTICATION_FAILED") {
          localStorage.clear();
          window.location.href = "/";
        } else {
          this.voucherTypesForSales = response.data.data.list
          }
      }
     catch (err) {
        console.error(err);
      }
      GoogleAnalytics.salesOrderToSales()
    },
    selectVoucherType(vType){
      this.$router.push({ 
        name: 'sales-voucher-v4', 
        query: {
        voucherType: vType.voucherTypeName, 
        voucherIdFromSalesOrder: this.$route.params.v_id 
        }
        })
      },
    verifyTransporterId() {
      const data = {
        _userId: localStorage.getItem('customerId'),
        requestFrom: "WEB",
        gstNo: this.TransportIdValue
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "token": localStorage.getItem('webAuthToken')
      };
      Api.getGSTNumberDetails(data, headers)
        .then((response) => {
          if (
            response.data &&
            response.data.data &&
            response.data.data.gstSearchResponse &&
            response.data.data.gstSearchResponse.lgnm
          ) {
            this.isButton_TransporterId = "0"
            this.TransporterNameValueText = response.data.data.gstSearchResponse.lgnm;
            console.log(this.TransporterNameValueText,"transport value")
            this.$set(this.Eway_Error, 'transporterId', ''); // clear error
          } else {
            this.isButton_TransporterId = "1"
            // If not valid, clear the field and log the error message
            this.TransporterNameValueText = "";
            this.$set(this.Eway_Error, 'transporterId', response.data.message || "Invalid GST ID");
          }
        })
    },
    verifyGst() {
      if(this.partyGstin==""){
        return;
      }
      const data = {
        _userId: localStorage.getItem('customerId'),
        requestFrom: "WEB",
        gstNo: this.partyGstin,
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "token": localStorage.getItem('webAuthToken')
      };
      Api.getGSTNumberDetails(data, headers)
        .then((response) => {
          if (
            response.data &&
            response.data.data &&
            response.data.data.gstSearchResponse &&
            response.data.data.gstSearchResponse.pradr && response.data.data.gstSearchResponse.pradr.addr && response.data.data.gstSearchResponse.pradr.addr.pncd
          ) {
            this.consigneePostalCode = response.data.data.gstSearchResponse.pradr.addr.pncd
            this.GstInvalid = false;
          } else {
            this.GstInvalid = true;
          }
        })
    },
    validateTransporterID() {
      const transporterIdValidate =
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
      if (transporterIdValidate.test(this.TransportIdValue)) {
        this.isButton_TransporterId = "0"
        this.$set(this.Eway_Error, 'transporterId', '');
        this.verifyTransporterId()
      }
      else {
        this.isButton_TransporterId = "1"
        this.$set(this.Eway_Error, 'transporterId', 'Valid Transporter ID is required');
      }
    },
    validateTransportDocNumber() {
      const regex = /^([a-zA-Z0-9\/-]{1,15})$/;
      if (!regex.test(this.TransportDocNumber)) {
        console.log("Invalid Transport Document Number");
        this.isButton_TransporterId = "1"
        // Optional: set error message to show on UI
        this.Eway_Error.TransportDocno = "Invalid Transport Document Number";
      } else {
        // Clear the error if valid
        this.isButton_TransporterId = "0"
        this.Eway_Error.TransportDocno = "";
      }
    },
    OpenDistanceInput() {
      this.showDistanceInput = true;
    },

    editVoucher() {
      // debugger;

      GoogleAnalytics.parties_details_edit_button(this.parentType);

      let routeName = "";

      switch (this.parentType) {
        case "Sales":
          routeName = "sales-voucher-type-with-voucher-id";
          break;
        case "Sales Order":
          routeName = "sales-order-voucher-type-with-voucher-id";
          break;
        case "Purchase":
          routeName = "purchase-voucher-type-voucher-id";
          break;
        case "Purchase Order": // ✅ fixed typo
          routeName = "purchase-order-voucher-type-voucher-id";
          break;
        case "Credit Note":
          routeName = "create-creditnote-type-voucher-id";
          break;
        case "Debit Note":
          routeName = "create-debit-note-type-voucher-id";
          break;
        default:
          console.error("Invalid voucher type:", this.vouchertype);
          return;
      }

      const modified = this.modified && this.isTransfer == 0 && this.action !== 'Cancel';

      this.$router.push({
        name: routeName,
        params: {
          voucher_id: modified ? this.voucherSyncId : this.$route.params.v_id,
          voucherTypeName: this.voucherType
        },
        query: {
          isEdit: 1
        }
      });
    },


    // CloseBillSuccesBox() {
    //   this.Bill_success = false;
    // },
    // async openWhatsappPopup(isEwayStatus, isEInvoiceStatus) {
    //   if (!this.linked && this.qrCode != "") {
    //     try {
    //       const response = await axios.get(`https://wa.livekeeping.com/qr/${this.w_userId}`);
    //       this.qrCode = response.data.qr;
    //       this.linked = response.data.linked;
    //     } catch (error) {
    //       console.error("❌ Error fetching QR:", error);
    //     }
    //     this.showWhatsappPopup = true;
    //   } else {

    //     await this.get_base64(isEwayStatus, isEInvoiceStatus)


    //   }

    // },
    // async click_send() {
    //   this.showPreviewWhatsappPopup = false;
    //   await this.send_message(this.pdf_base64, this.pdf_name, this.pdf_message);
    // },
    // async send_message(pdfbase64, filename, message) {

    //   const chatId = "91" + this.ledgerMobile;
    //   try {
    //     let savedData = JSON.parse(localStorage.getItem("dailyLimit")) || {};
    //     if (savedData.count != "0") {
    //       savedData.count = savedData.count - 1;
    //       localStorage.setItem("dailyLimit", JSON.stringify(savedData));
    //     }
    //     if (savedData.count == "0") {
    //       const w_url = "https://api.whatsapp.com/send?phone=" + chatId;
    //       window.open(w_url, "_blank");
    //     } else {
    //       const response = await axios.post('https://wa.livekeeping.com/send', {
    //         userId: localStorage.getItem("customerId"), // Sending userId in the request body,
    //         chatId: chatId,
    //         pdfBase64: pdfbase64,
    //         message: message,
    //         filename: filename
    //       });

    //       // alert(response.data.status);
    //       this.Bill_success = true;
    //       setTimeout(() => {
    //         this.Bill_success = false;
    //       }, 5000);
    //     }

    //   } catch (error) {
    //     console.error("❌ Error sending message:", error);
    //   }
    // },
    // async get_base64(isEwayStatus, isEInvoiceStatus) {
    //   localStorage.setItem("pdfbase64", "");
    //   const data = {
    //     requestFrom: "WEB",
    //     company_id: localStorage.getItem("companyId"),
    //     _userId: localStorage.getItem("customerId"),
    //     voucherId: this.$route.params.v_id,
    //     isEway: isEwayStatus == 0 ? false : true,
    //     isEinvoice: isEInvoiceStatus == 0 ? false : true,
    //   };
    //   const headers = {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //     token: localStorage.getItem("webAuthToken"),
    //   };
    //   Api.getPDFForVoucherDetailsGo(data, headers)
    //     .then((response) => {
    //       if (response.data.message == "AUTHENTICATION_FAILED") {
    //         localStorage.clear();
    //         window.location.href = "/";
    //       } else {
    //         this.pdf_message = "Greetings from " + localStorage.getItem("companyName") + "\n" +

    //           "\nPls find your transaction details.\n" +
    //           "\nInvoice Amount: INR " + "" + this.$options.filters.formatNumberPartiesDetails(this.grossTotal) + "\n" +
    //           "\n" +
    //           "Thank you for doing business with us.";
    //         this.pdf_base64 = response.data.data.pdf;
    //         this.pdf_name = response.data.data.fileName + ".pdf"
    //         this.showPreviewWhatsappPopup = true;
    //         this.pdf_sender = localStorage.getItem("companyName")
    //         // localStorage.setItem("pdfbase64", response.data.data.pdf);
    //         // this.send_message(response.data.data.pdf, response.data.data.fileName + ".pdf");
    //       }
    //     })
    //     .catch((err) => {
    //       Common.getStatusForActionFailed(err.response.status);
    //       alert("ERROR");
    //       this.loading = false;
    //     });
    // },
    // async checkLinkedStatus() {
    //   // Auto-check WhatsApp link status every 5 seconds
    //   setInterval(async () => {
    //     try {
    //       const response = await axios.get(`https://wa.livekeeping.com/qr/${this.w_userId}`);
    //       this.linked = response.data.linked;
    //       this.qrCode = response.data.qr;
    //       if (this.linked) this.qrCode = ""; // Hide QR when linked
    //     } catch (error) {
    //       console.error("❌ Error checking status:", error);
    //     }
    //   }, 1000);
    // },
    // closePopupDesktop() {
    //   this.showWhatsappPopup = false;
    //   this.showPreviewWhatsappPopup = false;
    // },
    // openPreviewWhatsappPopup() {
    //   this.showPreviewWhatsappPopup = true;
    // },
    hasDescriptions(showItemDescription) {
      if (showItemDescription) {
        this.enable = this.stockItemEntries.some(
          (stock) => stock.descriptions && stock.descriptions.trim() !== ""
        );
      } else {
        this.enable = false;
      }
    },
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    handleKeyDown(event) {
      if (
        event.key == "e" ||
        event.key == "E" ||
        event.key == "-" ||
        event.key == "+"
      ) {
        event.preventDefault();
      }
    },
    async getUserPermission() {
      const data = {
        mainUserId: this.parentUserId ? this.parentUserId : this.customerId,
        subUserId: this.customerId ? this.customerId : '',
        _userId: this.customerId ? this.customerId : '',
        company_id: localStorage.getItem('companyId'),
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      try {
        const response = await Api.getUserPermission(data, headers);
        const responseDataa = response.data.data;
        this.eInvoiceReadPermission = responseDataa.isRead.isEInvoice;
        this.ewayReadPermission = responseDataa.isRead.isEway;
        this.ewayWritePermission = responseDataa.isWrite.isEway;
        this.eInvoiceWritePermission = responseDataa.isWrite.isEInvoice;
      } catch (error) {
        console.error("Error fetching user permissions:", error);
      }
    },
    disableArrowKeys: function (e) {
      if (e.keyCode === 38 || e.keyCode === 40) {
        e.preventDefault();
      }
    },
    disableMouseWheelScroll: function (e) {
      e.preventDefault();
    },
    closePopup() {
      this.showPopup = false;
    },
    closeEinvoiceErrorPopup() {
      this.showEinvoicePopup = false;
      // this.$router.push({ name: "My Vouchers" });
    },
    togglePasswordVisibility() {
      this.passwordVisibleeWayLogin = !this.passwordVisibleeWayLogin;
    },
    InvoiceConfigurations() {
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getInvoiceConfigurationsGo(data, headers)
        .then((response) => {
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseData == "200") {
            const CommonResponse = response.data.data.vouchers;
            this.configurationEwayEinvoice = CommonResponse.isEwayStatus;
            hasDescriptions(CommonResponse.showItemDescription);
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err);
          this.loading = false;
        });
    },

    callExistingVoucherDetails(voucherSyncId) {
      // debugger;
      const data = {
        requestFrom: "WEB",
        company_Id: localStorage.getItem("companyId"),
        voucherId: voucherSyncId,
        _userId: localStorage.getItem("customerId"),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getVoucherFullDetailsFromSyncGoo(data, headers)
        .then((response) => {
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseData == "200")  {
            this.bindVoucherResponseData(response.data.data);
          }
      })
    },

    get_vochar_details() {
      console.log("get_vochar_details");
      const data = {
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        voucherId: this.$route.params.v_id,
        voucherType: this.$route.params.v_type.toUpperCase(),
        masterId: this.$route.query.masterID ? +this.$route.query.masterID : 0
      };

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      const apiCall = Api.getVoucher;

      apiCall(data, headers)
        .then((response) => {
          const status = Common.getStatusForActionFailed(response.data.status);
          if (status == "200") {
            let voucherData = response.data.data;
            this.narration = voucherData.narration;
            this.voucherSyncId = voucherData.voucherSyncId;
            if(voucherData.isModified == true && voucherData.action != 'Cancel' && voucherData.isTransfer == 0) {
              this.callExistingVoucherDetails(this.voucherSyncId);
            }else {
              this.bindVoucherResponseData(voucherData);
            }
            this.new_loading = false;
          }
        })
        .catch((err) => {
          // console.log("response.status error", err?.response?.status);
          Common.getStatusForActionFailed(err);
          this.loading = false;
          this.new_loading = false;
        });
    }, 

  

    bindVoucherResponseData(data) {

            if(data.isCancelled && data.isModified && data.isTransfer == 1) { 
              this.$router.push("/sales-month");
              return;
            }

            this.action = data.action
            this.modified  = data.isModified;
            this.partyGstin = data.partygstIn
            this.verifyGst();
            this.partyName = data.partyLedgerName;
            this.voucherNumber = data.voucherNumber;
            this.voucherDate = data.voucherDate;
            this.voucherType = data.voucherType;
            this.isCancelled = data.isCancelled;
            this.isTransfer = data.isTransfer;
            // alert(this.isTransfer);

            this.symbol = localStorage.getItem("symbol");
            this.netAmount = data.stockItemTotalAmount;
            this.partyLedgerGuid = data.partyLedgerGuid;
            this.getLedger();

            this.consignee_address =
              data.basicConsigneeDetails.shipToAddress;
            this.BuyerGstin = data.basicBuyerDetails.billToGSTIN;
            this.consigneePostalCode = data.basicConsigneeDetails.shipToPincode;
            this.consigneestateSearchQuery =
              data.basicConsigneeDetails.shipToState;
            this.buyersnameSearchQuery =
              data.basicBuyerDetails.billTo;
            this.buyerstateSearchQuery =
              data.basicBuyerDetails.billToState;
            this.irnData = data.irn;
            this.parentType = data.parentType;
            this.igstCheckforEwayEinvoice = data.igstApplicable;
            localStorage.setItem("parentType", data.parentType);
            this.vehicleNumberValue = data.basicShipVesselNo;

            // this.DispatchName = data.dispatchFromDetails.name;
            this.DispatchStateName = data.dispatchFromDetails.stateName;
            this.DispatchAddress = data.dispatchFromDetails.address;
            this.DispatchPlace = data.dispatchFromDetails.place;
            this.DispatchPincode = data.dispatchFromDetails.pinCode;
            // if(this.DispatchPincode !== ""){
            //   this.GetCityByPincode();
            // }

            if (
                data.stockItemEntries && 
                Array.isArray(data.stockItemEntries) && 
                data.stockItemEntries.some(entry => {
                  return (
                    entry && 
                    entry.batchAllocationDetails && 
                    Array.isArray(entry.batchAllocationDetails) && 
                    entry.batchAllocationDetails.length > 1
                  );
                })
              ) {
                this.isShowEditBatchAlloc = true;
              } else {
                this.isShowEditBatchAlloc = false; // Optional: explicitly set to false if condition fails
              }

            this.guid = data.guid;
            if (
              this.parentType === "Sales" ||
              this.parentType === "Purchase" ||
              this.parentType === "Credit Note" ||
              this.parentType === "Debit Note" ||
              this.parentType === "Sales Order" ||
              this.parentType === "Purchase Order" ||
              this.parentType === "Delivery Note"
            ) {
              this.all_voucher = 1;
              this.payment_voucher = 0;
              this.contra_voucher = 0;
              this.total_qty = data.itemTotalQuantity;
              for (let [key, value] of Object.entries(
                data.stockItemEntries
              )) {
                if (data.stockItemEntries[key].discount != "") {
                  data.stockItemEntries[key].discount =
                    value.discount;
                } else {
                  data.stockItemEntries[key].discount = "0";
                }
                let newItem = {
                  hsnCode: value.hsnCode,
                  guid: value.stockItemGuid,
                  taxRate: 0,
                };

                let maxGstRate = 0;

                for (let [rateKey, value1] of Object.entries(
                  value.rateDetails
                )) {
                  if (value1 && value1.gstRate !== undefined) {
                    const gstRate = parseFloat(value1.gstRate) || 0;
                    maxGstRate = Math.max(maxGstRate, gstRate);
                  }
                  newItem.taxRate = maxGstRate;
                }
                this.EwayEinvoiceItemsarray.push(newItem);
              }
              this.stockItemEntries = data.stockItemEntries;
              this.responseComing = data;

              const LedgerEntries_Array = data.ledgerEntries;

              LedgerEntries_Array.map((element) => {
                if (element.isPartyLedger == false) {
                  this.summary.push(element);
                }
                if (element.ledgerGuid == this.partyLedgerGuid) {
                  this.grossTotal = parseFloat(Math.abs(element.amount));
                }
              });

              if (
                data.isEwayStatus != "0" &&
                data.eWayBillDetails != ""
              ) {
                this.eway_no =
                  "#" + data.eWayBillDetails[0].billNumber;
                this.isEwayStatus = true;
              }

              if (
                data.isEInvoiceStatus != "0" &&
                data.irnAckNo != ""
              ) {
                this.einvoice = "#" + data.irnAckNo;
                this.isEInvoiceStatus = true;
              }
              this.eWayBillDetails = data.eWayBillDetails;

              console.log("this.summary", this.summary);

              for (let [key, value] of Object.entries(this.summary)) {
                this.gstAmount += parseFloat(Math.abs(value.value));
              }
            } else if (
              this.parentType === "Payment" ||
              this.parentType === "Receipt"
            ) {
              this.all_voucher = 0;
              this.payment_voucher = 1;
              this.contra_voucher = 0;
              this.stockItemEntries = [];
              this.summary = [];
              this.i = 0;
              this.grossTotal = data.grossTotal;
              for (let [key, value] of Object.entries(
                data.ledgerEntries
              )) {
                if (value.amount > 0) {
                  this.stockItemEntries.push(value);
                }
                if (value.amount <= 0) {
                  this.summary.push(value);
                }
              }
            } else if (
              this.parentType === "Journal" ||
              this.parentType === "Contra"
            ) {
              this.all_voucher = 0;
              this.payment_voucher = 0;
              this.contra_voucher = 1;

              for (let [key, value] of Object.entries(
                data.ledgerEntries
              )) {
                if (value.amount >= 0) {
                  // + value
                  data.ledgerEntries[key].symbol_amount = " Cr.";
                } else {
                  // - value
                  data.ledgerEntries[key].symbol_amount = " Dr.";
                }
              }
              this.stockItemEntries = data.ledgerEntries;
            }
            this.new_loading = false;
            this.getIRN = data.irn
    
    },


    getLedger() {
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        ledgerGuid: this.partyLedgerGuid,
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgerByIdGo(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            this.ledgerMobile = response.data.data.ledgerMobile;
            this.ledgerName = response.data.data.ledgerName;
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err);
          // alert("ERROR");
          this.loading = false;
        });
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD MMM yyyy");
      }
    },
    generatePdf(isEwayStatus = false, isEInvoiceStatus = false) {
      GoogleAnalytics.parties_details_screen_viewpdf("viewpdf");
      const shouldIncludeEwayEinvoice = this.modified && this.isTransfer == 0 && this.action != 'Cancel';

        const data = {
          requestFrom: "WEB",
          company_id: localStorage.getItem("companyId"),
          _userId: localStorage.getItem("customerId"),
          voucherId: shouldIncludeEwayEinvoice ? this.voucherSyncId : this.$route.params.v_id,
          ...(shouldIncludeEwayEinvoice ? {} : {
            isEway: this.isEwayStatus,
            isEinvoice: this.isEInvoiceStatus
          } )
        };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      const apiCall = this.action != "Cancel" && this.isTransfer == 0  && this.modified? Api.getMyVoucherPDF : Api.getPDFForVoucherDetailsGo;

      apiCall(data, headers)
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
    ewaygeneratePdf() {
      GoogleAnalytics.parties_details_screen_viewpdf("viewpdf");
      const data = {
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        voucherId: this.$route.params.v_id,
        eWayType: "DETAILED",
        isExisting: true,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getEwayPDF(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            this.pdfUrl = response.data.data.pdf;
            localStorage.setItem("pdfUrl", this.pdfUrl);
            window.location.reload();
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          alert("ERROR");
          this.loading = false;
        });
    },
    generateEwayandEinvoice() {
      this.generateEinvoice()
    },
    // functions for eway
    checklogin() {
       const VoucherNumberRegex = /^([a-zA-Z1-9]{1}[a-zA-Z0-9/-]{0,15})$/
       if(!VoucherNumberRegex.test(this.voucherNumber)){
         this.showEinvoicePopup = true
         this.einvoiceErrorMessage = 'Incorrect voucher number format, please update'
       }
       else{

         if(this.consigneePostalCode=="" && this.BuyerGstin==""){
           this.button_eway_disabled = 1;
           return
          }
          this.EwayandEinvoice = false;
          this.getGspSearchFunction();
          setTimeout(() => {
            if (this.userName == "" && this.Password == "") {
              this.$bvModal.show("EWayLoginModal");
            } else {
              this.$bvModal.hide("EWayLoginModal");
              this.$bvModal.show("eWayBillDetailsModal");
            }
          }, 1000);
          this.ShowEway = true;
          
          this.OpenEwayForm();
        }
    },
    OpenEwayandEinvoice() {
      this.stockItemsError = ''
      this.stockItemEntries.forEach((value, key)=>{
        if(value.hsnCode.length < 6 && this.companyTurnOver >= 50000000 ){
          this.stockItemsError = 'HSN Code Should not be less than 6 digits, please update.'          
        }
      })
      if (this.stockItemsError === '') {
          const VoucherNumberRegex = /^([a-zA-Z1-9]{1}[a-zA-Z0-9/-]{0,15})$/
       if(!VoucherNumberRegex.test(this.voucherNumber)){
         this.showEinvoicePopup = true
         this.einvoiceErrorMessage = 'Incorrect voucher number format, please update'
       }
       else{

      this.EwayandEinvoice = true;
      this.getGspSearchFunction();
      setTimeout(() => {
        if (this.userName == "" && this.Password == "") {
          this.$bvModal.show("EWayLoginModal");
        } else {
          this.$bvModal.hide("EWayLoginModal");
          this.$bvModal.show("eWayBillDetailsModal");
        }
      }, 1000);
      this.ShowEway = true;
      this.OpenEwayForm();
      }
     }
    },
    getGspSearchFunction() {
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        gstIn: localStorage.getItem("companyGstNumber"),
        requestFrom: "WEB",
        isStaging: false,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getGspSearch(data, headers)
        .then((response) => {
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseData == "200") {
            this.userName = response.data.data.gspUserName;
            this.Password = response.data.data.gspPassword;
            this.eInvoiceStatusValue = response.data.data.eInvoiceStatus;
          }
        })
        .catch((error) => {
          Common.getStatusForActionFailed(err.response.status);
        });
    },
    SupplyTypeChanged(event) {
      const Selected = this.subSupplyTypeData.find(
        (data) => data.description === this.SubSupplyTypeValue
      );
      this.selectedCode = Selected ? Selected.code : "";

      let data = event.target.value;
      if (data == "Supply") {
        this.documentTypeData = [
          {
            code: "INV",
            description: "Tax Invoice",
          },
          {
            code: "BIL",
            description: "Bill of Supply",
          },
        ];
      } else if (data == "Export") {
        this.documentTypeData = [
          {
            code: "INV",
            description: "Tax Invoice",
          },
          {
            code: "BIL",
            description: "Bill of Supply",
          },
        ];
      } else if (data == "Job Work") {
        this.documentTypeData = [
          {
            code: "CHL",
            description: "Delivery Challan",
          },
        ];
      } else if (data == "SKD/CKD/Lots") {
        this.documentTypeData = [
          {
            code: "INV",
            description: "Tax Invoice",
          },
          {
            code: "BIL",
            description: "Bill of Supply",
          },
          {
            code: "CHL",
            description: "Delivery Challan",
          },
        ];
      } else if (data == "Recipient Not Known") {
        this.documentTypeData = [
          {
            code: "OTH",
            description: "Others",
          },
          {
            code: "CHL",
            description: "Delivery Challan",
          },
        ];
      } else if (data == "For Own Use") {
        this.documentTypeData = [
          {
            code: "CHL",
            description: "Delivery Challan",
          },
        ];
      } else if (data == "Exhibition or Fairs") {
        this.documentTypeData = [
          {
            code: "CHL",
            description: "Delivery Challan",
          },
        ];
      } else if (data == "Line Sales") {
        this.documentTypeData = [
          {
            code: "CHL",
            description: "Delivery Challan",
          },
        ];
      } else if (data == "Others") {
        this.documentTypeData = [
          {
            code: "OTH",
            description: "Others",
          },
          {
            code: "CHL",
            description: "Delivery Challan",
          },
        ];
      }
    },
    OpenEwayForm() {
      this.getGspSearchFunction();
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getMasterCodeDetails(data, headers)
        .then((response) => {
          const responseData = response.data.data.subSupplyType;
          this.subSupplyTypeData = responseData.filter((item) =>
            this.allowed_descriptions.includes(item.description)
          );
          this.TransportMode = response.data.data.transportationModes;
          this.VehicleType = response.data.data.vehicleType;
        })
        .catch(() => {
          console.log("error in mastercode api");
        });
      this.getTransporterLedgersFunction();
    },
    transportModeCode(event) {
      this.isButton_TransporterId = "0"
      this.VehicleTypeValue = "Regular"
      this.VehicleTypeModeCode()
      const Selected = this.TransportMode.find(
        (data) => data.description === this.TransportModeValue
      );
      this.selectedTranModeCOde = Selected ? Selected.code : "";
    },
    VehicleTypeModeCode(event) {
      const Selected = this.VehicleType.find(
        (data) => data.description === this.VehicleTypeValue
      );
      this.selectedVehicleTypeCOde = Selected ? Selected.code : "";
    },
    gstinRegex() {
      return /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
    },
    checkLoginButtonState() {
      this.isButtonDisabledLogin =
        !this.gstinneweWay || !this.usernameValue || !this.passwordValue;
      if (this.gstinneweWay && !this.gstinRegex().test(this.gstinneweWay)) {
        this.gstinError = true;
        this.GspButton_disabled = "1";
      } else {
        this.gstinError = false;
        this.GspButton_disabled = "0";
      }
    },
    UpdateGSP() {
      this.isLoadingGsp = true;
      this.ewayErrorFlag = false;
      this.Eway_Error = {};
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        gstIn: this.gstinneweWay,
        username: this.usernameValue,
        password: this.passwordValue,
        isEinvoice: this.eInvoiceStatusValue == "Yes" ? true : false,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.UpdateGSP(data, headers)
        .then((response) => {
          if (response.data.status == "200") {
            this.isLoadingGsp = false;
            this.ewayErrorFlag = false;
            this.$bvModal.hide("EWayLoginModal");
            this.$bvModal.show("eWayBillDetailsModal");
            setTimeout(() => {
              this.getGspSearchFunction();
            }, 500);
          } else {
            this.isLoadingGsp = false;
            this.Eway_Error.UpdateGSPError = response.data.message;
            this.ewayErrorFlag = true;
          }
        })
        .catch((err) => {
          this.loading = false;
          this.ewayErrorFlag = true;
        });
    },
    checkAvailablityFunc() {
      this.Eway_Error = {};
      if (this.TransporterName.length == 0) {
        this.Eway_Error.CheckTransporterName =
          "Please first create Transporter name from Tally or Enter Manually";
      } else {
        this.Eway_Error.TransporterName = "";
      }
    },
    getTransporterLedgersFunction() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getTransporterLedgers(data, headers).then((response) => {
        this.TransporterName = response.data.data;
        this.TransporterId = [];
        for (let [key, value] of Object.entries(response.data.data)) {
          this.TransporterId.push(...value.ledGstRegDetailsList);
        }
      });
    },
    transporterNameselected() {
      const filteredTransporter = this.TransporterName.find(
        (data) => data.ledgerName === this.TransporterNameValue
      );

      if (
        filteredTransporter &&
        Array.isArray(filteredTransporter.ledGstRegDetailsList) &&
        filteredTransporter.ledGstRegDetailsList.length > 0
      ) {
        this.TransportIdValue =
          filteredTransporter.ledGstRegDetailsList[0].transporterId || "";
      } else {
        this.TransportIdValue = "";
      }
    },
    transporterIdselected() {
      const filteredTransporter = this.TransporterName.find(
        (data) =>
          data.ledGstRegDetailsList[0].transporterId === this.TransportIdValue
      );
      if (filteredTransporter) {
        this.TransporterNameValue = filteredTransporter.ledgerName || "";
      } else {
        this.TransporterNameValue = "";
      }
    },
    updateSelectedSupply() {
      if (this.RadioValue === "Outward") {
        this.selectedSupply = "o";
      } else {
        this.selectedSupply = "I";
      }
    },
    DocumentCodeFunction(event) {
      const Selected = this.documentTypeData.find(
        (data) => data.description === this.DocumentTypeValue
      );
      this.selectedDocCode = Selected ? Selected.code : "";
    },
    GetCompanyDetailsFunction() {
      var data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.get_filter_by_companyGo(data, headers).then((response) => {
        if (response.data.message == "AUTHENTICATION_FAILED") {
          localStorage.clear();
          window.location.href = "/";
        } else {
          this.BillFromStateName = response.data.data.companyDetails.stateName;
          this.BillFromName = response.data.data.companyName;
        }
      });
    },
    // GetCityByPincode() {
    //   var data = {
    //     _userId: localStorage.getItem("customerId"),
    //     requestFrom: "WEB",
    //     company_id: localStorage.getItem("companyId"),
    //     pincode: this.DispatchPincode
    //   };
    //   const headers = {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //     token: localStorage.getItem("webAuthToken"),
    //   };
    //   Api.getCityByPincode(data, headers).then((response) => {

    //     if (response.data.message == "AUTHENTICATION_FAILED") {
    //       localStorage.clear();
    //       window.location.href = "/";
    //     } else {
    //       this.DispatchPlace = response.data.data.city;
    //     }
    //   });
    // },
    generateEway() {
      this.Eway_Error = {};
      // if (this.TransporterNameValue === "" && !this.isButtonChecked) {
      //   this.Eway_Error.transporterName = "Please select a transporter name.";
      // }
      // if (this.TransportIdValue == "") {
      //   this.Eway_Error.transporterId = "Please select a transporter ID.";
      // }
      if(this.TransporterNameValue == "" && this.TransportIdValue=="" && this.TransportModeValue=="" && this.VehicleTypeValue==""){
        this.Eway_Error.BothFieldRequired = "Please add Transporter Details or Part B Details";
      }
      if (this.SubSupplyTypeValue == "") {
        this.Eway_Error.subSupplyTypeData = "Please select Sub Supply Type";
      }
      if (this.DocumentTypeValue == "") {
        this.Eway_Error.documentTypeData = "Please select Document Type";
      }
      // if (this.TransportModeValue == "") {
      //   this.Eway_Error.TransportMode = "Please select Mode";
      // }
      // if (this.TransportModeValue != "Road" && this.voucherNumber == "") {
      //   this.Eway_Error.voucherNumber = "Please select Document No.";
      // }
    if (this.TransportModeValue == "Road" && this.vehicleNumberValue == "") {
      this.Eway_Error.vehicleNumberValue = "Vehicle No. is required";
    }
    if ((this.TransportModeValue == "Rail" || this.TransportModeValue == "Air" || this.TransportModeValue == "ShipRadio") && this.TransportDocNumber == "") {
        this.Eway_Error.TransportDocno = "Transport Doc. No. is required";
      }
      if (Object.keys(this.Eway_Error).length === 0) {
        this.isLoadingeWay = true;
        const data = {
          isExisting: true,
          isStaging: this.ServerStatus == "Dev" ? true : false,
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          gstIn: localStorage.getItem("companyGstNumber"),
          voucherId: this.$route.params.v_id,
          irn: this.irnData,
          username: this.userName,
          password: this.Password,
          supplyType: this.selectedSupply, //o - eway ---B2B --- einvoice
          subSupplyType: this.selectedCode,
          subSupplyDesc:
            this.selectedCode == "8" ? this.SubSupplyTypeValue : "",
          docType: this.selectedDocCode, //document type ka code ayega
          transactionType: 1,
          transporterId: this.TransportIdValue, //part A
          transporterName: this.TransporterNameValue
            ? this.TransporterNameValue
            : this.TransporterNameValueText,
          transMode: this.selectedTranModeCOde,
          transDocNo: this.TransportDocNumber,
          transDocDate: moment(String(this.transDocDate)).format("DD/MM/YYYY"),
          vehicleNo: this.vehicleNumberValue,
          vehicleType: this.selectedVehicleTypeCOde,
          isIgst: this.igstCheckforEwayEinvoice,
          items: this.EwayEinvoiceItemsarray,
          requestFrom: "WEB",
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.generateEway(data, headers)
          .then((response) => {
            if (response.data.message == "eway bill generated") {
              this.isLoadingeWay = false;
              this.ewaygeneratePdf();
              this.$bvModal.hide("eWayBillDetailsModal");
            } else {
              this.isLoadingeWay = false;
              this.ewayerrorMessage = response.data.data[0].ErrorMessage;
              this.showPopup = true;
            }
          })
          .catch((err) => {
            this.showPopup = true;
            this.ewayerrorMessage = err.message;
          });
      }
    },
    generateEinvoice() {
      this.stockItemsError = ''
      this.stockItemEntries.forEach((value, key)=>{
        if(value.hsnCode.length < 6 && this.companyTurnOver >= 50000000 ){
          this.stockItemsError = 'HSN Code Should not be less than 6 digits, please update.'          
        }
      })
      if (this.stockItemsError === '') {
        const VoucherNumberRegex = /^([a-zA-Z1-9]{1}[a-zA-Z0-9/-]{0,15})$/
       if(!VoucherNumberRegex.test(this.voucherNumber)){
         this.showEinvoicePopup = true
         this.einvoiceErrorMessage = 'Incorrect voucher number format, please update'
       }
       else{
      // this.button_einvoice_disabled = 1
      this.getGspSearchFunction();
      setTimeout(() => {
        if (this.userName == "" && this.Password == "") {
          this.$bvModal.show("EWayLoginModal");
        } else {
          this.$bvModal.hide("EWayLoginModal");
          if (this.EwayandEinvoice) {
            this.Eway_Error = {};
            if (this.SubSupplyTypeValue == "") {
              this.Eway_Error.subSupplyTypeData = "Please select Sub Supply Type";
            }
            if (this.DocumentTypeValue == "") {
              this.Eway_Error.documentTypeData = "Please select Document Type";
            }
            if (this.TransporterNameValue == "" && this.TransportIdValue == "" && this.    TransportModeValue == "" && this.VehicleTypeValue == "") {
              this.Eway_Error.BothFieldRequired = "Please add Transporter Details or Part B Details";
            }
            // if (this.TransportModeValue == "") {
            //   this.Eway_Error.TransportMode = "Please select Mode";
            // }
            if (this.TransportModeValue == "Road" && this.vehicleNumberValue == "") {
              this.Eway_Error.vehicleNumberValue = "Vehicle No. is required";
            }
            if ((this.TransportModeValue == "Rail" || this.TransportModeValue == "Air" || this.TransportModeValue == "ShipRadio") && this.TransportDocNumber == "") {
               this.Eway_Error.TransportDocno = "Transport Doc. No. is required";
             }
            console.log(this.Eway_Error,"Eway error")
            if (Object.keys(this.Eway_Error).length === 0){
              var data = {
               isExisting: true,
               isStaging: this.ServerStatus == "Dev" ? true : false,
               _userId: localStorage.getItem("customerId"),
               company_id: localStorage.getItem("companyId"),
               gstIn: localStorage.getItem("companyGstNumber"),
               voucherId: this.$route.params.v_id,
               irn: this.irnData,
               username: this.userName,
               password: this.Password,
               supplyType: 'B2B', //o - eway ---B2B --- einvoice
               subSupplyType: this.selectedCode,
               subSupplyDesc:
                 this.selectedCode == "8" ? this.SubSupplyTypeValue : "",
               docType: "INV",
               transactionType: 1,
               transporterId: this.TransportIdValue,
               transporterName: this.TransporterNameValue
                 ? this.TransporterNameValue
                 : this.TransporterNameValueText,
               transMode: this.selectedTranModeCOde,
               transDocNo: this.TransportDocNumber,
               transDocDate: moment(String(this.transDocDate)).format("DD/MM/YYYY"),
               vehicleNo: this.vehicleNumberValue,
               vehicleType: this.selectedVehicleTypeCOde,
               isIgst: this.igstCheckforEwayEinvoice,
               items: this.EwayEinvoiceItemsarray,
               requestFrom: "WEB",
              };
              setTimeout(() => {
                const headers = {
               "Access-Control-Allow-Origin": "*",
               "Content-Type": "application/json",
               token: localStorage.getItem("webAuthToken"),
              };
              Api.generateEinvoice(data, headers)
               .then((response) => {
                 this.button_einvoice_disabled = 0
                 if (response.data.message == "eInvoice generated") {
                   this.isLoadingeInvoice = false;
                   // this.myVouchersPdfFOrEway();
                   window.location.reload();
                 } else {
                   this.isLoadingeInvoice = false;
                   this.einvoiceErrorMessage = response.data.data[0].ErrorMessage;
                   this.showEinvoicePopup = true;
                 }
               })
               .catch((err) => {
                 this.button_einvoice_disabled = 0
                 this.showEinvoicePopup = true;
                 this.einvoiceErrorMessage = err.message;
               });
              }, 1000);
              
            }
          }
          else {
            this.isLoadingeInvoice = true;
            var data = {
              isExisting: true,
              isStaging: this.ServerStatus == "Dev" ? true : false,
              _userId: localStorage.getItem("customerId"),
              company_id: localStorage.getItem("companyId"),
              gstIn: localStorage.getItem("companyGstNumber"),
              voucherId: this.$route.params.v_id,
              irn: this.irnData,
              username: this.userName,
              password: this.Password,
              supplyType: "B2B", //o - eway ---B2B --- einvoice
              subSupplyType: "",
              subSupplyDesc: "",
              docType: "INV", //document type ka code ayega
              transporterId: "", //part A
              transporterName: "",
              transactionType: 1,
              transMode: "",
              transDocNo: "",
              transDocDate: "",
              vehicleNo: "",
              vehicleType: "",
              isIgst: this.igstCheckforEwayEinvoice,
              items: this.EwayEinvoiceItemsarray,
              requestFrom: "WEB",
            };
            setTimeout(() => {
              const headers = {
               "Access-Control-Allow-Origin": "*",
               "Content-Type": "application/json",
               token: localStorage.getItem("webAuthToken"),
              };
              Api.generateEinvoice(data, headers)
               .then((response) => {
                 this.button_einvoice_disabled = 0
                 if (response.data.message == "eInvoice generated") {
                   this.isLoadingeInvoice = false;
                   // this.myVouchersPdfFOrEway();
                   window.location.reload();
                 } else {
                   this.isLoadingeInvoice = false;
                   this.einvoiceErrorMessage = response.data.data[0].ErrorMessage;
                   this.showEinvoicePopup = true;
                 }
               })
               .catch((err) => {
                 this.button_einvoice_disabled = 0
                 this.showEinvoicePopup = true;
                 this.einvoiceErrorMessage = err.message;
               });
            }, 1000);
           
          }
        }
      }, 200);
     }
    }
  },
    updateFlag() {
      this.TransporterNameValueText = "";
      this.TransporterNameValue = "";
      this.TransportIdValue = "";
      this.isButtonChecked = !this.isButtonChecked;
      this.Eway_Error.CheckTransporterName = "";
    },
    initializeCounter() {
      const savedData = JSON.parse(localStorage.getItem("dailyLimit")) || {};
      const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

      if (savedData.date !== today) {
        // Reset count if date is different
        localStorage.setItem("dailyLimit", JSON.stringify({ date: today, count: 50 }));
        this.count = 0;
      } else {
        this.count = savedData.count;
      }
    },
    getVoucherDetailsGoForV2(){
      const data = {
    requestFrom: "WEB",
    company_id: localStorage.getItem("companyId"),
    _userId: localStorage.getItem("customerId"),
    voucherId: "", //optional
    voucherType: this.$route.params.billVchType,
    guid: "", //optional
    voucherDate :  this.$route.params.billVchDate,
    voucherNumber: this.$route.params.billVchNumber != 'no-number' ? this.$route.params.billVchNumber : '' ,
    ledgerAmount: this.$route.params.billVchAmount,
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      }
      Api.getVoucherDetailsGoForV2(data, headers)
      .then((response)=>{
       if(response.data.status == "200"){
        this.partyName = response.data.data.partyLedgerName;
            this.voucherNumber = response.data.data.voucherNumber;
            this.voucherDate = response.data.data.voucherDate;
            this.voucherType = response.data.data.voucherType;
            this.narration = response.data.data.narration;
            this.partyGstin = response.data.data.partygstIn
            this.symbol = localStorage.getItem("symbol");
            this.netAmount = response.data.data.stockItemTotalAmount;
            this.partyLedgerGuid = response.data.data.partyLedgerGuid;
            this.getLedger();

            this.consignee_address =
              response.data.data.basicConsigneeDetails.shipToAddress;
            this.BuyerGstin = response.data.data.basicBuyerDetails.billToGSTIN;
            this.consigneePostalCode = response.data.data.basicConsigneePincode;
            this.consigneestateSearchQuery =
              response.data.data.basicConsigneeDetails.shipToState;
            this.buyersnameSearchQuery =
              response.data.data.basicBuyerDetails.billTo;
            this.buyerstateSearchQuery =
              response.data.data.basicBuyerDetails.billToState;
            this.irnData = response.data.data.irn;
            this.parentType = response.data.data.parentType;
            this.igstCheckforEwayEinvoice = response.data.data.igstApplicable;
            localStorage.setItem("parentType", response.data.data.parentType);

            this.guid = response.data.data.guid;
            if (
              this.parentType === "Sales" ||
              this.parentType === "Purchase" ||
              this.parentType === "Credit Note" ||
              this.parentType === "Debit Note" ||
              this.parentType === "Sales Order" ||
              this.parentType === "Purchase Order" ||
              this.parentType === "Delivery Note"
            ) {
              this.all_voucher = 1;
              this.payment_voucher = 0;
              this.contra_voucher = 0;
              this.total_qty = response.data.data.itemTotalQuantity;
              for (let [key, value] of Object.entries(
                response.data.data.stockItemEntries
              )) {
                if (response.data.data.stockItemEntries[key].discount != "") {
                  response.data.data.stockItemEntries[key].discount =
                    value.discount;
                } else {
                  response.data.data.stockItemEntries[key].discount = "0";
                }
                let newItem = {
                  hsnCode: value.hsnCode,
                  guid: value.stockItemGuid,
                  taxRate: 0,
                };

                let maxGstRate = 0;

                for (let [rateKey, value1] of Object.entries(
                  value.rateDetails
                )) {
                  if (value1 && value1.gstRate !== undefined) {
                    const gstRate = parseFloat(value1.gstRate) || 0;
                    maxGstRate = Math.max(maxGstRate, gstRate);
                  }
                  newItem.taxRate = maxGstRate;
                }
                this.EwayEinvoiceItemsarray.push(newItem);
              }
              this.stockItemEntries = response.data.data.stockItemEntries;
              this.responseComing = response.data.data;

              const LedgerEntries_Array = response.data.data.ledgerEntries;

              LedgerEntries_Array.map((element) => {
                if (element.isPartyLedger == false) {
                  this.summary.push(element);
                }
                if (element.ledgerGuid == this.partyLedgerGuid) {
                  this.grossTotal = parseFloat(Math.abs(element.amount));
                }
              });

              if (
                response.data.data.isEwayStatus != "0" &&
                response.data.data.eWayBillDetails != ""
              ) {
                this.eway_no =
                  "#" + response.data.data.eWayBillDetails[0].billNumber;
                this.isEwayStatus = true;
              }

              if (
                response.data.data.isEInvoiceStatus != "0" &&
                response.data.data.irnAckNo != ""
              ) {
                this.einvoice = "#" + response.data.data.irnAckNo;
                this.isEInvoiceStatus = true;
              }
              this.eWayBillDetails = response.data.data.eWayBillDetails;

              console.log("this.summary", this.summary);

              for (let [key, value] of Object.entries(this.summary)) {
                this.gstAmount += parseFloat(Math.abs(value.value));
              }
            } 
            else if (
              this.parentType === "Payment" ||
              this.parentType === "Receipt"
            ) {
              this.all_voucher = 0;
              this.payment_voucher = 1;
              this.contra_voucher = 0;
              this.stockItemEntries = [];
              this.summary = [];
              this.i = 0;
              this.grossTotal = response.data.data.grossTotal;
              for (let [key, value] of Object.entries(
                response.data.data.ledgerEntries
              )) {
                if (value.amount > 0) {
                  this.stockItemEntries.push(value);
                }
                if (value.amount <= 0) {
                  this.summary.push(value);
                }
              }
            } else if (
              this.parentType === "Journal" ||
              this.parentType === "Contra"
            ) {
              this.all_voucher = 0;
              this.payment_voucher = 0;
              this.contra_voucher = 1;

              for (let [key, value] of Object.entries(
                response.data.data.ledgerEntries
              )) {
                if (value.amount >= 0) {
                  // + value
                  response.data.data.ledgerEntries[key].symbol_amount = " Cr.";
                } else {
                  // - value
                  response.data.data.ledgerEntries[key].symbol_amount = " Dr.";
                }
              }
              this.stockItemEntries = response.data.data.ledgerEntries;
            }
            this.new_loading = false;
          }
          // }
        })
        .catch((err) => {
          console.log("response.status error", err.response.status);
          Common.getStatusForActionFailed(err.response.status);

          this.loading = false;
          this.new_loading = false;
        });
    }
  },
  mounted() {
    // this.initializeCounter();
    // this.checkLinkedStatus();
    if(this.$route.params.billVchAmount !== undefined){

      this.getVoucherDetailsGoForV2()
    }
    else{

      this.get_vochar_details();
    }
    this.isPaid = localStorage.getItem("isPaid");
    this.isOneChild = this.$route.params.isOneChild;
    this.symbol = localStorage.getItem("symbol");
    GoogleAnalytics.parties_details_listing();
    this.InvoiceConfigurations();
    this.updateSelectedSupply();
    this.GetCompanyDetailsFunction();
    this.getUserPermission();
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {
  document.removeEventListener('click', this.handleOutsideClick);
},
};
</script>

<style scoped>
@media screen {
  #printContent {
    display: none;
  }
}

.OverlapPopupOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  /* Semi-transparent overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.OverlayPopupContent {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
}

.OverlayPopupContent button {
  color: #fff;
  background: #1a1a1a;
  padding: 8px 20px;
  border-radius: 10px;
}
.RelativePartforSalesOrderportion {
    position: relative;
}

ul.SalesOrderUlProperDropdownOpenPortion {
    position: absolute;
    z-index: 1;
    background: #fff;
    border: 1px solid #ddd;
    right: 17px;
    border-radius: 5px;
    max-height: 150px;
    height: auto;
    overflow-y: auto;
}

ul.SalesOrderUlProperDropdownOpenPortion li {
    padding: 5px 10px;
    font-size: 12px;
    border-bottom: 1px solid #ddd;
    text-align: left;
}
ul.SalesOrderUlProperDropdownOpenPortion li:hover {
    background: #eee;
}
</style>
