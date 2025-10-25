/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section>
    <!--start first card box-->
    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-12 col-lg-12 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0">
            <h3 id="" class="partyName">Reports</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="main_card">
      <div class="reports-new-design-boxes">
        <div class="row">
          <div class="col-lg-4 col-12">
            <div class="reports-new-design-inner-boxes">
              <div class="inner-boxes-title-part">
                <div class="row">
                  <div class="col-2">
                    <div class="reports-inner-title-image">
                      <img
                        src="assets/images/1.0/reports/report-accounting-image.png"
                        class="img-fluid"
                      />
                    </div>
                  </div>
                  <div class="col-10">
                    <div class="reports-inner-title-caption">
                      <h4>Accounting</h4>
                      <p>Get Information about your accounting Details</p>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="inner-reports-ul-section-part">
                <li>
                  <router-link to="/day-book">
                    <img
                      src="assets/images/1.0/reports/daybook.png"
                      class="img-fluid"
                    />
                    Day Book
                    <i class="fa fa-chevron-right"></i>
                  </router-link>
                </li>
                <li>
                  <router-link to="/expenses">
                    <img
                      src="assets/images/1.0/reports/expenses.png"
                      class="img-fluid"
                    />
                    Expenses
                    <i class="fa fa-chevron-right"></i>
                  </router-link>
                </li>
                <li>
                  <router-link to="/inactive-customers">
                    <img
                      src="assets/images/1.0/reports/inactive-customers.png"
                      class="img-fluid"
                    />
                    Inactive Customers
                    <i class="fa fa-chevron-right"></i>
                  </router-link>
                </li>
                <li>
                  <router-link to="/inactive-items">
                    <img
                      src="assets/images/1.0/reports/inactive-items.png"
                      class="img-fluid"
                    />
                    Inactive Items
                    <i class="fa fa-chevron-right"></i>
                  </router-link>
                </li>
                <li>
                  <router-link to="/top-reports">
                    <img
                      src="assets/images/1.0/reports/top-reports.png"
                      class="img-fluid"
                    />
                    Top Reports
                    <i class="fa fa-chevron-right"></i>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="reports-new-design-inner-boxes">
              <div class="inner-boxes-title-part">
                <div class="row">
                  <div class="col-2">
                    <div class="reports-inner-title-image">
                      <img
                        src="assets/images/1.0/reports/financial-report-image.png"
                        class="img-fluid"
                      />
                    </div>
                  </div>
                  <div class="col-10">
                    <div class="reports-inner-title-caption">
                      <h4>Financial Reports</h4>
                      <p>Get Information about your Financial Details</p>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="inner-reports-ul-section-part">
                <!-- blancesheet code -->
                <li
                  v-if="isPaid == '' || isPaid == null"
                  v-b-modal.customerstatus-popup
                >
                  <router-link to="">
                    <img
                      src="assets/images/1.0/reports/balance-sheet.png"
                      class="img-fluid"
                    />
                    Balance Sheet
                    <span class="crown-add-only-paid-user"
                      ><img src="/assets/images/1.0/brand/crown-color.svg"
                    /></span>
                  </router-link>
                </li>
                <li v-else-if="JSON.parse(this.isBalanceSheet) == true">
                  <router-link to="/balancesheet">
                    <img
                      src="assets/images/1.0/reports/balance-sheet.png"
                      class="img-fluid"
                    />
                    Balance Sheet
                    <i class="fa fa-chevron-right"></i>
                    <!-- <span class="crown-add-only-paid-user"><img src="/assets/images/1.0/brand/crown-color.svg" /></span> -->
                  </router-link>
                </li>
                <li v-else>
                  <a href="javascript:void(0);" class="">
                    <img
                      src="assets/images/1.0/reports/balance-sheet.png"
                      class="img-fluid"
                    />
                    Balance Sheet
                    <span class="lock-icon-reports-red-image"
                      ><img
                        src="/assets/images/1.0/dashboard/lock-red.png"
                        class="img-fluid"
                    /></span>
                  </a>
                </li>

                <!-- profit & loss code -->
                <li
                  v-if="isPaid == '' || isPaid == null"
                  v-b-modal.customerstatus-popup
                >
                  <router-link to="">
                    <img
                      src="assets/images/1.0/reports/profit-loss.png"
                      class="img-fluid"
                    />
                    Profit & Loss
                    <span class="crown-add-only-paid-user"
                      ><img src="/assets/images/1.0/brand/crown-color.svg"
                    /></span>
                  </router-link>
                </li>
                <li v-else-if="JSON.parse(this.isProfitLoss) == true">
                  <router-link to="/profit-loss">
                    <img
                      src="assets/images/1.0/reports/profit-loss.png"
                      class="img-fluid"
                    />
                    Profit & Loss
                    <i class="fa fa-chevron-right"></i>
                  </router-link>
                </li>
                <li v-else>
                  <a href="javascript:void(0);" class="">
                    <img
                      src="assets/images/1.0/reports/profit-loss.png"
                      class="img-fluid" />
                    Profit & Loss
                    <span class="lock-icon-reports-red-image"
                      ><img
                        src="/assets/images/1.0/dashboard/lock-red.png"
                        class="img-fluid"
                      /> </span
                  ></a>
                </li>
                <!-- trail balance code -->
                <li
                  v-if="isPaid == '' || isPaid === null"
                  v-b-modal.customerstatus-popup
                >
                  <router-link to="">
                    <img
                      src="assets/images/1.0/reports/trial-balance.png"
                      class="img-fluid"
                    />
                    Trial Balance
                    <span class="crown-add-only-paid-user"
                      ><img src="/assets/images/1.0/brand/crown-color.svg"
                    /></span>
                  </router-link>
                </li>
                <li v-else-if="JSON.parse(this.isTrialBalance) == true">
                  <router-link to="/trial-balance">
                    <img
                      src="assets/images/1.0/reports/trial-balance.png"
                      class="img-fluid"
                    />
                    Trial Balance
                    <i class="fa fa-chevron-right"></i>
                  </router-link>
                </li>
                <li v-else>
                  <a href="javascript:void(0);" class="">
                    <img
                      src="assets/images/1.0/reports/trial-balance.png"
                      class="img-fluid"
                    />
                    Trial Balance
                    <span class="lock-icon-reports-red-image"
                      ><img
                        src="/assets/images/1.0/dashboard/lock-red.png"
                        class="img-fluid"
                      />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="reports-new-design-inner-boxes">
              <div class="inner-boxes-title-part">
                <div class="row">
                  <div class="col-2">
                    <div class="reports-inner-title-image">
                      <img
                        src="assets/images/1.0/reports/report-entries-image.png"
                        class="img-fluid"
                      />
                    </div>
                  </div>
                  <div class="col-10">
                    <div class="reports-inner-title-caption">
                      <h4>My Entries</h4>
                      <p>Get Information about your Entries</p>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="inner-reports-ul-section-part">
                <!-- my ledger code -->
                <li v-if="parentUserId && customerId != parentUserId && ewayReadPermission">
                  <router-link to="/my-eway-bill">
                    <img
                      src="assets/images/1.0/reports/EWayBills.png"
                      class="img-fluid"
                    />
                    My eWay Bills
                    <i class="fa fa-chevron-right"></i>
                  </router-link>
                </li>
                <li v-else-if="parentUserId == '' && isPaid == '' || isPaid == null">
                  <router-link to="">
                    <img
                      src="assets/images/1.0/reports/my-ledgers.png"
                      class="img-fluid"
                    />
                    My eWay Bills
                    <span class="crown-add-only-paid-user"
                      ><img src="/assets/images/1.0/brand/crown-color.svg"
                    /></span>
                  </router-link>
                </li>
                 <li v-else-if = "parentUserId == ''">
                  <router-link to="/my-eway-bill">
                    <img
                      src="assets/images/1.0/reports/EWayBills.png"
                      class="img-fluid"
                    />
                    My eWay Bills
                    <i class="fa fa-chevron-right"></i>
                  </router-link>
                </li>
                <li v-if="parentUserId && customerId != parentUserId && eInvoiceReadPermission">
                  <router-link to="/my-einvoices">
                    <img
                      src="assets/images/1.0/reports/EInvoices.png"
                      class="img-fluid"
                    />
                    My eInvoices
                    <i class="fa fa-chevron-right"></i>
                  </router-link>
                </li>
                <li v-else-if="parentUserId == '' && isPaid == '' || isPaid == null">
                  <router-link to="">
                    <img
                      src="assets/images/1.0/reports/my-ledgers.png"
                      class="img-fluid"
                    />
                    My eInvoices
                    <span class="crown-add-only-paid-user"
                      ><img src="/assets/images/1.0/brand/crown-color.svg"
                    /></span>
                  </router-link>
                </li>
                <li v-else-if = "parentUserId == ''">
                  <router-link to="/my-einvoices">
                    <img
                      src="assets/images/1.0/reports/EWayBills.png"
                      class="img-fluid"
                    />
                    My eInvoices
                    <i class="fa fa-chevron-right"></i>
                  </router-link>
                </li>
                <li
                  v-if="isPaid == '' || isPaid == null"
                  v-b-modal.customerstatus-popup
                >
                  <router-link to="">
                    <img
                      src="assets/images/1.0/reports/my-ledgers.png"
                      class="img-fluid"
                    />
                    My Ledgers
                    <span class="crown-add-only-paid-user"
                      ><img src="/assets/images/1.0/brand/crown-color.svg"
                    /></span>
                  </router-link>
                </li>
                <li v-else-if="JSON.parse(this.isRead_isLedger) == true">
                  <router-link to="/my-ledgers">
                    <img
                      src="assets/images/1.0/reports/my-ledgers.png"
                      class="img-fluid"
                    />
                    My Ledgers
                    <i class="fa fa-chevron-right"></i>
                  </router-link>
                </li>
                <li v-else>
                  <a href="javascript:void(0);" class="">
                    <img
                      src="assets/images/1.0/reports/my-ledgers.png"
                      class="img-fluid"
                    />
                    My Ledgers
                    <span class="lock-icon-reports-red-image"
                      ><img
                        src="/assets/images/1.0/dashboard/lock-red.png"
                        class="img-fluid"
                      />
                    </span>
                  </a>
                </li>

                <!-- Stock Iteam Code -->

                <li
                  v-if="isPaid == '' || isPaid == null"
                  v-b-modal.customerstatus-popup
                >
                  <router-link to="">
                    <img
                      src="assets/images/1.0/reports/my-stock-items.png"
                      class="img-fluid"
                    />
                    My Stock Items
                    <span class="crown-add-only-paid-user"
                      ><img src="/assets/images/1.0/brand/crown-color.svg"
                    /></span>
                  </router-link>
                </li>
                <li v-else-if="JSON.parse(this.isRead_isStockItem) == true">
                  <router-link to="/my-stock-items">
                    <img
                      src="assets/images/1.0/reports/my-stock-items.png"
                      class="img-fluid"
                    />
                    My Stock Items
                    <i class="fa fa-chevron-right"></i>
                  </router-link>
                </li>
                <li v-else>
                  <a href="javascript:void(0);" class="">
                    <img
                      src="assets/images/1.0/reports/my-stock-items.png"
                      class="img-fluid"
                    />
                    My Stock Items
                    <span class="lock-icon-reports-red-image"
                      ><img
                        src="/assets/images/1.0/dashboard/lock-red.png"
                        class="img-fluid"
                      />
                    </span>
                  </a>
                </li>

                <li
                  v-if="isPaid == '' || isPaid == null"
                  v-b-modal.customerstatus-popup
                >
                  <router-link to="">
                    <img
                      src="assets/images/1.0/reports/my-vouchers.png"
                      class="img-fluid"
                    />
                    My Vouchers
                    <span class="crown-add-only-paid-user"
                      ><img src="/assets/images/1.0/brand/crown-color.svg"
                    /></span>
                  </router-link>
                </li>
                <li v-else-if="this.myVouchers">
                  <router-link to="/my-vouchers">
                    <img
                      src="assets/images/1.0/reports/my-vouchers.png"
                      class="img-fluid"
                    />
                    My Vouchers
                    <i class="fa fa-chevron-right"></i>
                  </router-link>
                </li>
                <li v-else>
                  <router-link to="">
                    <img
                      src="assets/images/1.0/reports/my-vouchers.png"
                      class="img-fluid"
                    />
                    My Vouchers
                    <span class="lock-icon-reports-red-image"
                      ><img
                        src="/assets/images/1.0/dashboard/lock-red.png"
                        class="img-fluid"
                      />
                    </span>
                  </router-link>
                </li>

                <!-- <li
                  v-if="isPaid == '' || isPaid == null"
                  v-b-modal.customerstatus-popup
                >
                  <router-link to="">
                    <img
                      src="assets/images/1.0/reports/my-quotation.png"
                      class="img-fluid"
                    />
                    My Quotations
                    <span class="crown-add-only-paid-user"
                      ><img src="/assets/images/1.0/brand/crown-color.svg"
                    /></span>
                  </router-link>
                </li> -->
                <li>
                  <router-link to="/my-quotations">
                    <img
                      src="assets/images/1.0/reports/my-quotation.png"
                      class="img-fluid"
                    />
                    My Quotations
                    <i class="fa fa-chevron-right"></i>
                  </router-link>
                </li>
                <!-- <li v-else>
                  <a href="javascript:void(0);" class="">
                    <img
                      src="assets/images/1.0/reports/my-quotation.png"
                      class="img-fluid"
                    />
                    My Quotations
                    <span class="lock-icon-reports-red-image"
                      ><img
                        src="/assets/images/1.0/dashboard/lock-red.png"
                        class="img-fluid"
                      />
                    </span>
                  </a>
                </li> -->
                <li
                  v-if="isPaid == '' || isPaid == null"
                  v-b-modal.customerstatus-popup
                >
                  <router-link to="">
                    <img
                      src="assets/images/1.0/reports/tracking-report.png"
                      class="img-fluid"
                    />
                    Tracking Report
                    <span class="crown-add-only-paid-user"
                      ><img src="/assets/images/1.0/brand/crown-color.svg"
                    /></span>
                  </router-link>
                </li>
                <li v-else-if="JSON.parse(this.isAdmin) == true">
                  <router-link to="/tracking-report">
                    <img
                      src="assets/images/1.0/reports/tracking-report.png"
                      class="img-fluid"
                    />
                    Tracking Report
                    <i class="fa fa-chevron-right"></i>
                  </router-link>
                </li>
                <li v-else>
                  <a href="javascript:void(0);" class="">
                  <img
                    src="assets/images/1.0/reports/tracking-report.png"
                    class="img-fluid"
                  />
                  Tracking Report
                  <span class="lock-icon-reports-red-image"
                      ><img
                        src="/assets/images/1.0/dashboard/lock-red.png"
                        class="img-fluid"
                      />
                    </span>
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Api from "@/Api";
export default {
  data() {
    return {
      ewayReadPermission: false,
      eInvoiceReadPermission: false,
      parentUserId: localStorage.getItem("_parentUserId"),
      customerId: localStorage.getItem("customerId"),
      isPaid: "",
      payment_url: "",
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
      isBalanceSheet: true,
      isProfitLoss: true,
      isTrialBalance: true,
      version: "",
      showvchtype: false,
      isAdmin: true,
      isRead_isLedger: true,
      isRead_isStockItem: true,
      isInstalled: 0,
      source: "",
      isRead_isContra: true,
      isRead_isJournal: true,
      isRead_isDebitNote: true,
      isRead_isCreditNote: true,
      myVouchers: true,
    };
  },
  created() {
    this.updateLocalStorageValues();
    window.addEventListener("storageChanged", () => {
      this.updateLocalStorageValues();
    });

    // }
  },
  methods: {
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
      this.isRead_isLedger = localStorage.getItem("isRead_isLedger");
      this.isRead_isStockItem = localStorage.getItem("isRead_isStockItem");
      this.isRead_isContra = localStorage.getItem("isRead_isContra");
      this.isRead_isJournal = localStorage.getItem("isRead_isJournal");
      this.isRead_isDebitNote = localStorage.getItem("isRead_isDebitNote");
      this.isRead_isCreditNote = localStorage.getItem("isRead_isCreditNote");

      // Report
      this.isBalanceSheet = localStorage.getItem("isBalanceSheet");
      this.isProfitLoss = localStorage.getItem("isProfitLoss");
      this.isTrialBalance = localStorage.getItem("isTrialBalance");
    },
  async getUserPermission() {
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
  } catch (error) {
    console.error("Error fetching user permissions:", error);
  }
},
  },

  mounted() {
    this.getUserPermission()
    this.isPaid = localStorage.getItem("isPaid");
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
        this.isRead_isContra == "true"||
        this.isRead_isQuotation == "true"
      ) {
        this.myVouchers = true;
      } else {
        this.myVouchers = false;
      }

      console.log(this.myVouchers, "myvouchers");
    }, 1000);

    console.log(this.isAdmin, "admin console data");
  },
};
</script>

<style scoped></style>
