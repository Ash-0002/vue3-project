/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<script>
  import moment from 'moment'
  import Api from "@/Api";
  import { Line } from 'vue-chartjs'
  export default {
    extends: Line,
    data () {
      return {
        labels_array : [],
        data_array : [],
        chartData: {
            labels: [],
            datasets: [
              {
                label: 'Line Chart',
                data: [],
                fill: false,
                borderColor: '#8cc63e',
                backgroundColor: '#8cc63e',
                borderWidth: 2
              }
            ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    created() {
      
    },
    methods: {
      get_data(){
        const data = {
            customerId: localStorage.getItem("customerId"),
            companyId: localStorage.getItem("companyId"),
            startDate: moment(String("2022-04-01")).format('yyyy-MM-DD'),
            endDate: moment(String("2023-03-31")).format('yyyy-MM-DD'),
            voucherTypes : ["Sales","Credit Note"],
            groupByAmount : "Gross",
            startLimit: 0,
            endLimit: 10,
            requestFrom: "WEB"
        };
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: localStorage.getItem("webAuthToken"),
        };
        Api.getVouchersSummaryByYear(data, headers)
                .then((response) => {
            
            if(response.data.status != "0"){
              for (let [key, value] of Object.entries(response.data.data.list)) {
                  this.labels_array.push('abcd');
                 
                  this.data_array.push(Math.abs(response.data.data.list[key].totalAmount))
                 
              }
              
             
            }
            
        })
        
       
        console.log(this.labels_array);
        this.chartData.labels = this.labels_array;
        this.chartData.datasets[0].data = [100000];
        
      }
    },
    mounted () {
      this.get_data();
      this.renderChart(this.chartData, this.options);
    }
  }
</script>