
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
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
    <div class="page-header-title-box dashboard-page-header">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 col-6">
          <div class="title_text" v-if="this.$route.params.voucher_id">
            <div v-if="isTransfer != '0'">
              <h4 class="page-title mb-0">Credit Note</h4>
            </div>
            <div v-else>
              <h4 class="page-title mb-0">Update Credit Note</h4>
            </div>
          </div>
          <div class="title_text" v-else>
            <h4 class="page-title mb-0">Create Credit Note</h4>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-6 text-right">
          <div class="title_text" v-if="this.$route.params.voucher_id">
            <div v-if="isPaid == '' || isPaid == null" v-b-modal.customerstatus-popup>
              <button type="button" class="btn download_border_btn">
                <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid" />View
                Pdf<img class="pdf_button_crown" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
              </button>
            </div>
            <div v-else>
              <button type="button" @click="backentryPdf()" class="btn download_border_btn without_crown_button_design">
                <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid" />View
                Pdf
              </button>
            </div>
          </div>
        
        </div>
      </div>
    </div>

    <div v-if="Inventory_error" id="tax_div_move_top" class="qrl_error_box">
      <p v-if="Inventory_error.item_name">{{ Inventory_error.item_name }}</p>
      <p v-if="Inventory_error.quantity">{{ Inventory_error.quantity }}</p>
      <p v-if="Inventory_error.rate">{{ Inventory_error.rate }}</p>
      <p v-if="Inventory_error.location">{{ Inventory_error.location }}</p>
      <p v-if="addLedger_error.selectLedger">
        {{ addLedger_error.selectLedger }}
      </p>
      <p v-if="Inventory_error.order_no">{{ Inventory_error.order_no }}</p>
      <p v-if="Inventory_error.order_date">{{ Inventory_error.order_date }}</p>
      <p v-if="Inventory_error.dispatch_shipping_date">{{ Inventory_error.dispatch_shipping_date }}</p>
      <p v-if="Inventory_error.dispatch_doc_no">{{ Inventory_error.dispatch_doc_no }}</p>


      <p v-if="addLedger_error.selecetTransactionType">
        {{ addLedger_error.selecetTransactionType }}
      </p>
      <p v-if="addLedger_error.ledgerAmount">{{ addLedger_error.ledgerAmount }}</p>
    </div>
    <div v-if="voucher_error" id="tax_div_move_top" class="qrl_error_box">
      <p>{{ voucher_error }}</p>
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
    <div class="main_card sales_voucher_main_box">
      <div class="card">
        <div class="new_party_form">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="form-group mb-4">
               

                <div class="sales_cstm_dropdown input_light_border w_100_div">
                  <label class="form_input_lbl">Party Name
                    <span class="error-validation-star" v-if="error.party_name">*</span></label>
                  <form   autocomplete="off" @submit.prevent class="input-disable-overlay-hide-all-div">
                    <Dropdown  :options="partyData" v-on:selected="partySelected" v-on:filter="partyfilter"
                      v-model="party_name" :disabled="isTransfer == '1'" :maxItem="10"
                      :placeholder="`${this.select_party}`">
                    </Dropdown>
                  </form>
                </div>
            
              </div>
            </div>

            <div class="col-lg-6 col-12">
              <label class="form_input_lbl">Date</label>
              <div class="datepicker_image_set mb-4 input-disable-overlay-hide-all-div">
                <span class="sales_date_img_new">
                  <img src="/assets/images/1.0/sales/calendar.svg" class="img-fluid" />
                </span>
                <Datepicker  v-model="customDate" :disabled="isTransfer == '1'" format="dd MMM yyyy" placeholder="Date">
                </Datepicker>
              </div>
            </div>

            <div class="col-lg-6 col-12">
              <div class="form-group mb-4">
              
                <label class="form_input_lbl">Ledger Type
                  <span class="error-validation-star" v-if="error.ledger_type">*</span></label>

                <select name="ledger" ref="my_input" id="under" @change="ledgerChange($event)"
                  class="form-select input_light_border_dropdown" :disabled="isTransfer == '1'" v-model="ledger_type" >
                  <option value="">Select Ledger</option>
                  <option v-for="(ledger, index) in ledgerData" :value="ledger.ledgerName" :key="index"
                    :data-id="ledger._id" :data-ledgerguid="ledger.guid" :data-gstApplicable="ledger.gstApplicable"
                    :data-rateLists="JSON.stringify(ledger.rateLists)">
                    {{ ledger.ledgerName }}
                  </option>
                </select>
              
              </div>
            </div>

            <div class="col-lg-6 col-12">
              <label class="form_input_lbl">Voucher Number</label>
              <div class="form-group input_new_textbox mb-4">
                <input  @input="html_tag_notaccept('voucherNumber', $event)" type="text" :disabled="isTransfer == '1'" v-model="voucherNumber" placeholder=""
                  class="form-control only-input-disable-all-hide-overlay" />
                <span class="error-validation" v-if="error.voucherNumber">{{
                  error.voucherNumber
                }}</span>
              </div>
            </div>
            <div class="col-lg-6 col-12" v-if="usePriceLevels == 'Yes'">
              <div class="mb-4">
                <label class="form_input_lbl">Price Level
                
                </label>
                <select class="price-level-select form-select input_light_border_dropdown" v-model="price_level"
                  @change="priceChange()"  :disabled="isTransfer == '1'" >
                  <option value="">Select Price Level</option>
                  <option v-for="(price, index) in price_array" :value="price.priceLevelName" :key="index">
                    {{ price.priceLevelName }}
                  </option>
                </select>
                <span class="error-validation" v-if="error.price_level">{{
                  error.price_level
                }}</span>
              </div>
            </div>
            <div class="col-lg-6 col-12" v-else></div>
          </div>

          <div class="row">
            <div class="col-lg-12 col-12">
              <div class="row">
                <div class="col-12">
                  <div class="editing_table_for_voucher">
                    <table class="new_voucher_table with_inventory_table">
                      <tr>
                        <th colspan="8">
                          <div class="new-voucher-heading">
                            <h4>Items</h4>
                          </div>
                        </th>
                        <th style="text-align: right">
                          <div v-if="isTransfer == '0' ||
                              isTransfer == '' ||
                              isTransfer == null ||
                              isTransfer == '-1'
                              " class="new-plus-part" @click.stop="insert_Row">
                            <button :disabled="disabled === '1' || isTransfer == '1'">
                              <i class="fa fa-plus"></i>
                            </button>
                          </div>
                        </th>
                      </tr>

                      <tr class="inventory_table_tr">
                        <td class="inventory_table_th">Items</td>
                        <td class="inventory_table_th">Quantity</td>
                        <td class="inventory_table_th">Rate</td>
                        <td class="inventory_table_th">Discount</td>
                        <td class="inventory_table_th">Godown</td>
                        <td class="inventory_table_th">Description</td>

                    

                        <td class="inventory_table_th">Amount</td>
                        <td class="inventory_table_th">Tax Inclusive</td>
                        <td class="inventory_table_th"></td>
                      </tr>

                      <tr v-for="(item, index) in tableRows" :key="item.id" class="margin-top-set-for-tax">
                        <td>
                        

                          <div class="sales_cstm_dropdown journal_drop">
                          
                            <form autocomplete="off" @submit.prevent>
                              <div v-if="item.item_name !== undefined" class="input-disable-overlay-hide-all-div">
                                <Dropdown :options="itemsoption" v-on:selected="itemselected($event, index)"
                                  v-on:filter="itemfilter" :disabled="disabled === '1' || isTransfer == '1'
                                    " :maxItem="25" :placeholder="`${item.item_name}`" v-model="item.item_name" :key="dropDownKey">
                                </Dropdown>
                              </div>
                              <div v-else class="input-disable-overlay-hide-all-div">
                                <Dropdown :options="itemsoption" v-on:selected="itemselected($event, index)"
                                  v-on:filter="itemfilter" :disabled="disabled === '1' || isTransfer == '1'
                                    " :maxItem="25" placeholder="Select Item" v-model="item.item_name" :key="dropDownKey">
                                </Dropdown>
                              </div>
                            </form>
                          </div>
                          <input type="hidden" :disabled="disabled === '1' || isTransfer == '1'" v-model="item.item_guid"
                            placeholder="" class="form-control only-input-disable-all-hide-overlay" />
                            <input type="hidden" :disabled="disabled === '1' || isTransfer == '1'" v-model="item.item_id"
                            placeholder="" class="form-control only-input-disable-all-hide-overlay" />
                        </td>
                       
                        <td width="8%">
                          <input type="number" :disabled="disabled === '1' || isTransfer == '1'" @keydown="handleKeyDown"
                            @keyup="
                               new_rate($event, index), amount_calculation(index), checkTax()
                              " v-model="item.quantity" value="1" placeholder="Quantity"
                            class="form-control qty_demo only-input-disable-all-hide-overlay" v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll" />
                        </td>
                        <td class="rate_position_relative_innput">
                          <input type="number" @keydown="handleKeyDown" :disabled="disabled === '1' || isTransfer == '1'"
                            @keyup="amount_calculation(index), checkTax()" v-model="item.rate" placeholder="Rate"
                            class="form-control only-input-disable-all-hide-overlay" min="0" v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll"/>
                        </td>

                        <td>
                          <input type="number" @keydown="handleKeyDown" :disabled="disabled === '1' || isTransfer == '1'"
                            @keyup="amount_calculation(index), checkTax()" v-model="item.discount" placeholder="Discount"
                            class="form-control only-input-disable-all-hide-overlay" @input="checkDiscount(index)" min="0" v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll"/>
                        </td>
                        <td width="18%;">
                          <select :disabled="disabled === '1' || isTransfer == '1'" name="" id=""
                            class="form-select item_select input_light_border_dropdown location_select godown-mainlocation-dropdown"
                            v-model="item.location"  @change="change_godown($event,index)">
                            <option value="" disabled>Godown</option>
                            <option v-for="(location, index) in locationData" :value="location.name" :key="index"
                              :data-guid="location.guid">
                              {{ location.name }}
                            </option>
                          </select>
                        </td>
                        <td>
                          <input @input="html_tag_notaccept('item.item_description', $event)" type="text" :disabled="disabled === '1' || isTransfer == '1'"
                            placeholder="Item Description" @change="change_description($event,index)" class="form-control only-input-disable-all-hide-overlay"
                            v-model="item.item_description" />
                        </td>

                      

                        <td>
                          <input @input="html_tag_notaccept('item.amount', $event)"  type="text" readonly :disabled="disabled === '1' || isTransfer == '1'"
                            placeholder="amount" v-model="item.amount" class="form-control only-input-disable-all-hide-overlay" />
                        </td>
                        <td class="tax_inclusive_new_column justify-content-center">
                          <span class="tax_inclusive_checkbox margin-top-10-checkbox">
                            <label :for="'taxInclusive' + index" class="tax_inclusive_checkbox">
                            <input type="checkbox" :id="'taxInclusive' + index" value="false" v-model='item.taxInclusiveChecked' @click="taxInclusive_calculation($event,index)" :disabled="disabled === '1' || isTransfer == '1'"/>
                            <input type="hidden" v-model="item.gst_per" />
                            <input type="hidden" v-model="item.old_amount" />
                          </label>
                          
                            </span> 
                          
                        </td>
                        <td style="text-align: right" @click="
                          isTransfer == '0' && DeleteRow(item.id, index)
                          ">
                          <div v-if="isTransfer == '0' || isTransfer == null">
                            <button class="delete_icon_td">
                              <i class="fa fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div class="editing_table_for_voucher" id="tax_div_move">
                    <table class="new_voucher_table">
                      <tr>
                        <th colspan="3">
                          <div class="new-voucher-heading">
                            <h4>Taxes</h4>
                          </div>
                        </th>
                        <th style="text-align: right" @click.stop="tax_insert_Row" v-if="isTransfer == '0' || isTransfer == '' || isTransfer == null || isTransfer == '-1'">
                          <div class="new-plus-part">
                            <button>
                              <i class="fa fa-plus"></i>
                            </button>
                          </div>
                        </th>
                      </tr>

                      <tr v-if="taxarray != ''" class="inventory_table_tr">
                        <td width="25%" class="inventory_table_th">Tax</td>
                        <td width="25%" class="inventory_table_th">Amount</td>
                        <td width="50%" class="inventory_table_th"></td>
                      </tr>

                  
                      <tr v-for="(taxSummary, taxindex) in taxarray" :key="taxindex" class="valign_td_set">
                        <td width="25%">
                          <select @change="tax_value_select($event, taxindex)" ref="mySelect" v-model="taxSummary.tax_select" name=""
                            id="" :disabled="isTransfer == '1'" v-on:keydown="disableArrowKeys"
                            class="form-select item_select input_light_border_dropdown">
                            <option value="">Tax</option>
                            <option v-for="(tax, index) in taxData" v-bind:value="`${tax.ledgerName}`" :key="index"
                              :data-guid="tax.guid" :data-ledgerGroup="tax.parentgroup"
                              :data-ledgerGroupParent="tax.parent">
                              {{ tax.ledgerName }}
                              
                              
                            </option>
                          </select>
                          <span class="error-validation" v-if="error.tax_select && error.tax_select[taxindex]">
                            {{ error.tax_select[taxindex] }}
                          </span>
                        </td>

                       
                        <td width="25%">
                          <input @input="html_tag_notaccept('taxSummary.tax_name', $event)"  type="text" :disabled="isTransfer == '1'" :v-model="taxSummary.amount"
                            v-bind:value="`${taxSummary.amount}`" @keyup="tax_value_amount($event, taxindex)" placeholder="Amount" class="form-control only-input-disable-all-hide-overlay" />
                            <input type="hidden" v-model="taxSummary.tax_name" />
                        

                        </td>
                        <td colspan="2" width="50%" style="text-align: left;vertical-align:middle;" @click="TaxdeleteRow(taxindex)" :disabled="isTransfer == '1'" v-if="isTransfer == '0' || isTransfer == null">
                            <button class="delete_icon_td">
                              <i class="fa fa-trash"></i>
                            </button>
                          </td>
                      </tr>
                    
                    </table>
                  </div>
                </div>
                <div class="col-12">
                  <div class="additional_settings">
                    <h4>Additional Settings</h4>
                  </div>
                  <div class="panel panel-primary">
                    <div class="tab-menu-heading p-0">
                      <div class="tabs-menu m-0">
                        <ul class="nav nav-tabs nav-tabs-border-none pt-1 sales_voucher_tabs_sec m-0" role="tablist">
                         
                          <li class="nav-item">
                            <a class="nav-link active" id="buyerdetails-tab" data-bs-toggle="tab" href="#buyerdetails" role="tab" aria-controls="buyerdetails" aria-selected="true">Buyer Details</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" id="consigneedetails-tab" data-bs-toggle="tab" href="#consigneedetails" role="tab" aria-controls="consigneedetails" aria-selected="false">Consignee Details</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" id="dispatchdetails-tab" data-bs-toggle="tab" href="#dispatchdetails" role="tab" aria-controls="dispatchdetails" aria-selected="false">Dispatch Details</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" id="orderdetails-tab" data-bs-toggle="tab" href="#orderdetails" role="tab" aria-controls="orderdetails" aria-selected="false">Order Details</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" id="ewaybilldetails-tab" data-bs-toggle="tab" href="#ewaybilldetails" role="tab" aria-controls="ewaybilldetails" aria-selected="false">e-Way Bill Details</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="tab-content main_tab_content sales_voucher_tab_content">
                      <div class="tab-content main_tab_content pb-3">
                       
                        <div class="tab-pane fade show active" id="buyerdetails" role="tabpanel" aria-labelledby="buyerdetails-tab">
                          <div class="row">
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Buyer</label>
                              <div class="form-group mb-4">
                              
                                <div class="sales_cstm_dropdown input_light_border w_100_div">
                                  <form autocomplete="off" @submit.prevent>
                                    <div v-if="this.buyer_name !== undefined" class="input-disable-overlay-hide-all-div">
                                      <Dropdown :options="buyerData" v-on:selected="buyerSelected"
                                        v-on:filter="buyerfilter" v-model="buyer_name" :disabled="isTransfer == '1'"
                                        :maxItem="10" :placeholder="`${this.buyer_name}`">
                                      </Dropdown>
                                    </div>
                                    <div v-else class="input-disable-overlay-hide-all-div">
                                      <Dropdown :options="buyerData" v-on:selected="buyerSelected"
                                        v-on:filter="buyerfilter" v-model="buyer_name" :disabled="isTransfer == '1'"
                                        :maxItem="10" placeholder="Select Buyer Name">
                                      </Dropdown>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Country</label>
                              <div class="form-group mb-4">
                              
                                <div class="sales_cstm_dropdown input_light_border w_100_div">
                                  <form autocomplete="off" @submit.prevent>
                                    <div v-if="this.buyer_country != undefined" class="input-disable-overlay-hide-all-div">
                                      <Dropdown :options="CountryData" v-on:selected="countrSelected"
                                        v-on:filter="countrfilter" v-model="buyer_country" :disabled="isTransfer == '1'"
                                        :maxItem="10" :placeholder="`${this.buyer_country}`">
                                      </Dropdown>
                                    </div>
                                    <div v-else class="input-disable-overlay-hide-all-div">
                                      <Dropdown :options="CountryData" v-on:selected="countrSelected"
                                        v-on:filter="countrfilter" v-model="buyer_country" :disabled="isTransfer == '1'"
                                        :maxItem="5" placeholder="Select Country">
                                      </Dropdown>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">State</label>
                              <div class="form-group mb-4">
                             
                                <div class="sales_cstm_dropdown input_light_border w_100_div">
                                  <form autocomplete="off" @submit.prevent>
                                    <div v-if="this.buyer_state !== undefined" class="input-disable-overlay-hide-all-div">
                                      <Dropdown :options="stateData" v-on:selected="stateSelected"
                                        v-on:filter="statefilter" v-model="buyer_state" :disabled="isTransfer == '1'"
                                        :maxItem="5" :placeholder="`${this.buyer_state}`">
                                      </Dropdown>
                                    </div>
                                    <div v-else class="input-disable-overlay-hide-all-div">
                                      <Dropdown :options="stateData" v-on:selected="stateSelected"
                                        v-on:filter="statefilter" v-model="buyer_state" :disabled="isTransfer == '1'"
                                        :maxItem="5" placeholder="Select State">
                                      </Dropdown>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Registration Type</label>
                              <div class="form-group mb-4">
                                <select name="user[city]" :disabled="isTransfer == '1'" v-model="buyer_regisration_type"
                                  class="form-select new_party_select_option">
                                  <option value="Composition">
                                    Composition
                                  </option>
                                  <option value="Unknown">Unknown</option>
                                  <option value="Consumer">Consumer</option>
                                  <option value="Regular">Regular</option>
                                  <option value="Unregistered">
                                    Unregistered
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Postal Code</label>
                              <div class="form-group input_new_textbox mb-4">
                                <input type="number" @keydown="handleKeyDown" :disabled="isTransfer == '1'" maxlength="6"
                                  placeholder="Postal Code" v-model="buyer_pincode" class="form-control only-input-disable-all-hide-overlay" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"/>
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Place of Supply</label>
                              <div class="form-group input_new_textbox mb-4">
                                <input @input="html_tag_notaccept('buyer_place_of_supply', $event)"  type="text" :disabled="isTransfer == '1'" placeholder="Place of Supply"
                                  v-model="buyer_place_of_supply" class="form-control only-input-disable-all-hide-overlay" value="" />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">GSTIN / UIN</label>
                              <div class="form-group input_new_textbox mb-4">
                                <input @input="validateGSTIN" type="text" :disabled="isTransfer == '1'" placeholder="GSTIN / UIN" 
                                  v-model="buyer_gstin" class="form-control only-input-disable-all-hide-overlay" value=""  />
                                  <span v-if="this.buyer_gstin && !isValidGSTIN" style="color: red;">Invalid GSTIN</span>

                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Address</label>
                              <div class="sales-voucher-textarea">
                                <textarea  @input="html_tag_notaccept('buyer_address', $event)"  id="address" :disabled="isTransfer == '1'" name="address"
                                  v-model="buyer_address" rows="4" placeholder="Address"
                                  cols="50" class="textarea-disable-not-allowed">{{ this.buyer_address }}</textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="consigneedetails" role="tabpanel" aria-labelledby="consigneedetails-tab">
                          <div class="row">
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Consignee</label>
                              <div class="form-group mb-4">
                               
                                <div class="sales_cstm_dropdown input_light_border w_100_div">
                                  <form autocomplete="off" @submit.prevent>
                                    <div v-if="this.consignee_name !== undefined" class="input-disable-overlay-hide-all-div">
                                      <Dropdown :options="buyerData" v-on:selected="consigneeSelected"
                                        v-on:filter="consigneefilter" v-model="consignee_name"
                                        :disabled="isTransfer == '1'" :maxItem="5"
                                        :placeholder="`${this.consignee_name}`">
                                      </Dropdown>
                                    </div>
                                    <div v-else class="input-disable-overlay-hide-all-div">
                                      <Dropdown :options="buyerData" v-on:selected="consigneeSelected"
                                        v-on:filter="consigneefilter" v-model="consignee_name"
                                        :disabled="isTransfer == '1'" :maxItem="5" placeholder="Select Consignee Name">
                                      </Dropdown>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Country</label>
                              <div class="form-group mb-4">
                               
                                <div class="sales_cstm_dropdown input_light_border w_100_div">
                                  <form autocomplete="off" @submit.prevent>
                                    <div v-if="this.consignee_country !== undefined
                                      " class="input-disable-overlay-hide-all-div">
                                      <Dropdown :options="ConsigneecountryData" v-on:selected="consigneecountrSelected"
                                        v-on:filter="consigneecountrfilter" v-model="consignee_country"
                                        :disabled="isTransfer == '1'" :maxItem="5"
                                        :placeholder="`${this.consignee_country}`">
                                      </Dropdown>
                                    </div>
                                    <div v-else class="input-disable-overlay-hide-all-div">
                                      <Dropdown :options="ConsigneecountryData" v-on:selected="consigneecountrSelected"
                                        v-on:filter="consigneecountrfilter" v-model="consignee_country"
                                        :disabled="isTransfer == '1'" :maxItem="5" placeholder="Select Country">
                                      </Dropdown>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">State</label>
                              <div class="form-group mb-4">
                              
                                <div class="sales_cstm_dropdown input_light_border w_100_div">
                                  <form autocomplete="off" @submit.prevent>
                                    <div v-if="this.consignee_state !== undefined" class="input-disable-overlay-hide-all-div">
                                      <Dropdown :options="consigneestateData" v-on:selected="consigneestateSelected"
                                        v-on:filter="consigneestatefilter" v-model="consignee_state"
                                        :disabled="isTransfer == '1'" :maxItem="5"
                                        :placeholder="`${this.consignee_state}`">
                                      </Dropdown>
                                    </div>
                                    <div v-else class="input-disable-overlay-hide-all-div">
                                      <Dropdown :options="consigneestateData" v-on:selected="consigneestateSelected"
                                        v-on:filter="consigneestatefilter" v-model="consignee_state"
                                        :disabled="isTransfer == '1'" :maxItem="5" placeholder="Select State">
                                      </Dropdown>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Postal Code</label>
                              <div class="form-group input_new_textbox mb-4">
                                <input type="number" maxlength="6" @keydown="handleKeyDown" :disabled="isTransfer =='1'"
                                  placeholder="Postal Code" v-model="consignee_pincode" class="form-control only-input-disable-all-hide-overlay" value="" min="0"  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">GSTIN / UIN</label>
                              <div class="form-group input_new_textbox mb-4">
                                <input @input="validateGSTIN" type="text" :disabled="isTransfer == '1'" placeholder="GSTIN / UIN"
                                  v-model="consignee_gstin" class="form-control only-input-disable-all-hide-overlay" value=""  />
                                  <span v-if="this.consignee_gstin && !isValidConsigneeGSTIN" style="color: red;">Invalid GSTIN</span>

                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Address</label>
                              <div class="sales-voucher-textarea">
                                <textarea  @input="html_tag_notaccept('consignee_address', $event)" id="address" :disabled="isTransfer == '1'" name="address"
                                  v-model="consignee_address" rows="4" placeholder="Address"
                                  cols="50" class="textarea-disable-not-allowed">{{ this.consignee_address }}</textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="dispatchdetails" role="tabpanel" aria-labelledby="dispatchdetails-tab">
                          <div class="row">
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Shipping Date</label>
                              <div class="datepicker_image_set mb-4 input-disable-overlay-hide-all-div">
                                <span class="sales_date_img_new">
                                  <img src="/assets/images/1.0/sales/calendar.svg" class="img-fluid" />
                                </span>
                                <Datepicker :disabled="isTransfer == '1'" v-model="dispatch_shipping_date"
                                  format="dd MMM yyyy" placeholder="Shipping Date">
                                </Datepicker>
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Delivery Note</label>
                              <div class="form-group input_new_textbox mb-4">
                                <input @input="html_tag_notaccept('dispatch_delivery_note', $event)" type="text" :disabled="isTransfer == '1'" v-model="dispatch_delivery_note"
                                  placeholder="Delivery Note" class="form-control only-input-disable-all-hide-overlay" value="" />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Dispatch Doc No</label>
                              <div class="form-group input_new_textbox mb-4">
                                <input @input="html_tag_notaccept('dispatch_doc_no', $event)" :disabled="isTransfer == '1'" v-model="dispatch_doc_no"
                                  placeholder="Dispatch Doc No" class="form-control only-input-disable-all-hide-overlay" value="" />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Dispatch Through</label>
                              <div class="form-group input_new_textbox mb-4">
                                <input  @input="html_tag_notaccept('dispatch_despatch_through', $event)"  type="text" :disabled="isTransfer == '1'" v-model="dispatch_despatch_through"
                                  placeholder="Dispatch Through" class="form-control only-input-disable-all-hide-overlay" value="" />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Destination</label>
                              <div class="form-group input_new_textbox mb-4">
                                <input @input="html_tag_notaccept('dispatch_destination', $event)" :disabled="isTransfer == '1'" v-model="dispatch_destination"
                                  placeholder="Destination"  class="form-control only-input-disable-all-hide-overlay" value="" />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Bill No</label>
                              <div class="form-group input_new_textbox mb-4">
                                <input @input="html_tag_notaccept('dispatch_bill_no', $event)" type="text" :disabled="isTransfer == '1'" v-model="dispatch_bill_no"
                                  placeholder="Bill of lading no / LR-RR-NO" class="form-control only-input-disable-all-hide-overlay" value="" />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Motor Vehicle No</label>
                              <div class="form-group input_new_textbox mb-4">
                                <input @input="html_tag_notaccept('dispatch_motor_vehicle_no', $event)" type="text" :disabled="isTransfer == '1'" v-model="dispatch_motor_vehicle_no"
                                  placeholder="Motor Vehicle No" class="form-control only-input-disable-all-hide-overlay" value="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="orderdetails" role="tabpanel" aria-labelledby="orderdetails-tab">
                          <div class="row">
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Order Date</label>
                              <div class="datepicker_image_set mb-4 input-disable-overlay-hide-all-div">
                                <span class="sales_date_img_new">
                                  <img src="/assets/images/1.0/sales/calendar.svg" class="img-fluid" />
                                </span>
                                <Datepicker :disabled="isTransfer == '1'" v-model="order_date" format="dd MMM yyyy"
                                  placeholder="Order Date">
                                </Datepicker>
                              </div>
                            </div>
                         
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Order No</label>
                              <div class="form-group input_new_textbox mb-4">
                                <input  @input="html_tag_notaccept('order_no', $event)" type="text" :disabled="isTransfer == '1'" v-model="order_no"
                                  placeholder="Order No" class="form-control only-input-disable-all-hide-overlay" value="" />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Terms of payment</label>
                              <div class="form-group input_new_textbox mb-4">
                                <input  @input="html_tag_notaccept('order_terms_of_payment', $event)" type="text" :disabled="isTransfer == '1'" v-model="order_terms_of_payment"
                                  placeholder="Mode / Terms of payment" class="form-control only-input-disable-all-hide-overlay" value="" />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Other Reference(s)</label>
                              <div class="form-group input_new_textbox mb-4">
                                <input @input="html_tag_notaccept('order_other_reference', $event)" type="text" :disabled="isTransfer == '1'" v-model="order_other_reference"
                                  placeholder="Other Reference(s)" class="form-control only-input-disable-all-hide-overlay" value="" />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Terms of Delivery</label>
                              <div class="form-group input_new_textbox mb-4">
                                <input  @input="html_tag_notaccept('order_terms_of_delivery', $event)" type="text" :disabled="isTransfer == '1'" v-model="order_terms_of_delivery"
                                  placeholder="Mode / Terms of delivery" class="form-control only-input-disable-all-hide-overlay" value="" />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">Address</label>
                              <div class="sales-voucher-textarea">
                                <textarea  @input="html_tag_notaccept('order_details_address', $event)" :disabled="isTransfer == '1'" v-model="order_details_address" id="address"
                                  name="address" rows="4" placeholder="Address"
                                  cols="50" class="textarea-disable-not-allowed">{{ this.order_details_address }}</textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="ewaybilldetails" role="tabpanel" aria-labelledby="ewaybilldetails-tab">
                          <div class="row">
                            <div class="col-lg-4">
                              <label class="form_input_lbl">e-Way Date</label>
                              <div class="datepicker_image_set mb-4 input-disable-overlay-hide-all-div">
                                <span class="sales_date_img_new">
                                  <img src="/assets/images/1.0/sales/calendar.svg" class="img-fluid" />
                                </span>
                                <Datepicker :disabled="isTransfer == '1'" v-model="eway_date" format="dd MMM yyyy"
                                  placeholder="e-Way Date">
                                </Datepicker>
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <label class="form_input_lbl">e-Way Bill Number</label>
                              <div class="form-group input_new_textbox mb-4">
                                <input type="number" :disabled="isTransfer == '1'" v-model="eway_bill_number"
                                  placeholder="e-Way Bill Number" class="form-control only-input-disable-all-hide-overlay" value="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="addmoreledgers-text">
                    <button :disabled="isTransfer == '1'" v-on:click="add_ledger_click()">
                      Add More Ledgers
                    </button>
                  </div>
                  <div class="showledgers_table sales_cstm_dropdown" v-if="showledgers">
                    <div class="editing_table_for_voucher">
                      <table class="new_voucher_table">
                        <tr>
                          <th colspan="4">
                            <div class="new-voucher-heading">
                              <h4>Add Ledgers</h4>
                            </div>
                          </th>
                          <th style="text-align: right">
                            <div class="new-plus-part">
                              <button v-on:click="insert_ledger()" :disabled="isTransfer == '1'">
                                <i class="fa fa-plus"></i>
                              </button>
                            </div>
                          </th>
                        </tr>
                        <tr class="inventory_table_tr">
                          <td class="inventory_table_th">Ledger</td>
                          <td class="inventory_table_th">Type</td>
                          <td class="inventory_table_th">Amount</td>
                        </tr>
                        <tr v-for="(ledger, index) in ledger_array" :key="ledger.id">
                          <td>
                          
                            <form  autocomplete="off" @submit.prevent>
                              <div v-if="ledger.ledger_name !== '' && ledger.ledger_name !== undefined" class="input-disable-overlay-hide-all-div">
                                <Dropdown  :options="allledgerselection" v-on:selected="addmoreLedger_change($event, index)" v-on:filter="partyfilter"
                                v-model="ledger.ledger_name" :disabled="isTransfer == '1'" 
                                :maxItem="10" :placeholder="`${ledger.ledger_name}`">
                                </Dropdown>
                              </div>
                              <div v-else class="input-disable-overlay-hide-all-div">
                                <Dropdown :options="allledgerselection" v-on:selected="addmoreLedger_change($event, index)" v-on:filter="partyfilter" 
                                v-model="ledger.ledger_name" :disabled="isTransfer == '1'" 
                                :maxItem="10" placeholder="Search Other Ledger">
                                </Dropdown>
                              </div>
                          </form>
                          </td>
                        
                      
                          <td>
                            <select name="" id="" :disabled="isTransfer == '1'" class="form-select item_select" @change="tax_calculation()"
                              v-model="ledger.type">
                              <option value="" disabled>Debit/Credit</option>
                              <option v-for="opt in debitcredit">
                                {{ opt }}
                              </option>
                            </select>
                          </td>
                          <td>
                            <input type="number" @keydown="handleKeyDown" :disabled="isTransfer == '1'"
                              placeholder="Amount" @keyup="ledger_amount_keyup()" class="form-control only-input-disable-all-hide-overlay"
                              v-model="ledger.amount" min="0" v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll"  />
                          </td>
                          <td style="text-align: right">
                            <button class="delete_icon_td" :disabled="isTransfer == '1'" v-if="isTransfer == '0' || isTransfer == null"
                              @click="LedgerDeleteRow(ledger.id, index)">
                              <i class="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>

                  <div class="col-12">
                    <div>
                      <label class="form_input_lbl">Narration</label>
                      <div class="sales-voucher-textarea">
                        <textarea  @input="html_tag_notaccept('narration', $event)"  id="narration" :disabled="isTransfer == '1'" name="narration" rows="4"
                          placeholder="Narration" cols="50" class="textarea-disable-not-allowed" v-model="narration"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="posision-fixed-relative">
          <div class="bottom-fixed-total-part">
            <div class="row">
              <div class="col-lg-6">
                <table width="100%" class="bottom_total_sales">
                  <tr>
                    <td align="left"><strong>Sub Total</strong></td>
                    <td style="text-align: right">
                      <strong><span class="font_sans">{{ this.symbol }}</span>{{
                        getNum(this.total_amount).toFixed(2)
                        | formatNumberParties
                      }}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="left">
                      <strong>Taxes
                        <img src="/assets/images/1.0/sales/info.svg" class="img-fluid" /></strong>
                    </td>
                    <td style="text-align: right">
                      <strong><span class="font_sans">{{ this.symbol }}</span>{{
                        getNum(this.total_tax).toFixed(2)
                        | formatNumberParties
                      }}</strong>
                    </td>
                  </tr>
                  <tr>
                    <th align="left">GROSS AMOUNT</th>
                    <th style="text-align: right">
                      <span class="font_sans">{{ this.symbol }}</span>
                      {{
                        getNum(this.gross_amount).toFixed(2)
                        | formatNumberParties
                      }}
                    </th>
                  </tr>
                </table>
              </div>
              <div class="col-lg-6">
                <div class="form_bottom_button_save" v-if="this.$route.params.voucher_id">
                  <div v-if="isTransfer == '0' || isTransfer == '-1'">
                    <button :disabled="disabled === '1'" class="form_button black_button" @click="update_sales()">
                      Update
                    </button>
                  </div>
                </div>
                <div class="form_bottom_button_save" v-else>
                  <button :disabled="disabled === '1'" class="form_button black_button" @click="add_sales()">
                    Save
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
import Vue from "vue";
var numeral = require("numeral");

Vue.filter("formatNumberParties", function (value) {
 
  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(
    value
  );
});
import Datepicker from "vuejs-datepicker";
import GoogleAnalytics from "@/GoogleAnalytics";
import Api from "@/Api";
import moment from "moment";
import Dropdown from "../components/Dropdown.vue";
Vue.use(Dropdown);


export default {
  name: "sales-voucherGo",
  components: {
    Datepicker,
    Dropdown,
  },
  data() {
    return {
    
      taxInclusiveChecked: false,
      addmoreLedgerEntries: [],
      sports: ["Basketball", "Football", "Tennis", "Volleyball"],
      showledgers: false,
      showtr: false,
      taxshowtr: false,
      ledgersshowtr: false,
      customDate: "",
      customDate: new Date(),
      isHidden: false,
      isHidden2: false,
      selectpartyname: "",
      otherSelected: false,
      selectpartyoption: [
        { name: "Ambica Traders", id: "Ambica Traders" },
        { name: "Canara Bank", id: "Canara Bank" },
        { name: "Compuchip Systems", id: "Compuchip Systems" },
        {
          name: "Livekeeping Private Limited",
          id: "Livekeeping Private Limited",
        },
        { name: "Mahalakshmi Limited", id: "Mahalakshmi Limited" },
      ],
      selected: { name: null, id: null },
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
      subledgerselection: [],
      itemopt: "",
      itemsoption: [
        { name: "Computer A/C", id: "Computer A/C" },
        { name: "CPU", id: "CPU" },
        { name: "Keyboard", id: "Keyboard" },
        { name: "LED Light", id: "LED Light" },
        { name: "Monitor", id: "Monitor" },
        { name: "Mouse", id: "Mouse" },
        { name: "RAM-4GB", id: "RAM-4GB" },
        { name: "Table Fan", id: "Table Fan" },
      ],
      
      mainlocation: "",
      location: ["Main Location"],
      selectledger: "",
      ledgersoptions: [
        { name: "Ledger 1", id: "Ledger 1" },
        { name: "Ledger 2", id: "Ledger 2" },
        { name: "Ledger 3", id: "Ledger 3" },
      ],
      tableRows: [
        {
          item_name: "",
          item_guid: "",
          rate: "0",
          quantity: "",
          discount: "",
          location: "",
          item_description: "",
          amount: "",
          id: 1
        },
      ],
      TaxtableRows: [
      {
          taxdata: "",
          percentage: "",
          tax_amount: "",
        },
      ],
      partyData: [],
      search: "",
      voucherNumber: "",
      ledger_type: "",
      ledgerData: [],
      party_name: "",
      itemsoption: [],
      itemSearch: "",
      locationData: [],
      location: "",
      taxData: [],
      total_amount: 0,
      total_tax: 0,
      gross_amount: 0,
      symbol: "",
      selection: [],
      item_object: [],
      taxSummary: [],
      api_items: "",
      final_object: [],
      ledgerId: "",
      ledgerGuid: "",
      partyName: "",
      partyGuid: "",
      partyGSTIn: "",
      isIGST: "no",
      isGstApplicable: "",
      taxarray: [],
      final_ledgerEntries: [],
      final_part_ledgerEntries: [],
      error: [],
      disabled: "1",
      hsn_disabled: "1",
      buyer_name: "",
      consignee_name: "",
      buyer_country: "",
      buyer_state: "",
      consignee_country: "",
      consignee_state: "",
      buyer_pincode: "",
      buyer_regisration_type: "",
      buyer_address: "",
      consignee_address: "",
      order_details_address: "",
      consignee_pincode: "",
      buyer_gstin: "",
      consignee_gstin: "",
      buyer_place_of_supply: "",
      dispatch_shipping_date: "",
      dispatch_delivery_note: "",
      dispatch_doc_no: "",
      dispatch_despatch_through: "",
      dispatch_destination: "",
      dispatch_bill_no: "",
      dispatch_motor_vehicle_no: "",
      order_date: "",
      order_invoice_date: "",
      order_no: "",
      order_terms_of_payment: "",
      order_terms_of_delivery : "",
      order_other_reference: "",
      eway_date: "",
      eway_bill_number: "",
      
      ledger_array: [
        {
        
        },
      ],
      ledger_amount: 0,
      
      add_more_ledger: [],
      select_tax: "",
      buyerData: [],
      buyersearch: "",
      CountryData: [],
      ConsigneecountryData: [],
      countrysearch: "",
      consigneesearch: "",
      stateData: [],
      statesearch: "",
      consigneestateData: [],
      usePriceLevels: "",
      price_level: "",
      price_array: [],
      sales_data: [],
      select_party: "Select Party Name",
      update_final_object: [],
      update_stockItemEntries: [],
      party_count: 0,
      Inventory_error: [],
      isTransfer: "0",
      isPaid: "0",
      final_select: [],
      narration: "",
      addLedger_error: [],
      invoice_type: true,
      voucher_error: "",
      showTax: false,
      gstApplicable: "",
      rateLists: "",
      item_gstApplicable: "",
      item_rateLists: "",
      item_parentGuid: "",
      gst_tax_array: [],
      taxarray_value: [],
      tax_igst: 0,
      tax_cgst: 0,
      tax_sgst: 0,
      createdByName : "",
      checkedByName : "",
      updatedByName : "",
      dropDownKey: 0,
      
      invoiceOrders : [],
      invoiceDelNotes : [],
      eWayBillDetails : [],
      ledgerTaxType_value : "",
    isValidGSTIN: true,
    isValidConsigneeGSTIN: true
    };
  },
  created() { },

  watch: {

  },
 


  methods: {
    roundToTwoDecimalPlaces(value) {
      const factor = Math.pow(10, 2);
      return Math.round(value * factor) / factor;
    },
    html_tag_notaccept(field, event) {
      const input = event.target.value;
    
      let tempDiv = document.createElement('div');
      tempDiv.innerHTML = input;
      const sanitizedValue = tempDiv.textContent || tempDiv.innerText || "";
     
      this[field] = sanitizedValue;
    
      event.target.value = sanitizedValue;
      
    },
  
    change_godown(event,index){
      if(this.final_object != ""){
        this.final_object[index].godownName = event.target.value;
      }
    },
    change_description(event,index){
      if(this.final_object != ""){
        this.final_object[index].descriptions = event.target.value;
      }
    },

    validateGSTIN() {
    
      const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
    if (!this.buyer_gstin || this.buyer_gstin.trim() === '') {
    this.isValidGSTIN = true;
  } else {
    this.isValidGSTIN = gstinRegex.test(this.buyer_gstin);
  }
     if (!this.consignee_gstin || this.consignee_gstin.trim() === '') {
    this.isValidConsigneeGSTIN = true;
  } else {
    this.isValidConsigneeGSTIN = gstinRegex.test(this.consignee_gstin);
  }
    if(this.isValidGSTIN == false || this.isValidConsigneeGSTIN == false ){
      this.disabled = '1'
    }
    else{
      this.disabled = '0'
    }

  },
   
  taxInclusive_calculation(event,index){
      const isChecked = event.target.checked;
      this.tableRows[index].taxInclusiveChecked = isChecked;
      if(isChecked == true){
        if(this.$route.params.voucher_id){
        this.tableRows[index].old_amount = this.tableRows[index].inclusiveVatRate ? this.tableRows[index].inclusiveVatRate.split('/')[0]:this.tableRows[index].rate;
        }
        else{
          
          this.tableRows[index].old_amount = this.tableRows[index].rate;
        }
        const tax = this.tableRows[index].gst_per;
        const rate = this.tableRows[index].rate / (1 + (this.tableRows[index].gst_per / 100));
        this.tableRows[index].rate = rate.toFixed(2);
      }else{
        if(this.$route.params.voucher_id){
          if(this.tableRows[index].inclusiveVatRate){
            this.tableRows[index].old_amount =  this.tableRows[index].inclusiveVatRate.split('/')[0];
          }
        }
       
        this.tableRows[index].rate = this.tableRows[index].old_amount;
      }
      this.amount_calculation(index);
    },
    validateAlphabets() {
   
      this.dispatch_destination = this.dispatch_destination.replace(/[^a-zA-Z]/g, '');
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
    register(e) { },
    insert_Row() {
      if (this.disabled != "1") {
        const newId = this.tableRows.length + 1;
        this.tableRows.push({
          item_name: "Select Item",
          item_guid: "",
          rate: "",
          quantity: "",
          discount: "",
          location: "",
          item_description: "",
          amount: "",
          id: newId
        }),
          $(".dropdown-input").on("focus", function () {
            $(this).attr("autocomplete", "off");
          });
        this.getlocationlist();
      }
    },
    insert_ledger() {
      if (this.disabled != "1") {
        this.ledger_array.push({
          ledger_name: "",
          sub_ledger_name: "",
          type: "",
          amount: 0,
          ledger_ledgerGuid: "", 
          ledger_ledgerGroup: "",
          ledger_ledgerGroupParent: ""
        });
      }
    },

    tax_insert_Row() {
      this.taxarray.push({
        tax_select: "",
        amount: "",
      });
    },
    DeleteRow(id, index) {
      this.final_ledgerEntries = [];
      if (this.tableRows.length !== 1) {
        this.tableRows.splice(index, 1);
        this.final_select = [];
      } else {
        this.dropDownKey++;
        this.taxarray = [];
        this.total_tax = 0;
        // alert(this.total_tax)
        this.tableRows[index].item_name = "";
        this.tableRows[index].item_guid = "";
        this.tableRows[index].item_description = "";
        this.tableRows[index].location = "";
        // this.tableRows[index].location = "";
        this.tableRows[index].hsn_code = "";
        this.tableRows[index].quantity = "1";
        this.tableRows[index].rate = "";
        this.tableRows[index].discount = "";
        this.tableRows[index].amount = "";
      }
      if(index == 0){
        this.gst_calculation(index);  
      }else{
        this.gst_calculation(index-1);
      }
      this.tax_calculation();
    },
    LedgerDeleteRow(id, index) {
      if (this.ledger_array.length != 1) {
        this.ledger_array.splice(index, 1);
      } else {
       
        this.showledgers = false;
        this.ledger_array.splice(index, 1);
      }
      this.tax_calculation();
    },

    
    TaxdeleteRow(index) {
     
      if (this.taxarray.length != 1) {
      
        this.taxarray.splice(index, 1);
      } else {
        this.showTax = false;
        this.taxarray.splice(index, 1);
      }
     
      this.final_ledgerEntries.splice(index, 1);
      
      this.tax_calculation();
    },
    itemselected(selection, index, voucher_id = "") {
      
      console.log(selection, "intemselected console data")
      this.final_ledgerEntries = [];
      this.final_select = [];
      this.final_select = selection;
   
          this.tableRows[index].rate = "";
          if (
            typeof selection.id === undefined ||
            selection.id === null ||
            selection.id === undefined
          ) {
            this.tableRows[index].rate = 0;
          } else {
            this.tableRows[index].rate = parseFloat(
              this.getPriceAccordingPriceLevel(selection, index)
            ).toFixed(2);
          }
        // }
        this.item_gstApplicable = selection.gstAppliacable;
        this.item_rateLists = selection.rateLists;
        this.item_parentGuid = selection.parentGuid;
        this.tableRows[index].item_name = selection.name;
        this.tableRows[index].item_guid = selection.guid;
        this.tableRows[index].item_id = selection.id;
        this.tableRows[index].hsn_code = selection.hsnCode;
        this.tableRows[index].baseUnits = selection.baseUnits;
        this.tableRows[index].parent = selection.parent;
        this.tableRows[index].parentGuid = selection.parentGuid;
        this.tableRows[index].category = selection.category;
        this.tableRows[index].categoryGuid = selection.categoryGuid;
        this.tableRows[index].rateOfVAT = selection.rateOfVAT;
        this.itemSearch = "";
        this.getitemlist();
        this.amount_calculation(index);
       
    },
     new_rate(selection, index) {
      if(this.price_level){
       if(this.final_select) {
         this.tableRows[index].rate = parseFloat(
           this.getPriceAccordingPriceLevel(this.final_select, index)
         ).toFixed(2);
       }
      }
    },

    itemfilter(keyword, index) {
      this.itemSearch = keyword;
      this.getitemlist();
    },
    partyfilter(keyword) {
      this.search = keyword


        this.partyDetails();
        this.getaddmoreledger()
      this.validation();

    

    },
    buyerSelected(selection, index, buyer_name) {
  
      
      
      this.buyer_name = buyer_name === undefined ? selection.name : buyer_name;
      this.buyer_country = selection.countryName;
      this.buyer_state = selection.stateName;
      this.buyer_place_of_supply = selection.stateName;
      this.buyer_gstin = selection.partyGSTIn;
     
      this.buyer_address = selection.address;
      this.buyerDetails();
    },
    buyerfilter(keyword) {
      this.buyersearch = keyword;
      this.buyerDetails();
    },
    countrSelected(selection, index) {
      this.buyer_country = selection.name;
      this.countrDetails();
      this.stateDetails();
    },
    countrfilter(keyword) {
      this.countrysearch = keyword;
      this.countrDetails();
    },
    consigneecountrSelected(selection, index) {
      this.consignee_country = selection.name;
      this.consigneestateDetails();
      this.consigneecountrDetails();
    },
    consigneecountrfilter(keyword) {
      this.consigneesearch = keyword;
      this.consigneecountrDetails();
    },
    stateSelected(selection, index) {
      this.buyer_state = selection.name;
      this.stateDetails();
    },
    statefilter(keyword) {
      this.statesearch = keyword;
      this.stateDetails();
    },
    consigneestateSelected(selection, index) {
      this.consignee_state = selection.name;
      this.consigneestateDetails();
    },
    consigneestatefilter(keyword) {
      this.consigneestatesearch = keyword;
      this.consigneestateDetails();
    },
    consigneeSelected(selection, index) {
      this.consignee_name = selection.name;
      this.consignee_country = selection.countryName;
      this.consignee_state = selection.stateName;
      this.consignee_gstin = selection.partyGSTIn;
      this.consignee_address = selection.address;
      this.buyerDetails();
    },
    consigneefilter(keyword) {
      this.buyersearch = keyword;
      this.buyerDetails();
    },
    partyDetails() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startLimit: 0,
        endLimit: 100,
        requestFrom: "WEB",
        searchTerm: this.search,
        sortBy: "ledgerName",
        parent: [
          "Bank Accounts",
          "Bank OD A/c",
          "Bank OCC A/c",
          "Branch / Divisions",
          "Cash-in-Hand",
          "Cash-in-hand",
          "Sundry Creditors",
          "Sundry Debtors",
        ],
      
          orderBy: 1,
          isFromBackEntry: true

       
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgersByLedgerGroupParentGo(data, headers)
        .then((response) => {
          if (response.data.status != "0") {
            this.partyData = [];
            for (let [key, value] of Object.entries(response.data.data.list)) {
              this.partyData.push({
                name: value.ledgerName,
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
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
      this.stateDetails();
      this.consigneestateDetails()

        
    },

    buyerDetails() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startLimit: 0,
        endLimit: 100,
        requestFrom: "WEB",
        searchTerm: this.buyersearch,
        sortBy: "ledgerName",

        parent: [
          "Bank Accounts",
          "Bank OD A/c",
          "Bank OCC A/c",
          "Branch / Divisions",
          "Cash-in-Hand",
          "Cash-in-hand",
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
      Api.getLedgersByLedgerGroupParentGo(data, headers)
        .then((response) => {
          if (response.data.status != "0") {
            this.buyerData = [];
            for (let [key, value] of Object.entries(response.data.data.list)) {
              this.buyerData.push({
                name: value.ledgerName,
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
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    countrDetails() {
      
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
          _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        searchTerm: this.countrysearch,

      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),

      };
      Api.getCountryGo(data, headers)
        .then((response) => {
          this.CountryData = [];
          for (let [key, value] of Object.entries(response.data.data)) {
            if (value.countryName !== undefined && value.countryName !== "") {

            this.CountryData.push({
              name: value.countryName,
              id: value.countryName,
            });
          }
        }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    consigneecountrDetails() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
          _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        searchTerm: this.countrysearch,

      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),

      };
      Api.getCountryGo(data, headers)
        .then((response) => {
          this.ConsigneecountryData = [];
          for (let [key, value] of Object.entries(response.data.data)) {
            if (value.countryName !== undefined && value.countryName !== "") {

            this.ConsigneecountryData.push({
              name: value.countryName,
              id: value.countryName,
            });
          }
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    stateDetails() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        countryName: this.buyer_country,
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
    consigneestateDetails() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        requestFrom: "WEB",
        _userId: localStorage.getItem("customerId"),
        countryName: this.consignee_country,
        searchTerm: this.consigneestatesearch,

      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),

      };
      Api.getStateGo(data, headers)
        .then((response) => {
          this.consigneestateData = [];
          for (let [key, value] of Object.entries(response.data.data)) {
            if (value.stateName !== undefined && value.stateName !== "") {

            this.consigneestateData.push({
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
    stateDetails() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
          _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        countryName: this.buyer_country,

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
    getVoucherNumber() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        voucherType: "Credit Note",
        voucherTypeId : localStorage.getItem("VoucherTypesId"),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getNextVoucherNumberGo(data, headers)
        .then((response) => {
          if (response.data.status != "0") {
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
    partySelected(selection, type = "") {
      
      if (selection._id === undefined) {
        if (this.party_count > 0) {
          this.ledger_type = "";
          this.tableRows = [];
          this.tableRows.push({
            item_name: "Select Item",
            item_guid: "",
            rate: "",
            quantity: "",
            discount: "",
            location: "",
            item_description: "",
            amount: "",
          });
          this.taxarray = [];
          this.showledgers = false;
          this.ledger_array = [];
          this.gross_amount = 0;
          this.total_tax = 0;
          this.total_amount = 0;
        } else {
          this.party_count += 1;
        }
      }

     
      this.party_name = selection.name;
     
      this.partyName = selection.name;
      
      this.partyGuid = selection.partyguid;
      this.partyid = selection.id;
      this.partystateName = selection.stateName;
      
      this.ledgerGroupParent = selection.parent;
      this.ledgerGroup = selection.parentgroup;
      if(this.$route.params.voucher_id){

      }else{
    
      this.consignee_gstin = selection.partyGSTIn;
      this.consignee_name = selection.name;
      this.buyer_name = selection.name;
      this.buyer_state = selection.stateName;
      this.consignee_state = selection.stateName;
      this.buyer_place_of_supply = selection.stateName;



        this.buyer_gstin = selection.partyGSTIn;
        this.countryName = selection.countryName;
        this.buyer_country = selection.countryName;
        this.consignee_country = selection.countryName;
        this.buyer_pincode = selection.pincode;
        this.consignee_pincode = selection.pincode;
        this.buyer_regisration_type = selection.gstRegistrationType;
        this.buyer_address = selection.address;
        this.consignee_address = selection.address;
      
      }

      this.partyGSTIn = selection.partyGSTIn;

     
      const partyGST = this.partyGSTIn;
      const companyGST = localStorage.getItem("companyGstNumber");
      const companyState = localStorage.getItem("companystateName");
      const partyState = this.partystateName;
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

    },
    getledgerlist() {
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
        parent: ["Sales Accounts"],
    
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
            this.ledgerData = response.data.data.list;
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    ledgerChange(event) {
     
      this.otherGuid = event.target.value;
      const theTarget =
        event.target.options[event.target.options.selectedIndex].dataset;
      this.ledgerId = theTarget.ledgerguid;
      this.gstApplicable = theTarget.gstapplicable;
      const selectedOption = event.target.options[event.target.selectedIndex];
      const rateListsAttr = selectedOption.getAttribute('data-rateLists');
      this.rateLists = JSON.parse(rateListsAttr);
      this.taxarray = [];
      this.tableRows = [];
      this.final_ledgerEntries = [];
      this.showledgers = false;
      this.ledger_array = [];
      this.gross_amount = 0;
      this.total_tax = 0;
      this.total_amount = 0;
      this.tableRows.push({
        item_name: "Select Item",
        item_guid: "",
        rate: "",
        quantity: "",
        discount: "",
        location: "",
        item_description: "",
        amount: "",
      });
      this.getlocationlist();
      this.validation();
    },
    getitemlist() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        startLimit: 0,
        endLimit: 25,
        requestFrom: "WEB",
        searchTerm: this.itemSearch,
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
          this.itemsoption = [];
          for (let [key, value] of Object.entries(response.data.data.list)) {
            this.itemsoption.push({
              name: value.stockItemName,
              id: value.id,
              hsnCode: value.hsnCode,
              guid: value.guid,
              baseUnits: value.baseUnits,
              parent: value.parent,
              parentGuid: value.parentGuid,
              category: value.category,
              categoryGuid: value.categoryGuid,
              rateOfVAT: value.rateOfVAT,
              fullPriceLevelList: value.fullPriceLevelList,
              standardSellingPriceList: value.standardSellingPriceList,
              lastSalesPrice: value.lastSalesPrice,
              rateLists: value.rateLists,
              gstAppliacable: value.gstAppliacable
            });
          }
        }
      });
    },
    validation() {
      var error = [];
      this.error = [];
      this.disabled = "1";
      if (!this.partyName) {
        this.error["party_name"] = "Party Name is required";
      }

      if (!this.ledger_type) {
        this.error["ledger_type"] = "Ledger Type is required";
      }

      if (Object.keys(this.error).length === 0) {
        this.disabled = "0";
      }
    },

    getlocationlist() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId : localStorage.getItem("customerId"),
        startLimit: 0,
        endLimit: 100,
        requestFrom: "WEB",
        searchTerm: "",
      };
      const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
      Api.getGodownsByCompanyIdGo(data, headers)
        .then((response) => {
       
          if (response.data.status != "0") {
            if (response.data.data.list.length == "1") {
             
              this.tableRows.forEach((row) => {
           
                row.location = response.data.data.list[0].name
               
              })
             
            }
            this.locationData = response.data.data.list;
            this.locationDataa = response.data.data;

          
          } else {
            this.locationData = [];
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
  
    amount_calculation(index) {
      this.final_ledgerEntries = [];
      console.log(index , "index in amount calculation function ")
      var quantity = parseFloat(this.tableRows[index].quantity);
      console.log(quantity)
      var rate = parseFloat(this.tableRows[index].rate);
      console.log(rate)
      var discount = parseFloat(this.tableRows[index].discount);
      if (this.tableRows[index].discount !== "") {
        this.tableRows[index].amount = this.getNum(
          quantity * rate - (quantity * rate * discount) / 100
        ).toFixed(2);
      } else {
        this.tableRows[index].amount = this.getNum(quantity * rate).toFixed(2);
      }
      this.gst_calculation(index);
      this.tax_calculation();
    },
    checkDiscount(index) {
      if (this.tableRows[index].discount > 100) {
        this.tableRows[index].discount = 100;
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
        endLimit: 100,
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
            this.taxData = response.data.data.list;
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    tax_calculation(index) {
   
      this.total_amount = 0;
      this.total_tax = 0;
      this.tableRows.forEach((number) => {
        this.total_amount += parseFloat(number.amount);
      });
      this.taxarray.forEach((number) => {
        this.total_tax += parseFloat(number.amount);
      });
      this.ledger_amount = 0;
      if (this.showledgers == true) {
        this.ledger_array.forEach((number1) => {
          let ledgerAmount = number1.amount === "" || number1.amount === undefined ? 0 : number1.amount;
       
          if (number1.type == "Debit") {
            this.ledger_amount -= parseFloat(ledgerAmount);
          } else {
            this.ledger_amount += parseFloat(ledgerAmount);
          }
        });
      }

      this.gross_amount = this.total_amount + this.total_tax + this.ledger_amount;
    },
    handleTaxSelectChange(event) {
      const selectedIndex = event.target.selectedIndex;
      const selectedValue = event.target.options[selectedIndex].value;
      const rowIndex = event.target.parentElement.parentElement.rowIndex - 1;
      this.gst_select_value_get(selectedValue, rowIndex);
      this.tax_value_select(event, rowIndex - 1);
    },
    gst_calulation_row_wise() {
     
      this.tax_igst = 0;
      this.tax_cgst = 0;
      this.tax_sgst = 0;
      this.taxarray_value = [];
      for (let [key, value] of Object.entries(this.gst_tax_array)) {
        this.tax_igst = this.tax_igst + ((this.tableRows[key].amount) * value.IGST) / 100;
        this.tax_cgst = this.tax_cgst + ((this.tableRows[key].amount) * value.CGST) / 100;
        this.tax_sgst = this.tax_sgst + ((this.tableRows[key].amount) * value.SGST) / 100;
      }

    
      if (this.isIGST == "yes") {
     
        if (this.tax_igst != 0) {
          this.taxarray_value.push({
            tax_select: "IGST",
            amount: parseFloat(this.tax_igst).toFixed(2),
          });
        }
        if (this.tax_cgst != 0) {
          this.taxarray_value.push({
            tax_select: "CGST",
            amount: parseFloat(0).toFixed(2),
          });
        }
        if (this.tax_sgst != 0) {
          this.taxarray_value.push({
            tax_select: "SGST",
            amount: parseFloat(0).toFixed(2),
          });
        }

      } else {
      
        if (this.tax_igst != 0) {
          this.taxarray_value.push({
            tax_select: "IGST",
            amount: parseFloat(0).toFixed(2),
          });
        }
        if (this.tax_cgst != 0) {
          this.taxarray_value.push({
            tax_select: "CGST",
            amount: parseFloat(this.tax_cgst).toFixed(2),
          });
        }
        if (this.tax_sgst != 0) {
          this.taxarray_value.push({
            tax_select: "SGST",
            amount: parseFloat(this.tax_sgst).toFixed(2),
          });
        }
      }
    },
   

    handleTaxValueChange(event, taxindex) {
      
      clearTimeout(this.taxCalculationTimeout);
      this.taxCalculationTimeout = setTimeout(() => {
        
        this.tax_value_per(event, taxindex);
      }, 1000);
    },


    tax_value_per(event, taxindex) {
      const inputValue = parseFloat(event.target.value);

   
      if (isNaN(inputValue)) {
       
        this.TaxtableRows[taxindex].tax_per = "0.00";
        this.TaxtableRows[taxindex].tax_amount = "0.00";
        this.tax_calculation(taxindex);
        return;
      }

    
      if (inputValue === 0 || inputValue === null) {
      
        this.TaxtableRows[taxindex].tax_per = "0.00";
        this.TaxtableRows[taxindex].tax_amount = "0.00";
      } else {
     
        const taxAmount = (this.total_amount * inputValue) / 100;
        this.TaxtableRows[taxindex].tax_per = inputValue.toFixed(2);
        this.TaxtableRows[taxindex].tax_amount = taxAmount.toFixed(2);
      }
      this.tax_calculation(taxindex);
    },

    tax_value_amount(event, taxindex) {
      this.taxarray[taxindex].amount = event.target.value;
      if(this.final_ledgerEntries[taxindex]){
        this.final_ledgerEntries[taxindex].amount = parseFloat(event.target.value);
      }
      this.tax_calculation(taxindex);
    },
 
    gst_calculation(index) {
      this.item_object = [];
      this.tableRows.forEach((value, key) => {
        if(this.tableRows[index].taxInclusiveChecked == true){
          const itemRate = value.rate * (1+(this.tableRows[index].gst_per/100))
          var inner_object = {
            itemId: value.item_guid,
            itemQty: value.quantity.toString(),
         
            itemRate: isNaN(itemRate) ? "0" : Math.round(itemRate).toString(), //ashish
         
            discountPercent : value.discount,
            isTaxInclusive : this.tableRows[index].taxInclusiveChecked,
            gstPercent : "",
            serialNo : key+1,
         
          };
        }else{
          var inner_object = {
            itemId: value.item_guid,
            itemQty: value.quantity.toString(),
       
            itemRate: isNaN(value.rate) ? "0" : value.rate, //ashish
          
            discountPercent : value.discount,
            isTaxInclusive : this.tableRows[index].taxInclusiveChecked,
            gstPercent : "",
            serialNo : key+1,
           
          };
        }
        this.item_object.splice(key, 1, inner_object);
      });
      const data = {
        _userId : localStorage.getItem("customerId"),
        company_id : localStorage.getItem("companyId"),
        companyGstNumber : localStorage.getItem("companyGstNumber"),
        partyGuid : this.partyGuid,
        partyGstNumber : this.partyGSTIn,
        ledgerGuid : this.ledgerId,
        priceLevel : this.price_level,
        voucherDate: moment(String(this.customDate)).format("YYYY-MM-DD"),
        itemDetails: this.filterItemDetails(this.item_object),
        otherLedgerDetails : [],
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
          
            this.tableRows[index].gst_per = response.data.data.voucherGstDetails.gstPercent;
            if(response.data.data.itemGstDetails.length != "0"){
              if (response.data.status != "0") {
                this.taxarray = [];
                this.total_tax = 0;
                if (response.data.data.isGstApplicable == false) {
                 
                } else {
                  if (response.data.data.igstApplicable == false) {
                  
                    var gst_amount = parseFloat((response.data.data.voucherGstDetails.gstAmount / 2).toFixed(2));
                    this.taxarray.push({
                      tax_select: "",
                      tax_name: "CGST",
                      amount: this.roundToTwoDecimalPlaces(response.data.data.voucherGstDetails.gstAmount / 2),
                    });
                    this.taxarray.push({
                      tax_select: "",
                      tax_name: "SGST",
                      amount: this.roundToTwoDecimalPlaces(response.data.data.voucherGstDetails.gstAmount / 2),
                    });
                    this.total_tax += gst_amount + gst_amount;
                  } else {
                 
                    this.taxarray.push({
                      tax_select: "",
                      tax_name: "IGST",
                      amount: this.roundToTwoDecimalPlaces(response.data.data.voucherGstDetails.gstAmount),
                    });
                    this.total_tax += parseFloat(response.data.data.voucherGstDetails.gstAmount);
                  }
                }
                
                this.tax_calculation();

                this.api_items = response.data.data.itemGstDetails;
                this.final_object = [];
                
                response.data.data.itemGstDetails.forEach((value, key) => {
                  if (response.data.data.igstApplicable == true) {
                    
                    this.final_object.push({
                      stockItemGuid: this.tableRows[key].item_guid,
                      godownName: this.tableRows[key].location,
                      rate:
                        parseFloat(this.tableRows[key].rate).toFixed(2) +
                        "/" +
                        this.tableRows[key].baseUnits,
                        inclusiveVatRate : this.tableRows[key].taxInclusiveChecked ? parseFloat(this.tableRows[key].old_amount).toFixed(2) + "/" + this.tableRows[key].baseUnits : "",
                        isTaxInclusive : this.tableRows[key].taxInclusiveChecked,
                      actualQty:
                        this.tableRows[key].quantity +
                        " " +
                        this.tableRows[key].baseUnits,
                      stockGroup: this.tableRows[key].parent,
                      discount: this.tableRows[key].discount,
                      qty: parseFloat(this.tableRows[key].quantity),
                      ledgerGuid: this.ledgerId,
                      stockItemSyncId : this.tableRows[key].item_guid == "" ? this.tableRows[key].item_id : "",
                      orderNumber: "",
                      ledgerName: this.ledger_type,
                      descriptions: this.tableRows[key].item_description,
                      stockCategory: this.tableRows[key].category,
                      vatTaxRate: this.tableRows[key].rateOfVAT,
                      billedQty:
                        this.tableRows[key].quantity +
                        " " +
                        this.tableRows[key].baseUnits,
                      stockItemName: this.tableRows[key].item_name,
                      amount: parseFloat("-" + this.tableRows[key].amount),
                      ledgerEntry: [],
                      hsnCode: this.tableRows[key].hsnCode,
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
                      
                      ],
                    });
                 
                  } else {
                    this.final_object.push({
                      stockItemGuid: this.tableRows[key].item_guid,
                      godownName: this.tableRows[key].location,
                      rate:
                        parseFloat(this.tableRows[key].rate).toFixed(2) +
                        "/" +
                        this.tableRows[key].baseUnits,
                        inclusiveVatRate : this.tableRows[key].taxInclusiveChecked ? parseFloat(this.tableRows[key].old_amount).toFixed(2) + "/" + this.tableRows[key].baseUnits : "",
                        isTaxInclusive : this.tableRows[key].taxInclusiveChecked,
                      actualQty:
                        this.tableRows[key].quantity +
                        " " +
                        this.tableRows[key].baseUnits,
                      stockGroup: this.tableRows[key].parent,
                      discount: this.tableRows[key].discount,
                      qty: parseFloat(this.tableRows[key].quantity),
                      ledgerGuid: this.ledgerId,
                      stockItemSyncId : this.tableRows[key].item_guid == "" ? this.tableRows[key].item_id : "",
                      orderNumber: "",
                      ledgerName: this.ledger_type,
                      descriptions: this.tableRows[key].item_description,
                      stockCategory: this.tableRows[key].category,
                      vatTaxRate: this.tableRows[key].rateOfVAT,
                      billedQty:
                        this.tableRows[key].quantity +
                        " " +
                        this.tableRows[key].baseUnits,
                      stockItemName: this.tableRows[key].item_name,
                      amount: parseFloat("-" + this.tableRows[key].amount),
                      ledgerEntry: [],
                      hsnCode: this.tableRows[key].hsnCode,
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
                    
                      ],
                    });
                  }
                });
                this.tax_calculation();
              } else {
                this.final_object = [];
                this.tableRows.forEach((value, key) => {
                  this.final_object.push({
                    stockItemGuid: this.tableRows[key].item_guid,
                    godownName: this.tableRows[key].location,
                    rate:
                      parseFloat(this.tableRows[key].rate).toFixed(2) +
                      "/" +
                      this.tableRows[key].baseUnits,
                      inclusiveVatRate : this.tableRows[key].taxInclusiveChecked ? parseFloat(this.tableRows[key].old_amount).toFixed(2) + "/" + this.tableRows[key].baseUnits : "",
                      isTaxInclusive : this.tableRows[key].taxInclusiveChecked,
                    actualQty:
                      this.tableRows[key].quantity +
                      " " +
                      this.tableRows[key].baseUnits,
                    stockGroup: this.tableRows[key].parent,
                    discount: this.tableRows[key].discount,
                    qty: parseFloat(this.tableRows[key].quantity),
                    ledgerGuid: this.ledgerId,
                    stockItemSyncId : this.tableRows[key].item_guid == "" ? this.tableRows[key].item_id : "",
                    orderNumber: "",
                    ledgerName: this.ledger_type,
                    descriptions: this.tableRows[key].item_description,
                    stockCategory: this.tableRows[key].category,
                    vatTaxRate: this.tableRows[key].rateOfVAT,
                    billedQty:
                      this.tableRows[key].quantity +
                      " " +
                      this.tableRows[key].baseUnits,
                    stockItemName: this.tableRows[key].item_name,
                    amount: parseFloat("-" + this.tableRows[key].amount),
                    ledgerEntry: [],
                    hsnCode: this.tableRows[key].hsnCode,
                    isIncGSTChecked: false,
                    realAmount: "",
                    taxes: [],
                  });
                });
              }
            }else{
              this.final_object = [];
              this.tableRows.forEach((value, key) => {
                this.final_object.push({
                  stockItemGuid: this.tableRows[key].item_guid,
                  godownName: this.tableRows[key].location,
                  rate:
                    parseFloat(this.tableRows[key].rate).toFixed(2) +
                    "/" +
                    this.tableRows[key].baseUnits,
                    inclusiveVatRate : this.tableRows[key].taxInclusiveChecked ? parseFloat(this.tableRows[key].old_amount).toFixed(2) + "/" + this.tableRows[key].baseUnits : "",
                    isTaxInclusive : this.tableRows[key].taxInclusiveChecked,
                  actualQty:
                    this.tableRows[key].quantity +
                    " " +
                    this.tableRows[key].baseUnits,
                  stockGroup: this.tableRows[key].parent,
                  discount: this.tableRows[key].discount,
                  qty: parseFloat(this.tableRows[key].quantity),
                  ledgerGuid: this.ledgerId,
                  stockItemSyncId : this.tableRows[key].item_guid == "" ? this.tableRows[key].item_id : "",
                  orderNumber: "",
                  ledgerName: this.ledger_type,
                  descriptions: this.tableRows[key].item_description,
                  stockCategory: this.tableRows[key].category,
                  vatTaxRate: this.tableRows[key].rateOfVAT,
                  billedQty:
                    this.tableRows[key].quantity +
                    " " +
                    this.tableRows[key].baseUnits,
                  stockItemName: this.tableRows[key].item_name,
                  amount: parseFloat("-" + this.tableRows[key].amount),
                  ledgerEntry: [],
                  hsnCode: this.tableRows[key].hsnCode,
                  isIncGSTChecked: false,
                  realAmount: "",
                  taxes: [],
                });
              });
            }
          })
          .catch((err) => {
            // alert("ERROR");
            // Common.getStatusForActionFailed(err.response.status);
            this.loading = false;
            this.final_object = [];
              this.tableRows.forEach((value, key) => {
                this.final_object.push({
                  stockItemGuid: this.tableRows[key].item_guid,
                  godownName: this.tableRows[key].location,
                  rate:
                    parseFloat(this.tableRows[key].rate).toFixed(2) +
                    "/" +
                    this.tableRows[key].baseUnits,
                    inclusiveVatRate : this.tableRows[key].taxInclusiveChecked ? parseFloat(this.tableRows[key].old_amount).toFixed(2) + "/" + this.tableRows[key].baseUnits : "",
                    isTaxInclusive : this.tableRows[key].taxInclusiveChecked,
                  actualQty:
                    this.tableRows[key].quantity +
                    " " +
                    this.tableRows[key].baseUnits,
                  stockGroup: this.tableRows[key].parent,
                  discount: this.tableRows[key].discount,
                  qty: parseFloat(this.tableRows[key].quantity),
                  ledgerGuid: this.ledgerId,
                  stockItemSyncId : this.tableRows[key].item_guid == "" ? this.tableRows[key].item_id : "",
                  orderNumber: "",
                  ledgerName: this.ledger_type,
                  descriptions: this.tableRows[key].item_description,
                  stockCategory: this.tableRows[key].category,
                  vatTaxRate: this.tableRows[key].rateOfVAT,
                  billedQty:
                    this.tableRows[key].quantity +
                    " " +
                    this.tableRows[key].baseUnits,
                  stockItemName: this.tableRows[key].item_name,
                  amount: parseFloat("-" + this.tableRows[key].amount),
                  ledgerEntry: [],
                  hsnCode: this.tableRows[key].hsnCode,
                  isIncGSTChecked: false,
                  realAmount: "",
                  taxes: [],
                });
              });
          });
      }
    },
    filterItemDetails(items) {
      return items.filter(item => item.itemQty !== "" && item.itemRate !== "" && item.itemRate !== 0 && item.itemRate !=="0");
    },
   
    tax_value_select(event, taxindex = 0, ledgerarray={}) {
    
      if (Object.keys(ledgerarray).length !== 0) {
      
        
        setTimeout(() => {
          this.taxarray[taxindex].tax_select = ledgerarray.ledgerName;
          console.log(this.taxarray, "taxarray console data")
          
        
          this.final_part_ledgerEntries.push({
            billAllocationdetails: [],
            bankAllocationDetails: [],
            isMoreLedgerField: "1",
            ledgerName: ledgerarray.ledgerName,
            ledgerTaxType : (ledgerarray.ledgerTaxType),
            ledgerGroup: ledgerarray.ledgerGroup,
            ledgerGroupParent: ledgerarray.ledgerGroupParent,
            ledgerGuid: ledgerarray.ledgerGuid,
            amount: parseFloat("-" + this.taxarray[taxindex].amount),
          });
          
          this.final_ledgerEntries.push(this.final_part_ledgerEntries[taxindex]);
         
        }, 1500);
      } else {
        const theTarget =
          event.target.options[event.target.options.selectedIndex].dataset;
      
        this.ledgerTaxType_value = ""
        if((event.target.value).toLowerCase().includes('cgst')){
          this.ledgerTaxType_value = "cgst"
        }else if ((event.target.value).toLowerCase().includes('sgst')){
          this.ledgerTaxType_value = "sgst"
        }else if ((event.target.value).toLowerCase().includes('igst')){
          this.ledgerTaxType_value = "igst"
        }else{
          this.ledgerTaxType_value = ""
        }
        this.final_part_ledgerEntries = [];
        this.final_part_ledgerEntries.push({
          billAllocationdetails: [],
          bankAllocationDetails: [],
          isMoreLedgerField: "1",
          ledgerName: event.target.value,
          ledgerGroup: theTarget.ledgergroup,
          ledgerTaxType : this.ledgerTaxType_value,
          ledgerGroupParent: theTarget.ledgergroupparent,
          ledgerGuid: theTarget.guid,
          amount: parseFloat("-" + this.taxarray[taxindex].amount),
        });
        this.$set(this.final_ledgerEntries, taxindex, this.final_part_ledgerEntries["0"]);

       
      }
    },
    add_sales() {
      this.error = [];
      this.add_more_ledger = [];
      this.Inventory_error = [];
      this.addLedger_error = [];
      if (this.usePriceLevels == "Yes") {
        
      }
      if (!this.voucherNumber) {
        this.error["voucherNumber"] = "Voucher Number is required";
        $("html, body").animate({ scrollTop: 0 }, 500);
      }
    

      this.taxarray.forEach((value, key) => {
        if (!value.tax_select) {
          if (!this.error.tax_select) {
            this.error.tax_select = {};
          }
          this.error.tax_select[key] = "Tax is required"; 
        
        }
      });

      this.tableRows.forEach((value, key) => {
 
        if (value.item_name == "Select Item" || value.item_name == "" || value.item_name == undefined) {
          this.Inventory_error["item_name"] = "";
          this.Inventory_error["item_name"] = "Please select item";
          this.error["item_name"] = "Please select item";
        }
        if (value.quantity == "" || value.quantity == "0") {
          this.Inventory_error["quantity"] = "";
          this.Inventory_error["quantity"] = "Please enter quantity";
          this.error["quantity"] = "Please enter quantity";
        }
        if (value.rate == "" || value.rate == "0" || isNaN(value.rate)) {
          this.Inventory_error["rate"] = "";
          this.Inventory_error["rate"] = "Please enter rate";
          this.error["rate"] = "Please enter rate";
        }
        if (value.location == "" || value.location == "0") {
          this.Inventory_error["location"] = "";
          this.Inventory_error["location"] = "Please select godown";
          this.error["location"] = "Please select godown";
        }
      });
      if(this.order_no == ""  && this.order_date){
          this.Inventory_error["order_no"] = ""
          this.Inventory_error["order_no"] = "Please Fill Order No."
          this.error["order_no"] = "Please Fill Order No."

        }
        if(this.order_date == "" &&  this.order_no ){
          this.Inventory_error["order_date"] = ""
          this.Inventory_error["order_date"] = "Please Select Order Date."
          this.error["order_date"] = "Please Select Order Date."

        }
        if(this.dispatch_shipping_date == "" && this.dispatch_doc_no != '' ){
          this.Inventory_error["dispatch_shipping_date"] = ""
          this.Inventory_error["dispatch_shipping_date"] = "Please Select Shipping Date."
          this.error["dispatch_shipping_date"] = "Please Select Shipping Date."

        }
        if(this.dispatch_doc_no == "" && this.dispatch_shipping_date != '' ){
          this.Inventory_error["dispatch_doc_no"] = ""
          this.Inventory_error["dispatch_doc_no"] = "Please enter Dispatch No."
          this.error["dispatch_doc_no"] = "Please enter Dispatch No."

        }

      this.ledger_array.forEach((value, key) => {
       
        if (value.ledger_name == "Search Other Ledger" || value.ledger_name == "" || value.ledger_name == undefined) {
          this.addLedger_error["selectLedger"] = "";
          this.addLedger_error["selectLedger"] = "Please select Search Other Ledger";
          this.error["selectLedger"] = "Please select Search Other Ledger";
        }
        if (value.type == "" || value.type == "0") {
          this.addLedger_error["selecetTransactionType"] = "";
          this.addLedger_error["selecetTransactionType"] =
            "Please select Debit/Credit";
          this.error["selecetTransactionType"] = "Please select Debit/Credit";
        }
        if(value.amount == "" || parseFloat(value.amount) <= "0") {
          this.addLedger_error["ledgerAmount"] = "";
          this.addLedger_error["ledgerAmount"] = "Please enter ledger amount";
          this.error["ledgerAmount"] = "Please enter ledger amount";
        }
      });

      if (Object.keys(this.error).length === 0) {

        const indexesToRemove1 = [];
        this.final_ledgerEntries.forEach((item, index) => {
          if (item.isMoreLedgerField == "0" ) {
            indexesToRemove1.push(index);
          }
        });

        
        for (let i = indexesToRemove1.length - 1; i >= 0; i--) {
          this.final_ledgerEntries.splice(indexesToRemove1[i], 1);
        }
      
        this.final_ledgerEntries.push({
          ledgerGroupParent: this.ledgerGroupParent,
          ledgerName: this.partyName,
          ledgerGuid: this.partyGuid,
          ledgerSyncId : this.partyGuid == "" ? this.partyid : "",
          billAllocationdetails: [],
          bankAllocationDetails: [],
          isMoreLedgerField: "0",
          ledgerGroup: this.ledgerGroup,
          amount: parseFloat(this.gross_amount),
        });
       
        if (this.showledgers == true) {
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
            if (number1.type == "Debit") {
              var amount = number1.amount;
            } else {
              var amount = "-" + number1.amount;
            }
            this.add_more_ledger.push({
              ledgerName: number1.ledger_name,
              // ledgerName: this.selectedLedger,
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
        }
        this.invoiceOrders = [];

        if(this.order_date != "" && this.order_no != ""){
          this.invoiceOrders = [
            {
              basicOrderDate: this.order_date != "" && this.order_date != null ? moment(String(this.order_date)).format("DD MMM yyyy") : "",
              basicPurchaseOrderNo: this.order_no,
            },
          ];
        }
        this.invoiceDelNotes = [];
        if(this.dispatch_delivery_note != "" && this.dispatch_shipping_date != ""){
          this.invoiceDelNotes =  [
              {
                basicShipDeliveryNote: this.dispatch_delivery_note,
                basicShippingDate: moment(
                  String(this.dispatch_shipping_date)
                ).format("DD MMM yyyy"),
              },
            ]
        }

        this.eWayBillDetails = [];
        if(this.eway_bill_number != "" && this.eway_date != ""){
          this.eWayBillDetails = [
              {
                consignorName: "",
                consignorStateName: "",
                consignorPincode: "",
                ignoreGstInValidation: "",
                shippedFromState: "",
                consigneeAddress: "",
                documentType: "",
              
                consignorGstIn: "",
                
                billDate: this.eway_date != "" && this.eway_date != null ? moment(String(this.eway_date)).format("DD MMM yyyy") : "",
                subType: "",
                consigneeGstIn: "",
                billNumber: this.eway_bill_number != "" && this.eway_bill_number != null ? this.eway_bill_number : "",
                consigneeName: "",
                billStatus: "",
                consigneeStateName: "",
                consigneePincode: "",
                consignorAddress: "",
                shippedToState: "",
              },
            ]
        }
        

        const data = {
          voucherType: this.$route.params.voucherTypeName,
          voucherDate:  moment(String(this.customDate)).format("YYYY-MM-DD"),
          partyGuid: this.ledgerId,
          ledgerPriceLevel: this.price_level,
          _userId: localStorage.getItem("customerId"),
          reference: this.voucherNumber,
          StockItemEntries: this.final_object,
          company_id: localStorage.getItem("companyId"),
          partygstIn: this.buyer_gstin,
          isAccountingInvoice: false,
          conSigneegstin: this.partyGSTIn,
          transferComment: "",
          partyLedgerName: this.partyName,
          parentType: "Credit Note",
          partyLedgerGuid: this.partyGuid,
          voucherNumber: this.voucherNumber,
          narration: this.narration,
          isTransfer: 0,
          referenceDate:  moment(String(this.customDate)).format("YYYY-MM-DD"),
          partyName: this.ledger_type,
          ledgerEntries: this.final_ledgerEntries,
          requestFrom: "WEB",
          isSetDefaultNumber: this.invoice_type,
          basicBuyerState : this.buyer_state,
          billOfLadingNo: this.dispatch_bill_no,
          basicShipDocumentNo: this.dispatch_doc_no,
          countryOfResidence: this.buyer_country,
          placeOfSupply: this.buyer_place_of_supply,
          gstRegistrationType: this.buyer_regisration_type,
          basicOrderRef: this.order_other_reference,
          conSigneegstin: this.consignee_gstin,
          basicFinalDestination: this.dispatch_destination,
          invoiceDelNotes: this.invoiceDelNotes,
          basicShipedBy: this.dispatch_despatch_through,
          basicOrderTerms: this.order_details_address,
          eWayBillDetails: this.eWayBillDetails,
          basicShipVesselNo: this.dispatch_motor_vehicle_no,
          invoiceOrders:this.invoiceOrders,
          basicDueDateOfPymt: "",
          basicOrderTerms : this.order_terms_of_delivery,
          basicSenderAddress: this.buyer_address,
          isInvoice: "Yes",
          basicBuyerAddress: this.buyer_address,
          basicBuyerPincode: this.buyer_pincode,
          basicConsigneeName: this.consignee_name,
          basicConsigneeAddress: this.consignee_address,
          basicConsigneeCountry: this.consignee_country,
          basicConsigneeState: this.consignee_state,
          basicConsigneePartygstIn: this.consignee_gstin,
          basicConsigneePincode: this.consignee_pincode,
          basicBuyerName: this.buyer_name,

          basicShippingDate : this.dispatch_shipping_date != "" && this.dispatch_shipping_date != null ? moment(String(this.dispatch_shipping_date)).format("YYYY-MM-DD") : "",
          basicShipDeliveryNote : this.dispatch_delivery_note != "" && this.dispatch_delivery_note != null ? this.dispatch_delivery_note : "",
          basicOrderDate : this.order_date != "" && this.order_date != null ? moment(String(this.order_date)).format("YYYY-MM-DD") : "",
          basicPurchaseOrderNo : this.order_no != "" && this.order_no != null ? this.order_no : "",

          basicDateTimeOfInvoice: this.order_invoice_date != "" && this.order_invoice_date != null ? moment(String(this.order_invoice_date)).format("YYYY-MM-DD") : "",
          createdBy: localStorage.getItem("customerId"),
          checkedBy: localStorage.getItem("customerId"),
          isInvoice: 'Yes'

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
    addmoreLedger_change(event, index, type) {
   
    const sanitize = (str) => {
    return str.replace(/[\$]/g, '\ $');
  };
      
     if(type !== "update"){
      
        this.ledger_array[index].ledger_name = event.name === undefined ? sanitize(event.ledgerName) : sanitize(event.name);
        this.ledger_array[index].ledger_ledgerGuid = event.ledgerGuid;
        this.ledger_array[index].ledger_ledgerGroup = event.ledgerGroup;
        this.ledger_array[index].ledger_ledgerGroupParent = event.ledgerGroupParent; 
    
     } else {
    
      this.addmoreLedgerEntries.forEach((arr, index1) => {
        this.ledger_array[index1].ledger_name = arr.ledgerName; 
        this.ledger_array[index1].ledger_ledgerGuid = arr.ledgerGuid;
        this.ledger_array[index1].ledger_ledgerGroup = arr.ledgerGroup;
        this.ledger_array[index1].ledger_ledgerGroupParent = arr.ledgerGroupParent;
       
      })
     }
     
     
    
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
        "Current Assets",
"Current Liabilities",
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
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    add_ledger_click() {
      this.search = ''
      if (this.disabled != "1") {
        this.ledger_array = [];
        this.showledgers = true;
        this.getaddmoreledger();
      // this.partyDetails();

        this.insert_ledger();
      }
    },
    ledger_amount_keyup() {
      this.tax_calculation();
    },

  
    get_sale_data() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      
      
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
          this.disabled = "0";
          this.isTransfer = response.data.data.isTransfer;
          this.voucherNumber = response.data.data.reference;
          this.partyName = response.data.data.partyLedgerName;
          this.select_party = this.partyName;
          this.ledger_type = response.data.data.partyName;
          this.ledgerId = response.data.data.partyGuid;
          this.customDate = response.data.data.voucherDate;
          this.partyGuid = response.data.data.partyGuid;
          this.price_level = response.data.data.ledgerPriceLevel;
       

          this.tableRows = [];
          const data = {
            company_id: localStorage.getItem("companyId"),
            _userId: localStorage.getItem("customerId"),
            startLimit: 0,
            endLimit: 100,
            requestFrom: "WEB",
            sortBy: "ledgerName",

            searchTerm: this.partyName,
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
                value.name = value.ledgerName;
                value.partyguid = value.guid;
                this.partySelected(value, "update");
              }
            }
            this.stateDetails();
      this.consigneestateDetails()
          });

          this.update_stockItemEntries =
            response.data.data.stockItemEntries;
          for (let [key, value] of Object.entries(
            response.data.data.stockItemEntries
          )) {
            this.total_amount += parseFloat(value.amount);
            this.tableRows.push({
              item_name: value.stockItemName,
              item_guid: value.stockItemGuid,
          
              quantity: value.qty,
              discount: value.discount,
              location: value.godownName,
              item_description: value.descriptions,
              amount: value.amount,
              inclusiveVatRate: value.inclusiveVatRate,
              taxInclusiveChecked: value.isTaxInclusive
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
          
          setTimeout(() => {
         
            this.taxarray = [];
            this.total_tax = 0;
            var key = 0;
            
            for (let [key1, value1] of Object.entries(response.data.data.ledgerEntries)) {
                this.final_part_ledgerEntries = [];
                
           
                
                if(value1.isMoreLedgerField == "1" && (value1.ledgerGroupParent).toLowerCase() == "duties & taxes"){
                 
                  this.total_tax += Math.abs(parseFloat(value1.amount)); 
                  this.taxarray.push(
                    {
                      "tax_select": value1.ledgerName,
                      "tax_name": value1.name,
                      "amount": Math.abs(value1.amount)
                    }
                  )
                  this.final_ledgerEntries.push(value1);
                }
                

            }
          

          this.ledger_array = [];
          this.ledger_amount = 0.0;
          for (let [key, value] of Object.entries(
            response.data.data.ledgerEntries
          )) {
              if(value.isMoreLedgerField == "1" && (value.ledgerGroupParent).toLowerCase() != "duties & taxes"){
                this.addmoreLedgerEntries.push(value);
                this.getaddmoreledger();
                const amount = parseFloat(value.amount);
                
                if (amount >= 0) {
                  // + value
                  this.ledger_amount  += amount;
                  value.type = "Credit";
                } else {
                  // - value
                  this.ledger_amount = this.ledger_amount + amount;
                  value.type = "Debit";
                }
                this.ledger_array.push({
                  ledger_name : value.ledgerName,
                  ledger_ledgerGuid: value.ledgerGuid,
                  ledger_ledgerGroup: value.ledgerGroup,
                  ledger_ledgerGroupParent: value.ledgerGroupParent,
                  amount: Math.abs(value.amount),
                  type : value.type,
                  // sub_ledger_name: ""
                })

              
                const data = {
                  company_id: localStorage.getItem("companyId"),
                  _userId: localStorage.getItem("customerId"),
                  startLimit: 0,
                  endLimit: 100,
                  requestFrom: "WEB",
                  sortBy: "ledgerName",

                  searchTerm: value.ledgerName,
                  parent: [
                    "Current Assets",
                    "Current Liabilities",
                    "Direct Expenses",
                    "Direct Incomes",
                    "Indirect Expenses",
                    "Indirect Incomes",
                    "Sales Accounts",
                    "Fixed Assets",
                    "Misc. Expenses (ASSET)",
                    "Sundry Creditors",
                    "Sundry Debtors",
                  ],
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
                  
                    var key_count = 0
                    for (let [key2, value2] of Object.entries(response.data.data.list)) {
                    
                      this.addmoreLedger_change(value2, key_count, "update");
                      key_count = key_count + 1;
                    }
                   
                  }
                })
                .catch((err) => {
                  Common.getStatusForActionFailed(err.response.status);
                  this.loading = false;
                });

              
                this.showledgers = this.ledger_array.length !== 0;
                
              }
              
              
              
            
            
            
            
          }
        
          this.gross_amount =
            this.total_amount + this.total_tax + this.ledger_amount;
        }, 3000)
          this.createdByName = response.data.data.createdBy_Name;
          this.checkedByName = response.data.data.checkedBy_Name;
          this.updatedByName = response.data.data.updatedBy_Name;
          
       
          
          this.buyer_name = response.data.data.basicBuyerDetails.billTo;
          this.buyer_country =
            response.data.data.basicBuyerDetails.billToCountry;
          this.buyer_state = response.data.data.basicBuyerDetails.billToState;
          this.buyer_regisration_type = response.data.data.gstRegistrationType;
          this.buyer_pincode = response.data.data.basicBuyerDetails.billToPincode;
          this.buyer_place_of_supply = response.data.data.basicBuyerDetails.placeofSupply;
          this.buyer_gstin = response.data.data.basicBuyerDetails.billToGSTIN;
       
          this.buyer_address = response.data.data.basicSenderAddress;
          this.narration = response.data.data.narration;

          this.consignee_name = response.data.data.basicConsigneeDetails.shipTo;
          this.consignee_country = response.data.data.basicConsigneeDetails.shipToCountry;
          this.consignee_state = response.data.data.basicConsigneeDetails.shipToState;
          this.consignee_pincode = response.data.data.basicConsigneePincode;
          this.consignee_gstin = response.data.data.conSigneegstin;
          this.consignee_address = response.data.data.basicConsigneeDetails.shipToAddress;

          this.dispatch_delivery_note = response.data.data.basicShipDeliveryNote;
          this.dispatch_shipping_date = response.data.data.basicShippingDate;
          this.dispatch_doc_no = response.data.data.basicShipDocumentNo;
          this.dispatch_despatch_through = response.data.data.basicShipedBy;
          this.dispatch_destination = response.data.data.basicFinalDestination;
          this.dispatch_bill_no = response.data.data.billOfLadingNo;
          this.dispatch_motor_vehicle_no = response.data.data.basicShipVesselNo;

          this.order_date = response.data.data.basicOrderDate;
          this.order_no = response.data.data.basicPurchaseOrderNo;
          this.order_invoice_date = response.data.data.basicDateTimeOfInvoice;
          this.order_terms_of_payment = response.data.data.basicDueDateOfPymt;
          this.order_terms_of_delivery = response.data.data.basicOrderTerms;
          this.order_other_reference = response.data.data.basicOrderRef;
          this.order_details_address = "";
          if(response.data.data.eWayBillDetails.length != "0"){
            this.eway_date = response.data.data.eWayBillDetails[0].billDate != "" && response.data.data.eWayBillDetails[0].billDate != null ? moment(String(response.data.data.eWayBillDetails[0].billDate)).format("DD MMM yyyy") : "";
            this.eway_bill_number = response.data.data.eWayBillDetails[0].billNumber != "" && response.data.data.eWayBillDetails[0].billNumber != null ? response.data.data.eWayBillDetails[0].billNumber : "";
          }
          
          
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
        
      
      
    },
    setItemsData(selection, key, label, preValue) { 
     
      if(label === "update") {
       
        this.item_gstApplicable = selection.gstAppliacable;
          this.item_rateLists = selection.rateLists;
          this.item_parentGuid = selection.parentGuid;
        
          this.tableRows[key].item_name = preValue.stockItemName;
          this.tableRows[key].item_guid = selection.guid;
       
          this.tableRows[key].hsn_code = selection.hsnCode;
          this.tableRows[key].baseUnits = selection.baseUnits;
          this.tableRows[key].parent = selection.parent;
          this.tableRows[key].parentGuid = selection.parentGuid;
          this.tableRows[key].category = selection.category;
          this.tableRows[key].categoryGuid = selection.categoryGuid;
          this.tableRows[key].rateOfVAT = selection.rateOfVAT;
          this.tableRows[key].rate = preValue.rate.split('/')[0];
          this.tableRows[key].amount = preValue.amount;
        }
        this.getitemlist();
        setTimeout(() => {
          this.amount_calculation(key);
        }, 1000)
        
    },
    update_sales() {
      this.error = [];
      this.add_more_ledger = [];
      this.Inventory_error = [];
      this.addLedger_error = [];
      if (!this.voucherNumber) {
        this.error["voucherNumber"] = "Voucher Number is required";
        $("html, body").animate({ scrollTop: 0 }, 500);
      }
      if (this.usePriceLevels == "Yes") {
       
      }

     
      this.taxarray.forEach((value, key) => {
        if (!value.tax_select) {
          if (!this.error.tax_select) {
            this.error.tax_select = {};
          }
          this.error.tax_select[key] = "Tax is required";
          $("html, body").animate({ scrollTop: 0 }, 500);
        }
      });

      this.tableRows.forEach((value, key) => {
      
        if (value.item_name == "Select Item" || value.item_name == "" || value.item_name == undefined) {
          this.Inventory_error["item_name"] = "";
          this.Inventory_error["item_name"] = "Please select item";
          this.error["item_name"] = "Please select item";
        }
        if (value.quantity == "" || value.quantity == "0") {
          this.Inventory_error["quantity"] = "";
          this.Inventory_error["quantity"] = "Please enter quantity";
          this.error["quantity"] = "Please enter quantity";
        }
        if (value.rate == "" || value.rate == "0") {
          this.Inventory_error["rate"] = "";
          this.Inventory_error["rate"] = "Please enter rate";
          this.error["rate"] = "Please enter rate";
        }
        if (value.location == "" || value.location == "0") {
          this.Inventory_error["location"] = "";
          this.Inventory_error["location"] = "Please select godown";
          this.error["location"] = "Please select godown";
        }
      });
      if(this.order_no == ""  && this.order_date){
          this.Inventory_error["order_no"] = ""
          this.Inventory_error["order_no"] = "Please Fill Order No."
          this.error["order_no"] = "Please Fill Order No."

        }
        if(this.order_date == "" &&  this.order_no ){
          this.Inventory_error["order_date"] = ""
          this.Inventory_error["order_date"] = "Please Select Order Date."
          this.error["order_date"] = "Please Select Order Date."

        }
        if(this.dispatch_shipping_date == "" && this.dispatch_doc_no != '' ){
          this.Inventory_error["dispatch_shipping_date"] = ""
          this.Inventory_error["dispatch_shipping_date"] = "Please Select Shipping Date."
          this.error["dispatch_shipping_date"] = "Please Select Shipping Date."

        }
        if(this.dispatch_doc_no == "" && this.dispatch_shipping_date != '' ){
          this.Inventory_error["dispatch_doc_no"] = ""
          this.Inventory_error["dispatch_doc_no"] = "Please enter Dispatch No."
          this.error["dispatch_doc_no"] = "Please enter Dispatch No."

        }
      

      this.ledger_array.forEach((value, key) => {
      
        if (value.ledger_name == "Search Other Ledger" || value.ledger_name == "" || value.ledger_name == undefined) {
          this.addLedger_error["selectLedger"] = "";
          this.addLedger_error["selectLedger"] = "Please select Search Other Ledger";
          this.error["selectLedger"] = "Please select  Search Other Ledger";
        }
        if (value.type == "" || value.type == "0") {
          this.addLedger_error["selecetTransactionType"] = "";
          this.addLedger_error["selecetTransactionType"] =
            "Please select Debit/Credit";
          this.error["selecetTransactionType"] = "Please select Debit/Credit";
        }
        if(value.amount == "" || parseFloat(value.amount) <= "0") {
          this.addLedger_error["ledgerAmount"] = "";
          this.addLedger_error["ledgerAmount"] = "Please enter ledger amount";
          this.error["ledgerAmount"] = "Please enter ledger amount";
        }
      });

      if (Object.keys(this.error).length === 0) {
        const indexesToRemove1 = [];
        this.final_ledgerEntries.forEach((item, index) => {
          if (item.isMoreLedgerField == "0" ) {
            indexesToRemove1.push(index);
          }
        });

        
        for (let i = indexesToRemove1.length - 1; i >= 0; i--) {
          this.final_ledgerEntries.splice(indexesToRemove1[i], 1);
        }
        
        this.final_ledgerEntries.push({
          ledgerGroupParent: this.ledgerGroupParent,
          ledgerName: this.partyName,
          ledgerGuid: this.partyGuid,
          ledgerSyncId : this.partyGuid == "" ? this.partyid : "",
          billAllocationdetails: [],
          bankAllocationDetails: [],
          isMoreLedgerField: "0",
          ledgerGroup: this.ledgerGroup,
          amount: -parseFloat(this.gross_amount),
        });
      
        if (this.showledgers == true) {
          this.add_more_ledger = [];
         
          const indexesToRemove = [];
          this.final_ledgerEntries.forEach((item, index) => {
            if (item.ledgerGroup !== "Duties & Taxes" && item.isMoreLedgerField === "1" && item.ledgerTaxType == "") {
              indexesToRemove.push(index);
            }
          });

         
          for (let i = indexesToRemove.length - 1; i >= 0; i--) {
            this.final_ledgerEntries.splice(indexesToRemove[i], 1);
          }
          
          this.ledger_array.forEach((number1, key) => {
            if (number1.type == "Debit") {
              var amount = number1.amount;
            } else {
              var amount = "-" + number1.amount;
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
        }
        this.invoiceOrders = [];

        if(this.order_date != "" && this.order_no != ""){
          this.invoiceOrders = [
            {
              basicOrderDate: this.order_date != "" && this.order_date != null ? moment(String(this.order_date)).format("DD MMM yyyy") : "",
              basicPurchaseOrderNo: this.order_no,
            },
          ];
        }
        this.invoiceDelNotes = [];
        if(this.dispatch_delivery_note != "" && this.dispatch_shipping_date != ""){
          this.invoiceDelNotes =  [
              {
                basicShipDeliveryNote: this.dispatch_delivery_note,
                basicShippingDate: moment(
                  String(this.dispatch_shipping_date)
                ).format("DD MMM yyyy"),
              },
            ]
        }

        this.eWayBillDetails = [];
        if(this.eway_bill_number != "" && this.eway_date != ""){
          this.eWayBillDetails = [
              {
                consignorName: "",
                consignorStateName: "",
                consignorPincode: "",
                ignoreGstInValidation: "",
                shippedFromState: "",
                consigneeAddress: "",
                documentType: "",
                
                consignorGstIn: "",
                
                billDate: this.eway_date != "" && this.eway_date != null ? moment(String(this.eway_date)).format("DD MMM yyyy") : "",
                subType: "",
                consigneeGstIn: "",
                billNumber: this.eway_bill_number != "" && this.eway_bill_number != null ? this.eway_bill_number : "",
                consigneeName: "",
                billStatus: "",
                consigneeStateName: "",
                consigneePincode: "",
                consignorAddress: "",
                shippedToState: "",
              },
            ]
        }
        const data = {
          voucherId: this.$route.params.voucher_id,
          voucherType: this.$route.params.voucherTypeName,
          voucherDate:  moment(String(this.customDate)).format('YYYY-MM-DD'),
          partyGuid: this.ledgerId,
          ledgerPriceLevel: this.price_level,
          _userId: localStorage.getItem("customerId"),
          reference: this.voucherNumber,
          StockItemEntries: this.final_object,
          company_id: localStorage.getItem("companyId"),
          partygstIn: this.partyGSTIn,
          isAccountingInvoice: false,
          conSigneegstin: this.partyGSTIn,
          transferComment: "",
          partyLedgerName: this.partyName,
          parentType: "Credit Note",
          partyLedgerGuid: this.partyGuid,
          voucherNumber: this.voucherNumber,
          narration: this.narration,
          isTransfer: 0,
          referenceDate: this.customDate,
          partyName: this.ledger_type,
          ledgerEntries: this.final_ledgerEntries,
          requestFrom: "WEB",
          isSetDefaultNumber: this.invoice_type,

          billOfLadingNo: this.dispatch_bill_no,
          basicShipDocumentNo: this.dispatch_doc_no,
          countryOfResidence: this.buyer_country,
          placeOfSupply: this.buyer_place_of_supply,
          gstRegistrationType: this.buyer_regisration_type,
          basicOrderRef: this.order_other_reference,
          conSigneegstin: this.consignee_gstin,
          basicFinalDestination: this.dispatch_destination,
          invoiceDelNotes: this.invoiceDelNotes,
          basicShipedBy: this.dispatch_despatch_through,
          basicOrderTerms: this.order_details_address,
          eWayBillDetails: this.eWayBillDetails,
          basicShipVesselNo: this.dispatch_motor_vehicle_no,
          invoiceOrders: this.invoiceOrders,
          basicDueDateOfPymt: "",
          basicOrderTerms: this.order_terms_of_delivery,
          basicSenderAddress: this.buyer_address,
          isInvoice: "Yes",
          basicBuyerAddress: this.buyer_address,
          basicBuyerPincode: this.buyer_pincode,
          basicConsigneeName: this.consignee_name,
          basicConsigneeAddress: this.consignee_address,
          basicConsigneeCountry: this.consignee_country,
          basicConsigneeState: this.consignee_state,
          basicConsigneePartygstIn: this.consignee_gstin,
          basicConsigneePincode: this.consignee_pincode,
          basicBuyerName: this.buyer_name,

          basicShippingDate : this.dispatch_shipping_date != "" && this.dispatch_shipping_date != null ? moment(String(this.dispatch_shipping_date)).format("YYYY-MM-DD") : "",
          basicShipDeliveryNote : this.dispatch_delivery_note != "" && this.dispatch_delivery_note != null ? this.dispatch_delivery_note : "",
          basicOrderDate : this.order_date != "" && this.order_date != null ? moment(String(this.order_date)).format("YYYY-MM-DD") : "",
          basicPurchaseOrderNo : this.order_no != "" && this.order_no != null ? this.order_no : "",

          basicDateTimeOfInvoice: this.order_invoice_date != "" && this.order_invoice_date != null ? moment(String(this.order_invoice_date)).format("YYYY-MM-DD") : "",
           basicBuyerState: this.buyer_state,
          updatedBy: localStorage.getItem("customerId"),
          checkedBy: localStorage.getItem("customerId"),
          isInvoice: 'Yes'


        };
        
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.updateMyVoucher(data, headers)
          .then((response) => {
            if (response.data.message == "AUTHENTICATION_FAILED") {
              localStorage.clear();
              window.location.href = "/";
            } else if (response.data.status == "200") {
             
              this.$router.push({ name: "My Vouchers" });
            }
          })
          .catch((err) => {
            Common.getStatusForActionFailed(err.response.status);
            this.loading = false;
          });
      }
    },
    getNum(val) {
      if (isNaN(val)) {
        return 0;
      }
      return val;
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
    get_price_level_list() {
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
      Api.getPriceLevelsByCompanyIdGo(data, headers)
        .then((response) => {
          
          this.price_array = [];
          this.price_array = response.data.data.list;
          console.log(this.price_array);
     
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);

          this.loading = false;
        });
    },
    getPriceAccordingPriceLevel(selection, index) {
      console.log("i am working");
      console.log(selection);
  if (this.usePriceLevels == "Yes") {
    if (this.price_level !== "" && this.price_level.toLowerCase() !== "not applicable") {
     
      let tempitemDetails = selection.fullPriceLevelList || [];
      let fullPriceLevelList = [];

      tempitemDetails.forEach((element) => {
        if (element.priceLevel === this.price_level) {
          fullPriceLevelList.push(element);
        }
      });

      let applicableDateArray = [];

      let date = moment(
        moment(String(this.customDate)).format("yyyy-MM-DD"),
        "YYYY-MM-DD HH:mm:ss"
      );
     
      fullPriceLevelList.forEach((element) => {
        if (date.isAfter(moment(element.date, "YYYY-MM-DD HH:mm:ss"))) {
          applicableDateArray.push(element);
        }
      });

      let applicablePriceLevel = [];
      if (applicableDateArray.length == 0) {
        return "";
      }
      // check applicable price level for closest date
      if (applicableDateArray.length > 1) {
        applicablePriceLevel = applicableDateArray.reduce((min, e) => {
          const minDate = moment(min.date, "YYYY-MM-DD HH:mm:ss");
          const currentDate = moment(e.date, "YYYY-MM-DD HH:mm:ss");
          return currentDate.isAfter(moment(minDate, "YYYY-MM-DD HH:mm:ss")) ? e : min;
        });
      } else {
        applicablePriceLevel = applicableDateArray[0];
      }

      let priceLevelList = applicablePriceLevel["priceLevelList"] || [];
     
      let givenRateListWithoutZero = priceLevelList;
      console.log("priceLevelList:", priceLevelList); // Debugging output
console.log("givenRateListWithoutZero length:", givenRateListWithoutZero.length); // Debugging output

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

      // get price from range of value
      if (priceLevelList.length === 0) {
        rateValue = "";
      } else {
        for (let [priceLevelkey, priceLevel] of Object.entries(priceLevelList)) {
          if (
            parseFloat(priceLevel["startValue"]) == 0.0 &&
            parseFloat(priceLevel["endValue"]) == 0.0
          ) {
            rateValue = priceLevel["rateValue"];
          } else if (
            parseFloat(priceLevel["startValue"]) == 0.0 &&
            parseFloat(priceLevel["endValue"]) != 0.0 &&
            parseFloat(this.tableRows[index].quantity) <= parseFloat(priceLevel["endValue"])
          ) {
            rateValue = priceLevel["rateValue"];
          } else if (
            parseFloat(priceLevel["startValue"]) != 0.0 &&
            parseFloat(priceLevel["endValue"]) != 0.0 &&
            parseFloat(this.tableRows[index].quantity) >= parseFloat(priceLevel["startValue"]) &&
            parseFloat(this.tableRows[index].quantity) <= parseFloat(priceLevel["endValue"])
          ) {
            rateValue = priceLevel["rateValue"];
          } else if (
            parseFloat(priceLevel["endValue"]) == 0.0 &&
            parseFloat(priceLevel["startValue"]) != 0.0 &&
            parseFloat(this.tableRows[index].quantity) >= parseFloat(priceLevel["startValue"])
          ) {
            rateValue = priceLevel["rateValue"];
          }
        }

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
}
,
    getStandardRate(selection, index) {
      if (selection.standardSellingPriceList.length == "0") {
        return this.getLastRate(selection, index);
      }
     
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
       
        return this.getLastRate(selection, index);
      }
    },
    getLastRate(selection, index) {
      
      return selection.lastSalesPrice == "0"
        ? ""
        : parseFloat(selection.lastSalesPrice);
    },
    priceChange() {
      this.taxarray = [];
      this.tableRows = [];
      this.showledgers = false;
      this.ledger_array = [];
      this.gross_amount = 0;
      this.total_tax = 0;
      this.total_amount = 0;
      this.tableRows.push({
        item_name: "Select Item",
        item_guid: "",
        rate: "",
        quantity: "",
        discount: "",
        location: "",
        item_description: "",
        amount: 0,
      });
      this.getlocationlist()
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
          if (response.data.status == "200") {
            this.invoice_type =
              response.data.data.vouchers.voucherNumberConfiguration.sales.isSetDefaultNumber;
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
         
          this.loading = false;
        });
    },
    async check_gst_calculation() {
      const companyGSTIn = localStorage.getItem("companyGstNumber");
    
      if (companyGSTIn !== "") {
      
        if (!this.gstApplicable.replace("#4;", "").toLowerCase().includes("not applicable") && this.rateLists.length === 0) {
          if (this.item_rateLists !== null && this.item_rateLists.length > 0 && !this.item_gstApplicable.replace("#4;", "").toLowerCase().includes("not applicable")) {
           
            let applicableDateArray = [];
            for (let element of this.item_rateLists) {
              if (element.applicableFrom !== "") {
                if (moment(this.customDate).isAfter(moment(element.applicableFrom, "YYYY-MM-DD HH:mm:ss"))) {
                  applicableDateArray.push(element);
                }
              }
            }

            let applicableGstRateList;

            if (applicableDateArray.length > 1) {
              applicableGstRateList = applicableDateArray.reduce((min, e) => moment(e.applicableFrom, "YYYY-MM-DD HH:mm:ss").isAfter(moment(min.applicableFrom, "YYYY-MM-DD HH:mm:ss")) ? e : min);
            } else {
              applicableGstRateList = applicableDateArray[0];
            }

            if (applicableGstRateList.calculationType === "On Value") {
              let gstMap = {};
              for (let rateList of applicableGstRateList.rateList) {
                gstMap[rateList.name] = rateList.value;
              }
           
              return gstMap;
            } else {
              let GSTSlabRateLists;

        

              if (applicableGstRateList.GSTSlabRateLists.length === 0) {
                return { "CGST": "0", "SGST": "0", "IGST": "0" };
              } else {
                let gstMap = {};
                let finalRateList = [];
                let mainSlab = applicableGstRateList.GSTSlabRateLists;
                let givenRateListWithoutZero = [];

                for (let i of mainSlab) {
                  if (i.toItemRate !== "0") {
                    givenRateListWithoutZero.push(i);
                  }
                }

                let largerValueinRateList = givenRateListWithoutZero.reduce((curr, next) => parseFloat(curr.toItemRate) > parseFloat(next.toItemRate) ? curr : next);
                let smallerValueinRateList = givenRateListWithoutZero.reduce((curr, next) => parseFloat(curr.toItemRate) < parseFloat(next.toItemRate) ? curr : next);

                if (voucherViewModel.itemRate === "") {
                  return { "CGST": "0", "SGST": "0", "IGST": "0" };
                }

                if (parseFloat(voucherViewModel.itemRate) === 0) {
               
                } else if (parseFloat(voucherViewModel.itemRate) > parseFloat(largerValueinRateList.toItemRate) && parseFloat(voucherViewModel.itemRate) !== 0) {
                  for (let rateList of applicableGstRateList.GSTSlabRateLists.last.rateList) {
                    gstMap[rateList.name] = rateList.value;
                  }
                } else if (parseFloat(voucherViewModel.itemRate) < parseFloat(smallerValueinRateList.toItemRate) && parseFloat(voucherViewModel.itemRate) !== 0) {
                  for (let rateList of applicableGstRateList.GSTSlabRateLists.last.rateList) {
                    gstMap[rateList.name] = rateList.value;
                  }
                } else {
                  for (let i of applicableGstRateList.GSTSlabRateLists) {
                    if (parseFloat(i.toItemRate) <= parseFloat(voucherViewModel.itemRate)) {
                      finalRateList.push(i);
                    }
                  }

                  let gstratelist = finalRateList.reduce((curr, next) => parseFloat(curr.toItemRate) > parseFloat(next.toItemRate) ? curr : next);

                  for (let rateList of gstratelist.rateList) {
                    gstMap[rateList.name] = rateList.value;
                  }
                }

                return gstMap;
              }
            }
          } else {
           
            const data = {
              requestFrom: "WEB",
              itemGroupGuid: this.item_parentGuid
            };
            const headers = {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              token: localStorage.getItem("webAuthToken"),
            };
            try {
              const apiData = await Api.getStockItemGroupById(data, headers);
              console.log(apiData.data);
              if (apiData.data.status === '1') {
                if (apiData.data.data.rateLists.length > 0) {
                  const applicableDateArray = [];
                  for (const element of apiData.data.data.rateLists) {
                    if (element.applicableFrom !== "") {
                      if (moment(this.customDate).isAfter(moment(element.applicableFrom, "YYYY-MM-DD HH:mm:ss"))) {
                        applicableDateArray.push(element);
                      }
                    }
                  }

                  let applicableGstRateList;

                  if (applicableDateArray.length > 1) {
                    applicableGstRateList = applicableDateArray.reduce((min, e) =>
                      new Date(e.applicableFrom) > new Date(min.applicableFrom) ? e : min
                    );
                  } else {
                    applicableGstRateList = applicableDateArray[0];
                  }

                  const gstMap = {};
                  for (const rateList of applicableGstRateList.rateList) {
                    gstMap[rateList.name] = rateList.value;
                  }
                  console.log(gstMap);
                  return gstMap;
                } else {
                  return { CGST: "0", SGST: "0", IGST: "0" };
                }
              } else {
                return { CGST: "0", SGST: "0", IGST: "0" };
              }
            } catch (error) {
              // Handle the error
              console.error(error);
              return { CGST: "0", SGST: "0", IGST: "0" };
            }
          }
        } else {
    
          if (this.gstApplicable.replace("#4;", "").toLowerCase().includes("not applicable")) {
            return { "CGST": "0", "SGST": "0", "IGST": "0" };
          } else {
            if (this.rateLists.length > 0 && !this.item_gstApplicable.replace("#4;", "").toLowerCase().includes("not applicable")) {
              console.log(this.rateLists[0].rateList);
              let gstRateList = this.rateLists[0].rateList;
              let gstMap = {};

              for (let rateList of gstRateList) {
                gstMap[rateList.name] = rateList.value;
              }
              return gstMap;

            } else {
              return { "CGST": "0", "SGST": "0", "IGST": "0" };
            }
          }
        }
      } else {
        // Not Applicable
        return { "CGST": "0", "SGST": "0", "IGST": "0" };
      }
    },
    
  },
  mounted() {
    GoogleAnalytics.create_credit_note_listing();
    if(this.$route.params.voucher_id && this.$route.params.voucher_id.length !== 24){
      this.$route.params.voucher_id = undefined;
    }
    if (this.$route.params.voucher_id !== undefined) {
      this.get_sale_data();
    } else {
      this.getVoucherNumber();
      this.validation();
    }

    setTimeout(() => {
      this.check_price_levels();
      this.usePriceLevels = localStorage.getItem('usePriceLevels');
    }, 1000)
    
    this.get_price_level_list();
  
    this.isPaid = localStorage.getItem("isPaid");
    this.symbol = localStorage.getItem("symbol");
    this.partyDetails();
   
    this.getledgerlist();
    this.getitemlist();
    this.getlocationlist();
    this.gettaxlist();
    this.countrDetails();
    this.consigneecountrDetails();
  

    this.InvoiceConfigurations();

  },
};
</script>

<style>
.dropdown .dropdown-content
{
  max-width:500px !important;
}
</style>
