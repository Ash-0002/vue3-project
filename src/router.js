/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
import Vue from "vue";
import Router from "vue-router";
import CryptoJS from "crypto-js";

Vue.use(Router);

const base =
  process.env.NODE_ENV === "production"
    ? "/"
    : "/";

const router = new Router({
  mode: "history",
  base,

  routes: [
    {
      path: "/pdfNew",
      name: "pdfPage",
      meta: { layout: "default-layout" },
      component: require("@/pages/pdfPage.vue").default // load sync home
    },
    {
      path: "/",
      name: "Tally on Web | Login",
      // meta: { layout: "with-out-login" },
      meta: {
        layout: 'with-out-login',
        title: 'Tally on Web | Login',
        description: 'Login to Tally on Web to access your Tally data from anywhere, anytime.',
        keywords: ['Tally on Web', 'Tally login', 'access Tally online', 'Tally web login']
      },
      component: require("@/pages/Login.vue").default 
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: { layout: "with-login" },
      component: require("@/pages/Dashboard-New-v2.vue").default // load sync home
    },
    // {
    //   path: "/dashboard",
    //   name: "dashboard",
    //   meta: { layout: "with-login" },
    //   component: require("@/pages/Dashboard.vue").default // load sync home
    // },
    // {
    //   path: "/register",
    //   name: "register",
    //   meta: { layout: "with-out-login" },
    //   component: require("@/pages/Register.vue").default // load sync home
    // },
    // {
    //   path: "/privacy-policy",
    //   name: "privacypolicy",
    //   meta: { layout: "with-out-login" },
    //   component: require("@/pages/privacy-policy.vue").default // load sync home
    // },
    // {
    //   path: "/terms-conditions",
    //   name: "termsconditions",
    //   meta: { layout: "with-out-login" },
    //   component: require("@/pages/terms-conditions.vue").default // load sync home
    // },
    // {
    //   path: "/register2",
    //   name: "register2",
    //   meta: { layout: "with-out-login" },
    //   component: require("@/pages/Register2.vue").default // load sync home
    // },
    {
      path: "/no-internet",
      name: "no-internet",
      meta: { layout: "Default" },
      component: require("@/pages/no-internet.vue").default // load sync home
    },
    {
      path: "/parties",
      name: "Parties Listing",
      meta: { layout: "with-login" },
      component: require("@/pages/Parties_listing.vue").default // load sync home
    },
    {
      path: "/parties-listing/:ledger_name",
      name: "Parties Listing By Ledger Name",
      meta: { layout: "with-login" },
      component: require("@/pages/Parties_listing.vue").default // load sync home
    },
    {
      path: "/parties/:guid",
      name: "Parties",
      meta: { layout: "with-login" },
      component: require("@/pages/Parties.vue").default // load sync home
    },
    {
      path: "/parties/:guid/:v_type",
      name: "PartiesType",
      meta: { layout: "with-login" },
      component: require("@/pages/Parties.vue").default // load sync home
    },
    {
      path: "/parties_sold/:guid",
      name: "partiesSold",
      meta: { layout: "with-login" },
      component: require("@/pages/parties-sold").default // load sync home
    },
    // {
    //   path: "/parties/sold/:guid",
    //   name: "partiesSold",
    //   meta: { layout: "with-login" },
    //   component: require("@/pages/parties-sold").default // load sync home
    // },
    {
      path: "/parties_purchased/:guid",
      name: "partiesPurchased",
      meta: { layout: "with-login" },
      component: require("@/pages/parties-purchased").default // load sync home
    },
    // {
    //   path: "/parties/purchased/:guid",
    //   name: "partiesPurchased",
    //   meta: { layout: "with-login" },
    //   component: require("@/pages/parties-purchased").default // load sync home
    // },
    {
      path: "/items/:guid",
      name: "items",
      meta: { layout: "with-login" },
      component: require("@/pages/items.vue").default // load sync home
    },
    {
      path: "/items/customers/:guid",
      name: "items-customers",
      meta: { layout: "with-login" },
      component: require("@/pages/items-customers.vue").default // load sync home
    },
    {
      path: "/items/supplers/:guid",
      name: "items-supplers",
      meta: { layout: "with-login" },
      component: require("@/pages/items-supplers.vue").default // load sync home
    },
    {
      path: "/parties/detailsold/:v_id/:v_type",
      name: "Parties_DetailsOld",
      meta: { layout: "with-login" },
      component: require("@/pages/Parties_details.vue").default // load sync home
    },
    {
      path: "/parties/details/:v_id/:v_type",
      name: "Parties_Details",
      meta: { layout: "with-login" },
      component: require("@/pages/Parties_details2.vue").default // load sync home
    },
    {
      path: "/parties/details/:v_id/:v_type/:isOneChild",
      name: "Parties_Details",
      meta: { layout: "with-login" },
      component: require("@/pages/Parties_details2.vue").default // load sync home
    },
    {
      path: "/parties/details/:billVchAmount/:billVchDate/:billVchNumber/:billVchType",
      name: "Parties_Details",
      meta: { layout: "with-login" },
      component: require("@/pages/Parties_details2.vue").default // load sync home
    },
    {
      path: "/add-parties",
      name: "add-parties",
      meta: { layout: "with-login" },
      component: require("@/pages/add-parties.vue").default // load sync home
    },
    {
      path: "/add-parties/:ledger_id",
      name: "add-parties-id",
      meta: { layout: "with-login" },
      component: require("@/pages/add-parties.vue").default // load sync home
    },
    {
      path: "/add-items",
      name: "add-items",
      meta: { layout: "with-login" },
      component: require("@/pages/add-items.vue").default // load sync home
    },
    {
      path: "/add-items/:item_id",
      name: "add-items-id",
      meta: { layout: "with-login" },
      component: require("@/pages/add-items.vue").default // load sync home
    },
    {
      path: "/items",
      name: "items-listing",
      meta: { layout: "with-login" },
      component: require("@/pages/items-listing.vue").default // load sync home
    },
    {
      path: "/items_group",
      name: "items-group",
      meta: { layout: "with-login" },
      component: require("@/pages/items-group.vue").default // load sync home
    },
    // {
    //   path: "/items/group",
    //   name: "items-group",
    //   meta: { layout: "with-login" },
    //   component: require("@/pages/items-group.vue").default // load sync home
    // },
    {
      path: "/items_category",
      name: "items-category",
      meta: { layout: "with-login" },
      component: require("@/pages/items-category.vue").default // load sync home
    },
    // {
    //   path: "/items/category",
    //   name: "items-category",
    //   meta: { layout: "with-login" },
    //   component: require("@/pages/items-category.vue").default // load sync home
    // },
    {
      path: "/item-group-listing/:guid/:group_name",
      name: "item-group-listing",
      meta: { layout: "with-login" },
      component: require("@/pages/item-group-listing.vue").default // load sync home
    },
    {
      path: "/item-category-listing/:guid/:cat_name",
      name: "item-category-listing",
      meta: { layout: "with-login" },
      component: require("@/pages/item-category-listing.vue").default // load sync home
    },
    // {
    //   path: "/photos",
    //   name: "photos",
    //   component: () => import("@/pages/Photos.vue")
    // },
  
    {
      path: "/story/:id",
      name: "post",
      component: () => import("@/pages/Post.vue")
    },
    {
      path: "*",
      name: "404*",
      meta: { layout: "no-sidebar" },
      component: require("@/pages/404.vue").default // load sync home
    },
    {
      path: "/my-account",
      name: "My Account",
      meta: { layout: "with-login" },
      component: require("@/pages/my-account.vue").default // load sync home
    },
    {
      path: "/oldreports",
      name: "reports",
      meta: { layout: "with-login" },
      component: require("@/pages/reports.vue").default // load sync home
    },
    {
      path: "/reports",
      name: "newreports",
      meta: { layout: "with-login" },
      component: require("@/pages/newreports.vue").default // load sync home
    },
    {
      path: "/tallydatabackup",
      name: "tallydatabackup",
      meta: { layout: "with-login" },
      component: require("@/pages/tallydatabackup.vue").default // load sync home
    },
    {
      path: "/day-book",
      name: "Day Book",
      meta: { layout: "with-login" },
      component: require("@/pages/day-book.vue").default // load sync home
    },
    {
      path: "/expenses",
      name: "Expenses",
      meta: { layout: "with-login" },
      component: require("@/pages/expenses.vue").default // load sync home
    },
    {
      path: "/expenses/list/:group_name",
      name: "Expenses List",
      meta: { layout: "with-login" },
      component: require("@/pages/expenses-list.vue").default // load sync home
    },
    {
      path: "/inactive-customers",
      name: "ExpeInactive Customers",
      meta: { layout: "with-login" },
      component: require("@/pages/inactive-customers.vue").default // load sync home
    },
    {
      path: "/inactive-items",
      name: "Inactive Items",
      meta: { layout: "with-login" },
      component: require("@/pages/inactive-items.vue").default // load sync home
    },
    {
      path: "/ledger-report",
      name: "Ledger Report",
      meta: { layout: "with-login" },
      component: require("@/pages/ledger-report.vue").default // load sync home
    },
    {
      path: "/top-reports",
      name: "Top Reports",
      meta: { layout: "with-login" },
      component: require("@/pages/top-reports.vue").default // load sync home
    },
    {
      path: "/balancesheet",
      name: "Balancesheet",
      meta: { layout: "with-login" },
      component: require("@/pages/balancesheet.vue").default // load sync home
    },
    {
      path: "/profit-loss",
      name: "Profit Loss",
      meta: { layout: "with-login" },
      component: require("@/pages/profit-loss.vue").default // load sync home
    },
    {
      path: "/trial-balance",
      name: "Trial Balance",
      meta: { layout: "with-login" },
      component: require("@/pages/trial-balance.vue").default // load sync home
    },
    {
      path: "/my-ledgers",
      name: "My Ledgers",
      meta: { layout: "with-login" },
      component: require("@/pages/my-ledgers.vue").default // load sync home
    },
    {
      path: "/my-eway-bill",
      name: "My eWay Bills",
      meta: { layout: "with-login" },
      component: require("@/pages/my-eway-bill.vue").default // load sync home
    },
    {
      path: "/my-einvoices",
      name: "My eInvoices",
      meta: { layout: "with-login" },
      component: require("@/pages/my-einvoices.vue").default // load sync home
    },
    {
      path: "/my-stock-items",
      name: "My Stock Items",
      meta: { layout: "with-login" },
      component: require("@/pages/my-stock-items.vue").default // load sync home
    },
    {
      path: "/my-vouchers",
      name: "My Vouchers",
      meta: { layout: "with-login" },
      component: require("@/pages/my-vouchers.vue").default // load sync home
    },
    {
      path: "/my-quotations",
      name: "My Quotations",
      meta: { layout: "with-login" },
      component: require("@/pages/my-quotations.vue").default // load sync home
    },
    {
      path: "/tracking-report",
      name: "Tracking Report",
      meta: { layout: "with-login" },
      component: require("@/pages/tracking-report.vue").default // load sync home
    },
    {
      path: "/tracking-details/:customer_id",
      name: "Tracking details",
      meta: { layout: "with-login" },
      component: require("@/pages/tracking-details.vue").default // load sync home
    },
    {
      path: "/create-contra",
      name: "create-contra",
      meta: { layout: "with-login" },
      component: require("@/pages/create-contra.vue").default // load sync home
    },
    {
      path: "/create-contra/:voucherTypeName",
      name: "create-contra-type",
      meta: { layout: "with-login" },
      component: require("@/pages/create-contra.vue").default // load sync home
    },
    {
      path: "/create-contra/:voucherTypeName/:voucher_id",
      name: "create-contra-type-voucher-id",
      meta: { layout: "with-login" },
      component: require("@/pages/create-contra.vue").default // load sync home
    },
    {
      path: "/sales-voucher",
      name: "sales-voucher",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-voucher.vue").default // load sync home
    },
    {
      path: "/sales-voucher/:voucherTypeName",
      name: "sales-voucher-type",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-voucher.vue").default // load sync home
    },
    // {
    //   path: "/sales-voucher/:voucherTypeName/:voucher_id",
    //   name: "sales-voucher-type-with-voucher-id",
    //   meta: { layout: "with-login" },
    //   component: require("@/pages/sales-voucher.vue").default // load sync home
    // },
    //sales voucher v3 routes

    {
      path: "/sales-voucher",
      name: "sales-voucher",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-voucher.vue").default // load sync home
    },
    {
      path: "/sales-voucher-v3/:voucherTypeName",
      name: "sales-voucher-type",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-voucher-V3.vue").default // load sync home
    },
    // {
    //   path: "/sales-voucher-v3/:voucherTypeName/:voucher_id",
    //   name: "sales-voucher-type-with-voucher-id",
    //   meta: { layout: "with-login" },
    //   component: require("@/pages/sales-voucher-V3.vue").default // load sync home
    // },
    {
      path: "/sales-voucher-v4/:voucherTypeName",
      name: "sales-voucher-type",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-voucher-V4.vue").default // load sync home
    },
    {
      path: "/sales-voucher-v4/:voucherTypeName/:voucher_id",
      name: "sales-voucher-type-with-voucher-id",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-voucher-V4.vue").default // load sync home
    },

    {
      path: "/purchase-voucher-v4",
      name: "purchase-voucher-v4",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-voucher-v4.vue").default // load sync home
    },
    {
      path: "/purchase-voucher-v4/:voucherTypeName",
      name: "purchase-voucher-type",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-voucher-v4.vue").default // load sync home
    },
    {
      path: "/purchase-voucher-v4/:voucherTypeName/:voucher_id",
      name: "purchase-voucher-type-voucher-id",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-voucher-v4.vue").default // load sync home
    },





  {
      path: "/create-creditnote-v4",
      name: "create-creditnote",
      meta: { layout: "with-login" },
      component: require("@/pages/create-creditnote-v4.vue").default // load sync home
    },
    {
      path: "/create-creditnote-v4/:voucherTypeName",
      name: "create-creditnote-type",
      meta: { layout: "with-login" },
      component: require("@/pages/create-creditnote-v4.vue").default // load sync home
    },
    {
      path: "/create-creditnote-v4/:voucherTypeName/:voucher_id",
      name: "create-creditnote-type-voucher-id",
      meta: { layout: "with-login" },
      component: require("@/pages/create-creditnote-v4.vue").default // load sync home
    },
    {
      path: "/create-quotation-v4",
      name: "create-quotation-v4",
      meta: { layout: "with-login" },
      component: require("@/pages/create-quotation-v4.vue").default // load sync home
    },
    {
      path: "/create-quotation-v4/:voucherTypeName/:voucher_id",
      name: "create-quotation-voucher-id",
      meta: { layout: "with-login" },
      component: require("@/pages/create-quotation-v4.vue").default // load sync home
    },


    // end of the sales voucher v3 routes
    {
      path: "/create-quotation",
      name: "create-quotation",
      meta: { layout: "with-login" },
      component: require("@/pages/create-quotation.vue").default // load sync home
    },
    {
      path: "/create-quotation/:voucherTypeName/:voucher_id",
      name: "create-quotation-voucher-id",
      meta: { layout: "with-login" },
      component: require("@/pages/create-quotation.vue").default // load sync home
    },
   
    {
      path: "/create-receipt",
      name: "create-receipt",
      meta: { layout: "with-login" },
      component: require("@/pages/create-receipt.vue").default // load sync home
    },
    {
      path: "/create-receipt/:voucherTypeName",
      name: "create-receipt-type",
      meta: { layout: "with-login" },
      component: require("@/pages/create-receipt.vue").default // load sync home
    },
    {
      path: "/create-receipt/:voucherTypeName/:voucher_id",
      name: "create-receipt-type-voucher-id",
      meta: { layout: "with-login" },
      component: require("@/pages/create-receipt.vue").default // load sync home
    },
    {
      path: "/sales-order-voucher",
      name: "sales-order-voucher",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-order-voucher.vue").default // load sync home
    },
    {
      path: "/sales-order-voucher/:voucherTypeName",
      name: "sales-order-voucher-type",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-order-voucher.vue").default // load sync home
    },
    {
      path: "/sales-order-voucher/:voucherTypeName/:voucher_id",
      name: "sales-order-voucher-type-voucher-id",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-order-voucher.vue").default // load sync home
    },
    {
      path: "/sales-order-voucher-v4/:voucherTypeName",
      name: "sales-order-voucher-type",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-order-voucher-V4.vue").default // load sync home
    },
    {
      path: "/sales-order-voucher-v4/:voucherTypeName/:voucher_id",
      name: "sales-order-voucher-type-with-voucher-id",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-order-voucher-V4.vue").default // load sync home
    },
    {
      path: "/sales-order-voucher-V4",
      name: "sales-order-voucher-V4",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-order-voucher-V4.vue").default // load sync home
    },
    

    //start of temp route


    // {
    //   path: "/sales-order-voucher",
    //   name: "sales-order-voucher",
    //   meta: { layout: "with-login" },
    //   component: require("@/pages/sales-order-voucherGo.vue").default // load sync home
    // },
    // {
    //   path: "/sales-order-voucher/:voucherTypeName",
    //   name: "sales-order-voucher-type",
    //   meta: { layout: "with-login" },
    //   component: require("@/pages/sales-order-voucherGo.vue").default // load sync home
    // },
    // {
    //   path: "/sales-order-voucher/:voucherTypeName/:voucher_id",
    //   name: "sales-order-voucher-type-voucher-id",
    //   meta: { layout: "with-login" },
    //   component: require("@/pages/sales-order-voucherGo.vue").default // load sync home
    // },

    //end of temp route
    {
      path: "/create-creditnote",
      name: "create-creditnote",
      meta: { layout: "with-login" },
      component: require("@/pages/create-creditnote.vue").default // load sync home
    },
    {
      path: "/create-creditnote/:voucherTypeName",
      name: "create-creditnote-type",
      meta: { layout: "with-login" },
      component: require("@/pages/create-creditnote.vue").default // load sync home
    },
    {
      path: "/create-creditnote/:voucherTypeName/:voucher_id",
      name: "create-creditnote-type-voucher-id",
      meta: { layout: "with-login" },
      component: require("@/pages/create-creditnote.vue").default // load sync home
    },
    {
      path: "/purchase-voucher",
      name: "purchase-voucher",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-voucher.vue").default // load sync home
    },
    {
      path: "/purchase-voucher/:voucherTypeName",
      name: "purchase-voucher-type",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-voucher.vue").default // load sync home
    },
    // {
    //   path: "/purchase-voucher/:voucherTypeName/:voucher_id",
    //   name: "purchase-voucher-type-voucher-id",
    //   meta: { layout: "with-login" },
    //   component: require("@/pages/purchase-voucher.vue").default // load sync home
    // },
    {
      path: "/purchase-order-voucher",
      name: "purchase-order-voucher",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-order-voucher.vue").default // load sync home
    },
    {
      path: "/purchase-order-voucher/:voucherTypeName",
      name: "purchase-order-voucher-type",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-order-voucher.vue").default // load sync home
    },
    // {
    //   path: "/purchase-order-voucher/:voucherTypeName/:voucher_id",
    //   name: "purchase-order-voucher-type-voucher-id",
    //   meta: { layout: "with-login" },
    //   component: require("@/pages/purchase-order-voucher.vue").default // load sync home
    // },
    {
      path: "/purchase-order-voucher-v4",
      name: "purchase-order-voucher-v4",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-order-voucher-V4.vue").default // load sync home
    },
    {
      path: "/purchase-order-voucher-v4/:voucherTypeName",
      name: "purchase-order-voucher-type",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-order-voucher-V4.vue").default // load sync home
    },
    {
      path: "/purchase-order-voucher-v4/:voucherTypeName/:voucher_id",
      name: "purchase-order-voucher-type-voucher-id",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-order-voucher-V4.vue").default // load sync home
    },
    {
      path: "/create-payment",
      name: "create-payment",
      meta: { layout: "with-login" },
      component: require("@/pages/create-payment.vue").default // load sync home
    },
    {
      path: "/create-payment/:voucherTypeName",
      name: "create-payment-type",
      meta: { layout: "with-login" },
      component: require("@/pages/create-payment.vue").default // load sync home
    },
    {
      path: "/create-payment/:voucherTypeName/:voucher_id",
      name: "create-payment-type-voucher-id",
      meta: { layout: "with-login" },
      component: require("@/pages/create-payment.vue").default // load sync home
    },
    {
      path: "/create-debit-note",
      name: "create-debit-note",
      meta: { layout: "with-login" },
      component: require("@/pages/create-debit-note.vue").default // load sync home
    },
    {
      path: "/create-debit-note/:voucherTypeName",
      name: "create-debit-note-type",
      meta: { layout: "with-login" },
      component: require("@/pages/create-debit-note.vue").default // load sync home
    },
    // {
    //   path: "/create-debit-note/:voucherTypeName/:voucher_id",
    //   name: "create-debit-note-type-voucher-id",
    //   meta: { layout: "with-login" },
    //   component: require("@/pages/create-debit-note.vue").default // load sync home
    // },
    {
      path: "/create-debit-note-v4",
      name: "create-debit-note-v4",
      meta: { layout: "with-login" },
      component: require("@/pages/create-debit-note-V4.vue").default // load sync home
    },
    {
      path: "/create-debit-note-v4/:voucherTypeName",
      name: "create-debit-note-type",
      meta: { layout: "with-login" },
      component: require("@/pages/create-debit-note-V4.vue").default // load sync home
    },
    {
      path: "/create-debit-note-v4/:voucherTypeName/:voucher_id",
      name: "create-debit-note-type-voucher-id",
      meta: { layout: "with-login" },
      component: require("@/pages/create-debit-note-V4.vue").default // load sync home
    },
    {
      path: "/create-journal",
      name: "create-journal",
      meta: { layout: "with-login" },
      component: require("@/pages/create-journal.vue").default // load sync home
    },
    {
      path: "/create-journal/:voucherTypeName/:voucher_id",
      name: "create-journal-type-voucher-id",
      meta: { layout: "with-login" },
      component: require("@/pages/create-journal.vue").default // load sync home
    },
    {
      path: "/create-journal/:voucherTypeName",
      name: "create-journal-type",
      meta: { layout: "with-login" },
      component: require("@/pages/create-journal.vue").default // load sync home
    },
    {
      path: "/sales",
      name: "dashboard-sales",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-sales.vue").default // load sync home
    },
    {
      path: "/sales/:v_type",
      name: "dashboard-sales-type",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-sales.vue").default // load sync home
    },
    {
      path: "/sales-stock-item",
      name: "dashboard-sales-stock-item",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-sales-stock-item.vue").default // load sync home
    },
    {
      path: "/creditnote-month",
      name: "dashboard-creditnote-month",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-creditnote-month.vue").default // load sync home
    },
    {
      path: "/creditnote",
      name: "dashboard-creditnote",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-creditnote.vue").default // load sync home
    },
    {
      path: "/creditnote-stock-item",
      name: "dashboard-creditnote-stock-item",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-creditnote-stock-item.vue").default // load sync home
    },
    {
      path: "/creditnote-bill",
      name: "dashboard-creditnote-bill",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-creditnote-bill.vue").default // load sync home
    },
    {
      path: "/creditnote-ledger-group",
      name: "dashboard-creditnote-ledger-group",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-creditnote-ledger-group.vue").default // load sync home
    },
    {
      path: "/creditnote-voucher-type",
      name: "dashboard-creditnote-voucher-type",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-creditnote-voucher-type.vue").default // load sync home
    },
    {
      path: "/creditnote-stock-group",
      name: "dashboard-creditnote-stock-group",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-creditnote-stock-group.vue").default // load sync home
    },
    {
      path: "/creditnote-stock-category",
      name: "dashboard-creditnote-stock-category",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-creditnote-stock-category.vue").default // load sync home
    },
    {
      path: "/sales-month",
      name: "dashboard-sales-month",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-sales-month.vue").default // load sync home
    },
    {
      path: "/sales-bill",
      name: "dashboard-sales-bill",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-sales-bill.vue").default // load sync home
    },
    {
      path: "/sales-ledger-group",
      name: "dashboard-sales-ledger-group",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-sales-ledger-group.vue").default // load sync home
    },
    {
      path: "/sales-voucher-type",
      name: "dashboard-sales-voucher-type",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-sales-voucher-type.vue").default // load sync home
    },
    {
      path: "/sales-stock-category",
      name: "dashboard-sales-stock-category",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-sales-stock-category.vue").default // load sync home
    },
    {
      path: "/sales-stock-group",
      name: "dashboard-sales-stock-group",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-sales-stock-group.vue").default // load sync home
    },
    {
      path: "/stock-group/:guid/:group_name/:v_type",
      name: "stock-group",
      meta: { layout: "with-login" },
      component: require("@/pages/stock-group.vue").default // load sync home
    },
    {
      path: "/stock-group-item/:guid/:group_name/:v_type",
      name: "stock-group-item",
      meta: { layout: "with-login" },
      component: require("@/pages/stock-group-item.vue").default // load sync home
    },
    {
      path: "/ledger-group/:guid/:group_name/:v_type",
      name: "ledger-group",
      meta: { layout: "with-login" },
      component: require("@/pages/ledger-group.vue").default // load sync home
    },
    {
      path: "/ledger-group-ledger/:guid/:group_name/:v_type",
      name: "ledger-group-ledger",
      meta: { layout: "with-login" },
      component: require("@/pages/ledger-group-ledger.vue").default // load sync home
    },
    {
      path: "/stock-category/:guid/:group_name/:v_type",
      name: "stock-category",
      meta: { layout: "with-login" },
      component: require("@/pages/stock-category.vue").default // load sync home
    },
    {
      path: "/stock-category-item/:guid/:group_name/:v_type",
      name: "stock-category-item",
      meta: { layout: "with-login" },
      component: require("@/pages/stock-category-item.vue").default // load sync home
    },
    {
      path: "/receivables",
      name: "dashboard-receivables",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-receivables.vue").default // load sync home
    },
    {
      path: "/receivables-ledgerlist",
      name: "dashboard-receivables-ledgerlist",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-receivables-ledgerlist.vue").default // load sync home
    },
    {
      path: "/receivables-ledgerlist/:ledgerGuid/:billRef/:billDate",
      name: "dashboard-receivables-ledgerlist",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-receivables-ledgerlist.vue").default // load sync home
    },
    {
      path: "/receivables-v2",
      name: "dashboard-receivables-v2",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-receivables-v2.vue").default // load sync home
    },
    {
      path: "/receipt",
      name: "dashboard-receipt",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-receipt.vue").default // load sync home
    },
    {
      path: "/receipt-month",
      name: "dashboard-receipt-month",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-receipt-month.vue").default // load sync home
    },
    {
      path: "/receipt-bill",
      name: "dashboard-receipt-bill",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-receipt-bill.vue").default // load sync home
    },
    {
      path: "/receipt-ledger-group",
      name: "dashboard-receipt-ledger-group",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-receipt-ledger-group.vue").default // load sync home
    },
    {
      path: "/receipt-voucher-type",
      name: "dashboard-receipt-voucher-type",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-receipt-voucher-type.vue").default // load sync home
    },
    {
      path: "/purchase",
      name: "dashboard-purchase",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-purchase.vue").default // load sync home
    },
    {
      path: "/purchase-stock-item",
      name: "dashboard-purchase-stock-item",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-purchase-stock-item.vue").default // load sync home
    },
    {
      path: "/debitnote-month",
      name: "dashboard-debitnote-month",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-debitnote-month.vue").default // load sync home
    },
    {
      path: "/debitnote",
      name: "dashboard-debitnote",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-debitnote.vue").default // load sync home
    },
    {
      path: "/debitnote-stock-item",
      name: "dashboard-debitnote-stock-item",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-debitnote-stock-item.vue").default // load sync home
    },
    {
      path: "/debitnote-bill",
      name: "dashboard-debitnote-bill",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-debitnote-bill.vue").default // load sync home
    },
    {
      path: "/debitnote-ledger-group",
      name: "dashboard-debitnote-ledger-group",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-debitnote-ledger-group.vue").default // load sync home
    },
    {
      path: "/debitnote-voucher-type",
      name: "dashboard-debitnote-voucher-type",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-debitnote-voucher-type.vue").default // load sync home
    },
    {
      path: "/debitnote-stock-group",
      name: "dashboard-debitnote-stock-group",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-debitnote-stock-group.vue").default // load sync home
    },
    {
      path: "/debitnote-stock-category",
      name: "dashboard-debitnote-stock-category",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-debitnote-stock-category.vue").default // load sync home
    },
    {
      path: "/purchase-month",
      name: "dashboard-purchase-month",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-purchase-month.vue").default // load sync home
    },
    {
      path: "/purchase-bill",
      name: "dashboard-purchase-bill",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-purchase-bill.vue").default // load sync home
    },
    {
      path: "/purchase-ledger-group",
      name: "dashboard-purchase-ledger-group",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-purchase-ledger-group.vue").default // load sync home
    },
    {
      path: "/purchase-voucher-type",
      name: "dashboard-purchase-voucher-type",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-purchase-voucher-type.vue").default // load sync home
    },
    {
      path: "/purchase-stock-category",
      name: "dashboard-purchase-stock-category",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-purchase-stock-category.vue").default // load sync home
    },
    {
      path: "/purchase-stock-group",
      name: "dashboard-purchase-stock-group",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-purchase-stock-group.vue").default // load sync home
    },
    {
      path: "/purchase/:v_type",
      name: "dashboard-purchase-type",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-purchase.vue").default // load sync home
    },
    {
      path: "/payables",
      name: "dashboard-payables",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-payables.vue").default // load sync home
    },
    // {
    //   path: "/payables-ledgerlist",
    //   name: "dashboard-payables-ledgerlist",
    //   meta: { layout: "with-login" },
    //   component: require("@/pages/dashboard-payables-ledgerlist.vue").default // load sync home
    // },
    {
    path: "/payables-ledgerlist/:ledgerGuid/:billRef/:billDate",
    name: "dashboard-payables-ledgerlist",
    meta: { layout: "with-login" },
    component: require("@/pages/dashboard-payables-ledgerlist.vue").default // load sync home
    },
    {
      path: "/payables/ledger/details",
      name: "dashboard-payables-ledger-details",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-payables-ledger-details.vue").default // load sync home
    },
    {
      path: "/payment",
      name: "dashboard-payment",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-payment.vue").default // load sync home
    },
    {
      path: "/payment-month",
      name: "dashboard-payment-month",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-payment-month.vue").default // load sync home
    },
    {
      path: "/payment-bill",
      name: "dashboard-payment-bill",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-payment-bill.vue").default // load sync home
    },
    {
      path: "/payment-ledger-group",
      name: "dashboard-payment-ledger-group",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-payment-ledger-group.vue").default // load sync home
    },
    {
      path: "/payment-voucher-type",
      name: "dashboard-payment-voucher-type",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-payment-voucher-type.vue").default // load sync home
    },
    {
      path: "/sales/ledger",
      name: "dashboard-sale-ledger",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-sale-ledger.vue").default // load sync home
    },
    {
      path: "/sales/ledger/details",
      name: "dashboard-sale-ledger-details",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-sale-ledger-details.vue").default // load sync home
    },


    //govind
    {
      path: "/receivables/ledger/:ledgerGuid/:ledger_name/:type/:filter_value",
      name: "dashboard-receivables-ledger-filter",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-receivables-ledger.vue").default // load sync home
    },
    {
      path: "/receivables/ledger/:ledgerGuid/:ledger_name/:type/:filter_value",
      name: "dashboard-receivables-ledger",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-receivables-ledger.vue").default // load sync home
    },
    {
      path: "/receivables/ledger/onAccount/:guid",
      name: "dashboard-receivables-ledger",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-onAccount.vue").default // load sync home
    },
    //gavaskar
    {
      path: "/payables/ledger/onAccount/:guid",
      name: "dashboard-receivables-ledger",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-onAccount.vue").default // load sync home
    },
    //Chahat
    {
      path: "/payables/ledger/:ledgerGuid/:ledger_name/:type/:filter_value",
      name: "dashboard-payables-ledger-new",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-payables-ledger-new.vue").default // load sync home
    },
    {
      path: "/receivables/ledger/details",
      name: "dashboard-receivables-ledger-details",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-receivables-ledger-details.vue").default // load sync home
    },
    {
      path: "/payables/ledger/:ledgerGuid/:ledger_name",
      name: "dashboard-payables-ledger",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-receivables-ledger.vue").default // load sync home
    },
    {
      path: "/receipt/ledger",
      name: "receipt-ledger",
      meta: { layout: "with-login" },
      component: require("@/pages/receipt-ledger.vue").default // load sync home
    },
    {
      path: "/receipt/ledger/details",
      name: "receipt-ledger-details",
      meta: { layout: "with-login" },
      component: require("@/pages/receipt-ledger-details.vue").default // load sync home
    },
    {
      path: "/purchase/ledger",
      name: "dashboard-purchase-ledger",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-purchase-ledger.vue").default // load sync home
    },
    {
      path: "/purchase/ledger/details",
      name: "dashboard-purchase-ledger-details",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-purchase-ledger-details.vue").default // load sync home
    },
    {
      path: "/payment/ledger",
      name: "dashboard-payment-ledger",
      meta: { layout: "with-login" },
      component: require("@/pages/dashboard-payment-ledger.vue").default // load sync home
    },
    {
      path: "/payment/ledger/details",
      name: "payment-ledger-details",
      meta: { layout: "with-login" },
      component: require("@/pages/payment-ledger-details.vue").default // load sync home
    },
    {
      path: "/expenses/ledger-report-view/:id",
      name: "LedgerReportView",
      meta: { layout: "with-login" },
      component: require("@/pages/ledger-report-view.vue").default // load sync home
    },
    {
      path: "/salesorder",
      name: "sales-order",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-order.vue").default // load sync home
    },
    {
      path: "/salesorder-stock-item",
      name: "sales-order-stock-item",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-order-stock-item.vue").default // load sync home
    },
    {
      path: "/salesorder-month",
      name: "sales-order-month",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-order-month.vue").default // load sync home
    },
    {
      path: "/salesorder-bill",
      name: "sales-order-bill",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-order-bill.vue").default // load sync home
    },
    {
      path: "/salesorder-ledger-group",
      name: "sales-order-ledger-group",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-order-ledger-group.vue").default // load sync home
    },
    {
      path: "/salesorder-voucher-type",
      name: "sales-order-voucher-type-details",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-order-voucher-type.vue").default // load sync home
    },
    {
      path: "/salesorder-stock-category",
      name: "sales-order-stock-category",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-order-stock-category.vue").default // load sync home
    },
    {
      path: "/salesorder-stock-group",
      name: "sales-order-stock-group",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-order-stock-group.vue").default // load sync home
    },
    {
      path: "/salesorder/ledger",
      name: "sales-order-ledger",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-order-ledger.vue").default // load sync home
    },
    {
      path: "/salesorder/ledger/details",
      name: "sales-order-ledger-details",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-order-ledger-details.vue").default // load sync home
    },
    {
      path: "/purchaseorder-stock-item",
      name: "purchase-order-stock-item",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-order-stock-item.vue").default // load sync home
    },
    {
      path: "/purchaseorder-month",
      name: "purchase-order-month",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-order-month.vue").default // load sync home
    },
    {
      path: "/purchaseorder-bill",
      name: "purchase-order-bill",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-order-bill.vue").default // load sync home
    },
    {
      path: "/purchaseorder-ledger-group",
      name: "purchase-order-ledger-group",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-order-ledger-group.vue").default // load sync home
    },
    {
      path: "/purchaseorder-voucher-type",
      name: "purchase-order-voucher-type-details",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-order-voucher-type.vue").default // load sync home
    },
    {
      path: "/purchaseorder-stock-category",
      name: "purchase-order-stock-category",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-order-stock-category.vue").default // load sync home
    },
    {
      path: "/purchaseorder-stock-group",
      name: "purchase-order-stock-group",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-order-stock-group.vue").default // load sync home
    },
    {
      path: "/purchaseorder",
      name: "purchase-order",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-order.vue").default // load sync home
    },
    {
      path: "/purchaseorder/ledger",
      name: "purchase-order-ledger",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-order-ledger.vue").default // load sync home
    },
    {
      path: "/purchaseorder/ledger/details",
      name: "purchase-order-ledger-details",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-order-ledger-details.vue").default // load sync home
    },
    {
      path: "/cash",
      name: "cash",
      meta: { layout: "with-login" },
      component: require("@/pages/cash.vue").default // load sync home
    },
    {
      path: "/cash/voucher-list/:v_type",
      name: "cash-voucher-list",
      meta: { layout: "with-login" },
      component: require("@/pages/cash-voucher-list.vue").default // load sync home
    },
    {
      path: "/cash/voucher-details",
      name: "cash-voucher-details",
      meta: { layout: "with-login" },
      component: require("@/pages/cash-voucher-details.vue").default // load sync home
    },
    {
      path: "/bank",
      name: "bank",
      meta: { layout: "with-login" },
      component: require("@/pages/bank.vue").default // load sync home
    },
    {
      path: "/reportDetails/:name",
      name: "reportDetails",
      meta: { layout: "with-login" },
      component: require("@/pages/report-details.vue").default // load sync home
    },
    {
      path: "/closingstock",
      name: "closingstock",
      meta: { layout: "with-login" },
      component: require("@/pages/closing-stock.vue").default // load sync home
    },
    {
      path: "/openingstock",
      name: "Openingstock",
      meta: { layout: "with-login" },
      component: require("@/pages/opening-stock.vue").default // load sync home
    },
    {
      path: "/bank/voucher-list/:v_type",
      name: "bank-voucher-list",
      meta: { layout: "with-login" },
      component: require("@/pages/bank-voucher-list.vue").default // load sync home
    },
    {
      path: "/bank/voucher-details/",
      name: "bank-voucher-details",
      meta: { layout: "with-login" },
      component: require("@/pages/bank-voucher-details.vue").default // load sync home
    },
    {
      path: "/parties/vouchers-listing/:ledger_name/:ledgerGuid/:stockItemGuid",
      name: "vouchers-listing",
      meta: { layout: "with-login" },
      component: require("@/pages/vouchers-listing.vue").default // load sync home
    },
    {
      path: "/manage-reminder",
      name: "manage-reminder",
      meta: { layout: "with-login" },
      component: require("@/pages/manage-reminder.vue").default // load sync home
    },
    {
      path: "/payment-success",
      name: "payment-success",
      meta: { layout: "with-login" },
      component: require("@/pages/payment-success.vue").default 
    },
    // {
    //   path: "/dashboard-new",
    //   name: "dashboard-new",
    //   meta: { layout: "with-login" },
    //   component: require("@/pages/Dashboard-New.vue").default 
    // },
    {
      path: "/dashboard-new-v2",
      name: "dashboard-new-v2",
      meta: { layout: "with-login" },
      component: require("@/pages/Dashboard-New-v2.vue").default 
    },
    {
      path: "/configurations",
      name: "configurations",
      meta: { layout: "with-login" },
      component: require("@/pages/configurations.vue").default 
    },
    {
      path: "/uninstall-feedback",
      name: "uninstall-feedback",
      meta: { layout: "feedback" },
      component: require("@/pages/uninstall-feedback.vue").default 
    }, 
    {
      path: "/ewaylogin",
      name: "ewaylogin",
      meta: { layout: "with-login" },
      component: require("@/pages/ewaylogin.vue").default // load sync home
    },
    {
      path: "/gsplogin",
      name: "gsplogin",
      meta: { layout: "with-login" },
      component: require("@/pages/gsplogin.vue").default // load sync home
    },
    {
      path: "/gsploginnew",
      name: "gsploginnew",
      meta: { layout: "with-login" },
      component: require("@/pages/gsploginnew.vue").default // load sync home
    },
    {
      path: "/sales-voucher-V2",
      name: "sales-voucher-V2",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-voucher-V2.vue").default 
    },
    {
      path: "/sales-voucher-V3",
      name: "sales-voucher-V3",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-voucher-V3.vue").default 
    },
    {
      path: "/sales-voucher-v4",
      name: "sales-voucher-v4",
      meta: { layout: "with-login" },
      component: require("@/pages/sales-voucher-V4.vue").default // load sync home
    },
    {
      path: "/purchase-voucher-V2",
      name: "purchase-voucher-V2",
      meta: { layout: "with-login" },
      component: require("@/pages/purchase-voucher-V2.vue").default 
    },    
    // {
    //   path: "/whatsapp",
    //   name: "whatsapp",
    //   meta: { layout: "with-login" },
    //   component: require("@/pages/whatsapp.vue").default // load sync home
    // },
    {
      path: "/salesOrderLedger/:voucherTypeName/:guid",
      name: "salesOrderLedger",
      meta: {layout: "with-login"},
      component: require("@/pages/salesOrderLedgerPage.vue").default
    },
    {
      path: "/allusers",
      name: "allusers",
      meta: { layout: "with-login" },
      component: require("@/pages/allusers.vue").default // load sync home
    },
    {
      path: "/adduser",
      name: "adduser",
      meta: { layout: "with-login" },
      component: require("@/pages/adduser.vue").default // load sync home
    },
  ]
});
export default router;
const decryptUserId = (encryptedUserId) => {
  // Reverse URL-safe changes
  const originalEncryptedUserId = reverseUrlSafe(encryptedUserId);

  try {
      // Decrypt the user ID
      // console.log("this.secretKey",this.secretKey);
      const bytes = CryptoJS.AES.decrypt(originalEncryptedUserId, process.env.VUE_APP_SECRET_KEY);
      const userIdDecrypted = bytes.toString(CryptoJS.enc.Utf8);

      // Check if decryption is successful
      if (!userIdDecrypted) {
          throw new Error('Decryption failed: Malformed UTF-8 data');
      }

      console.log('Decrypted User ID:', userIdDecrypted);
      return userIdDecrypted;
  } catch (error) {
      console.error('Error during decryption:', error.message);
      return null;
  }
}

// Function to reverse the URL-safe changes
const reverseUrlSafe =(encryptedString) => {
  return encryptedString
      .replace(/_/g, '/')  // Replace '_' back to '/'
      .replace(/-/g, '+')  // Replace '-' back to '+'
      .replace(/'/g, '=');  // Add padding if necessary
}
router.beforeEach((to, from, next) => {
  console.log(to.path);
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['privacy-policy'];
  const authRequired = !publicPages.includes(to.path);
  
  const loggedIn = localStorage.getItem('webAuthToken');
  const isRegistered = localStorage.getItem('isRegistered');
  const checkregisterstatus = localStorage.getItem('checkregisterstatus');
  const source = localStorage.getItem('source');
  const customerId = localStorage.getItem('customerId');
  const companyId = localStorage.getItem('companyId');
  if(source == "sf"){
    if(to.query.s == "sf"){
      if(customerId != decryptUserId(to.query.u)){
        localStorage.clear();
        window.location.href = to.fullPath;
        return next(to.fullPath);
      }
    }
    
  }
  // if(to.query.s == "desktop"){
  //   if(companyId != to.query.c.slice(-24)){
  //     localStorage.clear();
  //     window.location.href = to.fullPath;
  //     return next(to.fullPath);
  //   }
  // }
  // if(to.path == '/'){
  //   if(isRegistered == 'true'){
  //     if(loggedIn){
  //       return next('/dashboard');
  //     }
  //   }else{
  //     if(checkregisterstatus == "0"){
  //       // localStorage.setItem("checkregisterstatus", "1");
  //       // localStorage.setItem("registertologin", "1");
  //       // setTimeout(() => {
  //       //     return next('/');
  //       // }, 500)
  //       // localStorage.clear();
  //       window.location.href = "/";
  //     }else if(checkregisterstatus == "1"){
  //       if(localStorage.getItem('customerStatus').toLowerCase().includes('converted')){
  //         if(localStorage.getItem("selectedTheme") == "2.0"){
  //           if(window.innerWidth <= 991){
  //             return next('/dashboard');
  //           }else{
  //             // return next('/tally-style');
  //             return next('/dashboard');
  //           }
  //         }else{
  //           if(to.query.c){
  //             localStorage.setItem('companyId', decryptUserId(to.query.c));
  //             console.log("company Id", decryptUserId(to.query.c), "query",to.query.c);
  //           }
  //           return next('/dashboard');
  //         }
  //       }else{
  //         next();
  //       }
  //     }
  //   }
  // }else if(to.path == '/option1'){
  //   if(loggedIn){
  //     return next('/dashboard');
  //   }
  // }else if(to.path == '/option2'){
  //   if(loggedIn){
  //     return next('/dashboard');
  //   }
  // }else if(to.path == '/option3'){
  //   if(loggedIn){
  //     return next('/dashboard');
  //   }
  // }else if(to.path == '/register'){
  //   if(loggedIn){
  //     if(localStorage.getItem('isFirstTimeLogin') == false){
  //       return next('/dashboard');
  //     }
  //   }else{
  //     return next('/');
  //   }
  // }else if(to.path == '/privacy-policy' || (to.path == '/terms-conditions') || (to.path == '/website-index2')){
    
  //   next();
  // }else 
  if(to.path != '/register'){
    if(isRegistered === true){
      if (authRequired && !loggedIn) {
        return next('/');
      }
    }else{
      if(checkregisterstatus == "0"){
        localStorage.clear();
        window.location.href = process.env.VUE_APP_WEB_URL;
        
      }else if(checkregisterstatus == "1"){
        next();
      }
    }
  }else{
    if(loggedIn){
      return next('/dashboard');
    }
  }
  next();
})

if(localStorage.getItem('symbol') === 'undefined' || localStorage.getItem('symbol') === null){
  localStorage.setItem("symbol", "₹");
}