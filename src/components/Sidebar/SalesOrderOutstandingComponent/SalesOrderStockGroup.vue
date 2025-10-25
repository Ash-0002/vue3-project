<template>
  <div>
    <div class="modal-vue-tally">
      <div
        class="main-tally-front-company-popup"
        @click="focusSalesOrderStockGroupModal"
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
                  @click="closeSalesOrderStockGroupModalIcon"
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
              v-model="SalesOrderStockGroupInput"
              ref="InputSalesOrderStockGroup"
              @keydown.esc="handleEscapeKey"
              @input="handleInput"
              @keydown="handleArrowKeys"
            />
          </div>
        </div>

        <div class="select-voucher-type-popup-company-flow-boxes">
          <h6>List of Stock Groups</h6>
          <!-- <ul class="company-create-alter-popup-boxes" ref="SelectStockGroup">
                        <li :class="{ active: SalesOrderStockGroupIndex == 0 }">
                            <a href="javascript:void(0);"> Create </a>
                        </li>
                    </ul> -->
          <ul
            class="company-selection-popup-boxes overflow-stock-query-popup-height-set"
            ref="SalesOrderStockGroupList"
          >
            <li
              :class="{ active: SalesOrderStockGroupIndex == index }"
              @click="selectSalesOrderStckGroup(index, SalesOrderstockgroup.name)"
              v-for="(SalesOrderstockgroup, index) in displayedSalesOrderStockGroups"
              :key="index + 1"
              :group="SalesOrderstockgroup.stockGroupName"
            >
              <div class="company-popup-list-name-left">
                <a href="javascript:void(0);">
                  {{ SalesOrderstockgroup.stockGroupName }}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="overlay7" @click="focusSalesOrderStockGroupModal"></div>
    </div>
  </div>
</template>

<script>
import Api from "@/Api";
export default {
  data() {
    return {
      SalesOrderstockgroup: [],
      SalesOrderStockGroupIndex: 0,
      SalesOrderStockGroupInput: "",
      displayedSalesOrderStockGroups: [],
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
          this.handleEnterKey(this.SalesOrderStockGroupIndex);
          break;
      }
    },

    handleEnterKey(index) {
      this.SalesOrderStockGroupIndex = index;
      // this.$router.push(''+ this.displayedSalesOrderStockGroups[this.SalesOrderStockGroupIndex].guid);
    },

    selectSalesOrderStckGroup(index, SalesOrderstockgroupValue) {
      if (this.SalesOrderStockGroupIndex !== index) {
        this.SalesOrderStockGroupIndex = index;
        this.SalesOrderStockGroupInput = SalesOrderstockgroupValue;
      } else {
        // this.$emit("SelectStockGroup", SalesOrderstockgroupValue);
        this.$emit("closeSalesOrderStockGroupModal");
      }
    },

    handleArrowUp() {
      this.SalesOrderStockGroupIndex =
        (this.SalesOrderStockGroupIndex -
          1 +
          this.displayedSalesOrderStockGroups.length) %
        this.displayedSalesOrderStockGroups.length;
        this.scrollToSelectedRow();
    },

    handleArrowDown() {
      this.SalesOrderStockGroupIndex =
        (this.SalesOrderStockGroupIndex + 1) %
        this.displayedSalesOrderStockGroups.length;
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
          if (this.SalesOrderStockGroupIndex === 0 && container.scrollTop !== 0) {
            container.scrollTop = 0;
          }
        }

        if (this.SalesOrderStockGroupIndex == this.displayedLedgerList.length - 3) {
          this.isLastIndexOfLedgerList();
        }
      });
    },
    isLastIndexOfLedgerList() {
      const batchSize = 100; 
      // const currentLength = this.displayedLedgerList.length;

      // Calculate the next start and end limits
      //  this.nextStartLimit = currentLength + 1;
       this.nextStartLimit += batchSize ;
      //  this.nextEndLimit = currentLength + batchSize;

      this.get_Stock_Groups();
    },

    handleEscapeKey() {
      if (this.SalesOrderStockGroupInput) {
        this.SalesOrderStockGroupInput = "";
        this.fetchStockGroupByText("");
      } else {
        this.$emit("closeSalesOrderStockGroupModal");
      }
    },

    handleInput(event) {
      this.fetchStockGroupByText(this.SalesOrderStockGroupInput);
    },

    fetchStockGroupByText(text) {
      if (text.trim() === "") {
        this.displayedSalesOrderStockGroups = this.SalesOrderstockgroups;
      } else {
        this.displayedSalesOrderStockGroups = this.SalesOrderstockgroups.filter(
          (SalesOrderstockgroup) => {
            return SalesOrderstockgroup.stockGroupName
              .toLowerCase()
              .includes(text.toLowerCase());
          }
        );
      }
      console.log(filteredSalesOrderstockgroups);
      this.displayedSalesOrderStockGroups = filteredSalesOrderstockgroups;
      this.SalesOrderStockGroupIndex = 0;
    },
    focusSalesOrderStockGroupModal() {
      this.showAgeingAnalysis = true;
      this.$nextTick(() => {
        var inputElement = this.$refs.InputSalesOrderStockGroup;
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
      });
    },

    closeSalesOrderStockGroupModalIcon() {
      this.$emit("closeSalesOrderStockGroupModal");
    },
    get_Stock_Groups() {
      this.SalesOrderstockgroups = [];
      this.debitTotal = 0;
      this.creditTotal = 0;
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: this.$store.state.tallyStore.companyId,
        // company_id: "65aa1a7aea3a50506e0f1f2d",
        requestFrom: "WEB",
        startDate: "2023-04-01",
        endDate: "2024-03-31",
        startLimit: this.nextStartLimit,
        endLimit: this.nextEndLimit,
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
          this.SalesOrderstockgroups = response.data.data.list.map((SalesOrderstockgroup) => ({
            ...SalesOrderstockgroup,
            stockGroupName: SalesOrderstockgroup.stockGroupName.replace("#4;", ""),
          }));
          this.displayedSalesOrderStockGroups = this.SalesOrderstockgroups;
        } catch (error) {
          console.log(error);
        }
      });
    },
  },

  mounted() {
    // this.currentCompanyName = localStorage.getItem("currentCompanyName");
    this.focusSalesOrderStockGroupModal();
    if (this.displayedSalesOrderStockGroups.length > 0) {
      this.SalesOrderStockGroupInput = this.displayedSalesOrderStockGroups[0].name;
    } else {
    }
    this.get_Stock_Groups();
  },
};
</script>