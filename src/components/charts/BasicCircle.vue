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
  name: 'BasicCircle',
  components: {
    apexchart: VueApexCharts,
  },
  props:{
    circlelabel:{
      default: ['Pourcentage']
    },
    circlevalue:{
      default: [76],
    },
    chartheight:{
      default: 300
    },
    chartid:{
      default: 'basic-circle'
    },
    colorvalue:{
      default: ["#515151"]
    },
    colorlabel:{
      default: ["#7198be"]
    }
  },
  data () {
    return {
      options: {
        chart: {
          id: this.chartid
        },
        labels: this.circlelabel,
        stroke: {
          lineCap: "round"
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: "70%"
            }
          }
        },
        colors: this.colorlabel,
        fill: {
          colors: this.colorvalue
        }
      },
      series: this.circlevalue
    }
  }
}
</script>

<style>
</style>