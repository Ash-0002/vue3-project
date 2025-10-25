<template>
  <section class="GSPLoginNewPageSection">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-12">
          <div class="TopTabsForGSP">
            <ul>
              <li :class="getStepClass(1)" @click="handleTabClick(1)">
                <a href="javascript:void(0);" v-if="eInvoiceStatusValue">
                  <span>
                    <img v-if="isStepCompleted(1)" src="assets/images/1.0/png/check.png" alt="Tick" />
                    <template v-else>1</template>
                  </span>
                  Login in eInvoice Portal
                </a>
                <a href="javascript:void(0);" v-else>
                  <span>
                    <img v-if="isStepCompleted(1)" src="assets/images/1.0/png/check.png" alt="Tick" />
                    <template v-else>1</template>
                  </span>
                  Login in eWay Bill Portal
                </a>
              </li>
              <li :class="getStepClass(2)" @click="handleTabClick(2)">
                <a href="javascript:void(0);" v-if="eInvoiceStatusValue">
                  <span>
                    <img v-if="isStepCompleted(2)" src="assets/images/1.0/png/check.png" alt="Tick" width="16" />
                    <template v-else>2</template>
                  </span>
                  API Registration
                </a>
                <a href="javascript:void(0);" v-else>
                  <span>
                    <img v-if="isStepCompleted(2)" src="assets/images/1.0/png/check.png" alt="Tick" width="16" />
                    <template v-else>2</template>
                  </span>
                  Select 'For GSP'
                </a>
              </li>
              <li :class="getStepClass(3)" @click="handleTabClick(3)">
                <a href="javascript:void(0);" v-if="eInvoiceStatusValue">
                  <span>
                    <img v-if="isStepCompleted(3)" src="assets/images/1.0/png/check.png" alt="Tick" width="16" />
                    <template v-else>3</template>
                  </span>
                  Verify OTP
                </a>
                <a href="javascript:void(0);" v-else>
                  <span>
                    <img v-if="isStepCompleted(3)" src="assets/images/1.0/png/check.png" alt="Tick" width="16" />
                    <template v-else>3</template>
                  </span>
                  Verify Mobile Number
                </a>
              </li>
              <li :class="getStepClass(4)" @click="handleTabClick(4)">
                <a href="javascript:void(0);" v-if="eInvoiceStatusValue">
                  <span>
                    <img v-if="isStepCompleted(4)" src="assets/images/1.0/png/check.png" alt="Tick" width="16" />
                    <template v-else>4</template>
                  </span>
                  GST Suvidha Provider
                </a>
                <a href="javascript:void(0);" v-else>
                  <span>
                    <img v-if="isStepCompleted(4)" src="assets/images/1.0/png/check.png" alt="Tick" width="16" />
                    <template v-else>4</template>
                  </span>
                  Select GSP Provider
                </a>
              </li>
              <li :class="getStepClass(5)" @click="handleTabClick(5)">
                <a href="javascript:void(0);" v-if="eInvoiceStatusValue">
                  <span>
                    <img v-if="isStepCompleted(5)" src="assets/images/1.0/png/check.png" alt="Tick" width="16" />
                    <template v-else>5</template>
                  </span>
                  Generate e-Invoice
                </a>
                <a href="javascript:void(0);" v-else>
                  <span>
                    <img v-if="isStepCompleted(5)" src="assets/images/1.0/png/check.png" alt="Tick" width="16" />
                    <template v-else>5</template>
                  </span>
                  Enter GSP Credentials
                </a>
              </li>
            </ul>
          </div>
          <div class="container">
            <div class="NewGSPLoginTabsValue">
              <div v-if="activeTab === 1">
                <div class="SetMiddlePortionForNewGSP">
                  <div class="row">
                    <div class="col-lg-3 col-12">
                      <div class="ClickToProceed">
                        <p>Click to proceed</p>
                        <div class="clickToProceedButtonGSP">
                          <button v-if="eInvoiceStatusValue">
                            <a href="https://einvoice1.gst.gov.in/" target="_blank">
                              eInvoice Portal <img src="assets/images/1.0/png/proceed.png" />
                            </a>
                          </button>
                          <button v-else>
                            <a href="https://ewaybillgst.gov.in/Login.aspx" target="_blank">
                              eWay Bill Portal <img src="assets/images/1.0/png/proceed.png" />
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-9 col-12">
                      <div class="BackgroundImagerightsideGSP text-right">
                        <img src="assets/images/1.0/png/Login_in_eInvoice_Portal.jpg" class="EInvoiceFirstImageClass" v-if="eInvoiceStatusValue"/>
                        <img src="assets/images/1.0/png/loginewaybillportalbg.jpg" class="EWayFirstImageClass" v-else/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row MainportionFooterBottom align-items-center">
                  <div class="col-lg-6 col-12">
                    <div class="GSPLoginNewFooterPart">
                      <p>For any Help and Support
                        <img src="assets/images/1.0/png/call.png" />
                        <img src="assets/images/1.0/png/whatsappgreen.png" />
                        <a href="tel:+91 83 83 83 83 83">+91 83 83 83 83 83</a>
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="NextButtonForNewGSP text-right">
                      <button @click="NextTabClick(2)">Next <img src="assets/images/1.0/png/rightarrow.png" /></button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else-if="activeTab === 2">
                <div class="SetMiddlePortionForNewGSP">
                  <div class="row">
                    <div class="col-lg-12 col-12">
                      <div class="text-center forGSPLoginNewCenterText">
                        <p class="" v-if="eInvoiceStatusValue">Select<span> 'API registration'</span> from the main menu on the left side and click on <span>'Create API User'</span></p>
                        <p class="" v-else>Now click on <span>“Registration – For GSP”</span> to proceed</p>
                      </div>
                      <div class="BackgroundImagerightsideGSP SeondImageForOnlyDivWidth text-center">
                        <img src="assets/images/1.0/png/API_Registration.jpg" class="EInvoiceSecondImageClass" v-if="eInvoiceStatusValue"/>
                        <img src="assets/images/1.0/png/forgspbgimage.jpg" class="EWaySecondImageClass" v-else/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row MainportionFooterBottom align-items-center">
                  <div class="col-lg-6 col-12">
                    <div class="GSPLoginNewFooterPart">
                      <p>For any Help and Support
                        <img src="assets/images/1.0/png/call.png" />
                        <img src="assets/images/1.0/png/whatsappgreen.png" />
                        <a href="tel:+91 83 83 83 83 83">+91 83 83 83 83 83</a>
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="NextButtonForNewGSP text-right">
                      <button @click="NextTabClick(3)">Next <img src="assets/images/1.0/png/rightarrow.png" /></button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else-if="activeTab === 3">
                <div class="SetMiddlePortionForNewGSP">
                  <div class="row">
                    <div class="col-lg-12 col-12">
                      <div class="text-center forGSPLoginNewCenterText">
                        <p class="" v-if="eInvoiceStatusValue">Enter your monile number.Now, clickon <span>‘Send OTP’</span> <span>and ‘Verify OTP’ </span>yourself</p>
                        <p class="" v-else>Tap <span>‘Send OTP’</span> <span>and ‘Verify OTP’</span></p>
                      </div>
                      <div class="BackgroundImagerightsideGSP text-center">
                        <img src="assets/images/1.0/png/Verify_OTP.jpg" class="EInvoiceThirdImageClass" v-if="eInvoiceStatusValue" />
                        <img src="assets/images/1.0/png/verifymobilebgimage.jpg" class="EWayThirdImageClass" v-else/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row MainportionFooterBottom align-items-center">
                  <div class="col-lg-6 col-12">
                    <div class="GSPLoginNewFooterPart">
                      <p>For any Help and Support
                        <img src="assets/images/1.0/png/call.png" />
                        <img src="assets/images/1.0/png/whatsappgreen.png" />
                        <a href="tel:+91 83 83 83 83 83">+91 83 83 83 83 83</a>
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="NextButtonForNewGSP text-right">
                      <button @click="NextTabClick(4)">Next <img src="assets/images/1.0/png/rightarrow.png" /></button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else-if="activeTab === 4">
                <div class="SetMiddlePortionForNewGSP">
                  <div class="row">
                    <div class="col-lg-12 col-12">
                      <div class="text-center forGSPLoginNewCenterText">
                        <p class="" v-if="eInvoiceStatusValue">
                          Select <span>‘Through GSP’</span>, choose <span>‘Fynamics Techno Solution’</span>, create <span>Username and Password</span>
                        </p>
                        <p class="" v-else>
                          Click <span>‘Add New’</span>, select <span>‘GSP’</span>, choose
                          <span>‘Fynamics Techno Solution’</span>, create <span>Username and Password</span>
                        </p>
                      </div>
                      <div class="BackgroundImagerightsideGSP text-center">
                        <img src="assets/images/1.0/png/GST_Suvidha_Provider.jpg" class="EInvoiceFourthImageClass" v-if="eInvoiceStatusValue"/>
                        <img src="assets/images/1.0/png/gspproviderbgimage.jpg" class="EWayFourthImageClass" v-else/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row MainportionFooterBottom align-items-center">
                  <div class="col-lg-6 col-12">
                    <div class="GSPLoginNewFooterPart">
                      <p>For any Help and Support
                        <img src="assets/images/1.0/png/call.png" />
                        <img src="assets/images/1.0/png/whatsappgreen.png" />
                        <a href="tel:+91 83 83 83 83 83">+91 83 83 83 83 83</a>
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="NextButtonForNewGSP text-right">
                      <button @click="NextTabClick(5)">Next <img src="assets/images/1.0/png/rightarrow.png" /></button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else-if="activeTab === 5">
                <div class="SetMiddlePortionForNewGSP">
                  <div class="row">
                    <div class="col-lg-12 col-12">
                      <div class="text-center EnterGSPCredential">
                        <p class="" v-if="eInvoiceStatusValue">
                          <img src="assets/images/1.0/png/bulb.png" /> Use your GSP user credentials generated from
                          E-Invoice portal.
                        </p>
                        <p class="" v-else>
                          <img src="assets/images/1.0/png/bulb.png" /> Use your GSP user credentials generated from
                          E-Way portal.
                        </p>
                      </div>
                      <p class="AlertMessageErrorPart" v-if="showPopupCompanyGSTMove">
                        <span class="errorGSP text-center d-block">
                          <i class="fa fa-exclamation-circle" style="margin-right:5px;" aria-hidden="true"></i>  Please update the GST number in Tally first before GSP registration.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="SetInputPartGSPCredential">
                    <div class="row justify-content-center">
                      <div class="col-lg-4 col-12">
                        <div class="GSPNewGSPNewLoginPopupFormPage position-relative mb-4">
                          <span class="GSPNewLoginPopupFormLabelPage">GSTIN <span style="color:red;">*</span></span>
                          <input type="text" v-model="gstinneweWay" placeholder="" @keydown="disableArrowKeys"
                            @wheel="disableMouseWheelScroll" @input="checkLoginButtonState" :disabled="true"/>
                          <span class="errorGSP" v-if="gstinError">Invalid GSTIN format</span>
                        </div>

                        <div class="GSPNewGSPNewLoginPopupFormPage position-relative mb-4">
                          <span class="GSPNewLoginPopupFormLabelPage">GSP USERNAME <span
                              style="color:red;">*</span></span>
                          <input type="text" v-model="usernameValue" placeholder="" @keydown="disableArrowKeys"
                            @wheel="disableMouseWheelScroll" @input="checkLoginButtonState" :disabled="isInputDisabled" />
                        </div>

                        <div class="GSPNewGSPNewLoginPopupFormPage position-relative mb-4">
                          <span class="GSPNewLoginPopupFormLabelPage">GSP PASSWORD <span
                              style="color:red;">*</span></span>
                          <div class="input-wrapper-GSP-passwordPage">
                            <input :type="passwordVisibleeWayLogin ? 'text' : 'password'" v-model="passwordValue"
                              placeholder="" @keydown="disableArrowKeys" @wheel="disableMouseWheelScroll"
                              @input="checkLoginButtonState" :disabled="isInputDisabled"/>
                            <span class="eye-icon-gsp-passwordPage" @click="togglePasswordVisibility">
                              <i :class="passwordVisibleeWayLogin ? 'fa fa-eye' : 'fa fa-eye-slash'"></i>
                            </span>
                            <span class="errorGSP" v-if="ewayErrorFlag">{{ Eway_Error.UpdateGSPError }}</span>
                          </div>
                        </div>

                        <div class="GSPNewLoginButtonPage">
                          <button @click="LogineWayButton" :disabled="isButtonDisabledLogin || button_disabled === '1'" v-if="eInvoiceStatusValue">
                            Proceed to generate Einvoice
                            <span v-show="isLoadingeGSP" class="SpinColorWhite">
                              <i class="fa fa-spinner fa-spin"></i>
                            </span>
                          </button>
                          <button @click="LogineWayButton" :disabled="isButtonDisabledLogin || button_disabled === '1'" v-else>
                            Proceed to generate eWay bill
                            <span v-show="isLoadingeGSP" class="SpinColorWhite">
                              <i class="fa fa-spinner fa-spin"></i>
                            </span>
                          </button>
                          <!-- <button @click="OpenPopupCompanyGSTMove">
                            Open Popup
                          </button> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row MainportionFooterBottom">
                  <div class="col-lg-12 col-12 text-center">
                    <div class="GSPLoginNewFooterPart">
                      <p>For any Help and Support
                        <img src="assets/images/1.0/png/call.png" />
                        <img src="assets/images/1.0/png/whatsappgreen.png" />
                        <a href="tel:+91 83 83 83 83 83">+91 83 83 83 83 83</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-if="showPopupCompanyGSTMove" class="GSTComppanyMovepopupmainportion"> -->
      <!-- Popup Content (No Stop Here) -->
      <!-- <div class="popup-content-GSTCompany-Popup text-center"> -->
        <!-- <p>Please Add The Gst Number in the Tally</p> -->

        <!-- Buttons with @click.stop -->
        <!-- <button class="GSTMoveCompanybutton">Yes</button>
        <button @click="closePopupGSTMove" class="GSTMoveCompanyCancel">No</button> -->
      <!-- </div> -->

      <!-- Overlay to Close Popup -->
      <!-- <div class="GSTComppanyMovePopupOverlay" @click="closePopupGSTMove"></div>
    </div> -->
  </section>
</template>

<script>
import Api from "@/Api";
import GoogleAnalytics from "@/GoogleAnalytics";
export default {
  data() {
    return {
      parentUserId: localStorage.getItem("_parentUserId"),
      customerId: localStorage.getItem('customerId'),
      activeTab: 1,
      gstinneweWay: localStorage.getItem('companyGstNumber'),
      usernameValue: '',
      passwordValue: '',
      passwordVisibleeWayLogin: false,
      isButtonDisabledLogin: true,
      isLoadingeGSP: false,
      button_disabled: '0',
      gstinError: false,
      ewayErrorFlag: false,
      Eway_Error: {},
      showPopupCompanyGSTMove: false,
      isInputDisabled:false,
      eInvoiceStatusValue:localStorage.getItem("eInvoiceStatus") == "Yes"
    };
  },
  methods: {
    handleTabClick(tabNumber) {
      this.activeTab = tabNumber;
      if (tabNumber === 5) {
        const companyGstNumber = localStorage.getItem('companyGstNumber');
        if (!companyGstNumber) {
          this.showPopupCompanyGSTMove = true;
          this.isInputDisabled = true;
        } else {
          this.showPopupCompanyGSTMove = false;
          this.isInputDisabled = false;
        }
      }
      if(this.eInvoiceStatusValue){
          GoogleAnalytics.gsp_tab_button_einvoice(tabNumber);
        }
        else{
          GoogleAnalytics.GSP_Tab_Button_eWay(tabNumber);
        }

    },
    NextTabClick(tabNumber) {
      this.activeTab = tabNumber;
      if (tabNumber === 5) {
        const companyGstNumber = localStorage.getItem('companyGstNumber');
        if (!companyGstNumber) {
          this.showPopupCompanyGSTMove = true;
          this.isInputDisabled = true;
        } else {
          this.showPopupCompanyGSTMove = false;
          this.isInputDisabled = false;
        }
      }
      if(this.eInvoiceStatusValue){
          GoogleAnalytics.GSP_Next_Button_eInvoice(tabNumber);
        }
        else{
          GoogleAnalytics.GSP_Next_Button_eWay(tabNumber);
        }
    },
    OpenPopupCompanyGSTMove() {
      this.showPopupCompanyGSTMove = true;
    },
    closePopupGSTMove() {
      this.showPopupCompanyGSTMove = false;
    },
    handleKeyDown(event) {
      // Handle any generic key logic if needed
    },
    disableArrowKeys(event) {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
      }
    },
    disableMouseWheelScroll(event) {
      event.preventDefault();
    },
    checkLoginButtonState() {
      const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
      this.gstinError = !gstinRegex.test(this.gstinneweWay);
      this.isButtonDisabledLogin =
        !this.gstinneweWay || !this.usernameValue || !this.passwordValue || this.gstinError;
    },
    togglePasswordVisibility() {
      this.passwordVisibleeWayLogin = !this.passwordVisibleeWayLogin;
    },
    LogineWayButton() {
      this.isLoadingeGSP = true
      this.ewayErrorFlag = false;
      this.Eway_Error={};
      const data = {
        _userId: localStorage.getItem("customerId"),
        mainUserId: this.parentUserId ? this.parentUserId : this.customerId,
        company_id: localStorage.getItem("companyId"),
        requestFrom: "WEB",
        gstIn  : this.gstinneweWay,
        username: this.usernameValue,
        password: this.passwordValue,
        isEinvoice: localStorage.getItem('eInvoiceStatus') == 'Yes' ? true : false,
      // isStaging: true
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.UpdateGSP(data, headers)
      .then((response)=>{
        if(response.data.status == "200"){
          this.isLoadingeGSP = false
          this.ewayErrorFlag = false;
          window.location.href = '/dashboard';
        }
        else{
        this.Eway_Error.UpdateGSPError = response.data.message
        this.ewayErrorFlag = true;
        this.isLoadingeGSP = false
        }
      })
      .catch((err)=>{
       this.loading = false;
       this.Eway_Error.UpdateGSPError = err;
       this.ewayErrorFlag = true;
      })
      if(this.eInvoiceStatusValue){
        GoogleAnalytics.GSP_Login_eInvoice();
      }
      else{
        GoogleAnalytics.GSP_Login_eWay();
      }
    },
    getStepClass(stepNumber) {
      if (this.activeTab === stepNumber) return 'active';
      if (this.activeTab > stepNumber) return 'completed';
      return '';
    },
    isStepCompleted(stepNumber) {
      return this.activeTab > stepNumber;
    }
  },
  mounted() {
    const pageMain = document.querySelector('.page-main');
    if (pageMain) {
      pageMain.style.setProperty('background', '#FAFAFA', 'important');
    }
  },
  
  
};
</script>

<style>
.GSTComppanyMovepopupmainportion {
  position: relative;
}

.GSTComppanyMovepopupmainportion .GSTComppanyMovePopupOverlay {
  position: fixed;
  z-index: 9999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.521);
}

.popup-content-GSTCompany-Popup {
  position: fixed;
  z-index: 99999999999;
  background-color: #fff;
  padding: 20px;
  transition: 0.5s ease-in-out;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 5px;
  width: auto;
}

.popup-content-GSTCompany-Popup button {
  margin: 0 10px;
  padding: 5px 15px;
  border-radius: 3px;
}

button.GSTMoveCompanybutton {
  background: #d31919;
  color: #fff;
  border: 1px solid #d31919;
}

button.GSTMoveCompanyCancel {
  background: #ddd;
  color: #1a1a1a;
  border: 1px solid #ddd;
}
</style>
