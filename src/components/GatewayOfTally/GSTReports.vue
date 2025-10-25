<template>
  <div>
    <h5 class="margin-bottom-set-reports">
      <router-link class="nav-link w-inline-block" :to="{ name: 'tally-style' }"
        >Livekeeping Dashboard</router-link
      >
    </h5>
    <h5 class="margin-bottom-set-reports">
      <router-link
        class="nav-link w-inline-block"
        :to="{ name: 'tally-style-display-reports' }"
        >Display More Reports</router-link
      >
    </h5>

    <div class="gateway-tally-card" ref="myList">
      <h3>GST Reports</h3>

      <div class="tally-card-report">
        <ul ref="gstList">
          <h4>GST RETURNS/COMPUTATIONS</h4>
          <li
            :class="{ active: currentIndex == 0 }"
            data-href="/tally-style-cash-banks"
          >
            <a href="javascript:void(0);">
              T-<span class="green_text">R</span>ack GST Return Activities 
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
            </a>
          </li>
          <li :class="{ active: currentIndex == 1 }">
            <a href="javascript:void(0);">
              GSTR-<span class="green_text">1</span> 
              <span class="coming-soon" style="color: #ff0000 !important"
                >Coming Soon...</span
              >
            </a>
          </li>
          <li :class="{ active: currentIndex == 2 }" style="margin-bottom:8px;">
            <a href="javascript:void(0);">
              GSTR-<span class="green_text">3</span>B 
              <span class="coming-soon" style="color: #ff0000 !important"
                >Coming Soon...</span
              >
            </a>
          </li>

          <li :class="{ active: currentIndex == 3 }" style="margin-bottom:8px;">
            <a href="javascript:void(0);">
              <span class="green_text">A</span>nnual Computation
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="tally-card-report">
        <ul ref="exchangeList">
          <h4>EXCHANGE REPORTS</h4>
          <li
            :class="{ active: currentIndex == 4 }"
            data-href="/tally-style-cash-banks"
          >
            <a href="javascript:void(0);">
              e-<span class="green_text">I</span>nvoice
             <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
            </a>
          </li>
          <li :class="{ active: currentIndex == 5 }" style="margin-bottom:8px;">
            <a href="javascript:void(0);">
              e-<span class="green_text">W</span>ay Bill 
              <span class="coming-soon" style="color: #ff0000 !important"
                >Coming Soon...</span
              >
            </a>
          </li>
        </ul>
      </div>
      <div class="tally-card-report">
        <ul ref="reconciliationList">
          <h4>RECONCILIATION REPORTS</h4>
          <li
            :class="{ active: currentIndex == 6 }"
            data-href="/tally-style-cash-banks"
          >
            <a href="javascript:void(0);">
              <span class="green_text">G</span>STR-1 Reconciliation
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
            </a>
          </li>
          <li :class="{ active: currentIndex == 7 }">
            <a href="javascript:void(0);">
              GSTR-<span class="green_text">2</span>A Reconciliation
              <span class="coming-soon" style="color: #ff0000 !important"
                >Coming Soon...</span
              >
            </a>
          </li>
          <li :class="{ active: currentIndex == 8 }">
            <a href="javascript:void(0);">
              GSTR-2<span class="green_text">B</span> Reconciliation
              <span class="coming-soon" style="color: #ff0000 !important"
                >Coming Soon...</span
              >
            </a>
          </li>
          <li :class="{ active: currentIndex == 9 }" style="margin-bottom:8px;">
            <a href="javascript:void(0);">
              <span class="green_text">C</span>hallan Reconciliation
              <span class="coming-soon" style="color: #ff0000 !important"
                >Coming Soon...</span
              >
            </a>
          </li>
          <li :class="{ active: currentIndex == 10 }" style="margin-bottom:8px;">
            <a href="javascript:void(0);">
              GST <span class="green_text">U</span>tilities 
              <span class="coming-soon" style="color: #ff0000 !important"
                >Coming Soon...</span
              >
            </a>
          </li>
          <li :class="{ active: currentIndex == 11 }" style="margin-bottom:8px;">
            <a href="javascript:void(0);">
              <span class="green_text">O</span>ther Reports
              <span class="coming-soon" style="color: #ff0000 !important"
                >Coming Soon...</span
              >
            </a>
          </li>
          <li :class="{ active: currentIndex == 12 }">
            <a href="javascript:void(0);">
              <span class="green_text">Q</span>uite
          
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="showGroupSummary" >
      <Group-Summary @closeGroupSummary="closePopup" />
    </div>

    <div v-if="showVoucherSummary" >
      <GroupVoucher @closeGroupVoucherSummary="closePopup" />
    </div>

    <div v-if="showLedger">
      <Ledger-List @closeLedger="closePopup" />
    </div>

  </div>
</template>

<script>

import store from "../../store";
import { mapActions, mapState } from "vuex";
import GroupSummary from "../Sidebar/AccountsBook/Group-Summary.vue";
import GroupVoucher from "../Sidebar/AccountsBook/Group-Voucher.vue";
import LedgerList from "../Sidebar/AccountsBook/Ledger.vue";

export default {
  components: {
    GroupSummary,
    GroupVoucher,
    LedgerList
  },

  props: {
    isActive: Boolean,
  },

  data() {
    return {
      currentIndex: 0,
      concatValue: 0,

      showGroupSummary: false,
      showVoucherSummary: false,
      showLedger: false,
    };
  },

  created() {
    this.addEventListenerFunc();
    store.dispatch("tallyStore/resetValues");
  },

  watch: {
    isActive(newValue) {
      if (newValue) {
        this.removeEventListenerFunc();
      } else {
        this.addEventListenerFunc();
      }
    },
  },

  beforeDestroy() {
    this.removeEventListenerFunc();
  },

  methods: {
    selectRow(index) {
    

      this.navigate(index);
    },

    addEventListenerFunc() {
      document.addEventListener("keydown", this.handleKeyDown);
      document.addEventListener("keyup", this.handleEventKey);
      document.addEventListener("wheel", this.handleMouseScroll);
    },

    removeEventListenerFunc() {
      document.removeEventListener("keydown", this.handleKeyDown);
      document.removeEventListener("keyup", this.handleEventKey);
      document.removeEventListener("wheel", this.handleMouseScroll);
    },

    afterPressedAltKeyStoreValue() {
      this.setFirstBlock([
        {
          button: "F2",
          label: "Period",
          singleBorder: true,
          doubleBorder: false,
          disableFlag: false,
        },
        {
          button: "F3",
          label: "Select Company",
          singleBorder: true,
          doubleBorder: false,
          disableFlag: false,
        },
      ]);
    },

    afterPressedCtrlKeyStoreValue() {
      this.setFirstBlock([
        {
          button: "F2",
          label: "",
          singleBorder: true,
          doubleBorder: true,
          disableFlag: true,
        },
        {
          button: "F3",
          label: "Shut Company",
          singleBorder: true,
          doubleBorder: true,
          disableFlag: false,
        },
      ]);
    },

    ...mapActions({
      setFirstBlock: "tallyStore/setFirstBlock",
    }),

    handleKeyDown(event) {
      switch (event.key) {
        case "ArrowUp":
          this.handleArrowUp();
          break;

        case "ArrowDown":
          this.handleArrowDown();
          break;

        case "Enter":
          this.navigate(this.currentIndex);
          break;
        case "Control":
          this.afterPressedCtrlKeyStoreValue();
         
          break;
        case "Alt":
          this.afterPressedAltKeyStoreValue();
         
          break;

        case "Escape":
          this.$store.dispatch("visibility/setComponentVisibility", {
            component: "showDisplayReports",
            isVisible: true,
          });
          store.dispatch("tallyStore/resetState");
          event.preventDefault();
          break;

        default:
          break;
      }
    },
    handleMouseScroll(event) {

      const deltaY = event.deltaY;

      if (deltaY > 0) {
        // Scrolling down
        this.handleArrowDown();
      } else if (deltaY < 0) {
        // Scrolling up
        this.handleArrowUp();
      }
    },
    handleArrowDown() {
       this.currentIndex = (this.currentIndex + 1) % this.concatValue.length;
          console.log("array down pressed", this.currentIndex);
    },
    handleArrowUp() {
    this.currentIndex =
            (this.currentIndex - 1 + this.concatValue.length) %
            this.concatValue.length;
          console.log("array up pressed", this.currentIndex);
    },

    navigate(index) {
      switch (index) {
        case 0:
       
          break;

        case 1:
       
          break;

        case 2:
      
          break;

          case 3:
      
          break;

        case 4:
       
          break;
        

        case 5:
     
          break;

        case 6:
        
          break;

        case 7:
         

          break;

        case 8:
      
          break;

        case 9:
      
          break;

        case 10:
       
          break;

        case 11:
         
          break;

        case 12:
        
          break;

        default:
          break;
      }
    },

   

    handleEventKey(event) {
      const key = event.key.toLowerCase();

      switch (key) {
        case "r":
          this.showLedger = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          break;
        case "1":
          this.showVoucherSummary = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          break;

          case "3":
         
          break;

        case "a":
   
          break;

        case "i":
        
          break;

        case "w":
         
          break;

        case "g":
      
          break;

        case "2":
         
          break;
        case "b":
        
          break;

        case "c":
         
          break;

        case "u":
         
          break;

        case "0":
        
          break;

        case "q":
        
          break;

        
        case "control":
          event.preventDefault();
          store.dispatch("tallyStore/resetValues");
          break;  
          
        case "alt":
          event.preventDefault();
          store.dispatch("tallyStore/resetValues");
          break;
      }
    },

    getAllLi() {
      //  Access the referenced <ul> elements
      const gstList = this.$refs.gstList;
      const exchangeList = this.$refs.exchangeList;
      const reconciliationList = this.$refs.reconciliationList;

      const liElements = gstList.querySelectorAll("li");
      const liElements2 = exchangeList.querySelectorAll("li");
      const liElements3 = reconciliationList.querySelectorAll("li");

      const liArray = Array.from(liElements);
      const liArray2 = Array.from(liElements2);
      const liArray3 = Array.from(liElements3);

      const concatenatedArray = [...liArray, ...liArray2, ...liArray3];
      return concatenatedArray;
    },

    closePopup() { 
      this.showGroupSummary = false;
      this.showLedger = false;
      this.showVoucherSummary = false;
      setTimeout(() => {
        this.addEventListenerFunc();
      }, 200);
      this.$emit("addListener");
    }
  },

  mounted() {
    const groupIndex = localStorage.getItem("GroupIndex");
    if(groupIndex) {
      this.showGroupSummary = true;
      this.showVoucherSummary = true;
      this.removeEventListenerFunc();
    }

    this.concatValue = this.getAllLi();
  },
};
</script>

<style scoped>
h4.routeList {
  margin: 0px 0 0px 0;
  color: #1a1a1a;
  font-size: 11.5px;
  font-weight: 400;
  padding-left: 60px;
}
</style>
