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
                @input="handleInput"
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
                      <a href="javascript:void(0);" v-if="group.ledgerGroupName === `#4; Primary`">
                        ♦️ {{ group.ledgerGroupName.split(" ")[1] }}
                      </a>
                      <a href="javascript:void(0);" v-else>
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
      companyList: [],
      groupIndex: 0,
      currentCompanyName: "",

      searchGroup: "",
      ledgerGroupList: [],
      displayedGroupNameList: [],
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
      document.addEventListener("keydown", this.handleKeyDown);
      document.addEventListener("wheel", this.handleMouseScroll);
    },
    removeEventListenerFunc() {
      document.removeEventListener("keydown", this.handleKeyDown);
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
      this.$emit("changeCompanyClose");
    },

    selectGroupRow(index) {
      if (this.groupIndex !== index) {
        this.groupIndex = index;
      } else {
        this.routeFunction(this.displayedGroupNameList[index].ledgerGroupName);
      }
    },

    routeFunction(groupName) {
      let routeName = "tally-style-group-summary";

      if (routeName) {
        localStorage.setItem("GroupIndex", this.groupIndex);
        localStorage.setItem("screen", "groupSummary");

        this.$router.push({
          name: routeName,
          params: {
            parentName: groupName,
          },
          query: {
            routeFrom: "Group-Summary",
          },
        });
      }
    },

    handleKeyDown(event) {
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
        case "Escape":
          this.handleEscapeKey();
          break;
      }
    },

    handleEnterKey() {
      this.routeFunction(
        this.displayedGroupNameList[this.groupIndex].ledgerGroupName
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
      this.groupIndex =
        (this.groupIndex - 1 + this.displayedGroupNameList.length) %
        this.displayedGroupNameList.length;
    },

    handleArrowDown() {
      this.groupIndex =
        (this.groupIndex + 1) % this.displayedGroupNameList.length;
    },

    handleEscapeKey() {
      if (this.searchGroup) {
        this.searchGroup = "";
        this.searchedGroupName(this.searchGroup);
      } else {
        this.$emit("closeGroupSummary");
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
      }
    },

    getLedgerGroups() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: this.$store.state.tallyStore.companyId,
        // "masterReservedName": ["Sundry Creditors", "Sundry Debtors"], //optional
        requestFrom: "WEB",
      };

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.ledgerGroupsGo(data, headers)
        .then((response) => {
          const responseData = Common.getStatusForActionFailed(
            response.data.status
          );

          if (responseData == "200") {
            this.ledgerGroupList = response.data.data.list;
            this.displayedGroupNameList = this.ledgerGroupList;
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
    this.focusGroupSummaryInput();
    this.getLedgerGroups();
  },
};
</script>
