<template>
    <div>
      <div class="modal-vue-tally">
        <div class="set-popup-main-front-company-modal-design">
          <div
            class="main-tally-front-company-popup"
            @click="focusGroupSummaryInput"
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
                    <a href="javascript:void(0);" @click="closeModalCompany"
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
                  v-model="searchGroup"
                  ref="companyInput"
                  @keydown.esc="handleEscapeKey"
                  @input="handleInput"
                  @keydown="handleArrowKeys"
                />
              </div>
            </div>
  
            <div class="select-shut-company-flow-boxes">
              <h6>List of Ledgers</h6>
              <ul class="company-selection-popup-boxes overflow-ledger-indexing-height-set" ref="companyList">
                <li
                  :class="{ selected: groupIndex == index }"
                  v-for="(alias, index) in displayedCostCentreList"
                  :key="index"
                  @click="selectGroupRow(index)"
                >
                  <div class="row">
                    <div class="col-12">
                      <div class="company-popup-list-name-left">
                        <a href="javascript:void(0);">
                          {{ alias.ledgerName }}
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="overlay2" @click="focusGroupSummaryInput"></div>
      </div>
    </div>
  </template>
  
  <script>
  // import store from "../store";
  import store from "../../../store";
  import Api from "@/Api";
  // import moment from "moment";
  import Common from "@/Common";
  
  export default {
    data() {
      return {
        // companyList: [],
        groupIndex: 0,
        currentCompanyName: "",
        currentLedgerName: "",
  
        searchGroup: "",
        costCentreList: [],
        displayedCostCentreList: [],
  
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
        console.log("mouse scroll: ");
        const deltaY = event.deltaY;
  
        if (deltaY > 0) {
          // Scrolling down
          this.handleArrowDown();
        } else if (deltaY < 0) {
          // Scrolling up
          this.handleArrowUp();
        }
      },
  
      focusGroupSummaryInput() {
        //   document.addEventListener("keydown", keydownAddCompanyModal);
        this.$nextTick(() => {
          const inputElement = this.$refs.companyInput;
          console.log(inputElement);
          inputElement.focus();
          inputElement.setSelectionRange(0, 0);
        });
      },
  
      closeModalCompany() {
        this.$emit("closeLedger");
      },
  
      selectGroupRow(index) {
        const item = this.displayedCostCentreList[index];
        this.routeFunction(item.ledgerName);
      },
  
      routeFunction(l_name) {
        this.$router.push({
          name: "tally-style-ledger-breakup",
          query: {
            ledgerName: l_name
          }
        });
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
            this.handleEnterKey(event);
          break;
        }
      },
  
      handleEnterKey(event) {
        event.preventDefault();
        event.stopPropagation();
        this.selectGroupRow(this.groupIndex);
      },
  
      handleArrowUp() {
        if(this.groupIndex > 0) {
          this.groupIndex =
            this.groupIndex - 1;
        }
  
        this.scrollToSelectedRow();
      },
  
      handleArrowDown() {
        if(this.groupIndex < this.displayedCostCentreList.length - 1){
          this.groupIndex =
            this.groupIndex + 1;
        }
  
        this.scrollToSelectedRow();
      },
  
      scrollToSelectedRow() {
        this.$nextTick(() => {
          const selectedRow = document.querySelector(".selected");
          if (!selectedRow) {
            return; // Exit if no selected row
          }
  
          const container = selectedRow.closest(".overflow-ledger-indexing-height-set");
          if (!container) {
            return; // Exit if no container
          }
  
          const containerRect = container.getBoundingClientRect();
          const rowRect = selectedRow.getBoundingClientRect();
  
          const rowBottomOffset = rowRect.top + rowRect.height;
          const containerBottomOffset = containerRect.top + containerRect.height;
  
          // Scroll if selected row is out of view
          if (rowBottomOffset > containerBottomOffset) {
            container.scrollTop += rowBottomOffset - containerBottomOffset;
          } else if (rowRect.top < containerRect.top) {
            container.scrollTop -= containerRect.top - rowRect.top;
          }
  
          // Scroll to top if looped back to the first row
          if (this.groupIndex === 0 && container.scrollTop !== 0) {
            container.scrollTop = 0;
          }
  
          if (this.groupIndex === this.displayedCostCentreList.length - 3) {
            this.isLastIndexOfLedgerList();
          }
        });
      },
  
      isLastIndexOfLedgerList() {
        const batchSize = 100; 
         this.nextStartLimit += batchSize ;
        this.getCostCentres();
      },
  
      handleEscapeKey() {
        if (this.searchGroup) {
          this.searchGroup = "";
          this.searchedGroupName(this.searchGroup);
        } else {
          this.$emit("closeLedger");
          localStorage.removeItem("GroupIndex");
        }
      },
  
      handleInput() {
        this.searchedGroupName(this.searchGroup);
      },
  
      searchedGroupName(name) {
        if (name.trim() == "") {
          this.displayedCostCentreList = this.costCentreList;
        } else {
          const filteredGroupName = this.costCentreList.filter((ledger) => {
            return ledger.ledgerName.toLowerCase().includes(name.toLowerCase());
          });
          this.displayedCostCentreList = filteredGroupName;
          this.groupIndex = 0;
        }
      },
  
      getCostCentres() {
        const data = {
          _userId: localStorage.getItem("customerId"),
          company_id: this.$store.state.tallyStore.companyId,
          requestFrom: "WEB", //WEB,MOBILE
          startLimit: this.nextStartLimit,
          endLimit: this.nextEndLimit,
          searchTerm: "",
          sortBy: "",
          orderBy: null,
          parent: [
                "All",
                "Sundry Creditors",
                "Sundry Debtors"
            ],
        };
  
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
        };
  
        Api.getCostLedgersGo(data, headers)
          .then((response) => {
            const responseData = Common.getStatusForActionFailed(
              response.data.status
            );
  
            if (responseData == "200") {
              this.costCentreList = response.data.data.list;
              this.displayedCostCentreList = [
                ...this.displayedCostCentreList,
                ...this.costCentreList,
              ];
  
              this.costCentreList = this.displayedCostCentreList;
              this.totalCount = response.data.data.totalCount;
            } else {
              this.costCentreList = [];
              this.displayedCostCentreList = [];
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
      this.searchGroup = "";

      
      this.focusGroupSummaryInput();
      this.getCostCentres();

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
  