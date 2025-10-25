/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version: 1.0.0 Date:
September 26, 2023 Author: Kartik Champaneriya (Sr. Software Engineer) Country: India */
<template>
  <section>
    <div class="page-header-title-box dashboard-page-header">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 col-6">
          <div class="title_text">
            <div class="title_text" v-if="this.$route.params.voucher_id">
              <div v-if="isTransfer !== '0'">
                <h4 class="page-title mb-0">Contra</h4>
              </div>
              <div v-else>
                <h4 class="page-title mb-0">Update Contra</h4>
              </div>
            </div>
            <div v-else>
              <h4 class="page-title mb-0">Contra</h4>
            </div>
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
    <div v-if="error.amount_diff" id="tax_div_move_top" class="qrl_error_box">
      <p v-if="error.amount_diff">{{ error.amount_diff }}</p>
    </div>

    <div v-if="voucher_error" id="tax_div_move_top" class="qrl_error_box">
      <p>{{ voucher_error }}</p>
    </div>

    <div class="main_card sales_voucher_main_box">
      <div class="card">
        <div class="new_party_form">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="form-group input_new_textbox mb-4">
                <div class="label_mb_input">Voucher Type</div>
                <div class="sales_cstm_dropdown input_light_border">
                  <form autocomplete="off" @submit.prevent class="input-disable-overlay-hide-all-div">
                    <div v-if="isUpdateState">
                      <Dropdown :options="voucherTypes" v-on:selected="getNextVoucherNumber"
                        v-on:filter="voucherTypeFilter" v-model="voucherType" :disabled="isTransfer === '1'"
                        :maxItem="10" :placeholder="`${this.voucherType}`" autocomplete="off">
                      </Dropdown>
                    </div>
                    <div v-else>
                      <Dropdown :options="voucherTypes" v-on:selected="getNextVoucherNumber"
                        v-on:filter="voucherTypeFilter" v-model="voucherType" :disabled="isTransfer === '1'"
                        :maxItem="10" :placeholder="placeholderText" autocomplete="off">
                      </Dropdown>
                    </div>
                  </form>
                  <span class="error-validation" v-if="error.voucher_type">{{
                    error.voucher_type
                  }}</span>
                </div>


                <!-- <span class="error-validation" v-if="error.voucherNumber">{{ error.voucherNumber }}</span> -->
              </div>
            </div>
            <div class="col-lg-6 col-12" style="position: relative;">
              <label class="form_input_lbl">Voucher Number</label>
              <div class="form-group input_new_textbox mb-4">
                <input type="text" @input="html_tag_notaccept('voucherNumber', $event)" :disabled="true" placeholder=""
                  v-model="voucherNumber" class="form-control only-input-disable-all-hide-overlay" autocomplete="off" />
                <p class="mb-0 " style="
                  position: absolute; 
                  right: 20px; 
                  top: 50%; 
                  transform: translateY(-50%); 
                  color: #aaa; 
                  cursor: pointer;
                  " :disabled="isTransfer === '1'">
                  <a v-if="VoucherEditable && voucherType" href="javascript:void(0);" @click="toggleEdit">
                    <i class="fa fa-pencil text-dark" aria-hidden="true"></i>
                  </a>
                </p>
                <form v-if="isEditing" @submit.prevent>
                  <div class="editVoucherboxRechanges CreateContraEditPopupSet" v-click-outside="closeEvent">
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
                          @input="handleVoucherNumber" @keypress="allowOnlyNumbers" />

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
                        </button> -->
                    <!-- <ul v-if="referenceDropdownOpen" class="SetScrollbarWidthSize">
                          <li v-for="(option, index) in referenceFilteredOptions" :key="option.value"
                            :class="{ active: index === referenceActiveIndex }"
                            @mousedown.prevent="ReferenceselectOption(option)">
                            {{ option.label }}
                          </li>
                        </ul> -->
                    <!-- <input class="mt-3" v-model="billNumberData"
                          v-if="referenceSearchQuery == 'New Reference' || referenceSearchQuery == 'New Ref'"
                          placeholder="Bill Number" />
                        <span class="error-validation" v-if="vouchernumberError.billNumberError">
                          {{ vouchernumberError.billNumberError }}
                        </span> -->
                    <!-- </div>
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

                <span class="error-validation" v-if="error.voucherNumber">{{
                  error.voucherNumber
                }}</span>
              </div>
            </div>

            <div class="col-lg-6 col-12">
              <label class="form_input_lbl">Date</label>
              <div class="datepicker_image_set mb-4 input-disable-overlay-hide-all-div">
                <span class="sales_date_img_new">
                  <img src="/assets/images/1.0/sales/calendar.svg" class="img-fluid" />
                </span>
                <Datepicker :disabled="isTransfer === '1'" v-model="customDate" format="dd MMM yyyy" placeholder="Date" :disabled-dates="disabledBookDates">
                </Datepicker>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12 col-12">
              <div class="row">
                <div class="col-12">
                  <div class="editing_table_for_voucher">
                    <table class="new_voucher_table with_inventory_table">
                      <tr>
                        <th colspan="9">
                          <div class="new-voucher-heading">
                            <h4>Add Particular</h4>
                          </div>
                        </th>
                        <th style="text-align: right">
                          <div v-if="
                            isTransfer == '0' ||
                            isTransfer == '' ||
                            isTransfer === null ||
                            isTransfer === '1'
                          " class="new-plus-part" @click.stop="insert_Row">
                            <button :disabled="disabled === '1' || isTransfer === '1'">
                              <i class="fa fa-plus"></i>
                            </button>
                          </div>
                        </th>
                      </tr>

                      <tr class="inventory_table_tr">
                        <td colspan="3" class="inventory_table_th">Type</td>
                        <td colspan="3" class="inventory_table_th">
                          Party Name
                        </td>
                        <td colspan="3" class="inventory_table_th">Amount</td>
                      </tr>

                      <tr v-for="(item, index) in tableRows" :key="item.id">
                        <td colspan="3" width="30%">
                          <select :disabled="isTransfer === '1'" name="" id=""
                            class="form-select item_select journal_select" v-model="item.item_type"
                            v-on:keydown="disableArrowKeys">
                            <option value="" disabled>Type</option>
                            <option v-for="opt in itemsoption">
                              {{ opt }}
                            </option>
                          </select>
                          <span class="error-validation" v-if="error[index] && error[index].item_type">
                            {{ error[index].item_type }}
                          </span>
                        </td>
                        <td colspan="3" width="30%">
                          <div class="sales_cstm_dropdown journal_drop">
                            <form autocomplete="off" @submit.prevent="validateForm"
                              class="input-disable-overlay-hide-all-div">
                              <Dropdown :options="partyData1" v-on:selected="itemSelected($event, index)"
                                v-on:filter="itemfilter" v-model="item.item_party" :disabled="isTransfer === '1'"
                                :maxItem="10" :placeholder="`${item.item_party}`" @click.native="getPartyDetails">
                              </Dropdown>
                              <p v-if="errorMessage" class="error-message">
                                {{ errorMessage }}
                              </p>

                              <span class="error-validation" v-if="error[index] && error[index].item_party">
                                {{ error[index].item_party }}
                              </span>
                            </form>
                          </div>
                        </td>
                        <td colspan="3" width="30%">
                          <input type="number" @keydown="handleKeyDown" :disabled="isTransfer === '1'"
                            placeholder="Amount" v-model="item.amount"
                            class="form-control journal_select only-input-disable-all-hide-overlay" autocomplete="off"
                            v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll"
                            @input = 'limitDecimalPlaces(item)'
                            @blur = "toggleAmount(item, false)" />
                          <span class="error-validation" v-if="error[index] && error[index].amount_error">
                            {{ error[index].amount_error }}
                          </span>
                        </td>
                        <td colspan="1" width="10%" style="text-align: right" @click="
                          isTransfer === '0' && DeleteRow(item.id, index)
                          ">
                          <div v-if="
                            isTransfer === '0' ||
                            isTransfer === null ||
                            isTransfer === '1'
                          ">
                            <button class="delete_icon_td">
                              <i class="fa fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="sales-voucher-textarea">
                <textarea @input="html_tag_notaccept('narration', $event)" id="narration" :disabled="isTransfer === '1'"
                  v-model="narration" name="narration" rows="4" placeholder="Narration" cols="50"
                  class="textarea-disable-not-allowed"></textarea>
                <span class="error-validation" v-if="
                  isWordLimitExceeded
                "> Word limit exceeded! Maximum 500 words allowed.</span>
              </div>

              <div class="form_bottom_button_save center_button mt-3">
                <div v-if="this.$route.params.voucher_id">
                  <div v-if="isTransfer === '0' || isTransfer === '-1'">
                    <button class="form_button black_button" :disabled="amount_button !== '0'"
                      @click="update_journal()">
                      Update Contra
                    </button>
                  </div>
                </div>
                <div v-else>
                  <button class="form_button black_button" :disabled="amount_button !== '0'" @click="create_journal()">
                    Create Contra
                  </button>
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
import Datepicker from "vuejs-datepicker";
import GoogleAnalytics from "@/GoogleAnalytics";
import { ModelListSelect } from "vue-search-select";
import { ModelSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
import Api from "@/Api";
import Vue from "vue";
import moment from "moment";
import Common from "@/Common";
import Dropdown from "../components/Dropdown.vue";
Vue.use(Dropdown);

export default {
  name: "sales-voucher",
  components: {
    Datepicker,
    ModelListSelect,
    ModelSelect,
    Dropdown,
  },
  data() {
    return {
      parentTypeStore: {
        account: [],
        particulars: []
      },
      BookFromDate: localStorage.getItem('booksFrom'),
      isOptionalVoucherEnabled: false,
      isWordLimitExceeded: false,
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
      isUpdateState: false,
      searchVoucherType: '',
      VoucherTypesId: '',
      voucherType: '',
      voucherTypes: [{
        name: 'payment1'
      }, { name: 'manula payment' }, { name: 'sales' }],
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
      options123: [
        {
          name: "Ambica Traders",
          id: "Ambica Traders",
        },
        {
          name: "Canara Bank",
          id: "Canara Bank",
        },
        {
          name: "Compuchip Systems",
          id: "Compuchip Systems",
        },
        {
          name: "Livekeeping Private Limited",
          id: "Livekeeping Private Limited",
        },
        {
          name: "Mahalakshmi Limited",
          id: "Mahalakshmi Limited",
        },
      ],

      selected: {
        name: null,
        id: null,
      },

      options1: [
        {
          value: "",
          text: "Select Party Name",
        },
        {
          value: "2",
          text: "Ambica Traders",
        },
        {
          value: "3",
          text: "Canara Bank",
        },
        {
          value: "4",
          text: "Compuchip Systems",
        },
        {
          value: "5",
          text: "Livekeeping Private Limited",
        },
        {
          value: "6",
          text: "Mahalakshmi Limited",
        },
      ],
      objectItem: "1",
      item: "",
      stringItem: "",
      showledgers: false,
      showtr: false,
      taxshowtr: false,
      ledgersshowtr: false,
      customDate: "",
      customDate: new Date(),
      customDate2: "",
      customDate2: new Date(),
      customDate3: "",
      customDate3: new Date(),
      customDate4: "",
      customDate4: new Date(),
      customDate5: "",
      customDate5: new Date(),
      isHidden: false,
      isHidden2: false,
      selectpartyname: "",
      partynameoptions: [
        "Ambica Traders",
        "Canara Bank",
        "Compuchip Systems",
        "Livekeeping Private Limited",
        "Mahalakshmi Limited",
      ],
      inventory: "",
      inventoryoption: ["Inventory", "Without Inventory"],
      allledgerselect: "",
      allledgerselection: [
        "Current Assets",
        "Current Liabilities",
        "Direct Expenses",
        "Indirect Expenses",
      ],
      debitcreditselect: "",
      debitcredit: ["Debit", "Credit"],
      subledgerselect: "",
      subledgerselection: [
        "ABCD Private Ltd.",
        "Finlite Technologies Pvt. Ltd.",
        "Livekeeping Pvt. Ltd.",
      ],
      itemopt: "",
      itemsoption: ["By", "To"],

      ledgeropt: "",
      ledgeroption: [
        {
          name: "Ambica Traders",
          id: "Ambica Traders",
        },
        {
          name: "Canara Bank",
          id: "Canara Bank",
        },
        {
          name: "Compuchip Systems",
          id: "Compuchip Systems",
        },
        {
          name: "Livekeeping Private Limited",
          id: "Livekeeping Private Limited",
        },
        {
          name: "Mahalakshmi Limited",
          id: "Mahalakshmi Limited",
        },
      ],

      mainlocation: "",
      location: ["Main Location"],
      selectledger: "",
      ledgersoptions: ["Ledger 1", "Ledger 2", "Ledger 3"],
      tableRows: [
        {
          item_type: "",
          item_party: "Select Party Name",
          amount: "",
          ledgerGroup: "",
          ledgerGroupParent: "",
          ledgerGuid: "",
          ledgerName: "",
        },
      ],
      TaxtableRows: [
        {
          type: "",
          percentage: "",
        },
      ],
      LedgersableRows: [
        {
          allledgerselect: "",
          subledgerselect: "",
          debitcreditselect: "",
          amount: "",
        },
      ],
      partyData: [],
      partyData1: [],
      party_name: "Select Party Name",
      error: [],
      total_by: 0,
      total_to: 0,
      final_amount: 0,
      amount_button: "0",
      voucherNumber: "",
      partyLedgerName: "",
      selected_array: [],
      ledgerEntries: [],
      narration: "",
      tableRows_view: [],
      isTransfer: "0",
      final_array: [],
      isPaid: "0",
      invoice_type: true,
      voucher_error: "",
      disabled: "0",
      errorMessage: "",
      totalDecimalValueForRate: localStorage.getItem('decimalPlaces'),
      voucherTypeGuid : ''

    };
  },
  created() { },

  methods: {
    handleVoucherNumber() {
      if (this.custom_prefix != "" || this.custom_suffix != "") {
        this.voucherEditted = true;
      }
    },
     roundToTwoDecimalPlaces(value) {
      const factor = Math.pow(10, this.totalDecimalValueForRate);
      return Math.round(value * factor) / factor;
    },
    limitDecimalPlaces(item){
      item.amount.replace(/[^0-9.]/g, '').slice(0, 15)
      const data = item.amount
      if (data && data.includes('.')) {
        const [intPart, decimalPart] = data.split('.');
        if (decimalPart.length > this.totalDecimalValueForRate) {
          item.amount = parseFloat(`${intPart}.${decimalPart.slice(0, this.totalDecimalValueForRate)}`);
        }
      }
    },
    toggleAmount(item, isOpen) {
    if (isOpen == false) {
      let amount = item.amount;
      item.amount = parseFloat(amount).toFixed(this.totalDecimalValueForRate);
    }
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
        this.getPartyDetails();


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
        this.custom_prefix = this.customizeVoucherNumber.prefix;
        this.custom_suffix = this.customizeVoucherNumber.suffix;
        this.custom_Voucher_number = this.customizeVoucherNumber.number;
        this.toggleEdit();
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
              number: this.custom_Voucher_number,
              prefix: this.custom_prefix,
              suffix: this.custom_suffix || '',
            },
            isSetDefaultNumber: this.selectedOptionradio == "default" ? this.invoice_type : false,
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
              number: this.customizeVoucherNumber.isReceipt
                ? ""
                : this.customizeVoucherNumber.isReceiptNumber,
              prefix: this.customizeVoucherNumber.isReceipt
                ? ""
                : this.customizeVoucherNumber.isReceiptPrefix,
              suffix: this.customizeVoucherNumber.isReceipt
                ? ""
                : this.customizeVoucherNumber.isReceiptSuffix,
            },
            isSetDefaultNumber: this.customizeVoucherNumber.isReceipt,
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
    getPartyDetails() {
      this.inpartyDetails('')
    },
    html_tag_notaccept(field, event) {
      if (field === "narration") {
        this.validateWordLimit()
      }
      const input = event.target.value;

      let tempDiv = document.createElement("div");
      tempDiv.innerHTML = input;
      const sanitizedValue = tempDiv.textContent || tempDiv.innerText || "";

      this[field] = sanitizedValue;

      event.target.value = sanitizedValue;
    },
    validateForm() {
      if (!this.tableRows.item_party) {
        this.errorMessage = "This field is required";
        this.disabled = 1;
      } else {
        this.errorMessage = "";
        this.disabled = 0;
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
            localStorage.setItem("pdfUrl", this.pdfUrl);
            window.open(window.location.origin + "/pdfNew");
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    test(e) {
      return e.value === "" ? "is-italic" : "";
    },
    register(e) { },
    insert_Row() {
      this.search = "";
      this.inpartyDetails();
      this.tableRows.push({
        item_type: "",
        item_party: "Select Party Name",
        amount: "",
        ledgerGroup: "",
        ledgerGroupParent: "",
        ledgerGuid: "",
        ledgerName: "",
      });
    },
    tax_insert_Row() {
      this.TaxtableRows.push({
        type: "",
        percentage: "",
      });
    },
    ledger_insert_Row() {
      this.LedgersableRows.push({
        allledgerselect: "",
        subledgerselect: "",
        debitcreditselect: "",
        amount: "",
      });
    },
    DeleteRow(id, index) {
      if (this.tableRows.length != 0) {
        this.tableRows.splice(index, 1);
        if (this.tableRows.length == 0) {
          this.tableRows.splice(index, 1);
          this.error[0] = "";
          setTimeout(() => {
            this.insert_Row()
          }, 0)
        }
      }
    },
    TaxdeleteRow(id, index) {
      if (this.TaxtableRows.length != 1) {
        this.TaxtableRows.splice(index, 1);
      }
    },
    validateSelection(selection) {
      this.selected = selection;
      console.log(selection.name + " has been selected");
    },

    getDropdownValues(keyword) {
      console.log(
        "You could refresh options by querying the API with " + keyword
      );
    },
    partyfilter(keyword) {
      this.search = keyword;
      this.partyDetails(keyword);
    },
    partyDetails(search = "") {
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
        parent: this.parentTypeStore.account,
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
                ledgerGroup: value.parent,
                ledgerGroupParent: value.parentgroup,
                ledgerGuid: value.guid,
                ledgerName: value.ledgerName,
                masterReservedName: value.masterReservedName
              });
            }
          }
          this.new_loading = false;
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    inpartyDetails(search = "") {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      this.search = "";
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startLimit: 0,
        endLimit: 10,
        requestFrom: "WEB",
        searchTerm: search,
        parent: this.parentTypeStore.account,
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
            this.partyData1 = [];
            for (let [key, value] of Object.entries(response.data.data.list)) {
              this.partyData1.push({
                name: value.ledgerName,
                id: value._id,
                ledgerGroup: value.parent,
                ledgerGroupParent: value.parentgroup,
                ledgerGuid: value.guid,
                ledgerName: value.ledgerName,
                masterReservedName: value.masterReservedName
              });
            }
          }
          this.new_loading = false;
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    partySelected(selection) {
      this.selected = selection;
      this.ledgerGuid = selection.id;
      this.partyLedgerName = selection.name;
    },
    itemSelected(selection, index) {
      if (selection.ledgerGroup != undefined) {
        this.selected = selection;
        this.tableRows[index].ledgerGroup = selection.ledgerGroup;
        this.tableRows[index].ledgerGroupParent = selection.ledgerGroupParent;
        this.tableRows[index].ledgerGuid = selection.ledgerGuid;
        this.tableRows[index].item_id = selection.id;
        this.tableRows[index].ledgerName = selection.ledgerName;
        this.tableRows[index].masterReservedName = selection.masterReservedName
        this.partyData1 = [];
        this.getPartyDetails();
      }
    },
    itemfilter(keyword) {
      this.search = keyword;
      this.inpartyDetails(keyword);
    },
    create_journal() {
      this.error = [];
      if (this.isWordLimitExceeded) {
        return;
      }
      if (this.voucherType == "" || this.voucherType === undefined) {
        this.error["voucher_type"] = "Please select voucher type";
      }
      this.tableRows.forEach((item, index) => {
        const rowErrors = [];

        if (item.item_type == "" || item.item_type == undefined) {
          rowErrors["item_type"] = "Please select type";
        }

        if (item.ledgerName == "") {
          rowErrors["item_party"] = "Please select party";
        }

        if (item.amount == "" || item.amount == 0) {
          rowErrors["amount_error"] = "Please enter amount";
        }

        if (Object.keys(rowErrors).length > 0) {
          this.$set(this.error, index, rowErrors);
        } else {
          this.$delete(this.error, index);
        }
      });

      if (Object.keys(this.error).length === 0) {
        this.total_by = 0;
        this.total_to = 0;
        this.final_amount = 0;
        this.amount_button = "0";
        this.ledgerEntries = [];
        this.tableRows.forEach((number) => {
          if (number.item_type == "By") {
            if (this.partyLedgerName == "") {
              this.partyLedgerName = number.ledgerName;
            }
            this.total_by += this.roundToTwoDecimalPlaces(number.amount);
            this.ledgerEntries.push({
              amount: parseFloat("-" + number.amount),
              bankAllocationDetails: [],
              billAllocationdetails: [],
              ledgerGroup: number.ledgerGroup,
              ledgerGroupParent: number.ledgerGroupParent,
              ledgerGuid: number.ledgerGuid,
              ledgerSyncId: number.ledgerGuid == "" ? number.item_id : "",
              ledgerName: number.ledgerName,
              masterReservedName: number.masterReservedName
            });
          }
          if (number.item_type == "To") {
            this.total_to += this.roundToTwoDecimalPlaces(number.amount);
            this.ledgerEntries.push({
              amount: parseFloat(number.amount),
              bankAllocationDetails: [],
              billAllocationdetails: [],
              ledgerGroup: number.ledgerGroup,
              ledgerGroupParent: number.ledgerGroupParent,
              ledgerGuid: number.ledgerGuid,
              ledgerSyncId: number.ledgerGuid == "" ? number.item_id : "",
              ledgerName: number.ledgerName,
              masterReservedName: number.masterReservedName
            });
          }
        });
        this.final_amount = this.roundToTwoDecimalPlaces(this.total_to) - this.roundToTwoDecimalPlaces(this.total_by);
        this.error = [];
        if (this.final_amount != "0") {
          this.error["amount_diff"] =
            "Unable to create Contra voucher because total does not match";
          $("html, body").animate(
            {
              scrollTop: $("#tax_div_move_top").offset().top,
            },
            500
          );
        } else {
          if (Object.keys(this.error).length === 0) {
            const data = {
              requestFrom: "WEB",
              _userId: localStorage.getItem("customerId"),
              company_id: localStorage.getItem("companyId"),
              createdBy: localStorage.getItem("customerId"),
              checkedBy: localStorage.getItem("customerId"),
              parentType: "Contra",
              conSigneegstin: "",
              partyLedgerGuid: "",
              partyGuid: "",
              reference: '',
              isTransfer: 0,
              narration: this.narration,
              voucherDate: moment(String(this.customDate)).format("yyyy-MM-DD"),
              voucherType: this.voucherType,
              voucherTypeGuid : this.voucherTypeGuid,
              partyLedgerName: this.partyLedgerName,
              isOptional: this.isOptionalVoucherEnabled,
              StockItemEntries: [],
              transferComment: "",
              partyName: "",
              basicSenderAddress: "",
              isInvoice: "Yes",
              ledgerEntries: this.ledgerEntries,
              partygstIn: "",
              isSetDefaultNumber: this.invoice_type,
              voucherNumber: this.voucherNumber,
              isInvoice: "No",
            };
            const headers = {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              token: localStorage.getItem("webAuthToken"),
            };
            Api.addMyVoucher(data, headers)
              .then((response) => {
                this.voucher_error = "";
                const responseStatus = Common.getStatusForActionFailed(
                  response.data.status
                );
                if (responseStatus == "200") {
                  this.$router.push({
                    name: "My Vouchers",
                  });
                } else {
                  this.voucher_error = response.data.message;
                  $("html, body").animate(
                    {
                      scrollTop: $("#tax_div_move_top").offset().top,
                    },
                    500
                  );
                }
              })
              .catch((err) => {
                Common.getStatusForActionFailed(err.response.status);
                this.loading = false;
              });
          }
        }
      }
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
        voucherType: "Contra",
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
    get_journal() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      this.isUpdateState = true;
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
      Api.getVoucherFullDetailsFromSyncGoo(data, headers).then((response) => {
        console.log(response);
        this.voucherType = response.data.data.voucherType,
          this.voucherTypeGuid = response.data.data.voucherTypeGuid
          this.voucherNumber = response.data.data.voucherNumber;
        this.customDate = response.data.data.voucherDate;
        this.party_name = response.data.data.partyLedgerName;
        this.partyLedgerName = response.data.data.partyLedgerName;
        this.tableRows_view = [];
        this.tableRows = [];
        console.log(response.data.data.ledgerEntries);
        this.tableRows_view.push(response.data.data.ledgerEntries);
        for (let [key, value] of Object.entries(
          response.data.data.ledgerEntries
        )) {
          const isPositive = parseFloat(value.amount) >= 0;
          const item_type = isPositive ? "To" : "By";
          const amount = Math.abs(value.amount);
          this.tableRows.push({
            item_type: item_type,
            item_party: value.ledgerName,
            amount: amount,
            ledgerGroup: value.ledgerGroup,
            ledgerGroupParent: value.ledgerGroupParent,
            ledgerGuid: value.ledgerGuid,
            ledgerName: value.ledgerName,
            masterReservedName: value.masterReservedName
          });
        }
        this.narration = response.data.data.narration;
        this.isTransfer = response.data.data.isTransfer.toString();
        console.log(this.tableRows[0].item_party, "hi get_journal function");
        //to set numbering type e.g:(Auto,manual,none)
        const matchedData = this.numberingMethod.find(
          (item) => item.voucherTypeName === this.voucherType
        );
        if (matchedData) {
          this.VoucherTypesId = matchedData.voucherTypeId
          this.selectedNumberingMethod = matchedData.numberingmethod;
        }
      });
    },
    update_journal() {
      this.error = [];
      console.log(this.tableRows);
      if (this.isWordLimitExceeded) {
        return;
      }

      this.tableRows.forEach((item, index) => {
        const rowErrors = [];

        if (item.item_type == "" || item.item_type == undefined) {
          rowErrors["item_type"] = "Please select type";
        }

        if (item.ledgerName == "") {
          rowErrors["item_party"] = "Please select party";
        }

        if (item.amount == "" || item.amount == 0) {
          rowErrors["amount_error"] = "Please enter amount";
        }

        if (Object.keys(rowErrors).length > 0) {
          this.$set(this.error, index, rowErrors);
        } else {
          this.$delete(this.error, index);
        }
      });

      if (Object.keys(this.error).length === 0) {
        this.total_by = 0;
        this.total_to = 0;
        this.final_amount = 0;
        this.amount_button = "0";
        this.ledgerEntries = [];
        console.log(this.tableRows);
        this.tableRows.forEach((number) => {
          if (number.item_type == "By") {
            if (this.partyLedgerName == "") {
              this.partyLedgerName = number.ledgerName;
            }
            this.total_by += parseFloat(number.amount);
            this.ledgerEntries.push({
              amount: parseFloat("-" + number.amount),
              bankAllocationDetails: [],
              billAllocationdetails: [],
              ledgerGroup: number.ledgerGroup,
              ledgerGroupParent: number.ledgerGroupParent,
              ledgerGuid: number.ledgerGuid,
              ledgerName: number.ledgerName,
              masterReservedName: number.masterReservedName
            });
          }
          if (number.item_type == "To") {
            this.total_to += parseFloat(number.amount);
            this.ledgerEntries.push({
              amount: parseFloat(number.amount),
              bankAllocationDetails: [],
              billAllocationdetails: [],
              ledgerGroup: number.ledgerGroup,
              ledgerGroupParent: number.ledgerGroupParent,
              ledgerGuid: number.ledgerGuid,
              ledgerName: number.ledgerName,
              masterReservedName: number.masterReservedName
            });
          }
        });
        this.final_amount = this.total_to - this.total_by;
        this.error = [];
        if (this.final_amount != "0") {
          this.error["amount_diff"] =
            "Unable to create journal voucher bacause total does not match";
          $("html, body").animate(
            {
              scrollTop: $("#tax_div_move_top").offset().top,
            },
            500
          );
        } else {
          if (Object.keys(this.error).length === 0) {
            const data = {
              updatedBy: localStorage.getItem("customerId"),
              VoucherId: this.$route.params.voucher_id,
              requestFrom: "WEB",
              _userId: localStorage.getItem("customerId"),
              company_id: localStorage.getItem("companyId"),
              createdBy: localStorage.getItem("customerId"),
              checkedBy: localStorage.getItem("customerId"),
              parentType: "Contra",
              conSigneegstin: "",
              partyLedgerGuid: "",
              partyGuid: "",
              reference: '',
              isTransfer: 0,
              narration: this.narration,
              voucherDate: moment(String(this.customDate)).format("yyyy-MM-DD"),
              voucherType: this.voucherType,
              voucherTypeGuid : this.voucherTypeGuid,
              partyLedgerName: this.partyLedgerName,
              isOptional: this.isOptionalVoucherEnabled,
              StockItemEntries: [],
              transferComment: "",
              partyName: "",
              basicSenderAddress: "",
              isInvoice: "Yes",
              ledgerEntries: this.ledgerEntries,
              partygstIn: "",
              isSetDefaultNumber: this.invoice_type,
              voucherNumber: this.voucherNumber,
              isInvoice: "No",
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
                  this.$router.push({
                    name: "My Vouchers",
                  });
                } else {
                  this.voucher_error = response.data.message;
                }
              })
              .catch((err) => {
                Common.getStatusForActionFailed(err.response.status);
                this.loading = false;
              });
          }
        }
      }
    },
    InvoiceConfigurations() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        requestFrom: "WEB",
        voucherType: "Contra",
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
            this.invoice_type =
              response.data.data.vouchers.voucherNumberConfiguration.contra.isSetDefaultNumber;
            this.customisedHeaders = response.data.data.vouchers.customisedHeaders;
            this.customizeVoucherNumber =
              response.data.data.vouchers.voucherNumberConfiguration.contra.customizeVoucherNumber;
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

            this.customizeVoucherNumber.isReceipt =
              response.data.data.vouchers.voucherNumberConfiguration.receipt.isSetDefaultNumber;
            this.customizeVoucherNumber.isReceiptPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.receipt.customizeVoucherNumber.prefix;
            this.customizeVoucherNumber.isReceiptNumber =
              response.data.data.vouchers.voucherNumberConfiguration.receipt.customizeVoucherNumber.number;
            this.customizeVoucherNumber.isReceiptSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.receipt.customizeVoucherNumber.suffix;

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
    async getVoucherType() {
      try {
        const data = {
          requestFrom: "WEB",
          searchTerm: this.vouchertypeSearch,
          startLimit: 0,
          endLimit: 25,
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          parent: "Contra",
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
          console.log(response.data.data.list);
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
        }
        if (this.voucherTypes.length == 1) {
          this.getNextVoucherNumber(this.voucherTypes[0]);
        }
        this.voucherFilteredOptions = this.voucherOptions;
      } catch (err) {
        console.error(err);
      }
    },
    async getLedgerParentType(type) {
      const data = {
        _userId: localStorage.getItem('customerId'),
        type: "parentTypeTracker",
        voucherType: "Contra",
        ledgerType: type,
        requestFrom: "WEB"
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      const response = await Api.getAllPdfTemplatesConfigurations(data, headers);
      if (type == 'Particulars') {
        this.parentTypeStore.particulars = response.data.data.value;
      }
      if (type == 'Account') {
        this.parentTypeStore.account = response.data.data.value;
        this.partyDetails();
        this.inpartyDetails();
      }


    }
  },
  watch: {
    referenceSearchQuery(newQuery) {
      if (newQuery === "") {
        this.ReferencefilterOptions();
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
    isActive() {
      return this.$refs.modelSelect.showMenu || false;
    },
    isNone() {
      const isVoucherNumberNone = localStorage.getItem('voucherType');
      if (isVoucherNumberNone == 'None' || isVoucherNumberNone == "Automatic") {
        return true;
      }
      else {
        return false;
      }
    },

  },
  beforeMount() {
    this.getVoucherType();
  },
  mounted() {
    GoogleAnalytics.contra_listing();
    if (localStorage.getItem('isWrite_isOptionalVoucher') === "false") {
      this.isOptionalVoucherEnabled = false;
    }
    else {
      this.isOptionalVoucherEnabled = true;
    }
    this.getLedgerParentType('Account');
    this.getLedgerParentType('Particulars');
    if (
      this.$route.params.voucher_id &&
      this.$route.params.voucher_id.length !== 24
    ) {
      this.$route.params.voucher_id = undefined;
    }
    if (this.$route.params.voucher_id !== undefined) {
      this.get_journal();
    } else {
      // this.getVoucherNumber();
    }

    this.isPaid = localStorage.getItem("isPaid");
    this.InvoiceConfigurations();
    this.referenceFilteredOptions = this.referenceOptions;

  },
};
</script>
<style scoped>
.CreateContraEditPopupSet {
  left: 38%;
  top: 70px;
}

.CreateContraEditPopupSet:before {
  left: 90%;
  border-color: transparent transparent #c6c6c6 transparent;
}

@media only screen and (max-width:1800px) {
  .CreateContraEditPopupSet {
    left: 18%;
    top: 70px;
  }
}

@media only screen and (max-width:1500px) {
  .CreateContraEditPopupSet {
    left: 10%;
    top: 70px;
  }
}

@media only screen and (max-width:1400px) {
  .CreateContraEditPopupSet {
    left: 8%;
    top: 70px;
  }
}

@media only screen and (max-width:1366px) {
  .CreateContraEditPopupSet {
    left: 5%;
    top: 70px;
  }
}

@media only screen and (max-width:1366px) {
  .CreateContraEditPopupSet {
    left: 5%;
    top: 70px;
  }
}

@media only screen and (max-width:1280px) {
  .CreateContraEditPopupSet {
    left: -1%;
    top: 70px;
  }
}

@media only screen and (max-width:1220px) {
  .CreateContraEditPopupSet {
    left: -15%;
    top: 70px;
  }
}
@media only screen and (max-width:1110px){
  .CreateContraEditPopupSet{left:-30%;}
}
@media only screen and (max-width:991px){
  .CreateContraEditPopupSet{left:0%;}
}
</style>