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
      default: []
    },
    batteryvalue:{
      default: [77],
    },
    chartheight:{
      default: 100
    },
    chartid:{
      default: 'battery'
    },
    colormin:{
      default: ["#A1543B"]
    },
    colormax:{
      default: ["#A1543B"]
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
            startAngle: -90,
            endAngle: 90,
            hollow: {
              margin: 10,
              size: "25%"
            },
            track: {
              background: '#E0E0E0',
              startAngle: -90,
              endAngle: 90,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                fontSize: "15px",
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
        stroke: {
          dashArray: 2
        },
        labels: this.batterylabel
      },
      series: this.batteryvalue
    }
  }
}
</script>