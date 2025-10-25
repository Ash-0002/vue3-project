<template>
    <div class="popup-overlay" @mouseover="handleGlobalClick">
        <div class="popup-container">
            <table class="eway-table">
                <tr>
                    <td colspan="4" class="section-header">e-Invoice Details</td>
                </tr>
                <!-- <tr>
                    <td><label>Ack No.<span class="required">*</span></label></td>
                    <td> :<input readonly style="pointer-events: none;"  v-model="ackNo" maxlength="20" @focus="setFocusedInput('ackNo')"
                            :class="{ 'error-border': errors.ackNo }" @blur="validateField('ackNo')" ref="ackNo"
                            type="text" @keydown="handleKeyNavigation($event, 'ackNo')" /></td>
                    <td><label>Ack Date<span class="required">*</span></label></td>
                    <td> :<input readonly style="pointer-events: none;"  v-model="ackDate" maxlength="20" @focus="setFocusedInput('ackDate')"
                            :class="{ 'error-border': errors.ackDate }" @blur="validateField('ackDate')" ref="ackDate"
                            type="text" @keydown="handleKeyNavigation($event, 'ackDate')" /></td>
                </tr>
                <tr>
                    <td><label>IRN<span class="required">*</span></label></td>
                    <td style="position: relative;">
                        :<input readonly style="pointer-events: none;"  v-model="irn" maxlength="20" @focus="setFocusedInput('irn')"
                            :class="{ 'error-border': errors.irn }" @blur="validateField('irn')" ref="irn" type="text"
                             @keydown="handleKeyNavigation($event, 'irn')" />
                    </td>
                </tr> -->

                <tr>
                    <td colspan="4" class="section-header" style="text-align: left !important;">Place of Party</td>
                </tr>
                <tr>
                    <td><label>Bill to place</label></td>
                    <td style="position: relative;"> :<input readonly style="pointer-events: none;"  v-model="billToPlace" maxlength="20"
                            @focus="setFocusedInput('billToPlace')" :class="{ 'error-border': errors.billToPlace }"
                            @blur="validateField('billToPlace')" ref="billToPlace"  type="text"
                            @keydown="handleKeyNavigation($event, 'billToPlace')" />

                        <!-- <div v-if="showModeType" class="irnClass">
                            <mode-Type :documentTypes="name" :title="modeTypeTitle"
                                :defaultIndex="modeTypeIndex" @update:visible="showModeType = $event"
                                @select="selectModeType" />
                        </div> -->
                    </td>
                </tr>
                <tr>
                    <td><label>Ship to place</label></td>
                    <td> :<input readonly style="pointer-events: none;"  v-model="shipToPlace" maxlength="20" @focus="setFocusedInput('shipToPlace')"
                            ref="shipToPlace" type="text" @keydown="handleKeyNavigation($event, 'shipToPlace')" />
                    </td>
                </tr>

                <tr>
                    <td colspan="4" class="section-header" style="text-align: left !important;">Dispatch From Details
                    </td>
                </tr>
                <tr>
                    <td><label>Name</label></td>
                    <td style="position: relative;"> :<input readonly style="pointer-events: none;"  v-model="name" maxlength="20"
                            @focus="setFocusedInput('name')" :class="{ 'error-border': errors.name }"
                            @blur="validateField('name')" ref="name" type="text"
                            @keydown="handleKeyNavigation($event, 'name')" />
                    </td>
                </tr>
                <tr>
                    <td><label>Address</label></td>
                    <!-- :class="{ 'error-border': errors.address }" @blur="validateField('address')" -->
                    <td> :<input readonly style="pointer-events: none;"  v-model="address" maxlength="20" @focus="setFocusedInput('address')" ref="address"
                            type="text" @keydown="handleKeyNavigation($event, 'address')" />
                    </td>
                    <!-- <td><label>Date</label></td>
            <td> :<input readonly style="pointer-events: none;"  v-model="partBDate"  maxlength="20" @focus="setFocusedInput('partBDate')"
                :class="{ 'error-border': errors.partBDate }" @blur="validateField('partBDate')" ref="partBDate"
                type="text" @keydown="handleKeyNavigation($event, 'partBDate')" /></td> -->
                </tr>
                <tr>
                    <td><label>State</label></td>
                    <td> :<input readonly style="pointer-events: none;"  v-model="state" maxlength="20" @focus="setFocusedInput('state')" ref="state"
                            type="text" :class="{ 'error-border': errors.state }" @input="searchState" class="upperCase"
                            @blur="validateField('state')" @keydown="handleKeyNavigation($event, 'state')" /></td>
                </tr>
                <tr>
                    <td><label>Pincode</label></td>
                    <td> :<input readonly style="pointer-events: none;"  v-model="pincode" v-numeric-maxlength="6" @focus="setFocusedInput('pincode')"
                            ref="pincode" type="text" :class="{ 'error-border': errors.pincode }" class="upperCase"
                            @blur="validateField('pincode')" @keydown="handleKeyNavigation($event, 'pincode')" /></td>
                </tr>
                <tr>
                    <td><label>Place</label></td>
                    <td> :<input readonly style="pointer-events: none;"  v-model="place" maxlength="20" @focus="setFocusedInput('place')" ref="place"
                            type="text" :class="{ 'error-border': errors.place }" class="upperCase"
                            @blur="validateField('place')" @keydown="handleKeyNavigation($event, 'place')" /></td>
                </tr>
            </table>


        </div>
        <!-- <div v-if="showStatePopup" class="stateContainer">
            <State-List :defaultIndex="defaultIndex" :listData="stateData" @update:visible="showState = $event"
                @ledger-selected="handleLedgerSelection" />
        </div> -->

        <div v-if="errorPopup" class="alertPop">
            <p><em>Filled required to create eInvoice!</em></p>
        </div>
    </div>
</template>


<script>
import Api from "@/Api";
import Common from "@/Common";
import moment from "moment";
import { validateAndConvertDateFormat } from "../../../utils/dateUtils";

import irn from "./CustomePopup.vue";
import StateList from "../LedgerList.vue";
// import transporterNamelist from "../LedgerList.vue";
// import modeType from "./CustomePopup.vue";
// import vehicleType from "./CustomePopup.vue";

export default {
    components: {
        StateList,
    },

    props: {
        consignorDetails: {
            type: Object,
            Required: true
        },

        consigneeDetails: {
            type: Object,
            Required: true
        },

    //     ewayBillData: {
    //         type: Object,
    //         Required: true
    //     },

    //     voucherNumber: {
    //         type: String,
    //         Required: true
    //     }
    },

    data() {
        return {


            // ackNo: '',
            // ackDate: '',
            // irn: '',
            billToPlace: this.consignorDetails.DispatchStateName,
            shipToPlace: this.consigneeDetails.stateName,
            focusedInput: '',  


            // Fields for Place of Party
            name: this.consignorDetails.DispatchName,
            address: this.consignorDetails.DispatchAddress,

            // Fields for Dispatch From Details,
            state: this.consignorDetails.DispatchStateName,
            pincode: this.consignorDetails.DispatchPincode,
            place: this.consignorDetails.DispatchPlace,

            // Error tracking object
            errors: {
                // ackNo: false,
                // ackDate: false,
                // irn: false,
                // name: false,
                // address: false,
                // billToPlace: false,
                // shipToPlace: false,
                // state: false,
                // pincode: false,
                // place: false,
            },

            // Show State List (for Consignor)
            showStatePopup: false,
            stateData: [],
            defaultIndex: 0,
            showModeType: false,

            // Error popup flag
            errorPopup: false,


        };
    },

    created() {
        document.addEventListener('keydown', this.handleGlobalKeyDown);
    },

    beforeDestroy() {
        document.removeEventListener('keydown', this.handleGlobalKeyDown);
    },


    watch: {
        // consignorAddress1(newVal) {
        //     this.updateConsignorDetails("DispatchAddress", newVal);
        // },
        // consignorPincode(newVal) {
        //     this.updateConsignorDetails("DispatchPincode", newVal);
        // },
        // consignorPlace(newVal) {
        //     this.updateConsignorDetails("DispatchPlace", newVal);
        // },
        // consignorActualState(newVal) {
        //     this.updateConsignorDetails("DispatchStateName", newVal);
        // },
        // consigneeGstin(newVal) {
        //     this.updateConsigneeDetails("partyGSTIn", newVal);
        // },
        // consigneeAddress1(newVal) {
        //     this.updateConsigneeDetails("address", newVal);
        // },
        // consigneeState(newVal) {
        //     this.updateConsigneeDetails("stateName", newVal);
        // },
        // consigneePincode(newVal) {
        //     this.updateConsigneeDetails("pincode", newVal);
        // },
        // consigneePlace(newVal) {
        //     this.updateConsigneeDetails("stateName", newVal);
        // },
        // consigneeActualState(newVal) {
        //     this.updateConsigneeDetails("stateName", newVal);
        // },
    },


    methods: {
        handleGlobalKeyDown(event) {
            if (event.ctrlKey && event.key === 'a') {
                event.preventDefault();
                // this.checkValidation();
            } else if(event.key === "Enter") {
                this.closePopup();
            } else if(event.key === "Escape") {
                this.closePopup();
            }
        },

        handleDateInputValidation() {
            const inputDate = this.ackDate;
            const validatedDate = validateAndConvertDateFormat(inputDate);

            // If `validatedDate` is invalid, return false immediately
            if (!validatedDate) {
                console.log("Invalid date.");
                return false;
            }

            // Convert `validatedDate` into a moment object to validate the format
            const validatedMoment = moment(validatedDate, "DD-MM-YYYY", true);

            if (validatedMoment.isValid()) {
                // Format the moment object to "D-MMM-YY" (6-Dec-24)
                this.ackDate = validatedMoment.format("D-MMM-YY");
                return true;
            } else {
                console.log("Invalid date.");
                return false;
            }
        },



        validateField(field) {
            // Handle specific cases for dropdowns or dynamic fields
             if (field === "state") {
                this.showStatePopup = false;
            }
            // General validation for empty fields
            this.errors[field] = !this[field];
        },

        validateAllFields() {
            Object.keys(this.errors).forEach((field) => {
                this.validateField(field);
            });
        },

        searchState(state = "") {
            this.defaultIndex = 0;
            let searchTerm = state;

            if (this.showStatePopup) {
                searchTerm = this.state.toLowerCase();
            }
            let index = 0;


            index = this.stateData.findIndex(state =>
                state.name.toLowerCase().includes(searchTerm)
            )

            if (index !== -1) {
                this.defaultIndex = index;
            } else {
                console.warn("State not found");
            }
        },

        handleLedgerSelection(selectedState) {
            console.log(selectedState);
            if (this.showStatePopup) {
                this.state = selectedState.name;
                this.$refs.pincode.focus();
                // this.showStatePopup = false;
            } 
        },

        updateConsignorDetails(key, value) {
            this.$emit("update-consignor", { key, value });
        },

        updateConsigneeDetails(key, value) {
            this.$emit("update-consignee", { key, value });
        },

        setFocusedInput(refName) {
            if (refName == "state") {
                setTimeout(() => {
                    this.showStatePopup = true;
                    this.searchState(this.state);
                }, 100);
            }
            this.focusedInput = refName;
        },

        handleGlobalClick(event) {
            if (
                this.focusedInput &&
                !this.$refs[this.focusedInput].contains(event.target)
            ) {
                // Refocus the previously active input
                this.$refs[this.focusedInput].focus();
            }
        },

        checkValidation() {
            const hasErrors = Object.values(this.errors).some((error) => error);
            if (hasErrors) {
                this.errorPopup = true;
            } else {
                this.isEwayDetailsFilled = true;
                const formData = {
                    ackNo: this.ackNo,
                    ackDate: this.ackDate,
                    irn: this.irn,
                    name: this.name,
                    address: this.address,
                    state: this.state,

                };

                this.$emit("ewayDetailsData", formData, this.isEwayDetailsFilled);
            }
        },


        handleKeyNavigation(event, refName) {
            const allRefs = [
                "ackNo",
                "ackDate",
                "irn",
                "billToPlace",
                "shipToPlace",
                "name",
                "address",
                "state",
                "pincode",
                "place",
            ];

            const refToModelMapping = {
                ackNo: "ackNo",
                ackDate: "ackDate",
                irn: "irn",
                billToPlace: "billToPlace",
                shipToPlace: "shipToPlace",
                name: "name",
                address: "address",
                state: "state",
                pincode: "pincode",
                place: "place",
            };

            const readOnlyRefs = []; // No read-only fields for now, can add if needed

            const currentIndex = allRefs.indexOf(refName);

            // Navigate to the next input field
            if (event.key === "Enter") {
                if (this.errorPopup) {
                    this.errorPopup = false;
                    this.$refs.ackNo.focus();
                    return;
                }

                if (refName == "ackDate") {
                    let validDate = this.handleDateInputValidation()
                    if (!validDate) return;
                }

                // Skip fields that have popups or special conditions
                // if (this.showTransporterNamelist || this.showStateListForConsigneeState || this.showirn || this.showDocumentType || this.showStateListForConsignee || this.showState || this.showModeType || this.showVehicleType) return;
                if(this.showStatePopup) return;

                let nextIndex = currentIndex + 1;
                while (nextIndex < allRefs.length && readOnlyRefs.includes(allRefs[nextIndex])) {
                    nextIndex++; // Skip over read-only fields
                }
                const nextRef = allRefs[nextIndex];
                if (nextRef && this.$refs[nextRef]) {
                    this.$refs[nextRef].focus();
                    this.$refs[nextRef].setSelectionRange(0, this.$refs[nextRef].value.length);
                }
            }
            // Navigate to the previous input field (Backspace)
            else if (event.key === "Backspace") {
                if (this.errorPopup) {
                    this.errorPopup = false;
                }
                const currentRef = this.$refs[refName];
                if (currentRef && currentRef.value === "") {
                    let prevIndex = currentIndex - 1;
                    while (prevIndex >= 0 && readOnlyRefs.includes(allRefs[prevIndex])) {
                        prevIndex--; // Skip over read-only fields
                    }
                    const prevRef = allRefs[prevIndex];
                    if (prevRef && this.$refs[prevRef]) {
                        event.preventDefault();
                        this.$refs[prevRef].focus();
                        this.$refs[prevRef].setSelectionRange(0, this.$refs[prevRef].value.length);
                    }
                }
            } else if (event.key === "Escape") {
                if (this.errorPopup) {
                    this.errorPopup = false;
                }
                this.isEwayDetailsFilled = false;
                const modelKey = refToModelMapping[refName];
                if (modelKey && this[modelKey] !== "") {
                    // Blank the v-model value
                    this[modelKey] = "";
                } else {
                    console.log(modelKey);
                    this.closePopup();
                }
            }
        },


        async getlocationlist() {
            try {
                this.loading = true;
                this.new_loading = true;

                const data = {
                    _userId: localStorage.getItem("customerId"),
                    requestFrom: "WEB",
                    countryName: "India",
                };

                const headers = {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    token: localStorage.getItem("webAuthToken"),
                };

                const response = await Api.getCountryGo(data, headers);

                this.stateData = [];
                for (let [key, value] of Object.entries(response.data.data)) {
                    if (value.countryName !== undefined && value.countryName !== "") {
                        this.stateData.push({
                            name: value.stateName,
                            id: value.countryName,
                        });
                    }
                }
            } catch (err) {
                Common.getStatusForActionFailed(err.response.status);
            }
        },

        closePopup() {
            this.$emit("closeEInvoice"); // Emit the event to close the popup
            // this.$emit('update:visible', false); // Emit the event to close the popup
        },

    },

    mounted() {
        this.$refs.name.focus();
        // this.getlocationlist();

        // this.validateAllFields();
    }
};

</script>


<style scoped>
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-container[data-v-593de55a] {
    background: #fff;
    width: 52rem;
    /* height: 35rem; */
    padding: 0 20px;
    /* border-radius: 10px; */
    /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); */
    overflow-y: auto;
    line-height: 1.3;
}

.eway-table {
    width: 100%;
    height: 27rem;
    border-collapse: collapse;
    /* font-size: 0.9rem; */
}

/* .eway-table td { */
/* padding: 8px 10px;
  vertical-align: top; */
/* } */

.eway-table label {
    /* font-weight: bold; */
    display: inline-block;
    margin-bottom: 5px;
}

.eway-table input {
    width: 90%;
    /* padding: 5px; */
    /* border: 1px solid #ccc; */
    box-sizing: border-box;
}

.section-header {
    text-align: left;
    font-size: 1rem;
    font-weight: bold;
    /* padding: 10px 0; */
    border-top: 1px solid #ccc;
    text-decoration: underline;
    margin-top: 10px;
    text-align: center;
}

input {
    border: none;
    outline: none;

    font-weight: bold;
    padding: 1px 3px;
}

input select:focus {
    outline: none;
    border-color: darkblue;
}

input:focus {
    background-color: rgb(252, 236, 172);
    border: 1px solid steelblue !important;
}

tr {
    border-bottom: none !important;
}

.documentType[data-v-fecfdf06] {
    /* border: 1px solid red; */
    position: absolute;
    top: -2rem;
    right: 12rem;
}

.irnClass[data-v-fecfdf06] {
    position: absolute;
    top: -3rem;
    right: 12rem;
}

.modetype[data-v-fecfdf06] {
    position: absolute;
    top: -3rem;
    right: 1rem;
}

.stateContainer {
    position: absolute;
    top: 3.3rem;
    right: 0rem;
    /* height: 0rem; */
}

.error-border {
    border: 1px solid #ce1313;
}

.error-message {
    color: red;
    font-size: 12px;
    margin-left: 5px;
}

.required {
    color: #ce1313;
}

.spanFontWeight {
    font-weight: 600;
}

.alertPop {
    position: fixed;
    background: white;
    padding: 3rem;
    bottom: 0;
    right: 0;
}

.upperCase {
    text-transform: capitalize;
    ;
}
</style>