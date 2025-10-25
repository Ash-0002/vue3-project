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
    <header class="tally_header">
        <nav class="navbar navbar-expand-md bglight">
 
  <a class="navbar-brand" href="tally-style">
    <!-- <router-link class="navbar-brand" :to="{ name: 'default' }"> -->
      <img src="/assets/images/2.0/LivekeepingLogo.svg" alt="Livekeeping" class="tally-nav-logo img-responsive">
    <!-- </router-link> -->
  </a>

 
     <ul class="navbar-nav first_navbar">
  <li>
    <button type="btn" class="ModernThemeButton">
      <a href="javascript:void(0);" @click="Modern_button()">
        <img src="/assets/images/2.0/flashgreen.png" alt="ModernThemeImage" /> Modern Theme
      </a>
    </button>
  </li>
	  <li class="nav-item">
  <div class="user-profile tally-header-profile-dropdown">
            <button class="btn user-profile-btn button-profile-dropdown-inner" @click="isOpen = !isOpen">
              <img src="/assets/images/2.0/hello-user.png" class="img-fluid" />
               <p>{{ userName }}</p> <i class="fa fa-chevron-down"></i>
            </button>

              <div v-if="isOpen" v-click-outside="closeEvent" class="profile-showdropdown tally-profile-dropdownshow">
                <ul class="mb-0">
                  <!-- <li><a href="" class="user-profile-tag inner-dropdown-user-profile-tag"> <img src="/assets/images/2.0/profile-user.png" class="img-fluid" /> Profile </a></li> -->
                  <li><a href="javascript:void(0);" v-on:click="logout" class="user-profile-tag inner-dropdown-user-profile-tag"><img src="/assets/images/2.0/profile-logout.png" class="img-fluid" /> Logout</a></li>
                </ul>
              </div>
          </div>
	</li>
    </ul>

</nav>
</header>

  </section>
</template>
<script>
import Api from "@/Api";
import Common from "@/Common";
import GoogleAnalytics from "@/GoogleAnalytics";
export default {
  data() {
    return {
      isOpen: false,
      userName: ""
    };
  },
  methods: {
    logout() {
      setTimeout(() => {
        this.logoutAPI();
        
      }, 200);
      return false;
    },
    logoutAPI(){
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.logoutgo(data, headers)
        .then((response) => {
          window.location.href = "/";
          localStorage.clear();
        })
        .catch((err) => {
          Common.getStatusForActionFailed(err.response.status);
        });
    },
    Modern_button() {
      GoogleAnalytics.Modern_Theme_button();
      this.switch_theme();
    },
    switch_theme(){
      const data = {
          _userId: localStorage.getItem('customerId'),
          requestFrom: "WEB",
          selectedTheme: "1.0",
          actionType : "UPDATE"
      };
      const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "token": localStorage.getItem('webAuthToken')
      };
      Api.updatecustomer(data, headers)
                    .then(response => {
          const responseData = Common.getStatusForActionFailed(response.data.status);
          if (responseData == "200") {
            localStorage.setItem("selectedTheme","1.0")
            this.$router.push({ name: 'dashboard' });
          }

      });
    },
    hide() {
        this.isOpen = false;
      },
      closeEvent() {
        this.hide();
      },
  },
  mounted() { 
    this.userName = localStorage.getItem("customerfullName")
  },
};
</script>
