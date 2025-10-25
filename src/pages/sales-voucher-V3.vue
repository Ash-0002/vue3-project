<!-- eslint-disable prettier/prettier -->
/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section class="positio-relative">
    <div class="page-header-title-box bg-green-header-card">
      <div class="row align-items-center">
        <div class="col-lg-3 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0" v-if="this.$route.params.voucher_id"  >
            <h3 class="color-white-text" style="margin-bottom:0 !important;">Update Sales Voucher</h3>
          </div>
          <div v-else  class="company_name sales_c_name mobile_padding_left_0"  >
            <h3 class="color-white-text" style="margin-bottom:0 !important;">Create Sales Voucher</h3>
          </div>
        </div>
      </div>
    </div>
    <!------------------->
    <div class="TopNewBackEntrySection mt-4 ps-1 pe-1">
      <div class="TopInnerBackEntrySection">
        <div class="qrl_error_box" v-if="stockItemsError">

          <p v-if="stockItemsError.tableitemsSearchQuery">{{ stockItemsError.tableitemsSearchQuery }}</p>
          <p v-if="stockItemsError.itemquantity">{{ stockItemsError.itemquantity }}</p>
          <p v-if="stockItemsError.itemrate">{{ stockItemsError.itemrate }}</p>
          <p v-if="stockItemsError.godownsData">{{ stockItemsError.godownsData }}</p>
          <p v-if="advancedError.dispatch_shipping_date">{{ advancedError.dispatch_shipping_date }}</p>
          <p v-if="advancedError.dispatch_doc_no">{{ advancedError.dispatch_doc_no }}</p>



        </div>
        <div class="row">
          <div class="col-lg-3 col-12">
            <div class="VoucherNumberNewEntry">
              <p class="text-secondary mb-0">Voucher Number</p>
              <p class="mb-0 widthsetvouchernumber">{{ this.voucherNumber }}</p>
              <p class="mb-0">
                <a href="javascript:void(0);" @click="toggleEdit">
                  <i class="fa fa-pencil text-dark" aria-hidden="true"></i>
                </a>
              </p>
              <div v-if="isEditing" class="editVoucherbox" v-click-outside="closeEvent">
                <div class="invoice_radio_button">
                  <input
                    type="radio"
                    class="invoice_radio"
                    id="defaultRadio"
                    name="radioGroup"
                    value="default"
                    v-model="selectedOptionradio"
                    autocomplete="off"
                  />
                  <label for="defaultRadio" class="fontssetlabel"
                    >Default</label
                  >
                </div>
                <div class="custominputboxnewentryradio">
                  <div class="invoice_radio_button">
                    <input
                      type="radio"
                      class="invoice_radio"
                      id="customRadio"
                      name="radioGroup"
                      value="custom"
                      v-model="selectedOptionradio"
                      autocomplete="off"
                    />
                    <label for="customRadio" class="fontssetlabel"
                      >Custom</label
                    >
                  </div>
                  <div class="onlyinputcustomradio">
                    <input
                      type="text"
                      :disabled="isDefaultSelected"
                      placeholder="Prefix"
                      class="form-control me-2"
                      v-model="custom_prefix"
                    />
                    <input
                      type="number"
                      :disabled="isDefaultSelected"
                      placeholder="Voucher no"
                      class="form-control me-2"
                      v-model="custom_Voucher_number"
                      @keypress="allowOnlyNumbers"
                    />
                    <input
                      type="text"
                      :disabled="isDefaultSelected"
                      placeholder="Suffix"
                      class="form-control"
                      v-model="custom_suffix"
                    />
                  </div>
                </div>
                <div class="mt-3 border-top pt-3 pb-3">
                  <!-- Reference Type Dropdown -->
                  <div class="Referencetypesearch">
                    <span class="borderlinetextdropdown">Reference Type</span>
                    <input
                      type="text"
                      v-model="referenceSearchQuery"
                      @focus="ReferencetoggleDropdown(true)"
                      @blur="ReferencetoggleDropdown(false)"
                      @input="ReferencefilterOptions"
                      @keydown="handleReferenceKeydown"
                      placeholder="Search..."
                      ref="referenceInput"
                    />
                    <button
                      v-if="referenceSearchQuery"
                      @click="ReferenceclearSearch"
                      class="inputcrossicon"
                    >
                      <i class="fa fa-times"></i>
                    </button>
                    <ul v-if="referenceDropdownOpen">
                      <li
                        v-for="(option, index) in referenceFilteredOptions"
                        :key="option.value"
                        :class="{ active: index === referenceActiveIndex }"
                        @mousedown.prevent="ReferenceselectOption(option)"
                      >
                        {{ option.label }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="SAveCancelButton text-right border-top pt-3">
                  <button @click="toggleEdit" class="VoucherCancelButton me-2">
                    Cancel
                  </button>
                  <button @click="saveEdit" class="VoucherSaveButton">
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div class="newbackentryinvoicedate mt-3 mb-3">
              <p class="text-secondary mb-0">Voucher Date</p>
              <div class="datepicker_image_set">
                <Datepicker
                  v-model="newinvoiceDate"
                  format="dd MMM yyyy"
                  placeholder="03 Nov 2023"
                  :disabled="isTransfer == 1"
                ></Datepicker>
                <span class="sales_date_img_new">
                  <img
                    src="/assets/images/1.0/sales/calendar.svg"
                    class="img-fluid"
                  />
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-12">
            <div class="row">
              <div class="col-lg-3 col-12 mb-3">
                <!-- Voucher Type Dropdown -->
                <div class="OtherTypeSearchDropdown">
                  <span class="borderlinetextdropdown backgroundgradient"
                    >Voucher Type</span
                  >
                  <input
                    ref="voucherInput"
                    type="text"
                    v-model="voucherSearchQuery"
                    @focus="toggleDropdown('voucher', true)"
                    @blur="toggleDropdown('voucher', false)"
                    @input="filterOptions($event, 'voucher')"
                    @keydown.down.prevent="navigateDropdown('voucher', 1)"
                    @keydown.up.prevent="navigateDropdown('voucher', -1)"
                    @keydown.enter.prevent="selectActiveOption('voucher')"
                    placeholder="Select Type"
                    :disabled="isTransfer == 1"
                  />
                  <button
                    v-if="voucherSearchQuery"
                    @click="clearSearch('voucher')"
                    class="inputcrossicon"
                  >
                    <i class="fa fa-times"></i>
                  </button>
                  <i v-else class="fa fa-search input-search-icon"></i>
                  <ul v-if="voucherDropdownOpen">
                    <li
                      v-for="(option, index) in voucherFilteredOptions"
                      :key="option.voucherTypeName"
                      :data-id="option.id"
                      @mousedown="selectOption('voucher', option)"
                      @click="selectOption('voucher', option)"
                      :class="{ active: index === voucherActiveIndex }"
                      v-scroll-into-view="index === voucherActiveIndex"
                    >
                      {{ option.voucherTypeName }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-12 mb-3">
                <!-- Party name Dropdown -->
                <div class="OtherTypeSearchDropdown">
                  <span class="borderlinetextdropdown backgroundgradient"
                    >Party Name</span
                  >
                  <input
                    ref="partynameInput"
                    type="text"
                    v-model="partynameSearchQuery"
                    @focus="toggleDropdown('partyname', true)"
                    @blur="toggleDropdown('partyname', false)"
                    @input="filterOptions($event, 'partyname')"
                    @keydown.down.prevent="navigateDropdown('partyname', 1)"
                    @keydown.up.prevent="navigateDropdown('partyname', -1)"
                    @keydown.enter.prevent="selectActiveOption('partyname')"
                    placeholder="Select Party"
                    :disabled="isTransfer == 1"

                  />
                  <button
                    v-if="partynameSearchQuery"
                    @click="clearSearch('partyname')"
                    class="inputcrossicon"
                  >
                    <i class="fa fa-times"></i>
                  </button>
                  <i v-else class="fa fa-search input-search-icon"></i>
                  <ul v-if="partynameDropdownOpen">
                    <li
                      v-for="(option, index) in FilteredPartyData"
                      :key="index"
                      :data-id="option.ledgerName"
                      @mousedown="selectOption('partyname', option)"
                      @click="selectOption('partyname', option)"
                      :class="{ active: index === partynameActiveIndex }"
                      v-scroll-into-view="index === partynameActiveIndex"
                    >
                      <div class="row">
                        <div class="col-8">
                          <div class="partynameleftsearchabledrpdwn text-left">
                            <p class="mb-0">{{ option.ledgerName }}</p>
                          </div>
                        </div>
                        <div class="col-4">
                          <div
                            class="partynamerightsearchabledrpdwn text-right"
                          >
                            <p class="mb-0">
                              <span class="font_sans">₹</span
                              >{{ option.amount }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-12 mb-3">
                <!-- Ledger Type Dropdown -->
                <div class="OtherTypeSearchDropdown">
                  <span class="borderlinetextdropdown backgroundgradient"
                    >Ledger Type</span
                  >
                  <input
                    ref="ledgertypeInput"
                    type="text"
                    v-model="ledgertypeSearchQuery"
                    @focus="toggleDropdown('ledgertype', true)"
                    @blur="toggleDropdown('ledgertype', false)"
                    @input="filterOptions($event, 'ledgertype')"
                    @keydown.down.prevent="navigateDropdown('ledgertype', 1)"
                    @keydown.up.prevent="navigateDropdown('ledgertype', -1)"
                    @keydown.enter.prevent="selectActiveOption('ledgertype')"
                    placeholder="Select Ledger"
                    :disabled="isTransfer == 1"

                  />
                  <button
                    v-if="ledgertypeSearchQuery"
                    @click="clearSearch('ledgertype')"
                    class="inputcrossicon"
                  >
                    <i class="fa fa-times"></i>
                  </button>
                  <i v-else class="fa fa-search input-search-icon"></i>
                  <ul v-if="ledgertypeDropdownOpen">
                    <li
                      v-for="(option, index) in FilteredLedgerData"
                      :key="option.value"
                      :data-id="option.name"
                      @mousedown="selectOption('ledgertype', option)"
                      @click="selectOption('ledgertype', option)"
                      :class="{ active: index === ledgertypeActiveIndex }"
                      v-scroll-into-view="index === ledgertypeActiveIndex"
                    >
                      <div class="ledgertypeinnerdropdown text-left">
                        <p class="mb-0">{{ option.ledgerName }}</p>
                        <h6 class="mb-0">
                          GST Applicable:
                          <span>{{ option.gstApplicable }}</span> | Tax:
                          {{ option.tax }}%
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-12 mb-3">
                <!-- Price Level Dropdown -->
                <div v-if="usePriceLevels == 'Yes'" class="OtherTypeSearchDropdown">
                  <span class="borderlinetextdropdown backgroundgradient"
                    >Price Level</span
                  >
                  <input
                    ref="pricelevelInput"
                    type="text"
                    v-model="pricelevelSearchQuery"
                    @focus="toggleDropdown('pricelevel', true)"
                    @blur="toggleDropdown('pricelevel', false)"
                    @input="filterOptions($event, 'pricelevel')"
                    @keydown.down.prevent="navigateDropdown('pricelevel', 1)"
                    @keydown.up.prevent="navigateDropdown('pricelevel', -1)"
                    @keydown.enter.prevent="selectActiveOption('pricelevel')"
                    placeholder="Select Price Level"
                    :disabled="isTransfer == 1"

                  />
                  <button
                    v-if="pricelevelSearchQuery"
                    @click="clearSearch('pricelevel')"
                    class="inputcrossicon"
                  >
                    <i class="fa fa-times"></i>
                  </button>
                  <i v-else class="fa fa-search input-search-icon"></i>
                  <ul v-if="pricelevelDropdownOpen">
                    <li
                      v-for="(option, index) in FilteredPriceLevelData"
                      :key="option.value"
                      :data-id="option.name"
                      @mousedown="selectOption('pricelevel', option)"
                      @click="selectOption('pricelevel', option)"
                      :class="{ active: index === pricelevelActiveIndex }"
                      v-scroll-into-view="index === pricelevelActiveIndex"
                    >
                      {{ option.priceLevelName }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!------------------->
    <div v-if="ledgertypeSearchQuery" class="MiddleTableFormatBackEntry mt-3" v-show="Table_Format_Middle">
      <table width="100%" class="TableMiddleBackEntry">
        <thead>
          <tr>
            <th width="4%" class="text-center">No</th>
            <th width="20%" class="text-left">Items</th>
            <th width="10%" class="text-center">Qty</th>
            <th width="10%" class="text-center">Rate</th>
            <th width="8%" class="text-center">Disc %</th>
            <th width="14%" class="text-center">Godown</th>
            <th width="12%" class="text-center">Description</th>
            <th width="10%" class="text-center">Amount</th>
            <th width="8%" class="text-center">Tax Incl.</th>
            <th width="4%"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(addnewitem, index) in AddNewItemList"
            :key="addnewitem.id"
          >
            <td class="text-center">{{ index + 1 }}</td>
            <td class="text-left">
              <!-- Table Items Dropdown -->
              <div class="TableItemsserachableDropdown">
                <input
                  ref="tableitemsInput"
                  type="text"
                  v-model="AddNewItemList[index].tableitemsSearchQuery"
                  @focus="toggleTableItemsDropdown(index, true)"
                  @blur="toggleTableItemsDropdown(index, false)"
                  @input="filterTableItemsOptions($event, index)"
                  @keydown.down.prevent="
                    navigateTableItemsDropdown(
                      index,
                      'filterOptionData',
                      'tableitemsActiveIndex',
                      1
                    )
                  "
                  @keydown.up.prevent="
                    navigateTableItemsDropdown(
                      index,
                      'filterOptionData',
                      'tableitemsActiveIndex',
                      -1
                    )
                  "
                  @keydown.enter.prevent="
                    selectTableItemsActiveOption(
                      index,
                      'filterOptionData',
                      'tableitemsActiveIndex',
                      'tableitemsSearchQuery',
                      'tableitems'
                    )
                  "
                  placeholder="Select Item"
                  :disabled="isTransfer == 1"

                />
                <input type="hidden" v-model="addnewitem.item_guid" ref="hiddeninputitem_guid"
                            placeholder="" class="form-control only-input-disable-all-hide-overlay" />
                          <input type="hidden" v-model="addnewitem.item_id"
                            placeholder="" class="form-control only-input-disable-all-hide-overlay" />
                <button
                  v-if="AddNewItemList[index].tableitemsSearchQuery"
                  @click="clearTableItemsSearch(index)"
                  class="inputcrossicon"
                >
                  <i class="fa fa-times"></i>
                </button>
                <i v-else class="fa fa-search input-search-icon"></i>
                <ul v-if="AddNewItemList[index].tableitemsDropdownOpen">
                  <li
                    v-for="(option, optionIndex) in filterOptionData"
                    :key="option.value"
                    :class="{
                      active:
                        optionIndex ===
                        AddNewItemList[index].tableitemsActiveIndex,
                    }"
                    v-scroll-into-view="
                      optionIndex ===
                      AddNewItemList[index].tableitemsActiveIndex
                    "
                    @mousedown="selectTableItemsOption(option, index)"
                  >
                    <div class="row">
                      <div class="col-8">
                        <div class="itemsnamewithhsn">
                          <h6 class="mb-0">
                            {{ option.tableitemsSearchQuery }}
                          </h6>
                          <p class="mb-0">HSN Code: {{ option.hsncode }}</p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="tableitemsrightquantity text-right">
                          <p class="mb-0">
                            <span
                              :class="{
                                'color-green-item-text':
                                  option.color === 'green',
                                'color-red-item-text': option.color === 'red',
                              }"
                              >{{ option.quantity }}</span
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
            <td class="text-center">
              <div class="InnerTableBackEntrytdDiv">
                <input
                  ref="quantityInput"
                  type="number"
                  placeholder="0"
                  v-model="addnewitem.itemquantity"
                  @keydown="handleKeyDown"
                  v-on:keydown="disableArrowKeys"
                  v-on:wheel="disableMouseWheelScroll"
                  @keyup="new_rate($event, index), updateAmount(index)"
                  :disabled="isTransfer == 1"

                />
              </div>
            </td>
            <td class="text-center">
              <div class="InnerTableBackEntrytdDiv">
                <input
                  type="number"
                  placeholder="0"
                  v-model="addnewitem.itemrate"
                  @keydown="handleKeyDown"
                  v-on:keydown="disableArrowKeys"
                  v-on:wheel="disableMouseWheelScroll"
                  @keyup="updateAmount(index)"
                  :disabled="isTransfer == 1"


                />
              </div>
            </td>
            <td class="text-center">
              <div class="InnerTableBackEntrytdDiv">
                <input
                  type="number"
                  placeholder="0"
                  v-model="addnewitem.itemdiscount"
                  @keydown="handleKeyDown"
                  v-on:keydown="disableArrowKeys"
                  v-on:wheel="disableMouseWheelScroll"
                  @input="updateAmount(index)"
                  :disabled="isTransfer == 1"

                />
              </div>
            </td>
            <td class="text-center">
              <div class="InnerTableBackEntrytdDiv">
                <select @change="change_godown($event, index)" v-model="addnewitem.godownsData">
                  <option value="" disabled>Select Godown</option>
                  <option
                    v-for="godown in godownsData"
                    :key="godown.id"
                    :value="godown.name"
                  >
                    {{ godown.name }}
                  </option>
                </select>
              </div>
            </td>
            <td class="text-center">
              <div class="InnerTableBackEntrytdDiv">
                <input
                  type="text"
                  placeholder="Enter Notes"
                  v-model="addnewitem.itemdescription"
                  @input="change_description($event, index)"
                  :disabled="isTransfer == 1"

                />
              </div>
            </td>
            <td class="text-center">
              <div class="InnerTableBackEntrytdDiv">
                <input
                  type="number"
                  placeholder="0.00"
                  v-model="addnewitem.itemamount"
                  @keydown="handleKeyDown"
                  v-on:keydown="disableArrowKeys"
                  v-on:wheel="disableMouseWheelScroll"
                  :disabled="isTransfer == 1"

                />
              </div>
            </td>
            <td class="text-center">
              <div class="TaxInclusivecheckbox">
                <input
                  type="checkbox"
                  id="customCheckbox"
                  v-model="addnewitem.isChecked"
                  class="custom-checkbox"
                  @click="taxInclusive_calculation($event,index)  "
                  :disabled="isTransfer == 1"

                />
                <input type="hidden" v-model="addnewitem.gst_per" />
                <input type="hidden"  v-model="addnewitem.old_amount" />
              </div>
            </td>
            <td class="text-center">
              <div class="ActionDeleteIconNew">
                <a
                  href="javascript:void(0);"
                  class="color-red"
                  @click="removeNewItem(index)"
                  :class="{ disabled: index === 0 }"
                >
                  <i class="fa fa-trash"></i>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="NewItemNewBackEtry mt-2">
        <button :disabled="isTransfer == 1"
        class="" @click="AddNewItemClick">
          <i class="fa fa-plus me-2" aria-hidden="true"></i> ADD ITEM
        </button>
      </div>
    </div>
    <!------------------->
    <div class="NarrationTaxesDiv mt-2">
      <div class="row">
        <div class="col-lg-5 col-12">
          <div class="TaxesBGwhitebox mb-2" v-show="Bottom_Narration_Format">
            <div class="AddTaxesFlowNew">
              <label>Taxes</label>
              <a :disabled="isTransfer == 1"
              href="javascript:void(0);" @click="AddNewTaxes3Click">
                <span class="newaddplusnackentry"><i class="fa fa-plus me-2"></i> ADD </span>
              </a>
            </div>
            <div v-for="(addnewtaxes3, index) in AddNewTaxes3List" :key="addnewtaxes3.id" class="TaxesDropdownInner mt-2">
              <div class="row">
                <div class="col-lg-5 col-12">
                  <div class="TaxSelectoptionDropdown">
                    <div class="OtherwithTaxesserachableDropdown">
                      <input ref="addtaxes3Input" type="text" v-model="addnewtaxes3.addtaxes3SearchQuery"
                        @focus="toggleAddTaxes3Dropdown(index, true)" @blur="toggleAddTaxes3Dropdown(index, false)"
                        @input="filterAddTaxes3Options($event, index)"
                        @keydown.down.prevent="navigateAddTaxes3Dropdown(index, 'addtaxes3FilteredOptions', 'addtaxes3ActiveIndex', 1)"
                        @keydown.up.prevent="navigateAddTaxes3Dropdown(index, 'addtaxes3FilteredOptions', 'addtaxes3ActiveIndex', -1)"
                        @keydown.enter.prevent="selectAddTaxes3ActiveOption(index, 'addtaxes3FilteredOptions', 'addtaxes3ActiveIndex', 'addtaxes3SearchQuery', 'addtaxes3')"
                        placeholder="Select Item"
                        :disabled="isTransfer == 1"

                         />
                         <span class="error-validation" v-if="taxError.addtaxes3SearchQuery">{{
                         taxError.addtaxes3SearchQuery
                         }}</span>
                      <button                      
                    :disabled="isTransfer == 1"
                    v-if="addnewtaxes3.addtaxes3SearchQuery" @click="clearAddTaxes3Search(index)"
                        class="inputcrossicontaxes">
                        <i class="fa fa-times"></i>
                      </button>
                      <i v-else class="fa fa-search taxesledgerssearchicon"></i>
                      <ul v-if="addnewtaxes3.addtaxes3DropdownOpen">
                        <li v-for="(option, optionIndex) in addnewtaxes3.addtaxes3FilteredOptions" :key="option.value"
                          :class="{ 'active': optionIndex === addnewtaxes3.addtaxes3ActiveIndex }"
                          v-scroll-into-view="optionIndex === addnewtaxes3.addtaxes3ActiveIndex"
                          @mousedown="selectAddTaxes3Option(option, index) "
                           :data-guid="option.guid" :data-ledgerGroup="option.parentgroup"
                           :data-ledgerGroupParent="option.parent" :data-masterReservedName="option.masterReservedName"
                          >
                          <div class="row">
                            <div class="col-12">
                              <div class="itemsnamewithhsn otherledgers-searchable">
                                <h6 class="mb-0">{{ option.ledgerName }}</h6>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 col-12">
                  <div class="TaxesInputNewBackEntry">
                    <div class="ledgeramountwithdrdropdown">
                      <input type="number" placeholder="Amount" v-model="addnewtaxes3.amount" class="border-none"
                        @keydown="handleKeyDown" 
                        @keyup="tax_value_amount($event, index)"v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll" />
                    </div>
                    <span class="error-validation" v-if="taxError.amount">{{
                  taxError.amount
                }}</span>
                  </div>
                </div>
                <div class="col-lg-2 col-12">
                  <div class="Deleteicontaxesinner text-right pt-2">
                    <a href="javascript:void(0);" @click="removeNewTaxes3(index)">
                      <i class="fa fa-trash"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="TaxesBGwhitebox mb-2" v-show="Table_Format_Middle">
            <div class="AddTaxesFlowNew">
              <label>Ledgers</label>
              <a href="javascript:void(0);" @click="AddOtherLedgers2Click">
                <span class="newaddplusnackentry"><i class="fa fa-plus me-2"></i> ADD </span>
              </a>
            </div>
            <div v-for="(addotherledgers2, index) in AddOtherLedgers2List" :key="addotherledgers2.id" class="TaxesDropdownInner mt-2">
              <div class="row">
                <div class="col-lg-5 col-12">
                  <div class="TaxSelectoptionDropdown">
                    <div class="OtherwithTaxesserachableDropdown">
                      <input ref="otherledgers2Input" type="text" v-model="addotherledgers2.otherledgers2SearchQuery"
                        @focus="toggleOtherLedgers2Dropdown(index, true)" @blur="toggleOtherLedgers2Dropdown(index, false)"
                        @input="filterOtherLedgers2Options($event, index)"
                        @keydown.down.prevent="navigateOtherLedgers2Dropdown(index, 'otherledgers2FilteredOptions', 'otherledgers2ActiveIndex', 1)"
                        @keydown.up.prevent="navigateOtherLedgers2Dropdown(index, 'otherledgers2FilteredOptions', 'otherledgers2ActiveIndex', -1)"
                        @keydown.enter.prevent="selectOtherLedgers2ActiveOption(index, 'otherledgers2FilteredOptions', 'otherledgers2ActiveIndex', 'otherledgers2SearchQuery', 'otherledgers2')"
                        placeholder="Select Item"
                       :disabled="isTransfer == 1"
                        />
                      <button v-if="addotherledgers2.otherledgers2SearchQuery" @click="clearOtherLedgers2Search(index)"
                        class="inputcrossicontaxes">
                        <i class="fa fa-times"></i>
                      </button>
                      <i v-else class="fa fa-search taxesledgerssearchicon"></i>
                      <ul v-if="addotherledgers2.otherledgers2DropdownOpen">
                        <li v-for="(option, optionIndex) in addotherledgers2.otherledgers2FilteredOptions" :key="option.value"
                          :class="{ 'active': optionIndex === addotherledgers2.otherledgers2ActiveIndex }"
                          v-scroll-into-view="optionIndex === addotherledgers2.otherledgers2ActiveIndex"
                          @mousedown="selectOtherLedgers2Option(option, index)">
                          <div class="row">
                            <div class="col-12">
                              <div class="itemsnamewithhsn otherledgers-searchable">
                                <h6 class="mb-0">{{ option.name }}</h6>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 col-12">
                  <div class="TaxesInputNewBackEntry">
                    <div class="ledgeramountwithdrdropdown">
                      <input type="number" placeholder="Amount" v-model="addotherledgers2.amount" class="border-none" @input="updateLedgerArray(index, 'amount', AddOtherLedgers2List[index].amount); tax_calculation(index)" @keydown="handleKeyDown" v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll" />
                      <select v-model="addotherledgers2.crdr" @change="updateLedgerArray(index, 'type', AddOtherLedgers2List[index].crdr); tax_calculation(index)">
                        <option v-for="option in crdrOptions" :key="option.text" :value="option.text">
                          {{ option.text }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-12">
                  <div class="Deleteicontaxesinner text-right pt-2">
                    <a href="javascript:void(0);" @click="removeOtherLedgers2(index)">
                      <i class="fa fa-trash"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div class="col-lg-7 col-12">
          <div
            class="NarrationBoxesNewBack mb-2"
            v-show="Bottom_Narration_Format"
          >
            <div
              class="NarrationLabelClose cursor-pointer"
              @click="toggleTextarea"
            >
              <h6 class="mb-0">Narration</h6>
              <i
                :class="
                  isTextareaVisible
                    ? 'fa fa-chevron-down'
                    : 'fa fa-chevron-right'
                "
              ></i>
            </div>
            <div v-if="isTextareaVisible" class="TextareaNarration mt-2">
              <textarea
                :disabled="isTransfer == '1'"
                name="narration"
                rows="1"
                placeholder="Enter Notes"
                class="w-full"
              ></textarea>
            </div>
          </div>
          <div
            class="AdvanceSettingNewBackEntry"
            v-show="Bottom_Narration_Format"
          >
            <div
              class="AdvanceSettingsFirstCaption d-flex align-items-center justify-content-between cursor-pointer"
              @click="toggleAdvancedSettings"
            >
              <h6 class="mb-0">Advanced Settings</h6>
              <i :class="chevronClass" aria-hidden="true"></i>
            </div>
            <ul
              class="d-flex align-items-center justify-content-between advancedSetingsul"
              v-if="isAdvancedSettingsOpen"
            >
              <li>
                <a
                  href="javascript:void(0);"
                  v-on:click="toggleTabs(1)"
                  v-bind:class="{
                    details_link_inactive: openTab !== 1,
                    details_link_active: openTab === 1,
                  }"
                >
                  Buyer’s Details
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  v-on:click="toggleTabs(2)"
                  v-bind:class="{
                    details_link_inactive: openTab !== 1,
                    details_link_active: openTab === 2,
                  }"
                  >Consignee Details
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  v-on:click="toggleTabs(3)"
                  v-bind:class="{
                    details_link_inactive: openTab !== 2,
                    details_link_active: openTab === 3,
                  }"
                  >Dispatch Details
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  v-on:click="toggleTabs(4)"
                  v-bind:class="{
                    details_link_inactive: openTab !== 3,
                    details_link_active: openTab === 4,
                  }"
                  >Order Details</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  v-on:click="toggleTabs(5)"
                  v-bind:class="{
                    details_link_inactive: openTab !== 4,
                    details_link_active: openTab === 5,
                  }"
                  >e-Way Bills</a
                >
              </li>
            </ul>
            <div class="mt-3" v-if="isAdvancedSettingsOpen">
              <div class="tab-content tab-space">
                <div
                  v-bind:class="{
                    hidden: openTab !== 1,
                    block: openTab === 1,
                  }"
                >
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-3">
                      <!-- Buyers Name Dropdown -->
                      <div class="OtherTypeSearchDropdown">
                        <span class="borderlinetextdropdown">Buyer's Name</span>
                        <input
                          type="text"
                          v-model="buyersnameSearchQuery"
                          @focus="
                            AdvancedDroptoggleDropdown(
                              'buyersnameDropdownOpen',
                              true
                            )
                          "
                          @blur="
                            AdvancedDroptoggleDropdown(
                              'buyersnameDropdownOpen',
                              false
                            )
                          "
                          @input="
                            AdvancedDropfilterOptions( 'buyerNameDropdown',
                              'buyersnameSearchQuery',
                              'buyersnameFilteredOptions',
                              buyersnameOptions
                            )
                          "
                          placeholder="Select Type"
                        />
                        <button
                          v-if="buyersnameSearchQuery"
                          @click="
                            AdvancedDropclearSearch('buyersnameSearchQuery', 'BuyerName')
                          "
                          class="inputcrossicon"
                        >
                          <i class="fa fa-times"></i>
                        </button>
                        <i
                          v-else
                          class="fa fa-caret-down input-search-icon"
                        ></i>
                        <ul v-if="buyersnameDropdownOpen">
                          <li
                            v-for="option in buyersnameFilteredOptions"
                            :key="option._id"
                            :data-id="option.name"
                            @mousedown="
                              AdvancedDropselectOption(
                                'buyersnameSelectedOption',
                                'buyersnameSearchQuery',
                                option,
                                'buyersname'
                              )
                            "
                          >
                            {{ option.ledgerName }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <!-- Buyer Country Dropdown -->
                      <div class="OtherTypeSearchDropdown">
                        <span class="borderlinetextdropdown">Country</span>
                        <input
                          type="text"
                          v-model="buyercountrySearchQuery"
                          @focus="
                            AdvancedDroptoggleDropdown(
                              'buyercountryDropdownOpen',
                              true
                            )
                          "
                          @blur="
                            AdvancedDroptoggleDropdown(
                              'buyercountryDropdownOpen',
                              false
                            )
                          "
                          @input="
                            AdvancedDropfilterOptions( 'buyerCountryDropdown',
                              'buyercountrySearchQuery',
                              'buyercountryFilteredOptions',
                              CountryData
                            )
                          "
                          placeholder="Select Type"
                        />
                        <button
                          v-if="buyercountrySearchQuery"
                          @click="
                            AdvancedDropclearSearch('buyercountrySearchQuery', 'buyerCountry')
                          "
                          class="inputcrossicon"
                        >
                          <i class="fa fa-times"></i>
                        </button>
                        <i
                          v-else
                          class="fa fa-caret-down input-search-icon"
                        ></i>
                        <ul v-if="buyercountryDropdownOpen">
                          <li
                            v-for="option in buyercountryFilteredOptions"
                            :key="option.value"
                            :data-id="option.id"
                            @mousedown="
                              AdvancedDropselectOption(
                                'buyercountrySelectedOption',
                                'buyercountrySearchQuery',
                                option,
                                'buyercountry'
                              )
                            "
                          >
                            {{ option.name }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <!-- Buyer Country Dropdown -->
                      <div class="OtherTypeSearchDropdown">
                        <span class="borderlinetextdropdown">State</span>
                        <input
                          type="text"
                          v-model="buyerstateSearchQuery"
                          @focus="
                            AdvancedDroptoggleDropdown(
                              'buyerstateDropdownOpen',
                              true
                            )
                          "
                          @blur="
                            AdvancedDroptoggleDropdown(
                              'buyerstateDropdownOpen',
                              false
                            )
                          "
                          @input="
                            AdvancedDropfilterOptions(
                              'buyerStateDropdown',
                              'buyerstateSearchQuery',
                              'buyerstateFilteredOptions',
                              stateData
                            )
                          "
                          placeholder="Select Type"
                        />
                        <button
                          v-if="buyerstateSearchQuery"
                          @click="
                            AdvancedDropclearSearch('buyerstateSearchQuery')
                          "
                          class="inputcrossicon"
                        >
                          <i class="fa fa-times"></i>
                        </button>
                        <i
                          v-else
                          class="fa fa-caret-down input-search-icon"
                        ></i>
                        <ul v-if="buyerstateDropdownOpen">
                          <li
                            v-for="option in buyerstateFilteredOptions"
                            :key="option.name"
                            :data-id="option.id"
                            @mousedown="
                              AdvancedDropselectOption(
                                'buyerstateSelectedOption',
                                'buyerstateSearchQuery',
                                option,
                                'buyerstate'
                              )
                            "
                          >
                            {{ option.name }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="dropdown-container">
                        <div class="custom-select-container">
                          <span class="AdvancedSettingspan"
                            >Registration Type</span
                          >
                          <select v-model="selectedRegistrationTypeOption">
                            <option value="">Select</option>
                            <option
                              v-for="option in RegistrationTypes"
                              :key="option.value"
                              :value="option.value"
                            >
                              {{ option.text }}
                            </option>
                          </select>
                          <span class="caret"></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">Postal Code</span>
                        <input
                          type="number"
                          placeholder="Select"
                          @keydown="handleKeyDown"
                          v-on:keydown="disableArrowKeys"
                          v-on:wheel="disableMouseWheelScroll"
                          v-model="BuyerPostalCode"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">GSTIN/UIN</span>
                        <input
                          type="text"
                          placeholder="Select"
                          @keydown="handleKeyDown"
                          v-on:keydown="disableArrowKeys"
                          v-on:wheel="disableMouseWheelScroll"
                          v-model="BuyerGstin"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">Place of Supply</span>
                        <input v-model="BuyerPlaceOfSupply" type="text" placeholder="Select" />
                      </div>
                    </div>
                    <div class="col-lg-8 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">Address</span>
                        <textarea
                          name="Address"
                          rows="1"
                          placeholder="Address"
                          cols="50"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-bind:class="{
                    hidden: openTab !== 2,
                    block: openTab === 2,
                  }"
                >
                  <div class="row">
                    <div class="col-lg-6 col-12 mb-3">
                      <!-- Consignee Name Dropdown -->
                      <div class="OtherTypeSearchDropdown">
                        <span class="borderlinetextdropdown"
                          >Consignee Name</span
                        >
                        <input
                          type="text"
                          v-model="consigneenameSearchQuery"
                          @focus="
                            AdvancedDroptoggleDropdown(
                              'consigneenameDropdownOpen',
                              true
                            )
                          "
                          @blur="
                            AdvancedDroptoggleDropdown(
                              'consigneenameDropdownOpen',
                              false
                            )
                          "
                          @input="
                            AdvancedDropfilterOptions(
                              'consigneeNameDropdown',
                              'consigneenameSearchQuery',
                              'buyersnameFilteredOptions',
                              buyersnameOptions
                            )
                          "
                          placeholder="Select Type"
                        />
                        <button
                          v-if="consigneenameSearchQuery"
                          @click="
                            AdvancedDropclearSearch('consigneenameSearchQuery', 'consigneeName')
                          "
                          class="inputcrossicon"
                        >
                          <i class="fa fa-times"></i>
                        </button>
                        <i
                          v-else
                          class="fa fa-caret-down input-search-icon"
                        ></i>
                        <ul v-if="consigneenameDropdownOpen">
                          <li
                            v-for="option in buyersnameFilteredOptions"
                            :key="option._id"
                            :data-id="option.name"
                            @mousedown="
                              AdvancedDropselectOption(
                                'consigneenameSelectedOption',
                                'consigneenameSearchQuery',
                                option,
                                'consigneename'
                              )
                            "
                          >
                            {{ option.ledgerName }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-6 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">GSTIN/UIN</span>
                        <input
                          type="text"
                          placeholder="Select"
                          @keydown="handleKeyDown"
                          v-on:keydown="disableArrowKeys"
                          v-on:wheel="disableMouseWheelScroll"
                          v-model="consigneeGstin"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-3">
                      <!-- Consignee Country Dropdown -->
                      <div class="OtherTypeSearchDropdown">
                        <span class="borderlinetextdropdown">Country</span>
                        <input
                          type="text"
                          v-model="consigneecountrySearchQuery"
                          @focus="
                            AdvancedDroptoggleDropdown(
                              'consigneecountryDropdownOpen',
                              true
                            )
                          "
                          @blur="
                            AdvancedDroptoggleDropdown(
                              'consigneecountryDropdownOpen',
                              false
                            )
                          "
                          @input="
                            AdvancedDropfilterOptions(
                              'consigneecountryDropdown',
                              'consigneecountrySearchQuery',
                              'consigneecountryFilteredOptions',
                              CountryData
                            )
                          "
                          placeholder="Select Type"
                        />
                        <button
                          v-if="consigneecountrySearchQuery"
                          @click="
                            AdvancedDropclearSearch(
                              'consigneecountrySearchQuery', 'consigneeCountry'
                            )
                          "
                          class="inputcrossicon"
                        >
                          <i class="fa fa-times"></i>
                        </button>
                        <i
                          v-else
                          class="fa fa-caret-down input-search-icon"
                        ></i>
                        <ul v-if="consigneecountryDropdownOpen">
                          <li
                            v-for="option in consigneecountryFilteredOptions"
                            :key="option.value"
                            :data-id="option.name"
                            @mousedown="
                              AdvancedDropselectOption(
                                'consigneecountrySelectedOption',
                                'consigneecountrySearchQuery',
                                option,
                                'consigneecountry'
                              )
                            "
                          >
                            {{ option.name }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <!-- Consignee State Dropdown -->
                      <div class="OtherTypeSearchDropdown">
                        <span class="borderlinetextdropdown">State</span>
                        <input
                          type="text"
                          v-model="consigneestateSearchQuery"
                          @focus="
                            AdvancedDroptoggleDropdown(
                              'consigneestateDropdownOpen',
                              true
                            )
                          "
                          @blur="
                            AdvancedDroptoggleDropdown(
                              'consigneestateDropdownOpen',
                              false
                            )
                          "
                          @input="
                            AdvancedDropfilterOptions(
                              'consigneeStateDropdown',
                              'consigneestateSearchQuery',
                              'consigneestateFilteredOptions',
                              stateData
                            )
                          "
                          placeholder="Select Type"
                        />
                        <button
                          v-if="consigneestateSearchQuery"
                          @click="
                            AdvancedDropclearSearch('consigneestateSearchQuery')
                          "
                          class="inputcrossicon"
                        >
                          <i class="fa fa-times"></i>
                        </button>
                        <i
                          v-else
                          class="fa fa-caret-down input-search-icon"
                        ></i>
                        <ul v-if="consigneestateDropdownOpen">
                          <li
                            v-for="option in consigneestateFilteredOptions"
                            :key="option.value"
                            :data-id="option.name"
                            @mousedown="
                              AdvancedDropselectOption(
                                'consigneestateSelectedOption',
                                'consigneestateSearchQuery',
                                option,
                                'consigneestate'
                              )
                            "
                          >
                            {{ option.name }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">Postal Code</span>
                        <input
                          type="number"
                          placeholder="Select"
                          @keydown="handleKeyDown"
                          v-on:keydown="disableArrowKeys"
                          v-on:wheel="disableMouseWheelScroll"
                          v-model="consigneePostalCode"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">Address</span>
                        <textarea
                          name="Address"
                          rows="1"
                          placeholder="Address"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-bind:class="{
                    hidden: openTab !== 3,
                    block: openTab === 3,
                  }"
                >
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">Shipping Date</span>
                        <span class="SalesDateImagePicker">
                          <img
                            src="/assets/images/1.0/sales/calendar.svg"
                            class="img-fluid"
                          />
                        </span>
                        <Datepicker
                          v-model="dispatch_shipping_date"
                          format="dd MMM yyyy"
                          placeholder="Shipping Date"
                        >
                        </Datepicker>
                        <span class="error-validation" v-if="advancedError.dispatch_shipping_date">
                            {{ advancedError.dispatch_shipping_date }}
                          </span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">Dispatch Note</span>
                        <input type="text" placeholder="Select" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">Document No.</span>
                        <input v-model="dispatch_doc_no" type="text" placeholder="Select" />
                        <span class="error-validation" v-if="advancedError.dispatch_doc_no">
                            {{ advancedError.dispatch_doc_no }}
                          </span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">Bill Number</span>
                        <input v-model="dispatch_bill_no" type="text" placeholder="Select" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan"
                          >Dispatch Through</span
                        >
                        <input type="text" placeholder="Select" 
                        v-model="dispatch_despatch_through"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">Vehicle Number</span>
                        <input v-model="dispatch_motor_vehicle_no" type="text" placeholder="Select" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">Destination</span>
                        <input v-model="dispatch_destination" type="text" placeholder="Select" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-bind:class="{
                    hidden: openTab !== 4,
                    block: openTab === 4,
                  }"
                >
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">Order Date</span>
                        <span class="SalesDateImagePicker">
                          <img
                            src="/assets/images/1.0/sales/calendar.svg"
                            class="img-fluid"
                          />
                        </span>
                        <Datepicker
                          v-model="order_date"
                          format="dd MMM yyyy"
                          placeholder="Order Date"
                        >
                        </Datepicker>
                        <span class="error-validation" v-if="advancedError.order_date">
                            {{ advancedError.order_date }}
                          </span>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">Order Number</span>
                        <input v-model="order_no" type="text" placeholder="Select" />
                      </div>
                      <span class="error-validation" v-if="advancedError.order_no">
                            {{ advancedError.order_no }}
                          </span>
                    </div>
                    <div class="col-lg-4 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">Mode of Payment</span>
                        <input v-model="order_mode_of_payment" type="text" placeholder="Select" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">Other Reference</span>
                        <input v-model="order_other_reference" type="text" placeholder="Select" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan"
                          >Terms of Delivery</span
                        >
                        <input type="text" placeholder="Select" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-12 mb-3">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">Address</span>
                        <textarea
                          name="Address"
                          rows="1"
                          placeholder="Address"
                          cols="50"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-bind:class="{
                    hidden: openTab !== 5,
                    block: openTab === 5,
                  }"
                >
                  <div class="row">
                    <div class="col-lg-4 col-12 mb-5">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan">eWay Bill Date</span>
                        <span class="SalesDateImagePicker">
                          <img
                            src="/assets/images/1.0/sales/calendar.svg"
                            class="img-fluid"
                          />
                        </span>
                        <Datepicker
                          v-model="eWayBill_date"
                          format="dd MMM yyyy"
                          placeholder="eWay Bill Date"
                        >
                        </Datepicker>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-5">
                      <div class="AdvancedSettingInput position-relative">
                        <span class="AdvancedSettingspan"
                          >eWay Bill Number</span
                        >
                        <input
                          type="number"
                          placeholder="Select"
                          @keydown="handleKeyDown"
                          v-on:keydown="disableArrowKeys"
                          v-on:wheel="disableMouseWheelScroll"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mb-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!------------------->
    <div
      id="scrollArrow"
      class="scroll-arrow"
      v-if="showScrollButton"
      @click="scrollPage"
    >
      <i
        :class="
          scrollDirection === 'down' ? 'fa fa-arrow-down' : 'fa fa-arrow-up'
        "
      ></i>
    </div>
    <!------------------->
    <div class="NewBackentryBottom">
      <div class="NewBackentryBottomInner">
        <div class="row align-items-center">
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="BottomGrandTotalNewBackEntry">
              <table width="100%">
                <tbody>
                  <tr>
                    <td>Sub Total</td>
                    <td align="right">
                      <span class="font_sans">₹</span>
                      {{ getNum(this.total_amount).toFixed(2) }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Taxes
                      <img
                        src="/assets/images/1.0/sales/information.png"
                        class="img-fluid ml-2"
                      />
                    </td>
                    <td align="right">
                      <span class="font_sans">₹</span>
                      {{ getNum(this.total_tax).toFixed(2) }}
                    </td>
                  </tr>
                </tbody>
                <tfoot class="GrandTotalFonts">
                  <tr class="border-bottom-none">
                    <td>Grand Total</td>
                    <td align="right">
                      <span class="font_sans">₹</span>
                      {{getNum(this.grandTotal).toFixed(2) }}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div v-if="isTransfer !== 1" class="col-lg-8 col-md-6 col-sm-6 col-12">
            <button
            v-if="this.$route.params.voucher_id"
              class="float_right CreateVoucherButtonBottom"
              @click =  "handleClicked"
              :disabled = 'isdisabled == 1'
            >
            UPDATE VOUCHER
            </button>
            <button
            v-else
              class="float_right CreateVoucherButtonBottom"
              @click =  "handleClicked"
              :disabled = 'isdisabled == 1'
            >
              CREATE VOUCHER
            </button>
          </div>
        </div>
      </div>
    </div>
    <!------------------->
  </section>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import Common from "@/Common";
import Api from "@/Api";
import moment from "moment";


export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      disabled: 0,
      isTransfer: 0,
      showScrollButton: false,
      scrollDirection: "down",
      isEditing: false,
      selectedOptionradio: "default",
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
        { value: 2, label: "New Reference Type" },
      ],
      referenceSelectedOption: { value: 1, label: "On Account" },
      referenceActiveIndex: -1,
      // Voucher Type Dropdown
      voucherSearchQuery: "",
      voucherDropdownOpen: false,
      voucherActiveIndex: -1,
      // voucherOptions: [
      //   { value: 1, label: "Sales", name: "Asaraf 1" },
      //   { value: 2, label: "Sales Automatic", name: "Asaraf 2" },
      //   { value: 3, label: "Sales Automatic Manual", name: "Asaraf 3" },
      //   { value: 4, label: "New Voucher Type", name: "Asaraf 4" },
      //   { value: 5, label: "New One Sales", name: "Asaraf 5" },
      // ],
      voucherFilteredOptions: [],
      // Party Name Dropdown
      partynameSearchQuery: "",
      partynameDropdownOpen: false,
      partynameActiveIndex: -1,
      PartyData: [
        // { value: 1, label: 'Industrial Aromatics Pvt Ltd', amount: '21000', name: 'Partyname 1' },
        // { value: 2, label: 'ABCD Pvt Ltd', amount: '21000', name: 'Partyname 2' },
        // { value: 3, label: 'Livekeeping Technologies', amount: '21000', name: 'Partyname 3' },
        // { value: 4, label: 'Arun Enterprises', amount: '21000', name: 'Partyname 4' },
        // { value: 5, label: 'Arush Metal Limited', amount: '21000', name: 'Partyname 5' },
        // { value: 6, label: 'Sanjay Polymer', amount: '21000', name: 'Partyname 6' },
        // { value: 7, label: 'XYZ Private LImited', amount: '21000', name: 'Partyname 7' },
        // { value: 8, label: 'Metal Casting LImited', amount: '21000', name: 'Partyname 8' },
        // { value: 9, label: 'Asaraf clothing Private Limited', amount: '21000', name: 'Partyname 9' },
        // { value: 10, label: 'Surya Polymer', amount: '21000', name: 'Partyname 10' },
      ],
      // partynameFilteredOptions: [],
      // Ledger type Dropdown
      ledgertypeSearchQuery: "",
      ledgertypeDropdownOpen: false,
      ledgertypeActiveIndex: -1,
      LedgerData: [],
      // ledgertypeFilteredOptions: [],
      // Price Level Dropdown
      pricelevelSearchQuery: "",
      pricelevelDropdownOpen: false,
      pricelevelActiveIndex: -1,
      pricelevelOptions: [
        // { value: 1, label: 'Retail' },
        // { value: 2, label: 'Lemon Tree' },
        // { value: 3, label: 'Wholesale' },
        // { value: 4, label: 'Spice Jet' },
        // { value: 5, label: 'Qatar Airways' },
        // { value: 6, label: 'Retail' },
        // { value: 7, label: 'Lemon Tree' },
        // { value: 8, label: 'Wholesale' },
        // { value: 9, label: 'Spice Jet' },
        // { value: 10, label: 'Qatar Airways' },
      ],
      // pricelevelFilteredOptions: [],
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
          filterOptionData: [],
          godownsData: "",
          tableitemsActiveIndex: -1,
          item_guid:'',
          item_id : ""
        },
      ],
      final_object: [],
      tableitemsOptions: [
        // { value: 1, label: 'White Bread', hsncode: '000000', quantity: '80 PAC', color: 'green' },
        // { value: 2, label: 'Milk', hsncode: '123455', quantity: '100 LIT', color: 'green' },
        // { value: 3, label: 'Sugar', hsncode: '123445', quantity: '100 KG', color: 'green' },
        // { value: 4, label: 'Tata Tea', hsncode: '123451', quantity: '20 PAC', color: 'green' },
        // { value: 5, label: 'Basmati Rice', hsncode: '123452', quantity: '-150 KG', color: 'red' },
        // { value: 6, label: 'Soap', hsncode: '123415', quantity: '22 KG', color: 'green' },
        // { value: 7, label: 'Biryani Masala', hsncode: '123003', quantity: '100 PAC', color: 'green' },
        // { value: 8, label: 'Oil', hsncode: '123405', quantity: '-12 PAC', color: 'red' },
        // { value: 9, label: 'Sudha Ghee', hsncode: '123415', quantity: '5 KG', color: 'green' },
        // { value: 10, label: 'Toned Milk', hsncode: '123435', quantity: '-24 LIT', color: 'red' },
      ],
      tableitemsFilteredOptions: [],
      // Other Ledgers Dropdown
      AddOtherLedgers2List: [
        {
          id: Date.now(),
          otherledgers2SearchQuery: '',
          selectedOption: '',
          amount: '',
          crdr: 'CR',
          otherledgers2DropdownOpen: false,
          otherledgers2FilteredOptions: [],
          otherledgers2ActiveIndex: -1,
        },
      ],
      allledgerselection:[],
      ledger_array: [],
      add_more_ledger:[],
      // otherledgers2Options: [
      //   { value: 1, OtherLedgersName: 'Air Consitioner' },
      //   { value: 2, OtherLedgersName: 'Furniture A/c' },
      //   { value: 3, OtherLedgersName: 'CGST' },
      //   { value: 4, OtherLedgersName: 'Downward Rounding Off' },
      //   { value: 5, OtherLedgersName: 'Electricity EXP' },
      //   { value: 6, OtherLedgersName: 'GST Sales' },
      //   { value: 7, OtherLedgersName: 'Applicable' },
      //   { value: 8, OtherLedgersName: 'S-GST PAID A/c' },
      //   { value: 9, OtherLedgersName: 'SGST' },
      //   { value: 10, OtherLedgersName: 'Upward Rounding Off' },
      // ],
      crdrOptions: [
        { text: 'CR' },
        { text: 'DR' },
        // More options...
      ],

      newinvoiceDate: new Date(),
      isButtonDisabled: true,
      Table_Format_Middle: false,
      godownsData: [],
      itemamount: "0.00",
      itemdiscount: "0",
      itemrate: "0",
      itemquantity: "0",
      isTextareaVisible: true,
      // Add Taxes Dropdown
      AddNewTaxes3List: [
        {
          id: Date.now(),
          addtaxes3SearchQuery: '',
          selectedOption: '',
          amount: '',
          addtaxes3DropdownOpen: false,
          addtaxes3FilteredOptions: [],
          addtaxes3ActiveIndex: -1,
        },
      ],
      // addtaxes3Options: [
      //   { value: 1, AddTaxesName: 'C-GST 9%' },
      //   { value: 2, AddTaxesName: 'C-GST PAID A/C' },
      //   { value: 3, AddTaxesName: 'CGST' },
      //   { value: 4, AddTaxesName: 'Downward Rounding Off' },
      //   { value: 5, AddTaxesName: 'I-GST 18%' },
      //   { value: 6, AddTaxesName: 'I-GST PAID A/C' },
      //   { value: 7, AddTaxesName: 'Normal Rounding Off' },
      //   { value: 8, AddTaxesName: 'Not Applicable' },
      //   { value: 9, AddTaxesName: 'S-GST 9%' },
      //   { value: 10, AddTaxesName: 'S-GST PAID A/C' },
      //   { value: 11, AddTaxesName: 'SGST' },
      //   { value: 12, AddTaxesName: 'Upward Rounding Off' },
      // ],
      taxData: [],
      selectedRegistrationTypeOption: "", // Default option value
      RegistrationTypes: [
        { value: "buyer1", text: "Composion" },
        { value: "buyer2", text: "Regular" },
        { value: "buyer3", text: "Consumer" },
        { value: "buyer4", text: "Unregistred" },
      ],
      // Buyer Name Dropdown
      buyersnameSearchQuery: "",
      buyersnameDropdownOpen: false,
      buyersnameOptions: [],
      buyersnameFilteredOptions: [],
      // Buyer Country Dropdown
      buyercountrySearchQuery: "",
      buyercountryDropdownOpen: false,
      // buyercountryOptions: [
      //   { value: 1, label: "Australia" },
      //   { value: 2, label: "Bangladesh" },
      //   { value: 3, label: "India" },
      //   { value: 4, label: "Newzealand" },
      //   { value: 5, label: "Indonesia" },
      // ],
      CountryData: [],
      buyercountryFilteredOptions: [],
      consigneecountryFilteredOptions: [],
      // Buyer Country Dropdown
      buyerstateSearchQuery: "",
      buyerstateDropdownOpen: false,
      // buyerstateOptions: [
      //   { value: 1, label: "Gujarat" },
      //   { value: 2, label: "Maharashtra" },
      //   { value: 3, label: "Madhya Pradesh" },
      //   { value: 4, label: "Uttar Pradesh" },
      //   { value: 5, label: "Himachal Pradesh" },
      // ],
      buyerstateFilteredOptions: [],
      // Buyer Country Dropdown
      consigneenameSearchQuery: "",
      consigneenameDropdownOpen: false,
      consigneenameOptions: [
        // { value: 1, label: "Abcd Private Limited", name: "Asaraf 1" },
        // { value: 2, label: "Adinath Enterprise", name: "Asaraf 2" },
        // { value: 3, label: "Future Tech Private Limited", name: "Asaraf 3" },
        // { value: 4, label: "K.P enterprise", name: "Asaraf 4" },
        // { value: 5, label: "Shreenath Industries", name: "Asaraf 5" },
      ],
      consigneenameFilteredOptions: [],
      // Consignee Country Dropdown
      consigneecountrySearchQuery: "",
      consigneecountryDropdownOpen: false,
      consigneecountryOptions: [
        { value: 1, label: "Australia" },
        { value: 2, label: "Bangladesh" },
        { value: 3, label: "India" },
        { value: 4, label: "Newzealand" },
        { value: 5, label: "Indonesia" },
      ],
      consigneecountryFilteredOptions: [],
      // Consignee State Dropdown
      consigneestateSearchQuery: "",
      consigneestateDropdownOpen: false,
      // consigneestateOptions: [
      //   { value: 1, label: "Gujarat" },
      //   { value: 2, label: "Maharashtra" },
      //   { value: 3, label: "Madhya Pradesh" },
      //   { value: 4, label: "Uttar Pradesh" },
      //   { value: 5, label: "Himachal Pradesh" },
      // ],
      consigneestateFilteredOptions: [],
      isAdvancedSettingsOpen: false,
      dispatch_shipping_date: "",
      order_date: "",
      eWayBill_date: "",
      Bottom_Narration_Format: false,
      openTab: 1,
      voucherNumber: "",
      itemSearch: "",
      OptionData: [],
      filterOptionData: [],
      PriceLevelData: [],
      FilteredPartyData: [],
      FilteredLedgerData: [],
      FilteredPriceLevelData: [],
      search: '',
      OtherLedgerData: [],
      buyerSearch: '',
      BuyerPostalCode:'',
      BuyerGstin: '',
      BuyerPlaceOfSupply: '',
      consigneePostalCode: '',
      consigneeGstin: '',
      usePriceLevels: "Yes",
      VoucherTypeData: [],
      item_object: [],
      partyGSTIn: '',
      partyGuid: '',
      ledgerId: '',
      ledger_id: '',
      grandTotal: 0,
      total_amount: 0,
      ledger_amount: 0,
      total_tax: 0,
      final_ledgerEntries:[],
      final_part_ledgerEntries: [],
      final_other_ledgerEntries: [],
      ledgerTaxType_value: '',
      partyid: '',
      countrysearch: '',
      stateData: [],
      stockItemsError: [],
      taxError: [],
      advancedError: [],
      dispatch_doc_no: '',
      dispatch_bill_no: '',
      dispatch_despatch_through: '',
      dispatch_destination: '',
      dispatch_motor_vehicle_no: '',
      order_no: '',
      tempItmesObject: [],
      order_mode_of_payment: '',
      order_other_reference: '',
      invoice_type: true,
      add_igstApplicable: false
    };
  },
  computed: {
    isDefaultSelected() {
      return this.selectedOptionradio === "default";
    },
    chevronClass() {
      return this.isAdvancedSettingsOpen
        ? "fa fa-chevron-down"
        : "fa fa-chevron-right";
    },
    isdisabled(){
       if((this.partynameSearchQuery == '' || this.partynameSearchQuery == 'Select Party') || ( this.ledgertypeSearchQuery == '' || this.ledgertypeSearchQuery == 'Select Ledger')){
        console.log("if id working")
         
         return 1 
      }
      else{
        console.log("else is working")
        return 0
      }
    }
  },
  created() {},
  watch: {
    referenceSearchQuery(newQuery) {
      if (newQuery === "") {
        this.ReferencefilterOptions();
      }
    },
    AddNewItemList: {
    handler(newList) {
      newList.forEach((item, index) => {
        this.$watch(
          () => [item.itemquantity, item.itemrate],
          () => {
            this.updateAmount(index);
          },
          { deep: true }
        );
      });
    },
    deep: true,
    immediate: true,
  },
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
    get_id(ID){
      localStorage.setItem("VoucherTypesId", ID)
    },
    updateLedgerArray(index, key, value) {
    // Update the ledger_array for the specified index
    this.$set(this.ledger_array[index], key, value);
  },
    getNum(val) {
      if (isNaN(val)) {
        return 0;
      }
      return val;
    },
    change_godown(event,index){
      if(this.tempItmesObject != ""){
        this.tempItmesObject[index].godownName = event.target.value;
      }
    },
    change_description(event,index){
      if(this.tempItmesObject != ""){
        this.tempItmesObject[index].descriptions = event.target.value;
      }
    },
    taxInclusive_calculation(event,index){
      const isChecked = event.target.checked;
      this.AddNewItemList[index].isChecked = isChecked;
      if(isChecked == true){
        this.AddNewItemList[index].old_amount = this.AddNewItemList[index].itemrate;
     
        // console.log(this.AddNewItemList[index].old_taxname, "old tax name")
        const tax = this.AddNewItemList[index].gst_per;
        const rate = this.AddNewItemList[index].itemrate / (1 + (this.AddNewItemList[index].gst_per / 100));
        this.AddNewItemList[index].itemrate = rate.toFixed(2);
      }else{
       
        this.AddNewItemList[index].itemrate = this.AddNewItemList[index].old_amount;
      }
      this.updateAmount(index);
    },
    updateAmount(index) {
      console.log("console from updateamount")
    const item = this.AddNewItemList[index];
    const quantity = item.itemquantity || 0;
    console.log(quantity,"console from updateamount")

    const discount = item.itemdiscount || 0;
    const rate = item.itemrate || 0;
    console.log(rate,"console from updateamount")

    const itemAmount =  (quantity * rate).toFixed(2);
    if(item.itemdiscount){
      item.itemamount = (itemAmount * (100 - discount)) / 100;
    }
    else{
      item.itemamount = itemAmount
    }
    this.gst_calculation(index);
    this.tax_calculation()

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
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
      this.countrysearch = ''
      this.countryDetails()
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
      this.final_ledgerEntries = []
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
        filterOptionData: [],
        godownsData: "", // Initialize with empty or specific value
      });
    },
    removeNewItem(index) {
      this.final_ledgerEntries = [];
      if (this.AddNewItemList.length === 0) {
        this.Bottom_Narration_Format = false;
      }

      if (this.AddNewItemList.length !== 1) {
        this.AddNewItemList.splice(index, 1);
        this.final_select = [];
      } else {
        this.dropDownKey++;
        this.AddNewTaxes3List = [];
        this.total_tax = 0;
        this.AddNewItemList[index].tableitemsSearchQuery = "";
        this.AddNewItemList[index].item_guid = "";
        this.AddNewItemList[index].item_description = "";
        this.AddNewItemList[index].godownsData = "";
        this.AddNewItemList[index].hsn_code = "";
        this.AddNewItemList[index].itemquantity = "0";
        this.AddNewItemList[index].itemrate = "";
        this.AddNewItemList[index].itemdiscount = "";
        this.AddNewItemList[index].itemamount = "";
      }
      if(index == 0){
        this.gst_calculation(index);  
        console.log("if consition is working")
      }else{
        this.gst_calculation(index-1);
        console.log("else consition is working")

      }
      this.tax_calculation();
      console.log(index, "none consition is working")


    },
    AddOtherLedgers2Click() {
      this.AddOtherLedgers2List.push({
        id: Date.now(),
        otherledgers2SearchQuery: '',
        selectedOption: '',
        amount: '',
        crdr: 'CR',
        otherledgers2DropdownOpen: false,
        otherledgers2FilteredOptions: [],
        otherledgers2ActiveIndex: -1,
      });
    },
    removeOtherLedgers2(index) {
      this.AddOtherLedgers2List.splice(index, 1);
      this.ledger_array.splice(index, 1);
      this.tax_calculation();
    },
    AddNewTaxes3Click() {
      this.AddNewTaxes3List.push({
        id: Date.now(),
        addtaxes3SearchQuery: '',
        selectedOption: '',
        amount: '',
        addtaxes3DropdownOpen: false,
        addtaxes3FilteredOptions: [],
        addtaxes3ActiveIndex: -1,
      });
    },
    removeNewTaxes3(index) {
      this.AddNewTaxes3List.splice(index, 1);
      this.final_ledgerEntries.splice(index, 1);
    
    this.tax_calculation();
    },
    hide() {
    this.isEditing = false;
  },
    closeEvent() {
    this.hide();
  },
    toggleTextarea() {
      this.isTextareaVisible = !this.isTextareaVisible;
    },
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
    saveEdit() {
      this.toggleEdit();
    },
    getSelectedTemplate(option) {
      this.selectedOption = option;
    },
    allowOnlyNumbers(event) {
      const charCode = event.which ? event.which : event.keyCode;
      if (charCode < 48 || charCode > 57) {
        event.preventDefault();
      }
    },

    toggleDropdown(dropdownType, open) {
      const dropdownOpen = `${dropdownType}DropdownOpen`;
      this[dropdownOpen] = open !== undefined ? open : true;
      if (open) {
        const options = this.VoucherTypeData;
        this[`${dropdownType}FilteredOptions`] = options;
      }
    },
    async filterOptions(event, dropdownType) {
      this.search = event.target.value
      const searchQuery = this.search.toLowerCase();
      let options = [];
      if (dropdownType == "voucher") {
         options = this.VoucherTypeData;

        this[`${dropdownType}FilteredOptions`] = options.filter((option) =>
          option.voucherTypeName.toLowerCase().includes(searchQuery)
        );
      } else if (dropdownType == "partyname") {
        await this.partyDetails()
         options = this.PartyData;
        this.FilteredPartyData = options.filter((option) =>
          option.ledgerName.toLowerCase().includes(searchQuery)
        );
        this.clearOtherDropdowns();
      } else if (dropdownType == "ledgertype") {
        await this.getledgerlist()
         options = this.LedgerData;
        this.FilteredLedgerData = options.filter((option) =>
          option.ledgerName.toLowerCase().includes(searchQuery)
        );



      //   console.log(event, "this is the dataset")
      // const theTarget = event.target.dataset;
      //   console.log(theTarget, "this is the target data")

      // this.ledgerId = theTarget.ledgerguid;
      // console.log(this.ledgerId, "ledger id in filteroption")
      // this.ledger_id = theTarget.id;
      // this.gstApplicable = theTarget.gstapplicable;
      // const selectedOption = event.target.options[event.target.selectedIndex];
      // const rateListsAttr = selectedOption.getAttribute('data-rateLists');
      // this.rateLists = JSON.parse(rateListsAttr);
      // // this.taxarray = [];
      this.AddNewTaxes3List = []
      this.AddNewItemList = [];
      // // this.final_ledgerEntries = [];
      // // this.showledgers = false;
      // // this.ledger_array = [];
      // // this.gross_amount = 0;
      // // this.total_tax = 0;
      // // this.total_amount = 0;
      this.AddNewItemList.push( {
          id: Date.now(),
          tableitemsSearchQuery: "",
          itemquantity: "",
          itemrate: "",
          itemdiscount: "",
          selectedOption: "",
          itemamount: "",
          isChecked: false,
          tableitemsDropdownOpen: false,
          filterOptionData: [],
          godownsData: "",
          tableitemsActiveIndex: -1,
          item_guid:''
        },);
      }
      else if (dropdownType == "pricelevel") {
        await this.get_price_level_list()
         options = this.PriceLevelData;
        this.FilteredPriceLevelData = options.filter((option) =>
          option.priceLevelName.toLowerCase().includes(searchQuery)
        );
      }
      this[`${dropdownType}ActiveIndex`] = -1;
    },
    clearOtherDropdowns() {
    this.ledgertypeSearchQuery = '';
    this.pricelevelSearchQuery = '';
     },
    selectOption(dropdownType, option) {
      this[`${dropdownType}SelectedOption`] = option;
      this[`${dropdownType}SearchQuery`] = option.label;
      this.toggleDropdown(dropdownType, false);
      this.$nextTick(() => {
        this.focusNextDropdown(dropdownType);
      });
      setTimeout(() => {
        if (dropdownType === "voucher") {
          this.final_ledgerEntries = []
          this.partynameSearchQuery = ''
          this.ledgertypeSearchQuery = ''
          this[`${dropdownType}SearchQuery`] = option.voucherTypeName;
          this.partynameDropdownOpen = true;
          this.$nextTick(() => {
            if (this.$refs.partynameInput) {
              this.$refs.partynameInput.focus();
            }
          });
           this.get_id(option.id)
          this.getVoucherNumber()
        } else if (dropdownType === "partyname") {
          this.final_ledgerEntries = []
          this[`${dropdownType}SearchQuery`] = option.ledgerName;
          this.search = this[`${dropdownType}SearchQuery`]
          this.partyDetails()
          this.clearOtherDropdowns();
          this.buyersnameSearchQuery = option.ledgerName
          this.buyercountrySearchQuery = option.countryName
          this.buyerstateSearchQuery = option.stateName
          this.selectedRegistrationTypeOption = option.gstRegistrationType
          this.BuyerPostalCode = option.pincode
          this.BuyerGstin = option.partyGSTIn
          this.BuyerPlaceOfSupply = option.stateName

          this.consigneenameSearchQuery = option.ledgerName
          this.consigneecountrySearchQuery = option.countryName
          this.consigneestateSearchQuery = option.stateName
          this.consigneePostalCode = option.pincode
          this.consigneeGstin = option.partyGSTIn
          this.ledgertypeDropdownOpen = true;
          this.$nextTick(() => {
            if (this.$refs.ledgertypeInput) {
              this.$refs.ledgertypeInput.focus();
            }
          });

          this.partyGSTIn = option.partyGSTIn;
          // this.partynameSearchQuery = option.name;     
          // this.partyid = option.id;
          this.ledgerGroupParent = option.parent;
          this.ledgergroup = option.parentgroup
          console.log(option, "hi option in selected function")
          

          this.partyGuid = option.partyguid
          console.log(this.partyGSTIn, "selectOption in data")
          const partyGST = this.partyGSTIn;
          const companyGST = localStorage.getItem("companyGstNumber");
          const companyState = localStorage.getItem("companystateName");
          const partyState = option.stateName;

          if (companyGST == "") {
           this.isGstApplicable = "NONE";
           this.isIGST = "no";
         } else if (partyGST != "") {
       
         } else {
          if (partyState != "") {
          if (companyState == partyState) {
            this.isGstApplicable = "CGST";
            this.isIGST = "no";
          } else {
            this.isGstApplicable = "IGST";
            this.isIGST = "yes";
          }
        }
      }
      this.grandTotal = 0
      this.total_tax = 0;
      this.total_amount = 0;

        } else if (dropdownType === "ledgertype") {

          this.$set(this, 'AddNewTaxes3List', []);
          this.final_ledgerEntries = []
          this[`${dropdownType}SearchQuery`] = option.ledgerName;
          this.search = this[`${dropdownType}SearchQuery`]
          this.getledgerlist()
          this.ledgerId = option.ledgerId
          this.ledger_id = option.ledger_id
          this.pricelevelDropdownOpen = true;
          if(this.usePriceLevels == 'Yes'){
          
            this.$nextTick(() => {
              if (this.$refs.pricelevelInput) {
                this.$refs.pricelevelInput.focus();
              }
            });
        }
        else{

          
        this.toggleTableItemsDropdown(0, true);
          this.$nextTick(() => {
            if (this.$refs.tableitemsInput) {
              this.$refs.tableitemsInput[0].focus();
            }
          });
          this.Table_Format_Middle = true;


        }
          this.grandTotal = 0
          this.total_tax = 0;
          this.total_amount = 0;

          this.AddNewItemList = []
          this.AddNewItemList.push( {
          id: Date.now(),
          tableitemsSearchQuery: "",
          itemquantity: "",
          itemrate: "",
          itemdiscount: "",
          selectedOption: "",
          itemamount: "",
          isChecked: false,
          tableitemsDropdownOpen: false,
          filterOptionData: [],
          godownsData: "",
          tableitemsActiveIndex: -1,
          item_guid:''
        },);
      

        } else if (dropdownType === "pricelevel") {
          this[`${dropdownType}SearchQuery`] = option.priceLevelName;

          this.toggleTableItemsDropdown(0, true);
          this.$nextTick(() => {
            if (this.$refs.tableitemsInput) {
              this.$refs.tableitemsInput[0].focus();
            }
          });
          this.Table_Format_Middle = true;
        }
      }, 0);
    },
     clearSearch(dropdownType) {
        if (dropdownType === 'partyname') {
        this.search = '';
        this.partyDetails();
      setTimeout(() => {
        this.FilteredPartyData = [...this.PartyData];
      }, 500); 

      }
      if (dropdownType === 'ledgertype') {
        this.search = '';
        this.getledgerlist()
        setTimeout(() => {
          this.FilteredLedgerData = [...this.LedgerData]
        }, 500);
      }
      if (dropdownType === 'pricelevel') {
        this.search = '';
        this.get_price_level_list()
        setTimeout(() => {
          this.FilteredPriceLevelData = [...this.PriceLevelData]
        }, 500);
      }
      this[`${dropdownType}SearchQuery`] = "";
      this.toggleDropdown(dropdownType, true);
      this.$nextTick(() => {
        if (this.$refs[`${dropdownType}Input`]) {
          this.$refs[`${dropdownType}Input`].focus();
        }
      });
      // if (dropdownType === "pricelevel") {
      //   this.Table_Format_Middle = false; // Set to false when clearing price level dropdown
      //   this.Bottom_Narration_Format = false;
      // }
    },
    navigateDropdown(dropdownType, step) {
      if(dropdownType == 'voucher'){

        var options = this[`${dropdownType}FilteredOptions`];
      }
      else if(dropdownType == 'partyname'){
        var options = this.FilteredPartyData
      }
      else if(dropdownType == 'ledgertype'){
        var options = this.FilteredLedgerData
      }
      else if(dropdownType == 'pricelevel'){
        var options = this.FilteredPriceLevelData
      }
      const activeIndex = this[`${dropdownType}ActiveIndex`];
      const newIndex = (activeIndex + step + options.length) % options.length;
      this[`${dropdownType}ActiveIndex`] = newIndex;
    },
    selectActiveOption(dropdownType) {
      const index = this[`${dropdownType}ActiveIndex`];
      if (index >= 0) {
        if(dropdownType == 'voucher'){
           this.final_ledgerEntries = []
          this.partynameSearchQuery = ''
          this.ledgertypeSearchQuery = ''
          var option = this[`${dropdownType}FilteredOptions`][index];
          this.selectOption(dropdownType, option);
        }
        else if(dropdownType == 'partyname'){

          var option = this.FilteredPartyData[index]
          this.clearOtherDropdowns();
          this.buyersnameSearchQuery = option.ledgerName
          this.buyercountrySearchQuery = option.countryName
          this.buyerstateSearchQuery = option.stateName
          this.selectedRegistrationTypeOption = option.gstRegistrationType
          this.BuyerPostalCode = option.pincode
          this.BuyerGstin = option.partyGSTIn

          this.consigneenameSearchQuery = option.ledgerName
          this.consigneecountrySearchQuery = option.countryName
          this.consigneestateSearchQuery = option.stateName
          this.consigneePostalCode = option.pincode
          this.consigneeGstin = option.partyGSTIn
          this.ledgerGroupParent = option.parent;
          this.ledgergroup = option.parentgroup
          this.partyGSTIn = option.partyGSTIn;


          this.grandTotal = 0
          this.total_tax = 0;
          this.total_amount = 0;
          this.selectOption(dropdownType, option);
        }
        else if(dropdownType == 'ledgertype'){
          var option = this.FilteredLedgerData[index]
          this.selectOption(dropdownType, option);
          this.grandTotal = 0
          this.total_tax = 0;
          this.total_amount = 0;
          this.AddNewItemList = []
          this.AddNewItemList.push( {
          id: Date.now(),
          tableitemsSearchQuery: "",
          itemquantity: "",
          itemrate: "",
          itemdiscount: "",
          selectedOption: "",
          itemamount: "",
          isChecked: false,
          tableitemsDropdownOpen: false,
          filterOptionData: [],
          godownsData: "",
          tableitemsActiveIndex: -1,
          item_guid:''
        },);

          }
        else if(dropdownType == 'pricelevel'){
           var option = this.FilteredPriceLevelData[index]
           this.selectOption(dropdownType, option);
}

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
    
      if (currentDropdown === "ledgertype") {
        // Handle table items dropdown
        this.AddNewItemList[0].tableitemsDropdownOpen = true;
        this.Table_Format_Middle = true;
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

    toggleTableItemsDropdown(index, isOpen) {
      this.itemSearch = ''
      this.getStockItemList()
    

      this.$set(this.AddNewItemList[index], "tableitemsDropdownOpen", isOpen);
        if (isOpen) {
        this.AddNewItemList.forEach((item, i) => {
         if (i == index) {
         this.filterOptionData = [...this.OptionData]
         }
        });

        this.$set(this.AddNewItemList[index], "tableitemsActiveIndex", -1); 
      }

    },

    async filterTableItemsOptions(event, index) {
      this.AddNewTaxes3List = []
      this.itemSearch = event.target.value;
      await  this.getStockItemList()
      const query = this.itemSearch.toLowerCase();
      const filteredOptions = this.OptionData.filter((option) =>
       option.tableitemsSearchQuery.toLowerCase().includes(query)
        );
      this.filterOptionData = filteredOptions.filter(
      (option, i, arr) =>
      arr.findIndex(
        (o) => o.tableitemsSearchQuery.toLowerCase() === option.tableitemsSearchQuery.toLowerCase()
      ) === i)
      // this.$set(
      //   this.OptionData[index],
      //   "tableitemsFilteredOptions",
      //   filteredOptions
      // );
      // this.$set(this.AddNewItemList[index], "tableitemsActiveIndex", -1); // Reset the active index when filtering
      // console.log(this.itemrate, "hi item rate");
   },
    selectTableItemsOption(option, index) {
      this.itemSearch =  this.$set(this.AddNewItemList[index],"tableitemsSearchQuery",option.tableitemsSearchQuery);
      this.$set(this.AddNewItemList[index],"tableitemsSearchQuery",        option.tableitemsSearchQuery
      );
      this.$set(this.AddNewItemList[index], "tableitemsDropdownOpen", false);
      this.$set(this.AddNewItemList[index], "itemrate",parseFloat(
              this.getPriceAccordingPriceLevel(option, index)
            ).toFixed(2))
      this.$set(this.AddNewItemList[index], "selectedOption", option); 
      this.Bottom_Narration_Format = true;
      this.$nextTick(() => {
        const quantityInput = this.$refs.quantityInput[index];
        if (quantityInput) {
          quantityInput.focus();
        }
      });
      this.AddNewItemList[index].tableitemsSearchQuery = option.tableitemsSearchQuery;
        this.AddNewItemList[index].item_guid = option.guid;
        this.AddNewItemList[index].item_id = option.id;
        this.AddNewItemList[index].hsn_code = option.hsnCode;
        this.AddNewItemList[index].baseUnits = option.baseUnits;
        this.AddNewItemList[index].parent = option.parent;
        this.AddNewItemList[index].parentGuid = option.parentGuid;
        this.AddNewItemList[index].category = option.category;
        this.AddNewItemList[index].categoryGuid = option.categoryGuid;
        this.AddNewItemList[index].rateOfVAT = option.rateOfVAT;

        console.log( this.AddNewItemList[index].item_id , "option.id")
        console.log(option, "option")

        this.getStockItemList();
        this.updateAmount(index);
        this.getlocationlist();
        this.countryDetails()
        this.BuyerstateDetails()
        this.ConsigneestateDetails()

    },
    new_rate(selection, index) {
      if(this.pricelevelSearchQuery){
        console.log("hii new rate",this.AddNewItemList[index].selectedOption )

       if(this.AddNewItemList[index].selectedOption) {
        console.log("hii new rate", )
         this.AddNewItemList[index].itemrate = 
         parseFloat(
           this.getPriceAccordingPriceLevel(this.AddNewItemList[index].selectedOption, index)
         ).toFixed(2);
         console.log( this.AddNewItemList[index].itemrate, " this.AddNewItemList[index].itemrates")
       }
      }
    },
    clearTableItemsSearch(index) {
      
      this.itemSearch = ''
      this.getStockItemList()
      console.log(this.OptionData, "OptionData in cleartablesearch")
      setTimeout(() => {        
        this.filterOptionData = [...this.OptionData]
      }, 500);
      this.$set(this.AddNewItemList[index], "tableitemsSearchQuery", "");
      this.$nextTick(() => {
        this.$set(this.AddNewItemList[index], "tableitemsDropdownOpen", true);
        this.$nextTick(() => {
          if (this.$refs.tableitemsInput && this.$refs.tableitemsInput[index]) {
            this.$refs.tableitemsInput[index].focus();
          }
          if (this.AddNewItemList.length === 1) {
            this.Bottom_Narration_Format = false;
          }
        });
      });
      this.AddNewItemList[index].tableitemsSearchQuery = ''

    },
    navigateTableItemsDropdown(
      index,
      optionsField,
      activeIndexField,
      direction
    ) {
      const options = this.filterOptionData;
      let newIndex = this.AddNewItemList[index][activeIndexField] + direction;
      if (newIndex < 0) newIndex = options.length - 1;
      if (newIndex >= options.length) newIndex = 0;
      this.$set(this.AddNewItemList[index], activeIndexField, newIndex);
    },
    selectTableItemsActiveOption(
      index,
      optionsField,
      activeIndexField,
      searchQueryField,
      type
    ) {
      const options = this.filterOptionData;
      const activeIndex = this.AddNewItemList[index][activeIndexField];
      if (activeIndex >= 0 && activeIndex < options.length) {
        this.selectTableItemsOption(options[activeIndex], index);
      }
     this.getlocationlist();

      // checking how can i store the data of items 
    //   this.final_object = []
    //   for (let i = 0; i < this.AddNewItemList.length; i++) {
    // this.final_object.push({
    //   itemName: this.AddNewItemList[i].tableitemsSearchQuery,
    // });
    // console.log(this.final_object, "at index", i, "console in selectTable function");
    //  }
       // end of check
    },
    /******Other Ledgers************/
    toggleOtherLedgers2Dropdown(index, isOpen) {
     this.$set(this.AddOtherLedgers2List[index], 'otherledgers2DropdownOpen', isOpen);
     if (isOpen) {
       const query = this.AddOtherLedgers2List[index].otherledgers2SearchQuery.toLowerCase();
       const filteredOptions = this.allledgerselection.filter((option) =>
       option.name.toLowerCase().includes(query)
     );
       this.$set(this.AddOtherLedgers2List[index], 'otherledgers2FilteredOptions', filteredOptions);
       this.$set(this.AddOtherLedgers2List[index], 'otherledgers2ActiveIndex', -1);
      }
    },
    filterOtherLedgers2Options(event, index) {
      const query = event.target.value.toLowerCase();
      this.search = query;
      const filteredOptions = this.allledgerselection.filter((option) =>
        option.name.toLowerCase().includes(query)
      );
      this.$set(this.AddOtherLedgers2List[index], 'otherledgers2FilteredOptions', filteredOptions);
      this.$set(this.AddOtherLedgers2List[index], 'otherledgers2ActiveIndex', -1);
      this.getaddmoreledger();
    },
    selectOtherLedgers2Option(option, index,ledgerarray={}) {
      console.log(option,"otherledgers2 options menu selected")
      // this.search = option.name;
      this.ledger_array.push({
        ledger_name: option.name,
          sub_ledger_name: "",
          type: "CR",
          amount: 0,
          ledger_ledgerGuid: option.ledgerGuid, 
          ledger_ledgerGroup: option.ledgerGroup,
          ledger_ledgerGroupParent: option.ledgerGroupParent,
      })
      this.$set(this.AddOtherLedgers2List[index], 'otherledgers2SearchQuery', option.name);
      // this.$set(this.AddOtherLedgers2List[index], 'selectedOption', option);
      this.$set(this.AddOtherLedgers2List[index], 'otherledgers2DropdownOpen', false);
    },
    clearOtherLedgers2Search(index) {
      this.ledger_array.splice(index, 1);
      // Clear the amount and crdr (credit/debit) values
      this.$set(this.AddOtherLedgers2List[index], 'amount', '');
      this.$set(this.AddOtherLedgers2List[index], 'crdr', '');
      this.search='';
      this.getaddmoreledger();
      setTimeout(() => {        
        this.AddOtherLedgers2List[index].otherledgers2FilteredOptions = [...this.allledgerselection]
      }, 500);
      this.$set(this.AddOtherLedgers2List[index], 'otherledgers2SearchQuery', '');
      // this.$set(this.AddOtherLedgers2List[index], 'otherledgers2FilteredOptions', []);
      this.$nextTick(() => {
        this.$set(this.AddOtherLedgers2List[index], 'otherledgers2DropdownOpen', true);
        this.$nextTick(() => {
          if (this.$refs.otherledgers2Input && this.$refs.otherledgers2Input[index]) {
            this.$refs.otherledgers2Input[index].focus();
          }
        });
      });
    },
    navigateOtherLedgers2Dropdown(index, optionsField, activeIndexField, direction) {
      const options = this.AddOtherLedgers2List[index][optionsField];
      let newIndex = this.AddOtherLedgers2List[index][activeIndexField] + direction;
      if (newIndex < 0) newIndex = options.length - 1;
      if (newIndex >= options.length) newIndex = 0;
      this.$set(this.AddOtherLedgers2List[index], activeIndexField, newIndex);
    },
    selectOtherLedgers2ActiveOption(index, optionsField, activeIndexField, searchQueryField, type) {
      const options = this.AddOtherLedgers2List[index][optionsField];
      const activeIndex = this.AddOtherLedgers2List[index][activeIndexField];
      if (activeIndex >= 0 && activeIndex < options.length) {
        this.selectOtherLedgers2Option(options[activeIndex], index);
      }
    },

    /******Add Taxes************/
    toggleAddTaxes3Dropdown(index, isOpen) {
      this.$set(this.AddNewTaxes3List[index], 'addtaxes3DropdownOpen', isOpen);
      if (isOpen) {
        const query = this.AddNewTaxes3List[index].addtaxes3SearchQuery.toLowerCase();
        const filteredOptions = this.taxData.filter((option) =>
          option.ledgerName.toLowerCase().includes(query)
        );
        this.$set(this.AddNewTaxes3List[index], 'addtaxes3FilteredOptions', filteredOptions);
        this.$set(this.AddNewTaxes3List[index], 'addtaxes3ActiveIndex', -1);
      }
    },
    filterAddTaxes3Options(event, index) {
      const query = event.target.value.toLowerCase();
      this.search = query
      const filteredOptions = this.taxData.filter((option) =>
        option.ledgerName.toLowerCase().includes(query)
      );
      this.$set(this.AddNewTaxes3List[index], 'addtaxes3FilteredOptions', filteredOptions);
      this.$set(this.AddNewTaxes3List[index], 'addtaxes3ActiveIndex', -1);
      this.gettaxlist();
    },
    selectAddTaxes3Option(option, index,  ledgerarray={}) {
      const taxledgerName = option.ledgerName
      console.log(option, "option data in select tax function")
      const taxLedgerGroup = option.ledgergroup
      const taxLedgerGroupParent = option.ledgergroupparent
      const taxLedgerGuid = option.guid
      const taxMasterReservedName = option.masterReservedName
      this.$set(this.AddNewTaxes3List[index], 'addtaxes3SearchQuery', option.ledgerName);
      this.$set(this.AddNewTaxes3List[index], 'selectedOption', option.value);
      this.$set(this.AddNewTaxes3List[index], 'addtaxes3DropdownOpen', false);

      if (Object.keys(ledgerarray).length !== 0) {
        // Update case
        var amount_round = parseFloat(this.AddNewTaxes3List[index].amount);
        setTimeout(() => {
          this.AddNewTaxes3List[index].addtaxes3SearchQuery = ledgerarray.ledgerName;
          console.log(this.AddNewTaxes3List, "taxarray console data1")
          
          this.final_part_ledgerEntries.push({
            billAllocationdetails: [],
            bankAllocationDetails: [],
            isMoreLedgerField: "1",
            ledgerName: ledgerarray.ledgerName,
            ledgerTaxType : ledgerarray.ledgerTaxType,
            ledgerGroup: ledgerarray.ledgerGroup,
            ledgerGroupParent: ledgerarray.ledgerGroupParent,
            ledgerGuid: ledgerarray.ledgerGuid,
            amount: parseFloat((amount_round).toFixed(2)),
          });
          
          this.final_ledgerEntries.push(this.final_part_ledgerEntries[index]);
      
        }, 1500);
      } 
      else {
        console.log(this.AddNewTaxes3List, "taxarray console data")

        var amount_round = parseFloat(this.AddNewTaxes3List[index].amount);
       
        this.ledgerTaxType_value = ""
        if((taxledgerName).toLowerCase().includes('cgst')){
          this.ledgerTaxType_value = "cgst"
        }else if ((taxledgerName).toLowerCase().includes('sgst')){
          this.ledgerTaxType_value = "sgst"
        }else if ((taxledgerName).toLowerCase().includes('igst')){
          this.ledgerTaxType_value = "igst"
        }else{
          this.ledgerTaxType_value = ""
        }
        this.final_part_ledgerEntries = [];
        this.final_part_ledgerEntries.push({
          billAllocationdetails: [],
          bankAllocationDetails: [],
          isMoreLedgerField: "1",
          ledgerName: taxledgerName,
          ledgerGroup: taxLedgerGroup,
          ledgerTaxType : this.ledgerTaxType_value,
          ledgerGroupParent: taxLedgerGroupParent,
          ledgerGuid: taxLedgerGuid,
          masterReservedName : taxMasterReservedName,
          amount: parseFloat((amount_round).toFixed(2)),
        });
        this.$set(this.final_ledgerEntries, index, this.final_part_ledgerEntries["0"]);
     
      }
    },
    clearAddTaxes3Search(index) {
      this.$set(this.AddNewTaxes3List[index], 'addtaxes3SearchQuery', '');
      this.$set(this.AddNewTaxes3List[index], 'addtaxes3FilteredOptions', []);
      this.$nextTick(() => {
        this.$set(this.AddNewTaxes3List[index], 'addtaxes3DropdownOpen', true);
        this.$nextTick(() => {
          if (this.$refs.addtaxes3Input && this.$refs.addtaxes3Input[index]) {
            this.$refs.addtaxes3Input[index].focus();
          }
        });
      });
    },
    navigateAddTaxes3Dropdown(index, optionsField, activeIndexField, direction) {
      const options = this.AddNewTaxes3List[index][optionsField];
      let newIndex = this.AddNewTaxes3List[index][activeIndexField] + direction;
      if (newIndex < 0) newIndex = options.length - 1;
      if (newIndex >= options.length) newIndex = 0;
      this.$set(this.AddNewTaxes3List[index], activeIndexField, newIndex);
    },
    selectAddTaxes3ActiveOption(index, optionsField, activeIndexField, searchQueryField, type) {
      const options = this.AddNewTaxes3List[index][optionsField];
      const activeIndex = this.AddNewTaxes3List[index][activeIndexField];
      if (activeIndex >= 0 && activeIndex < options.length) {
        this.selectAddTaxes3Option(options[activeIndex], index);
      }
    },

    AdvancedDroptoggleDropdown(dropdown, open) {
      this[dropdown] = open;
      if (open) {
        const optionsName = dropdown.replace("DropdownOpen", "Options");
        const filteredOptionsName = dropdown.replace(
          "DropdownOpen",
          "FilteredOptions"
        );

        this[filteredOptionsName] = this[optionsName];
        if(dropdown == 'buyercountryDropdownOpen'){
        this[filteredOptionsName] = this.CountryData;

        }
        if(dropdown == 'buyerstateDropdownOpen'){
        this[filteredOptionsName] = this.stateData;

        }
        if(dropdown == 'consigneestateDropdownOpen'){
        this[filteredOptionsName] = this.stateData;

        }
        if(dropdown == 'consigneecountryDropdownOpen'){
        this[filteredOptionsName] = this.CountryData;

        }
        
      }
    },
    async AdvancedDropfilterOptions(dropdownType, searchQueryName, filteredOptionsName, options) {

      const query = this[searchQueryName].toLowerCase();
      
      // this[filteredOptionsName] = options.filter((option) =>
      //   option.label.toLowerCase().includes(query)
      // );
      if(dropdownType == 'buyerNameDropdown' ){
        this.buyerSearch = query
      await  this.buyerDetails()
      this[filteredOptionsName] = options.filter((option) =>
      option.ledgerName.toLowerCase().includes(query)
      );
      this[filteredOptionsName] = [...this.buyersnameOptions]
      }
      if(dropdownType == 'buyerCountryDropdown'){
       this.countrysearch = query
       await this.countryDetails()
        this[filteredOptionsName] = options.filter((option) =>
        option.name.toLowerCase().includes(query)
      );
      this[filteredOptionsName] = [...this.CountryData]
 

      this.buyercountryFilteredOptions = this[filteredOptionsName].filter(
      (option, i, arr) =>
      arr.findIndex(
        (o) => o.name.toLowerCase() === option.name.toLowerCase()
      ) === i)


      }
      if(dropdownType == 'consigneeNameDropdown'){
        this.buyerSearch = query
       await this.buyerDetails()
        this[filteredOptionsName] = options.filter((option) =>
        option.ledgerName.toLowerCase().includes(query)
      );
      this[filteredOptionsName] = [...this.buyersnameOptions]
      }
      if(dropdownType == 'consigneecountryDropdown'){
        this.countrysearch = query
        await this.countryDetails()
        this[filteredOptionsName] = options.filter((option) =>
        option.name.toLowerCase().includes(query)
      );

      this[filteredOptionsName] = [...this.CountryData]
      
      this.consigneecountryFilteredOptions = this[filteredOptionsName].filter(
      (option, i, arr) =>
      arr.findIndex(
        (o) => o.name.toLowerCase() === option.name.toLowerCase()
      ) === i)
    
      }
      if(dropdownType == 'buyerStateDropdown'){
         this[filteredOptionsName] = options.filter((option) =>
        option.name.toLowerCase().includes(query)
      );
      }
      if(dropdownType == 'consigneeStateDropdown'){
         this[filteredOptionsName] = options.filter((option) =>
        option.name.toLowerCase().includes(query)
      );
      }
      

      const activeIndexName = filteredOptionsName.replace(
        "FilteredOptions",
        "ActiveIndex"
      );
      this[activeIndexName] = -1;
    },
    AdvancedDropselectOption(
      selectedOptionName,
      searchQueryName,
      option,
      dropdownType
    ) {
      if(dropdownType == 'buyersname'){
        this[selectedOptionName] = option;
        this[searchQueryName] = option.ledgerName;
        this.buyerSearch = this[searchQueryName]
        this.buyerDetails()
        this.buyersnameSearchQuery = option.ledgerName
          this.buyercountrySearchQuery = option.countryName
          this.buyerstateSearchQuery = option.stateName
          this.selectedRegistrationTypeOption = option.gstRegistrationType
          this.BuyerPostalCode = option.pincode
          this.BuyerGstin = option.partyGSTIn
      }
      if(dropdownType == 'buyercountry' ){
         this[selectedOptionName] = option;
      this[searchQueryName] = option.name;
      this.countryDetails()
      this.BuyerstateDetails()
      }
      if(dropdownType == "consigneename"){
        this[selectedOptionName] = option;
      this[searchQueryName] = option.ledgerName;
      this.buyerSearch = this[searchQueryName]
        this.buyerDetails()
        this.consigneenameSearchQuery = option.ledgerName
          this.consigneecountrySearchQuery = option.countryName
          this.consigneestateSearchQuery = option.stateName
          this.consigneePostalCode = option.pincode
          this.consigneeGstin = option.partyGSTIn
      }
      if(dropdownType == 'consigneecountry' ){
         this[selectedOptionName] = option;
      this[searchQueryName] = option.name;
      this.countryDetails()
      this.ConsigneestateDetails()
      }
      if(dropdownType == 'consigneestate' ){
         this[selectedOptionName] = option;
      this[searchQueryName] = option.name;
      }
      if(dropdownType == 'buyerstate' ){
         this[selectedOptionName] = option;
      this[searchQueryName] = option.name;
      }
      
      // this[selectedOptionName] = option;
      // this[searchQueryName] = option.label;
      this.toggleDropdown(
        selectedOptionName.replace("SelectedOption", "DropdownOpen"),
        false
      );
      console.log("hi i am advancecddropslection")
    },
    AdvancedDropclearSearch(searchQueryName, dropdownType) {
      if(dropdownType == 'BuyerName'){
        this.buyerSearch = ''
        this.buyerDetails()
        setTimeout(() => {
          this.buyersnameFilteredOptions = [...this.buyersnameOptions]
        }, 500);
      }
      if(dropdownType == 'consigneeName'){
        this.buyerSearch = ''
        this.buyerDetails()
        setTimeout(() => {
          this.buyersnameFilteredOptions = [...this.buyersnameOptions]
        }, 500);
      }
      if(dropdownType == 'buyerCountry'){
        this.countrysearch = ''
        this.countryDetails()
        setTimeout(() => {
          this.buyercountryFilteredOptions = [...this.CountryData]
        }, 500);
      }
      if(dropdownType == 'consigneeCountry'){
        this.countrysearch = ''
        this.countryDetails()
        setTimeout(() => {
          this.consigneecountryFilteredOptions = [...this.CountryData]
        }, 500);
        console.log(this.consigneecountryFilteredOptions, "consigneecountryFilteredOptions")
      }
      this[searchQueryName] = "";
      const dropdownName = searchQueryName.replace(
        "SearchQuery",
        "DropdownOpen"
      );
      this.toggleDropdown(dropdownName, false);
    },

    toggleAdvancedSettings() {
      this.isAdvancedSettingsOpen = !this.isAdvancedSettingsOpen;
    },

    getVoucherNumber() {
      this.loading = true;
      this.new_loading = true;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        voucherType: this.voucherSearchQuery,
        voucherTypeId : localStorage.getItem("VoucherTypesId"),

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
    },
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
      searchTerm: this.search,
      sortBy: "ledgerName",
      parent: [
        "Bank Accounts",
        "Bank OD A/c",
        "Bank OCC A/c",
        "Branch / Divisions",
        "Cash-in-Hand",
        "Sundry Creditors",
        "Sundry Debtors",
      ],
      orderBy: 1,
      isFromBackEntry: true,
    };
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      token: localStorage.getItem("webAuthToken"),
    };

    const response = await Api.getLedgersByLedgerGroupParentGo(data, headers);
    const responseData = Common.getStatusForActionFailed(
      response.data.status
    );
    if (responseData == "200") {
      // this.PartyData = response.data.data.list;
      this.PartyData = []
      for (let [key, value] of Object.entries(response.data.data.list)) {
              this.PartyData.push({
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
              });
            }
    }
  } catch (err) {
    Common.getStatusForActionFailed(err.response.status);
  } finally {
    this.loading = false;
  }
},
async buyerDetails() {
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
    parent: [
      "Bank Accounts",
      "Bank OD A/c",
      "Bank OCC A/c",
      "Branch / Divisions",
      "Cash-in-Hand",
      "Sundry Creditors",
      "Sundry Debtors",
    ],
    orderBy: 1
  };

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    token: localStorage.getItem("webAuthToken"),
  };

  try {
    const response = await Api.getLedgersByLedgerGroupParentGo(data, headers);
    const responseData = Common.getStatusForActionFailed(response.data.status);

    if (responseData == "200") {
      this.buyersnameOptions = []
      for(let[key, value] of Object.entries(response.data.data.list)){
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
        });
      }
    }


   
  } catch (err) {
    Common.getStatusForActionFailed(err.response.status);
  } finally {
    this.loading = false;
    this.new_loading = false;
  }
},
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
      searchTerm: this.search,
      parent: ["Sales Accounts"],
      orderBy: 1,
    };
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      token: localStorage.getItem("webAuthToken"),
    };

    const response = await Api.getLedgersByLedgerGroupParentGo(data, headers);
    const responseData = Common.getStatusForActionFailed(response.data.status);

    if (responseData == "200") {
      this.LedgerData = []
      for (let [key, value] of Object.entries(response.data.data.list)) {

      this.LedgerData.push({
        ledgerName: value.ledgerName,
        ledgerId:value.guid,
        ledger_id: value.id
      })
    }
      console.log(this.LedgerData, "hi i am from getledger");
    }
  } catch (err) {
    Common.getStatusForActionFailed(err.response.status);
  } finally {
    this.loading = false;
  }
},
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
    this.PriceLevelData = response.data.data.list;

  } catch (err) {
    Common.getStatusForActionFailed(err.response.status);
  } finally {
    this.loading = false;
  }
},
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
    this.OptionData = []
    for (let [key, value] of Object.entries(response.data.data.list)) {
      this.OptionData.push({
        tableitemsSearchQuery: value.stockItemName,
        itemrate: value.lastSalesPrice,
        hsncode: value.hsnCode,
        standardSellingPriceList: value.standardSellingPriceList,
        fullPriceLevelList: value.fullPriceLevelList,
        guid: value.guid,
        baseUnits: value.baseUnits,
        parentGuid: value.parentGuid,
        category: value.category,
        categoryGuid: value.categoryGuid,
        rateOfVAT: value.rateOfVAT,
        standardSellingPriceList: value.standardSellingPriceList,
        rateLists: value.rateLists,
        gstAppliacable: value.gstAppliacable,
        id: value.id
      });
    }
    console.log(this.OptionData, "console from stockitem");
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
      searchTerm: "",
    };

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      token: localStorage.getItem("webAuthToken"),
    };

    const response = await Api.getGodownsByCompanyIdGo(data, headers);

    if (response.data.message === "success") {
      this.godownsData = response.data.data.list;
      console.log(this.godownsData, "hi godown");
    } else {
      this.godownsData = [];
    }
  } catch (err) {
    console.error(err);
  } finally {
    this.loading = false;
    this.new_loading = false;
  }
},
    async getmoreledger() {
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
    searchTerm: this.search,
    parent: [
      "Direct Expenses",
      "Direct Incomes",
      "Duties & Taxes",
      "Indirect Expenses",
      "Sales Accounts",
      "Indirect Incomes",
      "#4; Primary"
    ],
    orderBy: 1
  };

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    token: localStorage.getItem("webAuthToken"),
  };

  try {
    const response = await Api.getLedgersByLedgerGroupParentGo(data, headers);

    if (response.data.status == "200") {
      this.OtherLedgerData = response.data.data.list ;
    }
  } catch (err) {
    Common.getStatusForActionFailed(err.response.status);
  } finally {
    this.loading = false;
    this.new_loading = false;
  }
},
async gettype() {
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
      console.log(response.data.data.list);
      this.VoucherTypeData = response.data.data.list;
    }
  } catch (err) {
    console.error(err);
    // You can handle any additional error logic here if needed
  }
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
          this.usePriceLevels =
            response.data.data.inventoryFeatures.usePriceLevels;
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
       parent: [
         "Direct Expenses",
         "Direct Incomes",
         "Duties & Taxes",
         "Indirect Expenses",
         "Sales Accounts",
         "Indirect Incomes",
         "#4; Primary"
       ],
       orderBy: 1
     };
     const headers = {
       "Access-Control-Allow-Origin": "*",
       "Content-Type": "application/json",
       token: localStorage.getItem("webAuthToken"),
     };
     Api.getLedgersByLedgerGroupParentGo(data, headers)
       .then((response) => {
         if (response.data.status == "200") {
           this.allledgerselection = [];
           for (let [key, value] of Object.entries(response.data.data.list)) {
             this.allledgerselection.push({
               name : value.ledgerName,
               id: value._id,
               ledgerGuid: value.guid,
               ledgerGroup: value.parent,
               ledgerGroupParent: value.parentgroup
             })
           }
         }
       })
       .catch((err) => {
         Common.getStatusForActionFailed(err.response.status);
         this.loading = false;
       });
   },
    getPriceAccordingPriceLevel(selection, index) {
     console.log(selection, "this is selection data")
     if (this.usePriceLevels == "Yes") {
      console.log("hi upper")
       if (this.pricelevelSearchQuery !== "" && this.pricelevelSearchQuery.toLowerCase() !== "not applicable") {
        console.log("hi lower")
         
         let tempitemDetails = selection.fullPriceLevelList || [];
         let fullPriceLevelList = [];
   
         tempitemDetails.forEach((element) => {
           if (element.priceLevel === this.pricelevelSearchQuery) {
             fullPriceLevelList.push(element);
           }
         });   
         let applicableDateArray = [];
   
         let date = moment(
           moment(String(this.newinvoiceDate)).format("yyyy-MM-DD"),
           "YYYY-MM-DD HH:mm:ss"
         );
         // check for applicable date
         fullPriceLevelList.forEach((element) => {
           if (date.isAfter(moment(element.date, "YYYY-MM-DD HH:mm:ss")) || date.isSame(moment(element.date, "YYYY-MM-DD HH:mm:ss"))) {
             console.log(date, "hi date")
             applicableDateArray.push(element);
           }
         });   
         let applicablePriceLevel = [];
         if (applicableDateArray.length == 0) {
           return "";
         }
         console.log(applicableDateArray.length, "hi date length")
         console.log(applicableDateArray, "hi date bhai")

         if (applicableDateArray.length > 1) {
           applicablePriceLevel = applicableDateArray.reduce((min, e) => {
             const minDate = moment(min.date, "YYYY-MM-DD HH:mm:ss");
             const currentDate = moment(e.date, "YYYY-MM-DD HH:mm:ss");
             return currentDate.isAfter(moment(minDate, "YYYY-MM-DD HH:mm:ss")) ? e : min;
             
           });
         } else {
           applicablePriceLevel = applicableDateArray[0];
           console.log(applicablePriceLevel, "hi applicableDateArray")
         }
         console.log(applicablePriceLevel, "hi applicableDateArray-----2")

         let priceLevelList = applicablePriceLevel["priceLevelList"] || [];
         console.log(priceLevelList, "console data for pricelevel")

         
         let givenRateListWithoutZero = priceLevelList;
         console.log("priceLevelList:", priceLevelList); // Debugging output
         console.log("givenRateListWithoutZero length:", givenRateListWithoutZero.length); // Debugging output
         console.log(givenRateListWithoutZero[0], "givenRateListWithoutZero console")
         if (
           givenRateListWithoutZero.length == 1 &&
           parseFloat(givenRateListWithoutZero[0]["endValue"]) == 0 &&
           parseFloat(givenRateListWithoutZero[0]["startValue"]) == 0
         ) {
           return givenRateListWithoutZero[0]["rateValue"];
         } else {
           if (givenRateListWithoutZero.length == 1) {
             return givenRateListWithoutZero[0]["rateValue"];
           }
         }
         console.log("hi i am working")
   
         let rateValue;
   
         // get price from range of value
         if (priceLevelList.length === 0) {
           rateValue = "";
           console.log("yes length is 0 ")
         } else {
          console.log("pricelevel length", priceLevelList)
          
          for (let [priceLevelkey, priceLevel] of Object.entries(priceLevelList)) {
            if (
  parseFloat(priceLevel["startValue"]) === 0.0 &&
  parseFloat(priceLevel["endValue"]) === 0.0
) {
  console.log("pricelevel in for loop 1");
  rateValue = priceLevel["rateValue"];
} else if (
  parseFloat(priceLevel["startValue"]) === 0.0 &&
  parseFloat(priceLevel["endValue"]) !== 0.0 &&
  parseFloat(this.AddNewItemList[index].itemquantity) <= parseFloat(priceLevel["endValue"])
) {
  console.log("pricelevel in for loop 2");
  rateValue = priceLevel["rateValue"];
} else if (
  parseFloat(priceLevel["startValue"]) !== 0.0 &&
  parseFloat(priceLevel["endValue"]) !== 0.0 &&
  parseFloat(this.AddNewItemList[index].itemquantity) >= parseFloat(priceLevel["startValue"]) &&
  parseFloat(this.AddNewItemList[index].itemquantity) <= parseFloat(priceLevel["endValue"])
) {
  console.log("pricelevel in for loop 3");
  rateValue = priceLevel["rateValue"];
} else if (
  parseFloat(priceLevel["endValue"]) === 0.0 &&
  parseFloat(priceLevel["startValue"]) !== 0.0 &&
  parseFloat(this.AddNewItemList[index].itemquantity) >= parseFloat(priceLevel["startValue"])
) {
  console.log("pricelevel in for loop 4");
  rateValue = priceLevel["rateValue"];
}

           }
           console.log("this is the end of function")
   
           return rateValue;
         }
       } else {
         // getStandardRate
         return this.getStandardRate(selection, index);
       }
     } else {
       // getStandardRate
       return this.getStandardRate(selection, index);
     }
   },
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
        searchTerm: this.search,
        parent: ["Duties & Taxes"],
        orderBy: 1


      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgersByLedgerGroupParentGo(data, headers)
        .then((response) => {
          if (response.data.status != "0") {
            this.taxData = []
            for (let [key, value] of Object.entries(response.data.data.list)) {

              this.taxData.push({
                ledgerName: value.ledgerName,
                ledgergroup: value.parentgroup,
                ledgergroupparent: value.parent,
                guid: value.guid,
                masterReservedName: value.masterReservedName
              })


            }
            console.log("hi tax list", this.taxData)


          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
   getStandardRate(selection, index) {
    console.log("hi getStandardRate working ")
      if (selection.standardSellingPriceList.length == "0") {
        return this.getLastRate(selection, index);
      }
      
      if (selection.standardSellingPriceList.length != "0") {
        let applicableDateArray = [];
        selection.standardSellingPriceList.forEach((element) => {
          if (element["date"] != "") {
            let date = moment(
              moment(String(this.newinvoiceDate)).format("yyyy-MM-DD"),
              "YYYY-MM-DD HH:mm:ss"
            );
            if (date.isAfter(moment(element.date, "YYYY-MM-DD HH:mm:ss"))) {
              applicableDateArray.push(element);
              console.log(applicableDateArray, "hi standard rate function")
            }
          }
        });

        let applicablePriceLevel;

        if (applicableDateArray.length == 0) {
          return this.getLastRate(selection, index);
        }

        if (applicableDateArray.length > 1) {
        
          applicablePriceLevel = applicableDateArray.reduce((min, e) => {
            const minDate = moment(min.date, "YYYY-MM-DD HH:mm:ss");
            const currentDate = moment(e.date, "YYYY-MM-DD HH:mm:ss");
            return currentDate.isAfter(moment(minDate, "YYYY-MM-DD HH:mm:ss"))
              ? e
              : min;
          });
        } else {
          applicablePriceLevel = applicableDateArray[0];
        }
        let priceLevelList = [applicablePriceLevel];
        let rateValue;
        if (priceLevelList.length == "0") {
          return this.getLastRate(selection, index);
        } else {
          rateValue = priceLevelList[0]["ratevalue"];
        }

        return rateValue;
      } else {
        //if no standard rate
        return this.getLastRate(selection, index);
      }
    },
    getLastRate(selection, index) {
      
      return selection.itemrate == "0"
        ? ""
        : parseFloat(selection.itemrate);
    },
    tax_value_amount(event, taxindex) {
      console.log(taxindex, "taxindex")
      this.AddNewTaxes3List[taxindex].amount = event.target.value;
      if(this.final_ledgerEntries[taxindex]){
        this.final_ledgerEntries[taxindex].amount = parseFloat(event.target.value);
      }
      this.tax_calculation(taxindex);
    },
    async gst_calculation(index){
      
      this.AddNewItemList.forEach((value, key) => {
        if(this.AddNewItemList[index].isChecked == true){
          const itemRate = value.itemrate * (1+(this.AddNewItemList[index].gst_per/100))
          var inner_object = {
            itemId: value.item_guid,
            itemSyncId : value.item_guid == "" ? value.item_id : "",
            itemQty: value.itemquantity ? value.itemquantity.toString() : '',
            itemRate: isNaN(itemRate) ? "0" : Math.round(itemRate).toString(), 
            discountPercent : value.itemdiscount,
            isTaxInclusive : this.AddNewItemList[index].isChecked,
            gstPercent : "",
            serialNo : key+1,
            
          };
        }else{
          console.log(value.item_id,"hi gst calculation upper ")

          var inner_object = {
            itemId: value.item_guid,
            itemSyncId : value.item_guid == "" ? value.item_id : "",
            itemQty: value.itemquantity ? value.itemquantity.toString() : '',
            itemRate: isNaN(value.itemrate) ? "0" : value.itemrate.toString(),
            discountPercent : value.itemdiscount,
            isTaxInclusive : this.AddNewItemList[index].isChecked,
            gstPercent : "",
            serialNo : key+1,
            
          };
        }
        this.item_object.splice(key, 1, inner_object);
        console.log("hi gst calculation lower ", value.item_guid)
      });
      const data = {
        _userId : localStorage.getItem("customerId"),
        company_id : localStorage.getItem("companyId"),
        companyGstNumber : localStorage.getItem("companyGstNumber"),
        partyGuid : this.partyGuid,
        voucherParentType : "Sales",
        partyLedgerSyncId : this.partyGuid == "" ? this.partyid : "",
        partyGstNumber : this.partyGSTIn,
        ledgerGuid :  this.ledgerId,
        priceLevel : this.pricelevelSearchQuery,
        voucherDate: moment(String(this.newinvoiceDate)).format("YYYY-MM-DD"),
        itemDetails: this.filterItemDetails(this.item_object),
        otherLedgerDetails : [],
        placeOfSupply : this.BuyerPlaceOfSupply,
        requestFrom : "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      if (Object.keys(this.filterItemDetails(this.item_object)).length !== 0) {
        Api.getGstDetails(data, headers)
        .then((response) => {
          this.AddNewItemList[index].gst_per = response.data.data.voucherGstDetails.gstPercent;
            if(response.data.data.itemGstDetails.length != "0"){
              if (response.data.status != "0") {
                this.AddNewTaxes3List = [];
                this.total_tax = 0;
                this.add_igstApplicable = response.data.data.igstApplicable;

                if (response.data.data.isGstApplicable == false) {
                
                } else {
                  if (response.data.data.igstApplicable == false) {
                  
                    var gst_amount = parseFloat((response.data.data.voucherGstDetails.gstAmount / 2).toFixed(2));
                    this.AddNewTaxes3List.push({
                      addtaxes3SearchQuery: "",
                      tax_name: "CGST",
                      amount: parseFloat(response.data.data.voucherGstDetails.gstAmount / 2).toFixed(2),
                    });
                    this.AddNewTaxes3List.push({
                      addtaxes3SearchQuery: "",
                      tax_name: "SGST",
                      amount: parseFloat(response.data.data.voucherGstDetails.gstAmount / 2).toFixed(2),
                    });
                    this.total_tax += gst_amount + gst_amount;
                  } else {
              
                    this.AddNewTaxes3List.push({
                      addtaxes3SearchQuery: "",
                      tax_name: "IGST",
                      amount: parseFloat(response.data.data.voucherGstDetails.gstAmount).toFixed(2),
                    });
                    this.total_tax += parseFloat(response.data.data.voucherGstDetails.gstAmount);
                  }
                }
                
                this.tax_calculation();

             
               //     this.api_items = response.data.data.itemGstDetails;
                this.tempItmesObject = [];
                   if(response.data.data.itemGstDetails.length != 0){
                      response.data.data.itemGstDetails.forEach((value, key) => {
                    if (response.data.data.igstApplicable == true) {
                      console.log( this.AddNewItemList[key].item_id, " this.AddNewItemList[key].item_guid")
                      this.tempItmesObject.push({
                        stockItemGuid: this.AddNewItemList[key].item_guid,
                        godownName: this.AddNewItemList[key].godownsData,
                        baseUnits : this.AddNewItemList[key].baseUnits,
                        rate:
                          parseFloat(this.AddNewItemList[key].itemrate).toFixed(2) +
                          "/" +
                          this.AddNewItemList[key].baseUnits,
                        actualQty:
                          this.AddNewItemList[key].itemquantity +
                          " " +
                          this.AddNewItemList[key].baseUnits,
                        stockGroup: this.AddNewItemList[key].parent,
                        discount: this.AddNewItemList[key].itemdiscount,
                        qty: parseFloat(this.AddNewItemList[key].itemquantity),
                        ledgerGuid: this.ledgerId   ,
                        stockItemSyncId : this.AddNewItemList[key].item_guid == "" ? this.AddNewItemList[key].item_id : "",
                        orderNumber: "",
                        ledgerName: this.ledgertypeSearchQuery,
                        descriptions: this.AddNewItemList[key].item_description,
                        stockCategory: this.AddNewItemList[key].category,
                        vatTaxRate: this.AddNewItemList[key].rateOfVAT,
                        billedQty:
                          this.AddNewItemList[key].itemquantity +
                          " " +
                          this.AddNewItemList[key].baseUnits,
                        stockItemName: this.AddNewItemList[key].tableitemsSearchQuery,
                        amount: parseFloat(this.AddNewItemList[key].itemamount),
                        ledgerEntry: [],
                        hsnCode: this.AddNewItemList[key].hsn_code,
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
                            amount: parseFloat(value.gstAmount)/ 2,
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
                   console.log("igst is true  and iam working")
                    } 
                    else {
                      this.tempItmesObject.push({
                        stockItemGuid: this.AddNewItemList[key].item_guid,
                        godownName: this.AddNewItemList[key].godownsData,
                        rate:
                          parseFloat(this.AddNewItemList[key].itemrate).toFixed(2) +
                          "/" +
                          this.AddNewItemList[key].baseUnits,
                        baseUnits : this.AddNewItemList[key].baseUnits,
                        actualQty:
                          this.AddNewItemList[key].itemquantity +
                          " " +
                          this.AddNewItemList[key].baseUnits,
                        stockGroup: this.AddNewItemList[key].parent,
                        discount: this.AddNewItemList[key].itemdiscount,
                        qty: parseFloat(this.AddNewItemList[key].itemquantity),
                        ledgerGuid: this.ledgerId,
                        stockItemSyncId : this.AddNewItemList[key].item_guid == "" ? this.AddNewItemList[key].item_id : "",
                        orderNumber: "",
                        ledgerName: this.ledgertypeSearchQuery,
                        descriptions: this.AddNewItemList[key].item_description,
                        stockCategory: this.AddNewItemList[key].category,
                        vatTaxRate: this.AddNewItemList[key].rateOfVAT,
                        billedQty:
                          this.AddNewItemList[key].itemquantity +
                          " " +
                          this.AddNewItemList[key].baseUnits,
                        stockItemName: this.AddNewItemList[key].tableitemsSearchQuery,
                        amount: parseFloat(this.AddNewItemList[key].itemamount),
                        ledgerEntry: [],
                        hsnCode: this.AddNewItemList[key].hsn_code,
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
                }else{
                  this.tempItmesObject = [];
                  this.AddNewItemList.forEach((value, key) => {
                    this.tempItmesObject.push({
                      stockItemGuid: this.AddNewItemList[key].item_guid,
                      godownName: this.AddNewItemList[key].godownsData,
                      rate:
                        parseFloat(this.AddNewItemList[key].itemrate).toFixed(2) +
                        "/" +
                        this.AddNewItemList[key].baseUnits,
                      baseUnits : this.AddNewItemList[key].baseUnits,
                      actualQty:
                        this.AddNewItemList[key].itemquantity +
                        " " +
                        this.AddNewItemList[key].baseUnits,
                      stockGroup: this.AddNewItemList[key].parent,
                      discount: this.AddNewItemList[key].itemdiscount,
                      qty: parseFloat(this.AddNewItemList[key].itemquantity),
                      ledgerGuid: this.ledgerId,
                      stockItemSyncId : this.AddNewItemList[key].item_guid == "" ? this.AddNewItemList[key].item_id : "",
                      orderNumber: "",
                      ledgerName: this.ledgertypeSearchQuery,
                      descriptions: this.AddNewItemList[key].item_description,
                      stockCategory: this.AddNewItemList[key].category,
                      vatTaxRate: this.AddNewItemList[key].rateOfVAT,
                      billedQty:
                        this.AddNewItemList[key].itemquantity +
                        " " +
                        this.AddNewItemList[key].baseUnits,
                      stockItemName: this.AddNewItemList[key].tableitemsSearchQuery,
                      amount: parseFloat(this.AddNewItemList[key].itemamount),
                      ledgerEntry: [],
                      hsnCode: this.AddNewItemList[key].hsn_code,
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
                    stockItemGuid: this.AddNewItemList[key].item_guid,
                    godownName: this.AddNewItemList[key].godownsData,
                    rate:
                      parseFloat(this.AddNewItemList[key].itemrate).toFixed(2) +
                      "/" +
                      this.AddNewItemList[key].baseUnits,
                    baseUnits : this.AddNewItemList[key].baseUnits,
                    actualQty:
                      this.AddNewItemList[key].itemquantity +
                      " " +
                      this.AddNewItemList[key].baseUnits,
                    stockGroup: this.AddNewItemList[key].parent,
                    discount: this.AddNewItemList[key].itemdiscount,
                    qty: parseFloat(this.AddNewItemList[key].itemquantity),
                    ledgerGuid: this.ledgerId,
                    stockItemSyncId : this.AddNewItemList[key].item_guid == "" ? this.AddNewItemList[key].item_id : "",
                    orderNumber: "",
                    ledgerName: this.ledgertypeSearchQuery,
                    descriptions: this.AddNewItemList[key].item_description,
                    stockCategory: this.AddNewItemList[key].category,
                    vatTaxRate: this.AddNewItemList[key].rateOfVAT,
                    billedQty:
                      this.AddNewItemList[key].itemquantity +
                      " " +
                      this.AddNewItemList[key].baseUnits,
                    stockItemName: this.AddNewItemList[key].tableitemsSearchQuery,
                    amount: parseFloat(this.AddNewItemList[key].itemamount),
                    ledgerEntry: [],
                    hsnCode: this.AddNewItemList[key].hsn_code,
                    isIncGSTChecked: false,
                    realAmount: "",
                    taxes: [],
                  });
                });
              }
            }else{
              this.tempItmesObject = [];
              this.AddNewItemList.forEach((value, key) => {
                this.tempItmesObject.push({
                  stockItemGuid: this.AddNewItemList[key].item_guid,
                  godownName: this.AddNewItemList[key].godownsData,
                  rate:
                    parseFloat(this.AddNewItemList[key].itemrate).toFixed(2) +
                    "/" +
                    this.AddNewItemList[key].baseUnits,
                  baseUnits : this.AddNewItemList[key].baseUnits,
                  actualQty:
                    this.AddNewItemList[key].itemquantity +
                    " " +
                    this.AddNewItemList[key].baseUnits,
                  stockGroup: this.AddNewItemList[key].parent,
                  discount: this.AddNewItemList[key].itemdiscount,
                  qty: parseFloat(this.AddNewItemList[key].itemquantity),
                  ledgerGuid: this.ledgerId,
                  stockItemSyncId : this.AddNewItemList[key].item_guid == "" ? this.AddNewItemList[key].item_id : "",
                  orderNumber: "",
                  ledgerName: this.ledgertypeSearchQuery,
                  descriptions: this.AddNewItemList[key].item_description,
                  stockCategory: this.AddNewItemList[key].category,
                  vatTaxRate: this.AddNewItemList[key].rateOfVAT,
                  billedQty:
                    this.AddNewItemList[key].itemquantity +
                    " " +
                    this.AddNewItemList[key].baseUnits,
                  stockItemName: this.AddNewItemList[key].tableitemsSearchQuery,
                  amount: parseFloat(this.AddNewItemList[key].itemamount),
                  ledgerEntry: [],
                  hsnCode: this.AddNewItemList[key].hsn_code,
                  isIncGSTChecked: false,
                  realAmount: "",
                  taxes: [],
                });
              });
              }
            
          })
          
       .catch((error) => {
       console.error("Error in GST calculation API:", error);
     });
      }
      // setTimeout(()=>{  
        console.log(this.tempItmesObject, "final object in gst calculation function")
      // }, 500)
    },
    tax_calculation(index) {
     
     this.total_amount = 0;
     this.total_tax = 0;
     this.AddNewItemList.forEach((number) => {
       if(number.itemamount != ""){
         this.total_amount += parseFloat(number.itemamount);
       }   
     });
     this.AddNewTaxes3List.forEach((number) => {
       if(number.amount != ""){
         this.total_tax += parseFloat(number.amount);
       }
     });
     console.log(this.total_tax, "total tax amount in tax calculation functrion")
     this.ledger_amount = 0;
     this.ledger_array.forEach((number1) => {
          let ledgerAmount = number1.amount === "" || number1.amount === undefined ? 0 : number1.amount;
         
          if (number1.type == "DR") {
            this.ledger_amount -= parseFloat(ledgerAmount);
          } else {
            this.ledger_amount += parseFloat(ledgerAmount);
          }
        });
    //  if (this.showledgers == true) {
    //    this.ledger_array.forEach((number1) => {
    //      let ledgerAmount = number1.amount === "" || number1.amount === undefined ? 0 : number1.amount;
        
    //      if (number1.type == "Debit") {
    //        this.ledger_amount -= parseFloat(ledgerAmount);
    //      } else {
    //        this.ledger_amount += parseFloat(ledgerAmount);
    //      }
    //    });
    //  }

     this.grandTotal = this.total_amount + this.total_tax + this.ledger_amount;
   },
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
      }
    }
  } catch (err) {
   
    Common.getStatusForActionFailed(err.response.status);
  }
},
BuyerstateDetails() {
  
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
      Api.getStateGo(data, headers)
        .then((response) => {
          this.stateData = [];
          for (let [key, value] of Object.entries(response.data.data)) {
            if (value.stateName !== undefined && value.stateName !== "") {

            this.stateData.push({
              name: value.stateName,
              id: value.stateName,
            });
          }
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    ConsigneestateDetails() {
  
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
  Api.getStateGo(data, headers)
    .then((response) => {
      this.stateData = [];
      for (let [key, value] of Object.entries(response.data.data)) {
        if (value.stateName !== undefined && value.stateName !== "") {

        this.stateData.push({
          name: value.stateName,
          id: value.stateName,
        });
      }
      }
    })
    .catch((err) => {
      Common.getStatusForActionFailed(err.response.status);
      this.loading = false;
    });
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
            this.invoice_type =
              response.data.data.vouchers.voucherNumberConfiguration.sales.isSetDefaultNumber;
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    
    setItemsData(selection, key, label, preValue) { 
     if(label == 'update'){

     
        //  this.item_rateLists = selection.rateLists;
        //  this.item_parentGuid = selection.parentGuid;
         
         this.AddNewItemList[key].tableitemsSearchQuery = preValue.stockItemName;
         this.AddNewItemList[key].item_guid = selection.guid;
         this.AddNewItemList[key].hsn_code = selection.hsnCode;
         this.AddNewItemList[key].baseUnits = selection.baseUnits;
         this.AddNewItemList[key].parent = selection.parent;
         this.AddNewItemList[key].parentGuid = selection.parentGuid;
         this.AddNewItemList[key].category = selection.category;
         this.AddNewItemList[key].categoryGuid = selection.categoryGuid;
         this.AddNewItemList[key].rateOfVAT = selection.rateOfVAT;
         this.AddNewItemList[key].itemrate = parseFloat(preValue.rate.split('/')[0]);
         this.AddNewItemList[key].itemamount = preValue.amount;
         this.getStockItemList();
       setTimeout(() => {
         this.updateAmount(key);
       }, 2000)
     }

       
   },


   add_sales(){
    console.log(JSON.stringify(this.tempItmesObject), "JSON.stringify(tempItmesObject)")
     this.stockItemsError = []
     this.final_object = []
     this.taxError = []
     this.advancedError = []
    this.AddNewItemList.forEach((value, key) => {
        
      if (value.tableitemsSearchQuery == "Select Item" || value.tableitemsSearchQuery == "" || value.tableitemsSearchQuery == undefined) {
          this.stockItemsError["tableitemsSearchQuery"] = "Please select item";
        }
        if (value.itemquantity == "" || value.itemquantity == "0") {
      
          this.stockItemsError["itemquantity"] = "Please enter item quantity";
        }
        if (value.itemrate == "" || value.itemrate == "0" || isNaN(value.itemrate)) {
       
          this.stockItemsError["itemrate"] = "Please enter item rate";
        }
        if (value.godownsData == "" || value.godownsData == "select Godown") {
        
          this.stockItemsError["godownsData"] = "Please select godown";
        }


        this.AddNewTaxes3List.forEach((value, key) => {
          
      if(value.addtaxes3SearchQuery == "" || value.addtaxes3SearchQuery == "Select item"){
        this.taxError["addtaxes3SearchQuery"] = "please Select Tax name"
        this.stockItemsError["addtaxes3SearchQuery"] = "please Select Tax name"
      }
      if(value.amount == "" || value.amount == "Amount"){
        this.taxError["amount"] = "Tax amount is required"
         this.stockItemsError["amount"] = "Tax amount is required"
      }

     })
      
      });
      if((this.dispatch_doc_no == "" || this.dispatch_doc_no == "Select") && this.dispatch_shipping_date != ''){
        this.advancedError["dispatch_doc_no"] = "Dispatch doc no. required"
        this.stockItemsError["dispatch_doc_no"] = "Dispatch doc no. required"

      }
      if(this.dispatch_shipping_date == "" && this.dispatch_doc_no != '' ){
          this.advancedError["dispatch_shipping_date"] = "Please Select Shipping Date."
          this.stockItemsError["dispatch_shipping_date"] = "Please Select Shipping Date."
        }
        if(this.order_date == "" && this.order_no != ''){
          this.advancedError["order_date"] = "please select order date"
          this.stockItemsError["order_date"] = "please select order date"
        }
        if(this.order_no == "" && this.order_date != ''){
          this.advancedError["order_no"] = "please select order No."
          this.stockItemsError["order_no"] = "please select order No."
        }
      if(Object.keys(this.stockItemsError).length === 0){
       let newLedgerEntry
       newLedgerEntry = {
        ledgerGroupParent: this.ledgerGroupParent,
        ledgerName: this.partynameSearchQuery,
        ledgerGuid: this.partyGuid,
        billAllocationdetails: [],
        bankAllocationDetails: [],
        isMoreLedgerField: "0",
        ledgerGroup: this.ledgergroup,
        ledgerSyncId: this.partyGuid == "" ? this.partyid : "",
        amount: -parseFloat(this.grandTotal)
    };
        const index = this.final_ledgerEntries.findIndex(entry => entry.ledgerGuid === newLedgerEntry.ledgerGuid);

        if (index !== -1) {
         this.final_ledgerEntries[index] = newLedgerEntry;
        } else {
          this.final_ledgerEntries.push(newLedgerEntry);
        }
          this.add_more_ledger = [];
     
          const indexesToRemove = [];
          this.final_ledgerEntries.forEach((item, index) => {
            if (item.masterReservedName !== "Duties & Taxes" && item.isMoreLedgerField == "1" ) {
              indexesToRemove.push(index);
            }
          });

         

          for (let i = indexesToRemove.length - 1; i >= 0; i--) {
            this.final_ledgerEntries.splice(indexesToRemove[i], 1);
          }
        


          this.ledger_array.forEach((number1, key) => {
            if (number1.type == "DR") {
              var amount = "-" + number1.amount;
            } else {
              var amount = number1.amount;
            }

            this.add_more_ledger.push({
              ledgerName: number1.ledger_name,
         
              descriptions: "",
              ledgerGuid: number1.ledger_ledgerGuid,
              transactionType: "",
              isMoreLedgerField: "1",
              ledgerGroup: number1.ledger_ledgerGroup,
              ledgerGroupParent: number1.ledger_ledgerGroupParent,
              amount: parseFloat(amount),
              billAllocationdetails: [],
              bankAllocationDetails: [],
            });
        
           
            this.final_ledgerEntries.push(this.add_more_ledger[key]);
          });

          this.final_object.push(...this.tempItmesObject)
        
        const data = {
          voucherType: this.voucherSearchQuery,
          voucherDate:  moment(String(this.newinvoiceDate)).format("YYYY-MM-DD"),
          partyGuid: this.ledgerId,
          ledgerPriceLevel: this.pricelevelSearchQuery,
          _userId: localStorage.getItem("customerId"),
          reference: this.voucherNumber,
          StockItemEntries: this.final_object,
          company_id: localStorage.getItem("companyId"),
          partygstIn: this.partyGSTIn,
          isAccountingInvoice: false,
          conSigneegstin: "",
          transferComment: "",
          partyLedgerName: this.partynameSearchQuery,
          parentType: "Sales",
          partyLedgerGuid: this.partyGuid,
          voucherNumber: this.voucherNumber,
          narration: this.narration,
          isTransfer: 0,
          referenceDate:  moment(String(this.newinvoiceDate)).format("YYYY-MM-DD"),
          partyName: this.ledgertypeSearchQuery,
          ledgerEntries: this.final_ledgerEntries,
          requestFrom: "WEB",
          isSetDefaultNumber: this.invoice_type,
          basicBuyerName: this.buyersnameSearchQuery,
          countryOfResidence: this.buyercountrySearchQuery,
          basicBuyerState : this.buyerstateSearchQuery,
          placeOfSupply: this.BuyerPlaceOfSupply,
          gstRegistrationType: this.selectedRegistrationTypeOption,
          billOfLadingNo: this.dispatch_bill_no,
          basicShipDocumentNo: this.dispatch_doc_no,
          basicOrderRef: this.order_other_reference,
          basicFinalDestination: this.dispatch_destination,
          invoiceDelNotes: this.invoiceDelNotes,
          basicShipedBy: this.dispatch_despatch_through,
          basicOrderTerms: this.order_details_address,
          eWayBillDetails: this.eWayBillDetails,
          basicShipVesselNo: this.dispatch_motor_vehicle_no,
          invoiceOrders:this.invoiceOrders,
          // basicDueDateOfPymt: "",
          basicOrderTerms : this.order_terms_of_delivery,
          basicSenderAddress: this.buyer_address,
          isInvoice: "Yes",
          basicBuyerAddress: this.buyer_address,
          basicBuyerPincode: this.BuyerPostalCode,
          conSigneegstin: this.consignee_gstin,
          basicConsigneeName: this.consigneenameSearchQuery,
          basicConsigneeAddress: this.consignee_address,
          basicConsigneeCountry: this.consigneecountrySearchQuery,
          basicConsigneeState: this.consigneestateSearchQuery,
          basicConsigneePartygstIn: this.consigneeGstin,
          basicConsigneePincode: this.consigneePostalCode,
          basicDueDateOfPymt: this.order_mode_of_payment,

          basicShippingDate : this.dispatch_shipping_date != "" && this.dispatch_shipping_date != null ? moment(String(this.dispatch_shipping_date)).format("YYYY-MM-DD") : "",
          basicShipDeliveryNote : this.dispatch_delivery_note != "" && this.dispatch_delivery_note != null ? this.dispatch_delivery_note : "",
          basicOrderDate : this.order_date != "" && this.order_date != null ? moment(String(this.order_date)).format("YYYY-MM-DD") : "",
          basicPurchaseOrderNo : this.order_no != "" && this.order_no != null ? this.order_no : "",

          basicDateTimeOfInvoice: this.order_invoice_date != "" && this.order_invoice_date != null ? moment(String(this.order_invoice_date)).format("YYYY-MM-DD") : "",
          createdBy: localStorage.getItem("customerId"),
          checkedBy: localStorage.getItem("customerId"),
          ledgerTaxType: this.ledgerTaxType_value,
          isInvoice: 'Yes',
          igstApplicable : this.add_igstApplicable

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
   get_Sales_data(){
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
      Api.getVoucherFullDetailsFromSyncGoo(data, headers)
      .then((response) => {
        const responseData = Common.getStatusForActionFailed(
            response.data.status
          );
        if(responseData == "200"){
          const resData = response.data.data
          this.isTransfer = resData.isTransfer;
          this.voucherNumber = resData.reference;
          this.partynameSearchQuery = resData.partyLedgerName;
          // this.select_party = this.partyName;
          this.ledgertypeSearchQuery =resData.partyName;
          this.ledgerId = resData.partyGuid;
          this.customDate = resData.voucherDate;
          this.partyGuid = resData.partyGuid;
          this.pricelevelSearchQuery = resData.ledgerPriceLevel;
          this.voucherSearchQuery = resData.voucherType
        }

           const data = {
            company_id: localStorage.getItem("companyId"),
            _userId: localStorage.getItem("customerId"),
            startLimit: 0,
            endLimit: 100,
            requestFrom: "WEB",
            sortBy: "ledgerName",

            searchTerm: this.partynameSearchQuery,
            parent: [
              "Bank Accounts",
              "Bank OD A/c",
              "Bank OCC A/c",
              "Branch / Divisions",
              "Cash-in-Hand",
              "Cash-in-hand",
              "Sundry Creditors",
              "Sundry Debtors",
              "Direct Incomes"
            ],
          orderBy: 1,
        

          };
          const headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: localStorage.getItem("webAuthToken"),
          };
          Api.getLedgersByLedgerGroupParentGo(data, headers).then((response) => {
            if (response.data.status != "0") {
              for (let [key, value] of Object.entries(
                response.data.data.list
              )) {
                value.id = value._id;
                value.partyguid = value.guid;
                this.selectOption(null, value);
              }
            }
      //       this.stateDetails();
      // this.consigneestateDetails()
          });
        


        this.AddNewItemList = []
        for (let [key, value] of Object.entries(
            response.data.data.stockItemEntries
          )) {
            this.total_amount += parseFloat(value.amount);

            this.AddNewItemList.push({
              tableitemsSearchQuery: value.stockItemName,
              item_guid: value.stockItemGuid,
              tableitemsDropdownOpen: true,
              itemquantity: value.qty,
              itemdiscount: value.discount,
              godownsData: value.godownName,
              itemamount: value.amount,
              itemrate: value.rate.split('/')[0]
            })

            const data = {
              company_id: localStorage.getItem("companyId"),
              _userId: localStorage.getItem("customerId"),
              startLimit: 0,
              endLimit: 100,
              requestFrom: "WEB",
              searchTerm: value.stockItemName,
              orderBy: 1,
              sortBy: "",
              isFromBackEntry: true

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



          for (let [key1, value1] of Object.entries(response.data.data.ledgerEntries)) {
                this.final_ledgerEntries = [];
                this.AddNewTaxes3List = []
              
                
                if(value1.isMoreLedgerField == "1" && (value1.masterReservedName).toLowerCase() == "duties & taxes" ){
                 
                  this.total_tax += parseFloat(value1.amount);
                  this.AddNewTaxes3List.push(
                    {
                      "addtaxes3SearchQuery": value1.ledgerName,
                      "tax_name": value1.name,
                      "amount": value1.amount
                    }
                  )
                  this.final_ledgerEntries.push(value1);
                }
                

             
            }
      })
      .catch((err)=>{
        Common.getStatusForActionFailed(err.response.status);

      })
   },
    filterItemDetails(items) {
      return items.filter(item => item.itemQty !== "" && item.itemRate !== "" && item.itemRate !== 0 && item.itemRate !=="0");
    },
    checkScrollability() {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // Show or hide the button based on whether the page is scrollable
      this.showScrollButton = scrollHeight > clientHeight;

      // Reset scroll direction if scrollable content changes
      if (this.showScrollButton) {
        if (window.pageYOffset + clientHeight >= scrollHeight) {
          this.scrollDirection = "up";
        } else {
          this.scrollDirection = "down";
        }
      } else {
        this.scrollDirection = "down"; // Reset to down if no scrollable content
      }
    },
    handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      // Update showScrollButton based on whether the page is still scrollable
      this.showScrollButton = scrollHeight > clientHeight;

      // Determine the scroll direction based on current scroll position
      if (scrollTop + clientHeight >= scrollHeight) {
        this.scrollDirection = "up";
      } else if (scrollTop === 0) {
        this.scrollDirection = "down";
      }
    },
    scrollPage() {
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      if (this.scrollDirection === "down" && scrollHeight > clientHeight) {
        window.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        });
        this.scrollDirection = "up";
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        this.scrollDirection = "down";
      }

      // After scrolling, check if content changed and update visibility
      this.checkScrollability();
    },
    handleClicked(){
      console.log(this.final_object,"hi bhai submit")
      console.log(this.final_ledgerEntries, "ledgers object")
      this.add_sales();
    },
  },

  mounted() {
    if (this.$route.params.voucher_id !== undefined) {
      this.get_Sales_data();
      this.getlocationlist()
      this.Table_Format_Middle = true;
      this.Bottom_Narration_Format = true;
    }
    // this.getVoucherNumber();
    this.partyDetails();
    this.getledgerlist();
    this.get_price_level_list();
    this.getStockItemList();
    this.buyerDetails();
    this.checkScrollability();
    this.check_price_levels();
    this.gettype();
    this.gettaxlist();
    this.getaddmoreledger()
    this.InvoiceConfigurations()

    setTimeout(() => {
      
      this.FilteredPartyData = this.PartyData
      this.FilteredLedgerData = this.LedgerData
      this.FilteredPriceLevelData = this.PriceLevelData
      this.referenceFilteredOptions = this.referenceOptions;
      this.voucherFilteredOptions = this.VoucherTypeData;
      this.filterOptionData = this.OptionData
      // this.partynameFilteredOptions = this.partynameOptions;
      // this.ledgertypeFilteredOptions = this.ledgertypeOptions;
      // this.pricelevelFilteredOptions = this.pricelevelOptions;
      // this.tableitemsFilteredOptions = this.tableitemsOptions;
      this.buyersnameFilteredOptions = this.buyersnameOptions;
      this.buyercountryFilteredOptions = this.CountryData;
      this.consigneecountryFilteredOptions = this.CountryData
      this.buyerstateFilteredOptions = this.stateData;
      this.consigneestateFilteredOptions = this.stateData
      // this.consigneenameOptions = this.buyersnameOptions
      // this.consigneenameFilteredOptions = this.consigneenameOptions;

      // this.consigneestateFilteredOptions = this.consigneestateOptions;
    }, 1000);

    this.voucherDropdownOpen = true;
    this.$nextTick(() => {
      this.$refs.voucherInput.focus();
    });
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.checkScrollability);
    // Listen for DOM changes to detect if content is dynamically added/removed
    const observer = new MutationObserver(() => {
      this.checkScrollability();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    this.$once("hook:beforeDestroy", () => {
      observer.disconnect();
      window.removeEventListener("scroll", this.handleScroll);
      window.removeEventListener("resize", this.checkScrollability);
    });
  
  },
};
</script>

<style scoped>
.active {
  background-color: #f0f0f0;
}
</style>
