<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-6 pl-0">
          <div class="company-status">
            <h4>CURRENT PERIOD</h4>
            <h5>{{ fiscalStartDate }} to {{ fiscalEndDate }}</h5>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-6 pr-0">
          <div class="company-status float-right">
            <h4 class="align-right">CURRENT DATE</h4>
            <h5 class="align-right">{{ currentDate }}</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="company-dashboard-table">
      <div class="table-responsive">
        <table class="table front-dashboard-table-set" width="100%">
          <thead>
            <tr>
              <th style="font-size: 10px;background:#fff;border-top:2px solid #5bbc21;border-bottom:1px solid #5bbc21 !important;">NAME OF COMPANY</th>
              <th style="font-size: 10px;background:#fff;border-top:2px solid #5bbc21;border-bottom:1px solid #5bbc21 !important;" width="25%" class="align-right">
                DATE OF LAST SYNC
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="companyNameTable selected-main-td selected-row">
              <td>{{ companyName }}</td>
              <td class="align-right">{{ formateDate(syncDate) }}</td>
            </tr>
          </tbody>
          </table>
          <div class="blank_space"></div>
          <div class="tally-dashboard-company-listing-set-scroll-auto">
            <table class="table front-dashboard-table-set" width="100%">
          <tbody>
            <tr
              class="companyNameTable"
              @click="
                searchSelectedCompany(companyList, company.companyData.id)
              "
              :class="{
                'selected-row': selectedIndex === company.companyData.id,
              }"
              v-for="(company, index) in companyList"
              :key="index"
            >
              <td>
                {{ company.companyData.companyName }}
                <em v-if="company._parentUserId != ''">
                  ({{ company.parentName }})
                </em>
              </td>
              <td class="align-right" width="25%">
                {{ formateDate(company.companyData.lastSyncDate) }}
              </td>
            </tr>
          </tbody>
          </table>
          </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/Api";
import moment from "moment";

export default {
  props: {
    isChanged: Boolean,
  },
  data() {
    return {
      
      selectedCompanyName: "",
      selectedIndex: "",
      companyList: [],
      selectedCompanySyncDate: "",
    
    };
  },

  computed: {
    companyName() {
      if (this.$store.state.tallyStore.currentCompanyName) {
        return this.$store.state.tallyStore.currentCompanyName;
      } else {
        return this.selectedCompanyName;
      }
    },

    syncDate() {
      if (this.$store.state.tallyStore.selectedCompanySyncDate) {
        return this.$store.state.tallyStore.companySyncDate;
      } else {
        return this.selectedCompanySyncDate;
      }
    },

    fiscalStartDate() {
      return moment(
        this.$store.state.tallyStore.startFrom,
        "DD-MM-YYYY"
      ).format("DD-MMM-YY");
    },

    fiscalEndDate() {
      return moment(this.$store.state.tallyStore.endDate, "DD-MM-YYYY").format(
        "DD-MMM-YY"
      );
    },

    currentDate() {
      return moment(
        this.$store.state.tallyStore.currentDate,
        "DD-MM-YYYY"
      ).format("dddd, DD-MMM-YYYY");
    },
   
  },

  

  methods: {
    getCompany() {
      const data = {
        _userId: localStorage.getItem("customerId"),
        requestFrom: "WEB",
      };

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };

      Api.getCompany(data, headers).then((response) => {
        if (response.data.message == "AUTHENTICATION_FAILED") {
     
        } else {
          this.companyList = response.data.data.list;
          this.searchSelectedCompany(this.companyList, this.selectedIndex);
       
        }
      });
    },

    searchSelectedCompany(companyObject, companyId) {
      const returnedObject = companyObject.find(
        (company) => company.companyData.id === companyId
      );
      this.selectedCompanyName = returnedObject.companyData.companyName;
      this.selectedCompanySyncDate = returnedObject.companyData.lastSyncDate;

      this.$store.commit(
        "tallyStore/setCurrentCompanyName",
        this.selectedCompanyName
      );
      this.$store.commit(
        "tallyStore/setSelectedCompanySyncDate",
        this.selectedCompanySyncDate
      );

      this.$store.commit("tallyStore/setCompanyId", companyId);

  

      localStorage.setItem("currentCompanyName", this.selectedCompanyName);
      localStorage.setItem("companyId", companyId);

      this.selectedIndex = companyId;
    },

    formateDate(date) {
      if (date) {
        return moment(date).format("DD-MMM-YYYY");
      } else {
        return "";
      }
    },
  },

  mounted() {
    this.selectedIndex = localStorage.getItem("companyId");
  
    this.getCompany();
  },
};
</script>

<style scoped>
.companyNameTable:hover {
  background: #fff;
}

.selected-row {
  background-color: #fff;
}

tr.selected-main-td.selected-row td {
  color: #000 !important;
  font-size: 12px !important;
  font-weight: 700 !important;
}

.blank_space {
  height: 40px;
}
</style>
