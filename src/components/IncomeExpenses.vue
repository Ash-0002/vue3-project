/* 
(c) 2023 Livekeeping Technologies Pvt Ltd. 
License: Proprietary 
Version: 1.0.0
Date: September 26, 2023
Author: Kartik Champaneriya (Sr. Software Engineer)
Country: India
*/
<script>
  import { Bar } from 'vue-chartjs'
  export default {
    extends: Bar,
    data() {
      return {
        chartData: {
          labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"
          ],
         datasets: [
          {
            label: "Income",
            backgroundColor: "#c0ffc0",
            data: [400000, 150000, 300000, 250000, 100000, 50000, 200000, 350000, 450000, 210000, 180000, 330000],
          },
          {
            label: "Expenses",
            backgroundColor: "#ffb3b3",
            data: [150000, 50000, 350000, 500000, 250000, 100000, 450000, 200000, 150000, 135000, 20000, 345000],
          },
        ],
          
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
            xAxes: [{
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
    mounted() {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>