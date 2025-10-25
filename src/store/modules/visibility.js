// visibility.js
const state = {
    showGatewayLivekeeping: true,
    showDisplayMoreTabs: false,
    showAccountBooks: false,
    showStatementsOfInventory : false,
    showStatementAccounts: false,
    showOutStandings: false,
    showCostCentres: false,
    showInventoryBooks : false,
    showExceptionReports : false,
    showGSTReports : false,
    showMovementAnalysis : false,
    showReorderStatus : false,
    showSalesOrderOutstanding : false,
    showPurchaseOrderOutstanding : false,
  };
  
  const mutations = {
    setComponentVisibility(state, { component, isVisible }) {
      state.showGatewayLivekeeping = component === 'showGatewayLivekeeping' ? isVisible : false;
      state.showDisplayMoreTabs = component === 'showDisplayReports' ? isVisible : false;
      state.showAccountBooks = component === 'showAccountBooks' ? isVisible : false;
      state.showInventoryBooks = component === 'showInventoryBooks' ? isVisible : false;
      state.showStatementsOfInventory = component === 'showStatementsOfInventory' ? isVisible : false;
      state.showExceptionReports = component === 'showExceptionReports' ? isVisible : false;
      state.showGSTReports = component === 'showGSTReports' ? isVisible : false;
      state.showStatementAccounts = component === 'showStatementAccounts' ? isVisible : false;
      state.showOutStandings = component === 'showOutStandings' ? isVisible : false;
      state.showCostCentres = component === 'showCostCentres'? isVisible : false;
      state.showMovementAnalysis = component === 'showMovementAnalysis' ? isVisible : false;
      state.showReorderStatus = component === 'showReorderStatus' ? isVisible : false;
      state.showSalesOrderOutstanding = component === 'showSalesOrderOutstanding' ? isVisible : false;
      state.showPurchaseOrderOutstanding = component === 'showPurchaseOrderOutstanding' ? isVisible : false;
    },
  };
  
  const actions = {
    setComponentVisibility({ commit }, { component, isVisible }) {
      commit('setComponentVisibility', { component, isVisible });
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };
  