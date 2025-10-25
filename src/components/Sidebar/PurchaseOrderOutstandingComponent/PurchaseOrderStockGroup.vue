<template>
  <div>
    <div class="modal-vue-tally">
      <div
        class="main-tally-front-company-popup"
        @click="focusPurchaseOrderStockGroupModal"
      >
        <div class="company-popup-labelline-with-company">
          <div class="row align-items-center">
            <div class="col-lg-4 col-4">
              <div class="company-popup-labelline-text">
                <h6>Select Stock Group</h6>
              </div>
            </div>
            <div class="col-lg-4 col-4">
              <div class="company-popup-labelline-companyname">
                <h6>{{ currentCompanyName }}</h6>
              </div>
            </div>
            <div class="col-lg-4 col-4">
              <div class="company-popup-labelline-icon">
                <a
                  href="javascript:void(0);"
                  @click="closePurchaseOrderStockGroupModalIcon"
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
              <span><strong>Name of Group</strong></span>
            </div>
            <input
              type="text"
              class="company-format-input-tally"
              v-model="PurchaseOrderStockGroupInput"
              ref="InputPurchaseOrderStockGroup"
              @keydown.esc="handleEscapeKey"
              @input="handleInput"
              @keydown="handleArrowKeys"
            />
          </div>
        </div>

        <div class="select-voucher-type-popup-company-flow-boxes">
          <h6>List of Stock Groups</h6>
          <!-- <ul class="company-create-alter-popup-boxes" ref="SelectStockGroup">
                        <li :class="{ active: PurchaseOrderStockGroupIndex == 0 }">
                            <a href="javascript:void(0);"> Create </a>
                        </li>
                    </ul> -->
          <ul
            class="company-selection-popup-boxes overflow-stock-query-popup-height-set"
            ref="PurchaseOrderStockGroupList"
          >
            <li
              :class="{ active: PurchaseOrderStockGroupIndex == index }"
              @click="selectPurchaseOrderStckGroup(index, PurchaseOrderstockgroup.name)"
              v-for="(PurchaseOrderstockgroup, index) in displayedPurchaseOrderStockGroups"
              :key="index + 1"
              :group="PurchaseOrderstockgroup.stockGroupName"
            >
              <div class="company-popup-list-name-left">
                <a href="javascript:void(0);">
                  {{ PurchaseOrderstockgroup.stockGroupName }}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="overlay7" @click="focusPurchaseOrderStockGroupModal"></div>
    </div>
  </div>
</template>

<script>
import Api from "@/Api";
export default {
  data() {
    return {
      PurchaseOrderstockgroup: [],
      PurchaseOrderStockGroupIndex: 0,
      PurchaseOrderStockGroupInput: "",
      displayedPurchaseOrderStockGroups: [],
    };
  },

  created() {
    this.addEventListenerFunc();
  },

  beforeDestroy() {
    this.removeEventListenerFunc();
  },
  computed: {
    currentCompanyName() {
      return this.$store.state.tallyStore.currentCompanyName;
    },
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
    handleArrowKeys(event) {
      switch (event.key) {
        case "ArrowUp":
          this.handleArrowUp();
          break;
        case "ArrowDown":
          this.handleArrowDown();
          break;
        case "Enter":
          this.handleEnterKey(this.PurchaseOrderStockGroupIndex);
          break;
      }
    },

    handleEnterKey(index) {
      this.PurchaseOrderStockGroupIndex = index;
      // this.$router.push(''+ this.displayedPurchaseOrderStockGroups[this.PurchaseOrderStockGroupIndex].guid);
    },

    selectPurchaseOrderStckGroup(index, PurchaseOrderstockgroupValue) {
      if (this.PurchaseOrderStockGroupIndex !== index) {
        this.PurchaseOrderStockGroupIndex = index;
        this.PurchaseOrderStockGroupInput = PurchaseOrderstockgroupValue;
      } else {
        // this.$emit("SelectStockGroup", PurchaseOrderstockgroupValue);
        this.$emit("closePurchaseOrderStockGroupModal");
      }
    },

    handleArrowUp() {
      this.PurchaseOrderStockGroupIndex =
        (this.PurchaseOrderStockGroupIndex -
          1 +
          this.displayedPurchaseOrderStockGroups.length) %
        this.displayedPurchaseOrderStockGroups.length;
        this.scrollToSelectedRow();
    },

    handleArrowDown() {
      this.PurchaseOrderStockGroupIndex =
        (this.PurchaseOrderStockGroupIndex + 1) %
        this.displayedPurchaseOrderStockGroups.length;
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
          if (this.PurchaseOrderStockGroupIndex === 0 && container.scrollTop !== 0) {
            container.scrollTop = 0;
          }
        }

        if (this.PurchaseOrderStockGroupIndex == this.displayedLedgerList.length - 3) {
          this.isLastIndexOfLedgerList();
        }
      });
    },

    handleEscapeKey() {
      if (this.PurchaseOrderStockGroupInput) {
        this.PurchaseOrderStockGroupInput = "";
        this.fetchStockGroupByText("");
      } else {
        this.$emit("closePurchaseOrderStockGroupModal");
      }
    },

    handleInput(event) {
      this.fetchStockGroupByText(this.PurchaseOrderStockGroupInput);
    },

    fetchStockGroupByText(text) {
      if (text.trim() === "") {
        this.displayedPurchaseOrderStockGroups = this.PurchaseOrderstockgroups;
      } else {
        this.displayedPurchaseOrderStockGroups = this.PurchaseOrderstockgroups.filter(
          (PurchaseOrderstockgroup) => {
            return PurchaseOrderstockgroup.stockGroupName
              .toLowerCase()
              .includes(text.toLowerCase());
          }
        );
      }
      console.log(filteredPurchaseOrderstockgroups);
      this.displayedPurchaseOrderStockGroups = filteredPurchaseOrderstockgroups;
      this.PurchaseOrderStockGroupIndex = 0;
    },
    focusPurchaseOrderStockGroupModal() {
      this.showAgeingAnalysis = true;
      this.$nextTick(() => {
        var inputElement = this.$refs.InputPurchaseOrderStockGroup;
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
      });
    },

    closePurchaseOrderStockGroupModalIcon() {
      this.$emit("closePurchaseOrderStockGroupModal");
    },
    get_Stock_Groups() {
      this.PurchaseOrderstockgroups = [];
      this.debitTotal = 0;
      this.creditTotal = 0;
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: this.$store.state.tallyStore.companyId,
        // company_id: "65aa1a7aea3a50506e0f1f2d",
        requestFrom: "WEB",
        startDate: "2023-04-01",
        endDate: "2024-03-31",
        startLimit: 0,
        endLimit: 1000,
        orderBy: -1,
        sortBy: "",
      };

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getStockGroups(data, headers).then((response) => {
        try {
          console.log(response.data.data.list);
          this.PurchaseOrderstockgroups = response.data.data.list.map((PurchaseOrderstockgroup) => ({
            ...PurchaseOrderstockgroup,
            stockGroupName: PurchaseOrderstockgroup.stockGroupName.replace("#4;", ""),
          }));
          this.displayedPurchaseOrderStockGroups = this.PurchaseOrderstockgroups;
        } catch (error) {
          console.log(error);
        }
      });
    },
  },

  mounted() {
    // this.currentCompanyName = localStorage.getItem("currentCompanyName");
    this.focusPurchaseOrderStockGroupModal();
    if (this.displayedPurchaseOrderStockGroups.length > 0) {
      this.PurchaseOrderStockGroupInput = this.displayedPurchaseOrderStockGroups[0].name;
    } else {
    }
    this.get_Stock_Groups();
  },
};
</script>