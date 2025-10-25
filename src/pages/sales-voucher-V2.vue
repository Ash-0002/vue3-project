<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section>
    <div class="page-header-title-box dashboard-page-header">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-12">
          <div class="title_text">
            <h4 class="page-title mb-0">Create Sales Voucher</h4>
          </div>
        </div>
      </div>
    </div>
    <!------------------->
    <div class="main_card sales_voucher_main_box new_sales_voucher">
      <div class="card p-0">
        <div class="new_party_form p-0 sales_brd_bottom">
          <div class="row">
            <div class="col-lg-4 col-12 sales_brd_right pt-3 pb-3">
              <div class="bill_to_party" v-if="hide_buyerDetails">
                <div class="new-voucher-heading mb-4"><h4>Bill To</h4></div>
                <!-- <div class="sales_vch_new_dropdown sales_cstm_dropdown party_search_dropdown input_light_border w_100_div">
                <form autocomplete="off" @submit.prevent>
                  <Dropdown
                      :options="existingparty"
                      :maxItem="10"
                      placeholder="Search Existing Party" v-model="party_name">
                  </Dropdown>
                  <img src="/assets/images/1.0/sales/search.png" class="img-fluid search_party" />
                </form>
              </div> -->
                <div class="new-searchable-dropdown-custom-back">
                  <button
                    @click="toggleDropdownpartyname"
                    v-click-outside="closeEvent1"
                    class="dropdown-toggle"
                  >
                    <span class="search-icon-searchable-dropdown"
                      ><i class="fa fa-search"></i></span
                    >{{ selectedOptionpartyname }}
                    <span v-if="isDropdownOpenpartyname"
                      ><i class="fa fa-chevron-up"></i
                    ></span>
                    <span v-else><i class="fa fa-chevron-down"></i></span>
                  </button>
                  <div
                    v-if="isDropdownOpenpartyname"
                    class="searchable-dropdown-ul-format-design"
                  >
                    <!-- Search input field -->
                    <input
                      type="text"
                      v-model="searchQueryPartyName"
                      class="search-input"
                      ref="searchInputSearchable"
                      placeholder="Search..."
                      @input="SearchValue"
                    />
                    <ul class="heading-partyname-amount-new-back">
                      <li>
                        <div class="row">
                          <div class="col-8">
                            <div class="partyname-text-left-heading">
                              Party Name
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="partyname-text-right-heading">
                              Balance
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul class="dropdown-list-new-searchable-dropdown-custom">
                      <li
                        v-for="(option, index) in filteredOptionsparties"
                        :key="index"
                        @click="selectOptionParty(option)"
                      >
                        <div class="row">
                          <div class="col-8">
                            <div class="searchable-party-name-left">
                              <a href="javascript:void(0);">
                                {{ option.ledgerName }}
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="searchable-party-name-right">
                              <a href="javascript:void(0);"
                                ><span class="font_sans">₹</span>
                                {{ Math.abs(option.closingBalance) }}
                                <span
                                  v-if="option.closingBalance >= 0"
                                  class="greenColor"
                                  >CR</span
                                >
                                <span v-else class="redColor">DR</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <span
                    class="error-validation mt-2"
                    v-if="CheckItemArray_Error.Nopartyname"
                    >{{ CheckItemArray_Error.Nopartyname }}</span
                  >
                </div>
              </div>
              <div class="bill_to_party partyname_added" v-else>
                <div class="new-voucher-heading with_change_party mb-4">
                  <h4>Bill To</h4>
                  <span @click="reselect_party">Change Party</span>
                </div>
                <div class="party_buyer_detail">
                  <h5>Buyer Details</h5>
                  <span class="party_name_edit" v-b-modal.edit_buyer_details @click="EditButton"><i class="fa fa-pencil mr-2"></i>EDIT</span>
                </div>               
                <p>
                  <strong>{{ this.buyer_name2 }}</strong></p>
                <p>
                  <strong>GST :  </strong> {{ this.buyer_gst_number2}}</p>
                <p>
                  <strong>Add :  </strong>{{ this.buyer_address2}} </p>
              </div>
              <!------ edit buyer detail popup -->
              <b-modal id="edit_buyer_details" hide-footer centered title="Buyer Details">
                <div class="edit_buyer_details_body">
                  <div class="container">
                    <div class="row">
                      <!-- <div class="col-lg-6 col-md-12 col-12">
                        <div class="sales_vch_new_dropdown sales_cstm_dropdown input_light_border w_100_div sales_searchable_dropdown sales_selection_selectdropdown">
                          <span class="fixedlabel">Buyer</span>
                          <form autocomplete="off">
                            <Dropdown
                                :options="[{ id: 1, name: 'Name 1'}, { id: 2, name: 'Name 2'}]"
                                :maxItem="10"
                                placeholder="Select Buyer" v-model="edit_buyer_name">
                            </Dropdown>
                          </form>
                          </div>
                      </div> -->
                      <div class="col-lg-6 col-md-12 col-12">
                        <div class="sales_selection_selectdropdown new-searchable-dropdown-ledger-type buyer_modal_inner">
                          <button
                            @click="toggleDropdownBuyername"
                            class="dropdown-toggle"
                            v-click-outside="closeEventBuyername">
                            <span class="fixedlabel">Buyer</span>
                            {{ this.buyer_name }}
                            <span v-if="isDropdownOpenBuyername">
                              <i class="fa fa-caret-up consignee_arrow"></i>
                            </span>
                            <span v-else><i class="fa fa-caret-down consignee_arrow"></i></span>
                          </button>
                        </div>
                        <!---->
                        <div class="searchable-dropdown-ul-format-design consignee_name_format_design buyer_popup_design" v-if="isDropdownOpenBuyername">
                          <input
                            type="text"
                            v-model="searchbuyerName"
                            class="search-input"
                            ref="searchInputSearchablebuyer"
                            placeholder="Search..."
                            @input="SearchBuyerName"
                          />
                          
                          <ul class="heading-partyname-amount-new-back">
                            <li>
                              <div class="row">
                                <div class="col-8">
                                  <div class="partyname-text-left-heading">
                                    Party Name
                                  </div>
                                </div>
                                <div class="col-4">
                                  <div class="partyname-text-right-heading">
                                    Balance
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <!---->
                          <ul class="dropdown-list-new-searchable-dropdown-custom Consignee_buyername">
                            <li v-for="(option, index) in filteredOptionsBuyerDetails"
                                :key="index"
                                @click="selectedBuyerOption(option)">
                              <div class="row">
                                <div class="col-8">
                                  <div class="searchable-party-name-left">
                                    <a href="javascript:void(0);">
                                      {{ option.ledgerName }}
                                    </a>
                                  </div>
                                </div>
                                <div class="col-4">
                                  <div class="searchable-party-name-right">
                                    <a href="javascript:void(0);">
                                      <span class="font_sans">₹ {{ Math.abs(option.closingBalance) }}</span>
                                      <span
                                        v-if="option.closingBalance >= 0"
                                        class="greenColor"
                                        >CR</span
                                      >
                                      <span v-else class="redColor">DR</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                      </div>
                      </div>
                      <div class="col-lg-6 col-md-12 col-12">
                        <div
                            class="sales_vch_new_dropdown sales_cstm_dropdown input_light_border w_100_div sales_searchable_dropdown sales_selection_selectdropdown"
                          >
                            <span class="fixedlabel">Country</span>
                            <form autocomplete="off" @submit.prevent >
                              <Dropdown
                                :options="StoreCountry"
                                :maxItem="10"
                                v-on:selected="countrSelected"
                                placeholder="Select Country"
                                v-model="buyer_country"
                                :placeholder="this.buyer_country == undefined || this.buyer_state == '' ? 'select country' : `${this.buyer_country}`"
                              >
                              </Dropdown>
                            </form>
                          </div>
                      </div>
                      <div class="col-lg-6 col-md-12 col-12">
                        <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Pincode</span>
                            <input
                              type="number"
                              placeholder="201301"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="buyer_pincode"
                            />
                          </div>
                      </div>
                      <div class="col-lg-6 col-md-12 col-12">
                        <div
                            class="sales_vch_new_dropdown sales_cstm_dropdown input_light_border w_100_div sales_searchable_dropdown sales_selection_selectdropdown"
                          >
                            <span class="fixedlabel">State</span>
                            <form autocomplete="off" @submit.prevent>
                              <Dropdown
                                :options="StoreState"
                                :maxItem="10"
                                v-on:selected="stateSelected"
                                v-model="buyer_state"
                                :placeholder="this.buyer_state == undefined || this.buyer_state == ''? 'select state' : `${this.buyer_state}`"
                                >
                              </Dropdown>
                            </form>
                          </div>
                          
                      </div>

                      


                      <div class="col-lg-6 col-md-12 col-12">
                        <div
                            class="sales_vch_new_dropdown sales_cstm_dropdown input_light_border w_100_div sales_searchable_dropdown sales_selection_selectdropdown"
                          >
                          <span class="fixedlabel">GST Registration type</span>
                            <form autocomplete="off" @submit.prevent>
                              <Dropdown
                                :options="[
                                  { id: 1, name: 'Composition' },
                                  { id: 2, name: 'Unknown' },
                                  { id: 3, name: 'Consumer' },
                                  { id: 4, name: 'Regular' },
                                  { id: 5, name: 'Unregistered' },
                                ]"
                                :maxItem="10"
                                placeholder="Select GST"
                                v-model="buyer_registeration_type"
                                v-on:selected="ragistraion_typeSelect"
                                :placeholder="this.buyer_registeration_type == undefined ? 'select type' : `${this.buyer_registeration_type}`"
                              >
                              </Dropdown>
                            </form>
                          </div>
                          
                      </div>

                      
                      <!-- <div class="col-lg-6 col-md-12 col-12">
                        <div class="sales_vch_new_dropdown sales_cstm_dropdown input_light_border w_100_div sales_searchable_dropdown sales_selection_selectdropdown">
                          <span class="fixedlabel">City</span>
                          <form autocomplete="off">
                            <Dropdown
                                :options="[{ id: 1, name: 'Ahmedabad'}, { id: 2, name: 'Noida'}]"
                                :maxItem="10"
                                placeholder="Select Buyer" v-model="buyer_city_name">
                            </Dropdown>
                          </form>
                          </div>
                      </div> -->
                      <div class="col-lg-6 col-md-12 col-12">
                        <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">place of supply</span>
                            <input
                              type="text"
                              placeholder="place"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="buyer_supply"
                            />
                          </div>
                      </div>
                      <div class="col-lg-6 col-md-12 col-12">
                        <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">GSTIN/UIN</span>
                            <input
                              type="text"
                              placeholder="number"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="buyer_gst_number"
                            />
                          </div>
                      </div>
                      <div class="col-lg-6 col-md-12 col-12">
                        <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Address</span>
                            <input
                              type="text"
                              placeholder="Address"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="buyer_address"
                            />
                          </div>
                      </div>

                    </div>
                  </div>
                </div>
                  <div class="edit_byer_footer">
                      <div class="edit_buyer_buttons">
                        <button class="cancel" @click="CancelBuyer()">CANCEL</button>
                        <button class="save" @click="SaveBuyerDetails">SAVE</button>
                      </div>
                    </div>                  
              </b-modal>
              <!------ edit buyer detail popup -->
            </div>
            <div class="col-lg-6 col-12 sales_brd_right pt-3 pb-3">
              <div class="sales_voucher_number_detail">
                <label class="form_input_lbl"
                  >Voucher No:
                  <!-- <span class="vch_num_name" v-modal="voucherNumber">LKP-23-24</span></label> -->
                  <span class="vch_num_name">{{
                    this.voucher_Number
                  }}</span></label
                >
              </div>
              <span
                class="error-validation mt-2"
                v-if="voucher_Error.vouchernumber"
                >{{ voucher_Error.vouchernumber }}</span
              >

              <div class="voucher_selection">
                <div
                  class="form-check invoice_radio_button"
                  @click="getVoucherNumber"
                >
                  <input
                    class="form-check-input invoice_radio"
                    type="radio"
                    name="default"
                    id="default"
                    v-model="customvoucher_checked"
                    value="vch_radio_1"
                    checked
                  />
                  <label class="form-check-label" for="default">Default</label>
                </div>
                <div class="form-check invoice_radio_button">
                  <input
                    class="form-check-input invoice_radio"
                    type="radio"
                    name="default"
                    id="custom"
                    v-model="customvoucher_checked"
                    value="vch_radio_2"
                  />
                  <label class="form-check-label" for="custom">Custom</label>
                </div>
                <div class="custom_radio_input">
                  <input
                    type="text"
                    :disabled="customvoucher_checked === 'vch_radio_1'"
                    placeholder="Prefix"
                    class="form-control"
                    v-model="custom_prefix"
                  />
                  <input
                    type="number"
                    :disabled="customvoucher_checked === 'vch_radio_1'"
                    placeholder="Voucher no"
                    class="form-control"
                    v-model="custom_Voucher_number"
                    @keypress="allowOnlyNumbers"
                  />
                  <input
                    type="text"
                    :disabled="customvoucher_checked === 'vch_radio_1'"
                    placeholder="Suffix"
                    class="form-control"
                    v-model="custom_sufix"
                  />
                  <button
                    data-v-b400648c=""
                    class="btn download_border_btn float_right"
                    v-if="customvoucher_checked != 'vch_radio_1'"
                    @click="change_voucherName"
                  >
                    Submit
                  </button>
                </div>
              </div>
              <span
                class="error-validation mt-2"
                v-if="CheckItemArray_Error.NoLedgertype"
                >{{ CheckItemArray_Error.NoLedgertype }}</span
              ><br />

              <div class="vch_no_selection">
                <!-- <div class="sales_selection_selectdropdown">
                  <span class="fixedlabel">Ledger Type <span class="error-validation-star">*</span></span>
                  <select name="" id="" class="sales_vch_new_select form-select input_light_border_dropdown" v-model="ledger_type">
                    <option value="Ledger Type" selected>Ledger Type</option> 
                    <option v-for="ledgertype in ledgertype_data">{{ ledgertype }}</option>
                  </select>
              </div> -->
                <div class="new-searchable-dropdown-ledger-type">
                  <button
                    @click="toggleDropdownledgertype"
                    class="dropdown-toggle"
                    v-click-outside="closeEvent2"
                    :disabled="
                      this.selectedOptionpartyname == 'search existing party'
                    "
                  >
                    <span class="fixedlabel"
                      >Ledger Type
                      <span class="error-validation-star">*</span></span
                    >
                    {{ selectedOptionledgertype }}
                    <span v-if="isDropdownOpenledgertype"
                      ><i class="fa fa-chevron-up"></i
                    ></span>
                    <span v-else><i class="fa fa-chevron-down"></i></span>
                  </button>
                  <div
                    v-if="isDropdownOpenledgertype"
                    class="searchable-dropdown-ul-format-design-ledger"
                  >
                    <!-- Search input field -->
                    <input
                      type="text"
                      v-model="searchQueryledgertype"
                      class="search-input"
                      ref="searchInputSearchableledger"
                      placeholder="Search Ledger"
                    />

                    <ul
                      class="dropdown-list-new-searchable-dropdown-ledger-type"
                    >
                      <li
                        v-for="(
                          optionledger, index
                        ) in filteredOptionsledgertype"
                        :key="index"
                        @click="selectOptionledgertype(optionledger)"
                      >
                        <div class="row">
                          <div class="col-12">
                            <div class="searchable-ledger-type-value">
                              <a href="javascript:void(0);">
                                {{ optionledger.ledgerName }}
                                <p>
                                  GST Applicable :
                                  <span>{{ optionledger.gstApplicable }}</span>
                                  | Tax :
                                  <span
                                    >{{ optionledger.showTotalTaxValue }}%</span
                                  >
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="sales_selection_selectdropdown">
                  <span class="fixedlabel">Reference Type</span>
                  <select
                    name=""
                    id=""
                    class="sales_vch_new_select form-select input_light_border_dropdown"
                    v-model="refrence_type"
                  >
                    <option v-for="refrencetype in refrencedata">
                      {{ refrencetype }}
                    </option>
                  </select>
                </div>
                <input
                  type="number"
                  placeholder="Bill No."
                  class="form-control"
                  v-model="bill_number"
                  v-if="refrence_type == 'New Reference'"
                  @keypress="allowOnlyNumbers"
                />
              </div>
            </div>
            <div class="col-lg-2 col-12 pt-3 pb-3">
              <div class="sales_selection_selectdropdown mb-3">
                <span class="fixedlabel">Invoice Date:</span>
                <div
                  class="datepicker_image_set input-disable-overlay-hide-all-div invoice_date_input"
                >
                  <span class="sales_date_img_new">
                    <img
                      src="/assets/images/1.0/sales/calendar.svg"
                      class="img-fluid"
                    />
                  </span>
                  <Datepicker
                    v-model="invoiceDate"
                    format="dd MMM yyyy"
                    placeholder="03 Nov 2023"
                  >
                  </Datepicker>
                </div>
              </div>
              <div
                class="sales_selection_selectdropdown"
                v-if="usePriceLevels == 'Yes'"
                :disabled="this.selectedOptionledgertype == 'select ledger'"
              >
                <span class="fixedlabel">Price Level</span>
                <select
                  name=""
                  id=""
                  class="sales_vch_new_select form-select input_light_border_dropdown"
                  v-model="price_level"
                  @change="getitemlist"
                >
                  <option value="" selected disabled>select price level</option>
                  <option v-for="priceleveloption in PriceLevel_options">
                    {{ priceleveloption.priceLevelName }}
                  </option>
                </select>
              </div>
              <span
                class="error-validation mt-2"
                v-if="CheckItemArray_Error.price_level"
                >{{ CheckItemArray_Error.price_level }}</span
              >
            </div>
          </div>
        </div>
        <!--------------------->
        <div class="add_item_section sales_brd_bottom">
          <div class="additem_table">
            <div class="table-responsive">
              <table class="table table-stripped">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Item/Services</th>
                    <th>HSN/SAC</th>
                    <th>Rate</th>
                    <th>Qty</th>
                    <th>Disc %</th>
                    <th>Godown</th>
                    <th>Amount</th>
                    <th>Tax Incl</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in selectedItemsFinal" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>
                      {{ item.stockItemData.stockItemName }}
                      <input
                        type="text"
                        placeholder="Enter Narration (Optional)"
                        class="form-control narration_item_input"
                      />
                    </td>
                    <td>{{ item.stockItemData.hsnCode }}</td>
                    <td>
                      <!-- {{ item.lastSalesPrice }} -->
                      <input
                        type="number"
                        placeholder="rate"
                        v-model="item.lastSalesPrice"
                        class="form-control only-input-disable-all-hide-overlay"
                        @input="changeAmount(index, $event)"
                        @keypress="allowOnlyNumbers"
                      />
                    </td>
                    <td>
                      <!-- {{ item.quantity || 1}}  -->
                      <input
                        type="number"
                        placeholder="qty"
                        v-model="item.quantity"
                        class="form-control only-input-disable-all-hide-overlay"
                        @input="changeQuantity(index, $event)"
                        @keypress="allowOnlyNumbers"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        placeholder="%"
                        class="form-control only-input-disable-all-hide-overlay"
                        @input="changeDiscount(index, $event)"
                        @keypress="limitvalidationDiscount"
                      />
                    </td>
                    <td>
                      <div class="">
                        <select
                          name=""
                          id=""
                          class="sales_vch_new_select form-select input_light_border_dropdown"
                          v-model="item.godown_select"
                          @change="changeGowdown(index, $event)"
                        >
                          <option v-for="location in location_name">
                            {{ location.name }}
                          </option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <input
                        disabled
                        type="text"
                        v-model="item.totalrowamount"
                        class="form-control only-input-disable-all-hide-overlay"
                      />
                    </td>
                    <td align="center">
                      <span
                        class="additem_checkbox configuration_checkbox text-center"
                      >
                        <b-form-checkbox
                          v-model="item.tax_inclusive"
                          :checked="item.tax_inclusive"
                          @change="changeCheckbox(index, $event)"
                        ></b-form-checkbox>
                      </span>
                      <!-- <div class="d-flex">
              <input type="checkbox" class="tax_inclusive_checkbox"  v-model="tax_incl" />
              <input type="text" placeholder="0 %" class="form-control tax_input_ml" :disabled="!tax_incl"/>
            </div> -->
                    </td>
                    <td>
                      <button
                        class="delete_sales_item"
                        @click="deleteinsertrow(index, item)"
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>

                  <tr style="display: none">
                    <td>1</td>
                    <td>
                      White Bread
                      <input
                        type="text"
                        placeholder="Enter Narration (Optional)"
                        class="form-control narration_item_input"
                      />
                    </td>
                    <td>000000</td>
                    <td>
                      <input
                        type="text"
                        placeholder="2100"
                        class="form-control only-input-disable-all-hide-overlay"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="2"
                        class="form-control only-input-disable-all-hide-overlay"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="2"
                        class="form-control only-input-disable-all-hide-overlay"
                      />
                    </td>
                    <td>
                      <div class="">
                        <select
                          name=""
                          id=""
                          class="form-select input_light_border_dropdown"
                          v-model="item_location"
                        >
                          <option v-for="location in location_name">
                            {{ location }}
                          </option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="4200.00"
                        class="form-control only-input-disable-all-hide-overlay"
                      />
                    </td>
                    <td>
                      <div class="d-flex">
                        <input
                          type="checkbox"
                          class="tax_inclusive_checkbox"
                          v-model="tax_incl"
                        />
                        <input
                          type="text"
                          placeholder="0 %"
                          class="form-control tax_input_ml"
                          :disabled="!tax_incl"
                        />
                      </div>
                    </td>
                    <td>
                      <button class="delete_sales_item">
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!------->
          <div
            v-b-modal.add_item
            class="border_add_item"
            :disabled="canSelectItems"
            @click="check_Party_Ledger"
          >
            <span class="addplusitem"
              ><i class="fa fa-plus mr-2"></i>ADD ITEM</span
            >
          </div>
        </div>

        <!--------------------->
        <div class="added_taxes_item">
          <div class="row">
            <div class="col-lg-4 col-12">
              <div class="sales_brd_bottom taxes_sales_card">
                <div class="addtaxes_card">
                  <h3>Taxes</h3>
                  <span class="addplusitem" @click="addtaxes"
                    ><i class="fa fa-plus"></i> ADD</span
                  >
                </div>
                <div
                  class="addtaxed_filed"
                  v-for="(taxessummary, taxesindex) in taxdivs"
                  :key="taxesindex"
                >
                  <select
                    name=""
                    id=""
                    class="sales_vch_new_select form-select input_light_border_dropdown"
                    v-model="taxessummary.gst_type"
                    @change="Change_tax_type($event, taxesindex)"
                  >
                  <option value="" disabled selected>Select type</option>
                    <option v-for="gstarray in taxType_Array">{{ gstarray.ledgerName }}</option>
                  </select>
                  <!-- <input type="number" placeholder="₹105.00" class="form-control only-input-disable-all-hide-overlay mrl_15" v-model="gst_Amount" @input="changeTaxes_amount($event,taxesindex)"/> -->
                  <input
                    type="number"
                    placeholder="₹"
                    class="form-control only-input-disable-all-hide-overlay mrl_15"
                    v-model="taxessummary.gst_IndexAmount"
                    @input="changeTaxes_amount($event, taxesindex)"
                  />
                  <button
                    class="delete_sales_item"
                    @click="deleteTaxes(taxesindex)"
                  >
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
              </div>
              <div class="sales_brd_bottom taxes_sales_card">
                <div class="addtaxes_card">
                  <h3>Other Ledgers</h3>
                  <span class="addplusitem" @click="addledgers"
                    ><i class="fa fa-plus"></i> ADD</span
                  >
                </div>

                <div
                  v-for="(ledgersummary, ledgerindex) in ledgersdivs"
                  :key="ledgerindex" >

                    <div class="row align-items-center">
                      <div class="col-lg-10 col-md-12 col-12">
                        <div class="row">
                          <div class="col-12">
                            <div class="add_ledger_firstdiv">
                              <div class="sales_vch_new_dropdown sales_cstm_dropdown input_light_border w_100_div sales_searchable_dropdown sales_selection_selectdropdown"
                                >
                                  <!-- <span class="fixedlabel">Country</span> -->
                                  <form autocomplete="off" @submit.prevent >
                                    <Dropdown
                                      :options="StoreOtherLedger"
                                      :maxItem="10"
                                      v-on:selected="OtherSelected($event,ledgerindex)"
                                      placeholder="Select Ledger"
                                      v-model="ledgersummary.other_ledger_party"
                                      :placeholder="ledgersummary.other_ledger_party == '' || ledgersummary.other_ledger_party == undefined ? 'select Ledger' : `${ledgersummary.other_ledger_party}`"
                                    >
                                    </Dropdown>
                                  </form>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div class="row mb-1" >
                          <div class="col-lg-6 col-md-12 col-12">
                              <input
                              type="number"
                              placeholder="amt"
                              :disabled="ledgersummary.other_ledger_party == undefined"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="ledgersummary.other_ledger_amount"
                              @input="calculate_otherAmount($event,ledgerindex)"
                              />
                          </div>
                          <div class="col-lg-6 col-md-12 col-12">
                              <select
                              name=""
                              id=""
                              :disabled="ledgersummary.other_ledger_party == undefined"
                              class="sales_vch_new_select form-select input_light_border_dropdown doubleline_selection_new"
                              v-model="ledgersummary.other_ledger_typeSelect"
                              @change="calculate_otherAmountType($event,ledgerindex)"
                              >
                              <option value="" selected disabled>Select</option>
                              <option v-for="otherType in other_ledger_type">
                              {{ otherType }}
                              </option>
                              </select>
                          </div>
                        </div>
                        
                      </div>

                      <div class="col-lg-2 col-md-12 col-12">
                        <button
                    class="delete_sales_item"
                    @click="deleteLedgers(ledgerindex)"
                  >
                    <i class="fa fa-trash"></i>
                  </button>
                      </div>
                    </div>

                </div>

              </div>
              <div class="sales_brd_bottom taxes_sales_card">
                <div class="addtaxes_card">
                  <h3>Narration</h3>
                  <span
                    class="addplusitem"
                    @click="addnarration"
                    v-if="addnarration_btn"
                    ><i class="fa fa-plus"></i> ADD</span
                  >
                </div>
                <div
                  class="addtaxed_filed"
                  v-for="(narrationsummary, narrationindex) in narrationdivs"
                  :key="narrationindex"
                >
                  <div class="sales-voucher-textarea" style="width: 85%">
                    <textarea
                      type="text"
                      placeholder="Write here..."
                      rows="3"
                      v-model="narration"
                    ></textarea>
                  </div>
                  <button
                    class="delete_sales_item"
                    @click="deleteNarration(narrationindex)"
                  >
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>

            <!------>
            <div class="col-lg-8 col-12">
              <div class="sales_details_tabbing">
                <ul>
                  <!-- <li>
                    <a
                      class="details_link"
                      v-on:click="toggleTabs(1)"
                      v-bind:class="{
                        details_link_inactive: openTab !== 1,
                        details_link_active: openTab === 1,
                      }"
                      >Buyer Details</a
                    >
                  </li> -->
                  <li>
                    <a
                      class="details_link"
                      v-on:click="toggleTabs(2)"
                      v-bind:class="{
                        details_link_inactive: openTab !== 1,
                        details_link_active: openTab === 2,
                      }"
                      >Consignee Details</a
                    >
                  </li>
                  <li>
                    <a
                      class="details_link"
                      v-on:click="toggleTabs(3)"
                      v-bind:class="{
                        details_link_inactive: openTab !== 2,
                        details_link_active: openTab === 3,
                      }"
                      >Dispatch Details</a
                    >
                  </li>
                  <li>
                    <a
                      class="details_link"
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
                      class="details_link"
                      v-on:click="toggleTabs(5)"
                      v-bind:class="{
                        details_link_inactive: openTab !== 4,
                        details_link_active: openTab === 5,
                      }"
                      >e-Way Bill Details</a
                    >
                  </li>
                </ul>
                <div class="tab_details_content">
                  <div class="tab-content tab-space">
                    <!-- <div
                      v-bind:class="{
                        hidden: openTab !== 1,
                        block: openTab === 1,
                      }"
                    >
                      <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Buyer Name</span>
                            <input
                              type="text"
                              placeholder="Shahbaz"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="buyer_name"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div
                            class="sales_vch_new_dropdown sales_cstm_dropdown input_light_border w_100_div sales_searchable_dropdown sales_selection_selectdropdown"
                          >
                            <span class="fixedlabel">Country</span>
                            <form autocomplete="off" @submit.prevent >
                              <Dropdown
                                :options="StoreCountry"
                                :maxItem="10"
                                v-on:selected="countrSelected"
                                placeholder="Select Country"
                                v-model="buyer_country"
                                :placeholder="this.buyer_country == undefined || this.buyer_state == '' ? 'select country' : `${this.buyer_country}`"
                              >
                              </Dropdown>
                            </form>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Pincode</span>
                            <input
                              type="number"
                              placeholder="201301"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="buyer_pincode"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">place of supply</span>
                            <input
                              type="text"
                              placeholder="place"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="buyer_supply"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div
                            class="sales_vch_new_dropdown sales_cstm_dropdown input_light_border w_100_div sales_searchable_dropdown sales_selection_selectdropdown"
                          >
                            <span class="fixedlabel">State</span>
                            <form autocomplete="off" @submit.prevent>
                              <Dropdown
                                :options="StoreState"
                                :maxItem="10"
                                v-on:selected="stateSelected"
                                v-model="buyer_state"
                                :placeholder="this.buyer_state == undefined || this.buyer_state == ''? 'select state' : `${this.buyer_state}`"
                                >
                              </Dropdown>
                            </form>
                          </div>
                        </div>
                       
                        <div class="col-lg-4 col-md-6 col-12">
                          <div
                            class="sales_vch_new_dropdown sales_cstm_dropdown input_light_border w_100_div sales_searchable_dropdown sales_selection_selectdropdown"
                          >
                            <span class="fixedlabel">GST Registration type</span>
                            <form autocomplete="off" @submit.prevent>
                              <Dropdown
                                :options="[
                                  { id: 1, name: 'Composition' },
                                  { id: 2, name: 'Unknown' },
                                  { id: 3, name: 'Consumer' },
                                  { id: 4, name: 'Regular' },
                                  { id: 5, name: 'Unregistered' },
                                ]"
                                :maxItem="10"
                                placeholder="Select GST"
                                v-model="buyer_registeration_type"
                                v-on:selected="ragistraion_typeSelect"
                                :placeholder="this.buyer_registeration_type == undefined ? 'select type' : `${this.buyer_registeration_type}`"
                              >
                              </Dropdown>
                            </form>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">GSTIN/UIN</span>
                            <input
                              type="text"
                              placeholder="number"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="buyer_gst_number"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Address</span>
                            <input
                              type="text"
                              placeholder="Address"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="buyer_address"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div
                          class="col-lg-12 col-md-12 col-12 text-center mt-4 mb-2"
                        >
                          <button class="item_cancel_btn" @click="trysubmit">UPDATE</button>
                        </div>
                      </div>
                    </div> -->
                    <div
                      v-bind:class="{
                        hidden: openTab !== 2,
                        block: openTab === 2,
                      }"
                    >
                      <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown new-searchable-dropdown-ledger-type consignee_button_drop">
                            <button
                              @click="toggleDropdownconsigneename"
                              class="dropdown-toggle"
                              :disabled="
                              this.selectedOptionpartyname == 'search existing party'
                            "
                              v-click-outside="closeEventconsigneename">
                              <span class="fixedlabel">Consignee Name</span>
                              {{ this.consignee_name }}
                              <span v-if="isDropdownOpencongigneename">
                                <i class="fa fa-caret-up consignee_arrow"></i>
                              </span>
                              <span v-else><i class="fa fa-caret-down consignee_arrow"></i></span>
                            </button>
                          </div>
                          <!---->
                          <div class="searchable-dropdown-ul-format-design consignee_name_format_design" v-if="isDropdownOpencongigneename">
                            <input
                              type="text"
                              v-model="searchconsigneeName"
                              class="search-input"
                              ref="searchInputSearchableconsignee" 
                              placeholder="Search..."
                              @input="SearchConsigneeName"
                            />
                            <ul class="heading-partyname-amount-new-back">
                              <li>
                                <div class="row">
                                  <div class="col-8">
                                    <div class="partyname-text-left-heading">
                                      Party Name
                                    </div>
                                  </div>
                                  <div class="col-4">
                                    <div class="partyname-text-right-heading">
                                      Balance
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <!---->
                            <ul class="dropdown-list-new-searchable-dropdown-custom Consignee_buyername">
                              <li v-for="(option, index) in filteredOptionsConsigneeDetails"
                                :key="index"
                                @click="selectedConsigneeOption(option)">
                                <div class="row">
                                  <div class="col-8">
                                    <div class="searchable-party-name-left">
                                      <a href="javascript:void(0);">
                                        {{ option.ledgerName }}
                                      </a>
                                    </div>
                                  </div>
                                  <div class="col-4">
                                    <div class="searchable-party-name-right">
                                      <a href="javascript:void(0);">
                                        <span class="font_sans">₹ {{ Math.abs(option.closingBalance) }}</span>
                                        <span
                                        v-if="option.closingBalance >= 0"
                                        class="greenColor"
                                        >CR</span
                                      >
                                      <span v-else class="redColor">DR</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                         </div>
                          <!---->
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div
                        
                            class="sales_vch_new_dropdown sales_cstm_dropdown input_light_border w_100_div sales_searchable_dropdown sales_selection_selectdropdown"
                          >
                            <span class="fixedlabel">Country</span>
                            <form autocomplete="off" @submit.prevent>
                              <Dropdown
                              :options="ConsigneecountryData"
                              v-on:selected="consigneecountrSelected"
                                :maxItem="10"
                                :disabled="this.selectedOptionpartyname =='search existing party'"
                                placeholder="Select Country"
                                v-model="consignee_country"
                                :placeholder="this.consignee_country == undefined ? 'select country' : `${this.consignee_country}`"
                              >
                              </Dropdown>
                            </form>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Pincode</span>
                            <input
                              type="number"
                              :disabled="this.selectedOptionpartyname =='search existing party'"
                              placeholder="201301"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="consignee_pincode"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div
                            class="sales_vch_new_dropdown sales_cstm_dropdown input_light_border w_100_div sales_searchable_dropdown sales_selection_selectdropdown"
                          >
                            <span class="fixedlabel">State</span>
                            <form autocomplete="off" @submit.prevent>
                              <Dropdown
                              :options="consigneestateData"
                              v-on:selected="consigneestateSelected"
                                :maxItem="10"
                                :disabled="this.selectedOptionpartyname =='search existing party'"
                                placeholder="Select State"
                                v-model="consignee_state"
                                :placeholder="this.consignee_state == undefined ? 'select state' : `${this.consignee_state}`"
                              >
                              </Dropdown>
                            </form>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Address</span>
                            <input
                              type="text"
                              placeholder="Address"
                              :disabled="this.selectedOptionpartyname =='search existing party'"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="consignee_address"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">GST/UIN</span>
                            <input
                              type="text"
                              placeholder="Address"
                              :disabled="this.selectedOptionpartyname =='search existing party'"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="consignee_gstin"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div
                          class="col-lg-12 col-md-12 col-12 text-center mt-4 mb-2"
                        >
                          <button class="item_cancel_btn" @click="trysubmit">UPDATE</button>
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
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown mb-3">
                            <span class="fixedlabel">Shipping Date</span>
                            <div
                              class="datepicker_image_set input-disable-overlay-hide-all-div invoice_date_input"
                            >
                              <span class="sales_date_img_new">
                                <img
                                  src="/assets/images/1.0/sales/calendar.svg"
                                  class="img-fluid"
                                />
                              </span>
                              <Datepicker
                                v-model="dispatch_shipping_date"
                                :disabled="this.selectedOptionpartyname =='search existing party'"
                                format="dd MMM yyyy"
                                placeholder="03 Nov 2023"
                              >
                              </Datepicker>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Dispatch Note</span>
                            <input
                              type="text"
                              placeholder="Note"
                              :disabled="this.selectedOptionpartyname =='search existing party'"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="dispatch_delivery_note"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Dispatch Doc No</span>
                            <input
                              type="text"
                              placeholder="1234"
                              :disabled="this.selectedOptionpartyname =='search existing party'"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="dispatch_doc_no"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Bill Number</span>
                            <input
                              type="text"
                              placeholder="123456"
                              :disabled="this.selectedOptionpartyname =='search existing party'"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="dispatch_bill_no"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Dispatch Through</span>
                            <input
                              type="text"
                              placeholder="Vehicle"
                              :disabled="this.selectedOptionpartyname =='search existing party'"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="dispatch_despatch_through"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Vehicle Number</span>
                            <input
                              type="text"
                              placeholder="DL02A-0025"
                              :disabled="this.selectedOptionpartyname =='search existing party'"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="dispatch_motor_vehicle_no"
                            />
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Destination</span>
                            <input
                              type="text"
                              placeholder="123456"
                              :disabled="this.selectedOptionpartyname =='search existing party'"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="dispatch_destination"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div
                          class="col-lg-12 col-md-12 col-12 text-center mt-4 mb-2"
                        >
                          <button class="item_cancel_btn" @click="trysubmit">UPDATE</button>
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
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown mb-3">
                            <span class="fixedlabel">Order Date</span>
                            <div
                              class="datepicker_image_set input-disable-overlay-hide-all-div invoice_date_input"
                            >
                              <span class="sales_date_img_new">
                                <img
                                  src="/assets/images/1.0/sales/calendar.svg"
                                  class="img-fluid"
                                />
                              </span>
                              <Datepicker
                                v-model="order_date"
                                format="dd MMM yyyy"
                                placeholder="03 Nov 2023"
                              >
                              </Datepicker>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Order Number</span>
                            <input
                              type="text"
                              placeholder="12890"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="order_no"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Mode Of Payment</span>
                            <input
                              type="text"
                              placeholder="Online"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="order_terms_of_payment"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Other Reference</span>
                            <input
                              type="text"
                              placeholder="Reference"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="order_other_reference"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Terms of Delivery</span>
                            <input
                              type="text"
                              placeholder="Terms"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="order_terms_of_delivery"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">Address</span>
                            <input
                              type="text"
                              placeholder="Address"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="order_details_address"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div
                          class="col-lg-12 col-md-12 col-12 text-center mt-4 mb-2"
                        >
                          <button class="item_cancel_btn">UPDATE</button>
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
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown mb-3">
                            <span class="fixedlabel">e-Way Bill Date</span>
                            <div
                              class="datepicker_image_set input-disable-overlay-hide-all-div invoice_date_input"
                            >
                              <span class="sales_date_img_new">
                                <img
                                  src="/assets/images/1.0/sales/calendar.svg"
                                  class="img-fluid"
                                />
                              </span>
                              <Datepicker
                                v-model="eway_date"
                                format="dd MMM yyyy"
                                placeholder="03 Nov 2023"
                              >
                              </Datepicker>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div class="sales_selection_selectdropdown">
                            <span class="fixedlabel">e-Way Bill Number</span>
                            <input
                              type="text"
                              placeholder="eg: 123456789098765"
                              class="form-control only-input-disable-all-hide-overlay label_space_input"
                              v-model="eway_bill_number"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div
                          class="col-lg-12 col-md-12 col-12 text-center mt-4 mb-2"
                        >
                          <button class="item_cancel_btn">UPDATE</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--------------------->
      </div>
      <div v-if="Final_submission_error" id="tax_div_move_top" class="qrl_error_box">
      <p v-if="Final_submission_error.no_items">{{ Final_submission_error.no_items }}</p>
      <!-- <span class="error-validation" v-if="Final_submission_error.no_items">{{
        Final_submission_error.no_items
        }}</span> -->
        </div>
    </div>
    <!----------- footer amount ---------->
    <div class="sales_fixed_amount_total">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="grand_total">
              <table>
                <tbody>
                  <tr>
                    <td>Sub Total</td>
                    <td align="right">
                      <span class="font_sans">₹</span
                      >{{ this.Final_SubTotalAmount }}
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
                      <span class="font_sans">₹</span>{{ this.Final_TaxAmount }}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Grand Total</td>
                    <td align="right">
                      <span class="font_sans">₹</span>
                      {{ this.Final_TotalAmount }}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div class="col-lg-8 col-md-6 col-sm-6 col-12">
            <button
              class="btn download_border_btn float_right"
              @click="createVoucher()"
            >
              CREATE VOUCHER
            </button>
          </div>
        </div>
      </div>
    </div>

    <!----------- add_item popup start -------------->
    <b-modal
      ref="AddItemPopup"
      id="add_item"
      hide-footer
      centered
      title="Add Item"
    >
      <div class="container-fluid p-0">
        <div class="search-lead-container">
          <input
            type="text"
            class="search-input"
            placeholder="Search Item"
            v-model="StockSearchValue"
            @input="SearchStockItems"
          />
          <i class="fa fa-search"></i>
        </div>

        <div class="additem_table_height">
          <table class="table additem_popup_table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Current Stock</th>
                <th>Rate</th>
                <th>Quantity</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(item, index) in items"
                :key="index"
                v-bind:class="{ selected: item.isSelected }"
              >
                <td>
                  <div class="checkbox_with_itemname">
                    <span class="additem_checkbox configuration_checkbox">
                      <b-form-checkbox
                        id="name"
                        :name="'leadname_' + index"
                        :checked="item.isSelected"
                      ></b-form-checkbox>
                    </span>
                    <div>
                      <div>{{ item.stockItemName }}</div>
                      <div class="additem_hsncode">
                        HSN Code: {{ item.hsnCode }}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{{ item.totalQuantity }}</td>
                <td>
                  <input
                    type="number"
                    v-model="item.updated_price"
                    placeholder="enter amt"
                    class="form-control only-input-disable-all-hide-overlay"
                    @input="updatePrice(index)"
                    @keypress="allowOnlyNumbers"
                  />
                  <!-- <span class="error-validation" v-if="StockAddError.rateEmpty">{{
                  StockAddError.rateEmpty
                }}</span> -->
                  <span
                    class="error-validation"
                    v-if="StockAddError[`rateEmpty_${index}`]"
                    >{{ StockAddError[`rateEmpty_${index}`] }}</span
                  >
                </td>

                <td>
                  <input
                    type="number"
                    v-model="item.quantity"
                    placeholder="enter qty"
                    class="form-control only-input-disable-all-hide-overlay"
                    @input="
                      updateQuantity(index), handleCheckboxChange(index, item)
                    "
                    @keypress="allowOnlyNumbers"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="brd_top">
          <div class="row m-auto">
            <div class="col-lg-9 col-md-6 col-12 mt-3 mb-3">
              <div class="selected_additem_user">
                <div class="selected_additem_totaluser">
                  <p>
                    Items:
                    <span class="selectedadditem-count">
                      {{ this.selectedItemsLength }}</span
                    >
                  </p>
                  <span class="indicator">|</span>
                  <p>
                    Total Qty:
                    <span class="selectedadditem-count">
                      {{ this.selectedItemsQuantity }}</span
                    >
                  </p>
                </div>
                <p>
                  Total Amount:
                  <span class="selectedadditem-count">
                    <span class="font_sans">₹</span
                    >{{ this.selectedItemsTotalAmount }}</span
                  >
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 text-right mt-3 mb-3">
              <button class="item_cancel_btn" @click="additem_modal_cancel">
                CANCEL
              </button>
              <button class="btn download_border_btn" @click="addSelectedRows">
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    <!----------- add_item popup end -------------->
  </section>
</template>

<script>
import Vue from "vue";
import Api from "@/Api";
import moment from "moment";
// import Dropdown from "../components/Dropdown.vue";
import Dropdown from "../components/Dropdown.vue";
import Datepicker from "vuejs-datepicker";

Vue.use(Dropdown);

export default {
  components: {
    Dropdown,
    Datepicker,
  },
  data() {
    return {
      edit_buyer_name: "",
      buyer_city_name: "",
      searchbuyerName: "",
      storebuyer_party: "",
      SearchOtherLedger: "",
      other_amount_type_enable:true,
      OtherLedgerTotal: 0,
      hide_buyerDetails:true,
      isDropdownOpenOtherLedger: false,
      isDropdownOpenBuyername: false,
      isDropdownOpencongigneename: false,
      searchconsigneeName: "",
      searchbuyerinput: "",
      customvoucher_checked: "vch_radio_1",
      voucher_Number: "",
      taxType_Array:[],
      StoreCountry:[],
      StoreOtherLedger:[],
      ConsigneecountryData:[],
      Final_submission_error:[],
      consigneestateData:[],
      StoreState:[],
      partyGuid: "",
      countrysearch: "",
      ledgerId: "",
      partyGstNumber: "",
      customDate: "",
      isvoucher_type: "",
      isSetDefaultNumber: true,
      custom_prefix: "",
      custom_sufix: "",
      custom_Voucher_number: "",
      indexTaxValue: "",
      StockAddError: [],
      voucher_Error: [],
      selectedItemsLength: 0,
      selectedItemsQuantity: 0,
      defaultQuantity: 1,
      selectedItemsTotalAmount: 0,
      Final_SubTotalAmount: 0,
      Final_TaxAmount: 0,
      gst_Amount: "",
      Final_TotalAmount: 0,
      final_Selected: [],
      selectedItemsFinal: [],
      Tax_inclusive_Array: [],
      Tax_Calculation_Array: [],
      rateList_Array: [],
      CheckItemArray_Error: [],
      canSelectItems: true,
      price_level: "",
      usePriceLevels: "",
      salespricedata: ["Sales", "Purchase"],
      PriceLevel_options: ["Sales", "Purchase"],
      refrence_type: "",
      refrencedata: ["On Account", "New Reference"],
      bill_number: "",
      selectedParty: {},
      invoiceDate: new Date(),
      dispatch_shipping_date: new Date(),
      order_date: new Date(),
      eway_date: new Date(),
      // itemsoption:[],
      StockSearchValue: "",
      SelectedItemArray: [],
      itemSearch: "",
      ledger_type: "",
      ledgertype_data: ["SALES  ACCOUNT (INTER)", "SALES ACCOUNT (INTRA)"],
      item_location: "",
      location_name: ["Main Location", "Godown"],
      tax_incl: false,
      gst_select: "",
      gstdata: ["SGST","CGST",'IGST'],
      gst_itemsArray: [],
      delivery_challan: "",
      other_ledger_select: "",
      other_ledger_input: "",
      other_ledger_type: ["Credit", "Debit"],
      other_ledger_name: [],
      ledger_cr_dr: "",
      crdr_data: ["0.00", "0.00"],
      openTab: 2,
      taxdivs: [],
      ledgersdivs: [],
      narrationdivs: [],
      items: [
        {
          name: "White Bread",
          hsnCode: "000000",
          currentstock: "100 PCS",
          isSelected: false,
        },
        {
          name: "Brown Bread",
          hsnCode: "000000",
          currentstock: "150 PCS",
          isSelected: false,
        },
        {
          name: "Ice-Cream",
          hsnCode: "000000",
          currentstock: "70 PCS",
          isSelected: false,
        },
        {
          name: "Cold-Drink",
          hsnCode: "000000",
          currentstock: "70 PCS",
          isSelected: false,
        },
        // Add more items as needed
      ],
      selectedItems: [],
      existingparty: [
        { name: "A ONE ELECTRONICS (CC) $Rs1000", label: "" },
        { name: "A ONE ELECTRONICS (CC)" },
        { name: "A. Viswanathan (Pondicherry)" },
        { name: "AMBEY ELECTRONICS (DEORIA)" },
        { name: "AJAY KUMAR " },
      ],


        buyer_name:'',
        buyer_name2:'',
        buyer_address:'',
        buyer_address2:'',
        buyer_country:'',
        buyer_state:'',
        buyer_pincode:'',
        buyer_supply:'',
        buyer_registeration_type:'',
        buyer_gst_number:'',
        buyer_gst_number2:'',


      consignee_name: "select consignee",
      consignee_country: "",
      consignee_state: "",
      consignee_pincode: "",
      consignee_address: "",
      consignee_gstin: "",
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
      eway_bill_number: "",
      party_name: "",
      voucherNumber: "",
      dispatch_doc_no: "",
      narration: "",
      addnarration_btn: true,
      isDropdownOpenpartyname: false,
      selectedOptionpartyname: "search existing party",
      options: [
        { name: "Industrial Aromatics Pvt Ltd", amount: "21000.00" },
        { name: "ABCD Private Limited", amount: "21000.00" },
        { name: "Livekeeping Technologies", amount: "21000.00" },
        { name: "Arun Enterprises", amount: "21000.00" },
        { name: "Arush Metal Limited", amount: "21000.00" },
        { name: "Sanjay Polymer", amount: "21000.00" },
        { name: "XYZ Private LImited", amount: "21000.00" },
        { name: "Metal Casting LImited", amount: "21000.00" },
        { name: "Asaraf clothing Private Limited", amount: "21000.00" },
        { name: "Surya Polymer", amount: "21000.00" },
      ],
      searchQueryPartyName: "",
      search: "",
      isDropdownOpenledgertype: false,
      selectedOptionledgertype: "select ledger",
      optionsledgers: [
        { name: "Sales @18%" },
        { name: "Sales Zero Percent" },
        { name: "@on Item" },
        { name: "GST on Item" },
        { name: "GST on Group" },
      ],
      searchQueryledgertype: "",
    };
  },
  computed: {
    // Filter options based on search query
    filteredOptionsparties() {
      return this.options.filter((option) =>
        option.ledgerName
          .toLowerCase()
          .includes(this.searchQueryPartyName.toLowerCase())
      );
    },
    filteredOptionsBuyerDetails() {
      return this.options.filter((optionbuyer) =>
      optionbuyer.ledgerName
          .toLowerCase()
          .includes(this.searchbuyerName.toLowerCase())
      );
    },
    // filteredOptionsOtherLedgerDetails() {
    //   return this.options.filter((optionbuyer) =>
    //   optionbuyer.ledgerName
    //       .toLowerCase()
    //       .includes(this.other_ledger_input.toLowerCase())
    //   );
    // },
    filteredOptionsConsigneeDetails() {
      return this.options.filter((optionbuyer) =>
      optionbuyer.ledgerName
          .toLowerCase()
          .includes(this.searchconsigneeName.toLowerCase())
      );
    },
    filteredOptionsStockItems() {
      return this.items.filter((option) =>
        option.stockItemName
          .toLowerCase()
          .includes(this.StockSearchValue.toLowerCase())
      );
    },
    // filteredOptionsledgertype() {
    //   return this.options.filter((option) =>
    //     option.name
    //       .toLowerCase()
    //       .includes(this.searchQueryledgertype.toLowerCase())
    //   );
    // },
    filteredOptionsledgertype() {
      return this.optionsledgers.filter((optionledger) =>
        optionledger.ledgerName
          .toLowerCase()
          .includes(this.searchQueryledgertype.toLowerCase())
      );
    },
   
  },
  created() {
    this.Calculate_final_screen();
  },
  watch: {
    selecteditemFinal: {
      handler: function (newVal) {
        this.Calculate_final_screen();
      },
      deep: true,
    },
  },
  methods: {
    CancelBuyer(){
      this.$bvModal.hide('edit_buyer_details');
    },
    toggleDropdownpartyname() {
      this.isDropdownOpenpartyname = !this.isDropdownOpenpartyname;
      // this.selectedItemsFinal=[];
      if (this.isDropdownOpenpartyname) {
        this.$nextTick(() => {
          this.$refs.searchInputSearchable.focus();
        });
      }
    },
    // toggleDropdownBuyername(){
    //   this.isDropdownOpenBuyername = !this.isDropdownOpenBuyername; 
    //   if (this.isDropdownOpenBuyername) {
    //     // this.$nextTick(() => {
    //     //   this.$refs.searchInputSearchablebuyer.focus();
    //     // });
    //     this.$nextTick(() => {
    //     this.$refs.searchInputSearchablebuyer.focus();
    //   });
    //   }   
    // },
    toggleDropdownBuyername() {
  this.isDropdownOpenBuyername = !this.isDropdownOpenBuyername; 
  if (this.isDropdownOpenBuyername) {
    setTimeout(() => {
      this.$refs.searchInputSearchablebuyer.focus();
    }, 0);
  }
},
// toggleDropdownOtherLedger() {
//   this.isDropdownOpenOtherLedger = !this.isDropdownOpenOtherLedger; // Toggle the dropdown
//   if (this.isDropdownOpenOtherLedger) {
//     setTimeout(() => {
//       this.$refs.searchInputSearchableOtherLedger.focus();
//     }, 10);
//   }
// },


    toggleDropdownconsigneename(){
      this.isDropdownOpencongigneename = !this.isDropdownOpencongigneename; 
      if (this.isDropdownOpencongigneename) {
        this.$nextTick(() => {
          this.$refs.searchInputSearchableconsignee.focus();
        });
      }    
    },
    closeEventBuyername(){
      this.isDropdownOpenBuyername = false;
    },
    // closeEventOtherLedger(){
    //   this.isDropdownOpenOtherLedger = false;
    // },
    SearchBuyerValue() {
      this.searchconsignee = this.searchbuyerName;
    },
    
    closeEventconsigneename(){
      this.isDropdownOpencongigneename = false;
    },
  
    getVoucherNumber() {
      this.voucher_Error = [];
      this.isSetDefaultNumber = true;
      this.custom_prefix = "";
      this.custom_Voucher_number = "";
      this.custom_sufix = "";

      this.UpdateInvoiceConfigurations();

      const data = {
        companyId: localStorage.getItem("companyId"),
        customerId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        voucherType: "Sales",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getNextVoucherNumber(data, headers)
        .then((response) => {
          if (response.data.status != "0") {
            this.voucher_Number = response.data.data.voucherNumber;
          } else {
            this.voucherNumber = "";
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    getConfiguarationForInvoice() {
      const data = {
        companyId: localStorage.getItem("companyId"),
        customerId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getInvoiceConfigurations(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            console.log("invoice darta", response.data.data);
            // //Invoice Detail Config
            // this.invoiceDetails.ConsigneeDetails =
            //   response.data.data.mobileAppConfigurations.vouchers.showConsigneeDetails;
            // this.invoiceDetails.GodownName =
            //   response.data.data.mobileAppConfigurations.vouchers.showGodownNumber;
            // this.invoiceDetails.Narration =
            //   response.data.data.mobileAppConfigurations.vouchers.showNarration;
            // this.invoiceDetails.ShowStockExpire =
            //   response.data.data.mobileAppConfigurations.vouchers.showExpiry;
            // this.invoiceDetails.ShowStockDiscount =
            //   response.data.data.mobileAppConfigurations.vouchers.showDiscount;
            // this.invoiceDetails.ItemDescription =
            //   response.data.data.mobileAppConfigurations.vouchers.showItemDescription;
            // this.invoiceDetails.Batches =
            //   response.data.data.mobileAppConfigurations.vouchers.showBatchNumber;
            // this.invoiceDetails.InvoiceShareGST =
            //   response.data.data.mobileAppConfigurations.vouchers.showItemWiseGSTRate;
            // this.invoiceDetails.LedgerDescription =
            //   response.data.data.mobileAppConfigurations.vouchers.showLedgerDescription;
            // this.invoiceDetails.eWayBill =
            //   response.data.data.mobileAppConfigurations.vouchers.showEwayBillDetails;
            // this.invoiceDetails.BankAccount =
            //   response.data.data.mobileAppConfigurations.vouchers.showBankDetails;
            // this.invoiceDetails.bankselected =
            //   response.data.data.mobileAppConfigurations.vouchers.setBankLedger;

            // //voucher Number Configurations
            // this.voucherNumber.isSales =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.sales.isSetDefaultNumber;
            const Prefix =
              response.data.data.mobileAppConfigurations.vouchers
                .voucherNumberConfiguration.sales.customizeVoucherNumber.prefix;
            const isSalesNumber =
              response.data.data.mobileAppConfigurations.vouchers
                .voucherNumberConfiguration.sales.customizeVoucherNumber.number;
            const isSalesSuffix =
              response.data.data.mobileAppConfigurations.vouchers
                .voucherNumberConfiguration.sales.customizeVoucherNumber.suffix;

            // this.voucher_Number =( Prefix + isSalesNumber + isSalesSuffix).toUperCase()
            this.voucher_Number = (
              Prefix +
              isSalesNumber +
              isSalesSuffix
            ).toUpperCase();

            // this.voucherNumber.isSalesOrder =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.salesorder.isSetDefaultNumber;
            // this.voucherNumber.isSalesOrderPrefix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.salesorder.customizeVoucherNumber.prefix;
            // this.voucherNumber.isSalesOrderNumber =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.salesorder.customizeVoucherNumber.number;
            // this.voucherNumber.isSalesOrderSuffix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.salesorder.customizeVoucherNumber.suffix;

            // this.voucherNumber.isPurchase =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.purchase.isSetDefaultNumber;
            // this.voucherNumber.isPurchasePrefix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.purchase.customizeVoucherNumber.prefix;
            // this.voucherNumber.isPurchaseNumber =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.purchase.customizeVoucherNumber.number;
            // this.voucherNumber.isPurchaseSuffix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.purchase.customizeVoucherNumber.suffix;

            // this.voucherNumber.isPurchaseOrder =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.purchaseorder.isSetDefaultNumber;
            // this.voucherNumber.isPurchaseOrderPrefix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.purchaseorder.customizeVoucherNumber.prefix;
            // this.voucherNumber.isPurchaseOrderNumber =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.purchaseorder.customizeVoucherNumber.number;
            // this.voucherNumber.isPurchaseOrderSuffix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.purchaseorder.customizeVoucherNumber.suffix;

            // this.voucherNumber.isReceipt =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.receipt.isSetDefaultNumber;
            // this.voucherNumber.isReceiptPrefix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.receipt.customizeVoucherNumber.prefix;
            // this.voucherNumber.isReceiptNumber =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.receipt.customizeVoucherNumber.number;
            // this.voucherNumber.isReceiptSuffix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.receipt.customizeVoucherNumber.suffix;

            // this.voucherNumber.isPeyment =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.payment.isSetDefaultNumber;
            // this.voucherNumber.isPeymentPrefix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.payment.customizeVoucherNumber.prefix;
            // this.voucherNumber.isPeymentNumber =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.payment.customizeVoucherNumber.number;
            // this.voucherNumber.isPeymentSuffix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.payment.customizeVoucherNumber.suffix;

            // this.voucherNumber.isCreditNote =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.creditnote.isSetDefaultNumber;
            // this.voucherNumber.isCreditNotePrefix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.creditnote.customizeVoucherNumber.prefix;
            // this.voucherNumber.isCreditNoteNumber =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.creditnote.customizeVoucherNumber.number;
            // this.voucherNumber.isCreditNoteSuffix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.creditnote.customizeVoucherNumber.suffix;

            // this.voucherNumber.isDebitNote =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.debitnote.isSetDefaultNumber;
            // this.voucherNumber.isDebitNotePrefix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.debitnote.customizeVoucherNumber.prefix;
            // this.voucherNumber.isDebitNoteNumber =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.debitnote.customizeVoucherNumber.number;
            // this.voucherNumber.isDebitNoteSuffix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.debitnote.customizeVoucherNumber.suffix;

            // this.voucherNumber.isJournal =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.journal.isSetDefaultNumber;
            // this.voucherNumber.isJournalPrefix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.journal.customizeVoucherNumber.prefix;
            // this.voucherNumber.isJournalNumber =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.journal.customizeVoucherNumber.number;
            // this.voucherNumber.isJournalSuffix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.journal.customizeVoucherNumber.suffix;

            // this.voucherNumber.isContra =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.contra.isSetDefaultNumber;
            // this.voucherNumber.isContraPrefix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.contra.customizeVoucherNumber.prefix;
            // this.voucherNumber.isContraNumber =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.contra.customizeVoucherNumber.number;
            // this.voucherNumber.isContraSuffix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.contra.customizeVoucherNumber.suffix;

            // this.voucherNumber.isQuotation =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.quotation.isSetDefaultNumber;
            // this.voucherNumber.isQuotationPrefix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.quotation.customizeVoucherNumber.prefix;
            // this.voucherNumber.isQuotationNumber =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.quotation.customizeVoucherNumber.number;
            // this.voucherNumber.isQuotationSuffix =
            //   response.data.data.mobileAppConfigurations.vouchers.voucherNumberConfiguration.quotation.customizeVoucherNumber.suffix;

            // //customize Header
            // this.declarationchecked =
            //   response.data.data.mobileAppConfigurations.vouchers.showDeclaration;
            // this.CustomizedDeclaration =
            //   response.data.data.mobileAppConfigurations.vouchers.customisedDeclaration;
            // this.defaultDeclaration =
            //   response.data.data.mobileAppConfigurations.vouchers.defaultDeclaration;

            //invoice header customize

            // console.log('invoice data-----------',response.data.data)

            // this.invoiceHeader.invoiceheaderisChecked =
            //   response.data.data.mobileAppConfigurations.vouchers.showCustomisedHeaders;
            // this.invoiceHeader.sales =
            //   response.data.data.mobileAppConfigurations.vouchers.customisedHeaders.sales;
            //             this.voucher_Number
            // this.voucher_Number =
            //               response.data.data.mobileAppConfigurations.vouchers.customisedHeaders.sales;
            //  alert(sales)

            //   this.invoiceHeader.salesOrder =
            //     response.data.data.mobileAppConfigurations.vouchers.customisedHeaders.salesOrder;
            //   this.invoiceHeader.Purchase =
            //     response.data.data.mobileAppConfigurations.vouchers.customisedHeaders.purchase;
            //   this.invoiceHeader.PurchaseOrder =
            //     response.data.data.mobileAppConfigurations.vouchers.customisedHeaders.purchaseOrder;
            //   this.invoiceHeader.Receipt =
            //     response.data.data.mobileAppConfigurations.vouchers.customisedHeaders.receipt;
            //   this.invoiceHeader.Peyment =
            //     response.data.data.mobileAppConfigurations.vouchers.customisedHeaders.payment;
            //   this.invoiceHeader.Contra =
            //     response.data.data.mobileAppConfigurations.vouchers.customisedHeaders.contra;
            //   this.invoiceHeader.Journal =
            //     response.data.data.mobileAppConfigurations.vouchers.customisedHeaders.journal;
            //   this.invoiceHeader.CreditNote =
            //     response.data.data.mobileAppConfigurations.vouchers.customisedHeaders.creditNote;
            //   this.invoiceHeader.DebitNote =
            //     response.data.data.mobileAppConfigurations.vouchers.customisedHeaders.debitNote;
            //   this.invoiceHeader.Quotation =
            //     response.data.data.mobileAppConfigurations.vouchers.customisedHeaders.quotation;
            //   this.invoiceHeader.DeliveryNote =
            //     response.data.data.mobileAppConfigurations.vouchers.customisedHeaders.deliveryNote;

            //   //invoice header Default

            //   // console.log('invoice data-----------',response.data.data)
            //   this.DefaultHeaderStatic=response.data.data.mobileAppConfigurations.vouchers.defaultHeaders

            //   this.invoiceHeaderDefault.salesDefault =
            //     response.data.data.mobileAppConfigurations.vouchers.defaultHeaders.sales;
            //   this.invoiceHeaderDefault.salesOrderDefault =
            //     response.data.data.mobileAppConfigurations.vouchers.defaultHeaders.salesOrder;
            //   this.invoiceHeaderDefault.PurchaseDefault =
            //     response.data.data.mobileAppConfigurations.vouchers.defaultHeaders.purchase;
            //   this.invoiceHeaderDefault.PurchaseOrderDefault =
            //     response.data.data.mobileAppConfigurations.vouchers.defaultHeaders.purchaseOrder;
            //   this.invoiceHeaderDefault.ReceiptDefault =
            //     response.data.data.mobileAppConfigurations.vouchers.defaultHeaders.receipt;
            //   this.invoiceHeaderDefault.PeymentDefault =
            //     response.data.data.mobileAppConfigurations.vouchers.defaultHeaders.payment;
            //   this.invoiceHeaderDefault.ContraDefault =
            //     response.data.data.mobileAppConfigurations.vouchers.defaultHeaders.contra;
            //   this.invoiceHeaderDefault.JournalDefault =
            //     response.data.data.mobileAppConfigurations.vouchers.defaultHeaders.journal;
            //   this.invoiceHeaderDefault.CreditNoteDefault =
            //     response.data.data.mobileAppConfigurations.vouchers.defaultHeaders.creditNote;
            //   this.invoiceHeaderDefault.DebitNoteDefault =
            //     response.data.data.mobileAppConfigurations.vouchers.defaultHeaders.debitNote;
            //   this.invoiceHeaderDefault.QuotationDefault =
            //     response.data.data.mobileAppConfigurations.vouchers.defaultHeaders.quotation;
            //   this.invoiceHeaderDefault.DeliveryNoteDefault =
            //     response.data.data.mobileAppConfigurations.vouchers.defaultHeaders.deliveryNote;

            //   //image
            //   setTimeout(() => {
            //     this.SignatureimagePreview =
            //     response.data.data.mobileAppConfigurations.vouchers.setSignatureImage;
            //     this.imagePreview =
            //       response.data.data.mobileAppConfigurations.vouchers.setCompanyLogoImage;

            //       this.showimageSelected =
            //   response.data.data.mobileAppConfigurations.vouchers.showCompanyLogoImage;

            //   this.SignatureshowimageSelected =
            //     response.data.data.mobileAppConfigurations.vouchers.showSignatureImage;

            // if(this.imagePreview != ""){
            //   this.imageUrlToBlob(this.imagePreview)
            // }
            // if(this.SignatureimagePreview != ""){
            //   this.SignatureimageUrlToBlob(this.SignatureimagePreview)
            // }
            //   }, 1000);
          }
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          console.log("err");
          // this.loading = false;
        });
    },

    // change_refrenceType(){
    //   console.log(this.refrence_type)
    // },

    change_voucherName() {
      this.voucher_Error = [];
      this.isSetDefaultNumber = false;

      if (this.custom_Voucher_number == "") {
        this.voucher_Error["vouchernumber"] = "please enter Voucher No.";
      }

      if (Object.keys(this.voucher_Error).length == 0) {
        this.UpdateInvoiceConfigurations();
      }
    },

    UpdateInvoiceConfigurations() {
      const data = {
        companyId: localStorage.getItem("companyId"),
        requestFrom: "WEB",

        voucherNumberConfiguration: {
          sales: {
            isSetDefaultNumber: this.isSetDefaultNumber,
            customizeVoucherNumber: {
              prefix: this.custom_prefix,
              number: this.custom_Voucher_number,
              suffix: this.custom_sufix,
            },
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
            console.log("update invoice data", response.data.data);
            // this.getVoucherNumber()
            //  this.templateSuccess = true;

            console.log(this.isSetDefaultNumber);

            if (this.isSetDefaultNumber == false) {
              this.getConfiguarationForInvoice();
            }
            //  else{
            //   this.getVoucherNumber()
            //  }

            //  setTimeout(() => {
            //    this.templateSuccess = false;
            //  }, 1500);
          }
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          console.log("err");
          // this.loading = false;
        });
    },

    // change_voucherNumber(){

    // },

    check_Party_Ledger() {
      this.canSelectItems = true;
      this.CheckItemArray_Error = [];
      // console.log(this.selectedOptionpartyname)
      // console.log(this.selectedOptionledgertype)
      if (
        this.selectedOptionpartyname == "" ||
        this.selectedOptionpartyname == "search existing party"
      ) {
        this.CheckItemArray_Error["Nopartyname"] = "please select party";
      }
      if (
        this.selectedOptionledgertype == "" ||
        this.selectedOptionledgertype == "select ledger"
      ) {
        this.CheckItemArray_Error["NoLedgertype"] = "please select Ledger type";
      }
      if(this.usePriceLevels == 'Yes'){

        if (this.price_level == "") {
          this.CheckItemArray_Error["price_level"] = "please select Price level";
        }
      }

      if(this.usePriceLevels == 'Yes'){
        if (
        this.selectedOptionledgertype != "search existing party" &&
        this.selectedOptionledgertype != "select ledger" &&
        this.price_level != ""
      ) {
        this.canSelectItems = false;
      }
      }

      else if(   this.selectedOptionledgertype != "search existing party" &&
        this.selectedOptionledgertype != "select ledger") {
        this.canSelectItems = false;
      }
    },
    reselect_party(){
      this.hide_buyerDetails=true
      this.isDropdownOpenpartyname=true
    },
    selectOptionParty(option) {
      
      this.hide_buyerDetails=false
      this.selectedParty = option;
      const store_selectedOptionpartyname = this.selectedOptionpartyname;
      this.selectedOptionpartyname = option.ledgerName;
      this.partyGuid = option.guid;
      this.partyGstNumber = option.partyGSTIn;
      this.searchQueryPartyName = "";
      this.isDropdownOpenpartyname = false;

      if (option.ledgerName != store_selectedOptionpartyname) {
        this.selectedItemsFinal = [];
        this.selectedOptionledgertype = "select ledger";
        this.Calculate_final_screen();
      }

//buyersection
console.log('this.selectedParty',this.selectedParty)
      this.storebuyer_party=this.selectedParty
      this.buyer_name2=this.selectedParty.ledgerName
      this.buyer_address2=this.selectedParty.address
      this.buyer_name=this.selectedParty.ledgerName
      this.buyer_address=this.selectedParty.address
      this.buyer_country=this.selectedParty.countryName
      this.buyer_state=this.selectedParty.stateName
      this.buyer_pincode=this.selectedParty.pincode
      this.buyer_supply=this.selectedParty.stateName
      this.buyer_registeration_type=this.selectedParty.gstRegistrationType
      this.buyer_gst_number2=this.selectedParty.partyGSTIn
      this.buyer_gst_number=this.selectedParty.partyGSTIn

// consignee details

      this.consignee_name=this.selectedParty.ledgerName
      this.consignee_country=this.selectedParty.countryName
      this.consignee_pincode=this.selectedParty.pincode
      this.consignee_state=this.selectedParty.stateName
      this.consignee_address=this.selectedParty.address
      this.consignee_gstin=this.selectedParty.partyGSTIn



      if (this.search != "") {
        this.search = "";

        this.partyDetails();
      }
       

     
    },

    EditButton(){
      const storedata=this.storebuyer_party
      setTimeout(() => {
        
        this.buyer_name=storedata.ledgerName
        this.buyer_address=storedata.address
        this.buyer_country=storedata.countryName
        this.buyer_state=storedata.stateName
        this.buyer_pincode=storedata.pincode
        this.buyer_supply=storedata.stateName
        this.buyer_registeration_type=storedata.gstRegistrationType
        this.buyer_gst_number=storedata.partyGSTIn
      }, 0);
    },

    selectedBuyerOption(option){
      this.storebuyer_party=option
      this.buyer_name=option.ledgerName
      this.buyer_address=option.address
      this.buyer_country=option.countryName
      this.buyer_state=option.stateName
      this.buyer_pincode=option.pincode
      this.buyer_supply=option.stateName
      this.buyer_registeration_type=option.gstRegistrationType
      this.buyer_gst_number=option.partyGSTIn

      if (this.searchbuyerName != "") {
        this.search = "";
        this.searchbuyerName = "";

        this.partyDetails();
      }
    },

    selectedOtherLedgerOption(option){
      // this.storebuyer_party=option
      this.other_ledger_select=option.ledgerName

      if (this.other_ledger_input != "") {
        this.search = "";
        this.other_ledger_input = "";

        this.partyDetails();
      }
    },

    selectedConsigneeOption(option){
      this.consignee_name=option.ledgerName
      this.consignee_country=option.countryName
      this.consignee_pincode=option.pincode
      this.consignee_state=option.stateName
      this.consignee_address=option.address
      this.consignee_gstin=option.partyGSTIn

      if (this.searchconsigneeName != "") {
        this.search = "";
        this.searchconsigneeName = "";

        this.partyDetails();
      }
    },

    SaveBuyerDetails(){
      this.buyer_name2=this.buyer_name
      this.buyer_address2=this.buyer_address
       this.buyer_gst_number2=this.buyer_gst_number
       this.$bvModal.hide('edit_buyer_details');
    },
   
    toggleDropdownledgertype() {
      this.isDropdownOpenledgertype = !this.isDropdownOpenledgertype;
      if (this.isDropdownOpenledgertype) {
        this.$nextTick(() => {
          this.$refs.searchInputSearchableledger.focus();
        });
      }
    },
    selectOptionledgertype(optionledger) {
      this.selectedOptionledgertype = optionledger.ledgerName;
      this.searchQueryledgertype = "";
      this.ledgerId = optionledger.guid;
      this.isDropdownOpenledgertype = false;
      // console.log("selected ledger :- ",this.selectedOptionledgertype)
    },

    getledgerlist() {
      const data = {
        companyId: localStorage.getItem("companyId"),
        customerId: localStorage.getItem("customerId"),
        startLimit: "",
        endLimit: "",
        requestFrom: "WEB",
        searchTerm: this.search,
        parent: ["Sales Accounts"],
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgersByLedgerGroupParent(data, headers)
        .then((response) => {
          if (response.data.status != "0") {
            // console.log("ledger",response.data.data.list)

            for (let key in response.data.data.list) {
              if (
                response.data.data.list[key].gstApplicable == "#4; Applicable"
              ) {
                response.data.data.list[key].gstApplicable = "Yes";
              } else {
                response.data.data.list[key].gstApplicable = "No";
              }

              if (response.data.data.list[key].rateLists.length == "0") {
                response.data.data.list[key].showTotalTaxValue = "0";
              } else {
                response.data.data.list[key].showTotalTaxValue =
                  response.data.data.list[key].rateLists[0].rateList[2].value;
              }
            }

            this.optionsledgers = response.data.data.list;
            // console.log("option ledger", this.optionsledgers.newValue);
            console.log("New values for each index", this.optionsledgers);
          }
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },

    check_price_levels() {
      const data = {
        requestFrom: "WEB",
        companyId: localStorage.getItem("companyId"),
        customerId: localStorage.getItem("customerId"),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getCompanyTallyFeatures(data, headers)
        .then((response) => {
          this.usePriceLevels =
            response.data.data.companyTallyFeatures.inventoryFeatures.usePriceLevels;
          localStorage.setItem(
            "usePriceLevels",
            response.data.data.companyTallyFeatures.inventoryFeatures
              .usePriceLevels
          );
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },

    get_price_level_list() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        requestFrom: "WEB",
        companyId: localStorage.getItem("companyId"),
        customerId: localStorage.getItem("customerId"),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getPriceLevelsByCompanyId(data, headers)
        .then((response) => {
          // this.price_array = [];
          this.PriceLevel_options = response.data.data;
          // alert("price_array");
          // console.log("price level", response.data.data);
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },

    getlocationlist() {
      const data = {
        companyId: localStorage.getItem("companyId"),
        startLimit: 0,
        endLimit: 1000,
        requestFrom: "WEB",
        searchTerm: "",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getGodownsByCompanyId(data, headers)
        .then((response) => {
          //  if there is only one value in godown
          if (response.data.status != "0") {
            this.location_name = response.data.data.list;
          } else {
            this.location_name = [];
          }
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },

    closeEvent1() {
      this.isDropdownOpenpartyname = false;
    },
    closeEvent2() {
      this.isDropdownOpenledgertype = false;
    },
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    additem_modal_cancel() {
      this.StockAddError=[]
      this.items.forEach((item) => {
        this.$set(item, "isSelected", false);
        this.$set(item, "quantity", "");
      });

      this.selectedItems = [];
      this.selectedItemsLength = 0;
      this.selectedItemsTotalAmount = 0;
      this.selectedItemsQuantity = 0;

      for (let key in this.items) {
        this.items[key].updated_quantity = this.defaultQuantity;
        // response.data.data.list[key].updated_quantity=this.defaultQuantity
        this.items[key].updated_price =
          parseFloat(
            this.getPriceAccordingPriceLevel(this.items[key], key)
          ).toFixed(2) | 0;
      }

      this.$bvModal.hide("add_item");
    },
    addtaxes() {
      if(this.selectedItemsFinal.length != 0){

        if (this.taxdivs.length < 5) {
          this.taxdivs.push({
            gst_type: "",
            gst_IndexAmount: "",
            custom:'yes'
          });
          console.log(this.taxdivs);
        }
      }
    },

    addledgers() {
      this.ledgersdivs.push({
        other_ledger_party:'',
        other_ledger_amount:'',
        other_ledger_typeSelect:'Credit',
      });
    },
    addnarration() {
      this.narrationdivs.push({});
      this.addnarration_btn = false;
    },
    deleteTaxes(taxesindex) {
      this.taxdivs.splice(taxesindex, 1);
      this.Calculate_final_screen();
    },
    deleteLedgers(ledgerindex) {
      this.ledgersdivs.splice(ledgerindex, 1);

      this.Calculate_final_screen()
    },
    deleteNarration(narrationindex) {
      this.narrationdivs.splice(narrationindex, 1);
      this.addnarration_btn = true;
    },
    // add_item_click(){
    //   this.selectedItems=[]
    // },
    allowOnlyNumbers(event) {
      // Prevent non-numeric characters from being entered
      if (!/^\d+$/.test(event.key)) {
        event.preventDefault();
      }

      // Limit the input to 10 digits
      const inputValue = event.target.value;
      if (inputValue.length >= 15) {
        event.preventDefault();
      }
    },
    changeAmount(index, event) {
      if(event.target.value == ""){
        event.target.value="0"
      }
      // Update the lastSalesPrice when the input value changes
      this.$set(this.selectedItemsFinal, index, {
        ...this.selectedItemsFinal[index],
        lastSalesPrice: event.target.value,
      });

      this.selectedItemsFinal.map((selected) => {
        selected.totalrowamount = parseInt(
          selected.lastSalesPrice * selected.quantity
        );
      });
      console.log(this.selectedItemsFinal);

      this.Tax_Calculation_Array=[]
      // this.taxdivs=[]

      this.Tax_Calculation_Array=this.selectedItemsFinal
      this.tax_calculation()

      
      this.Calculate_final_screen();
    },
    changeQuantity(index, event) {
      if(event.target.value == ""){
        event.target.value="0"
      }

      this.$set(this.selectedItemsFinal, index, {
        ...this.selectedItemsFinal[index],
        quantity: event.target.value,
        updated_quantity: event.target.value,
      });

      this.$set(this.items, index, {
        ...this.items[index],
        updated_quantity: event.target.value,
      });

      this.$set(this.selectedItemsFinal, index, {
        ...this.selectedItemsFinal[index],
        lastSalesPrice:
          parseFloat(
            this.getPriceAccordingPriceLevel(
              this.selectedItemsFinal[index].stockItemData,
              index
            )
          ).toFixed(2) | 0,
      });

      console.log("this.selectedItemsFinal[index]", this.selectedItemsFinal);

      this.selectedItemsFinal.map((selected) => {
        selected.totalrowamount = parseInt(
          selected.lastSalesPrice * selected.quantity
        );
      });
      console.log(this.selectedItemsFinal);


      this.Tax_Calculation_Array=[]
      // this.taxdivs=[]

      this.Tax_Calculation_Array=this.selectedItemsFinal
      this.tax_calculation()


      this.Calculate_final_screen();
    },
    changeDiscount(index, event) {
      if (event.target.value > 100) {
        event.target.value = "100";
      }
      const selected = this.selectedItemsFinal[index];
      const discountIndex = event.target.value;
      const discountIndex_amount =
        (selected.lastSalesPrice * selected.quantity * discountIndex) / 100;

      selected.totalrowamount = parseInt(
        selected.lastSalesPrice * selected.quantity - discountIndex_amount
      );

      this.$set(this.selectedItemsFinal, index, {
        ...this.selectedItemsFinal[index],
        discount_index: event.target.value,
      });
      console.log(this.selectedItemsFinal);

      this.Tax_Calculation_Array=[]
      // this.taxdivs=[]

      this.Tax_Calculation_Array=this.selectedItemsFinal
      this.tax_calculation()


      this.Calculate_final_screen();
    },

    limitvalidationDiscount(event) {
      if (!/^\d+$/.test(event.key)) {
        event.preventDefault();
      }

      // Limit the input to 10 digits
      const inputValue = event.target.value;
      if (inputValue.length >= 3) {
        event.preventDefault();
      }
    },

    gettaxlist() {
      const data = {
        companyId: localStorage.getItem("companyId"),
        customerId: localStorage.getItem("customerId"),
        startLimit: 0,
        endLimit: 100000,
        requestFrom: "WEB",
        // searchTerm: this.search,
        parent: ["Duties & Taxes"],
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgersByLedgerGroupParent(data, headers)
        .then((response) => {
          if (response.data.status != "0") {
            this.taxType_Array = response.data.data.list;
          }
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },

    tax_calculation(){
      // this.taxdivs=[]
      console.log('this.taxdivs',this.taxdivs)

      this.taxdivs = this.taxdivs.filter((element) => {
    return element.custom !== 'no';
});
      // this.taxdivs.map((element,index)=>{
      //   if(element.custom == 'no'){
      //     this.taxdivs=
      //   }
      // })
      
      this.Tax_inclusive_Array=[]
      // if(this.taxdivs.length <= 1){
      //        this.taxdivs.push({
      //           gst_type: "SGST",
      //           gst_IndexAmount:null,
      //         });
      // }

      // console.log('this.Tax_Calculation_Array',this.Tax_Calculation_Array)

      this.Tax_Calculation_Array.map((item,index)=>{

        this.Tax_inclusive_Array.push({
              discountPercent: item.discount_index,
              gstPercent: "",
              isTaxInclusive: false,
              itemId: item.guid,
              itemQty: item.quantity,
              itemRate: `${item.lastSalesPrice}`,
              serialNo: index,
          })

      } )

      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        companyGstNumber: localStorage.getItem("companyGstNumber"),
        partyGuid: this.partyGuid,
        partyGstNumber: this.partyGstNumber,
        ledgerGuid: this.ledgerId,
        priceLevel: this.price_level,
        voucherDate: moment(new Date()).format("yyyy-MM-DD"),
        itemDetails: this.Tax_inclusive_Array,
        
        otherLedgerDetails: [],
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getGstDetails(data, headers)
      .then((response) => {

        console.log('gstcalculation',response.data.data)

        if(this.selectedItemsFinal.length != 0){

                    if (response.data.data.igstApplicable == false) {
                      // this.$delete(response.data.data.taxSummary, "CGST");
                      // this.$delete(response.data.data.taxSummary, "SGST");
                      // var gst_amount = parseFloat((response.data.data.voucherGstDetails.gstAmount / 2).toFixed(2));
                      this.taxdivs.push({
                        tax_select: "",
                        gst_type: "",
                        custom:'no',
                        gst_IndexAmount: parseFloat(response.data.data.voucherGstDetails.gstAmount / 2).toFixed(2),
                      });
                      this.taxdivs.push({
                        gst_type: "",
                        gst_type: "",
                        custom:'no',
                        gst_IndexAmount: parseFloat(response.data.data.voucherGstDetails.gstAmount / 2).toFixed(2),
                      });
                      this.total_tax += gst_amount + gst_amount;
                    } else {
                      // this.$delete(response.data.data.taxSummary, "IGST");
                      this.taxdivs.push({
                        tax_select: "",
                        gst_type: "",
                        custom:'no',
                        gst_IndexAmount: parseFloat(response.data.data.voucherGstDetails.gstAmount).toFixed(2),
                      });
                      // this.total_tax += parseFloat(response.data.data.voucherGstDetails.gstAmount);
                    }
        }
        else{
          this.taxdivs=[]
        }









        // const itemlistgst=response.data.data.itemGstDetails
        
        // itemlistgst.map((element)=>{
        //   this.taxdivs[0].gst_IndexAmount += parseInt(element.gstAmount);
        // })

        this.Calculate_final_screen()
        // console.log('totalAmountTax',this.Final_TaxAmount)

      })
      .catch((err)=>{
        Common.getStatusForActionFailed(err.response.status);
        console.log(err)
      })

     

    },






    changeCheckbox(index, event) {
      const item = this.selectedItemsFinal[index];

      this.$set(this.selectedItemsFinal, index, {
        ...item,
        tax_inclusive: event,
      });

     

      // this.get_GstInclusive(index)
      this.get_GstInclusive(index, item, event);
    },
    changeGowdown(index, event) {
      this.$set(this.selectedItemsFinal, index, {
        ...this.selectedItemsFinal[index],
        godown_select: event.target.value,
      });
      console.log(this.selectedItemsFinal);
    },

    changeTaxes_amount(index) {
      this.$set(this.taxdivs, index, {
        ...this.taxdivs[index],
        gst_IndexAmount: event.target.value,
      });

      console.log(this.taxdivs);

      this.Calculate_final_screen();
    },

    get_GstInclusive(index, item, eventvalue) {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        companyGstNumber: localStorage.getItem("companyGstNumber"),
        partyGuid: this.partyGuid,
        partyGstNumber: this.partyGstNumber,
        ledgerGuid: this.ledgerId,
        priceLevel: this.price_level,
        voucherDate: moment(new Date()).format("yyyy-MM-DD"),
        // itemDetails: this.Tax_inclusive_Array,
        itemDetails: [
          {
            discountPercent: item.discount_index,
            gstPercent: "",
            isTaxInclusive: eventvalue,
            itemId: item.guid,
            itemQty: item.quantity,
            itemRate: `${item.lastSalesPrice}`,
            serialNo: index,
          },
        ],
        otherLedgerDetails: [],
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      // if (Object.keys(this.Tax_inclusive_Array).length !== 0){
      Api.getGstDetails(data, headers).then((response) => {
        console.log(
          "gst inclusive",
          response.data.data.itemGstDetails[0].itemAmount
        );

        // this.selectedItemsFinal.map((index,element)=>{

        // })

        const gst_percent = response.data.data.voucherGstDetails.gstPercent;

        if (eventvalue == true) {
          // const tax = this.selectedItemsFinal[index].gst_per;
          const rate =
            this.selectedItemsFinal[index].lastSalesPrice /
            (1 + gst_percent / 100);
          this.selectedItemsFinal[index].lastSalesPrice = rate.toFixed(3);
          // this.selectedItemsFinal[index].totalrowamount = (this.selectedItemsFinal[index].lastSalesPrice * this.selectedItemsFinal[index].quantity)

          this.$set(this.selectedItemsFinal, index, {
            ...this.selectedItemsFinal[index],
            totalrowamount:
              this.selectedItemsFinal[index].lastSalesPrice *
              this.selectedItemsFinal[index].quantity,
          });
          console.log('this.selectedItemsFinal',this.selectedItemsFinal)
          this.Tax_Calculation_Array=[]
      // this.taxdivs=[]

      this.Tax_Calculation_Array=this.selectedItemsFinal
      this.tax_calculation()
          this.Calculate_final_screen();
        } else {
          // const tax = this.selectedItemsFinal[index].gst_per;
          const rate =
            this.selectedItemsFinal[index].lastSalesPrice *
            (1 + gst_percent / 100);
          this.selectedItemsFinal[index].lastSalesPrice = rate.toFixed(2);

          this.$set(this.selectedItemsFinal, index, {
            ...this.selectedItemsFinal[index],
            totalrowamount:
              this.selectedItemsFinal[index].lastSalesPrice *
              this.selectedItemsFinal[index].quantity,
          });

          this.Tax_Calculation_Array=[]
      // this.taxdivs=[]

      this.Tax_Calculation_Array=this.selectedItemsFinal
      this.tax_calculation()
          this.Calculate_final_screen();
          console.log('this.selectedItemsFinal',this.selectedItemsFinal)
          //  this.selectedItemsFinal[index].totalrowamount = (this.selectedItemsFinal[index].lastSalesPrice * this.selectedItemsFinal[index].quantity)
        }

        //       this.$set(this.selectedItemsFinal, index, {
        //   ...this.selectedItemsFinal[index],
        //   quantity:response.data.data.itemGstDetails[0].itemQty,
        //   lastSalesPrice: response.data.data.itemGstDetails[0].itemAmount,
        //   totalrowamount:(response.data.data.itemGstDetails[0].itemAmount * response.data.data.itemGstDetails[0].itemQty)

        // });
      });
      // }

      // this.Tax_Calculation_Array=[]
      // // this.taxdivs=[]

      // this.Tax_Calculation_Array=this.selectedItemsFinal
      // this.tax_calculation()

      // this.Calculate_final_screen()
    },

    Change_tax_type(index) {
      this.$set(this.taxdivs, index, {
        ...this.taxdivs[index],
        gst_type: event.target.value,
      });

      console.log(this.taxdivs);

      // this.Calculate_final_screen()
    },

    handleCheckboxChange(index) {
      const currentItem = this.items[index];

      this.$set(this.items, index, {
        ...this.items[index],
        updated_quantity: currentItem.quantity,
      });
      this.$set(this.items, index, {
        ...this.items[index],
        updated_price:
          parseFloat(
            this.getPriceAccordingPriceLevel(currentItem, index)
          ).toFixed(2) | 0,
      });

      const currentItem2 = this.items[index];

      this.getlocationlist();

      if (currentItem2.quantity !== undefined && currentItem2.quantity <= 0) {
        // Item has quantity less than or equal to 0, unselect and remove from selectedItems
        this.$set(this.items, index, { ...currentItem2, isSelected: false });
        this.selectedItems = this.selectedItems.filter(
          (item) => item.guid !== currentItem2.guid
        );
      } else {
        // Item is selected, update isSelected and add to selectedItems
        this.$set(this.items, index, { ...currentItem2, isSelected: true });

        // Check if the item is already in selectedItems
        const existingItemIndex = this.selectedItems.findIndex(
          (item) => item.guid === currentItem2.guid
        );

        if (existingItemIndex !== -1) {
          // Item already exists, update its details
          this.selectedItems.splice(existingItemIndex, 1, {
            stockItemData: currentItem2,
            guid: currentItem2.guid,
            lastSalesPrice: currentItem2.updated_price,
            quantity: currentItem2.quantity,
            updated_quantity: currentItem2.quantity,
            totalrowamount: currentItem2.updated_price * currentItem2.quantity,
            tax_inclusive: false,
            discount_index: "",
            godown_select: "Main Location",
          });
        } else {
          this.selectedItems.push({
            stockItemData: currentItem2,
            guid: currentItem2.guid,
            lastSalesPrice: currentItem2.updated_price,
            quantity: currentItem2.quantity,
            updated_quantity: currentItem2.quantity,
            totalrowamount: currentItem2.updated_price * currentItem2.quantity,
            tax_inclusive: false,
            discount_index: "",
            godown_select: "Main Location",
          });

        }
      }

      // console.log('this.currentItem.quantity',currentItem2.quantity)

      // this.getPriceAccordingPriceLevel(currentItem,index)
      // this.$set(this.items,index,{
      //   ...this.items[index],
      //   updated_quantity:currentItem.quantity,
      // })
      // this.$set(this.items,index,{
      //   ...this.items[index],
      //   updated_price: parseFloat(
      //         this.getPriceAccordingPriceLevel(currentItem,index)
      //       ).toFixed(2) | 0
      // })

      // console.log('this.items[index]',currentItem2)
      // console.log('currentItem.updated_quantity',currentItem2.updated_quantity)
      // console.log('currentItem.updated_price',currentItem2.updated_price)

      // Remove items with quantity less than zero from selectedItems
      this.selectedItems = this.selectedItems.filter(
        (item) => item.stockItemData.quantity >= 0
      );

      // this.Tax_Calculation_Array=this.selectedItems
      // this.tax_calculation(this.selectedItems)


      // console.log('this.Tax_Calculation_Array',this.Tax_Calculation_Array);
      this.Calculation_Stock();
    },
    getPriceAccordingPriceLevel(selection, index) {
      // console.log("getprice selection",selection);
      if (this.usePriceLevels == "Yes") {
        if (
          this.price_level !== "" &&
          this.price_level.toLowerCase() !== "not applicable"
        ) {
          // check applicable for selected price level
          //Applicable
          let tempitemDetails = selection.fullPriceLevelList;
          let fullPriceLevelList = [];
          tempitemDetails.forEach((element) => {
            if (element.priceLevel === this.price_level) {
              fullPriceLevelList.push(element);
            }
          });
          let applicableDateArray = [];
          this.customDate = new Date();
          let date = moment(
            moment(String(this.customDate)).format("yyyy-MM-DD"),
            "YYYY-MM-DD HH:mm:ss"
          );
          // check for applicable date
          fullPriceLevelList.forEach((element) => {
            if (date.isAfter(moment(element.date, "YYYY-MM-DD HH:mm:ss"))) {
              applicableDateArray.push(element);
            }
          });

          let applicablePriceLevel;
          if (applicableDateArray.length == 0) {
            return "";
          }
          //check applicable price level for closest date
          if (applicableDateArray.length > 1) {
            // applicablePriceLevel = applicableDateArray.reduce((min, e) =>
            //   DateFormat("yyyy-MM-dd HH:mm:ss")
            //     .parse(e["date"])
            //     .isAfter(DateFormat("yyyy-MM-dd HH:mm:ss").parse(min["date"]))
            //     ? e
            //     : min
            // );

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

          let priceLevelList = applicablePriceLevel["priceLevelList"];
          //get price value if range has 0 value
          let givenRateListWithoutZero = priceLevelList;

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

          let rateValue;

          //get price from range of value
          if (priceLevelList.isEmpty) {
            rateValue = "0";
          } else {
            for (let [priceLevelkey, priceLevel] of Object.entries(
              priceLevelList
            )) {
              if (
                parseFloat(priceLevel["startValue"]) == 0.0 &&
                parseFloat(priceLevel["endValue"]) == 0.0
              ) {
                rateValue = priceLevel["rateValue"];
              } else if (
                parseFloat(priceLevel["startValue"]) == 0.0 &&
                parseFloat(priceLevel["endValue"]) != 0.0 &&
                parseFloat(this.items[index].updated_quantity) <=
                  parseFloat(priceLevel["endValue"])
              ) {
                rateValue = priceLevel["rateValue"];
              } else if (
                parseFloat(priceLevel["startValue"]) != 0.0 &&
                parseFloat(priceLevel["endValue"]) != 0.0 &&
                parseFloat(this.items[index].updated_quantity) >=
                  parseFloat(priceLevel["startValue"]) &&
                parseFloat(this.items[index].updated_quantity) <=
                  parseFloat(priceLevel["endValue"])
              ) {
                rateValue = priceLevel["rateValue"];
              } else if (
                parseFloat(priceLevel["endValue"]) == 0.0 &&
                parseFloat(priceLevel["startValue"]) != 0.0 &&
                parseFloat(this.items[index].updated_quantity) >=
                  parseFloat(priceLevel["startValue"])
              ) {
                rateValue = priceLevel["rateValue"];
              }
            }

            // console.log('return amount',rateValue)

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
    getStandardRate(selection, index) {
      if (selection.standardSellingPriceList.length == "0") {
        return this.getLastRate(selection, index);
      }
      // console.log(selection.standardSellingPriceList);
      if (selection.standardSellingPriceList.length != "0") {
        let applicableDateArray = [];
        selection.standardSellingPriceList.forEach((element) => {
          if (element["date"] != "") {
            let date = moment(
              moment(String(this.customDate)).format("yyyy-MM-DD"),
              "YYYY-MM-DD HH:mm:ss"
            );
            if (date.isAfter(moment(element.date, "YYYY-MM-DD HH:mm:ss"))) {
              applicableDateArray.push(element);
            }
          }
        });

        let applicablePriceLevel;

        if (applicableDateArray.length == "0") {
          return this.getLastRate(selection, index);
        }

        if (applicableDateArray.length > 1) {
          // applicablePriceLevel = this.applicableDateArray.reduce((min, e) =>
          //   DateFormat("yyyy-MM-dd HH:mm:ss")
          //     .parse(e["date"])
          //     .isAfter(DateFormat("yyyy-MM-dd HH:mm:ss").parse(min["date"]))
          //     ? e
          //     : min
          // );
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
      // console.log(selection);
      return selection.lastSalesPrice == "0"
        ? ""
        : parseFloat(selection.lastSalesPrice);
    },

    Calculation_Stock() {
      this.selectedItemsLength = this.selectedItems.length;
      this.selectedItemsTotalAmount = 0;
      this.selectedItemsQuantity = 0;
      this.selectedItems.map((selected, index) => {
        if (selected.quantity == undefined || selected.quantity == "") {
          this.selectedItemsQuantity += 0;
        } else {
          this.selectedItemsQuantity += parseInt(selected.quantity);
        }

        this.selectedItemsTotalAmount +=
          parseInt(selected.lastSalesPrice) * parseInt(selected.quantity);
      });
    },
    updatePrice(index) {
      // this.StockAddError = [];
      // Update the price of the selected item in the selectedItems array
      if (this.items[index].isSelected) {
        const selectedItem = this.selectedItems.find(
          (item) => item.guid === this.items[index].guid
        );
        if (selectedItem) {
          if (
            this.items[index].updated_price == undefined ||
            this.items[index].updated_price == ""
          ) {
            selectedItem.updated_price = 0;
          } else {

            console.log('this.items[index].updated_price',this.items[index].updated_price)
            console.log('this.selectedItems[index].updated_price',this.selectedItems[index].updated_price)
            selectedItem.updated_price = this.items[index].updated_price;
            selectedItem.lastSalesPrice = `${this.items[index].updated_price}`;
            const addprice_quantity=this.items[index].updated_price * this.items[index].updated_quantity
            selectedItem.totalrowamount = `${addprice_quantity}`;
          }

          if (
            selectedItem.updated_price === 0 ||
            isNaN(selectedItem.updated_price)
          ) {
            this.StockAddError[`rateEmpty_${index}`] =
              "Please enter a valid amount.";
          } else {
            // Clear the specific error for the index if the condition is valid
            delete this.StockAddError[`rateEmpty_${index}`];
          }
          // selectedItem.lastSalesPrice = this.items[index].lastSalesPrice;
        }
      }
      console.log(this.selectedItems);
      this.Calculation_Stock();
    },
    updateQuantity(index) {
      // Update the quantity of the selected item in the selectedItems array
      if (this.items[index].isSelected) {
        const selectedItem = this.selectedItems.find(
          (item) => item.guid === this.items[index].guid
        );

        if (selectedItem) {
          if (
            this.items[index].quantity == undefined ||
            this.items[index].quantity == ""
          ) {
            selectedItem.quantity = 0;
          } else {
            selectedItem.quantity = this.items[index].quantity;
          }
        }

        // this.handleCheckboxChange(index)
        this.Calculation_Stock();
      }
    },

    addSelectedRows() {
      if (Object.keys(this.StockAddError).length == 0) {
        // this.selectedItemsFinal = this.selectedItems;
       
        this.selectedItemsFinal = [
          ...this.selectedItemsFinal,
          ...this.selectedItems,
        ];

        if(this.selectedItems.length != 0){
          this.Tax_Calculation_Array= [
          ...this.selectedItemsFinal,
        ];
        this.tax_calculation()
          
        }
       
        // this.Tax_inclusive_Array =this.selectedItemsFinal
        this.items.forEach((item) => {
          this.$set(item, "isSelected", false);
          this.$set(item, "quantity", "");
        });

        this.selectedItems = [];
        this.selectedItemsLength = 0;
        this.selectedItemsTotalAmount = 0;
        this.selectedItemsQuantity = 0;

        for (let key in this.items) {
          this.items[key].updated_quantity = this.defaultQuantity;
          // response.data.data.list[key].updated_quantity=this.defaultQuantity
          this.items[key].updated_price =
            parseFloat(
              this.getPriceAccordingPriceLevel(this.items[key], key)
            ).toFixed(2) | 0;
        }


       
        // this.tax_calculation()
        console.log("khali hai", this.selectedItems);
        this.$bvModal.hide("add_item");
        // this.getlocationlist()
        this.Calculate_final_screen();

      
      }
    },

    Calculate_final_screen() {
      this.Final_SubTotalAmount = 0;
      this.Final_TaxAmount = 0;
      this.Final_TotalAmount = 0;
      // this.OtherLedgerTotal = 0;

      console.log('this.ledgersdivs',this.ledgersdivs)

     

      this.selectedItemsFinal.map((selected, index) => {
        this.Final_SubTotalAmount += parseInt(selected.totalrowamount);

        // console.log("subtotal",this.Final_SubTotalAmount)
      });

      this.taxdivs.map((selected, index) => {
        this.Final_TaxAmount += parseInt(selected.gst_IndexAmount) || 0;
      });

      // this.OtherLedgerTotal = this.ledgersdivs.reduce((total, ledger) => total + (parseInt(ledger.other_ledger_amount) || 0), 0);

      // console.log("this.OtherLedgerTotal",this.OtherLedgerTotal)



      this.OtherLedgerTotal = this.ledgersdivs.reduce((total, ledger) => {
          let amount = parseInt(ledger.other_ledger_amount) || 0;
          if (ledger.other_ledger_typeSelect == 'Credit') {
          total += amount;
          } else if (ledger.other_ledger_typeSelect == 'Debit') {
          total -= amount;
          }
          return total;
          }, 0);

      
      
          
      this.Final_TaxAmount = this.Final_TaxAmount + this.OtherLedgerTotal
      // this.Final_TaxAmount=this.gst_Amount || 0
      this.Final_TotalAmount =
        this.Final_SubTotalAmount + parseInt(this.Final_TaxAmount) ;
    },


    // deleteinsertrow(index,item) {
    //   const currentItem = this.selectedItemsFinal[index];
    //   // this.selectedItemsFinal.splice(index, 1);
    //   this.selectedItemsFinal = this.selectedItemsFinal.filter(deletevalue => deletevalue.guid !== currentItem.guid);
    //   this.Calculate_final_screen()
    // },

    deleteinsertrow(index, item) {
      this.Tax_inclusive_Array=[]

      
      this.selectedItemsFinal.splice(index, 1);
      this.Tax_Calculation_Array=this.selectedItemsFinal

      // console.log('this.Tax_Calculation_Array',this.Tax_Calculation_Array)
      this.tax_calculation()
      this.Calculate_final_screen();
    },

    SearchValue() {
      this.search = this.searchQueryPartyName;
      this.partyDetails();
    },
    SearchBuyerName() {
      this.search = this.searchbuyerName;
      this.partyDetails();
    },
    SearchConsigneeName() {
      this.search = this.searchconsigneeName;
      this.partyDetails();
    },
    SearchStockItems() {
      this.itemSearch = this.StockSearchValue;

      this.getitemlist();
    },
    partyDetails() {
      const data = {
        companyId: localStorage.getItem("companyId"),
        customerId: localStorage.getItem("customerId"),
        startLimit: 0,
        endLimit: 25,
        requestFrom: "WEB",
        searchTerm: this.search,
        parent: [
          "Bank Accounts",
          "Bank OD A/c",
          "Bank OCC A/c",
          "Branch / Divisions",
          "Cash-in-Hand",
          "Sundry Creditors",
          "Sundry Debtors",
        ],
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgersByLedgerGroupParent(data, headers)
        .then((response) => {
          if (response.data.status != "0") {
            this.options = response.data.data.list;

            // this.options.map((element)=>{
            //   this.StoreOtherLedger.push({
                
            //   })
            // }) 

            for (let [key, value] of Object.entries(response.data.data.list)) {
            this.StoreOtherLedger.push({
              name: value.ledgerName,
              id: value.guid,
            });
          }
            
            // this.other_ledger_name = response.data.data.list;
          

            console.log('this.options',this.options)
          }
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    createVoucher() {
      this.Final_submission_error = [];
      console.log("selected party", this.selectedParty);
      console.log("selectedItemsFinal Array", this.selectedItemsFinal);

      if(this.selectedItemsFinal.length == 0){
        this.Final_submission_error['no_items']='Please select Item'
      }



    },

    calculate_otherAmount(event,index){

      this.$set(this.ledgersdivs, index, {
        ...this.ledgersdivs[index],
        other_ledger_amount: event.target.value,
      });

      // if(this.ledgersdivs[index].other_ledger_party == "" || this.ledgersdivs[index].other_ledger_party == undefined ){
      //   console.log("party nhi hai")
      //   this.other_amount_type_enable=true;
      // }
      // console.log('this.ledgersdivs',this.ledgersdivs)
      this.Calculate_final_screen();
    },

    calculate_otherAmountType(event,index){
      this.$set(this.ledgersdivs, index, {
        ...this.ledgersdivs[index],
        other_ledger_typeSelect: event.target.value,
      });

      this.Calculate_final_screen();
    },

    // calculate_otherParty(event,index){
    //   // this.$set(this.ledgersdivs, index, {
    //   //   ...this.ledgersdivs[index],
    //   //   other_ledger_party: event.target.value,
    //   // });


    //   console.log('event',event)
    //   console.log('this.ledgersdivs',this.ledgersdivs)
    //   // this.Calculate_final_screen();
    // },

    getitemlist() {
      if (this.selectedItemsFinal.length != 0) {
        this.selectedItemsFinal.map((element, index) => {
          this.$set(this.items, index, {
            ...this.items[index],
            updated_quantity: element.quantity,
          });

          this.$set(this.selectedItemsFinal, index, {
            ...this.selectedItemsFinal[index],
            lastSalesPrice:
              parseFloat(
                this.getPriceAccordingPriceLevel(element.stockItemData, index)
              ).toFixed(2) | 0,
          });
        });

        this.selectedItemsFinal.map((selected) => {
          selected.totalrowamount = parseInt(
            selected.lastSalesPrice * selected.quantity
          );
          selected.tax_inclusive = false;
        });
        this.Calculate_final_screen();
      }

      const data = {
        companyId: localStorage.getItem("companyId"),
        customerId: localStorage.getItem("customerId"),
        startLimit: 0,
        endLimit: 25,
        requestFrom: "WEB",
        searchTerm: this.itemSearch,
        orderBy: "",
        sortBy: "",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getItemsByCompanyId(data, headers).then((response) => {
        if (response.data.status != "0") {
          // this.selectedItemsFinal = [];

          //           if((this.selectedItemsFinal).length != 0){
          //             this.selectedItemsFinal.map((element,index)=>{
          //               this.$set(this.items,index,{
          //               ...this.items[index],
          //               updated_quantity:element.quantity,
          // })

          //               this.$set(this.selectedItemsFinal, index, {
          //         ...this.selectedItemsFinal[index],
          //         lastSalesPrice: parseFloat(
          //                 this.getPriceAccordingPriceLevel(element.stockItemData,index)
          //               ).toFixed(2) | 0,

          //       });
          //             })

          //           }
          // this.quantity=1;
          for (let key in response.data.data.list) {
            response.data.data.list[key].updated_quantity =
              this.defaultQuantity;
            // response.data.data.list[key].updated_quantity=this.defaultQuantity
            response.data.data.list[key].updated_price =
              parseFloat(
                this.getPriceAccordingPriceLevel(
                  response.data.data.list[key],
                  key
                )
              ).toFixed(2) | 0;
          }

          this.items = response.data.data.list;

          // console.log('this.items',this.items)
        }
      });
    },

    countrDetails() {
      // this.StoreState = [];
      const data = {
        requestFrom: "PORTAL",
        searchTerm: this.countrysearch,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      };
      Api.getCountry(data, headers)
        .then((response) => {
          this.StoreCountry = [];
          for (let [key, value] of Object.entries(response.data.data.list)) {
            this.StoreCountry.push({
              name: value.countryName,
              id: value.countryName,
            });
          }
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },

    stateDetails() {
      
      const data = {
        requestFrom: "PORTAL",
        countryName: this.buyer_country,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      };
      Api.getState(data, headers)
        .then((response) => {
          this.StoreState = [];
          for (let [key, value] of Object.entries(response.data.data.list)) {
            this.StoreState.push({
              name: value.stateName,
              id: value.stateName,
            });
          }
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    countrSelected(selection, index) {
      this.buyer_country = selection.name;
      this.buyer_state='';
      // this.countrDetails();
      this.stateDetails();
    },
    OtherSelected(selection, index) {
      console.log('selection',selection)
      this.$set(this.ledgersdivs, index, {
        ...this.ledgersdivs[index],
        other_ledger_party:selection.name,
      });

      this.other_amount_type_enable=false;
      

      console.log('this.ledgersdivs',this.ledgersdivs)
      // this.buyer_state='';
      // // this.countrDetails();
      // this.stateDetails();
    },
    stateSelected(selection, index) {
      this.buyer_state = selection.name;
      // this.stateDetails();
    },

    ragistraion_typeSelect(selection,index){
      this.buyer_registeration_type=selection.name
    },

    trysubmit(){
      console.log('this.submit',this.buyer_country)
      console.log('this.submit',this.buyer_state)
      console.log('this.submit',this.buyer_registeration_type)


      console.log('this.consignee',this.consignee_country)
      console.log('this.consignee',this.consignee_state)



      console.log('this.dispatch',this.dispatch_shipping_date)
      console.log('this.dispatch',this.dispatch_delivery_note)
      console.log('this.dispatch',this.dispatch_doc_no)
      console.log('this.dispatch',this.dispatch_bill_no)
      console.log('this.dispatch',this.dispatch_despatch_through)
      console.log('this.dispatch',this.dispatch_motor_vehicle_no)
      console.log('this.dispatch',this.dispatch_despatch_through)
      console.log('this.dispatch',this.dispatch_destination)
    },
    consigneecountrSelected(selection, index) {
      this.consignee_country = selection.name;
      this.consigneestateDetails();
    },
    consigneestateSelected(selection, index) {
      this.consignee_state = selection.name;
      // this.consigneestateDetails();
    },
    consigneecountrDetails() {
      const data = {
        requestFrom: "PORTAL",
        searchTerm: this.consignee_country,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      };
      Api.getCountry(data, headers)
        .then((response) => {
          this.ConsigneecountryData = [];
          for (let [key, value] of Object.entries(response.data.data.list)) {
            this.ConsigneecountryData.push({
              name: value.countryName,
              id: value.countryName,
            });
          }
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    consigneestateDetails() {
      const data = {
        requestFrom: "PORTAL",
        countryName: this.consignee_country,
        searchTerm: this.consigneestatesearch,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      };
      Api.getState(data, headers)
        .then((response) => {
          this.consigneestateData = [];
          for (let [key, value] of Object.entries(response.data.data.list)) {
            this.consigneestateData.push({
              name: value.stateName,
              id: value.stateName,
            });
          }
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    // SelectedStockItem(ItemSelected,index){

    //   this.SelectedItemArray.push({
    //     name:ItemSelected.stockItemName,
    //     quantity:"1",
    //     rate:ItemSelected.lastSalesPrice
    //   })
    //   console.log(this.SelectedItemArray)
    // },
  },

  mounted() {
    // this.price_level='Sales';
    this.refrence_type = "On Account";
    this.item_location = "Main";
    this.ledger_type = "SALES  ACCOUNT (INTER)";
    this.gst_select = "SGST";
    this.delivery_challan = "Delivery Challan";
    this.ledger_cr_dr ="";

    this.partyDetails();
    this.getledgerlist();
    this.gettaxlist()
    this.getVoucherNumber();
    this.get_price_level_list();
    this.getitemlist();
    this.check_price_levels();
    this.countrDetails();
    this.consigneecountrDetails();
  },
};
</script>

<style scoped>
tr.selected {
  background-color: #e1f9e9 !important;
}
.redColor {
  color: red !important;
}
.greenColor {
  color: green !important;
}
</style>
