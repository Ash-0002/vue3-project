/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section>
    <!-- loader add  -->
    <div v-if="new_loading" class="loader-wrapper">
      <div class="loading_css">
        <img
          src="assets/images/1.0/brand/Loader-GIF-Final.gif"
          class="img-fluid loader_css"
          height="40"
          width="40"
        />
      </div>
    </div>
    <!-- end loader -->
    <!--start first card box-->
    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-3 col-lg-12 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0">
            <div class="company_balance sales_cb new_title_sales_cb">
              <p>
                Total Receivables: <br /><strong
                  ><span class="font_sans">{{ symbol }}</span>
                  {{ this.grandTotal | formatNumberParties }}</strong
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-12 col-12">
          <ul class="new_set_dropdown_with_gross">
            <li class="marginright25">
              <p class="heading_dropdown_gross-all">Due Filter</p>
              <ul class="sortby_filter only_filter_icon">
                <li
                  v-for="(filter, key) in filter_array"
                  @click="activatedue(filter)"
                  :class="{ active: getFiltersDatahidden == `${filter}` }"
                  v-if="key < '3'"
                >
                  {{ filter }}
                </li>

                <li @click="showdue" class="">
                  <p class="more_filter_text filter_relative">
                    More <i class="fa fa-chevron-down"></i>
                    <span v-if="dotshowdue" class="filter_dot"></span>
                  </p>
                </li>

                <div
                  v-if="showOutside"
                  v-click-outside="closeEventdue"
                  class="without_inline_filter"
                >
                  <ul class="dropdown_li_active">
                    <li
                      v-for="(filter, key) in filter_array"
                      @click="activatedue(filter)"
                      v-click-outside="closeEventdue"
                      :class="{ active: active_due == `${filter}` }"
                      v-if="key >= '3'"
                    >
                      {{ filter }}
                    </li>
                  </ul>
                </div>
              </ul>
            </li>
            <li class="marginright25">
              <p class="heading_dropdown_gross-all">Sort By</p>
              <div class="new_top_table_dropdown">
                <select
                  @change="groupSelect($event)"
                  name=""
                  id=""
                  class="form-select salesFilter sales_receivables_dropdown commondropdownall"
                  v-model="getLedgerGroupsData"
                >
                  <!-- <option value="" disabled>Select</option> -->
                  <option
                    v-for="group in getLedgerGroups"
                    :value="group.ledgerGroupName"
                  >
                    {{ group.ledgerGroupName }}
                  </option>
                </select>
              </div>
            </li>
            <!-- <li class="marginright25">
                                  <p class="heading_dropdown_gross-all">Sort By</p> 
                                  <ul class="sortby_filter only_filter_icon">
                                  <li @click="activate('All Receivables')" :class="{ active : active_el == 'All Receivables' }" v-b-tooltip.hover.top="'All Receivables'">ALL</li>
                                  <li @click="activate('Current Liabilities')" :class="{ active : active_el == 'Current Liabilities' }" v-b-tooltip.hover.top="'Current Liabilities'">CRLB</li>
                                  <li @click="activate('Loans Loans (Liability)')" :class="{ active : active_el == 'Loans Loans (Liability)' }" v-b-tooltip.hover.top="'Loans (Liability)'">LNS</li>
                                  <li @click="activate('Provisions')" :class="{ active : active_el == 'Provisions' }" v-b-tooltip.hover.top="'Provisions'">PVS</li>
                                  <li @click="show" class=""><i class="fa fa-filter filter_relative" aria-hidden="true">
                                      <span v-if="dotshow" class="filter_dot"></span>
                                  </i></li>
                                  <div v-if="showInside" v-click-outside="closeEvent" class="without_inline_filter">
                                              <ul class="dropdown_li_active">
                                                  <li @click="activate('Sundry Creditors')" v-click-outside="closeEvent" :class="{ active : active_el == 'Sundry Creditors' }">Sundry Creditors</li>
                                                  <li @click="activate('Sundry Debtors')" v-click-outside="closeEvent" :class="{ active : active_el == 'Sundry Debtors' }">Sundry Debtors</li>
                                                  <li @click="activate('Unsecured Loans')" v-click-outside="closeEvent" :class="{ active : active_el == 'Unsecured Loans' }">Unsecured Loans</li>
                                              </ul>              
                                        </div>
                                  </ul>
                              </li> -->
            <li class="">
              <p class="heading_dropdown_gross-all">Date Filter</p>
              <ul class="sortby_filter">
                <li
                  @click="activatedate('oned')"
                  :class="{ active: active_date == 'oned' }"
                >
                  1D
                </li>
                <!-- <li
                    @click="activatedate('onew')"
                    :class="{ active: active_date == 'onew' }"
                  >
                    1W
                  </li> -->
                <li
                  @click="activatedate('onem')"
                  :class="{ active: active_date == 'onem' }"
                >
                  1M
                </li>
                <!-- <li
                    @click="activatedate('threem')"
                    :class="{ active: active_date == 'threem' }"
                  >
                    3M
                  </li> -->
                <li
                  @click="activatedate('oney')"
                  :class="{ active: active_date == 'oney' }"
                >
                  1Y
                </li>
                <!-- <li
                    @click="activatedate('twoy')"
                    :class="{ active: active_date == 'twoy' }"
                  >
                    2Y
                  </li> -->
                <li
                  @click="activatedate('max')"
                  :class="{ active: active_date == 'max' }"
                >
                  Max
                </li>
                <!-- <li><i class="fa fa-filter" aria-hidden="true"></i></li> -->
                <li class="new_date_filter_sortby">
                  <date-range-picker
                    ref="picker"
                    :auto-submit="true"
                    :locale-data="{
                      firstDay: 1,
                      format: 'dS mmmm yyyy',
                      customRangeLabel: 'Custom Range',
                      separator: ' - ',
                    }"
                    v-model="dateRange"
                    :ranges="defaultRanges"
                    :startDate="startDate"
                    :endDate="endDate"
                    @update="update()"
                  >
                    <template v-slot:input="picker" style="min-width: 350px">
                    </template>
                  </date-range-picker>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--end first card box-->
    <!-- <div class="main_card">
              <div class="main_heading_new_without_box">
              <div class="row">
                  <div class="col-12">
                      <div class="company_name sales_c_name mobile_padding_left_0">
                                   <h3>All Receivables</h3> 
                              </div>
                  </div>
              </div>
          </div>
              <div class="card">
                  <div class="">
                      <div class="row align-items-center">
                          <div class="col-lg-4 col-12">
                              <div class="company_name sales_c_name mobile_padding_left_0">
                                  <div class="company_balance sales_cb">
                                      <p>Total Receivables: <strong><span class="font_sans">{{ symbol }}</span>
                                              {{ this.grandTotal | formatNumberParties }}</strong>
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-8 col-12">
                              <ul class="new_set_dropdown_with_gross">
                                  <li class="rigntmarginli">
                                      <div class="new_top_table_dropdown">
                                          <select @change="filtersSelect($event)" name="" id=""
                                              class="form-select salesFilter sales_receivables_dropdown commondropdownall"
                                              v-model="getFiltersData">
                                              <option v-for="filter in getFiltersForOutstandings"
                                                  :value="filter.value" :data-isRange="filter.isRange">{{ filter.name }}</option>
                                          </select>
                                      </div>
                                  </li>
                                  <li class="marginright25">
                                      <div class="new_top_table_dropdown">
                                          <select @change="groupSelect($event)" name="" id=""
                                              class="form-select salesFilter sales_receivables_dropdown commondropdownall"
                                              v-model="getLedgerGroupsData">
                                              <option v-for="group in getLedgerGroups"
                                                  :value="group.ledgerName">{{ group.ledgerName }}</option>
                                          </select>
                                      </div>
                                  </li>
                                
                                  <li>
                                      <div class="parties_datefilter_vue date_filter_new_flot_none">
                                          <span class="datepicker_left_arrow" @click="left_arrow()"><i
                                                  class="fa fa-chevron-left"></i></span>
                                          <date-range-picker ref="picker" :auto-submit="true"
                                              :locale-data="{ firstDay: 1, format: 'dd/mm/yyyy', customRangeLabel: 'Custom Range', separator: ' - ' }"
                                              v-model="dateRange" :ranges="defaultRanges" :startDate="startDate"
                                              :endDate="endDate" @update="update()">
                                              <template v-slot:input="picker" style="min-width: 350px;">
  
                                              </template>
                                          </date-range-picker>
                                          <span class="datepicker_right_arrow" @click="right_arrow()"><i
                                                  class="fa fa-chevron-right"></i></span>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div> -->
    <div class="main_card receivables_page_main_card">
      <div class="card">
        <div class="row">
          <div class="col-12">
            <div class="custom_table">
              <v-app id="inspire">
                <div class="row">
                  <div class="col-lg-3 col-sm-12 col-12">
                    <ul class="search_input new_left_search_part">
                      <li class="">
                        <div class="table_search">
                          <input
                            class="search_input"
                            v-model="search"
                            v-on:keyup="handleBlur"
                            placeholder="Search"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-9 col-sm-12 col-12">
                    <ul
                      class="dashboard_sales_dropdown new_search_export_button"
                    >
                      <li class="rigntmarginli">
                        <v-select
                          v-model="value"
                          :items="headers"
                          label="Set Columns"
                          multiple
                          return-object
                        >
                          <template v-slot:selection="{ item, index }">
                            <v-chip v-if="index === 0">
                              <span></span>
                            </v-chip>
                          </template>
                        </v-select>
                      </li>
                      <li class="mr-5" v-if="companytype_value != 'SHARED'">
                        <div
                          v-if="isPaid == '' || isPaid == null"
                          v-b-modal.customerstatus-popup
                        >
                          <div class="set_pay_reminder">
                            <p class="setpayment_reminder">
                              <img
                                src="assets/images/1.0/dashboard/reminder.svg"
                                class="img-fluid manage_reminders"
                              />Manage Reminders
                              <img
                                class="pdf_button_crown"
                                src="/assets/images/1.0/brand/crown-color.svg"
                                loading="lazy"
                              />
                            </p>
                          </div>
                        </div>
                        <div v-else>
                          <router-link :to="{ name: 'manage-reminder' }">
                            <div class="set_pay_reminder">
                              <p class="setpayment_reminder">
                                <img
                                  src="assets/images/1.0/dashboard/reminder.svg"
                                  class="img-fluid manage_reminders"
                                />Manage Reminders
                              </p>
                            </div>
                          </router-link>
                        </div>
                      </li>
                      <li class="mr-5" v-else>
                        <a
                          href="javascript:void(0);"
                          @click="$bvModal.show('share_company_show')"
                        >
                          <div class="set_pay_reminder">
                            <p class="setpayment_reminder">
                              <img
                                src="assets/images/1.0/dashboard/reminder.svg"
                                class="img-fluid manage_reminders"
                              />Manage Reminders
                            </p>
                          </div>
                        </a>
                      </li>

                      <li class="mr-5" v-if="companytype_value != 'SHARED'">
                        <div
                          v-if="isPaid == '' || isPaid == null"
                          v-b-modal.customerstatus-popup
                        >
                          <div class="set_pay_reminder">
                            <p class="setpayment_reminder">
                              <img
                                src="assets/images/1.0/dashboard/payment-reminder.svg"
                                class="img-fluid mr-1"
                              />Set Payment Reminders
                              <img
                                class="pdf_button_crown"
                                src="/assets/images/1.0/brand/crown-color.svg"
                                loading="lazy"
                              />
                            </p>
                          </div>
                        </div>
                        <div v-else>
                          <div
                            @click="demo(), (hideshowreminder_div = true)"
                            class="set_pay_reminder"
                          >
                            <p class="setpayment_reminder">
                              <img
                                src="assets/images/1.0/dashboard/payment-reminder.svg"
                                class="img-fluid mr-1"
                              />Set Payment Reminders
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="mr-5" v-else>
                        <div
                          @click="$bvModal.show('share_company_show')"
                          class="set_pay_reminder"
                        >
                          <p class="setpayment_reminder">
                            <img
                              src="assets/images/1.0/dashboard/payment-reminder.svg"
                              class="img-fluid mr-1"
                            />Set Payment Reminders
                          </p>
                        </div>
                      </li>
                      <li
                        v-if="isPaid == '' || isPaid == null"
                        v-b-modal.customerstatus-popup
                      >
                        <button
                          type="button"
                          @click="freeusergeneratePdf()"
                          class="btn download_border_btn"
                        >
                          <img
                            src="/assets/images/1.0/png/pdficon.png"
                            class="img-fluid"
                          />View Pdf<img
                            class="pdf_button_crown"
                            src="/assets/images/1.0/brand/crown-color.svg"
                            loading="lazy"
                          />
                        </button>
                      </li>
                      <li v-else>
                        <button
                          type="button"
                          @click="generatePdf()"
                          class="btn download_border_btn without_crown_button_design"
                        >
                          <img
                            src="/assets/images/1.0/png/pdficon.png"
                            class="img-fluid"
                          />View Pdf
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="show_entries_for_table new_show_entries_for_table receivables_table_set"
                >
                  <v-data-table
                    v-model="selected"
                    :page="page"
                    :pageCount="numberOfPages"
                    :headers="selectedHeaders"
                    :items="outstanding"
                    :options.sync="options"
                    :server-items-length="totaloutstanding"
                    :loading="loading"
                    class="elevation-1 hidecheckbox"
                    must-sort
                    :sort-by.sync="sortBy"
                    :show-select="this.remider_click"
                    @update:sort-by="updateSort('by', $event)"
                    @update:sort-desc="updateSort('desc', $event)"
                    ref="table"
                    disable-pagination
                    :hide-default-footer="true"
                    :footer-props="{
                      'items-per-page-options': [10, 25, 50, 100],
                      'items-per-page-text': 'products per page',
                    }"
                    item-key="name"
                    @input="enterSelect($event)"
                  >
                    <!-- <template v-slot:item.data-table-select="{ on, props }">
          <v-simple-checkbox color="green" v-bind="props" v-on="on"></v-simple-checkbox>
        </template> -->
                    <template
                      v-slot:top="{ pagination, options, updateOptions }"
                    >
                      <v-data-footer
                        :pagination="pagination"
                        :options="options"
                        :items-per-page-options="[10, 25, 50, 100]"
                        @update:options="updateOptions"
                        items-per-page-text="$vuetify.dataTable.itemsPerPageText"
                      />
                    </template>

                    <template v-slot:item.name="{ item }">
                      <td>
                        <div v-if="isPaid == '' || isPaid == null">
                          <b-button
                            class="vch_num_all_btn"
                            v-b-modal.customerstatus-popup
                            >{{ item.name }}</b-button
                          >
                        </div>
                        <div v-else>
                          <router-link
                            class="onclick_details"
                            :to="{
                              name: 'dashboard-receivables-ledger',
                              params: {
                                ledgerGuid: item.ledgerGuid,
                                ledger_name: item.name,
                                type: 'Sales',
                                filter_value: active_due,
                              },
                            }"
                          >
                            {{ item.name }}</router-link
                          >
                        </div>

                        <div class="next_reminder" v-if="item.nextShootDate">
                          <img
                            src="assets/images/1.0/dashboard/payment-reminder.svg"
                            class="img-fluid mr-1"
                            height="15px"
                            width="15px"
                          />Next Reminder on {{ format_date(item.nextShootDate)
                          }}<span
                            class="edit_reminder ml-2"
                            v-if="companytype_value != 'SHARED'"
                            @click="edit_reminder(item.ledgerGuid, 'single')"
                            >Edit</span
                          >
                        </div>
                        <!-- <div v-if="show_date" class="parties_listing_reminder_date">Next Reminder on
                                                      {{ format_date(item.nextShootDate) }}
                                                  </div> -->
                      </td>
                    </template>
                    <template v-slot:item.balance="{ item }">
                      <td align="right">
                        <p>
                          <span class="font_sans">{{ symbol }}</span>
                          {{ item.balance | formatNumberParties }}
                        </p>
                      </td>
                    </template>
                    <template v-slot:item.credit="{ item }">
                      <td>
                        <p>{{ item.credit }}</p>
                      </td>
                    </template>
                    <template v-slot:item.avgPaymentsDayByBills_text="{ item }">
                      <td>
                        <p>{{ item.avgPaymentsDayByBills_text }}</p>
                      </td>
                    </template>
                    <template v-slot:item.action="{ item }">
                      <td align="center">
                        <p class="pdf_a_download">
                          <img
                            src="assets/images/1.0/svgs/pdf_download.svg"
                            class="img-fluid"
                          />
                          PDF
                        </p>
                      </td>
                    </template>
                  </v-data-table>
                </div>
                <template>
                  <div
                    class="bottom_navigation-pagination set_receivables_pagination"
                  >
                    <v-pagination
                      v-model="page"
                      :length="numberOfPages"
                      :total-visible="5"
                    ></v-pagination>
                  </div>
                </template>

                <!-- <h5>Selected: {{selected}}</h5> -->
              </v-app>
            </div>

            <!-- <template>
                                      <div class="sendreminderdiv">
                                          <ul class="pr_btns">
                                          <li class="mr-3"><button class="pr_cancel">Cancel</button></li>
                                          <li class="mr-3"><button class="sendreminder_btn"><img src="assets/images/1.0/dashboard/send-reminder.svg" class="img-fluid mr-2" height="15px" width="15px"/>Send Reminder</button></li>
                                          <li class="mr-3"><button class="schedule_reminder"><img src="assets/images/1.0/dashboard/white-clock.svg" class="img-fluid mr-2" height="18px" width="18px"/>Schedule Reminder</button></li>
                                      </ul>
                                      </div>
                                  </template> -->
          </div>
        </div>
      </div>

      <template>
        <div class="sendreminderdiv pt-3" v-if="hideshowreminder_div">
          <ul class="pr_btns m-0">
            <li class="">
              <button
                @click="cancel(), (hideshowreminder_div = false)"
                class="pr_cancel"
              >
                Cancel
              </button>
            </li>
            <li class="">
              <b-button
                id="show-btn"
                @click="$bvModal.show('bv-modal-example')"
                class="sendreminder_btn"
                :disabled="isActive"
                ><img
                  src="assets/images/1.0/dashboard/send-reminder.svg"
                  class="img-fluid mr-2"
                  height="15px"
                  width="15px"
                />Send Reminder</b-button
              >
            </li>
            <li class="">
              <b-button
                @click="$bvModal.show('scheduler')"
                class="schedule_reminder"
                :disabled="schedule_btn"
                ><img
                  src="assets/images/1.0/dashboard/white-clock.svg"
                  class="img-fluid mr-2"
                  height="18px"
                  width="18px"
                />Schedule Reminder</b-button
              >
            </li>
          </ul>
        </div>
      </template>
    </div>

    <!-- sent reminder model  -->
    <div>
      <b-modal id="bv-modal-example" hide-footer centered>
        <template #modal-title class="title_reminder">
          Send Instant Reminders
        </template>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <p class="sendreminde_text">
              Livekeeping will send instant reminder to your
              {{ this.selected_count }} Selected Parties.
            </p>
            <div class="sms_email pt-4">
              <b-form-checkbox
                id="sms"
                name="sms"
                value="true"
                unchecked-value="false"
                class="sendreminde_text"
                v-model="sms_checkbox"
              >
                SMS
              </b-form-checkbox>
              <b-form-checkbox
                id="email"
                name="email"
                value="true"
                unchecked-value="false"
                class="sendreminde_text"
                v-model="email_checkbox"
              >
                Email
              </b-form-checkbox>
            </div>
            <div class="email_sms_not_select_error" v-if="instant_error">
              <span>{{ this.instant_error }}</span>
            </div>
            <div class="pt-4 pb-4 include_checkbox">
              <b-form-checkbox
                id="due"
                name="due"
                value="true"
                unchecked-value="false"
                v-model="invoices_due"
              >
                Include invoices that are not due?
              </b-form-checkbox>
            </div>
            <div class="centerbtn pt-3">
              <button class="popup_reminderbtn" @click="send_instant()">
                Send Reminder
              </button>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
    <!-- end  -->
    <!-- sent Schedule Reminder  -->
    <div>
      <b-modal id="scheduler" hide-footer centered>
        <template #modal-title class="title_reminder"> Set Date </template>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <p class="sendreminde_text">
              Livekeeping will remind parties on selected date.
            </p>
            <div class="sms_email pt-2">
              <b-form-checkbox
                id="sms"
                name="sms"
                value="true"
                class="sendreminde_text"
                v-model="schedule_sms_checkbox"
              >
                SMS
              </b-form-checkbox>
              <b-form-checkbox
                id="email"
                name="email"
                value="true"
                class="sendreminde_text"
                v-model="schedule_email_checkbox"
              >
                Email
              </b-form-checkbox>
            </div>
            <div class="email_sms_not_select_error" v-if="schedule_error">
              <span>{{ this.schedule_error }}</span>
            </div>
            <div class="pt-4 include_checkbox">
              <b-form-checkbox
                id="due"
                name="due"
                value="true"
                v-model="schedule_due_checkbox"
              >
                Include invoices that are not due?
              </b-form-checkbox>
            </div>
            <div class="pt-4 pb-4 reminder_radio_set">
              <b-form-radio-group
                v-model="value_radio"
                :options="options_radio"
                name="radio-validation"
                class="radio_custom"
                @input="selectradiobtn()"
              >
              </b-form-radio-group>
            </div>
            <div v-show="duedateshow">
              <p>Remind again, If not paid?</p>
              <div class="flex_reminder">
                <p>If not paid, Send reminder in every</p>
                <input
                  placeholder=""
                  class="days_input ml-2 mr-2"
                  type="number"
                  v-model="due_reminder_days"
                />
                <p>days.</p>
              </div>
              <div class="email_sms_not_select_error" v-if="due_days_error">
                <span>{{ this.due_days_error }}</span>
              </div>
            </div>
            <div v-show="dailyshow">
              <!-- <p>dailyshow</p> -->
            </div>
            <div v-show="weeklyshow">
              <div class="weekseven pt-2">
                <div class="radio_container">
                  <input
                    type="radio"
                    v-model="week_days"
                    value="Mon"
                    id="one-a"
                  />
                  <label for="one-a">Mon</label>
                  <input
                    type="radio"
                    v-model="week_days"
                    value="Tue"
                    id="two-a"
                  />
                  <label for="two-a">Tue</label>
                  <input
                    type="radio"
                    v-model="week_days"
                    value="Wed"
                    id="three-a"
                  />
                  <label for="three-a">Wed</label>
                  <input
                    type="radio"
                    v-model="week_days"
                    value="Thu"
                    id="four-a"
                  />
                  <label for="four-a">Thu</label>
                  <input
                    type="radio"
                    v-model="week_days"
                    value="Fri"
                    id="five-a"
                  />
                  <label for="five-a">Fri</label>
                  <input
                    type="radio"
                    v-model="week_days"
                    value="Sat"
                    id="six-a"
                  />
                  <label for="six-a">Sat</label>
                  <input
                    type="radio"
                    v-model="week_days"
                    value="Sun"
                    id="seven-a"
                  />
                  <label for="seven-a">Sun</label>
                </div>
              </div>
            </div>
            <div v-show="monthlyshow">
              <div class="monthly_raddesign">
                <input
                  type="radio"
                  id="ad-one"
                  v-model="monthly_days"
                  value="1"
                />
                <label for="ad-one">1</label>

                <input
                  type="radio"
                  id="ad-two"
                  v-model="monthly_days"
                  value="2"
                />
                <label for="ad-two">2</label>

                <input
                  type="radio"
                  id="ad-three"
                  v-model="monthly_days"
                  value="3"
                />
                <label for="ad-three">3</label>

                <input
                  type="radio"
                  id="ad-four"
                  v-model="monthly_days"
                  value="4"
                />
                <label for="ad-four">4</label>
                <input
                  type="radio"
                  id="ad-five"
                  v-model="monthly_days"
                  value="5"
                />
                <label for="ad-five">5</label>
                <input
                  type="radio"
                  id="ad-six"
                  v-model="monthly_days"
                  value="6"
                />
                <label for="ad-six">6</label>
                <input
                  type="radio"
                  id="ad-seven"
                  v-model="monthly_days"
                  value="7"
                />
                <label for="ad-seven">7</label>
                <input
                  type="radio"
                  id="ad-eight"
                  v-model="monthly_days"
                  value="8"
                />
                <label for="ad-eight">8</label>
                <input
                  type="radio"
                  id="ad-nine"
                  v-model="monthly_days"
                  value="9"
                />
                <label for="ad-nine">9</label>
                <input
                  type="radio"
                  id="ad-ten"
                  v-model="monthly_days"
                  value="10"
                />
                <label for="ad-ten">10</label>
                <input
                  type="radio"
                  id="at-one"
                  v-model="monthly_days"
                  value="11"
                />
                <label for="at-one">11</label>
                <input
                  type="radio"
                  id="at-two"
                  v-model="monthly_days"
                  value="12"
                />
                <label for="at-two">12</label>
                <input
                  type="radio"
                  id="at-three"
                  v-model="monthly_days"
                  value="13"
                />
                <label for="at-three">13</label>
                <input
                  type="radio"
                  id="at-four"
                  v-model="monthly_days"
                  value="14"
                />
                <label for="at-four">14</label>
                <input
                  type="radio"
                  id="at-five"
                  v-model="monthly_days"
                  value="15"
                />
                <label for="at-five">15</label>
                <input
                  type="radio"
                  id="at-six"
                  v-model="monthly_days"
                  value="16"
                />
                <label for="at-six">16</label>
                <input
                  type="radio"
                  id="at-seven"
                  v-model="monthly_days"
                  value="17"
                />
                <label for="at-seven">17</label>
                <input
                  type="radio"
                  id="at-eight"
                  v-model="monthly_days"
                  value="18"
                />
                <label for="at-eight">18</label>
                <input
                  type="radio"
                  id="at-nine"
                  v-model="monthly_days"
                  value="19"
                />
                <label for="at-nine">19</label>
                <input
                  type="radio"
                  id="at-ten"
                  v-model="monthly_days"
                  value="20"
                />
                <label for="at-ten">20</label>
                <input
                  type="radio"
                  id="aa-one"
                  v-model="monthly_days"
                  value="21"
                />
                <label for="aa-one">21</label>
                <input
                  type="radio"
                  id="aa-two"
                  v-model="monthly_days"
                  value="22"
                />
                <label for="aa-two">22</label>
                <input
                  type="radio"
                  id="aa-three"
                  v-model="monthly_days"
                  value="23"
                />
                <label for="aa-three">23</label>
                <input
                  type="radio"
                  id="aa-four"
                  v-model="monthly_days"
                  value="24"
                />
                <label for="aa-four">24</label>
                <input
                  type="radio"
                  id="aa-five"
                  v-model="monthly_days"
                  value="25"
                />
                <label for="aa-five">25</label>
                <input
                  type="radio"
                  id="aa-six"
                  v-model="monthly_days"
                  value="26"
                />
                <label for="aa-six">26</label>
                <input
                  type="radio"
                  id="aa-seven"
                  v-model="monthly_days"
                  value="27"
                />
                <label for="aa-seven">27</label>
                <input
                  type="radio"
                  id="aa-eight"
                  v-model="monthly_days"
                  value="28"
                />
                <label for="aa-eight">28</label>
              </div>
            </div>
            <div class="email_sms_not_select_error" v-if="schedule_select">
              <span>{{ this.schedule_select }}</span>
            </div>
            <div class="centerbtn pt-3 pb-3">
              <!-- <button class="popup_reminderbtn" @click="scheduleReminder">
                save
              </button> -->
              <button class="popup_reminderbtn" @click="scheduleReminder" :disabled="isScheduling">
                {{ isScheduling ? 'Saving...' : 'Save' }}
              </button>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
    <!-- end -->
    <!-- edit reminder model  -->
    <div>
      <b-modal id="edit_reminder" centered hide-footer ref="modaledit_hide">
        <template #modal-title class="title_reminder"> Set Date </template>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <p class="sendreminde_text">
              Livekeeping will remind parties on selected date.
            </p>
            <div class="sms_email pt-2">
              <b-form-checkbox
                id="sms"
                name="sms"
                value="true"
                unchecked-value="false"
                class="sendreminde_text"
                v-model="edit_sms_checkbox"
              >
                SMS
              </b-form-checkbox>
              <b-form-checkbox
                id="email"
                name="email"
                value="true"
                unchecked-value="false"
                class="sendreminde_text"
                v-model="edit_email_checkbox"
              >
                Email
              </b-form-checkbox>
            </div>
            <div class="email_sms_not_select_error" v-if="edit_schedule_error">
              <span>{{ this.edit_schedule_error }}</span>
            </div>
            <div class="pt-4 include_checkbox">
              <b-form-checkbox
                id="due"
                name="due"
                value="true"
                unchecked-value="false"
                v-model="edit_due_checkbox"
              >
                Include invoices that are not due?
              </b-form-checkbox>
            </div>
            <div class="pt-4 pb-4 radio_custom reminder_radio_set">
              <b-form-radio-group
                v-model="value_editpop"
                :options="options_radioedit"
                name="radio-validation"
                class="radio_custom"
                @input="selectradiobtnedit()"
              >
              </b-form-radio-group>
            </div>
            <div>
              <div v-show="duedateshowedit">
                <p>Remind again, If not paid?</p>
                <div class="flex_reminder">
                  <p>If not paid, Send reminder in every</p>
                  <input
                    placeholder=""
                    class="days_input ml-2 mr-2"
                    type="number"
                    v-model="edit_due_number"
                  />
                  <p>days.</p>
                </div>
                <div
                  class="email_sms_not_select_error"
                  v-if="edit_due_days_error"
                >
                  <span>{{ this.edit_due_days_error }}</span>
                </div>
              </div>
              <div v-show="dailyshowedit"></div>
              <div v-show="weeklyshowedit">
                <div class="weekseven pt-2">
                  <!-- <p>Mon</p>
                              <p>Tue</p>
                              <p>Wed</p>
                              <p>Thu</p>
                              <p>Fri</p>
                              <p>Sat</p>
                              <p>Sun</p> -->
                  <div class="radio_container">
                    <input
                      type="radio"
                      name="radio"
                      value="Mon"
                      v-model="edit_week_days"
                      id="one"
                      checked
                    />
                    <label for="one">Mon</label>
                    <input
                      type="radio"
                      name="radio"
                      value="Tue"
                      v-model="edit_week_days"
                      id="two"
                    />
                    <label for="two">Tue</label>
                    <input
                      type="radio"
                      name="radio"
                      value="Wed"
                      v-model="edit_week_days"
                      id="three"
                    />
                    <label for="three">Wed</label>
                    <input
                      type="radio"
                      name="radio"
                      value="Thu"
                      v-model="edit_week_days"
                      id="four"
                    />
                    <label for="four">Thu</label>
                    <input
                      type="radio"
                      name="radio"
                      value="Fri"
                      v-model="edit_week_days"
                      id="five"
                    />
                    <label for="five">Fri</label>
                    <input
                      type="radio"
                      name="radio"
                      value="Sat"
                      v-model="edit_week_days"
                      id="six"
                    />
                    <label for="six">Sat</label>
                    <input
                      type="radio"
                      name="radio"
                      value="Sun"
                      v-model="edit_week_days"
                      id="seven"
                    />
                    <label for="seven">Sun</label>
                  </div>
                </div>
              </div>
              <div v-show="monthlyshowedit">
                <div class="monthly_raddesign">
                  <input
                    type="radio"
                    id="d-one"
                    v-model="edit_month_days"
                    name="month"
                    value="1"
                  />
                  <label for="d-one">1</label>
                  <input
                    type="radio"
                    id="d-two"
                    v-model="edit_month_days"
                    name="month"
                    value="2"
                  />
                  <label for="d-two">2</label>
                  <input
                    type="radio"
                    id="d-three"
                    v-model="edit_month_days"
                    name="month"
                    value="3"
                  />
                  <label for="d-three">3</label>
                  <input
                    type="radio"
                    id="d-four"
                    v-model="edit_month_days"
                    name="month"
                    value="4"
                  />
                  <label for="d-four">4</label>
                  <input
                    type="radio"
                    id="d-five"
                    v-model="edit_month_days"
                    name="month"
                    value="5"
                  />
                  <label for="d-five">5</label>
                  <input
                    type="radio"
                    id="d-six"
                    v-model="edit_month_days"
                    name="month"
                    value="6"
                  />
                  <label for="d-six">6</label>
                  <input
                    type="radio"
                    id="d-seven"
                    v-model="edit_month_days"
                    name="month"
                    value="7"
                  />
                  <label for="d-seven">7</label>
                  <input
                    type="radio"
                    id="d-eight"
                    v-model="edit_month_days"
                    name="month"
                    value="8"
                  />
                  <label for="d-eight">8</label>
                  <input
                    type="radio"
                    id="d-nine"
                    v-model="edit_month_days"
                    name="month"
                    value="9"
                  />
                  <label for="d-nine">9</label>
                  <input
                    type="radio"
                    id="d-ten"
                    v-model="edit_month_days"
                    name="month"
                    value="10"
                  />
                  <label for="d-ten">10</label>
                  <input
                    type="radio"
                    id="t-one"
                    v-model="edit_month_days"
                    name="month"
                    value="11"
                  />
                  <label for="t-one">11</label>
                  <input
                    type="radio"
                    id="t-two"
                    v-model="edit_month_days"
                    name="month"
                    value="12"
                  />
                  <label for="t-two">12</label>
                  <input
                    type="radio"
                    id="t-three"
                    v-model="edit_month_days"
                    name="month"
                    value="13"
                  />
                  <label for="t-three">13</label>
                  <input
                    type="radio"
                    id="t-four"
                    v-model="edit_month_days"
                    name="month"
                    value="14"
                  />
                  <label for="t-four">14</label>
                  <input
                    type="radio"
                    id="t-five"
                    v-model="edit_month_days"
                    name="month"
                    value="15"
                  />
                  <label for="t-five">15</label>
                  <input
                    type="radio"
                    id="t-six"
                    v-model="edit_month_days"
                    name="month"
                    value="16"
                  />
                  <label for="t-six">16</label>
                  <input
                    type="radio"
                    id="t-seven"
                    v-model="edit_month_days"
                    name="month"
                    value="17"
                  />
                  <label for="t-seven">17</label>
                  <input
                    type="radio"
                    id="t-eight"
                    v-model="edit_month_days"
                    name="month"
                    value="18"
                  />
                  <label for="t-eight">18</label>
                  <input
                    type="radio"
                    id="t-nine"
                    v-model="edit_month_days"
                    name="month"
                    value="19"
                  />
                  <label for="t-nine">19</label>
                  <input
                    type="radio"
                    id="t-ten"
                    v-model="edit_month_days"
                    name="month"
                    value="20"
                  />
                  <label for="t-ten">20</label>
                  <input
                    type="radio"
                    id="a-one"
                    v-model="edit_month_days"
                    name="month"
                    value="21"
                  />
                  <label for="a-one">21</label>
                  <input
                    type="radio"
                    id="a-two"
                    v-model="edit_month_days"
                    name="month"
                    value="22"
                  />
                  <label for="a-two">22</label>
                  <input
                    type="radio"
                    id="a-three"
                    v-model="edit_month_days"
                    name="month"
                    value="23"
                  />
                  <label for="a-three">23</label>
                  <input
                    type="radio"
                    id="a-four"
                    v-model="edit_month_days"
                    name="month"
                    value="24"
                  />
                  <label for="a-four">24</label>
                  <input
                    type="radio"
                    id="a-five"
                    v-model="edit_month_days"
                    name="month"
                    value="25"
                  />
                  <label for="a-five">25</label>
                  <input
                    type="radio"
                    id="a-six"
                    v-model="edit_month_days"
                    name="month"
                    value="26"
                  />
                  <label for="a-six">26</label>
                  <input
                    type="radio"
                    id="a-seven"
                    v-model="edit_month_days"
                    name="month"
                    value="27"
                  />
                  <label for="a-seven">27</label>
                  <input
                    type="radio"
                    id="a-eight"
                    v-model="edit_month_days"
                    name="month"
                    value="28"
                  />
                  <label for="a-eight">28</label>
                </div>
              </div>
            </div>
            <div class="email_sms_not_select_error" v-if="edit_schedule_select">
              <span>{{ this.edit_schedule_select }}</span>
            </div>
            <div class="centerbtn pt-4 pb-3">
              <input type="hidden" v-model="edit_guid" />
              <input type="hidden" v-model="edit_id" />
              <!-- <button class="popup_reminderbtn" @click="update_click('single')">
                Update
              </button> -->
              <button class="popup_reminderbtn" @click="update_click('single')" :disabled="isScheduling">
              {{ isScheduling ? 'Updating...' : 'Update' }}
            </button>
            </div>
            <div class="pt-2">
              <p class="red_remove" v-on:click="showremovereminder = true">
                Want to remove Payment Reminder?
              </p>
              <div v-if="showremovereminder" class="remove_reminder_set">
                <div class="centerbtn">
                  <button
                    class="only_text_btn_y"
                    @click="remove_payment_reminder()"
                  >
                    Yes
                  </button>
                  <button
                    class="only_text_btn_n ml-4"
                    @click="showremovereminder = false"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-modal>
    </div>

    <!-- end  -->

    <!-- remove reminder popup     -->
    <div>
      <!-- <b-modal
          id="remove_reminder" centered
          hide-footer
          hide-header
          ref="modalreminder_hide"
        >
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
              <p class="remove_payment">
                Are you sure want remove Payment Reminder?
              </p>
  
              <div class="centerbtn pt-4 pb-3">
                <button class="popup_reminderbtn" @click="hidereminder">
                  Yes
                </button>
                <button class="popup_reminderbtnwhite ml-4" @click="hideModal">
                  No
                </button>
              </div>
              <div class="centerbtn pt-4 pb-3"></div>
            </div>
          </div>
        </b-modal> -->
    </div>
    <!-- end  -->
    <!-- Share company reminder model  -->
    <div>
      <b-modal id="share_company_show" hide-footer centered>
        <template #modal-title class="title_reminder">
          Already Shared Company
        </template>
        <div class="row already_shared_company_popup_receivables_inner">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <p class="sendreminde_text">
              You don't have permission to send or schedule payment reminder
            </p>
          </div>
        </div>
      </b-modal>
    </div>
    <!-- end  -->
  </section>
</template>

<script>
import Vue from "vue";
var numeral = require("numeral");

Vue.filter("formatNumberParties", function (value) {
  // return numeral(value).format("0," + localStorage.getItem('amountformate')); // displaying other groupings/separators is possible, look at the docs
  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(
    value
  );
});
// import Vue from "vue";
import axios from "axios";
import moment from "moment";
import Api from "@/Api";
import Common from "@/Common";
import GoogleAnalytics from "@/GoogleAnalytics";
import DateRangePicker from "vue2-daterange-picker";

//you need to import the CSS manually
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  name: "daybook",
  components: { DateRangePicker },
  data() {
    let startDate = moment(
      String(localStorage.getItem("date_range_start_date"))
    );
    let endDate = moment(String(localStorage.getItem("date_range_end_date")));
    return {
      sms_checkbox: true,
      email_checkbox: true,
      invoices_due: false,
      schedule_sms_checkbox: true,
      schedule_email_checkbox: true,
      schedule_due_checkbox: false,
      showremovereminder: false,
      active_el: "All Receivables",
      active_due: "All",
      active_date: "oney",
      startDate: startDate,
      endDate: endDate,
      getFiltersData: "All",
      getFiltersDatahidden: "All",
      getLedgerGroupsData: "",
      getFiltersForOutstandings: [],
      getLedgerGroups: [],
      dateRange: { startDate, endDate },
      companytype_value: "",
      defaultRanges: {
        // I got a eslint syntax errors
        Today: [new Date(), new Date()],
        Yesterday: [
          new Date(Date.now() - 3600 * 1000 * 24),
          new Date(Date.now() - 3600 * 1000 * 24),
        ],
        "This Week": [new Date(Date.now() - 7 * 24 * 3600 * 1000), new Date()],
        "This Month": [
          new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
        ],
        "Last Month": [
          new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
          new Date(new Date().getFullYear(), new Date().getMonth(), 0),
        ],
        // 'This Quarter': [new Date(new Date().getFullYear(), Math.floor((new Date().getMonth() / 3)) * 3 - 3, 1), new Date(new Date(new Date().getFullYear(), Math.floor((new Date().getMonth() / 3)) * 3 - 3, 1).getFullYear(), new Date(new Date().getFullYear(), Math.floor((new Date().getMonth() / 3)) * 3 - 3, 1).getMonth() + 3, 0)],
        "This Year": [
          new Date(String(localStorage.getItem("first_date_range_start_date"))),
          new Date(String(localStorage.getItem("first_date_range_end_date"))),
        ],
        "Last Year": [
          new Date(
            moment(
              String(localStorage.getItem("first_date_range_start_date"))
            ).add(-1, "year")
          ),
          new Date(
            moment(
              String(localStorage.getItem("first_date_range_end_date"))
            ).add(-1, "year")
          ),
        ],
      },
      headers: [
        { text: "Ledger Name", value: "name", align: "left", sortable: true },
        { text: "Credit Days", value: "credit" },
        { text: "Average Pay Days", value: "avgPaymentsDayByBills_text" },
        { text: "Due Amount", value: "balance", align: "right" },
        // { text: 'Download', value: 'action', align: 'center' }
      ],
      page: 1,
      totaloutstanding: 0,
      numberOfPages: 0,
      outstanding: [],
      value: [],
      selectedHeaders: [],
      loading: true,
      new_loading: true,
      options: {},
      symbol: "",
      search: "",
      sortBy: "name",
      orderBy: "",
      show_date: 0,
      grandTotal: 0,
      GroupsDataArray: [],
      isRange: "",
      rangeValue: "0",
      selected: [],
      remider_click: false,
      isActive: true,
      hideshowreminder_div: false,
      schedule_btn: true,
      value_radio: null,
      options_radio: [
        { text: "On Due Date", value: "duedate" },
        { text: "Daily", value: "daily" },
        { text: "Weekly", value: "weekly" },
        { text: "Monthly", value: "monthly" },
      ],
      duedateshow: false,
      dailyshow: false,
      monthlyshow: false,
      weeklyshow: false,
      value_editpop: "",
      options_radioedit: [
        { text: "On Due Date", value: "duedateedit" },
        { text: "Daily", value: "dailyedit" },
        { text: "Weekly", value: "weeklyedit" },
        { text: "Monthly", value: "monthlyedit" },
      ],
      duedateshowedit: false,
      dailyshowedit: false,
      weeklyshowedit: false,
      monthlyshowedit: false,
      picked: "",
      showInside: false,
      dotshow: 0,
      showOutside: false,
      dotshowdue: 0,
      call_function: "0",
      ledger_array: [],
      defaultEmailTemplateId: "",
      defaultSMSTemplateId: "",
      defaultTimeToSendreminders: "",
      emailTemplate: "",
      messageTemplate: "",
      due_reminder_days: "",
      week_days: moment().format("ddd"),
      monthly_days: moment().format("DD"),
      schedulerType: "",
      scheduledDay: "",
      nextShootDate: "",
      edit_sms_checkbox: "",
      edit_email_checkbox: "",
      edit_due_checkbox: "",
      edit_due_number: "",
      edit_week_days: moment().format("ddd"),
      edit_month_days: moment().format("DD"),
      edit_guid: "",
      edit_schedulerType: "",
      edit_scheduledDay: "",
      edit_nextShootDate: "",
      edit_emailtemplateId: "",
      edit_smsTemplateId: "",
      edit_messageTemplate: "",
      edit_emailTemplate: "",
      edit_emails: "",
      edit_contactNumbers: "",
      edit_id: [],
      selected_count: "",
      current_day_name: "",
      isPaid: "",
      filter_array: [],
      scheduleTime: "",
      edit_ledgerGuid: "",
      instant_error: "",
      schedule_error: "",
      schedule_select: "",
      due_days_error: "",
      edit_schedule_error: "",
      edit_schedule_select: "",
      edit_due_days_error: "",

      scheduleArray: [],
      updateArray: [],

      isScheduling: false,
    };
  },
  // computed: {
  //   state() {
  //     return Boolean(this.value_radio);
  //   }
  // },
  watch: {
    page: function () {
      this.options.page = this.page;
      this.outstanding_data();
      GoogleAnalytics.receivables_screen_pagination(this.options.page);
    },

    "options.itemsPerPage"() {
      // this.options.page = this.page;
      this.page = 1;
      this.options.page = 1;
      this.outstanding_data();
      // console.log(`hehehe`);
      if (this.call_function == "1") {
        this.call_function = "1";
        GoogleAnalytics.receivables_screen_Rows_Per_Page(
          this.options.itemsPerPage
        );
      } else {
        this.call_function = "1";
      }
    },
    value(val) {
      this.selectedHeaders = val;
      // console.log(this.selectedHeaders[0].value);
    },
    options: {
      handler() {
        // this.getFilters();
        // this.getGroups();
        GoogleAnalytics.receivables_listing();
      },
    },
    deep: true,
  },
  created() {
    this.selectedHeaders = this.headers;
    console.log(this.selectedHeaders);
  },
  methods: {
    freeusergeneratePdf() {
      GoogleAnalytics.receivables_screen_viewpdf("viewpdf");
    },
    generatePdf() {
      GoogleAnalytics.receivables_screen_viewpdf("viewpdf");
      if (this.getLedgerGroupsData === "All Receivables") {
        this.GroupsDataArray = [];
        for (let [key, value] of Object.entries(this.getLedgerGroups)) {
          this.GroupsDataArray.push(value.ledgerGroupName);
        }
      } else {
        this.GroupsDataArray = [];
        this.GroupsDataArray.push(this.getLedgerGroupsData);
      }
      const data = {
        isPaid: localStorage.getItem("isPaid"),
        filterBy: this.getFiltersDatahidden,
        startDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        endDate: moment(String(this.$refs.picker.end)).format("yyyy-MM-DD"),
        rangeValue: this.rangeValue,
        currencySymbol: localStorage.getItem("symbol"),
        outstandingType: "outstandingReceivable",
        companyId: localStorage.getItem("companyId"),
        customerId: localStorage.getItem("customerId"),
        groupBy: this.GroupsDataArray,
        searchTerm: "",
        seletedLedgers: [],
        sortBy: this.sortBy,
        orderBy: this.orderBy,
        deviceType: "WEB",
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getPDFForOutstanding(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            if (response.data.status == "1") {
              // this.htmlString = response.data.data.htmlString;
              this.pdfUrl = response.data.data.link;
              //  localStorage.setItem("pdfUrl", pdfUrl);
              localStorage.setItem("pdfUrl", this.pdfUrl);
              window.open(window.location.origin + "/pdfNew");
              // this.$router.push({
              //   name: "pdfPage",
              //   params: { pdfUrl: this.pdfUrl, fileName: this.fileName}
              // })
            }
          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          alert("ERROR");
          this.loading = false;
        });
    },
    activatedate: function (date) {
      if (date === "oned") {
        // one day
        GoogleAnalytics.receivables_screen_date_filter("1D");
        var new_date_start_date = moment(String(new Date())).format(
          "yyyy-MM-DD"
        );
        var new_date_end_date = moment(String(new Date())).format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "onew") {
        // one week
        GoogleAnalytics.receivables_screen_date_filter("1W");
        var new_date_start_date = moment(
          String(new Date(Date.now() - 7 * 24 * 3600 * 1000))
        ).format("yyyy-MM-DD");
        var new_date_end_date = moment(String(new Date())).format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "onem") {
        // one month
        GoogleAnalytics.receivables_screen_date_filter("1M");
        var new_date_start_date = moment(String(new Date()))
          .add(-1, "M")
          .format("yyyy-MM-DD");
        var new_date_end_date = moment(String(new Date())).format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "threem") {
        // 3 month
        GoogleAnalytics.receivables_screen_date_filter("3M");
        var new_date_start_date = moment(String(new Date()))
          .add(-3, "M")
          .format("yyyy-MM-DD");
        var new_date_end_date = moment(String(new Date())).format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "oney") {
        // 1 Year
        GoogleAnalytics.receivables_screen_date_filter("1Y");
        var new_date_start_date = moment(
          String(
            new Date(
              String(localStorage.getItem("first_date_range_start_date"))
            )
          )
        ).format("yyyy-MM-DD");
        var new_date_end_date = moment(
          String(
            new Date(String(localStorage.getItem("first_date_range_end_date")))
          )
        ).format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "twoy") {
        // 2 Year
        GoogleAnalytics.receivables_screen_date_filter("2Y");
        var new_date_start_date = moment(
          String(
            new Date(
              String(localStorage.getItem("first_date_range_start_date"))
            )
          )
        )
          .add(-1, "years")
          .format("yyyy-MM-DD");
        var new_date_end_date = moment(
          String(
            new Date(String(localStorage.getItem("first_date_range_end_date")))
          )
        ).format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "max") {
        // max date
        GoogleAnalytics.receivables_screen_date_filter("Max");
        var new_date_start_date = moment(
          String(new Date(String(localStorage.getItem("max_startFrom"))))
        ).format("yyyy-MM-DD");
        var new_date_end_date = moment().format("yyyy-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      }
      localStorage.setItem("date_range_start_date", new_date_start_date);
      localStorage.setItem("date_range_end_date", new_date_end_date);

      this.outstanding_data("", this.groupSelectValue, this.switch_type);
      localStorage.setItem("active_date", date);
      this.active_date = date;
    },
    activate: function (el) {
      if (
        el === "Sundry Creditors" ||
        el === "Sundry Debtors" ||
        el === "Unsecured Loans"
      ) {
        this.dotshow = 1;
      } else {
        this.dotshow = 0;
      }
      this.active_el = el;
      this.getLedgerGroupsData = el;
      this.outstanding_data("", el, this.getLedgerGroupsData);
    },
    show() {
      this.showInside = true;
    },
    hide() {
      this.showInside = false;
    },
    closeEvent() {
      this.hide();
    },
    activatedue: function (due) {
      if (due.substring(0, 1) == ">") {
        this.dotshowdue = 1;
        this.getFiltersDatahidden = "Range";
        this.rangeValue = due.substring(1);
      } else {
        this.dotshowdue = 0;
        this.getFiltersDatahidden = due;
        this.rangeValue = "0";
      }
      this.active_due = due;

      this.outstanding_data();
      GoogleAnalytics.receivables_screen_filter(this.active_due);
    },
    showdue() {
      this.showOutside = true;
    },
    close() {
      this.showOutside = false;
    },
    closeEventdue() {
      this.close();
    },
    update() {
      localStorage.setItem(
        "date_range_start_date",
        moment(String(this.$refs.picker.start)).format("yyyy-MM-DD")
      );
      localStorage.setItem(
        "date_range_end_date",
        moment(String(this.$refs.picker.end)).format("yyyy-MM-DD")
      );
      GoogleAnalytics.receivables_screen_date_filter("Custom");
      this.outstanding_data();
      this.date_setting();
    },
    date_setting() {
      var check_start_date_mounted = moment(
        String(localStorage.getItem("date_range_start_date"))
      );
      var check_end_date_mounted = moment(
        String(localStorage.getItem("date_range_end_date"))
      );
      var days_mounted =
        check_end_date_mounted.diff(check_start_date_mounted, "days") + 1;
      // alert(days_mounted);
      if (days_mounted == "730") {
        this.active_date = "twoy";
      } else if (days_mounted == "365" || days_mounted == "366") {
        this.active_date = "oney";
      } else if (
        days_mounted == "90" ||
        days_mounted == "87" ||
        days_mounted == "88" ||
        days_mounted == "89" ||
        days_mounted == "90" ||
        days_mounted == "91" ||
        days_mounted == "92"
      ) {
        this.active_date = "threem";
      } else if (
        days_mounted == "31" ||
        days_mounted == "28" ||
        days_mounted == "29" ||
        days_mounted == "30"
      ) {
        this.active_date = "onem";
      } else if (days_mounted == "8") {
        this.active_date = "onew";
      } else if (days_mounted == "1") {
        this.active_date = "oned";
      } else if (days_mounted == max_days) {
        this.active_date = "max";
      } else {
        this.active_date = "oney";
      }
      localStorage.setItem("active_date", this.active_date);
    },
    left_arrow() {
      var check_start_date = moment(String(this.dateRange.startDate));
      var check_end_date = moment(String(this.dateRange.endDate));
      var days = check_end_date.diff(check_start_date, "days") + 1;
      if (days === 1) {
        // today
        var new_date_start_date = moment(check_start_date).add(-1, "days");
        var new_date_end_date = moment(check_end_date).add(-1, "days");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (days === 2) {
        // yesterdays
        var new_date_start_date = moment(check_start_date).add(-2, "days");
        var new_date_end_date = moment(check_end_date).add(-2, "days");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (days == 8) {
        // week
        var new_date_start_date = moment(check_start_date).add(-8, "days");
        var new_date_end_date = moment(check_end_date).add(-8, "days");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if ((days > 28 && days <= 31) || days === 28) {
        // month
        var futureMonth = moment(check_start_date).add(-1, "M");
        var new_date_start_date = moment(futureMonth).startOf("month");
        var new_date_end_date = moment(futureMonth).endOf("month");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (days > 360 && days <= 366) {
        // Year
        var new_date_start_date = moment(check_start_date).add(-1, "years");
        var new_date_end_date = moment(check_end_date).add(-1, "years");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else {
        // Custom Days
        var new_date_start_date = moment(check_start_date).add(
          "-" + days,
          "days"
        );
        var new_date_end_date = moment(check_end_date).add("-" + days, "days");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      }
      localStorage.setItem("date_range_start_date", new_date_start_date);
      localStorage.setItem("date_range_end_date", new_date_end_date);

      this.outstanding_data();
    },
    right_arrow() {
      var check_start_date = moment(String(this.dateRange.startDate));
      var check_end_date = moment(String(this.dateRange.endDate));
      var days = check_end_date.diff(check_start_date, "days") + 1;
      if (days === 1) {
        // today
        var new_date_start_date = moment(check_start_date).add(1, "days");
        var new_date_end_date = moment(check_end_date).add(1, "days");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (days === 2) {
        // yesterdays
        var new_date_start_date = moment(check_start_date).add(2, "days");
        var new_date_end_date = moment(check_end_date).add(2, "days");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (days == 8) {
        // week
        var new_date_start_date = moment(check_start_date).add(8, "days");
        var new_date_end_date = moment(check_end_date).add(8, "days");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if ((days > 28 && days <= 31) || days === 28) {
        // month
        var futureMonth = moment(check_start_date).add(1, "M");
        var new_date_start_date = moment(futureMonth).startOf("month");
        var new_date_end_date = moment(futureMonth).endOf("month");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (days > 360 && days <= 366) {
        // Year
        var new_date_start_date = moment(check_start_date).add(1, "years");
        var new_date_end_date = moment(check_end_date).add(1, "years");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else {
        // Custom Days
        var new_date_start_date = moment(check_start_date).add(days, "days");
        var new_date_end_date = moment(check_end_date).add(days, "days");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      }
      localStorage.setItem("date_range_start_date", new_date_start_date);
      localStorage.setItem("date_range_end_date", new_date_end_date);

      this.outstanding_data();
    },
    outstanding_data(type) {
      this.symbol = localStorage.getItem("symbol");
      var self = this;
      this.loading = true;
      this.new_loading = true;
      if (type === "search") {
        this.options.page = 1;
      }
      if (this.getLedgerGroupsData === "All Receivables") {
        this.GroupsDataArray = [];
        for (let [key, value] of Object.entries(this.getLedgerGroups)) {
          this.GroupsDataArray.push(value.ledgerGroupName);
        }
      } else {
        this.GroupsDataArray = [];
        this.GroupsDataArray.push(this.getLedgerGroupsData);
      }

      const { page, itemsPerPage } = this.options;
      let pageNumber = page - 1;
      const data = {
        customerId: localStorage.getItem("customerId"),
        companyId: localStorage.getItem("companyId"),
        outstandingType: "outstandingReceivable",
        filterBy: this.getFiltersDatahidden,
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        requestFrom: "WEB",
        startDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
        endDate: moment(String(this.$refs.picker.end)).format("yyyy-MM-DD"),
        searchTerm: this.search,
        groupBy: this.GroupsDataArray,
        rangeValue: this.rangeValue,
        sortBy: this.sortBy,
        orderBy: this.orderBy,
        contactFilterBy: "NULL",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getOutstandingDetails(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            if (response.data.status != "0") {
              for (let [key, value] of Object.entries(
                response.data.data.list
              )) {
                response.data.data.list[key].balance = Math.abs(
                  response.data.data.list[key].balance
                );
              }
              let totalPages = Math.ceil(
                response.data.data.totalCount / itemsPerPage
              );
              this.loading = false;
              this.new_loading = false;
              this.outstanding = response.data.data.list;
              this.totaloutstanding = response.data.data.totalCount;
              this.numberOfPages = totalPages;
              this.grandTotal = Math.abs(response.data.data.grandTotal);
            } else {
              this.loading = false;
              this.new_loading = false;
              this.outstanding = [];
              this.totaloutstanding = 0;
              this.numberOfPages = 0;
              this.grandTotal = 0;
            }
          }
        })

        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD MMM yyyy");
      }
    },
    getFilters() {
      const data = {
        customerId: localStorage.getItem("customerId"),
        companyId: localStorage.getItem("companyId"),
        sortBy: this.sortBy,
        orderBy: this.orderBy,
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getFiltersForOutstandings(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            this.getFiltersForOutstandings = response.data.data.list;
            console.log(this.getFiltersForOutstandings);
          }
        })

        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },
    getGroups() {
      const data = {
        customerId: localStorage.getItem("customerId"),
        companyId: localStorage.getItem("companyId"),
        requestFrom: "WEB",
        searchTerm: "",
        startLimit: "",
        endLimit: "",
        reservedNameArray: ["Sundry Creditors", "Sundry Debtors"],
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgerGroupsByCompanyId(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else if (response.data.status == "0") {
            const Receivables = {
              ledgerId: "",
              ledgerGroupName: "All Receivables",
              parentgroup: "",
            };
            this.getLedgerGroups.splice(0, 0, Receivables);
            this.getLedgerGroupsData = this.getLedgerGroups[0].ledgerGroupName;
          } else {
            const Receivables = {
              ledgerId: "",
              ledgerGroupName: "All Receivables",
              parentgroup: "",
            };

            response.data.data.list.splice(0, 0, Receivables);
            this.getLedgerGroupsData =
              response.data.data.list[0].ledgerGroupName;
            this.getLedgerGroups = response.data.data.list;
            console.log(this.getLedgerGroups);
            this.outstanding_data();
          }
        })

        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },
    getfilterData() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        // filterBy :{
        //   companyId: localStorage.getItem("companyId"),
        // },
        company_id: localStorage.getItem("companyId"),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.get_filter_by_companyGo(data, headers)
        // Api.get_filter_by_company(data, headers)
        .then((response) => {
          // if (response.data.message == "AUTHENTICATION_FAILED") {
          //   localStorage.clear();
          //   window.location.href = "/";
          // }
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );
          if (responseStatus == "200") {
            this.filter_array = ["All", "Due Today", "Not Due"];
            if (
              response.data.data.mobileAppConfigurations.outstandings
                .isCustomisedAging === true
            ) {
              // customisedAgings
              for (let [key, value] of Object.entries(
                response.data.data.mobileAppConfigurations.outstandings
                  .customisedAgings
              )) {
                if (value.fromDays != "0") {
                  this.filter_array.push(">" + value.fromDays);
                }
              }
            } else {
              // defaultAgings
              for (let [key, value] of Object.entries(
                response.data.data.mobileAppConfigurations.outstandings
                  .defaultAgings
              )) {
                if (value.fromDays != "0") {
                  this.filter_array.push(">" + value.fromDays);
                }
              }
            }
          }
        })

        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },
    groupSelect(event) {
      this.getLedgerGroupsData = event.target.value;
      this.outstanding_data();

      GoogleAnalytics.receivables_screen_filter(
        this.getFiltersData,
        this.getLedgerGroupsData
      );
    },
    filtersSelect(event) {
      const theTarget =
        event.target.options[event.target.options.selectedIndex].dataset;
      this.isRange = theTarget.isrange;
      this.getFiltersData = event.target.value;
      this.getFiltersDatahidden = this.getFiltersData;
      if (this.isRange === "0") {
        //filler by Add out range not Add
        this.rangeValue = 0;
      } else {
        // filter by Range and add range.
        this.getFiltersDatahidden = "Range";
        this.rangeValue = event.target.value;
      }

      this.outstanding_data();
    },
    // paginationClicked() {
    //   this.getFilters();
    //   this.getGroups();
    // },

    updateSort(byDesc, event) {
      this.options.page = this.page;
      if (byDesc == "by") {
        this.sortBy = event;
        this.orderBy = "-1";
      } else if (byDesc == "desc") {
        if (event == true) {
          this.orderBy = "1";
        } else {
          this.orderBy = "-1";
        }
      }

      this.outstanding_data();

      GoogleAnalytics.receivables_screen_sorting(this.sortBy, this.orderBy);
      console.log(this.sortBy);
      console.log(this.orderBy);
      // this.readDataFromAPI("",this.sortBy,this.orderBy);
    },

    handleBlur() {
      const type = "search";
      GoogleAnalytics.receivables_screen_search(this.search);
      this.outstanding_data(type);
    },
    demo() {
      this.remider_click = true;
    },
    cancel() {
      this.remider_click = false;
      this.selected = [];
    },
    enterSelect(event) {
      if (this.selected.length == 0) {
        this.isActive = true;
        this.schedule_btn = true;
        // alert('lenght 0')
      } else {
        this.ledger_array = [];
        this.scheduleArray = [];
        this.updateArray = [];
        for (let [key, value] of Object.entries(event)) {
          // this.ledger_array.push({
          //   isSMSChannelSubscribed : true,
          //   isEmailChannelSubscribed : true,
          //   isPushNotificationChannelSubscribed : false,
          //   isWhatsappChannelSubscribed : false,
          //   includedNotDueBills : false,
          //   ledgerguid : value.ledgerGuid,
          //   emailTemplateId : this.defaultEmailTemplateId,
          //   smsTemplateId : this.defaultSMSTemplateId,
          //   emailTemplate : this.emailTemplate,
          //   messageTemplate : this.messageTemplate,
          //   emails : [value.email],
          //   contactNumbers : value.mobile,
          // });
          this.ledger_array.push({
            ledgerGuid: value.ledgerGuid,
            isSchedule: value.isSchedule,
          });
        }
        console.log(this.ledger_array);

        this.selected_count = this.ledger_array.length;
        // alert('lenght 1')
        this.isActive = false;
        this.schedule_btn = false;
      }
      // alert( this.selected.length);
    },
    send_instant() {
      // for (let [key, value] of Object.entries(this.ledger_array)) {
      //   this.ledger_array[key].isSMSChannelSubscribed = this.sms_checkbox;
      //   this.ledger_array[key].isEmailChannelSubscribed = this.email_checkbox;
      //   this.ledger_array[key].includedNotDueBills = this.invoices_due;
      // }
      // const data = {
      //   schedulerName : "Payment Reminder",
      //   schedulerDescription : "Reminder regarding payment",
      //   companyId: localStorage.getItem("companyId"),
      //   requestFrom: "WEB",
      //   schedulerType: "SEND_ONCE",
      //   scheduledDay : moment().format("YYYY-MM-DD"),
      //   nextShootDate : moment().format("YYYY-MM-DD"),
      //   sendManualReminder : true,
      //   nextShootTime : this.defaultTimeToSendreminders,
      //   ledgers : this.ledger_array
      // };

      const instantArray = [];
      this.ledger_array.forEach((element) => {
        instantArray.push(element.ledgerGuid);
      });

      if (this.sms_checkbox == "false" && this.email_checkbox == "false") {
        this.instant_error = "Please select SMS or Email";
      } else {
        const data = {
          requestFrom: "WEB",
          ledgerGuid: instantArray,
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          schedularType: "IMMEDIATE",
          scheduleTime: "",
          scheduleDay: "",
          includedNotDueBills: Boolean(this.invoices_due),
          ChannelSubscribed: {
            sms: JSON.parse(this.sms_checkbox),
            email: JSON.parse(this.email_checkbox),
            whatsApp: false,
            notification: false,
          },
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.paymentReminder(data, headers)
          .then((response) => {
            // console.log(response);
            this.$router.go();
          })
          .catch((err) => {
            // alert("ERROR");
            Common.getStatusForActionFailed(err.response.status);
            this.loading = false;
          });
      }
    },

    scheduleReminder() {
      this.scheduleArray = [];
      this.updateArray = [];
      if (this.ledger_array.length > 0) {
        this.ledger_array.forEach((element) => {
          if (element.isSchedule === 0) {
            this.scheduleArray.push(element.ledgerGuid);
          } else {
            this.updateArray.push(element.ledgerGuid);
          }
        });

        if (this.scheduleArray.length > 0) {
          if (this.updateArray.length > 0) {
            this.schedule_button("multiple");
            this.$router.go();
          } else {
            this.schedule_button("single");
          }
        }

        if (this.updateArray.length > 0) {
          this.updateArray.forEach((element) => {
            this.edit_reminder(element, "multiple");
          });
          setTimeout(() => {
            this.update_click("multiple");
            this.$router.go();
          }, 100);
        }
      }
    },

    schedule_button(label) {
      // debugger;
      if(this.isScheduling) return;

      this.isScheduling = true;

      // for (let [key, value] of Object.entries(this.ledger_array)) {
      //   this.ledger_array[key].isSMSChannelSubscribed = this.sms_checkbox;
      //   this.ledger_array[key].isEmailChannelSubscribed = this.email_checkbox;
      //   this.ledger_array[key].includedNotDueBills = this.invoices_due;
      // }
      if (
        this.schedule_sms_checkbox === false &&
        this.schedule_email_checkbox === false
      ) {
        this.schedule_error = "Please select SMS or Email";
        this.isScheduling = false;
      } else if (this.value_radio == "" || this.value_radio == null) {
        this.schedule_select = "Please select any one option";
        this.isScheduling = false;
      } else {
        if (this.value_radio == "duedate") {
          // BILL_DUE_DATE
          this.schedulerType = "BILL_DUE_DATE";
          if (this.due_reminder_days == "") {
            this.due_days_error = "Please enter days for send on bill due date";
            this.isScheduling = false;
            return;
          }
          if (this.due_reminder_days < 1) {
            this.due_days_error = "Please enter more than 0 days";
            this.isScheduling = false;
            return;
          }
          this.scheduledDay = this.due_reminder_days;
          this.nextShootDate = moment().format("DD-MM-YYYY");
        } else if (this.value_radio == "daily") {
          // DAILY
          this.schedulerType = "DAILY";
          this.scheduledDay = "";
          this.nextShootDate = moment().format("DD-MM-YYYY");
        } else if (this.value_radio == "weekly") {
          // WEEKLY
          this.schedulerType = "WEEKLY";
          this.scheduledDay = this.week_days;
          this.nextShootDate = "-";
        } else if (this.value_radio == "monthly") {
          // MONTHLY
          this.schedulerType = "MONTHLY";
          this.scheduledDay =
            moment().format("YYYY") +
            "-" +
            moment().format("MM") +
            "-" +
            this.formatNumber(this.monthly_days);
          this.nextShootDate = "-";
        } else {
          this.schedulerType = "MONTHLY";
          this.scheduledDay = this.monthly_days;
          this.nextShootDate = "-";
        }

        // const data = {
        //   schedulerName : "Payment Reminder",
        //   schedulerDescription : "Reminder regarding payment",
        //   companyId: localStorage.getItem("companyId"),
        //   requestFrom: "WEB",
        //   schedulerType: this.schedulerType,
        //   scheduledDay : this.scheduledDay,
        //   nextShootDate : this.nextShootDate,
        //   sendManualReminder : false,
        //   nextShootTime : this.defaultTimeToSendreminders,
        //   ledgers : this.ledger_array
        // };
        const data = {
          requestFrom: "WEB",
          ledgerGuid: this.scheduleArray,
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          schedularType: this.schedulerType,
          scheduleTime:
            this.scheduleTime !== ""
              ? this.convertTo24HourFormat(this.scheduleTime)
              : "11:00",
          // scheduleTime : "11:00",
          scheduleDay: this.scheduledDay,
          includedNotDueBills: Boolean(this.schedule_due_checkbox),
          channelSubscribed: {
            sms: JSON.parse(this.schedule_sms_checkbox),
            email: JSON.parse(this.schedule_email_checkbox),
            whatsApp: false,
            notification: false,
          },
        };
        // console.log(data);
        // return;

        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.paymentReminder(data, headers)
          .then((response) => {
            // console.log(response);
            if (label == "single") {
              this.$router.go();
            }
            // this.isScheduling = false;
          })
          .catch((err) => {
            // alert("ERROR");
            Common.getStatusForActionFailed(err.response.status);
            this.loading = false;
            this.isScheduling = false;

          });
      }
    },
    formatNumber(number) {
      return number < 10 ? `0${number}` : `${number}`;
    },
    edit_reminder(guid, label) {
      const data = {
        company_id: localStorage.getItem("companyId"),
        requestFrom: "WEB",
        ledgerGuid: guid,
        _userId: localStorage.getItem("customerId"),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getReminderSettings(data, headers)
        .then((response) => {
          // debugger;
          console.log(response);
          this.reminderSettingsData = response.data.data;
          this.edit_sms_checkbox =
            this.reminderSettingsData.ChannelSubscribed.sms;
          this.edit_email_checkbox =
            this.reminderSettingsData.channelSubscribed.email;
          this.edit_due_checkbox =
            this.reminderSettingsData.includedNotDueBills;
          this.edit_ledgerGuid = this.reminderSettingsData.ledgerGuid;
          // alert(this.reminderSettingsData.schedularType);
          if (this.reminderSettingsData.schedularType == "BILL_DUE_DATE") {
            this.value_editpop = "duedateedit";
            this.selectradiobtnedit();
            this.edit_due_number = this.reminderSettingsData.scheduleDay;
          } else if (this.reminderSettingsData.schedularType == "DAILY") {
            this.value_editpop = "dailyedit";
          } else if (this.reminderSettingsData.schedularType == "WEEKLY") {
            this.value_editpop = "weeklyedit";
            this.selectradiobtnedit();
            this.edit_week_days = this.reminderSettingsData.scheduleDay;
          } else if (this.reminderSettingsData.schedularType == "MONTHLY") {
            this.value_editpop = "monthlyedit";
            this.selectradiobtnedit();
            this.edit_month_days = this.reminderSettingsData.scheduleDay;
          }
          this.edit_guid = guid;
          this.edit_id.push(this.reminderSettingsData._id);
          // this.edit_id = this.reminderSettingsData._id;
          this.edit_emailtemplateId = this.reminderSettingsData.emailtemplateId;
          this.edit_smsTemplateId = this.reminderSettingsData.smsTemplateId;
          this.edit_messageTemplate = this.reminderSettingsData.messageTemplate;
          this.edit_emailTemplate = this.reminderSettingsData.emailTemplate;
          this.edit_emails = this.reminderSettingsData.emails;
          this.edit_contactNumbers = this.reminderSettingsData.contactNumbers;

          if (label == "single") {
            this.$bvModal.show("edit_reminder");
          }
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    update_click(label) {
      // debugger;
      if(this.isScheduling) return;
      this.isScheduling = true;

      if (
        this.edit_sms_checkbox === false &&
        this.edit_email_checkbox === false
      ) {
        this.edit_schedule_error = "Please select SMS or Email";
        this.isScheduling = false;
      } else if (this.value_editpop == "" || this.value_editpop == null) {
        this.schedule_select = "Please select any one option";
        this.isScheduling = false;
      } else {
        if (this.value_editpop == "duedateedit") {
          // BILL_DUE_DATE
          this.edit_schedulerType = "BILL_DUE_DATE";
          if (this.edit_due_number == "") {
            this.edit_due_days_error =
              "Please enter days for send on bill due date";
              this.isScheduling = false;
            return;
          }
          if (this.edit_due_number == "0") {
            this.edit_due_days_error = "Please enter more than 0 days";
            this.isScheduling = false;
            return;
          }
          this.edit_scheduledDay = this.edit_due_number;
          this.edit_nextShootDate = moment().format("DD-MM-YYYY");
        } else if (this.value_editpop == "dailyedit") {
          // DAILY
          this.edit_schedulerType = "DAILY";
          this.edit_scheduledDay = "";
          this.edit_nextShootDate = moment().format("DD-MM-YYYY");
        } else if (this.value_editpop == "weeklyedit") {
          // WEEKLY
          this.edit_schedulerType = "WEEKLY";
          this.edit_scheduledDay = this.edit_week_days;
          this.edit_nextShootDate = "-";
        } else if (this.value_editpop == "monthlyedit") {
          // MONTHLY
          this.edit_schedulerType = "MONTHLY";
          this.edit_scheduledDay = this.formatNumber(this.edit_month_days);
          this.edit_nextShootDate = "-";
        } else {
          this.edit_schedulerType = "MONTHLY";
          this.edit_scheduledDay = this.edit_month_days;
          this.edit_nextShootDate = "-";
        }

        const data = {
          requestFrom: "WEB",
          id: this.edit_id,
          // ledgerGuid : this.edit_guid,
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          schedularType: this.edit_schedulerType,
          scheduleTime:
            this.scheduleTime !== ""
              ? this.convertTo24HourFormat(this.scheduleTime)
              : "11:00",
          // scheduleTime : "11:00",
          scheduleDay: this.edit_scheduledDay,
          includedNotDueBills: JSON.parse(this.edit_due_checkbox),
          channelSubscribed: {
            sms: JSON.parse(this.edit_sms_checkbox),
            email: JSON.parse(this.edit_email_checkbox),
            whatsApp: false,
            notification: false,
          },
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.updateReminder(data, headers)
          .then((response) => {
            if (label == "single") {
              this.$router.go();
            }
          })
          .catch((err) => {
            // alert("ERROR");
            Common.getStatusForActionFailed(err.response.status);
            this.isScheduling = false;
            this.loading = false;
          });
      }
    },
    remove_payment_reminder() {
      const data = {
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        ledgerGuid: [this.edit_ledgerGuid],
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.deleteReminder(data, headers)
        .then((response) => {
          this.$router.go();
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    selectradiobtn() {
      if (this.value_radio == "duedate") {
        this.duedateshow = true;
      } else {
        this.duedateshow = false;
      }
      if (this.value_radio == "daily") {
        this.dailyshow = true;
      } else {
        this.dailyshow = false;
      }
      if (this.value_radio == "weekly") {
        this.weeklyshow = true;
      } else {
        this.weeklyshow = false;
      }
      if (this.value_radio == "monthly") {
        this.monthlyshow = true;
      } else {
        this.monthlyshow = false;
      }
    },
    selectradiobtnedit() {
      if (this.value_editpop == "duedateedit") {
        this.duedateshowedit = true;
      } else {
        this.duedateshowedit = false;
      }
      if (this.value_editpop == "dailyedit") {
        this.dailyshowedit = true;
      } else {
        this.dailyshowedit = false;
      }
      if (this.value_editpop == "weeklyedit") {
        this.weeklyshowedit = true;
      } else {
        this.weeklyshowedit = false;
      }
      if (this.value_editpop == "monthlyedit") {
        this.monthlyshowedit = true;
      } else {
        this.monthlyshowedit = false;
      }
    },
    hidecurrentpop() {
      this.edit_reminder = false;
    },
    hideModal() {
      this.$refs.modalreminder_hide.hide();
    },
    hidereminder() {
      this.$refs.modalreminder_hide.hide();
      this.$refs.modaledit_hide.hide();
    },
    configurations() {
      var self = this;
      this.loading = true;
      this.new_loading = true;
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
      Api.getPaymentReminderConfigurations(data, headers)
        .then((response) => {
          if (response.data.status != "0") {
            // console.log(response.data.data.paymentReminder);
            this.defaultEmailTemplateId =
              response.data.data.paymentReminder.defaultEmailTemplateId;
            this.defaultSMSTemplateId =
              response.data.data.paymentReminder.defaultSMSTemplateId;
            this.defaultTimeToSendreminders =
              response.data.data.paymentReminder.defaultTimeToSendreminders;
            this.scheduleTime =
              response.data.data.paymentReminder.defaultTimeToSendreminders;

            /// Email Template Get ///
            const data = {
              templateId: this.defaultEmailTemplateId,
            };
            const headers = {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              token: localStorage.getItem("webAuthToken"),
            };
            Api.getSingleTemplateById(data, headers)
              .then((response) => {
                if (response.data.status != "0") {
                  this.emailTemplate =
                    response.data.data.templateDetails.templateBody;
                }
              })
              .catch((err) => {
                // alert("ERROR");
                Common.getStatusForActionFailed(err.response.status);
                this.loading = false;
              });

            /// Mobile Template Get ///
            const data1 = {
              templateId: this.defaultSMSTemplateId,
            };
            const headers1 = {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              token: localStorage.getItem("webAuthToken"),
            };
            Api.getSingleTemplateById(data1, headers1)
              .then((response) => {
                if (response.data.status != "0") {
                  this.messageTemplate =
                    response.data.data.templateDetails.templateBody;
                }
              })
              .catch((err) => {
                // alert("ERROR");
                Common.getStatusForActionFailed(err.response.status);
                this.loading = false;
              });
          }
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    convertTo24HourFormat(time12hr) {
      const [time, period] = time12hr.split(" ");
      const [hours, minutes] = time.split(":");

      let militaryHours = parseInt(hours, 10);

      if (period === "PM" && militaryHours !== 12) {
        militaryHours += 12;
      } else if (period === "AM" && militaryHours === 12) {
        militaryHours = 0;
      }

      return `${militaryHours.toString().padStart(2, "0")}:${minutes}`;
    },
  },
  mounted() {
    this.sortBy = "";
    this.configurations();
    this.isPaid = localStorage.getItem("isPaid");
    this.companytype_value = localStorage.getItem("companytype_value");
    this.getFilters();
    this.getGroups();
    this.getfilterData();
    if (
      localStorage.getItem("active_date") === null ||
      localStorage.getItem("active_date") === ""
    ) {
      this.active_date = "oney";
    } else {
      var check_start_date_mounted = moment(
        String(localStorage.getItem("date_range_start_date"))
      );
      var check_end_date_mounted = moment(
        String(localStorage.getItem("date_range_end_date"))
      );
      var days_mounted =
        check_end_date_mounted.diff(check_start_date_mounted, "days") + 1;
      if (days_mounted == "365" || days_mounted == "366") {
        this.active_date = "oney";
      } else {
        this.active_date = localStorage.getItem("active_date");
      }
    }
  },
};
</script>
