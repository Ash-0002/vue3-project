<template>
  <div>
    <h5 class="margin-bottom-set-reports">
      <router-link class="nav-link w-inline-block" :to="{ name: '' }"
        >Livekeeping Dashboard</router-link
      >
    </h5>
    <h5 class="margin-bottom-set-reports">
      <router-link
        class="nav-link w-inline-block"
        :to="{ name: '' }"
        >Display More Reports</router-link
      >
    </h5>

    <div class="gateway-tally-card" ref="myList">
      <h3>Inventory Books</h3>

      <div class="tally-card-report">
        <ul ref="summarylist">
          <h4>SUMMARY</h4>

          <li :class="{ active: currentIndex == 0 }">
            <a href="javascript:void(0);" @click="selectRow(0)">
              Stock <span class="green_text">I</span>tem
            </a>
          </li>
          <li :class="{ active: currentIndex == 1 }">
            <a href="javascript:void(0);" @click="selectRow(1)">
              B<span class="green_text">A</span>tch
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
            </a>
          </li>
          <li
            :class="{ active: currentIndex == 2 }"
            style="margin-bottom: 10px"
          >
            <a href="javascript:void(0);" @click="selectRow(2)">
              <span class="green_text">G</span>odowns
            </a>
          </li>
          <li :class="{ active: currentIndex == 3 }">
            <a href="javascript:void(0);" @click="selectRow(3)">
              <span class="green_text">S</span>tock Group Summary
            
            </a>
          </li>

          <li
            :class="{ active: currentIndex == 4 }"
            style="margin-bottom: 10px"
          >
            <a href="javascript:void(0);" @click="selectRow(4)">
              Sto<span class="green_text">C</span>k Category Summary
            </a>
          </li>
        </ul>
      </div>

      <div class="tally-card-report">
        <ul ref="registerlist">
          <h4>REGISTER</h4>

          <li
            :class="{ active: currentIndex == 5 }"
            data-href="/tally-style-sales-orders-book"
          >
            <router-link
              :to="{
                name: 'tally-style-contra',
                params: { v_type: 'Sales Order' },
              }"
            >
              Sales <span class="green_text">O</span>rders Book
            
            </router-link>
          </li>
         
          <li
            :class="{ active: currentIndex == 6 }"
            data-href="/tally-style-purchase-orders-book"
          >
            <router-link
              :to="{
                name: 'tally-style-contra',
                params: { v_type: 'Purchase Order' },
              }"
            >
              Purchase Orders <span class="green_text">B</span>ook
             
            </router-link>
          </li>
        </ul>
      </div>

      <div class="tally-card-report" style="margin-top: 10px">
        <ul ref="deliverylist">
          <li
            :class="{ active: currentIndex == 7 }"
            data-href="/tally-style-deliverynote"
          >
            <router-link
              :to="{
                name: 'tally-style-contra',
                params: { v_type: 'Delivery Note' },
              }"
            >
              <span class="green_text">D</span>elivery Note Register
            </router-link>
          </li>
         
          <li
            :class="{ active: currentIndex == 8 }"
            data-href="/tally-style-receiptnote"
          >
            <router-link
              :to="{
                name: 'tally-style-contra',
                params: { v_type: 'Receipt Note' },
              }"
            >
            <span class="green_text">R</span>eceipt Note Register
            </router-link>
          </li>
        </ul>
      </div>

      <div class="tally-card-report" style="margin-top: 10px">
        <ul ref="stocklist">
          <li
            :class="{ active: currentIndex == 9 }"
            data-href="/tally-style-stock-transfer-journal"
          >
            <router-link :to="{ name: 'tally-style-stock-transfer-journal', params: { v_type: 'Stock Journal' } }">
              S<span class="green_text">T</span>ock Tranfer Journal Register
              <!-- <i class="fa fa-info info-icon-show"></i> -->
             
            </router-link>
          </li>
          <!-- <li
            :class="{ active: currentIndex == 6 }"
          >
            <a href="javascript:void(0);">
              S<span class="green_text">T</span>ock Tranfer Journal Register
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
             
            </a>
          </li> -->
          <li
            :class="{ active: currentIndex == 10 }"
            data-href="/tally-style-physical-stock-register"
            style="margin-bottom: 10px"
          >
            <router-link :to="{ name: 'tally-style-physical-stock-register', params: { v_type: 'Physical Stock' } }">
              <span class="green_text">P</span>hysical Stock Register
              <!-- <i class="fa fa-info info-icon-show"></i> -->
             
            </router-link>
          </li>
          <!-- <li
            :class="{ active: currentIndex == 7 }"
            style="margin-bottom: 10px"
          >
            <a href="javascript:void(0);">
              <span class="green_text">P</span>hysical Stock Register
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
             
            </a>
          </li> -->
          <li @click="this.navigateBack" :class="{ active: currentIndex == 11 }" data-href="/tally-style">
            <router-link :to="{ name: 'tally-style' }">
              <span>Q</span>uit
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="showStockGroupSummary">
      <Stock-Group-Summary @closeStockGroupSummary="closePopup" />
    </div>
    <div v-if="showStockItem">
      <Stock-Item @closeStockItem="closePopup" />
    </div>
    <div v-if="showGodowns">
      <Godowns @closeGodowns="closePopup" />
    </div>
    <div v-if="showStockCategories">
      <Stock-Category @closeGodowns="closePopup" />
    </div>
    <!-- <div v-if="showBatches">
      <Batches @closeBatches="closePopup" />
    </div> -->
  </div>
</template>

<script>
import Api from "@/Api";
import Common from "@/Common";
import store from "../../store";
import { mapActions, mapState } from "vuex";
import StockGroupSummary from "../Sidebar/Inventorybooks/StockGroupSummary.vue";
import StockItem from "../Sidebar/Inventorybooks/StockItem.vue";
import Godowns from "../Sidebar/Inventorybooks/Godowns.vue";
import StockCategory from "../Sidebar/Inventorybooks/StockCategory.vue";
import Batches from "../Sidebar/Inventorybooks/Batches.vue";
export default {
  components: {
    StockGroupSummary,
    StockItem,
    Godowns,
    StockCategory,
    Batches,
  },

  props: {
    isActive: Boolean,
  },

  data() {
    return {
      currentIndex: 0,
      concatValue: 0,
      showStockCategories: false,
      showStockGroupSummary: false,
      showStockItem: false,
      showLedger: false,
      showGodowns: false,
      showBatches: false,
    };
  },

  created() {
    this.addEventListenerFunc();
    store.dispatch("tallyStore/resetValues");
    const screenName = 'InventoryBooks'; // Replace with the actual screen name
    const index = store.getters['tallyStore/getSelectedIndex'](screenName);
    if(index) {
      this.currentIndex = index;
      console.log(this.currentIndex, "index")
      store.dispatch("tallyStore/setIndex", { screenName, newIndex: null })
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
    navigateToNextScreen() {
      const screenName = "InventoryBooks";
      store.dispatch("tallyStore/setIndex", {
        screenName,
        newIndex: this.currentIndex,
      });
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
          this.navigateBack();
          event.preventDefault();
          break;

        default:
          break;
      }
    },
 

    navigate(index) {
      switch (index) {
        case 0:
          this.currentIndex = index;
          this.showStockItem = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        case 1:
          // this.currentIndex = index;
          // this.showBatches = false;
          // this.removeEventListenerFunc();
          // this.$emit("removeListener");
          // this.navigateToNextScreen();
          break;

        case 2:
          this.currentIndex = index;
          this.showGodowns = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        case 3:
          this.currentIndex = index;
          this.showStockGroupSummary = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        case 4:
          this.currentIndex = index;
          this.showStockCategories = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        case 5:
          this.currentIndex = index;
          this.$router.push({
           
            name: "tally-style-contra",
            params: {
              v_type: "Sales Order",
            },
          });
          this.navigateToNextScreen();
          break;

        case 6:
          this.currentIndex = index;
          this.$router.push({
         
            name: "tally-style-contra",
            params: {
              v_type: "Purchase Order",
            },
          });
          this.navigateToNextScreen();
          break;

          case 7:
          this.currentIndex = index;
          this.$router.push({
           
            name: "tally-style-contra",
            params: {
              v_type: "Delivery Note",
            },
          });
          this.navigateToNextScreen();
          break;

        case 8:
          this.currentIndex = index;
          this.$router.push({
         
            name: "tally-style-contra",
            params: {
              v_type: "Receipt Note",
            },
          });
          this.navigateToNextScreen();
          break;

        case 9:
          this.currentIndex = index;
          this.$router.push({
            name: "tally-style-stock-transfer-journal",
            params: { v_type: 'Stock Journal' }
          });
          this.navigateToNextScreen();
          break;

        case 10:
          this.currentIndex = index;
          this.$router.push({
            name: "tally-style-physical-stock-register",
            params: { v_type: "Physical Stock" }
          });
          this.navigateToNextScreen();
          break;

        case 11:
          this.currentIndex = index;

          this.navigateBack();
          break;

        default: 
          const selectedListItem = this.concatValue[index];
          const href = selectedListItem.dataset.href;
          if (href) {
            this.$router.push(href);
          }
          this.navigateToNextScreen();
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
    },
    handleArrowUp() {
      this.currentIndex =
            (this.currentIndex - 1 + this.concatValue.length) %
            this.concatValue.length;
    },
    logout() {
      setTimeout(() => {
        this.logoutAPI();
        
      }, 200);
      return false;
    },
    logoutAPI(){
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.logoutgo(data, headers)
        .then((response) => {
          window.location.href = "/";
          localStorage.clear();
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
        });
    },

    handleEventKey(event) {
      const key = event.key.toLowerCase();

      switch (key) {
        case "i":
          this.currentIndex = 0;
          this.showStockItem = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        case "a":
          // this.currentIndex = 1;
          // this.showBatches = false;
          // this.removeEventListenerFunc();
          // this.$emit("removeListener");
          // this.navigateToNextScreen();
          break;

        case "g":
          this.currentIndex = 2;
          this.showGodowns = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        case "s":
          this.currentIndex = 3;
          this.showStockGroupSummary = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        case "c":
          this.currentIndex = 4;
          this.showStockCategories = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        case "o":
          this.currentIndex = 5;
    
          this.$router.push({
          
            name: "tally-style-contra",
            params: {
              v_type: "Sales Order",
            },
          });
          this.navigateToNextScreen();
          break;
        case "b":
          this.currentIndex = 6;
         
          this.$router.push({
          
            name: "tally-style-contra",
            params: {
              v_type: "Purchase Order",
            },
          });
          this.navigateToNextScreen();
          break;

          case "d":
          this.currentIndex = 7;
    
          this.$router.push({
          
            name: "tally-style-contra",
            params: {
              v_type: "Delivery Note",
            },
          });
          this.navigateToNextScreen();
          break;

        case "r":
          this.currentIndex = 8;
          this.$router.push({
            name: "tally-style-contra",
            params: {
              v_type: "Receipt Note",
            },
          });
          this.navigateToNextScreen();
          break;

        case "t":
          this.currentIndex = 9;
         
          this.$router.push({
            name: "tally-style-stock-transfer-journal",
            params: { v_type: 'Stock Journal' }
          });
          this.navigateToNextScreen();
          break;

        case "p":
          this.currentIndex = 10;
         
          this.$router.push({
            name: "tally-style-physical-stock-register",
            params: { v_type: "Physical Stock" }
          });
          this.navigateToNextScreen();
          break;

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
    
      const summarylist = this.$refs.summarylist;
      const registerlist = this.$refs.registerlist;
      const deliverylist = this.$refs.deliverylist;
      const stocklist = this.$refs.stocklist;
      

      const liElements = summarylist.querySelectorAll("li");
      const liElements2 = registerlist.querySelectorAll("li");
      const liElements3 = deliverylist.querySelectorAll("li");
      const liElements4 = stocklist.querySelectorAll("li");

      const liArray = Array.from(liElements);
      const liArray2 = Array.from(liElements2);
      const liArray3 = Array.from(liElements3);
      const liArray4 = Array.from(liElements4);

      const concatenatedArray = [...liArray, ...liArray2, ...liArray3, ...liArray4];
      return concatenatedArray;
    },

    closePopup() {
      this.showStockGroupSummary = false;
      this.showStockItem = false;
      this.showGodowns = false;
      this.showStockCategories = false;
      // this.showBatches = false;
      setTimeout(() => {
        this.addEventListenerFunc();
      }, 200);
      this.$emit("addListener");
    },
  },

  mounted() {
    const groupIndex = localStorage.getItem("GroupIndex");
    const componentName = localStorage.getItem("screen");
    if (groupIndex) {
      if (componentName == "Stockitem") {
          setTimeout(() => {
          this.showStockItem = true;
          localStorage.removeItem("GroupIndex");
          localStorage.removeItem("screen");
        }, 200);
      }
      else if(componentName == "BatchSummary"){
        setTimeout(() => {
          this.showBatches = true;
          localStorage.removeItem("GroupIndex");
          localStorage.removeItem("screen");
        }, 200);
      }
      else if(componentName == "GodownSummary"){
        setTimeout(() => {
          this.showGodowns = true;
          localStorage.removeItem("GroupIndex");
          localStorage.removeItem("screen");
        }, 200);
      }
      else if(componentName == "StockGroupSummary"){
        setTimeout(() => {
          this.showStockGroupSummary = true;
          localStorage.removeItem("GroupIndex");
          localStorage.removeItem("screen");
        }, 200);
      }
      else if(componentName == "StockCategories"){
        setTimeout(() => {
          this.showStockCategories = true;
          localStorage.removeItem("GroupIndex");
          localStorage.removeItem("screen");
        }, 200);
      }
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
