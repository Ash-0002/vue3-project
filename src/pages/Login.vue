/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<template>
  <section class="new-web-login">
    <div v-if="overlay_remove" class="login_overlay"></div>
    <div class="row align-items-center">
      <div class="col-lg-7 col-12 p-0">
        <div class="new-web-login-left-side text-center">
          <div class="new-web-login-image-top pt-4 pb-4">
            <img
              src="/assets/images/1.0/web-login/desktop-tally-mobile-web.svg"
              class="img-fluid"
              loading="lazy"
            />
          </div>
          <div class="new-web-login-image-main pb-4">
            <img
              src="/assets/images/1.0/web-login/new-banner-image.svg"
              class="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-12 p-0">
        <div class="new-web-login-right-side">
          <div class="new-web-login-right-logo">
            <a href="/"><img
              src="/assets/images/1.0/web-login/LivekeepingIndiamartLogo.svg"
              class="img-fluid"
              loading="lazy"
            /></a>
          </div>
          <div class="web-login-right-heading mt-4">
            <h3 class="mb-0">Login</h3>
            <p>Welcome to Livekeeping</p>
          </div>
          <div class="web-login-right-form mt-3">
            <form v-on:submit.prevent="loginForm" v-on:keyup.enter="loginForm">
              <div class="form-group">
                <label class="form-label web-login-right-lable"
                  >Mobile Number</label
                >
                <div class="web-login-right-input-main">
                  <div class="web-login-right-input-main-inner">
                    <span class="input-group-addon disabled">+91</span>
                    <input
                      name="mobile_number"
                      type="number"
                      id="mobile_code"
                      maxlength="10"
                      class="form-control web-login-right-inputinner"
                      placeholder="Mobile Number" 
                      v-model="form.mobile"
                      autocomplete="off" 
                      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    />
                  </div>
                  <div v-if="showError" class="login-error-message">Please enter a valid number</div>
                </div>
              </div>
              <div class="web-login-remember-input-box mt-3">
                <input type="checkbox" id="rememberme" v-model="lsRememberMe" @click="remember_click($event)" />
                <label for="rememberMe">Remember me</label>
              </div>
              <div class="web-login-proceed-button-div">
                <button
                  type="submit"
                  id="login_submit"
                  class="web-login-proceed-button-btn"
                  disabled
                  @click="loader"
                >
                  Proceed
                  <span v-show="isLoading"
                    ><i class="fa fa-spinner fa-spin"></i
                  ></span>
                </button>
              </div>
            </form>
          </div>

          <div class="web-login-right-form-otp mt-2" id="otp_box">
            <form id="otp_form" name="otp_form" v-on:submit.prevent="otpForm" v-on:keyup.enter="otpForm">
              <div class="form-group mb-1 web-login-right-side-otp-form-label">
                <label class="form-label pb-2" id="sentOtpLine"
                  >We have sent you OTP on your mobile number
                  <span class="display_block" id="sendOTPMobile">890****781</span></label
                >
              </div>

              <div class="web-login-otp-wrapper otp-wrapper otp-event">
                <div class="otp-container">
                  <input
                    type="tel"
                    id="otp-number-input-1"
                    class="otp-number-input otp"
                    maxlength="1"
                    autocomplete="off"
                  />
                  <input
                    type="tel"
                    id="otp-number-input-2"
                    class="otp-number-input otp"
                    maxlength="1"
                    autocomplete="off"
                  />
                  <input
                    type="tel"
                    id="otp-number-input-3"
                    class="otp-number-input otp"
                    maxlength="1"
                    autocomplete="off"
                  />
                  <input
                    type="tel"
                    id="otp-number-input-4"
                    class="otp-number-input otp"
                    maxlength="1"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="web-login-otp-timer" id="timer_otp">
                <p>
                  Resend OTP in <span id="timer" style="color:#1a1a1a;"><b></b></span>
                </p>
              </div>
              <div
                class="web-login-resend-otp"
                id="resend"
                style="display: none; padding-top: 10px"
              >
                <a href="#" id="resendButton" v-on:click="resendotp"
                  >Resend OTP</a
                >
              </div>

              <div
                class="alert alert-danger fade show alert-dismissible alert_otp"
                role="alert"
                style="display: none"
                id="otpErrorMessage"
              >
                <strong><i class="fa fa-info" aria-hidden="true"></i></strong>
                <span>Invalid or Expired OTP.</span>
              </div>

              <div class="form-group text-center">
                <button
                  type="submit"
                  id="otp_submit"
                  class="web-login-login-button"
                  @click="loaderlogin"
                >
                  Login
                  <span v-show="isLoading"
                    ><i class="fa fa-spinner fa-spin"></i
                  ></span>
                </button>
              </div>
            </form>
          </div>

          <div class="web-login-secure-main mt-3">
            <ul>
              <li>
                <img
                  src="/assets/images/1.0/web_images/secure.png"
                  width="15"
                  height="18"
                  alt="secure and certified"
                  class="img-fluid mr-1"
                />
                100% secure
              </li>
              <li>
                <img
                  src="/assets/images/1.0/web_images/iso.png"
                  width="30"
                  height="26"
                  alt="ISO certified"
                  class="img-fluid mr-1"
                />
                ISO 27701 & 27001 Certified
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from "moment";
import Api from "@/Api";
import GoogleAnalytics from "@/GoogleAnalytics";
import MetaInfo from '@/components/MetaInfo.vue';
import CryptoJS from 'crypto-js';
import Common from "@/Common";
export default {
  name: "Tally on Web | Login",
  components: {
    MetaInfo
  },
  data() {
    return {
      overlay_remove: true,
      isLoading: false,
      showError: false,
      delayLoading: 1,
      form: {
        mobile: "",
        loading: true,
      },
      lsRememberMe: true,
      object_id: "",
      source: "",
      remember: "0",
      mobile_number: "",
      error: [],
      authToken: "",
      webauthtoken: "",
      loginId: "",
      loginflag: 0,
      company_id: "",
      key_value: 0,
      faild_otp_count: 0,
      sf_type: false,
      indiamart_mobile: "",
      secretKey: process.env.VUE_APP_SECRET_KEY,
      decryptedUserId: '',
    };
  },
  created() {
    this.mobile_number = localStorage.getItem("mobile");
  },
 
  watch: {
  'form.mobile'(newVal) {
    if (!newVal) {
      this.showError = false; // Hide the error message when the value is cleared
    }
  }
},

  methods: {
    // Decrypting function
// decryptUserId(encryptedUserId) {
//     // Parse the Hexadecimal string back to a WordArray
//     const encryptedWordArray = CryptoJS.enc.Hex.parse(encryptedUserId);

//     // Decrypt the WordArray using the secret key
//     const decrypted = CryptoJS.AES.decrypt(
//         { ciphertext: encryptedWordArray },
//         this.secretKey
//     );

//     // Convert the decrypted data to a UTF-8 string
//     const userId = decrypted.toString(CryptoJS.enc.Utf8);

//     // Log the decrypted user ID for debugging
//     console.log('Decrypted User ID:', userId, "bytes", encryptedWordArray, "encryptedUserId", encryptedUserId);

//     // Return the decrypted user ID
//     return userId;
// },
decryptUserId(encryptedUserId) {
    // Reverse URL-safe changes
    const originalEncryptedUserId = this.reverseUrlSafe(encryptedUserId);

    try {
        // Decrypt the user ID
        console.log("this.secretKey",this.secretKey);
        const bytes = CryptoJS.AES.decrypt(originalEncryptedUserId, this.secretKey);
        const userIdDecrypted = bytes.toString(CryptoJS.enc.Utf8);

        // Check if decryption is successful
        if (!userIdDecrypted) {
            throw new Error('Decryption failed: Malformed UTF-8 data');
        }

        console.log('Decrypted User ID:', userIdDecrypted);
        return userIdDecrypted;
    } catch (error) {
        console.error('Error during decryption:', error.message);
        return null;
    }
},

// Function to reverse the URL-safe changes
 reverseUrlSafe(encryptedString) {
    return encryptedString
        .replace(/_/g, '/')  // Replace '_' back to '/'
        .replace(/-/g, '+')  // Replace '-' back to '+'
        .replace(/'/g, '=');  // Add padding if necessary
},
    loader() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, this.delayLoading * 500);
    },
    loaderlogin() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, this.delayLoading * 500);
    },
    
    loginForm(e) {
     
     if (!/^[6-9]\d{9}$/.test(this.form.mobile)) {
       this.showError = true;
       this.isLoading = false;
       $("#login_submit").attr('disabled');
     } else {
       e.preventDefault();
       const data = {
         mobile: this.form.mobile,
         countryCode: "+91",
         requestFrom: "WEB",
         customerSource: this.$route.query.utm_source,
       };
       const headers = {
         "Access-Control-Allow-Origin": "*",
         "Content-Type": "application/json",
       };
       GoogleAnalytics.login_page_proceed_button(this.form.mobile);
       Api.loginWithOtpgo(data, headers)
         .then((response) => {
           if (response.data.status == "200") {
             this.isLoading = false;
             this.mobile_number = this.form.mobile;
             this.country_code = "+91";
             $("#timer_otp").show();
             $("#login_div").hide();
             $("#otp_div").show();
             myTimer(59);
             $("#login_submit").hide();
             $("#otp_box").show();
             $("#mobile_code").attr("disabled", "disabled");
             $("#rememberme").attr("disabled", "disabled");
             $("#sendOTPMobile").text(
               "+91" +
               " " +
               this.form.mobile.slice(0, 3) +
               "****" +
               this.form.mobile.slice(-3)
             );
             localStorage.setItem("mobile", this.form.mobile);
             localStorage.setItem("countryCode", "+91");
           } else {
             $("#loginErrorMessage").show();
             GoogleAnalytics.Login_page_Failed_screen(this.form.mobile);
           }
           this.page = response.data;
           this.loginId = response.data.data._userId;
           this.loading = false;
         })
         .catch(() => {
           this.loading = false;
         });

       GoogleAnalytics.login_page_success(this.form.mobile);
     }

   },
   resendotp(e) {
     e.preventDefault();
     if (this.form.mobile == "") {
       this.form.mobile = localStorage.getItem("join_phone");
     }
     const data = {
       mobile: this.form.mobile,
       countryCode: "+91",
       requestFrom: "WEB",
     };
     const headers = {
       "Access-Control-Allow-Origin": "*",
       "Content-Type": "application/json",
     };
     Api.loginWithOtpgo(data, headers)
       .then((response) => {
         if (response.data.status == "200") {
           $("#resend").hide();
           $("#timer_otp").show();
           myTimer(59);
         }
         this.page = response.data;
         this.loginId = response.data.data._userId;
         this.loading = false;
       })
       .catch(() => {
         this.loading = false;
       });

     GoogleAnalytics.Otp_loginpage_Resend_screen(this.form.mobile);
   },

   otpForm(e) {
     e.preventDefault();
     if (this.loginId == "") {
       this.loginId = localStorage.getItem("join_loginId");
     }

     const data = {
       _userId: this.loginId,
       otp:
         $("#otp-number-input-1").val() +
         $("#otp-number-input-2").val() +
         $("#otp-number-input-3").val() +
         $("#otp-number-input-4").val(),
       requestFrom: "WEB",
     };
     const headers = {
       "Access-Control-Allow-Origin": "*",
       "Content-Type": "application/json",
       token: localStorage.getItem("webAuthToken"),
     };
     Api.verifyOtpgo(data, headers)
       .then((response) => {
         if (response.data.status == "200") {
           localStorage.setItem(
             "webAuthToken",
             response.data.data.token
           );

           localStorage.setItem("customerId", this.loginId);
           localStorage.setItem("dashbordStatus", "0");
           localStorage.setItem("amountformate", "0.00");
           const data = {
             _userId: this.loginId,
             requestFrom: "WEB",
           };
           const headers = {
             "Access-Control-Allow-Origin": "*",
             "Content-Type": "application/json",
             token: localStorage.getItem("webAuthToken"),
           };
           Api.getcustomerDetailsGo(data, headers)

             .then((response) => {
               if (response.data.message == "AUTHENTICATION_FAILED") {
                 localStorage.clear();
                 window.location.href = "/";
               } else {
                 if (
                   moment(String(response.data.data.endDate)).format(
                     "yyyy-MM-DD"
                   ) === "2099-01-01"
                 ) {
                   localStorage.setItem("dashbordPopup", "1");
                 } else {
                   localStorage.setItem("dashbordPopup", "0");
                 }
                 localStorage.setItem(
                   "subUsers",
                   response.data.data.subUsers
                 );
                 localStorage.setItem("selectedTheme",response.data.data.selectedTheme);
                 localStorage.setItem(
                   "customerfirstName",
                   response.data.data.firstName
                 );
                 localStorage.setItem(
                   "customerlastName",
                   response.data.data.lastName
                 );
                 localStorage.setItem(
                   "customerfullName",
                   response.data.data.name
                 );
                 localStorage.setItem(
                   "customeremail",
                   response.data.data.email
                 );
                 localStorage.setItem(
                   "customermobile",
                   response.data.data.mobile
                 );
                 localStorage.setItem(
                   "trialStatus",
                   response.data.data.trialStatus
                 );
                 localStorage.setItem(
                   "customerlastSyncDate",
                   response.data.data.lastSyncDate
                 );

                 localStorage.setItem("gtagisPaid", response.data.data.isPaid);
                 localStorage.setItem(
                   "gtagtrialStatus",
                   response.data.data.trialStatus
                 );
                 localStorage.setItem(
                   "gtagstartDate",
                   response.data.data.startDate
                 );
                 localStorage.setItem(
                   "gtagendDate",
                   response.data.data.endDate
                 );
                 localStorage.setItem(
                   "userCurrencyId",
                   response.data.data.userCurrencyId
                 );
              
                

                 if (response.data.data.parentUserId == "") {
                   if (
                     response.data.data.customerStatus
                       .toLowerCase()
                       .includes("converted") ||
                     response.data.data.customerStatus
                       .toLowerCase()
                       .includes("installation done")
                   ) {
                     localStorage.setItem("isPaid", "1");
                   }
                   localStorage.setItem(
                     "customerStatus",
                     response.data.data.customerStatus
                   );
                 } else {
                   localStorage.setItem("parentCustomerId", response.data.data.parentUserId);
                   const data = {
                     _userId: response.data.data.parentUserId,
                     requestFrom: "WEB",
                     parentUserId: localStorage.getItem("customerId"),
                   };
                   const headers = {
                     "Access-Control-Allow-Origin": "*",
                     "Content-Type": "application/json",
                     "token": localStorage.getItem('webAuthToken')
                   };
                   Api.getcustomerDetailsGo(data, headers)
                     .then(response1 => {
                       if (response1.data.message == "AUTHENTICATION_FAILED") {
                         localStorage.clear();
                         window.location.href = '/';
                       } else {
                         localStorage.setItem(
                           "subUsers",
                           response.data.data.subUsers
                         );
                         if (response1.data.data.customerStatus.toLowerCase().includes('converted') || response1.data.data.customerStatus.toLowerCase().includes('installation done')) {
                           localStorage.setItem("isPaid", "1");
                         }
                         localStorage.setItem("customerStatus", response1.data.data.customerStatus);
                       }
                     })
                     .catch(() => {
                       this.loading = false;
                     });
                 }

                 if (
                   response.data.data.customerStatus == "Open" ||
                   response.data.data.customerStatus == "Contacted"
                 ) {
                   localStorage.setItem("isInstalled", "");
                 } else {
                   localStorage.setItem("isInstalled", "1");
                 }

               }
             })
             .catch(() => {
               this.loading = false;
             });

           this.getCompany();
           gtag("config", "G-FLV2C8MTDJ", {
             user_id: localStorage.getItem("customerId"),
           });

           localStorage.setItem(
             "isRegistered",
             response.data.data.isRegistered
           );

           this.new_loading_old = true;
           setTimeout(() => {
             if(localStorage.getItem("selectedTheme") == "2.0"){
               if(window.innerWidth <= 991){
                 window.location.href = "/dashboard";
               }else{
                //  window.location.href = "/tally-style";
                window.location.href = "/dashboard";
               }
             }else{
               if (response.data.data.isRegistered == false) {
                 localStorage.setItem("checkregisterstatus", "1");
                 localStorage.setItem("registerStatus", 1);
                 window.location.href = "/dashboard";
               } else {
                 localStorage.setItem("checkregisterstatus", "1");
                 localStorage.setItem("registerStatus", 1);
                 window.location.href = "/dashboard";
               }
             }
             
           }, 500);
         } else {
           this.faild_otp_count += 1;
           $("#otpErrorMessage").show();
           GoogleAnalytics.Otp_loginpage_Failed_screen(this.form.mobile);
           if (this.faild_otp_count >= "3") {
             $("#timer_otp").hide();
             $("#resend").show();
             this.faild_otp_count = 0;
           }
         }
         this.otp = response.data;
         this.loading = false;
       })
       .catch(() => {
         this.loading = false;
       });
   },
   getCompany(e) {
     const data = {
       _userId: localStorage.getItem("customerId"),
       requestFrom: "WEB",
     };
     const headers = {
       "Access-Control-Allow-Origin": "*",
       "Content-Type": "application/json",
       token: localStorage.getItem("webAuthToken"),
     };
     Api.getCompany(data, headers)
       .then((response) => {
         if (response.data.message == "AUTHENTICATION_FAILED") {
           localStorage.removeItem("webAuthToken");
           this.$router.go();
         } else {
           if (this.$route.query.c !== undefined) {
             this.company_id =this.decryptUserId(this.$route.query.c);
             for (let [key, value] of Object.entries(
               response.data.data.list
             )) {
               if (value.companyData.id == this.company_id) {
                 this.key_value = key;
               }
             }
           }
           if (response.data.data.list[this.key_value]._parentUserId != "") {
             const data = {
               _userId:
                 response.data.data.list[this.key_value]._parentUserId,
               requestFrom: "WEB",
             };
             const headers = {
               "Access-Control-Allow-Origin": "*",
               "Content-Type": "application/json",
               token: localStorage.getItem("webAuthToken"),
             };
             Api.getcustomerDetailsGo(data, headers)
               .then((response1) => {
                 if (response1.data.message == "AUTHENTICATION_FAILED") {
                   localStorage.clear();
                   window.location.href = "/";
                 } else {
                   if (
                     response1.data.data.customerStatus
                       .toLowerCase()
                       .includes("converted") ||
                     response1.data.data.customerStatus
                       .toLowerCase()
                       .includes("installation done")
                   ) {
                     localStorage.setItem("isPaid", "1");
                   }
                   localStorage.setItem(
                     "customerStatus",
                     response1.data.data.customerStatus
                   );
                 }
               })
               .catch(() => {
                 this.loading = false;
               });
           }
           if (localStorage.getItem("companyId") == null) {
             localStorage.setItem(
               "companyId",
               response.data.data.list[this.key_value].companyData.id
             );
             localStorage.setItem(
               "_parentUserId",
               response.data.data.list[this.key_value]._parentUserId
             );
             localStorage.setItem("companyType", "");
             localStorage.setItem(
               "lastSyncDate",
               moment(
                 String(
                   response.data.data.list[this.key_value].companyData.lastSyncDate
                 )
               ).format("DD MMM yyyy h:mm A")
             );
             $("#last_date").text(
               "Last Sync :" +
               moment(
                 String(
                   response.data.data.list[this.key_value].companyData.lastSyncDate
                 )
               ).format("DD MMM yyyy h:mm A")
             );

             localStorage.setItem(
               "StrSDate",
               response.data.data.list[this.key_value].companyData.startFrom
             );
             localStorage.setItem(
               "StrEDate",
               response.data.data.list[this.key_value].companyData.endDate
             );
           } else {

             $("#last_date").text(
               "Last Sync: " + localStorage.getItem("lastSyncDate")
             );
           }

           var StrSDate = localStorage.getItem("StrSDate");
           var StrEDate = localStorage.getItem("StrEDate");

           var StrGetStartDay = moment(StrSDate).format("D");
           var StrGetStartMonthNumber = moment(StrSDate).format("MM");
           var StrGetStartMonthWord = moment(StrSDate).format("MMM");

           var StrGetEndDay = moment(StrEDate).format("D");
           var StrGetEndMonthNumber = moment(StrEDate).format("MM");
           var StrGetEndMonthWord = moment(StrEDate).format("MMM");

           var yearString = moment().format("yyyy");
           var monthString = moment().format("MM");
           var dayString = moment().format("D");

           if (parseInt(StrGetStartMonthNumber) < monthString || (parseInt(StrGetStartMonthNumber) == monthString &&  parseInt(StrGetStartDay) <= dayString)) {
             if (
               parseInt(StrGetStartMonthNumber) == 1 &&
               parseInt(StrGetStartDay) == 1
             ) {
               this.Start_Date = moment(
                 String(
                   StrGetStartMonthNumber +
                   "-" +
                   StrGetStartDay +
                   "-" +
                   moment().format("yyyy")
                 ),
                 "MM-DD-YYYY"
               ).format("YYYY-MM-DD");
               this.End_Date = moment(
                 String(
                   StrGetEndMonthNumber +
                   "-" +
                   StrGetEndDay +
                   "-" +
                   moment().format("yyyy")
                 ),
                 "MM-DD-YYYY"
               ).format("YYYY-MM-DD");
               localStorage.setItem("date_range_start_date", this.Start_Date);
               localStorage.setItem(
                 "first_date_range_start_date",
                 this.Start_Date
               );
               localStorage.setItem("date_range_end_date", this.End_Date);
               localStorage.setItem(
                 "first_date_range_end_date",
                 this.End_Date
               );
             } else {
               this.Start_Date = moment(
                 String(
                   StrGetStartMonthNumber +
                   "-" +
                   StrGetStartDay +
                   "-" +
                   moment().format("yyyy")
                 ),
                 "MM-DD-YYYY"
               ).format("YYYY-MM-DD");
               this.End_Date = moment(
                 String(
                   StrGetEndMonthNumber +
                   "-" +
                   StrGetEndDay +
                   "-" +
                   moment().add(1, "Y").format("yyyy")
                 ),
                 "MM-DD-YYYY"
               ).format("YYYY-MM-DD");
               localStorage.setItem("date_range_start_date", this.Start_Date);
               localStorage.setItem(
                 "first_date_range_start_date",
                 this.Start_Date
               );
               localStorage.setItem("date_range_end_date", this.End_Date);
               localStorage.setItem(
                 "first_date_range_end_date",
                 this.End_Date
               );
             }
           } else {
             this.Start_Date = moment(
               String(
                 StrGetStartMonthNumber +
                 "-" +
                 StrGetStartDay +
                 "-" +
                 moment().add(-1, "Y").format("yyyy")
               ),
               "MM-DD-YYYY"
             ).format("YYYY-MM-DD");
             this.End_Date = moment(
               String(
                 StrGetEndMonthNumber +
                 "-" +
                 StrGetEndDay +
                 "-" +
                 moment().format("yyyy")
               ),
               "MM-DD-YYYY"
             ).format("YYYY-MM-DD");

             localStorage.setItem("date_range_start_date", this.Start_Date);
             localStorage.setItem(
               "first_date_range_start_date",
               this.Start_Date
             );

             localStorage.setItem("date_range_end_date", this.End_Date);
             localStorage.setItem("first_date_range_end_date", this.End_Date);
           }

           for (let [key, value] of Object.entries(
             response.data.data.list
           )) {

             response.data.data.list[key].companyData.companyDetails.lastSyncDatenew =
               "Last Sync :" +
               moment(
                 String(response.data.data.list[key].companyData.companyDetails.lastSyncDate)
               ).format("DD MMM yyyy h:mm A");
           }
           this.company = response.data.data.list;
         }

         if (
           localStorage.getItem("companyType") == "DEMO" ||
           localStorage.getItem("companyType") == "MAIN"
         ) {
           localStorage.setItem("gtagisMainUser", true);
         } else {
           localStorage.setItem("gtagisMainUser", false);
         }

         localStorage.setItem(
           "companytype_value",
           response.data.data.companyDetails[this.key_value].companyType
         );
       })
       .catch(() => {

         this.loading = false;
       });
   },
   remember_click(event) {
     if (event.target.checked) {
       this.remember = "1";
       localStorage.setItem("remember", this.remember);
     } else {
       this.remember = "0";
       localStorage.setItem("remember", this.remember);
     }
   },
    
  },
  mounted() {
    if(!this.$route.query.u){
      this.overlay_remove = false;
    }
    GoogleAnalytics.LoginPageScreen_Listing();
    this.$emit('update-meta', { title: 'Tally on Web | Login', description: 'Login to Tally on Web to access your Tally data from anywhere, anytime.' });
    this.$forceUpdate();
    localStorage.setItem("gtagdeviceBrowser", this.$browserDetect.meta.name);
    localStorage.setItem("gtagdeviceVersion", this.$browserDetect.meta.version);

    if (this.$route.query.u !== undefined) {
      // localStorage.clear();
      this.object_id = this.decryptUserId(this.$route.query.u);
      this.source = this.$route.query.s;
        if (this.source == "sf") {
          this.sf_type = true;
        } else {
          this.sf_type = false;
        }
      const data = {
          _userId: this.object_id,
          requestFrom: "WEB",
          sourceOfLead: this.source,
          isDebug: this.sf_type,
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.initializeWebLogingo(data, headers)
        .then((response1) => {
          console.log("get response", response1)
          const responseStatus = Common.getStatusForActionFailed(
            response1.data.status
          );
          if (responseStatus == "200") {
              console.log("responseStatus get response", response1.data.status, responseStatus)
              const data1 = {
                _userId: response1.data.data._userId,
                requestFrom: "WEB",
              };
              const headers1 = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                token: response1.data.data.webAuthToken,
              };
              Api.getcustomerDetailsGo(data1, headers1)
                .then((response) => {
                  const responseStatus1 = Common.getStatusForActionFailed(
                    response.data.status
                  );
                  if (responseStatus1 == "200") {

                    localStorage.clear();
                    localStorage.setItem("source", this.source);
                    localStorage.setItem("mobile", response.data.data.mobile);
                    localStorage.setItem(
                      "countryCode",
                      response.data.data.countryCode
                    );
                    localStorage.setItem(
                      "subUsers",
                      response.data.data.subUsers
                    );

                    localStorage.setItem(
                      "webAuthToken",
                      response.data.data.webAuthToken
                    );
                    localStorage.setItem(
                      "isFirstTimeLogin",
                      response.data.data.isFirstTimeLogin
                    );
                    localStorage.setItem("customerId", response.data.data.customerId);
                    localStorage.setItem("dashbordStatus", "0");
                    localStorage.setItem("amountformate", "0.0"); // 0.00 for 154.21
                    if (
                      moment(String(response.data.data.endDate)).format(
                        "yyyy-MM-DD"
                      ) === "2099-01-01"
                    ) {
                      localStorage.setItem("dashbordPopup", "1");
                    } else {
                      localStorage.setItem("dashbordPopup", "0");
                    }

                    localStorage.setItem(
                      "customerfirstName",
                      response.data.data.firstName
                    );
                    localStorage.setItem(
                      "customerlastName",
                      response.data.data.lastName
                    );
                    localStorage.setItem("customerfullName", response.data.data.name);
                    localStorage.setItem("customeremail", response.data.data.email);
                    localStorage.setItem("customermobile", response.data.data.mobile);

                    localStorage.setItem("gtagisPaid", response.data.data.isPaid);
                    localStorage.setItem(
                      "gtagtrialStatus",
                      response.data.data.trialStatus
                    );
                    localStorage.setItem(
                      "gtagstartDate",
                      response.data.data.startDate
                    );
                    localStorage.setItem("gtagendDate", response.data.data.endDate);
                    localStorage.setItem(
                      "userCurrencyId",
                      response.data.data.userCurrencyId
                    );

                    if (
                      response.data.data.symbol == "" ||
                      response.data.data.symbol == "undefined"
                    ) {
                      localStorage.setItem("symbol", "₹");
                    } else {
                      localStorage.setItem(
                        "symbol",
                        response.data.data.currencySymbol
                      );
                    }

                    if (response.data.data.parentUserId == "") {
                      if (
                        response.data.data.customerStatus
                          .toLowerCase()
                          .includes("converted") ||
                        response.data.data.customerStatus
                          .toLowerCase()
                          .includes("installation done")
                      ) {
                        localStorage.setItem("isPaid", "1");
                      }
                      localStorage.setItem(
                        "customerStatus",
                        response.data.data.customerStatus
                      );
                    } else {
                      localStorage.setItem(
                        "parentCustomerId",
                        response.data.data.parentUserId
                      );
                      const data = {
                        _userId: response.data.data.parentUserId,
                        requestFrom: "WEB",
                        parentUserId: localStorage.getItem("customerId"),
                      };
                      const headers = {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                        token: localStorage.getItem("webAuthToken"),
                      };
                      Api.getcustomerDetailsGo(data, headers)

                        .then((response1) => {
                          if (response1.data.message == "AUTHENTICATION_FAILED") {
                            localStorage.clear();
                            window.location.href = "/";
                          } else {
                            if (
                              response1.data.data.customerStatus
                                .toLowerCase()
                                .includes("converted") ||
                              response1.data.data.customerStatus
                                .toLowerCase()
                                .includes("installation done")
                            ) {
                              localStorage.setItem("isPaid", "1");
                            }
                            localStorage.setItem(
                              "customerStatus",
                              response1.data.data.customerStatus
                            );
                          }
                        })
                        .catch(() => {
                          this.loading = false;
                        });
                    }
                    if (
                      response.data.data.customerStatus == "Open" ||
                      response.data.data.customerStatus == "Contacted"
                    ) {
                      localStorage.setItem("isInstalled", "");
                    } else {
                      localStorage.setItem("isInstalled", "1");
                    }

                    localStorage.setItem(
                      "isRegistered",
                      response.data.data.isRegistered
                    );
                    if (response.data.data.isRegistered == false) {
                      localStorage.setItem("checkregisterstatus", "1");
                      localStorage.setItem("registerStatus", 1);
                    } else {
                      localStorage.setItem("checkregisterstatus", "1");
                      localStorage.setItem("registerStatus", 1);
                    }

                    this.getCompany();
                    setTimeout(() => {
                           if(this.source == 'allusers' && localStorage.getItem('_parentUserId') == ''){
                        window.location.href = "/allusers"
                      }
                      else{
                        window.location.href = "/dashboard";
                      }
                    }, 500);

                  }
                })
                .catch((err) => {
                  Common.getStatusForActionFailed(err.response.status);
                  this.loading = false;
                });
            }



          })
          .catch(() => {
            this.loading = false;
          });
    }
   
    console.log("route", this.$route.query.m);
    if (this.$route.query.t !== undefined) {
      localStorage.clear();
      this.object_id = this.$route.query.t.slice(-24);
      this.source = this.$route.query.s;
      if (this.object_id !== "") {
        this.new_loading = true;
        if (this.source == "sf") {
          this.sf_type = true;
        } else {
          this.sf_type = false;
        }
        const data = {
          _userId: this.object_id,
          requestFrom: "WEB",
          sourceOfLead: this.source,
          isDebug: this.sf_type,
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };

        Api.initializeWebLogingo(data, headers)
          .then((response1) => {
            const responseStatus = Common.getStatusForActionFailed(
              response1.data.status
            );
            if (responseStatus == "200") {
              const data1 = {
                _userId: response1.data.data._userId,
                requestFrom: "WEB",
              };
              const headers1 = {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                token: response1.data.data.webAuthToken,
              };
              Api.getcustomerDetailsGo(data1, headers1)
                .then((response) => {
                  const responseStatus1 = Common.getStatusForActionFailed(
                    response.data.status
                  );
                  if (responseStatus1 == "200") {

                    localStorage.clear();
                    localStorage.setItem("source", this.source);
                    localStorage.setItem("mobile", response.data.data.mobile);
                    localStorage.setItem(
                      "countryCode",
                      response.data.data.countryCode
                    );
                    localStorage.setItem(
                      "subUsers",
                      response.data.data.subUsers
                    );

                    localStorage.setItem(
                      "webAuthToken",
                      response.data.data.webAuthToken
                    );
                    localStorage.setItem(
                      "isFirstTimeLogin",
                      response.data.data.isFirstTimeLogin
                    );
                    localStorage.setItem("customerId", response.data.data.customerId);
                    localStorage.setItem("dashbordStatus", "0");
                    localStorage.setItem("amountformate", "0.0"); // 0.00 for 154.21

                    if (
                      moment(String(response.data.data.endDate)).format(
                        "yyyy-MM-DD"
                      ) === "2099-01-01"
                    ) {
                      localStorage.setItem("dashbordPopup", "1");
                    } else {
                      localStorage.setItem("dashbordPopup", "0");
                    }

                    localStorage.setItem(
                      "customerfirstName",
                      response.data.data.firstName
                    );
                    localStorage.setItem(
                      "customerlastName",
                      response.data.data.lastName
                    );
                    localStorage.setItem("customerfullName", response.data.data.name);
                    localStorage.setItem("customeremail", response.data.data.email);
                    localStorage.setItem("customermobile", response.data.data.mobile);

                    localStorage.setItem("gtagisPaid", response.data.data.isPaid);
                    localStorage.setItem(
                      "gtagtrialStatus",
                      response.data.data.trialStatus
                    );
                    localStorage.setItem(
                      "gtagstartDate",
                      response.data.data.startDate
                    );
                    localStorage.setItem("gtagendDate", response.data.data.endDate);
                    localStorage.setItem(
                      "userCurrencyId",
                      response.data.data.userCurrencyId
                    );

                    if (
                      response.data.data.symbol == "" ||
                      response.data.data.symbol == "undefined"
                    ) {
                      localStorage.setItem("symbol", "₹");
                    } else {
                      localStorage.setItem(
                        "symbol",
                        response.data.data.currencySymbol
                      );
                    }

                    if (response.data.data.parentUserId == "") {
                      if (
                        response.data.data.customerStatus
                          .toLowerCase()
                          .includes("converted") ||
                        response.data.data.customerStatus
                          .toLowerCase()
                          .includes("installation done")
                      ) {
                        localStorage.setItem("isPaid", "1");
                      }
                      localStorage.setItem(
                        "customerStatus",
                        response.data.data.customerStatus
                      );
                    } else {
                      localStorage.setItem(
                        "parentCustomerId",
                        response.data.data.parentUserId
                      );
                      const data = {
                        _userId: response.data.data.parentUserId,
                        requestFrom: "WEB",
                        parentUserId: localStorage.getItem("customerId"),
                      };
                      const headers = {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                        token: localStorage.getItem("webAuthToken"),
                      };
                      Api.getcustomerDetailsGo(data, headers)

                        .then((response1) => {
                          if (response1.data.message == "AUTHENTICATION_FAILED") {
                            localStorage.clear();
                            window.location.href = "/";
                          } else {
                            if (
                              response1.data.data.customerStatus
                                .toLowerCase()
                                .includes("converted") ||
                              response1.data.data.customerStatus
                                .toLowerCase()
                                .includes("installation done")
                            ) {
                              localStorage.setItem("isPaid", "1");
                            }
                            localStorage.setItem(
                              "customerStatus",
                              response1.data.data.customerStatus
                            );
                          }
                        })
                        .catch(() => {
                          this.loading = false;
                        });
                    }
                    if (
                      response.data.data.customerStatus == "Open" ||
                      response.data.data.customerStatus == "Contacted"
                    ) {
                      localStorage.setItem("isInstalled", "");
                    } else {
                      localStorage.setItem("isInstalled", "1");
                    }

                    localStorage.setItem(
                      "isRegistered",
                      response.data.data.isRegistered
                    );
                    if (response.data.data.isRegistered == false) {
                      localStorage.setItem("checkregisterstatus", "1");
                      localStorage.setItem("registerStatus", 1);
                    } else {
                      localStorage.setItem("checkregisterstatus", "1");
                      localStorage.setItem("registerStatus", 1);
                    }

                    this.getCompany();
                    setTimeout(() => {
                           if(this.source == 'allusers' && localStorage.getItem('_parentUserId') == ''){
                        window.location.href = "/allusers"
                      }
                      else{
                        window.location.href = "/dashboard";
                      }
                    }, 500);

                  }
                })
                .catch(() => {
                  Common.getStatusForActionFailed(err.data.status);
                  this.loading = false;
                });
            }



          })
          .catch(() => {
            this.loading = false;
          });
      }
    }

    if (this.$route.query.m !== undefined && this.$route.query.m !== "") {
      this.indiamart_mobile = this.$route.query.m;
      if (this.$route.query.utm_source == "indiamart") {
        const data = {
          requestFrom: "WEB",
          mobile: this.indiamart_mobile,
          countryCode: "+91",
          customerSource: this.$route.query.utm_source,
          IM_id: this.$route.query.id,
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        };
        Api.addLead(data, headers)
          .then((response) => {
            if (response.data.message == "AUTHENTICATION_FAILED") {
              localStorage.clear();
              window.location.href = "/";
            } else {
              console.log(response);
            }
          })
          .catch(() => {
            this.loading = false;
          });
      }
    }

    localStorage.setItem("remember", "1");
    $("#otp_box").hide();
    $(".login_device_part").show();
    $(".signup_form_new_user").hide();
    this.webauthtoken = localStorage.getItem("webAuthToken");
    if (localStorage.getItem("webAuthToken") == null) {
      this.loginflag = 0;
    } else if (localStorage.getItem("webAuthToken") == "") {
      this.loginflag = 0;
    } else if (localStorage.getItem("webAuthToken") != null) {
      this.loginflag = 1;
    } else if (localStorage.getItem("webAuthToken")) {
      this.loginflag = 1;
    } else {
      this.loginflag = 0;
    }

    this.$nextTick(function () {
      if (localStorage.getItem("registertologin") == "1") {
        localStorage.setItem("registertologin", "0");
        window.location.reload();
      }
    });
  },
};
</script>
<style>
 .login_overlay{
  position: fixed;
  inset: 0;
  background: #fff;
  height: 100%;
  width: 100%;
  }
</style>