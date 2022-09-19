<template>
  <apexchart 
    v-if="loaded"
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
    basepath:{
      default: "bdd_json"
    },
    selectorname:{
      default: "midipile01"
    },
    filename:{
      default: "1110101107_route14.json"
    },
    batterylabel:{
      default: ["Midipile Challenge"]
    },
    batteryvalue:{
      default: [77],
    },
    chartheight:{
      default: 250
    },
    chartid:{
      default: 'battery'
    },
    colormin:{
      default: ["#1a7a30"]
    },
    colormax:{
      default: ["#1a7a30"]
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
      loaded: false,
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
  },
  methods: {
    getdatafromjson(basepath, selectorname, filename) {
      const jsondatapath = basepath + '/' + selectorname + '/' + filename;

      console.log('JSON path: ' + jsondatapath);

      try {
        fetch(jsondatapath)
          .then(response => response.json())
          .then(result => this.plotdata(result));
      } catch (e) {
        console.log('Error fetch JSON: ' + e);
        return;
      }
    },
    plotdata(jsondata) {
      console.log('In extractpath');
      console.log(jsondata);

      if (jsondata != undefined) {
        this.series = [jsondata.MidipileChallenge]
        this.loaded = true
        console.log('Load graph')
      }
    }
  },
  created() {
    this.getdatafromjson(this.basepath, this.selectorname, this.filename)
  }
}
</script>

<style>
</style>