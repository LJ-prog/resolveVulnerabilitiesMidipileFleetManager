<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '60px', 'margin-bottom' : '0px' } : {}">

      <div class="col-xs-12 col-sm-5 col-md-3" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
        <div class="text-h4" style="padding-bottom:16px">Midipile 05</div>
        <q-card class="my-card">
          <q-img src="/statics/images/M5.JPG"/>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-3" id="marginTable" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
              <table-actu id="borderTable"
              :data3def="tabdata"
            ></table-actu>
        </div>


      <div class="col-xs-12 col-sm-5 col-md-2" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
            <battery-radial id="borderTable"
              :batteryvalue=[86]
              :batterylabel="['Mobility ECO Score']"
              :colormin="['#1a7a30']"
              :colormax="['#1a7a30']"
            ></battery-radial>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-2" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
            <battery-radial id="borderTable"
              :batteryvalue=[77]
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
            :filename="['midipile05_stat_semaine.json']"
          ></JSONApexColumnLabel>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-5" v-bind:style="$q.screen.lt.sm ? {'margin-top': '48px', 'margin-left': '0px' } : {}">
        <div class="text-h6" style="padding: 16px">Suivi de consommation (W.h/km)</div>
          <JSONApexBasicLine id="borderTable"
            :filename="['midipile05_stat.json']"
          ></JSONApexBasicLine>
        </div>
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
          name: 'Guillaume',
          des: '28 nov 2021 | 31,20 km | 1:11:38',
          avatar: "statics/images/Guillaume.JPG",
          lien: "/5111128114_route13"
        },
        {
          name: 'Ehouarn',
          des: '28 nov 2021 | 28,65 km | 1:6:5',
          avatar: "statics/images/Ehouarn.JPG",
          lien: "/5111128107_route13"
        },
        {
          name: 'Vincent',
          des: '27 nov 2021 | 95,97 km | 3:30:39',
          avatar: "statics/images/Vincent.JPG",
          lien: "/5111127115_route14"
        },
        {
          name: 'Vincent',
          des: '27 nov 2021 | 21,99 km | 50:54',
          avatar: "statics/images/Vincent.JPG",
          lien: "/5111127109_route10"
        },
        {
          name: 'Guillaume',
          des: '26 nov 2021 | 70,24 km | 2:27:20',
          avatar: "statics/images/Guillaume.JPG",
          lien: "/5111126114_route05"
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
