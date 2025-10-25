/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section>
   
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
   
    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-3 col-lg-12 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0">
            <div class="company_balance sales_cb new_title_sales_cb">
              <p>
                Total Payables: <br /><strong
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
                  v-for="(filter, key) in getFiltersForOutstandings"
                  @click="activatedue(filter)"
                  :class="{ active: getFiltersDatahidden == `${filter}` }"
                >
                  {{ filter }}
                </li>
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
                 
                  <option
                    v-for="group in getLedgerGroups"
                    :value="group.ledgerGroupName"
                  >
                    {{ group.ledgerGroupName }}
                  </option>
                </select>
              </div>
            </li>
          
            <li class="">
              <p class="heading_dropdown_gross-all">Date Filter</p>
            
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

                      <li class="mr-5 reminder_display_none">
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
                <div class="show_entries_for_table new_show_entries_for_table">

                  <v-data-table
                    v-model="selected"
                    :page="currentPage"
                    :pageCount="numberOfPages"
                    :headers="selectedHeaders"
                    :items="outstanding"
                    :options.sync="options"
                    :items-per-page="
                      this.$store.state.Web1_Store.Payables_itemsPerPage
                    "
                    :server-items-length="totaloutstanding"
                    :loading="loading"
                    class="elevation-1 hidecheckbox"
                    must-sort
                    :show-select="this.remider_click"
                    :sort-by="null"
                    :sort-desc="false"
                    @update:sort-by="updateSort('by', $event)"
                    @update:sort-desc="updateSort('desc', $event)"
                    ref="table"
                    disable-pagination
                    :hide-default-footer="true"
                    @pagination="StoredPage"
                    @update:items-per-page="updateItemsPerPage"
                    :footer-props="{
                      'items-per-page-options': [10, 25, 50, 100],
                      'items-per-page-text': 'products per page',
                    }"
                    
                    item-key="name"
                    @input="enterSelect()"
                  >
                
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

                    <template v-slot:item.ledgerName="{ item }">
                      <td>
                        <div v-if="isPaid == '' || isPaid == null">
                          <b-button
                            class="vch_num_all_btn"
                            v-b-modal.customerstatus-popup
                            >{{ item.ledgerName }}</b-button
                          >
                        </div>
                        <div v-else>
                          <router-link
                            class="onclick_details"
                            :to="{
                              name: 'dashboard-payables-ledger-new',
                              params: {
                                ledgerGuid: item.ledgerGuid,
                                ledger_name: item.ledgerName,
                                type: 'Sales',
                                filter_value: active_due,
                              },
                            }"
                          >
                            {{ item.ledgerName }}</router-link
                          >
                        </div>
                        <div class="next_reminder reminder_display_none">
                          <img
                            src="assets/images/1.0/dashboard/payment-reminder.svg"
                            class="img-fluid mr-1"
                            height="15px"
                            width="15px"
                          />Next Reminder on 30 Dec 2022<span
                            class="edit_reminder ml-2"
                            @click="$bvModal.show('edit_reminder')"
                            >Edit</span
                          >
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
                  <div class="bottom_navigation-pagination">
                    <v-pagination
                      v-model="page"
                      :length="numberOfPages"
                      :total-visible="5"
                    ></v-pagination>
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

   
    <div>
      <b-modal id="bv-modal-example" hide-footer>
        <template #modal-title class="title_reminder">
          Send Instant Reminders
        </template>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <p class="sendreminde_text">
              Livekeeping will send instant reminder to your 2 Selected Parties.
            </p>
            <div class="sms_email pt-4">
              <b-form-checkbox
                id="sms"
                name="sms"
                value="accepted"
                unchecked-value="not_accepted"
                class="sendreminde_text"
              >
                SMS
              </b-form-checkbox>
              <b-form-checkbox
                id="email"
                name="email"
                value="accepted"
                unchecked-value="not_accepted"
                class="sendreminde_text"
              >
                Email
              </b-form-checkbox>
            </div>
            <div class="pt-4 pb-4">
              <b-form-checkbox
                id="due"
                name="due"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Include invoices that are not due?
              </b-form-checkbox>
            </div>
            <div class="centerbtn pt-3">
              <button class="popup_reminderbtn">Send Reminder</button>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
   
    <div>
      <b-modal id="scheduler" hide-footer>
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
                value="accepted"
                unchecked-value="not_accepted"
                class="sendreminde_text"
              >
                SMS
              </b-form-checkbox>
              <b-form-checkbox
                id="email"
                name="email"
                value="accepted"
                unchecked-value="not_accepted"
                class="sendreminde_text"
              >
                Email
              </b-form-checkbox>
            </div>
            <div class="pt-4">
              <b-form-checkbox
                id="due"
                name="due"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Include invoices that are not due?
              </b-form-checkbox>
            </div>
            <div class="pt-4 pb-4">
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
                />
                <p>days.</p>
              </div>
            </div>
            <div v-show="dailyshow">
             
            </div>
            <div v-show="weeklyshow">
              <div class="weekseven pt-2">
                <div class="radio_container">
                  <input type="radio" name="radio" id="one-a" checked />
                  <label for="one-a">Mon</label>
                  <input type="radio" name="radio" id="two-a" />
                  <label for="two-a">Tue</label>
                  <input type="radio" name="radio" id="three-a" />
                  <label for="three-a">Wed</label>
                  <input type="radio" name="radio" id="four-a" />
                  <label for="four-a">thu</label>
                  <input type="radio" name="radio" id="five-a" />
                  <label for="five-a">Fri</label>
                  <input type="radio" name="radio" id="six-a" />
                  <label for="six-a">Sat</label>
                  <input type="radio" name="radio" id="seven-a" />
                  <label for="seven-a">Sun</label>
                </div>
              </div>
            </div>
            <div v-show="monthlyshow">
              <div class="monthly_raddesign">
                <input type="radio" id="ad-one" name="month" value="" />
                <label for="ad-one">1</label>

                <input type="radio" id="ad-two" name="month" value="" />
                <label for="ad-two">2</label>

                <input type="radio" id="ad-three" name="month" value="" />
                <label for="ad-three">3</label>

                <input type="radio" id="ad-four" name="month" value="" />
                <label for="ad-four">4</label>
                <input type="radio" id="ad-five" name="month" value="" />
                <label for="ad-five">5</label>
                <input type="radio" id="ad-six" name="month" value="" />
                <label for="ad-six">6</label>
                <input type="radio" id="ad-seven" name="month" value="" />
                <label for="ad-seven">7</label>
                <input type="radio" id="ad-eight" name="month" value="" />
                <label for="ad-eight">8</label>
                <input type="radio" id="ad-nine" name="month" value="" />
                <label for="ad-nine">9</label>
                <input type="radio" id="ad-ten" name="month" value="" />
                <label for="ad-ten">10</label>
                <input type="radio" id="at-one" name="month" value="" />
                <label for="at-one">11</label>
                <input type="radio" id="at-two" name="month" value="" />
                <label for="at-two">12</label>
                <input type="radio" id="at-three" name="month" value="" />
                <label for="at-three">13</label>
                <input type="radio" id="at-four" name="month" value="" />
                <label for="at-four">14</label>
                <input type="radio" id="at-five" name="month" value="" />
                <label for="at-five">15</label>
                <input type="radio" id="at-six" name="month" value="" />
                <label for="at-six">16</label>
                <input type="radio" id="at-seven" name="month" value="" />
                <label for="at-seven">17</label>
                <input type="radio" id="at-eight" name="month" value="" />
                <label for="at-eight">18</label>
                <input type="radio" id="at-nine" name="month" value="" />
                <label for="at-nine">19</label>
                <input type="radio" id="at-ten" name="month" value="" />
                <label for="at-ten">20</label>
                <input type="radio" id="aa-one" name="month" value="" />
                <label for="aa-one">21</label>
                <input type="radio" id="aa-two" name="month" value="" />
                <label for="aa-two">22</label>
                <input type="radio" id="aa-three" name="month" value="" />
                <label for="aa-three">23</label>
                <input type="radio" id="aa-four" name="month" value="" />
                <label for="aa-four">24</label>
                <input type="radio" id="aa-five" name="month" value="" />
                <label for="aa-five">25</label>
                <input type="radio" id="aa-six" name="month" value="" />
                <label for="aa-six">26</label>
                <input type="radio" id="aa-seven" name="month" value="" />
                <label for="aa-seven">27</label>
                <input type="radio" id="aa-eight" name="month" value="" />
                <label for="aa-eight">28</label>
              </div>
            </div>
            <div class="centerbtn pt-4 pb-3">
              <button class="popup_reminderbtn">save</button>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
   
    <div>
      <b-modal id="edit_reminder" hide-footer ref="modaledit_hide">
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
                value="accepted"
                unchecked-value="not_accepted"
                class="sendreminde_text"
              >
                SMS
              </b-form-checkbox>
              <b-form-checkbox
                id="email"
                name="email"
                value="accepted"
                unchecked-value="not_accepted"
                class="sendreminde_text"
              >
                Email
              </b-form-checkbox>
            </div>
            <div class="pt-4">
              <b-form-checkbox
                id="due"
                name="due"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Include invoices that are not due?
              </b-form-checkbox>
            </div>
            <div class="pt-4 pb-4 radio_custom">
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
                  />
                  <p>days.</p>
                </div>
              </div>
              <div v-show="dailyshowedit"></div>
              <div v-show="weeklyshowedit">
                <div class="weekseven pt-2">
                 
                  <div class="radio_container">
                    <input type="radio" name="radio" id="one" checked />
                    <label for="one">Mon</label>
                    <input type="radio" name="radio" id="two" />
                    <label for="two">Tue</label>
                    <input type="radio" name="radio" id="three" />
                    <label for="three">Wed</label>
                    <input type="radio" name="radio" id="four" />
                    <label for="four">thu</label>
                    <input type="radio" name="radio" id="five" />
                    <label for="five">Fri</label>
                    <input type="radio" name="radio" id="six" />
                    <label for="six">Sat</label>
                    <input type="radio" name="radio" id="seven" />
                    <label for="seven">Sun</label>
                  </div>
                </div>
              </div>
              <div v-show="monthlyshowedit">
                <div class="monthly_raddesign">
                  <input type="radio" id="d-one" name="month" value="" />
                  <label for="d-one">1</label>
                  <input type="radio" id="d-two" name="month" value="" />
                  <label for="d-two">2</label>
                  <input type="radio" id="d-three" name="month" value="" />
                  <label for="d-three">3</label>
                  <input type="radio" id="d-four" name="month" value="" />
                  <label for="d-four">4</label>
                  <input type="radio" id="d-five" name="month" value="" />
                  <label for="d-five">5</label>
                  <input type="radio" id="d-six" name="month" value="" />
                  <label for="d-six">6</label>
                  <input type="radio" id="d-seven" name="month" value="" />
                  <label for="d-seven">7</label>
                  <input type="radio" id="d-eight" name="month" value="" />
                  <label for="d-eight">8</label>
                  <input type="radio" id="d-nine" name="month" value="" />
                  <label for="d-nine">9</label>
                  <input type="radio" id="d-ten" name="month" value="" />
                  <label for="d-ten">10</label>
                  <input type="radio" id="t-one" name="month" value="" />
                  <label for="t-one">11</label>
                  <input type="radio" id="t-two" name="month" value="" />
                  <label for="t-two">12</label>
                  <input type="radio" id="t-three" name="month" value="" />
                  <label for="t-three">13</label>
                  <input type="radio" id="t-four" name="month" value="" />
                  <label for="t-four">14</label>
                  <input type="radio" id="t-five" name="month" value="" />
                  <label for="t-five">15</label>
                  <input type="radio" id="t-six" name="month" value="" />
                  <label for="t-six">16</label>
                  <input type="radio" id="t-seven" name="month" value="" />
                  <label for="t-seven">17</label>
                  <input type="radio" id="t-eight" name="month" value="" />
                  <label for="t-eight">18</label>
                  <input type="radio" id="t-nine" name="month" value="" />
                  <label for="t-nine">19</label>
                  <input type="radio" id="t-ten" name="month" value="" />
                  <label for="t-ten">20</label>
                  <input type="radio" id="a-one" name="month" value="" />
                  <label for="a-one">21</label>
                  <input type="radio" id="a-two" name="month" value="" />
                  <label for="a-two">22</label>
                  <input type="radio" id="a-three" name="month" value="" />
                  <label for="a-three">23</label>
                  <input type="radio" id="a-four" name="month" value="" />
                  <label for="a-four">24</label>
                  <input type="radio" id="a-five" name="month" value="" />
                  <label for="a-five">25</label>
                  <input type="radio" id="a-six" name="month" value="" />
                  <label for="a-six">26</label>
                  <input type="radio" id="a-seven" name="month" value="" />
                  <label for="a-seven">27</label>
                  <input type="radio" id="a-eight" name="month" value="" />
                  <label for="a-eight">28</label>
                </div>
              </div>
            </div>
            <div class="centerbtn pt-3 pb-3">
              <button class="popup_reminderbtn">save</button>
            </div>
            <div class="pt-2">
              <p
                class="red_remove"
                @click="
                  $bvModal.show('remove_reminder');
                  hidecurrentpop();
                "
              >
                Want to remove Payment Reminder?
              </p>
            </div>
          </div>
        </div>
      </b-modal>
    </div>

    <div>
      <b-modal
        id="remove_reminder"
        hide-footer
        hide-header
        ref="modalreminder_hide"
      >
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <p class="remove_payment">
              Are you sure want remove Payment Reminder?
            </p>

            <div class="centerbtn pt-3 pb-3">
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
      </b-modal>
    </div>
    <!-- end  -->
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

import axios from "axios";
import moment from "moment";
import Api from "@/Api";
import Common from "@/Common";
import GoogleAnalytics from "@/GoogleAnalytics";
import DateRangePicker from "vue2-daterange-picker";


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
      active_el: "All Payables",
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
        {
          text: "Name",
          value: "ledgerName",
          align: "left",
          sortable: true,
        },
        { text: "Credit Days", value: "billCreditPeriod" },
        { text: "Average Pay Days", value: "avgDays" },
        { text: "Due Amount", value: "balance", align: "right" },
       
      ],
      page: this.$store.state.Web1_Store.Payables_page,
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
      GroupsDataArray: "All Payables",
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
      isPaid: "0",
      call_function: "0",
      filter_array: [],
    };
  },
 
  watch: {
    page: function () {
      this.options.page = this.page;
      this.getGroups();
      GoogleAnalytics.payables_screen_pagination(this.options.page);
    },

    "options.itemsPerPage"() {
      
      setTimeout(() => {
        const StartIndex =
          (this.$store.state.Web1_Store.Payables_page - 1) *
          this.$store.state.Web1_Store.Payables_itemsPerPage;
        const endIndex =
          StartIndex + this.$store.state.Web1_Store.Payables_itemsPerPage;
        const Difference = endIndex - this.totaloutstanding;

        if (Difference > this.totaloutstanding) {
          this.page = 1;
          this.options.page = 1;
        } else {
          this.page = this.$store.state.Web1_Store.Payables_page;
          this.options.page = this.page;
        }
      }, 1000);
      this.getGroups();
     
      if (this.call_function == "1") {
        this.call_function = "1";
        GoogleAnalytics.payables_screen_Rows_Per_Page(
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
      
        GoogleAnalytics.payables_listing();
      },
    },
    deep: true,
  },
  created() {
    this.selectedHeaders = this.headers;
    console.log(this.selectedHeaders);
  },
  computed: {
    currentPage() {
      return this.$store.state.Web1_Store.Payables_page;
    },
  },
  methods: {
    freeusergeneratePdf() {
      GoogleAnalytics.payables_screen_viewpdf("viewpdf");
    },
    StoredPage(newValue) {
      this.$store.dispatch("Web1_Store/setPayablesPage", newValue.page);
    },
    updateItemsPerPage(newValue) {
      this.$store.dispatch("Web1_Store/setPayablesItemsPerPage", newValue);
    },
    generatePdf() {
      GoogleAnalytics.payables_screen_viewpdf("viewpdf");
      if (this.getLedgerGroupsData === "All Payables") {
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
        startDate: localStorage.getItem("date_range_start_date"),
        endDate: localStorage.getItem("date_range_end_date"),
        rangeValue: parseInt(this.rangeValue),
        currencySymbol: localStorage.getItem("symbol"),
        outstandingType: "Payables",
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        groupBy: this.getLedgerGroupsData,
        searchTerm: "",
        seletedLedgers: [],
        sortBy: parseInt(this.sortBy),
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
        GoogleAnalytics.payables_screen_date_filter("1D");
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
        GoogleAnalytics.payables_screen_date_filter("1W");
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
        GoogleAnalytics.payables_screen_date_filter("1M");
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
        GoogleAnalytics.payables_screen_date_filter("3M");
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
        GoogleAnalytics.payables_screen_date_filter("1Y");
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
        GoogleAnalytics.payables_screen_date_filter("2Y");
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
        GoogleAnalytics.payables_screen_date_filter("Max");
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
   
      GoogleAnalytics.payables_screen_filter(this.active_due);
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
      GoogleAnalytics.payables_screen_date_filter("Custom");
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
      if (this.getLedgerGroupsData === "All Payables") {
        this.GroupsDataArray = this.getLedgerGroupsData;
       
      } else {
        this.GroupsDataArray = this.getLedgerGroupsData;
      
      }  

      const { page, itemsPerPage } = this.options;
      let pageNumber = page - 1;

  

      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        outstandingType: "Payables",
        filterBy: this.getFiltersDatahidden,
        startLimit: pageNumber * itemsPerPage,
        endLimit: itemsPerPage,
        requestFrom: "WEB",
        startDate: moment(localStorage.getItem("date_range_start_date")).format("YYYY-MM-DD"),
        endDate: moment(localStorage.getItem("date_range_end_date")).format("YYYY-MM-DD"),
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
            const responseStatus = Common.getStatusForActionFailed(
              response.data.status
            );
            if (responseStatus == "200") {
              for (let [key, value] of Object.entries(response.data.data.list)) {
              if (response.data.data.list[key].nextShootDate !== "") {
                this.show_date = 1;
              }
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
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        requestFrom: "WEB",
        isCustomFilter : false
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
                else{
                  this.getFiltersForOutstandings.push(value.value);
                }
              }
           
            console.log(this.getFiltersForOutstandings, "getFiltersForOutstandings");
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
      Api.ledgerGroupsGo(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else if (response.data.status == "0") {
            const Payables = {
              ledgerId: "",
              ledgerGroupName: "All Payables",
              parentgroup: "",
            };
            this.getLedgerGroups.splice(0, 0, Payables);
            this.getLedgerGroupsData = this.getLedgerGroups[0].ledgerGroupName;
          } else {
            const Payables = {
              ledgerId: "",
              ledgerGroupName: "All Payables",
              parentgroup: "",
            };
            response.data.data.list.splice(0, 0, Payables);
            this.getLedgerGroupsData =
              response.data.data.list[0].ledgerGroupName;
            this.getLedgerGroups = response.data.data.list;
            this.outstanding_data();
          }
        })

        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
          this.new_loading = false;
        });
    },
    
    groupSelect(event) {
      this.getLedgerGroupsData = event.target.value;
      this.outstanding_data();

      GoogleAnalytics.payables_screen_filter(
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
     
      alert("hellogovind");
      if (this.isRange == "0") {
       
        this.rangeValue = 0;
   
      } else {
     
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
      GoogleAnalytics.payables_screen_sorting(this.sortBy, this.orderBy);
     
    },

    handleBlur() {
      const type = "search";
      GoogleAnalytics.payables_screen_search(this.search);
      this.outstanding_data(type);
    },
    demo() {
      this.remider_click = true;
    },
    cancel() {
      this.remider_click = false;
      this.selected = [];
    },
    enterSelect() {
      if (this.selected.length == 0) {
        this.isActive = true;
        this.schedule_btn = true;
      
      } else {
       
        this.isActive = false;
        this.schedule_btn = false;
      }
     
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
  },
  mounted() {
    this.sortBy = "";
    this.isPaid = localStorage.getItem("isPaid");
    this.getFilters();
   
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
