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
    <div class="app-header header main-header1">
      <div class="container-fluid">
        <div class="header-inner-fluid">
          <div class="d-flex flex_cstm_header">
            <a class="header-brand" href="#">
              <img src="/assets/images/1.0/brand/live-keeping-logo.png" class="header-brand-img desktop-lgo"
                alt="livekeeping logo" />
              <img src="/assets/images/1.0/brand/live-keeping-logo.png" class="header-brand-img dark-logo"
                alt="livekeeping logo" />
              <img src="/assets/images/1.0/brand/only-logo.png" class="header-brand-img mobile-logo"
                alt="livekeeping logo" />
              <img src="/assets/images/1.0/brand/only-lkp-logo.png" class="header-brand-img darkmobile-logo"
                alt="livekeeping logo" />
            </a>
            <div class="app-sidebar__toggle d-flex" data-bs-toggle="sidebar">
              <a class="open-toggle" href="javascript:void(0);">
                <svg xmlns="http://www.w3.org/2000/svg" class="feather feather-align-left header-icon" width="24"
                  height="24" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                </svg>
              </a>
            </div>
            <!-- <div class="mt-1 d-md-block d-none width_set_drpdown">
              <div id="menus_id" class="top_navbar_dropdown mobile_top_navbar_drop_hide">

                <select name="companyId" class="
                    form-select
                    main_dropdown_header
                    new_party_select_option
                    companiesList
                  " id="companiesList" @change="companyData">

                  <option v-for="(country, index) in company" :value="country.companyData.id"
                    :data-lastSyncDate="country.companyData.lastSyncDate"
                    :data-maxstartFrom="country.companyData.startFrom"
                    :data-companyType="country.companyData.companyType" :data-startFrom="country.companyData.startFrom"
                    :data-endTo="country.companyData.endDate"
                    :data-companyGstNumber="country.companyData.companyDetails.gstNumber"
                    :data-companystateName="country.companyData.companyDetails.stateName"
                    :data-companyCountryName="country.companyData.companyDetails.country"
                    :data-pincode="country.companyData.companyDetails.pincode"
                    :data-address="country.companyData.companyDetails.address"
                    :data-parentUserId="country._parentUserId" :key="index"
                    :selected="country.companyData.id == seleted">
                    {{ country.companyData.companyName }}
                    <template v-if="country._parentUserId != ''">
                      ({{ country.parentName }})
                    </template>
</option>

</select>
</div> -->
            <!-- <div class="last_sync_header mobile-device-hide">
                <span id="last_date" class="last_sync_date"></span>
                <span class="last_sync_date"></span>
              </div>
            </div> -->
            <div v-if="isNewHeaderOpenDesktop" class="overlayheaderdropdown" @click="closeEvent"></div>
            <div id="menus_id" class="top_navbar_dropdown mobile_top_navbar_drop_hide">
              <div class="NewDropdownInHeaderPart">
                <div class="position-relative MainNewHeaderDropdownWithDescription">
                  <div class="NewHeaderDropdownPartTop" @click="toggleDropdownNewHeaderDesktop">
                    <div class="NewHeaderDropdownHeadingPortion">
                      <h6>{{ selectedCompanyNewHeaderDesktop }} {{ this.parentNameData ? `(${this.parentNameData})` : ''
                      }}</h6>
                      <p v-if="syncMessage !== 'Synced Invalid date' && 'Not Synced yet'">{{ syncMessage }}</p>
                      <p v-else :class="getColorClass('01/01/1900')">Not Synced Yet</p>
                    </div>
                    <div class="NewHeaderDropdownArrowIcon">
                      <span>
                        <i class="fa" :class="isNewHeaderOpenDesktop ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                      </span>
                    </div>
                  </div>

                  <div v-if="isNewHeaderOpenDesktop" class="OpenNewHeaderPortionPart" v-click-outside="closeEvent">
                    <div class="NewHeaderMyCompaniesHeading">
                      <h4>My Companies</h4>
                    </div>
                    <ul class="NewHeaderDropdownPortionUl">
                      <li v-for="(companyNewHeaderDesktop) in company" :key="companyNewHeaderDesktop.companyData.id"
                        @click="companyData(companyNewHeaderDesktop, 'Web')">
                        <h6>
                          {{ companyNewHeaderDesktop.companyData.companyName }}{{ companyNewHeaderDesktop._parentUserId
                            ?
                            `(${companyNewHeaderDesktop.parentName})` : '' }}
                          <i v-if="companyNewHeaderDesktop.companyData.id == companyIdData" class="fa fa-check"></i>
                          <!-- Three Dots Menu -->
                          <div class="three-dots-menu"
                            @click.stop="toggleDropdownthreedotsDesktop(companyNewHeaderDesktop.companyData.id)">
                            <i class="fa fa-ellipsis-v"></i>

                            <!-- Dropdown Menu for Three Dots -->
                            <div v-if="openDropdownDesktop === companyNewHeaderDesktop.companyData.id"
                              class="ellipsepartinfodelete">
                              <p v-if="!hideInfo" @click.stop="openInfoPopupDesktop(companyNewHeaderDesktop)">Info</p>
                              <p v-if="companyNewHeaderDesktop._parentUserId == ''"
                                @click.stop="openDeletePopupDesktop(companyNewHeaderDesktop)">Delete</p>
                              <!-- <p @click.stop="openNotSyncPopupDesktop(companyNewHeaderDesktop)">Not Sync</p> -->
                            </div>
                          </div>
                        </h6>
                        <p :class="getColorClass(companyNewHeaderDesktop.companyData.lastSyncDate)"><i>{{
                          getSyncMessage(companyNewHeaderDesktop.companyData.lastSyncDate) }}</i></p>
                        <!-- Three Dots Button -->

                      </li>
                    </ul>
                    <div class="NewHeaderAddCompaniesHeading">
                      <h4 v-if="myCompaniesData.length !== 0">New Companies
                        <!--<i class="fa fa-info"></i>-->
                      </h4>
                    </div>
                    <ul class="NewHeaderPortionAddCompaniesUl">
                      <li v-for="openData in myCompaniesData">
                        <div class="AddCompaniesPartPortionMain">
                          <div class="AddCompaniesPartHeading">
                            <p>
                              {{ openData.companyName }}<br>
                              <span>
                                {{ openData.datapath }}
                              </span>
                            </p>
                          </div>
                          <div class="AddCompniesPartButtonAdd">
                            <button :disabled="addButtonClicked" @click="SyncCompanyFunction(openData)" type="button"><i
                                class="fa fa-refresh"></i> <span v-show="CompanyAdded[openData.guid]"
                                class="SpinColorWhite"><i class="fa fa-spinner fa-spin"></i></span>
                              Add</button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            <div class="d-flex order-lg-2 ms-auto main-header-end">
              <button class="navbar-toggler navresponsive-toggler d-md-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="true"
                aria-label="Toggle navigation">
                <i class="fa fa-more-vertical header-icons navbar-toggler-icon"></i>
              </button>

              <div class="desktop-device-show-premium-section mobile_premium_section" style="display:none;">

              </div>

              <div class="
                  navbar navbar-expand-lg navbar-collapse
                  responsive-navbar
                  p-0
                  box-shadow-none
                ">
                <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
                  <div class="d-flex order-lg-2 mobile-device-not-dflex">
                    <div class="dropdown d-lg-none d-flex responsive-search">

                      <!-- <div class="top_navbar_dropdown">
                        <select name="companyId" class="
                    form-select
                    main_dropdown_header
                    new_party_select_option
                    companiesList
                  " id="companiesList" @change="companyData">

                          <option v-for="(country, index) in company" :value="country.companyData.id"
                            :data-lastSyncDate="country.companyData.lastSyncDate"
                            :data-maxstartFrom="country.companyData.startFrom"
                            :data-companyType="country.companyData.companyType"
                            :data-startFrom="country.companyData.startFrom" :data-endTo="country.companyData.endDate"
                            :data-companyGstNumber="country.companyData.companyDetails.gstNumber"
                            :data-companystateName="country.companyData.companyDetails.stateName"
                            :data-pincode="country.companyData.companyDetails.pincode"
                            :data-companyCountryName="country.companyData.companyDetails.country"
                            :data-address="country.companyData.companyDetails.address"
                            :data-parentUserId="country._parentUserId" :key="index"
                            :selected="country.companyData.id == seleted">
                            {{ country.companyData.companyName }}
                            <template v-if="country._parentUserId != ''">
                              ({{ country.parentName }})
                            </template>
                          </option>

                        </select>
                        <div class="last_sync_header mobile-device-show">
                          <span id="last_date" class="last_sync_date"></span>
                          <span class="last_sync_date"></span>
                        </div>
                      </div> -->
                      <div v-if="isNewHeaderOpenMobile" class="overlayheaderdropdownmobile" @click="closeEvent"></div>
                      <div class="NewDropdownInHeaderPartMobile">
                        <div class="position-relative MainNewHeaderDropdownWithDescriptionMobile">
                          <div class="NewHeaderDropdownPartTopMobile" @click="toggleDropdownNewHeaderMobile">
                            <div class="NewHeaderDropdownHeadingPortionMobile">
                              <h6>{{ selectedCompanyNewHeaderDesktop }} {{ this.parentNameData ?
                                `(${this.parentNameData})` : '' }}
                              </h6>
                              <p>{{ syncMessage }}</p>
                            </div>
                            <div class="NewHeaderDropdownArrowIconMobile">
                              <span>
                                <i class="fa" :class="isNewHeaderOpenMobile ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                              </span>
                            </div>
                          </div>

                          <div v-if="isNewHeaderOpenMobile" class="OpenNewHeaderPortionPartMobile"
                            v-click-outside="closeEvent">
                            <div class="NewHeaderMyCompaniesHeadingMobile">
                              <h4>My Companies</h4>
                            </div>
                            <ul class="NewHeaderDropdownPortionUlMobile">
                              <li v-for="companyNewHeaderDesktop in company"
                                :key="companyNewHeaderDesktop.companyData.id"
                                @click="companyData(companyNewHeaderDesktop, 'Mobile')">
                                <h6>
                                  {{ companyNewHeaderDesktop.companyData.companyName }}{{
                                    companyNewHeaderDesktop._parentUserId
                                      !== '' ? `(${companyNewHeaderDesktop.parentName})` : '' }}
                                  <i v-if="companyNewHeaderDesktop.companyData.id == companyIdData"
                                    class="fa fa-check"></i>
                                  <!-- Three Dots Menu -->
                                  <div class="three-dots-menuMobile"
                                    @click.stop="toggleDropdownthreedotsMobile(companyNewHeaderDesktop.companyData.id)">
                                    <i class="fa fa-ellipsis-v"></i>

                                    <!-- Dropdown Menu for Three Dots -->
                                    <div v-if="openDropdownMobile === companyNewHeaderDesktop.companyData.id"
                                      class="ellipsepartinfodeleteMobile">
                                      <p @click.stop="openInfoPopupMobile(companyNewHeaderDesktop)">Info</p>
                                      <p @click.stop="openDeletePopupMobile(companyNewHeaderDesktop)">Delete</p>
                                      <!-- <p @click.stop="openNotSyncPopupMobile(companyNewHeaderDesktop)">Not Sync</p> -->
                                    </div>
                                  </div>
                                </h6>
                                <p :class="getColorClass(companyNewHeaderDesktop.companyData.lastSyncDate)"><i>{{
                                  getSyncMessage(companyNewHeaderDesktop.companyData.lastSyncDate) }}</i></p>
                              </li>
                            </ul>
                            <div class="NewHeaderAddCompaniesHeadingMobile">
                              <h4 v-if="myCompaniesData.length !== 0">New Companies
                                <!-- <i class="fa fa-info"></i> -->
                              </h4>
                            </div>
                            <ul class="NewHeaderPortionAddCompaniesUlMobile">
                              <li v-for="openData in myCompaniesData">
                                <div class="AddCompaniesPartPortionMainMobile">
                                  <div class="AddCompaniesPartHeadingMobile">
                                    <p>
                                      {{ openData.companyName }}<br>
                                      <span>
                                        {{ openData.datapath }}
                                      </span>
                                    </p>
                                  </div>
                                  <div class="AddCompniesPartButtonAddMobile">
                                    <button @click="SyncCompanyFunction(openData)" type="button"><i
                                        class="fa fa-refresh"></i>
                                      Add</button>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="desktop-device-show-premium-section">

                    </div>




                  </div>
                </div>
              </div>
            </div>
          </div>
          <!------------------------------------------>

          <!-- user profile -->
          <div class="header-right-content">
            <div v-if="convertedStatus == '1'" class="TallyThemeButtonHeader mobile-device-hide-premium">
              <a href="javascript:void(0);" @click="Tally_button()">
                <img src="/assets/images/1.0/new-dashboard/flash.png" alt="TallyThemeImage" /> Tally Theme
                <span>BETA</span>
              </a>
            </div>
              <div v-if="(userName !== '' && Password !== '') && parentId == '' && gstNumber !== null"
              class="GSPLoginInHeaderLinked mobile-device-hide">
              <button v-if=" eInvoiceStatus == 'Yes'">
                <img src="/assets/images/1.0/new-dashboard/tickmark.png" />
                <span>eInvoice Linked</span>
              </button>
              <button v-else>
                <img src="/assets/images/1.0/new-dashboard/tickmark.png" />
                <span>eWay Linked</span>
              </button>
            </div>
            <div v-if="(userName == '' && Password == '') && parentId == '' && gstNumber !== null"
              class="GSPLoginInHeader mobile-device-hide">
              <router-link to="/gsploginnew">
                <button v-if=" eInvoiceStatus == 'Yes' ">
                  <img src="/assets/images/1.0/new-dashboard/warning-light.png" />
                  <span>Link<br>eInvoice</span>
                </button>
                <button v-else>
                  <img src="/assets/images/1.0/new-dashboard/warning-light.png" />
                  <span>Link<br>eWay</span>
                </button>
              </router-link>  
            </div>
            <div class="mobile-view-button-header-div mobile-device-hide">
              <button @click="redirectMobileView">
                <i class="fa fa-mobile"></i>
                <span>Mobile<br>Version</span>
              </button>
            </div>





            <div class="premium-subscription-headre">

              <div v-if="isPaid == '' || isPaid == null"
                class="new-button-premium-after-login-button-div mobile-device-hide-premium">
                <a href="javascript:void(0)" v-b-modal.customerstatus-popup>
                  <img src="/assets/images/1.0/new-dashboard/premiumcrown.png" /> Upgrade
                </a>
              </div>
              <div v-if="isPaid == '' || isPaid == null"
                class="new-only-crown-icon-show-only-mobile mobile-device-show-premium">
                <a href="javascript:void(0)" v-b-modal.customerstatus-popup>
                  <img src="/assets/images/1.0/new-dashboard/premiumcrown.png" />
                </a>
              </div>
            </div>

            <div class="user-profile">
              <button class="btn user-profile-btn" @click="isOpen = !isOpen">
                <img src="/assets/images/1.0/hello-user.svg" class="img-fluid" />
                <p>Hi {{ userNameFetcher }}</p> <i class="fa fa-chevron-down"></i>
              </button>

              <div v-if="isOpen" v-click-outside="closeEvent" class="profile-showdropdown">
                <ul class="mb-0">
                  <li @click="isOpen = false"><router-link to="/my-account" class="user-profile-tag"> <img
                        src="/assets/images/1.0/profile-user.svg" class="img-fluid" /> Profile </router-link></li>
                  <li @click="isOpen = false">
                     <template v-if="canPurchase" >
                      <router-link to="/allusers" class="user-profile-tag" >
                        <img src="/assets/images/1.0/users.png" class="img-fluid" />
                        All Users
                      </router-link>
                    </template>
                    <template v-else>
                      <div
                      class="user-profile-tag"
                      style="opacity: 0.5; cursor: not-allowed; padding:6px 15px 6px 15px;"
                      title="You don't have access. Contact your admin"
                    >
                      <img src="/assets/images/1.0/users.png" class="img-fluid" />
                      All Users
                    </div>
                    </template>
                  </li>
                  <li><a href="javascript:void(0);" class="user-profile-tag" v-on:click="logout"><img
                        src="/assets/images/1.0/profile-logout.svg" class="img-fluid" /> Logout</a></li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>

    <!----------------------Setup connector Popup start---------------------------------->
    <div class="modal-vue-setup-connector" v-if="showonlySetupConnector">
      <div class="main-modal-vue-setup-connector mobile-device-setup-connector-popup-hide">
        <div class="setup-tally-connector-popup">
          <div class="dropdown ThreeDots">
            <a href="javascript:void(0)" @click="toggleDropdown">
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </a>
            <div v-if="isDropdownOpen" class="dropdown-menu OpenLogoutDropdown">
              <a href="javascript:void(0);" v-on:click="logout"> Logout</a>
            </div>
          </div>
          <div class="top-heading-tally-connector-setup-popup text-center">
            <h4>Connect your Tally</h4>
            <p>To view your company data</p>
          </div>
          <div class="setup-step-tally-connector-column text-center">
            <div class="row align-items-bottom">
              <div class="col-lg-12 col-12">
                <div class="setup-tally-connector-popup-new-image-not">
                  <img src="/assets/images/1.0/new-dashboard/not-connected-image.png" class="img-fluid" />
                </div>
                <div class="setup-tally-connector-button-download-button-new">
                  <div class="arrow-image-setup-tally-connector-popup">
                    <img src="assets/images/1.0/new-dashboard/arrow-curve.png" class="img-fluid" />
                  </div>
                  <button type="button" class="download-popup-tally-connector-new-btn"
                    @click="windows_file_download_popup()">
                    Download Now <i class="fa fa-arrow-down" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-device-after-login-setup-redirect mobile-device-setup-mobile-popup-show">
        <div class="complete-installation-text-popup-afterlogin">
          <p>Complete Installation to Make Purchase</p>
        </div>
        <div class="taly-mobile-logo-for-mobile-device-after-login-image">
          <img src="assets/images/1.0/mobiledevice/tally-web-mobile-logo.png" />
        </div>
        <div class="after-login-logo-with-mobile-device-star">
          <ul class="after-login-ul-mobile-device-main">
            <li>
              <img src="/assets/images/1.0/mobiledevice/SquareLogo.png" class="mg-fluid">
            </li>
            <li>
              <p>Tally on Mobile - Livekeeping</p>
              <ul class="mobile-device-after-login-popup-rating-star">
                <li>4.6</li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star-half-o"></i></li>
                <li>
                  <p class="innerptag-mobile-device-after-login">1,000+</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mobile-device-after-login-popup-button">
          <a href="javascript:void(0)" target="_blank" @click.prevent="download_now_mobile_device()">Download App</a>
        </div>
        <div class="after-login-mobile-device-popup-footer-text">
          <p><span>Trusted</span> By <span>50,000+</span> Businesses</p>
        </div>
      </div>

      <div class="overlay" v-if="showonlySetupConnector"></div>
    </div>
    <!----------------------Setup Connector Popup End------------------------------------>
    <!-- Info Popup Desktop-->
    <div v-if="showInfoPopupDesktop" class="OnlyInfoPopupMainPortion">
      <div class="popup-content-Only-Info-Popup">
        <div class="InfoPopupOnlyHeaderPortion">
          <h3>Company Information</h3>
          <button @click="closePopupDesktop"><i class="fa fa-times"></i></button>
        </div>
        <div class="infoPopupCaptionDetailsPortion">
          <p><span>Name:</span> {{ selectedCompanyName }}</p>
          <p><span>Start From:</span> {{ selectedCompanyStartFrom }}</p>
          <p><span>Sync From:</span> {{ selectedCompanySyncFrom }}</p>
          <p><span>Last Sync:</span> {{ selectedCompanyLastSync }}</p>
          <p><span>Data Path:</span> {{ selectedCompanyDataPath }}</p>
          <p><span>Created:</span> {{ selectedCompanyCreatedDate }}</p>
          <p><span>Sync Status:</span> {{ selectedCompanySyncStatus }}</p>
        </div>
      </div>
      <!-- Overlay to Close Popup -->
      <div class="InfoDeletePopupOverlay" @click="closePopupDesktop"></div>
    </div>

    <!-- Delete Confirmation Popup Desktop -->
    <div v-if="showDeletePopupDesktop" class="InfoDeletepopupmainportion" @click="closePopupDesktop">
      <!-- Popup Content (No Stop Here) -->
      <div class="popup-content-Info-Delete-Popup text-center" @click.stop>
        <p>Are you sure you want to delete this Company?</p>

        <!-- Buttons with @click.stop -->
        <button @click="confirmDeleteDesktop" class="DeletePopupDeletebutton">Yes, Delete</button>
        <button @click="closePopupDesktop" class="DeletePopupCancelbutton">Cancel</button>
      </div>

      <!-- Overlay to Close Popup -->
      <div class="InfoDeletePopupOverlay" @click="closePopupDesktop"></div>
    </div>

    <!-- Not sync Popup Desktop -->
    <div v-if="showNotSyncPopupDesktop" class="InfoDeletepopupmainportion" @click="closePopupDesktop">
      <!-- Popup Content (No Stop Here) -->
      <div class="popup-content-Info-Delete-Popup text-center" @click.stop>
        <div class="text-center NotSyncPopupImage">
          <img src="/assets/images/1.0/brand/warning.png" />

        </div>
        <p>This Company "<span class="font-weight-600">{{ selectedCompanyName }}</span>" is not synced <br>with the
          Tally
          connector.</p>
      </div>
      <div class="InfoDeletePopupOverlay" @click="closePopupDesktop"></div>
    </div>

    <div v-if="subUserSubscription" class="InfoDeletepopupmainportion" @click="closePopupDesktop">
      <!-- Popup Content (No Stop Here) -->
      <div class="popup-content-Info-Delete-Popup text-center" @click.stop>
        <div class="text-center NotSyncPopupImage">
          <img src="/assets/images/1.0/brand/warning.png" />

        </div>
        <p><span class="font-weight-600">{{ selectedCompanyName }} Premium Subscription has ended</span><br>Please contact the admin to renew
        the subscription. You no longer have access to the company as a sub user.</p>
      </div>
      <div class="InfoDeletePopupOverlay" @click="closePopupDesktop"></div>
    </div>


    <!-- Info Popup Mobile-->
    <div v-if="showInfoPopupMobile" class="OnlyInfoPopupMainPortionMobile">
      <div class="popup-content-Only-Info-PopupMobile">
        <div class="InfoPopupOnlyHeaderPortionMobile">
          <h3>Company Information</h3>
          <button @click="closePopupMobile"><i class="fa fa-times"></i></button>
        </div>
        <div class="infoPopupCaptionDetailsPortionMobile">
          <p><span>Name:</span> {{ selectedCompanyName }}</p>
          <p><span>Start From:</span> {{ selectedCompanyStartFrom }}</p>
          <p><span>Sync From:</span> {{ selectedCompanySyncFrom }}</p>
          <p><span>Last Sync:</span> {{ selectedCompanyLastSync }}</p>
          <p><span>Data Path:</span> {{ selectedCompanyDataPath }}</p>
          <p><span>Created:</span> {{ selectedCompanyCreatedDate }}</p>
          <p><span>Sync Status:</span> {{ selectedCompanySyncStatus }}</p>
        </div>
      </div>
      <!-- Overlay to Close Popup -->
      <div class="InfoDeletePopupOverlayMobile" @click="closePopupMobile"></div>
    </div>

    <!-- Delete Confirmation Popup Mobile -->
    <div v-if="showDeletePopupMobile" class="InfoDeletepopupmainportionMobile" @click="closePopupMobile">
      <!-- Popup Content (No Stop Here) -->
      <div class="popup-content-Info-Delete-PopupMobile text-center" @click.stop>
        <p>Are you sure you want to delete this Company?</p>

        <!-- Buttons with @click.stop -->
        <button @click="confirmDeleteMobile" class="DeletePopupDeletebuttonMobile">Yes, Delete</button>
        <button @click="closePopupMobile" class="DeletePopupCancelbuttonMobile">Cancel</button>
      </div>

      <!-- Overlay to Close Popup -->
      <div class="InfoDeletePopupOverlayMobile" @click="closePopupMobile"></div>
    </div>

    <!-- Not sync Popup Mobile -->
    <div v-if="showNotSyncPopupMobile" class="OnlyInfoPopupMainPortionMobile" @click="closePopupMobile">
      <div class="popup-content-Only-Info-PopupMobile">
        <div class="text-center" @click.stop>
          <div class="text-center NotSyncPopupImage">
            <img src="/assets/images/1.0/brand/warning.png" />

          </div>
          <p>This Company "<span class="font-weight-600">{{ selectedCompanyName }}</span>" is not synced <br>with the
            Tally
            connector.</p>
        </div>
      </div>
      <!-- Overlay to Close Popup -->
      <div class="InfoDeletePopupOverlayMobile" @click="closePopupMobile"></div>
    </div>
  </section>
</template>



<script>
import Api from "@/Api";
import Common from "@/Common";
import moment from "moment";
import GoogleAnalytics from "@/GoogleAnalytics";
import { sign } from 'jsonwebtoken';
import CryptoJS from 'crypto-js';

export default {
  name: "getcomapny",
  data() {
    this.loading = false;
    return {
      subUserSubscription: false,
      hideInfo: false,
      source: '',
      gstNumber: '',
      parentId: localStorage.getItem("_parentUserId"),
      userName: '',
      Password: '',
      companyChanged: false,
      customerId: "",
      getcompanymodel: "",
      company: [],
      seleted: "",
      commit_subscribe: "",
      payment_url: "",
      month: "",
      year: "",
      start_date: "",
      events: ['click', 'mousemove', 'mousedown', 'scroll', 'keypress', 'load'],
      warningTimer: null,
      logoutTimer: null,
      companyGstNumber: "",
      companystateName: "",
      companyCountryName: '',
      Start_Date: "",
      End_Date: "",
      StrSDate: "",
      StrEDate: "",
      isOpen: false,
      active_el: 'Profile',
      user_name: "",
      tallyVersion: "",
      tallyVersionStatus: "0",
      parentuserid: "",
      companyDataMap: {},
      showonlySetupConnector: false,
      isPaid: "",
      isDropdownOpen: false,
      convertedStatus: "",
      customermobile: "",
      secretKey: process.env.VUE_APP_SECRET_KEY,
      webUrl: process.env.VUE_APP_WEB_URL,
      web2Url: process.env.VUE_APP_WEB2_URL,
      isNewHeaderOpenDesktop: false,
      selectedCompanyNewHeaderDesktop: '',
      myCompaniesData: [],

      isNewHeaderOpenMobile: false,
      selectedCompanyNewHeaderMobile: {
        id: 1,
        name: "Burhan Trader 2023-2024",
        description: "Synced few seconds ago",
      },
      companiesNewHeaderMobile: [
        { id: 1, name: "Burhan Trader 2023-2024", description: "Synced few seconds ago" },
        { id: 2, name: "XYZ 2023-2024", description: "Synced 1 hour ago" },
        { id: 3, name: "Mahalakshmi Industries", description: "Synced 8 hours ago" },
        { id: 4, name: "Prabhas Industries", description: "Synced 1 day ago" },
        { id: 5, name: "Mahalakshmi Industries", description: "Synced 15 days ago" },
        { id: 6, name: "Somani Threads Pvt. Ltd", description: "Synced 1 month ago" },
        { id: 7, name: "Mahaveer Enterprise", description: "Synced 2 months ago" },
        { id: 8, name: "ABCD Private Limited", description: "Synced 3 months ago" },
      ],
      customerfullName: localStorage.getItem("customerfullName"),
      syncMessage: '',
      lastsyncdate: '',
      notSyncedCompanyGuid: '',
      notSyncedBasicCompanyName: '',
      notSyncedCompanyName: '',
      notSyncedCompanyDataPath: '',
      notSyncedCompanyNumber: '',
      notSyncedStartFrom: '',
      notSyncedGstNumber: '',
      parentNameData: '',
      companyIdData: localStorage.getItem("companyId"),
      syncInterval: null,
      openDropdownDesktop: null,
      showInfoPopupDesktop: false,
      showDeletePopupDesktop: false,
      showNotSyncPopupDesktop: false,
      openDropdownMobile: null,
      showInfoPopupMobile: false,
      showDeletePopupMobile: false,
      showNotSyncPopupMobile: false,
      selectedCompanyId: '',
      selectedCompanyName: '',
      selectedCompanyStartFrom: '',
      selectedCompanySyncFrom: '',
      selectedCompanyLastSync: '',
      selectedCompanyDataPath: '',
      selectedCompanyCreatedDate: '',
      selectedCompanySyncStatus: '',
      CompanyAdded: {},
      addButtonClicked: false,
      eInvoiceStatus: '',
    };
  },
  computed: {
    canPurchase() {
    return (this.parentId == "");
  },
    // computedRoute() {
    //   if (this.customermobile) {
    //     const lastDigit = this.customermobile.toString().slice(-1);
    //     return ['2', '6'].includes(lastDigit) ? '/gsploginnew' : '/gsplogin';
    //   }
    //   return '/gsplogin'; // Default route when customermobile is undefined
    // },
    addOnsStatus() {
      const status = localStorage.getItem('EWAY_EINVOICE_STATUS');
      return status ? JSON.parse(status) : [];
    },
    userNameFetcher() {
      return this.$store.state.Web1_Store.User_Name;
    }
  },
  watch: {
    $route(to, from) {
      this.checktoken();
    },
    // gstNumber(newVal) {
    //   console.log("newValue");
    //   if (this.parentId === '' && newVal && newVal.trim() !== '') {
    //     this.getGspSearchFunction();
    //   }
    // },
  },
  methods: {
    //set interval for update just synced state
    updateSyncMessage() {
      const lastSyncDate = localStorage.getItem("lastSyncDate");

      if (!lastSyncDate || moment(lastSyncDate).format("YYYY") === "Invalid date") {
        this.syncMessage = "Not Synced yet";
        return;
      }

      const diffInSeconds = moment().diff(moment(lastSyncDate), "seconds");

      if (diffInSeconds >= 1 && diffInSeconds <= 60) {
        this.syncMessage = "Synced just now";
      } else {
        this.syncMessage = "Synced " + moment(lastSyncDate).fromNow();
      }
    },

    updateUserName(newUserName) {
      this.$store.dispatch("Web1_Store/setUserName", newUserName);
    },
    toggleDropdownthreedotsDesktop(id) {
      let selectedCompany = this.company.find((data) => data.companyData.id == id);
      let message = this.getSyncMessage(selectedCompany.companyData.lastSyncDate);
      if (message == "Not Synced yet") {
        this.hideInfo = true;
      }
      else {
        this.hideInfo = false;
      }
      this.openDropdownDesktop = this.openDropdownDesktop === id ? null : id;
      this.selectedCompanyId = id
    },
    openInfoPopupDesktop(info) {
      this.selectedCompanyName = info.companyData.companyName
      this.selectedCompanyStartFrom = info.companyData.startFrom
      this.selectedCompanySyncFrom = info.companyData.syncFromDate
      this.selectedCompanyLastSync = info.companyData.lastSyncDate
      this.selectedCompanyDataPath = info.companyData.datapath
      this.selectedCompanyCreatedDate = info.companyData.createdDate
      this.selectedCompanySyncStatus = info.companyData.syncStatus
      if (info.companyData.lastSyncDate !== '') {
        this.showInfoPopupDesktop = true;
        this.openDropdownDesktop = null;
      }
    },
    openDeletePopupDesktop() {
      this.showDeletePopupDesktop = true;
      this.openDropdownDesktop = null;
    },
    openNotSyncPopupDesktop() {
      this.showNotSyncPopupDesktop = true;
      this.openDropdownDesktop = null;
    },
    closePopupDesktop() {
      this.showInfoPopupDesktop = false;
      this.showDeletePopupDesktop = false;
      this.showNotSyncPopupDesktop = false;
      this.subUserSubscription = false;
      this.selectedCompanyName = "";
    },
    confirmDeleteDesktop() {
      this.showDeletePopupDesktop = false;
      this.deleteCompanyFunction()
    },

    toggleDropdownthreedotsMobile(id) {
      this.openDropdownMobile = this.openDropdownMobile === id ? null : id;
      this.selectedCompanyId = id
    },
    openInfoPopupMobile(info) {
      this.selectedCompanyName = info.companyData.companyName
      this.selectedCompanyStartFrom = info.companyData.startFrom
      this.selectedCompanySyncFrom = info.companyData.syncFromDate
      this.selectedCompanyLastSync = info.companyData.lastSyncDate
      this.selectedCompanyDataPath = info.companyData.datapath
      this.selectedCompanyCreatedDate = info.companyData.createdDate
      this.selectedCompanySyncStatus = info.companyData.syncStatus
      this.showInfoPopupMobile = true;
      this.openDropdownMobile = null;
    },
    openDeletePopupMobile() {
      this.showDeletePopupMobile = true;
      this.openDropdownMobile = null;
    },
    openNotSyncPopupMobile() {
      this.showNotSyncPopupMobile = true;
      this.openDropdownMobile = null;
    },
    closePopupMobile() {
      this.showInfoPopupMobile = false;
      this.showDeletePopupMobile = false;
      this.showNotSyncPopupMobile = false;
    },
    confirmDeleteMobile() {
      this.showDeletePopupMobile = false;
      this.deleteCompanyFunction()
    },
    deleteCompanyFunction() {
      const data = {
        requestFrom: "WEB",
        _userId: localStorage.getItem('customerId'),
        company_id: this.selectedCompanyId
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.deleteCompany(data, headers)
        .then((response) => {
          window.location.href = '/dashboard';
        })
        .catch((err) => {
          console.log(err.data.message)
        })
    },
    async addTallyOpenCompanies(comData) {
      // this.CompanyAdded = true
      this.$set(this.CompanyAdded, comData.guid, true);
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        guid: this.notSyncedCompanyGuid,
        datapath: this.notSyncedCompanyDataPath,
        companyName: this.notSyncedCompanyName,
        companyNumber: this.notSyncedCompanyNumber,
        basicCompanyName: this.notSyncedBasicCompanyName,
        startFrom: this.notSyncedStartFrom,
        gstNumber: this.notSyncedGstNumber,
      };

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      try {
        const response = await Api.addTallyOpenCompanies(data, headers);
        console.log(response, "response data in add api");
        this.CompanyAdded = false

      } catch (error) {
        console.error(error, "error in addTallyOpenCompanies API call");
        this.CompanyAdded = false

      }
    },
    gettallyOpenCompanies() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        searchTerm: '',
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "token": localStorage.getItem("webAuthToken"),
      };
      Api.gettallyOpenCompanies(data, headers)
        .then((response) => {
          this.myCompaniesData = response.data.data.list
        })
    },
    async SyncCompanyFunction(openData) {
      this.addButtonClicked = true
      this.notSyncedCompanyGuid = openData.guid
      this.notSyncedCompanyDataPath = openData.datapath
      this.notSyncedBasicCompanyName = openData.basicCompanyName
      this.notSyncedCompanyName = openData.companyName
      this.notSyncedCompanyNumber = openData.companyNumber
      this.notSyncedStartFrom = openData.startFrom
      this.notSyncedGstNumber = openData.gstNumber
      await this.addTallyOpenCompanies(openData)
      this.getCompany()

      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1000);

    },
    encryptCompanyId(selected_company_id) {
      console.log("secret", this.secretKey);
      return this.makeUrlSafe(CryptoJS.AES.encrypt(selected_company_id, this.secretKey).toString());
    },
    encryptUserId(user_id) {
      return this.makeUrlSafe(CryptoJS.AES.encrypt(user_id, this.secretKey).toString());
    },
    makeUrlSafe(encryptedString) {
      return encryptedString
        .replace(/\//g, '_')
        .replace(/\+/g, '-')
        .replace(/=/g, "'");
    },
    toggleDropdownNewHeaderDesktop() {
      this.openDropdownDesktop = null;
      this.isNewHeaderOpenDesktop = !this.isNewHeaderOpenDesktop;
    },
    // selectCompanyNewHeaderDesktop(companyNewHeaderDesktop) {
    //   this.selectedCompanyNewHeaderDesktop = companyNewHeaderDesktop.companyData.companyName;
    //   this.isNewHeaderOpenDesktop = false;
    // },

    toggleDropdownNewHeaderMobile() {
      this.isNewHeaderOpenMobile = !this.isNewHeaderOpenMobile;
    },
    selectCompanyNewHeaderMobile(companyNewHeaderMobile) {
      this.selectedCompanyNewHeaderMobile = companyNewHeaderMobile;
      this.isNewHeaderOpenMobile = false;
    },
    getColorClass(syncDate) {
      const diffInDays = moment().diff(moment(syncDate), 'days');
      // const diffInHours = (currentDate - syncDate)/(1000 * 60 * 60);
      // const diffInSeconds = (currentDate - syncDate)/(1000);
      if (moment(syncDate).format("YYYY") == "1900" || moment(syncDate).format("YYYY") == "2099" || moment(syncDate).format("YYYY") == "" || syncDate == "Invalid date" || !syncDate || diffInDays > 3) {
        return "text-red-color";
      } else {
        return "text-green-color";
      }
      // if(diffInDate >=30 && diffInDate < 60){
      //   this.syncMessage = 'Synced 1 month ago'
      //   return "text-red-color";
      // }
      // if(diffInDate >=60){
      //   this.syncMessage = 'Synced 2 months ago'
      //   return "text-red-color";
      // }
      // if(diffInDate == 15){
      //   this.syncMessage = 'Synced 15 days ago'
      //   return "text-red-color";
      // }
      // if(diffInDate == 1){
      //   this.syncMessage = 'Synced 1 day ago'
      //   return "text-red-color";
      // }
      // if(diffInHours == 1){
      //   this.syncMessage = 'Synced 1 hour ago'
      //   return "text-red-color";
      // }
      // if(diffInSeconds < 120 ){
      //   this.syncMessage = 'Synced 1 hour ago'
      //   return "text-red-color";
      // }
      // else {
      //   return "text-green-color";
      // }
    },
    // getSyncMessage(syncDate) {
    //   if (
    //     moment(syncDate).format("YYYY") === "1900" ||
    //     moment(syncDate).format("YYYY") === "2099" ||
    //     syncDate === "" ||
    //     syncDate === "Invalid date"
    //   ) {
    //     return "Not Synced yet";
    //   }
    //   else {
    //     return "Synced " + moment(syncDate).fromNow();
    //   }
    // },
    getSyncMessage(syncDate) {
      if (
        moment(syncDate).format("YYYY") === "1900" ||
        moment(syncDate).format("YYYY") === "2099" ||
        syncDate === "" ||
        syncDate === "Invalid date"
      ) {
        return "Not Synced yet";
      }

      const diffInSeconds = moment().diff(moment(syncDate), "seconds");

      if (diffInSeconds >= 1 && diffInSeconds <= 60) {
        return "Synced just now";
      } else {
        return "Synced " + moment(syncDate).fromNow();
      }
    }
    ,

    getGspSearchFunction() {
      this.loading = true

  const data = {
    company_id: localStorage.getItem("companyId"),
    _userId: localStorage.getItem("customerId"),
    gstIn: localStorage.getItem("companyGstNumber"),
    requestFrom: "WEB",
    isStaging: false
      }
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    token: localStorage.getItem("webAuthToken"),
  };
  Api.getGspSearch(data, headers)
    .then((response) => {
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseData == "200") {
            this.userName = response.data.data.gspUserName ? response.data.data.gspUserName:"";
            this.Password = response.data.data.gspPassword ? response.data.data.gspPassword:"";
            this.eInvoiceStatus = response.data.data.eInvoiceStatus ? response.data.data.eInvoiceStatus:"";
            localStorage.setItem('gspUser', this.userName)
            localStorage.setItem('gspPassword', this.Password)
            localStorage.setItem('eInvoiceStatus', this.eInvoiceStatus)

      }
          this.loading = false

    })
        .catch((error) => {
          this.loading = false
          Common.getStatusForActionFailed(err.response.status)
        })
},

    Tally_button() {
      GoogleAnalytics.Tally_Theme_button();
      this.switch_theme();
    },
    switch_theme() {
      const data = {
        _userId: localStorage.getItem('customerId'),
        requestFrom: "WEB",
        selectedTheme: "2.0",
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
          const encryptedCompanyId = this.encryptCompanyId(localStorage.getItem("companyId"))
          const encryptedUserId = this.encryptUserId(localStorage.getItem("customerId"))
          // console.log("encryptCompanyId", encryptedCompanyId, "encryptedUserId", encryptedUserId)
          if (responseData == "200") {
            localStorage.setItem("selectedTheme", "2.0")
            this.source = localStorage.getItem("source")
            if (this.source !== '' || this.source !== undefined) {
              window.location.href = ` ${this.web2Url}/?u=${encryptedUserId}&c=${encryptedCompanyId}&s=${this.source}`
            } else {
              window.location.href = ` ${this.web2Url}/?u=${encryptedUserId}&c=${encryptedCompanyId}`
            }
            // this.$router.push({ name: 'tally-style' });
          }
        }).catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
        });
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    windows_file_download_popup() {
      var timespan = Date.now();
      const fileUrl =
        "https://lkpsetup.s3.ap-south-1.amazonaws.com/lkpwpf/Livekeeping-Tally.exe?" + timespan;
      const fileName = "Livekeeping-Tally";

      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;

      link.click();
      GoogleAnalytics.windows_file_download_popup("filedownloadpopup");
    },
    download_now_mobile_device() {
      GoogleAnalytics.mobile_web_inner_download_button("download_now_inner");

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
    },
    hide() {
      this.isNewHeaderOpenDesktop = false;
      this.isNewHeaderOpenMobile = false;
      this.isOpen = false;
    },
    closeEvent() {

      this.hide();
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
            const responseData = Common.getStatusForActionFailed(response.data.status);
            if (responseData == "200") {
              if (response.data.data.list.length == 0) {
                this.showonlySetupConnector = true;
                return;
              }
              if (localStorage.getItem("companyId") == null) {
                localStorage.setItem(
                  "companyId",
                  response.data.data.list[0].companyData.id
                );

                localStorage.setItem(
                  "_parentUserId",
                  response.data.data.list[0]._parentUserId
                );

                localStorage.setItem(
                  "companyType",
                  response.data.data.list[0].companyData.companyType
                );
                localStorage.setItem(
                  "lastSyncDate",
                  moment(
                    String(response.data.data.list[0].companyData.lastSyncDate)
                  ).format("DD MMM yyyy h:mm A")
                );

                localStorage.setItem('max_startFrom', moment(String(response.data.data.list[0].companyData.startFrom)).format("YYYY-MM-DD"));
                localStorage.setItem(
                  "companyGstNumber",
                  response.data.data.list[0].companyData.companyDetails.gstNumber
                );
                if (response.data.data.list[0]._parentUserId !== '') {
                  localStorage.setItem('parentName', response.data.data.list[0].parentName)
                }
                this.gstNumber = response.data.data.list[0].companyData.companyDetails.gstNumber
                localStorage.setItem(
                  "companystateName",
                  response.data.data.list[0].companyData.companyDetails.stateName
                );
                localStorage.setItem(
                  "companyCountryName",
                  response.data.data.list[0].companyData.companyDetails.country
                );
                localStorage.setItem(
                  "address",
                  response.data.data.list[0].companyData.companyDetails.address
                );
                localStorage.setItem(
                  "pincode",
                  response.data.data.list[0].companyData.companyDetails.pincode
                );
                if (response.data.data.list[0].companyData.companyType == "DEMO") {
                  localStorage.setItem(
                    "companyType",
                    response.data.data.list[0].companyData.companyType
                  );
                } else {
                  localStorage.setItem(
                    "companyType", ""
                  );
                }

                localStorage.setItem("StrSDate", response.data.data.list[0].companyData.startFrom);
                localStorage.setItem("StrEDate", response.data.data.list[0].companyData.endDate);


              } else {
                if (localStorage.getItem("companyType") !== "") {
                  localStorage.setItem(
                    "companyId",
                    response.data.data.list[0].companyData.id
                  );
                  localStorage.setItem(
                    "_parentUserId",
                    response.data.data.list[0]._parentUserId
                  );

                  localStorage.setItem(
                    "lastSyncDate",
                    moment(
                      String(response.data.data.list[0].companyData.lastSyncDate)
                    ).format("DD MMM yyyy h:mm A")
                  );


                  localStorage.setItem('max_startFrom', moment(String(response.data.data.list[0].companyData.startFrom)).format("YYYY-MM-DD"));
                  localStorage.setItem(
                    "companyGstNumber",
                    response.data.data.list[0].companyData.companyDetails.gstNumber
                  );
                  if (response.data.data.list[0]._parentUserId !== '') {
                    localStorage.setItem('parentName', response.data.data.list[0].parentName)
                  }
                  this.gstNumber = response.data.data.list[0].companyData.companyDetails.gstNumber
                  localStorage.setItem(
                    "companystateName",
                    response.data.data.list[0].companyData.companyDetails.stateName
                  );
                  localStorage.setItem(
                    "companyCountryName",
                    response.data.data.list[0].companyData.companyDetails.country
                  );
                  localStorage.setItem(
                    "address",
                    response.data.data.list[0].companyData.companyDetails.address
                  );
                  localStorage.setItem(
                    "pincode",
                    response.data.data.list[0].companyData.companyDetails.pincode
                  );
                  if (response.data.data.list[0].companyData.companyType == "DEMO") {
                    localStorage.setItem(
                      "companyType",
                      response.data.data.list[0].companyData.companyType
                    );
                  } else {
                    localStorage.setItem(
                      "companyType", ""
                    );
                  }

                  localStorage.setItem("StrSDate", response.data.data.list[0].companyData.startFrom);
                  localStorage.setItem("StrEDate", response.data.data.list[0].companyData.endDate);

                }
                if (localStorage.getItem("companyChanged") == false || localStorage.getItem("companyChanged") === null) {
                  localStorage.setItem(
                    "companyGstNumber",
                    response.data.data.list[0].companyData.companyDetails.gstNumber
                  );
                  if (response.data.data.list[0]._parentUserId !== '') {
                    localStorage.setItem('parentName', response.data.data.list[0].parentName)
                  }
                  this.gstNumber = response.data.data.list[0].companyData.companyDetails.gstNumber
                  localStorage.setItem(
                    "companystateName",
                    response.data.data.list[0].companyData.companyDetails.stateName
                  );
                  localStorage.setItem(
                    "companyCountryName",
                    response.data.data.list[0].companyData.companyDetails.country
                  );
                  localStorage.setItem(
                    "address",
                    response.data.data.list[0].companyData.companyDetails.address
                  );
                  localStorage.setItem(
                    "pincode",
                    response.data.data.list[0].companyData.companyDetails.pincode
                  );
                }


                if (response.data.data.list[0].companyData.companyType == "DEMO") {
                  localStorage.setItem(
                    "companyType",
                    response.data.data.list[0].companyData.companyType
                  );
                } else {
                  localStorage.setItem(
                    "companyType", ""
                  );
                }


                if (response.data.data.list.length == "1") {
                  localStorage.setItem(
                    "companyId",
                    response.data.data.list[0].companyData.id
                  );


                  localStorage.setItem(
                    "lastSyncDate",
                    moment(
                      String(response.data.data.list[0].companyData.lastSyncDate)
                    ).format("DD MMM yyyy h:mm A")
                  );

                  localStorage.setItem('max_startFrom', moment(String(response.data.data.list[0].companyData.startFrom)).format("YYYY-MM-DD"));
                  localStorage.setItem(
                    "companyGstNumber",
                    response.data.data.list[0].companyData.companyDetails.gstNumber
                  );
                  if (response.data.data.list[0]._parentUserId !== '') {
                    localStorage.setItem('parentName', response.data.data.list[0].parentName)
                  }
                  this.gstNumber = response.data.data.list[0].companyData.companyDetails.gstNumber
                  localStorage.setItem(
                    "companystateName",
                    response.data.data.list[0].companyData.companyDetails.stateName
                  );
                  localStorage.setItem(
                    "companyCountryName",
                    response.data.data.list[0].companyData.companyDetails.country
                  );
                  localStorage.setItem(
                    "address",
                    response.data.data.list[0].companyData.companyDetails.address
                  );
                  localStorage.setItem(
                    "pincode",
                    response.data.data.list[0].companyData.companyDetails.pincode
                  );
                  if (response.data.data.list[0].companyData.companyType == "DEMO") {
                    localStorage.setItem(
                      "companyType",
                      response.data.data.list[0].companyData.companyType
                    );
                  } else {
                    localStorage.setItem(
                      "companyType", ""
                    );
                  }
                }



                if (localStorage.getItem("max_startFrom") == "" || localStorage.getItem("max_startFrom") === null) {
                  localStorage.setItem('max_startFrom', moment(String(response.data.data.list[0].companyData.startFrom)).format("YYYY-MM-DD"));
                }
                if (moment(localStorage.getItem("lastSyncDate")).format("yyyy") == "1900" || moment(localStorage.getItem("lastSyncDate")).format("yyyy") == "2099" || moment(localStorage.getItem("lastSyncDate")).format("yyyy") == "" || localStorage.getItem("lastSyncDate") == "Invalid date") {
                  $("#last_date").text(
                    "Not Synced yet"
                  );
                } else {
                  $("#last_date").text(
                    "Synced " + moment(localStorage.getItem("lastSyncDate")).fromNow()
                  );
                }


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

              if (parseInt(StrGetStartMonthNumber) < monthString || (parseInt(StrGetStartMonthNumber) == monthString && parseInt(StrGetStartDay) <= dayString)) {
                if (parseInt(StrGetStartMonthNumber) == 1 && parseInt(StrGetStartDay) == 1) {
                  this.Start_Date = moment(String(StrGetStartMonthNumber + "-" + StrGetStartDay + "-" + moment().format("yyyy")), 'MM-DD-YYYY').format("YYYY-MM-DD");
                  this.End_Date = moment(String(StrGetEndMonthNumber + "-" + StrGetEndDay + "-" + moment().format("yyyy")), 'MM-DD-YYYY').format("YYYY-MM-DD");
                  // start date
                  localStorage.setItem("date_range_start_date", this.Start_Date);
                  localStorage.setItem("first_date_range_start_date", this.Start_Date);

                  // end date 
                  localStorage.setItem("date_range_end_date", this.End_Date);
                  localStorage.setItem("first_date_range_end_date", this.End_Date);
                } else {

                  if (StrGetEndMonthNumber == 2) {
                    var year = moment().add(1, 'Y').format("yyyy");
                    if (moment([year]).isLeapYear()) {
                      StrGetEndDay = moment("2024-02-29").format("D");
                    } else {
                      StrGetEndDay = moment("2024-02-28").format("D");
                    }
                  }
                  this.Start_Date = moment(String(StrGetStartMonthNumber + "-" + StrGetStartDay + "-" + moment().format("yyyy")), 'MM-DD-YYYY').format("YYYY-MM-DD");
                  this.End_Date = moment(String(StrGetEndMonthNumber + "-" + StrGetEndDay + "-" + moment().add(1, 'Y').format("yyyy")), 'MM-DD-YYYY').format("YYYY-MM-DD");

                  // start date
                  localStorage.setItem("date_range_start_date", this.Start_Date);
                  localStorage.setItem("first_date_range_start_date", this.Start_Date);

                  // end date 
                  localStorage.setItem("date_range_end_date", this.End_Date);
                  localStorage.setItem("first_date_range_end_date", this.End_Date);
                }
              } else {
                this.Start_Date = moment(String(StrGetStartMonthNumber + "-" + StrGetStartDay + "-" + moment().add(-1, 'Y').format("yyyy")), 'MM-DD-YYYY').format("YYYY-MM-DD");
                this.End_Date = moment(String(StrGetEndMonthNumber + "-" + StrGetEndDay + "-" + moment().format("yyyy")), 'MM-DD-YYYY').format("YYYY-MM-DD");

                // start date
                localStorage.setItem("date_range_start_date", this.Start_Date);
                localStorage.setItem("first_date_range_start_date", this.Start_Date);

                // end date 
                localStorage.setItem("date_range_end_date", this.End_Date);
                localStorage.setItem("first_date_range_end_date", this.End_Date);
              }

              for (let [key, value] of Object.entries(
                response.data.data.list
              )) {
                response.data.data.list[key].companyData.companyDetails.gstNumber = value.companyData.companyDetails.gstNumber;

                response.data.data.list[key].companyData.companyDetails.stateName = value.companyData.companyDetails.stateName;
                response.data.data.list[key].companyData.lastSyncDatenew =
                  "Last Sync :" +
                  moment(
                    String(value.companyData.lastSyncDate)
                  ).format("DD MMM yyyy h:mm A");
                  if(value._parentUserId == '' && value.companyData.id == localStorage.getItem('companyId')){
                    localStorage.setItem('companyGstNumber', value.companyData.companyDetails.gstNumber)
                  }
              }

              this.company = response.data.data.list;

              this.company.forEach((data) => {
                this.companyDataMap[data.companyData.id] = data;
              })
              console.log(this.companyDataMap);

              const companyData = this.companyDataMap[localStorage.getItem("companyId")];
              // debugger;
              this.parentuserid = companyData._parentUserId;
              localStorage.setItem(
                "_parentUserId",
                this.parentuserid
              );
              this.companyType = companyData.companyType;
              if (companyData._parentUserId && companyData._parentUserId == localStorage.getItem('customerId')) {
                this.user_persmissions();
              }

              if (companyData) {
                localStorage.setItem(
                  "lastSyncDate",
                  moment(String(companyData.companyData.lastSyncDate)).format("DD MMM yyyy h:mm A")
                );
                if (
                  moment(localStorage.getItem("lastSyncDate")).format("yyyy") === "1900" ||
                  moment(localStorage.getItem("lastSyncDate")).format("yyyy") === "2099" ||
                  moment(localStorage.getItem("lastSyncDate")).format("yyyy") === "" ||
                  localStorage.getItem("lastSyncDate") === "Invalid date"
                ) {
                  $("#last_date").text("Not Synced yet");
                } else {
                  $("#last_date").text(
                    "Synced " +
                    moment(localStorage.getItem("lastSyncDate")).fromNow()
                  );
                }
              }
              if(localStorage.getItem('companyGstNumber')){
                this.getGspSearchFunction();
              }
            }
          }

          if (localStorage.getItem('companyType') == "DEMO" || localStorage.getItem('companyType') == "MAIN") {
            localStorage.setItem('gtagisMainUser', true);
          } else {
            localStorage.setItem('gtagisMainUser', false);
          }
          if (theTarget.parentuserid != "") {
            if (theTarget.parentuserid != localStorage.getItem('customerId')) {
              this.getPermission();
            }
          } else {
            this.getPermission();
          }



          localStorage.setItem("companytype_value", this.companyType);

        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },

    redirectMobileView() {
      GoogleAnalytics.Mobile_Version_button();

      // Check if a JWT token exists in localStorage
      if (localStorage.getItem('appAuthToken') != '') {
        const dataToEncrypted = {
          auth_token: localStorage.getItem('appAuthToken'),
          customer_id: localStorage.getItem('customerId'),
          company_id: localStorage.getItem('companyId'),
        };
        const url = this.encryptToken(dataToEncrypted);

        const popupWidth = 400; // Adjust width for responsiveness
        const popupHeight = 1200; // Adjust height for responsiveness

        // Position the popup in the bottom-right corner
        const left = window.screen.width - popupWidth - 20; // 20px padding from the right
        const top = window.screen.height - popupHeight - 50; // 50px padding from the bottom

        // Open the popup
        window.open(
          url,
          "_blank",
          `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no,fullscreen=yes`
        );
      } else {
        if (window.location.origin == "https://webapp.livekeeping.com") {
          var url = 'https://app.livekeeping.com';
        } else {
          var url = 'https://app.livekeeping.com';
        }
        const popupWidth = 400; // Adjust width for responsiveness
        const popupHeight = 1200; // Adjust height for responsiveness

        // Position the popup in the bottom-right corner
        const left = window.screen.width - popupWidth - 20; // 20px padding from the right
        const top = window.screen.height - popupHeight - 50; // 50px padding from the bottom

        // Open the popup
        window.open(
          url,
          "_blank",
          `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no,fullscreen=yes`
        );

      }
    },


    encryptToken(data) {
      const token = sign(data, 'DBBFBB2C73F1B8DEFBBF7FCA6C223');
      if (window.location.origin == "https://webapp.livekeeping.com") {
        var url = `https://app.livekeeping.com/?JWT=${token}`;
      } else {
        var url = `https://app.livekeeping.com/?JWT=${token}&isStaging=true`;
      }
      return url;
    }
    ,
    async companyData(companyNewHeaderDesktop, device) {
      // if((this.isPaid == "" || this.isPaid == null) && companyNewHeaderDesktop._parentUserId) {
      //   this.$bvModal.show("customerstatus-popup");
      //   return;
      // }

      if (companyNewHeaderDesktop.companyData.lastSyncDate !== '') {

        try {
          let data;
          if (companyNewHeaderDesktop._parentUserId == "") {
            data = {
              _userId: localStorage.getItem("customerId"),
              requestFrom: "WEB",
            };
          } else {
            data = {
              _userId: companyNewHeaderDesktop._parentUserId,
              requestFrom: "WEB",
              parentUserId: localStorage.getItem("customerId"),
            };
          }

          const headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "token": localStorage.getItem('webAuthToken')
          };

          const response1 = await Api.getcustomerDetailsGo(data, headers);

          if (response1.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = '/';
            return; // Exit the function after redirect
          }
          
          if(companyNewHeaderDesktop._parentUserId !== "") {
            if (response1.data.data.customerStatus == "Installation Expired" && response1.data.data.parentUserId !=="") {
              this.selectedCompanyName = companyNewHeaderDesktop.companyData.companyName
              this.subUserSubscription = true;
              return;
            }
          }
          const customerStatus = response1.data.data.customerStatus.toLowerCase();
          
          if (customerStatus.includes('converted') || customerStatus.includes('installation done')) {
            localStorage.setItem("isPaid", "1");
          } else {
            localStorage.removeItem("isPaid");
          }


          localStorage.setItem("customerStatus", response1.data.data.customerStatus);
          localStorage.setItem("EWAY_EINVOICE_STATUS", JSON.stringify(response1.data.data.activeAddOns));

        } catch (error) {
          this.loading = false;
          console.error("Error in companydata:", error);
          // You might want to handle the error further here
        }


        localStorage.setItem("companyChanged", true)
        localStorage.setItem("companyId", companyNewHeaderDesktop.companyData.id);
        this.selectedCompanyNewHeaderDesktop = companyNewHeaderDesktop.companyData.companyName;
        localStorage.setItem('companyName', this.selectedCompanyNewHeaderDesktop)
        this.parentNameData = companyNewHeaderDesktop._parentUserId ? companyNewHeaderDesktop.parentName : ''
        localStorage.setItem('parentName', this.parentNameData)
        this.isNewHeaderOpenDesktop = false;
        localStorage.removeItem("isAdmin");
        const theTarget = companyNewHeaderDesktop;
        this.lastsyncdate = theTarget.companyData.lastSyncDate;
        this.companyType = theTarget.companytype;
        localStorage.setItem("companytype_value", theTarget.companytype);
        localStorage.setItem("_parentUserId", theTarget._parentUserId);

        this.maxstartfrom = theTarget.companyData.startFrom;
        this.companyGstNumber = theTarget.companyData.companyDetails.gstNumber;

        this.companystateName = theTarget.companyData.companyDetails.stateName;
        this.parentuserid = theTarget._parentUserId
        

           if (theTarget.parentuserid == localStorage.getItem('customerId')) {
            this.user_persmissions();
          } else {
            this.getPermission();
          }

        localStorage.setItem(
          "StrSDate",
          moment(String(theTarget.companyData.startFrom)).format("DD MMM yyyy h:mm A")
        );

        localStorage.setItem(
          "StrEDate",
          moment(String(theTarget.companyData.endDate)).format("DD MMM yyyy h:mm A")
        );



        localStorage.setItem(
          "lastSyncDate",
          moment(String(this.lastsyncdate)).format("DD MMM yyyy h:mm A")
        );


        localStorage.setItem('max_startFrom', moment(String(this.maxstartfrom)).format("YYYY-MM-DD"));
        localStorage.setItem('active_date', "")
        localStorage.setItem('companyGstNumber', this.companyGstNumber)
        localStorage.setItem('companystateName', theTarget.companyData.companyDetails.stateName)
        localStorage.setItem('companyCountryName', theTarget.companyData.companyDetails.country)
        localStorage.setItem('address', theTarget.companyData.companyDetails.address)
        localStorage.setItem('pincode', theTarget.companyData.companyDetails.pincode)



        localStorage.setItem(
          "lastSyncDate",
          moment(String(this.lastsyncdate)).format("DD MMM yyyy h:mm A")
        );
        if (moment(this.lastsyncdate).format("yyyy") == "1900" || moment(this.lastsyncdate).format("yyyy") == "2099" || moment(this.lastsyncdate).format("yyyy") == "" || localStorage.getItem("lastSyncDate") == "Invalid date") {
          $("#last_date").text(
            "Not Synced yet"
          );
        } else {
          $("#last_date").text(
            "Synced " +

            moment(this.lastsyncdate).fromNow()
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

        if (parseInt(StrGetStartMonthNumber) < monthString || (parseInt(StrGetStartMonthNumber) == monthString && parseInt(StrGetStartDay) <= dayString)) {
          if (parseInt(StrGetStartMonthNumber) == 1 && parseInt(StrGetStartDay) == 1) {
            this.Start_Date = moment(String(StrGetStartMonthNumber + "-" + StrGetStartDay + "-" + moment().format("yyyy")), 'MM-DD-YYYY').format("YYYY-MM-DD");
            this.End_Date = moment(String(StrGetEndMonthNumber + "-" + StrGetEndDay + "-" + moment().format("yyyy")), 'MM-DD-YYYY').format("YYYY-MM-DD");
            // start date
            localStorage.setItem("date_range_start_date", this.Start_Date);
            localStorage.setItem("first_date_range_start_date", this.Start_Date);

            // end date 
            localStorage.setItem("date_range_end_date", this.End_Date);
            localStorage.setItem("first_date_range_end_date", this.End_Date);
          } else {
            if (StrGetEndMonthNumber == 2) {
              var year = moment().add(1, 'Y').format("yyyy");
              if (moment([year]).isLeapYear()) {
                StrGetEndDay = moment("2024-02-29").format("D");
              } else {
                StrGetEndDay = moment("2024-02-28").format("D");
              }
            }
            this.Start_Date = moment(String(StrGetStartMonthNumber + "-" + StrGetStartDay + "-" + moment().format("yyyy")), 'MM-DD-YYYY').format("YYYY-MM-DD");
            this.End_Date = moment(String(StrGetEndMonthNumber + "-" + StrGetEndDay + "-" + moment().add(1, 'Y').format("yyyy")), 'MM-DD-YYYY').format("YYYY-MM-DD");

            // start date
            localStorage.setItem("date_range_start_date", this.Start_Date);
            localStorage.setItem("first_date_range_start_date", this.Start_Date);

            // end date 
            localStorage.setItem("date_range_end_date", this.End_Date);
            localStorage.setItem("first_date_range_end_date", this.End_Date);
          }
        } else {
          this.Start_Date = moment(String(StrGetStartMonthNumber + "-" + StrGetStartDay + "-" + moment().add(-1, 'Y').format("yyyy")), 'MM-DD-YYYY').format("YYYY-MM-DD");
          this.End_Date = moment(String(StrGetEndMonthNumber + "-" + StrGetEndDay + "-" + moment().format("yyyy")), 'MM-DD-YYYY').format("YYYY-MM-DD");

          // start date
          localStorage.setItem("date_range_start_date", this.Start_Date);
          localStorage.setItem("first_date_range_start_date", this.Start_Date);

          // end date 
          localStorage.setItem("date_range_end_date", this.End_Date);
          localStorage.setItem("first_date_range_end_date", this.End_Date);
        }
        // isMainUser Set code 
        if (localStorage.getItem('companyType') == "DEMO" || localStorage.getItem('companyType') == "MAIN") {
          localStorage.setItem('gtagisMainUser', true);
        } else {
          localStorage.setItem('gtagisMainUser', false);
        }


        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1000);
      }
      else {
        if (device == "Web") {
          this.showNotSyncPopupDesktop = true
        }
        else {
          this.showNotSyncPopupMobile = true;
        }
        this.openInfoPopupDesktop(companyNewHeaderDesktop)
      }

    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("YYYYMMDD");
      }
    },
    check_expires() {
      // const data = {
      //   _userId: localStorage.getItem("customerId"),
      //   requestFrom: "WEB",
      // };
      if (localStorage.getItem("_parentUserId") == "") {
        var data = {
          _userId: localStorage.getItem("customerId"),
          requestFrom: "WEB",
        };
      } else {
        var data = {
          _userId: localStorage.getItem("_parentUserId"),
          requestFrom: "WEB",
          parentUserId: localStorage.getItem("customerId"),
        };
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getcustomerDetailsGo(data, headers)

        .then((response) => {
          console.log(response);

          localStorage.setItem("tallyVersionStatus", this.tallyVersionStatus);
          if (response.data.data.isPaid === false) {
            if (
              response.data.data.trialStatus === "TRIAL" ||
              response.data.data.trialStatus === "TRIAL EXTENSION 1" ||
              response.data.data.trialStatus === "TRIAL EXTENSION 2"
            ) {
              var check_start_date = moment();
              var check_end_date = moment(String(response.data.data.endDate));
              var days = check_end_date.diff(check_start_date, "days") + 1;
              if (days >= "7") {
                $(".trail_div").show();

                this.commit_subscribe = days + " days left ,";
              } else {
                $(".extend_div").show();
              }
            } else {
              this.commit_subscribe = "";
              $(".subscribe_status").hide();
            }
          } else if (response.data.data.isPaid === true) {
            var check_start_date = moment();
            var check_end_date = moment(String(response.data.data.endDate));
            var days = check_end_date.diff(check_start_date, "days") + 1;
            if (days <= 30) {
              $(".renew_div").show();
              this.commit_subscribe = days + " Days Left";
            } else {
              $(".renew_div").hide();
              $(".purchase_user_div").show();
            }
          }
        });
    },
    checktoken() {
      if (localStorage.getItem("webAuthToken") == null || localStorage.getItem("webAuthToken") == "") {
        this.logout();
      }
    },
    logout() {
      setTimeout(() => {
        this.logoutAPI();

      }, 200);
      return false;


    },
    logoutAPI() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.logoutgo(data, headers)
        .then((response) => {
          window.location.href = `${this.webUrl}`;
          localStorage.clear();
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
        });
    },

    getPermission() {
      /// get Permissions 
      if (localStorage.getItem("_parentUserId") != "") {
        var data = {
          mainUserId: localStorage.getItem("_parentUserId"),
          subUserId: localStorage.getItem("customerId"),
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          requestFrom: "WEB",
        };
      } else {
        var data = {
          mainUserId: localStorage.getItem("customerId"),
          subUserId: localStorage.getItem("customerId"),
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          requestFrom: "WEB",
        };
      }

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getPermissionByCustomerIdGo(data, headers)

        .then((response) => {

          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            localStorage.setItem('isAdmin', response.data.data.isAdmin);
            if (response.data.data.isAdmin === false) {

              localStorage.setItem('isAllGroupsOrLedgers', response.data.data.isAllGroupsOrLedgers);
              localStorage.setItem('isAllStockGroupsOrItems', response.data.data.isAllStockGroupsOrItems);
              localStorage.setItem('isChecker', response.data.data.isChecker);
              localStorage.setItem('isMaker', response.data.data.isMaker);

              localStorage.setItem('isRead_isBank', response.data.data.isRead.isBank);
              localStorage.setItem('isRead_isCash', response.data.data.isRead.isCash);
              localStorage.setItem('isRead_isContra', response.data.data.isRead.isContra);
              localStorage.setItem('isRead_isCreditNote', response.data.data.isRead.isCreditNote);
              localStorage.setItem('isRead_isDebitNote', response.data.data.isRead.isDebitNote);
              localStorage.setItem('isRead_isJournal', response.data.data.isRead.isJournal);
              localStorage.setItem('isRead_isLedger', response.data.data.isRead.isLedger);
              localStorage.setItem('isRead_isOutstandingPayable', response.data.data.isRead.isOutstandingPayable);
              localStorage.setItem('isRead_isOutstandingReceivable', response.data.data.isRead.isOutstandingReceivable);
              localStorage.setItem('isRead_isPayment', response.data.data.isRead.isPayment);
              localStorage.setItem('isRead_isPurchase', response.data.data.isRead.isPurchase);
              localStorage.setItem('isRead_isPurchaseOrder', response.data.data.isRead.isPurchaseOrder);
              localStorage.setItem('isRead_isQuotation', response.data.data.isRead.isQuotation);
              localStorage.setItem('isRead_isReceipt', response.data.data.isRead.isReceipt);
              localStorage.setItem('isRead_isSales', response.data.data.isRead.isSales);
              localStorage.setItem('isRead_isSalesOrder', response.data.data.isRead.isSalesOrder);
              localStorage.setItem('isRead_isStockItem', response.data.data.isRead.isStockItem);
              //optional voucher
              localStorage.setItem('isRead_isOptionalVoucher', response.data.data.isRead.isOptionalVoucher);
              localStorage.setItem('isEway', response.data.data.isRead.isEway);
              localStorage.setItem('isEInvoice', response.data.data.isRead.isEInvoice);
              //permission id
              localStorage.setItem('permission_id', response.data.data._id);


              // Report
              localStorage.setItem('isBalanceSheet', response.data.data.reports.isBalanceSheet);
              localStorage.setItem('isProfitLoss', response.data.data.reports.isProfitLoss);
              localStorage.setItem('isTrialBalance', response.data.data.reports.isTrialBalance);


              //isWrite
              localStorage.setItem("isWrite_isContra", response.data.data.isWrite.isContra);
              localStorage.setItem("isWrite_isCreditNote", response.data.data.isWrite.isCreditNote);
              localStorage.setItem("isWrite_isDebitNote", response.data.data.isWrite.isDebitNote);
              localStorage.setItem("isWrite_isJournal", response.data.data.isWrite.isJournal);
              localStorage.setItem("isWrite_isPayment", response.data.data.isWrite.isPayment);
              localStorage.setItem("isWrite_isPurchase", response.data.data.isWrite.isPurchase);
              localStorage.setItem("isWrite_isPurchaseOrder", response.data.data.isWrite.isPurchaseOrder);
              localStorage.setItem("isWrite_isReceipt", response.data.data.isWrite.isReceipt);
              localStorage.setItem("isWrite_isSales", response.data.data.isWrite.isSales);
              localStorage.setItem("isWrite_isSalesOrder", response.data.data.isWrite.isSalesOrder);
              localStorage.setItem("isWrite_isQuotation", response.data.data.isWrite.isQuotation);
              localStorage.setItem("isWrite_isLedger", response.data.data.isWrite.isLedger);
              localStorage.setItem("isWrite_isStockItem", response.data.data.isWrite.isStockItem);
              localStorage.setItem("isWrite_isPaymentReminder", response.data.data.isWrite.isPaymentReminder);
              localStorage.setItem("isWrite_isOptionalVoucher", response.data.data.isWrite.isOptionalVoucher);


              //stockItemAccessibility permission 
              localStorage.setItem("hasAmountAccess", response.data.data.stockItemAccessibility.hasAmountAccess);
              localStorage.setItem("hasAvgPerRateAccess", response.data.data.stockItemAccessibility.hasAvgPerRateAccess);

              window.dispatchEvent(new Event('storageChanged'));
            } else {
              localStorage.setItem('permission_id', response.data.data._id);
              localStorage.setItem("isWrite_isOptionalVoucher", response.data.data.isWrite.isOptionalVoucher);
              this.user_persmissions();
            }
          }
        })
        .catch((err) => {

          Common.getStatusForActionFailed(err.data.status);
          this.loading = false;
        });
    },

    user_persmissions() {

      localStorage.setItem('isAllGroupsOrLedgers', true);
      localStorage.setItem('isAllStockGroupsOrItems', true);
      localStorage.setItem('isChecker', true);
      localStorage.setItem('isMaker', true);

      localStorage.setItem('isRead_isBank', true);
      localStorage.setItem('isRead_isCash', true);
      localStorage.setItem('isRead_isContra', true);
      localStorage.setItem('isRead_isCreditNote', true);
      localStorage.setItem('isRead_isDebitNote', true);
      localStorage.setItem('isRead_isJournal', true);
      localStorage.setItem('isRead_isLedger', true);
      localStorage.setItem('isRead_isOutstandingPayable', true);
      localStorage.setItem('isRead_isOutstandingReceivable', true);
      localStorage.setItem('isRead_isPayment', true);
      localStorage.setItem('isRead_isPurchase', true);
      localStorage.setItem('isRead_isPurchaseOrder', true);
      localStorage.setItem('isRead_isQuotation', true);
      localStorage.setItem('isRead_isReceipt', true);
      localStorage.setItem('isRead_isSales', true);
      localStorage.setItem('isRead_isSalesOrder', true);
      localStorage.setItem('isRead_isStockItem', true)
      localStorage.setItem('isRead_isDeliveryNote', true)
      localStorage.setItem('isEway', true);
      localStorage.setItem('isEInvoice', true);
      //Optional voucher
      localStorage.setItem('isRead_isOptionalVoucher', true);

      // Report
      localStorage.setItem('isBalanceSheet', true);
      localStorage.setItem('isProfitLoss', true);
      localStorage.setItem('isTrialBalance', true);

      // isWrite
      localStorage.setItem("isWrite_isContra", true);
      localStorage.setItem("isWrite_isCreditNote", true);
      localStorage.setItem("isWrite_isDebitNote", true);
      localStorage.setItem("isWrite_isJournal", true);
      localStorage.setItem("isWrite_isPayment", true);
      localStorage.setItem("isWrite_isPurchase", true);
      localStorage.setItem("isWrite_isPurchaseOrder", true);
      localStorage.setItem("isWrite_isReceipt", true);
      localStorage.setItem("isWrite_isSales", true);
      localStorage.setItem("isWrite_isSalesOrder", true);
      localStorage.setItem("isWrite_isQuotation", true);
      localStorage.setItem("isWrite_isLedger", true);
      localStorage.setItem("isWrite_isStockItem", true);
      localStorage.setItem("isWrite_isPaymentReminder", true);



      localStorage.setItem("hasAmountAccess", true);
      localStorage.setItem("hasAvgPerRateAccess", true);
      window.dispatchEvent(new Event('storageChanged'));
    },

    resetTimer: function () {
      clearTimeout(this.warningTimer);

      this.setTimers();
    },
    setTimers: function () {
      if (localStorage.getItem('remember') === '1') {
        this.warningTimer = setTimeout(this.warningMessage, 86400 * 1000);
      } else {
        this.warningTimer = setTimeout(this.warningMessage, 1800 * 1000);
      }


    },
    warningMessage: function () {

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
          this.updateUserName(response.data.data.name);
          localStorage.setItem('appAuthToken', response.data.data.appAuthToken);

        })
    },
    getCompanyTurnOver(){
       const today = new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth();
      let lastFYStart, lastFYEnd;

      if (currentMonth >= 3) {
        lastFYStart = `${currentYear - 1}-04-01`;
        lastFYEnd = `${currentYear}-03-31`;
      } else {
        lastFYStart = `${currentYear - 2}-04-01`;
        lastFYEnd = `${currentYear - 1}-03-31`;
      }
      const data = {
    company_id: localStorage.getItem('companyId'), //required
    requestFrom: "WEB", //required
    startDate: lastFYStart, //required
    endDate: lastFYEnd,
    _userId: localStorage.getItem('customerId')
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      }
      Api.getCompanyTurnOver(data, headers)
      .then((response)=>{
        localStorage.setItem('companyTurnOver', response.data.data.amount)
      })
    }
  },
   beforeMount() {
    if (localStorage.getItem('symbol') === 'undefined' || localStorage.getItem('symbol') === null) {
      localStorage.setItem("symbol", "₹");
    }

    this.getCompany();
    this.getcustomerid();
    this.seleted = localStorage.getItem("companyId");
    this.getPermission();
    this.check_expires();
  },
 async mounted() {
    this.updateSyncMessage();
    this.syncInterval = setInterval(this.updateSyncMessage, 5000);
      this.gettallyOpenCompanies();
      setTimeout(() => {
        this.isPaid = localStorage.getItem('isPaid');
        this.customerId = localStorage.getItem("customerId");
        if (localStorage.getItem("customerStatus").toLowerCase().includes("converted")) {
          this.convertedStatus = "1";
        }
      }, 300);
      this.gstNumber = localStorage.getItem("companyGstNumber") ? localStorage.getItem("companyGstNumber") : ''
      this.events.forEach(function (event) {
        window.addEventListener(event, this.resetTimer)
      }, this);

      this.setTimers();

      this.checktoken();

      // const data = {
      //   _userId: localStorage.getItem("customerId"),
      //   requestFrom: "WEB",
      // };
      if (localStorage.getItem("_parentUserId") == "" || localStorage.getItem("_parentUserId") == null) {
        var data = {
          _userId: localStorage.getItem("customerId"),
          requestFrom: "WEB",
        };
      } else {
        var data = {
          _userId: localStorage.getItem("_parentUserId"),
          requestFrom: "WEB",
          parentUserId: localStorage.getItem("customerId"),
        };
      }
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

          if ($.trim(localStorage.getItem("customerfullName")) == "") {
            this.user_name = response.data.data.name;
          } else {
            this.user_name = localStorage.getItem("customerfullName");
          }
          //this.updateUserName(response.data.data.name);
          if (this.customerfullName == '') {
            localStorage.setItem("customerfullName", response.data.data.name);
          }
          // if (isParentUserIdEmpty) {
          //   localStorage.setItem('appAuthToken', response.data.data.appAuthToken);
          // }
          
          localStorage.setItem('email', response.data.data.email);
          localStorage.setItem('gtagendDate', response.data.data.endDate);
          localStorage.setItem('customerStatus', response.data.data.customerStatus);
          localStorage.setItem('noOfYearPurchased', response.data.data.licenseDetails.noOfYearPurchased);
          localStorage.setItem("customerlastSyncDate", response.data.data.lastSyncDate);
          localStorage.setItem("EWAY_EINVOICE_STATUS", JSON.stringify(response.data.data.activeAddOns));
          if (response.data.data.customerStatus.toLowerCase().includes('converted') || response.data.data.customerStatus.toLowerCase().includes('installation done')) {
            localStorage.setItem("isPaid", "1");
          } else {
            localStorage.removeItem("isPaid");
          }

          if (response.data.data.customerStatus == "Converted" || response.data.data.customerStatus == "Converted User" || response.data.data.customerStatus == "Installation Done" || response.data.data.customerStatus == "Installation Expired" || response.data.data.customerStatus == "Installation User") {
            localStorage.setItem("isInstalled", "1");
          }

        }
      });
    if (localStorage.getItem('customerStatus').toLowerCase().includes('open') || localStorage.getItem('customerStatus').toLowerCase().includes('contacted') || localStorage.getItem('customerStatus').toLowerCase().includes('not prospective') || localStorage.getItem('customerStatus').toLowerCase().includes('not interested')) {
      this.showonlySetupConnector = true;
    } else {
      this.showonlySetupConnector = false;
    }
    // this.syncMessage = "Synced " + moment(localStorage.getItem('lastSyncDate')).fromNow();
    // this.syncInterval = setInterval(() => {
    //   this.syncMessage = "Synced " + moment(localStorage.getItem("lastSyncDate")).fromNow();
    // }, 5000);
    this.customermobile = localStorage.getItem('customermobile');
    setTimeout(() => {
      this.selectedCompanyNewHeaderDesktop = localStorage.getItem('companyName')
      this.parentNameData = localStorage.getItem('parentName')
    }, 500);
    setTimeout(() => {
      if (localStorage.getItem('companyName') && localStorage.getItem('companyName').includes('DEL_')) {
        localStorage.clear()
        window.location.href = '/dashboard';
      }
    }, 1000);
    this.getCompanyTurnOver()
  },
  beforeDestroy() {
    clearInterval(this.syncInterval);
  },
};

jQuery(document).ready(function () {
  jQuery(".create_transaction_box").hide();
  jQuery(".slide-toggle").click(function () {
    jQuery(".create_transaction_box").animate({
      width: "toggle",
    });
  });
});
</script>
