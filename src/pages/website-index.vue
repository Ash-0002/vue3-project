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
    <!------------------start desktop device front----------------------------------->
    <section class="desktop-front-first-new-section mobile-device-hide-front-first" 
    style="">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-12">
            <div class="desktop-left-section-caption">
              <div class="desktop-left-tally-image-web-mobile">
                <img src="/assets/images/1.0/desktopdevice/svg/desktop-tally-mobile-web.svg" width="510" height="146" alt="Tally-Logo" />
              </div>
              <div class="desktop-device-new-features-content-design">
              <ul>
              <li>
                <i aria-hidden="true" class="fa fa-check"></i> 
                View Tally Data Anywhere
              </li>
              <li>
                <i aria-hidden="true" class="fa fa-check"></i> 
                Tally Data Backup
              </li>
            </ul>
            <ul>
              <li>
                <i aria-hidden="true" class="fa fa-check"></i> 
                eWay Bills & eInvoices
              </li>
              <li>
                <i aria-hidden="true" class="fa fa-check"></i> 
                Payment Reminder
              </li>
            </ul>
            </div>
            <div class="desonload-connector-desktop-device-new">
                    <button class="free_download_connector_black_new_desktop" @click="windows_file_download()">
                      <a
                        href="javascript:void(0);"
                      >
                        FREE DOWNLOAD
                        <img width="26" height="28"
                          src="/assets/images/1.0/desktopdevice/download-arrow.svg"
                          alt="Download Icon | Livekeeping"
                        />
                      </a>
                    </button>
                    <div class="only-arrow-image-new-desktop">
                      <img src="/assets/images/1.0/desktopdevice/only-arrow-image.png" width="50" height="73" alt="Arrow" />
                    </div>
                  </div>
                  <div class="set-connector-message-caption-short">
                    <p>Access your Tally data anytime from mobile</p>
                  </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 position-relative">
            <div class="desktop-device-new-image-right">
              <img src="/assets/images/1.0/desktopdevice/svg/new-banner-image.svg" alt="Web Dashboard" width="711" height="530" />
            </div>
          </div>
        </div>
      </div>
      <div class="green_box_message">
        <div class="container">
       <ul>
        <li>
          <img width="24" height="27"
              src="/assets/images/1.0/web_images/home/shield-check.svg"
              alt="Security Icon | Livekeeping"
            />
            Trusted by 50000+ Businesses
            </li>
            <li style="border-right:none;">
              <img width="36" height="30"
              src="/assets/images/1.0/desktopdevice/iso-image-white.png"
              alt="Security Icon | Livekeeping"
            />
            ISO 27701 & 27001 Certified
            </li>
       </ul>
        </div>
      </div>
    </section>
    <!------------------start mobile device section---------------------------------->
    <section
      class="mobile-devicenew-design-front-section desktop-device-hide-new-frot" id="mobileHome"
    >
      <div class="container">
        <div class="mobile-device-front-inner-main-div">
         
          <div class="mobile-device-tally-new-logo-heading-part">
            <img
              src="/assets/images/1.0/mobiledevice/svg/tally-web-mobile-logo.svg"
              class="img-fluid" alt="Tally Logo Mobile"
            />
          </div>
          <div class="mobile-device-features-separate">
            <ul>
              <li>
                <div class="mobile-device-features-logo-new">
                  <img
                    src="/assets/images/1.0/mobiledevice/svg/tally-data.svg"
                    class="img-fluid" alt="Data"
                  />
                </div>
                <div class="mobile-device-features-content-caption-new">
                  <p>View Tally<br class="display-block" />Data 24 X 7</p>
                </div>
              </li>
              <li>
                <div class="mobile-device-features-logo-new">
                  <img
                    src="/assets/images/1.0/mobiledevice/svg/payment-reminders.svg"
                    class="img-fluid" alt="Reminder"
                  />
                </div>
                <div class="mobile-device-features-content-caption-new">
                  <p>Set Payment<br class="display-block" />Reminders</p>
                </div>
              </li>
              <li>
                <div class="mobile-device-features-logo-new">
                  <img
                    src="/assets/images/1.0/mobiledevice/svg/data-backup.svg"
                    class="img-fluid" alt="Tally backup and restore"
                  />
                </div>
                <div class="mobile-device-features-content-caption-new">
                  <p>Tally Data<br class="display-block" />Backup</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="form-box-mobile-number-mobile-device">
            <div class="" v-show="showFirstDiv">
              <div class="form-box-title-heading-mobilenumber">
                <h4>Get Started</h4>
              </div>
              <div class="form-box-mobile-number-input-mobile-device">
                <span class="input-group-addon-mobile-device">+91</span>
                <input
                  name=""
                  type="number"
                  maxlength="10"
                  v-model="mobiledevice_number"
                  class="form-control mobile-device-input-mobile-number-form"
                  placeholder="Enter Your Mobile Number"
                  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                />
              </div>
              <p v-show="showError" class="error-message-mobile-device">
                Please enter a valid number
              </p>
              <div class="get-started-button-mobile-device-form">
                <button
                  type="button"
                  @click="checkNumber"
                  class="get-started-btn-form-mobile"
                >
                  FREE DOWNLOAD
                  <span v-show="showSpinner"
                    ><i class="fa fa-spinner fa-spin"></i
                  ></span>
                </button>
              </div>
            </div>
          </div>
          <div class="mobile-device-trusted-bg-content-caption">
            <div class="mobile-device-trusted-bg-image-content">
              <h5>
                <span>Trusted</span> By <span>50,000+</span> Businesses
              </h5>
              <ul>
                <li>
                  <img src="/assets/images/1.0/web_images/secure.png" alt="secure and certified" class="img-fluid" />
                  100% secure
                </li>
                <li>
                  <img src="/assets/images/1.0/web_images/iso.png" alt="ISO certified" class="img-fluid" /> ISO
                  27701 & 27001 Certified
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-------------------end mobile device section----------------------------------->
    <section id="features" class="section_pading">
      <div class="container">
        <div class="section_header_name">
          <h3 class="">Features</h3>
          <span></span>
        </div>
       
       <div class="row">
        <div class="col-lg-10 mx-auto col-md-12 col-12">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="why_lkp_image">
                <img width="1024" height="1024" src="/assets/images/1.0/desktopdevice/svg/eway-bills.svg" alt="Generate eway Bills | Generate einvoice" class="img-fluid" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="why_lkp_content">
                <h2>Generate eWay Bills & eInvoices on the go</h2>
                <p>
                  Easily generate e-way bills in <strong>under 30 seconds with 25+ validations</strong> checks. Create e-invoices and e-way bills together.
                </p>
                <!-- <a href="javascript:void(0)" @click="requestdemo" v-if="isrequestdemo">+ Request Demo</a> -->
                <div v-show="showFirstDivFeatures1">
                <div class="request_demo_number">
                  <span>+91</span>
                  <input type="number" v-model="mobiledevice_numberfeatures1" maxlength="10" placeholder="Enter Mobile Number" oninput="this.value = this.value.slice(0, 10)"/>
                   
                  <button @click="checkNumbereWaybill">Know More 
                    <span class="spinner-for-features-related" v-show="showSpinner1">
                    <i class="fa fa-spinner fa-spin"></i>
                    </span>
                    </button>
                </div>
                <p v-show="showErrorFeatures1" class="error-message-features-mobile">
                  Please enter a valid number</p>
                  </div>
                
                <div class="requestdemotext" v-if="showSecondDivFeatures1">
                  <p>Thank you. Our team will call back shortly. You can also reach us at +91 <span>8383838383</span></p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="row align-items-center">
            <div
              class="col-lg-6 col-md-6 col-sm-12 col-12 mobile_order_2"
            >
              <div class="why_lkp_content">
                <h2>Get Inactive Customers & Items Reports</h2>
                <p>Understand your inactive customers and items.<br><strong>Re-engage</strong> with them to grow your business.</p>
                <div v-if="showFirstDivFeatures2">
                <div class="request_demo_number">
                  <span>+91</span>
                  <input type="number" v-model="mobiledevice_numberfeatures2" maxlength="10" placeholder="Enter Mobile Number" oninput="this.value = this.value.slice(0, 10)"/> 
                  <button @click="checkNumberInactivecustomer">Know More 
                    <span class="spinner-for-features-related" v-show="showSpinner2">
                    <i class="fa fa-spinner fa-spin"></i>
                    </span>
                    </button>
                </div>
                <p v-show="showErrorFeatures2" class="error-message-features-mobile">
                  Please enter a valid number</p>
                </div>
                <div class="requestdemotext" v-if="showSecondDivFeatures2">
                  <p>Thank you. Our team will call back shortly. You can also reach us at +91 <span>8383838383</span>.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="why_lkp_image">
                <img width="1024" height="1024"
                  src="/assets/images/1.0/desktopdevice/svg/inactive-customer.svg"
                  alt="Get Inactive Customers & Items Reports" class="img-fluid"
                />
              </div>
            </div>
          </div>
          
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="why_lkp_image">
                <img width="1024" height="1024"
                  src="/assets/images/1.0/desktopdevice/svg/Payment-Reminder.svg"
                  alt="Send payment reminder" class="img-fluid"
                />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="why_lkp_content">
                <h2>Send Payment Reminder  to Recover Dues</h2>
                <p><strong>Automate</strong> payment reminders via SMS & email to prompt parties for delayed payments, improve cash flow up to <strong>5x</strong>.</p>
                <!-- <a href="javascript:void(0)">+ Know More</a> -->
                <div v-show="showFirstDivFeatures3">
                <div class="request_demo_number">
                  <span>+91</span>
                  <input type="number" v-model="mobiledevice_numberfeatures3" maxlength="10" placeholder="Enter Mobile Number" oninput="this.value = this.value.slice(0, 10)"/>
                   
                  <button @click="checkNumberpaymentreminder">Know More 
                    <span class="spinner-for-features-related" v-show="showSpinner3">
                    <i class="fa fa-spinner fa-spin"></i>
                    </span>
                    </button>
                </div>
                <p v-show="showErrorFeatures3" class="error-message-features-mobile">
                  Please enter a valid number</p>
                  </div>
                
                <div class="requestdemotext" v-if="showSecondDivFeatures3">
                  <p>Thank you. Our team will call back shortly. You can also reach us at +91 <span>8383838383</span></p>
                </div>
              </div>
            </div>
          </div>

          <div class="row align-items-center">
            <div
              class="col-lg-6 col-md-6 col-sm-12 col-12 mobile_order_2"
            >
              <div class="why_lkp_content">
                <h2>Tally Backup and<br>Restore</h2>
                <p>Be ready with backup for your Tally. <strong>Never loose</strong> any data in case of migration or system crash.</p>
                
                <div v-if="showFirstDivFeatures4">
                <div class="request_demo_number">
                  <span>+91</span>
                  <input type="number" v-model="mobiledevice_numberfeatures4" maxlength="10" placeholder="Enter Mobile Number" oninput="this.value = this.value.slice(0, 10)"/> 
                  <button @click="checkNumbertallybackup">Know More
                    <span class="spinner-for-features-related" v-show="showSpinner4">
                    <i class="fa fa-spinner fa-spin"></i>
                    </span>
                    </button>
                </div>
                <p v-show="showErrorFeatures4" class="error-message-features-mobile">
                  Please enter a valid number</p>
                </div>
                <div class="requestdemotext" v-if="showSecondDivFeatures4">
                  <p>Thank you. Our team will call back shortly. You can also reach us at +91 <span>8383838383</span>.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="why_lkp_image">
                <img width="1024" height="1024"
                  src="/assets/images/1.0/desktopdevice/svg/Data-Backup.svg"
                  alt="Tally backup and restore" class="img-fluid"
                />
              </div>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="why_lkp_image">
                <img width="1024" height="1024"
                  src="/assets/images/1.0/desktopdevice/svg/Create-Entries.svg"
                  alt="Create gst bills" class="img-fluid"
                />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="why_lkp_content">
                <h2>Create GST Bills and share on Whatsapp</h2>
                <p>Simplify your workflow by creating GST bills & instantly share via WhatsApp, email to <strong>save time and minimize errors.</strong></p>
                <!-- <a href="javascript:void(0)">+ Know More</a> -->
                <div v-show="showFirstDivFeatures5">
                <div class="request_demo_number">
                  <span>+91</span>
                  <input type="number" v-model="mobiledevice_numberfeatures5" maxlength="10" placeholder="Enter Mobile Number" oninput="this.value = this.value.slice(0, 10)"/>
                   
                  <button @click="checkNumbercreatebill">Know More 
                    <span class="spinner-for-features-related" v-show="showSpinner5">
                    <i class="fa fa-spinner fa-spin"></i>
                    </span>
                    </button>
                </div>
                <p v-show="showErrorFeatures5" class="error-message-features-mobile">
                  Please enter a valid number</p>
                  </div>
                
                <div class="requestdemotext" v-if="showSecondDivFeatures5">
                  <p>Thank you. Our team will call back shortly. You can also reach us at +91 <span>8383838383</span></p>
                </div>
              </div>
            </div>
          </div>

          <div class="row align-items-center">
            <div
              class="col-lg-6 col-md-6 col-sm-12 col-12 mobile_order_2"
            >
              <div class="why_lkp_content">
                <h2>View Daily Books, Expense Tracking, Balance Sheet</h2>
                <p>Evaluate your daily business performance with comprehensive financial reports, enabling you to make informed, and <strong>data-driven decisions.</strong></p>
                
                <div v-if="showFirstDivFeatures6">
                <div class="request_demo_number">
                  <span>+91</span>
                  <input type="number" v-model="mobiledevice_numberfeatures6" maxlength="10" placeholder="Enter Mobile Number" oninput="this.value = this.value.slice(0, 10)"/> 
                  <button @click="checkNumberreports">Know More 
                    <span class="spinner-for-features-related" v-show="showSpinner6">
                    <i class="fa fa-spinner fa-spin"></i>
                    </span>
                    </button>
                </div>
                <p v-show="showErrorFeatures6" class="error-message-features-mobile">
                  Please enter a valid number</p>
                </div>
                <div class="requestdemotext" v-if="showSecondDivFeatures6">
                  <p>Thank you. Our team will call back shortly. You can also reach us at +91 <span>8383838383</span>.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="why_lkp_image">
                <img width="1024" height="1024"
                  src="/assets/images/1.0/desktopdevice/svg/View-Reports.svg"
                  alt="View daily books, expense tracking, balance sheet" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

     <!------- new pricing plan start ------->
    <!-- <section id="pricing" class="section_pading New_prcing_plan">
      <div class="container">
        <div class="row align-items-center dektop-width-set-pricing">
          <div class="col-lg-5 col-md-5 col-12">
            <div class="section_header_name pricing_heading">
              <h3 class="">Pricing</h3>
              <span></span>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-12">
            <div class="pricing_plan_selection">
              <span class="pricing_radio marign_right">
                <input id="1year" name="pricing_plan" type="radio" @click="selectoneyearplan" checked>
                <label for="1year" class="radio-label">1 Year</label>
              </span>
              <span class="pricing_radio">
                <input id="3year" name="pricing_plan" type="radio" @click="selectthreeyearplan">
                <label for="3year" class="radio-label one_year_free">2 Years
                  <span class="plus_one_year">+1 Year FREE</span>
                </label>              
              </span>
            </div>
          </div>
        </div>

        <div class="row align-items-center mobile_pricing dektop-width-set-pricing pricing_top_padding">
          <div class="col-lg-4 col-md-12 col-12">
            <div class="pricing_card free_pricing_card">
              <div class="pricing_head_top">FREE FOREVER</div>
              <h2><span class="font_sans">₹</span> 0</h2>
              <div class="pricingplan_listing">
                <p><i class="fa fa-check"></i>Mobile & Web version</p>
                <p><i class="fa fa-check"></i>Limited Access</p>
              </div>
              <div class="pricing_started" @click="basic_access_getstarted_free()">
                <a href="https://pay.livekeeping.com/" target="_blank">GET STARTED</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-12">
            <div class="pricing_card gworth_pricing_card">
              <div class="pricing_head_top">GROWTH</div>
              <h2 v-if="oneyearplan_amount"><span class="font_sans">₹</span> 3,000</h2>
              <h2 v-if="threeyearplan_amount">
                <span class="discount_plan_pricing"><span class="font_sans">₹</span> 9,000</span>
                <span class="font_sans">₹</span> 6,000
              </h2>
              <div class="pricingplan_listing">
                <p><i class="fa fa-check"></i>App & Web View</p>
                <p><i class="fa fa-check"></i>Payment reminders</p>
                <p><i class="fa fa-check"></i>Create new entries</p>
                <p><i class="fa fa-check"></i>20+ Business reports</p>
                <p><i class="fa fa-check"></i>Data Backup</p>
                <p><i class="fa fa-check"></i>Check in - Check out</p>
                <p><i class="fa fa-close"></i>eWay Bills <span class="new_pricing">NEW</span></p>
                <p><i class="fa fa-close"></i>eInvoices <span class="new_pricing">NEW</span></p>
              </div>
              <div class="pricing_started device-wise-buy-now-button-set" @click="website_growth_plan()">
                <a :href="`${growth_url}`" target="_blank">BUY NOW</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-12">
            <div class="pricing_card recommended_pricing">
              <img src="/assets/images/1.0/web_images/recommended-overlay.png" width="70" height="76" alt="Pattern"
                    class="img-fluid pricing_overlay" />
                <div class="pricing_head_top">ADVANCED</div>
                <h2 v-if="oneyearplan_amount"><span class="font_sans">₹</span> 5,000</h2>
                <h2 v-if="threeyearplan_amount">
                <span class="discount_plan_pricing"><span class="font_sans">₹</span> 15,000</span>
                <span class="font_sans">₹</span> 10,000
              </h2>
                <div class="pricingplan_listing">
                <p><i class="fa fa-check"></i>App & Web View</p>
                <p><i class="fa fa-check"></i>Payment reminders</p>
                <p><i class="fa fa-check"></i>Create new entries</p>
                <p><i class="fa fa-check"></i>20+ Business reports</p>
                <p><i class="fa fa-check"></i>Data Backup</p>
                <p><i class="fa fa-check"></i>Check in - Check out</p>
                <p><i class="fa fa-check"></i>eWay Bills <span class="new_pricing">NEW</span></p>
                <p><i class="fa fa-check"></i>eInvoices <span class="new_pricing">NEW</span></p>
              </div>
                <div class="pricing_started device-wise-buy-now-button-set" @click="website_advanced_plan()">
                  <a :href="`${advanced_url}`" target="_blank">BUY NOW</a>
                </div>
              </div>
          </div>
        </div>

      </div>
    </section> -->
    <!------- new pricing plan end ------->

    <!-------start New Implement Pricing----------------->
    <section id="pricing" class="section_pading New_prcing_plan">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12">
            <div class="text-center section_header_name">
              <h3 class="">Pricing</h3>
              <span></span>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8 col-12">
            <div class="PricingTextuser">
              <p>Choose a plan for 1 user</p>
            </div>
            <div class="NewPricingDefaultDesign">
              <ul class="FreeOneWithThreePlans d-flex justify-content-center">
                <li class="FreeForeverLiPart text-center">
                  <div class="FirstFreeForeverBox">
                  <h4 style="text-transform:uppercase;">Free Plan</h4>
                  <span></span>
                  <h3><span class="font_sans">₹</span> 0</h3>
                  <div class="FreeForeverFeatures">
                    <p><i class="fa fa-check"></i>Limited Access</p>
                    <p><i class="fa fa-check"></i>Mobile App &amp; Web view</p>
                  </div>
                  <div class="FreeForeverBottomButton">
                    <a href="https://pay.livekeeping.com/" target="_blank" @click="FreeForeverGetStarted()">
                    <button>
                      GET STARTED
                    </button>
                  </a>
                  </div>
                </div>
                </li>
                <li class="SecondOneYearLiPart text-center">
                  <div class="SecondOneYearBox">
                  <h4>1 YEAR</h4>
                  <span></span>
                  <h3><span class="font_sans">₹</span> 3,000</h3>
                  <div class="SecondOneYearFeatures">
                    <p><i class="fa fa-check"></i>Full Access</p>
                    <p><i class="fa fa-check"></i>Mobile App &amp; Web view</p>
                    <p><i class="fa fa-check"></i>Payment Reminders</p>
                    <p><i class="fa fa-check"></i>Create New Entries</p>
                    <p><i class="fa fa-check"></i>20+ Business Reports</p>
                    <p><i class="fa fa-check"></i>Tally Backup</p>
                  </div>
                  <div class="SecondOneYearBottomButton">
                    <a href="https://pay.livekeeping.com/?p=1" target="_blank" @click="OneYearBuyNow()">
                    <button>
                      BUY NOW
                    </button>
                  </a>
                  </div>
                </div>
                </li>
                <li class="ThirdThreeYearsLiPart text-center">
                  <img src="/assets/images/1.0/web_images/recommended-overlay.png" width="70" height="76" alt="Pattern" class="img-fluid NewPricingOverlayPattern">
                  <span class="ThirdThreeYearsRecommended">RECOMMENDED</span>
                  <div class="ThirdThreeYearsBox">
                  <h4>3 YEARS</h4>
                  <span></span>
                  <h3><span class="font_sans">₹</span> 7,000</h3>
                  <div class="OfferSectionThirdThree d-flex align-items-center justify-content-center">
                    <h6><span class="font_sans">₹</span> 9,000</h6>
                    <h5>22% OFF</h5>
                  </div>
                  <div class="ThirdThreeYearsFeatures">
                    <p><i class="fa fa-check"></i>Full Access</p>
                    <p><i class="fa fa-check"></i>Mobile App &amp; Web view</p>
                    <p><i class="fa fa-check"></i>Payment Reminders</p>
                    <p><i class="fa fa-check"></i>Create New Entries</p>
                    <p><i class="fa fa-check"></i>20+ Business Reports</p>
                    <p><i class="fa fa-check"></i>Tally Backup</p>
                  </div>
                  <div class="ThirdThreeYearsBottomButton">
                    <a href="https://pay.livekeeping.com/?p=3" target="_blank" @click="ThreeYearsBuyNow()">
                    <button>
                      BUY NOW
                    </button>
                  </a>
                  </div>
                </div>
                </li>
              </ul>
            </div>
            <div class="AdonsNewPriceDesign text-center">
              <p><span>ADDONS</span> : eWay bills, eInvoices, Additional user. <a href="https://pay.livekeeping.com/" target="_blank">Buy Now</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-------end New Implement Pricing----------------->

    <section id="bookdemo">
      <div class="container">
        <div class="row align-items-center dektop-width-set-pricing">
          <div class="col-lg-5 col-md-12 col-12">
            <h4>Book Free Demo Now</h4>
          </div>
          <div class="col-lg-7 col-md-12 col-12">
            <div v-if="showFirstDivScheduleDemo">
                <div class="book_demo_form">
                  <div class="book_demo_only_span_input">
                  <span>+91</span>
                  <input type="number" v-model="mobiledevice_numberscheduledemo" maxlength="10" placeholder="Enter Mobile Number" oninput="this.value = this.value.slice(0, 10)"/> 
                  </div>
                  <p v-show="showErrorScheduleDemo" class="error-message-bookdemo-mobile">
                  Please enter a valid number</p>
                  <button @click="checkNumberScheduleDemo"> Schedule a Demo 
                    <span class="spinner-for-bookdemo-related" v-show="showSpinnerScheduleDemo">
                    <i class="fa fa-spinner fa-spin"></i>
                    </span>
                    </button>
                </div>
                
                </div>
                <div class="bookdemo-after-mobile-number" v-if="showSecondDivScheduleDemo">
                  <p>Thank you. Our team will call back shortly. You can also reach us at <span>+91</span>  <span>8383838383</span> </p>
                </div>
            
          </div>
        </div>
      </div>
    </section>


    <section id="testimonials" class="section_pading">
      <div class="container">
        <div class="section_header_name">
          <h3 class="">Testimonials</h3>
          <span></span>
        </div>

        <div class="our-testimonial-carousel">
          <div class="owl-carousel owl-theme">
            <div class="item">
              <div class="client_review">
                <p>
                  I have now knowledge about all my parties with this app, I see
                  daily sales, send payment reminders to customers from
                  anywhere.<br />
                  Livekeeping has made account handling very easy by making this
                  wonderful application.
                </p>
                <div class="client_detail">
                  <h5>Rakesh Mehta</h5>
                  <h6>M G Mehta and Sons, Mutha Labels Corporation.</h6>
                  <h6>(Livekeeping User with Multiple Company and Users)</h6>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="client_review">
                <p>
                  Excellent shortcut to monitor your business connected to Tally
                  with Livekeeping, The support staff excellence service is the
                  main key behind the success. Satisfied with the app
                </p>
                <div class="client_detail">
                  <h5>Avnish Kumar</h5>
                  <h6>A V Industries Pvt Ltd</h6>
                  <h6>(Livekeeping User)</h6>

                </div>
              </div>
            </div>
            <div class="item">
              <div class="client_review">
                <p>
                  I can make invoices on tally from my phone, send invoice to
                  clients, all without being in the office, multiple accounts
                  can be checked and shared all from the application. It’s a
                  wonderful application for business owners as well as employees
                </p>
                <div class="client_detail">
                  <h5>Ronak Singh</h5>
                  <h6>(Livekeeping User with on field job)</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="faqs" class="section_pading bg-light-grey-faqs">
      <div class="container">
        <div class="section_header_name">
          <h3 class="">FAQ</h3>
          <span></span>
        </div>

        <div class="faq_inner_div">
          <ul class="faq_list">
            <li class="">
              <a
                class="faq_atag"
                v-on:click="faqtoggleTabs(1)"
                v-bind:class="{ active_faq: faqopenTab === 1 }"
              >
                General
              </a>
            </li>
            <li class="">
              <a
                class="faq_atag"
                v-on:click="faqtoggleTabs(2)"
                v-bind:class="{ active_faq: faqopenTab === 2 }"
              >
                Subscription and Payments
              </a>
            </li>
            <li class="">
              <a
                class="faq_atag"
                v-on:click="faqtoggleTabs(3)"
                v-bind:class="{ active_faq: faqopenTab === 3 }"
              >
                Technical
              </a>
            </li>
            <li class="">
              <a
                class="faq_atag"
                v-on:click="faqtoggleTabs(4)"
                v-bind:class="{ active_faq: faqopenTab === 4 }"
              >
                Support
              </a>
            </li>
            <li class="">
              <a
                class="faq_atag"
                v-on:click="faqtoggleTabs(5)"
                v-bind:class="{ active_faq: faqopenTab === 5 }"
              >
                Features
              </a>
            </li>
          </ul>
          <div class="faq_open_div">
            <div class="tab-content tab-space">
              <div
                v-bind:class="{
                  hidden: faqopenTab !== 1,
                  block: faqopenTab === 1,
                }"
              >
                <div id="accordion_1" class="accordion">
                  <div class="card">
                    <div
                      class="card-header"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                    >
                      <a class="card-title">What is Livekeeping ?</a>
                    </div>
                    <div
                      id="collapseOne"
                      class="card-body collapse show"
                      data-bs-parent="#accordion_1"
                    >
                      <p>
                        Livekeeping is a Tally on Mobile Application. With the
                        help of this App Tally user can easily manage tally from
                        anywhere.
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                    >
                      <a class="card-title"
                        >Can i get demo or free trial of the product?</a
                      >
                    </div>
                    <div
                      id="collapseTwo"
                      class="card-body collapse"
                      data-bs-parent="#accordion_1"
                    >
                      <p>
                        Yes you can get a free trial for 7 days. You can always
                        request for free demo through our website.
                      </p>
                    </div>
                  </div>

                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsenewgeneral"
                    >
                      <a class="card-title">Can Tally be used on mobile?</a>
                    </div>
                    <div
                      id="collapsenewgeneral"
                      class="card-body collapse"
                      data-bs-parent="#accordion_1"
                    >
                      <p>
                        Livkeeping mobile app & web helps the users to access
                        Tally ERP/Tally Prime data in real time on android &
                        iOS.
                      </p>
                    </div>
                  </div>

                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsenew2general"
                    >
                      <a class="card-title">How to use tally on mobile?</a>
                    </div>
                    <div
                      id="collapsenew2general"
                      class="card-body collapse"
                      data-bs-parent="#accordion_1"
                    >
                      <p>
                        Access Tally Prime/Tally ERP 9 on your mobile & web by
                        installing the Tally connector from Livekeeping website.
                      </p>
                    </div>
                  </div>

                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                    >
                      <a class="card-title"
                        >Can I create Invoices,Ledger and Items from Mobile
                        App?</a
                      >
                    </div>
                    <div
                      id="collapseThree"
                      class="card-body collapse"
                      data-bs-parent="#accordion_1"
                    >
                      <p>
                        Yes you can easily create all type of vouchers & other
                        entries through Livekeeping mobile app.Entries created
                        will get sync with tally.
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                    >
                      <a class="card-title"
                        >Is my data secure with Livekeeping?</a
                      >
                    </div>
                    <div
                      id="collapseFour"
                      class="card-body collapse"
                      data-bs-parent="#accordion_1"
                    >
                      <p>
                        Yes, your data is 100% secure with Livekeeping, we use
                        different structured layer of security and provides
                        safety with end to end encryption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-bind:class="{
                  hidden: faqopenTab !== 2,
                  block: faqopenTab === 2,
                }"
              >
                <div id="accordion_2" class="accordion">
                  <div class="card">
                    <div
                      class="card-header"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="true"
                    >
                      <a class="card-title"
                        >What is the Price for LiveKeeping?</a
                      >
                    </div>
                    <div
                      id="collapseFive"
                      class="card-body collapse show"
                      data-bs-parent="#accordion_2"
                    >
                      <p>
                        There are different plans depending on number of
                        restricted users & duration of validity required. Please
                        check the pricing available on the website.
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                    >
                      <a class="card-title"
                        >Is there any option to upgrade my current plan?</a
                      >
                    </div>
                    <div
                      id="collapseSix"
                      class="card-body collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <p>
                        Yes, with LiveKeeping you can always upgrade your
                        current plan.
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                    >
                      <a class="card-title"
                        >How I can renew my subscription after it gets
                        expired?</a
                      >
                    </div>
                    <div
                      id="collapseSeven"
                      class="card-body collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <p>
                        You can visit to our website and pay directly to renew
                        the subscription. If still facing issue please contact
                        our support team.
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven_2"
                    >
                      <a class="card-title"
                        >What are different payment methods are available?</a
                      >
                    </div>
                    <div
                      id="collapseSeven_2"
                      class="card-body collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <p>
                        Livekeeping gives you multiple option to complete your
                        payment with - UPI, bank transfer, other online modes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-bind:class="{
                  hidden: faqopenTab !== 3,
                  block: faqopenTab === 3,
                }"
              >
                <div id="accordion_3" class="accordion">
                  <div class="card">
                    <div
                      class="card-header"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="true"
                    >
                      <a class="card-title"
                        >If Automated syncing gets failed?</a
                      >
                    </div>
                    <div
                      id="collapseEight"
                      class="card-body collapse show"
                      data-bs-parent="#accordion_3"
                    >
                      <p>
                        This often happens when both the software - Tally &
                        Livekeeping connector are not open together. If still
                        facing the same issue then probably ODBC in Tally is not
                        enabled or Port no. might not be same.
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseNine"
                    >
                      <a class="card-title">
                        What is the reason of Data mismatch?</a
                      >
                    </div>
                    <div
                      id="collapseNine"
                      class="card-body collapse"
                      data-bs-parent="#accordion_3"
                    >
                      <p>
                        Data mismatch often happens when an improper syncing
                        takes place. Please check if your Tally is syncing
                        properly with Livekeeping or not.
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTen"
                    >
                      <a class="card-title">Request for adding new features?</a>
                    </div>
                    <div
                      id="collapseTen"
                      class="card-body collapse"
                      data-bs-parent="#accordion_3"
                    >
                      <p>
                        Surely we are open to new feedbacks, but we donot
                        provide customised software. It's a generic product
                        which is same for all the users.
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTen_1"
                    >
                      <a class="card-title"
                        >Is there any option to recover my lost data?</a
                      >
                    </div>
                    <div
                      id="collapseTen_1"
                      class="card-body collapse"
                      data-bs-parent="#accordion_3"
                    >
                      <p>
                        Yes, with Tally back up feature you can always be ready
                        to recover your data in case of any mishappening.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-bind:class="{
                  hidden: faqopenTab !== 4,
                  block: faqopenTab === 4,
                }"
              >
                <div id="accordion_4" class="accordion">
                  <div class="card">
                    <div
                      class="card-header"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEleven"
                      aria-expanded="true"
                    >
                      <a class="card-title">How to add extra company?</a>
                    </div>
                    <div
                      id="collapseEleven"
                      class="card-body collapse show"
                      data-bs-parent="#accordion_4"
                    >
                      <p>
                        You can add unlimited companies just log in to Tally
                        connector app and go to companies section > then Add
                        company > Click on add tab available beside the company
                        name > then go to my company section> click on sync.
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwelve"
                    >
                      <a class="card-title">If Not getting OTP?</a>
                    </div>
                    <div
                      id="collapseTwelve"
                      class="card-body collapse"
                      data-bs-parent="#accordion_4"
                    >
                      <p>You can resend the OTP to your registered email id.</p>
                    </div>
                  </div>
                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThirteen"
                    >
                      <a class="card-title">How to create back up for Tally?</a>
                    </div>
                    <div
                      id="collapseThirteen"
                      class="card-body collapse"
                      data-bs-parent="#accordion_4"
                    >
                      <p>
                        In connector app there is an option to create back up
                        file for your Tally - Daily back up, Weekly back up,
                        Monthly back up.
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThirteen_1"
                    >
                      <a class="card-title"
                        >Are you providing product training?</a
                      >
                    </div>
                    <div
                      id="collapseThirteen_1"
                      class="card-body collapse"
                      data-bs-parent="#accordion_4"
                    >
                      <p>
                        You can always request for free product training for
                        your self and your team members. Contact support for
                        further request.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-bind:class="{
                  hidden: faqopenTab !== 5,
                  block: faqopenTab === 5,
                }"
              >
                <div id="accordion_5" class="accordion">
                  <div class="card">
                    <div
                      class="card-header"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFourteen"
                      aria-expanded="true"
                    >
                      <a class="card-title"
                        >What are different vouchers that I can create?</a
                      >
                    </div>
                    <div
                      id="collapseFourteen"
                      class="card-body collapse show"
                      data-bs-parent="#accordion_5"
                    >
                      <p>
                        With Livekeeping you can create following vouchers -
                        sales, purchase, Receipt, debit note, credit note,
                        quotation, sales order, purchase order, contra.
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFourteen_1"
                    >
                      <a class="card-title"
                        >Can I choose the mode & frequency for automated
                        reminder?</a
                      >
                    </div>
                    <div
                      id="collapseFourteen_1"
                      class="card-body collapse"
                      data-bs-parent="#accordion_5"
                    >
                      <p>
                        Yes, for automated reminders different frequency and
                        modes can be chosen.
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFourteen_2"
                    >
                      <a class="card-title"
                        >Is it possible to download any data in pdf?</a
                      >
                    </div>
                    <div
                      id="collapseFourteen_2"
                      class="card-body collapse"
                      data-bs-parent="#accordion_5"
                    >
                      <p>
                        Yes, all the data fetched from Tally can be downloaded
                        in pdf format. These data can also be shared through
                        different channels.
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div
                      class="card-header collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFourteen_3"
                    >
                      <a class="card-title"
                        >What are different reports that I can check?</a
                      >
                    </div>
                    <div
                      id="collapseFourteen_3"
                      class="card-body collapse"
                      data-bs-parent="#accordion_5"
                    >
                      <p>
                        You can check the following reports - Inactive Items,
                        Inactive customers, top customers, Top items, ageing
                        summary, Ledger, Balance sheet, Profit & loss, Day book,
                        Expenses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import axios from "axios";
import moment from "moment";
import Api from "@/Api";
import GoogleAnalytics from "@/GoogleAnalytics";
import DateRangePicker from "vue2-daterange-picker";
import LineChart from "@/components/LineChart";
import DoughnutChart from "@/components/DoughnutChart";
import CryptoJS from 'crypto-js';
export default {
  data() {
    return {
      mobiledevice_number: "",
      showError: false,
      showFirstDiv: true,
      showSpinner: false,
      showSpinner1: false,
      showSpinner2: false,
      showSpinner3: false,
      showSpinner4: false,
      showSpinner5: false,
      showSpinner6: false,
      showSpinnerScheduleDemo: false,
      join_phone: "",
      form: {
        mobile: "",
        loading: true,
      },
      error: [],
      openTab: 2,
      faqopenTab: 1,
      winVersion: "",
      loginflag: 0,
      threeyearplan_amount: false,
      oneyearplan_amount : true,
      growth_url : "",
      advanced_url : "",

      mobiledevice_numberfeatures1: "",
      showErrorFeatures1: false,
      showFirstDivFeatures1: true,
      showSecondDivFeatures1: false,

      mobiledevice_numberfeatures2: false,
      showErrorFeatures2: false,
      showFirstDivFeatures2: true,
      showSecondDivFeatures2: false,
      isknowmore1: true,
      
      mobiledevice_numberfeatures3: "",
      showErrorFeatures3: false,
      showFirstDivFeatures3: true,
      showSecondDivFeatures3: false,

      mobiledevice_numberfeatures4: false,
      showErrorFeatures4: false,
      showFirstDivFeatures4: true,
      showSecondDivFeatures4: false,
      isrequestdemo1: true,

      mobiledevice_numberfeatures5: "",
      showErrorFeatures5: false,
      showFirstDivFeatures5: true,
      showSecondDivFeatures5: false,

      mobiledevice_numberfeatures6: false,
      showErrorFeatures6: false,
      showFirstDivFeatures6: true,
      showSecondDivFeatures6: false,
      isknowmore2: true,

      mobiledevice_numberscheduledemo: "",
      showErrorScheduleDemo: false,
      showFirstDivScheduleDemo: true,
      showSecondDivScheduleDemo: false,
    };
  },
  components: {
    LineChart,
    DoughnutChart,
    DateRangePicker,
  },
  watch: {
    mobiledevice_number() {
      if (
        this.mobiledevice_number.length === 10 &&
        !isNaN(this.mobiledevice_number)
      ) {
        this.showError = false; 
      }
    },
    mobiledevice_numberfeatures1() {
      if (
        this.mobiledevice_numberfeatures1.length === 10 &&
        !isNaN(this.mobiledevice_numberfeatures1)
      ) {
        this.showErrorFeatures1 = false; 
      }
    },
    mobiledevice_numberfeatures2() {
      if (
        this.mobiledevice_numberfeatures2.length === 10 &&
        !isNaN(this.mobiledevice_numberfeatures2)
      ) {
        this.showErrorFeatures2 = false; 
      }
    },
    mobiledevice_numberfeatures3() {
      if (
        this.mobiledevice_numberfeatures3.length === 10 &&
        !isNaN(this.mobiledevice_numberfeatures3)
      ) {
        this.showErrorFeatures3 = false; 
      }
    },
     mobiledevice_numberfeatures4() {
      if (
        this.mobiledevice_numberfeatures4.length === 10 &&
        !isNaN(this.mobiledevice_numberfeatures4)
      ) {
        this.showErrorFeatures4 = false; 
      }
    },
    mobiledevice_numberfeatures5() {
      if (
        this.mobiledevice_numberfeatures5.length === 10 &&
        !isNaN(this.mobiledevice_numberfeatures5)
      ) {
        this.showErrorFeatures5 = false; 
      }
    },
    mobiledevice_numberfeatures6() {
      if (
        this.mobiledevice_numberfeatures6.length === 10 &&
        !isNaN(this.mobiledevice_numberfeatures6)
      ) {
        this.showErrorFeatures6 = false; 
      }
    },
    mobiledevice_numberscheduledemo() {
      if (
        this.mobiledevice_numberscheduledemo.length === 10 &&
        !isNaN(this.mobiledevice_numberscheduledemo)
      ) {
        this.showErrorScheduleDemo = false; 
      }
    },
  },
  methods: {
    knowmoreonclick1(){
      this.showFirstDivFeatures2 = true;
      this.isknowmore1 = false;
    },
    requestdemoonclick1(){
      this.showFirstDivFeatures4 = true;
      this.isrequestdemo1 = false;
    },
    knowmoreonclick2(){
      this.showFirstDivFeatures6 = true;
      this.isknowmore2 = false;
    },
    encryptURL(url) {
      const secretKey = '1234567891';
      const ciphertext = CryptoJS.AES.encrypt(url, secretKey).toString();
      return encodeURIComponent(ciphertext);
    },
    selectoneyearplan(){
      const g_u_link = this.encryptURL("type=GROWTH&plan=GRBUY1Y24");
      this.growth_url = "https://pay.livekeeping.com/?d=" + g_u_link;
      const a_u_link = this.encryptURL("type=ADVANCED&plan=ADVBUY1Y24");
      this.advanced_url = "https://pay.livekeeping.com/?d=" + a_u_link;
      this.threeyearplan_amount = false;
      this.oneyearplan_amount = true;
    },
    selectthreeyearplan(){
      const g_u_link = this.encryptURL("type=GROWTH&plan=GRBUY2GET1Y24");
      this.growth_url = "https://pay.livekeeping.com/?d=" + g_u_link;
      const a_u_link = this.encryptURL("type=ADVANCED&plan=ADVBUY2GET1Y24");
      this.advanced_url = "https://pay.livekeeping.com/?d=" + a_u_link;
      this.threeyearplan_amount = true;
      this.oneyearplan_amount = false;
    },
    checkNumber() {
      if (!/^[6-9]\d{9}$/.test(this.mobiledevice_number)) {
        this.showError = true;
        this.showFirstDiv = true;
        this.showSpinner = false;
      } else {
        
        this.showError = false;
        this.showSpinner = true;
        const data = {
          mobile: this.mobiledevice_number,
          countryCode: "+91",
          requestFrom: "Web_Mobile",
          customerSource: "Web_Mobile",
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        };
        Api.loginWithOtpgo(data, headers)
          .then((response) => {
            setTimeout(() => {
              this.showFirstDiv = true;
              this.showSpinner = false; 
              this.mobiledevice_number = '';
            }, 2000);
		    })
        GoogleAnalytics.getstarted_mobile_website(this.mobiledevice_number);
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = 'https://itunes.apple.com/us/app/live-keeping/id1451277319?ls=1&mt=8';
    } 
    else if (/android/i.test(userAgent)) {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.finlitetech.livekeeping';
    }
    else {
        console.error("Unable to determine the user's operating system.");
    }
      }
    },
    checkNumbereWaybill() {
      if (!/^[6-9]\d{9}$/.test(this.mobiledevice_numberfeatures1)) {
        this.showErrorFeatures1 = true;
        this.showFirstDivFeatures1 = true;
        this.showSecondDivFeatures1 = false;
        this.showSpinner1 = false;
      } else {
        this.showErrorFeatures1 = false;
        this.showSpinner1 = true;
        const data = {
          mobile: this.mobiledevice_numberfeatures1,
          countryCode: "+91",
          requestFrom: "Web_Mobile",
          customerSource: "Website_eWaybill",
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        };
        Api.loginWithOtpgo(data, headers)
          .then((response) => {
            setTimeout(() => {
              this.showFirstDivFeatures1 = false;
              this.showSecondDivFeatures1 = true; // Show the second div after a delay
              this.showSpinner1 = false; // Hide the spinner after the second div is shown
              localStorage.setItem("showSecondDivFeatures1", "true");
            }, 2000);
		    })
        GoogleAnalytics.Website_eWaybill(this.mobiledevice_numberfeatures1);
      }
    },

    checkNumberInactivecustomer(){
      if (!/^[6-9]\d{9}$/.test(this.mobiledevice_numberfeatures2)) {
       
        this.showErrorFeatures2 = true;
        this.showFirstDivFeatures2 = true;
        this.showSecondDivFeatures2 = false;
        this.isknowmore1 = false;
        this.showSpinner2 = false;
      } else {
        this.showErrorFeatures2 = false;
        this.showSpinner2 = true;
        const data = {
          mobile: this.mobiledevice_numberfeatures2,
          countryCode: "+91",
          requestFrom: "Web_Mobile",
          customerSource: "Website_Inactivecustomer",
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        };
        Api.loginWithOtpgo(data, headers)
          .then((response) => {
            setTimeout(() => {
              this.showFirstDivFeatures2 = false;
              this.showSecondDivFeatures2 = true; // Show the second div after a delay
              this.showSpinner2 = false; // Hide the spinner after the second div is shown
              localStorage.setItem("showSecondDivFeatures2", "true");
            }, 2000);
		    })
        GoogleAnalytics.Website_Inactivecustomer(this.mobiledevice_numberfeatures2);
      }
    },

    checkNumberpaymentreminder() {
      if (!/^[6-9]\d{9}$/.test(this.mobiledevice_numberfeatures3)) {
    
        this.showErrorFeatures3 = true;
        this.showFirstDivFeatures3 = true;
        this.showSecondDivFeatures3 = false;
        this.showSpinner3 = false;
      } else {
        this.showErrorFeatures3 = false;
        this.showSpinner3 = true;
        const data = {
          mobile: this.mobiledevice_numberfeatures3,
          countryCode: "+91",
          requestFrom: "Web_Mobile",
          customerSource: "Website_paymentreminder",
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        };
        Api.loginWithOtpgo(data, headers)
          .then((response) => {
            setTimeout(() => {
              this.showFirstDivFeatures3 = false;
              this.showSecondDivFeatures3 = true; // Show the second div after a delay
              this.showSpinner3 = false; // Hide the spinner after the second div is shown
              localStorage.setItem("showSecondDivFeatures3", "true");
            }, 2000);
		    })
        GoogleAnalytics.Website_paymentreminder(this.mobiledevice_numberfeatures3);
      }
    },

    checkNumbertallybackup(){
      if (!/^[6-9]\d{9}$/.test(this.mobiledevice_numberfeatures4)) {
       
        this.showErrorFeatures4 = true;
        this.showFirstDivFeatures4 = true;
        this.showSecondDivFeatures4 = false;
        this.isrequestdemo1 = false;
        this.showSpinner4 = false;
      } else {
        this.showErrorFeatures4 = false;
        this.showSpinner4 = true;
        const data = {
          mobile: this.mobiledevice_numberfeatures4,
          countryCode: "+91",
          requestFrom: "Web_Mobile",
          customerSource: "Website_tallybackup",
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        };
        Api.loginWithOtpgo(data, headers)
          .then((response) => {
            setTimeout(() => {
              this.showFirstDivFeatures4 = false;
              this.showSecondDivFeatures4 = true; // Show the second div after a delay
              this.showSpinner4 = false; // Hide the spinner after the second div is shown
              localStorage.setItem("showSecondDivFeatures4", "true");
            }, 2000);
		    })
        GoogleAnalytics.Website_tallybackup(this.mobiledevice_numberfeatures4);
      }
    },

    checkNumbercreatebill() {
      if (!/^[6-9]\d{9}$/.test(this.mobiledevice_numberfeatures5)) {
        
        this.showErrorFeatures5 = true;
        this.showFirstDivFeatures5 = true;
        this.showSecondDivFeatures5 = false;
        this.showSpinner5 = false;
      } else {
        this.showErrorFeatures5 = false;
        this.showSpinner5 = true;
        const data = {
          mobile: this.mobiledevice_numberfeatures5,
          countryCode: "+91",
          requestFrom: "Web_Mobile",
          customerSource: "Website_createbill",
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        };
        Api.loginWithOtpgo(data, headers)
          .then((response) => {
            setTimeout(() => {
              this.showFirstDivFeatures5 = false;
              this.showSecondDivFeatures5 = true; // Show the second div after a delay
              this.showSpinner5 = false; // Hide the spinner after the second div is shown
              localStorage.setItem("showSecondDivFeatures5", "true");
            }, 2000);
		    })
        GoogleAnalytics.Website_createbill(this.mobiledevice_numberfeatures5);
      }
    },

    checkNumberreports(){
      if (!/^[6-9]\d{9}$/.test(this.mobiledevice_numberfeatures6)) {
    
        this.showErrorFeatures6 = true;
        this.showFirstDivFeatures6 = true;
        this.showSecondDivFeatures6 = false;
        this.isknowmore2 = false;
        this.showSpinner6 = false;
      } else {
        this.showErrorFeatures6 = false;
        this.showSpinner6 = true;
        const data = {
          mobile: this.mobiledevice_numberfeatures6,
          countryCode: "+91",
          requestFrom: "Web_Mobile",
          customerSource: "Website_reports",
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        };
        Api.loginWithOtpgo(data, headers)
          .then((response) => {
            setTimeout(() => {
              this.showFirstDivFeatures6 = false;
              this.showSecondDivFeatures6 = true; // Show the second div after a delay
              this.showSpinner6 = false; // Hide the spinner after the second div is shown
              localStorage.setItem("showSecondDivFeatures6", "true");
            }, 2000);
		    })
        GoogleAnalytics.Website_reports(this.mobiledevice_numberfeatures6);
      }
    },

    checkNumberScheduleDemo() {
      if (!/^[6-9]\d{9}$/.test(this.mobiledevice_numberscheduledemo)) {
   
        this.showErrorScheduleDemo = true;
        this.showFirstDivScheduleDemo = true;
        this.showSecondDivScheduleDemo = false;
        this.showSpinnerScheduleDemo = false;
      } else {
        this.showErrorScheduleDemo = false;
        this.showSpinnerScheduleDemo = true;
        const data = {
          mobile: this.mobiledevice_numberscheduledemo,
          countryCode: "+91",
          requestFrom: "Web_Mobile",
          customerSource: "Website_scheduledemo",
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        };
        Api.loginWithOtpgo(data, headers)
          .then((response) => {
            setTimeout(() => {
              this.showFirstDivScheduleDemo = false;
              this.showSecondDivScheduleDemo = true; // Show the second div after a delay
              this.showSpinnerScheduleDemo = false; // Hide the spinner after the second div is shown
              localStorage.setItem("showSecondDivScheduleDemo", "true");
            }, 2000);
		    })
        GoogleAnalytics.Website_scheduledemo(this.mobiledevice_numberscheduledemo);
      }
    },
    basic_access_getstarted_free() {
      GoogleAnalytics.website_basic_access_getstarted_free("basic_access");
    },
    website_growth_plan() {
      GoogleAnalytics.website_growth_plan("one_year");
    },
   check_price_list() {
      GoogleAnalytics.website_check_price_list("price_list");
    },
    website_advanced_plan() {
      GoogleAnalytics.website_advanced_plan("three_year");
    },

    FreeForeverGetStarted() {
      GoogleAnalytics.Website_FreeForeverGetStarted("FreeForever");
    },
    OneYearBuyNow() {
      GoogleAnalytics.Website_OneYearBuyNow("OneYearBuy");
    },
    ThreeYearsBuyNow() {
      GoogleAnalytics.Website_ThreeYearsBuyNow("ThreeYearsBuy");
    },
    windows_file_download() {
      GoogleAnalytics.windows_file_download("filedownload");
      var timespan = Date.now();
      const fileUrl =
        "https://lkpsetup.s3.ap-south-1.amazonaws.com/lkpwpf/Livekeeping-Tally.exe?" +
        timespan;
      const fileName = "Livekeeping-Tally";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      link.click();
    },

    watch_video() {
      GoogleAnalytics.watch_video("watchvideo");
    },
    check_win() {
      var ua = window.navigator.userAgent;
      if (ua.indexOf("Windows NT 6.1") != -1) {
        window.open("/TDC3Win7.exe", "_blank");
      } else {
        window.open("/TDC3.exe", "_blank");
      }
    },
    joinForm(e) {
      this.error = [];
      if (!this.form.mobile) {
        this.error["mobile_number"] = "Enter Mobile Number";
      }
      if (this.form.mobile !== "") {
        if (this.form.mobile.length != "10") {
          this.error["mobile_number"] = "Please put 10  digit mobile number";
        }
      }
      if (Object.keys(this.error).length === 0) {
        localStorage.setItem("join_phone", this.form.mobile);
        if (e.keyCode === 13) {
          if (this.form.mobile.length != 10) {
            return false;
          }
        }
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
        Api.loginWithOTP(data, headers)
          .then((response) => {
            if (response.data.status == "1") {
              this.mobile_number = this.form.mobile;
              this.country_code = "+91";

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
              $("#mobile_code").val(this.form.mobile);
              this.openNavVue();
            } else {
              this.openNavVue();
              $("#mobile_code").val(this.form.mobile);
              $("#loginErrorMessage").show();
              GoogleAnalytics.Login_Failed_screen(this.form.mobile);
            }
            localStorage.setItem("join_loginId", response.data.data.loginId);
            this.page = response.data;
            this.loading = false;
          })
          .catch(() => {
            this.loading = false;
          });

        GoogleAnalytics.login_homepage(this.form.mobile);
      }
    },
    openNavVue() {
      document.getElementById("login_nav").style.width = "100%";
    },
    closeNavVue() {
      document.getElementById("login_nav").style.width = "0%";
    },
    play_video_click() {
      this.$refs["play_video"].show();
    },
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    faqtoggleTabs: function (tabNumber) {
      this.faqopenTab = tabNumber;
    },
    
  },
  mounted() {
    this.selectoneyearplan();
    console.log(this.$route);
    localStorage.setItem("fullPath", this.$route.fullPath);
    this.$forceUpdate();
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
    
  },
};
</script>
<style scoped>

</style>
