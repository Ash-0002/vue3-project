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
          <div class="company_name sales_c_name mobile_padding_left_0 ">
            <div class="company_balance sales_cb new_title_sales_cb company_heading_title">
              <BackButton />
              <p>
                Total Sales:
                <br /><strong><span class="font_sans">{{ symbol }}</span>
                  {{ totalAmount | formatNumberSales }}</strong>
              </p>

            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-12 col-12">
          <ul class="new_set_dropdown_with_gross">
            <li class="marginright25">
              <p class="heading_dropdown_gross-all">View as</p>
              <div class="grossnet_section">
                <div class="switches-container new_design_grossnet">
                  <input type="radio" :disabled="inputDisabled" id="switchMonthly" @change="switch_change($event)"
                    v-model="switch_type" name="switchPlan" value="Gross" checked="checked" />
                  <input type="radio" :disabled="inputDisabled" id="switchYearly" @change="switch_change($event)"
                    v-model="switch_type" name="switchPlan" value="Net" />
                  <label for="switchMonthly">Gross</label>
                  <label for="switchYearly">Net</label>
                  <div class="switch-wrapper">
                    <div class="switch">
                      <div>Gross</div>
                      <div>Net</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="marginright25">
              <p class="heading_dropdown_gross-all">Sort By</p>
              <ul class="sortby_filter only_filter_icon">
                <li @click="activate('Month')" :class="{ active: active_el == 'Month' }">
                  Month
                </li>
                <li @click="activate('Bill')" :class="{ active: active_el == 'Bill' }">
                  Bill
                </li>
                <li @click="activate('Ledger')" :class="{ active: active_el == 'Ledger' }">
                  Ledger
                </li>
                <li @click="show" class="">
                  <p class="more_filter_text filter_relative">
                    More <i class="fa fa-chevron-down"></i>
                    <span v-if="dotshow" class="filter_dot"></span>
                  </p>
                </li>
                <div v-if="showInside" v-click-outside="closeEvent" class="without_inline_filter">
                  <ul class="dropdown_li_active">
                    <li @click="activate('Stock Item')" v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Stock Item' }">
                      Stock Item
                    </li>
                    <li @click="activate('Voucher Type')" v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Voucher Type' }">
                      Voucher Type
                    </li>
                    <li @click="activate('Ledger Group')" v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Ledger Group' }">
                      Ledger Group
                    </li>
                    <li @click="activate('Stock Group')" v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Stock Group' }">
                      Stock Group
                    </li>
                    <li @click="activate('Stock Category')" v-click-outside="closeEvent"
                      :class="{ active: active_el == 'Stock Category' }">
                      Stock Category
                    </li>
                  </ul>
                </div>
              </ul>
            </li>

            <li>
              <p class="heading_dropdown_gross-all">Date Filter</p>
              <div class="parties_datefilter_vue date_filter_new_flot_none">
                <span class="datepicker_left_arrow" @click="left_arrow()"><i class="fa fa-chevron-left"></i></span>
                <date-range-picker ref="picker" :auto-submit="true"
                  :locale-data="{ firstDay: 1, format: 'dd/mm/yyyy', customRangeLabel: 'Custom Range', separator: ' - ' }"
                  v-model="dateRange" :ranges="defaultRanges" :startDate="startDate" :endDate="endDate"
                  @update="update()">
                  <template v-slot:input="picker" style="min-width: 350px;">

                  </template>
                </date-range-picker>
                <span class="datepicker_right_arrow" @click="right_arrow()"><i class="fa fa-chevron-right"></i></span>
              </div>
            </li>
          </ul>
          <div class="BillSuccessFullySent" v-if="Bill_success">
            <div class="BillSuccesCaptionPart">
              <div class="IconTextSuccessBill">
              <i class="fa fa-check-circle"></i>
              <p>Bill Successfully sent to party</p>
            </div>
            <div class="SuccessBillCrossIconSet" @click="CloseBillSuccesBox()">
              <img src="/assets/images/1.0/png/crossicon.png" />
            </div>
            </div>
          </div>
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

                      <li v-if="isPaid == '' || isPaid == null" v-b-modal.customerstatus-popup>
                        <button type="button" @click="freeusergeneratePdf()" class="btn download_border_btn">
                          <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid" />View Pdf<img
                            class="pdf_button_crown" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
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
                <div v-if="all_view" class="show_entries_for_table new_show_entries_for_table">
                  <v-data-table :page="page" :pageCount="numberOfPages" :headers="selectedHeaders" :items="salecustomer"
                    :options.sync="options" :server-items-length="totalsalecustomer" :loading="loading"
                    class="elevation-1" must-sort :sort-by.sync="sortBy" @update:sort-by="updateSort('by', $event)"
                    @update:sort-desc="updateSort('desc', $event)" ref="table" :hide-default-footer="true">
                    <template v-slot:top="{ pagination, options, updateOptions }">
                      <v-data-footer :pagination="pagination" :options="options"
                        :items-per-page-options="[10, 25, 50, 100]" @update:options="updateOptions"
                        items-per-page-text="$vuetify.dataTable.itemsPerPageText" />
                    </template>
                    <template v-slot:item.name="{ item }">
                      <td>
                        <router-link :to="`${item.url}`" class="onclick_details">{{ item.name }}</router-link>
                      </td>
                    </template>
                    <template v-slot:item.totalAmount="{ item }">
                      <td align="right">
                        <p class="amount_closing">
                          <span class="font_sans">{{ symbol }}</span>
                          {{ item.totalAmount | formatNumberSales }}
                        </p>
                      </td>
                    </template>

                    <template v-slot:item.action="{ item }">
                      <td align="center">
                        <p class="pdf_a_download">
                          <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid pdficonimagetable" />
                        </p>
                      </td>
                    </template>
                  </v-data-table>
                </div>
                <div v-if="ledger_view" class="show_entries_for_table new_show_entries_for_table">
                  <v-data-table :page="page" :pageCount="numberOfPages" :headers="selectedLedgerHeaders"
                    :items="salecustomer" :options.sync="options" :server-items-length="totalsalecustomer"
                    :loading="loading" class="elevation-1" must-sort @update:sort-by="updateSort('by', $event)"
                    @update:sort-desc="updateSort('desc', $event)" ref="table" :hide-default-footer="true">
                    <template v-slot:top="{ pagination, options, updateOptions }">
                      <v-data-footer :pagination="pagination" :options="options"
                        :items-per-page-options="[10, 25, 50, 100]" @update:options="updateOptions"
                        items-per-page-text="$vuetify.dataTable.itemsPerPageText" />
                    </template>
                    <template v-slot:item.name="{ item }">
                      <td>
                        <router-link :to="`${item.url}`" class="onclick_details">{{ item.name }}</router-link>
                      </td>
                    </template>
                    <template v-slot:item.lastSalesDate="{ item }">
                      <router-link class="onclick_details parties_inner_a" :to="`${item.url}`">
                        {{ format_date(item.lastSalesDate) }}
                      </router-link>
                    </template>
                    <template v-slot:item.closingBalance="{ item }">
                      <td align="right">

                        <p :class="`m-0 amount_closing ${item.closeClass}`">
                          <span class="font_sans">{{ item.symbol }}</span>
                          {{ item.closingBalance | formatNumberPartiesListing }}
                        </p>
                      </td>
                    </template>
                    <template v-slot:item.totalAmount="{ item }">
                      <td align="right">
                        <p class="amount_closing">
                          <span class="font_sans">{{ symbol }}</span>
                          {{ item.totalAmount | formatNumberSales }}
                        </p>
                      </td>
                    </template>

                    <template v-slot:item.action="{ item }">
                      <td align="center">
                        <p class="pdf_a_download">
                          <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid pdficonimagetable" />
                        </p>
                      </td>
                    </template>
                  </v-data-table>
                </div>

                <div v-if="stock_item_view" class="show_entries_for_table new_show_entries_for_table">
                  <v-data-table :page="page" :pageCount="numberOfPages" :headers="selected_stock_item_headers"
                    :items="salecustomer" :options.sync="options" :server-items-length="totalsalecustomer"
                    :loading="loading" class="elevation-1" must-sort @update:sort-by="updateSort('by', $event)"
                    @update:sort-desc="updateSort('desc', $event)" ref="table" :hide-default-footer="true"
                    :footer-props="{
                      'items-per-page-options': [10, 25, 50, 100],
                      'items-per-page-text': 'products per page',
                    }">
                    <template v-slot:top="{ pagination, options, updateOptions }">
                      <v-data-footer :pagination="pagination" :options="options"
                        :items-per-page-options="[10, 25, 50, 100]" @update:options="updateOptions"
                        items-per-page-text="$vuetify.dataTable.itemsPerPageText" />
                    </template>
                    <template v-slot:item.name="{ item }">
                      <td>
                        <router-link :to="`${item.url}`" class="onclick_details">{{ item.name }}</router-link>
                      </td>
                    </template>
                    <template v-slot:item.totalAmount="{ item }">
                      <td align="right">
                        <p>
                          <span class="font_sans">{{ symbol }}</span>
                          {{ item.totalAmount | formatNumberSales }}
                        </p>
                      </td>
                    </template>
                    <template v-slot:item.totalQty="{ item }">
                      <td>
                        <p>{{ item.totalQty }}</p>
                      </td>
                    </template>
                    <template v-slot:item.action="{ item }">
                      <td align="center">
                        <p class="pdf_a_download">
                          <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid pdficonimagetable" />
                        </p>
                      </td>
                    </template>
                  </v-data-table>
                </div>
                <div v-if="bill_view" class="show_entries_for_table new_show_entries_for_table">
                  <v-data-table :page="currentPage" :pageCount="numberOfPages" :headers="selected_bill_headers"
                    :items="salecustomer" :options.sync="options" :server-items-length="totalsalecustomer1"
                    :loading="loading" class="elevation-1" must-sort @update:sort-by="updateSort('by', $event)"
                    @update:sort-desc="updateSort('desc', $event)" ref="table" :hide-default-footer="true">
                    <template v-slot:top="{ pagination, options, updateOptions }">
                      <v-data-footer :pagination="pagination" :options="options"
                        :items-per-page-options="[10, 25, 50, 100]" @update:options="updateOptions"
                        items-per-page-text="$vuetify.dataTable.itemsPerPageText" />
                    </template>
                    <template v-slot:item.voucherDate="{ item }">
                      <td>

                        <div>
                          <router-link :to="{path: item.url,query: { masterID: item.masterId }}" class="onclick_details">{{ format_date(item.voucherDate)
                          }}</router-link>
                        </div>
                      </td>
                    </template>
                    <template v-slot:item.voucherType="{ item }">
                      <td>
                        <p>{{ item.voucherType }}</p>
                      </td>
                    </template>
                    <template v-slot:item.voucherNumber="{ item }">
                      <td>
                        <div v-if="isPaid == '' || isPaid == null">
                          <b-button class="vch_num_all_btn" v-b-modal.customerstatus-popup>{{ item.voucherNumber
                          }}</b-button>
                        </div>
                        <div v-else>
                          <router-link :to="{path: item.url,query: { masterID: item.masterId }}" class="onclick_details">{{ item.voucherNumber
                          }}</router-link>
                        </div>
                      </td>
                    </template>
                    <template v-slot:item.partyLedgerName="{ item }">
                      <td>
                        <p>{{ item.partyLedgerName }}</p>
                      </td>
                    </template>
                    <template v-slot:item.totalAmount="{ item }">
                      <td align="right">
                        <p>
                          <span class="font_sans">{{ symbol }}</span>
                          {{ item.actualAmount | formatNumberSales }}
                        </p>
                      </td>
                    </template>
                    <template v-slot:item.action="{ item }">
                      <td align="center" class="WhatsPDFIconPart">
                        <!-- <p class="mr-2" v-if="isPaid == '' || isPaid == null" v-b-modal.customerstatus-popup>
                          <a
                            v-b-tooltip.hover.top="'Whatapp Send'">
                            <img src="/assets/images/1.0/png/Whatsappicon.png" class="img-fluid Whatsappiconimage" />
                          </a>
                        </p>
                        <p class="mr-2" v-else>
                          <a @click="openWhatsappPopup(item._id, item.customisEwayStatus, item.customisEInvoiceStatus)"
                            v-b-tooltip.hover.top="'Whatapp Send'">
                            <img src="/assets/images/1.0/png/Whatsappicon.png" class="img-fluid Whatsappiconimage" />
                          </a>
                        </p> -->
                        <p v-if="isPaid == '' || isPaid == null" v-b-modal.customerstatus-popup>
                          <a @click="freeusergeneratePdf()" class="pdf_a_download DwonloadPDFImage"
                            v-b-tooltip.hover.top="'Download PDF'">
                            <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid pdficonimagetable" />
                          </a>
                          <!-- <a
                            v-b-tooltip.hover.top="'WhatsApp'"
                            target="_blank"
                            class="ml-2"
                          >
                            <img
                              src="/assets/images/1.0/parties/whatsappfill.svg"
                              class="img-fluid p-1 image_size_set_whatsappfill"
                            />
                          </a> -->
                        </p>
                        <p v-else>
                          <a @click="VoucherPdf(item._id, item.customisEwayStatus, item.customisEInvoiceStatus)"
                            class="pdf_a_download DwonloadPDFImage" v-b-tooltip.hover.top="'Download PDF'">
                            <img src="/assets/images/1.0/png/pdficon.png" class="img-fluid pdficonimagetable" />
                          </a>
                          <!-- <a
                            :href="`https://wa.me/917778966606/?text=Hi%0APlease%20find%20the%20invoice%28s%29%20in%20the%20link%20below%0AVoucher%20number%28s%29%0A${item.voucherNumber}%0ALink%20-%20%0A%0AAccounts%20Department%0A${companyName}%0A%0A-sent%20via%20livekeeping.com`"
                            v-b-tooltip.hover.top="'WhatsApp'"
                            target="_blank"
                            class="ml-2"
                          >
                            <img
                              src="/assets/images/1.0/parties/whatsappfill.svg"
                              class="img-fluid p-1 image_size_set_whatsappfill"
                            />
                          </a> -->
                        </p>
                      </td>
                    </template>
                  </v-data-table>
                </div>
                <div v-if="month_view" class="show_entries_for_table new_show_entries_for_table">
                  <v-data-table :page="currentPage" :pageCount="numberOfPages" :headers="selectedHeaders"
                    :items="salecustomer" :options.sync="options" :server-items-length="totalsalecustomer"
                    :loading="loading" class="elevation-1" must-sort :sort-by="null" :sort-desc="false"
                    @update:sort-by="updateSort('by', $event)" @update:sort-desc="updateSort('desc', $event)"
                    ref="table" :hide-default-footer="true" :footer-props="{
                      'items-per-page-options': [10, 25, 50, 100],
                      'items-per-page-text': 'products per page',
                    }">
                    <template v-slot:top="{ pagination, options, updateOptions }">
                      <v-data-footer :pagination="pagination" :options="options"
                        :items-per-page-options="[10, 25, 50, 100]" @update:options="updateOptions"
                        items-per-page-text="$vuetify.dataTable.itemsPerPageText" />
                    </template>
                    <template v-slot:item.name="{ item }">
                      <td>

                        <div>
                          <button @click="monthClick(item.startDate, item.endDate)" class="button_onclick">
                            {{ item.monthYear }}
                          </button>
                        </div>
                      </td>
                    </template>
                    <template v-slot:item.creditLimit="{ item }">
                      <td align="right">
                        {{ item.creditLimit }}
                      </td>
                    </template>
                    <template v-slot:item.billCreditPeriod="{ item }">
                      {{ format_date(item.billCreditPeriod) }}
                    </template>
                    <template v-slot:item.totalAmount="{ item }">
                      <td align="right">
                        <p>
                          <span class="font_sans">{{ symbol }}</span>
                          {{ item.amount | formatNumberSales }}
                        </p>
                      </td>
                    </template>

                  </v-data-table>
                </div>
                <template>
                  <div class="bottom_navigation-pagination">
                    <v-pagination v-model="page" :length="numberOfPages" :total-visible="5"></v-pagination>
                  </div>
                </template>
              </v-app>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showWhatsappPopup" class="OnlyWhatsappPopupMainPortion">
      <div class="popup-content-Only-Whatsapp-Popup">
        <div class="whatsappPopupCaptionDetailsPortion">
          <div v-if="qrCode && !linked" class="qr-container">
            <div class="WhatsappPopupOnlyHeaderPortion">
              <h6>Send Bills from your own WhatsApp Number</h6>
              <button @click="closePopupDesktop" class="CrossIconButtonSetWhatsapp"><i class="fa fa-times"></i></button>
            </div>
            <div class="row">
              <div class="col-lg-8 col-12">
                <div class="WhatQRcodePortionCaption">
                  <h5>How to Proceed</h5>
                  <p>1. Open WhatsApp on your phone</p>
                  <p>2. Tap Menu <img src="/assets/images/1.0/png/threedots.png" /> on Android, or Settings <img
                      src="/assets/images/1.0/png/setting.png" /> on iPhone</p>
                  <p>3. Tap Linked devices and then Link a device</p>
                  <p>4. Point your phone at this screen to scan QR code.</p>
                </div>
              </div>
              <div class="col-lg-4 col-12">
                <div class="whatsappMainPopupQRCodeImage text-center">
                  <img :src="qrCode" alt="Scan QR to Link WhatsApp" />
                </div>
              </div>
              <div class="col-12">
                <div class="SuportCallWahtsapp">
                  <p>Need help? <a href="tel:+91 83 83 83 83 83">+91 83 83 83 83 83</a></p>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="WhatsappPopupOnlyHeaderPortion">
              <button @click="closePopupDesktop" class="CrossIconButtonSetWhatsapp"><i class="fa fa-times"></i></button>
            </div>
            <div class="WhatQRcodePortionCaption">
              <div class="Congratulationimagepart text-center mb-3">
                <img src="/assets/images/1.0/png/congratulationimage.png" />
              </div>
              <div class="CongratulationCaptionText text-center">
                  <h4>Congratulations</h4>
                  <p>Successfully connected through WhatsApp</p>
                </div>
                </div>
          </div>
        </div>
      </div>
      <!-- Overlay to Close Popup -->
      <div class="WhatsappPopupOverlay" @click="closePopupDesktop"></div>
    </div>
  </section>

</template>

<script>
import Vue from "vue";
var numeral = require("numeral");

Vue.filter("formatNumberSales", function (value) {
  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(
    value
  );
});
import moment from "moment";
import Api from "@/Api";
import Common from "@/Common";
import axios from "axios";
import BackButton from "../components/BackButton.vue";
import GoogleAnalytics from "@/GoogleAnalytics";
import DateRangePicker from "vue2-daterange-picker";

import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  name: "daybook",
  components: { DateRangePicker, BackButton },
  data() {
    let startDate = moment(
      String(localStorage.getItem("date_range_start_date"))
    );
    let endDate = moment(String(localStorage.getItem("date_range_end_date")));
    return {
      active_el: "Month",
      active_date: "oney",
      startDate: startDate,
      endDate: endDate,
      dropdownall: "",
      dateRange: { startDate, endDate },
      options_data: [
        "Ledger Group",
        "Voucher Type",
        "Stock Item",
        "Month",
        "Bill",
      ],
      search: "",
      sortBy: "name",
      orderBy: "-1",
      showInside: false,

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
          text: "Month",
          value: "name",
          align: "left",
          sortable: true,
        },
        {
          text: "Amount",
          value: "totalAmount",
          align: "right",
          sortable: true,
        },

      ],
      ledger_headers: [
        { text: "Ledger Name", value: "name", align: "left", sortable: true },
        { text: "Last Sold Date", value: "lastSalesDate" },
        { text: "Credit Limit", value: "creditLimit" },
        { text: "Credit Days", value: "billCreditPeriod" },
        { text: "Closing Balance", value: "closingBalance", align: "right" },

      ],
      stock_item_headers: [
        { text: "Ledger Name", value: "name", align: "left", sortable: true },
        { text: "Qty", value: "totalQty" },
        { text: "Amount", value: "totalAmount", align: "right" },

      ],
      bill_headers: [
        { text: "Date", value: "voucherDate", align: "left", sortable: true },
        { text: "Ledger Name", value: "partyLedgerName" },
        { text: "Voucher Type", value: "voucherType" },
        { text: "Voucher Number", value: "voucherNumber", sortable: false },
        {
          text: "Amount",
          value: "totalAmount",
          align: "right",
          sortable: true,
        },
        { text: 'Download', value: 'action', align: 'center', sortable: false }
      ],
      page: this.$store.state.Web1_Store.Sales_month_page,
      totalsalecustomer: 0,
      totalsalecustomer1: 0,

      numberOfPages: 0,
      salecustomer: [],
      value: [],
      selectedHeaders: [],
      selectedLedgerHeaders: [],
      selected_stock_item_headers: [],
      selected_bill_headers: [],
      loading: true,
      new_loading: true,
      options: {},
      symbol: "",
      search: "",
      switch_type: "Gross",
      groupSelectValue: "Month",
      totalAmount: 0,
      totalAmount1: 0,
      all_view: 0,
      stock_item_view: 0,
      bill_view: 0,
      month_view: 0,
      inputDisabled: false,
      ledger_view: 1,
      dotshow: 0,
      isPaid: "",
      call_function: "0",
      showWhatsappPopup: false,
      linked: false,
      qrCode: "",
      w_userId: localStorage.getItem("customerId"),
      Base64_url: "",
      Bill_success: false,
      // companyName:"",
    };
  },
  watch: {
    page: function () {
      this.options.page = this.page;
      this.sale_data();
      GoogleAnalytics.sales_month_screen_pagination(this.options.page);
    },

    "options.itemsPerPage"() {
      const StartIndex = (this.$store.state.Web1_Store.Sales_month_page - 1) * this.$store.state.Web1_Store.Sales_month_itemsPerPage
      const endIndex = StartIndex + this.$store.state.Web1_Store.Sales_month_itemsPerPage
      const Difference = endIndex - this.totalPassengers

      setTimeout(() => {
        if (Difference > this.totalPassengers) {

          this.page = 1
          this.options.page = 1

        }
        else {
          this.page = this.$store.state.Web1_Store.Sales_month_page
          this.options.page = this.page;

        }

      }, 1000);
      this.sale_data();

      if (this.call_function == "1") {
        this.call_function = "1";
        GoogleAnalytics.sales_month_screen_Rows_Per_Page(
          this.options.itemsPerPage
        );
      } else {
        this.call_function = "1";
      }
    },
    value(val) {
      this.selectedHeaders = val;
      this.selected_stock_item_headers = val;
      this.selected_bill_headers = val;
      this.selectedLedgerHeaders = val;

    },
    options: {
      handler() {

        GoogleAnalytics.sales_month_listing();
      },
    },
    deep: true,
  },
  created() {
    this.selectedHeaders = this.headers;
    this.selectedLedgerHeaders = this.ledger_headers;
    this.selected_stock_item_headers = this.stock_item_headers;
    this.selected_bill_headers = this.bill_headers;
  },
  computed: {
    currentPage() {
      return this.$store.state.Web1_Store.Sales_month_page;
    },

  },
  methods: {
    // CloseBillSuccesBox(){
    //   this.Bill_success = false;
    // },
    // async openWhatsappPopup(v_id, isEwayStatus, isEInvoiceStatus) {
    //   if (!this.linked) {
    //     try {
    //       const response = await axios.get(`https://wa.livekeeping.com/qr/${this.w_userId}`);
    //       this.qrCode = response.data.qr;
    //       this.linked = response.data.linked;
    //     } catch (error) {
    //       console.error("❌ Error fetching QR:", error);
    //     }
    //     this.showWhatsappPopup = true;
    //   } else {

    //     await this.get_base64(v_id, isEwayStatus, isEInvoiceStatus)


    //   }

    // },
    // async send_message(pdfbase64) {
    //   try {
    //     const response = await axios.post('https://wa.livekeeping.com/send', {
    //       userId: this.w_userId, // Sending userId in the request body,
    //       chatId: "917490992045",
    //       pdfBase64: pdfbase64,
    //       message: "Hello from WhatsApp!"
    //     });
    //     // alert(response.data.status);
    //     this.Bill_success = true;
    //     setTimeout(() => {
    //     this.Bill_success = false;
    //   }, 5000);
    //   } catch (error) {
    //     console.error("❌ Error sending message:", error);
    //   }
    // },
    // async get_base64(v_id, isEwayStatus, isEInvoiceStatus) {
    //   localStorage.setItem("pdfbase64", "");
    //   const data = {
    //     requestFrom: "WEB",
    //     company_id: localStorage.getItem("companyId"),
    //     _userId: localStorage.getItem("customerId"),
    //     voucherId: v_id,
    //     isEway: isEwayStatus == 0 ? false : true,
    //     isEinvoice: isEInvoiceStatus == 0 ? false : true,
    //   };
    //   const headers = {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //     token: localStorage.getItem("webAuthToken"),
    //   };
    //   Api.getPDFForVoucherDetailsGo(data, headers)
    //     .then((response) => {
    //       if (response.data.message == "AUTHENTICATION_FAILED") {
    //         localStorage.clear();
    //         window.location.href = "/";
    //       } else {
    //         // localStorage.setItem("pdfbase64", response.data.data.pdf);
    //         this.send_message(response.data.data.pdf);
    //       }
    //     })
    //     .catch((err) => {
    //       Common.getStatusForActionFailed(err.response.status);
    //       alert("ERROR");
    //       this.loading = false;
    //     });
    // },
    // async checkLinkedStatus() {
    //   // Auto-check WhatsApp link status every 5 seconds
    //   setInterval(async () => {
    //     try {
    //       const response = await axios.get(`https://wa.livekeeping.com/qr/${this.w_userId}`);
    //       this.linked = response.data.linked;
    //       if (this.linked) this.qrCode = ""; // Hide QR when linked
    //     } catch (error) {
    //       console.error("❌ Error checking status:", error);
    //     }
    //   }, 2000);
    // },
    // closePopupDesktop() {
    //   this.showWhatsappPopup = false;
    // },
    freeusergeneratePdf() {
      GoogleAnalytics.sales_month_screen_viewpdf("viewpdf");
    },

    // StoredPage(newValue) {
    //   this.$store.dispatch('Web1_Store/setSalesMonthPage', newValue.page)


    // },
    // updateItemsPerPage(newValue) {
    //   this.$store.dispatch('Web1_Store/setSalesMonthItemsPerPage', newValue)


    // },
    VoucherPdf(v_id, isEwayStatus, isEInvoiceStatus) {
      const data = {
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
        _userId: localStorage.getItem("customerId"),
        voucherId: v_id,
        isEway: isEwayStatus == 0 ? false : true,
        isEinvoice: isEInvoiceStatus == 0 ? false : true,
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getPDFForVoucherDetailsGo(data, headers)
        .then((response) => {
          if (response.data.message == "AUTHENTICATION_FAILED") {
            localStorage.clear();
            window.location.href = "/";
          } else {
            this.pdfUrl = response.data.data.pdf;
            localStorage.setItem("pdfUrl", this.pdfUrl);
            window.open(window.location.origin + "/pdfNew");

          }
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
          alert("ERROR");
          this.loading = false;
        });

    },
    generatePdf() {
      GoogleAnalytics.sales_month_screen_viewpdf("viewpdf");
      if (this.month_view) {
        const data = {
          company_id: localStorage.getItem("companyId"),
          _userId: localStorage.getItem("customerId"),
          startDate: moment(String(this.$refs.picker.start)).format(
            "YYYY-MM-DD"
          ),
          endDate: moment(String(this.$refs.picker.end)).format("YYYY-MM-DD"),
          voucherType: "Sales",
          searchTerm: "",
          groupByAmount: this.switch_type,
          groupBy: "Month",
          ledgerGroup: "",
          currencySymbol: localStorage.getItem("symbol"),
          isPaid: "0",
          requestFrom: "WEB",
          sortBy: parseInt(this.sortBy),
          orderBy: parseInt(this.orderBy),
          pdfUrl: "",
          fileName: "details",
          deviceType: "WEB",
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.getVouchersSummaryPDF(data, headers)
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
      }
      else {
        const data = {
          company_id: localStorage.getItem("companyId"),
          _userId: localStorage.getItem("customerId"),
          requestFrom: "WEB",
          voucherTypes: ["Sales"],
          startDate: moment(String(this.$refs.picker.start)).format("YYYY-MM-DD"),
          endDate: moment(String(this.$refs.picker.end)).format("YYYY-MM-DD"),
          sortBy: parseInt(this.sortBy),
          orderBy: parseInt(this.orderBy),
          isForPdf: true
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
        Api.getVouchersPDF(data, headers)
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

      }
    },
    activate: function (el) {
      if (
        el === "Bill" ||
        el === "Ledger Group" ||
        el === "Voucher Type" ||
        el === "Stock Group" ||
        el === "Stock Category"
      ) {
        this.dotshow = 1;
      } else {
        this.dotshow = 0;
      }


      if (el === "Ledger") {
        this.$router.push({ name: "dashboard-sales" });
      } else if (el === "Stock Item") {
        this.$router.push({ name: "dashboard-sales-stock-item" });
      } else if (el === "Month") {
        this.$router.push({ name: "dashboard-sales-month" });
      } else if (el === "Bill") {
        this.$router.push({ name: "dashboard-sales-bill" });
      } else if (el === "Ledger Group") {
        this.$router.push({ name: "dashboard-sales-ledger-group" });
      } else if (el === "Voucher Type") {
        this.$router.push({ name: "dashboard-sales-voucher-type" });
      } else if (el === "Stock Category") {
        this.$router.push({ name: "dashboard-sales-stock-category" });
      } else if (el === "Stock Group") {
        this.$router.push({ name: "dashboard-sales-stock-group" });
      }
      this.active_el = el;
      this.groupSelectValue = el;
      this.sale_data("", el, this.switch_type);
      GoogleAnalytics.sales_screen_filter(el, this.switch_type);
    },
    activatedate: function (date) {
      if (date === "oned") {
        // one day
        GoogleAnalytics.sales_month_screen_date_filter("1M");
        var new_date_start_date = moment(String(new Date())).format(
          "YYYY-MM-DD"
        );
        var new_date_end_date = moment(String(new Date())).format("YYYY-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "onew") {
        // one week
        GoogleAnalytics.sales_month_screen_date_filter("1W");
        var new_date_start_date = moment(
          String(new Date(Date.now() - 7 * 24 * 3600 * 1000))
        ).format("YYYY-MM-DD");
        var new_date_end_date = moment(String(new Date())).format("YYYY-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "onem") {
        // one month
        GoogleAnalytics.sales_month_screen_date_filter("1M");
        var new_date_start_date = moment(String(new Date()))
          .add(-1, "M")
          .format("YYYY-MM-DD");
        var new_date_end_date = moment(String(new Date())).format("YYYY-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "threem") {
        // 3 month
        GoogleAnalytics.sales_month_screen_date_filter("3M");
        var new_date_start_date = moment(String(new Date()))
          .add(-3, "M")
          .format("YYYY-MM-DD");
        var new_date_end_date = moment(String(new Date())).format("YYYY-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "oney") {
        // 1 Year
        GoogleAnalytics.sales_month_screen_date_filter("1Y");
        var new_date_start_date = moment(
          String(
            new Date(
              String(localStorage.getItem("first_date_range_start_date"))
            )
          )
        ).format("YYYY-MM-DD");
        var new_date_end_date = moment(
          String(
            new Date(String(localStorage.getItem("first_date_range_end_date")))
          )
        ).format("YYYY-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "twoy") {
        // 2 Year
        GoogleAnalytics.sales_month_screen_date_filter("2Y");
        var new_date_start_date = moment(
          String(
            new Date(
              String(localStorage.getItem("first_date_range_start_date"))
            )
          )
        )
          .add(-1, "years")
          .format("YYYY-MM-DD");
        var new_date_end_date = moment(
          String(
            new Date(String(localStorage.getItem("first_date_range_end_date")))
          )
        ).format("YYYY-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      } else if (date === "max") {
        // max date
        GoogleAnalytics.sales_month_screen_date_filter("Max");
        var new_date_start_date = moment(
          String(new Date(String(localStorage.getItem("max_startFrom"))))
        ).format("YYYY-MM-DD");
        var new_date_end_date = moment().format("YYYY-MM-DD");
        this.dateRange.startDate = new_date_start_date;
        this.dateRange.endDate = new_date_end_date;
        this.$refs.picker.start = new_date_start_date;
        this.$refs.picker.end = new_date_end_date;
      }
      localStorage.setItem("date_range_start_date", new_date_start_date);
      localStorage.setItem("date_range_end_date", new_date_end_date);
      this.sale_data("", this.groupSelectValue, this.switch_type);
      localStorage.setItem("active_date", date);
      this.active_date = date;
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
      localStorage.setItem("date_range_start_date", moment(new_date_start_date).format("YYYY-MM-DD"));
      localStorage.setItem("date_range_end_date", moment(new_date_end_date).format("YYYY-MM-DD"));
      this.sale_data("", this.groupSelectValue, this.switch_type);
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
      localStorage.setItem("date_range_start_date", moment(new_date_start_date).format('YYYY-MM-DD'));
      localStorage.setItem("date_range_end_date", moment(new_date_end_date).format('YYYY-MM-DD'));
      this.sale_data("", this.groupSelectValue, this.switch_type);
    },
    sale_data(type, group_name = "Ledger", switch_type = "Gross") {
      this.symbol = localStorage.getItem("symbol");
      var self = this;
      this.loading = true;
      if (type === "search") {
        this.options.page = 1;
      }
      this.new_loading = true;


      if (this.groupSelectValue === "Bill") {
        this.all_view = 0;
        this.stock_item_view = 0;
        this.bill_view = 1;
        this.month_view = 0;
        this.ledger_view = 0;
        this.inputDisabled = true;

        const { page, itemsPerPage } = this.options;
        let pageNumber = page - 1;
        const data = {
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          startDate: moment(String(this.dateRange.startDate)).format("YYYY-MM-DD"),
          endDate:moment(String(this.dateRange.endDate)).format("YYYY-MM-DD"),

          voucherTypes: ["Sales"],
          searchTerm: this.search,
          groupByAmount: switch_type,
          startLimit: pageNumber * itemsPerPage,
          endLimit: itemsPerPage,
          sortBy: this.sortBy,
          orderBy: parseInt(this.orderBy),
          requestFrom: "WEB",
          stockItemId: "",
          ledgerGuid: "",
          stockItemGuid: "",
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };

        Api.getVouchersbyCompanyIdGo(data, headers)
          .then((response) => {

            const responseStatus = Common.getStatusForActionFailed(
              response.data.status
            );
            if (responseStatus == "200") {
              for (let [key, value] of Object.entries(
                response.data.data.list
              )) {
                response.data.data.list[key].url =
                  "/parties/details/" +
                  response.data.data.list[key]._id +
                  "/" +
                  response.data.data.list[key].parentType;
                response.data.data.list[key].actualAmount = Math.abs(
                  response.data.data.list[key].actualAmount
                );
                if (response.data.data.list[key].invoiceId === "") {
                  response.data.data.list[key].invoiceId = "-";
                }
                if (response.data.data.list[key].voucherNumber === "") {
                  response.data.data.list[key].voucherNumber = "-";
                }
              }
              let totalPages = Math.ceil(
                response.data.data.totalCount / itemsPerPage
              );
              this.totalAmount = Math.abs(response.data.data.ledgerTotalAmount);
              this.totalAmount1 = Math.abs(response.data.data.returnNote);
              this.loading = false;
              this.new_loading = false;
              this.salecustomer = response.data.data.list;
              this.totalsalecustomer1 = response.data.data.totalCount;
              this.numberOfPages = totalPages;

            } else {
              this.loading = false;
              this.new_loading = false;
              this.salecustomer = [];
              this.totalsalecustomer = 0;
              this.numberOfPages = 0;
              this.totalAmount = 0;
              this.totalAmount1 = 0;
            }
          })

          .catch((err) => {

            Common.getStatusForActionFailed(err.response.status);

            this.loading = false;
            this.new_loading = false;
          });
      }

      if (this.groupSelectValue === "Month") {
        this.all_view = 0;
        this.stock_item_view = 0;
        this.bill_view = 0;
        this.month_view = 1;
        this.ledger_view = 0;
        this.inputDisabled = false;

        const { page, itemsPerPage } = this.options;

        let pageNumber = page - 1;
        const data = {
          _userId: localStorage.getItem("customerId"),
          company_id: localStorage.getItem("companyId"),
          startDate: moment(
            String(localStorage.getItem("date_range_start_date"))
          ).format("YYYY-MM-DD"),
          endDate: moment(
            String(localStorage.getItem("date_range_end_date"))
          ).format("YYYY-MM-DD"),
          voucherType: "Sales",
          searchTerm: this.search,
          groupByAmount: this.switch_type,
          startLimit: pageNumber * itemsPerPage,
          endLimit: itemsPerPage,
          sortBy: this.sortBy,
          orderBy: parseInt(this.orderBy),
          requestFrom: "WEB",
        };
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };

        Api.getVouchersSummaryByMonthGo(data, headers)
          .then((response) => {


            const responseStatus = Common.getStatusForActionFailed(
              response.data.status
            );
            if (responseStatus == "200") {
              for (let [key, value] of Object.entries(
                response.data.data.list
              )) {
                response.data.data.list[key].url = "#";

                response.data.data.list[key].monthYear = moment(
                  response.data.data.list[key].monthYear, 'MMM-YYYY'
                ).format("MMM YY");

                response.data.data.list[key].amount =
                  Math.abs(response.data.data.list[key].amount);
              }

              let totalPages = Math.ceil(
                response.data.data.totalCount / itemsPerPage
              );
              this.totalAmount = Math.abs(response.data.data.totalAmount);

              this.loading = false;
              this.new_loading = false;
              this.salecustomer = response.data.data.list;
              this.totalsalecustomer = response.data.data.totalCount;
              this.numberOfPages = totalPages;
            } else {
              this.loading = false;
              this.new_loading = false;
              this.salecustomer = [];
              this.totalsalecustomer = 0;
              this.numberOfPages = 0;
              this.totalAmount = 0;
              this.totalAmount1 = 0;
            }
          })

          .catch((err) => {

            Common.getStatusForActionFailed(err.response.status);

            this.loading = false;
            this.new_loading = false;
          });
      }
    },
    monthClick(start_date, end_date) {
      this.dateRange.startDate = start_date;
      this.dateRange.endDate = end_date;
      this.page = 1;

      this.options.itemsPerPage = 10;
      this.active_el = "Bill"

      this.groupSelectValue = "Bill";
      this.switch_type = "Gross";
      this.sale_data("", this.groupSelectValue, this.switch_type);
    },

    format_date(value) {
      if(value !== undefined || value !== null){

        value = value.split(" ")[0];
        if (value) {
          if (value == "1900-01-01") {
            value = "-";
            return value;
          } else {
            return moment(String(value)).format("DD MMM yyyy");
          }
        }
      }
    },
    groupSelect(event) {
      this.sale_data("", event.target.value, this.switch_type);
      GoogleAnalytics.sales_screen_filter(event.target.value, this.switch_type);
    },
    switch_change(event) {
      this.switch_type = event.target.value;
      this.sale_data("", this.groupSelectValue, event.target.value);
      GoogleAnalytics.sales_screen_filter(
        this.groupSelectValue,
        event.target.value
      );
    },

    handleBlur() {
      const type = "search";
      GoogleAnalytics.sales_month_screen_search(this.search);
      this.sale_data(type, this.groupSelectValue, this.switch_type);
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

      setTimeout(() => {
        this.sale_data(
          "",
          this.groupSelectValue,
          this.switch_type,
          this.orderBy
        );
      }, 10);
      GoogleAnalytics.sales_month_screen_sorting(this.sortBy, this.orderBy);

    },



    update() {
      localStorage.setItem(
        "date_range_start_date",
        moment(String(this.$refs.picker.start)).format("YYYY-MM-DD")
      );
      localStorage.setItem(
        "date_range_end_date",
        moment(String(this.$refs.picker.end)).format("YYYY-MM-DD")
      );
      GoogleAnalytics.sales_month_screen_date_filter("Custom");
      this.sale_data("", this.groupSelectValue, this.switch_type);
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
  },
  mounted() {
    // this.checkLinkedStatus();
    this.sortBy = "";

    this.isPaid = localStorage.getItem("isPaid");
    // this.companyName = localStorage.getItem("companyName");

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
.v-application .primary {
  background: #8cc63e !important;
  border-color: #8cc63e !important;
}

.v-application .elevation-1 {
  box-shadow: none !important;
}
</style>
