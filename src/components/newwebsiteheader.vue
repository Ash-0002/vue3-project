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
    <div v-if="new_loading" class="loader-wrapper" style="background:#ffffff">
            <div class="loading_css" style="text-align: center;">
                <img src="/assets/images/1.0/brand/Loader-GIF-Final.gif" style="display:none;" class="img-fluid loader_css" height="40"
                    width="40" display="none" />
                    <div class="spinner-dash">
                      <div class="bounce1"></div>
                      <div class="bounce2"></div>
                      <div class="bounce3"></div>
                    </div>
                    <p class="m-0" style="font-size:18px;color: #000000;">You will be redirected to <b>Tally On Web</b> dashboard in a moment.</p>
                    <p style="font-size:18px;color: #000000;">If you are not redirected automatically <a style="text-decoration: underline;color:#0F51F6;cursor: pointer;" href="/dashboard">click here.</a></p>
            </div>
    </div>
    <header class="web_menu newwebsite_header">
      <div class="cstm_header">
        <nav class="navbar navbar-expand-md navbar-dark">
          <a class="navbar-brand" href="option3">
            <img src="/assets/images/1.0/web_images/livekeeping-indiamart.svg" alt="Livekeeping" class="nav-logo" />
          </a>
          <button class="navbar-toggler menu-button w-nav-button mobile_navbar_toggle" type="button" data-toggle="collapse"
            data-target="#collapsibleNavbar" style="-webkit-user-select: text">
            <img src="/assets/images/1.0/web_images/menu-icon-white.svg" alt="Menu Icon" width="22" height="14" />
          </button>
          <div class="collapse navbar-collapse mobile-hidden-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
               
                <router-link class="nav-link w-inline-block website_header_menu mobile-nav-link" :to="{ name: 'option3' }">
                  <div class="nav-link-text active-btn">Setup</div>
                </router-link>
              </li>
              <li class="nav-item">      
                <router-link class="nav-link w-inline-block website_header_menu mobile-nav-link" :to="{ name: 'feature-new-website' }">
                  <div class="nav-link-text active-btn">Features</div>
                </router-link>
              </li>
              <li class="nav-item">      
                <router-link class="nav-link w-inline-block website_header_menu mobile-nav-link" :to="{ name: 'pricing-new-website' }">
                  <div class="nav-link-text active-btn">Pricing</div>
                </router-link>
              </li>
              <li class="nav-item mobile_listing_menu">      
                <router-link class="nav-link w-inline-block website_header_menu mobile-nav-link" :to="{ name: 'faq-new-website' }">
                  <div class="nav-link-text active-btn">FAQs</div>
                </router-link>
              </li>
               <li class="nav-item mobile_listing_menu">      
                <a class="nav-link w-inline-block website_header_menu mobile-nav-link" href="new-about-website">
                  <div class="nav-link-text active-btn">Our Story</div>
                </a>
              </li>
              <li class="nav-item mobile_listing_menu">      
                <router-link class="nav-link w-inline-block website_header_menu mobile-nav-link" :to="{ name: 'new-contact-website' }">
                  <div class="nav-link-text active-btn">Contact Us</div>
                </router-link>
              </li>
              <li class="nav-item mobile_listing_menu">      
                <router-link class="nav-link w-inline-block website_header_menu mobile-nav-link" :to="{ name: 'privacy-policy-new-website' }">
                  <div class="nav-link-text active-btn">Privacy Policy</div>
                </router-link>
              </li>
              <li class="nav-item mobile_listing_menu">      
                <router-link class="nav-link w-inline-block website_header_menu mobile-nav-link" :to="{ name: 'terms-of-use-new-website' }">
                  <div class="nav-link-text active-btn">Terms & Conditions </div>
                </router-link>
              </li>
              

            </ul>
          </div>
        </nav>
      </div>
    </header>


    <div id="login_nav" class="new_loginsidebar login_overlay_mobile">
        <div class="login_form_mobile_device">
          <div class="header_support">
                <p>Support: <a href="tel:+918383838383">+91 83 83 83 83 83</a></p>               
              </div>
             
          <div class="login_form_heading">
            <h3>Login</h3>
            <a href="javascript:void(0)" class="closebtn" @click="closeNavVue()">&times;</a>
          </div>
          <div class="form-inner mobile_num_section">
            <form v-on:submit.prevent="loginForm" v-on:keyup.enter="loginForm">
              <div class="form-group login_input_modal_side">
                <label class="form-label">View Tally Data on Web</label>
                <div class="right_modal_set_country_code_">
                <span class="input-group-addon disabled">+91</span>
                <input name="mobile_number" type="number" id="mobile_code" maxlength="10"
                  class="form-control mobile_number_input" v-model="form.mobile" placeholder="Mobile Number"
                  autocomplete="off" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                </div>
              </div>
              <div class="remember_input_box">
                <input type="checkbox" id="rememberme" v-model="lsRememberMe" @click="remember_click($event)"> <label
                  for="rememberMe">Remember me</label>
              </div>
              <div class="alert alert-danger fade show alert-dismissible alert_otp" role="alert" style="display:none;"
                id="loginErrorMessage">
                <strong><i class="fa fa-info" aria-hidden="true"></i></strong> <span>You have reached the maximum login attempts.</span>
              </div>
              <div class="send_otp_button_div">
                <button type="submit" id="login_submit" class="otp_send_btn" disabled @click="loader">Proceed <span v-show="isLoading"><i class="fa fa-spinner fa-spin"></i></span></button>
              </div>
            </form>
          </div>

          <div class="otp_section mt-2" id="otp_box" style="display:none;">
            <form id="otp_form" name="otp_form" v-on:submit.prevent="otpForm" v-on:keyup.enter="otpForm">
              <div class="form-group mb-1">
                <label class="form-label pb-3" id="sentOtpLine">We have sent you OTP on your mobile number
                  <span class="display_block" id="sendOTPMobile">890****781</span></label>
              </div>

              <div class="otp-wrapper otp-event">
                <div class="otp-container">
                  <input type="tel" id="otp-number-input-1" class="otp-number-input otp website_otp_input_box"
                    maxlength="1" autocomplete="off">
                  <input type="tel" id="otp-number-input-2" class="otp-number-input otp website_otp_input_box"
                    maxlength="1" autocomplete="off">
                  <input type="tel" id="otp-number-input-3" class="otp-number-input otp website_otp_input_box"
                    maxlength="1" autocomplete="off">
                  <input type="tel" id="otp-number-input-4" class="otp-number-input otp website_otp_input_box"
                    maxlength="1" autocomplete="off">
                
                </div>
              </div>

              <div class="timer_otp" id="timer_otp">
                <p> Resend OTP in <span id="timer"><b></b></span></p>
              </div>
              <div class="resend_otp" id="resend" style="display:none;padding-top:10px;">
                <a href="#" id="resendButton" v-on:click="resendotp">Resend OTP</a>
              </div>

         
              <div class="alert alert-danger fade show alert-dismissible alert_otp" role="alert" style="display:none;"
                id="otpErrorMessage">
                <strong><i class="fa fa-info" aria-hidden="true"></i></strong> <span>Invalid or Expired OTP.</span>
              </div>
             
              <div class="form-group text-center">
                <button type="submit" id="otp_submit" class="otp_send_btn" @click="loaderlogin">Login <span v-show="isLoading"><i class="fa fa-spinner fa-spin"></i></span></button>
              </div>
            </form>
          </div>

          <div class="secure_main">
            <ul>
              <li>
            <img src="/assets/images/1.0/web_images/secure.svg" alt="" class="img-fluid mr-1"> 100% secure 
            </li>
           
            </ul>
          </div>
<div class="loginsidebar_footer" id="bottom_login_storebtn">
        <h3>View Tally Data on Mobile</h3>
        <ul>
          <li>
            <a href="https://apps.apple.com/in/app/live-keeping/id1451277319" target="_blank">
              <img src="/assets/images/1.0/web_images/AppStore.svg" />
            </a>
          </li>
          <li>
            <a href="https://play.google.com/store/apps/details?id=com.finlitetech.livekeeping&pli=1" target="_blank">
              <img src="/assets/images/1.0/web_images/PlayStore.svg" />
            </a>
          </li>
        </ul>
        <h6>Trusted by 20k Customers</h6>
      </div>
        </div>
      </div>

      
  </section>
</template>
<script>
import axios from "axios";
import moment from "moment";
import Api from "@/Api";
import GoogleAnalytics from "@/GoogleAnalytics";

export default {
  data() {
    return {
      isLoading: false,
      isLoading2: false,
      delayLoading: 1,
      showTransaction: false,
      form: {
        mobile: '',
        loading: true
      },
      lsRememberMe: true,
      object_id: "",
      source: "",
      new_loading: false,
      new_loading_old: false,
      remember: "0",
      firstname: '',
      lastname: '',
      emailaddress: '',
      mobile_number: '',
      error: [],
      listCountry: [],
      listState: [],
      listCities: [],
      country: "",
      state: "",
      city: "",
      authToken: "",
      partnercode : "",
      signing : true,
      postalcode : "",
      firstnameError : "",
      webauthtoken : "",
      country_code : "",
      loginId : "",
      loginflag : 0,
      company_id : "",
      key_value : 0,
      faild_otp_count : 0,
      sf_type : false
    };
  },
  created() {
    this.mobile_number = localStorage.getItem('mobile');
  },
  components: {
  },
  methods: {
    windows_file_download() {
      GoogleAnalytics.windows_file_download("filedownload");
     
      window.open("https://lkpsetup.s3.ap-south-1.amazonaws.com/lkpwpf/Livekeeping-Tally.msi?");
    },
    loader() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, this.delayLoading * 1000);
    },
  loaderlogin() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, this.delayLoading * 500);
    },
    showModel() {
      this.$refs["my-modal"].show();
    },
    openNavVue() {
      $("#login_submit").show();
      $("#otp_box").hide();
      $("#mobile_code").prop("disabled", false);
      $("#rememberme").prop("disabled", false);
      this.form.mobile = "";
      $("#otp_box").hide();
      $("#otpErrorMessage").hide();
      $("#otp-number-input-1").val('');
      $("#otp-number-input-2").val('');
      $("#otp-number-input-3").val('');
      $("#otp-number-input-4").val('');
      
      document.getElementById("login_nav").style.width = "100%";
    },
    closeNavVue() {
      $("#otpErrorMessage").hide();
      $("#mobile_code").val("");
      $("#login_submit").show();
      $("#otp_box").hide();
      $("#mobile_code").prop("disabled", false);
      $("#rememberme").prop("disabled", false);
      this.form.mobile = "";
      $("#otp_box").hide();
      $("#otpErrorMessage").hide();
      $("#otp-number-input-1").val('');
      $("#otp-number-input-2").val('');
      $("#otp-number-input-3").val('');
      $("#otp-number-input-4").val('');
      
      document.getElementById("login_nav").style.width = "0%";
    },
    loginForm(e) {
      $("#loginErrorMessage").hide();
      if (e.keyCode === 13) {
        if(this.form.mobile.length != 10){
          return false;
        }
      }
      e.preventDefault();
      const data = {
        mobile: this.form.mobile,
        countryCode: '+91',
        requestFrom: "WEB",
        customerSource : this.$route.query.utm_source
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      };
      GoogleAnalytics.login_proceed_button(this.form.mobile);
      Api.loginWithOTP(data, headers)
        .then(response => {
          if (response.data.status == "1") {
            this.isLoading = false;
            this.mobile_number = this.form.mobile;
            this.country_code = '+91';
            $("#timer_otp").show();
            $("#login_div").hide();
            $("#otp_div").show();
            myTimer(59);
            $("#login_submit").hide();
            $("#bottom_login_storebtn").hide();
            $("#otp_box").show();
           
            $("#mobile_code").attr('disabled', 'disabled');
            $("#rememberme").attr('disabled', 'disabled');
            $("#sendOTPMobile").text('+91' + " " + this.form.mobile.slice(0, 3) + "****" + this.form.mobile.slice(-3));
            localStorage.setItem("mobile", this.form.mobile);
            localStorage.setItem("countryCode", '+91');
          } else {
            $("#loginErrorMessage").show();
            GoogleAnalytics.Login_Failed_screen(this.form.mobile);
          }
          this.page = response.data;
          this.loginId = response.data.data.loginId;
          this.loading = false;
        })
        .catch(() => {

          this.loading = false;
        });

      GoogleAnalytics.login_rightbar(this.form.mobile);
    },
    resendotp(e) {
      e.preventDefault();
      if(this.form.mobile == ""){
        this.form.mobile = localStorage.getItem("join_phone");
      }
      const data = {
        mobile: this.form.mobile,
        countryCode: '+91',
        requestFrom: "WEB"
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      };
      Api.loginWithOTP(data, headers)
        .then(response => {
          if (response.data.status == "1") {
            $("#resend").hide();
            $("#timer_otp").show();
            myTimer(59);
          }
          this.page = response.data;
          this.loginId = response.data.data.loginId;
          this.loading = false;
        })
        .catch(() => {

          this.loading = false;
        });

      GoogleAnalytics.Otp_Resend_screen(this.form.mobile);
    },

    otpForm(e) {
      e.preventDefault();
      if(this.loginId == ""){
        this.loginId = localStorage.getItem("join_loginId");
      }
      
      const data = {
        loginId: this.loginId,
        otp: $("#otp-number-input-1").val() + $("#otp-number-input-2").val() + $("#otp-number-input-3").val() + $("#otp-number-input-4").val(),
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      };
      Api.verifyOTP(data, headers)
        .then(response => {
          if (response.data.status == "1") {
            localStorage.setItem("webAuthToken", response.data.data.webAuthToken);
         

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
              "token": localStorage.getItem('webAuthToken')
            };
            Api.getcustomerDetailsGo(data, headers)
          
              .then(response => {
                if (response.data.message == "AUTHENTICATION_FAILED") {
                  localStorage.clear();
                  window.location.href = '/';
                } else {
                  if (moment(String(response.data.data.endDate)).format('yyyy-MM-DD') === "2099-01-01") {
                    localStorage.setItem("dashbordPopup", "1");
                  } else {
                    localStorage.setItem("dashbordPopup", "0");
                  }
                  localStorage.setItem("customerfirstName", response.data.data.firstName);
                  localStorage.setItem("customerlastName", response.data.data.lastName);
                  localStorage.setItem("customerfullName", response.data.data.name);
                  localStorage.setItem("customeremail", response.data.data.email);
                  localStorage.setItem("customermobile", response.data.data.mobile);
                  localStorage.setItem("trialStatus", response.data.data.trialStatus);
                  // gtag data
                  localStorage.setItem("gtagisPaid", response.data.data.isPaid);
                  localStorage.setItem("gtagtrialStatus", response.data.data.trialStatus);
                  localStorage.setItem("gtagstartDate", response.data.data.startDate);
                  localStorage.setItem("gtagendDate", response.data.data.endDate);
                  localStorage.setItem("userCurrencyId", response.data.data.userCurrencyId);
                  console.log(response.data.data.userCurrencyId);
                  const data = {
                    CurrencyId: response.data.data.userCurrencyId,
                    requestFrom: "WEB",
                  };
                  const headers = {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('webAuthToken')
                  };
                  Api.getcurrencyDetails(data, headers)
                    .then(response => {
                      if (response.data.message == "AUTHENTICATION_FAILED") {
                        localStorage.clear();
                        window.location.href = '/';
                      } else {
                        console.log(response);
                       
                        if (response.data.data.symbol == "" || response.data.data.symbol == "undefined") {
                          localStorage.setItem("symbol", "₹");
                        } else {
                          localStorage.setItem("symbol", response.data.data.currencySymbol);
                        }

                      }
                    })
                    .catch(() => {

                      this.loading = false;
                    });
                    if(response.data.data.customerStatus.toLowerCase().includes('converted') || response.data.data.customerStatus.toLowerCase().includes('installation done')){
                      localStorage.setItem("isPaid","1");
                    }

                    localStorage.setItem("customerStatus", response.data.data.customerStatus);

                   

                    if(response.data.data.customerStatus == "Open" || response.data.data.customerStatus == "Contacted"){
                      localStorage.setItem("isInstalled","");
                    }else{
                      localStorage.setItem("isInstalled","1");
                    }


                 
                }
              })
              .catch(() => {

                this.loading = false;
              });



            this.getCompany();



            localStorage.setItem("isRegistered", response.data.data.isRegistered);

            this.new_loading_old = true;
            setTimeout(() => {
              if (response.data.data.isRegistered == false) {
              
                localStorage.setItem("checkregisterstatus", "1");
                localStorage.setItem("registerStatus", 1);
                window.location.href = '/dashboard';
                
              
              } else {
                localStorage.setItem("checkregisterstatus", "1");
                localStorage.setItem("registerStatus", 1);
                window.location.href = '/dashboard';
                 
              }
            }, 500)

          } else {
            this.faild_otp_count += 1;
            $("#otpErrorMessage").show();
            GoogleAnalytics.Otp_Failed_screen(this.form.mobile);
            if(this.faild_otp_count >= "3"){
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
          console.log(response);
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.removeItem("webAuthToken");
            this.$router.go();
          } else {
            if(this.$route.query.c !== undefined){
              this.company_id = this.$route.query.c.slice(-24)
              for (let [key, value] of Object.entries(response.data.data.companyDetails)) {
                if(value.companyId == this.company_id){
                  this.key_value = key;
                }
              }
            }
            
          
            if (localStorage.getItem("companyId") == null) {
              localStorage.setItem(
                "companyId",
                response.data.data.companyDetails[this.key_value].companyId
              );
              localStorage.setItem(
                  "companyType",""
              );
              localStorage.setItem(
                "lastSyncDate",
                moment(
                  String(response.data.data.companyDetails[this.key_value].lastSyncDate)
                ).format("DD MMM yyyy h:mm A")
              );
              $("#last_date").text(
                "Last Sync :" +
                moment(
                  String(response.data.data.companyDetails[this.key_value].lastSyncDate)
                ).format("DD MMM yyyy h:mm A")
              );

              localStorage.setItem("StrSDate",response.data.data.companyDetails[this.key_value].startFrom);
              localStorage.setItem("StrEDate",response.data.data.companyDetails[this.key_value].endTo);
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
              if (parseInt(StrGetStartMonthNumber) == 1 && parseInt(StrGetStartDay) == 1) {
                this.Start_Date = moment(String(StrGetStartMonthNumber + "-"+ StrGetStartDay +"-"+ moment().format("yyyy")),'MM-DD-YYYY').format("YYYY-MM-DD");
                this.End_Date = moment(String(StrGetEndMonthNumber + "-"+ StrGetEndDay +"-"+ moment().format("yyyy")),'MM-DD-YYYY').format("YYYY-MM-DD");
                // start date
                localStorage.setItem("date_range_start_date", this.Start_Date);
                localStorage.setItem("first_date_range_start_date", this.Start_Date);
                
                // end date 
                localStorage.setItem("date_range_end_date",this.End_Date);
                localStorage.setItem("first_date_range_end_date",this.End_Date);
              }else{
                if(StrGetEndMonthNumber == 2){
                  var year = moment().add(1, 'Y').format("yyyy");
                  if (moment([year]).isLeapYear()) {
                    StrGetEndDay = moment("2024-02-29").format("D");
                  }else{
                    StrGetEndDay = moment("2024-02-28").format("D");
                  }
                }
                this.Start_Date = moment(String(StrGetStartMonthNumber + "-"+ StrGetStartDay +"-"+ moment().format("yyyy")),'MM-DD-YYYY').format("YYYY-MM-DD");
                this.End_Date = moment(String(StrGetEndMonthNumber + "-"+ StrGetEndDay +"-"+ moment().add(1, 'Y').format("yyyy")),'MM-DD-YYYY').format("YYYY-MM-DD");

                // start date
                localStorage.setItem("date_range_start_date", this.Start_Date);
                localStorage.setItem("first_date_range_start_date", this.Start_Date);
                
                // end date 
                localStorage.setItem("date_range_end_date",this.End_Date);
                localStorage.setItem("first_date_range_end_date",this.End_Date);
              }
            }else{
              this.Start_Date = moment(String(StrGetStartMonthNumber + "-"+ StrGetStartDay +"-"+ moment().add(-1, 'Y').format("yyyy")),'MM-DD-YYYY').format("YYYY-MM-DD");
              this.End_Date = moment(String(StrGetEndMonthNumber + "-"+ StrGetEndDay +"-"+ moment().format("yyyy")),'MM-DD-YYYY').format("YYYY-MM-DD");           
              
              // start date
              localStorage.setItem("date_range_start_date", this.Start_Date);
                localStorage.setItem("first_date_range_start_date", this.Start_Date);
                
              // end date 
              localStorage.setItem("date_range_end_date",this.End_Date);
              localStorage.setItem("first_date_range_end_date",this.End_Date);
            }
            for (let [key, value] of Object.entries(
              response.data.data.companyDetails
            )) {
              response.data.data.companyDetails[key].lastSyncDatenew =
                "Last Sync :" +
                moment(
                  String(response.data.data.companyDetails[key].lastSyncDate)
                ).format("DD MMM yyyy h:mm A");
            }
            this.company = response.data.data.companyDetails;
          }
         
          if (localStorage.getItem('companyType') == "DEMO" || localStorage.getItem('companyType') == "MAIN") {
            localStorage.setItem('gtagisMainUser', true);
          } else {
            localStorage.setItem('gtagisMainUser', false);
          }

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
    register(e) {
      var error = [];
      this.firstnameError = "";
      this.error = [];
      if (this.firstname && this.lastname && this.emailaddress && this.mobile_number && this.postalcode) {
        console.warn("no error");
      }
      if (!this.firstname) {
        this.error['firstname'] = 'Firstname is required';
        this.firstnameError = 'Firstname is required';
        
      }
      if (!this.lastname) {
      
        this.error['lastname'] = 'Lastname is required';
      
      }
      if (!this.emailaddress) {
      
        this.error['emailaddress'] = 'Email is required';
      
      }
      if(this.emailaddress != ''){
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.emailaddress) === false) {
          this.error['emailaddress'] = "Please enter valid emailaddress";
        }
      }
      if (!this.mobile_number) {
      
      this.error['mobile_number'] = 'Mobile is required';
      
        }
        if (!this.postalcode) {
      
      this.error['postalcode'] = 'Postalcode is required';
      
      }
      if(this.postalcode != ''){
        if (/^(\d{4}|\d{6})$/.test(this.postalcode) === false) {
          this.error['postalcode'] = "Please enter valid postalcode";
        }
      }
      
      console.log(Object.keys(this.error).length)

      e.preventDefault();
      console.log(this.error);
      if (Object.keys(this.error).length === 0) {
        const data = { 
          customerId: localStorage.getItem('customerId'),
          requestFrom : "WEB",
          email : this.emailaddress,
          firstName : this.firstname,
          lastName : this.lastname,
          mobile : this.mobile_number,
          country : this.country,
          state : this.state,
          city : this.city,
          countryCode : '+91',
          resellerCode : this.resellerCode,
          customerSource : this.$route.query.utm_source
        };
        const headers = {
          "Access-Control-Allow-Origin": "*", 
          "Content-Type": "application/json",
          "token" : localStorage.getItem('webAuthToken')
        };
        Api.register(data,headers)
        .then(response => {
          if(response.data.message == "AUTHENTICATION_FAILED"){
            localStorage.clear();
                      window.location.href = '/';
            GoogleAnalytics.SignUp_Failed_screen();
          }else if(response.data.status == "1"){
            window.location.href = '/dashboard';
            localStorage.setItem("checkregisterstatus", "1");
            localStorage.setItem("registerStatus", 1);
            GoogleAnalytics.SignUp_screen();
          }
          const data = { 
            CurrencyId: response.data.data.userCurrencyId,
            requestFrom : "WEB", 
          };
          const headers = { 
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "token" : localStorage.getItem('webAuthToken')
          };
          Api.getcurrencyDetails(data,headers)
          .then(response => {
            if(response.data.message == "AUTHENTICATION_FAILED"){
              localStorage.clear();
              window.location.href = '/';
            }else{
              localStorage.setItem("customercurrencySymbol", response.data.data.currencySymbol);
              localStorage.setItem("customercurrencyType", response.data.data.currencyType);
              localStorage.setItem("customeralphabeticCode", response.data.data.alphabeticCode);
              localStorage.setItem("symbol", response.data.data.symbol);
            
            }   
          })
        })
        .catch(() => {
          // alert("ERROR");
          this.loading = false;
        });
      }
	  },
    register_back(){
      $(".signup_form_new_user").hide();
      $(".login_device_part").show();
      $('#mobile_code').prop("disabled", false);
      $('#rememberme').prop("disabled", false);
      $("#login_submit").show();
      this.form.mobile = "";
      $("#otp_box").hide();
    },
    open_exe(){
      window.open("https://lkpsetup.s3.ap-south-1.amazonaws.com/lkpwpf/Livekeeping-Tally.msi");
    }
  },
  watch: {
    '$route' () {
      $('#collapsibleNavbar').collapse('hide');
    }
  },
  mounted() {  
    $( 'a.website_header_menu' ).on( 'click', function(e){
  const href = $(this).attr( 'href' );
  const h = href.replace('/','');
  $( 'html, body' ).animate({
		scrollTop: $( h ).offset().top-50
  }, '1000' );
  e.preventDefault();
}); 
    
    if(this.$route.query.t !== undefined){
      localStorage.clear();
      this.object_id = this.$route.query.t.slice(-24)
      this.source = this.$route.query.s;
      if (this.object_id !== "") {
        
        this.new_loading = true;
        if(this.source == "sf"){
          this.sf_type = true;
        }else{
          this.sf_type = false;
        }
        const data = {
          customerId: this.object_id,
          requestFrom: "WEB",
          sourceOfLead: this.source,
          isDebug : this.sf_type
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "token": localStorage.getItem('webAuthToken')
        };

        Api.initializeWebLogin(data, headers)
          .then(response => {
            console.log(response);
            if (response.data.status != "0") {
              localStorage.clear();
              localStorage.setItem("source", this.source);
              localStorage.setItem("mobile", response.data.data.mobile);
              localStorage.setItem("countryCode", response.data.data.countryCode);

              localStorage.setItem("webAuthToken", response.data.data.webAuthToken);
              localStorage.setItem("isFirstTimeLogin", response.data.data.isFirstTimeLogin);
              localStorage.setItem("customerId", response.data.data.customerId);
              localStorage.setItem("dashbordStatus", "0");
              localStorage.setItem("amountformate", "0.0"); 

              if (moment(String(response.data.data.endDate)).format('yyyy-MM-DD') === "2099-01-01") {
                localStorage.setItem("dashbordPopup", "1");
              } else {
                localStorage.setItem("dashbordPopup", "0");
              }

              localStorage.setItem("customerfirstName", response.data.data.firstName);
              localStorage.setItem("customerlastName", response.data.data.lastName);
              localStorage.setItem("customerfullName", response.data.data.name);
              localStorage.setItem("customeremail", response.data.data.email);
              localStorage.setItem("customermobile", response.data.data.mobile);

              localStorage.setItem("gtagisPaid", response.data.data.isPaid);
              localStorage.setItem("gtagtrialStatus", response.data.data.trialStatus);
              localStorage.setItem("gtagstartDate", response.data.data.startDate);
              localStorage.setItem("gtagendDate", response.data.data.endDate);
              localStorage.setItem("userCurrencyId", response.data.data.userCurrencyId);

              if (response.data.data.symbol == "" || response.data.data.symbol == "undefined") {
                localStorage.setItem("symbol", "₹");
              } else {
                localStorage.setItem("symbol", response.data.data.currencySymbol);
              }
              

              if(response.data.data.customerStatus.toLowerCase().includes('converted') || response.data.data.customerStatus.toLowerCase().includes('installation done')){
                localStorage.setItem("isPaid","1");
              } 

              localStorage.setItem("customerStatus", response.data.data.customerStatus);

             
              if(response.data.data.customerStatus == "Open" || response.data.data.customerStatus == "Contacted"){
                localStorage.setItem("isInstalled","");
              }else{
                localStorage.setItem("isInstalled","1");
              }

              localStorage.setItem("isRegistered", response.data.data.isRegistered);
              if (response.data.data.isRegistered == false) {
              
                localStorage.setItem("checkregisterstatus", "1");
                localStorage.setItem("registerStatus", 1);
              } else {
                localStorage.setItem("checkregisterstatus", "1");
                localStorage.setItem("registerStatus", 1);
              }

              this.getCompany();
              setTimeout(() => {
                window.location.href = '/dashboard';
              }, 500)


          

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
    this.webauthtoken = localStorage.getItem('webAuthToken');
    if(localStorage.getItem('webAuthToken') == null){
      this.loginflag = 0;
    }else if(localStorage.getItem('webAuthToken') == ""){
      this.loginflag = 0;
    }else if(localStorage.getItem('webAuthToken') != null){
      this.loginflag = 1;
    }else if(localStorage.getItem('webAuthToken')){
      this.loginflag = 1;
    }else{
      this.loginflag = 0;
    }
  

    this.$nextTick(function () {
      if (localStorage.getItem('registertologin') == "1") {
        localStorage.setItem("registertologin", "0");
        window.location.reload();
      }
    })
  },
};
</script>