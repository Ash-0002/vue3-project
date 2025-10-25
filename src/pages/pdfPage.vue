/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<template>
    <section>
      <div style="margin: 0; padding: 0; overflow: hidden; height: 100vh;">
    <iframe
      :src="pdfsrc"
      width="100%"
      height="100%"
      style="border: none;"
    ></iframe>
  </div>

      
    </section>
  </template>
  
  <script>
  
 
  export default {
  
    name: "pdfPage",
  
    data() {
      console.warn(localStorage.getItem('pdfUrl'));
      return {

      };
    },
    computed:{
      pdfsrc() {
        this.pdfName = "Kartik"
        
        return `data:application/pdf;base64,${localStorage.getItem('pdfUrl')}`;
      }
    },
    methods: {
    
    },
    

      mounted() {
        // var pdfval= localStorage.getItem('pdfUrl');
        // this.pdfUrl = localStorage.getItem('pdfUrl');
          // $("#iframedt").attr("src", pdfval);
          // document.body.style.overflowY = 'hidden';
          document.documentElement.style.height = '100%';
          document.documentElement.style.overflowY = 'hidden';
      },
      beforeDestroy() {
      // document.body.style.overflowY = '';
      document.documentElement.style.height = '';
      document.documentElement.style.overflowY = '';
      }
    };
    </script>
    <style scoped>
  /* body, html {
    margin: 0;
    padding: 0;
    overflow: hidden !important;
    height: 100%;
} */
</style>