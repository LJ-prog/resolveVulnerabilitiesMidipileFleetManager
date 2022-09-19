<template>
  <apexchart
    type="area"
    :options="options"
    :series="series"
    :height="chartheight"
  ></apexchart>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'Spark',
  components: {
    apexchart: VueApexCharts,
  },
  props:{
    stackedseries:{
      default: [{
            name: 'stat conso',
            data: [22.5,23.6,23.4,23.7,22.8,23.3,22.9,23.2]
      }]
    },
    chartheight:{
      default: 300
    },
    chartid:{
      default: 'Score'
    },
    yaxismin:{
      default: 0
    },
    titletext:{
      default: 'ECO SCORE'
    },
    subtitletext:{
      default: 'Communauté Midipile'
    }
  },
  data () {
    return {
      options: {
        chart: {
          id: this.chartid,
          stacked: true,
          sparkline: {
            enabled: true
          },
        },
        xaxis: {
          crosshairs: {
          width: 1
          }
        },
        yaxis: {
          min: this.yaxismin
        },
        legend: {
            position: 'right',
            offsetY: 40
        },
        title: {
          text: this.titletext,
          offsetX: 0,
          style: {
            fontSize: '24px',
          }
        },
        subtitle: {
          text: this.subtitletext,
          offsetX: 0,
          style: {
            fontSize: '14px',
          }
        }
      },
      series: this.stackedseries
    }
  }
}
</script>

<style>
</style>