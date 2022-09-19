<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '0px' } : {}">

      <div class="col-xs-12 col-sm-12 col-md-7" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
        <q-card flat  >
            <q-card-section>
              <table-active></table-active>
            </q-card-section>

          <q-card-section>
            <popup-map
              :zoommap=[13]
            ></popup-map>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-4" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
        <q-card flat >
          <q-card-section>
            <table-actu
              :data3def="tabdata"
            ></table-actu>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="q-pa-md row q-gutter-md" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px', 'margin-top': '0px' } : {}">
      <div class="col-xs-12 col-sm-12 col-md-7" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
        <q-card flat >
          <q-card-section>
            <table-progress></table-progress>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-4" v-bind:style="$q.screen.lt.sm ? {'margin-left': '0px' } : {}">
          <q-card flat >
            <q-card-section>
              <div class="text-h6 text-grey-8">Mobility ECO Score</div>
                <radial-bar-custom
                  :radialarrayvalues=[85,77,91,80,86]
                ></radial-bar-custom>
            </q-card-section>
          </q-card>
        </div>
    </div>

  </q-page>
</template>

<script>

import LigneMenu from 'components/Menu/LigneMenu.vue'
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    TableActu: defineAsyncComponent(() => import('components/tables/TableActu')),
    TableActive: defineAsyncComponent(() => import('components/tables/TableActive')),
    RadialBarCustom: defineAsyncComponent(() => import('components/charts/RadialBarCustom.vue')),
    TableProgress: defineAsyncComponent(() => import('components/tables/TableProgress')),
    PopupMap: defineAsyncComponent(() => import('components/maps/PopupMap.vue'))
  },
  props:{
    tabdatadef:{
      default: [
        {
          name: 'Midipile 01',
          des: '28 nov 2021 | 43,50 km | 1:46:11',
          avatar: "statics/images/M1.JPG",
          lien: "/1111128116_route18"
        },
        {
          name: 'Midipile 02',
          des: '28 nov 2021 | 55,82 km | 2:19:41',
          avatar: "statics/images/M2.JPG",
          lien: "/2111128114_route06"
        },
        {
          name: 'Midipile 03',
          des: '28 nov 2021 | 35,39 km | 1:28:11',
          avatar: "statics/images/M3.JPG",
          lien: "/3111128116_route02"
        },
        {
          name: 'Midipile 04',
          des: '28 nov 2021 | 29,36 km | 1:11:42',
          avatar: "statics/images/M4.JPG",
          lien: "/4111128114_route09"
        },
        {
          name: 'Midipile 05',
          des: '28 nov 2021 | 31,20 km | 1:11:38',
          avatar: "statics/images/M5.JPG",
          lien: "/5111128114_route13"
        }
      ]
    },
  },
  data () {
    LigneMenu
    return {
      loading: true,
      dialog: true,
      tabdata : this.tabdatadef
    }
  }
})
</script>
