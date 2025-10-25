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
    <h5 class="margin-bottom-set-reports">
      <router-link
        class="nav-link w-inline-block"
        :to="{ name: '' }"
        >Statements of Accounts</router-link
      >
    </h5>

    <div class="gateway-tally-card" ref="myList">
      <h3>Outstandings</h3>

      <div class="tally-card-report">
        <ul ref="outstandinglist">
          <li
            :class="{ active: currentIndex == 0 }"
            data-href="/tally-style-bill-receivable"
          >
            <a
              href="javascript:void(0);"
              @click="selectRow(0)"
              :to="{
                name: 'tally-style-bill-receivable',
                query: { from: 'Receivables' },
              }"
            >
              <span class="green_text">R</span>eceivables
            </a>
          </li>

          <li
            style="margin-bottom: 10px"
            :class="{ active: currentIndex == 1 }"
            data-href="/tally-style-bill-payables"
          >
            <a
              href="javascript:void(0);"
              @click="selectRow(1)"
              :to="{
                name: 'tally-style-bill-receivable',
                query: { from: 'Payables' },
              }"
            >
              <span class="green_text">P</span>ayables
            </a>
          </li>

          <li :class="{ active: currentIndex == 2 }">
            <a href="javascript:void(0);" @click="selectRow(2)">
              <span class="green_text">L</span>edger
            </a>
          </li>
          <li
            :class="{ active: currentIndex == 3 }"
            style="margin-bottom: 10px"
          >
            <a href="javascript:void(0);" @click="selectRow(3)">
              <span class="green_text">G</span>roup
            </a>
          </li>

          <li style="cursor: pointer;" @click="navigateBack" :class="{ active: currentIndex == 4 }" data-href="/tally-style">
            <a :to="{ name: 'tally-style' }"> <span>Q</span>uit </a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="showLedger">
      <Ledger-List :parentData="parentData" @closeLedger="closePopup" />
    </div>
    <div v-if="showGroup">
      <Group-List
        :masterReservedNameData="parentData"
        @closeGroupVoucherSummary="closePopup"
      />
    </div>
  </div>
</template>

<script>
import EventBus from "../../eventBus";
import store from "../../store";
import LedgerList from "../Sidebar/Outstanding/Ledger.vue";
import GroupList from "../Sidebar/AccountsBook/Group-Voucher.vue";

import { mapActions, mapState } from "vuex";

export default {
  components: {
    LedgerList,
    GroupList,
  },
  props: {
    isActive: Boolean,
  },

  data() {
    return {
      currentIndex: 0,
      showLedger: false,
      showGroup: false,

      parentData: ["Sundry Debtors", "Sundry Creditors"],
    };
  },

  created() {
    this.addEventListenerFunc();
    store.dispatch("tallyStore/resetValues");

    const screenName = "Outstandings"; // Replace with the actual screen name
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
    navigateBack(){
      this.$store.dispatch("visibility/setComponentVisibility", {
            component: "showStatementAccounts",
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
          // this.$store.dispatch("visibility/setComponentVisibility", {
          //   component: "showStatementAccounts",
          //   isVisible: true,
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
    },

    handleArrowUp() {
      this.currentIndex =
        (this.currentIndex - 1 + this.concatValue.length) %
        this.concatValue.length;
    },

    navigate(index) {
      switch (index) {
        case 0:
          this.$router.push({
            path: "/tally-style-bill-receivable",
            query: { from: "Receivables" },
          });
          this.navigateToNextScreen();
          break;

        case 1:
          this.$router.push({
            path: "/tally-style-bill-receivable",
            query: { from: "Payables" },
          });
          this.navigateToNextScreen();
          break;

        case 2:
          this.showLedger = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        case 3:
          this.showGroup = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case 4:
          this.navigateBack();
          break;

     
      }
    },

    navigateToNextScreen() {
      const screenName = "Outstandings";
      store.dispatch("tallyStore/setIndex", {
        screenName,
        newIndex: this.currentIndex,
      });
    },

    getAllLi() {
     
      const outstandinglist = this.$refs.outstandinglist;
      const liElements = outstandinglist.querySelectorAll("li");
      const liArray = Array.from(liElements);
      const concatenatedArray = [...liArray];
      return concatenatedArray;
    },

    handleEventKey(event) {
      const key = event.key.toLowerCase();

      switch (key) {
        case "l":
          this.currentIndex = 2;
          this.showLedger = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        case "g":
          this.currentIndex = 3;
          this.showGroup = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        case "r":
          this.currentIndex = 0;
          this.$router.push({
            path: "/tally-style-bill-receivable",
            query: { from: "Receivables" },
          });
          this.navigateToNextScreen();
          break;

        case "p":
          this.currentIndex = 1;
          this.$router.push({
            path: "/tally-style-bill-receivable",
            query: { from: "Payables" },
          });
          this.navigateToNextScreen();
          break;

        case "q":
          // console.log(key, "pressed");
          // this.$router.push("/tally-style-statements-accounts");
          // this.navigateToNextScreen();
          this.navigateBack()
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
      this.showLedger = false;
      this.showGroup = false;
      setTimeout(() => {
        this.addEventListenerFunc();
      }, 200);
      this.$emit("addListener");
    },
  },

  mounted() {
    const groupIndex = localStorage.getItem("GroupIndex");
    const componentName = localStorage.getItem("screen")
    if (groupIndex) {

      if(componentName == "groupVoucher") {
        this.showGroup = true;
      } else if(componentName == "ledger") {
        this.showLedger = true;
      }
      this.removeEventListenerFunc();
    }


    this.concatValue = this.getAllLi();
  },
};
</script>
