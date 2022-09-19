<template>
  <apexchart
    type="line"
    :options="options"
    :series="series"
    :height="chartheight"
  ></apexchart>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'BasicLine',
  components: {
    apexchart: VueApexCharts,
  },
  props:{
    linexaxiscategories:{
      default: ['sept','oct','nov','dec'],
    },
    lineseriesname:{
      default: 'TimeSeries'
    },
    lineseriesdata:{
      default: [0,1,2,3],
    },
    chartheight:{
      default: 300
    },
    chartid:{
      default: 'Line'
    },
    group:{
      default: 'social'
    },
    colorvalue:{
      default: ["#7198be"]
    },
    titletext:{
      default: "Titre"
    }
  },
  data () {
    return {
      options: {
        chart: {
          id: this.chartid,
          group: this.group
        },
        colors: this.colorvalue,
        xaxis: {
          categories: this.linexaxiscategories,
          labels: {
              show: false,
          }
        },
        yaxis: {
          labels: {
            minWidth: 40
          }
        },
        title: {
          text: this.titletext,
          align: 'left'
        }
      },
      series: [{
        name: this.lineseriesname,
        data: this.lineseriesdata
      }]
    }
  }
}
</script>

<style>
</style>