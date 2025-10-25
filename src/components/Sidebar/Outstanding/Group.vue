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
                  <h6>Select Group</h6>
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
                <span>Name of Group</span>
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
            <h6>List of Groups</h6>
            <ul class="company-selection-popup-boxes" ref="companyList">
              <li
                :class="{ selected: groupIndex == index }"
                v-for="(ledger, index) in displayedLedgerList"
                :key="index"
                @click="selectGroupRow(index)"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="company-popup-list-name-left">
                      <router-link
                        :to="{
                          name: 'tally-style-group-outstandings',
                          params: { groupName: ledger.ledgerGroupName },
                        }"
                      >
                        {{ ledger.ledgerGroupName }}
                      </router-link>
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
      <div class="overlay2" @click="focusGroupSummaryInput"></div>
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
      // companyList: [],
      groupIndex: 0,
      currentCompanyName: "",

      searchGroup: "",
      ledgersList: [],
      displayedLedgerList: [],

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
      this.$emit("closeGroup");
    },

    selectGroupRow(index) {
      if (this.groupIndex !== index) {
        this.groupIndex = index;
      } else {
        this.routeFunction(this.displayedLedgerList[index].LedgerGropName);
      }
    },

    routeFunction(l_name) {
      let routeName = "tally-style-group-outstandings";

      if (routeName) {
        // localStorage.setItem("GroupIndex", this.groupIndex);

        this.$router.push({
          name: routeName,
          params: {
            groupName: l_name,
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
        this.displayedLedgerList[this.groupIndex].ledgerGroupName
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
      if (this.groupIndex > 0) {
        this.groupIndex--;
        this.scrollToSelectedRow();
      }
    },

    handleArrowDown() {
      if (this.groupIndex < this.displayedLedgerList.length - 1) {
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
            ".company-selection-popup-boxes"
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

        if (this.groupIndex == this.displayedLedgerList.length - 3) {
          this.isLastIndexOfLedgerList();
        }
      });
    },

    isLastIndexOfLedgerList() {
      const batchSize = 100;
      // const currentLength = this.displayedLedgerList.length;

      // Calculate the next start and end limits
      //  this.nextStartLimit = currentLength + 1;
      this.nextStartLimit += batchSize;
      //  this.nextEndLimit = currentLength + batchSize;

      this.getLedgers();
    },

    handleEscapeKey() {
      if (this.searchGroup) {
        this.searchGroup = "";
        this.searchedGroupName(this.searchGroup);
      } else {
        this.$emit("closeGroup");
        localStorage.removeItem("GroupIndex");
      }
    },

    handleInput() {
      this.searchedGroupName(this.searchGroup);
    },

    searchedGroupName(name) {
      if (name.trim() == "") {
        this.displayedLedgerList = this.ledgersList;
      } else {
        const filteredGroupName = this.ledgersList.filter((ledger) => {
          return ledger.ledgerGroupName
            .toLowerCase()
            .includes(name.toLowerCase());
        });
        this.displayedLedgerList = filteredGroupName;
        this.groupIndex = 0;
      }
    },

    getLedgers() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: this.$store.state.tallyStore.companyId,
        requestFrom: "WEB", //WEB,MOBILE
        masterReservedName: ["Sundry Debtors", "Sundry Creditors"],
        startLimit: this.nextStartLimit,
        endLimit: this.nextEndLimit,
      };

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getLedgerGroupsByCompanyIdGo(data, headers)
        .then((response) => {
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );

          if (responseData == "200") {
            this.ledgersList = response.data.data.list;
            this.displayedLedgerList = [
              ...this.displayedLedgerList,
              ...this.ledgersList,
            ];

            this.ledgersList = this.displayedLedgerList;
            this.totalCount = response.data.data.totalCount;
          } else {
            this.ledgersList = [];
            this.displayedLedgerList = [];
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
    this.focusGroupSummaryInput();
    this.getLedgers();
  },
};
</script>

<style scoped>
.select-shut-company-flow-boxes {
  height: 88vh;
  /* overflow: hidden; */
}

.company-selection-popup-boxes {
  height: 84vh;
  overflow: hidden;
}
</style>
