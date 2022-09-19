<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '60px', 'margin-bottom' : '0px' } : {}">

      <div class="col-xs-12 col-sm-5 col-md-3" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
        <div class="text-h4" style="padding-bottom:16px">Midipile 02</div>
        <q-card class="my-card">
          <q-img src="/statics/images/M2.JPG"/>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-3" id="marginTable" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
              <table-actu id="borderTable"
              :data3def="tabdata"
            ></table-actu>
        </div>


      <div class="col-xs-12 col-sm-5 col-md-2" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
            <battery-radial id="borderTable"
              :batteryvalue=[77]
              :batterylabel="['Mobility ECO Score']"
              :colormin="['#1a7a30']"
              :colormax="['#1a7a30']"
            ></battery-radial>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-2" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
            <battery-radial id="borderTable"
              :batteryvalue=[68]
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
            :filename="['midipile02_stat_semaine.json']"
          ></JSONApexColumnLabel>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-5" v-bind:style="$q.screen.lt.sm ? {'margin-top': '48px', 'margin-left': '0px' } : {}">
        <div class="text-h6" style="padding: 16px">Suivi de consommation (W.h/km)</div>
          <JSONApexBasicLine id="borderTable"
            :filename="['midipile02_stat.json']"
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
          name: 'Ehouarn',
          des: '28 nov 2021 | 55,82 km | 2:19:41',
          avatar: "statics/images/Ehouarn.JPG",
          lien: "/2111128114_route06"
        },
        {
          name: 'Ehouarn',
          des: '28 nov 2021 | 80,20 km | 3:8:47',
          avatar: "statics/images/Ehouarn.JPG",
          lien: "/2111128109_route15"
        },
        {
          name: 'Guillaume',
          des: '27 nov 2021 | 31,25 km | 1:10:0',
          avatar: "statics/images/Guillaume.JPG",
          lien: "/2111127117_route13"
        },
        {
          name: 'Ehouarn',
          des: '27 nov 2021 | 66,1 km | 2:26:36',
          avatar: "statics/images/Ehouarn.JPG",
          lien: "/2111127109_route17"
        },
        {
          name: 'Vincent',
          des: '26 nov 2021 | 96,42 km | 3:51:35',
          avatar: "statics/images/Vincent.JPG",
          lien: "/2111126116_route14"
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
