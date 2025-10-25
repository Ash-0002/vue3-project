/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<script>
  import NavBar from "@/components/Header";
  import SideBar from "@/components/SideBar";
  import FooterBar from "@/components/Footer";
  
  export default {
    components: {
      NavBar,
      SideBar,
      FooterBar
    }
  };
  </script>
  
  <template>
    <div class="page">
        <div class="page-main">
          
            <side-bar />
           
            <div class="app-content main-content">
              <div class="side-app">
                  <nav-bar />
                
                  
                
                
                <slot />
              </div>
            </div>

           
            <footer-bar />
            <a href="#top" id="back-to-top"><i class="fa fa-chevron-up"></i></a>
           
        </div>
    </div>
  </template>
 
  