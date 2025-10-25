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
      <h3>Purchase Order Outstandings</h3>

      <div class="tally-card-report">
        <ul ref="outstandinglist">
          <li
            :class="{ active: currentIndex == 0 }"
            data-href=""
          >
            <a href="javascript:void(0);" @click="selectRow(0)">
               <span class="green_text">S</span>tock Group <i class="fa fa-info info-icon-show"></i>
             
            </a>
          </li>
          <li
            :class="{ active: currentIndex == 1 }"
            data-href=""
          >
            <a href="javascript:void(0);" @click="selectRow(1)">
              Sto<span class="green_text">C</span>k Category <i class="fa fa-info info-icon-show"></i>
            
            </a>
          </li>
          <li
            :class="{ active: currentIndex == 2 }"
            data-href="" style="margin-bottom:15px;"
          >
            <a href="javascript:void(0);" @click="selectRow(2)">
              Stock <span class="green_text">I</span>tem <i class="fa fa-info info-icon-show"></i>
             
            </a>
          </li>
          <li
            :class="{ active: currentIndex == 3 }"
            data-href="" 
          >
            <a href="javascript:void(0);" @click="selectRow(3)">
              <span class="green_text">G</span>roup <i class="fa fa-info info-icon-show"></i>
             
            </a>
          </li>
          <li
            :class="{ active: currentIndex == 4 }"
            data-href="" style="margin-bottom:15px;"
          >
            <a href="javascript:void(0);" @click="selectRow(4)">
              <span class="green_text">L</span>edger <i class="fa fa-info info-icon-show"></i>
             
            </a>
          </li>
          <li
            :class="{ active: currentIndex == 5 }"
            data-href="/tally-style-all-orders" style="margin-bottom:15px;"
          >
            <router-link :to="{ name: 'tally-style-all-orders' }" >
              All <span class="green_text">O</span>rders <i class="fa fa-info info-icon-show"></i>
             
            </router-link>
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
   
<div v-if="showPurchaseOrderStockGroup">
      <PurchaseOrderStockGroup @closePurchaseOrderStockGroupModal="closePopup" />
    </div>
    <div v-if="showPurchaseOrderStockCategory">
      <PurchaseOrderStockCategory @closePurchaseOrderStockCategoryModal="closePopup" />
    </div>
    <div v-if="showPurchaseOrderStockItem">
      <PurchaseOrderStockItem @closePurchaseOrderStockItemModal="closePopup" />
    </div>
    <div v-if="showPurchaseOrderGroup">
      <PurchaseOrderGroup @closePurchaseOrderGroupModal="closePopup" />
    </div>
    <div v-if="showPurchaseOrderLedger">
      <PurchaseOrderLedger @closePurchaseOrderLedgerModal="closePopup" />
    </div>

  </div>
  
</template>

<script>
import EventBus from "../../eventBus";
import store from "../../store";
import { mapActions, mapState } from "vuex";
import PurchaseOrderStockGroup from "../Sidebar/PurchaseOrderOutstandingComponent/PurchaseOrderStockGroup.vue";
import PurchaseOrderStockCategory from "../Sidebar/PurchaseOrderOutstandingComponent/PurchaseOrderStockCategory.vue";
import PurchaseOrderStockItem from "../Sidebar/PurchaseOrderOutstandingComponent/PurchaseOrderStockItem.vue";
import PurchaseOrderGroup from "../Sidebar/PurchaseOrderOutstandingComponent/PurchaseOrderGroup.vue";
import PurchaseOrderLedger from "../Sidebar/PurchaseOrderOutstandingComponent/PurchaseOrderLedger.vue";

export default {
  components: {
    PurchaseOrderStockGroup,
    PurchaseOrderStockCategory,
    PurchaseOrderStockItem,
    PurchaseOrderGroup,
    PurchaseOrderLedger
  },
  props: {
    isActive: Boolean,
  },

  data() {
    return {
      currentIndex: 0,
      showPurchaseOrderStockGroup: false,
      showPurchaseOrderStockCategory: false,
      showPurchaseOrderStockItem: false,
      showPurchaseOrderGroup: false,
      showPurchaseOrderLedger: false,
    };
  },

  created() {
    this.addEventListenerFunc();
    store.dispatch('tallyStore/resetValues');

    const screenName = 'PurchaseOrderOutstanding'; // Replace with the actual screen name
    const index = store.getters['tallyStore/getSelectedIndex'](screenName);
    if(index) {
      this.currentIndex = index;
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
          this.showPurchaseOrderStockGroup = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case 1:
          this.currentIndex = index;
          this.showPurchaseOrderStockCategory = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case 2:
          this.currentIndex = index;
          this.showPurchaseOrderStockItem = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case 3:
          this.currentIndex = index;
          this.showPurchaseOrderGroup = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case 4:
          this.currentIndex = index;
          this.showPurchaseOrderLedger = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case 5:
          this.currentIndex = index;
          this.$router.push({
            name: "tally-style-all-orders",
            // params: {
            //   v_type: "Contra",
            // },
          });
          this.navigateToNextScreen();
          break;
        case 6:
          this.currentIndex = index;

          this.logout();
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

navigateToNextScreen() {
      const screenName = "PurchaseOrderOutstanding";
      store.dispatch("tallyStore/setIndex", { screenName, newIndex: this.currentIndex })
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
      //  Access the referenced <ul> elements
      const movementlist = this.$refs.movementlist;
      const liElements = movementlist.querySelectorAll("li");
      const liArray = Array.from(liElements);
      const concatenatedArray = [...liArray];
      return concatenatedArray;
    },

    handleEventKey(event) {
      const key = event.key.toLowerCase();

      switch (key) {
        case "s":
          this.currentIndex = 0;
          this.showPurchaseOrderStockGroup = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case "c":
          this.currentIndex = 1;
          this.showPurchaseOrderStockCategory = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case "i":
          this.currentIndex = 2;
          this.showPurchaseOrderStockItem = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case "g":
          this.currentIndex = 3;
          this.showPurchaseOrderGroup = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
          case "l":
          this.currentIndex = 4;
          this.showPurchaseOrderLedger = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
          case "o":
          this.currentIndex = 5;
          this.$router.push({
            name: "tally-style-all-orders",
           
          });
          this.navigateToNextScreen();
          break;
          case "q":
          
          this.navigateToNextScreen();
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
      this.showPurchaseOrderStockGroup = false;
      this.showPurchaseOrderStockCategory = false;
      this.showPurchaseOrderStockItem = false;
      this.showPurchaseOrderGroup = false;
      this.showPurchaseOrderLedger = false;
      setTimeout(() => {
        this.addEventListenerFunc();
      }, 200);
      this.$emit("addListener");
    }
  },

  mounted() {
    const groupIndex = localStorage.getItem("GroupIndex");
    if (groupIndex) {
      this.showPurchaseOrderStockGroup = true;
      this.showPurchaseOrderStockCategory = true;
      this.showPurchaseOrderStockItem = true;
      this.showPurchaseOrderGroup = true;
      this.showPurchaseOrderLedger = true;
      this.removeEventListenerFunc();
    }
    this.concatValue = this.getAllLi();
  },
};
</script>
