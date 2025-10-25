<template>
  <div>
    <div class="gateway-tally-card" ref="myList">
      <h3>Livekeeping Dashboard</h3>

      <div class="tally-card-report">
        <ul ref="mastersList">
          <h4>MASTERS</h4>

          <li :class="{ active: currentIndex == 0 }">
            <a href="javascript:void(0);" @click="navigate(0)">
              <span class="green_text">C</span>reate
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
            </a>
          </li>
          <li :class="{ active: currentIndex == 1 }" style="">
            <a href="javascript:void(0);" @click="navigate(1)">
              <span>A</span>lter
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
            </a>
          </li>
          <li :class="{ active: currentIndex == 2 }" style="margin-bottom:10px;">
            <a href="javascript:void(0);" @click="navigate(2)">
              <span>CH</span>art of Accounts
            </a>
          </li>
        </ul>
      </div>

      <div class="tally-card-report">
        <ul ref="transactionsList">
          <h4>TRANSACTIONS</h4>

          <li :class="{ active: currentIndex == 3 }">
            <a href="javascript:void(0);">
              <span>V</span>ouchers
              <!-- <span class="coming-soon" style="color: #ff0000 !important"
                >Coming Soon...</span
              > -->
            </a>
          </li>
          <!-- <li :class="{ active: currentIndex == 2 }">
            <a href="javascript:void(0);" @click="navigate(2)">
              <span>V</span>ouchers
            </a>
          </li> -->

          <li :class="{ active: currentIndex == 4 }" data-href="/tally-style-daybook" style="margin-bottom:10px;">
            <a href="javascript:void(0);" @click="navigate(4)">
              Day Boo<span>K</span>
            </a>
          </li>
        </ul>
      </div>


      <div class="tally-card-report">
        <ul ref="reportsList">
          <h4>REPORTS</h4>

          <li :class="{ active: currentIndex == 5 }" data-href="/tally-style-balancesheet">
            <a href="javascript:void(0);" @click="navigate(5)">
              <span>B</span>alance Sheet
            </a>
          </li>

          <li :class="{ active: currentIndex == 6 }" data-href="/tally-style-profitloss">
            <a href="javascript:void(0);" @click="navigate(6)">
              <span>P</span>rofit & Loss A/c
            </a>
          </li>

          <li :class="{ active: currentIndex == 7 }" data-href="/tally-style-stock-summary">
            <a href="javascript:void(0);" @click="navigate(7)">
              <span>S</span>tock Summary
            </a>
          </li>

          <li :class="{ active: currentIndex == 8 }" style="margin-bottom:15px;">
            <a href="javascript:void(0);">
              <span>R</span>atio Analysis
              <span class="coming-soon" style="color: #ff0000 !important">Coming Soon...</span>
            </a>
          </li>

          <li @click="selectGateWay(9)" :class="{ active: currentIndex == 9 }" data-href="/tally-style-display-reports"
            style="margin-bottom:15px;">
            <a href="javascript:void(0);">
              <span>D</span>isplay More Reports
            </a>
          </li>

          <li @click="navigate(10)" :class="{ active: currentIndex == 10 }">
            <a href="javascript:void(0);">
              <span>Q</span>uit
            </a>
          </li>
        </ul>
      </div>
    </div>
    <TallyExitModal :showModal="showExitModal" @closed="handleNoClickQuite" @quit="handleYesClickQuite" />
    <div v-if="showCreatePopup">
      <Create-Popup @closeCreateModal="closeCreateModal" />
    </div>
    <div v-if="showAlterPopup">
      <Alter-Popup @closeAlterModal="closeAlterModal" />
    </div>
    <div v-if="showChartOfAccount">
      <chartOfAccountPopup @closeChartOfAccounts="closeChartOfAccounts" @showCompanyModal="showCompanyModel" />
    </div>
    <div v-if="changeCompany">
      <Company-Modal :companyModalLabel="companyModalLabel" :showChangeCompany="showChangeCompany"
        :showSelectCompany="true" :showShutCompany="showShutCompany" @changeCompanyClose="changeCompanyClose"
        :resetTallySidebarValues="resetTallySidebarValues" />
    </div>
  </div>
</template>

<script>
import Api from "@/Api";
import Common from "@/Common";
import CreatePopup from "../../components/Sidebar/Create-Popup.vue";
import AlterPopup from "../../components/Sidebar/Alter-Popup.vue";
import chartOfAccountPopup from "../Sidebar/ChartOfAccount-Popup.vue";
import EventBus from "../../eventBus";
import store from "../../store";
import { mapActions, mapState } from "vuex";
import TallyExitModal from "./TallyExitModal.vue";
import ChartOfAccountPopup from "../Sidebar/ChartOfAccount-Popup.vue";

export default {
  components: {
    CreatePopup,
    AlterPopup,
    TallyExitModal,
    chartOfAccountPopup
  },
  props: {
    isActive: Boolean,
  },

  data() {
    return {
      currentIndex: 0,
      showCreatePopup: false,
      showAlterPopup: false,
      showExitModal: false,
      showChartOfAccount: false,
      changeCompany: false,
      showShutCompany: false,
      showChangeCompany: false,
      companyModalLabel: "Change Company",
      resetTallySidebarValues: true,
    };
  },

  created() {
    this.addEventListenerFunc();
    store.dispatch("tallyStore/resetValues");

    const screenName = 'GatewayLivekeeping'; // Replace with the actual screen name
    const index = store.getters['tallyStore/getSelectedIndex'](screenName);

    if (index) {
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


    logout() {
      setTimeout(() => {
        this.logoutAPI();
        this.showExitModal = false;
      }, 200);
      return false;
    },
    logoutAPI() {
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
    selectGateWay(index) {
      this.currentIndex = index;
      this.navigateToNextScreen();

      this.$store.dispatch("visibility/setComponentVisibility", {
        component: "showDisplayReports",
        isVisible: true,
      });

    },

    // To get state from store
    ...mapActions({
      setFirstBlock: "tallyStore/setFirstBlock",
    }),

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

    changeCompanyClose(label) {
      if (label === "changeCompany") {
        this.companyIndex++;
      }
      this.changeCompany = false;
      this.companyModalLabel = "Change Company";
      this.showChangeCompany = false;
      this.showShutCompany = false;
      this.handleChartOfAccounts();
    },

    handleRemoveListener(){
      this.removeEventListenerFunc();
      this.$emit("removeListener");
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

    handleChartOfAccounts() {
      this.handleRemoveListener();
      this.showChartOfAccount = true;
      this.$store.state.tallyStore.isChartOfAccountOpen = false;
    },

    showCompanyModel() {
      this.handleRemoveListener();
      this.showChartOfAccount = false;
      this.changeCompany = true;
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
          if (this.currentIndex === 9) {
            this.selectGateWay(this.currentIndex);
          } else if (this.showExitModal) {
            this.handleYesClickQuite();
          }
          else {
            this.navigate(this.currentIndex);
          }
          break;

        case "Control":
          if(this.showExitModal) return;
          this.afterPressedCtrlKeyStoreValue();
          break;

        case "Alt":
          if(this.showExitModal) return;
          this.afterPressedAltKeyStoreValue();
          break;

        case "Escape":
          store.dispatch("tallyStore/resetState");
          event.preventDefault();
          this.showExitModal = !this.showExitModal;
          this.$emit("isExit", this.showExitModal);
          break;

        default:

          break;
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

          break;

        case 1:

          break;

        case 2:
          this.handleChartOfAccounts();
          break;

        case 3:
          this.currentIndex = index;
          this.navigateToNextScreen();
          this.$router.push({
            path: "tally-style-sales-create-voucher",
            query: {
              routeFrom: "gateway"
            }
          });
          break;

        case 4:
          this.currentIndex = index;
          this.navigateToNextScreen();
          this.$router.push("/tally-style-daybook");
          break;

        case 5:
          this.currentIndex = index;
          this.navigateToNextScreen();
          this.$router.push("/tally-style-balancesheet");
          break;

        case 6:
          this.currentIndex = index;
          this.navigateToNextScreen();
          this.$router.push("/tally-style-profitloss");
          break;

        case 7:
          this.currentIndex = index;
          this.navigateToNextScreen();
          const companyId = this.$store.state.tallyStore.companyId;
          this.$router.push({
            name: "tally-style-stock-summary-id",
            params: {
              id: `${companyId}_StockGroupPrimary`,
            },
            query: {
              groupName: "Primary",
            },
          });
          break;


        case 8:

          break;

        case 9:
          this.currentIndex = index;

          break;



        case 10:
          this.currentIndex = index;
          this.showExitModal = true;
          this.$emit("isExit", true);
          //this.logout();
          break;

        default:
          const selectedListItem = this.concatValue[index];
          const href = selectedListItem.dataset.href;
          if (href) {
            this.$router.push(href);
          }
          break;
      }


    },

    getAllLi() {

      const mastersList = this.$refs.mastersList;
      const transactionsList = this.$refs.transactionsList;

      const reportsList = this.$refs.reportsList;

      const liElements = mastersList.querySelectorAll("li");
      const liElements2 = transactionsList.querySelectorAll("li");

      const liElements3 = reportsList.querySelectorAll("li");

      const liArray = Array.from(liElements);
      const liArray2 = Array.from(liElements2);

      const liArray3 = Array.from(liElements3);

      const concatenatedArray = [
        ...liArray,
        ...liArray2,

        ...liArray3,
      ];
      return concatenatedArray;
    },

    handleYesClickQuite() {
      this.showExitModal = false;
      this.logout();
    },

    handleNoClickQuite() {
      this.showExitModal = false;
      this.$emit("isExit", false);
    },

    handleEventKey(event) {
      const key = event.key.toLowerCase();

      switch (key) {
        case "a":

          break;

        case "c":
          this.handleChartOfAccounts();
          break;

        case "v":
          this.currentIndex = 2;
          this.navigateToNextScreen();
          this.$router.push({
            path: "tally-style-sales-create-voucher",
            query: {
              routeFrom: "gateway"
            }
          });
          break;

        case "k":
          this.currentIndex = 3;
          this.navigateToNextScreen();
          this.$router.push("/tally-style-daybook");
          break;

        case "b":
          this.currentIndex = 4;
          this.navigateToNextScreen();
          this.$router.push("/tally-style-balancesheet");
          break;

        case "p":
          this.currentIndex = 5;
          this.navigateToNextScreen();
          this.$router.push("/tally-style-profitloss");
          break;

        case "d":
          this.currentIndex = 8;
          this.navigateToNextScreen();
          this.selectGateWay(this.currentIndex);
          break;

        case "s":
          this.currentIndex = 6;
          this.navigateToNextScreen();
          this.$router.push("/tally-style-stock-summary");
          break;

        case "q":
          this.showExitModal = true;
          this.$emit("isExit", true);
          //this.logout();
          break;

        case "r":
          this.$router.push("");
          break;

        case "y":
          if (this.showExitModal) {
            this.handleYesClickQuite();
          }
          break;

        case "n":
          if (this.showExitModal) {
            this.handleNoClickQuite();
          }
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

    navigateToNextScreen() {
      const screenName = "GatewayLivekeeping";
      store.dispatch("tallyStore/setIndex", { screenName, newIndex: this.currentIndex })
    },

    closeCreateModal() {
      this.showCreatePopup = false;
      setTimeout(() => {
        this.addEventListenerFunc();
      }, 200);
      this.$emit("addListener");
    },

    closeAlterModal() {
      this.showAlterPopup = false;
      setTimeout(() => {
        this.addEventListenerFunc();
      }, 200);
      this.$emit("addListener");
    },
    closeChartOfAccounts() {
      this.showChartOfAccount = false;
      setTimeout(() => {
        this.addEventListenerFunc();
      }, 200);
      this.$emit("addListener");
    }
  },

  mounted() {
    this.concatValue = this.getAllLi();
    if (this.$store.state.tallyStore.isChartOfAccountOpen) {
      this.handleChartOfAccounts();
    }
  },
};
</script>

<style>
h4.routeList {
  margin: 0px 0 0px 0;
  color: #1a1a1a;
  font-size: 11.5px;
  font-weight: 400;
  padding-left: 60px;
  cursor: pointer;
}
</style>
