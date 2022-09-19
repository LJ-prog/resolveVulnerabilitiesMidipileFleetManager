<template>
  <apexchart
    type="bar"
    :options="options"
    :series="series"
    :height="chartheight"
  ></apexchart>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'ColumnLabel',
  components: {
    apexchart: VueApexCharts,
  },
  props:{
    stackedborderradius: {
      default: 10
    },
    /* stackedxaxistype: {
      default: 'datetime'
    }, */
    stackedxaxiscategories: {
      default: [
        '01/07/2021 GMT',
        '01/08/2021 GMT',
        '01/09/2021 GMT',
        '01/10/2021 GMT',
        '01/11/2021 GMT',
        '01/12/2021 GMT'
      ]
    },
    stackedseries:{
      default: [{
            name: 'Midipile 01',
            data: [44, 55, 41, 67, 22, 43]
          }, {
            name: 'Midipile 02',
            data: [13, 23, 20, 8, 13, 27]
          }, {
            name: 'Midipile 03',
            data: [11, 17, 15, 15, 21, 14]
          }, {
            name: 'Midipile 04',
            data: [11, 17, 15, 15, 21, 14]
          }, {
            name: 'Midipile 05',
            data: [21, 7, 25, 13, 22, 8]
      }]
    },
    chartheight:{
      default: 300
    },
    chartid:{
      default: 'stackedcolumn'
    }
  },
  data () {
    return {
      options: {
        chart: {
          id: this.chartid,
          stacked: true,
          toolbar: {show: true},
          zoom: {enabled: true}
        },
        plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: this.stackedborderradius
            },
        },
        xaxis: {
          type: this.stackedxaxistype,
          categories: this.stackedxaxiscategories
        },
        legend: {
            position: 'right',
            offsetY: 40
        },
      },
      series: this.stackedseries
    }
  }
}
</script>

<style>
</style>