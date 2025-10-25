// src/directives/numericOnly.js

export default {
  bind(el) {
    function validateInput(event) {
      let inputValue = event.target.value;

      // Allow only one `-` at the start and one `.`, and limit to 2 decimal places
      const numericValue = inputValue
        .replace(/[^0-9.-]/g, '') // Remove invalid characters
        .replace(/(?!^)-/g, '') // Remove `-` if it is not at the start
        .replace(/(\..*)\./g, '$1') // Only allow one `.`
        .replace(/^(\d+(\.\d{0,2})?).*$/, '$1'); // Limit to 2 digits after the decimal point

      // If the formatted value is different, update the input value
      if (inputValue !== numericValue) { 
        event.target.value = numericValue;
        // Emit an input event to update the model
        event.target.dispatchEvent(new Event('input'));
      }
    }

    el.addEventListener('input', validateInput);

    // Save the function to remove it later if needed
    el.__vueNumericOnly__ = validateInput;
  },
  unbind(el) {
    el.removeEventListener('input', el.__vueNumericOnly__);
    delete el.__vueNumericOnly__;
  }
};
