<template>
  <div>
    <div class="modal-vue-tally">
      <div class="set-popup-main-front-company-modal-design">
        <div
          class="main-tally-front-company-popup"
          @click="focusPurchaseOrderStockItemModal"
        >
          <div class="company-popup-labelline-with-company">
            <div class="row align-items-center">
              <div class="col-lg-4 col-4">
                <div class="company-popup-labelline-text">
                  <!-- <h6>{{ companyModalLabel }}</h6> -->
                  <h6>Select Stock Item</h6>
                </div>
              </div>
              <div class="col-lg-4 col-4">
                <div class="company-popup-labelline-companyname">
                  <h6>{{ currentCompanyName }}</h6>
                </div>
              </div>
              <div class="col-lg-4 col-4">
                <div class="company-popup-labelline-icon">
                  <a href="javascript:void(0);" @click="closePurchaseOrderStockItemModalIcon"
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
                <span>Name of Item</span>
              </div>
              <input
                type="text"
                class="company-format-input-tally"
                v-model="PurchaseOrderStockItemModalInput"
                ref="InputPurchaseOrderStockItemModal"
                @keydown.esc="handleEscapeKey"
                @input="handleInput"
                @keydown="handleArrowKeys"
              />
            </div>
          </div>

          <div class="select-shut-company-flow-boxes">
            <h6>List of Stock Items</h6>
            <ul class="company-selection-popup-boxes overflow-ledger-indexing-height-set" ref="PurchaseOrderStockItemModalList">
              <li
                :class="{ selected: PurchaseOrderStockItesmModalIndex == index }"
                v-for="(PurchaseOrderStockItemData, index) in displayedPurchaseOrderStockItemList"
                :key="index"
                @click="selectPurchaseOrderStockItemRow(index)"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="company-popup-list-name-left">
                      <a href="javascript:void(0);">
                        {{ PurchaseOrderStockItemData.stockItemName }}
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
      <div class="overlay2" @click="focusPurchaseOrderStockItemModal"></div>
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
      // PurchaseOrderStockItemModalList: [],
      PurchaseOrderStockItesmModalIndex: 0,
      currentCompanyName: "",

      PurchaseOrderStockItemModalInput: "",
      StockQueryList: [],
      displayedPurchaseOrderStockItemList: [],

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

    focusPurchaseOrderStockItemModal() {
      //   document.addEventListener("keydown", keydownAddCompanyModal);
      this.$nextTick(() => {
        const inputElement = this.$refs.InputPurchaseOrderStockItemModal;
        console.log(inputElement);
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
      });
    },

    closePurchaseOrderStockItemModalIcon() {
      this.$emit("closePurchaseOrderStockItemModal");
    },

    selectPurchaseOrderStockItemRow(index) {
      if (this.PurchaseOrderStockItesmModalIndex !== index) {
        this.PurchaseOrderStockItesmModalIndex = index;
      } else {
        this.routeFunction(
          this.displayedPurchaseOrderStockItemList[index].guid,
          this.displayedPurchaseOrderStockItemList[index].ledgerName
        );
      }
    },

    routeFunction(id, l_name) {
      let routeName = "";

      if (routeName) {
        // localStorage.setItem("PurchaseOrderStockItesmModalIndex", this.PurchaseOrderStockItesmModalIndex);

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
        this.displayedPurchaseOrderStockItemList[this.PurchaseOrderStockItesmModalIndex].guid,
        this.displayedPurchaseOrderStockItemList[this.PurchaseOrderStockItesmModalIndex].ledgerName
      );
    },


    handleArrowUp() {
      if (this.PurchaseOrderStockItesmModalIndex > 0) {
        this.PurchaseOrderStockItesmModalIndex--;
        this.scrollToSelectedRow();
      }
    },

    handleArrowDown() {
      // Only go down if there are items below the current PurchaseOrderStockItesmModalIndex
      if (this.PurchaseOrderStockItesmModalIndex < this.displayedPurchaseOrderStockItemList.length - 1) {
        this.PurchaseOrderStockItesmModalIndex++;
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
          if (this.PurchaseOrderStockItesmModalIndex === 0 && container.scrollTop !== 0) {
            container.scrollTop = 0;
          }
        }

        if (this.PurchaseOrderStockItesmModalIndex == this.displayedPurchaseOrderStockItemList.length - 3) {
          this.isLastIndexOfLedgerList();
        }
      });
    },

    isLastIndexOfLedgerList() {
      const batchSize = 100;
      // const currentLength = this.displayedPurchaseOrderStockItemList.length;

      // Calculate the next start and end limits
      //  this.nextStartLimit = currentLength + 1;
      this.nextStartLimit += batchSize;
      //  this.nextEndLimit = currentLength + batchSize;

      this.get_stock_items();
    },

    handleEscapeKey() {
      if (this.PurchaseOrderStockItemModalInput) {
        this.PurchaseOrderStockItemModalInput = "";
        this.searchedStockQueryName(this.PurchaseOrderStockItemModalInput);
        this.StockQueryList = [];
        this.displayedPurchaseOrderStockItemList = [];
        this.get_stock_items();
      } else {
        this.$emit("closePurchaseOrderStockItemModal");
        localStorage.removeItem("PurchaseOrderStockItesmModalIndex");
      }
    },

    handleInput() {
      this.searchedStockQueryName(this.PurchaseOrderStockItemModalInput);
    },

    searchedStockQueryName(name) {
      if (name.trim() == "") {
        // this.displayedPurchaseOrderStockItemList = this.StockQueryList;
        this.StockQueryList = [];
        this.displayedPurchaseOrderStockItemList = [];
        this.get_stock_items();
      } else {
        const filteredGroupName = this.StockQueryList.filter((PurchaseOrderStockItemData) => {
          return PurchaseOrderStockItemData.stockItemName.toLowerCase().includes(name.toLowerCase());
        });
        this.displayedPurchaseOrderStockItemList = filteredGroupName;

        if(this.displayedPurchaseOrderStockItemList.length == 0){
          this.get_stock_items(name);
        }

        this.PurchaseOrderStockItesmModalIndex = 0;
      }
    },

    get_stock_items(search="") {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: this.$store.state.tallyStore.companyId,
        requestFrom: "WEB", //WEB,MOBILE
        startLimit: this.nextStartLimit,
        endLimit: this.nextEndLimit,
        searchTerm: search,
        sortBy: "stockItemName",
        startDate: localStorage.getItem("date_range_start_date"),
        endDate: localStorage.getItem("date_range_end_date"),
        orderBy: 1,
        filterBy : "",
      };

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getStockItemsGo(data, headers)
        .then((response) => {
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );

          if (responseData == "200") {
            this.StockQueryList = response.data.data.list;
            this.displayedPurchaseOrderStockItemList = [
              ...this.displayedPurchaseOrderStockItemList,
              ...this.StockQueryList,
            ];

            this.StockQueryList = this.displayedPurchaseOrderStockItemList;
            this.totalCount = response.data.data.totalCount;
          } else {
            this.StockQueryList = [];
            this.displayedPurchaseOrderStockItemList = [];
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Common.getStatusForActionFailed(error.response.status);
        });
    },
  },

  mounted() {
    // const PurchaseOrderStockItesmModalIndex = parseInt(localStorage.getItem("PurchaseOrderStockItesmModalIndex"));
    // if (PurchaseOrderStockItesmModalIndex) {
    //   this.PurchaseOrderStockItesmModalIndex = PurchaseOrderStockItesmModalIndex;
    // }

    this.currentCompanyName = localStorage.getItem("currentCompanyName");
    this.focusPurchaseOrderStockItemModal();
    this.get_stock_items();
  },
};
</script>

<style scoped>
/* .select-shut-company-flow-boxes {
  height: 88vh;
  overflow: hidden;
}

.company-selection-popup-boxes {
  height: 84vh;
  overflow: hidden;
} */
</style>
