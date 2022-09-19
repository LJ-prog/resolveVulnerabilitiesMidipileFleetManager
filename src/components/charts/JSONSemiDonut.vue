<template>
  <apexchart
    v-if="loaded"
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
    basepath:{
      default: "bdd_json"
    },
    selectorname:{
      default: "midipile01"
    },
    filename:{
      default: "1110101107_route14.json"
    },
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
      loaded: false,
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
        this.series = [jsondata.stat_tot_cycliste,jsondata.stat_tot_photo,jsondata.stat_tot_rege]
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

.apexcharts-legend-text {
  color: var(--q-textcolor) !important;
}

</style>
