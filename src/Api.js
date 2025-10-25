/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
import axios from "axios";
if (window.location.origin == "https://webapp.livekeeping.com") {
  axios.defaults.baseURL = "https://api.livekeeping.com/v6/";
  var goApiAxios = axios.create({
    // baseURL: "https://devgoapi.livekeeping.com/",
    baseURL: "https://goapi.livekeeping.com/v1/",
  });
  var NewVersionAxios = axios.create({
    baseURL: "https://goapi.livekeeping.com/v2/",
  });
  let server = "Prod"
  localStorage.setItem("server", server)

} else if (window.location.origin == "https://devwebapp.livekeeping.com") {
  axios.defaults.baseURL = "https://devapi.livekeeping.com/v6/";
  var goApiAxios = axios.create({
    baseURL: "https://devgoapi.livekeeping.com/v1/",
    // baseURL: "https://goapi.livekeeping.com/",

  });
  var NewVersionAxios = axios.create({
    baseURL: "https://devgoapi.livekeeping.com/v2/",
  });
  var backupApiAxios = axios.create({
    baseURL: "https://devgoapi.livekeeping.com/v2/",
  });
  let server = "Dev"
  localStorage.setItem("server", server)
} else {
  axios.defaults.baseURL = "https://devapi.livekeeping.com/v6/";
  var goApiAxios = axios.create({
    baseURL: "https://devgoapi.livekeeping.com/v1/",
    // baseURL: "https://goapi.livekeeping.com/",
  });
  var NewVersionAxios = axios.create({
    baseURL: "https://devgoapi.livekeeping.com/v2/",
  });
  let server = "Dev"
  localStorage.setItem("server", server)
}




//  axios.defaults.baseURL = "https://devapi.livekeeping.com/v6/";
export default {
  // getPosts() {
  //   axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
  //   return axios.get("/posts");
  // },

  // getPost(id) {
  //   axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
  //   return axios.get("/posts/" + id);
  // },

  // getPhotos() {
  //   axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
  //   return axios.get("/photos");
  // },

  // loginWithOTP(data, headers) {
  //   return axios.post("/Login/loginwithOTP", data, { headers });
  // },
  // verifyOTP(data, headers) {
  //   return axios.post("/auth/verifyOTP", data, { headers });
  // },
  //gavaskar --for optional voucher 
  getSubUsers(data, headers) {
    return goApiAxios.post("/customer/getSubUsers", data, { headers });
  },
  removeSubUser(data, headers) {
    return goApiAxios.post("/customer/removeSubUser", data, { headers });
  },
  addUser(data, headers) {
    return goApiAxios.post("/customer/allocateSubUser", data, { headers });
  },
  addPermissions(data, headers) {
    return goApiAxios.post("/permissions/addPermissions", data, { headers });
  },
  removePermissions(data, headers) {
    return goApiAxios.post("/permissions/removePermissions", data, { headers });
  },
  getPermissions(data, headers) {
    return goApiAxios.post("/permissions/getPermissions", data, { headers });
  },
  addCustomerForSubUser(data, headers) {
    return goApiAxios.post("customer/addCustomerForSubUser", data, { headers });
  },

  getCityByPincode(data, headers) {
    return goApiAxios.post("/eWay/getCityByPincode", data, { headers });
  },

  updateUserPermission(data, headers) {
    return goApiAxios.post("/permissions/updatePermissions", data, { headers });
  },
  getCompany(data, headers) {
    // return axios.post("/Companies/getCompaniesByCustomerId", data, { headers });
    return goApiAxios.post("/companies/getCompanies", data, { headers });
  },
  getGSTNumberDetails(data, headers) {
    return goApiAxios.post("/verifyGstNo", data, { headers });
  },
  getCompanyBackupData(data, headers) {
    return NewVersionAxios.post("/companies/getCompanyBackupData", data, { headers })
  },
  getVoucherTypesV2(data, headers) {
    return goApiAxios.post("/vouchers/getVoucherTypesWebV2", data, { headers });

  },
  getcustomerDetailsGo(data, headers) {
    return goApiAxios.post("/customer/getCustomer", data, { headers });
  },
  updateQuickActionFavourate(data, headers) {
    return goApiAxios.post("/customer/updateQuickActionsFav", data, { headers });
  },
  getLedgerByIdGo(data, headers) {
    return goApiAxios.post("/ledgers/getLedger", data, { headers });
  },
  // getItemsByCompanyId(data, headers) {
  //   return axios.post("/Items/getStockItemsByCompanyId", data, { headers });
  // },
  // // getItemsByCompanyIdGo(data, headers) {
  // //   return goApiAxios.post("/stockItems/getStockItems", data, { headers });
  // // },
  // getLedgerGroupsByCompanyId(data, headers) {
  //   return axios.post("/ledgergroups/getLedgerGroups", data, { headers });
  // },
  // addLedger(data, headers) {
  //   return axios.post("/Ledgers/addLedger", data, { headers });
  // },
  addLedgerGo(data, headers) {
    return goApiAxios.post("ledgersSync/addMyLedger", data, { headers });
  },
  // getVouchersbyLedgerId(data, headers) {
  //   return axios.post("/Vouchers/getVouchersbyLedgerId", data, { headers });
  // },
  getVouchersGo(data, headers) {
    return goApiAxios.post("vouchers/getVouchers", data, { headers });
  },
  // updatecustomer(data, headers) {
  //   return axios.post("/Customers/updateCustomer", data, { headers });
  // },
  updatecustomer(data, headers) {
    return goApiAxios.post("/customer/updateCustomer", data, { headers });
  },
  // getItemsGroupsByCompanyId(data, headers) {
  //   return axios.post("/Itemgroups/getStockItemsGroupsbyCompanyId", data, {
  //     headers,
  //   });
  // },
  getItemsGroupsByCompanyIdGo(data, headers) {
    return goApiAxios.post("/stockGroups/getStockGroups", data, {
      headers,
    });
  },
  // getItemsCategoriesByCompanyId(data, headers) {
  //   return axios.post(
  //     "/Itemcategories/getStockItemsCategoriesByCompanyId",
  //     data,
  //     { headers }
  //   );
  // },
  getItemsCategoriesByCompanyIdGo(data, headers) {
    return goApiAxios.post(
      "/stockCategories/getStockCategories",
      data,
      { headers }
    );
  },
  // getVouchersByStockId(data, headers) {
  //   return axios.post("/Vouchers/getVouchersByStockId", data, { headers });
  // },
  getVouchersByStockIdGo(data, headers) {
    return goApiAxios.post("/vouchers/getVouchers", data, { headers });
  },
  // getUnitsByCompanyId(data, headers) {
  //   return axios.post("/Units/getUnitsByCompanyId", data, { headers });
  // },
  getUnitsByCompanyIdGo(data, headers) {
    return goApiAxios.post("/units/getUnits", data, { headers });
  },
  // addItem(data, headers) {
  //   return axios.post("/Items/addStockItem", data, { headers });
  // },
  addItemGo(data, headers) {
    return goApiAxios.post("/stockItemsSync/addMyStockItem", data, { headers });
  },
  // getItemById(data, headers) {
  //   return axios.post("/Items/getStockItemById", data, { headers });
  // },
  getItemByIdGo(data, headers) {
    return goApiAxios.post("/stockItems/getStockItem", data, { headers });
  },
  // getSubUsersByCustomerId(data, headers) {
  //   return axios.post("/Subusers/getSubUsersByCustomerId", data, { headers });
  // },
  // getVoucherDetails(data, headers) {
  //   return axios.post("/Vouchers/getVoucherById", data, { headers });
  // },
  getVoucherDetailsGo(data, headers) {
    return goApiAxios.post("/vouchers/getVoucher", data, { headers });
  },
  getVoucherDetailsGoForV2(data, headers) {
    return NewVersionAxios.post("/vouchers/getVoucher", data, { headers });
  },
  // getPDFForVoucherDetails(data, headers) {
  //   return axios.post("/PDFs/getPDFForVoucherDetails", data, { headers });
  // },
  getPDFForVoucherDetailsGo(data, headers) {
    return goApiAxios.post("/pdf/getVoucherPDF", data, { headers });
  },
  // getItemsByStockParentId(data, headers) {
  //   return axios.post("/Items/getItemsByStockGroupId", data, { headers });
  // },
  getItemsByStockParentIdGo(data, headers) {
    return goApiAxios.post("/stockItems/getStockItems", data, { headers });
  },
  // getItemsByStockCategoryId(data, headers) {
  //   return axios.post("/Items/getStockItemsByStockCategoryId", data, {
  //     headers,
  //   });
  // },
  getItemsByStockCategoryIdGo(data, headers) {
    return goApiAxios.post("/stockItems/getStockItems", data, {
      headers,
    });
  },
  // getLedgersSyncByCompanyId(data, headers) {
  //   return axios.post("/Ledgers/getLedgersSyncByCompanyId", data, { headers });
  // },
  getMyLedgers(data, headers) {
    return goApiAxios.post("/ledgersSync/getMyLedgers", data, { headers });
  },
  // getDayBookReport(data, headers) {
  //   return axios.post("/Reports/getDayBookReport", data, { headers });
  // },
  // getExpensesReport(data, headers) {
  //   return axios.post("/Reports/getExpensesReport", data, { headers });
  // },
  getExpensesReportGo(data, headers) {
    return goApiAxios.post("/ledgerGroups/getLedgerGroupsListForBankCashOrExpenses", data, { headers });
  },
  // getLedgerExpenses(data, headers) {
  //   return axios.post("/Reports/getLedgerExpenses", data, { headers });
  // },
  // getLedgerExpensesGo(data, headers) {
  //   return goApiAxios.post("ledgers/getLedgers", data, { headers });
  // },
  // getItemWiseLedgerDetails(data, headers) {
  //   return axios.post("/Ledgers/getItemWiseLedgerDetails", data, { headers });
  // },
  // deleteLedger(data, headers) {
  //   return axios.post("/Ledgers/deleteLedger", data, { headers });
  // },

  // // added by govind
  // updateSyncDetails(data, headers) {
  //   return axios.post("Vouchers/updateSyncDetails", data, { headers });
  // },
  // deleteVoucher(data, headers) {
  //   return axios.post("/Vouchers/deleteVoucher", data, { headers });
  // },

  // // added by govind
  // getTopReports(data, headers) {
  //   return axios.post("/Reports/getTopReports", data, { headers });
  // },
  getTopReportsGo(data, headers) {
    return goApiAxios.post("/reports/getTopReports", data, { headers });
  },
  // getItemWiseSuppliersOrCustomers(data, headers) {
  //   return axios.post("/Items/getStockItemWiseSuppliersOrCustomers", data, {
  //     headers,
  //   });
  // },
  // getItemsbyLedgerId(data, headers) {
  //   return axios.post("/Items/getStockItemsbyLedgerId", data, { headers });
  // },
  getItemsbyLedgerIdGo(data, headers) {
    return goApiAxios.post("/stockItems/getStockItemsByLedgerGuid", data, { headers });
  },
  // getLedgersByItemId(data, headers) {
  //   return axios.post("/ledgers/getLedgersByItemId", data, { headers });
  // },
  // getLedgersByItemId(data, headers) {
  //   return axios.post("/ledgers/getLedgersByItemId", data, { headers });
  // },
  getLedgersByItemIdGo(data, headers) {
    return goApiAxios.post("/ledgers/getLedgersByItemGuid", data, { headers });
  },
  // getVouchersbyItemandLedgerId(data, headers) {
  //   return axios.post("/vouchers/getVouchersbyItemandLedgerId", data, {
  //     headers,
  //   });
  // },
  // getVouchersbyItemandLedgerId(data, headers) {
  //   return axios.post("/vouchers/getVouchersbyItemandLedgerId", data, {
  //     headers,
  //   });
  // },
  getVouchersbyItemandLedgerIdGo(data, headers) {
    return goApiAxios.post("/vouchers/getVouchers", data, {
      headers,
    });
  },
  // getVouchersSummaryByStockItemCategoryList(data, headers) {
  //   return axios.post(
  //     "/vouchers/getVouchersSummaryByStockItemCategoryList",
  //     data,
  //     { headers }
  //   );
  // },
  getVouchersSummaryByStockItemCategoryListGo(data, headers) {
    return goApiAxios.post(
      "/vouchers/getVouchersSummaryByStockCategoryList",
      data,
      { headers }
    );
  },
  // getVouchersSummaryByStockItemList(data, headers) {
  //   return axios.post("/vouchers/getVouchersSummaryByStockItemList", data, {
  //     headers,
  //   });
  // },
  getVouchersSummaryByStockItemListGo(data, headers) {
    return goApiAxios.post("/vouchers/getVouchersSummaryByStockItemList", data, {
      headers,
    });
  },
  // getVouchersSummaryByStockItemGroupList(data, headers) {
  //   return axios.post(
  //     "/vouchers/getVouchersSummaryByStockItemGroupList",
  //     data,
  //     { headers }
  //   );
  // },
  getVouchersSummaryByStockItemGroupListGo(data, headers) {
    return goApiAxios.post(
      "/vouchers/getVouchersSummaryByStockGroupList",
      data,
      { headers }
    );
  },
  // getVouchersSummaryByLedgerList(data, headers) {
  //   return axios.post("/vouchers/getVouchersSummaryByLedgerList", data, {
  //     headers,
  //   });
  // },
  getVouchersSummaryByLedgerListGo(data, headers) {
    return goApiAxios.post("/vouchers/getVouchersSummaryByLedgerList", data, {
      headers,
    });
  },
  // getVouchersSummaryByLedgerGroupList(data, headers) {
  //   return axios.post("/vouchers/getVouchersSummaryByLedgerGroupList", data, {
  //     headers,
  //   });
  // },
  getVouchersSummaryByLedgerGroupListGo(data, headers) {
    return goApiAxios.post("/vouchers/getVouchersSummaryByLedgerGroupList", data, {
      headers,
    });
  },
  // getVouchersSummaryByVoucherTypeList(data, headers) {
  //   return axios.post("/vouchers/getVouchersSummaryByVoucherTypeList", data, {
  //     headers,
  //   });
  // },
  getVouchersSummaryByVoucherTypeListGo(data, headers) {
    return goApiAxios.post("/vouchers/getVouchersSummaryByVoucherTypeList", data, {
      headers,
    });
  },
  // getVouchersbyCompanyId(data, headers) {
  //   return axios.post("vouchers/getVouchersbyCompanyId", data, { headers });
  // },
  getVouchersbyCompanyIdGo(data, headers) {
    return goApiAxios.post("/vouchers/getVouchers", data, { headers });
  },

  // getVouchersSummaryByMonth(data, headers) {
  //   return axios.post("vouchers/getVouchersSummaryByMonth", data, { headers });
  // },
  getVouchersSummaryByMonthGo(data, headers) {
    return goApiAxios.post("/vouchers/getVouchersSummaryByMonth", data, { headers });
  },
  // getVouchersSummaryByYear(data, headers) {
  //   return axios.post("vouchers/getVouchersSummaryByYear", data, { headers });
  // },
  // getOutstandingDetails(data, headers) {
  //   return axios.post("Vouchers/getOutstandingDetails", data, { headers });
  // },

  getVouchersSummaryMonthCountForTally(data, headers) {
    return goApiAxios.post("/vouchers/getVouchersSummaryMonthCountForTally", data, { headers });
  },

  getLedgerGroupsByCompanyIdGo(data, headers) {
    return goApiAxios.post("/ledgerGroups/getLedgerGroups", data, { headers });
  },

  getPaymentReminderSummaryGo(data, headers) {
    return goApiAxios.post("/payment/getPaymentReminderSummary", data, {
      headers,
    });
  },

  getOutstandingVouchersDetailsReceivablesGo(data, headers) {
    return goApiAxios.post("ledgerOutstandings/getLedgerOutstandingVouchers", data, {
      headers,
    });
  },

  getLedgerOutstandingBillWiseVouchersGo(data, headers) {
    return goApiAxios.post("ledgerOutstandings/getLedgerOutstandingBillWiseVouchers", data, {
      headers,
    });
  },

  getFiltersForOutstandingsGo(data, headers) {
    return goApiAxios.post("ledgerOutstandings/getCustomDueFilters", data, { headers });
  },

  getOutstandingDetailsGo(data, headers) {
    return goApiAxios.post("ledgerOutstandings/getLedgerOutstandings", data, { headers });
  },


  getGroupOutstandings(data, headers) {
    return goApiAxios.post("ledgerOutstandingsWebV2/getGroupOutstandings", data, { headers });
  },

  getOutstandingDetailsReceivablesGo(data, headers) {
    return goApiAxios.post("/ledgerOutstandings/getLedgerOutstandingDetailsForDashboard", data, { headers });
  },
  // getFiltersForOutstandings(data, headers) {  
  //   return axios.post("Vouchers/getFiltersForOutstandings", data, { headers });
  // },
  getFiltersForOutstandingsGo(data, headers) {
    return goApiAxios.post("ledgerOutstandings/getCustomDueFilters", data, { headers });
  },
  // getLedgerGroupsByOutstanding(data, headers) {
  //   return axios.post("vouchers/getLedgerGroupsByOutstanding", data, {
  //     headers,
  //   });
  // },
  // getOutstandingVouchersDetails(data, headers) {
  //   return axios.post("vouchers/getOutstandingVouchersDetails", data, {
  //     headers,
  //   });
  // },
  getOutstandingVouchersDetailsGo(data, headers) {
    return goApiAxios.post("ledgerOutstandings/getLedgerOutstandingVouchers", data, {
      headers,
    });
  },
  // getVouchersSummaryByCashOrBank(data, headers) {
  //   return axios.post("vouchers/getVouchersSummaryByCashOrBank", data, {
  //     headers,
  //   });
  // },
  getVouchersSummaryByCashOrBankGo(data, headers) {
    return goApiAxios.post("ledgerGroups/getLedgerGroupsListForBankCashOrExpenses", data, {
      headers,
    });
  },
  // getVouchersSummaryDetailByCashOrBank(data, headers) {
  //   return axios.post("vouchers/getVouchersSummaryDetailByCashOrBank", data, {
  //     headers,
  //   });
  // },
  getLedgersGo(data, headers) {
    return goApiAxios.post("ledgers/getLedgers", data, {
      headers,
    });
  },
  getCostCentersGo(data, headers) {
    return goApiAxios.post("costCenters/getCostCenters", data, {
      headers,
    });
  },
  getCostLedgersGo(data, headers) {
    return goApiAxios.post("ledgers/getLedgers", data, {
      headers,
    });
  },
  getLedgersGoNew(data, headers) {
    return goApiAxios.post("ledgersWebV2/getLedgersListing", data, {
      headers,
    });
  },
  getNegativeLedgerItemGo(data, headers) {
    return goApiAxios.post("ledgersWebV2/getNegativeLedgers", data, {
      headers,
    });
  },
  getVouchersSummaryDetailByCashOrBankGo(data, headers) {
    return goApiAxios.post("ledgers/getLedgers", data, {
      headers,
    });
  },

  // getQuotationSummaryByLedgerList(data, headers) {
  //   return axios.post("quotation/getQuotationSummaryByLedgerList", data, {
  //     headers,
  //   });
  // },
  getQuotations(data, headers) {
    return goApiAxios.post("quotation/getQuotations", data, {
      headers,
    });
  },
  // getVouchersForExpenses(data, headers) {
  //   return axios.post("vouchers/getVouchersForExpenses", data, { headers });
  // },
  // getLedgerBalance(data, headers) {
  //   return axios.post("Ledgers/getLedgerBalance", data, { headers });
  // },
  // getInactiveCustomerReports(data, headers) {
  //   return axios.post("Reports/getInactiveCustomerReports", data, { headers });
  // },
  getInactiveCustomerReportsGo(data, headers) {
    return goApiAxios.post("reports/getInactiveCustomersReport", data, { headers });
  },
  // ledgerGroups(data, headers) {
  //   return axios.post("Ledgers/ledgerGroups", data, { headers });
  // },
  ledgerGroupsGo(data, headers) {
    return goApiAxios.post("ledgerGroups/getLedgerGroups", data, { headers });
  },

  // getInactiveItemsReport(data, headers) {
  //   return axios.post("Reports/getInactiveItemsReport", data, { headers });
  // },
  getInactiveItemsReportGo(data, headers) {
    return goApiAxios.post("reports/getInactiveItemsReport", data, { headers });
  },
  getStatistics(data, headers) {
    return goApiAxios.post("statistics/getStatistics", data, { headers });
  },
  // getBalanceSheetReports(data, headers) {
  //   return axios.post("Reports/getBalanceSheetReports", data, { headers });
  // },
  getBalanceSheetReports(data, headers) {
    return goApiAxios.post("/reports/getBalanceSheetReport", data, { headers });
  },
  getPartiesListGo(data, headers) {
    return goApiAxios.post("/ledgers/getLedgers", data, { headers });
  },
  // getLedgersGo(data, headers) {
  //   return goApiAxios.post("/ledgers/getLedgers", data, { headers });
  // },
  getledgerGroupsWebV2(data, headers) {
    return goApiAxios.post("/ledgerGroupsWebV2/getLedgerGroupsForCB", data, { headers });
  },
  // getProfitAndLossReports(data, headers) {
  //   return axios.post("Reports/getProfitAndLossReports", data, { headers });
  // },
  getProfitAndLossReportsGo(data, headers) {
    return goApiAxios.post("reports/getProfitAndLossReport", data, { headers });
  },
  getPermissionByCustomerIdGo(data, headers) {
    return goApiAxios.post("permissions/getPermissions", data, {
      headers,
    });
  },
  // getPermissionByCustomerId(data, headers) {
  //   return axios.post("Permissions/getPermissionByCustomerId", data, {
  //     headers,
  //   });
  // },
  // getGroupSummary(data, headers) {
  //   return axios.post("Reports/getGroupSummary", data, { headers });
  // },
  getGroupSummaryGo(data, headers) {
    return goApiAxios.post("/ledgers/getGroupSummary", data, { headers });
  },
  // getStockSummary(data, headers) {
  //   return axios.post("Reports/getStockSummary", data, { headers });
  // },
  // getTrialBalanceReports(data, headers) {
  //   return axios.post("Reports/getTrialBalanceReports", data, { headers });
  // },
  getTrialBalanceReportsGo(data, headers) {
    return goApiAxios.post("/reports/getTrialBalanceReport", data, { headers });
  },
  // getStockItemsSyncByCompanyId(data, headers) {
  //   return axios.post("items/getStockItemsSyncByCompanyId", data, { headers });
  // },
  getMyStockItems(data, headers) {
    return goApiAxios.post("stockItemsSync/getMyStockItems", data, { headers });
  },
  getStockQueryGo(data, headers) {
    return goApiAxios.post("stockWebV2/getStockQuery", data, { headers });
  },
  getStockItemsListGo(data, headers) {
    return goApiAxios.post("stockWebV2/getStockItemsListing", data, { headers });
  },
  // getCompanyAllUsers(data, headers) {
  //   return axios.post("Permissions/getCompanyAllUsers", data, { headers });
  // },
  getCompanyAllUsersGo(data, headers) {
    return goApiAxios.post("/customer/getSubUsers", data, { headers });
  },
  getSubUsers(data, headers) {
    return goApiAxios.post("customer/getSubUsers", data, { headers });
  },
  // getVouchersSyncbyCompanyId(data, headers) {
  //   return axios.post("Vouchers/getVouchersSyncbyCompanyId", data, { headers });
  // },
  getMyVouchers(data, headers) {
    return NewVersionAxios.post("vouchersSync/getMyVouchers", data, { headers });
  },
  // getTrackingsByCustomerId(data, headers) {
  //   return axios.post("Trackingreport/getTrackingsByCustomerId", data, {
  //     headers,
  //   });
  // },
  getTrackingsByCustomerIdGo(data, headers) {
    return goApiAxios.post("/trackings/getTrackings", data, {
      headers,
    });
  },
  // initializeWebLogin(data, headers) {
  //   return axios.post("Customers/initializeWebLogin", data, { headers });
  // },
  initializeWebLogingo(data, headers) {
    return goApiAxios.post("customer/initializeWebLogin", data, { headers });
  },
  // getLedgersByLedgerGroupParent(data, headers) {
  //   return axios.post("Ledgers/getLedgersbyLedgerGroupParent", data, {
  //     headers,
  //   });
  // },
  // getTransactionType(data, headers) {
  //   return axios.post("Transactiontypes/getTransactionType", data, { headers });
  // },

  // getNextVoucherNumber(data, headers) {
  //   return axios.post("Vouchers/getNextVoucherNumber", data, { headers });
  // },
  // addPaymentVoucherSync(data, headers) {
  //   return axios.post("Vouchers/addPaymentVoucherSync", data, { headers });
  // },
  // addReceiptVoucherSync(data, headers) {
  //   return axios.post("Vouchers/addReceiptVoucherSync", data, { headers });
  // },

  // getVoucherTypesByParent(data, headers) {
  //   return axios.post("Vouchertypes/getVoucherTypesByParent", data, {
  //     headers,
  //   });
  // },
  getVoucherTypes(data, headers) {
    return goApiAxios.post("voucherTypes/getVoucherTypes", data, {
      headers,
    });
  },
  getTransactionTypeGo(data, headers) {
    return goApiAxios.post("helper/getHelperData", data, {
      headers,
    });
  },

  getCountryGo(data, headers) {
    return goApiAxios.post("/locations/getLocation", data, { headers });
  },
  getStateGo(data, headers) {
    return goApiAxios.post("/locations/getLocation", data, { headers });
  },
  getItemsByCompanyIdGo(data, headers) {
    return goApiAxios.post("/stockItems/getStockItems", data, { headers });
  },
  getLedgersByLedgerGroupParentGo(data, headers) {
    return goApiAxios.post("ledgers/getLedgers", data, {
      headers,
    });
  },

  getNextVoucherNumberGo(data, headers) {
    return goApiAxios.post("vouchers/getNextVoucherNumber", data, { headers });
  },
  addPurchaseVoucherSyncGo(data, headers) {
    return goApiAxios.post("vouchersSync/addMyVoucher", data, { headers });
  },
  getCompanyTallyFeaturesGo(data, headers) {
    return goApiAxios.post("tallyFeatures/getTallyFeatures", data, {
      headers,
    });
  },
  getPriceLevelsByCompanyIdGo(data, headers) {
    return goApiAxios.post("/priceLevels/getPriceLevels", data, { headers });
  },
  getVoucherFullDetailsFromSyncGoo(data, headers) {
    return goApiAxios.post("/vouchersSync/getMyVoucher", data, { headers });
  },
  getExistingVoucherDetails(data, headers) {
    return NewVersionAxios.post("vouchers/getExistingVoucherDetails", data, { headers });
  },
  addTallyOpenCompanies(data, headers) {
    return goApiAxios.post("/companies/addCompany", data, { headers })
  },
  gettallyOpenCompanies(data, headers) {
    return goApiAxios.post("tallyOpenCompanies/getTallyOpenCompanies", data, { headers })
  },
  deleteCompany(data, headers) {
    return goApiAxios.post("companies/deleteCompany", data, { headers })
  },
  getGodownsByCompanyIdGo(data, headers) {
    return goApiAxios.post("/godown/getGodowns", data, { headers });
  },
  getVoucherGSTCalculation(data, headers) {
    return axios.post("Vouchers/getVoucherGSTCalculation", data, { headers });
  },
  // addSalesOrderVoucherSync(data, headers) {
  //   return axios.post("Vouchers/addSalesOrderVoucherSync", data, { headers });
  // },
  // addPurchaseOrderVoucherSync(data, headers) {
  //   return axios.post("Vouchers/addPurchaseOrderVoucherSync", data, {
  //     headers,
  //   });
  // },
  // addSalesVoucherSync(data, headers) {
  //   return axios.post("Vouchers/addSalesVoucherSync", data, { headers });
  // },
  addSalesVoucherSyncGo(data, headers) {
    return goApiAxios.post("/vouchersSync/addMyVoucher", data, { headers });
  },
  addSalesOrderVoucherSyncGo(data, headers) {
    return goApiAxios.post("/vouchersSync/addMyVoucher", data, { headers });
  },
  addMyVoucher(data, headers) {
    return goApiAxios.post("vouchersSync/addMyVoucher", data, { headers });
  },
  // addPurchaseVoucherSync(data, headers) {
  //   return axios.post("Vouchers/addPurchaseVoucherSync", data, { headers });
  // },
  // addCreditNoteVoucherSync(data, headers) {
  //   return axios.post("Vouchers/addCreditNoteVoucherSync", data, { headers });
  // },
  // updateCreditNoteVoucherSync(data, headers) {
  //   return axios.post("Vouchers/updateCreditNoteVoucherSync", data, {
  //     headers,
  //   });
  // },
  // addDebitNoteVoucherSync(data, headers) {
  //   return axios.post("Vouchers/addDebitNoteVoucherSync", data, { headers });
  // },
  // updateDebitNoteVoucherSync(data, headers) {
  //   return axios.post("Vouchers/updateDebitNoteVoucherSync", data, { headers });
  // },
  // addQuotation(data, headers) {
  //   return axios.post("Quotation/addQuotation", data, { headers });
  // },
  // getCompanyTallyFeatures(data, headers) {
  //   return axios.post("Configuration/getCompanyTallyFeatures", data, {
  //     headers,
  //   });
  // },
  getSalesOrdertoSales(data, headers){
    return goApiAxios.post("/vouchers/getSalesOrderToSales", data, {headers})
  },

  updateInvoiceConfigurations(data, headers) {
    return goApiAxios.post("/configurations/updateConfigurations", data, {
      headers,
    });

  },
  // getBankLedgersConfiguration(data, headers) {
  //   return axios.post("/Configuration/getBankLedgers", data, { headers });
  // },

  getAllPdfTemplatesConfigurations(data, headers) {
    return goApiAxios.post("/helper/getHelperData", data, { headers });
  },



  getPdfTemplateConfigurations(data, headers) {
    return goApiAxios.post("/configurations/getPdfTemplateConfigurations", data, {
      headers,
    });

  },
  UpdateAllPdfTemplatesConfigurations(data, headers) {
    return goApiAxios.post("/configurations/updateConfigurations", data, {
      headers,
    });
  },

  getNarrationConfigurations(data, headers) {
    return goApiAxios.post("/configurations/getNarrationConfigurations", data, {
      headers,
    });

  },
  getOutstandingsConfigurations(data, headers) {
    return goApiAxios.post("configurations/getOutstandingConfigurations", data, {
      headers,
    });

  },
  updateImagesForInvoiceConfigurations(data, headers) {
    return goApiAxios.post(
      "/configurations/updateConfigurations",
      data,
      { headers }
    );
  },
  updateNarrationConfigurations(data, headers) {
    return goApiAxios.post("configurations/updateConfigurations", data, {
      headers,
    });
  },
  updateOutstandingsConfigurations(data, headers) {
    return goApiAxios.post("configurations/updateConfigurations", data, {
      headers,
    });

  },
  // getBankLedgers(data, headers){
  //   return axios.post("Configuration/getBankLedgers", data, {headers});
  // },

  uploadFiles(data, headers) {
    return goApiAxios.post("/s3/uploadFiles", data, { headers });
  },

  // getPriceLevelsByCompanyId(data, headers) {
  //   return axios.post("Items/getPriceLevelsByCompanyId", data, { headers });
  // },
  // getVoucherFullDetailsFromSync(data, headers) {
  //   return axios.post("/Vouchers/getVoucherFullDetailsFromSync", data, { headers });
  //   ``;
  // },
  getVoucherFullDetailsFromSyncGo(data, headers) {
    return goApiAxios.post("/vouchers/getVouchers", data, { headers });
    ``;
  },
  // updateSalesVoucherSync(data, headers) {
  //   return axios.post("Vouchers/updateSalesVoucherSync", data, { headers });
  // },
  updateSalesVoucherSyncGo(data, headers) {
    return goApiAxios.post("vouchersSync/updateMyVoucher", data, { headers });
  },
  updateSalesOrderVoucherSyncGo(data, headers) {
    return goApiAxios.post("vouchersSync/updateMyVoucher", data, { headers });
  },
  updatePurchaseVoucherSyncGo(data, headers) {
    return goApiAxios.post("vouchersSync/updateMyVoucher", data, { headers });
  },
  updateMyVoucher(data, headers) {
    return goApiAxios.post("vouchersSync/updateMyVoucher", data, { headers });
  },
  updateMyVoucherOnEdit(data, headers) {
    return NewVersionAxios.post("vouchersSync/updateMyVoucher", data, { headers });
  },
  getQuotationPdf(data, headers) {
    return goApiAxios.post("pdf/getQuotationPDF", data, { headers });
  },
  addQuotationGo(data, headers) {
    return goApiAxios.post("quotation/addQuotation", data, { headers });
  },
  updateQuotationGo(data, headers) {
    return goApiAxios.post("quotation/updateQuotation", data, { headers });
  },
  getQuotationGo(data, headers) {
    return goApiAxios.post("quotation/getQuotation", data, { headers });
  },
  // getStockItemSyncById(data, headers) {
  //   return axios.post("items/getStockItemSyncById", data, { headers });
  // },
  getStockItemSyncByIdGo(data, headers) {
    return goApiAxios.post("stockItemsSync/getMyStockItem", data, { headers });
  },
  // updateStockItem(data, headers) {
  //   return axios.post("Items/updateStockItem", data, { headers });
  // },
  updateStockItemGo(data, headers) {
    return goApiAxios.post("stockItemsSync/updateMyStockItem", data, { headers });
  },
  // getLedgerSyncById(data, headers) {
  //   return axios.post("Ledgers/getLedgerSyncById", data, { headers });
  // },
  getLedgerSyncByIdGo(data, headers) {
    return goApiAxios.post("ledgersSync/getMyLedger", data, { headers });
  },
  // updateLedger(data, headers) {
  //   return axios.post("Ledgers/updateLedger", data, { headers });
  // },
  updateLedgerGo(data, headers) {
    return goApiAxios.post("ledgersSync/updateMyLedger", data, { headers });
  },
  // updatePurchaseVoucherSync(data, headers) {
  //   return axios.post("Vouchers/updatePurchaseVoucherSync", data, { headers });
  // },
  // getPDFBySummary(data, headers) {
  //   return axios.post("/PDFs/getPDFBySummary", data, { headers });
  // },
  // getPDFForVoucherDetailsForPaymentOrReceipts(data, headers) {
  //   return axios.post(
  //     "/PDFs/getPDFForVoucherDetailsForPaymentOrReceipts",
  //     data,
  //     { headers }
  //   );
  // },
  // getPDFForVoucherDetailsForJournalsOrContra(data, headers) {
  //   return axios.post(
  //     "/PDFs/getPDFForVoucherDetailsForJournalsOrContra",
  //     data,
  //     { headers }
  //   );
  // },
  // getPDFForVouchersByLedgerIdAndGroup(data, headers) {
  //   return axios.post("/PDFs/getPDFForVouchersByLedgerIdAndGroup", data, {
  //     headers,
  //   });
  // },
  getPDFForVouchersByLedgerIdAndGroupGo(data, headers) {
    return goApiAxios.post("/pdf/getVouchersPDF", data, {
      headers,
    });
  },
  getLedgerSummaryPDF(data, headers) {
    return goApiAxios.post("/pdf/getLedgerSummaryPDF", data, {
      headers,
    });
  },
  getDetailedLedgerSummaryPDF(data, headers) {
    return goApiAxios.post("/pdf/getDetailedLedgerSummaryPDF", data, {
      headers,
    });
  },
  getLedgerSummary(data, headers) {
    return goApiAxios.post("/ledgers/getLedgerSummary", data, {
      headers,
    });
  },
  // getPDFForDayBookReports(data, headers) {
  //   return axios.post("/PDFs/getPDFForDayBookReports", data, { headers });
  // },
  getPDFForDayBookReportsGo(data, headers) {
    return goApiAxios.post("/pdf/getDayBookReportPDF", data, { headers });
  },
  // getPDFForExpensesReports(data, headers) {
  //   return axios.post("/PDFs/getPDFForExpensesReports", data, { headers });
  // },
  getPDFForExpensesReportsGo(data, headers) {
    return goApiAxios.post("/pdf/getExpensesReportPDF", data, { headers });
  },
  // getPDFForInactiveCustomers(data, headers) {
  //   return axios.post("/PDFs/getPDFForInactiveCustomers", data, { headers });
  // },
  getPDFForInactiveCustomersGo(data, headers) {
    return goApiAxios.post("/pdf/getInactiveCustomersPDF", data, { headers });
  },
  // getPDFForInactiveItems(data, headers) {
  //   return axios.post("/PDFs/getPDFForInactiveItems", data, { headers });
  // },
  getPDFForInactiveItemsGo(data, headers) {
    return goApiAxios.post("/pdf/getInactiveItemsReportPDF", data, { headers });
  },
  // getPDFForTopReports(data, headers) {
  //   return axios.post("/PDFs/getPDFForTopReports", data, { headers });
  // },
  getPDFForTopReportsGo(data, headers) {
    return goApiAxios.post("/pdf/getTopReportsPDF", data, { headers });
  },
  // getPDFForBalancesheet(data, headers) {
  //   return axios.post("/PDFs/getPDFForBalancesheet", data, { headers });
  // },
  getPDFForBalancesheetGo(data, headers) {
    return goApiAxios.post("/pdf/getBalanceSheetReportPDF", data, { headers });
  },
  // getPDFForProfitAndLoss(data, headers) {
  //   return axios.post("/PDFs/getPDFForProfitAndLoss", data, { headers });
  // },
  getPDFForProfitAndLossGo(data, headers) {
    return goApiAxios.post("/pdf/getProfitAndLossPDF", data, { headers });
  },
  // getPDFForTrialBalanceReports(data, headers) {
  //   return axios.post("/PDFs/getPDFForTrialBalanceReports", data, { headers });
  // },
  getPDFForTrialBalanceReportsGo(data, headers) {
    return goApiAxios.post("/pdf/getTrialBalanceReportPDF", data, { headers });
  },
  // getPDFForItemSummary(data, headers) {
  //   return axios.post("/PDFs/getPDFForItemSummary", data, { headers });
  // },
  getPDFForItemSummaryGo(data, headers) {
    return goApiAxios.post("pdf/getStockItemsPDF", data, { headers });
  },
  // getPDFForStockItemsGroupsByCompanyId(data, headers) {
  //   return axios.post("/PDFs/getPDFForStockItemsGroupsByCompanyId", data, {
  //     headers,
  //   });
  // },
  // getPDFForStockItemsCategoriesByCompanyId(data, headers) {
  //   return axios.post("/PDFs/getPDFForStockItemsCategoriesByCompanyId", data, {
  //     headers,
  //   });
  // },
  // getPDFForVouchersByStockId(data, headers) {
  //   return axios.post("/PDFs/getPDFForVouchersByStockId", data, { headers });
  // },
  getPDFForVouchersByStockIdGo(data, headers) {
    return goApiAxios.post("/pdf/getVouchersPDF", data, { headers });
  },
  // getPDFForItemGroupAndCategoryDetail(data, headers) {
  //   return axios.post("/PDFs/getPDFForItemGroupAndCategoryDetail", data, {
  //     headers,
  //   });
  // },
  // getPDFForStockItemsbyLedgerId(data, headers) {
  //   return axios.post("/PDFs/getPDFForStockItemsbyLedgerId", data, { headers });
  // },
  getPDFForStockItemsbyLedgerIdGo(data, headers) {
    return goApiAxios.post("/pdf/getStockItemsPDF", data, { headers });
  },
  // getPDFForOutstanding(data, headers) {
  //   return axios.post("/PDFs/getPDFForOutstanding", data, { headers });
  // },
  // getPDFForVouchers(data, headers) {
  //   return axios.post("/PDFs/getPDFForVouchers", data, { headers });
  // },
  // getPDFForTrackingReport(data, headers) {
  //   return axios.post("/PDFs/getPDFForTrackingReport", data, { headers });
  // },
  getPDFForTrackingReportGo(data, headers) {
    return goApiAxios.post("/pdf/getTrackingsPDF", data, { headers });
  },
  getUserPermission(data, headers) {
    return goApiAxios.post("permissions/getPermissions", data, { headers })
  },
  getInvoiceConfigurationsGo(data, headers) {
    return goApiAxios.post("/configurations/getInvoiceConfigurations", data, {
      headers,
    });

  },
  // getInvoiceConfigurations(data, headers) {
  //   return axios.post("/Configuration/getInvoiceConfigurations", data, {
  //     headers,
  //   });

  // },
  // getPaymentReminderConfigurations(data, headers) {
  //   return axios.post("/Configuration/getPaymentReminderConfigurations", data, {
  //     headers,
  //   });
  // },
  // getSingleTemplateById(data, headers) {
  //   return axios.post("/Paymentreminder/getSingleTemplateById", data, {
  //     headers,
  //   });
  // },
  // addPaymentReminder(data, headers) {
  //   return axios.post("/Paymentreminder/addPaymentReminder", data, { headers });
  // },
  // getSingleScheduler(data, headers) {
  //   return axios.post("/Paymentreminder/getSingleScheduler", data, { headers });
  // },
  // updateSingleScheduler(data, headers) {
  //   return axios.post("/Paymentreminder/updateSingleScheduler", data, {
  //     headers,
  //   });
  // },
  // deletePaymentReminder(data, headers) {
  //   return axios.post("/Paymentreminder/deletePaymentReminder", data, {
  //     headers,
  //   });
  // },
  // managePaymentReminders(data,headers){
  //   return axios.post("/Paymentreminder/managePaymentReminders", data, { headers });
  // },
  // paymentRemindersList(data, headers) {
  //   return axios.post("/Paymentreminder/paymentRemindersList", data, {
  //     headers,
  //   });
  // },
  paymentRemindersListGo(data, headers) {
    return goApiAxios.post("payment/managePaymentReminders", data, {
      headers,
    });
  },
  // get_filter_by_company(data, headers) {
  //   return axios.post("/Companies/getCompany", data, { headers });
  // },
  get_filter_by_companyGo(data, headers) {
    return goApiAxios.post("/companies/getCompany", data, { headers });
  },
  // addCustomer(data, headers) {
  //   return axios.post("/Customers/addCustomer", data, { headers });
  // },
  // getStockItemGroupById(data, headers) {
  //   return axios.post("/Itemgroups/getStockItemGroupById", data, { headers });
  // },

  // getPaymentReminderSummary(data, headers) {
  //   return axios.post("/Paymentreminder/getPaymentReminderSummary", data, {
  //     headers,
  //   });
  // },
  // getPaymentRemindersDetails(data, headers) {
  //   return axios.post("/Paymentreminder/getPaymentRemindersDetails", data, {
  //     headers,
  //   });
  // },
  // getSMSPlans(data, headers) {
  //   return axios.post("/Settings/getSMSPlans", data, { headers });
  // },
  // deleteQuotation(data, headers) {
  //   return axios.post("/Quotation/deleteQuotation", data, { headers });
  // },
  deleteQuotation(data, headers) {
    return goApiAxios.post("/quotation/deleteQuotation", data, { headers });
  },

  // to get companies for tallytheme not for the header(dashboard.vue)
  getCompanyTheme(data, headers) {
    return goApiAxios.post("/companies/getCompanies", data, { headers });
  },
  getBalanceSheetReport(data, headers) {
    return goApiAxios.post("reports/getBalanceSheetReport", data, { headers });
  },
  getTrialBalanceReport(data, headers) {
    return goApiAxios.post("reports/getTrialBalanceReport", data, { headers });
  },
  getProfitAndLossReport(data, headers) {
    return goApiAxios.post("reports/getProfitAndLossReport", data, { headers });
  },
  getGodownSummary(data, headers) {
    return goApiAxios.post("godownsWebV2Route/getGodownSummary", data, { headers });
  },
  getGroupSummaryTally(data, headers) {
    return goApiAxios.post("ledgers/getGroupSummary", data, { headers });
  },
  getDetailedDayBookReport(data, headers) {
    return goApiAxios.post("reportsWebV2/getDayBook", data, {
      headers,
    });
  },
  // getDetailedDayBookReport(data, headers) {
  //   return goApiAxios.post("reports/getDetailedDayBookReport", data, {
  //     headers,
  //   });
  // },
  getVoucher(data, headers) {
    return NewVersionAxios.post("vouchers/getVoucher", data, { headers });
  },

  getVouchersSummaryMonthDetailForTally(data, headers) {
    return goApiAxios.post("vouchers/getVouchersSummaryMonthDetailForTally", data, { headers });
  },

  ///-------------------------

  getGstDetails(data, headers) {
    return goApiAxios.post("/getGstDetails", data, { headers });
  },
  paymentReminder(data, headers) {
    return goApiAxios.post("/payment/paymentReminder", data, { headers });
  },
  setPaymentReminder(data, headers) {
    return goApiAxios.post("/payment/paymentReminder", data, { headers });
  },
  getReminderSettings(data, headers) {
    return goApiAxios.post("/payment/getReminderSettings", data, { headers });
  },
  managePaymentReminders(data, headers) {
    return goApiAxios.post("/payment/managePaymentReminders", data, {
      headers,
    });
  },
  addLog(data, headers) {
    return goApiAxios.post("/webEngageLogs/addLog", data, { headers });
  },
  updateReminder(data, headers) {
    return goApiAxios.post("/payment/updateReminder", data, { headers });
  },
  deleteReminder(data, headers) {
    return goApiAxios.post("/payment/deleteReminder", data, { headers });
  },
  getStockGroups(data, headers) {
    return goApiAxios.post("/stockGroups/getStockGroups", data, { headers });
  },

  getStockItemsGo(data, headers) {
    return goApiAxios.post("stockItems/getStockItems", data, { headers });
  },
  getNegativStockItemGo(data, headers) {
    return goApiAxios.post("stockWebV2/getNegativeStockItemsList", data, { headers })
  }
  ,
  // getStockItems(data, headers) {
  //   return axios.post("/stockItems/getStockItems", data, { headers });
  // },
  uninstall_call(data, headers) {
    axios.defaults.baseURL = "https://tallyconnector.livekeeping.com";
    // return axios.get(url, "", { headers });
    return axios.post("/insertUninstallationLog", data, { headers });
  },
  getPaymentReminderConfigurations(data, headers) {
    return goApiAxios.post("/configurations/getPaymentReminderConfigurations", data, { headers });
  },
  loginWithOtpgo(data, headers) {
    return goApiAxios.post("/auth/loginWithOtp", data, { headers });
  },
  verifyOtpgo(data, headers) {
    return goApiAxios.post("/auth/verifyOtp", data, { headers });
  },
  exchangeMobileNumber(data, headers) {
    return goApiAxios.post("/customer/exchangeMobileNo", data, { headers });
  },
  addLead(data, headers) {
    return goApiAxios.post("/customer/addLead", data, { headers });
  },

  getLedgerMonthlySummaryGo(data, headers) {
    return goApiAxios.post("/ledgerMonthlySummaryWebV2/getLedgerMonthlySummaryWebV2", data, { headers });
  },

  getOutstandingVouchersGo(data, headers) {
    return goApiAxios.post("/ledgerOutstandingsWebV2/ledgerOutstandingsVouchersWebV2", data, { headers });
  },
  getOutstandingOnAccountDetailsGo(data, headers) {
    return goApiAxios.post("/ledgerOutstandingsWebV2/getOnAccountDetailsWebV2", data, { headers });
  },
  getOnAccountDetails(data, headers) {
    return NewVersionAxios.post("ledgerOutstandings/getOnAccountDetails", data, {
      headers,
    });
  },
  getGroupVouchers(data, headers) {
    return goApiAxios.post("/vouchers/getVouchersByLG", data, { headers });
  },
  getVouchers(data, headers) {
    return goApiAxios.post("/vouchers/getVouchers", data, { headers });
  },
  getPriceCalculation(data, headers) {
    return goApiAxios.post("/orders/getPriceCalculation", data, { headers });
  },
  addOrder(data, headers) {
    return goApiAxios.post("/orders/addOrder", data, { headers });
  },
  getVouchersSummaryPDF(data, headers) {
    return goApiAxios.post("/pdf/getVouchersSummaryPDF", data, { headers });
  },
  getLedgerOutstandingsPDF(data, headers) {
    return goApiAxios.post("/pdf/getLedgerOutstandingsPDF", data, { headers });
  },
  getLedgerOutstandingVouchersPDF(data, headers) {
    return goApiAxios.post("/pdf/getLedgerOutstandingVouchersPDF", data, { headers });
  },
  getMyVoucherPDF(data, headers) {
    return goApiAxios.post("/pdf/getMyVoucherPDF", data, { headers });
  },
  getVouchersPDF(data, headers) {
    return goApiAxios.post("/pdf/getVouchersPDF", data, { headers });
  },
  logoutgo(data, headers) {
    return goApiAxios.post("/auth/logout", data, { headers });
  },
  deleteMyVoucher(data, headers) {
    return goApiAxios.post("/vouchersSync/deleteMyVoucher", data, { headers });
  },
  cancelOrDeleteVoucher(data, headers) {
    return NewVersionAxios.post("/vouchersSync/cancelOrDeleteVoucher", data, { headers });
  },
  getMyEwayVouchers(data, headers) {
    return goApiAxios.post("/vouchersSync/getMyEwayVouchers", data, { headers });
  },
  getMyEInvoiceVouchers(data, headers) {
    return goApiAxios.post("/vouchersSync/getMyEInvoiceVouchers", data, { headers });
  },
  getLedgersForBankOrCash(data, headers) {
    return goApiAxios.post("/ledgers/getLedgersForBankOrCash", data, { headers });
  },
  getLedgerGroupForExpenses(data, headers) {
    return goApiAxios.post("/ledgerGroups/getLedgerGroupForExpenses", data, { headers });
  },
  generateWhatsappCode(data, headers) {
    return goApiAxios.post("/whatsapp/generateWhatsappCode", data, { headers });
  },
  getCustomDueFilters_v1(data, headers) {
    return goApiAxios.post("/ledgerOutstandings/getCustomDueFilters", data, { headers });
  },
  getLedgerOutstandings_v1(data, headers) {
    return goApiAxios.post("/ledgerOutstandings/getLedgerOutstandings", data, { headers });
  },
  getLedgerOutstandingVouchers_v1(data, headers) {
    return goApiAxios.post("/ledgerOutstandings/getLedgerOutstandingVouchers", data, { headers });
  },
  getEwayPDF(data, headers) {
    return goApiAxios.post("/pdf/getEwayPDF", data, { headers });
  },
  getTransporterLedgers(data, headers) {
    return goApiAxios.post("ledgers/getTransporterLedgers", data, { headers })
  },
  generateEway(data, headers) {
    return goApiAxios.post("/eWay/generateEway", data, { headers })
  },
  generateEinvoice(data, headers) {
    return goApiAxios.post("eWay/generateEInvoice", data, { headers })
  },
  cancelEway(data, headers){
    return goApiAxios.post("eWay/ewayCancel", data, {headers})
  },
  cancelEinvoice(data, headers){
    return goApiAxios.post("eWay/cancelEinvoice", data, {headers})
  },
  UpdateGSP(data, headers) {
    return goApiAxios.post("eWay/updateGSP", data, { headers })

  },
  updateisTransferStatus(data, headers) {
    return goApiAxios.post("vouchersSync/updateTransferStatus", data, { headers })
  },
  getGspSearch(data, headers) {
    return goApiAxios.post("eWay/gspSearch", data, { headers })
  },
  getMasterCodeDetails(data, headers) {
    return goApiAxios.post("/eWay/getMasterCodeDetails", data, { headers })
  },

  getVouchersRegister(data, headers) {
    return goApiAxios.post("vouchers/getVouchersRegister", data, { headers })
  },
  downloadBackup(data, headers) {
    return goApiAxios.post("companies/downloadBackup", data, { headers })
  },

  getStatisticsStockGroups(data, headers) {
    return goApiAxios.post("statistics/getStatisticsStockGroups", data, { headers });
  },

  getStatisticsStockItems(data, headers) {
    return goApiAxios.post("statistics/getStatisticsStockItems", data, { headers });
  },

  getUnits(data, headers) {
    return goApiAxios.post("units/getUnits", data, { headers });
  },

  getGodowns(data, headers) {
    return goApiAxios.post("godown/getGodowns", data, { headers });
  },

  getTypesOfVouchers(data, headers) {
    return goApiAxios.post("statistics/getStatisticsTypesOfVouchers", data, { headers });
  },

  getStatisticsStockCategories(data, headers) {
    return goApiAxios.post("statistics/getStatisticsStockCategories", data, { headers });
  },

  getStatisticsLedgerGroups(data, headers) {
    return goApiAxios.post("statistics/getStatisticsLedgerGroups", data, { headers });
  },

  getStatisticsLedger(data, headers) {
    return goApiAxios.post("statistics/getStatisticsLedger", data, { headers });
  },

  getStatisticsVoucherTypes(data, headers) {
    return goApiAxios.post("statistics/getStatisticsVoucherTypes", data, { headers });
  },
  getStockGroupSummary(data, headers) {
    return goApiAxios.post("stockGroupsWebV2/getStockGroupSummary", data, { headers });
  },

  // getWebsiteData(){
  //   axios.defaults.baseURL = "https://www.indiamart.com/";
  //   return axios.get("/company/9798292");
  // },
  getExpensesLedgersGo(data, headers) {
    return goApiAxios.post("vouchers/getExpensesLedgers", data, { headers });
  },
  getCompanyTurnOver(data, headers){
    return NewVersionAxios.post('/vouchers/getCompanyTurnover', data, {headers})
  }
};
