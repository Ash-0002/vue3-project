<template>
  <div>
    <div class="modal-vue-tally">
      <div class="set-popup-main-front-company-modal-design">
        <div
          class="main-tally-front-company-popup"
          @click="focusTransferAnalysisModal"
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
                  <a href="javascript:void(0);" @click="closeTransferAnalysisModalIcon"
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
                v-model="TransferAnalysisModalInput"
                ref="InputTransferAnalysisModal"
                @keydown.esc="handleEscapeKey"
                @input="handleInput"
                @keydown="handleArrowKeys"
              />
            </div>
          </div>

          <div class="select-shut-company-flow-boxes">
            <h6>List of Groups</h6>
            <ul class="company-selection-popup-boxes" ref="TransferAnalysisModalList">
              <li
                :class="{ active: TransferAnalysisIndex == index }"
                v-for="(group, index) in displayedTransferAnalysisModalList"
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
      <div class="overlay2" @click="focusTransferAnalysisModal"></div>
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
      TransferAnalysisModalList: [],
      TransferAnalysisIndex: 0,
      currentCompanyName: "",

      TransferAnalysisModalInput: "",
      ledgerGroupList: [],
      displayedTransferAnalysisModalList: [],
      groupdata : [],
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

    focusTransferAnalysisModal() {
      //   document.addEventListener("keydown", keydownAddCompanyModal);
      this.$nextTick(() => {
        const inputElement = this.$refs.InputTransferAnalysisModal;
        console.log(inputElement);
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
      });
    },

    closeTransferAnalysisModalIcon() {
      this.$emit("closeTransferAnalysisModal");
    },

    selectGroupRow(index) {
      if (this.TransferAnalysisIndex !== index) {
        this.TransferAnalysisIndex = index;
      } else {
        this.routeFunction(this.displayedTransferAnalysisModalList[index].ledgerGroupName);
      }
    },

    // routeFunction(groupName) {
    //   let routeName = "tally-style-group-vouchers";

    //   if (routeName) {
        
    //     localStorage.setItem("TransferAnalysisIndex", this.TransferAnalysisIndex);

    //     this.$router.push({
    //       name: routeName,
    //       params: {
    //         parentName: groupName,
    //       },
    //     });
    //   }
    // },
     routeFunction(l_name) {
      let routeName = "";

      if (routeName) {
        // localStorage.setItem("TransferAnalysisIndex", this.TransferAnalysisIndex);

        this.$router.push({
          name: routeName,
          params: {
            GroupName: l_name,
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
      this.routeFunction(this.displayedTransferAnalysisModalList[this.TransferAnalysisIndex].ledgerGroupName);
    },

    // selectVocherType(index, voucherValue) {
    //   if (this.TransferAnalysisIndex !== index) {
    //     this.TransferAnalysisIndex = index;
    //     this.voucherTypeInput = voucherValue;
    //   } else {
    //     this.$emit("selectVoucherType", voucherValue);
    //     this.$emit("closeVoucherTypeModal");
    //   }
    // },

    handleArrowUp() {
      this.TransferAnalysisIndex =
        (this.TransferAnalysisIndex - 1 + this.displayedTransferAnalysisModalList.length) %
        this.displayedTransferAnalysisModalList.length;
    },

    handleArrowDown() {
      this.TransferAnalysisIndex = (this.TransferAnalysisIndex + 1) % this.displayedTransferAnalysisModalList.length;
    },

    handleEscapeKey() {
      if (this.TransferAnalysisModalInput) {
        this.TransferAnalysisModalInput = "";
        this.searchedGroupName(this.TransferAnalysisModalInput);
      } else {
        this.$emit("closeTransferAnalysisModal");
        localStorage.removeItem("TransferAnalysisIndex");
      }
    },

    handleInput() {
        this.searchedGroupName(this.TransferAnalysisModalInput);
    },

    searchedGroupName(name){
      if(name.trim() == "") {
        this.displayedTransferAnalysisModalList = this.ledgerGroupList;
      }else {
        const  filteredGroupName = this.ledgerGroupList.filter((group) => {
          return group.ledgerGroupName.toLowerCase().includes(name.toLowerCase());
        });
        this.displayedTransferAnalysisModalList = filteredGroupName;
        this.TransferAnalysisIndex = 0;
      }
    },

    getLedgerGroupsVoucher() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: this.$store.state.tallyStore.companyId,
        // "masterReservedName": ["Sundry Creditors", "Sundry Debtors"], //optional
        requestFrom: "WEB",
        sortBy : "ledgerGroupName",
        orderBy : 1
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
          this.groupdata = []
          for (let [key, value] of Object.entries(response.data.data.list)) {
            if(value.ledgerGroupName != "#4; Primary"){
              this.groupdata.push(value);
            }
          }

          if (responseData == "200") {
            this.ledgerGroupList = this.groupdata;
            this.displayedTransferAnalysisModalList = this.groupdata;
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
    const TransferAnalysisIndex = parseInt(localStorage.getItem("TransferAnalysisIndex"));
    if(TransferAnalysisIndex) {
      this.TransferAnalysisIndex = TransferAnalysisIndex;
    }
    
    this.currentCompanyName = localStorage.getItem("currentCompanyName");
    this.focusTransferAnalysisModal();
    this.getLedgerGroupsVoucher();
  },
};
</script>
