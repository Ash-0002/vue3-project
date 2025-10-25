<template>
  <div>
    <div class="ModalVueVoucherTypeCreateVoucher">
      <div class="SetPopupMainFrontCompanyModalVoucherTypePortion">
        <div
          class="MainTallyVoucherTypePopupCreate"
          @click="focusSelectCompanyModal"
        >
          <div class="VoucherTypeTallyFrontCompanyPopup">
            <div class="VoucherTypeCompanyInputBoxes">
              <div class="VoucherTypeTextHeadingNew">
                <span>{{ voucherNameLabel }}</span>
              </div>
              <div class="VoucherTypePopupCreateVoucherInput">
                <label>Name</label>
                <span>:</span>
              <input
                type="text"
                class="VoucherTypeCompanyFormatInputTally"
                v-model="voucherName"
                ref="companyInput"
                @focus="setCursorToStart"
                @keydown.esc="handleEscapeKey"
                @keydown="selectCompany"
                @keydown.left="handleArrowLeft"
                @keydown.right="handleArrowRight"
                @input="handleMultipleInput"
              />
            </div>
            </div>
          </div>

          <div class="VoucherSelectCompanyFlowBoxesType">
            <h6>List of Types</h6>

            <ul class="VoucherCompanySelectionPopupBoxes OverflowVoucherPopupHeightSet" ref="voucherList">
              <li
                :class="{ active: voucherIndex == index + staticList }"
                v-for="(company, index) in filteredvoucherList"
                :key="index + staticList"
                @click="changeAndSelect(index + staticList)"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="SelectCompanyPopupListNameVoucherTypeLeft">
                      <a href="javascript:void(0);">
                        {{ company.voucherTypeName }}
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
import Api from "@/Api";
import moment from "moment";
import Common from "@/Common";


export default {
  props: {
    voucherNameLabel: String,
    voucherType: String,

    resetTallySidebarValues: {
      type: Boolean,
      default: false,
    },

    voucherTypeData: {
      type: Array, 
      Required: true,
    }
  },

  data() {
    return {
      voucherIndex: 0,
      shutvoucherIndex: 0,
      voucherList: this.voucherTypeData,
      filteredvoucherList: this.voucherTypeData,
      voucherName: this.voucherTypeData[0].voucherTypeName,
      isTyping: false,
      staticList: 0,
      currentCompanyName: "",
      voucherData: null
    };
  },

  created() {
    this.addEventListenerFunc();
  },

  beforeDestroy() {
    this.removeEventListener();
  },

  methods: {

    selectvoucherIndex(index){
      this.setvoucherIndex(index);
    },

    handleMultipleInput(event){
      this.filterCompanies(event);
      this.handleInput(event);
    },

    filterCompanies(){
      const searchTerm = this.voucherName.toLowerCase();
      if (!searchTerm) {
        this.filteredvoucherList = this.voucherList; // If input is empty, show all
      } else {
        this.filteredvoucherList = this.voucherList.filter(company =>
          company.voucherTypeName.toLowerCase().includes(searchTerm)
        ); // Filter based on input
      }
    },

    handleInput(event) {
      if (!this.isTyping) {
        const currentChar = event.target.value.slice(-1);
        this.voucherName = currentChar;
        this.isTyping = true;
      } else {
        this.voucherName = event.target.value;
      }
    },

    


    setCursorToStart() {
      // Set cursor position to the start of the input field
      const input = this.$refs.companyInput;
      input.focus();
      input.setSelectionRange(0, 0); // Move cursor to the start
    },

    handleArrowLeft() {
      this.isTyping = true;
    },

    handleArrowRight() {
      this.isTyping = true;
    },


    formatDate(fiscalDates) {
      return moment(fiscalDates).format("DD-MMM-YY");
    },

    changeAndSelect(index) {
      this.voucherIndex = index;
      const voucherTypeObject = this.filteredvoucherList[this.voucherIndex];
      this.$emit('selected_voucherType', voucherTypeObject);
      this.$store.commit("tallyStore/setVoucherTypeName", voucherTypeObject.voucherTypeName);
      this.$store.commit("tallyStore/setVoucherTypeId", voucherTypeObject.id);
      this.$emit("closeVoucherPopup", this.voucherType);
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
      if(this.voucherIndex > 0){
        this.voucherIndex -= 1;
      }
    },

    handleArrowDown() {
      if(this.voucherIndex < this.voucherList.length - 1){
        this.voucherIndex += 1;
      }
      console.log("CompanyID PRinting"+this.voucherList[0].company_id);
    },
    
    scrollToSelectedRow() {
      this.$nextTick(() => {
        const selectedRow = document.querySelector(".selected");
        console.log(selectedRow, "scrollToSelectedRow");
        if (selectedRow) {
          const container = selectedRow.closest(
            ".OverflowVoucherPopupHeightSet"
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
          if (this.voucherIndex === 0 && container.scrollTop !== 0) {
            container.scrollTop = 0;
          }
        }

        if (this.voucherIndex == this.displayedStockQueryList.length - 3) {
          this.isLastIndexOfLedgerList();
        }
      });
    },

    focusSelectCompanyModal() {
      //   document.addEventListener("keydown", keydownAddCompanyModal);
      this.$nextTick(() => {
        const inputElement = this.$refs.companyInput;
        console.log(inputElement);
        inputElement.focus();
        inputElement.setSelectionRange(0, 1);
        inputElement.scrollLeft = 0
      });
    },

    handleEnterKey() {
      this.changeAndSelect(this.voucherIndex);
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
      this.isTyping = false;
      const tempVouchName = this.voucherName;
      if (this.voucherName) {
        this.voucherName = "";
      } else {
        this.$emit("closeVoucherPopup", tempVouchName);
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
          // this.getCompany(search);
        }, 300); // Adjust the time according to your needs
      }
    },

  },

  mounted() {

  //  if (this.voucherType === "sales") {
  //     console.log("Sales voucher (F8) opened");
  //     // Load sales data or trigger related actions
  //   } else if (this.voucherType === "purchase") {
  //     console.log("Purchase voucher (F9) opened");
  //     // Load purchase data or trigger related actions
  //   }
    this.focusSelectCompanyModal();
    
    // input.focus();
    this.$nextTick(() => {
      this.$refs.companyInput.focus();
      this.setCursorToStart();
    });
    // this.getVoucher();
  },
};
</script>
<style scoped>

</style>
