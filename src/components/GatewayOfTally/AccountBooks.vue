<template>
  <div>
    <h5 class="margin-bottom-set-reports">
      <router-link class="nav-link w-inline-block" :to="{ name: '' }">Livekeeping Dashboard</router-link>
    </h5>
    <h5 class="margin-bottom-set-reports">
      <router-link class="nav-link w-inline-block" :to="{ name: '' }">Display More
        Reports</router-link>
    </h5>

    <div class="gateway-tally-card" ref="myList">
      <h3>Account Books</h3>

      <div class="tally-card-report">
        <ul ref="summarylist">
          <h4>SUMMARY</h4>


          <li :class="{ active: currentIndex == 0 }" data-href="/tally-style-cash-banks">
            <router-link :to="{ name: 'tally-style-cash-banks' }">
              <span class="green_text">C</span>ash /Bank Book(s)
            </router-link>
          </li>
          <li :class="{ active: currentIndex == 1 }" style="margin-bottom:10px;">
            <a href="javascript:void(0);" @click="selectRow(1)">
              <span class="green_text">L</span>edger
            </a>
          </li>
          <li :class="{ active: currentIndex == 2 }">
            <a href="javascript:void(0);" @click="selectRow(2)">
              <span class="green_text">G</span>roup Summary

            </a>
          </li>

          <li :class="{ active: currentIndex == 3 }">
            <a href="javascript:void(0);" @click="selectRow(3)">
              Group <span class="green_text">V</span>ouchers
            </a>
          </li>
        </ul>
      </div>

      <div class="tally-card-report">
        <ul ref="registerlist">
          <h4>REGISTER</h4>

          <li :class="{ active: currentIndex == 4 }" data-href="/tally-style-contra">
            <router-link :to="{ name: 'tally-style-contra', params: { v_type: 'Contra' } }">
              Con<span class="green_text">T</span>ra /Bank Register
            </router-link>
          </li>


          <li :class="{ active: currentIndex == 5 }" data-href="/tally-style-payment">
            <router-link :to="{
              name: 'tally-style-contra',
              params: { v_type: 'Payment' },
            }">
              Pa<span class="green_text">Y</span>ment Register
            </router-link>
          </li>


          <li style="margin-bottom: 10px" :class="{ active: currentIndex == 6 }" data-href="/tally-style-receipt">
            <router-link :to="{
              name: 'tally-style-contra',
              params: { v_type: 'Receipt' },
            }">
              <span class="green_text">R</span>eceipt Register
            </router-link>
          </li>


          <li :class="{ active: currentIndex == 7 }" data-href="/tally-style-sales">
            <router-link :to="{ name: 'tally-style-sales', params: { v_type: 'Sales' } }">
              <span class="green_text">S</span>ales Register
            </router-link>
          </li>

          <li style="margin-bottom: 10px" :class="{ active: currentIndex == 8 }" data-href="/tally-style-purchase">
            <router-link :to="{
              name: 'tally-style-sales',
              params: { v_type: 'Purchase' },
            }">
              <span class="green_text">P</span>urchase Register
            </router-link>
          </li>

          <li :class="{ active: currentIndex == 9 }" data-href="/tally-style-journal">
            <router-link :to="{
              name: 'tally-style-contra',
              params: { v_type: 'Journal' },
            }">
              <span class="green_text">J</span>ournal Register
            </router-link>
          </li>


          <li :class="{ active: currentIndex == 10 }" data-href="/tally-style-debitnote">
            <router-link :to="{
              name: 'tally-style-contra',
              params: { v_type: 'Debit Note' },
            }">
              <span class="green_text">D</span>ebit Note Register
            </router-link>
          </li>


          <li style="margin-bottom: 10px" :class="{ active: currentIndex == 11 }" data-href="/tally-style-creditnote">
            <router-link :to="{
              name: 'tally-style-contra',
              params: { v_type: 'Credit Note' },
            }">
              Cr<span class="green_text">E</span>dit Note Register
            </router-link>
          </li>


          <li @click="navigateBack" :class="{ active: currentIndex == 12 }" data-href="/tally-style">
            <router-link :to="{ name: 'tally-style' }">
              <span>Q</span>uit
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="showGroupSummary">
      <Group-Summary @closeGroupSummary="closePopup" />
    </div>

    <div v-if="showVoucherSummary">
      <Group-Voucher :masterReservedNameData="parentData" @closeGroupVoucherSummary="closePopup" />
    </div>

    <div v-if="showLedger">
      <Ledger-List :parentData="parentData" @closeLedger="closePopup" @closeLedgerAndRoute="closeLedgerRoute"/>
    </div>
  </div>
</template>

<script>
import Api from "@/Api";
import Common from "@/Common";
import store from "../../store";
import { mapActions, mapState } from "vuex";
import GroupSummary from "../Sidebar/AccountsBook/Group-Summary.vue";
import GroupVoucher from "../Sidebar/AccountsBook/Group-Voucher.vue";
import LedgerList from "../Sidebar/AccountsBook/Ledger.vue";

export default {
  components: {
    GroupSummary,
    GroupVoucher,
    LedgerList,
  },

  props: {
    isActive: Boolean,
  },

  data() {
    return {
      parentData: [],

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

    const screenName = "AccountBooks"; // Replace with the actual screen name
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
          this.navigateBack()
          event.preventDefault();
          break;

        default:
          break;
      }
    },
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
    handleArrowDown() {
      this.currentIndex = (this.currentIndex + 1) % this.concatValue.length;
    },
    handleArrowUp() {
      this.currentIndex =
        (this.currentIndex - 1 + this.concatValue.length) %
        this.concatValue.length;
        console.log(this.currentIndex, "currentIndex")
    },

    navigate(index) {
      switch (index) {
        case 0:
          this.$router.push({
            name: "tally-style-cash-banks",

          });
          this.navigateToNextScreen();
          break;

        case 1:
          this.showLedger = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        case 2:
          this.showGroupSummary = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        case 3:
          this.showVoucherSummary = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        case 4:
          this.$router.push({
            name: "tally-style-contra",
            params: {
              v_type: "Contra",
            },
          });
          this.navigateToNextScreen();
          break;

        case 5:
          this.$router.push({
            name: "tally-style-contra",
            params: {
              v_type: "Payment",
            },
          });
          this.navigateToNextScreen();
          break;

        case 6:
          this.$router.push({
            name: "tally-style-contra",
            params: {
              v_type: "Receipt",
            },
          });
          this.navigateToNextScreen();
          break;

        case 7:
          this.$router.push({
            name: "tally-style-sales",
            params: {
              v_type: "Sales",
            },
          });
          this.navigateToNextScreen();
          break;

        case 8:
          this.$router.push({
            name: "tally-style-sales",
            params: {
              v_type: "Purchase",
            },
          });
          this.navigateToNextScreen();
          break;

        case 9:
          this.$router.push({
            name: "tally-style-contra",
            params: {
              v_type: "Journal",
            },
          });
          this.navigateToNextScreen();
          break;

        case 10:
          this.$router.push({
            name: "tally-style-contra",
            params: {
              v_type: "Debit Note",
            },
          });
          this.navigateToNextScreen();
          break;

        case 11:
          this.$router.push({
            name: "tally-style-contra",
            params: {
              v_type: "Credit Note",
            },
          });
          this.navigateToNextScreen();
          break;
        case 12:
          this.navigateBack();
          break;

        default:
          break;
      }
    },
    navigateToNextScreen() {
      const screenName = "AccountBooks";
      store.dispatch("tallyStore/setIndex", {
        screenName,
        newIndex: this.currentIndex,
      });
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
        case "l":
          this.currentIndex = 1;
          this.showLedger = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;
        case "v":
          this.currentIndex = 3;
          this.showVoucherSummary = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        case "c":
          this.currentIndex = 0;
          this.$router.push({
            name: "tally-style-cash-banks",

          });
          this.navigateToNextScreen();
          break;

        case "g":
          this.currentIndex = 2;
          this.showGroupSummary = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

        case "s":
          this.currentIndex = 7;
          this.$router.push({
            name: "tally-style-sales",
            params: {
              v_type: "Sales",
            },
          });
          this.navigateToNextScreen();
          break;

        case "p":
          this.currentIndex = 8;
          this.$router.push({
            name: "tally-style-sales",
            params: {
              v_type: "Purchase",
            },
          });
          this.navigateToNextScreen();
          break;

        case "t":
          this.currentIndex = 4;
          this.$router.push({
            name: "tally-style-contra",
            params: {
              v_type: "Contra",
            },
          });
          this.navigateToNextScreen();
          break;

        case "y":
          this.currentIndex = 5;
          this.$router.push({
            name: "tally-style-contra",
            params: {
              v_type: "Payment",
            },
          });
          this.navigateToNextScreen();
          break;
        case "r":
          this.currentIndex = 6;
          this.$router.push({
            name: "tally-style-contra",
            params: {
              v_type: "Receipt",
            },
          });
          this.navigateToNextScreen();
          break;

        case "j":
          this.currentIndex = 9;
          this.$router.push({
            name: "tally-style-contra",
            params: {
              v_type: "Journal",
            },
          });
          this.navigateToNextScreen();
          break;

        case "d":
          this.currentIndex = 10;
          this.$router.push({
            name: "tally-style-contra",
            params: {
              v_type: "Debit Note",
            },
          });
          this.navigateToNextScreen();
          break;

        case "e":
          this.currentIndex = 11;
          this.$router.push({
            name: "tally-style-contra",
            params: {
              v_type: "Credit Note",
            },
          });
          this.navigateToNextScreen();
          break;
        case "q":
          this.currentIndex = 12;
          this.navigateBack()
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

      const liElements = summarylist.querySelectorAll("li");
      const liElements2 = registerlist.querySelectorAll("li");

      const liArray = Array.from(liElements);
      const liArray2 = Array.from(liElements2);

      const concatenatedArray = [...liArray, ...liArray2];
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
    },

    closeLedgerRoute() {
      this.showLedger = false;
      this.$emit("addListener");
    },
  },

  
  mounted() {
    const groupIndex = localStorage.getItem("GroupIndex");
    const componentName = localStorage.getItem("screen")
    if (groupIndex) {

      if (componentName == "groupSummary") {
        this.showGroupSummary = true;
      } else if (componentName == "groupVoucher") {
        this.showVoucherSummary = true;
      } else if (componentName == "ledger") {
        this.showLedger = true;
      }
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
