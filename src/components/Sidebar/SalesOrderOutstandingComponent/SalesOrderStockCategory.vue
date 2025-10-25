<template>
  <div>
    <div class="modal-vue-tally">
      <div class="set-popup-main-front-company-modal-design">
        <div
          class="main-tally-front-company-popup"
          @click="focusSalesOrderStockCategoryModal"
        >
          <div class="company-popup-labelline-with-company">
            <div class="row align-items-center">
              <div class="col-lg-4 col-4">
                <div class="company-popup-labelline-text">
                  <!-- <h6>{{ companyModalLabel }}</h6> -->
                  <h6>Select Stock Category</h6>
                </div>
              </div>
              <div class="col-lg-4 col-4">
                <div class="company-popup-labelline-companyname">
                  <h6>{{ currentCompanyName }}</h6>
                </div>
              </div>
              <div class="col-lg-4 col-4">
                <div class="company-popup-labelline-icon">
                  <a href="javascript:void(0);" @click="closeSalesOrderStockCategoryModalIcon"
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
                <span>Name of Stock Category</span>
              </div>
              <input
                type="text"
                class="company-format-input-tally"
                v-model="SalesOrderStockCategoryModalInput"
                ref="InputSalesOderStockCategoryModal"
                @keydown.esc="handleEscapeKey"
                @input="handleInput"
                @keydown="handleArrowKeys"
              />
            </div>
          </div>

          <div class="select-shut-company-flow-boxes">
            <h6>List of Stock Categories</h6>
            <ul
              class="company-selection-popup-boxes overflow-ledger-indexing-height-set"
              ref="ReorderStockCategoryModalList"
            >
              <li
                :class="{ selected: SalesOrderStockCategoryIndex == index }"
                v-for="(StockCategory, index) in displayedSalesOrderStockCategoryList"
                :key="index"
                @click="selectGroupRow(index)"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="company-popup-list-name-left">
                      <a href="javascript:void(0);">
                        {{ StockCategory.stockCategoryName }}
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
      <div class="overlay2" @click="focusSalesOrderStockCategoryModal"></div>
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
      // ReorderStockCategoryModalList: [],
      SalesOrderStockCategoryIndex: 0,
      currentCompanyName: "",

      SalesOrderStockCategoryModalInput: "",
      SalesOrderStockCategoryList: [],
      displayedSalesOrderStockCategoryList: [],

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

    focusSalesOrderStockCategoryModal() {
      //   document.addEventListener("keydown", keydownAddCompanyModal);
      this.$nextTick(() => {
        const inputElement = this.$refs.InputSalesOderStockCategoryModal;
        console.log(inputElement);
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
      });
    },

    closeSalesOrderStockCategoryModalIcon() {
      this.$emit("closeSalesOrderStockCategoryModal");
    },

    selectGroupRow(index) {
      if (this.SalesOrderStockCategoryIndex !== index) {
        this.SalesOrderStockCategoryIndex = index;
      } else {
        this.routeFunction(
          this.displayedSalesOrderStockCategoryList[index].guid,
          this.displayedSalesOrderStockCategoryList[index].ledgerName
        );
      }
    },

    routeFunction(id, l_name) {
      let routeName = "";

      if (routeName) {
        // localStorage.setItem("SalesOrderStockCategoryIndex", this.SalesOrderStockCategoryIndex);

        this.$router.push({
          name: routeName,
          params: {
            guid: id,
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
        this.displayedSalesOrderStockCategoryList[this.SalesOrderStockCategoryIndex].guid,
        this.displayedSalesOrderStockCategoryList[this.SalesOrderStockCategoryIndex].ledgerName
      );
    },


    handleArrowUp() {
      this.SalesOrderStockCategoryIndex =
        (this.SalesOrderStockCategoryIndex - 1 + this.displayedSalesOrderStockCategoryList.length) %
        this.displayedSalesOrderStockCategoryList.length;

      this.scrollToSelectedRow();
    },

    handleArrowDown() {
      this.SalesOrderStockCategoryIndex = (this.SalesOrderStockCategoryIndex + 1) % this.displayedSalesOrderStockCategoryList.length;

      this.scrollToSelectedRow();
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
          if (this.SalesOrderStockCategoryIndex === 0 && container.scrollTop !== 0) {
            container.scrollTop = 0;
          }
        }

        if (this.SalesOrderStockCategoryIndex == this.displayedSalesOrderStockCategoryList.length - 3) {
          this.isLastIndexOfLedgerList();
        }
      });
    },

    isLastIndexOfLedgerList() {
      const batchSize = 100;
      // const currentLength = this.displayedSalesOrderStockCategoryList.length;

      // Calculate the next start and end limits
      //  this.nextStartLimit = currentLength + 1;
      this.nextStartLimit += batchSize;
      //  this.nextEndLimit = currentLength + batchSize;

      this.get_Stock_Categories();
    },

    handleEscapeKey() {
      if (this.SalesOrderStockCategoryModalInput) {
        this.SalesOrderStockCategoryModalInput = "";
        this.searchedGroupName(this.SalesOrderStockCategoryModalInput);
      } else {
        this.$emit("closeSalesOrderStockCategoryModal");
        localStorage.removeItem("SalesOrderStockCategoryIndex");
      }
    },

    handleInput() {
      this.searchedGroupName(this.SalesOrderStockCategoryModalInput);
    },

    searchedGroupName(name) {
      if (name.trim() == "") {
        this.displayedSalesOrderStockCategoryList = this.SalesOrderStockCategoryList;
      } else {
        const filteredGroupName = this.SalesOrderStockCategoryList.filter((ledger) => {
          return ledger.ledgerName.toLowerCase().includes(name.toLowerCase());
        });
        this.displayedSalesOrderStockCategoryList = filteredGroupName;
        this.SalesOrderStockCategoryIndex = 0;
      }
    },

    get_Stock_Categories() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: this.$store.state.tallyStore.companyId,
        requestFrom: "WEB", //WEB,MOBILE
        startLimit: this.nextStartLimit,
        endLimit: this.nextEndLimit,
        searchTerm: "",
        startDate: "2023-04-01",
        endDate: "2024-03-31",
      };

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getItemsCategoriesByCompanyIdGo(data, headers)
        .then((response) => {
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );

          if (responseData == "200") {
            this.SalesOrderStockCategoryList = response.data.data.list;
            this.displayedSalesOrderStockCategoryList = [
              ...this.displayedSalesOrderStockCategoryList,
              ...this.SalesOrderStockCategoryList,
            ];
            this.SalesOrderStockCategoryList = this.displayedSalesOrderStockCategoryList;
            this.totalCount = response.data.data.totalCount;
          } else {
            this.SalesOrderStockCategoryList = [];
            this.displayedSalesOrderStockCategoryList = [];
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
    this.focusSalesOrderStockCategoryModal();
    this.get_Stock_Categories();
  },
};
</script>

<style scoped>
/* .select-shut-company-flow-boxes {
  height: 88vh;
  overflow: hidden;
} */

/* .company-selection-popup-boxes {
  height: 84vh;
  overflow: hidden;
} */
</style>
