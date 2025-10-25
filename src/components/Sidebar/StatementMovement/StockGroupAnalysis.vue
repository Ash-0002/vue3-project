<template>
  <div>
    <div class="modal-vue-tally">
      <div
        class="main-tally-front-company-popup"
        @click="focusStockGroupAnalysisModal"
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
                  @click="closeStockGroupAnalysisModalIcon"
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
              v-model="StockGroupAnalysisInput"
              ref="InputStockGroupAnalysis"
              @keydown.esc="handleEscapeKey"
              @input="handleInput"
              @keydown="handleArrowKeys"
            />
          </div>
        </div>

        <div class="select-voucher-type-popup-company-flow-boxes">
          <h6>List of Stock Groups</h6>
          <!-- <ul class="company-create-alter-popup-boxes" ref="SelectStockGroup">
                        <li :class="{ active: StockGroupAnalysisIndex == 0 }">
                            <a href="javascript:void(0);"> Create </a>
                        </li>
                    </ul> -->
          <ul
            class="company-selection-popup-boxes overflow-stock-query-popup-height-set"
            ref="StockGroupList"
          >
            <li
              :class="{ active: StockGroupAnalysisIndex == index }"
              @click="selectStckGroup(index, stockgroup.name)"
              v-for="(stockgroup, index) in displayedStockGroups"
              :key="index + 1"
              :group="stockgroup.stockGroupName"
            >
              <div class="company-popup-list-name-left">
                <a href="javascript:void(0);">
                  {{ stockgroup.stockGroupName }}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="overlay7" @click="focusStockGroupAnalysisModal"></div>
    </div>
  </div>
</template>

<script>
import Api from "@/Api";
export default {
  data() {
    return {
      StockGroups: [
        { name: "Primary" },
        { name: "Boat" },
        { name: "Bottle" },
        { name: "COMPANY" },
        { name: "D Bottle" },
        { name: "Group 1" },
        { name: "Group 2" },
        { name: "Group Classification" },
        { name: "Icard" },
        { name: "On Group" },
        { name: "Parker" },
        { name: "Plastic" },
        { name: "Stationary" },
        { name: "Stock Group class" },
        { name: "Stock Group Zero" },
      ],
      StockGroupAnalysisIndex: 0,
      StockGroupAnalysisInput: "",
      displayedStockGroups: [],
    };
  },

  created() {
    // this.addEventListenerFunc();
    this.displayedStockGroups = this.StockGroups;
  },

  // beforeDestroy() {
  //     this.removeEventListener();
  // },
  computed: {
    currentCompanyName() {
      return this.$store.state.tallyStore.currentCompanyName;
    },
  },
  methods: {
    // addEventListenerFunc() {
    //     document.addEventListener("keydown", this.handleArrowKeys);
    // },

    // removeEventListener() {
    //     document.removeEventListener("keydown", this.handleArrowKeys);
    // },

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
          break;
      }
    },

    handleEnterKey() {
      this.routeFunction(
        this.displayedStockGroups[this.StockGroupAnalysisIndex].guid,
        this.displayedStockGroups[this.StockGroupAnalysisIndex].stockGroupName
      );
    },

    selectStckGroup(index) {
      if (this.StockGroupAnalysisIndex !== index) {
        this.StockGroupAnalysisIndex = index;
      } else {
        this.routeFunction(
          this.displayedStockGroups[index].guid,
          this.displayedStockGroups[index].stockGroupName
        );
      }
    },

    routeFunction(id, l_name) {
      let routeName = "tally-style-stock-group-analysis";

      if (routeName) {
        this.$router.push({
          name: routeName,
          params: {
            guid: id,
            stockGroupName: l_name,
          },
        });
      }
    },

    handleArrowUp() {
      this.StockGroupAnalysisIndex =
        (this.StockGroupAnalysisIndex - 1 + this.displayedStockGroups.length) %
        this.displayedStockGroups.length;
    },

    handleArrowDown() {
      this.StockGroupAnalysisIndex =
        (this.StockGroupAnalysisIndex + 1) % this.displayedStockGroups.length;
    },

    handleEscapeKey() {
      if (this.StockGroupAnalysisInput) {
        this.StockGroupAnalysisInput = "";
        this.fetchStockGroupByText("");
      } else {
        this.$emit("closeStockGroupAnalysisModal");
      }
    },

    handleInput(event) {
      this.fetchStockGroupByText(this.StockGroupAnalysisInput);
    },

    fetchStockGroupByText(text) {
      if (text.trim() === "") {
        this.displayedStockGroups = this.StockGroups;
      } else {
        this.displayedStockGroups = this.StockGroups.filter((stockgroup) => {
          return stockgroup.stockGroupName
            .toLowerCase()
            .includes(text.toLowerCase());
        });
      }
      console.log(filteredStockGroups);
      this.displayedStockGroups = filteredStockGroups;
      this.StockGroupAnalysisIndex = 0;
    },
    focusStockGroupAnalysisModal() {
      this.showAgeingAnalysis = true;
      this.$nextTick(() => {
        var inputElement = this.$refs.InputStockGroupAnalysis;
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
      });
    },

    closeStockGroupAnalysisModalIcon() {
      this.$emit("closeStockGroupAnalysisModal");
    },
    groupSummary() {
      this.StockGroups = [];
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
          this.StockGroups = response.data.data.list.map((stockgroup) => ({
            ...stockgroup,
            stockGroupName: stockgroup.stockGroupName.replace("#4;", ""),
          }));
          this.displayedStockGroups = this.StockGroups;
        } catch (error) {
          console.log(error);
        }
      });
    },
  },

  mounted() {
    // this.currentCompanyName = localStorage.getItem("currentCompanyName");
    this.focusStockGroupAnalysisModal();
    this.groupSummary();
    if (this.displayedStockGroups.length > 0) {
      this.StockGroupAnalysisInput = this.displayedStockGroups[0].name;
    } else {
    }
  },
};
</script>