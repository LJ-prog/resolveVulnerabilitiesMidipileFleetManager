<template>
  <apexchart 
    type="radialBar"
    :options="options"
    :series="series"
    :height="chartheight"
  ></apexchart>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'BatteryRadial',
  components: {
    apexchart: VueApexCharts,
  },
  props:{
    batterylabel:{
      default: ["Battery"]
    },
    batteryvalue:{
      default: [77],
    },
    chartheight:{
      default: 300
    },
    chartid:{
      default: 'battery'
    },
    colormin:{
      default: ["#515151"]
    },
    colormax:{
      default: ["#7198be"]
    },
    linecap: {
      default: "round"
    },
    dasharray: {
      default: [0]
    }
  },
  data () {
    return {
      options: {
        chart: {
          id: this.chartid
        },
        colors: this.colormin,
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
              margin: 30,
              size: "60%"
            },
            track: {
              background: '#E0E0E0',
              startAngle: -135,
              endAngle: 135,
            },
            dataLabels: {
              name: {
                show: true,
              },
              value: {
                fontSize: "25px",
                show: true
              }
            } 
          } 
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            gradientToColors: this.colormax,
            stops: [0, 100]
          }
        },
/*         stroke: {
          lineCap: this.linecap,
          dashArray: this.dasharray
        }, */
        labels: this.batterylabel
      },
      series: this.batteryvalue
    }
  }
}
</script>

<style>
</style>