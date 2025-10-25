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
        <img src="/assets/images/1.0/brand/Loader-GIF-Final.gif" class="img-fluid loader_css" height="40" width="40" />
      </div>
    </div>
    <!-- end loader -->
    <div class="page-header-title-box dashboard-page-header">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 col-6">
          <div class="title_text" v-if="this.$route.params.voucher_id">
            <div v-if="isTransfer == '0'">
              <h4 class="page-title mb-0">Update Receipt</h4>
            </div>
            <div v-else-if="isTransfer == '1'">
              <h4 class="page-title mb-0">Receipt Voucher</h4>
            </div>
            <div v-else-if="isTransfer == '-1'">
              <h4 class="page-title mb-0">Update Receipt</h4>
            </div>
            <div v-else>
              <h4 class="page-title mb-0">Update Receipt</h4>
            </div>
          </div>
          <div class="title_text" v-else>
            <h4 class="page-title mb-0">Create Receipt</h4>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-6 text-right">
          <div class="title_text" v-if="this.$route.params.voucher_id">
            <div v-if="isPaid == '' || isPaid == null" v-b-modal.customerstatus-popup>
              <button type="button" class="btn download_border_btn">
                <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid" />View Pdf<img class="pdf_button_crown"
                  src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
              </button>
            </div>
            <div v-else>
              <button type="button" @click="backentryPdf()" class="btn download_border_btn without_crown_button_design">
                <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid" />View Pdf
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div v-if="voucher_error" id="tax_div_move_top" class="qrl_error_box">
      <p> {{ voucher_error }} </p>
    </div>

    <div class="main_card">
      <div v-if="this.$route.params.voucher_id" class="card">
        <form id="add_party_form" v-on:submit.prevent="checkBillUpdateCountCount">
          <div class="new_party_form">
            <div class="row">
              <div class="col-lg-6 col-12">
                <div class="form-group input_new_textbox mb-4">
                  <div class="label_mb_input">Voucher Type</div>
                  <div class="sales_cstm_dropdown input_light_border">
                    <form autocomplete="off" @submit.prevent class="input-disable-overlay-hide-all-div">
                      <Dropdown :options="voucherTypes" v-on:selected="getNextVoucherNumber"
                        v-on:filter="voucherTypeFilter" v-model="voucherType" :disabled="isTransfer === '1'"
                        :maxItem="10" :placeholder="`${this.voucherType}`" autocomplete="off">
                      </Dropdown>
                    </form>
                    <span class="error-validation" v-if="error.voucher_type">{{
                      error.voucher_type
                    }}</span>
                  </div>


                  <!-- <span class="error-validation" v-if="error.voucherNumber">{{ error.voucherNumber }}</span> -->
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group input_new_textbox mb-4" style="position: relative;">
                  <div class="label_mb_input">Voucher Number</div>
                  <input @input="html_tag_notaccept('voucherNumber', $event)" type="text" v-model="voucherNumber"
                    placeholder="" class="form-control only-input-disable-all-hide-overlay" :disabled="true"
                    autocomplete="off" />
                  <p class="mb-0 " style="
                    position: absolute; 
                    right: 10px; 
                    top: 68%; 
                    transform: translateY(-50%); 
                    color: #aaa; 
                    cursor: pointer;
                     " :disabled="isTransfer === '1'">
                    <a v-if="VoucherEditable && voucherType" href="javascript:void(0);" @click="toggleEdit">
                      <i class="fa fa-pencil text-dark" aria-hidden="true"></i>
                    </a>
                  </p>
                  <form v-if="isEditing" @submit.prevent>
                    <div class="editVoucherboxRechanges CreateReceiptEditPopupSet" v-click-outside="closeEvent">
                      <div v-if="VoucherEditable" class="invoice_radio_button">
                        <input type="radio" class="invoice_radio" id="defaultRadio" name="radioGroup" value="default"
                          v-model="selectedOptionradio" @change="handleDefault" autocomplete="off" />
                        <label for="defaultRadio" class="fontssetlabelRechanges">Default</label>
                      </div>
                      <div v-if="VoucherEditable" class="custominputboxnewentryradioRechanges">
                        <div class="invoice_radio_button">
                          <input type="radio" class="invoice_radio" id="customRadio" name="radioGroup" value="custom"
                            v-model="selectedOptionradio" autocomplete="off" />
                          <label for="customRadio" class="fontssetlabelRechanges">Custom</label>
                        </div>
                        <div class="onlyinputcustomradioRechanges">
                          <input type="text" :disabled="isDefaultSelected || isTransfer == 1""
                      placeholder=" Prefix" class="form-control me-2" @input="validateInput" v-model="custom_prefix" />

                          <input type="number" :disabled="isDefaultSelected || isTransfer == 1""
                      placeholder=" Voucher no" class="form-control me-2" v-model="custom_Voucher_number"
                            @keypress="allowOnlyNumbers" />

                          <input type="text" :disabled="isDefaultSelected || isTransfer == 1""
                      placeholder=" Suffix" class="form-control" v-model="custom_suffix"
                            @input="handleVoucherSuffixInput" />
                        </div>
                      </div>
                      <span class="error-validation" v-if="vouchernumberError.PrefixError">{{
                        vouchernumberError.PrefixError
                      }}</span>
                      <br />
                      <span class="error-validation" v-if="vouchernumberError.custom_Voucher_numberError">{{
                        vouchernumberError.custom_Voucher_numberError }}</span>
                      <!-- <div class="mt-3 border-top pt-3 pb-3"> -->
                      <!-- Reference Type Dropdown -->
                      <!-- <div class="ReferencetypesearchRechanges">
                          <span class="borderlinetextdropdownRechanges">Reference Type</span>
                          <input type="text" v-model="referenceSearchQuery" @focus="ReferencetoggleDropdown(true)"
                            @blur="ReferencetoggleDropdown(false)" @input="ReferencefilterOptions"
                            @keydown="handleReferenceKeydown" placeholder="Search..." ref="referenceInput"
                            :disabled="isTransfer == 1" />
                          <button :disabled="isTransfer == 1" v-if="referenceSearchQuery" @click="ReferenceclearSearch"
                            class="inputcrossiconRechanges">
                            <i class="fa fa-times"></i>
                          </button>
                          <ul v-if="referenceDropdownOpen" class="SetScrollbarWidthSize">
                            <li v-for="(option, index) in referenceFilteredOptions" :key="option.value"
                              :class="{ active: index === referenceActiveIndex }"
                              @mousedown.prevent="ReferenceselectOption(option)">
                              {{ option.label }}
                            </li>
                          </ul>
                          <input class="mt-3" v-model="billNumberData"
                            v-if="referenceSearchQuery == 'New Reference' || referenceSearchQuery == 'New Ref'"
                            placeholder="Bill Number" />
                          <span class="error-validation" v-if="vouchernumberError.billNumberError">
                            {{ vouchernumberError.billNumberError }}
                          </span>
                        </div>
                      </div> -->
                      <div class="SAveCancelButtonRechanges text-right border-top pt-3">
                        <button @click="toggleEdit" class="VoucherCancelButtonRechanges me-2">
                          Cancel
                        </button>
                        <button :disabled="isTransfer == 1" @click="saveEdit" class="VoucherSaveButtonRechanges">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>

                  <!-- <span class="error-validation" v-if="error.voucherNumber">{{ error.voucherNumber }}</span> -->
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group mb-4">
                  <div class="label_mb_input">
                    Select Party Name<span class="required_red">*</span>
                  </div>
                  <div class="sales_cstm_dropdown input_light_border input-disable-overlay-hide-all-div">
                    <Dropdown :options="partyData" v-on:selected="partySelected" v-on:filter="partyfilter"
                      v-model="party_name" :disabled="isTransfer === '1'" :maxItem="10"
                      :placeholder="`${this.select_party}`" autocomplete="off">
                    </Dropdown>
                    <span class="error-validation" v-if="error.party_name">{{
                      error.party_name
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group mb-4">
                  <div class="label_mb_input">Select Date</div>
                  <div class="datepicker_image_set mb-4 input-disable-overlay-hide-all-div">
                    <span class="sales_date_img_new">
                      <img src="/assets/images/1.0/sales/calendar.svg" class="img-fluid" />
                    </span>
                    <Datepicker v-model="customDate" format="dd MMM yyyy" placeholder="Date"
                      :disabled="isTransfer === '1'" :disabled-dates="disabledBookDates">
                    </Datepicker>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group mb-4">
                  <div class="label_mb_input">
                    Select Transaction Type<span class="required_red">*</span>
                  </div>

                  <div class="sales_cstm_dropdown">

                    <select name="under" ref="my_input" id="under" class="form-select input_light_border_dropdown"
                      v-model="transaction_type" @change="transaction_type_change($event)"
                      :disabled="isTransfer === '1'">
                      <option value="">Select Transaction Type</option>
                      <option v-for="(transaction, index) in transactionData" :value="transaction" :key="index"
                        :data-id="transaction._id">
                        {{ transaction }}
                      </option>
                    </select>
                    <span class="error-validation" v-if="error.transaction_type">{{ error.transaction_type }}</span>
                  </div>
                </div>
              </div>
              <!-- <div class="col-lg-6 col-12">
                <div class="form-group mb-4">
                  <div class="label_mb_input">
                    Select Ledger<span class="required_red">*</span>
                  </div>


                  <div class="sales_cstm_dropdown">
                    <select name="under" ref="my_input" id="under" class="form-select input_light_border_dropdown"
                      v-model="ledger" @change="ledgerChange($event)" :disabled="isTransfer === '1'">
                      <option value="">Select Ledger</option>
                      <option v-for="(ledger, index) in LedgerData" :value="ledger.ledgerName" :key="index"
                        :data-guid="ledger.guid">
                        {{ ledger.ledgerName }}
                      </option>
                    </select>
                    <span class="error-validation" v-if="error.ledger_name">{{
                      error.ledger_name
                      }}</span>
                  </div>
                </div>
              </div> -->
              <div class="col-lg-6 col-12">
                <div class="form-group mb-4">
                  <div class="label_mb_input">
                    Select ledger<span class="required_red">*</span>
                  </div>
                  <div class="sales_cstm_dropdown input_light_border">
                    <form autocomplete="off" @submit.prevent class="input-disable-overlay-hide-all-div">
                      <Dropdown ref="ledgerDropdown" :options="LedgerData" v-on:selected="handleLedgerChange"
                        v-on:filter="ledgerNameFilter" :disabled="isTransfer === '1'" :maxItem="10"
                        :placeholder="`${this.select_ledgerName}`" autocomplete="off">
                      </Dropdown>
                    </form>
                    <span class="error-validation" v-if="error.ledger_name">{{
                      error.ledger_name
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group input_new_textbox mb-4">
                  <div class="label_mb_input">Closing Balance</div>
                  <input type="text" disabled placeholder="Closing Balance"
                    class="form-control only-input-disable-all-hide-overlay" :value="`${this.closingBalance}`"
                    :disabled="true" autocomplete="off" />
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group input_new_textbox mb-4">
                  <div class="label_mb_input">
                    Amount<span class="required_red">*</span>
                  </div>
                  <input type="text" step="0.01" @keydown="handleKeyDown" :v-model="amount"
                    @change="amountChange($event)" placeholder="Amount"
                    @input="limitDecimalPlaces('Amount', $event)"
                    @blur = "toggleAmount(false, $event)"
                    class="form-control only-input-disable-all-hide-overlay" :value="`${this.amount}`"
                    :disabled="isTransfer === '1'" autocomplete="off" />
                  <span class="error-validation" v-if="error.amount_error">{{
                    error.amount_error
                  }}</span>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group input_new_textbox mb-4">
                  <div class="label_mb_input">Narration</div>
                  <input @input="html_tag_notaccept('narration', $event)" type="text" v-model="narration"
                    placeholder="Enter Narration" class="form-control only-input-disable-all-hide-overlay" value=""
                    autocomplete="off" :disabled="isTransfer === '1'" />
                  <span class="error-validation" v-if="
                    isWordLimitExceeded
                  "> Word limit exceeded! Maximum 500 words allowed.</span>

                </div>
              </div>
              <div class="col-lg-6 col-12">
                <p>&nbsp; &nbsp; &nbsp;</p>
              </div>

              <div class="col-lg-6 col-12" v-if="add_bill_button == '1'">
                <a @click="open_popup_update($event)" v-if="isTransfer === '0' || isTransfer === '-1'" href="#">Add
                  Bill</a>
                <a v-if="isTransfer === '1'">Bills</a>
              </div>
              <div class="col-lg-12 col-12 mt-3">
                <div class="AddBillAfterTable">
                  <table width="100%">
                    <tr v-for="(item, index) in receiptCrList" :key="index">
                      <td width="5%">{{ item.billRef }}</td>
                      <td width="50%">Due Date: <b>{{ format_date(item.dueDate) }}</b></td>
                      <td width="40%"><span class="font_sans">{{ symbol }}</span> {{ parseFloat(item.amount).toFixed(totalDecimalValueForRate)
                      }}</td>
                      <td align="center" width="5%" v-if="isTransfer === '0' || isTransfer === '-1'"><a
                          href="javascript:void(0);" @click="removeItemCr(index)"><i class="fa fa-times"></i></a></td>
                    </tr>
                    <tr v-for="(item, index) in receiptAgainstList" :key="index">
                      <td width="5%">{{ item.billRef }}</td>
                      <td width="50%">Due Date: <b>{{ format_date(item.dueDate) }}</b></td>
                      <td width="40%"><span class="font_sans">{{ symbol }}</span> {{ parseFloat(item.amount).toFixed(totalDecimalValueForRate)
                      }}</td>
                      <td align="center" width="5%" v-if="isTransfer === '0' || isTransfer === '-1'"><a
                          href="javascript:void(0);" @click="removeItem(index)"><i class="fa fa-times"></i></a></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div v-if="this.transactionseletedname == 'Cheque/DD'">
              <div class="row">
                <div class="col-lg-12 col-12">
                  <h4 class="heading-create-title">Bank Details</h4>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-12">
                  <div class="form-group input_new_textbox mb-4">
                    <div class="label_mb_input">Cheque Number <span class="required_red">*</span></div>
                    <input type="number"
                      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                      maxlength="10" @keydown="handleKeyDown" v-model="cheque_number" placeholder="Cheque Number"
                      class="form-control only-input-disable-all-hide-overlay" v-on:wheel="disableMouseWheelScroll"
                      value="" :disabled="isTransfer === '1'" autocomplete="off" />
                    <span class="error-validation" v-if="error.cheque_number">{{
                      error.cheque_number
                    }}</span>
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="form-group mb-4">
                    <div class="label_mb_input">Cheque Date</div>
                    <div class="datepicker_image_set mb-4 input-disable-overlay-hide-all-div">
                      <span class="sales_date_img_new">
                        <img src="/assets/images/1.0/sales/calendar.svg" class="img-fluid" />
                      </span>
                      <Datepicker v-model="bankDate" format="dd MMM yyyy" placeholder="Date"
                        :disabled="isTransfer === '1'">
                      </Datepicker>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="form-group input_new_textbox mb-4">
                    <div class="label_mb_input">
                      Select Bank<span class="required_red">*</span>
                    </div>


                    <div class="sales_cstm_dropdown SelectBankNewSearchanbleInputPortion">
                      <!-- <select name="under" ref="my_input" id="under" class="form-select input_light_border_dropdown"
                        v-model="bank_name" @change="bankChange($event)" :disabled="isTransfer === '1'">
                        <option value="">Select Bank</option>
                        <option v-for="(ledger, index) in bankList" :value="ledger" :key="index"
                          :data-bankAccountNumber="ledger.bankAccountNumber">
                          {{ ledger }}
                        </option>
                      </select> -->
                      <span class="searchIconCreateReceiptSerchable">
                        <i class="fa fa-search"></i>
                      </span>
                      <input name="under" ref="my_input" id="under" class="form-select input_light_border_dropdown"
                        v-model="bank_name" :disabled="isTransfer === '1'" @focus="toggleBankFunction(true)"
                        @blur="toggleBankFunction(false)" type="text" placeholder="select bank" @input="filterBanks" />
                        <!-- Down Arrow: show only when no value -->
                        <span v-if="!bank_name" class="DownarrowIconCreateReceiptSearchableDropdown">
                          <i class="fa fa-chevron-down"></i>
                        </span>

                        <!-- Cross icon: show only when value exists -->
                        <span v-if="bank_name" class="CrossIconCreateReceiptSearchableDropdown">
                          <i @click="String(isTransfer) !== '1' ? clearBankSearch() : null" class="fa fa-times"></i>
                        </span>
                      <ul v-if="showBankDropdown" class="SelectBankSearchPortionUl">
                        <li v-for="(ledger, index) in bankList" @mousedown="bankChange(ledger)" >
                          {{ ledger }}
                        </li>
                      </ul>
                      <span class="error-validation" v-if="error.bank_name">{{
                        error.bank_name
                      }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="form-group input_new_textbox mb-4">
                    <div class="label_mb_input">Bank Account Number</div>
                    <input type="number" @keydown="handleKeyDown"
                      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                      maxlength="17" v-model="bank_account_number" v-on:wheel="disableMouseWheelScroll"
                      placeholder="Bank Account Number" class="form-control only-input-disable-all-hide-overlay"
                      value="" :disabled="isTransfer === '1'" autocomplete="off" />
                    <span class="error-validation" v-if="error.bank_account_number">{{
                      error.bank_account_number
                    }}</span>
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="form-group input_new_textbox mb-4">
                    <div class="label_mb_input">Instrument No</div>
                    <input type="text" @input="validateInstrumentNo"
                      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                      maxlength="15" @keydown="handleKeyDown" v-model="instrument_no" placeholder="Instrument No"
                      class="form-control only-input-disable-all-hide-overlay" value="" :disabled="isTransfer === '1'"
                      autocomplete="off" />
                    <span class="error-validation" v-if="error.instrument_no">{{
                      error.instrument_no
                    }}</span>
                  </div>
                </div>

              </div>
            </div>

            <div class="row">
              <div class="col-lg-12 col-12">
                <div class="form_bottom_button mt-4 mb-4 text-center" v-if="this.$route.params.voucher_id">
                  <div v-if="isTransfer === '0' || isTransfer === '-1'">
                    <button :disabled="isButtonDisabled" class="form_button black_button">
                      Update Receipt
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div v-else class="card">
        <form id="add_party_form" v-on:submit.prevent="checkBillCount">
          <div class="new_party_form">
            <div class="row">
              <div class="col-lg-6 col-12">
                <div class="form-group input_new_textbox mb-4">
                  <div class="label_mb_input">Voucher Type</div>
                  <div class="sales_cstm_dropdown input_light_border">
                    <form autocomplete="off" @submit.prevent class="input-disable-overlay-hide-all-div">
                      <Dropdown :options="voucherTypes" v-on:selected="getNextVoucherNumber"
                        v-on:filter="voucherTypeFilter" v-model="voucherType" :disabled="isTransfer === '1'"
                        :maxItem="10" :placeholder="placeholderText" autocomplete="off">
                      </Dropdown>
                    </form>
                    <span class="error-validation" v-if="error.voucher_type">{{
                      error.voucher_type
                    }}</span>
                  </div>


                  <!-- <span class="error-validation" v-if="error.voucherNumber">{{ error.voucherNumber }}</span> -->
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group input_new_textbox mb-4" style="position: relative;">
                  <div class="label_mb_input">Voucher Number</div>
                  <input @input="html_tag_notaccept('voucherNumber', $event)" type="text" v-model="voucherNumber"
                    placeholder="" class="form-control only-input-disable-all-hide-overlay" autocomplete="off"
                    :disabled="true" />
                  <p class="mb-0 " style="
                    position: absolute; 
                    right: 10px; 
                    top: 68%; 
                    transform: translateY(-50%); 
                    color: #aaa; 
                    cursor: pointer;
                    " :disabled="isTransfer === '1'">
                    <a v-if="VoucherEditable && voucherType" href="javascript:void(0);" @click="toggleEdit">
                      <i class="fa fa-pencil text-dark" aria-hidden="true"></i>
                    </a>
                  </p>
                  <form v-if="isEditing" @submit.prevent>
                    <div class="editVoucherboxRechanges CreateReceiptEditPopupSet" v-click-outside="closeEvent">
                      <div v-if="VoucherEditable" class="invoice_radio_button">
                        <input type="radio" class="invoice_radio" id="defaultRadio" name="radioGroup" value="default"
                          v-model="selectedOptionradio" @change="handleDefault" autocomplete="off" />
                        <label for="defaultRadio" class="fontssetlabelRechanges">Default</label>
                      </div>
                      <div v-if="VoucherEditable" class="custominputboxnewentryradioRechanges">
                        <div class="invoice_radio_button">
                          <input type="radio" class="invoice_radio" id="customRadio" name="radioGroup" value="custom"
                            v-model="selectedOptionradio" autocomplete="off" />
                          <label for="customRadio" class="fontssetlabelRechanges">Custom</label>
                        </div>
                        <div class="onlyinputcustomradioRechanges">
                          <input type="text" :disabled="isDefaultSelected || isTransfer == 1""
                      placeholder=" Prefix" class="form-control me-2" @input="validateInput" v-model="custom_prefix" />

                          <input type="number" :disabled="isDefaultSelected || isTransfer == 1""
                      placeholder=" Voucher no" class="form-control me-2" v-model="custom_Voucher_number"
                            @keypress="allowOnlyNumbers" />

                          <input type="text" :disabled="isDefaultSelected || isTransfer == 1""
                      placeholder=" Suffix" class="form-control" v-model="custom_suffix"
                            @input="handleVoucherSuffixInput" />
                        </div>
                      </div>
                      <span class="error-validation" v-if="vouchernumberError.PrefixError">{{
                        vouchernumberError.PrefixError
                      }}</span>
                      <br />
                      <span class="error-validation" v-if="vouchernumberError.custom_Voucher_numberError">{{
                        vouchernumberError.custom_Voucher_numberError }}</span>
                      <!-- <div class="mt-3 border-top pt-3 pb-3"> -->
                      <!-- Reference Type Dropdown -->
                      <!-- <div class="ReferencetypesearchRechanges">
                          <span class="borderlinetextdropdownRechanges">Reference Type</span>
                          <input type="text" v-model="referenceSearchQuery" @focus="ReferencetoggleDropdown(true)"
                            @blur="ReferencetoggleDropdown(false)" @input="ReferencefilterOptions"
                            @keydown="handleReferenceKeydown" placeholder="Search..." ref="referenceInput"
                            :disabled="isTransfer == 1" />
                          <button :disabled="isTransfer == 1" v-if="referenceSearchQuery" @click="ReferenceclearSearch"
                            class="inputcrossiconRechanges">
                            <i class="fa fa-times"></i>
                          </button>
                          <ul v-if="referenceDropdownOpen" class="SetScrollbarWidthSize">
                            <li v-for="(option, index) in referenceFilteredOptions" :key="option.value"
                              :class="{ active: index === referenceActiveIndex }"
                              @mousedown.prevent="ReferenceselectOption(option)">
                              {{ option.label }}
                            </li>
                          </ul>
                          <input class="mt-3" v-model="billNumberData"
                            v-if="referenceSearchQuery == 'New Reference' || referenceSearchQuery == 'New Ref'"
                            placeholder="Bill Number" />
                          <span class="error-validation" v-if="vouchernumberError.billNumberError">
                            {{ vouchernumberError.billNumberError }}
                          </span>
                        </div>
                      </div> -->
                      <div class="SAveCancelButtonRechanges text-right border-top pt-3">
                        <button @click="toggleEdit" class="VoucherCancelButtonRechanges me-2">
                          Cancel
                        </button>
                        <button :disabled="isTransfer == 1" @click="saveEdit" class="VoucherSaveButtonRechanges">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>

                  <!-- <span class="error-validation" v-if="error.voucherNumber">{{ error.voucherNumber }}</span> -->
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group mb-4">
                  <div class="label_mb_input">
                    Select Party Name<span class="required_red">*</span>
                  </div>
                  <div class="sales_cstm_dropdown input_light_border">
                    <form autocomplete="off" @submit.prevent class="input-disable-overlay-hide-all-div">
                      <Dropdown :options="partyData" v-on:selected="partySelected" v-on:filter="partyfilter"
                        v-model="party_name" :disabled="isTransfer === '1'" :maxItem="10"
                        placeholder="Select Party Name" autocomplete="off">
                      </Dropdown>
                    </form>
                    <span class="error-validation" v-if="error.party_name">{{
                      error.party_name
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group mb-4">
                  <div class="label_mb_input">Select Date</div>
                  <div class="datepicker_image_set mb-4 input-disable-overlay-hide-all-div">
                    <span class="sales_date_img_new">
                      <img src="/assets/images/1.0/sales/calendar.svg" class="img-fluid" />
                    </span>
                    <Datepicker :disabled="isTransfer === '1'" v-model="customDate" format="dd MMM yyyy"
                      placeholder="Date" :disabled-dates="disabledBookDates">
                    </Datepicker>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group mb-4">
                  <div class="label_mb_input">
                    Select Transaction Type<span class="required_red">*</span>
                  </div>

                  <div class="sales_cstm_dropdown">

                    <select name="under" ref="my_input" id="under" class="form-select input_light_border_dropdown"
                      v-model="transaction_type" @change="transaction_type_change($event)"
                      :disabled="isTransfer === '1'">
                      <option value="">Select Transaction Type</option>
                      <option v-for="(transaction, index) in transactionData" :value="transaction" :key="index"
                        :data-id="transaction._id">
                        {{ transaction }}
                      </option>
                    </select>
                    <span class="error-validation" v-if="error.transaction_type">{{ error.transaction_type }}</span>
                  </div>
                </div>
              </div>
              <!-- <div class="col-lg-6 col-12">
                <div class="form-group mb-4">
                  <div class="label_mb_input">
                    Select Ledger<span class="required_red">*</span>
                  </div>

                  <div class="sales_cstm_dropdown">
                    <select name="under" ref="my_input" id="under" class="form-select input_light_border_dropdown"
                      v-model="ledger" @change="ledgerChange($event)" :disabled="isTransfer === '1'">
                      <option value="">Select Ledger</option>
                      <option v-for="(ledger, index) in LedgerData" :value="ledger.ledgerName" :key="index"
                        :data-guid="ledger.guid">
                        {{ ledger.ledgerName }}
                      </option>
                    </select>
                    <span class="error-validation" v-if="error.ledger_name">{{
                      error.ledger_name
                      }}</span>
                  </div>
                </div>
              </div> -->
              <div class="col-lg-6 col-12">
                <div class="form-group mb-4">
                  <div class="label_mb_input">
                    Select ledger<span class="required_red">*</span>
                  </div>
                  <div class="sales_cstm_dropdown input_light_border">
                    <form autocomplete="off" @submit.prevent class="input-disable-overlay-hide-all-div">
                      <Dropdown ref="ledgerDropdown" :options="LedgerData" v-on:selected="handleLedgerChange"
                        v-on:filter="ledgerNameFilter" :disabled="isTransfer === '1'" :maxItem="10"
                        placeholder="Select ledger" autocomplete="off">
                      </Dropdown>
                    </form>
                    <span class="error-validation" v-if="error.ledger_name">{{
                      error.ledger_name
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group input_new_textbox mb-4">
                  <div class="label_mb_input">Closing Balance</div>
                  <input type="text" disabled readonly placeholder="Closing Balance"
                    class="form-control only-input-disable-all-hide-overlay" :value="`${this.closingBalance}`"
                    autocomplete="off" :disabled="isTransfer === '1'" />
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group input_new_textbox mb-4">
                  <div class="label_mb_input">
                    Amount<span class="required_red">*</span>
                  </div>
                  <input type="text" @wheel.prevent step="0.01" @keydown="handleKeyDown" :v-model="amount"
                    @change="amountChange($event)" placeholder="Amount"
                    @input="limitDecimalPlaces('Amount', $event)"
                    @blur = "toggleAmount(false, $event)"
                    class="form-control only-input-disable-all-hide-overlay" :value="`${this.amount}`"
                    autocomplete="off" :disabled="isTransfer === '1'" />
                  <span class="error-validation" v-if="error.amount_error">{{
                    error.amount_error
                  }}</span>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group input_new_textbox mb-4">
                  <div class="label_mb_input">Narration</div>
                  <input @input="html_tag_notaccept('narration', $event)" type="text" v-model="narration"
                    placeholder="Enter Narration" class="form-control only-input-disable-all-hide-overlay" value=""
                    autocomplete="off" :disabled="isTransfer === '1'" />
                  <span class="error-validation" v-if="
                    isWordLimitExceeded
                  "> Word limit exceeded! Maximum 500 words allowed.</span>

                </div>
              </div>
              <div class="col-lg-6 col-12">
                <p>&nbsp; &nbsp; &nbsp;</p>
              </div>

              <div class="col-lg-6 col-12" v-if="add_bill_button == '1'">
                <a @click="open_popup()" href="javascript:void(0);">Add Bill</a>
              </div>
              <div class="col-lg-12 col-12 mt-3">
                <div class="AddBillAfterTable">
                  <table width="100%">
                    <tr v-for="(item, index) in receiptCrList" :key="index">
                      <td width="5%">{{ item.billRef }}</td>
                      <td width="50%">Due Date: <b>{{ format_date(item.dueDate) }}</b></td>
                      <td width="40%"><span class="font_sans">{{ symbol }}</span> {{ parseFloat(item.amount).toFixed(totalDecimalValueForRate)
                      }}</td>
                      <td align="center" width="5%"><a href="javascript:void(0);" @click="removeItemCr(index)"><i
                            class="fa fa-times"></i></a></td>
                    </tr>
                    <tr v-for="(item, index) in receiptAgainstList" :key="index">
                      <td width="5%">{{ item.billRef }}</td>
                      <td width="50%">Due Date: <b>{{ format_date(item.dueDate) }}</b></td>
                      <td width="40%"><span class="font_sans">{{ symbol }}</span> {{
                        Math.abs(parseFloat(item.amount).toFixed(totalDecimalValueForRate))
                      }}</td>
                      <td align="center" width="5%"><a href="javascript:void(0);" @click="removeItem(index)"><i
                            class="fa fa-times"></i></a></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div v-if="this.transactionseletedname == 'Cheque/DD'">
              <div class="row">
                <div class="col-lg-12 col-12">
                  <h4 class="heading-create-title">Bank Details</h4>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-12">
                  <div class="form-group input_new_textbox mb-4">
                    <div class="label_mb_input">Cheque Number<span class="required_red">*</span></div>
                    <input type="number"
                      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                      maxlength="10" @keydown="handleKeyDown" v-model="cheque_number"
                      v-on:wheel="disableMouseWheelScroll" placeholder="Cheque Number"
                      class="form-control only-input-disable-all-hide-overlay" value="" autocomplete="off"
                      :disabled="isTransfer === '1'" />
                    <span class="error-validation" v-if="error.cheque_number">{{
                      error.cheque_number
                    }}</span>
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="form-group mb-4">
                    <div class="label_mb_input">Date</div>
                    <div class="datepicker_image_set mb-4 input-disable-overlay-hide-all-div">
                      <span class="sales_date_img_new">
                        <img src="/assets/images/1.0/sales/calendar.svg" class="img-fluid" />
                      </span>
                      <Datepicker v-model="bankDate" format="dd MMM yyyy" placeholder="Date">
                      </Datepicker>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="form-group input_new_textbox mb-4">
                    <div class="label_mb_input">
                      Select Bank<span class="required_red">*</span>
                    </div>


                    <div class="sales_cstm_dropdown SelectBankNewSearchanbleInputPortion">
                      <!-- <select name="under" ref="my_input" id="under" class="form-select input_light_border_dropdown"
                        v-model="bank_name" @change="bankChange($event)" :disabled="isTransfer === '1'">
                        <option value="">Select Bank</option>
                        <option v-for="(ledger, index) in bankList" :value="ledger" :key="index"
                          :data-bankAccountNumber="ledger.bankAccountNumber">
                          {{ ledger }}
                        </option>
                      </select> -->
                      <span class="searchIconCreateReceiptSerchable">
                        <i class="fa fa-search"></i>
                      </span>
                   <input name="under" ref="my_input" id="under" class="form-select input_light_border_dropdown"
                        v-model="bank_name" :disabled="isTransfer === '1'" @focus="toggleBankFunction(true)"
                        @blur="toggleBankFunction(false)" type="text" placeholder="select bank" @input="filterBanks" />
                         <!-- Down Arrow: show only when no value -->
                            <span v-if="!bank_name" class="DownarrowIconCreateReceiptSearchableDropdown">
                              <i class="fa fa-chevron-down"></i>
                            </span>

                            <!-- Cross icon: show only when value exists -->
                            <span v-if="bank_name" class="CrossIconCreateReceiptSearchableDropdown">
                              <i @click="String(isTransfer) !== '1' ? clearBankSearch() : null" class="fa fa-times"></i>
                            </span>
                       
                      <ul v-if="showBankDropdown" class="SelectBankSearchPortionUl">
                        <li v-for="(ledger, index) in bankList" @mousedown="bankChange(ledger)" >
                          {{ ledger }}
                        </li>
                      </ul>
                      <span class="error-validation" v-if="error.bank_name">{{
                        error.bank_name
                      }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="form-group input_new_textbox mb-4">
                    <div class="label_mb_input">Bank Account Number</div>
                    <input type="number"
                      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                      maxlength="17" @keydown="handleKeyDown" v-model="bank_account_number"
                      v-on:wheel="disableMouseWheelScroll" placeholder="Bank Account Number"
                      class="form-control only-input-disable-all-hide-overlay" value="" autocomplete="off"
                      :disabled="isTransfer === '1'" />
                    <span class="error-validation" v-if="error.bank_account_number">{{
                      error.bank_account_number
                    }}</span>
                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="form-group input_new_textbox mb-4">
                    <div class="label_mb_input">Instrument No</div>
                    <input type="text"
                      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                      maxlength="15" @keydown="handleKeyDown" v-model="instrument_no" @input="validateInstrumentNo"
                      placeholder="Instrument No" class="form-control only-input-disable-all-hide-overlay" value=""
                      autocomplete="off" :disabled="isTransfer === '1'" />
                    <span class="error-validation" v-if="error.instrument_no">{{
                      error.instrument_no
                    }}</span>
                  </div>
                </div>

              </div>
            </div>

            <div class="row">
              <div class="col-lg-12 col-12">
                <div class="form_bottom_button mt-4 mb-4 text-center">
                  <button :disabled="isButtonDisabled" class="form_button black_button">
                    Create Receipt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <b-modal ref="tally_receipt" id="tally_receipt" title="" hide-footer>
      <div class="tallybackup-popup-header">
        <div v-if="dialog_error" class="addreceipterrormessage mb-3">
          <p class="mb-0">{{ dialog_error }}</p>
        </div>
        <h4 v-if="isFromUpdate">Update Bills</h4>
        <h4 v-else>Add Bills</h4>
        <div class="col-lg-6 col-12">
          <input type="text" v-model="popup_amount" placeholder="Amount"
            class="form-control only-input-disable-all-hide-overlay" autocomplete="off" disabled />
        </div>
        <div class="col-lg-6 col-12">
          Current Outstanding : <span class="font_sans">{{ symbol }}</span> {{ Math.abs(current_outstanding) |
            formatNumber }}
        </div>
        <div class="receipt-addbill-design">
          <table width="100%">
            <tbody>
              <tr v-for="(data, index) in popup_data" :key="data.billRef">
                <td width="5%">{{ data.billRef }}</td>
                <td width="15%" v-if="data.closingBalance < 0">{{ Math.abs(data.closingBalance) | formatNumber }} DR
                </td>
                <td width="15%" v-else>{{ Math.abs(data.closingBalance) | formatNumber }} CR</td>
                <td width="20%"><span>Due Date:</span> {{ format_date(data.billDue) }}</td>
                <td width="40%">
                  <div class="invoice_radio_button">
                    <input type="radio" class="invoice_radio" :id="'agsreftradio' + index" :name="'reference' + index"
                      :value="'agsref' + index" v-model="data.selectedRef" autocomplete="off" />
                    <label :for="'agsreftradio' + index" class="me-3">Agst Ref</label>

                    <input type="radio" class="invoice_radio" :id="'newrefradio' + index" :name="'reference' + index"
                      :value="'newref' + index" v-model="data.selectedRef" autocomplete="off" />
                    <label :for="'newrefradio' + index">New Ref</label>
                  </div>
                </td>
                <td width="20%" v-if="data.closingBalance < 0">
                  <input type="number" @wheel.prevent v-model="data.inputAmount" @keydown="handleKeyDown"
                    @click="fillAmount(index)" @input="decreaseAmount(index, $event)" @mouseover="checkBillAmount(data)"
                    placeholder="Amount" class="form-control" value="" autocomplete="off" />
                  <label style="display: none;" :for="'newrefradio' + index"><span class="font_sans">{{ symbol }}</span>
                    {{
                      displayAmount(data.inputAmount, data.amount_data, data.closingBalance) | formatNumber }} Rem</label>
                </td>
                <td width="20%" v-else>
                  <input type="number" @wheel.prevent v-model="data.inputAmount" @keydown="handleKeyDown"
                    @click="fillAmount(index)" @input="increaseAmount(index, $event)" @mouseover="checkBillAmount(data)"
                    placeholder="Amount" class="form-control" value="" autocomplete="off" />
                  <label style="display: none;" :for="'newrefradio' + index"><span class="font_sans">{{ symbol }}</span>
                    {{
                      displayAmount(data.inputAmount, data.amount_data, data.closingBalance) | formatNumber }} Rem</label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="download_backup"><button @click="validateAmount">Add</button></div>
      <template>
      </template>
    </b-modal>

    <b-modal ref="on_account" id="on_account" title="On Account" hide-footer>
      <div class="tallybackup-popup-header">
        <p>{{ onAccountMsg }}</p>
        <!-- Button Container -->
        <div class="button-container">
          <button class="cancel-btn" @click="handleCancel">Cancel</button>
          <button class="create-name-btn" @click="handleCreateName">Create</button>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import GoogleAnalytics from "@/GoogleAnalytics";
import Api from "@/Api";
import Vue from "vue";
import moment from "moment";
import Dropdown from "../components/Dropdown.vue"
import Common from "@/Common";
import { BIconChevronCompactLeft } from "bootstrap-vue";
Vue.use(Dropdown);

Vue.filter("formatNumber", function (value) {
  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(
    value
  );
});


export default {
  name: "quotation",
  components: {
    Datepicker,
    Dropdown,
  },
  data() {
    return {
      parentTypeStore: {
        bank: [],
        cash: [],
        particulars: []
      },
      BookFromDate: localStorage.getItem('booksFrom'),
      isOptionalVoucherEnabled: false,
      isFirstTimeUserClick: true,
      isUpdate: false,
      invoiceDetailsBool: null,
      vouchernumberError: {},
      customisedHeaders: {},
      customizeVoucherNumber: {
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

        isPayment: false,
        isPaymentPrefix: "",
        isPaymentNumber: "",
        isPaymentSuffix: "",

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
      numberingMethod: [],
      selectedNumberingMethod: '',
      isSetDefaultNumberData: '',
      voucherTypeData: '',
      searchVoucherType: '',
      VoucherTypesId: '',
      voucherType: '',
      voucherTypes: [],
      voucherEditted: false,
      combinedVoucherNumber: '',
      billNumberData: '',
      billAllocationdetails: [
        {
          amount: 0,
          billCreditPeriod: "0",
          billDate: "",
          billId: "",
          billName: "",
          billType: "",
        },
      ],
      selectedOptionradio: "custom",
      custom_prefix: "",
      custom_Voucher_number: "",
      custom_suffix: "",
      // Reference Type Dropdown
      referenceSearchQuery: "",
      referenceDropdownOpen: false,
      referenceFilteredOptions: [],
      referenceOptions: [
        // Add your options here
        { value: 1, label: "No Account" },
        { value: 2, label: "New Reference" },
      ],
      referenceSelectedOption: { value: 1, label: "On Account" },
      referenceActiveIndex: -1,
      isEditing: false,
      isNumberisNone: false,
      isButtonDisabled: false,
      isWordLimitExceeded: false,
      searchLedgerName: '',
      select_ledgerName: "Select Ledger Name",
      isVoucherNumberEditable: true,
      popup_amount: "",
      symbol: "",
      current_outstanding: "0",
      add_bill_button: "0",
      receiptAgainstList: [],
      receiptCrList: [],
      onAccountMsg: '',
      sum: 0.0,
      crSum: 0.0,
      tempReceiptAgainstList: [],
      customDate: new Date(),
      isHidden: false,
      isHidden2: false,
      selectpartyname: "",
      selectledger: "",
      selecttype: "",
      partyData: [],
      search: "",
      transactionData: [],
      LedgerData: [],
      bankList: [],
      transactionseletedname: "",
      parentArray: [],
      ledgerEntries: [],
      transaction_type: "",
      ledger: "",
      voucherNumber: "",
      ledgerGuid: "",
      partyLedgerName: "",
      new_loading: true,
      closingBalance: 0,
      partyobject: {},
      amount: "",
      otherGuid: "",
      ledgerNameChange: "",
      otherobject: {},
      bankDate: "",
      cheque_number: "",
      bank_name: "",
      bank_account_number: "",
      instrument_no: "",
      bank_narration: "",
      error: [],
      narration: "",
      party_name: "",
      isTransfer: "",
      select_party: "Select Party Name",
      isPaid: "0",
      invoice_type: true,
      voucher_error: "",
      dialog_error: "",
      popup_data: [],
      isFromUpdate: false,
      totalDecimalValueForRate: localStorage.getItem('decimalPlaces'),
      voucherTypeGuid : '',
      showBankDropdown: false,
      allBanks: []
    };
  },
  created() { },
  watch: {
    referenceSearchQuery(newQuery) {
      if (newQuery === "") {
        this.ReferencefilterOptions();
      }
    },
    amount(newValue) {
      if (!newValue || parseFloat(newValue) <= 0 || isNaN(newValue)) {

        this.isButtonDisabled = true;

        this.error["amount_error"] = "Please enter valid amount";

      } else {

        this.isButtonDisabled = false;

      }

    },
  },
  computed: {
    disabledBookDates() {
      const minDate = new Date(this.BookFromDate); 
      return {
        to: new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate() - 0),
      };
    },
    placeholderText() {
      return this.voucherTypes.length === 1
        ? this.voucherTypes[0].name
        : 'Select voucher type';
    },
    isDefaultSelected() {
      return this.selectedOptionradio === "default";
    },
    VoucherEditable() {
      if (this.voucherTypeData && !this.selectedNumberingMethod) {
        return (
          (this.voucherTypeData === "Manual" && this.isSetDefaultNumberData) ||
          (!this.isSetDefaultNumberData && this.voucherTypeData !== "None" && this.voucherTypeData !== 'Automatic')
        );
      } else {
        return (
          (this.selectedNumberingMethod == "Manual" &&
            this.invoice_type == true) ||
          (this.invoice_type == false && this.selectedNumberingMethod != "None" && this.selectedNumberingMethod !== 'Automatic')
        );
      }

    },
    isNone() {
      const isVoucherNumberNone = localStorage.getItem('voucherType');

      if (isVoucherNumberNone == 'None' || isVoucherNumberNone == "Automatic") {
        return true;
      }
      else {
        return false;
      }

    }
  },
  methods: {
    preventDecrementBelowZero(event) {
      const currentValue = Number(event.target.value);
      if (event.keyCode === 40 && currentValue <= 0) {
        event.preventDefault();
      }
    },
    toggleBankFunction(isOpen){
      if(isOpen == true){
        this.showBankDropdown = true
      }
      else if(isOpen == false){
        this.showBankDropdown = false
      }
    },
    clearBankSearch(){
      this.bank_name = ''
      this.showBankDropdown = true
      this.bankList = this.allBanks.slice(0, 10);
      this.$nextTick(() => {
      this.$refs.my_input.focus();
  });
    },
    filterBanks() {
    if (this.bank_name.trim() == '') {
      this.bankList = this.allBanks.slice(0, 10);
    } else {
      this.bankList = this.allBanks.filter(bank =>
        bank.toLowerCase().includes(this.bank_name.toLowerCase())
      );
    }
  },
         limitDecimalPlaces(type, event) {
       if(type == 'Amount'){  
      const data = event.target.value.toString()
      if (data && data.includes('.')) {
        const [intPart, decimalPart] = data.split('.');
        if (decimalPart.length > this.totalDecimalValueForRate) {
          this.amount = parseFloat(`${intPart}.${decimalPart.slice(0, this.totalDecimalValueForRate)}`);
           event.target.value = this.amount;
        }
      }
    }
  },
     toggleAmount(isOpen, event) {
    if (isOpen == false) {
      let amount = event.target.value;
      this.amount = parseFloat(amount).toFixed(this.totalDecimalValueForRate);
    }
  },
    fillAmount(index) {
      if (this.isFirstTimeUserClick && this.popup_data[index].inputAmount == "") {
        this.$set(this.popup_data[index], "inputAmount", this.amount); // Ensure Vue detects the change
        this.$set(this.popup_data[index], "selectedRef", 'agsref' + index);
        this.popup_data = [...this.popup_data];
        this.$nextTick(() => console.log(this.popup_data)); // Ensure UI updates
        this.isFirstTimeUserClick = false;
      }
    },
    validateInstrumentNo() {
      // Allow only special characters, limit input to 6 characters
      this.instrument_no = this.instrument_no.replace(/[^a-zA-Z0-9]/g, "").slice(0, 15);
    },
    readDataFromAPI(queryToFetch) {
      const data = {
        _userId: localStorage.getItem("customerId"),
        ledgerId: queryToFetch,
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getLedgerSyncByIdGo(data, headers)
        .then((response) => {
          if (response.data.status != "0") {
            if (response.data.message == "AUTHENTICATION_FAILED") {
              localStorage.clear();
              window.location.href = "/";
            } else {
              this.ledgerGuid = response.data.data._id;
            }
          }
        })

        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },
    disableMouseWheelScroll: function (e) {
      e.preventDefault();
    },
    handleDefault() {
      // this.custom_Voucher_number = "";
      // this.custom_prefix = "";
      // this.custom_suffix = "";
      this.custom_prefix = this.customizeVoucherNumber.prefix;
      this.custom_suffix = this.customizeVoucherNumber.suffix;
      this.custom_Voucher_number = this.customizeVoucherNumber.number;
    },
    voucherTypeFilter(keyword) {
      this.searchVoucherType = keyword;
      // this.getVoucherType();
    },
    getNextVoucherNumber(selectedVoucherType) {
      this.voucherType = selectedVoucherType.name;
      this.VoucherTypesId = selectedVoucherType.id;


      if (this.VoucherTypesId !== undefined) {
        setTimeout(() => {
          this.combinedVoucherNumber = "";

          const matchedData = this.numberingMethod.find(
            (item) => item.voucherTypeName === this.voucherType
          );
          if (matchedData) {
            this.selectedNumberingMethod = matchedData.numberingmethod;
            this.voucherTypeGuid = matchedData.voucherTypeGuid ;
          } else {
            console.log(
              "No matching data found for the selected voucher type."
            );
          }
          this.custom_prefix = this.customizeVoucherNumber.prefix;
          this.custom_suffix = this.customizeVoucherNumber.suffix;
          this.custom_Voucher_number = this.customizeVoucherNumber.number;
        }, 0)
        this.getVoucherNumber();

      }



    },
    allowOnlyNumbers(event) {
      const charCode = event.which ? event.which : event.keyCode;
      if (charCode < 48 || charCode > 57) {
        event.preventDefault();
      }
      if (this.custom_Voucher_number && this.custom_Voucher_number.toString().length >= 10) {
        event.preventDefault();
        return;
      }
      this.voucherEditted = true;
    },
    // this funciton is to not allow user to initiate with any special charecters in prefix
    validateInput(event) {
      const regex = /^[A-Za-z0-9][A-Za-z0-9\s!@#\$%\^\&*\)\(+=._\/-]*$/;

      if (!regex.test(event.target.value)) {
        this.custom_prefix = event.target.value.slice(0, -1);
      }
      this.voucherEditted = true
    },
    handleVoucherSuffixInput() {
      this.voucherEditted = true
    },

    ReferencetoggleDropdown(open) {
      this.referenceDropdownOpen = open;
      if (open) {
        this.$nextTick(() => {
          this.$refs.referenceInput.focus();
        });
      } else {
        this.referenceActiveIndex = -1;
      }
    },
    ReferencefilterOptions() {
      const query = this.referenceSearchQuery.toLowerCase();
      this.referenceFilteredOptions = this.referenceOptions.filter((option) =>
        option.label.toLowerCase().includes(query)
      );
      this.referenceActiveIndex = -1;
      if (query == '') {
        this.referenceDropdownOpen = open;
      }
    },
    ReferenceselectOption(option) {
      this.referenceSelectedOption = option;
      this.referenceSearchQuery = option.label;
      this.referenceDropdownOpen = false;
      this.referenceActiveIndex = -1;
    },
    ReferenceclearSearch() {
      this.referenceSearchQuery = "";
      this.ReferencefilterOptions();
    },
    handleReferenceKeydown(event) {
      if (this.referenceDropdownOpen) {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          if (
            this.referenceActiveIndex <
            this.referenceFilteredOptions.length - 1
          ) {
            this.referenceActiveIndex++;
          }
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          if (this.referenceActiveIndex > 0) {
            this.referenceActiveIndex--;
          }
        } else if (event.key === "Enter") {
          event.preventDefault();
          if (this.referenceActiveIndex >= 0) {
            this.ReferenceselectOption(
              this.referenceFilteredOptions[this.referenceActiveIndex]
            );
          }
        } else if (event.key === "Escape") {
          this.ReferencetoggleDropdown(false);
        }
      }
    },
    hide() {
      this.isEditing = false;
    },
    closeEvent() {
      this.hide();
    },
    toggleEdit() {
      if (this.isTransfer === '1') {
        return;
      }
      this.isEditing = !this.isEditing;
      this.vouchernumberError = {};
      this.custom_prefix = this.customizeVoucherNumber.prefix;
      this.custom_suffix = this.customizeVoucherNumber.suffix;
      this.custom_Voucher_number = this.customizeVoucherNumber.number;
    },
    saveEdit() {
      if (this.selectedOptionradio == "custom") {
        if (this.voucherEditted) {
          if (this.VoucherEditable) {
            this.vouchernumberError = {};
            if (this.VoucherEditable) {
              if (
                this.custom_Voucher_number === "" ||
                this.custom_Voucher_number === "Voucher No"
              ) {
                this.vouchernumberError["custom_Voucher_numberError"] =
                  "Voucher No. is required";
              }
            }
            if (
              this.billNumberData == "" &&
              this.referenceSearchQuery == "New Reference"
            ) {
              this.vouchernumberError["billNumberError"] = "Bill No. is required";
            }
            if (Object.keys(this.vouchernumberError).length === 0) {
              this.updateInvoiceConfigurations();
              this.voucherEditted = false;
              this.toggleEdit();

            }
          }
          else {
            this.vouchernumberError = {};
            if (this.custom_Voucher_number === "") {
              {
                this.vouchernumberError["custom_Voucher_numberError"] =
                  "Voucher No. is required";
              }
            }
            else {
              this.toggleEdit()
            }

          }
        } else {
          // this.custom_Voucher_number = "";
          // this.custom_prefix = "";
          // this.custom_suffix = "";
          //this.updateInvoiceConfigurations();
          this.vouchernumberError = {};
          if (this.custom_Voucher_number === "") {
            {
              this.vouchernumberError["custom_Voucher_numberError"] =
                "Voucher No. is required";
            }
          }
          else {
            this.toggleEdit();
          }

        }
      } else {
        this.custom_prefix = '';
        this.custom_suffix = '';
        this.custom_Voucher_number = '';
        this.invoice_type = true;
        this.updateInvoiceConfigurations();
        this.getVoucherNumber();
        this.toggleEdit();
        this.custom_prefix = this.customizeVoucherNumber.prefix;
        this.custom_suffix = this.customizeVoucherNumber.suffix;
        this.custom_Voucher_number = this.customizeVoucherNumber.number;
      }
    },
    updateInvoiceConfigurations() {
      const data = {
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        showConsigneeDetails: this.invoiceDetailsBool.showConsigneeDetails,
        showEwayBillDetails: this.invoiceDetailsBool.showEwayBillDetails,
        showBatchNumber: this.invoiceDetailsBool.showBatchNumber,
        showGodownNumber: this.invoiceDetailsBool.showGodownNumber,
        showItemDescription: this.invoiceDetailsBool.showItemDescription,
        showLedgerDescription: this.invoiceDetailsBool.showLedgerDescription,
        showNarration: this.invoiceDetailsBool.showNarration,
        showItemWiseGSTRate: this.invoiceDetailsBool.showItemWiseGSTRate,
        showExpiry: this.invoiceDetailsBool.showExpiry,
        showDiscount: this.invoiceDetailsBool.showDiscount,
        showInvoiceBankDetails: this.invoiceDetailsBool.showInvoiceBankDetails,
        setInvoiceBankLedger: this.invoiceDetailsBool.setInvoiceBankLedger,
        showDeclaration: this.invoiceDetailsBool.showDeclaration,
        customisedDeclaration: this.customisedDeclaration,
        showCustomisedHeaders: this.invoiceDetailsBool.showCustomisedHeaders,
        // isEInvoiceStatus: this.isEInvoiceStatus,
        // isEwayStatus: this.isEwayStatus,
        // ewayPDFFormat: this.ewayPDFFormat,

        customisedHeaders: {
          sales: this.customisedHeaders.sales,
          salesOrder: this.customisedHeaders.salesOrder,
          purchase: this.customisedHeaders.purchase,
          purchaseOrder: this.customisedHeaders.purchaseOrder,
          creditNote: this.customisedHeaders.creditNote,
          debitNote: this.customisedHeaders.debitNote,
          receipt: this.customisedHeaders.receipt,
          payment: this.customisedHeaders.payment,
          journal: this.customisedHeaders.Journal,
          contra: this.customisedHeaders.contra,
          deliveryNote: this.customisedHeaders.deliveryNote,
          quotation: this.customisedHeaders.quotation,
        },
        voucherNumberConfiguration: {
          contra: {
            customizeVoucherNumber: {
              number: this.customizeVoucherNumber.isContra
                ? ""
                : this.customizeVoucherNumber.isContraNumber,
              prefix: this.customizeVoucherNumber.isContra
                ? ""
                : this.customizeVoucherNumber.isContraPrefix,
              suffix: this.customizeVoucherNumber.isContra
                ? ""
                : this.customizeVoucherNumber.isContraSuffix,
            },
            isSetDefaultNumber: this.customizeVoucherNumber.isContra,
          },
          creditnote: {
            customizeVoucherNumber: {
              number: this.customizeVoucherNumber.isCreditNote
                ? ""
                : this.customizeVoucherNumber.isCreditNoteNumber,
              prefix: this.customizeVoucherNumber.isCreditNote
                ? ""
                : this.customizeVoucherNumber.isCreditNotePrefix,
              suffix: this.customizeVoucherNumber.isCreditNote
                ? ""
                : this.customizeVoucherNumber.isCreditNoteSuffix,
            },
            isSetDefaultNumber: this.customizeVoucherNumber.isCreditNote,
          },
          debitnote: {
            customizeVoucherNumber: {
              number: this.customizeVoucherNumber.isDebitNote
                ? ""
                : this.customizeVoucherNumber.isDebitNoteNumber,
              prefix: this.customizeVoucherNumber.isDebitNote
                ? ""
                : this.customizeVoucherNumber.isDebitNotePrefix,
              suffix: this.customizeVoucherNumber.isDebitNote
                ? ""
                : this.customizeVoucherNumber.isDebitNoteSuffix,
            },
            isSetDefaultNumber: this.customizeVoucherNumber.isDebitNote,
          },
          journal: {
            customizeVoucherNumber: {
              number: this.customizeVoucherNumber.isJournal
                ? ""
                : this.customizeVoucherNumber.isJournalNumber,
              prefix: this.customizeVoucherNumber.isJournal
                ? ""
                : this.customizeVoucherNumber.isJournalPrefix,
              suffix: this.customizeVoucherNumber.isJournal
                ? ""
                : this.customizeVoucherNumber.isJournalSuffix,
            },
            isSetDefaultNumber: this.customizeVoucherNumber.isJournal,
          },
          payment: {
            customizeVoucherNumber: {
              number: this.customizeVoucherNumber.isPayment
                ? ""
                : this.customizeVoucherNumber.isPaymentNumber,
              prefix: this.customizeVoucherNumber.isPayment
                ? ""
                : this.customizeVoucherNumber.isPaymentPrefix,
              suffix: this.customizeVoucherNumber.isPayment
                ? ""
                : this.customizeVoucherNumber.isPaymentSuffix,
            },
            isSetDefaultNumber: this.customizeVoucherNumber.isPayment,
          },
          purchase: {
            customizeVoucherNumber: {
              number: this.customizeVoucherNumber.isPurchase
                ? ""
                : this.customizeVoucherNumber.isPurchaseNumber,
              prefix: this.customizeVoucherNumber.isPurchase
                ? ""
                : this.customizeVoucherNumber.isPurchasePrefix,
              suffix: this.customizeVoucherNumber.isPurchase
                ? ""
                : this.customizeVoucherNumber.isPurchaseSuffix,
            },
            isSetDefaultNumber: this.customizeVoucherNumber.isPurchase,
          },
          purchaseorder: {
            customizeVoucherNumber: {
              number: this.customizeVoucherNumber.isPurchaseOrder
                ? ""
                : this.customizeVoucherNumber.isPurchaseOrderNumber,
              prefix: this.customizeVoucherNumber.isPurchaseOrder
                ? ""
                : this.customizeVoucherNumber.isPurchaseOrderPrefix,
              suffix: this.customizeVoucherNumber.isPurchaseOrder
                ? ""
                : this.customizeVoucherNumber.isPurchaseOrderSuffix,
            },
            isSetDefaultNumber: this.customizeVoucherNumber.isPurchaseOrder,
          },
          receipt: {
            customizeVoucherNumber: {
              number: this.custom_Voucher_number,
              prefix: this.custom_prefix,
              suffix: this.custom_suffix || '',
            },
            isSetDefaultNumber: this.selectedOptionradio == "default" ? this.invoice_type : false,
          },
          sales: {
            customizeVoucherNumber: {
              number: this.customizeVoucherNumber.isSales
                ? ""
                : this.customizeVoucherNumber.isSalesNumber,
              prefix: this.customizeVoucherNumber.isSales
                ? ""
                : this.customizeVoucherNumber.isSalesPrefix,
              suffix: this.customizeVoucherNumber.isSales
                ? ""
                : this.customizeVoucherNumber.isSalesSuffix,
            },
            isSetDefaultNumber: this.customizeVoucherNumber.isSales,
          },
          salesorder: {
            customizeVoucherNumber: {
              number: this.customizeVoucherNumber.isSalesOrder
                ? ""
                : this.customizeVoucherNumber.isSalesOrderNumber,
              prefix: this.customizeVoucherNumber.isSalesOrder
                ? ""
                : this.customizeVoucherNumber.isSalesOrderPrefix,
              suffix: this.customizeVoucherNumber.isSalesOrder
                ? ""
                : this.customizeVoucherNumber.isSalesOrderSuffix,
            },
            isSetDefaultNumber: this.customizeVoucherNumber.isSalesOrder,
          },
          quotation: {
            customizeVoucherNumber: {
              number: this.customizeVoucherNumber.isQuotation
                ? ""
                : this.customizeVoucherNumber.isQuotationNumber,
              prefix: this.customizeVoucherNumber.isQuotation
                ? ""
                : this.customizeVoucherNumber.isQuotationPrefix,
              suffix: this.customizeVoucherNumber.isQuotation
                ? ""
                : this.customizeVoucherNumber.isQuotationSuffix,
            },
            isSetDefaultNumber: this.customizeVoucherNumber.isQuotation,
          },
        },
      };
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
            // console.log("update invoice data", response.data.data);
            // this.templateSuccess = true;
            this.InvoiceConfigurations();

            setTimeout(() => {
              this.templateSuccess = false;
              this.getVoucherNumber();
            }, 1500);
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          console.log(err);
        });
    },
    validateWordLimit() {
      const wordLimit = 500;
      const words = this.narration.trim().split(/\s+/).filter(word => word);
      if (words.length > wordLimit) {

        this.isWordLimitExceeded = true;

        // Trim the narration to the first 500 words

        this.narration = words.slice(0, wordLimit).join(" ");



      } else {

        this.isWordLimitExceeded = false;

      }

    },
    ledgerNameFilter(keyword) {
      this.searchLedgerName = keyword;
      this.LedgerDetails();
    },
    handleLedgerChange(data) {
      this.ledger = data.ledgerName;
      this.ledgerNameChange = data.ledgerName;
      this.otherGuid = data.guid;
      this.bankListDetails()


    },
    checkBillAmount(data) {
      if (data.closingBalance > 0) {
        // this.dialog_error = 'You cannot select exceeded bill';
      }
    },
    // getBillsFromMap() {


    //   for (let i = 0; i < this.popup_data.length; i++) {
    //     this.popup_data[i].inputAmount = "";
    //     if (this.popup_data[i].inputAmount === "") {
    //       // If inputAmount is empty, set amount_data to closing_balance
    //       this.popup_data[i].amount_data = this.popup_data[i].closingBalance;
    //     }
    //   }


    //   this.popup_data.forEach((outstandingBill, indexOfOutstandingBill) => {
    //     let syncBillDetails = {};

    //     const isSyncBillFound = this.receiptAgainstList.some((syncBill) => {
    //       if (outstandingBill.billRef === syncBill.billRef) {
    //         syncBillDetails = syncBill;
    //         return true;
    //       }
    //       return false;
    //     });




    //     if (isSyncBillFound) {
    //       // At this point, syncBillDetails already contains the matching syncBill

    //       // Update the outstandingBill with syncBillDetails
    //       outstandingBill.inputAmount = syncBillDetails.amount || { text: '' };
    //       if (syncBillDetails.reference.includes('agsref') || syncBillDetails.reference == 'Agst Ref') {
    //         outstandingBill.selectedRef = 'agsref' + indexOfOutstandingBill;
    //       } else {
    //         outstandingBill.selectedRef = 'newref' + indexOfOutstandingBill;
    //       }

    //       let inputValue = parseFloat(outstandingBill.inputAmount);
    //       if (!isNaN(inputValue)) {
    //         let newAmount = inputValue - Math.abs(this.popup_data[indexOfOutstandingBill].closingBalance);
    //         this.popup_data[indexOfOutstandingBill].amount_data = newAmount;
    //       } else {
    //         this.popup_data[indexOfOutstandingBill].amount_data = this.popup_data[indexOfOutstandingBill].closingBalance;
    //         outstandingBill.selectedRef = '';
    //       }
    //     } else {
    //       this.popup_data[indexOfOutstandingBill].selectedRef = '';
    //       this.popup_data[indexOfOutstandingBill].inputAmount = '';
    //     }
    //   });

    // },

    getBillsFromMap() {
      // Step 1: Reset inputAmount and initialize amount_data
      for (let i = 0; i < this.popup_data.length; i++) {
        this.popup_data[i].inputAmount = "";
        if (this.popup_data[i].inputAmount === "") {
          this.popup_data[i].amount_data = this.popup_data[i].closingBalance;
        }
      }

      this.popup_data.forEach((outstandingBill, indexOfOutstandingBill) => {
        let syncBillDetails = {};
        let isSyncBillFound = false;

        // Step 2: Check for a match in receiptAgainstList
        isSyncBillFound = this.receiptAgainstList.some((syncBill) => {
          if (outstandingBill.billRef === syncBill.billRef) {
            syncBillDetails = syncBill;
            return true;
          }
          return false;
        });

        // Step 3: If not found in receiptAgainstList, check in receiptCrList
        if (!isSyncBillFound) {
          isSyncBillFound = this.receiptCrList.some((syncBill) => {
            if (outstandingBill.billRef === syncBill.billRef) {
              syncBillDetails = syncBill;
              return true;
            }
            return false;
          });
        }

        if (isSyncBillFound) {
          // Step 4: Update outstandingBill with syncBillDetails
          outstandingBill.inputAmount = syncBillDetails.amount || { text: '' };

          if (syncBillDetails.reference.includes('agsref') || syncBillDetails.reference === 'Agst Ref') {
            outstandingBill.selectedRef = 'agsref' + indexOfOutstandingBill;
          } else {
            outstandingBill.selectedRef = 'newref' + indexOfOutstandingBill;
          }

          let inputValue = parseFloat(outstandingBill.inputAmount);
          if (!isNaN(inputValue)) {
            let newAmount = inputValue - Math.abs(this.popup_data[indexOfOutstandingBill].closingBalance);
            this.popup_data[indexOfOutstandingBill].amount_data = newAmount;
          } else {
            this.popup_data[indexOfOutstandingBill].amount_data = this.popup_data[indexOfOutstandingBill].closingBalance;
            outstandingBill.selectedRef = '';
          }
        } else {
          this.popup_data[indexOfOutstandingBill].selectedRef = '';
          this.popup_data[indexOfOutstandingBill].inputAmount = '';
        }
      });
    },

    open_popup_update(event) {
      if (event) {
        event.preventDefault(); // Prevent default action if event is passed
      }
      this.isFirstTimeUserClick = true;
      this.popup_amount = this.amount;
      this.error = [];
      this.dialog_error = '';
      this.getBillsFromMap();
      this.$refs.tally_receipt.show();
    },
    handleCancel() {
      this.$refs.on_account.hide();
    },
    handleCreateName() {

      var temp = {
        billDate: moment(String(this.customDate)).format("yyyy-MM-DD"),
        billType: "On Account",
        amount: Math.round((parseFloat(this.amount) + parseFloat(this.crSum)) - this.sum),
        billCreditperiod: '',
        billName: this.billNumberData,
        billId: ''
      };
      this.billAllocationdetails.push(temp);
      this.$refs.on_account.hide();
      if (this.isFromUpdate) {
        this.updatePayment();
      } else {
        this.addReceipt();
      }

    },

    removeItemCr(index) {
      this.isFirstTimeUserClick = true;
      if (confirm('Are you sure you want to remove this item?')) {
        this.receiptCrList.splice(index, 1);
      }
    },
    removeItem(index) {
      this.isFirstTimeUserClick = true;
      if (confirm('Are you sure you want to remove this item?')) {
        this.receiptAgainstList.splice(index, 1);
      }
    },

    validateAmount() {

      let valid = true;

      // Calculate total input amount
      // const totalInputAmount = this.popup_data.reduce((sum, item) => {
      //   const num = parseFloat(item.inputAmount);
      //   return sum + (isNaN(num) ? 0 : num);
      // }, 0);
      let totalInputAmount = 0;
      let crtotalInputAmount = 0;
      for (let i = 0; i < this.popup_data.length; i++) {
        if (this.popup_data[i].closingBalance < 0) {
          let num = parseFloat(this.popup_data[i].inputAmount);
          totalInputAmount += (isNaN(num) ? 0 : num);
        }
        else {
          let crnum = parseFloat(this.popup_data[i].inputAmount);
          crtotalInputAmount += (isNaN(crnum) ? 0 : crnum);
        }
      }


      let currentOnAccount = Number(this.amount) + Number(crtotalInputAmount);
      console.log('currentOnAccount', typeof currentOnAccount, currentOnAccount, 'totalInputAmount', typeof totalInputAmount, totalInputAmount);

      if (Number(totalInputAmount) > currentOnAccount) {
        console.log('function hit');
        this.dialog_error = 'Please make sure the bill amount does not exceed the limit';
        valid = false;
      }

      // Validate each bill's input amount
      for (let index = 0; index < this.popup_data.length; index++) {
        // if (parseFloat(this.popup_data[index].inputAmount) > Math.abs(this.popup_amount)) {
        //   this.dialog_error = 'Please make sure bill amount does not exceed the limit';
        //   valid = false;
        //   break;
        // }


        if (this.popup_data[index].selectedRef && (this.popup_data[index].inputAmount === undefined || this.popup_data[index].inputAmount === '')) {
          this.dialog_error = 'Please enter the amount';
          valid = false;
          break;
        }

        if ((parseFloat(this.popup_data[index].inputAmount) === 0 || /^0+$/.test(this.popup_data[index].inputAmount))) {
          this.dialog_error = 'Please enter the amount more than zero';
          valid = false;
          break;
        }
      }
      console.log("valid", valid)
      if (valid) {
        this.receiptAgainstList = [];
        this.receiptCrList = [];
        this.tempReceiptAgainstList = [];

        // Fill the receiptAgainstList with new data
        this.popup_data.forEach((bill, index) => {
          const temp = {
            billRef: bill.billRef,
            closingBalance: bill.closingBalance,
            dueDate: bill.billDue,
            reference: bill.selectedRef,
            amount: bill.inputAmount
          };

          this.tempReceiptAgainstList.push(temp);


          if (bill.inputAmount !== undefined && bill.inputAmount !== '') {
            if (bill.closingBalance > 0) {
              this.receiptCrList.push(temp);
            } else {
              this.receiptAgainstList.push(temp);
            }
          }
        });

        this.$refs.tally_receipt.hide();
      }




      return valid;
    },

    displayAmount(inputAmount, amountData, closingBalance) {
      let amount = parseFloat(inputAmount) || 0;
      let amountDataFloat = parseFloat(amountData) || 0;


      if (amount === Math.abs(closingBalance)) {
        return 0;
      }

      if (amount > Math.abs(amountDataFloat)) {
        return '-' + Math.abs(amountDataFloat).toFixed(this.totalDecimalValueForRate);
      }
      return Math.abs(amountDataFloat).toFixed(this.totalDecimalValueForRate);
    },
    increaseAmount(index, event) {
      this.dialog_error = '';
      var inputValue = parseFloat(event.target.value);
      if (!isNaN(inputValue)) {
        let closingBalance = Math.abs(this.popup_data[index].closingBalance);
        let newAmount = inputValue + closingBalance;


        if (inputValue > closingBalance) {
          this.popup_data[index].amount_data = Math.abs(newAmount);
        } else {
          this.popup_data[index].amount_data = Math.abs(newAmount);;
        }


        if (!this.popup_data[index].selectedRef) {
          this.popup_data[index].selectedRef = 'agsref' + index;
        }
      } else {
        this.popup_data[index].amount_data = this.popup_data[index].closingBalance;
        this.popup_data[index].selectedRef = '';
        console.log(this.popup_data[index].amount_data);
      }
    },
    decreaseAmount(index, event) {
      this.dialog_error = '';
      var inputValue = parseFloat(event.target.value);



      if (!isNaN(inputValue)) {
        let closingBalance = Math.abs(this.popup_data[index].closingBalance);
        let newAmount = inputValue - closingBalance;

        if (inputValue > closingBalance) {
          this.popup_data[index].amount_data = -Math.abs(newAmount);
        } else {
          this.popup_data[index].amount_data = Math.abs(newAmount);
        }




        if (!this.popup_data[index].selectedRef) {
          this.popup_data[index].selectedRef = 'agsref' + index;
        }
      } else {
        this.popup_data[index].amount_data = this.popup_data[index].closingBalance;
        this.popup_data[index].selectedRef = '';
      }
    },

    format_date(value) {
      value = value.split(" ")[0];
      if (value) {
        if (value == "1900-01-01") {
          value = "-";
          return value;
        } else {
          return moment(String(value)).format("DD MMM yyyy");
        }
      }
    },
    open_popup() {
      if (this.amount != '') {
        this.error = [];
        this.dialog_error = '';
        this.isFirstTimeUserClick = true;
        this.getBillsFromMap();
        this.popup_amount = this.amount;
        this.$refs.tally_receipt.show();
      } else {
        this.voucher_error = "Please enter amount";
      }

    },

    html_tag_notaccept(field, event) {
      if (field == 'narration') {
        this.validateWordLimit();
      }
      const input = event.target.value;

      let tempDiv = document.createElement('div');
      tempDiv.innerHTML = input;
      const sanitizedValue = tempDiv.textContent || tempDiv.innerText || "";

      this[field] = sanitizedValue;

      event.target.value = sanitizedValue;
    },


    handleKeyDown(event) {
      if (event.key == "e" || event.key == "E" || event.key == "-" || event.key == "+") {
        event.preventDefault();
      }
      const currentValue = Number(event.target.value);
      if (event.keyCode === 40 && currentValue <= 0) {
        event.preventDefault();
      }
    },
    backentryPdf() {
      const data = {
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        voucherId: this.$route.params.voucher_id,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getMyVoucherPDF(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            this.pdfUrl = response.data.data.pdf;
            localStorage.setItem(
              "pdfUrl",
              this.pdfUrl
            );
            window.open(window.location.origin + '/pdfNew');

          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          alert("ERROR");
          this.loading = false;
        });
    },
    register(e) { },
    partySelected(selection) {
      this.select_party = selection.name;
      this.selected = selection;
      this.ledgerGuid = selection.id;
      this.partyLedgerName = selection.name;
      this.transaction_type = "";
      this.ledger = "";
      this.$refs.ledgerDropdown.searchFilter = '';
      this.$refs.ledgerDropdown.selected = '';
      this.select_ledgerName = 'select ledger'

      this.bank_name = '';
      this.ledger_name = ""
      this.transactionseletedname = "";
      this.cheque_number = "";
      this.bankDate = "";
      this.bank_name = "";
      this.bank_account_number = "";
      this.instrument_no = "";
      this.receiptAgainstList = [];
      this.receiptCrList = [];
      if (this.partyData.length == 0) {
        this.closingBalance = 0.00;
      } else {
        if (selection.closingBalance >= 0) {
          this.closingBalance =
            localStorage.getItem("symbol") +
            " " +
            Math.abs(selection.closingBalance) +
            " " +
            "CR";
        } else {
          // - value
          this.closingBalance =
            localStorage.getItem("symbol") +
            " " +
            Math.abs(selection.closingBalance) +
            " " +
            "DR";
        }
      }

      this.getLedgerOutstandingVouchers(selection.id, selection.name);
      if (this.ledgerGuid == "") {
        //find index of partyname from partyData
        let partToFind =
          this.readDataFromAPI(selection.ledgerId);
      }
    },

    getLedgerOutstandingVouchers(ledgerGuid, partyLedgerName) {
      const data = {
        filterBy: "All",
        ledgerGuid: ledgerGuid,
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        searchTerm: "",
        startLimit: 0,
        endLimit: 100,
        requestFrom: "WEB",
        startDate: localStorage.getItem("date_range_start_date"),
        endDate: localStorage.getItem("date_range_end_date"),
        outstandingType: "",
        rangeValue: "0",
        sortBy: "bills.billDate",
        orderBy: 1,
        partyLedgerName: partyLedgerName,

      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getOutstandingVouchersDetailsReceivablesGo(data, headers)
        .then((response) => {
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            this.popup_data = [];
            if (response.data.data.list.length > 0) {
              for (let [key, value] of Object.entries(
                response.data.data.list
              )) {
                response.data.data.list[key].amount_data = value.closingBalance;
              }
              this.popup_data = response.data.data.list;

              this.current_outstanding = response.data.data.totalAmount;
              this.add_bill_button = "1";
            } else {
              this.popup_data = [];
              this.add_bill_button = "0";
            }
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },


    partyfilter(keyword) {
      this.search = keyword;
      this.partyDetails();
    },
    partyDetails() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startLimit: 0,
        endLimit: 10,
        requestFrom: "WEB",
        searchTerm: this.search,
        isFromBackEntry: true,
        parent: this.parentTypeStore.particulars,
        isFromBackEntry: true
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgersByLedgerGroupParentGo(data, headers)
        .then((response) => {
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            this.partyData = [];
            for (let [key, value] of Object.entries(response.data.data.list)) {
              this.partyData.push({
                name: value.ledgerName,
                id: value.guid,
                ledgerId: value._id,
                closingBalance: value.closingBalance,
                masterReservedName: value.masterReservedName
              });
            }
          }
          if (this.isUpdate) {
            this.ledgerGuid = this.partyData[0].ledgerId;
          }
          this.new_loading = false;
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    transactionDetails() {
      var self = this;
      this.loading = true;
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        type: "transactionTypes"
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      this.transactionData = [];
      Api.getTransactionTypeGo(data, headers)
        .then((response) => {
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            this.transactionData = response.data.data.value;
            this.LedgerDetails();
          } else {
            this.transactionData = [];
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    async bankListDetails() {
      var self = this;
      this.loading = true;
      if (this.transactionseletedname !== "") {
        if (this.transactionseletedname === "Cash") {
          this.parentArray = this.parentTypeStore.cash;
        } else {
          this.parentArray = this.parentTypeStore.bank;
        }
        const data = {
        _userId: localStorage.getItem('customerId'),
        requestFrom: "WEB",
        type: "tallyBankLedger"
        }
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        this.bankList = [];
        const response = await Api.getTransactionTypeGo(data, headers)

        const responseStatus = Common.getStatusForActionFailed(
          response.data.status
        );
        if (responseStatus == "200") {
          this.allBanks = response.data.data.value;
          this.bankList = this.allBanks.slice(0, 10)
        } else {
          this.bankList = [];
        }
      }
    },
    LedgerDetails() {
      var self = this;
      this.loading = true;
      if (this.transactionseletedname !== "") {
        if (this.transactionseletedname === "Cash") {
          this.parentArray = this.parentTypeStore.cash;
        } else {
          this.parentArray = this.parentTypeStore.bank;
        }
        const data = {
          company_id: localStorage.getItem("companyId"),
          _userId: localStorage.getItem("customerId"),
          startLimit: 0,
          endLimit: 100,
          requestFrom: "WEB",
          searchTerm: this.searchLedgerName,
          parent: this.parentArray,
          isFromBackEntry: true
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        this.LedgerData = [];
        Api.getLedgersByLedgerGroupParentGo(data, headers)
          .then((response) => {
            const responseStatus = Common.getStatusForActionFailed(
              response.data.status
            );
            if (responseStatus == "200") {
              this.LedgerData = response.data.data.list.map(item => ({
                ...item,
                name: item.ledgerName, // Add the "name" property
              }));
              // this.bankList = response.data.data.list;
              this.bankListDetails();
            } else {
              this.ledgerData = [];
            }
          })
          .catch((err) => {
            Common.getStatusForActionFailed(err.response.status);
            this.loading = false;
          });
      }
    },
    transaction_type_change(event, transaction_type = "") {
      if (transaction_type !== "") {
        this.transactionseletedname = transaction_type;
      } else {
        this.transactionseletedname = event.target.value;
        this.ledger = "";
      }
      //this.$refs.ledgerDropdown._props.placeholder = '';
      this.$refs.ledgerDropdown.searchFilter = '';
      this.$refs.ledgerDropdown.selected = '';
      this.select_ledgerName = "select ledger"
      this.ledger = "";
      this.bank_name = '';

      this.LedgerDetails();

    },
    getVoucherNumber() {
      this.combinedVoucherNumber = "";
      if (this.VoucherEditable && this.voucherEditted) {
        this.combinedVoucherNumber =
          this.custom_prefix + this.custom_Voucher_number + this.custom_suffix;
      }
      var self = this;
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        requestFrom: "WEB",
        voucherType: "Receipt",
        voucherTypeId: this.VoucherTypesId,
        ...(this.combinedVoucherNumber
          ? { voucherNumber: this.combinedVoucherNumber }
          : {}),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getNextVoucherNumberGo(data, headers)
        .then((response) => {
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            this.voucherNumber = response.data.data.voucherNumber;
          } else {
            this.voucherNumber = "";
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
      setTimeout(() => {
        this.voucherEditted = false;
      }, 5000)
    },
    //     async getVoucherType() {
    //   try {
    //     const data = {
    //       requestFrom: "WEB",
    //       searchTerm: this.vouchertypeSearch,
    //       startLimit: 0,
    //       endLimit: 25,
    //       _userId: localStorage.getItem("customerId"),
    //       company_id: localStorage.getItem("companyId"),
    //       parent: "Receipt",
    //     };

    //     const headers = {
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/json",
    //       token: localStorage.getItem("webAuthToken"),
    //     };
    //     this.voucherTypes = [];
    //     const response = await Api.getVoucherTypes(data, headers);

    //     if (response.data.message === "AUTHENTICATION_FAILED") {
    //       localStorage.clear();
    //       window.location.href = "/";
    //     } else {
    //       const voucherList = response.data.data.list;
    //      this.voucherTypes = voucherList.map(item => ({
    //         ...item,
    //         name: item.voucherTypeName, // Add the "name" property
    //       }));

    //       // Loop through voucher list
    //       for (let i = 0; i < voucherList.length; i++) {
    //         const voucher = voucherList[i];

    //         // Check if voucherNumberSeriesList exists and is an array
    //         if (voucher.voucherNumberSeriesList && Array.isArray(voucher.voucherNumberSeriesList)  && (voucher.voucherTypeName==this.$route.params.voucherTypeName)) {
    //           for (let j = 0; j < voucher.voucherNumberSeriesList.length; j++) {
    //             const series = voucher.voucherNumberSeriesList[j];

    //             // If numbering method is "Automatic", make voucher number uneditable
    //             if (series.numberingMethod === "Automatic") {
    //               this.isVoucherNumberEditable = false;
    //               return; // Exit early since we found the required condition
    //             }
    //           }
    //         }
    //       }

    //       // If no "Automatic" numbering method is found, keep it editable
    //       this.isVoucherNumberEditable = true;
    //     }
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },
    async getVoucherType() {
      try {
        const data = {
          requestFrom: "WEB",
          searchTerm: this.searchVoucherType,
          startLimit: 0,
          endLimit: 25,
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          parent: "Receipt",
        };

        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        this.voucherTypes = [];
        const response = await Api.getVoucherTypes(data, headers);

        if (response.data.message === "AUTHENTICATION_FAILED") {
          localStorage.clear();
          window.location.href = "/";
        } else {
          this.voucherTypes = response.data.data.list.map(item => ({
            ...item,
            name: item.voucherTypeName, // Add the "name" property
          }));
          response.data.data.list.forEach((item) => {
            if (
              item.voucherNumberSeriesList &&
              Array.isArray(item.voucherNumberSeriesList)
            ) {
              item.voucherNumberSeriesList.forEach((series) => {
                this.numberingMethod.push({
                  numberingmethod: series.numberingMethod,
                  voucherTypeName: item.voucherTypeName,
                  voucherTypeId: item.id,
                  voucherTypeGuid : item.guid
                });
              });
            }
          });
          if (this.voucherTypes.length == 1) {
            this.getNextVoucherNumber(this.voucherTypes[0]);
          }
          this.loading = false;
        }
        // this.voucherFilteredOptions = this.voucherOptions;
      } catch (err) {
        console.error(err);
      }
    },
    getOutstandingDetails() {
      var self = this;
      this.loading = true;
      const data = {
        filterBy: "All",
        ledgerGuid: this.ledgerGuid,
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        searchTerm: "",
        startDate: String(localStorage.getItem("first_date_range_start_date")),
        endDate: String(localStorage.getItem("first_date_range_end_date")),
        startLimit: 0,
        endLimit: 20,
        rangeValue: "0",
        voucherTypes: "Receipt",
        sortBy: "",
        orderBy: 1,
        requestFrom: "WEB",
        partyLedgerName: this.partyLedgerName,
        outstandingType: ""
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getOutstandingVouchersDetailsReceivablesGo(data, headers)
        .then((response) => {
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            if (response.data.data.grandTotal >= 0) {

              this.closingBalance =
                localStorage.getItem("symbol") +
                " " +
                Math.abs(response.data.data.totalAmount) +
                " " +
                "CR";
            } else {

              this.closingBalance =
                localStorage.getItem("symbol") +
                " " +
                Math.abs(response.data.data.totalAmount) +
                " " +
                "DR";
            }

            this.new_loading = false;
          } else {
            this.new_loading = false;
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    getpartyLedger() {
     return new Promise((resolve, reject) => {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        ledgerGuid: this.ledgerGuid,
        EndLimit: 10000,
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getLedgerByIdGo(data, headers)
        .then((response) => {
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );

          var temp = {};
          if (responseStatus == "200") {
            if (this.receiptAgainstList.length != 0 || this.receiptCrList != 0) {
              for (let index = 0; index < this.receiptAgainstList.length; index++) {

                temp = {
                  billDate: moment(String(this.receiptAgainstList[index].dueDate)).format(
                    "yyyy-MM-DD"
                  ),
                  billType: this.receiptAgainstList[index].reference.includes('agsref') ? 'Agst Ref' : 'New Ref',
                  amount: parseFloat(this.receiptAgainstList[index].amount),
                  billCreditperiod: '',
                  billName: this.receiptAgainstList[index].billRef,
                  billId: ''
                };

                this.billAllocationdetails.push(temp);
              }
              for (let index = 0; index < this.receiptCrList.length; index++) {

                temp = {
                  billDate: moment(String(this.receiptCrList[index].dueDate)).format(
                    "yyyy-MM-DD"
                  ),
                  billType: this.receiptCrList[index].reference.includes('agsref') ? 'Agst Ref' : 'New Ref',
                  amount: parseFloat("-" + this.receiptCrList[index].amount),
                  billCreditperiod: '',
                  billName: this.receiptCrList[index].billRef,
                  billId: ''
                };

                this.billAllocationdetails.push(temp);
              }
            } else {
              temp = {
                billDate: moment(String(this.customDate)).format("yyyy-MM-DD"),
                billType: "On Account",
                amount: Math.round(parseFloat(this.amount)),
                billCreditperiod: '',
                billName: '',
                billId: ''
              };
              this.billAllocationdetails.push(temp);
            }

            this.partyobject = {
              ledgerGroup: response.data.data.parent,
              bankAllocationDetails: [],
              billAllocationdetails: this.billAllocationdetails,
              ledgerGuid: response.data.data.guid,
              ledgerSyncId: response.data.data.guid == "" ? response.data.data._id : "",
              isMoreLedgerField: "0",
              amount: parseFloat(this.amount),
              ledgerName: this.partyLedgerName,
              ledgerGroupParent: response.data.data.parentgroup,
              masterReservedName: response.data.data.masterReservedName,
              transactionType: this.transaction_type,
              masterReservedName: response.data.data.masterReservedName,
            };

            this.ledgerEntries.push(this.partyobject);
            this.new_loading = false;
            resolve();
          } else {
            this.partyobject = {};
            this.new_loading = false;
          reject(new Error("Failed to fetch ledger"));
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
      })
    },
    getotherLedger() {
  return new Promise((resolve, reject) => {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        ledgerGuid: this.otherGuid,
        EndLimit: 10000,
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgerByIdGo(data, headers)
        .then((response) => {
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            if (this.ledgerNameChange == "Cash") {

              this.otherobject = {
                ledgerGroup: response.data.data.parent,
                reference: this.voucherNumber,
                isInvoice: "No",
                bankAllocationDetails: [],
                billAllocationdetails: [],
                transactionType: this.transaction_type,
                ledgerGuid: response.data.data.guid,
                ledgerSyncId: response.data.data.guid == "" ? response.data.data._id : "",
                isMoreLedgerField: "0",
                amount: parseFloat("-" + this.amount),
                ledgerName: this.ledgerNameChange,
                ledgerGroupParent: response.data.data.parentgroup,
                masterReservedName: response.data.data.masterReservedName
              };
              this.ledgerEntries.push(this.otherobject)
            } else {

              this.otherobject = {
                ledgerGroup: response.data.data.parent,
                bankAllocationDetails: [
                  {
                    InstrumentDate: moment(String(this.customDate)).format(
                      "yyyy-MM-DD"
                    ),
                    accountType: "",
                    narration: "",
                    cardNumber: "",
                    date: this.bankDate !== "" ? moment(String(this.bankDate)).format("yyyy-MM-DD") : "",
                    bankName: this.bank_name,
                    transactionType: this.transaction_type,
                    bankcode: "",
                    deliveryMode: "",
                    transactionName: "",
                    amount: parseFloat("-" + this.amount),
                    deliveryTo: "",
                    name: this.cheque_number,
                    paymentGateway: "",
                    paymentFavouring: this.partyLedgerName,
                    ifsCode: "",
                    accountNumber: this.bank_account_number,
                    micrCode: "",
                    bankBranchName: "",
                    InstrumentNumber: this.instrument_no,
                  },
                ],
                billAllocationdetails: [],
                transactionType: this.transaction_type,
                ledgerGuid: response.data.data.guid,
                ledgerSyncId: response.data.data.guid == "" ? response.data.data._id : "",
                isMoreLedgerField: "0",
                amount: parseFloat("-" + this.amount),
                ledgerName: this.ledgerNameChange,
                ledgerGroupParent: response.data.data.parentgroup,
                masterReservedName: response.data.data.masterReservedName
              };
              this.ledgerEntries.push(this.otherobject)
            }
            this.new_loading = false;
            resolve();
          } else {
            this.partyobject = {};
            this.new_loading = false;
            reject(new Error("Failed to fetch ledger"));

          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
      })
    },
    amountChange(event, amount = "") {
      if (amount !== "") {
        this.amount = this.amount;
      } else {
        this.amount = event.target.value;
      }


    },
    ledgerChange(event) {
      this.ledgerNameChange = event.target.value;
      const theTarget =
        event.target.options[event.target.options.selectedIndex].dataset;
      this.otherGuid = theTarget.guid;
    },
    bankChange(data) {
      this.bank_name = data;
      this.showBankDropdown = false;
      // const selectedOption = event.target.options[event.target.selectedIndex].dataset;
      // this.bank_account_number = selectedOption.bankaccountnumber;
    },
    checkBillUpdateCountCount() {
      this.billAllocationdetails = [];
      if (this.receiptAgainstList.length != 0 || this.receiptCrList.length != 0) {
        this.sum = 0.0;
        for (let index = 0; index < this.receiptAgainstList.length; index++) {
          this.sum = this.sum += parseFloat(this.receiptAgainstList[index].amount.toString());
        }
        this.crSum = 0.0
        if (this.receiptCrList.length != 0) {
          for (let index = 0; index < this.receiptCrList.length; index++) {
            console.log(this.crSum, 'index', index, "this.receiptCrList", this.receiptCrList[index].amount);
            this.crSum = this.crSum += Math.abs(parseFloat(this.receiptCrList[index].amount.toString()));
          }
        }
        // if (this.voucherNumber == '' && !this.isNumberisNone) {
        //   this.error["voucherNumber"] = "Please enter voucher number";
        // }
        if (this.partyLedgerName == "" || this.partyLedgerName === undefined) {
          this.error["party_name"] = "Please select party name";
        }
        if (this.transactionseletedname == "") {
          this.error["transaction_type"] = "Please select transaction type";
        }
        if (this.ledger == "") {
          this.error["ledger_name"] = "Please select ledger type";
        }
        if (this.amount == "") {
          this.error["amount_error"] = "Please enter amount";
        }
        if (this.transactionseletedname == "Cheque/DD") {
          if (this.cheque_number == "" || this.cheque_number.length < "6") {
            this.error["cheque_number"] = "Please enter valid cheque number";
            this.updateUI();
            return;
          }
        }
        let onAccountValid = parseFloat(this.amount) + parseFloat(this.crSum) - this.sum;
        if (onAccountValid > 0) {
            const decimal = this.totalDecimalValueForRate;

            const amount = parseFloat(this.amount);
            const crSum = parseFloat(this.crSum);
            const sum = parseFloat(this.sum);

            const result = (amount + crSum - sum).toFixed(decimal);

          this.onAccountMsg = `Bill amount  is less than Receipt amount (${this.symbol} ${this.amount}) so the remaining amount (${this.symbol} ${result}) will be added as On Account`;
          this.$refs.on_account.show();
        } else {
          this.updatePayment();
        }
      } else {
        this.updatePayment();
      }
    },
    checkBillCount() {
      this.billAllocationdetails = [];
      if (this.receiptAgainstList.length != 0 || this.receiptCrList.length != 0) {

        this.sum = 0.0;
        for (let index = 0; index < this.receiptAgainstList.length; index++) {
          console.log(this.sum, 'index', index, "this.receiptAgainstList", this.receiptAgainstList[index].amount);
          this.sum = this.sum += parseFloat(this.receiptAgainstList[index].amount.toString());
        }
        this.crSum = 0.0
        if (this.receiptCrList.length != 0) {
          for (let index = 0; index < this.receiptCrList.length; index++) {
            console.log(this.crSum, 'index', index, "this.receiptCrList", this.receiptCrList[index].amount);
            this.crSum = this.crSum += parseFloat(this.receiptCrList[index].amount.toString());
          }
        }
        // if (this.voucherNumber == '' && !this.isNumberisNone) {
        //   this.error["voucherNumber"] = "Please enter voucher number";
        // }
        if (this.partyLedgerName == "" || this.partyLedgerName === undefined) {
          this.error["party_name"] = "Please select party name";
        }
        if (this.transactionseletedname == "") {
          this.error["transaction_type"] = "Please select transaction type";
        }
        if (this.ledger == "") {
          this.error["ledger_name"] = "Please select ledger type";
        }
        if (this.amount == "") {
          this.error["amount_error"] = "Please enter amount";
        }
        if (this.transactionseletedname == "Cheque/DD") {
          if (this.cheque_number == "" || this.cheque_number.length < "6") {
            this.error["cheque_number"] = "Please enter valid cheque number";
            this.updateUI();
            return;
          }
        }

        let onAccountValid = parseFloat(this.amount) + parseFloat(this.crSum) - this.sum;
        if (onAccountValid > 0) {
          const decimal = this.totalDecimalValueForRate;
          const amount = parseFloat(this.amount)
          const crSum = parseFloat(this.crSum)
          const sum = parseFloat(this.sum)

          const result = (amount + crSum - sum).toFixed(decimal);


          this.onAccountMsg = `Bill amount  is less than Receipt amount (${this.symbol} ${this.amount}) so the remaining amount (${this.symbol} ${result}) will be added as On Account`;
          this.$refs.on_account.show();
        } else {
          this.addReceipt();
        }
      } else {
        this.addReceipt();
      }
    },
    updateUI() {
      this.$forceUpdate();
    },
    addReceipt(e) {
      this.error = [];
      if (
        this.voucherNumber &&
        this.customDate &&
        this.transactionseletedname &&
        this.ledger &&
        this.amount &&
        this.partyLedgerName
      ) {

      }
      if (this.isWordLimitExceeded) {
        return;
      }

      // if (this.voucherNumber == '' && !this.isNumberisNone) {
      //   this.error["voucherNumber"] = "Please enter voucher number";
      // }
      if (this.voucherType == "" || this.voucherType === undefined) {
        this.error["voucher_type"] = "Please select voucher type";
      }
      if (this.partyLedgerName == "" || this.partyLedgerName === undefined) {
        this.error["party_name"] = "Please select party name";
      }
      if (this.transactionseletedname == "") {
        this.error["transaction_type"] = "Please select transaction type";
      }
      if (this.ledger == "" || this.ledger == undefined) {
        this.error["ledger_name"] = "Please select ledger type";
      }
      if (this.amount == "" || isNaN(this.amount)) {
        this.error["amount_error"] = "Please enter amount";
      }
      if (this.transactionseletedname == "Cheque/DD") {
        if (this.cheque_number == "" || this.cheque_number.length < "6") {
          this.error["cheque_number"] = "Please enter valid cheque number";
        }
        if (this.bank_name == "") {
          this.error["bank_name"] = "Please select Bank name";
        }

      }


      if (Object.keys(this.error).length === 0) {
        this.ledgerEntries = [];
        Promise.all([this.getotherLedger(), this.getpartyLedger()])
        .then(() => {
          const data = {
            requestFrom: "WEB",
            _userId: localStorage.getItem("customerId"),
            checkedBy: localStorage.getItem("customerId"),
            createdBy: localStorage.getItem("customerId"),
            company_id: localStorage.getItem("companyId"),
            voucherNumber: this.voucherNumber,
            voucherDate: moment(String(this.customDate)).format("yyyy-MM-DD"),
            referenceDate: '',
            voucherType: this.voucherType,
            voucherTypeGuid : this.voucherTypeGuid,
            partyLedgerName: this.partyLedgerName,
            partyName: this.partyLedgerName,
            isTransfer: 0,
            StockItemEntries: [],
            narration: this.narration,
            parentType: "Receipt",
            isInvoice: "No",
            partyGuid: this.ledgerGuid,
            isOptional: this.isOptionalVoucherEnabled,
            partygstIn: "",
            partyLedgerGuid: this.ledgerGuid,
            conSigneegstin: "",
            basicSenderAddress: "",
            basicBuyerAddress: "",
            transferComment: "",
            reference: null,
            ledgerEntries: this.ledgerEntries,
            startLimit: 0,
            endLimit: 10,
            requestFrom: "WEB",
            searchTerm: this.search,
            isSetDefaultNumber: this.invoice_type,
            isInvoice: 'No'

          };
          const headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: localStorage.getItem("webAuthToken"),
          };

          Api.addMyVoucher(data, headers)
            .then((response) => {
              const responseStatus = Common.getStatusForActionFailed(
                response.data.status
              );
              this.voucher_error = "";
              if (responseStatus == "200") {
                this.$router.push({ name: "My Vouchers" });
              } else {
                this.voucher_error = response.data.message;
              }
            })
            .catch((err) => {
              Common.getStatusForActionFailed(err.response.status);
              this.loading = false;
            });
        });
      }
    },



    get_receipt_data() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        requestFrom: "WEB",
        _userId: localStorage.getItem("customerId"),
        voucherId: this.$route.params.voucher_id,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getVoucherFullDetailsFromSyncGoo(data, headers)
        .then((response) => {
          this.isTransfer = response.data.data.isTransfer.toString();
          this.isFromUpdate = true;
          this.voucherType = response.data.data.voucherType;
          this.voucherTypeGuid = response.data.data.voucherTypeGuid
          this.voucherNumber = response.data.data.voucherNumber;
          this.party_name = response.data.data.partyName;
          this.select_party = response.data.data.partyName;
          this.partyLedgerName = response.data.data.partyName;
          this.customDate = response.data.data.voucherDate;
          this.transaction_type =
            response.data.data.ledgerEntries[1].transactionType;
          this.transaction_type_change("", this.transaction_type);
          this.ledger =
            response.data.data.ledgerEntries[1].ledgerName;
          this.select_ledgerName = this.ledger;
          this.ledgerNameChange =
            response.data.data.ledgerEntries[1].ledgerName;
          this.ledgerGuid =
            response.data.data.ledgerEntries[0].ledgerGuid;
          this.otherGuid =
            response.data.data.ledgerEntries[1].ledgerGuid;

          if (this.ledgerGuid == "") {
            console.log('no guid im here', this.partyData)
            this.search = this.select_party;
            this.isUpdate = true;
            this.partyDetails();

            //after ledgerId implemented call partyDetails to get remaining parties
            this.search = "";
            this.partyData = [];
            this.partyDetails();
          }
          this.getOutstandingDetails();
          this.getLedgerOutstandingVouchers(this.ledgerGuid, this.partyLedgerName);
          this.amount = parseFloat(Math.abs(response.data.data.ledgerEntries[1].amount));
          this.narration = response.data.data.narration;
          for (let index = 0; index < response.data.data.ledgerEntries.length; index++) {
            let ledgerEntry = response.data.data.ledgerEntries[index];
            for (let billIndex = 0; billIndex < ledgerEntry.billAllocationdetails.length; billIndex++) {
              var temp = {

                billRef: ledgerEntry.billAllocationdetails[billIndex].billName,
                closingBalance: "",
                dueDate: moment(String(ledgerEntry.billAllocationdetails[billIndex].billDate)).format(
                  "DD-MMM-YYYY"
                ),
                reference: ledgerEntry.billAllocationdetails[billIndex].billType,
                amount: ledgerEntry.billAllocationdetails[billIndex].amount
              };

              //to set numbering type e.g:(Auto,manual,none)
              const matchedData = this.numberingMethod.find(
                (item) => item.voucherTypeName === this.voucherType
              );
              if (matchedData) {
                this.VoucherTypesId = matchedData.voucherTypeId
                this.selectedNumberingMethod = matchedData.numberingmethod;
              }

              if (ledgerEntry.billAllocationdetails[billIndex].billName != '') {
                if (temp.amount < 0) {
                  temp.amount = Math.abs(temp.amount);
                  this.receiptCrList.push(temp);
                }
                else {
                  this.tempReceiptAgainstList.push(temp);
                  this.receiptAgainstList.push(temp);
                }

              }

              // Your code to handle billAllocationDetail
            }
          }
          this.cheque_number =
            response.data.data.ledgerEntries[1].bankAllocationDetails[0].name;
          this.bankDate =
            response.data.data.ledgerEntries[1].bankAllocationDetails[0].date;
          this.bank_name =
            response.data.data.ledgerEntries[1].bankAllocationDetails[0].bankName;
          this.bank_account_number =
            response.data.data.ledgerEntries[1].bankAllocationDetails[0].accountNumber;
          this.instrument_no =
            response.data.data.ledgerEntries[1].bankAllocationDetails[0].InstrumentNumber;

        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    updatePayment(e) {
      this.amountChange("", this.amount);

      this.error = [];
      this.partyobject = '';
      this.otherobject = '';
      if (
        this.voucherNumber &&
        this.customDate &&
        this.transactionseletedname &&
        this.ledger &&
        this.amount &&
        this.partyLedgerName
      ) {

      }
      if (this.isWordLimitExceeded) {
        return;
      }
      // if (this.voucherNumber == '' && !this.isNumberisNone) {
      //   this.error["voucherNumber"] =   "Please enter voucher number";
      // }
      if (this.partyLedgerName == "" || this.partyLedgerName === undefined) {
        this.error["party_name"] = "Please select party name";
      }
      if (this.transactionseletedname == "") {
        this.error["transaction_type"] = "Please select transaction type";
      }
      if (this.ledger == "") {
        this.error["ledger_name"] = "Please select ledger type";
      }
      if (this.amount == ""  || isNaN(this.amount)) {
        this.error["amount_error"] = "Please enter amount";
      }
      if (this.transactionseletedname == "Cheque/DD") {
        if (this.cheque_number == "" || this.cheque_number.length < "6") {
          this.error["cheque_number"] = "Please enter valid cheque number";
        }
        if (this.bank_name == "") {
          this.error["bank_name"] = "Please select Bank name";
        }

      }
      if (Object.keys(this.error).length === 0) {
        this.ledgerEntries = [];
        Promise.all([this.getotherLedger(), this.getpartyLedger()])
        .then(() => {
          const data = {
            updatedBy: localStorage.getItem("customerId"),
            VoucherId: this.$route.params.voucher_id,
            requestFrom: "WEB",
            _userId: localStorage.getItem("customerId"),
            checkedBy: localStorage.getItem("customerId"),
            company_id: localStorage.getItem("companyId"),
            voucherNumber: this.voucherNumber,
            voucherDate: moment(String(this.customDate)).format("yyyy-MM-DD"),
            referenceDate: '',
            voucherType: this.voucherType,
            voucherTypeGuid : this.voucherTypeGuid,
            partyLedgerName: this.partyLedgerName,
            partyName: this.partyLedgerName,
            isTransfer: 0,
            StockItemEntries: [],
            narration: this.narration,
            parentType: "Receipt",
            isInvoice: "No",
            partyGuid: this.ledgerGuid,
            isOptional: this.isOptionalVoucherEnabled,
            partygstIn: "",
            partyLedgerGuid: this.ledgerGuid,
            conSigneegstin: "",
            basicSenderAddress: "",
            basicBuyerAddress: "",
            transferComment: "",
            reference: null,
            ledgerEntries: this.ledgerEntries,

            startLimit: 0,
            endLimit: 10,
            requestFrom: "WEB",
            searchTerm: this.search,
            isSetDefaultNumber: this.invoice_type,
            isInvoice: 'No'

          };

          const headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: localStorage.getItem("webAuthToken"),
          };
          Api.updateMyVoucher(data, headers)
            .then((response) => {

              const responseStatus = Common.getStatusForActionFailed(
                response.data.status
              );
              if (responseStatus == "200") {
                this.$router.push({ name: "My Vouchers" });
              }
            })
            .catch((err) => {
              Common.getStatusForActionFailed(err.response.status);
              this.loading = false;
            });
        });
      }
    },
    InvoiceConfigurations() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        requestFrom: "WEB",
        voucherType: "Receipt",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getInvoiceConfigurationsGo(data, headers)
        .then((response) => {
          const CommonResponse = response.data.data.vouchers;
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            this.invoice_type = response.data.data.vouchers.voucherNumberConfiguration.receipt.isSetDefaultNumber;
            this.customisedHeaders = response.data.data.vouchers.customisedHeaders;
            this.customizeVoucherNumber =
              response.data.data.vouchers.voucherNumberConfiguration.receipt.customizeVoucherNumber;
            //decrementing the voucher number in update case only
            if (this.$route.params.voucher_id !== undefined) {
              let voucherNumber = parseInt(this.customizeVoucherNumber.number);
              voucherNumber = voucherNumber - 1;
              this.customizeVoucherNumber.number = String(voucherNumber);
            }
            this.invoiceDetailsBool = CommonResponse;
            this.customizeVoucherNumber.isPayment =
              response.data.data.vouchers.voucherNumberConfiguration.payment.isSetDefaultNumber;
            this.customizeVoucherNumber.isPaymentPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.payment.customizeVoucherNumber.prefix;
            this.customizeVoucherNumber.isPaymentNumber =
              response.data.data.vouchers.voucherNumberConfiguration.payment.customizeVoucherNumber.number;
            this.customizeVoucherNumber.isPaymentSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.payment.customizeVoucherNumber.suffix;
            this.customizeVoucherNumber.isSales =
              response.data.data.vouchers.voucherNumberConfiguration.sales.isSetDefaultNumber;
            this.customizeVoucherNumber.isSalesPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.sales.customizeVoucherNumber.prefix;
            this.customizeVoucherNumber.isSalesNumber =
              response.data.data.vouchers.voucherNumberConfiguration.sales.customizeVoucherNumber.number;
            this.customizeVoucherNumber.isSalesSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.sales.customizeVoucherNumber.suffix;

            this.customizeVoucherNumber.isSalesOrder =
              response.data.data.vouchers.voucherNumberConfiguration.salesorder.isSetDefaultNumber;
            this.customizeVoucherNumber.isSalesOrderPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.salesorder.customizeVoucherNumber.prefix;
            this.customizeVoucherNumber.isSalesOrderNumber =
              response.data.data.vouchers.voucherNumberConfiguration.salesorder.customizeVoucherNumber.number;
            this.customizeVoucherNumber.isSalesOrderSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.salesorder.customizeVoucherNumber.suffix;

            this.customizeVoucherNumber.isPurchase =
              response.data.data.vouchers.voucherNumberConfiguration.purchase.isSetDefaultNumber;
            this.customizeVoucherNumber.isPurchasePrefix =
              response.data.data.vouchers.voucherNumberConfiguration.purchase.customizeVoucherNumber.prefix;
            this.customizeVoucherNumber.isPurchaseNumber =
              response.data.data.vouchers.voucherNumberConfiguration.purchase.customizeVoucherNumber.number;
            this.customizeVoucherNumber.isPurchaseSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.purchase.customizeVoucherNumber.suffix;

            this.customizeVoucherNumber.isPurchaseOrder =
              response.data.data.vouchers.voucherNumberConfiguration.purchaseorder.isSetDefaultNumber;
            this.customizeVoucherNumber.isPurchaseOrderPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.purchaseorder.customizeVoucherNumber.prefix;
            this.customizeVoucherNumber.isPurchaseOrderNumber =
              response.data.data.vouchers.voucherNumberConfiguration.purchaseorder.customizeVoucherNumber.number;
            this.customizeVoucherNumber.isPurchaseOrderSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.purchaseorder.customizeVoucherNumber.suffix;



            this.customizeVoucherNumber.isCreditNote =
              response.data.data.vouchers.voucherNumberConfiguration.creditnote.isSetDefaultNumber;
            this.customizeVoucherNumber.isCreditNotePrefix =
              response.data.data.vouchers.voucherNumberConfiguration.creditnote.customizeVoucherNumber.prefix;
            this.customizeVoucherNumber.isCreditNoteNumber =
              response.data.data.vouchers.voucherNumberConfiguration.creditnote.customizeVoucherNumber.number;
            this.customizeVoucherNumber.isCreditNoteSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.creditnote.customizeVoucherNumber.suffix;

            this.customizeVoucherNumber.isDebitNote =
              response.data.data.vouchers.voucherNumberConfiguration.debitnote.isSetDefaultNumber;
            this.customizeVoucherNumber.isDebitNotePrefix =
              response.data.data.vouchers.voucherNumberConfiguration.debitnote.customizeVoucherNumber.prefix;
            this.customizeVoucherNumber.isDebitNoteNumber =
              response.data.data.vouchers.voucherNumberConfiguration.debitnote.customizeVoucherNumber.number;
            this.customizeVoucherNumber.isDebitNoteSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.debitnote.customizeVoucherNumber.suffix;

            this.customizeVoucherNumber.isJournal =
              response.data.data.vouchers.voucherNumberConfiguration.journal.isSetDefaultNumber;
            this.customizeVoucherNumber.isJournalPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.journal.customizeVoucherNumber.prefix;
            this.customizeVoucherNumber.isJournalNumber =
              response.data.data.vouchers.voucherNumberConfiguration.journal.customizeVoucherNumber.number;
            this.customizeVoucherNumber.isJournalSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.journal.customizeVoucherNumber.suffix;

            this.customizeVoucherNumber.isContra =
              response.data.data.vouchers.voucherNumberConfiguration.contra.isSetDefaultNumber;
            this.customizeVoucherNumber.isContraPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.contra.customizeVoucherNumber.prefix;
            this.customizeVoucherNumber.isContraNumber =
              response.data.data.vouchers.voucherNumberConfiguration.contra.customizeVoucherNumber.number;
            this.customizeVoucherNumber.isContraSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.contra.customizeVoucherNumber.suffix;

            this.customizeVoucherNumber.isQuotation =
              response.data.data.vouchers.voucherNumberConfiguration.quotation.isSetDefaultNumber;
            this.customizeVoucherNumber.isQuotationPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.quotation.customizeVoucherNumber.prefix;
            this.customizeVoucherNumber.isQuotationNumber =
              response.data.data.vouchers.voucherNumberConfiguration.quotation.customizeVoucherNumber.number;
            this.customizeVoucherNumber.isQuotationSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.quotation.customizeVoucherNumber.suffix;
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    async getLedgerParentType(type) {
      const data = {
        _userId: localStorage.getItem('customerId'),
        type: "parentTypeTracker",
        voucherType: "Receipt",
        ledgerType: type,
        requestFrom: "WEB"
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      const response = await Api.getAllPdfTemplatesConfigurations(data, headers);
      if (type == "Bank") {
        this.parentTypeStore.bank = response.data.data.value;
      }
      else if (type == 'Cash') {
        this.parentTypeStore.cash = response.data.data.value;
      }
      else if (type == 'Particulars') {
        this.parentTypeStore.particulars = response.data.data.value;
      }


    }
  },
  mounted() {
    this.symbol = localStorage.getItem("symbol");
    if (localStorage.getItem('isWrite_isOptionalVoucher') === "false") {
      this.isOptionalVoucherEnabled = false;
    }
    else {
      this.isOptionalVoucherEnabled = true;
    }
    this.getLedgerParentType('Bank');
    this.getLedgerParentType('Cash');
    this.getLedgerParentType('Particulars');
    GoogleAnalytics.create_receipt_listing();
    if (localStorage.getItem('voucherType') == 'None') {
      this.isNumberisNone = true;
    }
    if (this.$route.params.voucher_id && this.$route.params.voucher_id.length !== 24) {
      this.$route.params.voucher_id = undefined;
    }
    if (this.$route.params.voucher_id !== undefined) {
      this.get_receipt_data();
    } else {
      // this.getVoucherNumber();
    }
    this.partyDetails();
    this.transactionDetails();
    this.getVoucherType();
    this.isPaid = localStorage.getItem("isPaid");
    this.InvoiceConfigurations();
    this.referenceFilteredOptions = this.referenceOptions;

    $('.sales_cstm_dropdown :input').on('focus', function () {
      $(this).attr('autocomplete', 'off')
    });
  },
};
</script>
<style scoped>
.receipt-addbill-design table tr td {
  border: 1px solid #ddd;
  padding: 0px 10px;
}

.AddBillAfterTable table tr td {
  border: 1px solid #ddd;
  padding: 5px 10px;
}

.AddBillAfterTable table tr td a {
  color: red;
}

.AddBillAfterTable table tr td a i {
  font-size: 11px;
  height: 20px;
  width: 20px;
  line-height: 20px;
  text-align: center;
  border: 1px solid red;
  border-radius: 50%;
}

.addreceipterrormessage {
  background: #ffebeb;
  padding: 5px 10px;
  color: red;
  border-radius: 5px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.cancel-btn,
.create-name-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
}

.cancel-btn {
  background-color: gray;
  color: white;
}

.cancel-btn:hover {
  background-color: darkgray;
}

.create-name-btn {
  background-color: black;
  color: white;
}

.create-name-btn:hover {
  background-color: #333;
}

.CreateReceiptEditPopupSet {
  left: 38%;
  top: 70px;
}

.CreateReceiptEditPopupSet:before {
  left: 90%;
  border-color: transparent transparent #c6c6c6 transparent;
}
.DownarrowIconCreateReceiptSearchableDropdown{
  position: absolute;right: 7px;top: 7px;font-size: 11px;cursor: pointer;
}
@media only screen and (max-width:1800px) {
  .CreateReceiptEditPopupSet {
    left: 18%;
    top: 70px;
  }
}

@media only screen and (max-width:1500px) {
  .CreateReceiptEditPopupSet {
    left: 10%;
    top: 70px;
  }
}

@media only screen and (max-width:1400px) {
  .CreateReceiptEditPopupSet {
    left: 8%;
    top: 70px;
  }
}

@media only screen and (max-width:1366px) {
  .CreateReceiptEditPopupSet {
    left: 5%;
    top: 70px;
  }
}

@media only screen and (max-width:1366px) {
  .CreateReceiptEditPopupSet {
    left: 5%;
    top: 70px;
  }
}

@media only screen and (max-width:1280px) {
  .CreateReceiptEditPopupSet {
    left: -1%;
    top: 70px;
  }
}

@media only screen and (max-width:1220px) {
  .CreateReceiptEditPopupSet {
    left: -15%;
    top: 70px;
  }
}
@media only screen and (max-width:1110px){
  .CreateReceiptEditPopupSet{left:-30%;}
}
@media only screen and (max-width:991px){
  .CreateReceiptEditPopupSet{left:0%;}
}
</style>