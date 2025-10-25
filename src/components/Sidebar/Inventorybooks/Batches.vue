<template>
  <div>
    <div class="modal-vue-tally">
      <div class="BatchPopupMainPortion">
        <div
          class="InnerTopPopupBatchPortion"
          @click="focusGroupSummaryInput"
        >
          <div class="BatchCompanyPopupLabeline">
            <div class="row align-items-center">
              <div class="col-lg-4 col-4">
                <div class="BatchCompanyPopupLabelineText">
                  <!-- <h6>{{ companyModalLabel }}</h6> -->
                  <h6>Batch Items</h6>
                </div>
              </div>
              <div class="col-lg-4 col-4">
                <div class="BatchCompanyPopupLabelineCompanyname">
                  <h6>Fashion N</h6>
                </div>
              </div>
              <div class="col-lg-4 col-4">
                <div class="BatchCompanyPopupLabelineIcon">
                  <a href="javascript:void(0);" @click="closeModalCompany"
                    ><i class="fa fa-close"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="TallyFrontBatchCompanyPopup">
    <div class="CompanyInputBoxesBatch">
      <div class="LabelWithInputBatchPopup mb-2">
        <label>Name of Item</label>
        <label class="setwidthbatchcolonlabel">:</label>
        <input
          type="text"
          class="BatchCompanyFormatInputTally"
          v-model="searchGroupitem"
          ref="firstInput"
          @keydown.esc="handleEscapeKeyforItems"
          @input="handleInput"
          @keydown="handleArrowKeysforItems"
          @focus="showListOfItems"
        />
      </div>
      <div class="LabelWithInputBatchPopup">
        <label>Name of Batch</label>
        <label class="setwidthbatchcolonlabel">:</label>
        <input
          type="text"
          class="BatchCompanyFormatInputTally"
          ref="secondInput"
          v-model="searchGroupbatch"
          @keydown.esc="handleEscapeKeyforBatches"
          @input="handleInput"
          @keydown="handleArrowKeysforBatches"
          @focus="showListOfBatches"
        />
      </div>
    </div>
  </div>

  <!-- List of Items Section -->
  <div v-if="isListOfItemsVisible" class="BatchSelectShutCompanyFlowBoxes">
    <h6>List of Items</h6>
    <ul class="CompanySelectionPopupBatchBoxes" ref="companyList1">
      <li
        :class="{ selected: groupIndexitems === index }"
        v-for="(item, index) in displayedLedgerListItems"
        :key="index"
        @click="selectGroupRowItems(index)"
      >
        <div class="row">
          <div class="col-12">
            <div class="BatchCompanyPopupListNameleft">
              <a href="javascript:void(0);">
                {{ item.batchitemnameitem }}
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <!-- List of Batches Section -->
  <div v-if="isListOfBatchesVisible" class="BatchSelectShutCompanyFlowBoxes">
    <h6>List of Batches</h6>

    <ul class="CompanySelectionPopupBatchBoxes" ref="companyList2">
      <li class="HeadngportionLiListBatches">
        <div class="row">
          <div class="col-6">
            <div class="BatchListHeadingPortioninnerText">
              <p>Name</p>
            </div>
          </div>
          <div class="col-6">
            <div class="BatchListHeadingPortioninnerText">
              <p>Mfg Date</p>
            </div>
          </div>
        </div>
      </li>
      <li
        :class="{ selected: groupIndexbatches === index }"
        v-for="(item, index) in displayedLedgerListBatches"
        :key="index"
        @click="selectGroupRowBatches(index)"
      >
        <div class="row">
          <div class="col-6">
            <div class="BatchCompanyPopupListNameleft">
              <a href="javascript:void(0);">
                {{ item.batchnamebatches }}
              </a>
            </div>
          </div>
          <div class="col-6">
            <div class="CodeNameRightBatchCompanyPopupList">
              <a href="javascript:void(0);">{{ item.mfgdate }}</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
          
        </div>
      </div>
      <div class="BatchOverlay1" @click="focusGroupSummaryInput"></div>
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
      groupIndexitems: 0,
      searchGroupitem: "",
      ledgersListItems: [],
      displayedLedgerListItems: [
        { batchitemnameitem: "Batch Item Name 1" },
        { batchitemnameitem: "Batch Item Name 2" },
        { batchitemnameitem: "Batch Item Name 3" },
        { batchitemnameitem: "Batch Item Name 4" },
        { batchitemnameitem: "Batch Item Name 5" },
        { batchitemnameitem: "Batch Item Name 6" },
        { batchitemnameitem: "Batch Item Name 7" },
        { batchitemnameitem: "Batch Item Name 8" },

        { batchitemnameitem: "Batch Item Name 1" },
        { batchitemnameitem: "Batch Item Name 2" },
        { batchitemnameitem: "Batch Item Name 3" },
        { batchitemnameitem: "Batch Item Name 4" },
        { batchitemnameitem: "Batch Item Name 5" },
        { batchitemnameitem: "Batch Item Name 6" },
        { batchitemnameitem: "Batch Item Name 7" },
        { batchitemnameitem: "Batch Item Name 8" },

        { batchitemnameitem: "Batch Item Name 1" },
        { batchitemnameitem: "Batch Item Name 2" },
        { batchitemnameitem: "Batch Item Name 3" },
        { batchitemnameitem: "Batch Item Name 4" },
        { batchitemnameitem: "Batch Item Name 5" },
        { batchitemnameitem: "Batch Item Name 6" },
        { batchitemnameitem: "Batch Item Name 7" },
        { batchitemnameitem: "Batch Item Name 8" },

        { batchitemnameitem: "Batch Item Name 1" },
        { batchitemnameitem: "Batch Item Name 2" },
        { batchitemnameitem: "Batch Item Name 3" },
        { batchitemnameitem: "Batch Item Name 4" },
        { batchitemnameitem: "Batch Item Name 5" },
        { batchitemnameitem: "Batch Item Name 6" },
        { batchitemnameitem: "Batch Item Name 7" },
        { batchitemnameitem: "Batch Item Name 8" },

        { batchitemnameitem: "Batch Item Name 1" },
        { batchitemnameitem: "Batch Item Name 2" },
        { batchitemnameitem: "Batch Item Name 3" },
        { batchitemnameitem: "Batch Item Name 4" },
        { batchitemnameitem: "Batch Item Name 5" },
        { batchitemnameitem: "Batch Item Name 6" },
        { batchitemnameitem: "Batch Item Name 7" },
        { batchitemnameitem: "Batch Item Name 8" },

        { batchitemnameitem: "Batch Item Name 1" },
        { batchitemnameitem: "Batch Item Name 2" },
        { batchitemnameitem: "Batch Item Name 3" },
        { batchitemnameitem: "Batch Item Name 4" },
        { batchitemnameitem: "Batch Item Name 5" },
        { batchitemnameitem: "Batch Item Name 6" },
        { batchitemnameitem: "Batch Item Name 7" },
        { batchitemnameitem: "Batch Item Name 8" },

        { batchitemnameitem: "Batch Item Name 1" },
        { batchitemnameitem: "Batch Item Name 2" },
        { batchitemnameitem: "Batch Item Name 3" },
        { batchitemnameitem: "Batch Item Name 4" },
        { batchitemnameitem: "Batch Item Name 5" },
        { batchitemnameitem: "Batch Item Name 6" },
        { batchitemnameitem: "Batch Item Name 7" },
        { batchitemnameitem: "Batch Item Name 8" },

        { batchitemnameitem: "Batch Item Name 1" },
        { batchitemnameitem: "Batch Item Name 2" },
        { batchitemnameitem: "Batch Item Name 3" },
        { batchitemnameitem: "Batch Item Name 4" },
        { batchitemnameitem: "Batch Item Name 5" },
        { batchitemnameitem: "Batch Item Name 6" },
        { batchitemnameitem: "Batch Item Name 7" },
        { batchitemnameitem: "Batch Item Name 8" },

        { batchitemnameitem: "Batch Item Name 1" },
        { batchitemnameitem: "Batch Item Name 2" },
        { batchitemnameitem: "Batch Item Name 3" },
        { batchitemnameitem: "Batch Item Name 4" },
        { batchitemnameitem: "Batch Item Name 5" },
        { batchitemnameitem: "Batch Item Name 6" },
        { batchitemnameitem: "Batch Item Name 7" },
        { batchitemnameitem: "Batch Item Name 8" },

        { batchitemnameitem: "Batch Item Name 1" },
        { batchitemnameitem: "Batch Item Name 2" },
        { batchitemnameitem: "Batch Item Name 3" },
        { batchitemnameitem: "Batch Item Name 4" },
        { batchitemnameitem: "Batch Item Name 5" },
        { batchitemnameitem: "Batch Item Name 6" },
        { batchitemnameitem: "Batch Item Name 7" },
        { batchitemnameitem: "Batch Item Name 8" },
      ],
      groupIndexbatches: 0,
      searchGroupbatch: "",
      ledgersListBatches: [],
      displayedLedgerListBatches: [
        { batchnamebatches: "Batch Name 1", mfgdate: "13-Aug-24" },
        { batchnamebatches: "Batch Name 2", mfgdate: "14-Aug-24" },
        { batchnamebatches: "Batch Name 3", mfgdate: "15-Aug-24" },
        { batchnamebatches: "Batch Name 4", mfgdate: "16-Aug-24" },
        { batchnamebatches: "Batch Name 5", mfgdate: "17-Aug-24" },
        { batchnamebatches: "Batch Name 6", mfgdate: "18-Aug-24" },
        { batchnamebatches: "Batch Name 7", mfgdate: "19-Aug-24" },
        { batchnamebatches: "Batch Name 8", mfgdate: "20-Aug-24" },

        { batchnamebatches: "Batch Name 1", mfgdate: "13-Aug-24" },
        { batchnamebatches: "Batch Name 2", mfgdate: "14-Aug-24" },
        { batchnamebatches: "Batch Name 3", mfgdate: "15-Aug-24" },
        { batchnamebatches: "Batch Name 4", mfgdate: "16-Aug-24" },
        { batchnamebatches: "Batch Name 5", mfgdate: "17-Aug-24" },
        { batchnamebatches: "Batch Name 6", mfgdate: "18-Aug-24" },
        { batchnamebatches: "Batch Name 7", mfgdate: "19-Aug-24" },
        { batchnamebatches: "Batch Name 8", mfgdate: "20-Aug-24" },

        { batchnamebatches: "Batch Name 1", mfgdate: "13-Aug-24" },
        { batchnamebatches: "Batch Name 2", mfgdate: "14-Aug-24" },
        { batchnamebatches: "Batch Name 3", mfgdate: "15-Aug-24" },
        { batchnamebatches: "Batch Name 4", mfgdate: "16-Aug-24" },
        { batchnamebatches: "Batch Name 5", mfgdate: "17-Aug-24" },
        { batchnamebatches: "Batch Name 6", mfgdate: "18-Aug-24" },
        { batchnamebatches: "Batch Name 7", mfgdate: "19-Aug-24" },
        { batchnamebatches: "Batch Name 8", mfgdate: "20-Aug-24" },

        { batchnamebatches: "Batch Name 1", mfgdate: "13-Aug-24" },
        { batchnamebatches: "Batch Name 2", mfgdate: "14-Aug-24" },
        { batchnamebatches: "Batch Name 3", mfgdate: "15-Aug-24" },
        { batchnamebatches: "Batch Name 4", mfgdate: "16-Aug-24" },
        { batchnamebatches: "Batch Name 5", mfgdate: "17-Aug-24" },
        { batchnamebatches: "Batch Name 6", mfgdate: "18-Aug-24" },
        { batchnamebatches: "Batch Name 7", mfgdate: "19-Aug-24" },
        { batchnamebatches: "Batch Name 8", mfgdate: "20-Aug-24" },

        { batchnamebatches: "Batch Name 1", mfgdate: "13-Aug-24" },
        { batchnamebatches: "Batch Name 2", mfgdate: "14-Aug-24" },
        { batchnamebatches: "Batch Name 3", mfgdate: "15-Aug-24" },
        { batchnamebatches: "Batch Name 4", mfgdate: "16-Aug-24" },
        { batchnamebatches: "Batch Name 5", mfgdate: "17-Aug-24" },
        { batchnamebatches: "Batch Name 6", mfgdate: "18-Aug-24" },
        { batchnamebatches: "Batch Name 7", mfgdate: "19-Aug-24" },
        { batchnamebatches: "Batch Name 8", mfgdate: "20-Aug-24" },

        { batchnamebatches: "Batch Name 1", mfgdate: "13-Aug-24" },
        { batchnamebatches: "Batch Name 2", mfgdate: "14-Aug-24" },
        { batchnamebatches: "Batch Name 3", mfgdate: "15-Aug-24" },
        { batchnamebatches: "Batch Name 4", mfgdate: "16-Aug-24" },
        { batchnamebatches: "Batch Name 5", mfgdate: "17-Aug-24" },
        { batchnamebatches: "Batch Name 6", mfgdate: "18-Aug-24" },
        { batchnamebatches: "Batch Name 7", mfgdate: "19-Aug-24" },
        { batchnamebatches: "Batch Name 8", mfgdate: "20-Aug-24" },

        { batchnamebatches: "Batch Name 1", mfgdate: "13-Aug-24" },
        { batchnamebatches: "Batch Name 2", mfgdate: "14-Aug-24" },
        { batchnamebatches: "Batch Name 3", mfgdate: "15-Aug-24" },
        { batchnamebatches: "Batch Name 4", mfgdate: "16-Aug-24" },
        { batchnamebatches: "Batch Name 5", mfgdate: "17-Aug-24" },
        { batchnamebatches: "Batch Name 6", mfgdate: "18-Aug-24" },
        { batchnamebatches: "Batch Name 7", mfgdate: "19-Aug-24" },
        { batchnamebatches: "Batch Name 8", mfgdate: "20-Aug-24" },

        { batchnamebatches: "Batch Name 1", mfgdate: "13-Aug-24" },
        { batchnamebatches: "Batch Name 2", mfgdate: "14-Aug-24" },
        { batchnamebatches: "Batch Name 3", mfgdate: "15-Aug-24" },
        { batchnamebatches: "Batch Name 4", mfgdate: "16-Aug-24" },
        { batchnamebatches: "Batch Name 5", mfgdate: "17-Aug-24" },
        { batchnamebatches: "Batch Name 6", mfgdate: "18-Aug-24" },
        { batchnamebatches: "Batch Name 7", mfgdate: "19-Aug-24" },
        { batchnamebatches: "Batch Name 8", mfgdate: "20-Aug-24" },

        { batchnamebatches: "Batch Name 1", mfgdate: "13-Aug-24" },
        { batchnamebatches: "Batch Name 2", mfgdate: "14-Aug-24" },
        { batchnamebatches: "Batch Name 3", mfgdate: "15-Aug-24" },
        { batchnamebatches: "Batch Name 4", mfgdate: "16-Aug-24" },
        { batchnamebatches: "Batch Name 5", mfgdate: "17-Aug-24" },
        { batchnamebatches: "Batch Name 6", mfgdate: "18-Aug-24" },
        { batchnamebatches: "Batch Name 7", mfgdate: "19-Aug-24" },
        { batchnamebatches: "Batch Name 8", mfgdate: "20-Aug-24" },

        { batchnamebatches: "Batch Name 1", mfgdate: "13-Aug-24" },
        { batchnamebatches: "Batch Name 2", mfgdate: "14-Aug-24" },
        { batchnamebatches: "Batch Name 3", mfgdate: "15-Aug-24" },
        { batchnamebatches: "Batch Name 4", mfgdate: "16-Aug-24" },
        { batchnamebatches: "Batch Name 5", mfgdate: "17-Aug-24" },
        { batchnamebatches: "Batch Name 6", mfgdate: "18-Aug-24" },
        { batchnamebatches: "Batch Name 7", mfgdate: "19-Aug-24" },
        { batchnamebatches: "Batch Name 8", mfgdate: "20-Aug-24" },

        { batchnamebatches: "Batch Name 1", mfgdate: "13-Aug-24" },
        { batchnamebatches: "Batch Name 2", mfgdate: "14-Aug-24" },
        { batchnamebatches: "Batch Name 3", mfgdate: "15-Aug-24" },
        { batchnamebatches: "Batch Name 4", mfgdate: "16-Aug-24" },
        { batchnamebatches: "Batch Name 5", mfgdate: "17-Aug-24" },
        { batchnamebatches: "Batch Name 6", mfgdate: "18-Aug-24" },
        { batchnamebatches: "Batch Name 7", mfgdate: "19-Aug-24" },
        { batchnamebatches: "Batch Name 8", mfgdate: "20-Aug-24" },
      ],
      isListOfItemsVisible: false,
      isListOfBatchesVisible: false,
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
      document.addEventListener("wheel", this.handleMouseScrollforItems);
      document.addEventListener("wheel", this.handleMouseScrollforBatches);
    },
    removeEventListenerFunc() {
      document.removeEventListener("wheel", this.handleMouseScrollforItems);
      document.removeEventListener("wheel", this.handleMouseScrollforBatches);
    },
    showListOfItems() {
      this.isListOfItemsVisible = true;
      this.isListOfBatchesVisible = false;
    },
    showListOfBatches() {
      this.isListOfItemsVisible = false;
      this.isListOfBatchesVisible = true;
    },
    handleMouseScrollforItems(event) {
      // Use deltaY to determine the direction of the scroll
      const deltaY = event.deltaY;

      if (deltaY > 0) {
        // Scrolling down
        this.handleArrowDownforItems();
      } else if (deltaY < 0) {
        // Scrolling up
        this.handleArrowUpforItems();
      }
    },
    hideListAndFocusNext() {
      // Hide the list of items and show batches
      this.isListOfItemsVisible = false;
      this.isListOfBatchesVisible = true;
      this.$nextTick(() => {
        if (this.$refs.secondInput) {
          this.$refs.secondInput.focus();
        }
      });
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
      this.$emit("closeBatches");
    },

    selectGroupRowItems(index) {
      if (this.groupIndexitems !== index) {
        this.groupIndexitems = index;
      } else {
        // Update the input field with the selected value
        this.searchGroupitem =
          this.displayedLedgerListItems[index].batchitemnameitem;
        this.hideListAndFocusNext();
      }
    },
    handleArrowKeysforItems(event) {
      switch (event.key) {
        case "ArrowUp":
          this.handleArrowUpforItems();
          break;
        case "ArrowDown":
          this.handleArrowDownforItems();
          break;
        case "Enter":
          this.handleEnterKeyforItems();
      }
    },
    
    
handleArrowUpforItems() {
      if (this.groupIndexitems > 0) {
        this.groupIndexitems--;
        this.scrollToSelectedRowforItems();
      }
    },
    handleArrowDownforItems() {
      if (this.groupIndexitems < this.displayedLedgerListItems.length - 1) {
        this.groupIndexitems++;
        this.scrollToSelectedRowforItems();
      }
    },
    handleEnterKeyforItems() {
      this.searchGroupitem =
        this.displayedLedgerListItems[this.groupIndexitems].batchitemnameitem;
      this.hideListAndFocusNext();
    },
    
    scrollToSelectedRowforItems() {
      this.$nextTick(() => {
        const selectedRow = document.querySelector(".selected");
        if (selectedRow) {
          const container = selectedRow.closest(
            ".CompanySelectionPopupBatchBoxes"
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
          if (this.groupIndexitems === 0 && container.scrollTop !== 0) {
            container.scrollTop = 0;
          }
        }
      });
    },


    handleEscapeKeyforItems() {
      if (this.searchGroupitem) {
        this.searchGroupitem = "";
        this.searchedGroupName(this.searchGroupitem);
        this.ledgersListItems = [];
        this.displayedLedgerListItems = [];
        
      } else {
        this.$emit("closeBatches");
        localStorage.removeItem("groupIndexitems");
      }
    },

    handleInput() {
      this.searchedGroupName(this.searchGroupitem);
    },
    // focusGroupSummaryInput() {
    //   this.$refs.firstInput.focus();
    // },
    selectGroupRowBatches(index) {
      if (this.groupIndexbatches !== index) {
        this.groupIndexbatches = index;
      } else {
        // Update the input field with the selected value
        this.searchGroupbatches =
          this.displayedLedgerListBatches[index].batchnamebatches;
      }
    },
    handleMouseScrollforBatches(event) {
      // Use deltaY to determine the direction of the scroll
      const deltaY = event.deltaY;

      if (deltaY > 0) {
        // Scrolling down
        this.handleArrowDownforBatches();
      } else if (deltaY < 0) {
        // Scrolling up
        this.handleArrowUpforBatches();
      }
    },

    selectGroupRowBatches(index) {
      if (this.groupIndexbatches !== index) {
        this.groupIndexbatches = index;
      } else {
        // Update the input field with the selected value
        this.searchGroupbatches =
          this.displayedLedgerListBatches[index].batchnamebatches;
        this.hideListAndFocusNext();
      }
    },
    handleArrowKeysforBatches(event) {
      switch (event.key) {
        case "ArrowUp":
          this.handleArrowUpforBatches();
          break;
        case "ArrowDown":
          this.handleArrowDownforBatches();
          break;
        case "Enter":
          this.handleEnterKeyforBatches();
      }
    },
    
    
handleArrowUpforBatches() {
      if (this.groupIndexbatches > 0) {
        this.groupIndexbatches--;
        this.scrollToSelectedRowforBatches();
      }
    },
    handleArrowDownforBatches() {
      if (this.groupIndexbatches < this.displayedLedgerListBatches.length - 1) {
        this.groupIndexbatches++;
        this.scrollToSelectedRowforBatches();
      }
    },
    handleEnterKeyforBatches() {
      this.searchGroupbatches =
        this.displayedLedgerListBatches[this.groupIndexbatches].batchnamebatches;
      this.hideListAndFocusNext();
      this.$router.push({ name: "tally-style-batch-vouchers-list" });
    },
    
    scrollToSelectedRowforBatches() {
      this.$nextTick(() => {
        const selectedRow = document.querySelector(".selected");
        if (selectedRow) {
          const container = selectedRow.closest(
            ".CompanySelectionPopupBatchBoxes"
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
          if (this.groupIndexbatches === 0 && container.scrollTop !== 0) {
            container.scrollTop = 0;
          }
        }
      });
    },


    handleEscapeKeyforBatches() {
      if (this.searchGroupbatches) {
        this.searchGroupbatches = "";
        this.searchedGroupName(this.searchGroupbatches);
        this.ledgersListBatchess = [];
        this.displayedLedgerListBatches = [];
        
      } else {
        this.$emit("closeBatches");
        localStorage.removeBatches("groupIndexbatches");
      }
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.$refs.firstInput.focus();
    });
  },
};
</script>

<style scoped>
.CompanySelectionPopupBatchBoxes {
  height: 90vh;
  overflow: hidden;
}
.InnerTopPopupBatchPortion {position: fixed;background: transparent;z-index: 2;top: 0;left: 0;bottom: 0;right: 0;width: 100%;}
.BatchCompanyPopupLabeline {
    background: #0ebe35;
    padding: 0 5px;
}
.BatchCompanyPopupLabelineText h6 {
    margin-bottom: 0 !important;
    color: #fff;
    font-size: 11px;
    font-weight: 500;
}
.BatchCompanyPopupLabelineCompanyname h6 {
    color: #fff;
    text-align: center;
    font-size: 11px;
    font-weight: 500;
    margin-bottom: 0 !important;
}
.BatchCompanyPopupLabelineIcon {
    text-align: right;
}
.BatchCompanyPopupLabelineIcon i {
    color: #fff;
}
.TallyFrontBatchCompanyPopup {
    background-color: #fff;
    padding: 10px 10px 10px 10px;
    border: 1px solid #000;
    transition: 0.5s ease-in-out;
    top: 19%;
    left: 50%;
    text-align: center;
    width: 400px;
    margin: auto;
}
.TallyFrontBatchCompanyPopup label {
    color: #000;
    font-size: 13px;
    font-weight: 500;
    width:150px;
}
.LabelWithInputBatchPopup {
    display: flex;
    align-items: center;
}
input.BatchCompanyFormatInputTally {
    background: #f1fff4;
    border: 1px solid #0ebe35;
    padding: 2px 5px;
    font-weight: bold;
    width: 100%;
}
.BatchSelectShutCompanyFlowBoxes {
  position: absolute;
    background-color: #F4FFED;
    padding: 0;
    border: 1px solid #000;
    transition: 0.5s ease-in-out;
    top: 19px;
    right: 0;
    text-align: left;
    width: 300px;
    height: 100vh;
    margin: auto;
}
.BatchSelectShutCompanyFlowBoxes h6 {
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 600;
    background-color: #5BBC21;
    padding: 5px 10px;
    margin-bottom: 0 !important;
}
ul.CompanySelectionPopupBatchBoxes {
    border-top: 1px solid #ddd;
    padding: 0;
}
ul.CompanySelectionPopupBatchBoxes li {
    background: transparent;
    box-shadow: none;
    border: none;
    margin-bottom: 0;
    color: #1a1a1a;
    font-size: 12px;
    font-weight: 600;
    padding: 0px 5px;
}
ul.CompanySelectionPopupBatchBoxes li a {
    color: #1a1a1a;
}
.CodeNameRightBatchCompanyPopupList {
    text-align: left;
    font-style: italic;
}
.modal-vue-tally .BatchOverlay1 {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 47%);
}
label.setwidthbatchcolonlabel{text-align: right;width:50px;}
.BatchListHeadingPortioninnerText p {
    margin-bottom: 0;
}

li.HeadngportionLiListBatches {
    background: #fff !important;
    padding: 3px 10px !important;
    margin-bottom: 12px !important;
}
@media only screen and (max-width:1400px){
  .CompanySelectionPopupBatchBoxes{height:89vh;}
}
@media only screen and (max-width:1366px){
  .CompanySelectionPopupBatchBoxes{height:88vh;}
}
</style>
