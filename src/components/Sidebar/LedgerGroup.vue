<template>
    <div>
        <div class="modal-vue-tally">
            <div class="main-tally-front-company-popup"  @click="focusLedgerGroupModal">
                <div class="company-popup-labelline-with-company">
          <div class="row align-items-center">
            <div class="col-lg-4 col-4">
              <div class="company-popup-labelline-text">
                <h6>Select Ledger Group</h6>
              </div>
            </div>
            <div class="col-lg-4 col-4">
              <div class="company-popup-labelline-companyname">
                <h6>{{ currentCompanyName }}</h6>
              </div>    
            </div>
            <div class="col-lg-4 col-4">
              <div class="company-popup-labelline-icon">
                <a href="javascript:void(0);" @click="closeLedgerGroupModalIcon" ><i class="fa fa-close"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="tally-front-popup-company">
                    <!-- <button class="close" @click="closeSelectCompanyModal">x</button> -->
                    <div class="company-input-boxes">
                        <div><span><strong>Name of Group</strong></span></div>
                        <input type="text" class="company-format-input-tally" v-model="LedgerGroupInput"
                            ref="InputLedgerGroup" @keydown.esc="handleEscapeKey" @input="handleInput"
                            @keydown="handleArrowKeys" />
                    </div>
                </div>

                <div class="select-voucher-type-popup-company-flow-boxes">
                    <h6>List of Ledger Groups</h6>
                    <!-- <ul class="company-create-alter-popup-boxes" ref="SelectLedgerGroup">
                        <li :class="{ active: LedgerGroupIndex == 0 }">
                            <a href="javascript:void(0);"> Create </a>
                        </li>
                    </ul> -->
                    <ul class="company-selection-popup-boxes voucherType-height-set" ref="LedgerGroupList">
                        <li :class="{ active: LedgerGroupIndex == index }"
                        @click="selectStckGroup(index, ledgergroup.name)"
                            v-for="(ledgergroup, index) in displayedLedgerGroups" :key="index + 1"
                            :group="ledgergroup.ledgerGroupName">
                            <div class="company-popup-list-name-left">
                                <a href="javascript:void(0);" >
                                    {{ ledgergroup.ledgerGroupName }}
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="overlay7" @click="focusLedgerGroupModal"></div>
        </div>
    </div>
</template>

<script>
import Api from "@/Api";
import { event } from "vue-analytics";
export default {
    props: {
        redirect: {
        type: Boolean,
        default: true,
        }
    },

    data() {
        return {
            LedgerGroups: [
                { name: "Primary" },
                { name: "Boat" },
                { name: "Bottle" },
                { name: "COMPANY" },
                { name: "D Bottle" },
                { name: "Group 1" },
                { name: "Group 2" },
                { name: "Group Classification" },
                { name: "Icard" },
                { name: "On Group" },
                { name: "Parker" },
                { name: "Plastic" },
                { name: "Stationary" },
                { name: "Ledger Group class" },
                { name: "Ledger Group Zero" },
            ],
            LedgerGroupIndex: 0,
            LedgerGroupInput: "",
            displayedLedgerGroups: [],
            ledgerGroupGuid: "",
        }
    },

    created() {
        // this.addEventListenerFunc();
        this.displayedLedgerGroups = this.LedgerGroups;
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
                    this.handleEnterKey(this.LedgerGroupIndex);
                    break;
            }
        },

        // handleEnterKey() {
        //     const activeElement = this.$refs.LedgerGroupList.querySelector('.active');
        //     if (activeElement) {
        //         alert("i am working")
        //         const LedgerGroupValue = activeElement.getAttribute('group');
        //         this.LedgerGroupInput = LedgerGroupValue;
        //         this.$emit("closeLedgerGroupModal");
        //     }
        // },
        

        handleEnterKey(index) {
            this.routeFunction(
                this.LedgerGroups[index].ledgerGroupGuid,
            );
			//this.$router.push('/tally-style-Ledger-group-summary/'+ this.displayedLedgerGroups[this.LedgerGroupIndex].guid);
           
		},

        routeFunction(guid){
            let routeName = "tally-style-negative-ledgers-id";

            const basePath = this.$route.path.split('/')[1];

            if(basePath === routeName){
                this.$emit("closeLedgerGroupModal", guid);
                return;
            }

            if(routeName){
                this.$router.replace({ path: this.$route.path, query: { temp: Date.now() } })
                .then(() => {
                    // Navigate back to the intended route
                    this.$router.push({
                        name: routeName,
                        params: { id: guid },
                    });
                })
                .catch((err) => {
                    if (err.name !== "NavigationDuplicated") {
                        console.error("Unexpected navigation error:", err);
                    }
                });
            }
        },

        selectStckGroup(index, LedgerGroupValue){
            if(this.LedgerGroupIndex !== index) { 
                this.LedgerGroupIndex = index; 
                this.LedgerGroupInput = LedgerGroupValue;
            }else { 
                // this.$emit("SelectLedgerGroup", LedgerGroupValue);
                this.$emit("closeLedgerGroupModal");
            }
        },

        handleArrowUp() {
            if(this.LedgerGroupIndex > 0){
                this.LedgerGroupIndex--;
                this.scrollToActiveItem();
            }
        },

        handleArrowDown() {
            if(this.LedgerGroupIndex < this.displayedLedgerGroups.length - 1){
                this.LedgerGroupIndex++;
                this.scrollToActiveItem();
            }
        },

        handleEscapeKey() {
            if (this.LedgerGroupInput) {
                this.LedgerGroupInput = "";
                this.fetchLedgerGroupByText("");
            } else {
                this.$emit("closeLedgerGroupModal");
            }
        },

        scrollToActiveItem() {
            this.$nextTick(() => {
                const container = this.$refs.LedgerGroupList;
                const activeItem = container.querySelectorAll("li")[this.LedgerGroupIndex];

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
        

        handleInput(event) {
            this.fetchLedgerGroupByText(this.LedgerGroupInput);
        },

        fetchLedgerGroupByText(text) {
            if (text.trim() === "") {
                this.displayedLedgerGroups = this.LedgerGroups;
            } else {
                this.displayedLedgerGroups = this.LedgerGroups.filter((ledgergroup) => {
                return ledgergroup.ledgerGroupName.toLowerCase().includes(text.toLowerCase());
                });
            }
                this.LedgerGroupIndex = 0;
        },
        focusLedgerGroupModal() {
            this.showLedgerGroupPopup = true;
            this.$nextTick(() => {
                var inputElement = this.$refs.InputLedgerGroup;
                inputElement.focus();
                inputElement.setSelectionRange(0, 0);
            });
        },

        closeLedgerGroupModalIcon(){
            this.$emit("closeLedgerGroupModal");
        },
        groupSummary(){
			this.LedgerGroups = [];
			this.debitTotal = 0;
			this.creditTotal = 0;
			const data = {
				_userId: localStorage.getItem("customerId"),
				company_id: this.$store.state.tallyStore.companyId,
				// company_id: "65aa1a7aea3a50506e0f1f2d",
                ledgerGroupGuid: "",
				requestFrom: "WEB",
				startDate: "2023-04-01",
				endDate: "2024-03-31",
				startLimit: 0,
				endLimit: 1000,
				orderBy : -1,
				sortBy : ""
			}

			const headers = {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
				token: localStorage.getItem("webAuthToken"),
			};

			Api.ledgerGroupsGo	(data, headers)
				.then((response) => {
					 try {
                        console.log(response.data.data.list);
            this.LedgerGroups = response.data.data.list.map(ledgergroup => ({
              ...ledgergroup,
              ledgerGroupGuid: ledgergroup.guid,
              ledgerGroupName: ledgergroup.ledgerGroupName.replace("#4;", "")
            }));
            this.displayedLedgerGroups = this.LedgerGroups;
          } catch (error) {
            console.log(error);
          }
				})

		}
    },

    mounted() {
        // this.currentCompanyName = localStorage.getItem("currentCompanyName");
        this.focusLedgerGroupModal();
        this.groupSummary();
        if (this.displayedLedgerGroups.length > 0) {
                this.LedgerGroupInput = this.displayedLedgerGroups[0].name;
            }
            else{

            }
    }
}
</script>