<template>
    <div>
        <div class="modal-vue-tally">
            <div class="main-tally-front-company-popup" @click="focusCreateModal">
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
                                <a href="javascript:void(0);" @click="closeCreateModalIcon"><i
                                        class="fa fa-close"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tally-front-popup-company">
                    <!-- <button class="close" @click="closeSelectCompanyModal">x</button> -->
                    <div class="company-input-boxes">
                        <div><span class="border-bottom-grey"><strong>Chart of Accounts</strong></span></div>
                        <input type="text" class="company-format-input-tally" v-model="CreateModalInput"
                            ref="InputCreateModal" @keydown.esc="handleEscapeKey" @keydown="handleArrowKeys" />
                    </div>
                </div>

                <div class="select-voucher-type-popup-company-flow-boxes">
                    <h6>List of Masters</h6>
                    <ul class="company-create-alter-popup-boxes" ref="selectCreateModal">
                        <li v-for="list in masterList" :key="list.id" :class="{ active: CreateModalIndex == list.id }"
                            @click="(event) => handleEnterKey(list.id, event)">
                            <div>
                                {{ list.name }}
                            </div>
                        </li>
                    </ul>
                    <ul class="company-selection-popup-boxes create-popup-height-set" ref="CreateModalList">
                        <h5 class="tally-style-inner-heading-createpopup font-weight-700">Accounting Masters</h5>
                        <li v-for="list in filteredAccountingMasterList" :key="list.id"
                            :class="{ active: CreateModalIndex == list.id }"
                            @click="(event) => handleEnterKey(list.id, event)">
                            <div>
                                &nbsp;&nbsp;{{ list.name }}
                            </div>
                        </li>

                        <h5 class="tally-style-inner-heading-createpopup font-weight-700">Inventory Masters</h5>
                        <li v-for="list in filteredInventryMasters" :key="list.id"
                            :class="{ active: CreateModalIndex == list.id }"
                            @click="(event) => handleEnterKey(list.id, event)">
                            <div>
                                &nbsp;&nbsp;{{ list.name }}
                            </div>
                        </li>

                        <div v-if="showPayRolls">
                            <h5 class="tally-style-inner-heading-createpopup font-weight-700">Payroll Masters</h5>
                            <li v-for="list in filteredPayrollMasters" :key="list.id"
                                :class="{ active: CreateModalIndex == list.id }"
                                @click="(event) => handleEnterKey(list.id, event)">
                                <div>
                                    &nbsp;&nbsp;{{ list.name }}
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <div class="overlay7" @click="focusCreateModal"></div>
        </div>
    </div>
</template>

<script>
import Api from "@/Api";
import { event } from "vue-analytics";
export default {
    data() {
        return {
            masterList: [
                {
                    id: 0,
                    name: "Change Company",
                    redirect: ""
                },
                {
                    id: 1,
                    name: "Show Inactive",
                }
            ],
            accountingMasterList: [
                {
                    id: 2,
                    name: "Groups",
                    redirect: ""
                },
                {
                    id: 3,
                    name: "Ledgers",
                    redirect: ""
                },
                {
                    id: 4,
                    name: "Voucher Types",
                    redirect: ""
                },
                {
                    id: 5,
                    name: "Cost Categories",
                    redirect: ""
                },
                {
                    id: 6,
                    name: "Cost Centers",
                    redirect: ""
                },
                {
                    id: 7,
                    name: "Currencies",
                    redirect: ""
                },
                {
                    id: 8,
                    name: "Budgets",
                    redirect: ""
                },
                {
                    id: 9,
                    name: "Scenarios",
                    redirect: ""
                }

            ],
            inventryMasters: [
                {
                    id: 10,
                    name: "Stock Groups",
                    redirect: ""
                },
                {
                    id: 11,
                    name: "Stock Items",
                    redirect: ""
                },
                {
                    id: 12,
                    name: "Stock Categories",
                    redirect: ""
                },
                {
                    id: 13,
                    name: "Units",
                    redirect: ""
                },
                {
                    id: 14,
                    name: "Godowns",
                    redirect: ""
                }
            ],
            payrollMasters: [
                {
                    id: 15,
                    name: "Employee Categories"
                },
                {
                    id: 16,
                    name: "Employee Groups",
                    redirect: ""
                },
                {
                    id: 17,
                    name: "Employees",
                    redirect: ""
                },
                {
                    id: 18,
                    name: "Attendance/Production Types",
                    redirect: ""
                },
                {
                    id: 19,
                    name: "Pay Heads",
                    redirect: ""
                }

            ],
            showPayRolls: false,
            CreateModalIndex: 2,
            CreateModalInput: "",
            displayedcreatemodaldatas: [],
        }
    },
    created() {
        // this.addEventListenerFunc();
        this.displayedcreatemodaldatas = this.createmodaldatas;
        this.addEventListenerFunc();
    },

    beforeDestroy() {
        this.removeEventListenerFunc();
    },
    computed: {
        currentCompanyName() {
            return this.$store.state.tallyStore.currentCompanyName
        },
        totalLength() {
            const len = this.masterList.length + this.filteredAccountingMasterList.length + this.filteredInventryMasters.length - 1;
            return this.showPayRolls ? len + this.filteredPayrollMasters.length : len;
        },
        filteredAccountingMasterList() {
            return this.filterList(this.accountingMasterList, this.masterList.length);
        },
        filteredInventryMasters() {
            return this.filterList(this.inventryMasters, this.masterList.length + this.filteredAccountingMasterList.length);
        },
        filteredPayrollMasters() {
            return this.filterList(this.payrollMasters, this.masterList.length + this.filteredAccountingMasterList.length + this.filteredInventryMasters.length);
        }
    },
    methods: {

        handleArrowKeys(event) {
            switch (event.key) {
                case "ArrowUp":
                    this.handleArrowUp();
                    break;
                case "ArrowDown":
                    this.handleArrowDown();
                    break;
                case "Enter":
                    this.handleEnterKey(this.CreateModalIndex, event);
                    break;
            }
        },

        handleEnterKey(index, event) {
            event.stopPropagation();
            this.CreateModalIndex = index;
            if (index == 0) {
                this.$emit("showCompanyModal");
                this.$store.state.tallyStore.isChartOfAccountOpen = true;
                return;
            }
            else if (index == 1) {
                this.showPayRolls = !this.showPayRolls;
                if (this.showPayRolls) {
                    this.masterList[1].name = "Hide Inactive";
                }
                else {
                    this.masterList[1].name = "Show Inactive";
                }
                return;
            }
            const item = this.findObjectById(index);
            if (item) {
                this.routeFunction(item.name);
            }
        },

        selectCreateModal(index, createmodaldataValue) {
            if (this.CreateModalIndex !== index) {
                this.CreateModalIndex = index;
                this.CreateModalInput = createmodaldataValue;
            } else {
                // this.$emit("SelectStockGroup", createmodaldataValue);
                this.$emit("closeChartOfAccounts");
            }
        },

        handleArrowUp() {
            if (this.CreateModalIndex > 0) this.CreateModalIndex--;
        },

        handleArrowDown() {
            if (this.CreateModalIndex < this.totalLength) this.CreateModalIndex++;
        },

        handleEscapeKey() {
            if (this.CreateModalInput) {
                this.CreateModalInput = "";
                // this.fetchAccountsByText("");
                // this.fetchInventoryByText("");
            } else {
                this.$emit("closeChartOfAccounts");
            }
        },

        filterList(list, idLen) {
            if (!this.CreateModalInput && !this.showPayRolls) return list;
            const query = this.CreateModalInput.toLowerCase();
            this.CreateModalIndex = 2;
            const listoFItems = list.filter(item => item.name.toLowerCase().includes(query))
            return listoFItems.map((item, index) => {
                return {
                    ...item,
                    id: idLen + index,
                }
            })
        },

        routeFunction(type) {
            let routeName = ""

            switch (type) {
                case "Stock Groups":
                    routeName = "tally-style-stockgroup";
                    break;
                case "Stock Categories":
                    routeName = "tally-style-stockcategory";
                    break;
                case "Stock Items":
                    routeName = "tally-style-stockitems";
                    break;
                case "Units":
                    routeName = "tally-style-units";
                    break;
                case "Godowns":
                    routeName = "tally-style-godown";
                    break;
                case "Groups":
                    routeName = "tally-style-group";
                    break;
                case "Ledgers":
                    routeName = "tally-style-ledgers";
                    break;
                case "Voucher Types":
                    routeName = "tally-style-voucherTypes";
                    break;
                default:
                    console.error("Unknown route: " + routeName);
                    break;
            }

            if (routeName) {
                // localStorage.setItem("StockItemAnalysisIndex", this.StockItemAnalysisIndex);
                this.$store.state.tallyStore.isChartOfAccountOpen = true;
                this.$router.push({
                    name: routeName,
                    params: {
                        v_type: type,
                    },
                });
            }
        },
        findObjectById(id) {
            // Search in each array and return the matching object if found
            const arrays = [this.filteredAccountingMasterList, this.filteredInventryMasters, this.filteredPayrollMasters];

            for (let arr of arrays) {
                const result = arr.find(item => item.id === id);
                if (result) return result;  // Return the object if found
            }

            return null;  // Return null if no match is found
        },

        focusCreateModal() {
            this.showStockGroupPopup = true;
            this.$nextTick(() => {
                var inputElement = this.$refs.InputCreateModal;
                inputElement.focus();
                inputElement.setSelectionRange(0, 0);
            });
        },
        
        addEventListenerFunc() {
            document.addEventListener("wheel", this.handleMouseScroll);
        },

        removeEventListenerFunc() {
            document.removeEventListener("wheel", this.handleMouseScroll);
        },

        closeCreateModalIcon() {
            this.$emit("closeChartOfAccounts");
        },
        handleMouseScroll(event) {
            const deltaY = event.deltaY;

            if (deltaY > 0) {
                this.handleArrowDown();
            } else if (deltaY < 0) {
                this.handleArrowUp();
            }
        },

    },

    mounted() {
        // this.currentCompanyName = localStorage.getItem("currentCompanyName");
        this.focusCreateModal();
    }
}
</script>