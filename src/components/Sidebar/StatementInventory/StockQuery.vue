<template>
  <div>
    <div class="modal-vue-tally">
      <div class="set-popup-main-front-company-modal-design">
        <div
          class="main-tally-front-company-popup"
          @click="focusStockQueryModal"
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
                  <a href="javascript:void(0);" @click="closeStockQueryModalIcon"
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
                v-model="StockQueryModalInput"
                ref="InputStockQueryModal"
                @keydown.esc="handleEscapeKey"
                @input="handleInput"
              />
            </div>
          </div>

          <div class="select-shut-company-flow-boxes">
            <h6>List of Stock Items</h6>
            <ul class="company-selection-popup-boxes overflow-ledger-indexing-height-set" ref="StockQueryModalList">
              <li
                :class="{ selected: StockQueryModalIndex == index }"
                v-for="(ledger, index) in displayedStockQueryList"
                :key="index"
                @click="selectStockQueryRow(index)"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="company-popup-list-name-left">
                      <a href="javascript:void(0);">
                        {{ ledger.name }}
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <!-- <li>Demo</li> -->
            </ul>
          </div>
        </div>
      </div>
      <div class="overlay2" @click="focusStockQueryModal"></div>
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
      // StockQueryModalList: [],
      StockQueryModalIndex: 0,
      currentCompanyName: "",

      StockQueryModalInput: "",
      StockQueryList: [],
      displayedStockQueryList: [],

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
      document.addEventListener("keydown", this.handleArrowKeys);
      document.addEventListener("wheel", this.handleMouseScroll);
    },
    removeEventListenerFunc() {
      document.removeEventListener("keydown", this.handleArrowKeys);
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

    focusStockQueryModal() {
      //   document.addEventListener("keydown", keydownAddCompanyModal);
      this.$nextTick(() => {
        const inputElement = this.$refs.InputStockQueryModal;
        console.log(inputElement);
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
      });
    },

    closeStockQueryModalIcon() {
      this.$emit("closeStockQueryModalAndRoute");
    },

    selectStockQueryRow(index) {
      if (this.StockQueryModalIndex !== index) {
        this.StockQueryModalIndex = index;
      } else {
        this.routeFunction(
          this.displayedStockQueryList[index].guid,
          this.displayedStockQueryList[index].name
        );
      }
    },

    routeFunction(id, l_name) {
      let routeName = "tally-style-stock-query";
      console.log(l_name, "name");

      if (routeName) {
        localStorage.setItem("StockQueryModalIndex", this.StockQueryModalIndex);
        localStorage.setItem("screen", "stockQuery");
        this.$router.push({
          name: routeName,
          params: {
            guid: id,
          },
          query: {
            stockItemName: l_name,
          },
        });
      }
      this.$emit("callApi");
      this.closeStockQueryModalIcon();
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
      console.log("stockQuery", this.StockQueryModalIndex);
      this.routeFunction(
        this.displayedStockQueryList[this.StockQueryModalIndex].guid,
        this.displayedStockQueryList[this.StockQueryModalIndex].name
      );
    },

    // selectVocherType(index, voucherValue) {
    //   if (this.StockQueryModalIndex !== index) {
    //     this.StockQueryModalIndex = index;
    //     this.voucherTypeInput = voucherValue;
    //   } else {
    //     this.$emit("selectVoucherType", voucherValue);
    //     this.$emit("closeVoucherTypeModal");
    //   }
    // },

    handleArrowUp() {
      // Only go up if there are items above the current StockQueryModalIndex
      if (this.StockQueryModalIndex > 0) {
        this.StockQueryModalIndex--;
        this.scrollToSelectedRow();
      }
    },
    
    handleArrowDown() {
      // Only go down if there are items below the current StockQueryModalIndex
      if (this.StockQueryModalIndex < this.displayedStockQueryList.length - 1) {
        this.StockQueryModalIndex++;
        this.scrollToSelectedRow();
      } 
    },

    // scrollToSelectedRow() {
    //   this.$nextTick(() => {
    //     const selectedRow = document.querySelector(".selected");
    //     console.log(selectedRow, "scrollToSelectedRow");
    //     if (selectedRow) {
    //       // const container = selectedRow.closest(
    //       //   ".select-shut-company-flow-boxes"
    //       // );
    //       const container = selectedRow.closest(
    //         ".overflow-ledger-indexing-height-set"
    //       );
    //       const containerRect = container.getBoundingClientRect();
    //       const rowRect = selectedRow.getBoundingClientRect();

    //       const rowBottomOffset = rowRect.top + rowRect.height;
    //       const containerBottomOffset =
    //         containerRect.top + containerRect.height;

    //       // Check if selected row is at the bottom of the container
    //       if (rowBottomOffset > containerBottomOffset) {
    //         container.scrollTop += rowBottomOffset - containerBottomOffset;
    //       }
    //       // Check if selected row is at the top of the container
    //       else if (rowRect.top < containerRect.top) {
    //         container.scrollTop -= containerRect.top - rowRect.top;
    //       }

    //       // Scroll to top if looped back to the first row
    //       if (this.StockQueryModalIndex === 0 && container.scrollTop !== 0) {
    //         container.scrollTop = 0;
    //       }
    //     }

    //     if (this.StockQueryModalIndex == this.displayedStockQueryList.length - 3) {
    //       this.isLastIndexOfLedgerList();
    //     }
    //   });
    // },

    scrollToSelectedRow() {
    this.$nextTick(() => {
      const selectedRow = document.querySelector(".selected");

      if (!selectedRow) {
        console.warn("Selected row not found.");
        return; // Exit if the selected row is not found
      }

      const container = selectedRow.closest(
        ".overflow-ledger-indexing-height-set"
      );

      if (!container) {
        console.warn("Container not found.");
        return; // Exit if the container is not found
      }

      const containerRect = container.getBoundingClientRect();
      const rowRect = selectedRow.getBoundingClientRect();

      const rowBottomOffset = rowRect.top + rowRect.height;
      const containerBottomOffset = containerRect.top + containerRect.height;

      // Check if selected row is at the bottom of the container
      if (rowBottomOffset > containerBottomOffset) {
        container.scrollTop += rowBottomOffset - containerBottomOffset;
      }
      // Check if selected row is at the top of the container
      else if (rowRect.top < containerRect.top) {
        container.scrollTop -= containerRect.top - rowRect.top;
      }

      // Scroll to top if looped back to the first row
      if (this.StockQueryModalIndex === 0 && container.scrollTop !== 0) {
        container.scrollTop = 0;
      }

      // Check if the selected index is near the end of the list
      if (this.StockQueryModalIndex == this.displayedStockQueryList.length - 3) {
        this.isLastIndexOfLedgerList();
      }
    });
  },


    isLastIndexOfLedgerList() {
      const batchSize = 100;
      // const currentLength = this.displayedStockQueryList.length;

      // Calculate the next start and end limits
      //  this.nextStartLimit = currentLength + 1;
      this.nextStartLimit += batchSize;
      //  this.nextEndLimit = currentLength + batchSize;

      this.get_stock_items();
    },

    handleEscapeKey() {
      if (this.StockQueryModalInput) {
        this.StockQueryModalInput = "";
        this.searchedStockQueryName(this.StockQueryModalInput);
        this.StockQueryList = [];
        this.displayedStockQueryList = [];
        this.get_stock_items();
      } else {
        this.$emit("closeStockQueryModal");
        localStorage.removeItem("StockQueryModalIndex");
        localStorage.removeItem("screen");
      }
    },

    handleInput() {
      this.searchedStockQueryName(this.StockQueryModalInput);
    },

    searchedStockQueryName(name) {
      if (name.trim() == "") {
        // this.displayedStockQueryList = this.StockQueryList;
        this.StockQueryList = [];
        this.displayedStockQueryList = [];
        this.get_stock_items();
      } else {
        const filteredGroupName = this.StockQueryList.filter((ledger) => {
          return ledger.name.toLowerCase().includes(name.toLowerCase());
        });
        this.displayedStockQueryList = filteredGroupName;

        if(this.displayedStockQueryList.length == 0){
          this.get_stock_items(name);
        }

        this.StockQueryModalIndex = 0;
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

      Api.getStockItemsListGo(data, headers)
        .then((response) => {
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );

          if (responseData == "200") {
            this.StockQueryList = response.data.data.list;
            this.displayedStockQueryList = [
              ...this.displayedStockQueryList,
              ...this.StockQueryList,
            ];

            this.StockQueryList = this.displayedStockQueryList;
            this.totalCount = response.data.data.totalCount;
          } else {
            this.StockQueryList = [];
            this.displayedStockQueryList = [];
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Common.getStatusForActionFailed(error.response.status);
        });
    },
  },

  mounted() {
    const StockQueryModalIndex = parseInt(localStorage.getItem("StockQueryModalIndex"));
    console.log(StockQueryModalIndex, "StockQueryModalIndex")
    if (StockQueryModalIndex) {
      this.StockQueryModalIndex = StockQueryModalIndex;
    }

    this.currentCompanyName = localStorage.getItem("currentCompanyName");
    this.focusStockQueryModal();
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
