<template>
  <div>
    <div class="modal-vue-tally">
      <div
        class="main-tally-front-company-popup"
        @click="focusVoucherTypeModal"
      >
        <div class="company-popup-labelline-with-company">
          <div class="row align-items-center">
            <div class="col-lg-4 col-4">
              <div class="company-popup-labelline-text">
                <h6>Change Voucher Type</h6>
              </div>
            </div>
            <div class="col-lg-4 col-4">
              <div class="company-popup-labelline-companyname">
                <h6>{{ currentCompanyName }}</h6>
              </div>
            </div>
            <div class="col-lg-4 col-4">
              <div class="company-popup-labelline-icon">
                <a href="javascript:void(0);" @click="closeVoucherTypeModalIcon"
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
              <span><strong>Name of Voucher Type</strong></span>
            </div>
            <input
              type="text"
              class="company-format-input-tally"
              v-model="voucherTypeInput"
              ref="InputVoucherType"
              @keydown.esc="handleEscapeKey"
              @input="handleInput"
              @keydown="handleArrowKeys"
            />
          </div>
        </div>

        <div class="select-voucher-type-popup-company-flow-boxes">
          <h6>Voucher Types</h6>
          <!-- <ul class="company-create-alter-popup-boxes" ref="SelectVoucherType">
                        <li :class="{ active: voucherTypeIndex == 0 }">
                            <a href="javascript:void(0);"> Create </a>
                        </li>
                    </ul> -->
          <ul
            class="company-selection-popup-boxes voucherType-height-set"
            ref="vouchertypeList"
          >
            <li
              :class="{ active: voucherTypeIndex == index }"
              @click="(event) => selectVocherType(index, vouchertype.name, event)"
              v-for="(vouchertype, index) in displayedVoucherTypes"
              :key="index + 1"
            >
              <div class="company-popup-list-name-left">
                <a href="javascript:void(0);">
                  {{ vouchertype.name }}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="overlay6" @click="focusVoucherTypeModal"></div>
    </div>
  </div>
</template>

<script>
import Api from "@/Api";
import Common from "@/Common";

export default {
  props: {
    startDate: String,
    endDate: String,
    type: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      voucherTypes: [],
      voucherTypeIndex: 0,
      voucherTypeInput: "",
      displayedVoucherTypes: [],
    };
  },

  created() {
    this.addEventListenerFunc();
    this.getVoucherTypes();
    this.displayedVoucherTypes = this.voucherTypes;
  },

  beforeDestroy() {
    this.removeEventListener();
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

    removeEventListener() {
      document.removeEventListener("wheel", this.handleMouseScroll);
    },

    handleMouseScroll(event) {
      const deltaY = event.deltaY;

      if (deltaY > 0) {
        this.handleArrowDown();
      } else if (deltaY < 0) {
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
          this.handleEnterKey(event);
      }
    },

    handleEnterKey(event) {
      this.voucherTypeInput = this.displayedVoucherTypes[this.voucherTypeIndex].name;
      // const activeElement = this.$refs.vouchertypeList.querySelector('.active');
      // if (this.voucherTypeInput === "All Items" && this.$props.type !== "dayBook") {
      //   event.preventDefault();
      //   this.$router.push({ name: 'tally-style-daybook', query : { startDate : this.$props.startDate, endDate : this.$props.endDate } });
      // }else if(this.voucherTypeInput) {
      //   this.$emit("selectVoucherType", this.voucherTypeInput);
      //   this.$emit("closeVoucherTypeModal");

      this.$emit("selectVoucherType", this.voucherTypeInput);
      this.$emit("closeVoucherTypeModal");
    },

    selectVocherType(index, voucherValue, event) {
      if (this.voucherTypeIndex !== index ) {
        this.voucherTypeIndex = index;
        this.voucherTypeInput = voucherValue;
      } else {
        this.handleEnterKey(event);
      }
    },

    handleArrowUp() {
      // Only go up if there are items above the current groupIndex
      if (this.voucherTypeIndex > 0) {
        this.voucherTypeIndex--;
        this.scrollToActiveItem(); // Call scroll function when moving up
      }
    },

    handleArrowDown() {
      if (this.voucherTypeIndex < this.displayedVoucherTypes.length - 1) {
        this.voucherTypeIndex++;
        this.scrollToActiveItem(); // Call scroll function when moving down
      }
    },

    scrollToActiveItem() {
      this.$nextTick(() => {
        const container = this.$refs.vouchertypeList;
        const activeItem = container.querySelectorAll("li")[this.voucherTypeIndex];

        if (activeItem) {
          // Check if the active item is out of the viewport
          const containerRect = container.getBoundingClientRect();
          const itemRect = activeItem.getBoundingClientRect();

          if (itemRect.bottom > containerRect.bottom) {
            // Scroll down if the item is below the viewport
            container.scrollTop += itemRect.bottom - containerRect.bottom;
          } else if (itemRect.top < containerRect.top) {
            // Scroll up if the item is above the viewport
            container.scrollTop -= containerRect.top - itemRect.top;
          }
        }
      });
    },

    focusVoucherTypeModal() {
      this.showVoucherTypePopup = true;
      this.$nextTick(() => {
        this.$refs.InputVoucherType.focus();
      });
    },

    handleEscapeKey() {
      if (this.voucherTypeInput) {
        this.voucherTypeInput = "";
        this.fetchVoucherTypesByText(this.voucherTypeInput);
      } else {
        this.$emit("closeVoucherTypeModal");
      }
    },
    closeVoucherTypeModalIcon() {
      this.$emit("closeVoucherTypeModal");
    },

    handleInput(event) {
      const searchText = event.target.value.toLowerCase();
      this.fetchVoucherTypesByText(searchText);    
    },

    fetchVoucherTypesByText(text) {
      if (text.trim() === "") {
        // Show all voucher types if input is empty
        this.displayedVoucherTypes = this.voucherTypes;
      } else {
        // Filter voucher types to only show those matching the input text
        this.displayedVoucherTypes = this.voucherTypes.filter((voucherType) =>
          voucherType.name.toLowerCase().includes(text)
        );
      }
      this.voucherTypeIndex = 0; // Reset index to the top of the filtered list
    },


    getVoucherTypes(){
      const data = {
        _userId: localStorage.getItem('customerId'),			// pass userId 
        company_id:localStorage.getItem('companyId'),			// pass companyId 
        startLimit: 0,						// skip given number of items from the starting of list 
        endLimit: 100,						// to only display items till endLimit is reached 
        requestFrom: "WEB",					// WEB, MOBILE
        searchTerm: "",
      };

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getVoucherTypesV2(data, headers)
      .then((response) => {
        const responseStatus = Common.getStatusForActionFailed(
          response.data.status
        );

        if(responseStatus === 200){
          this.voucherTypes = response.data.data.list;
          this.displayedVoucherTypes = this.voucherTypes;

          if (this.voucherTypes.length > 0) {
              this.voucherName = this.voucherTypes[0].voucherTypeName; // Use the 0th index value
          }
        }
        else {
          this.voucherTypes = [];
        }
      })
      .catch((error) => {
        Common.getStatusForActionFailed(error.response.status);
      });
    },
  },

  mounted() {
    // this.currentCompanyName = localStorage.getItem("currentCompanyName");
    this.focusVoucherTypeModal();
    // this.getVoucher();
  },
};
</script>
