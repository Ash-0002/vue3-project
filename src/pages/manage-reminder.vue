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
              <img src="assets/images/1.0/brand/Loader-GIF-Final.gif" class="img-fluid loader_css" height="40"
                  width="40" />
          </div>
      </div>
     <!--start first card box-->
     <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-3 col-lg-12 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0">
            <div class="company_balance sales_cb new_title_sales_cb">
              <div class="left_arrow_sold">
                <a @click="$router.go(-1)"><i class="fa fa-chevron-left"></i></a>
              </div>
              <div class="company_name sales_c_name padding_left_30">
                <h3>Manage Payment Reminder</h3>
                <div class="company_balance sales_cb">
                  <p>
                    Total Reminder:
                   
                    <strong>{{ this.totalmyledgers }}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-12 col-12">
          <ul class="new_set_dropdown_with_gross">
                             
                              <li>
              <p class="heading_dropdown_gross-all">Date Filter</p>
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
  <!--end first card box-->
      <div class="main_card">
          <div class="card">
              <div class="row">
                  <div class="col-12">
                      <div class="custom_table">
                          <v-app id="inspire">
                              <div class="row">
                                  <div class="col-lg-3 col-12">
                                       <ul class="search_input new_left_search_part">
                    <li class="">
                      <div class="table_search">
                        <input
                          v-model="search"
                          v-on:keyup="handleBlur"
                          placeholder="Search"
                        />
                      </div>
                    </li>
                  </ul>
                                  </div>

                                  <div class="col-lg-9 col-12">
                                      
                                  </div>
                              </div>
                          
                          <div class="show_entries_for_table new_show_entries_for_table">
                          <v-data-table :page="page" :pageCount="numberOfPages" :headers="selectedHeaders" 
                                      :items="myledgers" :options.sync="options" dense :items-per-page="10"
                                      :server-items-length="totalmyledgers" :loading="loading" class="elevation-1"
                                      must-sort 
                                      :sort-by.sync="sortBy"
                                      @update:sort-by="updateSort('by', $event)"
                                      @update:sort-desc="updateSort('desc', $event)" disable-pagination item-key="table_header_index"
                                      ref="table" :hide-default-footer= "true" :footer-props="{'items-per-page-options':[10,25,50,100],'items-per-page-text':'products per page'}">

                                      <template v-slot:top="{ pagination, options, updateOptions }">
                                          <v-data-footer 
                                          :pagination=pagination 
                                          :options=options
                                          :items-per-page-options=[10,25,50,100]
                                          @update:options="updateOptions"
                                          items-per-page-text="$vuetify.dataTable.itemsPerPageText"/>
                                      </template>

                                  <template v-slot:item.ledgerName="{ item }">
                                    {{ item.ledgerName }}
                                  </template>
                                  <template v-slot:item.timeFlag="{ item }">
                                      <td><p>{{ format_date(item.timeFlag) }}</p></td>
                                  </template>
                                  <template v-slot:item.nextShootTime="{ item }">
                                      <td><p>{{ format_date(item.nextShootTime) }}</p></td>
                                  </template>
                                  <template v-slot:item.isEmailChannelSubscribed="{ item }">
                                      <td><p>{{item.isEmailChannelSubscribed}}</p></td>
                                  </template>
                                  <template v-slot:item.action="{ item }">
                                    <td align="right">
                                      <span class=""><a href="#" @click="edit_reminder(item.guid)"><img src="/assets/images/1.0/svgs/edit.svg" class="img-fluid" /></a></span>
                                      <span class="ml-2"><a href="#" @click="get_remove_id(item._id)"><img src="/assets/images/1.0/svgs/delete.svg" class="img-fluid" /></a></span>
                                    </td>
                                  </template>
                              </v-data-table>
                          </div>
                              <template>
                              <div class="bottom_navigation-pagination">
                                  <v-pagination
                                  v-model="page"
                                  :length=numberOfPages
                                  :total-visible="5"
                                  ></v-pagination>
                              </div>
                              </template>
                          </v-app>
                      </div>
                  </div>
              </div>
          </div>
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
                </div>
                <div v-show="dailyshowedit"></div>
                <div v-show="weeklyshowedit">
                  <div class="weekseven pt-2">
                  
                    <div class="radio_container">
                      <input type="radio" name="radio" value="MON" v-model="edit_week_days" id="one" checked />
                      <label for="one">Mon</label>
                      <input type="radio" name="radio" value="TUE" v-model="edit_week_days" id="two" />
                      <label for="two">Tue</label>
                      <input type="radio" name="radio" value="WED" v-model="edit_week_days" id="three" />
                      <label for="three">Wed</label>
                      <input type="radio" name="radio" value="THU" v-model="edit_week_days" id="four" />
                      <label for="four">thu</label>
                      <input type="radio" name="radio" value="FRI" v-model="edit_week_days" id="five" />
                      <label for="five">Fri</label>
                      <input type="radio" name="radio" value="SAT" v-model="edit_week_days" id="six" />
                      <label for="six">Sat</label>
                      <input type="radio" name="radio" value="SUN" v-model="edit_week_days" id="seven" />
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
              <div class="centerbtn pt-3 pb-3">
                <input type="hidden" v-model="edit_guid"/>
                <input type="hidden" v-model="edit_id"/>
                <button class="popup_reminderbtn" @click="update_click()">Update</button>
              </div>
            </div>
          </div>
        </b-modal>
    </div>
    <div>
      <b-modal id="delete_reminder_modal" centered hide-footer ref="modaledit_hide">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
              <p class="delete_message">
                Are you sure want to delete reminder?
              </p>
              <div class="centerbtn pt-4 pb-3">
                <ul class="yesnobuttonmain">
                  <li>
                    <button class="yesbutton" @click="remove_payment_reminder()">Yes</button>
                  </li>
                  <li>
                    <button class="nobutton" @click="$bvModal.hide('delete_reminder_modal')">No</button>
                  </li>
                </ul>
                
              </div>
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
  return new Intl.NumberFormat('en-IN',{minimumFractionDigits: 2}).format(value);
});

import axios from "axios";
import moment from 'moment'
import Api from "@/Api";
import GoogleAnalytics from "@/GoogleAnalytics";
import DateRangePicker from 'vue2-daterange-picker'

//you need to import the CSS manually
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
export default {
  name: "daybook",
  components: { DateRangePicker },
  data() {

      let startDate = moment(String(localStorage.getItem('date_range_start_date')));
      let endDate = moment(String(localStorage.getItem('date_range_end_date')));
      return {
          users: [ 
          { "id": "Sales", "name": "Sales" },
          { "id": "Purchase", "name": "Purchase" }, 
          { "id": "Sales Order", "name": "Sales Order" }, 
          { "id": "Purchase Order", "name": "Purchase Order" },
          { "id": "Debit Note", "name": "Debit Note" },
          { "id": "Credit Note", "name": "Credit Note" }, 
          { "id": "Receipt", "name": "Receipt" }, 
          { "id": "Payment", "name": "Payment" },
          { "id": "Journal", "name": "Journal" }, 
          { "id": "Contra", "name": "Contra" }
      ],
      selected: ["Sales","Purchase","Sales Order","Purchase Order","Debit Note","Credit Note","Receipt","Payment","Journal","Contra"],
          vouchertype: false,
          startDate: startDate,
          endDate: endDate,
          active_el: "",
          dateRange: { startDate, endDate },
          defaultRanges: {  // I got a eslint syntax errors
              'Today': [new Date(), new Date()],
              'Yesterday': [new Date(Date.now() - 3600 * 1000 * 24), new Date(Date.now() - 3600 * 1000 * 24)],
              'This Week': [new Date(Date.now() - 7 * 24 * 3600 * 1000), new Date()],
              'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)],
              'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1), new Date(new Date().getFullYear(), new Date().getMonth(), 0)],
              'This Year': [new Date(String(localStorage.getItem('first_date_range_start_date'))), new Date(String(localStorage.getItem('first_date_range_end_date')))],
              'Last Year': [new Date(moment(String(localStorage.getItem('first_date_range_start_date'))).add(-1, 'year')), new Date(moment(String(localStorage.getItem('first_date_range_end_date'))).add(-1, 'year'))],
          },
          headers: [
              { text: 'Ledger Name', value: 'ledgerName', sortable: false},
              { text: 'Sent Date', value: 'timeFlag', sortable: false},
              { text: 'Next Reminder Date', value: 'nextShootTime', sortable: false},
              { text: 'Type', value: 'schedularType',sortable: false },
              
          ],
          page: 1,
          totalmyledgers: 0,
          numberOfPages: 0,
          myledgers: [],
          value: [],
          selectedHeaders: [],
          loading: true,
          new_loading: true,
          options: {},  
          search: '',
          sortBy: 'partyLedgerName',
          orderBy: '',
          selectfilter : "",
          finalfilter : "",
          symbol: '',
          showInside: false,
          dotshow: 0,
          voucherShowInside: false,
          isPaid : "",
          call_function : "0",
          source : "",
          active_date : "",
          showremovereminder: false,
          hidedeletereminder: false,
          edit_sms_checkbox : "",
          edit_email_checkbox : "",
          edit_due_checkbox : "",
          edit_due_number : "",
          edit_week_days : "",
          edit_month_days : "",
          edit_guid : "",
          edit_schedulerType : "",
          edit_scheduledDay : "",
          edit_nextShootDate : "",
          edit_emailtemplateId : "",
          edit_smsTemplateId : "",
          edit_messageTemplate : "",
          edit_emailTemplate : "",
          edit_emails : "",
          edit_contactNumbers : "",
          edit_id : "",
          duedateshowedit: false,
          dailyshowedit: false,
          weeklyshowedit: false,
          monthlyshowedit: false,
          options_radioedit: [
          { text: "On Due Date", value: "duedateedit" },
          { text: "Daily", value: "dailyedit" },
          { text: "Weekly", value: "weeklyedit" },
          { text: "Monthly", value: "monthlyedit" },
        ],
        value_editpop: "",

      }
  },
  computed: {
      selectAll: {
          get: function () {
              return this.users ? this.selected.length == this.users.length : false;
          },
          set: function (value) {
              var selected = [];
              if (value) {
                  this.users.forEach(function (user) {
                      selected.push(user.id.toString());
                  });
              }

              this.selected = selected;
              this.readDataFromAPI();
          }
      }
  },
  watch: {
      
      page: function () {
        this.options.page = this.page;
        this.readDataFromAPI(); 
        GoogleAnalytics.my_vouchers_reports_screen_pagination(this.options.page);
      },
  
      "options.itemsPerPage"() {
          this.page=1
      this.options.page = 1; 
          this.readDataFromAPI(); 
  
        if(this.call_function == "1"){
      this.call_function = "1";
      GoogleAnalytics.my_vouchers_reports_screen_Rows_Per_Page(this.options.itemsPerPage);
    }else{
      this.call_function = "1";
    }
      },
  
      options: {
        handler() {
     
          GoogleAnalytics.my_vouchers_reports_screen_listing();
        },
      },
      deep: true,
    },
  filters: {
      dateCell(value) {
          let dt = new Date(value)

          return dt.getDate()
      },
      date(val) {
          return val ? val.toLocaleString() : ''
      }
  },
  created() {
      this.selectedHeaders = this.headers;
      console.log(this.selectedHeaders);
  },
  methods: {
      activate: function (el) {
    if (el === "-1" || el === "3") {
      this.dotshow = 1;
    } else {
      this.dotshow = 0;
    }
    this.active_el = el;
    this.select_value = el;
    this.finalfilter = el;
    this.selectfilter = el;
    this.readDataFromAPI();
  },
  voucherTypeShow() {
    this.voucherShowInside = true;
  },
  show() {
    this.showInside = true;
  },
  hide() {
    this.voucherShowInside = false;
    this.showInside = false;
  },
  closeEvent() {
    this.hide();
  },
  activatedate: function (date) {
    if (date === "oned") {
      // one day
      GoogleAnalytics.my_vouchers_reports_screen_date_filter("1D");
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
      GoogleAnalytics.my_vouchers_reports_screen_date_filter("1W");
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
      GoogleAnalytics.my_vouchers_reports_screen_date_filter("1M");
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
      GoogleAnalytics.my_vouchers_reports_screen_date_filter("3M");
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
      GoogleAnalytics.my_vouchers_reports_screen_date_filter("1Y");
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
      GoogleAnalytics.my_vouchers_reports_screen_date_filter("2Y");
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
    }else if (date === "max") {
        // max date
        GoogleAnalytics.my_vouchers_reports_screen_date_filter("Max");
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
    
    this.readDataFromAPI();
    localStorage.setItem("active_date", date);
    this.active_date = date;
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
    } else {
      this.active_date = "oney";
    }
  },
     // myLedger(type) {
      readDataFromAPI(type = "", sortBy = "", orderBy = "") {
          var self = this;
          this.loading = true;
          this.new_loading = true;
          this.symbol = localStorage.getItem('symbol');
          if (type === "search") {
              this.options.page = 1;
          }
          const { page, itemsPerPage } = this.options;
          console.log("Page Number", page, itemsPerPage);
          let pageNumber = page - 1;
          if(localStorage.getItem("_parentUserId") != ""){
            var data = {
              mainUserId : localStorage.getItem("_parentUserId"),
              _userId: localStorage.getItem("customerId"),
              companyId: localStorage.getItem("companyId"),
              requestFrom: "WEB",
              startDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
              endDate: moment(String(this.$refs.picker.end)).format("yyyy-MM-DD"),
              searchTerm: this.search,
              startLimit: (pageNumber * itemsPerPage).toString(),
              endLimit: itemsPerPage.toString(),
            };
          }else{
            var data = {
              mainUserId : localStorage.getItem("customerId"),
              _userId: localStorage.getItem("customerId"),
              companyId: localStorage.getItem("companyId"),
              requestFrom: "WEB",
              startDate: moment(String(this.$refs.picker.start)).format("yyyy-MM-DD"),
              endDate: moment(String(this.$refs.picker.end)).format("yyyy-MM-DD"),
              searchTerm: this.search,
              startLimit: (pageNumber * itemsPerPage).toString(),
              endLimit: itemsPerPage.toString(),
            };
          }
          
          const headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: localStorage.getItem("webAuthToken"),
          };
          this.myledgers = [];
          Api.managePaymentReminders(data, headers)
              .then((response) => {
              if (response.data.message == "AUTHENTICATION_FAILED") {
                  localStorage.clear();
                  window.location.href = "/";
              } else {
                
                
                this.numberOfPages = Math.ceil(
                  response.data.data.totalCounts / itemsPerPage
                  );
                  this.loading = false;
                  this.new_loading = false;
                  this.myledgers = response.data.data.scheduleDetails.ledgerDetails;
                  this.totalmyledgers = response.data.data.totalCounts;
              }
              })

              .catch((err) => {
              Common.getStatusForActionFailed(err.response.status);
              this.loading = false;
              this.new_loading = false;
              });
      },
      handleBlur() {
          const type = "search";
          GoogleAnalytics.my_vouchers_reports_screen_search(this.search);
          this.readDataFromAPI(type);
      },
      filterchange(event) {
          this.selectfilter = event.target.value;
          this.readDataFromAPI();
      },

      updateSort(byDesc, event) {
          this.options.page = this.page;
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
          this.readDataFromAPI(); 
          GoogleAnalytics.my_vouchers_reports_screen_sorting(this.sortBy,this.orderBy);
      },
     
      
      deleteLedger(Ledgerid)
  {
          const data = {
              ledgerId: Ledgerid, 
               requestFrom: "WEB",
              };
          const headers = {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              token: localStorage.getItem("webAuthToken"),
          };

          Api.deleteLedger(data, headers)
          .then((response) => {
             
              if (response.data.message == "AUTHENTICATION_FAILED") {
                  alert(response.data.message);
                  this.readDataFromAPI();                
              } else {
                  this.readDataFromAPI();
                  this.new_loading = false;
              }
              })
              .catch((err) => {
              Common.getStatusForActionFailed(err.response.status);
              this.loading = false;
              this.new_loading = false;
              });
      },
  

      left_arrow() {
          var check_start_date = moment(String(this.dateRange.startDate));
          var check_end_date = moment(String(this.dateRange.endDate));
          var days = check_end_date.diff(check_start_date, 'days') + 1;
          if (days === 1) {
              // today
              var new_date_start_date = moment(check_start_date).add(-1, 'days');
              var new_date_end_date = moment(check_end_date).add(-1, 'days');
              this.dateRange.startDate = new_date_start_date;
              this.dateRange.endDate = new_date_end_date;
              this.$refs.picker.start = new_date_start_date;
              this.$refs.picker.end = new_date_end_date;
          } else if (days === 2) {
              // yesterdays
              var new_date_start_date = moment(check_start_date).add(-2, 'days');
              var new_date_end_date = moment(check_end_date).add(-2, 'days');
              this.dateRange.startDate = new_date_start_date;
              this.dateRange.endDate = new_date_end_date;
              this.$refs.picker.start = new_date_start_date;
              this.$refs.picker.end = new_date_end_date;
          } else if (days == 8) {
              // week
              var new_date_start_date = moment(check_start_date).add(-8, 'days');
              var new_date_end_date = moment(check_end_date).add(-8, 'days');
              this.dateRange.startDate = new_date_start_date;
              this.dateRange.endDate = new_date_end_date;
              this.$refs.picker.start = new_date_start_date;
              this.$refs.picker.end = new_date_end_date;
          } else if (days > 28 && days <= 31 || days === 28) {
              // month
              var futureMonth = moment(check_start_date).add(-1, 'M');
              var new_date_start_date = moment(futureMonth).startOf('month');
              var new_date_end_date = moment(futureMonth).endOf('month');
              this.dateRange.startDate = new_date_start_date;
              this.dateRange.endDate = new_date_end_date;
              this.$refs.picker.start = new_date_start_date;
              this.$refs.picker.end = new_date_end_date;

          } else if (days > 360 && days <= 366) {
              // Year
              var new_date_start_date = moment(check_start_date).add(-1, 'years');
              var new_date_end_date = moment(check_end_date).add(-1, 'years');
              this.dateRange.startDate = new_date_start_date;
              this.dateRange.endDate = new_date_end_date;
              this.$refs.picker.start = new_date_start_date;
              this.$refs.picker.end = new_date_end_date;
          } else {
              // Custom Days
              var new_date_start_date = moment(check_start_date).add('-' + days, 'days');
              var new_date_end_date = moment(check_end_date).add('-' + days, 'days');
              this.dateRange.startDate = new_date_start_date;
              this.dateRange.endDate = new_date_end_date;
              this.$refs.picker.start = new_date_start_date;
              this.$refs.picker.end = new_date_end_date;
          }
          localStorage.setItem("date_range_start_date", new_date_start_date);
          localStorage.setItem("date_range_end_date", new_date_end_date);
          
          this.readDataFromAPI();

      },
      right_arrow() {
          var check_start_date = moment(String(this.dateRange.startDate));
          var check_end_date = moment(String(this.dateRange.endDate));
          var days = check_end_date.diff(check_start_date, 'days') + 1;
          if (days === 1) {
              // today
              var new_date_start_date = moment(check_start_date).add(1, 'days');
              var new_date_end_date = moment(check_end_date).add(1, 'days');
              this.dateRange.startDate = new_date_start_date;
              this.dateRange.endDate = new_date_end_date;
              this.$refs.picker.start = new_date_start_date;
              this.$refs.picker.end = new_date_end_date;
          } else if (days === 2) {
              // yesterdays
              var new_date_start_date = moment(check_start_date).add(2, 'days');
              var new_date_end_date = moment(check_end_date).add(2, 'days');
              this.dateRange.startDate = new_date_start_date;
              this.dateRange.endDate = new_date_end_date;
              this.$refs.picker.start = new_date_start_date;
              this.$refs.picker.end = new_date_end_date;
          } else if (days == 8) {
              // week
              var new_date_start_date = moment(check_start_date).add(8, 'days');
              var new_date_end_date = moment(check_end_date).add(8, 'days');
              this.dateRange.startDate = new_date_start_date;
              this.dateRange.endDate = new_date_end_date;
              this.$refs.picker.start = new_date_start_date;
              this.$refs.picker.end = new_date_end_date;
          } else if (days > 28 && days <= 31 || days === 28) {
              // month
              var futureMonth = moment(check_start_date).add(1, 'M');
              var new_date_start_date = moment(futureMonth).startOf('month');
              var new_date_end_date = moment(futureMonth).endOf('month');
              this.dateRange.startDate = new_date_start_date;
              this.dateRange.endDate = new_date_end_date;
              this.$refs.picker.start = new_date_start_date;
              this.$refs.picker.end = new_date_end_date;

          } else if (days > 360 && days <= 366) {
              // Year
              var new_date_start_date = moment(check_start_date).add(1, 'years');
              var new_date_end_date = moment(check_end_date).add(1, 'years');
              this.dateRange.startDate = new_date_start_date;
              this.dateRange.endDate = new_date_end_date;
              this.$refs.picker.start = new_date_start_date;
              this.$refs.picker.end = new_date_end_date;
          } else {
              // Custom Days
              var new_date_start_date = moment(check_start_date).add(days, 'days');
              var new_date_end_date = moment(check_end_date).add(days, 'days');
              this.dateRange.startDate = new_date_start_date;
              this.dateRange.endDate = new_date_end_date;
              this.$refs.picker.start = new_date_start_date;
              this.$refs.picker.end = new_date_end_date;
          }
          localStorage.setItem("date_range_start_date", new_date_start_date);
          localStorage.setItem("date_range_end_date", new_date_end_date);
          
          this.readDataFromAPI();

      },
      format_date(value) {
          if (value) {
              return moment(String(value)).format('DD MMM yyyy h:mm A')
          }
      },
      format_date_time(value) {
          if (value) {
              return moment(String(value)).format('HH:mm')
          }
      },
      vouchertypeclick(user,event){
          if(event.target.checked){
              if(user != ""){
                  this.selected.push(user)
              }
          }else{
              if(user != ""){
                  // this.$delete(user,this.selected)
                  this.selected.splice(this.selected.indexOf(user),1);
                  
              }
          }
          
          this.readDataFromAPI();
      },
      update() {
          localStorage.setItem("date_range_start_date", moment(String(this.$refs.picker.start)).format('yyyy-MM-DD'));
          localStorage.setItem("date_range_end_date", moment(String(this.$refs.picker.end)).format('yyyy-MM-DD'));
          GoogleAnalytics.my_vouchers_reports_screen_date_filter("Custom");
          this.readDataFromAPI();
          this.date_setting();
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
      edit_reminder(guid){
        console.log(guid);
        const data = {
          companyId: localStorage.getItem("companyId"),
          requestFrom: "WEB",
          ledgerGuid: guid
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.getSingleScheduler(data, headers)
          .then((response) => {
            console.log(response);
            this.edit_sms_checkbox = response.data.data.scheduleDetails.isSMSChannelSubscribed;
            this.edit_email_checkbox = response.data.data.scheduleDetails.isEmailChannelSubscribed;
            this.edit_due_checkbox = response.data.data.scheduleDetails.includedNotDueBills;
            if(response.data.data.scheduleDetails.schedulerType == "BILL_DUE_DATE"){
              this.value_editpop = "duedateedit";
              this.selectradiobtnedit();
              this.edit_due_number = response.data.data.scheduleDetails.scheduledDay;
            }else if(response.data.data.scheduleDetails.schedulerType == "DAILY"){
              this.value_editpop = "dailyedit";
              this.selectradiobtnedit();
            }else if(response.data.data.scheduleDetails.schedulerType == "WEEKLY"){
              this.value_editpop = "weeklyedit";
              this.selectradiobtnedit();
              this.edit_week_days = response.data.data.scheduleDetails.scheduledDay;
            }else if(response.data.data.scheduleDetails.schedulerType == "MONTHLY"){
              this.value_editpop = "monthlyedit";
              this.selectradiobtnedit();
              this.edit_month_days = response.data.data.scheduleDetails.scheduledDay;
            }
            this.edit_guid = guid;
            this.edit_id = response.data.data.scheduleDetails._id;
            this.edit_emailtemplateId = response.data.data.scheduleDetails.emailtemplateId;
            this.edit_smsTemplateId = response.data.data.scheduleDetails.smsTemplateId;
            this.edit_messageTemplate = response.data.data.scheduleDetails.messageTemplate;
            this.edit_emailTemplate = response.data.data.scheduleDetails.emailTemplate;
            this.edit_emails = response.data.data.scheduleDetails.emails;
            this.edit_contactNumbers = response.data.data.scheduleDetails.contactNumbers;

            this.$bvModal.show('edit_reminder');
        })
        .catch((err) => {
          // alert("ERROR");
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });

        
      },
      update_click(){
        if (this.value_editpop == "duedateedit") {
          // BILL_DUE_DATE
          this.edit_schedulerType = "BILL_DUE_DATE";
          this.edit_scheduledDay = this.edit_due_number;
          this.edit_nextShootDate = moment().format("DD-MM-YYYY");
        }else if (this.value_editpop == "dailyedit") {
          // DAILY
          this.edit_schedulerType = "DAILY";
          this.edit_scheduledDay = "";
          this.edit_nextShootDate = moment().format("DD-MM-YYYY");
        }else if (this.value_editpop == "weeklyedit") {
          // WEEKLY
          this.edit_schedulerType = "WEEKLY";
          this.edit_scheduledDay = this.edit_week_days;
          this.edit_nextShootDate = "-";
        }else if (this.value_editpop == "monthlyedit") {
          // MONTHLY
          this.edit_schedulerType = "MONTHLY";
          this.edit_scheduledDay = this.edit_month_days;
          this.edit_nextShootDate = "-";
        }else{
          this.edit_schedulerType = "MONTHLY";
          this.edit_scheduledDay = this.edit_month_days;
          this.edit_nextShootDate = "-";
        }
        const data = {
          ledgerguid : this.edit_guid,
          schedulerName : "Payment Reminder",
          schedulerDescription : "Reminder regarding payment",
          companyId: localStorage.getItem("companyId"),
          requestFrom: "WEB",
          schedulerType: this.edit_schedulerType,
          scheduledDay : this.edit_scheduledDay,
          nextShootDate : this.edit_nextShootDate,
          sendManualReminder : false,
          nextShootTime : this.defaultTimeToSendreminders,
          isSMSChannelSubscribed : this.edit_sms_checkbox,
          isEmailChannelSubscribed : this.edit_email_checkbox,
          isPushNotificationChannelSubscribed : false,
          isWhatsappChannelSubscribed : false,
          includedNotDueBills : this.edit_due_checkbox,
          ledgerGuid : this.edit_guid,
          emailtemplateId : this.edit_emailtemplateId,
          smsTemplateId : this.edit_smsTemplateId,
          messageTemplate : this.edit_messageTemplate,
          emailTemplate : this.edit_emailTemplate,
          createdDate : moment().format("YYYY-MM-DD"),
          emails : this.edit_emails,
          contactNumbers : this.edit_contactNumbers
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.updateSingleScheduler(data, headers)
          .then((response) => {
            this.$router.go();
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
      },
      get_remove_id(id){
        this.edit_id = id;
        this.$bvModal.show('delete_reminder_modal');
      },
      remove_payment_reminder(){
        const data = {
          paymentReminderId : [this.edit_id],
          requestFrom: "WEB",
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.deletePaymentReminder(data, headers)
          .then((response) => {
            this.$router.go();
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          this.loading = false;
        });
      }
    
  },
  mounted() { 
      if (
    localStorage.getItem("active_date") === null ||
    localStorage.getItem("active_date") === ""
  ) {
    this.active_date = "oney";
  } else {
    this.active_date = localStorage.getItem("active_date");
  }
      this.isPaid = localStorage.getItem('isPaid');
      this.source = localStorage.getItem('source');
     
     
  },
  
};
</script>