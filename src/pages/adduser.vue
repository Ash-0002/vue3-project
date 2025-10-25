<template>
  <section>
    <!-- loader -->
    <div v-if="new_loading" class="loader-wrapper">
      <div class="loading_css">
        <img src="assets/images/1.0/brand/Loader-GIF-Final.gif" class="img-fluid loader_css" height="40" width="40" />
      </div>
    </div>

    <!-- header -->
    <div class="page-header-title-box bg-white-all-pages mobilemargintopsetheaderportion">
      <div class="row align-items-center">
        <div class="col-lg-4 col-12">
          <div class="HeadingPortionAllUsers">
            <div class="arrow_left_items">
              <a @click="$router.go(-1)"><i class="fa fa-chevron-left"></i></a>
            </div>
            <div class="company_name sales_c_name padding_left_30 mobileheadingpaddingleft25px">
              <h3 class="mb-0">Add New User</h3>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-12">
          <div class="PurchaseUserPlusAdd">
            <ul class="mb-0">
              <li class="rigntmarginli10">
                <div>
                  <a href="#" class="TotalUsersInUseusers">
                    Total Purchased-<span>{{ mainUserData.noOfUserPurchased }} Users </span>
                  </a>
                </div>
              </li>
              <li class="rigntmarginli10 pl-15px">
                <div class="">
                  <a href="#" class="TotalUsersInUseusers">
                    In Use-<span>{{ mainUserData.noOfUserUsed }} Users </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- user details form -->
    <div class="main_card">
      <div class="card">
        <div class="AddUserFlowMainDiv">
          <h6>Enter User Details</h6>
          <div class="pt-3 InnerAddUserFlowCaption">
            <ul class="FormAddUser">
              <li>
                <input type="text" placeholder="Name" class="CommonInputForUsers" v-model="userName"
                  :disabled="isUpdate" :readonly="!isProceed" />
              </li>
              <li class="PhoneFieldFormGroup">
                <span class="flag">
                  <img src="/assets/images/1.0/png/indianflag.png" />
                </span>
                <span class="code">+91</span>
                <input type="number" placeholder="Phone Number" @input="limitPhoneLength" v-model="phoneNumber"
                  :disabled="isUpdate" :readonly="!isProceed" />
              </li>
              <li v-if="!isUpdate">
                <div class="dropdown-wrapper-Add-User-Company" @click.stop="toggleDropdownAdduser">
                  <div class="dropdown-display-Add-User-Company">
                    <span>{{ selectedCompaniesAdduser.length > 0 ? selectedCompaniesAdduser.length + ' company selected'
                      : 'Assign Company' }}</span>
                    <span class="arrow-Add-User-Company">▼</span>
                  </div>
                  <div class="dropdown-list-Add-User-Company SetAlignmentIssueOpenDropdowncheckbox"
                    v-if="dropdownOpenAdduser" @click.stop>
                    <label v-for="(companyAdduser, index) in companiesAdduser" :key="index"
                      class="dropdown-item-Add-User-Company">
                      <input type="checkbox"
                        :value="{ id: companyAdduser.companyData.id, name: companyAdduser.companyData.companyName }"
                        v-model="selectedCompaniesAdduser" @click.stop />
                      {{ companyAdduser.companyData.companyName }}
                    </label>
                  </div>
                </div>
              </li>
              <li v-else>
                <div class="dropdown-wrapper-Add-User-Company" @click.stop="toggleDropdownAdduser2">
                  <div class="dropdown-display-Add-User-Company">
                    <span>Company List</span>
                    <span class="arrow-Add-User-Company">▼</span>
                  </div>
                  <div class="dropdown-list-Add-User-Company" v-if="dropdownOpenAdduser2" @click.stop>
                    <label v-for="(companyAdduser, index) in companiesAdduser" :key="index"
                      class="dropdown-item-Add-User-Company ">
                      <!-- <input type="checkbox" :disabled="Boolean(companyAdduser._parentUserId)"
                        :value="{ id: companyAdduser.companyData.id, name: companyAdduser.companyData.companyName }"
                        v-model="selectedCompaniesAdduser" @click.stop /> -->
                      {{ companyAdduser.companyData.companyName }}

                      <span style="margin-left: 5rem">
                        <i v-if="companyAdduser._parentUserId" :class="isSingleCompany ? '' : 'fa fa-trash'"
                          @click="removePermissions(companyAdduser)"></i>
                        <i v-else class="fa fa-plus"
                          @click="addUnallocatedCompany({ id: companyAdduser.companyData.id, name: companyAdduser.companyData.companyName })"></i>
                      </span>
                    </label>
                  </div>
                </div>
              </li>
              <li v-if="!isUpdate">
                <button :disabled="errorMsg.length > 0" class="proceed-link"
                  style="color: blue; text-decoration: underline;" @click="handleProceed">
                  {{ 'Proceed' }}
                </button>
              </li>
            </ul>
            <p style="color: red; box-shadow: none;">{{ errorMsg }}</p>
          </div>
        </div>
      </div>

      <!-- Permission Sections (shown only after proceed click) -->
      <div v-if="showPermissions" class="permissions-sections-subuser-flow">
        <div v-for="(company, index) in lastSelectedCompanies" :key="company.id"
          class="permission-card-subuser-flow card">
          <div class="permission-header-subuser-flow">
            <div class="SetPermissionHeadingUser" @click="toggleSection(index)">
              <h6>Set Permissions - {{ company.name }}</h6>
            </div>
            <div class="SetPermissionHeaderRightPortion">
              <div class="MakeAdminSetPermissionportion">
                <input type="checkbox" @change="handleAdminBtn(company.name)"
                  v-model="companyPermissions[company.name].isAdmin" /> <span class="">Make
                  Admin</span>
              </div>
              <div class="SetPermissionDottedFlowPart">
                <span></span>
              </div>
              <div>
                <span class="toggle-icon-subuser-flow" @click="toggleSection(index)">
                  <i :class="expandedSections[index] ? 'fa fa-chevron-down' : 'fa fa-chevron-right'"></i>
                </span>
              </div>
            </div>
          </div>

          <div class="permission-content-subuser-flow" v-show="expandedSections[index]">
            <!-- Permission groups (same as before) -->
            <div class="permission-group-subuser-flow">
              <ul class="Permission-group-part-subuser-flow">
                <li>
                  <div class="Permissionheadingalloverlipart">
                    <h6>Ledger and Item</h6>
                  </div>
                  <div class="subuser-portion-onoffwith-clickable">
                    <div class="onclickablepopupopencontentuser"
                      @click="!companyPermissions[company.name].isAdmin && handlePermission('ledgerGroup', company.name)"
                      :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                      <button>Select Ledger Group</button>
                      <i class="fa fa-chevron-right"></i>
                    </div>
                    <div class="onclickablepopupopencontentuser"
                      @click="!companyPermissions[company.name].isAdmin && handlePermission('stockGroup', company.name)"
                      :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                      <button>Select Stock Group</button>
                      <i class="fa fa-chevron-right"></i>
                    </div>
                    <div class="switch-wrapper-userflow"
                      :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                      <div class="textonoffbuttonuserflow">
                        <p>Create Optional Voucher</p>
                      </div>
                      <div class="switchonlyrightportionforuser">
                        <label class="switch-userflow">
                          <input type="checkbox"
                            v-model="companyPermissions[company.name].selectedReadPermissions.isOptionalVoucher"
                            :disabled="companyPermissions[company.name].isAdmin">
                          <span class="slider-userflow round-userflow"></span>
                        </label>
                      </div>
                    </div>
                    <div class="switch-wrapper-userflow"
                      :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                      <div class="textonoffbuttonuserflow">
                        <p>Create Ledger</p>
                      </div>
                      <div class="switchonlyrightportionforuser">
                        <label class="switch-userflow">
                          <input :disabled="companyPermissions[company.name].isAdmin" type="checkbox"
                            v-model="companyPermissions[company.name].selectedWritePermissions.isLedger">
                          <span class="slider-userflow round-userflow"></span>
                        </label>
                      </div>
                    </div>
                    <div class="switch-wrapper-userflow"
                      :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                      <div class="textonoffbuttonuserflow">
                        <p>Create Item</p>
                      </div>
                      <div class="switchonlyrightportionforuser">
                        <label class="switch-userflow">
                          <input :disabled="companyPermissions[company.name].isAdmin" type="checkbox"
                            v-model="companyPermissions[company.name].selectedWritePermissions.isStockItem">
                          <span class="slider-userflow round-userflow"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="Permissionheadingalloverlipart">
                    <h6>Voucher Permission</h6>
                  </div>
                  <div class="subuser-portion-onoffwith-clickable">
                    <div class="onclickablepopupopencontentuser"
                      @click="!companyPermissions[company.name].isAdmin && handlePermission('read', company.name)"
                      :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                      <button>Read Voucher</button>
                      <i class="fa fa-chevron-right"></i>
                    </div>
                    <div class="onclickablepopupopencontentuser"
                      @click="!companyPermissions[company.name].isAdmin && handlePermission('write', company.name)"
                      :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                      <button>Write Voucher</button>
                      <i class="fa fa-chevron-right"></i>
                    </div>
                    <div class="switch-wrapper-userflow"
                      :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                      <div class="textonoffbuttonuserflow">
                        <p>Amount</p>
                      </div>
                      <div class="switchonlyrightportionforuser">
                        <label class="switch-userflow">
                          <input type="checkbox" v-model="companyPermissions[company.name].hasAmountAccess"
                            :disabled="companyPermissions[company.name].isAdmin">
                          <span class="slider-userflow round-userflow"></span>
                        </label>
                      </div>
                    </div>
                    <div class="switch-wrapper-userflow"
                      :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                      <div class="textonoffbuttonuserflow">
                        <p>Average Purchase Rate</p>
                      </div>
                      <div class="switchonlyrightportionforuser">
                        <label class="switch-userflow">
                          <input type="checkbox" v-model="companyPermissions[company.name].hasAvgPerRateAccess"
                            :disabled="companyPermissions[company.name].isAdmin">
                          <span class="slider-userflow round-userflow"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="Permissionheadingalloverlipart">
                    <h6>Reports Permission</h6>
                  </div>
                  <div class="subuser-portion-onoffwith-clickable">
                    <div class="switch-wrapper-userflow"
                      :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                      <div class="textonoffbuttonuserflow">
                        <p>Balance Sheet</p>
                      </div>
                      <div class="switchonlyrightportionforuser">
                        <label class="switch-userflow">
                          <input type="checkbox" v-model="companyPermissions[company.name].isBalanceSheet"
                            :disabled="companyPermissions[company.name].isAdmin">
                          <span class="slider-userflow round-userflow"></span>
                        </label>
                      </div>
                    </div>
                    <div class="switch-wrapper-userflow"
                      :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                      <div class="textonoffbuttonuserflow">
                        <p>Trial Balance</p>
                      </div>
                      <div class="switchonlyrightportionforuser">
                        <label class="switch-userflow">
                          <input type="checkbox" v-model="companyPermissions[company.name].isTrialBalance"
                            :disabled="companyPermissions[company.name].isAdmin">
                          <span class="slider-userflow round-userflow"></span>
                        </label>
                      </div>
                    </div>
                    <div class="switch-wrapper-userflow"
                      :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                      <div class="textonoffbuttonuserflow">
                        <p>Profit & Loss</p>
                      </div>
                      <div class="switchonlyrightportionforuser">
                        <label class="switch-userflow">
                          <input type="checkbox" v-model="companyPermissions[company.name].isProfitLoss"
                            :disabled="companyPermissions[company.name].isAdmin">
                          <span class="slider-userflow round-userflow"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="Permissionheadingalloverlipart">
                    <h6>Checker & Maker </h6>
                  </div>
                  <div class="subuser-portion-onoffwith-clickable">
                    <div class="switch-wrapper-userflow"
                      :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                      <div class="textonoffbuttonuserflow">
                        <p>Checker</p>
                      </div>
                      <div class="switchonlyrightportionforuser">
                        <label class="switch-userflow">
                          <input type="checkbox" v-model="companyPermissions[company.name].isChecker"
                            :disabled="companyPermissions[company.name].isAdmin">
                          <span class="slider-userflow round-userflow"></span>
                        </label>
                      </div>
                    </div>
                    <div class="switch-wrapper-userflow"
                      :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                      <div class="textonoffbuttonuserflow">
                        <p>Maker</p>
                      </div>
                      <div class="switchonlyrightportionforuser">
                        <label class="switch-userflow">
                          <input type="checkbox" v-model="companyPermissions[company.name].isMaker"
                            :disabled="companyPermissions[company.name].isAdmin">
                          <span class="slider-userflow round-userflow"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="Permissionheadingalloverlipart">
                    <h6>Outstanding</h6>
                  </div>
                  <div class="subuser-portion-onoffwith-clickable">
                    <div class="switch-wrapper-userflow">
                      <div class="textonoffbuttonuserflow"
                        :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                        <p>Payment Reminder</p>
                      </div>
                      <div class="switchonlyrightportionforuser">
                        <label class="switch-userflow">
                          <input type="checkbox"
                            v-model="companyPermissions[company.name].selectedWritePermissions.isPaymentReminder"
                            :disabled="companyPermissions[company.name].isAdmin">
                          <span class="slider-userflow round-userflow"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div v-if="isEwayEinvoice && (isEwayStatus || isEInvoiceStatus)" class="Permissionheadingalloverlipart">
                    <h6>E-way Bill & E-Invoice</h6>
                  </div>
                  <div v-if="isEwayEinvoice && (isEwayStatus || isEInvoiceStatus)" class="subuser-portion-onoffwith-clickable">
                    <div class="switch-wrapper-userflow"
                      :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                      <div class="textonoffbuttonuserflow">
                        <p class="mb-1">Read Access</p>
                        <h6 class="MiniTextReadFullAccess">(View & Share E-Way Bill & E-Invoice Details)</h6>
                      </div>
                      <div class="switchonlyrightportionforuser">
                        <label class="switch-userflow">
                          <input type="checkbox"
                            v-model="companyPermissions[company.name].selectedReadPermissions.isEway"
                            :disabled="companyPermissions[company.name].isAdmin"
                            @change="handleEwayReadAccess(company.name)">
                          <span class="slider-userflow round-userflow"></span>
                        </label>
                      </div>
                      <!-- <span>(View & Share E-way Bill & E-Invoice Details)</span> -->
                    </div>
                    <div class="switch-wrapper-userflow"
                      :title="companyPermissions[company.name].isAdmin && 'Already admin'">
                      <div class="textonoffbuttonuserflow">
                        <p class="mb-1">Full Access</p>
                        <h6 class="MiniTextReadFullAccess">(Generate, View, Share & Cancel E-Way Bill & E-Invoice
                          Details)</h6>
                      </div>
                      <div class="switchonlyrightportionforuser">
                        <label class="switch-userflow">
                          <input type="checkbox"
                            v-model="companyPermissions[company.name].selectedWritePermissions.isEway"
                            :disabled="companyPermissions[company.name].isAdmin"
                            @change="handleEwayFullAccess(company.name)">
                          <span class="slider-userflow round-userflow"></span>
                        </label>
                      </div>
                      <!-- <span>(Generate, View, Share & Cancel E-way Bill & E-Invoice Details)</span> -->
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showError && !isUpdate" class="no-companies-selected-subuser-flow card">
        No companies selected - please select companies and click Proceed again
      </div>
    </div>
    <!-- Read Voucher Popup -->
    <div v-if="showReadVoucherPopup" class="modal-overlay-set-all-permission" @click.self="closePopup">
      <div class="modal-content-set-all-permission">
        <div class="modal-header-set-all-permission">
          <h5>{{ permissionMsg }} Permission</h5>
          <div class="select-all-container-set-all-permission">
            <label class="select-all-label-set-all-permission">
              <input type="checkbox" v-model="allSelectedForRead" @change="toggleAllPermissions"
                class="select-all-checkbox-set-all-permission">
              <span>Select All</span>
            </label>
          </div>
          <div class="CloseBtnMaindivforCrossIcon">
            <button @click="closePopup" class="close-btn-set-all-permission">&times;</button>
          </div>
        </div>
        <div class="modal-body-set-all-permission">
          <div class="permission-list-set-all-permission">
            <div class="permission-items-set-all-permission row">
              <div class="col-lg-6 col-12">
                <div v-for="(key, index) in leftPermissions" :key="index" class="permission-item-set-all-permission">
                  <label class="permission-label-set-all-permission flex items-center gap-2">
                    <input type="checkbox" v-model="currentPermissionsObject[key]" @change="updateSelectAll"
                      class="permission-checkbox-set-all-permission">
                    <span>{{ key.replace(/^is/, '').replace(/([A-Z])/g, ' $1').trim() }}</span>
                  </label>
                </div>
              </div>

              <div class="col-lg-6 col-12">
                <div v-for="(key, index) in rightPermissions" :key="index" class="permission-item-set-all-permission">
                  <label class="permission-label-set-all-permission flex items-center gap-2">
                    <input type="checkbox" v-model="currentPermissionsObject[key]" @change="updateSelectAll"
                      class="permission-checkbox-set-all-permission">
                    <span>{{ key.replace(/^is/, '').replace(/([A-Z])/g, ' $1').trim() }}</span>
                  </label>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div v-if="showLedgerGroup" class="modal-overlay-set-all-permission"
      @click.self="showLedgerGroup = false, searchQueryLedgerGroup = '', errorGroups = false, currentPage = 1">
      <div class="modal-content-set-all-permission">
        <div class="modal-header-set-all-permission">
          <!-- <h5>{{ groupLabel }} </h5> -->
          <h5>Select Ledger Group</h5>
          <div class="select-all-container-set-all-permission">
            <label v-if="!searchQueryLedgerGroup" class="select-all-label-set-all-permission">
              <input type="checkbox" v-model="currentSelectedAllLedgerGroups" @change="toggleGroupAllPermission"
                class="select-all-checkbox-set-all-permission">
              <span>Select All</span>
            </label>
          </div>
          <div class="CloseBtnMaindivforCrossIcon">
            <button @click="showLedgerGroup = false, searchQueryLedgerGroup = '', errorGroups = false, currentPage = 1"
              class="close-btn-set-all-permission">&times;</button>
          </div>
        </div>
        <div class="modal-body-set-all-permission">
          <div class="SearchableInputPortionSelectLedgerStockGroup">
            <!-- Input Field -->
            <input type="text" v-model="searchQueryLedgerGroup" @input="handleSearchInputLedger" placeholder="Search..."
              class="" />

            <!-- Search Icon (Left) -->
            <span class="SearchIconStockLedgerGroupPopup"> <i class="fa fa-search"></i> </span>

            <!-- Clear Icon (Right) -->
            <span v-if="searchQueryLedgerGroup" @click="clearSearchLedgerGroup"
              class="CrossButtonStockLedgerGroupPopup"> × </span>
          </div>
          <div class="permission-list-set-all-permission SelectLedgerGroupModalPopup" @scroll="handleScrollForLedger"
            ref="scrollContainer">
            <div class="permission-items-set-all-permission row">
              <div class="col-lg-12 col-12">
                <div class="permission-item-set-all-permission" v-for="(group, index) in ledgerGroupData" :key="index">
                  <label class="permission-label-set-all-permission flex items-center gap-2">
                    <input type="checkbox" :checked="isGroupSelected(group.guid)"
                      @change="toggleGroupSelection(group)" />
                    <span>{{ cleanGroupName(group.ledgerGroupName) }}</span>
                  </label>
                </div>
              </div>
            </div>
            <div style="text-align: center;" v-if="loadingMore" class="loading-more">
              Loading more groups...
            </div>
          </div>
          <div class="SubmitButtonBottomSiteLedgerStockGroupPopup">
            <p v-if="errorGroups" class="errorMsg" style="text-align: center;"><i class="fa fa-exclamation-circle"></i>
              Please select
              at least one ledger group.</p>
            <button type="button" @click="handleSubmitForLedger">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showStockGroup" class="modal-overlay-set-all-permission"
      @click.self="showStockGroup = false, searchQueryStockGroup = '', errorGroups = false, currentPage = 1">
      <div class="modal-content-set-all-permission">
        <div class="modal-header-set-all-permission">
          <!-- <h5>{{ groupLabel }} </h5> -->
          <h5> Select Stock Group </h5>
          <div class="select-all-container-set-all-permission">
            <label v-if="!searchQueryStockGroup" class="select-all-label-set-all-permission">
              <input type="checkbox" v-model="currentSelectedAllStockGroups" @change="toggleGroupAllPermission"
                class="select-all-checkbox-set-all-permission">
              <span>Select All</span>
            </label>
          </div>
          <div class="CloseBtnMaindivforCrossIcon">
            <button @click="showStockGroup = false, searchQueryStockGroup = '', errorGroups = false, currentPage = 1"
              class="close-btn-set-all-permission">&times;</button>
          </div>
        </div>
        <div class="modal-body-set-all-permission">
          <div class="SearchableInputPortionSelectLedgerStockGroup">
            <!-- Input Field -->
            <input type="text" v-model="searchQueryStockGroup" @input="handleSearchInputStock" placeholder="Search..."
              class="" />

            <!-- Search Icon (Left) -->
            <span class="SearchIconStockLedgerGroupPopup"> <i class="fa fa-search"></i> </span>

            <!-- Clear Icon (Right) -->
            <span v-if="searchQueryStockGroup" @click="clearSearchStockGroup" class="CrossButtonStockLedgerGroupPopup">
              × </span>
          </div>
          <div class="permission-list-set-all-permission SelectStockGroupModalPopup" @scroll="handleScrollForStock"
            ref="scrollContainer">
            <div class="permission-items-set-all-permission row">
              <div class="col-lg-12 col-12">
                <div class="permission-item-set-all-permission" v-for="(group, index) in stockGroupData" :key="index">
                  <label class="permission-label-set-all-permission flex items-center gap-2">
                    <input type="checkbox" :checked="isGroupSelected(group.guid)"
                      @change="toggleGroupSelection(group)" />
                    <span>{{ cleanGroupName(group.stockGroupName) }}</span>
                  </label>
                </div>
              </div>
            </div>
            <div style="text-align: center;" v-if="loadingMore" class="loading-more">
              Loading more groups...
            </div>
          </div>
          <div class="SubmitButtonBottomSiteLedgerStockGroupPopup">
            <p v-if="errorGroups" class="errorMsg" style="text-align: center;"><i class="fa fa-exclamation-circle"></i>
              Please select
              at least one stock group.</p>
            <button type="button" @click="handleSubmitForStock">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12 col-12">
        <div class="form_bottom_button mt-4 mb-4 text-center">
          <button class="form_button black_button" @click="handleMainAction" :disabled="shouldDisableButton"
            :aria-busy="isProcessing" aria-live="polite">
            <span v-if="isProcessing">
              Updating...
            </span>
            <span v-else>
              {{ isUpdate ? "Update Permission" : "Save User" }}
            </span>

          </button>
        </div>
      </div>
    </div>

    <!-- <div class="success_message" v-if="savedUser">
      <p>{{ successMsg }}</p>
    </div> -->
    <div class="success_message" v-if="savedUser">
      <p>{{ successMsg }}</p>
    </div>
  </section>
</template>

<script>
import { watch } from 'vue';
import Common from "@/Common";
import Api from '../Api';
import GoogleAnalytics from "@/GoogleAnalytics";
import { BIconArrowDown, BIconThreeDotsVertical } from 'bootstrap-vue';

export default {
  // name: "add user",
  data() {
    return {
      errorGroups: false,
      isNewSubUser: false,
      isCallCompany: false,
      isProceed: true,
      currentSelectedAllLedgerGroups: true,
      currentSelectedAllStockGroups: true,
      currentCompanyName: "",
      successMsg: "",
      showLedgerGroup: false,
      showStockGroup: false,
      savedUser: false,
      subUserData: [],
      subUserId: "",
      mainUserData: {},
      errorMsg: "",
      groupLabel: "",

      notAllocatedCompanies: [],
      ledgerGroupData: [],
      stockGroupData: [],
      companiesList: [],
      currentGroupType: '',

      new_loading: false,
      userName: '',
      phoneNumber: '',
      companiesAdduser: [
        // 'Asaraf Industries',
        // 'Kartik Enterprise',
        // 'Ansari Tech Private Limited',
        // 'Rohan Advertisement',
        // 'Alok Industries'
      ],
      selectedCompaniesAdduser: [],
      dropdownOpenAdduser: false,
      dropdownOpenAdduser2: false,
      showPermissions: false,
      expandedSections: [],
      lastSelectedCompanies: [],
      showReadVoucherPopup: false,

      companyPermissions: {},

      readPermissionKeys: [
        'isSales', 'isPurchase', 'isCash', 'isBank', 'isReceipt', 'isPayment',
        'isSalesOrder', 'isPurchaseOrder', 'isCreditNote', 'isDebitNote',
        'isReceiptNote', 'isDeliveryNote', 'isJournal', 'isContra', 'isQuotation',
        'isPhysicalStock', 'isStockJournal'
      ],

      writePermissionKeys: [
        'isSales', 'isPurchase', 'isContra', 'isJournal', 'isPayment', 'isReceipt', 'isPurchaseOrder',
        'isSalesOrder', 'isDebitNote', 'isCreditNote', 'isQuotation',
        'isReceiptNote', 'isDeliveryNote'
      ],



      permissionKeys: [],
      // selectedPermissions: [],




      isChecker: true,
      isMaker: true,
      // isAdmin: true,


      isLedger: true,
      isStockItem: true,
      isOptionalVoucher: true,
      isPaymentReminder: true,

      isBalanceSheet: true,
      isTrialBalance: true,
      isProfitLoss: true,

      hasAmountAccess: true,
      hasAvgPerRateAccess: true,

      // stockItemAccessibility: {
      //   hasAmountAccess,
      //   hasAvgPerRateAccess
      // },

      ledgerGroups: [],             // (If not using specific group assignment, keep as empty array)
      stockGroups: [],


      currentPermissionsObject: [],


      allSelectedForRead: true,
      // allSelectedGroups: true,

      showError: false,
      isProcessing: false,
      searchQueryLedgerGroup: "",
      searchQueryStockGroup: "",
      currentPage: 1,
      itemsPerPage: 20, // Adjust as needed
      totalGroups: 0,
      loadingMore: false,
      hasMore: true,
      isEwayStatus: false,
      isEInvoiceStatus: false,
    };
  },

  created() {
    this.initializePermissions();

  },

  computed: {
    isEwayEinvoice() {
      const status = localStorage.getItem("EWAY_EINVOICE_STATUS");
      if(localStorage.getItem("customerStatus") == "Installation Done") return true;

      return JSON.parse(status).includes("EWAY_EINVOICE");
    },
    shouldDisableButton() {
      return this.selectedCompaniesAdduser.length === 0 || this.isProceed || this.isProcessing;
    },
    leftPermissions() {
      return this.permissionKeys.filter((_, index) => index % 2 === 0);
    },
    rightPermissions() {
      return this.permissionKeys.filter((_, index) => index % 2 === 1);
    },

    isUpdate() {
      return Boolean(this.$route.query.no);
    },

    isSingleCompany() {
      return this.companiesAdduser.filter(company => company._parentUserId).length === 1;
    }
  },
  watch: {
    phoneNumber(newVal) {
      if (this.isUpdate) return;
      const validPattern = /^[6-9]\d{9}$/;

      if (validPattern.test(newVal)) {
        this.fetchUserByPhone();
      } else {
        this.userName = "";
        this.errorMsg = '';
        this.companiesAdduser = [];
      }
    },

    userName(newVal) {
      if (this.isUpdate) return;
      if (newVal) {
        // this.isProceed = true;
        this.errorMsg = "";
        if (this.companiesAdduser.length == 0) this.getAllCompany();
      } else {
        if (this.phoneNumber == '') {
          this.errorMsg = "Please Enter name / Phone Number"
        } else {
          this.errorMsg = "Please Enter name";
        }
      }
    },

    lastSelectedCompanies: {
      handler(companies) {
        companies.forEach(company => {
          if (!this.companyPermissions[company.name]) {
            this.$set(this.companyPermissions, company.name, {
              subUserCompanyId: company.id,
              isAdmin: true,
              hasAmountAccess: true,
              hasAvgPerRateAccess: true,
              isBalanceSheet: true,
              isTrialBalance: true,
              isProfitLoss: true,
              isChecker: true,
              isMaker: true,
              // isPaymentReminder: true,

              selectedReadPermissions: {
                isSales: true,
                isPurchase: true,
                isCash: true,
                isBank: true,
                isReceipt: true,
                isPayment: true,
                isOutstandingPayable: true,
                isOutstandingReceivable: true,
                isSalesOrder: true,
                isPurchaseOrder: true,
                isCreditNote: true,
                isDebitNote: true,
                isReceiptNote: true,
                isDeliveryNote: true,
                isJournal: true,
                isContra: true,
                isQuotation: true,
                isLedger: true,
                isStockItem: true,
                isOptionalVoucher: true,
                isPhysicalStock: true,
                isStockJournal: true,
                isEway: this.isEwayEinvoice ? true : false,
                isEInvoice: this.isEwayEinvoice ? true : false,
              },

              selectedWritePermissions: {
                isSales: true,
                isPurchase: true,
                isContra: true,
                isJournal: true,
                isPayment: true,
                isReceipt: true,
                isPurchaseOrder: true,
                isSalesOrder: true,
                isDebitNote: true,
                isCreditNote: true,
                isQuotation: true,
                isLedger: true,
                isStockItem: true,
                isOptionalVoucher: true,
                isPaymentReminder: true,
                isReceiptNote: true,
                isDeliveryNote: true,
                isEway: this.isEwayEinvoice ? true : false,
                isEInvoice: this.isEwayEinvoice ? true : false,
              },

              selectedLedgerGroups: [],
              selectedStockGroups: [],
              isAllGroupsOrLedgers: true,   // (Set to false if selecting specific ledgers)
              isAllStockGroupsOrItems: true,
              allSelectedLedgerGroups: true,
              allSelectedStockGroups: true,
              allSelectedReadPermission: true,
            });
          }
        });
      },
      immediate: true,
      deep: true
    },

  },
  methods: {

    handleScrollForLedger(event) {
      const container = event.target;
      const scrollThreshold = 100; // pixels from bottom

      if (container.scrollHeight - container.scrollTop - container.clientHeight <= scrollThreshold) {
        this.getLedgerGroups();
        this.toggleGroupAllPermission();
      }
    },

    handleScrollForStock(event) {
      const container = event.target;
      const scrollThreshold = 100; // pixels from bottom

      if (container.scrollHeight - container.scrollTop - container.clientHeight <= scrollThreshold) {
        this.getStockGroups();
        this.toggleGroupAllPermission();
      }
    },

    cleanGroupName(name) {
      return name ? name.replace(/#4;/g, "").trim() : '';
    },

    handleSubmitForLedger() {
      if (this.companyPermissions[this.currentCompanyName].selectedLedgerGroups == 0 && !this.companyPermissions[this.currentCompanyName].allSelectedLedgerGroups) {
        this.errorGroups = true;
        setTimeout(() => {
          this.errorGroups = false;
        }, 3000);
      } else {
        this.showLedgerGroup = false;
        this.searchQueryLedgerGroup = "";
        this.currentPage = 1
      }
    },

    handleSubmitForStock() {
      if (this.companyPermissions[this.currentCompanyName].selectedStockGroups == 0 && !this.companyPermissions[this.currentCompanyName].allSelectedStockGroups) {
        this.errorGroups = true;
        setTimeout(() => {
          this.errorGroups = false;
        }, 3000);
      } else {
        this.showStockGroup = false;
        this.searchQueryStockGroup = '';
        this.currentPage = 1
      }
    },

    handleSearchInputLedger() {
      this.currentPage = 1;
      this.hasMore = true;
      // Clear previous timeout
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }

      // Set new timeout (300ms delay)
      this.searchTimeout = setTimeout(() => {
        this.getLedgerGroups(true);
      }, 300);
    },

    handleSearchInputStock() {
      this.currentPage = 1;
      this.hasMore = true;
      // Clear previous timeout
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }

      // Set new timeout (300ms delay)
      this.searchTimeout = setTimeout(() => {
        this.getStockGroups(true);
      }, 300);
    },

    clearSearchLedgerGroup() {
      this.searchQueryLedgerGroup = "";
      this.getLedgerGroups(false);
    },
    clearSearchStockGroup() {
      this.searchQueryStockGroup = "";
      this.getStockGroups(false);
    },
    async handleMainAction() {
      if (this.shouldDisableButton || this.isProcessing) return;

      this.isProcessing = true;
      try {
        const success = this.isUpdate
          ? await this.updateUserPermission()
          : await this.addUser();

        if (success && this.isUpdate) {
          this.$router.push("/allusers");
        }
      } catch (error) {
        console.error("Action failed:", error);
        this.showError("Action failed. Please try again.");
      } finally {
        this.isProcessing = false;
      }
    },

    initializePermissions() {
      this.selectedReadPermissions = this.selectedReadPermissions || {};
      this.selectedWritePermissions = this.selectedWritePermissions || {};
      // Set all read permissions to true
      this.readPermissionKeys.forEach(key => {
        this.$set(this.selectedReadPermissions, key, true);
      });

      // Set all write permissions to true
      this.writePermissionKeys.forEach(key => {
        this.$set(this.selectedWritePermissions, key, true);
      });
    },

    isGroupSelected(guid) {

      return this.currentGroupType == 'ledgerGroup' ? this.companyPermissions[this.currentCompanyName].selectedLedgerGroups.some(g => g.guid === guid) : this.companyPermissions[this.currentCompanyName].selectedStockGroups.some(g => g.guid === guid);
    },

    toggleGroupSelection(group) {

      const currentGroup = this.currentGroupType === 'ledgerGroup'
        ? this.companyPermissions[this.currentCompanyName].selectedLedgerGroups
        : this.companyPermissions[this.currentCompanyName].selectedStockGroups;

      const index = currentGroup.findIndex(g => g.guid === group.guid);

      if (index > -1) {
        // Remove group
        currentGroup.splice(index, 1);
      } else {
        // Add group
        currentGroup.push({
          guid: group.guid,
          isAllLedgers: true,
          ledgers: []
        });
      }
      this.updateSelectAllGroup();
    },


    toggleGroupAllPermission() {
      const dataList = this.currentGroupType === 'ledgerGroup' ? this.ledgerGroupData : this.stockGroupData;
      const currentGroup = this.currentGroupType === 'ledgerGroup' ? this.companyPermissions[this.currentCompanyName].selectedLedgerGroups : this.companyPermissions[this.currentCompanyName].selectedStockGroups;

      this.companyPermissions[this.currentCompanyName].allSelectedLedgerGroups = this.currentSelectedAllLedgerGroups;
      this.companyPermissions[this.currentCompanyName].allSelectedStockGroups = this.currentSelectedAllStockGroups;
      this.companyPermissions[this.currentCompanyName].isAllGroupsOrLedgers = this.currentSelectedAllLedgerGroups;
      this.companyPermissions[this.currentCompanyName].isAllStockGroupsOrItems = this.currentSelectedAllStockGroups;

      const currentGroupPopup = this.currentGroupType === 'ledgerGroup' ? this.companyPermissions[this.currentCompanyName].allSelectedLedgerGroups : this.companyPermissions[this.currentCompanyName].allSelectedStockGroups;
      if (currentGroupPopup) {
        currentGroup.splice(0); // Clear first
        dataList.forEach(group => {
          currentGroup.push({
            guid: group.guid,
            isAllLedgers: true,
            ledgers: []
          });
        });
      } else {
        currentGroup.splice(0);
      }
    },

    updateSelectAllGroup() {
      const dataList = this.currentGroupType === 'ledgerGroup'
        ? this.ledgerGroupData
        : this.stockGroupData;

      const currentCompany = this.companyPermissions[this.currentCompanyName];

      currentCompany.allSelectedLedgerGroups = currentCompany.selectedLedgerGroups.length === this.ledgerGroupData.length;
      currentCompany.allSelectedStockGroups = currentCompany.selectedStockGroups.length === this.stockGroupData.length;

      this.currentSelectedAllLedgerGroups = currentCompany.allSelectedLedgerGroups;
      this.currentSelectedAllStockGroups = currentCompany.allSelectedStockGroups;

      if (this.currentSelectedAllLedgerGroups) {
        currentCompany.isAllGroupsOrLedgers = true;
      } else {
        currentCompany.isAllGroupsOrLedgers = false;
      }

      if (this.currentSelectedAllStockGroups) {
        currentCompany.isAllStockGroupsOrItems = true;
      } else {
        currentCompany.isAllStockGroupsOrItems = false;
      }
    },


    closePopup() {
      this.showReadVoucherPopup = false;
      this.showLedgerGroup = false;
      this.showStockGroup = false;
      // this.allSelected = false;
      // this.allSelectedGroups = false;
      this.currentPermissionsObject = {};
      this.permissionKeys = [];
    },

    async handlePermission(permissionType, companyName) {
      // this.allSelected = false;
      // this.allSelectedGroups = false;

      this.currentCompanyName = companyName;
      const permissionMap = {
        read: {
          popup: 'showReadVoucherPopup',
          msg: 'Read',
          object: 'selectedReadPermissions',
          keys: 'readPermissionKeys'
        },
        write: {
          popup: 'showReadVoucherPopup',
          msg: 'Write',
          object: 'selectedWritePermissions',
          keys: 'writePermissionKeys'
        },
        ledgerGroup: {
          popup: 'showLedgerGroup',
          object: 'selectedLedgerGroups',
          groupLabel: 'Select Ledger Group',
          loadFn: () => this.getLedgerGroups(true)
        },
        stockGroup: {
          popup: 'showStockGroup',
          object: 'selectedStockGroups',
          groupLabel: 'Select Stock Group',
          loadFn: () => this.getStockGroups(true)
        }
      };
      const config = permissionMap[permissionType];

      if (!config) return;

      if (permissionType === 'read' || permissionType === 'write') {
        this[config.popup] = true;
        this.permissionMsg = config.msg;
        // this.currentPermissionsObject = this.companyPermissions[companyName];
        this.currentPermissionsObject = this.companyPermissions[companyName][config.object];
        this.permissionKeys = this[config.keys];
        this.allSelectedForRead = this.companyPermissions[companyName].allSelectedReadPermission;
        this.updateSelectAll();
      } else {
        this[config.popup] = true;
        this.currentGroupType = permissionType; // 'ledgerGroup' or 'stockGroup'
        this.groupLabel = config.groupLabel;
        this.currentSelectedAllLedgerGroups = this.companyPermissions[companyName].allSelectedLedgerGroups;
        this.currentSelectedAllStockGroups = this.companyPermissions[companyName].allSelectedStockGroups;
        this.currentPermissionsObject = this.companyPermissions[companyName][config.object];
        await config.loadFn();

        if (this.currentPermissionsObject.length === 0) {
          // if(this.currentPermissionsObject.length === 0 && !(this.currentGroupType === 'ledgerGroup' ? this.currentSelectedAllLedgerGroups : this.currentSelectedAllStockGroups)) {
          this.companyPermissions[companyName].allSelectedLedgerGroups = true;
          this.companyPermissions[companyName].allSelectedStockGroups = true;
          this.currentSelectedAllLedgerGroups = true;
          this.currentSelectedAllStockGroups = true;
          this.toggleGroupAllPermission();
        }
        // this.updateSelectAllGroup();
      }
    },

    limitPhoneLength(event) {
      let input = event.target.value;
      let digits = input.replace(/\D/g, ''); // Keep only digits

      // If the first digit is invalid, clear it
      if (digits.length === 1 && !/^[6-9]$/.test(digits[0])) {
        digits = '';
      }

      // Limit to 10 digits max
      if (digits.length > 10) {
        digits = digits.slice(0, 10);
      }

      this.phoneNumber = digits;
    },

    toggleAllPermissions() {
      for (const key of this.permissionKeys) {
        this.$set(this.currentPermissionsObject, key, this.allSelectedForRead);
      }
      this.companyPermissions[this.currentCompanyName].allSelectedReadPermission = this.allSelectedForRead;
    },

    updateSelectAll() {
      const currentCompany = this.companyPermissions[this.currentCompanyName];

      currentCompany.allSelectedReadPermission = this.permissionKeys.every(key => this.currentPermissionsObject[key]);
      this.allSelectedForRead = this.permissionKeys.every(key => this.currentPermissionsObject[key]);
    },

    savePermissions() {
      // console.log('Selected permissions:', this.selectedPermissions);
      this.showReadVoucherPopup = false;
    },
    closePopup() {
      this.showReadVoucherPopup = false;
    },
    toggleDropdownAdduser() {
      this.dropdownOpenAdduser = !this.dropdownOpenAdduser;
    },
    toggleDropdownAdduser2() {
      this.isCallCompany = true;
      this.getAllCompany();
      // this.bindPermissionForAllCompany();
      this.dropdownOpenAdduser2 = !this.dropdownOpenAdduser2;
    },
    handleClickOutside(event) {
      if (!this.$el.querySelector('.dropdown-wrapper-Add-User-Company').contains(event.target)) {
        this.dropdownOpenAdduser = false;
        this.dropdownOpenAdduser2 = false;
        this.isCallCompany = false;
      } else if (this.showReadVoucherPopup && !event.target.closest('.modal-content')) {
        this.closePopup();
      }
    },
    handleProceed() {
      this.isProceed = false;
      if (this.selectedCompaniesAdduser.length == 0) {
        this.showError = true;
        this.isProceed = true;
        // return;
      } else if (this.userName == "") {
        this.errorMsg = "Please Enter name";
        this.isProceed = true;
        return;
      } else {
        this.showError = false;
      }
      const currentCompanies = [...this.selectedCompaniesAdduser];
      const previouslySelected = [...this.lastSelectedCompanies];

      const isSameSelection =
        currentCompanies.length === previouslySelected.length &&
        currentCompanies.every(company => previouslySelected.includes(company));

      if (!this.showPermissions) {
        // First click - show permissions
        this.lastSelectedCompanies = [...this.selectedCompaniesAdduser];
        this.showPermissions = true;
        this.expandedSections = this.lastSelectedCompanies.map((_, index) => index === 0);
      } else if (!isSameSelection) {
        // If selection changed, update and re-render permission blocks
        this.lastSelectedCompanies = [...this.selectedCompaniesAdduser];
        this.expandedSections = this.lastSelectedCompanies.map((_, index) => index === 0);
      } else {
        // 🛠 Only hide permissions if current selection is empty
        if (currentCompanies.length === 0) {
          this.showPermissions = false;
          this.lastSelectedCompanies = [];
        }
      }
    },

    toggleSection(index) {
      this.$set(this.expandedSections, index, !this.expandedSections[index]);
    },


    handleAdminBtn(company_name) {
      const currentPermissions = this.companyPermissions[company_name] || {};
      if (this.companyPermissions[company_name].isAdmin) {
        this.$set(this.companyPermissions, company_name, {
          isAdmin: true,
          // isOptionalVoucher: true,
          // isStockItem: true,
          // isLedger: true,
          ...currentPermissions,
          hasAmountAccess: true,
          hasAvgPerRateAccess: true,
          isBalanceSheet: true,
          isTrialBalance: true,
          isProfitLoss: true,
          isChecker: true,
          isMaker: true,
          selectedReadPermissions: {
            ...currentPermissions.selectedReadPermissions,
            isOptionalVoucher: true,
            // isPaymentReminder: true,
            isStockItem: true,
            isLedger: true,
          },
          selectedWritePermissions: {
            ...currentPermissions.selectedWritePermissions,
            // isOptionalVoucher: true,
            isPaymentReminder: true,
            isStockItem: true,
            isLedger: true,
          },
        })
      }
    },

    // enableAdminPermission(targetId) {
    //   let foundCompany = Object.values(this.companyPermissions).find(
    //     company => company.subUserCompanyId === targetId
    //   );
    // },

    async fetchUserByPhone(userFlag) {
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        ...(userFlag !== 'admin'
          ? {
            mobile: this.phoneNumber,
            countryCode: "+91",
          }
          : {}),
      }

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      try {
        const response = await Api.getcustomerDetailsGo(data, headers);
        if (response.data.status !== 200) {
          console.error("Error:-  " + response.data.message);
          if (response.data.status == 0) {
            this.errorMsg = "Please Enter name";
            this.isNewSubUser = true;
          }
          return;
        }

        if (userFlag == 'admin') {
          this.mainUserData = response.data.data.licenseDetails;
          this.subUserData = response.data.data.subUsers;

          // if(this.mainUserData.noOfUserPurchased == this.mainUserData.noOfUserUsed && this.$router.query.no == '') {
          //   this.$router.push("/allusers");
          // }
        } else {
          this.userName = response.data.data.name;
          this.subUserId = response.data.data.customerId;
          if (response.data.data.customerId == localStorage.getItem('customerId')) {
            this.errorMsg = 'You cannot add same number as you logged in';
            this.companiesAdduser = [];
          } else {
            const subUserExist = this.checkUser(response.data.data.customerId);
            if (subUserExist) {
              this.errorMsg = "This user is already exist";
              this.companiesAdduser = [];
              return;
            } else {
              this.errorMsg = "";
            }
            if (this.companiesAdduser.length == 0) this.getAllCompany();
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    checkUser(customerId) {
      return this.subUserData.includes(customerId);
    },

    async getAllCompany() {
      let data = {};
      if (this.isUpdate && !this.isCallCompany) {
        data = {
          parentUserId: localStorage.getItem("customerId"),
          requestFrom: "WEB",
          _userId: this.$route.query.userId,
        }
      } else {
        data = {
          _userId: localStorage.getItem("customerId"),
          requestFrom: "WEB",
        };
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      try {
        const response = await Api.getCompany(data, headers);
        if (response.data.status !== 200) {
          console.error("Error:-  " + response.data.message);
          return;
        }
        if (this.isUpdate) {
          if (this.isCallCompany) {
            const arrayOfSubCompanies = this.companiesAdduser.map(company => company.companyData.id);
            // this.notAllocatedCompanies = response.data.data.list.filter(company => !arrayOfSubCompanies.includes(company.companyData.id));
            this.notAllocatedCompanies = response.data.data.list.filter(company => {
              const idNotInSubCompanies = !arrayOfSubCompanies.includes(company.companyData.id);
              return idNotInSubCompanies;
            });

            this.notAllocatedCompanies = this.notAllocatedCompanies.filter(company => !company._parentUserId);
            this.companiesAdduser.push(...this.notAllocatedCompanies);

          } else {
            this.companiesAdduser = response.data.data.list.filter(company => company._parentUserId);
          }
        } else {
          this.companiesAdduser = response.data.data.list.filter(company => company._parentUserId == "");
        }
      } catch (error) {
        this.companiesAdduser = []
        console.log(error);
      }
    },

    // async getLedgerGroups() {
    //   const data = {
    //     requestFrom: "WEB",
    //     masterReservedName: [],
    //     startLimit: 0,
    //     endLimit: 1000,
    //     _userId: localStorage.getItem("customerId"),
    //     company_id: this.companyPermissions[this.currentCompanyName].subUserCompanyId,
    //     // company_id: localStorage.getItem("companyId"),
    //     searchTerm: this.searchQueryLedgerGroup || ""
    //   };
    //   const headers = {
    //     token: localStorage.getItem("webAuthToken"),
    //   };

    //   try {
    //     const response = await Api.ledgerGroupsGo(data, headers);
    //     if (response.data.status === 200) {
    //       this.ledgerGroupData = response.data.data.list;
    //     }
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },


    async getLedgerGroups(initialLoad = false) {
      if (this.loadingMore || (!initialLoad && !this.hasMore)) return;

      this.loadingMore = true;

      const data = {
        requestFrom: "WEB",
        masterReservedName: [],
        startLimit: (this.currentPage - 1) * this.itemsPerPage,
        endLimit: this.itemsPerPage,
        _userId: localStorage.getItem("customerId"),
        company_id: this.companyPermissions[this.currentCompanyName].subUserCompanyId,
        searchTerm: this.searchQueryLedgerGroup || ""
      };

      const headers = {
        token: localStorage.getItem("webAuthToken"),
      };

      try {
        const response = await Api.ledgerGroupsGo(data, headers);
        if (response.data.status === 200) {
          const newGroups = response.data.data.list;

          if (initialLoad) {
            this.ledgerGroupData = newGroups;
            this.totalGroups = response.data.data.totalCount || newGroups.length;
          } else {
            this.ledgerGroupData = [...this.ledgerGroupData, ...newGroups];
          }

          // Check if we've loaded all available groups
          this.hasMore = this.ledgerGroupData.length < response.data.data.totalCount;
          this.currentPage++;
        }
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingMore = false;
      }
    },

    async getStockGroups(initialLoad = false) {
      if (this.loadingMore || (!initialLoad && !this.hasMore)) return;

      this.loadingMore = true;

      const data = {
        requestFrom: "WEB",
        masterReservedName: [],
        startLimit: (this.currentPage - 1) * this.itemsPerPage,
        endLimit: this.itemsPerPage,
        _userId: localStorage.getItem("customerId"),
        company_id: this.companyPermissions[this.currentCompanyName].subUserCompanyId,
        searchTerm: this.searchQueryStockGroup || ""
      };
      const headers = {
        token: localStorage.getItem("webAuthToken"),
      };

      try {
        const response = await Api.getStockGroups(data, headers);
        if (response.data.status === 200) {
          const newGroups = response.data.data.list;

          if (initialLoad) {
            this.stockGroupData = newGroups;
            this.totalGroups = response.data.data.totalCount || newGroups.length;
          } else {
            this.stockGroupData = [...this.stockGroupData, ...newGroups];
          }

          // Check if we've loaded all available groups
          this.hasMore = this.stockGroupData.length < response.data.data.totalCount;
          this.currentPage++;
        }
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingMore = false;
      }
    },


    async addUser() {

      if (this.isNewSubUser) {
        await this.addNewSubUser();
      }

      const companyIds = this.selectedCompaniesAdduser.map(company => company.id);

      const data = {
        _userId: localStorage.getItem("customerId"),
        companyIds: companyIds,
        mobile: this.phoneNumber,
        countryCode: "+91",
        requestFrom: "WEB"
      }

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      try {
        const response = await Api.addUser(data, headers);

        if (response.data.status !== 200) {
          this.savedUser = true;
          this.successMsg = response.data.message;
          setTimeout(() => {
            this.savedUser = false;
          }, 2000);
          console.error("Error:-  " + response.data.message);
          return;
        }

        this.addPermissions();

      } catch (error) {
        console.log(error);
      }

    },

    async addNewSubUser() {
      const data = {
        requestFrom: "WEB",
        name: this.userName,
        _userId: localStorage.getItem("customerId"),
        mobile: this.phoneNumber,
        countryCode: "+91",
        deviceName: "",
        deviceId: "",
        deviceToken: "",
        deviceType: "Web",
        appVersion: "",
        buildNumber: "",
        osVersion: ""
      };

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      try {
        const response = await Api.addCustomerForSubUser(data, headers);

        if (response.data.status !== 200) {
          this.successMsg = response.data.message;
          this.savedUser = true;
          setTimeout(() => {
            this.savedUser = false;
          }, 2000);
          console.error("Error:-  " + response.data.message);
          return;
        } else {
          this.subUserId = response.data.data.id;
        }
      } catch (error) {
        console.log(error);
      }

    },

    handleEwayReadAccess(companyName) {
      const company = this.companyPermissions[companyName];

      if (company.selectedReadPermissions.isEway) {
        company.selectedReadPermissions.isEInvoice = true;
      } else {
        if (company.selectedWritePermissions.isEway) {
          company.selectedWritePermissions.isEway = false;
          company.selectedWritePermissions.isEInvoice = false;
        }
        company.selectedReadPermissions.isEInvoice = false;
      }
    },

    handleEwayFullAccess(companyName) {
      const company = this.companyPermissions[companyName];

      if (company.selectedWritePermissions.isEway) {
        company.selectedReadPermissions.isEway = true;
        company.selectedReadPermissions.isEInvoice = true;
        company.selectedWritePermissions.isEInvoice = true;
      } else {
        company.selectedReadPermissions.isEway = false;
        company.selectedReadPermissions.isEInvoice = false;
        company.selectedWritePermissions.isEInvoice = false;
      }
    },



    async addPermissions(specificCompanyKey = null) {
      const headers = {
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      // Prepare all requests first
      const requests = Object.entries(
        specificCompanyKey
          ? { [specificCompanyKey]: this.companyPermissions[specificCompanyKey] }
          : this.companyPermissions
      ).map(([key, company]) => {


        const payload = {
          company_id: company.subUserCompanyId,
          _userId: !specificCompanyKey ? this.subUserId : this.$route.query.userId,
          parentUserId: localStorage.getItem("customerId"),
          isChecker: company.isChecker,
          isMaker: company.isMaker,
          isAdmin: company.isAdmin,
          isRead: company.selectedReadPermissions,
          isWrite: company.selectedWritePermissions,
          reports: {
            isBalanceSheet: company.isBalanceSheet,
            isTrialBalance: company.isTrialBalance,
            isProfitLoss: company.isProfitLoss
          },
          stockItemAccessibility: {
            hasAmountAccess: company.hasAmountAccess,
            hasAvgPerRateAccess: company.hasAvgPerRateAccess
          },
          ledgerGroups: company.isAllGroupsOrLedgers ? [] : company.selectedLedgerGroups,
          stockGroups: company.isAllStockGroupsOrItems ? [] : company.selectedStockGroups,
          isAllGroupsOrLedgers: company.isAllGroupsOrLedgers,
          isAllStockGroupsOrItems: company.isAllStockGroupsOrItems,
          requestFrom: "WEB"
        };

        return Api.addPermissions(payload, headers);
      });

      try {
        // Execute all requests in parallel
        const responses = await Promise.all(requests);

        // Check all responses
        const allSuccess = responses.every(response => response.data.status === 200);

        if (allSuccess) {
          if (!specificCompanyKey) {
            this.$router.push("/allusers");
          }
          return true;
        } else {
          // Handle partial failures
          const errorMessages = responses
            .filter(r => r.data.status !== 200)
            .map(r => r.data.message)
            .join(", ");

          console.error("Some requests failed:", errorMessages);
          this.savedUser = true;
          this.successMsg = `Some permissions failed to save: ${errorMessages}`;
          setTimeout(() => this.savedUser = false, 2000);
          return false;
        }
      } catch (error) {
        console.error("API Error:", error);
        this.savedUser = true;
        this.successMsg = "Failed to save permissions";
        setTimeout(() => this.savedUser = false, 2000);
        return false;
      }
    },


    async updateUserPermission() {
      this.isProcessing = true;
      const headers = {
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      // Prepare all requests first
      const requests = Object.entries(this.companyPermissions).map(([key, company]) => {
        // Clean up permissions
        // const cleanReadPermissions = { ...company.selectedReadPermissions };
        // delete cleanReadPermissions.isStockItem;
        // delete cleanReadPermissions.isLedger;
        // delete cleanReadPermissions.isCreateLedger;
        // // delete cleanReadPermissions.isOptionalVoucher;
        // // delete cleanReadPermissions.isEway;
        // // delete cleanReadPermissions.isEInvoice;

        // const cleanWritePermissions = { ...company.selectedWritePermissions };
        // // delete cleanWritePermissions.isEway;
        // // delete cleanWritePermissions.isEInvoice;
        // // delete cleanWritePermissions.isPhysicalStock;
        // // delete cleanWritePermissions.isStockJournal;
        // // delete cleanWritePermissions.isOptionalVoucher;

        // // delete cleanWritePermissions.isStockItem;
        // // delete cleanWritePermissions.isLedger;
        // delete cleanWritePermissions.isOptionalVoucher;
        // // delete cleanWritePermissions.isPaymentReminder;
        // delete cleanWritePermissions.isCreateLedger;
        // delete cleanWritePermissions.isCreateItem;
        // delete cleanWritePermissions.isEway;
        // delete cleanWritePermissions.isEInvoice;

        // delete cleanWritePermissions.isStockJournal;
        // delete cleanWritePermissions.isPhysicalStock;

        const payload = company.isAdmin
          ? {
            company_id: company.subUserCompanyId,
            _userId: localStorage.getItem("customerId"),
            id: company.permissionId,
            isChecker: true,
            isMaker: true,
            isAdmin: true,
            requestFrom: "WEB"
          }
          : {
            company_id: company.subUserCompanyId,
            _userId: localStorage.getItem("customerId"),
            mainUserId: localStorage.getItem("customerId"),
            mainCustomerId: localStorage.getItem("customerId"),
            id: company.permissionId,
            isChecker: company.isChecker,
            isMaker: company.isMaker,
            isAdmin: company.isAdmin,
            isRead: company.selectedReadPermissions,
            isWrite: company.selectedWritePermissions,
            reports: {
              isBalanceSheet: company.isBalanceSheet,
              isTrialBalance: company.isTrialBalance,
              isProfitLoss: company.isProfitLoss
            },
            stockItemAccessibility: {
              hasAmountAccess: company.hasAmountAccess,
              hasAvgPerRateAccess: company.hasAvgPerRateAccess
            },
            ledgerGroups: company.isAllGroupsOrLedgers ? [] : company.selectedLedgerGroups,
            stockGroups: company.isAllStockGroupsOrItems ? [] : company.selectedStockGroups,
            isAllGroupsOrLedgers: company.isAllGroupsOrLedgers,
            isAllStockGroupsOrItems: company.isAllStockGroupsOrItems,
            requestFrom: "WEB"
          };

        return Api.updateUserPermission(payload, headers);
      });

      try {
        const responses = await Promise.all(requests);
        const allSuccess = responses.every(r => r.data.status === 200);

        if (!allSuccess) {
          const errors = responses.filter(r => r.data.status !== 200);
          throw new Error(errors.map(e => e.data.message).join(", "));
        }

        return true; // Indicate success
      } catch (error) {
        console.error("Update error:", error);
        this.showError(error.message || "Failed to update permissions");
        return false; // Indicate failure
      }
    },

    async removePermissions(company) {
      const payload = {
        parentUserId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        _userId: company._userId,
        company_id: company.companyData.id,
        // company_id: localStorage.getItem("companyId"),
      }

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      try {
        const response = await Api.removePermissions(payload, headers);

        if (response.data.status == 200) {
          this.companiesAdduser = this.companiesAdduser.filter(item => item.companyData.id !== company.companyData.id);
          this.lastSelectedCompanies = this.lastSelectedCompanies.filter(item => item.id !== company.companyData.id);
          this.selectedCompaniesAdduser = this.selectedCompaniesAdduser.filter(item => item.id !== company.companyData.id);

          const updatedPermissions = { ...this.companyPermissions };
          delete updatedPermissions[company.companyData.companyName];
          this.companyPermissions = updatedPermissions;
          // console.error("Error: " + response.data.message);
          this.getAllCompany();

        }

      } catch (error) {
        console.error(error);
      }

    },


    async bindPermissionForAllCompany() {
      this.companiesAdduser.map((company) => {
        if (Boolean(company._parentUserId)) {
          this.lastSelectedCompanies.push({
            id: company.companyData.id,
            name: company.companyData.companyName
          })
          this.selectedCompaniesAdduser.push({
            id: company.companyData.id,
            name: company.companyData.companyName
          })
          this.getPermissionForUser(company.companyData.id);
        }
      })
    },


    async getPermissionForUser(allocatedCompanyId) {
      try {
        const customerId = localStorage.getItem("customerId");
        const authToken = localStorage.getItem("webAuthToken");

        if (!customerId || !authToken) {
          console.error("Missing customerId or authToken");
          return false;
        }

        const data = {
          company_id: allocatedCompanyId,
          mainUserId: customerId,
          requestFrom: "WEB",
          subUserId: this.$route.query.userId,
          _userId: customerId,
        };

        const headers = {
          "Content-Type": "application/json",
          token: authToken,
        };

        const response = await Api.getPermissions(data, headers);

        // Check response.data exists and status is 200
        if (!response || !response.data || response.data.status !== 200) {
          const errorMessage = response && response.data ? response.data.message : "Invalid API response";
          console.error("Error:", errorMessage);
          return false;
        }

        const foundCompany = Object.values(this.companyPermissions).find(
          (company) => company.subUserCompanyId === allocatedCompanyId
        );
        Object.assign(foundCompany, {
          permissionId: response.data.data._id,
        })
        if (foundCompany) {
          if (response.data.data.isAdmin) {
            // console.log("only admin");
            // this.enableAdminPermission(response.data.data._companyId);
            return;
          }
          const relevantKeys = this.readPermissionKeys.filter(key => key in response.data.data.isRead);
          foundCompany.allSelectedReadPermission = relevantKeys.every(key => response.data.data.isRead[key] === true);

          if (response.data.data.isRead.isEway) {
            foundCompany.selectedReadPermissions.isEInvoice = true;
          } else {
            foundCompany.selectedReadPermissions.isEInvoice = false;
          }

          if (response.data.data.isWrite.isEway) {
            foundCompany.selectedReadPermissions.isEway = true;
            foundCompany.selectedReadPermissions.isEInvoice = true;
            foundCompany.selectedWritePermissions.isEInvoice = true;
          } else {
            foundCompany.selectedReadPermissions.isEway = false;
            foundCompany.selectedReadPermissions.isEInvoice = false;
            foundCompany.selectedWritePermissions.isEInvoice = false;
          }


          // Update properties reactively (Vue.js)
          Object.assign(foundCompany, {
            subUserCompanyId: response.data.data._companyId,
            isAdmin: response.data.data.isAdmin,
            // isOptionalVoucher: response.data.data.isRead.isOptionalVoucher,
            // isLedger: response.data.data.isWrite.isLedger,
            // isStockItem: response.data.data.isWrite.isStockItem,
            hasAmountAccess: response.data.data.stockItemAccessibility.hasAmountAccess,
            hasAvgPerRateAccess: response.data.data.stockItemAccessibility.hasAvgPerRateAccess,
            isBalanceSheet: response.data.data.reports.isBalanceSheet,
            isTrialBalance: response.data.data.reports.isTrialBalance,
            isProfitLoss: response.data.data.reports.isProfitLoss,
            isChecker: response.data.data.isChecker,
            isMaker: response.data.data.isMaker,
            // isPaymentReminder: response.data.data.isWrite.isPaymentReminder,
            selectedLedgerGroups: response.data.data.isAllGroupsOrLedgers ? [] : [...response.data.data.ledgerGroups],
            selectedStockGroups: response.data.data.isAllStockGroupsOrItems ? [] : [...response.data.data.stockGroups],
            isAllGroupsOrLedgers: response.data.data.isAllGroupsOrLedgers,
            isAllStockGroupsOrItems: response.data.data.isAllStockGroupsOrItems,
            allSelectedLedgerGroups: !!response.data.data.isAllGroupsOrLedgers,
            allSelectedStockGroups: !!response.data.data.isAllStockGroupsOrItems,
            permissionId: response.data.data._id,
          });

          // Manually set nested objects for Vue reactivity
          if (response.data.data.isRead) {
            this.$set(foundCompany, "selectedReadPermissions", { ...response.data.data.isRead });
          }
          if (response.data.data.isWrite) {
            this.$set(foundCompany, "selectedWritePermissions", { ...response.data.data.isWrite });
          }
        }

        return true; // Success
      } catch (error) {
        console.error("API Error from getPermissionForUser:", error);
        return false;
      }
    },

    async addUnallocatedCompany(selectedCompanyObj) {
      this.lastSelectedCompanies = [...this.lastSelectedCompanies, selectedCompanyObj];
      this.selectedCompaniesAdduser = [...this.selectedCompaniesAdduser, selectedCompanyObj];

      await this.$nextTick();

      await this.addPermissions(selectedCompanyObj.name);

      this.isCallCompany = false;
      await this.getAllCompany();
      this.isCallCompany = true;
      await this.getAllCompany();
      await this.getPermissionForUser(selectedCompanyObj.id);
    },

    InvoiceConfigurations() {
      const data = {
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getInvoiceConfigurationsGo(data, headers)
        .then((response) => {
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseData == "200") {
            const CommonResponse = response.data.data.vouchers;
            this.isEwayStatus = CommonResponse.isEwayStatus;
            this.isEInvoiceStatus = CommonResponse.isEInvoiceStatus;
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err);
          this.loading = false;
        });
    }
  },
  async mounted() {
    this.phoneNumber = this.$route.query.no;
    this.userName = this.$route.query.name;
    if (this.userName) {
      await this.getAllCompany();
      this.isCallCompany = true;
      await this.getAllCompany();
      this.isCallCompany = false;
      await this.bindPermissionForAllCompany();
      this.handleProceed();
    }
    this.fetchUserByPhone('admin');
    // this.getAllCompany();
    document.addEventListener('click', this.handleClickOutside);
    GoogleAnalytics.addUser();
    this.InvoiceConfigurations();
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>