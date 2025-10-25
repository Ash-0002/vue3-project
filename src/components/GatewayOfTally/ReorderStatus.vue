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
      <h3>Reorder Status</h3>

      <div class="tally-card-report">
        <ul ref="outstandinglist">
          <li
            :class="{ active: currentIndex == 0 }"
            data-href=""
          >
            <a href="javascript:void(0);" @click="selectRow(0)">
              Stock <span class="green_text">G</span>roup <i class="fa fa-info info-icon-show"></i>
             
            </a>
          </li>
          <li
            :class="{ active: currentIndex == 1 }"
            data-href="" style="margin-bottom:15px;"
          >
            <a href="javascript:void(0);" @click="selectRow(1)">
              Sto<span class="green_text">C</span>k Category <i class="fa fa-info info-icon-show"></i>
            
            </a>
          </li>
          <li
            :class="{ active: currentIndex == 2 }"
            data-href="/tally-style"
          >
            <router-link :to="{ name: 'tally-style' }">
              <span>Q</span>uit
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="showReorderStockGroup">
      <ReorderStockGroup @closeReorderStockGroupModal="closePopup" />
    </div>

    <div v-if="showReorderStockCategory">
      <ReorderStockCategory @closeReorderStockCategoryModal="closePopup" />
    </div>

  </div>
  
</template>

<script>
import EventBus from "../../eventBus";
import store from "../../store";
import { mapActions, mapState } from "vuex";
import ReorderStockGroup from "../Sidebar/ReorderStatusComponent/ReorderStockGroup.vue";
import ReorderStockCategory from "../Sidebar/ReorderStatusComponent/ReorderStockCategory.vue";

export default {
  components: {
    ReorderStockGroup,
    ReorderStockCategory
  },
  props: {
    isActive: Boolean,
  },

  data() {
    return {
      currentIndex: 0,
      showReorderStockGroup: false,
      showReorderStockCategory: false,
    };
  },

  created() {
    this.addEventListenerFunc();
    store.dispatch('tallyStore/resetValues');

    const screenName = 'ReorderStatus'; // Replace with the actual screen name
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
navigateToNextScreen() {
      const screenName = "ReorderStatus";
      store.dispatch("tallyStore/setIndex", { screenName, newIndex: this.currentIndex })
    },
    selectRow(index) {
    this.navigate(index);
  },
  navigate(index) {
      switch (index) {
        case 0:
          this.currentIndex = index;
          this.showReorderStockGroup = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case 1:
          this.currentIndex = index;
          this.showReorderStockCategory = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case 2:
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

    handleEventKey(event) {
      const key = event.key.toLowerCase();

      switch (key) {
        case "g":
          this.currentIndex = 0;
          this.showReorderStockGroup = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case "c":
          this.currentIndex = 1;
          this.showReorderStockCategory = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
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
      this.showReorderStockGroup = false;
      this.showReorderStockCategory = false;
      setTimeout(() => {
        this.addEventListenerFunc();
      }, 200);
      this.$emit("addListener");
    }
  },

  mounted() {
    const groupIndex = localStorage.getItem("GroupIndex");
    if (groupIndex) {
      this.showReorderStockGroup = true;
      this.showReorderStockCategory = true;
      this.removeEventListenerFunc();
    }
    this.concatValue = this.getAllLi();
  },
};
</script>
