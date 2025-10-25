<template>
  <div class="modal-vue-tally">
    <div
      class="main-tally-front-popup-date"
      @click="focusPeriodDateModal(focusInputValue)"
    >
      <div class="changeperiod-popup-top-labelline">
        <div class="row align-items-center">
          <div class="col-lg-4 col-4">
            <div class="company-popup-labelline-text">
              <h6>Change Period Date</h6>
            </div>
          </div>
          <div class="col-lg-4 col-4">
            <div class="company-popup-labelline-companyname">
              <h6>{{ currentCompanyName }}</h6>
            </div>
          </div>
          <div class="col-lg-4 col-4">
            <div class="company-popup-labelline-icon">
              <a
                href="javascript:void(0);"
                @click="closeModalchangeperiodDateIcon"
                ><i class="fa fa-close"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="changeperioddate-popup-centervalign">
        <div class="tally-front-popup-date">
          <!-- <button class="close" @click="closeOnlyDateModal">x</button> -->
          <div>
            <span>{{ label }}</span>
          </div>
          <div class="period-date-company-popup">
            <div class="row">
              <div class="col-5">
                <div class="period-from-to-date-inner-label">
                  <label>From</label>
                </div>
              </div>
              <div class="col-7">
                <div class="period-from-to-date-inner-input">
                  :<input
                    type="text"
                    class=""
                    v-model="localFromPeriod"
                    ref="periodInput1"
                    @input="dateCleared1"
                    @keydown="handleKeydown($event, 'period1')"
                    @keydown.down="switchPeriodDown('period1')"
                    @click="switchPeriodDown(1)"
                    @keydown.esc="handleEscapeKey($event, 'period1')"
                    @focus = "handleFocus($event, 'period1')"
                    @mousedown = "handleMouseDown()"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="period-date-company-popup">
            <div class="row">
              <div class="col-5">
                <div class="period-from-to-date-inner-label">
                  <label>To</label>
                </div>
              </div>
              <div class="col-7">
                <div class="period-from-to-date-inner-input">
                  :<input
                    type="text"
                    class=""
                    v-model="localToPeriod"
                    ref="periodInput2"
                    @input="dateCleared2"
                    @keydown="handleKeydown($event, 'period2')"
                    @keydown.up="switchPeriodUp()"
                    @keydown.down="switchPeriodDown('period2')"
                    @click="switchPeriodDown(2)"
                    @keydown.esc="handleEscapeKey($event, 'period2')"
                    @focus = "handleFocus($event, 'period2')"
                    @mousedown = "handleMouseDown()"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay3"></div>
  </div>
</template>

<script>
import moment from "moment";
import store from "../../store";
export default {
  props: {
    label: String,
    fromPeriod: {
      type: String,
      default: "",
    },
    toPeriod: {
      type: String,
      default: "",
    },
    resetTallySidebarValues: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      localFromPeriod: this.fromPeriod,
      localToPeriod: this.toPeriod,
      possibleFormats: [
        "DD/MM/YYYY",
        "DD/MM/YY",
        "DD/MMM/YY",
        "DD/MMM/YYYY",
        "D/M/YYYY",
        "D/M/YY",
        "DD.MM.YYYY",
        "DD.MM.YY",
        "DD.MMM.YY",
        "DD.MMM.YYYY",
        "DMMMYY",
        "DDMMMYY",
        "DDMMMYYYY",
        "D.M.YYYY",
        "D.M.YY",
        "D-M-YYYY",
        "D-M-YY",
        "D-MM-YY",
        "D-MMM-YY",
        "DD-MM-YYYY",
        "DD-MM-YY",
        "DD-MMM-YY",
        "DD-MMM-YYYY",
        "DD",
        "DD-MM",
        "DD MM",
        "DD-MMM",
        "DD MMM",
        "DDMMM",
        "DDMM",
        "DD/MM",
        "DD.MM",
        "DD.MMM",
        "DD/MMM",
        "D",
        "MMMYY",
        "D MMM YY",
        "DD MMM YY",
        "DD MMM YY",
        "DD MM YYYY",
        "DD MM YY",
        "DD M YY",
        "D M YY",
        "DDMMMMYYYY",
        "DD-MMMM-YYYY",
        "DD-MMMM-YY",
        "D-MMMM-YY",
        "D MMMM YY",
      ],
      focusInputValue: 1,
      isDateCleared1: false,
      isDateCleared2: false,
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
    handleKeydown(event, period) {

      this.isKeyDown = true;

      if ((event.ctrlKey || event.metaKey) && event.key === 'a') {
        event.preventDefault(); // Prevent the default select-all behavior
        this.handleDateInputValidation(period); // Custom select-all logic
      }

      if(event.key == 'ArrowLeft'){
        if(this.cursorPosition == 0){
          //it will remain zero
        }
        else{
          this.cursorPosition -= 1;
        }
        console.log('left arrow clicked in period' +  ' ' + this.cursorPosition);
      } else if (event.key === 'ArrowRight') {
        if(this.cursorPosition == this.localFromPeriod.length){
          //it will remain same
        }
        else{
          this.cursorPosition += 1;
        }
        console.log('right arrow clicked in period' + ' ' + this.cursorPosition);
      }
      
      if (event.key === 'Escape') {
        this.handleEscapeKey(event, period);
      } else if (event.key === 'Enter') {
        this.handleDateInputValidation(period);
      }
    },
    selectAllText(period) {
      const inputElement = this.$refs[`periodInput${period === 'period1' ? 1 : 2}`];
      inputElement.setSelectionRange(0, inputElement.value.length);
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

    
    
    dateCleared1(event){
      const userInput1 = event.target.value;
      if (!this.isDateCleared1 && this.cursorPosition == 0  && !this.isMouseDown) {
        this.isDateCleared1 = true;
        this.localFromPeriod = /^[0-9]$/.test(userInput1) ? userInput1 : userInput1.substring(0, 1);
      }
    },
    dateCleared2(event){
      const userInput2 = event.target.value;
      if (!this.isDateCleared2 && this.cursorPosition == 0 && !this.isMouseDown) {
        this.isDateCleared2 = true;
        this.localToPeriod = /^[0-9]$/.test(userInput2) ? userInput2 : userInput2.substring(0, 1);
      }
    },
    focusPeriodDateModal(focusPeriod) {
      this.$nextTick(() => {
        const inputElement = this.$refs[`periodInput${focusPeriod}`];

      if (inputElement) {

        // inputElement.blur();

        inputElement.focus();
        
        // Focus the input element

        if(!this.isMouseDown && !this.isKeyDown){
          setTimeout(() => {
            inputElement.setSelectionRange(0, 0);
            console.log('mouse not clicked');
          },10);
        }

        
          // Move the cursor to the start of the input

      // Make sure it gets applied after focus using another nextTick
        // this.$nextTick(() => {
        //   inputElement.setSelectionRange(0, 0);  // Re-apply after focus to ensure proper placement
        // });
      }
        // inputElement.focus();
        // inputElement.setSelectionRange(0, 0);
      });
    },

    

    switchPeriodDown(fromPeriod) {
      console.log(fromPeriod);
      if (fromPeriod === "period1") {
        this.focusInputValue = 2;
        this.focusPeriodDateModal(this.focusInputValue);
      } else if (fromPeriod === "period2") {
        this.$emit("closePeriodPopup");
      } else {
        this.focusInputValue = fromPeriod;
        this.focusPeriodDateModal(this.focusInputValue);
      }
    },

    switchPeriodUp() {
      this.focusInputValue = 1;
      this.focusPeriodDateModal(this.focusInputValue);
    },

    handleDateInputValidation(period) {
      // debugger;
      const inputDate =
        period === "period1" ? this.localFromPeriod : this.localToPeriod;
      const validatedDate = this.validateAndConvertDateFormat(inputDate.trim());

      if (validatedDate) {
        if (period === "period1") {
          this.localFromPeriod = validatedDate;
          this.focusPeriodDateModal(2);
        } else {
          this.localToPeriod = validatedDate;
          // this.$store.commit("tallyStore/setStartFrom", this.localFromPeriod);
          // this.$store.commit("tallyStore/setEndDate", this.localToPeriod);
          this.$emit(
            "updateCurrentPeriod",
            this.localFromPeriod,
            this.localToPeriod
          );
          this.$emit(
            "closePeriodPopup",
            this.localFromPeriod,
            this.localToPeriod
          );
        }
      }
    },

    validateAndConvertDateFormat(localDate) {
      for (const format of this.possibleFormats) {
          // Check if the format is "MMMYY" and adjust the date accordingly
          if (format === "MMMYY") {
            const parsedDate = moment(localDate, format, true);
            if (parsedDate.isValid()) {
              // Set the day to the first of the month if it's not specified
              return parsedDate.startOf('month').format("DD-MM-YYYY");
            }
          } else {
            const isValid = moment(localDate, format, true).isValid();
            if (isValid) {
              return moment(localDate, format).format("DD-MM-YYYY");
            }
          }
      }
      const formattedDate = this.createDateForMYY(localDate);
      if (formattedDate) {
        return formattedDate;
      }

      // Return a clear indication of an invalid date
      return false;
      },

    createDateForMYY(localDate) {
      const monthMap = {
        j: 1,
        f: 2,
        m: 3,
        a: 4,
        s: 9,
        o: 10,
        n: 11,
        d: 12
      };

      const month3Map = {
        jan: 1,
        feb: 2,
        mar: 3,
        apr: 4,
        may: 5,
        jun: 6,
        jul: 7,
        aug: 8,
        sep: 9,
        oct: 10,
        nov: 11,
        dec: 12
      }

      const currentYear = moment().year();
      const yearDigit = localDate.substr(1);

      // Handle formats with just month (m or mmm)
      if (localDate.length === 1) {
        const month = monthMap[localDate[0].toLowerCase()];
        return moment([currentYear, month - 1]).startOf('month').format("DD-MM-YYYY");
      } else if (localDate.length === 3) {
        const month = month3Map[localDate.toLowerCase()];
        if (month) return moment([currentYear, month - 1]).startOf('month').format("DD-MM-YYYY");
      }

      // Handle formats with month and year (myy or myyyy)
      if (localDate.length === 3 || localDate.length === 5) {
        const year = moment(yearDigit, "yy").format("YYYY");
        if (year === "Invalid date") return false;
        const fullYear = yearDigit.length === 4 ? yearDigit : `20${yearDigit}`;
        const month = monthMap[localDate[0].toLowerCase()];
        return moment([fullYear, month - 1]).startOf('month').format("DD-MM-YYYY");
      }

      // Handle the case where the date format is not recognized
      return false;
    },

    handleEscapeKey(event, label) {
      if (event.key === "Escape") {
        if (label === "period1") {
          if (this.localFromPeriod) {
            this.localFromPeriod = "";
          } else {
            this.$emit("closePeriodPopup");
          }
        } else if (label === "period2") {
          if (this.localToPeriod) {
            this.localToPeriod = "";
          } else {
            this.$emit("closePeriodPopup");
          }
        }
      }
    },
    closeModalchangeperiodDateIcon() {
      this.$emit("closePeriodPopup");
    },
  },

  mounted() {
    this.focusPeriodDateModal(1);
    if (this.resetTallySidebarValues) {
      store.dispatch("tallyStore/resetValues");
    }
  },
};
</script>
