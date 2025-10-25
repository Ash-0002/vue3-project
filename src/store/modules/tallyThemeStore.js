// settings.js
import moment from "moment";
import CostCentres from "../../components/GatewayOfTally/CostCentres.vue";

const state = {
  currentCompanyName : localStorage.getItem("currentCompanyName"),
  currentLedgerName : localStorage.getItem("currentLedgerName"),
  currentGroupName : localStorage.getItem("currentGroupName"),
  currentDate: moment().format("DD-MM-YYYY"),
  companySyncDate: "",
  companyId: localStorage.getItem("companyId"),
  startFrom: moment(localStorage.getItem("first_date_range_start_date"), "YYYY-MM-DD").format("DD-MM-YYYY"),//YYYY-MM-DD
  endDate:   moment(localStorage.getItem("first_date_range_end_date"), "YYYY-MM-DD").format("DD-MM-YYYY"),

  localFrom: "",
  localTo: "",
  voucherTypeId: "",
  voucherTypeName: "",
  numberingMethod: "",
  voucherArrayLength: "",

  localDate: "",

  selectedIndices: {
    GatewayLivekeeping: null,
    DisplayMore: null, 
    AccountBooks: null, 

    StatementAccounts: null,
    Outstandings: null, 
    CostCentres: null,

    ExceptionReports: null,
    StatementsOfInventory: null,
    MovementAnalysis: null,
    ReorderStatus: null,
    SalesOrderOutstanding: null,
    PurchaseOrderOutstanding: null,
    InventoryBooks: null,
  },
  
  currentIndexForAccountBook: 0,

  disableEventListener: true,

      first_block: [
        {
          button: 'F2',
          label: 'Date',
          singleBorder: false,
          doubleBorder: false,
          disableFlag: false,
        },
        {
          button: 'F3',
          label: 'Company',
          singleBorder: false,
          doubleBorder: false,
          disableFlag: false,
        },
      ],
      second_block:[],
      third_block:[],
      fourth_block:[],
      fivfth_block:[],
      sixth_block:[],
  };
  
  const mutations = {

    SET_FIRST_BLOCK(state, firstBlock) {
      state.first_block = firstBlock;
    },
    SET_SECOND_BLOCK(state, secondBlock) {
      state.second_block = secondBlock;
    },
    SET_THIRD_BLOCK(state, thirdBlock) {
      state.third_block = thirdBlock;
    },
    SET_FOURTH_BLOCK(state, fourthBlock) {
      state.fourth_block = fourthBlock;
    },
    SET_FIVFTH_BLOCK(state, FivfthBlock) {
      state.fivfth_block = FivfthBlock;
    },
    SET_SIXTH_BLOCK(state, SixthBlock) {
      state.sixth_block  = SixthBlock;
    },
    RESET_VALUES(state) {
      state.first_block = [ {
        button: 'F2',
        label: 'Date',
        singleBorder: false,
        doubleBorder: false, 
        disableFlag: false,
      },
      {
        button: 'F3',
        label: 'Company',
        singleBorder: false,
        doubleBorder: false,
        disableFlag: false,
      },
    ],
      state.second_block = [],
      state.third_block = [],
      state.fourth_block = [],
      state.fivfth_block = [],
      state.sixth_block = []
    },
    // setIndex(state, newIndex) {
    //   // alert(state.currentIndexForAccountBook + ', ' + newIndex);
    //   state.currentIndexForAccountBook = newIndex;
    //   localStorage.setItem('currentIndexAccountBook', newIndex);

    // },

    setIndex(state, { screenName, newIndex }) {
      if (state.selectedIndices[screenName] !== undefined) {
        state.selectedIndices[screenName] = newIndex;
      }
    },
    setEventListenerFlag(state) {
      state.disableEventListener = !state.disableEventListener;
    },
    resetState(state) { 
      state.currentIndexForAccountBook = 0;
      localStorage.removeItem("currentIndexAccountBook");
    },

    setCurrentLedgerName(state, value){
      state.currentLedgerName = value;
    },

    setCurrentGroupName(state, value){
      state.currentGroupName = value;
    },

    setCurrentCompanyName(state, value) {
      state.currentCompanyName = value;
    },
    
    setSelectedCompanySyncDate(state, value) {
      state.companySyncDate = value;
    },

    setCompanyId(state, value) {
      state.companyId = value;
    },

    setStartFrom(state, value) {
      state.startFrom = value;
    },
    
    setEndDate(state, value) {
      state.endDate = value;
    },

    setLocalFrom(state, value) {
      state.localFrom = value;
    },
    
    setLocalTo(state, value) {
      state.localTo = value;
    },
    
    setLocalDate(state, value) {
      state.localDate = value;
    },
    
    setCurrentDate(state, value) {
      state.currentDate = value;
    },

    setIndex(state, { screenName, newIndex }) {
      state.selectedIndices[screenName] = newIndex;
    },

    setVoucherTypeName(state, value ) {
      state.voucherTypeName = value;
    },

    setVoucherTypeId(state, value ) {
      state.voucherTypeId = value;
    },
    
    setNumberingMethod(state, value ) {
      state.numberingMethod = value;
    },

    setVoucherArrayLength(state, value){
      state.voucherArrayLength = value;
    }
  };
  
  const actions = {
    setFlags({ commit }, flags) {
      commit('SET_FLAGS', flags);
    },
    setFirstBlock({ commit }, firstBlock) {
      commit('SET_FIRST_BLOCK', firstBlock);
    },
    setSecondBlock({ commit }, secondBlock) {
      commit('SET_SECOND_BLOCK', secondBlock);
    },
    setThirdBlock({ commit }, thirdBlock) {
      commit('SET_THIRD_BLOCK', thirdBlock);
    },
    setFourthBlock({ commit }, fourthBlock) {
      commit('SET_FOURTH_BLOCK', fourthBlock);
    },
    setFivfthBlock({ commit }, FivfthBlock) {
      commit('SET_FIVFTH_BLOCK', FivfthBlock);
    },
    setSixthBlock({ commit }, SixthBlock) {
      commit('SET_SIXTH_BLOCK', SixthBlock);
    },
    resetValues({ commit }) {
      commit('RESET_VALUES');
    },
    // setIndex({ commit }, newIndex) {
    //   commit('setIndex', newIndex);
    // },
    setIndex({ commit }, { screenName, newIndex }) {
      commit('setIndex', { screenName, newIndex });
    },

    setCompanyIndex({ commit }, value) {
      commit('setCompanyIndex', value);
    },
    setEventListenerFlag({ commit } ) {
      commit('setEventListenerFlag');
    },
    resetState({ commit }) {
      commit('resetState')
    },

    setIndex({ commit }, { screenName, newIndex }) {
      commit('setIndex', { screenName, newIndex });
    },
  };
  
  const getters = {
    getSelectedIndex: (state) => (screenName) => {
      return state.selectedIndices[screenName] || null;
    },

    // doubleCount: (state) => state.count + 2,
  };
  
  export default {
    namespaced: true, // Enables namespace for the module
    state,
    mutations,
    actions,
    getters,
  };