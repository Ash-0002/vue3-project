/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section>
    <div v-if="new_loading" class="loader-wrapper">
      <div class="loading_css">
        <img
          src="/assets/images/1.0/brand/Loader-GIF-Final.gif"
          class="img-fluid loader_css"
          height="40"
          width="40"
        />
      </div>
    </div>
    <div class="page-header-title-box dashboard-page-header">
      <div class="row">
        <div class="col-lg-12 col-12">
          <div class="arrow_left_items pt-2">
            <a @click="$router.go(-1)"
              ><i class="fa fa-chevron-left icon-color"></i
            ></a>
          </div>

          <div
            class="title_text new_title_company_name"
            v-if="this.$route.params.ledger_id"
          >
            <div v-if="disabled === '0'">
              <h4 class="page-title mb-0">Update Party</h4>
            </div>
            <div v-else>
              <h4 class="page-title mb-0">{{ this.ledgername }}</h4>
            </div>
          </div>
          <div class="title_text new_title_company_name" v-else>
            <h4 class="page-title mb-0">Create Party</h4>
          </div>
        </div>
      </div>
    </div>

    <form id="add_party_form" @submit="validateNumber(e)">
      <div class="main_card">
        <div class="card">
          <div class="new_party_form">
            <div
              class="error-validation-main-div"
              v-if="this.ledger_exist != ''"
            >
              <span class="error-validation my-1">{{ this.ledger_exist }}</span>
            </div>
            <div class="row">
              <div class="col-lg-6 col-12">
                <div
                  class="form-group input_new_textbox mb-4 disable-white-input"
                >
                  <div class="label_mb_input">GST Number</div>
                  <input
                    @input="html_tag_notaccept('gstnumber', $event)"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    type="text"
                    :disabled="disabled === '1'"
                    name="gst"
                    placeholder="GST Number (Optional)"
                    class="form-control"
                    v-model="gstnumber"
                    autocomplete="off"
                    maxlength="15"
                  />
                  <!-- <div> -->
                  <button
                    v-if="gst_number_button"
                    class="form_button black_button"
                    id="create-party"
                    type="button"
                    @click="verifygstnumber"
                  >
                    Verify
                  </button>
                  <!-- </div> -->
                  <span class="error-validation" v-if="error_gst.gstnumber">{{
                    error_gst.gstnumber
                  }}</span>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group mb-4">
                  <div class="label_mb_input">
                    Ledger Group
                    <span v-if="disabled === '0'" class="required_red">*</span>
                  </div>
                  <!-- <select
                    name="under"
                    :disabled="disabled === '1'"
                    ref="my_input"
                    id="under"
                    class="form-select"
                    v-model="selected"
                    @change=""
                  >
                    <option value="" selected hidden>
                      Select Ledger Group
                    </option>
                    <option
                      v-for="(under, index) in listUnder"
                      :value="under.reservedName"
                      :key="index"
                      :data-parentgrp="under.ledgerGroupName"
                      :data-masterReservedName="under.masterReservedName"
                      :data-mainMasterReservedName="
                       under.mainMasterReservedName
                      "
                      v-bind:value="{
                        get_reservedName: under.ledgerGroupName,
                        get_parentgrp: under.ledgerGroupName,
                        get_mainMasterReservedName:
                          under.mainMasterReservedName,
                        get_masterreserverd: under.masterReservedName,
                      parent: under.parent,
                      }"
                    >
                      {{ under.ledgerGroupName }}
                    </option>
                  </select> -->
                  <input
                    name="under"
                    :disabled="disabled === '1'"
                    ref="my_input"
                    id="under"
                    class="form-select AddLedgerInputPart"
                    v-model="selected"
                    @focus="ledgerGroupFocused"
                    @blur="ledgerGroupFocused"
                    @input="handleLedgerSearch($event)"
                    placeholder="Search Ledger Group"
                  />
                  <ul v-if="isFoucsed" class="AddLedgerInputInnerUlPart">
                    <li  v-for="(under, index) in listUnder"
                    
                      :value="under.reservedName"
                      :key="index"
                      @mousedown="ledgerSelected(under)"
                      > {{ under.ledgerGroupName }}</li>
                  </ul>
                  <span class="error-validation" v-if="error.selected">{{
                    error.selected
                  }}</span>
                  <div></div>
                </div>
              </div>

              <div class="col-lg-6 col-12">
                <div
                  class="form-group input_new_textbox mb-4 disable-white-input"
                >
                  <div class="label_mb_input">
                    Ledger Name
                    <span v-if="disabled === '0'" class="required_red">*</span>
                  </div>
                  <input
                    @input="html_tag_notaccept('ledgername', $event)"
                    type="text"
                    placeholder="Ledger Name"
                    class="form-control alphabetic"
                    id="ledgername"
                    :disabled="disabled === '1'"
                    name="ledgername"
                    v-model="ledgername"
                    autocomplete="off"
                  />
                  <span class="error-validation" v-if="error.ledgername">{{
                    error.ledgername
                  }}</span>
                </div>
              </div>
              <div class="col-lg-4 col-12">
                <div
                  class="form-group input_new_textbox mb-4 disable-white-input"
                >
                  <div class="label_mb_input">Opening Balance</div>
                  <input
                    @input="html_tag_notaccept('openingBalance', $event)"
                    type="text"
                    :disabled="disabled === '1'"
                    placeholder="Opening Balance"
                    class="form-control form-control alphabetic"
                    name="openingBalance"
                    id="openingBalance"
                    v-model="openingBalance"
                    autocomplete="off"
                    v-on:keypress="NumbersOnly"
                  />
                  <span class="error-validation" v-if="error.openingBalance">{{
                    error.openingBalance
                  }}</span>
                </div>
              </div>
              <div class="col-lg-2 col-12">
                <div class="form-group mb-4 pt-4">
                  <div class="label_mb_input"></div>
                  <select
                    name="openingBalanceType"
                    :disabled="disabled === '1'"
                    v-model="openingBalanceType"
                    class="form-select"
                  >
                    <option value="" disabled>Opening Balance</option>
                    <option selected value="Debit">Debit</option>
                    <option value="Credit">Credit</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group mb-4">
                  <div class="label_mb_input">
                    Country
                    <span v-if="disabled === '0'" class="required_red">*</span>
                  </div>
                  <select
                    name="country"
                    :disabled="disabled === '1'"
                    id="country"
                    class="form-select"
                    v-model="country"
                    @change="onChangeCountry"
                  >
                    <option value="" selected hidden>Select Country</option>
                    <option
                      v-for="(country, index) in listCountry"
                      :value="country.countryName"
                      :key="index"
                    >
                      {{ country.countryName }}
                    </option>
                  </select>
                  <span class="error-validation" v-if="error.country">{{
                    error.country
                  }}</span>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="label_mb_input">
                  State
                  <span v-if="disabled === '0'" class="required_red">*</span>
                </div>
                <select
                  name="state"
                  id="state"
                  class="form-select"
                  :disabled="listState.length == 0 || disabled == '1'"
                  v-model="state"
                  @change="onChangeState"
                >
                  <option value="" selected hidden>Select State</option>
                  <option
                    v-for="(state, index) in listState"
                    :key="index"
                    :value="state.stateName"
                  >
                    {{ state.stateName }}
                  </option>
                </select>
                <span class="error-validation" v-if="error.state">{{
                  error.state
                }}</span>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group disable-white-input">
                  <div class="label_mb_input">
                    Postal Address
                    <span v-if="disabled === '0'" class="required_red">*</span>
                  </div>
                  <textarea
                    @input="html_tag_notaccept('postaladdress', $event)"
                    :disabled="disabled === '1'"
                    placeholder="Postal Address"
                    class="form-control mb-2 textarea_"
                    name="address"
                    v-model="postaladdress"
                    autocomplete="off"
                  >
                  </textarea>
                  <span class="error-validation" v-if="error.postaladdress">{{
                    error.postaladdress
                  }}</span>
                </div>
              </div>

              <div class="col-lg-6 col-12">
                <div
                  class="form-group input_new_textbox mb-4 disable-white-input"
                >
                  <div class="label_mb_input">Postal code</div>
                  <input
                    @input="html_tag_notaccept('postalcode', $event)"
                    type="text"
                    name="postalCode"
                    placeholder="Postal code"
                    class="form-control"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    v-model="postalcode"
                    :disabled="disabled === '1'"
                    v-on:keypress="NumbersOnly"
                    autocomplete="off"
                    maxlength="6"
                  />
                  <span class="error-validation" v-if="error.postalcode">{{
                    error.postalcode
                  }}</span>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="label_mb_input">GST Registration Type</div>
                <select
                  name="state"
                  id="state"
                  class="form-select"
                  :disabled="listState.length == 0 || disabled == '1'"
                  v-model="RegistrationTypeValue"
                >
                  <option value="" selected hidden>Select Registration</option>
                  <option
                    v-for="(Redgtype, index) in RegistrationTypeData"
                    :key="index"
                    :value="Redgtype"
                  >
                    {{ Redgtype }}
                  </option>
                </select>
              </div>
              <div class="col-lg-6 col-12">
                <div
                  class="form-group input_new_textbox mb-4 disable-white-input"
                >
                  <div class="label_mb_input">Ledger Mobile</div>
                  <input
                    @input="html_tag_notaccept('ledger_mobile', $event)"
                    type="text"
                    name="postalCode"
                    placeholder="Ledger Mobile (Optional)"
                    class="form-control"
                    v-model="ledger_mobile"
                    maxlength="10"
                    :disabled="disabled === '1'"
                    v-on:keypress="NumbersOnly"
                    autocomplete="off"
                  />
                  <span class="error-validation" v-if="error.ledger_mobile">{{
                    error.ledger_mobile
                  }}</span>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div
                  class="form-group input_new_textbox mb-4 disable-white-input"
                >
                  <div class="label_mb_input">Email</div>
                  <input
                    @input="html_tag_notaccept('email', $event)"
                    type="email"
                    name="postalCode"
                    placeholder="Email (Optional)"
                    class="form-control"
                    v-model="email"
                    :disabled="disabled === '1'"
                    autocomplete="off"
                  />
                  <span class="error-validation" v-if="error.email">{{
                    error.email
                  }}</span>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group disable-white-input">
                  <div class="label_mb_input">Narration</div>
                  <textarea
                    @input="html_tag_notaccept('description', $event)"
                    v-model="description"
                    :disabled="disabled === '1'"
                    class="form-control mb-4 textarea_"
                    placeholder="Narration"
                    rows="3"
                    name="description"
                    >{{ this.description }}</textarea
                  >
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-12">
                <div class="form_bottom_button mt-4 mb-4 text-center">
                  <div v-if="this.$route.params.ledger_id">
                    <div v-if="disabled === '0'">
                      <button
                        :disabled="disabled === '1'"
                        class="form_button black_button"
                        id="create-party"
                        type="submit"
                        @click="validateNumber"
                      >
                        Update Party
                      </button>
                    </div>
                  </div>
                  <div v-else>
                    <button
                      class="form_button black_button"
                      id="create-party"
                      type="submit"
                      @click="validateNumber"
                    >
                      Create Party
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <!--otp errrr message -->
              <div
                class="alert alert-danger fade show alert-dismissible alert_otp"
                role="alert"
                style="display: none"
                id="partyErrorMessage"
              >
                <strong><i class="fa fa-info" aria-hidden="true"></i></strong>
                <span class="error_for_new_party"></span>
              </div>
              <!--otp errrr message -->
            </div>
          </div>
        </div>
      </div>
    </form>
    <!--End Page header-->
  </section>
</template>

<script>
import Api from "@/Api";
import Common from "@/Common";
import moment from "moment";
export default {
    name: "register",
    data() {

        return {
            isFoucsed: false,
            error_gst:{},
            gst_number_button:false,
            RegistrationTypeValue:'',
            RegistrationTypeData: [],
            ledger_exist:'',
            openingBalance: '',
            listCountry: [],
            listState: [],
            listCities: [],
            listUnder: [],
            country: "",
            under: '',
            state: "",
            city: "",
            authToken: "",
            number: "",
            gstnumber: "",
            valid: false,
            ledgername: "",
            postaladdress: "",
            postalcode: "",
            new_loading: true,
            selected: '',
            openingBalanceType : "Debit",
            products: [
                { id: 1, name: 'A' },
                { id: 2, name: 'B' },
                { id: 3, name: 'C' }
            ],
            error: '',
            amount : 0,
            description : "",
            disabled : "0",
            ledger_mobile : "",
            email : "",
            LedgerSearchTerm: ''
        };
    },
    created() {
        this.loadCountry();
    },
    methods: {
      handleLedgerSearch(event){
        const searchedTerm = event.target.value
        this.LedgerSearchTerm = searchedTerm
        this.onChangeunder()
      },
        getTransactionType(){
            const data = {
                _userId: localStorage.getItem('customerId'),
                company_id: localStorage.getItem('companyId'),
                requestFrom: "WEB",
                type: "gstRegistrationTypes"
            }
            const headers = {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('webAuthToken')
                };
                Api.getTransactionTypeGo(data, headers)
                .then(response=>{
                    if(response.data.status == "200"){
                        this.RegistrationTypeData = []
                        this.RegistrationTypeData = response.data.data.value
                    }
                })
                .catch((err)=>{
                    console.log(err.data.message)
                })
        },
        html_tag_notaccept(field, event) {
      const input = event.target.value;

      let tempDiv = document.createElement('div');
      tempDiv.innerHTML = input;
      const sanitizedValue = tempDiv.textContent || tempDiv.innerText || "";

      this[field] = sanitizedValue;

      event.target.value = sanitizedValue;
      if (this.gstnumber !== "") {
                this.error_gst ={};
                if (/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(this.gstnumber) === true) {
                    this.gst_number_button = true;


                }
                else{
                    this.gst_number_button = false;
                }
            }
       },
       ledgerGroupFocused(){
        this.isFoucsed = !this.isFoucsed
        this.LedgerSearchTerm = ''
        this.onChangeunder()
       },
       ledgerSelected(option){
         this.selected = option.ledgerGroupName
        this.parentgroup = option.ledgerGroupName;
        this.masterReservedName = option.masterReservedName;
        this.mainMasterReservedName = option.mainMasterReservedName;
        this.parent = option.parent
       },
       verifygstnumber(){
        const data = {
                _userId: localStorage.getItem('customerId'),
                requestFrom: "WEB",
                gstNo: this.gstnumber
            }
            const headers = {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('webAuthToken')
                };
                Api.getGSTNumberDetails(data, headers)
                .then(response=>{
                    if(response.data.status == "200" && response.data.data.isGSTVerified==true){
                        this.gst_number_button = false;
                        const gstResponse = response.data.data.gstSearchResponse;

                        // Set ledgername to lgnm
                        this.ledgername = gstResponse.lgnm;

                        // Set state to stcd
                        this.state = gstResponse.pradr.addr.stcd;

                        // Combine address fields to create postaladdress
                        const addr = gstResponse.pradr.addr;
                        this.postaladdress = [
                                                addr.bnm,
                                                addr.st,
                                                addr.loc,
                                                addr.bno,
                                                addr.stcd,
                                                addr.flno,
                                                addr.lt,
                                                addr.lg,
                                                addr.pncd
                                            ]
                                            .filter(Boolean) // Remove undefined or empty fields
                                            .join(', '); // Join with commas


                        // Set postalcode to pncd
                        this.postalcode = addr.pncd;

                        // Disable GST number button
                        this.gst_number_button = false;

                    }
                    else{
                        this.error_gst = {}
                        this.gst_number_button = false;
                        this.error_gst['gstnumber'] = response.data.message;
                        this.ledgername = "";
                        this.state = "";
                        this.postaladdress ='';
                        this.postalcode="";
                    }
                })
                .catch((err)=>{

                    console.log(err.response.data.message || err.message || "An error occurred during the API call.");
                })
       },
        validateNumber(e) {
            if(this.$route.params.ledger_id !== undefined){
                this.update_ledger(e);
                return false;
            }
            this.error = [];
            this.error_gst = {};
            if (this.number && this.gstnumber && this.ledgername && this.postaladdress && this.country && this.state) {

            }
            if (/^[0-9]*$/.test(this.number) === false) {
                this.valid = true;
                this.error['number'] = 'Check Number';
            }

            if (this.gstnumber !== "") {
                if (/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(this.gstnumber) === false) {

                    this.error_gst['gstnumber'] = 'Incorrect GST number';



                }
            }

            if (!this.selected) {

                this.error['selected'] = 'Please select ledger Group';

          }
          
            
            if (!this.ledgername) {

                this.error['ledgername'] = 'Ledger name field is required';

            }

            if (!this.postaladdress) {

                this.error['postaladdress'] = 'Postal address field is required';

            }



            if (!this.country) {

                this.error['country'] = 'Please select country';

            }
            if (!this.state) {

                this.error['state'] = 'Please select state';

            }



            if(this.email){
                // alert("herer");
                const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(emailRegex.test(this.email) === false) {
                    this.error['email'] = 'Please enter valid email';
                }
            }


            e.preventDefault();


            if (Object.keys(this.error).length === 0) {

                // this.parentgroup = this.selected.get_parentgrp;
                // this.masterReservedName = this.selected.get_masterreserverd;
                // this.parent = this.selected.parent;

                // this.mainMasterReservedName = this.selected.get_mainMasterReservedName;
                this.ledgerName = this.ledgername;
                this.countryName = this.country;
                this.stateName = this.state;
                this.address = this.postaladdress.replace(/\n/g, " | ");


                if(this.openingBalanceType == "Debit"){
                    this.amount = "-" + this.openingBalance;
                }else{
                    this.amount = Math.abs(this.openingBalance);
                }
                const formattedAddress = this.address.split(',').map(part => part.trim()).filter(Boolean).join('\n');
                const data = {
                    company_id: localStorage.getItem('companyId'),
                    _userId: localStorage.getItem('customerId'),
                    requestFrom: "WEB",
                    parentgroup: this.parent,
                    masterReservedName: this.masterReservedName,
                    mainMasterReservedName: this.mainMasterReservedName,
                    ledgerName: this.ledgerName,
                    countryName: this.countryName,
                    stateName: this.stateName,
                    address: formattedAddress,
                    parent: this.parentgroup,
                    partyGSTIn : this.gstnumber,
                    openingBalance : this.amount.toString(),
                    pincode : this.postalcode,
                    description : this.description,
                    ledgerMobile : this.ledger_mobile,
                    eMail : this.email,
                    gstRegistrationType: this.RegistrationTypeValue

                };
                const headers = {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('webAuthToken')
                };

                Api.addLedgerGo(data, headers)
                    .then(response => {

                        if (response.data.status == "200") {

                            this.$router.push({ name: 'My Ledgers' });
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

        },
        update_ledger(e) {

            this.error = [];
            if (this.number && this.gstnumber && this.ledgername && this.postaladdress && this.country && this.state && postalcode) {

            }
            if (/^[0-9]*$/.test(this.number) === false) {
                this.valid = true;
                this.error['number'] = 'Check Number';
            }

            if (this.gstnumber !== "") {
                if (/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(this.gstnumber) === false) {

                    this.error['gstnumber'] = 'Incorrect GST number';

                }
            }

            if (!this.selected) {

                this.error['selected'] = 'Please select ledger Group';

            }
            if (!this.ledgername) {

                this.error['ledgername'] = 'Ledger name field is required';

            }

            if (!this.postaladdress) {

                this.error['postaladdress'] = 'Postal address field is required';

            }



            if (!this.country) {

                this.error['country'] = 'Please select country';

            }
            if (!this.state) {

                this.error['state'] = 'Please select state';

            }



            if(this.email){
                const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(emailRegex.test(this.email) === false) {
                    this.error['email'] = 'Please enter valid email';
                }
            }


            e.preventDefault();


            if (Object.keys(this.error).length === 0) {

                // this.parentgroup = this.selected.get_parentgrp;
                // this.masterReservedName = this.selected.get_masterreserverd;
                // this.parent = this.selected.parent;

                // this.mainMasterReservedName = this.selected.get_mainMasterReservedName;
                this.ledgerName = this.ledgername;
                this.countryName = this.country;
                this.stateName = this.state;
                this.address = this.postaladdress;

                if(this.openingBalanceType == "Debit"){
                    this.amount = "-" + this.openingBalance;
                }else{
                    this.amount = Math.abs(this.openingBalance);
                }
                 const formattedAddress = this.address.split(',').map(part => part.trim()) .filter(Boolean).join('\n');
                const data = {
                    ledgerId : this.$route.params.ledger_id,
                    _userId: localStorage.getItem("customerId"),

                    oldLedgerName : this.ledgerName,

                    companyId: localStorage.getItem('companyId'),

                    requestFrom: "WEB",
                    parentgroup: this.parent,
                    masterReservedName: this.masterReservedName,
                    mainMasterReservedName: this.mainMasterReservedName,
                    ledgerName: this.ledgerName,
                    countryName: this.countryName,
                    stateName: this.stateName,
                    address: formattedAddress,
                    parent: this.parentgroup,
                    partyGSTIn : this.gstnumber.toString(),
                    openingBalance : this.amount.toString(),
                    pincode : this.postalcode,
                    description : this.description,
                    ledgerMobile : this.ledger_mobile,
                    eMail : this.email,
                    isTransfer: 0,
                    gstRegistrationType: this.RegistrationTypeValue

                };
                const headers = {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('webAuthToken')
                };

                Api.updateLedgerGo(data, headers)
                    .then(response => {

                        if (response.data.status == "200") {

                            this.$router.push({ name: 'My Ledgers' });
                            this.new_loading = false;
                        }
                        else{
                            this.ledger_exist = response.data.message;
                        }
                    })

                    .catch((err) => {
                        Common.getStatusForActionFailed(err.response.status);
                        this.loading = false;
                        this.new_loading = false;
                    });

            }

        },
        loadCountry() {

            const data = {
                _userId: localStorage.getItem("customerId"),
                requestFrom: "WEB",
                searchTerm: "",
            };
            const headers = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                token: localStorage.getItem("webAuthToken"),

            };
            Api.getCountryGo(data, headers)
                .then(response => {
                    if (response.data.status == "200") {
                        this.listCountry = response.data.data;
                        this.new_loading = false;
                    }

                })
                .catch((err) => {
                    Common.getStatusForActionFailed(err.response.status);
                    this.loading = false;
                    this.new_loading = false;
                });
        },
        onChangeCountry() {

            const data = {
                _userId: localStorage.getItem("customerId"),
                requestFrom: "WEB",
                countryName: this.country,
            };
            const headers = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                token: localStorage.getItem("webAuthToken"),

            };
            Api.getStateGo(data, headers)
                .then(response => {
                    if (response.data.status == "200") {
                        this.listState = response.data.data;
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
        onChangeState() {

            const data = {
                requestFrom: "PORTAL",
                countryName: this.country,
                stateName: this.state
            };
            const headers = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            };
            Api.getCities(data, headers)
                .then(response => {
                    if (response.data.status === "1") {
                        this.listCities = response.data.data.list;
                        this.new_loading = false;
                    }

                })
                .catch((err) => {
                    Common.getStatusForActionFailed(err.response.status);
                    this.loading = false;
                    this.new_loading = false;
                });
        },
        onChangeunder() {
            const data = {
                company_id: localStorage.getItem('companyId'),
                _userId: localStorage.getItem("customerId"),
                startLimit: 0,
                endLimit: 10,
                requestFrom: "WEB",
                masterReservedName: [
                "Sundry Debtors",
                "Sundry Creditors"
                  ],
                searchTerm: this.LedgerSearchTerm,
                createParty:true

            };
            const headers = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "token": localStorage.getItem('webAuthToken')
            };

            Api.getLedgerGroupsByCompanyIdGo(data, headers)
                .then(response => {
                    const responseData = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseData == "200") {
                        this.listUnder = response.data.data.list;
                        this.new_loading = false;
                    }

                })
                .catch((err) => {

          Common.getStatusForActionFailed(err.response.status);

                    this.loading = false;
                    this.new_loading = false;
                });

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

        get_ledger(){
            const data = {
                ledgerId: this.$route.params.ledger_id,
                requestFrom: "WEB",
                _userId: localStorage.getItem('customerId'),

            };
            const headers = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                token: localStorage.getItem("webAuthToken"),
            };
            Api.getLedgerSyncByIdGo(data, headers)
            .then(response => {
            if (response.data.message == "AUTHENTICATION_FAILED") {
                localStorage.clear();
                window.location.href = '/';
            } else if (response.data.status == "200") {

                if(response.data.data.isTransfer != "0"){
                    this.disabled = "1";
                }

                this.ledgername = response.data.data.ledgerName;

                // this.selected = { get_reservedName: response.data.data.masterReservedName, get_parentgrp: response.data.data.parent, get_mainMasterReservedName: response.data.data.mainMasterReservedName, get_masterreserverd: response.data.data.masterReservedName,parent : response.data.data.parentgroup }
                this.selected = response.data.data.parent
                this.gstnumber = response.data.data.partyGSTIn;
                this.openingBalance = Math.abs(response.data.data.openingBalance);
                if (response.data.data.openingBalance >= 0) {
                    // + value
                    this.openingBalanceType = "Credit";
                }else{
                    // - value
                    this.openingBalanceType = "Debit";
                }

                this.country = response.data.data.countryName;
                if (this.country !== "") {
                    this.onChangeCountry();
                }
                this.state = response.data.data.stateName;


                // this.postaladdress = response.data.data.address;
                const formattedAddress = response.data.data.address
                  .split('\n')              // Split by pipe symbol
                  .map(part => part.trim()) // Trim whitespace
                  .filter(Boolean)         // Remove empty strings
                  .join(', ');
                
                this.postaladdress = formattedAddress;

                this.postalcode = response.data.data.pincode;
                this.description = response.data.data.description;
                this.ledger_mobile = response.data.data.ledgerMobile;
                this.email = response.data.data.eMail;
                this.RegistrationTypeValue = response.data.data.gstRegistrationType
            }
            })
            .catch((err) => {
            Common.getStatusForActionFailed(err.response.status);
            this.loading = false;
            this.new_loading = false;
            });
        }




    },
    mounted() {

        if(this.$route.params.ledger_id !== undefined){
            this.get_ledger();
        }else{
            this.country = "India";
            this.onChangeCountry();
        }

        this.onChangeunder();
       this.getTransactionType();

    }
};
</script>
<style scoped>
ul.AddLedgerInputInnerUlPart li{
border: 1px solid rgb(209, 209, 209);
padding: 3px 0 3px 8px;
border-top: none;
}
ul.AddLedgerInputInnerUlPart{
  background-color: whitesmoke;
  position: absolute;
  width: 49%;
  max-height: 400px;
  height: auto;
  overflow-y: auto;
}

ul.AddLedgerInputInnerUlPart li:hover{
  background-color: #0d6efd;
  color: azure;
}
input.AddLedgerInputPart {
    position: relative;
}
</style>
