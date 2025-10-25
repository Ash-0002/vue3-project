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
        <div v-if="new_loading" class="loader-wrapper">
            <div class="loading_css">
                <img src="/assets/images/1.0/brand/Loader-GIF-Final.gif" class="img-fluid loader_css" height="40" width="40" />
            </div>
        </div>
      
        <div class="page-header-title-box mobile_top_spacing dashboard-page-header">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="arrow_left_items pt-2">
                        <a @click="$router.go(-1)"><i class="fa fa-chevron-left icon-color"></i></a>
                    </div>

                    <div class="title_text new_title_company_name">
                        <div class="title_text" v-if="this.$route.params.item_id">
                            <div v-if="disabled === '0'">
                                <h4 class="page-title mb-0">Update Item</h4>
                            </div>
                            <div v-else>
                                <h4 class="page-title mb-0">{{ this.stockname }}</h4>
                            </div>
                        </div>
                        <div v-else>
                            <h4 class="page-title mb-0">Create Item</h4>
                        </div>
                            
                    </div>
                </div>
            </div>

        </div>
        <div class="main_card">
            <div class="card">
                <div class="new_party_form">
                    <div class="error-validation-main-div" v-if="ledger_exist">
                        <span class="error-validation my-1" >{{ ledger_exist }}</span>
                    </div>

                    <form id="add_items_form" name="add_items_form" @submit="validation(e)">
                        <div class="row">
                            <div class="col-lg-6 col-12">
                                <div class="form-group input_new_textbox mb-4 disable-white-input">
                                    <div class="label_mb_input">Stock Name <span v-if="disabled === '0'" class="required_red">*</span></div>
                                    <input type="text" @input="html_tag_notaccept('stockname', $event)" :disabled="disabled === '1'" name="stockItemName" placeholder="Stock Name" class="form-control"
                                        v-model="stockname" autocomplete="off" />
                                    <span class="error-validation" v-if="error.stockname">{{ error.stockname }}</span>
                                </div>
                            </div>
                            <!-- <div class="col-lg-6 col-12" v-if="checked">
                                <div class="form-group input_new_textbox mb-4 disable-white-input">
                                    <div class="label_mb_input">HSN Code</div>
                                    <input  type="number" @input="limitLengthAndRemoveSpecialChars($event, 4, 8)" :disabled="disabled === '1'"  v-model="hsnCode" name="hsnCode" placeholder="HSN Code" class="form-control"
                                        value="" autocomplete="off" />
                                        <span class="error-validation" v-if="error.hsnCode">{{ error.hsnCode }}</span>
                                </div>
                            </div> -->
                            <div class="col-lg-6 col-12">
                                <div class="form-group mb-4">
                                    <!-- <div class="label_mb_input">Parent</div> -->
                                    <!-- <select name="parent" :disabled="disabled === '1'" class="form-select" ref="my_input" v-model="selectedparent"
                                        @change="selectparent">
                                        <option value="">Select Parent</option>
                                        <option v-for="(itemparent, index) in listparent" :value="itemparent.stockGroupName"
                                            :key="index">
                                            {{ itemparent.stockGroupName }}
                                        </option>
                                    </select> -->
                                    <!-- <form autocomplete="off" @submit.prevent class="input-disable-overlay-hide-all-div">
                                    <Dropdown :options="listparent" v-on:selected="selectparent2" v-on:filter="parentfilter"
                                    v-model="selectedparent"       :maxItem="10"
                                    :placeholder="`${this.select_parent}`"
                                    >
                                    </Dropdown>
                                    </form> -->
                                    <div class="ParenttypesearchRechanges">
                                        <div class="label_mb_input">Parent</div>
                    <input type="text" v-model="parentSearchQuery" @focus="ParenttoggleDropdown(true)"
                      @blur="ParenttoggleDropdown(false)" @input="ParentfilterOptions"
                      @keydown="handleParentKeydown" placeholder="Search..." ref="parentInput" :disabled="disabled === '1'" />
                    <button v-if="parentSearchQuery" @click="ParentclearSearch" class="inputcrossiconRechangesparent" :disabled="disabled === '1'">
                      <i class="fa fa-times"></i>
                    </button>
                    <i v-else class="fa fa-search input-search-icon-Rechanges-parent"></i>
                    <ul v-if="parentDropdownOpen" class="SetScrollbarWidthSizeparent">
                      <li v-for="(option, index) in parentFilteredOptions" :key="option.value"
                        :class="{ 'active': index === parentActiveIndex }"
                        v-scroll-into-view="index === parentActiveIndex"
                        @mousedown.prevent="ParentselectOption(option)">
                        {{ option.stockGroupName }}
                      </li>
                    </ul>
                  </div>
                                    <span class="error-validation"
                                        v-if="error.parentSearchQuery">{{ error.parentSearchQuery }}</span>
                                   
                                </div>

                            </div>
                           
                            <div class="col-lg-6 col-12">
                                <div class="form-group mb-4">
                                    <div class="label_mb_input">Units <span v-if="disabled === '0'" class="required_red">*</span></div>
                                    <select name="itemunit" :disabled="disabled === '1'" id="itemunit" class="form-select" ref="my_input"
                                        v-model="selected" @change="">
                                        <option value="">Select Units</option>
                                        <option v-for="(itemunit, index) in listunit" :value="itemunit.name" :key="index"
                                            >
                                            {{ itemunit.name }}
                                        </option>
                                    </select>
                                    <span class="error-validation" v-if="error.selected">{{ error.selected }}</span>
                                    <label id="baseUnits-error" class="error" for="baseUnits" style="display:none;"></label>
                                </div>
                             
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="form-group disable-white-input">
                                    <div class="label_mb_input">Description</div>
                                    <textarea :disabled="disabled === '1'" @input="html_tag_notaccept('description', $event)" class="form-control mb-4 textarea_" v-model="description" name="description" placeholder="Description"
                                        rows="1">{{ this.description }}</textarea>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="form-group disable-white-input">
                                    <div class="label_mb_input">Narration</div>
                                    <textarea :disabled="disabled === '1'" @input="html_tag_notaccept('narration', $event)" class="form-control mb-4 textarea_" v-model="narration" name="description" placeholder="Narration"
                                        rows="3">{{ this.narration }}</textarea>
                                </div>
                            </div>
                            <div class="col-lg-12 col-12 mb-3">
                                <div class="onlick_checked_applicable">
                                    <label class="custom-control custom-checkbox">
                                        <input type="checkbox" :disabled="disabled === '1'" class="custom-control-input" id="gst_checkbox"
                                            name="gstAppliacable" value="&#4; Applicable" v-model="checked" @click="toggleGSTCheckBox" autocomplete="off">
                                        <span class="custom-control-label create_item_gst_label">GST Applicable</span>
                                    </label>
                                    <label id="gstAppliacable-error" class="error" for="gstAppliacable"
                                        style="display:none"></label>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-if="checked">
                            <div class="col-lg-6 col-12">
                                <div class="form-group input_new_textbox mb-4 disable-white-input">
                                    <input  type="number" @input="limitLengthAndRemoveSpecialChars($event, 4, 8)" :disabled="disabled === '1'"  v-model="hsnCode" name="hsnCode" placeholder="HSN Code (Optional)" class="form-control"
                                        value="" autocomplete="off" />
                                        <span class="error-validation" v-if="error.hsnCode">{{ error.hsnCode }}</span>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="form-group input_new_textbox mb-4 disable-white-input">
                                    <input @input = "MaxPercentage" :disabled="disabled === '1'" @keyup="igst_cal" type="text" name="IGST" placeholder="IGST (%)" class="form-control"
                                        v-model="igst" v-on:keypress="NumbersOnly" autocomplete="off" />
                                        <span class="error-validation" v-if="error.isIgst">{{ error.isIgst }}</span>
                                        <label id="baseUnits-error" class="error" for="baseUnits" style="display:none;"></label>
                                </div>
                               
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="form-group input_new_textbox mb-4 disable-white-input">
                                    <input @input = "MaxPercentage" :disabled="disabled === '1'" @keyup="sgst_cal" type="text" name="SGST" placeholder="SGST (%)" class="form-control"
                                        v-model="sgst" v-on:keypress="NumbersOnly" autocomplete="off" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="form-group input_new_textbox mb-4 disable-white-input">
                                    <input @input = "MaxPercentage" type="text" :disabled="disabled === '1'" @keyup="cgst_cal" name="CGST" placeholder="CGST (%)" class="form-control"
                                        v-on:keypress="NumbersOnly" v-model="cgst" autocomplete="off" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="form-group input_new_textbox mb-4 disable-white-input">
                                    <input @input = "MaxPercentage" type="text" :disabled="disabled === '1'" name="CESS" placeholder="CESS (%)" class="form-control"
                                        v-model="cess" v-on:keypress="NumbersOnly" autocomplete="off" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="form-group input_new_textbox mb-4 disable-white-input">
                                    <input  type="text" :disabled="disabled === '1'" name="cessOnQty" placeholder="CESS Quantity" class="form-control"
                                        v-model="cessquantity" v-on:keypress="NumbersOnly" autocomplete="off" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-12">
                                <div class="form_bottom_button mt-4 mb-4 text-center">
                                   
                                    <div class="title_text" v-if="this.$route.params.item_id">
                                        <div v-if="disabled === '0'">
                                            <button id="submit_add_items" class="form_button" @click="validation">Update
                                            Item</button>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <button id="submit_add_items" class="form_button" @click="validation">Create
                                        Item</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="row">
                         
                            <div class="alert alert-danger fade show alert-dismissible alert_otp" role="alert"
                                style="display:none;" id="otpErrorMessage">
                                <strong><i class="fa fa-info" aria-hidden="true"></i></strong> <span
                                    class="error_for_new_items"></span>
                            </div>
                          
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Api from "@/Api";
import Common from "@/Common";
import moment from "moment";
import Dropdown from "../components/Dropdown.vue";
export default {
name:"sales-voucher",
  components: {
    Dropdown,
  },

    data() {
        return {
            parentsearch:'',
            ledger_exist:"",
            dismissSecs: 5,
            dismissCountDown: 0,
            showDismissibleAlert: false,
            checked: false,
            listparent: [],
            itemparent: '',
            listunit: [],
            itemunit: '',
            selected: '',
            stockname: "",
            selectedparent: '',
            select_parent:"Select Parent Name",
            error: '',
            igst: '',
            cess: '',
            sgst: '',
            cgst: '',
            cessquantity: '',
            new_loading: true,
            valid: false,
            gstAppliacable : "",
            hsnCode : "",
            narration : "",
            description : "",
            disabled : "0",
            // Voucher Type Dropdown
            parentSearchQuery: '',
            parentDropdownOpen: false,
            parentFilteredOptions: [],
      parentOptions: [],
      referenceSelectedOption: { value: 1, stockGroupName: 'Primary' },
      parentActiveIndex: -1,

        }
    },
    directives: {
    'scroll-into-view': {
      update(el, binding) {
        if (binding.value) {
          el.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
      }
    }
  },
    watch: {
        parentSearchQuery(newQuery) {
      if (newQuery === '') {
        this.ParentfilterOptions();
      }
    }
  },
    methods: {
        toggleGSTCheckBox(){
        this.igst = '';
        this.sgst = '';
        this.cgst = '';
        this.cess = '';
        this.cessquantity = '';
        this.hsnCode = '';
        this.error = {};
        
        
        },
     parentfilter(keyword){
        this.parentsearch = keyword;
        this.selectparent();
     },
     selectparent2(selection){
        this.selectedparent = selection.name;
        this.parentsearch = selection.name;
        this.selectparent();
     },
     html_tag_notaccept(field, event) {
      const input = event.target.value;
     
      let tempDiv = document.createElement('div');
      tempDiv.innerHTML = input;
      const sanitizedValue = tempDiv.textContent || tempDiv.innerText || "";
      
      this[field] = sanitizedValue;
     
      event.target.value = sanitizedValue;
    },
    limitLengthAndRemoveSpecialChars(event, minLength, maxLength) {
    let value = event.target.value;
    value = value.replace(/[^\w\s]/gi, '');
    value = value.substring(0, maxLength);
    event.target.value = value;
    this.hsnCode = value;
    
  },
    
        hidecont() {
           
        },
        selectparent() {
            const data = {
                requestFrom: "WEB",
                company_id: localStorage.getItem('companyId'),
                _userId: localStorage.getItem("customerId"),
                orderBy: 1,
                sortBy: '',
                startLimit: 0,
                endLimit: 100,
                searchTerm: this.parentsearch

            };
            const headers = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "token": localStorage.getItem('webAuthToken')    
            };
            Api.getItemsGroupsByCompanyIdGo(data, headers)
                .then(response => {
                    const responseData = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseData == "200") {
                        this.listparent=[];
                        for (let [key, value] of Object.entries(response.data.data.list)) {
                            response.data.data.list[key].stockGroupName = response.data.data.list[key].stockGroupName.replace("#4; ",'');
                        }
                        this.parentOptions = response.data.data.list;
                        // for (let [key, value] of Object.entries(response.data.data.list)) {
                        //   this.listparent.push({
                        //     name: value.stockGroupName,
                        //     parent_guid: value.guid,
                        //   });
                        // }
                        this.new_loading = false;
                    }

                   
                })
                .catch((err) => {
                   
          Common.getStatusForActionFailed(err.response.status);

                    this.loading = false;
                    this.new_loading = false;
                });
        },
        selectunit() {
            const data = {
                requestFrom: "WEB",
                company_id: localStorage.getItem('companyId'),
                _userId: localStorage.getItem('customerId'),
                startLimit: 0,
                endLimit: 100

            };
            const headers = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "token": localStorage.getItem('webAuthToken')
            };
            Api.getUnitsByCompanyIdGo(data, headers)
                .then(response => {
                    if (response.data.status == "200") {
                        this.listunit = response.data.data.list;
                        this.new_loading = false;
                    }

                })
                .catch((err) => {
                    // alert("ERROR");
                    Common.getStatusForActionFailed(err.response.status);
                    this.loading = false;
                    this.new_loading = false;
                });

        },
        validation(e) {
            if(this.$route.params.item_id !== undefined){
                this.update_items(e);
            }else{
                this.error = [];
                if (this.stockname && this.selected && this.parentSearchQuery && this.igst) {
                    
                }
                if (this.stockname == "") {

                    this.error['stockname'] = 'Please enter stock name';

                }
                if (!this.selected) {

                    this.error['selected'] = 'Please select unit';

                }
                if(this.checked === true){
                   if(this.igst == ""){
                    this.error['isIgst'] = 'Please enter IGST';
                   }
                }
                if (this.hsnCode !== "") {
                 const hsnCodeStr = String(this.hsnCode); 
                 if (hsnCodeStr.length < 4 || hsnCodeStr.length > 8) {
                 this.error['hsnCode'] = 'Please enter hsn code between 4 to 8 digits';
                }
               }
            

                e.preventDefault();
                if (Object.keys(this.error).length === 0) {

                    this.parent = this.itemparent.get_parent;
                  
                    this.Stockname = this.stockname;
                    this.baseUnit = this.selected;
                    this.Parent = this.parentSearchQuery;
                    this.Igst = this.igst;
                    this.Cess = this.cess;
                    this.Sgst = this.sgst;
                    this.Cgst = this.cgst;
                    this.Cessquantity = this.cessquantity;
                  
                    if(this.checked === true){
                        this.gstAppliacable = "&#4; Applicable";
                    }else{
                        this.gstAppliacable = "&#4; Not Applicable";
                    }
                    if(this.Parent == "Primary" || this.Parent == ""){
                        this.Parent = "&#4; Primary";
                    }
            
                    const data = {
                        requestFrom: "WEB",
                        company_id: localStorage.getItem('companyId'),
                        _userId: localStorage.getItem('customerId'),
                        stockItemName: this.Stockname,
                        
                        baseUnits: this.baseUnit,
                        parent: this.Parent,
                        
                        hsnCode : this.hsnCode,
                        narration : this.narration,
                        description : this.description,
                        
                        gstAppliacable : this.gstAppliacable,
                        rateLists: [{
                            IGST: parseFloat(this.Igst),
                            CESS: parseFloat(this.Cess),
                            SGST: parseFloat(this.Sgst),
                            CGST: parseFloat(this.Cgst),
                            cessOnQty: parseFloat(this.Cessquantity),
                        }]

                    };
                    const headers = {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                        "token": localStorage.getItem('webAuthToken')
                    };
                    Api.addItemGo(data, headers)
                        .then((response) => {
                            if (response.data.status == "200" || response.data.status == 200) {
                                this.$router.push({ name: 'My Stock Items' });
                                this.new_loading = false;

                            }
                          
                        })
                        .catch((err) => {
                            Common.getStatusForActionFailed(err.response.status);
                            this.ledger_exist = err.response.data.message
                           
                            this.loading = false;
                            this.new_loading = false;
                        });

                }
            }
        },
        NumbersOnly(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();;
            } else {
                return true;
            }
        },
        MaxPercentage(){
            if(parseFloat(this.igst) > 100){
                this.igst = 100
            }
            if(parseFloat(this.sgst)>100){
                this.sgst = 100

            }
            if(parseFloat(this.cgst)>100){
                this.cgst = 100

            }
            if(parseFloat(this.cess)>100){
                this.cess = 100

            }


        },


        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        },
        get_item(){
            const data = {
                itemId: this.$route.params.item_id,
                requestFrom: "WEB",
                _userId: localStorage.getItem("customerId"),

            };
            const headers = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                token: localStorage.getItem("webAuthToken"),
            };
            Api.getStockItemSyncByIdGo(data, headers)
            .then(response => {
            if (response.data.message == "AUTHENTICATION_FAILED") {
                localStorage.clear();
                window.location.href = '/';
            } else if (response.data.status == "200") {
                // console.log(response);
                if(response.data.data.isTransfer != "0"){
                    this.disabled = "1";
                }
                if(response.data.data.parent == "&#4; Primary"){
                    this.parentSearchQuery = "Primary";
                }else{
                    this.parentSearchQuery = response.data.data.parent;
                }
                this.stockname = response.data.data.stockItemName;
                this.hsnCode = response.data.data.hsnCode; 
                
                this.selected = response.data.data.baseUnits;
                this.description = response.data.data.description;
                this.narration = response.data.data.narration;
                if(response.data.data.gstAppliacable == "&#4; Applicable"){
                    this.checked = true;
                }else{
                    this.checked = false;
                }
                for (let [key, value] of Object.entries(response.data.data.rateLists)){


                    
                this.igst = value.IGST;
                this.sgst = value.SGST;
                this.cgst = value.CGST;
                this.cess = value.CESS;
                this.cessquantity = value.cessOnQty;

                }



                this.new_loading = false;
               
            }
            })
            .catch((err) => {
            Common.getStatusForActionFailed(err.response.status);
          
            this.loading = false;
            this.new_loading = false;
            });
        },
        update_items(e){
            this.error = [];
            if (this.stockname && this.selected && this.parentSearchQuery && this.igst) {
                
            }
            if (this.stockname == "") {

                this.error['stockname'] = 'Please enter stock name';

            }
            if (!this.selected) {

                this.error['selected'] = 'Please select unit';

            }
            if(this.checked === true){
                   if(this.igst == ""){
                    this.error['isIgst'] = 'Please enter IGST';
                   }
                }
           
                if (this.hsnCode !== "") {
                 const hsnCodeStr = String(this.hsnCode); 
                 if (hsnCodeStr.length < 4 || hsnCodeStr.length > 8) {
                 this.error['hsnCode'] = 'Please enter hsn code between 4 to 8 digits';
                }
               }
            e.preventDefault();
            if (Object.keys(this.error).length === 0) {

                this.parent = this.itemparent.get_parent;
                
                this.Stockname = this.stockname;
                this.baseUnit = this.selected;
                this.Parent = this.parentSearchQuery;
                this.Igst = this.igst;
                this.Cess = this.cess;
                this.Sgst = this.sgst;
                this.Cgst = this.cgst;
                this.Cessquantity = this.cessquantity;
               
                if(this.checked === true){
                    this.gstAppliacable = "&#4; Applicable";
                }else{
                    this.gstAppliacable = "&#4; Not Applicable";
                }
                if(this.Parent == "Primary" || this.Parent == ""){
                    this.Parent = "&#4; Primary";
                }
                const data = {
                    itemId : this.$route.params.item_id,
                _userId: localStorage.getItem("customerId"),
                    requestFrom: "WEB",
                    companyId: localStorage.getItem('companyId'),
                    stockItemName: this.Stockname,
                    oldStockItemName: this.Stockname,
                    baseUnits: this.baseUnit,
                    parent: this.Parent,
                  
                    hsnCode : this.hsnCode,
                    narration : this.narration,
                    description : this.description,
                  
                    gstAppliacable : this.gstAppliacable,
                    rateLists: [{
                        IGST: parseFloat(this.Igst),
                        CESS: parseFloat(this.Cess),
                        SGST: parseFloat(this.Sgst),
                        CGST: parseFloat(this.Cgst),
                        cessOnQty: parseFloat(this.Cessquantity),
                    }]

                };
                const headers = {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('webAuthToken')
                };
                Api.updateStockItemGo(data, headers)
                    .then(response => {
                        if (response.data.status == "200") {
                            this.$router.push({ name: 'My Stock Items' });
                            this.new_loading = false;
                        }
                        else{
                                this.ledger_exist=response.data.message;
                            }
                    })
                    .catch((err) => {
                        Common.getStatusForActionFailed(err.response.status);
                     
                        this.loading = false;
                        this.new_loading = false;
                    });

            }
        },
        igst_cal(){
            this.sgst = this.igst / 2;
            this.cgst = this.igst / 2;
        },
        sgst_cal(){
            this.igst = this.sgst * 2;
            this.cgst = this.sgst;
        },
        cgst_cal(){
            this.igst = this.cgst * 2;
            this.sgst = this.cgst;
       },


       ParenttoggleDropdown(open) {
       this.selectparent(); 
      this.parentDropdownOpen = open;
      if (open) {
        this.$nextTick(() => {
          this.$refs.parentInput.focus();
        });
        const query = this.parentSearchQuery.toLowerCase();
      this.parentFilteredOptions = this.parentOptions.filter(option =>
        option.stockGroupName.toLowerCase().includes(query)
      );
      this.parentActiveIndex = -1;
      } else {
        this.parentActiveIndex = -1;
      }
    },
    ParentfilterOptions() {
      const query = this.parentSearchQuery.toLowerCase();
      this.parentFilteredOptions = this.parentOptions.filter(option =>
        option.stockGroupName.toLowerCase().includes(query)
      );
      this.parentActiveIndex = -1;
    },
    ParentselectOption(option) {
      this.referenceSelectedOption = option;
      this.parentSearchQuery = option.stockGroupName;
      this.parentDropdownOpen = false;
      this.parentActiveIndex = -1;
    },
    ParentclearSearch() {
      this.parentSearchQuery = '';
      this.parentsearch = "";
      this.selectparent();
      this.ParentfilterOptions();
      this.$nextTick(() => {
          this.$refs.parentInput.focus();
        });
    },
    handleParentKeydown(event) {
      if (this.parentDropdownOpen) {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          if (this.parentActiveIndex < this.parentFilteredOptions.length - 1) {
            this.parentActiveIndex++;
          }
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          if (this.parentActiveIndex > 0) {
            this.parentActiveIndex--;
          }
        } else if (event.key === 'Enter') {
          event.preventDefault();
          if (this.parentActiveIndex >= 0) {
            this.ParentselectOption(this.parentFilteredOptions[this.parentActiveIndex]);
          }
        } else if (event.key === 'Escape') {
          this.ParenttoggleDropdown(false);
        }
      }
    },
    },
    mounted() {
        if(this.$route.params.item_id !== undefined){
            this.get_item();
        }
        this.selectparent();
        this.selectunit();
        this.parentFilteredOptions = this.parentOptions;
    }
}
</script>
<style scoped>
.ParenttypesearchRechanges input {
    background: #fff;
    cursor: pointer;
    border-radius: 3px;
    color: #333;
    display: block;
    font-size: 14px;
    padding: 6px;
    border: 1px solid #C4C4C4;
    width: 100%;
    font-weight:400;
}

.ParenttypesearchRechanges input::placeholder {
    font-weight: 400;
}
i.fa.fa-search.input-search-icon-Rechanges-parent {
    position: absolute;
    right: 5px;
    top: 34px;
    height: 18px;
    width: 18px;
    line-height: 18px;
    color: #B6B6B6;
}

.ParenttypesearchRechanges {
    position: relative;
}

button.inputcrossiconRechangesparent {position: absolute;right: 5px;top: 34px;height: 18px;width: 18px;line-height: 18px;background: #eee;border-radius: 50%;}

button.inputcrossiconRechangesparent i {
    font-size: 10px;
    color: #5e5e5e;
}
ul.SetScrollbarWidthSizeparent {position: absolute;top: 100%;left: 0;right: 0;max-height: 200px;overflow-y: auto;border: 1px solid #ccc;background-color: white;list-style-type: none;margin: 0;padding: 0;z-index:3;overflow-x:hidden;}
ul.SetScrollbarWidthSizeparent li {font-size:13px;padding: 5px 8px;cursor: pointer;border-bottom:1px solid #ddd;font-weight:500;}
ul.SetScrollbarWidthSizeparent li:hover {background-color: #f1f1f1;}
.active{background-color: #f1f1f1;}
</style>