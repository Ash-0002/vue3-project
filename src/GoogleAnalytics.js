/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
import Vue from "vue";
export default {
  dashboard_new() {
    Vue.prototype.$mixpanel.track('dashboard_new', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "dashboard_new",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'dashboard_new', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "dashboard_new",
      'source' : localStorage.getItem('source')
    });

  },
  allUsers() {
    Vue.prototype.$mixpanel.track('allUsers', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "allUsers",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'allUsers', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "allUsers",
      'source' : localStorage.getItem('source')
    });

  },
  addUser() {
    Vue.prototype.$mixpanel.track('dashboard_new', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "dashboard_new",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'addUser', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "addUser",
      'source' : localStorage.getItem('source')
    });

  },
  Renewal_Banner_Claim_Button() {
    Vue.prototype.$mixpanel.track('Renewal_Banner_Claim_Button', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "Renewal_Banner_Claim_Button",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'Renewal_Banner_Claim_Button', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "Renewal_Banner_Claim_Button",
      'source' : localStorage.getItem('source')
    });

  },
  parties_listing() {
    Vue.prototype.$mixpanel.track('parties_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "parties_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'parties_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "parties_listing",
      'source' : localStorage.getItem('source')
    });
  },
  parties_summary_listing() {
    Vue.prototype.$mixpanel.track('parties_summary_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "parties_summary_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'parties_summary_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "parties_summary_listing",
      'source' : localStorage.getItem('source')
    });
  },
  parties_sold_listing() {
    Vue.prototype.$mixpanel.track('parties_sold_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "parties_sold_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'parties_sold_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "parties_sold_listing",
      'source' : localStorage.getItem('source')
    });

  },
  parties_purchased_listing() {
    Vue.prototype.$mixpanel.track('parties_purchased_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "parties_purchased_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'parties_purchased_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "parties_purchased_listing",
      'source' : localStorage.getItem('source')
    });

  },
  voucher_details() {
    Vue.prototype.$mixpanel.track('voucher_details', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "voucher_details",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'voucher_details', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "voucher_details",
      'source' : localStorage.getItem('source')
    });

  },
  items_listing() {
    Vue.prototype.$mixpanel.track('items_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "items_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'items_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "items_listing",
      'source' : localStorage.getItem('source')
    });

  },
  items_group_listing() {
    Vue.prototype.$mixpanel.track('items_group_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "items_group_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'items_group_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "items_group_listing",
      'source' : localStorage.getItem('source')
    });

  },
  items_category_listing() {
    Vue.prototype.$mixpanel.track('items_category_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "items_category_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'items_category_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "items_category_listing",
      'source' : localStorage.getItem('source')
    });

  },
  items_summary_listing() {
    Vue.prototype.$mixpanel.track('items_summary_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "items_summary_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'items_summary_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "items_summary_listing",
      'source' : localStorage.getItem('source')
    });

  },
  items_customers_listing() {
    Vue.prototype.$mixpanel.track('items_customers_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "items_customers_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'items_customers_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "items_customers_listing",
      'source' : localStorage.getItem('source')
    });

  },
  items_supplers_listing() {
    Vue.prototype.$mixpanel.track('items_supplers_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "items_supplers_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'items_supplers_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "items_supplers_listing",
      'source' : localStorage.getItem('source')
    });

  },
  vouchers_listing() {
    Vue.prototype.$mixpanel.track('vouchers_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "vouchers_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'vouchers_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "vouchers_listing",
      'source' : localStorage.getItem('source')
    });

  },
  sales_listing() {
    Vue.prototype.$mixpanel.track('sales_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "sales_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'sales_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "sales_listing",
      'source' : localStorage.getItem('source')
    });

  },
  receipt_listing() {
    Vue.prototype.$mixpanel.track('receipt_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "receipt_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'receipt_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "receipt_listing",
      'source' : localStorage.getItem('source')
    });

  },
  receivables_listing() {
    Vue.prototype.$mixpanel.track('receivables_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "receivables_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'receivables_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "receivables_listing",
      'source' : localStorage.getItem('source')
    });

  },
  receivables_ledgers_listing() {
    Vue.prototype.$mixpanel.track('receivables_ledgers_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "receivables_ledgers_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'receivables_ledgers_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "receivables_ledgers_listing",
      'source' : localStorage.getItem('source')
    });

  },
  sales_order_listing() {
    Vue.prototype.$mixpanel.track('sales_order_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "sales_order_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'sales_order_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "sales_order_listing",
      'source' : localStorage.getItem('source')
    });
  },
  purchase_listing() {
    Vue.prototype.$mixpanel.track('purchase_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "purchase_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'purchase_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "purchase_listing",
      'source' : localStorage.getItem('source')
    });

  },
  payments_listing() {
    Vue.prototype.$mixpanel.track('payments_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "payments_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'payments_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "payments_listing",
      'source' : localStorage.getItem('source')
    });

  },
  payables_listing() {
    Vue.prototype.$mixpanel.track('payables_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "payables_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'payables_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "payables_listing",
      'source' : localStorage.getItem('source')
    });

  },
  payables_ledgers_listing() {
    Vue.prototype.$mixpanel.track('payables_ledgers_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "payables_ledgers_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'payables_ledgers_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "payables_ledgers_listing",
      'source' : localStorage.getItem('source')
    });

  },
  purchaseorder_listing() {
    Vue.prototype.$mixpanel.track('purchaseorder_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "purchaseorder_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'purchaseorder_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "purchaseorder_listing",
      'source' : localStorage.getItem('source')
    });

  },
  cash_listing() {
    Vue.prototype.$mixpanel.track('cash_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "cash_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'cash_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "cash_listing",
      'source' : localStorage.getItem('source')
    });
  },
  bank_listing() {
    Vue.prototype.$mixpanel.track('bank_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "bank_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'bank_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "bank_listing",
      'source' : localStorage.getItem('source')
    });

  },
  banks_ledger_listing() {
    Vue.prototype.$mixpanel.track('banks_ledger_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "banks_ledger_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'banks_ledger_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "banks_ledger_listing",
      'source' : localStorage.getItem('source')
    });

  },
  day_book_reports_listing() {
    Vue.prototype.$mixpanel.track('day_book_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "day_book_reports_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'day_book_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "day_book_reports_listing",
      'source' : localStorage.getItem('source')
    });

  },
  expenses_reports_listing() {
    Vue.prototype.$mixpanel.track('expenses_reports_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "expenses_reports_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'expenses_reports_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "expenses_reports_listing",
      'source' : localStorage.getItem('source')
    });

  },
  expenses_list() {
    Vue.prototype.$mixpanel.track('expenses_list', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "expenses_list",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'expenses_list', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "expenses_list",
      'source' : localStorage.getItem('source')
    });

  },
  inactive_customers_reports_listing() {
    Vue.prototype.$mixpanel.track('inactive_customers_reports_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "inactive_customers_reports_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'inactive_customers_reports_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "inactive_customers_reports_listing",
      'source' : localStorage.getItem('source')
    });

  },
  inactive_items_reports_listing() {
    Vue.prototype.$mixpanel.track('inactive_items_reports_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "inactive_items_reports_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'inactive_items_reports_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "inactive_items_reports_listing",
      'source' : localStorage.getItem('source')
    });
  },
  expenses_list_reports_listing() {
    Vue.prototype.$mixpanel.track('expenses_list_reports_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "expenses_list_reports_listing",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'expenses_list_reports_listing', {
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "expenses_list_reports_listing",
      'source' : localStorage.getItem('source')
    });

  },
  parties_screen_sorting(sortBy, orderBy) {
    Vue.prototype.$mixpanel.track('parties_screen_sorting', {
      'sortBy': sortBy,
      'orderBy': orderBy,
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "parties_screen_sorting",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'parties_screen_sorting', {
      'sortBy': sortBy,
      'orderBy': orderBy,
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "parties_screen_sorting",
      'source' : localStorage.getItem('source')
    });
  },
  parties_screen_search(searchBy) {
    Vue.prototype.$mixpanel.track('parties_screen_search', {
      'searchBy': searchBy,
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "parties_screen_search",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'parties_screen_search', {
      'searchBy': searchBy,
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "parties_screen_search",
      'source' : localStorage.getItem('source')
    });

  },
  parties_summary_screen_sorting(sortBy, orderBy) {
    Vue.prototype.$mixpanel.track('parties_summary_screen_sorting', {
      'sortBy': sortBy,
      'orderBy': orderBy,
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "parties_summary_screen_sorting",
      'source' : localStorage.getItem('source')
    });
    gtag('event', 'parties_summary_screen_sorting', {
      'sortBy': sortBy,
      'orderBy': orderBy,
      'customerId': localStorage.getItem('customerId'),
      'name': localStorage.getItem('customerfullName'),
      'companyId': localStorage.getItem('companyId'),
      'customerStatus': localStorage.getItem('customerStatus'),
      'className': "parties_summary_screen_sorting",
      'source' : localStorage.getItem('source')
    });
  
},
parties_summary_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('parties_summary_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_summary_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_summary_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_summary_screen_search",
    'source' : localStorage.getItem('source')
  });

},
parties_listing_summary_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('parties_listing_summary_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_listing_summary_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_listing_summary_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_listing_summary_screen_datepicker",
    'source' : localStorage.getItem('source')
  });

},
parties_sold_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('parties_sold_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_sold_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_sold_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_sold_screen_sorting",
    'source' : localStorage.getItem('source')
  });

},
parties_sold_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('parties_sold_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_sold_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_sold_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_sold_screen_search",
    'source' : localStorage.getItem('source')
  });

},
parties_listing_sold_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('parties_listing_sold_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_listing_sold_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_listing_sold_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_listing_sold_screen_datepicker",
    'source' : localStorage.getItem('source')
  });

},
parties_purchased_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('parties_purchased_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_purchased_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_purchased_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_purchased_screen_sorting",
    'source' : localStorage.getItem('source')
  });

},
parties_purchased_screen_search(searchBy){
Vue.prototype.$mixpanel.track('parties_purchased_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_purchased_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_purchased_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_purchased_screen_search",
    'source' : localStorage.getItem('source')
  });

},
parties_listing_purchased_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('parties_listing_purchased_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_listing_purchased_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_listing_purchased_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_listing_purchased_screen_datepicker",
    'source' : localStorage.getItem('source')
  });

},
vouchers_listing_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('vouchers_listing_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "vouchers_listing_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'vouchers_listing_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "vouchers_listing_screen_sorting",
    'source' : localStorage.getItem('source')
  });

},
vouchers_listing_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('vouchers_listing_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "vouchers_listing_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'vouchers_listing_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "vouchers_listing_screen_datepicker",
    'source' : localStorage.getItem('source')
  });

},
items_screen_sorting(sortBy, orderBy){
   Vue.prototype.$mixpanel.track('items_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_screen_sorting",
    'source' : localStorage.getItem('source')
  });

},
items_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('items_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_screen_search",
    'source' : localStorage.getItem('source')
  });

},
items_group_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('items_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });

},
items_group_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('items_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_group_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_group_screen_search",
    'source' : localStorage.getItem('source')
  });
},
items_category_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('items_category_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_category_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_category_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_category_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
items_category_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('items_category_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_category_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_category_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_category_screen_search",
    'source' : localStorage.getItem('source')
  });
},

items_summary_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('items_summary_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_summary_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_summary_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_summary_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
items_summary_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('items_summary_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_summary_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_summary_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_summary_screen_search",
    'source' : localStorage.getItem('source')
  });
},
items_listing_summary_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('items_listing_summary_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_listing_summary_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_listing_summary_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_listing_summary_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},

items_customers_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('items_customers_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_customers_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_customers_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_customers_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
items_customers_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('items_customers_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_customers_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_customers_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_customers_screen_search",
    'source' : localStorage.getItem('source')
  });
},
items_listing_customers_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('items_listing_customers_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_listing_customers_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_listing_customers_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_listing_customers_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},

items_supplers_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('items_supplers_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_supplers_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_supplers_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_supplers_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
items_supplers_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('items_supplers_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_supplers_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_supplers_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_supplers_screen_search",
    'source' : localStorage.getItem('source')
  });
},
items_listing_suppliers_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('items_listing_suppliers_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_listing_suppliers_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_listing_suppliers_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_listing_suppliers_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},

item_group_listing_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('item_group_listing_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "item_group_listing_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'item_group_listing_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "item_group_listing_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
item_group_listing_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('item_group_listing_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "item_group_listing_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'item_group_listing_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "item_group_listing_screen_search",
    'source' : localStorage.getItem('source')
  });
},
item_category_listing_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('item_category_listing_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "item_category_listing_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'item_category_listing_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "item_category_listing_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
item_category_listing_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('item_category_listing_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "item_category_listing_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'item_category_listing_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "item_category_listing_screen_search",
    'source' : localStorage.getItem('source')
  });
},
cash_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('cash_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'cash_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
cash_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('cash_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'cash_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
cash_voucher_list_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('cash_voucher_list_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_voucher_list_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'cash_voucher_list_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_voucher_list_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
cash_voucher_list_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('cash_voucher_list_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_voucher_list_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'cash_voucher_list_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_voucher_list_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
bank_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('bank_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'bank_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
bank_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('bank_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'bank_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
bank_voucher_list_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('bank_voucher_list_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_voucher_list_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'bank_voucher_list_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_voucher_list_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
bank_voucher_list_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('bank_voucher_list_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_voucher_list_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'bank_voucher_list_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_voucher_list_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
sales_screen_sorting(sortBy, orderBy){
   Vue.prototype.$mixpanel.track('sales_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
sales_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('sales_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
sales_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('sales_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_screen_search",
    'source' : localStorage.getItem('source')
  });
},
sales_screen_filter(filterBy, filterType){
  Vue.prototype.$mixpanel.track('sales_screen_filter', {
    'filterBy': filterBy,
    'filterType': filterType,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_screen_filter', {
    'filterBy': filterBy,
    'filterType': filterType,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
ledger_group_ledger_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('ledger_group_ledger_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "ledger_group_ledger_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'ledger_group_ledger_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "ledger_group_ledger_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
ledger_group_ledger_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('ledger_group_ledger_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "ledger_group_ledger_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'ledger_group_ledger_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "ledger_group_ledger_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
ledger_group_ledger_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('ledger_group_ledger_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "ledger_group_ledger_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'ledger_group_ledger_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "ledger_group_ledger_screen_search",
    'source' : localStorage.getItem('source')
  });
},
ledger_group_ledger_screen_filter(filterType){
  Vue.prototype.$mixpanel.track('ledger_group_ledger_screen_filter', {
    'filterType': filterType,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "ledger_group_ledger_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'ledger_group_ledger_screen_filter', {
    'filterType': filterType,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "ledger_group_ledger_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
stock_group_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('stock_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
stock_group_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('stock_group_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_group_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
stock_group_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('stock_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_screen_search",
    'source' : localStorage.getItem('source')
  });
},
stock_group_screen_filter(filterType){
  Vue.prototype.$mixpanel.track('stock_group_screen_filter', {
    'filterType': filterType,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_group_screen_filter', {
    'filterType': filterType,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
stock_group_item_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('stock_group_item_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_item_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_group_item_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_item_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
stock_group_item_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('stock_group_item_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_item_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_group_item_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_item_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
stock_group_item_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('stock_group_item_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_item_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_group_item_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_item_screen_search",
    'source' : localStorage.getItem('source')
  });
},
stock_group_item_screen_filter(filterType){
  Vue.prototype.$mixpanel.track('stock_group_item_screen_filter', {
    'filterType': filterType,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_item_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_group_item_screen_filter', {
    'filterType': filterType,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_item_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
stock_category_item_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('stock_category_item_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_category_item_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_category_item_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_category_item_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
stock_category_item_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('stock_category_item_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_category_item_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_category_item_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_category_item_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
stock_category_item_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('stock_category_item_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_category_item_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_category_item_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_category_item_screen_search",
    'source' : localStorage.getItem('source')
  });
},
stock_category_item_screen_filter(filterType){
  Vue.prototype.$mixpanel.track('stock_category_item_screen_filter', {
    'filterType': filterType,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_category_item_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_category_item_screen_filter', {
    'filterType': filterType,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_category_item_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
receipt_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('receipt_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
receipt_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('receipt_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
receipt_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('receipt_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_screen_search",
    'source' : localStorage.getItem('source')
  });
},
receipt_screen_filter(filterBy){
  Vue.prototype.$mixpanel.track('receipt_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
receivables_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('receivables_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receivables_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
receivables_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('receivables_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receivables_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
receivables_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('receivables_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receivables_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_screen_search",
    'source' : localStorage.getItem('source')
  });
},
receivables_screen_filter(rangeBy, filterBy){
  Vue.prototype.$mixpanel.track('receivables_screen_filter', {
    'rangeBy': rangeBy,
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receivables_screen_filter', {
    'rangeBy': rangeBy,
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
receivables_ledger_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('receivables_ledger_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_ledger_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receivables_ledger_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_ledger_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
receivables_ledger_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('receivables_ledger_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_ledger_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receivables_ledger_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_ledger_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
receivables_ledger_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('receivables_ledger_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_ledger_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receivables_ledger_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_ledger_screen_search",
    'source' : localStorage.getItem('source')
  });
},
receivables_ledger_screen_filter(rangeBy){
  Vue.prototype.$mixpanel.track('receivables_ledger_screen_filter', {
    'rangeBy': rangeBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_ledger_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receivables_ledger_screen_filter', {
    'rangeBy': rangeBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_ledger_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
salesorder_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('salesorder_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
salesorder_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('salesorder_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
salesorder_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('salesorder_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_screen_search",
    'source' : localStorage.getItem('source')
  });
},
salesorder_screen_filter(filterBy, filterType){
  Vue.prototype.$mixpanel.track('salesorder_screen_filter', {
    'filterBy': filterBy,
    'filterType': filterType,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_screen_filter', {
    'filterBy': filterBy,
    'filterType': filterType,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
purchase_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('purchase_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
purchase_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('purchase_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
purchase_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('purchase_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_screen_search",
    'source' : localStorage.getItem('source')
  });
},
purchase_screen_filter(filterBy, filterType){
  Vue.prototype.$mixpanel.track('purchase_screen_filter', {
    'filterBy': filterBy,
    'filterType': filterType,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_screen_filter', {
    'filterBy': filterBy,
    'filterType': filterType,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
payments_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('payments_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payments_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payments_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payments_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
payments_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('payments_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payments_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payments_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payments_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
payments_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('payments_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payments_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payments_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payments_screen_search",
    'source' : localStorage.getItem('source')
  });
},
payments_screen_filter(filterBy){
  Vue.prototype.$mixpanel.track('payments_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payments_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payments_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payments_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
payables_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('payables_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payables_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payables_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payables_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
payables_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('payables_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payables_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payables_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payables_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
payables_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('payables_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payables_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payables_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payables_screen_search",
    'source' : localStorage.getItem('source')
  });
},
payables_screen_filter(rangeBy, filterBy){
  Vue.prototype.$mixpanel.track('payables_screen_filter', {
    'rangeBy': rangeBy,
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payables_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payables_screen_filter', {
    'rangeBy': rangeBy,
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payables_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('purchaseorder_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('purchaseorder_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('purchaseorder_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_screen_search",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_screen_filter(filterBy, filterType){
  Vue.prototype.$mixpanel.track('purchaseorder_screen_filter', {
    'filterBy': filterBy,
    'filterType': filterType,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_screen_filter', {
    'filterBy': filterBy,
    'filterType': filterType,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
day_book_reports_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('day_book_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "day_book_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'day_book_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "day_book_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
day_book_reports_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('day_book_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "day_book_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'day_book_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "day_book_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
day_book_reports_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('day_book_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "day_book_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'day_book_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "day_book_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
},
expenses_reports_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('expenses_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'expenses_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
expenses_reports_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('expenses_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'expenses_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
expenses_reports_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('expenses_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'expenses_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
},
expenses_list_reports_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('expenses_list_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'expenses_list_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
expenses_list_reports_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('expenses_list_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'expenses_list_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
expenses_list_reports_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('expenses_list_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'expenses_list_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
},
inactive_customers_reports_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('inactive_customers_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_customers_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'inactive_customers_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_customers_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
inactive_customers_reports_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('inactive_customers_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_customers_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'inactive_customers_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_customers_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
},
inactive_customers_reports_screen_filter(filterBy){
  Vue.prototype.$mixpanel.track('inactive_customers_reports_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_customers_reports_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'inactive_customers_reports_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_customers_reports_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
inactive_items_reports_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('inactive_items_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_items_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'inactive_items_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_items_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
inactive_items_reports_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('inactive_items_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_items_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'inactive_items_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_items_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
},

expenses_list_reports_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('expenses_list_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'expenses_list_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
top_reports_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('top_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'top_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
expenses_list_reports_screen_search(searchBy){
   Vue.prototype.$mixpanel.track('expenses_list_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'expenses_list_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
},
expenses_list_reports_screen_filter(filterBy){
  Vue.prototype.$mixpanel.track('expenses_list_reports_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'expenses_list_reports_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
my_account_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('my_account_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_account_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_account_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_account_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
my_account_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('my_account_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_account_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_account_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_account_screen_search",
    'source' : localStorage.getItem('source')
  });
},
balancesheet_reports_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('balancesheet_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "balancesheet_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'balancesheet_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "balancesheet_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
closingstock_reports_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('closingstock_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "closingstock_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'closingstock_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "closingstock_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
reportdetails_reports_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('reportdetails_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "reportdetails_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'reportdetails_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "reportdetails_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
profit_loss_reports_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('profit_loss_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "profit_loss_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'profit_loss_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "profit_loss_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
trial_balance_reports_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('trial_balance_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "trial_balance_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'trial_balance_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "trial_balance_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
openingstock_reports_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('openingstock_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "openingstock_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'openingstock_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "openingstock_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
my_ledgers_reports_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('my_ledgers_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_ledgers_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_ledgers_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_ledgers_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
my_ledgers_reports_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('my_ledgers_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_ledgers_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_ledgers_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_ledgers_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
},
my_ledgers_reports_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('my_ledgers_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_ledgers_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_ledgers_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_ledgers_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
my_stock_items_reports_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('my_stock_items_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_stock_items_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_stock_items_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_stock_items_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
my_stock_items_reports_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('my_stock_items_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_stock_items_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_stock_items_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_stock_items_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
},
my_stock_items_reports_screen_datepicker(startdate, enddate){
   Vue.prototype.$mixpanel.track('my_stock_items_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_stock_items_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_stock_items_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_stock_items_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
my_vouchers_reports_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('my_vouchers_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_vouchers_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_vouchers_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_vouchers_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
my_vouchers_reports_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('my_vouchers_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_vouchers_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_vouchers_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_vouchers_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
},
my_vouchers_reports_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('my_vouchers_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_vouchers_reports_screen_datepicker",
  });
  gtag('event', 'my_vouchers_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_vouchers_reports_screen_datepicker",
  });
},
my_quotations_reports_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('my_quotations_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_quotations_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_quotations_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_quotations_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
my_quotations_reports_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('my_quotations_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_quotations_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_quotations_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_quotations_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
},
my_quotations_reports_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('my_quotations_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_quotations_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_quotations_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_quotations_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
tracking_reports_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('tracking_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tracking_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
tracking_reports_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('tracking_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tracking_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
},
tracking_reports_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('tracking_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tracking_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
tracking_details_reports_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('tracking_details_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_details_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tracking_details_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_details_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
tracking_details_reports_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('tracking_details_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_details_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tracking_details_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_details_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
},
tracking_details_reports_screen_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('tracking_details_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_details_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tracking_details_reports_screen_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_details_reports_screen_datepicker",
    'source' : localStorage.getItem('source')
  });
},
login_screen(mobileNumber){
  Vue.prototype.$mixpanel.track('login_screen', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "login_screen",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'login_screen', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "login_screen",
    'source' : localStorage.getItem('source')
  });
},
login_rightbar(mobileNumber){
  Vue.prototype.$mixpanel.track('login_rightbar', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "login_rightbar",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'login_rightbar', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "login_rightbar",
    'source' : localStorage.getItem('source')
  });
},
login_page_success(mobileNumber){
  Vue.prototype.$mixpanel.track('login_page_success', {
     'mobileNumber': mobileNumber,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "login_page_success",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'login_page_success', {
     'mobileNumber': mobileNumber,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "login_page_success",
    'source' : localStorage.getItem('source')
  });
},
login_homepage(mobileNumber){
  Vue.prototype.$mixpanel.track('login_homepage', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "login_homepage",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'login_homepage', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "login_homepage",
    'source' : localStorage.getItem('source')
  });
},
Otp_Resend_screen(mobileNumber){
  Vue.prototype.$mixpanel.track('Otp_Resend_screen', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Otp_Resend_screen",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Otp_Resend_screen', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Otp_Resend_screen",
    'source' : localStorage.getItem('source')
  });
},
Otp_loginpage_Resend_screen(mobileNumber){
  Vue.prototype.$mixpanel.track('Otp_loginpage_Resend_screen', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Otp_loginpage_Resend_screen",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Otp_loginpage_Resend_screen', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Otp_loginpage_Resend_screen",
    'source' : localStorage.getItem('source')
  });
},
Otp_Failed_screen(mobileNumber){
  Vue.prototype.$mixpanel.track('Otp_Failed_screen', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Otp_Failed_screen",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Otp_Failed_screen', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Otp_Failed_screen",
    'source' : localStorage.getItem('source')
  });
},
Otp_loginpage_Failed_screen(mobileNumber){
  Vue.prototype.$mixpanel.track('Otp_loginpage_Failed_screen', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Otp_loginpage_Failed_screen",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Otp_loginpage_Failed_screen', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Otp_loginpage_Failed_screen",
    'source' : localStorage.getItem('source')
  });
},
Login_Failed_screen(mobileNumber){
  Vue.prototype.$mixpanel.track('Login_Failed_screen', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Login_Failed_screen",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Login_Failed_screen', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Login_Failed_screen",
    'source' : localStorage.getItem('source')
  });
},
Login_page_Failed_screen(mobileNumber){
  Vue.prototype.$mixpanel.track('Login_page_Failed_screen', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Login_page_Failed_screen",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Login_page_Failed_screen', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Login_page_Failed_screen",
    'source' : localStorage.getItem('source')
  });
},
SignUp_screen(){
  Vue.prototype.$mixpanel.track('SignUp_screen', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "SignUp_screen",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'SignUp_screen', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "SignUp_screen",
    'source' : localStorage.getItem('source')
  });
},
SignUp_Failed_screen(){
  Vue.prototype.$mixpanel.track('SignUp_Failed_screen', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "SignUp_Failed_screen",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'SignUp_Failed_screen', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "SignUp_Failed_screen",
    'source' : localStorage.getItem('source')
  });
},

dashboard_new_screen_summary_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('dashboard_new_screen_summary_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "dashboard_new_screen_summary_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'dashboard_new_screen_summary_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "dashboard_new_screen_summary_datepicker",
    'source' : localStorage.getItem('source')
  });
},

dashboard_new_screen_sales_receipt_datepicker(startdate, enddate){
  Vue.prototype.$mixpanel.track('dashboard_new_screen_sales_receipt_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "dashboard_new_screen_sales_receipt_datepicker",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'dashboard_new_screen_sales_receipt_datepicker', {
    'startdate': startdate,
    'enddate': enddate,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "dashboard_new_screen_sales_receipt_datepicker",
    'source' : localStorage.getItem('source')
  });
},

dashboard_new_screen_top_10(filterBy){
  Vue.prototype.$mixpanel.track('dashboard_new_screen_top_10', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "dashboard_new_screen_top_10",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'dashboard_new_screen_top_10', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "dashboard_new_screen_top_10",
    'source' : localStorage.getItem('source')
  });
},

dashboard_new_screen_day_book(dateLabel){
  Vue.prototype.$mixpanel.track('dashboard_new_screen_day_book', {
    'dateLabel': dateLabel,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "dashboard_new_screen_day_book",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'dashboard_new_screen_day_book', {
    'dateLabel': dateLabel,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "dashboard_new_screen_day_book",
    'source' : localStorage.getItem('source')
  });
},
dashboard_new_screen_receivables_viewall(viewAll){
  Vue.prototype.$mixpanel.track('dashboard_new_screen_receivables_viewall', {
    'viewAll': viewAll,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "dashboard_new_screen_receivables_viewall",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'dashboard_new_screen_receivables_viewall', {
    'viewAll': viewAll,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "dashboard_new_screen_receivables_viewall",
    'source' : localStorage.getItem('source')
  });
},
cash_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('cash_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'cash_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_screen_search",
    'source' : localStorage.getItem('source')
  });
},
bank_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('bank_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'bank_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_screen_search",
    'source' : localStorage.getItem('source')
  });
},

page_not_found_404(){
  Vue.prototype.$mixpanel.track('page_not_found_404', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "page_not_found_404",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'page_not_found_404', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "page_not_found_404",
    'source' : localStorage.getItem('source')
  });
},
sales_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('sales_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
sales_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('sales_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
sales_screen_pagination(page){
  Vue.prototype.$mixpanel.track('sales_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
sales_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('sales_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
sales_stock_item_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('sales_stock_item_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_item_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_item_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_item_screen_search",
    'source' : localStorage.getItem('source')
  });
},
sales_stock_item_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('sales_stock_item_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_item_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_item_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_item_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
sales_stock_item_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('sales_stock_item_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_item_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_item_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_item_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
sales_stock_item_screen_listing(){
  Vue.prototype.$mixpanel.track('sales_stock_item_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_item_screen_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_item_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_item_screen_listing",
    'source' : localStorage.getItem('source')
  });
},
sales_stock_item_screen_pagination(page){
  Vue.prototype.$mixpanel.track('sales_stock_item_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_item_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_item_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_item_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
sales_stock_item_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('sales_stock_item_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_item_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_item_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_item_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
sales_stock_item_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('sales_stock_item_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_item_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_item_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_item_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
sales_month_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('sales_month_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_month_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_month_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_month_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

sales_month_screen_pagination(page){
  Vue.prototype.$mixpanel.track('sales_month_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_month_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_month_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_month_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

sales_month_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('sales_month_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_month_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_month_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_month_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

sales_month_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('sales_month_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_month_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_month_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_month_screen_search",
    'source' : localStorage.getItem('source')
  });
},

sales_month_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('sales_month_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_month_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_month_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_month_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

sales_month_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('sales_month_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_month_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_month_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_month_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},

sales_month_listing(){
  Vue.prototype.$mixpanel.track('sales_month_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_month_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_month_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_month_listing",
    'source' : localStorage.getItem('source')
  });
},
sales_bill_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('sales_bill_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_bill_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_bill_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_bill_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

sales_bill_screen_pagination(page){
  Vue.prototype.$mixpanel.track('sales_bill_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_bill_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_bill_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_bill_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

sales_bill_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('sales_bill_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_bill_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_bill_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_bill_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

sales_bill_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('sales_bill_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_bill_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_bill_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_bill_screen_search",
    'source' : localStorage.getItem('source')
  });
},

sales_bill_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('sales_bill_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_bill_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_bill_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_bill_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

sales_bill_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('sales_bill_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_bill_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_bill_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_bill_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},

sales_bill_listing(){
  Vue.prototype.$mixpanel.track('sales_bill_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_bill_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_bill_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_bill_listing",
    'source' : localStorage.getItem('source')
  });
},
sales_ledger_group_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('sales_ledger_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_ledger_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_ledger_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_ledger_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

sales_ledger_group_screen_pagination(page){
  Vue.prototype.$mixpanel.track('sales_ledger_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_ledger_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_ledger_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_ledger_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

sales_ledger_group_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('sales_ledger_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_ledger_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_ledger_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_ledger_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

sales_ledger_group_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('sales_ledger_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_ledger_group_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_ledger_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_ledger_group_screen_search",
    'source' : localStorage.getItem('source')
  });
},

sales_ledger_group_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('sales_ledger_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_ledger_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_ledger_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_ledger_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

sales_ledger_group_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('sales_ledger_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_ledger_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_ledger_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_ledger_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},

sales_ledger_group_listing(){
  Vue.prototype.$mixpanel.track('sales_ledger_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_ledger_group_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_ledger_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_ledger_group_listing",
    'source' : localStorage.getItem('source')
  });
},
sales_voucher_type_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('sales_voucher_type_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_voucher_type_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_voucher_type_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_voucher_type_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

sales_voucher_type_screen_pagination(page){
  Vue.prototype.$mixpanel.track('sales_voucher_type_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_voucher_type_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_voucher_type_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_voucher_type_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

sales_voucher_type_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('sales_voucher_type_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_voucher_type_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_voucher_type_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_voucher_type_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

sales_voucher_type_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('sales_voucher_type_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_voucher_type_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_voucher_type_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_voucher_type_screen_search",
    'source' : localStorage.getItem('source')
  });
},

sales_voucher_type_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('sales_voucher_type_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_voucher_type_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_voucher_type_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_voucher_type_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

sales_voucher_type_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('sales_voucher_type_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_voucher_type_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_voucher_type_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_voucher_type_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},

sales_voucher_type_listing(){
  Vue.prototype.$mixpanel.track('sales_voucher_type_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_voucher_type_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_voucher_type_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_voucher_type_listing",
    'source' : localStorage.getItem('source')
  });
},
sales_stock_group_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('sales_stock_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

sales_stock_group_screen_pagination(page){
  Vue.prototype.$mixpanel.track('sales_stock_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

sales_stock_group_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('sales_stock_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

sales_stock_group_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('sales_stock_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_group_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_group_screen_search",
    'source' : localStorage.getItem('source')
  });
},

sales_stock_group_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('sales_stock_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

sales_stock_group_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('sales_stock_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},

sales_stock_group_listing(){
  Vue.prototype.$mixpanel.track('sales_stock_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_group_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_group_listing",
    'source' : localStorage.getItem('source')
  });
},
sales_stock_category_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('sales_stock_category_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_category_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_category_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_category_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

sales_stock_category_screen_pagination(page){
  Vue.prototype.$mixpanel.track('sales_stock_category_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_category_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_category_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_category_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

sales_stock_category_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('sales_stock_category_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_category_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_category_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_category_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

sales_stock_category_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('sales_stock_category_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_category_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_category_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_category_screen_search",
    'source' : localStorage.getItem('source')
  });
},

sales_stock_category_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('sales_stock_category_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_category_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_category_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_category_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

sales_stock_category_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('sales_stock_category_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_category_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_category_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_category_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},

sales_stock_category_listing(){
  Vue.prototype.$mixpanel.track('sales_stock_category_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_category_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sales_stock_category_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "sales_stock_category_listing",
    'source' : localStorage.getItem('source')
  });
},
receipt_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('receipt_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

receipt_screen_pagination(page){
  Vue.prototype.$mixpanel.track('receipt_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

receipt_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('receipt_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
receipt_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('receipt_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

receipt_month_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('receipt_month_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_month_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_month_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_month_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

receipt_month_screen_pagination(page){
  Vue.prototype.$mixpanel.track('receipt_month_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_month_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_month_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_month_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

receipt_month_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('receipt_month_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_month_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_month_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_month_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

receipt_month_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('receipt_month_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_month_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_month_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_month_screen_search",
    'source' : localStorage.getItem('source')
  });
},

receipt_month_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('receipt_month_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_month_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_month_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_month_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

receipt_month_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('receipt_month_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_month_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_month_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_month_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},

receipt_month_listing(){
  Vue.prototype.$mixpanel.track('receipt_month_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_month_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_month_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_month_listing",
    'source' : localStorage.getItem('source')
  });
},
receipt_bill_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('receipt_bill_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_bill_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_bill_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_bill_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

receipt_bill_screen_pagination(page){
  Vue.prototype.$mixpanel.track('receipt_bill_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_bill_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_bill_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_bill_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

receipt_bill_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('receipt_bill_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_bill_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_bill_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_bill_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

receipt_bill_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('receipt_bill_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_bill_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_bill_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_bill_screen_search",
    'source' : localStorage.getItem('source')
  });
},

receipt_bill_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('receipt_bill_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_bill_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_bill_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_bill_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

receipt_bill_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('receipt_bill_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_bill_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_bill_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_bill_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},

receipt_bill_listing(){
  Vue.prototype.$mixpanel.track('receipt_bill_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_bill_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_bill_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_bill_listing",
    'source' : localStorage.getItem('source')
  });
},
receipt_ledger_group_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('receipt_ledger_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_ledger_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_ledger_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_ledger_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

receipt_ledger_group_screen_pagination(page){
  Vue.prototype.$mixpanel.track('receipt_ledger_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_ledger_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_ledger_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_ledger_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

receipt_ledger_group_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('receipt_ledger_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_ledger_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_ledger_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_ledger_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

receipt_ledger_group_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('receipt_ledger_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_ledger_group_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_ledger_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_ledger_group_screen_search",
    'source' : localStorage.getItem('source')
  });
},

receipt_ledger_group_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('receipt_ledger_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_ledger_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_ledger_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_ledger_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

receipt_ledger_group_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('receipt_ledger_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_ledger_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_ledger_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_ledger_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},

receipt_ledger_group_listing(){
  Vue.prototype.$mixpanel.track('receipt_ledger_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_ledger_group_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_ledger_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_ledger_group_listing",
    'source' : localStorage.getItem('source')
  });
},
receipt_voucher_type_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('receipt_voucher_type_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_voucher_type_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_voucher_type_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_voucher_type_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

receipt_voucher_type_screen_pagination(page){
  Vue.prototype.$mixpanel.track('receipt_voucher_type_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_voucher_type_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_voucher_type_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_voucher_type_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

receipt_voucher_type_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('receipt_voucher_type_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_voucher_type_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_voucher_type_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_voucher_type_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

receipt_voucher_type_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('receipt_voucher_type_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_voucher_type_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_voucher_type_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_voucher_type_screen_search",
    'source' : localStorage.getItem('source')
  });
},

receipt_voucher_type_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('receipt_voucher_type_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_voucher_type_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_voucher_type_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_voucher_type_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

receipt_voucher_type_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('receipt_voucher_type_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_voucher_type_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_voucher_type_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_voucher_type_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},

receipt_voucher_type_listing(){
  Vue.prototype.$mixpanel.track('receipt_voucher_type_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_voucher_type_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receipt_voucher_type_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receipt_voucher_type_listing",
    'source' : localStorage.getItem('source')
  });
},
receivables_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('receivables_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receivables_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

receivables_screen_pagination(page){
  Vue.prototype.$mixpanel.track('receivables_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receivables_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

receivables_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('receivables_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receivables_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
receivables_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('receivables_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'receivables_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "receivables_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
salesorder_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('salesorder_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

salesorder_screen_pagination(page){
  Vue.prototype.$mixpanel.track('salesorder_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

salesorder_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('salesorder_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

salesorder_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('salesorder_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

salesorder_listing(){
  Vue.prototype.$mixpanel.track('salesorder_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_listing",
    'source' : localStorage.getItem('source')
  });
},
salesorder_stock_item_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('salesorder_stock_item_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_item_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_item_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_item_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_item_screen_pagination(page){
  Vue.prototype.$mixpanel.track('salesorder_stock_item_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_item_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_item_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_item_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_item_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('salesorder_stock_item_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_item_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_item_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_item_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_item_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('salesorder_stock_item_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_item_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_item_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_item_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_item_listing(){
  Vue.prototype.$mixpanel.track('salesorder_stock_item_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_item_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_item_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_item_listing",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_item_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('salesorder_stock_item_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_item_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_item_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_item_screen_search",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_item_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('salesorder_stock_item_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_item_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_item_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_item_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
salesorder_month_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('salesorder_month_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_month_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_month_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_month_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

salesorder_month_screen_pagination(page){
  Vue.prototype.$mixpanel.track('salesorder_month_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_month_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_month_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_month_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

salesorder_month_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('salesorder_month_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_month_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_month_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_month_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

salesorder_month_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('salesorder_month_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_month_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_month_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_month_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

salesorder_month_listing(){
  Vue.prototype.$mixpanel.track('salesorder_month_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_month_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_month_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_month_listing",
    'source' : localStorage.getItem('source')
  });
},

salesorder_month_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('salesorder_month_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_month_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_month_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_month_screen_search",
    'source' : localStorage.getItem('source')
  });
},

salesorder_month_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('salesorder_month_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_month_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_month_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_month_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
salesorder_bill_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('salesorder_bill_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_bill_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_bill_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_bill_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

salesorder_bill_screen_pagination(page){
  Vue.prototype.$mixpanel.track('salesorder_bill_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_bill_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_bill_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_bill_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

salesorder_bill_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('salesorder_bill_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_bill_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_bill_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_bill_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

salesorder_bill_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('salesorder_bill_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_bill_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_bill_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_bill_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

salesorder_bill_listing(){
  Vue.prototype.$mixpanel.track('salesorder_bill_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_bill_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_bill_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_bill_listing",
    'source' : localStorage.getItem('source')
  });
},

salesorder_bill_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('salesorder_bill_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_bill_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_bill_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_bill_screen_search",
    'source' : localStorage.getItem('source')
  });
},

salesorder_bill_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('salesorder_bill_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_bill_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_bill_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_bill_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
salesorder_ledger_group_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('salesorder_ledger_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_ledger_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_ledger_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_ledger_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

salesorder_ledger_group_screen_pagination(page){
  Vue.prototype.$mixpanel.track('salesorder_ledger_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_ledger_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_ledger_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_ledger_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

salesorder_ledger_group_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('salesorder_ledger_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_ledger_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_ledger_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_ledger_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

salesorder_ledger_group_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('salesorder_ledger_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_ledger_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_ledger_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_ledger_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

salesorder_ledger_group_listing(){
  Vue.prototype.$mixpanel.track('salesorder_ledger_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_ledger_group_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_ledger_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_ledger_group_listing",
    'source' : localStorage.getItem('source')
  });
},

salesorder_ledger_group_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('salesorder_ledger_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_ledger_group_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_ledger_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_ledger_group_screen_search",
    'source' : localStorage.getItem('source')
  });
},

salesorder_ledger_group_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('salesorder_ledger_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_ledger_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_ledger_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_ledger_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
salesorder_voucher_type_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('salesorder_voucher_type_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_voucher_type_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_voucher_type_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_voucher_type_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

salesorder_voucher_type_screen_pagination(page){
  Vue.prototype.$mixpanel.track('salesorder_voucher_type_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_voucher_type_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_voucher_type_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_voucher_type_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

salesorder_voucher_type_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('salesorder_voucher_type_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_voucher_type_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_voucher_type_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_voucher_type_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

salesorder_voucher_type_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('salesorder_voucher_type_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_voucher_type_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_voucher_type_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_voucher_type_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

salesorder_voucher_type_listing(){
  Vue.prototype.$mixpanel.track('salesorder_voucher_type_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_voucher_type_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_voucher_type_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_voucher_type_listing",
    'source' : localStorage.getItem('source')
  });
},

salesorder_voucher_type_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('salesorder_voucher_type_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_voucher_type_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_voucher_type_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_voucher_type_screen_search",
    'source' : localStorage.getItem('source')
  });
},

salesorder_voucher_type_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('salesorder_voucher_type_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_voucher_type_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_voucher_type_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_voucher_type_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
salesorder_stock_group_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('salesorder_stock_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_group_screen_pagination(page){
  Vue.prototype.$mixpanel.track('salesorder_stock_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_group_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('salesorder_stock_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_group_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('salesorder_stock_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_group_listing(){
  Vue.prototype.$mixpanel.track('salesorder_stock_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_group_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_group_listing",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_group_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('salesorder_stock_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_group_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_group_screen_search",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_group_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('salesorder_stock_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
salesorder_stock_category_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('salesorder_stock_category_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_category_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_category_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_category_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_category_screen_pagination(page){
   Vue.prototype.$mixpanel.track('salesorder_stock_category_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_category_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_category_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_category_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_category_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('salesorder_stock_category_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_category_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_category_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_category_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_category_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('salesorder_stock_category_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_category_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_category_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_category_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_category_listing(){
  Vue.prototype.$mixpanel.track('salesorder_stock_category_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_category_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_category_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_category_listing",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_category_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('salesorder_stock_category_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_category_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_category_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_category_screen_search",
    'source' : localStorage.getItem('source')
  });
},

salesorder_stock_category_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('salesorder_stock_category_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_category_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'salesorder_stock_category_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "salesorder_stock_category_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
ledger_group_ledger_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('ledger_group_ledger_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "ledger_group_ledger_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'ledger_group_ledger_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "ledger_group_ledger_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

ledger_group_ledger_screen_pagination(page){
  Vue.prototype.$mixpanel.track('ledger_group_ledger_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "ledger_group_ledger_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'ledger_group_ledger_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "ledger_group_ledger_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

ledger_group_ledger_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('ledger_group_ledger_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "ledger_group_ledger_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'ledger_group_ledger_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "ledger_group_ledger_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
ledger_group_ledger_listing(){
  Vue.prototype.$mixpanel.track('ledger_group_ledger_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "ledger_group_ledger_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'ledger_group_ledger_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "ledger_group_ledger_listing",
    'source' : localStorage.getItem('source')
  });
},
stock_group_item_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('stock_group_item_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_item_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_group_item_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_item_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

stock_group_item_screen_pagination(page){
  Vue.prototype.$mixpanel.track('stock_group_item_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_item_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_group_item_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_item_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

stock_group_item_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('stock_group_item_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_item_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_group_item_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_item_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
stock_group_item_listing(){
  Vue.prototype.$mixpanel.track('stock_group_item_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_item_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_group_item_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_group_item_listing",
    'source' : localStorage.getItem('source')
  });
},
stock_category_item_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('stock_category_item_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_category_item_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_category_item_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_category_item_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},

stock_category_item_screen_pagination(page){
  Vue.prototype.$mixpanel.track('stock_category_item_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_category_item_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_category_item_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_category_item_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},

stock_category_item_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('stock_category_item_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_category_item_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_category_item_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_category_item_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
stock_category_item_listing(){
  Vue.prototype.$mixpanel.track('stock_category_item_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_category_item_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'stock_category_item_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "stock_category_item_listing",
    'source' : localStorage.getItem('source')
  });
},
purchase_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('purchase_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
purchase_screen_pagination(page){
  Vue.prototype.$mixpanel.track('purchase_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
purchase_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('purchase_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
purchase_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('purchase_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_item_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('purchase_stock_item_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_item_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_item_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_item_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_item_screen_pagination(page){
  Vue.prototype.$mixpanel.track('purchase_stock_item_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_item_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_item_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_item_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_item_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('purchase_stock_item_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_item_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_item_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_item_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_item_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('purchase_stock_item_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_item_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_item_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_item_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_item_listing(){
  Vue.prototype.$mixpanel.track('purchase_stock_item_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_item_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_item_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_item_listing",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_item_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('purchase_stock_item_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_item_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_item_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_item_screen_search",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_item_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('purchase_stock_item_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_item_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_item_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_item_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
purchase_month_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('purchase_month_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_month_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_month_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_month_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
purchase_month_screen_pagination(page){
  Vue.prototype.$mixpanel.track('purchase_month_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_month_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_month_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_month_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
purchase_month_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('purchase_month_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_month_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_month_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_month_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
purchase_month_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('purchase_month_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_month_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_month_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_month_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
purchase_month_listing(){
  Vue.prototype.$mixpanel.track('purchase_month_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_month_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_month_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_month_listing",
    'source' : localStorage.getItem('source')
  });
},
purchase_month_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('purchase_month_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_month_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_month_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_month_screen_search",
    'source' : localStorage.getItem('source')
  });
},
purchase_month_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('purchase_month_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_month_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_month_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_month_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
purchase_bill_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('purchase_bill_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_bill_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_bill_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_bill_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
purchase_bill_screen_pagination(page){
  Vue.prototype.$mixpanel.track('purchase_bill_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_bill_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_bill_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_bill_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
purchase_bill_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('purchase_bill_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_bill_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_bill_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_bill_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
purchase_bill_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('purchase_bill_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_bill_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_bill_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_bill_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
purchase_bill_listing(){
  Vue.prototype.$mixpanel.track('purchase_bill_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_bill_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_bill_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_bill_listing",
    'source' : localStorage.getItem('source')
  });
},
purchase_bill_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('purchase_bill_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_bill_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_bill_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_bill_screen_search",
    'source' : localStorage.getItem('source')
  });
},
purchase_bill_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('purchase_bill_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_bill_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_bill_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_bill_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
purchase_ledger_group_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('purchase_ledger_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_ledger_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_ledger_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_ledger_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
purchase_ledger_group_screen_pagination(page){
   Vue.prototype.$mixpanel.track('purchase_ledger_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_ledger_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_ledger_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_ledger_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
purchase_ledger_group_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('purchase_ledger_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_ledger_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_ledger_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_ledger_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
purchase_ledger_group_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('purchase_ledger_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_ledger_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_ledger_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_ledger_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
purchase_ledger_group_listing(){
  Vue.prototype.$mixpanel.track('purchase_ledger_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_ledger_group_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_ledger_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_ledger_group_listing",
    'source' : localStorage.getItem('source')
  });
},
purchase_ledger_group_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('purchase_ledger_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_ledger_group_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_ledger_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_ledger_group_screen_search",
    'source' : localStorage.getItem('source')
  });
},
purchase_ledger_group_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('purchase_ledger_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_ledger_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_ledger_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_ledger_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
purchase_voucher_type_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('purchase_voucher_type_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_voucher_type_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_voucher_type_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_voucher_type_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
purchase_voucher_type_screen_pagination(page){
  Vue.prototype.$mixpanel.track('purchase_voucher_type_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_voucher_type_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_voucher_type_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_voucher_type_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
purchase_voucher_type_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('purchase_voucher_type_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_voucher_type_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_voucher_type_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_voucher_type_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
purchase_voucher_type_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('purchase_voucher_type_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_voucher_type_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_voucher_type_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_voucher_type_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
purchase_voucher_type_listing(){
  Vue.prototype.$mixpanel.track('purchase_voucher_type_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_voucher_type_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_voucher_type_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_voucher_type_listing",
    'source' : localStorage.getItem('source')
  });
},
purchase_voucher_type_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('purchase_voucher_type_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_voucher_type_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_voucher_type_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_voucher_type_screen_search",
    'source' : localStorage.getItem('source')
  });
},
purchase_voucher_type_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('purchase_voucher_type_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_voucher_type_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_voucher_type_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_voucher_type_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_group_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('purchase_stock_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_group_screen_pagination(page){
  Vue.prototype.$mixpanel.track('purchase_stock_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_group_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('purchase_stock_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_group_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('purchase_stock_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_group_listing(){
  Vue.prototype.$mixpanel.track('purchase_stock_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_group_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_group_listing",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_group_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('purchase_stock_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_group_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_group_screen_search",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_group_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('purchase_stock_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_category_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('purchase_stock_category_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_category_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_category_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_category_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_category_screen_pagination(page){
  Vue.prototype.$mixpanel.track('purchase_stock_category_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_category_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_category_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_category_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_category_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('purchase_stock_category_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_category_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_category_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_category_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_category_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('purchase_stock_category_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_category_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_category_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_category_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_category_listing(){
  Vue.prototype.$mixpanel.track('purchase_stock_category_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_category_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_category_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_category_listing",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_category_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('purchase_stock_category_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_category_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_category_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_category_screen_search",
    'source' : localStorage.getItem('source')
  });
},
purchase_stock_category_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('purchase_stock_category_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_category_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchase_stock_category_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchase_stock_category_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
payments_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('payments_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payments_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payments_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payments_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
payments_screen_pagination(page){
  Vue.prototype.$mixpanel.track('payments_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payments_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payments_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payments_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
payments_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('payments_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payments_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payments_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payments_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
payments_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('payments_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payments_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payments_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payments_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
payment_month_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('payment_month_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_month_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_month_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_month_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
payment_month_screen_pagination(page){
  Vue.prototype.$mixpanel.track('payment_month_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_month_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_month_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_month_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
payment_month_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('payment_month_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_month_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_month_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_month_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
payment_month_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('payment_month_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_month_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_month_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_month_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
payment_month_listing(){
  Vue.prototype.$mixpanel.track('payment_month_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_month_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_month_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_month_listing",
    'source' : localStorage.getItem('source')
  });
},
payment_month_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('payment_month_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_month_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_month_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_month_screen_search",
    'source' : localStorage.getItem('source')
  });
},
payment_month_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('payment_month_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_month_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_month_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_month_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
payment_bill_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('payment_bill_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_bill_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_bill_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_bill_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
payment_bill_screen_pagination(page){
   Vue.prototype.$mixpanel.track('payment_bill_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_bill_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_bill_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_bill_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
payment_bill_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('payment_bill_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_bill_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_bill_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_bill_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
payment_bill_screen_viewpdf(viewpdf){
   Vue.prototype.$mixpanel.track('payment_bill_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_bill_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_bill_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_bill_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
payment_bill_listing(){
   Vue.prototype.$mixpanel.track('payment_bill_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_bill_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_bill_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_bill_listing",
    'source' : localStorage.getItem('source')
  });
},
payment_bill_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('payment_bill_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_bill_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_bill_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_bill_screen_search",
    'source' : localStorage.getItem('source')
  });
},
payment_bill_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('payment_bill_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_bill_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_bill_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_bill_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
payment_ledger_group_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('payment_ledger_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_ledger_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_ledger_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_ledger_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
payment_ledger_group_screen_pagination(page){
  Vue.prototype.$mixpanel.track('payment_ledger_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_ledger_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_ledger_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_ledger_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
payment_ledger_group_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('payment_ledger_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_ledger_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_ledger_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_ledger_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
payment_ledger_group_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('payment_ledger_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_ledger_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_ledger_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_ledger_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
payment_ledger_group_listing(){
  Vue.prototype.$mixpanel.track('payment_ledger_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_ledger_group_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_ledger_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_ledger_group_listing",
    'source' : localStorage.getItem('source')
  });
},
payment_ledger_group_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('payment_ledger_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_ledger_group_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_ledger_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_ledger_group_screen_search",
    'source' : localStorage.getItem('source')
  });
},
payment_ledger_group_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('payment_ledger_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_ledger_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_ledger_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_ledger_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
payment_voucher_type_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('payment_voucher_type_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_voucher_type_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_voucher_type_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_voucher_type_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
payment_voucher_type_screen_pagination(page){
  Vue.prototype.$mixpanel.track('payment_voucher_type_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_voucher_type_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_voucher_type_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_voucher_type_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
payment_voucher_type_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('payment_voucher_type_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_voucher_type_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_voucher_type_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_voucher_type_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
payment_voucher_type_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('payment_voucher_type_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_voucher_type_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_voucher_type_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_voucher_type_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
payment_voucher_type_listing(){
  Vue.prototype.$mixpanel.track('payment_voucher_type_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_voucher_type_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_voucher_type_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_voucher_type_listing",
    'source' : localStorage.getItem('source')
  });
},
payment_voucher_type_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('payment_voucher_type_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_voucher_type_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_voucher_type_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_voucher_type_screen_search",
    'source' : localStorage.getItem('source')
  });
},
payment_voucher_type_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('payment_voucher_type_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_voucher_type_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payment_voucher_type_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payment_voucher_type_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
payables_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('payables_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payables_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payables_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payables_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
payables_screen_pagination(page){
  Vue.prototype.$mixpanel.track('payables_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payables_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payables_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payables_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
payables_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('payables_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payables_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payables_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payables_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
payables_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('payables_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payables_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'payables_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "payables_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('purchaseorder_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_screen_pagination(page){
   Vue.prototype.$mixpanel.track('purchaseorder_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('purchaseorder_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('purchaseorder_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_item_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('purchaseorder_stock_item_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_item_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_item_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_item_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_item_screen_pagination(page){
  Vue.prototype.$mixpanel.track('purchaseorder_stock_item_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_item_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_item_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_item_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_item_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('purchaseorder_stock_item_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_item_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_item_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_item_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_item_screen_viewpdf(viewpdf){
   Vue.prototype.$mixpanel.track('purchaseorder_stock_item_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_item_screen_viewpdf",
  });
  gtag('event', 'purchaseorder_stock_item_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_item_screen_viewpdf",
  });
},
purchaseorder_stock_item_listing(){
  Vue.prototype.$mixpanel.track('purchaseorder_stock_item_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_item_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_item_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_item_listing",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_item_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('purchaseorder_stock_item_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_item_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_item_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_item_screen_search",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_item_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('purchaseorder_stock_item_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_item_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_item_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_item_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_month_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('purchaseorder_month_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_month_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_month_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_month_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_month_screen_pagination(page){
  Vue.prototype.$mixpanel.track('purchaseorder_month_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_month_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_month_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_month_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_month_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('purchaseorder_month_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_month_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_month_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_month_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_month_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('purchaseorder_month_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_month_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_month_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_month_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_month_listing(){
  Vue.prototype.$mixpanel.track('purchaseorder_month_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_month_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_month_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_month_listing",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_month_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('purchaseorder_month_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_month_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_month_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_month_screen_search",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_month_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('purchaseorder_month_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_month_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_month_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_month_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_bill_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('purchaseorder_bill_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_bill_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_bill_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_bill_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_bill_screen_pagination(page){
  Vue.prototype.$mixpanel.track('purchaseorder_bill_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_bill_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_bill_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_bill_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_bill_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('purchaseorder_bill_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_bill_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_bill_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_bill_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_bill_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('purchaseorder_bill_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_bill_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_bill_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_bill_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_bill_listing(){
  Vue.prototype.$mixpanel.track('purchaseorder_bill_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_bill_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_bill_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_bill_listing",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_bill_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('purchaseorder_bill_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_bill_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_bill_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_bill_screen_search",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_bill_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('purchaseorder_bill_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_bill_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_bill_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_bill_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_ledger_group_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('purchaseorder_ledger_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_ledger_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_ledger_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_ledger_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_ledger_group_screen_pagination(page){
  Vue.prototype.$mixpanel.track('purchaseorder_ledger_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_ledger_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_ledger_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_ledger_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_ledger_group_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('purchaseorder_ledger_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_ledger_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_ledger_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_ledger_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_ledger_group_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('purchaseorder_ledger_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_ledger_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_ledger_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_ledger_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_ledger_group_listing(){
  Vue.prototype.$mixpanel.track('purchaseorder_ledger_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_ledger_group_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_ledger_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_ledger_group_listing",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_ledger_group_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('purchaseorder_ledger_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_ledger_group_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_ledger_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_ledger_group_screen_search",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_ledger_group_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('purchaseorder_ledger_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_ledger_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_ledger_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_ledger_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_voucher_type_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('purchaseorder_voucher_type_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_voucher_type_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_voucher_type_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_voucher_type_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_voucher_type_screen_pagination(page){
  Vue.prototype.$mixpanel.track('purchaseorder_voucher_type_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_voucher_type_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_voucher_type_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_voucher_type_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_voucher_type_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('purchaseorder_voucher_type_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_voucher_type_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_voucher_type_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_voucher_type_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_voucher_type_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('purchaseorder_voucher_type_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_voucher_type_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_voucher_type_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_voucher_type_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_voucher_type_listing(){
  Vue.prototype.$mixpanel.track('purchaseorder_voucher_type_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_voucher_type_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_voucher_type_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_voucher_type_listing",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_voucher_type_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('purchaseorder_voucher_type_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_voucher_type_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_voucher_type_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_voucher_type_screen_search",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_voucher_type_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('purchaseorder_voucher_type_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_voucher_type_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_voucher_type_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_voucher_type_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_group_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('purchaseorder_stock_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_group_screen_pagination(page){
  Vue.prototype.$mixpanel.track('purchaseorder_stock_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_group_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('purchaseorder_stock_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_group_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_group_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_group_screen_viewpdf(viewpdf){
   Vue.prototype.$mixpanel.track('purchaseorder_stock_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_group_listing(){
   Vue.prototype.$mixpanel.track('purchaseorder_stock_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_group_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_group_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_group_listing",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_group_screen_search(searchBy){
   Vue.prototype.$mixpanel.track('purchaseorder_stock_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_group_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_group_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_group_screen_search",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_group_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('purchaseorder_stock_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_group_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_group_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_category_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('purchaseorder_stock_category_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_category_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_category_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_category_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_category_screen_pagination(page){
   Vue.prototype.$mixpanel.track('purchaseorder_stock_category_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_category_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_category_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_category_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_category_screen_date_filter(dateRange){
   Vue.prototype.$mixpanel.track('purchaseorder_stock_category_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_category_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_category_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_category_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_category_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('purchaseorder_stock_category_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_category_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_category_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_category_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_category_listing(){
  Vue.prototype.$mixpanel.track('purchaseorder_stock_category_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_category_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_category_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_category_listing",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_category_screen_search(searchBy){
   Vue.prototype.$mixpanel.track('purchaseorder_stock_category_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_category_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_category_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_category_screen_search",
    'source' : localStorage.getItem('source')
  });
},
purchaseorder_stock_category_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('purchaseorder_stock_category_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_category_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'purchaseorder_stock_category_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "purchaseorder_stock_category_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
cash_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('cash_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'cash_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
cash_screen_pagination(page){
  Vue.prototype.$mixpanel.track('cash_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'cash_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
cash_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('cash_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'cash_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
cash_voucher_list_screen_Rows_Per_Page(rowPage){
   Vue.prototype.$mixpanel.track('cash_voucher_list_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_voucher_list_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'cash_voucher_list_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_voucher_list_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
cash_voucher_list_screen_pagination(page){
  Vue.prototype.$mixpanel.track('cash_voucher_list_screen_pagination', {
     'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_voucher_list_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'cash_voucher_list_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_voucher_list_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
cash_voucher_list_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('cash_voucher_list_screen_date_filter', {
     'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_voucher_list_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'cash_voucher_list_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_voucher_list_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
cash_voucher_list_listing(){
  Vue.prototype.$mixpanel.track('cash_voucher_list_listing', {
     'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_voucher_list_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'cash_voucher_list_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "cash_voucher_list_listing",
    'source' : localStorage.getItem('source')
  });
},
bank_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('bank_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'bank_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
bank_screen_pagination(page){
   Vue.prototype.$mixpanel.track('bank_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'bank_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
bank_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('bank_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'bank_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
bank_voucher_list_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('bank_voucher_list_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_voucher_list_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'bank_voucher_list_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_voucher_list_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
bank_voucher_list_screen_pagination(page){
  Vue.prototype.$mixpanel.track('bank_voucher_list_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_voucher_list_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'bank_voucher_list_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_voucher_list_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
bank_voucher_list_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('bank_voucher_list_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_voucher_list_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'bank_voucher_list_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_voucher_list_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
bank_voucher_list_listing(){
  Vue.prototype.$mixpanel.track('bank_voucher_list_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_voucher_list_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'bank_voucher_list_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "bank_voucher_list_listing",
    'source' : localStorage.getItem('source')
  });
},
parties_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('parties_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
parties_screen_pagination(page){
   Vue.prototype.$mixpanel.track('parties_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
parties_summary_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('parties_summary_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_summary_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_summary_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_summary_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
parties_summary_screen_pagination(page){
  Vue.prototype.$mixpanel.track('parties_summary_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_summary_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_summary_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_summary_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
parties_summary_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('parties_summary_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_summary_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_summary_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_summary_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
parties_summary_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('parties_summary_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_summary_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_summary_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_summary_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
parties_summary_screen_filter(filterBy){
  Vue.prototype.$mixpanel.track('parties_summary_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_summary_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_summary_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_summary_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
parties_sold_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('parties_sold_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_sold_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_sold_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_sold_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
parties_sold_screen_pagination(page){
  Vue.prototype.$mixpanel.track('parties_sold_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_sold_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_sold_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_sold_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
parties_sold_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('parties_sold_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_sold_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_sold_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_sold_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
parties_sold_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('parties_sold_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_sold_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_sold_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_sold_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
parties_purchased_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('parties_purchased_screen_Rows_Per_Page', {
     'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_purchased_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_purchased_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_purchased_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
parties_purchased_screen_pagination(page){
  Vue.prototype.$mixpanel.track('parties_purchased_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_purchased_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_purchased_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_purchased_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
parties_purchased_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('parties_purchased_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_purchased_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_purchased_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_purchased_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
parties_purchased_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('parties_purchased_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_purchased_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_purchased_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_purchased_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
vouchers_listing_screen_Rows_Per_Page(rowPage){
   Vue.prototype.$mixpanel.track('vouchers_listing_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "vouchers_listing_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'vouchers_listing_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "vouchers_listing_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
vouchers_listing_screen_pagination(page){
  Vue.prototype.$mixpanel.track('vouchers_listing_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "vouchers_listing_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'vouchers_listing_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "vouchers_listing_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
vouchers_listing_screen_date_filter(dateRange){
   Vue.prototype.$mixpanel.track('vouchers_listing_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "vouchers_listing_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'vouchers_listing_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "vouchers_listing_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
parties_details_listing(){
  Vue.prototype.$mixpanel.track('parties_details_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_details_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_details_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_details_listing",
    'source' : localStorage.getItem('source')
  });
},
parties_details_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('parties_details_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_details_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_details_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "parties_details_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
items_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('items_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
items_screen_pagination(page){
  Vue.prototype.$mixpanel.track('items_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
items_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('items_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
items_screen_filter(filterBy){
  Vue.prototype.$mixpanel.track('items_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
items_group_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('items_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_group_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_group_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
items_group_screen_pagination(page){
  Vue.prototype.$mixpanel.track('items_group_screen_pagination', {
     'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_group_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_group_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
items_group_screen_viewpdf(viewpdf){
   Vue.prototype.$mixpanel.track('items_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_group_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_group_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
items_summary_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('items_summary_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_summary_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_summary_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_summary_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
items_summary_screen_pagination(page){
  Vue.prototype.$mixpanel.track('items_summary_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_summary_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_summary_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_summary_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
items_summary_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('items_summary_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_summary_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_summary_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_summary_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
items_summary_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('items_summary_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_summary_screen_viewpdf",
  });
  gtag('event', 'items_summary_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_summary_screen_viewpdf",
  });
},
items_customers_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('items_customers_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_customers_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_customers_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_customers_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
items_customers_screen_pagination(page){
   Vue.prototype.$mixpanel.track('items_customers_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_customers_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_customers_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_customers_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
items_customers_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('items_customers_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_customers_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_customers_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_customers_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
items_supplers_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('items_supplers_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_supplers_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_supplers_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_supplers_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
items_supplers_screen_pagination(page){
   Vue.prototype.$mixpanel.track('items_supplers_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_supplers_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_supplers_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_supplers_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
items_supplers_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('items_supplers_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_supplers_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_supplers_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "items_supplers_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
item_group_listing_screen_Rows_Per_Page(rowPage){
   Vue.prototype.$mixpanel.track('item_group_listing_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "item_group_listing_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'item_group_listing_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "item_group_listing_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
item_group_listing_screen_pagination(page){
  Vue.prototype.$mixpanel.track('item_group_listing_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "item_group_listing_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'item_group_listing_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "item_group_listing_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
item_group_listing_screen(){
  Vue.prototype.$mixpanel.track('item_group_listing_screen', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "item_group_listing_screen",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'item_group_listing_screen', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "item_group_listing_screen",
    'source' : localStorage.getItem('source')
  });
},
item_category_listing_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('item_category_listing_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "item_category_listing_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'item_category_listing_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "item_category_listing_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
item_category_listing_screen_pagination(page){
  Vue.prototype.$mixpanel.track('item_category_listing_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "item_category_listing_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'item_category_listing_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "item_category_listing_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
item_category_listing_screen(){
  Vue.prototype.$mixpanel.track('item_category_listing_screen', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "item_category_listing_screen",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'item_category_listing_screen', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "item_category_listing_screen",
    'source' : localStorage.getItem('source')

  });
},
day_book_reports_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('day_book_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "day_book_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'day_book_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "day_book_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
day_book_reports_screen_pagination(page){
  Vue.prototype.$mixpanel.track('day_book_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "day_book_reports_screen_pagination",
  });
  gtag('event', 'day_book_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "day_book_reports_screen_pagination",
  });
},
day_book_reports_screen_date_filter(dateRange){
   Vue.prototype.$mixpanel.track('day_book_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "day_book_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'day_book_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "day_book_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
day_book_reports_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('day_book_reports_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "day_book_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'day_book_reports_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "day_book_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
expenses_reports_screen_Rows_Per_Page(rowPage){
   Vue.prototype.$mixpanel.track('expenses_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'expenses_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
    
  });
},
expenses_reports_screen_pagination(page){
  Vue.prototype.$mixpanel.track('expenses_reports_screen_pagination', {
     'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'expenses_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
expenses_reports_screen_date_filter(dateRange){
   Vue.prototype.$mixpanel.track('expenses_reports_screen_date_filter', {
     'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'expenses_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
expenses_list_reports_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('expenses_list_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'expenses_list_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
expenses_list_reports_screen_pagination(page){
   Vue.prototype.$mixpanel.track('expenses_list_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'expenses_list_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
expenses_list_reports_screen_date_filter(dateRange){
   Vue.prototype.$mixpanel.track('expenses_list_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'expenses_list_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
expenses_list_reports_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('expenses_list_reports_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'expenses_list_reports_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "expenses_list_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
inactive_customers_reports_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('inactive_customers_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_customers_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'inactive_customers_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_customers_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
inactive_customers_reports_screen_pagination(page){
   Vue.prototype.$mixpanel.track('inactive_customers_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_customers_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'inactive_customers_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_customers_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
inactive_customers_reports_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('inactive_customers_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_customers_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'inactive_customers_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_customers_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
inactive_customers_reports_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('inactive_customers_reports_screen_viewpdf', {
   'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_customers_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'inactive_customers_reports_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_customers_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
inactive_items_reports_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('inactive_items_reports_screen_Rows_Per_Page', {
   'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_items_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'inactive_items_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_items_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
inactive_items_reports_screen_pagination(page){
   Vue.prototype.$mixpanel.track('inactive_items_reports_screen_pagination', {
   'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_items_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'inactive_items_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_items_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
inactive_items_reports_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('inactive_items_reports_screen_date_filter', {
   'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_items_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'inactive_items_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_items_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
inactive_items_reports_screen_viewpdf(viewpdf){
   Vue.prototype.$mixpanel.track('inactive_items_reports_screen_viewpdf', {
   'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_items_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'inactive_items_reports_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "inactive_items_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
top_reports_screen_Rows_Per_Page(rowPage){
   Vue.prototype.$mixpanel.track('top_reports_screen_Rows_Per_Page', {
   'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'top_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
top_reports_screen_pagination(page){
  Vue.prototype.$mixpanel.track('top_reports_screen_pagination', {
   'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'top_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
top_reports_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('top_reports_screen_date_filter', {
   'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'top_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
top_reports_screen_viewpdf(viewpdf){
   Vue.prototype.$mixpanel.track('top_reports_screen_viewpdf', {
   'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'top_reports_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
top_reports_listing(){
  Vue.prototype.$mixpanel.track('top_reports_listing', {
   'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_listing",
  });
  gtag('event', 'top_reports_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_listing",
  });
},
top_reports_screen_sorting(sortBy, orderBy){
  Vue.prototype.$mixpanel.track('top_reports_screen_sorting', {
   'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'top_reports_screen_sorting', {
    'sortBy': sortBy,
    'orderBy': orderBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_screen_sorting",
    'source' : localStorage.getItem('source')
  });
},
top_reports_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('top_reports_screen_search', {
   'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'top_reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_screen_search",
    'source' : localStorage.getItem('source')
  });
},
top_reports_screen_filter(filterBy){
  Vue.prototype.$mixpanel.track('top_reports_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'top_reports_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "top_reports_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
balancesheet_reports_screen_listing(){
   Vue.prototype.$mixpanel.track('balancesheet_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "balancesheet_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'balancesheet_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "balancesheet_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
},
balancesheet_reports_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('balancesheet_reports_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "balancesheet_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'balancesheet_reports_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "balancesheet_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
profit_loss_reports_screen_listing(){
  Vue.prototype.$mixpanel.track('profit_loss_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "profit_loss_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'profit_loss_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "profit_loss_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
},
profit_loss_reports_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('profit_loss_reports_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "profit_loss_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'profit_loss_reports_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "profit_loss_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
trial_balance_reports_screen_listing(){
  Vue.prototype.$mixpanel.track('trial_balance_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "trial_balance_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'trial_balance_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "trial_balance_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
},
trial_balance_reports_screen_viewpdf(viewpdf){
   Vue.prototype.$mixpanel.track('trial_balance_reports_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "trial_balance_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'trial_balance_reports_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "trial_balance_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
closingstock_reports_screen_Rows_Per_Page(rowPage){
   Vue.prototype.$mixpanel.track('closingstock_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "closingstock_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'closingstock_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "closingstock_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
closingstock_reports_screen_pagination(page){
   Vue.prototype.$mixpanel.track('closingstock_reports_screen_pagination', {
   'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "closingstock_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'closingstock_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "closingstock_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
closingstock_reports_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('closingstock_reports_screen_date_filter', {
     'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "closingstock_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'closingstock_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "closingstock_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
closingstock_reports_screen_listing(){
  Vue.prototype.$mixpanel.track('closingstock_reports_screen_listing', {
     'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "closingstock_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'closingstock_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "closingstock_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
},
reportdetails_reports_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('reportdetails_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "reportdetails_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'reportdetails_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "reportdetails_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
reportdetails_reports_screen_pagination(page){
   Vue.prototype.$mixpanel.track('reportdetails_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "reportdetails_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'reportdetails_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "reportdetails_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
reportdetails_reports_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('reportdetails_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "reportdetails_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'reportdetails_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "reportdetails_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
reportdetails_reports_screen_listing(){
  Vue.prototype.$mixpanel.track('reportdetails_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "reportdetails_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'reportdetails_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "reportdetails_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
},
openingstock_reports_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('openingstock_reports_screen_Rows_Per_Page', {
   'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "openingstock_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'openingstock_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "openingstock_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
openingstock_reports_screen_pagination(page){
  Vue.prototype.$mixpanel.track('openingstock_reports_screen_pagination', {
     'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "openingstock_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'openingstock_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "openingstock_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
openingstock_reports_screen_listing(){
  Vue.prototype.$mixpanel.track('openingstock_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "openingstock_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'openingstock_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "openingstock_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
},
my_ledgers_reports_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('my_ledgers_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_ledgers_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_ledgers_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_ledgers_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
my_ledgers_reports_screen_pagination(page){
   Vue.prototype.$mixpanel.track('my_ledgers_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_ledgers_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_ledgers_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_ledgers_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
my_ledgers_reports_screen_date_filter(dateRange){
   Vue.prototype.$mixpanel.track('my_ledgers_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_ledgers_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_ledgers_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_ledgers_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
my_ledgers_reports_screen_listing(){
   Vue.prototype.$mixpanel.track('my_ledgers_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_ledgers_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_ledgers_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_ledgers_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
},
my_ledgers_reports_screen_filter(filterBy){
   Vue.prototype.$mixpanel.track('my_ledgers_reports_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_ledgers_reports_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_ledgers_reports_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_ledgers_reports_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
my_stock_items_reports_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('my_stock_items_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_stock_items_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_stock_items_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_stock_items_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
my_stock_items_reports_screen_pagination(page){
  Vue.prototype.$mixpanel.track('my_stock_items_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_stock_items_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_stock_items_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_stock_items_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
my_stock_items_reports_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('my_stock_items_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_stock_items_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_stock_items_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_stock_items_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
my_stock_items_reports_screen_listing(){
  Vue.prototype.$mixpanel.track('my_stock_items_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_stock_items_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_stock_items_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_stock_items_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
},
my_stock_items_reports_screen_filter(filterBy){
  Vue.prototype.$mixpanel.track('my_stock_items_reports_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_stock_items_reports_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_stock_items_reports_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_stock_items_reports_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
my_vouchers_reports_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('my_vouchers_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_vouchers_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_vouchers_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_vouchers_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
my_vouchers_reports_screen_pagination(page){
  Vue.prototype.$mixpanel.track('my_vouchers_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_vouchers_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_vouchers_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_vouchers_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
my_vouchers_reports_screen_date_filter(dateRange){
   Vue.prototype.$mixpanel.track('my_vouchers_reports_screen_date_filter', {
     'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_vouchers_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_vouchers_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_vouchers_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
my_vouchers_reports_screen_listing(){
  Vue.prototype.$mixpanel.track('my_vouchers_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_vouchers_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_vouchers_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_vouchers_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
},
my_vouchers_reports_screen_filter(filterBy){
   Vue.prototype.$mixpanel.track('my_vouchers_reports_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_vouchers_reports_screen_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_vouchers_reports_screen_filter', {
    'filterBy': filterBy,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_vouchers_reports_screen_filter",
    'source' : localStorage.getItem('source')
  });
},
my_quotations_reports_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('my_quotations_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_quotations_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_quotations_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_quotations_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
my_quotations_reports_screen_pagination(page){
  Vue.prototype.$mixpanel.track('my_quotations_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_quotations_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_quotations_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_quotations_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
my_quotations_reports_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('my_quotations_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_quotations_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_quotations_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_quotations_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
my_quotations_reports_screen_listing(){
  Vue.prototype.$mixpanel.track('my_quotations_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_quotations_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'my_quotations_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "my_quotations_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
},
tracking_reports_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('tracking_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tracking_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
tracking_reports_screen_pagination(page){
   Vue.prototype.$mixpanel.track('tracking_reports_screen_pagination', {
     'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tracking_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
tracking_reports_screen_listing(){
  Vue.prototype.$mixpanel.track('tracking_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tracking_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
},
tracking_details_reports_screen_Rows_Per_Page(rowPage){
  Vue.prototype.$mixpanel.track('tracking_details_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_details_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tracking_details_reports_screen_Rows_Per_Page', {
    'rowPage': rowPage,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_details_reports_screen_Rows_Per_Page",
    'source' : localStorage.getItem('source')
  });
},
tracking_details_reports_screen_pagination(page){
  Vue.prototype.$mixpanel.track('tracking_details_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_details_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tracking_details_reports_screen_pagination', {
    'page': page,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_details_reports_screen_pagination",
    'source' : localStorage.getItem('source')
  });
},
tracking_details_reports_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('tracking_details_reports_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_details_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tracking_details_reports_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
     
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
     
    'className': "tracking_details_reports_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
tracking_details_reports_screen_date_filter(dateRange){
  Vue.prototype.$mixpanel.track('tracking_details_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tracking_details_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tracking_details_reports_screen_date_filter', {
    'dateRange': dateRange,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tracking_details_reports_screen_date_filter",
    'source' : localStorage.getItem('source')
  });
},
tracking_details_reports_screen_listing(){
  Vue.prototype.$mixpanel.track('tracking_details_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tracking_details_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tracking_details_reports_screen_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tracking_details_reports_screen_listing",
    'source' : localStorage.getItem('source')
  });
},
items_screen_addnew(addnew){
   Vue.prototype.$mixpanel.track('items_screen_addnew', {
    'addnew': addnew,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_screen_addnew",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_screen_addnew', {
    'addnew': addnew,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_screen_addnew",
    'source' : localStorage.getItem('source')
  });
},
items_group_screen_addnew(addnew){
  Vue.prototype.$mixpanel.track('items_group_screen_addnew', {
    'addnew': addnew,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_group_screen_addnew",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_group_screen_addnew', {
    'addnew': addnew,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_group_screen_addnew",
    'source' : localStorage.getItem('source')
  });
},
items_category_screen_addnew(addnew){
  Vue.prototype.$mixpanel.track('items_category_screen_addnew', {
    'addnew': addnew,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_category_screen_addnew",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_category_screen_addnew', {
    'addnew': addnew,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_category_screen_addnew",
    'source' : localStorage.getItem('source')
  });
},
items_category_screen_viewpdf(viewpdf){
  Vue.prototype.$mixpanel.track('items_category_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_category_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'items_category_screen_viewpdf', {
    'viewpdf': viewpdf,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "items_category_screen_viewpdf",
    'source' : localStorage.getItem('source')
  });
},
parties_screen_addnew(addnew){
  Vue.prototype.$mixpanel.track('parties_screen_addnew', {
    'addnew': addnew,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_screen_addnew",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'parties_screen_addnew', {
    'addnew': addnew,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_screen_addnew",
    'source' : localStorage.getItem('source')
  });
},
windows_file_download(filedownload){
  Vue.prototype.$mixpanel.track('windows_file_download', {
    'filedownload': filedownload,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "windows_file_download",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'windows_file_download', {
    'filedownload': filedownload,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "windows_file_download",
    'source' : localStorage.getItem('source')
  });
},
windows_file_download_popup(filedownloadpopup){
   Vue.prototype.$mixpanel.track('windows_file_download_popup', {
    'filedownloadpopup': filedownloadpopup,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "windows_file_download_popup",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'windows_file_download_popup', {
    'filedownloadpopup': filedownloadpopup,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "windows_file_download_popup",
    'source' : localStorage.getItem('source')
  });
},
watch_video(watchvideo){
   Vue.prototype.$mixpanel.track('watch_video', {
    'watchvideo': watchvideo,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "watch_video",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'watch_video', {
    'watchvideo': watchvideo,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "watch_video",
    'source' : localStorage.getItem('source')
  });
},
login_proceed_button(mobileNumber){
   Vue.prototype.$mixpanel.track('login_proceed_button', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "login_proceed_button",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'login_proceed_button', {
     'mobileNumber': mobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "login_proceed_button",
    'source' : localStorage.getItem('source')
  });
},
login_page_proceed_button(loginpagemobileNumber){
  Vue.prototype.$mixpanel.track('login_page_proceed_button', {
    'mobile_Number': loginpagemobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "login_page_proceed_button",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'login_page_proceed_button', {
     'mobile_Number': loginpagemobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "login_page_proceed_button",
    'source' : localStorage.getItem('source')
  });
},

website_features(features){
  Vue.prototype.$mixpanel.track('website_features', {
    'features': features,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_features",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_features', {
    'features': features,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_features",
    'source' : localStorage.getItem('source')
  });
},
header_support_number(support_number){
  Vue.prototype.$mixpanel.track('header_support_number', {
    'support_number': support_number,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "header_support_number",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'header_support_number', {
    'support_number': support_number,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "header_support_number",
    'source' : localStorage.getItem('source')
  });
},
header_support_number_mobile(support_number_mobile){
   Vue.prototype.$mixpanel.track('header_support_number_mobile', {
    'support_number_mobile': support_number_mobile,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "header_support_number_mobile",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'header_support_number_mobile', {
    'support_number_mobile': support_number_mobile,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "header_support_number_mobile",
    'source' : localStorage.getItem('source')
  });
},
website_pricing(pricing){
  Vue.prototype.$mixpanel.track('website_pricing', {
    'pricing': pricing,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_pricing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_pricing', {
    'pricing': pricing,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_pricing",
    'source' : localStorage.getItem('source')
  });
},

website_testimonial(testimonial){
  Vue.prototype.$mixpanel.track('website_testimonial', {
    'testimonial': testimonial,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_testimonial",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_testimonial', {
    'testimonial': testimonial,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_testimonial",
    'source' : localStorage.getItem('source')
  });
},
website_faqs(faqs){
  Vue.prototype.$mixpanel.track('website_faqs', {
    'faqs': faqs,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_faqs",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_faqs', {
    'faqs': faqs,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_faqs",
    'source' : localStorage.getItem('source')
  });
},
website_whatsapp_button(whatsapp){
  Vue.prototype.$mixpanel.track('website_whatsapp_button', {
    'whatsapp': whatsapp,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_whatsapp_button",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_whatsapp_button', {
    'whatsapp': whatsapp,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_whatsapp_button",
    'source' : localStorage.getItem('source')
  });
},
website_whatsapp_button_mobile(whatsapp){
  Vue.prototype.$mixpanel.track('website_whatsapp_button_mobile', {
    'whatsapp': whatsapp,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_whatsapp_button_mobile",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_whatsapp_button_mobile', {
    'whatsapp': whatsapp,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_whatsapp_button_mobile",
    'source' : localStorage.getItem('source')
  });
},
website_privacy_policy(privacy_policy){
  Vue.prototype.$mixpanel.track('website_privacy_policy', {
     'privacy_policy': privacy_policy,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_privacy_policy",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_privacy_policy', {
    'privacy_policy': privacy_policy,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_privacy_policy",
    'source' : localStorage.getItem('source')
  });
},
website_refund_policy(refund_policy){
  Vue.prototype.$mixpanel.track('website_refund_policy', {
    'refund_policy': refund_policy,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_refund_policy",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_refund_policy', {
    'refund_policy': refund_policy,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_refund_policy",
    'source' : localStorage.getItem('source')
  });
},
website_terms_conditions(terms_conditions){
  Vue.prototype.$mixpanel.track('website_terms_conditions', {
    'terms_conditions': terms_conditions,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_terms_conditions",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_terms_conditions', {
    'terms_conditions': terms_conditions,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_terms_conditions",
    'source' : localStorage.getItem('source')
  });
},
website_refund_policy(refund_policy){
  Vue.prototype.$mixpanel.track('website_refund_policy', {
    'refund_policy': refund_policy,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_refund_policy",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_refund_policy', {
    'refund_policy': refund_policy,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_refund_policy",
    'source' : localStorage.getItem('source')
  });
},
website_Playstore_event(Playstore_event){
  Vue.prototype.$mixpanel.track('website_Playstore_event', {
    'Playstore_event': Playstore_event,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_Playstore_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_Playstore_event', {
    'Playstore_event': Playstore_event,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_Playstore_event",
    'source' : localStorage.getItem('source')
  });
},
website_Appstore_event(Appstore_event){
  Vue.prototype.$mixpanel.track('website_Appstore_event', {
    'Appstore_event': Appstore_event,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_Appstore_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_Appstore_event', {
    'Appstore_event': Appstore_event,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_Appstore_event",
    'source' : localStorage.getItem('source')
  });
},
website_ready_to_get_started(ready_to_get_started){
   Vue.prototype.$mixpanel.track('website_ready_to_get_started', {
    'ready_to_get_started': ready_to_get_started,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_ready_to_get_started",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_ready_to_get_started', {
    'ready_to_get_started': ready_to_get_started,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_ready_to_get_started",
    'source' : localStorage.getItem('source')
  });
},
website_partner_login(partner_login){
  Vue.prototype.$mixpanel.track('website_partner_login', {
    'partner_login': partner_login,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_partner_login",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_partner_login', {
    'partner_login': partner_login,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_partner_login",
    'source' : localStorage.getItem('source')
  });
},
website_contact_us(contact_us){
  Vue.prototype.$mixpanel.track('website_contact_us', {
    'contact_us': contact_us,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_contact_us",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_contact_us', {
    'contact_us': contact_us,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_contact_us",
    'source' : localStorage.getItem('source')
  });
},
website_our_story(our_story){
  Vue.prototype.$mixpanel.track('website_our_story', {
    'our_story': our_story,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_our_story",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_our_story', {
    'our_story': our_story,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_our_story",
    'source' : localStorage.getItem('source')
  });
},
website_web_login(web_login){
  Vue.prototype.$mixpanel.track('website_web_login', {
    'web_login': web_login,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_web_login",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_web_login', {
    'web_login': web_login,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_web_login",
    'source' : localStorage.getItem('source')
  });
},
LoginPageScreen_Listing(){
  Vue.prototype.$mixpanel.track('LoginPageScreen_Listing', {
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "LoginPageScreen_Listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'LoginPageScreen_Listing', {
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "LoginPageScreen_Listing",
    'source' : localStorage.getItem('source')
  });
},
website_documentation(documentation){
  Vue.prototype.$mixpanel.track('website_documentation', {
    'documentation': documentation,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_documentation",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_documentation', {
    'documentation': documentation,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_documentation",
    'source' : localStorage.getItem('source')
  });
},
website_check_price_list(price_list){
  Vue.prototype.$mixpanel.track('website_check_price_list', {
    'price_list': price_list,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_check_price_list",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_check_price_list', {
    'price_list': price_list,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_check_price_list",
    'source' : localStorage.getItem('source')
  });
},
website_basic_access_getstarted_free(basic_access){
  Vue.prototype.$mixpanel.track('website_basic_access_getstarted_free', {
    'basic_access': basic_access,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_basic_access_getstarted_free",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_basic_access_getstarted_free', {
    'basic_access': basic_access,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_basic_access_getstarted_free",
    'source' : localStorage.getItem('source')
  });
},
website_growth_plan(one_year){
  Vue.prototype.$mixpanel.track('website_growth_plan', {
    'one_year': one_year,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_growth_plan",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_growth_plan', {
    'one_year': one_year,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_growth_plan",
    'source' : localStorage.getItem('source')
  });
},
// website_unlimited_access_getstarted_2year(two_year){
// Vue.prototype.$mixpanel.track('website_unlimited_access_getstarted_2year', {
//     'two_year': two_year,
//     'customerId': '',
//     'name': '',
//     'companyId': '',
//     'customerStatus': '',
//     'className': "website_unlimited_access_getstarted_2year",
//     'source' : localStorage.getItem('source')
  // });
//   gtag('event', 'website_unlimited_access_getstarted_2year', {
//     'two_year': two_year,
//     'customerId': '',
//     'name': '',
//     'companyId': '',
//     'customerStatus': '',
//     'className': "website_unlimited_access_getstarted_2year",
//     'source' : localStorage.getItem('source')
//   });
// },
website_advanced_plan(three_year){
  Vue.prototype.$mixpanel.track('website_advanced_plan', {
    'three_year': three_year,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_advanced_plan",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'website_advanced_plan', {
    'three_year': three_year,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "website_advanced_plan",
    'source' : localStorage.getItem('source')
  });
},
mobile_website_download_button(download_now){
  Vue.prototype.$mixpanel.track('mobile_website_download_button', {
    'download_now': download_now,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "mobile_website_download_button",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'mobile_website_download_button', {
    'download_now': download_now,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "mobile_website_download_button",
    'source' : localStorage.getItem('source')
  });
},
mobile_web_inner_download_button(download_now_inner){
  Vue.prototype.$mixpanel.track('mobile_web_inner_download_button', {
    'download_now_inner': download_now_inner,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "mobile_web_inner_download_button",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'mobile_web_inner_download_button', {
    'download_now_inner': download_now_inner,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "mobile_web_inner_download_button",
    'source' : localStorage.getItem('source')
  });
},

getstarted_mobile_website(getmobileNumber){
   Vue.prototype.$mixpanel.track('getstarted_mobile_website', {
    'getmobileNumber': getmobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "getstarted_mobile_website",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'getstarted_mobile_website', {
    'getmobileNumber': getmobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "getstarted_mobile_website",
    'source' : localStorage.getItem('source')
  });
},

Website_eWaybill(getewaybillmobileNumber){
  Vue.prototype.$mixpanel.track('Website_eWaybill', {
    'getewaybillmobileNumber': getewaybillmobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_eWaybill",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Website_eWaybill', {
    'getewaybillmobileNumber': getewaybillmobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_eWaybill",
    'source' : localStorage.getItem('source')
  });
},
Website_Inactivecustomer(getinactivecustomersmobileNumber){
  Vue.prototype.$mixpanel.track('Website_Inactivecustomer', {
    'getinactivecustomersmobileNumber': getinactivecustomersmobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_Inactivecustomer",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Website_Inactivecustomer', {
    'getinactivecustomersmobileNumber': getinactivecustomersmobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_Inactivecustomer",
    'source' : localStorage.getItem('source')
  });
},
Website_paymentreminder(getpaymentremindermobileNumber){
  Vue.prototype.$mixpanel.track('Website_paymentreminder', {
    'getpaymentremindermobileNumber': getpaymentremindermobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_paymentreminder",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Website_paymentreminder', {
    'getpaymentremindermobileNumber': getpaymentremindermobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_paymentreminder",
    'source' : localStorage.getItem('source')
  });
},
Website_tallybackup(gettallybackupmobileNumber){
  Vue.prototype.$mixpanel.track('Website_tallybackup', {
    'gettallybackupmobileNumber': gettallybackupmobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_tallybackup",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Website_tallybackup', {
    'gettallybackupmobileNumber': gettallybackupmobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_tallybackup",
    'source' : localStorage.getItem('source')
  });
},
Website_createbill(getgstbillsmobileNumber){
  Vue.prototype.$mixpanel.track('Website_createbill', {
    'getgstbillsmobileNumber': getgstbillsmobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_createbill",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Website_createbill', {
    'getgstbillsmobileNumber': getgstbillsmobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_createbill",
    'source' : localStorage.getItem('source')
  });
},
Website_reports(getbalancesheetmobileNumber){
  Vue.prototype.$mixpanel.track('Website_reports', {
    'getbalancesheetmobileNumber': getbalancesheetmobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_reports",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Website_reports', {
    'getbalancesheetmobileNumber': getbalancesheetmobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_reports",
    'source' : localStorage.getItem('source')
  });
},
Website_scheduledemo(getscheduledemomobileNumber){
   Vue.prototype.$mixpanel.track('Website_scheduledemo', {
    'getscheduledemomobileNumber': getscheduledemomobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_scheduledemo",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Website_scheduledemo', {
    'getscheduledemomobileNumber': getscheduledemomobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_scheduledemo",
    'source' : localStorage.getItem('source')
  });
},

create_sales_voucher_listing() {
  Vue.prototype.$mixpanel.track('create_sales_voucher_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_sales_voucher_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'create_sales_voucher_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_sales_voucher_listing",
    'source' : localStorage.getItem('source')
  });
},

create_sales_order_voucher_listing() {
  Vue.prototype.$mixpanel.track('create_sales_order_voucher_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_sales_order_voucher_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'create_sales_order_voucher_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_sales_order_voucher_listing",
    'source' : localStorage.getItem('source')
  });
},

create_credit_note_listing() {
  Vue.prototype.$mixpanel.track('create_credit_note_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_credit_note_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'create_credit_note_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_credit_note_listing",
    'source' : localStorage.getItem('source')
  });
},

create_quotation_listing() {
 Vue.prototype.$mixpanel.track('create_quotation_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_quotation_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'create_quotation_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_quotation_listing",
    'source' : localStorage.getItem('source')
  });
},

create_receipt_listing() {
Vue.prototype.$mixpanel.track('create_receipt_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_receipt_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'create_receipt_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_receipt_listing",
    'source' : localStorage.getItem('source')
  });
},

create_purchase_voucher_listing() {
  Vue.prototype.$mixpanel.track('create_purchase_voucher_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_purchase_voucher_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'create_purchase_voucher_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_purchase_voucher_listing",
    'source' : localStorage.getItem('source')
  });
},

create_purchase_order_voucher_listing() {
  Vue.prototype.$mixpanel.track('create_purchase_order_voucher_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_purchase_order_voucher_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'create_purchase_order_voucher_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_purchase_order_voucher_listing",
    'source' : localStorage.getItem('source')
  });
},

debit_note_listing() {
  Vue.prototype.$mixpanel.track('debit_note_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "debit_note_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'debit_note_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "debit_note_listing",
    'source' : localStorage.getItem('source')
  });
},

create_payment_listing() {
  Vue.prototype.$mixpanel.track('create_payment_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_payment_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'create_payment_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_payment_listing",
    'source' : localStorage.getItem('source')
  });
},

create_journal_listing() {
  Vue.prototype.$mixpanel.track('create_journal_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_journal_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'create_journal_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "create_journal_listing",
    'source' : localStorage.getItem('source')
  });
},

contra_listing() {
  Vue.prototype.$mixpanel.track('contra_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "contra_listing",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'contra_listing', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "contra_listing",
    'source' : localStorage.getItem('source')
  });
},
Website_FreeForeverGetStarted(FreeForever){
  Vue.prototype.$mixpanel.track('Website_FreeForeverGetStarted', {
    'FreeForever': FreeForever,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_FreeForeverGetStarted",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Website_FreeForeverGetStarted', {
    'FreeForever': FreeForever,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_FreeForeverGetStarted",
    'source' : localStorage.getItem('source')
  });
},
Website_OneYearBuyNow(OneYearBuy){
   Vue.prototype.$mixpanel.track('Website_OneYearBuyNow', {
    'OneYearBuy': OneYearBuy,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_OneYearBuyNow",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Website_OneYearBuyNow', {
    'OneYearBuy': OneYearBuy,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_OneYearBuyNow",
    'source' : localStorage.getItem('source')
  });
},
Website_ThreeYearsBuyNow(ThreeYearsBuy){
  Vue.prototype.$mixpanel.track('Website_ThreeYearsBuyNow', {
    'ThreeYearsBuy': ThreeYearsBuy,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_ThreeYearsBuyNow",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Website_ThreeYearsBuyNow', {
    'ThreeYearsBuy': ThreeYearsBuy,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Website_ThreeYearsBuyNow",
    'source' : localStorage.getItem('source')
  });
},

Modern_Theme_button(){
  Vue.prototype.$mixpanel.track('Modern_Theme_button', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Modern_Theme_button",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Modern_Theme_button', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Modern_Theme_button",
    'source' : localStorage.getItem('source')
  });
},

Tally_Theme_button(){
  Vue.prototype.$mixpanel.track('Tally_Theme_button', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Tally_Theme_button",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Tally_Theme_button', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Tally_Theme_button",
    'source' : localStorage.getItem('source')
  });
},
Mobile_Version_button(){
  Vue.prototype.$mixpanel.track('Mobile_Version_button', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Mobile_Version_button",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Mobile_Version_button', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Mobile_Version_button",
    'source' : localStorage.getItem('source')
  });
},
Tally_DataBackup_page(){
  Vue.prototype.$mixpanel.track('Tally_DataBackup_page', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Tally_DataBackup_page",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Tally_DataBackup_page', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Tally_DataBackup_page",
    'source' : localStorage.getItem('source')
  });
},
TallyDataBackup_Download(){
  Vue.prototype.$mixpanel.track('TallyDataBackup_Download', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "TallyDataBackup_Download",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'TallyDataBackup_Download', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "TallyDataBackup_Download",
    'source' : localStorage.getItem('source')
  });
},
eWayBill_Button(){
   Vue.prototype.$mixpanel.track('eWayBill_Button', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "eWayBill_Button",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'eWayBill_Button', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "eWayBill_Button",
    'source' : localStorage.getItem('source')
  });
},
eInvoice_Button(){
  Vue.prototype.$mixpanel.track('eInvoice_Button', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "eInvoice_Button",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'eInvoice_Button', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "eInvoice_Button",
    'source' : localStorage.getItem('source')
  });
},
Sales_Revert_Back_Voucher(){
  Vue.prototype.$mixpanel.track('Sales_Revert_Back_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sales_Revert_Back_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Sales_Revert_Back_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sales_Revert_Back_Voucher",
    'source' : localStorage.getItem('source')
  });
},
Sales_Delete_Voucher(){
  Vue.prototype.$mixpanel.track('Sales_Delete_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sales_Delete_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Sales_Delete_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sales_Delete_Voucher",
    'source' : localStorage.getItem('source')
  });
},
Sales_Cancel_Voucher(){
   Vue.prototype.$mixpanel.track('Sales_Cancel_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sales_Cancel_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Sales_Cancel_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sales_Cancel_Voucher",
    'source' : localStorage.getItem('source')
  });
},
SalesOrder_Revert_Back_Voucher(){
   Vue.prototype.$mixpanel.track('SalesOrder_Revert_Back_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "SalesOrder_Revert_Back_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'SalesOrder_Revert_Back_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "SalesOrder_Revert_Back_Voucher",
    'source' : localStorage.getItem('source')
  });
},
SalesOrder_Delete_Voucher(){
  Vue.prototype.$mixpanel.track('SalesOrder_Delete_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "SalesOrder_Delete_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'SalesOrder_Delete_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "SalesOrder_Delete_Voucher",
    'source' : localStorage.getItem('source')
  });
},
SalesOrder_Cancel_Voucher(){
  Vue.prototype.$mixpanel.track('SalesOrder_Cancel_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "SalesOrder_Cancel_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'SalesOrder_Cancel_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "SalesOrder_Cancel_Voucher",
    'source' : localStorage.getItem('source')
  });
},
Purchase_Cancel_Voucher(){
  Vue.prototype.$mixpanel.track('Purchase_Cancel_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Purchase_Cancel_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Purchase_Cancel_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Purchase_Cancel_Voucher",
    'source' : localStorage.getItem('source')
  });
},
Purchase_Revert_Back_Voucher(){
  Vue.prototype.$mixpanel.track('Purchase_Revert_Back_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Purchase_Revert_Back_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Purchase_Revert_Back_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Purchase_Revert_Back_Voucher",
    'source' : localStorage.getItem('source')
  });
},
Purchase_Delete_Voucher(){
  Vue.prototype.$mixpanel.track('Purchase_Delete_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Purchase_Delete_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Purchase_Delete_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Purchase_Delete_Voucher",
    'source' : localStorage.getItem('source')
  });
},
PurchaseOrder_Revert_Back_Voucher(){
  Vue.prototype.$mixpanel.track('PurchaseOrder_Revert_Back_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "PurchaseOrder_Revert_Back_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'PurchaseOrder_Revert_Back_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "PurchaseOrder_Revert_Back_Voucher",
    'source' : localStorage.getItem('source')
  });
},
PurchaseOrder_Delete_Voucher(){
   Vue.prototype.$mixpanel.track('PurchaseOrder_Delete_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "PurchaseOrder_Delete_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'PurchaseOrder_Delete_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "PurchaseOrder_Delete_Voucher",
    'source' : localStorage.getItem('source')
  });
},
PurchaseOrder_Cancel_Voucher(){
  Vue.prototype.$mixpanel.track('PurchaseOrder_Cancel_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "PurchaseOrder_Cancel_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'PurchaseOrder_Cancel_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "PurchaseOrder_Cancel_Voucher",
    'source' : localStorage.getItem('source')
  });
},
CreditNote_Cancel_Voucher(){
  Vue.prototype.$mixpanel.track('CreditNote_Cancel_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "CreditNote_Cancel_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'CreditNote_Cancel_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "CreditNote_Cancel_Voucher",
    'source' : localStorage.getItem('source')
  });
},
CreditNote_Revert_Back_Voucher(){
  Vue.prototype.$mixpanel.track('CreditNote_Revert_Back_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "CreditNote_Revert_Back_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'CreditNote_Revert_Back_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "CreditNote_Revert_Back_Voucher",
    'source' : localStorage.getItem('source')
  });
},
CreditNote_Delete_Voucher(){
  Vue.prototype.$mixpanel.track('CreditNote_Delete_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "CreditNote_Delete_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'CreditNote_Delete_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "CreditNote_Delete_Voucher",
    'source' : localStorage.getItem('source')
  });
},
DebitNote_Revert_Back_Voucher(){
  Vue.prototype.$mixpanel.track('DebitNote_Revert_Back_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "DebitNote_Revert_Back_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'DebitNote_Revert_Back_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "DebitNote_Revert_Back_Voucher",
    'source' : localStorage.getItem('source')
  });
},
DebitNote_Delete_Voucher(){
  Vue.prototype.$mixpanel.track('DebitNote_Delete_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "DebitNote_Delete_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'DebitNote_Delete_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "DebitNote_Delete_Voucher",
    'source' : localStorage.getItem('source')
  });
},
DebitNote_Cancel_Voucher(){
  Vue.prototype.$mixpanel.track('DebitNote_Cancel_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "DebitNote_Cancel_Voucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'DebitNote_Cancel_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "DebitNote_Cancel_Voucher",
    'source' : localStorage.getItem('source')
  });
},
salesOrderToSales(){
  Vue.prototype.$mixpanel.track('salesOrderToSales', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "salesOrderToSales",
    'source' : localStorage.getItem('source')
  });
gtag('event', 'salesOrderToSales', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "salesOrderToSales",
    'source' : localStorage.getItem('source')
  });
},
salesAndSalesOrderFromQuotation(){
  Vue.prototype.$mixpanel.track('salesAndSalesOrderFromQuotation', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "salesAndSalesOrderFromQuotation",
    'source' : localStorage.getItem('source')
  });
gtag('event', 'salesAndSalesOrderFromQuotation', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "salesAndSalesOrderFromQuotation",
    'source' : localStorage.getItem('source')
  });
},
parties_details_edit_button(parentType){
  Vue.prototype.$mixpanel.track('parties_details_edit_button', {
    'parentType': parentType,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_details_edit_button",
    'source' : localStorage.getItem('source')
  });
gtag('event', 'parties_details_edit_button', {
    'parentType': parentType,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "parties_details_edit_button",
    'source' : localStorage.getItem('source')
  });
},
My_Voucher_edit_Icon(){
   Vue.prototype.$mixpanel.track('My_Voucher_edit_Icon', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "My_Voucher_edit_Icon",
    'source' : localStorage.getItem('source')
  });
gtag('event', 'My_Voucher_edit_Icon', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "My_Voucher_edit_Icon",
    'source' : localStorage.getItem('source')
  });
},
My_Voucher_Undo_Icon(){
  Vue.prototype.$mixpanel.track('My_Voucher_Undo_Icon', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "My_Voucher_Undo_Icon",
    'source' : localStorage.getItem('source')
  });
gtag('event', 'My_Voucher_Undo_Icon', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "My_Voucher_Undo_Icon",
    'source' : localStorage.getItem('source')
  });
},
My_Voucher_Edit_Voucher(){
  Vue.prototype.$mixpanel.track('My_Voucher_Edit_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "My_Voucher_Edit_Voucher",
    'source' : localStorage.getItem('source')
  });
gtag('event', 'My_Voucher_Edit_Voucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "My_Voucher_Edit_Voucher",
    'source' : localStorage.getItem('source')
  });
},
GSP_Tab_Button_eWay(TabNumber){
  Vue.prototype.$mixpanel.track('GSP_Tab_Button_eWay', {
    'Tabnumber':TabNumber,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "",
    'source' : localStorage.getItem('source') || ""
  });
  gtag('event', 'GSP_Tab_Button_eWay', {
    'Tabnumber':TabNumber,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "",
    'source' : localStorage.getItem('source') || ""
  });
},
gsp_tab_button_einvoice(tabNumber) {
  Vue.prototype.$mixpanel.track('gsp_tab_button_einvoice', {
    'tabNumber':tabNumber,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "gsp_tab_button_einvoice",
    'source' : localStorage.getItem('source') || ""
  });
  gtag('event', 'gsp_tab_button_einvoice', {
    'tabNumber':tabNumber,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "gsp_tab_button_einvoice",
    'source' : localStorage.getItem('source') || ""
  });
},
GSP_Next_Button_eWay(TabNumber){
  Vue.prototype.$mixpanel.track('GSP_Next_Button_eWay', {
    'Tabnumber':TabNumber,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "GSP_Next_Button_eWay",
    'source' : localStorage.getItem('source') ||""
  });
  gtag('event', 'GSP_Next_Button_eWay', {
    'Tabnumber':TabNumber,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "GSP_Next_Button_eWay",
    'source' : localStorage.getItem('source') ||""
  });
},
GSP_Next_Button_eInvoice(TabNumber){
  Vue.prototype.$mixpanel.track('GSP_Next_Button_eInvoice', {
    'Tabnumber':TabNumber,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "GSP_Next_Button_eInvoice",
    'source' : localStorage.getItem('source') || ""
  });
  console.log("google invoice 2",TabNumber)
  gtag('event', 'GSP_Next_Button_eInvoice', {
    'Tabnumber':TabNumber,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "GSP_Next_Button_eInvoice",
    'source' : localStorage.getItem('source') || ""
  });
},
GSP_Login_eWay(){
  Vue.prototype.$mixpanel.track('GSP_Login_eWay', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "GSP_Login_eWay",
    'source' : localStorage.getItem('source') ||""
  });
  gtag('event', 'GSP_Login_eWay', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "GSP_Login_eWay",
    'source' : localStorage.getItem('source') ||""
  });
},
GSP_Login_eInvoice(){
  Vue.prototype.$mixpanel.track('GSP_Login_eInvoice', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "GSP_Login_eInvoice",
    'source' : localStorage.getItem('source') || ""
  });
  gtag('event', 'GSP_Login_eInvoice', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "GSP_Login_eInvoice",
    'source' : localStorage.getItem('source') || ""
  });
},

Sidebar_Quotation_event(){
  Vue.prototype.$mixpanel.track('Sidebar_Quotation_event', {
     'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Quotation_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Sidebar_Quotation_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Quotation_event",
    'source' : localStorage.getItem('source')
  });
},
Sidebar_Sales_event(){
  Vue.prototype.$mixpanel.track('Sidebar_Sales_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Sales_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Sidebar_Sales_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Sales_event",
    'source' : localStorage.getItem('source')
  });
},
Sidebar_Receipt_event(){
  Vue.prototype.$mixpanel.track('Sidebar_Receipt_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Receipt_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Sidebar_Receipt_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Receipt_event",
    'source' : localStorage.getItem('source')
  });
},
Sidebar_Salesorder_event(){
  Vue.prototype.$mixpanel.track('Sidebar_Salesorder_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Salesorder_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Sidebar_Salesorder_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Salesorder_event",
    'source' : localStorage.getItem('source')
  });
},
Sidebar_Creditnote_event(){
  Vue.prototype.$mixpanel.track('Sidebar_Creditnote_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Creditnote_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Sidebar_Creditnote_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Creditnote_event",
    'source' : localStorage.getItem('source')
  });
},
Sidebar_purchase_event(){
   Vue.prototype.$mixpanel.track('Sidebar_purchase_event', {
     'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_purchase_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Sidebar_purchase_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_purchase_event",
    'source' : localStorage.getItem('source')
  });
},
Sidebar_Purchaseorder_event(){
   Vue.prototype.$mixpanel.track('Sidebar_Purchaseorder_event', {
     'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Purchaseorder_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Sidebar_Purchaseorder_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Purchaseorder_event",
    'source' : localStorage.getItem('source')
  });
},
Sidebar_Debitnote_event(){
  Vue.prototype.$mixpanel.track('Sidebar_Debitnote_event', {
     'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Debitnote_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Sidebar_Debitnote_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Debitnote_event",
    'source' : localStorage.getItem('source')
  });
},
Sidebar_Payment_event(){
  Vue.prototype.$mixpanel.track('Sidebar_Payment_event', {
     'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Payment_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Sidebar_Payment_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Payment_event",
    'source' : localStorage.getItem('source')
  });
},
Sidebar_Journal_event(){
  Vue.prototype.$mixpanel.track('Sidebar_Journal_event', {
      'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Journal_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Sidebar_Journal_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Journal_event",
    'source' : localStorage.getItem('source')
  });
},
Sidebar_Contra_event(){
  Vue.prototype.$mixpanel.track('Sidebar_Contra_event', {
      'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Contra_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Sidebar_Contra_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Sidebar_Contra_event",
    'source' : localStorage.getItem('source')
  });
},
Footer_Sales_event(){
  Vue.prototype.$mixpanel.track('Footer_Sales_event', {
      'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Sales_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Footer_Sales_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Sales_event",
    'source' : localStorage.getItem('source')
  });
},
Footer_Salesorder_event(){
  Vue.prototype.$mixpanel.track('Footer_Salesorder_event', {
      'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Salesorder_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Footer_Salesorder_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Salesorder_event",
    'source' : localStorage.getItem('source')
  });
},
Footer_Creditnote_event(){
  Vue.prototype.$mixpanel.track('Footer_Creditnote_event', {
     'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Creditnote_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Footer_Creditnote_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Creditnote_event",
    'source' : localStorage.getItem('source')
  });
},
Footer_Quotation_event(){
  Vue.prototype.$mixpanel.track('Footer_Quotation_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Quotation_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Footer_Quotation_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Quotation_event",
    'source' : localStorage.getItem('source')
  });
},
Footer_Receipt_event(){
   Vue.prototype.$mixpanel.track('Footer_Receipt_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Receipt_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Footer_Receipt_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Receipt_event",
    'source' : localStorage.getItem('source')
  });
},
Footer_Purchase_event(){
  Vue.prototype.$mixpanel.track('Footer_Purchase_event', {
     'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Purchase_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Footer_Purchase_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Purchase_event",
    'source' : localStorage.getItem('source')
  });
},
Footer_Purchaseorder_event(){
  Vue.prototype.$mixpanel.track('Footer_Purchaseorder_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Purchaseorder_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Footer_Purchaseorder_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Purchaseorder_event",
    'source' : localStorage.getItem('source')
  });
},
Footer_Debitnote_event(){
  Vue.prototype.$mixpanel.track('Footer_Debitnote_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Debitnote_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Footer_Debitnote_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Debitnote_event",
    'source' : localStorage.getItem('source')
  });
},
Footer_Payment_event(){
  Vue.prototype.$mixpanel.track('Footer_Payment_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Payment_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Footer_Payment_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Payment_event",
    'source' : localStorage.getItem('source')
  });
},
Footer_Journal_event(){
   Vue.prototype.$mixpanel.track('Footer_Journal_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Journal_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Footer_Journal_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Journal_event",
    'source' : localStorage.getItem('source')
  });
},
Footer_Contra_event(){
  Vue.prototype.$mixpanel.track('Footer_Contra_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Contra_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Footer_Contra_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "Footer_Contra_event",
    'source' : localStorage.getItem('source')
  });
},
PopupOneYearPlan(){
  Vue.prototype.$mixpanel.track('PopupOneYearPlan', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "PopupOneYearPlan",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'PopupOneYearPlan', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "PopupOneYearPlan",
    'source' : localStorage.getItem('source')
  });
},
PopupThreeYearsPlans(){
  Vue.prototype.$mixpanel.track('PopupThreeYearsPlans', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "PopupThreeYearsPlans",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'PopupThreeYearsPlans', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "PopupThreeYearsPlans",
    'source' : localStorage.getItem('source')
  });
},
///////////////////////////////////////// Tally Style ////////////////////////////////////////////////////////////////////////
tally_style_daybook(){
  Vue.prototype.$mixpanel.track('tally_style_daybook', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_daybook",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_daybook', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_daybook",
    'source' : localStorage.getItem('source')
  });
},
tally_style_balancesheet(){
   Vue.prototype.$mixpanel.track('tally_style_balancesheet', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_balancesheet",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_balancesheet', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_balancesheet",
    'source' : localStorage.getItem('source')
  });
},
tally_style_profitloss(){
  Vue.prototype.$mixpanel.track('tally_style_profitloss', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_profitloss",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_profitloss', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_profitloss",
    'source' : localStorage.getItem('source')
  });
},
tally_style_stocksummary(){
  Vue.prototype.$mixpanel.track('tally_style_stocksummary', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stocksummary",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_stocksummary', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stocksummary",
    'source' : localStorage.getItem('source')
  });
},
tally_style_trialbalance(){
  Vue.prototype.$mixpanel.track('tally_style_trialbalance', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_trialbalance",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_trialbalance', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_trialbalance",
    'source' : localStorage.getItem('source')
  });
},
tally_style_cashbank(){
  Vue.prototype.$mixpanel.track('tally_style_cashbank', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_cashbank",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_cashbank', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_cashbank",
    'source' : localStorage.getItem('source')
  });
},
tally_style_ledgervouchers(){
  Vue.prototype.$mixpanel.track('tally_style_ledgervouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_ledgervouchers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_ledgervouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_ledgervouchers",
    'source' : localStorage.getItem('source')
  });
},
tally_style_salesvoucherDetails(){
  Vue.prototype.$mixpanel.track('tally_style_salesvoucherDetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_salesvoucherDetails",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_salesvoucherDetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_salesvoucherDetails",
    'source' : localStorage.getItem('source')
  });
},
tally_style_purchasevoucherDetails(){
  Vue.prototype.$mixpanel.track('tally_style_purchasevoucherDetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_purchasevoucherDetails",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_purchasevoucherDetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_purchasevoucherDetails",
    'source' : localStorage.getItem('source')
  });
},
tally_style_salesordervoucherDetails(){
  Vue.prototype.$mixpanel.track('tally_style_salesordervoucherDetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_salesordervoucherDetails",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_salesordervoucherDetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_salesordervoucherDetails",
    'source' : localStorage.getItem('source')
  });
},
tally_style_purchaseordervoucherDetails(){
  Vue.prototype.$mixpanel.track('tally_style_purchaseordervoucherDetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_purchaseordervoucherDetails",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_purchaseordervoucherDetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_purchaseordervoucherDetails",
    'source' : localStorage.getItem('source')
  });
},
tally_style_paymentvoucherDetails(){
  Vue.prototype.$mixpanel.track('tally_style_paymentvoucherDetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_paymentvoucherDetails",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_paymentvoucherDetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_paymentvoucherDetails",
    'source' : localStorage.getItem('source')
  });
},
tally_style_receiptvoucherDetails(){
  Vue.prototype.$mixpanel.track('tally_style_receiptvoucherDetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_receiptvoucherDetails",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_receiptvoucherDetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_receiptvoucherDetails",
    'source' : localStorage.getItem('source')
  });
},
tally_style_journalvoucherDetails(){
  Vue.prototype.$mixpanel.track('tally_style_journalvoucherDetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_journalvoucherDetails",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_journalvoucherDetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_journalvoucherDetails",
    'source' : localStorage.getItem('source')
  });
},
tally_style_contravoucherDetails(){
  Vue.prototype.$mixpanel.track('tally_style_contravoucherDetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_contravoucherDetails",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_contravoucherDetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_contravoucherDetails",
    'source' : localStorage.getItem('source')
  });
},
tally_style_allorders(){
  Vue.prototype.$mixpanel.track('tally_style_allorders', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_allorders",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_allorders', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_allorders",
    'source' : localStorage.getItem('source')
  });
},
tally_style_attendancevoucherregister(){
  Vue.prototype.$mixpanel.track('tally_style_attendancevoucherregister', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_attendancevoucherregister",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_attendancevoucherregister', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_attendancevoucherregister",
    'source' : localStorage.getItem('source')
  });
},
tally_style_billpayables(){
  Vue.prototype.$mixpanel.track('tally_style_billpayables', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_billpayables",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_billpayables', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_billpayables",
    'source' : localStorage.getItem('source')
  });
},
tally_style_billreceivables(){
  Vue.prototype.$mixpanel.track('tally_style_billreceivables', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_billreceivables",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_billreceivables', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_billreceivables",
    'source' : localStorage.getItem('source')
  });
},
tally_style_cancelledvouchers(){
   Vue.prototype.$mixpanel.track('tally_style_cancelledvouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_cancelledvouchers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_cancelledvouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_cancelledvouchers",
    'source' : localStorage.getItem('source')
  });
},
tally_style_cashflowsummary(){
   Vue.prototype.$mixpanel.track('tally_style_cashflowsummary', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_cashflowsummary",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_cashflowsummary', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_cashflowsummary",
    'source' : localStorage.getItem('source')
  });
},
tally_style_cashflow(){
  Vue.prototype.$mixpanel.track('tally_style_cashflow', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_cashflow",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_cashflow', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_cashflow",
    'source' : localStorage.getItem('source')
  });
},
tally_style_contravoucher(){
   Vue.prototype.$mixpanel.track('tally_style_contravoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_contravoucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_contravoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_contravoucher",
    'source' : localStorage.getItem('source')
  });
},
tally_style_contra(){
  Vue.prototype.$mixpanel.track('tally_style_contra', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_contra",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_contra', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_contra",
    'source' : localStorage.getItem('source')
  });
},
tally_style_creditnotevoucherdetails(){
  Vue.prototype.$mixpanel.track('tally_style_creditnotevoucherdetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_creditnotevoucherdetails",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_creditnotevoucherdetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_creditnotevoucherdetails",
    'source' : localStorage.getItem('source')
  });
},
tally_style_creditnotevoucher(){
  Vue.prototype.$mixpanel.track('tally_style_creditnotevoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_creditnotevoucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_creditnotevoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_creditnotevoucher",
    'source' : localStorage.getItem('source')
  });
},
tally_style_creditnote(){
  Vue.prototype.$mixpanel.track('tally_style_creditnote', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_creditnote",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_creditnote', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_creditnote",
    'source' : localStorage.getItem('source')
  });
},
tally_style_debitnotevoucherdetails(){
  Vue.prototype.$mixpanel.track('tally_style_debitnotevoucherdetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_debitnotevoucherdetails",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_debitnotevoucherdetails', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_debitnotevoucherdetails",
    'source' : localStorage.getItem('source')
  });
},
tally_style_debitnotevoucher(){
  Vue.prototype.$mixpanel.track('tally_style_debitnotevoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_debitnotevoucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_debitnotevoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_debitnotevoucher",
    'source' : localStorage.getItem('source')
  });
},
tally_style_debitnote(){
  Vue.prototype.$mixpanel.track('tally_style_debitnote', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_debitnote",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_debitnote', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_debitnote",
    'source' : localStorage.getItem('source')
  });
},
tally_style_fundsflowsummary(){
  Vue.prototype.$mixpanel.track('tally_style_fundsflowsummary', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_fundsflowsummary",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_fundsflowsummary', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_fundsflowsummary",
    'source' : localStorage.getItem('source')
  });
},
tally_style_fundsflow(){
  Vue.prototype.$mixpanel.track('tally_style_fundsflow', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_fundsflow",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_fundsflow', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_fundsflow",
    'source' : localStorage.getItem('source')
  });
},
tally_style_groupoutstanding(){
  Vue.prototype.$mixpanel.track('tally_style_groupoutstanding', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_groupoutstanding",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_groupoutstanding', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_groupoutstanding",
    'source' : localStorage.getItem('source')
  });
},
tally_style_groupsummaryinner(){
  Vue.prototype.$mixpanel.track('tally_style_groupsummaryinner', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_groupsummaryinner",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_groupsummaryinner', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_groupsummaryinner",
    'source' : localStorage.getItem('source')
  });
},
tally_style_groupsummary(){
  Vue.prototype.$mixpanel.track('tally_style_groupsummary', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_groupsummary",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_groupsummary', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_groupsummary",
    'source' : localStorage.getItem('source')
  });
},
tally_style_groupvouchers(){
  Vue.prototype.$mixpanel.track('tally_style_groupvouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_groupvouchers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_groupvouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_groupvouchers",
    'source' : localStorage.getItem('source')
  });
},
tally_style_inventoryBooks(){
  Vue.prototype.$mixpanel.track('tally_style_inventoryBooks', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_inventoryBooks",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_inventoryBooks', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_inventoryBooks",
    'source' : localStorage.getItem('source')
  });
},
tally_style_itemmovementAnalysis(){
  Vue.prototype.$mixpanel.track('tally_style_itemmovementAnalysis', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_itemmovementAnalysis",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_itemmovementAnalysis', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_itemmovementAnalysis",
    'source' : localStorage.getItem('source')
  });
},
tally_style_itemvoucherAnalysis(){
  Vue.prototype.$mixpanel.track('tally_style_itemvoucherAnalysis', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_itemvoucherAnalysis",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_itemvoucherAnalysis', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_itemvoucherAnalysis",
    'source' : localStorage.getItem('source')
  });
},
tally_style_journalVoucher(){
   Vue.prototype.$mixpanel.track('tally_style_journalVoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_journalVoucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_journalVoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_journalVoucher",
    'source' : localStorage.getItem('source')
  });
},
tally_style_journal(){
  Vue.prototype.$mixpanel.track('tally_style_journal', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_journal",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_journal', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_journal",
    'source' : localStorage.getItem('source')
  });
},
tally_style_ledgermonthlySummary(){
  Vue.prototype.$mixpanel.track('tally_style_ledgermonthlySummary', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_ledgermonthlySummary",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_ledgermonthlySummary', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_ledgermonthlySummary",
    'source' : localStorage.getItem('source')
  });
},
tally_style_ledgerOutstanding(){
  Vue.prototype.$mixpanel.track('tally_style_ledgerOutstanding', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_ledgerOutstanding",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_ledgerOutstanding', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_ledgerOutstanding",
    'source' : localStorage.getItem('source')
  });
},
tally_style_negativeledgers(){
  Vue.prototype.$mixpanel.track('tally_style_negativeledgers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_negativeledgers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_negativeledgers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_negativeledgers",
    'source' : localStorage.getItem('source')
  });
},
tally_style_negativestock(){
  Vue.prototype.$mixpanel.track('tally_style_negativestock', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_negativestock",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_negativestock', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_negativestock",
    'source' : localStorage.getItem('source')
  });
},
tally_style_optionalvouchers(){
  Vue.prototype.$mixpanel.track('tally_style_optionalvouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_optionalvouchers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_optionalvouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_optionalvouchers",
    'source' : localStorage.getItem('source')
  });
},
tally_style_outstandings(){
  Vue.prototype.$mixpanel.track('tally_style_outstandings', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_outstandings",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_outstandings', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_outstandings",
    'source' : localStorage.getItem('source')
  });
},
tally_style_costCentres(){
  Vue.prototype.$mixpanel.track('tally_style_costCentres', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_costCentres",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_costCentres', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_costCentres",
    'source' : localStorage.getItem('source')
  });
},
tally_style_overduepayables(){
  Vue.prototype.$mixpanel.track('tally_style_overduepayables', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_overduepayables",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_overduepayables', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_overduepayables",
    'source' : localStorage.getItem('source')
  });
},
tally_style_overduereceivables(){
  Vue.prototype.$mixpanel.track('tally_style_overduereceivables', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_overduereceivables",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_overduereceivables', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_overduereceivables",
    'source' : localStorage.getItem('source')
  });
},
tally_style_payables(){
  Vue.prototype.$mixpanel.track('tally_style_payables', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_payables",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_payables', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_payables",
    'source' : localStorage.getItem('source')
  });
},
tally_style_paymentvoucher(){
  Vue.prototype.$mixpanel.track('tally_style_paymentvoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_paymentvoucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_paymentvoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_paymentvoucher",
    'source' : localStorage.getItem('source')
  });
},
tally_style_payment(){
  Vue.prototype.$mixpanel.track('tally_style_payment', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_payment",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_payment', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_payment",
    'source' : localStorage.getItem('source')
  });
},
tally_style_physicalstockRegister(){
  Vue.prototype.$mixpanel.track('tally_style_physicalstockRegister', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_physicalstockRegister",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_physicalstockRegister', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_physicalstockRegister",
    'source' : localStorage.getItem('source')
  });
},
tally_style_physicalstockvoucher(){
  Vue.prototype.$mixpanel.track('tally_style_physicalstockvoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_physicalstockvoucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_physicalstockvoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_physicalstockvoucher",
    'source' : localStorage.getItem('source')
  });
},
tally_style_postdatedvouchers(){
  Vue.prototype.$mixpanel.track('tally_style_postdatedvouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_postdatedvouchers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_postdatedvouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_postdatedvouchers",
    'source' : localStorage.getItem('source')
  });
},
tally_style_purchaseorderbook(){
  Vue.prototype.$mixpanel.track('tally_style_purchaseorderbook', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_purchaseorderbook",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_purchaseorderbook', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_purchaseorderbook",
    'source' : localStorage.getItem('source')
  });
},
tally_style_purchaseordervouchers(){
  Vue.prototype.$mixpanel.track('tally_style_purchaseordervouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_purchaseordervouchers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_purchaseordervouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_purchaseordervouchers",
    'source' : localStorage.getItem('source')
  });
},
tally_style_purchasevoucher(){
  Vue.prototype.$mixpanel.track('tally_style_purchasevoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_purchasevoucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_purchasevoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_purchasevoucher",
    'source' : localStorage.getItem('source')
  });
},
tally_style_purchase(){
  Vue.prototype.$mixpanel.track('tally_style_purchase', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_purchase",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_purchase', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_purchase",
    'source' : localStorage.getItem('source')
  });
},
tally_style_receiptvoucher(){
  Vue.prototype.$mixpanel.track('tally_style_receiptvoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_receiptvoucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_receiptvoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_receiptvoucher",
    'source' : localStorage.getItem('source')
  });
},
tally_style_receipt(){
   Vue.prototype.$mixpanel.track('tally_style_receipt', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_receipt",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_receipt', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_receipt",
    'source' : localStorage.getItem('source')
  });
},
tally_style_receivables(){
  Vue.prototype.$mixpanel.track('tally_style_receivables', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_receivables",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_receivables', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_receivables",
    'source' : localStorage.getItem('source')
  });
},
tally_style_salesordersbook(){
  Vue.prototype.$mixpanel.track('tally_style_salesordersbook', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_salesordersbook",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_salesordersbook', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_salesordersbook",
    'source' : localStorage.getItem('source')
  });
},
tally_style_salesordersvouchers(){
  Vue.prototype.$mixpanel.track('tally_style_salesordersvouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_salesordersvouchers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_salesordersvouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_salesordersvouchers",
    'source' : localStorage.getItem('source')
  });
},
tally_style_salesvoucher(){
  Vue.prototype.$mixpanel.track('tally_style_salesvoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_salesvoucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_salesvoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_salesvoucher",
    'source' : localStorage.getItem('source')
  });
},
tally_style_sales(){
  Vue.prototype.$mixpanel.track('tally_style_sales', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_sales",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_sales', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_sales",
    'source' : localStorage.getItem('source')
  });
},
tally_style_statementsaccounts(){
  Vue.prototype.$mixpanel.track('tally_style_statementsaccounts', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_statementsaccounts",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_statementsaccounts', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_statementsaccounts",
    'source' : localStorage.getItem('source')
  });
},
tally_style_statementsofinventory(){
  Vue.prototype.$mixpanel.track('tally_style_statementsofinventory', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_statementsofinventory",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_statementsofinventory', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_statementsofinventory",
    'source' : localStorage.getItem('source')
  });
},
tally_style_statistics(){
  Vue.prototype.$mixpanel.track('tally_style_statistics', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_statistics",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_statistics', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_statistics",
    'source' : localStorage.getItem('source')
  });
},
tally_style_stockcategorysummary(){
  Vue.prototype.$mixpanel.track('tally_style_stockcategorysummary', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stockcategorysummary",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_stockcategorysummary', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stockcategorysummary",
    'source' : localStorage.getItem('source')
  });
},
tally_style_stockgroupanalysis(){
  Vue.prototype.$mixpanel.track('tally_style_stockgroupanalysis', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stockgroupanalysis",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_stockgroupanalysis', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stockgroupanalysis",
    'source' : localStorage.getItem('source')
  });
},
tally_style_stockgroupreorderstatus(){
  Vue.prototype.$mixpanel.track('tally_style_stockgroupreorderstatus', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stockgroupreorderstatus",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_stockgroupreorderstatus', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stockgroupreorderstatus",
    'source' : localStorage.getItem('source')
  });
},
tally_style_stockgroupsummary(){
  Vue.prototype.$mixpanel.track('tally_style_stockgroupsummary', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stockgroupsummary",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_stockgroupsummary', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stockgroupsummary",
    'source' : localStorage.getItem('source')
  });
},
tally_style_stockjournalvoucher(){
  Vue.prototype.$mixpanel.track('tally_style_stockjournalvoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stockjournalvoucher",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_stockjournalvoucher', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stockjournalvoucher",
    'source' : localStorage.getItem('source')
  });
},
tally_style_stocktransferjournal(){
  Vue.prototype.$mixpanel.track('tally_style_stocktransferjournal', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stocktransferjournal",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_stocktransferjournal', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stocktransferjournal",
    'source' : localStorage.getItem('source')
  });
},
tally_style_stockitemmonthlysummary(){
   Vue.prototype.$mixpanel.track('tally_style_stockitemmonthlysummary', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stockitemmonthlysummary",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_stockitemmonthlysummary', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stockitemmonthlysummary",
    'source' : localStorage.getItem('source')
  });
},
tally_style_stockitemvouchers(){
   Vue.prototype.$mixpanel.track('tally_style_stockitemvouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stockitemvouchers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_stockitemvouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_stockitemvouchers",
    'source' : localStorage.getItem('source')
  });
},
tally_style_voucherclarification(){
  Vue.prototype.$mixpanel.track('tally_style_voucherclarification', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_voucherclarification",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_voucherclarification', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_voucherclarification",
    'source' : localStorage.getItem('source')
  });
},
tally_style_vouchermonthlyregister(){
  Vue.prototype.$mixpanel.track('tally_style_vouchermonthlyregister', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_vouchermonthlyregister",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'tally_style_vouchermonthlyregister', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "tally_style_vouchermonthlyregister",
    'source' : localStorage.getItem('source')
  });
},
// Reports page google analytics
// Accounting Reports
report_accounting_reports_day_book() {
  Vue.prototype.$mixpanel.track('report_accounting_reports_day_book', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_accounting_reports_day_book",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_accounting_reports_day_book', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_accounting_reports_day_book",
    'source' : localStorage.getItem('source')
  });
},
report_accounting_reports_expenses() {
  Vue.prototype.$mixpanel.track('report_accounting_reports_expenses', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_accounting_reports_expenses",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_accounting_reports_expenses', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_accounting_reports_expenses",
    'source' : localStorage.getItem('source')
  });
},
report_accounting_reports_inactive_customers() {
  Vue.prototype.$mixpanel.track('report_accounting_reports_inactive_customers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_accounting_reports_inactive_customers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_accounting_reports_inactive_customers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_accounting_reports_inactive_customers",
    'source' : localStorage.getItem('source')
  });
},
report_accounting_reports_inactive_items() {
  Vue.prototype.$mixpanel.track('report_accounting_reports_inactive_items', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_accounting_reports_inactive_items",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_accounting_reports_inactive_items', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_accounting_reports_inactive_items",
    'source' : localStorage.getItem('source')
  });
},
report_accounting_reports_ledger_report() {
  Vue.prototype.$mixpanel.track('report_accounting_reports_ledger_report', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_accounting_reports_ledger_report",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_accounting_reports_ledger_report', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_accounting_reports_ledger_report",
    'source' : localStorage.getItem('source')
  });
},

// my entries in sidebar
sidebar_my_entries_my_vouchers() {
  Vue.prototype.$mixpanel.track('sidebar_my_entries_my_vouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sidebar_my_entries_my_vouchers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sidebar_my_entries_my_vouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sidebar_my_entries_my_vouchers",
    'source' : localStorage.getItem('source')
  });
},
sidebar_my_entries_my_quotations() {
  Vue.prototype.$mixpanel.track('sidebar_my_entries_my_quotations', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sidebar_my_entries_my_quotations",
    'source' : localStorage.getItem('source')
  });
  console.log("hi from google")
  gtag('event', 'sidebar_my_entries_my_quotations', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sidebar_my_entries_my_quotations",
    'source' : localStorage.getItem('source')
  });
},
sidebar_my_entries_my_eway_bills() {
  Vue.prototype.$mixpanel.track('sidebar_my_entries_my_eway_bills', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sidebar_my_entries_my_eway_bills",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sidebar_my_entries_my_eway_bills', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sidebar_my_entries_my_eway_bills",
    'source' : localStorage.getItem('source')
  });
},
sidebar_my_entries_my_einvoices() {
  Vue.prototype.$mixpanel.track('sidebar_my_entries_my_einvoices', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sidebar_my_entries_my_einvoices",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sidebar_my_entries_my_einvoices', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sidebar_my_entries_my_einvoices",
    'source' : localStorage.getItem('source')
  });
},
sidebar_my_entries_my_ledgers() {
  Vue.prototype.$mixpanel.track('sidebar_my_entries_my_ledgers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sidebar_my_entries_my_ledgers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sidebar_my_entries_my_ledgers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sidebar_my_entries_my_ledgers",
    'source' : localStorage.getItem('source')
  });
},
sidebar_my_entries_my_stock_items() {
  Vue.prototype.$mixpanel.track('sidebar_my_entries_my_stock_items', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sidebar_my_entries_my_stock_items",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sidebar_my_entries_my_stock_items', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sidebar_my_entries_my_stock_items",
    'source' : localStorage.getItem('source')
  });
},
sidebar_my_entries_tracking_report() {
  Vue.prototype.$mixpanel.track('sidebar_my_entries_tracking_report', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sidebar_my_entries_tracking_report",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sidebar_my_entries_tracking_report', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sidebar_my_entries_tracking_report",
    'source' : localStorage.getItem('source')
  });
},

//sidebar reports
sidebar_reports() {
  Vue.prototype.$mixpanel.track('sidebar_reports_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sidebar_reports_event",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sidebar_reports_event', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sidebar_reports_event",
    'source' : localStorage.getItem('source')
  });
},
//reports search input field
reports_screen_search(searchBy){
  Vue.prototype.$mixpanel.track('reports_screen_search', {
   'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "reports_screen_search",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'reports_screen_search', {
    'searchBy': searchBy,
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "reports_screen_search",
    'source' : localStorage.getItem('source')
  });
},

// my entries
report_my_entries_my_vouchers() {
  Vue.prototype.$mixpanel.track('report_my_entries_my_vouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_my_entries_my_vouchers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_my_entries_my_vouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_my_entries_my_vouchers",
    'source' : localStorage.getItem('source')
  });
},
report_my_entries_my_quotations() {
  Vue.prototype.$mixpanel.track('report_my_entries_my_quotations', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_my_entries_my_quotations",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_my_entries_my_quotations', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_my_entries_my_quotations",
    'source' : localStorage.getItem('source')
  });
},
report_my_entries_my_eway_bills() {
  Vue.prototype.$mixpanel.track('report_my_entries_my_eway_bills', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_my_entries_my_eway_bills",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_my_entries_my_eway_bills', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_my_entries_my_eway_bills",
    'source' : localStorage.getItem('source')
  });
},
report_my_entries_my_einvoices() {
  Vue.prototype.$mixpanel.track('report_my_entries_my_einvoices', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_my_entries_my_einvoices",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_my_entries_my_einvoices', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_my_entries_my_einvoices",
    'source' : localStorage.getItem('source')
  });
},
report_my_entries_my_ledgers() {
  Vue.prototype.$mixpanel.track('report_my_entries_my_ledgers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_my_entries_my_ledgers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_my_entries_my_ledgers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_my_entries_my_ledgers",
    'source' : localStorage.getItem('source')
  });
},
report_my_entries_my_stock_items() {
  Vue.prototype.$mixpanel.track('report_my_entries_my_stock_items', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_my_entries_my_stock_items",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_my_entries_my_stock_items', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_my_entries_my_stock_items",
    'source' : localStorage.getItem('source')
  });
},
report_my_entries_tracking_report() {
  Vue.prototype.$mixpanel.track('report_my_entries_tracking_report', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_my_entries_tracking_report",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_my_entries_tracking_report', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_my_entries_tracking_report",
    'source' : localStorage.getItem('source')
  });
},

// Financial report
report_financial_reports_balance_sheet() {
  Vue.prototype.$mixpanel.track('report_financial_reports_balance_sheet', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_financial_reports_balance_sheet",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_financial_reports_balance_sheet', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_financial_reports_balance_sheet",
    'source' : localStorage.getItem('source')
  });
},
report_financial_reports_profit_loss() {
  Vue.prototype.$mixpanel.track('report_financial_reports_profit_loss', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_financial_reports_profit_loss",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_financial_reports_profit_loss', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_financial_reports_profit_loss",
    'source' : localStorage.getItem('source')
  });
},
report_financial_reports_trial_balance() {
  Vue.prototype.$mixpanel.track('report_financial_reports_trial_balance', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_financial_reports_trial_balance",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_financial_reports_trial_balance', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_financial_reports_trial_balance",
    'source' : localStorage.getItem('source')
  });
},

// Top reports
report_top_reports_top_customers() {
  Vue.prototype.$mixpanel.track('report_top_reports_top_customers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_top_reports_top_customers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_top_reports_top_customers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_top_reports_top_customers",
    'source' : localStorage.getItem('source')
  });
},
report_top_reports_top_suppliers() {
  Vue.prototype.$mixpanel.track('report_top_reports_top_suppliers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_top_reports_top_suppliers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_top_reports_top_suppliers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_top_reports_top_suppliers",
    'source' : localStorage.getItem('source')
  });
},
report_top_reports_items_sold_by_value() {
  Vue.prototype.$mixpanel.track('report_top_reports_items_sold_by_value', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_top_reports_items_sold_by_value",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_top_reports_items_sold_by_value', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_top_reports_items_sold_by_value",
    'source' : localStorage.getItem('source')
  });
},
report_top_reports_items_purchased_by_value() {
  Vue.prototype.$mixpanel.track('report_top_reports_items_purchased_by_value', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_top_reports_items_purchased_by_value",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_top_reports_items_purchased_by_value', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_top_reports_items_purchased_by_value",
    'source' : localStorage.getItem('source')
  });
},
report_top_reports_items_sold_by_qty() {
  Vue.prototype.$mixpanel.track('report_top_reports_items_sold_by_qty', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_top_reports_items_sold_by_qty",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_top_reports_items_sold_by_qty', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_top_reports_items_sold_by_qty",
    'source' : localStorage.getItem('source')
  });
},
report_top_reports_items_purchased_by_qty() {
  Vue.prototype.$mixpanel.track('report_top_reports_items_purchased_by_qty', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_top_reports_items_purchased_by_qty",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_top_reports_items_purchased_by_qty', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_top_reports_items_purchased_by_qty",
    'source' : localStorage.getItem('source')
  });
},

// Sales Overview
report_sales_overview_by_month() {
  Vue.prototype.$mixpanel.track('report_sales_overview_by_month', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_sales_overview_by_month",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_sales_overview_by_month', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_sales_overview_by_month",
    'source' : localStorage.getItem('source')
  });
},
report_sales_overview_by_bills() {
  Vue.prototype.$mixpanel.track('report_sales_overview_by_bills', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_sales_overview_by_bills",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_sales_overview_by_bills', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_sales_overview_by_bills",
    'source' : localStorage.getItem('source')
  });
},
report_sales_overview_by_ledger() {
  Vue.prototype.$mixpanel.track('report_sales_overview_by_ledger', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_sales_overview_by_ledger",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_sales_overview_by_ledger', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_sales_overview_by_ledger",
    'source' : localStorage.getItem('source')
  });
},
report_sales_overview_by_stock_item() {
  Vue.prototype.$mixpanel.track('report_sales_overview_by_stock_item', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_sales_overview_by_stock_item",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_sales_overview_by_stock_item', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_sales_overview_by_stock_item",
    'source' : localStorage.getItem('source')
  });
},
report_sales_overview_by_voucher_type() {
   Vue.prototype.$mixpanel.track('report_sales_overview_by_voucher_type', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_sales_overview_by_voucher_type",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_sales_overview_by_voucher_type', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_sales_overview_by_voucher_type",
    'source' : localStorage.getItem('source')
  });
},
report_sales_overview_by_ledger_group() {
  Vue.prototype.$mixpanel.track('report_sales_overview_by_ledger_group', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_sales_overview_by_ledger_group",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_sales_overview_by_ledger_group', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_sales_overview_by_ledger_group",
    'source' : localStorage.getItem('source')
  });
},
report_sales_overview_by_stock_group() {
  Vue.prototype.$mixpanel.track('report_sales_overview_by_stock_group', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_sales_overview_by_stock_group",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_sales_overview_by_stock_group', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_sales_overview_by_stock_group",
    'source' : localStorage.getItem('source')
  });
},
report_sales_overview_by_stock_category() {
  Vue.prototype.$mixpanel.track('report_sales_overview_by_stock_category', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_sales_overview_by_stock_category",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_sales_overview_by_stock_category', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_sales_overview_by_stock_category",
    'source' : localStorage.getItem('source')
  });
},

// Stock reports
report_stock_reports_in_stock() {
  Vue.prototype.$mixpanel.track('report_stock_reports_in_stock', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_stock_reports_in_stock",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_stock_reports_in_stock', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_stock_reports_in_stock",
    'source' : localStorage.getItem('source')
  });
},
report_stock_reports_not_in_stock() {
  Vue.prototype.$mixpanel.track('report_stock_reports_not_in_stock', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_stock_reports_not_in_stock",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_stock_reports_not_in_stock', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_stock_reports_not_in_stock",
    'source' : localStorage.getItem('source')
  });
},
report_stock_reports_negative_stock() {
  Vue.prototype.$mixpanel.track('report_stock_reports_negative_stock', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_stock_reports_negative_stock",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_stock_reports_negative_stock', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_stock_reports_negative_stock",
    'source' : localStorage.getItem('source')
  });
},
report_stock_reports_stock_group() {
  Vue.prototype.$mixpanel.track('report_stock_reports_stock_group', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_stock_reports_stock_group",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_stock_reports_stock_group', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_stock_reports_stock_group",
    'source' : localStorage.getItem('source')
  });
},
report_stock_reports_stock_category() {
  Vue.prototype.$mixpanel.track('report_stock_reports_stock_category', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_stock_reports_stock_category",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_stock_reports_stock_category', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_stock_reports_stock_category",
    'source' : localStorage.getItem('source')
  });
},

// Receivables
report_receivables_all_due() {
  Vue.prototype.$mixpanel.track('report_receivables_all_due', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_receivables_all_due",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_receivables_all_due', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_receivables_all_due",
    'source' : localStorage.getItem('source')
  });
},
report_receivables_due_today() {
  Vue.prototype.$mixpanel.track('report_receivables_due_today', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_receivables_due_today",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_receivables_due_today', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_receivables_due_today",
    'source' : localStorage.getItem('source')
  });
},
report_receivables_not_due() {
  Vue.prototype.$mixpanel.track('report_receivables_not_due', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_receivables_not_due",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_receivables_not_due', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_receivables_not_due",
    'source' : localStorage.getItem('source')
  });
},

// Parties
report_parties_all_customers() {
  Vue.prototype.$mixpanel.track('report_parties_all_customers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_parties_all_customers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_parties_all_customers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_parties_all_customers",
    'source' : localStorage.getItem('source')
  });
},
report_parties_all_suppliers() {
  Vue.prototype.$mixpanel.track('report_parties_all_suppliers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_parties_all_suppliers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_parties_all_suppliers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_parties_all_suppliers",
    'source' : localStorage.getItem('source')
  });
},
report_parties_ledger_report() {
  Vue.prototype.$mixpanel.track('report_parties_ledger_report', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_parties_ledger_report",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_parties_ledger_report', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_parties_ledger_report",
    'source' : localStorage.getItem('source')
  });
},

// Favourate icons Analytics
// Accounting Reports
report_favourate_accounting_reports_day_book() {
  Vue.prototype.$mixpanel.track('report_favourate_accounting_reports_day_book', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_accounting_reports_day_book",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_accounting_reports_day_book', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_accounting_reports_day_book",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_accounting_reports_expenses() {
  Vue.prototype.$mixpanel.track('report_favourate_accounting_reports_expenses', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_accounting_reports_expenses",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_accounting_reports_expenses', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_accounting_reports_expenses",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_accounting_reports_inactive_customers() {
  Vue.prototype.$mixpanel.track('report_favourate_accounting_reports_inactive_customers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_accounting_reports_inactive_customers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_accounting_reports_inactive_customers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_accounting_reports_inactive_customers",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_accounting_reports_inactive_items() {
  Vue.prototype.$mixpanel.track('report_favourate_accounting_reports_inactive_items', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_accounting_reports_inactive_items",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_accounting_reports_inactive_items', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_accounting_reports_inactive_items",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_accounting_reports_ledger_report() {
  Vue.prototype.$mixpanel.track('report_favourate_accounting_reports_ledger_report', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_accounting_reports_ledger_report",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_accounting_reports_ledger_report', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_accounting_reports_ledger_report",
    'source' : localStorage.getItem('source')
  });
},

// my entries
report_favourate_my_entries_my_vouchers() {
  Vue.prototype.$mixpanel.track('report_favourate_my_entries_my_vouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_my_entries_my_vouchers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_my_entries_my_vouchers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_my_entries_my_vouchers",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_my_entries_my_quotations() {
  Vue.prototype.$mixpanel.track('report_favourate_my_entries_my_quotations', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_my_entries_my_quotations",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_my_entries_my_quotations', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_my_entries_my_quotations",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_my_entries_my_eway_bills() {
  Vue.prototype.$mixpanel.track('report_favourate_my_entries_my_eway_bills', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_my_entries_my_eway_bills",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_my_entries_my_eway_bills', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_my_entries_my_eway_bills",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_my_entries_my_einvoices() {
  Vue.prototype.$mixpanel.track('report_favourate_my_entries_my_einvoices', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_my_entries_my_einvoices",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_my_entries_my_einvoices', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_my_entries_my_einvoices",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_my_entries_my_ledgers() {
  Vue.prototype.$mixpanel.track('report_favourate_my_entries_my_ledgers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_my_entries_my_ledgers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_my_entries_my_ledgers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_my_entries_my_ledgers",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_my_entries_my_stock_items() {
  Vue.prototype.$mixpanel.track('report_favourate_my_entries_my_stock_items', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_my_entries_my_stock_items",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_my_entries_my_stock_items', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_my_entries_my_stock_items",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_my_entries_tracking_report() {
  Vue.prototype.$mixpanel.track('report_favourate_my_entries_tracking_report', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_my_entries_tracking_report",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_my_entries_tracking_report', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_my_entries_tracking_report",
    'source' : localStorage.getItem('source')
  });
},

// Financial report
report_favourate_financial_reports_balance_sheet() {
   Vue.prototype.$mixpanel.track('report_favourate_financial_reports_balance_sheet', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_financial_reports_balance_sheet",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_financial_reports_balance_sheet', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_financial_reports_balance_sheet",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_financial_reports_profit_loss() {
  Vue.prototype.$mixpanel.track('report_favourate_financial_reports_profit_loss', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_financial_reports_profit_loss",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_financial_reports_profit_loss', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_financial_reports_profit_loss",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_financial_reports_trial_balance() {
   Vue.prototype.$mixpanel.track('report_favourate_financial_reports_trial_balance', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_financial_reports_trial_balance",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_financial_reports_trial_balance', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_financial_reports_trial_balance",
    'source' : localStorage.getItem('source')
  });
},

// Top reports
report_favourate_top_reports_top_customers() {
  Vue.prototype.$mixpanel.track('report_favourate_top_reports_top_customers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_top_reports_top_customers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_top_reports_top_customers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_top_reports_top_customers",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_top_reports_top_suppliers() {
   Vue.prototype.$mixpanel.track('report_favourate_top_reports_top_suppliers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_top_reports_top_suppliers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_top_reports_top_suppliers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_top_reports_top_suppliers",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_top_reports_items_sold_by_value() {
  Vue.prototype.$mixpanel.track('report_favourate_top_reports_items_sold_by_value', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_top_reports_items_sold_by_value",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_top_reports_items_sold_by_value', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_top_reports_items_sold_by_value",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_top_reports_items_purchased_by_value() {
  Vue.prototype.$mixpanel.track('report_favourate_top_reports_items_purchased_by_value', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_top_reports_items_purchased_by_value",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_top_reports_items_purchased_by_value', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_top_reports_items_purchased_by_value",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_top_reports_items_sold_by_qty() {
  Vue.prototype.$mixpanel.track('report_favourate_top_reports_items_sold_by_qty', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_top_reports_items_sold_by_qty",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_top_reports_items_sold_by_qty', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_top_reports_items_sold_by_qty",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_top_reports_items_purchased_by_qty() {
  Vue.prototype.$mixpanel.track('report_favourate_top_reports_items_purchased_by_qty', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_top_reports_items_purchased_by_qty",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_top_reports_items_purchased_by_qty', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_top_reports_items_purchased_by_qty",
    'source' : localStorage.getItem('source')
  });
},

// Sales Overview
report_favourate_sales_overview_by_month() {
  Vue.prototype.$mixpanel.track('report_favourate_sales_overview_by_month', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_sales_overview_by_month",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_sales_overview_by_month', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_sales_overview_by_month",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_sales_overview_by_bills() {
  Vue.prototype.$mixpanel.track('report_favourate_sales_overview_by_bills', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_sales_overview_by_bills",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_sales_overview_by_bills', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_sales_overview_by_bills",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_sales_overview_by_ledger() {
  Vue.prototype.$mixpanel.track('report_favourate_sales_overview_by_ledger', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_sales_overview_by_ledger",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_sales_overview_by_ledger', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_sales_overview_by_ledger",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_sales_overview_by_stock_item() {
  Vue.prototype.$mixpanel.track('report_favourate_sales_overview_by_stock_item', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_sales_overview_by_stock_item",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_sales_overview_by_stock_item', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_sales_overview_by_stock_item",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_sales_overview_by_voucher_type() {
  Vue.prototype.$mixpanel.track('report_favourate_sales_overview_by_voucher_type', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_sales_overview_by_voucher_type",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_sales_overview_by_voucher_type', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_sales_overview_by_voucher_type",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_sales_overview_by_ledger_group() {
   Vue.prototype.$mixpanel.track('report_favourate_sales_overview_by_ledger_group', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_sales_overview_by_ledger_group",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_sales_overview_by_ledger_group', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_sales_overview_by_ledger_group",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_sales_overview_by_stock_group() {
  Vue.prototype.$mixpanel.track('report_favourate_sales_overview_by_stock_group', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_sales_overview_by_stock_group",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_sales_overview_by_stock_group', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_sales_overview_by_stock_group",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_sales_overview_by_stock_category() {
   Vue.prototype.$mixpanel.track('report_favourate_sales_overview_by_stock_category', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_sales_overview_by_stock_category",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_sales_overview_by_stock_category', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_sales_overview_by_stock_category",
    'source' : localStorage.getItem('source')
  });
},

// Stock reports
report_favourate_stock_reports_in_stock() {
  Vue.prototype.$mixpanel.track('report_favourate_stock_reports_in_stock', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_stock_reports_in_stock",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_stock_reports_in_stock', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_stock_reports_in_stock",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_stock_reports_not_in_stock() {
   Vue.prototype.$mixpanel.track('report_favourate_stock_reports_not_in_stock', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_stock_reports_not_in_stock",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_stock_reports_not_in_stock', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_stock_reports_not_in_stock",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_stock_reports_negative_stock() {
  Vue.prototype.$mixpanel.track('report_favourate_stock_reports_negative_stock', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_stock_reports_negative_stock",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_stock_reports_negative_stock', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_stock_reports_negative_stock",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_stock_reports_stock_group() {
  Vue.prototype.$mixpanel.track('report_favourate_stock_reports_stock_group', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_stock_reports_stock_group",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_stock_reports_stock_group', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_stock_reports_stock_group",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_stock_reports_stock_category() {
  Vue.prototype.$mixpanel.track('report_favourate_stock_reports_stock_category', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_stock_reports_stock_category",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_stock_reports_stock_category', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_stock_reports_stock_category",
    'source' : localStorage.getItem('source')
  });
},

// Receivables
report_favourate_receivables_all_due() {
  Vue.prototype.$mixpanel.track('report_favourate_receivables_all_due', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_receivables_all_due",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_receivables_all_due', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_receivables_all_due",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_receivables_due_today() {
  Vue.prototype.$mixpanel.track('report_favourate_receivables_due_today', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_receivables_due_today",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_receivables_due_today', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_receivables_due_today",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_receivables_not_due() {
  Vue.prototype.$mixpanel.track('report_favourate_receivables_not_due', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_receivables_not_due",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_receivables_not_due', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_receivables_not_due",
    'source' : localStorage.getItem('source')
  });
},

// Parties
report_favourate_parties_all_customers() {
  Vue.prototype.$mixpanel.track('report_favourate_parties_all_customers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_parties_all_customers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_parties_all_customers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_parties_all_customers",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_parties_all_suppliers() {
  Vue.prototype.$mixpanel.track('report_favourate_parties_all_suppliers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_parties_all_suppliers",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_parties_all_suppliers', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_parties_all_suppliers",
    'source' : localStorage.getItem('source')
  });
},
report_favourate_parties_ledger_report() {
  Vue.prototype.$mixpanel.track('report_favourate_parties_ledger_report', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_parties_ledger_report",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'report_favourate_parties_ledger_report', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "report_favourate_parties_ledger_report",
    'source' : localStorage.getItem('source')
  });
},
setPaymentReminder() {
  Vue.prototype.$mixpanel.track('setPaymentReminder', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "setPaymentReminder",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'setPaymentReminder', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "setPaymentReminder",
    'source' : localStorage.getItem('source')
  });
},
sendPaymentReminder() {
  Vue.prototype.$mixpanel.track('sendPaymentReminder', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sendPaymentReminder",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'sendPaymentReminder', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "sendPaymentReminder",
    'source' : localStorage.getItem('source')
  });
},
schedulePaymentReminder() {
  Vue.prototype.$mixpanel.track('schedulePaymentReminder', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "schedulePaymentReminder",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'schedulePaymentReminder', {
    'customerId': localStorage.getItem('customerId'),
    'name': localStorage.getItem('customerfullName'),
    'companyId': localStorage.getItem('companyId'),
    'customerStatus': localStorage.getItem('customerStatus'),
    'className': "schedulePaymentReminder",
    'source' : localStorage.getItem('source')
  });
},
Change_Number_Mobile_button(mobilenumber){
  Vue.prototype.$mixpanel.track('Change_Number_Mobile_button', {
    'mobilenumber': mobilenumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Change_Number_Mobile_button",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Change_Number_Mobile_button', {
    'mobilenumber': mobilenumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Change_Number_Mobile_button",
    'source' : localStorage.getItem('source')
  });
},
Resend_Otp_Current_Profile(mobilenumber){
  Vue.prototype.$mixpanel.track('Resend_Otp_Current_Profile', {
     'mobilenumber': mobilenumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Resend_Otp_Current_Profile",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Resend_Otp_Current_Profile', {
     'mobilenumber': mobilenumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Resend_Otp_Current_Profile",
    'source' : localStorage.getItem('source')
  });
},
Otp_Failed_Current_Profile(mobilenumber){
  Vue.prototype.$mixpanel.track('Otp_Failed_Current_Profile', {
     'mobilenumber': mobilenumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Otp_Failed_Current_Profile",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Otp_Failed_Current_Profile', {
     'mobilenumber': mobilenumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Otp_Failed_Current_Profile",
    'source' : localStorage.getItem('source')
  });
},
Otp_Success_Current_Profile(mobilenumber){
  Vue.prototype.$mixpanel.track('Otp_Success_Current_Profile', {
     'mobilenumber': mobilenumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Otp_Success_Current_Profile",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Otp_Success_Current_Profile', {
     'mobilenumber': mobilenumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Otp_Success_Current_Profile",
    'source' : localStorage.getItem('source')
  });
},
Send_New_Mobile_Number_Profile(newMobileNumber){
  Vue.prototype.$mixpanel.track('Send_New_Mobile_Number_Profile', {
    'newMobileNumber': newMobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Send_New_Mobile_Number_Profile",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Send_New_Mobile_Number_Profile', {
    'newMobileNumber': newMobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Send_New_Mobile_Number_Profile",
    'source' : localStorage.getItem('source')
  });
},
Resend_Otp_New_Number_Profile(newMobileNumber){
  Vue.prototype.$mixpanel.track('Resend_Otp_New_Number_Profile', {
    'newMobileNumber': newMobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Resend_Otp_New_Number_Profile",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Resend_Otp_New_Number_Profile', {
    'newMobileNumber': newMobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Resend_Otp_New_Number_Profile",
    'source' : localStorage.getItem('source')
  });
},
Otp_Failed_New_Number_Profile(newMobileNumber){
  Vue.prototype.$mixpanel.track('Otp_Failed_New_Number_Profile', {
    'newMobileNumber': newMobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Otp_Failed_New_Number_Profile",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Otp_Failed_New_Number_Profile', {
    'newMobileNumber': newMobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Otp_Failed_New_Number_Profile",
    'source' : localStorage.getItem('source')
  });
},
Otp_Success_New_Number_Profile(newMobileNumber){
  Vue.prototype.$mixpanel.track('Otp_Success_New_Number_Profile', {
    'newMobileNumber': newMobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Otp_Success_New_Number_Profile",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Otp_Success_New_Number_Profile', {
    'newMobileNumber': newMobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Otp_Success_New_Number_Profile",
    'source' : localStorage.getItem('source')
  });
},
Success_Exchange_New_Number_Profile(newMobileNumber){
  Vue.prototype.$mixpanel.track('Success_Exchange_New_Number_Profile', {
    'newMobileNumber': newMobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Success_Exchange_New_Number_Profile",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Success_Exchange_New_Number_Profile', {
    'newMobileNumber': newMobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Success_Exchange_New_Number_Profile",
    'source' : localStorage.getItem('source')
  });
},
Success_Old_Number_Profile(mobilenumber){
  Vue.prototype.$mixpanel.track('Success_Old_Number_Profile', {
    'mobilenumber': mobilenumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Success_Old_Number_Profile",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Success_Old_Number_Profile', {
    'mobilenumber': mobilenumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Success_Old_Number_Profile",
    'source' : localStorage.getItem('source')
  });
},
Success_Exchange_Login_Button(){
  Vue.prototype.$mixpanel.track('Success_Exchange_Login_Button', {
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Success_Exchange_Login_Button",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Success_Exchange_Login_Button', {
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Success_Exchange_Login_Button",
    'source' : localStorage.getItem('source')
  });
},
Failed_Exchange_Number(newMobileNumber){
  Vue.prototype.$mixpanel.track('Failed_Exchange_Number', {
    'newMobileNumber': newMobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Failed_Exchange_Number",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Failed_Exchange_Number', {
    'newMobileNumber': newMobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Failed_Exchange_Number",
    'source' : localStorage.getItem('source')
  });
},
Edit_Number_button(newMobileNumber){
  Vue.prototype.$mixpanel.track('Edit_Number_button', {
    'newMobileNumber': newMobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Edit_Number_button",
    'source' : localStorage.getItem('source')
  });
  gtag('event', 'Edit_Number_button', {
    'newMobileNumber': newMobileNumber,
    'customerId': '',
    'name': '',
    'companyId': '',
    'customerStatus': '',
    'className': "Edit_Number_button",
    'source' : localStorage.getItem('source')
  });
},

};