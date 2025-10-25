<template>
  <div>
    <div class="modal-vue-tally">
      <div class="set-popup-main-front-company-modal-design">
        <div
          class="main-tally-front-company-popup"
          @click="focusPurchaseOrderGroupModal"
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
                  <a href="javascript:void(0);" @click="closePurchaseOrderGroupModalIcon"
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
                v-model="PurchaseOrderGroupSearchModal"
                ref="PurchaseOrderGroupInput"
                @keydown.esc="handleEscapeKey"
                @input="handleInput"
                @keydown="handleArrowKeys"
              />
            </div>
          </div>

          <div class="select-shut-company-flow-boxes">
            <h6>List of Groups</h6>
            <ul class="company-selection-popup-boxes overflow-stock-query-popup-height-set" ref="PurchaseOrderGroupList">
              <li
                :class="{ selected: PurchaseOrdergroupIndex == index }"
                v-for="(ledger, index) in displayedPurchaseOrderGroupList"
                :key="index"
                @click="selectGroupRow(index)"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="company-popup-list-name-left">
                      <router-link
              :to="{ name: 'tally-style-group-outstandings', params: { groupName: ledger.ledgerGroupName } }"
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
      <div class="overlay2" @click="focusPurchaseOrderGroupModal"></div>
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
      // GroupAnalysisList: [],
      PurchaseOrdergroupIndex: 0,
      currentCompanyName: "",

      PurchaseOrderGroupSearchModal: "",
      ledgersList: [],
      displayedPurchaseOrderGroupList: [],

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

    focusPurchaseOrderGroupModal() {
      //   document.addEventListener("keydown", keydownAddCompanyModal);
      this.$nextTick(() => {
        const inputElement = this.$refs.PurchaseOrderGroupInput;
        console.log(inputElement);
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
      });
    },

    closePurchaseOrderGroupModalIcon() {
      this.$emit("closePurchaseOrderGroupModal");
    },

    selectGroupRow(index) {
      if (this.PurchaseOrdergroupIndex !== index) {
        this.PurchaseOrdergroupIndex = index;
      } else {
        alert(this.displayedPurchaseOrderGroupList[index].LedgerGropName);
        this.routeFunction(this.displayedPurchaseOrderGroupList[index].LedgerGropName);
      }
    },

    routeFunction(l_name) {
      let routeName = "";

      if (routeName) {

        this.$router.push({
          name: routeName,
          params: {
            groupName : l_name,
          }
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
        this.displayedPurchaseOrderGroupList[this.PurchaseOrdergroupIndex].ledgerGroupName
      );
    },

    handleArrowUp() {
      this.PurchaseOrdergroupIndex =
        (this.PurchaseOrdergroupIndex - 1 + this.displayedPurchaseOrderGroupList.length) %
        this.displayedPurchaseOrderGroupList.length;

      this.scrollToSelectedRow();
    },

    handleArrowDown() {
      this.PurchaseOrdergroupIndex = (this.PurchaseOrdergroupIndex + 1) % this.displayedPurchaseOrderGroupList.length;

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
            ".overflow-stock-query-popup-height-set"
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
          if (this.PurchaseOrdergroupIndex === 0 && container.scrollTop !== 0) {
            container.scrollTop = 0;
          }
        }

        if (this.PurchaseOrdergroupIndex == this.displayedPurchaseOrderGroupList.length - 3) {
          this.isLastIndexOfLedgerList();
        }
      });
    },

    isLastIndexOfLedgerList() {
      const batchSize = 100; 
      // const currentLength = this.displayedPurchaseOrderGroupList.length;

      // Calculate the next start and end limits
      //  this.nextStartLimit = currentLength + 1;
       this.nextStartLimit += batchSize ;
      //  this.nextEndLimit = currentLength + batchSize;

      this.getLedgers();
    },

    handleEscapeKey() {
      if (this.PurchaseOrderGroupSearchModal) {
                this.PurchaseOrderGroupSearchModal = "";
                this.searchedGroupName("");
            } else {
                this.$emit("closePurchaseOrderGroupModal");
            }
    },

    handleInput() {
      this.searchedGroupName(this.PurchaseOrderGroupSearchModal);
    },

    searchedGroupName(name) {
      if (name.trim() == "") {
        this.displayedPurchaseOrderGroupList = this.ledgersList;
      } else {
        const filteredGroupName = this.ledgersList.filter((ledger) => {
          return ledger.ledgerGroupName.toLowerCase().includes(name.toLowerCase());
        });
        this.displayedPurchaseOrderGroupList = filteredGroupName;
        this.PurchaseOrdergroupIndex = 0;
      }
    },

    getLedgers() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: this.$store.state.tallyStore.companyId,
        requestFrom: "WEB", //WEB,MOBILE
        masterReservedName: [
          "Sundry Debtors",
          "Sundry Creditors"
        ],
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
            this.displayedPurchaseOrderGroupList = [
              ...this.displayedPurchaseOrderGroupList,
              ...this.ledgersList,
            ];

            this.ledgersList = this.displayedPurchaseOrderGroupList;
            this.totalCount = response.data.data.totalCount;
          } else {
            this.ledgersList = [];
            this.displayedPurchaseOrderGroupList = [];
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
    this.focusPurchaseOrderGroupModal();
    this.getLedgers();
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
