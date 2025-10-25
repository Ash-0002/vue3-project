<!-- eslint-disable prettier/prettier -->
/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section class="positio-relative">
    <div class="page-header-title-box bg-green-header-card">
      <div class="row align-items-center">
        <div class="col-lg-6 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0" v-if="this.$route.params.voucher_id">
            <h3 v-if="fromMyVoucher && isTransfer == 1" class="color-white-text" style="margin-bottom: 0 !important">
               Purchase Order Voucher
            </h3>
            <h3 v-else-if="fromMyVoucher && (isTransfer == 0 || isTransfer == -1)" class="color-white-text" style="margin-bottom: 0 !important">
              Update Purchase Order Voucher
            </h3>
            <h3 v-else class="color-white-text" style="margin-bottom: 0 !important">
              Edit Purchase Order Voucher
            </h3>
          </div>
          <div v-else class="company_name sales_c_name mobile_padding_left_0">
            <h3 class="color-white-text" style="margin-bottom: 0 !important">
              Create Purchase Order Voucher
            </h3>
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
    <div>
      <div class="updated-checked-main" v-if="this.$route.params.voucher_id">
        <div class="row">
          <div class="col-lg-6 col-12">
            <div class="new-text-updated">
              <div v-if="this.updatedByName">
                <h5>Updated By: <span>{{ this.updatedByName }}</span></h5>
              </div>
              <div v-else>
                <h5>Created By: <span>{{ this.createdByName }}</span></h5>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="new-text-checked">
              <h5>Checked By: <span>{{ this.checkedByName }}</span></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!------------------->
    <div class="TopNewBackEntrySectionRechanges mt-3 ps-1 pe-1">
      <div class="TopInnerBackEntrySectionRechanges">
        <div class="qrl_error_box p-0 AddPaddingOnlyError" v-if="stockItemsError">
          <p v-if="stockItemsError.tableitemsSearchQuery">
            {{ stockItemsError.tableitemsSearchQuery }}
          </p>
          <p v-if="stockItemsError.itemquantity">
            {{ stockItemsError.itemquantity }}
          </p>
           <p v-if="stockItemsError.voucherSearchQuery">
            {{ stockItemsError.voucherSearchQuery }}
          </p>
          <p v-if="stockItemsError.itemrate">{{ stockItemsError.itemrate }}</p>
          <p v-if="stockItemsError.description">{{ stockItemsError.description }}</p>
          <p v-if="stockItemsError.selectedgodownsOption">
            {{ stockItemsError.selectedgodownsOption }}
          </p>
          <p v-if="stockItemsError.grandTotal">{{ stockItemsError.grandTotal }}</p>
          <p v-if="addLedger_error.selectLedger">
            {{ addLedger_error.selectLedger }}
          </p>
            <p v-if="stockItemsError.partynameSearchQuery">
            {{ stockItemsError.partynameSearchQuery }}
          </p>
          <p v-if="addLedger_error.ledgerAmount">
            {{ addLedger_error.ledgerAmount }}
          </p>
          <p v-if="advancedError.dispatch_shipping_date">
            {{ advancedError.dispatch_shipping_date }}
          </p>
           <p v-if="advancedError.dispatch_delivery_note">
            {{ advancedError.dispatch_delivery_note }}
          </p>
          <!-- <p v-if="advancedError.dispatch_doc_no">
            {{ advancedError.dispatch_doc_no }}
          </p> -->
          <p v-if="advancedError.order_date">{{ advancedError.order_date }}</p>
          <p v-if="advancedError.order_no">{{ advancedError.order_no }}</p>
          <p v-if="advancedError.BuyerGstin">{{ advancedError.BuyerGstin }}</p>
          <p v-if="advancedError.consigneeGstin">
            {{ advancedError.consigneeGstin }}
          </p>
          <p v-if="advancedError.dispatch_destination">{{ advancedError.dispatch_destination }}</p>
          <p v-if="advancedError.vechileNumberInvalid">{{ advancedError.vechileNumberInvalid }}</p>
          <p v-if="advancedError.BuyerPostalCode">
            {{ advancedError.BuyerPostalCode }}
          </p>

          <p v-if="advancedError.consigneePostalCode">
            {{ advancedError.consigneePostalCode }}
          </p>

          <p v-if="voucher_error">{{ this.voucher_error }}</p>
          <p v-if="service_error.otheritems">{{ service_error.otheritems }}</p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-12 mb-3">
            <!-- Voucher Type Dropdown -->
            <div class="OtherTypeSearchDropdownRechanges">
              <span class="borderlinetextdropdownRechanges backgroundgradientRechanges">Voucher Type</span>
              <input ref="voucherInput" type="text" v-model="voucherSearchQuery"
                @focus="toggleDropdown('voucher', true)" @blur="toggleDropdown('voucher', false)"
                @input="filterOptions('voucher')" @keydown.down.prevent="navigateDropdown('voucher', 1)"
                @keydown.up.prevent="navigateDropdown('voucher', -1)"
                @keydown.enter.prevent="selectActiveOption('voucher')" placeholder="Select Type"
                 :disabled="isDisable || this.isVoucherEditable" />
              <button v-if="voucherSearchQuery" @click="clearSearch('voucher')" class="inputcrossiconRechanges"
                 :disabled="isDisable || this.isVoucherEditable">
                <i class="fa fa-times"></i>
              </button>
              <i v-else class="fa fa-search input-search-icon-Rechanges"></i>
              <ul v-if="voucherDropdownOpen" class="SetScrollbarWidthSize">
                <li v-for="(option, index) in voucherFilteredOptions" :key="option.voucherTypeName" :data-id="option.id"
                  @mousedown="selectOption('voucher', option)"
                  :class="{ active: index === voucherActiveIndex }" v-scroll-into-view="index === voucherActiveIndex">
                  {{ option.voucherTypeName }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-12 mb-3">
            <!-- Party name Dropdown -->
            <div class="OtherTypeSearchDropdownRechanges">
              <span class="borderlinetextdropdownRechanges backgroundgradientRechanges">Party Name</span>
              <input ref="partynameInput" type="text" v-model="partynameSearchQuery"
                @focus="toggleDropdown('partyname', true)" @blur="toggleDropdown('partyname', false)"
                @input="filterOptions('partyname')" @keydown.down.prevent="navigateDropdown('partyname', 1)"
                @keydown.up.prevent="navigateDropdown('partyname', -1)"
                @keydown.enter.prevent="selectActiveOption('partyname')" placeholder="Select Party"
                 :disabled="isDisable || this.isVoucherEditable" />
              <button v-if="partynameSearchQuery" @click="clearSearch('partyname')" class="inputcrossiconRechanges"
                 :disabled="isDisable || this.isVoucherEditable">
                <i class="fa fa-times"></i>
              </button>
              <i v-else class="fa fa-search input-search-icon-Rechanges"></i>
              <ul v-if="partynameDropdownOpen" class="SetScrollbarWidthSize">
                <li v-for="(option, index) in partynameFilteredOptions" :key="option.ledgerName" :data-id="option.name"
                  @mousedown="selectOption('partyname', option)"
                  :class="{ active: index === partynameActiveIndex }"
                  v-scroll-into-view="index === partynameActiveIndex">
                  <div class="row">
                    <div class="col-8">
                      <div class="partynameleftsearchabledrpdwnRechanges text-left">
                        <p class="mb-0">{{ option.ledgerName }}</p>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="partynamerightsearchabledrpdwnRechanges text-right">
                        <p class="mb-0">
                          <span class="font_sans">₹</span>{{ option.amount }}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-12 mb-3">
            <!-- Ledger Type Dropdown -->
            <div class="OtherTypeSearchDropdownRechanges">
              <span class="borderlinetextdropdownRechanges backgroundgradientRechanges">Ledger Type</span>
              <input ref="ledgertypeInput" type="text" v-model="ledgertypeSearchQuery"
                @focus="toggleDropdown('ledgertype', true)" @blur="toggleDropdown('ledgertype', false)"
                @input="filterOptions('ledgertype')" @keydown.down.prevent="navigateDropdown('ledgertype', 1)"
                @keydown.up.prevent="navigateDropdown('ledgertype', -1)"
                @keydown.enter.prevent="selectActiveOption('ledgertype')" placeholder="Select Ledger" :disabled="isDisable"/>
              <button v-if="ledgertypeSearchQuery" @click="clearSearch('ledgertype')" class="inputcrossiconRechanges"
                 :disabled="(isTransfer == 1 && fromMyVoucher) ">
                <i class="fa fa-times"></i>
              </button>
              <i v-else class="fa fa-search input-search-icon-Rechanges"></i>
              <ul v-if="ledgertypeDropdownOpen" class="SetScrollbarWidthSize">
                <li v-for="(option, index) in ledgertypeFilteredOptions" :key="option.value" :data-id="option.name"
                  @mousedown="selectOption('ledgertype', option)"
                  :class="{ active: index === ledgertypeActiveIndex }"
                  v-scroll-into-view="index === ledgertypeActiveIndex">
                  <div class="ledgertypeinnerdropdownRechanges text-left">
                    <p class="mb-0">{{ option.ledgerName }}</p>
                    <h6 class="mb-0">
                      GST Applicable: <span>{{ option.gstApplicable }}</span> |
                      Tax: {{ option.tax }}%
                    </h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!----Voucher Number-->
          <div class="col-lg-4 col-12 mb-2">
            <div class="VoucherNumberNewEntryRechanges">
              <label class="voucherNumberLabel">Voucher No</label>
              <p v-if="this.voucherNumber" class="mb-0 widthsetvouchernumberRechanges">
                {{ this.voucherNumber }}
              </p>
              <p v-else class="mb-0 widthsetvouchernumberRechanges">-</p>
              <p class="mb-0 PencilIconRight" >
                 <a v-if="this.fromMyVoucher && this.isTransfer == 0" href="javascript:void(0);"  @click="toggleEdit()">
                  <i class="fa fa-pencil text-dark" aria-hidden="true"></i>
                </a>
                <a v-else-if="this.fromMyVoucher && this.isTransfer == 1" href="javascript:void(0);">
                  <i class="fa fa-pencil text-dark" aria-hidden="true"></i>
                </a>
                <a v-else-if="this.isVoucherEditable" href="javascript:void(0);">
                  <i class="fa fa-pencil text-dark" aria-hidden="true"></i>
                </a>
                <a v-else href="javascript:void(0);" @click="toggleEdit()">
                  <i class="fa fa-pencil text-dark" aria-hidden="true"></i>
                </a>
              </p>
              <div v-if="isEditing" class="editVoucherboxRechanges" v-click-outside="closeEvent">
                <div v-if="VoucherEditable" class="invoice_radio_button">
                  <input type="radio" class="invoice_radio" id="defaultRadio" name="radioGroup" value="default"
                    v-model="selectedOptionradio" autocomplete="off" />
                  <label for="defaultRadio" class="fontssetlabelRechanges">Default</label>
                </div>
                <div v-if="VoucherEditable" class="custominputboxnewentryradioRechanges">
                  <div class="invoice_radio_button">
                    <input type="radio" class="invoice_radio" id="customRadio" name="radioGroup" value="custom"
                      v-model="selectedOptionradio" autocomplete="off" />
                    <label for="customRadio" class="fontssetlabelRechanges">Custom</label>
                  </div>
                  <div class="onlyinputcustomradioRechanges">
                    <input type="text" :disabled="isDefaultSelected || isDisable " placeholder="Prefix"
                      class="form-control me-2" @input="validateInput" v-model="custom_prefix" />

                    <input type="number" :disabled="isDefaultSelected || isDisable " placeholder="Voucher no"
                      class="form-control me-2" v-model="custom_Voucher_number" @keypress="allowOnlyNumbers" />

                    <input type="text" :disabled="isDefaultSelected || isDisable " placeholder="Suffix"
                      class="form-control" v-model="custom_suffix" @input="handleVoucherSuffixInput" />
                  </div>
                </div>
                <span class="error-validation" v-if="vouchernumberError.PrefixError">{{ vouchernumberError.PrefixError
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
                        :disabled="isDisable" />
                    <button   :disabled="isDisable" v-if="referenceSearchQuery" @click="ReferenceclearSearch"
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
                    <input class="mt-3" :disabled="isDisable" v-model="billNumberData" v-if="
                      referenceSearchQuery == 'New Reference' ||
                      referenceSearchQuery == 'New Ref'
                    " placeholder="Bill Number" />
                    <span class="error-validation" v-if="vouchernumberError.billNumberError">
                      {{ vouchernumberError.billNumberError }}
                    </span>
                  </div> -->
                <!-- </div> -->
                <div class="SAveCancelButtonRechanges text-right border-top pt-3">
                  <button @click="toggleEdit" class="VoucherCancelButtonRechanges me-2">
                    Cancel
                  </button>
                  <button  @click="saveEdit" class="VoucherSaveButtonRechanges">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12 mb-2">
            <div class="newbackentryinvoicedateRechanges">
              <label class="VoucherDateRechanges">Date</label>
              <div class="datepicker_image_set">
                <span class="sales_date_img_new">
                  <img src="/assets/images/1.0/sales/calendar.svg" class="img-fluid" />
                </span>
                <Datepicker v-model="newinvoiceDate" format="dd MMM yyyy" placeholder="03 Nov 2023"
                  :disabled="this.isVoucherEditable || (this.isTransfer == 1 && this.fromMyVoucher)" :disabled-dates="disabledBookDates"></Datepicker>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12 mb-2" v-if="usePriceLevels == 'Yes'">
            <div class="OtherTypeSearchDropdownRechanges">
              <span class="borderlinetextdropdownRechanges backgroundgradientRechanges">Price Level</span>
              <input ref="pricelevelInput" type="text" v-model="pricelevelSearchQuery"
                @focus="toggleDropdown('pricelevel', true)" @blur="toggleDropdown('pricelevel', false)"
                @input="filterOptions('pricelevel')" @keydown.down.prevent="navigateDropdown('pricelevel', 1)"
                @keydown.up.prevent="navigateDropdown('pricelevel', -1)"
                @keydown.enter.prevent="selectActiveOption('pricelevel')" placeholder="Select Price Level"
                />
              <button v-if="pricelevelSearchQuery"  :disabled="isDisable" @click="clearSearch('pricelevel')" class="inputcrossiconRechanges">
                <i class="fa fa-times"></i>
              </button>
              <i v-else class="fa fa-search input-search-icon-Rechanges"></i>
              <ul v-if="pricelevelDropdownOpen" class="SetScrollbarWidthSize">
                <li v-for="(option, index) in pricelevelFilteredOptions" :key="option.priceLevelName"
                  :data-id="option.name" @mousedown="selectOption('pricelevel', option)"
                  :class="{ active: index === pricelevelActiveIndex }"
                  v-scroll-into-view="index === pricelevelActiveIndex">
                  {{ option.priceLevelName }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!------------------->
    <div class="MiddleTableFormatBackEntryRechanges">
      <table width="100%" class="TableMiddleBackEntryRechanges">
        <thead style="padding-bottom: 5px">
          <tr>
            <!-- <th width="4%" class="text-center">No</th> -->
            <th width="20%" class="text-left">Items</th>
            <th width="10%" class="text-center">Qty</th>
            <th width="10%" class="text-center">Rate</th>
            <th width="8%" class="text-center">Disc %</th>
            <th width="14%" class="text-center">Godown</th>
            <th width="14%" class="text-center">Description</th>
            <th width="10%" class="text-center">Amount</th>
            <th width="8%" class="text-center">Tax Incl.</th>
            <th width="6%" style="text-align: center">
              <button class="NewItemNewBackEtryRechanges" @click="AddNewItemClick"  :disabled="isDisable">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody style="padding-bottom: 5px">
          <tr v-for="(addnewitem, index) in AddNewItemList" :key="addnewitem.id">
            <!-- <td class="text-center">{{ index + 1 }}</td> -->
            <td class="text-left">
              <!-- Table Items Dropdown -->
              <div class="TableItemsserachableDropdownRechanges">
                <input ref="tableitemsInput" type="text" v-model="AddNewItemList[index].tableitemsSearchQuery"
                  @focus="toggleTableItemsDropdown('Items', index, true)" @blur="toggleTableItemsDropdown('Items',index, false)"
                  @input="filterTableItemsOptions('Items', $event, index)" @keydown.down.prevent="
                    navigateTableItemsDropdown(
                      'Items',
                      index,
                      'tableitemsFilteredOptions',
                      'tableitemsActiveIndex',
                      1
                    )
                    " @keydown.up.prevent="
                      navigateTableItemsDropdown(
                        'Items',
                        index,
                        'tableitemsFilteredOptions',
                        'tableitemsActiveIndex',
                        -1
                      )
                      " @keydown.enter.prevent="
                        selectTableItemsActiveOption(
                          'Items',
                          index,
                          'tableitemsFilteredOptions',
                          'tableitemsActiveIndex',
                          'tableitemsSearchQuery',
                          'tableitems'
                        )
                        " placeholder="Search Item" :disabled="button_disabled === '1' || isDisable" />
                <button v-if="AddNewItemList[index].tableitemsSearchQuery"
                  @click="clearTableItemsSearch('Items', index)" class="inputcrossiconRechangesTableitems" :disabled="isDisable"
                 >
                  <i class="fa fa-times"></i>
                </button>
                <i v-else class="fa fa-search input-search-icon-Rechanges-Tableitems"></i>
                <ul v-if="AddNewItemList[index].tableitemsDropdownOpen" class="SetScrollbarWidthSize">
                  <li v-for="(option, optionIndex) in tableitemsFilteredOptions" :key="option.value" :class="{
                    active:
                      optionIndex ===
                      AddNewItemList[index].tableitemsActiveIndex,
                  }" v-scroll-into-view="optionIndex ===
                    AddNewItemList[index].tableitemsActiveIndex
                    " @mousedown="selectTableItemsOption(option, index)">
                    <div class="row">
                      <div class="col-8">
                        <div class="itemsnamewithhsnRechanges">
                          <h6 class="mb-0">
                            {{ option.tableitemsSearchQuery }}
                          </h6>
                          <p class="mb-0">HSN Code: {{ option.hsncode }}</p>
                          <p class="mb-0">In Stock: {{ option.totalQuantity }}</p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="tableitemsrightquantityRechanges text-right">
                          <p class="mb-0">
                            <span :class="{
                              'color-green-item-text':
                                option.color === 'green',
                              'color-red-item-text': option.color === 'red',
                            }">{{ option.quantity }}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
            <td class="text-center">
              <div class="InnerTableBackEntrytdDivRechanges">
                <input ref="quantityInput" type="number" placeholder="0" v-model="addnewitem.itemquantity"
                  @keydown="handleKeyDown" v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll"
                  @keyup="updateAmount(index)" :disabled="button_disabled === '1' || isDisable"
                  @focus="toggleTableItemsDropdown('QTY', index, true)"
                  @blur="toggleTableItemsDropdown('QTY', index, false)"
                  @input="limitDecimalPlaces('Qty',index)"
                   />
              </div>
            </td>
            <td class="text-center">
              <div class="InnerTableBackEntrytdDivRechanges">
                <input type="number" placeholder="0" v-model="addnewitem.itemrate" @keydown="handleKeyDown"
                  @keyup="updateAmount(index)" v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll"
                  :disabled="button_disabled === '1' || isDisable"
                  @focus="toggleTableItemsDropdown('Rate', index, true)"
                  @blur="toggleTableItemsDropdown('Rate', index, false)"
                  @input="limitDecimalPlaces('rate',index)"
                   />
              </div>
            </td>
            <td class="text-center">
              <div class="InnerTableBackEntrytdDivRechanges">
                <input type="number" placeholder="0" v-model="addnewitem.itemdiscount" @keydown="handleKeyDown"
                  @input="updateAmount(index)" v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll"
                  :disabled="button_disabled === '1' || isDisable"
                  @focus="toggleTableItemsDropdown('Discount', index, true)" />
              </div>
            </td>
            <!-- <td class="text-center">
              <div class="InnerTableBackEntrytdDivRechanges CustomSelect">
                <select @change="change_godown($event, index)" v-model="addnewitem.selectedgodownsOption"
                  :disabled="button_disabled === '1' || isDisable">
                  <option value="" disabled hidden>Select Godown</option>
                  <option v-for="godown in godowns" :key="godown.name" :value="godown.name">
                    {{ godown.name }}
                  </option>
                </select>
              </div>
            </td> -->
            <td class="text-center">
              <div class="TableItemsserachableDropdownRechanges">
                <input ref="godowninput" type="text" v-model="AddNewItemList[index].selectedgodownsOption"
                  @focus="toggleTableItemsDropdown('Godowns', index, true)"
                  @blur="toggleTableItemsDropdown('Godowns', index, false)"
                  @input="filterTableItemsOptions('Godowns', $event, index)" @keydown.down.prevent="
                    navigateTableItemsDropdown(
                      'Godowns',
                      index,
                      'filteredGodowns',
                      'GodownActiveIndex',
                      1
                    )
                    " @keydown.up.prevent="
                      navigateTableItemsDropdown(
                        'Godowns',
                        index,
                        'filteredGodowns',
                        'GodownActiveIndex',
                        -1
                      )
                      " @keydown.enter.prevent="
                        selectTableItemsActiveOption(
                          'Godowns',
                          index,
                          'filteredGodowns',
                          'GodownActiveIndex'
                        )
                        " placeholder="Search godown" :disabled="button_disabled === '1' || isDisable" />
                <button v-if="AddNewItemList[index].selectedgodownsOption"
                  @click="clearTableItemsSearch('Godowns', index)" class="inputcrossiconRechangesTableitems"
                 >
                  <i class="fa fa-times"></i>
                </button>
                <i v-else class="fa fa-search input-search-icon-Rechanges-Tableitems"></i>
                <ul v-if="AddNewItemList[index].GodownDropdownOpen" class="SetScrollbarWidthSize">
                  <li v-for="(option, optionIndex) in filteredGodowns" :key="option.name" :class="{
                    active:
                      optionIndex === AddNewItemList[index].GodownActiveIndex,
                  }" v-scroll-into-view="optionIndex === AddNewItemList[index].GodownActiveIndex
                    " @mousedown="selectGodown(option, index)">
                    {{ option.name }}
                  </li>
                </ul>
              </div>
            </td>
            <td class="text-center">
              <div class="InnerTableBackEntrytdDivRechanges">
                <!-- <input
                  type="text"
                  placeholder="Enter Notes"
                  v-model="addnewitem.itemdescription"
                  @input="change_description($event, index)"
                  :disabled="button_disabled === '1' || isDisable"
                /> -->
                <textarea class="textareatableinner" ref="descriptionInputs" type="text" placeholder="Enter Notes"
                  v-model="addnewitem.itemdescription" @input="change_description($event, index)"
                  :disabled="button_disabled === '1' || isDisable"></textarea>
              </div>
            </td>
            <td class="text-center">
              <div class="InnerTableBackEntrytdDivRechanges">
                <input ref="amountInput" type="number" placeholder="0.00" v-model="addnewitem.itemamount"
                  @keyup="AmountChangeFunction(index)"
                  @keydown = "handleKeyDown"
                 v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll" />
              </div>
            </td>
            <td class="text-center">
              <div class="TaxInclusivecheckboxRechanges">
                <input @click="taxInclusive_calculation($event, index)" type="checkbox" id="customCheckbox"
                  v-model="addnewitem.isChecked" class="custom-checkbox"
                  :disabled="button_disabled === '1' || isDisable" />
              </div>
            </td>
            <td class="text-center">
              <div class="ActionDeleteIconNewRechanges">
                <a href="javascript:void(0);" class="color-red-icon-delete" @click="removeNewItem(index)"
                  :class="{ disabled: index === 0 }" :disabled="button_disabled === '1' || isDisable">
                  <i class="fa fa-trash"></i>
                </a>
                <!-- Plus icon - only show in last row -->
                <button
                  v-if="index === AddNewItemList.length - 1 && AddNewItemList.length > 1"
                  class="AddNewItemInTableSideDelete"
                  @click="AddNewItemClick"
                  :disabled="isDisable"
                >
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!------------------->
    <div class="NarrationTaxesDivRechanges">
      <div class="row">
        <div class="col-lg-7 col-12">
          <div class="NarrationBoxesNewBackRechanges mb-2">
            <div class="NarrationLabelCloseRechanges cursor-pointer" @click="toggleTextarea">
              <h6 class="mb-0">Narration</h6>
              <i :class="isTextareaVisible
                ? 'fa fa-chevron-down'
                : 'fa fa-chevron-right'
                "></i>
            </div>
            <div v-if="isTextareaVisible" class="TextareaNarrationRechanges mt-2">
              <textarea ref="narrationInput" name="narration" rows="1" v-model="narration" placeholder="Enter Notes"
                class="w-full"  @input="validateWordLimit" :disabled="isDisable"></textarea>
            </div>
            <span class="error-validation" v-if="isWordLimitExceeded">
              Word limit exceeded! Maximum 500 words allowed.</span>
          </div>
          <div class="AdvanceSettingNewBackEntryRechanges">
            <div
              class="AdvanceSettingsFirstCaptionRechanges d-flex align-items-center justify-content-between cursor-pointer"
              @click="toggleAdvancedSettings">
              <h6 class="mb-0">Advanced Settings</h6>
              <i :class="chevronClass" aria-hidden="true"></i>
            </div>
            <ul class="d-flex align-items-center justify-content-between advancedSetingsulRechanges"
              v-if="isAdvancedSettingsOpen">
              <li>
                <a href="javascript:void(0);" v-on:click="toggleTabs(1)" v-bind:class="{
                  details_link_inactive: openTab !== 1,
                  details_link_active: openTab === 1,
                }">
                  Supplier Details
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" v-on:click="toggleTabs(2)" v-bind:class="{
                  details_link_inactive: openTab !== 1,
                  details_link_active: openTab === 2,
                }">Consignee Details
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" v-on:click="toggleTabs(3)" v-bind:class="{
                  details_link_inactive: openTab !== 2,
                  details_link_active: openTab === 3,
                }">Dispatch Details
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" v-on:click="toggleTabs(4)" v-bind:class="{
                  details_link_inactive: openTab !== 3,
                  details_link_active: openTab === 4,
                }">Order Details</a>
              </li>
              <!-- <li>
                <a
                  href="javascript:void(0);"
                  v-on:click="toggleTabs(5)"
                  v-bind:class="{
                    details_link_inactive: openTab !== 4,
                    details_link_active: openTab === 5,
                  }"
                  >e-Way Bills</a
                >
              </li> -->
            </ul>
            <div class="mt-3 TabContentDivMainTabSpace" v-if="isAdvancedSettingsOpen">
              <div class="tab-content tab-space">
                <div v-bind:class="{
                  hidden: openTab !== 1,
                  block: openTab === 1,
                }">
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-3">
                      <!-- Buyers Name Dropdown -->
                      <div class="OtherTypeSearchDropdownRechanges SetHeightAdvancedSettingDropdown">
                        <span class="borderlinetextdropdownRechanges">Supplier Name</span>
                        <input type="text" v-model="buyersnameSearchQuery" @focus="
                          AdvancedDroptoggleDropdown(
                            'buyersnameDropdownOpen',
                            true
                          )
                          " @blur="
                            AdvancedDroptoggleDropdown(
                              'buyersnameDropdownOpen',
                              false
                            )
                            " @input="
                              AdvancedDropfilterOptions(
                                'buyersnameSearchQuery',
                                'buyersnameFilteredOptions',
                                buyersnameOptions,
                                'buyersnamelabel'
                              )
                              " @keydown.down.prevent="
                                AdvancednavigateDropdown(
                                  'buyersnameFilteredOptions',
                                  'buyersnameActiveIndex',
                                  1
                                )
                                " @keydown.up.prevent="
                                  AdvancednavigateDropdown(
                                    'buyersnameFilteredOptions',
                                    'buyersnameActiveIndex',
                                    -1
                                  )
                                  " @keydown.enter.prevent="
                                    AdvancedselectActiveOption(
                                      'buyersnameFilteredOptions',
                                      'buyersnameActiveIndex',
                                      'buyersnameSelectedOption',
                                      'buyersnameSearchQuery',
                                      'buyersnamelabel',
                                      'buyercountryInput'
                                    )
                                    " placeholder="Buyer's Name" ref="buyersnameInput" :disabled="isDisable"/>
                        <button v-if="buyersnameSearchQuery" @click="
                          AdvancedDropclearSearch(
                            'buyersnameSearchQuery',
                            'BuyerName'
                          )
                          " class="inputcrossiconRechanges" :disabled="isDisable">
                          <i class="fa fa-times"></i>
                        </button>
                        <i v-else class="fa fa-caret-down input-search-icon-Rechanges"></i>
                        <ul v-if="buyersnameDropdownOpen" class="SetScrollbarWidthSize">
                          <li v-for="(option, index) in buyersnameFilteredOptions" :key="option.value"
                            :data-id="option.name" :class="{ active: index === buyersnameActiveIndex }"
                            v-scroll-into-view="index === buyersnameActiveIndex" @mousedown="
                              AdvancedDropselectOption(
                                'buyersnameSelectedOption',
                                'buyersnameSearchQuery',
                                option,
                                'buyersnamelabel'
                              )
                              ">
                            {{ option.ledgerName }}
                          </li>
                        </ul>
                      </div>
                      <span class="error-validation" v-if="advancedError.buyersnameSearchQuery">
                        {{ advancedError.buyersnameSearchQuery }}
                      </span>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <!-- Buyer Country Dropdown -->
                      <div class="OtherTypeSearchDropdownRechanges SetHeightAdvancedSettingDropdown">
                        <span class="borderlinetextdropdownRechanges">Country</span>
                        <input type="text" v-model="buyercountrySearchQuery" @focus="
                          AdvancedDroptoggleDropdown(
                            'buyercountryDropdownOpen',
                            true
                          )
                          " @blur="
                            AdvancedDroptoggleDropdown(
                              'buyercountryDropdownOpen',
                              false
                            )
                            " @input="
                              AdvancedDropfilterOptions(
                                'buyercountrySearchQuery',
                                'buyercountryFilteredOptions',
                                CountryData,
                                'buyerscountrylabel'
                              )
                              " @keydown.down.prevent="
                                AdvancednavigateDropdown(
                                  'buyercountryFilteredOptions',
                                  'buyercountryActiveIndex',
                                  1
                                )
                                " @keydown.up.prevent="
                                  AdvancednavigateDropdown(
                                    'buyercountryFilteredOptions',
                                    'buyercountryActiveIndex',
                                    -1
                                  )
                                  " @keydown.enter.prevent="
                                    AdvancedselectActiveOption(
                                      'buyercountryFilteredOptions',
                                      'buyercountryActiveIndex',
                                      'buyercountrySelectedOption',
                                      'buyercountrySearchQuery',
                                      'buyerscountrylabel',
                                      'buyerstateInput'
                                    )
                                    " placeholder="Buyer's Country" ref="buyercountryInput" :disabled="isDisable"
                          />
                        <button v-if="buyercountrySearchQuery" @click="
                          AdvancedDropclearSearch(
                            'buyercountrySearchQuery',
                            'buyerCountry'
                          )
                          " class="inputcrossiconRechanges" :disabled="isDisable">
                          <i class="fa fa-times"></i>
                        </button>
                        <i v-else class="fa fa-caret-down input-search-icon-Rechanges"></i>
                        <ul v-if="buyercountryDropdownOpen" class="SetScrollbarWidthSize">
                          <li v-for="(
option, index
                            ) in buyercountryFilteredOptions" :key="option.value" :data-id="option.name" :class="{
                              active: index === buyercountryActiveIndex,
                            }" v-scroll-into-view="index === buyercountryActiveIndex
                              " @mousedown="
                                AdvancedDropselectOption(
                                  'buyercountrySelectedOption',
                                  'buyercountrySearchQuery',
                                  option,
                                  'buyerscountrylabel'
                                )
                                ">
                            {{ option.name }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <!-- Buyer Country Dropdown -->
                      <div class="OtherTypeSearchDropdownRechanges SetHeightAdvancedSettingDropdown">
                        <span class="borderlinetextdropdownRechanges">State</span>
                        <input type="text" v-model="buyerstateSearchQuery" @focus="
                          AdvancedDroptoggleDropdown(
                            'buyerstateDropdownOpen',
                            true
                          )
                          " @blur="
                            AdvancedDroptoggleDropdown(
                              'buyerstateDropdownOpen',
                              false
                            )
                            " @input="
                              AdvancedDropfilterOptions(
                                'buyerstateSearchQuery',
                                'buyerstateFilteredOptions',
                                stateData,
                                'buyersstatelabel'
                              )
                              " @keydown.down.prevent="
                                AdvancednavigateDropdown(
                                  'buyerstateFilteredOptions',
                                  'buyerstateActiveIndex',
                                  1
                                )
                                " @keydown.up.prevent="
                                  AdvancednavigateDropdown(
                                    'buyerstateFilteredOptions',
                                    'buyerstateActiveIndex',
                                    -1
                                  )
                                  " @keydown.enter.prevent="
                                    AdvancedselectActiveOption(
                                      'buyerstateFilteredOptions',
                                      'buyerstateActiveIndex',
                                      'buyerstateSelectedOption',
                                      'buyerstateSearchQuery',
                                      'buyersstatelabel',
                                      'buyerregistrationInput'
                                    )
                                    " placeholder="Buyer's State" ref="buyerstateInput" :disabled="isDisable" />
                        <button v-if="buyerstateSearchQuery" @click="
                          AdvancedDropclearSearch('buyerstateSearchQuery', 'buyerState')
                          " class="inputcrossiconRechanges" :disabled="isDisable">
                          <i class="fa fa-times"></i>
                        </button>
                        <i v-else class="fa fa-caret-down input-search-icon-Rechanges"></i>
                        <ul v-if="buyerstateDropdownOpen" class="SetScrollbarWidthSize">
                          <li v-for="(option, index) in buyerstateFilteredOptions" :key="option.value"
                            :data-id="option.name" :class="{ active: index === buyerstateActiveIndex }"
                            v-scroll-into-view="index === buyerstateActiveIndex" @mousedown="
                              AdvancedDropselectOption(
                                'buyerstateSelectedOption',
                                'buyerstateSearchQuery',
                                option,
                                'buyersstatelabel'
                              )
                              ">
                            {{ option.name }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-3">
                      <!-- Buyer Country Dropdown -->
                      <div class="OtherTypeSearchDropdownRechanges SetHeightAdvancedSettingDropdown">
                        <span class="borderlinetextdropdownRechanges">Registration Type</span>
                        <input type="text" v-model="buyerregistrationSearchQuery" @focus="
                          AdvancedDroptoggleDropdown(
                            'buyerregistrationDropdownOpen',
                            true
                          )
                          " @blur="
                            AdvancedDroptoggleDropdown(
                              'buyerregistrationDropdownOpen',
                              false
                            )
                            " @input="
                              AdvancedDropfilterOptions(
                                'buyerregistrationSearchQuery',
                                'buyerregistrationFilteredOptions',
                                buyerregistrationOptions,
                                'buyersregistrationlabel'
                              )
                              " @keydown.down.prevent="
                                AdvancednavigateDropdown(
                                  'buyerregistrationFilteredOptions',
                                  'buyerregistrationActiveIndex',
                                  1
                                )
                                " @keydown.up.prevent="
                                  AdvancednavigateDropdown(
                                    'buyerregistrationFilteredOptions',
                                    'buyerregistrationActiveIndex',
                                    -1
                                  )
                                  " @keydown.enter.prevent="
                                    AdvancedselectActiveOption(
                                      'buyerregistrationFilteredOptions',
                                      'buyerregistrationActiveIndex',
                                      'buyerregistrationSelectedOption',
                                      'buyerregistrationSearchQuery',
                                      'buyersregistrationlabel',
                                      'postalcodeInput'
                                    )
                                    " placeholder="Registration Type" ref="buyerregistrationInput" :disabled="isDisable"
                          />
                        <button v-if="buyerregistrationSearchQuery" @click="
                          AdvancedDropclearSearch(
                            'buyerregistrationSearchQuery', 'buyerRegistration'
                          )
                          " class="inputcrossiconRechanges" :disabled="isDisable">
                          <i class="fa fa-times"></i>
                        </button>
                        <i v-else class="fa fa-caret-down input-search-icon-Rechanges"></i>
                        <ul v-if="buyerregistrationDropdownOpen" class="SetScrollbarWidthSize">
                          <li v-for="(
option, index
                            ) in buyerregistrationFilteredOptions" :key="option.value" :data-id="option.name" :class="{
                              active: index === buyerregistrationActiveIndex,
                            }" v-scroll-into-view="index === buyerregistrationActiveIndex
                              " @mousedown="
                                AdvancedDropselectOption(
                                  'buyerregistrationSelectedOption',
                                  'buyerregistrationSearchQuery',
                                  option,
                                  'buyersregistrationlabel'
                                )
                                ">
                            {{ option.buyersregistrationlabel }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Postal Code</span>
                        <input type="number" placeholder="Postal Code" @keydown="handleKeyDown" :disabled="isDisable"
                          v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll" v-model="BuyerPostalCode"
                          ref="postalcodeInput" @input="validatePostal($event)" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">GSTIN/UIN</span>
                        <input type="text" placeholder="GSTIN" @keydown="handleKeyDown" v-on:keydown="disableArrowKeys"
                          v-on:wheel="disableMouseWheelScroll" v-model="BuyerGstin" :disabled="isDisable"
                          @input="validateGSTIN" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-2">
                      <!-- <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Place of Supply</span>
                        <input type="text" placeholder="Place of Supply" v-model="BuyerPlaceOfSupply"
                          />
                      </div> -->
                      <div class="OtherTypeSearchDropdownRechanges SetHeightAdvancedSettingDropdown">
                        <span class="borderlinetextdropdownRechanges">Place of Supply</span>
                        <input type="text" v-model="buyerplaceofsupplySearchQuery" @focus="
                          AdvancedDroptoggleDropdown(
                            'buyerplaceofsupplyDropdownOpen',
                            true
                          )
                          " @blur="
                            AdvancedDroptoggleDropdown(
                              'buyerplaceofsupplyDropdownOpen',
                              false
                            )
                            " @input="
                              AdvancedDropfilterOptions(
                                'buyerplaceofsupplySearchQuery',
                                'buyerplaceofsupplyFilteredOptions',
                                stateData,
                                'buyerplaceofsupplylabel'
                              )
                              " @keydown.down.prevent="
                                AdvancednavigateDropdown(
                                  'buyerplaceofsupplyFilteredOptions',
                                  'buyerplaceofsupplyActiveIndex',
                                  1
                                )
                                " @keydown.up.prevent="
                                  AdvancednavigateDropdown(
                                    'buyerplaceofsupplyFilteredOptions',
                                    'buyerplaceofsupplyActiveIndex',
                                    -1
                                  )
                                  " @keydown.enter.prevent="
                                    AdvancedselectActiveOption(
                                      'buyerplaceofsupplyFilteredOptions',
                                      'buyerplaceofsupplyActiveIndex',
                                      'buyerplaceofsupplySelectedOption',
                                      'buyerplaceofsupplySearchQuery',
                                      'buyerplaceofsupplylabel',
                                    )
                                    " placeholder="Place of Supply" ref="buyerplaceofsupplyInput" :disabled="isDisable"
                          />
                        <button v-if="buyerplaceofsupplySearchQuery" @click="
                          AdvancedDropclearSearch(
                            'buyerplaceofsupplySearchQuery',
                            'buyerplaceofsupply'
                          ) 
                          " class="inputcrossiconRechanges" :disabled="isDisable">
                          <i class="fa fa-times"></i>
                        </button>
                        <i v-else class="fa fa-caret-down input-search-icon-Rechanges"></i>
                        <ul v-if="buyerplaceofsupplyDropdownOpen" class="SetScrollbarWidthSize">
                          <li v-for="(option, index) in buyerplaceofsupplyFilteredOptions" :key="option.value"
                            :data-id="option.name" :class="{ active: index === buyerplaceofsupplyActiveIndex }"
                            v-scroll-into-view="index === buyerplaceofsupplyActiveIndex" @mousedown="
                              AdvancedDropselectOption(
                                'buyerplaceofsupplySelectedOption',
                                'buyerplaceofsupplySearchQuery',
                                option,
                                'buyerplaceofsupplylabel'
                              )
                              ">
                            {{ option.name }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-8 col-12 mb-2">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Address</span>
                        <textarea v-model="buyerAddress" name="Address" rows="1" placeholder="Address" cols="50"
                         :disabled="isDisable">{{ this.buyerAddress }}</textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-bind:class="{
                  hidden: openTab !== 2,
                  block: openTab === 2,
                }">
                  <div class="row">
                    <div class="col-lg-6 col-12 mb-3">
                      <!-- Consignee Name Dropdown -->
                      <div class="OtherTypeSearchDropdownRechanges SetHeightAdvancedSettingDropdown">
                        <span class="borderlinetextdropdownRechanges">Consignee Name</span>
                        <input type="text" v-model="consigneenameSearchQuery" @focus="
                          AdvancedDroptoggleDropdown(
                            'consigneenameDropdownOpen',
                            true
                          )
                          " @blur="
                            AdvancedDroptoggleDropdown(
                              'consigneenameDropdownOpen',
                              false
                            )
                            " @input="
                              AdvancedDropfilterOptions(
                                'consigneenameSearchQuery',
                                'consigneenameFilteredOptions',
                                buyersnameFilteredOptions,
                                'consigneenamelabel'
                              )
                              " @keydown.down.prevent="
                                AdvancednavigateDropdown(
                                  'consigneenameFilteredOptions',
                                  'consigneenameActiveIndex',
                                  1
                                )
                                " @keydown.up.prevent="
                                  AdvancednavigateDropdown(
                                    'consigneenameFilteredOptions',
                                    'consigneenameActiveIndex',
                                    -1
                                  )
                                  " @keydown.enter.prevent="
                                    AdvancedselectActiveOption(
                                      'consigneenameFilteredOptions',
                                      'consigneenameActiveIndex',
                                      'consigneenameSelectedOption',
                                      'consigneenameSearchQuery',
                                      'consigneenamelabel',
                                      'consigneeGSTInput'
                                    )
                                    " placeholder="Consignee Name" ref="consigneenameInput" :disabled="isDisable"
                          />
                        <button v-if="consigneenameSearchQuery" @click="
                          AdvancedDropclearSearch(
                            'consigneenameSearchQuery',
                            'consigneeName'
                          )
                          " class="inputcrossiconRechanges" :disabled="isDisable">
                          <i class="fa fa-times"></i>
                        </button>
                        <i v-else class="fa fa-caret-down input-search-icon-Rechanges"></i>
                        <ul v-if="consigneenameDropdownOpen" class="SetScrollbarWidthSize">
                          <li v-for="(
option, index
                            ) in computedConsigneenameOptions" :key="option.value" :data-id="option.name" :class="{
                              active: index === consigneenameActiveIndex,
                            }" v-scroll-into-view="index === consigneenameActiveIndex
                              " @mousedown="
                                AdvancedDropselectOption(
                                  'consigneenameSelectedOption',
                                  'consigneenameSearchQuery',
                                  option,
                                  'consigneenamelabel'
                                )
                                ">
                            {{ option.ledgerName }}
                          </li>
                        </ul>
                      </div>
                      <span class="error-validation" v-if="advancedError.consigneenameSearchQuery">
                        {{ advancedError.consigneenameSearchQuery }}
                      </span>
                    </div>
                    <div class="col-lg-6 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">GSTIN/UIN</span>
                        <input type="text" placeholder="GSTIN" @keydown="handleKeyDown" v-on:keydown="disableArrowKeys"
                          v-on:wheel="disableMouseWheelScroll" ref="consigneeGSTInput" v-model="consigneeGstin"
                          @keydown.enter="focusConsigneeCountryInput"
                          @input="validateGSTIN" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-3">
                      <!-- Consignee Country Dropdown -->
                      <div class="OtherTypeSearchDropdownRechanges SetHeightAdvancedSettingDropdown">
                        <span class="borderlinetextdropdownRechanges">Country</span>
                        <input type="text" v-model="consigneecountrySearchQuery" @focus="
                          AdvancedDroptoggleDropdown(
                            'consigneecountryDropdownOpen',
                            true
                          )
                          " @blur="
                            AdvancedDroptoggleDropdown(
                              'consigneecountryDropdownOpen',
                              false
                            )
                            " @input="
                              AdvancedDropfilterOptions(
                                'consigneecountrySearchQuery',
                                'consigneecountryFilteredOptions',
                                CountryData,
                                'consigneecountrylabel'
                              )
                              " @keydown.down.prevent="
                                AdvancednavigateDropdown(
                                  'consigneecountryFilteredOptions',
                                  'consigneecountryActiveIndex',
                                  1
                                )
                                " @keydown.up.prevent="
                                  AdvancednavigateDropdown(
                                    'consigneecountryFilteredOptions',
                                    'consigneecountryActiveIndex',
                                    -1
                                  )
                                  " @keydown.enter.prevent="
                                    AdvancedselectActiveOption(
                                      'consigneecountryFilteredOptions',
                                      'consigneecountryActiveIndex',
                                      'consigneecountrySelectedOption',
                                      'consigneecountrySearchQuery',
                                      'consigneecountrylabel',
                                      'consigneestateInput'
                                    )
                                    " placeholder="Consignee Country" ref="consigneeCountryInput" :disabled="isDisable"
                          />
                        <button v-if="consigneecountrySearchQuery" @click="
                          AdvancedDropclearSearch(
                            'consigneecountrySearchQuery',
                            'consigneeCountry'
                          )
                          " class="inputcrossiconRechanges" :disabled="isDisable">
                          <i class="fa fa-times"></i>
                        </button>
                        <i v-else class="fa fa-caret-down input-search-icon-Rechanges"></i>
                        <ul v-if="consigneecountryDropdownOpen" class="SetScrollbarWidthSize">
                          <li v-for="(
option, index
                            ) in consigneecountryFilteredOptions" :key="option.value" :data-id="option.name" :class="{
                              active: index === consigneecountryActiveIndex,
                            }" v-scroll-into-view="index === consigneecountryActiveIndex
                              " @mousedown="
                                AdvancedDropselectOption(
                                  'consigneecountrySelectedOption',
                                  'consigneecountrySearchQuery',
                                  option,
                                  'consigneecountrylabel'
                                )
                                ">
                            {{ option.name }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <!-- Consignee State Dropdown -->
                      <div class="OtherTypeSearchDropdownRechanges SetHeightAdvancedSettingDropdown">
                        <span class="borderlinetextdropdownRechanges">State</span>
                        <input type="text" v-model="consigneestateSearchQuery" @focus="
                          AdvancedDroptoggleDropdown(
                            'consigneestateDropdownOpen',
                            true
                          )
                          " @blur="
                            AdvancedDroptoggleDropdown(
                              'consigneestateDropdownOpen',
                              false
                            )
                            " @input="
                              AdvancedDropfilterOptions(
                                'consigneestateSearchQuery',
                                'consigneestateFilteredOptions',
                                stateData,
                                'consigneestatelabel'
                              )
                              " @keydown.down.prevent="
                                AdvancednavigateDropdown(
                                  'consigneestateFilteredOptions',
                                  'consigneestateActiveIndex',
                                  1
                                )
                                " @keydown.up.prevent="
                                  AdvancednavigateDropdown(
                                    'consigneestateFilteredOptions',
                                    'consigneestateActiveIndex',
                                    -1
                                  )
                                  " @keydown.enter.prevent="
                                    AdvancedselectActiveOption(
                                      'consigneestateFilteredOptions',
                                      'consigneestateActiveIndex',
                                      'consigneestateSelectedOption',
                                      'consigneestateSearchQuery',
                                      'consigneestatelabel',
                                      'consigneePostalcodeInput'
                                    )
                                    " placeholder="Consignee State" ref="consigneestateInput" :disabled="isDisable"
                          />
                        <button v-if="consigneestateSearchQuery" @click="
                          AdvancedDropclearSearch('consigneestateSearchQuery', 'consigneeCountry')
                          " class="inputcrossiconRechanges" :disabled="isDisable">
                          <i class="fa fa-times"></i>
                        </button>
                        <i v-else class="fa fa-caret-down input-search-icon-Rechanges"></i>
                        <ul v-if="consigneestateDropdownOpen" class="SetScrollbarWidthSize">
                          <li v-for="(
option, index
                            ) in consigneestateFilteredOptions" :key="option.value" :data-id="option.name" :class="{
                              active: index === consigneestateActiveIndex,
                            }" v-scroll-into-view="index === consigneestateActiveIndex
                              " @mousedown="
                                AdvancedDropselectOption(
                                  'consigneestateSelectedOption',
                                  'consigneestateSearchQuery',
                                  option,
                                  'consigneestatelabel'
                                )
                                ">
                            {{ option.name }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Postal Code</span>
                        <input type="number" placeholder="Postal Code" @keydown="handleKeyDown"
                          v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll"
                          v-model="consigneePostalCode" ref="consigneePostalcodeInput"
                          @input="validatePostal($event)" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-12 mb-2">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Address</span>
                        <textarea v-model="consignee_address" name="Address" rows="1" placeholder="Address" :disabled="isDisable"
                         ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-bind:class="{
                  hidden: openTab !== 3,
                  block: openTab === 3,
                }">
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Shipping Date</span>
                        <span class="SalesDateImagePickerRechanges">
                          <img src="/assets/images/1.0/sales/calendar.svg" class="img-fluid" />
                        </span>
                        <Datepicker v-model="dispatch_shipping_date" format="dd MMM yyyy" placeholder="Date.."
                        :disabled="isDisable" >
                        </Datepicker>
                        <span class="error-validation" v-if="advancedError.dispatch_shipping_date">
                          {{ advancedError.dispatch_shipping_date }}
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Dispatch Note</span>
                        <input :disabled="isDisable" v-model="dispatch_delivery_note" type="text" placeholder="Dispatch Note"
                          />
                            <span
                          class="error-validation"
                          v-if="advancedError.dispatch_delivery_note"
                        >
                          {{ advancedError.dispatch_delivery_note }}
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Document No.</span>
                        <input :disabled="isDisable" v-model="dispatch_doc_no" type="text" placeholder="Document No."
                          />
                        <!-- <span class="error-validation" v-if="advancedError.dispatch_doc_no">
                          {{ advancedError.dispatch_doc_no }}
                        </span> -->
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Bill Number</span>
                        <input :disabled="isDisable" v-model="dispatch_bill_no" type="text" placeholder="Bill Number"
                          />
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Dispatch Through</span>
                        <input :disabled="isDisable" type="text" v-model="dispatch_despatch_through" placeholder="Dispatch Through"
                          />
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Vehicle Number</span>
                        <input :disabled="isDisable" type="text" v-model="dispatch_motor_vehicle_no" placeholder="Vehicle Number"
                         />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-2">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Destination</span>
                        <input :disabled="isDisable" type="text" v-model="dispatch_destination" placeholder="Destination"
                          @input="validateWordLimitForDestination" />
                      </div>
                    </div>
                  </div>
                </div>
                <div v-bind:class="{
                  hidden: openTab !== 4,
                  block: openTab === 4,
                }">
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Order Date</span>
                        <span class="SalesDateImagePickerRechanges">
                          <img src="/assets/images/1.0/sales/calendar.svg" class="img-fluid" />
                        </span>
                        <Datepicker v-model="order_date" format="dd MMM yyyy" placeholder="Date.."
                         >
                        </Datepicker>
                        <span class="error-validation" v-if="advancedError.order_date">
                          {{ advancedError.order_date }}
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Order Number</span>
                        <input :disabled="isDisable" type="text" v-model="order_no" placeholder="Order Number" />
                      </div>
                      <span class="error-validation" v-if="advancedError.order_no">
                        {{ advancedError.order_no }}
                      </span>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Mode of Payment</span>
                        <input :disabled="isDisable" type="text" v-model="order_terms_of_payment" placeholder="Mode of Payment"
                          />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Other Reference</span>
                        <input :disabled="isDisable" type="text" v-model="order_other_reference" placeholder="Other Reference"
                          />
                      </div>
                    </div>
                    <div class="col-lg-6 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Terms of Delivery</span>
                        <input :disabled="isDisable" type="text" v-model="order_terms_of_delivery" placeholder="Terms of Delivery"
                          />
                      </div>
                    </div>
                  </div>
                  <!-- <div class="row">
                    <div class="col-lg-12 col-12 mb-2">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">Address</span>
                        <textarea name="Address" v-model="order_details_address" rows="1" placeholder="Address"
                          cols="50"></textarea>
                      </div>
                    </div>
                  </div> -->
                </div>
                <div v-bind:class="{
                  hidden: openTab !== 5,
                  block: openTab === 5,
                }">
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">eWay Bill Date</span>
                        <span class="SalesDateImagePickerRechanges">
                          <img src="/assets/images/1.0/sales/calendar.svg" class="img-fluid" />
                        </span>
                        <Datepicker v-model="eWayBill_date" format="dd MMM yyyy" placeholder=""
                         >
                        </Datepicker>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInputRechanges position-relative">
                        <span class="AdvancedSettingspanRechanges">eWay Bill Number</span>
                        <input :disabled="isDisable" type="number" placeholder="" @keydown="handleKeyDown" v-on:keydown="disableArrowKeys"
                          v-on:wheel="disableMouseWheelScroll" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-12">
          <div class="AddTaxesWithSubTotalMainBoxRechanges">
            <div class="TaxesBGwhiteboxRechanges mb-1">
              <table class="table mb-1">
                <tbody>
                  <tr v-for="(
addnewtaxesDropdown, index
                    ) in AddNewTaxesListDropdown" :key="addnewtaxesDropdown.id">
                    <!-- Searchable dropdown for taxes -->
                    <td width="47%">
                      <div class="TaxSelectoptionDropdownRechanges">
                        <div class="OtherwithTaxesserachableDropdownRechanges">
                          <span class="borderlinetextdropdownTaxesRechanges">Taxes</span>
                          <input :disabled="isDisable" ref="addtaxesInput" type="text" v-model="addnewtaxesDropdown.addtaxesSearchQuery"
                            @focus="toggleAddTaxesDropdown(index, true)" @blur="toggleAddTaxesDropdown(index, false)"
                            @input="filterAddTaxesOptions($event, index)" @keydown.down.prevent="
                              navigateAddTaxesDropdown(
                                index,
                                'addtaxesFilteredOptions',
                                'addtaxesActiveIndex',
                                1
                              )
                              " @keydown.up.prevent="
                                navigateAddTaxesDropdown(
                                  index,
                                  'addtaxesFilteredOptions',
                                  'addtaxesActiveIndex',
                                  -1
                                )
                                " @keydown.enter.prevent="
                                  selectAddTaxesActiveOption(
                                    index,
                                    'addtaxesFilteredOptions',
                                    'addtaxesActiveIndex',
                                    'addtaxesSearchQuery',
                                    'addtaxestype'
                                  )
                                  ":placeholder="addnewtaxesDropdown.placeholder? addnewtaxesDropdown.placeholder : 'Taxes'" />
                          <span class="error-validation" v-if="
                            error_tax.addtaxesSearchQuery &&
                            error_tax.addtaxesSearchQuery[index]
                          ">{{ error_tax.addtaxesSearchQuery[index] }}</span>
                          <button v-if="addnewtaxesDropdown.addtaxesSearchQuery" @click="clearAddTaxesSearch(index)"
                            class="inputcrossicontaxesRechanges">
                            <i class="fa fa-times"></i>
                          </button>
                          <i v-else class="fa fa-search taxesledgerssearchiconRechanges"></i>
                          <ul v-if="addnewtaxesDropdown.addtaxesDropdownOpen" class="SetScrollbarWidthSize">
                            <li v-for="(
                              option, optionIndex
                              ) in addnewtaxesDropdown.addtaxesFilteredOptions" :key="option.value" :class="{
                                active:
                                  optionIndex ===
                                  addnewtaxesDropdown.addtaxesActiveIndex,
                              }" v-scroll-into-view="optionIndex ===
                                addnewtaxesDropdown.addtaxesActiveIndex
                                " @mousedown="selectAddTaxesOption(option, index)">
                              <div class="itemsnamewithhsnRechanges otherledgers-searchable-Rechanges">
                                <h6 class="mb-0">{{ option.ledgerName }}</h6>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>

                    <!-- Amount input -->
                    <td width="47%">
                      <div class="TaxesInputNewBackEntryRechanges position-relative">
                        <div class="ledgeramountwithdrdropdownRechanges">
                          <span class="borderlinetextdropdownTaxesAmountRechanges">Amount</span>
                          <input :disabled="isDisable" type="number" placeholder="Amount" v-model="addnewtaxesDropdown.amount"
                            class="border-none" @keydown="handleKeyDown" v-on:keydown="disableArrowKeys"
                            @keyup="tax_value_amount($event, index)" v-on:wheel="disableMouseWheelScroll"
                            
                            @blur="toggleTaxesDropdown(index, false)"
                            @input="limitDecimalPlaces('taxes',index)"
                            />
                        </div>
                        <span class="error-validation" v-if="error_tax.amount && error_tax.amount[index]">{{
                          error_tax.amount[index] }}</span>
                      </div>
                    </td>

                    <!-- Delete icon -->
                    <td class="text-right" width="6%">
                      <div class="DeleteicontaxesinnerRechanges pt-2">
                        <a href="javascript:void(0);" @click="removeNewTaxes(index)" :style="{
                          'pointer-events': isDisable ? 'none' : 'auto',
                        }">
                          <i class="fa fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- Add new taxes button -->
              <div class="AddTaxesFlowNewRechanges mb-2">
                <a href="javascript:void(0);" @click="AddNewTaxesClick" :style="{
                          'pointer-events': isDisable ? 'none' : 'auto',
                        }" >
                  <span class="newaddplusnackentryRechanges"><i class="fa fa-plus me-1"></i> Add Taxes
                  </span>
                </a>
              </div>
            </div>

            <div class="TaxesBGwhiteboxRechanges mb-1">
              <table class="table mb-1">
                <tbody>
                  <tr v-for="(
addotherledgersDropdown, index
                    ) in AddOtherLedgersListDropdown" :key="addotherledgersDropdown.id">
                    <td width="47%">
                      <div class="TaxSelectoptionDropdownRechanges">
                        <div class="OtherwithTaxesserachableDropdownRechanges">
                          <span class="borderlinetextdropdownTaxesRechanges">Other Ledger</span>
                          <input :disabled="isDisable" ref="otherledgersInput" type="text" v-model="addotherledgersDropdown.otherledgersSearchQueryDropdown
                            " @focus="toggleOtherLedgersDropdown('OtherLedger',index, true)"
                            @blur="toggleOtherLedgersDropdown('OtherLedger',index, false)"
                            @input="filterOtherLedgersOptions($event, index)" @keydown.down.prevent="
                              navigateOtherLedgersDropdown(
                                index,
                                'otherledgersFilteredOptions',
                                'otherledgersActiveIndex',
                                1
                              )
                              " @keydown.up.prevent="
                                navigateOtherLedgersDropdown(
                                  index,
                                  'otherledgersFilteredOptions',
                                  'otherledgersActiveIndex',
                                  -1
                                )
                                " @keydown.enter.prevent="
                                  selectOtherLedgersActiveOption(
                                    index,
                                    'otherledgersFilteredOptions',
                                    'otherledgersActiveIndex',
                                    'otherledgersSearchQueryDropdown',
                                    'otherledgerstype'
                                  )
                                  " placeholder="Enter Ledger" />
                          <button v-if="
                            addotherledgersDropdown.otherledgersSearchQueryDropdown
                          " @click="clearOtherLedgersSearch(index)" class="inputcrossicontaxesRechanges" :disabled="isDisable">
                            <i class="fa fa-times"></i>
                          </button>
                          <i v-else class="fa fa-search taxesledgerssearchiconRechanges"></i>
                          <ul v-if="
                            addotherledgersDropdown.otherledgersDropdownOpen
                          " class="SetScrollbarWidthSize">
                            <li v-for="(
                              option, optionIndex
                              ) in addotherledgersDropdown.otherledgersFilteredOptions" :key="option.name" :class="{
                                active:
                                  optionIndex ===
                                  addotherledgersDropdown.otherledgersActiveIndex,
                                'disabled-option': option.isSelected
                              }" v-scroll-into-view="optionIndex ===
                                addotherledgersDropdown.otherledgersActiveIndex
                                " @mousedown="
                                  !option.isSelected && selectOtherLedgersOption(option, index)
                                  ">
                              <div class="row">
                                <div class="col-12">
                                  <div class="itemsnamewithhsnRechanges otherledgers-searchable-Rechanges">
                                    <h6 class="mb-0">{{ option.name }}</h6>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td width="47%">
                      <div class="TaxesInputNewBackEntryRechanges">
                        <div class="ledgeramountwithdrdropdownRechanges position-relative">
                          <span class="borderlinetextdropdownTaxesAmountRechanges">Amount</span>
                          <input :disabled="isDisable" type="number" placeholder="Amount" v-model="addotherledgersDropdown.amount"
                            class="border-none" @keydown="handleKeyDown" @input="
                              updateLedgerArray(
                                index,
                                'amount',
                                AddOtherLedgersListDropdown[index].amount
                              );
                            tax_calculation(index);
                            other_gst_calculation();
                            " v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll"
                            
                            @blur="toggleOtherLedgersDropdown('Amount',index, false)"
                            />
                          <select @change="
                            updateLedgerArray(
                              index,
                              'type',
                              AddOtherLedgersListDropdown[index].crdr
                            );
                          tax_calculation(index);
                          other_gst_calculation();
                          " v-model="addotherledgersDropdown.crdr"
                            :class="addotherledgersDropdown.crdr == 'CR' ? 'text-green' : 'text-red'" :disabled="isDisable"
                           >
                            <option v-for="option in crdrOptions" :key="option.text" :value="option.text">
                              {{ option.text }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </td>
                    <td width="6%">
                      <div class="DeleteicontaxesinnerRechanges text-right pt-2">
                        <a href="javascript:void(0);" @click="removeOtherLedgers(index)" :style="{
                          'pointer-events': isDisable ? 'none' : 'auto',
                        }">
                          <i class="fa fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- Add new Other Ledgers button -->
              <div class="AddTaxesFlowNewRechanges mb-1">
                <a href="javascript:void(0);" @click="AddOtherLedgersClick" :style="{
                          'pointer-events': isDisable ? 'none' : 'auto',
                        }">
                  <span class="newaddplusnackentryRechanges"><i class="fa fa-plus me-1"></i> Add Other Ledgers
                  </span>
                </a>
              </div>
            </div>

            <div class="InnerSubTotalBoxes mt-2">
              <table class="TableInnerSubtotal" width="100%">
                <tr>
                  <td align="left">Sub Total</td>
                  <td align="right">
                    <span class="font_sans">₹</span>{{ getNum(this.total_amount).toFixed(this.totalDecimalValueForRate) }}
                  </td>
                </tr>
                <tr>
                  <td align="left">
                    Taxes
                    <a href="javascript:void(0);" class="TableInnerInfo"><i class="fa fa-info"></i></a>
                  </td>
                  <td align="right">
                    <span class="font_sans">₹</span>
                    {{ getNum(this.total_tax).toFixed(this.totalDecimalValueForRate) }}
                  </td>
                </tr>
              </table>
              <table class="TableInnerGrandTotal" width="100%">
                <tr>
                  <td align="left">Grand Total</td>
                  <td align="right">
                    <span class="font_sans">₹</span>{{ getNum(this.grandTotal).toFixed(this.totalDecimalValueForRate) }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!------------------->

    <!------------------->
    <div class="NewBackentryBottomRechanges">
      <div class="NewBackentryBottomInnerRechanges">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <ul v-if="!(this.fromMyVoucher && this.isTransfer == 1)" class="d-flex align-items-center justify-content-end">
              <!-- <li v-if="EwayEinvoiceElligible">
                <button class="CreateeInvoiceeWayButtonBottom d-none" v-b-modal.customerstatus-popup>
                  Create eInvoice <img src="/assets/images/1.0/brand/crown-color.svg" />
                </button>
                <button @click="generateEinvoice" class="CreateeInvoiceeWayButtonBottom" :disabled="button_disabled === '1' || isDisable">
                  Create eInvoice
                </button>
              </li>
              <li v-if="EwayEinvoiceElligible">
                <button class="CreateeInvoiceeWayButtonBottom d-none" v-b-modal.customerstatus-popup>
                  Create eWay <img src="/assets/images/1.0/brand/crown-color.svg" />
                </button>
                <button :disabled="button_disabled === '1' || isDisable" class="CreateeInvoiceeWayButtonBottom" @click="checkLogin">
                  Create eWay
                </button>
              </li> -->
              <li>
              <!-- Case 1: Cancel mode, modified, and not a transfer -->
              <button v-if="isModified && action === 'Cancel' && isTransfer == 0"
                      class="CancelDeleteVoucherButtonUI"
                      @click="revertBack">
                Revert Back To Original
              </button>

              <!-- Case 2: Transfer voucher, no action yet, and modified -->
              <button v-else-if="action === '' && !isModified && isTransfer == 1"
                      class="CancelDeleteVoucherButtonUI"
                      @click="showCancelModal">
                I Want To Cancel This Voucher
              </button>
              <button v-else-if="(action === 'Alter' && isModified && isTransfer == 1) || (action === 'Alter' && isModified && isTransfer == -1)"
                      class="CancelDeleteVoucherButtonUI"
                      @click="showCancelModal">
                I Want To Cancel This Voucher
              </button>

              <!-- Case 3: Alter mode, not a transfer -->
              <button v-else-if="action === 'Alter' && isTransfer == 0"
                      class="CancelDeleteVoucherButtonUI"
                      @click="revertBack">
                Revert Back To Original
              </button>

              <!-- Case 4: Newly created voucher (voucher ID exists), not a transfer -->
              <button v-else-if="(action === '' && isTransfer == 0 && $route.params.voucher_id) || (action === '' && isTransfer == -1 && $route.params.voucher_id)"
                      class="CancelDeleteVoucherButtonUI"
                      @click="showDeleteModal">
                Delete Voucher
              </button>
            </li>

              <li>
                <button v-if="this.$route.params.voucher_id" @click="update_sales"
                  class="CreateVoucherButtonBottomRechanges" :disabled="button_disabled === '1' || (isModified && action === 'Cancel' && isTransfer == 0) || isBtnDisable || isGstCalculated">
                  Update Voucher
                </button>
                <button v-else @click="add_Sales" class="CreateVoucherButtonBottomRechanges"
                  :disabled="button_disabled === '1' || isDisable">
                  Create Voucher
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!------------------->

    <!------Start EWay Login Modal------------->
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
                      img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333"
                      @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
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
                      <input type="text" v-model="gstinneweWay" placeholder="" @keydown="handleKeyDown"
                        v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll"
                        @input="checkLoginButtonState" />
                    </div>
                    <div class="EWayLoginPopupForm position-relative mb-4">
                      <span class="EWayLoginPopupFormLabel">GSP USERNAME</span>
                      <input type="text" v-model="usernameValue" placeholder="" @keydown="handleKeyDown"
                        v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll"
                        @input="checkLoginButtonState" />
                    </div>

                    <div class="EWayLoginPopupForm position-relative mb-4">
                      <span class="EWayLoginPopupFormLabel">GSP PASSWORD</span>
                      <div class="input-wrapper-GSP-password">
                        <input :type="passwordVisibleeWayLogin ? 'text' : 'password'" v-model="passwordValue"
                          placeholder="" @keydown="handleKeyDown" v-on:keydown="disableArrowKeys"
                          v-on:wheel="disableMouseWheelScroll" @input="checkLoginButtonState" />
                        <span class="eye-icon-gsp-password" @click="togglePasswordVisibility">
                          <i :class="passwordVisibleeWayLogin
                            ? 'fa fa-eye'
                            : 'fa fa-eye-slash'
                            "></i>
                        </span>
                      </div>
                    </div>
                    <div class="EWayLoginButton">
                      <button @click="UpdateGSP()" class="" :disabled="isButtonDisabledLogin">
                        LOGIN
                      </button>
                    </div>
                    <span class="error-validation" v-if="Eway_Error.UpdateGSPError">{{ Eway_Error.UpdateGSPError
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
    <!------End EWay Login Modal-------------->
    <!-- eWay Bill Details Modal -->
    <b-modal id="eWayBillDetailsModal" size="" title="eWay Bill Details" hide-footer centered>
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
        <div class="TransportDetailseWayBillPopup">
          <div class="TransportDetailseWaybillpopupHeading mb-3">
            <h6>Transport Details</h6>
          </div>
          <div class="row align-items-center">
            <div class="CheckBoxAddTransportDetailsinner">
              <label for="transporteridname">I want to change transporter name and ID manually.</label>
              <input type="checkbox" id="transporteridname" @change="updateFlag()" />
            </div>
            <div v-if="isButtonChecked" class="col-lg-4 col-12 mb-3">
              <div class="TransportDetailsInputtext">
                <label class="eWayBillDetailsPopupLabel">Transporter Name
                </label>
                <input v-model="TransporterNameValueText" placeholder="Enter details" />
              </div>
            </div>
            <div v-else class="col-lg-4 col-12 mb-3">
              <div class="TransportDetailsDropdown">
                <label class="eWayBillDetailsPopupLabel">Transporter Name <span class="Validationspanerror">*</span>
                </label>
                <select v-model="TransporterNameValue" @change="transporterNameselected()">
                  <option disabled value="">Enter Name</option>
                  <option v-for="(option, index) in TransporterName" :key="index" :value="option.ledgerName">
                    {{ option.ledgerName }}
                  </option>
                </select>
              </div>
              <span class="error-validation" v-if="Eway_Error.transporterName">{{ Eway_Error.transporterName }}</span>
            </div>
            <div v-if="isButtonChecked" class="col-lg-4 col-12 mb-3">
              <div class="TransportDetailsInputtext">
                <label class="eWayBillDetailsPopupLabel">Transporter ID
                  <span class="Validationspanerror">*</span></label>
                <input v-model="TransportIdValue" placeholder="Enter details" />
              </div>
              <span class="error-validation" v-if="Eway_Error.transporterId">{{
                Eway_Error.transporterId
              }}</span>
            </div>
            <div v-else class="col-lg-4 col-12 mb-3">
              <div class="TransportDetailsDropdown">
                <label class="eWayBillDetailsPopupLabel">Transporter ID
                  <span class="Validationspanerror">*</span></label>
                <select v-model="TransportIdValue">
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
            <div class="col-lg-4 col-12 mb-3">
              <div class="TransportDetailsInputtext">
                <label class="eWayBillDetailsPopupLabel">Approx Dist.(In KMs)</label>
                <input type="text" placeholder="Enter Distance" @keydown="handleKeyDown" v-on:keydown="disableArrowKeys"
                  v-on:wheel="disableMouseWheelScroll" />
              </div>
            </div>
            <!-- <div class="col-lg-4 col-12 mb-3">
              <span>I want to enter details manually</span>
              <input type="checkbox" />
            </div> -->
          </div>
        </div>
        <div class="TransportDetailseWayBillPopup mb-1">
          <div class="TransportDetailseWaybillpopupHeading mb-3">
            <h6>Part B Details</h6>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6 col-12 mb-2">
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
            <div class="col-lg-6 col-12 mb-2">
              <div class="SupplyTypeRadioButton">
                <label class="eWayBillDetailsPopupLabel">Vehicle Type </label>
                <div class="invoice_radio_button">
                  <input @change="VehicleTypeModeCode($event)" type="radio" class="invoice_radio" id="RegularRadio"
                    name="radiovehicle" value="Regular" v-model="VehicleTypeValue" autocomplete="off" />
                  <label for="RegularRadio" class="fontssetlabelRechanges">Regular</label>
                </div>
                <div class="invoice_radio_button">
                  <input type="radio" class="invoice_radio" id="OverRadio" name="radiovehicle" value="Over"
                    v-model="VehicleTypeValue" autocomplete="off" />
                  <label for="OverRadio" class="fontssetlabelRechanges">Over Dimensional Cargo</label>
                </div>
              </div>
            </div>
          </div>

          <div class="row align-items-center mt-2">
            <div class="col-lg-6 col-12 mb-2">
              <div class="eWayBillDetailsPopupInputText eWayBillDetailsPopupPartBDetailsInputText">
                <label class="eWayBillDetailsPopupLabel">Vehicle No</label>
                <input v-model="vehicleNumberValue" type="text" placeholder="Enter No" @keydown="handleKeyDown"
                  v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll" />
              </div>
              <span class="error-validation" v-if="Eway_Error.vehicleNumberValue">{{ Eway_Error.vehicleNumberValue
              }}</span>
            </div>
            <!-- <div class="col-lg-6 col-12 mb-2">
              <div class="eWayBillDetailsPopupInputText eWayBillDetailsPopupPartBDetailsInputTextwithDatepicker">
                <label class="eWayBillDetailsPopupLabel">Transporter Doc. No & Date</label>
                <input type="text" placeholder="eg. D123456" @keydown="handleKeyDown" v-on:keydown="disableArrowKeys"
                  v-on:wheel="disableMouseWheelScroll" />
                <div class="eWayBillDetailsPopupInputDatepicker">
                  <span class="DocDateDatePicker">
                    <img src="/assets/images/1.0/sales/calendar.svg" class="img-fluid" />
                  </span>
                  <Datepicker v-model="transDocDate" format="dd MMM yyyy" placeholder=""></Datepicker>
                </div>
              </div>
            </div> -->
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
                <select v-model="DispatchName">
                  <option value="">Enter Name</option>
                  <!-- <option v-for="option in partynameFilteredOptions" :key="option.ledgerName" :value="option.ledgerName">
                    {{ option.ledgerName }}
                  </option> -->
                </select>
              </div>
              <div class="BillFromDispatchFrom mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthBillFromLabel">GSTIN</label>
                <input disabled type="text" placeholder="Enter GSTIN" @keydown="handleKeyDown"
                  v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll" v-model="this.partyGSTIn" />
              </div>
              <div class="BillFromDispatchFrom mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthBillFromLabel">State</label>
                <select disabled v-model="DispatchStateName">
                  <option value="">Select State</option>
                  <option v-for="option in stateData" :key="option.name" :value="option.name">
                    {{ option.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-lg-3 col-12">
              <div class="TransportDetailseWaybillpopupHeading mb-3">
                <h6>Dispatch From</h6>
              </div>
              <div class="DispatchFromBoxDiv mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthDispatchFromLabel">Address
                </label>
                <textarea v-model="DispatchAddress" placeholder="Enter Notes"></textarea>
              </div>
              <div class="DispatchFromBoxDiv mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthDispatchFromLabel">Place
                </label>
                <select v-model="DispatchPlace">
                  <option disabled value="">Select Place</option>
                  <option v-for="(option, index) in stateData" :key="index" :value="option.name">
                    {{ option.name }}
                  </option>
                </select>
              </div>
              <div class="DispatchFromBoxDivPinState mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthDispatchFromLabel">Pin & State <span
                    class="Validationspanerror">*</span></label>
                <input v-model="DispatchPincode" type="text" placeholder="Enter" @keydown="handleKeyDown"
                  v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll" />
                <select v-model="DispatchStateName">
                  <option disabled value="">Select State</option>
                  <option v-for="(option, index) in stateData" :key="index" :value="option.name">
                    {{ option.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-lg-3 col-12">
              <div class="TransportDetailseWaybillpopupHeading mb-3">
                <h6>Bill To</h6>
              </div>
              <div class="BillFromDispatchFrom mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthBillFromLabel">Name
                </label>
                <select disabled v-model="buyersnameSearchQuery">
                  <option disabled value="">Enter Name</option>
                  <option v-for="(option, index) in buyersnameFilteredOptions" :key="index" :value="option.ledgerName">
                    {{ option.ledgerName }}
                  </option>
                </select>
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
                <select disabled v-model="buyerstateSearchQuery">
                  <option value="">Select State</option>
                  <option v-for="(option, index) in stateData" :key="index" :value="option.name">
                    {{ option.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-lg-3 col-12">
              <div class="TransportDetailseWaybillpopupHeading mb-3">
                <h6>Ship To</h6>
              </div>
              <div class="DispatchFromBoxDiv mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthDispatchFromLabel">Address
                </label>
                <textarea v-model="consignee_address" placeholder="Enter Notes"></textarea>
              </div>
              <div class="DispatchFromBoxDiv mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthDispatchFromLabel">Place
                </label>
                <select v-model="consigneestateSearchQuery">
                  <option disabled value="">Select Place</option>
                  <option v-for="option in stateData" :key="option.value" :value="option.value">
                    {{ option.name }}
                  </option>
                </select>
              </div>
              <div class="DispatchFromBoxDivPinState mb-2">
                <label class="eWayBillDetailsPopupLabel setWidthDispatchFromLabel">Pin & State
                </label>
                <input v-model="consigneePostalCode" type="text" placeholder="Enter" @keydown="handleKeyDown"
                  v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll" />
                <select v-model="consigneestateSearchQuery">
                  <option disabled value="">Select State</option>
                  <option v-for="(option, index) in stateData" :key="index" :value="option.name">
                    {{ option.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="CreateeWayBillButtonPopup text-center mt-2">
          <button @click="generateEway" type="button" class="">
            Create eWay Bill
          </button>
        </div>
      </div>
    </b-modal>

     <b-modal id="DeleteVoucherModal" class="CancelDeleteVoucherPopupMain" hide-footer hide-header centered>
  <div class="modal-content">
    <div class="modal-body text-center">
      <div class="HeaderPortionTextDelete">
        <div class="DeleteCaptionHeaderHeading">
          <h5>Delete this Voucher #LKP1234?</h5>
        </div>
        <div class="ButtonCloseForDeleteIcon">
          <button @click="deleteVoucherNo"><i class="fa fa-close"></i></button>
        </div>
      </div>
      <div class="DeleteCancelYesNoButton">
        <button class="ConfirmYesButton" @click="$bvModal.hide('DeleteVoucherModal')">
          CONFIRM YES
        </button>
        <button class="NoButton" @click="deleteVoucherNo">
          No
        </button>
      </div>
    </div>
  </div>
</b-modal>
<!------Cancel Voucher Modal------------->
<b-modal id="CancelVoucherModal" class="CancelDeleteVoucherPopupMain" hide-footer hide-header centered>
  <div class="modal-content">
    <div class="modal-body text-center">
      <div class="HeaderPortionTextCancel">
        <div class="CancelCaptionHeaderHeading">
          <h5>Cancel this Voucher {{voucherNumber}}</h5>
        </div>
        <div class="ButtonCloseForCancelIcon">
          <button @click="cancelVoucherNo"><i class="fa fa-close"></i></button>
        </div>
      </div>
      <div class="CancelCancelYesNoButton">
        <button class="ConfirmYesButton" @click="handleCancelVoucher">
          CONFIRM YES
        </button>
        <button class="NoButton" @click="cancelVoucherNo">
          No
        </button>
      </div>
    </div>
  </div>
</b-modal>
    <!-- eWay Bill Details Modal -->
  </section>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import Common from "@/Common";
import Api from "@/Api";
import moment from "moment";
import DecimalValue from "../DecimalValue";
import GoogleAnalytics from "@/GoogleAnalytics";

export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      isGstCalculated: true,
            isBtnDisable: false,

      fromMyVoucher:false,
      BookFromDate:'',
      partyLedgerEntry : {},
      isModified: false,
      action: "",
      voucherSyncId: "",
      masterId: "",
      isVoucherEditable: false, 

      add_igstApplicable: false,
      update_igstApplicable: false,
      partyMasterName: '',
      isDescriptionEnabled: false,
      parentTypeStore: {
        partyName: [],
        otherLedger: [],
        voucherTypeLedger: []
      },
      isOptionalVoucherEnabled: false,
      createdByName: "",
      checkedByName: "",
      updatedByName: "",
      isSetDefaultNumberData: false,
      voucherTypeData: "",
      voucherEditted: false,
      combinedVoucherNumber: "",
      billNumberData: "",
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
      isWordLimitExceeded: false,
      service_error: {},
      isPaid: "0",
      narration: "",
      buyerAddress: "",
      DispatchName: "",
      consignee_address: "",
      TransporterNameValueText: "",
      addLedger_error: [],
      error_tax: [],
      vouchernumberError: {},
      PrefixError: "",
      custom_Voucher_numberError: "",
      button_error: [],
      button_disabled: "1",
      // UpdateGSPError:'',
      usePriceLevels: "",
      DispatchPincode: "",
      DispatchPlace: "",
      DispatchAddress: "",
      DispatchStateName: "",
      vehicleNumberValue: "",
      Eway_Error: {},
      voucherTypeId: "",
      invoiceDetailsBool: null,
      isEInvoiceStatus: null,
      ewayPDFFormat: "",
      defaultDeclaration: "",
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
      customisedDeclaration: "",
      customisedHeaders: {},
      customizeVoucherNumber: [],
      isTransfer: 0,
      numberingMethod: [],
      selectedNumberingMethod: "",
      companyGstNumber: localStorage.getItem("companyGstNumber"),
      parentUserId: localStorage.getItem("_parentUserId"),
      customerStatus: localStorage.getItem("customerStatus"),
      isEwayStatus: null,
      voucher_error: "",
      invoice_type: true,
      dispatch_delivery_note: "",
      dispatch_bill_no: "",
      dispatch_despatch_through: "",
      dispatch_motor_vehicle_no: "",
      dispatch_destination: "",
      order_no: "",
      order_terms_of_payment: "",
      order_other_reference: "",
      order_terms_of_delivery: "",
      order_details_address: "",
      selectedCode: "",
      ItemHsnCode: "",
      SelectedItemGuid: "",
      igstCheckforEwayEinvoice: true,
      VoucherIDValue: "",
      onlyEway: false,
      selectedVehicleTypeCOde: "R",
      VehicleType: "",
      TransportMode: "",
      selectedTranModeCOde: "1",
      allowed_descriptions: [
        "Supply",
        "Export",
        "SKD/CKD/Lots",
        "Job Work",
        "Recipient Not Known",
        "For Own Use",
        "Line Sales",
        "Exhibition or fairs",
        "Others",
      ],
      selectedSupply: "",
      eInvoiceStatusValue: "Yes",
      userName: "",
      Password: "",
      dispatch_doc_no: "",
      consigneePostalCode: "",
      consigneeGstin: "",
      // BuyerPlaceOfSupply: "",
      BuyerGstin: "",
      BuyerPostalCode: "",
      BuyerGuid: "",
      ConsigneeGuid: "",
      buyerSearch: "",
      countrysearch: "",
      TaxSearch: "",
      partySearch: "",
      LedgerTypeSearch: "",
      ledger_amount: 0,
      total_tax: 0,
      total_amount: 0,
      grandTotal: 0,
      ledger_array: [],
      add_more_ledger: [],
      addmoreLedgerEntries: [],
      final_ledgerEntries: [],
      final_object: [],
      final_part_ledgerEntries: [],
      stockItemsError: {},
      advancedError: {},
      errors: {},
      partyGuid: "",
      partyGSTIn: "",
      ledgerId: "",
      tempItmesObject: [],
      item_object: [],
      isEditing: false,
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
        { value: 1, label: "On Account" },
        { value: 2, label: "New Reference" },
      ],
      referenceSelectedOption: { value: 1, label: "On Account" },
      referenceActiveIndex: -1,
      // Voucher Type Dropdown
      voucherSearchQuery: "",
      voucherDropdownOpen: false,
      voucherActiveIndex: -1,
      voucherOptions: [
        // { value: 1, vouchercontent: 'Sales', name: 'Asaraf 1' },
        // { value: 2, vouchercontent: 'Sales Automatic', name: 'Asaraf 2' },
        // { value: 3, vouchercontent: 'Sales Automatic Manual', name: 'Asaraf 3' },
        // { value: 4, vouchercontent: 'New Voucher Type', name: 'Asaraf 4' },
        // { value: 5, vouchercontent: 'New One Sales', name: 'Asaraf 5' }
      ],
      voucherFilteredOptions: [],
      // Party Name Dropdown
      partynameSearchQuery: "",
      partynameDropdownOpen: false,
      partynameActiveIndex: -1,
      partynameOptions: [
        // { value: 1, partynamecontent: 'Industrial Aromatics Pvt Ltd', amount: '21000', name: 'Partyname 1' },
        // { value: 2, partynamecontent: 'ABCD Pvt Ltd', amount: '21000', name: 'Partyname 2' },
        // { value: 3, partynamecontent: 'Livekeeping Technologies', amount: '21000', name: 'Partyname 3' },
        // { value: 4, partynamecontent: 'Arun Enterprises', amount: '21000', name: 'Partyname 4' },
        // { value: 5, partynamecontent: 'Arush Metal Limited', amount: '21000', name: 'Partyname 5' },
        // { value: 6, partynamecontent: 'Sanjay Polymer', amount: '21000', name: 'Partyname 6' },
        // { value: 7, partynamecontent: 'XYZ Private LImited', amount: '21000', name: 'Partyname 7' },
        // { value: 8, partynamecontent: 'Metal Casting LImited', amount: '21000', name: 'Partyname 8' },
        // { value: 9, partynamecontent: 'Asaraf clothing Private Limited', amount: '21000', name: 'Partyname 9' },
        // { value: 10, partynamecontent: 'Surya Polymer', amount: '21000', name: 'Partyname 10' },
      ],
      partynameFilteredOptions: [],
      // Ledger type Dropdown
      ledgertypeSearchQuery: "",
      ledgertypeDropdownOpen: false,
      ledgertypeActiveIndex: -1,
      ledgertypeOptions: [
        // { value: 1, ledgercontent: 'Sales @18%', gstApplicable: 'Yes', tax: '18' },
        // { value: 2, ledgercontent: 'Sales Zero Percent', gstApplicable: 'Yes', tax: '0' },
        // { value: 3, ledgercontent: '@on Item', gstApplicable: 'Yes', tax: '20' },
        // { value: 4, ledgercontent: 'GST on Item', gstApplicable: 'Yes', tax: '5' },
        // { value: 5, ledgercontent: 'GST on Group', gstApplicable: 'Yes', tax: '10' },
      ],
      ledgertypeFilteredOptions: [],
      // Price Level Dropdown
      pricelevelSearchQuery: "",
      pricelevelDropdownOpen: false,
      pricelevelActiveIndex: -1,
      pricelevelOptions: [
        // { value: 1, pricelevelcontent: 'Retail' },
        // { value: 2, pricelevelcontent: 'Lemon Tree' },
        // { value: 3, pricelevelcontent: 'Wholesale' },
        // { value: 4, pricelevelcontent: 'Spice Jet' },
        // { value: 5, pricelevelcontent: 'Qatar Airways' },
        // { value: 6, pricelevelcontent: 'Retail' },
        // { value: 7, pricelevelcontent: 'Lemon Tree' },
        // { value: 8, pricelevelcontent: 'Wholesale' },
        // { value: 9, pricelevelcontent: 'Spice Jet' },
        // { value: 10, pricelevelcontent: 'Qatar Airways' },
      ],
      pricelevelFilteredOptions: [],
      // Table Items Dropdown
      tableitemsSearchQuery: "",
      tableitemsDropdownOpen: false,
      AddNewItemList: [
        {
          id: Date.now(),
          tableitemsSearchQuery: "",
          itemquantity: "",
          itemrate: "",
          itemdiscount: "",
          selectedOption: "",
          itemamount: "",
          isChecked: false,
          tableitemsDropdownOpen: false,
          tableitemsFilteredOptions: [],
          selectedgodownsOption: "",
          godownGuid: "",
          tableitemsActiveIndex: -1,
          GodownActiveIndex: -1,
          GodownDropdownOpen: false,
          filteredGodowns: [],
        },
      ],
      GodownSearch: "",
      GodownDropdownOpen: false,
      filteredGodowns: [],
      tableitemsOptions: [
        // { value: 1, stockItem: 'White Bread', hsncode: '000000', quantity: '80 PAC', color: 'green' },
        // { value: 2, stockItem: 'Milk', hsncode: '123455', quantity: '100 LIT', color: 'green' },
        // { value: 3, stockItem: 'Sugar', hsncode: '123445', quantity: '100 KG', color: 'green' },
        // { value: 4, stockItem: 'Tata Tea', hsncode: '123451', quantity: '20 PAC', color: 'green' },
        // { value: 5, stockItem: 'Basmati Rice', hsncode: '123452', quantity: '-150 KG', color: 'red' },
        // { value: 6, stockItem: 'Soap', hsncode: '123415', quantity: '22 KG', color: 'green' },
        // { value: 7, stockItem: 'Biryani Masala', hsncode: '123003', quantity: '100 PAC', color: 'green' },
        // { value: 8, stockItem: 'Oil', hsncode: '123405', quantity: '-12 PAC', color: 'red' },
        // { value: 9, stockItem: 'Sudha Ghee', hsncode: '123415', quantity: '5 KG', color: 'green' },
        // { value: 10, stockItem: 'Toned Milk', hsncode: '123435', quantity: '-24 LIT', color: 'red' },
      ],
      tableitemsFilteredOptions: [],
      // Other Ledgers Dropdown
      AddOtherLedgersListDropdown: [],
      otherledgers2Options: [
        // { value: 1, OtherLedgersName: 'Account Fees' },
        // { value: 2, OtherLedgersName: 'Audit Fees' },
        // { value: 3, OtherLedgersName: 'Bad Debts' },
        // { value: 4, OtherLedgersName: 'Bank Charges' },
        // { value: 5, OtherLedgersName: 'Bonus Exps.' },
        // { value: 6, OtherLedgersName: 'Cartage & Freight Exp.' },
        // { value: 7, OtherLedgersName: 'Cartage Income Based on Qty' },
        // { value: 8, OtherLedgersName: 'Cartage Inward @ 5%' },
        // { value: 9, OtherLedgersName: 'Commision Income' },
        // { value: 10, OtherLedgersName: 'Computer Repairing Exps.' },
        // { value: 11, OtherLedgersName: 'Insurance Exps.' },
        // { value: 12, OtherLedgersName: 'Interest Exps.' },
        // { value: 13, OtherLedgersName: 'Interest Income' },
      ],
      crdrOptions: [
        { text: "CR" },
        { text: "DR" },
        // More options...
      ],
      otherLedgerDetails: [],

      newinvoiceDate: new Date(),
      isButtonDisabled: true,
      isButtonDisabledLogin: true,
      godowns: [
        // { text: 'Godown' },
        // { text: 'Main Location' },
        // { text: 'Second Godown' },
      ],
      itemamount: "0.00",
      itemdiscount: "0",
      itemrate: "0",
      itemquantity: "0",
      isTextareaVisible: false,

      // Add Taxes Dropdown
      AddNewTaxesListDropdown: [],
      addtaxes3Options: [
        // { value: 1, AddTaxesName: 'Air Consitioner' },
        // { value: 2, AddTaxesName: 'Furniture A/c' },
        // { value: 3, AddTaxesName: 'CGST' },
        // { value: 4, AddTaxesName: 'Downward Rounding Off' },
        // { value: 5, AddTaxesName: 'Electricity EXP' },
        // { value: 6, AddTaxesName: 'GST Sales' },
        // { value: 7, AddTaxesName: 'Applicable' },
        // { value: 8, AddTaxesName: 'S-GST PAID A/c' },
        // { value: 9, AddTaxesName: 'SGST' },
        // { value: 10, AddTaxesName: 'Upward Rounding Off' },
      ],

      // Buyer Name Dropdown
      buyersnameSearchQuery: "",
      buyersnameDropdownOpen: false,
      buyersnameOptions: [
        // { value: 1, buyersnamelabel: 'Abcd Private Limited', name: 'Asaraf 1' },
        // { value: 2, buyersnamelabel: 'Adinath Enterprise', name: 'Asaraf 2' },
        // { value: 3, buyersnamelabel: 'Future Tech Private Limited', name: 'Asaraf 3' },
        // { value: 4, buyersnamelabel: 'K.P enterprise', name: 'Asaraf 4' },
        // { value: 5, buyersnamelabel: 'Shreenath Industries', name: 'Asaraf 5' }
      ],
      buyersnameFilteredOptions: [],
      buyersnameActiveIndex: -1,
      // Buyer Country Dropdown
      buyercountrySearchQuery: "",
      buyercountryDropdownOpen: false,
      buyercountryFilteredOptions: [],
      buyercountryActiveIndex: -1,
      // Buyer State Dropdown
      buyerstateSearchQuery: "",
      buyerstateDropdownOpen: false,
      stateData: [
        // { value: 1, buyersstatelabel: 'Gujarat' },
        // { value: 2, buyersstatelabel: 'Maharashtra' },
        // { value: 3, buyersstatelabel: 'Madhya Pradesh' },
        // { value: 4, buyersstatelabel: 'Uttar Pradesh' },
        // { value: 5, buyersstatelabel: 'Himachal Pradesh' }
      ],
      buyerstateFilteredOptions: [],
      buyerstateActiveIndex: -1,

      // Buyer Place of Supply Dropdown
      buyerplaceofsupplySearchQuery: "",
      buyerplaceofsupplyDropdownOpen: false,
      buyerplaceofsupplyFilteredOptions: [],
      buyerplaceofsupplyActiveIndex: -1,

      // Buyer Registration Type Dropdown
      buyerregistrationSearchQuery: "",
      buyerregistrationDropdownOpen: false,
      buyerregistrationOptions: [
        { value: 1, buyersregistrationlabel: "Composion" },
        { value: 2, buyersregistrationlabel: "Regular" },
        { value: 3, buyersregistrationlabel: "Consumer" },
        { value: 4, buyersregistrationlabel: "Unregistred" },
      ],
      buyerregistrationFilteredOptions: [],
      buyerregistrationActiveIndex: -1,

      // Consignee Name Dropdown
      consigneenameSearchQuery: "",
      consigneenameDropdownOpen: false,
      buyersnameFilteredOptions: [
        // { value: 1, consigneenamelabel: 'Abcd Private Limited', name: 'Asaraf 1' },
        // { value: 2, consigneenamelabel: 'Adinath Enterprise', name: 'Asaraf 2' },
        // { value: 3, consigneenamelabel: 'Future Tech Private Limited', name: 'Asaraf 3' },
        // { value: 4, consigneenamelabel: 'K.P enterprise', name: 'Asaraf 4' },
        // { value: 5, consigneenamelabel: 'Shreenath Industries', name: 'Asaraf 5' }
      ],
      consigneenameFilteredOptions: [],
      consigneenameActiveIndex: -1,
      // Consignee Country Dropdown
      consigneecountrySearchQuery: "",
      consigneecountryDropdownOpen: false,
      CountryData: [],
      consigneecountryFilteredOptions: [],
      consigneecountryActiveIndex: -1,
      // Consignee State Dropdown
      consigneestateSearchQuery: "",
      consigneestateDropdownOpen: false,
      consigneestateOptions: [
        { value: 1, consigneestatelabel: "Gujarat" },
        { value: 2, consigneestatelabel: "Maharashtra" },
        { value: 3, consigneestatelabel: "Madhya Pradesh" },
        { value: 4, consigneestatelabel: "Uttar Pradesh" },
        { value: 5, consigneestatelabel: "Himachal Pradesh" },
      ],
      consigneestateFilteredOptions: [],
      consigneestateActiveIndex: -1,
      isAdvancedSettingsOpen: false,
      dispatch_shipping_date: "",
      order_date: "",
      eWayBill_date: "",
      openTab: 1,
      voucherNumber: "",
      itemSearch: "",

      gstinneweWay: "",
      usernameValue: "",
      passwordValue: "",
      passwordVisibleeWayLogin: false,
      slide: 0,
      RadioValue: "Outward",
      SubSupplyTypeValue: "",
      subSupplyTypeData: [
        // { subtypetext: 'Supply', value: 'Supply' },
        // { subtypetext: 'Document', value: 'Document' },
        // { subtypetext: 'Return', value: 'Return' }
      ],
      TransactiontypeOption: "",
      Transactiontypeoptions: [
        { transactiontypetext: "Regular", value: "Regular" },
        { transactiontypetext: "Cash", value: "Cash" },
        { transactiontypetext: "Other", value: "Other" },
        { transactiontypetext: "e-Fund Transfer", value: "e-Fund Transfer" },
      ],
      DocumentTypeValue: "",
      documentTypeData: [
        // { doctypetext: 'Tax Invoice', value: 'Tax Invoice' },
        // { doctypetext: 'Invoice', value: 'Invoice' },
      ],
      transDocDate: new Date(),
      TransporterNameValue: "",
      TransporterName: [
        // { TransporterNametext: 'ABCD Private Limited', value: '' },
        // { TransporterNametext: 'Aadinath Enterprise', value: '' },
      ],
      TransportIdValue: "",
      TransporterId: [
        // { TransporterIDtext: '43AAA AA000 0A2Z4', value: '' },
        // { TransporterIDtext: '34AAA AA000 0A4Z6', value: '' },
      ],
      TransportModeValue: "Road",
      VehicleTypeValue: "Regular",
      transDocDate: new Date(),
      BillFromOption: "",
      BillFromoptions: [
        { BillFromtext: "Mahaveer Enterprise", value: "" },
        { BillFromtext: "Mahalaxmi Industries", value: "" },
      ],
      BillFromStateOption: "",
      BillFromStateoptions: [
        { BillFromStatetext: "Uttarakhand", value: "" },
        { BillFromStatetext: "Uttar Pradesh", value: "" },
        { BillFromStatetext: "Gujarat", value: "" },
        { BillFromStatetext: "Maharashtra", value: "" },
      ],
      DispatchPlaceOption: "",
      DispatchPlaceoptions: [
        { DispatchPlacetext: "Ahmedabad", value: "" },
        { DispatchPlacetext: "Noida", value: "" },
      ],
      DispatchStateOption: "",
      DispatchStateoptions: [
        { DispatchStatetext: "Uttarakhand", value: "" },
        { DispatchStatetext: "Uttar Pradesh", value: "" },
        { DispatchStatetext: "Gujarat", value: "" },
        { DispatchStatetext: "Maharashtra", value: "" },
      ],
      BillToOption: "",
      BillTooptions: [
        { BillTotext: "Mahaveer Enterprise", value: "" },
        { BillTotext: "Mahalaxmi Industries", value: "" },
      ],
      BillToStateOption: "",
      BillToStateoptions: [
        { BillToStatetext: "Uttarakhand", value: "" },
        { BillToStatetext: "Uttar Pradesh", value: "" },
        { BillToStatetext: "Gujarat", value: "" },
        { BillToStatetext: "Maharashtra", value: "" },
      ],
      ShipToPlaceOption: "",
      ShipToPlaceoptions: [
        { ShipToPlacetext: "Ahmedabad", value: "" },
        { ShipToPlacetext: "Noida", value: "" },
      ],
      ShipToStateOption: "",
      ShipToStateoptions: [
        { ShipToStatetext: "Uttarakhand", value: "" },
        { ShipToStatetext: "Uttar Pradesh", value: "" },
        { ShipToStatetext: "Gujarat", value: "" },
        { ShipToStatetext: "Maharashtra", value: "" },
      ],
      isButtonChecked: false,
      CompanyNameData: localStorage.getItem("companyName"),
      StateNameData: localStorage.getItem("companystateName"),
      CompanyGstData: localStorage.getItem("companyGstNumber"),
      Companyaddress: localStorage.getItem("address"),
      Companypincode: localStorage.getItem("pincode"),
      companyCountryName: localStorage.getItem("companyCountryName"),
      selectionDone: false,
      totalDecimalValueForRate: localStorage.getItem('decimalPlaces'),
       unitsForQty: [],
      totalDecimalValue: 0,
      partyid: '',
      voucherTypeGuid : ''

    };
  },
  computed: {
    disabledBookDates() {
      const minDate = new Date(this.BookFromDate); 
      return {
        to: new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate() - 0),
      };
    },
     isDisable() { 
      if(this.fromMyVoucher && this.isTransfer == 1) {
        return true;
      }else if(this.fromMyVoucher && (this.isTransfer == 0 || this.isTransfer == -1) ) {
        return false;
      }else if(this.isVoucherEditable ) {
        return false;
      }else {
        return false;
      }
    },

    isDefaultSelected() {
      this.custom_prefix = this.customizeVoucherNumber.prefix;
      this.custom_suffix = this.customizeVoucherNumber.suffix;
      if (this.$route.params.voucher_id !== undefined) {
        this.custom_Voucher_number = Number(this.customizeVoucherNumber.number) - 1;
      }
      else {
        this.custom_Voucher_number = this.customizeVoucherNumber.number;
      }

      return this.selectedOptionradio === "default";
    },
    chevronClass() {
      return this.isAdvancedSettingsOpen
        ? "fa fa-chevron-down"
        : "fa fa-chevron-right";
    },
    VoucherEditable() {
      if (this.voucherTypeData && !this.selectedNumberingMethod) {
        return (
          (this.voucherTypeData === "Manual" && this.isSetDefaultNumberData) ||
          (!this.isSetDefaultNumberData &&
            this.voucherTypeData !== "None" &&
            this.voucherTypeData !== "Automatic")
        );
      } else {
        return (
          (this.selectedNumberingMethod == "Manual" &&
            this.invoice_type == true) ||
          (this.invoice_type == false &&
            this.selectedNumberingMethod != "None" &&
            this.selectedNumberingMethod !== "Automatic")
        );
      }
    },
    computedConsigneenameOptions() {
      const companyName = localStorage.getItem("companyName");
      const companyNameOption = companyName
        ? { ledgerName: companyName, value: "companyName" }
        : null;

      return companyNameOption
        ? [companyNameOption, ...this.consigneenameFilteredOptions]
        : this.consigneenameFilteredOptions;
    },
  },
  created() { },
  watch: {
    // referenceSearchQuery(newQuery) {
    //   if (newQuery === "") {
    //     this.ReferencefilterOptions();
    //   }
    // },
    RadioValue() {
      this.updateSelectedSupply();
    },
    consigneenameSearchQuery(newValue) {
      if (newValue === this.CompanyNameData) {
        this.consigneestateSearchQuery = this.StateNameData;
        this.consigneeGstin = this.CompanyGstData;
        this.consignee_address = this.Companyaddress;
        this.consigneePostalCode = this.Companypincode;
        this.consigneecountrySearchQuery = this.companyCountryName != "undefined" ? this.companyCountryName : 'India'
        this.ConsigneeGuid = '';
      }
    },
    buyersnameSearchQuery(newValue) {
      if (newValue === this.CompanyNameData) {
        this.buyerstateSearchQuery = this.StateNameData;
        this.buyerplaceofsupplySearchQuery = this.StateNameData;
        this.BuyerGstin = this.CompanyGstData;
        this.buyerAddress = this.Companyaddress;
        this.BuyerPostalCode = this.Companypincode;
        this.buyercountrySearchQuery = this.companyCountryName != "undefined" ? this.companyCountryName : 'India'
      }
    },  
    voucherSearchQuery(newVal) {
      const selectedVoucherType = this.voucherFilteredOptions.find(
        (item) => item.voucherTypeName === newVal
      );
      if (this.voucherSearchQuery && selectedVoucherType.voucherNumberSeriesList) {
        selectedVoucherType.voucherNumberSeriesList.forEach((series) => {
          this.voucherTypeId = selectedVoucherType.id
        })
      }
    }

  },
  directives: {
    "scroll-into-view": {
      update(el, binding) {
        if (binding.value) {
          el.scrollIntoView({ block: "nearest", inline: "nearest" });
        }
      },
    },
  },
  methods: {
     revertBack() {
      if(this.voucherSyncId){
        GoogleAnalytics.PurchaseOrder_Revert_Back_Voucher();
      }
      else{
        GoogleAnalytics.PurchaseOrder_Delete_Voucher();
      }
        const data = {
          _userId: localStorage.getItem("customerId"),
          // voucherId: this.$route.params.voucher_id,
          voucherId: this.voucherSyncId ? this.voucherSyncId : this.$route.params.voucher_id,
          requestFrom: "WEB",
        };

        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };

        Api.deleteMyVoucher(data, headers)
          .then((response) => {
            if (response.data.status == 200) {
              this.handleRoute();
            }
        })
          .catch((err) => {
            Common.getStatusForActionFailed(err.response.status);
          });
      },

        handleCancelVoucher() { 
          this.$bvModal.hide('CancelVoucherModal');
          this.cancelOrDeleteVoucher();
        },

        showDeleteModal() {
        this.$bvModal.show('DeleteVoucherModal');
      },
      deleteVoucherNo() {
        this.$bvModal.hide('DeleteVoucherModal');
      },
      showCancelModal() {
        this.$bvModal.show('CancelVoucherModal');
      },
      cancelVoucherNo() {
        this.$bvModal.hide('CancelVoucherModal');
      },
    // getFormatedDate(dateString) {
    //   let year = dateString.substring(0, 4);
    //   let month = dateString.substring(4, 6);
    //   let day = dateString.substring(6, 8);
    //   return `${year}-${month}-${day}`;
    // },
    validateWordLimitForDescription(description) {

      const wordLimit = 100;
      const words = description.trim().split(/\s+/).filter(word => word);
      if (words.length > wordLimit) {
        this.stockItemsError.description = "Description exceeds the 100-word limit";

      } else {
        this.stockItemsError.description = "";


      }
    },
    // validateVehicleNumber() {
    //   this.advancedError.vechileNumberInvalid = ""; // Clear previous errors
    //   const vehicleNumberPattern = /^[A-Z]{2}-\d{2}-[A-Z]{1,2}-\d{4}$/;

    //   if (!this.dispatch_motor_vehicle_no.trim()) {
    //     this.advancedError.vechileNumberInvalid = "";
    //   } else if (!vehicleNumberPattern.test(this.dispatch_motor_vehicle_no)) {
    //     this.advancedError.vechileNumberInvalid = "Enter a valid vehicle number (e.g., MH-12-AB-1234)";
    //   } else {
    //     this.advancedError.vechileNumberInvalid = ""; // Valid input
    //   }
    // },
    validateWordLimitForDestination() {
      const wordLimit = 100;
      const words = this.dispatch_destination.trim().split(/\s+/).filter(word => word);
      if (words.length > wordLimit) {

        // Trim the narration to the first 500 words
        this.dispatch_destination = words.slice(0, wordLimit).join(" ");
        this.advancedError.dispatch_destination = "Destination exceeds the 100-word limit"
      } else {
        this.advancedError.dispatch_destination = "";
      }
    },

    validateWordLimit() {
      const wordLimit = 500;
      const words = this.narration
        .trim()
        .split(/\s+/)
        .filter((word) => word);
      if (words.length > wordLimit) {
        this.isWordLimitExceeded = true;
        // Trim the narration to the first 500 words
        this.narration = words.slice(0, wordLimit).join(" ");
        this.$refs.narrationInput.blur();
      } else {
        this.isWordLimitExceeded = false;
      }
    },

    // this funciton is to not allow user to initiate with any special charecters in prefix
    validateInput(event) {
      const regex = /^[A-Za-z0-9][A-Za-z0-9\s!@#\$%\^\&*\)\(+=._\/-]*$/;

      if (!regex.test(event.target.value)) {
        this.custom_prefix = event.target.value.slice(0, -1);
      }
      this.voucherEditted = true;
    },
    validatePostal(event) {
      this.advancedError.BuyerPostalCode = "";
      const value = event.target.value;
      if (value) {
        if (value.length > 6 || value.length < 6) {
          this.button_disabled = "1";
          this.advancedError.BuyerPostalCode = "valid postal code is required";
        } else {
          this.button_disabled = "0";
        }
      } else {
        this.button_disabled = "0";
        this.advancedError.BuyerPostalCode = "";
      }
    },

    validateGSTIN() {
      this.advancedError["BuyerGstin"] = "";
      this.advancedError["consigneeGstin"] = "";

      const gstinRegex =
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

      if (this.buyerregistrationSearchQuery !== "Unregistered") {
        let isBuyerGstinValid = true;
        let isConsigneeGstinValid = true;

        if (this.BuyerGstin) {
          if (gstinRegex.test(this.BuyerGstin)) {
            this.advancedError["BuyerGstin"] = "";
          } else {
            this.advancedError["BuyerGstin"] = "Valid GST number is required";
            isBuyerGstinValid = false;
          }
        }

        if (this.consigneeGstin) {
          if (gstinRegex.test(this.consigneeGstin)) {
            this.advancedError["consigneeGstin"] = "";
          } else {
            this.advancedError["consigneeGstin"] =
              "Valid GST number is required";
            isConsigneeGstinValid = false;
          }
        }

        if (!isBuyerGstinValid || !isConsigneeGstinValid) {
          this.button_disabled = "1";
        } else {
          this.button_disabled = "0";
        }
      } else {
        this.advancedError["BuyerGstin"] = "";
        this.advancedError["consigneeGstin"] = "";
        this.button_disabled = "0";
      }
    },

    //pdf function
      backentryPdf() {
    const useGetPDFForVoucherDetailsGo =
      (this.action === "Cancel" && this.isTransfer == 0 && this.isModified) ||
      (this.action === "" && !this.isModified && this.isTransfer == 1 && this.isVoucherEditable);

      console.log(useGetPDFForVoucherDetailsGo);

    const useGetMyVoucherPDF =
      (this.action === "Alter" && this.isModified && this.isTransfer == 0) ||
      (this.action === "Alter" && this.isModified && this.isTransfer == 1) ||
      (this.action === "" && !this.isModified && this.isTransfer == 1 && this.fromMyVoucher) ||
      (this.action === "" && !this.isModified && this.isTransfer == 0 && this.fromMyVoucher);

      console.log(useGetMyVoucherPDF);
    const data = {
      requestFrom: "WEB",
      company_id: localStorage.getItem("companyId"),
      _userId: localStorage.getItem("customerId"),
      voucherId: this.$route.params.voucher_id,
      ...(useGetPDFForVoucherDetailsGo && {
        isEway: this.isEwayStatus,
        isEinvoice: this.isEInvoiceStatus
      })
    };

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json", 
      token: localStorage.getItem("webAuthToken"),
    };

    const apiCall = useGetPDFForVoucherDetailsGo
      ? Api.getPDFForVoucherDetailsGo
      : useGetMyVoucherPDF
        ? Api.getMyVoucherPDF
        : null;

    if (!apiCall) {
      console.error("No matching condition found for PDF API call.");
      return;
    }

    apiCall(data, headers)
      .then((response) => {
        if (response.data.message === "AUTHENTICATION_FAILED") {
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


    handleVoucherSuffixInput() {
      this.voucherEditted = true;
    },

    // validations for button to not allow to be clicked until ledger type is filled
    validation() {
      this.button_error = [];
      this.button_disabled = "1";
      if (this.partynameSearchQuery.trim() === "") {
        this.button_error["party_name"] = "Party Name is required";
      }

      if (this.ledgertypeSearchQuery.trim() === "") {
        this.button_error["ledger_type"] = "Ledger Type is required";
      }

      if (Object.keys(this.button_error).length === 0) {
        this.button_disabled = "0";
      }
    },
    // function to get the company data for dispatch from in eway
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
          this.BookFromDate = response.data.data.booksFrom;
          this.DispatchName = response.data.data.companyName;
          this.DispatchStateName = response.data.data.companyDetails.stateName;
          this.DispatchAddress = response.data.data.companyDetails.address;
          this.DispatchPlace = response.data.data.companyDetails.stateName;
          this.DispatchPincode = response.data.data.companyDetails.pincode;
        }
      });
    },
    // we are using this function to round off the decimal value
    roundToTwoDecimalPlaces(value) {
      const factor = Math.pow(10, this.totalDecimalValueForRate);
      return Math.round(value * factor) / factor;
    },
    // this function is to get the invoice configurations data
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
            this.invoice_type =
              CommonResponse.voucherNumberConfiguration.purchaseorder.isSetDefaultNumber;
            this.isEwayStatus = CommonResponse.isEwayStatus;
            this.customizeVoucherNumber =
              CommonResponse.voucherNumberConfiguration.purchaseorder.customizeVoucherNumber;
            this.customisedDeclaration = CommonResponse.customisedDeclaration;
            this.customisedHeaders = CommonResponse.customisedHeaders;
            this.defaultDeclaration = CommonResponse.defaultDeclaration;
            this.ewayPDFFormat = response.data.data.ewayPDFFormat;
            this.isEInvoiceStatus = CommonResponse.isEInvoiceStatus;
            this.invoiceDetailsBool = CommonResponse;
            //item description status
            this.isDescriptionEnabled = CommonResponse.showItemDescription;
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
            if (this.$route.params.voucher_id !== undefined) {
              this.customizeVoucherNumber.isPurchaseOrderNumber =
                Number(response.data.data.vouchers.voucherNumberConfiguration.purchaseorder.customizeVoucherNumber.number) - 1;
            }
            else {
              this.customizeVoucherNumber.isPurchaseOrderNumber =
                response.data.data.vouchers.voucherNumberConfiguration.purchaseorder.customizeVoucherNumber.number;
            }

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

            this.customizeVoucherNumber.isPeyment =
              response.data.data.vouchers.voucherNumberConfiguration.payment.isSetDefaultNumber;
            this.customizeVoucherNumber.isPeymentPrefix =
              response.data.data.vouchers.voucherNumberConfiguration.payment.customizeVoucherNumber.prefix;
            this.customizeVoucherNumber.isPeymentNumber =
              response.data.data.vouchers.voucherNumberConfiguration.payment.customizeVoucherNumber.number;
            this.customizeVoucherNumber.isPeymentSuffix =
              response.data.data.vouchers.voucherNumberConfiguration.payment.customizeVoucherNumber.suffix;

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
            // this.selectedOptionradio = response.data.data.ewayPDFFormat
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    //  this function is to update the invpice configuration after changing the voucher number
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
        isEInvoiceStatus: this.isEInvoiceStatus,
        isEwayStatus: this.isEwayStatus,
        ewayPDFFormat: this.ewayPDFFormat,

        customisedHeaders: {
          sales: this.customisedHeaders.sales,
          salesOrder: this.customisedHeaders.salesOrder,
          purchase: this.customisedHeaders.purchase,
          purchaseOrder: this.customisedHeaders.purchaseOrder,
          creditNote: this.customisedHeaders.creditNote,
          debitNote: this.customisedHeaders.debitNote,
          receipt: this.customisedHeaders.receipt,
          payment: this.customisedHeaders.peyment,
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
              number: this.customizeVoucherNumber.isPeyment
                ? ""
                : this.customizeVoucherNumber.isPeymentNumber,
              prefix: this.customizeVoucherNumber.isPeyment
                ? ""
                : this.customizeVoucherNumber.isPeymentPrefix,
              suffix: this.customizeVoucherNumber.isPeyment
                ? ""
                : this.customizeVoucherNumber.isPeymentSuffix,
            },
            isSetDefaultNumber: this.customizeVoucherNumber.isPeyment,
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
              number: this.custom_Voucher_number,
              prefix: this.custom_prefix.toLowerCase(),
              suffix: this.custom_suffix.toLowerCase(),
            },
            isSetDefaultNumber: this.selectedOptionradio == "default" ? this.invoice_type : false,
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
            isSetDefaultNumber:
              this.customizeVoucherNumber.isSales
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
    addmoreLedger_change(event, index, type) {
      if (type !== "update") {
        // this.ledger_array[index].ledger_name = event.name === undefined ? sanitize(event.ledgerName) : sanitize(event.name);
        // this.ledger_array[index].ledger_ledgerGuid = event.ledgerGuid;
        // this.ledger_array[index].ledger_ledgerGroup = event.ledgerGroup;
        // this.ledger_array[index].ledger_ledgerGroupParent = event.ledgerGroupParent;
      } else {
        this.addmoreLedgerEntries.forEach((arr, index1) => {
          this.ledger_array[index1].ledger_name = arr.ledgerName;
          this.ledger_array[index1].ledger_ledgerGuid = arr.ledgerGuid;
          this.ledger_array[index1].ledger_ledgerGroup = arr.ledgerGroup;
          this.ledger_array[index1].ledger_ledgerGroupParent =
            arr.ledgerGroupParent;
        });
      }
    },

    // this function is handeling NAN
    getNum(val) {
      if (isNaN(val)) {
        return 0;
      }
      return val;
    },
    updateLedgerArray(index, key, value) {
      // Update the ledger_array for the specified index
      this.$set(this.ledger_array[index], key, value);
      this.limitDecimalPlaces('otherLedger', index)
      
    },
    // this function is calculating the amount according to taxinclusive.
    taxInclusive_calculation(event, index, label) {
      if (label == "update") {
        var isChecked = this.AddNewItemList[index].isChecked;
        this.AddNewItemList[index].isChecked = isChecked;
      } else {
        var isChecked = event.target.checked;
        this.AddNewItemList[index].isChecked = isChecked;
      }
      if (isChecked == true) {
        if (this.$route.params.voucher_id) {
          this.AddNewItemList[index].old_amount = this.AddNewItemList[index]
            .inclusiveVatRate
            ? this.AddNewItemList[index].inclusiveVatRate.split("/")[0]
            : this.AddNewItemList[index].itemrate;
        } else {
          this.AddNewItemList[index].old_amount =
            this.AddNewItemList[index].itemrate;
        }
        const rate =
          this.AddNewItemList[index].itemrate /
          (1 + this.AddNewItemList[index].gst_per / 100);
          this.AddNewItemList[index].itemrate = this.roundToTwoDecimalPlaces(rate)

      } else {
        if (this.$route.params.voucher_id) {
          if (this.AddNewItemList[index].inclusiveVatRate) {
            this.AddNewItemList[index].old_amount =
              this.AddNewItemList[index].inclusiveVatRate.split("/")[0];
          }
        }

        this.AddNewItemList[index].itemrate =
          this.AddNewItemList[index].old_amount;
      }
      this.updateAmount(index);
    },
    // this function is fetching new voucher number.
    getVoucherNumber() {
      this.combinedVoucherNumber = "";
      if (this.VoucherEditable && this.voucherEditted) {
        this.combinedVoucherNumber =
          this.custom_prefix + this.custom_Voucher_number + this.custom_suffix;
      }
      this.loading = true;
      this.new_loading = true;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        voucherType: this.voucherSearchQuery,
        voucherTypeId: this.voucherTypeId,
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
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseData == "200") {
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
      }, 5000);
    },
    change_godown(option, index) {
      if (this.tempItmesObject != "") {
        this.tempItmesObject[index].godownName = option.name;
        this.tempItmesObject[index].godownGuid = option.guid;
      }
    },
    change_description(event, index) {
      if (this.tempItmesObject != "") {
        this.tempItmesObject[index].descriptions = event.target.value;
        this.validateWordLimitForDescription(event.target.value)
      }
      else {
        this.validateWordLimitForDescription(event.target.value);
      }

    },

    filterItemDetails(items) {
      return items.filter(
        (item) =>
          item.itemQty !== "" &&
          item.itemRate !== "" &&
          item.itemRate !== 0 &&
          item.itemRate !== "0"
      );
    },
    //this function is for getting voucher type data
    async getVoucherType() {
      try {
        const data = {
          requestFrom: "WEB",
          searchTerm: this.vouchertypeSearch,
          startLimit: 0,
          endLimit: 25,
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          parent: "Purchase Order",
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
          console.log(response.data.data.list);
          this.voucherOptions = response.data.data.list;
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
        this.voucherFilteredOptions = this.voucherOptions;
        if (this.$route.params.voucher_id == undefined || this.$route.params.voucher_id == '') {
          if (this.voucherFilteredOptions.length == 1) {
            this.voucherSearchQuery = this.voucherFilteredOptions[0].voucherTypeName;
            this.voucherTypeId = this.voucherFilteredOptions[0].id;
            this.selectedNumberingMethod = this.voucherFilteredOptions[0].voucherNumberSeriesList[0].numberingMethod;
            this.voucherTypeGuid = this.voucherFilteredOptions[0].guid

            this.getVoucherNumber();
            this.voucherDropdownOpen = false;
            this.partyDetails();
            this.$nextTick(() => {
              if (this.$refs.partynameInput) {
                this.$refs.partynameInput.focus();
              }
            });
            this.partynameDropdownOpen = true;

          }
        }
      } catch (err) {
        console.error(err);
      }
    },
    // function for buyer's data
    async buyerDetails(Type) {
      this.loading = true;
      this.new_loading = true;

      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startLimit: 0,
        endLimit: 25,
        requestFrom: "WEB",
        searchTerm: this.buyerSearch,
        sortBy: "ledgerName",
        parent: this.parentTypeStore.partyName,
        orderBy: 1,
      };

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      try {
        const response = await Api.getLedgersByLedgerGroupParentGo(
          data,
          headers
        );
        const responseData = Common.getStatusForActionFailed(
          response.data.status
        );

        if (responseData == "200") {
          this.buyersnameOptions = [];
          for (let [key, value] of Object.entries(response.data.data.list)) {
            this.buyersnameOptions.push({
              ledgerName: value.ledgerName,
              id: value._id,
              partyguid: value.guid,
              partyGSTIn: value.partyGSTIn,
              stateName: value.stateName,
              parent: value.parent,
              parentgroup: value.parentgroup,
              countryName: value.countryName,
              pincode: value.pincode,
              gstRegistrationType: value.gstRegistrationType,
              address: value.address,
              masterReservedName:value.masterReservedName,
              guid:value.guid
            });
            if(Type=="Buyer" && this.buyersnameSearchQuery == value.ledgerName){
               this.BuyerGuid = value.guid
            }
            else if(Type == "Consignee" && this.consigneenameSearchQuery == value.ledgerName){
              this.ConsigneeGuid = value.guid;
            }
          }
        }
        this.buyersnameFilteredOptions = this.buyersnameOptions;
        this.consigneenameFilteredOptions = this.buyersnameFilteredOptions;
      } catch (err) {
        Common.getStatusForActionFailed(err.response.status);
      } finally {
        this.loading = false;
        this.new_loading = false;
      }
    },
    // funciton to get the buyer's state data
    async BuyerstateDetails() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        countryName: this.buyercountrySearchQuery,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      try {
        const response = await Api.getStateGo(data, headers); // Await the API call
        this.stateData = [];

        // Process the response
        for (let [key, value] of Object.entries(response.data.data)) {
          if (value.stateName !== undefined && value.stateName !== "") {
            this.stateData.push({
              name: value.stateName,
              id: value.stateName,
            });
          }
        }
      } catch (err) {
        Common.getStatusForActionFailed(err.response.status);
        this.loading = false;
      }
    },
    // consignee state data
    async ConsigneestateDetails() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        countryName: this.consigneecountrySearchQuery,

      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      try {
        const response = await Api.getStateGo(data, headers)

        this.stateData = [];
        for (let [key, value] of Object.entries(response.data.data)) {
          if (value.stateName !== undefined && value.stateName !== "") {
            this.stateData.push({
              name: value.stateName,
              id: value.stateName,
            });
          }
        }
      }
      catch (err) {
        Common.getStatusForActionFailed(err.response.status);
        this.loading = false;
      }
    },

    // this function is for getting the party name data

    async partyDetails() {
      try {
        this.loading = true;
        this.new_loading = true;

        const data = {
          company_id: localStorage.getItem("companyId"),
          _userId: localStorage.getItem("customerId"),
          startLimit: 0,
          endLimit: 25,
          requestFrom: "WEB",
          searchTerm: this.partySearch,
          sortBy: "ledgerName",
          parent: this.parentTypeStore.partyName,
          orderBy: 1,
          isFromBackEntry: true,
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };

        const response = await Api.getLedgersByLedgerGroupParentGo(
          data,
          headers
        );
        const responseData = Common.getStatusForActionFailed(
          response.data.status
        );
        if (responseData == "200") {
          // this.PartyData = response.data.data.list;
          this.partynameOptions = [];
          for (let [key, value] of Object.entries(response.data.data.list)) {
            this.partynameOptions.push({
              ledgerName: value.ledgerName,
              id: value._id,
              partyguid: value.guid,
              partyGSTIn: value.partyGSTIn,
              stateName: value.stateName,
              parent: value.parent,
              parentgroup: value.parentgroup,
              countryName: value.countryName,
              pincode: value.pincode,
              gstRegistrationType: value.gstRegistrationType,
              address: value.address,
              masterReservedName: value.masterReservedName,
              guid:value.guid
            });
          }
          this.partynameFilteredOptions = this.partynameOptions;
        }
      } catch (err) {
        Common.getStatusForActionFailed(err.response.status);
      } finally {
        this.loading = false;
      }
    },
    // this function is to get the ledger type data
    async getledgerlist() {
      try {
        this.loading = true;
        this.new_loading = true;
        const data = {
          company_id: localStorage.getItem("companyId"),
          _userId: localStorage.getItem("customerId"),
          sortBy: "ledgerName",
          startLimit: 0,
          endLimit: 25,
          requestFrom: "WEB",
          searchTerm: this.LedgerTypeSearch,
          parent: this.parentTypeStore.voucherTypeLedger,
          orderBy: 1,
          isFromBackEntry: true,
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };

        const response = await Api.getLedgersByLedgerGroupParentGo(
          data,
          headers
        );
        const responseData = Common.getStatusForActionFailed(
          response.data.status
        );

        if (responseData == "200") {
          this.LedgerData = [];
          for (let [key, value] of Object.entries(response.data.data.list)) {
            let latestRate = value.rateLists
              .slice() // Create a shallow copy to avoid modifying the original array
              .sort(
                (a, b) =>
                  new Date(b.applicableFrom) - new Date(a.applicableFrom)
              )[0];

            this.ledgertypeOptions.push({
              ledgerName: value.ledgerName,
              ledgerId: value.guid,
              ledger_id: value.id,
              gstApplicable: latestRate ? "Yes" : "No",
              tax: latestRate ? latestRate.IGST : 0,
            });
            this.ledgertypeFilteredOptions = this.ledgertypeOptions;
          }
        }
      } catch (err) {
        Common.getStatusForActionFailed(err.response.status);
      } finally {
        this.loading = false;
      }
    },
    // this function is getting the pricelevel data.
    async get_price_level_list() {
      try {
        this.loading = true;
        this.new_loading = true;
        const data = {
          requestFrom: "WEB",
          company_id: localStorage.getItem("companyId"),
          _userId: localStorage.getItem("customerId"),
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };

        const response = await Api.getPriceLevelsByCompanyIdGo(data, headers);
        this.pricelevelOptions = response.data.data.list;
        this.pricelevelFilteredOptions = this.pricelevelOptions;
      } catch (err) {
        Common.getStatusForActionFailed(err.response.status);
      } finally {
        this.loading = false;
      }
    },
    // this function is for getting the stock item data.

    async getStockItemList() {
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startLimit: 0,
        endLimit: 25,
        requestFrom: "WEB",
        searchTerm: this.itemSearch,
        orderBy: 1,
        sortBy: "",
        isFromBackEntry: true,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      try {
        const response = await Api.getItemsByCompanyIdGo(data, headers);
        this.tableitemsOptions = [];
        for (let [key, value] of Object.entries(response.data.data.list)) {
          this.tableitemsOptions.push({
            tableitemsSearchQuery: value.stockItemName,
            itemrate: parseFloat(value.lastPurchasePrice).toFixed(this.totalDecimalValueForRate),
            // hsncode: value.hsnCode,
            standardSellingPriceList: value.standardSellingPriceList,
            fullPriceLevelList: value.fullPriceLevelList,
            guid: value.guid,
            baseUnits: value.baseUnits,
            parentGuid: value.parentGuid,
            parent: value.parent,
            category: value.category,
            categoryGuid: value.categoryGuid,
            rateOfVAT: value.rateOfVAT,
            standardSellingPriceList: value.standardSellingPriceList,
            rateLists: value.rateLists,
            gstAppliacable: value.gstAppliacable,
            id: value.id,
            description: value.description,
            totalQuantity: value.totalQuantity
          });
        }
        this.tableitemsFilteredOptions = this.tableitemsOptions;
      } catch (error) {
        console.error("Error fetching stock items:", error);
      }
    },
    async getlocationlist() {
      try {
        this.loading = true;
        this.new_loading = true;

        const data = {
          company_id: localStorage.getItem("companyId"),
          _userId: localStorage.getItem("customerId"),
          startLimit: 0,
          endLimit: 25,
          requestFrom: "WEB",
          searchTerm: this.GodownSearch,
        };

        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };

        const response = await Api.getGodownsByCompanyIdGo(data, headers);

        if (response.data.message === "success") {
          // if (response.data.data.list.length == "1") {
          //   this.AddNewItemList.forEach((row) => {
          //     row.selectedgodownsOption = response.data.data.list[0].name;
          //   });
          // }
          this.godowns = response.data.data.list;
          this.filteredGodowns = this.godowns;
        } else {
          this.godowns = [];
        }
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
        this.new_loading = false;
      }
    },
    // this function is to get the other ledger dropdown data
    getaddmoreledger() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        sortBy: "ledgerName",
        startLimit: 0,
        endLimit: 100,
        requestFrom: "WEB",
        searchTerm: this.search,
        parent: this.parentTypeStore.otherLedger,
        isFromBackEntry: true,
        orderBy: 1,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgersByLedgerGroupParentGo(data, headers)
        .then((response) => {
          if (response.data.status == "200") {
            this.otherledgers2Options = [];
            for (let [key, value] of Object.entries(response.data.data.list)) {
              this.otherledgers2Options.push({
                name: value.ledgerName,
                id: value._id,
                ledgerGuid: value.guid,
                ledgerGroup: value.parent,
                ledgerGroupParent: value.parentgroup,
                masterReservedName: value.masterReservedName
              });
            }
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    check_price_levels() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getCompanyTallyFeaturesGo(data, headers)
        .then((response) => {
          //   this.usePriceLevels =
          //     response.data.data.inventoryFeatures.usePriceLevels;
          localStorage.setItem(
            "usePriceLevels",
            response.data.data.inventoryFeatures.usePriceLevels
          );
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    // this function is calculating the pricelevel if user is selecting from dropdown
    // getPriceAccordingPriceLevel(selection, index) {
    //   console.log(selection, "this is selection data");
    //   if (this.usePriceLevels == "Yes") {
    //     console.log("hi upper");
    //     if (
    //       this.pricelevelSearchQuery !== "" &&
    //       this.pricelevelSearchQuery.toLowerCase() !== "not applicable"
    //     ) {
    //       console.log("hi lower");

    //       let tempitemDetails = selection.fullPriceLevelList || [];
    //       let fullPriceLevelList = [];

    //       tempitemDetails.forEach((element) => {
    //         if (element.priceLevel === this.pricelevelSearchQuery) {
    //           fullPriceLevelList.push(element);
    //         }
    //       });
    //       let applicableDateArray = [];

    //       let date = moment(
    //         moment(String(this.newinvoiceDate)).format("yyyy-MM-DD"),
    //         "YYYY-MM-DD HH:mm:ss"
    //       );
    //       // check for applicable date
    //       fullPriceLevelList.forEach((element) => {
    //         if (
    //           date.isAfter(moment(element.date, "YYYY-MM-DD HH:mm:ss")) ||
    //           date.isSame(moment(element.date, "YYYY-MM-DD HH:mm:ss"))
    //         ) {
    //           console.log(date, "hi date");
    //           applicableDateArray.push(element);
    //         }
    //       });
    //       let applicablePriceLevel = [];
    //       if (applicableDateArray.length == 0) {
    //         return "";
    //       }
    //       console.log(applicableDateArray.length, "hi date length");
    //       console.log(applicableDateArray, "hi date bhai");

    //       if (applicableDateArray.length > 1) {
    //         applicablePriceLevel = applicableDateArray.reduce((min, e) => {
    //           const minDate = moment(min.date, "YYYY-MM-DD HH:mm:ss");
    //           const currentDate = moment(e.date, "YYYY-MM-DD HH:mm:ss");
    //           return currentDate.isAfter(moment(minDate, "YYYY-MM-DD HH:mm:ss"))
    //             ? e
    //             : min;
    //         });
    //       } else {
    //         applicablePriceLevel = applicableDateArray[0];
    //         console.log(applicablePriceLevel, "hi applicableDateArray");
    //       }
    //       console.log(applicablePriceLevel, "hi applicableDateArray-----2");

    //       let priceLevelList = applicablePriceLevel["priceLevelList"] || [];
    //       console.log(priceLevelList, "console data for pricelevel");

    //       let givenRateListWithoutZero = priceLevelList;
    //       console.log("priceLevelList:", priceLevelList); // Debugging output
    //       console.log(
    //         "givenRateListWithoutZero length:",
    //         givenRateListWithoutZero.length
    //       ); // Debugging output
    //       console.log(
    //         givenRateListWithoutZero[0],
    //         "givenRateListWithoutZero console"
    //       );
    //       if (
    //         givenRateListWithoutZero.length == 1 &&
    //         parseFloat(givenRateListWithoutZero[0]["endValue"]) == 0 &&
    //         parseFloat(givenRateListWithoutZero[0]["startValue"]) == 0
    //       ) {
    //         return givenRateListWithoutZero[0]["rateValue"];
    //       } else {
    //         if (givenRateListWithoutZero.length == 1) {
    //           return givenRateListWithoutZero[0]["rateValue"];
    //         }
    //       }
    //       console.log("hi i am working");

    //       let rateValue;

    //       // get price from range of value
    //       if (priceLevelList.length === 0) {
    //         rateValue = "";
    //         console.log("yes length is 0 ");
    //       } else {
    //         console.log("pricelevel length", priceLevelList);

    //         for (let [priceLevelkey, priceLevel] of Object.entries(
    //           priceLevelList
    //         )) {
    //           if (
    //             parseFloat(priceLevel["startValue"]) === 0.0 &&
    //             parseFloat(priceLevel["endValue"]) === 0.0
    //           ) {
    //             console.log("pricelevel in for loop 1");
    //             rateValue = priceLevel["rateValue"];
    //           } else if (
    //             parseFloat(priceLevel["startValue"]) === 0.0 &&
    //             parseFloat(priceLevel["endValue"]) !== 0.0 &&
    //             parseFloat(this.AddNewItemList[index].itemquantity) <=
    //               parseFloat(priceLevel["endValue"])
    //           ) {
    //             console.log("pricelevel in for loop 2");
    //             rateValue = priceLevel["rateValue"];
    //           } else if (
    //             parseFloat(priceLevel["startValue"]) !== 0.0 &&
    //             parseFloat(priceLevel["endValue"]) !== 0.0 &&
    //             parseFloat(this.AddNewItemList[index].itemquantity) >=
    //               parseFloat(priceLevel["startValue"]) &&
    //             parseFloat(this.AddNewItemList[index].itemquantity) <=
    //               parseFloat(priceLevel["endValue"])
    //           ) {
    //             console.log("pricelevel in for loop 3");
    //             rateValue = priceLevel["rateValue"];
    //           } else if (
    //             parseFloat(priceLevel["endValue"]) === 0.0 &&
    //             parseFloat(priceLevel["startValue"]) !== 0.0 &&
    //             parseFloat(this.AddNewItemList[index].itemquantity) >=
    //               parseFloat(priceLevel["startValue"])
    //           ) {
    //             console.log("pricelevel in for loop 4");
    //             rateValue = priceLevel["rateValue"];
    //           }
    //         }
    //         console.log("this is the end of function");

    //         return rateValue;
    //       }
    //     } else {
    //       // getStandardRate
    //       return this.getStandardRate(selection, index);
    //     }
    //   } else {
    //     // getStandardRate
    //     return this.getStandardRate(selection, index);
    //   }
    // },
    //  this function is getting the country data for advanced feature.
    async countryDetails() {
      try {
        this.loading = true;
        this.new_loading = true;

        const data = {
          _userId: localStorage.getItem("customerId"),
          requestFrom: "WEB",
          countryName: this.countrysearch,
        };

        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };

        const response = await Api.getCountryGo(data, headers);

        this.CountryData = [];
        for (let [key, value] of Object.entries(response.data.data)) {
          if (value.countryName !== undefined && value.countryName !== "") {
            this.CountryData.push({
              name: value.countryName,
              id: value.countryName,
            });
            this.buyercountryFilteredOptions = this.CountryData;
            this.consigneecountryFilteredOptions = this.CountryData;
          }
        }
      } catch (err) {
        Common.getStatusForActionFailed(err.response.status);
      }
    },
    //  this function is to calculate the taxes
    tax_calculation(index) {
      this.total_amount = 0;
      this.total_tax = 0;
      this.AddNewItemList.forEach((number) => {
        if (number.itemamount != "") {
          this.total_amount += parseFloat(number.itemamount);
        }
      });
      this.AddNewTaxesListDropdown.forEach((number) => {
        if (number.amount != "") {
          this.total_tax += parseFloat(number.amount);
        }
      });
      this.ledger_amount = 0;
      this.ledger_array.forEach((number1) => {
        let ledgerAmount =
          number1.amount === "" || number1.amount === undefined
            ? 0
            : number1.amount;

        if (number1.type == "DR") {
          this.ledger_amount -= parseFloat(ledgerAmount);
        } else {
          this.ledger_amount += parseFloat(ledgerAmount);
        }
      });

      this.grandTotal = this.total_amount + this.total_tax + this.ledger_amount;
    },
    other_gst_calculation() {
      this.item_object = [];
      this.AddNewItemList.forEach((value, key) => {
        if (this.AddNewItemList[key].isChecked == true) {
          const itemRate =
            value.itemrate * (1 + this.AddNewItemList[key].gst_per / 100);
          var inner_object = {
            itemId: value.item_guid,
            itemSyncId: value.item_guid == "" ? value.item_id : "",
            itemQty: value.itemquantity ? parseFloat(value.itemquantity).toFixed(this.totalDecimalValue).toString()  : "",
            itemRate: isNaN(itemRate) ? "0" : parseFloat(itemRate).toFixed(this.totalDecimalValueForRate).toString(),
            discountPercent: value.itemdiscount,
            isTaxInclusive: this.AddNewItemList[key].isChecked,
            gstPercent: "",
            serialNo: key + 1,
          };
        } else {
          var inner_object = {
            itemId: value.item_guid,
            itemSyncId: value.item_guid == "" ? value.item_id : "",
            itemQty: value.itemquantity ? parseFloat(value.itemquantity).toFixed(this.totalDecimalValue).toString()  : "",
            itemRate: isNaN(value.itemrate) ? "0" : parseFloat(value.itemrate).toFixed(this.totalDecimalValueForRate).toString(),
            discountPercent: value.itemdiscount,
            isTaxInclusive: this.AddNewItemList[key].isChecked,
            gstPercent: "",
            serialNo: key + 1,
          };
        }
        this.item_object.splice(key, 1, inner_object);
      });
      this.otherLedgerDetails = [];
      this.ledger_array.forEach((value, key) => {
        const type = value.type != "DR";
        var ledger_object = {
          ledgerGuid: value.ledger_ledgerGuid,
          amount: value.amount,
          credit: type,
        };
        this.otherLedgerDetails.splice(key, 1, ledger_object);
      });
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        companyGstNumber: localStorage.getItem("companyGstNumber"),
        partyGuid: this.partyGuid,
        partyGstNumber: this.partyGSTIn,
        ledgerGuid: this.ledgerId,
        voucherParentType: "Purchase Order",
        partyLedgerSyncId: this.partyGuid == "" ? this.partyid : "",
        voucherDate: moment(String(this.newinvoiceDate)).format("YYYY-MM-DD"),
        itemDetails: this.filterItemDetails(this.item_object),
        otherLedgerDetails: this.otherLedgerDetails,
        requestFrom: "WEB",
        placeOfSupply: this.buyerplaceofsupplySearchQuery,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      // if (Object.keys(this.filterItemDetails(this.item_object)).length !== 0) {
      Api.getGstDetails(data, headers).then((response) => {
        if (response.data.data.itemGstDetails.length != "0") {
          if (response.data.status != "0") {
            if (response.data.data.isGstApplicable == false) {
            } else {
              if (response.data.data.igstApplicable == false) {
                 let otherLedgerDetails = response.data.data.otherLedgerDetails
                 otherLedgerDetails.forEach((value, key)=>{
                 this.ledger_array[key].isGstApplicable = value.isGstApplicable
                 this.ledger_array[key].hsnCode = value.hsnCode
                 this.ledger_array[key].gstPercent = value.gstPercent
                 this.ledger_array[key].gstAmount = value.gstAmount
                 this.ledger_array[key].appropraiteFor = value.appropraiteFor
                 this.ledger_array[key].exciseAllocType = value.exciseAllocType
                 this.ledger_array[key].gstAppropraiteTo = value.gstAppropraiteTo
                })
                this.final_ledgerEntries.forEach((value, key) => {
                  if (
                    value.ledgerName ==
                    this.AddNewTaxesListDropdown[0].addtaxesSearchQuery
                  ) {
                    this.final_ledgerEntries[key].amount = -parseFloat(
                      (
                        response.data.data.voucherGstDetails.gstAmount / 2
                      ).toFixed(this.totalDecimalValueForRate)
                    );
                  }
                  if (
                    value.ledgerName ==
                    this.AddNewTaxesListDropdown[1].addtaxesSearchQuery
                  ) {
                    this.final_ledgerEntries[key].amount = -parseFloat(
                      (
                        response.data.data.voucherGstDetails.gstAmount / 2
                      ).toFixed(this.totalDecimalValueForRate)
                    );
                  }
                });
                this.AddNewTaxesListDropdown[0].amount = parseFloat(
                  response.data.data.voucherGstDetails.gstAmount / 2
                ).toFixed(this.totalDecimalValueForRate);
                this.AddNewTaxesListDropdown[1].amount = parseFloat(
                  response.data.data.voucherGstDetails.gstAmount / 2
                ).toFixed(this.totalDecimalValueForRate);
                this.total_tax +=
                  this.AddNewTaxesListDropdown[0].amount +
                  this.AddNewTaxesListDropdown[1].amount;
              } else {
                 let otherLedgerDetails = response.data.data.otherLedgerDetails
                 otherLedgerDetails.forEach((value, key)=>{
                 this.ledger_array[key].isGstApplicable = value.isGstApplicable
                 this.ledger_array[key].hsnCode = value.hsnCode
                 this.ledger_array[key].gstPercent = value.gstPercent
                 this.ledger_array[key].gstAmount = value.gstAmount
                 this.ledger_array[key].appropraiteFor = value.appropraiteFor
                 this.ledger_array[key].exciseAllocType = value.exciseAllocType
                 this.ledger_array[key].gstAppropraiteTo = value.gstAppropraiteTo
                })
                this.final_ledgerEntries.forEach((value, key) => {
                  if (
                    value.ledgerName ==
                    this.AddNewTaxesListDropdown[0].addtaxesSearchQuery
                  ) {
                    this.final_ledgerEntries[key].amount = -this.roundToTwoDecimalPlaces(
                      response.data.data.voucherGstDetails.gstAmount
                    );
                  }
                });
                this.AddNewTaxesListDropdown[0].amount = parseFloat(
                  response.data.data.voucherGstDetails.gstAmount
                ).toFixed(this.totalDecimalValueForRate);
                this.total_tax += parseFloat(
                  response.data.data.voucherGstDetails.gstAmount
                );
              }
            }
            this.tax_calculation();
          }
        }
      });
      // }
    },
    //  this function is for getting the taxes names in dropdown
    gettaxlist() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        sortBy: "ledgerName",
        startLimit: 0,
        endLimit: 25,
        requestFrom: "WEB",
        searchTerm: this.TaxSearch,
        parent: ["Duties & Taxes"],
        orderBy: 1,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgersByLedgerGroupParentGo(data, headers)
        .then((response) => {
          if (response.data.status != "0") {
            this.addtaxes3Options = [];
            for (let [key, value] of Object.entries(response.data.data.list)) {
              this.addtaxes3Options.push({
                ledgerName: value.ledgerName,
                ledgergroup: value.parentgroup,
                ledgergroupparent: value.parent,
                guid: value.guid,
                masterReservedName: value.masterReservedName,
              });
            }
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
  AmountChangeFunction(index){
     const item = this.AddNewItemList[index];
     const quantity = parseFloat(item.itemquantity) || 0;
     const discount = parseFloat(item.itemdiscount) || 0;
     const amount = parseFloat(item.itemamount) || 0;
     let rate = parseFloat(item.itemrate) || 0;
     
     if (discount > 100) {
       item.itemdiscount = 100;
      }
      
       if (
        document.activeElement === this.$refs.amountInput[index] &&
        quantity > 0
      ) {
        const amountBeforeDiscount = discount ? (amount * 100) / (100 - discount) : amount;
        item.itemrate = parseFloat((amountBeforeDiscount / quantity).toFixed(this.totalDecimalValueForRate));
        rate = item.itemrate;
      }
        this.gst_calculation(index);
      this.tax_calculation();
      this.gettaxlist();
      if (this.AddNewTaxesListDropdown.length !== 0) {
        this.other_gst_calculation();
      }
    },
    //  this function is updating the amount according to quantity and rate.
    updateAmount(index) {
      if (this.AddNewItemList[index].itemdiscount > 100) {
        this.AddNewItemList[index].itemdiscount = 100;
      }
      const item = this.AddNewItemList[index];
      const quantity = item.itemquantity || 0;

      const discount = item.itemdiscount || 0;
      const rate = item.itemrate || 0;

      const itemAmount = (quantity * rate).toFixed(this.totalDecimalValueForRate);
      if (item.itemdiscount) {
        item.itemamount = this.roundToTwoDecimalPlaces(
          (itemAmount * (100 - discount)) / 100
        );
      } else {
        item.itemamount = this.roundToTwoDecimalPlaces(itemAmount);
      }
      if (item.itemquantity == "" || item.itemrate == "") {
        if (this.AddOtherLedgersListDropdown.length == 0) {
          this.AddNewTaxesListDropdown = [];
        }
        else {
          this.other_gst_calculation();
        }
      }
      this.gst_calculation(index);
      this.tax_calculation();
      this.gettaxlist();
      if (this.AddNewTaxesListDropdown.length !== 0) {
        this.other_gst_calculation()
      }
    },

      limitDecimalPlaces(type,index) {
    const item = this.AddNewItemList[index];
    const tax = this.AddNewTaxesListDropdown[index];
    const otherLedger = this.AddOtherLedgersListDropdown[index]
    if(type == 'Qty'){

      const value = item.itemquantity.toString();
  
      if (value && value.includes('.')) {
        const [intPart, decimalPart] = value.split('.');
        if (decimalPart.length > this.totalDecimalValue) {
          item.itemquantity = parseFloat(`${intPart}.${decimalPart.slice(0, this.totalDecimalValue)}`);
        }
      }
    }
    if(type == 'rate'){
      const value = item.itemrate.toString();
       if (value && value.includes('.')) {
        const [intPart, decimalPart] = value.split('.');
        if (decimalPart.length > this.totalDecimalValueForRate) {
          item.itemrate = parseFloat(`${intPart}.${decimalPart.slice(0, this.totalDecimalValueForRate)}`);
        }
      }
    }
     if(type == 'taxes'){
      const value = tax.amount.toString();
       if (value && value.includes('.')) {
        const [intPart, decimalPart] = value.split('.');
        if (decimalPart.length > this.totalDecimalValueForRate) {
          tax.amount = parseFloat(`${intPart}.${decimalPart.slice(0, this.totalDecimalValueForRate)}`);
        }
      }
    }
    if(type == 'otherLedger'){
      const value = otherLedger.amount.toString()
       if (value && value.includes('.')) {
        const [intPart, decimalPart] = value.split('.');
        if (decimalPart.length > this.totalDecimalValueForRate) {
          otherLedger.amount = parseFloat(`${intPart}.${decimalPart.slice(0, this.totalDecimalValueForRate)}`);
        }
      }
    }
  },
    // this function is updating the itemrate in AddNewItemList.

    // new_rate(selection, index) {
    //   if (this.pricelevelSearchQuery) {
    //     console.log("hii new rate", this.AddNewItemList[index].selectedOption);

    //     if (this.AddNewItemList[index].selectedOption) {
    //       console.log("hii new rate");
    //       this.AddNewItemList[index].itemrate = parseFloat(
    //         this.getPriceAccordingPriceLevel(
    //           this.AddNewItemList[index].selectedOption,
    //           index
    //         )
    //       ).toFixed(2);
    //       console.log(
    //         this.AddNewItemList[index].itemrate,
    //         " this.AddNewItemList[index].itemrates"
    //       );
    //     }
    //   }
    // },
    // this function is to calculate the gst amount and to send the items whole data into object
    async gst_calculation(index) {
      this.item_object = [];
      this.AddNewItemList.forEach((value, key) => {
        if (this.AddNewItemList[key].isChecked == true) {
          const itemRate =
            value.itemrate * (1 + this.AddNewItemList[key].gst_per / 100);
          var inner_object = {
            itemId: value.item_guid,
            itemSyncId: value.item_guid == "" ? value.item_id : "",
            itemQty: value.itemquantity ? parseFloat(value.itemquantity).toFixed(this.totalDecimalValue).toString() : "",
            itemRate: isNaN(itemRate) ? "0" : parseFloat(itemRate).toFixed(this.totalDecimalValueForRate).toString(),
            discountPercent: value.itemdiscount,
            isTaxInclusive: this.AddNewItemList[key].isChecked,
            gstPercent: "",
            serialNo: key + 1,
          };
        } else {
          console.log(value.item_id, "hi gst calculation upper ");

          var inner_object = {
            itemId: value.item_guid,
            itemSyncId: value.item_guid == "" ? value.item_id : "",
            itemQty: value.itemquantity ? parseFloat(value.itemquantity).toFixed(this.totalDecimalValue).toString() : "",
            itemRate: isNaN(value.itemrate) ? "0" : this.roundToTwoDecimalPlaces(value.itemrate).toString(),
            discountPercent: value.itemdiscount,
            isTaxInclusive: this.AddNewItemList[key].isChecked,
            gstPercent: "",
            serialNo: key + 1,
          };
        }
        this.item_object.splice(key, 1, inner_object);
      });
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        companyGstNumber: localStorage.getItem("companyGstNumber"),
        partyGuid: this.partyGuid,
        voucherParentType: "Purchase Order",
        partyLedgerSyncId: this.partyGuid == "" ? this.partyid : "",
        partyGstNumber: this.partyGSTIn,
        ledgerGuid: this.ledgerId,
        priceLevel: this.pricelevelSearchQuery,
        voucherDate: moment(String(this.newinvoiceDate)).format("YYYY-MM-DD"),
        itemDetails: this.filterItemDetails(this.item_object),
        otherLedgerDetails: [],
        placeOfSupply: this.buyerplaceofsupplySearchQuery,
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      if (this.item_object.length !== 0) {
        Api.getGstDetails(data, headers)
          .then((response) => {
            if (index !== undefined && index !== null) {
              this.AddNewItemList[index].gst_per = response.data.data.voucherGstDetails.gstPercent;
            }
            if (response.data.data.itemGstDetails.length != "0") {
              if (response.data.status != "0") {
                this.AddNewTaxesListDropdown = [];
                this.total_tax = 0;
                this.add_igstApplicable = response.data.data.igstApplicable;
                this.update_igstApplicable = response.data.data.igstApplicable;

                if (response.data.data.isGstApplicable == false) {
                } else {
                  if (response.data.data.igstApplicable == false) {
                    var gst_amount = parseFloat(
                      (
                        response.data.data.voucherGstDetails.gstAmount / 2
                      ).toFixed(this.totalDecimalValueForRate)
                    );
                    this.AddNewTaxesListDropdown.push({
                      addtaxesSearchQuery: "",
                      tax_name: "CGST",
                      placeholder:'Select CGST Ledger',
                      amount: parseFloat(
                        response.data.data.voucherGstDetails.gstAmount / 2
                      ).toFixed(this.totalDecimalValueForRate),
                    });
                    this.AddNewTaxesListDropdown.push({
                      addtaxesSearchQuery: "",
                      tax_name: "SGST",
                      placeholder:'Select SGST Ledger',
                      amount: parseFloat(
                        response.data.data.voucherGstDetails.gstAmount / 2
                      ).toFixed(this.totalDecimalValueForRate),
                    });
                    this.total_tax += gst_amount + gst_amount;
                  } else {
                    this.AddNewTaxesListDropdown.push({
                      addtaxesSearchQuery: "",
                      tax_name: "IGST",
                      placeholder:'Select IGST Ledger',
                      amount: parseFloat(
                        response.data.data.voucherGstDetails.gstAmount
                      ).toFixed(this.totalDecimalValueForRate),
                    });
                    this.total_tax += parseFloat(
                      response.data.data.voucherGstDetails.gstAmount
                    );
                  }
                }

                this.tax_calculation();

                //  isko hidden inout field k v-model m use karunga
                //     this.api_items = response.data.data.itemGstDetails;
                this.tempItmesObject = [];
                if (response.data.data.itemGstDetails.length != 0) {
                  response.data.data.itemGstDetails.forEach((value, key) => {
                      let itemData = this.AddNewItemList[key];
                   function safeGet(field, fallback = "") {
                      return itemData[field] !== undefined && itemData[field] !== null && itemData[field] !== ""
                        ? itemData[field]
                        : fallback;
                    }
                    let retries = 0;
                    let stockItemGuidRecheck = safeGet("item_guid");
                    let stockitemNameRecheck = safeGet("tableitemsSearchQuery")
                    while ((!stockItemGuidRecheck || !stockitemNameRecheck) && retries < 10) {
                      itemData = this.AddNewItemList[key];
                      stockItemGuidRecheck = safeGet("item_guid");
                      stockitemNameRecheck = safeGet("tableitemsSearchQuery")
                      retries++;
                    }
                    if (response.data.data.igstApplicable == true) {
                      this.tempItmesObject.push({
                        stockItemGuid: stockItemGuidRecheck,
                        godownName:
                          this.AddNewItemList[key].selectedgodownsOption,
                          godownGuid:this.AddNewItemList[key].godownGuid,
                        baseUnits: this.AddNewItemList[key].baseUnits ? this.AddNewItemList[key].baseUnits : '',
                         rate:
                          this.AddNewItemList[key].baseUnits
                              ? this.AddNewItemList[key].itemrate + "/" + this.AddNewItemList[key].baseUnits
                              : this.AddNewItemList[key].itemrate,
                        inclusiveVatRate: this.AddNewItemList[key].isChecked ? parseFloat(this.AddNewItemList[key].old_amount).toFixed(2) + "/" + this.AddNewItemList[key].baseUnits : "",
                        isTaxInclusive: this.AddNewItemList[key].isChecked,
                        actualQty: this.AddNewItemList[key].baseUnits ? 
                          this.AddNewItemList[key].itemquantity +
                          " " +
                          this.AddNewItemList[key].baseUnits : this.AddNewItemList[key].itemquantity,
                        stockGroup: this.AddNewItemList[key].parent,
                        discount: this.AddNewItemList[key].itemdiscount,
                        qty: parseFloat(this.AddNewItemList[key].itemquantity),
                        ledgerGuid: this.ledgerId,
                        stockItemSyncId:
                          this.AddNewItemList[key].item_guid == ""
                            ? this.AddNewItemList[key].item_id
                            : "",
                        orderNumber: "",
                        ledgerName: this.ledgertypeSearchQuery,
                        descriptions:
                          this.AddNewItemList[key].itemdescription || "",
                        stockCategory: this.AddNewItemList[key].category,
                        vatTaxRate: this.AddNewItemList[key].rateOfVAT,
                        billedQty: this.AddNewItemList[key].baseUnits ? 
                          this.AddNewItemList[key].itemquantity +
                          " " +
                          this.AddNewItemList[key].baseUnits : this.AddNewItemList[key].itemquantity,
                        stockItemName:
                          this.AddNewItemList[key].tableitemsSearchQuery,
                        amount: -parseFloat(
                          this.AddNewItemList[key].itemamount
                        ),
                        ledgerEntry: [],
                        // hsnCode: this.AddNewItemList[key].hsn_code,
                        isIncGSTChecked: false,
                        realAmount: "",
                        taxes: [
                          {
                            ratePer: parseFloat(value.gstPercent),
                            name: "IGST",
                            ledgerName: "",
                            isStockItemMoreLedger: "0",
                            ledgerGuid: "",
                            amount: parseFloat(value.gstAmount),
                          },
                          {
                            ratePer: value.gstPercent / 2,
                            name: "CGST",
                            ledgerName: "",
                            isStockItemMoreLedger: "0",
                            ledgerGuid: "",
                            amount: parseFloat(value.gstAmount) / 2,
                          },
                          {
                            ratePer: value.gstPercent / 2,
                            name: "SGST",
                            ledgerName: "",
                            isStockItemMoreLedger: "0",
                            ledgerGuid: "",
                            amount: parseFloat(value.gstAmount) / 2,
                          },
                        ],
                      });
                    } else {
                      this.tempItmesObject.push({
                        stockItemGuid: stockItemGuidRecheck,
                        godownName:
                          this.AddNewItemList[key].selectedgodownsOption,
                          godownGuid:this.AddNewItemList[key].godownGuid,
                         rate:
                          this.AddNewItemList[key].baseUnits
                              ? this.AddNewItemList[key].itemrate + "/" + this.AddNewItemList[key].baseUnits
                              : this.AddNewItemList[key].itemrate,
                        baseUnits: this.AddNewItemList[key].baseUnits ? this.AddNewItemList[key].baseUnits : '',
                        inclusiveVatRate: this.AddNewItemList[key].isChecked ? parseFloat(this.AddNewItemList[key].old_amount).toFixed(2) + "/" + this.AddNewItemList[key].baseUnits : "",
                        isTaxInclusive: this.AddNewItemList[key].isChecked,
                        actualQty: this.AddNewItemList[key].baseUnits ? 
                          this.AddNewItemList[key].itemquantity +
                          " " +
                          this.AddNewItemList[key].baseUnits : this.AddNewItemList[key].itemquantity,
                        stockGroup: this.AddNewItemList[key].parent,
                        discount: this.AddNewItemList[key].itemdiscount,
                        qty: parseFloat(this.AddNewItemList[key].itemquantity),
                        ledgerGuid: this.ledgerId,
                        stockItemSyncId:
                          this.AddNewItemList[key].item_guid == ""
                            ? this.AddNewItemList[key].item_id
                            : "",
                        orderNumber: "",
                        ledgerName: this.ledgertypeSearchQuery,
                        descriptions: this.AddNewItemList[key].itemdescription,
                        stockCategory: this.AddNewItemList[key].category,
                        vatTaxRate: this.AddNewItemList[key].rateOfVAT,
                        billedQty: this.AddNewItemList[key].baseUnits ? 
                          this.AddNewItemList[key].itemquantity +
                          " " +
                          this.AddNewItemList[key].baseUnits : this.AddNewItemList[key].itemquantity,
                        stockItemName:
                          this.AddNewItemList[key].tableitemsSearchQuery,
                        amount: -parseFloat(
                          this.AddNewItemList[key].itemamount
                        ),
                        ledgerEntry: [],
                        // hsnCode: this.AddNewItemList[key].hsn_code,
                        isIncGSTChecked: false,
                        realAmount: "",
                        taxes: [
                          {
                            ratePer: parseFloat(value.gstPercent) / 2,
                            name: "CGST",
                            ledgerName: "",
                            isStockItemMoreLedger: "0",
                            ledgerGuid: "",
                            amount: parseFloat(value.gstAmount) / 2,
                          },
                          {
                            ratePer: parseFloat(value.gstPercent) / 2,
                            name: "SGST",
                            ledgerName: "",
                            isStockItemMoreLedger: "0",
                            ledgerGuid: "",
                            amount: parseFloat(value.gstAmount) / 2,
                          },
                          {
                            ratePer: parseFloat(value.gstPercent),
                            name: "IGST",
                            ledgerName: "",
                            isStockItemMoreLedger: "0",
                            ledgerGuid: "",
                            amount: parseFloat(value.gstAmount),
                          },
                        ],
                      });
                    }
                  });
                  this.tax_calculation();
                } else {
                  this.tempItmesObject = [];
                  this.AddNewItemList.forEach((value, key) => {
                    this.tempItmesObject.push({
                      stockItemGuid: stockItemGuidRecheck,
                      godownName:
                        this.AddNewItemList[key].selectedgodownsOption,
                        godownGuid:this.AddNewItemList[key].godownGuid,
                       rate:
                          this.AddNewItemList[key].baseUnits
                              ? this.AddNewItemList[key].itemrate + "/" + this.AddNewItemList[key].baseUnits
                              : this.AddNewItemList[key].itemrate,
                      baseUnits: this.AddNewItemList[key].baseUnits ? this.AddNewItemList[key].baseUnits : '',
                      inclusiveVatRate: this.AddNewItemList[key].isChecked ? parseFloat(this.AddNewItemList[key].old_amount).toFixed(2) + "/" + this.AddNewItemList[key].baseUnits : "",
                      isTaxInclusive: this.AddNewItemList[key].isChecked,
                       actualQty: this.AddNewItemList[key].baseUnits ? 
                          this.AddNewItemList[key].itemquantity +
                          " " +
                          this.AddNewItemList[key].baseUnits : this.AddNewItemList[key].itemquantity,
                      stockGroup: this.AddNewItemList[key].parent,
                      discount: this.AddNewItemList[key].itemdiscount,
                      qty: parseFloat(this.AddNewItemList[key].itemquantity),
                      ledgerGuid: this.ledgerId,
                      stockItemSyncId:
                        this.AddNewItemList[key].item_guid == ""
                          ? this.AddNewItemList[key].item_id
                          : "",
                      orderNumber: "",
                      ledgerName: this.ledgertypeSearchQuery,
                      descriptions: this.AddNewItemList[key].itemdescription,
                      stockCategory: this.AddNewItemList[key].category,
                      vatTaxRate: this.AddNewItemList[key].rateOfVAT,
                      billedQty: this.AddNewItemList[key].baseUnits ? 
                          this.AddNewItemList[key].itemquantity +
                          " " +
                          this.AddNewItemList[key].baseUnits : this.AddNewItemList[key].itemquantity,
                      stockItemName:
                        this.AddNewItemList[key].tableitemsSearchQuery,
                      amount: -parseFloat(this.AddNewItemList[key].itemamount),
                      ledgerEntry: [],
                      //   hsnCode: this.AddNewItemList[key].hsn_code,
                      isIncGSTChecked: false,
                      realAmount: "",
                      taxes: [],
                    });
                  });
                }
              } else {
                this.tempItmesObject = [];
                this.AddNewItemList.forEach((value, key) => {
                  this.tempItmesObject.push({
                    stockItemGuid: stockItemGuidRecheck,
                    godownName: this.AddNewItemList[key].selectedgodownsOption,
                    godownGuid:this.AddNewItemList[key].godownGuid,
                      rate:
                          this.AddNewItemList[key].baseUnits
                              ? this.AddNewItemList[key].itemrate + "/" + this.AddNewItemList[key].baseUnits
                              : this.AddNewItemList[key].itemrate,
                   baseUnits: this.AddNewItemList[key].baseUnits ? this.AddNewItemList[key].baseUnits : '',
                    inclusiveVatRate: this.AddNewItemList[key].isChecked ? parseFloat(this.AddNewItemList[key].old_amount).toFixed(2) + "/" + this.AddNewItemList[key].baseUnits : "",
                    isTaxInclusive: this.AddNewItemList[key].isChecked,
                    actualQty: this.AddNewItemList[key].baseUnits ? 
                          this.AddNewItemList[key].itemquantity +
                          " " +
                          this.AddNewItemList[key].baseUnits : this.AddNewItemList[key].itemquantity,
                    stockGroup: this.AddNewItemList[key].parent,
                    discount: this.AddNewItemList[key].itemdiscount,
                    qty: parseFloat(this.AddNewItemList[key].itemquantity),
                    ledgerGuid: this.ledgerId,
                    stockItemSyncId:
                      this.AddNewItemList[key].item_guid == ""
                        ? this.AddNewItemList[key].item_id
                        : "",
                    orderNumber: "",
                    ledgerName: this.ledgertypeSearchQuery,
                    descriptions: this.AddNewItemList[key].itemdescription,
                    stockCategory: this.AddNewItemList[key].category,
                    vatTaxRate: this.AddNewItemList[key].rateOfVAT,
                    billedQty: this.AddNewItemList[key].baseUnits ? 
                          this.AddNewItemList[key].itemquantity +
                          " " +
                          this.AddNewItemList[key].baseUnits : this.AddNewItemList[key].itemquantity,
                    stockItemName:
                      this.AddNewItemList[key].tableitemsSearchQuery,
                    amount: -parseFloat(this.AddNewItemList[key].itemamount),
                    ledgerEntry: [],
                    // hsnCode: this.AddNewItemList[key].hsn_code,
                    isIncGSTChecked: false,
                    realAmount: "",
                    taxes: [],
                  });
                });
              }
            } else {
              this.tempItmesObject = [];
              this.AddNewItemList.forEach((value, key) => {
                this.tempItmesObject.push({
                  stockItemGuid: stockItemGuidRecheck,
                  godownName: this.AddNewItemList[key].selectedgodownsOption,
                  godownGuid:this.AddNewItemList[key].godownGuid,
                  rate: this.AddNewItemList[key].baseUnits
                              ? this.AddNewItemList[key].itemrate + "/" + this.AddNewItemList[key].baseUnits
                              : this.AddNewItemList[key].itemrate,
                  baseUnits: this.AddNewItemList[key].baseUnits ? this.AddNewItemList[key].baseUnits : '',
                  inclusiveVatRate: this.AddNewItemList[key].isChecked ? parseFloat(this.AddNewItemList[key].old_amount).toFixed(2) + "/" + this.AddNewItemList[key].baseUnits : "",
                  isTaxInclusive: this.AddNewItemList[key].isChecked,
                  actualQty: this.AddNewItemList[key].baseUnits ? 
                          this.AddNewItemList[key].itemquantity +
                          " " +
                          this.AddNewItemList[key].baseUnits : this.AddNewItemList[key].itemquantity,
                  stockGroup: this.AddNewItemList[key].parent,
                  discount: this.AddNewItemList[key].itemdiscount,
                  qty: parseFloat(this.AddNewItemList[key].itemquantity),
                  ledgerGuid: this.ledgerId,
                  stockItemSyncId:
                    this.AddNewItemList[key].item_guid == ""
                      ? this.AddNewItemList[key].item_id
                      : "",
                  orderNumber: "",
                  ledgerName: this.ledgertypeSearchQuery,
                  descriptions: this.AddNewItemList[key].itemdescription,
                  stockCategory: this.AddNewItemList[key].category,
                  vatTaxRate: this.AddNewItemList[key].rateOfVAT,
                  billedQty: this.AddNewItemList[key].baseUnits ? 
                          this.AddNewItemList[key].itemquantity +
                          " " +
                          this.AddNewItemList[key].baseUnits : this.AddNewItemList[key].itemquantity,
                  stockItemName: this.AddNewItemList[key].tableitemsSearchQuery,
                  amount: -parseFloat(this.AddNewItemList[key].itemamount),
                  ledgerEntry: [],
                  //   hsnCode: this.AddNewItemList[key].hsn_code,
                  isIncGSTChecked: false,
                  realAmount: "",
                  taxes: [],
                });
              });
            }
          })

          .catch((error) => {
            this.tempItmesObject = [];
            this.AddNewItemList.forEach((value, key) => {
              let itemData = this.AddNewItemList[key];
              function safeGet(field, fallback = "") {
                return itemData[field] !== undefined && itemData[field] !== null && itemData[field] !== ""
                ? itemData[field]
                : fallback;
              }
              let retries = 0;
              let stockItemGuidRecheck = safeGet("item_guid");
              let stockitemNameRecheck = safeGet("tableitemsSearchQuery")
              while ((!stockItemGuidRecheck || !stockitemNameRecheck) && retries < 10) {
                itemData = this.AddNewItemList[key];
                stockItemGuidRecheck = safeGet("item_guid");
                stockitemNameRecheck = safeGet("tableitemsSearchQuery")
                retries++;
              }
              this.tempItmesObject.push({
                stockItemGuid: stockItemGuidRecheck,
                godownName: this.AddNewItemList[key].selectedgodownsOption,
                godownGuid:this.AddNewItemList[key].godownGuid,
                 rate: this.AddNewItemList[key].baseUnits
                              ? this.AddNewItemList[key].itemrate + "/" + this.AddNewItemList[key].baseUnits
                              : this.AddNewItemList[key].itemrate,
                inclusiveVatRate: this.AddNewItemList[key].isChecked
                  ? parseFloat(this.AddNewItemList[key].old_amount).toFixed(this.totalDecimalValueForRate) +
                  "/" +
                  this.AddNewItemList[key].baseUnits
                  : "",
                isTaxInclusive: this.AddNewItemList[key].isChecked,
                baseUnits: this.AddNewItemList[key].baseUnits ? this.AddNewItemList[key].baseUnits : '',
                actualQty: this.AddNewItemList[key].baseUnits ? 
                          this.AddNewItemList[key].itemquantity +
                          " " +
                          this.AddNewItemList[key].baseUnits : this.AddNewItemList[key].itemquantity,
                stockGroup: this.AddNewItemList[key].parent,
                discount: this.AddNewItemList[key].itemdiscount,
                qty: parseFloat(this.AddNewItemList[key].itemquantity),
                ledgerGuid: this.ledgerId,
                stockItemSyncId:
                  this.AddNewItemList[key].item_guid == ""
                    ? this.AddNewItemList[key].item_id
                    : "",
                orderNumber: "",
                ledgerName: this.ledgertypeSearchQuery,
                descriptions: this.AddNewItemList[key].itemdescription,
                stockCategory: this.AddNewItemList[key].category,
                vatTaxRate: this.AddNewItemList[key].rateOfVAT,
                billedQty: this.AddNewItemList[key].baseUnits ? 
                          this.AddNewItemList[key].itemquantity +
                          " " +
                          this.AddNewItemList[key].baseUnits : this.AddNewItemList[key].itemquantity,
                stockItemName: this.AddNewItemList[key].tableitemsSearchQuery,
                amount: -parseFloat(this.AddNewItemList[key].itemamount),
                ledgerEntry: [],
                hsnCode: this.AddNewItemList[key].hsn_code,
                isIncGSTChecked: false,
                realAmount: "",
                taxes: [],
              });
            });
          });
      } else {
        this.AddNewTaxesListDropdown = [];
      }
    },
    // this function is to push the tax amount which user will add manualy in ledgerentries
    tax_value_amount(event, taxindex) {
      console.log(taxindex, "taxindex");
      this.AddNewTaxesListDropdown[taxindex].amount = event.target.value;
      if (this.final_ledgerEntries[taxindex]) {
        this.final_ledgerEntries[taxindex].amount = parseFloat(
          event.target.value
        );
      }
      this.tax_calculation(taxindex);
    },
    setItemsData(selection, key, label, preValue) {
      if (label == "update") {
        this.taxInclusive_calculation(selection, key, "update");
        this.AddNewItemList[key].tableitemsSearchQuery = preValue.stockItemName;
        this.AddNewItemList[key].item_guid = selection.guid;
        this.AddNewItemList[key].hsn_code = selection.hsnCode;
        this.AddNewItemList[key].baseUnits = selection.baseUnits;
        this.AddNewItemList[key].parent = selection.parent;
        this.AddNewItemList[key].parentGuid = selection.parentGuid;
        this.AddNewItemList[key].category = selection.category;
        this.AddNewItemList[key].categoryGuid = selection.categoryGuid;
        this.AddNewItemList[key].rateOfVAT = selection.rateOfVAT;
       const baseUnitsForQty = selection.baseUnits
        const matchedData =  this.unitsForQty.find((unit)=>{
        return baseUnitsForQty == unit.unitName
      })
      this.totalDecimalValue = matchedData ? matchedData.decimalPlace : 0
        this.AddNewItemList[key].itemrate = parseFloat(
          preValue.rate.split("/")[0]
        ).toFixed(this.totalDecimalValueForRate);
        this.AddNewItemList[key].itemamount = preValue.amount;
        this.getStockItemList();
        setTimeout(() => {
          this.updateAmount(key);
        }, 1000);
      }
    },
    // function to create sales voucher
    add_Sales() {
      this.final_object = [];
      this.stockItemsError = {};
      this.error_tax = [];
      this.addLedger_error = [];
      this.advancedError = {};
      this.service_error = {};
      if (parseFloat(this.grandTotal) <= 0) {
        this.stockItemsError["grandTotal"] = "PLease make sure that grand total cant be 0";
      }
        if(this.partynameSearchQuery == ''  || this.partynameSearchQuery == undefined){
        this.stockItemsError['partynameSearchQuery'] = 'Party name is mandatory!'
      }
      this.AddNewItemList.forEach((value, key) => {
        if (
          !this.AddNewItemList[key].tableitemsSearchQuery &&
          this.AddOtherLedgersListDropdown.length == 0
        ) {
          this.service_error["otheritems"] =
            "Please Fill Either Item Or Other Ledgers";
          this.stockItemsError["otheritems"] =
            "Please Fill Either Item And Other Ledgers";
        }
        if (
          value.tableitemsSearchQuery &&
          value.tableitemsSearchQuery !== "Search Item"
        ) {
            if (value.itemquantity == "" || value.itemquantity == "0" || isNaN(Number(value.itemquantity))) {
            this.stockItemsError["itemquantity"] = "Please enter item quantity";
          }
          if (
            value.itemrate == "" ||
            value.itemrate == "0" ||
            isNaN(value.itemrate)
          ) {
            this.stockItemsError["itemrate"] = "Please enter item rate";
          }
          if (value.selectedgodownsOption == "") {
            this.stockItemsError["selectedgodownsOption"] =
              "Please select godown";
          }
        }
      });
      if(this.voucherSearchQuery == ''){
        this.stockItemsError["voucherSearchQuery"] =
              "Please Select Voucher Type";
      }
      this.AddNewTaxesListDropdown.forEach((value, key) => {
        if (!value.addtaxesSearchQuery) {
          if (!this.error_tax.addtaxesSearchQuery) {
            this.error_tax.addtaxesSearchQuery = {}; // Create an object to store individual errors for each select field
          }
          this.stockItemsError["addtaxesSearchQuery"] =
            "Tax amount is required";
          this.error_tax.addtaxesSearchQuery[key] = "Tax is required"; // Set the error message for the current select field
        }
        if (value.amount == "") {
          if (!this.error_tax.amount) {
            this.error_tax.amount = {}; // Create an object to store individual errors for each select field
          }
          this.stockItemsError["amount"] = "Tax amount is required";
          this.error_tax.amount[key] = "Tax amount is required";
        }
      });

      this.ledger_array.forEach((value, key) => {
        if (value.ledger_name == "" || value.ledger_name == undefined) {
          this.addLedger_error["selectLedger"] = "";
          this.addLedger_error["selectLedger"] =
            "Please select Search Other Ledger";
          this.stockItemsError["selectLedger"] =
            "Please select Search Other Ledger";
        }
        if (value.amount == "" || parseFloat(value.amount) <= 0) {
          this.addLedger_error["ledgerAmount"] = "";
          this.addLedger_error["ledgerAmount"] = "Please enter ledger amount";
          this.stockItemsError["ledgerAmount"] = "Please enter ledger amount";
        }
      });

      // if (
      //   (this.dispatch_doc_no == "" || this.dispatch_doc_no == "Select") &&(
      //   this.dispatch_shipping_date != "" || this.dispatch_delivery_note != '' || this.dispatch_bill_no != '' || this.dispatch_despatch_through != '' || this.dispatch_motor_vehicle_no != '' || this.dispatch_destination != '')
      // ) {
      //   this.advancedError["dispatch_doc_no"] = "Dispatch doc no. required";
      //   this.stockItemsError["dispatch_doc_no"] = "Dispatch doc no. required";
      //   this.errors["dispatch_doc_no"] = "Dispatch doc no. required";
      // }
      if (this.dispatch_shipping_date == "" && (this.dispatch_doc_no != "" || this.dispatch_delivery_note != '' || this.dispatch_bill_no != '' || this.dispatch_despatch_through != '' || this.dispatch_motor_vehicle_no != '' || this.dispatch_destination != '')) {
        this.advancedError["dispatch_shipping_date"] =
          "Please Select Shipping Date.";
        this.stockItemsError["dispatch_shipping_date"] =
          "Please Select Shipping Date.";
        this.errors["dispatch_shipping_date"] = "Please Select Shipping Date.";
      }
       if (this.dispatch_delivery_note == "" &&  this.dispatch_shipping_date != '') {
        this.advancedError["dispatch_delivery_note"] =
          "Please Fill Dispatch Note.";
        this.stockItemsError["dispatch_delivery_note"] =
          "Please Fill Dispatch Note.";
        this.errors["dispatch_delivery_note"] = "Please Fill Dispatch Note.";
      }
      if (this.order_date == "" && this.order_no != "") {
        this.advancedError["order_date"] = "please select order date";
        this.stockItemsError["order_date"] = "please select order date";
        this.errors["order_date"] = "please select order date";
      }
      if (this.order_no == "" && this.order_date != "") {
        this.advancedError["order_no"] = "please select order No.";
        this.stockItemsError["order_no"] = "please select order No.";
        this.errors["order_no"] = "please select order No.";
      }
      if (this.consigneenameSearchQuery == '' || this.consigneenameSearchQuery == 'Consignee Name') {
        this.advancedError["consigneenameSearchQuery"] = "Consignee name is Mandatory";
        this.stockItemsError["consigneenameSearchQuery"] = "Consignee Name is Mandatory";
        this.errors["consigneenameSearchQuery"] = "Consignee Name is Mandatory";
      }
      if (this.buyersnameSearchQuery == '' || this.buyersnameSearchQuery == 'Consignee Name') {
        this.advancedError["buyersnameSearchQuery"] = "Buyer's name is Mandatory";
        this.stockItemsError["buyersnameSearchQuery"] = "Buyer's Name is Mandatory";
        this.errors["buyersnameSearchQuery"] = "Buyer's Name is Mandatory";
      }
      if (Object.keys(this.stockItemsError).length === 0) {
        let newLedgerEntry;
        if (this.referenceSearchQuery == "New Reference") {
          newLedgerEntry = {
            ledgerGroupParent: this.ledgerGroupParent,
            ledgerName: this.partynameSearchQuery,
            ledgerGuid: this.partyGuid,
            billAllocationdetails: [
              {
                amount: -this.roundToTwoDecimalPlaces(this.grandTotal),
                billCreditPeriod: "0",
                billDate: "",
                billId: "",
                billName: this.billNumberData,
                billType: "New Ref",
              },
            ],
            bankAllocationDetails: [],
            isMoreLedgerField: "0",
            ledgerGroup: this.ledgergroup,
            ledgerSyncId: this.partyGuid == "" ? this.partyid : "",
            amount: -this.roundToTwoDecimalPlaces(this.grandTotal),
            masterReservedName: this.partynameOptions[0].masterReservedName
          };
        }else if (this.referenceSearchQuery == "On Account") { 
          newLedgerEntry = {
            ledgerGroupParent: this.ledgerGroupParent,
            ledgerName: this.partynameSearchQuery,
            ledgerGuid: this.partyGuid ? this.partyGuid : '',
            billAllocationdetails: [
              {
                amount: -this.roundToTwoDecimalPlaces(this.grandTotal),
                billCreditPeriod: "0",
                billDate: "",
                billId: "",
                billName: this.billNumberData,
                billType: "On Account",
              },
            ],
            bankAllocationDetails: [],
            isMoreLedgerField: "0",
            ledgerGroup: this.ledgergroup,
            ledgerSyncId: this.partyGuid == "" ? this.partyid : "",
            amount: -this.roundToTwoDecimalPlaces(this.grandTotal),
            masterReservedName: this.partynameOptions[0].masterReservedName
          };
        } else {
          newLedgerEntry = {
            ledgerGroupParent: this.ledgerGroupParent,
            ledgerName: this.partynameSearchQuery,
            ledgerGuid: this.partyGuid,
            billAllocationdetails: [],
            bankAllocationDetails: [],
            isMoreLedgerField: "0",
            ledgerGroup: this.ledgergroup,
            ledgerSyncId: this.partyGuid == "" ? this.partyid : "",
            amount: this.roundToTwoDecimalPlaces(this.grandTotal),
            masterReservedName: this.partynameOptions[0].masterReservedName
          };
        }
        const index = this.final_ledgerEntries.findIndex(
          (entry) => entry.ledgerGuid === newLedgerEntry.ledgerGuid
        );

        if (index !== -1) {
          this.final_ledgerEntries[index] = newLedgerEntry;
        } else {
          this.final_ledgerEntries.push(newLedgerEntry);
        }
        this.add_more_ledger = [];

        const indexesToRemove = [];
        this.final_ledgerEntries.forEach((item, index) => {
          if (
            item.masterReservedName !== "Duties & Taxes" &&
            item.isMoreLedgerField == "1"
          ) {
            indexesToRemove.push(index);
          }
        });

        for (let i = indexesToRemove.length - 1; i >= 0; i--) {
          this.final_ledgerEntries.splice(indexesToRemove[i], 1);
        }

        this.ledger_array.forEach((number1, key) => {
          if (number1.type == "DR") {
            var amount = number1.amount;
          } else {
            var amount = "-" + number1.amount;
          }

          this.add_more_ledger.push({
            ledgerName: number1.ledger_name,
            masterReservedName: number1.masterReservedName,
            descriptions: "",
            ledgerGuid: number1.ledger_ledgerGuid,
            transactionType: "",
            isMoreLedgerField: "1",
            ledgerGroup: number1.ledger_ledgerGroup,
            ledgerGroupParent: number1.ledger_ledgerGroupParent,
            amount: this.roundToTwoDecimalPlaces(amount),
            billAllocationdetails: [],
            bankAllocationDetails: [],
            isGstApplicable: number1.isGstApplicable,
            hsnCode: number1.hsnCode,
            gstPercent: number1.gstPercent,
            gstAmount: number1.gstAmount,
            appropraiteFor: number1.appropraiteFor,
            exciseAllocType: number1.exciseAllocType,
            gstAppropraiteTo: number1.gstAppropraiteTo
          });

          this.final_ledgerEntries.push(this.add_more_ledger[key]);
        });

        this.final_object.push(...this.tempItmesObject);

        const data = {
          voucherType: this.voucherSearchQuery,
          voucherTypeGuid : this.voucherTypeGuid,
          voucherDate: moment(String(this.newinvoiceDate)).format("YYYY-MM-DD"),
          partyGuid: this.ledgerId,
          //   ledgerPriceLevel: this.pricelevelSearchQuery,
          _userId: localStorage.getItem("customerId"),
          reference: '',
          StockItemEntries: this.final_object,
          company_id: localStorage.getItem("companyId"),
          partygstIn: this.BuyerGstin,
          isAccountingInvoice: false,
          conSigneegstin: "",
          transferComment: "",
          partyLedgerName: this.partynameSearchQuery,
          parentType: "Purchase Order",
          partyLedgerGuid: this.partyGuid,
          voucherNumber: this.voucherNumber,
          narration: this.narration,
          isTransfer: 0,
          referenceDate: '',
          partyName: this.ledgertypeSearchQuery,
          ledgerEntries: this.final_ledgerEntries,
          requestFrom: "WEB",
          isSetDefaultNumber: this.invoice_type,
          basicBuyerName: this.buyersnameSearchQuery,
          countryOfResidence: this.buyercountrySearchQuery,
          basicBuyerState: this.buyerstateSearchQuery,
          placeOfSupply: this.buyerplaceofsupplySearchQuery,
          gstRegistrationType: this.buyerregistrationSearchQuery,
          billOfLadingNo: this.dispatch_bill_no,
          basicShipDocumentNo: this.dispatch_doc_no,
          basicOrderRef: this.order_other_reference,
          basicFinalDestination: this.dispatch_destination,
          invoiceDelNotes: [
            {
              basicShippingDate:
                this.dispatch_shipping_date != "" &&
                  this.dispatch_shipping_date != null
                  ? moment(String(this.dispatch_shipping_date)).format("YYYY-MM-DD")
                  : "",
              basicShipDeliveryNote:
                this.dispatch_delivery_note != "" &&
                  this.dispatch_delivery_note != null
                  ? this.dispatch_delivery_note
                  : "",
            },
          ],
          basicShipedBy: this.dispatch_despatch_through,
          eWayBillDetails: this.eWayBillDetails,
          basicShipVesselNo: this.dispatch_motor_vehicle_no,
          // invoiceOrders: this.invoiceOrders,
          invoiceOrders: [
            {
              basicOrderDate:
                this.order_date && this.order_date !== ""
                  ? moment(String(this.order_date)).format("YYYY-MM-DD")
                  : "",
              basicPurchaseOrderNo:
                this.order_no && this.order_no !== "" ? this.order_no : "",
            },
          ],
          // basicDueDateOfPymt: "",
          basicOrderTerms: this.order_terms_of_delivery,
          basicSenderAddress: this.buyerAddress,
          isInvoice: "Yes",
          basicBuyerAddress: this.buyerAddress,
          basicBuyerPincode: this.BuyerPostalCode,
          basicBuyerGuid: this.BuyerGuid,
          conSigneegstin: this.consignee_gstin,
          basicConsigneeName: this.consigneenameSearchQuery,
          basicConsigneeAddress: this.consignee_address,
          basicConsigneeCountry: this.consigneecountrySearchQuery,
          basicConsigneeState: this.consigneestateSearchQuery,
          basicConsigneePartygstIn: this.consigneeGstin,
          basicConsigneePincode: this.consigneePostalCode,
          basicConsigneeGuid: this.ConsigneeGuid,
          basicDueDateOfPymt: this.order_terms_of_payment,

          // basicShippingDate:
          //   this.dispatch_shipping_date != "" &&
          //     this.dispatch_shipping_date != null
          //     ? moment(String(this.dispatch_shipping_date)).format("YYYY-MM-DD")
          //     : "",
          // basicShipDeliveryNote:
          //   this.dispatch_delivery_note != "" &&
          //     this.dispatch_delivery_note != null
          //     ? this.dispatch_delivery_note
          //     : "",
          // basicOrderDate:
          //   this.order_date != "" && this.order_date != null
          //     ? moment(String(this.order_date)).format("YYYY-MM-DD")
          //     : "",
          // basicPurchaseOrderNo:
          //   this.order_no != "" && this.order_no != null ? this.order_no : "",

          basicDateTimeOfInvoice:
            this.order_invoice_date != "" && this.order_invoice_date != null
              ? moment(String(this.order_invoice_date)).format("YYYY-MM-DD")
              : "",
          createdBy: localStorage.getItem("customerId"),
          checkedBy: localStorage.getItem("customerId"),
          isOptional: this.isOptionalVoucherEnabled,
          //   ledgerTaxType: this.ledgerTaxType_value,
          isInvoice: "Yes",
             igstApplicable : this.add_igstApplicable,
        };

        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.addMyVoucher(data, headers)
          .then((response) => {
            this.voucher_error = "";
            if (response.data.message == "AUTHENTICATION_FAILED") {
              localStorage.clear();
              window.location.href = "/";
            } else if (response.data.status == "200") {
              this.VoucherIDValue = response.data.data.id;
              this.$router.push({ name: "My Vouchers" });
            } else if (response.data.status == "400") {
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
    },
    get_purchase_data() {
      const isEdit = String(this.$route.query.isEdit) === '1';
      const data = {
        requestFrom: "WEB",
        company_Id: localStorage.getItem("companyId"),
        voucherId: this.$route.params.voucher_id,
        _userId: localStorage.getItem("customerId"),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      const apiCall = isEdit
          ? Api.getExistingVoucherDetails
          : Api.getVoucherFullDetailsFromSyncGoo;

        apiCall(data, headers)
        .then((response) => {
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseData == "200") {
            const resData = response.data.data;
             this.action = resData.action;
            this.isModified = resData.isModified;
            this.voucherSyncId = resData.voucherSyncId;
            this.masterId = resData.masterId;

            this.isTransfer = resData.isTransfer;
            this.voucherNumber = resData.voucherNumber;
            this.partynameSearchQuery = resData.partyLedgerName;
            // this.select_party = this.partyName;
            this.ledgertypeSearchQuery = resData.stockItemEntries[0].ledgerName;
            this.ledgerId = resData.partyGuid;
            this.newinvoiceDate = resData.voucherDate;
            this.partyGuid = resData.partyLedgerGuid;
            this.pricelevelSearchQuery = resData.ledgerPriceLevel;
            this.voucherSearchQuery = resData.voucherType;
            this.voucherTypeGuid = resData.voucherTypeGuid
            this.isSetDefaultNumberData = resData.isSetDefaultNumber;
            this.voucherTypeData = resData.numberingMethod;
            this.update_igstApplicable = resData.igstApplicable;
          }

          const data = {
            company_id: localStorage.getItem("companyId"),
            _userId: localStorage.getItem("customerId"),
            startLimit: 0,
            endLimit: 100,
            requestFrom: "WEB",
            sortBy: "ledgerName",

            searchTerm: this.partynameSearchQuery,
            parent: this.parentTypeStore.partyName,
            orderBy: 1,
            isFromBackEntry: true,
          };
          const headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: localStorage.getItem("webAuthToken"),
          };

          Api.getLedgersByLedgerGroupParentGo(data, headers).then(
            (response) => {
              if (response.data.status != "0") {
                for (let [key, value] of Object.entries(
                  response.data.data.list
                )) {
                  value.id = value._id;
                  value.partyguid = value.guid;
                  this.partynameOptions = [value];
                  this.partyMasterName = value.masterReservedName;
                  this.selectOption(null, value);
                }
              }
              //       this.stateDetails();
              // this.consigneestateDetails()
            }
          );

          this.AddNewItemList = [];
          if (response.data.data.stockItemEntries.length == 0) {
            this.AddNewItemList.push({
              tableitemsSearchQuery: "",
              item_guid: "",
              tableitemsDropdownOpen: false,
              itemquantity: "",
              itemdiscount: "",
              selectedgodownsOption: "",
              itemamount: "",
              itemrate: "",
              isChecked: false,
              // inclusiveVatRate: value.inclusiveVatRate
            });
          }
          for (let [key, value] of Object.entries(
            response.data.data.stockItemEntries
          )) {
            // Find the matching godown from the godown list
            const matchedGodown = this.godowns.find(
              (godown) => godown.name === value.godownName
            );
            this.total_amount += parseFloat(Math.abs(value.amount));

            this.AddNewItemList.push({
              tableitemsSearchQuery: value.stockItemName,
              item_guid: value.stockItemGuid,
              tableitemsDropdownOpen: false,
              itemquantity: value.qty,
              itemdiscount: value.discount,
              selectedgodownsOption: value.godownName,
              itemamount: Math.abs(value.amount),
              itemrate: value.rate.split("/")[0],
              // isChecked: value.isTaxInclusive,
              isChecked: !!value.inclusiveVatRate,
              inclusiveVatRate: value.inclusiveVatRate,
              itemdescription: value.descriptions,
              GodownDropdownOpen: false,
              item_id: value.stockItemSyncId,
              godownGuid: matchedGodown ? matchedGodown.guid : '',

            });
            const data = {
              company_id: localStorage.getItem("companyId"),
              _userId: localStorage.getItem("customerId"),
              startLimit: 0,
              endLimit: 100,
              requestFrom: "WEB",
              searchTerm: value.stockItemName,
              orderBy: 1,
              sortBy: "",
              isFromBackEntry: true,
            };
            const headers = {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              token: localStorage.getItem("webAuthToken"),
            };
            Api.getItemsByCompanyIdGo(data, headers).then((response) => {
              if (response.data.status != "0") {
                for (let [key2, value2] of Object.entries(
                  response.data.data.list
                )) {
                  this.setItemsData(value2, key, "update", value);

                  break;
                }
              }
            });
          }

          setTimeout(() => {
            this.AddNewTaxesListDropdown = [];
            this.total_tax = 0;

            this.partyLedgerEntry = response.data.data.ledgerEntries[0];

            for (let [key1, value1] of Object.entries(
              response.data.data.ledgerEntries
            )) {
              this.final_part_ledgerEntries = [];
              // response.data.data.ledgerEntries[key1].amount = Math.abs(
              //   response.data.data.ledgerEntries[key1].amount
              // );

              if (
                value1.isMoreLedgerField == "1" &&
                value1.masterReservedName.toLowerCase() == "duties & taxes"
              ) {
                this.total_tax += parseFloat(Math.abs(value1.amount));
                this.AddNewTaxesListDropdown.push({
                  addtaxesSearchQuery: value1.ledgerName,
                  tax_name: value1.name,
                  amount: parseFloat(Math.abs(value1.amount)).toFixed(this.totalDecimalValueForRate),
                });
                value1.amount = parseFloat(value1.amount);

                this.final_ledgerEntries.push(value1);
              }
              if (value1.ledgerName == this.partynameSearchQuery) {
                if (
                  value1.billAllocationdetails &&
                  Array.isArray(value1.billAllocationdetails) &&
                  value1.billAllocationdetails.length > 0
                ) {
                  this.referenceSearchQuery = value1.billAllocationdetails[0].billType;
                  this.billNumberData = value1.billAllocationdetails[0].billName;
                } else {
                  this.referenceSearchQuery = "";
                  this.billNumberData = "";
                }
              }
              if(value1.isMoreLedgerField == '0'){
                this.partyid = value1.ledgerSyncId
              }
            }

            this.ledger_array = [];
            this.AddOtherLedgersListDropdown = [];
            this.ledger_amount = 0.0;
            for (let [key, value] of Object.entries(
              response.data.data.ledgerEntries
            )) {
              if (
                value.isMoreLedgerField == "1" &&
                value.masterReservedName.toLowerCase() !== "duties & taxes"
              ) {
                console.log(
                  response.data.data.ledgerEntries,
                  "response values"
                );
                this.addmoreLedgerEntries.push(value);
                this.getaddmoreledger();
                const amount = parseFloat(value.amount);

                if (amount >= 0) {
                  // + value
                  this.ledger_amount -= amount;
                  value.type = "DR";
                } else {
                  // - value
                  this.ledger_amount = this.ledger_amount - amount;
                  value.type = "CR";
                }

                console.log(value.ledgerName, "this is ledgername values");
                this.AddOtherLedgersListDropdown.push({
                  amount: Math.abs(value.amount),
                  crdr: value.amount > 0 ? "DR" : "CR",
                  otherledgersSearchQueryDropdown: value.ledgerName,
                });
                console.log(
                  this.AddOtherLedgersListDropdown,
                  "this is  add ledger"
                );

                this.ledger_array.push({
                  ledger_name: value.ledgerName,
                  ledger_ledgerGuid: value.ledgerGuid,
                  ledger_ledgerGroup: value.ledgerGroup,
                  ledger_ledgerGroupParent: value.ledgerGroupParent,
                  amount: Math.abs(value.amount).toString(),
                  type: value.type,
                  masterReservedName: value.masterReservedName,
                  isGstApplicable: value.isGstApplicable,
                  hsnCode: value.hsnCode,
                  gstPercent: value.gstPercent,
                  gstAmount: value.gstAmount ? value.gstAmount : '',
                  appropraiteFor: value.appropraiteFor,
                  exciseAllocType: value.exciseAllocType,
                  gstAppropraiteTo: value.gstAppropraiteTo
                });
                console.log(
                  this.ledger_array,
                  "this is add ledger in get sales()"
                );

                const data = {
                  company_id: localStorage.getItem("companyId"),
                  _userId: localStorage.getItem("customerId"),
                  startLimit: 0,
                  endLimit: 100,
                  requestFrom: "WEB",
                  sortBy: "ledgerName",
                  isFromBackEntry: true,

                  searchTerm: value.ledgerName,
                  parent: this.parentTypeStore.otherLedger,
                  orderBy: 1,
                };
                const headers = {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                  token: localStorage.getItem("webAuthToken"),
                };
                Api.getLedgersByLedgerGroupParentGo(data, headers)
                  .then((response) => {
                    if (response.data.status != "0") {
                      var key_count = 0;
                      for (let [key2, value2] of Object.entries(
                        response.data.data.list
                      )) {
                        this.addmoreLedger_change(value2, key_count, "update");
                        key_count = key_count + 1;
                      }
                    }
                  })
                  .catch((err) => {
                    Common.getStatusForActionFailed(err.response.status);
                    this.loading = false;
                  });
                console.log(this.ledger_array, "after calling the api");
                console.log(
                  this.AddOtherLedgersListDropdown,
                  "other ledger selection option after apis"
                );
              }
            }
            this.isGstCalculated = false;
            this.grandTotal =
              this.total_amount + this.total_tax + this.ledger_amount;
          }, 3000);

          this.createdByName = response.data.data.createdBy_Name;
          this.checkedByName = response.data.data.checkedBy_Name;
          this.updatedByName = response.data.data.updatedBy_Name;

          this.buyersnameSearchQuery =
            response.data.data.basicBuyerDetails.billTo;
          this.buyerSearch = this.buyersnameSearchQuery;
          this.buyerDetails("Buyer") 
          this.buyercountrySearchQuery =
            response.data.data.basicBuyerDetails.billToCountry;
          this.buyerstateSearchQuery =
            response.data.data.basicBuyerDetails.billToState;
          this.buyerregistrationSearchQuery =
            response.data.data.gstRegistrationType;
          this.BuyerPostalCode =
            response.data.data.basicBuyerDetails.billToPincode;
          this.buyerplaceofsupplySearchQuery =
            response.data.data.basicBuyerDetails.placeofSupply;
          this.BuyerGstin = response.data.data.basicBuyerDetails.billToGSTIN;
          // this.BuyerGuid = response.data.data.basicBuyerDetails.basicBuyerGuid;
          this.partyGSTIn = response.data.data.basicBuyerDetails.billToGSTIN;

          this.buyerAddress = response.data.data.basicBuyerDetails.billToAddress;
          this.narration = response.data.data.narration;

          this.consigneenameSearchQuery =
            response.data.data.basicConsigneeDetails.shipTo;
          this.buyerSearch = this.consigneenameSearchQuery;
          this.buyerDetails("Consignee");
          this.consigneecountrySearchQuery =
            response.data.data.basicConsigneeDetails.shipToCountry;
          this.consigneestateSearchQuery =
            response.data.data.basicConsigneeDetails.shipToState;
          this.consigneePostalCode = response.data.data.basicConsigneeDetails.shipToPincode;
          this.consigneeGstin =
            response.data.data.basicConsigneeDetails.shipToGSTIN;
          this.consignee_address =
            response.data.data.basicConsigneeDetails.shipToAddress;
          // this.ConsigneeGuid = response.data.data.basicConsigneeDetails.basicConsigneeGuid;

            let tempInvoiceDelNotes = response.data.data.invoiceDelNotes;
            if(tempInvoiceDelNotes && tempInvoiceDelNotes.length > 0 ){
              this.dispatch_delivery_note =
              response.data.data.invoiceDelNotes[0].basicShipDeliveryNote;
              this.dispatch_shipping_date = response.data.data.invoiceDelNotes[0].basicShippingDate ? moment(response.data.data.invoiceDelNotes[0].basicShippingDate).format('YYYY-MM-DD') : '' ;
            }
          this.dispatch_doc_no = response.data.data.basicShipDocumentNo;
          this.dispatch_despatch_through = response.data.data.basicShipedBy;
          this.dispatch_destination = response.data.data.basicFinalDestination;
          this.dispatch_bill_no = response.data.data.billOfLadingNo;
          this.dispatch_motor_vehicle_no = response.data.data.basicShipVesselNo;

          this.order_invoice_date = response.data.data.basicDateTimeOfInvoice;
          this.order_terms_of_payment = response.data.data.basicDueDateOfPymt;
          this.order_terms_of_delivery = response.data.data.basicOrderTerms;
          this.order_other_reference = response.data.data.basicOrderRef;
          if(response.data.data.invoiceOrders.length > 0){
            this.order_date = response.data.data.invoiceOrders[0].basicOrderDate;
            this.order_no = response.data.data.invoiceOrders[0].basicPurchaseOrderNo;
          }
          this.order_details_address = "";

          // E-way and E-invoice Update
          // this.update_eWayBillDetails = response.data.data.eWayBillDetails;
          // this.update_isEInvoiceStatus = response.data.data.isEInvoiceStatus;
          // this.update_isEwayStatus = response.data.data.isEwayStatus;
          // this.update_dispatchFromDetails = response.data.data.dispatchFromDetails;
          // this.update_igstApplicable = response.data.data.igstApplicable;
          // this.update_isEwayBill = response.data.data.isEwayBill;
          // this.update_transferComment = response.data.data.transferComment;
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
        });
    },
    update_sales() {

      this.final_object = [];
      this.stockItemsError = {};
      this.error_tax = [];
      this.addLedger_error = [];
      this.service_error = {};

      if (parseFloat(this.grandTotal) <= 0) {
        this.stockItemsError["grandTotal"] = "PLease make sure that grand total cant be 0 Or Less";
      }
       if(this.partynameSearchQuery == ''  || this.partynameSearchQuery == undefined){
        this.stockItemsError['partynameSearchQuery'] = 'Party name is mandatory!'
      }
      this.AddNewItemList.forEach((value, key) => {
        // if (
        //   value.tableitemsSearchQuery == "Search Item" ||
        //   value.tableitemsSearchQuery == "" ||
        //   value.tableitemsSearchQuery == undefined
        // ) {
        //   this.stockItemsError["tableitemsSearchQuery"] = "Please select item";
        // }
        if (
          !this.AddNewItemList[key].tableitemsSearchQuery &&
          this.AddOtherLedgersListDropdown.length == 0
        ) {
          this.service_error["otheritems"] =
            "Please Fill Either Item Or Other Ledgers";
          this.stockItemsError["otheritems"] =
            "Please Fill Either Item And Other Ledgers";
        }
        if (
          value.tableitemsSearchQuery &&
          value.tableitemsSearchQuery !== "Search Item"
        ) {
            if (value.itemquantity == "" || value.itemquantity == "0" || isNaN(Number(value.itemquantity))) {
            this.stockItemsError["itemquantity"] = "Please enter item quantity";
          }
          if (
            value.itemrate == "" ||
            value.itemrate == "0" ||
            isNaN(value.itemrate)
          ) {
            this.stockItemsError["itemrate"] = "Please enter item rate";
          }
          if (value.selectedgodownsOption == "") {
            this.stockItemsError["selectedgodownsOption"] =
              "Please select godown";
          }
        }
      });
      if(this.voucherSearchQuery == ''){
        this.stockItemsError["voucherSearchQuery"] =
              "Please Select Voucher Type";
      }
      // if (
      //   (this.dispatch_doc_no == "" || this.dispatch_doc_no == "Select") && (
      //     this.dispatch_shipping_date != "" || this.dispatch_delivery_note != '' || this.dispatch_bill_no != '' || this.dispatch_despatch_through != '' || this.dispatch_motor_vehicle_no != '' || this.dispatch_destination != '')
      // ) {
      //   this.advancedError["dispatch_doc_no"] = "Dispatch doc no. required";
      //   this.stockItemsError["dispatch_doc_no"] = "Dispatch doc no. required";
      //   this.errors["dispatch_doc_no"] = "Dispatch doc no. required";
      // }
      if (this.dispatch_shipping_date == "" && (this.dispatch_doc_no != "" || this.dispatch_delivery_note != '' || this.dispatch_bill_no != '' || this.dispatch_despatch_through != '' || this.dispatch_motor_vehicle_no != '' || this.dispatch_destination != '')) {
        this.advancedError["dispatch_shipping_date"] =
          "Please Select Shipping Date.";
        this.stockItemsError["dispatch_shipping_date"] =
          "Please Select Shipping Date.";
        this.errors["dispatch_shipping_date"] = "Please Select Shipping Date.";
      }
       if (this.dispatch_delivery_note == "" &&  this.dispatch_shipping_date != '') {
        this.advancedError["dispatch_delivery_note"] =
          "Please Fill Dispatch Note.";
        this.stockItemsError["dispatch_delivery_note"] =
          "Please Fill Dispatch Note.";
        this.errors["dispatch_delivery_note"] = "Please Fill Dispatch Note.";
      }
      if (this.order_no == "" && this.order_date != "") {
        this.advancedError["order_no"] = "please select order No.";
        this.stockItemsError["order_no"] = "please select order No.";
        this.errors["order_no"] = "please select order No.";
      }
      this.AddNewTaxesListDropdown.forEach((value, key) => {
        if (!value.addtaxesSearchQuery) {
          if (!this.error_tax.addtaxesSearchQuery) {
            this.error_tax.addtaxesSearchQuery = {}; // Create an object to store individual errors for each select field
          }
          this.stockItemsError["addtaxesSearchQuery"] =
            "Tax amount is required";
          this.error_tax.addtaxesSearchQuery[key] = "Tax is required"; // Set the error message for the current select field
        }
        if (value.amount == "") {
          if (!this.error_tax.amount) {
            this.error_tax.amount = {}; // Create an object to store individual errors for each select field
          }
          this.stockItemsError["amount"] = "Tax amount is required";
          this.error_tax.amount[key] = "Tax amount is required";
        }
        if(this.voucherSearchQuery == ''){
        this.stockItemsError["voucherSearchQuery"] =
              "Please Select Voucher Type";
      }
      });
      if (this.consigneenameSearchQuery == '' || this.consigneenameSearchQuery == 'Consignee Name') {
        this.advancedError["consigneenameSearchQuery"] = "Consignee name is Mandatory";
        this.stockItemsError["consigneenameSearchQuery"] = "Consignee Name is Mandatory";
        this.errors["consigneenameSearchQuery"] = "Consignee Name is Mandatory";
      }
      if (this.buyersnameSearchQuery == '' || this.buyersnameSearchQuery == 'Consignee Name') {
        this.advancedError["buyersnameSearchQuery"] = "Buyer's name is Mandatory";
        this.stockItemsError["buyersnameSearchQuery"] = "Buyer's Name is Mandatory";
        this.errors["buyersnameSearchQuery"] = "Buyer's Name is Mandatory";
      }
      this.ledger_array.forEach((value, key) => {
        if (value.ledger_name == "" || value.ledger_name == undefined) {
          this.addLedger_error["selectLedger"] = "";
          this.addLedger_error["selectLedger"] =
            "Please select Search Other Ledger";
          this.stockItemsError["selectLedger"] =
            "Please select Search Other Ledger";
        }
        if (value.amount == "" || parseFloat(value.amount) <= 0) {
          this.addLedger_error["ledgerAmount"] = "";
          this.addLedger_error["ledgerAmount"] = "Please enter ledger amount";
          this.stockItemsError["ledgerAmount"] = "Please enter ledger amount";
        }
      });

      if (Object.keys(this.stockItemsError).length === 0) {
        let newLedgerEntry;
        if (
          this.referenceSearchQuery == "New Reference" ||
          this.referenceSearchQuery == "New Ref"
        ) {
          newLedgerEntry = {
            ledgerGroupParent: this.ledgerGroupParent,
            ledgerName: this.partynameSearchQuery,
            ledgerGuid: this.partyGuid,
            billAllocationdetails: [
              {
                amount: -this.roundToTwoDecimalPlaces(this.grandTotal),
                billCreditPeriod: "0",
                billDate: "",
                billId: "",
                billName: this.billNumberData,
                billType: "New Ref",
              },
            ],
            bankAllocationDetails: [],
            isMoreLedgerField: "0",
            ledgerGroup: this.ledgergroup,
            ledgerSyncId: this.partyGuid == "" ? this.partyid : "",
            amount: -this.roundToTwoDecimalPlaces(this.grandTotal),
            masterReservedName: (this.partynameOptions[0] && this.partynameOptions[0].masterReservedName) || this.partyMasterName
          };
        }else if (this.referenceSearchQuery == "On Account") { 
          newLedgerEntry = {
            ledgerGroupParent: this.ledgerGroupParent,
            ledgerName: this.partynameSearchQuery,
            ledgerGuid: this.partyGuid ? this.partyGuid : '',
            billAllocationdetails: [
              {
                amount: -this.roundToTwoDecimalPlaces(this.grandTotal),
                billCreditPeriod: "0",
                billDate: "",
                billId: "",
                billName: this.billNumberData,
                billType: "On Account",
              },
            ],
            bankAllocationDetails: [],
            isMoreLedgerField: "0",
            ledgerGroup: this.ledgergroup,
            ledgerSyncId: this.partyGuid == "" ? this.partyid : "",
            amount: this.roundToTwoDecimalPlaces(this.grandTotal),
            masterReservedName: this.partynameOptions[0].masterReservedName
          };
        } else {
          newLedgerEntry = {
            ledgerGroupParent: this.ledgerGroupParent,
            ledgerName: this.partynameSearchQuery,
            ledgerGuid: this.partyGuid,
            billAllocationdetails: [],
            bankAllocationDetails: [],
            isMoreLedgerField: "0",
            ledgerGroup: this.ledgergroup,
            ledgerSyncId: this.partyGuid == "" ? this.partyid : "",
            amount: -this.roundToTwoDecimalPlaces(this.grandTotal),
            masterReservedName: (this.partynameOptions[0] && this.partynameOptions[0].masterReservedName) || this.partyMasterName
          };
        }

        const index = this.final_ledgerEntries.findIndex(
          (entry) => entry.ledgerGuid === newLedgerEntry.ledgerGuid
        );

        if (index !== -1) {
          this.final_ledgerEntries[index] = newLedgerEntry;
        } else {
          this.final_ledgerEntries.push(newLedgerEntry);
        }

        if (this.AddOtherLedgersListDropdown !== null) {
          this.add_more_ledger = [];
          // Find the indexes of the items that need to be removed
          const indexesToRemove = [];
          this.final_ledgerEntries.forEach((item, index) => {
            if (
              item.masterReservedName !== "Duties & Taxes" &&
              item.isMoreLedgerField == "1"
            ) {
              indexesToRemove.push(index);
            }
          });

          // Remove items from the array in reverse order to avoid index shifting
          for (let i = indexesToRemove.length - 1; i >= 0; i--) {
            this.final_ledgerEntries.splice(indexesToRemove[i], 1);
          }

          this.ledger_array.forEach((number1, key) => {
            if (number1.type == "DR") {
              var amount = number1.amount;
            } else {
              var amount = "-" + number1.amount;
            }

            this.add_more_ledger.push({
              ledgerName: number1.ledger_name,
              masterReservedName: number1.masterReservedName,
              descriptions: "",
              ledgerGuid: number1.ledger_ledgerGuid,
              transactionType: "",
              isMoreLedgerField: "1",
              ledgerGroup: number1.ledger_ledgerGroup,
              ledgerGroupParent: number1.ledger_ledgerGroupParent,
              amount: this.roundToTwoDecimalPlaces(amount),
              billAllocationdetails: [],
              bankAllocationDetails: [],
              isGstApplicable: number1.isGstApplicable,
              hsnCode: number1.hsnCode,
              gstPercent: number1.gstPercent,
              gstAmount: number1.gstAmount,
              appropraiteFor: number1.appropraiteFor,
              exciseAllocType: number1.exciseAllocType,
              gstAppropraiteTo: number1.gstAppropraiteTo
            });

            this.final_ledgerEntries.push(this.add_more_ledger[key]);
          });
        }
        this.final_object.push(...this.tempItmesObject)
        const isEdit = String(this.$route.query.isEdit) === '1';

        const data = {
          voucherId: this.$route.params.voucher_id,
          voucherType: this.$route.params.voucherTypeName,
          voucherTypeGuid : this.voucherTypeGuid,
          voucherDate: moment(String(this.newinvoiceDate)).format("YYYY-MM-DD"),
          partyGuid: this.ledgerId,
          ledgerPriceLevel: this.pricelevelSearchQuery,
          _userId: localStorage.getItem("customerId"),
          reference: '',
          StockItemEntries: this.final_object,
          company_id: localStorage.getItem("companyId"),
          partygstIn: this.BuyerGstin,
          isAccountingInvoice: false,
          conSigneegstin: this.partyGSTIn,
          transferComment: "",
          partyLedgerName: this.partynameSearchQuery,
          parentType: "Purchase Order",
          partyLedgerGuid: this.partyGuid,
          voucherNumber: this.voucherNumber,
          narration: this.narration,
          isTransfer: 0,
          referenceDate: '',
          partyName: this.ledgertypeSearchQuery,
          ledgerEntries: this.final_ledgerEntries,
          requestFrom: "WEB",
          isSetDefaultNumber: this.invoice_type,
          basicDueDateOfPymt: this.order_terms_of_payment,
          billOfLadingNo: this.dispatch_bill_no,
          basicShipDocumentNo: this.dispatch_doc_no,
          countryOfResidence: this.buyercountrySearchQuery,
          placeOfSupply: this.buyerplaceofsupplySearchQuery,
          gstRegistrationType: this.buyerregistrationSearchQuery,
          basicOrderRef: this.order_other_reference,
          conSigneegstin: this.consigneeGstin,
          basicFinalDestination: this.dispatch_destination,
          invoiceDelNotes: [
            {
              basicShippingDate:
                this.dispatch_shipping_date != "" &&
                  this.dispatch_shipping_date != null
                  ? moment(String(this.dispatch_shipping_date)).format("YYYY-MM-DD")
                  : "",
              basicShipDeliveryNote:
                this.dispatch_delivery_note != "" &&
                  this.dispatch_delivery_note != null
                  ? this.dispatch_delivery_note
                  : "",
            },
          ],
          basicShipedBy: this.dispatch_despatch_through,

          basicShipVesselNo: this.dispatch_motor_vehicle_no,
          // invoiceOrders: this.invoiceOrders,
          invoiceOrders: [
            {
              basicOrderDate:
                this.order_date && this.order_date !== ""
                  ? moment(String(this.order_date)).format("YYYY-MM-DD")
                  : "",
              basicPurchaseOrderNo:
                this.order_no && this.order_no !== "" ? this.order_no : "",
            },
          ],
          basicDueDateOfPymt: this.order_terms_of_payment,
          basicOrderTerms: this.order_terms_of_delivery,
          basicSenderAddress: this.buyerAddress,
          isInvoice: "Yes",
          basicBuyerAddress: this.buyerAddress,
          basicBuyerPincode: this.BuyerPostalCode,
          basicBuyerGuid: this.BuyerGuid,
          basicConsigneeName: this.consigneenameSearchQuery,
          basicConsigneeAddress: this.consignee_address,
          basicConsigneeCountry: this.consigneecountrySearchQuery,
          basicConsigneeState: this.consigneestateSearchQuery,
          basicConsigneePartygstIn: this.consigneeGstin,
          basicConsigneePincode: this.consigneePostalCode,
          basicConsigneeGuid: this.ConsigneeGuid,
          basicBuyerName: this.buyersnameSearchQuery,

          // basicShippingDate:
          //   this.dispatch_shipping_date != "" &&
          //     this.dispatch_shipping_date != null
          //     ? moment(String(this.dispatch_shipping_date)).format("YYYY-MM-DD")
          //     : "",
          // basicShipDeliveryNote:
          //   this.dispatch_delivery_note != "" &&
          //     this.dispatch_delivery_note != null
          //     ? this.dispatch_delivery_note
          //     : "",
          // basicOrderDate:
          //   this.order_date != "" && this.order_date != null
          //     ? moment(String(this.order_date)).format("YYYY-MM-DD")
          //     : "",
          // basicPurchaseOrderNo:
          //   this.order_no != "" && this.order_no != null ? this.order_no : "",

          basicDateTimeOfInvoice:
            this.order_invoice_date != "" && this.order_invoice_date != null
              ? moment(String(this.order_invoice_date)).format("YYYY-MM-DD")
              : "",
          basicBuyerState: this.buyerstateSearchQuery,
          updatedBy: localStorage.getItem("customerId"),
          checkedBy: localStorage.getItem("customerId"),
          isOptional: this.isOptionalVoucherEnabled,
          isInvoice: "Yes",
          isEInvoiceStatus: this.update_isEInvoiceStatus,
          dispatchFromDetails: this.update_dispatchFromDetails,
          igstApplicable: this.update_igstApplicable,
          isEwayBill: this.update_isEwayBill,
          isEwayStatus: this.update_isEwayStatus,
          transferComment: this.update_transferComment,
          eWayBillDetails: this.update_eWayBillDetails,
          ...( isEdit && {
              masterId: this.masterId,
              action: "Alter",
            })
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };

        const apiCall = isEdit
          ? Api.updateMyVoucherOnEdit
          : Api.updateMyVoucher;

          apiCall(data, headers)
          .then((response) => {
            if (response.data.message == "AUTHENTICATION_FAILED") {
              localStorage.clear();
              window.location.href = "/";
            } else if (response.data.status == "200") {
               if (isEdit) {
                 this.isBtnDisable = true;
                    this.handleRoute();
                  } else {
                    this.$router.push({ name: "My Vouchers" });
                  }
                        this.isBtnDisable = false;
                        
                      }
                    })
                    .catch((err) => {
            this.isBtnDisable = false;
            Common.getStatusForActionFailed(err.response.status);
            this.loading = false;
          });
      }
    },

     handleRoute() { 
      this.$router.go(-1);
    },

    hide() {
      this.isEditing = false;
    },
    closeEvent() {
      this.hide();
    },
    // ReferencetoggleDropdown(open) {
    //   this.referenceDropdownOpen = open;
    //   if (open) {
    //     this.$nextTick(() => {
    //       this.$refs.referenceInput.focus();
    //     });
    //   } else {
    //     this.referenceActiveIndex = -1;
    //   }
    // },
    // ReferencefilterOptions() {
    //   const query = this.referenceSearchQuery.toLowerCase();
    //   this.referenceFilteredOptions = this.referenceOptions.filter((option) =>
    //     option.label.toLowerCase().includes(query)
    //   );
    //   this.referenceActiveIndex = -1;
    //   if (query == "") {
    //     this.referenceDropdownOpen = open;
    //   }
    // },
    // ReferenceselectOption(option) {
    //   this.referenceSelectedOption = option;
    //   this.referenceSearchQuery = option.label;
    //   this.referenceDropdownOpen = false;
    //   this.referenceActiveIndex = -1;
    // },
    // ReferenceclearSearch() {
    //   this.referenceSearchQuery = "";
    //   this.ReferencefilterOptions();
    // },
    // handleReferenceKeydown(event) {
    //   if (this.referenceDropdownOpen) {
    //     if (event.key === "ArrowDown") {
    //       event.preventDefault();
    //       if (
    //         this.referenceActiveIndex <
    //         this.referenceFilteredOptions.length - 1
    //       ) {
    //         this.referenceActiveIndex++;
    //       }
    //     } else if (event.key === "ArrowUp") {
    //       event.preventDefault();
    //       if (this.referenceActiveIndex > 0) {
    //         this.referenceActiveIndex--;
    //       }
    //     } else if (event.key === "Enter") {
    //       event.preventDefault();
    //       if (this.referenceActiveIndex >= 0) {
    //         this.ReferenceselectOption(
    //           this.referenceFilteredOptions[this.referenceActiveIndex]
    //         );
    //       }
    //     } else if (event.key === "Escape") {
    //       this.ReferencetoggleDropdown(false);
    //     }
    //   }
    // },
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
      this.countrysearch = "";
      this.countryDetails();
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
    disableArrowKeys: function (e) {
      if (e.keyCode === 38 || e.keyCode === 40) {
        e.preventDefault();
      }
    },
    disableMouseWheelScroll: function (e) {
      e.preventDefault();
    },
    AddNewItemClick() {
      this.AddNewItemList.push({
        id: Date.now(),
        tableitemsSearchQuery: "",
        itemquantity: "",
        itemrate: "",
        itemdiscount: "",
        selectedOption: "",
        itemamount: "",
        isChecked: false,
        tableitemsDropdownOpen: false,
        tableitemsFilteredOptions: [],
        GodownDropdownOpen: false,
        filteredGodowns: [],
        selectedgodownsOption: "", // Initialize with empty or specific value
      });
      this.itemSearch = "";
      this.getStockItemList();
      this.GodownSearch = "";
      this.getlocationlist();
    },
    removeNewItem(index) {
            if (this.isTransfer == 1 && this.isVoucherEditable == false) {
        return;
      }
      if (this.AddNewItemList.length === 1) {
        this.AddNewItemList[index].tableitemsSearchQuery = "";
        this.AddNewItemList[index].item_guid = "";
        this.AddNewItemList[index].itemdescription = "";
        this.AddNewItemList[index].selectedgodownsOption = "";
        this.AddNewItemList[index].hsn_code = "";
        this.AddNewItemList[index].itemquantity = "";
        this.AddNewItemList[index].itemrate = "";
        this.AddNewItemList[index].itemdiscount = "";
        this.AddNewItemList[index].itemamount = "";
        this.AddNewItemList[index].isChecked = false;
        this.$set(this, "AddNewTaxesListDropdown", []);
        this.$set(this, "tempItmesObject", []);
        this.$set(this, "AddOtherLedgersListDropdown", []);
        this.$set(this, "ledger_array", []);
        this.$set(this, "final_ledgerEntries", []);
        this.gst_calculation(index);
        this.tax_calculation();
      } else {
        this.AddNewItemList.splice(index, 1);
        const previousIndex = index > 0 ? index - 1 : 0;
        this.gst_calculation(previousIndex);
        this.tax_calculation();
      }
    },
    AddOtherLedgersClick() {
      this.AddOtherLedgersListDropdown.push({
        id: Date.now(),
        otherledgersSearchQueryDropdown: "",
        selectedOption: "",
        amount: "",
        crdr: "CR",
        otherledgersDropdownOpen: false,
        otherledgersFilteredOptions: [],
        otherledgersActiveIndex: -1,
      });

      this.ledger_array.push({
        ledger_name: "",
        sub_ledger_name: "",
        type: "CR",
        amount: 0,
        ledger_ledgerGuid: "",
        ledger_ledgerGroup: "",
        ledger_ledgerGroupParent: "",
        masterReservedName: '',
      });
    },
    removeOtherLedgers(index) {
      this.AddOtherLedgersListDropdown.splice(index, 1);
      this.ledger_array.splice(index, 1);
      this.other_gst_calculation();
      this.tax_calculation();
    },
    AddNewTaxesClick() {
      this.AddNewTaxesListDropdown.push({
        id: Date.now(),
        addtaxesSearchQuery: "",
        selectedOption: "",
        amount: "",
        addtaxesDropdownOpen: false,
        addtaxesFilteredOptions: [],
        addtaxesActiveIndex: -1,
      });
    },
    removeNewTaxes(index) {
      this.AddNewTaxesListDropdown.splice(index, 1);
      this.final_ledgerEntries.splice(index, 1);
      this.$nextTick(() => {
        this.tax_calculation();
      });
    },
    toggleTextarea() {
      this.isTextareaVisible = !this.isTextareaVisible;
    },
    toggleEdit() {
      if (this.selectedOptionradio == "custom") {
        if (this.voucherEditted) {
          if (this.VoucherEditable) {
            this.vouchernumberError = {};
            if (
              this.custom_Voucher_number === "" ||
              this.custom_Voucher_number === "Voucher No"
            ) {
              this.vouchernumberError["custom_Voucher_numberError"] =
                "Voucher No. is required";
            }
            // if (
            //   (this.billNumberData == "" || this.billNumberData == 'Bill Number') &&
            //   this.referenceSearchQuery == "New Reference"
            // ) {
            //   this.vouchernumberError["billNumberError"] = "Bill No. is required";
            // }
            if (Object.keys(this.vouchernumberError).length === 0) {
              this.updateInvoiceConfigurations();
              this.isEditing = !this.isEditing;
              this.vouchernumberError = {};
            }
          }
          // else {
          //   this.vouchernumberError = {};
          //   if (
          //     (this.billNumberData == "" || this.billNumberData == 'Bill Number') &&
          //     this.referenceSearchQuery == "New Reference"
          //   ) {
          //     this.vouchernumberError["billNumberError"] = "Bill No. is required";
          //   }
          //   if (Object.keys(this.vouchernumberError).length === 0) {
          //     this.updateInvoiceConfigurations();
          //     this.isEditing = !this.isEditing;
          //     this.vouchernumberError = {};
          //   }
          // }
        }
        else {
          if (
            (this.billNumberData == "" || this.billNumberData == 'Bill Number') &&
            this.referenceSearchQuery == "New Reference"
          ) {
            this.vouchernumberError = {};
            this.vouchernumberError["billNumberError"] = "Bill No. is required";
            if (Object.keys(this.vouchernumberError).length === 0) {
              this.isEditing = !this.isEditing;
              this.vouchernumberError = {};
            }
          } else {
            this.isEditing = !this.isEditing;
          }
        }
      }
      else {
        // this.updateInvoiceConfigurations();
        this.isEditing = !this.isEditing;
        this.vouchernumberError = {};
      }
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
            // if (
            //   this.billNumberData == "" &&
            //   this.referenceSearchQuery == "New Reference"
            // ) {
            //   this.vouchernumberError["billNumberError"] = "Bill No. is required";
            // }
            if (Object.keys(this.vouchernumberError).length === 0) {
              this.updateInvoiceConfigurations();
              this.toggleEdit();
            }
          } else {
            this.vouchernumberError = {};
            // if (
            //   this.billNumberData == "" &&
            //   this.referenceSearchQuery == "New Reference"
            // ) {
            //   this.vouchernumberError["billNumberError"] = "Bill No. is required";
            // }
            this.custom_Voucher_number = "";
            this.custom_prefix = "";
            this.custom_suffix = "";
            if (Object.keys(this.vouchernumberError).length === 0) {
              this.updateInvoiceConfigurations();
              this.toggleEdit();
            }
          }
        }
        else {
          this.toggleEdit()
        }
      } else {

        this.custom_prefix = '';
        this.custom_suffix = '';
        this.custom_Voucher_number = '';
        this.invoice_type = true;
        this.updateInvoiceConfigurations();
        this.getVoucherNumber();
        this.toggleEdit();
      }
    },
    getSelectedTemplate(option) {
      this.selectedOption = option;
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

    toggleDropdown(dropdownType, open) {
      // this.ledgertypeOptions = [];
      // this.getledgerlist()
      if (dropdownType == "partyname") {
         if(open){
          this.selectionDone = false
          this.partySearch = "";
          this.partyDetails()
        }
        else if(!open){
          setTimeout(() => {
            if(this.selectionDone == false){
              this.partynameSearchQuery = ''
            }            
          }, 200);
        }
      } else if (dropdownType == "ledgertype") {
        this.LedgerTypeSearch = "";
      }
      this.validation();
      const dropdownOpen = `${dropdownType}DropdownOpen`;
      this[dropdownOpen] = open !== undefined ? open : true;
      if (open) {
        const options = this[`${dropdownType}Options`];
        this[`${dropdownType}FilteredOptions`] = options;
      }
    },
    async filterOptions(dropdownType) {
      const searchQuery = this[`${dropdownType}SearchQuery`].toLowerCase();
      let options = this[`${dropdownType}Options`];

      // Determine the correct property for filtering
      let property;
      switch (dropdownType) {
        case "voucher":
          property = "voucherTypeName";
          break;
        case "partyname":
          property = "ledgerName";
          break;
        case "ledgertype":
          property = "ledgerName";
          break;
        case "pricelevel":
          property = "priceLevelName";
          break;
        default:
          property = ""; // fallback in case of an unexpected type
      }

      this[`${dropdownType}ActiveIndex`] = -1;

      if (dropdownType === "voucher") {
        this.search = searchQuery;
        options = this.voucherOptions;
      } else if (dropdownType === "partyname") {
        this.partySearch = searchQuery;
        this.partynameOptions = [];
        await this.partyDetails();
        options = this.partynameOptions;
      } else if (dropdownType === "ledgertype") {
        this.LedgerTypeSearch = searchQuery;
        this.ledgertypeOptions = [];
        await this.getledgerlist();
        options = this.ledgertypeOptions;
        this.AddNewItemList = [];
        this.AddNewItemList.push({
          id: Date.now(),
          tableitemsSearchQuery: "",
          itemquantity: "",
          itemrate: "",
          itemdiscount: "",
          selectedOption: "",
          itemamount: "",
          isChecked: false,
          tableitemsDropdownOpen: false,
          tableitemsFilteredOptions: [],
          selectedgodownsOption: "",
          tableitemsActiveIndex: -1,
          GodownActiveIndex: -1,
          GodownDropdownOpen: false,
          filteredGodowns: [],
        });
      } else if (dropdownType === "pricelevel") {
        this.search = searchQuery;

        this.pricelevelOptions = [];
        await this.get_price_level_list();
        options = this.pricelevelOptions;
      }

      // Filter the options based on the search query
      this[`${dropdownType}FilteredOptions`] = options.filter((option) =>
        option[property].toLowerCase().includes(searchQuery)
      );
    },
    selectOption(dropdownType, option) {
      // Determine the correct property for assigning the search query
      let property;
      switch (dropdownType) {
        case "voucher":
          property = "voucherTypeName";
          break;
        case "partyname":
          property = "ledgerName";
          break;
        case "ledgertype":
          property = "ledgerName";
          break;
        case "pricelevel":
          property = "priceLevelName";
          break;
        default:
          property = ""; // fallback in case of an unexpected type
      }

      this[`${dropdownType}SelectedOption`] = option;
      this[`${dropdownType}SearchQuery`] = option[property];
      this.toggleDropdown(dropdownType, false);
      this.$nextTick(() => {
        this.focusNextDropdown(dropdownType);
      });

      // Adding a slight delay before focusing
      setTimeout(() => {
        if (dropdownType === "voucher") {
          const vouchertypeSearch = option.voucherTypeName;
          const matchedData = this.numberingMethod.find(
            (item) => item.voucherTypeName === vouchertypeSearch
          );

          if (matchedData) {
            this.selectedNumberingMethod = matchedData.numberingmethod;
            this.voucherTypeId = matchedData.voucherTypeId;
            this.voucherTypeGuid = matchedData.voucherTypeGuid ;
          } else {
            console.log(
              "No matching data found for the selected voucher type."
            );
          }
          this.custom_prefix = this.customizeVoucherNumber.prefix;
          this.custom_suffix = this.customizeVoucherNumber.suffix;
          this.custom_Voucher_number = this.customizeVoucherNumber.number;

          this.getVoucherNumber();
          this.final_ledgerEntries = [];
          this.partynameSearchQuery = "";
          this.ledgertypeSearchQuery = "";
          this.partynameDropdownOpen = true;
          this.$nextTick(() => {
            if (this.$refs.partynameInput) {
              this.$refs.partynameInput.focus();
            }
          });
          this.partyDetails();
        } else if (dropdownType === "partyname") {
          this.selectionDone = true
          this.$set(this, "AddNewTaxesListDropdown", []);
          this.$set(this, "AddOtherLedgersListDropdown", []);

          this.tempItmesObject = [];
          this.ledger_array = [];
          this.ledgertypeDropdownOpen = true;
          this.final_ledgerEntries = [];
          this.partySearch = this[`${dropdownType}SearchQuery`];
          this.partyDetails();
          this.buyersnameSearchQuery = option.ledgerName;
          this.buyercountrySearchQuery = option.countryName;
          this.buyerstateSearchQuery = option.stateName;
          this.buyerregistrationSearchQuery = option.gstRegistrationType;
          this.BuyerPostalCode = option.pincode;
          this.BuyerGstin = option.partyGSTIn;
          this.buyerplaceofsupplySearchQuery = this.StateNameData;
          this.buyerAddress = option.address;
          this.BuyerGuid = option.guid;
          this.partyid = option.id
          // this.consignee_address = option.address;
          // this.consigneenameSearchQuery = option.ledgerName;
          // this.consigneecountrySearchQuery = option.countryName;
          // this.consigneestateSearchQuery = option.stateName;
          // this.consigneePostalCode = option.pincode;
          // this.consigneeGstin = option.partyGSTIn;

          this.$nextTick(() => {
            if (this.$refs.ledgertypeInput) {
              this.$refs.ledgertypeInput.focus();
            }
          });
          this.partyGSTIn = option.partyGSTIn;
          this.partyGuid = option.partyguid;
          this.ledgerGroupParent = option.parent;
          this.ledgergroup = option.parentgroup;

          this.ledgertypeOptions = [];

          this.getledgerlist();
          this.grandTotal = 0;
          this.total_tax = 0;
          this.total_amount = 0;
          this.AddNewItemList = [];
          this.AddNewItemList.push({
            id: Date.now(),
            tableitemsSearchQuery: "",
            itemquantity: "",
            itemrate: "",
            itemdiscount: "",
            selectedOption: "",
            itemamount: "",
            isChecked: false,
            tableitemsDropdownOpen: false,
            tableitemsFilteredOptions: [],
            selectedgodownsOption: "",
            tableitemsActiveIndex: -1,
            GodownActiveIndex: -1,
            GodownDropdownOpen: false,
            filteredGodowns: [],
          });
          this.getStockItemList();
        } else if (dropdownType === "ledgertype") {
          this.$set(this, "AddNewTaxesListDropdown", []);
          this.$set(this, "AddOtherLedgersListDropdown", []);

          this.tempItmesObject = [];
          this.ledgertypeOptions = [];
          this.ledger_array = [];
          this.final_ledgerEntries = [];
          this.ledgerId = option.ledgerId;
          this.LedgerTypeSearch = this[`${dropdownType}SearchQuery`];
          this.getledgerlist();

          if (this.usePriceLevels == "Yes") {
            this.pricelevelDropdownOpen = true;
            this.$nextTick(() => {
              if (this.$refs.pricelevelInput) {
                this.$refs.pricelevelInput.focus();
              }
            });
          } else {
            this.tableitemsDropdownOpen = true;
            this.$nextTick(() => {
              if (this.$refs.tableitemsInput && this.$refs.tableitemsInput[0]) {
                this.$refs.tableitemsInput[0].focus();
              }
            });
          }
          this.get_price_level_list();
          this.getStockItemList();
          this.validation();
          this.grandTotal = 0;
          this.total_tax = 0;
          this.total_amount = 0;
          this.AddNewItemList = [];
          this.AddNewItemList.push({
            id: Date.now(),
            tableitemsSearchQuery: "",
            itemquantity: "",
            itemrate: "",
            itemdiscount: "",
            selectedOption: "",
            itemamount: "",
            isChecked: false,
            tableitemsDropdownOpen: false,
            tableitemsFilteredOptions: [],
            selectedgodownsOption: "",
            tableitemsActiveIndex: -1,
            GodownActiveIndex: -1,
            GodownDropdownOpen: false,
            filteredGodowns: [],
          });
        } else if (
          dropdownType === "pricelevel" &&
          this.usePriceLevels == "Yes"
        ) {
          this.tableitemsDropdownOpen = true;
          this.$nextTick(() => {
            if (this.$refs.tableitemsInput && this.$refs.tableitemsInput[0]) {
              this.$refs.tableitemsInput[0].focus();
            }
          });
        }
      }, 0);
    },

    clearSearch(dropdownType) {
      if (dropdownType === "partyname") {
        this.partynameSearchQuery = "";
        this.$set(this, "AddNewTaxesListDropdown", []);
        this.$set(this, "AddOtherLedgersListDropdown", []);

        this.tempItmesObject = [];
        this.ledger_array = [];
        this.final_ledgerEntries = [];
        this.partySearch = "";
        this.partyDetails();
        this.validation();
        setTimeout(() => {
          this.FilteredPartyData = [...this.partynameOptions];
        }, 500);
        this.grandTotal = 0;
        this.total_tax = 0;
        this.total_amount = 0;
        this.AddNewItemList = [];
        this.AddNewItemList.push({
          id: Date.now(),
          tableitemsSearchQuery: "",
          itemquantity: "",
          itemrate: "",
          itemdiscount: "",
          selectedOption: "",
          itemamount: "",
          isChecked: false,
          tableitemsDropdownOpen: false,
          tableitemsFilteredOptions: [],
          selectedgodownsOption: "",
          tableitemsActiveIndex: -1,
          GodownActiveIndex: -1,
          GodownDropdownOpen: false,
          filteredGodowns: [],
        });
      }
      if (dropdownType === "ledgertype") {
        this.ledgertypeSearchQuery = "";
        this.LedgerTypeSearch = "";
        this.ledgertypeOptions = [];
        this.$set(this, "AddNewTaxesListDropdown", []);
        this.$set(this, "AddOtherLedgersListDropdown", []);

        this.tempItmesObject = [];
        this.ledger_array = [];
        this.final_ledgerEntries = [];

        this.getledgerlist();
        this.validation();
        setTimeout(() => {
          this.FilteredLedgerData = [...this.LedgerData];
        }, 500);
        this.grandTotal = 0;
        this.total_tax = 0;
        this.total_amount = 0;
        this.AddNewItemList = [];
        this.AddNewItemList.push({
          id: Date.now(),
          tableitemsSearchQuery: "",
          itemquantity: "",
          itemrate: "",
          itemdiscount: "",
          selectedOption: "",
          itemamount: "",
          isChecked: false,
          tableitemsDropdownOpen: false,
          tableitemsFilteredOptions: [],
          selectedgodownsOption: "",
          tableitemsActiveIndex: -1,
          GodownActiveIndex: -1,
          GodownDropdownOpen: false,
          filteredGodowns: [],
        });
      }
      if (dropdownType === "pricelevel") {
        this.search = "";
        this.get_price_level_list();
        setTimeout(() => {
          this.FilteredPriceLevelData = [...this.PriceLevelData];
        }, 500);
      }
      this[`${dropdownType}SearchQuery`] = "";
      this.toggleDropdown(dropdownType, true);
      this.$nextTick(() => {
        if (this.$refs[`${dropdownType}Input`]) {
          this.$refs[`${dropdownType}Input`].focus();
        }
      });
    },
    navigateDropdown(dropdownType, step) {
      const options = this[`${dropdownType}FilteredOptions`];
      const activeIndex = this[`${dropdownType}ActiveIndex`];
      const newIndex = (activeIndex + step + options.length) % options.length;
      this[`${dropdownType}ActiveIndex`] = newIndex;
    },
    selectActiveOption(dropdownType) {
      this.selectionDone = true
      const index = this[`${dropdownType}ActiveIndex`];
      if (index >= 0) {
        const option = this[`${dropdownType}FilteredOptions`][index];
        this.selectOption(dropdownType, option);
      }
    },
    focusNextDropdown(currentDropdown) {
      const dropdownSequence = [
        "voucher",
        "partyname",
        "ledgertype",
        "pricelevel",
      ];
      const currentIndex = dropdownSequence.indexOf(currentDropdown);

      if (currentDropdown === "ledgertype" && this.usePriceLevels !== "Yes") {
        // Handle table items dropdown
        this.AddNewItemList[0].tableitemsDropdownOpen = true;
        this.$nextTick(() => {
          if (this.$refs.tableitemsInput && this.$refs.tableitemsInput[0]) {
            this.$refs.tableitemsInput[0].focus();
          }
        });
      } else if (
        currentIndex >= 0 &&
        currentIndex < dropdownSequence.length - 1
      ) {
        // Handle the usual sequence
        const nextDropdown = dropdownSequence[currentIndex + 1];
        this[`${nextDropdown}DropdownOpen`] = true;
        this.$nextTick(() => {
          if (this.$refs[`${nextDropdown}Input`]) {
            this.$refs[`${nextDropdown}Input`].focus();
          }
        });
      }
    },

    toggleTableItemsDropdown(datatype, index, isOpen) {
      if (datatype == "Items") {
        this.itemSearch = "";
        this.getStockItemList();
        this.$set(this.AddNewItemList[index], "tableitemsDropdownOpen", isOpen);
        if (isOpen) {
          this.selectionDone = false
          const query =
            this.AddNewItemList[index].tableitemsSearchQuery.toLowerCase();
          const filteredOptions = this.tableitemsOptions.filter((option) =>
            option.tableitemsSearchQuery.toLowerCase().includes(query)
          );
          this.$set(
            this.AddNewItemList[index],
            "tableitemsFilteredOptions",
            filteredOptions
          );
          this.$set(this.AddNewItemList[index], "tableitemsActiveIndex", -1); // Reset the active index when opening
        }
         else if(!isOpen){
          if (this.selectionDone == false) {
            this.AddNewItemList[index].tableitemsSearchQuery = ''
          }
        }
          this.validation();
      }
      else if (datatype == "Godowns") {
        this.GodownSearch = "";
        this.getlocationlist();
        this.$set(this.AddNewItemList[index], "GodownDropdownOpen", isOpen);
        if (isOpen) {
          this.selectionDone = false
          // Apply filtering logic only when opening
          const query =
            this.AddNewItemList[index].selectedgodownsOption.toLowerCase();
          const filteredOptions = this.godowns.filter((option) =>
            option.name.toLowerCase().includes(query)
          );
          this.$set(
            this.AddNewItemList[index],
            "filteredGodowns",
            filteredOptions
          );
          this.$set(this.AddNewItemList[index], "GodownActiveIndex", -1); // Reset the active   index when opening
        }
         if (this.selectionDone == false && !isOpen) {
          this.$nextTick(() => {
            this.AddNewItemList[index].selectedgodownsOption = '';
          });
        }
      }
      else if (datatype == 'QTY') {
        setTimeout(() => {
          // if (this.selectionDone == false && isOpen) {
          //   this.AddNewItemList[index].tableitemsSearchQuery = ''
          // }
           if(isOpen == false){
      let qty = this.AddNewItemList[index].itemquantity;
      this.AddNewItemList[index].itemquantity = parseFloat(qty).toFixed(this.totalDecimalValue);
        }
        }, 200)
      }
      else if (datatype == 'Rate') {
        setTimeout(() => {
          // if (this.selectionDone == false && isOpen) {
          //   this.AddNewItemList[index].tableitemsSearchQuery = ''
          // }
          if(isOpen == false){
          let rate = this.AddNewItemList[index].itemrate;
          this.AddNewItemList[index].itemrate = parseFloat(rate).toFixed(this.totalDecimalValueForRate);
        }
        }, 200);
      }
      // else if (datatype == 'Discount') {
      //   setTimeout(() => {
      //     if (this.selectionDone == false && isOpen) {= ''
      //     }
      //       this.AddNewItemList[index].tableitemsSearchQuery 
      //   }, 200);
      // }
    },
      toggleTaxesDropdown(index, isOpen){
      setTimeout(() => {
        let amount = this.AddNewTaxesListDropdown[index].amount
        if(isOpen == false){
          this.AddNewTaxesListDropdown[index].amount = parseFloat(amount).toFixed(this.totalDecimalValueForRate)
        }
      }, 200);
    },

    async filterTableItemsOptions(datatype, event, index) {
      // this.AddNewTaxesListDropdown = [];
      if (datatype == "Items") {
        const query = event.target.value.toLowerCase(); // Use event.target.value directly
        this.itemSearch = query;
        await this.getStockItemList();
        const filteredOptions = this.tableitemsOptions.filter((option) =>
          option.tableitemsSearchQuery.toLowerCase().includes(query)
        );
        console.log(filteredOptions, "filteredOptions");
        this.$set(
          this.AddNewItemList[index],
          "tableitemsFilteredOptions",
          filteredOptions
        );
        this.$set(this.AddNewItemList[index], "tableitemsActiveIndex", -1); // Reset the active index when filtering

      }
      else if (datatype == "Godowns") {
        const query = event.target.value.toLowerCase(); // Use lower case for consistent filtering
        this.GodownSearch = query;
        await this.getlocationlist();
        const filteredOptionsForGodown = this.godowns.filter((option) =>
          option.name.toLowerCase().includes(query)
        );
        console.log(filteredOptionsForGodown, "filteredOptions");
        this.$set(
          this.AddNewItemList[index],
          "filteredGodowns",
          filteredOptionsForGodown
        );
        this.$set(this.AddNewItemList[index], "GodownActiveIndex", -1); // Reset the active index when filtering
      }

    },
    selectGodown(option, index) {
      this.selectionDone = true
      this.GodownSearch = "";
      this.change_godown(option, index);
      this.AddNewItemList[index].selectedgodownsOption = option.name;
      this.AddNewItemList[index].godownGuid = option.guid;
      this.$set(this.AddNewItemList[index], "GodownDropdownOpen", false);
      this.$nextTick(() => {
        const descriptioninput = this.$refs.descriptionInputs[index];
        if (descriptioninput) {
          descriptioninput.focus();
        }
      });
    },

    selectTableItemsOption(option, index) {
      this.selectionDone = true
      this.ItemHsnCode = option.hsncode;
      this.SelectedItemGuid = option.guid;
      this.itemSearch = this.$set(
        this.AddNewItemList[index],
        "tableitemsSearchQuery",
        option.tableitemsSearchQuery
      );
      this.$set(
        this.AddNewItemList[index],
        "tableitemsSearchQuery",
        option.tableitemsSearchQuery
      );
      this.$set(this.AddNewItemList[index], "tableitemsDropdownOpen", false);
      this.$set(this.AddNewItemList[index], "selectedOption", option);
      // this.$set(
      //   this.AddNewItemList[index],
      //   "itemrate",
      //   parseFloat(this.getPriceAccordingPriceLevel(option, index)).toFixed(2)
      // );
      this.AddNewItemList[index].itemrate = option.itemrate;
      this.AddNewItemList[index].tableitemsSearchQuery =
        option.tableitemsSearchQuery;
      this.AddNewItemList[index].item_guid = option.guid;
      this.AddNewItemList[index].item_id = option.id;
      this.AddNewItemList[index].hsn_code = option.hsncode;
      this.AddNewItemList[index].baseUnits = option.baseUnits;
      this.AddNewItemList[index].parent = option.parent;
      this.AddNewItemList[index].parentGuid = option.parentGuid;
      this.AddNewItemList[index].category = option.category;
      this.AddNewItemList[index].categoryGuid = option.categoryGuid;
      this.AddNewItemList[index].rateOfVAT = option.rateOfVAT;
      const baseUnitsForQty = option.baseUnits
      const matchedData =  this.unitsForQty.find((unit)=>{
        return baseUnitsForQty == unit.unitName
      })
      this.totalDecimalValue = matchedData ? matchedData.decimalPlace : 0
      //update item description only if the user enabled in configuration
      if (this.isDescriptionEnabled) {
        this.AddNewItemList[index].itemdescription = option.description;
      }

      this.getStockItemList();
      this.getlocationlist();
      this.countryDetails();
      this.BuyerstateDetails();
      setTimeout(() => {
        if (this.filteredGodowns.length == "1" && this.GodownSearch == "") {
          this.AddNewItemList.forEach((row) => {
            row.selectedgodownsOption = this.filteredGodowns[0].name;
          });
        }
      }, 500);
      this.$nextTick(() => {
        const quantityInput = this.$refs.quantityInput[index];
        if (quantityInput) {
          quantityInput.focus();
        }
      });
    },
    clearTableItemsSearch(datatype, index) {
      if (datatype == "Items") {
        this.AddNewItemList[index].itemquantity = "";
        this.AddNewItemList[index].selectedgodownsOption = "";
        this.AddNewItemList[index].itemrate = "";
        this.AddNewItemList[index].itemamount = "0.00";
        if (this.AddNewItemList.length == 1) {
          this.$set(this, "AddNewTaxesListDropdown", []);
          this.$set(this, "tempItmesObject", []);
          this.$set(this, "AddOtherLedgersListDropdown", []);
          this.$set(this, "ledger_array", []);
          this.$set(this, "final_ledgerEntries", []);

          this.grandTotal = 0;
          this.total_amount = 0;
          this.total_tax = 0;
        } else {
          this.updateAmount(index);
        }

        this.itemSearch = "";
        this.getStockItemList();
        this.$set(this.AddNewItemList[index], "tableitemsSearchQuery", "");
        this.$set(this.AddNewItemList[index], "tableitemsFilteredOptions", []);
        this.$nextTick(() => {
          this.$set(this.AddNewItemList[index], "tableitemsDropdownOpen", true);
          this.$nextTick(() => {
            if (this.$refs.tableitemsInput && this.$refs.tableitemsInput[index]) {
              this.$refs.tableitemsInput[index].focus();
            }
            if (this.AddNewItemList.length === 1) {
            }
          });
        });
      }
      else if (datatype == "Godowns") {
        this.GodownSearch = "";
        this.getlocationlist();
        this.$set(this.AddNewItemList[index], "selectedgodownsOption", "");
        this.$set(this.AddNewItemList[index], "filteredGodowns", []);
        this.$nextTick(() => {
          this.$set(this.AddNewItemList[index], "GodownDropdownOpen", true);
          this.$nextTick(() => {
            if (this.$refs.godowninput && this.$refs.godowninput[index]) {
              this.$refs.godowninput[index].focus();
            }
          });
        });
      }
    },
    navigateTableItemsDropdown(
      datatype,
      index,
      optionsField,
      activeIndexField,
      direction
    ) {
      if (datatype == "Items") {
        const options = this.AddNewItemList[index][optionsField];
        let newIndex = this.AddNewItemList[index][activeIndexField] + direction;
        if (newIndex < 0) newIndex = options.length - 1;
        if (newIndex >= options.length) newIndex = 0;
        this.$set(this.AddNewItemList[index], activeIndexField, newIndex);
      }
      else if (datatype == "Godowns") {
        const options = this.AddNewItemList[index][optionsField];
        console.log(options, "options data");
        let newIndex = this.AddNewItemList[index][activeIndexField] + direction;
        if (newIndex < 0) newIndex = options.length - 1;
        if (newIndex >= options.length) newIndex = 0;
        this.$set(this.AddNewItemList[index], activeIndexField, newIndex);
      }
    },
    selectTableItemsActiveOption(
      datatype,
      index,
      optionsField,
      activeIndexField,
      searchQueryField,
      type
    ) {
      if (datatype == "Items") {
        this.selectionDone = true
        const options = this.AddNewItemList[index][optionsField];
        const activeIndex = this.AddNewItemList[index][activeIndexField];
        if (activeIndex >= 0 && activeIndex < options.length) {
          this.selectTableItemsOption(options[activeIndex], index);
        }
      }
      else if (datatype == "Godowns") {
        const options = this.AddNewItemList[index][optionsField];
        const activeIndex = this.AddNewItemList[index][activeIndexField];
        console.log(options[activeIndex], "conditions in selection");
        if (activeIndex >= 0 && activeIndex < options.length) {
          this.selectGodown(options[activeIndex], index);
        }
      }

    },

    /******Other Ledgers************/
    toggleOtherLedgersDropdown(type,index, isOpen) {
      this.search = "";
      this.getaddmoreledger();
      const selectedLedgers = this.AddOtherLedgersListDropdown
        .map((item, idx) => (idx !== index ? item.otherledgersSearchQueryDropdown : null))
        .filter(name => name); // Remove null values
      this.$set(
        this.AddOtherLedgersListDropdown[index],
        "otherledgersDropdownOpen",
        isOpen
      );
      if (isOpen) {
        this.selectionDone = false
        const query =
          this.AddOtherLedgersListDropdown[
            index
          ].otherledgersSearchQueryDropdown.toLowerCase();
        const filteredOptions = this.otherledgers2Options.map(option => ({
          ...option,
          isSelected: selectedLedgers.includes(option.name) // Mark as selected
        })).filter(option => option.name.toLowerCase().includes(query));
        this.$set(
          this.AddOtherLedgersListDropdown[index],
          "otherledgersFilteredOptions",
          filteredOptions
        );
        this.$set(
          this.AddOtherLedgersListDropdown[index],
          "otherledgersActiveIndex",
          -1
        );
        this.search = "";
        this.getaddmoreledger();
      }
      setTimeout(() => {        
      if(this.selectionDone == false && !isOpen){
        console.log(this.selectionDone, "selection done ")
        this.AddOtherLedgersListDropdown[index].otherledgersSearchQueryDropdown =''
      }
    }, 200);
      
    },
    filterOtherLedgersOptions(event, index) {
      const query = event.target.value.toLowerCase();
      const selectedLedgers = this.AddOtherLedgersListDropdown
        .map((item, idx) => (idx !== index ? item.otherledgersSearchQueryDropdown : null))
        .filter(name => name); // Remove null values
      this.search = query;
      const filteredOptions = this.otherledgers2Options.map(option => ({
        ...option,
        isSelected: selectedLedgers.includes(option.name) // Mark selected options
      })).filter(option => option.name.toLowerCase().includes(query));
      this.$set(
        this.AddOtherLedgersListDropdown[index],
        "otherledgersFilteredOptions",
        filteredOptions
      );
      this.$set(
        this.AddOtherLedgersListDropdown[index],
        "otherledgersActiveIndex",
        -1
      );
      if (query === "") {
        setTimeout(() => {
          this.AddOtherLedgersListDropdown[index].otherledgersFilteredOptions = this.otherledgers2Options.map(option => ({
            ...option,
            isSelected: selectedLedgers.includes(option.name)
          }));
        }, 500);
      }
      this.getaddmoreledger();
    },
    selectOtherLedgersOption(option, index) {
      this.selectionDone = true
      if (this.ledger_array[index]) {
        // Update the existing entry at the specified index
        this.ledger_array[index].ledger_name = option.name;
        this.ledger_array[index].ledger_ledgerGuid = option.ledgerGuid;
        this.ledger_array[index].ledger_ledgerGroup = option.ledgerGroup;
        this.ledger_array[index].ledger_ledgerGroupParent =
          option.ledgerGroupParent;
        this.ledger_array[index].masterReservedName = option.masterReservedName
      } else {
        // If the entry doesn't exist, create a new one and push it to the ledger_array
        this.ledger_array.push({
          ledger_name: option.name,
          sub_ledger_name: "",
          type: "CR",
          amount: 0,
          ledger_ledgerGuid: option.ledgerGuid,
          ledger_ledgerGroup: option.ledgerGroup,
          ledger_ledgerGroupParent: option.ledgerGroupParent,
          masterReservedName: option.masterReservedName
        });
      }
      this.$set(
        this.AddOtherLedgersListDropdown[index],
        "otherledgersSearchQueryDropdown",
        option.name
      );
      // this.$set(this.AddOtherLedgersListDropdown[index], 'selectedOption', option.value);
      this.$set(
        this.AddOtherLedgersListDropdown[index],
        "otherledgersDropdownOpen",
        false
      );
    },
    clearOtherLedgersSearch(index) {
            if (this.isTransfer == 1 && this.isVoucherEditable == false) {
        return;
      }
      // Clear specific fields in the ledger_array at the given index
      this.ledger_array[index].ledger_name = ""; // Clear the ledger name
      this.ledger_array[index].amount = 0; // Reset the amount
      this.ledger_array[index].type = "CR"; // Clear the type (CR/DR)

      // Clear the amount and crdr (credit/debit) values
      this.$set(this.AddOtherLedgersListDropdown[index], "amount", ""); // Reset the amount
      this.$set(this.AddOtherLedgersListDropdown[index], "crdr", "CR"); // Reset crdr (credit/debit)

      this.tax_calculation();

      this.search = "";
      this.getaddmoreledger();

      setTimeout(() => {
        const selectedLedgers = this.AddOtherLedgersListDropdown
          .map((item, idx) => (idx !== index ? item.otherledgersSearchQueryDropdown : null))
          .filter(name => name);

        // Update filtered options to include unselected ledgers
        this.$set(
          this.AddOtherLedgersListDropdown[index],
          "otherledgersFilteredOptions",
          this.otherledgers2Options.map(option => ({
            ...option,
            isSelected: selectedLedgers.includes(option.name) // Mark selected ones
          })).filter(option => option.name.toLowerCase()) // Only allow unselected ones
        );
      }, 500);

      this.$set(
        this.AddOtherLedgersListDropdown[index],
        "otherledgersSearchQueryDropdown",
        ""
      );
      // this.$set(this.AddOtherLedgersListDropdown[index], 'otherledgersFilteredOptions', []);
      this.$nextTick(() => {
        this.$set(
          this.AddOtherLedgersListDropdown[index],
          "otherledgersDropdownOpen",
          true
        );
        this.$nextTick(() => {
          if (
            this.$refs.otherledgersInput &&
            this.$refs.otherledgersInput[index]
          ) {
            this.$refs.otherledgersInput[index].focus();
          }
        });
      });
    },
    navigateOtherLedgersDropdown(
      index,
      optionsField,
      activeIndexField,
      direction
    ) {
      const options = this.AddOtherLedgersListDropdown[index][optionsField];
      let newIndex =
        this.AddOtherLedgersListDropdown[index][activeIndexField] + direction;
      if (newIndex < 0) newIndex = options.length - 1;
      if (newIndex >= options.length) newIndex = 0;
      this.$set(
        this.AddOtherLedgersListDropdown[index],
        activeIndexField,
        newIndex
      );
    },
    selectOtherLedgersActiveOption(
      index,
      optionsField,
      activeIndexField,
      searchQueryField,
      type
    ) {
      const options = this.AddOtherLedgersListDropdown[index][optionsField];
      const activeIndex =
        this.AddOtherLedgersListDropdown[index][activeIndexField];
      if (activeIndex >= 0 && activeIndex < options.length) {
        this.selectOtherLedgersOption(options[activeIndex], index);
      }
    },

    /******Add Taxes************/
    toggleAddTaxesDropdown(index, isOpen) {
      this.$set(
        this.AddNewTaxesListDropdown[index],
        "addtaxesDropdownOpen",
        isOpen
      );
      if (isOpen) {
        this.selectionDone = false
        const query =
          this.AddNewTaxesListDropdown[index].addtaxesSearchQuery.toLowerCase();
        setTimeout(() => {
          const filteredOptions = this.addtaxes3Options.filter((option) =>
            option.ledgerName.toLowerCase().includes(query)
          );
          this.$set(
            this.AddNewTaxesListDropdown[index],
            "addtaxesFilteredOptions",
            filteredOptions
          );
          this.$set(
            this.AddNewTaxesListDropdown[index],
            "addtaxesActiveIndex",
            -1
          );
        }, 200);
      }
       setTimeout(() => {        
        if(this.selectionDone == false && !isOpen){
          console.log(this.selectionDone, "selection done ")
          this.AddNewTaxesListDropdown[index].addtaxesSearchQuery =''
        }
      }, 200);
      this.TaxSearch = "";
      this.gettaxlist();
    },
    filterAddTaxesOptions(event, index) {
      const query = event.target.value.toLowerCase();
      this.TaxSearch = query;
      const filteredOptions = this.addtaxes3Options.filter((option) =>
        option.ledgerName.toLowerCase().includes(query)
      );
      this.$set(
        this.AddNewTaxesListDropdown[index],
        "addtaxesFilteredOptions",
        filteredOptions
      );
      this.$set(this.AddNewTaxesListDropdown[index], "addtaxesActiveIndex", -1);
      if (query === "") {
        setTimeout(() => {
          this.AddNewTaxesListDropdown[index].addtaxesFilteredOptions = [
            ...this.addtaxes3Options,
          ];
        }, 500);
      }
      this.gettaxlist();
    },
    selectAddTaxesOption(option, index, ledgerarray = {}) {
      this.selectionDone = true
      const taxledgerName = option.ledgerName;
      const taxLedgerGroup = option.ledgergroup;
      const taxLedgerGroupParent = option.ledgergroupparent;
      const taxLedgerGuid = option.guid;
      const taxMasterReservedName = option.masterReservedName;
      this.$set(
        this.AddNewTaxesListDropdown[index],
        "addtaxesSearchQuery",
        option.ledgerName
      );
      this.$set(
        this.AddNewTaxesListDropdown[index],
        "selectedOption",
        option.value
      );
      this.$set(
        this.AddNewTaxesListDropdown[index],
        "addtaxesDropdownOpen",
        false
      );
      if (Object.keys(ledgerarray).length !== 0) {
        // Update case
        var amount_round = parseFloat(
          this.AddNewTaxesListDropdown[index].amount
        );
        setTimeout(() => {
          this.AddNewTaxesListDropdown[index].addtaxesSearchQuery =
            ledgerarray.ledgerName;

          this.final_part_ledgerEntries.push({
            billAllocationdetails: [],
            bankAllocationDetails: [],
            isMoreLedgerField: "1",
            ledgerName: ledgerarray.ledgerName,
            ledgerTaxType: ledgerarray.ledgerTaxType,
            ledgerGroup: ledgerarray.ledgerGroup,
            ledgerGroupParent: ledgerarray.ledgerGroupParent,
            ledgerGuid: ledgerarray.ledgerGuid,
            amount: -parseFloat(amount_round.toFixed(this.totalDecimalValueForRate)),
          });

          this.final_ledgerEntries.push(this.final_part_ledgerEntries[index]);
        }, 1500);
      } else {
        console.log(this.AddNewTaxesListDropdown, "taxarray console data");

        var amount_round = parseFloat(
          this.AddNewTaxesListDropdown[index].amount
        );

        this.ledgerTaxType_value = "";
        if (taxledgerName.toLowerCase().includes("cgst")) {
          this.ledgerTaxType_value = "cgst";
        } else if (taxledgerName.toLowerCase().includes("sgst")) {
          this.ledgerTaxType_value = "sgst";
        } else if (taxledgerName.toLowerCase().includes("igst")) {
          this.ledgerTaxType_value = "igst";
        } else {
          this.ledgerTaxType_value = "";
        }
        this.final_part_ledgerEntries = [];
        this.final_part_ledgerEntries.push({
          billAllocationdetails: [],
          bankAllocationDetails: [],
          isMoreLedgerField: "1",
          ledgerName: taxledgerName,
          ledgerGroup: taxLedgerGroup,
          ledgerTaxType: this.ledgerTaxType_value,
          ledgerGroupParent: taxLedgerGroupParent,
          ledgerGuid: taxLedgerGuid,
          masterReservedName: taxMasterReservedName,
          amount: -parseFloat(amount_round.toFixed(this.totalDecimalValueForRate)),
        });
        this.$set(
          this.final_ledgerEntries,
          index,
          this.final_part_ledgerEntries["0"]
        );
      }
    },
    clearAddTaxesSearch(index) {
      this.$set(this.AddNewTaxesListDropdown[index], "addtaxesSearchQuery", "");
      this.$set(
        this.AddNewTaxesListDropdown[index],
        "addtaxesFilteredOptions",
        []
      );
      this.$nextTick(() => {
        this.$set(
          this.AddNewTaxesListDropdown[index],
          "addtaxesDropdownOpen",
          true
        );
        this.$nextTick(() => {
          if (this.$refs.addtaxesInput && this.$refs.addtaxesInput[index]) {
            this.$refs.addtaxesInput[index].focus();
          }
        });
      });
    },
    navigateAddTaxesDropdown(index, optionsField, activeIndexField, direction) {
      const options = this.AddNewTaxesListDropdown[index][optionsField];
      let newIndex =
        this.AddNewTaxesListDropdown[index][activeIndexField] + direction;
      if (newIndex < 0) newIndex = options.length - 1;
      if (newIndex >= options.length) newIndex = 0;
      this.$set(
        this.AddNewTaxesListDropdown[index],
        activeIndexField,
        newIndex
      );
    },
    selectAddTaxesActiveOption(
      index,
      optionsField,
      activeIndexField,
      searchQueryField,
      type
    ) {
      const options = this.AddNewTaxesListDropdown[index][optionsField];
      const activeIndex = this.AddNewTaxesListDropdown[index][activeIndexField];
      if (activeIndex >= 0 && activeIndex < options.length) {
        this.selectAddTaxesOption(options[activeIndex], index);
      }
    },

    async AdvancedDroptoggleDropdown(dropdown, open) {
      this[dropdown] = open;
      if (open) {
        const optionsName = dropdown.replace("DropdownOpen", "Options");
        const filteredOptionsName = dropdown.replace(
          "DropdownOpen",
          "FilteredOptions"
        );

        this[filteredOptionsName] = this[optionsName];
        if (dropdown == "buyercountryDropdownOpen") {
          this.buyerstateSearchQuery = '';
          this.countrysearch = "";
          this.countryDetails();
          this[filteredOptionsName] = this.CountryData;
        }
        if (dropdown == "buyerstateDropdownOpen") {
          await this.BuyerstateDetails();
          this[filteredOptionsName] = this.stateData;
        }
        if (dropdown == "buyerplaceofsupplyDropdownOpen") {
          await this.BuyerstateDetails();
          this[filteredOptionsName] = this.stateData;
        }
        if (dropdown == "consigneestateDropdownOpen") {
          await this.ConsigneestateDetails();
          this[filteredOptionsName] = this.stateData;
        }
        if (dropdown == "consigneecountryDropdownOpen") {
          this.consigneestateSearchQuery = '';
          this.countrysearch = "";
          this.countryDetails();
          this[filteredOptionsName] = this.CountryData;
        }
        if (dropdown == "consigneenameDropdownOpen") {
          this[filteredOptionsName] = this.buyersnameFilteredOptions;
        }
      }
    },
    async AdvancedDropfilterOptions(
      searchQueryName,
      filteredOptionsName,
      options,
      searchProperty
    ) {
      const query = this[searchQueryName].toLowerCase();
      // this[filteredOptionsName] = options.filter(option =>
      //   option[searchProperty].toLowerCase().includes(query)
      // );
      const activeIndexName = filteredOptionsName.replace(
        "FilteredOptions",
        "ActiveIndex"
      );
      this[activeIndexName] = -1;
      if (searchProperty == "buyersnamelabel") {
        this.buyerSearch = query;
        await this.buyerDetails();
        this[filteredOptionsName] = options.filter((option) =>
          option.ledgerName.toLowerCase().includes(query)
        );
        this[filteredOptionsName] = [...this.buyersnameOptions];
      }
      if (searchProperty == "buyerscountrylabel") {
        this.countrysearch = query;
        await this.countryDetails();
        this[filteredOptionsName] = options.filter((option) =>
          option.name.toLowerCase().includes(query)
        );
        this[filteredOptionsName] = [...this.CountryData];
        this.buyercountryFilteredOptions = this[filteredOptionsName].filter(
          (option, i, arr) =>
            arr.findIndex(
              (o) => o.name.toLowerCase() === option.name.toLowerCase()
            ) === i
        );
      }
      if (searchProperty == "consigneenamelabel") {
        this.buyerSearch = query;
        await this.buyerDetails();
        this[filteredOptionsName] = options.filter((option) =>
          option.ledgerName.toLowerCase().includes(query)
        );
        this[filteredOptionsName] = [...this.buyersnameOptions];
      }
      if (searchProperty == "consigneecountrylabel") {
        this.countrysearch = query;
        await this.countryDetails();
        this[filteredOptionsName] = options.filter((option) =>
          option.name.toLowerCase().includes(query)
        );

        this[filteredOptionsName] = [...this.CountryData];

        this.consigneecountryFilteredOptions = this[filteredOptionsName].filter(
          (option, i, arr) =>
            arr.findIndex(
              (o) => o.name.toLowerCase() === option.name.toLowerCase()
            ) === i
        );
      }
      if (searchProperty == "consigneestatelabel") {
        if (query) {
          this.consigneestateFilteredOptions = options.filter((option) =>
            option.name.toLowerCase().includes(query)
          );

          this[filteredOptionsName] = [...this.consigneestateFilteredOptions];
        } else {

          this[filteredOptionsName] = [...this.stateData];
        }
      }
      if (searchProperty === "buyersstatelabel") {

        if (query) {
          this[filteredOptionsName] = options.filter((option) =>
            option.name.toLowerCase().includes(query) // Filter state options based on the query
          );
        } else {
          this[filteredOptionsName] = [...this.stateData];
        }

      }
      if (searchProperty == "buyersregistrationlabel") {
        this.buyerSearch = query;
        this[filteredOptionsName] = options.filter((option) =>
          option.buyersregistrationlabel.toLowerCase().includes(query)
        );
        this[filteredOptionsName] = [...this.buyerregistrationOptions];
      }
      if (searchProperty === "buyerplaceofsupplylabel") {
        if (query) {
          this[filteredOptionsName] = options.filter((option) =>
            option.name.toLowerCase().includes(query) // Filter state options based on the query
          );
        } else {
          this[filteredOptionsName] = [...this.stateData];
        }

      }
    },
    async AdvancedDropselectOption(
      selectedOptionName,
      searchQueryName,
      option,
      labelProperty
    ) {
      this[selectedOptionName] = option;
      this[searchQueryName] = option.ledgerName;
      this.AdvancedDroptoggleDropdown(
        selectedOptionName.replace("SelectedOption", "DropdownOpen"),
        false
      );
      if (labelProperty == "buyersnamelabel") {
        this[selectedOptionName] = option;
        this[searchQueryName] = option.ledgerName;
        this.buyerSearch = this[searchQueryName];
        this.buyerDetails();
        this.buyersnameSearchQuery = option.ledgerName;
        this.buyercountrySearchQuery = option.countryName;
        this.buyerstateSearchQuery = option.stateName;
        this.buyerregistrationSearchQuery = option.gstRegistrationType;
        this.BuyerPostalCode = option.pincode;
        this.BuyerGstin = option.partyGSTIn;
        this.buyerAddress = option.address;
        this.BuyerGuid = option.guid;
      }
      if (labelProperty == "consigneenamelabel") {
        this[selectedOptionName] = option;
        this[searchQueryName] = option.ledgerName;
        this.buyerSearch = this[searchQueryName];
        this.buyerDetails();
        this.consigneenameSearchQuery = option.ledgerName;
        this.consigneecountrySearchQuery = option.countryName;
        this.consigneestateSearchQuery = option.stateName;
        this.consigneePostalCode = option.pincode;
        this.consigneeGstin = option.partyGSTIn;
        this.consignee_address = option.address;
        this.ConsigneeGuid = option.guid;
      }
      if (labelProperty == "buyerscountrylabel") {
        this[selectedOptionName] = option;
        this[searchQueryName] = option.name;
        this.countryDetails();
        this.BuyerstateDetails();
      }
      if (labelProperty == "consigneecountrylabel") {
        this[selectedOptionName] = option;
        this[searchQueryName] = option.name;
        this.countryDetails();
        await this.ConsigneestateDetails();
      }
      if (labelProperty == "consigneestatelabel") {
        this[selectedOptionName] = option;
        this[searchQueryName] = option.name;
      }
      if (labelProperty == "buyersstatelabel") {
        this[selectedOptionName] = option;
        this[searchQueryName] = option.name;
      }
      if (labelProperty == "buyersregistrationlabel") {
        this[selectedOptionName] = option;
        this[searchQueryName] = option.buyersregistrationlabel;
      }
      if (labelProperty == "buyerplaceofsupplylabel") {
        this[selectedOptionName] = option;
        this[searchQueryName] = option.name;
        this.final_ledgerEntries = [];
        this.AddNewTaxesListDropdown = []
        this.gst_calculation();
        if (this.AddOtherLedgersListDropdown.length != 0) {
          this.other_gst_calculation();
        }
      }
    },
    AdvancedDropclearSearch(searchQueryName, dropdownType) {
      if (dropdownType == "BuyerName") {
        this.buyerSearch = "";
        this.buyerDetails();
        this.$nextTick(() => {
          this.$refs.buyersnameInput.focus();
        });
        setTimeout(() => {
          this.buyersnameFilteredOptions = [...this.buyersnameOptions];
        }, 500);
      }
      if (dropdownType == "consigneeName") {
        this.buyerSearch = "";
        this.buyerDetails();
        this.$nextTick(() => {
          this.$refs.consigneenameInput.focus();
        });
        setTimeout(() => {
          this.buyersnameFilteredOptions = [...this.buyersnameOptions];
        }, 500);
      }
      if (dropdownType == "buyerCountry") {
        this.countrysearch = "";
        this.countryDetails();
        this.buyerplaceofsupplySearchQuery = "";
        this.$nextTick(() => {
          this.$refs.buyercountryInput.focus();
        });
        setTimeout(() => {
          this.buyercountryFilteredOptions = [...this.CountryData];
        }, 500);
      }
      if (dropdownType == "consigneeCountry") {
        this.countrysearch = "";
        this.countryDetails();
        this.$nextTick(() => {
          this.$refs.consigneeCountryInput.focus();
        });
        setTimeout(() => {
          this.consigneecountryFilteredOptions = [...this.CountryData];
        }, 500);
      }
      if (dropdownType == 'buyerRegistration') {
        this.$nextTick(() => {
          this.$refs.buyerregistrationInput.focus();
        });
      }
      if (dropdownType == 'buyerState') {
        this.$nextTick(() => {
          this.$refs.buyerstateInput.focus();
        });
      }
      if (dropdownType == "buyerplaceofsupply") {
        this.$nextTick(() => {
          this.$refs.buyerplaceofsupplyInput.focus();
        });
      }
      this[searchQueryName] = "";
      const dropdownName = searchQueryName.replace(
        "SearchQuery",
        "DropdownOpen"
      );
      this.AdvancedDroptoggleDropdown(dropdownName, true);
    },
    AdvancednavigateDropdown(filteredOptionsName, activeIndexName, step) {
      const options = this[filteredOptionsName];
      let newIndex = this[activeIndexName] + step;
      if (newIndex < 0) newIndex = options.length - 1;
      if (newIndex >= options.length) newIndex = 0;
      this[activeIndexName] = newIndex;
    },
    AdvancedselectActiveOption(
      filteredOptionsName,
      activeIndexName,
      selectedOptionName,
      searchQueryName,
      labelProperty,
      nextDropdownRef
    ) {
      const options = this[filteredOptionsName];
      const activeIndex = this[activeIndexName];
      if (activeIndex >= 0 && activeIndex < options.length) {
        const selectedOption = options[activeIndex];
        this.AdvancedDropselectOption(
          selectedOptionName,
          searchQueryName,
          selectedOption,
          labelProperty
        );
        // Focus and open the next dropdown if specified
        if (nextDropdownRef) {
          this.$refs[nextDropdownRef].focus();
          this.AdvancedDroptoggleDropdown(nextDropdownRef + "Open", true);
        }
      }
    },
    focusConsigneeCountryInput() {
      this.$refs.consigneeCountryInput.focus();
      this.AdvancedDroptoggleDropdown("consigneecountryDropdownOpen", true);
    },

    toggleAdvancedSettings() {
      this.isAdvancedSettingsOpen = !this.isAdvancedSettingsOpen;
    },

    LogineWayButton() {
      // this.$bvModal.hide('EWayLoginModal');
      // this.$bvModal.show('eWayBillDetailsModal');
    },
    checkLoginButtonState() {
      // Enable button only if all inputs are filled
      this.isButtonDisabledLogin =
        !this.gstinneweWay || !this.usernameValue || !this.passwordValue;
    },
    togglePasswordVisibility() {
      this.passwordVisibleeWayLogin = !this.passwordVisibleeWayLogin;
    },
    onSlideStart() {
      console.log("Slide is starting");
    },
    onSlideEnd() {
      console.log("Slide transition has ended");
    },
    // ----------eway code functions---------

    // function to check for login or to directly open the eway form
    // checkLogin(){
    //   this.advancedError = {}
    //   this.stockItemsError = {}
    //   this.errors ={}
    //   this.error_tax = []
    //   this.BuyerstateDetails()

    //   this.AddNewItemList.forEach((value, key) => {

    //     if (value.tableitemsSearchQuery == "Search Item" || value.tableitemsSearchQuery == "" || value.tableitemsSearchQuery == undefined) {
    //        this.stockItemsError["tableitemsSearchQuery"] = "Please select item";
    //        this.errors["tableitemsSearchQuery"] = "Please select item";

    //      }
    //      if (value.itemquantity == "" || value.itemquantity == "0") {

    //        this.stockItemsError["itemquantity"] = "Please enter item quantity";
    //        this.errors["itemquantity"] = "Please enter item quantity";

    //      }
    //      if (value.itemrate == "" || value.itemrate == "0" || isNaN(value.itemrate)) {

    //        this.stockItemsError["itemrate"] = "Please enter item rate";
    //        this.errors["itemrate"] = "Please enter item rate";

    //      }
    //      if (value.selectedgodownsOption == "") {

    //        this.stockItemsError["selectedgodownsOption"] = "Please select godown";
    //        this.errors["selectedgodownsOption"] = "Please select godown";

    //      }

    //  });

    //      this.AddNewTaxesListDropdown.forEach((value, key) => {

    //        if(!value.addtaxesSearchQuery){
    //          if (!this.error_tax.addtaxesSearchQuery) {
    //        this.error_tax.addtaxesSearchQuery = {}; // Create an object to store individual errors for each select field
    //      }
    //      this.stockItemsError["addtaxesSearchQuery"] = "Tax amount is required"
    //      this.error_tax.addtaxesSearchQuery[key] = "Tax is required";
    //      this.errors.addtaxesSearchQuery[key] = "Tax is required";

    //        }
    //        if(value.amount == ""){
    //          if (!this.error_tax.amount) {
    //        this.error_tax.amount = {}; // Create an object to store individual errors for each select field
    //      }
    //          this.stockItemsError["amount"] = "Tax amount is required"
    //          this.error_tax.amount[key] = "Tax amount is required";
    //          this.errors["amount"] = "Tax amount is required"

    //        }

    //   });

    //   this.ledger_array.forEach((value, key) => {

    //   if (value.ledger_name == "" || value.ledger_name == undefined) {
    //     this.addLedger_error["selectLedger"] = "";
    //     this.addLedger_error["selectLedger"] = "Please select Search Other Ledger";
    //     this.stockItemsError["selectLedger"] = "Please select Search Other Ledger";
    //     this.errors["selectLedger"] = "Please select Search Other Ledger";

    //   }
    //   if(value.amount == "" || parseFloat(value.amount) <= 0) {
    //     this.addLedger_error["ledgerAmount"] = "";
    //     this.addLedger_error["ledgerAmount"] = "Please enter ledger amount";
    //     this.stockItemsError["ledgerAmount"] = "Please enter ledger amount";
    //     this.errors["ledgerAmount"] = "Please enter ledger amount";

    //   }

    // });
    //   if((this.dispatch_doc_no == "" || this.dispatch_doc_no == "Select") && this.dispatch_shipping_date != ''){
    //     this.advancedError["dispatch_doc_no"] = "Dispatch doc no. required"
    //     this.stockItemsError["dispatch_doc_no"] = "Dispatch doc no. required"
    //     this.errors["dispatch_doc_no"] = "Dispatch doc no. required"

    //   }
    //   if(this.dispatch_shipping_date == "" && this.dispatch_doc_no != '' ){
    //       this.advancedError["dispatch_shipping_date"] = "Please Select Shipping Date."
    //       this.stockItemsError["dispatch_shipping_date"] = "Please Select Shipping Date."
    //       this.errors["dispatch_shipping_date"] = "Please Select Shipping Date."
    //     }
    //   if(this.order_date == "" && this.order_no != ''){
    //       this.advancedError["order_date"] = "please select order date"
    //       this.stockItemsError["order_date"] = "please select order date"
    //       this.errors["order_date"] = "please select order date"
    //     }
    //   if(this.order_no == "" && this.order_date != '')
    //    {
    //       this.advancedError["order_no"] = "please select order No."
    //       this.stockItemsError["order_no"] = "please select order No."
    //       this.errors["order_no"] = "please select order No."
    //     }
    //     if(this.BuyerGstin == ''){
    //       this.advancedError.BuyerGstin = "Buyer's GST number is mandatory for e-way/e-invoice."
    //       this.errors.BuyerGstin = "Buyer's GST number is mandatory for e-way/e-invoice."

    //     }
    //     if(this.consigneeGstin == ''){
    //       this.advancedError.consigneeGstin = "Consignee GST number is mandatory for e-way/e-invoice."
    //       this.errors.consigneeGstin = "Consignee GST number is mandatory for e-way/e-invoice."

    //     }
    //     if(this.BuyerPostalCode == ''){
    //       this.advancedError.BuyerPostalCode = "Buyer's postal code is mandatory for e-way/e-invoice."
    //       this.errors.BuyerPostalCode = "Buyer's postal code is mandatory for e-way/e-invoice."

    //     }
    //     if(this.consigneePostalCode == ''){
    //       this.advancedError.consigneePostalCode = "consignee PostalCode postal code is mandatory for e-way/e-invoice."
    //       this.errors.consigneePostalCode = "consignee PostalCode postal code is mandatory for e-way/e-invoice."

    //     }

    //     if(Object.keys(this.errors).length === 0){
    //       this.getGspSearchFunction()
    //       setTimeout(() => {
    //         if(this.userName == '' && this.Password == ''){
    //           this.$bvModal.show('EWayLoginModal');
    //         }
    //        else{
    //         this.$bvModal.hide('EWayLoginModal');
    //         this.$bvModal.show('eWayBillDetailsModal');
    //         }
    //        }, 1000);
    //       this.OpenEwayForm()
    //     }

    // },
    getGspSearchFunction() {
      this.loading = true;

      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        gstIn: localStorage.getItem("companyGstNumber"),
        requestFrom: "WEB",
        isStaging: true,
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
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          Common.getStatusForActionFailed(err.response.status);
        });
    },
    updateFlag() {
      this.TransporterNameValueText = "";
      this.TransporterNameValue = "";
      this.TransportIdValue = "";
      this.isButtonChecked = !this.isButtonChecked;
      console.log(this.isButtonChecked, "hi button");
    },
    UpdateGSP() {
      // this.Login_error = {}
      // if(this.usernameValue == ''){
      //   this.Login_error.userNameError = "User Name is required"
      // }
      // if(this.passwordValue == ''){
      //   this.Login_error.passwordError = "Password is required"
      // }
      // if (Object.keys(this.Login_error).length === 0) {
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        gstIn: localStorage.getItem("companyGstNumber"),
        username: this.usernameValue,
        password: this.passwordValue,
        isEinvoice: this.eInvoiceStatusValue == "Yes" ? true : false,
        // isStaging: true
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.UpdateGSP(data, headers)
        .then((response) => {
          if (response.data.status == "200") {
            this.$bvModal.hide("EWayLoginModal");
            this.$bvModal.show("eWayBillDetailsModal");
          } else {
            this.Eway_Error.UpdateGSPError = response.data.message;
          }
        })
        .catch((err) => {
          this.loading = false;
        });
      // }
    },
    updateSelectedSupply() {
      if (this.RadioValue === "Outward") {
        this.selectedSupply = "o";
        console.log(this.selectedSupply, "if condition");
      } else {
        this.selectedSupply = "I";
        console.log(this.selectedSupply, "else condition");
      }
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
      } else if (data == "Recipient not known") {
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
      } else if (data == "For own Use") {
        this.documentTypeData = [
          {
            code: "CHL",
            description: "Delivery Challan",
          },
        ];
      } else if (data == "Exhibition or fairs") {
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
      // if (this.documentTypeData.length > 0) {
      //   this.DocumentTypeValue = this.documentTypeData[0].description;
      // }
    },
    OpenEwayForm() {
      this.getGspSearchFunction();
      // this.EwayPopup = true
      this.onlyEway = true;
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
          console.log(this.subSupplyTypeData, "subSupplyTypeData");
        })
        .catch(() => {
          this.SupplyTypeChanged = [];
        });
      this.getTransporterLedgersFunction();
    },
    DocumentCodeFunction(event) {
      const Selected = this.documentTypeData.find(
        (data) => data.description === this.DocumentTypeValue
      );
      this.selectedDocCode = Selected ? Selected.code : "";
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

      console.log(this.TransportIdValue, "TransportIdValue");
    },

    transportModeCode(event) {
      const Selected = this.TransportMode.find(
        (data) => data.description === this.TransportModeValue
      );
      this.selectedTranModeCOde = Selected ? Selected.code : "";
      console.log(this.selectedTranModeCOde, "selectedTranModeCOde");
    },
    VehicleTypeModeCode(event) {
      const Selected = this.VehicleType.find(
        (data) => data.description === this.VehicleTypeValue
      );
      this.selectedVehicleTypeCOde = Selected ? Selected.code : "";
      console.log(this.selectedVehicleTypeCOde, "looooooo");
    },
    myVouchersPdfFOrEway() {
      if (this.onlyEway) {
        var data = {
          voucherId: this.VoucherIDValue,
          company_id: localStorage.getItem("companyId"),
          _userId: localStorage.getItem("customerId"),
          requestFrom: "WEB",
          isEway: true,
        };
      } else {
        var data = {
          voucherId: this.VoucherIDValue,
          company_id: localStorage.getItem("companyId"),
          _userId: localStorage.getItem("customerId"),
          requestFrom: "WEB",
          isEinvoice: true,
        };
      }
      if (this.EwayandEinvoice) {
        var data = {
          voucherId: this.VoucherIDValue,
          company_id: localStorage.getItem("companyId"),
          _userId: localStorage.getItem("customerId"),
          requestFrom: "WEB",
          isEinvoice: true,
          isEway: true,
        };
      }

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
        .catch(() => {
          this.loading = false;
        });
    },
    generateEway() {
      this.Eway_Error = {};
      if (this.TransporterNameValue === "" && !this.isButtonChecked) {
        this.Eway_Error.transporterName = "Please select a transporter name.";
      }
      if (this.TransportIdValue == "") {
        this.Eway_Error.transporterId = "Please select a transporter ID.";
      }
      if (this.SubSupplyTypeValue == "") {
        this.Eway_Error.subSupplyTypeData = "Please select Sub Supply Type";
      }
      if (this.DocumentTypeValue == "") {
        this.Eway_Error.documentTypeData = "Please select Document Type";
      }
      if (this.TransportModeValue == "") {
        this.Eway_Error.TransportMode = "Please select Mode";
      }
      if (this.TransportModeValue != "Road" && this.voucherNumber == "") {
        this.Eway_Error.voucherNumber = "Please select Document No.";
      }
      if (this.TransportModeValue == "Road" && this.vehicleNumberValue == "") {
        this.Eway_Error.vehicleNumberValue = "Please select Document No.";
      }

      if (Object.keys(this.Eway_Error).length === 0) {
        this.add_Sales();
        setTimeout(() => {
          const data = {
            isexisting: false,
            isStaging: true,
            _userId: localStorage.getItem("customerId"),
            company_id: localStorage.getItem("companyId"),
            gstIn: localStorage.getItem("companyGstNumber"),
            voucherId: this.VoucherIDValue,
            irn: "",
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
            transDocNo: this.voucherNumber,
            transDocDate: moment(String(this.transDocDate)).format(
              "DD/MM/YYYY"
            ),
            vehicleNo: this.vehicleNumberValue,
            vehicleType: this.selectedVehicleTypeCOde,
            isIgst: this.igstCheckforEwayEinvoice,
            items: [
              {
                guid: this.SelectedItemGuid,
                hsnCode: this.ItemHsnCode,
                taxRate: this.final_object[0].taxes[0].ratePer,
              },
            ],
            requestFrom: "WEB",
          };
          const headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: localStorage.getItem("webAuthToken"),
          };
          Api.generateEway(data, headers)
            .then((response) => {
              console.log(response.data.data);
              this.myVouchersPdfFOrEway();
              this.isTransfer = 0;
              console.log(this.isTransfer, "istransfer in generate eway");
            })
            .catch(() => {
              this.loading = true;
            });
        }, 1000);
      }
    },
    //       generateEinvoice(){
    //         this.advancedError = {}
    //       this.stockItemsError = {}
    //       this.errors ={}

    //       if((this.dispatch_doc_no == "" || this.dispatch_doc_no == "Select") && this.dispatch_shipping_date != ''){
    //         this.advancedError["dispatch_doc_no"] = "Dispatch doc no. required"
    //         this.stockItemsError["dispatch_doc_no"] = "Dispatch doc no. required"
    //         this.errors["dispatch_doc_no"] = "Dispatch doc no. required"

    //       }
    //       if(this.dispatch_shipping_date == "" && this.dispatch_doc_no != '' ){
    //           this.advancedError["dispatch_shipping_date"] = "Please Select Shipping Date."
    //           this.stockItemsError["dispatch_shipping_date"] = "Please Select Shipping Date."
    //           this.errors["dispatch_shipping_date"] = "Please Select Shipping Date."
    //         }
    //       if(this.order_date == "" && this.order_no != ''){
    //           this.advancedError["order_date"] = "please select order date"
    //           this.stockItemsError["order_date"] = "please select order date"
    //           this.errors["order_date"] = "please select order date"
    //         }
    //       if(this.order_no == "" && this.order_date != '')
    //        {
    //           this.advancedError["order_no"] = "please select order No."
    //           this.stockItemsError["order_no"] = "please select order No."
    //           this.errors["order_no"] = "please select order No."
    //         }
    //         if(this.BuyerGstin == ''){
    //           this.advancedError.BuyerGstin = "Buyer's GST number is mandatory for e-way/e-invoice."
    //           this.errors.BuyerGstin = "Buyer's GST number is mandatory for e-way/e-invoice."

    //         }
    //         if(this.consigneeGstin == ''){
    //           this.advancedError.consigneeGstin = "Consignee GST number is mandatory for e-way/e-invoice."
    //           this.errors.consigneeGstin = "Consignee GST number is mandatory for e-way/e-invoice."

    //         }
    //         if(this.BuyerPostalCode == ''){
    //           this.advancedError.BuyerPostalCode = "Buyer's postal code is mandatory for e-way/e-invoice."
    //           this.errors.BuyerPostalCode = "Buyer's postal code is mandatory for e-way/e-invoice."

    //         }
    //         if(this.consigneePostalCode == ''){
    //           this.advancedError.consigneePostalCode = "consignee PostalCode postal code is mandatory for e-way/e-invoice."
    //           this.errors.consigneePostalCode = "consignee PostalCode postal code is mandatory for e-way/e-invoice."

    //         }

    //         if(Object.keys(this.errors).length === 0){
    //       this.getGspSearchFunction()
    //       setTimeout(() => {

    //         if(this.userName !== '' && this.Password !== ''){

    //           this.add_Sales()
    //           setTimeout(() => {
    //             var data = {
    //               isexisting: false,
    //               isStaging:true,
    //               _userId: localStorage.getItem("customerId"),
    //               company_id: localStorage.getItem("companyId"),
    //               gstIn: localStorage.getItem("companyGstNumber"),
    //               voucherId: this.VoucherIDValue,
    //               irn: "",
    //               username: this.userName,
    //               password: this.Password,
    //               supplyType: "B2B", //o - eway ---B2B --- einvoice
    //               subSupplyType: "",
    //               subSupplyDesc: "",
    //               docType: "INV", //document type ka code ayega
    //               transporterId: "", //part A
    //               transporterName:"",
    //               transactionType: 1,
    //               transMode: "",
    //               transDocNo: "",
    //               transDocDate: "",
    //               vehicleNo: "",
    //               vehicleType: "",

    //               isIgst: this.igstCheckforEwayEinvoice,
    //               items: [
    //                 {
    //                   guid: this.SelectedItemGuid,
    //                   hsnCode: this.ItemHsnCode,
    //                   taxRate: this.final_object[0].taxes[0].ratePer
    //                 }

    //               ],
    //               requestFrom: "WEB"
    //             }
    //             const headers = {
    //               "Access-Control-Allow-Origin": "*",
    //               "Content-Type": "application/json",
    //               token: localStorage.getItem("webAuthToken"),
    //             };
    //             Api.generateEinvoice(data , headers)
    //             .then((response)=>{
    //               console.log(response.data.data)
    //               this.myVouchersPdfFOrEway()
    //               this.isTransfer = 0
    //               console.log(this.isTransfer, "istransfer in generate eway")
    //             })
    //             .catch(()=>{
    //               this.loading = true
    //             })

    //           }, 1000);
    //         }
    //         else{
    //           this.$bvModal.show('EWayLoginModal');
    //         }
    //       }, 200);
    //     }
    //   },
    async getLedgerParentType(type) {
      const data = {
        _userId: localStorage.getItem('customerId'),
        type: "parentTypeTracker",
        voucherType: "Purchase",
        ledgerType: type,
        requestFrom: "WEB"
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      const response = await Api.getAllPdfTemplatesConfigurations(data, headers);
      if (type == "Party A/C Name") {
        this.parentTypeStore.partyName = response.data.data.value;
      }
      else if (type == 'Other Ledgers') {
        this.parentTypeStore.otherLedger = response.data.data.value;
      }
      else if (type == 'Purchase Ledger') {
        this.parentTypeStore.voucherTypeLedger = response.data.data.value;
      }

    },

     cancelOrDeleteVoucher() {
       GoogleAnalytics.PurchaseOrder_Cancel_Voucher();
      // Helper function to convert to integer
      function convertToInteger(value) {
        return parseFloat(value); 
      }

      // Convert amounts in partyLedgerEntry
      if (this.partyLedgerEntry.amount) {
        this.partyLedgerEntry.amount = convertToInteger(this.partyLedgerEntry.amount);
      }
      if (this.partyLedgerEntry.billAllocationdetails) {
      this.partyLedgerEntry.billAllocationdetails = this.partyLedgerEntry.billAllocationdetails.map(bill => ({
        ...bill,
        amount: convertToInteger(bill.amount),
        billId: bill.billId != null ? bill.billId.toString() : '',
      }));
    }
      // Convert amounts in final_ledgerEntries
      this.final_ledgerEntries = this.final_ledgerEntries.map(entry => {
        if (entry.amount) {
          entry.amount = convertToInteger(entry.amount);
        }

        if (entry.billAllocationdetails) {
        entry.billAllocationdetails = entry.billAllocationdetails.map(bill => ({
          ...bill,
          amount: convertToInteger(bill.amount),
          billId: bill.billId != null ? bill.billId.toString() : '',
        }));
      }

        return entry;
      });

        // Prepare data
        const data = {
          requestFrom: "WEB",
          company_id: localStorage.getItem("companyId"),
          _userId: localStorage.getItem("customerId"),
          voucherType: this.$route.params.voucherTypeName,
          voucherDate: moment(String(this.newinvoiceDate)).format("YYYY-MM-DD"),
          StockItemEntries: this.tempItmesObject,
          ledgerEntries: [this.partyLedgerEntry, ...this.final_ledgerEntries],
          partyLedgerName: this.partynameSearchQuery,
          voucherNumber: this.voucherNumber,
          masterId: this.masterId,
          totalAmount: parseInt(this.grandTotal).toString(), // convert grandTotal to integer
          action: "Cancel",
          parent: "Purchase Order",
          // voucherId: this.$route.params.voucher_id,
        };

        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };

        Api.cancelOrDeleteVoucher(data, headers)
          .then((response) => {
            if (response.data.status == 200) {
              this.handleRoute();
            }
          })
          .catch((err) => {
            Common.getStatusForActionFailed(err.response.status);
          });
      }
  },
  beforeMount() {
    this.getVoucherType();
  },

  mounted() {
            this.isVoucherEditable = String(this.$route.query.isEdit) === '1';
                    this.fromMyVoucher = this.$route.query.from == 'voucher';


        DecimalValue.getUnitsForQty().then((units)=>{
          this.unitsForQty = units
           })
    if (localStorage.getItem('isWrite_isOptionalVoucher') === "false") {
      this.isOptionalVoucherEnabled = false;
    }
    else {
      this.isOptionalVoucherEnabled = true;
    }
    this.getLedgerParentType('Party A/C Name');
    this.getLedgerParentType('Purchase Ledger');
    this.getLedgerParentType('Other Ledgers');
    if (this.$route.params.voucher_id !== undefined) {
      this.selectionDone = true
      this.get_purchase_data();
      this.getlocationlist();
      this.isAdvancedSettingsOpen = true;
      setTimeout(() => {
        this.$refs.voucherInput.blur();
      }, 200); // Add a delay to ensure the input is rendered
    }
    this.getaddmoreledger();
    this.InvoiceConfigurations();
    this.buyerDetails();
    this.updateSelectedSupply();
    this.check_price_levels();
    this.GetCompanyDetailsFunction();
    this.validation();
    this.referenceFilteredOptions = this.referenceOptions;
    this.otherledgersFilteredOptions = this.otherledgers2Options;
    this.addtaxesFilteredOptions = this.addtaxes3Options;
    this.buyerstateFilteredOptions = this.stateData;
    this.buyerregistrationFilteredOptions = this.buyerregistrationOptions;
    this.consigneestateFilteredOptions = this.stateData;
      this.voucherDropdownOpen = this.isVoucherEditable  ? false : true;

    this.$nextTick(() => {
      this.$refs.voucherInput.focus();
    });
    this.isPaid = localStorage.getItem("isPaid");
    if (this.consigneenameSearchQuery == '') {
      this.consigneenameSearchQuery = this.CompanyNameData
    }
  },
};
</script>

<style scoped>
.disabled-option {
  color: gray;
  pointer-events: none;
  /* Prevent clicking */
  opacity: 0.5;
}

.active {
  background-color: #f0f0f0;
}

/* Customize scrollbar */
ul.SetScrollbarWidthSize::-webkit-scrollbar {
  width: 3px;
}

ul.SetScrollbarWidthSize::-webkit-scrollbar-track {
  background: #dbdbdb !important;
}

ul.SetScrollbarWidthSize::-webkit-scrollbar-thumb {
  background-color: #9c9c9c !important;
  border-radius: 6px;
}

ul.SetScrollbarWidthSize::-webkit-scrollbar-thumb:hover {
  background: #e4e4e4 !important;
}

.disabled-link {
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
