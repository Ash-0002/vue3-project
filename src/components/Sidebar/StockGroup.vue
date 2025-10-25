<template>
    <div>
        <div class="modal-vue-tally">
            <div class="main-tally-front-company-popup"  @click="focusStockGroupModal">
                <div class="company-popup-labelline-with-company">
          <div class="row align-items-center">
            <div class="col-lg-4 col-4">
              <div class="company-popup-labelline-text">
                <h6>Select Stock Group</h6>
              </div>
            </div>
            <div class="col-lg-4 col-4">
              <div class="company-popup-labelline-companyname">
                <h6>{{ currentCompanyName }}</h6>
              </div>    
            </div>
            <div class="col-lg-4 col-4">
              <div class="company-popup-labelline-icon">
                <a href="javascript:void(0);" @click="closeStockGroupModalIcon" ><i class="fa fa-close"></i></a>
              </div>
            </div>
          </div>
        </div>
                <div class="tally-front-popup-company">
                    <!-- <button class="close" @click="closeSelectCompanyModal">x</button> -->
                    <div class="company-input-boxes">
                        <div><span><strong>Name of Group</strong></span></div>
                        <input type="text" class="company-format-input-tally" v-model="StockGroupInput"
                            ref="InputStockGroup" @keydown.esc="handleEscapeKey" @input="handleInput"
                            @keydown="handleArrowKeys" />
                    </div>
                </div>

                <div class="select-voucher-type-popup-company-flow-boxes">
                    <h6>List of Stock Groups</h6>
                    <!-- <ul class="company-create-alter-popup-boxes" ref="SelectStockGroup">
                        <li :class="{ active: StockGroupIndex == 0 }">
                            <a href="javascript:void(0);"> Create </a>
                        </li>
                    </ul> -->
                    <ul class="company-selection-popup-boxes voucherType-height-set" ref="StockGroupList">
                        <li :class="{ active: StockGroupIndex == index }"
                        @click="selectStckGroup(index, stockgroup.name)"
                            v-for="(stockgroup, index) in displayedStockGroups" :key="index + 1"
                            :group="stockgroup.stockGroupName">
                            <div class="company-popup-list-name-left">
                                <a href="javascript:void(0);" >
                                    {{ stockgroup.stockGroupName }}
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="overlay7" @click="focusStockGroupModal"></div>
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
            StockGroups: [],
            StockGroupIndex: 0,
            StockGroupInput: "",
            displayedStockGroups: [],
            stockGroupGuid: "",
        }
    },

    created() {
        // this.addEventListenerFunc();
        this.displayedStockGroups = this.StockGroups;
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
                    this.handleEnterKey(this.StockGroupIndex);
                    break;
            }
        },

        // handleEnterKey() {
        //     const activeElement = this.$refs.StockGroupList.querySelector('.active');
        //     if (activeElement) {
        //         alert("i am working")
        //         const StockGroupValue = activeElement.getAttribute('group');
        //         this.StockGroupInput = StockGroupValue;
        //         this.$emit("closeStockGroupModal");
        //     }
        // },

        handleEnterKey(index) {
            console.log("Stock groups " + this.StockGroups[index].guid);
			this.routeFunction(
                this.StockGroups[index].guid,
            );
		},

        routeFunction(guid){
            let routeName = "tally-style-negative-stock-id";

            const basePath = this.$route.path.split('/')[1];

            if(basePath === routeName){
                this.$emit("closeStockGroupModal", guid);
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


        selectStckGroup(index, StockGroupValue){
            if(this.StockGroupIndex !== index) { 
                this.StockGroupIndex = index; 
                this.StockGroupInput = StockGroupValue;
            }else { 
                // this.$emit("SelectStockGroup", StockGroupValue);
                this.$emit("closeStockGroupModal");
            }
        },

        handleArrowUp() {
            this.StockGroupIndex = (this.StockGroupIndex - 1 + this.displayedStockGroups.length) % this.displayedStockGroups.length;
        },

        handleArrowDown() {
            this.StockGroupIndex = (this.StockGroupIndex + 1) % this.displayedStockGroups.length;
        },

        handleEscapeKey() {
            if (this.StockGroupInput) {
                this.StockGroupInput = "";
                this.fetchStockGroupByText("");
            } else {
                this.$emit("closeStockGroupModal");
            }
        },
        

        handleInput(event) {
            this.fetchStockGroupByText(this.StockGroupInput);
        },

        fetchStockGroupByText(text) {
            if (text.trim() === "") {
                this.displayedStockGroups = this.StockGroups;
            } else {
                this.displayedStockGroups = this.StockGroups.filter((stockgroup) => {
                return stockgroup.stockGroupName.toLowerCase().includes(text.toLowerCase());
                });
            }
                console.log(filteredStockGroups);
                this.displayedStockGroups = filteredStockGroups;
                this.StockGroupIndex = 0;
        },
        focusStockGroupModal() {
    this.showStockGroupPopup = true;
    this.$nextTick(() => {
        var inputElement = this.$refs.InputStockGroup;
        inputElement.focus();
        inputElement.setSelectionRange(0, 0);
    });
},

        closeStockGroupModalIcon(){
            this.$emit("closeStockGroupModal");
        },
        groupSummary(){
			this.StockGroups = [];
			this.debitTotal = 0;
			this.creditTotal = 0;
			const data = {
				_userId: localStorage.getItem("customerId"),
				company_id: this.$store.state.tallyStore.companyId,
				// company_id: "65aa1a7aea3a50506e0f1f2d",
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

			Api.getStockGroups	(data, headers)
				.then((response) => {
					 try {
                        console.log(response.data.data.list);
            this.StockGroups = response.data.data.list.map(stockgroup => ({
              ...stockgroup,
              stockGroupName: stockgroup.stockGroupName.replace("#4;", "")
            }));
            this.displayedStockGroups = this.StockGroups;
          } catch (error) {
            console.log(error);
          }
				})

		}
    },

    mounted() {
        // this.currentCompanyName = localStorage.getItem("currentCompanyName");
        this.focusStockGroupModal();
        this.groupSummary();
        if (this.displayedStockGroups.length > 0) {
                this.StockGroupInput = this.displayedStockGroups[0].name;
            }
            else{

            }
    }
}
</script>