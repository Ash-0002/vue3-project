<template>
  <div>
    <div class="modal-vue-tally">
      <div class="set-popup-main-front-company-modal-design">
        <div
          class="main-tally-front-company-popup"
          @click="focusPurchaseOrderLedgerInput"
        >
          <div class="company-popup-labelline-with-company">
            <div class="row align-items-center">
              <div class="col-lg-4 col-4">
                <div class="company-popup-labelline-text">
                  <!-- <h6>{{ companyModalLabel }}</h6> -->
                  <h6>Select Ledger</h6>
                </div>
              </div>
              <div class="col-lg-4 col-4">
                <div class="company-popup-labelline-companyname">
                  <h6>{{ currentCompanyName }}</h6>
                </div>
              </div>
              <div class="col-lg-4 col-4">
                <div class="company-popup-labelline-icon">
                  <a href="javascript:void(0);" @click="closePurchaseOrderLedgerModalIcon"
                    ><i class="fa fa-close"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="tally-front-popup-company">
            <!-- <button class="close" @click="closeSelectCompanyModal">x</button> -->
            <div class="company-input-boxes">
              <div>
                <!-- <span>{{ companyModalLabel }}</span> -->
                <span>Name of Ledger</span>
              </div>
              <input
                type="text"
                class="company-format-input-tally"
                v-model="PurchaseOrderLedgerSearchModal"
                ref="PurchaseOrderLedgerInput"
                @keydown.esc="handleEscapeKey"
                @input="handleInput"
                @keydown="handleArrowKeys"
              />
            </div>
          </div>

          <div class="select-shut-company-flow-boxes">
            <h6>List of Ledgers</h6>
            <ul class="company-selection-popup-boxes overflow-ledger-indexing-height-set" ref="PurchaseOrderLedgerList">
              <li
                :class="{ selected: groupIndex == index }"
                v-for="(ledger, index) in displayedPurchaseOrderLedgerList"
                :key="index"
                @click="selectGroupRow(index)"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="company-popup-list-name-left">
                      <a href="javascript:void(0);">
                        {{ ledger.ledgerName }}
                      </a>
                    </div>
                  </div>
                  <!-- <div class="col-6">
                    <div class="company-popup-list-code-name-right">
                      <a href="javascript:void(0);" 
                        >{{ group.ledgerGroupName }} 
                      </a>
                    </div>
                  </div> -->
                </div>
              </li>
              <!-- <li>Demo</li> -->
            </ul>
          </div>
        </div>
      </div>
      <div class="overlay2" @click="focusPurchaseOrderLedgerInput"></div>
    </div>
  </div>
</template>

<script>
// import store from "../store";
import Api from "@/Api";
// import moment from "moment";
import Common from "@/Common";

export default {
  data() {
    return {
      // PurchaseOrderLedgerList: [],
      groupIndex: 0,
      currentCompanyName: "",

      PurchaseOrderLedgerSearchModal: "",
      ledgersList: [],
      displayedPurchaseOrderLedgerList: [],

      nextStartLimit: 0,
      nextEndLimit: 100,
    };
  },

  created() {
    this.addEventListenerFunc();
  },

  beforeDestroy() {
    this.removeEventListenerFunc();
  },

  methods: {
    addEventListenerFunc() {
      document.addEventListener("wheel", this.handleMouseScroll);
    },
    removeEventListenerFunc() {
      document.removeEventListener("wheel", this.handleMouseScroll);
    },

    handleMouseScroll(event) {
      // Use deltaY to determine the direction of the scroll
      const deltaY = event.deltaY;

      if (deltaY > 0) {
        // Scrolling down
        this.handleArrowDown();
      } else if (deltaY < 0) {
        // Scrolling up
        this.handleArrowUp();
      }
    },

    focusPurchaseOrderLedgerInput() {
      //   document.addEventListener("keydown", keydownAddCompanyModal);
      this.$nextTick(() => {
        const inputElement = this.$refs.PurchaseOrderLedgerInput;
        console.log(inputElement);
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
      });
    },

    closePurchaseOrderLedgerModalIcon() {
      this.$emit("closePurchaseOrderLedgerModal");
    },

    selectGroupRow(index) {
      if (this.groupIndex !== index) {
        this.groupIndex = index;
      } else {
        this.routeFunction(
          this.displayedPurchaseOrderLedgerList[index].guid,
          this.displayedPurchaseOrderLedgerList[index].ledgerName
        );
      }
    },

    routeFunction(id, l_name) {
      let routeName = "";

      if (routeName) {
        // localStorage.setItem("GroupIndex", this.groupIndex);

        this.$router.push({
          name: routeName,
          params: {
            guid: id,
          },
          query: {
            ledgerName: l_name,
          },
        });
      }
    },

    handleArrowKeys(event) {
      switch (event.key) {
        case "ArrowUp":
          this.handleArrowUp();
          break;
        case "ArrowDown":
          this.handleArrowDown();
          break;
        case "Enter":
          this.handleEnterKey();
      }
    },

    handleEnterKey() {
      this.routeFunction(
        this.displayedPurchaseOrderLedgerList[this.groupIndex].guid,
        this.displayedPurchaseOrderLedgerList[this.groupIndex].ledgerName
      );
    },

    // selectVocherType(index, voucherValue) {
    //   if (this.groupIndex !== index) {
    //     this.groupIndex = index;
    //     this.voucherTypeInput = voucherValue;
    //   } else {
    //     this.$emit("selectVoucherType", voucherValue);
    //     this.$emit("closeVoucherTypeModal");
    //   }
    // },

    handleArrowUp() {
      // Only go up if there are items above the current groupIndex
      if (this.groupIndex > 0) {
        this.groupIndex--;
        this.scrollToSelectedRow();
      }
    },

    handleArrowDown() {
      // Only go down if there are items below the current groupIndex
      if (this.groupIndex < this.displayedPurchaseOrderLedgerList.length - 1) {
        this.groupIndex++;
        this.scrollToSelectedRow();
      }
    },

    scrollToSelectedRow() {
      this.$nextTick(() => {
        const selectedRow = document.querySelector(".selected");
        if (selectedRow) {
          // const container = selectedRow.closest(
          //   ".select-shut-company-flow-boxes"
          // );
          const container = selectedRow.closest(
            ".overflow-ledger-indexing-height-set"
          );
          const containerRect = container.getBoundingClientRect();
          const rowRect = selectedRow.getBoundingClientRect();

          const rowBottomOffset = rowRect.top + rowRect.height;
          const containerBottomOffset =
            containerRect.top + containerRect.height;

          // Check if selected row is at the bottom of the container
          if (rowBottomOffset > containerBottomOffset) {
            container.scrollTop += rowBottomOffset - containerBottomOffset;
          }
          // Check if selected row is at the top of the container
          else if (rowRect.top < containerRect.top) {
            container.scrollTop -= containerRect.top - rowRect.top;
          }

          // Scroll to top if looped back to the first row
          if (this.groupIndex === 0 && container.scrollTop !== 0) {
            container.scrollTop = 0;
          }
        }

        if (this.groupIndex == this.displayedPurchaseOrderLedgerList.length - 3) {
          this.isLastIndexOfLedgerList();
        }
      });
    },

    isLastIndexOfLedgerList() {
      const batchSize = 100;
      // const currentLength = this.displayedPurchaseOrderLedgerList.length;

      // Calculate the next start and end limits
      //  this.nextStartLimit = currentLength + 1;
      this.nextStartLimit += batchSize;
      //  this.nextEndLimit = currentLength + batchSize;

      this.getLedgers();
    },

    handleEscapeKey() {
      if (this.PurchaseOrderLedgerSearchModal) {
        this.PurchaseOrderLedgerSearchModal = "";
        this.searchedGroupName(this.PurchaseOrderLedgerSearchModal);
        this.ledgersList = [];
        this.displayedPurchaseOrderLedgerList = [];
        this.getLedgers();
      } else {
        this.$emit("closePurchaseOrderLedgerModal");
        localStorage.removeItem("GroupIndex");
      }
    },

    handleInput() {
      this.searchedGroupName(this.PurchaseOrderLedgerSearchModal);
    },

    searchedGroupName(name) {
      if (name.trim() == "") {
        // this.displayedPurchaseOrderLedgerList = this.ledgersList;
        this.ledgersList = [];
        this.displayedPurchaseOrderLedgerList = [];
        this.getLedgers();
      } else {
        const filteredGroupName = this.ledgersList.filter((ledger) => {
          return ledger.ledgerName.toLowerCase().includes(name.toLowerCase());
        });
        this.displayedPurchaseOrderLedgerList = filteredGroupName;
        if(this.displayedPurchaseOrderLedgerList.length == 0){
          this.getLedgers(name);
        }
        this.groupIndex = 0;
      }
    },

    getLedgers(name='') {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: this.$store.state.tallyStore.companyId,
        requestFrom: "WEB", //WEB,MOBILE
        parent: [],
        startLimit: this.nextStartLimit,
        endLimit: this.nextEndLimit,
        searchTerm: name,
        sortBy: "ledgerName",
        startDate: "",
        endDate: "",
        orderBy: 1,
      };

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getLedgersGo(data, headers)
        .then((response) => {
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );

          if (responseData == "200") {
            this.ledgersList = response.data.data.list;
            this.displayedPurchaseOrderLedgerList = [
              ...this.displayedPurchaseOrderLedgerList,
              ...this.ledgersList,
            ];

            this.ledgersList = this.displayedPurchaseOrderLedgerList;
            this.totalCount = response.data.data.totalCount;
          } else {
            this.ledgersList = [];
            this.displayedPurchaseOrderLedgerList = [];
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Common.getStatusForActionFailed(error.response.status);
        });
    },
  },

  mounted() {
    // const groupIndex = parseInt(localStorage.getItem("GroupIndex"));
    // if (groupIndex) {
    //   this.groupIndex = groupIndex;
    // }

    this.currentCompanyName = localStorage.getItem("currentCompanyName");
    this.focusPurchaseOrderLedgerInput();
    this.getLedgers();
  },
};
</script>

<style scoped>
/* .select-shut-company-flow-boxes {
  height: 88vh;
  overflow: hidden;
} */
/* 
.company-selection-popup-boxes {
  height: 84vh;
  overflow: hidden;
} */
</style>
