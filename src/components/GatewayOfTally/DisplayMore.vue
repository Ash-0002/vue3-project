<template>
  <div>
    <h5 class="margin-bottom-set-reports">
      <router-link
        class="nav-link w-inline-block"
        :to="{ name: '' }"
      >
        Livekeeping Dashboard</router-link
      >
    </h5>
    <div class="gateway-tally-card" ref="myList">
      <h3>Display More Reports</h3>

      <div class="tally-card-report">
        <ul ref="accountingsList">
          <h4>ACCOUNTING</h4>

          <li
            :class="{ active: currentIndex == 0 }"
            data-href="/tally-style-trial-balance"
          >
            <router-link :to="{ name: 'tally-style-trial-balance' }">
              <span class="green_text">T</span>rial Balance
            </router-link>
          </li>
          <li
            :class="{ active: currentIndex == 1 }"
            data-href="/tally-style-daybook"
          >
            <router-link :to="{ name: 'tally-style-daybook' }">
              <span>D</span>ay Book
            </router-link>
          </li>
          <!-- <li :class="{ active: currentIndex == 2 }" data-href="/tally-style-cashflow"> -->
          <li :class="{ active: currentIndex == 2 }" data-href="">
            <router-link :to="{ name: 'tally-style-cashflow' }">
              <span>C</span>ash Flow 
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
            </router-link>
          </li>
          <!-- <li :class="{ active: currentIndex == 3 }" data-href="/tally-style-fundsflow" style="margin-bottom:10px;"> -->
          <li :class="{ active: currentIndex == 3 }" data-href="" style="margin-bottom:10px;">
            <router-link :to="{ name: 'tally-style-fundsflow' }">
              <span>F</span>unds Flow 
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
            
            </router-link>
          </li>

          <li
            :class="{ active: currentIndex == 4 }"
            data-href="/tally-style-account-books"
          >
            <a href="javascript:void(0);" @click="selectGateWay(4)">
              <span>A</span>ccount Books
            </a>
          </li>
         

          <li
            :class="{ active: currentIndex == 5 }"
            data-href="/tally-style-statements-accounts" style="margin-bottom:10px;"
          >
            <h4 class="routeList" @click="selectGateWay(5)">
              <span>S</span>tatement of Accounts
            </h4>
          </li>
        
        </ul>
      </div>

      <div class="tally-card-report">
        <ul ref="inventoryList">
          <h4>INVENTORY</h4>

          <li :class="{ active: currentIndex == 6 }" data-href="/tally-style-inventory-books">
            <h4 class="routeList" @click="selectGateWay(6)" style="margin-bottom:10px;">
              <span class="green_text">I</span>nventory Books
            </h4>
          </li>
          <li :class="{ active: currentIndex == 7 }" data-href="/tally-style-statements-of-Inventory">
            <h4 class="routeList" @click="selectGateWay(7)" style="margin-bottom:10px;">
              Stat<span class="green_text">E</span>ments of Inventory
              
            </h4>
          </li>
          <!-- <li :class="{ active: currentIndex == 7 }" data-href="/tally-style-inventory-books">
            <h4 class="routeList" @click="selectGateWay(7)" style="margin-bottom:10px;">
              Stat<span class="green_text">E</span>ments of Inventory
              
            </h4>
          </li> -->
        </ul>
          </div>

          <div class="tally-card-report">
        <ul ref="statutoryList">
          <h4>STATUTORY</h4>

          <li :class="{ active: currentIndex == 8 }" data-href="" style="margin-bottom:10px;">
            <h4 class="routeList" @click="selectGateWay(8)">
              GST Rep<span class="green_text">O</span>rts
              <span class="coming-soon" style="color:#ff0000 !important;">Coming Soon...</span>
            </h4>
          </li>
          </ul>
          </div>

          <div class="tally-card-report">
        <ul ref="exceptionList">
          <h4>EXCEPTION</h4>

          <li :class="{ active: currentIndex == 9 }" data-href="/tally-style-exception-reports" style="margin-bottom:10px;">
            <h4 class="routeList" @click="selectGateWay(9)">
              E<span class="green_text">X</span>ception Reports
            </h4>
          </li>
          <li @click="onEscHit" :class="{ active: currentIndex == 10 }" data-href="/tally-style">
            <router-link :to="{ name: 'tally-style' }">
              <span>Q</span>uit
            </router-link>
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
    store.dispatch('tallyStore/resetValues');
    const screenName = 'DisplayMore'; // Replace with the actual screen name
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
    selectGateWay(index) {
      if (index === 4) {
        this.$store.dispatch("visibility/setComponentVisibility", {
          component: "showAccountBooks",
          isVisible: true,
        });
      } else if (index === 5) {
        this.$store.dispatch("visibility/setComponentVisibility", {
          component: "showStatementAccounts",
          isVisible: true,
        });
      } else if (index === 6) {
        this.$store.dispatch("visibility/setComponentVisibility", {
          component: "showInventoryBooks",
          isVisible: true,
        });
      } 
      else if (index === 7) {
        this.$store.dispatch("visibility/setComponentVisibility", {
          component: "showStatementsOfInventory",
          isVisible: true,
        });
      } 
      // else if (index === 8) {
      //   this.$store.dispatch("visibility/setComponentVisibility", {
      //     component: "showGSTReports",
      //     isVisible: true,
      //   });
      // }
      else if (index === 9) {
        this.$store.dispatch("visibility/setComponentVisibility", {
          component: "showExceptionReports",
          isVisible: true,
        });
      }else if (index === 10) {
        this.onEscHit();
      }
    },

   
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

    getAllLi() {

      const accountingsList = this.$refs.accountingsList;
      const inventoryList = this.$refs.inventoryList;
      const statutoryList = this.$refs.statutoryList;
      const exceptionList = this.$refs.exceptionList;
      

      const liElements = accountingsList.querySelectorAll("li");
      const liElements2 = inventoryList.querySelectorAll("li");
      const liElements3 = statutoryList.querySelectorAll("li");
      const liElements4 = exceptionList.querySelectorAll("li");

      const liArray = Array.from(liElements);
      const liArray2 = Array.from(liElements2);
      const liArray3 = Array.from(liElements3);
      const liArray4 = Array.from(liElements4);

      const concatenatedArray = [...liArray, ...liArray2, ...liArray3, ...liArray4];
      return concatenatedArray;
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
      const screenName = "DisplayMore";
      store.dispatch("tallyStore/setIndex", { screenName, newIndex: this.currentIndex })
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
          if (this.currentIndex === 4) {
            this.$store.dispatch("visibility/setComponentVisibility", {
              component: "showAccountBooks",
              isVisible: true,
            });
            this.navigateToNextScreen();
          } else if (this.currentIndex === 5) {
            this.$store.dispatch("visibility/setComponentVisibility", {
              component: "showStatementAccounts",
              isVisible: true,
            });
            this.navigateToNextScreen();
          } else if (this.currentIndex === 6) {
            this.$store.dispatch("visibility/setComponentVisibility", {
              component: "showInventoryBooks",
              isVisible: true,
            });
            this.navigateToNextScreen();
          } else if (this.currentIndex === 7) {
            this.$store.dispatch("visibility/setComponentVisibility", {
              component: "showStatementsOfInventory",
              isVisible: true,
            });
            this.navigateToNextScreen();
          } else if (this.currentIndex === 8) {
            // this.$store.dispatch("visibility/setComponentVisibility", {
            //   component: "showGSTReports",
            //   isVisible: true,
            // });
            // this.navigateToNextScreen();
          } else if (this.currentIndex === 9) {
            this.$store.dispatch("visibility/setComponentVisibility", {
              component: "showExceptionReports",
              isVisible: true,
            });
            this.navigateToNextScreen();
          } else if (this.currentIndex === 10) {
            this.onEscHit();
          }
          else {
            this.navigate(this.currentIndex);
            this.navigateToNextScreen();
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
          this.onEscHit();
          event.preventDefault();
          break;

        default:
          break;
      }
    },

    onEscHit() {
      this.$store.dispatch("visibility/setComponentVisibility", {
            component: "showGatewayLivekeeping",
            isVisible: true,
          });
          store.dispatch("tallyStore/resetState");
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
        case "t":
          console.log(key, "pressed");
          this.currentIndex = 0;
          this.navigateToNextScreen();
          this.$router.push("/tally-style-trial-balance");
          break;

        case "d":
          console.log(key, "pressed");
          this.currentIndex = 1;
          this.navigateToNextScreen();
          this.$router.push("/tally-style-daybook");
          break;


        //case "c":
          //this.currentIndex = 2;
          //this.navigateToNextScreen();
          //this.$router.push("/tally-style-cashflow");
          //break;

          //case "f":
          //console.log(key, "pressed");
          //this.currentIndex = 3;
          //this.navigateToNextScreen();
          //this.$router.push("/tally-style-fundsflow");
          //break;
        
        case "a":
            this.currentIndex = 4;
            this.navigateToNextScreen();
            this.$store.dispatch("visibility/setComponentVisibility", {
            component: "showAccountBooks",
            isVisible: true,
          });
          break;

        case "s":
            this.currentIndex = 5;
            this.navigateToNextScreen();
            this.$store.dispatch("visibility/setComponentVisibility", {
            component: "showStatementAccounts",
            isVisible: true,
          });
          break;

        case "i":
            this.currentIndex = 6;
            this.navigateToNextScreen();
            this.$store.dispatch("visibility/setComponentVisibility", {
            component: "showInventoryBooks",
            isVisible: true,
          });
          break;

        case "e":
            this.currentIndex = 7;
            this.navigateToNextScreen();
            this.$store.dispatch("visibility/setComponentVisibility", {
            component: "showStatementsOfInventory",
            isVisible: true,
          });
          break;

        // case "o":
        //     this.currentIndex = 8;
        //     this.navigateToNextScreen();
        //     this.$store.dispatch("visibility/setComponentVisibility", {
        //     component: "showGSTReports",
        //     isVisible: true,
        //   });
        //   break;

        case "x":
            this.currentIndex = 9;
            this.navigateToNextScreen();
            this.$store.dispatch("visibility/setComponentVisibility", {
            component: "showExceptionReports",
            isVisible: true,
          });
          break;

        case "q":
          this.onEscHit();
          break;

        case "control":
          this.navigateToNextScreen();
          event.preventDefault();
          store.dispatch("tallyStore/resetValues");
          console.log("released Ctrl");
          break;

        case "alt":
          this.navigateToNextScreen();
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
  margin: 0px 0 0px 0 !important;
  color: #1a1a1a;
  font-size: 11.5px;
  font-weight: 400;
  padding-left: 60px;
  cursor: pointer;
}
</style>
