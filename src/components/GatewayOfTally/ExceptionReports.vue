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
      <h3>Exception Reports</h3>

      <div class="tally-card-report">
        <ul ref="summarylist">
          <h4>REGISTERS</h4>

     
          <li
            :class="{ active: currentIndex == 0 }"
            data-href="/tally-style-optional-vouchers"
          >
            <router-link :to="{ 
              name: 'tally-style-optional-vouchers' , 
              query: { from: 'Optional Vouchers' } }">
              <span class="green_text">O</span>ptional Vouchers
              </router-link>
            </li>
            <li
            :class="{ active: currentIndex == 1 }"
            data-href="/tally-style-optional-vouchers"
            style="margin-bottom: 10px"
          >
            <router-link :to="{ name: 'tally-style-optional-vouchers', 
             query: { from: 'Cancelled Vouchers' } }">
              <span class="green_text">C</span>ancelled Vouchers
             
            </router-link>
          </li>
          <!-- <li
            :class="{ active: currentIndex == 2 }"
            data-href="/tally-style-post-dated-vouchers"
            style="margin-bottom: 10px"
          >
            <router-link :to="{ name: 'tally-style-post-dated-vouchers' }">
              Po<span class="green_text">S</span>t-Dated Vouchers
              <i class="fa fa-info info-icon-show"></i>
           
            </router-link>
          </li> -->
          <li
            :class="{ active: currentIndex == 2 }"
             data-href="tally-style-post-dated-vouchers"
            style="margin-bottom: 10px"
          >
            <router-link  :to="{ name: 'tally-style-post-dated-vouchers'}">
              Po<span class="green_text">S</span>t-Dated Vouchers
              
           
            </router-link>
          </li>
        </ul>
      </div>

      <div class="tally-card-report">
        <ul ref="registerlist">
          <h4>REPORTS</h4>

          <li
            :class="{ active: currentIndex == 3 }"
            data-href="/tally-style-negative-ledgers"
            style="margin-bottom: 10px"
          >
            <router-link :to="{ name: 'tally-style-negative-ledgers' }">
              Negative <span class="green_text">L</span>edgers
           
            </router-link>
          </li>
          <!-- <li
            :class="{ active: currentIndex == 3 }"
          >
            <a href="javascript:void(0);">
              Negative <span class="green_text">L</span>edgers
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
           
            </a>
          </li> -->
          <li
            :class="{ active: currentIndex == 4 }"
            data-href="/tally-style-negative-stock"
            style="margin-bottom: 10px"
          >
            <router-link :to="{ name: 'tally-style-negative-stock' }">
              <span class="green_text">N</span>egative Stock
             
            </router-link>
          </li>
          <li
            :class="{ active: currentIndex == 5 }"
            data-href="/tally-style-bill-receivable"
          >
            <router-link
              :to="{
                name: 'tally-style-bill-receivable',
                query: { from: 'Overdue Bills Receivable' },
              }"
            >
              Ove<span class="green_text">R</span>due Receivables
           
            </router-link>
          </li>
          <li
            :class="{ active: currentIndex == 6 }"
            data-href="/tally-style-bill-payables"
            style="margin-bottom: 10px"
          >
            <router-link
              :to="{
                name: 'tally-style-bill-receivable',
                query: { from: 'Overdue Bills Payable' },
              }"
            >
              Overdue <span class="green_text">P</span>ayables
             
            </router-link>
          </li>
          <li @click="navigateBack" :class="{ active: currentIndex == 7 }" data-href="/tally-style">
         <a>
              <span>Q</span>uit
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="showGroupSummary">
      <Group-Summary @closeGroupSummary="closePopup" />
    </div>

    <div v-if="showLedger">
      <Ledger-List @closeLedger="closePopup" />
    </div>
  </div>
</template>

<script>
import Api from "@/Api";
import Common from "@/Common";
import store from "../../store";
import { mapActions, mapState } from "vuex";
import GroupSummary from "../Sidebar/AccountsBook/Group-Summary.vue";
import LedgerList from "../Sidebar/AccountsBook/Ledger.vue";

export default {
  components: {
    GroupSummary,
    LedgerList,
  },

  props: {
    isActive: Boolean,
  },

  data() {
    return {
      currentIndex: 0,
      concatValue: 0,

      showGroupSummary: false,
      showLedger: false,
    };
  },

  created() {
    this.addEventListenerFunc();
    store.dispatch("tallyStore/resetValues");

    const screenName = "ExceptionReports"; // Replace with the actual screen name
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
          //   component: "showDisplayReports",
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
          this.$router.push({
            path: "/tally-style-optional-vouchers",
            query: { from: 'Optional Vouchers ' },
          });
          this.navigateToNextScreen();
          break;
        case 1:
          this.$router.push({
            path: "/tally-style-optional-vouchers",
            query: { from: 'Cancelled Vouchers ' },
          });
          this.navigateToNextScreen();
          break;
        case 5:
          this.$router.push({
            path: "/tally-style-bill-receivable",
            query: { from: "Overdue Bills Receivable" },
          });
          this.navigateToNextScreen();
          break;

        case 6:
          this.$router.push({
            path: "/tally-style-bill-receivable",
            query: { from: "Overdue Bills Payable" },
          });
          this.navigateToNextScreen();
          break;
        case 7:
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

    navigateToNextScreen() {
      const screenName = "ExceptionReports";
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
        case "o":
          this.currentIndex = 0;
     
          this.$router.push({
            name: "tally-style-optional-vouchers",
            query: { from: 'Optional Vouchers ' }             
            });
            this.navigateToNextScreen();
            break;
            
            case "c":
              this.currentIndex = 1;
              
              this.$router.push({
                name: "tally-style-optional-vouchers",
                query: { from: 'Cancelled Vouchers ' }
         
          });
          this.navigateToNextScreen();
          break;

        // case "s":
        //   this.currentIndex = 2;
         
        //   this.$router.push({
        //     name: "tally-style-post-dated-vouchers",
         
        //   });
        //   this.navigateToNextScreen();
        //   break;

        case "l":
          this.currentIndex = 3;
        
          this.$router.push({
            name: "tally-style-negative-ledgers",
            params: {
              id: "",
            }
          });
          this.navigateToNextScreen();
          break;

        case "n":
          this.currentIndex = 4;
      
          this.$router.push({
            name: "tally-style-negative-stock",
          
          });
          this.navigateToNextScreen();
          break;

        case "r":
          this.currentIndex = 5;
       
          this.$router.push({
            name: "tally-style-bill-receivable",
            query: {
              from: "Overdue Bills Receivable",
            },
          });
          this.navigateToNextScreen();
          break;
        case "p":
          this.currentIndex = 6;
        
          this.$router.push({
            name: "tally-style-bill-receivable",
            query: {
              from: "Overdue Bills Payable",
            },
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
      setTimeout(() => {
        this.addEventListenerFunc();
      }, 200);
      this.$emit("addListener");
    },
  },

  mounted() {
    const groupIndex = localStorage.getItem("GroupIndex");
    if (groupIndex) {
      this.showGroupSummary = true;
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
