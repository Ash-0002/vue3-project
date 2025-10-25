<template>
  <div>
    <div class="modal-vue-tally">
      <div class="set-popup-main-front-company-modal-design">
        <div
          class="main-tally-front-company-popup"
          @click="focusSelectCompanyModal"
        >
          <div class="company-popup-labelline-with-company">
            <div class="row align-items-center">
              <div class="col-lg-4 col-4">
                <div class="company-popup-labelline-text">
                  <h6>{{ companyModalLabel }}</h6>
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
                <span>{{ companyModalLabel }}</span>
              </div>
              <input
                type="text"
                class="company-format-input-tally"
                v-model="changeCompanyInput"
                ref="companyInput"
                @keydown.esc="handleEscapeKey"
                @keydown="selectCompany"
              />
            </div>
          </div>

          <div v-if="showChangeCompany" class="select-company-flow-boxes">
            <h6>List of Companies</h6>
            <!-- <ul class="company-create-alter-popup-boxes" ref="companyFeatured">
            <li :class="{ active: companyIndex == 0 }">
              <a href="javascript:void(0);"> Create Company </a>
            </li>
            <li :class="{ active: companyIndex == 1 }">
              <a href="javascript:void(0);"> Alter Company </a>
            </li>
            <li :class="{ active: companyIndex == 2 }">
              <a href="javascript:void(0);"> Select Company </a>
            </li>
            <li :class="{ active: companyIndex == 3 }">
              <a href="javascript:void(0);"> Shut Company </a>
            </li>
          </ul> -->

            <ul class="company-selection-popup-boxes" ref="companyList">
              <li
                :class="{ active: companyIndex == index + staticList }"
                v-for="(company, index) in companyList"
                :key="index + staticList"
                @click="changeAndSelect(index + staticList)"
              >
                <div class="row">
                  <div class="col-9">
                    <div class="company-popup-list-name-left">
                      <a href="javascript:void(0);">
                        {{ company.companyData.companyName }}
                      </a>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="company-popup-list-code-name-right">
                      <a href="javascript:void(0);">
                        {{ company.companyData.companyNumber }}
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div v-if="showSelectCompany" class="select-company-flow-boxes">
            <h6>List of Companies</h6>
            <!-- <ul
            class="company-create-alter-popup-boxes"
            ref="SelectcompanyFeatured"
          >
            <li :class="{ active: companyIndex == 0 }">
              <a href="javascript:void(0);"> Create Company </a>
            </li>
            <li :class="{ active: companyIndex == 1 }">
              <a href="javascript:void(0);"> Select Remote Company </a>
            </li>
            <li :class="{ active: companyIndex == 2 }">
              <a href="javascript:void(0);"> Specify Path </a>
            </li>
            <li :class="{ active: companyIndex == 3 }">
              <a href="javascript:void(0);"> Select From Drive </a>
            </li>
          </ul> -->
            <ul class="company-selection-popup-boxes" ref="SelectcompanyList">
              <li
                :class="{ active: companyIndex == index + staticList }"
                v-for="(company, index) in companyList"
                :key="index + staticList"
                @click="changeAndSelect(index + staticList)"
              >
                <div class="row">
                  <div class="col-4">
                    <div class="company-popup-list-name-left">
                      <a href="javascript:void(0);">{{
                        company.companyData.companyName
                      }}</a>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="company-popup-list-code-name-middle">
                      <a href="javascript:void(0);"
                        >{{ company.companyData.companyNumber }}
                      </a>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="company-popup-list-code-name-right">
                      <a href="javascript:void(0);"
                        >{{ formatDate(company.companyData.startFrom) }} to
                        {{ formatDate(company.companyData.endDate) }}
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div v-if="showShutCompany" class="select-shut-company-flow-boxes">
            <h6>List of Companies</h6>
            <ul class="company-selection-popup-boxes" ref="companyList">
              <li
                :class="{ active: shutCompanyIndex == index }"
                v-for="(company, index) in companyList"
                :key="index"
              >
                <div class="row">
                  <div class="col-6">
                    <div class="company-popup-list-name-left">
                      <a href="javascript:void(0);">
                        {{ company.companyData.companyName }}
                      </a>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="company-popup-list-code-name-right">
                      <a href="javascript:void(0);"
                        >{{ company.companyData.companyNumber }}
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      <div class="overlay2" @click="focusSelectCompanyModal"></div>
    </div>
  </div>
</template>

<script>
import store from "../../store";
import Api from "@/Api";
import moment from "moment";
import Common from "@/Common";

export default {
  props: {
    companyModalLabel: String,

    showChangeCompany: {
      type: Boolean,
      required: true,
    },

    showSelectCompany: {
      type: Boolean,
      required: true,
    },

    showShutCompany: {
      type: Boolean,
      required: true,
    },

    resetTallySidebarValues: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      changeCompanyInput: "",
      companyIndex: 0,
      shutCompanyIndex: 0,
      companyList: [],
      staticList: 0,
      currentCompanyName: "",
    };
  },

  created() {
    this.addEventListenerFunc();
  },

  beforeDestroy() {
    this.removeEventListener();
  },

  methods: {
    formatDate(fiscalDates) {
      return moment(fiscalDates).format("DD-MMM-YY");
    },

    changeAndSelect(index) {
      this.companyIndex = index;
      this.handleEnterKey();
    },

    addEventListenerFunc() {
      document.addEventListener("keydown", this.handleArrowKeys);
    },

    removeEventListener() {
      document.removeEventListener("keydown", this.handleArrowKeys);
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

    handleArrowUp() {
      if (this.showShutCompany) {
        this.shutCompanyIndex =
          (this.shutCompanyIndex - 1 + this.companyList.length) %
          this.companyList.length;
      } else {
        this.companyIndex =
          (this.companyIndex -
            1 +
            (this.companyList.length + this.staticList)) %
          (this.companyList.length + this.staticList);
      }
    },

    handleArrowDown() {
      if (this.showShutCompany) {
        this.shutCompanyIndex =
          (this.shutCompanyIndex + 1) % this.companyList.length;
      } else {
        this.companyIndex =
          (this.companyIndex + 1) % (this.companyList.length + this.staticList);
      }
    },

    focusSelectCompanyModal() {
      //   document.addEventListener("keydown", keydownAddCompanyModal);
      this.$nextTick(() => {
        const inputElement = this.$refs.companyInput;
        console.log(inputElement);
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
        inputElement.scrollLeft = 0
      });
    },

    handleEnterKey() {
      //   if (event.keyCode === 13) {
      if (this.showChangeCompany) {
        // Check for Enter key
        if (this.companyIndex >= this.staticList) {
          this.searchSelectedCompany(
            this.companyList,
            this.companyList[this.companyIndex - this.staticList].companyData.id
          );
          this.$emit("callApi");
        }
      } else if (this.showSelectCompany) {
        // Check for Enter key
        if (this.companyIndex >= this.staticList) {
          this.searchSelectedCompany(
            this.companyList,
            this.companyList[this.companyIndex - this.staticList].companyData.id
          );
          this.$emit("callApi");
        }
      } else {
        // this.searchSelectedCompany(
        //   this.companyList,
        //   this.companyList[this.shutCompanyIndex].companyData.id
        // );
      }
      // }
    },

    searchSelectedCompany(companyObject, companyId) {
      const returnedObject = companyObject.find(
        (company) => company.companyData.id === companyId
      );
      const selectedCompanyName = returnedObject.companyData.companyName;
      const selectedCompanySyncDate = returnedObject.companyData.lastSyncDate;

      this.$store.commit(
        "tallyStore/setCurrentCompanyName",
        selectedCompanyName
      );
      this.$store.commit(
        "tallyStore/setSelectedCompanySyncDate",
        selectedCompanySyncDate
      );
      this.$store.commit("tallyStore/setCompanyId", companyId);

      localStorage.setItem("currentCompanyName", selectedCompanyName);
      localStorage.setItem("companyId", companyId);
      //   this.selectedIndex = companyId;
      this.$emit("changeCompanyClose", "changeCompany");
    },

    handleEscapeKey() {
      if (this.changeCompanyInput) {
        this.changeCompanyInput = "";
        this.getCompany(this.changeCompanyInput);
      } else {
        this.$emit("changeCompanyClose", "esc");
      }
    },

    closeModalCompany() {
      this.$emit("changeCompanyClose");
    },

    selectCompany(event) {
      let search = event.target.value;
      console.log(search);
      // arrow (up, down), enter keycode
      if ([38, 40, 13, 27].includes(event.keyCode)) {
        event.preventDefault();
      } else {
        clearTimeout(this.debounceTimeout);
        // Set a new timeout for 300 milliseconds (adjust the time according to your needs)
        this.debounceTimeout = setTimeout(() => {
          // This code will be executed after the debounce time has passed
          this.getCompany(search);
        }, 300); // Adjust the time according to your needs
      }
    },

    getCompany(search) {
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        searchTerm: search,
      };

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getCompany(data, headers)
        .then((response) => {
          const responseStatus = Common.getStatusForActionFailed(
            response.data.status
          );

          if (responseStatus === 200) {
            this.companyList = response.data.data.list;
          } else {
            this.companyList = [];
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Common.getStatusForActionFailed(error.response.status);
        });
    },
  },

  mounted() {
    this.changeCompanyInput = localStorage.getItem("currentCompanyName");
    this.currentCompanyName = localStorage.getItem("currentCompanyName");
    this.focusSelectCompanyModal();
    this.getCompany();
    if (this.resetTallySidebarValues) {
      store.dispatch("tallyStore/resetValues");
    }
  },
};
</script>
