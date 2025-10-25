/* (c) 2023 Livekeeping Technologies Pvt Ltd. License: Proprietary Version:
1.0.0 Date: September 26, 2023 Author: Kartik Champaneriya (Sr. Software
Engineer) Country: India */
<template>
  <section>
    <!--start first card box-->
    <div class="page-header-title-box bg-white-all-pages">
      <div class="row align-items-center">
        <div class="col-xl-12 col-lg-12 col-12">
          <div class="company_name sales_c_name mobile_padding_left_0">
            <h3 id="" class="partyName">Tally Company Backup</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="main_card">
      <div class="TallyDataBackupSection">
        <div class="row">
          <div class="col-lg-6 col-12"></div>
          <div class="col-lg-6 col-12">
            <!-- <div class="d-flex align-items-center justify-content-start" v-if="errorMessageForBackup !== ''">
          <p>
            {{ errorMessageForBackup }}
          </p>
          </div> -->
          <div class="BillSuccessFullySent" v-if="errorMessageForBackup !== ''">
          <div class="ReportErrorMsg">
            <div class="IconTextSuccessBill">
              <span>{{ errorMessageForBackup }}</span>
          </div>
        <div class="CrossIconPart" @click="CloseBillSuccesBox()">
          <img src="../assets/cross adnan.svg" />
        </div>
      </div>
    </div>
          </div>
        </div>
        <div class="row justify-content-center">
          
          <div class="col-lg-10 col-12">
            <div class="TallyDataBackupTopPart">
            <table width="100%" class="TableTallyDataBackup">
              <thead>
              <tr>
                <th>Last Backup Date</th>
                <th>File Name <span class="databackup-conpanyname">({{ companyName }})</span></th>
                <th style="text-align:center;">Action</th>
              </tr>
              </thead>
              <tbody>
                 <tr v-if="bkp_data_array.length === 0" style="border-bottom:none;">
                    <td colspan="3" style="text-align:center;color:#e13434;height:50px;">No Data Backup Found</td>
                  </tr>
                <tr v-for="(bkp, index) in bkp_data_array" :key="index">
                <td>{{ format_date(bkp.backUpDate) }}</td>
                <td>{{ bkp.fileName }}</td>
                <td align="center">
                  <a href="javascript:void(0);" @click="downloadFile(bkp.fileName)"> <img src="assets/images/1.0/png/email.png" class="TallyDataBackupMail" /></a>
                  <!-- <a href="javascript:void(0);" @click="downloadFile(bkp.fileName)"> <img src="assets/images/1.0/png/DownloadBlue.png" /></a> -->
                </td>
              </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Popup with Overlay -->
  <div v-if="showMailPopup" class="popup-overlay-Tally-DataBackup">
    <div class="popup-content-Tally-DataBackup">
      <div class="TallyDataBackupSuccess">
        <i class="fa fa-check"></i>
      </div>
      <h3>Data Backup Sent Successfully </h3>
      <p>On Email {{ this.email }}</p>
    </div>
  </div>

  </section>
</template>

<script>
import Api from "@/Api";
import Common from "@/Common";
import moment from "moment";
import GoogleAnalytics from "@/GoogleAnalytics";
export default {
  data() {
    return {
      errorMessageForBackup: '',
      tallydatabackup : "",
      companyName : localStorage.getItem('companyName'),
      bkp_data_array : [],
      showMailPopup: false,
      email: "",
      toastMsg: false,
    };
  },
  
  methods: {
    CloseBillSuccesBox() {
      this.errorMessageForBackup = "";
      this.toastMsg = false;
    },
    showToast() {
      // this.toastDisplayMsg = message;
      this.toastMsg = true;
      setTimeout(() => {
        this.toastMsg = false;
      }, 7000);
    },
    // bkp_data(){
    //   var data = {
    //     _userId : localStorage.getItem('customerId'),
    //     requestFrom : "WEB",
    //     company_id: localStorage.getItem("companyId"),
    //     companyNumber: localStorage.getItem('companyNumber')
    //   };
    //   const headers = {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //     token: localStorage.getItem("webAuthToken"),
    //   };
    //   Api.get_filter_by_companyGo(data, headers).then((response) => {
    //     if (response.data.message == "AUTHENTICATION_FAILED") {
    //       localStorage.clear();
    //       window.location.href = "/";
    //     } else {
    //       this.companyName = response.data.data.companyName;
    //       this.bkp_data_array = response.data.data.backUpDetails;
    //     }
    //   });
    // },
    getCompanyBackupDataFunction(){
      const data = {
        _userId: localStorage.getItem('customerId'),
        company_id: localStorage.getItem('companyId'),
        companyNumber: localStorage.getItem('companyNumber'),
        requestFrom: "WEB"
      }
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.getCompanyBackupData(data, headers)
      .then((response)=>{
        this.bkp_data_array = [];
        this.bkp_data_array = response.data.data.backUpDetails;
      })
    },
  
    format_date(value) {
      if (value) {
        if(value == "1900-01-01"){
          value ="-"
          return value
        }
        else{
          return moment(value, 'YYYY-MM-DD HH:mm:ss').format('DD MMM yyyy hh:mm:ss');
          
        }
      }
    },
    downloadFile(fileName){
      // const url = this.tallydatabackup;
      // const link = document.createElement('a');
      // link.href = url;
      // link.setAttribute('download', this.tallydatabackup);

      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
      this.send_bkp_file(fileName);
      GoogleAnalytics.TallyDataBackup_Download();
    },
    send_bkp_file(file){
      var data = {
        _userId : localStorage.getItem('customerId'),
        requestFrom : "WEB",
        company_id: localStorage.getItem("companyId"),
        companyNumber: localStorage.getItem("companyNumber"),
        email: localStorage.getItem("email"),
        fileName1 : file
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        token: localStorage.getItem("webAuthToken"),
      };
      Api.downloadBackup(data, headers)
      .then((response) => {
        if (response.data.message == "AUTHENTICATION_FAILED") {
          localStorage.clear();
          window.location.href = "/";
        } else {
          this.errorMessageForBackup = ''
          if(response.data.status == "1"){
          this.showMailPopup = true;

          // Auto-close the popup after 2 seconds
          setTimeout(() => {
            this.showMailPopup = false;
          }, 2000);
          }
        }
      })
      .catch((err)=>{
        this.errorMessageForBackup = ''
        if(err.response.data.message == "Key: 'DownloadBackupRequest.Email' Error:Field validation for 'Email' failed on the 'required' tag"){
          this.errorMessageForBackup = 'Please add Email in profile and take backup.'
        }    
        
      })
    }
  },

  mounted() {
    // this.bkp_data();
    GoogleAnalytics.Tally_DataBackup_page();
    this.email = localStorage.getItem("email");
    this.getCompanyBackupDataFunction();
  },
};
</script>

<style scoped>
.popup-overlay-Tally-DataBackup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Dark overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup-content-Tally-DataBackup {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 500px;
  width: 90%;
}

.popup-content-Tally-DataBackup h3 {
  margin-bottom: 1rem;
  font-size: 22px;
  color: #1a1a1a;
  font-weight:600;
}

.popup-content-Tally-DataBackup p {
  font-size: 14px;
  color: #333;
}
.TallyDataBackupSuccess{
  margin:10px 0 30px 0;
}
.TallyDataBackupSuccess i{
  font-size: 24px;
  color: #fff;
  background-color: #5bbc21;
  height:50px;
  width:50px;
  line-height:50px;
  text-align:center;
  border-radius: 50%;
  }
  img.TallyDataBackupMail {width: 16px !important;}
  .ReportErrorMsg {
  padding: 10px 10px;
  width: 390px;
}
@media only screen and (max-width:575px) {
.ReportErrorMsg {
    padding: 10px 10px;
    width: 300px;
  }
}
</style>
