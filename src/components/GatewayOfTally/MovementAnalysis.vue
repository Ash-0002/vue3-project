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
        :to="{ name: 'tally-style' }"
        >Display More Reports</router-link
      >
    </h5>
    <h5 class="margin-bottom-set-reports">
      <router-link
        class="nav-link w-inline-block"
        :to="{ name: 'tally-style' }"
        >Statements of Inventory</router-link
      >
    </h5>

    <div class="gateway-tally-card" ref="movementlist">
      <h3>Movement Analysis</h3>

      <div class="tally-card-report">
        <ul ref="outstandinglist">
          <li
            :class="{ active: currentIndex == 0 }"
            data-href="/tally-style-bill-receivable"
          >
            <a href="javascript:void(0);" @click="selectRow(0)">
              <span class="green_text">S</span>tock Group Analysis <i class="fa fa-info info-icon-show"></i>
          
            </a>
          </li>
          <li
            :class="{ active: currentIndex == 1 }"
            data-href="/tally-style-bill-payables"
          >
            <a href="javascript:void(0);" @click="selectRow(1)">
              Sto<span class="green_text">C</span>k Category Analysis <i class="fa fa-info info-icon-show"></i>
          
            </a>
          </li>
          <li :class="{ active: currentIndex == 2 }" style="margin-bottom:15px;">
            <a href="javascript:void(0);" @click="selectRow(2)">
              Stock <span class="green_text">I</span>tem Analysis <i class="fa fa-info info-icon-show"></i>
       
            </a>
          </li>
          <li
            :class="{ active: currentIndex == 3 }"
            data-href=""
          >
            <a href="javascript:void(0);" @click="selectRow(3)">
              <span class="green_text">G</span>roup Analysis <i class="fa fa-info info-icon-show"></i>
            
            </a>
          </li>
          <li
            :class="{ active: currentIndex == 4 }" style="margin-bottom:15px;"
            data-href=""
          >
            <a href="javascript:void(0);" @click="selectRow(4)">
              <span class="green_text">L</span>edger Analysis <i class="fa fa-info info-icon-show"></i>
           
            </a>
          </li>
          <li
            :class="{ active: currentIndex == 5 }" style="margin-bottom:15px;"
            data-href=""
          >
            <a href="javascript:void(0);" @click="selectRow(5)">
              <span class="green_text">T</span>ransfer Analysis <i class="fa fa-info info-icon-show"></i>
          
            </a>
          </li>
          <li
            :class="{ active: currentIndex == 6 }"
            data-href="/tally-style"
          >
            <router-link :to="{ name: 'tally-style' }">
              <span>Q</span>uit
            </router-link>
          </li>
        </ul>
      </div>
    </div>
   
    <div v-if="showStockGroupAnalysis">
      <StockGroupAnalysis @closeStockGroupAnalysisModal="closePopup" />
    </div>

    <div v-if="showStockCategoryAnalysis">
      <StockCategoryAnalysis @closeStockCategoryAnalysisModal="closePopup" />
    </div>

    <div v-if="showStockItemAnalysis">
      <StockItemAnalysis @closeStockItemAnalysisModal="closePopup" />
    </div>

    <div v-if="showGroupAnalysis">
      <GroupAnalysis @closeGroupAnalysisModal="closePopup" />
    </div>

    <div v-if="showLedgerAnalysis">
      <LedgerAnalysis @closeLedgerAnalysisModal="closePopup" />
    </div>

    <div v-if="showTransferAnalysis">
      <TransferAnalysis @closeTransferAnalysisModal="closePopup" />
    </div>

  </div>
  
</template>

<script>
import EventBus from "../../eventBus";
import store from "../../store";
import { mapActions, mapState } from "vuex";
import StockGroupAnalysis from "../Sidebar/StatementMovement/StockGroupAnalysis.vue";
import StockCategoryAnalysis from "../Sidebar/StatementMovement/StockCategoryAnalysis.vue";
import StockItemAnalysis from "../Sidebar/StatementMovement/StockItemAnalysis.vue";
import GroupAnalysis from "../Sidebar/StatementMovement/GroupAnalysis.vue";
import LedgerAnalysis from "../Sidebar/StatementMovement/LedgerAnalysis.vue";
import TransferAnalysis from "../Sidebar/StatementMovement/TransferAnalysis.vue";

export default {
  components: {
    StockGroupAnalysis,
    StockCategoryAnalysis,
    StockItemAnalysis,
    GroupAnalysis,
    LedgerAnalysis,
    TransferAnalysis
  },
  props: {
    isActive: Boolean,
  },

  data() {
    return {
      currentIndex: 0,
      showStockGroupAnalysis: false,
      showStockCategoryAnalysis: false,
      showStockItemAnalysis: false,
      showGroupAnalysis: false,
      showLedgerAnalysis: false,
      showTransferAnalysis: false,
    };
  },

  created() {
    this.addEventListenerFunc();
    store.dispatch('tallyStore/resetValues');

    const screenName = "MovementAnalysis"; // Replace with the actual screen name
    const index = store.getters["tallyStore/getSelectedIndex"](screenName);
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

    addEventListenerFunc() {
      console.log("addd tally-reports");
      document.addEventListener("keydown", this.handleKeyDown);
      document.addEventListener("keyup", this.handleEventKey);
      document.addEventListener("wheel", this.handleMouseScroll);
    },

    removeEventListenerFunc() {
      console.log("remove tally-reports");
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

    selectRow(index) {
    this.navigate(index);
  },
  navigate(index) {
      switch (index) {
        case 0:
          this.currentIndex = index;
          this.showStockGroupAnalysis = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case 1:
          this.currentIndex = index;
          this.showStockCategoryAnalysis = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case 2:
          this.currentIndex = index;
          this.showStockItemAnalysis = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case 3:
          this.currentIndex = index;
          this.showGroupAnalysis = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case 4:
          this.currentIndex = index;
          this.showLedgerAnalysis = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case 5:
          this.currentIndex = index;
          this.showTransferAnalysis = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case 6:
           this.currentIndex = index;

          this.logout();
          break;

        default: // Assuming you have a data attribute "data-href" on your list items
          const selectedListItem = this.concatValue[index];
          const href = selectedListItem.dataset.href;
          if (href) {
            this.$router.push(href);
          }
          this.navigateToNextScreen();
          break;
      }
    },

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
              component: "showStatementsOfInventory",
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
    getAllLi() {
    
      const movementlist = this.$refs.movementlist;
      const liElements = movementlist.querySelectorAll("li");
      const liArray = Array.from(liElements);
      const concatenatedArray = [...liArray];
      return concatenatedArray;
    },

    navigateToNextScreen() {
      const screenName = "MovementAnalysis";
      store.dispatch("tallyStore/setIndex", {
        screenName,
        newIndex: this.currentIndex,
      });
    },

    handleEventKey(event) {
      const key = event.key.toLowerCase();

      switch (key) {
        case "s":
          this.currentIndex = 0;
          this.showStockGroupAnalysis = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case "c":
          this.currentIndex = 1;
          this.showStockCategoryAnalysis = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case "i":
          this.currentIndex = 2;
          this.showStockItemAnalysis = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case "g":
          this.currentIndex = 3;
          this.showGroupAnalysis = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case "l":
          this.currentIndex = 4;
          this.showLedgerAnalysis = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case "t":
          this.currentIndex = 5;
          this.showTransferAnalysis = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case "q":
       
          break;

        case "control":
          event.preventDefault();
          store.dispatch("tallyStore/resetValues");
          console.log("released Ctrl");
         
          break;
        case "alt":
          event.preventDefault();
          store.dispatch("tallyStore/resetValues");
          console.log("released alt");
        
          break;
      }
    },
    closePopup() { 
      this.showStockGroupAnalysis = false;
      this.showStockCategoryAnalysis = false;
      this.showStockItemAnalysis = false;
      this.showGroupAnalysis = false;
      this.showLedgerAnalysis = false;
      this.showTransferAnalysis = false;
      
      setTimeout(() => {
        this.addEventListenerFunc();
      }, 200);
      this.$emit("addListener");
    }
  },

  mounted() {
    const groupIndex = localStorage.getItem("GroupIndex");
    if (groupIndex) {
      this.showStockGroupAnalysis = true;
      this.showStockCategoryAnalysis = true;
      this.showStockItemAnalysis = true;
      this.showGroupAnalysis = true;
      this.showLedgerAnalysis = true;
      this.removeEventListenerFunc();
    }

    this.concatValue = this.getAllLi();
  },
};
</script>
