<template>
  <div class="popup-overlay" @mouseover="handleGlobalClick">
    <div class="popup-container">
      <table class="eway-table">
        <tr>
          <td colspan="4" class="section-header">Additional Details :Local Sales - Taxable</td>
        </tr>
        <tr>
          <td colspan="4" class="section-header">e-Way Bill Details</td>
        </tr>
        <!-- e-Way Bill Details -->
        <!-- <tr>
          <td><label>e-Way Bill No.</label></td>
          <td>
            :<input v-model="ewayBillNo" @focus="setFocusedInput('ewayBillNo')" ref="ewayBillNo" type="text"
              @blur="validateField('ewayBillNo')" :class="{ 'error-border': errors.ewayBillNo }"
              @keydown="handleKeyNavigation($event, 'ewayBillNo')" />

          </td>
          <td><label>Date</label></td>
          <td> :<input v-model="ewayBillDate" @focus="setFocusedInput('ewayBillDate')"
              :class="{ 'error-border': errors.ewayBillDate }" @blur="validateField('ewayBillDate')" ref="ewayBillDate"
              type="text" @keydown="handleKeyNavigation($event, 'ewayBillDate')" /></td>
        </tr> -->
        <tr>
          <td><label>Doc No.</label></td>
          <td> :<input v-model="consolidatedEwayBillNo" maxlength="20"
              @focus="setFocusedInput('consolidatedEwayBillNo')"
              :class="{ 'error-border': errors.consolidatedEwayBillNo }" @blur="validateField('consolidatedEwayBillNo')"
              ref="consolidatedEwayBillNo" type="text"
              @keydown="handleKeyNavigation($event, 'consolidatedEwayBillNo')" /></td>
          <td><label>Doc Date</label></td>
          <td> :<input v-model="consolidatedEwayBillDate" maxlength="20"
              @focus="setFocusedInput('consolidatedEwayBillDate')"
              :class="{ 'error-border': errors.consolidatedEwayBillDate }"
              @blur="validateField('consolidatedEwayBillDate')" ref="consolidatedEwayBillDate" type="text"
              @keydown="handleKeyNavigation($event, 'consolidatedEwayBillDate')" /></td>
        </tr>
        <tr>
          <td><label>Sub Type</label></td>
          <td style="position: relative;">
            :<input v-model="subType" maxlength="20" @focus="setFocusedInput('subType')"
              :class="{ 'error-border': errors.subType }" @blur="validateField('subType')" ref="subType" type="text"
              @input="searchType" @keydown="handleKeyNavigation($event, 'subType')" />

            <div v-if="showSubType" class="subTypeClass">
              <sub-Type :defaultIndex="subTypeIndex" :documentTypes="subSupplyTypeData" :title="subTypeTitle"
                @update:visible="showSubType = $event" @select="selectSubType" />
            </div>
          </td>

          <td><label>Document Type</label></td>
          <td style="position: relative;">
            :<input v-model="documentType" maxlength="20" @focus="setFocusedInput('documentType')"
              :class="{ 'error-border': errors.documentType }" @blur="validateField('documentType')" ref="documentType"
              @input="searchType" type="text" @keydown="handleKeyNavigation($event, 'documentType')" />
            <div v-if="showDocumentType" class="documentType">
              <Document-Type :defaultIndex="documentTypeIndex" :documentTypes="documentTypeData"
                :title="documentTypeTitle" @update:visible="showDocumentType = $event" @select="selectDocumentType" />
            </div>
          </td>



        </tr>

        <!-- Consignor Details (From) -->
        <tr>
          <td colspan="4" class="section-header">Consignor Details (From)</td>
        </tr>
        <tr>
          <td><label>Mailing Name</label></td>
          <td>
            : <span class="spanFontWeight">{{ consignorDetails.DispatchName }}</span>
            <!-- :<input v-model="ewayBillNo"  maxlength="20" @focus="setFocusedInput('ewayBillNo')" :class="{ 'error-border': errors.consignorMailingName }"  @blur="validateField('consignorMailingName')" ref="consignorMailingName" type="text" readonly /> -->
          </td>
          <td><label>Address1</label></td>
          <td>

            :<input v-model="consignorAddress1" @focus="setFocusedInput('consignorAddress1')"
              :class="{ 'error-border': errors.consignorAddress1 }" @blur="validateField('consignorAddress1')"
              ref="consignorAddress1" type="text" @keydown="handleKeyNavigation($event, 'consignorAddress1')" />
          </td>
        </tr>

        <tr>
          <td><label>GSTIN/UIN</label></td>
          <td>
            : <span class="spanFontWeight">{{ companyGstNumber }}</span>
            <!-- :<input v-model="ewayBillNo"  maxlength="20" @focus="setFocusedInput('ewayBillNo')" :class="{ 'error-border': errors.consignorGstin }"  @blur="validateField('consignorGstin')" ref="consignorGstin" type="text" readonly /> -->
          </td>
          <td><label></label></td>
          <td>
            <!-- :<input v-model="consignorAddress2"  maxlength="20" @focus="setFocusedInput('consignorAddress2')" :class="{ 'error-border': errors.consignorAddress2 }"  @blur="validateField('consignorAddress2')" ref="consignorAddress2"
              type="text" @keydown="handleKeyNavigation($event, 'consignorAddress2')" /> -->
            <span></span>
          </td>
          <!-- <td><label>Address2</label></td>
          <td>
            :<input v-model="consignorAddress2"  maxlength="20" @focus="setFocusedInput('consignorAddress2')" :class="{ 'error-border': errors.consignorAddress2 }"  @blur="validateField('consignorAddress2')" ref="consignorAddress2"
              type="text" @keydown="handleKeyNavigation($event, 'consignorAddress2')" />
          </td> -->
        </tr>

        <tr>
          <td><label>State</label></td>
          <td>
            : <span class="spanFontWeight">{{ consignorDetails.DispatchStateName }}</span>
            <!-- :<input v-model="ewayBillNo"  maxlength="20" @focus="setFocusedInput('ewayBillNo')" :class="{ 'error-border': errors.consignorState }"  @blur="validateField('consignorState')" ref="consignorState" type="text" readonly /> -->
          </td>
          <td><label>Pincode</label></td>
          <td> :<input v-model="consignorPincode" maxlength="6" @focus="setFocusedInput('consignorPincode')"
              :class="{ 'error-border': errors.consignorPincode }" @blur="validateField('consignorPincode')"
              ref="consignorPincode" v-numeric-maxlength="6" type="text"
              @keydown="handleKeyNavigation($event, 'consignorPincode')" />
          </td>
        </tr>
        <tr>
          <td><label></label></td>
          <td>
            <span></span>
          </td>
          <td><label>Place</label></td>
          <td> :<input v-model="consignorPlace" maxlength="20" @focus="setFocusedInput('consignorPlace')"
              :class="{ 'error-border': errors.consignorPlace }" @blur="validateField('consignorPlace')"
              ref="consignorPlace" type="text" @keydown="handleKeyNavigation($event, 'consignorPlace')" />
          </td>
        </tr>
        <tr>
          <td><label></label></td>
          <td>
            <span></span>
          </td>
          <td><label>Actual State</label></td>
          <td> :<input v-model="consignorActualState" maxlength="20" @focus="setFocusedInput('consignorActualState')"
              :class="{ 'error-border': errors.consignorActualState }" @blur="validateField('consignorActualState')"
              ref="consignorActualState" type="text" @input="searchState"
              @keydown="handleKeyNavigation($event, 'consignorActualState')" />
          </td>
        </tr>

        <!-- Consignee Details (To) -->
        <tr>
          <td colspan="4" class="section-header">Consignee Details (To)</td>
        </tr>
        <tr>
          <td><label>Mailing Name</label></td>
          <td>
            : <span class="spanFontWeight">{{ consigneeDetails.ledgerName }}</span>
            <!-- :<input v-model="ewayBillNo"  maxlength="20" @focus="setFocusedInput('ewayBillNo')" :class="{ 'error-border': errors.consigneeMailingName }"  @blur="validateField('consigneeMailingName')" ref="consigneeMailingName" type="text" readonly /> -->
          </td>
          <td><label>Address1</label></td>
          <td>
            :<input v-model="consigneeAddress1" @focus="setFocusedInput('consigneeAddress1')"
              :class="{ 'error-border': errors.consigneeAddress1 }" @blur="validateField('consigneeAddress1')"
              ref="consigneeAddress1" type="text" @keydown="handleKeyNavigation($event, 'consigneeAddress1')" />
          </td>
        </tr>
        <tr>
          <td><label>GSTIN/UIN</label></td>
          <!-- <td> -->
          <!-- : <span>{{ consigneeDetails.partyGSTIn }}</span> -->
          <!-- :<input v-model="consigneeDetails.partyGSTIn"  class='error-border' tabindex="-1" style="pointer-events: none;"  type="text" readonly /> -->
          <!-- </td> -->
          <td>
            :<input v-model="consigneeGstin" maxlength="15" @focus="setFocusedInput('consigneeGstin')"
              :class="{ 'error-border': errors.consigneeGstin }" @blur="validateField('consigneeGstin')"
              ref="consigneeGstin" type="text" @keydown="handleKeyNavigation($event, 'consigneeGstin')" />
          </td>
          <td><label></label></td>
          <td>
            <!-- :<input v-model="consigneeAddress2"  maxlength="20" @focus="setFocusedInput('consigneeAddress2')" :class="{ 'error-border': errors.consigneeAddress2 }"  @blur="validateField('consigneeAddress2')" ref="consigneeAddress2"
              type="text" @keydown="handleKeyNavigation($event, 'consigneeAddress2')" /> -->
            <span></span>
          </td>
          <!-- <td><label>Address2</label></td>
          <td>
            :<input v-model="consigneeAddress2"  maxlength="20" @focus="setFocusedInput('consigneeAddress2')" :class="{ 'error-border': errors.consigneeAddress2 }"  @blur="validateField('consigneeAddress2')" ref="consigneeAddress2"
              type="text" @keydown="handleKeyNavigation($event, 'consigneeAddress2')" />
          </td> -->
        </tr>
        <tr>
          <td><label>State</label></td>
          <td>
            :<input v-model="consigneeState" maxlength="20" @focus="setFocusedInput('consigneeState')"
              :class="{ 'error-border': errors.consigneeState }" @input="searchState"
              @blur="validateField('consigneeState')" ref="consigneeState" type="text"
              @keydown="handleKeyNavigation($event, 'consigneeState')" />
          </td>
          <td><label>Pincode</label></td>
          <td> :<input v-model="consigneePincode" @focus="setFocusedInput('consigneePincode')"
              :class="{ 'error-border': errors.consigneePincode }" @blur="validateField('consigneePincode')"
              ref="consigneePincode" v-numeric-maxlength="6" type="text"
              @keydown="handleKeyNavigation($event, 'consigneePincode')" />
          </td>
        </tr>

        <tr>
          <td><label></label></td>
          <td>
            <span></span>
          </td>
          <td><label>Place</label></td>
          <td> :<input v-model="consigneeActualState" maxlength="20" @focus="setFocusedInput('consigneePlace')"
              :class="{ 'error-border': errors.consigneePlace }" @blur="validateField('consigneePlace')"
              ref="consigneePlace" type="text" @keydown="handleKeyNavigation($event, 'consigneePlace')" />
          </td>
        </tr>
        <tr>
          <td><label></label></td>
          <td>
            <span></span>
          </td>
          <td><label>Actual State</label></td>
          <td> :<input v-model="consigneeActualState" maxlength="20" @focus="setFocusedInput('consigneeActualState')"
              :class="{ 'error-border': errors.consigneeActualState }" @blur="validateField('consigneeActualState')"
              ref="consigneeActualState" type="text" @input="searchState"
              @keydown="handleKeyNavigation($event, 'consigneeActualState')" />
          </td>
        </tr>

        <!-- <tr>
          <td><label>Place</label></td>
          <td>
            : <span></span>
            :<input v-model="ewayBillNo"  maxlength="20" @focus="setFocusedInput('ewayBillNo')" :class="{ 'error-border': errors.consigneePlace }"  @blur="validateField('consigneePlace')" ref="consigneePlace" type="text" readonly />
          </td>
          <td><label>Actual State</label></td>
          <td> :<input v-model="consigneeActualState"  maxlength="20" @focus="setFocusedInput('consigneeActualState')"
              :class="{ 'error-border': errors.consigneeActualState }"  @blur="validateField('consigneeActualState')" ref="consigneeActualState" type="text" @keydown="handleKeyNavigation($event, 'consigneeActualState')" />
          </td>
        </tr> -->

        <!-- Transport Details -->
        <tr>
          <td colspan="4" class="section-header">Transport Details</td>
        </tr>
        <tr>
          <td><label>Pin to Pin Distance(In KMs)</label></td>
          <!-- :class="{ 'error-border': errors.pinToPinDistance }" @blur="validateField('pinToPinDistance')" -->
          <td> :<input v-model="pinToPinDistance" maxlength="20" @focus="setFocusedInput('pinToPinDistance')"
              ref="pinToPinDistance" type="text" @keydown="handleKeyNavigation($event, 'pinToPinDistance')" />
          </td>
          <!-- <td><label>Transporter ID</label></td>
          <td> :<input v-model="transporterId"  maxlength="20" @focus="setFocusedInput('transporterId')"
              :class="{ 'error-border': errors.transporterId }" @blur="validateField('transporterId')"
              ref="transporterId" type="text" @keydown="handleKeyNavigation($event, 'transporterId')" /></td> -->
        </tr>
        <tr>
          <td><label>Transporter Name</label></td>
          <td> :<input v-model="transporterName" maxlength="20" @focus="setFocusedInput('transporterName')"
              :class="{ 'error-border': errors.transporterName }" @input="searchType"
              @blur="validateField('transporterName')" ref="transporterName" type="text"
              @keydown="handleKeyNavigation($event, 'transporterName')" />
          </td>
          <td><label>Transporter ID</label></td>
          <td> :<input v-model="transporterId" maxlength="20" @focus="setFocusedInput('transporterId')"
              :class="{ 'error-border': errors.transporterId }" @blur="validateField('transporterId')"
              ref="transporterId" type="text" @keydown="handleKeyNavigation($event, 'transporterId')" /></td>
          <!-- <td><label>Date</label></td>
          <td> :<input v-model="ewayBillNo"  maxlength="20" @focus="setFocusedInput('ewayBillNo')" :class="{ 'error-border': errors.transDocNo }"  @blur="validateField('transDocNo')" ref="transDocNo" type="text" @keydown="handleKeyNavigation($event, 'transDocNo')" /></td> -->
        </tr>
        <!-- <tr>
          <td><label>Vehicle Type</label></td>
          <td> :<input v-model="ewayBillNo"  maxlength="20" @focus="setFocusedInput('ewayBillNo')" :class="{ 'error-border': errors.vehicleType }"  @blur="validateField('vehicleType')" ref="vehicleType" type="text" @keydown="handleKeyNavigation($event, 'vehicleType')" /></td>
          <td><label>Vehicle Number</label></td>
          <td> :<input v-model="ewayBillNo"  maxlength="20" @focus="setFocusedInput('ewayBillNo')" :class="{ 'error-border': errors.vehicleNumber }"  @blur="validateField('vehicleNumber')" ref="vehicleNumber" type="text" @keydown="handleKeyNavigation($event, 'vehicleNumber')" /></td>
        </tr> -->

        <tr>
          <td colspan="4" class="section-header" style="text-align: left !important;">Part B Details</td>
        </tr>
        <tr>
          <td><label>Mode</label></td>
          <td style="position: relative;"> :<input v-model="transportMode" maxlength="20"
              @focus="setFocusedInput('transportMode')" :class="{ 'error-border': errors.transportMode }"
              @blur="validateField('transportMode')" ref="transportMode" @input="searchType" type="text"
              @keydown="handleKeyNavigation($event, 'transportMode')" />

            <div v-if="showModeType" class="subTypeClass">
              <mode-Type :documentTypes="TransportMode" :title="modeTypeTitle" :defaultIndex="modeTypeIndex"
                @update:visible="showModeType = $event" @select="selectModeType" />
            </div>
          </td>
          <!-- <td><label>Transporter ID</label></td>
          <td> :<input v-model="ewayBillNo"  maxlength="20" @focus="setFocusedInput('ewayBillNo')" :class="{ 'error-border': errors.transporterId }"  @blur="validateField('transporterId')" ref="transporterId" type="text" @keydown="handleKeyNavigation($event, 'transporterId')" /></td> -->
        </tr>
        <tr>
          <td><label>Doc/Lading/RR/Airway No.</label></td>
          <!-- :class="{ 'error-border': errors.transDocNo }" @blur="validateField('transDocNo')" -->
          <td> :<input v-model="transDocNo" maxlength="20" @focus="setFocusedInput('transDocNo')"
              ref="transDocNo" type="text" @keydown="handleKeyNavigation($event, 'transDocNo')" />
          </td>
          <!-- <td><label>Date</label></td>
          <td> :<input v-model="partBDate"  maxlength="20" @focus="setFocusedInput('partBDate')"
              :class="{ 'error-border': errors.partBDate }" @blur="validateField('partBDate')" ref="partBDate"
              type="text" @keydown="handleKeyNavigation($event, 'partBDate')" /></td> -->
        </tr>
        <tr>
          <td><label>Vehicle Number</label></td>
          <td> :<input v-model="vehicleNumber" maxlength="20" @focus="setFocusedInput('vehicleNumber')"
              ref="vehicleNumber" type="text" :class="{ 'error-border': errors.vehicleNumber }" class="upperCase"
              @blur="validateField('vehicleNumber')" @keydown="handleKeyNavigation($event, 'vehicleNumber')" /></td>
          <td><label>Vehicle Type</label></td>
          <!-- :class="{ 'error-border': errors.vehicleType }"   -->
          <td style="position: relative;"> :<input v-model="vehicleType" @input="searchType"
              @blur="validateField('vehicleType')" maxlength="20" @focus="setFocusedInput('vehicleType')"
              ref="vehicleType" type="text" @keydown="handleKeyNavigation($event, 'vehicleType')" />
            <div v-if="showVehicleType" class="subTypeClass">
              <vehicle-Type :documentTypes="vehicleTypeData" :defaultIndex="vehicleTypeIndex" :title="vehicleTypeTitle"
                @update:visible="showVehicleType = $event" @select="selectVehicleType" />
            </div>
          </td>
        </tr>
      </table>


    </div>
    <div v-if="showStateListForConsignor" class="stateContainer">
      <State-List :defaultIndex="defaultIndex" :listData="stateData"
        @update:visible="showStateListForConsignor = $event" @ledger-selected="handleLedgerSelection" />
    </div>

    <div v-if="showStateListForConsignee" class="stateContainer">
      <State-List :defaultIndex="defaultIndex" :listData="stateData"
        @update:visible="showStateListForConsignee = $event" @ledger-selected="handleLedgerSelection" />
    </div>

    <div v-if="showStateListForConsigneeState" class="stateContainer">
      <State-List :defaultIndex="defaultIndex" :listData="stateData"
        @update:visible="showStateListForConsigneeState = $event" @ledger-selected="handleLedgerSelection" />
    </div>

    <div v-if="showTransporterNamelist" class="stateContainer">
      <transporter-Namelist :defaultIndex="transporterNameIndex" :listData="TransporterName"
        @update:visible="showStateListForConsigneeState = $event" @ledger-selected="handleLedgerSelection" />
    </div>

    <div class="popup-overlay" v-if="showNewTransporterNamePopup">
      <div class="transporterName">
        <label for="newTransporterName">Transporter for this shipment</label>
        <input autocomplete="off" type="text" v-model="transporterName" id="newTransporterName" ref="newTransporterName"
          @keydown.enter="handleTransporterNamePopup" @keydown.esc="showNewTransporterNamePopup = false">
      </div>
    </div>

    <div v-if="errorPopup" class="alertPop">
      <p><em>Filled required to create e-way bill!</em></p>
    </div>
  </div>
</template>




<script>
import Api from "@/Api";
import Common from "@/Common";
import moment from "moment";
import { validateAndConvertDateFormat } from "../../../utils/dateUtils";

import DocumentType from "./CustomePopup.vue";
import subType from "./CustomePopup.vue";
import StateList from "../LedgerList.vue";
import transporterNamelist from "../LedgerList.vue";
import modeType from "./CustomePopup.vue";
import vehicleType from "./CustomePopup.vue";

export default {
  components: {
    DocumentType,
    subType,
    modeType,
    StateList,
    vehicleType,
    transporterNamelist
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

    ewayBillData: {
      type: Object,
      Required: true
    },

    voucherNumber: {
      type: String,
      Required: true
    }
  },

  data() {
    return {
      showNewTransporterNamePopup: false,
      isEwayDetailsFilled: false,
      errorPopup: false,
      defaultIndex: 0,
      subTypeIndex: 0,
      documentTypeIndex: 0,
      modeTypeIndex: 0,
      vehicleTypeIndex: 0,
      transporterNameIndex: 0,
      companyGstNumber: localStorage.getItem("companyGstNumber"),

      documentTypeTitle: "Document Type",
      subTypeTitle: "Sub Type",
      modeTypeTitle: "List of Modes",
      vehicleTypeTitle: "Vehicle Type",

      showStateListForConsignor: false,
      showStateListForConsignee: false,
      showStateListForConsigneeState: false,
      showTransporterNamelist: false,

      showDocumentType: false,
      showSubType: false,
      showModeType: false,
      showVehicleType: false,

      // ewayBillNo: "",
      // ewayBillDate: "",
      consolidatedEwayBillNo: this.ewayBillData.consolidatedEwayBillNo ? this.ewayBillData.consolidatedEwayBillNo : this.voucherNumber,
      consolidatedEwayBillDate: this.ewayBillData.consolidatedEwayBillDate ? this.ewayBillData.consolidatedEwayBillDate : moment(
        this.$store.state.tallyStore.currentDate,
        "DD-MM-YYYY"
      ).format("D-MMM-YY"),
      subType: this.ewayBillData.subType,
      documentType: this.ewayBillData.documentType,

      consignorAddress1: this.consignorDetails.DispatchAddress,
      // consignorAddress2: "",
      consignorPincode: this.consignorDetails.DispatchPincode,
      consignorPlace: this.consignorDetails.DispatchPlace,
      consignorActualState: this.consignorDetails.DispatchStateName,

      consigneeAddress1: this.consigneeDetails.address,
      // consigneeAddress2: "",
      consigneeGstin: this.consigneeDetails.partyGSTIn,
      consigneeState: this.consigneeDetails.stateName,

      consigneePincode: this.consigneeDetails.pincode,
      consigneePlace: this.consigneeDetails.stateName,
      consigneeActualState: this.consigneeDetails.stateName,

      pinToPinDistance: this.ewayBillData.pinToPinDistance,
      transporterId: this.ewayBillData.transporterId,
      transporterName: this.ewayBillData.transporterName,
      transportMode: this.ewayBillData.transportMode,
      transDocNo: this.ewayBillData.transDocNo,
      // partBDate: this.ewayBillData.partBDate,
      vehicleNumber: this.ewayBillData.vehicleNumber,
      vehicleType: this.ewayBillData.vehicleType,
      subTypeCode: this.ewayBillData.subTypeCode,
      documentTypeCode: this.ewayBillData.documentTypeCode,
      transportModeCode: this.ewayBillData.transportModeCode,
      vehicleTypeCode: this.ewayBillData.vehicleTypeCode,

      allowed_descriptions: [
        "Supply",
        "Export",
        "SKD/CKD/Lots",
        "Job Work",
        "Recipient Not Known",
        "For Own Use",
        "Line Sales",
        "Exhibition or Fairs",
        "Others",
      ],


      // selectedDocumentType: '',
      documentTypeData: [
        // '- Not Applicable',
        // 'Bill of Entry',
        // 'Bill of Supply',
        // 'Delivery Challan',
        // 'Others',
        // 'Tax Invoice',
      ],

      subSupplyTypeData: [
        // '- Not Applicable',
        // 'Exhibition or Fairs',
        // 'Export',
        // 'For Own Use',
        // 'Job Work',
        // 'Lines Sales',
        // 'Others',
        // 'Recipient Not Known',
        // 'SKD/CKD/Lots',
        // 'Supply'
      ],

      TransportMode: [
        // '- Not Applicable',
        // '1 - Road',
        // '2 - Rail',
        // '3 - Air',
        // '4 - Ship'
      ],

      TransporterName: [],
      TransporterId: [],

      vehicleTypeData: [],

      focusedInput: "consolidatedEwayBillNo",

      errors: {
        // ewayBillNo: false,
        // ewayBillDate: false,
        consolidatedEwayBillNo: false,
        consolidatedEwayBillDate: false,
        subType: false,
        documentType: false,

        consignorAddress1: false,
        // consignorAddress2: false, // Uncomment if needed
        consignorPincode: false,
        consignorPlace: false,
        consignorActualState: false,

        consigneeAddress1: false,
        consigneeGstin: false,
        consigneeState: false,
        // consigneeAddress2: false, // Uncomment if needed
        consigneePincode: false,
        consigneePlace: false,
        consigneeActualState: false,

        // pinToPinDistance: false,
        transporterId: false,
        transporterName: false,
        // transportMode: false,
        // transDocNo: false,
        // partBDate: false,
        vehicleNumber: false,
        // vehicleType: false,
      }


    };
  },

  created() {
    document.addEventListener('keydown', this.handleGlobalKeyDown);
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.handleGlobalKeyDown);
  },


  watch: {
    consignorAddress1(newVal) {
      this.updateConsignorDetails("DispatchAddress", newVal);
    },
    consignorPincode(newVal) {
      this.updateConsignorDetails("DispatchPincode", newVal);
    },
    consignorPlace(newVal) {
      this.updateConsignorDetails("DispatchPlace", newVal);
    },
    consignorActualState(newVal) {
      this.updateConsignorDetails("DispatchStateName", newVal);
    },
    consigneeGstin(newVal) {
      this.updateConsigneeDetails("partyGSTIn", newVal);
    },
    consigneeAddress1(newVal) {
      this.updateConsigneeDetails("address", newVal);
    },
    consigneeState(newVal) {
      this.updateConsigneeDetails("stateName", newVal);
    },
    consigneePincode(newVal) {
      this.updateConsigneeDetails("pincode", newVal);
    },
    consigneePlace(newVal) {
      this.updateConsigneeDetails("stateName", newVal);
    },
    consigneeActualState(newVal) {
      this.updateConsigneeDetails("stateName", newVal);
    },
  },


  methods: {
    handleGlobalKeyDown(event) {
      if (event.ctrlKey && event.key === 'a') {
        event.preventDefault();
        this.checkValidation();
      }
    },

    handleDateInputValidation() {
      const inputDate = this.consolidatedEwayBillDate.trim();
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
        this.consolidatedEwayBillDate = validatedMoment.format("D-MMM-YY");
        return true;
      } else {
        console.log("Invalid date.");
        return false;
      }
    },



    validateField(field) {
      // Handle specific cases for dropdowns or dynamic fields
      if (field === "subType") {
        this.showSubType = false;
      } else if (field === "documentType") {
        this.showDocumentType = false;
      } else if (field === "consignorActualState") {
        this.showStateListForConsignor = false;
      } else if (field === "consigneeActualState") {
        this.showStateListForConsignee = false;
      } else if (field === "consigneeState") {
        this.showStateListForConsigneeState = false;
      } else if (field === "transporterName") {
        this.showTransporterNamelist = false;
      } else if (field === "transporterId") {
        if(this.transporterName == "None") {
          this.errors[field] = false;
          return;
        }
      } else if (field === "vehicleType") {
      } else if (field === "transportMode") {
        this.showModeType = false;
        this.validateField("vehicleNumber"); // Validate dependent field
      } else if (field === "vehicleType") {
        this.showVehicleType = false;
      } else if (field === "vehicleNumber") {
        if (this.transportMode === "Road") {
          const vehicleNumberPattern = /^[A-Z]{2}[0-9]{1,2}[A-Z]{0,3}[0-9]{4}$/;
          const vehicleNumberValue = this[field].toUpperCase();
          this.errors[field] = !vehicleNumberPattern.test(vehicleNumberValue);
          return; // Exit early for vehicleNumber
        } else {
          this.errors[field] = false; // No error for other transport modes
          return;
        }
      } else if (field === "consigneeGstin") {
        // GSTIN Validation
        const gstinPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}$/;
        this.errors[field] = !gstinPattern.test(this[field]); // Validate GSTIN format
        return;
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

      if (this.showStateListForConsignor) {
        searchTerm = this.consignorActualState.toLowerCase();
      } else if (this.showStateListForConsignee) {
        searchTerm = this.consigneeActualState.toLowerCase();
      } else if (this.showStateListForConsigneeState) {
        searchTerm = this.consigneeState.toLowerCase();
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

    searchType(sub_type = "") {
      this.subTypeIndex = 0;
      this.documentTypeIndex = 0;
      this.modeTypeIndex = 0;
      this.vehicleTypeIndex = 0;
      this.transporterNameIndex = 0;
      let index = 0;
      let searchTerm = sub_type;

      if (this.showSubType) {
        searchTerm = this.subType.toLowerCase();
        index = this.subSupplyTypeData.findIndex(type =>
          type.description.toLowerCase().includes(searchTerm)
        );
        if (index !== -1) {
          this.subTypeIndex = index;
          return;
        } else {
          console.warn("State not found");
        }
      } else if (this.showDocumentType) {
        searchTerm = this.documentType.toLowerCase();
        index = this.documentTypeData.findIndex(type =>
          type.description.toLowerCase().includes(searchTerm)
        );
        if (index !== -1) {
          this.documentTypeIndex = index;
          return;
        } else {
          console.warn("State not found");
        }
      } else if (this.showModeType) {
        searchTerm = this.transportMode.toLowerCase();
        index = this.TransportMode.findIndex(type =>
          type.description.toLowerCase().includes(searchTerm)
        );
        if (index !== -1) {
          this.modeTypeIndex = index;
          return;
        } else {
          console.warn("State not found");
        }
      } else if (this.showVehicleType) {
        searchTerm = this.vehicleType.toLowerCase();
        index = this.vehicleTypeData.findIndex(type =>
          type.description.toLowerCase().includes(searchTerm)
        );
        if (index !== -1) {
          this.vehicleTypeIndex = index;
          return;
        } else {
          console.warn("State not found");
        }
      } else if (this.showTransporterNamelist) {
        searchTerm = this.transporterName.toLowerCase();
        index = this.TransporterName.findIndex(type =>
          type.ledgerName.toLowerCase().includes(searchTerm)
        );
        if (index !== -1) {
          this.transporterNameIndex = index;
          return;
        } else {
          console.warn("State not found");
        }
      }
    },

    handleLedgerSelection(selectedState) {
      if (this.showStateListForConsignor) {
        this.consignorActualState = selectedState.name;
        this.$refs.consigneeAddress1.focus();
        this.showStateListForConsignor = false;
      } else if (this.showStateListForConsignee) {
        this.consigneeActualState = selectedState.name;
        this.$refs.pinToPinDistance.focus();
        this.showStateListForConsignee = false;
      } else if (this.showStateListForConsigneeState) {
        this.$refs.consigneePincode.focus();
        this.consigneeState = selectedState.name;
        this.showStateListForConsigneeState = false;
      } else if (this.showTransporterNamelist) {
        if (selectedState.ledgerName == "New") {
          this.transporterName = "";
          this.showNewTransporterNamePopup = true;
          setTimeout(() => {
            this.$refs.newTransporterName.focus();
          }, 50);
          // this.$nextTick(() => {
          //   this.$refs.newTransporterName.focus();
          // });
          return;
        }
        this.$refs.transporterId.focus();
        this.transporterName = selectedState.ledgerName;
        this.showTransporterNamelist = false;
        this.transporterNameselected();
        this.validateField("transporterName");
      }
    },

    handleTransporterNamePopup() {
      this.validateField("transporterName");
      this.showNewTransporterNamePopup = false;
      this.$refs.transporterId.focus();
    },

    updateConsignorDetails(key, value) {
      this.$emit("update-consignor", { key, value });
    },

    updateConsigneeDetails(key, value) {
      this.$emit("update-consignee", { key, value });
    },

    setFocusedInput(refName) {
      if (refName == "subType") {
        // this.getEwayDetailsData();
        setTimeout(() => {
          this.showSubType = true;
          this.searchType(this.subType);
        }, 100);
      } else if (refName == "documentType") {
        setTimeout(() => {
          this.showDocumentType = true;
          this.searchType(this.documentType);
        }, 100);
      } else if (refName == "transportMode") {
        setTimeout(() => {
          this.showModeType = true;
          this.searchType(this.transportMode);
        }, 100);
        // }
      } else if (refName == "consignorActualState") {
        setTimeout(() => {
          this.showStateListForConsignor = true;
          this.searchState(this.consignorActualState);
        }, 100);
      } else if (refName == "consigneeActualState") {
        setTimeout(() => {
          this.showStateListForConsignee = true;
          this.searchState(this.consigneeActualState);
        }, 100);
      } else if (refName == "consigneeState") {
        setTimeout(() => {
          this.showStateListForConsigneeState = true;
          this.searchState(this.consigneeState);
        }, 100);
      } else if (refName == "transporterName") {
        setTimeout(() => {
          this.showTransporterNamelist = true;
          this.searchType(this.transporterName);
        }, 100);
      } else if (refName == "vehicleType") {
        setTimeout(() => {
          this.searchState(this.vehicleType);
          this.showVehicleType = true;
        }, 100);
      }
      this.focusedInput = refName;
    },

    handleGlobalClick(event) {
      if (
        this.focusedInput &&
        !this.$refs[this.focusedInput].contains(event.target)
        && !this.showNewTransporterNamePopup) {
        // Refocus the previously active input
        this.$refs[this.focusedInput].focus();
      }
    },

    selectSubType(type) {
      console.log(type);
      this.subType = type.description;
      this.subTypeCode = type.code;
      this.$refs.documentType.focus();
      this.SupplyTypeChanged(type.description);
    },

    selectDocumentType(type) {
      this.documentType = type.description;
      this.documentTypeCode = type.code;
      this.$refs.consignorAddress1.focus();
    },

    selectModeType(type) {
      this.transportMode = type.description;
      if(type.description == "Not Applicable") { 
        this.checkValidation();
        return;
      }
      this.transportModeCode = type.code;
      this.$refs.transDocNo.focus();
    },

    selectVehicleType(type) {
      this.vehicleType = type.description;
      this.vehicleTypeCode = type.code;

      // const hasErrors = Object.values(this.errors).some((error) => error);
      // if (hasErrors) {
      //   this.errorPopup = true;
      //   // console.log("errors exist " + hasErrors);
      // } else {
      //   this.isEwayDetailsFilled = true;
      //   this.$emit("ewayDetailsData", this.bindFormData, this.isEwayDetailsFilled);
      //   // this.closePopup();
      //   // this.$emit('update:visible', false);
      this.checkValidation();
    },

    checkValidation() {
      const hasErrors = Object.values(this.errors).some((error) => error);
      if (hasErrors) {
        this.errorPopup = true;
      } else {
        this.isEwayDetailsFilled = true;
        const formData = {
          consolidatedEwayBillNo: this.consolidatedEwayBillNo,
          consolidatedEwayBillDate: this.consolidatedEwayBillDate,
          subType: this.subType,
          documentType: this.documentType,
          consignorAddress1: this.consignorAddress1,
          consignorPincode: this.consignorPincode,
          consignorPlace: this.consignorPlace,
          consignorActualState: this.consignorActualState,
          consigneeAddress1: this.consigneeAddress1,
          consigneeGstin: this.consigneeGstin,
          consigneeState: this.consigneeState,
          consigneePincode: this.consigneePincode,
          consigneePlace: this.consigneePlace,
          consigneeActualState: this.consigneeActualState,
          pinToPinDistance: this.pinToPinDistance,
          transporterId: this.transporterId,
          transporterName: this.transporterName,
          transportMode: this.transportMode,
          transDocNo: this.transDocNo,
          vehicleNumber: this.vehicleNumber,
          vehicleType: this.vehicleType,
          subTypeCode: this.subTypeCode,
          documentTypeCode: this.documentTypeCode,
          transportModeCode: this.transportModeCode,
          vehicleTypeCode: this.vehicleTypeCode,
        };

        this.$emit("ewayDetailsData", formData, this.isEwayDetailsFilled);
      }
    },


    handleKeyNavigation(event, refName) {

      const allRefs = [
        // "ewayBillNo",
        // "ewayBillDate",
        "consolidatedEwayBillNo",
        "consolidatedEwayBillDate",
        "subType",
        "documentType",
        "consignorAddress1",
        // "consignorAddress2",
        "consignorPincode",
        "consignorPlace",
        "consignorActualState",
        "consigneeAddress1",
        "consigneeGstin",
        "consigneeState",
        // "consigneeAddress2",
        "consigneePincode",
        "consigneePlace",
        "consigneeActualState",
        "pinToPinDistance",
        "transporterName",
        "transporterId",
        "transportMode",
        "transDocNo",
        // "partBDate",
        "vehicleNumber",
        "vehicleType",
      ];

      const refToModelMapping = {
        ewayBillNo: "ewayBillNo",
        ewayBillDate: "ewayBillDate",
        consolidatedEwayBillNo: "consolidatedEwayBillNo",
        consolidatedEwayBillDate: "consolidatedEwayBillDate",
        subType: "subType",
        documentType: "documentType",
        consignorAddress1: "consignorAddress1",
        // consignorAddress2: "consignorAddress2",
        consignorPincode: "consignorPincode",
        consignorActualState: "consignorActualState",
        consignorPlace: "consignorPlace",
        consigneeAddress1: "consigneeAddress1",
        consigneeGstin: "consigneeGstin",
        consigneeState: "consigneeState",
        // consigneeAddress2: "consigneeAddress2",
        consigneePincode: "consigneePincode",
        consigneePlace: "consigneePlace",
        consigneeActualState: "consigneeActualState",
        pinToPinDistance: "pinToPinDistance",
        transporterName: "transporterName",
        transporterId: "transporterId",
        transportMode: "transportMode",
        transDocNo: "transDocNo",
        // partBDate: "partBDate",
        vehicleNumber: "vehicleNumber",
        vehicleType: "vehicleType",
      };

      const readOnlyRefs = [
        "consignorMailingName",
        "consignorGstin",
        "consignorState",
        // "consignorPlace",
        "consigneeMailingName",
        // "consigneeGstin",
        // "consigneeState",
        // "consigneePlace",
      ];

      const currentIndex = allRefs.indexOf(refName);
      // debugger;
      // Navigate to the next input field
      if (event.key === "Enter") {
        if (this.errorPopup) {
          this.errorPopup = false;
          this.$refs.consolidatedEwayBillNo.focus();
        }

        if (refName == "consolidatedEwayBillDate") {
          let validDate = this.handleDateInputValidation()
          if (!validDate) return;
        }

        if (this.showTransporterNamelist || this.showStateListForConsigneeState || this.showSubType || this.showDocumentType || this.showStateListForConsignee || this.showStateListForConsignor || this.showModeType || this.showVehicleType) return;

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
          // Blank the v-modell value
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

    updateSelectedSupply() {
      if (this.RadioValue === "Outward") {
        this.selectedSupply = "o";
        console.log(this.selectedSupply, "if condition");
      } else {
        this.selectedSupply = "I";
        console.log(this.selectedSupply, "else condition");
      }
    },

    SupplyTypeChanged(data) {
      // const Selected = this.subSupplyTypeData.find(
      //   (data) => data.description === this.SubSupplyTypeValue
      // );
      // this.selectedCode = Selected ? Selected.code : "";

      // let data = event.target.value;
      if (data == "Supply") {
        this.documentTypeData = [
          {
            code: "INV",
            description: "Tax Invoice",
          },
          {
            code: "BIL",
            description: "Bill of Supply",
          },
        ];
      } else if (data == "Export") {
        this.documentTypeData = [
          {
            code: "INV",
            description: "Tax Invoice",
          },
          {
            code: "BIL",
            description: "Bill of Supply",
          },
        ];
      } else if (data == "Job Work") {
        this.documentTypeData = [
          {
            code: "CHL",
            description: "Delivery Challan",
          },
        ];
      } else if (data == "SKD/CKD/Lots") {
        this.documentTypeData = [
          {
            code: "INV",
            description: "Tax Invoice",
          },
          {
            code: "BIL",
            description: "Bill of Supply",
          },
          {
            code: "CHL",
            description: "Delivery Challan",
          },
        ];
      } else if (data == "Recipient Not Known") {
        this.documentTypeData = [
          {
            code: "OTH",
            description: "Others",
          },
          {
            code: "CHL",
            description: "Delivery Challan",
          },
        ];
      } else if (data == "For Own Use") {
        this.documentTypeData = [
          {
            code: "CHL",
            description: "Delivery Challan",
          },
        ];
      } else if (data == "Exhibition or Fairs") {
        this.documentTypeData = [
          {
            code: "CHL",
            description: "Delivery Challan",
          },
        ];
      } else if (data == "Line Sales") {
        this.documentTypeData = [
          {
            code: "CHL",
            description: "Delivery Challan",
          },
        ];
      } else if (data == "Others") {
        this.documentTypeData = [
          {
            code: "OTH",
            description: "Others",
          },
          {
            code: "CHL",
            description: "Delivery Challan",
          },
        ];
      }
    },

    getEwayDetailsData() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getMasterCodeDetails(data, headers)
        .then((response) => {
          const responseData = response.data.data.subSupplyType;
          this.subSupplyTypeData = responseData.filter((item) =>
            this.allowed_descriptions.includes(item.description)
          );
          this.TransportMode = response.data.data.transportationModes;
          this.TransportMode.unshift({
            code: "",
            description: "Not Applicable"
          });
          this.vehicleTypeData = response.data.data.vehicleType;
        })
        .catch(() => {
          // this.SupplyTypeChanged = [];
        });
      this.getTransporterLedgersFunction();
    },

    DocumentCodeFunction(event) {
      const Selected = this.documentTypeData.find(
        (data) => data.description === this.DocumentTypeValue
      );
      this.selectedDocCode = Selected ? Selected.code : "";
    },

    getTransporterLedgersFunction() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
        company_id: localStorage.getItem("companyId"),
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getTransporterLedgers(data, headers).then((response) => {
        this.TransporterName = response.data.data;

        this.TransporterName.unshift({
          code: "",
          ledgerName: "New"
        }, {
          code: "",
          ledgerName: "None"
        })
        this.TransporterId = [];
        for (let [key, value] of Object.entries(response.data.data)) {
          this.TransporterId.push(...value.ledGstRegDetailsList);
        }
      });
    },

    transporterNameselected() {
      const filteredTransporter = this.TransporterName.find(
        (data) => data.ledgerName === this.transporterName
      );

      if (
        filteredTransporter &&
        Array.isArray(filteredTransporter.ledGstRegDetailsList) &&
        filteredTransporter.ledGstRegDetailsList.length > 0
      ) {
        this.transporterId =
          filteredTransporter.ledGstRegDetailsList[0].transporterId || "";
      } else {
        this.transporterId = "";
      }
    },

    closePopup() {
      this.$emit('closeEwayPopup'); // Emit the event to close the popup
    },

    // transporterIdselected() {
    //   const filteredTransporter = this.TransporterName.find(
    //     (data) =>
    //       data.ledGstRegDetailsList[0].transporterId === this.transporterName
    //   );
    //   if (filteredTransporter) {
    //     this.TransporterNameValue = filteredTransporter.ledgerName || "";
    //   } else {
    //     this.TransporterNameValue = "";
    //   }
    // },


  },

  mounted() {
    this.$refs.consolidatedEwayBillNo.focus();
    this.getlocationlist();
    this.getEwayDetailsData();

    this.validateAllFields();
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

.popup-container {
  background: #fff;
  width: 75rem;
  /* height: 35rem; */
  padding: 20px;
  /* border-radius: 10px; */
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); */
  overflow-y: auto;
  line-height: 1.1;
}

.eway-table {
  width: 100%;
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
  padding: 10px 0;
  /* border-bottom: 1px solid #ccc; */
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

.subTypeClass[data-v-fecfdf06] {
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

/* Full-page overlay background */
.popup-overlay {
  position: fixed;
  /* Ensures the overlay stays in place */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* Semi-transparent background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  /* Ensures it appears above other elements */
}

/* Centered popup styles */
.transporterName {
  background: #fff;
  padding: 20px;
  /* border-radius: 10px; */
  border: 1px solid black;
  -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
}

.transporterName label {
  display: block;
  margin-bottom: 10px;
  font-weight: 800;
  font-size: 15px;
}

.transporterName input {
  width: 100%;
  /* Makes the input take up the full width of the popup */
  padding: 8px;
  border: 1px solid #ccc;
  /* border-radius: 5px; */
}

.upperCase {
  text-transform: uppercase;
  ;
}
</style>
