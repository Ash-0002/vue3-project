<!-- eslint-disable prettier/prettier -->
/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section class="">
 
      <!------Start EWay Login------------->
      <div class="EWayLoginPageDesign">
        <div class="EWAyLoginPageMainPortion">
      <div class="EWayLoginPageCaption">
            <h4>Link your e-Waybill account with Livekeeping</h4>
            <p class="AlertMessageErrorPart" v-if="ShowErrorMessage">
              <span class="errorGSP text-center d-block">
                <i class="fa fa-exclamation-circle" style="margin-right:5px;" aria-hidden="true"></i>  Please update the number in Tally first before GSP registration.
              </span>
            </p>
            <div class="EWayPageLoginSteps">
              <ul>
                <li>
                  <label class="numberPage BgCustomGreen">1</label>
                  <h5 class="StepsHeadingGreenPage">Setup GSP User</h5>
                </li>
                <li>
                  <label class="numberPage BgLightGray">2</label>
                  <h5 class="StepsHeadingGrayPage">Enter GSP Credentials</h5>
                </li>
              </ul>
            </div>
            <div class="CarouselWithLoginPagePortionEWay">
              <div class="row">
                <div class="col-lg-6 col-12">
                  <div class="EWayLoginCarouselBoxPage">
                    <b-carousel id="carousel-1" v-model="slide" :interval="0" controls indicators
                      background="#ababab" img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;"
                      >
                      <b-carousel-slide caption="">
                        <div class="CarouselImageEWayPage">
                          <img src="/assets/images/1.0/png/EWayFirstImage.png" alt="image slot" />
                        </div>
                        <div class="slide-content-eWayPage">
                          <h5><span>Login</span> using NIC credential through the Portal </h5>
                          <p><a href="javascript:void(0)" @click="openPopup">https://ewaybillgst.gov.in/Login.aspx</a></p>
                        </div>
                      </b-carousel-slide>

                      <b-carousel-slide caption="">
                        <div class="CarouselImageEWayPage">
                          <img src="/assets/images/1.0/png/EWaySecondImage.png" alt="image slot" />
                        </div>
                        <div class="slide-content-eWayPage">
                          <h5>Click <span>‘Registration’</span> in the left menu, select For GSP</h5>
                        </div>
                      </b-carousel-slide>
                      <b-carousel-slide caption="">
                        <div class="CarouselImageEWayPage">
                          <img src="/assets/images/1.0/png/EWayThirdImage.png" alt="image slot" />
                        </div>
                        <div class="slide-content-eWayPage">
                          <h5>Tap <span>‘Send OTP’</span> enter the code sent to your registered mobile, and tap
                            <span>‘Verify OTP’</span>.</h5>
                        </div>
                      </b-carousel-slide>
                      <b-carousel-slide caption="">
                        <div class="CarouselImageEWay CarouselImageEWayPage">
                          <img src="/assets/images/1.0/png/EWayFourthImage.png" alt="image slot" />
                        </div>
                        <div class="slide-content-eWayPage">
                          <h5>Click <span>’Add New’</span> & Select <span>‘GSP’</span> then select <span>‘Fynamics
                              Techno Solution’</span></h5>
                        </div>
                      </b-carousel-slide>

                    </b-carousel>

                  </div>
                </div>
                <div class="col-lg-6 col-12">
                  <div class="EWayLoginFormBoxPage">
                    <div class="EWayLoginPopupFormPage position-relative mb-4">
                      <span class="EWayLoginPopupFormLabelPage">GSTIN</span>
                      <input type="text" v-model="gstinneweWay" placeholder="" @keydown="handleKeyDown"
                        v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll"
                        @input="checkLoginButtonState" :disabled="true"/>
                    <span class="error-validation" v-if="gstinError" >Invalid GSTIN format</span>

                    </div>
                    <div class="EWayLoginPopupFormPage position-relative mb-4">
                      <span class="EWayLoginPopupFormLabelPage">GSP USERNAME</span>
                      <input type="text" v-model="usernameValue" placeholder="" @keydown="handleKeyDown"
                        v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll"
                        @input="checkLoginButtonState" :disabled="isInputDisabled"/>
                      </div>
                      <div class="EWayLoginPopupFormPage position-relative mb-4">
                        <span class="EWayLoginPopupFormLabelPage">GSP PASSWORD</span>
                        <div class="input-wrapper-GSP-passwordPage">
                          <input :type="passwordVisibleeWayLogin ? 'text' : 'password'" v-model="passwordValue" placeholder=""
                          @keydown="handleKeyDown" v-on:keydown="disableArrowKeys" v-on:wheel="disableMouseWheelScroll"
                          @input="checkLoginButtonState" :disabled="isInputDisabled"/>
                          <span class="eye-icon-gsp-passwordPage" @click="togglePasswordVisibility">
                            <i :class="passwordVisibleeWayLogin ? 'fa fa-eye' : 'fa fa-eye-slash'"></i>
                          </span>
                          <span class="error-validation" v-if="ewayErrorFlag" >{{ Eway_Error.UpdateGSPError }}</span>
                        </div>
                      </div>
                    <div class="EWayLoginButtonPage">
                      <button  @click="LogineWayButton" class="" :disabled="isButtonDisabledLogin || this.button_disabled === '1'">
                        Save
                        <span v-show="isLoadingeGSP" class="SpinColorWhite"
                    ><i class="fa fa-spinner fa-spin"></i
                  ></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="BottomEWayllBillModalNeedHelp">
          <div class="BottomNeedHelpEWayBillCaption">
            <h5>Need help? <a href="tel:+91 83 83 83 83 83">+91 83 83 83 83 83</a></h5>
          </div>
        </div>
        <!-- <div class="CreateeWayBillButtonPopup text-center mt-2">
        <button @click="showLoadereGSP" type="button">GSP Loader</button>
      </div> -->
        <!-- <div v-if="isLoadingeGSP" class="loader-overlay-GSP">
          <div class="eWayGSPCaption">
        <div class="loadereGSPText"></div>
        <h5>Saving...</h5>
      </div>
      </div> -->
      </div>
    </div>
    <!------End EWay Login-------------->
   
  </section>
</template>

<script>
import Api from "@/Api";
export default {
  components: {
   
  },
  data() {
    return {
      parentUserId: localStorage.getItem("_parentUserId"),
      customerId: localStorage.getItem('customerId'),
      button_disabled:"1",
      gstinError: false,
      Eway_Error: {},
      ewayErrorFlag: false,
      UpdateGSPError: '',
      gstinneweWay: localStorage.getItem('companyGstNumber'),
      usernameValue: '',
      passwordValue: '',
      passwordVisibleeWayLogin: false,
      isButtonDisabledLogin: true,
      slide: 0,
      isLoadingeGSP: false,
      isInputDisabled:false,
      ShowErrorMessage:false,
    };
  },
  
  methods: {
    openPopup() {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const popupWidth = 450;
      const popupHeight = 650;

      const left = screenWidth - popupWidth; 
      const top = screenHeight - popupHeight;

      // Open the URL in a new popup window
      window.open(
        "https://ewaybillgst.gov.in/Login.aspx",
        "_blank",
        `noopener,noreferrer,width=${popupWidth},height=${popupHeight},left=${left},top=${top},scrollbars=yes,resizable=yes`
      );

    },


    handleKeyDown(event) {
      if (
        // event.key == "e" ||
        // event.key == "E" ||
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
        isEinvoice: this.eInvoiceStatusValue == 'Yes' ? true : false,
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

    },
    gstinRegex() {
      return /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
    },
    checkLoginButtonState() {
      // Enable button only if all inputs are filled
      this.isButtonDisabledLogin =
      !this.gstinneweWay || !this.usernameValue || !this.passwordValue;
      if (this.gstinneweWay && !this.gstinRegex().test(this.gstinneweWay)) {
        this.gstinError = true;
      this.button_disabled = "1"

      } else {
        this.gstinError = false;
      this.button_disabled = "0"

      }
    },
    togglePasswordVisibility() {
      this.passwordVisibleeWayLogin = !this.passwordVisibleeWayLogin;
    },
  },

  mounted() {
    if(localStorage.getItem('companyGstNumber')==""){
      this.isInputDisabled = true;
      this.ShowErrorMessage = true;
    }
  },
};
</script>

<style scoped>
.loader-overlay-GSP {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loadereGSPText {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin:auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.eWayGSPCaption {
    background: #ffffff00;
    padding: 20px;
    border-radius: 20px;
    text-align: center;
    margin: auto;
    transform:translate(80%, 0px);
}

.eWayGSPCaption h5 {
    font-size: 16px;
    margin-top: 20px;
    color: #fff;
}
</style>
