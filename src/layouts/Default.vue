/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<script>
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import FooterBar from "@/components/FooterBar";

export default {
  components: {
     NavBar,
    SideBar,
     FooterBar
  }
};
</script>

<template>
  <div>
    
    <nav-bar />
    <div class="columns">
       
     
                <div class="side-app">
        <div class="column is-8">
          <slot />
        </div>

        <div class="column is-4">
          <side-bar />
        </div>
      </div>
    </div>

    <footer-bar />
  </div>
</template>
