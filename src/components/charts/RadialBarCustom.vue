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
  name: 'RadialBarCustom',
  components: {
    apexchart: VueApexCharts,
  },
  props:{
    radialchartlabel:{
      default: ["Mes véhicules"]
    },
    radialarraylabels:{
      default:['Midipile 01', 'Midipile 02', 'Midipile 03', 'Midipile 04', 'Midipile 05'] 
    },
    radialarrayvalues:{
      default: [76, 67, 61, 90, 99],
    },
    radialarraycolors:{
      default: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5', '#0078B5']
    },
    chartheight:{
      default: 300
    },
    chartid:{
      default: 'radial-custom'
    }
  },
  data () {
    return {
      options: {
        chart: {
          id: this.chartid
        },
        colors: this.radialarraycolors,
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
              margin: 10,
              size: "50%"
            },
            track: {
              background: '#E0E0E0',
              startAngle: -135,
              endAngle: 135,
            },
            dataLabels: {
              total: {
                show: true,
                label: this.radialchartlabel
              },
              value: {
                fontSize: "30px",
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
            gradientToColors: ["#1cf14c"],
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: this.radialarraylabels
      },
      series: this.radialarrayvalues
    }
  }
}
</script>

<style>
</style>