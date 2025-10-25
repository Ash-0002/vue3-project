/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: March 20, 2025 Author: Varun Sareen (Sr. Software
Engineer) Country: India */
<template>
  <section class="reports_page_new">
    <div class="BillSuccessFullySent" v-if="toastMsg">
      <div class="ReportErrorMsg">
        <div class="IconTextSuccessBill">
          <span>{{ toastDisplayMsg }}</span>
        </div>
        <div class="CrossIconPart" @click="CloseBillSuccesBox()">
          <img src="../assets/cross adnan.svg" />
        </div>
      </div>
    </div>
    <!--start first card box-->
    <div class="page-header-title-box bg-white-all-pages setmobileheaderportion">
      <div class="row align-items-center">
        <div class="col-lg-6 col-4">
          <div class="newreportsheadingportion">
            <h3 id="" class="partyName">Reports</h3>
          </div>
        </div>
        <div class="col-lg-6 col-8">
          <div class="newreportsheadingsearch">
            <div class="search-container-reports">
              <i class="fa fa-search search-icon"></i>
              <input type="text" v-model="searchQuery" placeholder="Search..." class="search-input"  v-on:keyup="handleBlur" ref="searchInput" />
              <img v-if="searchQuery" @click="clearSearch" src="../assets/cross sign.svg" alt="Clear"
                class="reports_clear-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main_card">
      <div v-if="hasResults">
        <div class="row">
          <div class="col-lg-6 col-12" v-if="filteredSections(sectionA).length > 0">
            <div class="ReportsPartPortionMain">
              <div v-if="!searchQuery">
                <div class="ReportsPortionHeadingPart">
                  <img src="../assets/Heading star.svg" class="heading_icon" />
                  <h5>Favorites</h5>
                </div>
                <div class="ReportsPortionULdiv">
                  <ul id="report_favorites">
                    <li v-for="(fav, index) in favoriteReports" :key="`favorites_${index}`">
                      <div v-if="(fav.isPremium && (isPaid == '' || isPaid == null))"
                        v-b-modal.customerstatus-popup class="d-flex align-items-center justify-content-start">
                        <span class="star_icon" @click="addToFavoutrites(fav)" v-if="!parentUserId">
                          <img src="../assets/filled star.svg" alt="Filled star" />
                        </span>
                        <button class="flex-grow-1">
                          {{ fav.sectionName }} - {{ fav.name }}
                        </button>
                        <span>
                          <img src="../assets/crown-color.svg" />
                        </span>
                      </div>
                      <div v-else-if="fav.addOns" class="d-flex align-items-center justify-content-start">
                        <span class="star_icon" @click="addToFavoutrites(fav)" v-if="!parentUserId">
                          <img src="../assets/filled star.svg" alt="Filled star" />
                        </span>
                        <button class="flex-grow-1" @click="handleAddOnNavigation(fav.addOns)">
                          {{ fav.sectionName }} - {{ fav.name }}
                        </button>
                        <span>
                          <img src="../assets/crown-color.svg" />
                        </span>
                      </div>
                      <div v-else-if="fav.canBeLocked && parentUserId != ''"
                        class="d-flex align-items-center justify-content-start">
                        <span class="star_icon" @click="addToFavoutrites(fav)" v-if="!parentUserId">
                          <img src="../assets/filled star.svg" alt="Filled star" />
                        </span>
                        <button class="flex-grow-1" @click="handleLockPermission()">
                          {{ fav.sectionName }} - {{ fav.name }}
                        </button>
                        <span>
                          <img src="../assets/lock-red.png" class="img-fluid" />
                        </span>
                      </div>
                      <div v-else class="d-flex align-items-center justify-content-start">
                        <span class="star_icon" @click="addToFavoutrites(fav)" v-if="!parentUserId">
                          <img src="../assets/filled star.svg" alt="Filled star" />
                        </span>
                        <button @click="handleClickAndNavigate(fav)" class="flex-grow-1">
                          {{ fav.sectionName }} - {{ fav.name }}
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div v-for="section in filteredSections(sectionA)" :key="section.heading" class="ReportsPortion">
                <div class="ReportsPortionHeadingPart">
                  <img :src="section.image" />
                  <h5>{{ section.heading }}</h5>
                </div>
                <div class="ReportsPortionULdiv">
                  <ul :id="getSectionId(section.heading)">
                    <li v-for="report in section.filteredReports" :key="report.path">
                      <div v-if="(report.isPremium && (isPaid == '' || isPaid == null))"
                        v-b-modal.customerstatus-popup class="d-flex align-items-center justify-content-start">
                        <span @click.stop="addToFavoutrites(report)" class="star_icon" v-if="!parentUserId">
                          <img
                            :src="favorites.includes(report.key) ? require('../assets/filled star.svg') : require('../assets/unfilled star.svg')"
                            alt="star icon" />
                        </span>
                        <button class="flex-grow-1">
                          {{ report.name }}
                        </button>
                        <span>
                          <img src="../assets/crown-color.svg" />
                        </span>
                      </div>
                      <div v-else-if="report.addOns" class="d-flex align-items-center justify-content-start">
                        <span @click.stop="addToFavoutrites(report)" class="star_icon" v-if="!parentUserId">
                          <img
                            :src="favorites.includes(report.key) ? require('../assets/filled star.svg') : require('../assets/unfilled star.svg')"
                            alt="star icon" />
                        </span>
                        <button class="flex-grow-1" @click="handleAddOnNavigation(report.addOns)">
                          {{ report.name }}
                        </button>
                        <span>
                          <img src="../assets/crown-color.svg" />
                        </span>
                      </div>
                      <div v-else-if="report.canBeLocked && parentUserId != ''"
                        class="d-flex align-items-center justify-content-start">
                        <span @click="addToFavoutrites(report)" class="star_icon" v-if="!parentUserId">
                          <img
                            :src="favorites.includes(report.key) ? require('../assets/filled star.svg') : require('../assets/unfilled star.svg')"
                            alt="star icon" />
                        </span>
                        <button class="flex-grow-1" @click="handleLockPermission()">
                          {{ report.name }}
                        </button>
                        <span>
                          <img src="../assets/lock-red.png" class="img-fluid" />
                        </span>
                      </div>
                      <div class="d-flex align-items-center justify-content-start" v-else>
                        <span @click="addToFavoutrites(report)" class="star_icon" v-if="!parentUserId">
                          <img
                            :src="favorites.includes(report.key) ? require('../assets/filled star.svg') : require('../assets/unfilled star.svg')"
                            alt="star icon" />
                        </span>
                        <button class="flex-grow-1" @click="handleClickAndNavigate(report)">
                          {{ report.name }}
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="ReportsPartPortionMain">
              <div v-for="section in filteredSections(sectionB)" :key="section.heading" class="ReportsPortion">
                <div class="ReportsPortionHeadingPart">
                  <img :src="section.image" />
                  <h5>{{ section.heading }}</h5>
                </div>
                <div class="ReportsPortionULdiv">
                  <ul :id="getSectionId(section.heading)">
                    <li v-for="report in section.filteredReports" :key="report.path">
                      <div v-if="(report.isPremium && (isPaid == '' || isPaid == null)) || report.addOns"
                        v-b-modal.customerstatus-popup class="d-flex align-items-center justify-content-start">
                        <span @click.stop="addToFavoutrites(report)" class="star_icon" v-if="!parentUserId">
                          <img
                            :src="favorites.includes(report.key) ? require('../assets/filled star.svg') : require('../assets/unfilled star.svg')"
                            alt="star icon" />
                        </span>
                        <button class="flex-grow-1">
                          {{ report.name }}
                        </button>
                        <span>
                          <img src="../assets/crown-color.svg" />
                        </span>
                      </div>
                      <div v-else-if="report.canBeLocked && parentUserId != ''"
                        class="d-flex align-items-center justify-content-start">
                        <span @click="addToFavoutrites(report)" class="star_icon" v-if="!parentUserId">
                          <img
                            :src="favorites.includes(report.key) ? require('../assets/filled star.svg') : require('../assets/unfilled star.svg')"
                            alt="star icon" />
                        </span>
                        <button class="flex-grow-1" @click="handleLockPermission()">
                          {{ report.name }}
                        </button>
                        <span>
                          <img src="../assets/lock-red.png" class="img-fluid" />
                        </span>
                      </div>
                      <div v-else class="d-flex align-items-center justify-content-start">
                        <span @click="addToFavoutrites(report)" class="star_icon" v-if="!parentUserId">
                          <img
                            :src="favorites.includes(report.key) ? require('../assets/filled star.svg') : require('../assets/unfilled star.svg')"
                            alt="star icon" />
                        </span>
                        <button @click="handleClickAndNavigate(report)" class="flex-grow-1">
                          {{ report.name }}
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="reports_no-results">
        <div class="no-results-box">
          <img src="../assets/file not found.svg" alt="No Report Found" class="no-report-image" />
          <p class="no-report-text">No Report Found</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Api from "@/Api";
import Common from "@/Common";
import GoogleAnalytics from "@/GoogleAnalytics";
export default {
  data() {
    return {
      ewayReadPermission: false,
      eInvoiceReadPermission: false,
      eWayInvoiceStatus: false,
      parentUserId: localStorage.getItem("_parentUserId"),
      customerId: localStorage.getItem("customerId"),
      searchQuery: "",
      isPaid: "",
      isBalanceSheet: true,
      isProfitLoss: true,
      isTrialBalance: true,
      isAdmin: true,
      isRead_isSales: true,
      isRead_isOutstandingReceivable: true,
      isRead_isReceipt: true,
      isRead_isPurchase: true,
      isRead_isOutstandingPayable: true,
      isRead_isPayment: true,
      isRead_isBank: true,
      isRead_isCash: true,
      isRead_isSalesOrder: true,
      isRead_isPurchaseOrder: true,
      isRead_isQuotation: true,
      isWrite_isQuotation: true,
      isRead_isLedger: true,
      isRead_isStockItem: true,
      isRead_isContra: true,
      isRead_isJournal: true,
      isRead_isDebitNote: true,
      isRead_isCreditNote: true,
      isMaker: true,
      isChecker: true,
      myVouchers: true,
      showvchtype: false,
      version: "",
      source: "",
      isInstalled: 0,
      sectionA: [],
      sectionB: [],
      favorites: [],
      toastMsg: false,
      isConverted: false,
      toastDisplayMsg: "You can add a maximum of 10 Favourite Items",
      payURL: process.env.VUE_APP_PAY_URL,
    };
  },
  computed: {
    favoriteReports() {
      let allReports = [];

      const collectReports = (sections) => {
        this.filteredSections(sections).forEach(section => {
          allReports = [
            ...allReports,
            ...section.filteredReports.map(report => ({
              ...report,
              sectionName: section.heading,
            })),
          ];
        });
      };

      collectReports(this.sectionA);
      collectReports(this.sectionB);

      return this.favorites
        .map(key => {
          const report = allReports.find(rep => rep.key === key);
          return report ? { ...report } : null;
        })
        .filter(report => report !== null);
    },

    hasResults() {
      return this.filteredSections(this.sectionA).length > 0 ||
        this.filteredSections(this.sectionB).length > 0;
    }
  },
  created() {
    this.updateLocalStorageValues();
    window.addEventListener("storageChanged", () => {
      this.updateLocalStorageValues();
    });
  },
  methods: {
    handleBlur(){
      if (this.searchQuery && this.searchQuery.length > 2) {
        console.log('searchquery',this.searchQuery.length);
    GoogleAnalytics.reports_screen_search(this.searchQuery);
  }
    },
    getSectionId (name){ 
      return name
        .toLowerCase()                // make it lowercase
        .replace(/[^a-z0-9 ]/g, '')   // remove any non-alphanumeric/special characters (optional)
        .replace(/\s+/g, '_');        // replace spaces with underscores
    },
    CloseBillSuccesBox() {
      this.toastMsg = false;
    },
    updateLocalStorageValues() {
      this.isAdmin = localStorage.getItem("isAdmin");
      this.isRead_isSales = localStorage.getItem("isRead_isSales");
      this.isRead_isOutstandingReceivable = localStorage.getItem(
        "isRead_isOutstandingReceivable"
      );
      this.isRead_isReceipt = localStorage.getItem("isRead_isReceipt");
      this.isRead_isPurchase = localStorage.getItem("isRead_isPurchase");
      this.isRead_isOutstandingPayable = localStorage.getItem(
        "isRead_isOutstandingPayable"
      );
      this.isRead_isPayment = localStorage.getItem("isRead_isPayment");
      this.isRead_isBank = localStorage.getItem("isRead_isBank");
      this.isRead_isCash = localStorage.getItem("isRead_isCash");
      this.isRead_isSalesOrder = localStorage.getItem("isRead_isSalesOrder");
      this.isRead_isPurchaseOrder = localStorage.getItem(
        "isRead_isPurchaseOrder"
      );
      this.isRead_isQuotation = localStorage.getItem("isRead_isQuotation");
      this.isWrite_isQuotation = localStorage.getItem("isWrite_isQuotation");
      this.isRead_isLedger = localStorage.getItem("isRead_isLedger");
      this.isRead_isStockItem = localStorage.getItem("isRead_isStockItem");
      this.isRead_isContra = localStorage.getItem("isRead_isContra");
      this.isRead_isJournal = localStorage.getItem("isRead_isJournal");
      this.isRead_isDebitNote = localStorage.getItem("isRead_isDebitNote");
      this.isRead_isCreditNote = localStorage.getItem("isRead_isCreditNote");

      //Report
      this.isBalanceSheet = localStorage.getItem("isBalanceSheet");
      this.isProfitLoss = localStorage.getItem("isProfitLoss");
      this.isTrialBalance = localStorage.getItem("isTrialBalance");

      this.isChecker = localStorage.getItem("isChecker");
      this.isMaker = localStorage.getItem("isMaker");
      const ewayInvoice = localStorage.getItem("EWAY_EINVOICE_STATUS");

      if (
        this.isRead_isSales == "true" ||
        this.isRead_isOutstandingReceivable == "true" ||
        this.isRead_isPurchase == "true" ||
        this.isRead_isOutstandingPayable == "true" ||
        this.isRead_isCreditNote == "true" ||
        this.isRead_isDebitNote == "true" ||
        this.isRead_isReceipt == "true" ||
        this.isRead_isPayment == "true" ||
        this.isRead_isBank == "true" ||
        this.isRead_isCash == "true" ||
        this.isRead_isSalesOrder == "true" ||
        this.isRead_isPurchaseOrder == "true" ||
        this.isRead_isJournal == "true" ||
        this.isRead_isContra == "true" ||
        this.isRead_isQuotation == "true" ||
        this.isChecker == "true" ||
        this.isMaker == "true"
      ) {
        this.myVouchers = true;
      }
      else {
        this.myVouchers = false;
      }

      if(localStorage.getItem("customerStatus").toLowerCase() == "installation done"){
        this.eWayInvoiceStatus = false;
      }else if(localStorage.getItem("customerStatus").toLowerCase() == "converted"){
        if (ewayInvoice.includes("EWAY_EINVOICE")) {
        this.eWayInvoiceStatus = false;
        }
        else {
          this.eWayInvoiceStatus = true;
        }
      }

      this.updateSectionA();
      this.updateSectionB();
    },

    updateSectionA() {
      this.sectionA = [
        {
          heading: "Accounting Reports",
          image: "assets/images/1.0/reports/newimage/accountingreports.png",
          reports: [
            { name: "Day Book", path: "/day-book", isPremium: false, canBeLocked: false, addOns: false, key: 'daybook' },
            { name: "Expenses", path: "/expenses", isPremium: false, canBeLocked: false, addOns: false, key: 'expenses', },
            { name: "Inactive Customers", path: "/inactive-customers", isPremium: false, canBeLocked: false, addOns: false, key: 'inactivecustomers' },
            { name: "Inactive Items", path: "/inactive-items", isPremium: false, canBeLocked: false, addOns: false, key: 'inactiveitems' },
            { name: "Ledger Report", path: "/parties", isPremium: false, canBeLocked: false, addOns: false, key: 'ledgerreports' },
          ],
        },
        {
          heading: "My Entries",
          image: "assets/images/1.0/reports/newimage/myentries.png",
          reports: [
            { name: "My Vouchers", path: "/my-vouchers", isPremium: true, canBeLocked: !this.myVouchers, addOns: false, key: 'myvouchers' },
            { name: "My Quotations", path: "/my-quotations", isPremium: false, canBeLocked: !JSON.parse(this.isRead_isQuotation) && !JSON.parse(this.isWrite_isQuotation), addOns: false, key: 'myquotation' },
            { name: "My eWay Bills", path: "/my-eway-bill", isPremium: true, canBeLocked: !JSON.parse(this.ewayReadPermission), addOns: this.eWayInvoiceStatus, key: 'myewaybills' },
            { name: "My eInvoices", path: "/my-einvoices", isPremium: true, canBeLocked: !JSON.parse(this.eInvoiceReadPermission), addOns: this.eWayInvoiceStatus, key: 'myeinvoices' },
            { name: "My Parties", path: "/my-ledgers", isPremium: true, canBeLocked: !JSON.parse(this.isRead_isLedger), addOns: false, key: 'myparties' },
            { name: "My Stock Items", path: "/my-stock-items", isPremium: true, canBeLocked: !JSON.parse(this.isRead_isStockItem), addOns: false, key: 'mystockitems' },
            { name: "Tracking Report", path: "/tracking-report", isPremium: true, canBeLocked: this.parentUserId ? true : false, addOns: false, key: 'trackingreport' },
          ],
        },
        {
          heading: "Financial Reports",
          image: "assets/images/1.0/reports/newimage/financialreports.png",
          reports: [
            { name: "Balance Sheet", path: "/balancesheet", isPremium: true, canBeLocked: !JSON.parse(this.isBalanceSheet), addOns: false, key: 'balancesheet' },
            { name: "Profit & Loss", path: "/profit-loss", isPremium: true, canBeLocked: !JSON.parse(this.isProfitLoss), addOns: false, key: 'profitloss' },
            { name: "Trial Balance", path: "/trial-balance", isPremium: true, canBeLocked: !JSON.parse(this.isTrialBalance), addOns: false, key: 'trialbalance' },
          ],
        },
        {
          heading: "Top Reports",
          image: "assets/images/1.0/reports/newimage/topreports.png",
          reports: [
            { name: "Top Customers", path: "/top-reports?customers=true", isPremium: false, canBeLocked: false, addOns: false, key: 'topcustomer' },
            { name: "Top Suppliers", path: "/top-reports?supplier=true", isPremium: false, canBeLocked: false, addOns: false, key: 'topsuppliers' },
            {
              name: "Items Sold by Value",
              path: "/top-reports?soldByValue=true", isPremium: false, canBeLocked: false,
              addOns: false, key: 'itemssoldbyvalue'
            },
            {
              name: "Items Purchased by Value",
              path: "/top-reports?purchByValue=true", isPremium: false, canBeLocked: false,
              addOns: false, key: 'itemspurchasedbyvalue'
            },
            { name: "Items Sold by Qty", path: "/top-reports?SoldByQTY=true", isPremium: false, canBeLocked: false, addOns: false, key: 'itemssoldbyqty' },
            {
              name: "Items Purchased by Qty",
              path: "/top-reports?purchByQTY=true", isPremium: false, canBeLocked: false,
              addOns: false, key: 'itemspurchasedbyqty'
            },
          ],
        },
      ]
    },
    updateSectionB() {
      this.sectionB = [
        {
          heading: "Sales Overview",
          image: "assets/images/1.0/reports/newimage/sales.png",
          reports: [
            { name: "By Month", path: "/sales-month", isPremium: false, canBeLocked: !(JSON.parse(this.isRead_isSales)), addOns: false, key: 'sales_by_month' },
            { name: "By Bills", path: "/sales-bill", isPremium: false, canBeLocked: !(JSON.parse(this.isRead_isSales)), addOns: false, key: 'sales_by_bills' },
            { name: "By Ledger", path: "/sales", isPremium: false, canBeLocked: !(JSON.parse(this.isRead_isSales)), addOns: false, key: 'sales_by_ledger' },
            { name: "By Stock Item", path: "/sales-stock-item", isPremium: false, canBeLocked: !(JSON.parse(this.isRead_isSales)), addOns: false, key: 'sales_by_stock_item' },
            { name: "By Voucher Type", path: "/sales-voucher-type", isPremium: false, canBeLocked: !(JSON.parse(this.isRead_isSales)), addOns: false, key: 'sales_by_voucher_type' },
            { name: "By Ledger Group", path: "/sales-ledger-group", isPremium: false, canBeLocked: !(JSON.parse(this.isRead_isSales)), addOns: false, key: 'sales_by_ledger_group' },
            { name: "By Stock Group", path: "/sales-stock-group", isPremium: false, canBeLocked: !(JSON.parse(this.isRead_isSales)), addOns: false, key: 'sales_by_stock_group' },
            { name: "By Stock Category", path: "/sales-stock-category", isPremium: false, canBeLocked: !(JSON.parse(this.isRead_isSales)), addOns: false, key: 'sales_by_stock_category' },
          ],
        },
        {
          heading: "Stock Reports",
          image: "assets/images/1.0/reports/newimage/stockreports.png",
          reports: [
            { name: "In Stock", path: "/items?inStock=true", isPremium: false, canBeLocked: false, addOns: false, key: 'in_stock' },
            { name: "Not In Stock", path: "/items?notInStock=true", isPremium: false, canBeLocked: false, addOns: false, key: 'not_in_stock' },
            { name: "Negative Stock", path: "/items?negStock=true", isPremium: false, canBeLocked: false, addOns: false, key: 'negative_stock' },
            { name: "Stock Groups", path: "/items_group", isPremium: false, canBeLocked: false, addOns: false, key: 'stock_groups' },
            { name: "Stock Category", path: "/items_category", isPremium: false, canBeLocked: false, addOns: false, key: 'stock_category' },
          ],
        },
        {
          heading: "Receivables",
          image: "assets/images/1.0/reports/newimage/receivables.png",
          reports: [
            { name: "All Due", path: "/receivables?allDue=true", isPremium: false, canBeLocked: !JSON.parse(this.isRead_isOutstandingReceivable), addOns: false, key: 'rec_all_due' },
            { name: "Due Today", path: "/receivables?todayDue=true", isPremium: false, canBeLocked: !JSON.parse(this.isRead_isOutstandingReceivable), addOns: false, key: 'rec_due_today' },
            { name: "Not Due", path: "/receivables?notDue=true", isPremium: false, canBeLocked: !JSON.parse(this.isRead_isOutstandingReceivable), addOns: false, key: 'rec_not_due' },
          ],
        },
        // {
        //   heading: "Parties",
        //   image: "assets/images/1.0/reports/newimage/parties.png",
        //   reports: [
        //     { name: "All Customers", path: "/parties?debtors=true", isPremium: false, canBeLocked: false, addOns: false, key: 'costcentersummary' },
        //     { name: "All Suppliers", path: "/parties?credtors=true", isPremium: false, canBeLocked: false, addOns: false, key: 'cc_ledgerbreakup' },
        //     { name: "Ledger Report", path: "/parties?allParties=true", isPremium: false, canBeLocked: false, addOns: false, key: 'cc_groupbreakup' },
        //   ],
        // },
      ]
    },
    showToast(message) {
      this.toastDisplayMsg = message;
      this.toastMsg = true;
      setTimeout(() => {
        this.toastMsg = false;
      }, 7000);
    },
    addToFavoutrites(report) {
      const reportKey = report.key;
      const index = this.favorites.indexOf(reportKey);
      if (index === -1) {
        if (this.favorites.length < 10) {
          this.toastMsg = false;
          this.favorites.push(reportKey);
          this.AddToFavourate();
        } else {
          this.showToast("You can add a maximum of 10 Favourite Items");
        }
      } else {
        if (this.favorites.length > 4) {
          this.favorites = this.favorites.filter(fav => fav !== reportKey);
          this.AddToFavourate();
          this.toastMsg = false;
        }
        else {
          this.showToast("You must have 4 Favourite Items");
        }
      }
      // Google Analytics
      const [formattedSection, formattedReport] = this.googleAnalyticsFormat(report);
      const analyticsEventName = `report_favourate_${formattedSection}_${formattedReport}`;
      if (GoogleAnalytics[analyticsEventName]) {
        GoogleAnalytics[analyticsEventName]();
      } else {
        console.log(`Analytics function not found: GoogleAnalytics.${analyticsEventName}`);
      }
    },
    googleAnalyticsFormat(report) {
      const section = [...this.sectionA, ...this.sectionB].find((sec) =>
        sec.reports.some((r) => r.path === report.path)
      );
      const sectionName = section ? section.heading : "Unknown Section";
      const formatName = (name) => {
        if (name.toLowerCase() === "profit & loss") return "profit_loss";
        return name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "_")
          .replace(/_+/g, "_")
          .replace(/^_|_$/g, "");
      };
      const formattedSection = formatName(sectionName);
      const formattedReport = formatName(report.name);
      return [formattedSection, formattedReport]
    },
    handleClickAndNavigate(report) {
      if (report.name === "My Vouchers" && !this.myVouchers) {
        return;
      }
      const [formattedSection, formattedReport] = this.googleAnalyticsFormat(report);
      const analyticsEventName = `report_${formattedSection}_${formattedReport}`;
      if (GoogleAnalytics[analyticsEventName]) {
        GoogleAnalytics[analyticsEventName]();
      } else {
        console.log(`Analytics function not found: GoogleAnalytics.${analyticsEventName}`);
      }
      this.$router.push(report.path);
    },
    filteredSections(section) {
      const query = this.searchQuery.trim().toLowerCase(); // Trim spaces

      return section
        .map((sec) => {
          const filteredReports = sec.reports.filter((report) =>
            query ? report.name.toLowerCase().includes(query) : true // Ignore empty search
          );

          return filteredReports.length > 0
            ? { ...sec, filteredReports }
            : null;
        })
        .filter(Boolean);
    },

    clearSearch() {
      this.searchQuery = "";
      this.$nextTick(() => {
        this.$refs.searchInput.focus();
      });
    },
    async getPermission() {
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

              //stockItemAccessibility permission 
              localStorage.setItem("hasAmountAccess", response.data.data.stockItemAccessibility.hasAmountAccess);
              localStorage.setItem("hasAvgPerRateAccess", response.data.data.stockItemAccessibility.hasAvgPerRateAccess);

              window.dispatchEvent(new Event('storageChanged'));
            } else {

              this.user_persmissions();
            }
          }
        })
        .catch((err) => {

          Common.getStatusForActionFailed(err.data.status);
          this.loading = false;
        });
    },
    async getUserPermission() {
      await this.getPermission();
      const data = {
        mainUserId: this.parentUserId ? this.parentUserId : this.customerId,
        subUserId: this.customerId ? this.customerId : '',
        _userId: this.customerId ? this.customerId : '',
        company_id: localStorage.getItem('companyId'),
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      try {
        const response = await Api.getUserPermission(data, headers);
        const responseDataa = response.data.data;
        this.eInvoiceReadPermission = responseDataa.isRead.isEInvoice;
        this.ewayReadPermission = responseDataa.isRead.isEway;
        this.updateSectionA();
        this.updateSectionB();
      } catch (error) {
        console.error("Error fetching user permissions:", error);
      }
    },
    async AddToFavourate() {
      const payload = {
        _userId: this.customerId,
        quickActionsFav: this.favorites,
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      try {
        const response = await Api.updateQuickActionFavourate(payload, headers);
      } catch (error) {
        Common.getStatusForActionFailed(error.response.status);
      }
    },

    async fetchQuickActionsFav() {
      if (localStorage.getItem("_parentUserId") == "" || localStorage.getItem("_parentUserId") == null) {
        var payload = {
          _userId: localStorage.getItem("customerId"),
          requestFrom: "WEB",
        };
      } else {
        var payload = {
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


      try {
        const response = await Api.getcustomerDetailsGo(payload, headers);
        if (response.data.status === 200) {
          if (response.data.data.customerStatus.toLowerCase().includes('converted') || response.data.data.customerStatus.toLowerCase().includes('installation done')) {
              localStorage.setItem("isPaid", "1");
              this.isPaid = localStorage.getItem("isPaid");
            } else {
              localStorage.removeItem("isPaid");
            }
          if (response.data.data.quickActionsFav == null || response.data.data.quickActionsFav.length < 4) {
            this.favorites = ['daybook', 'ledgerreports', 'topcustomer', 'profitloss',]
            const updatePayload = {
              _userId: this.customerId,
              quickActionsFav: this.favorites,
              requestFrom: "WEB",
            }
            try {
              await Api.updateQuickActionFavourate(updatePayload, headers);
            } catch (error) {
              Common.getStatusForActionFailed(error.response.status);
            }
          } else {
            this.favorites = response.data.data.quickActionsFav.map(item => {
              const formattedItem = item.toLowerCase().replace(/\s+/g, '').replace('&', '');
              if (formattedItem === 'topreports') return 'topcustomer';
              if (formattedItem === 'profitloss') return 'profitloss';
              if (formattedItem === 'leadgerreports') return 'ledgerreports';
              return formattedItem;
            });
          }
        }
      } catch (error) {
        Common.getStatusForActionFailed(error.response.status);
      }
    },
    handleLockPermission() {
      this.toastDisplayMsg = "You don't have access. Contact your admin.";
      this.toastMsg = true;
      setTimeout(() => {
        this.toastMsg = false;
      }, 7000);
    },
    handleAddOnNavigation(addOns){
      if(addOns){
        window.open(`${this.payURL}/${localStorage.getItem("customermobile")}?e=1`, '_blank');
      }
    }
  },

  mounted() {
    this.getUserPermission();
    this.parentUserId = localStorage.getItem("_parentUserId"),
    this.isInstalled = localStorage.getItem("isInstalled");
    setTimeout(() => {
      if (
        this.isRead_isSales == "true" ||
        this.isRead_isOutstandingReceivable == "true" ||
        this.isRead_isPurchase == "true" ||
        this.isRead_isOutstandingPayable == "true" ||
        this.isRead_isCreditNote == "true" ||
        this.isRead_isDebitNote == "true" ||
        this.isRead_isReceipt == "true" ||
        this.isRead_isPayment == "true" ||
        this.isRead_isBank == "true" ||
        this.isRead_isCash == "true" ||
        this.isRead_isSalesOrder == "true" ||
        this.isRead_isPurchaseOrder == "true" ||
        this.isRead_isJournal == "true" ||
        this.isRead_isContra == "true" ||
        this.isRead_isQuotation == "true" ||
        this.isChecker == "true" ||
        this.isMaker == "true"
      ) {
        this.myVouchers = true;
      }
      else {
        this.myVouchers = false;
      }
    }, 1000);
    this.fetchQuickActionsFav();
  },
};
</script>

<style scoped>
.reports_page_new .BillSuccessFullySent {
  position: fixed;
  top: 70px;
}

.reports_page_new .ReportErrorMsg {
  padding: 10px 10px;
  width: 390px;
}

.reports_page_new .CrossIconPart {
  cursor: pointer;
}

.reports_page_new .CrossIconPart img {
  width: 16px;
}

@media only screen and (max-width:575px) {
  .reports_page_new .BillSuccessFullySent {
    top: 110px;
  }

  .reports_page_new .ReportErrorMsg {
    padding: 10px 10px;
    width: 300px;
  }
}
</style>
