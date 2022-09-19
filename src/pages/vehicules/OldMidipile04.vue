<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '60px', 'margin-bottom' : '0px' } : {}">

      <div class="col-xs-12 col-sm-5 col-md-3" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
        <div class="text-h4" style="padding-bottom:16px">Midipile 04</div>
        <q-card class="my-card">
          <q-img src="/statics/images/M4.JPG"/>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-3" id="marginTable" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
              <table-actu id="borderTable"
              :data3def="tabdata"
            ></table-actu>
        </div>


      <div class="col-xs-12 col-sm-5 col-md-2" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
            <battery-radial id="borderTable"
              :batteryvalue=[80]
              :batterylabel="['Mobility ECO Score']"
              :colormin="['#1a7a30']"
              :colormax="['#1a7a30']"
            ></battery-radial>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-2" v-bind:style="$q.screen.lt.sm ? {'margin-top': '16px', 'margin-left': '0px' } : {}">
            <battery-radial id="borderTable"
              :batteryvalue=[72]
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
            :filename="['midipile04_stat_semaine.json']"
          ></JSONApexColumnLabel>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-5" v-bind:style="$q.screen.lt.sm ? {'margin-top': '48px', 'margin-left': '0px' } : {}">
        <div class="text-h6" style="padding: 16px">Suivi de consommation (W.h/km)</div>
          <JSONApexBasicLine id="borderTable"
            :filename="['midipile04_stat.json']"
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
          name: 'Benoit',
          des: '28 nov 2021 | 29,36 km | 1:11:42',
          avatar: "statics/images/Benoit.JPG",
          lien: "/4111128114_route09"
        },
        {
          name: 'Sebastien',
          des: '28 nov 2021 | 38,1 km | 1:32:24',
          avatar: "statics/images/Sebastien.JPG",
          lien: "/4111128108_route02"
        },
        {
          name: 'Guillaume',
          des: '27 nov 2021 | 42,57 km | 1:46:48',
          avatar: "statics/images/Guillaume.JPG",
          lien: "/4111127117_route01"
        },
        {
          name: 'Guillaume',
          des: '27 nov 2021 | 39,86 km | 1:27:2',
          avatar: "statics/images/Guillaume.JPG",
          lien: "/4111127107_route01"
        },
        {
          name: 'Guillaume',
          des: '26 nov 2021 | 35,75 km | 1:27:19',
          avatar: "statics/images/Guillaume.JPG",
          lien: "/4111126116_route11"
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
