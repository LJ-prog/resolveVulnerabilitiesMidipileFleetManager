<template>

  <div id="chart"></div>
  <apexchart
    v-if="loaded"
    type="line"
    :options="options"
    :series="series1"
    :height="chartheight"
  >

  </apexchart>

  <q-icon class="space" name="mdi-information" style="left: 49.2%; bottom: 8.5%;" v-if="$q.platform.is.desktop">

    <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]" class="bg-primary">
      <strong>Dénivelé</strong> rencontré lors du trajet avec le véhicule.
      (<q-icon name="keyboard_arrow_down"/>)
    </q-tooltip>
  </q-icon>

  <q-icon name="mdi-information" style="left: 61.7%; bottom: 8.5%;" v-if="$q.platform.is.desktop">

    <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]" class="bg-primary">
      <strong>Vitesse moyenne </strong> à un instant t lors du trajet.
      (<q-icon name="keyboard_arrow_down"/>)
    </q-tooltip>
  </q-icon>

  <q-icon name="mdi-information" style="left: 48.8%; bottom: 8.5%; margin-right: 20%;" v-if="$q.platform.is.mobile">

    <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]" class="bg-primary">
      <strong>Dénivelé</strong> rencontré lors du trajet avec le véhicule.
      (<q-icon name="keyboard_arrow_down"/>)
    </q-tooltip>
  </q-icon>
  <q-icon name="mdi-information" style="left: 62.2%; bottom: 8.5%;" v-if="$q.platform.is.mobile">

    <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]" class="bg-primary">
      <strong>Vitesse moyenne </strong> à un instant t lors du trajet.
      (<q-icon name="keyboard_arrow_down"/>)
    </q-tooltip>
  </q-icon>




  <apexchart
    v-if="loaded"
    type="line"
    :options="options"
    :series="series2"
    :height="chartheight"
  ></apexchart>

  <q-icon name="mdi-information" style="left: 48.7%; bottom: 8.5%;" v-if="$q.platform.is.desktop">

    <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]" class="bg-primary">
      <strong>State</strong> of <strong>Charge</strong> = Etat du pack batterie fixe présent dans le véhicule.
      (<q-icon name="keyboard_arrow_down"/>)
    </q-tooltip>
  </q-icon>
  <q-icon name="mdi-information" style="left: 62.3%; bottom: 8.5%;" v-if="$q.platform.is.desktop">

    <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]" class="bg-primary">
      <strong>State</strong> of <strong>Charge</strong> = Etat des batteries mobiles présente dans le véhicule.
      (<q-icon name="keyboard_arrow_down"/>)
    </q-tooltip>
  </q-icon>

  <q-icon name="mdi-information" style="left: 48.6%; bottom: 8.5%; margin-right: 21.5%;" v-if="$q.platform.is.mobile">

    <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]" class="bg-primary">
      <strong>State</strong> of <strong>Charge</strong> = Etat du pack batterie fixe présent dans le véhicule.
      (<q-icon name="keyboard_arrow_down"/>)
    </q-tooltip>
  </q-icon>
  <q-icon name="mdi-information" style="left: 62%; bottom: 8.5%;" v-if="$q.platform.is.mobile">

    <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]" class="bg-primary">
      <strong>State</strong> of <strong>Charge</strong> = Etat des batteries mobiles présente dans le véhicule.
      (<q-icon name="keyboard_arrow_down"/>)
    </q-tooltip>
  </q-icon>


</template>

<script>
import VueApexCharts from "vue3-apexcharts";
// import Events  from 'quasar';
import { defineComponent } from "vue";
import { Tooltip } from 'leaflet/dist/leaflet-src.esm';

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
      default: "midipile01"
    },
    filename:{
      default: "1110101107_route14.json"
    },
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
      default: 250
    },
    chartid:{
      default: 'Line'
    },
    group:{
      default: 'social'
    },
    colorvalue1:{
      default: ["#292929"]
    },
    colorvalue2:{
      default: ["#2424ff"]
    },
    colorvalue3:{
      default: ["#7198be"]
    },
    colorvalue4:{
      default: ["#5198be"]
    },
    titletext:{
      default: "Titre"
    },
    description:{
      default: "SOC = State Of Charge"
    },

  },
  data () {
    return {
      loaded: false,
      options: {
        chart: {
          id: this.chartid,
          group: this.group,
        },

        title: {
          text: this.titletext,
          align: 'left'
        },

        xaxis: {
          categories: this.linexaxiscategories,
          labels: {
            hideOverlappingLabels: true,
          }
        },

        legend: {
          show: true,
          onItemHover: {
            highlightDataSeries: true
          },

          // Opts : {
          //   SeriesIndex,
          //   DataPointIndex,

          //   W: {
          //     Config,
          //     Globals
          //   },
          // },
          // TooltipHoverFormater: function(series1, Opts) {
          //     return series1 + ' - <strong>' + Opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
          // }

        },

        // theme: {
        //   mode: 'light',
        //   palette: 'palette1',
        // },

        yaxis: {
          labels: {
            minWidth: 40
          }
        },

      },
      series1: [{
        name: this.lineseriesname1,
        data: this.lineseriesdata1,
        colors: this.colorvalue1,
        description: this.description
      },{
        name: this.lineseriesname2,
        data: this.lineseriesdata2,
        colors: this.colorvalue2,
        description: this.description
      }],
      series2: [{
        name: this.lineseriesname1,
        data: this.lineseriesdata1,
        colors: this.colorvalue3,
        description: this.description
      },{
        name: this.lineseriesname2,
        data: this.lineseriesdata2,
        colors: this.colorvalue4,
        description: this.description
      }],

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
        this.series1 = [{
            name: 'Dénivelé (m)' + '<style type="text/css">' +
              'span.apexcharts-legend-marker' + '{' +
                  'margin-left:30px;' +

              '}' +
            '</style>',
            data: jsondata.ele,
            description: 'Le dénivelé du véhicule',
            colors: this.colorvalue1
          },{
             name: 'Vitesse (km/h)' // + '<style type="text/css">' +
            //   'span.apexcharts-legend-text' + '{' +
            //       'padding-right: 30px;' +

            //   '}' +
            /* '</style>'*/,
            data: jsondata.vitesse,
            description: 'Vitesse du véhicule',
            colors: this.colorvalue2
          },
          ],
        this.series2 = [{
            name: 'SOC fixe (%)',
            data: jsondata.SOC_fixe,
            description: 'Etat de la batterie fixe en pourcentage',
            colors: this.colorvalue3
          },{
            name: 'SOC mobile (%)',
            data: jsondata.SOC_mobile,
            description: 'Etat des batteries mobiles en pourcentage',
            colors: this.colorvalue4
          },
          ],
        this.options = {
          xaxis: {
            categories: jsondata.temps,
            labels: {
              hideOverlappingLabels: true,
              show: false,
              rotate: 0,
            }
          },
        }
        this.loaded = true
        console.log('Load graph')
      }
    },
    setLegendTooltip(){

        series1.forEach(function(cd,i){
          let idx = i + 1;
          let id = '.apexcharts-legend-series[rel="'+ idx +'"]';
          let tooltipHtml = '<div class="legend-tooltip-' + idx + '">'+ cd.description +'</div>';
          let tooltipCss =
            '<style type="text/css">' +
              '.legend-tooltip-' + idx + '{' +
                  'display: none;' +
                  'position: absolute;' +
                  'left: 25%;' +
                  'bottom: 40%;' +
                  'border: 1px solid red;' +
                  'border-radius: 2px;' +
                  'background-color: #eee;' +
                  'z-index: 1500;' +
                  'font-size: 13px;' +
                  'text-overflow: ellipsis;' +
                  'white-space: nowrap;' +
                  'overflow: hidden;' +
                  'width:110px;' +
              '}' +

              '.apexcharts-legend-series[rel="' + idx + '"] {' +
                    'position: relative;' +
              '}' +

              '.apexcharts-legend-series[rel="' + idx +'"]:not(.apexcharts-inactive-legend):hover > .legend-tooltip-' + idx + '{' +
                    'display: block' +
              '}' +
            '</style>';

          $(id).append(tooltipCss + tooltipHtml);
        })

        $(".apexcharts-legend").addClass("apexcharts-legend-default-overflow");

      },

    events: {
            updated: function(chartContext, config) {
                setLegendTooltip();
            },
            mounted: function(chartContext, config) {
                setLegendTooltip();
            }
          }

  },

  created() {
    this.getdatafromjson(this.basepath, this.selectorname, this.filename);
    // this.setLegendTooltip();
  }

}


</script>




<style scoped>


.apexcharts-legend-default-overflow {
  overflow: unset !important;
};

/* span.apexcharts-legend-text:hover {
  border: 1px solid red !important;
} */

/* span.apexcharts-legend-marker {
  margin-left: 30px !important;

} */
/*
@media only screen and (max-width: 768px) {
  .space {
  margin-right: 10%;
  };
};

@media only screen and (min-width: 768px) {
  .space {
  margin-right: 0%;
  };
}; */



</style>



