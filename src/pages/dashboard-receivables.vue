/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section>

    <div v-if="new_loading" class="loader-wrapper">
      <div class="loading_css">
        <img src="assets/images/1.0/brand/Loader-GIF-Final.gif" class="img-fluid loader_css" height="40" width="40" />
      </div>
    </div>

    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-3 col-lg-12 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0">
            <div class="company_balance sales_cb new_title_sales_cb company_heading_title">
              <BackButton />
              <p>
                Total Receivables: <br /><strong><span class="font_sans">{{ symbol }}</span>
                  {{ this.grandTotal | formatNumberParties }}</strong>
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-12 col-12">
          <ul class="new_set_dropdown_with_gross">
            <li class="marginright25">
              <p class="heading_dropdown_gross-all">Due Filter</p>
              <ul class="sortby_filter only_filter_icon">
                <li v-for="(filter, key) in getFiltersForOutstandings" @click="activatedue(filter)"
                  :class="{ active: getFiltersDatahidden == `${filter}` }">
                  {{ filter }}
                </li>
              </ul>
            </li>
            <li class="marginright25">
              <p class="heading_dropdown_gross-all">Sort By</p>
              <div class="new_top_table_dropdown">
                <select @change="groupSelect($event)" name="" id=""
                  class="form-select salesFilter sales_receivables_dropdown commondropdownall"
                  v-model="getLedgerGroupsData">

                  <option v-for="group in getLedgerGroups" :value="group.ledgerGroupName">
                    {{ group.ledgerGroupName }}
                  </option>
                </select>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>

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
                          <input class="search_input" v-model="search" v-on:keyup="handleBlur" placeholder="Search" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-9 col-sm-12 col-12">
                    <ul class="dashboard_sales_dropdown new_search_export_button">
                      <li class="rigntmarginli">
                        <v-select v-model="value" :items="headers" label="Set Columns" multiple return-object>
                          <template v-slot:selection="{ item, index }">
                            <v-chip v-if="index === 0">
                              <span></span>
                            </v-chip>
                          </template>
                        </v-select>
                      </li>
                      <li class="mr-5" v-if="this.isWrite_isPaymentReminder">
                        <div v-if="isPaid == '' || isPaid == null" v-b-modal.customerstatus-popup>
                          <div class="set_pay_reminder">
                            <p class="setpayment_reminder">
                              <img src="assets/images/1.0/dashboard/reminder.svg"
                                class="img-fluid manage_reminders" />Manage Reminders
                              <img class="pdf_button_crown" src="/assets/images/1.0/brand/crown-color.svg"
                                loading="lazy" />
                            </p>
                          </div>
                        </div>
                        <!-- <div
                          v-else-if="this.parentUserId_get != ''">
                          <div class="set_pay_reminder">
                            <p class="setpayment_reminder">
                              <img
                                src="assets/images/1.0/dashboard/reminder.svg"
                                class="img-fluid manage_reminders"
                              />Manage Reminders123
                              <img
                                class="pdf_button_crown"
                              style="width: 14px;"
                                src="/assets/images/1.0/dashboard/lock-red.png"
                                loading="lazy"
                              />
                            </p>
                          </div>
                        </div> -->
                        <div v-else>
                          <router-link :to="{ name: 'manage-reminder' }">
                            <div class="set_pay_reminder">
                              <p class="setpayment_reminder">
                                <img src="assets/images/1.0/dashboard/reminder.svg"
                                  class="img-fluid manage_reminders" />Manage Reminders
                              </p>
                            </div>
                          </router-link>
                        </div>
                      </li>
                      <li v-else class="mr-5">
                        <a href="javascript:void(0);" @click="$bvModal.show('share_company_show')">
                          <div class="set_pay_reminder">
                            <p class="setpayment_reminder">
                              <img src="assets/images/1.0/dashboard/reminder.svg"
                                class="img-fluid manage_reminders" />Manage Reminders
                            </p>
                          </div>
                        </a>
                      </li>

                      <li class="mr-5" v-if="isWrite_isPaymentReminder">
                        <div v-if="isPaid == '' || isPaid == null" v-b-modal.customerstatus-popup>
                          <div class="set_pay_reminder">
                            <p class="setpayment_reminder">
                              <img src="assets/images/1.0/dashboard/payment-reminder.svg" class="img-fluid mr-1" />Set
                              Payment Reminders
                              <img class="pdf_button_crown" src="/assets/images/1.0/brand/crown-color.svg"
                                loading="lazy" />
                            </p>
                          </div>
                        </div>
                        <div v-else>
                          <div @click="demo(), (hideshowreminder_div = true)" class="set_pay_reminder">
                            <p class="setpayment_reminder">
                              <img src="assets/images/1.0/dashboard/payment-reminder.svg" class="img-fluid mr-1" />Set
                              Payment Reminders
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="mr-5" v-else>
                        <div @click="$bvModal.show('share_company_show')" class="set_pay_reminder">
                          <p class="setpayment_reminder">
                            <img src="assets/images/1.0/dashboard/payment-reminder.svg" class="img-fluid mr-1" />Set
                            Payment Reminders
                          </p>
                        </div>
                      </li>
                      <li v-if="isPaid == '' || isPaid == null" v-b-modal.customerstatus-popup>
                        <button type="button" @click="freeusergeneratePdf()" class="btn download_border_btn">
                          <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid" />View Pdf
                        </button>
                      </li>
                      <li v-else>
                        <button type="button" @click="generatePdf()"
                          class="btn download_border_btn without_crown_button_design">
                          <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid" />View Pdf
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="show_entries_for_table new_show_entries_for_table receivables_table_set EnableCheckBoxPortion">
                  <v-data-table v-model="selected" :page="currentPage" :pageCount="numberOfPages"
                    :headers="selectedHeaders" :items="outstanding" :options.sync="options"
                    :items-per-page="this.$store.state.Web1_Store.Sales_Receivable_itemsPerPage"
                    :server-items-length="totaloutstanding" :loading="loading" class="elevation-1 hidecheckbox"
                    must-sort :sort-by="null" :sort-desc="false"  :item-selectable="isSelectable" :show-select="this.remider_click" 
                    @update:sort-by="updateSort('by', $event)" @update:sort-desc="updateSort('desc', $event)"
                    ref="table" disable-pagination :hide-default-footer="true" :footer-props="{
                      'items-per-page-options': [10, 25, 50, 100],
                      'items-per-page-text': 'products per page',
                    }" item-key="ledgerName" @input="enterSelect($event)"  @pagination="StoredPage"
                    @update:items-per-page="updateItemsPerPage">

                    <template v-slot:top="{ pagination, options, updateOptions }">
                      <v-data-footer :pagination="pagination" :options="options"
                        :items-per-page-options="[10, 25, 50, 100]" @update:options="updateOptions"
                        items-per-page-text="$vuetify.dataTable.itemsPerPageText" />
                    </template>
                    <template v-slot:header.data-table-select="{ }">
    <th style="display: none"></th>
  </template>
                    <template v-slot:item.data-table-select="{ item, isSelected, select }">
    <v-checkbox 
    class="compact-checkbox DisabledCheckboxPortion"
    color="#7CB342"
   glow="false"
      :value="isSelected"
      @change="(val) => isSelectable(item) && select(val)"
      :disabled="!isSelectable(item)"
      :input-value="isSelected"
    ></v-checkbox>
  </template>

                    <template v-slot:item.ledgerName="{ item }">
                      <td>
                        <div v-if="isPaid == '' || isPaid == null">
                          <b-button class="vch_num_all_btn" v-b-modal.customerstatus-popup>{{ item.ledgerName
                          }}</b-button>
                        </div>
                        <div v-else>
                          <router-link class="onclick_details" :to="{
                            name: 'dashboard-receivables-ledger',
                            params: {
                              ledgerGuid: item.ledgerGuid,
                              ledger_name: item.ledgerName,
                              type: 'Sales',
                              filter_value: active_due,
                            },
                          }">
                            {{ item.ledgerName }}</router-link>
                        </div>

                        <div class="next_reminder" v-if="item.nextShootTime">
                          <img src="assets/images/1.0/dashboard/payment-reminder.svg" class="img-fluid mr-1"
                            height="15px" width="15px" />Next Reminder on {{ format_date(item.nextShootTime)
                            }}<span class="edit_reminder ml-2" v-if="isWrite_isPaymentReminder"
                            @click="edit_reminder(item.ledgerGuid, 'single')">Edit</span>
                        </div>

                      </td>
                    </template>
                    <template v-slot:item.balance="{ item }">
                      <td align="right">
                        <p>
                          <span class="font_sans">{{ symbol }}</span>
                          {{ item.closingBalance | formatNumberParties }}
                        </p>
                      </td>
                    </template>
                    <template v-slot:item.billCreditPeriod="{ item }">
                      <td>
                        <p>{{ item.billCreditPeriod }}</p>
                      </td>
                    </template>
                    <template v-slot:item.avgDays="{ item }">
                      <td>
                        <p>{{ item.avgDays }}</p>
                      </td>
                    </template>
                    <template v-slot:item.action="{ item }">
                      <td align="center">
                        <p class="pdf_a_download">
                          <img src="assets/images/1.0/svgs/pdf_download.svg" class="img-fluid" />
                          PDF
                        </p>
                      </td>
                    </template>
                  </v-data-table>
                </div>
                <template>
                  <div class="bottom_navigation-pagination set_receivables_pagination">
                    <v-pagination v-model="page" :length="numberOfPages" :total-visible="5"></v-pagination>
                  </div>
                </template>


              </v-app>
            </div>


          </div>
        </div>
      </div>

      <template>
        <div class="sendreminderdiv pt-3" v-if="hideshowreminder_div">
          <ul class="pr_btns m-0">
            <li class="">
              <button @click="cancel(), (hideshowreminder_div = false)" class="pr_cancel">
                Cancel
              </button>
            </li>
            <li class="">
              <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')" class="sendreminder_btn"
                :disabled="isActive"><img src="assets/images/1.0/dashboard/send-reminder.svg" class="img-fluid mr-2"
                  height="15px" width="15px" />Send Reminder</b-button>
            </li>
            <li class="">
              <b-button @click="$bvModal.show('scheduler')" class="schedule_reminder" :disabled="schedule_btn"><img
                  src="assets/images/1.0/dashboard/white-clock.svg" class="img-fluid mr-2" height="18px"
                  width="18px" />Schedule Reminder</b-button>
            </li>
          </ul>
        </div>
      </template>
    </div>

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
              <b-form-checkbox id="sms" name="sms" value="true" unchecked-value="false" class="sendreminde_text"
                v-model="sms_checkbox">
                SMS
              </b-form-checkbox>
              <b-form-checkbox id="email" name="email" value="true" unchecked-value="false" class="sendreminde_text"
                v-model="email_checkbox">
                Email
              </b-form-checkbox>
            </div>
            <div class="email_sms_not_select_error" v-if="instant_error">
              <span>{{ this.instant_error }}</span>
            </div>
            <div class="pt-4 pb-4 include_checkbox">
              <b-form-checkbox id="due" name="due" value="true"  v-model="invoices_due">
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
    <div>
      <!--Model for Api Failed case-->
      <b-modal id="bv-modal-example-error" hide-footer centered>
        <template #modal-title class="title_reminder">
          Send Instant Reminders
        </template>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <p class="sendreminde_text text-center fw-bold">
              {{ sendReaminderError }}
            </p>



            <div class="centerbtn pt-3">
              <button class="popup_reminderbtn" @click="$bvModal.hide('bv-modal-example-error')">
                Close
              </button>
            </div>
          </div>
        </div>
      </b-modal>
    </div>

    <div>
      <b-modal id="scheduler" hide-footer centered>
        <template #modal-title class="title_reminder"> Set Date </template>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <p class="sendreminde_text">
              Livekeeping will remind parties on selected date.
            </p>
            <div class="sms_email pt-2">
              <b-form-checkbox id="sms" name="sms" value="true" class="sendreminde_text"
                v-model="schedule_sms_checkbox">
                SMS
              </b-form-checkbox>
              <b-form-checkbox id="email" name="email" value="true" class="sendreminde_text"
                v-model="schedule_email_checkbox">
                Email
              </b-form-checkbox>
            </div>
            <div class="email_sms_not_select_error" v-if="schedule_error">
              <span>{{ this.schedule_error }}</span>
            </div>
            <div class="pt-4 include_checkbox">
              <b-form-checkbox id="due" name="due" value="true" v-model="schedule_due_checkbox">
                Include invoices that are not due?
              </b-form-checkbox>
            </div>
            <div class="pt-4 pb-4 reminder_radio_set">
              <b-form-radio-group v-model="value_radio" :options="options_radio" name="radio-validation"
                class="radio_custom" @input="selectradiobtn()">
              </b-form-radio-group>
            </div>
            <div v-show="duedateshow">
              <p>Remind again, If not paid?</p>
              <div class="flex_reminder">
                <p>If not paid, Send reminder in every</p>
                <input placeholder="" class="days_input ml-2 mr-2" type="number" v-model="due_reminder_days" />
                <p>days.</p>
              </div>
              <div class="email_sms_not_select_error" v-if="due_days_error">
                <span>{{ this.due_days_error }}</span>
              </div>
            </div>
            <div v-show="dailyshow">

            </div>
            <div v-show="weeklyshow">
              <div class="weekseven pt-2">
                <div class="radio_container">
                  <input type="radio" v-model="week_days" value="Mon" id="one-a" />
                  <label for="one-a">Mon</label>
                  <input type="radio" v-model="week_days" value="Tue" id="two-a" />
                  <label for="two-a">Tue</label>
                  <input type="radio" v-model="week_days" value="Wed" id="three-a" />
                  <label for="three-a">Wed</label>
                  <input type="radio" v-model="week_days" value="Thu" id="four-a" />
                  <label for="four-a">Thu</label>
                  <input type="radio" v-model="week_days" value="Fri" id="five-a" />
                  <label for="five-a">Fri</label>
                  <input type="radio" v-model="week_days" value="Sat" id="six-a" />
                  <label for="six-a">Sat</label>
                  <input type="radio" v-model="week_days" value="Sun" id="seven-a" />
                  <label for="seven-a">Sun</label>
                </div>
              </div>
            </div>
            <div v-show="monthlyshow">
              <div class="monthly_raddesign">
                <input type="radio" id="ad-one" v-model="monthly_days" value="1" />
                <label for="ad-one">1</label>

                <input type="radio" id="ad-two" v-model="monthly_days" value="2" />
                <label for="ad-two">2</label>

                <input type="radio" id="ad-three" v-model="monthly_days" value="3" />
                <label for="ad-three">3</label>

                <input type="radio" id="ad-four" v-model="monthly_days" value="4" />
                <label for="ad-four">4</label>
                <input type="radio" id="ad-five" v-model="monthly_days" value="5" />
                <label for="ad-five">5</label>
                <input type="radio" id="ad-six" v-model="monthly_days" value="6" />
                <label for="ad-six">6</label>
                <input type="radio" id="ad-seven" v-model="monthly_days" value="7" />
                <label for="ad-seven">7</label>
                <input type="radio" id="ad-eight" v-model="monthly_days" value="8" />
                <label for="ad-eight">8</label>
                <input type="radio" id="ad-nine" v-model="monthly_days" value="9" />
                <label for="ad-nine">9</label>
                <input type="radio" id="ad-ten" v-model="monthly_days" value="10" />
                <label for="ad-ten">10</label>
                <input type="radio" id="at-one" v-model="monthly_days" value="11" />
                <label for="at-one">11</label>
                <input type="radio" id="at-two" v-model="monthly_days" value="12" />
                <label for="at-two">12</label>
                <input type="radio" id="at-three" v-model="monthly_days" value="13" />
                <label for="at-three">13</label>
                <input type="radio" id="at-four" v-model="monthly_days" value="14" />
                <label for="at-four">14</label>
                <input type="radio" id="at-five" v-model="monthly_days" value="15" />
                <label for="at-five">15</label>
                <input type="radio" id="at-six" v-model="monthly_days" value="16" />
                <label for="at-six">16</label>
                <input type="radio" id="at-seven" v-model="monthly_days" value="17" />
                <label for="at-seven">17</label>
                <input type="radio" id="at-eight" v-model="monthly_days" value="18" />
                <label for="at-eight">18</label>
                <input type="radio" id="at-nine" v-model="monthly_days" value="19" />
                <label for="at-nine">19</label>
                <input type="radio" id="at-ten" v-model="monthly_days" value="20" />
                <label for="at-ten">20</label>
                <input type="radio" id="aa-one" v-model="monthly_days" value="21" />
                <label for="aa-one">21</label>
                <input type="radio" id="aa-two" v-model="monthly_days" value="22" />
                <label for="aa-two">22</label>
                <input type="radio" id="aa-three" v-model="monthly_days" value="23" />
                <label for="aa-three">23</label>
                <input type="radio" id="aa-four" v-model="monthly_days" value="24" />
                <label for="aa-four">24</label>
                <input type="radio" id="aa-five" v-model="monthly_days" value="25" />
                <label for="aa-five">25</label>
                <input type="radio" id="aa-six" v-model="monthly_days" value="26" />
                <label for="aa-six">26</label>
                <input type="radio" id="aa-seven" v-model="monthly_days" value="27" />
                <label for="aa-seven">27</label>
                <input type="radio" id="aa-eight" v-model="monthly_days" value="28" />
                <label for="aa-eight">28</label>
              </div>
            </div>
            <div class="email_sms_not_select_error" v-if="schedule_select">
              <span>{{ this.schedule_select }}</span>
            </div>
            <div class="centerbtn pt-3 pb-3">

              <button class="popup_reminderbtn" @click="scheduleReminder" :disabled="isScheduling">
                {{ isScheduling ? 'Saving...' : 'Save' }}
              </button>
            </div>
          </div>
        </div>
      </b-modal>
    </div>

    <div>
      <b-modal id="edit_reminder" centered hide-footer ref="modaledit_hide">
        <template #modal-title class="title_reminder"> Set Date </template>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <p class="sendreminde_text">
              Livekeeping will remind parties on selected date.
            </p>
            <div class="sms_email pt-2">
              <b-form-checkbox id="sms" name="sms" class="sendreminde_text" v-model="edit_sms_checkbox">
                SMS
              </b-form-checkbox>
              <b-form-checkbox id="email" name="email" class="sendreminde_text" v-model="edit_email_checkbox">
                Email
              </b-form-checkbox>
            </div>
            <div class="email_sms_not_select_error" v-if="edit_schedule_error">
              <span>{{ this.edit_schedule_error }}</span>
            </div>
            <div class="pt-4 include_checkbox">
              <b-form-checkbox id="due" name="due" value="true" unchecked-value="false" v-model="edit_due_checkbox">
                Include invoices that are not due?
              </b-form-checkbox>
            </div>
            <div class="pt-4 pb-4 radio_custom reminder_radio_set">
              <b-form-radio-group v-model="value_editpop" :options="options_radioedit" name="radio-validation"
                class="radio_custom" @input="selectradiobtnedit()">
              </b-form-radio-group>
            </div>
            <div>
              <div v-show="duedateshowedit">
                <p>Remind again, If not paid?</p>
                <div class="flex_reminder">
                  <p>If not paid, Send reminder in every</p>
                  <input placeholder="" class="days_input ml-2 mr-2" type="number" v-model="edit_due_number" />
                  <p>days.</p>
                </div>
                <div class="email_sms_not_select_error" v-if="edit_due_days_error">
                  <span>{{ this.edit_due_days_error }}</span>
                </div>
              </div>
              <div v-show="dailyshowedit"></div>
              <div v-show="weeklyshowedit">
                <div class="weekseven pt-2">

                  <div class="radio_container">
                    <input type="radio" name="radio" value="Mon" v-model="edit_week_days" id="one" checked />
                    <label for="one">Mon</label>
                    <input type="radio" name="radio" value="Tue" v-model="edit_week_days" id="two" />
                    <label for="two">Tue</label>
                    <input type="radio" name="radio" value="Wed" v-model="edit_week_days" id="three" />
                    <label for="three">Wed</label>
                    <input type="radio" name="radio" value="Thu" v-model="edit_week_days" id="four" />
                    <label for="four">Thu</label>
                    <input type="radio" name="radio" value="Fri" v-model="edit_week_days" id="five" />
                    <label for="five">Fri</label>
                    <input type="radio" name="radio" value="Sat" v-model="edit_week_days" id="six" />
                    <label for="six">Sat</label>
                    <input type="radio" name="radio" value="Sun" v-model="edit_week_days" id="seven" />
                    <label for="seven">Sun</label>
                  </div>
                </div>
              </div>
              <div v-show="monthlyshowedit">
                <div class="monthly_raddesign">
                  <input type="radio" id="d-one" v-model="edit_month_days" name="month" value="1" />
                  <label for="d-one">1</label>
                  <input type="radio" id="d-two" v-model="edit_month_days" name="month" value="2" />
                  <label for="d-two">2</label>
                  <input type="radio" id="d-three" v-model="edit_month_days" name="month" value="3" />
                  <label for="d-three">3</label>
                  <input type="radio" id="d-four" v-model="edit_month_days" name="month" value="4" />
                  <label for="d-four">4</label>
                  <input type="radio" id="d-five" v-model="edit_month_days" name="month" value="5" />
                  <label for="d-five">5</label>
                  <input type="radio" id="d-six" v-model="edit_month_days" name="month" value="6" />
                  <label for="d-six">6</label>
                  <input type="radio" id="d-seven" v-model="edit_month_days" name="month" value="7" />
                  <label for="d-seven">7</label>
                  <input type="radio" id="d-eight" v-model="edit_month_days" name="month" value="8" />
                  <label for="d-eight">8</label>
                  <input type="radio" id="d-nine" v-model="edit_month_days" name="month" value="9" />
                  <label for="d-nine">9</label>
                  <input type="radio" id="d-ten" v-model="edit_month_days" name="month" value="10" />
                  <label for="d-ten">10</label>
                  <input type="radio" id="t-one" v-model="edit_month_days" name="month" value="11" />
                  <label for="t-one">11</label>
                  <input type="radio" id="t-two" v-model="edit_month_days" name="month" value="12" />
                  <label for="t-two">12</label>
                  <input type="radio" id="t-three" v-model="edit_month_days" name="month" value="13" />
                  <label for="t-three">13</label>
                  <input type="radio" id="t-four" v-model="edit_month_days" name="month" value="14" />
                  <label for="t-four">14</label>
                  <input type="radio" id="t-five" v-model="edit_month_days" name="month" value="15" />
                  <label for="t-five">15</label>
                  <input type="radio" id="t-six" v-model="edit_month_days" name="month" value="16" />
                  <label for="t-six">16</label>
                  <input type="radio" id="t-seven" v-model="edit_month_days" name="month" value="17" />
                  <label for="t-seven">17</label>
                  <input type="radio" id="t-eight" v-model="edit_month_days" name="month" value="18" />
                  <label for="t-eight">18</label>
                  <input type="radio" id="t-nine" v-model="edit_month_days" name="month" value="19" />
                  <label for="t-nine">19</label>
                  <input type="radio" id="t-ten" v-model="edit_month_days" name="month" value="20" />
                  <label for="t-ten">20</label>
                  <input type="radio" id="a-one" v-model="edit_month_days" name="month" value="21" />
                  <label for="a-one">21</label>
                  <input type="radio" id="a-two" v-model="edit_month_days" name="month" value="22" />
                  <label for="a-two">22</label>
                  <input type="radio" id="a-three" v-model="edit_month_days" name="month" value="23" />
                  <label for="a-three">23</label>
                  <input type="radio" id="a-four" v-model="edit_month_days" name="month" value="24" />
                  <label for="a-four">24</label>
                  <input type="radio" id="a-five" v-model="edit_month_days" name="month" value="25" />
                  <label for="a-five">25</label>
                  <input type="radio" id="a-six" v-model="edit_month_days" name="month" value="26" />
                  <label for="a-six">26</label>
                  <input type="radio" id="a-seven" v-model="edit_month_days" name="month" value="27" />
                  <label for="a-seven">27</label>
                  <input type="radio" id="a-eight" v-model="edit_month_days" name="month" value="28" />
                  <label for="a-eight">28</label>
                </div>
              </div>
            </div>
            <div class="email_sms_not_select_error" v-if="edit_schedule_select">
              <span>{{ this.edit_schedule_select }}</span>
            </div>
            <div class="centerbtn pt-3 pb-3">
              <input type="hidden" v-model="edit_guid" />
              <input type="hidden" v-model="edit_id" />

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
                  <button class="only_text_btn_y" @click="remove_payment_reminder()">
                    Yes
                  </button>
                  <button class="only_text_btn_n ml-4" @click="showremovereminder = false">
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-modal>
    </div>


    <div>

    </div>

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

  </section>
</template>

<script>
import Vue from "vue";
var numeral = require("numeral");

Vue.filter("formatNumberParties", function (value) {

  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(
    value
  );
});

import moment from "moment";
import Api from "@/Api";
import Common from "@/Common";
import GoogleAnalytics from "@/GoogleAnalytics";
import DateRangePicker from "vue2-daterange-picker";
import BackButton from "../components/BackButton.vue";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  name: "daybook",
  components: {
    DateRangePicker,
    BackButton
  },
  data() {
    let startDate = moment(
      String(localStorage.getItem("date_range_start_date"))
    );
    let endDate = moment(String(localStorage.getItem("date_range_end_date")));
    return {
      sendReaminderError: '',
      sms_checkbox: true,
      email_checkbox: true,
      invoices_due: true,
      schedule_sms_checkbox: true,
      parentUserId_get: '',
      schedule_email_checkbox: true,
      schedule_due_checkbox: true,
      showremovereminder: false,
      active_el: "All Receivables",
      active_due: "All",
      active_date: "oney",
      startDate: startDate,
      endDate: endDate,
      getFiltersData: "All",
      getFiltersDatahidden: "All",
      getLedgerGroupsData: this.$store.state.Web1_Store.FilterForReceivables,
      getFiltersForOutstandings: [],
      getLedgerGroups: [],
      dateRange: { startDate, endDate },
      companytype_value: "",
      defaultRanges: {

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
        { text: "Name", value: "ledgerName", align: "left", sortable: true },
        { text: "Credit Days", value: "billCreditPeriod" },
        { text: "Average Pay Days", value: "avgDays" },
        { text: "Due Amount", value: "balance", align: "right" },

      ],
      page: this.$store.state.Web1_Store.Sales_Receivable_page,
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
      orderBy: 1,
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
      edit_sms_checkbox: false,
      edit_email_checkbox: false,
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
      isWrite_isPaymentReminder: true,

      scheduleArray: [],
      updateArray: [],

      isScheduling: false,
    };
  },

  watch: {
    page: function () {
      this.options.page = this.page;
      this.outstanding_data();
      GoogleAnalytics.receivables_screen_pagination(this.options.page);
    },
    "options.itemsPerPage"() {

      setTimeout(() => {
        const StartIndex = (this.$store.state.Web1_Store.Sales_Receivable_page - 1) * this.$store.state.Web1_Store.Sales_Receivable_itemsPerPage
        const endIndex = StartIndex + this.$store.state.Web1_Store.Sales_Receivable_itemsPerPage
        const Difference = endIndex - this.totalsalecustomer

        if (Difference > this.totalsalecustomer) {

          this.page = 1
          this.options.page = 1

        }
        else {
          this.page = this.$store.state.Web1_Store.Sales_Receivable_page
          this.options.page = this.page;

        }

      }, 1000);
      this.outstanding_data();
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

    },
    options: {
      handler() {

        GoogleAnalytics.receivables_listing();
      },
    },
    deep: true,
  },
  created() {
    this.selectedHeaders = this.headers;
  },
  computed: {
    currentPage() {
      return this.$store.state.Web1_Store.Sales_Receivable_page;
    },

  },
  methods: {
    isSelectable(item) {
    return !!item.ledgerMobile; // Disables if no mobile number
  },
    freeusergeneratePdf() {
      GoogleAnalytics.receivables_screen_viewpdf("viewpdf");
    },
    StoredPage(newValue) {
      this.$store.dispatch('Web1_Store/setSalesReceivablePage', newValue.page)


    },
    updateItemsPerPage(newValue) {
      this.$store.dispatch('Web1_Store/setSalesReceivableItemsPerPage', newValue)


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
        startDate: moment(String(localStorage.getItem("date_range_start_date"))).format("yyyy-MM-DD"),
        endDate:  moment(String(localStorage.getItem("date_range_end_date"))).format("yyyy-MM-DD"),
        rangeValue: parseInt(this.rangeValue),
        currencySymbol: localStorage.getItem("symbol"),
        outstandingType: "Receivables",
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        groupBy: this.getLedgerGroupsData,
        searchTerm: "",
        seletedLedgers: [],
        sortBy: this.sortBy,
        orderBy: parseInt(this.orderBy),
        deviceType: "WEB",
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgerOutstandingsPDF(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            if (response.data.status == "200") {

              this.pdfUrl = response.data.data.pdf;

              localStorage.setItem("pdfUrl", this.pdfUrl);
              window.open(window.location.origin + "/pdfNew");

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
      this.active_el = this.$store.state.Web1_Store.FilterForReceivables
      this.getLedgerGroupsData = this.$store.state.Web1_Store.FilterForReceivables;
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

      if (this.getLedgerGroupsData == "All Receivables") {
        this.GroupsDataArray = this.getLedgerGroupsData;

      } else {

        this.GroupsDataArray = this.getLedgerGroupsData;

      }

      const { page, itemsPerPage } = this.options;
      let pageNumber = page - 1;
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        outstandingType: "Receivables",
        filterBy: this.getFiltersDatahidden,
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        requestFrom: "WEB",
        startDate: localStorage.getItem("date_range_start_date"),
        endDate: localStorage.getItem("date_range_end_date"),
        searchTerm: this.search,

        groupBy: this.GroupsDataArray,
        rangeValue: parseInt(this.rangeValue),
        sortBy: this.sortBy,
        orderBy: parseInt(this.orderBy),

      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getLedgerOutstandings_v1(data, headers)
        .then((response) => {

          const responseStatus = Common.getStatusForActionFailed(response.data.status)
          if (responseStatus == "200") {
            for (let [key, value] of Object.entries(
              response.data.data.list
            )) {
              response.data.data.list[key].closingBalance = Math.abs(
                response.data.data.list[key].closingBalance
              );
              //   if(this.getFiltersDatahidden == "All"){
              //     response.data.data.list[key].closingBalance = Math.abs(
              //       response.data.data.list[key].closingBalance
              //     );

              //  }
              //  else if (this.getFiltersDatahidden == "Due Today" || this.getFiltersDatahidden == "Not Due") {
              //    response.data.data.list[key].closingBalance = Math.abs(
              //       response.data.data.list[key].billClAmount)

              //  }
              //  else{
              //   response.data.data.list[key].closingBalance = Math.abs(
              //       response.data.data.list[key].additionalBillClAmount)


              // }
            }
            let totalPages = Math.ceil(
              response.data.data.totalCount / itemsPerPage
            );
            this.loading = false;
            this.new_loading = false;
            this.outstanding = response.data.data.list;
            this.outstanding.map(item => ({
  ...item,
  allow: false
}));
            this.totaloutstanding = response.data.data.totalCount;
            this.numberOfPages = totalPages;
            this.grandTotal = Math.abs(response.data.data.totalClosingBalance);
          } else {
            this.loading = false;
            this.new_loading = false;
            this.outstanding = [];
            this.totaloutstanding = 0;
            this.numberOfPages = 0;
            this.grandTotal = 0;
          }

        })

        .catch((err) => {

          Common.getStatusForActionFailed(err.response.status)
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
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        requestFrom: "WEB",
        isCustomFilter: false
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getCustomDueFilters_v1(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            this.getFiltersForOutstandings = [];
            for (let [key, value] of Object.entries(
              response.data.data
            )) {
              if (value.isRange != "0") {
                this.getFiltersForOutstandings.push(">" + value.value);
              }
              else {
                this.getFiltersForOutstandings.push(value.value);
              }
            }

          }
        })

        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },
    getGroups() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        requestFrom: "WEB",

        masterReservedName: ["Sundry Creditors", "Sundry Debtors"],
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getLedgerGroupsByCompanyIdGo(data, headers)

        .then((response) => {

          const responseStatus = Common.getStatusForActionFailed(response.data.status)

          if (responseStatus == "200") {
            const Receivables = {
              ledgerId: "",
              ledgerGroupName: "All Receivables",
              parentgroup: "",
            };
            this.getLedgerGroups = response.data.data.list;
            this.getLedgerGroups.splice(0, 0, Receivables);
            const storedLedgerGroup = this.$store.state.Web1_Store.FilterForReceivables;
            const matchedItem = this.getLedgerGroups.find(
              (item) => item.ledgerGroupName === storedLedgerGroup
            );

            this.getLedgerGroupsData = matchedItem
              ? matchedItem.ledgerGroupName
              : this.getLedgerGroups[0].ledgerGroupName;

          } else {
            const Receivables = {
              ledgerId: "",
              ledgerGroupName: "All Receivables",
              parentgroup: "",
            };

            // Ensure the list exists before modifying it
            if (!this.getLedgerGroups) {
              this.getLedgerGroups = [];
            }

            this.getLedgerGroups.splice(0, 0, Receivables);

            // Get stored ledger group from Vuex
            const storedLedgerGroup = this.$store.state.Web1_Store.FilterForReceivables;

            // Find if the stored ledger group exists
            const matchedItem = this.getLedgerGroups.find(
              (item) => item.ledgerGroupName === storedLedgerGroup
            );

            // Set the selected ledger group based on store
            this.getLedgerGroupsData = matchedItem
              ? matchedItem.ledgerGroupName
              : this.getLedgerGroups[0].ledgerGroupName;
          }
        })

        .catch((err) => {

          Common.getStatusForActionFailed(err.response.status)
          this.loading = false;
          this.new_loading = false;
        });
    },

    groupSelect(event) {
      this.getLedgerGroupsData = event.target.value;
      this.$store.dispatch('Web1_Store/setFilterForReceivables', this.getLedgerGroupsData)
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

    },

    handleBlur() {
      const type = "search";
      GoogleAnalytics.receivables_screen_search(this.search);
      this.outstanding_data(type);
    },
    demo() {
      this.remider_click = true;
      GoogleAnalytics.setPaymentReminder()
    },
    cancel() {
      this.remider_click = false;
      this.selected = [];
    },
    enterSelect(event) {
      if (this.selected.length == 0) {
        this.isActive = true;
        this.schedule_btn = true;

      } else {
        this.ledger_array = [];
        this.scheduleArray = [];
        this.updateArray = [];
        for (let [key, value] of Object.entries(event)) {

          this.ledger_array.push({
            ledgerGuid: value.ledgerGuid,
            isSchedule: value.isSchedule,
          });
        }

        this.selected_count = this.ledger_array.length;

        this.isActive = false;
        this.schedule_btn = false;
      }

    },
    async send_instant() {

      const instantArray = [];
      this.ledger_array.forEach((element) => {
        instantArray.push(element.ledgerGuid);
      });

      if (this.sms_checkbox == "false" && this.email_checkbox == "false") {
        this.instant_error = "Please select SMS or Email";
      } else {
        if (localStorage.getItem("_parentUserId") != "") {
          var data = {
            requestFrom: "WEB",
            ledgerGuid: instantArray,
            mainUserId: localStorage.getItem("_parentUserId"),
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
        } else {
          var data = {
            requestFrom: "WEB",
            ledgerGuid: instantArray,
            mainUserId: localStorage.getItem("customerId"),
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
        }

        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        try {
          const response = await Api.paymentReminder(data, headers);
          console.log(response, 'response');

          if (response.status == 200) {  // Ensure status is a string if API returns it that way
            console.log(response, "gavamart");
            this.sendReaminderError = "Payment reminder sent successfully ";
            this.$bvModal.hide('bv-modal-example');
            this.$bvModal.show('bv-modal-example-error');
            setTimeout(() => {
              this.$router.go(); // Reloads the page
            }, 3000)

          }


        } catch (err) {

          this.sendReaminderError = err.response.data.message || 'Network error';
          this.$bvModal.hide('bv-modal-example');
          this.$bvModal.show('bv-modal-example-error');
          Common.getStatusForActionFailed(err.response.status);
        }
      }
      GoogleAnalytics.sendPaymentReminder()

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

    async schedule_button(label) {

      if (this.isScheduling) return;

      this.isScheduling = true;


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

        if (localStorage.getItem("_parentUserId") != "") {
          var data = {
            requestFrom: "WEB",
            mainUserId: localStorage.getItem("_parentUserId"),
            ledgerGuid: this.scheduleArray,
            _userId: localStorage.getItem("customerId"),
            company_id: localStorage.getItem("companyId"),
            schedularType: this.schedulerType,
            scheduleTime:
              this.scheduleTime !== ""
                ? this.convertTo24HourFormat(this.scheduleTime)
                : "11:00",

            scheduleDay: this.scheduledDay,
            includedNotDueBills: Boolean(this.schedule_due_checkbox),
            channelSubscribed: {
              sms: JSON.parse(this.schedule_sms_checkbox),
              email: JSON.parse(this.schedule_email_checkbox),
              whatsApp: false,
              notification: false,
            },
          };
        } else {
          var data = {
            requestFrom: "WEB",
            mainUserId: localStorage.getItem("customerId"),
            ledgerGuid: this.scheduleArray,
            _userId: localStorage.getItem("customerId"),
            company_id: localStorage.getItem("companyId"),
            schedularType: this.schedulerType,
            scheduleTime:
              this.scheduleTime !== ""
                ? this.convertTo24HourFormat(this.scheduleTime)
                : "11:00",

            scheduleDay: this.scheduledDay,
            includedNotDueBills: Boolean(this.schedule_due_checkbox),
            channelSubscribed: {
              sms: JSON.parse(this.schedule_sms_checkbox),
              email: JSON.parse(this.schedule_email_checkbox),
              whatsApp: false,
              notification: false,
            },
          };
        }




        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        // Api.setPaymentReminder(data, headers)

        //   .then((response) => {

        //     if (label == "single") {
        //       this.$router.go();
        //     }

        //   })
        //   .catch((err) => {
        //     Common.getStatusForActionFailed(err.response.status);
        //     this.loading = false;
        //     this.isScheduling = false;

        //   });
        try {
          const response = await Api.setPaymentReminder(data, headers);
          console.log(response, 'response');

          if (response.status == 200) {  // Ensure status is a string if API returns it that way
            console.log(response, "gavamart");
            this.sendReaminderError = "Payment reminder sent successfully ";
            this.$bvModal.hide('scheduler');
            this.$bvModal.show('bv-modal-example-error');
            setTimeout(() => {
              this.$router.go(); // Reloads the page
            }, 3000)

          }


        } catch (err) {

          this.sendReaminderError = err.response.data.message || 'Network error';
          this.$bvModal.hide('scheduler');
          this.$bvModal.show('bv-modal-example-error');
          Common.getStatusForActionFailed(err.response.status);
        }
      }
      GoogleAnalytics.schedulePaymentReminder()
    },
    formatNumber(number) {
      return number < 10 ? `0${number}` : `${number}`;
    },
    edit_reminder(guid, label) {
      if (localStorage.getItem("_parentUserId") != "") {
        var data = {
          company_id: localStorage.getItem("companyId"),
          requestFrom: "WEB",
          ledgerGuid: guid,
          _userId: localStorage.getItem("customerId"),
          mainUserId: localStorage.getItem("_parentUserId")
        };
      } else {
        var data = {
          company_id: localStorage.getItem("companyId"),
          requestFrom: "WEB",
          ledgerGuid: guid,
          _userId: localStorage.getItem("customerId"),
          mainUserId: localStorage.getItem("customerId"),
        };
      }

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getReminderSettings(data, headers)
        .then((response) => {
          // debugger;
          this.reminderSettingsData = response.data.data;
          this.edit_sms_checkbox =
            this.reminderSettingsData.ChannelSubscribed.sms;
          this.edit_email_checkbox =
            this.reminderSettingsData.channelSubscribed.email;
          this.edit_due_checkbox =
            this.reminderSettingsData.includedNotDueBills;
          this.edit_ledgerGuid = this.reminderSettingsData.ledgerGuid;

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

          this.edit_id.push(this.reminderSettingsData.ledgerGuid);

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
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
    },
    update_click(label) {
      console.log('im here gavas stage 1')
      // debugger;
      if (this.isScheduling) return;
      this.isScheduling = true;

      if (
        this.edit_sms_checkbox == false &&
        this.edit_email_checkbox == false
      ) {
        this.edit_schedule_error = "Please select SMS or Email";
        this.isScheduling = false; // Set to false when condition is false
      } else if (this.value_editpop == "" || this.value_editpop == null) {
        this.schedule_select = "Please select any one option";
        this.isScheduling = false; // Set to false when condition is false
      } else {
        if (this.value_editpop == "duedateedit") {
          // BILL_DUE_DATE
          this.edit_schedulerType = "BILL_DUE_DATE";
          if (this.edit_due_number === "") {
            this.edit_due_days_error = "Please enter days for send on bill due date";
            this.isScheduling = false; // Set to false when condition is false
            return;
          }
          if (this.edit_due_number === "0") {
            this.edit_due_days_error = "Please enter more than 0 days";
            this.isScheduling = false; // Set to false when condition is false
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

        if (!this.isScheduling) return; // Return if isScheduling is already set to false

        if (this.isScheduling) {

          this.FinalUpdateReminder(label);
        }
      }
    },

    async FinalUpdateReminder(label) {
      console.log('im here gavask')
      if (localStorage.getItem("_parentUserId") != "") {
        var data = {
          requestFrom: "WEB",
          ledgerGuid: this.edit_id,
          mainUserId: localStorage.getItem("_parentUserId"),
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          schedularType: this.edit_schedulerType,
          scheduleTime:
            this.scheduleTime !== ""
              ? this.convertTo24HourFormat(this.scheduleTime)
              : "11:00",

          scheduleDay: this.edit_scheduledDay,
          includedNotDueBills: JSON.parse(this.edit_due_checkbox),
          channelSubscribed: {
            sms: JSON.parse(this.edit_sms_checkbox),
            email: JSON.parse(this.edit_email_checkbox),
            whatsApp: false,
            notification: false,
          },
        };
      } else {
        var data = {
          requestFrom: "WEB",
          ledgerGuid: this.edit_id,
          mainUserId: localStorage.getItem("customerId"),
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          schedularType: this.edit_schedulerType,
          scheduleTime:
            this.scheduleTime !== ""
              ? this.convertTo24HourFormat(this.scheduleTime)
              : "11:00",

          scheduleDay: this.edit_scheduledDay,
          includedNotDueBills: JSON.parse(this.edit_due_checkbox),
          channelSubscribed: {
            sms: JSON.parse(this.edit_sms_checkbox),
            email: JSON.parse(this.edit_email_checkbox),
            whatsApp: false,
            notification: false,
          },
        };
      }

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      // Api.setPaymentReminder(data, headers)
      //   .then((response) => {
      //     this.isScheduling = false;
      //     if (label == "single") {
      //       this.$router.go();
      //     }

      //   })
      //   .catch((err) => {
      //     Common.getStatusForActionFailed(err.response.status);
      //     this.isScheduling = false;
      //     this.loading = false;
      //   });
      try {
        const response = await Api.setPaymentReminder(data, headers);
        console.log(response, 'response');

        if (response.status == 200) {  // Ensure status is a string if API returns it that way


          this.$bvModal.hide('edit_reminder');

          this.sendReaminderError = "Payment reminder set successfully ";
          this.$bvModal.hide('scheduler');
          this.$bvModal.show('bv-modal-example-error');
          setTimeout(() => {
            this.$router.go(); // Reloads the page
          }, 3000)

        }


      } catch (err) {
        this.$bvModal.hide('edit_reminder');
        this.sendReaminderError = err.response.data.message || 'Network error';
        this.$bvModal.hide('scheduler');
        this.$bvModal.show('bv-modal-example-error');
        Common.getStatusForActionFailed(err.response.status);
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

            this.defaultEmailTemplateId =
              response.data.data.paymentReminder.defaultEmailTemplateId;
            this.defaultSMSTemplateId =
              response.data.data.paymentReminder.defaultSMSTemplateId;
            this.defaultTimeToSendreminders =
              response.data.data.paymentReminder.defaultTimeToSendreminders;
            this.scheduleTime =
              response.data.data.paymentReminder.defaultTimeToSendreminders;


          }
        })
        .catch((err) => {
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
    const queryParams = this.$route.query;
    if (queryParams) {
      if (queryParams.allDue) {
        this.activatedue("All Due");
      }
      else if (queryParams.todayDue) {
        this.activatedue("Due Today");
      }
      else if (queryParams.notDue) {
        this.activatedue("Not Due");
      }
      else {
        console.log("NOT WORKING");
      }
    }
    this.isPaid = localStorage.getItem("isPaid");
    this.isWrite_isPaymentReminder = localStorage.getItem("isWrite_isPaymentReminder") === 'true' ? true : false;
    // alert(this.isWrite_isPaymentReminder);
    this.companytype_value = localStorage.getItem("companytype_value");
    setTimeout(() => {
      this.parentUserId_get = localStorage.getItem("_parentUserId");
    }, 500);

    this.getFilters();
    this.getGroups();


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
<style>
.company_heading_title {
  display: flex !important;
  align-items: center;
}
.compact-checkbox {
  margin: 0px  !important;
  margin-bottom: -26px !important;
  padding: 0 !important;
}
.compact-checkbox.v-input--is-disabled {
  cursor: not-allowed !important; /* Ensures the cursor shows as not-allowed */
   /* Optional: Makes the disabled checkbox appear visually distinct */
}
.v-input.compact-checkbox.DisabledCheckboxPortion.v-input--is-disabled.theme--light.v-input--selection-controls.v-input--checkbox i.v-icon.notranslate.mdi.mdi-checkbox-blank-outline.theme--light {
    color: #b9b9b9 !important;
    cursor: not-allowed;
}
.EnableCheckBoxPortion i.v-icon.notranslate.mdi.mdi-checkbox-blank-outline.theme--light {
    color: #5c9ec9 !important;
}
.EnableCheckBoxPortion .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{
      -webkit-transform: scale(0.8);
    transform: scale(0.8);
    -webkit-transition: none;
    transition: none;
    opacity: 0.1 !important;
}

</style>
