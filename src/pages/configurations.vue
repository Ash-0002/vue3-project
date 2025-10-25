/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section>

    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-12 col-lg-12 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0">
            <h3 id="" class="partyName">Configurations</h3>
          </div>
        </div>
      </div>
      <div class="SuccessLogoutConfigurationMan" v-if="success_logout">
        <div class="LogoutSuccessfullyCaptionPart">
          <div class="IconTextSuccessLogoutConfiguration">
            <i class="fa fa-check-circle"></i>
            <p>Successfully Logout</p>
          </div>
          <div class="SuccessLogoutConfigurationCrossIconSet" @click="CloseLogoutSuccesBox()">
            <img src="/assets/images/1.0/png/crossicon.png" />
          </div>
        </div>
      </div>
    </div>

    <div class="main_card">
      <div class="configuration_card card">
        <ul class="configurations-tab-ul d-flex justify-content-around">
          <li class="">
            <a class="link" v-on:click="toggleTabs(1)"
              v-bind:class="{ inactive: openTab !== 1, active: openTab === 1 }">
              Invoice
            </a>
          </li>
          <li class="">
            <a class="link" v-on:click="toggleTabs(2)"
              v-bind:class="{ inactive: openTab !== 2, active: openTab === 2 }">
              Outstanding
            </a>

          </li>
          <li class="">
            <a class="link" v-on:click="toggleTabs(3)"
              v-bind:class="{ inactive: openTab !== 3, active: openTab === 3 }">
              Ledger Report
            </a>
          </li>
         <!-- <li class="">
            <a class="link" v-on:click="toggleTabs(5)"
              v-bind:class="{ inactive: openTab !== 5, active: openTab === 5 }">
              WhatsApp Settings
            </a>
          </li> -->


        </ul>

        <div class="configurations-tabing-inner-content">
          <div class="tab-content tab-space">
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <div class="configurations_tabing_inner">
                <ul class="d-flex justify-content-between">
                  <li>
                    <a class="inner_link" v-on:click="invoicetoggleTabs(1)" v-bind:class="{
                      inactive: invoiceopentab !== 1,
                      active: invoiceopentab === 1,
                    }">Details</a>
                  </li>
                  <li>
                    <a class="inner_link" v-on:click="invoicetoggleTabs(2)" v-bind:class="{
                      inactive: invoiceopentab !== 2,
                      active: invoiceopentab === 2,
                    }">Voucher Number</a>
                  </li>
                  <li>
                    <a class="inner_link" v-on:click="invoicetoggleTabs(3)" v-bind:class="{
                      inactive: invoiceopentab !== 3,
                      active: invoiceopentab === 3,
                    }">
                      Invoice Template</a>
                  </li>
                  <li>
                    <a class="inner_link" v-on:click="invoicetoggleTabs(4)" v-bind:class="{
                      inactive: invoiceopentab !== 4,
                      active: invoiceopentab === 4,
                    }">
                      Invoice Declaration</a>
                  </li>
                  <li>
                    <a class="inner_link" v-on:click="invoicetoggleTabs(5)" v-bind:class="{
                      inactive: invoiceopentab !== 5,
                      active: invoiceopentab === 5,
                    }">
                      Invoice Header</a>
                  </li>
                  <li>
                    <a class="inner_link" v-on:click="invoicetoggleTabs(6)" v-bind:class="{
                      inactive: invoiceopentab !== 6,
                      active: invoiceopentab === 6,
                    }">Logo</a>
                  </li>
                </ul>
                <div class="configurations_tabing_inner_content">
                  <div v-bind:class="{
                    hidden: invoiceopentab !== 1,
                    block: invoiceopentab === 1,
                  }">
                    <div class="detail_inner_content">
                      <!-- <h3>Include Below Details</h3> -->
                      <div class="container-fluid p-0">
                        <div class="row">
                          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="configuration_checkbox mb-3">
                              <b-form-checkbox id="consignee-detail" name="consignee-detail"
                                :checked="invoiceDetails.ConsigneeDetails" v-model="invoiceDetails.ConsigneeDetails">
                                Consignee Address</b-form-checkbox>
                            </div>
                          </div>
                          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="configuration_checkbox mb-3">
                              <b-form-checkbox id="Godown-Name" name="Godown-Name" :checked="invoiceDetails.GodownName"
                                v-model="invoiceDetails.GodownName">
                                Godown Name</b-form-checkbox>
                            </div>
                          </div>
                          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="configuration_checkbox mb-3">
                              <b-form-checkbox id="Narration" name="Narration" :checked="invoiceDetails.Narration"
                                v-model="invoiceDetails.Narration">
                                Narration</b-form-checkbox>
                            </div>
                          </div>
                          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="configuration_checkbox mb-3">
                              <b-form-checkbox id="Show-Stock-Expire" name="Show-Stock-Expire"
                                :checked="invoiceDetails.ShowStockExpire" v-model="invoiceDetails.ShowStockExpire">
                                Show Stock Expiry</b-form-checkbox>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="configuration_checkbox mb-3">
                              <b-form-checkbox id="discount" name="discount" :checked="invoiceDetails.ShowStockDiscount"
                                v-model="invoiceDetails.ShowStockDiscount">
                                Show Stock Discount
                              </b-form-checkbox>
                            </div>
                          </div>
                          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="configuration_checkbox mb-3">
                              <b-form-checkbox id="Item-Description" name="Item-Description"
                                :checked="invoiceDetails.ItemDescription" v-model="invoiceDetails.ItemDescription">
                                Item Description</b-form-checkbox>
                            </div>
                          </div>
                          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="configuration_checkbox mb-3">
                              <b-form-checkbox id="Batches" name="Batches" :checked="invoiceDetails.Batches"
                                v-model="invoiceDetails.Batches">
                                Batches</b-form-checkbox>
                            </div>
                          </div>
                          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="configuration_checkbox mb-3">
                              <b-form-checkbox id="GST" name="GST" :checked="invoiceDetails.InvoiceShareGST"
                                v-model="invoiceDetails.InvoiceShareGST">
                                Invoice Share GST %</b-form-checkbox>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="configuration_checkbox mb-3">
                              <b-form-checkbox id="Description" name="Description"
                                :checked="invoiceDetails.LedgerDescription" v-model="invoiceDetails.LedgerDescription">
                                Ledger Description</b-form-checkbox>
                            </div>
                          </div>
                          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="configuration_checkbox mb-3">
                              <b-form-checkbox id="e-Way-Bill" name="e-Way Bill" :checked="invoiceDetails.eWayBill"
                                v-model="invoiceDetails.eWayBill">
                                e-Way Bill</b-form-checkbox>
                            </div>
                          </div>

                          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="d-flex align-items-center d-flex-bankac">
                              <div class="configuration_checkbox mb-3">
                                <b-form-checkbox id="Bank Account" name="Bank Account"
                                  :checked="invoiceDetails.BankAccount" v-model="invoiceDetails.BankAccount">
                                  Bank Account</b-form-checkbox>
                              </div>
                              <!-- <select name="" id="" :disabled="!invoiceDetails.BankAccount"
                                class="configuration_select invoice_detail_bank" v-model="invoiceDetails.bankselected">
                                <option disabled value="">
                                  Please Select Bank
                                </option>
                                <option v-for="bankdata in bankarray" :value="bankdata.guid" :key="bankdata.ledgerId">
                                  {{ bankdata.ledgerName }}
                                </option>
                              </select> -->
                              <div
                                class="custom-dropdown NewBankAccountSearchableDropdown"
                                v-if="invoiceDetails.BankAccount"
                                style="position: relative;"
                              >
                                <input
                                  type="text"
                                  class="configuration_select invoice_detail_bank"
                                  placeholder="Search and Select Bank"
                                  v-model="bankSearch"
                                  @input="searchBanks"
                                  @focus="showBankOptions = true"
                                  @blur="hideBankOptions"
                                  autocomplete="off"
                                />
                                <!-- Search icon - shown when input is empty -->
                                <i v-if="!bankSearch" class="fa fa-search input-search-icon-RechangesConfiguration"></i>
                                <!-- Clear icon - shown only when there's input -->
                                <button 
                                  v-if="bankSearch" 
                                  @click="clearBankInput" 
                                  class="inputcrossiconRechangesConfiguration"
                                  @mousedown.prevent
                                >
                                  <i class="fa fa-times"></i>
                                </button>
                                <ul
                                  v-if="showBankOptions && bankarray.length"
                                  class="dropdown-menu show"
                                  style="position: absolute; top: 100%; left: 0; right: 0; max-height: 200px; overflow-y: auto; z-index: 1000;"
                                >
                                  <li
                                    v-for="bank in bankarray"
                                    :key="bank.guid"
                                    class="dropdown-item"
                                    @mousedown.prevent="selectBank(bank)"
                                  >
                                    {{ bank.ledgerName }}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div class="col-12 mt-3">
                            <h3>Eway Bill / E-Invoice</h3>
                            <div class="EWaybillEInvoicesDiv">
                              <!-- <span class="WebEawayBilltext">Only Voucher Type with manually or Automatic (Manual)
                                method can be
                                user for E-way Bills and E-Invoices.
                              </span> -->
                              <label class="switch">
                                <input type="checkbox" v-model="combinedEwayAndInvoiceStatus" />
                                <span class="slider round"></span>
                              </label>
                            </div>
                          </div>
                          <div class="col-12 mt-3">
                            <h3>Eway Bill / E-Invoice Format</h3>
                            <div class="ewaybillinvoiceformat">
                              <div class="invoice_radio_button">
                                <input type="radio" class="invoice_radio" id="regularRadio" name="radioGroup"
                                  value="Regular" v-model="selectedOptionradio" autocomplete="off" />
                                <label for="regularRadio" class="fontssetlabel">Regular</label>
                              </div>
                              <div class="invoice_radio_button">
                                <input type="radio" class="invoice_radio" id="manualRadio" name="radioGroup"
                                  value="Detailed" v-model="selectedOptionradio" autocomplete="off" />
                                <label for="manualRadio" class="fontssetlabel">Detailed</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--optional voucher-->
                        <div class="col-12 mt-3">
                          <h3>Optional voucher</h3>
                          <div class="EWaybillEInvoicesDiv">

                            <label class="switch" style="position: relative;">
                              <input type="checkbox" @change="updatePermision" v-model="isOptionalVoucherEnabled" />
                              <span class="slider round"></span>

                            </label>
                            <span style="width:100%;color: gray;position:absolute;margin-top:46px;"
                              v-if="isOptionalVoucherEnabled">Configuration is enabled for all
                              vouchers.</span>

                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-12 col-12">
                            <div class="form_bottom_button mt-4 mb-4 text-center">
                              <button class="form_button black_button" @click="UpdateInvoiceConfigurations">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>

                        <div class="success_message" v-if="this.templateSuccess">
                          <p>Data Saved Successfully!</p>
                        </div>

                      </div>
                    </div>

                  </div>
                  <div v-bind:class="{
                    hidden: invoiceopentab !== 2,
                    block: invoiceopentab === 2,
                  }">
                    <div class="voucher_inner_content">
                      <div class="table-responsive">
                        <table class="table" width="100%">
                          <thead>
                            <tr>
                              <th></th>
                              <th>Prefix</th>
                              <th>Number</th>
                              <th>Suffix</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div class="configuration_checkbox mb-3">
                                  <b-form-checkbox id="sales" v-model="voucherNumber.isSales" name="sales">Sales
                                  </b-form-checkbox>
                                </div>
                              </td>
                              <td>
                                <input type="text" placeholder="Prefix" class="configur_voucher_input" id="sales"
                                  :disabled="voucherNumber.isSales" autocomplete="off"
                                  v-model="voucherNumber.isSalesPrefix" @input="handleInput('isSalesPrefix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.salePreffix">{{
                                  voucherNumberError.salePreffix }}</span>
                              </td>
                              <td>
                                <input type="number" placeholder="123" v-on:wheel="disableMouseWheelScroll"
                                  @keydown="preventDecrementBelowZero" @input="limitInputLength"
                                  @keypress="allowOnlyNumbers" class="configur_voucher_input" id="sales"
                                  :disabled="voucherNumber.isSales" autocomplete="off"
                                  v-model="voucherNumber.isSalesNumber" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.isSalesNumber">{{
                                  voucherNumberError.isSalesNumber }}</span>
                              </td>
                              <td>
                                <input type="text" placeholder="Suffix" class="configur_voucher_input" id="sales"
                                  :disabled="voucherNumber.isSales" autocomplete="off"
                                  v-model="voucherNumber.isSalesSuffix" @input="handleInput('isSalesSuffix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.saleSuffix">{{
                                  voucherNumberError.saleSuffix }}</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="configuration_checkbox mb-3">
                                  <b-form-checkbox id="sales-order" v-model="voucherNumber.isSalesOrder"
                                    name="sales-order">Sales Order
                                  </b-form-checkbox>
                                </div>
                              </td>
                              <td>
                                <input type="text" placeholder="Prefix" class="configur_voucher_input" id="sales-order"
                                  :disabled="voucherNumber.isSalesOrder" autocomplete="off"
                                  v-model="voucherNumber.isSalesOrderPrefix"
                                  @input="handleInput('isSalesOrderPrefix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.saleOrderPreffix">{{
                                  voucherNumberError.saleOrderPreffix }}</span>
                              </td>
                              <td>
                                <input type="number" placeholder="123" @input="limitInputLength"
                                  v-on:wheel="disableMouseWheelScroll" @keypress="allowOnlyNumbers"
                                  @keydown="preventDecrementBelowZero" class="configur_voucher_input" id="sales-order"
                                  :disabled="voucherNumber.isSalesOrder" autocomplete="off"
                                  v-model="voucherNumber.isSalesOrderNumber" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.isSalesOrderNumber">{{
                                  voucherNumberError.isSalesOrderNumber }}</span>
                              </td>
                              <td>
                                <input type="text" placeholder="Suffix" class="configur_voucher_input" id="sales-order"
                                  :disabled="voucherNumber.isSalesOrder" autocomplete="off"
                                  v-model="voucherNumber.isSalesOrderSuffix"
                                  @input="handleInput('isSalesOrderSuffix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.saleOrderSuffix">{{
                                  voucherNumberError.saleOrderSuffix }}</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="configuration_checkbox mb-3">
                                  <b-form-checkbox id="purchase" v-model="voucherNumber.isPurchase"
                                    name="purchase">Purchase
                                  </b-form-checkbox>
                                </div>
                              </td>
                              <td>
                                <input type="text" placeholder="Prefix" class="configur_voucher_input" id="purchase"
                                  :disabled="voucherNumber.isPurchase" autocomplete="off"
                                  v-model="voucherNumber.isPurchasePrefix" @input="handleInput('isPurchasePrefix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.purchasePreffix">{{
                                  voucherNumberError.purchasePreffix }}</span>

                              </td>
                              <td>
                                <input type="number" placeholder="123" @input="limitInputLength"
                                  v-on:wheel="disableMouseWheelScroll" @keypress="allowOnlyNumbers"
                                  @keydown="preventDecrementBelowZero" class="configur_voucher_input" id="purchase"
                                  :disabled="voucherNumber.isPurchase" autocomplete="off"
                                  v-model="voucherNumber.isPurchaseNumber" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.isPurchaseNumber">{{
                                  voucherNumberError.isPurchaseNumber }}</span>

                              </td>
                              <td>
                                <input type="text" placeholder="Suffix" class="configur_voucher_input" id="purchase"
                                  :disabled="voucherNumber.isPurchase" autocomplete="off"
                                  v-model="voucherNumber.isPurchaseSuffix" @input="handleInput('isPurchaseSuffix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.purchaseSuffix">{{
                                  voucherNumberError.purchaseSuffix }}</span>

                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="configuration_checkbox mb-3">
                                  <b-form-checkbox id="purchase-order" v-model="voucherNumber.isPurchaseOrder"
                                    name="purchase-order">Purchase Order
                                  </b-form-checkbox>
                                </div>
                              </td>
                              <td>
                                <input type="text" placeholder="Prefix" class="configur_voucher_input"
                                  id="purchase-order" :disabled="voucherNumber.isPurchaseOrder" autocomplete="off"
                                  v-model="voucherNumber.isPurchaseOrderPrefix"
                                  @input="handleInput('isPurchaseOrderPrefix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.purchaseOrderPreffix">{{
                                  voucherNumberError.purchaseOrderPreffix }}</span>

                              </td>
                              <td>
                                <input type="number" placeholder="123" @input="limitInputLength"
                                  v-on:wheel="disableMouseWheelScroll" @keypress="allowOnlyNumbers"
                                  @keydown="preventDecrementBelowZero" class="configur_voucher_input"
                                  id="purchase-order" :disabled="voucherNumber.isPurchaseOrder" autocomplete="off"
                                  v-model="voucherNumber.isPurchaseOrderNumber" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.isPurchaseOrderNumber">{{
                                  voucherNumberError.isPurchaseOrderNumber }}</span>

                              </td>
                              <td>
                                <input type="text" placeholder="Suffix" class="configur_voucher_input"
                                  id="purchase-order" :disabled="voucherNumber.isPurchaseOrder" autocomplete="off"
                                  v-model="voucherNumber.isPurchaseOrderSuffix"
                                  @input="handleInput('isPurchaseOrderSuffix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.purchaseOrderSuffix">{{
                                  voucherNumberError.purchaseOrderSuffix }}</span>

                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="configuration_checkbox mb-3">
                                  <b-form-checkbox id="receipt" v-model="voucherNumber.isReceipt" name="receipt">Receipt
                                  </b-form-checkbox>
                                </div>
                              </td>
                              <td>
                                <input type="text" placeholder="Prefix" class="configur_voucher_input" id="receipt"
                                  :disabled="voucherNumber.isReceipt" autocomplete="off"
                                  v-model="voucherNumber.isReceiptPrefix" @input="handleInput('isReceiptPrefix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.receiptPreffix">{{
                                  voucherNumberError.receiptPreffix }}</span>

                              </td>
                              <td>
                                <input type="number" placeholder="123" @input="limitInputLength"
                                  v-on:wheel="disableMouseWheelScroll" @keypress="allowOnlyNumbers"
                                  @keydown="preventDecrementBelowZero" class="configur_voucher_input" id="receipt"
                                  :disabled="voucherNumber.isReceipt" autocomplete="off"
                                  v-model="voucherNumber.isReceiptNumber" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.isReceiptNumber">{{
                                  voucherNumberError.isReceiptNumber }}</span>

                              </td>
                              <td>
                                <input type="text" placeholder="Suffix" class="configur_voucher_input" id="receipt"
                                  :disabled="voucherNumber.isReceipt" autocomplete="off"
                                  v-model="voucherNumber.isReceiptSuffix" @input="handleInput('isReceiptSuffix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.receiptSuffix">{{
                                  voucherNumberError.receiptSuffix }}</span>

                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="configuration_checkbox mb-3">
                                  <b-form-checkbox id="peyment" v-model="voucherNumber.isPeyment" name="peyment">Payment
                                  </b-form-checkbox>
                                </div>
                              </td>
                              <td>
                                <input type="text" placeholder="Prefix" class="configur_voucher_input" id="peyment"
                                  :disabled="voucherNumber.isPeyment" autocomplete="off"
                                  v-model="voucherNumber.isPeymentPrefix" @input="handleInput('isPeymentPrefix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.paymentPreffix">{{
                                  voucherNumberError.paymentPreffix }}</span>

                              </td>
                              <td>
                                <input type="number" placeholder="123" @input="limitInputLength"
                                  v-on:wheel="disableMouseWheelScroll" @keypress="allowOnlyNumbers"
                                  @keydown="preventDecrementBelowZero" class="configur_voucher_input" id="peyment"
                                  :disabled="voucherNumber.isPeyment" autocomplete="off"
                                  v-model="voucherNumber.isPeymentNumber" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.isPeymentNumber">{{
                                  voucherNumberError.isPeymentNumber }}</span>

                              </td>
                              <td>
                                <input type="text" placeholder="Suffix" class="configur_voucher_input" id="peyment"
                                  :disabled="voucherNumber.isPeyment" autocomplete="off"
                                  v-model="voucherNumber.isPeymentSuffix" @input="handleInput('isPeymentSuffix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.paymentSuffix">{{
                                  voucherNumberError.paymentSuffix }}</span>

                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="configuration_checkbox mb-3">
                                  <b-form-checkbox id="credit-note" v-model="voucherNumber.isCreditNote"
                                    name="credit-note">Credit Note
                                  </b-form-checkbox>
                                </div>
                              </td>
                              <td>
                                <input type="text" placeholder="Prefix" class="configur_voucher_input" id="credit-note"
                                  :disabled="voucherNumber.isCreditNote" autocomplete="off"
                                  v-model="voucherNumber.isCreditNotePrefix"
                                  @input="handleInput('isCreditNotePrefix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.creditPreffix">{{
                                  voucherNumberError.creditPreffix }}</span>

                              </td>
                              <td>
                                <input type="number" placeholder="123" @input="limitInputLength"
                                  v-on:wheel="disableMouseWheelScroll" @keypress="allowOnlyNumbers"
                                  @keydown="preventDecrementBelowZero" class="configur_voucher_input" id="credit-note"
                                  :disabled="voucherNumber.isCreditNote" autocomplete="off"
                                  v-model="voucherNumber.isCreditNoteNumber" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.isCreditNoteNumber">{{
                                  voucherNumberError.isCreditNoteNumber }}</span>

                              </td>
                              <td>
                                <input type="text" placeholder="Suffix" class="configur_voucher_input" id="credit-note"
                                  :disabled="voucherNumber.isCreditNote" autocomplete="off"
                                  v-model="voucherNumber.isCreditNoteSuffix"
                                  @input="handleInput('isCreditNoteSuffix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.creditSuffix">{{
                                  voucherNumberError.creditSuffix }}</span>

                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="configuration_checkbox mb-3">
                                  <b-form-checkbox id="debit-note" v-model="voucherNumber.isDebitNote"
                                    name="debit-note">Debit Note
                                  </b-form-checkbox>
                                </div>
                              </td>
                              <td>
                                <input type="text" placeholder="Prefix" class="configur_voucher_input" id="debit-note"
                                  :disabled="voucherNumber.isDebitNote" autocomplete="off"
                                  v-model="voucherNumber.isDebitNotePrefix" @input="handleInput('isDebitNotePrefix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.debitPreffix">{{
                                  voucherNumberError.debitPreffix }}</span>

                              </td>
                              <td>
                                <input type="number" placeholder="123" @input="limitInputLength"
                                  v-on:wheel="disableMouseWheelScroll" @keypress="allowOnlyNumbers"
                                  @keydown="preventDecrementBelowZero" class="configur_voucher_input" id="debit-note"
                                  :disabled="voucherNumber.isDebitNote" autocomplete="off"
                                  v-model="voucherNumber.isDebitNoteNumber" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.isDebitNoteNumber">{{
                                  voucherNumberError.isDebitNoteNumber }}</span>

                              </td>
                              <td>
                                <input type="text" placeholder="Suffix" class="configur_voucher_input" id="debit-note"
                                  :disabled="voucherNumber.isDebitNote" autocomplete="off"
                                  v-model="voucherNumber.isDebitNoteSuffix" @input="handleInput('isDebitNoteSuffix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.debitSuffix">{{
                                  voucherNumberError.debitSuffix }}</span>

                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="configuration_checkbox mb-3">
                                  <b-form-checkbox id="journal" v-model="voucherNumber.isJournal" name="journal">Journal
                                  </b-form-checkbox>
                                </div>
                              </td>
                              <td>
                                <input type="text" placeholder="Prefix" class="configur_voucher_input" id="journal"
                                  :disabled="voucherNumber.isJournal" autocomplete="off"
                                  v-model="voucherNumber.isJournalPrefix" @input="handleInput('isJournalPrefix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.journalPreffix">{{
                                  voucherNumberError.journalPreffix }}</span>

                              </td>
                              <td>
                                <input type="number" placeholder="123" @input="limitInputLength"
                                  v-on:wheel="disableMouseWheelScroll" @keypress="allowOnlyNumbers"
                                  @keydown="preventDecrementBelowZero" class="configur_voucher_input" id="journal"
                                  :disabled="voucherNumber.isJournal" autocomplete="off"
                                  v-model="voucherNumber.isJournalNumber" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.isJournalNumber">{{
                                  voucherNumberError.isJournalNumber }}</span>

                              </td>
                              <td>
                                <input type="text" placeholder="Suffix" class="configur_voucher_input" id="journal"
                                  :disabled="voucherNumber.isJournal" autocomplete="off"
                                  v-model="voucherNumber.isJournalSuffix" @input="handleInput('isJournalSuffix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.journalSuffix">{{
                                  voucherNumberError.journalSuffix }}</span>

                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="configuration_checkbox mb-3">
                                  <b-form-checkbox id="contra" v-model="voucherNumber.isContra" name="contra">Contra
                                  </b-form-checkbox>
                                </div>
                              </td>
                              <td>
                                <input type="text" placeholder="Prefix" class="configur_voucher_input" id="contra"
                                  :disabled="voucherNumber.isContra" autocomplete="off"
                                  v-model="voucherNumber.isContraPrefix" @input="handleInput('isContraPrefix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.contraPreffix">{{
                                  voucherNumberError.contraPreffix }}</span>

                              </td>
                              <td>
                                <input type="number" placeholder="123" @input="limitInputLength"
                                  v-on:wheel="disableMouseWheelScroll" @keypress="allowOnlyNumbers"
                                  @keydown="preventDecrementBelowZero" class="configur_voucher_input" id="contra"
                                  :disabled="voucherNumber.isContra" autocomplete="off"
                                  v-model="voucherNumber.isContraNumber" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.isContraNumber">{{
                                  voucherNumberError.isContraNumber }}</span>

                              </td>
                              <td>
                                <input type="text" placeholder="Suffix" class="configur_voucher_input" id="contra"
                                  :disabled="voucherNumber.isContra" autocomplete="off"
                                  v-model="voucherNumber.isContraSuffix" @input="handleInput('isContraSuffix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.contraSuffix">{{
                                  voucherNumberError.contraSuffix }}</span>

                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="configuration_checkbox mb-3">
                                  <b-form-checkbox id="quotation" v-model="voucherNumber.isQuotation"
                                    name="quotation">Quotation
                                  </b-form-checkbox>
                                </div>
                              </td>
                              <td>
                                <input type="text" placeholder="Prefix" class="configur_voucher_input" id="quotation"
                                  :disabled="voucherNumber.isQuotation" autocomplete="off"
                                  v-model="voucherNumber.isQuotationPrefix" @input="handleInput('isQuotationPrefix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.quotationPreffix">{{
                                  voucherNumberError.quotationPreffix }}</span>

                              </td>
                              <td>
                                <input type="number" placeholder="123" @input="limitInputLength"
                                  v-on:wheel="disableMouseWheelScroll" @keypress="allowOnlyNumbers"
                                  @keydown="preventDecrementBelowZero" class="configur_voucher_input" id="quotation"
                                  :disabled="voucherNumber.isQuotation" autocomplete="off"
                                  v-model="voucherNumber.isQuotationNumber" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.isQuotationNumber">{{
                                  voucherNumberError.isQuotationNumber }}</span>

                              </td>
                              <td>
                                <input type="text" placeholder="Suffix" class="configur_voucher_input" id="quotation"
                                  :disabled="voucherNumber.isQuotation" autocomplete="off"
                                  v-model="voucherNumber.isQuotationSuffix" @input="handleInput('isQuotationSuffix')" />
                                <span class="error-validation-vch_no" v-if="voucherNumberError.quotationSuffix">{{
                                  voucherNumberError.quotationSuffix }}</span>

                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="form_bottom_button mt-4 mb-4 text-center">
                        <button class="form_button black_button" @click="updateVoucherNumber">
                          Save
                        </button>
                      </div>
                      <div class="success_message" v-if="this.templateSuccess">
                        <p>Data Saved Successfully!</p>
                      </div>
                    </div>
                  </div>
                  <div v-bind:class="{
                    hidden: invoiceopentab !== 3,
                    block: invoiceopentab === 3,
                  }">
                    <div class="invoice_template_content">
                      <div class="container-fluid">
                        <div class="row">
                          <div v-for="option in invoiceTemplateOptions" :key="option.pdfTemplate_id"
                            class="col-lg-6 col-md-6 col-12">
                            <div class="invoice_radio_button">
                              <input type="radio" class="invoice_radio" :id="option.pdfTemplate_id"
                                :name="radioGroupName" :checked="option.pdfTemplate_id === selectedOptionId"
                                @change="getSelectedTemplate(option)" autocomplete="off" />
                              <label :for="option.pdfTemplate_id">{{ option.pdfTemplate_name }}</label>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-12 col-12">
                            <div class="form_bottom_button mt-4 mb-4 text-center">
                              <button class="form_button black_button" @click="UpdateInvoiceTemplate">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="success_message" v-if="this.templateSuccess">
                          <p>Data Saved Successfully!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-bind:class="{
                    hidden: invoiceopentab !== 4,
                    block: invoiceopentab === 4,
                  }">
                    <div class="invoice_template_content">
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-lg-12 col-md-12 col-12">
                            <div class="customize_declaration">
                              <div class="configuration_checkbox invoice_checkboxlabel mb-3">
                                <b-form-checkbox id="customizexdeclaration" name="customizexdeclaration"
                                  v-model="declarationchecked" :checked="declarationchecked">
                                  Customized Declaration</b-form-checkbox>
                              </div>

                              <!-- <input type="text" placeholder="Content Here" class="configur_voucher_input"/> -->
                              <div v-if="declarationchecked">
                                <span class="error-validation-vch_no" v-if="declarationError.declaration">{{
                                  declarationError.declaration }}</span>
                                <textarea type="text" placeholder="Content Here" rows="5" class="declaration_input"
                                  :disabled="!declarationchecked" v-model="CustomizedDeclaration"></textarea>
                              </div>


                              <textarea v-else type="text" placeholder="Content Here" rows="5" class="declaration_input"
                                :disabled="!declarationchecked" v-model="defaultDeclaration"></textarea>
                            </div>
                          </div>
                          <div class="col-lg-12 col-12" v-if="declarationchecked">
                            <div class="form_bottom_button mt-4 mb-4 text-center">
                              <button class="form_button black_button" @click="UpdateDeclaration">
                                Save
                              </button>
                            </div>
                          </div>
                          <div class="col-lg-12 col-12" v-else>
                            <div class="form_bottom_button mt-4 mb-4 text-center">
                              <button class="form_button black_button" @click="DefaultInvoiceUpdate('declaration')">
                                Save
                              </button>
                            </div>
                          </div>
                          <div style="width:206px;" class="success_message" v-if="this.templateSuccess">
                            <p>Data Saved Successfully!</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-bind:class="{
                    hidden: invoiceopentab !== 5,
                    block: invoiceopentab === 5,
                  }">
                    <div class="invoice_template_content">
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-lg-12 col-md-12 col-12" @click="changeHeaderType">
                            <div class="customize_declaration d-flex align-items-center">
                              <div class="configuration_checkbox invoice_checkboxlabel">
                                <b-form-checkbox id="invoiceheader" name="invoiceheader"
                                  v-model="invoiceHeader.invoiceheaderisChecked"
                                  :checked="invoiceHeader.invoiceheaderisChecked">
                                  <span
                                    @click="invoiceHeader.invoiceheaderisChecked = !invoiceHeader.invoiceheaderisChecked">
                                    Customized Invoice Header
                                  </span>
                                </b-form-checkbox>
                              </div>
                              <!-- <div class="note_info">
                                <img
                                  src="/assets/images/parties/info.svg"
                                  class="img-fluid ml-1"
                                />
                                Note:
                              </div> -->
                            </div>
                          </div>
                        </div>
                        <div class="row mt-3" v-if="invoiceHeader.invoiceheaderisChecked">
                          <div class="col-lg-4 col-md-6 col-12">
                            <div class="mb-3">
                              <lable class="invoice_header_label">Sales Header</lable>
                              <input type="text" placeholder="Sales Header" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeader.sales" :maxlength="maxCharLength"
                                @input="handleInvoiceHeaderVal('sales')" />
                              <span class="error-validation-vch_no" v-if="invoiceHeaderError.sales">{{
                                invoiceHeaderError.sales }}</span>


                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Credit Note Header</lable>
                              <input type="text" placeholder="Credit Note Header" class="configur_voucher_input"
                                :disabled="!invoiceHeader.invoiceheaderisChecked
                                  " autocomplete="off" v-model="invoiceHeader.CreditNote"
                                @input="handleInvoiceHeaderVal('CreditNote')" :maxlength="maxCharLength" />
                              <span class="error-validation-vch_no" v-if="invoiceHeaderError.CreditNote">{{
                                invoiceHeaderError.CreditNote }}</span>

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Payment Header</lable>
                              <input type="text" placeholder="Payment Header" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeader.Peyment"
                                @input="handleInvoiceHeaderVal('Peyment')" :maxlength="maxCharLength" />
                              <span class="error-validation-vch_no" v-if="invoiceHeaderError.Peyment">{{
                                invoiceHeaderError.Peyment }}</span>

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Delivery Note Header</lable>
                              <input type="text" placeholder="Delivery Note Header" class="configur_voucher_input"
                                :disabled="!invoiceHeader.invoiceheaderisChecked
                                  " autocomplete="off" v-model="invoiceHeader.DeliveryNote"
                                @input="handleInvoiceHeaderVal('DeliveryNote')" :maxlength="maxCharLength" />
                              <span class="error-validation-vch_no" v-if="invoiceHeaderError.DeliveryNote">{{
                                invoiceHeaderError.DeliveryNote }}</span>

                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6 col-12">
                            <div class="mb-3">
                              <lable class="invoice_header_label">Sales Order Header</lable>
                              <input type="text" placeholder="Sales Order Header" class="configur_voucher_input"
                                :disabled="!invoiceHeader.invoiceheaderisChecked
                                  " autocomplete="off" v-model="invoiceHeader.salesOrder"
                                @input="handleInvoiceHeaderVal('salesOrder')" :maxlength="maxCharLength" />
                              <span class="error-validation-vch_no" v-if="invoiceHeaderError.salesOrder">{{
                                invoiceHeaderError.salesOrder }}</span>

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Receipt Header</lable>
                              <input type="text" placeholder="Receipt Header" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeader.Receipt"
                                @input="handleInvoiceHeaderVal('Receipt')" :maxlength="maxCharLength" />
                              <span class="error-validation-vch_no" v-if="invoiceHeaderError.Receipt">{{
                                invoiceHeaderError.Receipt }}</span>

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Journal Header</lable>
                              <input type="text" placeholder="Journal Header" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeader.Journal"
                                @input="handleInvoiceHeaderVal('Journal')" :maxlength="maxCharLength" />
                              <span class="error-validation-vch_no" v-if="invoiceHeaderError.Journal">{{
                                invoiceHeaderError.Journal }}</span>

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Quotation Header</lable>
                              <input type="text" placeholder="Quotation Header" class="configur_voucher_input"
                                :disabled="!invoiceHeader.invoiceheaderisChecked
                                  " autocomplete="off" v-model="invoiceHeader.Quotation"
                                @input="handleInvoiceHeaderVal('Quotation')" :maxlength="maxCharLength" />
                              <span class="error-validation-vch_no" v-if="invoiceHeaderError.Quotation">{{
                                invoiceHeaderError.Quotation }}</span>

                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6 col-12">
                            <div class="mb-3">
                              <lable class="invoice_header_label">Purchase Header</lable>
                              <input type="text" placeholder="Purchase Header" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeader.Purchase"
                                @input="handleInvoiceHeaderVal('Purchase')" :maxlength="maxCharLength" />
                              <span class="error-validation-vch_no" v-if="invoiceHeaderError.Purchase">{{
                                invoiceHeaderError.Purchase }}</span>

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Purchase Order Header</lable>
                              <input type="text" placeholder="Purchase Order Header" class="configur_voucher_input"
                                :disabled="!invoiceHeader.invoiceheaderisChecked
                                  " autocomplete="off" v-model="invoiceHeader.PurchaseOrder"
                                @input="handleInvoiceHeaderVal('PurchaseOrder')" :maxlength="maxCharLength" />
                              <span class="error-validation-vch_no" v-if="invoiceHeaderError.PurchaseOrder">{{
                                invoiceHeaderError.PurchaseOrder }}</span>

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Debit Note Header</lable>
                              <input type="text" placeholder="Debit Note Header" class="configur_voucher_input"
                                :disabled="!invoiceHeader.invoiceheaderisChecked
                                  " autocomplete="off" v-model="invoiceHeader.DebitNote"
                                @input="handleInvoiceHeaderVal('DebitNote')" :maxlength="maxCharLength" />
                              <span class="error-validation-vch_no" v-if="invoiceHeaderError.DebitNote">{{
                                invoiceHeaderError.DebitNote }}</span>

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Contra Header</lable>
                              <input type="text" placeholder="Contra Header" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeader.Contra"
                                @input="handleInvoiceHeaderVal('Contra')" :maxlength="maxCharLength" />
                              <span class="error-validation-vch_no" v-if="invoiceHeaderError.Contra">{{
                                invoiceHeaderError.Contra }}</span>

                            </div>
                          </div>
                        </div>
                        <div class="row mt-3" v-else>
                          <div class="col-lg-4 col-md-6 col-12">
                            <div class="mb-3">
                              <lable class="invoice_header_label">Sales Header</lable>
                              <input type="text" placeholder="Tax Sales" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeaderDefault.salesDefault"
                                @input="handleInvoiceHeaderVal('salesDefault')" :maxlength="maxCharLength" />

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Credit Note Header</lable>
                              <input type="text" placeholder="Credit Note" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeaderDefault.CreditNoteDefault"
                                @input="handleInvoiceHeaderVal('CreditNoteDefault')" :maxlength="maxCharLength" />

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Payment Header</lable>
                              <input type="text" placeholder="Payment Voucher" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeaderDefault.PeymentDefault"
                                @input="handleInvoiceHeaderVal('PeymentDefault')" :maxlength="maxCharLength" />

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Delivery Note Header</lable>
                              <input type="text" placeholder="Delivery Note" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeaderDefault.DeliveryNoteDefault"
                                @input="handleInvoiceHeaderVal('DeliveryNoteDefault')" :maxlength="maxCharLength" />

                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6 col-12">
                            <div class="mb-3">
                              <lable class="invoice_header_label">Sales Order Header</lable>
                              <input type="text" placeholder="Sales Order" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeaderDefault.salesOrderDefault"
                                @input="handleInvoiceHeaderVal('salesOrderDefault')" :maxlength="maxCharLength" />

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Receipt Header</lable>
                              <input type="text" placeholder="Receipt Voucher" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeaderDefault.ReceiptDefault"
                                @input="handleInvoiceHeaderVal('ReceiptDefault')" :maxlength="maxCharLength" />

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Journal Header</lable>
                              <input type="text" placeholder="Journal Voucher" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeaderDefault.JournalDefault"
                                @input="handleInvoiceHeaderVal('JournalDefault')" :maxlength="maxCharLength" />

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Quotation Header</lable>
                              <input type="text" placeholder="Quotation" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeaderDefault.QuotationDefault"
                                @input="handleInvoiceHeaderVal('QuotationDefault')" :maxlength="maxCharLength" />

                            </div>
                          </div>

                          <div class="col-lg-4 col-md-6 col-12">
                            <div class="mb-3">
                              <lable class="invoice_header_label">Purchase Header</lable>
                              <input type="text" placeholder="Purchase" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeaderDefault.PurchaseDefault"
                                @input="handleInvoiceHeaderVal('PurchaseDefault')" :maxlength="maxCharLength" />

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Purchase Order Header</lable>
                              <input type="text" placeholder="Purchase" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeaderDefault.PurchaseOrderDefault"
                                @input="handleInvoiceHeaderVal('PurchaseOrderDefault')" :maxlength="maxCharLength" />

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Debit Note Header</lable>
                              <input type="text" placeholder="Debit Note" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeaderDefault.DebitNoteDefault"
                                @input="handleInvoiceHeaderVal('DebitNoteDefault')" :maxlength="maxCharLength" />

                            </div>
                            <div class="mb-3">
                              <lable class="invoice_header_label">Contra Header</lable>
                              <input type="text" placeholder="Contra Voucher" class="configur_voucher_input" :disabled="!invoiceHeader.invoiceheaderisChecked
                                " autocomplete="off" v-model="invoiceHeaderDefault.ContraDefault"
                                @input="handleInvoiceHeaderVal('ContraDefault')" :maxlength="maxCharLength" />

                            </div>
                          </div>
                        </div>
                        <div class="row" v-if="invoiceHeader.invoiceheaderisChecked">
                          <div class="col-lg-12 col-12">
                            <div class="form_bottom_button mt-4 mb-4 text-center">
                              <button class="form_button black_button" @click="UpdateInvoiceHeader">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="row" v-else>
                          <div class="col-lg-12 col-12">
                            <div class="form_bottom_button mt-4 mb-4 text-center">
                              <button class="form_button black_button" @click="DefaultInvoiceUpdate('header')">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>

                        <div class="success_message" v-if="this.templateSuccess">
                          <p>Data Saved Successfully!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-bind:class="{
                    hidden: invoiceopentab !== 6,
                    block: invoiceopentab === 6,
                  }">
                    <div class="logo_inner_content">
                      <div class="container-fluid">

                        <div class="row">

                          <div class="col-lg-6 col-md-6 col-12">
                            <p class="text-center">Company Logo</p>
                            <div class="mb-4">
                              <div class="logo_card">
                                <div class="upload-configure-logo">
                                  <img v-if="!showimageSelected" src="/assets/images/1.0/upload-configuration.png"
                                    class="img-fluid browse_file_img" />
                                  <input multiple type="file" accept=".PNG,.jpg" ref="Input" @change="handleFileChange"
                                    style="display: inline-block" class="logo_upload_input" />
                                </div>
                                <div v-if="showimageSelected" class="uploded_show_logo">
                                  <div @mouseover="changeImageOption(true)" @mouseleave="changeImageOption(false)">
                                    <img :src="imagePreview" alt="Preview" style="max-width: 100%" />
                                    <div v-if="showChangeOption" class="change-option">
                                      <span><i class="fa fa-plus"></i></span>
                                      <input type="file" ref="fileInput" @change="handleFileChange"
                                        style="display: inline-block" class="logo_upload_input" />
                                    </div>


                                    <button @click="removeImage" class="remove_logo deleteImage">

                                      ×
                                    </button>


                                  </div>

                                </div>
                              </div>

                            </div>
                            <span class="error-validation-vch_no" v-if="imageSizeError.imageerror">{{
                              imageSizeError.imageerror }}</span>
                          </div>
                          <div class="col-lg-6 col-md-6 col-12">
                            <p class="text-center">Signature</p>
                            <div class="mb-4">
                              <div class="logo_card">

                                <div class="upload-configure-logo">
                                  <img v-if="!SignatureshowimageSelected" src="/assets/images/1.0/signature.png"
                                    class="img-fluid browse_file_img" />
                                  <input multiple type="file" accept=".PNG,.jpg" ref="SignatureInput"
                                    @change="SignaturehandleFileChange" style="display: inline-block"
                                    class="logo_upload_input" />
                                </div>
                                <div v-if="SignatureshowimageSelected" class="uploded_show_logo">
                                  <div @mouseover="SignaturechangeImageOption(true)"
                                    @mouseleave="SignaturechangeImageOption(false)">
                                    <img :src="SignatureimagePreview" alt="Preview" style="max-width: 100%" />
                                    <div v-if="SignatureshowChangeOption" class="change-option">
                                      <span><i class="fa fa-plus"></i></span>
                                      <input type="file" ref="SignaturefileInput" @change="SignaturehandleFileChange"
                                        style="display: inline-block" class="logo_upload_input" />
                                    </div>
                                    <button @click="SignatureremoveImage" class="remove_logo deleteImage">

                                      ×
                                    </button>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>
                        <span class="error-validation-vch_no" v-if="imageSizeError.imageerrorSign">{{
                          imageSizeError.imageerrorSign }}</span>

                        <div class="row">
                          <div class="col-lg-12 col-12">
                            <div class="form_bottom_button mt-4 mb-4 text-center">
                              <button class="form_button black_button" @click="updateImage">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="success_message" v-if="this.templateSuccess">
                          <p>Data Saved Successfully!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <div class="configurations_tabing_inner">
                <ul class="d-flex justify-content-around">
                  <li>
                    <a href="#" class="inner_link" v-on:click="outstandintoggleTabs(1)" v-bind:class="{
                      inactive: outstandingopentab !== 1,
                      active: outstandingopentab === 1,
                    }">Details</a>
                  </li>
                  <li>
                    <a href="#" class="inner_link" v-on:click="outstandintoggleTabs(2)" v-bind:class="{
                      inactive: outstandingopentab !== 2,
                      active: outstandingopentab === 2,
                    }">Columns To Share</a>
                  </li>
                  <li>
                    <a href="#" class="inner_link" v-on:click="outstandintoggleTabs(3)" v-bind:class="{
                      inactive: outstandingopentab !== 3,
                      active: outstandingopentab === 3,
                    }">Ageing Configuration</a>
                  </li>
                </ul>
                <div class="configurations_tabing_inner_content">
                  <div v-bind:class="{
                    hidden: outstandingopentab !== 1,
                    block: outstandingopentab === 1,
                  }">
                    <div class="invoice_template_content">
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-lg-9 col-md-12 col-12 mx-auto">
                            <div class="row">
                              <div class="col-lg-6 col-md-12 col-12">
                                <div class="mb-3">
                                  <lable class="invoice_header_label">View Outstanding By</lable>
                                  <select name="" id="" class="configuration_select ml-0" v-model="dategroupdata"
                                    style="width: 90%">
                                    <option disabled value="">
                                      Select outstanding
                                    </option>
                                    <option v-for="dategroup in dategrouparray" :value="dategroup">
                                      {{ dategroup }}
                                    </option>
                                  </select>
                                </div>
                                <div class="outstanding_switch">
                                  <span>Bill Wise Outstanding</span>
                                  <label class="switch">
                                    <input type="checkbox" :checked="billWiseOutstanding"
                                      v-model="billWiseOutstanding" />
                                    <span class="slider round"></span>
                                  </label>
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-12 col-12">
                                <div class="mb-3">
                                  <div class="configuration_checkbox">
                                    <b-form-checkbox id="Bank-Detail" name="Bank Detail" :checked="bankdetail"
                                      v-model="bankdetail" @change="handleBankDetailsChecked">
                                      Bank Details</b-form-checkbox>
                                  </div>
                                  <select name="" id="" class="configuration_select invoice_detail_bank"
                                    v-model="bankgroup" :disabled="!bankdetail">
                                    <option disabled value="">
                                      Please Select Bank
                                    </option>
                                    <option v-for="bankgroupdata in bankgrouparray" :value="bankgroupdata.guid"
                                      :key="bankgroupdata.ledgerId">
                                      {{ bankgroupdata.ledgerName }}
                                    </option>
                                  </select>
                                </div>
                                <div class="outstanding_switch">
                                  <span>Outstanding Adjustment</span>
                                  <label class="switch">
                                    <input type="checkbox" :checked="outstandingAdjustment"
                                      v-model="outstandingAdjustment" />
                                    <span class="slider round"></span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-12 col-12">
                            <div class="form_bottom_button mt-4 mb-4 text-center">
                              <button class="form_button black_button" @click="updateOutstandings">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="success_message" v-if="this.templateSuccess">
                          <p>Data Saved Successfully!</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-bind:class="{
                    hidden: outstandingopentab !== 2,
                    block: outstandingopentab === 2,
                  }">
                    <div class="invoice_template_content">
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="outstanding_switch mb-3 mt-3">
                              <span>Date</span>
                              <label class="switch">
                                <input type="checkbox" :checked="date" v-model="date" />
                                <span class="slider round"></span>
                              </label>
                            </div>
                            <div class="outstanding_switch mb-3 mt-3">
                              <span>Ref No</span>
                              <label class="switch">
                                <input type="checkbox" :checked="refNo" v-model="refNo" />
                                <span class="slider round"></span>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="outstanding_switch mb-3 mt-3">
                              <span>Pending Amount</span>
                              <label class="switch">
                                <input type="checkbox" :checked="pendingAmount" v-model="pendingAmount" />
                                <span class="slider round"></span>
                              </label>
                            </div>
                            <div class="outstanding_switch mb-3 mt-3">
                              <span>Overdue By Days</span>
                              <label class="switch">
                                <input type="checkbox" :checked="overDueByDays" v-model="overDueByDays" />
                                <span class="slider round"></span>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="outstanding_switch mb-3 mt-3">
                              <span>Due On</span>
                              <label class="switch">
                                <input type="checkbox" :checked="dueOn" v-model="dueOn" />
                                <span class="slider round"></span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-lg-12 col-12">
                            <div class="form_bottom_button mt-4 mb-4 text-center">
                              <button class="form_button black_button" @click="updateOutstandings">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="success_message" v-if="this.templateSuccess">
                          <p>Data Saved Successfully!</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-bind:class="{
                    hidden: outstandingopentab !== 3,
                    block: outstandingopentab === 3,
                  }">
                    <div class="invoice_template_content">
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-lg-6 col-md-10 col-12 mx-auto">
                            <div class="configuration_checkbox mb-3">
                              <b-form-checkbox id="CustomizedDays " name="CustomizedDays" :checked="true"
                                v-model="customizeddays">Customized Days</b-form-checkbox>
                            </div>

                            <div class="row" v-if="customizeddays">
                              <div class="col-lg-6 col-md-6 col-12">
                                <div class="from_to_days">
                                  <label class="invoice_header_label mb-3">From (Days)</label>
                                  <div v-for="(range, index) in dateRanges" :key="index">
                                    <input type="number" :placeholder="range.fromDays" v-model="range.fromDays"
                                      class="configur_voucher_input mb-2" :disabled="true" autocomplete="off" />
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-6 col-12">
                                <div class="from_to_days mb-3">
                                  <label class="invoice_header_label mb-3">To (Days)</label>
                                  <div v-for="(range, index) in dateRanges" :key="index">
                                    <input type="number" :placeholder="range.toDays" class="configur_voucher_input mb-2"
                                      :disabled="!customizeddays" autocomplete="off" v-model="range.toDays"
                                      @input="updateNextFromDay(index)" @keypress="allowOnlyNumbers" />
                                  </div>
                                </div>
                                <span class="error-validation-vch_no" v-if="AegingError.indexerror">{{
                                  AegingError.indexerror }}</span>
                                <span class="error-validation-vch_no" v-if="AegingError.indexerrorzero">{{
                                  AegingError.indexerrorzero }}</span>
                              </div>
                            </div>
                            <div class="row" v-else>
                              <div class="col-lg-6 col-md-6 col-12">
                                <div class="from_to_days">
                                  <label class="invoice_header_label mb-3">From (Days)</label>
                                  <div v-for="(range, index) in dateRangesDefault" :key="index">
                                    <input type="number" :placeholder="range.fromDays" v-model="range.fromDays"
                                      class="configur_voucher_input mb-2" :disabled="true" autocomplete="off" />
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-6 col-md-6 col-12">
                                <div class="from_to_days mb-3">
                                  <label class="invoice_header_label mb-3">To (Days)</label>
                                  <div v-for="(range, index) in dateRangesDefault" :key="index">
                                    <input type="number" :placeholder="range.toDays" v-model="range.toDays"
                                      class="configur_voucher_input mb-2" :disabled="true" autocomplete="off" />
                                  </div>
                                </div>

                                <!-- <span class="error-validation-vch_no">please enter value</span> -->

                              </div>
                            </div>
                            <div class="row">
                              <div class="col-lg-12 col-12" v-if="customizeddays">
                                <div class="form_bottom_button mt-4 mb-4 text-center">
                                  <button class="form_button black_button" @click="UpdateAeging">
                                    Save
                                  </button>
                                </div>
                              </div>
                              <div class="col-lg-12 col-12" v-else>
                                <div class="form_bottom_button mt-4 mb-4 text-center">
                                  <button class="form_button black_button" @click="DefaultOutstandingUpdate('Aeging')">
                                    Save
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="success_message" v-if="this.templateSuccess">
                              <p>Data Saved Successfully!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <div class="ledger_report_content">
                <div class="configuration_checkbox">
                  <b-form-checkbox id="ledgernarration" name="ledgernarration" v-model="showNarration"
                    :checked="showNarration">
                    Show Narration</b-form-checkbox>
                </div>
                <div class="LedgerReportFormatConfiguration">
                  <h6 class="mt-2 mb-2">Format of Report</h6>
                  <div class="ewaybillinvoiceformat">
                              <div class="invoice_radio_button">
                                <input type="radio" class="invoice_radio" id="DetailedRadioLedger" name="radioGroupLedger"
                                  value="Detailed" v-model="selectedOptionradioledger" autocomplete="off"
                                  @change="formatSelection($event)" />
                                <label for="DetailedRadioLedger" class="fontssetlabel">Detailed</label>
                              </div>  
                              <div class="invoice_radio_button">
                                <input type="radio" class="invoice_radio" id="CondensedRadioLedger" name="radioGroupLedger"
                                  value="Condensed" v-model="selectedOptionradioledger" autocomplete="off" 
                                  @change="formatSelection($event)"/>
                                <label for="CondensedRadioLedger" class="fontssetlabel">Condensed</label>
                              </div>
                            </div>
                </div>
                <div class="form_bottom_button mt-4 mb-4 text-center">
                  <button class="form_button black_button" @click="updateNarrations">
                    Save
                  </button>
                </div>
                <div class="success_message" v-if="this.templateSuccess">
                  <p>Data Saved Successfully!</p>
                </div>
              </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }">
              <div class="invoice_template_content">
                <div class="container-fluid">
                  <div class="row">

                    <div class="col-lg-4 col-md-6 col-12">
                      <lable class="invoice_header_label mb-1">Currency Format</lable>
                      <select name="" id="" class="configuration_select ml-0" v-model="currencyformat"
                        style="width: 90%">
                        <option v-for="formatdata in formatrray">
                          {{ formatdata }}
                        </option>
                      </select>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                      <div class="configuration_checkbox mb-1">
                        <b-form-checkbox id="decimaldigit" name="decimaldigit" :checked="true" v-model="decimaldigital">
                          Decimal Digit</b-form-checkbox>
                      </div>
                      <div class="digit_counter">
                        <button @click="decreaseCounter" class="counter_input"
                          :class="this.counter <= 2 ? 'disable_input' : 'counter_input'"
                          :disabled="!decimaldigital || counter <= 2">
                          -
                        </button>
                        <span>{{ counter }}</span>
                        <button @click="increaseCounter" :class="this.counter >= 4 ? 'disable_input' : 'counter_input'"
                          :disabled="!decimaldigital || counter >= 4">
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-12">
                      <div class="form_bottom_button mt-4 mb-4 text-center">
                        <button class="form_button black_button" @click="setcurrency">Save</button>
                      </div>
                    </div>
                  </div>
                  <div class="success_message" v-if="this.templateSuccess">
                    <p>Data Saved Successfully!</p>
                  </div>

                </div>
              </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 5, block: openTab === 5 }">
              <!-- <div class="ledger_report_content"> -->
              <div class="d-flex justify-content-between align-items-center border rounded p-3 shadow-sm w-100">
                <div class="WhatsAppTextCaptionconfiguration">
                  <h5 class="mb-0">WhatsApp</h5>
                  <p class="mb-0" :class="{ 'text-gray': linked, 'text-red': !linked }">
                    <i class="fa fa-exclamation-circle"></i> Login to WhatsApp to send bills to your parties
                  </p>
                </div>
                <button class="LoginButtonWhatsappconfiguration" :class="{ 'btn-red': linked, 'btn-black': !linked }"
                  @click="login">
                  {{ linked ? "Log out" : "Log in" }}
                </button>
              </div>
              <button class="btn btn-outline-dark btn-sm" @click="login">
                {{ linked ? "Log out" : "Log in" }}
              </button>
            </div>

            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
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
  </section>
</template>

<script>
import Api from "@/Api";
import axios from "axios";
export default {
  data() {
    return {
      //optional voucher 
      isOptionalVoucherEnabled: false,
      overDueDays: "",
      dynamicSignature: "",
      dynamicLogo: "",
      ShowdynamicLogo: "",
      ShowdynamicSignature: "",

      maxCharLength: "51",
      maxNumLength: '10',
      DefaultHeaderStatic: '',
      voucherNumberError: [],
      invoiceHeaderError: [],
      imageSizeError: [],
      AegingError: [],
      declarationError: [],
      showimageSelected: null,
      SignatureshowimageSelected: null,
      SignatureimagePreview: null,
      imagefromget: "",
      initialGap: 0,
      date: "",
      selectedFiles: [],
      SignatureselectedFiles: [],
      imageUrlForselectedFiles: "",
      SignatureimageUrlForselectedFiles: "",
      showCompanyImageLogo: false,
      showCompanySignatureLogo: false,
      openTab: 1,
      invoiceopentab: 1,
      dateRangesDefault: [],
      dateRanges: [],
      // bankselected: '',
      bankarray: ["HDFC", "UBI", "SBI", "IOB"],
      templateSuccess: false,

      radioGroupName: "radio-group",
      selectedOptionId: "",
      selectedOptionName: "Default",

      invoiceTemplateOptions: [],
      invoiceHeader: {
        invoiceheaderisChecked: null,
        sales: "",
        salesOrder: "",
        Purchase: "",
        PurchaseOrder: "",
        Receipt: "",
        Peyment: "",
        Journal: "",
        CreditNote: "",
        DebitNote: "",
        Contra: "",
        Quotation: "",
        DeliveryNote: "",
      },
      invoiceHeaderDefault: {

        salesDefault: "",
        salesOrderDefault: "",
        PurchaseDefault: "",
        PurchaseOrderDefault: "",
        ReceiptDefault: "",
        PeymentDefault: "",
        JournalDefault: "",
        CreditNoteDefault: "",
        DebitNoteDefault: "",
        ContraDefault: "",
        QuotationDefault: "",
        DeliveryNoteDefault: "",
      },

      invoiceDetails: {
        ConsigneeDetails: false,
        GodownName: false,
        Narration: false,
        ShowStockExpire: false,
        ShowStockDiscount: false,
        ItemDescription: false,
        Batches: false,
        InvoiceShareGST: false,
        LedgerDescription: false,
        eWayBill: false,
        BankAccount: false,
        bankselected: "",
        ShowEInvoiceStatus: false,
        ShowEwayStatus: false,
      },
      bankSearch: "",
      showBankOptions: false,

      voucherNumber: {
        isSales: false,
        isSalesPrefix: "",
        isSalesNumber: "",
        isSalesSuffix: "",

        isSalesOrder: false,
        isSalesOrderPrefix: "",
        isSalesOrderNumber: "",
        isSalesOrderSuffix: "",

        isPurchase: false,
        isPurchasePrefix: "",
        isPurchaseNumber: "",
        isPurchaseSuffix: "",

        isPurchaseOrder: false,
        isPurchaseOrderPrefix: "",
        isPurchaseOrderNumber: "",
        isPurchaseOrderSuffix: "",

        isReceipt: false,
        isReceiptPrefix: "",
        isReceiptNumber: "",
        isReceiptSuffix: "",

        isPeyment: false,
        isPeymentPrefix: "",
        isPeymentNumber: "",
        isPeymentSuffix: "",

        isCreditNote: false,
        isCreditNotePrefix: "",
        isCreditNoteNumber: "",
        isCreditNoteSuffix: "",

        isDebitNote: false,
        isDebitNotePrefix: "",
        isDebitNoteNumber: "",
        isDebitNoteSuffix: "",

        isJournal: false,
        isJournalPrefix: "",
        isJournalNumber: "",
        isJournalSuffix: "",

        isContra: false,
        isContraPrefix: "",
        isContraNumber: "",
        isContraSuffix: "",

        isQuotation: false,
        isQuotationPrefix: "",
        isQuotationNumber: "",
        isQuotationSuffix: "",
      },

      declarationchecked: null,
      CustomizedDeclaration: "",
      defaultDeclaration: "",

      imagePreview: null,
      SignatureimagePreview: null,
      selectedFile: null,
      SignatureselectedFile: null,
      showChangeOption: false,
      SignatureshowChangeOption: false,
      outstandingopentab: 1,
      dategroup: "",
      dategrouparray: ["Due Date", "Bill Date"],
      bankgroup: "",
      bankgrouparray: ["SBI", "UBI"],
      bankdetail: true,
      customizeddays: true,
      defaultcurrency: "",
      currencyrray: ["Indian Rupee (₹)", "Doller ($)"],
      currencyformat: "",
      formatrray: [
        "Indian Format (Lakhs, Crores)",
        "International Format (Million, Billion)",
      ],
      counter: 2,
      decimaldigital: true,
      decimalValue: "",
      dategroupdata: "",
      toSharedate: "",
      refNo: "",
      pendingAmount: "",
      dueOn: "",
      overDueByDays: "",
      defaultAgeing: "",
      customisedAgeings: "",
      decimaldigital: true,
      showNarration: "",
      billWiseOutstanding: "",
      EwayBillEInvoice: "",
      billByBillOutstanding: "",
      outstandingAdjustment: "",
      selectedOptionradio: '',
      selectedOptionradioledger: '0',
      isLoggedIn: false,
      linked: false,
      w_userId: localStorage.getItem("customerId"),
      showWhatsappPopup: false,
      success_logout: false,
      showDetailedLR: '0'
    };
  },
  watch: {
    'invoiceDetails.BankAccount'(newVal) {
      if (!newVal) {
        this.invoiceDetails.bankselected = '';
        this.bankSearch = '';
      }
    },
    imageUrlForselectedFiles(newFile) {
      if (newFile) {
        this.updateImage();
      }
    },
    SignatureimageUrlForselectedFiles(newFile) {
      if (newFile) {
        this.updateImage();
      }
    }
  },
  computed: {
    combinedEwayAndInvoiceStatus: {
      get() {
        return this.invoiceDetails.ShowEInvoiceStatus && this.invoiceDetails.ShowEwayStatus;
      },
      set(value) {
        this.invoiceDetails.ShowEInvoiceStatus = value;
        this.invoiceDetails.ShowEwayStatus = value;
      }
    },
  },
  methods: {
    //optional voucher
    updatePermision() {
      if (localStorage.getItem("_parentUserId") != "") {
        var data = {
          mainUserId: localStorage.getItem("_parentUserId"),
          subUserId: localStorage.getItem("customerId"),
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          id: localStorage.getItem('permission_id'),
          isWrite: {

            isOptionalVoucher: this.isOptionalVoucherEnabled,

          },
          requestFrom: "WEB",
        };
      } else {
        var data = {
          mainUserId: localStorage.getItem("customerId"),
          subUserId: localStorage.getItem("customerId"),
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          requestFrom: "WEB",
          id: localStorage.getItem('permission_id'),
          isWrite: {

            isOptionalVoucher: this.isOptionalVoucherEnabled,

          },
        };
      }

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.updateUserPermission(data, headers)
        .then((response) => {
          console.log(
            "response from update configuration api: ",
            response.data
          );
          this.templateSuccess = true;
          // localStorage.setItem('isWrite_isOptionalVoucher', this.isOptionalVoucherEnabled);
          if (this.isOptionalVoucherEnabled) {
            localStorage.setItem('isWrite_isOptionalVoucher', "true");
          } else {
            localStorage.setItem('isWrite_isOptionalVoucher', "false");
          }


          setTimeout(() => {
            this.templateSuccess = false;
          }, 1500);
        })
        .then((error) => {
          console.log(error);
        });

    },
    formatSelection(event){
       this.showDetailedLR = event.target.value === 'Detailed' ? '1' : '0';
      this.UpdateInvoiceConfigurations()
    },

    preventDecrementBelowZero(event) {
      const currentValue = Number(event.target.value);
      if (event.keyCode === 40 && currentValue <= 0) {
        event.preventDefault();
      }
    },
    disableMouseWheelScroll: function (e) {
      e.preventDefault();
    },
    handleBankDetailsChecked() {

      if (!this.bankdetail) {
        // console.log('bank uncheckded',this.bankdetail)
        this.bankgroup = '';
        // console.log(this.bankgroup,
        //   'bank-group ------------- '
        // )
      }
    },
    // CloseLogoutSuccesBox() {
    //   this.success_logout = false;
    // },
    // async checkLinkedStatus() {
    //   // Auto-check WhatsApp link status every 5 seconds
    //   setInterval(async () => {
    //     try {
    //       const response = await axios.get(`https://wa.livekeeping.com/qr/${this.w_userId}`);
    //       this.linked = response.data.linked;
    //       this.qrCode = response.data.qr;
    //       if (this.linked) this.qrCode = ""; this.isLoggedIn = true; // Hide QR when linked
    //     } catch (error) {
    //       console.error("❌ Error checking status:", error);
    //     }
    //   }, 2000);
    // },
    login() {
      // Replace with actual WhatsApp Web login logic
      if (this.linked) {
        try {
          const response = fetch(`https://wa.livekeeping.com/disconnect/${this.w_userId}`);
          this.success_logout = true;
          setTimeout(() => {
            this.success_logout = false;
          }, 10000);
        } catch (error) {
          // alert("Error disconnecting WhatsApp.");
          console.error("Error:", error);
        }
      } else {
        // Function add 
        this.openWhatsappPopup();
      }

    },
    async openWhatsappPopup() {
      if (!this.linked) {
        try {
          const response = await axios.get(`https://wa.livekeeping.com/qr/${this.w_userId}`);
          this.qrCode = response.data.qr;
          this.linked = response.data.linked;
        } catch (error) {
          console.error("❌ Error fetching QR:", error);
        }
        this.showWhatsappPopup = true;
      }

    },
    closePopupDesktop() {
      this.showWhatsappPopup = false;
    },
    preventDecrementBelowZero(event) {
      const currentValue = Number(event.target.value);
      if (event.keyCode === 40 && currentValue <= 0) {
        event.preventDefault();
      }
    },
    disableMouseWheelScroll: function (e) {
      e.preventDefault();
    },
    handleBankDetailsChecked() {

      if (!this.bankdetail) {
        // console.log('bank uncheckded',this.bankdetail)
        this.bankgroup = '';
        // console.log(this.bankgroup,
        //   'bank-group ------------- '
        // )
      }
    },
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    invoicetoggleTabs: function (tabNumber) {
      this.invoiceopentab = tabNumber;
    },

    outstandintoggleTabs: function (tabNumber) {
      this.outstandingopentab = tabNumber;
    },

    handleInput(inputVal) {
      console.time();

      const voucherProperties = [
        'isSalesPrefix', 'isSalesSuffix',
        'isSalesOrderPrefix', 'isSalesOrderSuffix',
        'isPurchasePrefix', 'isPurchaseSuffix',
        'isPurchaseOrderPrefix', 'isPurchaseOrderSuffix',
        'isReceiptPrefix', 'isReceiptSuffix',
        'isPeymentPrefix', 'isPeymentSuffix',
        'isCreditNotePrefix', 'isCreditNoteSuffix',
        'isDebitNotePrefix', 'isDebitNoteSuffix',
        'isJournalPrefix', 'isJournalSuffix',
        'isContraPrefix', 'isContraSuffix',
        'isQuotationPrefix', 'isQuotationSuffix'
      ];

      if (voucherProperties.includes(inputVal)) {
        this.voucherNumber[inputVal] = this.voucherNumber[inputVal].toUpperCase();
      }

      console.timeEnd();
    },
    changeHeaderType() {
      this.invoiceHeader.invoiceheaderisChecked = !this.invoiceHeader.invoiceheaderisChecked;

      if (this.invoiceHeader.invoiceheaderisChecked) {
        const headerFields = ['sales', 'salesOrder', 'Purchase', 'PurchaseOrder', 'CreditNote', 'DebitNote', 'Receipt', 'Peyment', 'Journal', 'Quotation', 'Contra', 'DeliveryNote'];

        headerFields.forEach(field => {
          if (this.invoiceHeader[field] === '') {
            this.invoiceHeader[field] = this.invoiceHeaderDefault[`${field}Default`];
          }
        });
      }
    },

    UpdateAeging() {
      if (Object.keys(this.AegingError).length === 0) {
        this.updateOutstandings()
      }
    },
    updateImage() {
      this.templateSuccess = true;
      this.updateImagesForInvoiceConfigurations()
      this.updateSignartureImagesForInvoiceConfigurations()
      //  alert("hi update")

      setTimeout(() => {
        this.templateSuccess = false;
      }, 1500);
    },
    allowOnlyNumbers(event) {

      if (!/^\d+$/.test(event.key)) {
        event.preventDefault();
      }
    },
    setcurrency() {
      localStorage.setItem("currencyFormate", this.currencyformat)
      this.templateSuccess = true;

      setTimeout(() => {
        this.templateSuccess = false;
      }, 1500);
    },


    limitInputLength() {
      const voucherTypes = [
        'isSalesNumber', 'isSalesOrderNumber', 'isPurchaseNumber', 'isPurchaseOrderNumber',
        'isReceiptNumber', 'isPeymentNumber', 'isCreditNoteNumber', 'isDebitNoteNumber',
        'isJournalNumber', 'isContraNumber', 'isQuotationNumber'
      ];

      voucherTypes.forEach(type => {
        const currentValue = this.voucherNumber[type];
        if (currentValue && currentValue.toString().length > this.maxNumLength) {
          this.voucherNumber[type] = parseInt(currentValue.toString().slice(0, this.maxNumLength));
        }
      });
    },

    updateNarrations() {
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        showLedgerReport: this.showNarration,
        requestFrom: "WEB"
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.updateNarrationConfigurations(data, headers)
        .then((response) => {
          this.templateSuccess = true;
          this.getNarrationConfigurations();

          setTimeout(() => {
            this.templateSuccess = false;
          }, 1500);
        })
        .then((error) => {
          console.log(error);
        });
    },
    updateOutstandings() {
      this.AegingError = []

      this.dateRanges.map((item) => {
        item.fromDays = item.fromDays.toString()
        item.toDays = item.toDays.toString()
      })

      const data = {
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        viewOutstandingBy: this.dategroupdata,
        billByBillOutstanding: this.billWiseOutstanding,
        outstandingByAdjustment: this.outstandingAdjustment,
        showOutstandingBankDetails: this.bankdetail,
        setOutstandingBankLedger: this.bankgroup,
        isCustomisedAging: this.customizeddays,
        customisedAgings: this.customizeddays ? this.dateRanges : this.dateRangesDefault,

        columnToShare: {
          pdfs: {
            date: Boolean(this.date),
            dueOn: Boolean(this.dueOn),
            overDueByDays: Boolean(this.overDueByDays),
            refNo: Boolean(this.refNo),
            pendingAmount: Boolean(this.pendingAmount)
          }
        }
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.updateOutstandingsConfigurations(data, headers)
        .then((response) => {

          this.templateSuccess = true;
          this.OutstandingsConfigurations();
          setTimeout(() => {
            this.templateSuccess = false;
          }, 1500);
          console.log(response.data.data);
        })
        .then((error) => {
          console.log(error);
        });
    },

    handleFileChange(event) {
      this.imageSizeError = []
      this.selectedFiles = Array.from(event.target.files);
      const file = event.target.files[0];
      console.log('fileeeeeeeeeeee', event.target.files)

      if (file) {

        const allowedFileTypes = ['image/jpeg', 'image/png'];


        if (!allowedFileTypes.includes(file.type)) {
          this.imageSizeError["imageerror"] = 'Invalid file type. Please choose a JPEG, PNG file.';
          return;
        }
        const maxSizeInBytes = 1 * 1024 * 1024;
        if (file.size > maxSizeInBytes) {
          console.log("files size exceeds 1 MB")
          this.imageSizeError["imageerror"] = 'File size exceeds 1 MB. Please choose a smaller file.'
          return;
        }
        else {
          this.imageSizeError = []
          this.selectedFile = file;



          this.$refs.Input.style.display = "none";
          this.createImage(file);
        }
      }
    },

    async imageUrlToBlob(imageUrl) {
      try {
        const response = await fetch(imageUrl);
        console.log("response from imageUrlToBlob", response)
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        const blob = await response.blob();
        console.log("blob", blob)
        this.createImage(blob);
        return blob;
      } catch (error) {
        console.error('Error converting image URL to Blob:', error);
        throw error;
      }
    },

    async SignatureimageUrlToBlob(imageUrl) {
      try {
        const response = await fetch(imageUrl);

        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        const blob = await response.blob();
        this.SignaturecreateImage(blob);
        return blob;
      } catch (error) {
        console.error('Error converting image URL to Blob:', error);
        throw error;
      }
    },

    SignaturehandleFileChange(event) {
      this.imageSizeError = []
      this.SignatureselectedFiles = Array.from(event.target.files);
      const Signaturefile = event.target.files[0];

      if (Signaturefile) {
        // Define the allowed file types
        const allowedFileTypes = ['image/jpeg', 'image/png'];

        // Check file type validation
        if (!allowedFileTypes.includes(Signaturefile.type)) {
          this.imageSizeError["imageerrorSign"] = 'Invalid file type. Please choose a JPEG, PNG file.';
          return;
        }
        const maxSizeInBytessign =  1024 * 1024;
        if (Signaturefile.size > maxSizeInBytessign) {
          this.imageSizeError["imageerrorSign"] = 'Signature File size exceeds 1 MB. Please choose a smaller file.'
          return;
        }
        else {
          this.imageSizeError = []
          this.SignatureselectedFile = Signaturefile;

          this.$refs.SignatureInput.style.display = "none";
          this.SignaturecreateImage(Signaturefile);
        }

      }
    },

    createImage(file) {
      var vm = this;
      var reader = new FileReader();

      reader.onload = (event) => {
        var imageUrl = event.target.result;
        vm.imageUrlForselectedFiles = imageUrl;
        console.log("image for url for selected files ", vm.imageUrlForselectedFiles)

        vm.imagePreview = imageUrl;
        this.showimageSelected = true
      };
      reader.readAsDataURL(file);
    },


    SignaturecreateImage(file) {
      var vm = this;
      var reader = new FileReader();

      reader.onload = (event) => {
        var SignatureimageUrl = event.target.result;
        vm.SignatureimageUrlForselectedFiles = SignatureimageUrl;
        this.SignatureimagePreview = SignatureimageUrl
        this.SignatureshowimageSelected = true
      };

      reader.readAsDataURL(file);

    },

    removeImage() {
      this.imageSizeError = []
      this.imagePreview = null;
      this.selectedFile = null;
      this.selectedFiles = null;
      this.$refs.fileInput.style.display = "inline-block";
      this.$refs.fileInput.value = null;
      this.$refs.Input.style.display = "inline-block";
      this.$refs.Input.value = null;

      this.showCompanyImageLogo = false;
      this.imageUrlForselectedFiles = "";

      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        showCompanyLogoImage: this.showCompanyImageLogo,
        setCompanyLogoImage: this.imageUrlForselectedFiles,

        requestFrom: "WEB"
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.updateImagesForInvoiceConfigurations(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            this.templateSuccess = true;

            this.getConfiguarationForInvoice();

            setTimeout(() => {
              this.templateSuccess = false;
            }, 1500);

          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          console.log(err);
        });
      // }
    },


    SignatureremoveImage() {
      this.imageSizeError = []
      this.SignatureimagePreview = null;
      this.SignatureselectedFile = null;
      this.$refs.SignaturefileInput.style.display = "inline-block";
      this.$refs.SignaturefileInput.value = null;
      this.$refs.SignatureInput.style.display = "inline-block";
      this.$refs.SignatureInput.value = null;

      this.showCompanySignatureLogo = false;
      this.SignatureimageUrlForselectedFiles = "";


      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        showSignatureImage: this.showCompanySignatureLogo,
        setSignatureImage: this.SignatureimageUrlForselectedFiles,

        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.updateImagesForInvoiceConfigurations(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            this.getConfiguarationForInvoice();
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          console.log(err);
        });
      // }
    },
    changeImageOption(show) {
      this.showChangeOption = show;
    },
    SignaturechangeImageOption(show) {
      this.SignatureshowChangeOption = show;
    },

    updateImagesForInvoiceConfigurations() {

      if (this.selectedFile !== null) {
        this.showCompanyImageLogo = true;
        this.showCompanySignatureLogo = true;

        const data = {
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          showCompanyLogoImage: this.showCompanyImageLogo,
          setCompanyLogoImage: this.imageUrlForselectedFiles,

          requestFrom: "WEB",
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.updateImagesForInvoiceConfigurations(data, headers)
          .then((response) => {
            if (response.data.message == "AUTHENTICATION_FAILED") {
              localStorage.clear();
              window.location.href = "/";
            } else {
              this.getConfiguarationForInvoice();

            }
          })
          .catch((err) => {
            Common.getStatusForActionFailed(err.response.status);
            console.log(err);
          });
      }
    },
    updateSignartureImagesForInvoiceConfigurations() {
      if (this.SignatureselectedFile !== null) {
        this.showCompanySignatureLogo = true;

        this.SignatureselectedFile = null;

        const data = {
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          showSignatureImage: this.showCompanySignatureLogo,
          setSignatureImage: this.SignatureimageUrlForselectedFiles,

          requestFrom: "WEB",
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.updateImagesForInvoiceConfigurations(data, headers)
          .then((response) => {
            if (response.data.message == "AUTHENTICATION_FAILED") {
              localStorage.clear();
              window.location.href = "/";
            } else {
              this.getConfiguarationForInvoice();
            }
          })
          .catch((err) => {
            Common.getStatusForActionFailed(err.response.status);
            console.log(err);
          });
      }
    },

    updateNextFromDay(index) {
      if (index == 0) {
        this.AegingError = []

        this.dateRanges[index].toDays = (this.dateRanges[index].toDays.toString().slice(0, 3));

        var StorecurrentToDays = (this.dateRanges[index].toDays);
        console.log("first value", StorecurrentToDays)
        var currentToDays = (this.dateRanges[index].toDays);

        if (this.dateRanges[index].toDays == "" || this.dateRanges[index].toDays == 0) {

          this.AegingError["indexerrorzero"] = `First Value can't be zero or empty`
        }
        for (var i = 0; i < this.dateRanges.length - 1; i++) {
          var currentToDays = this.dateRanges[i].toDays;
          if (
            currentToDays == "" ||
            currentToDays == null ||
            currentToDays == undefined
          ) {
            currentToDays = 0;
            StorecurrentToDays = 0;
          } else {
            currentToDays = this.dateRanges[i].toDays;
            StorecurrentToDays = this.dateRanges[index].toDays;
          }
          this.dateRanges[i + 1].fromDays = parseInt(currentToDays);
          this.dateRanges[i + 1].toDays =
            parseInt(currentToDays) + parseInt(StorecurrentToDays);
        }

        console.log("Updated dateRanges:", this.dateRanges);
      } else {
        this.AegingError = []
        this.dateRanges[index].toDays = (this.dateRanges[index].toDays.toString().slice(0, 3));

        var nearestValue = parseInt(this.dateRanges[index - 1].toDays)
        var checkvalue = parseInt(this.dateRanges[index].toDays)

        if (nearestValue >= checkvalue) {
          this.AegingError["indexerror"] = `Entered value can't be less than ${nearestValue} or equal`
        }


        if (this.dateRanges[index].toDays == "") {
          this.AegingError["indexerror"] = `Value can't be empty`
        }

        for (var i = index; i < this.dateRanges.length - 1; i++) {
          var currentToDays = this.dateRanges[i].toDays;





          console.log("todays", currentToDays)

          var difference =
            parseInt(currentToDays) - parseInt(this.dateRanges[i - 1].toDays);
          console.log("difference", difference)

          if (isNaN(currentToDays) || isNaN(difference)) {
            currentToDays = 0;
            difference = 0;
          }

          this.dateRanges[i + 1].fromDays = parseInt(currentToDays);
          this.dateRanges[i + 1].toDays =
            parseInt(currentToDays) + parseInt(difference);
        }

        console.log("Updated dateRanges:", this.dateRanges);
      }
    },

    increaseCounter: function () {
      if (this.counter < 4) {
        this.counter++;
        localStorage.setItem("decimalValue", this.counter);
      }
    },
    decreaseCounter: function () {
      if (this.counter > 2) {
        this.counter--
        localStorage.setItem("decimalValue", this.counter);
      }
    },
    getCurrencyFormate() {
      var countryCode = localStorage.getItem("countryCode");
      this.counter = localStorage.getItem("decimalValue") == null ? 2 : localStorage.getItem("decimalValue");

      if (localStorage.getItem("currencyFormate") == null) {
        this.currencyformat = this.formatrray[0];
        this.defaultcurrency = this.currencyrray[0];
      } else {
        this.currencyformat = this.formatrray[1];
        this.defaultcurrency = this.currencyrray[1];
      }
    },
    getNarrationConfigurations() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        requestFrom: "WEB"
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getNarrationConfigurations(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            this.showNarration = response.data.data.showNarration;
            console.log("response narration", response.data.data)
            console.log("narration data", this.showNarration);
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          console.log(err);
        });
    },

    OutstandingsConfigurations() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        requestFrom: "WEB"
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getOutstandingsConfigurations(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            console.log("outstanding data", response.data.data.outstandings.viewOutstandingBy)
            this.billWiseOutstanding =
              response.data.data.outstandings.billByBillOutstanding;
            this.outstandingAdjustment =
              response.data.data.outstandings.outstandingByAdjustment;
            this.bankdetail =
              response.data.data.outstandings.showBankDetails;

            this.dategroupdata = response.data.data.outstandings.viewOutstandingBy;

            this.customizeddays =
              response.data.data.outstandings.isCustomisedAging;

            console.log("outstanding d000", response.data.data.outstandings.columnToShare)

            this.date =
              response.data.data.outstandings.columnToShare.pdfs.date;
            this.refNo =
              response.data.data.outstandings.columnToShare.pdfs.refNo;
            this.pendingAmount =
              response.data.data.outstandings.columnToShare.pdfs.pendingAmount;
            this.dueOn =
              response.data.data.outstandings.columnToShare.pdfs.dueOn;
            this.overDueByDays =
              response.data.data.outstandings.columnToShare.pdfs.overDueByDays;
            this.bankgroup =
              response.data.data.outstandings.setBankLedger;

            console.log("here data is ", this.date, this.refNo, this.pendingAmount, this.dueOn, this.overDueByDays, this.customizeddays, this.bankgroup)



            this.dateRangesDefault =
              response.data.data.outstandings.defaultAgings;
            console.log("defaultdateranges", this.dateRangesDefault);
            this.dateRanges =
              response.data.data.outstandings.customisedAgings;
            console.log("dateranges", this.dateRanges);
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          console.log(err);
        });
    },

    searchBanks() {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.getBankLedgersConfiguration(this.bankSearch);
      }, 300); // debounce for 300ms
    },

    getBankLedgersConfiguration(searchTerm = "", guidToMatch = "") {
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startLimit: 0,
        endLimit: 100,
        parent: ["Bank Accounts", 'Bank OCC A/c', 'Bank OD A/c'],
        searchTerm: searchTerm,
        requestFrom: "WEB",
        sortBy: "ledgerName",
        orderBy: 1,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgersGo(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            console.log(response.data.data);
            this.bankarray = response.data.data.list;
            this.bankgrouparray = response.data.data.list;

            // If guidToMatch is passed, get the bank name
            if (guidToMatch) {
              const foundBank = this.bankarray.find(
                bank => bank.guid === guidToMatch
              );
              if (foundBank) {
                this.bankSearch = foundBank.ledgerName;
              }
            }
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          console.log(err);
        });
    },

    selectBank(bank) {
      
      this.invoiceDetails.bankselected = bank.guid;
      this.bankSearch = bank.ledgerName;
      this.showBankOptions = false;
    },
    clearBankInput() {
        this.invoiceDetails.bankselected = "";
        this.bankSearch = ''; // Clear the input
        this.searchBanks(); // Trigger search with empty query
        this.showBankOptions = false; // Hide dropdown
    },
  
    hideBankOptions() {

      setTimeout(() => {
        this.showBankOptions = false;
      }, 200);
      
    },

    getSelectedTemplate(selectedOption) {
      this.selectedOptionId = selectedOption.pdfTemplate_id;

    },

    getInvoiceTemplate() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        type: "pdfTemplates"
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getAllPdfTemplatesConfigurations(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            console.log("all templated------", response.data.data);
            this.invoiceTemplateOptions = response.data.data.value;
            console.log("invoiceTemplateOptions", this.invoiceTemplateOptions)

          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          console.log(err);
        });
      this.getPdfTemplateConfigurations();
    },

    getPdfTemplateConfigurations() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        requestFrom: "WEB"
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getPdfTemplateConfigurations(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            if (response.data.status == 0) {
              this.selectedOptionId = this.invoiceTemplateOptions[0].pdfTemplate_id;
            } else {
              this.selectedOptionId =
                response.data.data.pdfTemplate;
            }
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          console.log(err);
        });
    },

    UpdateInvoiceTemplate() {
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        pdfTemplate: this.selectedOptionId,
        requestFrom: "WEB"
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.UpdateAllPdfTemplatesConfigurations(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            if (response.data.status != 0) {
              this.templateSuccess = true;

              setTimeout(() => {
                this.templateSuccess = false;
              }, 1500);

              this.getPdfTemplateConfigurations();
            } else {
              alert("data not saved");
            }
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          console.log(err);
        });
    },

    getConfiguarationForInvoice() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        requestFrom: "WEB"
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getInvoiceConfigurationsGo(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            //Invoice Detail Config
            if(response.data.data.showDetailedLR !== undefined){
              this.showDetailedLR = response.data.data.showDetailedLR == false ? '0': '1'
              this.selectedOptionradioledger = this.showDetailedLR == '1' ? 'Detailed' : 'Condensed';
              localStorage.setItem('reportFormat', this.selectedOptionradioledger)
            }
            this.invoiceDetails.ConsigneeDetails =
              response.data.data.vouchers.showConsigneeDetails;
            this.invoiceDetails.GodownName =
              response.data.data.vouchers.showGodownNumber;
            this.invoiceDetails.Narration =
              response.data.data.vouchers.showNarration;
            this.invoiceDetails.ShowStockExpire =
              response.data.data.vouchers.showExpiry;
            this.invoiceDetails.ShowStockDiscount =
              response.data.data.vouchers.showDiscount;
            this.invoiceDetails.ItemDescription =
              response.data.data.vouchers.showItemDescription;
            this.invoiceDetails.Batches =
              response.data.data.vouchers.showBatchNumber;
            this.invoiceDetails.InvoiceShareGST =
              response.data.data.vouchers.showItemWiseGSTRate;
            this.invoiceDetails.LedgerDescription =
              response.data.data.vouchers.showLedgerDescription;
            this.invoiceDetails.eWayBill =
              response.data.data.vouchers.showEwayBillDetails;
            this.invoiceDetails.BankAccount =
              response.data.data.vouchers.showBankDetails;
            this.invoiceDetails.bankselected =
              response.data.data.vouchers.setBankLedger;
            this.getBankLedgersConfiguration("", this.invoiceDetails.bankselected);
            this.invoiceDetails.ShowEInvoiceStatus =
              response.data.data.vouchers.isEInvoiceStatus;
            this.invoiceDetails.ShowEwayStatus =
              response.data.data.vouchers.isEwayStatus;

            // voucher Number Configurations
            this.voucherNumber.isSales =
              response.data.data.vouchers.voucherNumberConfiguration.sales.isSetDefaultNumber;
            this.voucherNumber.isSalesPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.sales.customizeVoucherNumber.prefix;
            this.voucherNumber.isSalesNumber =
              response.data.data.vouchers.voucherNumberConfiguration.sales.customizeVoucherNumber.number;
            this.voucherNumber.isSalesSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.sales.customizeVoucherNumber.suffix;

            this.voucherNumber.isSalesOrder =
              response.data.data.vouchers.voucherNumberConfiguration.salesorder.isSetDefaultNumber;
            this.voucherNumber.isSalesOrderPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.salesorder.customizeVoucherNumber.prefix;
            this.voucherNumber.isSalesOrderNumber =
              response.data.data.vouchers.voucherNumberConfiguration.salesorder.customizeVoucherNumber.number;
            this.voucherNumber.isSalesOrderSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.salesorder.customizeVoucherNumber.suffix;

            this.voucherNumber.isPurchase =
              response.data.data.vouchers.voucherNumberConfiguration.purchase.isSetDefaultNumber;
            this.voucherNumber.isPurchasePrefix =
              response.data.data.vouchers.voucherNumberConfiguration.purchase.customizeVoucherNumber.prefix;
            this.voucherNumber.isPurchaseNumber =
              response.data.data.vouchers.voucherNumberConfiguration.purchase.customizeVoucherNumber.number;
            this.voucherNumber.isPurchaseSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.purchase.customizeVoucherNumber.suffix;

            this.voucherNumber.isPurchaseOrder =
              response.data.data.vouchers.voucherNumberConfiguration.purchaseorder.isSetDefaultNumber;
            this.voucherNumber.isPurchaseOrderPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.purchaseorder.customizeVoucherNumber.prefix;
            this.voucherNumber.isPurchaseOrderNumber =
              response.data.data.vouchers.voucherNumberConfiguration.purchaseorder.customizeVoucherNumber.number;
            this.voucherNumber.isPurchaseOrderSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.purchaseorder.customizeVoucherNumber.suffix;

            this.voucherNumber.isReceipt =
              response.data.data.vouchers.voucherNumberConfiguration.receipt.isSetDefaultNumber;
            this.voucherNumber.isReceiptPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.receipt.customizeVoucherNumber.prefix;
            this.voucherNumber.isReceiptNumber =
              response.data.data.vouchers.voucherNumberConfiguration.receipt.customizeVoucherNumber.number;
            this.voucherNumber.isReceiptSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.receipt.customizeVoucherNumber.suffix;

            this.voucherNumber.isPeyment =
              response.data.data.vouchers.voucherNumberConfiguration.payment.isSetDefaultNumber;
            this.voucherNumber.isPeymentPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.payment.customizeVoucherNumber.prefix;
            this.voucherNumber.isPeymentNumber =
              response.data.data.vouchers.voucherNumberConfiguration.payment.customizeVoucherNumber.number;
            this.voucherNumber.isPeymentSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.payment.customizeVoucherNumber.suffix;

            this.voucherNumber.isCreditNote =
              response.data.data.vouchers.voucherNumberConfiguration.creditnote.isSetDefaultNumber;
            this.voucherNumber.isCreditNotePrefix =
              response.data.data.vouchers.voucherNumberConfiguration.creditnote.customizeVoucherNumber.prefix;
            this.voucherNumber.isCreditNoteNumber =
              response.data.data.vouchers.voucherNumberConfiguration.creditnote.customizeVoucherNumber.number;
            this.voucherNumber.isCreditNoteSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.creditnote.customizeVoucherNumber.suffix;

            this.voucherNumber.isDebitNote =
              response.data.data.vouchers.voucherNumberConfiguration.debitnote.isSetDefaultNumber;
            this.voucherNumber.isDebitNotePrefix =
              response.data.data.vouchers.voucherNumberConfiguration.debitnote.customizeVoucherNumber.prefix;
            this.voucherNumber.isDebitNoteNumber =
              response.data.data.vouchers.voucherNumberConfiguration.debitnote.customizeVoucherNumber.number;
            this.voucherNumber.isDebitNoteSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.debitnote.customizeVoucherNumber.suffix;

            this.voucherNumber.isJournal =
              response.data.data.vouchers.voucherNumberConfiguration.journal.isSetDefaultNumber;
            this.voucherNumber.isJournalPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.journal.customizeVoucherNumber.prefix;
            this.voucherNumber.isJournalNumber =
              response.data.data.vouchers.voucherNumberConfiguration.journal.customizeVoucherNumber.number;
            this.voucherNumber.isJournalSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.journal.customizeVoucherNumber.suffix;

            this.voucherNumber.isContra =
              response.data.data.vouchers.voucherNumberConfiguration.contra.isSetDefaultNumber;
            this.voucherNumber.isContraPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.contra.customizeVoucherNumber.prefix;
            this.voucherNumber.isContraNumber =
              response.data.data.vouchers.voucherNumberConfiguration.contra.customizeVoucherNumber.number;
            this.voucherNumber.isContraSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.contra.customizeVoucherNumber.suffix;

            this.voucherNumber.isQuotation =
              response.data.data.vouchers.voucherNumberConfiguration.quotation.isSetDefaultNumber;
            this.voucherNumber.isQuotationPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.quotation.customizeVoucherNumber.prefix;
            this.voucherNumber.isQuotationNumber =
              response.data.data.vouchers.voucherNumberConfiguration.quotation.customizeVoucherNumber.number;
            this.voucherNumber.isQuotationSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.quotation.customizeVoucherNumber.suffix;
            this.selectedOptionradio = response.data.data.ewayPDFFormat

            this.declarationchecked =
              response.data.data.vouchers.showDeclaration;
            this.CustomizedDeclaration =
              response.data.data.vouchers.customisedDeclaration;
            this.defaultDeclaration =
              response.data.data.vouchers.defaultDeclaration;

            this.invoiceHeader.invoiceheaderisChecked =
              response.data.data.vouchers.showCustomisedHeaders;
            console.log("invoice header", this.invoiceHeader.invoiceheaderisChecked)
            this.invoiceHeader.sales =
              response.data.data.vouchers.customisedHeaders.sales;
            console.log("invoice header", this.invoiceHeader.sales)

            this.invoiceHeader.salesOrder =
              response.data.data.vouchers.customisedHeaders.salesOrder;
            console.log("invoice header", this.invoiceHeader.salesOrder)

            this.invoiceHeader.Purchase =
              response.data.data.vouchers.customisedHeaders.purchase;
            console.log("invoice header", this.invoiceHeader.Purchase)

            this.invoiceHeader.PurchaseOrder =
              response.data.data.vouchers.customisedHeaders.purchaseOrder;
            console.log("invoice header", this.invoiceHeader.PurchaseOrder)

            this.invoiceHeader.Receipt =
              response.data.data.vouchers.customisedHeaders.receipt;
            console.log("invoice header", this.invoiceHeader.Receipt)

            this.invoiceHeader.Peyment =
              response.data.data.vouchers.customisedHeaders.payment;
            console.log("invoice header", this.invoiceHeader.Peyment)

            this.invoiceHeader.Contra =
              response.data.data.vouchers.customisedHeaders.contra;
            console.log("invoice header", this.invoiceHeader.Contra)

            this.invoiceHeader.Journal =
              response.data.data.vouchers.customisedHeaders.journal;
            console.log("invoice header", this.invoiceHeader.Journal)

            this.invoiceHeader.CreditNote =
              response.data.data.vouchers.customisedHeaders.creditNote;
            console.log("invoice header", this.invoiceHeader.CreditNote)

            this.invoiceHeader.DebitNote =
              response.data.data.vouchers.customisedHeaders.debitNote;
            console.log("invoice header", this.invoiceHeader.DebitNote)

            this.invoiceHeader.Quotation =
              response.data.data.vouchers.customisedHeaders.quotation;
            console.log("invoice header", this.invoiceHeader.Quotation)

            this.invoiceHeader.DeliveryNote =
              response.data.data.vouchers.customisedHeaders.deliveryNote;
            console.log("invoice header", this.invoiceHeader.DeliveryNote)


            this.DefaultHeaderStatic = response.data.data.vouchers.defaultHeaders
            console.log('default headers here', this.DefaultHeaderStatic)

            this.invoiceHeaderDefault.salesDefault =
              response.data.data.vouchers.defaultHeaders.sales.toUpperCase();;

            this.invoiceHeaderDefault.salesOrderDefault =
              response.data.data.vouchers.defaultHeaders.salesOrder.toUpperCase();;

            this.invoiceHeaderDefault.PurchaseDefault =
              response.data.data.vouchers.defaultHeaders.purchase.toUpperCase();;

            this.invoiceHeaderDefault.PurchaseOrderDefault =
              response.data.data.vouchers.defaultHeaders.purchaseOrder.toUpperCase();;

            this.invoiceHeaderDefault.ReceiptDefault =
              response.data.data.vouchers.defaultHeaders.receipt.toUpperCase();

            this.invoiceHeaderDefault.PeymentDefault =
              response.data.data.vouchers.defaultHeaders.payment.toUpperCase();;

            this.invoiceHeaderDefault.ContraDefault =
              response.data.data.vouchers.defaultHeaders.contra.toUpperCase();;

            this.invoiceHeaderDefault.JournalDefault =
              response.data.data.vouchers.defaultHeaders.journal.toUpperCase();;

            this.invoiceHeaderDefault.CreditNoteDefault =
              response.data.data.vouchers.defaultHeaders.creditNote.toUpperCase();;

            this.invoiceHeaderDefault.DebitNoteDefault =
              response.data.data.vouchers.defaultHeaders.debitNote.toUpperCase();;

            this.invoiceHeaderDefault.QuotationDefault =
              response.data.data.vouchers.defaultHeaders.quotation.toUpperCase();;

            this.invoiceHeaderDefault.DeliveryNoteDefault =
              response.data.data.vouchers.defaultHeaders.deliveryNote.toUpperCase();;


            setTimeout(() => {

              this.dynamicSignature = response.data.data.vouchers.setSignatureImage
              this.ShowdynamicSignature = response.data.data.vouchers.showSignatureImage
              this.dynamicLogo = response.data.data.vouchers.setCompanyLogoImage
              this.ShowdynamicLogo = response.data.data.vouchers.showCompanyLogoImage

              this.SignatureimagePreview =
                response.data.data.vouchers.setSignatureImage + '?' + new Date().getTime();
              console.log("set sign", this.SignatureimagePreview)
              this.imagePreview = response.data.data.vouchers.setCompanyLogoImage + '?' + new Date().getTime();

              console.log("image preview", this.imagePreview)

              this.showimageSelected =
                response.data.data.vouchers.showCompanyLogoImage;
              console.log("image showimageSelected", this.showimageSelected)

              this.SignatureshowimageSelected =
                response.data.data.vouchers.showSignatureImage;
              console.log("image SignatureshowimageSelected", this.SignatureshowimageSelected)



            }, 1000);

          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          console.log(err);
          this.loading = false;
        });
    },
    DefaultInvoiceUpdate(section) {

      this.invoiceHeaderError = []
      if ((section = "declaration")) {
        this.declarationchecked = false;
      } else if ((section = "header")) {
        this.invoiceHeader.invoiceheaderisChecked = false;
      }

      this.UpdateInvoiceConfigurations();
    },
    DefaultOutstandingUpdate(section) {
      // alert(section)
      if ((section = "Aeging")) {
        this.declarationchecked = false;
      }


      this.updateOutstandings();
    },


    updateVoucherNumber() {
      this.voucherNumberError = [];
      const voucherFields = [
        'isSales', 'isSalesOrder', 'isPurchase', 'isPurchaseOrder',
        'isReceipt', 'isPeyment', 'isCreditNote', 'isDebitNote',
        'isJournal', 'isContra', 'isQuotation'
      ];

      voucherFields.forEach(field => {
        if (!this.voucherNumber[field]) {
          if (this.voucherNumber[`${field}Number`] == "") {
            this.voucherNumberError[`${field}Number`] = "Please enter Number"
          }
        }
      });

      if (Object.keys(this.voucherNumberError).length === 0) {
        this.UpdateInvoiceConfigurations();
      }
    },

    UpdateDeclaration() {
      this.declarationError = []

      if (this.declarationchecked) {
        if (this.CustomizedDeclaration == "") {
          this.declarationError["declaration"] = "Please write Declaration"
        }
      }
      if (Object.keys(this.declarationError).length === 0) {
        this.UpdateInvoiceConfigurations()
      }

    },
    UpdateInvoiceHeader() {
      this.invoiceHeaderError = {};

      if (this.invoiceHeader.invoiceheaderisChecked) {
        const requiredFields = [
          'sales', 'CreditNote', 'Peyment', 'DeliveryNote', 'salesOrder',
          'Receipt', 'Journal', 'Quotation', 'Purchase', 'PurchaseOrder',
          'DebitNote', 'Contra'
        ];

        requiredFields.forEach(field => {
          if (this.invoiceHeader[field] === "") {
            this.invoiceHeaderError[field] = "Please Enter Header";
          }
        });
      }

      if (Object.keys(this.invoiceHeaderError).length === 0) {
        this.UpdateInvoiceConfigurations();
      }
    },
    UpdateInvoiceConfigurations() {
      this.invoiceHeaderError = []
      this.voucherNumberError = []
      this.declarationError = []

      if (this.invoiceDetails.BankAccount && (!this.bankSearch || !this.invoiceDetails.bankselected)) {
        this.invoiceDetails.BankAccount = false;
        this.invoiceDetails.bankselected = '';
        this.bankSearch = '';
      }

      const data = {
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        showConsigneeDetails: this.invoiceDetails.ConsigneeDetails,
        showEwayBillDetails: this.invoiceDetails.eWayBill,
        showBatchNumber: this.invoiceDetails.Batches,
        showGodownNumber: this.invoiceDetails.GodownName,
        showItemDescription: this.invoiceDetails.ItemDescription,
        showLedgerDescription: this.invoiceDetails.LedgerDescription,
        showNarration: this.invoiceDetails.Narration,
        showItemWiseGSTRate: this.invoiceDetails.InvoiceShareGST,
        showExpiry: this.invoiceDetails.ShowStockExpire,
        showDiscount: this.invoiceDetails.ShowStockDiscount,
        showInvoiceBankDetails: this.invoiceDetails.BankAccount,
        setInvoiceBankLedger: this.invoiceDetails.bankselected,
        showDeclaration: this.declarationchecked,
        customisedDeclaration: this.declarationchecked ? this.CustomizedDeclaration : this.defaultDeclaration,
        showCustomisedHeaders: this.invoiceHeader.invoiceheaderisChecked,
        isEInvoiceStatus: this.invoiceDetails.ShowEInvoiceStatus,
        isEwayStatus: this.invoiceDetails.ShowEwayStatus,
        ewayPDFFormat: this.selectedOptionradio,
        showDetailedLR: this.showDetailedLR == '0' || this.showDetailedLR === undefined || this.showDetailedLR === null ? false : true,
        customisedHeaders: {
          sales: this.invoiceHeader.sales,
          salesOrder: this.invoiceHeader.salesOrder,
          purchase: this.invoiceHeader.Purchase,
          purchaseOrder: this.invoiceHeader.PurchaseOrder,
          creditNote: this.invoiceHeader.CreditNote,
          debitNote: this.invoiceHeader.DebitNote,
          receipt: this.invoiceHeader.Receipt,
          payment: this.invoiceHeader.Peyment,
          journal: this.invoiceHeader.Journal,
          contra: this.invoiceHeader.Contra,
          deliveryNote: this.invoiceHeader.DeliveryNote,
          quotation: this.invoiceHeader.Quotation,
        },
        voucherNumberConfiguration: {
          contra: {
            customizeVoucherNumber: {
              number: this.voucherNumber.isContra ? "" : this.voucherNumber.isContraNumber,
              prefix: this.voucherNumber.isContra ? "" : this.voucherNumber.isContraPrefix,
              suffix: this.voucherNumber.isContra ? "" : this.voucherNumber.isContraSuffix
            },
            isSetDefaultNumber: this.voucherNumber.isContra
          },
          creditnote: {
            customizeVoucherNumber: {
              number: this.voucherNumber.isCreditNote ? "" : this.voucherNumber.isCreditNoteNumber,
              prefix: this.voucherNumber.isCreditNote ? "" : this.voucherNumber.isCreditNotePrefix,
              suffix: this.voucherNumber.isCreditNote ? "" : this.voucherNumber.isCreditNoteSuffix,
            },
            isSetDefaultNumber: this.voucherNumber.isCreditNote
          },
          debitnote: {
            customizeVoucherNumber: {
              number: this.voucherNumber.isDebitNote ? "" : this.voucherNumber.isDebitNoteNumber,
              prefix: this.voucherNumber.isDebitNote ? "" : this.voucherNumber.isDebitNotePrefix,
              suffix: this.voucherNumber.isDebitNote ? "" : this.voucherNumber.isDebitNoteSuffix,
            },
            isSetDefaultNumber: this.voucherNumber.isDebitNote,
          },
          journal: {
            customizeVoucherNumber: {
              number: this.voucherNumber.isJournal ? "" : this.voucherNumber.isJournalNumber,
              prefix: this.voucherNumber.isJournal ? "" : this.voucherNumber.isJournalPrefix,
              suffix: this.voucherNumber.isJournal ? "" : this.voucherNumber.isJournalSuffix,
            },
            isSetDefaultNumber: this.voucherNumber.isJournal
          },
          payment: {
            customizeVoucherNumber: {
              number: this.voucherNumber.isPeyment ? "" : this.voucherNumber.isPeymentNumber,
              prefix: this.voucherNumber.isPeyment ? "" : this.voucherNumber.isPeymentPrefix,
              suffix: this.voucherNumber.isPeyment ? "" : this.voucherNumber.isPeymentSuffix,
            },
            isSetDefaultNumber: this.voucherNumber.isPeyment,
          },
          purchase: {
            customizeVoucherNumber: {
              number: this.voucherNumber.isPurchase ? "" : this.voucherNumber.isPurchaseNumber,
              prefix: this.voucherNumber.isPurchase ? "" : this.voucherNumber.isPurchasePrefix,
              suffix: this.voucherNumber.isPurchase ? "" : this.voucherNumber.isPurchaseSuffix,
            },
            isSetDefaultNumber: this.voucherNumber.isPurchase
          },
          purchaseorder: {
            customizeVoucherNumber: {
              number: this.voucherNumber.isPurchaseOrder ? "" : this.voucherNumber.isPurchaseOrderNumber,
              prefix: this.voucherNumber.isPurchaseOrder ? "" : this.voucherNumber.isPurchaseOrderPrefix,
              suffix: this.voucherNumber.isPurchaseOrder ? "" : this.voucherNumber.isPurchaseOrderSuffix,
            },
            isSetDefaultNumber: this.voucherNumber.isPurchaseOrder
          },
          receipt: {
            customizeVoucherNumber: {
              number: this.voucherNumber.isReceipt ? "" : this.voucherNumber.isReceiptNumber,
              prefix: this.voucherNumber.isReceipt ? "" : this.voucherNumber.isReceiptPrefix,
              suffix: this.voucherNumber.isReceipt ? "" : this.voucherNumber.isReceiptSuffix,
            },
            isSetDefaultNumber: this.voucherNumber.isReceipt
          },
          sales: {
            customizeVoucherNumber: {
              number: this.voucherNumber.isSales ? "" : this.voucherNumber.isSalesNumber,
              prefix: this.voucherNumber.isSales ? "" : this.voucherNumber.isSalesPrefix,
              suffix: this.voucherNumber.isSales ? "" : this.voucherNumber.isSalesSuffix,
            },
            isSetDefaultNumber: this.voucherNumber.isSales
          },
          salesorder: {
            customizeVoucherNumber: {
              number: this.voucherNumber.isSalesOrder ? "" : this.voucherNumber.isSalesOrderNumber,
              prefix: this.voucherNumber.isSalesOrder ? "" : this.voucherNumber.isSalesOrderPrefix,
              suffix: this.voucherNumber.isSalesOrder ? "" : this.voucherNumber.isSalesOrderSuffix
            },
            isSetDefaultNumber: this.voucherNumber.isSalesOrder,
          },
          quotation: {
            customizeVoucherNumber: {
              number: this.voucherNumber.isQuotation ? "" : this.voucherNumber.isQuotationNumber,
              prefix: this.voucherNumber.isQuotation ? "" : this.voucherNumber.isQuotationPrefix,
              suffix: this.voucherNumber.isQuotation ? "" : this.voucherNumber.isQuotationSuffix
            },
            isSetDefaultNumber: this.voucherNumber.isQuotation
          }
        }



      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.updateInvoiceConfigurations(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            console.log("update invoice data", response.data.data);
            this.templateSuccess = true;

            this.getConfiguarationForInvoice();

            setTimeout(() => {
              this.templateSuccess = false;
            }, 1500);
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          console.log(err);

        });
    },
    // initializeCounter() {
    //   const savedData = JSON.parse(localStorage.getItem("dailyLimit")) || {};
    //   const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

    //   if (savedData.date !== today) {
    //     // Reset count if date is different
    //     localStorage.setItem("dailyLimit", JSON.stringify({ date: today, count: 50 }));
    //     this.count = 0;
    //   } else {
    //     this.count = savedData.count;
    //   }
    // }
  },

  mounted() {
    if (localStorage.getItem('isWrite_isOptionalVoucher') === "false") {
      this.isOptionalVoucherEnabled = false;
    }
    else {
      this.isOptionalVoucherEnabled = true;
    }

    // this.initializeCounter();
    // this.checkLinkedStatus();
    this.getConfiguarationForInvoice();
    this.getInvoiceTemplate();
    // this.getBankLedgersConfiguration();
    this.getNarrationConfigurations();
    this.OutstandingsConfigurations();
    this.getCurrencyFormate();


  },
};
</script>

<style scoped>
.browse_file_img {
  margin: 50px 0 !important;
}

.deleteImage {
  color: red !important;
  font-weight: bold;
}

.disable_input {
  background-color: #F1F5F9;
  color: #a6a6a6;
  font-size: 20px;
  font-weight: 500;
  padding: 0px 10px;
  border-radius: 2px;
}

.digit_counter button.counter_input {
  background-color: #F1F5F9;
  color: black;
  font-size: 20px;
  font-weight: 500;
  padding: 0px 10px;
  border-radius: 2px;
}

span.error-validation-vch_no {
  text-align: left;
  display: block;
  color: #f00;
  font-size: 12px;
  padding-top: 5px
}

.ewaybillinvoiceformat {
  display: flex;
  align-items: center;
}.LedgerReportFormatConfiguration h6 {
    font-size: 16px;
    font-weight: 600;
    margin: 10px 0 0 0 !important;
    border-top: 1px solid #ddd;
    padding-top: 10px;
}

.LedgerReportFormatConfiguration .invoice_radio_button {
    padding: 15px 10px 10px 0;
}

.LedgerReportFormatConfiguration .invoice_radio_button label {
    font-weight: 500;
}
</style>
