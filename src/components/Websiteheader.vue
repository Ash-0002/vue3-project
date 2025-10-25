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
    <div v-if="new_loading" class="loader-wrapper" style="background: #ffffff">
      <div class="loading_css" style="text-align: center">
        <img src="/assets/images/1.0/brand/Loader-GIF-Final.gif" style="display: none" class="img-fluid loader_css"
          height="40" width="40" display="none" />
        <div class="spinner-dash">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
        <p class="m-0" style="font-size: 18px; color: #000000">
          You will be redirected to <b>Tally On Web</b> dashboard in a moment.
        </p>
        <p style="font-size: 18px; color: #000000">
          If you are not redirected automatically
          <a style="text-decoration: underline; color: #0f51f6; cursor: pointer" href="/dashboard">click here.</a>
        </p>
      </div>
    </div>
    <header class="web_menu navbar-fixed-top">

      <div class="cstm_header">
        <nav class="navbar navbar-expand-md navbar-dark">
          <a class="navbar-brand website-logo-set-new logo-desktop-device-show" href="/">
            <img src="/assets/images/1.0/LivekeepingIndiamartLogo.svg" width="512" height="145" alt="Livekeeping"
              class="nav-logo" style="height:65px;" />
          </a>
          <a class="navbar-brand website-logo-set-new logo-mobile-device-show" href="/">
            <img src="/assets/images/1.0/mobiledevice/svg/SquareLogo.svg" width="50" height="50" alt="Livekeeping"
              class="nav-logo" />
          </a>
          <ul class="new-mobile-device-header-ul">
            <li style="margin-right:8px;">
              <a href="javascript:void(0)" class="help-number-box" @click="openNavVue()">
                Login</a>
            </li>
            <li>
              <a href="tel:+918383838383" class="help-number-box" @click="support_number_mobile()">
                Help</a>
            </li>

           
            <li>
              <button class="navbar-toggler menu-button w-nav-button mobile_navbar_toggle" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" style="-webkit-user-select: text">
                <img src="/assets/images/1.0/web_images/menu-icon-white.svg" alt="Menu Icon" width="22" height="14" />
              </button>
            </li>
          </ul>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="tel:+918383838383" @click="support_number()"
                  class="nav-link w-inline-block mobile-device-hide-front">
                  <div class="nav-link-text">
                    <i class="fa fa-phone" aria-hidden="true"></i> +91 83 83 83
                    83 83
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link w-inline-block website_header_menu" href="/#features" data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show" @click="features()">
                  <div class="nav-link-text">Features</div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link w-inline-block website_header_menu" href="/#pricing" data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show" @click="pricing()">
                  <div class="nav-link-text">Pricing</div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link w-inline-block website_header_menu" href="/#testimonials" data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show" @click="testimonials()">
                  <div class="nav-link-text">Testimonial</div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link w-inline-block website_header_menu" href="/#faqs" data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show" @click="faqs()">
                  <div class="nav-link-text">FAQs</div>
                </a>
              </li>
              <li class="nav-item">
                <div class="" v-if="this.loginflag">
                  <button type="button" class="login_btn">
                    <a href="javascript:void(0);" @click="my_dashboard_click()">My Dashboard</a>
                  </button>
                </div>
                <div class="" v-else>
                  <button type="button" class="login_btn" @click="openNavVue()">
                    Login
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <div id="login_nav" class="login_overlay">
      <div class="login_form">
        <div class="login_device_part">
          <div class="login_form_heading">
            <h3>Login</h3>
            <a href="javascript:void(0)" class="closebtn" @click="closeNavVue()">&times;</a>
          </div>
          <div class="form-inner mobile_num_section mt-2">
            <form v-on:submit.prevent="loginForm" v-on:keyup.enter="loginForm">
              <div class="form-group login_input_modal_side">
                <label class="form-label">Mobile Number</label>
                <div class="right_modal_set_country_code_">
                  <span class="input-group-addon disabled">+91</span>
                  <input name="mobile_number" type="number" id="mobile_code" maxlength="10"
                    class="form-control mobile_number_input" v-model="form.mobile" placeholder="Mobile Number"
                    autocomplete="off"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />
                </div>
                <div v-if="showError" class="login-error-message">Please enter a valid number</div>
              </div>
              <div class="remember_input_box">
                <input type="checkbox" id="rememberme" v-model="lsRememberMe" @click="remember_click($event)" />
                <label for="rememberMe">Remember me</label>
              </div>
              <div class="alert alert-danger fade show alert-dismissible alert_otp" role="alert" style="display: none"
                id="loginErrorMessage">
                <strong><i class="fa fa-info" aria-hidden="true"></i></strong>
                <span>You have reached the maximum login attempts.</span>
              </div>
              <div class="send_otp_button_div">
                <button type="submit" id="login_submit" class="otp_send_btn" disabled @click="loader">
                  Proceed
                  <span v-show="isLoading"><i class="fa fa-spinner fa-spin"></i></span>
                </button>
              </div>
            </form>
          </div>

          <div class="otp_section mt-2" id="otp_box">
            <form id="otp_form" name="otp_form" v-on:submit.prevent="otpForm" v-on:keyup.enter="otpForm">
              <div class="form-group mb-1">
                <label class="form-label pb-3" id="sentOtpLine">We have sent you OTP on your mobile number
                  <span class="display_block" id="sendOTPMobile">890****781</span></label>
              </div>

              <div class="otp-wrapper otp-event">
                <div class="otp-container">
                  <input type="tel" id="otp-number-input-1" class="otp-number-input otp website_otp_input_box"
                    maxlength="1" autocomplete="off" />
                  <input type="tel" id="otp-number-input-2" class="otp-number-input otp website_otp_input_box"
                    maxlength="1" autocomplete="off" />
                  <input type="tel" id="otp-number-input-3" class="otp-number-input otp website_otp_input_box"
                    maxlength="1" autocomplete="off" />
                  <input type="tel" id="otp-number-input-4" class="otp-number-input otp website_otp_input_box"
                    maxlength="1" autocomplete="off" />
                </div>
              </div>

              <div class="timer_otp" id="timer_otp">
                <p>
                  Resend OTP in <span id="timer"><b></b></span>
                </p>
              </div>
              <div class="resend_otp" id="resend" style="display: none; padding-top: 10px">
                <a href="#" id="resendButton" v-on:click="resendotp">Resend OTP</a>
              </div>

              <div class="alert alert-danger fade show alert-dismissible alert_otp" role="alert" style="display: none"
                id="otpErrorMessage">
                <strong><i class="fa fa-info" aria-hidden="true"></i></strong>
                <span>Invalid or Expired OTP.</span>
              </div>

              <div class="form-group text-center">
                <button type="submit" id="otp_submit" class="otp_send_btn" @click="loaderlogin">
                  Login
                  <span v-show="isLoading"><i class="fa fa-spinner fa-spin"></i></span>
                </button>
              </div>
            </form>
          </div>

          <div class="secure_main">
            <ul>
              <li>
                <img src="/assets/images/1.0/web_images/secure.png" width="15" height="18" alt="secure and certified" class="img-fluid mr-1" />
                100% secure
              </li>
              <li>
                <img src="/assets/images/1.0/web_images/iso.png" width="30" height="26" alt="ISO certified" class="img-fluid mr-1" />
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
import axios from "axios";
import moment from "moment";
import Api from "@/Api";
import Common from "@/Common";
import GoogleAnalytics from "@/GoogleAnalytics";
export default {
  data() {
    return {
      isLoading: false,
      showError: false,
      isLoading2: false,
      delayLoading: 1,
      showTransaction: false,
      form: {
        mobile: "",
        loading: true,
      },
      lsRememberMe: true,
      object_id: "",
      source: "",
      new_loading: false,
      new_loading_old: false,
      remember: "0",
      firstname: "",
      lastname: "",
      emailaddress: "",
      mobile_number: "",
      error: [],
      listCountry: [],
      listState: [],
      listCities: [],
      country: "",
      state: "",
      city: "",
      authToken: "",
      partnercode: "",
      signing: true,
      postalcode: "",
      firstnameError: "",
      webauthtoken: "",
      country_code: "",
      loginId: "",
      loginflag: 0,
      company_id: "",
      key_value: 0,
      faild_otp_count: 0,
      sf_type: false,
      indiamart_mobile: "",
    };
  },
  created() {
    this.mobile_number = localStorage.getItem("mobile");
  },
  watch: {
    'form.mobile'(newVal) {
      if (!newVal) {
        this.showError = false; 
      }
    }
  },
  methods: {
    whatsapp_btn() {
      GoogleAnalytics.website_whatsapp_button("whatsapp");
    },
    features() {
      GoogleAnalytics.website_features("features");
    },
    support_number() {
      GoogleAnalytics.header_support_number("support_number");
    },
    support_number_mobile() {
      GoogleAnalytics.header_support_number_mobile("support_number_mobile");
    },

    pricing() {
      GoogleAnalytics.website_pricing("pricing");
    },
    testimonials() {
      GoogleAnalytics.website_testimonial("testimonials");
    },
    faqs() {
      GoogleAnalytics.website_faqs("faqs");
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
      $("#otp-number-input-1").val("");
      $("#otp-number-input-2").val("");
      $("#otp-number-input-3").val("");
      $("#otp-number-input-4").val("");
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
      $("#otp-number-input-1").val("");
      $("#otp-number-input-2").val("");
      $("#otp-number-input-3").val("");
      $("#otp-number-input-4").val("");
      document.getElementById("login_nav").style.width = "0%";
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
        GoogleAnalytics.login_proceed_button(this.form.mobile);
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
              GoogleAnalytics.Login_Failed_screen(this.form.mobile);
            }
            this.page = response.data;
            this.loginId = response.data.data._userId;
            this.loading = false;
          })
          .catch(() => {
            this.loading = false;
          });

        GoogleAnalytics.login_rightbar(this.form.mobile);
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

      GoogleAnalytics.Otp_Resend_screen(this.form.mobile);
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
                  localStorage.setItem("EWAY_EINVOICE_STATUS",JSON.stringify(response.data.data.activeAddOns))

               
                 

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
                  window.location.href = "/tally-style";
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
            GoogleAnalytics.Otp_Failed_screen(this.form.mobile);
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
              this.company_id = this.$route.query.c.slice(-24);
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
    register(e) {
      var error = [];
      this.firstnameError = "";
      this.error = [];
      if (
        this.firstname &&
        this.lastname &&
        this.emailaddress &&
        this.mobile_number &&
        this.postalcode
      ) {
        console.warn("no error");
      }
      if (!this.firstname) {
        this.error["firstname"] = "Firstname is required";
        this.firstnameError = "Firstname is required";
      }
      if (!this.lastname) {
        this.error["lastname"] = "Lastname is required";
      }
      if (!this.emailaddress) {
        this.error["emailaddress"] = "Email is required";
      }
      if (this.emailaddress != "") {
        if (
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            this.emailaddress
          ) === false
        ) {
          this.error["emailaddress"] = "Please enter valid emailaddress";
        }
      }
      if (!this.mobile_number) {
        this.error["mobile_number"] = "Mobile is required";
      }
      if (!this.postalcode) {
        this.error["postalcode"] = "Postalcode is required";
      }
      if (this.postalcode != "") {
        if (/^(\d{4}|\d{6})$/.test(this.postalcode) === false) {
          this.error["postalcode"] = "Please enter valid postalcode";
        }
      }

      console.log(Object.keys(this.error).length);

      e.preventDefault();
      console.log(this.error);
      if (Object.keys(this.error).length === 0) {
        const data = {
          customerId: localStorage.getItem("customerId"),
          requestFrom: "WEB",
          email: this.emailaddress,
          firstName: this.firstname,
          lastName: this.lastname,
          mobile: this.mobile_number,
          country: this.country,
          state: this.state,
          city: this.city,
          countryCode: "+91",
          resellerCode: this.resellerCode,
          customerSource: this.$route.query.utm_source,
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.register(data, headers)
          .then((response) => {
            if (response.data.message == "AUTHENTICATION_FAILED") {
              localStorage.clear();
              window.location.href = "/";
              GoogleAnalytics.SignUp_Failed_screen();
            } else if (response.data.status == "1") {
              window.location.href = "/dashboard";
              localStorage.setItem("checkregisterstatus", "1");
              localStorage.setItem("registerStatus", 1);
              GoogleAnalytics.SignUp_screen();
            }
            const data = {
              CurrencyId: response.data.data.userCurrencyId,
              requestFrom: "WEB",
            };
            const headers = {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              token: localStorage.getItem("webAuthToken"),
            };
            Api.getcurrencyDetails(data, headers).then((response) => {
              if (response.data.message == "AUTHENTICATION_FAILED") {
                localStorage.clear();
                window.location.href = "/";
              } else {
                localStorage.setItem(
                  "customercurrencySymbol",
                  response.data.data.currencySymbol
                );
                localStorage.setItem(
                  "customercurrencyType",
                  response.data.data.currencyType
                );
                localStorage.setItem(
                  "customeralphabeticCode",
                  response.data.data.alphabeticCode
                );
                localStorage.setItem("symbol", response.data.data.symbol);
              }
            });
          })
          .catch(() => {
            this.loading = false;
          });
      }
    },
    register_back() {
      $(".signup_form_new_user").hide();
      $(".login_device_part").show();
      $("#mobile_code").prop("disabled", false);
      $("#rememberme").prop("disabled", false);
      $("#login_submit").show();
      this.form.mobile = "";
      $("#otp_box").hide();
    },
    open_exe() {
      window.open(
        "https://lkpsetup.s3.ap-south-1.amazonaws.com/lkpwpf/Livekeeping-Tally.msi"
      );
    },
    my_dashboard_click(){
      if(localStorage.getItem("selectedTheme") == "2.0"){
        if(window.innerWidth <= 991){
          window.location.href = "/dashboard";
        }else{
          window.location.href = "/tally-style";
        }
      }else{
        window.location.href = "/dashboard";
      }
    }
  },
  mounted() {
    this.$forceUpdate();
    localStorage.setItem("gtagdeviceBrowser", this.$browserDetect.meta.name);
    localStorage.setItem("gtagdeviceVersion", this.$browserDetect.meta.version);
    $("a.website_header_menu").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  const h = href.replace("/", "");

  if (window.location.pathname !== "/") {
    // Redirect to the index page with the hash in the URL
    window.location.href = "/" + h;
  } else {
    // If already on the index page, perform the scroll
    $("html, body").animate(
      {
        scrollTop: $(h).offset().top - 70,
      },
      "1000",
      function () {
        if (h === "#mobileHome") {
          showFooterOnScroll();
        }
      }
    );
  }

  $(".navbar-collapse").collapse("hide");
});

// If coming from another page, handle scrolling without the blink
$(document).ready(function () {
  const hash = window.location.hash;
  if (hash) {
    // Prevent the default jump-to behavior
    setTimeout(function () {
      $("html, body").scrollTop(0);
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70,
        },
        "1000"
      );
    }, 1); // Delay to prevent the browser from jumping immediately
  }
});
    function showFooterOnScroll() {
      const mobileHomeSection = $("#mobileHome");
      const mobileHomeSectionRect = mobileHomeSection[0].getBoundingClientRect();
      if (mobileHomeSectionRect.top < window.innerHeight && mobileHomeSectionRect.bottom > 0) {
        $(".mobile_footer_fix").hide();
      } else {
        $(".mobile_footer_fix").show();
      }
    }
    $(document).ready(function () {
      $(".mobile_footer_fix").hide();
      showFooterOnScroll();
      $(window).on("scroll", showFooterOnScroll);
    });
    console.log(this.$route.query.m);
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
                      window.location.href = "/dashboard";
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
<style scoped>
ul.new-mobile-device-header-ul {
  display: none;
}

.logo-desktop-device-show {
  display: block;
}

.logo-mobile-device-show {
  display: none;
}

div#openpricingbanner___BV_modal_outer_ {
  display: none;
}

ul.new-mobile-device-header-ul {
  display: none;
}

@media only screen and (max-width: 768px) {
  ul.new-mobile-device-header-ul {
    margin: 0;
    display: flex;
    align-items: center;
  }

  a.help-number-box {
    padding: 5px 15px;
    color: #1a1a1a;
    border: 1px solid #bababa;
    border-radius: 5px;
    color: #1a1a1a;
    font-weight: 600;
  }

  a.help-number-box i {
    padding-right: 6px;
    text-align: center;
    vertical-align: middle;
  }

  a.mobile-device-hide-front {
    display: none;
  }

  .login_btn {
    display: none;
  }

  a.website-logo-set-new {
    margin: 5px 0;
  }

  .logo-desktop-device-show {
    display: none;
  }

  .logo-mobile-device-show {
    display: block;
  }
}

@media only screen and (max-width: 600px) {
  a.website-logo-set-new img {
    height: auto !important;
  }
}
</style>