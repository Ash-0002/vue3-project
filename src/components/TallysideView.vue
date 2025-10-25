/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section>
    <div class="tally-sidebar">
      <div class="inner-tally-sidebar-heght-set">
        
        <ul>
          <li v-for="(list, index) in first_block" :key="index" class="dropdown dropleft"
            :class="{ 'disable-li-sidebar-tally': list.disableFlag }"
            >
            <a href="javascript:void(0);"
            @click="handleListItemClick(list.label)"
            >
              <span class="sidebar_keys" :class="{ 'double-border': list.singleBorder }"><span class="green_text"
                  :class="{ 'with-double-border': list.doubleBorder }">
                  {{ list.button }}:</span>
                {{ list.label }}
              </span>
             
            </a>
          </li>
          
        </ul>

        <ul>
          <li v-for="list in second_block" class="dropdown dropleft "
            :class="{ 'disable-li-sidebar-tally': list.disableFlag }">
            <a href="javascript:void(0);"
            @click="handleListItemClick(list.label)"
            >
              <span class="sidebar_keys" :class="{ 'double-border': list.singleBorder }"><span class="green_text"
                  :class="{ 'with-double-border': list.doubleBorder }">
                  {{ list.button }}:</span>
                {{ list.label }}
              </span>
            
            </a>
          </li>
        </ul>
        <ul>


         


          <div class="modal-vue-tally">
            <div class="main-tally-front-company-popup" v-if="showDaybookBasisValues">
              <div class="tally-front-popup-company">
               
                <div class="company-input-boxes">
                  <div><span><strong>Basis of Values</strong></span></div>
                  <input type="text" class="company-format-input-tally" :value="BasisValuesInput" ref="InputBasisValues"
                    @keydown.esc="handleEscapeKey($event, 'DaybookBasisValues')" />
                </div>
              </div>

              <div class="select-shut-company-flow-boxes">
                <h6>List of Configurations</h6>
                <ul class="company-selection-popup-boxes" ref="basisvalueList">
                  <li :class="{ active: DaybookBasisValuesIndex == index }"
                    v-for="(daybookbasisvalue, index) in daybookbasisvalues" :key="index">
                    <div class="row">
                      <div class="col-6">
                        <div class="company-popup-list-name-left">
                          <a href="javascript:void(0);">
                            {{ daybookbasisvalue.name }}
                          </a>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="company-popup-list-code-name-right">
                          <a href="javascript:void(0);"> {{ daybookbasisvalue.vouchers }} </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="overlay7" v-if="showDaybookBasisValues" @click="toggleDaybookBasisValuesModal"></div>
          </div>

          <div class="modal-vue-tally">
            <div class="main-tally-front-company-popup" v-if="showDaybookChangeView">
              <div class="tally-front-popup-company">
            
                <div class="company-input-boxes">
                  <div><span><strong>Change View</strong></span></div>
                  <input type="text" class="company-format-input-tally" :value="ChangeViewInput" ref="InputChangeView"
                    @keydown.esc="handleEscapeKey($event, 'DaybookChangeViews')" />
                </div>
              </div>

              <div class="select-shut-company-flow-boxes">
                <h6>List of Views</h6>
                <ul class="daybook-change-view-headingtype" ref="DaybookChangeView">
                  <li :class="{ active: DaybookChangeViewIndex == 0 }">
                    <a href="javascript:void(0);" @keyup.enter="toggleListVisibility"> Related Reports </a>
                  </li>
                </ul>
                <ul class="company-selection-popup-boxes" ref="basisvalueList" v-show="isListVisible">
                  <li :class="{ active: DaybookChangeViewIndex == index + 1 }"
                    v-for="(daybookchangeview, index) in daybookchangeviews" :key="index + 1">
                    <div class="company-popup-list-name-left">
                      <a href="javascript:void(0);">
                        {{ daybookchangeview.name }}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="overlay8" v-if="showDaybookChangeView" @click="toggleDaybookChangeViewModal"></div>
          </div>
        </ul>



        <ul class="lastLi configure-bottom-set-insidebar">
          <li v-for="list in sixth_block" class="dropdown dropleft disable-li-sidebar-tally"
            :class="{ 'disable-li-sidebar-tally': list.disableFlag }">
            <a href="#" data-toggle="dropdown">
              <span class="sidebar_keys" :class="{ 'double-border': list.singleBorder }"><span class="green_text"
                  :class="{ 'with-double-border': list.doubleBorder }">
                  {{ list.button }}:</span>
                {{ list.label }}
              </span>
           
            </a>
          </li>
        </ul>
      </div>
    </div>

    <b-modal id="daybook-date-modal" centered title="" v-model="modalVisible">
      <div class="modal-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12 mx-auto">
              <div class="master_creation daybook_change_date">
                <h4>Change Date</h4>
                <input type="text" placeholder="31-12-2023" class="form-control tally_search_input" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
import Api from "@/Api";
import EventBus from "../eventBus";
import { mapState } from "vuex";
import store from "../store";
export default {
  data() {
    return {
      open: false,
      modalVisible: false,
      showOnlyDatePopup: false,
      showSelectCompanyPopup: false,
      showSelectAddCompanyPopup: false,
      showShutCompanyPopup: false,
      showVoucherTypePopup: false,
      showDaybookBasisValues: false,
      showDaybookChangeView: false,
      showOnlyPeriodDatePopup: false,
      defaultDate: "13-12-23",
      periodDate1: "13-12-23",
      periodDate2: "13-12-23",
      companyIndex: 0,
      totalCompanies: 6,
      SelectcompanyIndex: 4,
      SelecttotalCompanies: 20,
      ShutcompanyIndex: 0,
      ShuttotalCompanies: 3,
      VoucherTypeIndex: 1,
      VoucherTypetotalCompanies: 26,
      DaybookBasisValuesIndex: 0,
      DaybookBasisValuestotalCompanies: 2,
      DaybookChangeViewIndex: 1,
      DaybookChangeViewtotalCompanies: 2,
      showOtherPopups: false,
      companyData: [],
      shutCompanyInput: "ABCD Private Limited",
      VoucherTypeInput: "",
      changeCompanyInput: "ABCD Private Limited",
      selectCompanyInput: "",
      ChangeViewInput: "",
      daybookbasisvalues: [
        { name: "Type of Voucher entries", vouchers: "All Vouchers" },
        { name: "Exclude Order Vouchers", vouchers: "No" },
      ],
      daybookchangeviews: [
        { name: "Post-Dated Bank Transactions" },
      ],
      isListVisible: true,
      escapeKeyPressed: false,
    
      escapeKeyPressCount: 0,
    };
  },
  beforeRouteLeave(to, from, next) {
 
    if (this.showSelectCompanyPopup) {
     
      next(false);
    } else {
   
      next();
    }
  },
  methods: {

    handleListItemClick(label) { 
      this.$emit("handleListItemClick", label);
    }

  
  },
  created() { },
  computed: {
    ...mapState("tallyStore", [
      "first_block",
      "second_block",
      "third_block",
      "fourth_block",
      "fivfth_block",
      "sixth_block",
    ]),
  },

  

  mounted() {
   
  },
};
</script>

<style>
.double-border {
  position: relative;
}

.double-border::after {
  content: "";
  position: absolute;
  left: 5px;
  right: 0;
  bottom: -2px;
  
  width: 17px;
  border-bottom: 1px solid #0c9800;
}

.with-double-border::after {
  content: "";
  position: absolute;
  left: 5px;
  right: 0;
  bottom: -4px;

  width: 17px;
  border-bottom: 1px solid #0c9800;
}

ul.company-selection-popup-boxes li.active {
  background-color: #c2ebaa;
}

ul.company-create-alter-popup-boxes li.active {
  background-color: #c2ebaa;
}

.selected {
  background-color: #c2ebaa !important;
}

.disable-li-sidebar-tally {
  color: #999;
 
  cursor: not-allowed;

}
</style>
