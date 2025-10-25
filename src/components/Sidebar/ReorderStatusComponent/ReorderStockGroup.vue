<template>
  <div>
    <div class="modal-vue-tally">
      <div
        class="main-tally-front-company-popup"
        @click="focusReorderStockGroupModal"
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
                  @click="closeReorderStockGroupModalIcon"
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
              v-model="ReorderStockGroupInput"
              ref="InputReorderStockGroup"
              @keydown.esc="handleEscapeKey"
              @input="handleInput"
              @keydown="handleArrowKeys"
            />
          </div>
        </div>

        <div class="select-voucher-type-popup-company-flow-boxes">
          <h6>List of Stock Groups</h6>
          <!-- <ul class="company-create-alter-popup-boxes" ref="SelectStockGroup">
                        <li :class="{ active: ReorderStockGroupIndex == 0 }">
                            <a href="javascript:void(0);"> Create </a>
                        </li>
                    </ul> -->
          <ul
            class="company-selection-popup-boxes overflow-stock-query-popup-height-set"
            ref="ReorderStockGroupList"
          >
            <li
              :class="{ active: ReorderStockGroupIndex == index }"
              @click="selectReorderStckGroup(index, Reorderstockgroup.name)"
              v-for="(Reorderstockgroup, index) in displayedReorderStockGroups"
              :key="index + 1"
              :group="Reorderstockgroup.stockGroupName"
            >
              <div class="company-popup-list-name-left">
                <a href="javascript:void(0);">
                  {{ Reorderstockgroup.stockGroupName }}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="overlay7" @click="focusReorderStockGroupModal"></div>
    </div>
  </div>
</template>

<script>
import Api from "@/Api";
export default {
  data() {
    return {
      Reorderstockgroup: [],
      ReorderStockGroupIndex: 0,
      ReorderStockGroupInput: "",
      displayedReorderStockGroups: [],
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
          this.handleEnterKey();
          break;
      }
    },

    handleEnterKey() {
      this.routeFunction(
        this.displayedReorderStockGroups[this.ReorderStockGroupIndex].guid,
        this.displayedReorderStockGroups[this.ReorderStockGroupIndex].stockGroupName
      );
    },

    selectReorderStckGroup(index) {
      if (this.ReorderStockGroupIndex !== index) {
        this.ReorderStockGroupIndex = index;
      } else {
        this.routeFunction(
          this.displayedReorderStockGroups[index].guid,
          this.displayedReorderStockGroups[index].stockGroupName
        );
      }
    },

    routeFunction(guid, stockGroupName) {
      let routeName = "tally-style-stock-group-reorder-status";

      if (routeName) {
        // localStorage.setItem("GroupIndex", this.groupIndex);

        this.$router.push({
          name: routeName,
          params: {
            id: guid,
          },
          query: {
            groupName: stockGroupName,
          },
        });
      }
    },

    handleArrowUp() {
      this.ReorderStockGroupIndex =
        (this.ReorderStockGroupIndex -
          1 +
          this.displayedReorderStockGroups.length) %
        this.displayedReorderStockGroups.length;
        this.scrollToSelectedRow();
    },

    handleArrowDown() {
      this.ReorderStockGroupIndex =
        (this.ReorderStockGroupIndex + 1) %
        this.displayedReorderStockGroups.length;
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
          if (this.ReorderStockGroupIndex === 0 && container.scrollTop !== 0) {
            container.scrollTop = 0;
          }
        }

        if (this.ReorderStockGroupIndex == this.displayedReorderStockGroups.length - 3) {
          this.isLastIndexOfLedgerList();
        }
      });
    },

    handleEscapeKey() {
      if (this.ReorderStockGroupInput) {
        this.ReorderStockGroupInput = "";
        this.fetchStockGroupByText("");
      } else {
        this.$emit("closeReorderStockGroupModal");
      }
    },

    handleInput(event) {
      this.fetchStockGroupByText(this.ReorderStockGroupInput);
    },

    fetchStockGroupByText(text) {
      if (text.trim() === "") {
        this.displayedReorderStockGroups = this.Reorderstockgroups;
      } else {
        this.displayedReorderStockGroups = this.Reorderstockgroups.filter(
          (Reorderstockgroup) => {
            return Reorderstockgroup.stockGroupName
              .toLowerCase()
              .includes(text.toLowerCase());
          }
        );
      }
      console.log(filteredReorderstockgroups);
      this.displayedReorderStockGroups = filteredReorderstockgroups;
      this.ReorderStockGroupIndex = 0;
    },
    focusReorderStockGroupModal() {
      this.showAgeingAnalysis = true;
      this.$nextTick(() => {
        var inputElement = this.$refs.InputReorderStockGroup;
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
      });
    },

    closeReorderStockGroupModalIcon() {
      this.$emit("closeReorderStockGroupModal");
    },
    get_Stock_Groups() {
      this.Reorderstockgroups = [];
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
          this.Reorderstockgroups = response.data.data.list.map((Reorderstockgroup) => ({
            ...Reorderstockgroup,
            stockGroupName: Reorderstockgroup.stockGroupName.replace("#4;", ""),
          }));
          this.displayedReorderStockGroups = this.Reorderstockgroups;
        } catch (error) {
          console.log(error);
        }
      });
    },
  },

  mounted() {
    // this.currentCompanyName = localStorage.getItem("currentCompanyName");
    this.focusReorderStockGroupModal();
    if (this.displayedReorderStockGroups.length > 0) {
      this.ReorderStockGroupInput = this.displayedReorderStockGroups[0].name;
    } else {
    }
    this.get_Stock_Groups();
  },
};
</script>