/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<script>
import NavBar from "@/components/tallyheader";
import FooterBar from "@/components/tallyfooter";


export default {
  components: {
    NavBar,
    FooterBar,
    
  }
};
</script>

<template>
  <div>

    <nav-bar />
    <div class="tally-dashboard-padding-top">
      <div class="container-fluid p-0">


        <div class="row m-0">
          <div class="col-10 p-0">
            <slot />
          </div>

          
        </div>
      </div>
    </div>
    <footer-bar />
  </div>
</template>
