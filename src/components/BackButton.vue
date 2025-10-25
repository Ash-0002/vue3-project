<template>
  <div class="back_button_comp">
    <button @click="ResetStates">
      <img src="assets/images/1.0/dashboard/back-arrow-button.svg" alt="" />
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    ResetStates() {
      this.$router.go(-1);
      this.$store.dispatch("Web1_Store/resetPartiesState");
    },
  },
};
</script>
<style>
.back_button_comp button {
  cursor: pointer;
  margin-right: 20px;
}
</style>
