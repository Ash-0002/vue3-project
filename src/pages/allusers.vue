<template>
  <section>
    <div class="BillSuccessFullySent" v-if="toastMsg">
      <div class="ReportErrorMsg">
        <div class="IconTextSuccessBill">
          <span>{{ toastDisplayMsg }}</span>
        </div>
        <div class="CrossIconPart" @click="toastMsg = false">
          <img src="../assets/cross adnan.svg" />
        </div>
      </div>
    </div>
    <!-- loader add  -->
    <div v-if="new_loading" class="loader-wrapper">
      <div class="loading_css">
        <img src="assets/images/1.0/brand/Loader-GIF-Final.gif" class="img-fluid loader_css" height="40" width="40" />
      </div>
    </div>
    <!--end first card box-->
    <div class="main_card">
      <div class="card">
        <div class="row pt-1 pb-1">
          <div class="col-lg-4 col-12">
            <div class="HeadingPortionAllUsers">
              <h4>All Users</h4>
            </div>
          </div>
          <div class="col-lg-8 col-12">
            <div class="PurchaseUserPlusAdd">
              <ul class="">
                <li class="rigntmarginli10">
                  <div>
                    <a href="#" class="TotalUsersInUseusers">
                      Total Purchased-<span>{{ mainUserData[0].licenseDetails.noOfUserPurchased }} Users </span>
                    </a>
                  </div>
                </li>
                <li class="rigntmarginli10 pl-15px">
                  <div class="">
                    <a href="#" class="TotalUsersInUseusers">
                      In Use-<span>{{ mainUserData[0].licenseDetails.noOfUserUsed }} Users <i
                          class="fa fa-exclamation-circle" aria-hidden="true"></i></span>
                    </a>
                  </div>
                </li>
                <li class="rigntmarginli10">
                  <div v-if="!(isPaid == '' || isPaid == null)">
                    <a @click="handleExceedUserLimit" class="purchaseuserbutton" style="cursor: pointer;">
                      <img src="/assets/images/1.0/png/white-add.png" alt="img" class="table-icon-add" />
                      Add User
                      <!-- <img src="/assets/images/1.0/dashboard/lock-red.png" class="new_lock_white_sidebar mx-1" /> -->
                    </a>

                  </div>
                  <div v-else v-b-modal.customerstatus-popup>
                    <a href="javascript:void(0)" class="purchaseuserbutton">Add User
                      <img style="margin-left: 10px;" src="/assets/images/1.0/brand/crown-color.svg" loading="lazy" />
                    </a>
                  </div>
                </li>
                <li class="">
                  <a :href="canPurchase ? `https://pay.livekeeping.com/${mobileNumber}?u=1&utm=WEB` : null"
                    class="purchaseuserbutton" :title="!canPurchase && `You don't have access.Contact your admin`"
                    :target="canPurchase ? '_blank' : null" style="cursor: pointer;">
                    <img src="/assets/images/1.0/png/white-add.png" alt="img" class="table-icon-add" />
                    Purchase User
                    <img v-if="!canPurchase" src="/assets/images/1.0/dashboard/lock-red.png"
                      class="new_lock_white_sidebar mx-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="custom_table">
              <v-app id="inspire">
                <div class="show_entries_for_table new_show_entries_for_table">
                  <v-data-table :headers="headers" :items="userData" :page.sync="page" :items-per-page="itemsPerPage"
                    hide-default-footer class="elevation-1" @page-count="pageCount = $event">
                    <!-- <template v-slot:item.dateAdded="{ item }">
                      <td align="left"> Demo</td>
                    </template> -->
                    <template v-slot:item.name="{ item }">
                      <td align="left">
                        <router-link :to="getUserRoute(item)" class="onclick_details">
                          {{ item.name }}
                        </router-link>
                      </td>
                    </template>

                    <template v-slot:item.type="{ item }">
                      <td align="left">
                        <p>
                          {{ (item.userType) }} USER
                        </p>
                      </td>
                    </template>
                    <template v-slot:item.mobileNumber="{ item }">
                      <td align="left">
                        <p>
                          {{ item.mobile }}
                        </p>
                      </td>
                    </template>
                    <template v-slot:item.status="{ item }">
                      <td align="left">
                        <p>
                          {{ item.userType == "MAIN" ? "ADMIN" : item.userType }}
                        </p>
                      </td>
                    </template>
                    <template v-slot:item.action="{ item }">
                      <td align="center">
                        <a @click="handleUserAction(item)"
                          :class="item.userType !== 'MAIN' ? 'delete_icon_reports' : 'edit_icon_reports'">
                          <i :class="item.userType !== 'MAIN'
                              ? 'fa fa-trash'
                              : 'fa fa-pencil'
                            "></i>
                        </a>
                      </td>
                    </template>

                  </v-data-table>

                  <div class="bottom_navigation-pagination">
                    <v-pagination v-model="page" :length="pageCount" :total-visible="5"></v-pagination>
                  </div>
                </div>
              </v-app>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Simple Delete Confirmation Popup -->
    <div v-if="showDeletePopup" class="delete-popup-overlay-for-user-flow" @click.self="closePopup">
      <div class="delete-popup-for-user-flow text-center">
        <div class="DeleteIcon">
          <img src="/assets/images/1.0/png/circleDelete.png" />
        </div>
        <p>Are you sure you want to remove {{ userToDelete.name }}</p>
        <div class="popup-buttons-for-user-flow text-center">
          <button @click="cancelDelete" class="no-btn-for-user-flow">No</button>
          <button @click="confirmDelete" class="yes-btn-for-user-flow">Yes</button>
        </div>
      </div>
    </div>
    <div v-if="purchaseUser" class="delete-popup-overlay-for-user-flow" @click.self="purchaseUser = false">
      <div class="delete-popup-for-user-flow text-center">
        <!-- <div class="DeleteIcon">
          <img src="/assets/images/1.0/png/circleDelete.png" />
        </div> -->
        <p>Your user limit has baeen excedeed,
          Please purchase new user to proceed.</p>
        <div class="popup-buttons-for-user-flow text-center">
          <button @click="purchaseUser = false" class="yes-btn-for-user-flow">No</button>
          <button @click="purchaseLink" class="no-btn-for-user-flow">Proceed</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import Api from "@/Api";
import GoogleAnalytics from "@/GoogleAnalytics";


var numeral = require("numeral");

Vue.filter("formatNumberParties", function (value) {
  return new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(
    value
  );
});

export default {
  name: "allusers",
  data() {
    return {
      isPaid: localStorage.getItem("isPaid"),
      headers: [
        // { text: "Date Added", value: "dateAdded", align: "left", sortable: false },
        { text: "Name", value: "name", align: "left", sortable: false },
        { text: "Type", value: "type", align: "left", sortable: false },
        { text: "Mobile Number", value: "mobileNumber", align: "left", sortable: false },
        { text: "Status", value: "status", align: "left", sortable: false },
        { text: "Action", value: "action", align: "center", sortable: false },
      ],
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,

      mainUserData: {},
      userData: [],

      loading: false,
      new_loading: false,
      showDeletePopup: false,
      userToDelete: null,

      toastMsg: false,
      toastDisplayMsg: "",
      purchaseUser: false,

      parentUserId: localStorage.getItem("_parentUserId"),
      customerId: localStorage.getItem("_customerId"),
      mobileNumber: localStorage.getItem('customermobile')
    };
  },

  computed: {
    canPurchase() {
      return !(this.parentUserId && this.customerId !== this.parentUserId);
    },
  },

  methods: {

    purchaseLink() {
      this.purchaseUser = false;
      window.open(`https://pay.livekeeping.com/${localStorage.getItem('customermobile')}?u=1&utm=WEB`, "_blank");
    },

    handleExceedUserLimit() {
      const license = this.mainUserData[0].licenseDetails;
      if (license.noOfUserPurchased === license.noOfUserUsed) {
        this.purchaseUser = true;
      } else {
        this.$router.push({ name: 'adduser' });
      }
    },

    getUserRoute(item) {
      if (item.userType === 'MAIN') {
        return { name: 'My Account' };
        // this.routeToProfile();
      } else {
        // this.$router.push("/addUser");
        return { name: 'adduser', query: { no: item.mobile, userId: item._id, name: item.name } };
      }
    },

    handleUserAction(item) {
      if (item.userType !== 'MAIN') {
        this.showDeletePopup = true;
        this.userToDelete = item;
      } else {
        this.routeToProfile(item); // or just `this.routeToProfile()` if no parameter is needed
      }
    },

    routeToProfile() {
      this.$router.push("/my-account");
    },

    closePopup() {
      this.showDeletePopup = false;
      this.userToDelete = null;
    },
    cancelDelete() {
      this.showDeletePopup = false;
      this.userToDelete = null;
    },
    async confirmDelete() {
      if (this.userToDelete) {
        this.toastDisplayMsg = await this.removeSubUser(this.userToDelete._id);
        this.toastMsg = true;
      }
      setTimeout(() => {
        this.toastMsg = false;
      }, 2000);
      this.closePopup();
      this.getSubUsers();
    },

    async getSubUsers(searchUser = "") {
      const data = {
        _userId: localStorage.getItem("customerId"),
        searchTerm: searchUser,
        requestFrom: "WEB"
      }

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      try {
        const response = await Api.getSubUsers(data, headers);
        if (response.data.status !== 200) {
          console.error("Error:-  " + response.data.message);
          return;
        }
        this.userData = response.data.data.list;
        this.mainUserData = this.userData.filter(user => user.userType == "MAIN");
      } catch (error) {
        console.log(error);
      }
    },

    async removeSubUser(id) {
      const data = {
        _userId: localStorage.getItem("customerId"),
        _id: id,
        requestFrom: "WEB"
      }

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      try {
        const response = await Api.removeSubUser(data, headers);
        if (response.data.status == 200) return response.data.message;
        this.removePermissions();
      } catch (error) {
        console.log(error);
      }
    },

    async removePermissions() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        company_id: localStorage.getItem("companyId"),
        parentUserId: localStorage.getItem("customerId"),
        requestFrom: "WEB"
      }

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      try {
        const response = await Api.removePermissions(data, headers);
        if (response.data.status !== 200) {
          console.error("Error:-  " + response.data.message);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getSubUsers();
  },
  mounted() {
    GoogleAnalytics.allUsers();
    // this.pageCount = Math.ceil(this.ledger.length / this.itemsPerPage);
  },

};
</script>
<style>
.edit_icon_reports {
  color: steelblue;
}
</style>