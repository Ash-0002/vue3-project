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
        <h3>Cost Centres</h3>
  
        <div class="tally-card-report">
          <ul ref="costCentresList">
            <li
              :class="{ active: currentIndex == 0 }"
              data-href=""
            >
                <router-link :to="{ name: 'tally-style-cost-centre-summary' }">
                    <span class="green_text">C</span>ost Centre Summary
                </router-link>
            </li>

            <li 
              style="margin-bottom: 10px"
              :class="{ active: currentIndex == 1 }"
            >
            <a href="javascript:void(0);" @click="selectRow(1)">
              C<span class="green_text">O</span>st Centre Break-up
            </a>
          </li>
  
            <li 
                :class="{ active: currentIndex == 2 }"
                data-href=""
            >
              <a href="javascript:void(0);" @click="selectRow(1)">
                <span class="green_text">L</span>edger Break-up
              </a>
            </li>

            <li
              :class="{ active: currentIndex == 3 }"
              data-href=""
            >
                <router-link :to="{name: 'tally-style-group-breakup'}">
                    <span class="green_text">G</span>roup Break-up
                </router-link>
            </li>
  
            <li style="cursor: pointer;" @click="navigateBack" :class="{ active: currentIndex == 4 }" data-href="/tally-style">
              <a :to="{ name: 'tally-style' }"> <span>Q</span>uit </a>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="showLedgerBreakup">
        <Ledger-List :parentData="parentData" @closeLedger="closePopup" />
      </div>
      <div v-if="showCostBreakup">
        <Cost-List :parentData="parentData" @closeLedger="closePopup" />
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
  import CostList from "../Sidebar/CostCentre/costCentresge.vue";
  import LedgerList from "../Sidebar/CostCentre/ledgerBreakup.vue"
  import GroupList from "../Sidebar/AccountsBook/Group-Voucher.vue";
  
  import { mapActions, mapState } from "vuex";
  
  export default {
    components: {
      CostList,
      GroupList,
      LedgerList,
    },
    props: {
      isActive: Boolean,
    },
  
    data() {
      return {
        currentIndex: 0,
        showCostBreakup: false,
        showLedgerBreakup: false,
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
                name: "tally-style-cost-centre-summary",
              });
            break;
  
          case 1:
            this.showCostBreakup = true;
            this.removeEventListenerFunc();
            this.$emit("removeListener");
            this.navigateToNextScreen();
            break;
  
          case 2:
            this.showLedgerBreakup = true;
            this.removeEventListenerFunc();
            this.$emit("removeListener");
            this.navigateToNextScreen();
            break;
  
          case 3:
            break;
          case 4:
            this.navigateBack();
            break;
  
       
        }
      },
  
      navigateToNextScreen() {
        const screenName = "Cost Breakup";
        store.dispatch("tallyStore/setIndex", {
          screenName,
          newIndex: this.currentIndex,
        });
      },
  
      getAllLi() {
       
        const costCentresList = this.$refs.costCentresList;
        const liElements = costCentresList.querySelectorAll("li");
        const liArray = Array.from(liElements);
        const concatenatedArray = [...liArray];
        return concatenatedArray;
      },
  
      handleEventKey(event) {
        const key = event.key.toLowerCase();
  
        switch (key) {
        case "o":
          this.currentIndex = 1;
          this.showCostBreakup = true;
          this.removeEventListenerFunc();
          this.$emit("removeListener");
          this.navigateToNextScreen();
          break;

          case "l":
            this.currentIndex = 2;
            this.showLedgerBreakup = true;
            this.removeEventListenerFunc();
            this.$emit("removeListener");
             this.navigateToNextScreen();
            break;

          case "q":
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
        this.showCostBreakup = false;
        this.showLedgerBreakup = false;
        setTimeout(() => {
          this.addEventListenerFunc();
        }, 200);
        this.$emit("addListener");
      },
    },
  
    mounted() {
      this.concatValue = this.getAllLi();
    },
  };
  </script>
  