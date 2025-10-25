/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<script>
import NavBar from "@/components/newwebsiteheader";
import FooterBar from "@/components/newwebsitefooter";
import loginsidebar from "@/components/loginsidebar";

export default {
  components: {
    NavBar,
    FooterBar,
    loginsidebar
  }
};
</script>

<template>
  <div class="container-fluid p-0">
    <div class="row m-0">
      <div class="col-lg-9 col-md-12 col-12 p-0">
    <nav-bar />

    
      <slot />  
   

    <footer-bar />
    </div>
   
    </div>
  </div>
</template>
