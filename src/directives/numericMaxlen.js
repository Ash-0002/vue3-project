export default {
    bind(el, binding) {
      const maxLength = binding.value || 0; // Max length passed as a directive value
  
      function validateInput(event) {
        let inputValue = event.target.value;
  
        // Remove all non-numeric characters
        const numericValue = inputValue.replace(/[^0-9]/g, '');
  
        // Enforce max length
        const finalValue = numericValue.slice(0, maxLength);
  
        // If the formatted value is different, update the input value
        if (inputValue !== finalValue) {
          event.target.value = finalValue;
          // Emit an input event to update the v-model
          event.target.dispatchEvent(new Event('input'));
        }
      }
  
      el.addEventListener('input', validateInput);
  
      // Save the function for cleanup during unbinding
      el.__vueNumericMaxLength__ = validateInput;
    },
    unbind(el) {
      el.removeEventListener('input', el.__vueNumericMaxLength__);
      delete el.__vueNumericMaxLength__;
    },
  };
  

// export default {
//     bind(el, binding) {
//       const maxLength = binding.value || 0;
  
//       function validateInput(event) {
//         let inputValue = event.target.value;
  
//         // Apply numeric validation: allow only one `-`, one `.`, and limit to 2 decimal places
//         const numericValue = inputValue
//           .replace(/[^0-9.-]/g, '') // Remove invalid characters
//           .replace(/(?!^)-/g, '') // Remove `-` if not at the start
//           .replace(/(\..*)\./g, '$1') // Only allow one `.`
//           .replace(/^(\d+(\.\d{0,2})?).*$/, '$1'); // Limit to 2 digits after the decimal point
  
//         // Apply max length validation
//         const finalValue = numericValue.slice(0, maxLength);
  
//         // If the formatted value is different, update the input value
//         if (inputValue !== finalValue) {
//           event.target.value = finalValue;
//           // Emit an input event to update the v-model
//           event.target.dispatchEvent(new Event('input'));
//         }
//       }
  
//       el.addEventListener('input', validateInput);
  
//       // Save the function for cleanup
//       el.__vueNumericMaxLength__ = validateInput;
//     },
//     unbind(el) {
//       el.removeEventListener('input', el.__vueNumericMaxLength__);
//       delete el.__vueNumericMaxLength__;
//     },
//   };
  