<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '60px', 'margin-bottom' : '0px' } : {}">

      <div class="col-xs-12 col-sm-5 col-md-3" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
        <div class="text-h4" style="padding-bottom:16px">Midipile 03</div>
        <q-card class="my-card">
          <q-img src="/statics/images/M3.JPG"/>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-3" id="marginTable" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
              <table-actu id="borderTable"
              :data3def="tabdata"
            ></table-actu>
        </div>


      <div class="col-xs-12 col-sm-5 col-md-2" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
            <battery-radial id="borderTable"
              :batteryvalue=[91]
              :batterylabel="['Mobility ECO Score']"
              :colormin="['#1a7a30']"
              :colormax="['#1a7a30']"
            ></battery-radial>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-2" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
            <battery-radial id="borderTable"
              :batteryvalue=[87]
              :batterylabel="['Midipile Challenge']"
              :colormin="['#103e47']"
              :colormax="['#103e47']"
            ></battery-radial>

      </div>

    </div>

    <div class="q-pa-md row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '16px', 'margin-bottom' : '0px' } : {}">
      <div class="col-xs-12 col-sm-5 col-md-5" v-bind:style="$q.screen.lt.sm ? {'margin-top': '0px', 'margin-left': '0px' } : {}">
        <div class="text-h6" style="padding: 16px">Distance hebdomadaire</div>
          <JSONApexColumnLabel id="borderTable"
            :filename="['midipile03_stat_semaine.json']"
          ></JSONApexColumnLabel>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-5" v-bind:style="$q.screen.lt.sm ? {'margin-top': '48px', 'margin-left': '0px' } : {}">
        <div class="text-h6" style="padding: 16px">Suivi de consommation (W.h/km)</div>
          <JSONApexBasicLine id="borderTable"
            :filename="['midipile03_stat.json']"
          ></JSONApexBasicLine>      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    TableActu: defineAsyncComponent(() => import('components/tables/TableActu')),
    BatteryRadial: defineAsyncComponent(() => import('components/charts/BatteryRadial.vue')),
    JSONApexColumnLabel: defineAsyncComponent(() => import('components/charts/JSONColumnLabel.vue')),
    JSONApexBasicLine: defineAsyncComponent(() => import('components/charts/JSONBasicLine.vue'))
},
  props:{
    tabdatadef:{
      default: [
        {
          name: 'Vincent',
          des: '28 nov 2021 | 35,39 km | 1:28:11',
          avatar: "statics/images/Vincent.JPG",
          lien: "/3111128116_route02"
        },
        {
          name: 'Benoit',
          des: '28 nov 2021 | 70,47 km | 2:51:12',
          avatar: "statics/images/Benoit.JPG",
          lien: "/3111128107_route05"
        },
        {
          name: 'Sebastien',
          des: '27 nov 2021 | 65,72 km | 2:39:12',
          avatar: "statics/images/Sebastien.JPG",
          lien: "/3111127117_route08"
        },
        {
          name: 'Vincent',
          des: '27 nov 2021 | 44,13 km | 1:49:9',
          avatar: "statics/images/Vincent.JPG",
          lien: "/3111127107_route18"
        },
        {
          name: 'Sebastien',
          des: '26 nov 2021 | 46,4 km | 1:44:7',
          avatar: "statics/images/Sebastien.JPG",
          lien: "/3111126114_route12"
        }
      ]
    },
  },
  data () {
    return {
      loading: true,
      dialog: true,
      tabdata : this.tabdatadef
    }
  }
})
</script>
