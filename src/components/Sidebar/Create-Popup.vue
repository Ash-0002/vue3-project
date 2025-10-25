<template>
    <div>
        <div class="modal-vue-tally">
            <div class="main-tally-front-company-popup"  @click="focusCreateModal">
                <div class="company-popup-labelline-with-company">
          <div class="row align-items-center">
            <div class="col-lg-4 col-4">
              <div class="company-popup-labelline-text">
                <h6></h6>
              </div>
            </div>
            <div class="col-lg-4 col-4">
              <div class="company-popup-labelline-companyname">
                <h6>{{ currentCompanyName }}</h6>
              </div>    
            </div>
            <div class="col-lg-4 col-4">
              <div class="company-popup-labelline-icon">
                <a href="javascript:void(0);" @click="closeCreateModalIcon" ><i class="fa fa-close"></i></a>
              </div>
            </div>
          </div>
        </div>
                <div class="tally-front-popup-company">
                    <!-- <button class="close" @click="closeSelectCompanyModal">x</button> -->
                    <div class="company-input-boxes">
                        <div><span class="border-bottom-grey"><strong>Master Creation</strong></span></div>
                        <input type="text" class="company-format-input-tally" v-model="CreateModalInput"
                            ref="InputCreateModal" @keydown.esc="handleEscapeKey" @input="handleInput"
                            @keydown="handleArrowKeys" />
                    </div>
                </div>

                <div class="select-voucher-type-popup-company-flow-boxes">
                    <h6>List of Masters</h6>
                    <ul class="company-create-alter-popup-boxes" ref="selectCreateModal">
                        <li :class="{ active: CreateModalIndex == 0 }">
                            <a href="javascript:void(0);"> Change Company </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 1 }">
                            <a href="javascript:void(0);"> Show More </a>
                        </li>
                    </ul>
                    <ul class="company-selection-popup-boxes create-popup-height-set" ref="CreateModalList">
                        <h5 class="tally-style-inner-heading-createpopup">Accounting Masters</h5>
                        <li :class="{ active: CreateModalIndex == 2 }">
                            <a href="javascript:void(0);"> Group </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 3 }">
                            <a href="javascript:void(0);"> Ledger </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 4 }">
                            <a href="javascript:void(0);"> Currency </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 5 }">
                            <a href="javascript:void(0);"> Budget </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 6 }">
                            <a href="javascript:void(0);"> Scenario </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 7 }">
                            <a href="javascript:void(0);"> Voucher Type </a>
                        </li>
                        <h5 class="tally-style-inner-heading-createpopup">Inventory Masters</h5>
                        <li :class="{ active: CreateModalIndex == 8 }">
                            <a href="javascript:void(0);"> Stock Group </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 9 }">
                            <a href="javascript:void(0);"> Stock Category </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 10 }">
                            <a href="javascript:void(0);"> Stock Item </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 11 }">
                            <a href="javascript:void(0);"> Unit </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 12 }">
                            <a href="javascript:void(0);"> Godown </a>
                        </li>
                        <h5 class="tally-style-inner-heading-createpopup">Payroll Masters</h5>
                        <li :class="{ active: CreateModalIndex == 13 }">
                            <a href="javascript:void(0);"> Employee Group </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 14 }">
                            <a href="javascript:void(0);"> Employee </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 15 }">
                            <a href="javascript:void(0);"> Units (Work) </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 16 }">
                            <a href="javascript:void(0);"> Attendance/Production Type </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 17 }">
                            <a href="javascript:void(0);"> Pay Heads </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 18 }">
                            <a href="javascript:void(0);"> Payroll Voucher Type </a>
                        </li>
                        <h5 class="tally-style-inner-heading-createpopup">Statutory Masters</h5>
                        <li :class="{ active: CreateModalIndex == 19 }">
                            <a href="javascript:void(0);"> GST Registration </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 20 }">
                            <a href="javascript:void(0);"> GST Classification </a>
                        </li>
                       <h5 class="tally-style-inner-heading-createpopup">Statutory Details</h5>
                        <li :class="{ active: CreateModalIndex == 21 }">
                            <a href="javascript:void(0);"> Company GST Details </a>
                        </li>
                        <li :class="{ active: CreateModalIndex == 22 }">
                            <a href="javascript:void(0);"> PAN/CIN Details </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="overlay7" @click="focusCreateModal"></div>
        </div>
    </div>
</template>

<script>
import Api from "@/Api";
export default {
    data() {
        return {
            createmodaldatas: [
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
                { name: "" },
            ],
            CreateModalIndex: 0,
            CreateModalInput: "",
            displayedcreatemodaldatas: [],
        }
    },

    created() {
        // this.addEventListenerFunc();
        this.displayedcreatemodaldatas = this.createmodaldatas;
    },

    // beforeDestroy() {
    //     this.removeEventListener();
    // },
    computed: {
		currentCompanyName() {
			return this.$store.state.tallyStore.currentCompanyName
		}
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
                    this.handleEnterKey(this.CreateModalIndex);
                    break;
            }
        },

        handleEnterKey(index) {
			this.CreateModalIndex = index;
			this.$router.push('/tally-style-stock-group-summary/'+ this.displayedcreatemodaldatas[this.CreateModalIndex].guid);
           
		},

        selectCreateModal(index, createmodaldataValue){
            if(this.CreateModalIndex !== index) { 
                this.CreateModalIndex = index; 
                this.CreateModalInput = createmodaldataValue;
            }else { 
                // this.$emit("SelectStockGroup", createmodaldataValue);
                this.$emit("closeCreateModal");
            }
        },

        handleArrowUp() {
            this.CreateModalIndex = (this.CreateModalIndex - 1 + this.displayedcreatemodaldatas.length) % this.displayedcreatemodaldatas.length;
        },

        handleArrowDown() {
            this.CreateModalIndex = (this.CreateModalIndex + 1) % this.displayedcreatemodaldatas.length;
        },

        handleEscapeKey() {
            if (this.CreateModalInput) {
                this.CreateModalInput = "";
                this.fetchStockGroupByText("");
                this.fetchLedgerGroupByText("");
            } else {
                this.$emit("closeCreateModal");
            }
        },
        

        handleInput(event) {
            this.fetchStockGroupByText(this.CreateModalInput);
            this.fetchLedgerGroupByText(this.CreateModalInput);
        },

        fetchStockGroupByText(text) {
            if (text.trim() === "") {
                this.displayedcreatemodaldatas = this.createmodaldatas;
            } else {
                this.displayedcreatemodaldatas = this.createmodaldatas.filter((createmodaldata) => {
                return createmodaldata.createmodaldataName.toLowerCase().includes(text.toLowerCase());
                });
            }
                console.log(filteredStockGroups);
                this.displayedcreatemodaldatas = filteredStockGroups;
                this.CreateModalIndex = 0;
        },

        fetchLedgerGroupByText(text) {
            if (text.trim() === "") {
                this.displayedcreatemodaldatas = this.createmodaldatas;
            } else {
                this.displayedcreatemodaldatas = this.createmodaldatas.filter((createmodaldata) => {
                return createmodaldata.createmodaldataName.toLowerCase().includes(text.toLowerCase());
                });
            }
                console.log(fetchLedgerGroupByText);
                this.displayedcreatemodaldatas = fetchLedgerGroupByText;
                this.CreateModalIndex = 0;
        },

        focusCreateModal() {
    this.showStockGroupPopup = true;
    this.$nextTick(() => {
        var inputElement = this.$refs.InputCreateModal;
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
    });
},

        closeCreateModalIcon(){
            this.$emit("closeCreateModal");
        },
       
    },

    mounted() {
        // this.currentCompanyName = localStorage.getItem("currentCompanyName");
        this.focusCreateModal();
    }
}
</script>