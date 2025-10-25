export default {
    props: {
      apiFunction: {
        type: Function,
        required: true
      }
    },
    beforeRouteUpdate(to, from, next) {
      if (this.apiFunction) {
        this.apiFunction();
      }
      next();
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        console.log("Route entered");
        if (vm.apiFunction) {
          vm.apiFunction();
        }
      });
    }
  };