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
      <h3>Statements of Accounts</h3>

      <div class="tally-card-report">
        <ul ref="summaryaccountlist">
          <li
            style="margin-bottom: 10px ;margin-top: 10px"
            :class="{ active: currentIndex == 0 }"
            data-href="/tally-style-outstandings"
          >
            <h4 class="routeList" @click="selectGateWay">
              <span class="green_text">O</span>utstandings
            </h4>
          </li>
          <li
            style="margin-bottom: 10px"
            :class="{ active: currentIndex == 1 }"
            data-href="/tally-style-cost-centres"
          >
            <h4 class="routeList" @click="selectGateWay1">
              <span class="green_text">C</span>ost Centres
            </h4>
          </li>
          <li
            style="margin-bottom: 10px"
            :class="{ active: currentIndex == 2 }"
            data-href="/tally-style-statistics"
          >
            <router-link :to="{ name: 'tally-style-statistics' }">
              <span class="green_text">S</span>tatistics
            </router-link>
          </li>

          <li
            :class="{ active: currentIndex == 3 }"
            
          >
            <a @click="navigateBack" href="javascript:void(0);"> <span>Q</span>uit </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/Api";
import Common from "@/Common";
import EventBus from "../../eventBus";
import store from "../../store";
import { mapActions, mapState } from "vuex";

export default {
  props: {
    isActive: Boolean,
  },

  data() {
    return {
      currentIndex: 0,
    };
  },

  created() {
    this.addEventListenerFunc();
    store.dispatch("tallyStore/resetValues");

    const screenName = "StatementAccounts";
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
    selectGateWay(index) {
      this.navigateToNextScreen();
      this.$store.dispatch("visibility/setComponentVisibility", {
        component: "showOutStandings",
        isVisible: true,
      });
    },

    selectGateWay1(index) {
      this.navigateToNextScreen();
      this.$store.dispatch("visibility/setComponentVisibility", {
        component: "showCostCentres",
        isVisible: true,
      });
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
          if(this.currentIndex === 3){
            this.navigateBack()
          }
          if (this.currentIndex === 0) {
            this.selectGateWay(this.currentIndex);
          }
          else if (this.currentIndex === 1) {
            this.selectGateWay1(this.currentIndex);
          } 
          else {
            this.navigate(this.currentIndex);
          }
          break;

        case "Control":
          this.afterPressedCtrlKeyStoreValue();
          console.log("pressed ctrl");
         
          break;

        case "Alt":
          this.afterPressedAltKeyStoreValue();
          console.log("pressed alt");
         
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
      console.log("array down pressed", this.currentIndex);
    },

    handleArrowUp() {
      this.currentIndex =
        (this.currentIndex - 1 + this.concatValue.length) %
        this.concatValue.length;
      console.log("array up pressed", this.currentIndex);
    },

    navigate(index) {
     
      const selectedListItem = this.concatValue[index];
      const href = selectedListItem.dataset.href; 
      if (href) {
        this.$router.push(href);
      }
      this.navigateToNextScreen();
    },

    navigateToNextScreen() {
      const screenName = "StatementAccounts";
      store.dispatch("tallyStore/setIndex", {
        screenName,
        newIndex: this.currentIndex,
      });
    },

    getAllLi() {
      
      const myList = this.$refs.myList;
      const liElements = myList.querySelectorAll("li");
      const liArray = Array.from(liElements);

      const concatenatedArray = [...liArray];
      return concatenatedArray;
    },

    handleEventKey(event) {
      const key = event.key.toLowerCase();

      switch (key) {
        case "o":
          this.currentIndex = 0;
          this.selectGateWay();
          break;
        case "c":
          this.currentIndex = 1;
          this.selectGateWay1();
          break;
        case "s":
          this.currentIndex = 2;
          console.log(key, "pressed");
          this.$router.push("/tally-style-statistics");
          this.navigateToNextScreen();
          break;
        case "q":
          this.navigateBack();
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
  },

  mounted() {
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
  cursor: pointer;
}
</style>
