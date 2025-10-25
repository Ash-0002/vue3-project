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
              <div class="bill_to_party">
                <div class="new-voucher-heading mb-4"><h4>Bill To</h4></div>
                
              <div class="new-searchable-dropdown-custom-back">
  <button @click="toggleDropdownpartyname" class="dropdown-toggle">
    <span class="search-icon-searchable-dropdown"><i class="fa fa-search"></i></span>{{ selectedOptionpartyname }}
    <span v-if="isDropdownOpenpartyname"><i class="fa fa-chevron-up"></i></span>
    <span v-else><i class="fa fa-chevron-down"></i></span>
  </button>
  <div v-if="isDropdownOpenpartyname" v-click-outside="closeEvent" class="searchable-dropdown-ul-format-design">
    <!-- Search input field -->
    <input type="text" v-model="searchQueryPartyName" class="search-input" ref="searchInputSearchable" placeholder="Search...">
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
      <li v-for="(option, index) in filteredOptionsparties" :key="index" @click="selectOptionParty(option)">
        <div class="row">
          <div class="col-8">
            <div class="searchable-party-name-left">
              <a href="javascript:void(0);">
                {{ option.name }}
              </a>
            </div>
          </div>
          <div class="col-4">
            <div class="searchable-party-name-right">
              <a href="javascript:void(0);"><span class="font_sans">₹</span> {{ option.amount }} </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
              </div>
              <div class="bill_to_party partyname_added" style="display:none;">               
                  <div class="new-voucher-heading with_change_party mb-4">
                    <h4>Bill To</h4>
                    <span>Change Party</span>
                  </div> 
                <div class="party_buyer_detail">
                  <h5>Buyer Details</h5>
                  <span class="party_name_edit"><i class="fa fa-pencil"></i>EDIT</span>
                </div>
                <p>INDUSTRIAL AROMATICS PVT LTD 3/213 ASHIRWAD INDUSTRIAL ESTATE | RAM MANDIR ROAD </p>
              </div>
            </div>
            <div class="col-lg-6 col-12 sales_brd_right pt-3 pb-3">
              <div class="sales_voucher_number_detail">
                <label class="form_input_lbl">Voucher No:
                  <span class="vch_num_name" v-modal="voucherNumber">LKP-23-24</span></label>
              </div>
              <div class="voucher_selection">
              <div class="form-check invoice_radio_button">
                <input class="form-check-input invoice_radio" type="radio" name="default" id="default" v-model="customvoucher_checked" value="vch_radio_1" checked>
                <label class="form-check-label" for="default">Default</label>
              </div>
              <div class="form-check invoice_radio_button">
                <input class="form-check-input invoice_radio" type="radio" name="default" id="custom" v-model="customvoucher_checked" value="vch_radio_2">
                <label class="form-check-label" for="custom">Custom</label>
              </div>
              <div class="custom_radio_input" >
                <input type="text" :disabled="customvoucher_checked === 'vch_radio_1'" placeholder="Prefix" class="form-control">
                <input type="text" :disabled="customvoucher_checked === 'vch_radio_1'" placeholder="Voucher no" class="form-control">
                <input type="text" :disabled="customvoucher_checked === 'vch_radio_1'" placeholder="Suffix" class="form-control">
              </div>
              </div>
              <div class="vch_no_selection">
                <div class="sales_selection_selectdropdown">
                  <span class="fixedlabel">Price Level</span>
                  <select name="" id="" class="sales_vch_new_select form-select input_light_border_dropdown" v-model="price_level">
                    <option v-for="salesprice in salespricedata">{{ salesprice }}</option>
                  </select>
                </div>
                <div class="sales_selection_selectdropdown">
                  <span class="fixedlabel">Reference Type</span>
                  <select name="" id="" class="sales_vch_new_select form-select input_light_border_dropdown" v-model="refrence_type">
                    <option v-for="refrencetype in refrencedata">{{ refrencetype }}</option>
                  </select>
                </div>
              </div>
              
            </div>
            <div class="col-lg-2 col-12 pt-3 pb-3">
              <div class="sales_selection_selectdropdown mb-3">
                  <span class="fixedlabel">Invoice Date:</span>
                  <div class="datepicker_image_set input-disable-overlay-hide-all-div invoice_date_input">
                    <span class="sales_date_img_new">
                      <img src="/assets/images/1.0/sales/calendar.svg" class="img-fluid" />
                    </span>
                    <Datepicker v-model="invoiceDate" format="dd MMM yyyy" placeholder="03 Nov 2023">
                    </Datepicker>
                  </div>
              </div>
              <div class="sales_selection_selectdropdown">
                  <span class="fixedlabel">Ledger Type <span class="error-validation-star">*</span></span>
                  <select name="" id="" class="sales_vch_new_select form-select input_light_border_dropdown" v-model="ledger_type">
                    <option value="Ledger Type" selected>Ledger Type</option> 
                    <option v-for="ledgertype in ledgertype_data">{{ ledgertype }}</option>
                  </select>
              </div>
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
        <tr v-for="(item, index) in selectedItems" :key="index">
          <td>1</td>
          <td>
            {{ item.name }}
            <input type="text" placeholder="Enter Narration (Optional)" class="form-control narration_item_input">
          </td>
          <td>{{ item.hsnCode }}</td>
          <td>
            {{ item.rate }}
          </td>
          <td>
            {{ item.quantity }}
          </td>
          <td>
            <input type="text" placeholder="2" class="form-control only-input-disable-all-hide-overlay" />
          </td>
          <td>
            <div class="">
              <select name="" id="" class="sales_vch_new_select form-select input_light_border_dropdown" v-model="item_location">
                <option v-for="location in location_name">{{ location }}</option>
              </select>
            </div>
          </td>
          <td>
            <input type="text" placeholder="4200.00" class="form-control only-input-disable-all-hide-overlay" />
          </td>
          <td align="center">
            <span class="additem_checkbox configuration_checkbox text-center">
              <b-form-checkbox id="name" v-model="tax_incl"></b-form-checkbox>
            </span>
            
          </td>
          <td><button class="delete_sales_item" @click="deleteinsertrow"><i class="fa fa-trash"></i></button></td>
        </tr>

        <tr style="display:none;">
                      <td>1</td>
                      <td>
                        White Bread
                        <input type="text" placeholder="Enter Narration (Optional)" class="form-control narration_item_input">
                      </td>
                      <td>000000</td>
                      <td>
                        <input type="text" placeholder="2100" class="form-control only-input-disable-all-hide-overlay" />
                      </td>
                      <td>
                        <input type="text" placeholder="2" class="form-control only-input-disable-all-hide-overlay" />
                      </td>
                      <td>
                        <input type="text" placeholder="2" class="form-control only-input-disable-all-hide-overlay" />
                      </td>
                      <td>
                        <div class="">
                          <select name="" id="" class="form-select input_light_border_dropdown" v-model="item_location">
                            <option v-for="location in location_name">{{ location }}</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <input type="text" placeholder="4200.00" class="form-control only-input-disable-all-hide-overlay" />
                      </td>
                      <td>
                        <div class="d-flex">
                          <input type="checkbox" class="tax_inclusive_checkbox"  v-model="tax_incl" />
                          <input type="text" placeholder="0 %" class="form-control tax_input_ml" :disabled="!tax_incl"/>
                        </div>
                      </td>                    
                      <td>
                        <button class="delete_sales_item"><i class="fa fa-trash"></i></button>
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!------->
          <div class="border_add_item">
            <span class="addplusitem" v-b-modal.add_item><i class="fa fa-plus mr-2"></i>ADD ITEM</span>
          </div>
        </div>
        <!--------------------->
        <div class="added_taxes_item">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <div class="sales_brd_bottom taxes_sales_card">
                <div class="addtaxes_card">
                  <h3>Taxes</h3>
                <span class="addplusitem" @click="addtaxes"><i class="fa fa-plus"></i> ADD</span>
                </div>                
                  <div class="addtaxed_filed" v-for="(taxessummary, taxesindex) in taxdivs" :key="taxesindex">
                    <select name="" id="" class="sales_vch_new_select form-select input_light_border_dropdown" v-model="gst_select">
                      <option v-for="gstarray in gstdata">{{ gstarray }}</option>
                    </select>
                    <input type="text" placeholder="₹105.00" class="form-control only-input-disable-all-hide-overlay mrl_15" />
                    <button class="delete_sales_item" @click="deleteTaxes(taxesindex)"><i class="fa fa-trash"></i></button>
                  </div>   

              </div>
              
                        
            </div>
            <!------>
            <div class="col-lg-6 col-md-6 col-12">
              <div class="sales_brd_bottom taxes_sales_card">
                <div class="addtaxes_card">
                  <h3>Other Ledgers</h3>
                  <span class="addplusitem" @click="addledgers"><i class="fa fa-plus"></i> ADD</span>
                </div> 
                <div class="addtaxed_filed" v-for="(ledgersummary, ledgerindex) in ledgersdivs" :key="ledgerindex">
                  <select name="" id="" class="sales_vch_new_select form-select input_light_border_dropdown" v-model="delivery_challan">
                    <option v-for="del_array in del_data">{{ del_array }}</option>
                  </select>
                  <select name="" id="" class="sales_vch_new_select form-select input_light_border_dropdown mrl_15" v-model="ledger_cr_dr">
                    <option v-for="crdr_array in crdr_data">{{ crdr_array }}</option>
                  </select>
                  <button class="delete_sales_item" @click="deleteLedgers(ledgerindex)"><i class="fa fa-trash"></i></button>
                </div>              
              </div>
            </div>
            <!------>
            <div class="col-lg-12 col-12 mb-3">
              <div class="sales_brd_bottom taxes_sales_card">
                <div class="addtaxes_card">
                  <h3>Narration</h3>
                <span class="addplusitem" @click="addnarration" v-if="addnarration_btn"><i class="fa fa-plus"></i> ADD</span>
                </div>  
                <div class="addtaxed_filed" v-for="(narrationsummary, narrationindex) in narrationdivs" :key="narrationindex">
                  <div class="sales-voucher-textarea" style="width: 90%;">
                    <textarea type="text" placeholder="Write here..." rows="3" v-model="narration"></textarea>
                  </div>
                  <button class="delete_sales_item" @click="deleteNarration(narrationindex)"><i class="fa fa-trash"></i></button>
                </div>             
              </div> 
            </div>
          </div>
        </div>
        <!--------------------->
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
                      <td align="right"><span class="font_sans">₹</span> 0.00</td>
                    </tr>
                    <tr>
                      <td>Taxes <img src="/assets/images/1.0/sales/information.png" class="img-fluid ml-2" /></td>
                      <td align="right"><span class="font_sans">₹</span> 0.00</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>Grand Total</td>
                      <td align="right"><span class="font_sans">₹</span> 0.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div class="col-lg-8 col-md-6 col-sm-6 col-12">
              <button class="btn download_border_btn float_right">CREATE VOUCHER</button>
            </div>
          </div>
          </div>
      </div>


      <!----------- add_item popup start -------------->
      <b-modal ref="AddItemPopup" id="add_item" hide-footer centered title="Add Item">
          <div class="container-fluid p-0">
            <div class="search-lead-container">
              <input type="text" class="search-input" placeholder="Search Item">
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
            <tr v-for="(item, index) in items" :key="index" v-bind:class="{ 'selected': item.isSelected }">
          <td>
            <div class="checkbox_with_itemname">
              <span class="additem_checkbox configuration_checkbox">
                <b-form-checkbox
                  id="name"
                  :name="'leadname_' + index"
                  :checked="item.isSelected"
                  @change="handleCheckboxChange(index)"
                ></b-form-checkbox>
              </span>
              <div>
                <div>{{ item.name }}</div>
                <div class="additem_hsncode">HSN Code: {{ item.hsnCode }}</div>
              </div>
            </div>
          </td>
          <td>{{ item.currentstock }}</td>
          <td>
            <input type="text" v-model="item.rate" placeholder="2100" class="form-control only-input-disable-all-hide-overlay">
          </td>
          <td>
            <input type="text" v-model="item.quantity" placeholder="2" class="form-control only-input-disable-all-hide-overlay">
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
                    <p>Items: <span class="selectedadditem-count"> 1</span></p>
                    <span class="indicator">|</span>
                    <p>Total Qty: <span class="selectedadditem-count"> 2</span></p>
                  </div>
                  <p>Total Amount: <span class="selectedadditem-count"> <span class="font_sans">₹</span>4200.00</span></p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-12 text-right mt-3 mb-3">
                <button class="item_cancel_btn" @click="additem_modal">CANCEL</button>
                <button class="btn download_border_btn" @click="addSelectedRows">ADD</button>
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
      customvoucher_checked: 'vch_radio_1',
      price_level: '',
      salespricedata: ['Sales', 'Purchase'],   
      refrence_type: '', 
      refrencedata: ['On Account', 'Unknown'],
      invoiceDate: new Date(),
      ledger_type: '',
      ledgertype_data: ['SALES  ACCOUNT (INTER)', 'SALES ACCOUNT (INTRA)'],
      item_location: '',
      location_name: ['Main', 'Godown'],
      tax_incl: false,  
      gst_select: '',
      gstdata: ['SGST', 'CGST'],
      delivery_challan: '',
      del_data: ['Delivery Challan', 'Delivery Challan'],
      ledger_cr_dr:'',
      crdr_data: ['0.00', '0.00'],
      taxdivs:[],
      ledgersdivs:[],
      narrationdivs:[],
      items: [
        { name: 'White Bread', hsnCode: '000000', currentstock: '100 PCS', isSelected: false },
        { name: 'Brown Bread', hsnCode: '000000', currentstock: '150 PCS', isSelected: false },
        { name: 'Ice-Cream', hsnCode: '000000', currentstock: '70 PCS', isSelected: false },
        { name: 'Cold-Drink', hsnCode: '000000', currentstock: '70 PCS', isSelected: false },
        // Add more items as needed
      ],
      selectedItems: [],
      existingparty:[
      { name: 'A ONE ELECTRONICS (CC) $Rs1000' ,  label:''},
      { name: 'A ONE ELECTRONICS (CC)'},
      { name: 'A. Viswanathan (Pondicherry)'},
      { name: 'AMBEY ELECTRONICS (DEORIA)'},
      { name: 'AJAY KUMAR '},
      ],
      party_name: '',  
      voucherNumber: '',
      narration: '',
      addnarration_btn: true,
      isDropdownOpenpartyname: false,
      selectedOptionpartyname: 'Search Existing Party',
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
    };
  },
  computed: {
    // Filter options based on search query
    filteredOptionsparties() {
      return this.options.filter(option =>
        option.name.toLowerCase().includes(this.searchQueryPartyName.toLowerCase())
      );
    },
  },
  methods: {
    toggleDropdownpartyname() {
      this.isDropdownOpenpartyname = !this.isDropdownOpenpartyname;
      if (this.isDropdownOpenpartyname) {
      this.$nextTick(() => {
        this.$refs.searchInputSearchable.focus();
      });
    }
    },
    selectOptionParty(option) {
      this.selectedOptionpartyname = option.name;
	  this.searchQueryPartyName = "";
      this.isDropdownOpenpartyname = false;
    },
    hide() {
      this.isDropdownOpenpartyname = false;
    },
    closeEvent() {
      this.hide();
    },
    additem_modal(){
      this.$bvModal.hide('add_item');
    },
    addtaxes() {
      this.taxdivs.push({});
    },
    addledgers() {
      this.ledgersdivs.push({});
    },
    addnarration() {
      this.narrationdivs.push({});
      this.addnarration_btn=false;
    },
    deleteTaxes(taxesindex) {
      this.taxdivs.splice(taxesindex, 1);
    }, 
    deleteLedgers(ledgerindex) {
      this.ledgersdivs.splice(ledgerindex, 1);
    },   
    deleteNarration(narrationindex) {
      this.narrationdivs.splice(narrationindex, 1);
      this.addnarration_btn=true;
    }, 
    handleCheckboxChange(index) {
      // Toggle the isSelected property for the corresponding item
      this.$set(this.items, index, { ...this.items[index], isSelected: !this.items[index].isSelected });
    },
    addSelectedRows() {
      // Add selected rows to the selectedItems array
      this.selectedItems = this.items.filter(item => item.isSelected);
      this.$bvModal.hide('add_item');
    },
    deleteinsertrow(index) {
      this.selectedItems.splice(index, 1);
    },
  },
  mounted() {
    this.price_level='Sales';
    this.refrence_type='On Account';
    this.item_location='Main';
    this.ledger_type='SALES  ACCOUNT (INTER)';
    this.gst_select='SGST';
    this.delivery_challan='Delivery Challan';
    this.ledger_cr_dr='0.00';
  },
};
</script>

<style>
  tr.selected {background-color: #E1F9E9 !important;}
</style>




