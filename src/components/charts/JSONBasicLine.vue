<template>
  <apexchart
    v-if="loaded"
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
    basepath:{
      default: "bdd_json"
    },
    selectorname:{
      default: "Stat"
    },
    filename:{
      default: "midipile01_stat.json"
    },
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
      default: "Suivi de tendance consommation (W.h/km)"
    }
  },
  data () {
    return {
      loaded: false,
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
        this.series = [{
            name: 'Consommation (W.h/km)',
            data: jsondata.stat_conso
          }],
        this.options = {
          xaxis: {
            categories: jsondata.des,
            labels: {
              show: false
            }
          }
        }
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