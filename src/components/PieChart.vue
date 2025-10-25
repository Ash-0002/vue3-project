/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<script>
  import { Pie } from 'vue-chartjs'
  import Api from "@/Api";
  export default {
    extends: Pie,
    data () {
      return {
        chartData: {},
        labels_array : [], 
        data_array : [], 
        options: {
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        },
      }
    },
    mounted () {
      const data = {
          customerId: localStorage.getItem("customerId"),
          companyId: localStorage.getItem("companyId"),
          requestFrom: "WEB",
          startDate: '2018-04-01',
          endDate: '2023-03-31',
      };
      const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: localStorage.getItem("webAuthToken"),
      };

      Api.getExpensesReport(data, headers)
          .then((response) => {
            console.log(response.data.data.expenses);
          if (response.data.message == "AUTHENTICATION_FAILED") {
              localStorage.clear();
              window.location.href = "/";
          } else {
            
              for (let [key, value] of Object.entries(response.data.data.expenses)) {
                  alert(value.name);
                  this.labels_array.push(value.name);
                  this.data_array.push(Math.abs(value.amount));
              }
          }
          })
          this.chartData =  {
            labels: this.labels_array,
            datasets: [{
                borderWidth: 1,
                borderColor: [
                '#8cc63e',
                '#1a1a1a'         
                ],
                backgroundColor: [
                '#8cc63e',
                '#1a1a1a'              
                ],
                data: [1.42]
            }]
          }
          this.renderChart(this.chartData, this.options)
    }
  }
</script>