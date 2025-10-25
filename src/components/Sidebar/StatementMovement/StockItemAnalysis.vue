<template>
  <div>
    <div class="modal-vue-tally">
      <div class="set-popup-main-front-company-modal-design">
        <div
          class="main-tally-front-company-popup"
          @click="focusStockItemAnalysisModal"
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
                  <a href="javascript:void(0);" @click="closeStockItemAnalysisModalIcon"
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
                v-model="StockItemAnalysisModalInput"
                ref="InputStockItemAnalysisModal"
                @keydown.esc="handleEscapeKey"
                @input="handleInput"
                @keydown="handleArrowKeys"
              />
            </div>
          </div>

          <div class="select-shut-company-flow-boxes">
            <h6>List of Stock Items</h6>
            <ul class="company-selection-popup-boxes overflow-ledger-indexing-height-set" ref="StockItemAnalysisModalList">
              <li
                :class="{ selected: StockItemAnalysisIndex == index }"
                v-for="(StockItemAnalysisData, index) in displayedStockItemAnalysisList"
                :key="index"
                @click="selectStockItemAnalysisRow(index)"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="company-popup-list-name-left">
                      <a href="javascript:void(0);">
                        {{ StockItemAnalysisData.stockItemName }}
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
      <div class="overlay2" @click="focusStockItemAnalysisModal"></div>
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
      // StockItemAnalysisModalList: [],
      StockItemAnalysisIndex: 0,
      currentCompanyName: "",

      StockItemAnalysisModalInput: "",
      displayedStockItemAnalysisList: [],

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

    focusStockItemAnalysisModal() {
      //   document.addEventListener("keydown", keydownAddCompanyModal);
      this.$nextTick(() => {
        const inputElement = this.$refs.InputStockItemAnalysisModal;
        console.log(inputElement);
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
      });
    },

    closeStockItemAnalysisModalIcon() {
      this.$emit("closeStockItemAnalysisModal");
    },

    selectStockItemAnalysisRow(index) {
      if (this.StockItemAnalysisIndex !== index) {
        this.StockItemAnalysisIndex = index;
      } else {
        this.routeFunction(
          this.displayedStockItemAnalysisList[index].guid,
          this.displayedStockItemAnalysisList[index].ledgerName
        );
      }
    },

    routeFunction(id, l_name) {
      let routeName = "";

      if (routeName) {
        // localStorage.setItem("StockItemAnalysisIndex", this.StockItemAnalysisIndex);

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
        this.displayedStockItemAnalysisList[this.StockItemAnalysisIndex].guid,
        this.displayedStockItemAnalysisList[this.StockItemAnalysisIndex].ledgerName
      );
    },


    handleArrowUp() {
      if (this.StockItemAnalysisIndex > 0) {
        this.StockItemAnalysisIndex--;
        this.scrollToSelectedRow();
      }
    },

    handleArrowDown() {
      if (this.StockItemAnalysisIndex < this.displayedStockItemAnalysisList.length - 1) {
        this.StockItemAnalysisIndex++;
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
          if (this.StockItemAnalysisIndex === 0 && container.scrollTop !== 0) {
            container.scrollTop = 0;
          }
        }

        if (this.StockItemAnalysisIndex == this.displayedStockItemAnalysisList.length - 3) {
          this.isLastIndexOfLedgerList();
        }
      });
    },

    isLastIndexOfLedgerList() {
      const batchSize = 100;
      // const currentLength = this.displayedStockItemAnalysisList.length;

      // Calculate the next start and end limits
      //  this.nextStartLimit = currentLength + 1;
      this.nextStartLimit += batchSize;
      //  this.nextEndLimit = currentLength + batchSize;

      this.get_stock_items();
    },

    handleEscapeKey() {
      if (this.StockItemAnalysisModalInput) {
        this.StockItemAnalysisModalInput = "";
        this.searchedStockQueryName(this.StockItemAnalysisModalInput);
        this.StockQueryList = [];
        this.displayedStockItemAnalysisList = [];
        this.get_stock_items();
      } else {
        this.$emit("closeStockItemAnalysisModal");
        localStorage.removeItem("StockItemAnalysisIndex");
      }
    },

    handleInput() {
      this.searchedStockQueryName(this.StockItemAnalysisModalInput);
    },

    searchedStockQueryName(name) {
      if (name.trim() == "") {
        // this.displayedStockItemAnalysisList = this.StockQueryList;
        this.StockQueryList = [];
        this.displayedStockItemAnalysisList = [];
        this.get_stock_items();
      } else {
        const filteredGroupName = this.StockQueryList.filter((StockItemAnalysisData) => {
          return StockItemAnalysisData.stockItemName.toLowerCase().includes(name.toLowerCase());
        });
        this.displayedStockItemAnalysisList = filteredGroupName;

        if(this.displayedStockItemAnalysisList.length == 0){
          this.get_stock_items(name);
        }

        this.StockItemAnalysisIndex = 0;
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
            this.displayedStockItemAnalysisList = [
              ...this.displayedStockItemAnalysisList,
              ...this.StockQueryList,
            ];

            this.StockQueryList = this.displayedStockItemAnalysisList;
            this.totalCount = response.data.data.totalCount;
          } else {
            this.StockQueryList = [];
            this.displayedStockItemAnalysisList = [];
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Common.getStatusForActionFailed(error.response.status);
        });
    },
  },

  mounted() {

    this.currentCompanyName = localStorage.getItem("currentCompanyName");
    this.focusStockItemAnalysisModal();
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
