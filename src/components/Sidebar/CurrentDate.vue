<template>
  <!-- <section> -->
  <div class="modal-vue-tally">
    <div class="main-tally-front-popup-date" @click="focusDateInput">
      <div class="currentdate-popup-top-labelline">
        <div class="row align-items-center">
          <div class="col-lg-4 col-4">
            <div class="company-popup-labelline-text">
              <h6>Change Current Date</h6>
            </div>
          </div>
          <div class="col-lg-4 col-4">
            <div class="company-popup-labelline-companyname">
              <h6>{{ currentCompanyName }}</h6>
            </div>
          </div>
          <div class="col-lg-4 col-4">
            <div class="company-popup-labelline-icon">
              <a href="javascript:void(0);" @click="closeModalCurrentDateIcon"><i class="fa fa-close"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="currentdate-popup-centervalign">
        <div class="tally-front-popup-date">
          <!-- <button class="close" @click="closeOnlyDateModal">x</button> -->
          <div>
            <span>{{ label }}</span>
          </div>
          <input type="text" class="date-format-input-tally" @input="dateCleared" v-model="localSelectedDate"
            ref="dateInput"  @keydown="handleKeydown"  @mousedown = "handleMouseDown()" @focus = "handleFocus($event)"/>
        </div>
      </div>
    </div>
    <div class="overlay1" @click="focusDateInput"></div>
  </div>
  <!-- </section> -->
</template>


<script>
import moment from "moment";
import store from "../../store";
import { validateAndConvertDateFormat } from "../../utils/dateUtils";
export default {
props: {
  label: String,
  currentDate: {
    type: String,
    default: "",
  },
},

data() {
  return {
    localSelectedDate: this.currentDate,
    // possibleFormats: [
    //   "DD/MM/YYYY",
    //   "DD/MM/YY",
    //   "DD/MMM/YY",
    //   "DD/MMM/YYYY",
    //   "D/M/YYYY",
    //   "D/M/YY",
    //   "DD.MM.YYYY",
    //   "DD.MM.YY",
    //   "DD.MMM.YY",
    //   "DD.MMM.YYYY",
    //   "DMMMYY",
    //   "DDMMMYY",
    //   "DDMMMYYYY",
    //   "DDMMMMYYYY",
    //   "D.M.YYYY",
    //   "D.M.YY",
    //   "D-M-YY",
    //   "D-MM-YY",
    //   "DD-MM-YYYY",
    //   "DD-MM-YY",
    //   "D-MMM-YY",
    //   "DD-MMM-YY",
    //   "DD-MMM-YYYY",
    //   "DD-MMMM-YYYY",
    //   "DD-MMMM-YY",
    //   "D-MMMM-YY",
    //   "D MMMM YY",
    //   "DD",
    //   "D",
    //   "MMMYY",
    //   "D MMM YY",
    //   "DD MMM YY",
    //   "DD MMM YY",
    //   "DD MM YYYY",
    //   "DD MM YY",
    //   "DD M YY",
    //   "D M YY",
    // ],

    isDateCleared: false,
    //for tracking the position of cursor
    cursorPosition: 0,
    isMouseDown: false,
    isKeyDown: false,
  };
},
computed: {
  currentCompanyName() {
    return this.$store.state.tallyStore.currentCompanyName;
  },
},
methods: {
  handleKeydown(event) {

    this.isKeyDown = true;

    if ((event.ctrlKey || event.metaKey) && event.key === 'a') {
      event.preventDefault(); // Prevent the default select-all behavior
      this.handleDateInputValidation(); // Your custom select-all logic
    }

    if (event.key === 'ArrowLeft') {
      if(this.cursorPosition == 0){
        //it will remain zero
      }
      else{
        this.cursorPosition -= 1;
      }
      console.log('left arrow clicked' +  ' ' + this.cursorPosition);
    } else if (event.key === 'ArrowRight') {
      if(this.cursorPosition == this.localSelectedDate.length){
        //it will remain same
      }
      else{
        this.cursorPosition += 1;
      }
      console.log('right~ arrow clicked' + ' ' + this.cursorPosition);
    }

    // Call existing keydown handlers
    if (event.key === 'Escape') {
      this.handleEscapeKey(event);
    } else if (event.key === 'Enter') {
      this.handleDateInputValidation(event);
    }
  },

  dateCleared(event) {
    const userInput = event.target.value;
    if (!this.isDateCleared && this.cursorPosition == 0 && !this.isMouseDown) {
      // 
      this.isDateCleared = true;
      this.localSelectedDate = /^[0-9]$/.test(userInput) ? userInput : userInput.substring(0, 1);
    }
  },

  focusDateInput() {
    this.$nextTick(() => {
      const inputElement = this.$refs.dateInput;
      inputElement.focus();
      if(!this.isMouseDown && !this.isKeyDown){
        setTimeout(() => {
          inputElement.setSelectionRange(0, 0);
          console.log('mouse not clicked');
        },10);
      }
    });
  },

  handleMouseDown(){
    this.isMouseDown = true
  },

  

  handleFocus(event){
    if (!this.isMouseDown && this.isKeyDown) {
      
      setTimeout(() => {
        const inputElement = event.target;
        inputElement.setSelectionRange(0, 0);
      }, 10);
    }
    // // Reset both flags after handling focus
    if(this.isKeyDown){
      this.isMouseDown = false;
      this.isKeyDown = false;
    }
    
    
  },

  handleDateInputValidation() {
    // debugger;
    const inputDate = this.localSelectedDate.trim();
    const validatedDate = validateAndConvertDateFormat(inputDate);
    console.log(validatedDate);
    console.log(this.$store.state.tallyStore.startFrom);

    // Ensure validatedDate is a Moment.js object for comparison
    const validatedMoment = moment(validatedDate, "DD-MM-YYYY");
    // console.log(validatedDate);
    const startFromMoment = moment(this.$store.state.tallyStore.startFrom, "DD-MM-YYYY");
    const endDateMoment = moment(this.$store.state.tallyStore.endDate, "DD-MM-YYYY");

    if (validatedMoment.isValid()) {
      // if (
      //   validatedMoment.isSameOrAfter(startFromMoment) &&
      //   validatedMoment.isSameOrBefore(endDateMoment)
      // ) {
      this.localSelectedDate = validatedDate;
      // this.focusDateInput();
      // this.$emit("updateCurrentPeriod", this.localFromPeriod, this.localToPeriod);
      // this.$store.commit("tallyStore/setCurrentDate", this.localSelectedDate);
      this.$emit("closeDatePopup", this.localSelectedDate);
      // } else {
      //   // Handle the case where the date is outside the allowed range
      //   console.log("Date is outside the allowed range.");
      // }
    } else {
      // Handle the case where the date is not valid
      console.log("Invalid date.");
    }
  },


  // validateAndConvertDateFormat(localDate) {
  //   for (const format of this.possibleFormats) {
  //     // Check if the format is "MMMYY" and adjust the date accordingly
  //     if (format === "MMMYY") {
  //       const parsedDate = moment(localDate, format, true);
  //       if (parsedDate.isValid()) {
  //         // Set the day to the first of the month if it's not specified
  //         return parsedDate.startOf('month').format("DD-MM-YYYY");
  //       }
  //     } else {
  //       const isValid = moment(localDate, format, true).isValid();
  //       if (isValid) {
  //         return moment(localDate, format).format("DD-MM-YYYY");
  //       }
  //     }
  //   }

  //   const formattedDate = this.createDateForMYY(localDate);
  //   if (formattedDate) {
  //     return formattedDate;
  //   }

  //   // Return a clear indication of an invalid date
  //   return false;
  // },

  // createDateForMYY(localDate) {
  //   const monthMap = {
  //     j: 1,
  //     f: 2,
  //     m: 3,
  //     a: 4,
  //     s: 9,
  //     o: 10,
  //     n: 11,
  //     d: 12
  //   };

  //   const month3Map = {
  //     jan: 1,
  //     feb: 2,
  //     mar: 3,
  //     apr: 4,
  //     may: 5,
  //     jun: 6,
  //     jul: 7,
  //     aug: 8,
  //     sep: 9,
  //     oct: 10,
  //     nov: 11,
  //     dec: 12
  //   }

  //   const currentYear = moment().year();
  //   const yearDigit = localDate.substr(1);

  //   // Handle formats with just month (m or mmm)
  //   if (localDate.length === 1) {
  //     const month = monthMap[localDate[0].toLowerCase()];
  //     return moment([currentYear, month - 1]).startOf('month').format("DD-MM-YYYY");
  //   } else if (localDate.length === 3) {
  //     const month = month3Map[localDate.toLowerCase()];
  //     if(month) return moment([currentYear, month - 1]).startOf('month').format("DD-MM-YYYY");
  //   }

  //   // Handle formats with month and year (myy or myyyy)
  //   console.log(localDate.length);
  //   if ( localDate.length === 3 || localDate.length === 5) {
  //     const year = moment(yearDigit, "yy").format("YYYY");
  //     if(year === "Invalid date") return false;
  //     const fullYear = yearDigit.length === 4 ? yearDigit : `20${yearDigit}`;
  //     const month = monthMap[localDate[0].toLowerCase()];
  //     return moment([fullYear, month - 1]).startOf('month').format("DD-MM-YYYY");
  //   }

  //   // Handle the case where the date format is not recognized
  //   return false;
  // },

  handleEscapeKey(event) {
    if (event.key === "Escape") {
      if (this.localSelectedDate) {
        this.localSelectedDate = "";
      } else {
        // this.localSelectedDate = storeDate;
        this.$emit("closeDatePopup");
      }
    }
  },

  closeModalCurrentDateIcon() {
    this.$emit("closeDatePopup");
  },
},

mounted() {
  this.focusDateInput();
},
};
</script>

