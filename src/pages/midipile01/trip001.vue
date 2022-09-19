<template>
  <q-page>
    <div class="q-pa-md row q-gutter-md">

      <div class="col-xs-12 col-sm-6 col-md-5">
        <q-card flat bordered >
          <q-card-section>
            <popup-map></popup-map>
          </q-card-section>
        </q-card>
      </div>
     
      <div class="col-xs-12 col-sm-5 col-md-3">
        <q-card flat >
            <q-card-section>
              <table-trip-stat class="col-6"></table-trip-stat>
            </q-card-section>
          </q-card>
        </div>


      <div class="col-xs-12 col-sm-4 col-md-3">
        <q-card flat >
          <q-card-section>
            <battery-radial 
              :batteryvalue=[85]
              :batterylabel="['Mobility ECO Score']"
              :colormin="['#1a7a30']"
              :colormax="['#1a7a30']"
            ></battery-radial>
          </q-card-section>
        </q-card>
      </div>

    </div>

    <div class="q-pa-md row q-gutter-md">
     <div class="col-xs-12 col-sm-12 col-md-12">
        <apex-basic-line></apex-basic-line>
        <apex-basic-line></apex-basic-line>
      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    BatteryRadial: defineAsyncComponent(() => import('components/charts/BatteryRadial.vue')),
    ApexBasicLine: defineAsyncComponent(() => import('components/charts/BasicLine.vue')),
    TableTripStat: defineAsyncComponent(() => import('components/tables/TableTripStat')),
    PopupMap: defineAsyncComponent(() => import('components/maps/PopupMap.vue'))
},
  data () {
    return {
      loading: true,
      dialog: true,
    }
  }
})
</script>
