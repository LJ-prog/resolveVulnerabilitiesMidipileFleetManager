<template>
  <apexchart 
    type="donut"
    :options="options"
    :series="series"
    :height="chartheight"
  ></apexchart>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'SemiDonut',
  components: {
    apexchart: VueApexCharts,
  },
  props:{
    donutchartlabel:{
      default: ["Postes d'auto-production"]
    },
    donutarraylabels:{
      default:['Cycliste', 'Solaire', 'Régénération'] 
    },
    donutarrayvalues:{
      default: [11,8,4],
    },
    donutarraycolors:{
      default: ['#1ab7ea', '#0084ff', '#39539E']
    },
    chartheight:{
      default: 300
    },
    chartid:{
      default: 'semi-donut'
    }
  },
  data () {
    return {
      options: {
        chart: {
          id: this.chartid
        },
        colors: this.donutarraycolors,
        plotOptions: {
          pie: {
            startAngle: -135,
            endAngle: 135,
            offsetY: 10,
            dataLabels: {
              total: {
                show: true,
                label: this.donutchartlabel
              },
              value: {
                fontSize: "30px",
                show: true
              }
            } 
          } 
        },
        labels: this.donutarraylabels
      },
      series: this.donutarrayvalues
    }
  }
}
</script>