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

    <div class="main_card main_card_settings">
      <div class="card">
      <div class="ProfileTitleNewHeading">
        <h4>My Profile</h4>
      </div>
        <div class="row">
          <div class="col-12">
            <div class="">
              <div class="main_tabs">
                <div class="faq_open_div">
                  <div class="tab-content tab-space">
                    <div v-bind:class="{ 'hidden': accountopenTab !== 1, 'block': accountopenTab === 1 }">
                      <div class="alert alert-dismissible fade show alert-success-part" role="alert"
                        id="profileErrorMessage" style="display: none ;">
                        <strong><i class="fa fa-check" aria-hidden="true"></i></strong>
                        <span class="error_for_profile"></span>
                      </div>


                      <form id="userProfileForm" @submit="register" class="countrycode_setting">
                        <div class="panel panel-primary">
                          <div class="row">
                            <div class="col-lg-6 col-12">
                              <div class="form-group input_new_textbox mb-4">

                                <div class="form-group input_new_textbox mb-4">
                                  <div class="label_mb_input">Full Name <span class="required_red">*</span></div>
                                  <input type="text" @input="html_tag_notaccept('fullName', $event)"
                                    class="form-control alphabetic" name="firstName" id="firstName" v-model="fullName"
                                    placeholder="Full Name" autocomplete="off" />
                                  <span class="error-validation" v-if="error.fullName">{{
                                    error.fullName }}</span>

                                </div>


                              </div>
                            </div>

                            <div class="col-lg-6 col-12">
                              <div class="form-group input_new_textbox mb-4">
                                <div class="label_mb_input">Email <span class="required_red">*</span></div>
                                <input type="email" @input="html_tag_notaccept('email', $event)"
                                  class="form-control alphabetic" name="email" id="email" v-model="email"
                                  placeholder="Email Address" autocomplete="off" />
                                <span class="error-validation" v-if="error.email">{{
                                  error.email }}</span>
                              </div>
                            </div>
                            <div class="col-lg-6 col-12">
                              <div class="form-group input_new_textbox mb-4 ChangeNumberMainDivProfile">
                                <div class="label_mb_input">Mobile Number <span class="required_red">*</span></div>
                                <input name="mobile_number" type="text" maxlength="10"
                                  class="form-control mobile_number_input alphabetic" placeholder="Mobile Number"
                                  id="mobilenumber" v-model="mobilenumber" autocomplete="off" readonly>
                                <span class="InputChangeGroupAddon" @click="openOTPModal">
                                  <i class="fa fa-pencil" aria-hidden="true"></i> Change Number
                                </span>
                                <span class="error-validation" v-if="error.mobilenumber">{{
                                  error.mobilenumber }}</span>
                              </div>
                            </div>


                            <div class="col-lg-6 col-12">
                              <div class="form-group input_new_textbox mb-4">
                                <div class="label_mb_input">Postal Code <span class="required_red">*</span></div>
                                <input type="text" @input="html_tag_notaccept('postalcode', $event)"
                                  class="form-control" name="postalcode" id="postalcode" v-model="postalcode"
                                  placeholder="Postal code" autocomplete="off" />
                                <span class="error-validation" v-if="error.postalcode">{{
                                  error.postalcode }}</span>
                              </div>

                            </div>

                          </div>
                          <div class="row">
                            <div class="col-lg-12 col-12">
                              <div class="form_bottom_button mt-4 mb-4 text-center">
                                <button v-if="this.source !== 'sf'" id="update_profile" class="form_button black_button"
                                  @click="">Update
                                </button>
                              </div>
                            </div>
                          </div>

                        </div>

                      </form>
                    </div>
                    <div v-bind:class="{ 'hidden': accountopenTab !== 2, 'block': accountopenTab === 2 }">
                      <div class="panel panel-primary">
                        <div class="">
                          <div class="row">
                            <div class="col-lg-4 col-12">
                              <ul class="search_input">
                                <li class="">
                                  <div class="table_search mb-2">
                                    <input class="search_input" v-model="search" v-on:keyup="handleBlur"
                                      placeholder="Search" />
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-8 col-12">
                              <div class="search_btn_filter_right pb-3">
                                <ul class="parties_search_right search_btn_filter_right_ul">
                                  <li class="inline_block">
                                    <div class="addnew_button ac_addbtn">

                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <!----------------------------------------------->

                      <v-app id="inspire">

                        <v-data-table :page="page" :pageCount="numberOfPages" :headers="selectedHeaders"
                          :items="passengers" :options.sync="options" :server-items-length="totalPassengers"
                          :loading="loading" class="elevation-1" must-sort @update:sort-by="updateSort('by', $event)"
                          @update:sort-desc="updateSort('desc', $event)" item-key="table_header_index">
                          <template v-slot:item.name="{ item }">
                            <td>{{ item.name }}</td>
                          </template>
                          <template v-slot:item.mobile="{ item }">
                            <td>{{ item.countryCode + ' ' + item.mobile }}</td>
                          </template>


                        </v-data-table>
                      </v-app>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!---Verify OTP Popup---->
    <div v-if="showVerifyOTPModal" class="VerifyOTPModalProfilePage" @click.self="closeModal">
      <div class="VerifyOTPModalPopupPortion">
        <!-- Close Button -->
        <button @click="closeModal" class="CrossIconProfilePopup">×</button>

        <!-- Phone Icon -->
        <div class="CalliconCirclePrifleOtpPopup">
          <i class="fa fa-phone"></i>
        </div>
        <div class="VerifyOTPCaptionPortionPopup">
          <!-- Message -->
          <h3 class="">Verify Your Current Number</h3>
          <p class="">
            We've sent a verification code to
          </p>
          <h6>+91 {{ mobilenumber }}</h6>
        </div>
        <!-- OTP Boxes -->
        <div class="OTPVerifyInputPortionProfile">
          <input v-for="(digit, index) in otpDigits" :key="index" maxlength="1" v-model="otp[index]"
            @input="handleOtpInput(index, $event)" @keydown.delete="handleBackspace(index, $event)" ref="otpInputs"
            class="" type="number"
            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />
        </div>
        <!-- Error Message -->
        <div v-if="otpError" class="OTPErrorforProfileMessage">
          {{ otpError }}
        </div>
        <!-- Countdown or Resend Link -->
        <div class="OTPResendTimerverifyOTP text-center mt-2 mb-2">
          <span v-if="!resendVisible" class="ResendTimerText">
            Resend OTP in <span class="normalboldtextcountdown">00:{{ countdown < 10 ? '0' + countdown : countdown
            }}</span>
            </span>
            <span v-else>
              <a href="#" @click.prevent="resendOtp" class="ResendOTPButtonforProfile">Resend OTP</a>
            </span>
        </div>
        <!-- Verify Button -->
        <button @click="verifyOtp" class="VerifyandContinueButtonPopupButton">
          Verify & Continue
        </button>
      </div>
    </div>
    <!-- New Mobile Number Popup -->
    <div v-if="showNewNumberModal" class="VerifyOTPModalProfilePage" @click.self="closeNewNumberModal">
      <div class="VerifyOTPModalPopupPortion">
        <!-- Close Button -->
        <button @click="closeNewNumberModal" class="CrossIconProfilePopup">×</button>

        <div class="VerifyOTPCaptionPortionPopup">
          <!-- Success Message -->
          <div class="CalliconCirclePrifleOtpPopup">
            <i class="fa fa-check"></i>

          </div>
          <div class="CurrentNumberVerifiedPortion">
            <h3>Current Number Verified</h3>
            <p class="enternewmobilenumber">
              Now enter your new mobile number
            </p>
          </div>

        </div>

        <!-- New Number Input -->
        <div class="new-number-section-profile">
          <label>New Mobile Number</label>
          <div class="phone-input-container-profile">
            <span>IN +91</span>
            <input type="number" v-model="newMobileNumber" @input="validateNewNumber" placeholder="Enter New Number"
              class="new-number-input" maxlength="10" oninput="this.value=this.value.slice(0,10)" />
          </div>
        </div>

        <!-- Error Message -->
        <div v-if="newNumberError" class="OTPErrorforProfileMessage">
          {{ newNumberError }}
        </div>

        <!-- Send OTP Button -->
        <button @click="sendNewOTP" class="VerifyandContinueButtonPopupButton mt-3">
          Send OTP & Continue
        </button>
      </div>
    </div>
    <!-- Verify OTP Popup for New Number -->
    <div v-if="showNewNumberOTPModal" class="VerifyOTPModalProfilePage" @click.self="closeNewNumberOTPModal">
      <div class="VerifyOTPModalPopupPortion">
        <!-- Close Button -->
        <button @click="closeNewNumberOTPModal" class="CrossIconProfilePopup">×</button>

        <!-- Phone Icon -->
        <div class="CalliconCirclePrifleOtpPopup">
          <i class="fa fa-phone"></i>
        </div>
        <div class="VerifyOTPCaptionPortionPopup">
          <!-- Message -->
          <h3 class="">Verify Your New Number</h3>
          <p class="">
            We've sent a verification code to
          </p>
          <h6>+91 {{ newMobileNumber }} <span @click="editNewNumber" class="MobileNumberEditPortionOTP">Edit</span></h6>
        </div>
        <!-- OTP Boxes -->
        <div class="OTPVerifyInputPortionProfile">
          <input v-for="(digit, index) in otpDigits" :key="index" maxlength="1" v-model="newOtp[index]"
            @input="handleNewOtpInput(index, $event)" @keydown.delete="handleNewBackspace(index, $event)"
            ref="newOtpInputs" class="" type="number"
            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />
        </div>
        <!-- Error Message -->
        <div v-if="newOtpError" class="OTPErrorforProfileMessage">
          {{ newOtpError }}
        </div>
        <!-- Countdown or Resend -->
        <div class="OTPResendTimerverifyOTP text-center mt-2 mb-2">
          <span v-if="!newResendVisible" class="ResendTimerText">
            Resend OTP in <span class="normalboldtextcountdown">00:{{ newCountdown < 10 ? '0' + newCountdown :
              newCountdown }}</span>
            </span>
            <span v-else>
              <a href="#" @click.prevent="resendNewOtp" class="ResendOTPButtonforProfile">Resend OTP</a>
            </span>
        </div>
        <!-- Verify Button -->
        <button @click="verifyNewOtp" class="VerifyandContinueButtonPopupButton">
          Verify & Continue
        </button>
      </div>
    </div>
    <!-- Sucessfully popup -->
    <div v-if="showSuccessNumberModal" class="VerifyOTPModalProfilePage"
      @click.self="!isSuccessStatus ? closeSuccessNumberModal() : null">
      <div class="VerifyOTPModalPopupPortion">
        <!-- Close Button -->
        <button v-if="!isSuccessStatus" @click="closeSuccessNumberModal" class="CrossIconProfilePopup">×</button>
        <div class="VerifyOTPCaptionPortionPopup">
          <div class="CongratulationProfileOTPimage">
            <img src="/assets/images/1.0/png/congratulationimage.png" />
          </div>
          <div class="TextCaptionsuccessPortionOTP">
            <h3>{{ MessageText }}</h3>
          </div>
        </div>
        <!-- Login Button -->
        <button v-if="isSuccessStatus" class="LoginButtonSuccessTime mt-3" @click="handleSuccessLogin">
          Login
        </button>
      </div>
    </div>
  </section>
</template>



<script>
import Api from "@/Api";
import Common from "@/Common";
import GoogleAnalytics from "@/GoogleAnalytics";
export default {
  name: "register",
  data() {
    return {
      dismissCountDown: 0,
      dismissSecs: 5,
      page: 1,
      totalPassengers: 0,
      numberOfPages: 0,
      passengers: [],
      value: [],
      loading: true,
      new_loading: true,
      options: {},
      sortBy: '',
      orderBy: '',
      firstName: '',
      lastName: '',
      email: '',
      mobilenumber: '',
      country: '',
      state: '',
      city: '',
      resellerCode: '',
      error: '',
      search: '',
      listCountry: [],
      selectedHeaders: [],
      listState: [],
      listCities: [],
      headers: [
        { text: 'Name', value: 'name', sortable: false },
        { text: 'Mobile Number', value: 'mobile', sortable: false },
        // { text: 'Action', value: 'action', align: 'center', sortable: false }
      ],
      fullName: "",
      postalcode: "",
      isPaid: "",
      source: "",
      accountopenTab: 1,
      showVerifyOTPModal: false,
      otp: ["", "", "", ""],
      otpError: "",
      showNewNumberModal: false,
      newMobileNumber: "",
      newNumberError: "",
      showNewNumberOTPModal: false,
      newOtp: ["", "", "", ""],
      newOtpError: "",
      showSuccessNumberModal: false,
      loginId: "",
      loginId1: "",
      MessageText: "",
      isSuccessStatus: false,
      webUrl: process.env.VUE_APP_WEB_URL,
      countdown: 60,
      timer: null,
      resendVisible: false,
      newCountdown: 60,
      newTimer: null,
      newResendVisible: false,
    };

  },
  watch: {
    value(val) {
      this.selectedHeaders = val;
      console.log(this.headers);
      // console.log(this.selectedHeaders[0].value);
    },
    options: {
      handler() {
        this.getSubUsersByCustomerId("");
      },
    },
    deep: true
  },
  computed: {
    otpDigits() {
      return Array(4).fill("");
    }
  },
  created() {
    // this.loadCountry();
    this.getcustomerid();
  },

  methods: {
    openOTPModal() {
      const data = {
        mobile: this.mobilenumber,
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
            this.showVerifyOTPModal = true;
            this.loginId = response.data.data._userId;
            this.startCountdown();
          }
        })
        GoogleAnalytics.Change_Number_Mobile_button(this.mobilenumber);
        console.log(this.mobilenumber);
      this.$nextTick(() => {
        // Focus the first input when modal opens
        if (this.$refs.otpInputs && this.$refs.otpInputs[0]) {
          this.$refs.otpInputs[0].focus();
        }
      });
    },
    closeModal() {
      this.showVerifyOTPModal = false;
      this.otp = ["", "", "", ""];
      this.otpError = "";
      this.newMobileNumber = "";
      this.clearCountdown();
    },
    openNewNumberModal() {
      this.showNewNumberModal = true;
      this.newNumberError = "";
    },
    closeNewNumberModal(clearData = true) {
      this.showNewNumberModal = false;
      if (clearData) {
        this.newMobileNumber = "";
        this.newNumberError = "";
      }
    },
    closeSuccessNumberModal() {
      this.showSuccessNumberModal = false;
    },
    editNewNumber() {
      // Store the current new number before closing
      const numberToEdit = this.newMobileNumber;
      this.closeNewNumberOTPModal();
      this.openNewNumberModal();
      GoogleAnalytics.Edit_Number_button(this.newMobileNumber);
      // Set the number in the input after the modal is opened
      this.$nextTick(() => {
        this.newMobileNumber = numberToEdit;
      });
    },

    closeNewNumberOTPModal() {
      this.showNewNumberOTPModal = false;
      this.newOtp = ["", "", "", ""];
      this.newOtpError = "";
    },
    startCountdown() {
      this.countdown = 60;
      this.resendVisible = false;
      this.clearCountdown();

      this.timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          this.resendVisible = true;
          this.clearCountdown();
        }
      }, 1000);
    },
    clearCountdown() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    resendOtp() {
      const data = {
        mobile: this.mobilenumber,
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
            this.loginId = response.data.data._userId;
            this.otp = ["", "", "", ""];
            this.startCountdown();
            this.otpError = false;
          }
        });
        GoogleAnalytics.Resend_Otp_Current_Profile(this.mobilenumber);
    },
    async verifyOtp() {
      const enteredOtp = this.otp.join("");
      if (enteredOtp.length < 4) {
        this.otpError = "Please enter the complete OTP";
        return;
      } else {
        const data = {
          _userId: this.loginId,
          otp: enteredOtp,
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
              this.closeModal();
              this.openNewNumberModal();
              GoogleAnalytics.Otp_Success_Current_Profile(this.mobilenumber);
            } else {
              this.otpError = "Invalid or Expired OTP.";
              GoogleAnalytics.Otp_Failed_Current_Profile(this.mobilenumber);
            }
          })
      }
    },
    async sendNewOTP() {
      const data = {
        mobile: this.newMobileNumber,
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
            this.closeNewNumberModal(false);
            this.showNewNumberOTPModal = true;
            this.loginId1 = response.data.data._userId;
            this.newOtp = ["", "", "", ""];
            this.startNewCountdown();
          }
        })
        GoogleAnalytics.Send_New_Mobile_Number_Profile(this.newMobileNumber);
      // First validate the number format
      if (!this.validateNewNumber()) {
        return; // Don't proceed if validation fails
      }

      // Then validate first digit
      if (!/^[5-9]/.test(this.newMobileNumber)) {
        this.newNumberError = "Please enter valid mobile number";
        return;
      }

      this.$nextTick(() => {
        if (this.$refs.newOtpInputs && this.$refs.newOtpInputs[0]) {
          this.$refs.newOtpInputs[0].focus();
        }
      });
    },
    resendNewOtp() {
      const data = {
        mobile: this.newMobileNumber,
        countryCode: "+91",
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      };
      Api.loginWithOtpgo(data, headers).then((response) => {
        if (response.data.status == "200") {
          this.loginId1 = response.data.data._userId;
          this.newOtp = ["", "", "", ""];
          this.startNewCountdown();
          this.newOtpError = false;
        }
      });
      GoogleAnalytics.Resend_Otp_New_Number_Profile(this.newMobileNumber);
    },
    startNewCountdown() {
      this.newCountdown = 60;
      this.newResendVisible = false;
      this.clearNewCountdown();

      this.newTimer = setInterval(() => {
        if (this.newCountdown > 0) {
          this.newCountdown--;
        } else {
          this.newResendVisible = true;
          this.clearNewCountdown();
        }
      }, 1000);
    },
    clearNewCountdown() {
      if (this.newTimer) {
        clearInterval(this.newTimer);
        this.newTimer = null;
      }
    },
    async verifyNewOtp() {
      const enteredOtp = this.newOtp.join("");
      if (enteredOtp.length < 4) {
        this.newOtpError = "Please enter the complete OTP";
        return;
      }
      const data = {
        _userId: this.loginId1,
        otp: enteredOtp,
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
            const data = {
              requestFrom: "WEB",
              _userId: this.loginId,
              oldMobile: this.mobilenumber,
              newMobile: this.newMobileNumber,
            };
            const headers = {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              token: localStorage.getItem("webAuthToken"),
            };
            Api.exchangeMobileNumber(data, headers)
              .then((response) => {
                if (response.data.status == "200") {
                  this.closeNewNumberOTPModal();
                  this.showSuccessNumberModal = true;
                  this.MessageText = response.data.message;
                  this.isSuccessStatus = true;  // New flag to track success status
                  localStorage.clear();
                  console.log("localStorage after clearing:", localStorage);
                  GoogleAnalytics.Success_Old_Number_Profile(this.mobilenumber);
                  GoogleAnalytics.Success_Exchange_New_Number_Profile(this.newMobileNumber);
                } else {
                  this.closeNewNumberOTPModal();
                  this.showSuccessNumberModal = true;
                  this.MessageText = response.data.message;
                  this.isSuccessStatus = false;
                  GoogleAnalytics.Failed_Exchange_Number(this.newMobileNumber);
                }
              })
              .catch((err) => {
                console.log(err.response);
                this.closeNewNumberOTPModal();
                this.showSuccessNumberModal = true;
                this.MessageText = err.response.data.message;
                this.isSuccessStatus = false;
              });
              GoogleAnalytics.Otp_Success_New_Number_Profile(this.newMobileNumber);
          } else {
            this.newOtpError = "Invalid or Expired OTP.";
            GoogleAnalytics.Otp_Failed_New_Number_Profile(this.newMobileNumber);
          }
        })

    },
    handleSuccessLogin() {
      window.location.href = `${this.webUrl}`;
      GoogleAnalytics.Success_Exchange_Login_Button();
    },
    handleNewOtpInput(index, event) {
      if (this.newOtpError) {
        this.newOtpError = "";
      }

      if (event.target.value && index < 3) {
        this.$nextTick(() => {
          this.$refs.newOtpInputs[index + 1].focus();
        });
      }
    },

    handleNewBackspace(index, event) {
      if (this.newOtpError) {
        this.newOtpError = "";
      }

      if (event.key === 'Backspace' && !event.target.value && index > 0) {
        this.$nextTick(() => {
          this.$refs.newOtpInputs[index - 1].focus();
          this.newOtp[index - 1] = "";
        });
      }
    },
    validateNewNumber() {
      this.newNumberError = "";

      // Validate length
      if (this.newMobileNumber.length !== 10) {
        this.newNumberError = "Please enter 10-digit mobile number";
        return false;
      }

      // Validate first digit (5-9)
      if (!/^[5-9]/.test(this.newMobileNumber)) {
        this.newNumberError = "Please enter valid number";
        return false;
      }

      return true;
    },

    handleOtpInput(index, event) {
      if (this.otpError) {
        this.otpError = "";
      }

      if (event.target.value && index < 3) {
        this.$nextTick(() => {
          this.$refs.otpInputs[index + 1].focus();
        });
      }
    },
    handleBackspace(index, event) {
      // Clear error when user presses backspace
      if (this.otpError) {
        this.otpError = "";
      }

      // Move to previous input on backspace if current input is empty
      if (event.key === 'Backspace' && !event.target.value && index > 0) {
        this.$nextTick(() => {
          this.$refs.otpInputs[index - 1].focus();
          this.otp[index - 1] = "";
        });
      }
    },
    updateUserName(newUserName) {
      this.$store.dispatch("Web1_Store/setUserName", newUserName);
    },
    html_tag_notaccept(field, event) {
      const input = event.target.value;
      // Create a temporary DOM element to strip out any HTML tags
      let tempDiv = document.createElement('div');
      tempDiv.innerHTML = input;
      const sanitizedValue = tempDiv.textContent || tempDiv.innerText || "";
      // Update the corresponding data property with the sanitized value
      this[field] = sanitizedValue;
      // Update the input element value directly (to reflect changes in real-time)
      event.target.value = sanitizedValue;

    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    register(e) {

      this.error = [];
      if (this.fullName && this.email && this.mobilenumber && this.postalcode) {
        console.log("no error");
      }
      if (!this.fullName) {
        this.error['fullName'] = 'Full Name is required';
      }
      if (this.fullName != '') {
        this.fullName = this.fullName.trim();
        const regex = /^[a-zA-Z\s]+$/;
        if (!regex.test(this.fullName)) {
          this.error['fullName'] = 'Please enter valid fullname';
        }
      }
      if (!this.email) {
        this.error['email'] = 'Email is required';
      }

      if (this.email != '') {
        this.email = this.email.trim();
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(this.email)) {
          this.error["email"] = "Please enter valid email";
        }
      }

      if (!this.mobilenumber) {
        this.error['mobilenumber'] = 'Mobile Number is required';
      }
      if (!this.postalcode) {
        this.error['postalcode'] = 'Postal Code is required';
      }
      if (this.postalcode != '') {
        if (/^(\d{4}|\d{6})$/.test(this.postalcode) === false) {
          this.error['postalcode'] = "Please enter valid postalcode";
        }
      }

      e.preventDefault();
      if (Object.keys(this.error).length === 0) {
        const data = {
          _userId: localStorage.getItem('customerId'),
          requestFrom: "WEB",
          email: this.email,
          name: this.fullName,
          resellerCode: this.resellerCode,
          pinCode: this.postalcode,
          actionType: "UPDATE"
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "token": localStorage.getItem('webAuthToken')
        };
        Api.updatecustomer(data, headers)
          .then(response => {
            const responseData = Common.getStatusForActionFailed(response.data.status);
            if (responseData == "200") {
              this.updateUserName(this.fullName);
              localStorage.setItem('email', this.email);
              localStorage.setItem('customeremail', this.email);
              this.$router.push({ name: 'dashboard' });
            }

          })
      }

    },
    loadCountry() {

      const data = {
        requestFrom: "PORTAL"
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      };
      Api.getCountry(data, headers)
        .then(response => {
          if (response.data.status === "1") {
            this.listCountry = response.data.data.list;
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
        requestFrom: "PORTAL",
        countryName: this.country
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      };
      Api.getState(data, headers)
        .then(response => {
          if (response.data.status === "1") {
            this.listState = response.data.data.list;
            this.new_loading = false;
          }
        })
        .catch((err) => {
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
    getcustomerid() {

      const data = {
        _userId: localStorage.getItem('customerId'),
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "token": localStorage.getItem('webAuthToken')
      };
      Api.getcustomerDetailsGo(data, headers)
        .then(response => {
          if (this.fullName == '') {

            this.fullName = response.data.data.name;
          }
          this.postalcode = response.data.data.pinCode;
          this.mobilenumber = response.data.data.mobile;
          this.email = response.data.data.email;
          this.firstName = response.data.data.firstName;
          this.lastName = response.data.data.lastName;
          this.country = response.data.data.country;

          this.state = response.data.data.state;
          if (this.state !== "") {
            this.city = response.data.data.city;
          }


        })
    },
    getSubUsersByCustomerId(type = "") {
      var self = this;
      this.loading = true;
      this.new_loading = true;
      if (type === "search") {
        this.options.page = 1;
      }
      const { page, itemsPerPage } = this.options;
      console.log("Page Number ", page, itemsPerPage);
      let pageNumber = page - 1;
      const data = {
        _userId: localStorage.getItem('customerId'),

        requestFrom: "WEB",
        searchTerm: this.search,

      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "token": localStorage.getItem('webAuthToken')
      };
      this.passengers = [];
      Api.getSubUsers(data, headers)
        .then(response => {
          console.log(response);
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = '/';
          }
          else {
            let totalPages = Math.ceil(response.data.data.totalCount / itemsPerPage);
            this.loading = false;
            this.new_loading = false;
            this.passengers = response.data.data.list;
            this.totalPassengers = response.data.data.totalCount;
            this.numberOfPages = totalPages;
            this.selectedHeaders = this.headers;
          }

        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },
    updateSort(byDesc, event) {
      if (byDesc == 'by') {
        this.sortBy = event;
        this.orderBy = "-1";
      } else if (byDesc == 'desc') {
        if (event == true) {
          this.orderBy = "1";
        } else {
          this.orderBy = "-1";
        }
      }
      GoogleAnalytics.my_account_screen_sorting(this.sortBy, this.orderBy);
      console.log(this.sortBy);
      console.log(this.orderBy);
    },
    handleBlur() {
      const type = "search";
      GoogleAnalytics.my_account_screen_search(this.search);
      this.getSubUsersByCustomerId(type);
    },
    delete_user(id) {
      const data = {
        mainCustomerId: localStorage.getItem('customerId'),
        customerId: id,
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "token": localStorage.getItem('webAuthToken')
      };
      Api.deleteSubUserByCustomerId(data, headers)
        .then(response => {
          if (response.data.status === "1") {
            this.$router.push({ name: 'My Account' });
          }
        })
    },
    accounttoggleTabs: function (tabNumber) {
      this.accountopenTab = tabNumber
    },

  },
  mounted() {
    this.source = localStorage.getItem('source');
    this.isPaid = localStorage.getItem('isPaid');
  },

};
</script>
<style scoped>
.ProfileTitleNewHeading h4{font-size:18px;font-weight:600;color:#1a1a1a;margin:10px 0;}
</style>