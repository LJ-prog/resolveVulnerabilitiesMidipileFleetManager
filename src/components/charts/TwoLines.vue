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
    lineseriesname1:{
      default: 'TimeSeries'
    },
    lineseriesdata1:{
      default: [0,1,2,3],
    },
    lineseriesname2:{
      default: 'TimeSeries'
    },
    lineseriesdata2:{
      default: [2,3,4,5],
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
    colorvalue1:{
      default: ["#7198be"]
    },
    colorvalue2:{
      default: ["#5198be"]
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
        xaxis: {
          categories: this.linexaxiscategories
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
        name: this.lineseriesname1,
        data: this.lineseriesdata1,
        colors: this.colorvalue1
      },{
        name: this.lineseriesname2,
        data: this.lineseriesdata2,
        colors: this.colorvalue2
      }]
    }
  }
}
</script>

<style>
</style>