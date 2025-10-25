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
      <h3>Statements Of Inventory</h3>

      <div class="tally-card-report">
        <ul ref="summarylist">
          <h4>STOCK</h4>

          <li
            :class="{ active: currentIndex == 0 }"
            style="margin-bottom: 10px"
          >
            <a href="javascript:void(0);" @click="selectRow(0)">
              S<span class="green_text">T</span>ock Query 
           
            </a>
          </li>
          <!-- <li :class="{ active: currentIndex == 1 }">
            <h4 class="routeList mb-0" @click="selectRow(1)">
              <span class="green_text">M</span>ovement Analysis
            </h4>
          </li> -->
          <li :class="{ active: currentIndex == 1 }">
           
           <h4 class="routeList mb-0" @click="selectRow(1)">
             <span class="green_text">M</span>ovement Analysis
             <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
           </h4>
         </li>
          <li
            :class="{ active: currentIndex == 2 }"
            style="margin-bottom: 10px"
          >
            <a href="javascript:void(0);" @click="selectRow(2)">
              <span class="green_text">A</span>geing Analysis
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
            </a>
          </li>

          <li
            :class="{ active: currentIndex == 3 }"
            style="margin-bottom: 10px"
          >
            <a href="javascript:void(0);" @click="selectRow(3)">
              <span class="green_text">R</span>eorder Status 
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
              
            </a>
          </li>

          <li
            :class="{ active: currentIndex == 4 }"
            style="margin-bottom: 10px"
          >
            <a href="javascript:void(0);" @click="selectRow(4)">
              C<span class="green_text">O</span>st Estimation
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
             
            </a>
          </li>
        </ul>
      </div>

      <div class="tally-card-report">
        <ul ref="registerlist">
          <h4>STOCK OUTSTANDINGS</h4>

          <li :class="{ active: currentIndex == 5 }">
            <a href="javascript:void(0);" @click="selectRow(5)">
              Sa<span class="green_text">L</span>es Order OutStandings 
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
            </a>
          </li>
          <li
            :class="{ active: currentIndex == 6 }"
            style="margin-bottom: 10px"
          >
            <a href="javascript:void(0);" @click="selectRow(6)">
              <span class="green_text">P</span>urchase Order OutStandings 
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
            </a>
          </li>
          <li  :class="{ active: currentIndex == 7 }" data-href="/tally-style">
              <a @click="navigateBack"><span>Q</span>uit</a>
            
          </li>
        </ul>
      </div>
    </div>

    <div v-if="showStockQuery">
      <StockQuery @closeStockQueryModal="closeStockQueryModal"  @closeStockQueryModalAndRoute="closeStockQueryModalAndRoute"/>
    </div>
    <div v-if="showAgeingAnalysis">
      <AgeingAnalysis @closeAgeingAnalysisModal="closeAgeingAnalysisModal" />
    </div>
    <div v-if="showCostEstimation">
      <CostEstimation @closeCostEstimationModal="closeCostEstimationModal" />
    </div>

  </div>
</template>

<script>

import store from "../../store";
import { mapActions, mapState } from "vuex";
import StockQuery from "../Sidebar/StatementInventory/StockQuery.vue";
import AgeingAnalysis from "../Sidebar/StatementInventory/AgeingAnalysis.vue";
import CostEstimation from "../Sidebar/StatementInventory/CostEstimation.vue";

export default {
  components: {
    StockQuery,
    AgeingAnalysis,
    CostEstimation,
  },

  props: {
    isActive: Boolean,
  },

  data() {
    return {
      currentIndex: 0,
      concatValue: 0,

      showStockQuery: false,
      showAgeingAnalysis: false,
      showCostEstimation: false,
    };
  },

  created() {
    this.addEventListenerFunc();
    store.dispatch("tallyStore/resetValues");
    const screenName = "StatementsOfInventory"; 
    const index = store.getters["tallyStore/getSelectedIndex"](screenName);
    console.log(index, "tallyStore");
    if (index) {
      this.currentIndex = index;
      store.dispatch("tallyStore/setIndex", { screenName, newIndex: null });
    }
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
    navigateBack(){
      this.$store.dispatch("visibility/setComponentVisibility", {
            component: "showDisplayReports",
            isVisible: true,
          });
          const screenName = "AccountBooks";
          store.dispatch("tallyStore/setIndex", {
            screenName,
            newIndex: null,
          });
          store.dispatch("tallyStore/resetState");
    },
    selectGateWay(index) {
      // if (index === 1) {
      //   this.$store.dispatch("visibility/setComponentVisibility", {
      //     component: "showMovementAnalysis",
      //     isVisible: true,
      //   });
      //   } else if (index === 3) {
      //     this.$store.dispatch("visibility/setComponentVisibility", {
      //       component: "showReorderStatus",
      //       isVisible: true,
      //     });
      //   } 
      //   else if (index === 5) {
      //     this.$store.dispatch("visibility/setComponentVisibility", {
      //       component: "showSalesOrderOutstanding",
      //       isVisible: true,
      //     });
      //   } else if (index === 6) {
      //     this.$store.dispatch("visibility/setComponentVisibility", {
      //       component: "showPurchaseOrderOutstanding",
      //       isVisible: true,
      //     });
      //   }
    },
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
          // if (this.currentIndex === 1) {
          //   this.selectGateWay(1);
          //   this.navigateToNextScreen();
          // }else if (this.currentIndex === 3){
          //   this.selectGateWay(3);
          //   this.navigateToNextScreen();
          // }else if (this.currentIndex === 5){
          //   this.selectGateWay(5);
          //   this.navigateToNextScreen();
          // }else if (this.currentIndex === 6){
          //   this.selectGateWay(6);
          //   this.navigateToNextScreen();
          // } else {
            this.navigate(this.currentIndex);
            this.navigateToNextScreen();
          // }
          break;
        case "Control":
          this.afterPressedCtrlKeyStoreValue();
        
          break;
        case "Alt":
          this.afterPressedAltKeyStoreValue();
       
          break;

        case "Escape":
          // this.$store.dispatch("visibility/setComponentVisibility", {
          //   component: "showDisplayReports",
          //   isVisible: true,
          // });
          // const screenName = "showDisplayReports";
          // store.dispatch("tallyStore/setIndex", {
          //   screenName,
          //   newIndex: null,
          // });
         // store.dispatch("tallyStore/resetState");
         this.navigateBack();
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
      console.log(this.currentIndex, 'down')
    },
    handleArrowUp() {
      this.currentIndex =
      (this.currentIndex - 1 + this.concatValue.length) %
      this.concatValue.length;
      console.log(this.currentIndex, 'up')
    },

    navigate(index) {
      switch (index) {
        case 0:
          this.currentIndex = index;
          this.showStockQuery = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        // case 1:
          
        //   this.currentIndex = index;
        //   this.selectGateWay(1);
        //   this.navigateToNextScreen();
        //   break;

        // case 2:
        //   this.currentIndex = index;
        //   this.showAgeingAnalysis = true;
        //   this.removeEventListenerFunc();
        //   this.$emit("removeListener");
        //   this.navigateToNextScreen();
        //   break;

        // case 3:
        //   this.currentIndex = index;
        //   this.selectGateWay(3);
        //   this.navigateToNextScreen();
        //   break;

        // case 4:
        //   this.currentIndex = index;
        //   this.showCostEstimation = true;
        //   this.removeEventListenerFunc();
        //   this.$emit("removeListener");
        //   this.navigateToNextScreen();
        //   break;

        // case 5:
        //   this.currentIndex = index;
        //   this.selectGateWay(5);
        //   this.navigateToNextScreen();
        //   break;

        // case 6:
        //   this.currentIndex = index;
        //   this.selectGateWay(6);
        //   this.navigateToNextScreen();
        //   break;

        case 7:
          this.currentIndex = index;
         this.navigateBack();
          break;

        default: 
          const selectedListItem = this.concatValue[index];
          const href = selectedListItem.dataset.href;
          console.log(this.currentIndex, "selected");
          if (href) {
            this.$router.push(href);
          }
          this.navigateToNextScreen();
          break;
      }
    },

    navigateToNextScreen() { 
      const screenName = "StatementsOfInventory";
      console.log(this.currentIndex, "navigateToNextScreen")
      store.dispatch("tallyStore/setIndex", {
        screenName,
        newIndex: this.currentIndex,
      });
    },

    handleEventKey(event) {
      const key = event.key.toLowerCase();

      switch (key) {
        case "t":
          this.currentIndex = 0;
          this.showStockQuery = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        // case "m":
        //   this.currentIndex = 1;
        //   this.$store.dispatch("visibility/setComponentVisibility", {
        //     component: "showMovementAnalysis",
        //     isVisible: true,
        //   });
        //   this.navigateToNextScreen();
        //   break;

        // case "a":
        //   this.currentIndex = 2;
        //   this.showAgeingAnalysis = true;
        //   this.removeEventListenerFunc();
        //   this.$emit("removeListener");
        //   this.navigateToNextScreen();
        //   break;

        // case "r":
        //   this.currentIndex = 3;
        //   this.$store.dispatch("visibility/setComponentVisibility", {
        //     component: "showReorderStatus",
        //     isVisible: true,
        //   });
        //   this.navigateToNextScreen();
        //   break;

        // case "o":
        //   this.currentIndex = 4;
        //   this.showCostEstimation = true;
        //   this.removeEventListenerFunc();
        //   this.$emit("removeListener");
        //   this.navigateToNextScreen();
        //   break;

        // case "l":
        //   this.currentIndex = 5;
        //   this.$store.dispatch("visibility/setComponentVisibility", {
        //     component: "showSalesOrderOutstanding",
        //     isVisible: true,
        //   });
        //   this.navigateToNextScreen();
        //   break;
        // case "p":
        //   this.currentIndex = 6;
        //   this.$store.dispatch("visibility/setComponentVisibility", {
        //     component: "showPurchaseOrderOutstanding",
        //     isVisible: true,
        //   });
        //   this.navigateToNextScreen();
        //   break;

        case "q":
        
          this.navigateBack();
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
      const summarylist = this.$refs.summarylist;
      const registerlist = this.$refs.registerlist;

      const liElements = summarylist.querySelectorAll("li");
      const liElements2 = registerlist.querySelectorAll("li");

      const liArray = Array.from(liElements);
      const liArray2 = Array.from(liElements2);

      const concatenatedArray = [...liArray, ...liArray2];
      return concatenatedArray;
    },

    closeStockQueryModal() {
      this.showStockQuery = false;
      setTimeout(() => {
        this.addEventListenerFunc();
      }, 200);
      this.$emit("addListener");
    },

    closeStockQueryModalAndRoute() {
      this.showStockQuery = false;
      this.$emit("addListener");
    },
    closeAgeingAnalysisModal() {
      this.showAgeingAnalysis = false;
      setTimeout(() => {
        this.addEventListenerFunc();
      }, 200);
      this.$emit("addListener");
    },
    closeCostEstimationModal() {
      this.showCostEstimation = false;
      setTimeout(() => {
        this.addEventListenerFunc();
      }, 200);
      this.$emit("addListener");
    },
    
  },

  mounted() {
    const groupIndex = localStorage.getItem("StockQueryModalIndex");
    const componentName = localStorage.getItem("screen");
    if (groupIndex) { 
      if (componentName == "stockQuery") {
        setTimeout(() => {
        this.showStockQuery = true;
        localStorage.removeItem("StockQueryModalIndex");
        localStorage.removeItem("screen");
      }, 500);

    }
    // else if (componentName == "ageingAnalysis") {
      //   this.showAgeingAnalysis = true;
      // }
      // else if (componentName == "costEstimation") {
        //   this.showCostEstimation = true;
        // }
        
      this.removeEventListenerFunc();
      this.$emit("removeListener");
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
