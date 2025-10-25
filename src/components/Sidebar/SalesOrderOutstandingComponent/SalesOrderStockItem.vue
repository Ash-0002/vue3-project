<template>
  <div>
    <div class="modal-vue-tally">
      <div class="set-popup-main-front-company-modal-design">
        <div
          class="main-tally-front-company-popup"
          @click="focusSalesOrderStockItemModal"
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
                  <a href="javascript:void(0);" @click="closeSalesOrderSalesOrderStockItemModalIcon"
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
                v-model="SalesOrderStockItemModalInput"
                ref="InputSalesOrderStockItemModal"
                @keydown.esc="handleEscapeKey"
                @input="handleInput"
                @keydown="handleArrowKeys"
              />
            </div>
          </div>

          <div class="select-shut-company-flow-boxes">
            <h6>List of Stock Items</h6>
            <ul class="company-selection-popup-boxes overflow-ledger-indexing-height-set" ref="SalesOrderStockItemModalList">
              <li
                :class="{ selected: SalesOrderStockItesmModalIndex == index }"
                v-for="(SalesOrderStockItemData, index) in displayedSalesOrderStockItemList"
                :key="index"
                @click="selectSalesOrderStockItemRow(index)"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="company-popup-list-name-left">
                      <a href="javascript:void(0);">
                        {{ SalesOrderStockItemData.stockItemName }}
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
      <div class="overlay2" @click="focusSalesOrderStockItemModal"></div>
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
      // SalesOrderStockItemModalList: [],
      SalesOrderStockItesmModalIndex: 0,
      currentCompanyName: "",

      SalesOrderStockItemModalInput: "",
      StockQueryList: [],
      displayedSalesOrderStockItemList: [],

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

    focusSalesOrderStockItemModal() {
      //   document.addEventListener("keydown", keydownAddCompanyModal);
      this.$nextTick(() => {
        const inputElement = this.$refs.InputSalesOrderStockItemModal;
        console.log(inputElement);
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
      });
    },

    closeSalesOrderSalesOrderStockItemModalIcon() {
      this.$emit("closeSalesOrderSalesOrderStockItemModal");
    },

    selectSalesOrderStockItemRow(index) {
      if (this.SalesOrderStockItesmModalIndex !== index) {
        this.SalesOrderStockItesmModalIndex = index;
      } else {
        this.routeFunction(
          this.displayedSalesOrderStockItemList[index].guid,
          this.displayedSalesOrderStockItemList[index].ledgerName
        );
      }
    },

    routeFunction(id, l_name) {
      let routeName = "";

      if (routeName) {
        // localStorage.setItem("SalesOrderStockItesmModalIndex", this.SalesOrderStockItesmModalIndex);

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
        this.displayedSalesOrderStockItemList[this.SalesOrderStockItesmModalIndex].guid,
        this.displayedSalesOrderStockItemList[this.SalesOrderStockItesmModalIndex].ledgerName
      );
    },


    handleArrowUp() {
      if (this.SalesOrderStockItesmModalIndex > 0) {
        this.SalesOrderStockItesmModalIndex--;
        this.scrollToSelectedRow();
      }
    },

    handleArrowDown() {
      // Only go down if there are items below the current SalesOrderStockItesmModalIndex
      if (this.SalesOrderStockItesmModalIndex < this.displayedSalesOrderStockItemList.length - 1) {
        this.SalesOrderStockItesmModalIndex++;
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
          if (this.SalesOrderStockItesmModalIndex === 0 && container.scrollTop !== 0) {
            container.scrollTop = 0;
          }
        }

        if (this.SalesOrderStockItesmModalIndex == this.displayedSalesOrderStockItemList.length - 3) {
          this.isLastIndexOfLedgerList();
        }
      });
    },

    isLastIndexOfLedgerList() {
      const batchSize = 100;
      // const currentLength = this.displayedSalesOrderStockItemList.length;

      // Calculate the next start and end limits
      //  this.nextStartLimit = currentLength + 1;
      this.nextStartLimit += batchSize;
      //  this.nextEndLimit = currentLength + batchSize;

      this.get_stock_items();
    },

    handleEscapeKey() {
      if (this.SalesOrderStockItemModalInput) {
        this.SalesOrderStockItemModalInput = "";
        this.searchedStockQueryName(this.SalesOrderStockItemModalInput);
        this.StockQueryList = [];
        this.displayedSalesOrderStockItemList = [];
        this.get_stock_items();
      } else {
        this.$emit("closeSalesOrderSalesOrderStockItemModal");
        localStorage.removeItem("SalesOrderStockItesmModalIndex");
      }
    },

    handleInput() {
      this.searchedStockQueryName(this.SalesOrderStockItemModalInput);
    },

    searchedStockQueryName(name) {
      if (name.trim() == "") {
        // this.displayedSalesOrderStockItemList = this.StockQueryList;
        this.StockQueryList = [];
        this.displayedSalesOrderStockItemList = [];
        this.get_stock_items();
      } else {
        const filteredGroupName = this.StockQueryList.filter((SalesOrderStockItemData) => {
          return SalesOrderStockItemData.stockItemName.toLowerCase().includes(name.toLowerCase());
        });
        this.displayedSalesOrderStockItemList = filteredGroupName;

        if(this.displayedSalesOrderStockItemList.length == 0){
          this.get_stock_items(name);
        }

        this.SalesOrderStockItesmModalIndex = 0;
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
            this.displayedSalesOrderStockItemList = [
              ...this.displayedSalesOrderStockItemList,
              ...this.StockQueryList,
            ];

            this.StockQueryList = this.displayedSalesOrderStockItemList;
            this.totalCount = response.data.data.totalCount;
          } else {
            this.StockQueryList = [];
            this.displayedSalesOrderStockItemList = [];
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Common.getStatusForActionFailed(error.response.status);
        });
    },
  },

  mounted() {
    // const SalesOrderStockItesmModalIndex = parseInt(localStorage.getItem("SalesOrderStockItesmModalIndex"));
    // if (SalesOrderStockItesmModalIndex) {
    //   this.SalesOrderStockItesmModalIndex = SalesOrderStockItesmModalIndex;
    // }

    this.currentCompanyName = localStorage.getItem("currentCompanyName");
    this.focusSalesOrderStockItemModal();
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
