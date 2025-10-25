/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<script>
import NavBar from "@/components/Websiteheader";
import FooterBar from "@/components/Websitefooter";

export default {
  components: {
    NavBar,
    FooterBar
  }
};
</script>

<template>
  <div>
    <nav-bar />

   
      <slot />  
  

    <footer-bar />
  </div>
</template>
