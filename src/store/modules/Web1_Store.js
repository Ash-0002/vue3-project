const state = {
  Previous_Filter: 'All Voucher',
  User_Name: '',
  Parties_listing_page: 1,
  Parties_listing_itemsPerPage: 10,
  OnAccount_page: 1,
  OnAccount_itemsPerPage: 10,
  Parties_Page: 1,
  Parties_ItemsPerPage: 10,
  Filters: "All Voucher",
  Items_listing_page: 1,
  Items_listing_itemsPerPage: 10,
  Items_Page: 1,
  Items_ItemsPerPage: 10,
  Sales_month_page: 1,
  Sales_month_itemsPerPage: 10,
  Sales_Bill_page: 1,
  Sales_Bill_itemsPerPage: 10,
  Sales_Ledger_page: 1,
  Sales_Ledger_itemsPerPage: 10,
  Sales_StockItem_page: 1,
  Sales_StockItem_itemsPerPage: 10,
  StockGroup_page: 1,
  StockGroup_itemsPerPage: 10,
  StockCategory_page: 1,
  StockCategory_itemsPerPage: 10,
  CreditNote_Bill_page: 1,
  CreditNote_Bill_itemsPerPage: 10,
  Purchase_Bill_page: 1,
  Purchase_Bill_itemsPerPage: 10,
  Ledger_GroupLedger_page: 1,
  Ledger_GroupLedger_itemsPerPage: 10,
  Sales_StockGroup_page: 1,
  Sales_StockGroup_itemsPerPage: 10,
  Sales_Receipt_page: 1,
  Sales_Receipt_itemsPerPage: 10,
  Sales_Receipt_Bill_page: 1,
  Sales_Receipt_Bill_itemsPerPage: 10,
  Sales_Receivable_page: 1,
  Sales_Receivable_itemsPerPage: 10,
  Sales_SalesOrder_Bill_page: 1,
  Sales_SalesOrder_Bill_itemsPerPage: 10,
  Sales_SalesOrder_StockItem_page: 1,
  Sales_SalesOrder_StockItem_itemsPerPage: 10,
  Purchase_StockItem_page: 1,
  Purchase_StockItem_itemsPerPage: 10,
  Purchase_Ledger_page: 1,
  Purchase_Ledger_itemsPerPage: 10,
  DebitNote_Bill_page: 1,
  DebitNote_Bill_itemsPerPage: 10,
  Payment_Bill_page: 1,
  Payment_Bill_itemsPerPage: 10,
  Payment_Ledger_page: 1,
  Payment_Ledger_itemsPerPage: 10,
  Payables_page: 1,
  Payables_itemsPerPage: 10,
  PurchaseOrder_Bill_page: 1,
  PurchaseOrder_Bill_itemsPerPage: 10,
  PurchaseOrder_Ledger_page: 1,
  PurchaseOrder_Ledger_itemsPerPage: 10,
  MyVouchers_page: 1,
  MyVouchers_itemsPerPage: 10,
  InactiveCustomers_page: 1,
  InactiveCustomers_itemsPerPage: 10,
  InactiveItems_page: 1,
  InactiveItems_itemsPerPage: 10,
  FilterForReceivables: "All Receivables"
};

const mutations = {

  SET_PREV_FILTER(state, newValue) {
    state.Previous_Filter = newValue;
  },
  SET_USER_NAME(state, newValue) {
    state.User_Name = newValue;
  },
  SET_PARTIES_LISTING_PAGE(state, newValue) {
    state.Parties_listing_page = newValue;
  },
  SET_PARTIES_LISTING_ITEMSPERPAGE(state, newValue) {
    state.Parties_listing_itemsPerPage = newValue;
  },
  SET_ONACCOUNT_PAGE(state, newValue) {
    state.OnAccount_page = newValue;
  },
  SET_ONACCOUNT_ITEMSPERPAGE(state, newValue) {
    state.OnAccount_itemsPerPage = newValue;
  },
  SET_PARTIES_PAGE(state, newValue) {
    state.Parties_Page = newValue;
  },
  SET_PARTIES_ITEMSPERPAGE(state, newValue) {
    state.Parties_ItemsPerPage = newValue;
  },
  RESET_PARTIES_LISTING_STATE(state) {
    state.Parties_listing_page = 1;
    state.Parties_listing_itemsPerPage = 10;
  },
  RESET_PARTIES_STATE(state) {
    state.Parties_Page = 1;
    state.Parties_ItemsPerPage = 10;
  },
  RESET__OnAccount_STATE(state) {
    state.OnAccount_page = 1;
    state.OnAccount_itemsPerPage = 10;
  },

  SELECT_FILTER(state, newValue) {
    state.Filters = newValue;
  },
  SELECT_ITEMS_LISTING_PAGE(state, newValue) {
    state.Items_listing_page = newValue;
  },
  SET_ITEMS_LISTING_ITEMSPERPAGE(state, newValue) {
    state.Items_listing_itemsPerPage = newValue;
  },
  SET_ITEMS_PAGE(state, newValue) {
    state.Items_Page = newValue;
  },
  SET_ITEMS_ITEMSPERPAGE(state, newValue) {
    state.Items_ItemsPerPage = newValue;
  },
  RESET_ITEMS_LISTING_STATE(state) {
    state.Items_listing_page = 1;
    state.Items_listing_itemsPerPage = 10;
  },
  RESET_ITEMS_STATE(state) {
    state.Items_Page = 1;
    state.Items_ItemsPerPage = 10;
  },
  SET_SALES_MONTH_PAGE(state, newValue) {
    state.Sales_month_page = newValue
  },
  SET_SALES_MONTH_ITEMSPERPAGE(state, newValue) {
    state.Sales_month_itemsPerPage = newValue
  },
  SET_SALES_BILL_PAGE(state, newValue) {
    state.Sales_Bill_page = newValue
  },
  SET_SALES_BILL_ITEMSPERPAGE(state, newValue) {
    state.Sales_Bill_itemsPerPage = newValue
  },
  SET_SALES_LEDGER_PAGE(state, newValue) {
    state.Sales_Ledger_page = newValue
  },
  SET_SALES_LEDGER_ITEMSPERPAGE(state, newValue) {
    state.Sales_Ledger_itemsPerPage = newValue
  },
  SET_SALES_STOCKITEM_PAGE(state, newValue) {
    state.Sales_StockItem_page = newValue
  },
  SET_SALES_STOCKITEM_ITEMSPERPAGE(state, newValue) {
    state.Sales_StockItem_itemsPerPage = newValue
  },
  SET_STOCKGROUP_PAGE(state, newValue) {
    state.StockGroup_page = newValue
  },
  SET_STOCKGROUP_ITEMSPERPAGE(state, newValue) {
    state.StockGroup_itemsPerPage = newValue
  },
  SET_STOCKCATEGORY_PAGE(state, newValue) {
    state.StockCategory_page = newValue
  },
  SET_STOCKCATEGORY_ITEMSPERPAGE(state, newValue) {
    state.StockCategory_itemsPerPage = newValue
  },
  RESET_STOCKCATEGORY_STATE(state) {
    state.StockCategory_page = 1;
    state.StockCategory_itemsPerPage = 10
  },
  RESET_STOCKGROUP_STATE(state) {
    state.StockGroup_page = 1;
    state.StockGroup_itemsPerPage = 10;
  },
  RESET_SALES_STATE(state) {
    state.Sales_month_page = 1,
      state.Sales_month_itemsPerPage = 10,
      state.Sales_Bill_page = 1,
      state.Sales_Bill_itemsPerPage = 10,
      state.Sales_Ledger_page = 1,
      state.Sales_Ledger_itemsPerPage = 10,
      state.Sales_StockItem_page = 1,
      state.Sales_StockItem_itemsPerPage = 10
  },
  SET_CREDITNOTE_BILL_PAGE(state, newValue) {
    state.CreditNote_Bill_page = newValue
  },
  SET_CREDITNOTE_BILL_ITEMSPERPAGE(state, newValue) {
    state.CreditNote_Bill_itemsPerPage = newValue
  },
  RESET_CREDITNOTE_STATE(state) {
    state.CreditNote_Bill_itemsPerPage = 10
    state.CreditNote_Bill_page = 1
  },
  RESET_RECEIPT_STATE(state) {
    state.Sales_Receipt_page = 1,
      state.Sales_Receipt_itemsPerPage = 10,
      state.Sales_Receipt_Bill_page = 1,
      state.Sales_Receipt_Bill_itemsPerPage = 10
  },
  SET_PURCHASE_BILL_PAGE(state, newValue) {
    state.Purchase_Bill_page = newValue
  },
  SET_PURCHASE_BILL_ITEMSPERPAGE(state, newValue) {
    state.Purchase_Bill_itemsPerPage = newValue
  },
  SET_LEDGER_GROUPLEDGER_PAGE(state, newValue) {
    state.Ledger_GroupLedger_page = newValue
  },
  SET_LEDGER_GROUPLEDGER_ITEMSPERPAGE(state, newValue) {
    state.Ledger_GroupLedger_itemsPerPage = newValue
  },
  RESET_LEDGER_GROUPLEDGER_STATE(state) {
    state.Ledger_GroupLedger_page = 1;
    state.Ledger_GroupLedger_itemsPerPage = 10;
  },
  SET_SALES_STOCKGROUP_PAGE(state, newValue) {
    state.Sales_StockGroup_page = newValue
  },
  SET_SALES_STOCKGROUP_ITEMSPERPAGE(state, newValue) {
    state.Sales_StockGroup_itemsPerPage = newValue
  },
  SET_SALES_RECEIPT_PAGE(state, newValue) {
    state.Sales_Receipt_page = newValue
  },
  SET_SALES_RECEIPT_ITEMSPERPAGE(state, newValue) {
    state.Sales_Receipt_itemsPerPage = newValue
  },
  SET_SALES_RECEIPT_BILL_PAGE(state, newValue) {
    state.Sales_Receipt_Bill_page = newValue
  },
  SET_SALES_RECEIPT_BILL_ITEMSPERPAGE(state, newValue) {
    state.Sales_Receipt_Bill_itemsPerPage = newValue
  },
  SET_SALES_RECEIVABLE_PAGE(state, newValue) {
    state.Sales_Receivable_page = newValue
  },
  SET_SALES_RECEIVABLE_ITEMSPERPAGE(state, newValue) {
    state.Sales_Receivable_itemsPerPage = newValue
  },
  RESET_SALES_RECEIVABLE_STATE(state) {
    state.Sales_Receivable_page = 1;
    state.Sales_Receivable_itemsPerPage = 10;

  },
  RESET_SALES_SALESORDER_STATE(state) {
    state.Sales_SalesOrder_Bill_page = 1,
      state.Sales_SalesOrder_Bill_itemsPerPage = 10,
      state.Sales_SalesOrder_StockItem_page = 1,
      state.Sales_SalesOrder_StockItem_itemsPerPage = 10
  },
  SET_SALES_SALESORDER_BILL_PAGE(state, newValue) {
    state.Sales_SalesOrder_Bill_page = newValue
  },
  SET_SALES_SALESORDER_BILL_ITEMSPERPAGE(state, newValue) {
    state.Sales_SalesOrder_Bill_itemsPerPage = newValue
  },
  SET_SALES_SALESORDER_STOCKITEM_PAGE(state, newValue) {
    state.Sales_SalesOrder_StockItem_page = newValue
  },
  SET_SALES_SALESORDER_STOCKITEM_ITEMSPERPAGE(state, newValue) {
    state.Sales_SalesOrder_StockItem_itemsPerPage = newValue
  },
  SET_PURCHASE_STOCKITEM_PAGE(state, newValue) {
    state.Purchase_StockItem_page = newValue
  },
  SET_PURCHASE_STOCKITEM_ITEMSPERPAGE(state, newValue) {
    state.Purchase_StockItem_itemsPerPage = newValue
  },
  SET_PURCHASE_LEDGER_PAGE(state, newValue) {
    state.Purchase_Ledger_page = newValue
  },
  SET_PURCHASE_LEDGER_ITEMSPERPAGE(state, newValue) {
    state.Purchase_Ledger_itemsPerPage = newValue
  },
  SET_DEBITNOTE_BILL_PAGE(state, newValue) {
    state.DebitNote_Bill_page = newValue
  },
  SET_DEBITNOTE_BILL_ITEMSPERPAGE(state, newValue) {
    state.DebitNote_Bill_itemsPerPage = newValue
  },
  SET_PAYMENT_BILL_PAGE(state, newValue) {
    state.Payment_Bill_page = newValue
  },
  SET_PAYMENT_BILL_ITEMSPERPAGE(state, newValue) {
    state.Payment_Bill_itemsPerPage = newValue
  },
  SET_PAYMENT_LEDGER_PAGE(state, newValue) {
    state.Payment_Ledger_page = newValue
  },
  SET_PAYMENT_LEDGER_ITEMSPERPAGE(state, newValue) {
    state.Payment_Ledger_itemsPerPage = newValue
  },
  SET_PAYABLES_PAGE(state, newValue) {
    state.Payables_page = newValue
  },
  SET_PAYABLES_ITEMSPERPAGE(state, newValue) {
    state.Payables_itemsPerPage = newValue
  },
  SET_PURCHASEORDER_BILL_PAGE(state, newValue) {
    state.PurchaseOrder_Bill_page = newValue
  },
  SET_PURCHASEORDER_BILL_ITEMSPERPAGE(state, newValue) {
    state.PurchaseOrder_Bill_itemsPerPage = newValue
  },
  SET_PURCHASEORDER_LEDGER_PAGE(state, newValue) {
    state.PurchaseOrder_Ledger_page = newValue
  },
  SET_PURCHASEORDER_LEDGER_ITEMSPERPAGE(state, newValue) {
    state.PurchaseOrder_Ledger_itemsPerPage = newValue
  },
  SET_MYVOUCHERS_PAGE(state, newValue) {
    state.MyVouchers_page = newValue
  },
  SET_MYVOUCHERS_ITEMSPERPAGE(state, newValue) {
    state.MyVouchers_itemsPerPage = newValue
  },
  SET_INACTIVECUSTOMERS_PAGE(state, newValue) {
    state.InactiveCustomers_page = newValue
  },
  SET_INACTIVECUSTOMERS_ITEMSPERPAGE(state, newValue) {
    state.InactiveCustomers_itemsPerPage = newValue
  },
  SET_INACTIVEITEMS_PAGE(state, newValue) {
    state.InactiveItems_page = newValue
  },
  SET_INACTIVEITEMS_ITEMSPERPAGE(state, newValue) {
    state.InactiveItems_itemsPerPage = newValue
  },
  RESET_PURCHASE_STATE(state) {
    state.Purchase_Bill_page = 1;
    state.Purchase_Bill_itemsPerPage = 10;
    state.Purchase_StockItem_page = 1;
    state.Purchase_StockItem_itemsPerPage = 10;
    state.Purchase_Ledger_page = 1;
    state.Purchase_Ledger_itemsPerPage = 10;
  },
  RESET_DEBITNOTE_STATE(state) {
    state.DebitNote_Bill_page = 1;
    state.DebitNote_Bill_itemsPerPage = 10;
  },
  RESET_PAYMENT_STATE(state) {
    state.Payment_Bill_page = 1;
    state.Payment_Bill_itemsPerPage = 10;
    state.Payment_Ledger_page = 1;
    state.Payment_Ledger_itemsPerPage = 10;
  },
  RESET_PURCHASEORDER_STATE(state) {
    state.PurchaseOrder_Bill_page = 1;
    state.PurchaseOrder_Bill_itemsPerPage = 10;
    state.PurchaseOrder_Ledger_page = 1;
    state.PurchaseOrder_Ledger_itemsPerPage = 10;
  },
  RESET_DEBITNOTE_STATE(state) {
    state.DebitNote_Bill_page = 1;
    state.DebitNote_Bill_itemsPerPage = 10;
  },
  RESET_PAYABLES_STATE(state) {
    state.Payables_page = 1;
    state.Payables_itemsPerPage = 10;
  },
  RESET_REPORTS_STATE(state) {
    state.MyVouchers_page = 1;
    state.MyVouchers_itemsPerPage = 10;
    state.InactiveCustomers_page = 1;
    state.InactiveCustomers_itemsPerPage = 10;
    state.InactiveItems_page = 1;
    state.InactiveItems_itemsPerPage = 10;
  },
  
  SET_FILTEER_FOR_RECEIVABLES(state, newVal){
    state.FilterForReceivables = newVal
  }
};
const actions = {
  setPrevFilter({ commit }, payload) {
    commit("SET_PREV_FILTER", payload);
  },
  setUserName({ commit }, payload) {
    commit("SET_USER_NAME", payload);
  },
  setPartiesListingPage({ commit }, payload) {
    commit("SET_PARTIES_LISTING_PAGE", payload);
  },
  setPartiesListingItemsPerPage({ commit }, payload) {
    commit("SET_PARTIES_LISTING_ITEMSPERPAGE", payload);
  },
  setOnAccountPage({ commit }, payload) {
    commit("SET_ONACCOUNT_PAGE", payload);
  },
  setOnAccountPerPage({ commit }, payload) {
    commit("SET_ONACCOUNT_ITEMSPERPAGE", payload);
  },
  setPartiesPage({ commit }, payload) {
    commit("SET_PARTIES_PAGE", payload);
  },
  setPartiesItemsPerPage({ commit }, payload) {
    commit("SET_PARTIES_ITEMSPERPAGE", payload);
  },
  resetPartiesListingState({ commit }) {
    commit("RESET_PARTIES_LISTING_STATE");
  },
  resetPartiesState({ commit }) {
    commit("RESET_PARTIES_STATE");
  },
  resetOnAccountState({ commit }) {
    commit("RESET__OnAccount_STATE");
  },
  selectFilter({ commit }, payload) {
    commit("SELECT_FILTER", payload);
  },
  setItemsListingPage({ commit }, payload) {
    commit("SELECT_ITEMS_LISTING_PAGE", payload);
  },
  setItemsListingItemsPerPage({ commit }, payload) {
    commit("SET_ITEMS_LISTING_ITEMSPERPAGE", payload);
  },
  setItemsPage({ commit }, payload) {
    commit("SET_ITEMS_PAGE", payload);
  },
  setItemsItemsPerPage({ commit }, payload) {
    commit("SET_ITEMS_ITEMSPERPAGE", payload);
  },
  resetItemsState({ commit }) {
    commit("RESET_ITEMS_STATE");
  },
  resetItemsListingState({ commit }) {
    commit("RESET_ITEMS_LISTING_STATE");
  },
  setSalesMonthPage({ commit }, payload) {
    commit("SET_SALES_MONTH_PAGE", payload)
  },
  setSalesMonthItemsPerPage({ commit }, payload) {
    commit("SET_SALES_MONTH_ITEMSPERPAGE", payload)
  },
  setSalesBillPage({ commit }, payload) {
    commit("SET_SALES_BILL_PAGE", payload)
  },
  setSalesBillItemsPerPage({ commit }, payload) {
    commit("SET_SALES_BILL_ITEMSPERPAGE", payload)
  },
  setSalesLedgerPage({ commit }, payload) {
    commit("SET_SALES_LEDGER_PAGE", payload)
  },
  setSalesLedgerItemsPerPage({ commit }, payload) {
    commit("SET_SALES_LEDGER_ITEMSPERPAGE", payload)
  },
  setSalesStockItemPage({ commit }, payload) {
    commit("SET_SALES_STOCKITEM_PAGE", payload)
  },
  setSalesStockItemItemsPerPage({ commit }, payload) {
    commit("SET_SALES_STOCKITEM_ITEMSPERPAGE", payload)
  },
  setStockGroupPage({ commit }, payload) {
    commit("SET_STOCKGROUP_PAGE", payload)
  },
  setStockGroupItemsPerPage({ commit }, payload) {
    commit("SET_STOCKGROUP_ITEMSPERPAGE", payload)
  },
  setStockCategoryPage({ commit }, payload) {
    commit("SET_STOCKCATEGORY_PAGE", payload)
  },
  setStockCategoryItemsPerPage({ commit }, payload) {
    commit("SET_STOCKCATEGORY_ITEMSPERPAGE", payload)
  },
  resetStockCategoryState({ commit }) {
    commit("RESET_STOCKCATEGORY_STATE");
  },
  resetStockGroupState({ commit }) {
    commit("RESET_STOCKGROUP_STATE");
  },
  resetSalesState({ commit }) {
    commit("RESET_SALES_STATE")
  },
  setCreditNoteBillPage({ commit }, payload) {
    commit("SET_CREDITNOTE_BILL_PAGE", payload)
  },
  setCreditNoteBillItemsPerPage({ commit }, payload) {
    commit("SET_CREDITNOTE_BILL_ITEMSPERPAGE", payload)
  },
  resetCreditNoteState({ commit }) {
    commit("RESET_CREDITNOTE_STATE");
  },
  resetReceiptState({ commit }) {
    commit("RESET_RECEIPT_STATE");
  },
  setPurchaseBillPage({ commit }, payload) {
    commit("SET_PURCHASE_BILL_PAGE", payload)
  },
  setPurchaseBillItemsPerPage({ commit }, payload) {
    commit("SET_PURCHASE_BILL_ITEMSPERPAGE", payload)
  },
  setLedgerGroupLedgerPage({ commit }, payload) {
    commit("SET_LEDGER_GROUPLEDGER_PAGE", payload)
  },
  setLedgerGroupLedgerItemsPerPage({ commit }, payload) {
    commit("SET_LEDGER_GROUPLEDGER_ITEMSPERPAGE", payload)
  },
  resetLedgerGroupLedgerState({ commit }) {
    commit("RESET_LEDGER_GROUPLEDGER_STATE")
  },
  setSalesStockGroupPage({ commit }, payload) {
    commit("SET_SALES_STOCKGROUP_PAGE", payload)
  },
  setSalesStockGroupItemsPerPage({ commit }, payload) {
    commit("SET_SALES_STOCKGROUP_ITEMSPERPAGE", payload)
  },
  setSalesReceiptPage({ commit }, payload) {
    commit("SET_SALES_RECEIPT_PAGE", payload)
  },
  setSalesReceiptItemsPerPage({ commit }, payload) {
    commit("SET_SALES_RECEIPT_ITEMSPERPAGE", payload)
  },
  setSalesReceiptBillPage({ commit }, payload) {
    commit("SET_SALES_RECEIPT_BILL_PAGE", payload)
  },
  setSalesReceiptBillItemsPerPage({ commit }, payload) {
    commit("SET_SALES_RECEIPT_BILL_ITEMSPERPAGE", payload)
  },
  setSalesReceivablePage({ commit }, payload) {
    commit("SET_SALES_RECEIVABLE_PAGE", payload)
  },
  setSalesReceivableItemsPerPage({ commit }, payload) {
    commit("SET_SALES_RECEIVABLE_ITEMSPERPAGE", payload)
  },
  resetSalesReceivableState({ commit }) {
    commit("RESET_SALES_RECEIVABLE_STATE")
  },
  resetSalesSalesOrderState({ commit }) {
    commit("RESET_SALES_SALESORDER_STATE")
  },
  setSalesSalesOrderBillPage({ commit }, payload) {
    commit("SET_SALES_SALESORDER_BILL_PAGE", payload)
  },
  setSalesSalesOrderBillItemsPerPage({ commit }, payload) {
    commit("SET_SALES_SALESORDER_BILL_ITEMSPERPAGE", payload)
  },
  setSalesSalesOrderStockItemPage({ commit }, payload) {
    commit("SET_SALES_SALESORDER_STOCKITEM_PAGE", payload)
  },
  setSalesSalesOrderStockItemItemsPerPage({ commit }, payload) {
    commit("SET_SALES_SALESORDER_STOCKITEM_ITEMSPERPAGE", payload)
  },
  setPurchaseStockItemPage({ commit }, payload) {
    commit("SET_PURCHASE_STOCKITEM_PAGE", payload)
  },
  setPurchaseStockItemItemsPerPage({ commit }, payload) {
    commit("SET_PURCHASE_STOCKITEM_ITEMSPERPAGE", payload)
  },
  setPurchaseLedgerPage({ commit }, payload) {
    commit("SET_PURCHASE_LEDGER_PAGE", payload)
  },
  setPurchaseLedgerItemsPerPage({ commit }, payload) {
    commit("SET_PURCHASE_LEDGER_ITEMSPERPAGE", payload)
  },
  setDebitNoteBillPage({ commit }, payload) {
    commit("SET_DEBITNOTE_BILL_PAGE", payload)
  },
  setDebitNoteBillItemsPerPage({ commit }, payload) {
    commit("SET_DEBITNOTE_BILL_ITEMSPERPAGE", payload)
  },
  setPaymentBillPage({ commit }, payload) {
    commit("SET_PAYMENT_BILL_PAGE", payload)
  },
  setPaymentBillItemsPerPage({ commit }, payload) {
    commit("SET_PAYMENT_BILL_ITEMSPERPAGE", payload)
  },
  setPaymentLedgerPage({ commit }, payload) {
    commit("SET_PAYMENT_LEDGER_PAGE", payload)
  },
  setPaymentLedgerItemsPerPage({ commit }, payload) {
    commit("SET_PAYMENT_LEDGER_ITEMSPERPAGE", payload)
  },
  setPayablesPage({ commit }, payload) {
    commit("SET_PAYABLES_PAGE", payload)
  },
  setPayablesItemsPerPage({ commit }, payload) {
    commit("SET_PAYABLES_ITEMSPERPAGE", payload)
  },
  setPurchaseOrderBillPage({ commit }, payload) {
    commit("SET_PURCHASEORDER_BILL_PAGE", payload)
  },
  setPurchaseOrderBillItemsPerPage({ commit }, payload) {
    commit("SET_PURCHASEORDER_BILL_ITEMSPERPAGE", payload)
  },
  setPurchaseOrderLedgerPage({ commit }, payload) {
    commit("SET_PURCHASEORDER_LEDGER_PAGE", payload)
  },
  setPurchaseOrderLedgerItemsPerPage({ commit }, payload) {
    commit("SET_PURCHASEORDER_LEDGER_ITEMSPERPAGE", payload)
  },
  setMyVouchersPage({ commit }, payload) {
    commit("SET_MYVOUCHERS_PAGE", payload)
  },
  setMyVouchersItemsPerPage({ commit }, payload) {
    commit("SET_MYVOUCHERS_ITEMSPERPAGE", payload)
  },
  setInactiveCustomersPage({ commit }, payload) {
    commit("SET_INACTIVECUSTOMERS_PAGE", payload)
  },
  setInactiveCustomersItemsPerPage({ commit }, payload) {
    commit("SET_INACTIVECUSTOMERS_ITEMSPERPAGE", payload)
  },
  setInactiveItemsPage({ commit }, payload) {
    commit("SET_INACTIVEITEMS_PAGE", payload)
  },
  setInactiveItemsItemsPerPage({ commit }, payload) {
    commit("SET_INACTIVEITEMS_ITEMSPERPAGE", payload)
  },
  resetPurchaseState({ commit }) {
    commit("RESET_PURCHASE_STATE");
  },
  resetDebitNoteState({ commit }) {
    commit("RESET_DEBITNOTE_STATE");
  },
  resetPaymentState({ commit }) {
    commit("RESET_PAYMENT_STATE");
  },
  resetPurchaseOrderState({ commit }) {
    commit("RESET_PURCHASEORDER_STATE");
  },
  resetPayablesState({ commit }) {
    commit("RESET_PAYABLES_STATE");
  },
  resetReportsState({ commit }) {
    commit("RESET_REPORTS_STATE");
  },
  setFilterForReceivables({commit}, payload){
    commit("SET_FILTEER_FOR_RECEIVABLES", payload)
    console.log("web store console", payload)
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
