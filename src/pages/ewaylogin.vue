<!-- eslint-disable prettier/prettier -->
/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section class="">
    <!------Start EWay Login Modal------------->
      <iframe :src="url" frameborder="0" class="iframe"></iframe>
    <!------End EWay Login Modal-------------->
   
  </section>
</template>

<script>

export default {
  components: {
   
  },
  data() {
    return {
      url : ""
      
    };
  },
  
  methods: {
    
  },

  mounted() {
    this.url = "https://ewaybillgst.gov.in/login.aspx";
    this.$bvModal.show('EWayLoginModalIframe');

  },
};
</script>

<style scoped>
/* Using ::v-deep to target the modal content outside the component */
#EWayLoginModalIframe .EWayLoginPopupFormIframe input {border: 1px solid #C6C6C6;padding: 10px 10px;border-radius: 3px;width: 100%;font-size: 11px;}
#EWayLoginModalIframe .EWayLoginPopupFormLabelIframe {position: absolute;top: -9px;left: 10px;background: #fff;z-index: 1;font-size: 10px;padding: 2px 5px;color: #525252;}
#EWayLoginModalIframe .EWayLoginButtonIframe button {border: 1px solid transparent;background: #1a1a1a;color: #fff;padding: 10px 15px;border-radius: 3px;width: 100%;}
::v-deep #EWayLoginModalIframe .modal-dialog.modal-dialog-centered {max-width: 30%;}
::v-deep #EWayLoginModalIframe .modal-body{text-align:center;}
</style>
