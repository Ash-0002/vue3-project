<template>
  <div>
    <div class="modal-vue-tally">
      <div class="set-popup-main-front-company-modal-design">
        <div
          class="main-tally-front-company-popup"
          @click="focusGroupSummaryvoucherInput"
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
                :class="{ active: groupIndex == index }"
                v-for="(group, index) in displayedGroupNameList"
                :key="index"
                @click="selectGroupRow(index)"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="company-popup-list-name-left">
                      <a href="javascript:void(0);">
                        {{ group.ledgerGroupName }}
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
            </ul>
          </div>
        </div>
      </div>
      <div class="overlay2" @click="focusGroupSummaryvoucherInput"></div>
    </div>
  </div>
</template>

<script>
import store from "../../../store";
import Api from "@/Api";
// import moment from "moment";
import Common from "@/Common";

export default {
  props: {
    masterReservedNameData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      companyList: [],
      groupIndex: 0,
      currentCompanyName: "",
      currentGroupName: "",

      searchGroup: "",
      ledgerGroupList: [],
      displayedGroupNameList: [],
      groupdata: [],

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

    focusGroupSummaryvoucherInput() {
      //   document.addEventListener("keydown", keydownAddCompanyModal);
      this.$nextTick(() => {
        const inputElement = this.$refs.companyInput;
        console.log(inputElement);
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
      });
    },

    closeModalCompany() {
      this.$emit("closeGroupVoucherSummary");
    },

    selectGroupRow(index) {
      if (this.groupIndex !== index) {
        this.groupIndex = index;
      } else {
        const selectedGroup = this.displayedGroupNameList[index];
        this.$store.commit("tallyStore/setCurrentGroupName", selectedGroup.ledgerGroupName);
        this.searchGroup = selectedGroup.ledgerGroupName;
        this.routeFunction(selectedGroup.ledgerGroupName);
      }
    },

    routeFunction(l_name) {
      let routeName = "";
      if (this.masterReservedNameData.length > 0) {
        routeName = "tally-style-group-outstandings";
      } else {
        routeName = "tally-style-group-vouchers";
      }
      if (routeName) {
        localStorage.setItem("GroupIndex", this.groupIndex);
        localStorage.setItem("screen", "groupVoucher");


        const targetRoute = {
          name: routeName,
          params: {
            groupName: l_name,
          },
        };

        if (
          this.$route.name !== targetRoute.name ||
          this.$route.params.groupName !== targetRoute.params.groupName
        ) {

            // Temporarily navigate to a dummy route and then back
            setTimeout(() => {
              this.$router.replace({ path: "/temporary-route" }).then(() => {
                // After temporary navigation, push the original route
                this.$router.replace(targetRoute);
              });
            }, 0);  // Using a timeout to ensure proper order of navigation
        }
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
      const selectedGroup = this.displayedGroupNameList[this.groupIndex];
      this.$store.commit("tallyStore/setCurrentGroupName", selectedGroup.ledgerGroupName);
      this.searchGroup = selectedGroup.ledgerGroupName;
      this.routeFunction(
        selectedGroup.ledgerGroupName
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
      if (this.groupIndex < this.displayedGroupNameList.length - 1) {
        this.groupIndex++;
        this.scrollToSelectedRow();
      }
    },

    scrollToSelectedRow() {
      this.$nextTick(() => {
        const selectedRow = document.querySelector(".selected");
        if (!selectedRow) {
          return; // Exit if no selected row
        }

        const container = selectedRow.closest(".company-selection-popup-boxes");
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

        if (this.groupIndex === this.displayedGroupNameList.length - 3) {
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
        this.$emit("closeGroupVoucherSummary");
        localStorage.removeItem("GroupIndex");
        localStorage.removeItem("screen");
      }
    },

    handleInput() {
      this.searchedGroupName(this.searchGroup);
    },

    searchedGroupName(name) {
      if (name.trim() == "") {
        this.displayedGroupNameList = this.ledgerGroupList;
      } else {
        const filteredGroupName = this.ledgerGroupList.filter((group) => {
          return group.ledgerGroupName
            .toLowerCase()
            .includes(name.toLowerCase());
        });
        this.displayedGroupNameList = filteredGroupName;
        this.groupIndex = 0;

        if (filteredGroupName.length > 0) {
          // Commit the first matching group name to Vuex
          const selectedGroup = filteredGroupName[0]; // Assuming the first result is the default selection
          this.$store.commit("tallyStore/setCurrentGroupName", selectedGroup.ledgerGroupName);
        } else {
          // Clear the Vuex store if no matches
          this.$store.commit("tallyStore/setCurrentGroupName", "");
        }
      }
    },

    getLedgerGroupsVoucher() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: this.$store.state.tallyStore.companyId,
        masterReservedName: this.masterReservedNameData,
        // "masterReservedName": ["Sundry Creditors", "Sundry Debtors"], //optional
        requestFrom: "WEB",
        sortBy: "ledgerGroupName",
        orderBy: 1,
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
          this.groupdata = [];
          for (let [key, value] of Object.entries(response.data.data.list)) {
            if (value.ledgerGroupName != "#4; Primary") {
              this.groupdata.push(value);
            }
          }

          if (responseData == "200") {
            this.ledgerGroupList = this.groupdata;
            this.displayedGroupNameList = this.groupdata;
          } else {
            this.ledgerGroupList = [];
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Common.getStatusForActionFailed(error.response.status);
        });
    },
  },

  mounted() {
    const groupIndex = parseInt(localStorage.getItem("GroupIndex"));
    if (groupIndex) {
      this.groupIndex = groupIndex;
    }

    this.currentCompanyName = localStorage.getItem("currentCompanyName");
    this.searchGroup = this.$store.state.tallyStore.currentGroupName || "";
    this.focusGroupSummaryvoucherInput();
    this.getLedgerGroupsVoucher();
  },
};
</script>
