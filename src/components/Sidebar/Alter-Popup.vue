<template>
    <div>
        <div class="modal-vue-tally">
            <div class="main-tally-front-company-popup"  @click="focusAlterModal">
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
                <a href="javascript:void(0);" @click="closeAlterModalIcon" ><i class="fa fa-close"></i></a>
              </div>
            </div>
          </div>
        </div>
                <div class="tally-front-popup-company">
                    <!-- <button class="close" @click="closeSelectCompanyModal">x</button> -->
                    <div class="company-input-boxes">
                        <div><span class="border-bottom-grey"><strong>Master Alteration</strong></span></div>
                        <input type="text" class="company-format-input-tally" v-model="AlterModalInput"
                            ref="InputAlterModal" @keydown.esc="handleEscapeKey" @input="handleInput"
                            @keydown="handleArrowKeys" />
                    </div>
                </div>

                <div class="select-voucher-type-popup-company-flow-boxes">
                    <h6>List of Masters</h6>
                    <ul class="company-create-alter-popup-boxes" ref="selectAlterModal">
                        <li :class="{ active: AlterModalIndex == 0 }">
                            <a href="javascript:void(0);"> Change Company </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 1 }">
                            <a href="javascript:void(0);"> Expand All </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 2 }">
                            <a href="javascript:void(0);"> Show More </a>
                        </li>
                    </ul>
                    <ul class="company-selection-popup-boxes alter-popup-height-set" ref="AlterModalList">
                        
                        <h5 class="tally-style-inner-heading-createpopup">Accounting Masters</h5>
                        <li :class="{ active: AlterModalIndex == 3 }">
                            <a href="javascript:void(0);"> Group </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 4 }">
                            <a href="javascript:void(0);"> Ledger </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 5 }">
                            <a href="javascript:void(0);"> Currency </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 6 }">
                            <a href="javascript:void(0);"> Budget </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 7 }">
                            <a href="javascript:void(0);"> Scenario </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 8 }">
                            <a href="javascript:void(0);"> Voucher Type </a>
                        </li>
                        <h5 class="tally-style-inner-heading-createpopup">Inventory Masters</h5>
                        <li :class="{ active: AlterModalIndex == 9 }">
                            <a href="javascript:void(0);"> Stock Group </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 10 }">
                            <a href="javascript:void(0);"> Stock Category </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 11 }">
                            <a href="javascript:void(0);"> Stock Item </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 12 }">
                            <a href="javascript:void(0);"> Unit </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 13 }">
                            <a href="javascript:void(0);"> Godown </a>
                        </li>
                        <h5 class="tally-style-inner-heading-createpopup">Payroll Masters</h5>
                        <li :class="{ active: AlterModalIndex == 14 }">
                            <a href="javascript:void(0);"> Employee Group </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 15 }">
                            <a href="javascript:void(0);"> Employee </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 16 }">
                            <a href="javascript:void(0);"> Units (Work) </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 17 }">
                            <a href="javascript:void(0);"> Attendance/Production Type </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 18 }">
                            <a href="javascript:void(0);"> Pay Heads </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 19 }">
                            <a href="javascript:void(0);"> Payroll Voucher Type </a>
                        </li>
                        <h5 class="tally-style-inner-heading-createpopup">Statutory Masters</h5>
                        <li :class="{ active: AlterModalIndex == 20 }">
                            <a href="javascript:void(0);"> GST Registration </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 21 }">
                            <a href="javascript:void(0);"> GST Classification </a>
                        </li>
                       <h5 class="tally-style-inner-heading-createpopup">Statutory Details</h5>
                        <li :class="{ active: AlterModalIndex == 22 }">
                            <a href="javascript:void(0);"> Company GST Details </a>
                        </li>
                        <li :class="{ active: AlterModalIndex == 23 }">
                            <a href="javascript:void(0);"> PAN/CIN Details </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="overlay7" @click="focusAlterModal"></div>
        </div>
    </div>
</template>

<script>
import Api from "@/Api";
export default {
    data() {
        return {
            altermodaldatas: [
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
                { name: "" },
            ],
            AlterModalIndex: 0,
            AlterModalInput: "",
            displayedaltermodaldatas: [],
        }
    },

    created() {
        // this.addEventListenerFunc();
        this.displayedaltermodaldatas = this.altermodaldatas;
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
                    this.handleEnterKey(this.AlterModalIndex);
                    break;
            }
        },

        handleEnterKey(index) {
			this.AlterModalIndex = index;
			this.$router.push('/tally-style-stock-group-summary/'+ this.displayedaltermodaldatas[this.AlterModalIndex].guid);
           
		},

        selectAlterModal(index, altermodaldataValue){
            if(this.AlterModalIndex !== index) { 
                this.AlterModalIndex = index; 
                this.AlterModalInput = altermodaldataValue;
            }else { 
                // this.$emit("SelectStockGroup", altermodaldataValue);
                this.$emit("closeAlterModal");
            }
        },

        handleArrowUp() {
            this.AlterModalIndex = (this.AlterModalIndex - 1 + this.displayedaltermodaldatas.length) % this.displayedaltermodaldatas.length;
        },

        handleArrowDown() {
            this.AlterModalIndex = (this.AlterModalIndex + 1) % this.displayedaltermodaldatas.length;
        },

        handleEscapeKey() {
            if (this.AlterModalInput) {
                this.AlterModalInput = "";
                this.fetchStockGroupByText("");
                this.fetchLedgerGroupByText("");
            } else {
                this.$emit("closeAlterModal");
            }
        },
        

        handleInput(event) {
            this.fetchStockGroupByText(this.AlterModalInput);
            this.fetchLedgerGroupByText(this.AlterModalIndex);
        },

        fetchStockGroupByText(text) {
            if (text.trim() === "") {
                this.displayedaltermodaldatas = this.altermodaldatas;
            } else {
                this.displayedaltermodaldatas = this.altermodaldatas.filter((altermodaldata) => {
                return altermodaldata.altermodaldataName.toLowerCase().includes(text.toLowerCase());
                });
            }
                console.log(filteredStockGroups);
                this.displayedaltermodaldatas = filteredStockGroups;
                this.AlterModalIndex = 0;
        },

        fetchLedgerGroupByText(text){
            if (text.trim() === "") {
                this.displayedaltermodaldatas = this.altermodaldatas;
            } else {
                this.displayedaltermodaldatas = this.altermodaldatas.filter((altermodaldata) => {
                return altermodaldata.altermodaldataName.toLowerCase().includes(text.toLowerCase());
                });
            }
                console.log(filteredLedgerGroups);
                this.displayedaltermodaldatas = filteredLedgerGroups;
                this.AlterModalIndex = 0;
        },

        focusAlterModal() {
    this.showStockGroupPopup = true;
    this.$nextTick(() => {
        var inputElement = this.$refs.InputAlterModal;
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
    });
},

        closeAlterModalIcon(){
            this.$emit("closeAlterModal");
        },
       
    },

    mounted() {
        // this.currentCompanyName = localStorage.getItem("currentCompanyName");
        this.focusAlterModal();
    }
}
</script>